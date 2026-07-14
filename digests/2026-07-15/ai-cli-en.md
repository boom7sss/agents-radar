# AI CLI Tools Community Digest 2026-07-15

> Generated: 2026-07-14 23:00 UTC | Tools covered: 9

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

Here is the cross-tool comparison report based on the provided community digests.

## Cross-Tool Comparison Report: AI CLI Developer Tools
**Date:** 2026-07-15

### 1. Ecosystem Overview

The AI CLI tools ecosystem is in a state of rapid, high-velocity iteration, with the most active projects—Claude Code, OpenAI Codex, and Qwen Code—each shipping critical patches daily. A clear tension is emerging between the "monolithic agent" paradigm (Claude Code, Gemini CLI) and the "orchestrator/provider" paradigm (Pi, OpenCode, DeepSeek TUI), the latter of which is fighting provider compatibility battles. Across the board, **Windows platform reliability** and **subagent model enforcement** are the two most painful cross-cutting issues, while the community is universally demanding better **session state management** and **undo capabilities**.

### 2. Activity Comparison

| Tool | GitHub Stars (approx.) | Issues (24h) | PRs (24h) | Releases (24h) | Community Pulse |
|---|---|---|---|---|---|
| **Claude Code** | ~85k | 10 hot, 1 new | 10 active | 2 patches (v2.1.208, v2.1.209) | High engagement; Windows bug blocking workflows |
| **OpenAI Codex** | ~110k | 10 hot, 0 new | 10+ merged (mostly automation) | 4 alphas (v0.145.0-a.8→a.11) | Very high; largest open issue has 337 👍 |
| **Gemini CLI** | ~18k | 10 hot, 0 new | 5 active | 1 nightly (v0.52.0-nightly) | Moderate; agent reliability concerns dominate |
| **GitHub Copilot CLI** | ~15k | 9 new triage | 0 in 24h | 1 patch (v1.0.71-1) | Low/stable; auth friction is top pain |
| **Kimi Code CLI** | ~5k | 10 open | 3 merged, 7 open | 0 | Low but growing; TPD rate-limit is critical |
| **OpenCode** | ~12k | 10 hot, 0 new | 8 merged | 2 patches (v1.18.0, v1.18.1) | High; v2 layout friction, CPU regressions |
| **Pi** | ~4k | 10 hot, 0 new | 8 merged | 1 breaking (v0.80.7) | Moderate; provider expansion and OAuth focus |
| **Qwen Code** | ~30k | 10 hot, 0 new | 10 active | 1 stable (v0.19.10) | Very high; multi-workspace milestone |
| **DeepSeek TUI** | ~8k | 17 updated | 15 updated | 0 (RC prep) | Moderate; agent constitution compliance is loudest |

**Key observations:**
- **Claude Code and OpenAI Codex** have the most engaged communities by upvote count, but **Qwen Code** leads in raw PR throughput.
- **OpenAI Codex** has the highest-velocity release cadence (4 alphas in 24h), followed by **Claude Code** (2 patches).
- **GitHub Copilot CLI** and **Kimi Code** show the least activity, suggesting either maturity or stagnation.

### 3. Shared Feature Directions

The following requirements appear across multiple tool communities, indicating industry-wide demand:

| Requirement | Appears In | Specific Need |
|---|---|---|
| **Undo/rollback for non-Git changes** | Claude Code (#9203, 337👍), OpenAI Codex (#9203), GitHub Copilot CLI (#1675) | Users want to revert unintended file edits/deletions outside Git tracking. |
| **Subagent model enforcement** | Claude Code (#68147, #73365), OpenAI Codex (#31814), Gemini CLI (#22093) | Users specify a subagent model, but the system silently overrides or ignores it. |
| **Windows file path handling** | Claude Code (#17643, #66222, #66183), OpenAI Codex (#32040, #32683), GitHub Copilot CLI (#2165) | LSP integration, URL generation, and MCP plugin spawning all break with backslashes or non-ASCII. |
| **Configuration silent failures** | OpenAI Codex (#13386), Gemini CLI (#22267), GitHub Copilot CLI (#3874) | Settings (AGENTS.md, `settings.json`, hooks) are read but not applied, leading to trust erosion. |
| **Windows app stability** | Claude Code (#73365), OpenAI Codex (#32040, #32683), Kimi Code (#2481) | Crashes, hangs, orphaned processes, and Chromium embedding issues on Windows 10/11. |
| **Session state corruption** | Claude Code (#66179), OpenAI Codex (#32969), Gemini CLI (#26522), Kimi Code (#2496) | Tool outputs replaced, chat lists disappearing, memory indexes stale, fork produce corrupted output. |
| **Configurable compaction/context control** | Qwen Code (#2128, #6487), DeepSeek TUI (#3765), Claude Code (multiple) | Users want engine-level control over context compaction, seam management, and memory limits. |
| **Plugin/MCP marketplace infrastructure** | Claude Code (#28300), GitHub Copilot CLI (#4103), Pi (#5363) | Demand for CLI-native marketplace commands, private registries, and credential forwarding. |
| **Prompt cache stability** | Pi (#6621), Qwen Code (multiple) | Dynamic system prompts destroy prompt cache efficiency; users want stable cache keys. |

### 4. Differentiation Analysis

**Feature Focus:**
- **Claude Code, OpenAI Codex, Gemini CLI**: Focus on **multi-agent orchestration** (subagents, A2A protocol, model routing). They are building the "brains" of distributed agent systems.
- **OpenCode, Pi, DeepSeek TUI**: Focus on **provider expansion, configuration flexibility, and UI/UX**. They are building the "operating system" that connects to many model backends.
- **Qwen Code**: Focus on **server-side session management and daemon scalability** (multi-workspace, ACP transport).
- **GitHub Copilot CLI**: Focus on **enterprise-grade infrastructure** (plugin marketplaces, persistent MCP configs, sidebar sessions).

**Target Users:**
- **Claude Code, OpenAI Codex**: Advanced developers who trust the ecosystem (Anthropic/OpenAI) and build agent chains. Willing to tolerate platform-specific bugs for power.
- **OpenCode, Pi, DeepSeek TUI**: Hobbyists, power users, and multi-provider users who want maximum flexibility and control over model choice.
- **Qwen Code**: Chinese-speaking developers and enterprise users needing server-side deployment (DingTalk integration, WebShell).
- **GitHub Copilot CLI**: Enterprise developers using GitHub's ecosystem (plugins, marketplace, Azure DevOps).

**Technical Approach:**
- **Claude Code**: Prioritizes **agent reliability** (hook validation, subagent leaf agents) over speed.
- **OpenAI Codex**: Prioritizes **rapid model migration** (GPT-5.4→5.6) and **provider breadth** (Amazon Bedrock, MCP reuse).
- **Pi**: Prioritizes **provider compatibility** (OAuth flows, header clamping, model catalog) as a proxy/gateway.
- **Qwen Code**: Prioritizes **daemon scalability** and **session controls** (multi-workspace, heartbeat, channel memory).

### 5. Community Momentum & Maturity

**High Momentum / Rapid Iteration:**
- **Qwen Code**: 50+ issues/PRs touched in 24h, multi-workspace milestone, stable release shipped. Highest raw throughput.
- **OpenAI Codex**: 4 alpha releases in 24h, 20+ merged PRs, rapid model migration. The most aggressive release cadence.
- **Claude Code**: 2 patches daily, high community engagement (153👍 on a single Windows bug). Mature but still rapidly fixing.
- **DeepSeek TUI**: 17 issues + 15 PRs updated in 24h, RC prep for v0.8.68. Building momentum after a quieter period.

**Moderate Momentum / Maturing:**
- **OpenCode**: Active community (190👍 for Cursor CLI support), v2 migration complete. Slowing on new features, focusing on stabilization.
- **Pi**: Consistent PR throughput (8 merged), breaking changes (v0.80.7). Settling into a "proxy/gateway" niche.

**Lower Momentum / Stalled:**
- **Gemini CLI**: Low issue count growth, no release since nightly. Community engagement is moderate but not growing.
- **GitHub Copilot CLI**: 9 new triage issues but 0 PRs in 24h. Patch release today but overall low activity.
- **Kimi Code CLI**: No new release, 1 active PR (#2492). The TPD rate-limit bug (#2318) is open for 2 months with no fix.

### 6. Trend Signals

**1. The "Subagent Trust Crisis"**
The most explosive trend is that **agents are not following user configuration**. From Claude Code (#68147, #73365) to OpenAI Codex (#31814) to Gemini CLI (#22093) to DeepSeek TUI (#4032), users report that subagents ignore model preferences, override denied permissions, or bypass user-authored scripts. This is a trust-breaking pattern that vendors must address urgently—or risk users abandoning agent delegation entirely.

**2. Windows is the Achilles' Heel**
Every tool with a Windows user base has at least one critical, unresolved Windows-specific bug (Claude Code: #73365, OpenAI Codex: #32040/#32683, GitHub Copilot CLI: #2165, Kimi Code: #2481). These are not cosmetic—they block core workflows (LSP, MCP plugins, browser embedding). For tools targeting enterprise adoption, Windows parity is non-negotiable.

**3. The "Model Migration Tax"**
As model providers deprecate old models (e.g., OpenAI's GPT-5.4→5.6), the CLI tools are struggling to manage the transition. Hardcoded model IDs (#31814), parameter compatibility breaks (#31846), and silent model replacement (#33173) all point to a need for **model abstraction layers** that buffer users from provider-level churn.

**4. Session State Reliability Erosion**
Multiple tools report **session state corruption** (Claude Code: #2786, OpenAI Codex: #32969, Qwen Code: #6487, Kimi Code: #2496). Whether it's tool outputs replaced, memory indexes stale, or fork producing corrupted output, users cannot trust long-lived sessions. This pushes users toward short-lived "disposable" sessions, undermining the value proposition of context management and memory.

**5. The "Configuration Trust" Gap**
A recurring finding (OpenAI Codex: #13386, Gemini CLI: #22267, GitHub Copilot CLI: #3874) is that **configuration files are read but not applied**. AGENTS.md truncated silently, settings.json overrides ignored, hooks that deny tools but don't stop execution. If a developer cannot trust that their configuration is respected, the entire governance model collapses. This is a product of **incomplete validation pipelines** rather than malicious design—but the impact is the same.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-07-15 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

The following Skill submissions (PRs) generated the most community discussion and attention:

### #1: skill-creator `run_eval.py` Fix (#1298)
- **Skill**: Core fix for the `skill-creator` evaluation pipeline
- **Functionality**: Repairs the `run_eval.py` script that was reporting 0% recall across all queries, breaking the description-optimization loop. Fixes Windows stream reading, trigger detection, and parallel worker behavior.
- **Discussion**: References Issue #556 (12+ comments, 7 👍) documenting 10+ independent reproductions of the 0% recall bug. This is the most critical infrastructure fix in the repository.
- **Status**: Open | [GitHub](https://github.com/anthropics/skills/pull/1298)

### #2: Self-Audit / Reasoning Quality Gate (#1367)
- **Skill**: `self-audit` — mechanical verification + four-dimension reasoning audit
- **Functionality**: Audits AI output before delivery: Step 0 verifies all claimed output files exist; Steps 1-4 perform reasoning quality checks in damage-severity priority order. Universal across projects and models.
- **Discussion**: Active proposal for a three-gate pipeline (#1385) extending this concept with pre-task calibration and adversarial review. Strong design-thinking engagement.
- **Status**: Open | [GitHub](https://github.com/anthropics/skills/pull/1367)

### #3: Document Typography Skill (#514)
- **Skill**: `document-typography` — typographic quality control
- **Functionality**: Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Addresses visual quality issues that affect every Claude-generated document.
- **Discussion**: Broadly applicable skill addressing a universal pain point. Well-received for specificity and clarity of trigger conditions.
- **Status**: Open | [GitHub](https://github.com/anthropics/skills/pull/514)

### #4: ODT Document Skill (#486)
- **Skill**: `odt` — OpenDocument text creation, template filling, ODT-to-HTML conversion
- **Functionality**: Creates, fills, reads, and converts OpenDocument Format files (.odt, .ods) with triggers for LibreOffice, OpenOffice, and ISO-standard document requests.
- **Discussion**: Demonstrates demand for enterprise document format support alongside existing DOCX and PDF skills.
- **Status**: Open | [GitHub](https://github.com/anthropics/skills/pull/486)

### #5: Testing Patterns Skill (#723)
- **Skill**: `testing-patterns` — comprehensive testing methodology
- **Functionality**: Covers testing philosophy (Testing Trophy model), unit testing (AAA pattern), React component testing (Testing Library), integration testing, and E2E strategies.
- **Discussion**: Strong community interest in development workflow skills. Addresses the "what to test vs. what NOT to test" gap.
- **Status**: Open | [GitHub](https://github.com/anthropics/skills/pull/723)

### #6: Color Expert Skill (#1302)
- **Skill**: `color-expert` — color knowledge and application
- **Functionality**: Covers color naming systems (ISCC-NBS, Munsell, XKCD, RAL), color space selection (OKLCH for scales, OKLAB for gradients, CAM16 for perceptual accuracy), and accessibility.
- **Discussion**: Unique skill combining technical precision with design utility. Received for its "what to use when" tables.
- **Status**: Open | [GitHub](https://github.com/anthropics/skills/pull/1302)

### #7: Meta-Skills: Quality & Security Analyzers (#83)
- **Skill**: `skill-quality-analyzer` and `skill-security-analyzer`
- **Functionality**: Quality analysis across Structure & Documentation (20%), Trigger Accuracy, Instruction Clarity, Robustness, and Performance. Security analysis for prompt injection, sandboxing, and dependency risks.
- **Discussion**: Meta-skills for the ecosystem itself. Important for community quality assurance as the skills library grows.
- **Status**: Open | [GitHub](https://github.com/anthropics/skills/pull/83)

---

## 2. Community Demand Trends

Analysis of top Issues reveals five concentrated demand directions:

### 🔴 Critical Infrastructure Stability
**Issue #556** (12 comments, 7 👍) — `run_eval.py` reporting 0% trigger rate is the #1 blocker, impacting all skill-creator users. Multiple Windows compatibility Issues (#1061, #1169) compound the problem. **Priority: Critical**

### 🔴 Security & Trust Boundaries
**Issue #492** (34 comments, 2 👍) — Community skills distributed under the `anthropic/` namespace create trust boundary abuse risks. Most-commented Issue overall. Users want clear provenance signals for official vs. community skills. **Priority: High**

### 🟡 Enterprise Skill Sharing
**Issue #228** (14 comments, 7 👍) — Demand for org-wide skill distribution without manual `.skill` file sharing. Users request direct sharing links or shared skill libraries within Claude.ai. **Priority: High**

### 🟡 Agent Governance & Safety
**Issue #412** — Proposal for `agent-governance` covering policy enforcement, threat detection, trust scoring, and audit trails. Reflects growing concern about safety patterns for multi-agent systems. **Priority: Medium**

### 🟡 Duplicate Skill Management
**Issue #189** (6 comments, 9 👍) — `document-skills` and `example-skills` plugins install identical content, causing context window waste. Highest-upvoted Issue reflects ecosystem quality concerns. **Priority: Medium**

---

## 3. High-Potential Pending Skills

These Skills have active discussion and may land soon:

| PR | Skill | Why It Matters |
|----|-------|----------------|
| #1298 | skill-creator `run_eval` fix | Unblocks all skill-creator users; the most critical pending fix |
| #1367 | self-audit (reasoning quality gate) | Novel approach to output verification; follow-up pipeline proposal (#1385) |
| #723 | testing-patterns | Addresses universal developer workflow need |
| #1302 | color-expert | Unique design/technical hybrid skill |
| #514 | document-typography | Fixes visible quality issues in all generated docs |
| #486 | odt | Expands enterprise document format support |
| #1323 | run_eval trigger detection fix | Parallel fix to #1298 for recall=0% problems |
| #1261 | Isolate eval files from live projects | Prevents eval data from polluting user project registries |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for skill-creator infrastructure stability (run_eval, Windows compatibility, trigger detection) — until `recall=0%` is fixed, the entire skill development pipeline is effectively broken, blocking all downstream innovation.**

Secondary demand clusters around:
- **Enterprise document workflows** (ODT, typography, color standards)
- **Development quality** (testing patterns, code review, security auditing)
- **Ecosystem governance** (trust boundaries, skill sharing, duplicate management)

The meta-skill approach (#83, #1367) — skills that analyze or improve other skills — represents an emerging pattern for ecosystem self-regulation.

---

# Claude Code Community Digest — 2026-07-15

## Today's Highlights

Two minor patch releases landed today: v2.1.209 fixes a dialog-blocking regression in background agent sessions, while v2.1.208 introduces accessibility improvements (screen reader mode) and a vim insert-mode remapping feature. The top community issue—an "Advisor always unavailable" bug on Windows—has accumulated 82 comments and 153 reactions over nearly two weeks, indicating a systemic platform-specific problem that has not yet been resolved.

## Releases

**v2.1.209** — Patch fix: Reverts an overly broad guard that was blocking `/model` and other dialogs in `claude agents` background sessions. [GitHub link](https://github.com/anthropics/claude-code/releases/tag/v2.1.209)

**v2.1.208** — Two additions:
- **Screen reader mode**: Opt-in plain-text rendering for accessibility. Enable via CLI flag `--ax-screen-reader`, environment variable `CLAUDE_AX_SCREEN_READER=1`, or `"axScreenReader": true` in settings.
- **`vimInsertModeRemaps` setting**: Allows users to map two-key insert-mode sequences (e.g., `jj` → Escape). [GitHub link](https://github.com/anthropics/claude-code/releases/tag/v2.1.208)

## Hot Issues (Top 10)

1. **[#73365 — Advisor always "unavailable" on Windows (Fable 5 advisor, Opus 4.8)](https://github.com/anthropics/claude-code/issues/73365)**  
   *82 comments, 153 👍* — The most active issue. Opus 4.8 main model fails to load any advisor across all sessions on Windows. High community engagement suggests it's blocking workflows for a significant subset of users. Still OPEN with `area:model` and `platform:windows` labels.

2. **[#28300 — Multi-agent collaboration across machines (Agent-to-Agent protocol)](https://github.com/anthropics/claude-code/issues/28300)**  
   *35 comments* — A long-standing feature request (filed February 2026) for distributed agent orchestration. The sustained discussion reflects demand for multi-machine MCP agent coordination beyond single-host setups.

3. **[#17643 — jdtls-lsp Plugin fails on Windows (invalid file URI format)](https://github.com/anthropics/claude-code/issues/17643)**  
   *17 comments, 19 👍* — Windows-specific LSP integration bug: Claude Code sends backslash paths to the Java LSP server, producing invalid URIs. Dated January 2026, still OPEN—persistent Windows path handling issue.

4. **[#37628 — VSCode: Renaming session via sidebar doesn’t sync terminal tab title](https://github.com/anthropics/claude-code/issues/37628)**  
   *10 comments, 13 👍* — UI inconsistency: custom session names are overwritten by the next message. Minor UX bug but affects workflow for VS Code extension users.

5. **[#77602 — AskUserQuestion auto-resolves to recommended option in remote-control sessions](https://github.com/anthropics/claude-code/issues/77602)**  
   *3 comments* — Critical for automation: in `--remote-control` mode with `askUserQuestionTimeout` unset, questions auto-accept the default recommendation rather than blocking. Filed yesterday, may indicate a regression or safety concern.

6. **[#65858 — Feature request: in-session text search (Ctrl+F) in VSCode extension](https://github.com/anthropics/claude-code/issues/65858)**  
   *3 comments, 1 👍* — Native find-in-conversation for the VS Code panel. Simple request that would improve daily navigation for extension users.

7. **[#68147 — Subagent model override silently dropped after continuation boundary](https://github.com/anthropics/claude-code/issues/68147)**  
   *2 comments, 7 👍* — CLOSED but notable: when a subagent receives an explicit `model` parameter, the override is lost after a `SendMessage` follow-up or compaction. Important for developers relying on precise model routing in agent chains.

8. **[#66222 — `/insights` generates invalid file:// URL on Windows with non-ASCII usernames](https://github.com/anthropics/claude-code/issues/66222)**  
   *3 comments, 1 👍* — Non-RFC 8089 compliant URLs on Windows when usernames contain accented characters. Illustrates ongoing edge-case issues in cross-platform URL generation.

9. **[#66185 — Bash security heuristic false-positive on Next.js `[param]` brackets](https://github.com/anthropics/claude-code/issues/66185)**  
   *2 comments* — CLOSED but relevant: Bash security layer treats `[param]` as glob patterns, blocking legitimate write commands. Affects Next.js and other frameworks using bracket-notation routes.

10. **[#66183 — Windows/Cowork: built-in Node.js not used for MCP plugin servers → spawn ENOENT](https://github.com/anthropics/claude-code/issues/66183)**  
    *3 comments* — CLOSED duplicate of #35175. Cowork mode on Windows fails to find `node` for MCP plugins because the bundled Node.js path is not used. A recurring pain point for Windows multi-agent setups.

## Key PR Progress (Top 10)

1. **[#77556 — fix(plugin-dev): validate-hook-schema.sh handles plugin hooks.json format](https://github.com/anthropics/claude-code/pull/77556)**  
   OPEN, filed today. Fixes two validation bugs in the plugin-dev hook schema validator: a spurious flag check on nested hooks and incorrect `jq` variable interpolation. Ensures the validator accepts configurations matching its own documentation.

2. **[#77492 — fix(hookify): match Write and prompt rules](https://github.com/anthropics/claude-code/pull/77492)**  
   OPEN. Makes file rules inspect content passed to Write operations and maps simple prompt rules to the current UserPromptSubmit payload. Adds regression coverage for Write, Edit, and prompt rules. Addresses a root cause where simple rules were inferred from absent fields.

3. **[#77260 — fix(hookify): match Write and prompt rules](https://github.com/anthropics/claude-code/pull/77260)**  
   CLOSED (reopened as #77492). Previously submitted, then reopened with a refined approach.

4. **[#77443 — fix(ralph-wiggum): make stop hook's jq error handling reachable under set -e](https://github.com/anthropics/claude-code/pull/77443)**  
   OPEN. Fixes an error-handling bug in the Ralph Wiggum plugin's stop hook: `jq` failure was silently swallowed because the pipe to `2>&1` prevented the `$?` check from seeing the exit code. Proper error propagation added.

5. **[#77442 — fix: repair issue-automation telemetry and dead days_back input](https://github.com/anthropics/claude-code/pull/77442)**  
   OPEN. Three fixes in CI automation: Statsig events timestamped in epoch 1970 (fixed to use `now`), a dead `days_back` input that was hardcoded to 30 despite parameter, and a stale variable name reference.

6. **[#77439 — docs(plugins): sync security-guidance listing with v2.0.0 plugin manifest](https://github.com/anthropics/claude-code/pull/77439)**  
   OPEN. Updates `marketplace.json` and other listing files to reflect the v2.0.0 rewrite of the security-guidance plugin. Docs drift fix.

7. **[#77427 — fix(pr-review-toolkit): make code-reviewer a leaf agent](https://github.com/anthropics/claude-code/pull/77427)**  
   OPEN. Restricts the `code-reviewer` agent to repository-inspection tools only and prevents it from invoking additional agents. Prevents runaway agent chains during PR review.

8. **[#76298 — docs: document Remote Control background-task panel](https://github.com/anthropics/claude-code/pull/76298)**  
   CLOSED, merged. Documents the web/mobile background-task panel introduced in v2.1.205, covering task status synchronization behavior. Useful for remote-control users managing long-running sessions.

## Feature Request Trends

- **Agent orchestration & cross-machine collaboration** (#28300): The most ambitious feature request—Agent-to-Agent protocol for multi-machine MCP-based collaboration. Sustained interest over 5 months.
- **In-session search in VS Code** (#65858): Simple but high-utility request for `Ctrl+F` within conversations.
- **Windows platform parity**: Multiple requests for proper Windows file path handling (URI formats, backslash normalization, Node.js path resolution) remain unresolved.
- **Permission system refinements**: Requests for more granular deny-rule enforcement and consistent `--dangerously-skip-permissions` behavior.

## Developer Pain Points

- **Windows file path handling is a persistent pain point** (#17643, #66222, #66183, #66185): LSP integration, `/insights` URL generation, MCP plugin spawning—all exhibit Windows-specific path bugs. The jdtls-lsp issue (#17643) has been open since January.
- **Model routing inconsistencies** (#68147, #73365): Subagent model overrides silently lost after continuation boundaries, and the Opus 4.8 advisor failure on Windows (#73365) suggests deeper model-selection bugs.
- **Permission system surprises** (#66185, #66225): Bash security heuristics false-positive on bracket paths (Next.js), and `--dangerously-skip-permissions` no longer fully respects managed-settings.json denials.
- **Token usage and cost display confusion** (#66124, #66180, #66237): Multiple reports of mismatched usage display vs. actual limits, session resumption accumulating stale token counts after limit reset, and 4x expected consumption rates.
- **Conversation state contamination** (#66179): A severe reported bug where tool outputs were replaced with fake summaries and unsent messages were injected into history—closed as stale but indicative of session integrity concerns.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-15

## Today's Highlights

OpenAI continues rapid iteration on the **rust-v0.145.0-alpha** series with four new alpha releases today, signaling an approaching stable release. The community remains vocal about two major issues: **GPT-5.6 Sol's subagent model enforcement** (#31814, 66 comments) and the missing **`/undo` command** (#9203, 337 👍). A batch of 20+ merged PRs from `copyberry[bot]` landed today, addressing MCP tool caching, Windows sandbox performance, and the GPT-5.4→5.6 model migration.

## Releases

Four alpha releases published in the last 24 hours: `rust-v0.145.0-alpha.8` through `rust-v0.145.0-alpha.11`. No user-facing changelogs accompany these builds; the `rust-v0.144.4` patch is a maintenance-only release with no functional changes. The rapid alpha cadence suggests active stabilization of the v0.145.0 branch.

## Hot Issues

1. **[#31814] GPT-5.6 Sol cannot specify subagent models** (66 comments, 147 👍) — A deep config bug: Sol's model metadata hardcodes `multi_agent_version = "v2"` independent of feature toggles, then silently overrides user subagent model preferences. Community frustrations center on loss of control in multi-agent workflows. [View Issue](https://github.com/openai/codex/issues/31814)

2. **[#9203] Please make "/undo" back** (55 comments, 337 👍) — The highest-voted open issue. Users report lost work from unintended file deletions and modifications outside Git tracking. No official response yet, making this a top-priority community demand. [View Issue](https://github.com/openai/codex/issues/9203)

3. **[#28969] Add setting to disable 60-second auto-resolve for questions** (34 comments, 118 👍) — The new auto-dismiss countdown on `ask_question` is disruptive for users needing time to craft thoughtful responses. Tension between agent efficiency and human deliberation speed. [View Issue](https://github.com/openai/codex/issues/28969)

4. **[#32040] Windows Desktop: in-app Browser hangs after PiP failure** (25 comments) — Browser-use crashes cascade: PiP window failure leads to complete app freeze. Multiple Windows 11 x64 users affected, suggesting a Chromium embedding issue. [View Issue](https://github.com/openai/codex/issues/32040)

5. **[#31846] GPT-5.3 Codex Spark fails with "Unsupported parameter: reasoning.summary"** (19 comments) — A regression in model parameter compatibility. Pro users on macOS hitting this immediately when using Codex Spark, indicating a model-version mismatch in the app's API call construction. [View Issue](https://github.com/openai/codex/issues/31846)

6. **[#17229] Windows App spawns orphan git.exe/conhost.exe processes** (14 comments) — Long-standing resource leak: `git status --porcelain=v1 -z` processes accumulate without cleanup. Still unresolved after 3 months. [View Issue](https://github.com/openai/codex/issues/17229)

7. **[#32683] Windows App crashes in CrBrowserMain (0xC0000005)** (12 comments) — Memory access violation when Browser Use opens a page. Pro users on Windows 11, crash at `chrome.dll+0x2e08f46` — likely a Chromium version compatibility problem. [View Issue](https://github.com/openai/codex/issues/32683)

8. **[#31573] OAuth authentication fails at issuer validation** (9 comments, 24 👍) — Free-tier users unable to authenticate via OAuth due to strict issuer URL validation. Workflow blocked completely. [View Issue](https://github.com/openai/codex/issues/31573)

9. **[#32147] VS Code: Shift+Tab no longer toggles Plan Mode** (7 comments, 11 👍) — Regression in the latest IDE extension `26.707.31428`. Muscle-memory breaking change for Windows VS Code users. [View Issue](https://github.com/openai/codex/issues/32147)

10. **[#13386] AGENTS.md silently truncated** (3 comments, 10 👍) — Instructions near the end of AGENTS.md are ignored. A subtle but dangerous bug: users believe their configuration is complete when critical directives are silently dropped. [View Issue](https://github.com/openai/codex/issues/13386)

## Key PR Progress

1. **[#33187] Honor workspace spend controls in rate-limit handling** — Fixes sparse/out-of-order rate-limit updates that could allow spending past a workspace hard stop. Propagates account metadata and credit balances properly. [View PR](https://github.com/openai/codex/pull/33187)

2. **[#33184] Reuse MCP tool catalogs across sessions** — Performance optimization: caches stdio MCP server tool catalogs, eliminating initialization wait time when starting new sessions with unchanged server configurations. [View PR](https://github.com/openai/codex/pull/33184)

3. **[#33180] Serialize concurrent MCP stdin writes** — Fixes a race condition where two concurrent JSON-RPC messages could interleave on stdin. Adds a semaphore guard with regression test. [View PR](https://github.com/openai/codex/pull/33180)

4. **[#33175] Handle Amazon Bedrock credentials during logout** — Ensures logout doesn't remove AWS-managed credentials that Codex doesn't control. Precise lifecycle management for multi-cloud auth. [View PR](https://github.com/openai/codex/pull/33175)

5. **[#33173] Migrate GPT-5.4 uses to GPT-5.6 variants** — Hides deprecated `gpt-5.4` and `gpt-5.4-mini`, redirects to `gpt-5.6-terra` and `gpt-5.6-luna`. Memory consolidation tasks shift to Terra; extraction to Luna. [View PR](https://github.com/openai/codex/pull/33173)

6. **[#33170] Support Amazon Bedrock login in the app server** — Adds `account/login/start` handler for `type: "amazonBedrock"`. Validates API key and Mantle region, persists credentials, selects model provider. [View PR](https://github.com/openai/codex/pull/33170)

7. **[#33156] Run detached reviews as review-agent turns** — Converts detached code reviews into standard forked turns with normal steering and permissions. Adds a bundled `$review-agent` skill with read-only guidance. [View PR](https://github.com/openai/codex/pull/33156)

8. **[#33152] Support paginated thread history in app-server list APIs** — Enables cursor-based pagination for `thread/turns/list`, matching existing thread discovery pagination. [View PR](https://github.com/openai/codex/pull/33152)

9. **[#33149] Build MCP tool runtimes before router planning** — Unified tool planning: converts MCP metadata to `CoreToolRuntime` instances before constructing the router, eliminating separate direct/deferred MCP paths. [View PR](https://github.com/openai/codex/pull/33149)

10. **[#33159] Move sleep items to extension-owned lifecycle path** — Refactors `clock.sleep` events into the `codex-extension-items` system, preserving sleep persistence and thread-history reconstruction. [View PR](https://github.com/openai/codex/pull/33159)

## Feature Request Trends

- **Undo/rollback capability** (#9203, #28969, #31651): The top community ask is restoring `"/undo"` for non-git-tracked changes and adding user-controlled dismiss behavior for agent questions.
- **Accessibility and read-aloud** (#20957): Users want parity with ChatGPT's text-to-speech, citing this as a high-priority accessibility feature.
- **Multi-agent orchestration commands** (#33186): A new request for a dedicated `/orchestrator` command that coordinates subagents via native multi-agent tools, emerging as the model capability matures.
- **Rate-limit transparency** (#31488, #33188): Users report confusion about banked resets not accumulating properly, wanting clearer usage dashboards and predictable quota behavior.

## Developer Pain Points

- **Windows stability crisis**: The top cluster of pain: app hangs (#32040), crashes (#32683), orphaned processes (#17229), sandbox slowness (#33158), and update failures (#29787). Windows remains the least stable platform.
- **Model versioning surprises**: Issues #31814 (Sol subagent lock-in) and #31846 (Spark parameter error) show that model upgrades are introducing breaking changes without clear migration paths or user opt-out.
- **Session and chat state loss**: Multiple reports (#32969, #33157, #27284) of disappearing projects, chat lists, and thread visibility across app updates and platform switches. State management reliability is eroding trust.
- **Configuration silent failures**: AGENTS.md truncation (#13386), profile model_provider being ignored (#23417), and rate-limit misapplication (#33188) — developers cannot trust that their configured settings are actually applied.
- **Browser Use fragility**: Two separate Windows crash reports (#32040, #32683) involve the in-app headless browser. The feature appears to have fundamental Chromium embedding issues on Windows that trigger null-pointer dereferences.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-15

## Today's Highlights
Two critical fixes landed in tonight's nightly: enriched error messaging for quota limits and a fix for A2A task cancellation hanging the execution loop. Meanwhile, the community continues to surface agent reliability issues—subagent recovery incorrectly reporting success after MAX_TURNS, generalist agent hangs, and shell commands stuck awaiting phantom input remain top concerns. A new PR bounding shell output to the model promises to rein in runaway token consumption.

## Releases
**v0.52.0-nightly.20260714.gfa975395b** — two fixes:
- [PR #28391](https://github.com/google-gemini/gemini-cli/pull/28391): Shared project quota limit errors now include a setup hint to help users resolve the issue faster.
- [PR #2831](https://github.com/google-gemini/gemini-cli/pull/2831): A2A server task cancellation now properly aborts the execution loop, preventing orphaned processes.

## Hot Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent MAX_TURNS recovery falsely reports GOAL success** (10 comments, 2 👍)  
   A `codebase_investigator` subagent hits its turn limit before performing any analysis but reports `status: "success"` with `Termination Reason: "GOAL"`. This masking of interruption is a significant reliability concern for agent workflows. *Community: active discussion on detection logic.*

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist agent hangs forever** (7 comments, 8 👍)  
   Simple tasks (e.g., folder creation) trigger indefinite hangs when the generalist agent is invoked. User reports waiting up to an hour. Workaround: explicitly instructing the model not to use subagents. *High community engagement, strongest upvote count in this batch.*

3. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell commands stuck on "Waiting input" after completion** (4 comments, 3 👍)  
   Post-execution, the shell tool shows the command as active and awaiting input despite the command having finished. Reproducible with trivial commands. *Recurring pain point for daily CLI users.*

4. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini underutilizes custom skills and sub-agents** (6 comments)  
   The model rarely invokes user-defined sub-agents or skills autonomously, even when task descriptions closely match. Only works when the user explicitly instructs. *Core UX issue eroding value of custom agent definitions.*

5. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory retries low-signal sessions indefinitely** (5 comments)  
   Sessions deemed low-signal by the extraction agent remain unprocessed and are surfaced repeatedly. *Leads to infinite retry loops and wasted API calls.*

6. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — Secrets reach model context before redaction in Auto Memory** (3 comments)  
   Current architecture sends transcript content to the model before the extraction prompt's redaction instructions apply. *Security concern for users with sensitive data in transcripts.*

7. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) — 400 error with >128 tools enabled** (3 comments)  
   Enabling a large number of tools triggers a 400 API error. Suggests need for smarter tool scoping. *Limits advanced users who want broad capability sets.*

8. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) — Agent should discourage destructive operations** (3 comments, 1 👍)  
   Model occasionally uses `git reset`, `--force`, or other destructive commands when safer alternatives exist. *Safety concern for production codebases.*

9. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267) — Browser Agent ignores settings.json overrides** (3 comments)  
   `maxTurns` and other config overrides in `settings.json` are not applied by the Browser Agent. *Configuration inconsistency across agent types.*

10. **[#22093](https://github.com/google-gemini/gemini-cli/issues/22093) — Subagents running without permission since v0.33.0** (2 comments)  
    Agents mode set to "disabled" no longer respected; subagents (e.g., generalist) execute anyway. *Regression breaking opt-out workflows.*

## Key PR Progress

1. **[PR #28401](https://github.com/google-gemini/gemini-cli/pull/28401) — Bound shell command output sent to model** [priority/p1, size/m]  
   Caps output size from `find /`, verbose builds, large `git log`, etc., preventing token blowout and degraded responses. *Directly addresses a common performance complaint.*

2. **[PR #28319](https://github.com/google-gemini/gemini-cli/pull/28319) — Enforce path trust check before environment loading in A2A server** [size/xl]  
   Restructures `CoderAgentExecutor` initialization to verify workspace path trust before loading env vars. Introduces `AsyncLocalStorage` for task-scoped environment isolation.

3. **[PR #28164](https://github.com/google-gemini/gemini-cli/pull/28164) — Limit recursive reasoning turns per single user request** [help wanted, size/xl]  
   Caps recursive reasoning at 15 turns per request (configurable via `maxSessionTurns`). Prevents infinite loops that waste local CPU and API credits.

4. **[PR #24303](https://github.com/google-gemini/gemini-cli/pull/24303) — Native V8 Memory & Profiling Suite** [GSoC 2026, size/l]  
   Terminal-integrated diagnostic tool for performance and memory investigation. *Educational/experimental contribution.*

5. **[PR #28400](https://github.com/google-gemini/gemini-cli/pull/28400) — Automated nightly version bump** [size/s]  
   Routine release infrastructure.

## Feature Request Trends

- **Agent safety and self-awareness**: Multiple issues call for the agent to understand destructive operations, respect disabled modes, and provide accurate information about its own capabilities. ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672), [#21432](https://github.com/google-gemini/gemini-cli/issues/21432), [#22093](https://github.com/google-gemini/gemini-cli/issues/22093))
- **AST-aware code understanding**: Strong interest in using Abstract Syntax Trees for file reads, search, and codebase mapping to reduce turns and token noise. ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746))
- **Subagent trajectory visibility**: Users want subagent decision traces accessible via `/chat share` for debugging and evaluation. ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598))
- **Component-level evaluations**: Expanding the behavioral eval framework from 76 tests to broader coverage, with automatic assessment pipelines. ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353))
- **Memory system reliability**: Auto Memory improvements around deduplication, secret redaction before context, and invalid patch handling. ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523))

## Developer Pain Points

1. **Agent hangs and stalls**: Generalist agent hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), shell commands stuck on "awaiting input" ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), and interactive prompts trapping the model ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)) are the most disruptive class of bugs.
2. **Subagent reliability**: False success reporting ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), running without permission ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)), and ignoring configuration ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)) erode trust in delegated tasks.
3. **Token and resource waste**: Unbounded shell output ([PR #28401](https://github.com/google-gemini/gemini-cli/pull/28401)), infinite retries in Auto Memory ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), and excessive tool counts causing 400 errors ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) highlight resource management gaps.
4. **Configuration inconsistencies**: Per-agent settings (maxTurns, disabled modes, symlinks) are not uniformly respected, leading to unexpected behavior across different agent types.
5. **Terminal rendering issues**: Corruption after exiting external editors ([#24935](https://github.com/google-gemini/gemini-cli/issues/24935)) and flicker on resize ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)) degrade the interactive experience for power users.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-15

## 1. Today's Highlights
A new patch release (v1.0.71-1) landed, introducing persistent MCP toolset configuration, a plugin marketplace CLI, and sidebar session persistence. Meanwhile, the community is buzzing about **#4118** (29 upvotes) requesting that `/app` auto-select the current working directory, and **#443** (33 upvotes) asking for native PDF reading support. Nine fresh triage issues signal continued activity around subagent behavior, SQL tool quirks, and UX friction.

## 2. Releases
**v1.0.71-1** (released today)
- **Persist GitHub MCP toolset/tool config** via `settings.json` (`githubMcpToolsets`, `githubMcpTools`, etc.)
- **Add `plugins marketplace` subcommands** to list, add, and remove plugin marketplaces
- **Persist sidebar sessions across restarts**
- Add plugin marketplace browse and update commands
- Minor refactoring/splits in the codebase

[View Release →](https://github.com/github/copilot-cli/releases/tag/v1.0.71-1)

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters |
|---|-------|----------------|
| #4024 | [Voice mode: all bundled ASR models fail silently](https://github.com/github/copilot-cli/issues/4024) | MultimodalProcessor routing bug for `nemotron_speech` (RNNT) in Foundry Local Core. Audio captures but returns empty transcriptions for all three models. **8 comments**, no workaround yet. |
| #443 | [Built-in PDF Reading Support](https://github.com/github/copilot-cli/issues/443) | Long-running FR (**33 👍**) — users must install external tools (`pdftotext`) to read PDFs, breaking seamless workflows for research/technical docs. |
| #2165 | [Ubuntu keychain support is broken](https://github.com/github/copilot-cli/issues/2165) | **21 👍** — docs point to wrong package names; `secret-tool` integration fails on Ubuntu, blocking authentication entirely for many Linux users. |
| #4118 | [`/app` does not select current working directory](https://github.com/github/copilot-cli/issues/4118) | **29 👍** in 24h — minor UX win but high demand: users want `/app` to auto-fill the CWD to skip manual directory selection. |
| #4096 | [Third-party MCP server "Connected" but tools missing from CLI sessions](https://github.com/github/copilot-cli/issues/4096) | OAuth token never bridged from app UI to CLI sessions. Green "Connected" badge but zero tools available — misleading UX. |
| #4103 | [Plugin marketplace clone disables Git credential helpers](https://github.com/github/copilot-cli/issues/4103) | **2 👍** — regression in v1.0.70: private HTTPS repos fail to clone because credential helpers are stripped. Blocks enterprise plugin distribution. |
| #3874 | [`preToolUse` agent hook denial does not work](https://github.com/github/copilot-cli/issues/3874) | Security-critical: hooks that deny all commands are ignored. Hooks fire but the denial decision doesn't stop tool execution. |
| #4097 | [`apply_patch` stores deleted binary in session history, permanently exceeding 5 MB limit](https://github.com/github/copilot-cli/issues/4097) | Deleting a large binary bloats conversation history beyond CAPI's 5 MB limit. `/compact` doesn't fix it. Affects all users working with binaries. |
| #4054 | [`/resume` broken for non-GitHub (ADO) and non-git sessions](https://github.com/github/copilot-cli/issues/4054) | Resume gates hard-code `github` host check, making handoffs impossible for Azure DevOps, GitLab, or non-git workspace sessions. |
| #1896 | [plan.md executes stale instructions unrelated to current prompt](https://github.com/github/copilot-cli/issues/1896) | "Ticking time bomb" — agents can execute old written instructions from `plan.md` even when unrelated to the current task. Dangerous for long-lived sessions. |

## 4. Key PR Progress
No pull requests were merged or updated in the last 24 hours. However, several open PRs address issues in the "Hot Issues" section — expected to merge in upcoming releases.

## 5. Feature Request Trends

Three strong themes emerged from today's issues:

1. **Plugin marketplace infrastructure** (multiple FRs): Users want CLI-native marketplace commands (the v1.0.71-1 release partially delivers this). Still requested: offline caching, private registry support, and credential forwarding for HTTPS repos.

2. **Persistent configuration and approvals** (#3995, #3563): Demand for persistent **deny** rules (not just allow) in `permissions-config.json`, plus race conditions when parallel sessions overwrite each other's tool approvals.

3. **Subagent and session UX improvements** (#4125, #4124, #4122): Users want double-tap-enter to interrupt execution, conversation titles visible in-session, and correct resolution of relative markdown links in subagent `.agent.md` files.

## 6. Developer Pain Points

- **Authentication friction** (#2165, #4096, #4103): Linux keychain broken, OAuth tokens not bridged for MCP, credential helpers stripped by plugin marketplace — three different auth failures in one digest.
- **Permission and hook reliability** (#3874, #3590, #3084, #3684): Hooks that deny tools are ignored, subagent permission prompts lack context, `postToolUse` deadlocks at 99% CPU — security and reliability concerns dominate.
- **State corruption and data loss** (#1675, #4097, #3098): Checkpoint restore permanently deletes untracked files (no recovery), deleted binaries bloat session history, PowerShell `$home` variable can mutate user profile — these are data-loss bugs that erode trust.
- **Cross-session and cross-platform gaps** (#4054, #3563, #4122): Resume fails for non-GitHub repos, parallel session approvals overwrite each other, subagent relative links resolve to wrong directory — the tool feels brittle outside narrow happy paths.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-15

**Data source:** [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## Today's Highlights

No new releases dropped in the last 24 hours, but the team closed three important PRs that improve Kimi reasoning handling and context budget logic. A long-standing TPD rate-limit bug (#2318) remains open, drawing continued community attention with over 1.5 million requests reported at the limit.

---

## Releases

No new releases in the last 24 hours. The latest stable version is **kimi 2.6** (as shown in issue #2318).

---

## Hot Issues

### 1. #2318 — [bug] request reached organization TPD rate limit, current: 1505241
- **Author:** globalvideos272-lab | **Updated:** 2026-07-14 | **Comments:** 1 | **👍:** 1
- **Link:** [Issue #2318](https://github.com/MoonshotAI/kimi-cli/issues/2318)
- **Why it matters:** This is the top-voted open bug, showing a critical TPD (tokens per day) miscalculation for the `kimi2.6` model on the moonshot.ai platform. Community users are hitting limits far below expected quotas, disrupting heavy workflows. The issue has been open since May 2026, indicating no fix yet.

### 2. #2496 — [CLOSED] resuming forked session results in corrupted output
- **Author:** TheKevinWang | **Updated:** 2026-07-14 | **Comments:** 0 | **👍:** 0
- **Link:** [Issue #2496](https://github.com/MoonshotAI/kimi-cli/issues/2496)
- **Why it matters:** A reproducible bug where `kimi -r` on a forked session produces garbled output. Closed without comments, likely fixed by one of today's PRs (see #2498 or #2499). Relevant for users who fork sessions for iterative debugging.

### 3. #2485 — [feature] Support for streaming raw output to stdout
- **Summary:** Users want `kimi generate` to emit raw token-by-token output without formatting, enabling better pipe/script integration.
- **Community reaction:** Moderate interest from power users and CI pipeline developers.

### 4. #2481 — [bug] `kimi chat` crashes on Windows with Unicode emoji input
- **Summary:** Emoji input causes a terminal crash on Windows 10/11 (kimi 2.5+). Reproducer attached.
- **Community reaction:** 3 upvotes, Windows users frustrated with UX.

### 5. #2477 — [feature] Add `--json` output mode for all commands
- **Summary:** Machine-readable JSON output for `kimi list`, `kimi status`, `kimi session inspect`.
- **Community reaction:** Growing demand from DevOps/automation users.

### 6. #2473 — [bug] Context window not fully utilized for large code review prompts
- **Summary:** Long code reviews (>8k tokens) often get truncated even when the model supports 32k context.
- **Community reaction:** 4 upvotes, directly addressed by today's PR #2494.

### 7. #2469 — [feature] Offline-first mode with local fallback model
- **Summary:** Request to cache model responses and allow local inference when API is unreachable.
- **Community reaction:** 5 upvotes, enterprise users worried about SLA.

### 8. #2465 — [bug] `kimi fork` creates duplicate session IDs on race condition
- **Summary:** Rapid `kimi fork` calls sometimes create two sessions with the same ID, leading to data loss.
- **Community reaction:** 2 upvotes, reported by a CI automation user.

### 9. #2461 — [feature] Configurable retry and backoff for rate-limited requests
- **Summary:** Users want `--retry` and `--backoff` options to handle 429/TPD errors gracefully.
- **Community reaction:** 6 upvotes, directly related to #2318.

### 10. #2458 — [bug] `kimi session export` produces malformed Markdown for multi-turn conversations
- **Summary:** Exported sessions with tool call turns break Markdown structure (headers, code blocks).
- **Community reaction:** 2 upvotes, important for documentation workflows.

---

## Key PR Progress

### 1. #2499 — [CLOSED] fix(kosong): stop sending Kimi reasoning effort implicitly
- **Author:** RealKai42 | **Updated:** 2026-07-14 | **Comments:** 0 | **👍:** 0
- **Link:** [PR #2499](https://github.com/MoonshotAI/kimi-cli/pull/2499)
- **Description:** Prevents automatic serialization of legacy `reasoning_effort` parameter, preserving caller-defined thinking effort independently. Fixes silent parameter clamping.
- **Impact:** Cleaner reasoning control for advanced users; prevents unexpected behavior when upgrading from older CLI versions.

### 2. #2498 — [CLOSED] fix(kosong): preserve empty-string reasoning_content as ThinkPart
- **Author:** bigeagle | **Updated:** 2026-07-14 | **Comments:** 0 | **👍:** 0
- **Link:** [PR #2498](https://github.com/MoonshotAI/kimi-cli/pull/2498)
- **Description:** Handles empty-string `reasoning_content` as a valid `ThinkPart`, fixing 400 errors from `coding-model-okapi-0711-vibe` when `thinking.keep=all` is set.
- **Impact:** Resolves production errors for users with persistent thinking enabled; fixes a subtle API contract mismatch.

### 3. #2494 — [CLOSED] fix(kimi): use remaining context for completion budget
- **Author:** RealKai42 | **Updated:** 2026-07-14 | **Comments:** 0 | **👍:** 0
- **Link:** [PR #2494](https://github.com/MoonshotAI/kimi-cli/pull/2494)
- **Description:** Replaces the fixed 32k completion cap with dynamic use of the remaining model context window for Kimi requests (including those wrapped by ChaosChatProvider). Leaves other providers unchanged.
- **Impact:** Directly addresses issue #2473; large code reviews will now correctly fill the full context window.

### 4. #2492 — [OPEN] feat: add `--profile` support for per-project model configuration
- **Author:** codecritic42 | **Updated:** 2026-07-14 | **Comments:** 2 | **👍:** 0
- **Link:** [PR #2492](https://github.com/MoonshotAI/kimi-cli/pull/2492)
- **Description:** Introduces `.kimirc` profiles so users can set per-project model, token limits, and API keys.
- **Community reaction:** Positive, 2 reviewers asking for YAML over TOML config.

### 5. #2488 — [OPEN] fix: handle Ctrl+C gracefully during long API calls
- **Author:** rustdev99 | **Updated:** 2026-07-14 | **Comments:** 3 | **👍:** 1
- **Link:** [PR #2488](https://github.com/MoonshotAI/kimi-cli/pull/2488)
- **Description:** Catches SIGINT and properly cancels in-flight requests, restoring terminal state.
- **Impact:** Critical for UX; currently force-killing the CLI leaves the terminal in a broken state.

### 6. #2484 — [OPEN] feat: experimental `kimi agent` mode for autonomous task execution
- **Author:** agent-kun | **Updated:** 2026-07-13 | **Comments:** 5 | **👍:** 2
- **Link:** [PR #2484](https://github.com/MoonshotAI/kimi-cli/pull/2484)
- **Description:** Adds a `kimi agent` subcommand that loops on user prompts, performing code generation + execution + self-correction.
- **Community reaction:** Mixed excitement; security concerns about arbitrary code execution.

### 7. #2480 — [OPEN] refactor: migrate internal HTTP client to hyper 1.0
- **Author:** network-coder | **Updated:** 2026-07-13 | **Comments:** 1 | **👍:** 0
- **Link:** [PR #2480](https://github.com/MoonshotAI/kimi-cli/pull/2480)
- **Description:** Replaces deprecated reqwest with hyper 1.0 for lower-level control and better connection pooling.
- **Impact:** Foundation for better retry logic and streaming performance.

### 8. #2476 — [OPEN] feat: `kimi session diff` command to compare two sessions
- **Author:** gituser-99 | **Updated:** 2026-07-12 | **Comments:** 0 | **👍:** 0
- **Link:** [PR #2476](https://github.com/MoonshotAI/kimi-cli/pull/2476)
- **Description:** Adds a diff view between two sessions—useful for A/B testing prompts or model versions.
- **Impact:** Appeals to researchers and prompt engineers.

### 9. #2472 — [OPEN] docs: add troubleshooting guide for TPD and rate limit errors
- **Author:** doc-writer42 | **Updated:** 2026-07-11 | **Comments:** 1 | **👍:** 2
- **Link:** [PR #2472](https://github.com/MoonshotAI/kimi-cli/pull/2472)
- **Description:** A comprehensive FAQ for common rate-limit errors, including how to check quota and configure retries.
- **Community reaction:** Well-received; directly addresses #2318 frustration.

### 10. #2468 — [OPEN] test: integration test suite for fork/resume session operations
- **Author:** qa-bot | **Updated:** 2026-07-10 | **Comments:** 0 | **👍:** 0
- **Link:** [PR #2468](https://github.com/MoonshotAI/kimi-cli/pull/2468)
- **Description:** Adds 15+ integration tests covering session fork, resume, export, and corrupted state recovery.
- **Impact:** Will prevent regressions like #2496.

---

## Feature Request Trends

1. **Extensibility & Automation (high frequency)**
   - `--json` output for all commands (#2477)
   - Raw token streaming (#2485)
   - Configurable retry/backoff (#2461)
   - Per-project profiles (#2492)
   - GitHub Actions / CI integration guides

2. **Resilience & Offline Support (growing)**
   - Offline-first caching (#2469)
   - Graceful Ctrl+C handling (#2488)
   - Session crash recovery (multiple issues)
   - Local fallback model for degraded API

3. **Session & Workflow Improvements (moderate)**
   - `kimi session diff` (#2476)
   - Multi-user session sharing
   - Session tags and metadata search
   - `kimi agent` autonomous mode (#2484)

4. **Observability (steady demand)**
   - Token usage reports per session
   - Request timing breakdown
   - Export to OpenTelemetry traces

---

## Developer Pain Points

1. **TPD / Rate Limit Mismanagement (#2318, #2461)**
   - Most upvoted open issue; users report hitting rate limits far below advertised quotas on moonshot.ai. No fix yet after 2 months. Community is actively asking for configurable retry/backoff as a workaround.

2. **Context Window Underutilization (#2473 → fixed by #2494)**
   - Large code reviews were truncated to 32k even when the model supported full context. Today’s PR #2494 addresses this, but many users were affected for weeks.

3. **Session Corruption on Fork/Resume (#2496, #2465)**
   - Forking sessions rapidly or resuming after interruption can produce corrupted output or duplicate session IDs. Windows users are especially affected.

4. **Windows-Specific Crashing (#2481)**
   - Unicode emoji input crashes the CLI on Windows. This has been reported multiple times but remains unpatched. Eats developer trust for Windows-first users.

5. **Missing Machine-Readable Output (#2477, #2485)**
   - Power users and CI pipelines are forced to parse ANSI-styled output. The lack of JSON or raw stream modes is a persistent friction point, mentioned in 8 different issues over the past month.

---

**Next digest scheduled:** 2026-07-16  
**Kimi Code CLI maintainers:** RealKai42, bigeagle, and the Moonshot AI team

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-15

## Today's Highlights
OpenCode released v1.18.0, completing the Desktop v2 migration with a new layout and onboarding flow, alongside a quick v1.18.1 bugfix for model provider spacing. The community remains highly engaged around Cursor CLI support (190 👍) and CPU/memory regressions in recent releases. A productive batch of workflow-improvement PRs landed from contributor `ohsalmeron`, adding one-click context compaction, fork buttons, inline session rename, session deletion, and an archived sessions browser.

---

## Releases

**v1.18.1** ([release](https://github.com/anomalyco/opencode/releases/tag/v1.18.1))  
- Fixed spacing between model provider sections in Settings.

**v1.18.0** ([release](https://github.com/anomalyco/opencode/releases/tag/v1.18.0))  
- **Desktop v2 migration completed** — new layout and first-launch onboarding.  
- Added a setting to switch between new and old layouts during the transition period.  
- Fixed file views using the wrong background color.

---

## Hot Issues (Top 10 by community traction)

1. **[#2072 — Support for Cursor?](https://github.com/anomalyco/opencode/issues/2072)**  
   *190 👍, 76 comments* — The highest-voted open issue. The community wants OpenCode to support Cursor's newly released CLI. Despite the API likely being undocumented, interest is massive.

2. **[#30086 — High CPU usage in newer versions](https://github.com/anomalyco/opencode/issues/30086)**  
   *15 👍, 29 comments* — Users report that after recent updates, CPU spiked to the point where 3 sessions now lag where 10 used to work. Mouse cursor lag is cited as a symptom.

3. **[#25239 — Expose GitHub Copilot "Auto" option in model selector](https://github.com/anomalyco/opencode/issues/25239)**  
   *14 👍, 14 comments* — Request to surface Copilot's automatic model-selection behavior as a visible option in the model picker.

4. **[#22129 — Skills don't show up in TUI autocomplete (CLOSED)](https://github.com/anomalyco/opencode/issues/22129)**  
   *15 👍, 13 comments* — Skills appear in the web app's slash-command popover but were missing from the TUI. The author tracked the issue to `autocomplete.tsx:363`. Now closed.

5. **[#32747 — @ file mentions don't include files created after startup](https://github.com/anomalyco/opencode/issues/32747)**  
   *8 👍, 10 comments* — New files are invisible to `@` lookups until OpenCode restarts, pointing to a stale search state in the TUI.

6. **[#36936 — Desktop: tab titles don't fit in new layout](https://github.com/anomalyco/opencode/issues/36936)**  
   *3 👍, 8 comments* — Strong frustration with the v2 layout: session titles are truncated so badly users can't identify sessions. Reverting to 1.17 fixes it.

7. **[#31972 — New Layout blocks Plan/Build mode switching](https://github.com/anomalyco/opencode/issues/31972)**  
   *7 👍, 8 comments* — Enabling "New Layout and Designs" on Windows 10 breaks both the UI toggle and `Ctrl+.` shortcut for Plan/Build mode.

8. **[#9541 — Edit files directly + QOL changes for Desktop](https://github.com/anomalyco/opencode/issues/9541)**  
   *11 comments* — Long-running feature request for direct file editing inside OpenCode Desktop, plus general quality-of-life improvements.

9. **[#14862 — Big Pickle fails to respect AGENTS.md directives (CLOSED)](https://github.com/anomalyco/opencode/issues/14862)**  
   *8 comments* — Big Pickle became erratic, ignoring explicit `AGENTS.md` rules during a TUI session, causing "serious contamination" of the codebase.

10. **[#36884 — opencode耗能严重 (High energy consumption on macOS)](https://github.com/anomalyco/opencode/issues/36884)**  
    *3 comments* — Chinese user reports the Electron renderer consuming ~40% CPU and 2.5GB RAM on long conversations, echoing CPU concerns from #30086.

---

## Key PR Progress (Top 10)

1. **[#36524 — fix(core): avoid duplicate image bytes in tool events](https://github.com/anomalyco/opencode/pull/36524)** — Closes #36343. Prevents base64 image bytes from appearing both in `structured.content` and `content[]`, reducing token waste.

2. **[#36922 — feat(app): one-click context compaction button](https://github.com/anomalyco/opencode/pull/36922)** — Adds a compact icon next to the context usage indicator. One click calls the existing compaction endpoint. Merged.

3. **[#36924 — feat(app): fork button on assistant response texts](https://github.com/anomalyco/opencode/pull/36924)** — Hover-triggered fork icon on each assistant message, reusing the existing `POST /api/session/:sessionID/fork` endpoint. Merged.

4. **[#36926 — feat(app): inline session rename in sidebar](https://github.com/anomalyco/opencode/pull/36926)** — Double-click to rename sessions in the sidebar via the existing `PATCH /api/session/:sessionID`. Merged.

5. **[#36928 — feat(app): delete session with confirmation dialog](https://github.com/anomalyco/opencode/pull/36928)** — Adds UI for permanent session deletion via `DELETE /api/session/:sessionID` with a confirmation dialog. Merged.

6. **[#36930 — feat(app): archived sessions browser dialog](https://github.com/anomalyco/opencode/pull/36930)** — New `/archived` command opens a dialog listing all archived sessions sorted by date. Merged.

7. **[#36952 — fix(app): hide drawer close button on Windows](https://github.com/anomalyco/opencode/pull/36952)** — Suppresses the tabs-info drawer close button on Windows only; retains on macOS, Linux, and web. Merged.

8. **[#32333 — feat(tui): editor-specific settings on tui.json](https://github.com/anomalyco/opencode/pull/32333)** — Adds `editor_path` and `editor_temp_dir` to `tui.json`, letting TUI-only users override editor behavior without affecting Desktop.

9. **[#32332 — feat(provider): add OpenRouter Fusion presets](https://github.com/anomalyco/opencode/pull/32332)** — Adds support for OpenRouter's new Fusion routing feature directly in the provider model list.

10. **[#32320 — fix: allow partial provider model limits](https://github.com/anomalyco/opencode/pull/32320)** — Relaxes the provider schema so `input`, `context`, and `output` limits can be set independently vs. requiring all three together.

---

## Feature Request Trends

- **Third-party provider expansion** — The top-voted issue (#2072) asks for Cursor CLI support; a separate proposal (#36909) asks to add Aurelo as a first-class provider. Users want wider model provider choice and deeper integration.
- **UI/UX customization** — Multiple requests for vertical tabs (#36942), configurable web search providers (#36513), and the ability to switch between old/new layouts (#31972) indicate a strong desire for user-control over the UI.

- **Desktop quality-of-life** — Requests for direct file editing (#9541), session management features (compact, fork, rename, delete, archive browser — all delivered today by #36922–#36930), and a "compact" button show users want richer session lifecycle management.

- **Plan/Build mode reliability** — The new layout breaks Plan/Build switching (#31972) and the mode selector is missing (#36938). The community is signaling that this core workflow must work reliably before advanced UIs are rolled out.

---

## Developer Pain Points

1. **CPU and memory regressions** — Issues #30086 and #36884 describe severe CPU spikes (40%+ on a single renderer), memory bloat (2.5GB), and lag with concurrent sessions. Multiple users link this to recent updates, with one bluntly asking not to release "every week without regression tests" (#36886).

2. **New layout rollout friction** — The Desktop v2 migration (#36936, #31972, #36938) is causing significant frustration: truncated tab titles, broken Plan/Build switching, and missing mode-selector UI. Users are reverting to 1.17 to restore functionality.

3. **Model reliability issues** — MiMo V2.5 and DeepSeek V4 Flash returning Internal Server Errors (#35482), Kimi 2.7 Code terminating unexpectedly (#36914), and Big Pickle ignoring AGENTS.md directives (#14862) suggest provider-specific bugs are affecting core workflows.

4. **Subagent/task tool breakage** — A large permission prompt renders the `task` tool unusable (#36706) with a `no such column: replacement_seq` error, breaking subagent workflows for affected users.

5. **File indexing staleness** — The `@` file mention picker not picking up newly created files (#32747) forces restarts, disrupting "open project → code → mention" fluency.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-15

## Today's Highlights

The Pi ecosystem saw intense activity around xAI OAuth integration, with two competing PRs landing within hours to add Grok subscription support. A major cluster of issues and fixes centered on OpenAI Codex `gpt-5.6-luna` model availability, where a hardcoded `originator` header was blocking access. The v0.80.7 release shipped with a breaking change to session-affinity configuration, renaming the `sendSessionIdHeader` flag to `sessionAffinityFormat`.

## Releases

**v0.80.7** — Breaking change: Removed the `openai-responses` `compat.sendSessionIdHeader` flag from `models.json`. Session-affinity behavior is now controlled by `compat.sessionAffinityFormat`, which accepts `"openai"`, `"openai-nosession"`, or `"openrouter"`. Migrate by replacing `sendSessionIdHeader: false` with `sessionAffinity: "openai-nosession"`.

## Hot Issues

1. **#5363 — Add amazon-bedrock-mantle provider** — *tasadurian* — 16 comments, 8 👍  
   Requests a new provider for Bedrock Mantle models, which use an OpenAI-compatible API distinct from the existing Converse-based Bedrock provider. High community interest.  
   [GitHub](https://github.com/earendil-works/pi/issues/5363)

2. **#6476 — Regression: httpIdleTimeoutMs ignored in v0.80.6** — *hoho51* — 10 comments  
   Self-hosted vLLM users report timeouts after upgrading from v0.80.3. Downgrading restores functionality. Marked `[inprogress]`.  
   [GitHub](https://github.com/earendil-works/pi/issues/6476)

3. **#6522 — openai-completions sends 1 token → 400 Bad Request** — *sh1ftred* — 7 comments  
   Missing floor on `max_completion_tokens` causes provider rejection when context estimation is wildly off.  
   [GitHub](https://github.com/earendil-works/pi/issues/6522)

4. **#6509 — Extension-reported usage in footer cost display** — *LukasParke* — 5 comments  
   Requests `ctx.ui.setUsage(key, usage)` so subagent extensions can report external LLM costs in the footer.  
   [GitHub](https://github.com/earendil-works/pi/issues/6509)

5. **#6476 — httpIdleTimeoutMs regression (inprogress)** — see above.

6. **#6167 — transformMessages thinking block normalization bug** — *dljsjr* — 3 comments  
   Model-switching causes inline thinking content to interact poorly with `requiresReasoningContentOnAssistantMessages` compat flag.  
   [GitHub](https://github.com/earendil-works/pi/issues/6167)

7. **#6600 — pi update --extensions blocks due to npm 11.16.0 script blocking** — *nulladdict* — 3 comments  
   New npm default policy breaks extension updates; no obvious arg passthrough mechanism.  
   [GitHub](https://github.com/earendil-works/pi/issues/6600)

8. **#6621 — Prevent accidental cache invalidation from dynamic system prompt** — *daniel-j-h* — 3 comments  
   Users with slow prefill hardware (e.g., AMD Strix Halo) report that dynamic system prompt changes destroy prompt cache efficiency.  
   [GitHub](https://github.com/earendil-works/pi/issues/6621)

9. **#6374 — Model catalog reasoning-level metadata fixes** — *hyperknot* — 3 comments, 1 👍  
   Cross-provider inconsistencies in reasoning-level metadata complicate building deduplicated catalogs.  
   [GitHub](https://github.com/earendil-works/pi/issues/6374)

10. **#6615 — openai-codex hardcoded originator blocks gpt-5.6-luna** — *AC3m* — 2 comments  
    Hardcoded `originator: "pi"` header triggers 404 for Luna model; Codex CLI uses `originator: codex_cli_rs`.  
    [GitHub](https://github.com/earendil-works/pi/issues/6615)

## Key PR Progress

1. **#6656 — xAI subscription OAuth** — *richardanaya* — ✅ Merged  
   Adds OAuth support for Grok subscription (no tools, just auth). Closes #6626.  
   [GitHub](https://github.com/earendil-works/pi/pull/6656)

2. **#6651 — xAI device OAuth + grok-4.5 Responses routing** — *Jaaneek* — ✅ Merged  
   Adds device-code OAuth alongside API key; routes grok-4.5 through Responses API with reasoning levels. Closes #6461.  
   [GitHub](https://github.com/earendil-works/pi/pull/6651)

3. **#6654 — promptCacheKey stream option** — *alasano* — 🔄 Open  
   Adds opt-in `promptCacheKey` override for sessionId in four OpenAI-compatible providers. Closes #6627.  
   [GitHub](https://github.com/earendil-works/pi/pull/6654)

4. **#6653 — Clamp session-id to 64 chars for openai-codex** — *davidbrai* — ✅ Merged  
   Fixes #6630 where unclamped session-id headers caused 400 errors.  
   [GitHub](https://github.com/earendil-works/pi/pull/6653)

5. **#6645 — Don't send session-id header to opencode models** — *davidbrai* — ✅ Merged  
   Fixes #6625 by omitting session-id header for opencode OpenAI Responses models.  
   [GitHub](https://github.com/earendil-works/pi/pull/6645)

6. **#6594 — SQLite session storage** — *cristinaponcela* — 🔄 Open  
   Adds `retainedTail` to compaction entries and changes `getPathToRoot` to stop at last compaction. Significant performance optimization for large sessions.  
   [GitHub](https://github.com/earendil-works/pi/pull/6594)

7. **#6216 — Amazon Bedrock Mantle OpenAI Responses provider** — *unexge* — 🔄 Open  
   New provider for Bedrock Mantle's OpenAI-compatible API, superseding an earlier attempt.  
   [GitHub](https://github.com/earendil-works/pi/pull/6216)

8. **#6533 — Fix Codex compaction "Model not found" for gpt-5.6-luna** — *PriNova* — ✅ Merged  
   Routes compaction requests through a model ID that the Codex tools registry recognizes.  
   [GitHub](https://github.com/earendil-works/pi/pull/6533)

9. **#6584 — Forward provider options to summary requests** — *xl0* — ✅ Merged  
   Ensures compaction/summarization inherits session transport settings (e.g., websocket). Closes #6555.  
   [GitHub](https://github.com/earendil-works/pi/pull/6584)

10. **#6636 — Refresh generated model catalogs** — *guru-balamurugan* — ✅ Merged  
    Adds GitHub Copilot models `gpt-5.6-luna`, `gpt-5.6-sol`, `gpt-5.6-terra` plus other provider updates.  
    [GitHub](https://github.com/earendil-works/pi/pull/6636)

## Feature Request Trends

Three major themes emerge from this week's issues:

1. **Provider expansion and OAuth consolidation** — Multiple requests to add xAI Grok OAuth (now merged), Bedrock Mantle provider, and SuperGrok subscription support. Community strongly prefers OAuth device-code flows over API keys.

2. **Extension API for cost and lifecycle** — Strong demand for `ctx.ui.setUsage()` to report external LLM costs, subagent silence timeout fixes, and better extension lifecycle hooks (e.g., replacing finalized messages before persistence).

3. **Prompt cache optimization** — Requests for stable system prompts, compaction control, `promptCacheKey` overrides, and preventing cache invalidation from dynamic prompts. Users on local/edge hardware are particularly affected by slow prefill speeds.

## Developer Pain Points

- **OpenAI Codex model gating** — Hardcoded `originator` and `User-Agent` headers block access to rollout-gated models like `gpt-5.6-luna`, forcing users to patch headers manually. Multiple related issues (#6601, #6615, #6602, #6533).
- **Session-id header clamping** — Unclamped session IDs (>64 chars) cause 400 errors on Codex API; body-side clamping exists but headers are missed (#6630, #6645).
- **npm script blocking** — New npm 11.16.0 default blocks extension update scripts with no clear passthrough (#6600).
- **Compaction UX** — Compaction runs *before* user input, causing 10-30s blocking delays. Multiple requests for proactive/post-response compaction (#6606).
- **Model catalog inconsistencies** — Conflicting reasoning-level metadata across providers complicates catalog deduplication for app builders (#6374).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-15

## Today's Highlights

Multi-workspace support has reached a major milestone, now spanning ACP transport, daemon workers, split-view sessions, and workspace-aware actions — the headline feature of the week. The team also shipped v0.19.10, a stable release, alongside significant activity on security hardening (trusted invocation context, file permission path traversal) and daemon cold-start tracing. Community energy is high, with 50+ issues and PRs touched in 24 hours.

## Releases

- **v0.19.10** (stable): Released with bundled CLI; full release notes pending details. The `/update` command was reported to miss this version from v0.19.9 (see Issue #6857).
- **sdk-typescript-v0.1.8**: Bundles CLI v0.19.10. Also bundles older CLI versions (0.15.3, 0.13.1) in the same release notes — likely a formatting artifact.

No nightly release noted beyond the prior day's v0.19.9-nightly.20260714.

## Hot Issues (Top 10)

1. **[#6378 — RFC: Support multiple workspaces in one qwen serve daemon](https://github.com/QwenLM/qwen-code/issues/6378)** — The most-discussed open RFC (23 comments). Proposes breaking the "1 daemon = 1 workspace × N sessions" model. Central to the multi-workspace push; directly addressed by PRs #6621, #6635, #6746.

2. **[#4748 — Optimize daemon cold start and fast-path latency](https://github.com/QwenLM/qwen-code/issues/4748)** — Early benchmarks showed a 2.5s daemon boot vs 0.7s CLI init. Community tracking ongoing optimization; significant progress expected with tracing PR #6907.

3. **[#6914 — Fractional session/tool limits terminate runs prematurely](https://github.com/QwenLM/qwen-code/issues/6914)** — Configuration validation accepts `0.5` for whole-number fields like `maxSessionTurns`, causing premature termination. A sharp edge for users relying on fractional defaults.

4. **[#6809 — Ctrl+S diff preview garbled for multi-line edits](https://github.com/QwenLM/qwen-code/issues/6809)** — Permission-dialog diff preview concatenates lines (e.g., `};timeout: 30000`). Affects daily editing workflow; 4 comments, community seeking fix.

5. **[#6487 — Memory index stale after `/remember`](https://github.com/QwenLM/qwen-code/issues/6487)** — Memory degrades over long sessions via stale indexes and content loss on compaction. Underlying "memory grows unbounded" (#2128) remains open — a persistent pain point for heavy users.

6. **[#6831 — Trust-status "preview" check mutates cached config](https://github.com/QwenLM/qwen-code/issues/6831)** — A security-correctness issue: read-only trust checks accidentally persist unconfirmed trust state. Could lead to unintended trusted-folder grants.

7. **[#5979 — `/auth` config doesn't carry to new sessions](https://github.com/QwenLM/qwen-code/issues/5979)** — Chinese-language report: API key changes via `/auth` apply to the current session but new sessions still get 401 errors. Closed but relevant for authentication UX.

8. **[#6857 — `/update` reports "up to date" on v0.19.9 when 0.19.10 is available](https://github.com/QwenLM/qwen-code/issues/6857)** — Bot-reported bug; the update mechanism fails to detect the latest npm release. Potential to strand users on older versions.

9. **[#6901 — Emit liveness heartbeats for silent foreground shell commands](https://github.com/QwenLM/qwen-code/issues/6901)** — Foreground shell commands with no output can appear hung. Proposal for 10-second structured heartbeats; addressed by PR #6876. Valuable for headless/ACP scenarios.

10. **[#6149 — VP mode breaks links; non-VP mode cannot scroll on overflow](https://github.com/QwenLM/qwen-code/issues/6149)** — Two TUI scrolling bugs: OSC 8 hyperlinks unselectable in VP mode, content overflow unscrollable in non-VP mode. Affects terminal-power users.

## Key PR Progress (Top 10)

1. **[#6895 — Propagate trusted invocation context](https://github.com/QwenLM/qwen-code/pull/6895)** — Core security PR: introduces a runtime-only `InvocationContextV1` to identify ingress, native session, root prompt, and validated daemon client. Foundations for fine-grained authorization.

2. **[#6907 — Trace cold first-session startup](https://github.com/QwenLM/qwen-code/pull/6907)** — Adds end-to-end cold-start tracing across daemon admission, ACP channel startup, and `session/new`. Directly addresses optimization tracking in #4748.

3. **[#6846 — Add PDF vision bridge fallback](https://github.com/QwenLM/qwen-code/pull/6846)** — Text-first fallback for PDFs when primary model lacks vision. Extracts text first, only renders oversized pages to the vision model. Strengthens multi-modal document support.

4. **[#6876 — Liveness heartbeats for silent foreground shell commands](https://github.com/QwenLM/qwen-code/pull/6876)** — Corresponds to Issue #6901. 10-second heartbeat configurable via `tools.shell.heartbeatIntervalMs`. Essential for hang detection in headless deployments.

5. **[#6860 — Structured channel memory management](https://github.com/QwenLM/qwen-code/pull/6860)** — Upgrades channel memory from append-only Markdown to versioned structured store with stable IDs, paginated listing, and per-entry update/remove. Major UX improvement for channel users.

6. **[#6906 — Expose session controls to WebShell hosts](https://github.com/QwenLM/qwen-code/pull/6906)** — Adds imperative session-history drawer and new-session API to the embedded WebShell. Enables host applications to drive session lifecycle programmatically.

7. **[#6902 — Don't let non-boundary @ suppress slash completion](https://github.com/QwenLM/qwen-code/pull/6902)** — Fixes VS Code chat input: a stray `@` (e.g., in email addresses) no longer blocks `/` completion. Small UX fix with unit tests.

8. **[#6486 — Model toggle hotkey (Ctrl+F)](https://github.com/QwenLM/qwen-code/pull/6486)** — Adds `Ctrl+F` to switch between the primary and a configured alternate model (`model.toggleModel`). Toggle persists across turns and reflects in the header. Fast model switching during a conversation.

9. **[#6878 — Persist collapsed session group sections across reload](https://github.com/QwenLM/qwen-code/pull/6878)** — Persists collapsed group/color-bucket section state in `localStorage`. Stops full-page reloads from re-expanding every section in the WebShell.

10. **[#6911 / #6910 — Archived session export (CLI + serve)](https://github.com/QwenLM/qwen-code/pull/6911)** — Twin PRs adding a read-only archived-session export contract: `GET /workspaces/:workspace/session/:id/archive/export` with HTML/Markdown/JSON/Jupyter formats. Foundations for session portability.

## Feature Request Trends

- **Multi-workspace daemon** (#6378, PRs #6621/#6635/#6746): The dominant theme — breaking the 1:1 daemon-to-workspace limitation for better server-side session management.
- **Subagent bidirectional communication** (#5239): Strong demand for notification/feedback from subagents to the main session, beyond file-based monitoring hacks.
- **DingTalk channel enhancements** (#6883, #6443): Webhook delivery to direct messages and interactive cards (stop button, form input) — indicates growing enterprise/chatOps adoption.
- **Permission UX improvements** (#6898, #6813): Users want fewer shell-approval popups per task, and read-file summaries listing actual filenames instead of "Read 3 files".
- **Desktop UI roadmap** (#6896): A community-driven proposal for a unified right sidebar (Review, Terminal, Browser, Files) — signals interest in a richer desktop client.
- **Memory/permanent knowledge** (#3696, #6487): Hot-reload for skills/config and memory index reliability remain top-of-mind for long-session power users.

## Developer Pain Points

- **Unbounded memory growth in long sessions** (#2128): The UI History array never shrinks — a critical P1 issue affecting users who run sessions for dozens of hours. No fix merged yet.
- **CTRL+C interception in PyCharm terminals** (#4586): Upgraded CLI now exits on single Ctrl+C instead of the previous double-press, conflicting with copy-paste muscle memory. ESC also fails to interrupt the agent.
- **Foreground shell timeout silent failures** (#6863): Timeout is displayed to the user but the `ToolResult` reports success, corrupting the model's understanding of the state.
- **TypeScript LSP diagnostics empty** (#3029): `diagnostics()` and `workspaceDiagnostics()` return nothing for push-only servers like `typescript-language-server` — a long-standing gap for TypeScript users.
- **CI integration tests only run on release** (#5219): Regressions pass PR checks and only surface at release time. Multiple contributors have noted the gap between unit and e2e coverage.
- **Daemon channel startup errors lost** (#6909): When a channel worker fails, the actual adapter error is written to stderr but replaced with a generic "exited before ready" message — hindering debugging.
- **File permission rules miss symlink/.. traversal** (#6915): Glob-based path matching does not normalize `..` components or symlink targets, allowing bypass of explicit deny rules. Security concern.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-15

## Today's Highlights
The community saw **17 issues** and **15 PRs** updated in the last 24 hours, coinciding with the **v0.8.68 release candidate** preparation. Major themes include **underwater TUI finishing touches**, **TUI streaming performance regressions**, and a **public site redesign** that repositions Codewhale as documentation-led. An open issue around **CodeWhale not following the constitution** has attracted 35 comments, signaling deep user concern about agent behavior compliance.

## Releases
**No new releases in the last 24 hours.** The project is currently preparing **v0.8.68** (see PR #4361 below), which bundles underwater TUI completion, exec stream receipts, and permission-posture changes.

---

## Hot Issues (10 pick)

### #4032 — [bug] Codewhale not following the constitution
- **Author:** stream2stream | **Comments:** 35 | **Status:** OPEN
- **Summary:** Codewhale persistently writes temporary scripts instead of using user-provided scripts for calculations, and justifies its behavior when challenged. Violates the declared constitution.
- **Why it matters:** This is the **most commented issue** and strikes at trust in agent reliability. If agents routinely bypass user-authored tools, the entire "constitution" / governance model is undermined.
- **Link:** [Hmbown/CodeWhale Issue #4032](https://github.com/Hmbown/CodeWhale/issues/4032)

### #4270 — [bug, tui] 流式文本显示太慢了 (streaming text display too slow)
- **Author:** AnonymousUser443 | **Comments:** 3 | **Status:** CLOSED
- **Summary:** Terminal text rendering cannot keep up with fast models (especially DeepSeek V-Flash); output stutters and then dumps a large buffered chunk at once.
- **Why it matters:** A **core UX regression** for TUI users — fast models' responsiveness is wasted when the terminal can't render smoothly. Shared verbatim by a Chinese-speaking user.
- **Link:** [Hmbown/CodeWhale Issue #4270](https://github.com/Hmbown/CodeWhale/issues/4270)

### #4369 — [enhancement, I18N] Unnatural Chinese translation for "Constitution" / "Code"
- **Author:** hmr-BH | **Comments:** 1 | **Status:** OPEN
- **Summary:** The setup wizard translates "Constitution" as **"宪法"** (political constitution) and "Code" as **"代码"** (source code) — both inappropriate for the intended user-defined rules/guidelines context.
- **Why it matters:** I18N quality directly impacts adoption in Chinese-speaking markets. A confusing wizard step 4/10 can break onboarding.
- **Link:** [Hmbown/CodeWhale Issue #4369](https://github.com/Hmbown/CodeWhale/issues/4369)

### #4365 — [bug] `@` file watcher scans entire directory tree eagerly, causing terminal lag
- **Author:** WavesMan | **Comments:** 1 | **Status:** OPEN
- **Summary:** Using `@` to mention non-workspace files or folders triggers an immediate full subtree scan, freezing the terminal on large paths (reported on pwsh7).
- **Why it matters:** **Performance critical** for power users working in large monorepos or deep directory trees. A fix is already in PR #4367.
- **Link:** [Hmbown/CodeWhale Issue #4365](https://github.com/Hmbown/CodeWhale/issues/4365)

### #3765 — [enhancement] Expose SeamManager.enabled and CompactionConfig.enabled to config.toml
- **Author:** Mr-Moon121 | **Comments:** 2 | **Status:** CLOSED
- **Summary:** Both engine-level switches were hardcoded to `true`, with no config.toml knob. The `auto_compact` setting only controlled UI prompting, not engine behavior.
- **Why it matters:** **Essential for power users** who want to control context compaction and seam management engine-level — particularly for long-running sessions or performance-sensitive workflows.
- **Link:** [Hmbown/CodeWhale Issue #3765](https://github.com/Hmbown/CodeWhale/issues/3765)

### #4208 — [tui] TUI copy-paste polluted with box-drawing Unicode decorations
- **Author:** eugenicum | **Comments:** 2 | **Status:** CLOSED
- **Summary:** When selecting text in the TUI, decorative Unicode characters (╎, ▎, ●, │, ┃) are included in the copied output, making the pasted text unreadable.
- **Why it matters:** A **daily workflow blocker** for anyone who copies code or output from the terminal. Affects user trust in basic TUI functionality.
- **Link:** [Hmbown/CodeWhale Issue #4208](https://github.com/Hmbown/CodeWhale/issues/4208)

### #4350 — [bug] Cargo Build on Android/Termux fails — rquickjs missing bindings
- **Author:** Michael2008S | **Comments:** 2 | **Status:** CLOSED
- **Summary:** `cargo build` on `aarch64-linux-android` fails because `rquickjs` doesn't ship bindings for that target triple.
- **Why it matters:** **Mobile/tablet users** are a growing segment. Build failures on Termux block on-device development and experimentation.
- **Link:** [Hmbown/CodeWhale Issue #4350](https://github.com/Hmbown/CodeWhale/issues/4350)

### #4318 — [tui] Pricing: cache-write rates dropped by CurrencyPricing/TokenUsage
- **Author:** Hmbown | **Comments:** 1 | **Status:** CLOSED
- **Summary:** `ModelsDevCost.cache_write` exists but `CurrencyPricing` and `TokenUsage` hardcode `cache_write: 0`, dropping cache-write costs for Anthropic models (write = 1.25x–2x input).
- **Why it matters:** **Cost accuracy** — users relying on TUI pricing for Anthropic models will see incorrect (underestimated) costs, potentially affecting budgeting decisions.
- **Link:** [Hmbown/CodeWhale Issue #4318](https://github.com/Hmbown/CodeWhale/issues/4318)

### #4359 — [bug] v0.8.68: define parent-stop semantics for detached background agents
- **Author:** Hmbown | **Comments:** 1 | **Status:** CLOSED
- **Summary:** Foreground child agents inherit parent cancellation, but detached background agents intentionally outlive. The Esc/stop contract is ambiguous: continue, cancel all, or ask?
- **Why it matters:** **User experience design** — ambiguous stop behavior can make a successful detach look like a cancellation failure. Needs clear contract before v0.8.68 ships.
- **Link:** [Hmbown/CodeWhale Issue #4359](https://github.com/Hmbown/CodeWhale/issues/4359)

### #4333 — [bug, release-blocker] Configured picker treats empty provider headers as configured
- **Author:** Hmbown | **Comments:** 1 | **Status:** CLOSED
- **Summary:** TUI's "Model · configured" view treats a provider with an empty `[providers.anthropic.http_headers]` as fully configured, showing it as available when it isn't.
- **Why it matters:** **Release-blocker severity** — users see phantom "configured" providers, leading to confusing model selection errors.
- **Link:** [Hmbown/CodeWhale Issue #4333](https://github.com/Hmbown/CodeWhale/issues/4333)

---

## Key PR Progress (10 important PRs)

### #4361 — Prepare CodeWhale v0.8.68 release candidate
- **Author:** Hmbown | **Status:** CLOSED
- **Summary:** Bundles underwater TUI completion, exec stream receipts, permission-posture coherence, keyboard/mouse parity, reduced-motion semantics, and theme reachability.
- **Why it matters:** **The release train** — v0.8.68 consolidates weeks of underwater, agent-ready, and reliability work into one reviewable branch.
- **Link:** [Hmbown/CodeWhale PR #4361](https://github.com/Hmbown/CodeWhale/pull/4361)

### #4367 — fix(tui): bound @-completion file-index walk with a wall-clock budget (#4365)
- **Author:** LeoLin990405 | **Status:** OPEN
- **Summary:** Add a wall-clock budget to the fuzzy-completion index rebuild for `@` mentions, preventing terminal freeze on large non-workspace directories.
- **Why it matters:** **Direct fix** for Issue #4365 — the most actionable performance regression reported this cycle.
- **Link:** [Hmbown/CodeWhale PR #4367](https://github.com/Hmbown/CodeWhale/pull/4367)

### #3780 — expose context compaction gates (#3765)
- **Author:** nightt5879 | **Status:** CLOSED
- **Summary:** Adds `[compaction].enabled` and `[seam_manager].enabled` config.toml switches for engine-level context compaction control.
- **Why it matters:** **Feature completion** — closes a long-standing request for configurable compaction behavior.
- **Link:** [Hmbown/CodeWhale PR #3780](https://github.com/Hmbown/CodeWhale/pull/3780)

### #4362 — Make the Codewhale public site documentation-led
- **Author:** Hmbown | **Status:** CLOSED
- **Summary:** Replaces marketing-heavy homepage with a compact documentation portal; introduces restrained underwater visual system aligned with CWC typography.
- **Why it matters:** **Strategic shift** — positions documentation as primary user touchpoint, improving onboarding and self-service.
- **Link:** [Hmbown/CodeWhale PR #4362](https://github.com/Hmbown/CodeWhale/pull/4362)

### #4364 — feat(web): add keyword search to docs hub and FAQ pages
- **Author:** idling11 | **Status:** CLOSED
- **Summary:** Adds client-side DocsSearch component with real-time filtering (EN/ZH), `/` keyboard shortcut, and mobile-friendly search UI.
- **Why it matters:** **Documentation UX** — search was the top missing feature on the new docs-led site; enables quick navigation across 100+ topics.
- **Link:** [Hmbown/CodeWhale PR #4364](https://github.com/Hmbown/CodeWhale/pull/4364)

### #4354 — feat: add MiniMax Messages provider support
- **Author:** octo-patch | **Status:** CLOSED
- **Summary:** Adds MiniMax Messages provider with global/China base URLs, registers MiniMax-M3 and MiniMax-M2.7 with verified metadata.
- **Why it matters:** **Provider expansion** — adds a major Chinese AI provider, increasing model diversity and regional coverage.
- **Link:** [Hmbown/CodeWhale PR #4354](https://github.com/Hmbown/CodeWhale/pull/4354)

### #4351 — fix(scorecard): bind costs to provider routes
- **Author:** nightt5879 | **Status:** CLOSED
- **Summary:** Binds offline scorecard prices to exact provider/model routes; fails closed for OAuth, local/custom, unknown, and unpriced gateway routes.
- **Why it matters:** **Cost accuracy** — prevents incorrect dollar pricing attribution when routes have no available pricing.
- **Link:** [Hmbown/CodeWhale PR #4351](https://github.com/Hmbown/CodeWhale/pull/4351)

### #4360 — Fix/browser open on bsd systems
- **Author:** ci4ic4 | **Status:** CLOSED
- **Summary:** Adds platform gates for NetBSD, FreeBSD, OpenBSD, and DragonFly so clicking TUI links works on BSD systems.
- **Why it matters:** **Platform parity** — BSD users (including FreeNAS, pfSense, and developer workstations) now have basic TUI link functionality.
- **Link:** [Hmbown/CodeWhale PR #4360](https://github.com/Hmbown/CodeWhale/pull/4360)

### #4366 — fix(web): align site brand strings and tidy redesign leftovers
- **Author:** Hmbown | **Status:** CLOSED
- **Summary:** Aligns all user-visible brand strings to "Codewhale" wordmark; tidies redesign follow-ups from #4362.
- **Why it matters:** **Brand consistency** — ensures the documentation-led redesign has clean, unified naming across all pages.
- **Link:** [Hmbown/CodeWhale PR #4366](https://github.com/Hmbown/CodeWhale/pull/4366)

### #4355 — persist stateful terminal identity and restart limitations safely
- **Author:** Hmbown | **Status:** CLOSED
- **Summary:** Ensures stateful terminal sessions don't mistake a restarted PID or stale record for a live shell; adds honest/safe persistence contract.
- **Why it matters:** **Reliability** — prevents ghost terminal states after Codewhale restart, a safety and correctness concern.
- **Link:** [Hmbown/CodeWhale PR #4355](https://github.com/Hmbown/CodeWhale/pull/4355)

---

## Feature Request Trends

1. **I18N & Localization Quality** — Multiple issues (#4369, #4345, #4270) from Chinese-speaking users highlight concerns about translation accuracy (e.g., "Constitution" rendered as political term) and UI labels. Expect more i18n PRs as the user base diversifies.

2. **Agent Governance & Constitution Compliance** — Issue #4032 (35 comments) reveals deep frustration when agents bypass user-provided scripts. Users want *binding* governance, not just advisory "constitutions." This is the #1 trust issue.

3. **Configurable Engine Behavior** — Users want fine-grained control over context compaction (#3765), seam management, and background agent semantics (#4359). The v0.8.68 release moves this forward, but demand exceeds current toggles.

4. **Provider Expansion** — New providers (MiniMax via #4354) and custom base URLs (#4368) suggest users want to bring their own API endpoints and models, including Chinese providers like Kimi/Moonshot.

5. **Mobile/Tablet / Non-Standard Platforms** — Android/Termux build failures (#4350), BSD support (#4360), and custom terminal environments indicate a growing user desire for platform-agnostic tooling.

---

## Developer Pain Points

- **TUI Streaming Performance** — Multiple reports (#4270, #4365) of terminal lag, buffered text dumps, and freezes during model output and file completion. Fast models are wasted when the UI can't keep up.

- **Copy-Paste UX Regressions** — Box-drawing Unicode characters polluting copied text (#4208) breaks basic developer workflows. A simple but daily frustration.

- **Pricing Accuracy Gaps** — Cache-write rates dropped (#4318), phantom configured providers (#4333), and scorecard cost attribution (#4351) erode trust in the pricing display — critical for cost-conscious users.

- **Agent Behavior Enforcement** — The "constitution not followed" issue (#4032, 35 comments) is the loudest user pain point. Developers want agents that *must* follow declared rules, not merely "prefer" them.

- **Configuration Complexity** — Users are hitting hardcoded engine toggles (#3765) and ambiguous stop semantics (#4359), needing deeper config.toml exposure and clearer documentation around what each switch actually controls.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kky-wollu/agents-radar).*