# OpenClaw Ecosystem Digest 2026-07-15

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-14 23:00 UTC

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

Here is the **OpenClaw Project Digest** for **2026-07-15**.

---

## OpenClaw Project Digest – July 15, 2026

### 1. Today's Overview
The project is experiencing **extreme activity**, with **500 issues** and **500 PRs** updated in the last 24 hours. However, this activity is heavily weighted toward triage and stabilization following a problematic release. Despite zero new releases today, the community is reporting **fatal startup crash-loops** related to the `2026.7.1` release (specifically the legacy memory migration gateway). While the maintainers have been highly responsive—merging or closing 157 PRs and closing 177 issues today—the high volume of `P0` and `P1` regression bugs indicates a **stressful period** for the project's reliability pipeline. The focus is clearly on resolving critical state corruption and migration bugs rather than new feature development.

### 2. Releases
- **No new releases today.** (The last version is `2026.7.1`).

### 3. Project Progress (Merged/Closed PRs & Issues)
157 pull requests were merged or closed today. Key fixes and improvements that advanced the codebase include:
- **Migration Stability**: A critical fix for the `Memory Core` migration crash-loop was likely resolved (see #107133, closed today).
- **Plugin Registry Safety**: PR [#107541](https://openclaw/openclaw/pull/107541) addresses a bug where nested registry state was left partially applied on failed plugin rollback.
- **CLI & Diagnostics**: PR [#107285](https://openclaw/openclaw/pull/107285) fixes a critical issue where `doctor --fix` removed necessary `codex` plugin entries from the allowlist.
- **Terminal/Delegation**: PR [#107688](https://openclaw/openclaw/pull/107688) fixes native terminal sessions failing due to missing PATH environment variables in the Gateway daemon.
- **UI/UX**: PR [#107592](https://openclaw/openclaw/pull/107592) fixes scrolling in Firefox for the sidebar and markdown preview dialogs.

### 4. Community Hot Topics
The most active discussions highlight severe instability and unmet feature needs:

- **Permanent Gateway Crash-Loops**: Issues [#107227](https://openclaw/openclaw/issue/107227) and [#107220](https://openclaw/openclaw/issue/107220) describe the `2026.7.1` upgrade as a "fatal" experience. Users are trapped in crash-loops because the `openclaw doctor` repair path fails to resolve legacy memory conflicts. This is the highest priority pain point.
- **DeepSeek Caching Regression**: Issue [#94518](https://openclaw/openclaw/issue/94518) (8 comments, 10 👍) remains a hot topic. Users are frustrated that the "boundary-aware cache" feature in 6.x broke their prompt caching, increasing token costs significantly. PR [#95311](https://openclaw/openclaw/pull/95311) offers a potential fix via a compatibility option.
- **WhatsApp Image Blocking**: Issue [#96834](https://openclaw/openclaw/issue/96834) (8 comments) details a user-facing bug where sending an image on WhatsApp delays processing by 3+ minutes, effectively breaking multimodal functionality on the most popular mobile channel.
- **Linux/Windows Desktop Request**: The oldest and most popular open request, [#75](https://openclaw/openclaw/issue/issue/75) (113 comments, 81 👍), continues to gather support for native desktop apps on non-Apple platforms.

### 5. Bugs & Stability
Today saw a significant number of **P0 (Release-Blocker)** and **P1 (Critical)** bugs, primarily stemming from the `2026.7.1` release:

- **P0 – Fatal Gateway Crash-Loop**:
    - [#107227](https://openclaw/openclaw/issue/107227) & [#107220](https://openclaw/openclaw/issue/107220): Legacy memory migration conflicts cause a permanent crash-loop on upgrade. **Fix PRs:** Not yet linked, closed issues suggest the dev team is bisecting the problem.
    - [#107133](https://openclaw/openclaw/issue/107133) (closed): `Embedding_cache` conflict permanently blocks startup. **Status:** Closed (possibly workaround/fix found).
- **P1 – Severe Regressions**:
    - [#107449](https://openclaw/openclaw/issue/107449): The `cron` tool's JSON schema is incompatible with `llama.cpp`'s parser, breaking local inference workflows.
    - [#107330](https://openclaw/openclaw/issue/107330) (closed): `openclaw update` command crashes on Windows 11.
    - [#87744](https://openclaw/openclaw/issue/87744): Codex-powered Telegram turns timeout and fail to deliver responses (regression in 2026.5.27).
    - [#101290](https://openclaw/openclaw/issue/101290): CLI preflight checks can corrupt the database file while a gateway is running, leading to "malformed database" errors.
- **P2 Stability Issues**:
    - [#102020](https://openclaw/openclaw/issue/102020): A cross-channel bug where the second message in any session fails with "initialization conflicted".
    - [#90944](https://openclaw/openclaw/issue/90944): `sessions_yield` delivers the wrong reply (the child’s summary) instead of the parent’s expected response.

### 6. Feature Requests & Roadmap Signals
Despite the current stability crisis, several high-value features remain in the backlog and are likely to be targeted for the `2026.8.x` or `2026.9.x` releases:

- **Cross-Platform Desktop Apps**: [#75](https://openclaw/openclaw/issue/75) (Linux/Windows Clawdbot) is the #1 most requested feature.
- **Security Hardening**: Several "Diamond Lobster" rated features focus on security, suggesting a roadmap push:
    - **Masked Secrets**: [#10659](https://openclaw/openclaw/issue/10659) (14 comments, 4 👍) to prevent agents from reading raw API keys.
    - **Memory Trust Tagging**: [#7707](https://openclaw/openclaw/issue/7707) (18 comments) to prevent memory poisoning.
    - **Exec Denylist**: [#6615](https://openclaw/openclaw/issue/6615) (9 comments, 7 👍) for "allow all except X" rules.
- **Architecture Refinement**:
    - **Multi-Session RFC**: [#48874](https://openclaw/openclaw/issue/48874) (8 comments) proposes a shared LLM layer with isolated sessions to save resources.
    - **Centralized Encoding**: [#48788](https://openclaw/openclaw/issue/48788) (19 comments) is a major architectural need to fix filename handling for non-Western languages.

### 7. User Feedback Summary
- **High Frustration with Upgrade Process**: Users are expressing strong dissatisfaction with the `2026.7.1` upgrade, which is being described as "fatal" and "crash-looping" with no documented recovery path. The trust in point-release upgrades is currently low.
- **Wealth of Feature Ideas**: The community is highly engaged in proposing new features (TTS streaming, Google Chat OAuth, MAX Turns limits), indicating a user base that is investing heavily in customizing the platform.
- **Demand for Stability on Local Inference**: The `llama.cpp` parser incompatibility ([#107449](https://openclaw/openclaw/issue/107449)) and system prompt bloat on smaller models ([#92451](https://openclaw/openclaw/issue/92451), closed) show that a significant portion of the community relies on self-hosted models and is sensitive to performance regressions.

### 8. Backlog Watch
The following high-severity issues remain open and require critical maintainer or product decisions:

- **P0 Startup Crash-Loops:**
    - [#107227](https://openclaw/openclaw/issue/107227) – Fatal migration gate, `doctor` path fails.
    - [#107220](https://openclaw/openclaw/issue/107220) – Legacy memory sidecar conflicts are fatal.
- **P1 Users Unable to Use Release:**
    - [#107330](https://openclaw/openclaw/issue/107330) – Windows crash on `update`.
    - [#107449](https://openclaw/openclaw/issue/107449) – `llama.cpp` integration broken by schema change.
- **Long-Standing High-Impact P1 Bugs (needs decision/review):**
    - [#77012](https://openclaw/openclaw/issue/77012) – WebChat transcript overwritten every turn (reported over 2 months ago). **Status:** `Needs maintainer review`.
    - [#96133](https://openclaw/openclaw/issue/96133) – iOS/WebChat messages fail to trigger replies. **Status:** `Needs maintainer review`.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report, generated from the provided community digest summaries.

---

### Cross-Project Ecosystem Comparison Report

**Date:** 2026-07-16 (Data aggregated from 2026-07-15)
**Scope:** Personal AI Assistant & Agent Open-Source Ecosystem

#### 1. Ecosystem Overview

The personal AI agent open-source ecosystem is currently characterized by a bifurcated state of high velocity and significant stabilization pressure. While projects like OpenClaw, IronClaw, and CoPaw are navigating major post-release crash and regression crises, others like NanoBot and Moltis are demonstrating steady, feature-driven progress. A clear ecosystem-wide theme is the push toward multi-channel ubiquity, with projects aggressively adding support for platforms like Dial, DingTalk, and Feishu. Simultaneously, the community is demanding architectural maturity, specifically around memory persistence, standardized plugin systems, and robust, auditable agent workflows (SOPs). The landscape is highly competitive, with each project carving out a niche either by target user (enterprise vs. tinkerer), platform focus (cloud vs. local-first), or architectural philosophy (monolithic vs. modular).

#### 2. Activity Comparison

| Project | Issues (Updated 24h) | PRs (Updated 24h) | New Release? | Health Score | Key Sentiment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | No | **CRITICAL** | High frustration; major crash-loop regressions. |
| **NanoBot** | 13 | 65 | No | **GOOD** | Stable, steady feature integration & bug fixes. |
| **Hermes Agent** | 50 | 49 | No | **FAIR** | High cleanup activity; resolved major bugs. |
| **PicoClaw** | 3 | 9 | No | **GOOD** | Healthy maintenance & targeted fixes. |
| **NanoClaw** | 0 | 28 | No | **GOOD** | Rapid fix pace; security hardening focus. |
| **NullClaw** | 0 | 0 | No | **SLEEPING** | No activity. |
| **IronClaw** | 99 | 99 | No | **FAIR** | Intense development; high stabilization pressure. |
| **LobsterAI** | 4 | 3 | No | **GOOD** | Stable; focused on agent loop stability. |
| **TinyClaw** | 0 | 0 | No | **SLEEPING** | No activity. |
| **Moltis** | 3 | 12 | **Yes** (v20260714.11) | **GOOD** | Positive; fast bug fixes for MCP & local models. |
| **CoPaw** | 50 | 50 | **Yes** (v2.0.0.post2) | **CRITICAL** | High frustration; day-one regressions in v2.0.0. |
| **ZeptoClaw** | 0 | 0 | No | **SLEEPING** | No activity. |
| **ZeroClaw** | 42 | 50 | No | **FAIR** | Productive burst; SOP engine completing. |

#### 3. OpenClaw's Position

OpenClaw remains the ecosystem’s most dominant reference project by raw community size and issue/PR volume, with an order of magnitude more activity than any peer. Its key advantages include a massive plugin registry, the most extensive multi-channel support, and the deepest CLI tooling. However, its technical approach—a monolithic `Gateway` daemon with complex legacy migration paths—is currently its greatest liability, leading to fatal crash-loops in release `2026.7.1`. In contrast, projects like **NanoBot** and **Moltis** favor leaner, more modular architectures that allow for faster stabilization cycles. **Hermes Agent** shares OpenClaw’s complexity but is demonstrating a more effective cleanup strategy by aggressively closing a large backlog. OpenClaw’s community size is unmatched, but its current instability is a significant competitive vulnerability, as users from its community are likely evaluating more stable alternatives.

#### 4. Shared Technical Focus Areas

The following requirements are emerging independently across multiple projects, indicating strong ecosystem-wide needs:

- **Memory & State Management:**
    - *Projects:* **OpenClaw** (migration crash-loop), **NanoBot** (unbounded session messages), **Hermes Agent** (context compression fabrications), **CoPaw** (memory search loops), **ZeroClaw** (new "Hindsight" backend).
    - *Need:* Reliable, bounded, and auditable long-term memory that doesn't corrupt or break on upgrades.

- **Multi-Channel & Platform Parity:**
    - *Projects:* **OpenClaw** (WhatsApp image blocking), **NanoClaw** (Dial channel addition), **PicoClaw** (Feishu media types), **Hermes Agent** (Feishu, Photon iMessage fixes), **CoPaw** (Zalo Bot plugin).
    - *Need:* Consistent, first-class support for a diverse and growing set of chat platforms (Telegram, WhatsApp, Slack, Feishu, DingTalk, Discord, Dial, iMessage).

- **Plugin/Extension System Standardization:**
    - *Projects:* **Hermes Agent** (Plugin Interface Expansion tracking issue), **OpenClaw** (Plugin Registry Safety), **IronClaw** (Unified Extension Model "Train A/B"), **PicoClaw** (vodozemac migration).
    - *Need:* A formal, documented, and secure lifecycle for plugins and extensions to enable community contributions and prevent state conflicts.

- **Local & Self-Hosted Model Support:**
    - *Projects:* **OpenClaw** (`llama.cpp` JSON schema incompatibility), **CoPaw** (Context compression corrupting DeepSeek APIs), **Moltis** (stringified scalars for Gemma 4), **ZeroClaw** (Local-First Mode request).
    - *Need:* Robust integration with locally-run models (Ollama, LM Studio, llama.cpp) that handles formatting quirks and optimizes for smaller context windows.

#### 5. Differentiation Analysis

| Feature Dimension | OpenClaw | NanoBot / PicoClaw | IronClaw | ZeroClaw |
| :--- | :--- | :--- | :--- | :--- |
| **Target User** | Power users & tinkerers | Developers & teams | Enterprise & automators | Privacy-conscious & ops teams |
| **Architecture** | Heavy, monolithic Gateway | Lightweight, modular | Service-oriented, with extension runtime | Tracker & SOP-driven daemon |
| **Key Strength** | Unmatched community & plugins | Rapid iteration & deployability | Formal workflow automation (SOPs) | Security & local-first philosophy |
| **Key Weakness** | Post-release instability | Smaller plugin ecosystem | High early-stage complexity | Smaller community, less "polish" |
| **Channel Focus** | Broad, with OSS integration | Practical, community-driven (WebUI, CLI) | Slack & enterprise-centric | Broad, but with CLI/daemon-first UX |

#### 6. Community Momentum & Maturity

- **Tier 1: Rapidly Iterating (High Activity, Good Health):**
    - **NanoBot** & **Moltis** are the standouts. They show a healthy balance of new features, targeted bug fixes, and active community contributions (including external authors). Their codebases are stable, and they are shipping value consistently.

- **Tier 2: Intense Stabilization (High Activity, Crisis Mode):**
    - **OpenClaw** and **CoPaw** are in "firefighting" mode after problematic major releases. While their communities are the largest, the sentiment is negative, and trust in point releases is eroding. The risk of user churn to more stable alternatives is high.
    - **IronClaw** is in a similar state but is a pre-release scenario ("bug bash"), which is a healthier, more intentional phase of stabilization before a launch.

- **Tier 3: Steady State (Moderate Activity, Healthy):**
    - **Hermes Agent**, **PicoClaw**, **NanoClaw**, and **LobsterAI** are moving solidly. They focus on targeted fixes, dependency management, and core feature completion. They are reliable choices for developers who need a stable agent platform.

- **Tier 4: Inactive / Sleeping:**
    - **NullClaw**, **TinyClaw**, and **ZeptoClaw** show no activity. Their viability as active open-source projects should be questioned.

#### 7. Trend Signals & Value for Developers

1.  **The Post-Release Reliability Wall:** The most critical industry trend is the severe cost of regressions in agent frameworks. OpenClaw's `2026.7.1` and CoPaw's `v2.0.0` highlight that a single flawed update can destroy user trust. For developers, this underscores the need to **lock versions, employ staging environments for agent upgrades, and participate in betas** for critical infrastructure.

2.  **The Rise of "Local-First" & Privacy:** The persistent demand for local model support and features like ZeroClaw's "Local-First Mode" (despite a smaller community) signals a growing market segment that values privacy and offline capability over cloud integration. Developers building for sensitive data environments should prioritize projects with robust local inference support (e.g., **Moltis, ZeroClaw**).

3.  **Agent Observability as a Core Feature:** The "system lies to me" feedback from IronClaw users is a widespread pain point. The demand for per-turn token usage (PicoClaw), detailed failure diagnostics (NanoBot), and audible error states points to a need for **deep observability**. The next generation of agent platforms will need integrated logging, tracing, and state inspection tooling (like OpenClaw's `doctor` command) to be production-ready.

4.  **The Standardization of Agent Workflows (SOPs):** IronClaw and ZeroClaw are pioneering the formalization of agent workflows into Standard Operating Procedures (SOPs). This moves agents from simple chatbots to structured automators with approval gates, cron triggers, and audit trails. For developers, this is the most significant architectural signal: the future is **declarative agent pipelines**, not just conversational loops.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-15

## Today's Overview

NanoBot is in a period of high activity, with 65 pull requests updated in the last 24 hours and 13 issues touched. The project resolved 10 issues and merged/closed 47 PRs, indicating strong forward momentum. Several `priority: p1` bug fixes landed today, particularly around heartbeat routing for unified sessions and channel restart delivery. Development velocity remains high across core infrastructure, WebUI features, and provider integrations, with no new releases published today. The project appears to be in an active development cycle between formal releases.

## Releases

No new releases were published today. The latest tagged version remains v0.1.4.post6.

## Project Progress

**47 merged/closed PRs today** demonstrate substantial progress across multiple areas:

**Critical Fixes Landed:**
- [#4931 fix(restart): deliver completion after channel reconnects](https://github.com/HKUDS/nanobot/pull/4931) — Fixes a race condition where restart completion notices were lost if channels hadn't finished reconnecting.
- [#4928 fix(heartbeat): route unified sessions to last channel](https://github.com/HKUDS/nanobot/pull/4928) — Addresses the `_pick_heartbeat_target_from_sessions` failure when `unifiedSession: true` (related to Issue #4924).
- [#4915 fix(heartbeat): make response evaluation more configurable](https://github.com/HKUDS/nanobot/pull/4915) — Regression fix for heartbeat migration to cron, adding configurable evaluation.

**WebUI Enhancements:**
- [#4933 feat(webui): highlight slash commands and app mentions](https://github.com/HKUDS/nanobot/pull/4933) — Visual treatment for recognized commands.
- [#4930 feat(webui): add copy action to user messages](https://github.com/HKUDS/nanobot/pull/4930) — Parity with assistant message copy functionality.
- [#4935 fix(webui): validate inferred file paths before preview](https://github.com/HKUDS/nanobot/pull/4935) — Prevents broken file previews by validating paths against workspace.

**Infrastructure & CI:**
- [#4936 test: speed up CI and harden the suite](https://github.com/HKUDS/nanobot/pull/4936) — Reduced CI matrix from full cross-product to representative configurations, made tests deterministic.
- [#4927 fix(webui): sync package-lock.json for qrcode dependency](https://github.com/HKUDS/nanobot/pull/4927) — Fixes Docker build failure.
- [#4631 test: add scripted agent runner harness](https://github.com/HKUDS/nanobot/pull/4631) — New testing infrastructure for agent runner tests.

**Cross-cutting polish:**
- [#4932 fix: standardize --config help text across CLI commands](https://github.com/HKUDS/nanobot/pull/4932) — Consistent help output.
- [#4929 chore(codex): identify failing request stage](https://github.com/HKUDS/nanobot/pull/4929) — Better diagnostics for Codex provider failures.

## Community Hot Topics

**Most active open issues:**
- [#4924 [bug] `_pick_heartbeat_target_from_sessions` fails with unifiedSession](https://github.com/HKUDS/nanobot/issues/4924) — 3 comments; a fix PR ([#4928](https://github.com/HKUDS/nanobot/pull/4928)) has already been merged today.
- [#4787 Resource leak: Session.messages list unbounded](https://github.com/HKUDS/nanobot/issues/4787) — 1 comment; concerns long-term memory growth for long-running sessions. No fix PR open yet.
- [#4934 [bug] Qwen models expose thinking/reasoning content](https://github.com/HKUDS/nanobot/issues/4934) — 0 comments (filed today); Qwen users seeing model reasoning exposed in chat responses.

**Most active PRs (by scope/complexity):**
- [#4689 feat(providers): surface OAuth status and expiry warnings](https://github.com/HKUDS/nanobot/pull/4689) — Large feature adding OAuth lifecycle visibility across CLI, WebUI, and runtime.
- [#4621 feat(memory): gate archive facts with provenance context](https://github.com/HKUDS/nanobot/pull/4621) — Sophisticated memory management improvement adding source-discipline rules.
- [#4908 refactor(channels): move setup and instance ownership to channels](https://github.com/HKUDS/nanobot/pull/4908) — Architecture decoupling following multi-instance Feishu support.

**Analysis:** The heartbeat/cron system is drawing significant attention. Multiple PRs and issues touch this subsystem, suggesting recent migrations introduced regressions that the team is actively stabilizing. The unified session feature (reducing session sprawl) creates ripple effects across the codebase that the community is discovering.

## Bugs & Stability

| Severity | Issue | Status | Notes |
|----------|-------|--------|-------|
| **High** | [#4934 Qwen models expose thinking content](https://github.com/HKUDS/nanobot/issues/4934) | Open, no fix | Exposes model internals to users; likely requires provider-level filtering |
| **High** | [#4787 Session.messages list unbounded](https://github.com/HKUDS/nanobot/issues/4787) | Open, no fix | Memory leak in long-running sessions; `FILE_MAX_MESSAGES` does not cap storage |
| **Medium** | [#4924 Heartbeat fails with unifiedSession](https://github.com/HKUDS/nanobot/issues/4924) | Fixed in [#4928](https://github.com/HKUDS/nanobot/pull/4928) | Quick turnaround from report to merged fix |
| **Medium** | [#4881 Windows ExecTool corrupts PowerShell UTF-16 output](https://github.com/HKUDS/nanobot/issues/4881) | Closed (fix merged) | UTF-8 decoding breaks PowerShell UTF-16LE output |
| **Medium** | [#4795 Streaming LLM calls bypass wall-clock timeout](https://github.com/HKUDS/nanobot/issues/4795) | Closed | Streaming requests could run indefinitely with no timeout |
| **Low** | [#2568 Telegram markdown rendering unreliable](https://github.com/HKUDS/nanobot/issues/2568) | Closed | Intermittent rendering failures since v1.4.post6 |
| **Low** | [#4637 Telegram long message split rendering](https://github.com/HKUDS/nanobot/issues/4637) | Closed | Split message trunks could not render correctly |

**Note:** The Qwen thinking content exposure (#4934) is potentially a high-impact issue for any user of Qwen models. No fix PR exists yet. The resource leak (#4787) could affect long-running production deployments.

## Feature Requests & Roadmap Signals

**Features with merged or active PRs (likely in next release):**
- **[#4937 One-click Deploy to Render](https://github.com/HKUDS/nanobot/pull/4937)** — New deployment option; could significantly lower barrier for new users.
- **[#4908 Channel architecture refactor](https://github.com/HKUDS/nanobot/pull/4908)** — Enables cleaner multi-instance support for channel integrations.
- **[#4446 DingTalk private chat gating](https://github.com/HKUDS/nanobot/pull/4446)** — Community-demanded DingTalk configuration options.
- **[#4549 Heartbeat model override](https://github.com/HKUDS/nanobot/pull/4549)** — Cost optimization for heartbeat checks.
- **[#4621 Memory provenance context](https://github.com/HKUDS/nanobot/pull/4621)** — Smarter archive decisions based on fact provenance.
- **[#4620 Heartbeat trigger command](https://github.com/HKUDS/nanobot/pull/4620)** — CLI trigger for heartbeats with dry-run mode.

**Feature Requests showing community demand (not yet implemented):**
- [#4218 WebUI Cron Job Management](https://github.com/HKUDS/nanobot/issues/4218) (closed as enhancement request) — Users want cron management in WebUI, not just CLI.
- [#1445 Don't send channel messages for cron jobs when nothing meaningful happened](https://github.com/HKUDS/nanobot/issues/1445) (closed) — Noise reduction for routine cron tasks; resolved via the heartbeat evaluation feature in [#4915](https://github.com/HKUDS/nanobot/pull/4915).

**Prediction:** The heartbeat trigger CLI (#4620) and Deploy to Render (#4937) have strong "force multiplier" effects for usability and adoption. The heartbeat model override (#4549) addresses a concrete pain point from enterprise users who want to control API costs. These are likely candidates for the next release.

## User Feedback Summary

**Positive signals:**
- The community is actively building features: a DingTalk channel enhancement PR (private chat gating, sender mentions) shows third-party developers contributing platform improvements.
- Users are requesting operational cost controls (heartbeat model override, don't-send-empty-messages) indicating production/enterprise usage.
- The WebUI is receiving sustained community investment with copy, highlight, and validation features.

**Pain points expressed:**
- **Telegram rendering regressions** — Multiple issues (#2568, #4637) report markdown rendering failures since v1.4.post6; while both are closed, the pattern suggests fragility in the Telegram channel integration.
- **Unified session surprises** — The heartbeat routing failure (#4924) and resource leak (#4787) both stem from or interact with the unified session feature, which reduces session count but creates new edge cases.
- **Provider-specific leaks** — The Qwen thinking content exposure (#4934) and Codex failure diagnostics (#4929) show users hitting provider-specific integration gaps.
- **Windows support gaps** — PowerShell UTF-16 corruption (#4881) highlights continued Windows rough edges for a project likely primarily tested on Linux/Mac.

**Satisfaction indicators:** High PR submission rate from community members (yu-xin-c, chengyongru, wzrayyy, hamb1y) suggests engaged, competent user community that ships fixes rather than just filing complaints.

## Backlog Watch

**Issues needing maintainer attention:**

1. **[#4787 Resource leak: Session.messages list unbounded](https://github.com/HKUDS/nanobot/issues/4787)** — Open since July 6, no fix PR. For production deployments with long-running sessions, this is a ticking time bomb. High-priority for Ops stability.

2. **[#4934 Qwen models expose thinking/reasoning content](https://github.com/HKUDS/nanobot/issues/4934)** — Filed today, but represents a potential data leakage bug. If Qwen is a supported provider, this needs urgent triage.

3. **[#1086 WhatsApp Bridge WebSocket Binding Prevents Inter-Container Communication](https://github.com/HKUDS/nanobot/issues/1086)** — Closed, but the underlying containerization concern hasn't been fully addressed. Docker users may still hit this pattern.

**PRs needing review:**
- **[#4689 feat(providers): surface OAuth status and expiry warnings](https://github.com/HKUDS/nanobot/pull/4689)** — Large, complex feature touching providers, CLI, and WebUI. High value but needs careful review to avoid regressions.
- **[#4862 fix(exec): isolate exec session managers](https://github.com/HKUDS/nanobot/pull/4862)** — Architecture change to exec session management. Potential for breaking custom tool implementations.

**Old issues with maintainer feedback pending:**
- No issues remain unanswered long-term; the project appears to have active maintainer engagement.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the Hermes Agent project digest for July 15, 2026.

---

### Hermes Agent Project Digest
**Date:** 2026-07-15
**Data Snapshot:** github.com/nousresearch/hermes-agent

---

### 1. Today's Overview
The Hermes Agent project is exhibiting **very high activity** today, driven by a massive clean-up wave. In the last 24 hours, **39 out of 50 issues were closed**, and 49 pull requests remain open, indicating a focused effort to merge fixes and resolve a significant backlog from the past month. While there is no new release today, the high closure rate and a cluster of new feature-tracking issues suggest the team is clearing the deck for a major upcoming version (likely v0.18.0). The community is actively engaged, particularly around plugin architecture expansion and desktop UI improvements.

### 2. Releases
- **None:** No new releases were published today.

### 3. Project Progress
The project is in a high-throughput state, with the "sweeper" bot closing a large volume of issues. Key areas of progress include:

- **Session Stability & Performance (High Priority):** Multiple P2 issues related to session bloat, context compression, and zombie processes were resolved.
    - **Closed:** [Gateway/front-door sessions become multi-minute slow (P2, #49673)](https://github.com/NousResearch/hermes-agent/issue/49673) - Fixed tool-output bloat causing stalls.
    - **Closed:** [MCP stdio zombie process accumulation (P2, #50169)](https://github.com/NousResearch/hermes-agent/issue/50169) - Orphaned processes are now reaped.
    - **Closed:** [Silent fallback failover (#50229)](https://github.com/NousResearch/hermes-agent/issue/50229) - Agent now notifies users on provider fallback.

- **Platform & Provider Bug Fixes:** Several critical adapter and provider issues were patched.
    - **Closed:** [WhatsApp bridge path off-by-one (P2, #49831)](https://github.com/NousResearch/hermes-agent/issue/49831) - Fix for source installs.
    - **Closed:** [Docker image missing lark-oapi for Feishu (P2, #50205)](https://github.com/NousResearch/hermes-agent/issue/50205) - Feishu channel connectivity restored.
    - **Closed:** [GitHub Copilot "empty base URL" (P2, #50252)](https://github.com/NousResearch/hermes-agent/issue/50252) - Resolved inference failure.
    - **Closed:** [Photon iMessage sidecar death spiral (P3, #49858)](https://github.com/NousResearch/hermes-agent/issue/49858) - Critical reconnection issue fixed.

- **Desktop & TUI Polish:** Several desktop app bugs were addressed.
    - **Closed:** [Desktop app reinstall prompt on every launch (P2, #49787)](https://github.com/NousResearch/hermes-agent/issue/49787) - Configuration detection fixed.
    - **Closed:** [Profile selector not switching active profile (P2, #49765)](https://github.com/NousResearch/hermes-agent/issue/49765)
    - **Closed:** [MEDIA tags rendered as inline audio players (#50236)](https://github.com/NousResearch/hermes-agent/issue/50236) - New feature implemented.

- **Feature Implementation (Open PRs):** A series of four PRs (#49518-[49521] from KratosLee-6) are open, aiming to add **Session Summary Previews** to the desktop sidebar—a major UX enhancement. Other open PRs address skills retrieval (#49503), LSP on Windows (#49501), and security hardening for the browser tool (#49485).

### 4. Community Hot Topics
The most active discussions are centered on **expanding the plugin system** and a critical bug affecting long-running sessions.

1.  **[OPEN] Tracking: Plugin Interface Expansion (#64182, 9 comments):**
    - **Link:** [Issue #64182](https://github.com/NousResearch/hermes-agent/issue/64182)
    - **Analysis:** This is a high-signal community feature request. The community is actively outlining a standardized lifecycle event catalog and hook taxonomy to unblock dozens of pending plugin PRs. This suggests the current plugin system is a bottleneck for community contributions.

2.  **[CLOSED] Photon iMessage: sidecar death causes silent reconnect death spiral (#49858, 10 comments):**
    - **Link:** [Issue #49858](https://github.com/NousResearch/hermes-agent/issue/49858)
    - **Analysis:** This was a high-severity, high-engagement bug. The "silent death spiral" where the iMessage channel would die without recovery until a full restart was deeply disruptive. Its closure is a major win for enterprise users relying on iMessage integration.

3.  **[OPEN] Context compression can fabricate user turns and flip session language (#64539, 1 comment):**
    - **Link:** [Issue #64539](https://github.com/NousResearch/hermes-agent/issue/64539)
    - **Analysis:** A newly reported and deeply concerning bug. The context compression engine can hallucinate user messages and even change the session's language. This poses a serious risk to session data integrity and could lead to cascading failures in autonomous workflows.

### 5. Bugs & Stability
Overall stability is improving sharply today due to the high rate of P2 bug closures. However, a critical new bug has appeared.

- **Critical (New):** **[OPEN] Context compression fabricates user turns and flips session language (#64539, P2)](https://github.com/NousResearch/hermes-agent/issue/64539):** A newly reported bug where context compression creates "poisoned summaries" that persist across cycles. This is a data integrity issue that could severely impact the agent's behavior in long-running, unattended sessions. No fix PR exists yet.

- **High (Resolved):** **[CLOSED] Silent fallback failover drops user notification (#50229, P2)](https://github.com/NousResearch/hermes-agent/issue/50229):** A critical UX flaw where users were unaware their agent had switched models/provider. Now fixed.

- **Medium (Resolved):** **[CLOSED] MCP zombies (#50169), Photon death spiral (#49858), Gateway bloat (#49673):** All of these high-impact P2 bugs have been closed, significantly improving core stability.

- **Low (Resolved):** Multiple P3 bugs concerning Windows paths (#49500), desktop startup time (#49867), and TTS edge on Docker (#49747) have been closed.

### 6. Feature Requests & Roadmap Signals

- **Likely in v0.18.0:**
    - **Plugin Interface Expansion:** The tracking issue (#64182) and associated PR (#64231) are strong signals that a standardized plugin hook system is a high priority for the roadmap. This will likely be a headline feature.
    - **Session Summary Previews:** The open PR series (#49518 -> #49521) for desktop hover-card summaries is well-structured and appears close to merging. This is a strong candidate for the next release.
    - **Targeted Skill Retrieval:** The open `skill_view` PR (#49503) suggests the team is refining how agents load and use skills, moving away from flooding context.

- **Speculative (Community-Driven):**
    - **Per-Profile Temperature:** A closed feature request (#47512) allows temperature tuning in `config.yaml` per profile. This is now likely implemented.
    - **`supports_tools` Flag for Providers:** A closed request (#50234) for a flag to skip function-calling for incompatible providers (e.g., Perplexity). This is a clear quality-of-life improvement that could appear in a minor release.

### 7. User Feedback Summary
User feedback is a mix of relief from bug fixes and anticipation for new features.

- **Pain Points (Resolved):** Users reported major frustration with iMessage disconnects (#49858), desktop app setup loops (#49787), and silent failovers (#50229). The sweep of closures today directly addresses these pain points.
- **Dissatisfaction:** The ongoing "Profile HOME isolation" issue (#48037) still sees activity, indicating developers find the sandboxing disruptive for host-level commands. The new context-compression bug (#64539) will cause new anxiety for users running cron jobs.
- **Satisfaction/Desire:** The community is highly engaged with the plugin expansion discussion, signaling a desire to build more integrations. The `feat(desktop)` PRs show strong community interest in improving the desktop app's usability (hover previews, inline audio players).

### 8. Backlog Watch
One significant, older issue remains unaddressed and may require maintainer attention.

- **Critical Backlog:** **[OPEN] Background process notify_on_complete leaks into wrong TUI session (#42674, P2):**
    - **Link:** [Issue #42674](https://github.com/NousResearch/hermes-agent/issue/42674)
    - **Reason for Watch:** This cross-session security/UX bug (notifications going to the wrong user) was created almost a month ago. It affects the core TUI experience and has the `sweeper:risk-session-state` tag, indicating it's a technically complex fix. With the current focus on session state, it is a candidate for prioritization.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-15

## Today's Overview
PicoClaw shows moderate activity over the past 24 hours with 3 open issues and 9 pull requests updated, 5 of which have been merged or closed. No new releases were published. The project continues to mature through targeted fixes for provider compatibility (Bedrock temperature deprecation, tool call streaming), platform-specific messaging (Feishu audio/video), and operational transparency (per-turn token usage). A high-priority feature request to replace the insecure `libolm` library with `vodozemac` remains open and actively discussed. Overall, the project is in a healthy maintenance and optimization phase, with contributions focused on reliability and integration polish.

## Releases
No new releases were published. The latest version remains **0.3.1**, which is referenced in the rate-limiting bug report (Issue #3232).

## Project Progress
Five pull requests were merged or closed in the last 24 hours:

- **#2982** [CLOSED] — `fix(bedrock): drop temperature for models that deprecate it (Opus 4.8)` — Resolves a critical issue where upgrading to Claude Opus 4.8 on AWS Bedrock caused all LLM calls to fail with a `ValidationException` because the model no longer accepts a `temperature` parameter. The fix conditionally omits temperature when the model deprecates it.
- **#2957** [CLOSED] — `fix(channels): prevent tool_calls from being dropped during streaming` — Corrects a regression from PR #2892 where tool_calls messages were incorrectly filtered as auxiliary messages during streaming. Adds a helper function and exclusion logic.
- **#2270** [CLOSED] — `fix(config): handle non-addressable SecureString values in collectSensitive` — Fixes a panic when iterating over map values containing `SecureString` during config collection, caused by Go reflection returning non-addressable values. Includes regression tests.
- **#2128** [CLOSED] — `fix(tools): ensure tool parameters have valid JSON Schema properties field` — Fixes tool schema validation errors when using strict OpenAI-compatible APIs (e.g., LM Studio). Ensures all tool parameters have a valid `properties` field.
- **#3156** [CLOSED] — `feat(pico): emit per-turn LLM token usage on finalized message` — Adds real per-turn input/output token consumption tracking on the Pico channel, enabling downstream consumers to monitor costs per conversation.

These merges collectively improve stability across the Bedrock provider, tool call handling during streaming, config security, and operational observability.

## Community Hot Topics

- **Issue #3088** — `[Feature] use vodozemac instead of libolm` — **(8 comments, 2 👍)** — The most active issue. The community is pushing for replacing the unmaintained and insecure `libolm` with its official successor `vodozemac`. The discussion includes making `libolm` optional at compile time. This is a security-hardening request with broad implications for PicoClaw’s encryption foundations. [View Issue](https://github.com/sipeed/picoclaw/issues/3088)

- **Issue #3232** — `[BUG] Rate limiting doesn't work if no fallback models is configured` — **(1 comment)** — A user reports that RPM rate limiting fails when only `agents.defaults.model_name` is set without fallback models. This reveals a logic gap in the rate-limiting implementation. [View Issue](https://github.com/sipeed/picoclaw/issues/3232)

- **Issue #3255** — `[BUG] DingTalk chat list preview shows fixed "PicoClaw" instead of message content` — **(0 comments, new today)** — Fresh report of a UI glitch on the DingTalk channel where chat list previews display a static "PicoClaw" label instead of the actual reply content. [View Issue](https://github.com/sipeed/picoclaw/issues/3255)

## Bugs & Stability

| Issue | Severity | Summary | Fix PR Exists? |
|-------|----------|---------|----------------|
| #3232 | Medium | Rate limiting fails entirely when no fallback models are configured | No |
| #3255 | Low | DingTalk chat list preview shows static text instead of message content | No |
| #3088 | **High** (Security) | libolm is unmaintained and insecure; needs replacement with vodozemac | No (feature request, not a bug fix) |

The most critical unresolved bug is #3232, where rate limiting becomes non-functional without fallback models—this could lead to unexpected API overages for users with simple single-model setups. The DingTalk preview bug (#3255) is cosmetic but affects UX on that platform.

## Feature Requests & Roadmap Signals

- **Vodozemac Integration (Issue #3088)** — The most significant open feature request. Given the security implications of using unmaintained `libolm`, this is likely to be prioritized for the next version, possibly 0.4.0. The proposed solution (compile-time optional toggle) aligns with the project’s modular architecture.

- **AWS Bedrock Prompt Caching (PR #3163, open)** — Adds support for AWS Bedrock’s Converse prompt caching via cache points, which could reduce input costs by ~90% for cached prefixes. This is a high-value operational feature for Bedrock users.

- **Anthropic System Part Caching (PR #3228, open)** — Fixes the inability to express Anthropic prompt caching on the `anthropic_messages` provider due to flattening of system messages. Would enable per-block cache_control markers.

- **Feishu Native Media Types (PR #3256, open)** — Improves the Feishu channel to send audio and video with native message types instead of generic file attachments, enabling inline playback.

**Prediction for next version**: The vodozemac migration (#3088) and the rate-limiting bug fix (#3232) are strong candidates. Provider caching enhancements (#3163, #3228) may follow if testing is complete.

## User Feedback Summary

- **Pain Points:**
  - Insecurity of `libolm` library (Issue #3088) — user explicitly flags it as unmaintained
  - Rate limiting silently failing without fallback models (Issue #3232) — potential cost exposure
  - DingTalk UI showing static "PicoClaw" in chat previews (Issue #3255) — degraded mobile experience

- **Use Cases:**
  - Single-model setups with rate limiting expectations (Issue #3232)
  - DingTalk-based team communications with PicoClaw as bot (Issue #3255)
  - AWS Bedrock users needing prompt caching for cost efficiency (PR #3163)
  - Feishu users wanting native media playback for audio/video responses (PR #3256)

- **Satisfaction Signals:**
  - 2 upvotes on the vodozemac issue indicate community alignment on the security direction
  - Multiple fix PRs from the same contributor (loafoe) suggest engaged and responsive maintainers
  - No crisis-level bugs or complaints in the current data

## Backlog Watch

- **Issue #3088** (vodozemac migration) — Opened 2026-06-09, last updated 2026-07-14. Over a month old with high priority label and active discussion. No PR yet. This needs a maintainer to commit to an implementation plan or timeline, especially given the security implications.

- **PR #3233** (Fix PR 3222 backward compat) — Opened 2026-07-07, marked stale. This is a backward compatibility fix for another in-flight PR. Without resolution, PR #3228 (Anthropic system parts) may stall.

- **PR #3163** (Bedrock prompt caching) — Opened 2026-06-23, still open with no comments. A significant feature PR from a regular contributor (loafoe) that has not received maintainer review in 3+ weeks. May risk going stale.

**Overall Health**: PicoClaw is in a stable maintenance phase with active community contributions. The backlog of caching features and the pending security upgrade (vodozemac) represent the main areas requiring maintainer attention to maintain momentum.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-15

## 1. Today's Overview

NanoClaw shows **elevated maintenance activity** with **28 pull requests updated in the last 24 hours**, though **no new issues or releases** were filed. The project remains in a **sustained bug-fixing and hardening phase**, with **9 PRs merged/closed** today alone — a significant burst of progress. Open PRs (19) outnumber closed ones, indicating active review pipelines. The **core team and repeat contributors** (e.g., sturdy4days, joevandyk) continue to drive stability improvements across the polling loop, security hardening, and channel integrations. Community engagement is moderate, with no issues or PRs attracting multiple comments or reactions in the observed window.

## 2. Releases

**No new releases** were published in the last 24 hours. The project has no tagged release in this digest period.

## 3. Project Progress

**9 PRs were merged or closed today**, reflecting concrete forward motion:

- **Telegram integration fixes**: [#2728](https://github.com/nanocoai/nanoclaw/pull/2728) (closed) fixed a critical bug where pairing with `--intent wire-to:<folder>` never created the `messaging_group_agents` row, leaving agents unwired. [#2729](https://github.com/nanocoai/nanoclaw/pull/2729) corrected Telegram pairing documentation to match actual status-block output. [#3043](https://github.com/nanocoai/nanoclaw/pull/3043) switched Telegram deep-link from `t.me` to `telegram.me` for reliability.

- **Security and environment fixes**: [#3047](https://github.com/nanocoai/nanoclaw/pull/3047) (open) fixes `add-slack` credential ordering (credentials must be configured before webhook URL verification). [#2730](https://github.com/nanocoai/nanoclaw/pull/2730) (closed) resolved a systemic bug where `NANOCLAW_*` environment flags set in `.env` never reached `process.env` under `launchd/systemd` — a **critical operational fix** for anyone running NanoClaw as a service.

- **Developer experience**: [#2753](https://github.com/nanocoai/nanoclaw/pull/2753) (closed) fixed a `pre-commit` hook failure when `pnpm` was missing from `PATH`. [#3042](https://github.com/nanocoai/nanoclaw/pull/3042) (closed) added **Dial** as a new channel in the setup wizard, installer, skills, and documentation — a notable feature expansion.

- **Supply chain security**: [#2973](https://github.com/nanocoai/nanoclaw/pull/2973) (open) activates the `minimumReleaseAge` gate for dependency upgrades, which was previously inert due to a YAML key placement error.

- **Pairing documentation**: [#3046](https://github.com/nanocoai/nanoclaw/pull/3046) (open) aligns `init-first-agent` docs with actual Telegram pairing status blocks emitted by the setup step.

## 4. Community Hot Topics

No issues or PRs attracted **more than 0 comments** in the observed period. The most discussion-worthy PRs by topic are:

| PR | Title | Comment Count | Underlying Need |
|----|-------|---------------|-----------------|
| [#2921](https://github.com/nanocoai/nanoclaw/pull/2921) | fix(compose): gate skill fragments on group skill selection | 0 (open) | **Group skill isolation** — users expect per-group `CLAUDE.md` fragments, not a global merge. |
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | feat(setup): add Dial to the channel picker + wizard/skills | 0 (open) | **Channel diversity** — Dial is the second new channel in 24h, suggesting demand for multi-platform support. |
| [#3040](https://github.com/nanocoai/nanoclaw/pull/3040) | fix: unify approval holds behind one lifecycle contract | 0 (open) | **Consistent approval flow** — core team member addressing fragmentation in approval hold mechanisms. |

**Analysis**: Activity is driven by **internal core team** rather than external community spark. The absence of comments may reflect **stable, well-scoped PRs** rather than disengagement. The Dial channel addition (PR #3042 closed, #3050 still open) signals active platform expansion.

## 5. Bugs & Stability

Today's updates surface several bugs, ranked by severity:

| Severity | Issue/PR | Description | Fix Exists? |
|----------|----------|-------------|-------------|
| **Critical** | [#2750](https://github.com/nanocoai/nanoclaw/pull/2750) (open) | Stale `outbound.db` journals after container kills + hot-journal poll races (#2516, #2640). Agents lose pending messages on forceful container termination. | ✅ Yes (PR open since June 12) |
| **High** | [#3045](https://github.com/nanocoai/nanoclaw/pull/3045) (open) | Outbound messages queued just before container exit are delayed 60s — active delivery poll loses the session. | ✅ Yes (PR open today) |
| **High** | [#2800](https://github.com/nanocoai/nanoclaw/pull/2800) (open) | Security: group folders not validated before mutation; Docker implicitly pulls container images during spawn (security risk). | ✅ Yes (PR open since June 17) |
| **Medium** | [#3044](https://github.com/nanocoai/nanoclaw/pull/3044) (open) | Inbound attachments without live `fetchData()` (e.g., Telegram voice notes) silently dropped — agent sees filename but no bytes. Fixes #2888. | ✅ Yes (PR open today) |
| **Medium** | [#3049](https://github.com/nanocoai/nanoclaw/pull/3049) (open) | `<message>` blocks emitted during a tool-call turn not delivered by poll-loop. | ✅ Yes (PR open today) |
| **Medium** | [#3048](https://github.com/nanocoai/nanoclaw/pull/3048) (open) | Poll-loop incorrectly truncates `<message>` body at a quoted `</message>` string. | ✅ Yes (PR open today) |

**Key concern**: PR [#2750](https://github.com/nanocoai/nanoclaw/pull/2750) (stale outbound journals) has been open since **June 12 without merge** — a month-long delay on a critical data-loss bug. This should be escalated.

## 6. Feature Requests & Roadmap Signals

No formal feature requests appeared today. Roadmap signals from activity:

- **Dial channel integration** (PRs #3042 closed, #3050 open): Rapid addition suggests NanoClaw is pursuing a **multi-channel parity strategy** — offering the same setup wizard, skills, and documentation for each supported platform. Expect **more channels** (e.g., WhatsApp, Signal, Matrix) in future releases.

- **Approval lifecycle unification** (PR #3040, open, core-team): A `core-team` labeled PR restructuring approval holds into a single contract. This is an **internal architectural improvement** rather than a user-facing feature, likely to enable consistent approval flows across channels.

- **Untrusted input hardening** (PR #2801, open): Improving `safeParseContent` to handle non-object JSON payloads. Signals a **security-focused roadmap** moving toward production readiness.

- **Minimum Release Age gate** (PR #2973, open): Activating supply-chain security gates suggests a **stability release** may be approaching.

**Prediction**: The next version is likely to include **(a)** the Dial channel, **(b)** the unified approval lifecycle, **(c)** the outbound journal recovery fix, and **(d)** the supply-chain security gate activation. A v0.x release candidate may be 2–4 weeks away.

## 7. User Feedback Summary

No direct user feedback was captured in today's data (no issues, no PR comments). However, **indirect signals** from PR content reveal user pain points:

- **Telegram pairing reliability** (PR #2728, fixed): Users were successfully pairing but the wiring row was never created — the agent appeared paired but never received messages. This is a **critical user experience bug** now resolved.

- **Environment variable confusion** (PR #2730, fixed): Users setting `NANOCLAW_*` flags in `.env` under `launchd/systemd` found they had no effect. A **silent configuration failure** that would frustrate any deployment attempt.

- **Attachment handling gaps** (PR #3044, open): Telegram voice/audio notes silently fail — users send voice messages that agents never see. This is a **noticeable UX gap** for mobile-first use.

- **Documentation mismatches** (PRs #2729, #3046): Users following pairing docs encountered different status blocks than what the setup step emitted. Documentation accuracy is a recurring pain point.

**Satisfaction signals**: The rapid fix pace (9 PRs closed today) suggests an **actively maintained project** that responds to bugs. No complaints or dissatisfaction expressed in any issue/PR title or summary.

## 8. Backlog Watch

| Item | Created | Status | Risk |
|------|---------|--------|------|
| [#2750](https://github.com/nanocoai/nanoclaw/pull/2750) — stale outbound.db journals | 2026-06-12 | **Open PR** — 33 days stale | **HIGH** — Data loss bug with fix ready but unmerged. Affects container-kill scenarios. |
| [#2800](https://github.com/nanocoai/nanoclaw/pull/2800) — security: group folder validation + implicit image pulls | 2026-06-17 | **Open PR** — 28 days stale | **MEDIUM** — Security hardening, but no CVE associated. |
| [#2801](https://github.com/nanocoai/nanoclaw/pull/2801) — untrusted router input hardening | 2026-06-17 | **Open PR** — 28 days stale | **LOW-MEDIUM** — Input validation hardening for non-object payloads. |
| [#2921](https://github.com/nanocoai/nanoclaw/pull/2921) — group skill fragment gating | 2026-07-03 | **Open PR** — 12 days stale | **MEDIUM** — Correctness issue where group skill selection is ignored. |
| [#2899](https://github.com/nanocoai/nanoclaw/pull/2899) — Discord `custom_id` newline suffix causes 100% rejection | 2026-07-01 | **Open PR** — 14 days stale | **HIGH** — All Discord approval-button taps route to reject. Fix ready, unmerged. |

**Maintainer action required**: PRs [#2750](https://github.com/nanocoai/nanoclaw/pull/2750) (data loss), [#2899](https://github.com/nanocoai/nanoclaw/pull/2899) (Discord broken), and [#2800](https://github.com/nanocoai/nanoclaw/pull/2800) (security) have been open **over two weeks with fix code ready**. These should be prioritized for review and merge. The discord button rejection bug (#2899) is particularly concerning — it means Discord integration is effectively unusable for approvals for 14+ days.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the IronClaw project digest for 2026-07-15.

---

## IronClaw Project Digest – 2026-07-15

### 1. Today's Overview
IronClaw is in a period of **intense, high-velocity development**, with 99 issues and PRs updated in the last 24 hours. The team is actively closing out a significant number of bug-bash findings and is in the middle of a major architectural overhaul—the "unified extension model" and "extension runtime" (Train A and Train B). While the daily volume shows strong momentum, it is also a clear indicator of a project under considerable stabilization pressure, particularly around extension lifecycle management and concurrency. A massive PR train (Train B) was squashed and proposed, signaling the team is preparing to land a major new feature.

### 2. Releases
No new releases were published in the last 24 hours. The last pending release appears to be PR #5598, which has been open since July 3rd. That PR contains breaking changes to the `ironclaw_common` and `ironclaw_skills` crates. It is likely being held back pending the completion of the current architectural changes.

### 3. Project Progress
**29 PRs** were merged or closed today, representing significant churn and forward progress. Key advances include:

- **Extension Runtime (Train B):** The massive 9-phase "Train B" rollup was proposed as a single squash commit in PR #6090. The individual phases (PRs #5995, #5996, #6007, #6008, #6012, #6056, #6065) were all closed today, indicating the team has consolidated the work.
- **Unified Extension Model (Train A):** The "Train A" roll-up PR #6061 remains open, building on the same architectural shift.
- **Automation Visibility:** PR #6066 was merged, providing a fix for "gate-parked" automations (those waiting on approval/auth). These will now appear in the WebUI and tool lists instead of being silently skipped.
- **Chat Ordering:** PR #6096 was opened (and merged?) to fix the critical P2 bug where task messages were displayed out of chronological order (#6047). The fix serializes concurrent inbound-message writes.
- **Error Messaging:** PR #6095 was merged to stop misclassifying I/O faults and to provide better error messages for auth-unavailable providers (addresses #5884).
- **CI Signal Recovery:** A new issue (#6103) was opened to address the fact that **~70% of July pushes to main failed** due to flaky tests, indicating a major push to stabilize the CI pipeline is beginning.

### 4. Community Hot Topics
The most active discussions center on systemic reliability and architectural decisions spurred by the recent QA bug bash.

- **#6109 – OpenAI-compat API: model override silently ignored for Bedrock:** This issue highlights a correctness gap where the Bedrock provider ignores a user-specified `model` parameter without error. The core team's audit is finding similar gaps, suggesting a deep review of all model providers is underway.
- **#6091 – Slack extension reports conflicting connection states after disconnect:** This is a classic symptom of a poorly managed state machine. The discussion likely revolves around getting the lifecycle (install, connect, disconnect) correct, which is the core focus of the Train A/B rollups.
- **#6092 – Slack conversation hangs in "thinking" state after reconnecting:** This is another extension lifecycle bug with high user impact. The proposed solution will likely come from the "Extension/channel lifecycle state-machine test" requested in #6105.

### 5. Bugs & Stability
A large number of bugs are being reported daily, a direct result of the "bug bash" waves. Those reported today are severe and often related to misreporting the system state.

- **High Severity:**
    - **#6099 – POST /llm/test-connection reports ok:true for an unreachable endpoint:** A newly reported issue where the test-connection endpoint lies. This is dangerous for users configuring their own models as they will trust a false green light.
    - **#6047 (P2) – Task messages processed and displayed out of chronological order:** A fundamental data integrity issue. Fix PR #6096 exists.
    - **#6091 (P2) – Slack extension reports conflicting connection states:** A core state-management bug in the extension runtime. Fix PR is likely part of the upcoming roll-ups.
    - **#6092 (P2) – Slack conversation hangs in "thinking" state:** A blocking bug for Slack channel users.
- **Medium Severity:**
    - **#6087 – Extension catalog load failures are shown as an empty state:** A poor user experience that hides network errors, making it impossible for users to tell if the app is broken or just empty.
    - **#6085 – Admin user details expose a broken "Create token" action:** A user-facing action in the admin panel that leads to a dead-end (no backend endpoint).
- **Low Severity:**
    - **Bug-bash P3 issues** like #6050 (phantom error banner), #5947 (thread list not updating after delete), and #6039 (light theme colors) are being reliably reported and closed.

### 6. Feature Requests & Roadmap Signals
The project is explicitly moving toward a mature, stabilized, and well-tested state. The following signals point to upcoming features:

- **Release/Staging CI Gate (#6106):** A formal request to add a smoke-test and upgrade-path check before any release is published. This indicates a desire to prevent incidents like the crash-loop caused by a security fix (#5966).
- **Extension Lifecycle State Machine Tests (#6105):** If the team invests in these, it's a strong signal that the Slack/Telegram channel feature is a top priority for the next release.
- **Model-Input Compatibility Corpus (#6107):** Requesting a CI-based replay of real tool-call arguments against schemas. This suggests the team will aggressively reduce harness bugs in the next version.
- **Error Fidelity Enhancement (#6108):** A request to enforce a rule that the system "must not lie" about success. This is a strong roadmap signal for improved error handling and observability.

### 7. User Feedback Summary
The "bug bash" is a direct source of user feedback, and the patterns are clear:

- **Pain Point: "The system lies to me."** Users are frustrated by false positives. The system reports an extension is active when it's not (#5948), reports a connection is good when it's not (#6099), and shows a "success" while Slack DMs silently fail (#5944, highlighted in #6108).
- **Pain Point: Extension reliability.** Slack is the #1 source of frustration, with disconnects leading to hanging conversations (#6092), confusing state reports (#6091), and lost credentials (#5884).
- **Use Case: Scheduled / Routine Tasks.** Users are using IronClaw to run scheduled routines (e.g., a "morning standup" that lists GitHub issues). These workflows are failing due to credential loss and non-obvious errors (#5884), making the product unreliable for its core automation promise.

### 8. Backlog Watch
- **#5598 – "chore: release" (Open since July 3rd):** This release PR contains breaking changes and has been open for nearly two weeks. It is a bottleneck for downstream users who need the latest fixes. Its delay suggests the team is not confident in the stability of `main` yet, which is supported by the high CI failure rate.
- **#5970 – MCP registration framework skeleton (Open):** This large PR has no comments on it in the last 24h. It is a foundational piece of a new MCP (Model Context Protocol) feature. It's not user-facing yet, but its size (XL) and lack of review activity could block progress on the broader MCP vision.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date:** 2026-07-15  
**Source:** github.com/netease-youdao/LobsterAI

---

## 1. Today's Overview

The LobsterAI project shows moderate maintenance activity today, with 4 issues closed and 3 pull requests merged in the last 24 hours. No new releases were published, indicating the project is in a stabilization phase rather than a feature rollout. The development team focused on fixing critical runtime stability issues in the OpenClaw agent framework and a user-facing rendering bug in the cowork module. All issues closed today were legacy reports from April 2026 that were automatically marked as stale, suggesting no new critical user-facing problems emerged recently. Overall, the project appears healthy with a steady flow of targeted improvements.

---

## 2. Releases

No new releases were published today. The latest available version remains at the previously tagged release.

---

## 3. Project Progress

Three pull requests were merged/closed today, representing both backend agent stability fixes and frontend UX improvements:

- **[PR #2331] fix(openclaw): terminate critical tool loops**  
  *Author: btc69m979y-dotcom* | [GitHub Link](https://github.com/netease-youdao/LobsterAI/pull/2331)  
  Backports a dual-layer OpenClaw v2026.6.1 fix for critical tool-loop detection, ensuring the agent run terminates properly when a "veto" condition occurs. Preserves normal plugin veto behavior and allows sibling tools in mixed parallel batches to complete before stopping. Includes patch validation and regression coverage.

- **[PR #2330] fix(openclaw): stop loop after aborted tool run**  
  *Author: btc69m979y-dotcom* | [GitHub Link](https://github.com/netease-youdao/LobsterAI/pull/2330)  
  Backports an upstream fix to stop the agent loop at abort boundaries after tool execution and async turn hooks. Adds patch validation and regression coverage to the LobsterAI runtime.

- **[PR #2329] fix(cowork): prevent conversation scroll jumps**  
  *Author: liuzhq1986* | [GitHub Link](https://github.com/netease-youdao/LobsterAI/pull/2329)  
  Fixes a UX annoyance where the conversation view would auto-scroll during streaming even when the user had manually scrolled. Now respects manual scrolling and cancels pending auto-scroll actions.

---

## 4. Community Hot Topics

Today's activity was dominated by closed stale issues rather than active community engagement. The issues with the most comments were:

- **[Issue #1389] Language selection: Chinese options display in English when English is selected**  
  *Author: zqgittest* | Comments: 3 | [GitHub Link](https://github.com/netease-youdao/LobsterAI/issues/1389)  
  A localization bug where selecting English language still shows Chinese-language options in English text. This suggests a French/Chinese/English i18n mapping issue that may resurface if localization work continues.

- **[Issue #1386] Sharing long conversations generates incomplete screenshots**  
  *Author: QinGang746* | Comments: 2 | [GitHub Link](https://github.com/netease-youdao/LobsterAI/issues/1386)  
  Users report the "share" button fails to capture full conversation content when the chat history is lengthy, generating truncated screenshots. This is a significant UX gap for power users who rely on the sharing feature.

- **[Issue #1388] Email configuration test connectivity hangs indefinitely**  
  *Author: QinGang746* | Comments: 2 | [GitHub Link](https://github.com/netease-youdao/LobsterAI/issues/1388)  
  Invalid email credentials cause the "test connectivity" button to become unresponsive, with no timeout or error feedback. A clear input validation bug.

The underlying need across these issues is **robust error handling** — users expect clear feedback when operations fail, whether due to invalid input, network issues, or system limits.

---

## 5. Bugs & Stability

No new bugs were reported today. All four issues closed were legacy reports from April 2026 that were automatically labeled as stale. These are ranked by remaining user impact:

| Issue | Severity | Description | Fix PR Exists? |
|-------|----------|-------------|----------------|
| [#1388] Email config test hangs | **Medium** | Test connectivity button becomes unresponsive with invalid credentials | No |
| [#1386] Share screenshot truncation | **Medium** | Long conversations produce incomplete share images | No |
| [#1390] Scheduled tasks fail to update | **Medium** | Editing and updating scheduled tasks sometimes does nothing | No |
| [#1389] Language display bug | **Low** | UI text incorrectly switches between languages | No |

None of these bugs have associated fix PRs. They were closed as stale rather than resolved, meaning they may still exist in the current codebase if no other work addressed them.

---

## 6. Feature Requests & Roadmap Signals

No explicit feature requests were filed today. However, based on the merged PRs and closed issues, we can infer development priorities:

- **Agent runtime hardening** — Two PRs (##2330, 2331) focus on preventing runaway agent tool loops and abort handling. This suggests the team is investing in production reliability for the OpenClaw agent framework.
- **UX polish in cowork** — PR #2329's scroll-jump fix indicates the team cares about smooth streaming experiences, a key differentiator for AI chat products.

**Predictions for next version:**
1. Continued agent core stability improvements (tool-loop detection, abort handling) are likely to ship in a patch release.
2. The conversation screenshot truncation bug (#1386) may be addressed in the next minor release given its user-visible impact.
3. Better input validation for email configuration is a low-hanging fruit that could be bundled with other connectivity improvements.

---

## 7. User Feedback Summary

The closed issues reveal several real user pain points:

- **Frustration with broken sharing** — Users who rely on the share feature to export long research conversations or troubleshooting logs are encountering truncated output, undermining a core collaboration use case.
- **Unresponsive UI elements** — The email test connectivity bug exhibits a poor UX pattern: no progress indicator, no timeout, and no error message. Users are left waiting indefinitely without feedback.
- **Configuration instability** — The scheduled task update issue (#1390) is particularly concerning as it affects automated workflows, although it is "not reliably reproducible."
- **Localization confusion** — The language selection bug (#1389) creates a contradictory experience where choosing English still shows Chinese UI text, which could confuse multilingual users.

**Satisfaction signals:** The fact that no new issues were opened today suggests the majority of users are not encountering show-stopping problems. The quick merging of three PRs today shows responsive development.

---

## 8. Backlog Watch

All four issues closed today were old (April 2026) and automatically marked as stale. No long-lingering issues remain open in the active set. However, the following concerns deserve attention:

- **No fix PRs for closed bugs** — Issues #1386, #1388, #1389, and #1390 were closed as stale without resolution. If any of these bugs still reproduce in the current codebase, they should be re-opened and prioritized.
- **OpenClaw stability dependency** — PRs ##2330 and ##2331 reference backporting fixes from an upstream "OpenClaw v2026.6.1" runtime. The project should monitor whether these patches are fully integrated or if more upstream work is needed.

No PRs or issues currently require immediate maintainer attention as all open items appear to be effectively managed.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-15

## Today's Overview
The Moltis project shows sustained high development velocity, with **12 pull requests updated in the last 24 hours** (8 merged/closed) and **3 issues updated** (2 still active). A new release (`20260714.11`) was published today. The activity is heavily concentrated on dependency maintenance, model support expansion, and bug fixes targeting browser agent robustness and MCP OAuth interoperability. The project continues to demonstrate strong community contribution patterns, with multiple external authors (xzavrel, resumeparseeval, s-salamatov, PeterDaveHello) driving significant fixes.

## Releases
- **20260714.11** – Published 2026-07-14. Release notes were not provided in the data, but the PRs merged since the prior release suggest this version likely includes:
  - GPT-5.6 model family support (Sol, Terra, Luna) with documented context windows
  - Fixes for MCP OAuth with `resource_metadata` servers (Notion, Linear)
  - Browser agent fixes for null parameter and stringified scalar tolerance
  - CalDAV non-ASCII datetime panic fix
  - Dependency bumps across npm/yarn projects

## Project Progress
The following PRs were merged/closed in the last 24 hours, indicating active feature work and bug fixing:

- **#1146 — Add GPT-5.6 model support** (PeterDaveHello) — Registered GPT-5.6 Sol, Terra, and Luna in OpenAI and Codex fallback catalogs; updated context window limits and configuration examples. This is the most significant feature addition in this batch.
- **#1136 — fix(agents): coerce stringified scalar tool args before validation** (resumeparseeval) — Critical fix for local models that emit numeric/bool arguments as JSON strings instead of scalars, improving compatibility with Gemma 4, oMLX, and similar.
- **#1120 — fix(mcp): use direct fetch for resource_metadata URL from WWW-Authenticate** (xzavrel) — Resolves OAuth failures with Notion and Linear MCP servers.
- **#1139 — fix(gateway): don't force-enable matrix-sdk via the metrics feature** (resumeparseeval) — Build optimization fix preventing unnecessary dependency pull.
- **#1145 — fix(caldav): avoid panic on non-ASCII datetime in normalise_datetime** (Osamaali313) — Security/stability fix for crash on malformed remote CalDAV data.
- **#1098 — fix(browser): tolerate null optional params in browser tool calls** (resumeparseeval) — Handles models that send explicit `null` for optional parameters.
- **#1089 — Cap persisted tool results before rehydration** (s-salamatov) — Improves session history management and provider compatibility.
- **#1141 — chore(deps): bump npm_and_yarn group** (dependabot[bot]) — Dependency updates.

## Community Hot Topics
- **#1119 (CLOSED) — MCP OAuth fails with `invalid_target` for servers using `resource_metadata`** — This issue had significant impact (Notion and Linear MCP servers broken) and was fixed promptly by PR #1120. The author xzavrel contributed both the bug report and the fix, demonstrating strong community self-healing.
- **#1102 (OPEN) — Feature: Add FunASR/SenseVoice as local STT engine** — Updated with a detailed license and capability clarification note. This is a longer-running feature request (since June 4) that received maintainer engagement today, suggesting active consideration. The note indicates careful review of FunASR's license (multiple licenses per model) and accuracy trade-offs vs. Whisper.
- **#1132 (OPEN) — [Bug]: "main" session can't be deleted/archived** — A usability concern with the default session, only 1 comment so far.

## Bugs & Stability

| Severity | Issue | Status | Fix Available |
|----------|-------|--------|---------------|
| **High** | CalDAV panic on non-ASCII datetime (#1145) | **Fixed** | ✅ Merged |
| **High** | MCP OAuth broken for Notion/Linear (#1119) | **Fixed** | ✅ Merged |
| **Medium** | Local models crash browser tool calls (null params) (#1098) | **Fixed** | ✅ Merged |
| **Medium** | Local models crash on stringified scalars (#1136) | **Fixed** | ✅ Merged |
| **Low** | "main" session can't be deleted/archived (#1132) | Open | No fix yet |

No critical severity issues are currently open. The most impactful bugs were all resolved in this batch of PRs. Build optimization fix #1139 prevents unnecessary `matrix-sdk` compilation, which affects CI time and binary size for users not using Matrix channels.

## Feature Requests & Roadmap Signals
- **GPT-5.6 model support** (#1146) is now merged, indicating Moltis is keeping pace with the latest frontier models from OpenAI.
- **Local STT: FunASR/SenseVoice** (#1102) — still open and actively discussed. The maintainer note about license compatibility and accuracy benchmarking suggests this is being evaluated carefully. Likely target for the next release if license terms are acceptable.
- **Channel activity log visibility settings** (#1093, OPEN) — A community-contributed feature for fine-grained per-account/channel/user logging control. Still open since June 3; may need maintainer review.
- **Auto-screenshot after each browser action** (#1135, OPEN) — Would enhance the browser agent's visual feedback loop. Moderate complexity, currently under review.

**Predictions for next release:**
- Likely: FunASR/SenseVoice integration (issue #1102) if licensing is resolved
- Possible: Channel activity log settings (#1093) if reviewed positively
- Possible: Browser auto-screenshot (#1135) with code review completion

## User Feedback Summary
The data provides indirect user feedback via bug reports and feature requests:

- **Pain points:** MCP OAuth interoperability with major services (Notion, Linear) was a significant blocker for users relying on these integrations; promptly fixed. Local model users (Gemma 4, oMLX) faced crashes due to JSON formatting quirks — two targeted fixes address this.
- **Use cases:** The browser agent fixes indicate heavy usage of Moltis in web automation contexts. The GPT-5.6 support signals demand for cutting-edge model access. The CalDAV fix shows Calendaring integration is actively used.
- **Satisfaction indicators:** High contribution activity from diverse authors; issues being reported and fixed within days (MCP OAuth from June 13 report to July 14 fix). Low complaint volume suggests stable core functionality.

## Backlog Watch
- **#1093 - Channel activity log visibility settings** (OPEN, since June 3) — Author s-salamatov has contributed this feature PR. It has been open for 6 weeks without maintainer merge or detailed review. Could benefit from maintainer attention or community review to unblock.
- **#1124 - Add context command support for chat turns** (OPEN, since June 15) — Author gptme-thomas. Another feature PR that has been awaiting review for one month. Adds runtime context injection capability, which could be valuable for deployment scenarios.
- **#1102 - FunASR/SenseVoice STT** (OPEN, since June 4) — This issue received a maintainer note today but has been open for over a month. The detailed analysis suggests it's on the roadmap but not yet committed.

None of these are critically blocked or abandoned, but the two feature PRs (#1093, #1124) would benefit from prioritization to avoid contributor frustration and code drift.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the project digest for CoPaw (QwenPaw), generated from the provided GitHub data.

---

### CoPaw Project Digest for 2026-07-15

#### 1. Today's Overview
The project is experiencing a period of intense activity following the `v2.0.0` major release. With 50 issues and 50 PRs updated in the last 24 hours, the community is actively reporting bugs and submitting fixes. While 35 issues were closed and 26 PRs were merged, the significant number of new, open critical bugs reported today (15 open issues) suggests a high rate of regression discovery. The project team is responding quickly, with several fix PRs already submitted for the most critical issues, indicating a proactive maintenance cycle.

#### 2. Releases
- **`v2.0.0.post2`**: This patch release was published today.
  - **Changes**: It includes a feature for more sensitive file detection and permission to read global configurations.
  - **Migration Notes**: This is a minor patch release; no breaking changes are expected. Users on `v2.0.0.post1` or earlier `v2.0.0` versions are encouraged to upgrade.

#### 3. Project Progress
In the last 24 hours, 26 PRs were merged or closed, demonstrating rapid iteration on the `v2.0.0` codebase. Key advancements include:
- **Memory System Fixes**: PR [#6098](https://github.com/agentscope-ai/QwenPaw/pull/6098) merged a major fix to improve ReMe memory reliability, observability, and CJK embedding safety, addressing a critical bug where memory indexing failed for Chinese text.
- **Sandbox Governance**: PR [#6109](https://github.com/agentscope-ai/QwenPaw/pull/6109) fixed a governance issue where the `sandbox_enabled` switch was being ignored in the OFF-mode sandbox path, a source of significant user friction.
- **New Platform Support**: A Zalo Bot channel plugin (PR [#6112](https://github.com/agentscope-ai/QwenPaw/pull/6112)) was merged, expanding the platform's channel architecture.
- **Desktop Build Fixes**: PR [#6097](https://github.com/agentscope-ai/QwenPaw/issues/6097) (closed) identified and provided a path to fix a missing `_scripts` module in the macOS desktop build.

#### 4. Community Hot Topics
The most active discussions highlight critical "day-one" issues with the `v2.0.0` release.
- **Memory Search Loops** ([#6113](https://github.com/agentscope-ai/QwenPaw/issues/6113)): Users are reporting that the auto-memory system enters an "endless search loop" on every query, severely degrading the user experience compared to `v1.x`.
- **Sandbox Crashes on Windows** ([#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951)): A detailed bug report describes `pwsh` process explosions and NTFS ACL pollution when the sandbox is active, rendering the tool nearly unusable on Windows. This thread is a high-priority signal from the Windows user base.
- **Context Compression Breaking APIs** ([#6077](https://github.com/agentscope-ai/QwenPaw/issues/6077), [#6121](https://github.com/agentscope-ai/QwenPaw/issues/6121)): Several users report that the new scroll context compression corrupts message order (e.g., `tool` messages without a preceding `assistant` call), causing 400 Bad Request errors with DeepSeek and other OpenAI-compatible APIs.

#### 5. Bugs & Stability
The `v2.0.0` release has introduced several regressions and critical bugs. Here are the most severe reported today:

- **Critical: Doom Loop Tool Calls** ([#6116](https://github.com/agentscope-ai/QwenPaw/issues/6116)): The agent repeatedly calls the same tool with the same parameters, wasting API calls before a warning is triggered.
- **Critical: Context Compression Corrupts Message Order** ([#6077](https://github.com/agentscope-ai/QwenPaw/issues/6077), [#6121](https://github.com/agentscope-ai/QwenPaw/issues/6121)): The scroll context manager can lead to permanently broken sessions with DeepSeek APIs. **Fix PR [#6108](https://github.com/agentscope-ai/QwenPaw/pull/6108) is open**.
- **Critical: Memory Search Loop** ([#6113](https://github.com/agentscope-ai/QwenPaw/issues/6113)): The agent gets stuck in an unending search for memories on every query.
- **High: Upgrade Breaks Session Mapping** ([#5964](https://github.com/agentscope-ai/QwenPaw/issues/5964)): Upgrading to `2.0.0` can break the mapping between chat lists and conversation history, leading to 500 errors in the Web UI.
- **High: Missing Desktop Build Module** ([#6097](https://github.com/agentscope-ai/QwenPaw/issues/6097)): The macOS desktop build is missing the `_scripts` module, causing crashes on init. This was confirmed and subsequently fixed.

#### 6. Feature Requests & Roadmap Signals
User requests are currently focused on restoring and improving `v1.x` functionality and usability that was lost or changed in `v2.0.0`:
- **Real-time Message Injection** ([#6087](https://github.com/agentscope-ai/QwenPaw/issues/6087)): Users want the ability to interrupt an agent's internal tool-calling loop to correct its direction, suggesting a "conversational backseat driving" feature.
- **Configurable Tool Outputs** ([#5976](https://github.com/agentscope-ai/QwenPaw/issues/5976)): A request to allow users to truncate or disable the sending of full tool call results to channels, as they are "too long."
- **CIDR Whitelisting** ([#6048](https://github.com/agentscope-ai/QwenPaw/issues/6048)): An enterprise-focused request to support CIDR notation in the host whitelist for the no-authentication login feature.

Given the volume of "restore functionality" bugs, new feature development is likely to be deprioritized in the immediate next release (`v2.0.0.post3` or `v2.1.0`) in favor of stability fixes.

#### 7. User Feedback Summary
- **Dissatisfaction**: The primary sentiment is frustration with regressions. Users explicitly state that `v2.0.0` is a step backward in core usability compared to `v1.x` (specifically regarding memory search loops [#6113](https://github.com/agentscope-ai/QwenPaw/issues/6113) and broken message queues [#6088](https://github.com/agentscope-ai/QwenPaw/issues/6088)).
- **Pain Points**: The new sandbox system is a major source of friction, being described as too aggressive, difficult to disable, and causing system-level issues (process explosions, ACE pollution).
- **Positive Signal**: Despite the issues, the high volume of detailed bug reports (e.g., [#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951) with root cause analysis, [#6121](https://github.com/agentscope-ai/QwenPaw/issues/6121) with exact error messages) indicates a technically savvy and engaged user base that is invested in the project's success.

#### 8. Backlog Watch
- **Long-standing Feature Requests**: Issue [#578](https://github.com/agentscope-ai/QwenPaw/issues/578) (OpenClaw-Inspired Features) and Issue [#586](https://github.com/agentscope-ai/QwenPaw/issues/586) (Daemon and Command Dispatch) were created in March and remain closed but unaddressed in terms of full feature parity. Their revival may be considered once stability is restored.
- **Stalled PR**: PR [#5187](https://github.com/agentscope-ai/QwenPaw/pull/5187) (Windows desktop GUI automation) has been open for a month. While not strictly a backlog item, its lack of merge signals it is a complex feature being carefully evaluated.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the ZeroClaw project digest for July 15, 2026.

---

## ZeroClaw Project Digest — 2026-07-15

### Today's Overview
Project activity remains very high, with 42 issues and 50 PRs updated in the last 24 hours. The community is heavily focused on hardening the *Standard Operating Procedure (SOP)* engine and the memory subsystem, with several high-severity bugs being closed and replacement features merged. While no new releases were cut today, the milestone tracker for `v0.8.3` (#7320) is nearing closeout, suggesting a release candidate may be imminent. A major uptick in PR volume (29 merged/closed) points to a productive burst of maintainer-driven stabilization work.

### Releases
No new releases were published on 2026-07-15.

### Project Progress
29 Pull Requests were merged or closed today, signaling a strong push toward the `v0.8.3` milestone. Key advances include:

- **SOP Engine Completion:** A significant block of SOP work landed today, closing several high-priority PRs. This includes the daemon-side maintenance tick (#8391), live step execution (#8399), out-of-band approval plane with fail-closed timeout (#8304), step routing enforcement (#8430), filesystem event sources (#8461), and cron trigger wiring (#8400). This suggests the SOP feature set is reaching 5/5 maturity as tracked by issue #8288.
- **Memory Backend Expansion:** The "Hindsight" memory backend PR (#8992) was merged, adding a new external HTTP memory backend for remote persistence and vectorization. A stacked PR fixing dashboard memory counting (#8993) was also closed.
- **Governance & Infrastructure:** The project defined its initiative planning model (#9073), optimized CI image assets (#8778), and fixed a stale security advisory CI gate (#8781).

### Community Hot Topics
The most active discussions reveal deep user needs around security and data privacy:

1. **Issue #5982: Per-sender RBAC (10 comments)** — The top-discussed issue requests optional per-sender role-based access control for multi-tenant agent deployments. This is a high-risk, high-demand feature suggesting production users are hitting security isolation limits.
2. **Issue #6055: Slack Thread Context Hydration (7 comments)** — Users want the Slack channel adapter to backfill thread history on first bot mention, a required UX improvement for thread-based workflows.
3. **Issue #5287: Local-First Mode (5 comments, 2 👍)** — A high-demand request for compact prompt handling and no-tools prompting when running small local models (e.g., Ollama). This reflects a growing "local-first" user segment demanding privacy and offline capability.
4. **Issue #8973: Landlock Blocks Shell on Fedora (4 comments)** — A high-severity sandboxing regression is frustrating Linux users on Fedora.

### Bugs & Stability
Several critical bugs were addressed today, but new ones surfaced:

- **Closed (Fixed):**
    - **#8678 [S2]:** `advance_step` bypassed approval gates (SOP engine). **Fixed** via PR #8304.
    - **#8631 [S2]:** Headless deterministic SOP steps recorded as "Completed" without executing. **Fixed** via PR #8399/8400.
    - **#8073 / #8071 / #8360 [Trackers]:** Three of six `v0.8.3` child trackers closed, indicating significant stabilization.
    - **#6689 [S2]:** Production SOP audit keys were never written (silent no-op). **Fixed.**
- **Open & Critical (Still active):**
    - **#8973 [S2/Risk:High]:** Landlock sandboxing blocks shell access on Fedora. No fix PR linked yet.
    - **#7947 [S0/Security Risk]:** `execute_pipeline` bypasses per-agent tool gating (confused deputy). Marked `in-progress` but still open.
    - **#8563 [S1/Workflow Blocked]:** SOPs are not available through the web dashboard chat session.
    - **#8675 [S1/Workflow Blocked]:** Malformed tool-call arguments sent to OpenAI-format providers causing empty replies.
    - **#9052 [S1/Workflow Blocked]:** The `channel-line` feature is omitted from CI and feature aggregate coverage.

### Feature Requests & Roadmap Signals
The project's roadmap is clearly visible in today's tracker activity. The `v0.8.3` milestone is wrapping up, and the next major themes are solidifying:

- **ZeroRelay (NAT Traversal):** Tracker #8358 for a blind-forwarding relay node to serve daemons behind NAT/CGNAT is active and high-priority.
- **Persistent Memory Parity:** Tracker #8891 aims to wire ZeroClaw's persistent memory to full parity with mature peer runtimes. The recent Hindsight backend merge (#8992) is a key step.
- **Pre-Hook Skip Gates:** Issue #5607 for lightweight precondition gates on cron/SOP triggers remains accepted but blocked, likely awaiting architectural decisions.
- **Conversation/History Separation:** RFC #9048 proposes separating conversation history from agent-curated long-term memory, a design shift likely to land in `v0.9`.

**Prediction for next version:** We expect the SOP engine and the new Hindsight memory backend to be the headline features of `v0.8.3`, alongside config-driven runtime policy (#8363).

### User Feedback Summary
Real user pain points surfaced today include:

- **Multi-tenancy pain:** (#5982) Users operating single-instance deployments for multiple clients or roles are hitting security isolation limits.
- **Slack usability:** (#6055) Users find the thread mention requirement disruptive; they want automatic context backfill.
- **Local-first friction:** (#5287) Users of local models (Ollama, LM Studio) find prompt bloat and tool leakage unacceptable for their use case.
- **Config discovery issues:** (#8563) Users trying the SOP system report that configured SOP files are invisible to the agent in the web dashboard, blocking a key workflow.
- **Provider silent failures:** (#9001) Users find provider errors (e.g., Ollama connection refused) buried under generic retry messages, making debugging difficult.

**Satisfaction signals:** The rapid closure of several SOP bugs (#8678, #8631) suggests the maintainers are highly responsive to community bug reports. The new Hindsight backend (#8992) was merged quickly, indicating a feature users requested is already shipping.

### Backlog Watch
The following items need maintainer attention:

- **#5607 (Enhancement, Pre-hook skip gates):** Accepted but blocked for over 3 months. Marked "blocked" with no recent activity—needs a decision or dependency unblock.
- **#8587 (Docs, SOP examples):** Low priority, but the community is asking for richer documentation on the “star feature” (SOPs) that just shipped. Without docs, the new engine may go underutilized.
- **#7947 (Bug, Confused Deputy):** Marked `in-progress` but open for 27 days. This is the highest severity bug (S0) in the tracker and requires urgent resolution.
- **#8288 (SOP Milestone Tracker):** While several sub-PRs have merged, this tracker is still open. Maintainers should close it once all 13 capabilities are verified.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kky-wollu/agents-radar).*