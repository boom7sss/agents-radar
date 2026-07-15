# AI CLI Tools Community Digest 2026-07-16

> Generated: 2026-07-15 23:01 UTC | Tools covered: 9

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

# AI CLI Developer Tools: Cross-Tool Comparison Report — 2026-07-16

## 1. Ecosystem Overview

The AI CLI developer tools ecosystem is experiencing a period of intense maturation, with six major tools showing substantial daily development activity across security hardening, multi-agent orchestration, and platform stability. Windows platform reliability emerges as the single most pervasive cross-cutting concern, affecting all desktop-capable tools. Authentication flows—particularly for MCP (Model Context Protocol) integrations and third-party identity providers—represent a systemic friction point that erodes trust in the ecosystem's interoperability promise. The community is increasingly demanding fine-grained user control over agent behavior timing, model selection in subagent hierarchies, and persistent session management across tools. A clear architectural divergence is forming between tools pursuing deep IDE/editor integration and those optimizing for standalone terminal-based developer experiences.

---

## 2. Activity Comparison

| Tool | Issues (Today) | PRs (Today) | Release Status | Community Temperature |
|---|---|---|---|---|
| **Claude Code** | Unknown (digest failed) | Unknown | Unknown | Unknown |
| **OpenAI Codex** | 10 hot issues | 10 key PRs | 3 alpha releases (v0.145.0) | 🔴 High (153👍 on model-Sol bug) |
| **Gemini CLI** | 10 hot issues | 10 key PRs | 1 nightly build | 🟡 Moderate (security focus) |
| **Copilot CLI** | 10 hot issues | 0 PRs updated | 2 patch releases (v1.0.71) | 🟡 Moderate (MCP auth pain) |
| **Kimi Code** | 0 new issues | 1 PR | No release | 🔵 Quiet (SDK alignment) |
| **OpenCode** | 10 hot issues | 10 key PRs | 1 patch (v1.18.2) | 🔴 High (UI regression backlash) |
| **Pi** | 10 hot issues | 10 key PRs | No release | 🟡 Moderate (Codex instability) |
| **Qwen Code** | 10 hot issues | 10 key PRs | 2 nightlies + 1 stable driver | 🟢 High (infrastructure iteration) |
| **DeepSeek TUI** | 5 new issues | 2 PRs | No release | 🟡 Moderate (niche bug fixes) |

**Key Observations:**
- OpenAI Codex and OpenCode have the most heated community conversations (high upvote counts, duplicate reports)
- Copilot CLI shows zero PR activity today—potentially a slower iteration cadence
- Qwen Code leads in release throughput with multiple nightlies and driver binaries
- Kimi Code has the quietest day but is actively bridging Python/TypeScript telemetry gaps

---

## 3. Shared Feature Directions

### 3.1 Multi-Agent Model Selection & Orchestration
Appears in **OpenAI Codex** (#31814, 153👍), **Gemini CLI** (#22323, #21968), **Qwen Code** (#5239)
- Users demand the ability to mix different models for parent and subagent instances
- Subagent lifecycle notifications (failure propagation, termination visibility) are universally weak
- Per-model concurrency limits are being actively implemented (Qwen Code PR #6984)

### 3.2 MCP Authentication & Reliability
Appears in **Copilot CLI** (#4096, #4084-4089), **Qwen Code** (#6970), **OpenCode** (#32480)
- OAuth tokens succeed in UI but fail to bridge to CLI sessions
- Tool discovery timeouts (Gemini CLI PR #28410 fixed 10-minute freezes)
- Tool name sanitization needed for provider compatibility (Qwen Code #6970)

### 3.3 Session & Chat Management
Appears in **Pi** (#6674, #5263), **OpenCode** (#36936, #30926), **OpenAI Codex** (#13036)
- Multi-chat tabs / split views for desktop apps
- Session renaming, archiving, and folder organization
- Persistent token/context usage indicators in the status bar

### 3.4 User Control Over AI Timing
Appears in **OpenAI Codex** (#28969, 123👍), **DeepSeek TUI** (#4374)
- 60-second auto-resolve for AI questions should be configurable or disableable
- Goal continuation should respect user confirmation gates, not override them

### 3.5 Windows Platform Reliability
Appears in **OpenAI Codex** (#33381, #20214), **Copilot CLI** (#4053), **Pi** (#6619), **OpenCode** (#37171)
- ARM64 crash-loops, serialport addon failures, NFS/GPFS incompatibility
- Anti-virus false positives (Defender, Norton)
- WSL2 notification service crashes

### 3.6 Cross-IDE Migration
Appears in **OpenAI Codex** (PR #33426), **Copilot CLI** (#1979)
- Importing settings from Cursor, Claude Code, VS Code
- Remote session attachment (mobile/browser parity with Claude Code)

### 3.7 AST-Aware Code Understanding
Appears in **Gemini CLI** (#22745), **OpenAI Codex** (implied by skill improvements)
- File reads at method/function boundary
- Reducing token waste from misaligned reads

### 3.8 Memory System Robustness
Appears in **Gemini CLI** (#26522, #26525), **DeepSeek TUI** (#4373), **OpenCode** (#37141)
- Infinite retry loops on low-signal sessions
- Secret redaction in memory pipelines
- Tool result image inflation control

---

## 4. Differentiation Analysis

| Dimension | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|---|---|---|---|---|---|---|---|
| **Primary Target** | Desktop app + TUI power users | CLI-first, GCP ecosystem | VS Code / GitHub ecosystem | Desktop + IDE plugin | Lightweight TUI, multi-provider | Enterprise daemon, multi-channel | Minimalist TUI, skill-focused |
| **Architecture** | Rust backend, TypeScript desktop | Go CLI, MCP-native | Node.js CLI, MCP via app | TypeScript (Bun), plugins system | TypeScript, plugin-extensible | Rust driver + Python/TS core | Rust TUI, Python backend |
| **Differentiator** | Subagent orchestration, memory migration | Google-native, shell sandboxing | GitHub integration, voice mode | Plugin system, V2 architecture | Multi-provider flexibility, xAI OAuth | Multi-workspace daemon, WeCom/DingTalk | Skill inline syntax, cache denial |
| **Key Weakness** | Windows stability, model-Sol coupling | Subagent reliability | MCP auth bridging, no PR activity today | UI regressions (tabs, toggle) | Codex connection reliability | CI flakiness, settings validation | Small community, niche adoption |
| **Release Cadence** | Multiple alpha/day | Nightly | Patch every few days | Patch every few days | No release today | Multiple nightly + stable | No release today |

### Notable Technical Approaches:

**Qwen Code** is the only tool pursuing **multi-workspace daemon architecture** (1:N workspace ratio), positioning it for enterprise CI/CD pipeline integration.

**Gemini CLI** uniquely invested in **shell variable expansion security** (GHSA-wpqr-6v78-jr5g) and **AST-aware code navigation** as a differentiator.

**Pi** stands out for its **multi-provider flexibility** (OpenAI, xAI, Bedrock Mantle) but struggles with **Codex reliability** as a dependency.

**OpenCode** is undergoing the most **architectural churn** (V2 plugin system, system prompt refactoring, Effect tools) while simultaneously dealing with a **UX regression backlash** from its new tab layout.

---

## 5. Community Momentum & Maturity

### Highest Momentum (Rapid Iteration, Active Community)

**OpenAI Codex** — 3 alpha releases in one day, 79-comment thread on Sol model issue, PR count consistently high. The community is highly engaged but frustrated with Windows regressions. Maturity is mid-cycle: core features solid but platform polish lacking.

**Qwen Code** — 2+ releases daily, aggressive CI flakiness management (#6938 cluster), multi-workspace design conversations. The most infrastructure-focused tool, with clear enterprise roadmap. Growing quickly.

**OpenCode** — v1.18.x ecosystem attracting significant community contributions (10 PRs active). UI regression backlash indicates growing user base with high expectations. Plugin architecture maturing.

### Moderate Momentum (Steady but Slower)

**Gemini CLI** — Nightly cadence, strong security posture. Community size moderate (single-digit upvotes on most issues). PR throughput consistent but issues are less "hot" (few with 50+ upvotes).

**Copilot CLI** — Released patches today but zero PR activity. Community vocal about MCP pain but iteration speed appears lower. Feature requests (1M context) show competitive pressure from Claude Code.

**Pi** — Active PR pipeline (10 PRs) but no release today. Strong multi-provider flexibility but Codex reliability is single biggest user pain. Community engagement moderate.

**DeepSeek TUI** — Small, focused community. 5 new issues in 24 hours suggest growing adoption, but scale remains niche. Responsible for fixing subtle UX bugs (skill inline syntax).

### Low Activity

**Kimi Code** — Only 1 PR today, no new issues. SDK alignment work suggests internal development rather than community-driven iteration.

**Claude Code** — Data unavailable (digest generation failed), preventing assessment.

---

## 6. Trend Signals

### 6.1 MCP Interoperability is the New Baseline
Users expect MCP servers to "just work" across tools. The persistent OAuth bridging failures (Copilot CLI, Qwen Code) and discovery timeouts (Gemini CLI) indicate the ecosystem is still building trust. **Vendor-agnostic MCP compliance testing** would benefit the entire ecosystem.

### 6.2 Enterprise Deployment is Friction-Ridden
Windows ARM64 incompatibility, NFS/GPFS TUI hangs, and anti-virus false positives collectively signal that enterprise IT environments are under-tested. Tools targeting corporate adoption (Copilot CLI, Qwen Code, OpenAI Codex) need **dedicated Windows QA pipelines**.

### 6.3 Subagent Orchestration is the Next Frontier
The most-heated discussions (Codex #31814, Gemini #22323) revolve around **model selection and lifecycle management for subagents**. Users want to compose multi-model workflows. Expect **per-model concurrency limits** and **cross-subagent context sharing** to emerge as standard features within 6 months.

### 6.4 Security Incidents Are Driving Architecture Changes
Shell variable exfiltration (Gemini CLI), safety classifier deadlocks (Qwen Code), and privilege escalation via config files (OpenCode) represent a **broadening attack surface**. The industry is moving toward **trusted invocation contexts** and **permissions-scoped exec rules** as architectural patterns.

### 6.5 UI Regression Resilience is Underinvested
OpenCode's new tab layout backlash (5+ duplicate issues in 24 hours) and Pi's terminal scroll corruption (#6050) show that **UI changes without opt-in/rollback mechanisms cause acute community pain**. Feature-flagging major UX changes should become standard practice.

### 6.6 "Auto" Mode and Ephemeral Settings are Unmet Needs
Three tools (OpenAI Codex #28969, DeepSeek TUI #4374, Pi #5263) receive requests for **user-controlled timing and ephemeral configuration overrides**. Users want the flexibility to switch models, change thinking levels, or disable auto-resolve mid-session without touching global config.

### 6.7 Telemetry Alignment is a Cross-SDK Concern
Kimi Code's PR #2500 (aligning Python telemetry with TypeScript schema) mirrors a broader ecosystem need: **unified observability across language SDKs** is becoming critical for debugging distributed agent workflows. Trace ID propagation (missing in streaming responses) is a universal gap.

### 6.8 Competitive Pressure from Claude Code is Real
Copilot CLI's most-voted feature request (#2785, 62👍) explicitly calls for **1M context parity with Claude Code**. The ecosystem is benchmarked against Anthropic's offering, and tools that lag on context windows, remote sessions, or subagent orchestration will face growing community scrutiny.

---

**Summary for Technical Decision-Makers:**

The AI CLI tool landscape is converging on a core feature set—MCP integration, subagent orchestration, multi-model support, and persistent session management—but diverging in execution philosophy. **OpenAI Codex** leads in community engagement but struggles with platform stability. **Qwen Code** has the strongest infrastructure roadmap for enterprise deployment. **Gemini CLI** prioritizes security and correctness. **Copilot CLI** leverages GitHub integration but risks falling behind on context windows. For organizations evaluating these tools, the primary consideration should be **platform compatibility** (Windows/Mac/Linux parity) and **authentication maturity**, as these are the most consistent sources of user frustration across all tools evaluated.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the Claude Code Skills community highlights report, based on the provided repository data.

---

### Claude Code Skills Community Highlights Report (Data as of 2026-07-16)

#### 1. Top Skills Ranking

The following are the most-discussed Skill submissions (Pull Requests) by level of community engagement (comments and linked issues).

1.  **Skill-Creator Fixes (PR #1298)**
    - **Functionality:** A critical fix for the `skill-creator` skill’s evaluation pipeline. It resolves a bug where `run_eval.py` always reported 0% recall, rendering the description-optimization loop useless by optimizing against noise.
    - **Discussion:** This is the most active area of development. Linked to issues (#556, #1169) where multiple users independently reproduced the 0% trigger rate, confirming it is the central pain point for skill authors.
    - **Status:** Open. Multiple related PRs (#1099, #1050, #1323, #362) indicate the community is working in parallel to fix subprocess, encoding, and detection bugs on Windows and Linux.

2.  **Document Typography Skill (PR #514)**
    - **Functionality:** A skill to enforce professional typographic quality in generated documents, preventing orphan words/widows, paragraph widows, and numbering misalignment.
    - **Discussion:** The proposal resonates as a universal quality-of-life improvement for any document Claude generates. There is consensus that these issues affect every user, making this a highly practical, low-friction addition.
    - **Status:** Open. No merge conflicts or major blockers reported.

3.  **Testing Patterns Skill (PR #723)**
    - **Functionality:** A comprehensive skill covering the full testing stack, including philosophy (Testing Trophy), unit testing (AAA pattern), React component testing (Testing Library), and what not to test.
    - **Discussion:** This PR addresses a clear demand for structured testing guidance. The community appreciates the opinionated, pragmatic approach, filling a gap between vague advice and rigid boilerplate.
    - **Status:** Open.

4.  **ODT / OpenDocument Skill (PR #486)**
    - **Functionality:** Enables creation, filling, reading, and conversion of OpenDocument Format files (.odt, .ods), a common requirement for LibreOffice users and enterprise workflows requiring ISO-standard formats.
    - **Discussion:** The discussion highlights the skill's broad utility for open-source and enterprise document workflows, where proprietary formats (DOCX) are not always an option.
    - **Status:** Open.

5.  **Self-Audit Skill (PR #1367)**
    - **Functionality:** A meta-skill that verifies AI output before delivery. It performs mechanical file verification (Step 0) followed by a four-dimension reasoning audit in damage-severity priority order.
    - **Discussion:** This represents a high-level demand for output quality gates. The discussion centers on its potential as a universal delivery safeguard, though some question the overhead for simple tasks.
    - **Status:** Open.

6.  **Pyxel Retro Game Development Skill (PR #525)**
    - **Functionality:** Integrates with `pyxel-mcp` to allow Claude to create retro/pixel-art/8-bit games with Python, following a structured (write → run → inspect → iterate) workflow.
    - **Discussion:** This PR has surprising longevity (updated recently after months) suggesting consistent community interest in creative coding and game dev use cases.
    - **Status:** Open.

#### 2. Community Demand Trends

Analysis of the most active Issues reveals three primary demand clusters:

- **Platform Reliability & Tooling (Highest Demand):** The #1 community concern is **skill-creator reliability**. Issues #556 (12 comments), #1169 (3 comments), and #1061 (3 comments) all describe the same critical bug: `run_eval.py` and `run_loop.py` always report 0% recall, making the skill authoring workflow non-functional on both Windows and Linux. Multiple users have independently confirmed and reproduced this, indicating a systemic blocker for the ecosystem.
- **Security & Governance:** Issue #492 (34 comments, the most-commented issue) raises a significant trust boundary vulnerability: community skills distributed under the `anthropic/` namespace can impersonate official skills. This is driving demand for namespace verification, signing, or a distinction between "official" and "community" skills.
- **Enterprise Feature Requests:**
    - **Org-wide skill sharing** (Issue #228, 14 comments): Users need a way to share skills within an organization without manual file transfer.
    - **SharePoint Online (SPO) integration** (Issue #1175): Enterprise users are exploring agent access patterns for internal document repositories, raising concerns about access control and context window management.

#### 3. High-Potential Pending Skills

These actively-discussed PRs are not yet merged but show strong momentum and may land soon:

- **Skill-Quality/Security Analyzer (PR #83):** A meta-skill that evaluates other skills across five quality dimensions and security patterns. It has been pending since November 2025 but recently received updates, suggesting it may serve as a foundation for official validation tooling.
- **SAP-RPT-1-OSS Predictor (PR #181):** An enterprise-focused skill for using SAP's open-source tabular foundation model from within Claude. It addresses a niche but high-value use case for ERP data analysis.
- **Frontend-Design Clarity (PR #210):** An overhaul of the existing `frontend-design` skill to ensure instructions are specific, actionable, and followable within a single conversation. This represents a pattern-lowering effort for design-oriented users.

#### 4. Skills Ecosystem Insight

The community's most concentrated demand is for **reliable authoring tooling and quality assurance mechanisms**, before expanding the skill catalog into new domains like testing, typography, and enterprise document workflows.

---

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-16

## Today's Highlights

Three significant releases in the `rust-v0.145.0-alpha` series hit the repo today, suggesting a major push toward stabilizing the next Codex CLI backend. Meanwhile, a high-severity bug with GPT-5.6 Sol forcing all subagents into Sol mode (79 comments, 153 👍) continues to dominate community conversation, and the Windows ARM64 app is seeing a fresh wave of crash-loop reports that appear linked to serialport addon failures.

## Releases

Three consecutive alpha releases were published for the Rust CLI backend:
- **rust-v0.145.0-alpha.12**, **.13**, and **.14** — no changelog details provided beyond the version bumps, indicating tight iteration cycles likely addressing internal regression fixes or build pipeline updates ahead of a stable release.

## Hot Issues (Top 10)

1. **[#31814 — GPT-5.6 Sol forces all subagents to be Sol instances](https://github.com/openai/codex/issues/31814)**
   - 79 comments, 153 👍. The model metadata overrides `multi_agent_version` and `hide_spawn_agent_metadata` independently of feature toggles, making it impossible to mix agent models. Community is calling for an override mechanism.

2. **[#20214 — Codex App freezes on Windows 11 Pro](https://github.com/openai/codex/issues/20214)**
   - 40 comments, 56 👍. Long-standing (since April) performance regression affecting AMD Ryzen 5 systems with 32 GB RAM. Users report the app becomes unresponsive despite ample system resources.

3. **[#28969 — Need a setting to disable 60-second auto-resolve for questions](https://github.com/openai/codex/issues/28969)**
   - 36 comments, 123 👍. Strongly requested feature: users want manual control over when an AI-posed question is auto-answered if not responded to within a minute.

4. **[#33381 — Windows ARM64 app crash-loop on launch](https://github.com/openai/codex/issues/33381)**
   - 32 comments, 22 👍. Freshly reported: the desktop app exits ~10–15s after launch. Crash dumps point to `serialport` addon delay-load error 0xC06D007F (module not found) on ARM64.

5. **[#31846 — GPT-5.3 Codex Spark fails with `reasoning.summary` parameter error](https://github.com/openai/codex/issues/31846)**
   - 24 comments, 33 👍. App sends `reasoning.summary` which the Spark model rejects. Highlights a model/model-parameter compatibility gap in the app's parameter forwarding logic.

6. **[#33375 — Repeated serialport.node delay-load failures cause severe UI lag](https://github.com/openai/codex/issues/33375)**
   - 18 comments, 10 👍. Windows x64 app becomes sluggish when `serialport.node` fails to load. Multiple Windows performance issues may share a root cause.

7. **[#23198 — Codex Desktop extremely slow on Windows](https://github.com/openai/codex/issues/23198)**
   - 16 comments, 44 👍. Another general performance complaint from May still unresolved, reinforcing a pattern of Windows-specific responsiveness problems.

8. **[#30527 — Windows 10: Microsoft Defender triggers high CPU after recent update](https://github.com/openai/codex/issues/30527)**
   - 13 comments, 11 👍. Recent app update causes Defender Behavior Monitoring to flag Codex processes, leading to sustained high CPU usage.

9. **[#32331 — Norton 360 flags Codex opening existing threads](https://github.com/openai/codex/issues/32331)**
   - 8 comments, 5 👍. Behavioral protection (IDP.HELU.PSE80%s_cmd) alerts on simply opening a chat thread. False-positive security alerts are becoming a pattern on Windows.

10. **[#13036 — Support display of multiple chats simultaneously](https://github.com/openai/codex/issues/13036)**
    - 10 comments, 6 👍. Long-running feature request for multi-chat tabs or split views in the desktop app, especially relevant for multi-agent workflows.

## Key PR Progress (Top 10)

1. **[#31781 — Bound executor-controlled HTTP response buffering](https://github.com/openai/codex/pull/31781)**
   - Security hardening: limits per-frame payload size from untrusted remote exec-servers, preventing memory exhaustion attacks via large JSON-RPC messages.

2. **[#33444 — Add external agent memory migration](https://github.com/openai/codex/pull/33444)**
   - Feature-gated `MEMORY` migration: discovers project memory Markdown files and imports selected ones into the Codex memory extension workspace.

3. **[#33432 — Preserve paginated history for spawned subagents](https://github.com/openai/codex/pull/33432)**
   - Subagents now inherit paginated history mode from parent, with proper prefix exclusion to avoid inflating child token counts.

4. **[#33430 — Avoid creating metadata paths in Windows sandbox](https://github.com/openai/codex/pull/33430)**
   - Fixes Windows sandbox setup that was creating metadata directories as deny-write paths, breaking built-in read-only protections.

5. **[#33426 — Add Cursor support to setup import](https://github.com/openai/codex/pull/33426)**
   - Expands `/import` to detect and migrate Cursor IDE settings, MCP servers, hooks, agents, and chat sessions alongside existing Claude Code support.

6. **[#33425 — Refresh host skill catalogs through world state](https://github.com/openai/codex/pull/33425)**
   - Host skills can now be updated mid-thread without reinjecting unchanged catalogs every turn, improving efficiency for evolving development environments.

7. **[#33411 — Migrate plugin commands into skills on install](https://github.com/openai/codex/pull/33411)**
   - Converts plugin command Markdown definitions into generated skills automatically during installation, streamlining plugin integration.

8. **[#29500 — Support permissions-scoped exec rules](https://github.com/openai/codex/pull/29500)**
   - Exec policy rules now respect active permissions profiles (managed, sandbox, custom), preventing global command approval rules from applying incorrectly.

9. **[#33373 — Render TUI prompts before submitting user turns](https://github.com/openai/codex/pull/33373)**
   - UX improvement: shows submitted prompt text immediately in TUI rather than leaving input invisible during remote work wait times.

10. **[#33369 — Scan skill roots concurrently](https://github.com/openai/codex/pull/33369)**
    - Performance optimization: scans up to 8 skill roots in parallel, with capacity sharing between host-skill and plugin-skill loads to bound filesystem I/O.

## Feature Request Trends

The most persistent feature demand cluster centers on **user control over AI timing** — particularly the ability to disable or extend the 60-second auto-resolve for AI questions (issues #28969, #29702). Users want to decide when a question remains open, especially in complex multi-step workflows.

A second major trend is **multi-chat/multi-agent UX improvements**: simultaneous chat display (#13036), subagent model selection (#31814), and better agent lifecycle visibility. The community is clearly moving toward orchestrating multiple agents and needs the UI to keep up.

**Cross-IDE and cross-tool migration** is also emerging: the addition of Cursor support in PR #33426 shows demand for seamless transitions between developer environments without losing configuration.

## Developer Pain Points

**Windows platform stability** remains the single largest recurring frustration:
- Crash-loops on ARM64 (#33381, #33415)
- General sluggishness even on high-end hardware (#20214, #23198)
- Serialport addon failures on both x64 and ARM64 (#33375, #33381)
- Anti-virus false positives from Microsoft Defender and Norton (#30527, #32331)
- Chat history disappearing from sidebar post-reboot (#27408, #27309)
- Git writes blocked by sandbox ACLs (#32880)

**Subagent and model selection** is another persistent pain point: GPT-5.6 Sol forces subagents to its own model (#31814), `wait_agent` can block for hours (#24951), and premature turn completion after progress messages (#27352) breaks workflow continuity. The community clearly needs more granular control over agent orchestration.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-16

## Today's Highlights

Critical stability and security fixes dominate today's digest. A major PR landed to prevent **400 Bad Request errors** after cancelled tool calls—a long-standing user frustration. On the security front, a **shell variable expansion bypass** (tracking GHSA-wpqr-6v78-jr5g) was patched. The MCP `tools/list` discovery timeout was shortened to prevent 10-minute startup freezes when a server fails to respond. Meanwhile, the community continues to report reliability issues around **subagent termination logic** and **terminal scroll behavior**.

---

## Releases

**v0.52.0-nightly.20260715.gfa975395b**  
[Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260714.gfa975395b...v0.52.0-nightly.20260715.gfa975395b)

No detailed change summary provided; standard nightly release.

---

## Hot Issues

1. **#22323 — Subagent recovery after MAX_TURNS reported as GOAL success**  
   [Link](https://github.com/google-gemini/gemini-cli/issues/22323)  
   A `codebase_investigator` subagent returns `status: "success"` / `Termination Reason: "GOAL"` despite hitting max turn limits mid-analysis. This is a **critical correctness bug**—it silently hides interruptions from users. (Comments: 10, 👍: 2)

2. **#19873 — Leverage model's bash affinity via Zero-Dependency OS Sandboxing**  
   [Link](https://github.com/google-gemini/gemini-cli/issues/19873)  
   Proposes using Gemini 3's native bash capabilities with POSIX tools (`grep`, `cat`, `awk`). A significant **architectural direction** that could reduce dependency on heavy subagent frameworks. (Comments: 8, 👍: 1)

3. **#21409 — Generalist agent hangs forever**  
   [Link](https://github.com/google-gemini/gemini-cli/issues/21409)  
   Simple tasks (folder creation) trigger indefinite hangs when the generalist agent is invoked. Community workaround: blocking subagent delegation. **High severity** for daily workflow. (Comments: 7, 👍: 8)

4. **#24353 — Robust component level evaluations**  
   [Link](https://github.com/google-gemini/gemini-cli/issues/24353)  
   Epic tracking expansion from 76 behavioral eval tests to a structured component-level framework. Critical for **regression prevention** as the CLI ecosystem grows. (Comments: 7)

5. **#22745 — Assess AST-aware file reads, search, and mapping**  
   [Link](https://github.com/google-gemini/gemini-cli/issues/22745)  
   Investigating whether AST-aware tools can reduce turns from misaligned reads and improve codebase navigation precision. A **potential game-changer** for code understanding efficiency. (Comments: 7, 👍: 1)

6. **#25166 — Shell command gets stuck with "Waiting input" after completion**  
   [Link](https://github.com/google-gemini/gemini-cli/issues/25166)  
   Simple CLI commands hang post-execution, falsely reporting "Awaiting user input". **Reproducible and disruptive**—user reports multiple occurrences. (Comments: 4, 👍: 3)

7. **#26522 — Auto Memory retrying low-signal sessions indefinitely**  
   [Link](https://github.com/google-gemini/gemini-cli/issues/26522)  
   The memory extraction agent re-surfaces sessions it judged low-signal, causing infinite retries. Highlights **design flaw in the session processing state machine**. (Comments: 5)

8. **#21983 — Browser subagent fails in Wayland**  
   [Link](https://github.com/google-gemini/gemini-cli/issues/21983)  
   Linux users on Wayland are blocked from using the browser subagent. A **platform-specific pain point** affecting a significant segment of developers. (Comments: 4, 👍: 1)

9. **#22672 — Agent should stop/discourage destructive behavior**  
   [Link](https://github.com/google-gemini/gemini-cli/issues/22672)  
   Model uses `git reset`, `--force`, and other destructive commands when safer alternatives exist. A **safety and trust issue**—users want proactive guardrails. (Comments: 3, 👍: 1)

10. **#21968 — Gemini does not use skills and sub-agents enough**  
    [Link](https://github.com/google-gemini/gemini-cli/issues/21968)  
    Users report custom skills (e.g., Gradle, Git) are ignored unless explicitly requested. **Discovery and activation heuristics** need improvement. (Comments: 6)

---

## Key PR Progress

1. **#28410 — Shorten MCP tools/list discovery timeout**  
   [Link](https://github.com/google-gemini/gemini-cli/pull/28410)  
   Prevents 10-minute silent freezes at startup when an MCP server is unresponsive. **Critical UX fix** for MCP users. (Priority: p1)

2. **#28407 — Group cancelled tool responses to prevent 400 Bad Request**  
   [Link](https://github.com/google-gemini/gemini-cli/pull/28407)  
   Cancelling tool calls then sending a new message would break chat continuity entirely. **Merged today**—a top user win. (Status: CLOSED)

3. **#28403 — Block $VAR and ${VAR} variable expansion bypass**  
   [Link](https://github.com/google-gemini/gemini-cli/pull/28403)  
   Security fix for GHSA-wpqr-6v78-jr5g: attacker-controlled prompts could exfiltrate environment variables. **Essential security hardening**. (Priority: p1)

4. **#28319 — Enforce path trust check before environment loading (A2A server)**  
   [Link](https://github.com/google-gemini/gemini-cli/pull/28319)  
   Ensures workspace trust is validated before loading workspace-level environment variables. Sandboxes the task execution environment with `AsyncLocalStorage`.

5. **#28405 — Prevent scroll position jump during content updates**  
   [Link](https://github.com/google-gemini/gemini-cli/pull/28405)  
   Fixes #5009: users scrolling up to review output no longer get yanked back to the bottom. **Core UI polish**. (Priority: p1)

6. **#28406 — Apply modelIdResolutions to tool sub-agent model configs**  
   [Link](https://github.com/google-gemini/gemini-cli/pull/28406)  
   Fixes `INVALID_MODEL_ID` errors for API-key users without preview access to Gemini 3 Flash. **Brings parity between free and paid tiers**. (Priority: p1)

7. **#28164 — Limit recursive reasoning turns per single user request (15 max)**  
   [Link](https://github.com/google-gemini/gemini-cli/pull/28164)  
   Prevents infinite loops by capping reasoning depth. **Protects against runaway resource consumption**. (Status: Open, nudge sent)

8. **#28408 — Centralize dense payload detection in tool mapping**  
   [Link](https://github.com/google-gemini/gemini-cli/pull/28408)  
   Refactors UI to reduce awareness of backend data internals. Moves payload density logic to the mapping layer for cleaner separation.

9. **#28275 — Make direct GCP telemetry exporters optional**  
   [Link](https://github.com/google-gemini/gemini-cli/pull/28275)  
   Moves Google Cloud monitoring dependencies out of core runtime. **Reduces mandatory dependency footprint** for non-GCP users.

10. **#28305 — Add tool call formatter and integrate failure summaries (evals)**  
    [Link](https://github.com/google-gemini/gemini-cli/pull/28305)  
    Failed evals now print a compact timeline of tool calls with arguments and error details. **Improves debugging efficiency for eval writers**.

---

## Feature Request Trends

- **Memory System Robustness (3+ issues):** Auto Memory is under active re-engineering. Requests include deterministic redaction of secrets (#26525), quarantine of invalid patches (#26523), and halting infinite retries on low-signal sessions (#26522).
- **AST-Aware Code Understanding (2+ issues):** Strong interest in AST-based file reads, method-boundary navigation, and codebase mapping (#22745, #22746). The community sees this as the next frontier for reducing turn count and token waste.
- **Agent Self-Awareness & Observability (2+ issues):** Users want subagent trajectories visible via `/chat share` (#22598) and bug reports to include subagent context (#21763). The agent should understand its own CLI flags and configuration (#21432).
- **Subagent Adoption & Activation (2+ issues):** Despite having custom skills, users report the model rarely uses them unprompted (#21968). Better heuristics for skill/subagent selection are needed.

---

## Developer Pain Points

1. **Subagent reliability and predictability:** Hangs (#21409), incorrect success reporting (#22323), ignoring permissions (#22093), and ignoring configuration overrides (#22267) collectively erode trust in subagent delegation.
2. **Shell command execution issues:** Commands hang post-completion (#25166), get stuck at interactive prompts (#22465), or create messy temp scripts scattered across the workspace (#23571).
3. **Auto-scroll and terminal corruption:** Scroll jumps during content updates (#5009 fixed in PR #28405) and display corruption after exiting external editors (#24935) disrupt the reading experience.
4. **Scaling limits:** The CLI hits 400 errors with >128 tools (#24246), and MCP discovery can freeze for 10 minutes (#28410). Tool/agent scale tests are catching up to real-world usage patterns.
5. **Security and safety:** Users need stronger guardrails against destructive git operations (#22672) and better secret redaction in memory pipelines (#26525). The just-patched shell variable bypass (#28403) shows the attack surface is real.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-16

## Today's Highlights
Three incremental patch releases (v1.0.71-2 and v1.0.71-3) shipped with improvements to voice mode device management, canvas support for extensions, and better settings validation on startup. The community is heavily focused on MCP authentication issues, with multiple open threads about OAuth flows failing silently for third-party servers like Atlassian and Azure DevOps. The top-voted feature request remains 1M context window support for Claude Opus models, which continues to accumulate reaction momentum.

---

## Releases

**v1.0.71-3** (latest)
- Fixed: Invalid `settings.json` now shows a warning identifying the offending value instead of silently ignoring settings
- Fixed: `/terminal-setup` no longer skips setup on terminals without real kitty keyboard support

**v1.0.71-2**
- Added: `/voice devices` command to choose and persist microphone for voice mode
- Added: Ability to limit which built-in agents are available to tasks and subagents
- Added: Canvas support in CLI for extension-driven interactions
- Improved: `/chronicle cost-tips` recommendations with richer cost profiling

---

## Hot Issues

### 1. #223 — "Copilot Requests" permission missing for org-owned tokens
*Open · 31 comments · 76 👍*
Organizations cannot see the "Copilot Requests" permission when creating fine-grained tokens owned by an org, forcing reliance on user PATs in corporate environments contrary to security best practices.
🔗 github/copilot-cli Issue #223

### 2. #1477 — "Continuing autonomously (3 premium requests)" after model completion
*Closed · 11 comments · 18 👍*
Users report that autopilot mode continues consuming premium requests even after the model has apparently completed its task, raising concerns about unexpected billing and lack of transparency.
🔗 github/copilot-cli Issue #1477

### 3. #4024 — Voice mode ASR models fail silently (nemotron speech routing bug)
*Open · 8 comments · 0 👍*
All bundled speech-to-text models in `/voice` return empty transcriptions despite successful audio capture. The root cause appears to be a `MultiModalProcessor` routing bug for RNNT models in Foundry Local Core — a critical blocker for voice workflows.
🔗 github/copilot-cli Issue #4024

### 4. #4096 — Third-party MCP server shows "Connected" but tools missing from CLI sessions
*Open (triaged) · 5 comments · 2 👍*
After OAuth success in the app UI, Atlassian Remote MCP server tools never appear in spawned CLI sessions. The OAuth token appears not to bridge to CLI sessions, breaking the core MCP value proposition.
🔗 github/copilot-cli Issue #4096

### 5. #1979 — Remote session support for Copilot CLI (attach from mobile/browser)
*Closed · 4 comments · 53 👍*
A heavily upvoted feature request for the ability to attach to running CLI sessions remotely — users want parity with Claude Code's remote session feature for mobile and browser access.
🔗 github/copilot-cli Issue #1979

### 6. #4016 — BYOK (COPILOT_PROVIDER_*) still rejected in --acp mode
*Open · 2 comments · 3 👍*
Custom providers configured via environment variables work in normal mode but fail in `--acp` mode with authentication required errors — a regression that has resurfaced multiple times across versions 1.0.61–1.0.68.
🔗 github/copilot-cli Issue #4016

### 7. #4097 — apply_patch stores deleted binary in session history, permanently exceeding 5 MB limit
*Open · 2 comments · 1 👍*
When `apply_patch` deletes a large binary, the entire binary is stored as a textual diff in conversation history, causing subsequent requests to exceed CAPI's 5 MB limit. `/compact` fails to resolve the issue.
🔗 github/copilot-cli Issue #4097

### 8. #4053 — TUI hangs at "Loading: N skills" on NFS/GPFS filesystems
*Open (triaged) · 2 comments · 0 👍*
On Linux with networked filesystems, the TUI hangs indefinitely during startup due to a SIGCHLD race condition when spawning `which gh` subprocesses with 30+ concurrent threads. Blocks all usage on enterprise shared storage.
🔗 github/copilot-cli Issue #4053

### 9. #4038 — Non-interactive mode: late-connecting MCP server injects empty user message
*Open (triaged) · 2 comments · 0 👍*
When an MCP server with 7+ tools connects late, the CLI appends an empty user message after the real prompt, causing the model to hallucinate system prompt fragments instead of answering the user's actual question.
🔗 github/copilot-cli Issue #4038

### 10. #2785 — Support 1M context window for Claude Opus 4.7
*Closed · 1 comment · 62 👍*
The most-voted community request: parity with Claude Code's 1M context for Opus 4.7. Users report Claude Code shows "Opus 4.7 with 1M context" as default, while Copilot CLI remains at a smaller context window — a competitive gap.
🔗 github/copilot-cli Issue #2785

---

## Key PR Progress
*No pull requests were updated in the last 24 hours.*

---

## Feature Request Trends

**1. MCP Ecosystem Expansion** — The dominant request direction is deeper, more reliable MCP integration. Users want OAuth flows that actually complete (especially for Atlassian, Azure DevOps), pagination support for `tools/list`, interactive input variables for plugin configuration, and the ability to make the built-in research agent's MCP tools configurable.

**2. Context Window Parity** — Multiple high-vote requests (Issues #1395, #1610, #2785, #3102) demand 1M+ context windows for premium models, specifically Claude Opus 4.7. This is seen as a must-have competitive feature versus Claude Code.

**3. Remote & Mobile Sessions** — Issue #1979 (53 👍) calls for the ability to attach to running CLI sessions from mobile or browser, mirroring Claude Code's remote session feature. This would enable developers to check on long-running agent tasks away from their terminal.

**4. Persistent Context Indicators** — Users repeatedly request an always-visible token/context usage indicator (e.g., "45% context used" or "52k/128k tokens") in the CLI status bar, similar to what VS Code extensions provide.

**5. Sparse Checkout for Large Repos** — Issue #4145 proposes automatic sparse-checkout during session worktree creation to avoid full-checkout timeouts on large monorepos — a practical pain point for enterprise teams.

---

## Developer Pain Points

**MCP Authentication Labyrinth** — The most acute pain point this week. Multiple issues (#4084, #4085, #4086, #4089, #4017, #4096) describe OAuth flows that succeed in the app UI but fail to bridge tokens to CLI sessions. Servers show green "Connected" badges while providing zero tools. This is a systemic trust-breaking experience for anyone trying to integrate third-party MCP servers.

**Silent Failures & Lost Work** — Voice mode ASR failures (#4024) produce no errors despite empty transcriptions. Apply_patch binary deletions silently balloon session history beyond limits (#4097). Late-connecting MCP servers inject phantom empty messages (#4038). These "fail quietly" patterns erode developer confidence.

**Authentication Regression Cycles** — BYOK authentication in `--acp` mode (#4016) has been fixed and regressed multiple times across v1.0.61–1.0.68. The community is losing patience with authentication issues that reappear in new modes.

**NFS/GPFS Incompatibility** — Enterprise users on shared filesystems (#4053) cannot use the TUI at all due to a process-spawning race condition. This blocks deployment in corporate environments where home directories live on network storage.

**Input Handling Gaps** — Missing Readline shortcuts (#1069), whitespace collapsing in chat composer (#4136), and voice dictation lost when typing during finalization (#3896) make basic text interaction frustrating. These are quality-of-life issues that compound daily usage friction.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-16

## Today's Highlights
The community saw a notable push toward telemetry alignment and SDK maturity this week. PR #2500 is advancing the Python-side telemetry to match the TypeScript rewrite's schema, adding missing trace IDs for better observability. While no new releases dropped and no new issues were filed in the last 24 hours, the focus remains on infrastructure hardening and debugging tooling.

## Releases
No new releases in the last 24 hours.

## Hot Issues
*No issues were updated in the last 24 hours (total: 0 items).*  
The community's recent attention has been on PRs rather than new bug reports or feature requests.

## Key PR Progress
1. **#2500 [OPEN] feat(telemetry): align events with TS schema, add trace_id and missing events**  
   *Author: 7Sageer* | [PR Link](https://github.com/MoonshotAI/kimi-cli/pull/2500)  
   Aligns Python telemetry with the `agent-core-v2` TypeScript event registry. Adds `x-trace-id` header capture via `with_raw_response` for both streaming and non-streaming responses. Essential for end-to-end request tracing and debugging distributed agent workflows.

## Feature Request Trends
No new feature requests were filed in the last 24 hours. Based on recent prior activity, the community continues to request:
- **Multi-model provider support** (beyond Kimi, integrating OpenAI/Anthropic endpoints)
- **Agentic loop improvements** (persistent memory, multi-step tool calling)
- **Structured output schemas** (Pydantic/JSON mode for API responses)
- **Local-first operation** (offline caching, local model fallback)

## Developer Pain Points
No new pain points surfaced today. **Recurring themes from the past week** include:
- **Telemetry inconsistencies** between Python and TypeScript SDKs (being actively addressed by PR #2500).
- **Missing trace IDs** in streaming responses, making it difficult to correlate logs across services.
- **Lack of official documentation** for the TS SDK's event schema, requiring code-diving to port features to Python.
- **Unclear error propagation** from provider APIs, especially regarding rate limits and token exhaustion.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-16

## Today's Highlights

A new v1.18.2 patch ships today, reining in runaway subagents and improving Meta model reasoning. But the real story is a torrent of user backlash against the Desktop "new tab layout" — the Plan/Build mode toggle has disappeared for many, and tab titles are now unreadable. Dozens of duplicate reports and a cluster of related closed tickets suggest the team is already triaging the UX fallout.

## Releases

**v1.18.2** — [Release](https://github.com/anomalyco/opencode/releases/tag/v1.18.2)
- **Bugfix:** Subagents no longer launch nested sub-agents by default; configurable `subagent_depth` limit added when desired.
- **Bugfix:** Improved default reasoning depth for Meta models (Llama series).
- **Desktop improvement:** `Mod+N` added as a shortcut to open a new tab.

## Hot Issues

1. **#1764 — Vim motions in input box** [OPEN](https://github.com/anomalyco/opencode/issues/1764)  
   *34 comments, 172 👍* — A long-standing quality-of-life request. The author points to ClaudeCode as the reference implementation. With 172 upvotes, this is the community's most-wanted input UX improvement.

2. **#36936 — Tab titles don't fit on screen** [OPEN](https://github.com/anomalyco/opencode/issues/36936)  
   *14 comments, 11 👍* — A screenshot shows session titles truncated to illegibility in the new horizontal tab layout. User says reverting to v1.17 fixes it. High visibility signal that the new tab UI is not ready for prime-time.

3. **#36997 — New layout hides Plan/Build switching** [OPEN](https://github.com/anomalyco/opencode/issues/36997)  
   *9 comments, 2 👍* — Desktop v1.18.1's `newLayoutDesigns: true` causes the agent mode toggle to vanish entirely. Tab key also broken. Duplicates #37070, #37158, #37163, #37130 — this is the day's most-reported regression.

4. **#37070 — Plan/Build toggle missing from chat UI** [OPEN](https://github.com/anomalyco/opencode/issues/37070)  
   *9 comments, 10 👍* — Windows user confirms the toggle is gone post-update. Environment: v1.18.1, Windows. Community frustration is high; multiple closed issues suggest devs are actively merging reports.

5. **#34222 — GitHub Copilot MAI-Code-1-Flash inaccessible** [OPEN](https://github.com/anomalyco/opencode/issues/34222)  
   *8 comments, 9 👍* — Enterprise users with the new Microsoft MAI model get `/chat/completions` endpoint errors. The model "mai-code-1-flash-picker" is rejected despite org enablement. Affects Copilot Enterprise subscribers.

6. **#24038 — Claude support via ACP protocol** [CLOSED](https://github.com/anomalyco/opencode/issues/24038)  
   *6 comments, 6 👍* — User wants to use Claude Code subscription through the Agent Client Protocol. Closed today — likely means ACP support shipped or was deemed out of scope.

7. **#37171 — Desktop crash: "Notification server not found: wsl:Ubuntu"** [OPEN](https://github.com/anomalyco/opencode/issues/37171)  
   *3 comments* — Fresh crash on restart for WSL2 users. Stack trace points to notification service initialization before WSL server is registered. A PR (#37190) is already open to fix this.

8. **#37155 — AI agent can escalate permissions via opencode.json** [CLOSED](https://github.com/anomalyco/opencode/issues/37155)  
   *2 comments* — Security concern: since project config and security config live in the same file (`opencode.json`), the agent can modify its own permissions. Closed quickly — likely fast-tracked as a security fix.

9. **#35587 — Prompt leaks between sessions** [OPEN](https://github.com/anomalyco/opencode/issues/35587)  
   *3 comments* — User reports that arrow-up history recall crosses session boundaries. Privacy and usability issue; reproduced on v1.17.14.

10. **#37127 — GLM 5.2 garbled output (Chinese characters)** [CLOSED](https://github.com/anomalyco/opencode/issues/37127)  
    *2 comments* — Using OpenCode Go with GLM-5.2 produced a stream of repeated Chinese characters. Likely a tokenization or model routing bug. Closed swiftly.

## Key PR Progress

1. **#37141 — Normalize tool and attachment images at settlement** [OPEN](https://github.com/anomalyco/opencode/pull/37141)  
   Core fix: ensures all image-producing tools (MCP, plugin, codemode) resize inline images, not just the `read` tool. Prevents unbounded base64 inflation that kills session context. Targets V2.

2. **#37181 — Select system prompts through plugins** [OPEN](https://github.com/anomalyco/opencode/pull/37181)  
   Major refactor: moves per-provider system prompts (OpenAI, Anthropic, Google, etc.) into granular built-in plugins. Keeps runner default agnostic. Removes "Beast" prompt, restores V1 Muse Spark prompt.

3. **#37192 — Support dynamic Effect tools in plugins** [OPEN](https://github.com/anomalyco/opencode/pull/37192)  
   Enables V2 Effect plugins to register tools without importing the host's `Tool.make`. Breaks the tightly-coupled import dependency for external plugins.

4. **#37190 — Handle unavailable WSL notification server** [OPEN](https://github.com/anomalyco/opencode/pull/37190)  
   Direct fix for issue #37171. Adds a fallback notification state so the renderer can continue loading when WSL server connection isn't ready.

5. **#36752 — Read cache write tokens from raw usage** [OPEN](https://github.com/anomalyco/opencode/pull/36752)  
   Fixes a billing bug: Anthropic models via OpenAI-compatible gateways always recorded `cache.write: 0`, making cache writes appear free.

6. **#36850 — Normalize Cloudflare Workers AI mixed content types** [OPEN](https://github.com/anomalyco/opencode/pull/36850)  
   Fixes #30381. Cloudflare Workers AI rejects requests where `content` types are inconsistent across messages. Now normalizes all message content arrays.

7. **#32481 — Fix TUI auth token for editor port from env** [CLOSED](https://github.com/anomalyco/opencode/pull/32481)  
   Fixes editor file/selection context sync when OpenCode runs inside VS Code / Cursor. Closes two issues (#29570, #26852). Merged today.

8. **#32480 — Surface MCP tool progress** [CLOSED](https://github.com/anomalyco/opencode/pull/32480)  
   Turns MCP progress notifications into OpenCode's running-tool progress surface. Part of the ongoing MCP reliability push.

9. **#32458 — Make plan mode default** [CLOSED](https://github.com/anomalyco/opencode/pull/32458)  
   Removes the experimental flag gating for plan mode. Plan/Build is now the default UX — which may explain why users are so frustrated when the toggle disappears.

10. **#32470 — Fix TUI truncation by display width** [CLOSED](https://github.com/anomalyco/opencode/pull/32470)  
    Uses `Bun.stringWidth` for grapheme-aware label truncation. Fixes #23376 — a long-standing TUI rendering issue with wide characters.

## Feature Request Trends

- **Vim/Modal Editing:** #1764 (172 👍) demands vim keybindings in the input box. No other feature request comes close in popularity.
- **Vertical Tabs:** #36942 (5 👍) asks for vertical tab layout to complement the hated new horizontal tabs.
- **Per-Session MCP Selection:** #37168 proposes `serve`/`attach`-level MCP toggle control, suggesting multi-client server setups are becoming common.
- **Auto-Generated Session Titles:** #30926 wants dynamic titles instead of "New session" stubs — a small UX win for tab navigation.
- **Image Attachment Display:** #21227 (7 👍) asks for rendered images in chat from tool results (webfetch, MCP). Directly addressed by PR #37141.

## Developer Pain Points

- **Plan/Build Toggle Vanished (Regrexit):** The #1 pain point today. At least five open/closed issues (#36997, #37070, #37158, #37163, #37130) and two more in Portuguese/Chinese (#37146, #37143) all report the same thing: the new tab layout hides the agent mode switch. Users feel trapped "in plan mode" with no escape.
- **New Tab Layout Breaks Visibility:** #36936 has users unable to read session titles. Combined with the toggle issue, the "tabs version" (v1.18.x) is widely seen as a downgrade.
- **WSL2 Notification Crash:** #37171 crashes the desktop app on restart for WSL users. A targeted fix is coming in #37190.
- **Prompt History Leakage:** #35587 reports cross-session command history contamination. Low volume but concerning for privacy.
- **Hotkey Conflicts:** `Ctrl+P` unresponsive (#37165), `Ctrl+R` reloads instead of opening project (#37151) — the new tab UI broke keyboard shortcut mappings.
- **Security Config in Project File:** #37155 (closed) highlights that `opencode.json` conflates user preferences with agent permissions, allowing privilege escalation. Expect hardening here.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-16

## Today's Highlights
A wave of **OpenAI Codex reliability issues** continues to dominate discussion, with **#4945** (75 comments) reporting persistent TUI hangs, while a related **#6673** reveals Cloudflare 520 responses leaking user IPs. On the fix side, **#6681** landed to restore Windows terminal titles broken by npm version checks, and **#6651** proposes adding xAI device OAuth for Grok-4.5. The community is also pressing for **session management improvements** (#6674) and **ephemeral model changes** (#5263).

## Releases
No releases in the last 24 hours.

## Hot Issues
1. **[#4945 — openai-codex Connection Reliability Issues](https://github.com/earendil-works/pi/issues/4945)** (75 comments, 👍30)  
   *OpenAI Codex/gpt-5.5 leaves TUI stuck on “Working…” with no output. Requires pressing Escape to recover.*  
   **Why it matters:** This is the top-voted open issue — core usability is broken for a major provider. The 75 comments indicate widespread frustration.

2. **[#6050 — TUI full redraw clears terminal scrollback during active rendering](https://github.com/earendil-works/pi/issues/6050)** (14 comments)  
   *Terminal scrollbar jumps to chat beginning during rendering. Root cause in core TUI renderer.*  
   **Why it matters:** Affects all users during long sessions. Closed as “no-action” but the community keeps hitting it.

3. **[#5263 — Make in-session model and thinking-level changes ephemeral by default](https://github.com/earendil-works/pi/issues/5263)** (7 comments, 👍7)  
   *Proposes that `/model` and thinking changes only affect the active session, with a “Default model” picker in `/settings`.*  
   **Why it matters:** High community alignment (7👍) — users want persistent config separate from session tweaks.

4. **[#6303 — Exponential retry backoff has no cap](https://github.com/earendil-works/pi/issues/6303)** (7 comments, 👍1)  
   *`getRetrySettings()` returns `baseDelayMs` but not `maxDelayMs`, causing attempt 7 to wait ~4 minutes.*  
   **Why it matters:** A clear config gap that can cause multi-minute stalls on transient failures.

5. **[#6657 — Bedrock AWS_PROFILE authentication not working](https://github.com/earendil-works/pi/issues/6657)** (5 comments, 👍2)  
   *Bedrock requests using `AWS_PROFILE` fail with 403 despite 0.80.7 claiming a fix.*  
   **Why it matters:** Regression or incomplete fix for a key enterprise provider.

6. **[#6619 — Windows dependent extensions show absolute path in banner](https://github.com/earendil-works/pi/issues/6619)** (4 comments)  
   *npm-installed extensions on Windows mislabel dependent extensions with absolute paths.*  
   **Why it matters:** Windows UX degradation that makes extension listings unusable.

7. **[#6673 — OpenAI Codex exposes raw Cloudflare 520 HTML including client IP](https://github.com/earendil-works/pi/issues/6673)** (3 comments)  
   *When Codex returns a 520, entire HTML including user exit IP is stored in session JSONL.*  
   **Why it matters:** **Privacy vulnerability** — user IPs leak into session data.

8. **[#6686 — Pi automatically logs out of GitHub](https://github.com/earendil-works/pi/issues/6686)** (3 comments)  
   *Regressed issue #2725: automatic logout after 15-30 minutes with “No API key for provider: github-copilot” error.*  
   **Why it matters:** Recurring authentication stability issue affecting Copilot users.

9. **[#6665 — TUI pins a full core while streaming](https://github.com/earendil-works/pi/issues/6665)** (2 comments)  
   *100% CPU usage during streaming due to uncached `Intl.Segmenter` and per-chunk Markdown rebuild.*  
   **Why it matters:** Performance regression for long sessions — battery and thermal impact.

10. **[#6652 — Crash log hardcodes ~/.pi/agent/pi-crash.log](https://github.com/earendil-works/pi/issues/6652)** (2 comments)  
    *`PI_CODING_AGENT_DIR` environment variable is ignored for crash logs, creating spurious `.pi` directories.*  
    **Why it matters:** Conflicts with custom config directory setups.

## Key PR Progress
1. **[#6651 — feat(ai): add xAI device OAuth and route grok-4.5 through Responses](https://github.com/earendil-works/pi/pull/6651)**  
   *Adds device-code OAuth alongside `XAI_API_KEY`. Routes grok-4.5 through Responses with configurable reasoning.*  
   **Why it matters:** Opens xAI’s newest model to Pi users with OAuth convenience.

2. **[#6681 — windows: reset pi terminal title after checking npm packages](https://github.com/earendil-works/pi/pull/6681)** *(CLOSED)*  
   *Narrow fix for #6629 — restores terminal title changed by npm view commands.*  
   **Why it matters:** Directly addresses a reported Windows UX regression.

3. **[#6671 — add usage info to branch summary, compaction and tool result entries](https://github.com/earendil-works/pi/pull/6671)**  
   *Adds usage metadata to compaction, branch summarization, and tool result entries.*  
   **Why it matters:** Improves cost tracking and debugging for heavy users.

4. **[#6683 — fix(coding-agent): accept colon-qualified skill names](https://github.com/earendil-works/pi/pull/6683)** *(CLOSED)*  
   *Fixes false `[Skill conflicts]` warnings for plugin-namespaced skills like `inc:ship-it`.*  
   **Why it matters:** Unblocks plugin developers using namespaced skill names.

5. **[#6594 — feat: sqlite session storage](https://github.com/earendil-works/pi/pull/6594)**  
   *Adds `retainedTail` to compaction entries and changes `getPathToRoot` to stop at last compaction.*  
   **Why it matters:** Performance optimization for large session graphs.

6. **[#6680 — parse extension package name in case of dependent extension](https://github.com/earendil-works/pi/pull/6680)**  
   *Partial fix for #6619 — improves Windows extension display names.*  
   **Why it matters:** Ongoing Windows polish effort.

7. **[#6533 — fix: Codex compaction returns “Model not found” for gpt-5.6-luna](https://github.com/earendil-works/pi/pull/6533)** *(CLOSED)*  
   *Fixes 404 during compaction through Codex API due to model ID mapping mismatch.*  
   **Why it matters:** Unblocks compaction for users on the latest model tier.

8. **[#6216 — feat: Add Amazon Bedrock Mantle OpenAI Responses provider](https://github.com/earendil-works/pi/pull/6216)**  
   *New provider for Bedrock Mantle’s OpenAI-compatible Responses API via `openai` Node SDK.*  
   **Why it matters:** Expands AWS enterprise integration with full OpenAI API compatibility.

9. **[#6667 — fix(tui): guard null children in Box and Container render/invalidate](https://github.com/earendil-works/pi/pull/6667)** *(CLOSED)*  
   *Null guards prevent crashes after extension installs/removes leave stale references.*  
   **Why it matters:** Fixes `TypeError: Cannot read properties of undefined` crashes in TUI.

10. **[#6659 — fix(openai-codex): clamp session-id header to 64 chars like prompt_cache_key](https://github.com/earendil-works/pi/pull/6659)** *(CLOSED)*  
    *Clamps session-id and x-client-request-id headers to 64 chars to match Codex backend validation.*  
    **Why it matters:** Prevents silent request failures on long session IDs.

## Feature Request Trends
- **Session management** (#6674, #5263): Strong demand for browsing, renaming, archiving, and folder-based organization of sessions, plus ephemeral model changes that don’t touch global config.
- **Enterprise auth** (#6651, #6216): Growing interest in OAuth flows (xAI, Bedrock Mantle) alongside existing API-key patterns.
- **Extensions API improvements** (#6684, #6687): Users want to read/write native retry settings and access event types like `ToolExecutionEndEvent` from extension index exports.
- **UI/UX polish** (#6682, #6688): Requests for bordered code blocks (not literal fences) and viewport-windowed option selectors.

## Developer Pain Points
- **OpenAI Codex instability (#4945, #6673, #6685)**: Multiple issues — TUI hangs, IP leak via Cloudflare 520, and intermittent tool-call drops — collectively the most painful area.
- **Authentication/credential leaks (#6689, #6686)**: `OPENAI_API_KEY` silently overriding Codex OAuth, and persistent GitHub logout — trust and reliability are eroding.
- **Windows UX (#6619, #6629, #6596)**: Absolute paths in extension listings, terminal title corruption, and `taskkill` ENOENT on Node.js 24 make Windows a second-class experience.
- **CPU/memory performance (#6665, #6647)**: Unbounded Intl.Segmenter usage and compaction fragility under transient failures degrade long-session usability.
- **Regression tracking (#6657, #6686)**: Issues “fixed” in 0.80.7 still reproducing (Bedrock auth, GitHub logout) indicate incomplete or insufficiently tested patches.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-16

## Today's Highlights
Two nightly releases shipped today, including `v0.19.10-nightly` and a `v0.19.9-preview` build, alongside the first stable `cua-driver-rs v0.7.2` with cross-platform relative-coordinate support. Multi-workspace daemon support emerged as the dominant design conversation (Issue #6378, 23 comments), while the team aggressively closed 25+ CI flakiness and bug issues. A notable security patch landed for MCP tool trust validation (PR #6895), and the new "Todo stop guard" feature for daemon sessions (PR #6945) signals deeper background automation capabilities.

## Releases
- **v0.19.10-nightly.20260715.c538bd70d** ([view](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.10-nightly.20260715.c538bd70d)): Nightly build with documentation scope capping for PR reviews and workspace path locking for the web-shell.
- **v0.19.9-preview.0** ([view](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.9-preview.0)): Preview release containing the same review-scope cap and workspace path lock improvements.
- **cua-driver-rs-v0.7.2** ([view](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.7.2)): Vendored CUA driver binaries with relative-coordinate fork. **macOS** provides a notarized universal binary + `.app` bundle; **Linux** ships unsigned x86_64/arm64 (glibc 2.31+); **Windows** ships unsigned x86_64/arm64. Enable relative coordinates in config to use.

## Hot Issues (Top 10 by Activity)

1. **[#6378] RFC: Support multiple workspaces in one `qwen serve` daemon** ([link](https://github.com/QwenLM/qwen-code/issues/6378))  
   *23 comments, 9 days old* — The most active discussion of the digest. Author `doudouOUC` proposes extending the current 1-daemon=1-workspace model to N workspaces, preserving backward compatibility. The community is debating session isolation, MCP resource boundaries, and health-check aggregation. This directly feeds PR #6961 (deep health) and PR #6954 (workspace MCP management).

2. **[#4782] ACP Streamable HTTP transport implementation status** ([link](https://github.com/QwenLM/qwen-code/issues/4782))  
   *Tracking issue, 42 days old* — Documents the new `/acp` endpoint enabling Zed, Goose, and JetBrains to connect without adapters. Several sub-items were closed recently, indicating rapid progress on agent-client protocol conformance.

3. **[#6928] GitHub App authentication not injected into new workspaces** ([link](https://github.com/QwenLM/qwen-code/issues/6928))  
   *5 comments, filed today* — New workspaces from private GitHub repos mount correctly but lack GitHub auth. The user `loreley546` provided detailed diagnostics showing the app is installed but tokens aren't propagated. Core team labeled `need-information` — likely a workspace-initialization ordering bug.

4. **[#5239] Subagent-to-main-session communication is weak** ([link](https://github.com/QwenLM/qwen-code/issues/5239))  
   *4 comments* — Community member `wunan067830-west` reports that sub-agents can fail without notifying the parent session. The workaround (watching a file for writes) is fragile. This is tagged for the multi-agent roadmap and aligns with PR #6984 (per-model sub-agent concurrency limits).

5. **[#6936] `isManagedMemoryAvailable()` ignores `enableManagedAutoMemory` setting** ([link](https://github.com/QwenLM/qwen-code/issues/6936))  
   *3 comments, filed today* — A 7–9 KB memory instruction block is injected into the system prompt even when managed memory is disabled. `Aleks-0` traced the gate mismatch in `packages/core/src/config/`. Tagged `welcome-pr` — an easy fix for contributors.

6. **[#6857] `/update` reports "up to date" on v0.19.9 when v0.19.10 is available** ([link](https://github.com/QwenLM/qwen-code/issues/6857))  
   *Bot-reported, closed* — The update-check logic uses npm registry but version-comparison was broken. Fixed and closed today.

7. **[#6938/6940/6979] Main CI failures: E2E Tests** ([links](https://github.com/QwenLM/qwen-code/issues/6938) [x3](https://github.com/QwenLM/qwen-code/issues/6940) [related](https://github.com/QwenLM/qwen-code/issues/6979))  
   *Multiple bot-created issues* — A cluster of CI failures hit `main` today. Issues #6933, #6935, #6938, #6940, #6966, #6979 all report E2E test failures on different commits. The `autofix/in-progress` label on several suggests the team is actively addressing flaky tests, with PR #6985 widening timeouts.

8. **[#6970] MCP tool names with dots rejected by OpenAI/Anthropic providers** ([link](https://github.com/QwenLM/qwen-code/issues/6970))  
   *2 comments* — Some MCP servers publish names like `literature.search_pubmed`. Qwen Code registers them as `mcp__zybio__literature.search_pubmed`, which passes Gemini but fails stricter providers. A name-sanitization fix is needed.

9. **[#6943] Feature Request: "auto" output language mode** ([link](https://github.com/QwenLM/qwen-code/issues/6943))  
   *2 comments* — User `pedh` points out that the hardcoded `output-language.md` with "MUST" wording locks output to one language. An "auto" mode would let the LLM follow the user's input language dynamically.

10. **[#6927] Safety classifier deadlock under `tools.approvalMode = "auto"`** ([link](https://github.com/QwenLM/qwen-code/issues/6927))  
    *2 comments* — The classifier blocks every approval-requiring tool (`run_shell_command`, `write_file`, etc.), creating a deadlock where even changing settings is blocked. PR #6929 (`tool_choice` fix in `generateJson`) is the proposed solution.

## Key PR Progress (Top 10)

1. **[#6975] CI: Daemon A/B before/after preview on response-surface PRs** ([link](https://github.com/QwenLM/qwen-code/pull/6975))  
   *New, open* — Extends the visual diff approach to backend endpoints. Builds CLI from both PR base and head, drives endpoints, and diffs JSON responses. Will catch regressions in daemon API responses automatically.

2. **[#6969] Bounded daemon log rotation** ([link](https://github.com/QwenLM/qwen-code/pull/6969))  
   *New, open* — Gives `qwen serve` logs a stable path (`debug/daemon/daemon.log`) with 10 MiB active + 4 archives. Each record carries a random `runId` and PID. Clean operational hygiene for long-running daemons.

3. **[#6971] Color-code web-shell split panes by workspace** ([link](https://github.com/QwenLM/qwen-code/pull/6971))  
   *New, open* — Each split-view pane gets a colored header tag with workspace basename. Improves readability on narrow/mobile layouts. Anticipates multi-workspace UI.

4. **[#6967] Require explicit approval to exit Plan mode** ([link](https://github.com/QwenLM/qwen-code/pull/6967))  
   *New, open* — Prevents accidental plan abandonment by requiring user confirmation before leaving Plan mode. Behavioral safety improvement for the planning workflow.

5. **[#6963] Web-shell before/after visual previews** ([link](https://github.com/QwenLM/qwen-code/pull/6963))  
   *New, open* — Upgrades the visual-preview bot from fixed screenshots to pixel-diffed "before/after" comparisons showing only changed views. Will speed up UI review cycles.

6. **[#6950] Preserve channel startup failure details** ([link](https://github.com/QwenLM/qwen-code/pull/6950))  
   *New, open* — Propagates per-channel `connect()` failures (credential-redacted) through daemon IPC, status endpoints, and CLI commands. Essential for debugging channel issues in production.

7. **[#6954] Add workspace MCP management** ([link](https://github.com/QwenLM/qwen-code/pull/6954))  
   *New, open* — Introduces workspace-scoped MCP configuration from the web-shell, with typed SDK operations. An enabler for multi-workspace daemon mode.

8. **[#6486] Add model toggle hotkey (Ctrl+F)** ([link](https://github.com/QwenLM/qwen-code/pull/6486))  
   *8 days old, open* — Lets users switch between current and alternate model instantly via a hotkey. Persists across turns with a header indicator. A quality-of-life feature for model comparison.

9. **[#6895] Propagate trusted invocation context** ([link](https://github.com/QwenLM/qwen-code/pull/6895))  
   *In review* — Introduces `InvocationContextV1` carrying ingress source, session ID, root prompt, and validated daemon client. Security foundation for tracking trust across CLI, ACP, channels, and scheduler.

10. **[#6984] Per-model sub-agent concurrency limits** ([link](https://github.com/QwenLM/qwen-code/pull/6984))  
    *New, open* — Adds `agents.maxParallelAgentsByModel` to cap background agents per concrete model ID. Complements the global `agents.maxParallelAgents`. Addresses rate-limit management for multi-agent workflows.

## Feature Request Trends
- **Multi-workspace daemon architecture** (#6378, #6961, #6954): The dominant theme — extending `qwen serve` from 1:1 to 1:N workspace ratio. Related PRs for health aggregation, workspace-scoped MCP, and color-coded UI indicate this is a top roadmap priority.
- **Background automation and continuation** (#6946, #6945): The "Todo stop guard" allows daemon sessions to auto-continue work chains after pending todos. Users want sub-agent lifecycle notifications (#5239) and bounded auto-continuation to reduce manual re-prompting.
- **Channel improvements**: DingTalk interactive cards (#6443) and single-chat webhook delivery (#6883) show demand for richer, two-way messaging integrations beyond basic group chat.
- **Input-aware output language** (#6943): A recurring UX pain — users want the LLM to match their input language rather than being locked to a fixed setting.
- **MCP tool name sanitization** (#6970): As MCP ecosystem grows, strict provider compatibility (dots in names) needs automatic normalization.

## Developer Pain Points
- **CI flakiness**: 5+ bot-created issues today report `E2E Tests` failures on `main`. Root causes include cron-interactive timing (#6982), SDK test timeouts (#6985), and unlabeled CI infrastructure variability. The team is actively widening timeouts and scoping build steps.
- **Security/trust issues**: At least 3 bugs reported today involve trust-state mutation (#6831), MCP `readOnlyHint` bypass (#6917), and safety classifier deadlocks (#6927). Trust evaluation logic appears fragile.
- **Fractional/invalid settings accepted** (#6914, #6936): Settings validation accepts fractional session turns and ignores managed-memory toggles, causing silent runtime misbehavior.
- **Feature discoverability and defaults**: Users consistently report surprise when features (managed memory, language lock, model toggle) don't behave as expected, suggesting documentation gaps or unintuitive defaults.
- **Collaboration tool quirks**: WeCom group messages dropped (#6939) and DingTalk single-chat missing (#6883) highlight inconsistencies in channel protocol implementations. The "mention" abstraction doesn't map cleanly across platforms.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-16

## Today's Highlights
The community saw a burst of **5 new issues** in the last 24 hours, focused on TUI usability gaps and reliability bugs. Notably, a **closed PR (#4372)** landed a fix for the long-standing skill inline-task-discard bug, resolving issue #3915. A new **TelecomJS provider PR (#4370)** is open, aiming to fix model catalog refresh for custom providers.

## Releases
No new releases in the last 24 hours.

## Hot Issues (5 of 5 items found)

1. **#4375 — Suggestion: show explanation when session denied cache auto-rejects an approval**  
   *Author: Angel-Hair* | [Link](https://github.com/Hmbown/CodeWhale/issues/4375)  
   **Why it matters:** In YOLO mode, users silently get "Tool 'exec_shell' denied by user" without context. The denial cache is opaque — users forget why they rejected a command earlier. This hurts trust in the session cache and leads to accidental lockout.  
   **Community reaction:** 1 comment, 0 👍 — early discussion, likely to gain traction.

2. **#4374 — goal continuation skips user confirmation gate**  
   *Author: Angel-Hair* | [Link](https://github.com/Hmbown/CodeWhale/issues/4374)  
   **Why it matters:** `/goal` persistence loop overrides user-asked questions (e.g., "does this look good?") by injecting the continue prompt. The `blocked` status description is the root cause — it labels a wait-for-user as a "real blocker". This breaks interactive decision points during agent runs.  
   **Community reaction:** 1 comment; a clear edge case that affects longer TUI sessions.

3. **#4373 — `remember` tool missing from `DEFAULT_ACTIVE_NATIVE_TOOLS` whitelist**  
   *Author: Angel-Hair* | [Link](https://github.com/Hmbown/CodeWhale/issues/4373)  
   **Why it matters:** The `remember` tool (user-memory auto-capture) is registered but **invisible to the model** due to `apply_native_tool_deferral`. Models must discover it via `tool_search` instead of it being in the default catalog — severely limiting memory feature adoption.  
   **Community reaction:** 1 comment; impacts all users with `[memory] enabled = true`.

4. **#3915 (CLOSED) — `$skill <task>` and `/<skill> <task>` silently discard the task text**  
   *Author: Hmbown* | [Link](https://github.com/Hmbown/CodeWhale/issues/3915)  
   **Why it matters:** This long-standing UX bug forced users to retype their request after using inline skill syntax. Now fixed by PR #4372.  
   **Community reaction:** Closed with PR; significant QoL improvement for power users.

5. **#4371 — Allow scrolling/reviewing reasoning output while approval dialog is active (TUI)**  
   *Author: amuthantamil* | [Link](https://github.com/Hmbown/CodeWhale/issues/4371)  
   **Why it matters:** When an approval dialog pops up over a long chain-of-thought, users cannot scroll back to verify the reasoning before approving/rejecting. This is a critical TUI ergonomic gap for agent workflows.  
   **Community reaction:** 1 comment; strongly upvoted in spirit — expect follow-up.

## Key PR Progress (2 of 2 items found)

1. **#4372 (CLOSED) — fix(skills): preserve inline task text**  
   *Author: nightt5879* | [Link](https://github.com/Hmbown/CodeWhale/pull/4372)  
   **Summary:** Fixes the core bug in #3915. Now `$<skill> do X`, `/<skill> do X`, and `/skill <skill> do X` all dispatch the trailing task text in the same turn. `$<skill>` bare activation stays armed for the next message. The `install` skill literal is preserved alongside `/skill install` management command.  
   **Impact:** resolves a high-frustration UX issue; merged.

2. **#4370 (OPEN) — feat: add TelecomJS provider support with configuration and catalog integration**  
   *Author: baendlorel* | [Link](https://github.com/Hmbown/CodeWhale/pull/4370)  
   **Summary:** Registers TelecomJS (Telecom JiangSu) as a custom provider. Root cause: `refresh_catalog_cache`/`fetch_catalog_delta` is never called in production, so the model picker only shows 1 model instead of the full `/v1/models` response.  
   **Impact:** Enables multi-model selection for TelecomJS users; also highlights a broader catalog caching bug.

## Feature Request Trends
- **Approval dialog UX**: Users want to review reasoning output while the approval dialog is active (#4371).
- **Session denial transparency**: Requesting a "reason explanation" when the cache auto-rejects a tool call to avoid silent lockout (#4375).
- **Goal persistence respect for user interaction**: Prevent `/goal` loop from overriding user confirmation gates (#4374).

## Developer Pain Points
- **Memory tool invisibility**: The `remember` tool is registered but silently deferred from the model's view — a reliable memory stack exists but is gated behind `tool_search` (#4373).
- **Provider catalog refresh broken**: Custom providers (like TelecomJS) show only one model because `refresh_catalog_cache` is never invoked (#4370).
- **Skill inline syntax silent failures**: Fixed in #4372, but the bug persisted for ~2 weeks, causing user frustration.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kky-wollu/agents-radar).*