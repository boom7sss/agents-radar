# AI CLI Tools Community Digest 2026-07-11

> Generated: 2026-07-11 01:12 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem Cross-Tool Comparison Report — 2026-07-11

## 1. Ecosystem Overview
The AI CLI developer tools landscape is maturing rapidly, with nine major tools now competing across model providers and use cases. Windows stability and TUI reliability remain cross-cutting pain points, while sub‑agent orchestration, MCP integration, and multi‑workspace support are emerging as key differentiators. Community activity is high, with Claude Code and OpenAI Codex leading in volume, but tools like OpenCode and DeepSeek TUI are gaining momentum through rapid iteration. Model switching flexibility and reasoning level control (e.g., `ultra`, `max`) are now base expectations, not features.

## 2. Activity Comparison (last 24 hours)
| Tool                | Hot Issues Listed | PRs Updated | New Releases | Key Release Highlights |
|---------------------|-------------------|-------------|--------------|------------------------|
| **Claude Code**     | 10                | 6           | 2 minor      | Auto mode default on Bedrock/Vertex; `/doctor` check |
| **OpenAI Codex**    | 10                | 10          | 2 alpha      | Rust-based alpha releases; retry model capacity errors |
| **Gemini CLI**      | 10                | 10          | 1 nightly    | Thought-leakage fix; exclude CI configs |
| **GitHub Copilot CLI** | 10             | 1           | 1 patch      | Pinned prompts; redesigned settings dashboard |
| **Kimi Code CLI**   | 0                 | 4           | 0            | — |
| **OpenCode**        | 10                | 10          | 0            | — (V2 TUI polish, Copilot OAuth porting) |
| **Pi**              | 10                | 10          | 0            | — (ultra thinking level, OpenRouter session affinity) |
| **Qwen Code**       | 10                | 10          | 1 stable + 1 nightly | v0.19.9 stops subagent loops; Web Shell improvements |
| **DeepSeek TUI**    | 10                | 10          | 1 major      | v0.8.68: Fleet/Workflow/Lane/Runtime, Android Termux |

*Note: Hot Issues listed is the number featured in each digest (typically top 10). PRs count includes all updated in last 24 hours per digest.*

## 3. Shared Feature Directions
Several requirements appear across multiple tool communities:

- **Multi‑agent orchestration & sub‑agent transparency** — Claude Code (ESC kills all agents, #21167), OpenAI Codex (subagent model selection, #31814), Gemini CLI (false success reports, #22323), DeepSeek TUI (Fleet/Workflow/Lane model). Users demand better visibility, control, and reliability.
- **Model flexibility & reasoning levels** — OpenAI Codex, Pi, GitHub Copilot CLI, and Gemini CLI all see requests for BYOK, mid‑session model switching, and explicit reasoning level (e.g., `xhigh`, `ultra`, `max`). The era of fixed models is ending.
- **Windows TUI stability** — Claude Code (#14828, #74649), OpenAI Codex (#20214, #16374), GitHub Copilot CLI (#4069, #4077), Pi (#6300), and OpenCode (#35828) all report console flashing, input deadlocks, or shell freezing on Windows/WSL2. Cross‑tool platform gap.
- **MCP / OAuth integration robustness** — Claude Code (Chrome MCP popups, #49979), GitHub Copilot CLI (Atlassian MCP OAuth, #4089), Qwen Code (HTTP MCP OAuth recovery, #6639). Auth handshake and tool discovery are inconsistent.
- **Data loss prevention** — Claude Code (dropped text blocks, #74260; unbounded task output, #41737), Gemini CLI (thought‑leakage fix), OpenCode (conversation persistence miscommunication, #36326). Trust in conversation records is fragile.
- **Session & resource management** — Claude Code (Max session limits, #38335), OpenAI Codex (rate‑limit resets wasted, #31606), Gemini CLI (Auto Memory retry loops, #26522). Users want predictable billing and resource caps.

## 4. Differentiation Analysis
- **Claude Code** — Deepest community engagement (792 comments on session limits). Focus on auto‑mode, `/doctor`, and Windows parity lagging. Ecosystem of plugins and hooks but facing trust crisis over session caps.
- **OpenAI Codex** — Fast iteration on new models (GPT‑5.6 Sol/Terra/Luna). Strong Rust‑based alpha releases, subagent environment control (PR #31662), and security hardening. However, regressions with local providers (Ollama) and Windows UX drag.
- **Gemini CLI** — Security‑first approach (TOCTOU fixes, path traversal prevention, prompt injection sanitization). AST‑aware codebase mapping exploration (#22745) could be a differentiator. Agent reliability still rough (hangs, false success).
- **GitHub Copilot CLI** — Tight GitHub integration, but minimal PR velocity (only 1 PR today). MCP OAuth issues dominate. Voice mode and BYOK flexibility are rising requests.
- **Kimi Code CLI** — Quietest community; focus on bug fixes (IME composition, soul/tool lifecycle). No new features or releases. Probably a niche tool.
- **OpenCode** — Highly responsive community (89👍 for mobile request). V2 TUI redesign underway. Strong on multi‑provider support but SQLite corruption and provider model mapping gaps persist.
- **Pi** — Extensibility champion: ultra thinking level, constrained sampling, message‑anchored tools, embedded library support. Rapid PR merging (10 in 24h). Good for power users and extension authors.
- **Qwen Code** — Multi‑workspace daemon (RFC #6378) and Web Shell enrichment are unique. Steady release cadence (v0.19.9). Streaming reliability and protocol tag leaks are pain points.
- **DeepSeek TUI** — Most architectural ambition: Fleet/Workflow/Lane/Runtime orchestration model, Android Termux support, and cargo‑audit CI. v0.8.68 is a major milestone. TUI overload is being addressed via compact mode.

## 5. Community Momentum & Maturity
- **Highest momentum & maturity** — **Claude Code** and **OpenAI Codex** dominate in issue volume, comments, and upvotes. Both have established plugin ecosystems and frequent releases. However, Claude Code’s session limit issue (#38335) is a trust erosion signal.
- **Rapidly iterating** — **OpenCode**, **Pi**, **Qwen Code**, and **DeepSeek TUI** all averaged 10 PRs in 24h, indicating active development. OpenCode and Pi have high community engagement (e.g., mobile request, thinking levels).
- **Moderate activity** — **Gemini CLI** and **GitHub Copilot CLI**. Gemini CLI has a security focus but reliability issues. Copilot CLI has low PR volume but high pain point engagement (Windows TUI).
- **Low activity** — **Kimi Code CLI** (0 issues, 4 PRs, no releases). Appears in maintenance mode.

## 6. Trend Signals
- **Reasoning levels are now a competitive battleground.** Pi and OpenAI Codex are racing to support `ultra`/`max` thinking. Tools without explicit reasoning control will fall behind.
- **Windows is the Achilles’ heel of all CLI tools.** Every major tool has Windows‑specific bugs that go unfixed for months. Developers on Windows/WSL2 are underserved.
- **MCP OAuth complexity is underestimated.** Multiple tools report silent failures in tool discovery after OAuth handshake. Standardization needed.
- **Agent reliability remains the #1 user complaint.** False success reports, hangs, silent tool calls, and data loss dominate issue lists across all tools.
- **Multi‑workspace and daemon support is the next frontier.** Qwen Code and DeepSeek TUI are investing in orchestration architectures. Claude Code and OpenAI Codex have limited multi‑workspace support.
- **Community trust hinges on billing transparency.** Claude Code’s session limit outrage and OpenAI Codex’s wasted rate‑limit resets show users demand fair usage accounting.
- **Prompt injection and security hardening are rising priorities.** Gemini CLI has multiple PRs on path traversal, TOCTOU, and injection sanitization. Users in enterprise settings are demanding more.

*This report is based on community digest data from 2026-07-11 for nine AI CLI tools. It reflects a single snapshot; trends should be validated over multiple cycles.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

## Claude Code Skills Community Highlights Report  
**Data snapshot: 2026-07-11 | Source: github.com/anthropics/skills**

---

### 1. Top Skills Ranking

The list below reflects the most-discussed Pull Requests (sorted by comment volume; all remain **open**). Each represents a community-contributed Skill or critical fix to the skill-creator toolchain.

| Rank | PR # | Skill / Focus | Functionality | Discussion Highlights | Status |
|------|------|--------------|---------------|----------------------|--------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **fix(skill-creator): run_eval.py 0% recall** | Fixes the evaluation script that silently scores `recall=0%` for all queries, breaking the description-optimization loop. Addresses root cause: eval artifact not installed as a real skill; Windows pipe reading; parallel worker flaws. | Community reproduction in #556; 10+ independent confirmations. Central to skill-creator reliability. | Open |
| 2 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Prevents orphan words, widow paragraphs, and numbering misalignment in AI-generated documents. Covers common typographic defects Claude often introduces. | Highly practical – these issues affect every document Claude generates. Users rarely ask for typography fixes explicitly. | Open |
| 3 | [#538](https://github.com/anthropics/skills/pull/538) | **fix(pdf): case-sensitive file references** | Corrects 8 case-sensitivity mismatches between `SKILL.md` and actual resource files (`REFERENCE.md` → `reference.md` etc.), fixing breakage on case-sensitive filesystems. | Simple but impactful – prevents silent failures on Linux/macOS. | Open |
| 4 | [#486](https://github.com/anthropics/skills/pull/486) | **ODT skill** | Creates, fills, reads, and converts OpenDocument files (.odt, .ods). Supports LibreOffice, ISO-standard formats, template filling, and ODT→HTML conversion. | Addresses demand for open-source document formats; fills gap in document handling. | Open |
| 5 | [#210](https://github.com/anthropics/skills/pull/210) | **frontend-design clarity** | Revises frontend-design skill for better actionability: every instruction must be executable in a single conversation, with specific guidance to steer Claude’s behavior. | Heavy community input on making design skills more prescriptive and less ambiguous. | Open |
| 6 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer + skill-security-analyzer** | Two meta-skills for evaluating other skills: quality across structure/documentation/correctness/clarity/extensibility; security for injection risks, sensitive data leaks, and sandbox breaks. | First community attempt at skill quality gates; sparks debate on trust boundaries (see Issue #492). | Open |
| 7 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit skill (v1.3.0)** | Universal AI output auditor: mechanical file verification + four-dimension reasoning audit (damage-severity ordered). Works with any project/stack/model. | Novel concept – audits AI output before delivery. High interest in reasoning quality gates. | Open |
| 8 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Comprehensive testing skill covering trophy model, unit tests (AAA pattern), React Testing Library, Cypress, API testing, mocks, performance, and visual regression. | Fills a major gap – no existing skill covers full testing stack. Community eager for standardized test guidance. | Open |

**Note:** Several PRs in the top 20 are toolchain fixes for `skill-creator` (e.g., #1099, #1050, #362, #361, #1323, #1261), indicating that the community prioritizes stabilizing the skill development workflow itself.

---

### 2. Community Demand Trends (from Issues)

Top-voted issues reveal the most-anticipated new Skill directions and infrastructure gaps:

- **Security & Trust Boundary** – Issue [#492](https://github.com/anthropics/skills/issues/492) (34 comments, 2👍) warns that community skills distributed under the `anthropic/` namespace impersonate official skills, creating trust-abuse vectors. Demand: a **security-scanning skill** or namespace policy.  
- **Org-wide Skill Sharing** – [#228](https://github.com/anthropics/skills/issues/228) (14 comments, 7👍) requests a shared skill library or direct sharing links for Claude.ai, eliminating manual file transfer.  
- **Skill-Creator Reliability** – [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍) and [#1169](https://github.com/anthropics/skills/issues/1169) (3 comments, 1👍) report the same 0% recall bug that PR #1298 aims to fix. Community demand for a **stable, cross-platform skill-creator** is urgent.  
- **Agent Governance / Safety** – [#412](https://github.com/anthropics/skills/issues/412) (6 comments) proposes an `agent-governance` skill for policy enforcement, threat detection, and audit trails – a gap in the current collection.  
- **Document Skills De-duplication** – [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9👍) highlights duplicate skills when installing both `document-skills` and `example-skills` plugins – need for **plugin deduplication logic** or consolidated skill sets.  
- **Windows Compatibility** – [#1061](https://github.com/anthropics/skills/issues/1061) (3 comments, 1👍) and related fixes show strong demand for **native Windows support** in skill-creator scripts.  
- **Compact Memory Notation** – [#1329](https://github.com/anthropics/skills/issues/1329) (9 comments) proposes a `compact-memory` skill for symbolic agent state representation – a niche but growing interest in efficient long-running agent context management.  

Additionally, proposals for **reasoning quality gate pipelines** (Issue [#1385](https://github.com/anthropics/skills/issues/1385)), **SharePoint/SPO integration** (Issue [#1175](https://github.com/anthropics/skills/issues/1175)), and **Bedrock compatibility** (Issue [#29](https://github.com/anthropics/skills/issues/29)) indicate demand for enterprise and ecosystem expansion.

---

### 3. High-Potential Pending Skills (Active-Comment PRs)

Several PRs remain open with active discussion and community traction. These are likely to land soon:

- **#1298** – *fix(skill-creator): run_eval.py always reports 0% recall* – The most urgent fix in the repo; multiple community members have contributed to the solution.  
- **#1367** – *self-audit skill* – V1.3.0 with four-dimension reasoning audit; author YuhaoLin2005 also submitted a corresponding proposal (Issue #1385). High visibility.  
- **#723** – *testing-patterns* – Comprehensive coverage; fills a clear gap; no competing PRs.  
- **#83** – *skill-quality-analyzer and skill-security-analyzer* – Meta-skills that could become governance standards; discussion around security namespace (Issue #492) may accelerate merging.  
- **#1261** – *fix(skill-creator): isolate trigger-eval command files* – Fixes a critical bug where eval files polluted the user’s live project registry during parallel runs. Essential for production use.  
- **#1323** – *fix(skill-creator): run_eval trigger detection misses real skill name* – Another fix for the 0% recall issue, complementary to #1298.  
- **#1099, #1050, #362, #361** – Windows and UTF-8 fixes for skill-creator – Multiple overlapping PRs; maintainers may merge a combined fix soon.

---

### 4. Skills Ecosystem Insight

The community’s most concentrated demand at the Skills level is **reliable, cross-platform tooling for skill creation and evaluation**, followed by **security/governance skills** that establish trust boundaries and audit quality – reflecting a maturation from “what can Skills do?” to “how do we ensure Skills are safe, correct, and maintainable?”

---

# Claude Code Community Digest — 2026-07-11

## Today’s Highlights

Two minor releases landed, making **Auto mode available without opt-in on Bedrock, Vertex AI, and Foundry** (v2.1.207) and adding `/cd` directory suggestions and a `/doctor` check to trim overgrown `CLAUDE.md` files (v2.1.206). The community is deeply vocal about **Claude Max session limits being exhausted abnormally fast** (issue #38335, 792 comments, 468 👍), and a cluster of **Windows‑specific bugs** (console flashing, Cowork not working) continues to frustrate developers.

## Releases

### v2.1.207
- **Auto mode** is now enabled by default on Bedrock, Vertex AI, and Foundry (remove the `CLAUDE_CODE_ENABLE_AUTO_MODE` env var); can be disabled via `disableAutoMode` in settings.
- Fixed terminal **freezing / keystroke lag** when streaming responses that contain very long lists, tables, or paragraphs.

### v2.1.206
- `/cd` now offers **directory path suggestions** (matching `/add-dir` behavior).
- New `/doctor` check proposes trimming checked‑in `CLAUDE.md` files by cutting content Claude could derive from the codebase.
- `/commit-push-pr` now **auto‑allows `git push`** to the repo’s configured remote.

## Hot Issues (10 most noteworthy)

1. **[#38335](https://github.com/anthropics/claude-code/issues/38335) – Claude Max plan session limits exhausted abnormally fast** — 792 comments, 468 👍. Users report seeing session‑limit warnings after only a few minutes of CLI usage. The issue claims this began around March 23, 2026; Anthropic has not yet acknowledged a root cause. Community anger is high, with many calling it a billing/policy problem.

2. **[#14828](https://github.com/anthropics/claude-code/issues/14828) – Windows: console window flashing when executing tools** — 40 comments, 33 👍. A long‑standing bug (filed Dec 2025) where every tool execution causes a brief CMD window to flash, disrupting focus. Multiple users have confirmed the repro, but no fix has been shipped.

3. **[#70539](https://github.com/anthropics/claude-code/issues/70539) – Feature request: scroll‑only mouse mode** — 7 comments, 68 👍. Users in full‑screen mode want mouse wheel scrolling without accidental clicks triggering buttons or permission dialogs. Highly upvoted, no official response yet.

4. **[#74649](https://github.com/anthropics/claude-code/issues/74649) – Cowork not working on Windows 11 Pro** — 43 comments. Missing HCS services (`vfpext`) prevent the Cowork feature from launching. A fresh issue (July 6) that gained rapid traction.

5. **[#66960](https://github.com/anthropics/claude-code/issues/66960) – Fable 5 model behavior: 16 min of silent tool calls, then AskUserQuestion** — 9 comments, 5 👍. During an incident‑response scenario, Fable 5 spent 16 minutes silently calling tools and never shared intermediate findings, forcing the user to re‑prompt. Raises concerns about model reliability under pressure.

6. **[#71539](https://github.com/anthropics/claude-code/issues/71539) – Mouse click to refocus terminal triggers permission prompt** — 8 comments, 17 👍. A simple refocus click on Linux is misinterpreted as a button press, causing unwanted permission popups. Affects workflow continuity.

7. **[#21167](https://github.com/anthropics/claude-code/issues/21167) – ESC key kills ALL background tasks/subagents** — 7 comments, 9 👍. Pressing Escape terminates all parallel agents at once, with no confirmation. A major UX pain for multi‑agent workflows.

8. **[#41737](https://github.com/anthropics/claude-code/issues/41737) – Task output files grow unboundedly, filling entire disk (278 GB in minutes)** — 7 comments, 1 👍. Intermittent but critical: `/private/tmp/claude-*` files can balloon to hundreds of gigabytes, causing system instability. No reliable repro yet.

9. **[#74260](https://github.com/anthropics/claude-code/issues/74260) – Assistant text blocks silently dropped when followed by more thinking** — 5 comments. A data‑loss bug: mid‑turn `text` blocks are never rendered and are missing from the transcript JSONL when adaptive thinking interleaves. Affects trust in the conversation record.

10. **[#76189](https://github.com/anthropics/claude-code/issues/76189) – Advisor (Fable 5) returns “unavailable” whenever transcript contains any prior tool call** — 3 comments, 1 👍. The advisor tool with `advisorModel: "fable"` fails after even a single `Bash(ls)`. Opus advisor is unaffected. Limits usefulness of the advisor feature for iterative development.

## Key PR Progress

Only 6 pull requests were updated in the last 24 hours. We cover all of them:

- **[#41447](https://github.com/anthropics/claude-code/pull/41447) – feat: open source claude code ✨** — A community PR (still open since March) that claims to close multiple issues and open‑source the tool. No official response; likely a symbolic/placeholder PR.

- **[#76475](https://github.com/anthropics/claude-code/pull/76475) – Flag innerHTML/outerHTML += append sink in security‑guidance** — Fixes a gap in the `security‑guidance` plugin: the existing pattern only matches `.innerHTML =` but misses `+=` assignments. A straightforward regex hardening.

- **[#76394](https://github.com/anthropics/claude-code/pull/76394) – Add Claude Code Launcher – Windows CLI Application** — A community‑built PowerShell launcher with 14 interactive menu options. Not an official Anthropic PR, but shows demand for a polished Windows experience.

- **[#76298](https://github.com/anthropics/claude-code/pull/76298) – docs: document Remote Control background‑task panel** — Updates Remote Control docs to describe the web/mobile background‑task panel and task‑status sync behavior added in v2.1.205.

- **[#76289](https://github.com/anthropics/claude-code/pull/76289) – examples/hooks: demonstrate compound‑command pre‑flight** — Extends the `bash_command_validator_example.py` to detect command chaining (`;`, `&&`, `||`), pipelines (with allowlist for read‑only filters), active command substitution, and `find`/`xargs` patterns. A valuable reference for hook authors.

- **[#76274](https://github.com/anthropics/claude-code/pull/76274) – security‑guidance: resolve review paths against the repo root** — Fixes path resolution in the security‑guidance plugin’s background reviewers: previously, relative paths, root‑anchored paths (`/TaxEngine/...`), and foreign absolute paths were mixed without normalization. Hardens the findings‑array contract.

## Feature Request Trends

The most‑requested improvements cluster in a few areas:

- **Mouse & interaction refinements** — Scroll‑only mode (#70539, 68👍), configurable mouse interaction levels (#76528), and disabling click‑as‑submit for prompts. Users want to refocus the terminal without triggering actions.
- **Session reliability & resource management** — Proper handling of background tasks (ESC should not kill all, #21167), bounded disk usage for task output (#41737), preserving `--effort` level across `--resume` (#66005).
- **Windows parity** — Fix console window flashing (#14828), Cowork support (#74649), and desktop OAuth refresh (#76544). Windows users feel underserved.
- **Model behavior consistency** — Complaints about Fable 5 “going silent” (#66960), dropped text blocks (#74260), advisor unavailability (#76189), and poor debugging decisions (#73975, #73913, closed). Users want predictable, accountable model responses.
- **MCP & plugin deployment** — Chrome MCP approval popups not rendering (#49979), `--dangerously-load-development-channels` silently dropping inbound notifications (#71792), and `pluginRoot` being ignored (#68936).

## Developer Pain Points

- **Claude Max session limits** (#38335) dominate public frustration — 792 comments and 468 👍 make it the most visible pain point. Many feel the tool is becoming unusable for serious work.
- **Windows‑specific bugs** are a recurring theme: console window flashing (#14828, 33👍), Cowork not working (#74649), and desktop OAuth refresh failures (#76544). The platform feels neglected despite a vocal user base.
- **Unwanted permission prompts** triggered by mouse clicks (#71539, 17👍) and refocus actions (#76528) degrade the TUI experience, especially on Linux.
- **Data loss / missing content** — Dropped assistant text blocks (#74260) and missing transcript entries undermine trust, especially for audit‑sensitive workflows.
- **Model regression complaints** — Multiple closed issues from July 3 (e.g., #73921, #74012, #73998) contain strong language about Fable 5 “wasting tokens” and “making stupid decisions.” While many were closed as `needs-info`, the pattern suggests a perceived degradation.
- **Advisor unreliability** (#76189) — The “unavailable” error after any tool call makes the advisor feature unpredictable, limiting its adoption for code review and guidance.

---

*Generated from GitHub data for `anthropics/claude-code` on 2026-07-11.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-11

## Today’s Highlights
The community is closely watching a **GPT‑5.5 reasoning‑token clustering bug** (#30364) that may degrade complex-task performance, with 183 comments and 283 👍. Meanwhile, the **GPT‑5.6 Sol model** continues to surface configuration gaps, as users cannot specify subagent models (#31814) and the latest CLI does not yet support it (#32146). On the fix side, several performance PRs landed: faster reverse history search (#30887), fewer filesystem sycalls (#31514), and a new model‑capacity retry mechanism (#31058).

## Releases
- **`rust-v0.145.0-alpha.3`** and **`rust-v0.145.0-alpha.4`** — two alpha releases published in the last 24 hours. No changelog details were provided; these are likely incremental stability or hotfix releases for the Rust‑based CLI.

## Hot Issues
*Top 10 noteworthy issues, ordered by community engagement.*

1. **[#30364] GPT‑5.5 Codex reasoning‑token clustering at 516/1034/1552**  
   *User reports that `gpt‑5.5` responses land disproportionately at fixed token counts, correlating with reduced reasoning quality.*  
   **Why it matters:** Could indicate a systematic performance bug affecting complex tasks. 283 👍, 183 comments.  
   [View Issue](https://github.com/openai/codex/issues/30364)

2. **[#31814] GPT‑5.6 Sol cannot specify subagent models**  
   *MultiAgent V2 hides agent‑model selection, forcing all subagents to be Sol instances even when legacy models are desired.*  
   **Why it matters:** Blocks multi‑model orchestration workflows. 83 👍, 34 comments.  
   [View Issue](https://github.com/openai/codex/issues/31814)

3. **[#20214] Codex App freezes/stutters on Windows 11 Pro despite sufficient resources**  
   *Persistent UI lag and freezes on modern hardware.*  
   **Why it matters:** Core UX blocker for Windows users. 45 👍, 32 comments.  
   [View Issue](https://github.com/openai/codex/issues/20214)

4. **[#16374] Codex desktop app intermittently freezes Windows shell/UI**  
   *Opening Codex Settings temporarily stops the freeze — suggests a resource contention issue.*  
   **Why it matters:** Affects system‑wide stability. 10 👍, 26 comments.  
   [View Issue](https://github.com/openai/codex/issues/16374)

5. **[#28969] Add setting to disable the auto‑resolve in 60 seconds for questions**  
   *Request for user‑controllable timeout before CLI auto‑resolves prompts.*  
   **Why it matters:** High demand (104 👍) for more predictable interactive behavior.  
   [View Issue](https://github.com/openai/codex/issues/28969)

6. **[#31606] Reset failed, did not apply and 1 reset is wasted**  
   *Rate‑limit resets are consumed without taking effect.*  
   **Why it matters:** Billing and quota impact for Pro users. 25 👍, 23 comments.  
   [View Issue](https://github.com/openai/codex/issues/31606)

7. **[#24814] Windows Codex App: Browser Use blocked by enterprise network policy**  
   *In‑app browser fails on enterprise networks even for harmless URLs.*  
   **Why it matters:** Blocks enterprise adoption. 2 👍, 19 comments.  
   [View Issue](https://github.com/openai/codex/issues/24814)

8. **[#32032] Computer Use 1.0.1000366 crashes at launch on macOS 15.7.7**  
   *Missing Swift Concurrency symbol prevents the bundled plugin from initializing.*  
   **Why it matters:** Regressed macOS compatibility. 9 👍, 14 comments.  
   [View Issue](https://github.com/openai/codex/issues/32032)

9. **[#31862] Desktop UX regressions in the unified ChatGPT/Codex app**  
   *Mac users report UI issues after the July 9 unified update.*  
   **Why it matters:** Recent release instability. 1 👍, 15 comments.  
   [View Issue](https://github.com/openai/codex/issues/31862)

10. **[#24069] Regression: Codex CLI 0.133.0 breaks native subagent spawning for Ollama**  
    *Local custom‑model users cannot use subagents after upgrading from 0.132.0.*  
    **Why it matters:** Affects self‑hosted workflows. 6 👍, 8 comments.  
    [View Issue](https://github.com/openai/codex/issues/24069)

## Key PR Progress
*10 important pull requests merged or opened in the last 24 hours.*

1. **#31058 — Retry model capacity errors**  
   *Adds up to three patient retries (30s, 2m, 5m) for structured capacity failures, keeping turns alive instead of aborting immediately.*  
   [View PR](https://github.com/openai/codex/pull/31058)

2. **#31662 — Allow restricting subagent environments**  
   *Adds `environment_ids` to spawn_agent, enabling selective capability sharing for subagents.*  
   [View PR](https://github.com/openai/codex/pull/31662)

3. **#32290 — Respect model support for reasoning summaries**  
   *Adds `supports_reasoning_summary_parameter` metadata; omits `reasoning.summary` for incompatible models.*  
   [View PR](https://github.com/openai/codex/pull/32290)

4. **#32288 — Make GPT‑5.6 Sol the default Bedrock model**  
   *Prioritizes Sol, Terra, and Luna variants in the Amazon Bedrock catalog.*  
   [View PR](https://github.com/openai/codex/pull/32288)

5. **#30887 — Speed up reverse history search**  
   *Fetches history in batches instead of one entry at a time, dramatically reducing lock contention.*  
   [View PR](https://github.com/openai/codex/pull/30887)

6. **#31514 — Reduce redundant filesystem syscalls**  
   *Optimises file writes, directory classification, and symlink handling; lowers I/O overhead.*  
   [View PR](https://github.com/openai/codex/pull/31514)

7. **#31437 — Require elevated-only Windows policy for network proxies**  
   *Prevents unexpected UAC prompts when proxy enforcement is used with unelevated sandboxes.*  
   [View PR](https://github.com/openai/codex/pull/31437)

8. **#32277 — Honor `personality = "none"` in model instructions**  
   *Strips the `# Personality` section when the catalog specifies no personality.*  
   [View PR](https://github.com/openai/codex/pull/32277)

9. **#26259 — Add advisory Interrupt hooks for interrupted turns**  
   *Introduces hooks that fire when a turn is interrupted, providing context without blocking.*  
   [View PR](https://github.com/openai/codex/pull/26259)

10. **#32301 — Trust hooks from materialized workspace plugins**  
    *Carries plugin metadata through refresh callbacks and records hook hashes for workspace‑scoped plugins.*  
    [View PR](https://github.com/openai/codex/pull/32301)

## Feature Request Trends
Analysis of the past 24 hours’ issues reveals the following most‑requested feature directions:

- **Configurable auto‑resolution timeout** (#28969, 104 👍) – Users want control over the 60‑second auto‑resolve behaviour in CLI interactive mode.
- **Subagent model selection** (#31814, #24069, #17598) – Demand to specify different models for subagents, especially with GPT‑5.6 Sol and local providers.
- **Persistent personality control** (#32277, #31631, #32274) – Requests to cleanly strip unwanted personality injection from model instructions.
- **Better rate‑limit transparency** (#31606, #31668) – Users want clear feedback when resets are consumed or fail, and systemic rate‑limit regressions fixed.
- **Improved Windows UI performance** (#20214, #16374, #29821, #31212) – Multiple reports of freezes, stutters, and kernel‑pool growth demand a targeted Windows performance pass.

## Developer Pain Points
Recurring themes from the most active issues:

- **Windows stability** remains the top pain point – freezes, shell blocking, webview crashes, and setup failures appear across multiple issues.
- **GPT‑5.6 Sol integration is incomplete** – the model behaves differently from earlier versions (hidden subagent config, missing CLI support, forced default), causing workflow breakage.
- **Subagent and custom‑model regressions** – every few releases break combination of subagent orchestration with non‑OpenAI providers (Ollama, local endpoints).
- **Computer Use fragility** – crashes on both macOS (Swift symbol) and Windows (PiP failure) reduce trust in the feature.
- **Rate‑limit and billing confusion** – users report consumed resets that don’t apply and company credits being drained in one day (#31668), indicating backend accounting bugs.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-11

## Today’s Highlights
A **nightly release (v0.52.0)** patches a thought‑leakage bug in scrubbed history and excludes transient CI configs from workspace context. However, several long‑standing P1 bugs remain active — subagents falsely report success after hitting the turn limit, the generalist agent hangs on simple tasks, and shell commands sometimes get “stuck” after completing. On the security front, multiple PRs address path traversal, prompt‑injection vectors, and a TOCTOU window in the IDE companion’s token file.

## Releases
- **[v0.52.0-nightly.20260710.ga4c91ce19](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260710.ga4c91ce19)**  
  *What’s Changed:*
  - Fix: strip thoughts from scrubbed history turns and resolve thought leakage (PR [#27971](https://github.com/google-gemini/gemini-cli/pull/27971))
  - Refactor: exclude transient CI configuration files from workspace context ([@DavidAPierce](https://github.com/DavidAPierce))

## Hot Issues (Top 10 by Community Activity)
1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent recovery after MAX_TURNS falsely reports GOAL success**  
   P1 bug: `codebase_investigator` hits max turns but still returns `status: "success"`. Community has 10 comments, 2 👍. This undermines trust in agent termination reporting.

2. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — Leverage model’s bash affinity via zero‑dependency OS sandboxing**  
   P2 enhancement: proposes using Gemini 3’s native bash‑like CLI chaining with safe sandboxing. 8 comments, 1 👍. Highly relevant for safety and performance.

3. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — Robust component‑level evaluations**  
   P1 EPIC tracking the growth of behavioural eval tests (now 76) across 6 Gemini versions. 7 comments. Important for quality assurance as agent capabilities expand.

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — Assess AST‑aware file reads, search, and codebase mapping**  
   P2 EPIC investigating whether AST‑aware tools can reduce turn count and noise. 7 comments, 1 👍. Could dramatically improve efficiency for large codebases.

5. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist agent hangs forever**  
   P1 bug: the generalist agent hangs indefinitely (users report waiting up to an hour). 7 comments, 8 👍 — the most upvoted issue. Workaround: instructing the model not to defer to sub‑agents.

6. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — CLI does not use skills/sub‑agents enough**  
   P2: users find that even with custom skills defined, the agent rarely invokes them autonomously. 6 comments. Suggests gap in agent reasoning or tool‑selection heuristics.

7. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory retries low‑signal sessions indefinitely**  
   P2: memory extraction agent can get stuck in a loop replaying uninteresting transcripts. 5 comments. Impacts background resource usage.

8. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell command execution gets stuck with “Waiting input” after completion**  
   P1: simple CLI commands (e.g., `ls`) occasionally leave the shell in a “awaiting input” state even after finishing. 4 comments, 3 👍. Critical reliability issue.

9. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Browser sub‑agent fails on Wayland**  
   P1: the browser agent terminates with “GOAL” but fails silently under Wayland. 4 comments, 1 👍. Blocks Linux users with modern display servers.

10. **[#20079](https://github.com/google-gemini/gemini-cli/issues/20079) — Symlinked agent files not recognized**  
    P2: if `~/.gemini/agents/filename.md` is a symlink, the agent is ignored. 4 comments. Simple UX improvement for users who manage configs via dotfiles.

## Key PR Progress (Top 10 by Impact)
1. **[#28316](https://github.com/google-gemini/gemini-cli/pull/28316) — Fix task cancellation aborting execution loop (a2a-server)**  
   Prevents “ghost executions” after cancel‑task. Also addresses race conditions and memory leaks. Critical for reliable agent orchestration.

2. **[#28319](https://github.com/google-gemini/gemini-cli/pull/28319) — Path trust check before environment loading**  
   Ensures workspace path trust is verified before reading env files. Uses `AsyncLocalStorage` for isolated task environments. Strengthens security in multi‑workspace setups.

3. **[#28353](https://github.com/google-gemini/gemini-cli/pull/28353) — Path traversal prevention in restore command**  
   Defense‑in‑depth: normalizes user‑supplied paths to prevent reading files outside checkpoint directory.

4. **[#28352](https://github.com/google-gemini/gemini-cli/pull/28352) — Sanitize issue title in caretaker ingestion**  
   Escapes `</untrusted_context>` in GitHub issue titles to block prompt injection. Important for automated triage pipelines.

5. **[#28345](https://github.com/google-gemini/gemini-cli/pull/28345) — LLM triage orchestrator for caretaker**  
   Implements structured triage logic using Antigravity SDK with GCS debug logging and Cloud Run deployment. Enables automated issue prioritisation.

6. **[#28304](https://github.com/google-gemini/gemini-cli/pull/28304) — Show clear message when account lacks Code Assist tier**  
   Replaces cryptic backend error with user‑friendly dialog for Workspace/enterprise accounts. Improves `/privacy` UX.

7. **[#28330](https://github.com/google-gemini/gemini-cli/pull/28330) — Atomic token file mode (TOCTOU fix)**  
   Writes auth token file with `chmod` in a single atomic operation to prevent brief world‑readable window. Closes a security advisory.

8. **[#28349](https://github.com/google-gemini/gemini-cli/pull/28349) — Guard `customDeepMerge` against circular references**  
   Prevents `RangeError: Maximum call stack size` when user settings contain circular references (e.g., `obj.self = obj`).

9. **[#28348](https://github.com/google-gemini/gemini-cli/pull/28348) — Fix `MaxListenersExceededWarning` and infinite auth loop**  
   Resolves two critical issues: warning spam and an infinite OAuth loop on Windows after successful login.

10. **[#28240](https://github.com/google-gemini/gemini-cli/pull/28240) — Add `AGENTS.md` out‑of‑the‑box support**  
    Makes `AGENTS.md` a default context file (alongside `GEMINI.md`) so users don’t need to manually configure it. Addresses a common onboarding friction.

## Feature Request Trends
- **AST‑aware tooling** — Multiple issues ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) call for reading method bounds and searching via AST to reduce turn count and token usage.
- **Agent self‑awareness** ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)) — users want the CLI to accurately describe its own flags, hotkeys, and sub‑agent execution.
- **Sub‑agent transparency** ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)) — trajectory visibility via `/chat share` so sub‑agent behaviour can be reviewed and evaluated.
- **Memory system improvements** — Several issues ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) request deterministic redaction, quarantine of invalid patches, and avoidance of retry loops.
- **Prevention of destructive actions** ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)) — the agent should avoid `--force` and `git reset` when safer alternatives exist.
- **Browser agent resilience** ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)) — automatic session takeover and lock recovery, especially for persistent browser profiles.

## Developer Pain Points
- **Sub‑agent false positive termination** — [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) shows the agent reports success even when it hit the turn limit, hiding failures.
- **Agent hangs and stalls** — [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) (generalist agent) and [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) (shell commands “waiting input”) are the top reliability concerns.
- **Permission / bypass issues** — [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) reports sub‑agents running despite “agents disabled” setting. Users expect strict configurability.
- **Browser agent woes** — [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) (Wayland failure), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) (ignores `settings.json` overrides), and [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) (session lock) create a fragmented experience.
- **Tool overload** — [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) reports a 400 error when >128 tools are available, forcing the agent to be smarter about scoping.
- **Workspace clutter** — [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) notes that the model creates many temporary scripts in random directories, complicating cleanup.
- **Symlink handling** — [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) (unrecognised agents) and [#22465](https://github.com/google-gemini/gemini-cli/issues/22465) (stuck at interactive prompts) are small but frequent UX frictions.

---

*Data source: [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) — issues and PRs updated in the last 24 hours.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

## GitHub Copilot CLI Community Digest — 2026-07-11

### Today’s Highlights

A new patch release (v1.0.71-0) landed yesterday with pinned prompts, a redesigned settings dashboard, and lighter default install guidance. However, the community is grappling with a surge of terminal-related wedging issues on Windows/WSL2 and a wave of **MCP OAuth** connectivity failures. Meanwhile, feature requests continue to center on **model flexibility** (BYOK, multi-model sessions) and **plugin lifecycle automation**.

---

### Releases

**v1.0.71-0** (released 2026-07-10)  
- **Added:** Pinned prompts setting in `/settings`; new `Repo` and `Repo (local)` scope tabs on the dashboard.  
- **Improved:** Uses targeted validation and lighter install guidance by default; `Ctrl+X → X` now closes a session, `Ctrl+X → H` hides the status panel.  
- *No other changes.*  

**v1.0.70** (2026-07-09)  
- **Added:** GPT-5.6 model support; unified `Error` prefix for MCP/skill failures; real parse error display for malformed custom agents.  
- **Improved:** `web_fetch` works through mandatory HTTPS proxies; `/search` hidden on Gists tab; superseded subagent runs are treated as cancellations.  
- *12 issues fixed in total.*

---

### Hot Issues (Top 10 by Community Signal)

1. **TUI wedges mid-turn (WSL2 + Windows Terminal)** [#4069](https://github.com/github/copilot-cli/issues/4069)  
   *Screen clears, input dead, `Ctrl+C`/`Ctrl+\` ignored; `write EIO` followed by `EPIPE` on Rust JSON‑RPC transport.*  
   **Comments:** 7 | **👍:** 8 — Major reliability blocker for Windows users.

2. **xhigh reasoning removed for GPT-5.4 and GPT-5.3-codex** [#2739](https://github.com/github/copilot-cli/issues/2739) (Closed)  
   *Users report models are “useless without xhigh reasoning”; strong negative reaction.*  
   **Comments:** 5 | **👍:** 12 — Indicates high sensitivity to reasoning‑level changes.

3. **Voice mode: all bundled ASR models fail silently** [#4024](https://github.com/github/copilot-cli/issues/4024)  
   *Nemotron Speech streaming returns empty transcripts; suspected routing bug in `MultiModalProcessor`.*  
   **Comments:** 3 | **👍:** 0 — Voice workflow completely broken for affected users.

4. **Feature request: auto-update plugins on CLI startup** [#3331](https://github.com/github/copilot-cli/issues/3331)  
   *Teams can’t guarantee consumers run latest plugin versions without manual intervention.*  
   **Comments:** 3 | **👍:** 4 — High demand for plugin lifecycle automation.

5. **Allow custom headers for BYOK** [#3399](https://github.com/github/copilot-cli/issues/3399)  
   *Required for LLM servers expecting `X-Tenant-ID` etc.; blocks enterprise adoption.*  
   **Comments:** 3 | **👍:** 6 — Critical for on‑prem / private cloud setups.

6. **Blocking shell/tool call freezes agent** [#2533](https://github.com/github/copilot-cli/issues/2533)  
   *SSH, network timeouts, or hanging commands make the agent unresponsive to new messages.*  
   **Comments:** 2 | **👍:** 1 — Clear design gap for long‑running commands.

7. **Allow `/model` to switch between multiple models (including BYOK) in one session** [#3709](https://github.com/github/copilot-cli/issues/3709)  
   *`/model` picker only lists GitHub‑hosted models; BYOK users can’t hot‑swap.*  
   **Comments:** 2 | **👍:** 17 — Most upvoted open feature request.

8. **TUI black-screen hang mid-turn in 1.0.70-0 (Windows Terminal)** [#4077](https://github.com/github/copilot-cli/issues/4077)  
   *Content intact; recoverable via `--resume`. Symptom similar to #4069.*  
   **Comments:** 2 | **👍:** 3 — Another Windows TUI regression.

9. **Atlassian MCP server: OAuth succeeds but zero tools exposed** [#4089](https://github.com/github/copilot-cli/issues/4089)  
   *Other HTTP MCP servers work; OAuth flow completes but tool list stays empty.*  
   **Comments:** 2 | **👍:** 0 — Points to MCP OAuth tool discovery bug.

10. **`preToolUse` agent hook denial does not work** [#3874](https://github.com/github/copilot-cli/issues/3874)  
    *Installed hook that denies all commands is silently ignored.*  
    **Comments:** 2 | **👍:** 0 — Security implications for admin‑controlled environments.

---

### Key PR Progress

Only **one pull request** was updated in the last 24 hours:

- **install: guard against duplicate PATH entries on reinstall** [#2565](https://github.com/github/copilot-cli/pull/2565)  
  *Running the installer twice without shell restart appends PATH lines a second time. The fix checks for existing `copilot` entries before appending – a small but frequent annoyance for re‑installs.*

---

### Feature Request Trends

- **BYOK & model flexibility**  
  🔹 Custom HTTP headers for BYOK providers (#3399)  
  🔹 Ability to switch between local/BYOK + GitHub models mid‑session (#3709)  
  - **Plugin & MCP management**  
  🔹 Auto‑update plugins on startup (#3331)  
  🔹 Make research agent’s MCP tools configurable (#4076)  
  - **Voice mode enhancements**  
  🔹 Auto‑submit on spacebar release (#4090)  
  🔹 Temporarily mute system playback during voice capture (#4092)  
  - **Session & context improvements**  
  🔹 Cross‑app session sync between CLI and Desktop (#4082)  
  🔹 Dynamic context injection in Skills (`!command` placeholder, #4088)

---

### Developer Pain Points

- **TUI stability on Windows/WSL2** — Two critical issues (#4069, #4077) report screen clears and input deadlocks with `EIO`/`EPIPE` errors. Both emerged in recent releases and are heavily upvoted.
- **MCP OAuth integration** — Multiple bug reports (#4084, #4085, #4086, #4089) describe broken OAuth flows: servers connect briefly then disconnect, or appear connected but expose no tools. This is a systemic issue with the OAuth client discovery mechanism.
- **Voice mode unreliability** — ASR models returning empty transcripts (#4024), corporate proxy blocking download (#4083), and no auto‑submit reduce voice usability to near zero for some configurations.
- **Context‑window degradation** — Too many MCP servers trigger continuous compaction (#3024); checkpoint restore permanently deletes untracked files (#1675). Both erode trust in long‑running sessions.
- **Blocking shell calls freeze agent** (#2533) — Users cannot interrupt hanging commands gracefully, leaving sessions dead in the water.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-11

## Today's Highlights
No new releases or issues appeared in the last 24 hours, suggesting a stable period for the project. However, four pull requests were updated, including critical bug fixes for fresh installs (actionable error messages), Chinese IME composition on Safari, and a subtle tool-binding regression in the Soul module.

## Releases
No new releases in the last 24 hours.

## Hot Issues
No issues were updated in the last 24 hours (Total: 0 items). This indicates no new bug reports or feature requests surfaced today.

## Key PR Progress
Four pull requests were updated in the last 24 hours:

- [#2353] **fix(web): tighten app layout spacing** (CLOSED)  
  Removes the app-level outer gutter while preserving safe-area insets, and refines the sessions sidebar list spacing and search input display. A visual polish that improves responsive layouts.  
  [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2353)

- [#2489] **fix(soul): restore plan-mode tool bindings after /init creates throwaway soul** (OPEN)  
  Fixes a bug where `/init` creates a throwaway `KimiSoul` that shares the live soul’s agent, causing `_bind_plan_mode_tools()` to rebind shared tool instances and break plan-mode interactions. Closes #2478.  
  [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2489)

- [#2488] **fix(soul): make LLMNotSet error message actionable for fresh installs** (OPEN)  
  Changes the cryptic `LLM not set` error to a helpful message that guides users to run `kimi login`. Closes #2456, addressing a common first-run frustration.  
  [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2488)

- [#1815] **fix(web): prevent Enter from sending message during IME composition on Safari** (CLOSED)  
  Fixes a Safari-specific bug where pressing Enter to commit Chinese IME candidate text immediately sent the message instead of completing input.  
  [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/1815)

## Feature Request Trends
No new feature requests were recorded in the last 24 hours. The project appears to be in a bug-fix cycle.

## Developer Pain Points
From the updated PRs, recurring developer frustrations include:
- **Poor first-run experience**: Fresh installs via Homebrew give an unhelpful `LLM not set` error with no guidance on next steps (PR #2488).
- **Browser IME compatibility**: Safari users with Chinese input methods encounter unintended message sends during composition (PR #1815).
- **Soul/tool lifecycle bugs**: Shared tool instances are incorrectly rebound when `/init` creates a temporary soul, breaking plan-mode (PR #2489).

These issues highlight ongoing efforts to polish onboarding and cross-browser input handling.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest – 2026-07-11

## Today's Highlights
No new releases landed today, but the community remains highly active with a flurry of bug reports and feature requests. Notable events include a high‑demand fix for GPT‑5.6 Luna authentication (89 👍), a critical SQLite corruption bug affecting NFS users, and progress on V2 TUI polish and Copilot OAuth porting. The Xcode 27 beta integration continues to frustrate developers with ignored model configurations.

---

## Releases
None in the last 24 hours.

---

## Hot Issues (Top 10)

1. **#2632 – Default permissions allow editing files and executing any commands** [CLOSED]  
   *22 comments, 4 👍*  
   A closed but frequently discussed security concern: the default “always allow” behaviour for file edits and commands is seen as dangerous. The community continues to ask for stricter defaults.  
   [GitHub](https://github.com/anomalyco/opencode/issues/2632)

2. **#10288 – Mobile version of OpenCode** [OPEN]  
   *14 comments, 89 👍*  
   The most upvoted request this week – developers want a mobile client (Android/iOS/Web UI) to access AI coding assistance on the go.  
   [GitHub](https://github.com/anomalyco/opencode/issues/10288)

3. **#26772 – Integrated browser for desktop** [OPEN]  
   *12 comments, 3 👍*  
   Suggests adding an embedded browser to the desktop client so users can inspect and interact with web pages without leaving OpenCode.  
   [GitHub](https://github.com/anomalyco/opencode/issues/26772)

4. **#34743 – Xcode 27 beta 2 ACP uses default model ignoring opencode.json** [OPEN]  
   *12 comments, 0 👍*  
   Users switching to the latest macOS Xcode beta find that the custom ACP agent ignores their configured model (e.g., LMStudio or Ollama) and falls back to “big‑pickle”.  
   [GitHub](https://github.com/anomalyco/opencode/issues/34743)

5. **#36140 – GPT‑5.6 Luna returns model not found with ChatGPT OAuth** [OPEN]  
   *11 comments, 45 👍*  
   A fresh regression: the built‑in OpenAI provider now rejects `gpt-5.6-luna` with a 404 error, while other models work fine. Affects both OAuth and direct API usage.  
   [GitHub](https://github.com/anomalyco/opencode/issues/36140)

6. **#14970 – SQLite database corruption when running concurrent sessions on NFS** [OPEN]  
   *10 comments, 19 👍*  
   Multiple concurrent OpenCode sessions sharing an NFS‑mounted home directory reliably corrupt `opencode.db`. Users are forced to delete the database and lose history.  
   [GitHub](https://github.com/anomalyco/opencode/issues/14970)

7. **#9532 – Frequent tool calling errors when using Claude** [OPEN]  
   *7 comments, 3 👍*  
   Claude models repeatedly try to call unavailable tools (`ProxyRead`, `ProxyGlob`), leading to confusing `invalid tool` errors and workflow disruption.  
   [GitHub](https://github.com/anomalyco/opencode/issues/9532)

8. **#36285 – Managed‑service restart causes reconnect herd and resource spikes** [OPEN]  
   *3 comments, 0 👍*  
   A V2‑only performance bug: restarting the shared managed service during an automatic update disconnects all existing TUI sessions and cold‑boots them concurrently, causing significant latency.  
   [GitHub](https://github.com/anomalyco/opencode/issues/36285)

9. **#36241 – GPT‑5.6‑sol‑fast/high reasoning part not found on macOS** [OPEN]  
   *3 comments, 0 👍*  
   Streaming reasoning with `gpt-5.6-sol-fast` (high variant) fails with `reasoning part rs_...:0 not found`. Only affects macOS.  
   [GitHub](https://github.com/anomalyco/opencode/issues/36241)

10. **#36326 – Misleading information about conversation persistence** [OPEN]  
    *1 comment, 0 👍*  
    The AI assistant told a user that they could safely shut down and later resume with “continue”, but conversations are not persisted – a usability and trust issue.  
    [GitHub](https://github.com/anomalyco/opencode/issues/36326)

---

## Key PR Progress (Top 10)

1. **#36336 – Port GitHub Copilot OAuth to V2 integration registry** [CLOSED]  
   Merges Copilot device OAuth and credential‑aware request headers into V2, preserving remote model syncing and endpoint selection.  
   [GitHub](https://github.com/anomalyco/opencode/pull/36336)

2. **#36337 – Fix subagent back affordance in TUI** [OPEN]  
   Adds a persistent `esc back` hint in the subagent inspector header, making keyboard and mouse return paths clear. Closes #36322.  
   [GitHub](https://github.com/anomalyco/opencode/pull/36337)

3. **#7756 – Subagent‑to‑subagent delegation with budgets and persistent sessions** [CLOSED]  
   A massive feature PR introducing hierarchical session navigation, budget‑based delegation, and persistent subagent sessions. Addresses multiple long‑standing issues.  
   [GitHub](https://github.com/anomalyco/opencode/pull/7756)

4. **#34794 – `--model free` to pick a random zero‑cost OpenCode model** [OPEN]  
   Adds a new CLI flag that randomly selects from OpenCode Zen free models, useful for low‑cost experimentation.  
   [GitHub](https://github.com/anomalyco/opencode/pull/34794)

5. **#36275 – Fix mismatched service status reporting** [OPEN]  
   Replaces misleading “stopped” output with explicit JSON inspection states, distinguishing healthy daemons with version mismatches from actually stopped services.  
   [GitHub](https://github.com/anomalyco/opencode/pull/36275)

6. **#36333 – Cap session output tokens at 32,000** [OPEN]  
   Enforces a hard limit on per‑session output tokens, matching existing runtime behaviour while preventing models from consuming their entire context window.  
   [GitHub](https://github.com/anomalyco/opencode/pull/36333)

7. **#36321 – Combine Git discovery queries** [CLOSED]  
   Optimizes repository discovery by merging multiple `git rev-parse` calls into one, improving startup time for Git projects without worktrees.  
   [GitHub](https://github.com/anomalyco/opencode/pull/36321)

8. **#36332 – Add CodeMode search fixture catalog** [OPEN]  
   Registers 200 no‑op tools across 20 namespaces to test tool search and invocation under V2 CodeMode.  
   [GitHub](https://github.com/anomalyco/opencode/pull/36332)

9. **#36304 – Promise chaining (`.then`/`.catch`/`.finally`) in CodeMode sandbox** [CLOSED]  
   Extends the sandbox with full promise chaining, building on previous combinator work. Each reaction returns a new scope‑owned promise.  
   [GitHub](https://github.com/anomalyco/opencode/pull/36304)

10. **#36329 – Enable Nix CI in v2 branch** [OPEN]  
    Adds v2 to the nix‑hashes CI workflow, allowing Nix users to build and test the V2 iteration easily.  
    [GitHub](https://github.com/anomalyco/opencode/pull/36329)

---

## Feature Request Trends
The community’s most‑requested directions this week:

- **Mobile / cross‑platform access** – #10288 (89 👍) leads the pack, showing strong desire for Android, iOS, or Web UI.
- **Integrated browser workspace** – #26772 proposes an embedded browser for inspecting web content directly from OpenCode.
- **Interactive steering** – #19205 (closed but 26 👍) asks for the ability to guide models mid‑task (e.g., when a task is QUEUED).
- **Better model selection handling** – Multiple issues revolve around models being ignored or misconfigured (#34743, #36140, #36241), indicating a need for more robust provider/model negotiation.
- **V2 TUI polish** – Issues like #36302, #36270, and #36323 focus on improving the look, feel, and behaviour of the new TUI, especially for modals, labels, and fork navigation.

---

## Developer Pain Points
Recurring frustrations from the latest batch of issues:

- **SQLite corruption under concurrent access** – #14970 persists, and #33320 shows the `database is locked` error still appears even in single‑session scenarios.
- **Provider/model compatibility gaps** – GPT‑5.6 Luna failing with OAuth, Xcode ACP ignoring config, and GitHub Copilot’s `/chat/completions` endpoint all point to a fragile provider abstraction.
- **Tool‑calling failures with Claude** – #9532 highlights that Claude models attempt unavailable tools, breaking the agent workflow.
- **Windows TUI startup failures** – #35828 shows that having an existing `.opencode` directory can crash the Windows TUI – a platform‑specific annoyance.
- **Conversation persistence miscommunication** – #36326 reveals that users incorrectly believe sessions survive shutdowns, leading to lost work and distrust.
- **Managed service restart storms** – #36285 in V2 causes severe latency spikes, affecting development flow during automatic updates.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest – 2026-07-11

**Today’s Highlights**  
GPT-5.6 Sol/Terra/Luna are rolling out across providers (GitHub Copilot, OpenAI Codex), with community PRs adding an `ultra` thinking level for the new models. Several critical regressions have been fixed, including a broken `httpIdleTimeoutMs` for self‑hosted providers and missing session‑ID support for OpenRouter. A number of embedded‑library bugs were also addressed, making Pi more reliable for programmatic use.

## Releases  
No new versions were published in the last 24 hours.

## Hot Issues  

1. [#6475 – Add GPT‑5.6 (Sol/Terra/Luna) to GitHub Copilot provider](https://github.com/earendil-works/pi/issues/6475)  
   *6 👍 · 8 comments*  
   The community is eager to use the new GPT‑5.6 reasoning models directly from Pi. This open issue tracks adding them to the built‑in Copilot catalog.

2. [#6206 – Clamping to context window prevents artificial context limits](https://github.com/earendil-works/pi/issues/6206)  
   *8 comments*  
   A recent fix that clamps `max_tokens` to the reported context window breaks users who want lower artificial limits. Discussion is lively about restoring flexibility without breaking the original constraint.

3. [#6476 – Regression: httpIdleTimeoutMs no longer respected for self‑hosted providers](https://github.com/earendil-works/pi/issues/6476)  
   *5 comments*  
   After upgrading to v0.80.6, requests to vLLM and other self‑hosted models time out prematurely. The community traced it to a Bun‑side HTTP idle timeout, now being addressed.

4. [#6300 – Windows: Input line redrawn on every keystroke](https://github.com/earendil-works/pi/issues/6300)  
   *5 comments*  
   A persistent TUI bug on Windows where each character appears on a new line. Users are providing terminal logs to help diagnose.

5. [#6303 – Exponential retry backoff has no cap](https://github.com/earendil-works/pi/issues/6303)  
   *1 👍 · 4 comments*  
   The `maxDelayMs` setting is defined but unused, so retries can run unbounded (e.g., 4+ minutes on attempt 7). Requested fix is straightforward.

6. [#6366 – Support session IDs for OpenRouter](https://github.com/earendil-works/pi/issues/6366)  
   *7 comments*  
   OpenRouter requires `x-session-id` (header) or `session_id` (body) for prompt caching, but Pi only sends the non‑standard `session_id` header. This blocks caching for many users.

7. [#6097 – Add support for 'max' thinking level](https://github.com/earendil-works/pi/issues/6097)  
   *17 👍 · 2 comments*  
   Highly requested feature: OpenAI announced a sixth thinking level (`max`) for GPT‑5.6 Sol. Community wants it surfaced in Pi’s UI, settings, and provider mappings.

8. [#6477 – Compaction summary requests omit session ID, breaking compaction on OpenAI Codex models](https://github.com/earendil-works/pi/issues/6477)  
   *2 👍 · 2 comments*  
   Using GPT‑5.6 Luna on Codex, compaction fails because the session ID isn’t sent. This is a blocker for users of the new models.

9. [#6324 – /tree branch summarization throws "No API key found" for ambient‑credential providers](https://github.com/earendil-works/pi/issues/6324)  
   *1 👍 · 2 comments*  
   Bedrock and Vertex AI users cannot use `/tree`’s summarization because the code expects an explicit API key. Ambient credential flows are neglected.

10. [#6374 – Model catalog fixes](https://github.com/earendil-works/pi/issues/6374)  
    *1 👍 · 2 comments*  
    Several popular models have conflicting reasoning‑level metadata across providers. A community effort is underway to deduplicate and correct the catalog.

## Key PR Progress  

1. [#6489 – feat(ai): add ultra thinking level](https://github.com/earendil-works/pi/pull/6489)  
   Introduces `ultra` as a first‑class thinking level everywhere (types, UI, settings, SDK). Maps to GPT‑5.6 Sol/Terra (Luna capped at Max). **Merged**.

2. [#6496 – fix(ai): support OpenRouter session affinity](https://github.com/earendil-works/pi/pull/6496)  
   Fixes #6366 by sending `x-session-id` and `session_id` in the JSON body as required by OpenRouter. **Merged**.

3. [#6501 – fix(extensions,theme): support embedded library hosts](https://github.com/earendil-works/pi/pull/6501)  
   Closes #6102 (theme Proxy throws) and addresses part of #6101 (stale ctx after session disposal). Makes Pi embeddable as a library more robust. **Merged**.

4. [#6503 – bump bun to 1.3.14](https://github.com/earendil-works/pi/pull/6503)  
   Bumps Bun to a version that respects `BUN_CONFIG_HTTP_IDLE_TIMEOUT`, directly addressing the regression in #6476. **Merged**.

5. [#6474 – feat(ai): support message‑anchored tool loading](https://github.com/earendil-works/pi/pull/6474)  
   Allows tools to be introduced mid‑conversation via `addedTools` in messages, benefiting Anthropic models with tool‑reference support. **Merged**.

6. [#6341 – feat(ai): support constrained sampling (JSON‑schema / GBNF)](https://github.com/earendil-works/pi/pull/6341)  
   Adds an opt‑in `constrainedSampling` config for tools, enabling provider‑side strict JSON generation or grammar‑based output. **Open**.

7. [#6506 – feat: add configurable auto‑update on new session](https://github.com/earendil-works/pi/pull/6506)  
   New setting `autoUpdateOnNewSession` to automatically run `pi update --all` at startup. Disabled by default. **Merged**.

8. [#6505 – feat(coding‑agent): add goal extension example](https://github.com/earendil-works/pi/pull/6505)  
   A new `/goal` example extension for multi‑turn autonomous task execution with pause/resume/lifecycle. Great reference for extension authors. **Merged**.

9. [#6490 – add xhigh and max to all fable‑5 providers](https://github.com/earendil-works/pi/pull/6490)  
   Fixes part of #6374 by ensuring `xhigh` and `max` thinking levels are advertised for Fable‑5 models across all providers. **Merged**.

10. [#6216 – feat: Add Amazon Bedrock Mantle OpenAI Responses provider](https://github.com/earendil-works/pi/pull/6216)  
    New provider using Bedrock Mantle’s OpenAI‑compatible API. Still open for review; represents growing interest in AWS‑native AI services.

## Feature Request Trends  

- **GPT‑5.6 & thinking levels** – The most active topic. Users want full support for the new OpenAI models, including the `ultra` and `max` thinking levels, across all providers (Copilot, Codex, OpenAI).  
- **Multi‑agent / foreground switching** – Several proposals (e.g., #6480) ask for core seams that allow extensions to host multiple live agent sessions and switch between them in one terminal.  
- **RPC & extension API expansion** – New features like opaque `attachments` in RPC prompts (#6493) and a `ctx.ui.setUsage` API for cost reporting (#6509) indicate desire to build more powerful extensions.  
- **Constrained sampling** – Both JSON‑schema and grammar‑based tool argument constraints are in demand, especially for structured output use cases (#6341).  
- **Self‑hosted model ergonomics** – Users are asking for better support for ambient‑credential providers (Bedrock, Vertex) and customizable HTTP timeouts (via config or env vars).

## Developer Pain Points  

- **Windows TUI bugs** – Input redrawing on every keystroke (#6300) and trailing spaces breaking copy (#6251) persist, frustrating Windows developers.  
- **Retry backoff unbounded** – The exponential backoff ignores the configured `maxDelayMs`, causing excessive wait times (#6303).  
- **Embedded library fragility** – Using `@earendil-works/pi-coding-agent` as a library exposes multiple issues: stale context after session disposal (#6101), theme not initialized (#6102), and `module not found` for typebox (#6512).  
- **Compaction bypasses settings** – Setting `compaction.enabled: false` is ignored when overflow recovery triggers compaction (#6472).  
- **Provider‑specific session/handling gaps** – OpenRouter session IDs, Bedrock stop‑reason mapping, and Cloudflare GLM 404s all point to incomplete provider support.  
- **`/reload` limitations** – Changes to imported `.mjs`/`.cjs` files are not picked up (#6000), and custom keybindings are not applied on initial session start (#6459).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-11

## Today’s Highlights
The `v0.19.9` release shipped after a brief CI hiccup, fixing the long‑standing subagent tool‑call loop and adding a YOLO mode keeper. Multi‑workspace daemon support (RFC #6378) continues to be the most active feature thread, with four related PRs merging this cycle. A flurry of Web Shell UX proposals (workspace selector, git branch, execution context) signals growing interest in a richer browser‑based experience.

## Releases
- **v0.19.8‑nightly.20260711** — Contains a fix for YOLO mode being lost when the model calls `enter_plan_mode`, and a CLI improvement that forwards `ask_user` questions.
- **v0.19.9** ([release](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.9)) — Stops repeated subagent tool‑call loops (PR #6543) and fixes broken history chain detection (#6548). Initial Docker sandbox integration tests failed (#6687, #6690) but were resolved by raising the prepared package size limit to 96 MB (#6691).

## Hot Issues (10 noteworthy)
1. **#6378** — [RFC] Multi‑workspace daemon (`qwen serve`). 20 comments, high activity. Clarifies the 1‑daemon = 1‑workspace limitation. Community is actively shaping the design.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/6378)

2. **#5975** — API error: no stream activity for 120 s after 19 chunks. 10 comments. Affected many users after v0.19.3. Root cause still under investigation.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/5975)

3. **#5970** — Auto‑enter Plan mode from Yolo mode reappeared. 5 comments. Fixed in nightly releases, but users report regression.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/5970)

4. **#6384** — Hard limit 0 when env‑configured model reserves full context for output. 5 comments. Critical bug that prevents any request from being sent.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/6384)

5. **#6590** — macOS standalone: Ctrl+V paste image fails (missing `@teddyzhu/clipboard`). 4 comments. Standalone packaging gap.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/6590)

6. **#6654** — `tool_use` blocks missing corresponding `tool_result`. 4 comments. Blocks tool‑calling workflows. Needs triage.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/6654)

7. **#6582** — UI text mixing Chinese and English when switching approval modes. 3 comments. Language consistency bug.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/6582)

8. **#6595** — Qwen3.7‑Max leaks `<analysis>/<summary>` tags in main responses. 3 comments. Can cause follow‑up actions to stop.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/6595)

9. **#6639** — MCP servers over HTTP don’t trigger OAuth recovery on 401. 3 comments. Impedes HTTP‑based MCP integrations.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/6639)

10. **#6700** — Feature request: workspace selector button in Web Shell composer toolbar. 2 comments. Part of a broader Web Shell UX overhaul.  
    [Issue](https://github.com/QwenLM/qwen-code/issues/6700)

## Key PR Progress (10 important)
1. **#6703** — `feat(web-shell)`: add session created callback. Allows embedders to inject settings immediately after session creation.  
   [PR](https://github.com/QwenLM/qwen-code/pull/6703)

2. **#6683** — `fix(core)`: retry leaked protocol turns in recovery paths. Extends the fix for leaked `<analysis>/<summary>` tags.  
   [PR](https://github.com/QwenLM/qwen-code/pull/6683)

3. **#6697** — `feat(web-shell)`: resume stopped sessions on load. Automatically continues interrupted turns after environment restart.  
   [PR](https://github.com/QwenLM/qwen-code/pull/6697)

4. **#6678** — `feat(cli)`: show full reasoning content when expanding thinking blocks during streaming. Restores pre‑collapsible behaviour.  
   [PR](https://github.com/QwenLM/qwen-code/pull/6678)

5. **#5847** — `feat(serve)`: runtime context injection for per‑turn system‑reminders. Enables dynamic system prompts via API.  
   [PR](https://github.com/QwenLM/qwen-code/pull/5847)

6. **#6584** — `feat(web-shell)`: mobile welcome composer slots. Optimises Web Shell layout for small screens.  
   [PR](https://github.com/QwenLM/qwen-code/pull/6584)

7. **#6696** — `fix(channels)`: suppress nested subagent output in DingTalk replies. Prevents internal file paths from leaking.  
   [PR](https://github.com/QwenLM/qwen-code/pull/6696)

8. **#6638** — `feat(cli)`: workspace‑qualified extensions REST for daemon multi‑workspace. Enables per‑workspace extension management.  
   [PR](https://github.com/QwenLM/qwen-code/pull/6638)

9. **#6635** — `feat(cli)`: group daemon channel workers by workspace. Allows channels for non‑primary workspaces.  
   [PR](https://github.com/QwenLM/qwen-code/pull/6635)

10. **#6579** — `fix(cli)`: keep model switches session‑scoped until `/model --default` is used. Prevents accidental persistence.  
    [PR](https://github.com/QwenLM/qwen-code/pull/6579)

## Feature Request Trends
- **Multi‑workspace daemon** (#6378, #6646, #6700, #6699, #6702): The community strongly desires running several workspaces under one `qwen serve` instance, with first‑class session organisation and dedicated REST endpoints.
- **Web Shell enrichment** (#6699, #6700, #6701, #6702): Workspace selector, execution context (local / worktree), git branch display — all aimed at parity with desktop UX.
- **SDK interactivity** (#6647): Support for `ask_user_question` tool in TypeScript and Python SDKs to enable rich agent‑user dialogs.
- **MCP & authentication** (#6639): Automatic OAuth recovery for HTTP‑based MCP servers.
- **Longer `/goal` conditions** (#6663): Remove 4000‑character limit for self‑contained task specifications.
- **Suspicious attachment guard** (#6597): Lightweight GitHub Actions moderation for community comments.

## Developer Pain Points
- **Streaming reliability** (#5975, #6654): API timeouts and mismatched tool‑use blocks continue to frustrate users, especially in long sessions.
- **YOLO mode regressions** (#5970, fix in nightlies): Auto‑switching to Plan mode undermines the fast‑feedback workflow.
- **Context‑window mismatches** (#6384, #6642): Hard‑limit‑zero errors and poor Anthropic cache hit rates (~20%) lead to wasted tokens and failures.
- **Packaging gaps** (#6590): Missing native modules (`@teddyzhu/clipboard`) on macOS standalone installs break clipboard interactions.
- **Release CI failures** (#6687, #6690): Docker sandbox test environment caused two release failures; fixed by increasing package size ceiling.
- **Protocol tag leaks** (#6595): Qwen3.7‑Max only — internal tags appearing in final responses disrupt agent tool‑calling.
- **Logging inconsistency** (#6600): `--debug` flag prints a log path but never creates the file, hindering debugging.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-11

## 🚀 Today's Highlights
**v0.8.68 is officially released**, landing the Fleet/Workflow/Lane/Runtime orchestration architecture, compact TUI mode, and Android Termux support. The release capped a massive 24-hour burst of stopship fixes, including fixes for TUI state routing, configured provider detection, and PTY regression coverage. Three separate dependabot and security-focused PRs from contributor `bistack` also added `cargo-audit` and `cargo-deny` CI checks and resolved multiple RUSTSEC advisories.

---

## 🎯 Releases
**v0.8.68 — `release: v0.8.68`**  
Everything landed in the final integration PR: workspace crate bumps, changelog, README, site language. Includes the full TUI/Android QA delta from local testing.  
📎 [PR #4327](https://github.com/Hmbown/CodeWhale/pull/4327)

---

## 🔥 Hot Issues (10 Picks)

1. **[#4032] "Codewhale not following the constitution"**  
   Community member `stream2stream` reports CodeWhale persistently writes its own temporary scripts instead of reusing user-provided scripts. Maintainer engaged; 33 comments. Points to a fundamental agent protocol/consistency failure.  
   📎 [Issue #4032](https://github.com/Hmbown/CodeWhale/issues/4032)

2. **[#4092] v0.8.68 execution board: lane order, dependencies, and agent protocol (canonical packet)**  
   The single source of truth for all v0.8.68 work. 60 comments — the most active issue. Replaces the July 7 triage packet; every open milestone issue now carries one `lane-*` label.  
   📎 [Issue #4092](https://github.com/Hmbown/CodeWhale/issues/4092)

3. **[#4175] v0.8.68 architecture: Fleet / Workflow / Lane / Runtime product model (canonical tracker)**  
   Canonical design tracker for the new orchestration vocabulary. Links to all implementation phases. Defines separation: Workflow = order, Fleet = who, AgentProfile = config.  
   📎 [Issue #4175](https://github.com/Hmbown/CodeWhale/issues/4175)

4. **[#4236] Epic: official Termux / Android arm64 support**  
   Users are asking for native TUI on Android. Track to build for Termux’s ABI instead of relying on Linux arm64 binaries. 7 comments; active QA issue #4242 is its child.  
   📎 [Issue #4236](https://github.com/Hmbown/CodeWhale/issues/4236)

5. **[#2984] OpenAI Codex/ChatGPT OAuth route verification**  
   Live-account verification for the OAuth route to move it from preview to supported. 4 comments; complements #3019.  
   📎 [Issue #2984](https://github.com/Hmbown/CodeWhale/issues/2984)

6. **[#3976] Memory: seed project-scoped recall ahead of full backend**  
   Lightweight per-project recall surface for agents — a seed before the external-memory backend. 3 comments; highly requested direction.  
   📎 [Issue #3976](https://github.com/Hmbown/CodeWhale/issues/3976)

7. **[#4329] Anthropic API error: missing tool_result blocks**  
   `lixin34` reports valid tool_use IDs without corresponding tool_result blocks — a protocol violation that needs routing-layer handling. 2 comments.  
   📎 [Issue #4329](https://github.com/Hmbown/CodeWhale/issues/4329)

8. **[#4077] Refactor web_search: split provider backends from 2,881-line god file**  
   The `web_search.rs` file is a maintainability nightmare (2,881 lines). Community flagged this; assigned to v0.8.69.  
   📎 [Issue #4077](https://github.com/Hmbown/CodeWhale/issues/4077)

9. **[#4335] Make offline scorecard pricing provider-aware**  
   Offline scorecard currently calls model-only pricing helpers, so the same model can be mispriced across routes. 0 comments, but subtle correctness issue.  
   📎 [Issue #4335](https://github.com/Hmbown/CodeWhale/issues/4335)

10. **[#4333] Configured picker treats empty provider headers as configured**  
    `provider_config_is_explicit` previously tested for presence of `http_headers`, not content. Fixed in #4332. Release-blocker.  
    📎 [Issue #4333](https://github.com/Hmbown/CodeWhale/issues/4333)

---

## 🔧 Key PR Progress (10 Picks)

1. **[#4337] fix(release): integrate v0.8.68 TUI and Android QA**  
   Final integration PR: lands cancelled-shell transcript state, PTY regression coverage, and authenticates Android loaded image before updater replacement on Termux.  
   📎 [PR #4337](https://github.com/Hmbown/CodeWhale/pull/4337)

2. **[#4336] feat(workflow): dispatch durable lanes without root model**  
   Dispatch `codewhale workflow run` directly through host-owned Workflow tool, without an operator-model turn. Preserves all profile/provider/model/sandbox/MCP context.  
   📎 [PR #4336](https://github.com/Hmbown/CodeWhale/pull/4336)

3. **[#4332] fix: make v0.8.68 TUI state and routing truthful**  
   **Stopship repair batch.** Treats only meaningful provider config as configured; blank fields/malformed auth no longer populate the configured model picker. Fixes custom provider identity preservation.  
   📎 [PR #4332](https://github.com/Hmbown/CodeWhale/pull/4332)

4. **[#4331] docs(release): align v0.8.68 mode FAQ and workflow commands**  
   Aligns English/Chinese FAQ with Plan/Act/Operate mode contract. Replaces nonexistent `workflow status/logs` with real `lane status/logs`. Adds `--fleet` to examples.  
   📎 [PR #4331](https://github.com/Hmbown/CodeWhale/pull/4331)

5. **[#4327] release: v0.8.68**  
   Release preparation PR: workspace crate bumps, changelog, final docs. Intentionally last — all feature work and CI-speed work already merged.  
   📎 [PR #4327](https://github.com/Hmbown/CodeWhale/pull/4327)

6. **[#4328] fix: upgrade dependencies to resolve cargo-audit vulnerabilities**  
   Fixes RUSTSEC-2026-0204 (crossbeam-epoch), RUSTSEC-2026-0187 (lopdf stack overflow), and transitive ttf-parser dependency bumps.  
   📎 [PR #4328](https://github.com/Hmbown/CodeWhale/pull/4328)

7. **[#4330] fix: update cargo-deny advisory ignore list**  
   Removes RUSTSEC-2026-0187 (fixed by #4328), adds ignores for `derivative` and `fxhash` (transitive via starlark).  
   📎 [PR #4330](https://github.com/Hmbown/CodeWhale/pull/4330)

8. **[#4272] ci: add RustSec security audit and cargo-deny checks**  
   New CI infrastructure: `cargo-audit` (non-blocking) and `cargo-deny` for advisories, bans, licenses, sources.  
   📎 [PR #4272](https://github.com/Hmbown/CodeWhale/pull/4272)

9. **[#4339] chore(deps): bump jsonschema from 0.46.4 to 0.47.0**  
   Part of the weekly dependabot rotation — important for schema validation correctness.  
   📎 [PR #4339](https://github.com/Hmbown/CodeWhale/pull/4339)

10. **[#3969] Add per-sub-agent provider routing**  
    Held for v0.8.68 fleet lane — branch is dirty against main; needs rebase through fleet profile fields. Author `heyparth1`.  
    📎 [PR #3969](https://github.com/Hmbown/CodeWhale/pull/3969)

---

## 📈 Feature Request Trends

Three dominant directions emerge from this week's issues:

1. **Workflow orchestration & sub-agent lanes** — Multiple `lane-*` and `workflow-runtime` issues (#4175, #4178, #4179, #4177) are converging on a formal Fleet/Workflow/Lane/Runtime product model. The community is watching this closely (60 comments on #4092 alone).

2. **TUI UX simplification** — Issue #4095 ("default TUI is too busy; compact mode should be standard") is now closed and baked into v0.8.68. Community sentiment: reduce visual noise by default.

3. **Android/Termux native support** — #4236 is a formal epic; #4242 its QA child. Users want to run CodeWhale directly on Android without Linux arm64 workarounds.

4. **Persistent session sidebar & session history** — #2934 (v0.8.69) asks for a sidebar sessions panel with auto-resume and history browsing, replacing the Ctrl+R popup.

5. **Project-scoped memory** — #3976 seeds lightweight per-project recall. Consensus: agents need context beyond user-scoped Markdown.

---

## ⚡ Developer Pain Points

- **TUI information overload** — Default TUI exposes too much low-level activity; UI feels chaotic during normal work (#4095). Fixed in v0.8.68 with compact mode.

- **Configured provider confusion** — Empty provider headers are treated as configured, polluting the model picker (#4333, #4332). Blank fields/malformed auth create false positives.

- **Session restore breaks custom provider identity** — Named custom providers (e.g. `lm-studio`, `my-openai-proxy`) collapse to generic `custom` enum after resume (#4334). Loses exact provider key.

- **Sub-agent spawning reliability** — #4032 shows agents writing scripts instead of using user-provided scripts; #3983 asks for work state to be model-visible on parent turns. Both indicate handoff friction.

- **Web search maintainability** — `web_search.rs` at 2,881 lines is a god file (#4077). Community flagging this ahead of 0.8.69.

- **Security debt** — Two RUSTSEC advisories resolved this week (#4328, #4330). `fxhash` and `derivative` remain transitive through starlark. New CI checks (PR #4272) should help.

- **Missing route-aware pricing** — Offline scorecard prices models without knowing the effective provider, leading to incorrect dollar estimates (#4335).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*