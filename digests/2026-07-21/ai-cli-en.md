# AI CLI Tools Community Digest 2026-07-21

> Generated: 2026-07-20 23:04 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Comparison Report
**Date: 2026-07-21**

---

## 1. Ecosystem Overview

The AI CLI tools landscape in mid-2026 is characterized by intense competition and rapid iteration, with seven major tools—Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code, OpenCode, Pi, Qwen Code, and DeepSeek TUI—all shipping updates this week. The ecosystem is converging around three core capabilities: **agentic multi-step workflows**, **MCP/extensibility integration**, and **cross-platform reliability**, yet each tool retains distinct differentiation in model provider alignment, sandbox security models, and automation surface area. A significant tension is emerging between the push for autonomous agent behaviors (skills, sub-agents, fleets) and the community's demand for predictable, controllable, and secure execution. Windows stability and OAuth token lifecycle management remain the most consistently reported pain points across tools.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Active (24h) | Release Status | Community Engagement Signal |
|---|---|---|---|---|
| **Claude Code** | 10 hot issues | 5 open PRs | **v2.1.216** (critical perf fix) | 19 👍 on MCP OAuth bug |
| **OpenAI Codex** | 10 hot issues | 10 PRs (7 merged) | **rust-v0.145.0-alpha.25** | 68 👍 on Windows stutter (#20214) |
| **Gemini CLI** | 10 hot issues | 10 PRs (all open) | **v0.52.0-nightly** (nightly) | 8 👍 on generalist hang (#21409) |
| **GitHub Copilot CLI** | 18 new/updated | 0 PRs | **v1.0.72** (hook fix) | 17 👍 on Shift+Enter bug (#1481) |
| **Kimi Code** | 5 issues | 4 open PRs | **v1.49.0** (no new release) | 3 👍 on 429 overload (#2209, 72 days old) |
| **OpenCode** | 10 hot issues | 10 PRs (7 merged) | **v1.18.4** (Kimi adaptive thinking) | 67 👍 on unqueue feature (#4821) |
| **Pi** | 10 issues | 10 PRs (7 closed) | No new release | 8 👍 on ephemeral model changes |
| **Qwen Code** | 10 hot issues | 10 PRs (all open) | **v0.19.11** (no new release) | P1: `enable_thinking` bug 3 duplicates in 24h |
| **DeepSeek TUI** | 10 hot issues | 10 PRs (20+ merged in 24h) | **Pre-v0.9.1** (release-blocker sprint) | 40 comments on constitution compliance (#4032) |

**Key observations:**
- **DeepSeek TUI** shows the highest commit velocity (20+ PRs merged in 24h), indicating an intense pre-release sprint.
- **OpenAI Codex** leads in PR throughput (7 merged today) with substantive architectural changes (copy-on-write, hook timing fixes).
- **Qwen Code** has the most critical single-issue cluster (3 duplicate P1 bugs on `enable_thinking`).
- **Kimi Code** shows the lowest activity and has a critical 429 bug unresolved for 72 days.

---

## 3. Shared Feature Directions

| Theme | Affected Tools | Specific Requirements |
|---|---|---|
| **Windows Sandbox & Performance** | Claude Code, OpenAI Codex, Gemini CLI, Kimi Code, DeepSeek TUI | Terminal rendering corruption (#79025 Claude), WMI storms from `taskkill.exe` (#33776 Codex), elevated sandbox latency (#32314 Codex), Windows migration path missing (#2522 Kimi), PowerShell hardening (#4593 DeepSeek) |
| **MCP/OAuth Reliability** | Claude Code, OpenAI Codex, Gemini CLI, Qwen Code | Token refresh failures (#65036 Claude - highest-voted open bug), MCP tool listing timeouts (#7147 Qwen), MCP discovery freezing (#28410 Gemini) |
| **Sub-Agent/Skill Orchestration** | Claude Code, OpenAI Codex, Gemini CLI, Copilot CLI, OpenCode, DeepSeek TUI | Skill invocation regressions (#79023 Claude), agent-as-plugin (#18308 Codex), subagent permission bypass (#22093 Gemini), plan-mode shell blocking (#4188 Copilot), multi-agent fleet roles (#3934 DeepSeek) |
| **Context/Compaction Reliability** | Claude Code, OpenAI Codex, Gemini CLI, Copilot CLI, Kimi Code, Pi, Qwen Code | Quadratic normalization cost (Claude, fixed), auto-compaction resurrecting deleted tasks (#2523 Kimi), compaction hook timing (#28736 Codex, fixed), 5 MB CAPI body limit (#4183 Copilot) |
| **Voice & Multimodal Input** | Claude Code, OpenAI Codex, Gemini CLI, Pi | TTS readback (#42700 Claude), voice mode for remote control, video/audio prompt support (#3200 Pi) |
| **Session Persistence & Migration** | Claude Code, Kimi Code, OpenCode, DeepSeek TUI | Cowork regression on M4 (#72504 Claude), `kimi migrate` command missing (#2522 Kimi), notification server crashes (#37171 OpenCode), setup wizard persistence (#4604 DeepSeek) |

**Cross-cutting pattern:** The **agent-to-agent delegation** and **skill orchestration** theme appears in **7 of 9 tools**, making it the most universally demanded capability. The community is pushing CLI tools from chat interfaces toward autonomous CI/CD pipelines.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|---|---|---|---|---|---|---|---|---|---|
| **Model Provider** | Anthropic Claude | OpenAI (GPT-5.6 Sol/Terra) | Google Gemini 3 | Multi-model (Anthropic/OpenAI) | Moonshot Kimi | Multi-provider (BYOK) | Multi-provider (BYOK) | Alibaba Qwen | DeepSeek + Moonshot |
| **Primary Differentiator** | Sandbox granularity (`sandbox.filesystem.disabled`) | Hook parity with Claude (29+ lifecycle hooks) | Bash-native agent (Zero-Dependency OS Sandboxing epic) | GitHub ecosystem integration (O runtime auth) | Remote server deployment model | Python SDK request (#4031, unfulfilled) | Extension API, SQLite sessions | Autofix infrastructure (managed PR fleet) | Sub-agent isolation (permission contracts, fleet roles) |
| **Target User** | Professional developers, long-session users | Enterprise Windows users, hook-reliant pipelines | Linux/NixOS developers, cloud-native | GitHub-centric teams, CI/CD | Remote server operators, Chinese market | Python/JS developers, power users | Extension developers, cost-conscious | Autofix/automation engineers | Multi-agent workflow enthusiasts |
| **Community Mood** | Stable but frustrated with OAuth | Windows pain dominance | "Uncontrollable agent" complaints | Reliability regressions | Neglected (72-day unresolved P1) | High engagement (67👍 feature) | Quiet but active (extension devs) | Urgent (3 P1 duplicates in 24h) | Intense pre-release sprint |
| **Technical Approach** | Monolithic release + hotfixes | Rapid PR merging, alpha channels | Nightly releases, caretaker automation | Patch releases, low PR velocity | Slow maintenance cycle | Monthly feature releases | Slow, incremental | Feature branches, autofix pipeline | Sprint-based (heavy 24h merge burst) |

**Key differentiators:**
- **Claude Code** leads on **sandbox granularity** with the new `sandbox.filesystem.disabled` setting.
- **OpenAI Codex** has the most mature **hook system** (29+ lifecycle events) but struggles with Windows stability.
- **Gemini CLI** is investing heavily in **bash-native agent execution** via Zero-Dependency sandboxing.
- **DeepSeek TUI** is the most **architecturally ambitious** with permission contracts, fleet roles, and durable goals.
- **Kimi Code** is the most **stagnant**—low activity with a critical 429 bug unresolved for 72+ days.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Characteristics |
|---|---|---|
| **Rapid Iteration / High Momentum** | DeepSeek TUI, OpenAI Codex, Qwen Code | 10–20+ PRs merged daily; active release-blocker sprints; high issue-to-fix velocity. DeepSeek TUI shows the highest raw commit density. |
| **Stable / Mature** | Claude Code, OpenCode, Pi | Regular releases (Claude v2.1.216, OpenCode v1.18.4); established feature sets; lower issue velocity but high-quality feedback. |
| **Moderate / Emerging** | Gemini CLI, GitHub Copilot CLI | Nightly builds (Gemini) or patch releases (Copilot); feature parity being actively built; smaller but engaged communities. |
| **Low Activity / Risk** | Kimi Code | Only 5 issues in 24h, 4 PRs, no release; critical P1 bug open 72 days. Community engagement is minimal. |

**Maturity assessment:**
- **Claude Code** and **OpenCode** have the most **mature feature sets** and **stable user bases**, evidenced by lower issue velocity and more granular feature requests (e.g., unqueue messages, custom cost display).
- **DeepSeek TUI** is the **fastest-moving project** but is still pre-v1.0; its permission contract model is the most innovative in the ecosystem.
- **OpenAI Codex** has the **most Windows-specific engagement**—its top 3 issues are all Windows-related (stutter, sandbox overhead, WMI storms).
- **Pi** has a **quiet but engaged extension developer community**, with 10 closed PRs today and strong interest in extension API features.

---

## 6. Trend Signals

### Industry Trends from Community Feedback

1. **Agent Autonomy vs. Control Tension**: The strongest signal across all tools. Users want agents to autonomously discover skills, delegate sub-agents, and run multi-step workflows—but they also demand strict guardrails (permission contracts, constitution enforcement, non-destructive defaults). **Gemini CLI** (#21968 "doesn't use skills enough") and **DeepSeek TUI** (#4032 "not following constitution") are on opposite sides of this tension.

2. **Windows as the Second-Class Platform**: Every tool with Windows support (Claude Code, OpenAI Codex, Gemini CLI, Copilot CLI, Kimi Code, Qwen Code, DeepSeek TUI) has unresolved Windows-specific bugs. Terminal rendering corruption, process leaks, input lag, and sandbox overhead are universal. **OpenAI Codex** (#33776 WMI storms) is the most extreme example. This suggests Windows testing coverage is inadequate across the industry.

3. **OAuth/MCP Token Lifecycle Is Broken**: **Claude Code** (#65036, 19👍) and **Qwen Code** (#7147) both report MCP integration failures due to token refresh issues. This is a **platform-level gap**—not a tool-specific bug—that undermines the entire MCP ecosystem's reliability.

4. **Context Compaction Is Inconsistent**: Multiple tools (Claude Code, Kimi Code, Copilot CLI, Pi, Qwen Code) report compaction bugs that either waste context, resurrect deleted tasks, or hit API limits. The community is demanding **predictable, configurable, and observable compaction** as a core reliability feature.

5. **Headless/Remote Infrastructure Demand**: **OpenAI Codex** (#23200, 41👍) and **Gemini CLI** (#34330) show strong demand for always-on Linux servers as the agent runtime, decoupling from desktops. This signals a shift from IDE companion to **infrastructure component**.

6. **Cost Transparency Is a Growing Concern**: **Pi** (#6725, #6509, #6881) and **Claude Code** (#47574, closed) show demand for accurate cost reporting per model, per token, and per extension. As developers build agentic pipelines, cost monitoring becomes a prerequisite for production deployment.

### Reference Value for Developers

- **If you need production-grade sandboxing**: Claude Code's new `sandbox.filesystem.disabled` setting offers the most granular control.
- **If you build Windows enterprise workflows**: OpenAI Codex has the most Windows-specific fixes in flight, but expect ongoing sandbox overhead issues.
- **If you want the most extensible hook system**: OpenAI Codex (29+ lifecycle hooks) is the benchmark, though Claude Code is catching up.
- **If you run multi-agent fleets**: DeepSeek TUI's permission contract model (Ask/Auto-Review/Full Access) is the most thoughtfully designed, though still pre-v1.0. Qwen Code's autofix infrastructure (PR fleet management) is production-ready.
- **If you need remote/headless operation**: No tool handles this well yet. OpenAI Codex (#23200) and Gemini CLI are the most active on this front.
- **If you're on Windows and want stability today**: Claude Code has the fewest Windows-specific bug reports, though the rendering corruption issue (#79025) is a concern.

---

*Report generated from community digest data for 2026-07-21. Issue counts reflect "hot issues" as identified in each tool's digest summary, not total open issues.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data snapshot:** 2026-07-21 | **Source:** github.com/anthropics/skills

---

## 1. Top Skills Ranking

### 1. fix(skill-creator): run_eval.py always reports 0% recall (#1298)
- **Author:** MartinCajiao | **Status:** Open
- **Functionality:** Patches the core `run_eval.py` evaluation pipeline—installs the eval artifact as a real skill, fixes Windows stream reading, trigger detection logic, and parallel worker handling. The description-optimization loop was optimizing against noise due to a 0% recall bug.
- **Discussion highlights:** References issue #556 (12 comments, 7 👍) with 10+ independent reproductions confirming the bug. The root cause is that `claude -p` never triggers skills/commands under test conditions, making the entire evaluation pipeline non-functional.
- **Link:** https://github.com/anthropics/skills/pull/1298

### 2. Add document-typography skill (#514)
- **Author:** PGTBoos | **Status:** Open
- **Functionality:** Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Addresses common typographic issues that appear in every Claude-generated document.
- **Discussion highlights:** The community recognizes this as a universal quality-of-life improvement—typography issues affect all users, not niche workflows.
- **Link:** https://github.com/anthropics/skills/pull/514

### 3. fix(pdf): correct case-sensitive file references (#538)
- **Author:** Lubrsy706 | **Status:** Open
- **Functionality:** Fixes 8 case-sensitivity mismatches in `skills/pdf/SKILL.md` where `REFERENCE.md` and `FORMS.md` were referenced in uppercase but the actual files are lowercase. Breaks on case-sensitive filesystems (Linux, macOS).
- **Discussion highlights:** Sample-and-fix approach to systematic file reference issues in the repository.
- **Link:** https://github.com/anthropics/skills/pull/538

### 4. Add ODT skill (#486)
- **Author:** GitHubNewbie0 | **Status:** Open
- **Functionality:** OpenDocument Format creation, template filling, and ODT-to-HTML conversion. Covers `.odt`, `.ods`, `.odf`, LibreOffice document workflows, and ISO-standard format support.
- **Discussion highlights:** Addresses demand for open-source document format support beyond proprietary formats like DOCX and PDF.
- **Link:** https://github.com/anthropics/skills/pull/486

### 5. Improve frontend-design skill clarity and actionability (#210)
- **Author:** justinwetch | **Status:** Open
- **Functionality:** Revises the frontend-design skill to ensure every instruction is actionable within a single conversation. Clarifies guidance to steer behavior without being overly prescriptive.
- **Discussion highlights:** Focuses on skill design philosophy—making skills executable rather than explanatory. References the tension between teaching Claude vs. instructing Claude (see issue #202).
- **Link:** https://github.com/anthropics/skills/pull/210

### 6. Add self-audit skill (#1367)
- **Author:** YuhaoLin2005 | **Status:** Open
- **Functionality:** Mechanical file verification + four-dimension reasoning audit before delivery. Verifies claimed output files exist, then audits reasoning quality in damage-severity priority order.
- **Discussion highlights:** Universal skill applicable across any project, tech stack, or model. Builds on earlier discussions about AI output quality gates (#1385).
- **Link:** https://github.com/anthropics/skills/pull/1367

### 7. Add testing-patterns skill (#723)
- **Author:** 4444J99 | **Status:** Open
- **Functionality:** Covers the full testing stack: Testing Trophy philosophy, AAA pattern, React Testing Library, Playwright E2E, property-based testing with FastCheck, and Lighthouse performance testing.
- **Discussion highlights:** Comprehensive testing coverage that bridges unit testing, component testing, and performance auditing—a full testing methodology packaged as a skill.
- **Link:** https://github.com/anthropics/skills/pull/723

### 8. Add color-expert skill (#1302)
- **Author:** meodai | **Status:** Open
- **Functionality:** Self-contained color expertise covering naming systems (ISCC-NBS, Munsell, XKCD, RAL, Ridgway), color spaces (OKLCH/OKLAB/CAM16 usage tables), and accessibility guidelines.
- **Discussion highlights:** Niche but deep expertise skill; demonstrates the long-tail demand for domain-specific knowledge packaged into Claude Skills.
- **Link:** https://github.com/anthropics/skills/pull/1302

---

## 2. Community Demand Trends

**Most-anticipated new Skill directions (from Issues):**

| Demand Category | Issue | Comments | 👍 |
|---|---|---|---|
| **Security & trust boundaries** | #492 — Community skills under `anthropic/` namespace enable trust abuse | 43 | 2 |
| **Org-wide skill sharing** | #228 — Enterprise skill distribution mechanism | 14 | 7 |
| **Skill-creator tooling reliability** | #556 — `run_eval.py` 0% trigger rate | 12 | 7 |
| **Windows compatibility** | #1061 — subprocess/encoding bugs in skill-creator scripts | 3 | 2 |
| **Agent governance / safety** | #412 — Safety patterns for AI agent systems | 6 | 0 |
| **Compact agent memory** | #1329 — Symbolic notation for agent state management | 9 | 0 |
| **Reasoning quality gates** | #1385 — Pre-task calibration → adversarial review → delivery verification | 3 | 0 |

**Key insight:** The community is increasingly focused on **infrastructure and reliability** (skill-creator tooling, Windows support, security boundaries) rather than pure feature skills. Trust boundary abuse (#492) is the single most-discussed issue, reflecting growing concern about skill provenance and permission models.

---

## 3. High-Potential Pending Skills

These active PRs have significant community discussion and are likely to land soon:

| PR | Skill | Comments | Status |
|---|---|---|---|
| #1298 | **skill-creator eval fix** (0% recall bug) | Top-ranked | Open |
| #514 | **document-typography** (orphan/widow prevention) | High | Open |
| #1367 | **self-audit** (mechanical verification + reasoning quality) | Latest | Open |
| #1323 | **skill-creator trigger detection fix** (misses real skill names) | Active | Open |
| #1050 | **Windows subprocess encoding fix** (1-line changes) | Active | Open |
| #1099 | **Windows pipe crash fix** (`WinError 10038`) | Active | Open |
| #723 | **testing-patterns** (full testing stack) | Medium | Open |
| #1302 | **color-expert** (domain-specific expertise) | New | Open |

**Observation:** Multiple PRs (#1298, #1323, #1050, #1099) target the **same skill-creator evaluation pipeline**, indicating a concentrated effort to stabilize the core tooling before feature skills can be reliably evaluated.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand** is for **reliable skill evaluation infrastructure**—fixing the `run_eval.py` pipeline's 0% recall bug, Windows compatibility, and trigger detection—before the ecosystem can scale feature skills with confidence in their optimization loops.

---

# Claude Code Community Digest — 2026-07-21

## Today's Highlights

Anthropic shipped **v2.1.216** with a critical fix for session slowdowns caused by quadratic message normalization costs in long-running sessions, plus a new `sandbox.filesystem.disabled` setting for finer-grained sandbox control. Meanwhile, the community is raising alarms about **MCP OAuth token refresh failures** (#65036, 19 👍) and an **Agent View rendering corruption bug on Windows** (#79025) that persists despite workarounds, signaling ongoing stability concerns on both the integration and UI fronts.

## Releases

**v2.1.216** was released in the last 24 hours.

**Key changes:**
- **New setting:** `sandbox.filesystem.disabled` — allows skipping filesystem isolation while retaining network egress control, giving teams more flexibility in sandbox configuration.
- **Performance fix:** Resolved a quadratic-cost slowdown in long sessions where message normalization became progressively more expensive with each turn, causing multi-second stalls and slow resume times. This is a significant quality-of-life fix for users running extended coding sessions.

[View release](https://github.com/anthropics/claude-code/releases/tag/v2.1.216)

## Hot Issues (Top 10)

1. **#65036 — MCP OAuth: Auto-refresh token failure** (OPEN, 5 comments, 19 👍)  
   *Claude fails to auto-refresh access tokens via refresh tokens, forcing users to see "Connection expired" daily.*  
   **Why it matters:** This breaks all MCP server integrations that rely on OAuth, a core extension mechanism for Claude Code. High community demand for a fix.  
   [Issue](https://github.com/anthropics/claude-code/issues/65036)

2. **#42700 — TTS readback + voice mode for Remote Control** (OPEN, 9 comments, 19 👍)  
   *Request for text-to-speech readback of responses and voice input support in Remote Control sessions.*  
   **Why it matters:** Accessibility and hands-free usage remain a top community priority, especially for mobile/remote workflows.  
   [Issue](https://github.com/anthropics/claude-code/issues/42700)

3. **#72504 — Cowork Tab Missing on macOS M4 (regression)** (OPEN, 9 comments, 1 👍)  
   *Cowork tab fails to initialize on M4 Macs in v1.15962.1, with runtime not starting.*  
   **Why it matters:** A regression affecting the flagship Cowork feature on Apple Silicon, blocking team collaboration features.  
   [Issue](https://github.com/anthropics/claude-code/issues/72504)

4. **#79023 — Agent can't invoke `/code-review` from custom skills** (OPEN, 2 comments, 6 👍)  
   *Since v2.1.215, the agent fails to call the `/code-review` skill when executed as part of a custom skill workflow, breaking CI/CD automation pipelines.*  
   **Why it matters:** Skills are a core extensibility mechanism; this regression breaks entire automated PR workflows.  
   [Issue](https://github.com/anthropics/claude-code/issues/79023)

5. **#51213 — Titlebar buttons overlap on RTL languages (Windows)** (CLOSED, stale)  
   *Hebrew/Arabic Windows users see titlebar buttons overlapping Claude's top menu.*  
   **Why it matters:** Internationalization issue that blocks usability for RTL language developers.  
   [Issue](https://github.com/anthropics/claude-code/issues/51213)

6. **#47574 — Expose API credit balance to statusLine** (CLOSED, 6 comments, 12 👍)  
   *Request to surface remaining API credit balance in statusLine scripts, since rate-limit percentages alone are insufficient for budget management.*  
   **Why it matters:** Pay-as-you-go users have no way to programmatically monitor costs — a significant gap for teams managing API spend.  
   [Issue](https://github.com/anthropics/claude-code/issues/47574)

7. **#79025 — Terminal rendering corruption on Windows** (OPEN, 1 comment)  
   *Agent View transitions and long sessions cause stale/duplicated frames in Windows Terminal, even with `CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT=1` set.*  
   **Why it matters:** Windows users face degraded UX that persists despite documented workarounds, suggesting a deeper rendering pipeline issue.  
   [Issue](https://github.com/anthropics/claude-code/issues/79025)

8. **#79532 — Browser extension "not connected" after reinstall** (OPEN, 2 comments)  
   *Claude-in-Chrome extension consistently shows as disconnected despite verified installation and Chrome restart.*  
   **Why it matters:** Browser integration is broken for affected users, blocking web context access via MCP.  
   [Issue](https://github.com/anthropics/claude-code/issues/79532)

9. **#75271 — Markdown `~` paths resolve relative to project root** (OPEN, 1 comment, 1 👍)  
   *`~` in markdown file links is treated as relative path instead of home directory expansion.*  
   **Why it matters:** Breaks file navigation in Claude-generated documentation for home-directory paths.  
   [Issue](https://github.com/anthropics/claude-code/issues/75271)

10. **#79561 — Increase concurrent workflow agent limit for hosted sandboxes** (OPEN, 1 comment)  
    *Hosted sandboxes cap at 2 concurrent agents (4 cores - 2), limiting parallel workflow execution.*  
    **Why it matters:** Productivity bottleneck for users running complex multi-agent workflows on mobile/cloud instances.  
    [Issue](https://github.com/anthropics/claude-code/issues/79561)

## Key PR Progress

1. **#74722 — Conventional Branch naming in `/commit-push-pr`** (OPEN)  
   *Adds optional `conventional` argument for branch naming per the Conventional Branch 1.0.0 spec. Type (`feature`, `bugfix`, `hotfix`, etc.) is inferred from diff content.*  
   **Impact:** Streamlines automated PR workflows for teams following conventional commit standards.  
   [PR](https://github.com/anthropics/claude-code/pull/74722)

2. **#79387 — Error message when `edit-issue-labels.sh` called without args** (OPEN)  
   *Adds clear stderr error message when label script is invoked without `--add-label` or `--remove-label` arguments (previously exited silently with code 1).*  
   **Impact:** Better developer experience for script maintainers and automation pipelines.  
   [PR](https://github.com/anthropics/claude-code/pull/79387)

3. **#79385 — Honor any user's thumbs-down for duplicate auto-close** (OPEN)  
   *Fixes auto-close-duplicates bot to respect thumbs-down reactions from any commenter, not just the issue author, matching the documented behavior.*  
   **Impact:** Fairer community moderation; prevents premature closure when reviewers object.  
   [PR](https://github.com/anthropics/claude-code/pull/79385)

4. **#78532 — GCP Gateway: ALB + PG16 Cloud SQL fix** (OPEN)  
   *Fixes Terraform example failure on PG16+ instances (ENTERPRISE_PLUS edition rejects shared-core tiers) and adds optional internal ALB support.*  
   **Impact:** Production infrastructure templates now work with default settings for new GCP projects.  
   [PR](https://github.com/anthropics/claude-code/pull/78532)

5. **#66650 — Use full author name in pr-review-toolkit plugin** (CLOSED)  
   *Minor consistency fix: author name corrected from `"Daisy"` to `"Daisy Hollman"` to match other plugins.*  
   **Impact:** Clean plugin metadata across the ecosystem.  
   [PR](https://github.com/anthropics/claude-code/pull/66650)

## Feature Request Trends

Three dominant themes emerge from recent issues:

1. **Voice and Accessibility:** Multiple requests for TTS readback (#42700), voice chat in desktop sessions (#67316), and voice input for Remote Control. The community increasingly expects multimodal interaction beyond text.

2. **OAuth and MCP Ecosystem Reliability:** The top-voted open issue (#65036) highlights a systemic problem — MCP integrations break daily due to missing token refresh logic. This is the single biggest friction point for Claude Code as a platform.

3. **Agent/Skill Orchestration:** Users are building complex multi-step workflows with skills and sub-agents, and hitting limits: concurrent agent caps in hosted sandboxes (#79561), skill-to-skill invocation breaks (#79023), and missing Cowork parity for project-scoped skills (#60205). The community is pushing Claude Code beyond simple chat toward autonomous CI/CD pipelines.

## Developer Pain Points

- **Long-session performance degradation:** The quadratic message normalization cost (fixed in v2.1.216) had been causing multi-second stalls in sessions with many turns — a critical issue for developers running daily extended sessions.

- **Windows rendering corruption:** Persistent TUI rendering issues on Windows (#79025) with failed workarounds suggest the cross-platform terminal abstraction layer has gaps.

- **False-positive safety classifiers on legitimate security work:** Two issues (#66697, #66829) report Fable 5's safety classifier flagging authorized security audits and debugging, frustrating security-conscious developers.

- **MCP OAuth token lifecycle:** The most-voted open bug (#65036) has no fix yet, meaning every MCP server using OAuth requires manual re-authentication daily — a developer experience blocker.

- **`~` path resolution in markdown:** A subtle but annoying UX bug (#75271) where `~` resolves to project root instead of home directory, breaking file links in documentation.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-21

## Today's Highlights
A critical Windows resource-exhaustion bug—where Codex spawns hundreds of `taskkill.exe`/`conhost.exe` processes—dominates today's issue tracker, with three separate reports filed in the last 72 hours. A new `rust-v0.145.0-alpha.25` release shipped, while the engineering team merged 15+ PRs addressing long-standing hook timing, sandbox efficiency, and Windows ACL issues. The community continues to push hard for Claude Code-level hook parity and a headless mobile Linux workflow.

## Releases
- **[rust-v0.145.0-alpha.25](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.25): `0.145.0-alpha.25`** — Release notes are minimal; see PRs below for substantive changes landing in this track.

## Hot Issues
1. **[#33776 — Windows: ChatGPT.exe spawns hundreds of taskkill.exe/conhost.exe, causing WMI storms](https://github.com/openai/codex/issues/33776)** (14 comments, 👍11) — A repeatable resource meltdown on Windows 11 x64 build 26200. During an affected session, 287 taskkill + 250 conhost processes were counted. The root cause appears to be an unbounded process-cleanup loop in the local sandbox manager, not a one-off leak. Highly critical for Windows Pro/Business users.

2. **[#20214 — Codex App freezes/stutters on Windows 11 Pro despite sufficient resources](https://github.com/openai/codex/issues/20214)** (59 comments, 👍68) — This 3-month-old megathread resurfaced with new reports. Users with 32 GB+ RAM and Ryzen 5/7 CPUs describe 5–15 second UI hangs after sending prompts. Mitigations (Disable Defender scan, GPU cache wipe) only partially work. The sheer number of thumbs-ups suggests a systemic Windows UI thread issue.

3. **[#20741 — Desktop project chat histories disappeared after update](https://github.com/openai/codex/issues/20741)** (57 comments, 👍16) — ChatGPT Pro users on macOS Tahoe (M5 Max) report total conversation loss after updating to build 26.429.30905. The thread count is unusual for a data-loss bug, suggesting a migration/backfill misstep in the local SQLite store.

4. **[#21753 — Full Claude Code Hook Parity (29+)](https://github.com/openai/codex/issues/21753)** (27 comments, 👍20) — An umbrella tracker demanding every lifecycle hook Anthropic's Claude Code supports. The community sees hooks as Codex's automation "surface area," and parity is considered a prerequisite for infrastructure-as-code adoption.

5. **[#16127 — `yeet` skill is over-opinionated](https://github.com/openai/codex/issues/16127)** (11 comments, 👍26) — The `yeet` skill forcibly adds `codex/` prefixes to branch names and `[codex]` tags to PR titles, and also fires git commands on repos managed with `jj` (Jujutsu). Users want opt-in only. Hints at deeper tension around implicit default behaviors in the skills system.

6. **[#18308 — Add Agents to Plugins System](https://github.com/openai/codex/issues/18308)** (8 comments, 👍58) — The highest-thumbs-up open feature request. Agents were omitted from the initial plugins release (which supports skills, MCP servers, and apps). Users want agent-as-a-plugin for custom sub-agent logic.

7. **[#32314 — Windows elevated sandbox adds ~20s per command; unelevated breaks apply_patch](https://github.com/openai/codex/issues/32314)** (14 comments, 👍4) — A productivity killer: elevated sandbox mode is 20x slower, but unelevated mode chokes on `apply_patch` due to split filesystem roots. Puts Windows power-users in a no-win situation.

8. **[#23200 — Support headless remote Linux hosts for Codex mobile](https://github.com/openai/codex/issues/23200)** (12 comments, 👍41) — Second-highest demand feature. Users want an always-on Linux server (SSH-accessible) to act as Codex backend, decoupling from personal desktops. Implies a demand for Codex as remote infrastructure, not just a local IDE companion.

9. **[#32031 — [Critical UX regression] multi-agent v2 spawn_agent hides model overrides](https://github.com/openai/codex/issues/32031)** (7 comments, 👍13) — Multi-agent v2 (default for `gpt-5.6-sol`/`terra`) makes sub-agent model selection undiscoverable. The natural override syntax fails silently. A regression that affects anyone building agentic pipelines.

10. **[#28736 — SessionStart "compact" hooks fire on later turns, polluting context](https://github.com/openai/codex/issues/28736)** (6 comments, 👍19) — Closed today, but historically significant: compaction-triggered hooks would deliver stale context on subsequent turns. The fix landed in PR #34396. High community interest in hook reliability.

## Key PR Progress
1. **[#34423 — Support Windows sandboxing in the exec server](https://github.com/openai/codex/pull/34423)** (merged) — Adds a shared native process launcher that selects the Windows sandbox session backend or falls back to PTY/pipe launch. Directly relevant to fixing the WMI-storm issues above.

2. **[#34396 — Run compact session-start hooks before turn continuation](https://github.com/openai/codex/pull/34396)** (merged) — Fixes the root cause of Issue #28736: mid-turn auto-compaction now drains pending `SessionStart` hooks before continuing sampling. A critical behavioral correctness fix.

3. **[#34392 — Ignore inherited ACEs when refreshing Windows write roots](https://github.com/openai/codex/pull/34392)** (merged) — Stops unnecessary ACL refresh loops on Windows when an inherited `FILE_DELETE_CHILD` grant makes a write root look stale. Should reduce the frequency of sandbox setup churn.

4. **[#34390 — Use copy-on-write storage for history snapshots](https://github.com/openai/codex/pull/34390)** (merged) — History items stored in `Arc<Vec<ResponseItem>>` to avoid deep copies on read-only snapshots. Improves UI responsiveness during context-heavy sessions.

5. **[#34398 — Support per-environment permission profiles](https://github.com/openai/codex/pull/34398)** (open) — Each environment can optionally override the thread `PermissionProfile`, affecting shell, exec, apply-patch, filesystem, and network decisions. This unblocks differentiated sandbox security per target.

6. **[#34393 — Add configurable hook context spill limits](https://github.com/openai/codex/pull/34393)** (merged) — Adds `additionalContextLimit` per hook (default 2,500 tokens). Prevents a single hook from saturating the context window, a pain point for users with many hooks.

7. **[#34400 — Propagate approval rejection reasons](https://github.com/openai/codex/pull/34400)** (merged) — `ReviewDecision::Denied` now carries a rejection string. Tool results can return why an action was blocked, improving user-facing error clarity.

8. **[#34409 — Limit the Linux /proc preflight filesystem view](https://github.com/openai/codex/pull/34409)** (merged) — Bubblewrap `/proc` mount probe now runs with minimal read-only policy and preserves the requested network namespace. Hardens the sandbox preflight stage.

9. **[#30235 — Kill timed-out Git status process groups](https://github.com/openai/codex/pull/30235)** (merged) — On Unix, `git status --porcelain` now runs in its own process group. If it times out, the entire process group (including any wrapper script) is killed. Fixes orphaned Git scans that blocked directory watchers.

10. **[#34413 — Remove CSV-backed agent jobs](https://github.com/openai/codex/pull/34413)** (merged) — Deprecates the `spawn_agents_on_csv` and `report_agent_job_result` tools and drops legacy `agent_jobs`/`agent_job_items` tables. A cleanup PR, indicating the team is rationalizing the agent job model.

## Feature Request Trends
Three dominant themes emerge from open issues:
- **Hooks & Automation Surface (Issues #21753, #28736, #18308)**: The community wants Codex hooks to be a first-class automation API. Claude Code parity (29+ event types) is the benchmark. The related request for **agent-as-plugin** (#18308) extends this to runtime extensibility.
- **Headless / Remote Infrastructure (Issues #23200, #34330)**: A distinct shift toward using Codex as a server-side agent that runs on always-on Linux boxes, not just attached to a desktop. Users want SSH-based remote sessions, detached agent processing, and mobile control plane.
- **Windows Sandbox & Performance (Issues #33776, #32314, #20214)**: The Windows experience remains the biggest pain point. Users demand production-grade sandbox isolation on Windows that doesn't crater performance. The WMI storm issue (#33776) and elevated sandbox latency (#32314) are blocking adoption of local tool execution on Windows.

## Developer Pain Points
1. **Windows sandbox overhead**: Elevated sandboxes add 20+ seconds per command, while unelevated sandboxes break `apply_patch`. The cascade of runaway `taskkill.exe` processes (Issues #33776, #34260, #34001) suggests the process lifecycle manager is fundamentally broken on Windows NT 10.0.26200+.
2. **Chat history fragility**: Two separate data-loss bugs (project histories disappearing, thread vanishing after paste-text attachments) erode user trust in the local persistence layer.
3. **Multi-agent usability regression**: Multi-agent v2 makes sub-agent model selection invisible; the natural API call fails silently (#32031). For teams building agent chains, this is a blocker.
4. **Brittle hook timing**: SessionStart hooks and compaction hooks fire at the wrong times or not at all, making deterministic automation impossible without careful workarounds. PR #34396 addresses one case, but the underlying event ordering is fragile.
5. **No offline/headless workflow**: The mobile app requires a desktop to stay online; always-on Linux servers cannot serve as the Codex runtime. This limits Codex to laptop-tethered workflows, frustrating users on infrastructures from SSH dev servers to CI runners.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-21

## Today's Highlights
The team continues to push stability and infrastructure improvements, with a new nightly build v0.52.0 nightly rolling out. Major focus areas remain agent reliability (subagent termination bugs, hang issues, and permission bypasses) and the rollout of a new automated PR generation pipeline via Cloud Run. A significant caretaker automation suite is also being introduced to handle issue triage and auto-closing of feature requests without human intervention.

## Releases
- **[v0.52.0-nightly.20260720.gacae7124b](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260720.gacae7124b)** — Nightly release with full changelog available [here](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260719.gacae7124b...v0.52.0-nightly.20260720.gacae7124b). No detailed release notes provided; likely includes the caretaker and PR generator infrastructure changes merged this week.

## Hot Issues (Top 10 by Community Relevance)

1. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1, 12 comments, 2 👍)  
   Critical bug: the `codebase_investigator` subagent falsely reports goal success after hitting turn limits, masking timeouts. Community is frustrated because it breaks trust in agent status output.

2. **[#21409 — Generalist agent hangs forever](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1, 7 comments, 8 👍)  
   High-priority: the generalist agent hangs indefinitely on simple tasks like folder creation. The only workaround is manually disabling subagent delegation. This is the highest-emotion issue by reaction count.

3. **[#19873 — Leverage model's bash affinity via Zero-Dependency OS Sandboxing](https://github.com/google-gemini/gemini-cli/issues/19873)** (P2, 8 comments, 1 👍)  
   Epic proposal: make full use of Gemini 3's native bash capabilities by sandboxing shell execution. Community interest is moderate but the engineering effort is large; could reshape how the agent interacts with the OS.

4. **[#25166 — Shell command execution gets stuck with "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)** (P1, 4 comments, 3 👍)  
   Core bug: simple commands like `ls` or `git status` leave the CLI stuck in "awaiting input" state after completion. Affects every user relying on shell execution.

5. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** (P2, 6 comments)  
   User frustration: custom skills and sub-agents are ignored unless explicitly requested by the user. The model underutilizes its own tooling ecosystem.

6. **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (P2, 5 comments)  
   Memory system bug: low-signal sessions remain unprocessed and are repeatedly surfaced, creating a backlog that wastes model context and compute.

7. **[#22672 — Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)** (P2, 3 comments, 1 👍)  
   Safety concern: the model occasionally uses `git reset` or `--force` when safer alternatives exist. Community wants guardrails for destructive operations.

8. **[#21983 — Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** (P1, 4 comments, 1 👍)  
   Platform-specific issue: the browser agent fails on Wayland display servers, reporting `Termination Reason: GOAL` without actual results. Hits Linux users heavily.

9. **[#22093 — Subagents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)** (P2, 3 comments)  
   Security concern: subagents spawn despite configs being set to "disabled." User expected only MCP functionality and got unrequested agent delegation.

10. **[#24246 — 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** (P2, 3 comments)  
    Scaling bug: when many custom tools or MCP tools are enabled, the API rejects requests. Users want smarter tool scoping to avoid hitting limits.

## Key PR Progress

1. **[#28469 — Rotate session ID on model fallback](https://github.com/google-gemini/gemini-cli/pull/28469)**  
   Fixes a blocking API error when retries are sent under the same session ID after fallback to `gemini-2.5-flash`. Critical for reliability.

2. **[#28410 — Shorten MCP tools/list discovery timeout](https://github.com/google-gemini/gemini-cli/pull/28410)** (P1)  
   The CLI could freeze for 10 minutes at startup if an MCP server was unresponsive. Now fails fast with a short timeout. Direct community pain point.

3. **[#28405 — Prevent scroll position jump during content updates](https://github.com/google-gemini/gemini-cli/pull/28405)** (P1/P2)  
   Fixes a long-standing UX bug where scrolling up to review output resets to bottom when new content arrives. Directly addresses a top-voted issue.

4. **[#28435 / #28433 / #28431 / #28434 — PR Generator Pipeline (4 PRs)](https://github.com/google-gemini/gemini-cli/pull/28435)**  
   Major new infrastructure: introduces a full Cloud Run/Workflows-based pipeline for automated code generation from issues. Includes concurrency locking, AI agent evaluation loops, and ESC linting.

5. **[#28411 — Auto-close feature requests with explanatory comment](https://github.com/google-gemini/gemini-cli/pull/28411)**  
   Caretaker automation: feature requests will now be auto-closed with a message explaining focus on core stability. Signals a shift in maintainer priorities.

6. **[#28468 — Triage Cloud Run job workflow](https://github.com/google-gemini/gemini-cli/pull/28468)**  
   Adds Google Cloud Workflow definition for automated issue triage via Pub/Sub events. Part of the caretaker infrastructure series.

7. **[#28319 — Enforce path trust check before environment loading](https://github.com/google-gemini/gemini-cli/pull/28319)**  
   Security refactor for A2A server: ensures workspace path trust is verified before loading environment variables. Isolates task environments.

8. **[#28447 — Windows PowerShell troubleshooting for gemini command](https://github.com/google-gemini/gemini-cli/pull/28447)**  
   Docs improvement: adds Windows-specific guidance for npm install failures. Addresses a gap for the Windows developer community.

9. **[#28256 — Add /nix/store to trusted system paths](https://github.com/google-gemini/gemini-cli/pull/28256)** (P2)  
   Fixes NixOS compatibility: binaries resolved under `/nix/store` were incorrectly rejected as untrusted. Important for the growing Nix community.

10. **[#28364 — Deep-merge user model config over defaults](https://github.com/google-gemini/gemini-cli/pull/28364)** (P2)  
    Fixes shallow merge bug where user model configuration overrides were not properly applied to deeply nested fields. Impacts anyone customizing model parameters.

## Feature Request Trends

Based on open issues, the community is consistently requesting:

- **Agent self-awareness & tool utilization**: Users want the agent to autonomously discover and use custom skills, sub-agents, and its own CLI flags without explicit instructions.
- **Memory system robustness**: Multiple issues (Auto Memory retries, redaction order, patch validation) show demand for a more reliable, secure memory extraction pipeline that doesn't waste context or leak secrets.
- **AST-aware codebase navigation**: Requests for AST-level file reads, search, and mapping to reduce token waste and improve accuracy when the agent explores codebases.
- **Browser agent resilience**: Persistent complaints about Wayland failures, lock recovery, and configuration overrides being ignored for the browser subagent.
- **Automated evaluation infrastructure**: Strong interest in component-level behavioral evals and subagent trajectory sharing for debugging and performance analysis.

## Developer Pain Points

The most frequent frustrations visible in this data:

1. **Silent failures & misleading statuses**: Subagents report "GOAL success" when actually hitting turn limits (#22323) or crashing (#21983). Developers can't trust termination reasons.
2. **Uncontrollable agent behavior**: Agents spawn without permission (#22093), ignore configuration overrides (#22267), and don't use custom skills (#21968). Users feel they lack control over what runs.
3. **Startup hangs & timeouts**: MCP discovery freezing for 10 minutes (#28410) and shell commands hanging after completion (#25166) severely impact developer workflow.
4. **Platform friction**: Wayland (Linux) and Nix package manager issues show the CLI isn't fully polished across Linux environments. Windows docs gaps also persist.
5. **Scaling limits**: Hitting 400 errors with >128 tools (#24246) and failed stateful API retries (#28469) indicate the CLI doesn't gracefully handle large tool sets or model fallbacks.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-21

## Today's Highlights
A new patch release (v1.0.72) shipped yesterday fixing an `agentStop` hook infinite-loop bug and adding opt-in Git/GitHub authentication inside the O runtime. The issue tracker saw a surge of 18 new or updated items, with several critical regressions reported — including a plan-mode regression that blocks shell commands, unrecoverable timeouts from `WAITFOR DELAY` text, and a `--add-dir` flag that breaks Claude sub-agent dispatch. Seven feature requests and several TUI UX bugs also landed, indicating strong community engagement around the agent-sandboxing and keyboard interaction surfaces.

## Releases

### [v1.0.72](https://github.com/github/copilot-cli/releases/tag/v1.0.72) — 2026-07-20
- **`agentStop` hook fix**: An `agentStop` hook that always blocks no longer loops indefinitely — the CLI now ends the turn after 8 consecutive blocks. Hooks receive a `stop_hook_active` flag to detect forced continuation and self-limit.
- **Authentication**: Added opt-in git and gh authentication inside the O runtime.

## Hot Issues (Top 10)

1. **[#1481](https://github.com/github/copilot-cli/issues/1481) — `SHIFT + ENTER` should spawn a line break, but executes the prompt (CLOSED)**
   - **Why it matters**: This long-standing (Feb 2026) UX paper-cut broke a universal chat convention (Shift+Enter=line break, Enter=send). 17 👍 and 27 comments show high user frustration. **Status**: Now closed — likely fixed in a recent release.

2. **[#4194](https://github.com/github/copilot-cli/issues/4194) — Severe levels of hard-coding: frustrating (OPEN, triage)**
   - **Why it matters**: A vague but strongly-worded report. Lack of repro steps suggests either a configuration issue or a legitimate concern about inflexible internal defaults.

3. **[#3747](https://github.com/github/copilot-cli/issues/3747) — Unrecoverable timeouts when `WAITFOR DELAY` occurs anywhere — poison pill (OPEN)**
   - **Why it matters**: A single SQL keyword (`WAITFOR DELAY`) can permanently crash any Copilot session, regardless of model. 1 👍 indicates awareness; this is a reliability zero-day for DB developers.

4. **[#4188](https://github.com/github/copilot-cli/issues/4188) — Regression on plan-mode: shell commands blocked (OPEN)**
   - **Why it matters**: Plan mode previously used `gh` to enrich plans; now it’s blocked, breaking workflows like reading/creating issues during planning. 1 👍 — likely affecting many enterprise users silently.

5. **[#2812](https://github.com/github/copilot-cli/issues/2812) — Native binary crashes with SIGSEGV on macOS arm64 (CLOSED)**
   - **Why it matters**: A critical release 1.0.31 crash affecting Apple Silicon users — CLI silently exits with code 1. **Status**: Closed, likely patched.

6. **[#4185](https://github.com/github/copilot-cli/issues/4185) — `--add-dir` causes Claude sub-agent dispatch to fail with 400 (OPEN)**
   - **Why it matters**: Using `--add-dir` (a common project-context flag) triggers a tool cache limit (5 blocks vs max 4) on Anthropic models, making the feature unusable for Claude users.

7. **[#4183](https://github.com/github/copilot-cli/issues/4183) — Auto-compaction does not prevent CAPI 5 MB failure from accumulated tool history (OPEN)**
   - **Why it matters**: Long sessions can hit the API's 5 MB body limit even when under token capacity. Auto-compaction doesn't cover this. 2 👍 — a silent blocker for heavy users.

8. **[#4195](https://github.com/github/copilot-cli/issues/4195) — Code-review task agents can mutate the shared parent worktree (OPEN, triage)**
   - **Why it matters**: `code-review` agents are described as read-only but can execute shell commands and modify the worktree. Security/reliability concern for multi-reviewer panels.

9. **[#4180](https://github.com/github/copilot-cli/issues/4180) — Interactive TUI ignores all keyboard input written to its PTY (OPEN)**
   - **Why it matters**: Orchestration tools (tmux send-keys, expect, pty.fork) cannot automate the TUI — only Ctrl+C works. Breaks CI/CD pipelines and remote automation workflows.

10. **[#4189](https://github.com/github/copilot-cli/issues/4189) — `/context` "MCP Tools" reports un-deferred tool-schema footprint, not actual cost (OPEN)**
    - **Why it matters**: MCP tool deferral is a key performance feature, but the `/context` UI lies about actual context usage, making debugging near impossible for MCP-heavy sessions.

## Key PR Progress
No pull requests were updated in the last 24 hours.

## Feature Request Trends
Distilled from the 18 issues updated in the last 24h:

1. **Model/config switching** (3 issues): Rapid switching between pre-set model configs (#4190), BYOK for background agents (#4192), and model override for desktop agents.
2. **TUI mouse/keyboard improvements** (4 issues): Click-to-edit enqueued messages (#4179), ability to paste images into `/btw` prompts (#4181), new-session creation from `/btw` popups (#4182), PTY keyboard support for automation (#4180).
3. **Sandbox/security ergonomics** (2 issues): Allow sandboxed sessions to write their own `plan.md` without cross-session permissions (#4193), preventing code-review agents from mutating the worktree (#4195).
4. **Session and context management** (2 issues): Auto-compaction improvements for the 5 MB CAPI body limit (#4183), accurate `/context` reporting of deferred tool sizes (#4189).
5. **Clipboard integration** (1 issue): Clipboard access failing in WSL + tmux/screen setups (#4191).

## Developer Pain Points
Recurring frustrations and high-frequency requests:

- **Keyboard interaction fragmentation**: `SHIFT+ENTER` vs `CTRL+ENTER` behavior (#1481), PTY input ignored (#4180), inability to paste images in `/btw` contexts (#4181) — the TUI has multiple keyboard UX blind spots.
- **Agent Sandboxing gaps**: `code-review` agents can mutate worktrees (#4195) and sandboxed sessions can't self-edit `plan.md` (#4193) — security/permission model is incomplete.
- **Reliability regressions**: Plan-mode regression (#4188), `WAITFOR DELAY` poisoning (#3747), and `--add-dir` breaking Claude dispatch (#4185) suggest insufficient integration testing across model providers.
- **Context management failures**: The 5 MB CAPI body limit (#4183) and inaccurate `/context` footprint (#4189) highlight a mismatch between user expectations and API-level constraints.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date: 2026-07-21**

---

## Today's Highlights
No new releases landed in the last 24 hours, but the community remains highly active with five new issues and four pull requests filed by developers. A critical 429 overload bug (#2209) on remote servers has been unresolved for over 72 days, while several Windows migration and input issues surfaced over the weekend. Key PRs are targeting context truncation alignment and stale system prompt handling, both of which address long-standing community pain points.

---

## Releases
No new releases in the last 24 hours. The latest stable version remains **v1.49.0** (referenced in issue #2522).

---

## Hot Issues

1. **#2209: [bug] 云端服务器部署的kimiclaw 无回复 CLI 持续 429 engine_overloaded 超过 48 小时** (OPEN)
   - **Why it matters:** A severe availability issue on remote server deployments causing total service outage for over 2 months. Affects users on Kimi-k2.6 and earlier models, even after upgrading from v1.24.0 to v1.41.0.
   - **Community reaction:** 3 👍, 4 comments. High frustration as no fix has been deployed.
   - 🔗 [Issue #2209](https://github.com/MoonshotAI/kimi-cli/issues/2209)

2. **#2525: Goal mode: no-op continuation turns fire indefinitely while waiting on external conditions** (OPEN)
   - **Why it matters:** In goal mode, the agent continuously re-injects the full goal prompt every few seconds when waiting on external conditions (e.g., long-running training jobs). This burns tokens and context exponentially.
   - **Community reaction:** New issue, no comments yet but represents a major efficiency regression.
   - 🔗 [Issue #2525](https://github.com/MoonshotAI/kimi-cli/issues/2525)

3. **#2523: Context compaction bug — Kimi Code reopens an already completed and deleted task** (OPEN)
   - **Why it matters:** A context compaction bug causes the CLI to reopen tasks that users have explicitly completed and deleted. This is a severe UX regression for workflow reliability.
   - **Community reaction:** New issue, no comments yet. User attached logs (PDF).
   - 🔗 [Issue #2523](https://github.com/MoonshotAI/kimi-cli/issues/2523)

4. **#2522: Windows: old kimi-code sessions not migrated to .kimi after upgrade; kimi migrate command missing** (OPEN)
   - **Why it matters:** Breaking migration path for Windows users upgrading from old `kimi-code` to new `kimi` v1.49.0. Session data in `%USERPROFILE%\.kimi-code` is lost, and the promised `kimi migrate` command does not exist.
   - **Community reaction:** New issue, no comments. Likely affects all Windows upgrades.
   - 🔗 [Issue #2522](https://github.com/MoonshotAI/kimi-cli/issues/2522)

5. **#2521: Windows version of `herdr` — cannot use arrow keys to select options** (OPEN)
   - **Why it matters:** A platform-specific UI regression on Windows (v0.27.0, model `k3`). Arrow key navigation in the `herdr` menu is completely broken.
   - **Community reaction:** New issue, no comments.
   - 🔗 [Issue #2521](https://github.com/MoonshotAI/kimi-cli/issues/2521)

*(Note: Only 5 issues were updated in the last 24h; the above covers all of them.)*

---

## Key PR Progress

1. **#2520: fix(session): align fork/undo context truncation to wire turns** (OPEN)
   - **Description:** Fixes context truncation misalignment during fork/undo operations. Resolves issue #2517 and potentially #1974 and #2049.
   - **Why important:** Core session integrity fix affecting undo and fork workflows.
   - 🔗 [PR #2520](https://github.com/MoonshotAI/kimi-cli/pull/2520)

2. **#2519: fix(app): refresh stale frozen system prompt on session resume** (OPEN)
   - **Description:** Ensures skills added to `~/.kimi/skills/` and `AGENTS.md` edits are picked up when resuming sessions, rather than using the frozen `_system_prompt`.
   - **Why important:** Fixes a major UX bug that made skill management and agent customization ineffective across sessions.
   - 🔗 [PR #2519](https://github.com/MoonshotAI/kimi-cli/pull/2519)

3. **#2524: fix(tools): count StrReplaceFile replacements against the running content** (OPEN)
   - **Description:** Corrects the replacement count metric in `StrReplaceFile` to compute against the actual running content after sequential edits.
   - **Why important:** Fixes an accuracy bug in file editing operations; small but safe fix.
   - 🔗 [PR #2524](https://github.com/MoonshotAI/kimi-cli/pull/2524)

4. **#2515: perf(kosong): buffer stream merges and avoid deep-copying every delta** (OPEN)
   - **Description:** Performance optimization on the streaming merge path in `kosong` — avoids quadratic `str +=` concatenation and deep copies.
   - **Why important:** Addresses latency in long responses. Pure performance win.
   - 🔗 [PR #2515](https://github.com/MoonshotAI/kimi-cli/pull/2515)

*(Note: Only 4 PRs were updated in the last 24h; the above covers all of them.)*

---

## Feature Request Trends

Based on analysis of recent issues, the most requested feature directions include:

- **Session migration tooling:** Windows users urgently need a reliable `kimi migrate` command or automatic migration path from `kimi-code` to `kimi` (see #2522).
- **Goal mode waiting behavior control:** Users want configurable polling intervals or pauses in goal mode when waiting on external conditions, to avoid burning tokens (see #2525).
- **Context compaction stability:** Community is requesting more robust context compaction that respects user intent (e.g., not resurrecting deleted tasks) (see #2523).

---

## Developer Pain Points

- **429 rate limiting on remote servers:** Issue #2209 has been open for 72 days with no fix, indicating a systemic infrastructure bottleneck when deploying Kimi CLI on cloud servers. This is the loudest unresolved concern.
- **Windows parity gaps:** Multiple Windows-specific bugs (#2522, #2521) surfaced in the last 24 hours, including migration loss and input handling. Windows developers feel underserved.
- **Outdated session state:** Developers repeatedly encounter stale system prompts that ignore recent skill changes or `AGENTS.md` edits (#2523, #2519). This erodes trust in session resume functionality.
- **Token waste in idle loops:** Goal mode's aggressive polling behavior (#2525) wastes tokens and context for long-running external jobs — a significant cost and efficiency concern for power users.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-21

## Today's Highlights

**v1.18.4 ships adaptive thinking controls for Kimi models**, while the community continues to be frustrated by desktop crash loops tied to notification server failures across WSL and localhost setups. A large batch of automated clean-up PRs (~20) from last month have been merged or closed, including agent teams, TUI sidebar history, and OTLP protobuf support.

---

## Releases

### [v1.18.4](https://github.com/anomalyco/opencode/releases/tag/v1.18.4)
**Core**
- **Improvement:** Adaptive thinking controls for Kimi models on Anthropic-compatible providers, with summarized reasoning output by default (@chouqin).
- **Bugfix:** Reduced OpenAI provider header timeouts during slow connection setup.
- **Bugfix:** Respect provider-defined reasoning options.

---

## Hot Issues (Top 10)

1. **[#4031 — Python SDK request](https://github.com/anomalyco/opencode/issues/4031)**  
   *Author: blissfolly* — Opened Nov 2025, last updated yesterday. 38 comments, 0 👍.  
   Community member requesting a published Python SDK/API package for `≥1.0.39`. No official response yet; lack of a first-class SDK is a blocker for Python-centric teams.

2. **[#27906 — v1.15.1+ breaks Bun installs](https://github.com/anomalyco/opencode/issues/27906)**  
   *Author: Silvenga* — 20 comments, 13 👍. High engagement. Postinstall lifecycle scripts required since v1.15.1, which Bun blocks for global packages. No resolution in sight; affects all non-NPM package manager users.

3. **[#4821 — Feature: Add ability to unqueue messages](https://github.com/anomalyco/opencode/issues/4821)**  
   *Author: Mishkun* — 20 comments, 67 👍. Most-upvoted open feature. Users want to cancel queued messages when the agent overcorrects. High demand, no implementation yet.

4. **[#37012 — Keep legacy layout option](https://github.com/anomalyco/opencode/issues/37012)**  
   *Author: darkine24th* — 19 comments, 24 👍. Strong pushback against the new Desktop layout. Users cite lost workspace functionality and extra navigation overhead. Moderate priority — UX regression.

5. **[#19604 — Write tool fails silently on large files (~1000+ lines)](https://github.com/anomalyco/opencode/issues/19604)**  
   *Author: jdocker8* — 19 comments, 12 👍. High-impact bug: `Write` tool aborts silently on files ≥1000 lines with no error. Blocking for large-codebase workflows. No fix yet.

6. **[#29363 — `limit.output` silently capped at 32k tokens](https://github.com/anomalyco/opencode/issues/29363)**  
   *Author: g199209* — 15 comments, 7 👍. Config value is capped despite user settings; the only workaround is an experimental env var. Frustrating for users of high-context models (DeepSeek, GPT-4).

7. **[#37171 — Desktop crash on restart: "Notification server not found: wsl:Ubuntu"](https://github.com/anomalyco/opencode/issues/37171)**  
   *Author: 54Lynnn* — 9 comments, 4 👍. Recurring crash pattern with WSL notification server. Related to #35686, #37331, #36977. High signal — multiple users on both WSL and localhost.

8. **[#37970 — Plan/Build mode removed in latest version](https://github.com/anomalyco/opencode/issues/37970)**  
   *Author: BillyJack76* — 9 comments, 0 👍. The Plan/Build mode toggle disappeared in v1.18.0. Users report inconsistent behavior — sometimes it plans, sometimes it doesn't. New regression.

9. **[#35434 — Multi-question tool calls fail silently in TUI since v1.17.13](https://github.com/anomalyco/opencode/issues/35434)**  
   *Author: weimantian* — 6 comments. Regression from PR #34116: the `question` tool doesn't submit when `≥2` questions are asked. Single questions work fine. Blocking for complex workflows.

10. **[#36826 — "Failed to send prompt" with DeepSeek V4 Flash](https://github.com/anomalyco/opencode/issues/36826)**  
    *Author: wndrzzka* — 6 comments, 1 👍. DeepSeek V4 Flash model returns "Unexpected server error" on all prompts. Provider compatibility issue; no workaround documented.

---

## Key PR Progress (Top 10)

1. **[#35688 — Guard missing notification server state](https://github.com/anomalyco/opencode/pull/35688)**  
   *Author: jones* — Closes #35686. Prevents renderer crash when notification server state is missing. Directly addresses the WSL/localhost crash loop family. **Merged.**

2. **[#33144 — Agent teams and nested subagent delegation](https://github.com/anomalyco/opencode/pull/33144)**  
   *Author: r3vs* — Closes #12711. Massive feature: nested delegations, budgets, permissions, and recovery for subagent-to-subagent workflows. Multiple prior PRs consolidated. **Merged.**

3. **[#33146 — Fix CLI stream run output and empty-text warning](https://github.com/anomalyco/opencode/pull/33146)**  
   *Author: dblagbro* — Closes 5 issues (#22243, #20799, #27669, #29997, #30100) related to `opencode run` going silent. Adds streaming flush and empty-text handling. **Merged.**

4. **[#37647 — Build opencode2 (TUI) alongside opencode in Nix](https://github.com/anomalyco/opencode/pull/37647)**  
   *Author: ReStranger* — Closes #37646. Adds `opencode2` output to the Nix derivation. **Open.**

5. **[#38005 — Support BigInt arithmetic in CodeMode](https://github.com/anomalyco/opencode/pull/38005)**  
   *Author: rekram1-node* — Fresh PR. Supports decimal/binary/octal/hex BigInt literals with 4096-bit magnitude cap. **Open.**

6. **[#33127 — TUI sidebar history and scroll-to-message](https://github.com/anomalyco/opencode/pull/33127)**  
   *Author: yimi-k* — Closes #32165. Adds history sidebar listing user messages with click-to-scroll. **Merged.**

7. **[#33091 — Stop write tool from overwriting files with empty content](https://github.com/anomalyco/opencode/pull/33091)**  
   *Author: anisches* — Closes #33078. Prevents data loss when model passes empty/whitespace-only content to the Write tool. Related to #19604. **Merged.**

8. **[#33083 — Machine-level desktop settings](https://github.com/anomalyco/opencode/pull/33083)**  
   *Author: anduimagui* — References #28425. Adds `~/.config/opencode/desktop.json` for machine-wide configuration. **Merged.**

9. **[#33100 — Support OTLP protobuf protocol](https://github.com/anomalyco/opencode/pull/33100)**  
   *Author: iw-an* — Closes #33101. Adds OTLP HTTP protobuf export (previously JSON-only). **Merged.**

10. **[#33082 — RFC: Computer Use for opencode](https://github.com/anomalyco/opencode/pull/33082)**  
    *Author: EtienneLescot* — Docs-only RFC seeking design alignment. References 5 prior issues. **Merged** as design document.

---

## Feature Request Trends

1. **Session & History Management** — Top demand: ability to **unqueue messages** (#4821, 67 👍). Also: keep legacy layout as option (#37012, 24 👍), change project folder without losing history (#29703, 13 👍), and close confirmation dialogs (#37958).

2. **Developer SDKs & APIs** — Persistent request for a **Python SDK** (#4031, open 8+ months). Also: **built-in proxy support** for restricted networks (#37993), and configurable cost display currency (#32485).

3. **Agent Control & Steering** — Users want **Plan/Build mode** restored (#37970), coupled with existing demands for **recovery paths for errored subagent sessions** (#21525) and the ability to escape Plan Mode (#35678).

4. **Accessibility & UI Customization** — Community asking for **spinner verb customization** (PR #33065), better **brightness/contrast** in Desktop client (#37428), and **machine-level settings** (PR #33083).

---

## Developer Pain Points

1. **Desktop crash loops** — The `"Notification server not found"` error family is the #1 stability issue this week. Affects WSL (Ubuntu), localhost (`http://127.0.0.1:4096`), and remote servers. Users cannot start the app without manual workarounds. Related issues: #37171, #35686, #37331, #36977, #35678.

2. **Silent failures** — The **Write tool** silently fails on large files (#19604) and can **overwrite files with empty content** (PR #33091). Multi-question tool calls in TUI also fail silently (#35434). These erode trust in the tooling.

3. **Config caps & workarounds** — `limit.output` **silently capped at 32k** (#29363) with no user-facing feedback. Users must resort to experimental env vars to get expected behavior.

4. **JS exception crashes** — Multiple reports of `"Object has been destroyed"` uncaught exceptions in the Desktop app’s main process (#30627, #30297, #35501, #32923). Crash-on-restart pattern with no recovery UI.

5. **Package manager incompatibility** — Postinstall scripts required since v1.15.1 break **Bun** and likely **pnpm**/yarn berry installs (#27906). No resolution or documented alternative.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-21

## Today's Highlights
A major bundle optimization issue was uncovered where `pi-agent-core` statically imports `/compat`, dragging all built-in providers into downstream bundles that never use them. Separately, provider-cost accuracy is getting attention with a PR to use billed costs from Vercel AI Gateway responses, and a new Qwen Token Plan provider was added. The community also saw fixes for crash log path hardcoding, auth.json environment variable handling, and session corruption recovery.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **#6851 — pi-agent-core static compat import bloats bundles** *(OPEN)*  
   `FredKSchott` reports that even after migrating off `/compat`, `@earendil-works/pi-agent-core` still statically imports it, pulling all built-in providers into bundles that never use them. This is a significant optimization concern for extension developers.  
   [GitHub](https://github.com/earendil-works/pi/issues/6851)

2. **#5263 — Make in-session model/thinking-level changes ephemeral by default** *(OPEN, 8 👍)*  
   High community demand for session-scoped model changes, with a `/settings` "Default model" entry for persistent overrides. 8 upvotes indicate strong interest.  
   [GitHub](https://github.com/earendil-works/pi/issues/5263)

3. **#3200 — Support video/audio content in prompt command** *(OPEN, 4 👍)*  
   Feature request to extend the `prompt` RPC to forward video/audio alongside existing image support, enabling multimodal models like Gemma 4 and GPT-4o.  
   [GitHub](https://github.com/earendil-works/pi/issues/3200)

4. **#6621 — Prevent accidental cache invalidation from dynamic system prompts** *(CLOSED)*  
   Users with slow-prefill hardware (e.g., AMD Strix Halo) suffer from dynamic system prompts breaking prompt caching. The fix adds cache-aware system prompt handling.  
   [GitHub](https://github.com/earendil-works/pi/issues/6621)

5. **#6725 — Copilot pricing for GPT-5.6 models is incorrect** *(CLOSED)*  
   `krzyk` found OpenAI models in Copilot lack `cacheWrite` in cost calculations, causing underestimates. Actual costs matched standard API rates.  
   [GitHub](https://github.com/earendil-works/pi/issues/6725)

6. **#6509 — Extension-reported usage in footer cost display** *(CLOSED)*  
   `ctx.ui.setUsage(key, usage)` allows extensions to report costs from external LLM calls, folded into the footer as `$2.000 (+$1.500 ext)`.  
   [GitHub](https://github.com/earendil-works/pi/issues/6509)

7. **#6794 — Pi startup super slow due to model catalogue refresh** *(CLOSED)*  
   A slow model catalogue refresh caused multi-second startup delays and non-responsive input. Quick community triage.  
   [GitHub](https://github.com/earendil-works/pi/issues/6794)

8. **#6844 — Deleting paste markers corrupts paste registry** *(CLOSED)*  
   Undo and out-of-order markers cause the paste registry to desync from visible text, leading to literal marker submission or wrong content.  
   [GitHub](https://github.com/earendil-works/pi/issues/6844)

9. **#6820 — Queued message dropped after threshold auto-compaction** *(CLOSED)*  
   Messages typed during compaction fail to deliver: "Agent is already processing." Missing `streamingBehavior` parameter.  
   [GitHub](https://github.com/earendil-works/pi/issues/6820)

10. **#6819 — `assistant.usage` undefined crashes session permanently** *(CLOSED)*  
    DeepSeek V4 returns responses without `usage` data, causing crashes in `calculateContextTokens` and other functions.  
    [GitHub](https://github.com/earendil-works/pi/issues/6819)

## Key PR Progress

1. **#6881 — Use provider-reported cost when responses include it** *(OPEN)*  
   `R-Taneja` implements fallback logic: use `usage.cost` from Vercel AI Gateway responses, falling back to `calculateCost` otherwise. Includes BYOK upstream inference cost support.  
   [GitHub](https://github.com/earendil-works/pi/pull/6881)

2. **#6858 — Add Qwen Token Plan as built-in provider** *(CLOSED)*  
   `QuintinShaw` adds `qwen-token-plan` (international) and `qwen-token-plan-cn` (mainland China) following the existing Xiaomi Token Plan pattern.  
   [GitHub](https://github.com/earendil-works/pi/pull/6858)

3. **#6775 — Retry on compaction/branch summarization retryable failures** *(OPEN)*  
   `davidbrai` fixes #6647 by adding retry logic to compaction summarization, which previously failed silently on transient stream drops.  
   [GitHub](https://github.com/earendil-works/pi/pull/6775)

4. **#6854 — Fix tool_call_id error when switching between model types** *(CLOSED)*  
   Normalizes replayed tool call IDs when switching from OpenAI Responses-style to completions models, preventing ID conflicts.  
   [GitHub](https://github.com/earendil-works/pi/pull/6854)

5. **#6864 — Fix auth.json ENV section ignored** *(CLOSED)*  
   `envApiKeyAuth.resolve()` dropped `credential.env` on the stored-key branch, causing `AZURE_OPENAI_BASE_URL` and similar env vars to be ignored.  
   [GitHub](https://github.com/earendil-works/pi/pull/6864)

6. **#6859 — Use bun info for package update checks** *(CLOSED)*  
   Enables extension update notifications when using Bun as the npm package manager, which previously failed silently.  
   [GitHub](https://github.com/earendil-works/pi/pull/6859)

7. **#6765 — Separate generated model data** *(CLOSED)*  
   `mitsuhiko` moves generated model values to separate JSON files while retaining TypeScript catalog structure, reducing repo churn.  
   [GitHub](https://github.com/earendil-works/pi/pull/6765)

8. **#6671 — Add usage info to branch summary, compaction and tool result entries** *(CLOSED)*  
   Adds usage metadata to compaction, branch summaries, and tool results. For tool results, `usage` still needs event-level plumbing.  
   [GitHub](https://github.com/earendil-works/pi/pull/6671)

9. **#6837 — Align GPT-5.6 Codex context with official client** *(CLOSED)*  
   Sets Sol/Terra/Luna context window to 272K for the `openai-codex` provider while keeping long-context pricing tiers.  
   [GitHub](https://github.com/earendil-works/pi/pull/6837)

10. **#6594 — SQLite session storage** *(OPEN)*  
    `cristinaponcela` adds `retainedTail` to compaction entries and changes `getPathToRoot` to stop at last compaction, enabling SQLite-backed sessions.  
    [GitHub](https://github.com/earendil-works/pi/pull/6594)

## Feature Request Trends
- **Ephemeral session changes** (#5263, #6820): Strong demand for session-scoped model/thinking changes that don't persist globally, with proper queuing during compaction.
- **Multimodal prompt support** (#3200): Video/audio alongside existing image support for multimodal LLMs.
- **Extension API customization** (#6876, #6863): Control over message rendering chrome, session file storage hooks, and RPC for thinking levels.
- **Cost transparency** (#6725, #6509, #6881): Accurate cost reporting from provider APIs, extension-reported external costs.
- **Cache-aware optimizations** (#6621, #6794): System prompt caching for slow-prefill hardware, model catalogue refresh performance.

## Developer Pain Points
- **Bundle bloat from static imports** (#6851): A single static import in `pi-agent-core` forces all providers into downstream bundles, directly impacting extension developers.
- **Silent failures and dropped state** (#6820, #6844, #6819): Messages dropped during compaction, paste registry corruption, and `usage` undefined crashes indicate fragile state management under edge conditions.
- **Environment configuration inconsistencies** (#6799, #6652): `auth.json` env block ignored for some providers, crash logs ignoring `PI_CODING_AGENT_DIR`.
- **Terminal interoperability issues** (#5407, #5931, #6871): Double keystrokes in Kitty, extra spaces on copy-paste, broken RTL rendering affect cross-terminal UX.
- **Export failures at scale** (#6849): HTML export breaks for deeply nested sessions (>2,800 depth) due to recursion overflow.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-21

## Today's Highlights
The Qwen Code community is experiencing a surge of activity around **model compatibility and internal tooling**, with multiple high-priority bugs reported where `enable_thinking=false` is forced during internal operations, breaking thinking-only models like `qwen3.8-max-preview`. A **wave of autofix infrastructure PRs** from the core team is reshaping how the project handles managed PRs, retries, and fleet visibility. Meanwhile, **MCP server integration** continues to be a pain point, with two new bugs around tool listing and prompt parameter handling.

## Releases
No new releases in the last 24 hours. The latest stable version remains **v0.19.11** (with v0.20.0 mentioned in issue #7315).

## Hot Issues

### 1. [#7284 – `enable_thinking=false` breaks thinking-only models](https://github.com/QwenLM/qwen-code/issues/7284)
- **Priority:** P1 | **Category:** Core (model-switching)
- **Situation:** `runSideQuery` (used by `web_fetch`, classifiers, etc.) always sends `enable_thinking: false` to DashScope/TokenPlan endpoints, causing 400 errors on endpoints that require thinking enabled.
- **Why it matters:** This is a **systemic bug** affecting all internal operations (web fetch, goal judge, permission classifier) when using modern thinking-only models—effectively blocking core agent functionality for users on these models.

### 2. [#7332 – BadRequestError on thinking-only models during internal ops](https://github.com/QwenLM/qwen-code/issues/7332)
- **Priority:** P1 | **Category:** Core
- **Situation:** Context compaction, goal judge, and permission classifier all send `enable_thinking: false` to thinking-only models (e.g., `qwen3.8-max-preview`), triggering 400 errors.
- **Community reaction:** Three separate but related issues (#7284, #7332, #7359) have been filed in the last 24 hours, suggesting a widespread impact. PR #7333 is already open as a fix.

### 3. [#7316 – OpenAI toolCall behavior breaks subAgents](https://github.com/QwenLM/qwen-code/issues/7316)
- **Priority:** P2 | **Category:** Tools (subagents)
- **Situation:** Some OpenAI-compatible models return empty strings for optional `working_dir` parameters, making `isolation: "worktree"` subagent calls fail due to mutually exclusive fields.
- **Why it matters:** This breaks subagent functionality for a large class of users leveraging OpenAI-compatible providers, not just Qwen models.

### 4. [#7147 – MCP server never gets tool listing](https://github.com/QwenLM/qwen-code/issues/7147)
- **Priority:** P2 | **Category:** Tools (MCP)
- **Situation:** Fastmail's MCP server authenticates successfully but times out when fetching tool/resource listings. Works in other LLM interfaces.
- **Community reaction:** Welcome PR label suggests the team is open to external contributions. This affects users trying to integrate with external MCP servers.

### 5. [#7040 – RFC: Reliable auto-memory recall](https://github.com/QwenLM/qwen-code/issues/7040)
- **Priority:** P2 | **Category:** Core (memory)
- **Situation:** An RFC for improving memory recall timing, quality, and telemetry—now narrowed to focus on the recall path that benefits every user, rather than becoming an enterprise memory-governance platform.
- **Community reaction:** 7 comments, active discussion about scope boundaries. Roadmap items include "context-performance" and "background-automation" labels.

### 6. [#7023 – Model switch invalidates daemon session](https://github.com/QwenLM/qwen-code/issues/7023)
- **Priority:** P2 | **Category:** Core (session management)
- **Situation:** When a WebShell/daemon client switches models on an existing session, the daemon session becomes unavailable immediately.
- **Why it matters:** This is a critical workflow blocker for users running multiple models in daemon mode.

### 7. [#6949 – ACP Plan mode blocks shell commands, bypasses exit](https://github.com/QwenLM/qwen-code/issues/6949)
- **Priority:** P2 | **Category:** Core (interactive shell)
- **Situation:** Plan-mode shell classifier blocks unclassified read-only commands (like Python queries to remote metadata), and can bypass exit confirmation.
- **Community reaction:** In review with `coding-plan` and `DDAR` labels. Two coupled failures in one turn.

### 8. [#7049 – Update check timeout UX too harsh](https://github.com/QwenLM/qwen-code/issues/7049)
- **Priority:** P3 | **Category:** CLI
- **Situation:** After a recent fix, `fetchInfo()` now correctly times out instead of silently falling back—but on slow/unreliable networks, the error is too aggressive and should be a warning with a higher timeout budget.
- **Community reaction:** 3 comments; the author suggests making it a warning instead of an error.

### 9. [#7306 – Hardening tool-output budgeting and observability](https://github.com/QwenLM/qwen-code/issues/7306)
- **Priority:** P2 | **Category:** Core
- **Situation:** Tool outputs go through multiple independent truncation and aggregation paths (shell, scheduler, batch-offload), each applying different thresholds. This creates unpredictable behavior.
- **Why it matters:** These inconsistencies affect reliability and debugging of tool outputs.

### 10. [#7359 – web_fetch fails on Token Plan API (duplicate)](https://github.com/QwenLM/qwen-code/issues/7359)
- **Priority:** P2 | **Category:** Core
- **Situation:** Closed as duplicate of #7284, confirming the `enable_thinking` side-query bug is the root cause. The Token Plan API in ap-southeast-1 requires `enable_thinking: true`, which conflicts with internal operations.
- **Community reaction:** Closed quickly as duplicate—good signal that the team is aware.

## Key PR Progress

### 1. [#7333 – Skip `enable_thinking=false` for thinking-only models](https://github.com/QwenLM/qwen-code/pull/7333)
- **What:** Fixes the core bug where internal operations set `includeThoughts: false`, causing 400 errors on thinking-only models.
- **Why important:** The highest-priority fix in the current pipeline. Directly addresses issues #7332, #7284, #7359.

### 2. [#7336 – Deliver background agent replies](https://github.com/QwenLM/qwen-code/pull/7336)
- **What:** Adds a dedicated Channel delivery path for model responses generated after background task notifications wake an idle ACP session.
- **Why important:** Fixes a silent data loss bug (#7334) where background agent final responses were dropped.

### 3. [#7308 – Workspace runtime ownership](https://github.com/QwenLM/qwen-code/pull/7308)
- **What:** Introduces workspace-owned runtime coordination for `qwen serve`. ACP lifecycle now belongs to registered workspace.
- **Why important:** A significant architectural change that makes runtime state persist beyond sessions. Part of the autofix/takeover initiative.

### 4. [#7320 – Fix `/cd` tab completion for typed directory](https://github.com/QwenLM/qwen-code/pull/7320)
- **What:** Fixes #7318 where `/cd learn/` + Tab showed subdirectories but not `learn/` itself.
- **Why important:** Minor UX fix that solves a daily frustration for CLI users.

### 5. [#7322 – Background npm installs with safe atomic switch](https://github.com/QwenLM/qwen-code/pull/7322)
- **What:** Splits update installation into a background process with immutable, launcher-scoped directories and atomic switch.
- **Why important:** Makes version upgrades non-blocking and safe, addressing the underlying reliability concern in #7049.

### 6. [#7317 – Map positional args to optional MCP prompt parameters](https://github.com/QwenLM/qwen-code/pull/7317)
- **What:** Fixes #7314 where positional arguments were silently dropped for optional MCP prompt parameters.
- **Why important:** Makes MCP prompt usage more predictable and matches user expectations from other LLM tools.

### 7. [#7346 – Add `fork_turns` to fork subagents](https://github.com/QwenLM/qwen-code/pull/7346)
- **What:** Adds optional `fork_turns` parameter to limit history inheritance when forking subagents.
- **Why important:** Provides fine-grained control over context inheritance, addressing feedback from #7348 about headless mode limitations.

### 8. [#7351 – Retry verification-gate crashes in autofix](https://github.com/QwenLM/qwen-code/pull/7351)
- **What:** Distinguishes verification-gate rejection from gate crash, retrying crashes instead of burying the agent's fix.
- **Why important:** Improves autofix reliability by avoiding false-negative fix rejections.

### 9. [#7355 – Render managed fleet in scan run summary](https://github.com/QwenLM/qwen-code/pull/7355)
- **What:** Every scan now renders a table of per-PR decisions in the run summary, making fleet health visible.
- **Why important:** Operational transparency for the autofix infrastructure—answers "what is stuck?" at a glance.

### 10. [#7362 – Fix Windows adb detection in mobile-mcp](https://github.com/QwenLM/qwen-code/pull/7362)
- **What:** Fixes `getAdbPath()` which used `process.env.platform` instead of `process.platform`, causing Windows users to always get `adb` instead of `adb.exe`.
- **Why important:** A subtle but impactful bug that completely breaks Android device detection on Windows.

## Feature Request Trends

1. **Context-aware subagents in headless mode** — Multiple requests (#7348, #7346) for proper parent-context inheritance in non-interactive sessions (`qwen -p`, SDK, CI/CD). Users want `fork` subagents to work reliably without silent fallback.

2. **Memory recall telemetry** — Issue #7040 (RFC) and #7335 both push for runtime observability on memory recall paths (latency, cache behavior, selection outcomes). Operators need content-safe metrics.

3. **Skill configuration flexibility** — Issue #7347 asks for overridable `defaultDisabled` settings separate from `skills.disabled`, enabling project-level overrides of user-level disabled skills.

4. **Autofix infrastructure maturity** — Multiple PRs and issues (#7355, #7351, #7308, #7354) show heavy investment in managed PR automation: fleet visibility, crash recovery, retry commands, and ownership models.

5. **web_fetch fallback** — Issue #7298 requests automatic curl-based fallback when `web_fetch` fails due to API bugs or network issues, reducing agent "give up" behavior.

## Developer Pain Points

1. **Token Plan API incompatibility** — The most acute pain: internal operations forcing `enable_thinking: false` breaks all agents using thinking-only models or Token Plan endpoints. Three duplicate bugs in 24 hours (P1 urgency).

2. **MCP server reliability** — Two new MCP bugs (#7147 tool listing timeout, #7314 positional args dropped) suggest integration maturity issues, especially for non-Qwen MCP servers.

3. **Subagent model compatibility** — OpenAI-compatible providers returning empty strings for optional parameters (#7316), combined with the `enable_thinking` bug (#7284), makes subagents unreliable across model providers.

4. **Session/daemon state fragility** — Model switches invalidating daemon sessions (#7023) and background agent responses being dropped (#7334) indicate session lifecycle management needs hardening.

5. **Windows-specific issues** — The mobile-mcp adb detection bug (#7362) and VS Code connection issues (#7056 on Windows) suggest Windows testing coverage gaps.

6. **Tool output inconsistency** — Multiple truncation paths with different thresholds (#7306) create unpredictable behavior that frustrates developers debugging complex agent workflows.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Based on the GitHub data for `Hmbown/CodeWhale` (the DeepSeek TUI project), here is the community digest for **2026-07-21**.

---

# DeepSeek TUI Community Digest — 2026-07-21

## Today's Highlights
The project is in a heavy **v0.9.1 release-blocker sprint**, with maintainer `Hmbown` merging over 20 pull requests in the last 24 hours. The focus is on closing critical issues surrounding **sub-agent isolation, permission contracts, and TUI performance**. A new wave of community bug reports from Windows users (input lag, setup persistence) is driving rapid hotfixes.

## Releases
None. No releases were published in the last 24 hours. The community is awaiting the **v0.9.1** stable release.

## Hot Issues
The following 10 issues represent the most critical community friction and release-blocking work:

1. **[#4032 – Codewhale not following the constitution](https://github.com/Hmbown/CodeWhale/issues/4032)**
   - **Why it matters:** A foundational reliability issue. The AI agent (`Codewhale`) ignores user-provided scripts and writes its own, breaking the "constitution" (user-defined rules). The 40 comments indicate high community frustration, as this undermines trust in agent autonomy.
   - **Reaction:** Demanding robust agent compliance; cited as a v0.9.1 release blocker.

2. **[#4605 – Enter key send lag — UI freezes](https://github.com/Hmbown/CodeWhale/issues/4605)**
   - **Why it matters:** A multi-version performance regression. Every message send locks the terminal for hundreds of milliseconds, a critical UX pain point for daily workflows.
   - **Reaction:** Flagged as P1; community seeking immediate intervention.

3. **[#4603 – Long output content cannot scroll](https://github.com/Hmbown/CodeWhale/issues/4603)**
   - **Why it matters:** Content truncation without scroll access makes reviewing large diffs or logs impossible. A core TUI requirement.
   - **Reaction:** Windows-specific; blocking code review workflows.

4. **[#4604 – Setup wizard forced on every restart](https://github.com/Hmbown/CodeWhale/issues/4604)**
   - **Why it matters:** A first-run flag is not persisted, making the app unusable after every restart on Windows. Closed quickly but highlighted systemic config persistence issues.
   - **Reaction:** Immediate community call for a hotfix.

5. **[#4594 – Top bar / sidebar list does not scroll to bottom](https://github.com/Hmbown/CodeWhale/issues/4594)**
   - **Why it matters:** Users cannot access the last items in a 10-item To-do list via scrolling. A fundamental TUI widget bug.
   - **Reaction:** Closed via PR #4607; testing ongoing.

6. **[#414 – Resolve one truthful child runtime before launch](https://github.com/Hmbown/CodeWhale/issues/414)**
   - **Why it matters:** The cornerstone of sub-agent reliability. Ensuring that every child process has a valid, persisted manifest (schema, permissions, identity) before spending tokens.
   - **Reaction:** V0.9.1 blocker; active design discussions.

7. **[#2889 – Work Agent rows: real sub-agent details](https://github.com/Hmbown/CodeWhale/issues/2889)**
   - **Why it matters:** A UX gap. The sidebar shows generic "Work/To-do" but lacks structured details on sub-agent activity, permissions, and status. Hinders multi-agent debugging.
   - **Reaction:** Community-driven restoration; design direction being finalized.

8. **[#3934 – Collapse Fleet and agent roles to Planner/Worker/Reviewer/Verifier](https://github.com/Hmbown/CodeWhale/issues/3934)**
   - **Why it matters:** Simplifying a complex agent role system into four canonical roles. Reduces confusion for users running multi-agent workflows (Fleet mode).
   - **Reaction:** Supported by the community; aims for v0.9.1.

9. **[#4598 – Make Operate delegate bounded leaves by default](https://github.com/Hmbown/CodeWhale/issues/4598)**
   - **Why it matters:** Optimizing cost and parallelism. Ensuring the "Operate" mode automatically spawns independent sub-tasks (leaves) rather than running expensive, serialized single-thread processes.
   - **Reaction:** Prompt-based policy; no scheduler changes.

10. **[#4412 – Resolve Ask, Auto-Review, and Full Access through one permission contract](https://github.com/Hmbown/CodeWhale/issues/4412)**
    - **Why it matters:** Unifying three permission models into a single, typed contract. This is the key to making the "Auto-Review" mode non-modal and trustworthy.
    - **Reaction:** V0.9.1 blocker; code commits seen in related PRs.

## Key PR Progress
The following 10 pull requests represent the most impactful code movements in the last 24 hours:

1. **[#4618 – Keep long-running tools live](https://github.com/Hmbown/CodeWhale/pull/4618)**
   - **What:** Reduced TUI stall watchdog timeouts. Prevents the UI from freezing while a long tool (e.g., `apply_patch`) executes.
   - **Impact:** Fixes a high-frequency UX crash.

2. **[#4613 – Sanitize Moonshot tool parameters per MFJS spec](https://github.com/Hmbown/CodeWhale/pull/4613)**
   - **What:** Fixes tool schema validation for the Moonshot/Kimi provider (requires `type: object` in root).
   - **Impact:** Unblocks users on the Moonshot provider.

3. **[#4617 – Enforce exact K3 and MFJS contracts](https://github.com/Hmbown/CodeWhale/pull/4617)**
   - **What:** Ensures Kimi (K3) model contracts are matched exactly, with proper schema normalization.
   - **Impact:** Provider reliability fix; prevents hallucinated model routes.

4. **[#4616 – Make onboarding completion durable](https://github.com/Hmbown/CodeWhale/pull/4616)**
   - **What:** Fixes the setup wizard loop on restart (closes #4604).
   - **Impact:** Solves a major Windows onboarding blocker.

5. **[#4611 – Continue durable goals across turns](https://github.com/Hmbown/CodeWhale/pull/4611)**
   - **What:** Makes "goal" state persistent across session turns.
   - **Impact:** Core for maintaining complex multi-turn agent tasks.

6. **[#4608 – Align permission postures and compact approvals](https://github.com/Hmbown/CodeWhale/pull/4608)**
   - **What:** Makes Auto-Review actually autonomous by removing unnecessary approval modals for ordinary tool calls.
   - **Impact:** Delivers on a v0.9.1 feature promise.

7. **[#4600 – Auto-fork read-only same-route children onto the parent's cached prefix](https://github.com/Hmbown/CodeWhale/pull/4600)**
   - **What:** Performance optimization. Sub-agents can now inherit the parent's cached prompt prefix, saving ~100K input tokens per child.
   - **Impact:** Major cost reduction for Fleet/Sub-agent workflows.

8. **[#4601 – Composer real-editor contract](https://github.com/Hmbown/CodeWhale/pull/4601)**
   - **What:** Built a durable text selection/editing layer in the composer (Shift+arrow, undo).
   - **Impact:** Fills a long-standing input editing gap.

9. **[#4597 – Compress the Agent mode prompt](https://github.com/Hmbown/CodeWhale/pull/4597)**
   - **What:** Reduced the static agent prompt size by 18% (661 words → 542).
   - **Impact:** Token cost reduction for every cold start.

10. **[#4593 – Harden PowerShell invocation for safe Windows execution](https://github.com/Hmbown/CodeWhale/pull/4593)**
    - **What:** Added `-NoLogo -NoProfile -NonInteractive` and native `$LASTEXITCODE` capture for all PowerShell spawns.
    - **Impact:** Fixes Windows process leak and shell overhead issues.

## Feature Request Trends
The top three requested feature directions visible in the issues are:

1. **Agent Compliance & Constitution Enforcement**
   - Users demand that the agent strictly follow user-defined scripts and rules. This is the #1 trust issue.

2. **Unified & Non-Modal Permission System**
   - The "Ask," "Auto-Review," and "Full Access" permission models are being merged into a single, predictable contract. Users want zero-interruption for routine tool calls.

3. **Sub-Agent Transparency & Cost Control**
   - Strong demand for visible "Work" lists showing sub-agent activity, permission postures, and token costs. The community wants to know *why* a child agent was spawned and *what* it cost.

## Developer Pain Points
Recurring frustrations based on high-frequency or unaddressed issues:

- **Windows Platform Gaps:** Multiple Windows-specific bugs (input lag, process leaks, scroll truncation) suggest this platform receives less testing. Community feedback is strong.
- **Configuration Persistence:** Setup wizards, environment variables, and fallback models (e.g., DeepSeek-specific fallback) not persisting correctly between restarts.
- **Tool Schema Fragility:** Each provider (Moonshot, Kimi, DeepSeek) requires distinct JSON schema handling. The community needs a unified tool-schema adapter layer to reduce breakage.
- **Performance Regressions on Common Actions:** "Enter key lag" and "scroll truncation" affect basic text input and output review—signs that the TUI's rendering engine needs optimization for high-frequency interaction.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kky-wollu/agents-radar).*