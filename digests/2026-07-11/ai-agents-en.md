# OpenClaw Ecosystem Digest 2026-07-11

> Issues: 427 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-11 01:12 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-07-11

## 1. Today’s Overview
The OpenClaw repository is in a period of very high activity. In the last 24 hours, 427 issues and 500 pull requests were updated, with a near-equal split between open and closed items (230 open issues, 197 closed; 317 open PRs, 183 merged/closed). No new releases were published. The community is actively reporting bugs and requesting features, while maintainers are making steady progress on fixes and improvements across the gateway, plugins, and UI layers. Several high-severity issues remain open and under discussion, indicating that stability and security are top concerns.

## 2. Releases
No new releases have been published recently. The latest available version is implied by the data to be `v2026.5.18` (referenced in issue #83959) but no official release notes were provided for this period.

## 3. Project Progress
In the last 24 hours, several pull requests were closed/merged, representing incremental fixes and features:

- **#104028** – Fixed a flaky exec-approvals socket guard test on macOS and corrected state directory creation permissions (0700 directly).
- **#104024** – Fixed UTF-16 pair handling in the TUI’s long-token display, preventing surrogate-split replacement characters.
- **#104001** – Simplified the Android Canvas standby surface (AI-assisted, visual change).
- **#103727** – Normalized local dispatch request paths in the browser tool, fixing route matching with repeated trailing slashes.
- Several closed issues were also resolved during this period, including the Discord WS reconnect bug (#99681), the control UI CSP violation (#78362), the inverted `minSecurity` ranking (#91283), and the sandbox zombie process accumulation (#68691). These indicate that the maintainers are actively closing out long-standing reliability and security bugs.

## 4. Community Hot Topics
The following issues generated the most discussion and reactions, reflecting deep user concerns:

- **#99241 – Tool outputs rendered as image attachments (P1, 20 comments)** – In long-running or ANSI-heavy workflows, tool results collapse into unreadable `(see attached image)` placeholders, breaking the agent’s ability to read its own stdout/stderr. This is a critical session-state and message-loss issue.
- **#102175 – Embedded prompt cache breaks across boundaries (P2, 16 comments)** – A regression where long-lived sessions lose prompt-cache continuity across `room_event` turns, policy changes, and compaction recovery. User `baanish` reported it less than 3 days ago.
- **#10659 – Masked Secrets to prevent agent access to raw API keys (P1, 15 comments, 4 👍)** – A long-running feature request (since February) to let agents *use* secrets without *seeing* them, protecting against prompt injection extraction. Still seeking security review and product decision.
- **#91588 – Gateway memory leak from 350MB to 15.5GB (P0, 15 comments)** – A critical stability issue causing repeated OOM crashes on macOS, affecting long-running gateway processes. Tagged as `platinum hermit` (highest severity rating).
- **#12602 – Slack Block Kit support (P2, 14 comments)** – Users want richer, interactive Slack messages (CRM summaries, database results, forms). Currently only plain text with markdown is available.
- **#63829 – Per-agent memory-wiki vault configuration (closed, 13 comments, 10 👍)** – This feature was heavily requested and is now closed, implying it may have been implemented or superseded. High community desire for isolated knowledge wikis in multi-agent setups.
- **#7722 – Filesystem Sandboxing Config (P2, 11 comments, 4 👍)** – Users want a configurable `tools.fileAccess` to restrict which files an agent can read/write, improving security but currently facing implementation issues.

Underlying needs: Users are demanding better session continuity, prompt security, and platform-specific rich formatting. The tool output degradation (image placeholders) is a particularly painful UX regression.

## 5. Bugs & Stability
The following bugs were reported or updated in the last 24 hours, ranked by severity:

- **P0 – Gateway Memory Leak (#91588)** – RSS grows from 350MB to 15.5GB over days, causing OOM killer termination. No fix PR is linked; labeled `clawsweeper:needs-live-repro`. Critical.
- **P0 – Hosted Molty model selector not persisting (#101763)** – Dotted model id (`claude-opus-4.8`) instead of valid dashed form, causing API failures. No fix PR yet; needs info.
- **P1 – Tool outputs rendered as image attachments (#99241)** – Agent cannot read its own tool results. No fix PR linked; needs product decision and live repro.
- **P1 – WhatsApp session stalls on long model_call (#84569)** – Incomplete turn with stalled_agent_run, reply never delivered. Linked PR open (#103562? Not certain, but #84569 has `linked-pr-open` label). Fix likely in progress.
- **P1 – Codex app-server startup retries can exhaust (#83959)** – Scheduled agent turns fail because replacement server not ready. Linked PR open.
- **P1 – Discord plugin does not auto-reconnect after 1006 WS close (#99681)** – **CLOSED** – This was fixed; the PR #104001? Actually #99681 closed. Good.
- **P1 – Gateway heap grows to 1073MB+ at idle on macOS (#87109)** – Cron jobs silently fail under memory pressure. No fix PR; needs info.
- **P2 – Embedded prompt cache regression (#102175)** – Breaks across room-event and policy boundaries; linked PR open? Not explicitly, labeled `clawsweeper:source-repro`.
- **P2 – Persistent provider cooldown blocks users after billing recovery (#70903)** – Stale, requires maintainer review.
- **P2 – Concurrent allow-always approvals lose entries (#44749)** – **CLOSED** – Data-loss race condition fixed.

New fix PRs for related bugs: #103562 (Discord reply session init conflicts), #103801 (gateway hot-reload mixed state), #103880 (hot-reload subsystem consistency). The maintainers are actively addressing session-state and message-delivery bugs.

## 6. Feature Requests & Roadmap Signals
The following feature requests received significant attention and may be candidates for upcoming releases:

- **Masked Secrets (#10659)** – 4 👍, open since February, P1, needs security and product review. High demand and security-critical.
- **Slack Block Kit (#12602)** – 0 👍 but 14 comments; P2, open since February. Strong interest in richer Slack integration.
- **Filesystem Sandboxing Config (#7722)** – 4 👍, P2, waiting for maintainer review. Would improve security significantly.
- **Per-agent memory-wiki vault (#63829)** – Now closed, suggesting a solution exists or was merged. Likely to appear in next stable release.
- **Webhook session reuse (#11665)** – 0 👍 but 10 comments, P2, linked PR open. The documented multi-turn support doesn't work; a fix is in progress.
- **Sub-agent announce suppression (#8299)** – 1 👍, 9 comments. Simple config option to disable sub-agent summary posts – a common user request.
- **Context overflow error improvement (#9409)** – 3 👍, 8 comments. Users want specific model/token information on overflow.
- **TUI accessibility (#9637)** – 0 👍, 7 comments but important for screenreader users. P2, needs maintainer review.
- **Batch API support for background tasks (#9865)** – 0 👍, 5 comments. Cost savings opportunity for cron jobs.
- **Ralph Loop max iteration config (#6890)** – 3 👍, 6 comments. Would give users control over infinite loops.

Predicting next version content: The closed per-agent wiki vault (#63829) and Discord reconnection fix (#99681) are strong candidates. The webhook session reuse PR (#11665) has a linked PR and may land soon. Masked secrets (#10659) is a heavy lift (security review, product decision) but could be part of a larger security push.

## 7. User Feedback Summary
Real user pain points and satisfaction signals from the data:

- **Session state and message loss** are the most frequently cited negative experiences (issues #99241, #102175, #84569, #85714, #68691). Users report agents losing context, failing to deliver replies, or getting stuck in loops.
- **Security concerns** are prominent: users want masked secrets (#10659), filesystem sandboxing (#7722), and better OAuth handling (#8673). The race condition in `exec-approvals.json` (#44749, now closed) indicates security-sensitive data can be silently lost.
- **Cost visibility** is a recurring theme: requests to expose model/cost from openrouter/auto (#7006) and premium request percentage in `/usage` (#7379).
- **Platform-specific gaps** are frustrating users: Slack lacks Block Kit (#12602), Telegram lacks sticker support (#7476), WhatsApp lacks call event handling (#7540), and Feishu drive has pagination bugs (#93928).
- **Positive signals**: The closing of long-standing issues (Discord reconnect, zombie processes, CSP violation, minSecurity inversion) suggests that the maintainers are responsive to critical reports. The high number of PR merges today indicates a healthy development velocity.
- **Unmet needs**: Many features stagnate in "needs maintainer review" or "needs product decision" status for months (e.g., #10659, #7722, #7724). This may frustrate users who see no movement on popular requests.

## 8. Backlog Watch
The following important issues and PRs are long-unanswered or stuck in review and need maintainer attention:

- **#10659 – Masked Secrets** (open since Feb 6, P1, needs security review and product decision) – High community interest but no forward motion in 5 months.
- **#7722 – Filesystem Sandboxing Config** (open since Feb 3, P2, needs maintainer review) – Also security-related, stalled.
- **#8299 – Sub-agent announce suppression** (open since Feb 3, P2, needs product decision) – Simple config change, could be a quick win.
- **#9409 – Context overflow message** (open since Feb 5, P2, needs maintainer review) – Low implementation risk, high UX impact.
- **#9637 – TUI accessibility** (open since Feb 5, P2, needs maintainer review) – Important for inclusive design.
- **#91588 – Gateway memory leak** (open since Jun 9, P0, needs live repro) – Critical but not yet reproducible, blocking fix.
- **#7416/7524 – Group session consolidation** (open since Feb 2, P2, needs security review and product decision) – 4 👍, would simplify multi-group workflows.
- **PR #78574 – GitHub Copilot native web search** (open since May 6, needs proof) – Awaiting behavioral proof; could be a valuable integration.
- **PR #90828 – macOS launchd stderr log file** (open since Jun 6, needs proof) – Diagnostic improvement for gateway crashes, stuck in review.

Several of these have been lingering for 4–5 months. The maintainers may want to triage them to either close, defer, or assign to a milestone to clear the backlog.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent Open-Source Ecosystem

**Date:** 2026-07-11  
**Analyst:** Senior Ecosystem Analyst

---

## 1. Ecosystem Overview

The personal AI agent open-source landscape remains in a period of intense maturation, characterized by a clear post-major-release stabilization wave across leading projects. While several projects (OpenClaw, CoPaw, LobsterAI) shipped or are preparing significant version milestones, the community feedback increasingly converges on shared pain points: session state reliability, prompt cache continuity, and sandbox security. A notable bifurcation is emerging between "gateway-first" architectures (OpenClaw, ZeroClaw, NullClaw) that prioritize multi-channel message routing vs. "runtime-first" designs (Hermes Agent, NanoBot, IronClaw) that optimize agent execution, tool calling, and context management. The ecosystem is also seeing strong demand for production-grade features—multi-tenant isolation, OAuth correctness, and observability—that were absent in earlier iterations. Despite high activity levels, several projects are grappling with regression velocity outpacing fix deployment, particularly around major version transitions.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Merged/Closed PRs | New Release | Health Score |
|---------|----------------------|-------------------|-------------------|-------------|--------------|
| **OpenClaw** | 427 | 500 | 183 merged | None (latest v2026.5.18) | 🟡 High activity, critical P0 bugs |
| **NanoBot** | 9 | 42 | 17 merged | None | 🟢 Strong iteration, few severe bugs |
| **Hermes Agent** | 50 | 50 | 2 merged | None | 🟡 High volume, active bug fixes |
| **PicoClaw** | 3 | 18 | 1 merged | None | 🟢 Moderate, security-focused |
| **NanoClaw** | 3 | 25 | 10 merged | None | 🟢 Healthy, strong merge velocity |
| **NullClaw** | 2 | 0 | 0 merged | None | 🔴 Minimal activity, 2 critical bugs |
| **IronClaw** | 36 | 50 | 13 merged | None (draft release PR open) | 🟡 Intense bug bash phase |
| **LobsterAI** | 3 | 17 | 10 merged | **v2026.7.10** | 🟢 Recent release, active fixes |
| **CoPaw** | 44 | 49 | 26 merged | **v2.0.0 Stable** | 🟡 High activity, critical regressions |
| **Moltis** | 0 | 1 | 0 merged | None | 🟢 Stable, low activity |
| **TinyClaw** | 0 | 0 | 0 merged | None | ⚪ No activity |
| **ZeptoClaw** | 0 | 0 | 0 merged | None | ⚪ No activity |
| **ZeroClaw** | 20 | 50 | 4 merged | None | 🟡 Moderate, S1 bugs present |

**Key observations:**
- OpenClaw dominates raw volume (427 issues, 500 PRs) but carries high-severity risk.
- CoPaw's v2.0.0 launch generated 26 merged PRs in 24h—strong stabilization push.
- NullClaw's zero merges with two critical bugs (security bypass, Telegram failure) is a red flag.
- Nanobot and LobsterAI show the healthiest ratio of merges to open items.

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale of community engagement:** With 427 issues and 500 PRs updated daily, OpenClaw dwarfs all peers in raw contributor attention. This creates faster bug identification and broader feature surface.
- **Maturity of gateway architecture:** OpenClaw's gateway layer is the most battle-tested in the ecosystem, handling Slack Block Kit requests (#12602), Discord reconnection (#99681), and WhatsApp session stalls (#84569) simultaneously.
- **Comprehensive plugin ecosystem:** No other project matches the breadth of plugin integrations—from MCP to WeChat to Telegram to Slack.
- **TUI polish:** Fixes like UTF-16 pair handling (#104024) and Android Canvas surface simplification (#104001) demonstrate attention to UI detail that rivals lack.

**Technical Approach Differences:**
- OpenClaw uses a **gateway-centric** model where message routing and plugin orchestration are the core abstraction. This contrasts with IronClaw's **runtime-executor** model or NanoBot's **CLI-first** design.
- OpenClaw's "room_event" session model is more sophisticated than NullClaw's bearer-token A2A approach, but also more complex to debug (e.g., prompt cache continuity breakage #102175).

**Community Size Comparison:**
| Metric | OpenClaw | Nearest Peer (Hermes Agent) |
|--------|----------|----------------------------|
| Daily issue updates | 427 | 50 |
| Daily PR updates | 500 | 50 |
| Open issues | 230 | 44 |
| Open PRs | 317 | 48 |

OpenClaw has **~8x the daily activity** of its closest competitor, though this includes both core team and community contributions.

**Risk note:** The sheer volume means high-severity issues (P0 memory leak #91588) can persist longer than in smaller projects where maintainers can triage more selectively.

---

## 4. Shared Technical Focus Areas

The following requirements emerged across **multiple projects** in the last 24 hours:

| Requirement | Projects Affected | Specific Needs |
|-------------|------------------|----------------|
| **Secure secrets management** | OpenClaw (#10659), PicoClaw (#3246 - MQTT TLS), NullClaw (#974 - A2A auth bypass) | Masked secrets for agents, per-task authorization, TLS hardening |
| **OAuth/credential correctness** | PicoClaw (#3239 - OAuth refresh), CoPaw (#5947 - MCP access policy), IronClaw (#52496 - provider overwrite) | Provider-specific payloads, race-free refresh, policy enforcement |
| **Session continuity & cache** | OpenClaw (#102175 - prompt cache), NanoBot (#4867 - Ollama cache), CoPaw (#5856 - tool_call compaction) | Prompt prefix preservation, compaction not breaking state |
| **Channel reliability** | NullClaw (#972 - Telegram idle), OpenClaw (#99681 - Discord reconnect), PicoClaw (#3178 - WhatsApp WS), ZeroClaw (#5514 - Telegram duplicates) | Keepalive, auto-reconnect, media group handling |
| **LLM cost visibility** | OpenClaw (#7006), IronClaw (#50395), LobsterAI (#1337) | Per-turn token counts, model pricing, cache hit rates |
| **Multi-agent context isolation** | LobsterAI (#2293 - USER.md overwrite), IronClaw (#32107 - multi-user), OpenClaw (#63829 - per-agent vault) | Independent wikis, separated memory, user-scoped A2A |
| **Performance under load** | OpenClaw (#91588 - memory leak), CoPaw (#5951 - sandbox explosion), ZeroClaw (#8929 - duplicated narration) | Memory growth, process leaks, recursion guards |

**Underlying ecosystem need:** The convergence on these 7 areas suggests that **production readiness**—not novelty—is the industry's current bottleneck. The basic "agent that answers questions" is mature; the difficult work is making it secure, reliable, and observable at scale.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | IronClaw | CoPaw |
|-----------|----------|---------|--------------|----------|-------|
| **Core philosophy** | Gateway + plugin orchestration | CLI-first, lightweight | Runtime + MCP ecosystem | Reborn runtime resilience | AgentScope 2.0 integrated |
| **Target user** | Power users, multi-platform | Developers, local model users | Enterprise teams, Slack | SWE-bench competitors | Academic + production |
| **Key strength** | Channel breadth, community size | Speed, Ollama optimization | Memory/knowledge architecture | Loop iteration, error recovery | Structured workflows |
| **Key weakness** | Regression velocity, P0 bugs | Limited channel support | Bug fix lag vs. feature PRs | Slack integration fragility | v2.0.0 regression wave |
| **Architecture** | Monorepo gateway | Modular CLI | Plugin-based runtime | Workspace + harness | AgentScope kernel |
| **Security posture** | Needs masked secrets (#10659) | Unauthenticated restart (#4776) | Credential exposure (#62336) | Hardened MQTT, OAuth fixes | Sandbox explosion (#5951) |
| **Community model** | Open, high volume | Contributor-driven | Core team + PRs | Bug bash cycles | Sponsor-backed (Alibaba?) |

**Emerging architectural split:**
- **Message-router projects** (OpenClaw, ZeroClaw, PicoClaw, NullClaw) optimize for connecting agents to multiple chat platforms.
- **Agent-executor projects** (NanoBot, Hermes Agent, IronClaw, CoPaw) optimize for how agents think, call tools, and manage context.
- **LobsterAI** sits in the middle, with both cowork (collaboration) features and multi-agent support.

---

## 6. Community Momentum & Maturity

**Tier 1: High-velocity iteration** (10+ PRs merged/day, active releases)
- **OpenClaw** – 183 PRs merged, but 317 still open; rapid but noisy
- **CoPaw** – 26 merged PRs, v2.0.0 stable launch; stabilization phase
- **NanoBot** – 17 merged PRs; cleanest iteration-to-merge ratio
- **IronClaw** – 13 merged PRs, intense bug bash; preparing release

**Tier 2: Moderate, steady progress** (3-10 merged PRs/day)
- **NanoClaw** – 10 merged PRs, strong refactoring
- **LobsterAI** – 10 merged PRs, fresh release
- **ZeroClaw** – 4 merged PRs, v0.8.3 trackers active

**Tier 3: Low activity / maintenance mode**
- **PicoClaw** – 1 merged PR, security focus
- **Hermes Agent** – only 2 merged despite 50 PRs; low merge-throughput ratio
- **Moltis** – 0 merged, 1 open PR; effectively stable

**Tier 4: Stalled / Inactive**
- **NullClaw** – 0 merged PRs, critical bugs unaddressed
- **TinyClaw** – No activity
- **ZeptoClaw** – No activity

**Maturity assessment:**
- **Stabilizing:** CoPaw (post-v2.0.0), LobsterAI (post-v2026.7.10)
- **Rapidly iterating:** OpenClaw, NanoBot, Nanoclaw
- **In transition:** IronClaw (bug bash → release), ZeroClaw (toward v0.8.3)
- **At risk:** NullClaw (needs maintainer response), Hermes Agent (low merge rate vs. PR inflow)

---

## 7. Trend Signals

**1. The collapse of "works for me" – Security is now table stakes.**
Multiple projects are grappling with authorization bypasses (NullClaw #974), credential leakage (Hermes Agent #62336), and default-insecure TLS (PicoClaw #3246). The community is no longer accepting "it runs locally" as a security model. **Implication for developers:** Any new agent project must ship with least-privilege secrets management and per-tenant isolation from day one.

**2. Prompt caching is the new performance bottleneck.**
NanoBot (#4867) reports 60s/turn overhead when caching breaks; OpenClaw (#102175) sees regression across room boundaries; CoPaw (#5856) loses tool_call structure during compaction. As LLM APIs charge per token, cache hit rate directly impacts both latency and cost. **Implication:** Agent frameworks must make `cache_control` metadata a first-class concern, not an afterthought.

**3. Multi-agent is hard – really hard.**
The USER.md overwrite bug (LobsterAI #2293), cross-context leakage (NullClaw #974), and per-agent vault requests (OpenClaw #63829) all point to a fundamental challenge: agents designed for single-user, single-agent workflows do not gracefully scale to multi-agent, multi-user deployments. **Implication:** Architects should plan for agent isolation from the start—shared memory, shared files, and shared credentials all become attack surfaces.

**4. The "MCP gap" is widening.**
Projects that invested in MCP (Hermes Agent, IronClaw, OpenClaw) are seeing feature requests for MCP access control, structured SSE output (#5930), and MCP server reconnect. Projects without MCP support risk losing integration-hungry users. **Implication:** MCP is becoming the de facto standard for tool interconnection; frameworks without it will need to build adapters or lose ecosystem share.

**5. Channel reliability is the forgotten UX.**
Telegram, WhatsApp, and Slack bugs appear across 7 of 13 projects, with users complaining about silent failures, duplicate messages, and idle disconnections. As agents move from prototyping to daily use, the chat integration layer becomes the most visible failure point. **Implication:** "It works on Slack" is not a feature—it's a minimum requirement. Projects should invest in channel health monitors and automated reconnect logic.

**6. Observability shifts from nice-to-have to must-have.**
ZeroClaw (#8933) adds OTel conversation IDs; IronClaw's bug bash tracks "RunFailureReason"; OpenClaw users demand cost-per-request breakdowns (#7006). The era of "just check the logs" is ending. **Implication:** Instrumentation for cost, latency, error rates, and memory usage should be built into the core runtime, not bolted on.

**7. The "distillation death spiral" is real.**
Context compression fabrication (Hermes Agent #62378, CoPaw #5856) where the LLM hallucinates user inputs during summarization is a growing concern. As agents auto-compress their own histories, they risk feeding synthetic data back to themselves. **Implication:** Framework developers need guarantees—or at least warnings—that compressed representations are faithful to the original turn data.

---

**Bottom line for decision-makers:** The ecosystem is transitioning from "can it work?" to "will it survive production?" The winners in the next 12 months will be those who solve reliability, security, and multi-agent isolation—not those who add the most features. OpenClaw leads in community scale but carries regression risk; NanoBot and LobsterAI show the highest discipline in merge quality; NullClaw and TinyClaw may be losing relevance.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-11

## 1. Today’s Overview
The project saw **very high activity** over the last 24 hours: **42 pull requests** were updated (17 merged/closed) and **9 issues** received updates (7 still open). No new releases were tagged. The community is actively submitting both bug fixes and feature work, with several high-priority patches moving through review. Security, stability, and quality-of-life improvements dominate the current cycle, while a handful of long-running feature PRs remain in conflict or review.

---

## 2. Releases
*None*

---

## 3. Project Progress (Merged/Closed PRs)
17 PRs were merged or closed in the last day. Key closures include:

- **#4635** [closed] – `fix(tools): enforce exact edit_file line hints`  
  Treats `line_hint` as an exact consistency guard, rejecting edits that do not cover the hinted line.  
  [PR #4635](https://github.com/HKUDS/nanobot/pull/4635)

- **#4623** [closed] – `feat(subagent): allow spawn model override`  
  Adds an optional `model` parameter to the `spawn` tool, forwarded to subagent runs.  
  [PR #4623](https://github.com/HKUDS/nanobot/pull/4623)

- **#4622** [closed] – `feat(cron): support job model presets`  
  Enables per-cron-job `model_preset` configuration without mutating the live agent model. Fixes #4378.  
  [PR #4622](https://github.com/HKUDS/nanobot/pull/4622)

- **#4876** [closed] – `feat(webui): guide queued prompt with second Enter`  
  Lets users press Enter a second time to send a typed prompt during an active response, with disarming guards.  
  [PR #4876](https://github.com/HKUDS/nanobot/pull/4876)

- **#4877** [closed] – `feat(webui): highlight file previews and diffs`  
  Adds lazy Prism syntax highlighting to unified diffs and file previews.  
  [PR #4877](https://github.com/HKUDS/nanobot/pull/4877)

- **#4832** [closed] – `fix(cli): handle CSI-u Shift+Enter instead of dumping raw escapes`  
  Fixes a terminal regression from #4614.  
  [PR #4832](https://github.com/HKUDS/nanobot/pull/4832)

- **#4860** [closed] – *Issue* with missing `onboard`/`webui` commands was closed (likely resolved via documentation or install fix).  
  [Issue #4860](https://github.com/HKUDS/nanobot/issues/4860)

Other active open PRs that advanced include fixes for exec session isolation (#4862), memory delivery context (#4627), and MCP reconnect crash (#4843).

---

## 4. Community Hot Topics

**Most commented issue:**
- **#4253** – `[enhancement] support overriding model per conversation` (6 comments)  
  User wants to alternate between OpenRouter and local LlamaCpp models per chat. The underlying need is flexible model switching for privacy/performance trade-offs.  
  [Issue #4253](https://github.com/HKUDS/nanobot/issues/4253)

**High-urgency performance/UX issue:**
- **#4867** – `[enhancement] Preserve exact prompt prefix to enable caching in Ollama` (3 comments)  
  User reports that NanoBot adds 60 seconds per turn by breaking Ollama’s prompt cache. This is a **critical usability blocker** for local model users.  
  [Issue #4867](https://github.com/HKUDS/nanobot/issues/4867)

**Other active discussions:**
- #4231 – `feat: Add model parameter to spawn tool` (2 comments) – aligns with the now-merged PR #4623.  
- #4634 – `Improve edit_file target disambiguation` (2 comments) – closed after fix PR #4635.  
- #4860 – `no such command "onboard" or "webui"` (2 comments) – closed, possibly resolved.

---

## 5. Bugs & Stability

| Severity | Bug | Issue/PR | Fix Status |
|----------|-----|----------|------------|
| **High** | `/restart` command bypasses authorization — any paired user can DoS the process | [#4776](https://github.com/HKUDS/nanobot/issues/4776) | Not yet fixed (open) |
| **High** (performance) | Extra 60s per turn when using Ollama due to broken prompt caching | [#4867](https://github.com/HKUDS/nanobot/issues/4867) | Open, no fix PR yet |
| **Medium** | WebUI landing message can be sent to an unrelated existing chat | [#4835](https://github.com/HKUDS/nanobot/issues/4835) | Closed (fixed) |
| **Low** | `dream` creates empty commits on every run, even when no changes | [#4872](https://github.com/HKUDS/nanobot/issues/4872) | Fix PR #4873 open |
| **Medium** | MCP reconnect crash due to stale AsyncExitStack cleanup | [#4843](https://github.com/HKUDS/nanobot/pull/4843) | PR open (p1) |
| **Low** | CLI raw escape dumps on certain terminals (Shift+Enter regression) | [#4832](https://github.com/HKUDS/nanobot/pull/4832) | Fixed (merged) |
| **Low** | Missing `onboard`/`webui` commands after install | [#4860](https://github.com/HKUDS/nanobot/issues/4860) | Closed |

The security issue #4776 (unauthenticated restart) stands out as the most critical unresolved bug.

---

## 6. Feature Requests & Roadmap Signals

**Requests likely to land soon (based on merged/active PRs):**
- **Model override per conversation** (#4253) – partially addressed by `spawn` override (#4623 merged); a more complete per-conversation override may follow.
- **Prompt prefix preservation for caching** (#4867) – high priority, but no PR yet; would require changes to how NanoBot prepends system prompts.
- **Cron job model presets** (#4378) – **already merged** via PR #4622.
- **Sustained-goal opt-in flag** – PR #4879 (open) gates the feature behind a default-off flag, addressing user interaction blocking.
- **Auto-discovery of agent hooks** – PR #4878 (open) introduces convention-based hook registration.

**Trends:**
- Community strongly desires **flexible model routing** (per-chat, per-subagent, per-cron).
- **Latency/caching** is a growing pain point as more users run local models.
- **WebUI polish** (file previews, prompt guiding) continues to advance.

---

## 7. User Feedback Summary

**Pain points:**
- *“I would like to alternate [models] based on privacy requirements/time sensitivity.”* (#4253) – model switching is a top request.
- *“Nanobot adds an extra 60 seconds to every single turn… totally unusable with Ollama.”* (#4867) – severe performance regression.
- *“The commands mentioned on the website don’t exist? I’ve tried `nanobot onboard` and `nanobot webui` with no luck.”* (#4860) – documentation/install confusion.
- *“The `/restart` command has zero authorization… any paired user can DoS the process.”* (#4776) – security concern.
- *“Dream creates a new commit on every run, regardless of whether there were any changes.”* (#4872) – unnecessary git noise.

**Satisfaction signals:**
- Active community contributions (42 PRs in 24h) show strong engagement.
- Multiple feature PRs (subagent override, cron presets, webUI highlights) are being accepted quickly.
- No widespread regression reports beyond the Ollama caching issue.

---

## 8. Backlog Watch

Issues and PRs that have been open for **more than two weeks** without maintainer response or merge action:

- **#4253** (opened June 8) – Model override per conversation. Still open despite high user interest; maintainers may want to consolidate with #4623.  
  [Issue #4253](https://github.com/HKUDS/nanobot/issues/4253)

- **#4231** (opened June 7) – Spawn model override. Now superseded by merged PR #4623; should be closed as completed.

- **#4378** (opened June 17) – Cron job model presets. **Fixed** by PR #4622, but the issue remains open – needs closure.

- **#4205** (opened June 5) – Mailbox-backed subagent results. This PR is marked *conflict* and has not been merged; alternative implementation exists in #4624.  
  [PR #4205](https://github.com/HKUDS/nanobot/pull/4205)

- **#4588** (opened June 29) – Context/token optimization via compaction. Marked *performance, conflict* – awaiting maintainer decision.  
  [PR #4588](https://github.com/HKUDS/nanobot/pull/4588)

- **#4571** (opened June 28) – Native A2A peer delegation. Marked *feature, conflict* – a large architectural PR needing careful review.  
  [PR #4571](https://github.com/HKUDS/nanobot/pull/4571)

**Recommendation:** Maintainers should close issues #4231 and #4378 as completed, and triage the conflicting PRs (#4205, #4588, #4571) to either integrate or reject them to reduce backlog noise.

---

*Generated from GitHub activity on 2026-07-11.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-11

## 1. Today’s Overview
The project remains highly active with **50 issues** and **50 pull requests** updated in the last 24 hours. Of these, **44 issues are open/active** and **6 were closed**; **48 PRs are open** while **2 were merged or closed**. No new releases were published today. The volume of activity is typical for a fast-moving open‑source agent framework, with the core team and community alike focusing on bug fixes, stability improvements, and incremental feature delivery. A notable cluster of fix-PRs targets context‑compression fabrication, gateway deadlocks, and platform credential handling.

## 2. Releases
*None.* There were no new releases recorded in the last 24 hours.

## 3. Project Progress
Two pull requests were merged or closed today:

- **PR #62200 (merged)** – `fix(gateway): notify home channels after supervisor restart`  
  Ensures that when the gateway is restarted by a supervisor (e.g., `systemctl`), a “back online” message is sent to home channels, avoiding the appearance that the gateway is still down.

- **One additional PR closed** (not listed in the top‑20 by comment count) – exact details not available in the snapshot.

Three issues were closed:
- **#10835** – [Feature] Memory exposed via MCP server *(closed after implementation)*
- **#50295** – Bedrock Claude cost unknown — added cache cost fields and cross‑region prefix normalization *(fixed)*
- **#56891** – Duplicate feature request for per‑call model selection on `delegate_task` *(closed as duplicate)*

## 4. Community Hot Topics
The most engaged issues and PRs (by comment count or reactions) reveal deep technical and usability concerns:

- **#52496** (7 comments) – [Dashboard] `/api/model/set` rewrites named custom providers to `openrouter`. Users report that the dashboard model switcher persists the wrong provider for custom providers defined in `config.yaml`, breaking setups that rely on local or custom endpoints.

- **#48098** (7 comments) – Desktop shows stale “Summarizing thread” status after compaction resumes. A visual regression that confuses users about the agent’s actual state.

- **#28156** (5 comments) – Bedrock + Claude wizard accepts Bearer-only setup but runtime fails on missing IAM credentials; region‑pick lists unroutable global profiles in EU. Relates to two distinct credential‑resolution bugs.

- **#10835** (5 comments, now closed) – The desire to share Hermes memory (MEMORY.md) with external MCP clients (Claude Code, Cursor) was a long‑standing ask. Implementation now shipped.

- **#46947** (4 comments) – Outbound emails have no subject control — hardcoded `"Re: Hermes Agent"`. A pain point for users automating reports or cron‑driven notifications.

- **#9403** (4 comments) – Unimplemented Phase 4 of pricing architecture: user overrides, contract pricing, and sync CLI. Users want the ability to maintain custom pricing catalogs.

- **#32107** (1 comment, 7 👍) – Feature request for multiple users per agent with separated context. High interest (7 thumbs‑up) but low maintainer discussion — a strong signal for future investment.

## 5. Bugs & Stability
Several new bugs were reported today, and many already have associated fix PRs:

### High Severity
- **#62383** – [WeChat iLink] Cron delivery fails with `ret=-2` “rate limited” when `context_token` is stale. The API returns the wrong error code, causing missed deliveries.  
  → Fix PR: **#62386** (treat `ret=-2` as stale session)

- **#62378** (related to #62365) – Context compressor fabricates user requests. The LLM summarizer fills in `Historical Task Snapshot` with fake user inputs when none exist.  
  → Fix PR: **#62378** (adds fabrication‑prevention block to summarizer prompt)

- **#60385** – MCP server stdio processes leak on transport reconnect. Process count grows unbounded over hours. (P2, no fix PR yet)

### Medium Severity
- **#62324** – Desktop: `stage-native-deps.mjs` drops execute bit on `node-pty` spawn-helper, breaking the built‑in terminal on Linux. (duplicate)
- **#62336** – Terminal environment snapshots capture credential‑bearing env vars to disk (`cache/terminal/...`), a security boundary risk. (P3, fix PR **#62379** allows cleanup of Hermes‑owned temp files)
- **#62341** – Scheduled Jobs panel shows “No runs yet” for `no_agent` cron jobs despite successful executions.
- **#54756** – TUI/desktop stays stuck in busy state after task completes when final response is empty (P2, needs repro).
- **#57828** – Lazy backend refresh failures corrupt venv; no self‑healing recovery on subsequent `hermes update`.

### Low Severity / User Interface
- **#57104** – User and assistant message bubbles visually indistinguishable in Desktop.
- **#53329** – Non‑git project folders show duplicate lanes (`folder name` + `main`) with same sessions.
- **#48098** – (continued from previous) Stale status label persists after compaction.

## 6. Feature Requests & Roadmap Signals
Several features proposed today align closely with ongoing development:

- **#62339 / #62338** – Browser per‑profile tab lease/registry and per‑tab CDP target routing. Follow‑ups to #49691 for concurrent agent control of the same browser profile on separate tabs. These are being actively worked (authored by TheoLong, with PRs expected soon).

- **#62369** – Inject message timestamps into agent context for time awareness in long sessions. A simple but impactful request that could land in the next minor release.

- **#62375** – Desktop: make remote attachment uploads bounded and resumable (already has fix PR #62382).

- **#513** – Two‑phase context management (prune tool outputs before full compaction, inspired by Kilocode). Today PR **#62389** was opened implementing the prune‑first phase on an absolute token budget. This is likely to be merged in the next version.

- **#36656** – Volatile skills: load content for one turn only. Reduces context bloat from tool results.

- **#52807** – UI for configuring third‑party API providers (custom_providers) instead of manual `config.yaml` editing.

- **#44662** – Add `qwen3.7-plus` to the Alibaba coding‑plan model list.

- **#58731** – Per‑subagent model override in `delegate_task` (follow‑up to #56891 which was closed as duplicate – signal that the core team is aware and may consolidate).

**Prediction for next version (v0.16.x):** Prune‑first compression (#513, #62389), browser tab concurrency (#62339/62338), and bounded attachment uploads (#62375/#62382) are strong candidates. The context‑compression fabrication fix (#62378) is critical and will almost certainly be included.

## 7. User Feedback Summary
Common pain points expressed across today’s activity:

- **Credentials & provider configuration** – Multiple issues (#28156, #52496, #62383) highlight friction with AWS Bedrock authentication, custom provider overwriting, and stale session tokens. Users want more robust credential handling and clear error messages.
- **Email automation** – Hard‑coded subject lines in outbound emails (#46947) limit use‑cases for cron jobs and agent‑initiated notifications.
- **Desktop UI regressions** – Stale status indicators (#48098), indistinguishable message bubbles (#57104), and broken terminal on recent NVIDIA drivers (#40077) reduce trust in the desktop client.
- **Process leaks** – MCP server processes (#60385) and terminal snapshot credential exposure (#62336) raise security and stability concerns for production deployments.
- **Positive signals** – The quick turnaround on fabrication‑prevention (#62378) and attachment streaming (#62382) suggests the team listens to community bug reports. The high 👍 count on the multi‑user feature (#32107) indicates strong demand for collaborative use.

## 8. Backlog Watch
These issues have remained open for an extended period with limited maintainer activity, despite community interest:

- **#32107** – Multi‑user per agent with separated context (created May 25, 7 👍, no maintainer reply). This is the most‑voted open feature request.
- **#513** – Two‑phase context management (March 6). Now has a PR (#62389), so attention is finally being paid.
- **#3630** – Secrets management Phase 4: ephemeral secrets, external vaults, audit (March 28). Stalled since the Phase 3 merge.
- **#9403** – Pricing overrides, contract pricing, sync CLI (April 14). Phase 4 of pricing architecture remains unimplemented.
- **#46947** – Email subject control (June 16). No maintainer response yet; low severity but impacts automation workflows.
- **#37227** – Category‑aware smart skill indexing with lazy loading (June 2). A sophisticated feature that has not seen maintainer activity.

**Maintainer attention needed:** #32107 and #3630 represent significant architectural investments that would unlock enterprise/team usage. Their low engagement level may limit adoption growth.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

## PicoClaw Project Digest — 2026-07-11

### 1. Today’s Overview
The PicoClaw repository shows **moderate-to-high activity** over the past 24 hours. Three issues were updated (two open, one closed) and **18 pull requests** were updated (17 open, one merged/closed). No new releases were published. The development focus is on **security hardening, OAuth correctness, WhatsApp presence, and performance refactoring**. A batch of three small refactoring PRs from a single contributor (`corporatepiyush`) targets allocation reductions in the seahorse and skills modules, indicating ongoing attention to runtime efficiency.

### 2. Releases
**None** — no new releases were recorded on 2026-07-10.

### 3. Project Progress
One PR was **merged/closed** in the last 24 hours:
- **PR #3179** (fix(whatsapp): reconnect after websocket drops) — Authored by `Alix-007`. Implements proactive websocket reconnect logic, read deadlines, and async message dispatch for the WhatsApp native bridge. This addresses a known stability issue and was closed after review.

Additionally, **Issue #3178** (WhatsApp Websocket Timeout) was closed as stale; the fix in PR #3179 likely resolves the underlying problem.

No other features were merged, but several open PRs are advancing key functionality (see Sections 4 and 6).

### 4. Community Hot Topics
The most engaged items (by comments/reactions) are:

- **Issue #3178** [CLOSED] — *WhatsApp Websocket Timeout* (2 comments, closed as stale).  
  URL: [sipeed/picoclaw Issue #3178](https://github.com/sipeed/picoclaw/issues/3178)  
  *Need: Improving connection resilience for WhatsApp users under Docker/Launchpad.*

- **PR #3248** [OPEN] — *fix: bump Go to 1.25.12 to remediate stdlib vulnerabilities*.  
  URL: [sipeed/picoclaw PR #3248](https://github.com/sipeed/picoclaw/pull/3248)  
  *Need: Addressing two govulncheck findings in crypto/tls and os – critical for CI security.*

- **PR #3246** [OPEN] — *fix: security and robustness hardening (MQTT TLS, OAuth timeouts, bounded search reads)*.  
  URL: [sipeed/picoclaw PR #3246](https://github.com/sipeed/picoclaw/pull/3246)  
  *Need: Fixing multiple security/performance issues found during audit, especially insecure MQTT TLS default.*

The absence of comments on other 24-hr items suggests the maintainer team is primarily reviewing PRs rather than discussing issues in depth.

### 5. Bugs & Stability
Several bugs were reported or fixed in the last 24 hours. Ranked by severity:

| Severity | Bug | Status | Notes |
|----------|-----|--------|-------|
| **Critical** | **MQTT channel hardcodes `InsecureSkipVerify: true`** for all broker TLS connections | Fix PR #3246 open | Every MQTT connection is vulnerable to MITM – highest priority. |
| **High** | **OAuth refresh sends incompatible payloads per provider and can race** (`auth.RefreshAccessToken` uses form-encoded for all, includes fixed scope) | Issue #3239 open, fix PR #3241 open | Affects OpenAI (JSON required) and concurrent dashboard/provider checks. |
| **Medium** | **Go stdlib vulnerabilities** (`GO-2026-5856` in crypto/tls, `GO-2026-4970` in os) | Fix PR #3248 open | Requires toolchain bump to 1.25.12. |
| **Medium** | **Seed XML tool calls not parsed from OpenAI-compatible providers** | Fix PR #3165 open (stale) | Volcengine Doubao users lose structured tool calls. |
| **Low** | **WhatsApp websocket reconnection** | Fixed in PR #3179 (merged) | Previously caused broken sessions after read failures. |

**Note:** Three refactoring PRs (#3245, #3244, #3243) are not bug fixes but reduce memory allocations – no new regressions introduced.

### 6. Feature Requests & Roadmap Signals
New features requested or prototyped in the last 24 hours:

- **WhatsApp native typing presence** (Issue #3240, PR #3242) — Users reported no feedback while waiting for bot replies. The fix implements `channels.TypingCapable` with composing/paused signals. Likely for next release.
- **OAuth refresh provider-correct and concurrency-safe** (Issue #3239, PR #3241) — Needed to support OpenAI JSON semantics and prevent race conditions. Critical for multi-provider deployments.
- **Czech translations for code wrap options** (PR #3247) — Simple i18n addition.
- **Configurable default fallback chain** (PR #3200, stale) — Allows users to set model fallback order via web UI. Could appear in v0.3.2.
- **Simplex channel type** (PR #3193, stale) — Adds a new communication channel.
- **Agent collaboration bus** (PR #2937, stale since May 24) — First-class inter-agent messaging with mailboxes and permissions. Large feature, likely targeted for v0.4.0.

**Predictions:** The next minor release (v0.3.2) will probably include the Go toolchain bump, MQTT TLS fix, OAuth refresh fix, WhatsApp typing presence, and most ready refactoring PRs. The agent collaboration feature may take longer.

### 7. User Feedback Summary
Real pain points expressed or addressed in recent contributions:

- **WhatsApp usability**: Users on WhatsApp native channel experience silent waits with no typing indicator (Issue #3240). The PR addresses this directly.
- **OAuth integration headaches**: Multi-provider setups using OpenAI and Google hit refresh errors and race conditions (Issue #3239). Contributor `greencabe` provided both issue and fix.
- **Platform compatibility**: A user running PicoClaw on a Raspberry Pi 3 B+ with 9router gateway reported no ARM build target and incompatible response parsing (PR #3205). This PR adds ARMv7 support and 9router compatibility.
- **Security concerns**: The MQTT channel’s default insecure TLS was flagged as a severe oversight (PR #3246).
- **Positive contributions**: Community contributions for i18n (Czech locale), performance refactoring (`corporatepiyush`’s allocation cuts), and seed XML recovery show active and satisfied user-developers.

### 8. Backlog Watch
Several important PRs and issues remain **stale** with no recent activity from maintainers:

| Item | Opened | Priority | Reason for Attention |
|------|--------|----------|----------------------|
| **PR #2937** — Feat/agent collaboration | 2026-05-24 | High | Large feature with broad impact; untouched for >6 weeks. Needs review or roadmap decision. |
| **PR #3200** — feat: configurable default fallback chain | 2026-07-01 | Medium | Web UI enhancement with backend API; stale for 9 days. |
| **PR #3193** — Added simplex channel type | 2026-06-27 | Low–Medium | New channel integration; no updates in 13 days. |
| **PR #3165** — fix(openai_compat): recover Seed XML tool calls | 2026-06-24 | Medium | Needed for Volcengine Doubao users; stale for 16 days. |
| **PR #3205** — fix: support 9router gateway and ARMv7 | 2026-07-02 | Medium | Community contribution for Raspberry Pi; stale for 8 days. |
| **PR #1951** — chore: move installation scripts from docs repo | 2026-03-24 | Low | Infrastructure cleanup; stale for >3 months. |

**Observation:** The backlog includes at least one high-priority feature (agent collaboration) and several moderate-priority fixes that could block users on specific platforms. A maintainer review session would reduce staleness risk.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-11

## 1. Today’s Overview
Activity remains high with **25 pull requests updated** in the last 24 hours, of which **10 were merged or closed** — a strong sign of ongoing feature work and bug fixing. Three issues were updated (two closed, one new open bug). No new releases were cut, but several infrastructure‑level refactors (channel defaults, timestamp conventions, shared‑skill symlink handling) are nearing completion. Overall project health is healthy, with the core team pushing multiple fixes and architectural improvements.

## 2. Releases
*None.*

## 3. Project Progress
**9 merged/closed PRs** advanced several areas (see top‑20 list):

| PR | Title | Summary |
|----|-------|---------|
| #3011 | chore: ChannelDefaults declarations for all adapters + WhatsApp shared‑number fix | Every adapter now declares wiring‑time defaults (engage mode, threading, sender policy) instead of relying on core heuristics. |
| #3010 | feat: adapter‑declared channel defaults (engage mode, threading, sender policy) | Core refactor to move channel‑behaviour decisions into each channel’s own configuration. |
| #3009 | Move channel formatting skills (whatsapp, slack) from trunk to the channels branch | Prevents unwanted channel‑specific skills from being installed on every agent. |
| #3007 | fix: exchange archives stamp local time | Archives now use install timezone instead of raw UTC ISO. |
| #3006 | fix: ISO storage + local‑time display for all timestamps | Enforced consistent convention: storage in ISO‑Z UTC, display in local time. |
| #3005 | fix: stamp task rows with ISO timestamps | Fixes `insertTaskRow` to use ISO timestamps, aligning with chat timestamps. |
| #3004 | Context preview tool: render the exact agent context per scenario | Adds `scripts/context-preview.ts` for debugging agent context (prompt, tools, mounts). |
| #3003 | docs(agent‑browser): require bounded waits for custom conditions | Prevents unbounded wait loops in browser‑skill agents. |
| #3000 | fix(codex): footer token uses per‑turn value instead of cumulative | Codex UI now shows correct per‑turn token counts. |

**Key feature advances** (open PRs with high activity):
- **Provider‑agnostic persistent memory** (#3012, #3013) – shared memory tree across agents, loaded at startup.
- **iMessage unification** (#2999) – single channel with local/hosted backends.
- **Tasks: one‑door delivery** (#2988) – enforces explicit destination for all task outputs.

## 4. Community Hot Topics
Despite high PR volume, community comments and reactions are low. The most discussed issue is:

- **[#2415] – CLI group creation skips container_configs** (1 comment, closed)  
  *URL:* https://github.com/nanocoai/nanoclaw/issues/2415  
  *Analysis:* This long‑standing bug (May 2026) was finally closed, reflecting a recurring user pain point where CLI‑created groups fail to spawn containers.

- **[#3001] – Stale skill copies block symlinks** (0 comments, open)  
  *URL:* https://github.com/nanocoai/nanoclaw/issues/3001  
  *Analysis:* A new bug affecting groups created before the shared‑skills refactor; user reported that skill updates never reach those groups. A companion fix PR (#3002) was opened the same day, so community impact is being addressed quickly.

No PRs in the list received reactions or comments beyond the author/maintainer.

## 5. Bugs & Stability
| Issue | Severity | Summary | Fix Exists? |
|-------|----------|---------|-------------|
| #3001 (open) | **High** – regression affecting legacy groups; silent failure | Stale skill copies block managed symlinks, preventing updates from `container/skills/`. | ✅ PR #3002 (open) warns when a real entry blocks a symlink |
| #2415 (closed) | Medium – CLI bug, container spawn failure | `ncl groups create` skips `container_configs` row, causing “Container config not found” error. | Fixed (likely in a previous merge) |
| #2389 (closed) | Medium – silent message drops | CLI‑created wirings do not auto‑create destinations; responses are swallowed. | Fixed |
| #3008 (open) | Medium – WhatsApp SKDM breakage in LID groups | Cached group metadata with phone‑formatted JIDs breaks sender‑key distribution in LID‑mode groups. | ✅ PR #3008 provides the fix |
| #2996 (open) | Medium – delivery retry | Messages missing an adapter are now routed into the retry path instead of being dropped. | ✅ PR #2996 |
| #2998 (open) | Medium – MCP approval card | Full MCP server payload now rendered on the approval card. | ✅ PR #2998 |

All reported bugs have associated fix PRs already submitted, indicating responsive maintainer handling.

## 6. Feature Requests & Roadmap Signals
The following user‑facing features are being actively developed and are strong candidates for the next release:

- **Provider‑agnostic persistent memory** (#3012, #3013) – shared memory tree across agent providers, with Codex hook integration. A major architectural addition likely to land soon.
- **Unified iMessage channel** (#2999) – supports both local and hosted backends in one skill. Reduces fragmentation.
- **Telegram native rich rendering** (#2877) – uses Bot API 10.1 `sendRichMessage` for richer agent output. Open since June 28; may need more review.
- **Tasks: one‑door delivery** (#2988) – part 3/5 of the scheduled‑tasks train, enforces explicit destinations. Improves reliability.

**Predictions:** The memory system (#3012/#3013) will probably be merged within the next week, alongside the channel defaults refactor (#3010/#3011) which has already been approved. The scheduled‑tasks train (#2988) may follow in the subsequent release.

## 7. User Feedback Summary
**Pain points** expressed through bugs:
- CLI‑created groups and wirings have missing database rows, causing silent failures (message drops, container spawn failures). Users must manually edit the database or use alternative methods.
- Legacy groups created before the shared‑skills refactor are silently left behind; skill updates don’t propagate.
- Timestamp confusion (utc vs local) has been a recurring theme – now being resolved across storage, archives, and task rows.
- WhatsApp LID‑mode users encountered SKDM failures due to stale cached metadata.

**Satisfaction indicators:**
- All reported bugs received fix PRs within hours or days.
- The community contributed several high‑quality features (iMessage, Telegram rich rendering, memory system).
- The core team is actively refactoring major components (channel defaults, timestamp conventions) which should reduce future regressions.

## 8. Backlog Watch
| Item | Age | Status | Notes |
|------|-----|--------|-------|
| [#2877] – Telegram rich rendering | Open since 2026‑06‑28 (13 days) | Awaiting review/label? | No core‑team or follows‑guidelines tags; may need maintainer attention to merge. |
| [#2966] – Log errored batch acked | Open since 2026‑07‑06 (5 days) | Follows‑guidelines, core‑team | Small logging improvement; no comments. |
| [#2988] – Tasks one‑door delivery | Open since 2026‑07‑09 (2 days) | core‑team | Part of a larger train; likely to be merged soon. |
| [#3001] – Stale skill copies (issue) | Open since 2026‑07‑10 (1 day) | No comments | Fix PR #3002 exists; should be closed soon. |

No issues older than two weeks remain open, indicating healthy triage.

*Links: All issue and PR IDs reference https://github.com/nanocoai/nanoclaw*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest – 2026-07-11

---

## 1. Today’s Overview

NullClaw saw minimal activity in the past 24 hours. Two open issues were updated, but no pull requests were merged or closed, and no new releases were published. The project appears to be in a maintenance lull, though two significant bugs were brought to light—one affecting Telegram channel reliability after idle periods, and another exposing a security flaw in the shared bearer A2A routing mechanism. Both issues remain open and have not yet seen an associated fix. Overall, project momentum is low, but the severity of the reported vulnerabilities warrants prompt maintainer attention.

---

## 2. Releases

No new releases were recorded. This section is omitted.

---

## 3. Project Progress

No pull requests were merged or closed today. No new features, fixes, or refactors were advanced through the PR pipeline.

---

## 4. Community Hot Topics

Two issues are driving current discussion, both opened or updated in the last 24 hours:

- **#972 – [bug] telegram channel stop respond after some idle time**  
  [GitHub Issue](nullclaw/nullclaw Issue #972)  
  *Author: i11010520 | Created: 2026-06-30 | Updated: 2026-07-10 | Comments: 2*  
  The Telegram connector appears to silently die after a period of inactivity (e.g., overnight). The backend (`nullclaw agent`) remains functional, indicating a communication layer timeout or reconnection failure. The two comments suggest users are actively reproducing and discussing workarounds, but no maintainer response has been posted yet.

- **#974 – [BUG] NullClaw shared bearer A2A route allows cross-caller task and context reuse**  
  [GitHub Issue](nullclaw/nullclaw Issue #974)  
  *Author: N0zoM1z0 | Created: 2026-07-10 | Updated: 2026-07-10 | Comments: 0*  
  A security researcher demonstrates that once a valid bearer token is obtained, an attacker can read and reuse another user's task history and context via the `/a2a` endpoint. The underlying issue is that authorization is performed only at the token level, not at the task/context level. This is a high-severity authorization bypass.

**Underlying needs:**  
- For #972, users need reliable long-running Telegram integration without manual restarts.  
- For #974, the community (and likely enterprise adopters) urgently need per-task/per-context access control inside the A2A route to prevent data leakage.

---

## 5. Bugs & Stability

| Issue | Severity | Description | Fix PR Exists? |
|-------|----------|-------------|----------------|
| #974 – Shared bearer A2A route allows cross-caller task and context reuse | **Critical** | Authorization bypass – an attacker with a valid token can list and replay any other user's tasks and contexts. | No |
| #972 – Telegram channel stops responding after idle time | **High** | Telegram connector silently fails after inactivity; affects all Telegram-based deployments. | No |

Both bugs are open with zero linked fix PRs. The security issue (#974) is especially concerning for multi-tenant or shared-token deployments. The Telegram bug (#972) may be a timeout/reconnect regression that could be fixed with a server-side keepalive or connection retry mechanism.

---

## 6. Feature Requests & Roadmap Signals

No explicit feature requests were filed today. However, the two bugs hint at missing capabilities:

- **Session keepalive / heartbeat** for cloud-based channels (implied by #972).  
- **Per-task and per-context authorization** in the A2A protocol (implied by #974).  

Given the severity of #974, it is likely that a security-focused patch or minor release will be prioritised for the next version. The Telegram reliability fix may follow as a maintenance hotfix.

---

## 7. User Feedback Summary

Real user pain points surfaced today:

- **Telegram reliability** – “Telegram channel die away at next morning after idle” indicates that long-running headless agents are unreliable in production. The user confirmed backend health but lost frontend connectivity, suggesting a connector-level issue.
- **Security concerns** – The A2A bearer token vulnerability was discovered by a user simulating a cross-caller attack. The explicit demonstration of “Bob reads and lists Alice task history” highlights a trust boundary failure that could erode confidence in shared deployments.

Satisfaction levels are not directly measured, but the filing of two distinct bugs (rather than feature requests) suggests users are actively deploying NullClaw and encountering real-world stability and security friction.

---

## 8. Backlog Watch

No long-unanswered issues or stale PRs are present in today’s data (all tracked items were created or updated within the last 11 days). However, **Issue #972** (created 2026-06-30) has been open for 11 days and updated once, yet still lacks a maintainer acknowledgment or triage label. Given the high user engagement (2 comments) and practical impact, this should be reviewed by the core team soon. Issue #974, while only hours old, is a security report that typically warrants an immediate response (even if only to confirm receipt and analysis timeline).

No PRs are awaiting review or merge.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-11

## 1. Today’s Overview

IronClaw is in an intense development and stabilization sprint. Over the past 24 hours, **36 issues** were updated (28 still open) and **50 pull requests** saw activity (34 open), indicating a high-velocity phase. A coordinated **bug bash** (tagged `bug_bash_P1` through `P3`) produced a wave of regression and UX reports, while core contributors merged several large feature and hardening PRs. No new releases were published today. The project is actively retiring the legacy v1 runtime (#5935) and investing in Reborn resilience, MCP registration, and error recovery — reflecting a push toward production readiness.

## 2. Releases

**No new releases** were published on 2026-07-11. The latest release remains the draft PR #5598 (`chore: release`) which proposes version bumps for `ironclaw_common` (0.5.0, breaking), `ironclaw_safety` (0.2.3), `ironclaw_skills` (0.4.0, breaking), and `ironclaw` (0.29.1). That PR is still open and has not been merged.

## 3. Project Progress

**13 pull requests were merged or closed** in the last 24 hours. Notable merges:

- **[#5895](https://github.com/nearai/ironclaw/pull/5895)** – Fixes compaction failures after tool results; treats non‑cancellation compaction errors as recoverable skips instead of terminal failures. Closes #5838.
- **[#5950](https://github.com/nearai/ironclaw/pull/5950)** – (PR‑A of harness‑port‑seam) Exposes production LocalDev capability‑port assembly to integration tests.
- **[#5960](https://github.com/nearai/ironclaw/pull/5960)** – Raises default loop iteration ceiling from 32 → 256 to avoid fail‑closing on tool‑heavy turns.
- **[#5954](https://github.com/nearai/ironclaw/pull/5954)** – Adds `RunFailureReason` funnel foundation (phase 1/4), zero behavior change yet.
- **[#5967](https://github.com/nearai/ironclaw/pull/5967)** – Fixes boot crash‑loop (#5966) by skipping invalid available‑extension manifests at catalog load.
- **[#5844](https://github.com/nearai/ironclaw/pull/5844)** – Adds “Computation” section to Reborn default system prompt, guiding the model to use tools for calculations.
- **[#5817](https://github.com/nearai/ironclaw/pull/5817)** – Fixes false positive capability detection that blocked decimal numbers (e.g., `0.5`) as capability IDs.
- **[#5499](https://github.com/nearai/ironclaw/pull/5499)** – Lays foundation for WASM tool install from zip and tenant‑shared credentials.

Several high‑risk feature splits from the large #5279 branch remain open (see below), but the core team is actively advancing them.

## 4. Community Hot Topics

The most active issue by comments is **[#5948](https://github.com/nearai/ironclaw/issues/5948)** (5 comments): a bug‑bash P3 report where the assistant incorrectly reports the GitHub extension as “activated” when it is only installed. The discussion suggests users are confused by mismatched UI and assistant claims.

Other issues with 2–3 comments include Slack pairing/ unpairing problems (#5747, #5834), routine execution bugs (#5891, #5836, #5837), and UI feedback (#5885, #5889). These reflect friction in Slack and routine workflows — core multi‑user features.

Among PRs, the largest discussions are on the monster draft releases PR [#5598](https://github.com/nearai/ironclaw/pull/5598) and the open resilience PR [#5959](https://github.com/nearai/ironclaw/pull/5959). The latter (by ilblackdragon) is a broad set of changes to deep availability retries, iteration backstop, and model‑visible tool‑failure reasons, born from a SWE‑bench analysis showing a 30% gap vs. competitors.

## 5. Bugs & Stability

**P1 bug** (highest severity):
- **[#5943](https://github.com/nearai/ironclaw/issues/5943)** – Slack DM action posts to current channel instead of user’s DM. No fix PR yet.

**P2 bugs** (multiple reported today):
- **[#5836](https://github.com/nearai/ironclaw/issues/5836)** – Routine fails on every scheduled run with “No thread attached” (0% success rate).
- **[#5834](https://github.com/nearai/ironclaw/issues/5834)** – Slack disconnect request incorrectly rejected by agent.
- **[#5885](https://github.com/nearai/ironclaw/issues/5885)** – Approval notification opens action without showing approval message.
- **[#5879](https://github.com/nearai/ironclaw/issues/5879)** – Stale error banner remains after successful follow‑up.
- **[#5945](https://github.com/nearai/ironclaw/issues/5945)** – Long multi‑tool runs fail with generic “model provider unavailable” error.
- **[#5944](https://github.com/nearai/ironclaw/issues/5944)** – Slack DM silently fails but run reports success.
- **[#5946](https://github.com/nearai/ironclaw/issues/5946)** – Assistant mutates Google Sheet before discovering requested trigger is unavailable.
- **[#5707](https://github.com/nearai/ironclaw/issues/5707)** – Routine creation response exposes internal implementation details.

**P3 bugs** (lower severity but numerous):
- [#5948](https://github.com/nearai/ironclaw/issues/5948), [#5891](https://github.com/nearai/ironclaw/issues/5891), [#5889](https://github.com/nearai/ironclaw/issues/5889), [#5947](https://github.com/nearai/ironclaw/issues/5947) (thread deletion not reflected), and others.

Several fix PRs already exist: #5967 resolves the boot crash‑loop (#5966); #5895 fixes compaction failures; #5959 and #5965 address broader resilience. The bug bash likely triggered many of these reports; most still lack corresponding fix PRs.

## 6. Feature Requests & Roadmap Signals

Several user‑filed issues point to desired capabilities:

- **[#5969](https://github.com/nearai/ironclaw/issues/5969)** – GLM‑5.2 model not available in opencode default list → manual configuration needed. Suggests demand for flexible model selection.
- **[#5968](https://github.com/nearai/ironclaw/issues/5968)** – HTTP tool fails with third‑party services lacking MCP support (Attio). Indicates need for generic egress/auth support beyond MCP.
- **[#5955](https://github.com/nearai/ironclaw/issues/5955)** – Multistep workflows with sub‑agents hit tool‑call limit or stop progressing. Users want reliable decomposition and delegation.

These align with ongoing roadmap items: **MCP registration** (PR #5970, #5916), **budget gates** (PR #5964), and **loop resilience** (PR #5959). The next version is likely to address iteration limits, error recovery, per‑user MCP store, and improved Slack integration.

## 7. User Feedback Summary

**Pain points** from the bug bash:
- **Mismatch between assistant promises and reality** (#5948, #5943, #5946) – users are misled by overly optimistic status reports.
- **Slack workflow unreliability** (#5943, #5944, #5834, #5747) – pairing, DMs, and disconnects all have failures that leave users stranded.
- **Routine failures without diagnostics** (#5836, #5837, #5891) – scheduled runs break silently, and logs/run views are non‑interactive.
- **Stale UI state** (#5879, #5947, #5889) – error banners persist, thread deletion not reflected without refresh.
- **Poor error messages** (#5945, #5968) – generic “model unavailable” or opaque HTTP tool errors hinder debugging.

**Satisfaction signals** are missing from today’s data; the bug bash appears to have surfaced almost entirely negative feedback, which is typical for a focused testing period. The rapid response with fix PRs (e.g., #5967, #5895) suggests the team is acting on feedback quickly.

## 8. Backlog Watch

- **[#5598](https://github.com/nearai/ironclaw/pull/5598)** – Release PR has been open for 8 days with breaking changes to `ironclaw_common` and `ironclaw_skills`. It needs maintainer review and decision to merge or defer.
- **[#5780](https://github.com/nearai/ironclaw/pull/5780)** – “Add support of admin installed and private skills” (open since July 7, UI changes). No recent activity; may be waiting for infrastructure from #5499.
- **[#5640](https://github.com/nearai/ironclaw/issues/5640)** – Harness gap: missing `RecordingSecurityAuditSink` in integration harness, surfaced by wiring parity guard. Open since July 4 with 2 comments but no assigned owner. Important for test infrastructure.
- **[#5741](https://github.com/nearai/ironclaw/issues/5741)** – `builtin.http.save` fails with `OutputTooLarge` when saving large responses. No fix PR yet; could block document‑heavy use cases.
- **[#5958](https://github.com/nearai/ironclaw/issues/5958)** – Reborn loop executor store I/O has no wall‑clock bound. Raised from code review, not yet prioritized. Could become a stability risk under heavy load.

**No long‑unanswered issues from external users** were identified; most older items appear to be tracked or under active discussion.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-11

## Today’s Overview
The project is in a high-activity period with **17 pull requests updated** in the last 24 hours (10 merged/closed, 7 open) and **3 issues updated** (2 open, 1 closed). A new release **LobsterAI 2026.7.10** was published yesterday, bringing multi‑agent delegated sub‑agent collaboration and minimizable permission prompts. The majority of today’s merged PRs are fixes targeting cowork coordination, scheduled‑task routing, memory index migration, and UI stability. Two older stale issues remain open, and one new bug report from a user about cross‑agent `USER.md` overwriting has attracted 3 comments – no immediate fix PR has been linked yet.

---

## Releases
**New Version: [LobsterAI 2026.7.10](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.7.10)**  
*Released 2026-07-10*

**What’s Changed** (from release notes and related PRs):
- `feat(agents)`: support delegated sub‑agent collaboration (#2285)
- `feat(cowork)`: add minimizable permission prompts (#2296)
- `feat(cowork)`: add folder context attachments (#2310, merged yesterday)
- Multiple bug fixes for scheduled tasks, memory indexing, UI alignment (see Project Progress)

**Migration Notes**:  
- No breaking changes are mentioned. Users with multi‑agent setups should verify that `USER.md` behavior is not affected by the known issue #2293 (see Bugs & Stability).

---

## Project Progress (Merged/Closed PRs Today)
10 PRs were merged or closed in the last 24 hours, advancing both features and stability:

| PR | Area | Summary |
|----|------|---------|
| [#2317](https://github.com/netease-youdao/LobsterAI/pull/2317) | Release | Tag release/2026.7.8 |
| [#2316](https://github.com/netease-youdao/LobsterAI/pull/2316) | Renderer | Fix Windows title bar logo compression when sidebar collapsed |
| [#2315](https://github.com/netease-youdao/LobsterAI/pull/2315) | Renderer, Cowork | Connect queued follow‑up coordinator across sessions/minimized |
| [#2314](https://github.com/netease-youdao/LobsterAI/pull/2314) | Docs, Main | Preserve WeCom/DingTalk group ID casing in scheduled tasks |
| [#2313](https://github.com/netease-youdao/LobsterAI/pull/2313) | Renderer, Cowork | Submit only the selected queued steer (FIFO fix) |
| [#2312](https://github.com/netease-youdao/LobsterAI/pull/2312) | Renderer, Main, Cowork | Fix askuser minimize state loss |
| [#2311](https://github.com/netease-youdao/LobsterAI/pull/2311) | Main, OpenClaw | Migrate FTS‑only memory indexes for all agents |
| [#2310](https://github.com/netease-youdao/LobsterAI/pull/2310) | Renderer, Main, Cowork | Add folder context attachments |
| [#2309](https://github.com/netease-youdao/LobsterAI/pull/2309) | Build | Keep null‑byte stripping ES2020‑compatible |
| [#2306](https://github.com/netease-youdao/LobsterAI/pull/2306) | Renderer, Docs, Main, OpenClaw | Repair IM group task routing |

These fixes significantly improve reliability for cowork sessions, scheduled tasks across IM platforms, and memory indexing for multi‑agent configurations.

---

## Community Hot Topics
- **[Issue #2293 – Multiple agents USER.md overwritten](https://github.com/netease-youdao/LobsterAI/issues/2293)**  
  *3 comments, updated yesterday*  
  The user reports that editing `USER.md` in one agent causes other agents’ files to be overwritten after restart. The underlying issue is a regression likely introduced in a recent update. No fix PR has been submitted yet. This is the most active issue today.

- **[Issue #1392 – Scheduled task toggle unresponsive](https://github.com/netease-youdao/LobsterAI/issues/1392)**  
  *Closed as stale yesterday* – 2 comments. The problem may have been resolved by the scheduled‑task fixes in PRs #2306 and #2314.

- **[Issue #1337 – Request session list time grouping](https://github.com/netease-youdao/LobsterAI/issues/1337)**  
  *1 comment, stale since April* – while not generating new discussion, a companion PR (#1338) exists and remains open.

---

## Bugs & Stability
**High‑Severity Bug**  
- **Issue #2293**: Multi‑agent `USER.md` overwrite on restart – confirmed by user and reproduced on 2026.7.9. The bug prevents maintaining distinct agent profiles. No fix PR visible yet.  
  *Status: Open, maintainers have not publicly acknowledged.*

**Medium‑Severity Bugs Addressed Today**  
- **AskUser minimize state loss** – fixed in [#2312](https://github.com/netease-youdao/LobsterAI/pull/2312)  
- **Queued follow‑up not processing when app minimized** – fixed in [#2315](https://github.com/netease-youdao/LobsterAI/pull/2315)  
- **Scheduled task IM group ID casing corruption** – fixed in [#2314](https://github.com/netease-youdao/LobsterAI/pull/2314)  
- **Memory index FTS‑only migration not running for all agents** – fixed in [#2311](https://github.com/netease-youdao/LobsterAI/pull/2311)  

No new crashes or regressions were reported today beyond #2293.

---

## Feature Requests & Roadmap Signals
Several user‑requested features remain open in the backlog:

- **Session list time grouping** ([#1337](http://github.com/netease-youdao/LobsterAI/issues/1337), PR [#1338](http://github.com/netease-youdao/LobsterAI/pull/1338)) – likely to be merged in the next major release as it has a complete implementation.
- **Workdays schedule option** (PR [#1335](http://github.com/netease-youdao/LobsterAI/pull/1335)) – small, non‑breaking enhancement; could be picked up soon.
- **MCP JSON import** (PR [#1336](http://github.com/netease-youdao/LobsterAI/pull/1336)) – improves UX for power users configuring custom servers.
- **Session error status indicator** (PR [#1331](http://github.com/netease-youdao/LobsterAI/pull/1331)) – a small UI improvement already reviewed.

Given the recent focus on cowork and scheduled‑task stability, the time‑grouping feature (which affects cowork UI) may be prioritized next.

---

## User Feedback Summary
- **Positive**: Users running multi‑agent setups are using the delegated sub‑agent collaboration features (from 2026.7.10). The folder attachment feature (#2310) was also requested.
- **Pain Points**:
  - The `USER.md` overwrite bug (#2293) is causing frustration – one user explicitly cannot maintain different agent identities.
  - Lack of session list organization (Issue #1337) is a recurring UX concern for power users with many conversations.
- **Satisfaction**: No strong complaints about performance or crashes were recorded today; most fixes were proactive.

---

## Backlog Watch
**Stale Issues/PRs Requiring Maintainer Attention** (last updated in April, no maintainer comment in months):
- [#1337](http://github.com/netease-youdao/LobsterAI/issues/1337) – Request: session list time grouping (1 comment, PR #1338 stalled)
- [#1331](http://github.com/netease-youdao/LobsterAI/pull/1331) – PR: error red dot indicator (no conflicts, needs merge review)
- [#1333](http://github.com/netease-youdao/LobsterAI/pull/1333) – PR: i18n and Escape close fixes (stale, needs rebase/merge)
- [#1335](http://github.com/netease-youdao/LobsterAI/pull/1335) – PR: workdays schedule (small, ready)
- [#1336](http://github.com/netease-youdao/LobsterAI/pull/1336) – PR: MCP JSON import (no conflicts, needs review)

Additionally, two **dependency bump PRs** (#1275, #1276) from April are still open; while not critical, they should be updated to avoid CI warnings.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest – 2026-07-11

## 1. Today's Overview
Project activity remains low, with no new issues or merged pull requests in the past 24 hours. A single open pull request (#1146) was updated yesterday, proposing support for the newly released GPT-5.6 model series (Sol, Terra, Luna). No new releases have been published, and no bug reports or crashes have surfaced. The project appears to be in a stable, maintenance-oriented phase, with the main focus on keeping pace with upstream model provider changes.

## 2. Releases
No new releases were published in the last 24 hours. The project continues without a tagged release; users should rely on the latest commit on the default branch.

## 3. Project Progress
No pull requests were merged or closed today. The only activity is the ongoing open pull request **#1146**, which is still under review. This PR aims to:
- Register GPT-5.6 Sol, Terra, and Luna models in the OpenAI and OpenAI Codex fallback catalogs.
- Apply the documented OpenAI API 1.05M context window and the ChatGPT/Codex backend 372K limit.
- Replace superseded OpenAI model references in configuration examples and provider-selection documentation.

## 4. Community Hot Topics
The sole hot topic is **Pull Request #1146** ([moltis-org/moltis PR #1146](https://github.com/moltis-org/moltis/pull/1146)), authored by `PeterDaveHello`. Although it has no comments or reactions, its content reveals a strong underlying need: immediate compatibility with the latest GPT-5.6 model line as OpenAI phases out older models. The inclusion of fallback catalogs and updated context window limits suggests users rely on accurate model metadata for cost and capability planning.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours. The project maintains a clean stability record with no open stability-related issues. No fix PRs are pending.

## 6. Feature Requests & Roadmap Signals
The only feature signal is the open PR for GPT-5.6 support. Given that this is a direct response to an external platform update (OpenAI’s release of GPT-5.6), it is likely to be merged in the near future. No additional user-requested features were observed. The next project version, if any, will almost certainly include this model addition.

## 7. User Feedback Summary
No user feedback (comments, reactions, or bug reports) was captured in the last 24 hours. The absence of complaints or confusion about existing functionality suggests current users are generally satisfied, or at least not vocal about pain points.

## 8. Backlog Watch
There are no long-unanswered issues or stale pull requests requiring maintainer attention. The repository is up to date with zero open issues. The only open work item (PR #1146) was created two days ago and is receiving updates, indicating active maintainer engagement.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-11

## 1. Today’s Overview
CoPaw is in a high-activity phase following the **v2.0.0 stable release**, with 44 issues and 49 pull requests updated in the last 24 hours. The core team merged 26 PRs and closed 23 issues, reflecting aggressive stabilization after the AgentScope 2.0 migration. Community engagement is strong, but several critical regressions—especially around the desktop shell sandbox, MCP access policy, and tool-call handling—are generating urgent bug reports. The rapid pace of fixes (e.g., session_id propagation, tool-result truncation) suggests a focused effort to address top-severity items.

## 2. Releases
Three releases were published today:
- **[v2.0.0 (Stable)](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0)** – Major milestone. Core architecture rebuilt on **AgentScope 2.0**, introducing Runtime 2.0, a new kernel with improved performance and extensibility. This is a **breaking change** from 1.x; migration is required (see [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)).
- **[v2.0.0-beta.7](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0-beta.7)** – Includes homepage copy/visual refresh for 2.0 and a fix for `session_id` propagation in memory summarization tasks.
- **[v2.0.0-beta.6](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0-beta.6)** – Fixes envelope error state passthrough and adds channel module unit tests.

**Migration Notes:** Users upgrading from v1.x will need to reconfigure model providers and may experience incompatibility with existing memory stores. A formal upgrade guide has been requested ([#5948](https://github.com/agentscope-ai/QwenPaw/issues/5948)).

## 3. Project Progress
Today’s merged/closed PRs (26 total) highlight both feature finalization and critical bug fixes:

- **Version bump & documentation:** [#5942](https://github.com/agentscope-ai/QwenPaw/pull/5942) – Bump to v2.0.0; [#5932](https://github.com/agentscope-ai/QwenPaw/pull/5932) – Update docs for 2.0; [#5940](https://github.com/agentscope-ai/QwenPaw/pull/5940) – Refresh homepage copy/visuals.
- **Memory stability:** [#5938](https://github.com/agentscope-ai/QwenPaw/pull/5938) – Fix missing `session_id` in memory summarization tasks, preventing orphaned memories.
- **Regression fix reverted:** [#5936](https://github.com/agentscope-ai/QwenPaw/pull/5936) – Reverted per-message time injection due to display issues.
- **Docs polish:** [#5937](https://github.com/agentscope-ai/QwenPaw/pull/5937) – Refine news format.
- **Observed progress on open PRs:** New features like **vision fallback for text-only models** ([#5726](https://github.com/agentscope-ai/QwenPaw/pull/5726)) and **Windows sandbox token restriction** ([#5931](https://github.com/agentscope-ai/QwenPaw/pull/5931)) are under review.

## 4. Community Hot Topics
The most active discussions (by comment count) reveal shared pain points and feature desires:

- **[#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401)** (15 comments, closed) – Frontend crash with large tool-use history. Root cause identified and fixed in earlier betas.
- **[#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)** (12 comments, closed) – Planned migration to AgentScope 2.0, now completed with v2.0.0.
- **[#5273](https://github.com/agentscope-ai/QwenPaw/issues/5273)** (11 comments, closed) – Pre-release bug tracker, now superseded by stable.
- **[#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951)** (5 comments, **open**, high severity) – Desktop shell sandbox causes pwsh recursive explosion and 20GB memory consumption; no workaround.
- **[#5947](https://github.com/agentscope-ai/QwenPaw/issues/5947)** (4 comments, **open**) – MCP access control (allow/deny) not applied; agents still call blocked tools.
- **[#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856)** (3 comments, **open**) – Tool_call structure lost during context compaction, causing 400 errors.

**Underlying need:** Users upgrading to v2.0.0 expect stable sandboxing, reliable tool execution, and configurable security. The recurrence of tool-call and memory corruption issues suggests the new runtime needs further hardening.

## 5. Bugs & Stability
Severe regressions and crashes reported today, ranked by impact:

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Critical** | [#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951) | Desktop shell sandbox: `icacls` timeout silently swallowed → pwsh recursive explosion, 20GB memory, no disable path. | None yet |
| **High** | [#5947](https://github.com/agentscope-ai/QwenPaw/issues/5947) | MCP tool allow/deny policy not honored; agents call blocked subtools. | [#5949](https://github.com/agentscope-ai/QwenPaw/pull/5949) (open) |
| **High** | [#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856) | Tool_call structure lost during context compaction → 400 errors, message count mismatch. | None |
| **High** | [#5952](https://github.com/agentscope-ai/QwenPaw/issues/5952) | Auto-memory fails with missing module `agentscope.tool._builtin._scripts`. | None |
| **Medium** | [#5950](https://github.com/agentscope-ai/QwenPaw/issues/5950) | Chinese embedding input exceeds context length due to character-based truncation. | None |
| **Medium** | [#5946](https://github.com/agentscope-ai/QwenPaw/issues/5946) | Agent wrongly invokes `recall_history` for content still in context. | [#5953](https://github.com/agentscope-ai/QwenPaw/pull/5953) (open) |
| **Medium** | [#5918](https://github.com/agentscope-ai/QwenPaw/issues/5918) | `/mission` flow loops forever on `prd.json` format error. | None |
| **Low** | [#5896](https://github.com/agentscope-ai/QwenPaw/issues/5896) | Iteration count resets incorrectly, triggering premature max-iteration stop. | None |
| **Low** | [#5906](https://github.com/agentscope-ai/QwenPaw/issues/5906) | Anti-repetition false positive triggers `Doom loop`. | None |

Several fixes are already in progress: [#5953](https://github.com/agentscope-ai/QwenPaw/pull/5953) addresses the unnecessary `recall_history` issue, and [#5949](https://github.com/agentscope-ai/QwenPaw/pull/5949) targets MCP policy application.

## 6. Feature Requests & Roadmap Signals
User-requested features from today’s new issues:

- **[#5903](https://github.com/agentscope-ai/QwenPaw/issues/5903)** – **Session grouping + import/export** (2 comments). Highly requested for managing many concurrent conversations. A design proposal PR has already been opened ([#5943](https://github.com/agentscope-ai/QwenPaw/pull/5943)).
- **[#5909](https://github.com/agentscope-ai/QwenPaw/issues/5909)** – **Configurable theme/skin module** (2 comments). Design proposal in progress.
- **[#5453](https://github.com/agentscope-ai/QwenPaw/issues/5453)** – **KaTeX / LaTeX rendering** support in desktop app (2 comments, open since June 23).
- **[#3623](https://github.com/agentscope-ai/QwenPaw/issues/3623)** – **Cross-session feedback mechanism** for multi-agent handoffs (closed, but remains relevant).

**Roadmap prediction:** Session grouping and theme configuration appear likely for the next minor release (v2.1.0) given the quick design proposals. Vision fallback ([#5726](https://github.com/agentscope-ai/QwenPaw/pull/5726)) and structured SSE output for API automation ([#5930](https://github.com/agentscope-ai/QwenPaw/pull/5930)) are also nearing completion and could ship in v2.0.1.

## 7. User Feedback Summary
Real user sentiment from today’s issues:

- **Pain points:** The most visceral complaint is the **desktop shell sandbox explosion** ([#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951)) – a user reports being forced to roll back to v1.1.12.post3. Similarly, MCP access control not working ([#5947](https://github.com/agentscope-ai/QwenPaw/issues/5947)) undermines trust in security settings.
- **Satisfaction:** Excitement for v2.0.0 is palpable (e.g., [#5945](https://github.com/agentscope-ai/QwenPaw/issues/5945): “V2.0.0正式版本,终于发布了!☀”). However, many users are encountering upgrade friction – missing migration guide ([#5948](https://github.com/agentscope-ai/QwenPaw/issues/5948)), directory errors ([#5954](https://github.com/agentscope-ai/QwenPaw/issues/5954)).
- **Use cases:** Heavy tool-use workflows (large histories, sandboxing, multi-step missions) are breaking, indicating that the new runtime’s scaling limits need attention.
- **Overall:** Mixed – enthusiasm for the major release tempered by a wave of regressions that make the stable feel like a beta.

## 8. Backlog Watch
Issues and PRs that require maintainer attention due to importance or staleness:

- **[#5453](https://github.com/agentscope-ai/QwenPaw/issues/5453)** – LaTeX/KaTeX support (2 comments, open since June 23). No maintainer response. Relevant for academic users.
- **[#5952](https://github.com/agentscope-ai/QwenPaw/issues/5952)** – Auto-memory module missing in v2.0.0 (1 comment, opened today). High impact; no workaround.
- **[#5918](https://github.com/agentscope-ai/QwenPaw/issues/5918)** – `prd.json` format error loop (2 comments, opened yesterday). User stuck; no resolution posted.
- **[#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856)** – Tool_call structure lost during compaction (3 comments, open since July 8). Core stability issue without a fix PR yet.
- **[#5903](https://github.com/agentscope-ai/QwenPaw/issues/5903)** – Session grouping feature request (2 comments, open). Design proposal is active, but final approval pending.
- **[#5922](https://github.com/agentscope-ai/QwenPaw/pull/5922)** – Langfuse observability enhancement (first-time contributor, open). Needs review to avoid burnout of new contributors.

**Recommendation:** Prioritize fixes for #5951 (sandbox explosion), #5952 (auto-memory module), and #5856 (tool-call corruption) to restore confidence in v2.0.0. Respond to #5453 and #5948 to address obvious community needs.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-11

## Today’s Overview

ZeroClaw saw moderate activity over the past 24 hours, with 20 issues updated (3 closed, 17 open) and 50 pull requests updated (4 merged/closed, 46 open). No new releases were published. The community is actively contributing fixes and enhancements across the gateway, runtime, and plugin systems, though several critical bugs remain in the agent turn loop and skill-review fork. The project’s focus appears to be on stability improvements, observability (v0.8.3 trackers), and expanding the plugin capability catalog.

## Releases

No new releases were published in the last 24 hours. The latest tracked milestone is **v0.8.3**, with two open trackers (#8073 and #8363) consolidating observability, CI, docs, and config-driven runtime policy work.

## Project Progress

**Closed Issues (3):**
- [#8397 – Expose per-cron-job `uses_memory` flag in CLI and cron\_add/cron\_update tools](https://github.com/zeroclaw-labs/zeroclaw/issues/8397) (enhancement, closed 2026-07-10)
- [#8677 – Add `uses_memory` check box to web gateway](https://github.com/zeroclaw-labs/zeroclaw/issues/8677) (enhancement, closed 2026-07-10)
- [#7809 – Channel turns ignore runtime-profile strict/parallel tool flags](https://github.com/zeroclaw-labs/zeroclaw/issues/7809) (bug, closed 2026-07-10)

**Merged/Closed PRs (4):**  
Details of the 4 merged/closed PRs are not shown in the top-20 list, but the closed issues above indicate that memory‑related UI and CLI features have been delivered.

**Notable Open PRs with Significant Progress:**
- [#8947 – fix(anthropic): honor provider timeout\_secs config](https://github.com/zeroclaw-labs/zeroclaw/pull/8947) – removes hardcoded 120s timeout.
- [#8954 – feat(container): multi-arch Alpine/musl image via cargo-zigbuild](https://github.com/zeroclaw-labs/zeroclaw/pull/8954) – adds ARM64 + x86-64 Docker support.
- [#8957 – refactor(skills): route pre-existing install/audit errors through Fluent](https://github.com/zeroclaw-labs/zeroclaw/pull/8957) – improves error localization.
- [#8830 – refactor(channels): route start\_channels tool assembly through scoped seam](https://github.com/zeroclaw-labs/zeroclaw/pull/8830) – architectural cleanup.
- [#8880 – feat(sop): approval broker with group membership and quorum](https://github.com/zeroclaw-labs/zeroclaw/pull/8880) – major SOP HITL milestone.

## Community Hot Topics

The following issues and PRs generated the most discussion and reactions:

- **Issue #5514** – [Bug: Agent request appends subsequent images on Telegram](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) (6 comments, 0 👍). Users report that sending multiple images results in duplicate LLM requests. Underlying need: better media‑group handling in the Telegram channel.
- **Issue #8654** – [Bug: skill-review fork panics (out-of-range slice) → daemon SIGSEGV](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) (3 comments). A high‑risk crash after tool‑heavy turns; actively being investigated and marked `status:in-progress`.
- **Issue #8798** – [RFC: Consolidate /ws/chat and /acp onto a single wire protocol](https://github.com/zeroclaw-labs/zeroclaw/issues/8798) (2 comments). Architecturally significant proposal to unify WebSocket protocols; generated interest among multi‑client users.
- **Issue #8934** – [Bug: Gemini function calls fail because thought\_signature is dropped](https://github.com/zeroclaw-labs/zeroclaw/issues/8934) (S1). Workflow‑blocking for Gemini users.
- **PR #8955** – [fix(telegram): batch media group attachments](https://github.com/zeroclaw-labs/zeroclaw/pull/8955) (large size, addresses a core complaint from #5514).

## Bugs & Stability

Several bugs were reported or updated today, ordered by severity:

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **S1 – Workflow blocked** | [#8934](https://github.com/zeroclaw-labs/zeroclaw/issues/8934) | Gemini function calls fail due to missing `thought_signature` in assistant history | No PR yet |
| **S2 – Degraded behavior** | [#8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810) | Telegram documentation is wrong / example output broken | [#8825](https://github.com/zeroclaw-labs/zeroclaw/pull/8825) expands docs |
| **S2 – Degraded behavior** | [#8945](https://github.com/zeroclaw-labs/zeroclaw/issues/8945) | ZeroCode input box blocks macOS text replacements | No PR |
| **S2 – Degraded behavior** | [#8944](https://github.com/zeroclaw-labs/zeroclaw/issues/8944) | ZeroCode transcript mouse copy blocks word-level text selection | No PR |
| **S2 – Degraded behavior** | [#8936](https://github.com/zeroclaw-labs/zeroclaw/issues/8936) | loop\_detector deep-clones entire tool-args JSON tree (RSS growth) | No PR |
| **S2 – Degraded behavior** | [#8929](https://github.com/zeroclaw-labs/zeroclaw/issues/8929) | Streamed narration can be duplicated when final display text is trimmed | No PR |
| **S2 – Degraded behavior** | [#8952](https://github.com/zeroclaw-labs/zeroclaw/issues/8952) | Streamed pre-tool narration duplicated when turn text has whitespace | Related to #8929 |
| **S3 – Minor** | [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) | Telegram image requests duplicate | [#8955](https://github.com/zeroclaw-labs/zeroclaw/pull/8955) in progress |
| **High risk (no severity tag)** | [#8950](https://github.com/zeroclaw-labs/zeroclaw/issues/8950) | Telegram bot commands too many (>100) → command menu never registers | No PR |
| **High risk (panic)** | [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) | skill-review fork panics with out‑of‑range slice → SIGSEGV | In progress (labeled `status:in-progress`) |

**Key stability observations:**  
The Gemini `thought_signature` bug (#8934) is the most critical S1 issue, blocking an entire provider. The skill‑review panic (#8654) is under active development. Telegram channel remains a hot spot for bugs, with three distinct issues (#5514, #8810, #8950) and a matching fix PR (#8955).

## Feature Requests & Roadmap Signals

Several notable enhancements were filed or discussed today:

- **#8958** – [ACP agent selection via `?agent=` query param](https://github.com/zeroclaw-labs/zeroclaw/issues/8958) – enables multi‑agent endpoints for external clients (requested by Thunderbird ACP integration).
- **#8933** – [Add `gen_ai.conversation.id` for cross‑turn session correlation in OTel export](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) – strengthens observability.
- **#8798** – [RFC: Consolidate /ws/chat and /acp onto a single wire protocol](https://github.com/zeroclaw-labs/zeroclaw/issues/8798) – could simplify gateway architecture.
- **#6563** – [Comfy Cloud / ComfyUI as shared media provider](https://github.com/zeroclaw-labs/zeroclaw/issues/6563) – still open since May, but no recent activity.

These features, combined with the v0.8.3 trackers (#8073, #8363), suggest the next minor release will focus on observability (OTel, per‑turn correlation), tool‑policy enforcement, and multi‑agent support. The approval broker PR (#8880) is a strong candidate for inclusion.

## User Feedback Summary

- **Documentation quality:** Issue #8810 bluntly states “the documentation is wrong” and “slop remains slop” – a clear signal that new users find the Telegram setup guide insufficient and example output unreliable.
- **Telegram channel usability:** Multiple users report that sending images (#5514) and managing bot commands (#8950) are broken or poorly documented. The fix PR #8955 indicates developers are listening.
- **Gemini users blocked:** Issue #8934 reports a workflow‑stopping bug when using Gemini function calling – likely to erode trust among users of that provider.
- **Skill‑review crashes:** The SIGSEGV in #8654 was triggered by a tool‑heavy turn, which may affect users running complex automation.
- **Positive signals:** Several contributors (JordanTheJet, Nillth, tzy-17, Audacity88) are actively refactoring and fixing issues, indicating a healthy contributor base.

## Backlog Watch

The following issues and PRs have been open for an extended period without maintainer response or significant activity:

- **#6563** – [Comfy Cloud / ComfyUI shared media provider](https://github.com/zeroclaw-labs/zeroclaw/issues/6563) (open since 2026-05-10, last updated 2026-07-10, needs maintainer review? Not labeled `needs-maintainer-review` but risk:high).
- **#8139** – [PR: implement channel session TTL](https://github.com/zeroclaw-labs/zeroclaw/pull/8139) (open since 2026-06-22, risk:high, size:M). Awaiting review or merge.
- **#8751** – [PR: fix LocalWhisperConfig reuse serde defaults](https://github.com/zeroclaw-labs/zeroclaw/pull/8751) (open since 2026-07-06, closes #8718). No comments from maintainers.
- **#5514** – [Bug: Telegram image duplicate requests](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) (open since 2026-04-08, still no fix merged despite 6 comments).
- **#8798** – [RFC: consolidate wire protocol](https://github.com/zeroclaw-labs/zeroclaw/issues/8798) (open since 2026-07-07, only 2 comments). Needs maintainer decision.

These items risk becoming stale and may benefit from explicit maintainer triage or work prioritization.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*