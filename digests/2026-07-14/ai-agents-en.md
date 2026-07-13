# OpenClaw Ecosystem Digest 2026-07-14

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-13 22:59 UTC

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

Here is the OpenClaw project digest for **2026-07-14**.

---

## OpenClaw Project Digest: 2026-07-14

### 1. Today's Overview
The project is experiencing **high-velocity activity**, with 500 issues and 500 PRs updated in the last 24 hours. While the raw number of open items is high, the community is highly engaged, with 2 new releases published today and a strong volume of merged/closed PRs (229). However, the project is dealing with a surge of **critical regressions** (`P0`) and **stability issues** (`P1`), including a major bug where tool results are replaced by a literal placeholder string, which appears to be a release blocker. The maintainer team is actively pushing large refactoring PRs to manage technical debt alongside urgent bug fixes.

### 2. Releases
**Two releases were published today:** `v2026.7.1` and `v2026.7.1-beta.6`, both with identical release notes.
- **Details:** Introduces new models and providers (Featherless, Claude Sonnet 5, Mythos 5, Meta Muse Spark 1.1, and ClawRouter).
- **Changes:** GPT-5.6 is now the default model for new setups. New `/think` modes (`ultra` for Sol and Terra, `max` for Luna) have been added.
- **Notable:** The release honors the `Z.AI max` mode and improves model availability refresh after OAuth flows.
- **Migration:** No specific migration steps noted for standard users.

### 3. Project Progress
Of the 500 PRs updated, **229 were merged or closed** today. High-impact fixes and feature work that advanced include:
- **Security & Resource Management:** Multiple fixes landed to harden resource bounds, including bounding the Zalo proxy fetch cache ([#106542](https://github.com/openclaw/openclaw/pull/106542)), adding a 30s timeout for Codex WebSocket handshakes ([#106519](https://github.com/openclaw/openclaw/pull/106519)), and adding an estimate-before-decode guard to prevent OOM from base64 payloads ([#105323](https://github.com/openclaw/openclaw/pull/105323)).
- **Agent Lifecycle:** A significant fix (`#105793`) prevents subagent registry resurrection, addressing a long-standing data integrity issue where old runs could be re-imported into SQLite.
- **UI & Usability:** A major refactor of the Control UI ([#106865](https://github.com/openclaw/openclaw/pull/106865)) migrated to Web Awesome controls, landing better keyboard navigation and focus management. A fix was also prepared to handle emoji in agent display names cleanly in the UI ([#104912](https://github.com/openclaw/openclaw/pull/104912)).
- **Infrastructure:** Build dependencies were updated via Dependabot ([#104027](https://github.com/openclaw/openclaw/pull/104027)).

### 4. Community Hot Topics
The most active threads highlight deep frustration with reliability and feature gaps:
- **Linux/Windows Apps ([#75](https://github.com/openclaw/openclaw/issues/75)):** Very high engagement (112 comments, 81 👍). Users are demanding parity with the macOS and iOS apps, indicating a significant barrier to adoption on other platforms.
- **Memory Poisoning Prevention ([#7707](https://github.com/openclaw/openclaw/issues/7707)):** A critical security feature request for "Memory Trust Tagging by Source" to prevent malicious instructions from web scrapes or third-party skills from poisoning agent memory.
- **"See attached image" Bug ([#104721](https://github.com/openclaw/openclaw/issues/104721)):** A `P0` bug where *all* tool results are replaced by the literal string "(see attached image)". This is causing widespread panic, as it breaks the core functionality of the agent.
- **Filesystem Sandboxing ([#7722](https://github.com/openclaw/openclaw/issues/7722)):** Users are requesting robust, configuration-driven filesystem access restrictions to enhance security.

### 5. Bugs & Stability
Several critical bugs are currently open, indicating a period of significant churn.
- **[P0] Tool Result Regression ([#104721](https://github.com/openclaw/openclaw/issues/104721)):** The most critical bug. Tool outputs are replaced by a placeholder. Multiple reports suggest this is a regression. No fix PR linked yet.
- **[P0] Live DB Corruption ([#101290](https://github.com/openclaw/openclaw/issues/101290)):** The CLI startup preflight is corrupting the live state database (`openclaw.sqlite`) while the gateway is running, leading to "database disk image is malformed" errors.
- **[P1] Client Crashing/Stuck Sessions ([#106864](https://github.com/openclaw/openclaw/pull/106864)):** The Android app kills long-running agent turns with a hardcoded 2-minute timeout. A fix PR (`#106864`) is open but needs proof.
- **[P1] Stuck Session Recovery ([#76038](https://github.com/openclaw/openclaw/issues/76038)):** A detailed report of the "stuck session recovery" mechanism failing, leading to gateway unresponsiveness and systemd kills.
- **[P1] Message Loss ([#102020](https://github.com/openclaw/openclaw/issues/102020), [#102400](https://github.com/openclaw/openclaw/issues/102400)):** "Reply session initialization conflicted" errors cause messages to be silently dropped on Slack, webchat, and other channels.

### 6. Feature Requests & Roadmap Signals
- **Security Hardening:** The top feature requests are security-focused: Memory trust tagging ([#7707](https://github.com/openclaw/openclaw/issues/7707)) and filesystem sandboxing ([#7722](https://github.com/openclaw/openclaw/issues/7722)). Given the volume of security-related issues, the next version is likely to include at least one of these.
- **Cross-Platform Parity:** The request for Linux/Windows apps ([#75](https://github.com/openclaw/openclaw/issues/75)) is the most popular request. This is a strong signal for a potential "OpenClaw Desktop" cross-platform release.
- **Dynamic Model Discovery:** A request to make model catalogs dynamic (e.g., for OpenRouter) ([#10687](https://github.com/openclaw/openclaw/issues/10687)) is gaining traction as more providers launch new models.
- **Production Readiness Labels:** Users are requesting official production-readiness labels for releases ([#73537](https://github.com/openclaw/openclaw/issues/73537)), indicating a strong desire for more predictable stability cycles from the project.

### 7. User Feedback Summary
- **Pain Points:** The primary pain point is **stability**. Users are experiencing data corruption, silent message loss, and broken tool execution. The "see attached image" bug has caused a sharp spike in user dissatisfaction. Another major pain point is the **lack of cross-platform support**, particularly for Windows and Linux.
- **Use Cases:** The community is diverse, ranging from individual power users to families and small businesses using OpenClaw for automation, Home Assistant, and cron jobs.
- **Satisfaction:** Despite the bugs, there is clear satisfaction with the project’s ambition and feature set. Users express gratitude for the work done and show a deep understanding of the platform's capabilities (e.g., multi-agent setups, complex routing).

### 8. Backlog Watch
Several high-impact issues have been "stale" or "open" for months without a solution:
- **MCP Retry Storm ([#68527](https://github.com/openclaw/openclaw/issues/68527)):** A `stable`, `P1` issue from April where a misconfigured MCP server can exhaust VM resources. The fix (backoff, circuit breaker) is known but not yet implemented.
- **Stuck Session Recovery ([#76038](https://github.com/openclaw/openclaw/issues/76038)):** A detailed `stable`, `P1` bug from May where the session recovery mechanism is "double-failing." This is a core stability issue that has not been resolved.
- **Gateway Hard Crash on Windows ([#71699](https://github.com/openclaw/openclaw/issues/71699)):** A `stable`, `P1` crash with `STATUS_STACK_BUFFER_OVERRUN` during Mattermost streaming. This critical bug has been open since April.
- **Subagent Run Stuck on "Running" ([#90444](https://github.com/openclaw/openclaw/issues/90444)):** A bug from June where killed subagent runs leave tasks stuck in a `running` state that cannot be cleared by maintenance commands.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Analysis: Personal AI Agent Open-Source Landscape
**Date:** 2026-07-14 | **Coverage:** 10 active projects

---

## 1. Ecosystem Overview

The personal AI agent open-source ecosystem is experiencing a **divergent maturation phase**, where projects are simultaneously racing to ship new features while grappling with destabilizing regressions from rapid iteration. The landscape spans from reference implementations (OpenClaw) to specialized niche tools (Moltis, TinyClaw), with the majority of projects in a "firefighting" mode following major version releases. **Security and reliability** have emerged as cross-cutting concerns, with multiple projects facing critical credential-management flaws, memory corruption bugs, and approval-flow vulnerabilities. The community is increasingly demanding **production-grade stability**, cross-platform parity, and transparent governance, signaling a shift from experimental adoption to real-world deployment expectations. Notably, **stability-centric projects** (NullClaw, Moltis) are gaining trust through conservative release cycles, while **high-velocity projects** (OpenClaw, CoPaw) risk user attrition from accumulated technical debt.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Merged/Closed (24h) | New Release? | Health Score | Primary Activity Pattern |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 229 merged | ✅ v2026.7.1 | ⚠️ **Moderate** (high churn, critical regressions) | Bug-bash + refactoring sprint |
| **ZeroClaw** | 50 | 50 | 5 merged, 13 closed | ❌ | 🟢 **Good** (sustained velocity, good triage) | Feature push + governance rollout |
| **Hermes Agent** | 50 | 50 | 5 merged, 32 closed | ❌ | 🟢 **Good** (strong sweeper-bot closure) | Desktop UX polish + security hardening |
| **CoPaw** | 50 | 50 | 28 merged | ✅ v2.0.0.post1 | 🔴 **Poor** (stability crisis post-v2.0.0) | Emergency patch sprint |
| **IronClaw** | 34 | 50 | 14 merged | ❌ | ⚠️ **Moderate** (heavy bug-bash, pending release) | NEA-25 architecture + stabilization |
| **NanoBot** | 13 | 46 | 19 merged | ❌ | 🟢 **Good** (coordinated Dream/docs push) | Documentation + localization |
| **LobsterAI** | 0 | 21 | 19 merged | ❌ | 🟢 **Good** (Windows overhaul + Cowork) | Installation stabilization sprint |
| **NanoClaw** | 3 (closed) | 31 | 25 merged | ❌ | 🟢 **Good** (security patch cleanup day) | Security + channel expansion |
| **PicoClaw** | 4 (stale) | 5 | 1 merged | ❌ | 🟡 **Low** (stalled important issues) | Lull / maintainer bottleneck |
| **NullClaw** | 0 | 17 | 4 merged | ❌ | 🟢 **Good** (consolidation phase) | CICD / quality-of-life fixes |
| **Moltis** | 0 | 1 | 0 merged | ❌ | 🟢 **Stable** (idle but healthy) | Quiet / review phase |
| **TinyClaw** | 0 | 0 | 0 | ❌ | ⚪ **Inactive** | No activity |
| **ZeptoClaw** | 0 | 0 | 0 | ❌ | ⚪ **Inactive** | No activity |

**Key Observations:**
- **OpenClaw dominates raw volume** but the high open/closed ratio (500 updated) and critical P0 bugs suggest **output quantity exceeding stability quality**.
- **CoPaw is in crisis mode** — the v2.0.0 post-release bug flood (50 issues/PRs, 28 emergency merges) indicates a release that was not ready for production.
- **NanoClaw and LobsterAI** show high **closure efficiency** (>80% of PRs merged), reflecting well-managed maintenance sprints.
- **PicoClaw, TinyClaw, and ZeptoClaw** are effectively stalled, with stale critical issues and no recent contribution activity.

---

## 3. OpenClaw's Position

### Advantages vs Peers
- **Ecosystem Leadership:** OpenClaw is the clear reference implementation with the largest contributor base (500+ daily PR updates vs. 50 for peers), setting the standard for model support, routing, and multi-agent architecture.
- **Model/Provider Velocity:** Two releases in one day with new models (Claude Sonnet 5, Mythos 5, Meta Muse Spark) — no other project matches this pace of provider integration.
- **Community Trust:** Despite churn, the community expresses deep platform understanding and appreciation for ambition; users invest significant time in detailed bug reports and feature requests.

### Technical Approach Differences
- **Monolithic Core with Plugin Extensions:** Unlike ZeroClaw's "light core, external integrations" philosophy (#6165), OpenClaw maintains a thick core with extensive built-in capabilities, leading to higher complexity but richer default experience.
- **Proactive Refactoring:** OpenClaw merges large-scale refactors (Control UI Web Awesome migration) alongside urgent bug fixes, indicating a willingness to incur short-term instability for architectural improvement — a trade-off most peers avoid.

### Community Size Comparison
- **Issue/PR Volume:** OpenClaw's 500/500 ratio is **10x higher** than the next busiest projects (ZeroClaw, Hermes, CoPaw at 50). This reflects an order-of-magnitude larger contributor pool and user base.
- **User Dissatisfaction:** However, the *intensity* of frustration is proportionally higher — P0 bugs like "See Attached Image" and Live DB Corruption affect a much larger install base, creating amplified community noise.

### Strategic Risk
OpenClaw's **"move fast, break things"** approach is creating a trust gap with production users. The Linux/Windows app demand (#75) and production-readiness labels request (#73537) indicate that the community wants *stability* as much as new features. If competitors like ZeroClaw or Hermes prioritize stability-first releases, they could capture OpenClaw's disillusioned enterprise users.

---

## 4. Shared Technical Focus Areas

| Focus Area | OpenClaw | ZeroClaw | CoPaw | Hermes | NanoBot | NanoClaw | Others |
|---|---|---|---|---|---|---|---|
| **Tool-Execution Integrity** | ✅ P0 bug (#104721) | ✅ S1 (#9016) | ✅ Critical orphan tool_result | ✅ | ✅ Loop bug (#4864) | ✅ | LobsterAI Chrome leaks (#2328) |
| **Credential/Security Hardening** | ✅ Memory tagging (#7707) | ✅ Pairing code GUI (#8998) | ✅ MCP permissions broken (#5947) | ✅ Credential pool fragility (P1) | — | ✅ Approval smuggling (#2827) | NullClaw token persistence (#959) |
| **Cross-Platform Parity** | ❌ Linux/Win apps (#75) | ✅ Windows Ctrl+C (#9028) | ❌ Feishu/Pi blockers | ✅ Desktop UX fixes | ✅ | — | Hermes Windows QOL |
| **Memory State Reliability** | ✅ Subagent register resurrection | ✅ Hindsight integration | ✅ Dream failures | — | ✅ Dream fixes | ✅ Persistent memory tree | — |
| **Message Delivery Reliability** | ✅ Stuck sessions (#76038) | ✅ Gateway loopback (#9035) | ✅ Message queue clearing | ✅ Duplicate replies (#16108) | ✅ Discord bot issues (#4897) | ✅ Silent message drops (#2995) | — |
| **Documentation/Onboarding** | ❌ Production labels (#73537) | ✅ Docs quality fix (#7758) | — | ✅ Chinese localization | ✅ README overhaul | — | Moltis CalDAV docs (#1147) |

**Dominant Pattern:** **Tool-call integrity** is the single most common critical failure across projects — orphaned tool results, broken serialization, and silent execution errors appear in nearly every project's top bugs. This is the ecosystem's #1 reliability challenge.

**Emerging Pattern:** **Security / credential management** is the #2 shared concern, with at least 5 projects actively patching approval-flow or authentication vulnerabilities this week.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | CoPaw | Hermes | NanoBot | NanoClaw | LobsterAI |
|---|---|---|---|---|---|---|---|
| **Target User** | Power users / developers | Enterprise ops / professionals | Chinese-market prosumers | Desktop enthusiasts | Researchers / hobbyists | Security-conscious operators | Chinese enterprise users |
| **Architecture** | Monolithic + plugin | Modular core + external integrations | Medium with strong governance | Desktop-first, MCP-extensible | Lightweight, Dream-memory centric | Security-first, approval-driven | Electron desktop + Cowork |
| **Differentiator** | Largest model/provider library | Governance RFCs, lean core | Deep Chinese channel support | Strong desktop UX, sweeper automation | Documentation, localization | Security transparency, structured skills | Desktop stability, Windows hardening |
| **Core Risk** | Stability from velocity | Memory backend integration risks | v2.0.0 regression crisis | Credential pool fragility | Dream edge-case accumulation | Stalled stale items | Electron dependency lag (#1277) |
| **Community Language** | English-dominated | English | Chinese | English | English + pt-BR | English | Chinese |

**Key Insight:** The ecosystem is **splitting along language and use-case lines**. CoPaw and LobsterAI serve Chinese-speaking users with deep WeChat/Feishu integration, while OpenClaw, ZeroClaw, and Hermes serve English-speaking global audiences. This creates parallel ecosystems with overlapping but not identical feature sets.

---

## 6. Community Momentum & Maturity

### Tier 1: High Velocity / High Maturity
- **OpenClaw** — Ecosystem leader, highest contributor count, but maturity undermined by recurring P0 regressions.
- **ZeroClaw** — Strong governance, sustained developer engagement, good triage. Poised for enterprise adoption.
- **Hermes Agent** — Excellent closure rate (64% of issues closed in 24h). Desktop-focused maturity with sweeper automation.

### Tier 2: Rapid Iteration / Moderate Maturity
- **NanoBot** — Healthy PR pipeline, active documentation overhaul. Dream subsystem still maturing.
- **NanoClaw** — Excellent security response time, strong feature pipeline (memory tree, Dial channel). Needs to resolve stalled PRs.
- **LobsterAI** — Intense Windows/desktop stabilization sprint. High-quality PRs, but stalled Electron dependency blocks progress.
- **IronClaw** — Major architecture work (NEA-25) but pending release and heavy bug-bash indicate pre-stabilization turbulence.

### Tier 3: Stability Phase / Low Activity
- **NullClaw** — Consolidating with quality-of-life fixes and documentation. Good health but low community engagement.
- **Moltis** — Idle but healthy. Single open PR indicates maintenance-mode posture.

### Tier 4: Effectively Stalled
- **PicoClaw** — Critical security concerns (vodozemac replacement, Gemini bug) unanswered for 5+ weeks. Risk of contributor abandonment.
- **TinyClaw, ZeptoClaw** — No activity. Likely defunct or paused.

### Activity Level Summary

```
HIGH VELOCITY                MODERATE/LOW                STALLED
─────────────────────────────────────────────────────────────
OpenClaw        ████████    NullClaw       ████         PicoClaw        ██
ZeroClaw        ████████    Moltis         ██           TinyClaw        █
Hermes          ████████    IronClaw       ██████       ZeptoClaw       █
CoPaw           ████████
NanoBot         ████████
NanoClaw        ██████
LobsterAI       ████████
```

---

## 7. Trend Signals for AI Agent Developers

### Signal 1: Production-Grade Stability is the New Differentiator
- **Evidence:** OpenClaw's production-readiness labels request (#73537), CoPaw's "not as good as v1.xxx" backlash (#6013), and ZeroClaw's documentation quality frustrations (#7758) all point to the same underlying need: **users want reliable, documented, predictable releases** over rapid feature churn.
- **Action:** Projects that formalize stability guarantees (semantic versioning, LTS releases, deprecation policies) will capture the emerging production deployment market.

### Signal 2: Security Transparency is Becoming Table Stakes
- **Evidence:** Approval smuggling vulnerabilities (NanoClaw #2827), credential pool fragility (Hermes #63425), and memory poisoning prevention requests (OpenClaw #7707) indicate that *agent self-modification* and *credential handling* are the ecosystem's most urgent security gaps.
- **Action:** Developers should implement **structured approval flows** (two-turn confirmation, full payload rendering), **credential isolation**, and **memory trust tagging** as core architecture requirements — not bolt-on features.

### Signal 3: Cross-Platform Gaps Create Adoption Ceilings
- **Evidence:** OpenClaw's #75 (Linux/Windows apps, 81 👍), Hermes' Windows scaling fixes, and LobsterAI's entire sprint dedicated to Windows installer reliability reveal that **desktop parity is the #1 barrier to mainstream adoption** for CLI-centric projects.
- **Action:** Any AI agent project targeting non-developer users must prioritize native desktop clients (or at minimum, robust web UIs) with parity across macOS, Windows, and Linux.

### Signal 4: Agent Memory is the Next Architectural Battleground
- **Evidence:** NanoBot's Dream subsystem fixes, NanoClaw's provider-agnostic memory tree (PR #3012), ZeroClaw's Hindsight integration (PR #8992), and OpenClaw's memory poisoning concerns all converge on **persistent, reliable agent memory** as the next core infrastructure challenge.
- **Action:** Standardizing on a shared memory protocol (e.g., MCP-compatible, SQLite-backed, encrypted at rest) could become the ecosystem's defining interoperability achievement.

### Signal 5: Channel Fragmentation Demands Abstraction Layers
- **Evidence:** Generic action buttons (#15311, Hermes, 14 comments), gateway webhooks (#3253, PicoClaw), and channel adapter errors (NanoClaw, NullClaw) demonstrate that **multi-channel delivery** is a universal pain point with no consensus solution.
- **Action:** Investing in platform-agnostic abstractions (buttons, inline keyboards, structured messages) that work across Telegram, Slack, WeChat, Discord, and SMS will provide outsized competitive advantage.

### Signal 6: Localization Opens Growth Markets
- **Evidence:** pt-BR localization (NanoBot #4914), Chinese UI (Hermes #37503), Weixin iLink Bot docs (NullClaw #963), and Chinese-dominant projects (CoPaw, LobsterAI) indicate that **language localization directly correlates with regional adoption**.
- **Action:** Projects with i18n frameworks (NanoBot, Hermes) are positioned to capture non-English markets. Supporting Chinese, Portuguese, and Spanish should be priority expansion targets.

### Value for AI Agent Developers:
1. **Invest in stability infrastructure** (testing, CI/CD, release gates) before feature velocity — your users' trust is the only durable moat.
2. **Design agent approval flows for security transparency** from day one — retrofitting security onto permissive architectures is harder than building it in.
3. **Monitor the memory infrastructure race** — the project that standardizes reliable, portable agent memory will define the ecosystem for years.
4. **Build cross-platform from the start** — desktop parity isn't a "future feature," it's a prerequisite for non-developer adoption.
5. **Embrace localization early** — the Chinese and Portuguese-speaking markets are actively building on these tools today.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-14

## 1. Today's Overview

NanoBot shows **high activity** today with 13 issues updated and **46 pull requests** touched in the last 24 hours—a very busy period. Of the 46 PRs, 19 were merged or closed, indicating strong forward momentum. The project has **2 open/active issues** and **27 open PRs**, suggesting a healthy pipeline of work in progress. No new releases were cut today, but the volume of PR merges (especially around Dream memory, documentation, and localization) points to an active development cadence with multiple contributors shipping features and fixes concurrently.

## 2. Releases

**No new releases** today. The latest release remains v0.2.2 (as referenced in PR #4839). The project appears to be accumulating changes for a future release.

## 3. Project Progress

**19 PRs merged or closed today**, with notable advances across several areas:

- **Dream/Memory system fixed**: PR #4909 ([link](https://github.com/HKUDS/nanobot/pull/4909)) fixes line-ending-only memory diffs in Dream, and PR #4894 (closed, bug fix) addresses base64-encoded Dream session file pruning.
- **Documentation overhaul**: PR #4913 ([link](https://github.com/HKUDS/nanobot/pull/4913)) updates the README and release archive through July 12. PR #4916 ([link](https://github.com/HKUDS/nanobot/pull/4916)) reorganizes docs around user workflows. PR #4912 ([link](https://github.com/HKUDS/nanobot/pull/4912)) removes a broken Star History embed.
- **Localization**: PR #4914 ([link](https://github.com/HKUDS/nanobot/pull/4914)) adds Brazilian Portuguese (pt-BR) to the WebUI.
- **Audit observability**: PR #4320 ([link](https://github.com/HKUDS/nanobot/pull/4320)) merges a new `tools.audit` config and AuditTool for agent action observability.
- **Heartbeat improvements**: PR #4915 ([link](https://github.com/HKUDS/nanobot/pull/4915)) makes heartbeat response evaluation more configurable.

## 4. Community Hot Topics

- **#4864** ([OPEN, 3 comments](https://github.com/HKUDS/nanobot/issues/4864)): An endless loop bug where `complete_goal` errors because the gateway parses the `recap` parameter as a bare string instead of JSON. This is a **high-interest regression** affecting tool serialization. Still open with no fix PR attached.

- **#4897** ([CLOSED, 3 comments](https://github.com/HKUDS/nanobot/issues/4897)): Discord bot integration issue where the bot shows as online but receives no messages. Quickly closed, suggesting a simple configuration fix was found.

- **#4911** ([OPEN, 0 comments](https://github.com/HKUDS/nanobot/issues/4911)): A feature request for a guarded tool gateway seam so channels can run the agent's tools—motivated by real-time voice channel needs. Freshly opened today, likely to gain traction.

- **#1500** ([CLOSED, 2 comments, 1 👍](https://github.com/HKUDS/nanobot/issues/1500)): User requests a message hierarchy system to suppress detailed tool output. The example—a cron for release checking that outputs "no update" verbosely—resonates with users wanting cleaner output control.

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| 🔴 **Critical** | [#4864](https://github.com/HKUDS/nanobot/issues/4864) | Endless loop in `complete_goal` due to gateway parameter serialization bug | Open, no fix PR |
| 🟠 **High** | [#4882](https://github.com/HKUDS/nanobot/issues/4882) | Dream `content_diff()` reports unchanged empty files as modified | Closed, likely fixed in #4909 |
| 🟠 **High** | [#4893](https://github.com/HKUDS/nanobot/issues/4893) | `/dream-log` and `/dream-restore` show non-Dream commits | Closed |
| 🟠 **High** | [#4894](https://github.com/HKUDS/nanobot/issues/4894) | `prune_dream_sessions()` fails on base64-encoded filenames | Closed, fix likely in related Dream PRs |
| 🟡 **Medium** | [#4915](https://github.com/HKUDS/nanobot/pull/4915) (PR) | Heartbeat response evaluation regressions from migration to cron | Fix PR open, P1 priority |
| 🟡 **Medium** | [#4917](https://github.com/HKUDS/nanobot/pull/4917) (PR) | Windows UTF-16 process output decoded incorrectly | Fix PR open, P1 priority |
| 🟢 **Low** | [#4887](https://github.com/HKUDS/nanobot/issues/4887) | Test setup fails: Feishu tests missing `lark-oapi` dependency | Closed |

**Bug trend**: Multiple Dream-related issues were filed this week (#4882, #4893, #4894, #4909) indicating the Dream feature is undergoing rapid iteration with edge cases being discovered. The endless loop bug (#4864) is the most concerning open issue.

## 6. Feature Requests & Roadmap Signals

- **Voice channel tool access (#4911)**: A new request for channels to run agent tools—signals interest in real-time voice interactions. Likely to influence next release.
- **Model preset binding to sessions (PR #4866)**: Open P1 PR to persist model presets per session, making `/model` session-scoped. High priority for the next release.
- **Heartbeat trigger command (PR #4620)**: Adds CLI `nanobot heartbeat trigger`—addresses feature request #3437. Still open.
- **WebUI settings parity (PR #4313)**: Closes the gap between WebUI and config.json for temperature, tool limits, Dream, and channel settings. Conflict-labeled but important.
- **WebUI Markdown export (PR #4587)**: Session export to Markdown. Conflict-labeled but in progress.
- **Agent hook auto-discovery (PR #4878)**: New hook registration via pkgutil scanning—mirrors existing channel/tool patterns. Signals architecture maturation.

**Predictions for next release**: High likelihood of including Dream memory fixes (#4909), heartbeat improvements (#4915), model preset binding (#4866), the new audit tool (#4320), and the pt-BR localization (#4914).

## 7. User Feedback Summary

- **Pain point: Verbose output** — Issue #1500 highlights that users want control over informational output during tool execution. The "forced information-flow" complaint suggests the project lacks a logging-level mechanism, annoying users who run cron jobs or want silent operations.
- **Pain point: Discord integration confusion** — #4897 shows that even with correct setup steps, users hit walls with Discord bots (showing online but not receiving messages). The quick closure suggests a fix exists but documentation may need improvement.
- **File upload issues** — #2352 (bot can't receive Feishu/Lark files) indicates persistent platform-specific file handling gaps that may affect Chinese-ecosystem users.
- **Positive signal: Localization** — The pt-BR PR (#4914) shows community investment in accessibility, and the quick merge indicates maintainers value internationalization.
- **Developer experience friction** — #4887 (test setup failing due to missing dependency) shows that developer onboarding still has rough edges for contributors.

## 8. Backlog Watch

| Issue/PR | Age | Status | Note |
|----------|-----|--------|------|
| [#1304](https://github.com/HKUDS/nanobot/issues/1304) | ~5 months | Closed | "Can't use codex" — closed but the original problem is unresolved for the reporter |
| [#192](https://github.com/HKUDS/nanobot/issues/192) | ~5 months | Closed (stale) | WeChat integration request, 0 reactions but practical for Chinese market |
| [#1011](https://github.com/HKUDS/nanobot/issues/1011) | ~5 months | Closed (stale) | Mattermost bot request, 4 👍 — significant interest but never implemented |
| [#1599](https://github.com/HKUDS/nanobot/pull/1599) | ~4 months | Open (conflict) | Telegram streaming via `sendMessageDraft` — conflict-labeled, stale. Good QoL feature |
| [#4587](https://github.com/HKUDS/nanobot/pull/4587) | ~15 days | Open (conflict) | WebUI Markdown export — conflict-labeled, needs conflict resolution |

**Maintainer attention needed**: The Telegram streaming PR (#1599) has been open for 4 months with conflict tags. Given that Telegram is a widely-used channel, resolving conflicts here would benefit a large user segment. The Mattermost request (#1011) had 4 upvotes and was closed as stale without implementation—reopening or documenting a workaround could improve transparency.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-14

## Today's Overview

Hermes Agent shows **high activity** with 50 issues and 50 PRs updated in the last 24 hours. The project maintains a strong **closure velocity**: 32 of 50 issues were closed, and 5 PRs were merged today, reflecting ongoing sweeper-bot and maintainer engagement with community-reported bugs and feature requests. 18 issues remain open, and 45 PRs are open for review. No new releases were published today, but the sheer volume of closed items (especially P2/P3 bugs) signals steady progress toward stability. The community is most engaged with **desktop app UX polish**, **multi-platform gateway improvements**, and **credential/authentication edge cases**.

## Releases

**No new releases today.**

## Project Progress

**5 PRs were merged/closed** in the last 24 hours:

- **QQ Bot Reconnection Stability** (`#37274`, closed): Wraps `_reconnect()` in try/except at all call sites to prevent backoff counter bypass — fixes a crash-loop risk (fixes #37125).
- **Telegram Topic Rename on Restore** (`#36991`, open but active): Fixes `/topic <session-id>` leaving default Telegram topic name instead of restored session title.
- **Desktop App Bug Fixes** (multiple): Flickering chat transcripts (#37549), scroll snap-back (#37527), duplicate pasted screenshots (#37575), IME composition handling (#37483), unbounded sticky user prompts (#37675), and Windows scaling (#37619) — all closed via sweeper `implemented-on-main`.
- **Gateway Identity Loading** (`#37480`, closed): Telegram gateway now respects custom `SOUL.md` and `AGENTS.md` instead of defaulting to "I'm Hermes Agent…".
- **Chinese UI Localization** (`#37503`, `#37562`, both closed): Two requests for Chinese-language UI were merged as implemented on main, suggesting i18n framework progress.

## Community Hot Topics

**Most active Issues (by comment count):**

1. **#15311** (14 comments) — *Add generic action buttons/inline keyboard support for messaging platforms*  
   – [Link](https://github.com/NousResearch/hermes-agent/issues/15311)  
   – *Analysis:* A long-standing (since April) feature request that keeps drawing attention. The community wants a **platform-agnostic abstraction** for interactive buttons (Telegram inline keyboards, Slack blocks, etc.) without per-feature hardcoding. High demand (7 👍) suggests this is a top-requested UX enhancement for gateway sessions.

2. **#24860** (10 comments) — *Dashboard Chat: Ctrl+V paste broken, image paste not supported*  
   – [Link](https://github.com/NousResearch/hermes-agent/issues/24860)  
   – *Analysis:* A core UX blocker for the web/TUI dashboard. Users cannot paste text or images into the composer, which breaks normal chat workflows. This is open and has been active for two months — a notable gap.

3. **#37549 / #37527** (8 + 6 comments) — *Desktop chat flickering and scroll snap-back*  
   – Both closed today. Users were experiencing **severe UX regressions** where reading longer responses was impossible due to auto-scrolling. The rapid closure (both via sweeper on main) indicates these were high-priority regressions from recent desktop app changes.

4. **#37713** (5 comments, 11 👍) — *Desktop Remote gateway should support switching active Hermes profile from the UI*  
   – [Link](https://github.com/NousResearch/hermes-agent/issues/37713) – Closed.  
   – *Analysis:* Ten thumbs-up in under 48 hours. This feature gap was a **major pain point** for users running Hermes Desktop connected to remote backends. The high engagement and fast closure suggest the team recognized this as a critical missing piece.

## Bugs & Stability

**P1 Bugs (Critical):**
- **#63425** — *Provider auto-detection discards credential pools and disables failover* (created 2026-07-12, open, 2 comments)  
  – [Link](https://github.com/NousResearch/hermes-agent/issues/63425)  
  – *Impact:* When `provider=None` and endpoint auto-detection triggers, the credential pool is silently dropped, leaving the agent **without any failover capability**. No fix PR yet. This is the only P1 bug currently open.

**P2 Bugs (High):**
- **#51652** (open, 3 comments) — Copilot credential auto-seeded from `gh auth token` without consent, contaminates credential pool and breaks subagent routing. No fix PR.
- **#60388** (open, 2 comments) — `max_tokens` settings silently dropped on most providers; title generators produce unbounded output. No fix PR.
- **#14061** (open, 3 comments) — WeCom timeout fallback produces duplicate messages. No fix PR.
- **#54996** (open, 2 comments) — Command-shaped API keys can poison credential pool auth. No fix PR.
- **#37230** (closed today) — Windows CLI `/new` and `/clear` hang/freeze in Git Bash. Fixed via sweeper on main.

**P3 Bugs (Notable):**
- **#63911** (open, 3 comments, created yesterday) — Telegram DM topic mode silently swallows kanban wake events; completions never processed. Newly filed, no fix PR yet — risk of lost work for Telegram topic users.
- **#37363** (closed) — Anthropic OAuth with team plan fails authentication despite "Configured successfully". Closed as `sweeper:cannot-reproduce`.

**Observations:** The cluster of P1/P2 credential-pool bugs (#63425, #51652, #54996) suggests a **systemic fragility** in the credential management layer. Multiple users are hitting edge cases where credentials are silently discarded or contaminated.

## Feature Requests & Roadmap Signals

**High-impact requests recently closed (likely in next release):**
- **Profile switcher for Desktop remote gateway** (#37713) — merged. Users can now switch profiles from the UI when connected to a remote Hermes backend.
- **Chinese UI localization** (#37503, #37562) — both merged. Desktop client now supports 中文 UI.
- **Multi-model deliberation `/council` command** (#37569) — closed as `sweeper:not-planned`. The team declined this ambitious 3-stage pipeline feature.

**Top open requests likely prioritized:**
- **Generic action buttons/inline keyboards** (#15311) — 14 comments, 7 👍, open since April. The strong and sustained demand suggests this will be addressed in an upcoming gateway refactor.
- **Configurable bounded auto-continue** (#16004, 5 comments, open since April) — Users want the agent to auto-continue when max tool-call iterations are reached, rather than stopping. This would improve autonomous workflows.
- **Gateway event idempotency** (#16108, 2 comments, open since April) — Duplicate replies from messaging platforms remain a known weakness.

**New signals from today:**
- **TypeWhisper MCP catalog entry** (#64016, PR opened today) — Speech-to-text integration is being officially added to the MCP catalog.
- **Native mobile shell** (#52673, open PR, created 2026-06-25) — An Expo/React Native mobile app for Hermes Desktop is in review, validated on iPhone with Android config.

## User Feedback Summary

**Pain Points (reported this week):**
- *"Chat is unusable on long threads"* — users frustrated with flickering and scroll snap-back in the desktop app (#37549, #37527). Now fixed.
- *"I can't paste anything into the dashboard"* — Ctrl+V text paste and image paste are broken in the web/TUI Dashboard (#24860). Still open.
- *"My custom identity is ignored by the Telegram gateway"* — users who carefully configured SOUL.md and AGENTS.md found their agent defaulting to "I'm Hermes Agent" (#37480). Now fixed.
- *"Enter key sends before I finish typing in Japanese/Chinese/Korean"* — IME composition handling broken on desktop (#37483). Now fixed.
- *"Switching profiles is impossible on remote Desktop"* — users managing multiple Hermes backends needed a UI switcher (#37713). Now fixed.

**Satisfaction signals:**
- Fast response to desktop app regressions (closed within 24-48 hours) indicates good triage.
- Chinese-speaking users responded positively to the localization closure (#37503, #37562).
- Community is actively contributing — 45 open PRs, new contributors filing detailed bug reports with root cause analysis (e.g., #63911, #63425).

## Backlog Watch

**Long-unanswered items needing maintainer attention:**

1. **#15311** (2026-04-24, open) — *Generic action buttons / inline keyboard support*  
   – 14 comments, 7 👍, no maintainer response since April. This is the most-requested open feature.

2. **#16004** (2026-04-26, open) — *Configurable bounded auto-continue on max tool iterations*  
   – 5 comments, no PR or maintainer assignment. A key usability gap for autonomous workflows.

3. **#16108** (2026-04-26, open) — *Gateway event idempotency, cancellation, and stale-response suppression*  
   – 2 comments, no maintainer response. Duplicate reply problem persists across platforms.

4. **#24860** (2026-05-13, open) — *Dashboard Chat: Ctrl+V paste broken*  
   – 10 comments, open for 2 months. This is a persistent core UX blocker.

5. **#18460** (2026-05-01, open PR) — *fix(acp): pass fallback_providers to AIAgent*  
   – ACP clients (Obsidian, VS Code, JetBrains, Zed) have no provider failover. PR has been open for 74 days with no review. This is a **significant parity gap** between CLI/gateway and ACP integrations.

6. **#11252** (2026-04-16, open PR) — *feat(skills): add bundled kubernetes-readonly devops skill*  
   – PR open for 89 days. A well-structured skill contribution that has not received review.

**Verdict:** The ACP-related PRs (#18460, #11252) and the paste issue (#24860) represent the most visible gaps between community need and maintainer attention. The credential-pool bugs (#63425, #51652) are the highest-risk unresolved items from a stability perspective.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-14

## 1. Today's Overview

The PicoClaw project shows moderate activity with 4 issues and 5 PRs updated in the last 24 hours, though all existing items are marked as stale. No new releases were published. The community continues to focus on cryptographic library migrations (libolm → vodozemac), API compatibility fixes for Gemini, and infrastructure improvements for Anthropic prompt caching. The single merged PR today (#3253) adds a gateway webhook feature, indicating ongoing server-side integration work. Overall, the project is healthy but experiencing a lull in new contributions, with several important items awaiting maintainer attention.

## 2. Releases

No new releases were published in the last 24 hours. The latest available version remains at 0.3.1 (referenced in bug reports).

## 3. Project Progress

One pull request was merged today:

- **[#3253 (merged) – Feat/gateway webhook](https://github.com/sipeed/picoclaw/pull/3253)**  
  Author: tisoga | Merged: 2026-07-13  
  Adds a webhook feature for the gateway component. This likely enables external services to be notified of gateway events, improving integration capabilities. No breaking changes were flagged.

No other features or fixes were merged today.

## 4. Community Hot Topics

The most active discussion involves two issues:

- **[#3088 – Use vodozemac instead of libolm](https://github.com/sipeed/picoclaw/issues/3088)** (8 comments, 2 👍)  
  This long-standing feature request (opened June 9) continues to draw attention. The community strongly supports replacing the unmaintained libolm library with vodozemac, the official Matrix encryption replacement. The technical challenge involves making libolm optional at compile time. High priority, but remains unresolved after 5 weeks.

- **[#3229 – Rolling conversation cache breakpoints for anthropic-messages](https://github.com/sipeed/picoclaw/issues/3229)** (1 comment)  
  Proposed by a contributor who also submitted the related PR #3228, this addresses the need to cache large conversation histories in Anthropic API calls. The underlying need is cost reduction for agentic workloads where input tokens are dominated by repeated conversation history.

## 5. Bugs & Stability

One active bug was reported today:

- **[#3230 – Function call missing thought_signature when calling Gemini via OpenAI compat format](https://github.com/sipeed/picoclaw/issues/3230)** — **Severity: High**  
  Affects versions 0.2.9 through 0.3.1. When using tool calls to Gemini through Cloudflare AI Gateway in OpenAI-compatible format, Gemini returns a `missing thought_signature` error. This breaks tool-use functionality for users routing through Cloudflare. No fix PR exists yet. The issue is 8 days old with no maintainer response.

No other bugs, crashes, or regressions were reported in the last 24 hours.

## 6. Feature Requests & Roadmap Signals

Notable feature requests from today and recent activity:

- **[#3088 – vodozemac replacement](https://github.com/sipeed/picoclaw/issues/3088)** — High priority, security-related. Likely targeted for next major release (0.4.x) given its "priority: high" label.

- **[#3229 – Cache breakpoints for anthropic-messages](https://github.com/sipeed/picoclaw/issues/3229)** — Directly related to open PR #3228. This is likely to land in the next minor release as it has an active contributor and implementation is partially complete.

- **[#3231 – SearXNG basic auth header support](https://github.com/sipeed/picoclaw/issues/3231)** — Minor enhancement for the search integration. Unlikely to be prioritized unless more users request it.

## 7. User Feedback Summary

User feedback reveals several pain points:

- **Library security concerns**: The continued reliance on unmaintained libolm (issue #3088) is a clear security and maintenance worry for users, especially those deploying in production environments.
- **API compatibility friction**: The Gemini thought_signature bug (#3230) frustrates users who rely on Cloudflare AI Gateway for cost/performance reasons, pointing to gaps in PicoClaw's provider abstraction layer.
- **Cost optimization demand**: The Anthropic caching proposal (#3229) shows users are actively seeking ways to reduce API costs in agentic workflows, indicating production usage at scale.
- **Privacy/security in search**: The SearXNG auth header request (#3231) reveals user preference for secure query parameters rather than URL-embedded credentials.

Overall satisfaction appears moderate—users are engaging with constructive proposals but waiting on resolution for known issues.

## 8. Backlog Watch

Critical items needing maintainer attention:

- **[#3088 – vodozemac replacement](https://github.com/sipeed/picoclaw/issues/3088)** — Open since June 9, 2026 (5 weeks). Stale. Labeled "priority: high" yet no PR or assignee. Security-critical.
- **[#3228 – anthropic-messages cache_control fix](https://github.com/sipeed/picoclaw/pull/3228)** — Open since July 6, 2026 (8 days). Stale. Has no comments from maintainers. Would unblock issue #3229.
- **[#3230 – Gemini thought_signature bug](https://github.com/sipeed/picoclaw/issues/3230)** — Open since July 6, 2026 (8 days). Stale. No maintainer response, no workaround provided. Severity is high as it blocks tool-use through Cloudflare.
- **[#3192, #3191](https://github.com/sipeed/picoclaw/pulls?q=is%3Apr+is%3Aopen+author%3Achengzhichao-xydt)** — Two trivial chore PRs (Docker base image bump, gitignore cleanup) open since June 27, 2026 (17 days). Both stale. Low risk, easy to merge.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-14

## Today's Overview
The NanoClaw project experienced a major cleanup day with 31 PRs updated in the last 24 hours—25 of which were merged or closed, alongside 3 closed issues. This unusually high PR velocity signals a coordinated maintainer push to resolve accumulated technical debt and security patches. No new releases were published today. The core team is actively addressing security vulnerabilities in the approval flow, stabilizing message delivery, and expanding the channel ecosystem with structured skill formats and new providers like Dial.

## Releases
No new releases were published on 2026-07-14. The latest available release remains the previous version.

## Project Progress
Twenty-five merged/closed PRs advanced several key areas:

**Security Fixes:**
- [#2998](https://github.com/nanocoai/nanoclaw/pull/2998) — Fixes the self-modification approval card to render the full MCP server payload including `args` and `env`, directly addressing the approval-smuggling vulnerability reported in issues #2827 and #2762
- [#2802](https://github.com/nanocoai/nanoclaw/pull/2802) (open) — Socket hardening with client timeout/cap and server fail-closed/frame-cap

**Message Delivery Reliability:**
- [#2226](https://github.com/nanocoai/nanoclaw/pull/2226) — `deliveryAdapter.deliver` now throws `MissingChannelAdapterError` instead of silently dropping messages
- [#2996](https://github.com/nanocoai/nanoclaw/pull/2996) — Missing-adapter messages now route into retry path instead of being marked delivered
- [#2743](https://github.com/nanocoai/nanoclaw/pull/2743) — `ncl wirings create` now creates the companion `agent_destinations` ACL row

**New Features:**
- [#3022](https://github.com/nanocoai/nanoclaw/pull/3022) — Scheduled tasks support in templates with cron schedules and script gates
- [#3032](https://github.com/nanocoai/nanoclaw/pull/3032) — Native Dial channel adapter for SMS + AI voice calls
- [#3033](https://github.com/nanocoai/nanoclaw/pull/3033) — Dial integrated into setup wizard channel picker
- [#3035](https://github.com/nanocoai/nanoclaw/pull/3035) — Structured skill format where SKILL.md drives channel installation
- [#2906](https://github.com/nanocoai/nanoclaw/pull/2906) — Instance-wide default agent provider configuration
- [#2947](https://github.com/nanocoai/nanoclaw/pull/2947) — `ncl tasks` CLI for operator control of scheduled tasks
- [#2944](https://github.com/nanocoai/nanoclaw/pull/2944) — Expiry and cleanup of abandoned pending-approval rows
- [#2938](https://github.com/nanocoai/nanoclaw/pull/2938) — `ncl wirings create` now delegates to canonical helper
- [#2120](https://github.com/nanocoai/nanoclaw/pull/2120) — Per-provider error substitution rules
- [#2966](https://github.com/nanocoai/nanoclaw/pull/2966) — Better logging when errored agent-runner batches are acked as completed

**Container/Agent Improvements:**
- [#3002](https://github.com/nanocoai/nanoclaw/pull/3002) — Warning when a real entry blocks a shared skill symlink
- [#3037](https://github.com/nanocoai/nanoclaw/pull/3037) (open) — Optional MCP tool allowlist via environment variable
- [#3036](https://github.com/nanocoai/nanoclaw/pull/3036) (open) — Inject `current_time` into context header with weekday in local timestamps

**Provider-Agnostic Memory (Core):**
- [#3012](https://github.com/nanocoai/nanoclaw/pull/3012) (open) — Provider-agnostic persistent memory tree
- [#3013](https://github.com/nanocoai/nanoclaw/pull/3013) (open) — Codex integration to load shared memory on session start

## Community Hot Topics
No issues or PRs had comments beyond the original description; most show `Comments: 0` or `undefined`. This suggests discussion may be happening on other platforms or that these are primarily core-team driven changes. The most significant topics by nature:

**Security Vulnerabilities (Critical Interest):**
- [#2827](https://github.com/nanocoai/nanoclaw/issues/2827) — `add_mcp_server` approval flow hides runtime `args` and `env` enabling approval smuggling
- [#2762](https://github.com/nanocoai/nanoclaw/issues/2762) — Same class of vulnerability, hidden `args` and `env` persisted without showing approver

**Underlying Need:** The community (and security researchers like YLChen-007) are demanding transparency in agent self-modification flows. These vulnerabilities allow an attacker-controlled agent to smuggle dangerous arguments past human approval. The fix in #2998 addresses both issues by rendering the full MCP server payload on the approval card.

**Message Delivery Issues:**
- [#2995](https://github.com/nanocoai/nanoclaw/issues/2995) — Outbound messages to an offline channel adapter marked delivered without any send

**Underlying Need:** Operators and integrators need reliable message delivery semantics—silent message loss in offline conditions erodes trust in the platform for production deployment, especially in multi-channel setups.

## Bugs & Stability
**High Severity:**
- **Approval smuggling via hidden MCP server args/env** — [#2827](https://github.com/nanocoai/nanoclaw/issues/2827), [#2762](https://github.com/nanocoai/nanoclaw/issues/2762) — Both closed with fix PR [#2998](https://github.com/nanocoai/nanoclaw/pull/2998) merged. This represents a serious security vulnerability that could allow malicious agents to execute unauthorized operations.

**Medium Severity:**
- **Messages silently marked delivered to offline adapters** — [#2995](https://github.com/nanocoai/nanoclaw/issues/2995) — Closed with fix PRs [#2226](https://github.com/nanocoai/nanoclaw/pull/2226) and [#2996](https://github.com/nanocoai/nanoclaw/pull/2996) merged, which now route missing-adapter messages into the retry path and throw explicit errors.

**Low Severity (Fix Open):**
- **Agent confuses day-of-week and hour on scheduled-task turns** — Addressed by PR [#3036](https://github.com/nanocoai/nanoclaw/pull/3036) (open), which injects current time with weekday into context headers.
- **Missing socket timeout/overflow protection** — PR [#2802](https://github.com/nanocoai/nanoclaw/pull/2802) (open) adds client timeout/cap and server fail-closed/frame-cap for the host-side transport.

## Feature Requests & Roadmap Signals
Strong signals point toward the following features likely arriving in the next release:

1. **Provider-Agnostic Memory System** — PRs [#3012](https://github.com/nanocoai/nanoclaw/pull/3012) and [#3013](https://github.com/nanocoai/nanoclaw/pull/3013) introduce a persistent memory tree shared across agent providers, scaffolded per agent group, and loaded via Codex's `SessionStart` hook. This is foundational infrastructure likely to ship together.

2. **Structured Skill Format** — PR [#3035](https://github.com/nanocoai/nanoclaw/pull/3035) makes SKILL.md the single source of truth for channel installation, replacing bespoke per-channel wizard flows. This standardizes the skill ecosystem and simplifies adding new channels.

3. **MCP Tool Allowlisting** — PR [#3037](https://github.com/nanocoai/nanoclaw/pull/3037) adds an environment variable to restrict MCP tools to an allowlist, giving operators fine-grained control over agent capabilities.

4. **Scheduled Tasks in Templates** — PR [#3022](https://github.com/nanocoai/nanoclaw/pull/3022) allows templates to define recurring cron-style tasks, which are created paused when the agent group is stamped. This extends NanoClaw's template system significantly.

5. **Dial Channel Integration** — PRs [#3032](https://github.com/nanocoai/nanoclaw/pull/3032) and [#3033](https://github.com/nanocoai/nanoclaw/pull/3033) add SMS + AI voice call support via Dial, expanding the channel ecosystem beyond chat-only adapters.

User-facing feature requests visible in today's data are minimal; most activity appears driven by core team and security researchers rather than general user feature requests.

## User Feedback Summary
**Positive Signals:**
- The core team is responsive to security reports—issues #2827 and #2762 were closed with matching fix PRs within weeks of disclosure.
- Message delivery reliability is being actively improved with multiple merged PRs addressing silent-drop scenarios.
- Operator control is expanding (tasks CLI, approval row expiry, allowlists).

**Pain Points Addressed:**
- Silent message loss to offline/undeployed channels was a clear user pain point; fixed in #2226 and #2996.
- Missing `agent_destinations` ACL rows when creating wirings caused agent messages to be silently dropped; fixed in #2743 and #2938.
- Runaway scheduled tasks lacked operator oversight; addressed by `ncl tasks` CLI in #2947.
- Approval-card opacity allowed hidden arguments to be smuggled past human approvers; fixed in #2998.

**Potential Remaining Pain Points:**
- Socket transport currently has no timeout or buffer limits, risking hung connections (PR #2802 still open).
- Agent time-awareness is unreliable, especially on cron-triggered turns (PR #3036 still open).

## Backlog Watch
- **PR [#2802](https://github.com/nanocoai/nanoclaw/pull/2802) (open since 2026-06-17)** — Socket hardening is a security-relevant fix that has been open for nearly one month. Given the focus on security today, this should be a priority for review and merge.
- **PRs [#3012](https://github.com/nanocoai/nanoclaw/pull/3012) and [#3013](https://github.com/nanocoai/nanoclaw/pull/3013) (open since 2026-07-10)** — The provider-agnostic memory system is a major feature spanning both NanoClaw core and Codex. These represent significant architectural changes that require careful review to avoid regressions.
- **PR [#3036](https://github.com/nanocoai/nanoclaw/pull/3036) (open since 2026-07-13)** — Fixing agent time awareness for scheduled tasks is a quality-of-life improvement that directly affects production reliability.
- **PR [#3037](https://github.com/nanocoai/nanoclaw/pull/3037) (open since 2026-07-13)** — MCP tool allowlisting is a security hardening feature that complements today's approval-flow fixes.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-14

## Today's Overview

NullClaw shows moderate activity today with **zero new issues** but **17 pull requests updated** in the last 24 hours, indicating a focus on review and merge activity rather than bug reporting. Four PRs were merged/closed, signaling steady progress toward stabilizing key subsystems. The project maintains a healthy pipeline of **13 open PRs** covering CLI improvements, security hardening, and provider documentation. No new releases were published today, suggesting the team is consolidating work for a future version. Overall, the project appears in a **consolidation phase** with attention to quality-of-life features and cross-platform compatibility.

## Releases

No new releases were published today.

## Project Progress

Four pull requests were merged or closed today:

- **PR #951** (fix/agent_runner): Suppressed stderr initialization logs when agent child processes fail, preventing misleading error output from being posted to channels.
- **PR #950** (fix/gateway): Moved port probing before memory allocations in gateway startup, eliminating a test resource leak when `AddressInUse` errors occur.
- **PR #949** (fix/config): Made `queue_mode` configurable from `config.json` via `agent.default_queue_mode`, with fallback to existing behavior.
- **PR #948** (fix/cron): Fixed cron agent delivery attribution by passing delivery origin metadata into spawned subprocesses, improving traceability for scheduled tasks.

These merged PRs address **gateway reliability**, **cron job correctness**, and **configuration flexibility** — core infrastructure concerns that broaden deployment options.

## Community Hot Topics

The following PRs generated the most sustained attention today (all with updates in the last 24h):

- **PR #970** — [Fix CLI arrow key handling in agent REPL](https://github.com/nullclaw/nullclaw/pull/970)  
  Implements a minimal, allocation-free line editor for interactive TTY sessions, handling arrow keys, history navigation, cursor movement, and word-boundary shortcuts. Signals user demand for a more polished interactive experience.

- **PR #953** — [Fix Discord gateway socket recovery](https://github.com/nullclaw/nullclaw/pull/953)  
  Addresses closed gateway sockets by cleaning up heartbeat threads and adding grace windows for stalled reconnects. Reflects community need for **robust long-running channel connections**.

- **PR #959** — [Persist paired token for cron scheduler](https://github.com/nullclaw/nullclaw/pull/959)  
  Persists bearer tokens (encrypted via SecretStore) across restarts, enabling cron/schedule tools to authenticate without re-pairing. Addresses a **common operational pain point** for scheduled automation.

The underlying theme: users need **reliable persistent connections and authenticated scheduled tasks** for production deployments.

## Bugs & Stability

No new bugs were reported today. The closed PRs addressed existing stability concerns:

| Severity | Issue | Fix Status | Details |
|----------|-------|------------|---------|
| **Medium** | Cron jobs silently failing to deliver messages (use-after-free in `OutboundMessage.channel`) | ✅ Fixed in PR #954 | One-shot schedule jobs executed but output was lost due to memory corruption |
| **Medium** | Discord gateway sockets closing without reconnect | ✅ Fixed in PR #953 | Heartbeat thread left dangling; grace windows added for stalled reconnects |
| **Low** | Stderr initialization logs appearing as agent responses on failure | ✅ Fixed in PR #951 | Non-zero exit codes caused misleading output to channels |
| **Low** | Gateway memory leak on `AddressInUse` in tests | ✅ Fixed in PR #950 | Early-exit path didn't clean up pre-allocated resources |

All identified bugs now have fix PRs in progress or merged.

## Feature Requests & Roadmap Signals

Notable feature developments in today's active PRs:

1. **Native Anthropic Provider** (PR #962) — Documentation for direct Anthropic API key usage with OAuth/Pro-Plan auto-detection. Likely to land in next release as documented capability, not new code.

2. **Structured Approval Flow** (PR #969) — Two-turn tool approval with SSE events and channel UI rendering. This is a **significant UX enhancement** for safety-conscious deployments and could appear in the next minor release.

3. **Configurable Memory Controls** (PR #961) — New `auto_recall`, `recall_limit`, and `max_context_bytes` settings. Addresses **performance tuning** for large deployments; likely to ship in next version.

4. **Native API-level tool calls during streaming** (PR #964) — Enables tool execution from streamed responses. A **core architectural improvement** for provider compatibility.

5. **Weixin iLink Bot documentation** (PR #963) — Clan Chinese channel documentation suggests **growing Asian market adoption**.

## User Feedback Summary

Based on active PR content and issues referenced:

- **Pain point: interactive REPL usability** — Arrow keys in the agent shell printed control characters instead of navigating history. PR #970 addresses this directly.
- **Pain point: token persistence for cron** — Users had to re-pair after each restart for scheduled tasks. PR #959 resolves this with encrypted token storage.
- **Pain point: Discord channel unreliability** — Gateway disconnections were not recovering properly. PR #953 provides graceful reconnect handling.
- **Satisfaction signal**: Documentation additions (PRs #962, #963) suggest users are actively provisioning the project in production with multiple providers and regional channels.
- **Demand signal**: Memory configuration controls (PR #961) indicate users want **finer-grained performance tuning** for their specific workloads.

## Backlog Watch

Several older open PRs continue to require attention:

- **PR #956** (dependabot, Alpine 3.23→3.24) — Docker image dependency update; has been open since June 15. Low urgency but should be merged to stay current with base images.

- **PR #958** (Teams JWT claim fix) — Blocks MS Teams channel functionality for some enterprise deployments; has been open since June 16 with no merge activity.

- **PR #966** (Android curl fallback) — Critical for Android/Termux users since June 19; the DNS resolution fix is platform-specific but important for mobile deployments.

- **PR #963** (Weixin iLink Bot docs) — Documentation-only PR open since June 18; low risk for merge but signals community interest in WeChat integration.

These PRs represent **community contributions waiting for maintainer review** — particularly #958 and #966 which affect production deployments on specific platforms.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-14

## Today's Overview
IronClaw shows heavy activity with 34 issues and 50 PRs updated in the last 24 hours, indicating sustained development momentum. The project appears to be in the midst of major architectural work, with ongoing stack PRs for the NEA-25 unified extension model and significant bug-bash efforts surfacing numerous P2 and P3 issues. A concerning pattern is the high volume of recently opened bug reports (many from 2026-07-13 alone), suggesting the project may be in a stabilization phase following feature work. Contributor activity remains strong, with core team members driving both large refactors and targeted fixes.

## Releases
**No new releases today.** The open release PR #5598 (`chore: release`) remains pending since 2026-07-03, which would bump `ironclaw_common` from 0.4.2 to 0.5.0 (API breaking), `ironclaw_skills` from 0.3.0 to 0.4.0 (API breaking), and `ironclaw` from 0.24.0 to 0.29.1. The lengthy delay between PR creation and merge suggests possible unresolved concerns or dependency chain issues.

## Project Progress
**14 PRs merged/closed today**, representing meaningful forward movement:

- **Extension Architecture (NEA-25):** PR #6061 (closed) — Unified extension model Train A roll-up, superseding PRs #5833–#5850. PR #5957 (closed) — Hardened OAuth and per-user extension lifecycles. PR #6054 (closed) — Slack DM counterpart resolution fix.
- **WebUI v2 Migration:** PR #6057 (closed) — Enforced TypeScript source conventions, finishing the v2 migration. PR #6053 (open but merged) — Timeline ordering fix and dismissable error bubbles.
- **Storage/Session Handling:** PR #5971 (closed) — Fixed storage error cause propagation when compaction summary persistence fails.
- **Channel Support:** PR #6062 (new) — Added Matrix Reborn channel skeleton, expanding platform coverage.
- **Agent Loop & Developer Experience:** PR #6013 (open) — Tools-capable completion nudge for interactive coding. PR #6059 (open) — Structured `result_read` repair guidance with truncation awareness.

## Community Hot Topics
- [#5948 — GitHub extension falsely reports as activated](https://github.com/nearai/ironclaw/issues/5948) (5 comments): The assistant reports a GitHub extension as "installed and configured" when it is only installed but not activated. This UI/model misalignment is a quality-of-life issue that confuses users about their actual extension state.
- [#5640 — Harness gap: no RecordingSecurityAuditSink double](https://github.com/nearai/ironclaw/issues/5640) (2 comments): A correctness gap in the integration testing harness where `hook_security_audit_sink` is always `None` instead of wired with a test double. Core infrastructure concern that could mask security-related bugs.
- [#5741 — builtin.http.save fails with OutputTooLarge](https://github.com/nearai/ironclaw/issues/5741) (2 comments): Users cannot save large web pages via `builtin.http.save`, receiving unhelpful error messages. The fix likely requires streaming or chunked storage rather than in-memory limits.
- [#6000 — No SECURITY.md or private reporting channel](https://github.com/nearai/ironclaw/issues/6000) (1 comment): A user with a potential security finding cannot report it privately. This is a governance and security hygiene concern that needs immediate maintainer attention.

## Bugs & Stability

### Critical/P1
- **#5943 — Slack DM action posts to current channel instead of DMs** `[bug_bash_P1]`: When asked "send me a Slack DM," the bot posts to the current shared channel. **No fix PR exists.**
- **#6048 — Model attempts to call unavailable tool** `[bug_bash_P2]`: Large multi-step tasks fail when the model references tools no longer available. **No fix PR exists.**

### High/P2
- **#5836 — Routine fails every 5 minutes with "No thread attached"** `[bug_bash_P2]`: Scheduled routine runs show 0% success rate.
- **#5885 — Approval notification opens without showing approval message** `[bug_bash_P2]`: Users cannot approve/deny actions from notifications.
- **#5879 — Stale error banner persists after successful follow-up** `[bug_bash_P2]`: Error banners not cleared on subsequent successful runs.
- **#6043 — GitHub connection flow fails with generic error instead of launching auth** `[bug_bash_P2]`: Broken GitHub OAuth flow.
- **#6044 — Enter key sometimes does not submit message** `[bug_bash_P2]`: Intermittent WebUI input submission bug.
- **#6045 — Agent diagnoses root cause instead of fixing it** `[bug_bash_P2]`: Agent identifies 403 errors caused by missing headers but asks user for permission instead of auto-retrying.
- **#6046 — Email-to-sheet workflow invokes 124 tools** `[bug_bash_P2]`: Excessive tool invocation for simple tasks, indicating inefficiency in agent planning.
- **#6047 — Task messages displayed out of chronological order** `[bug_bash_P2]`: Conversation flow broken by incorrect message ordering.
- **#6060 — Routine delivery target leaks across all routines** `[bug_bash, created_by_ironclaw]`: Setting one routine to deliver to Slack causes all routines to deliver to Slack.

### Medium/P3
- **#5889 — "Load older messages" button does nothing** `[bug_bash_P3]`
- **#5948 — GitHub extension falsely reports as activated** `[bug_bash_P3]`
- **#6037 — Chat connection status hidden during reconnects** (no P rating but live-service critical)
- **#6039 — Light theme has unreadable button/status colors** (UI regression)
- **#6049 — Gmail disconnect produces generic "Validation" error**
- **#6051 — Large documents labeled with warning icon instead of informational**
- **#6052 — Extensions Registry takes up to 10 seconds to load**

## Feature Requests & Roadmap Signals
- **Matrix Channel Support** (PR #6062): A new WASM-based Matrix channel skeleton has landed, signaling expansion beyond Slack/email into open-source chat protocols. Likely targeting Q3 release.
- **MCP Registration Store** (PR #5970): Per-user MCP server registration infrastructure is in progress, suggesting MCP tool integration is nearing completion.
- **Offline v1-to-Reborn Migration** (PR #5936): A major migration workflow for moving from the legacy v1 system to Reborn, indicating the project is preparing for production cutover.
- **Extension Ownership Migration** (PR #6058): Building and shipping ownership migration for extensions into the runtime image.
- **Interactive Coding Nudge** (PR #6013): Tools-capable completion nudges suggest enhanced developer workflow features are being prioritized.

## User Feedback Summary
The bug bash results reveal several recurring user pain points:

1. **Misleading UI state (#5948, #5879, #6050, #6051)**: Users frequently encounter UI elements that display incorrect status (error banners after success, activation status mismatches, warning icons for non-critical items). This erodes trust in the interface.
2. **Authentication flow fragility (#6043, #5882, #6049, #6029)**: Multiple extensions have broken or stuck authentication flows. Users report being unable to configure, deactivate, or reconnect extensions after initial setup.
3. **Agent inefficiency (#6046, #6045)**: Users observe the agent over-invoking tools (124 calls for a simple task) or failing to autonomously fix known issues (403 errors due to missing headers), reducing perceived value.
4. **Routine/systemic reliability (#5836, #6060)**: Scheduled routines fail consistently, and configuration changes leak across unrelated routines.

## Backlog Watch
- **#5640 — Harness gap: no RecordingSecurityAuditSink double** (2026-07-04): Unresolved for 10 days. This is a testing infrastructure gap that could allow security-related bugs to reach production. The `wiring_parity.rs` test that surfaced this is blocked.
- **#5598 — Release PR** (2026-07-03): Pending for 11 days. The release would bring multiple breaking changes. Delayed merge suggests unresolved API or dependency concerns.
- **#6000 — Security reporting channel** (2026-07-11): A user with a potential security finding is blocked from private disclosure. No maintainer response in 3 days. This is a governance gap that needs immediate resolution.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-14

**Source:** [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. Today's Overview

The LobsterAI project saw an intense day of maintenance activity on July 13, 2026, with **21 pull requests updated** — a remarkably high throughput for a single day. Of those, **19 were closed or merged**, and only **2 remain open**, indicating strong review velocity and decisive maintainer action. No new releases were published, and no new issues were opened or updated, suggesting the team is focusing on resolving technical debt and installation stability rather than feature expansion. The presence of multiple cross-architecture Windows packaging fixes (binary signing, extraction self-heal, web installer) together with deep Cowork routing and notification upgrades points to an active stabilization sprint. The only potentially concerning signal is **2 stale open PRs** (#1277 and #1323, both from April 2026) that received updates today but remain unmerged — these may indicate dependency or architectural blockers.

---

## 2. Releases

**None.** No new release tags were detected for the period covered.

---

## 3. Project Progress — Merged/Closed PRs Today

### Windows & Build System Overhaul (Highest Activity Area)
- **#2327** — [CLOSED] Fixed Windows binary signing: `electron-builder` was only signing the NSIS installer shell, leaving the inner `LobsterAI.exe` unsigned, causing security software to freeze during first execution. A new `win-sign.cjs` script now signs every Windows binary (app exe, uninstaller, installer) via the internal Youdao signing service.
- **#2326** — [CLOSED] Self-healing Windows resource extraction: The NSIS installer now tries the trusted system `tar.exe` first and falls back to the bundled extractor under a 10-minute watchdog, preventing hanging installs when security software freezes the extractor on first execution.
- **#2323** — [CLOSED] Added an opt-in Windows web installer target (`nsis-web`) gated by `LOBSTERAI_WEB_INSTALLER` environment variable, downloading the app package from a CDN at install time.
- **#2321** — [CLOSED] Fixed macOS update failure (`hdiutil` failed) — likely related to DMG mounting issues during auto-update.
- **#2328** — [CLOSED] Fixed concurrent browser launch/search serialization to prevent Chrome process leaks during skill execution.

### Cowork & Notification Upgrades
- **#2318** — [CLOSED] Desktop notification overhaul: `TaskCompletionNotifier` renamed to `DesktopNotificationManager` with extended support for waiting notifications (permission requests, questions), foreground notification mode, and stale-alert tracking.
- **#2324** — [CLOSED] Stream ordered thinking blocks: OpenClaw thinking is now displayed as per-turn ordered blocks before corresponding tools or final response, with deduplication during history reconciliation.
- **#2319** — [CLOSED] Homepage quick-action scenarios revamped: replaced "教育学习" (education/learning) with a "文档写作" (document writing) category mapped to the docx skill, refreshed sample prompts, and kept the chip bar visible after category selection.
- **#2325** — [CLOSED] Fixed badge/title descender clipping and stabilized the cowork template.
- **#2320** — [CLOSED] Fast-forward missed cron jobs: Previously, skipping startup catch-up left stale `nextRunAtMs` timestamps, causing all missed jobs to replay on the first regular tick. Now `nextRunAtMs` is advanced to the next occurrence when `skipMissedJobs` is enabled.
- **#2322** — [CLOSED] Optimized file card rendering (no details in summary).

### Cowork Routing & Queuing (from earlier days, merged today)
- **#2315** — [CLOSED] Queued follow-up coordinator now processes across sessions and while the app is minimized.
- **#2316** — [CLOSED] Windows title bar logo compression fixed when sidebar is collapsed with an update badge.
- **#2289** — [CLOSED] Cleared stalled compaction retry maintenance by reusing the recoverable retry wait path — prevents infinite retry loops.
- **#2292** — [CLOSED] Stabilized steer follow-up routing with Codex-style queuing, session-scoped streaming state, and proper new-chat session replacement.
- **#2300** — [CLOSED] Steer queue now supports file attachments: dragged files, pasted files, selected text, and image payloads with lightweight snapshot storage.

### UI Improvements (Stale PRs from April closed today)
- **#1488** — [CLOSED] Scheduled task module UI overhaul: card grid layout, search, date-range filtering, history grouped by date with improved layout.
- **#1494** — [CLOSED] Cowork skill selection moved from global state (`skillSlice.activeSkillIds`) to session-scoped state (`coworkSlice.draftActiveSkillIds`), fixing the bug where skills selected in one session leaked to others.

---

## 4. Community Hot Topics

No new issues were opened today. The two open pull requests that received updates are:

- **#1277** — [OPEN] `dependabot[bot]`: `electron` from 40.2.1 to 43.1.0 and `electron-builder` update. **Last updated July 13.** This PR has been open since April 2, 2026 — 102 days. The major version bump (40 → 43) likely introduces breaking changes affecting build scripts and native modules, which may be blocking its merge.
  - **Link:** [/netease-youdao/LobsterAI/pull/1277](https://github.com/netease-youdao/LobsterAI/pull/1277)

- **#1323** — [OPEN] `kayo5994`: Narrow input-too-long error classification in cowork. **Last updated July 13.** Open since April 2. Fixes misleading "input too long" errors for short inputs. The delayed merge may be due to architectural changes in error handling that this PR needs to align with.
  - **Link:** [/netease-youdao/LobsterAI/pull/1323](https://github.com/netease-youdao/LobsterAI/pull/1323)

**Analysis:** The lack of new issues combined with high PR throughput suggests the project is in a stabilization phase following a recent feature release. The two stale PRs likely represent known dependency/refactoring blockers that maintainers are actively revisiting (they received activity today).

---

## 5. Bugs & Stability

| Severity | Bug | Status |
|----------|-----|--------|
| **Critical** | Windows binary unsigned: security software freezes `LobsterAI.exe` on first install, hanging the process | **Fixed** in #2327 (signed via Youdao internal service) |
| **Critical** | Installer hangs when security software freezes the freshly-written extractor exe on first execution | **Fixed** in #2326 (fallback to system `tar.exe` + 10-min watchdog) |
| **High** | macOS auto-update fails: `hdiutil` DMG mounting failure | **Fixed** in #2321 |
| **High** | Chrome process leak from concurrent browser launch/search operations | **Fixed** in #2328 (serialized launch) |
| **Medium** | Missed cron jobs replay on first timer tick after skipped catch-up | **Fixed** in #2320 (fast-forward `nextRunAtMs`) |
| **Medium** | Stalled compaction retry maintenance never cleared | **Fixed** in #2289 (reused retry wait path) |
| **Low** | Title bar logo compressed in Windows when sidebar collapsed with badge | **Fixed** in #2316 |
| **Low** | Stale notification alerts not tracked | **Fixed** in #2318 (stale-alert tracking) |

**Assessment:** No new bugs were reported today. The bugs fixed today are overwhelmingly installation and runtime stability issues on Windows and macOS, with a strong theme of security software interference during installation. This suggests the app has been encountering deployment friction in enterprise environments with active antivirus/malware protection.

---

## 6. Feature Requests & Roadmap Signals

No explicit user feature requests were identified in the day's activity. However, several merged features provide strong roadmap signals:

1. **Coword Notification Infrastructure (#2318)** — The new `DesktopNotificationManager` with foreground mode and stale tracking suggests an upcoming push toward persistent assistant presence (notifications that survive app closure).

2. **Web Installer Support (#2323)** — The opt-in CDN-backed web installer (`nsis-web`) is a clear signal of intent to reduce installer download size and support a faster, streaming installation experience — likely targeting enterprise deployment or corporate IT-managed environments.

3. **Queued Steer with Attachments (#2300, #2315)** — The ability to queue follow-up messages (including files/images) during active turns and process them across sessions/minimized windows indicates the product is moving toward a **persistent background assistant** use case, where users can "throw" work at the AI agent without waiting for a response.

4. **Structured Thinking Display (#2324)** — Ordered per-turn thinking blocks before tools/final response suggests LobsterAI is exposing chain-of-thought reasoning to users for transparency and debugging — a feature that aligns with the broader AI assistant market trend toward reasoning transparency.

**Prediction for next release:** The next version (likely 1.x or 2.x) will ship with:
- The full queued steer follow-up system with attachments
- Desktop notification manager with persistent foreground mode
- New Windows installer (web installer + signed binaries + self-heal extraction)
- Structured thinking blocks in Cowork sessions

---

## 7. User Feedback Summary

No direct user feedback (comments, reactions, issues) was captured in today's data. However, the nature of the fixes provides indirect evidence of user pain points:

- **Installation friction on Windows:** The serial of fixes (#2326, #2327, #2323, #2321) addressing security software interference, unsigned binaries, and hanging installs suggests users (especially in enterprise/corporate environments) have been experiencing significant installation failures. The team is clearly prioritizing removing these barriers to adoption.

- **Multi-session confusion:** The fix in #1494 (skill selection leaking across sessions) indicates users were experiencing incorrect behavior when switching between Cowork sessions — a UX issue that likely caused confusion and frustration.

- **Missed job execution:** The cron fast-forward fix (#2320) addresses a scenario where scheduled tasks either replayed unexpectedly or were silently skipped — both of which undermine user trust in automation features.

- **Labeling: [stale] and [dependabot]** — The two open PRs are tagged `[stale]` or authored by `dependabot[bot]`, suggesting that non-core-contributor contributions and dependency updates receive slower attention from maintainers. This could be a source of dissatisfaction for contributors.

---

## 8. Backlog Watch

| Item | Age | Severity | Notes |
|------|-----|----------|-------|
| **#1277** — Electron 40→43 bump (dependabot) | 102 days (since April 2) | **High** — Major version dependencies block new features; security updates may be missed | Received update today — maintainers are aware. Could require breaking change migration. |
| **#1323** — Input too long error misclassification | 102 days (since April 2) | **Medium** — UX bug that misleads users | Also received activity today. Likely blocked by cowork error handling refactoring. |
| **No new issues opened** in 24h | — | — | This is not inherently concerning but may indicate low community participation or a deliberate maintenance-only phase. |

**Recommendation:** Both stale PRs (#1277 and #1323) should be triaged within the next 2 weeks. The Electron version gap (40→43) is now 3 major releases behind — security vulnerabilities in earlier Electron versions could become a risk. Consider creating a dedicated sprint to merge #1277 with necessary migration patches, or close it with clear guidance if the bump is postponed indefinitely.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the project digest for **Moltis** on **2026-07-14**.

---

## Moltis Project Digest – 2026-07-14

### 1. Today’s Overview
The Moltis project is currently in a low-activity window. Over the last 24 hours, no new Issues were created or closed, and no new releases were published. The only activity was a single open Pull Request (#1147) which was updated two days ago. This suggests the maintainers may be in a review or planning phase, or the project is experiencing a temporary lull in community contributions. With zero open Issues, the tracked bug backlog is effectively clear, indicating a healthy baseline state, but the lack of recent merged work warrants monitoring for stagnation.

### 2. Releases
**None.** No new releases were published on or around this date.

### 3. Project Progress
No Pull Requests were merged or closed in the last 24 hours. The only open PR is still awaiting review or changes:
- **PR #1147 (Open)** – *fix(caldav): honor time range in list_events via server-side calendar-query*  
  This PR addresses a significant functional bug where the `start`/`end` parameters were ignored, causing the client to always fetch all calendar resources. The fix implements proper server-side filtering. It was updated on July 13 but remains unmerged.  
  [View PR #1147](https://github.com/moltis-org/moltis/pull/1147)

### 4. Community Hot Topics
There are no Issues or PRs with active discussions or reactions today. The single open PR (#1147) has zero comments and zero reactions. This likely reflects the quiet period rather than a lack of interest, but it may also indicate that the community needs clearer guidance on how to contribute or test recent changes.

### 5. Bugs & Stability
- **No new bugs reported in the last 24 hours.**
- **Critical/High Severity:** The bug addressed by PR #1147 (CalDAV `list_events` ignoring time range) is a high-severity logic defect that breaks documented behavior across all servers. While no new report was filed today, the existence of an open fix PR means this issue is acknowledged but not yet resolved.  
  *Status:* Fix exists in open PR #1147.

### 6. Feature Requests & Roadmap Signals
No new feature requests were filed today. Based on the only recent PR (#1147), the immediate roadmap signal is **server-side calendar query optimization**. This is a core infrastructure fix rather than a new feature, but it unlocks reliable date-range filtering for downstream tools. It is likely to be included in the next minor release (e.g., v0.x.x) once merged.

### 7. User Feedback Summary
No user feedback or comments were recorded today. The silence could be interpreted as either satisfaction (no complaints) or low engagement. The most actionable piece of implicit feedback comes from PR #1147: users or developers discovered that the documented `list_events` parameters were non-functional, representing a clear pain point in reliability and adherence to documentation.

### 8. Backlog Watch
- **PR #1147 – Open, no comments, no reactions**  
  *Campaign:* Fix for CalDAV time range ignoring.  
  *Status:* Last updated July 13, no maintainer response yet.  
  *Risk:* If this fix stalls, users relying on time-filtered calendar queries will continue to experience incorrect behavior (over-fetching). This is the single actionable item requiring maintainer attention.  
  [View PR #1147](https://github.com/moltis-org/moltis/pull/1147)

---

**Project Health Summary:** Stable but idle. No regressions. The main risk is an unmerged fix for a known functional defect in CalDAV. Maintainers should prioritize review of PR #1147 to restore documented behavior and prevent community frustration.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the project digest for **CoPaw** (GitHub: `agentscope-ai/CoPaw`) based on data from **2026-07-13**, generated on **2026-07-14**.

---

## CoPaw Project Digest — 2026-07-14

### 1. Today's Overview
CoPaw is experiencing a **high-velocity but turbulent** period following the release of **v2.0.0.post1**. The project recorded **50 updated Issues** and **50 updated PRs** over the last 24 hours, indicating a massive surge in community feedback and developer activity. The primary narrative is a **stability crisis in v2.0.0**: multiple regressions related to context compression, tool-call pairing, and the new permission/governance system have been flagged by users and are being urgently patched by maintainers. While the team has merged **28 PRs** (including critical bug fixes), **22 PRs remain open** alongside **26 open Issues**, suggesting that the project is in a "firefighting" mode to stabilize the new major version.

### 2. Releases
**v2.0.0.post1** was released in the last 24 hours.
- **Changes:** Includes a fix for browser autofill on provider search input ([#6011](https://github.com/agentscope-ai/QwenPaw/pull/6011)) and a legacy session fix.
- **Breaking Changes / Migration Notes:** None explicitly stated in the release notes, but the intense bug reporting suggests that users migrating from v1.x face significant configuration and feature gaps (e.g., missing SSH Offline, 404 profiles).
- **State:** The "post1" patch indicates an attempt to address initial v2.0.0 bugs, but the sheer volume of new reports shows the release is not yet stable.

### 3. Project Progress
The team merged/closed **28 PRs** today, focusing heavily on crash mitigation and feature parity defects:
- **Tool-Call/Context Fixes:** A critical multi-layer defense against orphaned `tool_result` messages was merged ([#5989](https://github.com/agentscope-ai/QwenPaw/pull/5989)). The background offload hint mechanism was flattened and temporarily disabled ([#6058](https://github.com/agentscope-ai/QwenPaw/pull/6058)) to stop causing 400 API errors.
- **Governance & Permissions:** A new PR bridges frontend tool-guard rules into the policy deep scan ([#6063](https://github.com/agentscope-ai/QwenPaw/pull/6063)), and a "global sandbox switch" was added to reduce low-value approval prompts ([#6054](https://github.com/agentscope-ai/QwenPaw/pull/6054)).
- **Console/UI Fixes:** A fix for a memory leak (FD exhaustion) in skill reconciliation was merged ([#6062](https://github.com/agentscope-ai/QwenPaw/pull/6062)). The message queue clearing on session deletion was corrected ([#6045](https://github.com/agentscope-ai/QwenPaw/pull/6045)).
- **Infrastructure:** The `doctor` CLI command was updated to use a readiness endpoint instead of a removed API route ([#6053](https://github.com/agentscope-ai/QwenPaw/pull/6053)). Dependency `reme-ai` was bumped to v0.4.1.0 ([#6060](https://github.com/agentscope-ai/QwenPaw/pull/6060)).

### 4. Community Hot Topics
The most active discussions revolve around **v2.0.0 regressions**:
- **[Bug #5996 (Closed): Model Execution Error in v2.0.0](https://github.com/agentscope-ai/QwenPaw/issues/5996)** (10 comments): The highest-comment issue. Root cause identified as a `ToolResultBlock` being serialized as a `role=tool` message without a preceding `tool_calls`, leading to a 400 API error. This was the catalyst for multiple hot-fix PRs (#6050, #6052).
- **[Bug #5961 (Open): Loop Execution in v2.0.0](https://github.com/agentscope-ai/QwenPaw/issues/5961)** (7 comments): Users report agents constantly writing and deleting files. This suggests a fundamental flaw in the agent's state management or tool feedback loop in the new runtime.
- **[Question #5980 (Open): Missing Features in v2.0.0](https://github.com/agentscope-ai/QwenPaw/issues/5980)** (5 comments): User reports that core features from v1.1.12 (SSH Offline, Profiles) are returning 404 errors in the new Desktop app. This highlights a severe feature parity regression.

### 5. Bugs & Stability
The project health is **RED** due to recurring, systemic API-level errors.
- **Critical (Fix Merged): Orphan `tool_result` messages causing 400 errors.**
    - **Symptoms:** Model execution failure, “Internal error” on WeChat/Feishu channels ([#5996](https://github.com/agentscope-ai/QwenPaw/issues/5996), [#5962](https://github.com/agentscope-ai/QwenPaw/issues/5962), [#6034](https://github.com/agentscope-ai/QwenPaw/issues/6034), [#6049](https://github.com/agentscope-ai/QwenPaw/issues/6049)).
    - **Root Cause:** Context compression splitting `tool_call`/`tool_result` pairs ([#5960](https://github.com/agentscope-ai/QwenPaw/issues/5960)).
    - **Fix:** Multiple PRs merged ([#5989](https://github.com/agentscope-ai/QwenPaw/pull/5989), [#6058](https://github.com/agentscope-ai/QwenPaw/pull/6058)).
- **High: Background Offload Kills Subprocess Immediately ([#6056](https://github.com/agentscope-ai/QwenPaw/issues/6056)).**
    - **Symptom:** Long-running shell commands are killed instantly instead of running in background.
    - **Component:** ToolCoordinator.
- **High: MCP Tool Permissions Broken ([#5947](https://github.com/agentscope-ai/QwenPaw/issues/5947)).**
    - **Symptom:** "Deny" rules for MCP sub-tools are ignored; agents can still invoke them.
    - **Status:** Confirmed but not yet patched.
- **Medium: Shell command timeout hard-coded at 60s ([#5963](https://github.com/agentscope-ai/QwenPaw/issues/5963)).**
- **Medium: Dream feature fails due to missing module (`agentscope.tool._builtin._scripts`) in PyInstaller builds ([#6024](https://github.com/agentscope-ai/QwenPaw/issues/6024), [#5965](https://github.com/agentscope-ai/QwenPaw/issues/5965)).**

### 6. Feature Requests & Roadmap Signals
User requests indicate a need for **more granular control and stability** rather than new novelty features:
- **CIDR Whitelist for Host Approval ([#6048](https://github.com/agentscope-ai/QwenPaw/issues/6048)):** A user requests support for CIDR notation in the “no-authentication host” whitelist. This is a high-quality request indicating enterprise/ops usage.
- **Reversion of Permission Model ([#5954](https://github.com/agentscope-ai/QwenPaw/issues/5954)):** A user explicitly asks for the old "whitelist" permission mode, finding the new "smart/auto/off" system cumbersome. This suggests the new UX for governance is a friction point.
- **Prediction:** The next minor release (v2.0.2 or v2.1.0) will likely focus on **reverting or reworking the context compression logic** and **hardening the Governance system** to ensure "Allow/Deny" rules actually take effect.

### 7. User Feedback Summary
User sentiment is **highly negative**, primarily driven by regression and instability.
- **Pain Points:**
    - "v2.0.0 is increasingly unstable, not as good as v1.xxx" ([#6013](https://github.com/agentscope-ai/QwenPaw/issues/6013)).
    - "Losing message queue functionality; hurry up and fix it!" ([#6006](https://github.com/agentscope-ai/QwenPaw/issues/6006)).
    - "The agent ‘adds content’ arbitrarily; it's a very strange phenomenon" ([#6034](https://github.com/agentscope-ai/QwenPaw/issues/6034)).
- **Workflow Impact:** Users on channels like WeChat and Feishu report receiving "Internal error" responses, making the AI agent completely unusable in those contexts.
- **Comparison:** Users are comparing CoPaw unfavorably to competitors (e.g., Tencent's WorkBuddy) regarding stability ([#6013](https://github.com/agentscope-ai/QwenPaw/issues/6013)).

### 8. Backlog Watch
Several important Issues and PRs require immediate maintainer attention to prevent further user attrition:
- **[Open #5984](https://github.com/agentscope-ai/QwenPaw/issues/5984): Tool approval prompts on Feishu cannot be disabled.** User on Raspberry Pi/ARM devices cannot disable sandbox prompts. This is a platform-specific blocker.
- **[Open #6020](https://github.com/agentscope-ai/QwenPaw/issues/6020): Approval system routes to wrong channel; `approval_level: OFF` is ignored.** This is a core governance bug that makes the config interface misleading.
- **[Open #5069 (PR, Created June 10)](https://github.com/agentscope-ai/QwenPaw/pull/5069): Visual model fallback for text-only models.** This is a month-old PR with no recent activity. While not critical, its stagnation suggests a lack of bandwidth for feature work.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-14

## Today's Overview

ZeroClaw shows **sustained high development velocity**, with 50 issues and 50 PRs updated in the last 24 hours. The project maintains a healthy open/closed ratio of 37 active vs. 13 closed issues and 45 open vs. 5 merged/closed PRs, indicating strong triage momentum. The worklanes RFC (#6808) remains the dominant governance conversation as it enters rollout in v0.8.2, while a major push is underway across memory backends (Hindsight integration), provider serialization, and operator UX onboarding. Two S1-severity bugs—a Telegram channel configuration block (#8505) and a Docker Compose gateway loopback issue (#9035)—have attracted maintainer attention. No new releases were cut today, but the project is clearly in an active development cycle toward v0.8.3.

## Releases

**No new releases today.** The last release remains v0.8.2 (implied by context; no official release notes provided). The project appears to be working toward v0.8.3, which is tracked by issue #8360 focusing on provider and native-tool message serialization.

## Project Progress

Five PRs were merged or closed today. Notable advancements:

- **Closed Issues** (13 total): The test coverage campaign made significant progress, with four test-enhancement issues closed: storage-reader timestamp edge cases (#7694), insecure-TLS confirmation flow (#7693), responses-wire option propagation (#7690), and hook panic recovery (#7688). These are direct follow-ups from the 13-shard coverage review tracker (#7685).

- **Fixed Bugs**: The `google_workspace` tool was patched to accept camelCase methods required by Google Workspace CLI (#9044, closed). A critical documentation quality issue (#7758) was also closed—addressing user frustration with configuration syntax documentation.

- **Operational Fixes**: The maintenance team shortened the issue stale window from 45 to 15 days (PR #8989, merged via the doc pipeline), signaling tighter community responsiveness expectations.

## Community Hot Topics

**Most active issues** (by comment count):

1. **#6808 — RFC: Work Lanes, Board Automation, and Label Cleanup** (14 comments, status: accepted/rollout in progress) — This governance RFC continues to drive how the project routes work without manual maintainer overhead. Now in Rev. 16, it's being implemented as rollout proceeds through v0.8.2.
   - https://github.com/zeroclaw-labs/zeroclaw/issues/6808

2. **#6165 — RFC: Prefer a lighter ZeroClaw core through external integrations** (9 comments, status: accepted) — Defines the boundary for keeping the core lean by moving long-tail integrations toward skills, MCP servers, and plugin-hosted tools. Community interest signals desire for a modular, extensible architecture.
   - https://github.com/zeroclaw-labs/zeroclaw/issues/6165

3. **#7800 — Bug: Code help/keybindings are misleading, especially on macOS** (5 comments) — A UX pain point affecting ZeroCode users, particularly on macOS where advertised actions are unreachable. Community frustration is visible.
   - https://github.com/zeroclaw-labs/zeroclaw/issues/7800

**Most active PRs** are dominated by a stacked series from contributor `logical-and` (PRs #8992-#8995), adding Hindsight as a first-class memory backend, a Home Assistant REST tool, improved dashboard reporting, and optimized defaults. These represent a coordinated feature push.

## Bugs & Stability

**Critical/S1 bugs reported today:**

1. **#9035 — Docker Compose gateway loopback-bound** (S1, risk: high) — Published ports unreachable after `docker compose up -d`; "Connection refused" response. No fix PR yet. 
   - https://github.com/zeroclaw-labs/zeroclaw/issues/9035

2. **#9028 — Ctrl+C on Windows force-quits agent** (S2, risk: high) — Returns exit code 1073741510. No fix PR identified.
   - https://github.com/zeroclaw-labs/zeroclaw/issues/9028

3. **#9016 — OpenAI tool fails when Chat Completions rejects reasoning effort** (S1, risk: medium) — Non-`none` reasoning effort with function tools causes total turn failure. Affects OpenAI-compatible models like `gpt-5.6-sol`. No fix PR.
   - https://github.com/zeroclaw-labs/zeroclaw/issues/9016

4. **#9019 — OpenAI Responses provider rejects vision capability** (S1, risk: medium) — Hardcoded `vision = false` blocks image input for `wire_api = "responses"` providers. In-progress fix PR #9021 defaults new slots to `wire_api=responses` but doesn't address the vision capability issue directly.
   - https://github.com/zeroclaw-labs/zeroclaw/issues/9019

**Notable regressions:**
- #9037 (PR, open): OpenRouter streamed assistant text leaks `<eom>` markers from certain models (Jamba) into visible transcript—a channel-delivery issue affecting user experience.

## Feature Requests & Roadmap Signals

**User-requested features gaining traction:**

1. **Slack Events API mode** (#9022) — Request for optional HTTP Request URL mode for scale-to-zero deploys alongside existing polling and Socket Mode. Indicates enterprise/deployment interest.
   - https://github.com/zeroclaw-labs/zeroclaw/issues/9022

2. **Session rewind and fork-from-message** (#9020) — Allows forking conversations from selected turns, recovering from provider/attachment failures without starting fresh. Likely for v0.8.3.
   - https://github.com/zeroclaw-labs/zeroclaw/issues/9020

3. **Dedicated pairing code GUI** (#8998) — Dashboard card for channel pairing codes, improving setup UX for Telegram/WeChat/Line. High-risk, accepted.
   - https://github.com/zeroclaw-labs/zeroclaw/issues/8998

4. **Warn on nonexistent peer_group channel refs** (#8997) — Config validation improvement—simple but high-impact for onboarding.
   - https://github.com/zeroclaw-labs/zeroclaw/issues/8997

**Prediction for v0.8.3:** Expect provider message serialization improvements (tracker #8360), Hindsight memory backend (PR #8992), Home Assistant tool (PR #8994), and ZeroCode consolidation work (tracker #9010).

## User Feedback Summary

**Pain points expressed today:**

- **Documentation quality** (#7758, now closed): "It doesn't matter how good the code is if the documentation is crap." User reported being unable to write a configuration file due to missing syntax documentation. This was addressed, but signals a systemic onboarding friction.

- **Telegram channel unusable** (#8505): Bot doesn't respond after quickstart setup; "zeroclaw channels doctor" claims channels not configured. Blocks first-time users.

- **macOS keybinding confusion** (#7800): ZeroCode TUI advertises unreachable actions, damaging perceived reliability.

- **Windows Ctrl+C behavior** (#9028): Unexpected hard process termination with obscure exit code on Windows.

**Satisfaction indicators:**
- High community contribution activity (multiple PRs from first-time contributors like `ConYel`, `kouhe3`, `tonsiasy`)
- Test coverage campaign nearing completion demonstrates project maturity
- Governance RFCs (#6808, #6165) show transparent, community-involved decision-making

## Backlog Watch

**Issues needing maintainer attention:**

1. **#12 — Gateway 64KB per-connection buffer with no connection limit** (DoS risk, filed 2026-02-14) — Long-dormant security concern in `src/gateway/mod.rs:111`. Still open despite medium severity; no recent activity. Could be a ticking bomb for production deployments.
   - https://github.com/zeroclaw-labs/zeroclaw/issues/12

2. **#7758 — Docs quality** (closed today, but underlying sentiment warrants monitoring) — The frustration level suggests systematic doc gaps that may resurface.

3. **#8353 — Error message improvements** (PR, open since June 26) — Small but important quality-of-life PR adding context to panic messages; needs review.
   - https://github.com/zeroclaw-labs/zeroclaw/pull/8353

4. **#8495 — DingTalk streaming support** (PR, stale candidate, open since June 29) — Large feature PR for Chinese enterprise chat platform; may need maintainer decision on prioritization.
   - https://github.com/zeroclaw-labs/zeroclaw/pull/8495

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kky-wollu/agents-radar).*