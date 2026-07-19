# OpenClaw Ecosystem Digest 2026-07-20

> Issues: 367 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-19 22:56 UTC

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

# OpenClaw Project Digest — July 20, 2026

## Today's Overview

OpenClaw shows **very high activity** on July 19–20, with **367 issues** and **500 pull requests** updated in the last 24 hours, far exceeding a normal day's cadence. The project shipped **v2026.7.2-beta.3** with highlights including remote coding sessions and native automation nodes. However, the data reveals a **concerning backlog**: the vast majority of issues (291 of 367) carry the `clawsweeper:no-new-fix-pr` tag, and many high-severity bugs remain unaddressed despite having clear reproduction steps. The community is highly engaged, with sustained discussion on long-standing feature requests (some over 200 days old) and a flurry of localization PRs from contributors. Overall, the project is shipping code rapidly but appears to be accumulating technical debt in both open bugs and feature requests awaiting product decisions.

---

## Releases

**v2026.7.2-beta.3** (released July 19, 2026)

### Highlights
- **Remote coding sessions:** Run Control UI sessions on cloud workers; open Codex and Claude catalog sessions in terminals on their owning hosts; resume OpenCode and Pi sessions directly in a terminal.
- **Native automation and nodes:** New automation primitives for headless agent execution.

*No breaking changes or migration notes were provided in the release notes excerpt.*

---

## Project Progress

**Newly merged/closed PRs in last 24h: 160**

Key merges and closings:

| PR | Summary | Impact |
|---|---|---|
| [#111553](https://github.com/openclaw/openclaw/pull/111553) | `fix(agents): preserve hatch for fresh named workspaces` | Prevents fresh workspaces from being incorrectly treated as hatched before first use |
| [#111554](https://github.com/openclaw/openclaw/pull/111554) | `fix(ui): prevent cross-file mock leakage in Control UI tests` | Test infrastructure reliability |
| [#111555](https://github.com/openclaw/openclaw/pull/111555) | `fix(doctor): repair active profile state reliably` | `doctor --fix` now works with custom state directories |
| [#111556](https://github.com/openclaw/openclaw/pull/111556) | `fix: prevent plugin runtime state leaking across tests` | Isolates test environment |
| [#111557](https://github.com/openclaw/openclaw/pull/111557) | `improve(i18n): generate native locales after merge` | Reduces noise in locale PRs |
| [#111560](https://github.com/openclaw/openclaw/pull/111560) | `fix(onboarding): keep recommendations isolated by workspace` | Multi-workspace onboarding fix |
| [#107547](https://github.com/openclaw/openclaw/pull/107547) | `fix(telegram): DM lane stays dead after a wedged handler` | Resolves Telegram DM recovery issue (#107482) |
| [#108075](https://github.com/openclaw/openclaw/issues/108075) | Closed bug: LLM schema rejection in 2026.7.1 | Regression fix |

**Notable open PRs advancing features:**
- [#111530](https://github.com/openclaw/openclaw/pull/111530): Drag-and-drop attachments in Control UI composer
- [#111524](https://github.com/openclaw/openclaw/pull/111524): Pinned MCP apps on session dashboards
- [#111391](https://github.com/openclaw/openclaw/pull/111391): CLAW.md manifest support
- A 5-PR localization series ([#111541](https://github.com/openclaw/openclaw/pull/111541) through [#111545](https://github.com/openclaw/openclaw/pull/111545)) consolidating product surfaces, governance, and runtime adoption

---

## Community Hot Topics

### Most Active Issues

| Issue | Comments | Reaction | Topic |
|---|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) — Linux/Windows Clawdbot Apps | **114** | 👍80 | ***Longest-running request*** (200+ days). Users want parity with macOS/iOS. P2 but has "help wanted" tag. |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) — Memory Trust Tagging by Source | **17** | — | Security: prevent memory poisoning from untrusted content |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) — Masked Secrets for API Keys | **14** | 👍4 | Security: agents should use keys but not see them |
| [#13583](https://github.com/openclaw/openclaw/issues/13583) — Pre-response enforcement hooks | **14** | 👍2 | Hard gating for mandatory tool-call rules (finance/security) |
| [#94846](https://github.com/openclaw/openclaw/issues/94846) — Cron isolated agentTurn delivery bug | **12** | — | Recovered tool error misclassified as fatal in cron |
| [#109490](https://github.com/openclaw/openclaw/issues/109490) — Codex app-server turn interrupted | **11** | — | Regression in 2026.7.1: delegated tool result kills session |
| [#44431](https://github.com/openclaw/openclaw/issues/44431) — Browser tool field test improvements | **11** | — | 7 improvements from real-world automation |
| [#79077](https://github.com/openclaw/openclaw/issues/79077) — Telegram guest bots & bot-to-bot | **11** | 👍8 | Support for Telegram's May 2026 platform release |
| [#109867](https://github.com/openclaw/openclaw/issues/109867) — Beta.2 migration blocks gateway startup | **6** | 👍7 | **P0 blocker**: index created before column |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) — Webhook session reuse broken | **10** | — | `sessionKey` documented but not implemented |
| [#6599](https://github.com/openclaw/openclaw/issues/6599) — `/models test-fallback` command | **6** | — | Users need way to verify fallback chains work |
| [#110950](https://github.com/openclaw/openclaw/issues/110950) — "Everything is a cron" unification | **6** | 👍2 | Architectural proposal from a maintainer |

### Analysis of Community Needs

1. **Cross-platform parity** (#75) remains the dominant community request after 200+ days — Linux and Windows users feel left behind.
2. **Security hardening** is the second major theme: memory poisoning (#7707), masked secrets (#10659), pre-response enforcement (#13583), and exec denylists (#6615) all address the same core concern — agents operating dangerously in untrusted contexts.
3. **Telegram integration** is a hot area: two major feature requests (#79077 for guest bots, #7540 for call events) and a regression bug (#111519) all drew significant engagement.

---

## Bugs & Stability

### Critical (P0 — actively blocking users)

| Issue | Description | Fix PR? |
|---|---|---|
| [#109867](https://github.com/openclaw/openclaw/issues/109867) | **Beta.2→beta.3 migration fails**: SQLite index created before column, blocking gateway startup. 6 comments, 👍7 | Not yet linked |

### High Severity (P1 — functional regressions or major loss)

| Issue | Description | Fix PR? |
|---|---|---|
| [#109490](https://github.com/openclaw/openclaw/issues/109490) | Codex app-server: turn interrupted after delegated tool result. Regression in 2026.7.1 | Not linked |
| [#111519](https://github.com/openclaw/openclaw/issues/111519) | **Telegram DM replies fall back** after stale DM-scope cleanup in 2026.7.2-beta.3 | Not linked |
| [#92405](https://github.com/openclaw/openclaw/issues/92405) | Subagent spawn persists raw provider instead of CLI runtime — depth-2 spawns silently die | Not linked |
| [#85246](https://github.com/openclaw/openclaw/issues/85246) | UI Update button crashes Gateway when npm global + launchd | Not linked |
| [#108075](https://github.com/openclaw/openclaw/issues/108075) | LLM request schema rejection in 2026.7.1 | ✗ **CLOSED** |
| [#108238](https://github.com/openclaw/openclaw/issues/108238) | Context usage includes `cacheRead` in totalTokens, falsely triggering compaction | Linked PR open |
| [#83337](https://github.com/openclaw/openclaw/issues/83337) | Plugin/core version drift after upgrade causes silent channel failure | Not linked |
| [#111506](https://github.com/openclaw/openclaw/issues/111506) | Rapid-fire requests cause session lock contention on heavy contexts (180+ messages) | Not linked |
| [#99910](https://github.com/openclaw/openclaw/issues/99910) | Memory dreaming run pegs gateway event loop for ~10 min — unresponsive | Not linked |

### Medium Severity (P2 — behavior bugs or data loss risks)

| Issue | Description |
|---|---|
| [#94846](https://github.com/openclaw/openclaw/issues/94846) | Cron treats recovered tool error as fatal — message delivery skipped |
| [#93139](https://github.com/openclaw/openclaw/issues/93139) | `write` tool and `exec` heredocs insert literal `\n` instead of newlines |
| [#103198](https://github.com/openclaw/openclaw/issues/103198) | WebChat image attachments not mapped to media store path |
| [#87182](https://github.com/openclaw/openclaw/issues/87182) | Memory-core dreaming: narrative text lost after cleanup runs before plugin reads results |
| [#81525](https://github.com/openclaw/openclaw/issues/81525) | Media-understanding routes images to vision models without validating capabilities |
| [#110065](https://github.com/openclaw/openclaw/issues/110065) | Schema rejects `compaction.enabled` field that code actually reads |

### Regression Watch
Three regressions in the **2026.7.x series** are notable:
- `2026.7.1`: Codex turn interruption ([#109490](https://github.com/openclaw/openclaw/issues/109490))
- `2026.7.2-beta.3`: Telegram DM fallback ([#111519](https://github.com/openclaw/openclaw/issues/111519))
- `2026.7.2-beta.2→beta.3`: Migration fails ([#109867](https://github.com/openclaw/openclaw/issues/109867))

---

## Feature Requests & Roadmap Signals

### Likely in Next Minor Release (2026.7.3)

| Feature | Issue | Reasoning |
|---|---|---|
| Grouped Claw agent updates | [#102959](https://github.com/openclaw/openclaw/pull/102959) + [#102982](https://github.com/openclaw/openclaw/pull/102982) | Multiple large PRs open, design nearly complete |
| Localization consolidation | [#111541](https://github.com/openclaw/openclaw/pull/111541)–[#111545](https://github.com/openclaw/openclaw/pull/111545) | 5-PR series in active review, maintainer-authored |
| CLAW.md manifest | [#111391](https://github.com/openclaw/openclaw/pull/111391) | Documentation + tooling for Claw manifests |
| Pinned MCP apps on dashboard | [#111524](https://github.com/openclaw/openclaw/pull/111524) | Feature PR submitted, maintainer-authored |
| Drag-and-drop attachments | [#111530](https://github.com/openclaw/openclaw/pull/111530) | Small UI enhancement, ready for review |

### Longer-Term Signals

| Feature | Issue | Community Interest |
|---|---|---|
| **Linux/Windows apps** | [#75](https://github.com/openclaw/openclaw/issues/75) | **Highest** (👍80, 114 comments) — but no movement in 200 days |
| **Memory Trust Tagging** | [#7707](https://github.com/openclaw/openclaw/issues/7707) | High (security focus), no fix PR |
| **Masked Secrets** | [#10659](https://github.com/openclaw/openclaw/issues/10659) | High (security focus), no fix PR |
| **Pre-response enforcement hooks** | [#13583](https://github.com/openclaw/openclaw/issues/13583) | Enterprise/finance need |
| **Telegram guest bots** | [#79077](https://github.com/openclaw/openclaw/issues/79077) | Platform parity with Telegram's May 2026 release |
| **"Everything is a cron" unification** | [#110950](https://github.com/openclaw/openclaw/issues/110950) | Architectural — proposed by maintainer **steipete** |
| **Skill Permission Manifest** | [#12219](https://github.com/openclaw/openclaw/issues/12219) | Security — skill sandboxing |
| **Browser tool improvements** | [#44431](https://github.com/openclaw/openclaw/issues/44431) | UX — 7 concrete fixes from real-world testing |
| **Session auto-titling** | [#99583](https://github.com/openclaw/openclaw/issues/99583) | Quality-of-life |
| **Streaming TTS for voice calls** | [#8355](https://github.com/openclaw/openclaw/issues/8355) | Voice pipeline latency reduction |

---

## User Feedback Summary

### Pain Points (Repeated Complaints)

1. **Regression fatigue**: Multiple users report upgrades breaking previously working features (Telegram, LLM schemas, migration). The density of regression reports in the 2026.7.x series is concerning.

2. **Silent failures**: Users report agents silently failing with no error messages:
   - Subagent spawns that never start ([#92405](https://github.com/openclaw/openclaw/issues/92405))
   - Channels silently broken after upgrade ([#83337](https://github.com/openclaw/openclaw/issues/83337))
   - Context overflow misdiagnosis ([#108238](https://github.com/openclaw/openclaw/issues/108238))

3. **Documentation vs. implementation gaps**: Multiple users note features documented as working that do not:
   - Webhook `sessionKey` for multi-turn ([#11665](https://github.com/openclaw/openclaw/issues/11665))
   - Model fallback chain only works for API errors, not context overflow ([#9986](https://github.com/openclaw/openclaw/issues/9986))
   - `compaction.enabled` read by code but rejected by schema ([#110065](https://github.com/openclaw/openclaw/issues/110065))

4. **Cross-platform exclusion**: 114 comments on the Linux/Windows app request indicate significant frustration from non-macOS users.

### Satisfaction Signals

- **Speed of feature PRs**: Maintainers are shipping code rapidly — 160 merged/closed PRs in 24 hours.
- **Localization investment**: The 5-PR series shows commitment to i18n.
- **Responsive to Telegram issues**: PR [#107547](https://github.com/openclaw/openclaw/pull/107547) fixing DM lane recovery was merged, and Telegram regression [#111519](https://github.com/openclaw/openclaw/issues/111519) received maintainer attention quickly.

### Use Cases Revealed

| Use Case | Evidence | Implication |
|---|---|---|
| Enterprise/finance automation | [#13583](https://github.com/openclaw/openclaw/issues/13583) — hard gate enforcement | Need for deterministic agent behavior |
| Email provider signups | [#44431](https://github.com/openclaw/openclaw/issues/44431) — 9+ providers | Browser automation maturity needed |
| Workflow orchestration | [#10142](https://github.com/openclaw/openclaw/issues/10142) — Temporal integration | Enterprise system integration |
| Multi-workspace teams | [#111560](https://github.com/openclaw/openclaw/pull/111560) — onboarding isolation | Growing team use |
| CRM/archival plugins | [#78963](https://github.com/openclaw/openclaw/issues/78963) — WhatsApp listen-only mode | Business process integration |

---

## Backlog Watch

### Long-Open Issues Needing Maintainer Attention

| Issue | Age (days) | Status Blocker |
|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) — Linux/Windows apps | **200** | Needs product decision + security review |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) — Memory Trust Tagging | **167** | Needs product decision + security review |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) — Masked Secrets | **164** | Needs product decision + security review |
| [#13583](https://github.com/openclaw/openclaw/issues/13583) — Pre-response enforcement | **160** | Needs product decision + security review |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) — Webhook session reuse | **161** | Linked PR open — needs review |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) — Exec denylists | **169** | Needs product decision + security review |
| [#12219](https://github.com/openclaw/openclaw/issues/12219) — Skill Permission Manifest | **161** | Needs product decision + security review |

### Long-Open PRs Needing Review

| PR | Age (days) | Status |
|---|---|---|
| [#102959](https://github.com/openclaw/openclaw/pull/102959) — Grouped Claw updates (plan) | **10** | `needs proof` — large XL PR |
| [#102982](https://github.com/openclaw/openclaw/pull/102982) — Grouped Claw updates (apply) | **10** | `needs proof` — large XL PR |
| [#102406](https://github.com/openclaw/openclaw/pull/102406) — MCP server ownership | **10** | `needs proof` — P1 |
| [#109647](https://github.com/openclaw/openclaw/pull/109647) — Stale wake delays after node re-pairing | **2** | `ready for maintainer look` — proof sufficient |

### Stale but Important

| Item | Issue | Note |
|---|---|---|
| [#85246](https://github.com/openclaw/openclaw/issues/85246) — UI Update Gateway crash | P1, stale | Requires live reproduction |
| [#89954](https://github.com/openclaw/openclaw/issues/89954) — Telegram 409 cascade | P1, stale | IPLv6 fallback issue |
| [#99910](https://github.com/openclaw/openclaw/issues/99910) — Memory dreaming peg | P1, stale | Gateway unresponsive for ~10 min |
| [#97152](https://github.com/openclaw/openclaw/issues/97152) — External approval providers | P2, stale | Security feature |

### Concerning Pattern
**291 of 367 issues (79%) carry `clawsweeper:no-new-fix-pr`**, meaning no fix PR is in progress. **145 issues** additionally need `maintainer-review`, and many need `product-decision`. This suggests a **maintainer bottleneck** where features and bugs are well-documented but awaiting triage or decision-making capacity is limited relative to issue inflow.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — AI Agent Open-Source Ecosystem
**Date: July 20, 2026**

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing a **bifurcation between rapid feature expansion and architectural consolidation**. Projects like OpenClaw, ZeroClaw, and NanoClaw are shipping code at remarkable velocity—hundreds of PRs daily—while simultaneously accumulating significant technical debt in bug backlogs and unresolved feature requests. A clear trend toward **production hardening** is visible: WhatsApp group encryption, Telegram reliability, memory lifecycle decoupling, and permission/security systems are receiving focused attention across multiple projects. Meanwhile, the gap between **power users** (deploying multi-channel, multi-agent setups) and **new users** (struggling with onboarding, Windows compatibility, and silent failures) is widening. The ecosystem is maturing from experimental prototypes toward production infrastructure, but **regression fatigue**—especially in the 2026.7.x OpenClaw series—suggests quality assurance processes are not keeping pace with feature development.

---

## 2. Activity Comparison

| Project | Issues (Updated 24h) | PRs (Updated 24h) | New Release? | Health Score | Notes |
|---------|---------------------|-------------------|-------------|--------------|-------|
| **OpenClaw** | 367 (291 stalled) | 500 (160 merged) | v2026.7.2-beta.3 | ⚠️ Fair | High velocity, concerning 79% no-fix-PR backlog |
| **ZeroClaw** | 50 | 50 | No | 🟢 Good | High-quality RFC-driven development; clear roadmap |
| **NanoClaw** | 19 | 42 (27 merged) | No | 🟢 Good | Excellent merge rate (64%); strong community contributions |
| **IronClaw** | 5 (new) | 50 (30 merged) | No | 🟡 Stable | Reborn refactoring sprint; release blocked 17 days |
| **NanoBot** | 6 (5 closed) | 33 (9 merged) | No | 🟢 Good | Rapid bug-fix phase; no releases published |
| **Hermes Agent** | 50 (11 new) | 50 (4 merged) | No | 🟡 Fair | Active but moderate merge throughput (8%) |
| **CoPaw (QwenPaw)** | 11 (1 closed) | 6 (0 merged) | No | 🟡 Stable | Active community health; 2 first-time contributors |
| **PicoClaw** | 3 | 3 (0 merged) | No | 🟢 Stable | Focused maintenance; low activity |
| **Moltis** | 1 | 1 (0 merged) | 20260719.01 | 🟢 Stable | Weekend lull; new release yesterday |
| **LobsterAI** | 3 (all stale) | 3 (1 closed) | No | 🔴 Low | Stale April bugs; no human-led commits |
| **TinyClaw** | 0 | 0 | No | ⚫ Inactive | Zero activity |
| **NullClaw** | 0 | 0 | No | ⚫ Inactive | Zero activity |
| **ZeptoClaw** | 0 | 0 | No | ⚫ Inactive | Zero activity |

**Key observations:**
- **OpenClaw** dominates raw volume but has a structural quality problem (79% stalled issues)
- **ZeroClaw, NanoClaw, NanoBot** show healthy development with clear direction
- **IronClaw** is deep in architectural refactoring—high throughput but release-blocked
- **LobsterAI** and three inactive projects signal ecosystem attrition

---

## 3. OpenClaw's Position

### Advantages vs. Peers
- **Scale of community**: 367 issues + 500 PRs in 24 hours—an order of magnitude above any competitor. The community is self-sustaining in bug reporting and feature discussion.
- **Release cadence**: Shipping beta releases (v2026.7.2-beta.3) while peers remain unreleased for weeks. OpenClaw is the fastest-moving project by a wide margin.
- **Feature breadth**: Remote coding sessions, native automation nodes, MCP integration—OpenClaw is pushing the frontier of what agent frameworks can do.
- **Localization investment**: A 5-PR series consolidating i18n shows commitment to global adoption—unique among peers.

### Technical Approach Differences
- **Monolithic reference architecture**: OpenClaw positions itself as the "core reference" implementation, carrying the burden of backward compatibility across all features. This explains the large backlog—every edge case becomes an issue.
- **Bot platform integration**: Deep Telegram, Codex, and platform-specific integrations (e.g., Telegram DM lane recovery) give OpenClaw more production features than any competitor.
- **Security focus**: Memory trust tagging, masked secrets, pre-response enforcement hooks—OpenClaw is addressing enterprise security needs that peers (except ZeroClaw) have not yet tackled.

### Community Size Comparison
| Metric | OpenClaw | Next Largest (ZeroClaw) | Ratio |
|--------|----------|------------------------|-------|
| Issues/24h | 367 | 50 | 7.3× |
| PRs/24h | 500 | 50 | 10× |
| Merged PRs/24h | 160 | ~20 | 8× |

OpenClaw's community is **7–10× larger** than the next most active project. However, this scale comes with **maintainer bottleneck risk**: 291 issues (79%) have no fix PR, and 145 need maintainer review. The ratio of issue creation to resolution is unsustainable without scaling maintainer capacity.

---

## 4. Shared Technical Focus Areas

### Security & Access Control
| Need | Projects | Specific Requirements |
|------|----------|---------------------|
| Pre-response enforcement hooks | OpenClaw, ZeroClaw, NanoClaw | Hard gating for tool-call rules; per-agent tool gating |
| Credential/secret management | OpenClaw (#10659), ZeroClaw (#9127), CoPaw (#6251) | Masked secrets from agents; CLI/env-based secret management |
| Trust/sandbox isolation | OpenClaw (#7707), ZeroClaw (#7947), NanoClaw (#3091) | Memory provenance tagging; pipeline security (confused deputy) |
| Rate-limit management | Hermes Agent (#7489) | Proactive `x-ratelimit` handling vs reactive retry |

### Memory Architecture
| Need | Projects | Specific Requirements |
|------|----------|---------------------|
| Memory lifecycle decoupling | ZeroClaw (#8891, #9048), IronClaw (#6263) | Separate session history from curated memory; replace in-memory stores |
| Trust/source tagging | OpenClaw (#7707), ZeroClaw (#9048) | Prevent memory poisoning from untrusted content |
| Cache telemetry | PicoClaw (#3251), NanoBot (#4867) | Anthropic prompt cache token visibility; Ollama caching |

### Cross-Platform Parity
| Need | Projects | Specific Requirements |
|------|----------|---------------------|
| Linux/Windows apps | OpenClaw (#75, 114 comments, 200 days) | Highest community demand across all projects |
| Windows compatibility | ZeroClaw (#9117), NanoBot (#4975) | UTF-8 locale support; startup env var handling |
| Desktop polish | CoPaw (#6252), Hermes Agent (#67600) | Zoom support on Linux; profile-scoped sidebar bugs |

### Local LLM Optimization
| Need | Projects | Specific Requirements |
|------|----------|---------------------|
| Prompt caching for local inference | NanoBot (#4867, "60s per turn") | Preserve exact prompt prefix for Ollama cache hits |
| First-class local model support | Hermes Agent (#4505) | Use native Ollama `/api/chat` endpoint over OpenAI-compatible |
| MCP driver performance | CoPaw (#6193, 8× parallel speedup) | Parallel MCP initialization |

### Channel Reliability
| Need | Projects | Specific Requirements |
|------|----------|---------------------|
| WhatsApp group encryption | NanoClaw (#3038, #3008, #2870, #2688) | LID-addressed group delivery (4 independent fixes) |
| Telegram stability | OpenClaw (#107547, #111519), ZeroClaw (#8505) | DM lane recovery; guest bot support |
| Discord integration | Hermes Agent (#67698, #67702) | Gateway multiplex; handoff thread membership |

### Onboarding & User Experience
| Need | Projects | Specific Requirements |
|------|----------|---------------------|
| Better first-run setup | IronClaw (#6285), ZeroClaw (#7808) | Auto-provisioning; silent CLI feedback |
| Documentation-implementation gaps | OpenClaw (#11665, #9986, #110065) | Documented features that don't actually work |
| Progress/status visibility | CoPaw (#6195, #6260), LobsterAI (#1350) | Token usage indicators; collapsible reasoning sections |

---

## 5. Differentiation Analysis

### Feature Focus Comparison

| Dimension | OpenClaw | ZeroClaw | NanoClaw | IronClaw | NanoBot | Hermes Agent |
|-----------|----------|----------|----------|----------|---------|-------------|
| **Primary focus** | Broadest feature set + enterprise security | Architecture correctness via RFCs | Channel breadth (Discord, WeChat, Teams, WhatsApp) | WASM/cloud-native refactoring | Lightweight, multi-channel assistant | Desktop CLI + dashboard |
| **Target user** | Power users & enterprises | Developers building on solid foundation | Production multi-channel deployers | Cloud/NearAI ecosystem | Local LLM enthusiasts | Developer tooling + coding agents |
| **Technical approach** | Monolithic reference | RFC-driven, ADR-documented | Rapid community merging | Rust + WASM + cloud-native | Python, merge-heavy | Feature-rich desktop |
| **Release strategy** | Frequent betas (weekly) | Milestone-based (0.9.0 incoming) | Unreleased (high merge velocity) | Blocked release (17 days) | No recent releases | No recent releases |
| **Security posture** | Advanced: memory tagging, masked secrets, enforcement hooks | Security-first: KeySource trait, pipeline gating | Emerging: permissions system | Basic: credential isolation | Basic | Basic |
| **Bug fix velocity** | Mixed: fast regressions, slow backlog | Slow but methodical | Excellent: WhatsApp fixes same-week | Mixed: architecture focus delays bug fixes | Fast on critical (trigger lifecycle) | Moderate |

### Architecture Styles

- **OpenClaw**: "Batteries included" monolith. Ships every feature, then fixes bugs. High risk of regression due to complexity.
- **ZeroClaw**: "Design first" with RFCs and ADRs. Slower to ship but fewer regressions. Strongest architectural documentation in the ecosystem.
- **NanoClaw**: "Community-driven merging." Fastest to accept community patches, resulting in rapid fix cycles but potential fragmentation.
- **IronClaw**: "Reborn refactoring." Prioritizing internal architecture simplification over user-facing features. Temporary user-facing feature slowdown.
- **NanoBot**: "Lightweight multi-channel." Focuses on simplicity and channel support. Ollama performance gap is its biggest weakness.
- **Hermes Agent**: "Desktop-centric." Differentiates via CLI/dashboard UX, but Discord integration shows reliability gaps.

---

## 6. Community Momentum & Maturity

### Activity Tiers

**Tier 1: Rapid Iteration (Very High Activity, Shipping)**
- **OpenClaw** — 10× community size, weekly betas, but struggling with technical debt
- **ZeroClaw** — High-quality RFC-driven development, clear roadmap to 0.9.0
- **NanoClaw** — Community-momentum leader: 64% PR merge rate, 4 independent WhatsApp fixes

**Tier 2: Active Development (High Activity, Consolidating)**
- **IronClaw** — Deep architectural refactoring, 30 merged PRs/day, release-blocked
- **NanoBot** — Bug-fix sprint mode, 5 closed issues/day, preparing 0.2.3/0.3.0
- **Hermes Agent** — Moderate velocity (50 PRs, 4 merged), profile-scoped bugs need attention

**Tier 3: Stable Maintenance (Low-Moderate Activity)**
- **CoPaw (QwenPaw)** — Active community with 2 first-time contributors; 6 open PRs unreviewed
- **PicoClaw** — Focused bug fixes; 3 open PRs aging (up to 19 days)
- **Moltis** — Weekend lull; new release yesterday; one stale 3.5-month feature request

**Tier 4: Low Activity / Stalled**
- **LobsterAI** — April bugs unanswered; no human-led commits; dependabot-only activity
- **TinyClaw, NullClaw, ZeptoClaw** — Zero activity. Effectively dormant.

### Maturity Assessment

| Metric | OpenClaw | ZeroClaw | NanoClaw | IronClaw |
|--------|----------|----------|----------|----------|
| **Community self-sustainability** | High | Medium | High | Low |
| **Architecture documentation** | Medium | Strong (ADRs) | Weak | Strong |
| **Regression rate** | High (3 in 2026.7.x series) | Low | Low | Medium |
| **Release predictability** | Weekly betas | Milestone-based | Unpredictable | Blocked |
| **First-timer friendliness** | Medium | Low (RFC-heavy) | High (low barrier) | Medium |

---

## 7. Trend Signals

### Industry Trends from Community Feedback

**1. The "Local LLM Latency Crisis"**
Across NanoBot (#4867, "60s per turn"), Hermes Agent (#4505, Ollama integration), and CoPaw (#6193, MCP serial init), users with high-end hardware (32GB VRAM, multi-GPU) are reporting **unacceptable per-turn overhead** with local models. The ecosystem is not optimized for local inference caching—this is a critical gap as local LLM adoption grows. *Value for developers:* Optimize prompt construction for cache hit rates, or risk losing the local-model user segment.

**2. Regression Fatigue Erodes Trust**
OpenClaw's three regressions in the 2026.7.x series, NanoBot's WhatsApp allowlist regression (#4823), and ZeroClaw's Telegram channel bug (#8505) share a pattern: **fast shipping without sufficient regression testing**. Users are becoming wary of upgrades. *Value for developers:* Invest in regression test suites, especially for bot platform integrations (Telegram, WhatsApp)—these are where breaking changes hurt most.

**3. Security as a First-Class Feature**
The emergence of memory trust tagging, pre-response enforcement hooks, per-agent tool gating, and credential management across OpenClaw, ZeroClaw, and NanoClaw signals a shift from "can it work?" to "can it be trusted?" Enterprise and finance use cases are driving this. *Value for developers:* Security features are now table stakes for production deployments, not differentiators.

**4. Cross-Platform Parity is a Retention Risk**
OpenClaw's #75 (Linux/Windows apps, 114 comments, 200 days old) is the **longest-running, highest-engagement issue in the ecosystem**. ZeroClaw's Windows startup bug (#9117) and NanoBot's UTF-8 locale issue (#4975) confirm that non-macOS users feel underserved. *Value for developers:* Platform parity is not just a feature request—it's a potential churn driver if competitors solve it first.

**5. The "Agent Laziness" Trust Problem**
NanoBot's #1459 (138 days old, agent claims to read files but doesn't) echoes a broader concern: agents that pretend to act. This is a **fundamental trust issue** for autonomous mode. Users need visibility into what agents actually execute, not just what they claim. *Value for developers:* Implement execution verification and transparent reporting of tool outcomes.

**6. From Single-User to Multi-Agent Orchestration**
Recurring patterns across projects—ZeroClaw's RFC for conversation/memory separation, OpenClaw's work lanes proposal, Hermes Agent's cross-platform session sharing (#4335), CoPaw's workflow orchestration (#6163)—point to a shift from single-agent chatbots to **multi-agent systems with shared memory, audit trails, and orchestration**. *Value for developers:* Design for agent composition from day one; retrofitting is expensive.

**7. Plugin/Hook Architecture is the Next Battleground**
NanoClaw's hosthooks proposal (#3091) explicitly calls out the pain of "string-patching" community skills. ZeroClaw's WASM runtime plugins represent the most ambitious solution. OpenClaw's community skills ecosystem is growing without formal extension points. *Value for developers:* A first-class plugin system will determine which projects can scale their skill ecosystems without breaking on upstream refactors.

**8. Documentation Debt is Becoming a Bottleneck**
OpenClaw's documented-but-not-implemented features (#11665, #9986, #110065), ZeroClaw's CI not running on Windows/macOS (#7461), and IronClaw's stale release PR (#5598, 17 days) highlight a gap: **documentation and release infrastructure is not keeping pace with code velocity**. *Value for developers:* Invest in release automation and documentation validation as core infrastructure, not afterthoughts.

---

## Summary: Decision Context for Developers

- **If you need the broadest feature set and can tolerate beta-quality stability:** OpenClaw remains the ecosystem leader, but budget for upgrade regression testing and backlog triage.
- **If you prioritize architectural correctness and production security:** ZeroClaw's RFC-driven approach offers the best long-term foundation, though shipping is slower.
- **If you are deploying multi-channel bots (WhatsApp, Discord, Teams) rapidly:** NanoClaw's community merge velocity and channel breadth are unmatched—but documentation may lag.
- **If you are building cloud-native agents on NEAR/WebAssembly:** IronClaw's Reborn refactoring is the right bet, but wait for the 0.30 release to unblock.
- **If you need lightweight local LLM serving:** NanoBot is closest to your needs, but expect to invest in Ollama cache optimization yourself.
- **If you are evaluating for production today:** ZeroClaw offers the best balance of stability, security, and forward-looking architecture. Monitor NanoClaw for channel breadth. Watch OpenClaw for regression improvement.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-20

## Today's Overview

NanoBot saw **high activity** over the past 24 hours, with **33 PRs updated** (9 merged/closed) and **6 issues touched** (5 closed, 1 long-standing open). The project is in a **rapid bug-fix and refactoring phase**, with multiple critical patches moving through review for channel stability, Windows compatibility, and trigger reliability. No new releases were published. The development velocity suggests the team is consolidating toward a 0.3.x or 0.2.3 milestone, with major architectural changes—like self-contained channels and unified turn lifecycle—now landing in `main`.

## Releases

**None.** No new releases were published in this period.

## Project Progress

Nine PRs were merged or closed today, advancing several subsystems:

- **Channel stability:** [#4908](https://github.com/HKUDS/nanobot/pull/4908) (merged) refactored built-in channels into self-contained packages, removing central coupling. [#4834](https://github.com/HKUDS/nanobot/pull/4834) (merged) restored WhatsApp group allowlist support, fixing a regression.
- **Trigger lifecycle:** [#4990](https://github.com/HKUDS/nanobot/pull/4990) (closed) prevents local triggers from executing after their target channel is disabled, directly resolving issue [#4991](https://github.com/HKUDS/nanobot/pull/4991).
- **Windows compatibility:** [#4994](https://github.com/HKUDS/nanobot/pull/4994) (closed) fixed WebUI package manager shims on Windows by resolving `bun.cmd` correctly.
- **Model presets:** [#4866](https://github.com/HKUDS/nanobot/pull/4866) (open) introduces session-scoped model preset binding, persisting LLM runtime snapshots per turn.
- **Internal refactoring:** [#4993](https://github.com/HKUDS/nanobot/pull/4993) (open) unifies the internal turn lifecycle by removing a duplicated mini-loop for system messages.

## Community Hot Topics

| Issue/PR | Type | Comments | Summary |
|---|---|---|---|
| [#4867](https://github.com/HKUDS/nanobot/issues/4867) — Prompt caching for Ollama | Issue (closed) | 9 | User reports Nanobot adds 60 seconds/turn with Ollama, making it "totally unusable" with local models and 32 GB VRAM. Requests preserving exact prompt prefix for cache hits. |
| [#1459](https://github.com/HKUDS/nanobot/issues/1459) — Codex agent laziness | Issue (open) | 6 👍2 | Long-standing complaint that the codex-5.3-codex agent claims to read files but does not actually execute them. Created March 2026, still without resolution. |
| [#4997](https://github.com/HKUDS/nanobot/pull/4997) — Secure browser companion | PR (open) | 0 | Adds HttpOnly/Same-Site companion launch flow for WebUI. Security-focused feature from Re-bin. |
| [#4963](https://github.com/HKUDS/nanobot/pull/4963) — Polish agent output display | PR (open) | 0 | Replaces raw tool logs with unified activity language; adds Streamdown rendering for agent answers. |

The **core underlying need** from the most active thread (#4867) is **latency reduction for local LLM inference**. Users running Ollama with high-end hardware (32 GB VRAM) are experiencing unusable per-turn overhead, indicating a fundamental mismatch between NanoBot's prompt construction and Ollama's caching behavior. The closed status suggests a fix was merged, but the severity indicates many local-model users may be affected.

## Bugs & Stability

**High severity:**
- **Trigger execution on disabled channels** ([#4991](https://github.com/HKUDS/nanobot/issues/4991), closed) — Local triggers continue consuming model quota after their target channel is disabled. **Fix merged** in [#4990](https://github.com/HKUDS/nanobot/pull/4990). Severity: High (wasted credits/model usage).
- **Windows UTF-8 loss** ([#4975](https://github.com/HKUDS/nanobot/issues/4975), closed) — CLI apps lose UTF-8 output on non-UTF-8 Windows locales (CP936/GBK), causing `UnicodeDecodeError`. No visible fix PR yet. Severity: Medium (affects Chinese/Japanese Windows users).

**Medium severity:**
- **WhatsApp group allowlist regression** ([#4823](https://github.com/HKUDS/nanobot/issues/4823), closed) — Group responses leak to all groups. **Fix merged** in [#4834](https://github.com/HKUDS/nanobot/pull/4834).
- **GitStore fails with relative paths** ([#4980](https://github.com/HKUDS/nanobot/issues/4980), closed) — Fails when workspace differs from CWD. No visible fix PR.

**Low severity (fixes in open PRs):**
- **Feishu/hang on ≤0 limit** ([#4982](https://github.com/HKUDS/nanobot/pull/4982), open) — Infinite loop in text chunking when limit ≤0. Fix prepared.
- **Telegram/markdown split hang** ([#4981](https://github.com/HKUDS/nanobot/pull/4981), open) — Same infinite-loop pattern for Telegram. Fix prepared.
- **QQ exponential reconnect backoff** — Two competing PRs ([#4768](https://github.com/HKUDS/nanobot/pull/4768), [#4838](https://github.com/HKUDS/nanobot/pull/4838)) address fixed 5-second reconnect flooding logs on network failure.

## Feature Requests & Roadmap Signals

The following user-requested features are visible in recent issues/PRs:

1. **Ollama prompt caching** (#4867) — Likely already merged; may appear in next release as performance improvement.
2. **Session-scoped model presets** ([#4866](https://github.com/HKUDS/nanobot/pull/4866)) — Binding model selection to sessions, preserving settings across turns. High priority (p1), likely for next release.
3. **Secure browser companion** ([#4997](https://github.com/HKUDS/nanobot/pull/4997)) — Adds localhost auth endpoint for WebUI. Security-focused, likely for 0.3.x.
4. **Nimble search provider** ([#4951](https://github.com/HKUDS/nanobot/pull/4951)) — New web search backend from the community. Low conflict, may merge quickly.
5. **Atlas Cloud provider** ([#4996](https://github.com/HKUDS/nanobot/pull/4996)) — New OpenAI-compatible gateway. Welcomed for provider diversity.
6. **Skill type requirements** ([#4300](https://github.com/HKUDS/nanobot/pull/4300)) — Check skill prerequisites before execution. Long-open (June), but no conflicts reported.

**Prediction for v0.2.3/0.3.0:** Prompt caching, session-scoped models, self-contained channels, Windows shim fixes, and trigger lifecycle improvements are all likely to ship. The refactoring PRs (#4908, #4993) suggest a **stability release** is being prepared.

## User Feedback Summary

**Pain points:**
- **Ollama latency** (#4867): "60 seconds every single turn" — local LLM users are the most vocal and underserved segment.
- **Agent laziness** (#1459): Codex agent claims to read files but doesn't — trust issue that erodes confidence in autonomous mode.
- **WhatsApp group regression** (#4823): "can see where this is heading" — user frustrated by breaking changes in group allowlist behavior.
- **UTF-8 on Windows** (#4975): Non-English Windows users hit encoding errors with CLI tools.

**Satisfaction signals:**
- High engagement on stability-focused PRs (many labeled `priority: p1`).
- Multiple contributors submitting fixes for the same bugs (QQ reconnect has two competing PRs), indicating a responsive, active community.
- No "why is this broken" rage posts — bugs are reported with technical depth and often include fix PRs.

**Use cases observed:**
- Local LLM serving with Ollama + multi-GPU setups.
- Multi-channel deployments (WhatsApp, Telegram, QQ, Feishu, WeChat/Weixin).
- Enterprise-style deployments with Git-based memory stores.
- Windows-based development and deployment (despite non-UTF-8 locale issues).

## Backlog Watch

**Critical long-standing issue:**
- [#1459](https://github.com/HKUDS/nanobot/issues/1459) — **"nanobot with codex-5.3-codex is lazy"** (Created 2026-03-03, **138 days open**, 6 comments, 2 👍). The codex agent's failure to actually execute file reads after claiming to do so is a **fundamental trust issue** for autonomous agent users. No maintainer response visible. **Priority watch: High** — if agent behavior is not reliable, the "AI assistant" value proposition is undermined.

**Other items needing attention:**
- [#4300](https://github.com/HKUDS/nanobot/pull/4300) — Skill type requirements check (PR open since June 11, 36 days). Needs review despite no conflicts.
- [#4768](https://github.com/HKUDS/nanobot/pull/4768) and [#4838](https://github.com/HKUDS/nanobot/pull/4838) — Competing QQ reconnect backoff PRs. One should be chosen or merged together.
- [#4947](https://github.com/HKUDS/nanobot/pull/4947) — Keep sensitive URLs out of Jina Reader. Important security fix for URL credential leakage, waiting for merge.

**No releases in this period** — users waiting for fix batches may be experiencing regressions without relief. A patch release bundling the closed issues (#4991, #4975, #4823, #4980) would significantly improve perceived stability.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-20

## Today's Overview

Hermes Agent shows **sustained high activity** with 50 issues and 50 PRs updated in the last 24 hours, indicating a very active development community. The project maintains a healthy balance of bug fixes, feature development, and community engagement across its CLI, desktop, gateway, and plugin subsystems. Notably, **3 old issues saw renewed discussion** (spanning March–June) while **11 new issues were filed today alone**, suggesting both ongoing maintenance and fresh feature exploration. With 47 open issues and 46 open PRs, the review queue is substantial but manageable. No new releases were published today.

## Releases

No new releases were published in this reporting period.

## Project Progress

**4 PRs were merged or closed today:**

- **PR #67697** (closed) — `bench(desktop): full-picture perf — prod build, cold-start, first-token` — a benchmarking improvement that measures latencies on production builds rather than dev-inflated figures, giving accurate performance baselines for the desktop app.

- **PR #64810** (Issue closed) — Desktop review pane "No diff to show" bug on Windows, caused by `simple-git` rejecting binary paths with spaces — now resolved.

- **PR #67648** (closed) — RFC to bundle Perseus Vault as an official memory provider was approved as an exception to the standalone-only policy, marking a strategic expansion of official memory backends.

- **PR #14471** (Issue closed) — Bug fix for Hermes injecting unrelated `AGENTS.md`/`CLAUDE.md`/`.cursorrules` files into agent context via tool-path discovery. This P1 bug's closure represents a meaningful stability improvement.

**Noteworthy open PRs advancing features:**
- New dashboard themes (Zinc, Neon Samurai, Night Osaka) adding visual customization
- Desktop-only install option for standalone Electron app
- Configurable `max_turns` accepting `none`/`unlimited`/`0`/`-1`
- Kanban dispatch with targeted task dispatch via `--task` flag

## Community Hot Topics

The most active conversations reveal three underlying community needs:

1. **Ollama Integration Optimization** (Issue #4505, 13 comments, 👍2) — The community is deeply invested in optimizing local LLM performance. The proposal to use Ollama's native `/api/chat` endpoint over the OpenAI-compatible one promises better streaming and lower latency. **Underlying need:** Users want first-class local model support that doesn't treat Ollama as a second-class citizen.

2. **Update Command Regressions** (Issue #3523, 8 comments) — A lingering March bug where `hermes update` suffers from silent git output and unnecessary stashes after PR #3492. **Underlying need:** Reliability in the update mechanism itself is critical — users are frustrated when the tool for getting fixes has unfixed bugs.

3. **Desktop Session Sidebar Empty** (Issue #67600, 6 comments, filed yesterday) — A fresh bug affecting only the `default` profile, with backend confirmed serving the rows correctly. **Underlying need:** Profile-scoped state management is becoming a recurring pain point — this echoes profile-related issues in memory namespaces (#4726) and cold-start restoration (#67709).

**Most 👍 reaction:** Issue #7489 (5 👍) — RPM-based pre-emptive throttling using `x-ratelimit` headers. Users strongly want proactive rate-limit management rather than reactive 429 retry loops.

## Bugs & Stability

**New bugs reported today ranked by severity:**

| Severity | Issue | Description | Fix PR Exists? |
|----------|-------|-------------|----------------|
| **P2** | #67705 | Codex commentary streaming violates OpenAI API contract — emits `output_item.added`/`done` without required `output_text.delta` | No |
| **P2** | #67706 | Cron `update_job` whitelist drift — `attach_to_session` missing from dashboard whitelist | **Yes** (#67711) |
| **P2** | #67709 | Desktop cold-start restore can resume session into wrong profile, creating duplicate session IDs | No |
| **P2** | #67702 | `/handoff discord` creates private thread with only bot as member — destination user never added | No |
| **P2** | #67698 | Gateway multiplex: specialist Discord adapters connect but never receive `on_message` events | No |
| **P3** | #67600 | Desktop session sidebar empty for `default` profile only (named profiles unaffected) | No |
| **P3** | #67187 | MCP parked server revival reconnects but doesn't re-register tools | No |

**Critical patterns:** Three P2 bugs involve message delivery/session state on Discord and desktop — core UX pathways. The Gateway multiplex bug (#67698) and handoff bug (#67702) suggest Discord integration reliability needs attention. The desktop cold-start bug (#67709) is particularly concerning as it can corrupt session associations.

## Feature Requests & Roadmap Signals

**Features requested today** (likely candidates for next release):

1. **Session colors** (#66565) — Visual identity for sessions via color coding (inherit from project, manual override). Low complexity, high UX impact — likely to land within 1-2 releases.

2. **`delegate_task` env vars / profile parameter** (#67699) — Subagents spawned without inherited environment variables. A small, targeted fix that addresses a clear gap.

3. **Perseus Vault bundled memory provider** (#67648) — **Already approved**, this is landing soon. A strategic addition expanding the official memory provider ecosystem.

4. **`none`/`unlimited` for `max_turns`** (PR #67696) — Already in PR review, this config enhancement has a fix ready.

**Longer-term roadmap signals:**
- Cross-platform session context sharing (#4335) — CLI ↔ Telegram is a major architectural feature
- Autoresearch skill with autonomous git-based experiment loops (#5114) — ML optimization workflow
- Profile-scoped memory namespaces (#4726) — For multi-agent setups
- Hindi (hi) locale for docs (#4763) — i18n expansion to 840M Hindi speakers

## User Feedback Summary

**Pain points expressed today:**
- **Discord integration failures** — Three distinct Discord bugs (handoff, multiplex, thread membership) suggest this platform path needs hardening
- **Profile-scoped state inconsistency** — Desktop sidebar empty for default profile, cold-start profile confusion, multiplex profile routing failures — a clear pattern of profile isolation issues
- **Missing progress signals** — Users want completion reports and visible status between tool batches (PR #67713)
- **Rate-limit frustration** — 5 👍 on the throttling feature confirms users are hitting 429 errors frequently

**Satisfaction signals:**
- Community contributing **3 new dashboard themes** (Zinc, Neon Samurai, Night Osaka) — engagement with visual customization
- **Perseus Vault** integration approved — community-requested backend now official
- Active participation from **15+ unique contributors** in today's 24h window

## Backlog Watch

**Issues needing maintainer attention:**

1. **#3523** (March 28) — `hermes update` regressions after #3492. **8 comments, 0 👍, no decision.** A P2 bug affecting the update mechanism itself. Last updated yesterday suggests some activity, but it has been open for nearly 4 months with no resolution path visible.

2. **#678** (March 8) — Memory Extraction + Forgetting (decay, pruning, targeted purge). **P3, needs-decision.** This foundational memory lifecycle feature has been open 4+ months. The `needs-decision` label indicates architectural questions remain unresolved. With #67648 (Perseus Vault) now approved, maintainers should evaluate how this fits the memory strategy.

3. **#4335** (March 31) — Cross-platform session context sharing (CLI ↔ Telegram). **P3, 6 comments, needs architectural planning.** This would be a major feature touching gateway architecture and session stores. No PR has materialized in 3.5 months.

**PRs needing review:**
- **#18395** (May 1) — BlueBubbles delivery hardening. **P2, sweeper:risk-session-state.** Open for 2.5 months on a session-state risk. The long review cycle on a P2 message delivery fix is concerning for users on iOS messaging integrations.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest**
**Date:** 2026-07-20

---

## 1. Today's Overview
Project activity is moderate, with three issues and three pull requests updated in the last 24 hours. The community is actively reporting bugs, particularly around channel initialization and edge-case provider model parsing, while maintainers are engaging with PRs aiming to capture missing telemetry (Anthropic cache tokens) and fix routing normalization. One bug was closed today, indicating responsive triage, though no new releases were published. Overall, the project appears stable with focused maintenance efforts.

## 2. Releases
No new releases were published today. No release notes to report.

## 3. Project Progress
**Merged/Closed PRs Today:** 0 merged, 0 closed.
No PRs reached completion today. The three open PRs (#3251, #3202, #3267) remain under review or awaiting updates.

**Features Advanced / Fixed (Open PRs):**
- **#3251** (fix/Anthropic cache token capture) – [GitHub](https://github.com/sipeed/picoclaw/pull/3251): Aims to expose prompt cache token usage from the Anthropic SDK and Messages API providers, enabling operators to monitor cache effectiveness. No comments yet; opened 8 days ago.
- **#3202** (fix/routing ID normalization) – [GitHub](https://github.com/sipeed/picoclaw/pull/3202): Corrects `NormalizeAgentID` and `NormalizeAccountID` to strip leading/trailing underscores in addition to dashes, ensuring compliance with the documented regex `^[a-z0-9][a-z0-9_-]{0,63}$`. Opened 19 days ago; still open.
- **#3267** (fix/antigravity token refresh scope bug) – [GitHub](https://github.com/sipeed/picoclaw/pull/3267): Freshly submitted today; fixes an incorrect scope parameter during token refresh for the antigravity provider, which caused `PERMISSION_DENIED` errors despite successful primary authentication.

## 4. Community Hot Topics
*(Ranked by engagement)*

1. **#3252** – [splitKnownProviderModel strips provider prefix](https://github.com/sipeed/picoclaw/issues/3252)  
   *1 comment, open since Jul 12*  
   **Analysis:** This bug affects model ID resolution when a model’s internal name contains text matching a provider alias (e.g., `deepseek`). The function is over-eager in stripping prefixes, likely causing misrouting or provider lookup failures. The single comment may suggest internal discussion or a pending fix. Underlying need: robust provider-model string parsing.

2. **#3265** – [Gateway fails with unknown channel type “deltachat”](https://github.com/sipeed/picoclaw/issues/3265)  
   *0 comments, opened Jul 19*  
   **Analysis:** Startup failure despite no DeltaChat config—suggests a hardcoded default, registration order bug, or build artifact. Immediate user impact: cannot start gateway. Expect high priority once triaged.

3. **#3266** – [CLOSED] [Weixin channel sends images to non-vision models](https://github.com/sipeed/picoclaw/issues/3266)  
   *0 comments, opened and closed Jul 19*  
   **Analysis:** Closed same day—likely a fast fix or duplicate. The bug caused non-vision models to reject images with an ugly error visible to users before the file was saved. Community need: graceful handling of modality mismatches.

## 5. Bugs & Stability
**(High Severity)**
- **#3265** – Gateway fails on startup due to unknown deltachat channel type ([GitHub](https://github.com/sipeed/picoclaw/issues/3265))  
  **Impact:** Complete gateway failure. No fix PR exists yet.
  
**(Medium Severity)**
- **#3252** – `splitKnownProviderModel` incorrectly strips provider prefix ([GitHub](https://github.com/sipeed/picoclaw/issues/3252))  
  **Impact:** Models with provider-alias substring in their ID may be misrouted. No fix PR.
  
**(Low Severity)**
- **#3266** (CLOSED) – Weixin channel passes images to non-vision model ([GitHub](https://github.com/sipeed/picoclaw/issues/3266))  
  **Impact:** Error message before file handling. Fixed (closed).

## 6. Feature Requests & Roadmap Signals
- **Cache-aware telemetry** (via #3251): Users and operators are requesting visibility into Anthropic prompt cache token usage—useful for cost optimization and caching strategy tuning. Likely to land in next minor release given the PR is mature (8 days old).
- **Stricter agent/account ID validation** (via #3202): The underscore normalization fix addresses an edge case that could silently break routing. While not a critical feature, its long open time (19 days) suggests maintainers may be bundling it with other routing fixes.

**Prediction for next version:**  
The two older PRs (#3251, #3202) are likely candidates for the next patch release. The fresh bug #3265 may also trigger a hotfix.

## 7. User Feedback Summary
- **Pain Point – Abrupt errors on image-model mismatch (#3266, closed):** Users on Weixin (iLink) channel saw raw LLM rejection errors before the image was saved, breaking UX. The fast close suggests satisfaction with the resolution.
- **Pain Point – Gateway fails without configuration (#3265):** User reports inability to start gateway despite having no DeltaChat config. This is a hard blocker for deployment and likely causes frustration.
- **Pain Point – Provider model string fragility (#3252):** Users configuring models with aliases like “deepseek” in the ID are seeing misparsed provider prefixes, causing incorrect routing.
- **Pain Point – Token refresh scope bug (#3267):** User `sarff` reports antigravity authentication works initially but fails on refresh due to wrong scope, leading to silent permission errors after token expiry.

## 8. Backlog Watch
Open PRs requiring maintainer attention:
- **#3202** – `fix(routing): strip leading/trailing underscores in ID normalization`  
  *Opened Jul 1, last updated Jul 19* ([GitHub](https://github.com/sipeed/picoclaw/pull/3202))  
  **Reason:** 19 days old without comments or review. Validates document-contract compliance and may unblock downstream routing issues.

- **#3251** – `fix(providers): capture the prompt cache token usage in Anthropic providers`  
  *Opened Jul 12, last updated Jul 19* ([GitHub](https://github.com/sipeed/picoclaw/pull/3251))  
  **Reason:** Operator-facing improvement; silence may indicate reviewer bandwidth constraints.

Unanswered Issue with Impact:
- **#3252** – `splitKnownProviderModel strips provider prefix` – open 8 days, 0 maintainer engagement. Could affect multiple users relying on provider-aliased model IDs.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-20

## Today's Overview

NanoClaw is showing **very high activity** today, with 42 pull requests and 19 issues updated in the last 24 hours. The project continues to mature rapidly, with 27 merged/closed PRs (64% close rate) and 15 closed issues — indicating a strong maintainer response cadence. Three core-team fix PRs were opened today alongside two significant feature requests, suggesting a team that is simultaneously stabilizing existing features while keeping an eye on the roadmap. No new releases were published today, but the volume of merged code implies a release may be imminent.

## Releases

**No new releases published today.** Given the high volume of merged PRs (27), the next release cycle likely contains the remote Streamable HTTP MCP server support, WhatsApp LID group fixes, and the per-wiring channel permission system — all of which have been merged since the last tag.

## Project Progress

Today saw substantial progress across **27 merged/closed pull requests**, with the following key advances:

**WhatsApp Stability (Major Push):** Three PRs were merged addressing the critical WhatsApp group delivery issue:
- [PR #3038](https://github.com/nanocoai/nanoclaw/pull/3038) — fix(whatsapp): don't translate group participants to phone JIDs (LID-mode group sends stuck on "waiting")  
- [PR #3008](https://github.com/nanocoai/nanoclaw/pull/3008) — fix(whatsapp): remove cachedGroupMetadata that breaks SKDM in LID groups  
- [PR #2870](https://github.com/nanocoai/nanoclaw/pull/2870) — fix(whatsapp): keep native participant addressing for group encryption  
- [PR #2688](https://github.com/nanocoai/nanoclaw/pull/2688) — fix(whatsapp): stop translating group participants to phone JIDs (fixes ack 421 on LID groups)

**Channel Expansion:** Multiple channel integrations were merged including Discord with image attachment support ([PR #1517](https://github.com/nanocoai/nanoclaw/pull/1517)), WeChat via iLink Bot protocol ([PR #1921](https://github.com/nanocoai/nanoclaw/pull/1921) and [PR #1594](https://github.com/nanocoai/nanoclaw/pull/1594)), and Microsoft Teams ([PR #1648](https://github.com/nanocoai/nanoclaw/pull/1648)).

**Infrastructure:** Per-wiring channel permission system (read/write/read+write) merged in [PR #2278](https://github.com/nanocoai/nanoclaw/pull/2278), yt-dlp MCP in-tree server ([PR #2306](https://github.com/nanocoai/nanoclaw/pull/2306)), and URL-based (remote) MCP server support ([PR #2847](https://github.com/nanocoai/nanoclaw/pull/2847)).

**New Open PRs (core-team):**
- [PR #3094](https://github.com/nanocoai/nanoclaw/pull/3094) — fix(telegram): retry transient bot identity lookup  
- [PR #3093](https://github.com/nanocoai/nanoclaw/pull/3093) — fix(chat): keep typing active for processing turns  
- [PR #3092](https://github.com/nanocoai/nanoclaw/pull/3092) — feat: support remote Streamable HTTP MCP servers  
- [PR #3090](https://github.com/nanocoai/nanoclaw/pull/3090) — fix(templates): prepend all top-level context Markdown  
- [PR #3088](https://github.com/nanocoai/nanoclaw/pull/3088) — feat(ncl): surface unknown-sender holds in `ncl approvals list`

## Community Hot Topics

**Most Active Discussions:**

1. **WhatsApp LID Group Delivery Fix — Multiple Concurrent PRs**  
   Four separate PRs (#3038, #3008, #2870, #2688) from **four different contributors** (caburi00, gfnord, elancode, mcaldas) all fixing the same underlying WhatsApp group encryption bug. This is a classic "many hands solve the same problem" signal — the issue was painful enough that multiple community members independently built fixes. The merged solutions converge on the same root cause: participant JID translation corrupting LID-mode group encryption.  
   *Underlying need:* Reliable WhatsApp group messaging is a top-priority requirement for production deployments.

2. **Feature: Keyword-Based Message Routing** ([Issue #1682](https://github.com/nanocoai/nanoclaw/issues/1682) — OPEN)  
   Three nearly identical issues (#1681, #1679, #1682) from user **scottgl9** proposing zero-cost pre-turn model routing via keyword matching. The first two were closed, but #1682 remains open, suggesting maintainers see value but want a refined proposal.  
   *Underlying need:* Users want cost optimization and model specialization without architectural changes.

3. **Feature Request: Composable Host Extension Hooks** ([Issue #3091](https://github.com/nanocoai/nanoclaw/issues/3091) — NEW today)  
   User **ZappoMan** calls out that community skills "string-patch" NanoClaw sources, which breaks on upstream refactors. Proposes standardized `hosthooks`.  
   *Underlying need:* A plugin/hook architecture to prevent source-level patching as the skill ecosystem grows.

4. **Feature Request: Agent-Driven Skill Learning** ([Issue #3089](https://github.com/nanocoai/nanoclaw/issues/3089) — NEW today)  
   User **cy83rc0llect0r** wants NanoClaw to autonomously generate skills from repeated task patterns.  
   *Underlying need:* Reducing the friction of manual skill authoring for end users.

## Bugs & Stability

**High Severity — Fixed Today:**
- **WhatsApp group messages silently failing on LID-addressed groups** — bot DMs work but group replies never appear. Multiple independent fixes merged today. *Resolution:* Stop translating participant JIDs to phone format in `cachedGroupMetadata` for Baileys socket. *(PRs #3038, #3008, #2870, #2688 — all merged)*

**Medium Severity — Closed Historically, Seeing Activity:**
- **Issue #2506** — `send_message` dedup silently drops responses when turns complete within 60 seconds. Closed today after being open since May. Appears fixed.
- **Issue #2482** — Wizard falsely detects "no systemd" under `su -` invocation. Closed today. Systemd detection on headless environments was patched.

**New Concerns Raised Today:**
- No new bug reports opened in the last 24 hours. Activity is focused on fixes and features.

## Feature Requests & Roadmap Signals

**Strong Signal for Next Release:**
1. **Remote Streamable HTTP MCP Servers** — PR #3092 (open today by core-team) plus already-merged URL-based MCP support (#2847) suggests first-class remote MCP is arriving soon. This will allow agents to connect to cloud-hosted MCP servers without local processes.

2. **Standardized Host Extension Hooks** (#3091) — While new, this aligns with the "skill ecosystem" growth direction. If maintainers adopt this, it could become a v2.x architecture pillar.

3. **Agent-Driven Skill Learning** (#3089) — A moonshot request. Unlikely for immediate v2 scope, but signals user desire for autonomous self-improvement.

**Likely Next:**
- CLI enhancements: `ncl approvals list` for unknown-sender holds (#3088, open today)
- Per-wiring channel permissions (already merged in #2278)
- Deduplication logic improvements for multi-turn conversations

## User Feedback Summary

**Pain Points (Resolved):**
- WhatsApp groups on LID-addressed infrastructure were completely broken for weeks. Users reported "waiting for this message" indefinitely. Multiple community contributors independently patched — a sign of high production impact. Now fixed across four PRs.

**Pain Points (Ongoing):**
- **Systemd detection on headless Linux** (#1981) — Still open, though wizard detection was fixed. The deeper issue remains for v2 setup.
- **No CLI for scheduled tasks** (#2397) — Closed but the underlying need (manage scheduled tasks from terminal) is not yet addressed in code.
- **No top-level mount management** (#2395) — Container config moved to DB but CLI commands are missing.

**Satisfaction Signals:**
- Community contributors are independently writing and submitting WhatsApp fixes — indicates strong engagement and production usage.
- Multiple channel integrations (Discord, WeChat, Teams, Telegram) all merged, suggesting the multi-channel architecture is validated and appreciated.

## Backlog Watch

**Issues Needing Maintainer Attention:**
1. **[Issue #1981](https://github.com/nanocoai/nanoclaw/issues/1981) — v2 setup: systemd misdetected as absent on headless Linux**  
   *Created: 2026-04-24* (88 days open)  
   Only 1 comment. Similar to #2482 (closed) but with a different root cause description. Likely partially fixed but users on Hetzner Ubuntu may still encounter it.

2. **[Issue #1682](https://github.com/nanocoai/nanoclaw/issues/1682) — Keyword-based message routing**  
   *Created: 2026-04-06* (104 days open)  
   Three nearly identical issues filed by the same user. Duplicates #1681 and #1679 were closed, but this one remains open without maintainer response. A decision (accept, reject, or defer) would be respectful to the contributor.

3. **[Issue #3091](https://github.com/nanocoai/nanoclaw/issues/3091) — Composable host extension hooks**  
   *New today, 0 comments.* Could become a significant architectural discussion if maintainers engage.

**PRs Needing Review:**
- **[PR #3092](https://github.com/nanocoai/nanoclaw/pull/3092) — Remote Streamable HTTP MCP servers** — Open today from core-team, likely fast-tracked given the merged URL-based MCP (#2847).
- **[PR #3094](https://github.com/nanocoai/nanoclaw/pull/3094)**, **[PR #3093](https://github.com/nanocoai/nanoclaw/pull/3093)**, **[PR #3090](https://github.com/nanocoai/nanoclaw/pull/3090)** — All core-team fix PRs opened today, likely to merge quickly.

**Project Health Assessment:**
- **Velocity:** Very high — 42 PRs updated in 24 hours suggests an active core team + engaged community.
- **Community Health:** Strong — multiple independent contributors submitting fixes for the same critical bug indicates a healthy, production-oriented user base.
- **Bug Resolution:** Excellent — WhatsApp LID issue went from widespread pain to merged fix across four PRs.
- **Documentation Risk:** With so many new features (remote MCP, channel permissions, multi-channel), documentation updates may lag behind code changes. The hosthooks proposal (#3091) directly addresses maintainability of the skill ecosystem as it scales.

---

*Generated 2026-07-20 from GitHub activity on the last 24 hours.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-20

## Today's Overview

IronClaw is in an intense **"Reborn" refactoring sprint**, with 20 open PRs and 30 merged/closed PRs in the last 24 hours — a 2.5× merge-to-open ratio indicating strong maintainer throughput. Five new issues were filed today, all opened within the last 24 hours, zero closed. The project is executing a staged architectural simplification (documented in `docs/reborn/2026-07-17-architecture-simplification-dto-dyn-local.md`), with today's activity focused on Phase 5.3 (capability-result collapse) and composing the new `DeploymentConfig` as the single configuration axis. No new releases today — the project is still on the 0.29.x track as PR #5598 (the release PR) remains open after 17 days, suggesting a larger coordinated release is being prepared.

---

## Releases

**No new releases today.** The release PR (#5598) remains open after 17 days, blocking `ironclaw_common` (0.4.2→0.5.0, **API breaking**) and `ironclaw_skills` (0.3.0→0.4.0, **API breaking**) from shipping. The hold appears tactical — likely awaiting the Reborn slices to stabilize before cutting a comprehensive release.

---

## Project Progress

**30 PRs merged/closed today**, dominated by core contributor `ilblackdragon` advancing the Reborn architecture simplification:

- **Capability-result flip pipeline (Stage 0–2):** Four PRs merged in sequence: `#6275` (ResolutionBatch + loop-suspension predicate), `#6278` (host-side gate reconstitution), `#6273` (Resolution carrying failure diagnostics), and the major `#6287` (loop-facing result becomes `host_api::Resolution` — the atomic flip). This collapses the ten-variant `CapabilityOutcome` into a five-channel `Resolution` at the `LoopCapabilityPort` trait boundary.
- **Store consolidation:** `#6276` added row-memory turn-state benchmarks (#6263 Phase 1 — measurement evidence, no prod changes). `#6281` removed the redundant global `commit_gate` mutex from `FilesystemTurnStateRowStore`, a latency/contention fix with preserved write-through semantics.
- **DeploymentConfig ownership:** `#6279` (merged) and `#6280` (merged) expanded `DeploymentConfig` to cover all seven composition profiles and de-prefixed misnamed `local_dev` builders to their shared mechanism names.
- **Composition test hermeticity:** `#6272` fixed tests that broke under a real `NEARAI_API_KEY` env var — a practical developer-experience fix.
- **Dependency management:** `#6165` bumped 26 dependencies including `agent-client-protocol` (0.10.4→1.2.0, major semver jump) and `rustls`.

---

## Community Hot Topics

**#6263 — `InMemoryTurnStateStore` retirement** (6 comments, 0 reactions)
URL: nearai/ironclaw Issue #6263

The most discussed issue today. This is the last `InMemory*Store` debt entry — a 4,260-line module that must be replaced with a Slice 0 oracle approach. Phase 1 (benchmarking via `#6276`) is already merged; Phase 2 (the actual removal) is likely next.

**#6274 — DeploymentConfig completion** (2 comments, 0 reactions)
URL: nearai/ironclaw Issue #6274

Tracking issue for the pivot making `DeploymentConfig` own every deployment axis. All three phases (#6277, #6279, #6280) are now merged — this issue may close imminently.

**#6257 / #6290 — PDF MIME type bug** (1 comment, 0 reactions)
URLs: nearai/ironclaw Issue #6257, Issue #6290

A duplicate bug report from a Slack user (Michael Kelly) about `Invalid value (attachments.mime_type)` when sending/generating PDF files. Two issues filed because the reporter wasn't sure if it's a config issue or a real bug. No fix PR yet.

**#6284 — Error-recoverability endgame** (0 comments, 0 reactions)
URL: nearai/ironclaw Issue #6284

Architecture-level goal: every mid-run error must satisfy a four-part recoverability contract (run survives, model sees it, carries cause + success criteria, model gets a turn). PR #6291 folds this into the architecture doc (r8 revision). This is a design guarantee, not a bug fix.

---

## Bugs & Stability

### High Severity

**PDF MIME type validation failure** — Issues #6257, #6290
- **Reported by:** Michael Kelly (Slack, #x-ai-product-feedback)
- **Error:** `Invalid value (attachments.mime_type)` when sending/generating PDFs
- **Suspected cause:** Missing/setup-dependent tool reading file path or MIME detection
- **Status:** No fix PR. Two open issues, no assignee. This is a customer-facing bug blocking PDF workflows.

### Medium Severity

**Hermetic test failure under real credentials** — Fixed in PR #6272 (merged)
- `NEARAI_API_KEY` env var caused composition tests to fail on developer machines with legitimate API keys
- **Fix:** Tests now properly isolate env var state

### Notable Infrastructure

**Turn-state store contention** — Fixed in PR #6281 (merged)
- Removed process-wide `commit_gate` async mutex from `FilesystemTurnStateRowStore` that was held *in addition* to per-row locks
- Pure latency/CPU improvement, durability unchanged

---

## Feature Requests & Roadmap Signals

**Error-recoverability contract (#6284)** — Design goal requiring that the model sees and recovers from *every* error it encounters. This is architectural hardening, not user-requested, but directly impacts user experience during long-running agent sessions.

**Local-dev onboarding UX (#6285, #6289)** — Two open PRs from contributor `loopstring`:
- `#6285`: Auto-provision serve, REPL model wizard, onboard launcher — makes first-run work with zero manual env setup
- `#6289`: CLI spinner + markdown rendering — eliminates silent blocking and raw markdown output

These are clear **next-version candidates**: low-risk UX improvements that materially change the developer experience. The onboarding PR (#6285) explicitly motivated by a from-scratch run hitting "dead ends (missing WebUI token, missing user id...)". Expect these to land before the next release cut.

**DeploymentConfig axis ownership (#6274)** — Once closed, this enables feature-flag-free configuration for all deployment modes (local dev, staging, production). Likely to ship in the 0.30 release.

---

## User Feedback Summary

**One real user report today:** Michael Kelly (Slack, #x-ai-product-feedback) reporting PDF generation failure. The duplicate filing (#6257 and #6290) suggests user uncertainty about whether this is a config issue or a bug — the project could improve error messaging to help users self-diagnose.

The onboarding friction that motivated PR #6285 (from-scratch run hitting "dead ends") represents a second implicit user pain point, though no formal user reported it.

**No satisfaction signals or praise reported today.** The project's focus on internal architecture (Reborn refactoring) means user-facing improvements are minimal this sprint.

---

## Backlog Watch

| Item | Age | Risk | Notes |
|------|-----|------|-------|
| PR #5598 (release) | 17 days | **HIGH** | Blocks `ironclaw_common` 0.5.0 and `ironclaw_skills` 0.4.0. API-breaking changes unreleased. No response from maintainer since 2026-07-19. |
| PR #4032 (wasm deps) | 56 days | **LOW** | Dependabot PR bumping `wit-component` and `wit-parser`. Stale — likely blocked on CI or build compat. |
| PR #5664 (GitHub Actions deps) | 15 days | **LOW** | 16 action updates including major bumps (`actions/checkout` 4→7). Holding pattern until release. |
| Issue #6257/#6290 (PDF MIME) | 1 day | **HIGH** | Unassigned. Customer-facing PDF workflow broken. Should be triaged and assigned today. |

The release PR (#5598) is the most critical backlog item — holding releases for 17 days is unusual and risks users self-patching with git dependencies. The PDF bug is the highest-severity unassigned customer-facing issue.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Based on the provided GitHub data for **LobsterAI** (netease-youdao/LobsterAI) as of **2026-07-20**, here is the project digest.

---

# LobsterAI Project Digest – 2026-07-20

## 1. Today's Overview
The project is in a **low-activity maintenance phase** over the last 24 hours, with a total of 3 issues and 3 PRs updated, all of which are **stale** (last updated in April 2026). No new releases or fresh contributions were made today. The activity consists primarily of automated dependency bumps (dependabot) and a single closed PR. While the core codebase appears stable, the lack of recent human-led commits or releases suggests either a team focus shift, a pre-release freeze, or a reduced development cadence.

## 2. Releases
**None** – No new versions were released today, and the "Latest Releases" section was empty. The last visible release activity remains prior to the data window.

## 3. Project Progress
Only one PR was resolved in the last 24 hours:
- **PR #1350 (Closed)** – [skills文件长时间生成阻塞无法感知...](https://github.com/netease-youdao/LobsterAI/pull/1350) – This was a user-reported bug PR covering UX blocking during skills generation, lack of intermediate state feedback, and model understanding inconsistencies. Its closure likely indicates a fix was merged or the issue was addressed upstream.

*No other feature PRs or functional merges were recorded.*

## 4. Community Hot Topics
No issues or PRs received comments or reactions within the last 24 hours. However, the following stale items have the highest historical engagement (2 comments each) and represent recurring pain points:

- **Issue #1352 [CLOSED]** – [任务对话框，任务运行中，附件无法上传](https://github.com/netease-youdao/LobsterAI/issues/1352) – User reported that while a task dialog is running, clicking "upload attachment" has no effect. The closure suggests a fix was deployed or the issue was accepted as a known limitation.
- **Issue #1287 [OPEN]** – [bug] [IM机器人连通性测试验证不严格](https://github.com/netease-youdao/LobsterAI/issues/1287) – User found that entering dummy credentials (all "1"s) passes the connectivity test for the IM robot (popo). This indicates weak input validation on the backend.

**Underlying need**: Users are asking for better **UX feedback** (during long-running operations) and **stricter validation** for critical integration configurations.

## 5. Bugs & Stability
Only one distinct bug was reported in the active dataset:

- **Issue #1287 (Open, Stale)** – [IM机器人连通性测试验证不严格](https://github.com/netease-youdao/LobsterAI/issues/1287)  
  **Severity**: Medium-High – A connectivity test that accepts obviously invalid credentials could lead to misconfigured integrations and silent failures in production.  
  **Fix Status**: No corresponding fix PR was found. This issue has been open since April 2026 without a resolution.

*No crashes, regressions, or regression-related PRs were observed in this snapshot.*

## 6. Feature Requests & Roadmap Signals
The most notable feature request is:

- **Issue #1289 (Open, Stale)** – [feat: 为长代码块添加折叠/展开功能](https://github.com/netease-youdao/LobsterAI/issues/1289) – User proposes adding collapsible code blocks for 15–200 line code snippets to improve readability. This is a **well-scoped UX enhancement** that could be considered for the next minor release (e.g., v1.x). It aligns with the broader theme of improving the conversation view experience.

**Predictions**: Given the low current activity, this feature is likely **not in the immediate roadmap** but may be revisited if a new frontend sprint begins.

## 7. User Feedback Summary
Real pain points expressed by users (all from the same uploader cohort, April 2026):

- **Blocking UX during skills generation** (PR #1350): Users reported no progress indicator, no error feedback, and a frozen dialog–a significant dissatisfaction point for workflow-heavy tasks.
- **Model inconsistency**: Same prompt produced different results between LobsterAI and Openclaw using the same underlying model. This undermines trust in the model-serving layer.
- **Attachment upload failure** (Issue #1352): Task-level UI actions (upload) become unresponsive while a task is running, breaking the expected multi-modal interaction pattern.

Overall **satisfaction appears moderate** – users are actively filing issues, but the prolonged staleness (4 months without resolution on several items) may indicate frustration.

## 8. Backlog Watch
The following items remain **open and stale for over 110 days** and require maintainer attention:

| Item | Type | Last Update | Comments |
|------|------|-------------|----------|
| [Issue #1287](https://github.com/netease-youdao/LobsterAI/issues/1287) | Bug (IM Robot validation) | 2026-07-19 | No PR, no maintainer reply |
| [Issue #1289](https://github.com/netease-youdao/LobsterAI/issues/1289) | Feature Request (Collapsible code blocks) | 2026-07-19 | Single comment, no roadmap signal |
| [PR #1285](https://github.com/netease-youdao/LobsterAI/pull/1285) | Dependabot (concurrently bump) | 2026-07-19 | Stale, needs review or merge |
| [PR #1286](https://github.com/netease-youdao/LobsterAI/pull/1286) | Dependabot (tailwindcss major bump) | 2026-07-19 | Major version bump (v3 → v4) – should be reviewed carefully |

**Recommendation**: A maintainer should triage Issue #1287 (validation bug) and Issue #1289 (UX enhancement) to provide at least a status update or close if deferred. Two dependabot PRs for critical dev dependencies (tailwindcss v4) are also aging and should be merged or closed.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-20

## Today's Overview
Moltis is in a **low-activity period**, with only one issue and one pull request updated in the last 24 hours, and no closed or merged items. This reflects a likely weekend or maintenance lull following a **new release (20260719.01)** pushed yesterday. The project remains healthy but is not undergoing active feature churn. One significant feature PR (#1158) remains open and under review. Community engagement is minimal today, though a long-standing feature request (#574) continues to attract discussion.

## Releases
- **New Version**: `20260719.01` (published 2026-07-19)  
  No accompanying release notes, changelog, or migration guide were provided with this tag. The version naming (date-based) suggests this is a scheduled or nightly release. No breaking changes or migration notes are documented.

## Project Progress
- **No PRs were merged or closed today.**  
  The only PR updated in the last 24 hours is still open:  
  - **#1158** ([link](https://github.com/moltis-org/moltis/pull/1158)) — *feat(memory): add zvec vector database memory backend* by @demyanrogozhin. This PR, described as a "vibe-coded experiment," introduces an alternative memory backend based on Zvec and redb, gated behind a `zvec` cargo feature. While not merged, its existence signals interest in expanding memory storage options.

## Community Hot Topics
- **#574 [OPEN] — Feature: Model Routing Per Topic** ([link](https://github.com/moltis-org/moltis/issues/574))  
  Author: @azharkov78 | Comments: 4 | 👍: 1 | Updated: 2026-07-19  
  This is the most active issue by discussion and reactions. The requester wants the ability to route different conversational topics to different LLM models (e.g., using a cheap/fast model for simple queries and a powerful model for complex reasoning). The underlying need is **intelligent resource allocation** — users want to optimize cost, latency, and quality without manual model switching. This has been open since April and has not been assigned or labeled with a milestone.

## Bugs & Stability
- **No new bugs, crashes, or regressions were reported today.**  
  The open issue #574 is an enhancement request, not a bug. No stability-related commits or discussions were observed. Project appears stable at this snapshot.

## Feature Requests & Roadmap Signals
The only active feature request on the board is **#574 (Model Routing Per Topic)**. Given its long open duration (3+ months) and sustained interest, it is a plausible candidate for a future minor release, though no maintainer has indicated intent. The open PR #1158 (Zvec memory backend) may also evolve into a merged feature, potentially in the next release cycle. No other roadmap signals were observed.

## User Feedback Summary
- **Positive signal**: The PR #1158 (Zvec backend) was contributed by a user experimenting with an alternative vector database setup, indicating that Moltis’ architecture supports community-driven extensions.
- **Unresolved desire**: The feature request #574 reflects a pain point where users want more granular control over which model handles which task — a common need in multi-agent or multi-topic systems to avoid overpaying for simple queries.

## Backlog Watch
- **#574 — Model Routing Per Topic** ([link](https://github.com/moltis-org/moltis/issues/574))  
  **Status**: Open since 2026-04-06 | Updated 2026-07-19 | No assignment, no milestone, no maintainer comment.  
  This issue has been open for **3.5 months** with 4 comments and 1 upvote. It is a high-value quality-of-life feature that has not received any maintainer acknowledgment. It risks becoming stale and may require a maintainer to triage or respond to set expectations.

**No other long-unanswered items** were identified in the current data set.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-20

## Today's Overview
CoPaw (QwenPaw) shows high community engagement with 11 issues and 6 pull requests updated in the last 24 hours, indicating a very active development cycle. The project has no new releases today, but the open/active issue count (10) versus closed (1) suggests strong ongoing feature development and bug triage. Activity is concentrated around performance optimization (MCP driver initialization), UI/UX improvements, and memory subsystem reliability. Six open PRs (including two first-time-contributor submissions) signal healthy community participation, though none have been merged yet today.

## Releases
No new releases were published today. The latest stable version remains **v2.0.0.post3**.

## Project Progress
No pull requests were merged or closed in the last 24 hours. Open PRs pending review include:
- **PR #6262** — "feat(agents): add one-click copy of agent configuration" (yuanxs21) — Adds `POST /api/agents/{agent_id}/config` endpoint and config-copy modal, allowing selective duplication of agent config without runtime assets.
- **PR #6259** — "feat(security): support CIDR in no-auth host allowlist" (dztyykxx, first-time contributor) — Extends `security.allow_no_auth_hosts` to accept IPv4/IPv6 CIDR notation for easier internal network allowlisting.
- **PR #6195** — "Refactor the ring from the end of each chat to the chat console" (yuanxs21) — Moves per-message context/token usage indicator to session-level, introducing a Zustand `turnUsageStore` for SSE-driven real-time updates.
- **PR #6256** — "feat(governance): make sandbox-unavailable fallback action configurable" (JOJOCrazy123, first-time contributor) — Fixes #6250, adds configurable behavior when sandbox is unavailable (reject/approve/fallback).
- **PR #6247** — "fix(memoryspace): catch OSError in `_saved_tool_refs` is_file() check" (zealonexp) — Fixes crash when extremely long file paths from `tool_result` content cause `OSError: [Errno 36] File name too long`.
- **PR #6251** — "feat(cli): add scriptable environment reads" (wananing) — Adds `env get` (returns single value, non-zero exit on missing key) and `env list --json` (sorted JSON output) for script-driven secret management.

## Community Hot Topics
- **Issue #6193** — [OPEN] "MCP drivers start sequentially instead of in parallel" (zsrmoyanzsr, 4 comments) — High-impact performance concern: 8 MCP clients take ~40s serial vs ~5s parallel (8x improvement). User provided root cause in `build_drivers()` with exact code path. Strong candidate for near-term optimization. → https://github.com/agentscope-ai/QwenPaw/issues/6193
- **Issue #6240** — [CLOSED] "末尾出现注释显示" (MCQSJ, 3 comments) — Bug where memory annotation HTML comments (e.g. `<!-- ⟦ NEXT_RID...`) leak into chat display, suggesting web UI filtering gap. Closed with fix. → https://github.com/agentscope-ai/QwenPaw/issues/6240
- **Issue #6163** — [OPEN] "Reusable Workflow Orchestration with Audit Trail" (hhhzyd-cloud, 3 comments) — Feature request for defining structured multi-step workflows with audit trail, combining existing multi-agent and cron capabilities. → https://github.com/agentscope-ai/QwenPaw/issues/6163

## Bugs & Stability
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#6246](https://github.com/agentscope-ai/QwenPaw/issues/6246) | `recall_history()` crashes with `OSError: [Errno 36] File name too long` when `tool_result` contains git diff matching `_SAVED_TOOL_FILE_RE` regex. Core memory subsystem bug. | ✅ PR #6247 (open) |
| **Medium** | [#6257](https://github.com/agentscope-ai/QwenPaw/issues/6257) | Multiple tool calls in a single turn produce identical thinking content — independent reasoning not occurring per call. | ❌ No fix PR |
| **Medium** | [#6240](https://github.com/agentscope-ai/QwenPaw/issues/6240) | Memory annotation HTML comments leak into chat display. | ✅ Closed (fix released) |
| **Medium** | [#6255](https://github.com/agentscope-ai/QwenPaw/issues/6255) | Chat error `openai.BadRequestError: 400 - invalid_parameter_error` during conversation. | ❌ No fix PR |
| **Low** | [#6252](https://github.com/agentscope-ai/QwenPaw/issues/6252) | Tauri desktop mode: Ctrl+wheel zoom doesn't work on Linux (Ubuntu 24.04). | ❌ No fix PR |
| **Low** | [#6261](https://github.com/agentscope-ai/QwenPaw/issues/6261) | Offline environment: code mode file preview fails due to online resource dependency. Regression from #5781 fix. | ❌ No fix PR |

## Feature Requests & Roadmap Signals
- **Per-agent auto-memory profiles** (#6263) — User suggests distinct memory formats per agent (chronological diaries for companions, topic-oriented for technical agents). Given the project's emphasis on multi-agent workflows, this has strong alignment with roadmap.
- **Reusable workflow orchestration with audit trail** (#6163) — Formalization of multi-step agent orchestration with structured recipe definition and audit logging. Likely to appear in a future minor version as QwenPaw matures its agent composition model.
- **Collapsible tool call/thinking sections** (#6260) — User requests UI improvement to collapse intermediate reasoning and display only final results. Matches UX refinement trend seen in PR #6195 (context usage refactor).
- **OpenAI max_output_tokens not working** (#6258) — Configuration parameter not being applied. Likely a quick fix in next patch release.
- **Desktop zoom support on Linux** (#6252) — Cross-platform UI parity request for Tauri desktop mode.

## User Feedback Summary
- **Performance pain point**: MCP driver serial initialization delaying startup by ~40s (3 comments, high engagement). User provided detailed code analysis and benchmark data.
- **Memory/reliability concerns**: Two distinct crash bugs in memory subsystem (#6246 OSError, #6255 400 error) suggest the `recall_history` and tool call memory paths need hardening.
- **UX satisfaction gap**: Multiple users (#6260, #6257) want better visual separation of reasoning vs. results, and consistent tool call thinking behavior.
- **Positive community participation**: Two first-time contributors submitting PRs (#6259, #6256) indicates good onboarding and clear contribution guidelines.

## Backlog Watch
- **Issue #6193** (MCP serial init, created Jul 16, 4 comments) — No assigned owner or linked PR despite clear performance impact and root-cause analysis.
- **Issue #6163** (Workflow orchestration, created Jul 16, 3 comments) — High-value feature request with no maintainer response or milestone assignment.
- **PR #6195** (Console refactor, created Jul 16, ready-for-human-review label) — Has been open for 4 days with no review activity, despite being marked ready-for-human-review.

*Note: The original task specified analyzing "CoPaw" from `agentscope-ai/CoPaw`. The actual GitHub repository used in this analysis is `agentscope-ai/QwenPaw` as the provided issue/PR data consistently references QwenPaw. If CoPaw is a separate project with its own repository, the analysis above pertains to the QwenPaw data provided.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the ZeroClaw project digest for 2026-07-20.

---

## ZeroClaw Project Digest — 2026-07-20

### 1. Today's Overview

ZeroClaw is in a period of intense, high-quality activity, with 50 issues and 50 PRs updated in the last 24 hours. The project is executing on a clear technical roadmap, focusing on major architectural shifts: decoupling memory lifecycles, migrating to WASM-based runtime plugins, and hardening security/credential management. While no new releases were cut, the volume of accepted RFCs moving through the PR pipeline indicates that a significant milestone (likely 0.9.0) is being assembled. The community is engaged and disciplined, driving complex features like background turn execution and per-agent tool gating.

### 2. Releases

No new releases were published on this date.

### 3. Project Progress

The project advanced primarily through documentation and infrastructure improvements, alongside critical bug fixes. Notable closed/merged activity includes:

- **Docs & Architecture:** A significant series of PRs from `Audacity88` are formalizing the project's architectural decisions (ADRs). PRs [#9170](https://github.com/zeroclaw-labs/zeroclaw/pull/9170), [#9168](https://github.com/zeroclaw-labs/zeroclaw/pull/9168), [#9167](https://github.com/zeroclaw-labs/zeroclaw/pull/9167), and [#9163](https://github.com/zeroclaw-labs/zeroclaw/pull/9163) are documenting the accepted designs for agent lifecycle, live config apply, multi-agent runtime boundaries, and memory authority.
- **Tooling & CI:** A new diff-aware Semgrep scan was added to CI (PR [#9166](https://github.com/zeroclaw-labs/zeroclaw/pull/9166)), moving from a noisy full-tree scan to one that only flags findings on changed lines.
- **Config & Credentials:** A fix was merged for the demo configuration, bridging the `OPENROUTER_API_KEY` env var into the typed config schema (PR [#9175](https://github.com/zeroclaw-labs/zeroclaw/pull/9175)).
- **Channels:** A fix for the Nextcloud Talk channel ensures replies are sent via the correct signed bot API, not standard bearer auth (PR [#9181](https://github.com/zeroclaw-labs/zeroclaw/pull/9181)).

### 4. Community Hot Topics

The most active discussions reveal the community's focus on architecting for scale and production readiness.

- **[RFC: Work Lanes, Board Automation, and Label Cleanup (#6808)](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** (14 comments): This long-running governance RFC is nearing completion (Rev. 18). The community is deeply engaged in defining how work should be routed and tracked automatically, indicating a need for better project management tooling as the contributor base grows.
- **[RFC: Abstract a `KeySource` trait (#9127)](https://github.com/zeroclaw-labs/zeroclaw/issues/9127)** (7 comments): A high-priority security discussion about making master-key material deployment-agnostic. This reflects user demand for secure, flexible secret management suitable for everything from local dev to cloud deployments.
- **[Persistent Memory Tracker (#8891)](https://github.com/zeroclaw-labs/zeroclaw/issues/8891)** (7 comments): This tracker coordinates 21 open items (3 issues, 18 PRs) to bring persistent memory to parity with competitor runtimes. The sheer volume of work here signals that memory is the single biggest engineering thrust and a critical user need for long-running, context-aware agents.
- **[RFC: Separate conversation history from curated memory (#9048)](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)** (6 comments): A direct follow-up to #8891, this RFC proposes a clean architectural split between ephemeral session history and permanent long-term memory, which is essential for building agents that can learn and maintain context across sessions without data bloat.

### 5. Bugs & Stability

Several high-severity (S1) bugs are active, reflecting the growing pains of a fast-moving codebase.

| Severity | Issue | Summary | Status |
| :--- | :--- | :--- | :--- |
| **S1** | [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) | **Telegram channel cannot be configured** – `channels doctor` fails even after setup. | Open, 6 comments |
| **S1** | [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) | **Agents stop on chat window exit** – Closing the web dashboard kills in-flight agent tasks. | In-progress, 3 comments |
| **S0** | [#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947) | **`execute_pipeline` bypasses per-agent tool gating** – A "confused deputy" security risk where pipelines can ignore an agent's allowed/excluded tools. | In-progress, 2 comments |
| **S3** | [#9117](https://github.com/zeroclaw-labs/zeroclaw/issues/9117) | **ZeroCode won't start on Windows** without the `ZEROCLAW_SOCKET` env var being set. | Open, 5 comments |
| **S2** | [#7808](https://github.com/zeroclaw-labs/zeroclaw/issues/7808) | **CLI secret prompts give no feedback** after pasting a secret, causing user confusion. | Open, 2 comments |

*Fix PRs exist for #8505 (Telegram multi-message mode, PR [#8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561)) but the core config bug remains.*

### 6. Feature Requests & Roadmap Signals

The roadmap is heavily focused on three areas: **memory**, **plugins**, and **user experience**.

- **Memory Parity:** The tracker [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) and RFC [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) are the dominant signals. Expect the next version (likely 0.9.0) to ship a fully decoupled memory lifecycle system.
- **WASM Runtime Plugins:** The major PR stack from `JordanTheJet` ([#8855](https://github.com/zeroclaw-labs/zeroclaw/pull/8855), [#8863](https://github.com/zeroclaw-labs/zeroclaw/pull/8863), [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850)) is moving channels and tools from compile-time features to runtime WASM plugins. This is a foundational change that will dramatically shrink the default binary and allow users to extend ZeroClaw without recompiling.
- **Voice & Real-time:** The `voicehost` channel RFC ([#7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943)) and the background-turn lifecycle work ([#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759)) point toward real-time voice interactions and non-blocking agent tasks, likely a 1.0 target.
- **Per-Chat Model Switching:** Issue [#8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600) (featuring a user's positive reaction) requests easy on-the-fly model switching, a "nice-to-have" for advanced users that is likely lower priority than the architectural rewrites.

### 7. User Feedback Summary

Real user pain points and use cases are clearly visible in the bug reports and feature requests:

- **Pain: Workflow Blocking:** Users are frustrated that closing the web chat window kills background agent tasks ([#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559)). The need for "fire and forget" agent tasks is a top request.
- **Pain: Config Confusion:** The Telegram channel setup is a common stumbling block ([#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505)), and the silent CLI password feedback ([#7808](https://github.com/zeroclaw-labs/zeroclaw/issues/7808)) reduces trust in the onboarding process.
- **Pain: Windows Support:** Windows users face specific startup hurdles with ZeroCode ([#9117](https://github.com/zeroclaw-labs/zeroclaw/issues/9117)), and the CI does not yet run tests on Windows or macOS ([#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461)), indicating a platform parity gap.
- **Use Case: Automation & Reporting:** The closed feature request for SMTP email delivery ([#5573](https://github.com/zeroclaw-labs/zeroclaw/issues/5573)) and the cron `announce` mode ([#6510](https://github.com/zeroclaw-labs/zeroclaw/issues/6510) – closed) show strong user interest in using ZeroClaw for scheduled reporting and notifications.
- **Satisfaction: Feature Richness:** Users from other platforms (e.g., moltis) express satisfaction that ZeroClaw already covers most of the capabilities they need, with only a few specific gaps like easy model switching ([#8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600)).

### 8. Backlog Watch

Several high-signal items are awaiting maintainer action or have stalled.

- **Telegram Channel Bug ([#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505)):** This S1 bug has been open since June 29 and is blocking a core user workflow. A related PR (#8561) adds multi-message mode but does not fix the underlying config issue. **Needs: Triage and a targeted fix.**
- **Pipeline Security Risk ([#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947)):** This S0 (security) bug has been in-progress since June 18. While acknowledged, the lack of a merged fix is a significant risk for any production deployment using pipelines. **Needs: Accelerated review and merge.**
- **Multi-OS CI ([#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461)):** Open since June 10, this feature request to run tests on Windows and macOS is essential for catching platform-specific bugs (like #9117) before release. **Needs: A champion to implement the CI matrix.**
- **ADRs Restoration ([#8691](https://github.com/zeroclaw-labs/zeroclaw/issues/8691)):** This cleanup tracker is making progress with the recent spate of ADR PRs (see Section 3), but is still open. **Status: Actively being resolved.**

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kky-wollu/agents-radar).*