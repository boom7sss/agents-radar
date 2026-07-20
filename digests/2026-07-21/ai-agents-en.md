# OpenClaw Ecosystem Digest 2026-07-21

> Issues: 350 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-20 23:04 UTC

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

Based on the GitHub data for OpenClaw on 2026-07-21, here is the project digest.

## OpenClaw Project Digest — 2026-07-21

### 1. Today's Overview
Project activity is very high, with 350 issues and 500 pull requests updated in the last 24 hours, indicating a large and actively maintained codebase. The open-to-closed ratio (227 open vs. 123 closed issues; 390 open vs. 110 merged/closed PRs) suggests a significant review bottleneck, with more work being raised than resolved. No new releases were published today, signaling a focus on stabilization and backlog management over shipping new versions. The community is deeply engaged but grappling with complex, long-standing issues around session state, message loss, and security, which remain in the top concerns.

### 2. Releases
No new releases were published today (2026-07-21). The latest available version appears to be **2026.7.1** (referenced in bug reports), but no official release notes or changelogs are present in today's data.

### 3. Project Progress
Today saw 110 PRs merged or closed. Key fixes and advancements include:
- **Platform Fixes:** `fix(macos): refresh skills when control channel reconnects` ([PR #111874](https://github.com/openclaw/openclaw/pull/111874)) and `fix(codex): stop timed-out resume process trees on Windows` ([PR #111902](https://github.com/openclaw/openclaw/pull/111902)) improve stability on specific OSes.
- **Agent & Gateway Stability:** A significant fix for gateway deadlocks caused by stuck OAuth auth-refresh (`fix(agents): hard-deadline runtime auth refresh to prevent gateway deadlock`, [PR #93952](https://github.com/openclaw/openclaw/pull/93952)) was updated and is ready for maintainer review. A PR to handle zombie gateway shutdowns (`fix(gateway): force exit on zombie shutdown + 503 healthz during shutdown`, [PR #88908](https://github.com/openclaw/openclaw/pull/88908)) is also in the review queue.
- **Feature Work:** A large PR introduces agent-scoped model provider credentials (`feat(gateway,ui): agent-scoped model provider credentials`, [PR #111796](https://github.com/openclaw/openclaw/pull/111796)), which would improve multi-agent auth management.
- **Bug Fixes:** Small but critical fixes were proposed for malformed WebSocket audio in voice calls ([PR #111771](https://github.com/openclaw/openclaw/pull/111771)) and malformed UTF-8 in provider responses ([PR #111775](https://github.com/openclaw/openclaw/pull/111775)).

### 4. Community Hot Topics
The most active discussions highlight deep-rooted session management and security concerns:
- **High-Volume Issues:**
    - **Tool Output Rendering:** [Issue #99241](https://github.com/openclaw/openclaw/issues/99241) (23 comments) describes a critical problem where tool outputs become unreadable image attachments to the agent, breaking long-running workflows. This has the highest engagement.
    - **Memory Security:** [Issue #7707](https://github.com/openclaw/openclaw/issues/7707) (19 comments) requests "Memory Trust Tagging" to prevent poisoning from untrusted sources, showing strong user concern about security.
    - **False Follow-ups:** [Issue #58450](https://github.com/openclaw/openclaw/issues/58450) (16 comments, 4 👍) details a UX issue where the agent promises a follow-up without actually starting one, a classic AI reliability problem.
- **High-Reaction PRs:**
    - **New CLI Backend:** A feature request for "Antigravity CLI" support ([PR #84527](https://github.com/openclaw/openclaw/issues/84527)) has the highest positive reaction (11 👍), driven by Google's deprecation of Gemini CLI, indicating a clear upcoming migration deadline.

### 5. Bugs & Stability
Today's data reveals a high volume of severe bugs, many of which are regressions or impact critical features like session state and message delivery.
- **P1 (Critical) Bugs:**
    - **Session/Context Death:** A regression in the `exec` tool ([Issue #102006](https://github.com/openclaw/openclaw/issues/102006)) can hang all subsequent `exec` calls after an abort. A fix PR ([PR #111902](https://github.com/openclaw/openclaw/pull/111902)) is open.
    - **Message Loss & Loops:** Repeated hard resets on a session ([Issue #63216](https://github.com/openclaw/openclaw/issues/63216)) and Telegram interruptions from heartbeats ([Issue #64810](https://github.com/openclaw/openclaw/issues/64810)) are causing significant data loss.
    - **Model Catalog Failures:** A high-severity bug ([Issue #109017](https://github.com/openclaw/openclaw/issues/109017)) shows the Anthropic model picker crashing for manually added models and never pulling new ones, directly impacting user configuration.
    - **Gateway Freezes:** A zombie gateway process that holds the port and causes silent timeouts ([Issue #56733](https://github.com/openclaw/openclaw/issues/56733)) remains open, and a fix is in review ([PR #88908](https://github.com/openclaw/openclaw/pull/88908)).
- **Chinese-Language Bug Report:** A critical bug report from a Chinese user ([Issue #108238](https://github.com/openclaw/openclaw/issues/108238)) details how a change in version 2026.7.1 causes false context overflow warnings by mis-counting `cacheRead` tokens.

### 6. Feature Requests & Roadmap Signals
The most demanded features focus on security, automation, and multi-platform support.
- **Near-Term Predictions:**
    - **Model Override for Commitments:** A request to allow model overrides in `CommitmentsConfig` ([Issue #80752](https://github.com/openclaw/openclaw/issues/80752)) mirrors existing patterns for `active-memory` and `compaction`. This is a low-cost, high-value feature that could appear in the next minor release.
    - **Agent-Scoped Credentials:** The PR for this feature ([PR #111796](https://github.com/openclaw/openclaw/pull/111796) is already up, suggesting it's slated for the next sprint.
- **Long-Term Signals:**
    - **"Everything is a Cron":** A maintainer proposal ([Issue #110950](https://github.com/openclaw/openclaw/issues/110950)) to unify heartbeats, watchers, and cron jobs into one primitive. This is a major architectural change likely planned for a future major version.
    - **AG-UI Channel:** A substantial PR ([PR #109203](https://github.com/openclaw/openclaw/pull/109203)) proposes integrating the AG-UI protocol for driving agents from browser UIs like CopilotKit, signaling an expansion beyond chat interfaces.

### 7. User Feedback Summary
Users are reporting significant pain points around reliability, security, and configuration usability.
- **Pain Points:**
    - **Unreliable Agents:** Agents promising work they don't complete ([#58450](https://github.com/openclaw/openclaw/issues/58450)) and system events swallowing user replies ([#64810](https://github.com/openclaw/openclaw/issues/64810)) are eroding trust.
    - **Security Anxiety:** Requests for secret masking ([#10659](https://github.com/openclaw/openclaw/issues/10659)) and trusted memory tagging ([#7707](https://github.com/openclaw/openclaw/issues/7707)) show users are worried about credential leaks and prompt injection, especially from third-party skills.
    - **Configuration Friction:** Users struggle with broken model catalogs ([#109017](https://github.com/openclaw/openclaw/issues/109017)), silent ignore of space messages on Google Chat ([#58514](https://github.com/openclaw/openclaw/issues/58514)), and a non-discoverable permission request in the UI for media settings ([#111971](https://github.com/openclaw/openclaw/issues/111971)).
- **Satisfaction:** The high community engagement and detailed bug reports indicate a deeply invested user base.

### 8. Backlog Watch
Several critical, long-standing issues remain open with no clear path to resolution.
- **Security Vulnerabilities:**
    - `[Feature Request] exec() sandbox isolation` ([Issue #58730](https://github.com/openclaw/openclaw/issues/58730)): Open since April 1st, this P1 issue demands sandboxing but has multiple security review tags and no linked fix PRs. This is a major security gap.
    - `Skill Permission Manifest Standard` ([Issue #12219](https://github.com/openclaw/openclaw/issues/12219)): Open since February 9th, this P2 feature request would add a `skill.yaml` permission standard. With no PR linked, this critical security feature seems stalled.
- **Stale but Critical Bugs:**
    - `[Bug]: Google Chat: Space/Group messages silently ignored` ([Issue #58514](https://github.com/openclaw/openclaw/issues/58514)): A P1 bug from March 31st that makes a primary platform feature partially unusable. It has no linked fix PR and is tagged `needs-live-repro`, suggesting it's a hard-to-diagnose platform integration issue.
    - `Gateway process alive but event loop frozen` ([Issue #56733](https://github.com/openclaw/openclaw/issues/56733)): This P1 bug from March 29th causes silent timeouts. While a fix PR ([#88908](https://github.com/openclaw/openclaw/pull/88908)) exists and is ready for review, the core issue has been open for nearly four months, indicating a difficult root cause.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the provided community digest summaries.

---

### 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is characterized by a bifurcation between rapid, feature-rich iteration and deep architectural stabilization. A core set of established projects, led by **Hermes Agent**, **OpenClaw**, and **IronClaw**, are shipping major releases (v0.19.0, imminent v1.0.0-rc.1) but are grappling with significant regressions in session state, desktop UX, and security. A second tier, including **NanoBot**, **CoPaw**, and **ZeroClaw**, shows high velocity in fixing core reasoning loops and expanding plugin ecosystems, while projects like **PicoClaw** and **NanoClaw** demonstrate targeted but critical work on platform-specific bugs and channel expansions. The landscape shows a universal, high-priority focus on security (auth, sandboxing, credential management), reliability (eliminating reasoning loops and message loss), and lowering the barrier to entry through one-click deployments and new communication channels, with several projects actively courting international (Japanese, Chinese) and mobile audiences.

### 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Latest Release | Health Score (Qualitative) |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 350 updated | 500 updated | 2026.7.1 (referenced) | **High Activity / Review Bottleneck** (390 open PRs) |
| **Hermes Agent** | 50 updated | 50 updated | v0.19.0 (Jul 20) | **High Activity / Post-Release Bug Bash** |
| **IronClaw** | 42 updated | 50 updated | v1.0.0-rc.1 (imminent) | **Intense Stabilization Crunch** (Tier B migration) |
| **ZeroClaw** | 35 updated | 50 updated | 0.8.x lineage | **High Velocity / Stability Concerns** (Windows, Sandbox) |
| **CoPaw** | 30 updated | 42 updated | QwenPaw v2.0.0.post3 | **Active Dev / Patch Release Imminent** (reasoning bugs) |
| **NanoBot** | N/A (high) | 30 updated | N/A (none today) | **Healthy / Efficient Merge Flow** |
| **NanoClaw** | 6 updated | 20 updated | N/A (none today) | **Strong Security Hardening Phase** |
| **PicoClaw** | 12 updated | 10 updated | v0.3.1 | **Stable / Elevated Risk** (Antigravity regressions) |
| **LobsterAI** | 0 | 15 updated | N/A (none today) | **High-Velocity Feature Push** (Cowork, AI Skin) |
| **NullClaw** | 0 | 1 updated | Unknown | **Maintenance Hold** |
| **TinyClaw / Moltis / ZeptoClaw** | 0 | 0 | N/A | **Inactive** |

### 3. OpenClaw’s Position

- **Advantages vs. Peers:** OpenClaw’s sheer scale of community engagement (350 issues, 500 PRs) dwarfs all other projects, indicating a vast user and contributor base. Its core reference implementation status gives it unmatched ecosystem gravity and plugin support. The deep-dive on critical edge cases (WebSocket audio, UTF-8 malformation, OS-specific process trees) shows a maturity in addressing production-level nitty-gritty details that less mature projects have not yet encountered.
- **Technical Approach Differences:** OpenClaw appears to be pursuing a highly modular, agent-scoped security model (agent-scoped credentials, memory trust tagging) earlier and more aggressively than peers. This suggests a platform-first mindset focused on enterprise-grade multi-tenant security.
- **Community Size Comparison:** OpenClaw’s 350 issues and 500 PRs in 24 hours represent an order of magnitude more activity than Hermes Agent (50/50), the next busiest project. This confirms OpenClaw is the dominant community hub, though this volume is creating a significant review bottleneck (390 open PRs vs. 110 closed/merged).

### 4. Shared Technical Focus Areas

The following requirements are emerging as universal pain points and priorities across multiple projects:

1.  **Session State & Context Reliability:**
    - **OpenClaw:** False context overflow warnings, session death after `exec` abort.
    - **Hermes Agent:** Chat tab cross-contamination (`#59305`), empty sidebar for default profile (`#67600`).
    - **IronClaw:** Stream replay loops (`#6352`), inconsistent Telegram history rendering (`#6349`).
    - **CoPaw:** Reasoning duplication across tool calls (`#6257`), agent write/delete loops (`#5961`).

2.  **Security Hardening:**
    - **OpenClaw:** Memory trust tagging, secret masking, `exec()` sandbox isolation demands.
    - **NanoBot:** Plaintext API key storage in config (`#4803`).
    - **NanoClaw:** Role management root-of-trust issues, self-approval of role changes (`#3097-3100`).
    - **ZeroClaw:** Landlock sandbox locking the host process itself (`#9204`), cron jobs resolving to `/` (`#9206`).

3.  **Multi-Platform & Cross-Platform Support:**
    - **OpenClaw:** Windows process tree fixes, Google Chat group ignoring.
    - **Hermes Agent:** `brew upgrade` TLS breakage on macOS (`#29866`).
    - **ZeroClaw:** 74 test failures on Windows (`#7462`).
    - **CoPaw:** Windows PATH separator dropping, Linux zoom not working.
    - **LobsterAI:** New silent Windows installer (`#2368`).

4.  **Chat & Communication Channel Expansion/Resilience:**
    - **NanoClaw:** LINE dialect channel (`#3096`), Dial (SMS/voice) channel (`#3041`).
    - **PicoClaw:** Matrix sync reconnection logic missing (`#3203`).
    - **NanoBot:** Feishu and Telegram text split hangs fixed.
    - **Hermes Agent:** Telegram reliability fix for unauthorized dispatches.

### 5. Differentiation Analysis

| Feature Focus | Projects Leading | Target User | Key Technical Choice |
| :--- | :--- | :--- | :--- |
| **Architectural Purity / Platform** | **OpenClaw, IronClaw, NullClaw** | Developers, Enterprise | Core reference; rewriting monolith to Reborn (IronClaw); highly granular security. |
| **Rapid Feature Velocity / Novelty** | **Hermes Agent, LobsterAI, CoPaw** | Power Users, Tinkerers | Major version releases with new UIs (multi-window, SSH remote); AI skin designer; plugin ecosystems. |
| **Stability & Reliability** | **NanoBot, NanoClaw** | Production Deployers | Efficient merge flow, strong security PR chains; focus on fixing hangs, loops, and data loss. |
| **Platform/Domain Niche** | **PicoClaw, ZeroClaw** | Mobile (PicoClaw), Security/Evaluation (ZeroClaw) | Android support (PicoClaw); Agent eval harness and sandboxing (ZeroClaw). |

### 6. Community Momentum & Maturity

- **Tier 1: Rapidly Iterating (High risk/High reward):**
    - **Hermes Agent & IronClaw:** Both are fresh off major releases or architectural rewrites. They show the highest volume of new bugs and regressions but also the most aggressive feature development. This is the "bleeding edge" tier.
- **Tier 2: Stabilizing (Core strengthening):**
    - **OpenClaw, CoPaw, ZeroClaw:** These projects have large backlogs and are actively merging fixes for core stability (reasoning, session, security) rather than shipping completely new paradigms. They are building a reliable foundation.
- **Tier 3: Steady Feature Expansion:**
    - **NanoBot, NanoClaw, PicoClaw:** These projects show a balanced focus on security, bug fixes, and targeted feature additions (new channels, localization, deployment templates). They are maturing well with controlled growth.
- **Tier 4: Maintenance Mode / Stalled:**
    - **LobsterAI:** Despite a high-velocity feature push today, the 0 issue count suggests either a very stable product or a narrower community.
    - **NullClaw, TinyClaw, Moltis, ZeptoClaw:** These are effectively inactive or in a deep maintenance hold, indicating a wide gap between the top-tier projects and the rest of the ecosystem.

### 7. Trend Signals

- **The "Reliability Wall":** The most critical trend is that the core usability issues (session context corruption, reasoning loops, message loss) are now the primary blockers for advanced users. The community is no longer asking for "more features"; they are demanding "features that work correctly every time." This signals a market maturation.
- **Security is the New Feature:** The volume of security-specific issues and PRs across *every* active project is unprecedented. From secret storage and memory poisoning to role-based access control and OAuth policy compliance, security hardening is transitioning from a "nice-to-have" to a "ship-blocker."
- **The "Default Profile" Problem:** Multiple projects (Hermes Agent, PicoClaw, OpenClaw) have bugs related to configuration, default profiles, or model catalogs breaking silently. This indicates that the complexity of configuration management is outpacing the UX design, creating a significant friction point for new users.
- **The Rise of Internationalization:** Active localization efforts (PicoClaw’s Japanese UI, CoPaw’s Chinese-language issues, NanoClaw’s Traditional Chinese README) show that the open-source agent ecosystem is becoming genuinely global, with feature demands now driven by region-specific platforms (LINE, Feishu, Qwen).
- **Value for AI Agent Developers:** The biggest value signal is the universal move toward structured evaluation and observability. **ZeroClaw’s** entire `zeroclaw eval` harness and **CoPaw’s** observability tracking (Langfuse) demonstrate that the developer community is demanding rigorous, repeatable testing and monitoring for AI agents, a trend that will likely define the next generation of tooling. **Hermes Agent’s** move to an SSH remote-backend mode also signals a shift toward treating agents as distributed services, not just local apps.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the NanoBot project digest for July 21, 2026.

---

## NanoBot Project Digest
**Date:** 2026-07-21

### 1. Today's Overview

The project is experiencing a high level of development activity, with 30 pull requests (PRs) updated in the last 24 hours, including 11 that were merged or closed. This indicates a healthy, active contributor base and a maintainer team that is efficiently processing contributions. While there are no new releases today, the focus is currently on stabilizing recent features, fixing regressions, and addressing long-standing architectural proposals like multi-agent collaboration. The high volume of work also points to ongoing tension between performance optimization (e.g., Ollama caching) and core feature development.

### 2. Releases

**None.** No new versions of NanoBot were published today.

### 3. Project Progress

The following key PRs were merged or closed today, indicating significant progress in fixing regressions and refining features:

- **[Agent Stability #4988](https://github.com/HKUDS/nanobot/pull/4988) (Fixed):** A fix was finalized to keep background/cron turns silent when the model returns an empty response, preventing unwanted “I completed the tool steps...” messages in automated workflows.
- **[Internal Turn Lifecycle #4993](https://github.com/HKUDS/nanobot/pull/4993) (Merged):** A major refactor unified the internal turn lifecycle. Subagent results and system messages now flow through the same state machine as user turns, fixing bugs where system messages bypassed prompt construction and persistence.
- **[Image Handling #5008](https://github.com/HKUDS/nanobot/pull/5008) (Merged):** Fixed a provider bug where multi-image albums (consecutive multimodal user turns) were losing all but the last image during OpenAI-compatible role alternation.
- **[Feishu Hang #4982](https://github.com/HKUDS/nanobot/pull/4982) (Fixed):** Patched a hang in the Feishu channel that occurred when trying to split text with a limit of zero or less.
- **[Telegram Hang #4981](https://github.com/HKUDS/nanobot/pull/4981) (Fixed):** Patched a similar infinite loop in the Telegram channel’s Markdown splitter under the same edge case.
- **[One-Click Deploy #4937](https://github.com/HKUDS/nanobot/pull/4937) (Fixed):** A one-click deploy template for **Render** was merged, expanding hosting options.

### 4. Community Hot Topics

Several issues and PRs generated significant discussion:

- **[Issue #1503: Dokploy Template](https://github.com/HKUDS/nanobot/issues/1503) (1 comment):** A long-standing feature request (since March) for a Dokploy one-click deploy template. This gathered renewed attention today as a matching PR was filed.
- **[Issue #5000: Multi-Agent Collaboration](https://github.com/HKUDS/nanobot/issues/5000) (1 comment):** A proposal to evolve the subagent system toward a true multi-agent framework with persistent identities and shared state. This is a significant architectural discussion representing a core future direction for the project.
- **[Issue #4867: Ollama Prompt Caching](https://github.com/HKUDS/nanobot/issues/4867) (Closed, 15 comments):** This was the most active issue, discussing the critical need to preserve exact prompt prefixes for Ollama caching. Users reported **60-second delays** per turn, calling the integration “totally unusable” with 32GB VRAM. The closing of this issue suggests a solution is now in place.
- **[PR #5007: Dokploy Deploy Template](https://github.com/HKUDS/nanobot/pull/5007) (Open):** A PR directly responding to feature request #1503, demonstrating the community’s rapid response to user-requested features.

### 5. Bugs & Stability

Activity was heavily focused on stability fixes, with the following issues and fixes being the most critical:

| Severity | Issue/Bug | Status | Details |
| :--- | :--- | :--- | :--- |
| **Critical** | QQ Channel WebSocket Reconnect Loop | Fixed | [#4767](https://github.com/HKUDS/nanobot/issues/4767) / [#4768](https://github.com/HKUDS/nanobot/pull/4768): A fixed 5-second reconnect loop with no backoff flooded logs during DNS/network failures. An exponential backoff fix has been merged. |
| **High** | Late Subagent Turn Visibility | Open | [#4954](https://github.com/HKUDS/nanobot/pull/4954) & [#4992](https://github.com/HKUDS/nanobot/pull/4992): Subagent results arriving late to the WebUI were being lost or displayed incorrectly. Two separate PRs are in progress to fix this. |
| **High** | Session Directory fsync Failure | Open | [#5004](https://github.com/HKUDS/nanobot/pull/5004): A fix is pending to tolerate `EINVAL` errors on shared filesystems when syncing session directories after atomic renames. |
| **Medium** | Feishu/Telegram Text Split Hangs | Fixed | [#4982](https://github.com/HKUDS/nanobot/pull/4982) & [#4981](https://github.com/HKUDS/nanobot/pull/4981): Infinite loops were patched when text splitter functions received a limit of zero or less. |
| **Medium** | Heartbeat Routing | Open | [#4928](https://github.com/HKUDS/nanobot/pull/4928): A bug where heartbeat messages were not correctly persisted or routed to the last user channel when using unified sessions is under active review. |

### 6. Feature Requests & Roadmap Signals

Several PRs and issues signal upcoming or potential features:

- **High Likelihood (Next Version):**
    - **Multi-Agent Evolution:** The proposal in [#5000](https://github.com/HKUDS/nanobot/issues/5000) to move from simple subagents to a true multi-agent system is a strong signal for the next major architecture push.
    - **One-Click Deploy Templates:** The merging of the Render template ([#4937](https://github.com/HKUDS/nanobot/pull/4937)) and the new PR for a Dokploy template ([#5007](https://github.com/HKUDS/nanobot/pull/5007)) indicate a priority on lowering the barrier to self-hosting.

- **Medium Likelihood:**
    - **Guarded Tool Gateway:** A new protocol ([PR #5006](https://github.com/HKUDS/nanobot/pull/5006)) is being proposed to allow channel plugins to safely execute tools under the same security context as the main agent.
    - **Custom Telegram API Base URL:** A PR ([#4919](https://github.com/HKUDS/nanobot/pull/4919)) is open to allow self-hosted Bot API servers, a direct response to a user request.
    - **Feishu `groupPolicy: listen`:** A new feature ([PR #5009](https://github.com/HKUDS/nanobot/pull/5009)) for Feishu channels to passively listen to group chats and only reply when mentioned.

### 7. User Feedback Summary

- **Pain Points:**
    - **Security & Configuration:** Users are concerned about plaintext API key storage in `~/.nanobot/config.json` ([Issue #4803](https://github.com/HKUDS/nanobot/issues/4803)), which was the most critical security issue reported. A documentation PR ([#5010](https://github.com/HKUDS/nanobot/pull/5010)) is attempting to address this by recommending env-var references.
    - **Performance:** The Ollama caching issue ([Issue #4867](https://github.com/HKUDS/nanobot/issues/4867)) highlighted severe performance degradation (60-second delays) for local LLM users, causing significant dissatisfaction. The closure of this issue suggests a fix is being implemented.

- **Positive Signals:**
    - **Feature Responsiveness:** The community appears to be responsive to user requests. The Dokploy template and custom Telegram API features were both requested by users and are now being actively developed.
    - **Stability Focus:** The large number of merged fixes for hangs, loops, and routing errors this week shows a strong effort to improve the bot's reliability.

### 8. Backlog Watch

- **[Issue #4803: Plaintext API Keys](https://github.com/HKUDS/nanobot/issues/4803) (Open, 10 days):** Despite strong community concern and a documentation PR (#5010) being filed, this core security issue remains open with no code-level fix. The `repr=False` setting is insufficient, as it does not prevent the value from being dumped to JSON. This warrants close scrutiny.
- **[Issue #1503: Dokploy Template](https://github.com/HKUDS/nanobot/issues/1503) (Open, ~139 days):** This request was largely ignored for months until a community member stepped up to implement it (PR [#5007](https://github.com/HKUDS/nanobot/pull/5007)). The delay in addressing popular deployment requests can slow adoption and frustrate non-technical users.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-21

## Today's Overview

Project activity is **elevated** with 50 updated issues and 50 updated pull requests in the last 24 hours, reflecting sustained community engagement and rapid development velocity. The project shipped **v0.19.0 (The Quicksilver Release)** yesterday, representing ~2,245 commits, ~1,065 merged PRs, and **~3,300 closed issues** since v0.18.0 — a massive milestone with 450+ community contributors. However, the release appears to have introduced or surfaced several regressions, particularly affecting Desktop session state and authentication workflows. Maintainers closed 3 issues and 8 PRs today, while 47 issues and 42 PRs remain open, indicating a healthy but backlogged triage pipeline.

## Releases

### **Hermes Agent v0.19.0 (v2026.7.20) — The Quicksilver Release**
- **Release Date:** July 20, 2026
- **Size:** ~300,000 insertions, ~36,000 deletions across ~2,465 files
- **Contributors:** 450+ community contributors

**Notable Changes (inferred from PR landscape):**
- Major desktop app enhancements including multi-window support ([#68259](https://github.com/NousResearch/hermes-agent/pull/68259))
- SSH remote-backend connection mode ([#68130](https://github.com/NousResearch/hermes-agent/pull/68130))
- Security hardening: MCP header scrubbing on redirects ([#52350](https://github.com/NousResearch/hermes-agent/pull/52350)), macOS launchd umask 077 ([#64758](https://github.com/NousResearch/hermes-agent/pull/64758))
- Cache optimization for Anthropic/Claude prompt prefixes ([#68258](https://github.com/NousResearch/hermes-agent/pull/68258))

**Breaking Changes / Migration Notes:**
- The "Restore local changes now?" prompt during `hermes update` is now critical — answering "no" can break dashboard and agent startup ([#68244](https://github.com/NousResearch/hermes-agent/issues/68244))
- `brew upgrade` continues to break `certifi`/TLS on some Homebrew setups ([#29866](https://github.com/NousResearch/hermes-agent/issues/29866))
- Cron job `update_job` API has a whitelist drift for `attach_to_session` — dashboard users may be blocked ([#67706](https://github.com/NousResearch/hermes-agent/issues/67706))

## Project Progress

### Merged/Closed Today (8 PRs)
| PR | Summary | Area |
|----|---------|------|
| [#68256](https://github.com/NousResearch/hermes-agent/pull/68256) | Configurable API server request body limit | CLI, Gateway |
| [#68249](https://github.com/NousResearch/hermes-agent/pull/68249) | Register Vertex AI provider in CLI menus | CLI, Providers |
| [#67885](https://github.com/NousResearch/hermes-agent/pull/67885) | Fix TUI Nix build: include `apps/shared` sources | TUI, Nix |
| [#67090](https://github.com/NousResearch/hermes-agent/pull/67090) | Fix TUI Nix source filter (duplicate fix) | TUI, Nix |
| [#52350](https://github.com/NousResearch/hermes-agent/pull/52350) | Scrub secret headers on MCP cross-origin redirects | Security, MCP |

### Key Fixes Advanced
- **Desktop session state regressions:** Fix avoids false remote gateway reauthentication ([#68250](https://github.com/NousResearch/hermes-agent/pull/68250))
- **Anthropic caching:** Static system prompt prefix caching to reduce token costs ([#68258](https://github.com/NousResearch/hermes-agent/pull/68258))
- **Telegram reliability:** Authorize llm agent replies, reject unauthorized dispatches ([#68255](https://github.com/NousResearch/hermes-agent/pull/68255))
- **Dashboard auth:** Accept `HERMES_DASHBOARD_PUBLIC_URL` hostname in Host-header validation ([#68251](https://github.com/NousResearch/hermes-agent/pull/68251))
- **Windows worktree:** Preserve worktree quarantine on Windows ([#68252](https://github.com/NousResearch/hermes-agent/pull/68252))

## Community Hot Topics

### Most Active Issues (by comment count)

1. **[#67600](https://github.com/NousResearch/hermes-agent/issues/67600) — Desktop session sidebar empty for `default` profile** (9 comments)
   - **Root cause:** Backend confirms rows are served, yet Desktop shows empty sidebar only for `default` profile
   - **Community frustration:** Users with single-profile setups are fully blocked

2. **[#59305](https://github.com/NousResearch/hermes-agent/issues/59305) — Chat tab messages leak across sessions** (6 comments)
   - **Critical UX:** Context corruption — messages from Tab A appear in Tab B
   - **P1 priority; no fix PR yet**

3. **[#66868](https://github.com/NousResearch/hermes-agent/issues/66868) — Cron jobs fail 401 on primary model call** (5 comments)
   - **Provider collapses to "custom"** outside runtime session context
   - Duplicate of earlier fix paths — indicates incomplete root cause resolution

4. **[#67762](https://github.com/NousResearch/hermes-agent/issues/67762) — `agent.session_estimated_cost_usd` resets on gateway restart** (5 comments)
   - **Blocker for billing:** Cost tracking not rehydrated from SQLite
   - Affects any downstream feature displaying running session costs

5. **[#68244](https://github.com/NousResearch/hermes-agent/issues/68244) — Update with "no" to restore local changes breaks dashboard** (4 comments)
   - **New regression in v0.19.0:** Answering "n" during `hermes update` permanently breaks agent startup

### Most Active Pull Requests
- [#68259](https://github.com/NousResearch/hermes-agent/pull/68259) — **Multi-window Desktop support** (new feature, fresh PR, high interest)
- [#68130](https://github.com/NousResearch/hermes-agent/pull/68130) — **SSH remote-backend mode** (VS Code Remote-SSH analog for Hermes)
- [#68258](https://github.com/NousResearch/hermes-agent/pull/68258) — **Anthropic cache breakpoint** (cost-saving, P0 bugfix)

## Bugs & Stability

### Critical / P0
| Issue | Description | Status |
|-------|-------------|--------|
| [#68244](https://github.com/NousResearch/hermes-agent/issues/68244) | Update with "n" to restore local changes → complete agent failure | Open |
| [#68196](https://github.com/NousResearch/hermes-agent/issues/68196) | Cold Desktop resume duplicates persisted transcript in SQLite | Open |
| [#29866](https://github.com/NousResearch/hermes-agent/issues/29866) | `brew upgrade` breaks `certifi` — all gateways fail TLS | Open (long-standing) |

### High (P1-P2) — Regressions in v0.19.0
| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#67600](https://github.com/NousResearch/hermes-agent/issues/67600) | Desktop sidebar empty for default profile | No |
| [#59305](https://github.com/NousResearch/hermes-agent/issues/59305) | Chat tab message cross-contamination | No |
| [#68250](https://github.com/NousResearch/hermes-agent/pull/68250) | False reauthentication on slow remote gateways | Yes (PR open) |
| [#67453](https://github.com/NousResearch/hermes-agent/issues/67453) | Custom provider `key_env` only works for first session after boot | No |

### Security Concerns
| Issue | Description | Severity |
|-------|-------------|----------|
| [#67723](https://github.com/NousResearch/hermes-agent/issues/67723) | Nix `workspaceClosure` path-traversal → `/etc/passwd` access | **CRITICAL** |
| [#68055](https://github.com/NousResearch/hermes-agent/issues/68055) | `_secure_dir()` chmods through symlinks — corrupts shared skills dir permissions | Medium |
| [#52350](https://github.com/NousResearch/hermes-agent/pull/52350) | MCP secret headers leak on cross-origin redirects (now fixed/merged) | High (fixed) |

## Feature Requests & Roadmap Signals

### Top User-Requested Features This Week
1. **[#67316](https://github.com/NousResearch/hermes-agent/issues/67316) — Skills callable mid-prompt** (4 comments)
   - Users must delete prior text to invoke skills — requests inline `/skill` invocation
   - **Likely next release:** High-value UX improvement, community frustration evident

2. **[#67546](https://github.com/NousResearch/hermes-agent/issues/67546) — Headless memory write-approval + CLI (`hermes memory`)**
   - Staging writes, agent-free approval, dedicated CLI tooling
   - **Next release candidate:** PR #61090 already implements `MemoryManager` for approval

3. **[#41075](https://github.com/NousResearch/hermes-agent/issues/41075) — `hermes sessions archive` and `hermes sessions compress`**
   - Safe archival path between "keep everything" and "delete forever"
   - **Backlog:** No movement since filed 2026-06-07

### Predictions for v0.20.0
- **Multi-window Desktop** ([#68259](https://github.com/NousResearch/hermes-agent/pull/68259)) — already submitted, likely to land
- **SSH remote-backend mode** ([#68130](https://github.com/NousResearch/hermes-agent/pull/68130)) — major infrastructure feature
- **Mid-prompt skill invocation** — high community demand, relatively contained change
- **Memory write-approval CLI** — PR #61090 is already threaded through `MemoryManager`

## User Feedback Summary

### Pain Points (Active Frustration)
- **"Session context keeps breaking"** — multiple users report chat tabs mixing content ([#59305](https://github.com/NousResearch/hermes-agent/issues/59305)), messages delivered to wrong sessions ([#61573](https://github.com/NousResearch/hermes-agent/issues/61573))
- **"My default profile just shows empty"** — post-v0.19.0 update, single-profile Desktop users completely blocked ([#67600](https://github.com/NousResearch/hermes-agent/issues/67600))
- **"Skills are unusable mid-conversation"** — must delete entire chat history to call a skill ([#67316](https://github.com/NousResearch/hermes-agent/issues/67316))
- **"Cost tracking resets on restart"** — users relying on session cost estimates are misled ([#67762](https://github.com/NousResearch/hermes-agent/issues/67762))

### Use Cases Highlighted
- **Non-English transcription** — Groq STT missing language param affects Hebrew, other languages ([#55551](https://github.com/NousResearch/hermes-agent/issues/55551))
- **Headless/automated environments** — cron jobs failing 401, credential pool exhaustion ([#66868](https://github.com/NousResearch/hermes-agent/issues/66868), [#46511](https://github.com/NousResearch/hermes-agent/issues/46511))
- **Multi-machine workflows** — SSH remote-backend mode strongly desired for agent-as-service pattern ([#68130](https://github.com/NousResearch/hermes-agent/pull/68130))

### Satisfaction Signals
- **450+ community contributors** to v0.19.0 indicates strong engagement
- Multi-window Desktop and SSH remote mode receiving positive early feedback
- Community contributing thorough security reviews (path traversal, MCP header leaks)

## Backlog Watch

### Long-Unanswered Issues Needing Maintainer Attention
| Issue | Age | Description | Status |
|-------|-----|-------------|--------|
| [#7135](https://github.com/NousResearch/hermes-agent/issues/7135) | **102 days** | Hindsight local plugin on macOS Apple Silicon — daemon timeout, MPS path forced | No response since 2026-05-13 |
| [#29866](https://github.com/NousResearch/hermes-agent/issues/29866) | **60 days** | `brew upgrade` breaks `certifi` — TLS fails for all platforms | No fix merged; workarounds discussed |
| [#41075](https://github.com/NousResearch/hermes-agent/issues/41075) | **44 days** | Feature request: `hermes sessions archive` / `sessions compress` | No maintainer response |
| [#55369](https://github.com/NousResearch/hermes-agent/issues/55369) | **21 days** | Union integer|string tool args drop leading zeros ("007" → 7) | No decision |
| [#57626](https://github.com/NousResearch/hermes-agent/issues/57626) | **17 days** | "Skill library update" injection pollutes sub-agent sessions | Needs repro |

### Stale PRs Needing Review
| PR | Age | Description | Status |
|----|-----|-------------|--------|
| [#20379](https://github.com/NousResearch/hermes-agent/pull/20379) | **77 days** | TUI widget-grid layout engine + theme engine | No review since 2026-05-05 |
| [#31519](https://github.com/NousResearch/hermes-agent/pull/31519) | **56 days** | LSP subprocess StreamReader limit to 16 MiB | No review since 2026-05-24 |
| [#64758](https://github.com/NousResearch/hermes-agent/pull/64758) | **5 days** | macOS launchd umask 077 for security | No review since submission |
| [#65082](https://github.com/NousResearch/hermes-agent/pull/65082) | **5 days** | Preserve Desktop image filenames + source actions | No review since 2026-07-15 |

---

**Project Health Summary:** Hermes Agent is experiencing rapid growth with v0.19.0, but the release wave has introduced regressions that block a significant portion of the Desktop userbase. The volume of security-related PRs and issues (path traversal, credential leaks, TLS breakage) suggests a need for focused hardening sprints. Community engagement remains strong, with users actively filing detailed bug reports and contributing PRs. The backlog of unanswered feature requests (44+ days) and stale PRs (77 days) indicates maintainer bandwidth is a bottleneck relative to community output.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-21

## 📊 Today's Overview

PicoClaw sees moderate activity today with 12 issues and 10 PRs updated in the last 24 hours. The project maintains a healthy balance of bug fixes, feature work, and community engagement, though 8 open issues are active. A significant cluster of critical bugs surfaced around the Antigravity OAuth provider and tool execution stability, partly offset by merged fixes for MCP tool visibility and config integrity. The community is actively contributing localization (Japanese) and provider model updates, indicating sustained developer interest. Overall project health is **stable with elevated risk** due to newly reported regressions on the `main` branch.

## 🚀 Releases

**No new releases** today. The project continues on `main` branch development toward the next cut after v0.3.1.

## ✅ Project Progress

**Merged/Closed PRs (5):**

| PR | Description | Significance |
|---|---|---|
| [#3277](https://github.com/sipeed/picoclaw/pull/3277) | fix: deferred-tool visibility heal + sliding TTL + SSE tool-call index fix | **High** — fixes a critical issue where MCP tools disappear after restart, causing agent confusion |
| [#3192](https://github.com/sipeed/picoclaw/pull/3192) | chore: bump goreleaser base images from alpine:3.21 → 3.23 | Low — infrastructure hygiene |
| [#3191](https://github.com/sipeed/picoclaw/pull/3191) | chore: remove duplicate build/ entry in .gitignore | Low — config cleanup |
| [#276](https://github.com/sipeed/picoclaw/pull/276) | docs: polish README branding and readability | Low — documentation polish |
| [#277](https://github.com/sipeed/picoclaw/pull/277) | feat: update `make deps` logic to prevent frequent dependency updates | Medium — improves developer experience |

**Notable:** The [#3277 tool fix](https://github.com/sipeed/picoclaw/pull/3277) is particularly significant — it addresses a systemic stability issue where deferred MCP tools would silently disappear from agent requests after any restart or TTL expiry, even though session history referenced them. This has been a long-standing pain point.

## 🔥 Community Hot Topics

**Most Active Issues:**

1. **[#3182 — Android version bug](https://github.com/sipeed/picoclaw/issues/3182)** (4 comments, open since June 26)  
   *User cannot launch PicoClaw service on Android despite full permissions and settings access. Includes screenshots.*  
   **Underlying need:** Mobile deployment support remains a gap — users want to run PicoClaw agents on devices beyond desktops/servers.

2. **[#3203 — Matrix sync loop has no reconnection logic](https://github.com/sipeed/picoclaw/issues/3203)** (3 comments, 1 reaction)  
   *Matrix `/sync` long-poll dies silently after any network disruption; systemd restart doesn't trigger because main process stays alive.*  
   **Underlying need:** Production-grade resilience for messaging channels — users need self-healing connections, not manual restarts.

3. **[#3274 — Antigravity provider regression on main](https://github.com/sipeed/picoclaw/issues/3274)** (1 comment, filed hours ago)  
   *INVALID_ARGUMENT error with tool_schema_transform "simple" that worked in v0.3.1 — regression on main branch.*  
   **Underlying need:** Bleeding-edge users on `main` are hitting integration breakage, signaling need for stricter CI on provider schemas.

**Most Active PRs:**  
- [#3273 — Japanese localization](https://github.com/sipeed/picoclaw/pull/3273) — community contributor honbou translating all 968 lines of UI strings  
- [#3271 — Update default model names](https://github.com/sipeed/picoclaw/pull/3271) — refresh across 9 providers reflecting latest model IDs

## 🐛 Bugs & Stability

**Critical Regressions (2):**

| Issue | Description | Severity | Fix exists? |
|---|---|---|---|
| [#3274](https://github.com/sipeed/picoclaw/issues/3274) | Antigravity provider: `INVALID_ARGUMENT` on main (85dcfcc) — tool_schema_transform "simple" no longer sufficient in v0.3.1→main | 🔴 **High** — blocks all Antigravity usage on development branch | ❌ No |
| [#3278](https://github.com/sipeed/picoclaw/issues/3278) | Antigravity OAuth login blocked by Google "doesn't comply with Google's OAuth 2.0 policy" | 🔴 **High** — breaks new user onboarding for Antigravity provider | ❌ No |

**Moderate Bugs (2):**

| Issue | Description | Severity | Fix exists? |
|---|---|---|---|
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP server connection failure hangs agent loop, stopping chat replies | 🟡 **Medium** — degrades user experience significantly | ❌ No |
| [#3268](https://github.com/sipeed/picoclaw/issues/3268) | `exec` tool requires `action` parameter with no default, causing AI failures when omitted | 🟡 **Medium** — predictable AI agent failure | ❌ No |

**Low Severity (1):**

| Issue | Description | Severity | Fix exists? |
|---|---|---|---|
| [#3275](https://github.com/sipeed/picoclaw/issues/3275) | `model_list` entry loses `api_keys` after config rewrites via Launcher WebUI/auth login | 🟢 **Low** — data corruption risk but workaround exists | ❌ No (reported today) |

**Notable:** The Antigravity provider has **two concurrent critical issues** (#3274 and #3278) filed by the same user, suggesting systematic problems with that integration path. The OAuth policy compliance issue (#3278) may require changes to the application's consent screen configuration in Google Cloud Console.

## 💡 Feature Requests & Roadmap Signals

**Submitted today:**

| Feature | Issue | Likelihood for next release |
|---|---|---|
| **Japanese localization** (WebUI + Launcher) | [#3272](https://github.com/sipeed/picoclaw/issues/3272) | 🟢 **Very high** — PR #3273 already submitted with complete translation |
| **Externally-managed gateway support** (systemd detection) | [#3276](https://github.com/sipeed/picoclaw/issues/3276) | 🟡 **Medium** — niche but important for server deployments |
| **DashScope TTS + WeChat audio sending** | PR [#3270](https://github.com/sipeed/picoclaw/pull/3270) | 🟢 **High** — complete implementation in PR form |
| **Model name refresh** (9 providers) | PR [#3271](https://github.com/sipeed/picoclaw/pull/3271) | 🟢 **Very high** — essential for compatibility with latest LLMs |

**Prediction:** The next release (v0.3.2?) will likely include:
- Japanese localization (PR #3273)
- Updated provider model lists (PR #3271)
- DashScope TTS support (PR #3270)
- Tool visibility fix (PR #3277, already merged)

## 💬 User Feedback Summary

**Pain Points:**
- **Mobile support frustration** — Issue #3182 has been open for 25 days with no resolution. Android users cannot run PicoClaw as a service.
- **Resilience anxiety** — Multiple bugs (#3203, #3269) show that PicoClaw agents are vulnerable to network/service disruptions without auto-recovery.
- **Provider integration friction** — Users report specific compatibility issues Gemini via OpenAI format (closed #3230), and now Antigravity regressions on `main`.
- **Configuration fragility** — WebUI config rewrites can silently drop critical fields like `api_keys` (#3275).

**Positive Signals:**
- Japanese localization PR demonstrates international community engagement (volunteer submitting 968-line translation).
- Power users are running PicoClaw in production-like scenarios (systemd-managed gateways, server VMs), indicating growing maturity expectations.

## ⏳ Backlog Watch

**Stale issues needing maintainer attention:**

| Issue | Age | Problem |
|---|---|---|
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) — Matrix sync reconnection | 19 days, 1 👍 | Stale-labelled but unresolved — a fundamental resilience gap for Matrix channel users |
| [#3182](https://github.com/sipeed/picoclaw/issues/3182) — Android version | 25 days, no reaction | Oldest open issue without roadmap commitment — mobile support question unaddressed |
| [#3254](https://github.com/sipeed/picoclaw/pull/3254) — Model resolution fix PR | 8 days open | Stale-labelled PR that improves provider selection logic — waiting for review |

**Action recommended:** The maintainer team should triage the two Antigravity regressions (#3274, #3278) as top priority, as they affect all users on the development branch. The stale PR #3254 and stale issue #3203 deserve review decisions this week to reduce backlog drag.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-21

## 1. Today's Overview
Today marks a **high-activity day** for NanoClaw, with **20 PRs** and **6 Issues** updated in the last 24 hours. The project is in a **strong maintenance and security-hardening phase**, with 6 PRs merged/closed while 14 remain open for review. A concentrated cluster of **critical security issues** around the role and approval system (Issues #3097–#3100) has generated a corresponding wave of fix PRs (#3101–#3104), indicating responsive core-team engagement. Meanwhile, ongoing channel ecosystem expansion continues with LINE integration (#3096, #2918) and new channel adapters for Dial (#3041, #3050). No new releases were cut today, but the volume of merged fixes suggests a release may be approaching.

## 2. Releases
**None.** No new releases were published today.

## 3. Project Progress
**6 PRs were merged or closed today:**
- [#3110 [CLOSED] feat(container): bake caldav-mcp into the agent image](https://github.com/nanocoai/nanoclaw/pull/3110) — Pins `caldav-mcp@0.8.0` into the base agent Docker image, enabling the `/add-caldav-tool` skill to work without user-side npm installs. Author: cfis.
- [#3108 [CLOSED] fix(chat-sdk-bridge): rehydrate inbound attachments when adapters carry no fetchData](https://github.com/nanocoai/nanoclaw/pull/3108) — Fixes silent attachment byte loss for Telegram voice notes and other Chat SDK-bridged channels where `fetchData` is missing. Author: cfis.
- [#3107 [CLOSED] fix(add-whatsapp-cloud): copy the adoption module and document the row re-key](https://github.com/nanocoai/nanoclaw/pull/3107) — Companion fix to #3106 for WhatsApp Cloud's `messaging_groups` row re-key migration from #2913. Author: glifocat.
- [#3087 [CLOSED] fix(whatsapp): engage mention-mode wirings on typed @-mentions in groups](https://github.com/nanocoai/nanoclaw/pull/3087) — Fixes WhatsApp group @-mention detection to properly trigger mention-mode behavior. Author: glifocat.
- [#1110 [CLOSED] fix: update container-runtime tests to match implementation](https://github.com/nanocoai/nanoclaw/pull/1110) — Test suite maintenance for container runtime. Author: spencer-whitman.
- [#2642 [CLOSED] fix(add-telegram): pin chat-adapter to 4.26.0 to match installed chat](https://github.com/nanocoai/nanoclaw/pull/2642) — Resolves `peerDependency` version conflict between the `/add-telegram` skill and root `package.json`. Author: yairixStudio.

**Key advances:** Attachment handling for Telegram/iMessage is now repaired, WhatsApp group mention behavior is corrected, and the CalDAV MCP server is shipped in-box.

## 4. Community Hot Topics
- **[#3106 [OPEN] fix(whatsapp-cloud): adopt messaging_groups rows stranded by the instance re-key](https://github.com/nanocoai/nanoclaw/pull/3106)** — This PR and its companion #3107 are the most technically nuanced discussion today, addressing a silent data loss bug for existing WhatsApp Cloud users upgrading from before the #2913 fix. The underlying need is **upgrade-path safety**: users who already had WhatsApp configured should not lose their messaging group mappings after a skill update.
- **[#3100 [OPEN] Revoking the sole remaining owner is not prevented](https://github.com/nanocoai/nanoclaw/issues/3100)** — Authored by k-fls, this critical security issue has generated the most downstream fix PRs (#3101–#3104). The community is focused on establishing a proper **root of trust** in the roles system.
- **[#3096 [OPEN] feat: Add /add-line skill for LINE Official Account channel support](https://github.com/nanocoai/nanoclaw/issues/3096)** — By joshm1230212, this feature request for Japan/Taiwan/Thailand's dominant messenger has a corresponding open PR (#2918) and a Traditional Chinese README (#2950), signaling strong community interest from the Asia-Pacific region.

## 5. Bugs & Stability
**Three security-critical bugs reported today, all with fix PRs already attached:**

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Critical** | [#3100](https://github.com/nanocoai/nanoclaw/issues/3100) | Revoking the last global `owner` destroys root of trust; no guard in `ncl roles revoke` | [#3104](https://github.com/nanocoai/nanoclaw/pull/3104) — refuses last-owner revoke |
| **High** | [#3099](https://github.com/nanocoai/nanoclaw/issues/3099) | Approval routing can send role-change approval cards **to the target user** (self-approval); higher privilege actions gated on lower-privileged approvers | [#3103](https://github.com/nanocoai/nanoclaw/pull/3103) — privilege-proportional routing |
| **High** | [#3097](https://github.com/nanocoai/nanoclaw/issues/3097) | `ncl roles grant --role admin` without `--group` silently grants **global** admin, enabling accidental privilege escalation | [#3101](https://github.com/nanocoai/nanoclaw/pull/3101) — requires explicit `--scope` |
| **Medium** | [#3098](https://github.com/nanocoai/nanoclaw/issues/3098) | Approval cards echo raw CLI commands instead of human-readable effect descriptions, making informed approval difficult | [#3102](https://github.com/nanocoai/nanoclaw/pull/3102) — structured role-change cards |
| **Medium** | [#3105](https://github.com/nanocoai/nanoclaw/issues/3105) | Existing WhatsApp Cloud installs after #2913 re-key have orphaned `messaging_groups` rows, silently muting WhatsApp | [#3106](https://github.com/nanocoai/nanoclaw/pull/3106), [#3107](https://github.com/nanocoai/nanoclaw/pull/3107) — adoption migration |

**Additional fix in progress:** [#3044](https://github.com/nanocoai/nanoclaw/pull/3044) (open since July 14) repairs the root cause of dropped inbound attachment bytes from Telegram voice/audio notes, complementing the merged #3108.

## 6. Feature Requests & Roadmap Signals
- **LINE Official Account channel** ([#3096](https://github.com/nanocoai/nanoclaw/issues/3096), [#2918](https://github.com/nanocoai/nanoclaw/pull/2918)) — The most requested channel feature today. The `/add-line` skill would cover Japan, Taiwan, and Thailand. **Prediction: likely to land in the next minor release** given the PR has been open since July 3 and the author has also contributed a Traditional Chinese README.
- **Dial channel (SMS + AI voice calls)** ([#3041](https://github.com/nanocoai/nanoclaw/pull/3041), [#3050](https://github.com/nanocoai/nanoclaw/pull/3050)) — Two PRs from OmriBenShoham adding a new communication channel for SMS and AI voice calls through the Dial platform. The `runChannelSkill` wizard integration suggests this is nearly ready.
- **Local voice transcription** ([#2459](https://github.com/nanocoai/nanoclaw/pull/2459)) — Open since May 13, this skill adds on-device whisper.cpp transcription for all Chat SDK channels. It was last updated today, suggesting active iteration. No cloud API dependency is a strong selling point.

## 7. User Feedback Summary
- **Pain point — upgrade migration gaps:** Multiple issues today ([#3105](https://github.com/nanocoai/nanoclaw/issues/3105), [#3108](https://github.com/nanocoai/nanoclaw/pull/3108)) reflect user frustration with **silent data loss or service muting after skill updates**, particularly for WhatsApp Cloud and attachment handling. The community appreciates the quick fix turnaround (same-day PRs).
- **Security consciousness:** The cluster of role/approval issues from k-fls indicates a **security-minded power user base** that is stress-testing the authorization system. The "no root of trust" finding ([#3100](https://github.com/nanocoai/nanoclaw/issues/3100)) represents a real-world lockout risk that could cause significant user dissatisfaction if shipped.
- **Channel ecosystem demand:** Requests for LINE and Dial show users want to **use NanoClaw with region-dominant platforms** beyond Slack/Telegram/Discord. The Traditional Chinese README contribution (#2950) signals growing international adoption.

## 8. Backlog Watch
- **[#2459 — feat(skill): add /add-voice-transcription-chat-sdk](https://github.com/nanocoai/nanoclaw/pull/2459)** — Open since **May 13** (69 days). This is a substantial feature PR for on-device voice transcription with no cloud dependency. It received an update today (July 20) but needs a maintainer review pass. Risk of merge conflicts growing.
- **[#3044 — fix(channels): download inbound attachments that lost fetchData](https://github.com/nanocoai/nanoclaw/pull/3044)** — Open since **July 14** (7 days). While the companion #3108 was merged today, this PR appears to address the deeper root cause. Needs triage to determine if it supersedes or complements the merged fix.
- **[#3060 — fix(container): add --init to agent container spawn args](https://github.com/nanocoai/nanoclaw/pull/3060)** — Open since July 16, this fixes zombie process accumulation in containerized agents by adding `--init` to `docker run`. A clear stability fix with documentation updates, awaiting merge.
- **[#3095 — docs: rewrite branch maintenance guide for the registry-branch model](https://github.com/nanocoai/nanoclaw/pull/3095)** — Pure documentation, but important for community contributors navigating the new branching strategy. Low review burden.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-21

## 1. Today's Overview
The NullClaw project exhibited very low activity in the last 24 hours. No issues were updated, and the sole pull request (PR #956) is a long-running dependency update that has been open for over a month. No new releases were published, and no code merges or closures occurred. The project appears to be in a maintenance hold pattern with minimal community engagement.

## 2. Releases
*No new releases were published in the last 24 hours. The latest release date is unknown from the provided data.*

## 3. Project Progress
- **Merged/closed PRs today:** 0  
- **Features advanced or fixed:** None.  
- The only PR updated today is still open (#956).

## 4. Community Hot Topics
- **PR #956: [dependencies, docker] ci(deps): bump alpine from 3.23 to 3.24**  
  *(Created: 2026-06-15 | Updated: 2026-07-20 | Comments: 0 | Reactions: 0)*  
  [GitHub Link](https://github.com/nullclaw/nullclaw/pull/956)  
  This PR, submitted by Dependabot, has been open for over a month without comments or maintainer action. It reflects a routine but essential security/maintenance update to the base Docker image. The lack of interaction may indicate maintainer bandwidth constraints or a backlog in reviewing automated dependency bumps.

## 5. Bugs & Stability
- **New bugs reported today:** 0  
- **Crashes, regressions, or stability issues:** None detected in the 24-hour window.  
- **Priority assessment:** No active incidents.

## 6. Feature Requests & Roadmap Signals
- No user-submitted feature requests or roadmap signals were observed in the reported data.  
- The only technical change is the Docker base image upgrade (alpine 3.23 → 3.24), which is a maintenance/security operation rather than a feature addition.  
- Prediction: The next release, if any, will likely focus on dependency updates and CI infrastructure stability rather than new capabilities.

## 7. User Feedback Summary
- **Reported user pain points:** None in this period.  
- **Use cases / satisfaction indicators:** No user comments or reactions were captured.  
- The project's public engagement appears very low, with zero community interaction on all tracked items.

## 8. Backlog Watch
- **PR #956 – [dependencies, docker] ci(deps): bump alpine from 3.23 to 3.24**  
  Open since 2026-06-15 (36 days). No maintainer review, no comments, no merge.  
  [GitHub Link](https://github.com/nullclaw/nullclaw/pull/956)  
  This is the most concerning item: a non-controversial, automated dependency update languishing without action. Extended delay on such PRs can lead to security gaps or CI failures as base images age. **Recommended action:** Review and merge or close this PR within the coming week.

---

**Overall Project Health:** *Quiet / maintenance mode.* No active development, bug fixes, or community discussion observed. The sole open PR requires maintainer attention to avoid accumulation of technical debt.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-21

## Today's Overview

IronClaw is deep in a major architectural transition — the "Tier B" migration away from the legacy v1 monolith (`src/`) toward the Reborn stack. Activity is extremely high: **42 issues updated in 24 hours** (39 open, 3 closed) and **50 PRs updated** (23 open, 27 merged/closed), reflecting an intense, coordinated push toward the v1.0.0-rc.1 milestone. The core team is systematically eliminating technical debt (e.g., `InMemoryTurnStateStore` retirement, `local_trigger_access` removal) while simultaneously crushing a bug bash of 15+ P1/P2 issues reported in the last two days. The project shows healthy velocity but is clearly in a stabilization crunch.

## Releases

No new releases today. The last recorded release candidate work is tracked in PR [#5598](https://github.com/nearai/ironclaw/pull/5598) (release automation, still open) and PR [#6370](https://github.com/nearai/ironclaw/pull/6370) (preparing `v1.0.0-rc.1` changelog).

## Project Progress

**27 PRs were merged or closed today**, marking significant architectural progress:

- **Legacy v1 retirement**: PR [#6375](https://github.com/nearai/ironclaw/pull/6375) (merged) deleted the entire `src/` legacy monolith and cut deployments over to Reborn. PR [#6368](https://github.com/nearai/ironclaw/pull/6368) (merged) decoupled the migration tool from the legacy crate — both critical Tier B blockers.
- **Codebase cleanup**: PR [#6372](https://github.com/nearai/ironclaw/pull/6372) removed 131 stale docs/drafts. PR [#6373](https://github.com/nearai/ironclaw/pull/6373) deleted orphan WebUI v2 gitignore.
- **Architecture simplification**: PR [#6367](https://github.com/nearai/ironclaw/pull/6367) collapsed `TurnStateDurabilityPolicy` to write-behind-only (Step 5b of #6263). PR [#6328](https://github.com/nearai/ironclaw/pull/6328) expanded `Invocation` as the pre-auth input carrier for the "authority fold" capability model.
- **Auth and Slack improvements**: PR [#6169](https://github.com/nearai/ironclaw/pull/6169) deleted the Slack connection-epoch slot. PR [#6251](https://github.com/nearai/ironclaw/pull/6251) made OAuth denial lifecycle channel-neutral.
- **CI/release pipeline**: PR [#6354](https://github.com/nearai/ironclaw/pull/6354) built release binaries with cargo-dist for `v1.0.0-rc.1`.
- **Bug fixes**: PR [#6366](https://github.com/nearai/ironclaw/pull/6366) fixed the onboard navigation bug (#6360). PR [#6337](https://github.com/nearai/ironclaw/pull/6337) fixed chat streams staying alive and avoiding replay loops.

## Community Hot Topics

The most active discussions this week revolve around architectural decisions and the Tier B transition:

**[#6263 — §4.3 final store consolidation: retire InMemoryTurnStateStore](https://github.com/nearai/ironclaw/issues/6263)** — *9 comments, 0 reactions*
The top discussion this week. This is the "last DEBT entry" in the InMemory store ratchet. The thread debates whether the no-livelock evidence from Slice 0 oracle results is sufficient to finally delete ~4,260 lines of in-memory turn state code. Core developer @ilblackdragon is driving this as the capstone of the A1-A8 slice consolidation work.

**[#6190 — Multiple conflicting error messages for a single failed request](https://github.com/nearai/ironclaw/issues/6190)** — *4 comments, bug_bash_P2*
Users are seeing both a streaming error and a model context limit error displayed simultaneously for the same failure. The community is asking for consolidated error display. No fix PR linked yet.

**[#6189 — Retryable stream error leaves completed response in failed state](https://github.com/nearai/ironclaw/issues/6189)** — *4 comments, bug_bash_P2*
A response that appears to have completed successfully shows a red error banner about "Replay unavailable." PR [#6337](https://github.com/nearai/ironclaw/pull/6337) addresses this by requiring real provider terminal markers and keeping streams alive properly.

## Bugs & Stability

**15 bugs reported in the last 24 hours**, all by QA engineers Joe RLO and italic-jinxin. Severity ranking:

### P1 (Critical)
- **[#6360 — Provider onboarding has no way to navigate back](https://github.com/nearai/ironclaw/issues/6360)** — CLI prompt is a terminal state; users can only continue or cancel entirely. *Fix: PR [#6366](https://github.com/nearai/ironclaw/pull/6366) (merged today).*
- **[#6348 — Gmail extension auto-authorized without user consent after reinstall](https://github.com/nearai/ironclaw/issues/6348)** — Security/privacy violation; no OAuth prompt on reinstall.

### P2 (Major)
- **[#6350 — Assistant unexpectedly switches response language](https://github.com/nearai/ironclaw/issues/6350)** — English prompts get Ukrainian responses.
- **[#6351 — Run fails with checkpoint unavailable/unreachable errors](https://github.com/nearai/ironclaw/issues/6351)** — Multi-tool requests fail before producing any response.
- **[#6353 — Long assistant messages truncated without expansion option](https://github.com/nearai/ironclaw/issues/6353)** — Large tables/reports cut off with no way to see full content.
- **[#6352 — Streamed response replays in a loop after returning to page](https://github.com/nearai/ironclaw/issues/6352)** — Leave and return to chat causes infinite replay of old chunks.
- **[#6349 — Telegram chat history rendered inconsistently in WebUI](https://github.com/nearai/ironclaw/issues/6349)** — Fragmented layout, duplicated prompts, large gaps.
- **[#6362 — Duplicate "Test connection" and "Fetch models" flows](https://github.com/nearai/ironclaw/issues/6362)** — Both buttons do the same thing, confusing users.
- **[#6335 — Host-authored capability remediation is silently placeholdered](https://github.com/nearai/ironclaw/issues/6335)** — *CLOSED*, fixed by PR#6309.
- **[#6331 — Tool permission dropdown temporarily reverts while saving](https://github.com/nearai/ironclaw/issues/6331)** — Visual flicker confuses users about whether changes were applied.
- **[#6330 — Admin user details remain stale after updates](https://github.com/nearai/ironclaw/issues/6330)** — Separate query key not invalidated.

### Additional Reported Bugs
- **[#6333 — Loading older chat messages causes viewport to jump](https://github.com/nearai/ironclaw/issues/6333)**
- **[#6332 — Workspace deep links do not expand tree to selected file](https://github.com/nearai/ironclaw/issues/6332)**
- **[#6359 — reborn_trace test reads real $HOME state, fails locally](https://github.com/nearai/ironclaw/issues/6359)**
- **[#6347 — Slack instance-readiness has no caller-level test coverage](https://github.com/nearai/ironclaw/issues/6347)**

## Feature Requests & Roadmap Signals

Several enhancement issues were filed today, all by core developer @ilblackdragon, pointing to the near-term Reborn roadmap:

- **[#6320 — IronHub extension install flow](https://github.com/nearai/ironclaw/issues/6320)** — Users need a native Reborn flow to discover, install, and activate extensions through the CLI/product surfaces. Based on #4479.
- **[#6325 — Thread-scoped MCP sessions and programmatic MCP config](https://github.com/nearai/ironclaw/issues/6325)** — MCP sessions/configuration must be scoped to correct thread/run/product context, preserving mediated credentials.
- **[#6324 — WebUI workspace redesign and chat-first onboarding](https://github.com/nearai/ironclaw/issues/6324)** — First screen and primary workspace should align with Reborn product model while keeping dense workflows usable.
- **[#6323 — Offline v1-to-Reborn migration workflow](https://github.com/nearai/ironclaw/issues/6323)** — Operators need to migrate legacy data into Reborn storage without live service, with validation and rollback.
- **[#6371 — Narrow Reborn hooks to invocation authorization policy](https://github.com/nearai/ironclaw/issues/6371)** — Discussion to simplify the hook framework per the architecture simplification document.

**Prediction for next version (v1.0.0-rc.1)**: Given the high volume of merged PRs around architectural cleanup and the explicit release preparation (PR#6370, #6354), release candidate 1 is imminent. The IronHub extension install flow and thread-scoped MCP sessions are likely targets for the subsequent v1.0.0 GA.

## User Feedback Summary

Real user pain points emerging from the bug bash and discussions:

- **Confidence in response completeness is low** — users cannot tell whether a response actually completed (#6189, #6353) or whether errors are real (#6190). The replay loop (#6352) further erodes trust.
- **Onboarding friction** — the CLI provider setup is a dead-end flow with no back navigation (#6360), and duplicate "Test connection" buttons confuse users (#6362).
- **Cross-channel inconsistency** — Telegram chats display differently in WebUI (#6349), and language switching (#6350) breaks communication expectations.
- **Security concerns** — automatic Gmail reauthorization without consent (#6348) is a serious trust issue for privacy-conscious users.
- **Workspace usability** — tree navigation lacks keyboard support (#6334), deep links don't expand trees (#6332), and loading history causes viewport jumps (#6333).
- **Satisfaction signals**: Users value multi-tool requests (#6351) and the extension ecosystem (#6320), but reliability issues (checkpoint errors, stream failures) are blocking adoption.

## Backlog Watch

- **[#2277 — V2: ACP-backed child thread backends for delegated external agents](https://github.com/nearai/ironclaw/issues/2277)** — *Opened 2026-04-10, last updated 2026-07-20, 2 comments, 1 👍* — This long-standing feature request for delegating work to external coding agents (Codex, Droid, OpenCode) has been open for 3+ months with minimal activity. The Tier B transition may be blocking this, but it remains a high-impact feature for enterprise users wanting multi-agent orchestration.
- **[#6329 — Decompose extension_lifecycle.rs (8,789 lines)](https://github.com/nearai/ironclaw/issues/6329)** — *Opened today* — Already flagged as needing maintainer attention. This file is nearly 3x the team's own architecture rule budget (>3,000 lines). No decomposition plan is yet attached.
- **[#5598 — Chore: release (v1.0.0-rc.0?)](https://github.com/nearai/ironclaw/pull/5598)** — *Opened 2026-07-03, still open* — The automated release PR has been languishing for 18 days. With PR#6370 and #6354 now targeting the same tag, this should be resolved imminently.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Based on the GitHub data for LobsterAI on 2026-07-21, here is the structured project digest.

---

### LobsterAI Project Digest – 2026-07-21

**Data Source:** github.com/netease-youdao/LobsterAI

---

### 1. Today's Overview

The LobsterAI project experienced a high-velocity feature and bugfix push today, with **15 PRs updated** in the last 24 hours, 10 of which were merged or closed. Activity was heavily concentrated on the **Cowork (co-browsing) collaboration module** and the **AI Skin creation system**. The team merged significant enhancements for browser annotation support within Cowork sessions, a new silent Windows installation flow, and various fixes for UI flickering, scroll jumps, and login callbacks. While no new official releases were cut, the volume of merged work suggests a near-term release is building momentum.

### 2. Releases

**None.**
No new releases were published on 2026-07-21.

### 3. Project Progress

The core team merged **10 PRs** today, advancing several key areas:

- **Cowork (Co-browsing) Enhancements:**
    - **Multi-annotation Support:** PR [#2366](https://github.com/netease-youdao/LobsterAI/pull/2366) (by liugang519) was a major feature merge enabling batch creation of browser annotations, saving cropped screenshots, and integrating them as draft attachments in Cowork messages.
    - **Stability Fixes:** Two fixes from liuzhq1986 addressed UX issues: preventing scroll jumps on session refresh ([#2364](https://github.com/netease-youdao/LobsterAI/pull/2364)) and preventing periodic IM message flicker during window reconciliation ([#2363](https://github.com/netease-youdao/LobsterAI/pull/2363)).
    - **UI Layout Fix:** PR [#2359](https://github.com/netease-youdao/LobsterAI/pull/2359) stabilized the artfact preview panel and input area heights to prevent flash/shake during expansion.
- **Windows Platform & Build:**
    - **Silent Installer:** PR [#2368](https://github.com/netease-youdao/LobsterAI/pull/2368) (open) adds a `/S` flag to NSIS for silent updates with UAC-aware error handling.
    - **Build Pipeline:** PR [#2367](https://github.com/netease-youdao/LobsterAI/pull/2367) cleaned up Windows dist builds by adding explicit channel entry points to prevent environment variable leaks.
- **AI Skin Designer:**
    - PR [#2361](https://github.com/netease-youdao/LobsterAI/pull/2361) merged a new persistent entry point for AI skin creation in the Appearance settings, with first-use onboarding and a dedicated workflow.
- **Config Hot-Reload:** PR [#2365](https://github.com/netease-youdao/LobsterAI/pull/2365) fixed a reliability issue in the OpenClaw config hot-reload, switching from file-watch to RPC-based ack.
- **Bugfixes:** A cron UI bug ([#2362](https://github.com/netease-youdao/LobsterAI/pull/2362)) and a login callback persistence issue ([#2360](https://github.com/netease-youdao/LobsterAI/pull/2360)) were also resolved.

### 4. Community Hot Topics

Activity was dominated by maintainer work rather than community discussion, with no issues having significant comments or reactions. However, a cluster of **3 stale dependency update PRs** (opened April 2nd) saw renewed activity today:

- **PR #1277** [Electron 40.2.1 → 43.1.1](https://github.com/netease-youdao/LobsterAI/pull/1277) (Open)
- **PR #1283** [React 18.3.1 → 19.2.4](https://github.com/netease-youdao/LobsterAI/pull/1283) (Open)
- **PR #1282** [@headlessui/react to 2.2.9](https://github.com/netease-youdao/LobsterAI/pull/1282) (Open)

**Analysis:** The re-activation of these stale PRs indicates the team is preparing for a major dependency upgrade cycle. The jump from React 18 to React 19, in particular, suggests the team is aligning with the latest ecosystem for stability and performance, potentially unblocking new features.

### 5. Bugs & Stability

No new bugs were reported in the issue tracker today. All stability work was delivered via resolved PRs:

- **High (Fixed or Merged):**
    - **Cowork Scroll/Flicker Fixes:** Two critical UX bugs affecting the core collaboration experience (message flicker and session scroll jumps) were fixed by PRs [#2364](https://github.com/netease-youdao/LobsterAI/pull/2364) and [#2363](https://github.com/netease-youdao/LobsterAI/pull/2363).
    - **Artifact Panel Layout Shift:** A medium-severity UI flash bug was resolved in PR [#2359](https://github.com/netease-youdao/LobsterAI/pull/2359).
    - **Login Callback Loss:** A bug causing login failures on retry was fixed in PR [#2360](https://github.com/netease-youdao/LobsterAI/pull/2360).
- **Open (Low Risk):**
    - **Cron UI Bug:** PR [#2362](https://github.com/netease-youdao/LobsterAI/pull/2362) is already closed.
    - **Stale OpenClaw Fix:** PR [#2365](https://github.com/netease-youdao/LobsterAI/pull/2365) is closed.

**Assessment:** The bug fix velocity today was very high, with all identified issues being addressed within the same day.

### 6. Feature Requests & Roadmap Signals

No feature requests were filed in the issue tracker today. However, the merged PRs provide strong signals for the immediate roadmap:

- **Likely Next Version:**
    - **Cowork 2.0:** The browser multi-annotation feature ([#2366](https://github.com/netease-youdao/LobsterAI/pull/2366)) is a significant upgrade to the collaboration module, likely a headline feature for the next release.
    - **AI Skin Designer 1.0:** The improved AI skin flow ([#2361](https://github.com/netease-youdao/LobsterAI/pull/2361)) with official settings integration suggests this experimental feature is maturing towards a public launch.
    - **Silent Windows Update:** PR [#2368](https://github.com/netease-youdao/LobsterAI/pull/2368) is a major UX improvement for enterprise deployment and general users on Windows.

### 7. User Feedback Summary

No direct user feedback (new issues or comments) was recorded in the tracker today. The focus of today's work was internal quality and feature development. The lack of *new* bug reports suggests the current stable version may be relatively healthy, but the prioritization of UI flicker fixes and login callback preservation implies these were known, nagging issues that the team proactively resolved.

### 8. Backlog Watch

Several PRs remain open and unmerged for extended periods, requiring maintainer attention:

- **Critical Major Upgrades (Stale since April 2nd):**
    - **[PR #1277] Electron 43.1.1** - This is a major version bump (40→43). If this merge is blocked by compatibility issues, it represents a significant tech debt risk.
    - **[PR #1283] React 19.2.4** - A core dependency upgrade that could break renderer components. Needs careful review and testing.
    - **[PR #1284] react-syntax-highlighter 16.1.1** - Likely depends on the React upgrade above.
- **API Validation (Stale since April 2nd):**
    - **[PR #1349] POPO IM connectivity test** - This fix adds *real* API validation for the POPO IM connection test. This has been waiting for over 3 months and blocks users from knowing if their POPO integration is configured correctly.

**Recommendation:** The team should prioritize merging or rejecting PRs #1277, #1283, and #1349 to reduce the mounting dependency drift and resolve a known user-facing configuration issue.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-21

## 1. Today's Overview
CoPaw shows **high development activity** with 30 issues and 42 PRs updated in the last 24 hours, indicating a project in active maintenance and feature expansion. The open/active issue count (22 out of 30) suggests a growing backlog, but the 10 merged/closed PRs demonstrate sustained delivery. No new releases were published today, but multiple PRs targeting core stability (reasoning duplication, tool failure handling, startup hangs) are approaching readiness. Community engagement is strong, with several first-time contributors submitting PRs and users reporting nuanced bugs around memory, token management, and cross-platform compatibility.

## 2. Releases
**No new releases today.** The latest available versions remain:
- QwenPaw **v2.0.0.post3** (stable)
- ReMe **v0.4.1.1** / **v0.4.1.3** (memory subsystem)

Several fixes in the PR queue target post-v2.0.0 regressions (e.g., reasoning relay corruption, OpenAI token limits, desktop startup hangs), suggesting a **v2.0.1 patch release** is likely imminent.

## 3. Project Progress (Merged/Closed PRs Today)
10 PRs were closed or merged in the last 24 hours:

| PR | Title | Type | Status |
|----|-------|------|--------|
| [#6150](https://github.com/agentscope-ai/CoPaw/pull/6150) | feat(pawapp): add pawapp sdk and kanban app | Feature | Merged |
| [#6235](https://github.com/agentscope-ai/CoPaw/pull/6235) | feat(memory): enhance ReMe Light index maintenance stability and chunking | Enhancement | Merged |
| [#6210](https://github.com/agentscope-ai/CoPaw/pull/6210) | refactor: make the default loop an agent mode | Refactor | Merged |
| [#5922](https://github.com/agentscope-ai/CoPaw/pull/5922) | feat(observability): track user/session/version on langfuse traces | Feature | Merged |
| [#6246](https://github.com/agentscope-ai/CoPaw/issues/6246) | `_saved_tool_refs` crashes with filename too long | Bug fix | Closed |
| [#6255](https://github.com/agentscope-ai/CoPaw/issues/6255) | Chat error (BadRequestError) | Bug fix | Closed |
| [#6250](https://github.com/agentscope-ai/CoPaw/issues/6250) | SANDBOX_FALLBACK hardcoded approval | Bug fix | Closed |
| [#6264](https://github.com/agentscope-ai/CoPaw/issues/6264) | Support minimize to system tray | Feature | Closed |
| [#6101](https://github.com/agentscope-ai/CoPaw/issues/6101) | Inconsistent conversation reset lifecycle | Refactor | Closed |
| [#5961](https://github.com/agentscope-ai/CoPaw/issues/5961) | v2.0.0 loop execution bug (CN) | Bug fix | Closed |

**Key Feature Advances:**
- **PawApp SDK** (`#6150`) — New plugin architecture with a working kanban app, enabling third-party app development on CoPaw.
- **ReMe Light memory** (`#6235`) — Index rebuild made explicit, concurrent write protection, Markdown chunking optimization, dream task jitter added.
- **Default loop as agent mode** (`#6210`) — Architectural refactor giving each mode explicit ownership of stop handlers and lifecycle state.

## 4. Community Hot Topics

### Most Active Issues (by comments/reactions)

| Issue | Comments | Reactions | Summary |
|-------|----------|-----------|---------|
| [#6257](https://github.com/agentscope-ai/CoPaw/issues/6257) | 13 | 0 | Multiple tool calls produce **identical thinking output** — each call's thinking block contains the exact same content instead of independent reasoning. |
| [#5961](https://github.com/agentscope-ai/CoPaw/issues/5961) | 8 | 0 | v2.0.0 loop execution: agent repeatedly writes/deletes files, unable to complete simple tasks (CN). |
| [#4873](https://github.com/agentscope-ai/CoPaw/issues/4873) | 5 | 0 | Two subagents cause **infinite polling loop**; Feishu channel cannot interrupt. |
| [#5958](https://github.com/agentscope-ai/CoPaw/issues/5958) | 4 | 0 | Can AgentScope's permission control features be used in QwenPaw? |

### Active PRs (most recent, non-trivial)
- [#6284](https://github.com/agentscope-ai/CoPaw/pull/6284) — **QwenPaw Creator**: script→assets→storyboard→video creation workflow (new plugin app).
- [#6280](https://github.com/agentscope-ai/CoPaw/pull/6280) — Fix reasoning alignment: copies first ThinkingBlock to all segments, dropping others (directly addresses #6257, #6282).
- [#6276](https://github.com/agentscope-ai/CoPaw/pull/6276) — **Unified Browser**: one SDK, any backend — replaces legacy browser stack with a single programmable capability.
- [#6157](https://github.com/agentscope-ai/CoPaw/pull/6157) — Chrome extension plugin with native messaging bridge (depends on #6276).

**Underlying Needs Analysis:**
The most heated topics center on **reasoning duplication** (#6257, #6282, #6241) and **loop/deadlock bugs** (#5961, #4873, #6241). These indicate that the agent's internal decision-loop architecture still has edge cases where repeated tool calls produce identical outputs or cause infinite cycles. The fix PR `#6280` directly targets the root cause (shared formatter copying first ThinkingBlock to all segments), which should resolve multiple related issues.

## 5. Bugs & Stability

### Critical
- **[#6257](https://github.com/agentscope-ai/CoPaw/issues/6257) — Multiple tool calls produce identical thinking output**  
  Core reasoning bug: when agent executes multiple tools in one turn, each call's thinking block contains the same content. **Fix PR: [#6280](https://github.com/agentscope-ai/CoPaw/pull/6280) — under review.**

- **[#6197](https://github.com/agentscope-ai/CoPaw/issues/6197) — Desktop hangs on startup when `nvidia-smi` hangs**  
  Frozen binary (Windows) blocks indefinitely. No known fix PR yet.

- **[#6241](https://github.com/agentscope-ai/CoPaw/issues/6241) — Agent repeated output + memory_search infinite loop**  
  Framework-lack of duplicate detection; `DoomLoopGate` warning appears but doesn't prevent next round. Related to [#5906](https://github.com/agentscope-ai/CoPaw/issues/5906) (fix PR: [#6041](https://github.com/agentscope-ai/CoPaw/pull/6041) — open).

### High
- **[#6282](https://github.com/agentscope-ai/CoPaw/issues/6282) — Reasoning relay repeats first thinking block across AgentScope 2 iterations** (same root cause as #6257).
- **[#6242](https://github.com/agentscope-ai/CoPaw/issues/6242) — Console embedding dimensions not sent to OpenAI APIs** (`use_dimensions` not exposed).
- **[#6258](https://github.com/agentscope-ai/CoPaw/issues/6258) — OpenAI max output token setting not working** (v2.0.0.post3, AgentScope 2.0.4).
- **[#6246](https://github.com/agentscope-ai/CoPaw/issues/6246) — `_saved_tool_refs` crashes with OSError: filename too long** — **Closed/fixed**.

### Medium
- **[#6239](https://github.com/agentscope-ai/CoPaw/issues/6239) — Windows PATH drops semicolon separator** — child processes lose npm globals.
- **[#6252](https://github.com/agentscope-ai/CoPaw/issues/6252) — Desktop (Tauri) zoom not working on Linux** (Ctrl+/Ctrl-).
- **[#6261](https://github.com/agentscope-ai/CoPaw/issues/6261) — Offline code mode can't preview files** (uses online resources).
- **[#6250](https://github.com/agentscope-ai/CoPaw/issues/6250) — SANDBOX_FALLBACK hardcoded approval** — **Closed/fixed**.
- **[#6255](https://github.com/agentscope-ai/CoPaw/issues/6255) — Chat error (BadRequestError)** — **Closed/fixed**.

### Stability Assessment
The project has **multiple concurrent reasoning loop bugs** that are being addressed by parallel PRs (`#6280`, `#6041`). The v2.0.0.post3 release introduced several regressions (token limits, reasoning duplication, startup hangs) that suggest a **patch release (v2.0.1) is overdue**. The number of open bugs (22 active) relative to 30 total issues indicates a concerning **~73% open rate** but the high PR throughput partially mitigates this.

## 6. Feature Requests & Roadmap Signals

### Strongly Supported (likely next version)
| # | Feature | Evidence |
|---|---------|----------|
| [#6283](https://github.com/agentscope-ai/CoPaw/issues/6283) | Auto-attach real time info to context | Simple, high-value: solves date confusion across sessions |
| [#6274](https://github.com/agentscope-ai/CoPaw/issues/6274) | `ask_user_question` tool (Human-in-the-Loop) | Structured multi-choice pause/resume for risky tasks |
| [#6286](https://github.com/agentscope-ai/CoPaw/issues/6286) | Disable/customize built-in tool descriptions | Saves 8-10k tokens per request; high demand |
| [#6268](https://github.com/agentscope-ai/CoPaw/issues/6268) | AIOnly model provider (190+ models) | PR submitted by community; easy merge |
| [#6285](https://github.com/agentscope-ai/CoPaw/issues/6285) | Add `qwen3.8-max-preview` model | Out-of-date dropdown; simple update |

### Emerging Patterns (likely v2.1+)
- **Desktop UX enhancements**: Session grouping/folders ([#6287](https://github.com/agentscope-ai/CoPaw/issues/6287)), mobile web support ([#6281](https://github.com/agentscope-ai/CoPaw/issues/6281)), system tray minimize ([#6264](https://github.com/agentscope-ai/CoPaw/issues/6264) — closed), collapsible thinking blocks ([#6260](https://github.com/agentscope-ai/CoPaw/issues/6260)).
- **Plugin ecosystem growth**: QwenPaw Creator app ([PR #6284](https://github.com/agentscope-ai/CoPaw/pull/6284)), unified browser ([PR #6276](https://github.com/agentscope-ai/CoPaw/pull/6276)), Chrome extension ([PR #6157](https://github.com/agentscope-ai/CoPaw/pull/6157)).
- **Architecture refinements**: Editable agent modes ([PR #6270](https://github.com/agentscope-ai/CoPaw/pull/6270)), background tool call offload ([PR #6151](https://github.com/agentscope-ai/CoPaw/pull/6151)), concurrent handler init ([PR #6238](https://github.com/agentscope-ai/CoPaw/pull/6238)).

### Prediction for v2.0.1
Based on fix PRs under review, likely includes:
1. Reasoning alignment fix (`#6280`) — resolves `#6257`, `#6282`
2. Doom loop exemption for read-only tools (`#6041`)
3. OpenAI token limit fix (`#6258`)
4. Desktop startup hang mitigation (`#6197`)
5. Embedding dimensions fix (`#6242`)
6. **AIOnly provider** (`#6271`) — community contribution, low risk

## 7. User Feedback Summary

### Pain Points
- **Reasoning duplication** is the #1 complaint: users report identical thinking blocks across tool calls, making outputs confusing and wasting tokens.
- **Loop/deadlock scenarios** frustrate advanced users: agents stuck in write/delete cycles (#5961), infinite polling with subagents (#4873), and undetected duplicate patterns (#6241).
- **Token cost visible**: Built-in tool descriptions consume 8-10k tokens per request (~2.5¢ per turn with mid-tier models), with no way to disable unused tools (#6286).
- **Desktop experience gaps**: Linux zoom not working (#6252), no session organization (#6287), startup hangs (#6197), system tray missing (#6264).
- **Memory confusion**: Users don't understand the difference between `MEMORY.md`, daily memories, and Dream digests (#6222).

### Use Cases (from issue context)
- **Multi-subagent workflows**: Users running 2+ background subagents hit concurrency bugs (#4873).
- **Long-running sessions**: Users restarting old conversations find date confusion (#6283) and inconsistent memory recall.
- **Offline/air-gapped deployments**: Code mode users need file preview without internet (#6261).
- **Enterprise/regulated**: Sandbox fallback approval bypass needed (#6250), permission system integration desired (#5958).

### Satisfaction Indicators
- **High community engagement**: First-time contributors submitting PRs for new providers (#6271), fixes (#6203, #5922, #6041).
- **Active Chinese-language user base**: Several issues and PRs in Chinese (CN) indicate strong adoption in China, particularly with Alibaba Cloud's Qwen models.
- **Vocal power users**: Issues like `#6286` (token optimization), `#6274` (Human-in-the-Loop), and `#6287` (session folders) come from users who clearly understand the product deeply.

## 8. Backlog Watch

### Issues Needing Maintainer Attention
| # | Issue | Age | Priority | Why |
|---|-------|-----|----------|-----|
| [#5688](https://github.com/agentscope-ai/CoPaw/issues/5688) | CSS prefix mismatch: `ant-` vs `qwenpaw-` | 20 days | **High** | CSS styles may not apply; affects Console theming. Last maintainer comment: none. |
| [#4873](https://github.com/agentscope-ai/CoPaw/issues/4873) | Subagent infinite polling | 50 days | **Critical** | Unresolved for 50 days; multiple users affected. |
| [#6222](https://github.com/agentscope-ai/CoPaw/issues/6222) | MEMORY.md vs Dream digest confusion | 4 days | **Medium** | Only 2 comments; user needs documentation clarification. |
| [#6239](https://github.com/agentscope-ai/CoPaw/issues/6239) | Windows PATH semicolon drop | 3 days | **Medium** | AI-drafted issue; may need maintainer to validate and produce minimal reproduction. |

### PRs Needing Review
| # | PR | Age | Status | Why Stalled |
|---|----|-----|--------|-------------|
| [#5187](https://github.com/agentscope-ai/CoPaw/pull/5187) | Windows desktop GUI automation (UIA + Tauri) | 37 days | Open, no reviews | Large feature; likely waiting for maintainer capacity. |
| [#5992](https://github.com/agentscope-ai/CoPaw/pull/5992) | Per-session model overrides | 9 days | Open, first-time contributor | Needs code review; good feature for power users. |
| [#6151](https://github.com/agentscope-ai/CoPaw/pull/6151) | Background tool call offload | 6 days | Open | 3-person contribution; dual-deadline architecture — significant but complex. |
| [#6157](https://github.com/agentscope-ai/CoPaw/pull/6157) | Chrome extension plugin | 6 days | Open, depends on #6276 | Blocked on unified browser PR; both need review. |

### Risk Watch
- **Reasoning duplication fix chain**: `#6280` must merge to unblock `#6257`, `#6282`, and `#6241`. If review is delayed, the most impactful bugs remain unfixed.
- **v2.0.0 regression cascade**: Three separate regressions (token limits #6258, startup hang #6197, reasoning relay #6282) all stem from the v2.0.0 release. A coordinated patch release is critical for user retention.
- **CSS theming gap** (`#5688`, 20 days stale): If styles are truly not applied, the Console may look broken for users on custom prefixes — but low commentary suggests it may be a non-urgent cosmetic issue.

---

*Digest generated 2026-07-21 from CoPaw GitHub data. All links reference `agentscope-ai/CoPaw` unless otherwise noted.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-21

## Today's Overview

ZeroClaw saw a very high activity day with 35 issues and 50 PRs updated in the last 24 hours, signaling sustained development velocity. The project maintains 27 open/active issues and 42 open PRs, indicating a healthy and growing contributor pipeline. Today's activity is concentrated around three major thrusts: the new agent evaluation harness (`zeroclaw eval`), persistent memory subsystem work, and targeted bug fixes across Windows compatibility, sandbox security, and provider reliability. No new releases were published today.

## Releases

No new releases were published today. The current release lineage remains at 0.8.x.

## Project Progress

**Merged/Closed PRs (8 total):**

- **[PR #9173](zeroclaw-labs/zeroclaw/pull/9173)** — `fix(zerocode): add terminal-safe help and browse controls`. Added `/help` and `/browse` input commands, making Help and transcript browsing reachable when terminal hosts intercept key chords. (Closed)
- **[PR #9168](zeroclaw-labs/zeroclaw/pull/9168)** — `docs(architecture): define generation-scoped live config apply`. Adds proposed ADR-012 for the live-config architecture. (Closed)
- **[PR #9167](zeroclaw-labs/zeroclaw/pull/9167)** — `docs(architecture): record multi-agent runtime boundaries`. Retroactive ADR-011 for multi-agent V3 runtime. (Closed)
- **[PR #9108](zeroclaw-labs/zeroclaw/pull/9108)** — `ci(firmware): add shared protocol host gate`. Adds CI coverage for the firmware protocol crate. (Closed)
- **[PR #8767](zeroclaw-labs/zeroclaw/pull/8767)** — `fix(zerocode): fill queue and session overlays`. Fixes background rendering artifacts. (Closed)
- **[PR #9218](zeroclaw-labs/zeroclaw/pull/9218)** — `chore(providers): drop issue refs from regression-test comments`. Cleans up comment hygiene. (Open)
- Remaining 2 closed PRs not listed in the top 20.

**Key Feature Advances (Open PRs):**
- **[PR #9214](zeroclaw-labs/zeroclaw/pull/9214)** — Live execution mode with sandboxed tool surface for the eval harness.
- **[PR #9217](zeroclaw-labs/zeroclaw/pull/9217)** — Async `Grader` trait wired through the eval runner.
- **[PR #9219](zeroclaw-labs/zeroclaw/pull/9219)** — Workspace, budget, and JSON-field graders.
- **[PR #9220](zeroclaw-labs/zeroclaw/pull/9220)** — Comparable run receipts and failure transcript dumps for eval.
- **[PR #9221](zeroclaw-labs/zeroclaw/pull/9221)** — Baseline files with regression gating and capability tracking.

## Community Hot Topics

**[Issue #6808](zeroclaw-labs/zeroclaw/issues/6808)** — *RFC: Work Lanes, Board Automation, and Label Cleanup* (14 comments, Updated Jul 20)
- Status: Accepted, rollout in progress. A governance RFC spanning from 0.8.0-beta-1 to current 0.8.3. The community is actively engaging on project governance and workflow automation. This is the longest-running active RFC on the project.

**[Issue #7462](zeroclaw-labs/zeroclaw/issues/7462)** — *[Bug]: 74 test failures on Windows* (10 comments, Updated Jul 20)
- High-priority (P1), high-risk bug. Windows users report massive test suite failures due to Unix-only commands, path semantics, and console encoding issues. CI does not catch these since tests only run on Linux. Strong community demand for cross-platform parity.

**[Issue #3566](zeroclaw-labs/zeroclaw/issues/3566)** — *[Feature][interop]: A2A (Agent-to-Agent) Protocol Support* (9 comments, 7 reactions 👍)
- Very high community interest (7 upvotes). Proposes native A2A support for inter-agent communication. This is a long-standing feature request (since March 2026) with strong community desire for interoperability.

**[Issue #8891](zeroclaw-labs/zeroclaw/issues/8891)** — *[Tracker]: Persistent memory subsystem* (6 comments, Updated Jul 20)
- Active roadmap epic tracker with 18 open items. The community is closely watching the memory subsystem maturation.

**[Issue #9117](zeroclaw-labs/zeroclaw/issues/9117)** — *[Bug]: ZeroCode won't start on Windows without ZEROCLAW_SOCKET* (5 comments, CLOSED)
- Windows-specific startup bug, now resolved.

## Bugs & Stability

**Critical/S1 Bugs Reported Today (Highest Severity):**

| ID | Title | Component | Severity | Fix PR? |
|----|-------|-----------|----------|---------|
| [#9204](zeroclaw-labs/zeroclaw/issues/9204) | Landlock sandbox locks zeroclaw itself | security/sandbox | S1 — workflow blocked | No |
| [#9206](zeroclaw-labs/zeroclaw/issues/9206) | Cron agent jobs get workspace_dir resolved to `/` | runtime/daemon | S0 — data loss / security risk | No |
| [#9207](zeroclaw-labs/zeroclaw/issues/9207) | web_fetch returns garbage for compressed responses | tools | S1 — workflow blocked | No |
| [#9189](zeroclaw-labs/zeroclaw/issues/9189) | Discord gateway heartbeats starve during attachment download | channel | S1 — workflow blocked | No |
| [#9190](zeroclaw-labs/zeroclaw/issues/9190) | Reliable provider key rotation cools wrong key | provider | S2 — degraded | No |
| [#9191](zeroclaw-labs/zeroclaw/issues/9191) | Cron agent jobs have no wall-clock timeout | runtime/daemon | S1 — workflow blocked | No |
| [#9192](zeroclaw-labs/zeroclaw/issues/9192) | shared_budget TOCTOU wrap + SopEngine finish_run panic | runtime/daemon | S1 — workflow blocked | No |
| [#9216](zeroclaw-labs/zeroclaw/issues/9216) | comment-hygiene gate fails on master | tooling/ci | S1 — workflow blocked | Fix PR [#9218](zeroclaw-labs/zeroclaw/pull/9218) exists |

**Key Security/Stability Concerns:**
- **S0 Data Loss**: Issue [#9206](zeroclaw-labs/zeroclaw/issues/9206) — Cron agent jobs intermittently resolve workspace to `/`, a critical security risk.
- **S1 Workflow Blocked**: 6 new critical bugs reported today across sandbox, tools, channels, and runtime.
- **S2 Degraded**: 1 new bug on provider key rotation logic.

## Feature Requests & Roadmap Signals

**Strong Community Demand:**
- **A2A Protocol Support** ([#3566](zeroclaw-labs/zeroclaw/issues/3566)) — 7 reactions, 9 comments. Likely targeted for v0.9.0 given its inclusion in the auth/security tracker ([#7432](zeroclaw-labs/zeroclaw/issues/7432)).
- **Agent Evaluation Harness** ([#7065](zeroclaw-labs/zeroclaw/issues/7065)) — Active development with 5+ PRs in flight today alone. Strong candidate for next release.
- **ACP Embedded Resource Blob** ([#9178](zeroclaw-labs/zeroclaw/issues/9178)) — New feature request for workspace file handling in ACP protocol.

**Ongoing Trackers:**
- **[#7432](zeroclaw-labs/zeroclaw/issues/7432)** — v0.9.0 auth, security, gateway, and breaking-change coordination. This is the primary roadmap signal for the next major release.
- **[#8288](zeroclaw-labs/zeroclaw/issues/8288)** — SOP milestone: daemon-owned SOP control plane to 5/5. Active with multiple PRs.

## User Feedback Summary

**Pain Points (New Today):**
- **Windows parity frustration**: Multiple bugs reported around Windows-specific issues (startup, test failures, path semantics). Users are actively encountering cross-platform gaps.
- **Sandbox security regression**: A user reports that Landlock sandboxing locks ZeroClaw itself, causing SQLite and other issues. This appears to be a regression from earlier fix attempts.
- **Discord integration instability**: Users report stuck "typing" indicator and heartbeat starvation during attachment processing — real-world reliability issues for a key channel.
- **Provider reliability**: Token factory rebranding ([PR #9074](zeroclaw-labs/zeroclaw/pull/9074)) and key rotation bugs ([#9190](zeroclaw-labs/zeroclaw/issues/9190)) indicate ongoing provider integration friction.
- **ZeroCode UX issues**: Markdown copy behavior ([#8664](zeroclaw-labs/zeroclaw/issues/8664)), missing output ([#8644](zeroclaw-labs/zeroclaw/issues/8644)), and session picker rendering ([#8765](zeroclaw-labs/zeroclaw/issues/8765)) — multiple minor UX regression bugs.

**Use Cases Evident:**
- **Multi-agent orchestration**: SOP workflows with per-step agent selection (PR #9030)
- **Agent evaluation/testing**: Serialized eval harness PRs suggests enterprise/testing demand
- **Cross-platform deployment**: Windows users actively trying to run ZeroClaw
- **Channel integrations**: Discord, Lark, web dashboard all seeing real-world usage

## Backlog Watch

**Long-unanswered Items Requiring Attention:**

| ID | Issue | Age | Status | Risk |
|----|-------|-----|--------|------|
| [#6685](zeroclaw-labs/zeroclaw/issues/6685) | SOP HTTP fan-in documented but not wired | Created May 15 (67 days) | In-progress | High — documented but non-functional |
| [#3566](zeroclaw-labs/zeroclaw/issues/3566) | A2A Protocol Support | Created Mar 15 (128 days) | Accepted, no-stale | High — community demand, no implementation PR |
| [#7065](zeroclaw-labs/zeroclaw/issues/7065) | Agent evaluation harness | Created Jun 1 (50 days) | Accepted | High — now seeing PR activity |
| [#7462](zeroclaw-labs/zeroclaw/issues/7462) | 74 Windows test failures | Created Jun 10 (41 days) | Accepted | High — no fix PR in sight |
| [#8691](zeroclaw-labs/zeroclaw/issues/8691) | ADR baseline restoration | Created Jul 4 (17 days) | Accepted, no-stale | Low — documentation |

**PRs Needing Author Action (marked `needs-author-action`):**
- [#8879](zeroclaw-labs/zeroclaw/pull/8879) — Web risk-profile tool permissions (size XL, open since Jul 9)
- [#9030](zeroclaw-labs/zeroclaw/pull/9030) — SOP step agent policy (size L, open since Jul 13)
- [#8752](zeroclaw-labs/zeroclaw/pull/8752) — OTel memory/RAG span nesting (size M, open since Jul 6)
- [#9099](zeroclaw-labs/zeroclaw/pull/9099) — Model vision capability config (size M, open since Jul 16)

---

*Generated from ZeroClaw GitHub data — 35 issues, 50 PRs updated in last 24h. Project health: High activity; stability concerns on Windows and sandbox security; strong roadmap momentum on eval harness and memory subsystems.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kky-wollu/agents-radar).*