/**
 * agents-radar: daily digest for AI CLI tools and OpenClaw.
 *
 * Env vars:
 *   LLM_PROVIDER        - "anthropic" | "openai" | "github-copilot" | "openrouter" (default: anthropic)
 *   GITHUB_TOKEN        - GitHub token for API access and issue creation
 *   DIGEST_REPO         - owner/repo where digest issues are posted (optional)
 *
 * Provider-specific env vars — see src/providers/ for full list.
 */

import fs from "node:fs";
import path from "node:path";
import {
  type GitHubItem,
  type RepoFetch,
  fetchRecentItems,
  fetchRecentReleases,
  fetchSkillsData,
  createGitHubIssue,
} from "./github.ts";
import {
  type RepoDigest,
  buildCliPrompt,
  buildPeerPrompt,
  buildComparisonPrompt,
  buildPeersComparisonPrompt,
  buildSkillsPrompt,
} from "./prompts.ts";
import {
  buildTrendingPrompt,
  buildHighlightsPrompt,
  buildDailyPicksPrompt,
  buildPaperPicksPrompt,
  type DailyPick,
  type DailyPicks,
  type PaperPick,
  type PaperPicks,
  type ReportHighlights,
} from "./prompts-data.ts";
import {
  callLlm,
  parseLlmJson,
  saveFile,
  autoGenFooter,
  warmDeepSeekCache,
  LLM_TOKENS_TRENDING,
} from "./report.ts";
import { buildCliReportContent, buildOpenclawReportContent } from "./report-builders.ts";
import {
  saveWebReport,
  saveTrendingReport,
  saveHnReport,
  savePhReport,
  saveArxivReport,
  saveHfReport,
  saveCommunityReport,
} from "./report-savers.ts";
import { loadWebState, fetchSiteContent, type WebFetchResult, type WebState } from "./web.ts";
import { fetchTrendingData, type TrendingData } from "./trending.ts";
import { fetchHnData, type HnData } from "./hn.ts";
import { fetchPhData, type PhData } from "./ph.ts";
import { fetchArxivData, type ArxivData } from "./arxiv.ts";
import { fetchConferencePaperData, type ConferencePaperData } from "./conference-papers.ts";
import { fetchHfData, type HfData } from "./hf.ts";
import { fetchDevtoData, type DevtoData } from "./devto.ts";
import { fetchLobstersData, type LobstersData } from "./lobsters.ts";
import { loadConfig } from "./config.ts";
import { toCstDateStr, toUtcStr } from "./date.ts";
import { type Lang, MSG, ISSUE_LABELS, CLI_ISSUE_TITLE, OPENCLAW_ISSUE_TITLE } from "./i18n.ts";

// ---------------------------------------------------------------------------
// Repo config — loaded from config.yml, falls back to built-in defaults
// ---------------------------------------------------------------------------

const {
  cliRepos: CLI_REPOS,
  skillsRepo: CLAUDE_SKILLS_REPO,
  openclaw: OPENCLAW,
  openclawPeers: OPENCLAW_PEERS,
} = loadConfig();

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

interface RecentPaperHistory {
  keys: Set<string>;
  titles: string[];
}

function paperTitleKey(title: string): string {
  return title
    .normalize("NFKC")
    .toLocaleLowerCase()
    .replace(/[\p{P}\p{S}\s]+/gu, "");
}

function recentPaperHistory(days = 30): RecentPaperHistory {
  if (!fs.existsSync("digests")) return { keys: new Set(), titles: [] };

  const dates = fs
    .readdirSync("digests", { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^\d{4}-\d{2}-\d{2}$/.test(entry.name))
    .map((entry) => entry.name)
    .sort()
    .slice(-days);

  const keys = new Set<string>();
  const titles: string[] = [];
  for (const date of dates) {
    const file = path.join("digests", date, "paper-picks.json");
    if (!fs.existsSync(file)) continue;
    try {
      const parsed = JSON.parse(fs.readFileSync(file, "utf-8")) as { picks?: PaperPick[] };
      for (const pick of parsed.picks ?? []) {
        if (typeof pick.title === "string" && pick.title.trim()) {
          const key = paperTitleKey(pick.title);
          if (!keys.has(key)) titles.push(pick.title);
          keys.add(key);
        }
      }
    } catch {
      console.log(`  [paper-picks] Could not read history from ${file}`);
    }
  }
  return { keys, titles };
}

async function generateComparison(prompt: string, lang: Lang, name: string): Promise<string> {
  try {
    return await callLlm(prompt);
  } catch (err) {
    console.error(`  [${name}] comparison unavailable after retries:`, err);
    return lang === "zh"
      ? "_今日横向对比暂时不可用；其余日报内容已正常生成。_"
      : "_Today's cross-repository comparison is temporarily unavailable; the rest of the digest was generated normally._";
  }
}

// ---------------------------------------------------------------------------
// Phase 1: Fetch
// ---------------------------------------------------------------------------

async function fetchAllData(
  since: Date,
  webState: WebState,
): Promise<{
  fetched: RepoFetch[];
  skillsData: { prs: GitHubItem[]; issues: GitHubItem[] };
  webResults: WebFetchResult[];
  trendingData: TrendingData;
  hnData: HnData;
  phData: PhData;
  arxivData: ArxivData;
  conferenceData: ConferencePaperData;
  hfData: HfData;
  devtoData: DevtoData;
  lobstersData: LobstersData;
}> {
  const allConfigs = [...CLI_REPOS, OPENCLAW, ...OPENCLAW_PEERS];
  console.log(
    `  Tracking: ${allConfigs.map((r) => r.id).join(", ")}, claude-code-skills, web, hn, ph, arxiv, conference papers, hf, devto, lobsters`,
  );

  const [
    fetched,
    skillsData,
    webResults,
    trendingData,
    hnData,
    phData,
    arxivData,
    conferenceData,
    hfData,
    devtoData,
    lobstersData,
  ] = await Promise.all([
    Promise.all(
      allConfigs.map(async (cfg) => {
        try {
          const [issuesRaw, prs, releases] = await Promise.all([
            fetchRecentItems(cfg, "issues", since),
            fetchRecentItems(cfg, "pulls", since),
            fetchRecentReleases(cfg.repo, since),
          ]);
          const issues = issuesRaw.filter((i) => !i.pull_request);
          console.log(
            `  [${cfg.id}] issues: ${issues.length}, prs: ${prs.length}, releases: ${releases.length}`,
          );
          return { cfg, issues, prs, releases };
        } catch (err) {
          console.error(`  [${cfg.id}] fetch failed: ${err}`);
          return { cfg, issues: [], prs: [], releases: [] };
        }
      }),
    ),
    fetchSkillsData(CLAUDE_SKILLS_REPO)
      .then((d) => {
        console.log(`  [claude-code-skills] prs: ${d.prs.length}, issues: ${d.issues.length}`);
        return d;
      })
      .catch((err) => {
        console.error(`  [claude-code-skills] fetch failed: ${err}`);
        return { prs: [] as GitHubItem[], issues: [] as GitHubItem[] };
      }),
    Promise.all([
      fetchSiteContent("anthropic", webState).catch((err): WebFetchResult => {
        console.error(`  [web/anthropic] fetch failed: ${err}`);
        return {
          site: "anthropic",
          siteName: "Anthropic (Claude)",
          isFirstRun: false,
          newItems: [],
          totalDiscovered: 0,
        };
      }),
      fetchSiteContent("openai", webState).catch((err): WebFetchResult => {
        console.error(`  [web/openai] fetch failed: ${err}`);
        return { site: "openai", siteName: "OpenAI", isFirstRun: false, newItems: [], totalDiscovered: 0 };
      }),
    ]),
    fetchTrendingData().catch(
      (): TrendingData => ({
        trendingRepos: [],
        searchRepos: [],
        trendingFetchSuccess: false,
      }),
    ),
    fetchHnData().catch((): HnData => ({ stories: [], fetchSuccess: false })),
    fetchPhData().catch((): PhData => ({ products: [], fetchSuccess: false })),
    fetchArxivData().catch((): ArxivData => ({ papers: [], fetchSuccess: false })),
    fetchConferencePaperData().catch((): ConferencePaperData => ({ sources: [], fetchSuccess: false })),
    fetchHfData().catch((): HfData => ({ models: [], fetchSuccess: false })),
    fetchDevtoData().catch((): DevtoData => ({ articles: [], fetchSuccess: false })),
    fetchLobstersData().catch((): LobstersData => ({ stories: [], fetchSuccess: false })),
  ]);

  return {
    fetched,
    skillsData,
    webResults,
    trendingData,
    hnData,
    phData,
    arxivData,
    conferenceData,
    hfData,
    devtoData,
    lobstersData,
  };
}

// ---------------------------------------------------------------------------
// Phase 2: LLM summaries
// ---------------------------------------------------------------------------

/** Call LLM with logging and error fallback. */
async function summarize(id: string, prompt: string, failMsg: string, maxTokens?: number): Promise<string> {
  console.log(`  [${id}] Calling LLM for summary...`);
  try {
    return await callLlm(prompt, maxTokens);
  } catch (err) {
    console.error(`  [${id}] LLM call failed: ${err}`);
    return failMsg;
  }
}

/** Summarize a repo's activity, returning a RepoDigest. Skips LLM if no data. */
async function summarizeRepo(
  { cfg, issues, prs, releases }: RepoFetch,
  prompt: string,
  noActivityMsg: string,
  failMsg: string,
): Promise<RepoDigest> {
  if (!issues.length && !prs.length && !releases.length) {
    console.log(`  [${cfg.id}] No activity, skipping LLM call`);
    return { config: cfg, issues, prs, releases, summary: noActivityMsg };
  }
  const summary = await summarize(cfg.id, prompt, failMsg);
  return { config: cfg, issues, prs, releases, summary };
}

async function generateSummaries(
  fetchedCli: RepoFetch[],
  fetchedOpenclaw: RepoFetch,
  skillsData: { prs: GitHubItem[]; issues: GitHubItem[] },
  fetchedPeers: RepoFetch[],
  trendingData: TrendingData,
  dateStr: string,
  lang: Lang = "zh",
): Promise<{
  cliDigests: RepoDigest[];
  openclawSummary: string;
  skillsSummary: string;
  peerDigests: RepoDigest[];
  trendingSummary: string;
}> {
  const noActivity = MSG.noActivity[lang];
  const fail = MSG.summaryFailed[lang];

  const [cliDigests, openclawSummary, skillsSummary, peerDigests, trendingSummary] = await Promise.all([
    Promise.all(
      fetchedCli.map((f) =>
        summarizeRepo(f, buildCliPrompt(f.cfg, f.issues, f.prs, f.releases, dateStr, lang), noActivity, fail),
      ),
    ),
    summarizeRepo(
      fetchedOpenclaw,
      buildPeerPrompt(
        fetchedOpenclaw.cfg,
        fetchedOpenclaw.issues,
        fetchedOpenclaw.prs,
        fetchedOpenclaw.releases,
        dateStr,
        50,
        30,
        lang,
      ),
      noActivity,
      fail,
    ).then((d) => d.summary),
    summarize(
      "claude-code-skills",
      buildSkillsPrompt(skillsData.prs, skillsData.issues, dateStr, lang),
      MSG.skillsFailed[lang],
    ),
    Promise.all(
      fetchedPeers.map((f) =>
        summarizeRepo(
          f,
          buildPeerPrompt(f.cfg, f.issues, f.prs, f.releases, dateStr, undefined, undefined, lang),
          noActivity,
          fail,
        ),
      ),
    ),
    (async () => {
      const hasData = trendingData.trendingRepos.length > 0 || trendingData.searchRepos.length > 0;
      if (!hasData) {
        return MSG.trendingNoData[lang];
      }
      return summarize(
        "trending",
        buildTrendingPrompt(trendingData, dateStr, lang),
        MSG.trendingFailed[lang],
        LLM_TOKENS_TRENDING,
      );
    })(),
  ]);

  return { cliDigests, openclawSummary, skillsSummary, peerDigests, trendingSummary };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  requireEnv("GITHUB_TOKEN");

  const now = new Date();
  const since = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const dateStr = toCstDateStr(now);
  const utcStr = toUtcStr(now);
  const digestRepo = process.env["DIGEST_REPO"] ?? "";

  const providerName = process.env["LLM_PROVIDER"] ?? "anthropic";
  console.log(`[${now.toISOString()}] Starting digest | provider: ${providerName}`);

  // Start the tiny cache warm-up while external sources are downloading, so it
  // adds virtually no wall-clock time before the larger LLM requests begin.
  const cacheWarmup = warmDeepSeekCache();

  // 1. Fetch all data in parallel
  const webState = loadWebState();
  const {
    fetched,
    skillsData,
    webResults,
    trendingData,
    hnData,
    phData,
    arxivData,
    conferenceData,
    hfData,
    devtoData,
    lobstersData,
  } = await fetchAllData(since, webState);
  await cacheWarmup;

  const peerIds = new Set(OPENCLAW_PEERS.map((p) => p.id));
  const fetchedCli = fetched.filter((f) => f.cfg.id !== OPENCLAW.id && !peerIds.has(f.cfg.id));
  const fetchedOpenclaw = fetched.find((f) => f.cfg.id === OPENCLAW.id)!;
  const fetchedPeers = fetched.filter((f) => peerIds.has(f.cfg.id));

  // 2. Daily reports are Chinese-only. English is preserved in the weekly
  // rollup, which can translate the Chinese daily source material once a week.
  console.log("  Generating Chinese summaries...");
  const zhSummaries = await generateSummaries(
    fetchedCli,
    fetchedOpenclaw,
    skillsData,
    fetchedPeers,
    trendingData,
    dateStr,
    "zh",
  );

  // 3. Generate the Chinese cross-repo comparisons.
  console.log("  Calling LLM for Chinese comparative analyses...");
  const makeOpenclawDigest = (): RepoDigest => ({
    config: OPENCLAW,
    issues: fetchedOpenclaw.issues,
    prs: fetchedOpenclaw.prs,
    releases: fetchedOpenclaw.releases,
    summary: zhSummaries.openclawSummary,
  });

  const [zhComparison, zhPeersComparison] = await Promise.all([
    generateComparison(buildComparisonPrompt(zhSummaries.cliDigests, dateStr, "zh"), "zh", "cli-zh"),
    generateComparison(
      buildPeersComparisonPrompt(makeOpenclawDigest(), zhSummaries.peerDigests, dateStr, "zh"),
      "zh",
      "peers-zh",
    ),
  ]);

  // 4. Build + save Chinese daily reports only.
  const cliContent = buildCliReportContent(
    zhSummaries.cliDigests,
    zhSummaries.skillsSummary,
    zhComparison,
    utcStr,
    dateStr,
    autoGenFooter("zh"),
    CLAUDE_SKILLS_REPO,
    "zh",
  );
  const openclawContent = buildOpenclawReportContent(
    fetchedOpenclaw,
    zhSummaries.peerDigests,
    zhSummaries.openclawSummary,
    zhPeersComparison,
    utcStr,
    dateStr,
    autoGenFooter("zh"),
    OPENCLAW,
    OPENCLAW_PEERS,
    "zh",
  );
  console.log(`  Saved ${saveFile(cliContent, dateStr, "ai-cli.md")}`);
  console.log(`  Saved ${saveFile(openclawContent, dateStr, "ai-agents.md")}`);

  await saveWebReport(webResults, webState, utcStr, dateStr, digestRepo, autoGenFooter("zh"), "zh");

  await Promise.all([
    saveTrendingReport(
      trendingData,
      zhSummaries.trendingSummary,
      utcStr,
      dateStr,
      digestRepo,
      autoGenFooter("zh"),
      "zh",
    ),
    saveHnReport(hnData, utcStr, dateStr, digestRepo, autoGenFooter("zh"), "zh"),
    savePhReport(phData, utcStr, dateStr, digestRepo, autoGenFooter("zh"), "zh"),
    saveArxivReport(arxivData, utcStr, dateStr, digestRepo, autoGenFooter("zh"), "zh"),
    saveHfReport(hfData, utcStr, dateStr, digestRepo, autoGenFooter("zh"), "zh"),
    saveCommunityReport(devtoData, lobstersData, utcStr, dateStr, digestRepo, autoGenFooter("zh"), "zh"),
  ]);

  // 5. Generate highlights for Telegram notification
  const readReport = (name: string): string | undefined => {
    const p = path.join("digests", dateStr, name);
    return fs.existsSync(p) ? fs.readFileSync(p, "utf-8") : undefined;
  };

  const zhReports: Record<string, string> = { "ai-cli": cliContent, "ai-agents": openclawContent };
  for (const [id, zhFile] of [
    ["ai-trending", "ai-trending.md"],
    ["ai-web", "ai-web.md"],
    ["ai-hn", "ai-hn.md"],
    ["ai-ph", "ai-ph.md"],
    ["ai-arxiv", "ai-arxiv.md"],
    ["ai-hf", "ai-hf.md"],
    ["ai-community", "ai-community.md"],
  ] as const) {
    const zh = readReport(zhFile);
    if (zh) zhReports[id] = zh;
  }

  console.log("  Generating Chinese highlights...");
  const highlights: Record<Lang, ReportHighlights> = { zh: {}, en: {} };
  try {
    highlights.zh = parseLlmJson<ReportHighlights>(
      await callLlm(buildHighlightsPrompt(zhReports, "zh"), 2048),
    );
  } catch (err) {
    console.error(`  [highlights] zh generation failed: ${err}`);
  }

  const highlightsPath = saveFile(JSON.stringify(highlights, null, 2), dateStr, "highlights.json");
  console.log(`  Saved ${highlightsPath}`);

  // 6. Build one cross-source editorial selection for readers who only want
  // today's highest-signal developments. The specialist reports remain intact.
  console.log("  Selecting today's AI must-reads...");
  const dailyPicks: DailyPicks = { picks: [] };
  try {
    const rawPicks = await callLlm(buildDailyPicksPrompt(zhReports), 2048);
    const parsed = parseLlmJson<DailyPicks>(rawPicks);
    if (Array.isArray(parsed.picks)) {
      dailyPicks.picks = parsed.picks
        .filter(
          (pick): pick is DailyPick =>
            typeof pick?.title === "string" &&
            typeof pick?.why === "string" &&
            typeof pick?.source === "string",
        )
        .slice(0, 10);
    }
  } catch (err) {
    console.error(`  [daily-picks] generation failed: ${err}`);
  }

  const picksJsonPath = saveFile(JSON.stringify(dailyPicks, null, 2), dateStr, "daily-picks.json");
  const picksMarkdown = [
    `# 今日 AI 必看 · ${dateStr}`,
    "",
    ...(dailyPicks.picks.length
      ? dailyPicks.picks.flatMap((pick, index) => [
          `${index + 1}. **${pick.title}**`,
          `   ${pick.why}`,
          `   ${pick.url ? `[来源：${pick.source}](${pick.url})` : `来源：${pick.source}`}`,
          "",
        ])
      : ["今天没有筛出足够高信号的必看条目；请查看下方专题日报。", ""]),
  ].join("\n");
  const picksMarkdownPath = saveFile(picksMarkdown, dateStr, "ai-picks.md");
  console.log(`  Saved ${picksJsonPath}`);
  console.log(`  Saved ${picksMarkdownPath}`);

  // 7. Build a compact research reading list from new ArXiv work and official
  // top-conference award / spotlight pages, without repeating recent picks.
  console.log("  Selecting today's paper reading list...");
  const paperPicks: PaperPicks = { picks: [] };
  const recentPapers = recentPaperHistory();
  const unseenArxivPapers = arxivData.papers.filter(
    (paper) => !recentPapers.keys.has(paperTitleKey(paper.title)),
  );
  const paperInput = { ...arxivData, papers: unseenArxivPapers };
  if (paperInput.papers.length || conferenceData.sources.length) {
    try {
      const rawPaperPicks = await callLlm(
        buildPaperPicksPrompt(paperInput, conferenceData, dateStr, recentPapers.titles),
        2048,
      );
      const parsed = parseLlmJson<PaperPicks>(rawPaperPicks);
      const arxivUrls = new Set(paperInput.papers.map((paper) => paper.url));
      if (Array.isArray(parsed.picks)) {
        paperPicks.picks = parsed.picks
          .filter(
            (pick): pick is PaperPick =>
              typeof pick?.title === "string" &&
              typeof pick?.takeaway === "string" &&
              typeof pick?.why === "string" &&
              typeof pick?.venue === "string" &&
              typeof pick?.url === "string" &&
              !recentPapers.keys.has(paperTitleKey(pick.title)) &&
              (arxivUrls.has(pick.url) ||
                conferenceData.sources.some(
                  (source) =>
                    source.venue === pick.venue &&
                    source.url === pick.url &&
                    source.text.includes(pick.title),
                )),
          )
          .slice(0, 5);
      }
    } catch (err) {
      console.error(`  [paper-picks] generation failed: ${err}`);
    }
  }

  const paperPicksJsonPath = saveFile(JSON.stringify(paperPicks, null, 2), dateStr, "paper-picks.json");
  const paperPicksMarkdown = [
    `# 今日论文精读 · ${dateStr}`,
    "",
    "> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并尽量均衡覆盖。",
    "",
    ...(paperPicks.picks.length
      ? paperPicks.picks.flatMap((pick, index) => [
          `${index + 1}. **${pick.title}** · \`${pick.venue}\``,
          `   **做什么：** ${pick.takeaway}`,
          `   **为什么读：** ${pick.why}`,
          `   [阅读论文](${pick.url})`,
          "",
        ])
      : ["今天没有筛出足够高质量的新论文；请查看 ArXiv AI 研究日报。", ""]),
  ].join("\n");
  const paperPicksMarkdownPath = saveFile(paperPicksMarkdown, dateStr, "ai-paper-picks.md");
  console.log(`  Saved ${paperPicksJsonPath}`);
  console.log(`  Saved ${paperPicksMarkdownPath}`);

  // 8. Create Chinese GitHub issues for CLI + OpenClaw.
  if (digestRepo) {
    const cliUrl = await createGitHubIssue(CLI_ISSUE_TITLE(dateStr, "zh"), cliContent, ISSUE_LABELS.cli.zh);
    console.log(`  Created CLI issue (zh): ${cliUrl}`);

    const ocUrl = await createGitHubIssue(
      OPENCLAW_ISSUE_TITLE(dateStr, "zh"),
      openclawContent,
      ISSUE_LABELS.openclaw.zh,
    );
    console.log(`  Created OpenClaw issue (zh): ${ocUrl}`);
  }

  console.log("Done!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
