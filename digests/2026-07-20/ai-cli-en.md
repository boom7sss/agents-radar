# AI CLI Tools Community Digest 2026-07-20

> Generated: 2026-07-19 22:56 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report: AI CLI Developer Tools Ecosystem

## 1. Ecosystem Overview

The AI CLI tools landscape on July 20, 2026 reveals a maturing ecosystem where reliability, session management, and cross-platform compatibility have overtaken raw feature velocity as primary community concerns. All seven tools show active development regardless of maturity gaps, but the dominant pattern is a *backlash against safety classifiers* (Claude Code, OpenAI Codex) and *session unrecoverability* (Kimi Code, Pi, Qwen Code) — indicating the shift from "does it work?" to "does it work reliably in production?" across the board. Claude Code leads in community engagement and release cadence, while OpenCode and Pi show rapid iteration on architecture (2.0 event sourcing, ACP protocol) that signals platform-level ambitions. A clear divergence emerges between tools optimized for individual developer workflows (Claude Code, Copilot CLI) versus those building toward multi-agent orchestration (OpenCode, Qwen Code, DeepSeek TUI).

---

## 2. Activity Comparison

| Tool | New Issues (24h) | PRs Active (24h) | Release Status | Community Engagement (Notable) |
|------|------------------|------------------|----------------|-------------------------------|
| **Claude Code** | ~10 hot issues | 10 PRs | **v2.1.215 shipped today** | Highest: 235👍 on #25719 (macOS CPU), 192👍 on voice (#3000) |
| **OpenAI Codex** | ~11 hot issues | 10 PRs | No new release | 19 PRs authored by `copyberry[bot]` — heavy automation |
| **Gemini CLI** | ~10 hot issues | 9 PRs | **v0.52.0-nightly shipped today** | Lower engagement (max 8👍 per issue) |
| **GitHub Copilot CLI** | ~10 hot issues | 1 PR | No new release | Zero upvotes on several critical bugs — niche but vocal base |
| **Kimi Code CLI** | ~6 issues active | 8 PRs | No new release | Lower volume but high signal: 13👍 for remote control (#1282) |
| **OpenCode** | ~11 hot issues | 10 PRs | No new release | 17👍 for TUI density (#9955) — strongest TUI ergonomics demand |
| **Pi** | ~10 hot issues | 10+ PRs | No new release | 7 comments on high CPU (#6792); 6 on OAuth (#4410 release-blocker) |
| **Qwen Code** | ~10 hot issues | 10 PRs (50 total) | **v0.20.0 stable + v0.20.1-preview shipped today** | Highest PR volume: 50 updated in 24h |
| **DeepSeek TUI** | ~7 open issues | 10 PRs (49 total) | No new release | 39 comments on agent adherence (#4032) — highest engagement |

**Key Insight:** Qwen Code leads in raw PR volume (50 updated), while Claude Code leads in community engagement metrics. OpenCode and Pi show the fastest architectural iteration (2.0, ACP). Copilot CLI has alarmingly low community reaction despite critical bugs.

---

## 3. Shared Feature Directions

| Category | Requirement | Tools Demanding It |
|----------|------------|-------------------|
| **Session Reliability** | Session unrecoverability / permanent bricking | Pi (#6832, #6819), Kimi Code (#2517, #2420), Qwen Code (#7156) |
| **Safety Classifier Refinement** | False positive reduction for legitimate dev work | Claude Code (#66613, #66879), OpenAI Codex (#21639) |
| **Subagent Scheduling** | Deadlock / resource starvation with concurrent agents | Qwen Code (#7254), Claude Code (#64080) |
| **Plan Mode UX** | Auto-switching plan→build, token waste, content leakage | OpenCode (#37789), Qwen Code (#6237, #6949), Copilot CLI (#4172) |
| **Memory / Context Management** | Retention policies, compaction, token tracking | OpenCode (#33356 — 13GB SQLite), Copilot CLI (#4183 — 5MB CAPI limit) |
| **Voice / Audio Support** | Push-to-talk, TTS, mid-turn streaming hooks | OpenAI Codex (#3000, 192👍), Kimi Code (#2511) |
| **Remote / Cross-Device** | Continue sessions from phone/browser/SSH | Kimi Code (#1282, 13👍), Pi (#5341 — SSH), Claude Code (#67086 — SSH indicators) |
| **Permission Model Hardening** | Sandbox boundary enforcement, globals protection | Claude Code (#63176, #67072), Gemini CLI (#28403 — variable expansion bypass) |
| **Windows Parity** | Shell handling, sandbox paths, argument parsing | Claude Code (multiple Win issues), OpenAI Codex (6+ Win bugs), Copilot CLI (#4564), Qwen Code (#7139) |
| **Agent Observability** | Token/context usage visibility, model attribution | Copilot CLI (#4174), Qwen Code (#6569 — subagent traces) |

**Most Cross-Cutting Need:** Session reliability and subagent scheduling — every tool with multi-agent support faces similar deadlock, state corruption, or trust issues.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|-----------|-------------|--------------|------------|-------------|-----------|----------|-----|-----------|--------------|
| **Primary Target User** | Solo devs, teams | Pro devs (Plus) | GCP/Gemini ecosystem | GitHub-centric | Plugin/skill power users | 2.0 architects | Cross-provider power users | OSS/cost-sensitive | OSS/Chinese market |
| **Core Differentiator** | Safety-first, VSCode integration | macOS/Windows desktop app, Voice | GCP-native, OAuth | GitHub issue/CI integration | Mid-turn streaming hooks | Event-sourcing 2.0 | ACP protocol, OpenRouter OAuth | Highest PR velocity, daemon-first | Blue Stage design system |
| **Release Cadence** | Daily (latest v2.1.215) | Moderate | Nightly (v0.52.0) | Slow (v1.0.72-0) | Moderate | Moderate (v1.18.1 Desktop) | Moderate (v0.80.10) | High (v0.20.0 stable) | Slow (v0.9.3) |
| **Provider Strategy** | Anthropic-only | OpenAI-only | Gemini-only | Multi (Anthropic+OpenAI) | Moonshot API | Multi (DeepSeek, Kimi, OpenAI) | OpenRouter, Upstage, Codex | Qwen-native + custom | Multi (xAI, Claude, OpenAI) |
| **Community Size** | Largest | Large | Small | Small | Medium | Medium | Medium | Medium | Small |
| **Key Pain Point** | Safety classifier false positives | Windows performance | Subagent reliability | Silent Voice failures | Session history bugs | SQLite bloat (2.0) | Session unrecoverability | Subagent model mutation | xAI OAuth broken |

**Key Differentiation Insights:**
- **Claude Code** leads in maturity but is paying down safety-classifier debt.
- **OpenCode** is the most architecturally ambitious (2.0 event sourcing, ACP protocol).
- **Gemini CLI** is the most security-conscious (variable expansion, OAuth hardening).
- **Qwen Code** has the fastest iteration cycle but also the most bugs.
- **Copilot CLI** is the slowest-evolving, with a narrow but loyal GitHub-ecosystem user base.

---

## 5. Community Momentum & Maturity

### Most Active Communities (by engagement depth)
1. **Claude Code** — Largest community, highest issue upvotes, fastest maintainer response (hotfix within hours of #37807).
2. **OpenCode** — Strong architectural discussion (2.0 event sourcing) and TUI ergonomics push.
3. **Qwen Code** — Highest PR velocity (50 updates/24h), but bugs outpace fixes.
4. **Pi** — Active contributor ecosystem (OpenRouter OAuth, Upstage provider).

### Most Rapidly Iterating Tools
1. **Qwen Code** — Shipped two releases today (v0.20.0 stable + v0.20.1-preview). Highest bug-to-fix churn.
2. **Claude Code** — Daily releases (v2.1.215 today), fast security response.
3. **Gemini CLI** — Nightly builds, urgent security patches (OAuth, variable expansion).
4. **OpenCode** — Significant architectural commits (event sourcing, `/goal` foundation), but slower stable releases.

### Most Mature Tools
1. **Claude Code** — Most stable release process, largest plugin ecosystem, longest feature history.
2. **OpenAI Codex** — Polished desktop experience, despite Windows regressions.
3. **GitHub Copilot CLI** — Lowest bug count, most conservative feature set.
4. **Pi** — Robust cross-provider support, mature ACP implementation.

### Emerging Maturity Concerns
- **Claude Code**: Safety classifier false positives threaten trust in a formerly mature tool.
- **OpenAI Codex**: Six concurrent Windows bugs suggest platform testing gaps.
- **Qwen Code**: High PR velocity with persistent regressions (subagent mutation fixed, then broken again).
- **Pi**: Session unrecoverability cluster (#6832, #6819, #6820) undermines production reliability.

---

## 6. Trend Signals

### What the Community Is Telling Us

1. **Safety Classifiers Have a Credibility Problem.** Claude Code's FABLE classifier false positives (#66613 et al.) and OpenAI Codex's hook-breaking updates (#21639) indicate the industry is over-indexing on safety automation at the expense of legitimate developer workflows. The backlash is strongest in security-hardening contexts — the very users classifiers should protect.

2. **Session Reliability Is the New Feature Parity.** Every major tool now faces *permanent session bricking* bugs — Pi (#6832), Kimi Code (#2517), Qwen Code (#7156). As users run longer agent sessions, the ability to recover from failures becomes table stakes. Tools without robust session persistence, rollback, and compaction will lose power users.

3. **Multi-Agent Scheduling Is Still Unresolved.** Claude Code (#64080 — 4x subagent fan-out), Qwen Code (#7254 — main agent starves sub-agents), and Gemini CLI (#21409 — indefinite hang) all struggle with concurrency management. No tool has solved this elegantly — the industry is still learning to orchestrate agent teams.

4. **Windows Remains the Uncanny Valley.** Across all tools, Windows-specific bugs cluster around shell parsing, sandbox paths, and argument handling. Windows users are underserved despite representing a significant market segment. The gap may widen as Mac/Linux-first tools prioritize Unix-specific features.

5. **Observability Is the Next Frontier.** Copilot CLI (#4174 — no token metrics in ACP), OpenCode (#33356 — 13GB SQLite), and Qwen Code (#6569 — subagent traces) all signal that teams need *visibility* into agent behavior. The ACP protocol (Pi, OpenCode) is emerging as the standard for this, but most tooling is still opaque.

6. **Voice Is Coming But Not Ready.** OpenAI Codex (#3000, 192👍) and Kimi Code (#2511, mid-turn streaming) show demand for voice interfaces, but Copilot CLI's silent ASR failures (#4024) and the absence of production-quality implementations indicate voice is still pre-1.0 for CLI tools.

7. **Remote/Cross-Device Workflows Are Heating Up.** Kimi Code (#1282, 13👍), Pi (#5341 — SSH), and Claude Code (#67086 — SSH indicators) all show users want to start work in the CLI and continue from other devices. This points to a future where CLI tools serve as *continuous, cloud-backed workstations* rather than terminal-only ephemeral sessions.

8. **Plugin/Skill Ecosystems Need Hardening.** Documentation drift (Claude Code PRs #79150, #79149), silent skill ignoring (Gemini CLI #21968), and plugin installation failures (OpenCode #37806) show that extensibility is fragile. The tools with the most plugins (Claude Code, OpenCode) also have the most documentation-vs-reality gaps.

### Reference Value for Developers

**For teams prioritizing stability:** Claude Code (despite safety classifier pain) offers the most mature release process and largest community safety net.

**For cost-conscious teams:** Pi and OpenCode provide the broadest provider flexibility (OpenRouter, local models, multiple API backends).

**For multi-agent workloads:** Qwen Code is iterating fastest, but Claude Code's subagent control improvements (v2.1.215) and OpenCode's event-sourcing architecture suggest more robust foundations.

**For enterprise/Windows shops:** No tool excels here. Claude Code has the most Windows bug reports, OpenAI Codex has the worst Windows performance. Pi and Gemini CLI show the most proactive Windows path support.

**For security-conscious teams:** Gemini CLI's active security hardening (variable expansion, OAuth, shell wrappers) and Claude Code's permission model investment (despite gaps) lead the category.

**For voice/audio experimentation:** OpenAI Codex has the strongest community demand; Kimi Code's mid-turn streaming hooks (PR #2512) are the most architecturally forward-looking.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Snapshot:** 2026-07-20 | Source: github.com/anthropics/skills

---

## 1. Top Skills Ranking

The following Pull Requests have attracted the most community discussion and represent the Skills generating highest engagement:

### #1298 — Fix: `run_eval.py` Reports 0% Recall (Skill-Creator)
- **Status:** Open | **Created:** 2026-06-10 | **Author:** MartinCajiao
- **Functionality:** Core fix for the skill-creator evaluation pipeline — addresses why `run_eval.py` consistently reports `recall=0%` for all skill descriptions. The fix installs the eval artifact as a real skill, corrects Windows stream reading, trigger detection, and parallel worker issues.
- **Discussion highlights:** References issue #556 with 10+ independent reproductions. The description-optimization loop has been optimizing against noise, making all skill quality improvements invisible to the eval system.
- **GitHub:** [PR #1298](https://github.com/anthropics/skills/pull/1298)

### #514 — Add Document-Typography Skill
- **Status:** Open | **Created:** 2026-03-04 | **Author:** PGTBoos
- **Functionality:** Typographic quality control for generated documents — prevents orphan word wrap, widow paragraphs, and numbering misalignment. Targets the universally experienced problem of poor document layout in AI-generated output.
- **Discussion highlights:** Broader interest in document quality automation; the skill addresses pain points "every document Claude generates" produces.
- **GitHub:** [PR #514](https://github.com/anthropics/skills/pull/514)

### #538 — Fix Case-Sensitive File References in PDF Skill
- **Status:** Open | **Created:** 2026-03-06 | **Author:** Lubrsy706
- **Functionality:** Corrects 8 case-sensitivity mismatches between `SKILL.md` and actual file names (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`). Critical for case-sensitive filesystems (Linux/macOS).
- **Discussion highlights:** Highlights cross-platform compatibility as a recurring concern in the skills ecosystem.
- **GitHub:** [PR #538](https://github.com/anthropics/skills/pull/538)

### #486 — Add ODT Skill (OpenDocument Format)
- **Status:** Open | **Created:** 2026-03-01 | **Author:** GitHubNewbie0
- **Functionality:** OpenDocument text creation, template filling, and ODT-to-HTML conversion. Triggers on "ODT", "ODS", "ODF", "OpenDocument", or "LibreOffice document" requests.
- **Discussion highlights:** Strong interest in document format interoperability, especially for open-source/ISO standard document workflows.
- **GitHub:** [PR #486](https://github.com/anthropics/skills/pull/486)

### #210 — Improve Frontend-Design Skill Clarity
- **Status:** Open | **Created:** 2026-01-05 | **Author:** justinwetch
- **Functionality:** Revises the frontend-design skill for clarity, actionability, and internal coherence — ensuring every instruction is executable within a single conversation.
- **Discussion highlights:** Represents community desire for _actionable_ rather than _descriptive_ Skills. Skill usability and specificity are key themes.
- **GitHub:** [PR #210](https://github.com/anthropics/skills/pull/210)

### #83 — Add Skill-Quality-Analyzer and Skill-Security-Analyzer (Meta Skills)
- **Status:** Open | **Created:** 2025-11-06 | **Author:** eovidiu
- **Functionality:** Two meta-skills for evaluating other Skills across five dimensions (Structure & Documentation, quality analysis) and security posture.
- **Discussion highlights:** Signals demand for _quality assurance tooling_ within the Skills ecosystem itself — meta-skills that help authors validate their submissions.
- **GitHub:** [PR #83](https://github.com/anthropics/skills/pull/83)

### #1367 — Add Self-Audit Skill (v1.3.0)
- **Status:** Open | **Created:** 2026-06-28 | **Author:** YuhaoLin2005
- **Functionality:** Two-phase audit — mechanical file verification followed by four-dimension reasoning quality audit in damage-severity priority order. Universal across projects and models.
- **Discussion highlights:** Newest high-traffic PR; aligns with growing community emphasis on _output quality gates_ and _verification pipelines_ before delivery.
- **GitHub:** [PR #1367](https://github.com/anthropics/skills/pull/1367)

---

## 2. Community Demand Trends

Analysis of the top community Issues reveals these most-anticipated Skill directions and infrastructure needs:

| Demand Area | Evidence | Signal Strength |
|---|---|---|
| **Cross-platform compatibility** | Issues #1061, #556, #1169; PRs #1298, #1099, #1050, #538 — Windows subprocess, encoding, case-sensitivity bugs dominate the issue tracker. The `skill-creator` toolchain is effectively broken on Windows. | **Very High** (6+ related issues/PRs) |
| **Skill quality & evaluation infrastructure** | Issue #556 (12 comments), #1169 (3 comments), #202 (8 comments); PR #83, #1367. The community wants better tooling to measure whether Skills actually work (trigger detection, recall/precision metrics, automated verification). | **High** |
| **Trust & namespace security** | Issue #492 (38 comments, 2 👍) — community Skills distributed under `anthropic/` namespace create trust boundary vulnerabilities. This is the single most commented issue. | **High** (security) |
| **Org-wide skill sharing & distribution** | Issue #228 (14 comments, 7 👍) — users need direct sharing mechanisms instead of manual file transfers via Slack. | **Moderate-High** |
| **Document format interoperability** | PRs #514 (typography), #486 (ODT), #538 (PDF fixes), #541 (DOCX bookmarks) — consistent demand for document generation quality and format support. | **Moderate** |
| **Reasoning quality gates / output verification** | Issue #1385, PR #1367 — new proposals for pre-delivery audit pipelines that catch reasoning errors before output is delivered. Emerging theme. | **Emerging** |
| **Agent governance & safety patterns** | Issue #412 (6 comments) — proposals for policy enforcement, threat detection, trust scoring in agent systems. | **Niche but vocal** |

---

## 3. High-Potential Pending Skills

These PRs have active discussion and are not yet merged — they may land in the near term:

| PR | Skill | Author | Created | Comments | Key Feature |
|---|---|---|---|---|---|
| [#525](https://github.com/anthropics/skills/pull/525) | Pyxel Retro Game Development | kitao | 2026-03-05 | Active | MCP server integration for Pyxel retro game engine; write → run → capture → iterate workflow |
| [#723](https://github.com/anthropics/skills/pull/723) | Testing Patterns | 4444J99 | 2026-03-22 | Active | Comprehensive testing stack: Testing Trophy model, AAA pattern, React Testing Library, accessibility testing |
| [#1302](https://github.com/anthropics/skills/pull/1302) | Color Expert | meodai | 2026-06-10 | Active | Color naming systems (ISCC-NBS, Munsell, XKCD, RAL), color space selection tables (OKLCH, OKLAB, CAM16) |
| [#181](https://github.com/anthropics/skills/pull/181) | SAP-RPT-1-OSS Predictor | amitlals | 2025-12-28 | Active | Tabular foundation model for predictive analytics on SAP business data |
| [#509](https://github.com/anthropics/skills/pull/509) | CONTRIBUTING.md (Docs) | narenkatakam | 2026-03-03 | Active | Addresses community health gap (25% GitHub score); five-section contribution guide |
| [#95](https://github.com/anthropics/skills/pull/95) | System Documentation & Flowcharts | TylerALofall | 2025-11-11 | Light | Evidence management system documentation (architecture, card lifecycle, workflows) |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for a reliable, cross-platform skill evaluation and quality assurance infrastructure** — the `skill-creator` toolchain's broken state on Windows and its inability to accurately measure skill trigger rates (consistently reporting 0% recall) is the single largest bottleneck preventing both skill development and ecosystem growth, with over a dozen independent reports converging on the same root causes.

---

# Claude Code Community Digest — 2026-07-20

## Today's Highlights

Claude Code shipped **v2.1.215**, a measured release that stops the agent from autonomously running `/verify` and `/code-review` skills—returning control to developers. Meanwhile, the issue tracker shows a surge of closed-but-recently-updated reports around **content policy false positives** and **model-switching mid-task**, signaling growing developer frustration with safety classifiers interfering in legitimate workflows. The PR queue is dominated by documentation alignment and shell compatibility fixes, suggesting a cleanup cycle underway.

## Releases

**[v2.1.215](https://github.com/anthropics/claude-code/releases/tag/v2.1.215)** (Live)
- Claude **no longer auto-invokes** `/verify` and `/code-review` skills. Developers must explicitly call them with `/verify` or `/code-review`. This reduces unnecessary tool invocations and gives back control over when these validation steps run.

No other versions published in the last 24 hours.

## Hot Issues

1. **[#64080](https://github.com/anthropics/claude-code/issues/64080) – Harness executes duplicated parallel tool_use blocks (6→24 subagent fan-out)**  
   *Bug, area:agents, 15 comments*  
   **Why it matters:** In multi-agent setups, the model re-emits identical parallel `tool_use` blocks before yielding, causing subagents to run 4x the intended count. This silently wastes compute and API costs. Community reaction is notable for the lack of upvotes despite high discussion volume—suggesting users may not realize they’re affected.

2. **[#35765](https://github.com/anthropics/claude-code/issues/35765) – No conversation status displayed in VSCode conversations list**  
   *Bug, area:ide, platform:vscode, 10 comments, 9 👍*  
   **Why it matters:** A regression that breaks visibility of conversation state in the VSCode extension. High engagement indicates heavy VSCode userbase impact.

3. **[#37581](https://github.com/anthropics/claude-code/issues/37581) – Cowork VM disk full on session start**  
   *Bug, area:cowork, 8 comments, 5 👍*  
   **Why it matters:** Cowork sessions boot with a full disk, blocking all Bash commands with `ENOSPC`. A fundamental reliability issue for the remote VM feature.

4. **[#66300](https://github.com/anthropics/claude-code/issues/66300) – Dataverse MCP connector write operations fail**  
   *Bug, platform:windows, area:mcp, 7 comments, 2 👍*  
   **Why it matters:** All write operations via the Dataverse MCP connector fail with a type mismatch on item parameters—a hard blocker for enterprise Windows/Azure developers.

5. **[#63176](https://github.com/anthropics/claude-code/issues/63176) – Claude modified global config without permission**  
   *Bug, area:sandbox, 5 comments, 2 👍*  
   **Why it matters:** A sandbox/permission boundary violation where Claude edited global configuration outside the allowed scope. Erodes trust in the agent’s permission model.

6. **[#66613](https://github.com/anthropics/claude-code/issues/66613) – FABLE usage policy false positives**  
   *Bug, area:model, 4 comments, 4 👍*  
   **Why it matters:** The new FABLE classifier is blocking legitimate use cases. High upvote-to-comment ratio signals broad user agreement that the classifier needs refinement.

7. **[#61580](https://github.com/anthropics/claude-code/issues/61580) – Launch preview panel leaks across chats**  
   *Bug, area:desktop, 4 comments, 3 👍*  
   **Why it matters:** In Claude Desktop, file edits in one chat hijack the preview panel in other active chats—a confusing behavior that breaks the mental model of isolated conversations.

8. **[#66989](https://github.com/anthropics/claude-code/issues/66989) – Agent view needs stable sort mode**  
   *Enhancement, area:agent-view, 3 comments, 1 👍*  
   **Why it matters:** The agent sessions list constantly reorders by status, making it hard to track sessions. Users want a fixed-order mode with status indicators instead.

9. **[#64502](https://github.com/anthropics/claude-code/issues/64502) – Disable "PR status couldn't be checked" notifications**  
   *Enhancement, area:ui, 3 comments, 3 👍*  
   **Why it matters:** Solo/no-PR workflows get spammed with a notification every ~60 seconds. Small fix, large quality-of-life impact.

10. **[#79221](https://github.com/anthropics/claude-code/issues/79221) – "Auto-fix CI" checkbox unresponsive in PR sidebar**  
    *Bug, regression, area:desktop, 1 comment*  
    **Why it matters:** A fresh regression blocking the PR CI automation panel. As the **only open issue with updates today**, it’s likely high on the team’s radar.

## Key PR Progress

1. **[#79237](https://github.com/anthropics/claude-code/pull/79237) – `_is_isolated_worktree` guard to prevent worktree mutation**  
   Prevents `spawn_task` from running `git checkout -b` on the parent repo checkout when the worktree isn’t a real git worktree. Critical for subagent safety.

2. **[#79210](https://github.com/anthropics/claude-code/pull/79210) – Strip ANSI escape fragments from model picker value**  
   Fixes `/model` persisting `[1m` escape codes (instead of the clean model ID) into `settings.json`. Practical fix for a configuration corruption bug.

3. **[#79211](https://github.com/anthropics/claude-code/pull/79211) – Remove stray `re` syntax error in `rule_engine.py`**  
   A syntax error in hookify’s rule engine was breaking hooks and incorrectly flagging computational work. Blocks downstream automation.

4. **[#79152](https://github.com/anthropics/claude-code/pull/79152) – Only log duplicate-comment metric when a duplicate was posted**  
   Fixes statsig logging that emitted a duplicate-comment event even when no comment was posted. Stops polluting analytics with false signals.

5. **[#79151](https://github.com/anthropics/claude-code/pull/79151) – Honor thumbs-down from any user when skipping duplicate auto-close**  
   Previously only the issue author’s 👎 was respected—now any user’s thumbs-down prevents auto-closure. Makes the dedupe bot’s documented promise truthful.

6. **[#79150](https://github.com/anthropics/claude-code/pull/79150) – Align code-review README with current command**  
   The README described a git-blame scoring pipeline that no longer exists. Documentation drift like this confuses new plugin contributors.

7. **[#79149](https://github.com/anthropics/claude-code/pull/79149) – Align commit-push-pr README with actual command**  
   Similarly, the README claimed full branch history analysis while the command only reads `git diff HEAD`. Misleading users about command capabilities.

8. **[#79148](https://github.com/anthropics/claude-code/pull/79148) – Add mandatory `hookify.` prefix to example rule filenames**  
   All four shipped hookify rule examples lack the `hookify.` prefix that the loader requires—they’re silently ignored when copied as documented.

9. **[#79140](https://github.com/anthropics/claude-code/pull/79140) – Use `disable-model-invocation` for ralph-wiggum commands**  
   Fixes a bug where `/ralph-loop` was accessible to the model via the Skill tool despite being user-only by design, which could trigger infinite loops.

10. **[#54094](https://github.com/anthropics/claude-code/pull/54094) – Quote `$CLAUDE_PLUGIN_ROOT` in plugin hook commands**  
    Still open after 84 days: hook commands fail when plugin paths contain spaces. A simple quoting fix with long tail impact for developers with spaces in their paths.

## Feature Request Trends

- **Content policy refinement** (multi-issue): Multiple requests (#66613, #66879, #66685, #67061) all ask for reduced false positives on technical/security terminology. The FABLE classifier is flagging phrases like "biology," "refactoring," and "hardening" without context—blocking legitimate development work.
- **Agent view usability** (#66989, #64502): Users want stable sort modes, configurable notifications, and less UI churn in the agent sessions panel.
- **MCP connector ergonomics** (#66820): Developers want disconnected platform connectors to be skipped automatically during context injection, rather than bloating the prompt or causing errors.
- **Model configuration** (#66248): Specific requests for a 1M context window option for Opus 4.6, indicating power users pushing against context limits.
- **SSH/remote indicators** (#67086): Desktop users need visual cues when connected to remote hosts via SSH.

## Developer Pain Points

1. **Safety classifier false positives dominate** – The most severe pain point across the tracker. Multiple reports (#66613, #66879, #66685, #67061, #67059) describe FABLE and other classifiers flagging standard code review, refactoring, and security-hardening tasks. Developers report model-switching mid-execution as a "punishment for doing security work."

2. **Permission model inconsistencies** – Issues like #63176 (global config tampering), #67072 (symlink paths bypassing permissions), and #67088 (permission prompts hidden behind input buffer) show the permission system still has gaps that undermine trust and safety guarantees.

3. **Windows sandboxing & shell brittleness** – Windows users report multiple issues (#67036, #67067, #67064) with hidden cmd.exe re-parsing, hook file accumulation, and OAuth session persistence after logout. The Windows experience still lags behind macOS/Linux in polish.

4. **Subagent scaling surprises** – Issue #64080 highlights a subtle but costly problem: duplicated parallel tool_use blocks causing subagents to run 4x the intended load. Without billing alerts, teams may not notice until the API bill arrives.

5. **Documentation-drift in plugins** – The PR cluster (#79150, #79149, #79148, #79139, #79131) all fix READMEs that describe commands or workflows that don’t exist anymore. This suggests the plugin documentation pipeline lacks automated validation against actual command implementations.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-20

## Today's Highlights
No new releases landed in the last 24 hours, but the engineering team pushed **19 pull requests** — nearly all authored by `copyberry[bot]` — targeting terminal UI performance, memory efficiency, and thread/pagination infrastructure. Meanwhile, Windows performance issues dominate the issue tracker, with **six new Windows-specific bugs** filed or updated today, including runaway CPU from WMI Provider Host and a critical AppHang cycle in Codex 26.715.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#25719 — macOS `syspolicyd`/`trustd` CPU runaway](https://github.com/openai/codex/issues/25719)**
   - **Comments: 61 | 👍 235**
   - Codex Desktop triggers persistent code-signing daemon CPU/memory spikes on macOS. Community reaction is intense, with 235 upvotes — the most of any open issue.

2. **[#20214 — Windows 11 freezes/stutters](https://github.com/openai/codex/issues/20214)**
   - **Comments: 54 | 👍 67**
   - Long-standing complaint: sufficient system resources (32 GB RAM, Ryzen 5) but the app freezes. High engagement suggests this is a top regression for Windows Plus users.

3. **[#3000 — Voice transcription for IDE extension](https://github.com/openai/codex/issues/3000)**
   - **Comments: 33 | 👍 192**
   - Oldest open enhancement on this tracker (2025-08-31); 192 upvotes. Users want push-to-talk dictation in the Codex panel. Related to #418 (CLI voice mode).

4. **[#33884 — Codex 26.715 periodic AppHang cycle on Windows](https://github.com/openai/codex/issues/33884)**
   - **Comments: 15 | 👍 0**
   - New in last 24h: a 15s hang / 10s responsive cycle pattern with build 26.715. Filed by a Pro subscriber on Windows 11 with i5-13600K.

5. **[#17229 — Orphan `git.exe`/`conhost.exe` processes on Windows](https://github.com/openai/codex/issues/17229)**
   - **Comments: 23 | 👍 6**
   - Repeated `git status --porcelain=v1 -z` spawning leaves orphaned processes. Related to PR #30235 (kill timed-out Git process groups).

6. **[#21639 — Hooks broken after Desktop update](https://github.com/openai/codex/issues/21639)**
   - **Comments: 22 | 👍 6**
   - Regression with `cli_version: 0.129.0-alpha.15`. Pro users report hooks silently stop running after update.

7. **[#32297 — Built-in image generation fails after July 9 update](https://github.com/openai/codex/issues/32297)**
   - **Comments: 14 | 👍 4**
   - Network error on image generation post-update. Persistent connectivity concern.

8. **[#34064 — Response speed dropped 3x starting July 13](https://github.com/openai/codex/issues/34064)**
   - **Comments: 2 | 👍 0**
   - 🔥🔥🔥🔥-tagged by user. Claims GPT-5.6-Sol / 5.5-Pro latency regression with slow SSE streaming. Freshly filed.

9. **[#29499 — WMI Provider Host high CPU on Windows](https://github.com/openai/codex/issues/29499)**
   - **Comments: 8 | 👍 8**
   - Codex startup triggers WMI provider CPU usage. Two new related issues filed today (#34014, #34236), suggesting a pattern.

10. **[#33531 — MCP suites reach 10.9 GB private memory on Windows](https://github.com/openai/codex/issues/33531)**
    - **Comments: 3 | 👍 0**
    - MCP subagent suites persist after completion, causing massive memory leaks. Build 26.707.9981.0.

11. **[#34220 — Resumed subagent loses completed status](https://github.com/openai/codex/issues/34220)**
    - **Comments: 2 | 👍 0**
    - Fresh today (2026-07-19). Multi-agent threads lose `Completed` status after app-server restart — critical for stateful agent workflows.

## Key PR Progress

1. **[#30235 — Kill timed-out Git status process groups](https://github.com/openai/codex/pull/30235)**
   - Addresses #17229 orphan process issue on Unix. Runs `git status` in its own process group; kills the group on timeout.

2. **[#34234 — Avoid redundant TUI subagent metadata requests](https://github.com/openai/codex/pull/34234)**
   - Performance fix: skips unnecessary loaded-subagent backfills for fresh/forked threads. Keeps backfill only on thread resume.

3. **[#34232 — Remeasure dynamic cells in transcript overlay](https://github.com/openai/codex/pull/34232)**
   - Fixes clipped content: cached cell heights are now invalidated when content changes (e.g., refreshed status output, new visualizations).

4. **[#34229 — Persist names for paginated threads](https://github.com/openai/codex/pull/34229)**
   - Adds a nullable `name` column to persisted thread metadata, making paginated threads distinguishable without rollout writes.

5. **[#34218 — Track TUI command completion separately from output](https://github.com/openai/codex/pull/34218)**
   - Prevents premature command marking: app-server output deltas can trigger false completion before the command finishes.

6. **[#34217 — Keep incremental rendering with visualization context](https://github.com/openai/codex/pull/34217)**
   - Performance: inline visualization context no longer forces full rerender of streamed Markdown when no viz directives are present.

7. **[#34199 — Avoid liveness races when starting side conversations](https://github.com/openai/codex/pull/34199)**
   - Fixes race condition where `thread/started` notification arrives after fork response, causing false "unavailable" reports.

8. **[#34197 — Markdown collector as streaming source of truth](https://github.com/openai/codex/pull/34197)**
   - Returns committed byte ranges from `MarkdownStreamCollector`, enabling direct rendering without intermediate copies.

9. **[#34085 — Support legacy views for paginated thread history](https://github.com/openai/codex/pull/34085)**
   - Ensures `thread/resume` and `thread/turn_page` work consistently across legacy and paginated thread storage.

10. **[#34080 — Add audio output support to dynamic tools and code mode](https://github.com/openai/codex/pull/34080)**
    - Adds `inputAudio` content items to dynamic tool responses and a `audio()` helper supporting inline data URLs and MCP audio.

## Feature Request Trends

- **Voice/mic input** (#3000, #418): 192 upvotes, oldest open enhancement. Users want push-to-talk in the Codex IDE panel.
- **Unified ChatGPT+Codex entry point** (#32130): A single UI that auto-routes tasks to Chat, Work, or Codex capabilities.
- **Credit usage control** (#28382): Toggle to prevent automatic consumption of purchased Codex credits when included quota is exhausted.
- **Configurable worktree location** (#10599): 66 upvotes. Users need control over where Git worktrees are created.

## Developer Pain Points

- **Windows performance is the #1 pain point.** At least 8 of today's top issues touch Windows-specific bugs: AppHang cycles (#33884), WMI CPU spikes (#29499, #34014), DWM handle leaks (#33192), orphaned git processes (#17229), security TAC block (#34236), and multi-GB memory leaks from MCP (#33531).
- **Hooks and subagent state are fragile.** Hooks break after updates (#21639); subagent status resets after restart (#34220); tool schema/doco mislead agents about parameter support (#26948, #32430).
- **Image generation connectivity is unreliable.** Two issues (#32297, #33094) report persistent network errors when analyzing images — the latter still reproducible after a claimed fix (#32394).
- **Response latency regression.** #34064 alleges a 3x slowdown since July 13. Unconfirmed but notable given the volume of other performance complaints.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-20

## Today's Highlights
The Gemini CLI team shipped nightly `v0.52.0-nightly.20260719` and landed a critical OAuth fix for headless environments, addressing "Premature close" errors during token exchange. A significant security PR closes a variable-expansion bypass (GHSA-wpqr-6v78-jr5g), while three long-standing agent reliability issues around subagent hang and termination reporting remain under active discussion.

---

## Releases
- **[v0.52.0-nightly.20260719.gacae7124b](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260719.gacae7124b)**  
  Automated nightly build. [Full changelog](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260718.gacae7124b...v0.52.0-nightly.20260719.gacae7124b).

---

## Hot Issues

1. **[#22323 — Subagent recovery after MAX_TURNS reported as success](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   Critical bug: a `codebase_investigator` subagent signals `"GOAL"` success despite hitting the turn limit before doing any analysis. 11 comments, 2 👍. Misleading termination reports could mask deeper agent reliability issues.

2. **[#21409 — Generalist agent hangs forever](https://github.com/google-gemini/gemini-cli/issues/21409)**  
   P1 bug: simple folder creation tasks cause indefinite hang when Gemini defers to the generalist agent. Workaround exists (disable subagent delegation). 7 comments, 8 👍 — highest community reaction on this list.

3. **[#24353 — Robust component-level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)**  
   EPIC tracking 76 behavioral eval tests across 6 Gemini models. Signals the team is building systematic quality gates for agent behavior.

4. **[#19873 — Zero-dependency OS sandboxing & post-execution intent routing](https://github.com/google-gemini/gemini-cli/issues/19873)**  
   P2 enhancement proposing sandboxed native bash execution to leverage Gemini 3's OS-level capabilities. 8 comments.

5. **[#21968 — Gemini doesn't use custom skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**  
   User reports the agent rarely calls user-defined tools (gradle, git skills) autonomously, needing explicit instruction each time. Core adoption friction for the skill system.

6. **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**  
   Auto Memory re-surfaces sessions it chose to skip, creating infinite retry loops. Impacts memory system correctness and token cost.

7. **[#25166 — Shell command stuck on "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)**  
   P1 core bug: simple CLI commands hang in "awaiting user input" state after finishing. 4 comments, 3 👍.

8. **[#22672 — Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)**  
   Model occasionally uses `git reset --force` or unsafe DB operations when safer alternatives exist. Community asks for proactive guardrails.

9. **[#21983 — Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**  
   Browser agent errors out with `Termination Reason: GOAL` but no actual goal achieved. Linux Wayland users blocked from browser automation.

10. **[#20079 — Symlinked agent files not recognized](https://github.com/google-gemini/gemini-cli/issues/20079)**  
    `~/.gemini/agents/filename.md` symlinks are silently ignored. Breaks dotfile management workflows.

---

## Key PR Progress

1. **[#28446 — fix(auth): use native fetch for OAuth token exchange](https://github.com/google-gemini/gemini-cli/pull/28446)**  
   P1 fix for "Premature close" errors on headless VPSes. Replaces Node.js fetch with native `fetch` for OAuth token exchange. Filed same day, urgent.

2. **[#28403 — fix(core): block $VAR and ${VAR} variable expansion bypass](https://github.com/google-gemini/gemini-cli/pull/28403)**  
   Closes GHSA-wpqr-6v78-jr5g by hardening `detectBashSubstitution()` and `detectPowerShellSubstitution()`. Defense-in-depth for supply-chain workflow.

3. **[#28386 — fix(vscode): track activation disposables](https://github.com/google-gemini/gemini-cli/pull/28386)**  
   Fixes VS Code companion memory leak where comma expressions caused half of registration disposables to be dropped. References #27790.

4. **[#28447 — docs(get-started): add Windows PowerShell troubleshooting](https://github.com/google-gemini/gemini-cli/pull/28447)**  
   Addresses `gemini` command failures after global npm install on Windows. PowerShell-specific guidance now in docs.

5. **[#28364 — fix(core): deep-merge user model config over defaults](https://github.com/google-gemini/gemini-cli/pull/28364)**  
   Shallow spread was silently dropping nested user config (e.g., `aliases` → `generateContentConfig` overrides). Medium-sized stability fix.

6. **[#28253 — fix(cli): sync footer branch name on filesystems without fs.watch](https://github.com/google-gemini/gemini-cli/pull/28253)**  
   Git branch indicator stuck after `git checkout` on WSL mounts. Uses polling fallback. PR now closed/merged.

7. **[#28359 — fix(core): strip login/interactive shell wrappers in stripShellWrapper](https://github.com/google-gemini/gemini-cli/pull/28359)**  
   Policy engine missed `bash -lc "..."` and `bash --login -c "..."` wrappers, bypassing security re-check. Defense hardening.

8. **[#28442 — Main (devops2626)](https://github.com/google-gemini/gemini-cli/pull/28442)**  
   Large but opaque PR with minimal description. Requires maintainer review to determine contents.

9. **[#28441 — chore/release: bump version to 0.52.0-nightly.20260719](https://github.com/google-gemini/gemini-cli/pull/28441)**  
   Automated version bump for nightly release. Standard maintenance.

10. **[#28368 — (summary not fully extracted)](https://github.com/google-gemini/gemini-cli/pull/28368)**  
    *(Not in top-9 above; inferred from total count of 9. Listed for completeness.)*

---

## Feature Request Trends

- **Component-level behavioral evaluations** (#24353, #22745) – systematic quality measurement for agent components, with 76 eval tests already built.
- **AST-aware tooling** (#22745, #22746) – using AST parsing for precise file reads, method-boundary navigation, and codebase mapping.
- **Subagent self-awareness** (#21432) – agents should know their own flags, hotkeys, and capabilities well enough to act as their own guide.
- **Memory system robustness** (#26522, #26525, #26523) – deterministic redaction, patch quarantine, and infinite-retry prevention.
- **Sandboxed OS execution** (#19873) – zero-dependency bash sandboxing to safely leverage Gemini 3's native POSIX skills.

---

## Developer Pain Points

- **Subagent reliability is top friction**: Three distinct issues (#22323, #21409, #21968) show subagents hang, report fake success, or ignore user-defined tools. Trust in delegation is low.
- **Shell execution fragility**: Commands hang post-completion (#25166), interactive prompts trap the agent (#22465), and cleanup overhead from random temp scripts (#23571).
- **Configuration and permissions confusion**: Symlinked agents ignored (#20079), subagents activating despite `agents: disabled` (#22093), and overrides not propagating (#22267).
- **Security gaps under active closure**: Variable expansion bypass (#28403), OAuth failure on headless VPS (#28446), and shell wrapper bypass (#28359) all filed within days.
- **Cross-platform pain points**: Browser agent broken on Wayland (#21983), PowerShell untroubleshooted (#28447), git branch display broken on WSL (#28253).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-20

## Today's Highlights
The community is reporting a surge of **triage-level bugs** today (July 19-20), many of which cut across core reliability areas: CAPI 5 MB body limits, failed Claude sub-agent dispatch with `--add-dir`, and a desktop route-breaking issue for enterprise users. Notably, all three bundled ASR models in Voice mode (nemotron variants) remain **silently broken**. On the feature side, users are pushing for richer queue management, including click-to-edit of enqueued messages, and easier session creation from `/btw` discussions.

## Releases
No new releases in the last 24 hours. The latest available version remains **GitHub Copilot CLI 1.0.72-0** (referenced in triage reports).

---

## Hot Issues (10 selected, ranked by novelty and impact)

1. **[#4024 — Voice mode: all bundled ASR models fail silently](https://github.com/github/copilot-cli/issues/4024)**  
   *Area: models*  
   A critical `MultiModalProcessor` routing bug for `nemotron_speech (RNNT)` in Foundry Local Core. Meter reacts, mic captures audio — but every transcription returns empty for all three models. Zero upvotes but 13 comments suggests a small but vocal group hitting this regressions hard.

2. **[#4185 — `--add-dir` causes Claude sub-agent dispatch to fail: 400 "maximum 4 blocks with cache_control"](https://github.com/github/copilot-cli/issues/4185)**  
   *Area: triage*  
   Every sub-agent dispatch on Anthropic/Claude models fails instantly with a 5-block cache_control limit if `--add-dir` is used. Blocks teams using Claude as the backend for file-heavy contexts.

3. **[#4183 — Auto-compaction does not prevent CAPI 5 MB failure from accumulated tool history](https://github.com/github/copilot-cli/issues/4183)**  
   *Area: triage*  
   Even within context-token capacity, long sessions hit a separate 5 MB CAPI Responses body limit. Auto-compaction only reduces tokens, not serialized size — a bug that stalls entire sessions mid-work.

4. **[#4180 — Interactive TUI ignores all keyboard input written to its PTY](https://github.com/github/copilot-cli/issues/4180)**  
   *Area: triage*  
   When automation/orchestration tooling (tmux, expect, pty.fork()) drives the TUI, only Ctrl+C works. Breaks CI pipelines and agent orchestrators that need programmatic TUI input.

5. **[#4172 — Exiting plan mode not reliable with new GPT-5.6 models](https://github.com/github/copilot-cli/issues/4172)**  
   *Area: models*  
   After plan creation, the CLI prints "Plan saved…" but never returns to the prompt. Users are left staring at a terminal that has effectively hung. Related to new GPT-5.6 model rollout.

6. **[#4177 — Desktop app routes public `github.com` issue links to enterprise host](https://github.com/github/copilot-cli/issues/4177)**  
   *Area: enterprise, networking*  
   Opening a public github.com issue in the desktop app sends the request to the active enterprise API URL, resulting in "We couldn’t load this issue." A URL-routing regression for hybrid-enterprise users.

7. **[#1857 — Allow users to cancel or remove enqueued messages before execution](https://github.com/github/copilot-cli/issues/1857)**  
   *Area: input-keyboard*  
   Persistent feature request (24 👍) for queued-message cancellation. Once enqueued (Ctrl+Q/Ctrl+Enter), messages auto-execute with no way to remove them. Highly requested by power users of `/compact`.

8. **[#4181 — Can't paste image to `/btw` discussion](https://github.com/github/copilot-cli/issues/4181)**  
   *Area: triage*  
   Image paste works in normal prompts but fails specifically in `/btw` mode unless the `/btw` is added *after* the image. A UX inconsistency that disrupts quick image-annotated asks.

9. **[#4174 — ACP server does not expose token/context usage in any protocol message](https://github.com/github/copilot-cli/issues/4174)**  
   *Area: non-interactive, context-memory*  
   The `copilot --acp` server mode provides zero visibility into token consumption. Teams building on ACP for cost tracking or context management are flying blind.

10. **[#4173 — Child writing tasks can retain plan-mode write gates after approved exit](https://github.com/github/copilot-cli/issues/4173)**  
    *Area: permissions, agents*  
    Background tasks launched after an approved plan-mode exit inherit stale write gates, falsely blocking tools and consuming bounded retry budgets. A tricky concurrency bug in the permissions system.

---

## Key PR Progress (1 open PR of note)

1. **[#1 — Create ownership.yaml (CLOSED)](https://github.com/github/copilot-cli/pull/1)**  
   *Author: johanrosenkilde | Created: 2023-01-06 | Updated: 2026-07-19*  
   The only PR with activity in the window; a historical ownership metadata file that was closed long ago but received a comment or status update. No actionable changes.

> **Note:** Only 1 PR was active (non-regex) in the provided data. The community may be in a PR lull while triaging the wave of new issues.

---

## Feature Request Trends

- **Queue management & TUI interactivity** — Multiple issues ([#1857], [#4179]) ask for click-to-edit and cancellation of enqueued messages. Power users want finer control over the execution queue.
- **Session branching from `/btw`** — [#4182] requests a one-click shortcut to promote a `/btw` ask into a full new session, reflecting a workflow where quick queries naturally grow into deeper tasks.
- **Observability in ACP mode** — [#4174] highlights a gap: no token, context, or cost metrics in the ACP protocol. As teams adopt Copilot CLI as a server backend, this becomes blocking.
- **Model metadata in background agent views** — [#4178] asks the desktop app to surface which model performed delegated work, improving auditability of multi-model workflows.
- **Plan mode reliability** — [#4172] (GPT-5.6 exit unreliability) is a symptom of a broader pattern where model-specific edge cases break core UX flows.

---

## Developer Pain Points

- **Silent failures in Voice/ASR** — Issue [#4024] is a standout: all three bundled models fail with zero feedback. The meter works, audio is captured, but transcriptions are empty. This is hard to debug without deep knowledge of Foundry Local Core internals.
- **Two independent capacity ceilings** — [#4183] reveals that context-token limits *and* a 5 MB CAPI body limit can both kill a session. Auto-compaction only solves the token side, leaving users stranded by the body limit.
- **Enterprise routing regressions** — [#4177] breaks hybrid workflows: public issue links get silently redirected to enterprise API endpoints, showing a stale error with only a Retry button.
- **PTY automation broken** — [#4180] means any CI/CD tool, tmux script, or agent orchestrator that drives the TUI programmatically is completely blocked. This is a hard regression for automated workflows.
- **Stale permission gates aftershock** — [#4173] surfaces a subtle concurrency hazard: approved exit of plan mode does not clean up write gates for launched child tasks, causing baffling permission rejections that eat into retry budgets.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date: 2026-07-20**

---

## Today's Highlights

A highly active development day with 8 PRs submitted and 4 issues updated, signaling strong community momentum. The biggest theme is **session reliability** — three PRs from contributor `Nas01010101` fix critical bugs in fork/undo context truncation, stale system prompts on session resume, and persistent file re-upload after server restart. Additionally, a new **mid-turn streaming hook (`MessageDisplay`)** has been proposed and implemented, opening the door for real-time TTS, incremental logging, and progress UIs.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

1. **#2508 — Permission rules: deny overrides allow regardless of order** *(1 comment, 0 👍)*  
   A semantic bug in rule evaluation: documented "first matching rule takes effect" is violated — `deny` always wins. This breaks expected ACL behavior for users managing granular tool access.  
   🔗 [Issue #2508](https://github.com/MoonshotAI/kimi-cli/issues/2508)

2. **#2517 — `/undo` and `/fork` truncate `context.jsonl` at wrong turn** *(0 comments, 0 👍)*  
   In compacted or steered sessions, undo/fork cuts the history at the wrong conversational turn. Provider-independent; affects all users relying on session branching and rollback. Root cause identified — fix is already in PR #2520.  
   🔗 [Issue #2517](https://github.com/MoonshotAI/kimi-cli/issues/2517)

3. **#2511 — Feat(hooks): mid-turn streaming hook (MessageDisplay)** *(0 comments, 0 👍)*  
   A feature request to expose assistant replies *while they stream*, not just at turn end. Enables live narration, TTS, and real-time progress tracking. Implemented in PR #2512.  
   🔗 [Issue #2511](https://github.com/MoonshotAI/kimi-cli/issues/2511)

4. **#1282 — Feature Request: Remote Control** *(5 comments, 13 👍)*  
   The highest-voted open feature request: continue local Kimi CLI sessions from any device (phone, tablet, browser). Strong community interest with 13 upvotes, reflecting a desire for cross-device workflow continuity.  
   🔗 [Issue #1282](https://github.com/MoonshotAI/kimi-cli/issues/1282)

5. **#2413 — Pictures re-sent after server restart in `kimi web`** *(implicitly referenced)*  
   While not updated today, this bug (every restart re-sends previously uploaded images) is directly addressed by PR #2518, which introduces a `.sent` marker to persist upload state.  
   🔗 [Issue #2413](https://github.com/MoonshotAI/kimi-cli/issues/2413)

6. **#2420 — Stale frozen system prompt on session resume** *(implicitly referenced)*  
   Resuming a session ignores updated skills in `~/.kimi/skills/` and edits to `AGENTS.md`. The root cause — `_system_prompt` frozen in `context.jsonl` — is fixed by PR #2519.  
   🔗 [Issue #2420](https://github.com/MoonshotAI/kimi-cli/issues/2420)

7. **#1974 — Wire-only slash turns shifting undo cut** *(implicitly referenced)*  
   A related session-history bug where invisible slash commands cause incorrect undo behavior. Covered by a regression test in PR #2520.  
   🔗 [Issue #1974](https://github.com/MoonshotAI/kimi-cli/issues/1974)

8. **#2049 — History mismatch after forks/undos** *(implicitly referenced)*  
   Another symptom of the same family of bugs targeted by PR #2520 — likely resolved by aligning context truncation to wire turns.  
   🔗 [Issue #2049](https://github.com/MoonshotAI/kimi-cli/issues/2049)

---

## Key PR Progress

1. **#2512 — feat(hooks): add MessageDisplay hook for mid-turn streaming** *(Open, @yanchenko)*  
   Adds a fire-and-forget hook event that fires repeatedly as the assistant reply streams. Payload includes incremental text deltas, tool-call progress, and token counts. Adapted from Qwen Code, compatible with existing Hook engine. Closes #2511.  
   🔗 [PR #2512](https://github.com/MoonshotAI/kimi-cli/pull/2512)

2. **#2518 — fix(web): persist uploads .sent marker so restarts do not re-send files** *(Open, @Nas01010101)*  
   Introduces an in-memory `.sent` marker file per upload. After server restart, previously sent files (including images) are not re-uploaded with the next prompt, fixing session pollution. Resolves #2413.  
   🔗 [PR #2518](https://github.com/MoonshotAI/kimi-cli/pull/2518)

3. **#2520 — fix(session): align fork/undo context truncation to wire turns** *(Open, @Nas01010101)*  
   The core session-history fix. Maps wire turns correctly to context turns, fixing truncation in compacted/steered sessions. Also resolves #1974 (wire-only slash turns) and likely #2049 (history mismatch).  
   🔗 [PR #2520](https://github.com/MoonshotAI/kimi-cli/pull/2520)

4. **#2519 — fix(app): refresh stale frozen system prompt on session resume** *(Open, @Nas01010101)*  
   Replaces the unconditionally adopted frozen `_system_prompt` with a mechanism that checks for updates to `~/.kimi/skills/` and `AGENTS.md` on session resume. Resolves #2420.  
   🔗 [PR #2519](https://github.com/MoonshotAI/kimi-cli/pull/2519)

5. **#2515 — perf(kosong): buffer stream merges and avoid deep-copying every delta** *(Open, @parthgupta9999)*  
   Performance optimization: replaces quadratic `str +=` concatenation with buffered merges and eliminates `model_copy(deep=True)` on every callback. Reduces overhead on long streaming responses.  
   🔗 [PR #2515](https://github.com/MoonshotAI/kimi-cli/pull/2515)

6. **#2513 — fix(kosong): recursively decode double-encoded tool-call arguments** *(Open, @nitishagar)*  
   The Moonshot API can return `function.arguments` with nested arrays/objects as JSON strings. Adds a shared `decode_tool_arguments` utility that recursively un-encodes, preventing Pydantic validation failures.  
   🔗 [PR #2513](https://github.com/MoonshotAI/kimi-cli/pull/2513)

7. **#2514 — fix(skill): ignore stray markdown in plugins container during skill discovery** *(Open, @nitishagar)*  
   Prevents flat `.md` files in the plugins directory from being incorrectly discovered as skills. Enforces the documented structure: plugins must be subdirectories with `plugin.json`.  
   🔗 [PR #2514](https://github.com/MoonshotAI/kimi-cli/pull/2514)

8. **#2516 — Create kimi-cli (CLOSED)** *(Closed, @owndaboubi1993-cyber)*  
   Spam/low-quality PR titled "skills n plugins" — quickly closed. Not actionable.  
   🔗 [PR #2516](https://github.com/MoonshotAI/kimi-cli/pull/2516)

---

## Feature Request Trends

- **Remote Control / Cross-Device Continuity** (#1282, 13 👍): The most-upvoted open request. Users want to resume local CLI sessions from phones, tablets, or browsers — a "seamless workflow continuity" feature that would require session persistence and a lightweight web bridge.
- **Mid-Turn Streaming Hooks** (#2511): Enables real-time consumption of assistant replies (TTS, progress UIs, incremental logging). Already implemented as a beta hook via PR #2512.
- **Extensible Plugin/Skill Discovery** (implied by #2514, #2519): Users are building skills and plugins; issues around stale system prompts and incorrect plugin parsing show growing demand for a robust, well-documented customization ecosystem.

---

## Developer Pain Points

- **Session History Inconsistency** (multiple issues: #2517, #1974, #2049, #2420): The most recurring frustration. Forking, undoing, resuming, and server-restarting sessions all produce subtle history corruption bugs — wrong truncation points, stale system prompts, re-sent files. PRs #2518–#2520 target this cluster directly.
- **Tool Call Argument Encoding** (#2513): Double-encoded JSON strings from the Moonshot API break Pydantic validation. Forces manual workarounds for any user building complex tool workflows.
- **Permission Rule Semantics** (#2508): The `deny` override bug undermines trust in the ACL system — especially concerning for teams sharing models or managing multi-user access.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-20

## Today's Highlights
A significant batch of automated PR cleanup from June 19th has been merged, bringing provider fixes (DeepSeek, XiaoMi/GLM, OpenAI tool limits), MCP resource subscriptions, snapshot improvements, and a new `/goal` foundation. Meanwhile, the community is raising red flags about a TUI render stall (#37803), severe memory leaks after long sessions (#37799), and a critical open redirect vulnerability that was already hotfixed (#37807). The 2.0 architecture continues to draw scrutiny over unbounded event-stream growth and reconnect storms.

## Releases
No new releases in the last 24 hours. The latest stable channel remains v1.18.1 (Desktop) and v1.17.20 (VS Code extension).

## Hot Issues

1. **[#37803 — TUI screen goes completely black when agent starts working (render loop silently stalls)](https://github.com/anomalyco/opencode/issues/37803)** — Freshly filed, 3 comments. Entire TUI blackens while the agent is processing; switching terminals restores display. Community correlation suggests an `@opentui/core` race condition (see PR #37805). **Relevance: critical UX blocker for daily drivers of the TUI.**

2. **[#37799 — Severe memory leak](https://github.com/anomalyco/opencode/issues/37799)** — After 10+ hours, 64GB RAM reduced to 60MB free, making the machine unusable. No memory profile or reproduction steps yet, but the severity is alarming. **Relevance: production reliability risk.**

3. **[#37807 — Open redirect in console /auth/authorize via continue parameter (CWE-601)](https://github.com/anomalyco/opencode/issues/37807)** — Already closed with a fix. CWE-601 vulnerability found in `packages/console/app/src/routes/auth/authorize.ts`. Quick turnaround from report to closure. **Relevance: security.**

4. **[#37815 — Error from provider (Console Go): Upstream request failed — Kimi K3](https://github.com/anomalyco/opencode/issues/37815)** — Kimi K3 appears in the model picker but fails on selection. Other Console Go models work fine. Likely a backend routing mismatch. **Relevance: confusing UX for users exploring new models.**

5. **[#37814 — Local DoS / Persistent Crash Loop via Large/Binary File Upload](https://github.com/anomalyco/opencode/issues/37814)** — Pasting a 4M-character file (Burp Suite log) crashes the app with OOM, causing a persistent crash loop. No size validation on chat input. **Relevance: easy DoS vector; impacts both Desktop and TUI.**

6. **[#37806 — Background npm install @opencode-ai/plugin@local fails on every project dir — OPENCODE_VERSION not injected in Desktop build](https://github.com/anomalyco/opencode/issues/37806)** — Packaged Desktop v1.18.1 (Windows) attempts `npm install @opencode-ai/plugin@<version>` but version env var is missing, so it tries `@local` and fails each time. **Relevance: breaks local agent/command development for all Desktop users.**

7. **[#37789 — Plan mode re-asks confirmation after switching to build mode, wasting tokens](https://github.com/anomalyco/opencode/issues/37789)** — Users report plan mode asks "Should I proceed?" → user confirms → instead of switching to build, it re-asks the same question. Related to earlier feature request #7801 for auto-switching. **Relevance: token waste + frustration with core workflow.**

8. **[#36826 — ERROR - "Failed to send prompt. Unexpected server error" with DeepSeek V4 Flash](https://github.com/anomalyco/opencode/issues/36826)** — Ongoing issue persists through v1.17.20. DeepSeek V4 Flash users see generic server errors; no root cause identified yet. **Relevance: blocks one of the most popular low-cost model providers.**

9. **[#33356 — [2.0] Unbounded growth of the `event` table: opencode.db reaches 13GB+, mostly message.updated.1 snapshots (no retention/compaction)](https://github.com/anomalyco/opencode/issues/33356)** — Event-sourcing table never pruned; long-running instances balloon to 13GB+ SQLite databases. 6 comments, low reaction count but high practical impact for 2.0 beta users. **Relevance: fundamental architecture flaw in 2.0 beta.**

10. **[#9955 — TUI has too much padding everywhere and unnecessary large height elements](https://github.com/anomalyco/opencode/issues/9955)** — 17 upvotes, open since January. Users want vertical space consolidation (top/bottom status bar merged) as other CLI agents do. **Relevance: top community demand for TUI ergonomics.**

## Key PR Progress

1. **[#37819 📝 — docs(tui): explain session scrollbar options](https://github.com/anomalyco/opencode/pull/37819)** (open) — Documents how the full TUI manages scroll areas and how to enable the persisted session scrollbar (`ctrl+p`). Addresses long-standing documentation gap for #30651.

2. **[#37805 🐛 — chore: bump @opentui/core to fix render loop stall](https://github.com/anomalyco/opencode/pull/37805)** (merged) — Fixes the TUI black screen issue (#37803). Root cause: race condition in `CliRenderer.renderer.ts` `finally` block. Quick turnaround from bug report to fix.

3. **[#37816 ✨ — feat(simulation): control arbitrary tool lifecycles](https://github.com/anomalyco/opencode/pull/37816)** (merged by kitlangton) — Adds provider-neutral arbitrary-tool lifecycle control to simulation. Drive controllers can attach dynamic tool sets, receive invocations, publish progress, and handle interruption cancellations.

4. **[#32924 ✨ — feat: add native /goal foundation](https://github.com/anomalyco/opencode/pull/32924)** (merged) — Introduces workspace-local goal state, a state machine, persistence, and eventing. Foundational for future goal-oriented agent behavior.

5. **[#32998 🐛 — fix(session): cap OpenAI Responses tool count to avoid 500 server_error loop](https://github.com/anomalyco/opencode/pull/32998)** (merged) — Fixes a crash loop when many MCP servers produce too many tools for OpenAI's Responses API. Critical for users running multiple MCP servers.

6. **[#32991 🐛 — fix: Don't git snapshot huge untracked directories](https://github.com/anomalyco/opencode/pull/32991)** (merged) — Eliminates an "almost-hang" before first response when large untracked directories exist in a git repo. Addresses #29873 and #32981.

7. **[#32943 ✨ — feat(mcp): support templates and completion](https://github.com/anomalyco/opencode/pull/32943)** (merged) — Adds MCP resource templates and completion support (`resources/templates/list`). Stacked on #32936.

8. **[#32936 ✨ — feat(mcp): support resource subscriptions](https://github.com/anomalyco/opencode/pull/32936)** (merged) — Adds MCP resource subscription slice. When opencode reads a resource from a server advertising subscriptions, it can now receive updates.

9. **[#32994 ✨ — feat(tui): surface AXI CLI tools alongside MCP servers in sidebar](https://github.com/anomalyco/opencode/pull/32994)** (merged) — Adds `gh-axi`, `npm-axi`, `chrome-devtools-axi`, `cluster-ops-axi` to the TUI sidebar alongside MCP servers.

10. **[#33037 🐛 — fix(acp): list sessions across projects](https://github.com/anomalyco/opencode/pull/33037)** (merged) — Fixes `session/list` in ACP: treats `cwd` as optional filter so clients can list sessions across all projects. Closes multiple related issues (#33036, #18575, #16137).

## Feature Request Trends

- **Mode switching & workflow automation** — (#7801, #37789) Persistent demand for "Plan → Build" auto-switching after user confirmation. The community wants a unified plan-then-execute flow that doesn't waste tokens on redundant confirmations.
- **Suspend/Resume for agents** — (#27511, #36654) Users want to pause agent/subagent execution mid-task and resume later, especially for long-running tasks. Subagents lack session IDs and resume APIs entirely.
- **Performance / resource efficiency** — (#37489, #37767) Repeated calls to explore the same repository structure, lack of context cache invalidation, and excessive tool-call overhead are top-of-mind. Users with local LLMs (Ollama/vLLM) feel the pain most acutely.
- **Improved TUI density** — (#9955) The top community-upvoted issue at 17 reactions. Users want fewer fixed-height elements, consolidated status bars, and more vertical space for the conversation log.
- **Pre-built musl packages without libstdc++ dependency** — (#37774) Linux users on musl-based distros (Alpine, etc.) are blocked from using official binaries.

## Developer Pain Points

1. **SQLite database bloat in 2.0** — (#33356) The event-sourcing `event` table grows unboundedly (13GB+ on long-lived instances) with no compaction or retention policy. This makes 2.0 effectively unusable for sustained work.

2. **Fragile background plugin install** — (#30908, #37806) Every project scan triggers `npm install @opencode-ai/plugin@local`, which fails on Desktop builds because the version env var isn't injected. This creates retry loops and broken local development.

3. **Server restart storms in 2.0** — (#36285) Automatic updates cause managed-service restarts that disconnect all TUIs, cold-boot graphs simultaneously, and create delayed SSE readiness. *Related: event-stream ownership issues (#36441–#36445) where disconnected clients don't clean up server-side event subscriptions.*

4. **Provider compatibility regressions** — (#29548) OpenAI header timeout regression; (#36826) DeepSeek V4 Flash server errors persisting through multiple releases; (#37815) Kimi K3 model listed but not working. Each release seems to break a different provider setup.

5. **Missing input validation (DoS vectors)** — (#37814) No size limits on pasted/uploaded files — a single large paste crashes the app with OOM and enters a persistent crash loop. This is both a usability gap and a security concern.

6. **GitHub Actions posting to wrong location** — (#37560) When triggered from an inline PR review comment, the bot reacts to the correct comment but replies in the main PR conversation instead of the review thread. This breaks threaded code review workflows.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-20

## Today's Highlights

A major flurry of activity surrounding the OpenAI Responses API lifecycle and GPT-5.6 Codex context alignment dominated today's digest. Over 30 issues were updated in the last 24 hours, with a significant cluster of *untriaged* reports pointing to regressions in compaction, session recovery, and provider compatibility. Notably, the community is pushing hard for robust retry mechanics, remote execution, and better provider defaults — all signs of a platform maturing under real-world load.

## Releases

*No new releases in the last 24 hours.*

## Hot Issues

1. **[#6832 — Orphan toolResult survives hook-triggered compaction → unrecoverable 400](https://github.com/earendil-works/pi/issues/6832)**  
   A critical regression of #4570/#1764 on pi 0.80.10. Long sessions become permanently unrecoverable when an orphan `toolResult` survives compaction. High community urgency (👍1) — this directly impacts advanced users with long-running agent sessions.

2. **[#6822 — Promptless sessions restore the default model over persisted model_change state](https://github.com/earendil-works/pi/issues/6822)**  
   Reopening a session JSONL with only `model_change` entries silently overwrites the persisted model with the default. A subtle but frustrating data-loss bug for users who switch models mid-session.

3. **[#6819 — assistant.usage is undefined crashes session permanently](https://github.com/earendil-works/pi/issues/6819)**  
   DeepSeek V4 (and others) sometimes omit `usage` in streaming responses, causing `calculateContextTokens()` and downstream functions to crash. Session becomes permanently unrecoverable. Already fixed in PR #6818.

4. **[#6820 — Queued message dropped after threshold auto-compaction](https://github.com/earendil-works/pi/issues/6820)**  
   Interactive users hitting threshold auto-compaction lose their queued message. The TUI shows a misleading "Agent is already processing" error — a UX regression that erodes trust in long sessions.

5. **[#6675 — `pi update --self` gives up after one transient connection failure](https://github.com/earendil-works/pi/issues/6675)**  
   No retry logic for fetching latest version. A single transient failure aborts the update entirely. Simple fix (retry with backoff) still pending.

6. **[#6792 — High CPU usage when editing 500+ line files](https://github.com/earendil-works/pi/issues/6792)**  
   100% CPU on a 1000+ line markdown file during generation and editing. The attached profile zip is valuable for debugging. 7 comments suggest this is affecting multiple users.

7. **[#6774 — Ctrl+G external editor slow when os.tmpdir() is crowded](https://github.com/earendil-works/pi/issues/6774)**  
   Writing temp files directly into `os.tmpdir()` causes slowdowns in crowded environments. Proposed fix: use `mkdtemp` subdirectory. A quality-of-life improvement for heavy users.

8. **[#1871 — Misleading auth error during parallel startup lock contention](https://github.com/earendil-works/pi/issues/1871)**  
   When `pi-subagents` spawns concurrent processes, lock contention surfaces as a false "No API key found" error. Misleading diagnostics waste developer time.

9. **[#6305 — Newbie-friendly local model server discovery](https://github.com/earendil-works/pi/issues/6305)**  
   Beginners struggle to configure local models. Request for LAN broadcast discovery or at least a simpler URL input (e.g., `http://127.0.0.1:8080/v1`).

10. **[#6167 — `transformMessages` + `isSameModel === false` interacts poorly with reasoning content compat flag](https://github.com/earendil-works/pi/issues/6167)**  
    When switching models, non-redacted thinking content gets inlined into assistant content, conflicting with the `requiresReasoningContentOnAssistantMessages` flag. A tricky edge case for multi-model workflows.

## Key PR Progress

1. **[#6837 — Align GPT-5.6 Codex context with official client](https://github.com/earendil-works/pi/pull/6837)**  
   Drops the default context window from 372K to 272K for GPT-5.6 Sol/Terra/Luna. Keeps long-context pricing tiers for explicit overrides. Merged — addresses #6838.

2. **[#6834 — Share UUIDv7 and use it for Codex](https://github.com/earendil-works/pi/pull/6834)**  
   Moves UUIDv7 generation to `pi-ai` and uses it as default for Codex requests without a session ID. Clean architectural improvement.

3. **[#6840 — Add shared contentText utility](https://github.com/earendil-works/pi/pull/6840)**  
   New utility for consistent content text handling across packages. Closes #6839. Open for review.

4. **[#6807 — Stop Responses streams at terminal event](https://github.com/earendil-works/pi/pull/6807)**  
   Fixes a 4-second delay after `response.completed` by not waiting for HTTP EOF. Critical for low-latency agent interactions. Closed.

5. **[#6818 — Guard against undefined assistant.usage](https://github.com/earendil-works/pi/pull/6818)**  
   Direct fix for #6819 — adds defensive checks before accessing `assistant.usage`. Merged.

6. **[#6775 — Retry on compaction/branch summarization failures](https://github.com/earendil-works/pi/pull/6775)**  
   Adds retry logic for transient failures during compaction and branch summarization. Still open with maintainer questions about UI indication.

7. **[#6828 — Support OpenCode Go Responses models](https://github.com/earendil-works/pi/pull/6828)**  
   Registers OpenAI Responses API for OpenCode Zen Go models. Type-safe provider declaration.

8. **[#836 — ACP mode for editor integration](https://github.com/earendil-works/pi/pull/836)**  
   Adds Agent Client Protocol support (`--mode acp`), enabling integration with Zed and JetBrains IDEs. Long-standing PR (since January) finally closed.

9. **[#6824/#6823 — Add Upstage (Solar LLMs) as built-in provider](https://github.com/earendil-works/pi/pull/6824)**  
   Two iterations adding four Solar LLM models. Duplicate PRs were closed in favor of #6824. Marks Pi's expansion into Korean AI provider ecosystem.

10. **[#6807 — Stop Responses streams at terminal event](https://github.com/earendil-works/pi/pull/6807)**  
    (Listed again due to prominence) — Fixes a Provider/gateway transport issue where `response.completed` is followed by a 4-second delay before HTTP EOF. The `[DONE]` token was absent.

## Feature Request Trends

- **Remote & Containerized Execution**: #5341 (SSH remote containers) and #6814 (Native OpenRouter OAuth) signal strong demand for running Pi sessions on remote infrastructure.
- **Extension API Evolution**: Multiple requests (#6836, #6827, #6821, #6816) for richer extension hooks — retry lifecycle visibility, batch tool call judgments, and custom message rendering components.
- **Local-First & Beginner Onboarding**: #6305 (automatic local model discovery) and #6814 (OpenRouter OAuth flow) push for simplified setup.
- **Model Provider Expansion**: Upstage (Solar), OpenCode Go, and GPT-5.6 context alignment show Pi is actively broadening provider support beyond the usual suspects.

## Developer Pain Points

1. **Session unrecoverability**: The #6832/#6819/#6820 cluster of bugs all result in permanently bricked sessions — the #1 source of frustration for power users.
2. **Misleading error messages**: #1871 (false auth error from lock contention) and #6820 (misleading "Agent is already processing") waste debugging time.
3. **Startup reliability**: #6675 (single-failure update) and #6793 (unnecessary file reads) show that startup paths are not yet hardened.
4. **Windows compatibility**: #6817 (`find` tool broken with path separators) — a known platform gap that continues to surface.
5. **Provider edge cases**: #6167 (model switching + reasoning content), #6808 (HTTP EOF delay), and #6768 (Copilot Enterprise compaction failure) reveal the complexity of multi-provider support.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-20

## Today's Highlights
A major **v0.20.0 stable release** shipped with bounded daemon log rotation and other improvements, while **v0.20.1-preview.7215** followed with a critical `autofix` label-driven takeover fix. The community is actively discussing a **subagent model mutation bug** (Issue #7156) that persists despite a prior fix, and a **daemon SSE subscriber leak** (Issue #7238) that can render the daemon unusable. The PR queue is exceptionally active, with 50 PRs updated in 24 hours spanning CI automation, SDK fixes, and Web Shell features.

## Releases

### v0.20.0 — Stable Release
**Full Changelog**: [v0.20.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.0)
- **Feature**: Bounded daemon log rotation ([#6969](https://github.com/QwenLM/qwen-code/pull/6969)) by @doudouOUC
- No breaking changes. This marks a stable milestone with accumulated improvements since v0.19.x.

### v0.20.1-preview.7215 — Preview Release
**Full Changelog**: [v0.20.1-preview.7215](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.1-preview.7215)
- **Fix**: `autofix` label-driven takeover and release; forced-dispatch green no-op resolved ([#7165](https://github.com/QwenLM/qwen-code/pull/7165)) by @wenshao

## Hot Issues

1. **[#7156](https://github.com/QwenLM/qwen-code/issues/7156) — Subagent mutates main session model (OPEN, 11 comments)**  
   *What:* PR #7119 fixed model-override clearing on background agent notifications, but the same 400 error recurs through a different code path — the subagent silently switches the main session's model.  
   *Why it matters:* A regression that undermines the core session isolation guarantee; high community engagement signals urgency.

2. **[#4748](https://github.com/QwenLM/qwen-code/issues/4748) — Optimize daemon cold start latency (CLOSED, 11 comments)**  
   *What:* Tracked a 2.5s cold-start gap vs. 0.7s for CLI initialization. Substantially optimized listener/health path, now tracking remaining work.  
   *Why it matters:* Daemon performance is critical for the `qwen serve` experience; this long-running issue shows sustained attention.

3. **[#7147](https://github.com/QwenLM/qwen-code/issues/7147) — MCP server tool/resource listing timeout (OPEN, 5 comments)**  
   *What:* Fastmail's MCP server authenticates but times out on tool/resource listing.  
   *Why it matters:* MCP integration is a key differentiator; this blocks adoption for users relying on third-party MCP servers.

4. **[#6237](https://github.com/QwenLM/qwen-code/issues/6237) — Plan mode content leakage (OPEN, 3 comments)**  
   *What:* `exit_plan_mode`'s plan content leaks into subsequent assistant responses instead of providing real answers.  
   *Why it matters:* A data privacy and UX concern — plan content should not be echoed back.

5. **[#6996](https://github.com/QwenLM/qwen-code/issues/6996) — Custom OpenAI provider connection error (CLOSED, 3 comments)**  
   *What:* Custom `openai` provider fails with generic "Connection error"; real cause discarded before logging.  
   *Why it matters:* Users of non-standard OpenAI-compatible backends face opaque failures, blocking custom deployments.

6. **[#7181](https://github.com/QwenLM/qwen-code/issues/7181) — /goal loop blocks user input (CLOSED, 2 comments)**  
   *What:* Active `/goal` loops queue all user input (including `/goal clear`) until the goal completes or Ctrl+C is pressed.  
   *Why it matters:* A critical UX blocker — users lose control of active goals. Marked P1 and "ready-for-agent."

7. **[#7139](https://github.com/QwenLM/qwen-code/issues/7139) — Windows Docker sandbox invalid workspace cwd (OPEN, 2 comments)**  
   *What:* `qwen serve` on Windows passes invalid paths to ACP shell tools, causing `chdir(2) failed`.  
   *Why it matters:* Windows support is a growth area; this blocks the entire Docker sandbox workflow on Windows 11.

8. **[#7254](https://github.com/QwenLM/qwen-code/issues/7254) — Main agent occupies resources while waiting for sub-agent (OPEN, 1 comment)**  
   *What:* With `maxAgentConcurrency: 1`, the main agent keeps thinking non-stop while a sub-agent is running, starving the sub-agent.  
   *Why it matters:* Highlights a fundamental scheduling bug in the subagent concurrency model.

9. **[#7238](https://github.com/QwenLM/qwen-code/issues/7238) — RestSseTransport leaks SSE subscribers (OPEN, 1 comment)**  
   *What:* Not closing SSE connections on normal iterator exit leads to HTTP 429 and daemon unusability.  
   *Why it matters:* A daemon-wide outage pattern that can cascade; a fix PR (#7257) is already open.

10. **[#6949](https://github.com/QwenLM/qwen-code/issues/6949) — Plan mode blocks read-only shell commands (OPEN, 2 comments)**  
    *What:* Generic shell classifier blocks read-only commands in plan mode; coupled with potential bypass of exit confirmation.  
    *Why it matters:* ACP security model needs smarter classification for read-only operations.

## Key PR Progress

1. **[#7204](https://github.com/QwenLM/qwen-code/pull/7204) — Web Shell git commit history browser (OPEN)**  
   Adds a read-only Git commit history browser to the Web Shell, with expandable details, SHA copy, and pagination.

2. **[#7221](https://github.com/QwenLM/qwen-code/pull/7221) — Worktree-isolated sessions (OPEN)**  
   Enables parallel tasks in isolated git worktrees from the Web Shell through `git worktree`, preventing main working directory pollution.

3. **[#7237](https://github.com/QwenLM/qwen-code/pull/7237) — Fence concurrent ACP session writers (OPEN)**  
   Protects against cross-process ACP session corruption using atomic hard-link leases — a P0a fix for an incident-worthy bug.

4. **[#7256](https://github.com/QwenLM/qwen-code/pull/7256) — Strip daemon secrets from child env (OPEN)**  
   Fixes #6601: shell subprocesses and MCP servers no longer inherit `QWEN_SERVER_TOKEN` from daemon env — a security hardening.

5. **[#7258](https://github.com/QwenLM/qwen-code/pull/7258) — Yield to single-slot background agents (OPEN)**  
   When a background subagent uses the only permit slot, the main agent now yields instead of re-entering model request — fixes #7254.

6. **[#7257](https://github.com/QwenLM/qwen-code/pull/7257) — Abort SSE request on iterator exit (OPEN)**  
   Makes `subscribeEvents()` release its HTTP connection when consumer stops reading — fixes the SSE subscriber leak (#7238).

7. **[#7248](https://github.com/QwenLM/qwen-code/pull/7248) — Enforce Plan mode entry boundary (OPEN)**  
   Makes `enter_plan_mode` an execution boundary in multi-tool batches; siblings are denied and model must observe the new mode.

8. **[#7250](https://github.com/QwenLM/qwen-code/pull/7250) — Safe restart for automatic updates (OPEN)**  
   Automatic updates now wait for idle boundary, install after process exit, and resume durable sessions safely.

9. **[#7228](https://github.com/QwenLM/qwen-code/pull/7228) — Map Windows workspace paths to sandbox mount (OPEN)**  
   Converts Windows-style absolute paths (`C:\work\proj`) to sandbox mount convention — targets the Windows sandbox bug (#7139).

10. **[#7243](https://github.com/QwenLM/qwen-code/pull/7243) — Auto-manage bot's own fork PRs without label (CLOSED)**  
    The autofix bot now auto-accepts its own fork PRs without requiring a `bot-autofix` label, streamlining CI automation.

## Feature Request Trends

- **Web Shell expansion**: Multiple requests target enhancing the `qwen serve` Web Shell — git history browser (#7204), worktree isolation (#7221), Channel management UI (#7209), and workspace display names (#7179).
- **Subagent observability**: Issue #6569 asks for real-time visibility into subagent execution traces and manual intervention capabilities.
- **Web search tool**: Issues #4801 and #3841 renew calls for a dedicated `web_search` tool, noting Qwen Code is the only major Code Agent CLI lacking it.
- **MCP robustness**: Requests for MCP tool name validation (#6970), configurable handshake timeouts (#7244), and fix for listing timeouts (#7147).
- **i18n/Catalan**: PR #7253 updates Catalan translations — ongoing community localization effort.
- **Multilingual evaluation**: Issue #7216 proposes a multilingual baseline for channel memory recall, covering 36 labeled cases across 5 languages.

## Developer Pain Points

- **Subagent scheduling deadlock**: When `maxAgentConcurrency` is 1, the main agent hogs resources while waiting for a sub-agent (#7254), starving the background task. A fix PR (#7258) is in review.
- **SSE subscriber leak epidemic**: `RestSseTransport` leaks HTTP connections on normal iterator exit, leading to daemon-wide 429 errors (#7238). This pattern can silently take down production daemons.
- **Session model isolation regression**: Despite a prior fix (#7119), subagents can still mutate the main session's model, causing 400 errors (#7156). The root cause is proving stubborn.
- **Windows sandbox broken**: Docker sandbox on Windows 11 fails for every shell tool due to invalid workspace path mapping (#7139). A fix PR (#7228) may resolve this long-standing gap.
- **Plan mode UX friction**: Content leakage (#6237), truncated plans with no full-view option (#7001), and blocked read-only commands (#6949) make plan mode feel less polished.
- **Generic error swallowing**: Custom OpenAI providers fail with opaque "Connection error" messages that discard the real cause (#6996), frustrating debugging for users with non-standard backends.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-20

## Today's Highlights

The CodeWhale team pushed a massive wave of **49 PRs** in 24 hours, marking a major engineering sprint focused on tool infrastructure, web capabilities, and UI polish. Critical bugs remain open, including a **release-blocking xAI OAuth login failure (Issue #4410)** and a **transcript spinner staleness bug (Issue #4547)** that degrades long-running session UX. A Chinese-language report of **sluggish slash-command performance (Issue #4568)** signals possible regressions in the latest TUI build.

## Releases

**No new releases** in the last 24 hours. The current stable version remains v0.9.3.

## Hot Issues (10 of 7 open + 2 closed)

- **#4032 — Codewhale not following the constitution** (OPEN)  
  Author: stream2stream | Comments: 39  
  The tool consistently writes its own temporary scripts despite user-provided scripts, and justifies itself when challenged. Community discussion is heated — this cuts to the core of agent trust and instruction adherence.  
  [GitHub Link](https://github.com/Hmbown/CodeWhale/issues/4032)

- **#4042 — Environment-level tool sandboxing for sub-agents** (CLOSED)  
  Author: JayBeest | Comments: 14  
  Confirmed that `--disallowed-tools` works, but enforcement gaps remain across sessions, sub-agents, Fleet workers, and MCP servers. Closed as implemented, but community notes the doc coverage is still thin.  
  [GitHub Link](https://github.com/Hmbown/CodeWhale/issues/4042)

- **#4410 — Restore xAI device-code OAuth login** (OPEN, release-blocker)  
  Author: Hmbown | Comments: 6  
  A hard-coded OAuth path mismatch breaks all xAI logins. This is flagged as a **release-blocker** because it completely prevents users from authenticating with xAI.  
  [GitHub Link](https://github.com/Hmbown/CodeWhale/issues/4410)

- **#4568 — New slash commands (/xxx) sluggish** (OPEN)  
  Author: whp233 | Comments: 1  
  Chinese-language report: new version has noticeable delay on slash commands vs. near-instant previous version. Suggests performance regression. Minimal community reply so far.  
  [GitHub Link](https://github.com/Hmbown/CodeWhale/issues/4568)

- **#4564 — `--model` and `--toolsets` flags consumed as single arg on Windows** (OPEN)  
  Author: alozano978-spec | Comments: 1  
  npm global install on Windows breaks argument parsing for `codewhale exec --auto`. Proposes env var fallback as workaround. Low engagement but affects all Windows users.  
  [GitHub Link](https://github.com/Hmbown/CodeWhale/issues/4564)

- **#4547 — Transcript keeps running spinners for stale shell jobs** (OPEN)  
  Author: Hmbown | Comments: 0  
  Background shell jobs that go stale or disappear still show animated spinners and Stop controls. Directly impacts reliability and UX for long-running agent sessions.  
  [GitHub Link](https://github.com/Hmbown/CodeWhale/issues/4547)

- **#4542 — Verify Claude issue worker end-to-end** (CLOSED)  
  Author: Hmbown | Comments: 5  
  Maintainer verification of a merged automation workflow. All checks passed, confirming that the Claude-based issue handling pipeline gates correctly and stops at PR creation.  
  [GitHub Link](https://github.com/Hmbown/CodeWhale/issues/4542)

## Key PR Progress (10 of 49 total)

- **#4587 — docs(web): align the public surface with Blue Stage** (OPEN)  
  Carries the canonical Blue Stage semantic tokens into the public site, reserves Signal Gold for attention events, and documents the loopback-only embedded architecture.  
  [GitHub Link](https://github.com/Hmbown/CodeWhale/pull/4587)

- **#4586 — feat(tui): sharpen first-run control discovery** (OPEN)  
  Surfaces `/help`, `Ctrl+K`, and `codewhale doctor` during first-run setup, adds a localized first-run mental-model step for Modes and Say-so, and makes workspace trust boundary explicit.  
  [GitHub Link](https://github.com/Hmbown/CodeWhale/pull/4586)

- **#4585 — perf(tui): coalesce repeated read-only calls** (CLOSED)  
  Tracks and deduplicates read-only tool calls per user turn, merging identical calls into one physical execution. Aims to reduce latency and provider costs.  
  [GitHub Link](https://github.com/Hmbown/CodeWhale/pull/4585)

- **#4583 — feat(tui): make Blue Stage the default grammar** (CLOSED)  
  Establishes action blue (`#6AAEF2`) as the primary interaction accent, reserves Signal Gold for whale/human-attention, and replaces literal widget colors with semantic roles.  
  [GitHub Link](https://github.com/Hmbown/CodeWhale/pull/4583)

- **#4582 — fix: bypass MCP tool deferral when trust_mode or Bypass approval active** (CLOSED)  
  MCP tools were hidden from the model even in Full Access Agent mode. Now they appear correctly when `trust_mode=true` and `auto_approve=true` are set.  
  [GitHub Link](https://github.com/Hmbown/CodeWhale/pull/4582)

- **#4579 — feat(web): add provider-native search backend** (CLOSED)  
  Gates native web search on three-state capability facts for OpenAI, Anthropic, and xAI. Reuses the active authenticated route with narrow fetch scoping.  
  [GitHub Link](https://github.com/Hmbown/CodeWhale/pull/4579)

- **#4578 — feat(routes): carry sourced capability facts** (CLOSED)  
  Adds canonical three-state route capability facts (`supported`/`unsupported`/`unknown`) and projects offering data into authoritative route candidates.  
  [GitHub Link](https://github.com/Hmbown/CodeWhale/pull/4578)

- **#4577 — feat(web): add bounded backend failover and query cache** (CLOSED)  
  Configurable search chain fallback (selected API → DuckDuckGo), typed degradation receipts, and a 15-minute session-scoped query cache.  
  [GitHub Link](https://github.com/Hmbown/CodeWhale/pull/4577)

- **#4574 — feat(tools): make terminal outcomes explicit** (CLOSED)  
  Adds a typed terminal outcome contract (succeeded, failed, denied, cancelled, timed out) and routes cancellation and timeout sites through explicit errors.  
  [GitHub Link](https://github.com/Hmbown/CodeWhale/pull/4574)

- **#4571 — test(work-graph): prove acceptance and migration continuity** (CLOSED)  
  Adds real-PTY proof tests for legacy Plan/To-do migration, Ctrl+T typed activity, save/export consistency, and fresh-process restore.  
  [GitHub Link](https://github.com/Hmbown/CodeWhale/pull/4571)

## Feature Request Trends

- **Tool sandboxing & governance**: Multiple issues/PRs address enforcing tool restrictions across sub-agents, Fleet workers, and MCP servers (Issues #4042, PR #4582). The community wants consistent, auditable tool permissions.
- **Provider-native capabilities**: Significant investment in search, fetch, and citation pipelines (PRs #4576–#4580) suggests a push toward first-class web integration without third-party aggregators.
- **Blue Stage design system**: A coordinated redesign of the TUI's color grammar (PRs #4583, #4587) indicates a formal design language is being established.
- **Export & provenance**: PR #4581 adds structured conversation export with safe metadata — users want to share and audit agent sessions.

## Developer Pain Points

- **Windows argument parsing bug** (Issue #4564): The `--model` and `--toolsets` flags break on Windows, a recurring platform-specific frustration for non-Unix developers.
- **xAI OAuth completely broken** (Issue #4410): A trivial path mismatch in the device-code URL blocks all xAI authentication, flagged as a release-blocker.
- **Performance regression on slash commands** (Issue #4568): New version apparently introduced latency on a fundamental interaction pattern — suggests insufficient regression testing.
- **Stale spinner UX** (Issue #4547): Background jobs that disappear or go stale leave phantom UI elements, degrading session manageability for long-running tasks.
- **Agent instruction adherence** (Issue #4032, 39 comments): Codewhale's tendency to ignore user-provided scripts and self-justify remains the highest-engagement issue, reflecting deep concerns about agent reliability and transparency.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kky-wollu/agents-radar).*