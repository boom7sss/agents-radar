# OpenClaw Ecosystem Digest 2026-07-16

> Issues: 482 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-15 23:01 UTC

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

# OpenClaw Project Digest — 2026-07-16

## Today's Overview

OpenClaw shows **extremely high activity** with 482 issues and 500 PRs updated in the last 24 hours, indicating a major release cycle underway. The project shipped **v2026.7.2-beta.1** today, following the problematic v2026.7.1 which triggered widespread gateway crash-loops and migration failures. The community is responding intensely to the regressions: 316 issues remain open, with 166 resolved, and there are 350 open PRs against 150 merged/closed. The high ratio of open-to-closed items (roughly 2:1) suggests the team is actively working through a backlog of critical P0/P1 regressions introduced in the 2026.7.x releases.

## Releases

**New Release: [v2026.7.2-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.7.2-beta.1)**
- **Version:** 2026.7.2-beta.1
- **Highlights:**
  - **Remote coding sessions:** Control UI sessions can now run on cloud workers
  - **Terminal session resumption:** Codex and Claude catalog sessions can be opened in terminals on their owning hosts
  - **OpenCode/Pi session continuity:** Resume sessions directly in a terminal
- **Migration note:** Users on 2026.7.1 should upgrade immediately to resolve the startup crash-loops documented in issues #107220, #107227, #107694, and #107727.

## Project Progress

**150 PRs merged/closed today** — top fixes by scope:
- **[#108422](https://github.com/openclaw/openclaw/pull/108422):** Refactored the 3,000-line Control UI sidebar into maintainable components
- **[#108487](https://github.com/openclaw/openclaw/pull/108487):** Fixed Codex turns failing after progress replies (closes #106961)
- **[#108365](https://github.com/openclaw/openclaw/pull/108365):** Fixed corrupted UTF-8 output in `api.exec` for session extensions
- **[#108253](https://github.com/openclaw/openclaw/pull/108253):** Fixed continuation sessions losing bootstrap context on short reads
- **[#108127](https://github.com/openclaw/openclaw/pull/108127):** Fixed `openclaw sessions tail --follow` silently losing trajectory events
- **[#108386](https://github.com/openclaw/openclaw/pull/108386):** Improved CI performance with sticky bind mounts (~20s savings per shard)
- **[#108478](https://github.com/openclaw/openclaw/pull/108478):** Sped up browser E2E tests by reusing Chromium processes

## Community Hot Topics

### Most Active Issues (by comment count)

1. **[#104721](https://github.com/openclaw/openclaw/issues/104721)** (17 comments) — **P0 Platinum Hermit:** All tool results return `"(see attached image)"` literal string instead of actual output. A regression that completely breaks file reading. The highest-severity open issue.

2. **[#102020](https://github.com/openclaw/openclaw/issues/102020)** (14 comments) — **Cross-channel session conflict:** Second message in any session fails with `"reply session initialization conflicted"`. Position-dependent, affects both Signal and Discord.

3. **[#91009](https://github.com/openclaw/openclaw/issues/91009)** (12 comments, 👍2) — **Diamond Lobster:** Codex `PreToolUse` hook spawns CPU-bound `openclaw-hooks` processes that stall gateway RPC. Affected since 2026.6.1.

4. **[#84583](https://github.com/openclaw/openclaw/issues/84583)** (12 comments, 👍3) — **Session takeover error:** Cron announce delivery triggers `EmbeddedAttemptSessionTakeoverError` when user is actively chatting. Root cause is a race condition between cron completion and user messages.

5. **[#107449](https://github.com/openclaw/openclaw/issues/107449)** (10 comments, 👍3) — **P1 regression:** cron tool JSON Schema uses `pattern: "\S"` which is incompatible with llama.cpp parser — blocks all local llama.cpp providers.

**Underlying needs:** Users are experiencing critical reliability failures in session state management (takeover conflicts, message loss, placeholder output). The 2026.7.1 update introduced multiple crash-loop scenarios during migration, and the `openclaw doctor --fix` command cannot resolve them — users are stuck with unrecoverable gateways.

## Bugs & Stability

### Critical (P0) — Release-blocking

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#104721](https://github.com/openclaw/openclaw/issues/104721) | All tool results return literal `"(see attached image)"` instead of actual data | No fix PR |
| [#107220](https://github.com/openclaw/openclaw/issues/107220) | 2026.7.1 gateway crash-loop: legacy memory `meta`/`chunks` conflicts fatal | No fix PR |
| [#107227](https://github.com/openclaw/openclaw/issues/107227) | `openclaw doctor` cannot resolve the startup migration conflict — gateway crash-loops with no remedy | Closed as duplicate |
| [#107694](https://github.com/openclaw/openclaw/issues/107694) | Gateway fails on benign legacy migration skips due to strict guard | No fix PR |
| [#107727](https://github.com/openclaw/openclaw/issues/107727) | Plugin install metadata conflict for codex/discord blocks gateway readiness | Closed as regression |

### High (P1)

| Issue | Description |
|-------|-------------|
| [#107449](https://github.com/openclaw/openclaw/issues/107449) | cron tool schema incompatible with llama.cpp — blocks local models |
| [#85103](https://github.com/openclaw/openclaw/issues/85103) | Model fallback chain not triggered on provider quota exhaustion |
| [#96834](https://github.com/openclaw/openclaw/issues/96834) | WhatsApp image input wedges main lane ~3min before processing |
| [#94518](https://github.com/openclaw/openclaw/issues/94518, 👍10) | DeepSeek cache hit rate <10% after 6.x upgrade |
| [#106779](https://github.com/openclaw/openclaw/issues/106779) | 2026.7.1 breaks all local llama.cpp providers (MacBook M5 Max) |

### Medium (P2) — Notable

| Issue | Description |
|-------|-------------|
| [#90213](https://github.com/openclaw/openclaw/issues/90213) | Legacy state migration warnings persist after `doctor --fix` |
| [#93139](https://github.com/openclaw/openclaw/issues/93139) | `write` tool and exec heredocs insert literal `\n` instead of newlines |
| [#70024](https://github.com/openclaw/openclaw/issues/70024) | Channel stop timeout leaves channel permanently dead |

**Key observation:** Five P0-regressions cluster around the **2026.7.1 startup migration gate** — the new strict migration guard is treating benign conflicts as fatal, and the repair tool cannot resolve them. This is the most urgent systemic issue.

## Feature Requests & Roadmap Signals

### High-Community-Interest Features

1. **[#82548](https://github.com/openclaw/openclaw/issues/82548) (👍1)** — **AI safety/quality observability:** Add structured events for prompt injection, tool policy decisions, user feedback — **PR [#107744](https://github.com/openclaw/openclaw/pull/107744) open** (XL scope, touches Android, web UI, gateway, CLI, Prometheus/OTel extensions). Likely to ship in v2026.8.x.

2. **[#6615](https://github.com/openclaw/openclaw/issues/6615) (👍7)** — **Exec-approval denylist support:** Allow "allow everything except X" policies for exec commands. 4+ months old, gathering community support.

3. **[#87660](https://github.com/openclaw/openclaw/issues/87660) (👍2)** — **Lifecycle-aware MEMORY.md curation:** Add LLM-driven curation that protects durable anchors from automatic deletion. An open P2 feature.

4. **[#107686](https://github.com/openclaw/openclaw/issues/107686) (👍0)** — **Intelligent Multi-LLM Router:** Reduce token costs by routing tasks to specialized models (vision, debugging, agentic tasks, simple chat). Closed as P3 feature request.

### Likely for Next Release

- **Remote coding sessions** already shipped in v2026.7.2-beta.1
- The **AI safety/quality events** PR (#107744) is XL and touches many components — likely a v2026.8 milestone
- **Background skill-writing API** ([#108482](https://github.com/openclaw/openclaw/pull/108482)) — new XL PR for stable programmatic skill mutation

## User Feedback Summary

### Pain Points

1. **2026.7.1 is broken on upgrade** — Multiple users report crash-looping gateways after upgrade, with no working recovery path. `openclaw doctor` cannot resolve the conflict, leaving users on older versions or manual workarounds.

2. **Tool output corruption** — The `"(see attached image)"` placeholder bug (#104721) is described as "completely broken" by the reporter, with actual file content replaced by a literal string.

3. **Session state fragility** — Multiple issues (session takeover errors, transcript overwrites, message loss) indicate the session management layer is experiencing race conditions and state corruption under concurrent access.

4. **Provider compatibility breaks** — llama.cpp users are blocked by the cron schema issue (#107449), DeepSeek users see cache hit rates drop below 10% (#94518), and non-Anthropic models output plain-text tool calls instead of structured blocks (#90288).

5. **Startup migration gate too strict** — Multiple P0 issues report that the new migration guard is treating benign or already-resolved conflicts as fatal, blocking all users with long-lived installs.

### Satisfaction Signals

- The v2026.7.2-beta.1 with remote coding sessions suggests the team is rapidly iterating
- High PR velocity (500 updated in 24h) shows active development response to regressions
- The large sidebar refactor (#108422) indicates ongoing architecture improvements

## Backlog Watch

### Critical Unresolved Issues (P0/P1, no fix PR)

- **[#104721](https://github.com/openclaw/openclaw/issues/104721)** (P0, 17 comments) — All tool results return placeholder string. No fix PR linked. This is the highest-severity open issue.
- **[#107220](https://github.com/openclaw/openclaw/issues/107220)** (P0, 8 comments) — 2026.7.1 crash-loop on legacy memory conflicts. No fix PR.
- **[#107694](https://github.com/openclaw/openclaw/issues/107694)** (P0, 7 comments) — Gateway fails on benign migration skips. No fix PR.
- **[#107449](https://github.com/openclaw/openclaw/issues/107449)** (P1, 10 comments) — llama.cpp cron schema incompatibility. Linked PR open but no fix merged.
- **[#85103](https://github.com/openclaw/openclaw/issues/85103)** (P1, 10 comments) — Model fallback chain not triggered. No fix PR.
- **[#96834](https://github.com/openclaw/openclaw/issues/96834)** (P1, 9 comments) — WhatsApp image wedges main lane. No fix PR.

### Long-Unanswered (30+ days, no maintainer action)

- **[#80040](https://github.com/openclaw/openclaw/issues/80040)** (May 10, 8 comments) — Cascading failure: OAuth invalidation → empty placeholder → duplicate tool execution → context loss. Needs maintainer review and live repro.
- **[#77012](https://github.com/openclaw/openclaw/issues/77012)** (May 4, 8 comments) — WebChat transcript overwritten every turn (5.2 regression). Needs live repro.
- **[#70024](https://github.com/openclaw/openclaw/issues/70024)** (Apr 22, 7 comments) — Channel stop timeout leaves channel permanently dead. Has linked PR open.
- **[#6615](https://github.com/openclaw/openclaw/issues/6615)** (Feb 1, 9 comments, 👍7) — Exec-approval denylist. High-community-interest enhancement with no recent maintainer activity.

### PRs Awaiting Maintainer Action

- **[#97175](https://github.com/openclaw/openclaw/pull/97175)** — Deferred turn maintenance timeout (ready for maintainer look since Jun 27)
- **[#106840](https://github.com/openclaw/openclaw/pull/106840)** — Active-memory recall billing rejections (ready for maintainer look, P1 diamond lobster)
- **[#107676](https://github.com/openclaw/openclaw/pull/107676)** — Channel health check after startup grace (ready for maintainer look, P2 diamond lobster)
- **[#106515](https://github.com/openclaw/openclaw/pull/106515)** — LINE mediaKind fix on reply-token path (ready for maintainer look, P1 diamond lobster)

**Assessment:** The project is in **crisis-response mode** following the 2026.7.1 release. Five P0 regressions around the startup migration gate are blocking all users who upgrade, and critical tool/state bugs remain unaddressed. The team is actively merging fixes (150 PRs today) but the backlog of high-severity issues is growing faster than resolution. The v2026.7.2-beta.1 is a positive signal, but users should **hold off on upgrading to 2026.7.x** until the migration conflicts are resolved.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report synthesizing the community digest data for 2026-07-16.

---

## Cross-Project Ecosystem Comparison Report
**Date:** 2026-07-16

### 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is in a phase of **high-velocity stabilization and feature consolidation**, driven largely by upstream dependency changes (e.g., breaking releases from OpenClaw) and a shared focus on security, provider compatibility, and session reliability. Projects are sharply divided between a core reference implementation (OpenClaw) that is in **crisis-response mode** due to a failed release and a cohort of downstream forks and competitors that are capitalizing on the instability by hardening their own systems. Across the board, critical trends include a universal push for **provider-agnostic memory systems**, **improved telemetry and observability**, and **multi-agent orchestration** beyond simple chat. The ecosystem is also seeing a clear maturation of deployment infrastructure, with automated release scripts, container lifecycle management, and one-click deploy options becoming standard features.

### 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Status | Health Score (Qualitative) |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 482 | 500 | **v2026.7.2-beta.1** (emergency patch) | **🟠 Critical** – Major regressions from v2026.7.1 |
| **NanoBot** | 24 | 26 | No release | **🟢 Good** – Security audit complete, rapid fix cadence |
| **Hermes Agent** | 50 | 50 | No release (last: v0.18.2) | **🟡 Fair** – High PR backlog (45 open:5 merged) |
| **PicoClaw** | 6 | 2 | No release (last: v0.3.1) | **🟡 Fair** – Stable but accumulating ARM64 debt |
| **NanoClaw** | 2 | 11 | No release | **🟢 Good** – Consolidating provider-agnostic memory |
| **NullClaw** | 0 | 0 | No activity | **⚫ Inactive** – No data |
| **IronClaw** | 10 | 37 | No release | **🟢 Good** – High-value refactoring and test infrastructure |
| **LobsterAI** | 1 (stale) | 17 | **v2026.7.15** (released 2026-07-15) | **🟢 Good** – Stable release cycle, fixing UI/UX |
| **TinyClaw** | 0 | 1 | No activity | **🟡 Fair** – Quiet, low community engagement |
| **Moltis** | 1 | 6 | No release | **🟢 Good** – Focused merges, steady momentum |
| **CoPaw / QwenPaw** | 50 | 43 | No release (last: v2.0.0.post2) | **🟡 Fair** – Post-v2.0 stabilization sprint underway |
| **ZeptoClaw** | 0 | 0 | No activity | **⚫ Inactive** – No data |
| **ZeroClaw** | 22 | 50 | No release | **🟡 Fair** – High activity but significant backlog of S1 bugs |

**Key Takeaway:** Four projects (OpenClaw, NanoBot, Hermes Agent, ZeroClaw) show extremely high raw activity, but only NanoBot and IronClaw demonstrate a healthy balance of open/closed items. OpenClaw’s ratio of open to closed items (~2:1) signals a team overwhelmed by regressions.

### 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Community Scale:** With 482 issues and 500 PRs updated in 24 hours, OpenClaw has by far the largest and most active community, dwarfing all other projects.
- **Release Velocity:** Emergency patch (v2026.7.2-beta.1) was shipped within 24 hours of the broken v2026.7.1, demonstrating rapid crisis response capability.
- **Feature Dominance:** Remote coding sessions, terminal session resumption, and cloud worker integration are unique features that no other project matches.

**Technical Approach Differences:**
- **Monolithic Complexity:** OpenClaw’s codebase is significantly more complex (e.g., a 3,000-line Control UI sidebar refactored today), which contrasts with NanoClaw’s modular provider-agnostic design or Moltis’s lean integration focus.
- **Migration Gating:** OpenClaw introduced a strict startup migration guard that is too aggressive, treating benign state conflicts as fatal—a design choice that is actively damaging user trust.

**Community Size Comparison:**
- OpenClaw is the **reference ecosystem**: every other project’s digest mentions it as a dependency, integration target, or inspiration. Projects like NanoClaw and Moltis explicitly build compatibility with OpenClaw’s session and provider models.
- **Risk of Leadership Erosion:** The current crisis is creating an opening for alternatives. CoPaw/QwenPaw is gaining momentum with its v2.0 memory architecture, while IronClaw is deepening its “Reborn” tier-2 platform.

### 4. Shared Technical Focus Areas

Across multiple projects, the following requirements are emerging independently:

- **Provider-Agnostic Memory Systems:**
    - *NanoClaw* (#3012, #3013): Implemented a cross-provider persistent memory tree.
    - *ZeroClaw* (#9048): RFC to separate conversation history from agent-curated memory.
    - *CoPaw/QwenPaw* (#6148): Fixing severe memory loss after v2.0 upgrade.
    - *OpenClaw* (#87660): Lifecycle-aware memory curation feature request.

- **Intelligent Model Routing & Fallback:**
    - *OpenClaw* (#107686, closed): Multi-LLM router to reduce costs.
    - *NanoClaw* (#3057): Quota fallback (Claude → Codex) on rate limits.
    - *Moltis* (#574, open): Model routing per topic.
    - *ZeroClaw* (#85103): Model fallback chain not triggering on quota exhaustion.

- **Observability & Telemetry:**
    - *OpenClaw* (#82548): AI safety/quality events (prompt injection, tool policy, user feedback).
    - *ZeroClaw* (#6641): Turn-level OTel trace correlation.
    - *CoPaw/QwenPaw* (implicit): Debugging agent-to-agent tasks.

- **Remote & Background Execution:**
    - *OpenClaw* (shipped): Remote coding sessions on cloud workers.
    - *IronClaw* (PR #6125): User message rejected with "busy" error during background routines.
    - *CoPaw/QwenPaw* (PR #6142): Auto-memory interval configurable to `0`.

- **Security Hardening (Post-Audit):**
    - *NanoBot*: Closed 42-finding security audit (auth bypasses, command injection).
    - *ZeroClaw* (#9086): RFC for a structured security audit pipeline.

### 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | IronClaw | CoPaw/QwenPaw | ZeroClaw |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Target User** | Advanced devs, infra teams | Security-conscious orgs | Desktop-first power users | Enterprise, team workspaces | Chinese market, multi-agent | Hardware/hacker community |
| **Primary Strength** | Scale & feature breadth | Security audit & rapid triage | Desktop UX & Kanban | Stability & test harness | Qwen ecosystem integration | ZPU hardware & relay |
| **Architecture** | Monolithic, migration-gated | Modular, channel-agnostic | Session-heavy, sweeper-automated | Tiered (v1 vs Reborn) | Multi-agent leader/worker | Pluggable memory backend |
| **Unique Feature** | Remote coding sessions | Security audit: 42 findings | Kanban as primary nav | Unified extension runtime | Chrome extension (PR #6157) | Serial transport, zerorelay |
| **Community Language** | English, global | English, global | English, global | English, global | Chinese, English bilingual | English, global |

**Key Insight:** The ecosystem is stratifying by **use case depth**. OpenClaw and ZeroClaw compete on raw capability for technical users. Hermes Agent and IronClaw are building polished desktop and enterprise experiences. CoPaw/QwenPaw is uniquely positioned for the Chinese market with strong multi-agent orchestration.

### 6. Community Momentum & Maturity

**Tier 1: Rapidly Iterating (High risk, high reward)**
- **OpenClaw:** Shipping emergency patches but bleeding users trust. The sheer PR volume (500/day) shows intense effort, but the crisis is real.
- **ZeroClaw:** 50 PRs/day with a well-defined roadmap (v0.8.4 tracking, relay node, security audit). High energy but risk of burnout on stalled PRs.
- **NanoBot:** Best-in-class triage cadence. The security audit closure and quick turnaround on fix PRs indicate a mature, disciplined team.

**Tier 2: Stabilizing & Feature-Complete**
- **IronClaw:** Focused on test infrastructure (fault-injection, tier-2 harness) and v1 retirement. Low drama, high-quality engineering.
- **CoPaw/QwenPaw:** Recovering from v2.0 regressions. The community engagement is high, and the PR pipeline is healthy (22 merged). Likely to stabilize within 1-2 weeks.
- **LobsterAI:** Steady release cycle with no breaking changes. Selling features (ads, Windows installer) suggest a more commercial, less experimental project.
- **Moltis:** Quiet but effective. MiniMax M3 support and ACP auto-detection are incremental but valuable.

**Tier 3: Low Activity / Dormant**
- **PicoClaw:** Critical ARM64 blocker unaddressed. Stale-closed bugs. Risk of losing RPi user base.
- **TinyClaw:** Single PR, zero community engagement. No momentum.
- **NullClaw:** No activity for 30+ days.
- **ZeptoClaw:** No activity for 30+ days.

### 7. Trend Signals

The following industry trends are clearly visible from the community data:

1.  **From “Chat Interface” to “Autonomous Agent Platform”:** Every project is building capabilities for agents to operate in the background, manage memory, use tools asynchronously, and coordinate with other agents. The chat window is no longer the primary interaction model.

2.  **Provider Lock-In is Becoming Intolerable:** The volume of issues around specific provider incompatibilities (OpenClaw’s llama.cpp breakage, ZeroClaw’s Kimi 400 error, NanoClaw’s quota fallback) shows that users reject being locked into a single model. **Provider-agnostic architectures are a competitive necessity.**

3.  **Operational Robustness is the Top Priority:** The ecosystem is past the “cool demo” phase. Users demand reliable session state, transparent tool execution, proper error recovery, and observability tools. Bugs that are “merely annoying” in a demo are “blocking production use” now.

4.  **Desktop is the New Battleground:** Hermes Agent, LobsterAI, and CoPaw/QwenPaw are all investing heavily in desktop app reliability. The desktop is where power users live, and fragile UX (first-enter failure, duplicate messages, missing loading states) is driving users away.

5.  **Security as a Differentiator:** NanoBot’s 42-finding security audit is a market signal. With open-source AI agents gaining access to file systems, networks, and user data, **trust is becoming a product feature**. ZeroClaw’s structured audit pipeline RFC confirms this is a rising concern.

6.  **Chinese OSS Landscape is Surging:** CoPaw/QwenPaw and its dependency on the Qwen ecosystem, plus the KylinOS support request, show that a parallel, Chinese-native AI agent stack is forming. Developers targeting the global market need to decide if they integrate with or compete against this stack.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the NanoBot project digest for **2026-07-16**.

---

## NanoBot Project Digest: 2026-07-16

### 1. Today's Overview
Project activity remains **very high**, with 24 Issues and 26 PRs updated in the last 24 hours. A major **security audit** (Issue #4815) has concluded, resulting in the closure of 21 Issues covering critical auth bypasses, command injection vectors, and resource exhaustion bugs. The team is actively merging fixes, with 11 PRs merged/closed today, including high-priority patches for multimodal message crashes and gateway shutdown stability. The focus is firmly on hardening the codebase following the audit, while also advancing feature work on config refactoring and channel self-containment.

### 2. Releases
**None.** No new versions were released today.

### 3. Project Progress (Merged/Closed PRs Today)
The following significant PRs were merged or closed, reflecting a push to resolve audit findings and regressions:
- **Security & Stability Fixes:**
    - [#4944](https://github.com/HKUDS/nanobot/pull/4944) **[P1]:** Fixes a shutdown regression where the DingTalk channel could hang the gateway by stopping channels *before* draining tasks.
    - [#4943](https://github.com/HKUDS/nanobot/pull/4943) **[P1]:** Ensures the OpenAI Codex proxy configuration is consistently honored for image-generation and OAuth flows.
    - [#4813](https://github.com/HKUDS/nanobot/pull/4813) **[P1]:** Guards `.strip()` calls on `msg.content` to prevent crashes when multimodal (list-form) messages are received.
    - [#4926](https://github.com/HKUDS/nanobot/pull/4926): Fixes a developer experience (DX) issue by including the Feishu SDK in the `dev` dependencies.
- **Refactoring & Cleanup:**
    - [#4870](https://github.com/HKUDS/nanobot/pull/4870) **[P2]:** Extracts shared Markdown-to-rich-text helpers, reducing duplication across the Telegram, Signal, and Feishu channels (addressing Issue #4810).
    - [#4649](https://github.com/HKUDS/nanobot/pull/4649) **[P2]:** Corrects the WebUI activity timer to measure "Working for..." from the user's turn start, fixing a UX timing bug.

### 4. Community Hot Topics
The most active discussions revolve around the aftermath of the deep code audit and a critical heartbeat routing bug.

- **[#4924](https://github.com/HKUDS/nanobot/issues/4924) `[bug] cli/commands.py` (4 comments)**: Reports a failure in the CLI heartbeat target selection when `unifiedSession` is enabled and no traditional sessions exist. The fix is already in PR [#4928](https://github.com/HKUDS/nanobot/pull/4928), which persists the last concrete channel route for unified sessions. *Need: Reliable heartbeat delivery in unified session mode.*

- **[#4779](https://github.com/HKUDS/nanobot/issues/4779) (Closed) / [#4815](https://github.com/HKUDS/nanobot/issues/4815) (Closed)**: The 42-finding audit report and the most critical individual findings (like `process_direct()` auth bypass) generated significant implicit interest. The closure of these "hamb1y" issues signals the maintainers are actively triaging the reported vulnerabilities. *Need: Trust that the platform is secure by default.*

### 5. Bugs & Stability
The bug landscape is dominated by **security** and **correctness** issues from the recent audit, with new regressions being caught quickly.

**Critical (P0/P1):**
- **Heartbeat Routing Failure ([#4924](https://github.com/HKUDS/nanobot/issues/4924))**: `_pick_heartbeat_target_from_sessions` crashes with `unifiedSession: true`. **Fix PR exists:** [#4928](https://github.com/HKUDS/nanobot/pull/4928).
- **Qwen Thinking Content Leak ([#4934](https://github.com/HKUDS/nanobot/issues/4934))**: Qwen 3.x models leak verbose "thinking" text into chat responses. **Fix PR exists:** [#4946](https://github.com/HKUDS/nanobot/pull/4946) adds a blocklist for thinking model IDs.
- **WebUI Metadata Loss on Restart ([#4940](https://github.com/HKUDS/nanobot/issues/4940))**: Sessions using legacy filenames lose their `workspace_scope` metadata after a restart. **Fix PR exists:** [#4941](https://github.com/HKUDS/nanobot/pull/4941) adds a fallback to legacy file paths.

**High (P2):**
- **Context Overflow ([#4056](https://github.com/HKUDS/nanobot/issues/4056))**: Context trimming can drop the assistant's question, leaving the model with an orphaned user reply. **Fix PR exists:** [#4925](https://github.com/HKUDS/nanobot/pull/4925) adds a hard-budget preflight and reprompt strategy.
- **Spurious 128-Token Budget ([#4802](https://github.com/HKUDS/nanobot/issues/4802))**: Disabling context window budgeting (set to 0) still results in a 128-token budget due to `max(128, 0)`.

### 6. Feature Requests & Roadmap Signals
Feature work is progressing alongside the bug fixes, focusing on infrastructure and developer experience.
- **Deployability:** PR [#4937](https://github.com/HKUDS/nanobot/pull/4937) adds a "one-click Deploy to Render" blueprint, suggesting a push to reduce self-hosting friction.
- **Infrastructure Refactoring:** Large refactors in progress for **config file persistence** (PR [#4918](https://github.com/HKUDS/nanobot/pull/4918)) and **self-contained channels** (PR [#4908](https://github.com/HKUDS/nanobot/pull/4908)). These are foundational changes that will likely land in the next minor version.
- **Agent Capabilities:** PR [#4942](https://github.com/HKUDS/nanobot/pull/4942) lets agents manage **session-local triggers** (e.g., "wake me in 5 minutes"), adding a new type of proactive agent behavior.
- **Telegram Customization:** PR [#4919](https://github.com/HKUDS/nanobot/pull/4919) supports custom Bot API base URLs and headers, catering to enterprise self-hosters.

### 7. User Feedback Summary
User pain points today reflect stress on the system's reliability and security:
- **Pain Point (Stability):** The crash on Qwen models ([#4934](https://github.com/HKUDS/nanobot/issues/4934)) and the silent loss of WebUI workspace scope ([#4940](https://github.com/HKUDS/nanobot/issues/4940)) are causing real user confusion and data inconvenience.
- **Pain Point (Security):** The closure of the 42-finding audit (specifically the `process_direct` bypass [#4779](https://github.com/HKUDS/nanobot/issues/4779)) addresses a major unspoken trust concern for users running multi-user instances. Users are likely satisfied to see these closed.
- **Satisfaction (Community Engagement):** The quick issuance of fix PRs for community-reported bugs (e.g., #4924 → #4928, #4934 → #4946) indicates strong maintainer responsiveness, which is a positive signal for user satisfaction.

### 8. Backlog Watch
No long-unanswered "backlog" items were flagged today. All major open issues from previous weeks (e.g., the security audit findings from May 29 and July 6) have either been closed or have active fix PRs in progress. The project shows a very healthy triage cadence.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-07-16  
**Data Source:** GitHub (github.com/nousresearch/hermes-agent)

---

## 1. Today's Overview

Hermes Agent is experiencing a high-velocity maintenance cycle with **50 issues** and **50 pull requests** updated in the last 24 hours, split across open (22 issues, 45 PRs) and closed/resolved items (28 issues, 5 PRs). The project shows a healthy triage cadence, but the **very high open-to-merged PR ratio (45 open vs 5 merged)** suggests a build-up of unintegrated work that may warrant maintainer attention. No new releases were published today. The community is actively reporting bugs related to **authentication, Docker dashboard functionality, session state consistency, and desktop app behavior**, with several critical patches landed on `main` via the sweeper process.

---

## 2. Releases

**No new releases today.**  
The last documented release appears to be v0.18.2 (referenced in bug #63210, dated 2026-07-12).

---

## 3. Project Progress

**5 PRs merged or closed today,** signaling targeted fixes:

| PR | Status | Focus |
|---|---|---|
| #65241 | Closed (duplicate) | Added timeout to cua-driver permissions subprocess |
| #65247 | Open → fix | `reasoning_effort` not sent to unsupported APIs |
| #65248 | Open → fix | UTF-8 BOM stripping from `.env` files |
| #65249 | Open → fix | Oneshot mode (`-z`) respecting `-s/--skills` flag |
| #65250 | Open → fix | `/learn` writes to correct `HERMES_HOME/skills` |

**Notable merged/closed fixes landing via `sweeper:implemented-on-main`:**
- **#63210** – Desktop composer not ready on new session (first Enter fails)  
- **#63107** – Persistent memory char limit now configurable  
- **#60345** – MoA reference models silently degrade on context overflow  
- **#60105** – Dashboard 500 when only BasicAuthProvider is registered  
- **#60556** – Telegram streaming + `[[audio_as_voice]]` TTS rendering as plain audio  
- **#60546** – Clarified Ctrl+1…9 session-slot behavior in Project sidebar views  
- **#60538** – CLI/TUI now supports configurable themes  
- **#60439** – Web UI accessibility: plain-text clipboard paste unblocked  

The `sweeper` automation appears to be working effectively, resolving bugs quickly and pushing fixes to `main`.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Comments | Summary |
|---|---|---|
| [#59113 – Dashboard no longer works with docker](https://github.com/NousResearch/hermes-agent/issues/59113) | **8** | Docker dashboard auth/network routing broken: `127.0.0.1` inside container fails; reverse proxy users with own auth also affected. 2 👍 |
| [#64271 – Gateway sessions need credential-pool rebind after auth switch](https://github.com/NousResearch/hermes-agent/issues/64271) | **4** | Long-running Gateway sessions pin stale credentials after `/model` or model picker change; operator changes don't propagate. |
| [#60345 – MoA reference models silently degrade on context overflow](https://github.com/NousResearch/hermes-agent/issues/60345) | **4** | Closed via sweeper; MoA reference calls fail silently with no user signal when context window exceeded. |
| [#63210 – Desktop composer: first Enter fails on new session](https://github.com/NousResearch/hermes-agent/issues/63210) | **3** | Windows 10; previous chat text remains visible, first send fails. |
| [#63192 – ACP session/set_model fails for nvidia/nemotron-3-nano-30b-a3b](https://github.com/NousResearch/hermes-agent/issues/63192) | **3** | Stale static catalog routes to keyless NIM provider, causing `Internal error`. |

### Most Active Pull Requests (by comment count)

| PR | Comments | Focus |
|---|---|---|
| [#20583 – fix(slack): scope sessions and routing by workspace](https://github.com/NousResearch/hermes-agent/pull/20583) | — | Long-running (since May 6) Slack workspace scoping fix; high risk/sweeper labels. |
| [#51758 – fix(url_safety): allow NAT64 well-known prefix](https://github.com/NousResearch/hermes-agent/pull/51758) | — | SSRF-safe NAT64 fix; blocking public hosts on dual-stack-lite ISPs. |
| [#65256 – feat(slack): support long app descriptions](https://github.com/NousResearch/hermes-agent/pull/65256) | — | New Slack manifest feature. |
| [#63151 – fix(cli): resolve session ID prefixes for resume](https://github.com/NousResearch/hermes-agent/pull/63151) | — | Session ID prefix resolution for `--resume`. |

**Underlying needs expressed by the community:**
- **Seamless Docker deployment**: Users want the dashboard to work out-of-the-box with Docker, including reverse proxy authentication.
- **Credential consistency**: Operators managing long-running Gateway sessions need dynamic credential rebinding without restart.
- **Desktop reliability**: The desktop app is a major pain point—first-message failures, duplicate messages (#64564), and model picker bugs (#64933) erode trust.
- **Kanban usability**: Users want Kanban as a first-class navigation item in Hermes Studio, not buried in Settings.

---

## 5. Bugs & Stability

### Critical / High Severity (P2)

| Issue | Description | Fix Status |
|---|---|---|
| [#59113 – Dashboard Docker auth broken](https://github.com/NousResearch/hermes-agent/issues/59113) | Dashboard fails with Docker + non-loopback addresses; 500 errors. | **No fix PR yet** – needs decision |
| [#64271 – Gateway credential-pool rebind missing](https://github.com/NousResearch/hermes-agent/issues/64271) | Pinned credentials stale after auth switch; session state risk. | **No fix PR yet** – open |
| [#64933 – Desktop model picker creates duplicate provider entries](https://github.com/NousResearch/hermes-agent/issues/64933) | Duplicate `models.json` entries with wrong `baseUrl` when switching providers. | **No fix PR yet** – open |
| [#65059 – Desktop orphan reaping across profile backends](https://github.com/NousResearch/hermes-agent/pull/65059) | One backend can kill another's durable session. | **Fix PR open** – under review |
| [#65249 – `-z/--oneshot` ignores `-s/--skills`](https://github.com/NousResearch/hermes-agent/pull/65249) | Oneshot mode doesn't load skills. | **Fix PR open** – under review |
| [#65248 – UTF-8 BOM breaks `.env` parsing](https://github.com/NousResearch/hermes-agent/pull/65248) | First key-value pair silently dropped. | **Fix PR open** – under review |

### Medium Severity (P3)

| Issue | Description | Fix Status |
|---|---|---|
| [#56865 – Memory guard for local terminal subprocesses](https://github.com/NousResearch/hermes-agent/issues/56865) | No per-command memory ceiling; accidental OOM on systemd gateways. | Open |
| [#52382 – "Unknown toolsets: messaging" warning on every start](https://github.com/NousResearch/hermes-agent/issues/52382) | Stale config value from removed `messaging` toolset; no migration. | Open |
| [#57871 – Shared-token routes for multiplexed gateway profiles](https://github.com/NousResearch/hermes-agent/issues/57871) | Profiles isolate config but lack shared token routes. | Open |

### Regression Watch
- **Desktop duplication (#64564)**: Every message renders twice in remote mode—display-only but highly disruptive.
- **Keyboard shortcut confusion (#60546)**: `Ctrl+1…9` shortcuts misalign in Project sidebar views.

---

## 6. Feature Requests & Roadmap Signals

### Likely to Ship in Next Version

| Request | Issue/PR | Rationale |
|---|---|---|
| **Configurable persistent memory char limit** | [#63107](https://github.com/NousResearch/hermes-agent/issues/63107) | **Already implemented on main** – will appear in next release |
| **Kanban in primary navigation** | [#59927](https://github.com/NousResearch/hermes-agent/issues/59927) | **Already implemented on main** |
| **CLI/TUI configurable themes** | [#60538](https://github.com/NousResearch/hermes-agent/issues/60538) | **Already implemented on main** |
| **Desktop background image config** | [#60414](https://github.com/NousResearch/hermes-agent/issues/60414) | **Already implemented on main** |
| **Accessibility: plain-text clipboard paste** | [#60439](https://github.com/NousResearch/hermes-agent/issues/60439) | **Already implemented on main** |

### High-Interest Future Features

| Feature | Issue | Community Signal |
|---|---|---|
| **Mistral Vibe API key support** | [#63060](https://github.com/NousResearch/hermes-agent/issues/63060) | Single comment, but closed as not planned → need to re-evaluate |
| **Astromech-style droid mascot (Petdex)** | [#56588](https://github.com/NousResearch/hermes-agent/issues/56588) | Fun, low-priority, but shows community desire for personality |
| **Shared-token routes for gateway profiles** | [#57871](https://github.com/NousResearch/hermes-agent/issues/57871) | Multi-context operators want isolated but linkable profiles |
| **Memory guard for terminal subprocesses** | [#56865](https://github.com/NousResearch/hermes-agent/issues/56865) | Operational stability for heavy local jobs |

### Roadmap Prediction
The next version (v0.18.3 or v0.19) will likely include:
- **Persistent memory configurable char limit**
- **Kanban promoted to primary navigation**
- **CLI/TUI themes**
- **Desktop background image setting**
- **Several authentication fixes** (MoA credentials, dashboard auth)
- **Desktop composer reliability fixes**

---

## 7. User Feedback Summary

### Pain Points & Dissatisfaction

| Pain Point | Source | Severity |
|---|---|---|
| **Docker dashboard completely broken for auth** – users can't use reverse proxy auth or local access | [#59113](https://github.com/NousResearch/hermes-agent/issues/59113) | 🟥 High |
| **Desktop app unreliable on new sessions** – first Enter fails, text remains from previous chat | [#63210](https://github.com/NousResearch/hermes-agent/issues/63210) | 🟥 High |
| **Desktop message duplication** – every message renders twice, confusing UX | [#64564](https://github.com/NousResearch/hermes-agent/pull/64564) | 🟥 High |
| **Session history sidebar inconsistent across windows** – missing messages never come back | [#63237](https://github.com/NousResearch/hermes-agent/issues/63237) | 🟧 Medium |
| **TUI generates tool-calls as text instead of executing** – Danish user report | [#63170](https://github.com/NousResearch/hermes-agent/issues/63170) | 🟧 Medium |
| **Model picker creates duplicate provider entries** – wrong `baseUrl` | [#64933](https://github.com/NousResearch/hermes-agent/issues/64933) | 🟧 Medium |
| **Copilot integration missing header** – GitHub fails requests | [#63188](https://github.com/NousResearch/hermes-agent/issues/63188) | 🟧 Medium (fix on main) |

### Use Cases & Workflows Observed

| Use Case | Evidence |
|---|---|
| **Self-hosted Docker deployments with reverse proxy** – users want auth flexibility | #59113, #60105 |
| **Long-running Gateway sessions with credential rotation** – operators manage multiple pools | #64271 |
| **MoA (Mixture-of-Agents) workflows** – multi-model pipelines break silently | #60345, #60064 |
| **Desktop as primary interface** – high expectations for reliability | #63210, #64564, #64933 |
| **Kanban task management** – users want it front-and-center | #59927 |
| **Slack workspace scoping** – multi-workspace operators need isolation | #20583 |

### Satisfaction Signals
- **High-value fixes landing quickly**: Multiple "implemented-on-main" sweeper labels show responsive maintainer team.
- **Feature requests being addressed**: Configurable themes, memory limits, and accessibility improvements are being shipped.
- **Community engagement**: Users reporting bugs with detailed reproduction steps and logs (e.g., #60536 with paste.rs links).

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Reason for Concern |
|---|---|---|
| [#56865 – Memory guard for terminal subprocesses](https://github.com/NousResearch/hermes-agent/issues/56865) | **14 days** (since July 2) | Operational safety risk; no assignee or PR |
| [#52382 – "Unknown toolsets: messaging" warning](https://github.com/NousResearch/hermes-agent/issues/52382) | **21 days** (since June 25) | Config migration not implemented; affects all users who previously used messaging toolset |
| [#57871 – Shared-token routes for multiplexed profiles](https://github.com/NousResearch/hermes-agent/issues/57871) | **13 days** (since July 3) | Feature request with 1 comment; no roadmap commitment |
| [#56588 – Droid mascot for Petdex](https://github.com/NousResearch/hermes-agent/issues/56588) | **15 days** (since July 1) | Low priority but no response from maintainers |
| [#59113 – Dashboard Docker auth broken](https://github.com/NousResearch/hermes-agent/issues/59113) | **11 days** (since July 5) | **Most commented issue** with 8 comments, 2 👍 – needs decision |

### Stale PRs Needing Review

| PR | Age | Risk Labels |
|---|---|---|
| [#20583 – Slack workspace scoping](https://github.com/NousResearch/hermes-agent/pull/20583) | **71 days** (since May 6) | `risk-session-state`, `risk-message-delivery`, `risk-compatibility`, `blast-broad` |
| [#51758 – NAT64 URL safety](https://github.com/NousResearch/hermes-agent/pull/51758) | **22 days** (since June 24) | `risk-security-boundary`, `risk-compatibility`, `blast-broad` |
| [#42345 – Matrix threaded replies](https://github.com/NousResearch/hermes-agent/pull/42345) | **38 days** (since June 8) | `risk-compatibility`, `blast-moderate` |
| [#42262 – Cron chained response payloads](https://github.com/NousResearch/hermes-agent/pull/42262) | **38 days** (since June 8) | `risk-security-boundary`, `risk-compatibility`, `blast-moderate` |
| [#51028 – CLI automation health command](https://github.com/NousResearch/hermes-agent/pull/51028) | **24 days** (since June 22) | `risk-compatibility`, `blast-contained` |

### Risk Assessment
- **#20583** (Slack scoping) has been open for **71 days** with four `risk-*` labels and `blast-broad` – this is the highest-risk item in backlog.
- **#51758** (NAT64 URL safety) addresses a real-world ISP issue but touches security boundaries – 22 days with no movement.
- The **"sweeper:implemented-on-main"** workflow is healthy, but several P2 bugs (especially #59113 and #64271) lack fix PRs despite being open for over a week.

---

**Overall Project Health:** ✅ **Active with strong community engagement and responsive bug-fix pipeline**, but weighed down by **10+ open P2 bugs, 5 stale high-risk PRs (30-71 days old), and a 45:5 open-to-merged PR ratio** that indicates a significant review bottleneck. The sweeper automation is effective for routine fixes, but complex cross-cutting issues (auth, Docker, Slack scoping) need dedicated maintainer bandwidth.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the PicoClaw project digest for **2026-07-16**.

---

## PicoClaw Project Digest – 2026-07-16

### 1. Today's Overview
Project activity is moderate today, with 6 issues updated in the last 24 hours (3 open, 3 closed via staleness) and 2 open pull requests. There are no new releases. The community is primarily surfacing bugs in the ARM64 release and a critical deserialization defect in process hooks, alongside a feature request for stateless gateway sessions. The project appears stable but is accumulating technical debt, particularly around ARM64 support and tool-call reliability.

### 2. Releases
**No new releases today.** The last known release is v0.3.1 (2026-07-03). No migration notes or change logs are available for today.

### 3. Project Progress
No pull requests were merged or closed today. Two open PRs are pending:
- **PR #3259** (Open, updated today) – A small documentation change to the project description regarding parallelization.
- **PR #3222** (Open, updated 2026-07-15) – A refactor of the DeltaChat module: removes legacy features, drops password-based email config, renames `invite_link` to `join_invite_link`, and adds a full DeltaChat section. This represents a substantial cleanup (-200 lines of code) but has not been merged for 13 days.

### 4. Community Hot Topics
- **Issue #3153** – [CLOSED] [BUG] Volcengine Doubao Seed tool calls leak as `<seed:tool_call>` text. This issue had 4 comments and was the most active discussion today. It was closed as stale, but the underlying problem (raw XML leaking into user output instead of executing a call) remains a significant reliability concern for users on the Volcengine provider.
    - Link: https://github.com/sipeed/picoclaw/issues/3153
- **Issue #3196 / #3197** – Both closed as stale today, both reporting that Codex and Antygravity OAuth login are not working on v0.2.9. These are duplicate reports, suggesting a known regression or broken third-party integration at that version.
    - Link: https://github.com/sipeed/picoclaw/issues/3196
    - Link: https://github.com/sipeed/picoclaw/issues/3197

### 5. Bugs & Stability
| Issue | Title | Severity | Status |
|-------|-------|----------|--------|
| #3260 | picoclaw launcher doesn't exist for ARM64 release | **Critical** (blocks installation on RPi) | Open, 0 comments |
| #3258 | Process Hook before_tool modify: decision field discarded, args misparsed | **High** (breaks hook logic) | Open, 0 comments |
| #3196/3197 | OAuth login not working (Codex, Antygravity) | **Medium** (prevents integration) | Closed as stale |
| #3153 | Doubao Seed tool call leak | **Medium** (functionality broken) | Closed as stale |

**Critical Alert:** Issue #3260 reports that the ARM64 build downloaded from the official website lacks a launcher binary, making it unusable on Raspberry Pi (Raspbian Lite, aarch64). No workaround or fix PR exists yet.

**High Severity:** Issue #3258 reports that `before_tool` hooks cannot modify decisions or arguments due to a deserialization defect. This breaks a core extensibility feature for users running custom Python hooks.

### 6. Feature Requests & Roadmap Signals
- **Issue #3257** – A feature request for a **stateless/no-history mode** for gateway sessions. The user states they can achieve fresh conversations via the CLI (`--session` flag) but not in gateway mode, where the session key is derived from channel/chat ID. This is a moderate-effort feature that would improve gateway usability for stateless/transactional use cases. It is likely to be considered for v0.3.2.
    - Link: https://github.com/sipeed/picoclaw/issues/3257
- **PR #3259** – A description update mentioning “better parallelization.” This hints at work in progress to improve concurrent tool calling or session handling, though no code changes have been merged.

### 7. User Feedback Summary
- **Pain Points:** Installation failure on ARM64 (Raspberry Pi) – a critical blocker for a significant user segment. The deserialization bug in hooks (#3258) is causing frustration for developers building custom tool-wrapping logic. OAuth login failures (#3196/3197) were reported but not resolved before being marked stale, leaving users without a fix.
- **Use Cases:** Users are deploying PicoClaw as an agent (CLI), as a gateway (API), and on embedded hardware (RPi). The gateway stateless mode request (#3257) suggests demand for lightweight, ephemeral interactions.
- **Satisfaction:** Mixed. Stability issues (ARM64, hooks) are hurting confidence, but the project is actively moving forward with refactors (DeltaChat) and parallelization descriptions.

### 8. Backlog Watch
- **PR #3222** – DeltaChat refactor (updated 2026-07-15) – No comments or merges for 13 days despite being a substantial cleanup. Risk of bit-rot or abandonment.
    - Link: https://github.com/sipeed/picoclaw/pull/3222
- **Issue #3260** – ARM64 launcher missing – Opened yesterday, zero maintainer response. This is a launch-blocking bug that requires immediate triage.
- **Issue #3153** – Stale-closed without a fix. If the Volcengine Doubao tool-call leak is a recurring provider issue, it may resurface. No fix PR exists.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest**
**Date:** 2026-07-16

---

### 1. Today's Overview
Activity is **high** with 11 pull requests updated in the last 24 hours, signaling an active push to close a batch of provider, memory, and delivery stability work. Two issues are active, one closed, and no new releases were cut. The project appears to be in a **consolidation phase**, merging provider-agnostic memory and a new OpenCode integration while hardening container runtime and delivery logic. Community engagement is moderate, with maintainers leading the bulk of contributions.

---

### 2. Releases
*No new releases today.*

---

### 3. Project Progress
Four pull requests were merged or closed today:

- **[#3055] feat: add deploy.sh for one-command redeploys** — Merged. Adds a `deploy.sh` script for standardized SSH-based redeployment, following existing `setup/*.sh` conventions. Author: dtanikella.
- **[#3056] feat(opencode): add OpenCode as an agent provider** — Merged. Adds a new `opencode` provider to the container agent-runner, managing an `opencode serve` subprocess with shared server lifecycle and MCP config translation. Author: dtanikella.
- **[#3013] feat(codex): load shared memory on session start** — Merged (core-team). Implements Codex-side support for the provider-agnostic memory system, registering native `SessionStart` hooks. Author: amit-shafnir.
- **[#3012] feat(memory): add provider-agnostic persistent memory** — Merged (core-team). Scaffolds a persistent memory tree shared across agent providers, including `memory/index.md` and definition files, loaded on startup, clear, and compaction. Author: amit-shafnir.

**Progress Summary:** Two large memory system PRs (#3012, #3013) merged, extending persistent memory to the Codex provider. A new OpenCode provider (#3056) broadens agent provider support. Deployment automation (#3055) improves operational hygiene.

---

### 4. Community Hot Topics
*No issues or PRs with high comment counts or reactions stand out today.* Most contributions are from maintainers or core-team members. The most discussed item by technical implication is:

- **[Issue #3058]** *Transient outbound-send failures are permanently dropped after 3 fast retries* — While only 1 comment, it identifies a critical logic gap in `src/delivery.ts` where network blips and permanent validation errors are treated identically. A fix PR (#3059) is already open.

**Underlying need:** Users require reliable message delivery that distinguishes transient network errors from permanent failures, preventing silent message loss.

---

### 5. Bugs & Stability
| Severity | Issue | Description | Fix PR Exists? |
|----------|-------|-------------|----------------|
| **Critical** | [#3058] — Transient outbound-send failures permanently dropped after 3 retries | `src/delivery.ts` makes no distinction between network blips and permanent errors. After 3 retries (~3s), it calls `markDeliveryFailed()` permanently, dropping agent replies on any transient blip. | Yes — [#3059] |
| **High** | [#3054] [CLOSED] — `agent_message_policies` rows can outlive their group/connection | Foreign key references in `agent_message_policies` are not cleaned up on group delete or CLI destination removal, causing FK failures. | Closed (no fix PR linked in data, but issue is closed) |
| **Medium** | [#3053] — Containers never exit on their own (idle timeout) | `processQuery` keeps SDK stream open, blocking poll loop forever; every session container lingers until 30-min host kill, causing unnecessary resource waste. | Yes — [#3053] |
| **Medium** | [#3052] — Host gateway not resolved on Colima/Lima/Rancher Desktop | `hostGatewayArgs()` only adds mapping on Linux; macOS VM runtimes are missed, breaking container-to-host communication. | Yes — [#3052] |

**Stability Assessment:** Two critical-to-high delivery bugs (#3058, #3054) are addressed or fixed. Two resource/stability issues in container runtime (#3053, #3052) have open fix PRs.

---

### 6. Feature Requests & Roadmap Signals
- **Provider-agnostic persistent memory** — Merged today (#3012, #3013). Expect this to be the foundation for cross-session context in future releases, likely included in the next minor version.
- **OpenCode provider** — Merged (#3056). Broadens provider support beyond Claude/Codex, indicating a strategy to support multiple open-source agent runtimes.
- **Quota fallback (Claude→Codex)** — Still open (#3057). Introduces automatic failover when Claude hits rate limits, switching to Codex mid-turn. Highly likely for next release given its feature-completeness and pilot activation modules.
- **Unified approval lifecycle** — Open (#3040). Aims to consolidate approval holds behind one lifecycle contract. Signals ongoing work to simplify the policy/approval system.

**Prediction:** Next minor release will likely include:
- Quota fallback (#3057)
- Unified approval lifecycle (#3040)
- Provider-agnostic memory (already merged)

---

### 7. User Feedback Summary
- **Pain point:** Delivery reliability — Users experienced silent message drops on transient network failures, addressed by [#3058]/[#3059].
- **Pain point:** Container lifecycle management — Containers running idle until host kill timeout, wasting resources, addressed by [#3053].
- **Pain point:** Provider/vendor lock-in — Users want fallback options when Claude hits quota; the feature in [#3057] directly addresses this.
- **Satisfaction signal:** Two core-team memory PRs merged, indicating active improvement of long-term memory for agents.

**Overall sentiment:** Neutral-to-positive; bugs are being actively fixed, but the delivery reliability issue (#3058) likely caused user frustration before its identification.

---

### 8. Backlog Watch
| Item | Age | Issue/PR | Status | Concern |
|------|-----|----------|--------|---------|
| [#2591] — Namespace user IDs by channel-type prefix, not bare colon | 55 days | PR (OPEN) | No recent progress; last updated 2026-07-15 (only a note activity) | Risk of drifting into stale PR; maintainer review needed. |

**Criticality:** Low risk — no user blocker reported, but the PR has been open since May 2026 without merge or closure. If this addresses a real production issue (e.g., ID collision between channels), it should be prioritized for review.

---

**Project Health: Good.** Active, with multiple merges per day, strong core-team engagement, and quick turnaround on critical bug fixes. No release cadence issues visible.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the IronClaw project digest for **2026-07-16**.

---

## IronClaw Project Digest — 2026-07-16

### 1. Today's Overview

IronClaw had an **exceptionally high-activity day**, driven by a coordinated push against the Reborn tier-2 extension plan and a series of OAuth and UX bug fixes. The team resolved **7 issues** and closed/merged **12 PRs**, while opening **25 new PRs** and **10 active issues**. Activity was heavily focused on test infrastructure (fault-injection, fixture fixtures) and production bug squashing, with core contributors (henrypark133, italic-jinxin, BenKurrek) leading the charge. Despite the high PR volume, the project released **no new versions**, indicating the team is deep in a stabilization and hardening cycle before a potential release.

### 2. Releases

**No new releases** were published in the last 24 hours. The project remains in an active development phase without cut versions since the last release cadence.

### 3. Project Progress (Merged/Closed PRs)

The following significant work merged or was closed today, advancing stability, UX, and test coverage:

- **Extension & Lifecycle**:
    - **#6084 (feat(webui))**: Replaced native browser confirmation dialogs with a shared `ConfirmDialog` modal across chat, automation, and extension removal flows.
    - **#6082 (fix(webui-v2))**: Improved Extension Registry load times by rendering catalog data immediately instead of waiting for slow enrichment.
    - **#6055 (test/reborn)**: Added integration coverage for `StaleSurface` same-run refresh pin and extension-remove channel-cleanup paths.
- **UX Polish**:
    - **#6081 (fix(webui-v2))**: Fixed intermittent Enter key submission failure in the chat input.
    - **#6083 (closed issue)**: Replaced native `confirm()` dialogs (implementation covered by #6084).
- **Backend & Core**:
    - **#6087 (closed issue)**: Fixed Extension catalog silently showing empty state on error (now shows error state).
    - **#6044 (closed issue)**: Fixed intermittent Enter key submission bug.
    - **#6128 (fix(auth))**: Batch of auth lifecycle fixes including shared-vendor ceiling and Notion refresh retryability.

### 4. Community Hot Topics

The following issues and PRs generated the most discussion or signal significant community/team concern:

1.  **#6105 [OPEN] — Extension/channel lifecycle state-machine test** (0 👍, 3 comments)
    - **Link:** [Issue #6105](https://github.com/nearai/ironclaw/issues/6105)
    - **Analysis:** This is the **top priority bug family** of the last two weeks. It has regressed across **four** QA bug-bash waves despite multiple attempted fixes. The underlying need is clear: Slack and other channel connections are unstable, and the team lacks automated state-machine test coverage (install→connect→disconnect→reconnect→uninstall). The community (and QA) wants this non-functional, reliability-oriented improvement, not just new features.

2.  **#6116 [OPEN] — Unified generic extension runtime** (0 👍, 0 comments)
    - **Link:** [PR #6116](https://github.com/nearai/ironclaw/pull/6116)
    - **Analysis:** This is a **massive, high-risk refactor** (size: XL, 92 commits) that aims to reconcile the main branch with a unified extension runtime architecture. It touches nearly every scope (agent, channel, workspace, sandbox, CI, docs). While low on external comments, its sheer size and the fact that it is currently "parked" suggests intense internal debate about the migration path.

3.  **#5910 [OPEN] — Fix: hydrate approval gates on notification open** (0 👍, 0 comments)
    - **Link:** [PR #5910](https://github.com/nearai/ironclaw/pull/5910)
    - **Analysis:** This older PR (from 2026-07-10) is still open and addresses the critical issue of approval gates not being properly delivered to the WebUI. The need here is preventing automation deadlocks where a user is waiting for a dialog that never appears.

### 5. Bugs & Stability

The following new bugs were reported or remained active today, ranked by severity.

- **🔴 High Severity:**
    - **#6125 — User message rejected with "busy" error while routine runs in background:** A P2 bug that effectively locks users out of conversations when any background routine is active. **Fix PR:** None yet.
    - **#6137 — Mixed-batch gate resume never redispatches the non-first gated call:** A complex tool-calling bug where approval gates fail to resume correctly for non-first calls in a batch. **Fix PR:** None yet.
    - **#6138 — Tier-2 harness can't express a compound denied-gate + HTTP-egress-error scenario:** A test infrastructure gap that prevents testing a real-world failure combination. **Fix PR:** Likely #6134.

- **🟡 Medium Severity:**
    - **#6126 — First message in a new chat has no loading or streaming state:** P3 UX bug causing the UI to appear frozen until the first response arrives. **Fix PR:** None yet.
    - **#6127 — Running routine incorrectly displays "Previous run still in progress" on first execution:** P3 UI/status display bug causing user confusion. **Fix PR:** None yet.

- **🟢 Lower Severity / Dead Code:**
    - **#6136 — WebChatV2Event::accepted/cancelled/failed variants are dead code:** No production constructor exists for these event variants. **Fix PR:** Likely to be cleaned up in #6133.
    - **#6117 — Workspace displays untranslated region names and raw file sizes:** Non-blocking localization/internationalization issue. **Fix PR:** #6119 is open and resolves this.

### 6. Feature Requests & Roadmap Signals

The data reveals several strong roadmap signals, particularly around **testing infrastructure**, **stability**, and **v1 retirement**.

- **Hot Take: v1 Runtime Removal is Nearing.** PR #6123 (size: XL, DB migration) is a bold move to remove the retired v1 runtime entirely. This suggests the team is confident in the Reborn (v2) platform and preparing for a major cleanup release.
- **Tier-2 Integration Harness Expansion:** PRs #6131, #6132, #6133, and #6134 are a concentrated effort to expand the tier-2 test harness. This indicates a roadmap priority move from "building features" to "proving resilience."
- **Per-User Secrets in Admin UI:** Issue #6118 and its fix PR #6120 are user-facing features being backfilled (the API already exists). This will likely land in the next minor release, giving admins control over user credentials.
- **UX Skeleton/Streaming Improvements:** Issue #6126 (blank page on first message) is a high-visibility UX gap. Fixing this (loading indicators/streaming placeholders) is likely a priority for the next UI patch.

### 7. User Feedback Summary

- **Pain Point: "Busy" lockout during routines.** (Issue #6125) — Users are explicitly complaining that they cannot interact with the system while background automations run. This is a major satisfaction killer for users who rely on both manual chat and scheduled routines.
- **Pain Point: Unreliable channel connections.** (Issue #6105) — The #1 bug family. Users on Slack and other channels are experiencing disconnect→reconnect failures that regress across QA cycles. Trust in channel reliability is low.
- **Pain Point: The "Loading Screen" effect.** (Issue #6126, #6052) — Both the Extension Registry (long skeleton load) and new chat sessions (blank screen) suffer from poor perceived performance. Users feel the application is frozen or broken.
- **Positive Signal: Consistent UI patterns resolving.** (PR #6084) — The move away from native browser dialogs to a shared modal was a direct response to user feedback about inconsistent UI. This signals the team is listening to polish requests.

### 8. Backlog Watch

The following items require maintainer attention due to age or lack of response:

- **#5598 [OPEN] — Release chore (Automated)** — Last updated 2026-07-15 (13 days stale). This automated release PR has been open for almost two weeks. It contains breaking changes for `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0). The extended delay suggests the team is either waiting for the v1 retirement to land or hesitant to cut a release with so many in-flight refactors. This needs a decision.
- **#5910 [OPEN] — Fix: hydrate approval gates on notification open** — Last updated 2026-07-15 (6 days stale). This fix for a critical approval-gate delivery bug is authored by a bot (`ironloopai[bot]`) and has been stuck. It needs a human review to determine if it can be merged or superseded by the OAuth/auth lifecycle work in #6130.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for **2026-07-16**, based on the provided GitHub data.

---

## LobsterAI Project Digest – 2026-07-16

### 1. Today's Overview
The project is in a **high-activity release cycle**, with a new version (2026.7.15) shipped yesterday and **17 PRs** updated in the last 24 hours, of which **11 were merged or closed**. This indicates a focused push to stabilize the codebase and deliver UI/UX improvements. A subset of 6 issues were batch-closed as stale, while one **new critical UX concern** (undismissible in-app ads) was opened. The **CI/dependency update backlog** remains visible, with 5 open PRs from Dependabot waiting for review.

### 2. Releases
**New Release: [LobsterAI 2026.7.15](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.7.15)**
- **What's Changed:**
  - **Feat:** Optimized file card display.
  - **Feat (build):** Added an opt-in Windows web installer target.
  - **Feat (cowork):** Revamped the homepage quick-action scenario.
- **Breaking Changes:** None mentioned.
- **Migration Notes:** No migration steps required.

### 3. Project Progress (Merged/Closed PRs Today)
The following key changes were merged/closed on 2026-07-15:
- **Model Support:** Added default models for **GPT-5.6** and **Grok 4.5** with a versioned migration path to avoid duplicate user-customized models ([PR #2332](https://github.com/netease-youdao/LobsterAI/pull/2332)).
- **Settings UX:** Grouped General settings into labeled cards (basics, notifications, data & privacy) and merged permission/question toggles ([PR #2336](https://github.com/netease-youdao/LobsterAI/pull/2336)).
- **Update Overlay:** Blocked app interactions during user-initiated updates with a lightweight overlay, plus an overlay refinement for scrolling release notes and keyboard focus ([PR #2333](https://github.com/netease-youdao/LobsterAI/pull/2333), [PR #2338](https://github.com/netease-youdao/LobsterAI/pull/2338)).
- **Bug Fixes:** Fixed content copy bug ([PR #2335](https://github.com/netease-youdao/LobsterAI/pull/2335)); restored IM session loading state in cowork ([PR #2334](https://github.com/netease-youdao/LobsterAI/pull/2334)); fixed model-not-allowed bug (reverted) ([PR #2340](https://github.com/netease-youdao/LobsterAI/pull/2340)); aligned update card header content ([PR #2339](https://github.com/netease-youdao/LobsterAI/pull/2339)).
- **Stale Bug:** Fixed the multi-file selection bug in sessions ([PR #1372](https://github.com/netease-youdao/LobsterAI/pull/1372)).

### 4. Community Hot Topics
- **New Complaint on Ads:** Issue [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342) ("左下角广告可以彻底关闭吗") is the **only open issue** today, with 1 comment. The user reports that a persistent ad appeared in version 2026.7.15 and asks for a permanent disable option. This is the **most active topic** given it is the sole new user concern.
- **No other issues or PRs** attracted significant discussion or reactions in the last 24 hours.
- **Underlying need:** Users want a **clean, ad-free workspace** and expect persistent UI elements to be configurable.

### 5. Bugs & Stability
| Severity | Issue / PR | Description | Fix Status |
|----------|------------|-------------|------------|
| **Medium** | [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342) | Persistent bottom-left advertisement in v2026.7.15 with no settings toggle to disable it. | **No fix PR yet.** User suggests a one-time close should be permanent. |
| **Low** | [#1384](https://github.com/netease-youdao/LobsterAI/issues/1384) (closed stale) | File upload in sessions: multiple files selected but only the last file appears. | **Fixed** in [PR #1372](https://github.com/netease-youdao/LobsterAI/pull/1372). |
| **Low** | [#1385](https://github.com/netease-youdao/LobsterAI/issues/1385) (closed stale) | WeChat robot: deleting a session on desktop does not clear history on mobile. | Closed as stale; no fix verified in this batch. |
| **Low** | [#1383](https://github.com/netease-youdao/LobsterAI/issues/1383) (closed stale) | Duplicate identical text messages from WeChat only synced once to desktop. | Closed as stale. |
| **Low** | [#1381](https://github.com/netease-youdao/LobsterAI/issues/1381) (closed stale) | Cron tasks open a new session every run instead of reusing the same session. | Closed as stale. |
| **Low** | [#1382](https://github.com/netease-youdao/LobsterAI/issues/1382) (closed stale) | Export logs use red color (typically indicates failure) – confusing UX. | Closed as stale. |

### 6. Feature Requests & Roadmap Signals
- **Persistent ad toggle (likely incoming):** The complaint about ads in v2026.7.15 ([#2342](https://github.com/netease-youdao/LobsterAI/issues/2342)) is the only open issue. Given the maintainers' history of responding to UX feedback, this is likely to be addressed in the **next patch release** by adding a "Don't show again" option or a warning label before displaying such ads.
- **Cron-in-same-session (backlogged):** Request [#1381](https://github.com/netease-youdao/LobsterAI/issues/1381) for cron results to appear in a single session rather than spawning new ones. This was closed as stale but could reappear as a feature request if enough users upvote it.

### 7. User Feedback Summary
- **Satisfaction:** Positive. The team fixed a long-standing multi-file upload bug ([PR #1372](https://github.com/netease-youdao/LobsterAI/pull/1372)) and improved the update UI and settings.
- **Dissatisfaction:**
  - **Ads:** One user reports a new, unwanted ad in the UI, calling it "intrusive" and asking for a permanent off switch.
  - **WeChat robot inconsistencies:** Multiple stale issues (syncing, history clearing) suggest ongoing friction for WeChat power users.
  - **Redundant sessions:** Cron tasks continue to produce visual clutter.

### 8. Backlog Watch
- **Open Dependabot PRs (5 items):** PRs [#2167](https://github.com/netease-youdao/LobsterAI/pull/2167), [#2166](https://github.com/netease-youdao/LobsterAI/pull/2166), [#2165](https://github.com/netease-youdao/LobsterAI/pull/2165), [#2164](https://github.com/netease-youdao/LobsterAI/pull/2164), and [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) have been open for **1 month+**. These bump GitHub Actions (stale, checkout, paths-filter, trufflehog) and Electron/Electron-builder. Merging these is important for CI health and security.
- **Open PR #1322 (LRU cache fix):** This fix for the cowork LLM memory judge cache ([PR #1322](https://github.com/netease-youdao/LobsterAI/pull/1322)) has been open since April 2, 2026 (over 3 months). While marked as stale, it addresses a real eviction bug that could affect multi-turn conversation quality. **Maintainer attention recommended.**

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw Project Digest — 2026-07-16

## 1. Today's Overview
TinyClaw had a quiet 24-hour period with no new issues, releases, or merged pull requests. The only activity was a single open pull request (#295) focused on fixing a print logic bug in the CLI's team management feature. The project appears to be in a low-activity state, with no incoming bug reports or feature discussions from the community. This may indicate a stabilization phase or a temporary lull in development momentum.

## 2. Releases
No new releases were published in the last 24 hours. The project has no recent version history to report.

## 3. Project Progress
No pull requests were merged or closed today. The only open PR is:
- **#295 [OPEN] fix(cli): print the "New leader" note after removing a team leader** — Author: Osamaali313, Updated: 2026-07-15  
  Fixes a logic bug where the CLI incorrectly prints the "New leader" note after removing a team leader. The condition for printing the note always evaluated to false because `leader_agent` was set to `newLeader` before the comparison.  
  [GitHub PR #295](https://github.com/TinyAGI/tinyagi/pull/295)

## 4. Community Hot Topics
There were no active community discussions in the last 24 hours. The sole open PR (#295) has zero comments and reactions, suggesting minimal community engagement at this time.

## 5. Bugs & Stability
No new bugs, crashes, or regressions were reported today. The only code change in flight (PR #295) addresses a pre-existing logic error in the CLI's team removal workflow. This bug is low severity, as it only affects the console output message rather than core functionality.

## 6. Feature Requests & Roadmap Signals
No feature requests were submitted in the last 24 hours. The project shows no immediate roadmap signals from the community.

## 7. User Feedback Summary
No user feedback, pain points, or use-case discussions were recorded today. This lack of feedback could indicate either user satisfaction or low active usage.

## 8. Backlog Watch
There are no unanswered important issues or pull requests requiring maintainer attention. The project's backlog appears clean and current.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-16

## Today's Overview
Project activity is **moderate-to-high**, with 6 pull requests merged in the last 24 hours and only 1 open issue receiving a recent update. All merged PRs were closed on July 15, indicating a focused day of feature completions and bug fixes. No new releases were published today. The single open issue (#574) remains open since April, suggesting some feature requests may be awaiting prioritization. Overall, the project shows steady, healthy development momentum with a good balance of provider expansions, infrastructure fixes, and dependency maintenance.

## Releases
No new releases published today. The latest available version remains unchanged. Users should check for release notes on the [GitHub Releases page](https://github.com/moltis-org/moltis/releases).

## Project Progress
Six pull requests were merged/closed today:

- **[#1151 – MiniMax M3 model support](https://github.com/moltis-org/moltis/pull/1151)** – Added MiniMax M3 to the static model registry while retaining MiniMax M2.7. Includes context-window and image-input capability metadata, plus endpoint documentation for global and China regions.
- **[#1152 – OpenAI Codex token expiry fix](https://github.com/moltis-org/moltis/pull/1152)** – Critical fix for a bug causing session failures after ~10 days. Derives token expiry from JWT `exp` claim instead of relying on a null `expires_at` field, eliminating the need for manual re-login.
- **[#1150 – Context windows from capabilities](https://github.com/moltis-org/moltis/pull/1150)** – Centralized context-window fallback mappings, added parsing of GitHub Copilot live model metadata, and wired Copilot/Codex dynamic providers to construct from resolved capabilities.
- **[#1149 – Auto-detect ACP agents](https://github.com/moltis-org/moltis/pull/1149)** – Added 13 named ACP external-agent kinds (Copilot, Codex, Claude, Pi, opencode, Gemini, Augment, Kiro, OpenClaw, OpenHands, Kimi, Stakpak, fast-agent) with documented stdio commands or adapter binaries. Includes Claude ACP detection via separate binary.
- **[#1153 – Systemd-less service support](https://github.com/moltis-org/moltis/pull/1153)** – Adds a Linux service fallback for containers lacking systemd. Manages a user-owned supervisor script for install, status, stop, restart, and uninstall operations.
- **[#1148 – Dependency bumps](https://github.com/moltis-org/moltis/pull/1148)** – Routine npm_and_yarn dependency updates across `crates/web/ui` and `docs` directories (esbuild, vite, and 2 other packages).

## Community Hot Topics
- **Issue #574 – [Model Routing Per Topic](https://github.com/moltis-org/moltis/issues/574)** – This enhancement request, opened on 2026-04-06 and updated yesterday, has 1 comment and 1 👍 reaction. The user proposes routing queries to different models based on topic (e.g., code review → specialized model, creative writing → different model). The 3-month gap since creation suggests the community is interested but the feature may not yet be on the roadmap. The single reaction indicates moderate but not urgent demand.

## Bugs & Stability
One high-severity bug was fixed today:
- **Token expiry dead-end in `openai-codex` provider** (PR #1152): Sessions would fail after ~10 days with no recovery except manual re-login because `expires_at` was stored as `null`. The fix derives expiry from the JWT `exp` claim. **Severity: High** – affects all openai-codex users with sessions longer than ~10 days. Fix already merged.

No other bugs, crashes, or regressions were reported in the last 24 hours.

## Feature Requests & Roadmap Signals
- **Model routing per topic (Issue #574)** – The only open feature request. While not yet addressed, the recent PR work on context windows (#1150) and model registry expansion (#1151) suggests the team is actively enhancing model management infrastructure, which could eventually accommodate topic-based routing.
- **Prediction for next version:** The combination of MiniMax M3 support, robust ACP agent auto-detection, and token expiry fixes are strong candidates for the next release. The container systemd fallback (#1153) also indicates growing attention to edge deployment scenarios.

## User Feedback Summary
- **Pain point (addressed):** Users of `openai-codex` provider experienced session timeouts every ~10 days requiring manual re-login. This has been fixed via JWT-derived expiry.
- **Pain point (unaddressed):** The open issue #574 signals a desire for intelligent model selection by content topic.
- **Use case expansion:** The ACP auto-detection feature (#1149) suggests users want seamless integration with a wide range of external agent tools (Claude, Gemini, opencode, etc.), indicating demand for Moltis as a central hub for diverse AI agents.
- **Satisfaction indicator:** No negative user feedback in today's data; the 6 merged PRs suggest active maintenance that likely satisfies most users.

## Backlog Watch
- **Issue #574 – [Model Routing Per Topic](https://github.com/moltis-org/moltis/issues/574)** – Open since April 6, 2026 (over 3 months). Only 1 👍 and 1 comment. While not heavily upvoted, it addresses a thoughtful use case. If the team is prioritizing model capabilities (as seen in #1150 and #1151), this feature could see attention in future sprints. **Maintainer attention:** Low urgency, but worth acknowledging in roadmap discussions.

No other long-unanswered issues or PRs requiring maintainer attention were identified in today's data.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Based on the GitHub data for **CoPaw (2026-07-16)** and its successor branding as **QwenPaw**, here is the structured project digest.

---

## CoPaw / QwenPaw Project Digest — 2026-07-16

### 1. Today's Overview
The QwenPaw project is experiencing a **high-velocity maintenance cycle**, with 50 issues and 43 PRs updated in the last 24 hours. Community activity is intense, driven largely by the fallout from the **v2.0.0 release**, particularly concerning memory management, agent collaboration, and desktop UX. While no new releases were cut today, the PR pipeline is very healthy, with 22 merged/closed items and 21 open PRs under review. The project shows strong signs of a "stabilization sprint" following a major feature release, with maintainers rapidly addressing regression bugs and user feedback.

### 2. Releases
- **New Releases:** None
- **Note:** The latest available version is **v2.0.0.post2** (referenced in multiple issue reports). Users are actively reporting regressions and pain points related to this upgrade.

### 3. Project Progress
Several significant fixes and features were merged or advanced today, indicating strong momentum:
- **Context & Memory Fixes:**
    - **PR #6123** (OPEN): Introduces hardened context limits and recoverable tool-result compaction to address severe amnesia issues (linked to Issue #6148).
    - **PR #6153** (OPEN): Enhances the ReMe memory indexing safeguards, adding a 10 MiB file limit and fixing dimension parameter passing for embedding models.
- **UI/UX Improvements:**
    - **PR #6139** (OPEN): Fixes missing spaces and line feeds in reasoning/thinking blocks (Fixes Issue #6129).
    - **PR #6142** (MERGED): Allows users to set the auto-memory interval to `0` to disable automatic memory entirely (Fixes Issue #6132).
- **Platform & Stability:**
    - **PR #6140** (MERGED): Adds `errors='replace'` for GBK compatibility in Windows command execution.
    - **PR #6039** (MERGED): Fixes critical MCP migration bug where `${VAR}` environment variables were not being resolved properly, breaking tool authentication.
- **New Feature (Experimental):**
    - **PR #6157** (OPEN): Introduces an official Chrome extension plugin, enabling QwenPaw to interface directly with the user's browser via Native Messaging.

### 4. Community Hot Topics
- **Memory Loss Post-v2.0 Upgrade (Issue #6148):**
    - *Link:* [#6148](https://github.com/agentscope-ai/QwenPaw/issues/6148)
    - *Analysis:* Users are reporting severe "amnesia" where the agent forgets earlier parts of a conversation. This is the most critical active discussion, with a related fix PR (#6123) already open.
- **Agent Collaboration Difficulties (Issue #6136):**
    - *Link:* [#6136](https://github.com/agentscope-ai/QwenPaw/issues/6136)
    - *Analysis:* A user explicitly requests help making "leader" agents reliably delegate to other agents without explicit commands. This highlights a core UX gap in multi-agent workflows.
- **Desktop Workflow Friction (Issue #6083):**
    - *Link:* [#6083](https://github.com/agentscope-ai/QwenPaw/issues/6083)
    - *Analysis:* Users want a "one-click" button to access workspace output files (CSVs, images) from within the Tauri Desktop app, indicating a desire for a more integrated productivity experience.
- **Silent Message Dropping (Issue #5995):**
    - *Link:* [#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995)
    - *Analysis:* A significant reliability concern where messages sent while an agent is busy are silently dropped. This is a high-impact bug for production or business-critical use.

### 5. Bugs & Stability
- **Critical: Severe Memory Loss / Context Truncation (#6148):**
    - *Severity:* **Critical**. Users confirm the `/compact` command seems to just truncate, not compress, leading to a complete loss of conversation history. Fix PR (#6123) is in review.
- **High: System Resource Exhaustion / Memory Leak (#6124):**
    - *Severity:* **High**. A user reports that an editable install causes ReMe background loops to consume 48GB+ of RAM and never complete the startup process. PR #6153 aims to fix this by adding indexing safeguards.
- **High: Loading Animation Stuck (#5790):**
    - *Severity:* **High**. A persistent frontend bug where the loading spinner never disappears after an agent response. This blocks further interaction for the user. No fix PR is explicitly linked yet.
- **High: Session Stuck After Error (MODEL_EXECUTION_ERROR) (#6141):**
    - *Severity:* **High**. After an error and manual termination, the session becomes permanently stuck with a "tool role" mismatch error, rendering the entire conversation unusable.
- **High: MCP `$VAR` Resolution Failure (#6029):**
    - *Severity:* **High** (Fixed). This bug silently broke tool authentication for many users after v2.0 migration. Resolved by PR #6039.

### 6. Feature Requests & Roadmap Signals
- **Domestic OS Support (Issue #6125):**
    - *Link:* [#6125](https://github.com/agentscope-ai/QwenPaw/issues/6125)
    - *Prediction:* A user requests support for China's KylinOS. Given the project's strong Chinese community base and the increase in national OS adoption, a native Linux package (beyond source builds) is a likely future roadmap item.
- **Preset Agent Templates (Issue #4259):**
    - *Link:* [#4259](https://github.com/agentscope-ai/QwenPaw/issues/4259)
    - *Prediction:* This highly-commented request for "one-click" agent roles (like "Writer," "Coder") to lower the barrier for non-technical users is a strong candidate for a future minor release (v2.1.x).
- **Per-Session Model Overrides (PR #5992):**
    - *Link:* [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992)
    - *Prediction:* This PR is nearly ready for merge. It allows a single agent to use different models for different conversations. This is a high-value feature that will likely land in the next patch release.

### 7. User Feedback Summary
- **Pain Points:**
    - **"Amnesia" is the #1 complaint.** Upgrading to v2.0 has caused a clear regression in memory reliability, eroding user trust in long-running conversations.
    - **Multi-agent orchestration is clunky.** Users find the default behavior of "leader" agents (not delegating unless explicitly told) unintuitive and difficult to configure.
    - **Configuration & onboarding are complex.** New users struggle with blank-slate agent creation and obscure configuration settings.
- **Use Cases:**
    - **Technical Coding & Analysis:** Users rely heavily on shell commands, MCP tools (e.g., Tavily, Wind), and file generation (reports, scripts).
    - **Business Workflow Automation:** Users are integrating QwenPaw with platforms like Feishu (Lark) and expecting robust message queuing and session persistence.
- **Satisfaction:**
    - Users are highly engaged and invested in the project, offering detailed bug reports and feature suggestions. There is clear enthusiasm for the v2.0 architecture but frustration with its immediate stability.

### 8. Backlog Watch
- **Issue #2912: LSP & Fallback Models (CLOSED):**
    - *Link:* [#2912](https://github.com/agentscope-ai/QwenPaw/issues/2912)
    - *Status:* This feature request for robust LSP support and fallback models was closed but has been upvoted (👍: 0) and referenced by the community. It represents a significant feature gap for developer-focussed users.
- **Issue #2909: Debugging Long-Running Agent Tasks (CLOSED):**
    - *Link:* [#2909](https://github.com/agentscope-ai/QwenPaw/issues/2909)
    - *Status:* This question from a heavy user about how to debug cancelled agent-to-agent tasks was closed but never fully addressed by the maintainers. It highlights a missing tool for developers who rely on automated delegation.
- **PR #5862: Inbox System Pop (OPEN):**
    - *Link:* [#5862](https://github.com/agentscope-ai/QwenPaw/pull/5862)
    - *Status:* An open PR from a week ago with no comments from maintainers. This feature (system pop/inbox notifications) could significantly improve asynchronous workflows but appears to be stalled in review.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the ZeroClaw project digest for **2026-07-16**, generated from the provided GitHub activity data.

---

## ZeroClaw Project Digest — 2026-07-16

### 1. Today's Overview
ZeroClaw is in a period of high activity focused on stabilization, performance, and hardening the user experience. Over the last 24 hours, **22 issues** were updated (21 open, 1 closed) and **50 pull requests** were updated (49 open, 1 merged/closed), indicating a significant influx of code and discussion. The project is currently addressing several S1 (workflow-blocked) bugs spanning memory, hardware, and the new TUI, while simultaneously advancing roadmap features like telemetry, a secure relay node, and structured security auditing. The backlog shows strong community involvement, though multiple high-priority PRs remain stalled awaiting author action.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Project Progress
Only **one PR** was merged or closed today:
- **[#9082 (CLOSED)] Suggestion: monetize this MCP server with x402 micropayments** — This was likely a spam or sales pitch issue that was quickly closed.

The majority of PRs remain open, suggesting a review bottleneck. However, several critical fix PRs have been submitted but are awaiting author action (see Backlog Watch).

### 4. Community Hot Topics
The most active discussions highlight deep integration and tooling issues:

- **[#5600] [Bug] Use kimi-code provider in streaming chat call tools** (12 comments, 👍1)
  - **URL:** [Issue #5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)
  - **Analysis:** A persistent P1 bug where the Kimi provider throws a 400 error in streaming chat, specifically citing a missing `reasoning_content` field. This is a critical integration issue for a specific provider.
- **[#6641] [Feature] Turn-level OTel trace correlation** (6 comments)
  - **URL:** [Issue #6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641)
  - **Analysis:** A request for fine-grained OpenTelemetry tracing, nesting LLM/tool calls under a single turn. This indicates a community need for better debugging and observability in production deployments.
- **[#9048] RFC: Separate conversation history from agent-curated long-term memory** (4 comments)
  - **URL:** [Issue #9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)
  - **Analysis:** A significant RFC (Request for Comments) proposing a cleaner separation between session history and persistent memory. The author notes the current implementation mixes these concepts, causing confusion, which is a fundamental architectural concern.

### 5. Bugs & Stability
Three new S1 (workflow-blocked) bugs were reported today, alongside several S2 (degraded behavior) issues. Fix PRs exist for some older S1 bugs.

**New S1 Bugs (Highest Severity):**
- **[#9085] Bug: nested runtime panic in `try_enable_pgvector` at startup**
  - **URL:** [Issue #9085](https://github.com/zeroclaw-labs/zeroclaw/issues/9085)
  - **Analysis:** A crash when enabling the `pgvector` extension on Postgres memory backends. This blocks users who rely on vector search.
- **[#9095] Bug(ci): `act-local` artifact server rejects upload-artifact v7 mime_type**
  - **URL:** [Issue #9095](https://github.com/zeroclaw-labs/zeroclaw/issues/9095)
  - **Analysis:** Blocks local CI testing (`act-local.sh`), preventing developers from validating builds before pushing.

**Ongoing S1 Bugs with Fix PRs:**
- **[#8559] Bug: Agents stop work when exiting the web dashboard chat window**
  - **URL:** [Issue #8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559)
  - **Analysis:** Agent loops are terminated when users navigate away from the chat, hindering background tasks. No linked fix PR.
- **[#8560] Bug: `browser_open` and other tools hang agent turn on failure**
  - **URL:** [Issue #8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560)
  - **Analysis:** Subprocess waits for tools (e.g., browser, TTS, ffmpeg) are unbounded, causing indefinite hangs.
- **[#8794] Bug: Stopping agent in web UI erases tool calls/thinking from context**
  - **URL:** [Issue #8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794)
  - **Analysis:** A related UX bug where manual intervention destroys the agent's working memory.

**New S2 Bugs (Degraded Behavior):**
- **[#9092] Bug: ZeroCode keystrokes lag due to full history rendering**
  - **URL:** [Issue #9092](https://github.com/zeroclaw-labs/zeroclaw/issues/9092)
  - **Analysis:** Performance regression in the new TUI.
- **[#9078] Bug: Serial transport desynchronized after non-matching response ID**
  - **URL:** [Issue #9078](https://github.com/zeroclaw-labs/zeroclaw/issues/9078)
  - **Analysis:** Hardware communication protocol flaw where a mismatch leaves the serial port in an unrecoverable state.
- **[#9089] Bug: Tool output supports `[IMAGE:]` but not `[AUDIO:]` markers**
  - **URL:** [Issue #9089](https://github.com/zeroclaw-labs/zeroclaw/issues/9089)
  - **Analysis:** Incomplete multimodal support for audio output from tools.

### 6. Feature Requests & Roadmap Signals
Several features point to the next version (likely v0.8.4, tracked in Issue #8357):

- **Security & Infrastructure:**
  - **[#8358] Tracker: zerorelay milestone — stand up secure relay node** — A high-priority feature for reaching agents behind NAT/CGNAT. Likely for v0.8.4.
  - **[#9086] RFC: Structured Security Audit Pipeline** — A comprehensive proposal for tamper-evident logging and anomaly detection, suggesting a security-focused release is on the horizon.
  - **[#7131] Publish daemon RPC surface as OpenRPC spec** — Indicates increasing emphasis on tooling and external integration.
- **Media & Providers:**
  - **[#8563] Feature: Comfy Cloud as shared media provider** — Expanding media generation capabilities, likely with a future `gen_video` tool.
  - **[#8046] Feature: Optional Telegram webhook mode** — A practical upgrade for enterprise Telegram bots.
- **User Experience (ZeroCode TUI):**
  - **[#9093] Feature: Show ZeroCode version in TUI top bar** — A small but high-visibility quality-of-life improvement.
  - **[#9047] Feature: Clarify Code session history vs. persistent memory** — A user-facing documentation/UI issue to reduce confusion between parallel interaction modes.

### 7. User Feedback Summary
- **Pain Points:** The most significant user dissatisfaction revolves around **stability and unrecoverable errors**. The `pgvector` panic (S1), `browser_open` hangs (S1), and the serial port desync (S2) represent critical paths that block or degrade the user's workflow. The web dashboard's behavior of erasing agent context when the user interacts (Issue #8794) is another major source of friction.
- **Feature Desires:** Users are pushing for **better observability** (OTel tracing, OpenRPC specs) and **enterprise-grade security** (audit pipeline, relay node). The discussion around separating history from memory (Issue #9048) shows advanced users are bumping into the seams of the architecture.
- **Expectations:** The influx of S1 bugs suggests that the community expects a high degree of reliability for the "always-on" agent use case, and frustrations are high when bugs prevent this.

### 8. Backlog Watch
Several high-risk, high-impact PRs are stalled, requiring author attention.

- **[#8571] fix(delegate): skip global credential fallback for OAuth target providers**
  - **Risk:** High | **Stalled:** 14 days (since 2026-07-01)
  - **URL:** [PR #8571](https://github.com/zeroclaw-labs/zeroclaw/pull/8571)
  - **Why it matters:** Fixes a data security bug where the wrong API key could be sent to a provider.
- **[#8808] fix(anthropic): use configurable timeout instead of hardcoded 120 seconds**
  - **Risk:** Medium | **Stalled:** 9 days (since 2026-07-07)
  - **URL:** [PR #8808](https://github.com/zeroclaw-labs/zeroclaw/pull/8808)
  - **Why it matters:** Long-running Anthropic requests are broken.
- **[#8866] fix(daemon): share MCP registry across heartbeat ticks (#5903)**
  - **Risk:** High | **Stalled:** 8 days (since 2026-07-08)
  - **URL:** [PR #8866](https://github.com/zeroclaw-labs/zeroclaw/pull/8866)
  - **Why it matters:** Prevents thundering-herd issues with MCP server connections on each heartbeat tick.
- **[#6622] fix(channels/whatsapp): resolve LID→phone for allowlist (#6350)**
  - **Risk:** High | **Stalled:** 64 days! (since 2026-05-13)
  - **URL:** [PR #6622](https://github.com/zeroclaw-labs/zeroclaw/pull/6622)
  - **Why it matters:** WhatsApp inbound messages from LID-based contacts are silently dropped on cold start—a critical communication channel failure that has been open for over two months.
- **[#8948] fix(tools): reap exited stdio MCP server processes (#8731)**
  - **Risk:** High | **Stalled:** 6 days (since 2026-07-10)
  - **URL:** [PR #8948](https://github.com/zeroclaw-labs/zeroclaw/pull/8948)
  - **Why it matters:** Zombie MCP processes can exhaust system PIDs and memory on the host.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kky-wollu/agents-radar).*