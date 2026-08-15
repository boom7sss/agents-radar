# AI CLI 工具社区动态日报 2026-08-15

> 生成时间: 2026-08-15 01:37 UTC | 覆盖工具: 9 个

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

## 横向对比

# AI CLI 工具横向对比分析报告（2026-08-15）

## 1. 生态全景

当前 AI CLI 工具已从"单点代码生成"进入"Agent 工作流平台化"阶段，各工具在快速迭代功能的同时，普遍遭遇稳定性回退（如 Codex 桌面端性能、Claude Code 连接错误）与安全护栏误伤合法开发的问题。多 Agent 编排、会话生命周期管理、记忆系统成为跨工具的共识性攻坚方向，而 OpenAI/Anthropic/Google 三大厂商与开源社区（OpenCode、Pi、CodeWhale）的路线分化正在加速：前者重企业级集成与桌面端，后者重可组合性与多提供商兼容。整体而言，行业正处在"功能先行、稳定滞后"的青春期，用户对数据安全、成本透明度和跨平台体验的诉求日益尖锐。

## 2. 各工具活跃度对比

| 工具 | 今日版本发布 | 热点 Issues（24h 更新） | 重要 PRs | 社区热度峰值（单 Issue） | 整体信号 |
|------|-------------|----------------------|---------|------------------------|---------|
| **Claude Code** | v2.1.233 | 10 | 4 | #69238: 63 评论 / 96 👍 | 企业级功能推进，连接稳定性争议大 |
| **OpenAI Codex** | 5 个 alpha 版 | 10（共 50 条更新） | 10 | #20214: 101 评论 / 84 👍 | 桌面端性能回归引发信任危机 |
| **Gemini CLI** | v0.56.0-nightly | 10（共 50 条活跃） | 10+（SSR 批量） | #22323: 12 评论 | SSR 自动修复密集合入，子代理可靠性成主线 |
| **Copilot CLI** | v1.0.81-0 / v1.0.80 | 10（共 30+ 条更新） | 3 | #4480: 6 👍 | MCP OAuth 回归连续三版未修复 |
| **Kimi Code CLI** | 无 | 4 | 0 | #1283: 39 评论 | 社区聚焦记忆系统，讨论集中但波动小 |
| **OpenCode** | 无（桌面版 v1.18.1 提及） | 10 | 10 | #42608: 5 评论 / 3 👍 | 严重 Bug（ID 回绕）+ UI 回归引关注 |
| **Pi** | v0.84.2 | 10 | 10 | #7547: 27 评论 | Windows 支持呼声最高，提供商兼容修复密集 |
| **Qwen Code** | v0.21.12 + 多个预览版 | 10 | 10+（Autofix 管线集中） | #8678: 9 评论 | Autofix/Review 管线重构是今日主旋律 |
| **CodeWhale**（原 DeepSeek TUI） | v0.9.8（品牌重组） | 12 | 12 | #3192: 13 评论 | 品牌过渡期，社区活跃度高但规模尚小 |

**注**：各工具热点 Issue 数为日报筛选口径，非仓库全部增量，但可反映当日讨论密集度。

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|------|---------|---------|
| **多 Agent 可靠性与可观测性** | Claude Code、Gemini、OpenCode、Copilot CLI | 子代理状态误报（Gemini #22323）、层级可视化 Dashboard（Claude #24537）、并行渲染卡顿（OpenCode #42657）均指向同一需求：Agent 调度需要更可信的状态汇报和可视化。 |
| **会话生命周期管理** | Claude Code、Codex、OpenCode、Qwen | 归档恢复（Claude #30869）、崩溃后会话不丢（Codex #34026）、ID 回绕导致会话失效（OpenCode #42608）、大会话恢复超时（Qwen #8678）——"会话是用户资产"已成共识。 |
| **安全护栏误报与权限治理** | Claude Code、Codex、Gemini、Pi、Qwen | 从 Git Bash 只读命令误报（Claude #86619）到本地仓库维护被拦（Codex #28015），再到子代理绕过权限配置（Gemini #22093），安全策略需要在"防护"与"不打扰"间重寻平衡。 |
| **记忆/上下文持久化** | Claude Code、Gemini、Kimi | MEMORY.md 大小可配置（Claude #79217）、低信号会话无限重试（Gemini #26522）、跨会话记忆系统（Kimi #1283/#1478），记忆工程化是下一阶段核心竞争点。 |
| **跨平台兼容性** | Codex、Gemini、Pi、Claude Code | Windows 系统级卡顿（Codex #38554）、WSL 剪贴板/挂起（Pi #6187）、Wayland 失败（Gemini #21983）——Linux/Windows 桌面端的"二等公民"现状亟待改善。 |
| **成本与 Token 透明度** | Claude Code、Pi、OpenCode | 配额点波动 17-20 倍（Claude #84607）、cached_tokens 未计入统计（Pi #8075）、免费额度误报（OpenCode #42013），付费用户对"花在哪"越来越敏感。 |
| **MCP 生态成熟度** | Copilot CLI、Claude Code、OpenCode | OAuth 兼容性回归（Copilot #4490/#4439）、Web Sandbox 代理阻塞浏览器自动化（Claude #11791）、配置缺字段静默失败（OpenCode #42662），MCP 尚处"能用但不稳"阶段。 |

## 4. 差异化定位分析

| 工具 | 定位 | 核心优势 | 当前短板 |
|------|------|---------|---------|
| **Claude Code** | 企业级开发 Agent 平台 | 功能深度最强（网关身份转发、GitLab MR、worktree 集成）；社区规模大，Issue 反馈质量高 | API 连接不稳、安全误报开始影响信任；功能诉求多而分散，聚焦度下降 |
| **OpenAI Codex** | ChatGPT 桌面生态延伸 | 与 ChatGPT/Codex 桌深度整合（Computer Use、图像生成）；官方权限模型迭代快 | 26.810 更新引发全系统卡顿/CPU 忙循环，Electron 层稳定性堪忧；macOS 崩溃伴 OOM 丢上下文 |
| **Gemini CLI** | 开放子代理生态的实验场 | SSR Agent 自动修复让 PR 合并效率极高；子代理调用（Agent-to-Agent）探索领先；nightly 节奏快 | 子代理状态误报、TUI 挂起等 P1 问题存量较大；默认不主动使用 skills，自定义工作流价值打折 |
| **Copilot CLI** | GitHub 生态内的企业 Copilot | 与 GitHub 组织策略深度绑定；版本迭代受控；用户基数大 | MCP OAuth 回归连续三版未彻底修复；Claude 模型在企业账号下误禁用，策略同步混乱 |
| **Kimi Code CLI** | 记忆系统驱动的轻量 Agent | 社区诉求极其聚焦（记忆 + 多设备），有明确的差异化机会 | 活跃度最低（日仅 4 条 Issue、0 PR）；团队响应速度待观察 |
| **OpenCode** | 高度可配置的开源终端 Agent | 架构开放（TUI + Desktop + 多 Provider）；贡献者响应快（ID 回绕当天即出修复 PR）；本地模型友好 | 基础设施脆弱（ID 生成器回绕暴露设计缺陷）；免费额度判定逻辑不透明；UI 回归频发 |
| **Pi** | 终端 AI"路由器"（多提供商抽象层） | 提供商兼容层最丰富（xAI、SiliconFlow、ChatGPT OAuth 图像等快速接入）；扩展生态有雏形 | Windows/WSL 一等公民支持悬而未决；TUI 渲染性能（Intl.Segmenter 单核占满）待优化 |
| **Qwen Code** | 偏工程化的 Autofix/Review 自动化管线 | Review 管线技术栈极深（内容锚定增量评审、断点续跑、收敛策略）；面向 CI 场景设计 | 核心架构耦合 @google/genai 类型；主线 CI 稳定性差；社区规模相对透明 |
| **CodeWhale** | 从 DeepSeek 专用转向多模型的 Rust 高性能 Agent | Rust 路线性能基准高；品牌重构后路线清晰（本地优先、TUI 细节打磨）；社区协作活跃 | 品牌过渡期文档不足；测试在 macOS/Windows 上常红；NIM 等第三方后端兼容长期未决 |

**路线分化总结**：Claude Code / Copilot CLI 走"绑定官方生态的企业工具"路线；Codex 赌桌面 App 场景；Gemini 探索开放 Agent 网络；OpenCode / Pi / CodeWhale 走"多提供商 + 可组合"的开源路线；Qwen 独树一帜押注"代码审查自动化"；Kimi 押注记忆系统。

## 5. 社区热度与成熟度

**第一梯队：高热度、高成熟度（日更新量大、问题反馈体系完整）**
- **Claude Code**：10 个热点 Issue 中包含 96 赞的连接类问题，社区规模最大，Issue 描述专业度高（含系统配置、复现步骤、回退验证）。
- **OpenAI Codex**：昨日 50 条 Issue 更新 + 5 个 Release，活跃度极高，且社区已形成"版本回归—定位—上报—对比验证"的成熟反馈模式（如多用户独立定位 26.810 为回归）。
- **Copilot CLI**：Issue 质量高（RF C 8414、BYOK wire API 等专业术语频出），但官方响应节奏偏慢，OAuth 回归跨版本未修复透支信任。

**第二梯队：快速迭代期（PR 密度高、但稳定性波动明显）**
- **Gemini CLI**：SSR Agent 批量合入 PR 使版本进化速度惊人；社区活跃度高但 P1 存量多，整体处于"高速打补丁"阶段。
- **Qwen Code**：Autofix 管线重构投入大，但 CI 频繁失败暴露其内部工程管理矛盾；社区讨论集中在管线能力而非基础体验。
- **Pi**：日均 10 PR 节奏稳定，社区需求清晰（Windows、提供商兼容），处于从"个人项目"向"平台"过渡期。

**第三梯队：中小规模、方向聚焦**
- **OpenCode**：贡献者响应速度快（ID 回绕当天修复），社区反馈质量高，但用户基数显著小于前两者。
- **CodeWhale**：外部贡献者已开始介入核心数据安全修复（session 索引并发写入、panic 处理），社区治理健康，但体量尚小。
- **Kimi Code CLI**：仅 4 条 Issue 更新、0 PR，社区尚处早期需求收集阶段。

## 6. 值得关注的趋势信号

### 信号一：Agent 自治程度与"可观测性缺口"之间的矛盾爆发
多工具同时出现 Agent 状态误报（Gemini MAX_TURNS 报成功、Codex 线程假死、OpenCode 消息循环不退出），说明 Agent 运行时缺乏一层可信的"状态真值协议"。**对开发者**：选择 AI CLI 时，应优先考察其 Task 状态机设计（终止原因是否透传、是否有强制超时），而非只看模型能力。

### 信号二：桌面端已成为 AI CLI 的主战场，但 Electron 架构代价显性化
Codex 26.810 的系统级卡顿、Claude 桌面端回归、Pi 的 WSL 挂起共同说明：桌面 App 的资源占用、输入延迟、崩溃恢复正取代模型效果成为留存关键。**对开发者**：在 AI CLI 迁移到重度桌面使用之前，先评估其是否有可用的纯 TUI 模式及进程隔离机制。

### 信号三：安全护栏进入"精细治理"时代，"一刀切"策略正在被反噬
从 Claude Code 的只读命令误报、Copilot 的网络安全策略误判到 Gemini 的子代理绕过配置，"安全归安全、开发归开发"的粗放边界已不适用。下一阶段竞争点将是**策略的可解释性**（为什么拦、依据是什么）与**粒度的可配置性**（可继承、可覆盖）。**对开发者**：若团队已在使用 AI CLI，建议主动维护一份"误报白名单"并反馈给厂商，这直接影响后续护栏演进。

### 信号四：记忆系统从 Feature 变为 Platform 级能力
Claude Code（MEMORY.md）、Gemini（Auto Memory）、Kimi（Memory System）三线并行布局记忆层，且都面临同样的工程难题：**如何界定哪些信息值得记忆、如何压缩、如何避免污染**。**对开发者**：尽早将项目知识库结构化（如 AGENTS.md、memory/ 目录），这比依赖任何单工具的自动记忆更可靠，且天然可迁移。

### 信号五：多模型与多提供商格局固化，"锁定"焦虑倒逼路由层成熟
Pi 在一天内合入 xAI Responses、SiliconFlow、ChatGPT OAuth 图像生成；OpenCode 增加 LAN Provider 自动发现；CodeWhale 新增 DS4 本地路径。AI CLI 正从"绑定单一模型"转向"路由器 + 适配层"架构。**对开发者**：评估工具时，其**模型替换成本**和**提供商适配速度**比当前默认模型性能更重要——后者随时会变，前者决定你的迁移成本。

### 信号六：成本透明度成为付费用户的核心不满点
Claude 配额点 17 倍波动、Pi 的 cached_tokens 未统计、OpenCode 免费额度误报——三起独立事件表明，AI CLI 的计费/用量体系普遍落后于功能迭代。**对开发者**：在重度使用某工具前，先确认其是否有按次/按 token 的详细账单导出能力，否则预算失控将不可避免。

---

**结论**：当前 AI CLI 赛道正处于"功能军备竞赛"与"稳定性欠账"并存的阶段。Claude Code 和 Copilot CLI 在功能深度和生态绑定上领先，但稳定性与安全策略体验正成为最大风险；Gemini 和 Qwen 在自动化（SSR 修复、Autofix 管线）上展现了工程化能力，但被 P1 存量问题拖累；OpenCode、Pi、CodeWhale 等开源新锐以更灵活的姿态抢占多提供商与本地模型市场，但短期内难以撼动主流用户的选择惯性。对技术决策者而言，建议同时监控各工具的 **P1 问题关闭速度** 和 **版本回归率**（而非功能发布频率），这两项指标最能反映工具在真实开发环境中的可靠性。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

## Claude Code Skills 社区热点报告（截至 2026-08-15）

> 注：原始数据中评论数字段未显示，以下热度按仓库“评论数排序”的 TOP 列表位置推断；所有 PR 当前均为 **Open** 状态。

---

### 1. 热门 Skills 排行

**#1298 — fix(skill-creator): 修复 run_eval.py 始终报告 0% recall**  
- 功能：修复 `run_eval.py` 评估脚本的 0% recall 问题，并解决 Windows 流读取、触发检测和并行 worker 故障。  
- 讨论热点：skill 描述优化循环一直“对着噪声优化”，Issue #556 有 10+ 次独立复现，社区关注度极高。  
- 状态：Open  
- 链接：https://github.com/anthropics/skills/pull/1298

**#514 — Add document-typography skill**  
- 功能：为 AI 生成文档提供排版质量控制，避免孤字折行、页底孤立标题、编号错位等常见问题。  
- 讨论热点：这些问题影响 Claude 生成的几乎所有文档，用户虽不主动要求，但显著影响专业度。  
- 状态：Open  
- 链接：https://github.com/anthropics/skills/pull/514

**#538 — fix(pdf): 修正 SKILL.md 大小写敏感引用**  
- 功能：修复 8 处 `REFERENCE.md`/`FORMS.md` 与真实文件 `reference.md`/`forms.md` 不一致的问题。  
- 讨论热点：在大小写敏感文件系统上，pdf skill 无法正常加载引用文件。  
- 状态：Open  
- 链接：https://github.com/anthropics/skills/pull/538

**#486 — Add ODT skill**  
- 功能：支持 OpenDocument 格式（.odt/.ods）的创建、模板填充、读取及 ODT→HTML 转换。  
- 讨论热点：社区对开源/ISO 标准文档格式的官方支持有持续需求。  
- 状态：Open  
- 链接：https://github.com/anthropics/skills/pull/486

**#210 — Improve frontend-design skill**  
- 功能：重写 frontend-design skill，使指令更清晰、可执行，并能在单次对话中真正落地。  
- 讨论热点：技能应该是“操作指令”而非“开发者文档”，是社区反复讨论的元问题。  
- 状态：Open  
- 链接：https://github.com/anthropics/skills/pull/210

**#83 — Add skill-quality-analyzer and skill-security-analyzer**  
- 功能：新增两个元技能：从结构、文档、示例等维度评估技能质量；对技能进行安全分析。  
- 讨论热点：社区技能质量参差，需要自动化评估与安全审查机制。  
- 状态：Open  
- 链接：https://github.com/anthropics/skills/pull/83

**#723 — Add testing-patterns skill**  
- 功能：覆盖测试哲学、Testing Trophy 模型、单元测试、React 组件测试、测试命名与边界用例。  
- 讨论热点：AI 辅助测试生成的标准化实践。  
- 状态：Open  
- 链接：https://github.com/anthropics/skills/pull/723

**#525 — Add pyxel skill**  
- 功能：新增 Pyxel 复古像素游戏开发技能，集成 pyxel-mcp，支持 write → run_and_capture → inspect → iterate 工作流。  
- 讨论热点：创意编码/游戏开发场景与 MCP 工具链的结合。  
- 状态：Open  
- 链接：https://github.com/anthropics/skills/pull/525

---

### 2. 社区需求趋势

- **Skill 质量与评估工具**  
  多个 issue 指出 skill-creator 评估循环失效（recall=0%）、编写风格偏文档化。社区需要可靠的评估、验证与优化工具。  
  https://github.com/anthropics/skills/issues/556  
  https://github.com/anthropics/skills/issues/202

- **安全与信任边界**  
  #492 担忧社区技能在 `anthropic/` 命名空间下冒充官方，形成信任边界滥用；#1175 关注 SharePoint 文档处理中的权限与上下文安全。  
  https://github.com/anthropics/skills/issues/492  
  https://github.com/anthropics/skills/issues/1175

- **组织级共享与去重**  
  #228 希望组织内直接共享技能；#189 反映插件重复安装导致上下文浪费。社区需要更好的分发与依赖管理机制。  
  https://github.com/anthropics/skills/issues/228  
  https://github.com/anthropics/skills/issues/189

- **上下文窗口优化**  
  #1487 指出 `claude-api` skill 单次注入约 156k tokens 耗尽上下文；#1329 提出 compact-memory 符号化记忆以压缩 agent 状态。  
  https://github.com/anthropics/skills/issues/1487  
  https://github.com/anthropics/skills/issues/1329

- **新垂直领域技能**  
  企业平台（ServiceNow、SAP）、开源文档格式（ODT）、测试生成、游戏开发、agent 治理（#412）是社区提交 PR/提案最活跃的方向。  
  https://github.com/anthropics/skills/issues/412

---

### 3. 高潜力待合并 Skills

- **#568 — Add ServiceNow platform skill**  
  覆盖 ITSM、ITOM、ITAM/SAM、FSM、HRSD、SPM/PPM、SecOps 等，是最全面的企业平台技能之一，最近更新至 2026-08-12。  
  https://github.com/anthropics/skills/pull/568

- **#1367 — feat(skills): add self-audit**  
  先做机械文件验证，再进行四维推理质量审计，按损害严重度排序，通用性强，已迭代到 v1.3.0。  
  https://github.com/anthropics/skills/pull/1367

- **#181 — Add SAP-RPT-1-OSS predictor skill**  
  封装 SAP 开源表格基础模型，用于 SAP 业务数据预测分析，企业数据分析场景明确。  
  https://github.com/anthropics/skills/pull/181

- **#1479 — Add plan-file-hygiene skill**  
  为规划类工件增加生命周期管理，解决“规划产物无生命周期”问题，社区协作充分。  
  https://github.com/anthropics/skills/pull/1479

---

### 4. Skills 生态洞察

社区当前最集中的诉求是：**提升 Skill 自身的质量与可信度（可靠评估、安全检查、按需加载），同时扩展覆盖企业/文档/测试等真实工作流的垂直技能，并改善共享与互操作机制。**

---

# Claude Code 社区动态日报（2026-08-15）

## 1. 今日速览

- Claude Code v2.1.233 发布，新增 GitLab MR URL 支持，并引入可选的 `forward_user_identity` 网关配置。
- 最热 Issue 为 #69238：触发 Advisor 时出现 “No response from API” 错误，已有 63 条评论、96 个 👍。
- 社区功能诉求集中在多 Agent 可视化、会话恢复/归档、可配置内存上限等方向；Windows 新回归（Git Bash 权限误报）与网络连接不稳也引发较多讨论。

## 2. 版本发布

### v2.1.233

主要更新内容：

- `--worktree` 和 `claude agents` 视图新增 GitLab MR URL 支持，MR 显示为 `!N` 格式。
- Anthropic upstream 新增可选 `forward_user_identity` apps gateway 设置，可把已登录用户身份作为 header 发送，方便代理后端透传身份。

## 3. 社区热点 Issues

### 1. [BUG] Advisor 触发时报 “No response from API” 错误  
**Issue #69238** | 状态：Open  
- 作者在 macOS 上以 Sonnet 为基础模型使用 Advisor 时，频繁出现 “No response from API” 并触发约 2m25s 重试。  
- 63 条评论、96 👍，是当前社区影响面最大的连接类故障。  
- 链接：https://github.com/anthropics/claude-code/issues/69238

### 2. [Feature] 桌面版支持取消归档 Claude Code 会话  
**Issue #30869** | 状态：Closed  
- 用户希望能在 Claude Desktop 中恢复/取消归档历史会话。  
- 29 条评论、57 👍，说明会话生命周期管理需求强烈，虽然已关闭但讨论热度高。  
- 链接：https://github.com/anthropics/claude-code/issues/30869

### 3. [Feature] Agent Hierarchy Dashboard：多 Agent 工作流统一实时可视化  
**Issue #24537** | 状态：Open  
- 提议在 TUI + Desktop 上构建“Agent 层级仪表盘”，统一展示多 Agent 调度的层级、状态、成本与调用链。  
- 16 条评论、17 👍，反映多 Agent 场景下的可观测性诉求上升。  
- 链接：https://github.com/anthropics/claude-code/issues/24537

### 4. [Docs/Bug] Playwright/Puppeteer 等浏览器自动化工具与 Web Sandbox 代理不兼容  
**Issue #11791** | 状态：Open  
- 由于安全代理不支持 HTTPS CONNECT 隧道，浏览器自动化工具无法在 Web Sandbox 中运行。  
- 11 条评论、16 👍，开发者希望此类限制能被明确文档化。  
- 链接：https://github.com/anthropics/claude-code/issues/11791

### 5. [BUG] Windows Git Bash：只读 cd 复合命令触发持续权限误报  
**Issue #86619** | 状态：Open  
- 自 2.1.232 / auto-mode 上线后，只读的 `cd` 复合命令被静态分析判定为需授权，导致不断弹出权限确认。  
- 两台独立 Windows 机器复现，9 条评论、9 👍，属于最近的 Windows 回归热点。  
- 链接：https://github.com/anthropics/claude-code/issues/86619

### 6. [Feature] 增加关闭 Claude.ai Web/App 提示建议的选项  
**Issue #66117** | 状态：Open  
- 用户希望在 Claude Web 和桌面 App 中禁用 prompt suggestions。  
- 9 条评论、10 👍，属于 UI/交互层面的高频优化诉求。  
- 链接：https://github.com/anthropics/claude-code/issues/66117

### 7. [BUG] Windows 11 上频繁 ECONNRESET / “Connection lost mid-response”  
**Issue #86473** | 状态：Open  
- 多个 Claude Code 功能面持续出现连接中断，但直接访问 `api.anthropic.com` 却正常，疑似客户端/网络栈问题。  
- 2 条评论、2 👍，虽然评论数不高，但属于影响开发效率的关键网络故障。  
- 链接：https://github.com/anthropics/claude-code/issues/86473

### 8. [BUG] 每周配额点数对应 token 数存在 17 倍同天波动  
**Issue #84607** | 状态：Open  
- 用户统计发现同一周配额点对应的 token 消耗最高波动达 20 倍，计费/配额单位不透明。  
- 2 条评论、2 👍，涉及成本可视化与配额公平性，属于付费用户敏感问题。  
- 链接：https://github.com/anthropics/claude-code/issues/84607

### 9. [BUG] Crash 后终端遗留 mouse-tracking 模式，未恢复原始状态  
**Issue #84029** | 状态：Open  
- TUI 启动时开启 mouse-tracking，但恢复处理只注册在正常退出路径上；一旦崩溃，用户的每个鼠标移动都会注入原始转义序列。  
- 2 条评论，问题定位清晰，复现路径明确。  
- 链接：https://github.com/anthropics/claude-code/issues/84029

### 10. [Feature] 让 auto-memory MEMORY.md 索引大小限制可配置  
**Issue #79217** | 状态：Open  
- 当前 MEMORY.md 只加载前 200 行或 25KB，用户希望该限制可配置，以适配更大的项目记忆。  
- 3 条评论、2 👍，属于长期记忆与上下文管理的核心扩展点。  
- 链接：https://github.com/anthropics/claude-code/issues/79217

## 4. 重要 PR 进展

今日更新的 PR 共 4 个，不足 10 个，以下全量列出。

### 1. fix(security-guidance): preserve Python probe errors  
**PR #86746** | 状态：Open  
- 修复 #86709，保留 `sg-python.sh` 探测 Python 解释器时的 stderr；当所有候选解释器失败时，用户可以看到具体诊断信息，而不是只有通用错误。  
- 链接：https://github.com/anthropics/claude-code/pull/86746

### 2. feat: add shell completions (bash, zsh, fish) that stay in sync with the installed CLI  
**PR #86626** | 状态：Open  
- 为 `claude` CLI 新增 bash、zsh、fish 的 tab completion 脚本，并附带安装说明。  
- 兼容 macOS 原生 bash 3.2，无需额外安装 bash-completion 包。  
- 链接：https://github.com/anthropics/claude-code/pull/86626

### 3. Create pylint.yml  
**PR #83890** | 状态：Open  
- 新增 Pylint CI workflow，用于 Python 代码静态检查。  
- 链接：https://github.com/anthropics/claude-code/pull/83890

### 4. add the missing source to claude code  
**PR #41611** | 状态：Open  
- 提交说明简短：为 Claude Code 补充缺失的源代码文件。  
- 链接：https://github.com/anthropics/claude-code/pull/41611

## 5. 功能需求趋势

综合过去 24 小时更新的 Issues，社区关注的功能方向主要有：

- **多 Agent 工作流可视化与恢复**  
  如 Agent Hierarchy Dashboard（#24537）、Workflow 支持恢复 agent session（#86089），说明多 Agent 编排场景正在从“能跑”走向“可观测、可接管”。

- **会话生命周期管理**  
  包括桌面版取消归档（#30869）、Cowork 项目归档后可恢复（#85272）、cleanupPeriodDays 可配置/防止误删（#86730）、MEMORY.md 大小限制可配置（#79217）。开发者希望更精细地控制会话与记忆数据。

- **安全护栏与模型切换策略**  
  多个 Issue 反映安全模型误报导致开发被中断：如 Fable 5 的 dual-use safeguard 在合法 WAF 开发中误触发（#86804）、`model_refusal_fallback` 在 tmux 多会话协作中反复拦截（#84266）、合规的凭据轮换被标记（#86819）。

- **跨平台与终端兼容性**  
  Windows Git Bash 权限误报（#86619）、OSC 52 + MobaXterm 问题（#61043）、macOS 启动 Beachball（#76079）、Linux Desktop 缺少 Dispatch（#82431）等，说明终端和桌面环境的适配仍是痛点。

- **成本与配额透明度**  
  token 消耗波动（#84607）、自动充值扣费异常（#83062）、上下文压缩与 150k/1M 窗口不一致（#85205），用户对“花了多少、为什么花”越来越敏感。

- **浏览器与 MCP 生态扩展**  
  浏览器自动化被 Web Sandbox 阻塞（#11791）、Browser Agent MCP 缺少持久化 context 列表（#86807），表明浏览器相关 Agent 能力仍有不少缺口。

## 6. 开发者关注点

- **API 连接与重试体验不佳**  
  “No response from API”、ECONNRESET、“Connection lost mid-response”等错误反复出现，长重试等待时间严重影响交互效率。

- **安全/权限误报正在打断合法开发流**  
  从 Git Bash 的只读命令，到 tmux 多会话编排，再到 WAF/凭据轮换等防御性开发，均出现误判；部分场景还会强制切换模型，开发者普遍感到“被误伤”。

- **Windows 和 macOS 平台回归较多**  
  Windows Git Bash、MSIX 更新占用、macOS Keychain 启动阻塞等问题集中出现，说明桌面端稳定性和测试覆盖仍待加强。

- **数据删除与不可恢复风险**  
  默认清理策略直接删除会话记录、归档后无法从 UI 恢复、崩溃后终端状态错乱等，都是用户不可接受的数据/环境损失。

- **插件与 Marketplace 可靠性不足**  
  目录源 Marketplace 安装的插件 hook 不执行、macOS 上 marketplace add 报 EFAULT、Git 已注册 Marketplace “检查更新”首次必失败等，影响第三方生态使用信心。

- **成本与配额不透明**  
  用户对 token 消耗波动、配额点折算和自动充值缺少清晰解释，付费用户希望获得更细粒度的账单与用量可视化。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-08-15 | 数据来源：[github.com/openai/codex](https://github.com/openai/codex)**

---

## 今日速览

过去 24 小时内，Codex 连续发布了 5 个 `rust-v0.148.0-alpha` 迭代（alpha.14 → alpha.18），版本迭代节奏明显加快。社区侧最突出的信号是：**8 月 14 日推送的 Windows 桌面版更新（26.810.4967.0）引发了大量新上报的性能回归问题**——包括系统级鼠标卡顿、CPU 空转、输入延迟等，多条 Issue 均指向"退出 Codex 后系统立即恢复正常"。与此同时，官方在合入多个围绕权限模型、Windows 沙箱与 TUI 交互的修复 PR，但社区对桌面端稳定性的质疑声量正在快速上升。

---

## 版本发布

过去 24 小时内发布 5 个版本，均为快速迭代的 alpha 系列：

| 版本 | 备注 |
|---|---|
| [rust-v0.148.0-alpha.18](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.18) | 最新版 |
| [rust-v0.148.0-alpha.17](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.17) | |
| [rust-v0.148.0-alpha.16](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.16) | |
| [rust-v0.148.0-alpha.15](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.15) | |
| [rust-v0.148.0-alpha.14](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.14) | |

> 注：目前 Release 页面暂未附详细 changelog，建议关注后续补全的更新说明。

---

## 社区热点 Issues

以下从过去 24 小时更新的 50 条 Issue 中选出 10 条最受关注的问题：

### 1. 最新 Windows 更新导致系统级卡顿（新回归，声量最高）
- **#38554**：[\[Windows\]\[26.810.4967.0\] This update makes the entire PC stutter — fully exiting Codex fixes it immediately](https://github.com/openai/codex/issues/38554)
- 作者明确指出版本从 `26.803.10989.0` 更新到 `26.810.4967.0` 后，整个 PC 开始卡顿，**完全退出 Codex 后立即恢复**。8 月 14 日当天即有 8 条评论，是目前最清晰的回归定位报告之一，强烈建议官方优先复现。

### 2. Windows 版空闲时 CPU 忙循环
- **#38547**：[Codex Windows 26.810.4967 idle main-process CPU busy loop in Chrome plugin app-server hashing](https://github.com/openai/codex/issues/38547)
- 应用在完全空闲时进入 Electron 主进程 CPU 忙循环，且在未打开 Browser 功能的情况下触发。该问题在 26.803 → 26.810 升级后立即出现，与 #38554 高度相关，疑似同根因。

### 3. Windows 版新更新导致全局鼠标和输入延迟（多条同类型上报）
- **#38583**：[\[Windows 11\]\[26.813.12317\] ChatGPT/Codex causes persistent system-wide mouse lag and ~10% CPU while idle](https://github.com/openai/codex/issues/38583)
- 空闲状态下 CPU 占用约 10%，并伴随全系统鼠标滞后。同类问题还包括 [#38546](https://github.com/openai/codex/issues/38546)（非管理员运行时鼠标卡顿）、[#38556](https://github.com/openai/codex/issues/38556)（鼠标明显迟滞）、[#38510](https://github.com/openai/codex/issues/38510)（Chrome native host 重试循环占用 CPU）。**这是当前社区声量最大的一组问题。**

### 4. 老牌 Windows 卡顿问题持续发酵：101 条评论、84 个 👍
- **#20214**：[Codex App frequently freezes/stutters on Windows 11 Pro despite sufficient system resources](https://github.com/openai/codex/issues/20214)
- 自 4 月报出至今仍在讨论中，已积累 101 条评论和 84 个 👍，是 Codex 仓库内性能类最热 Issue。用户配置 Ryzen 5 5600 + 32GB RAM，资源充足仍频繁卡顿，说明问题并非低端硬件独有。

### 5. macOS 新版频繁崩溃、CPU 飙升，用户要求回滚
- **#38637**：[New Codex release very unstable and high cpu usage on mac, crashes constantly! Please revert](https://github.com/openai/codex/issues/38637)
- 26.810.41047 版本在 macOS arm64 上持续崩溃，CPU 占用极高，甚至无法打开长对话。同日另有 [#38468](https://github.com/openai/codex/issues/38468)（macOS 100%+ CPU、10+GB RAM、UI 频繁挂起）佐证该版本在 macOS 也存在明显性能回退。

### 6. macOS 空闲时反复拉起 Computer Use 进程并触发 V8 OOM
- **#38455**：[ChatGPT desktop 26.810.41047 repeatedly spawns Computer Use workers and crashes with V8 OOM on macOS](https://github.com/openai/codex/issues/38455)
- 空闲约 98 秒后崩溃，创建 316 个线程（其中 187 个为 computer-use），最终 SIGABRT。前一个版本正常，属典型回归。这类偶发 OOM 会导致用户对话上下文直接丢失。

### 7. 安全策略误报：正常本地维护操作被拦
- **#28015**：[False positive cybersecurity safety check repeatedly blocks normal local repo maintenance in Codex CLI](https://github.com/openai/codex/issues/28015)
- 检查 Git 状态、清理本地仓库等常规 DevOps 操作被判定为"潜在网络安全风险"，并打断付费交互会话。用户对"安全判定过于激进"的抱怨在这类问题中体现得比较明显。

### 8. Windows 系统级输入延迟（高赞）
- **#28855**：[Codex Desktop 26.611.8604.0 causes intermittent system input lag on Windows despite clean logs/plugins disabled](https://github.com/openai/codex/issues/28855)
- 18 条评论、20 个 👍。启动后即出现间歇性全局鼠标/键盘延迟，即使日志干净、插件全禁用也能复现，说明问题可能在更底层。

### 9. Windows 内核 Pool 内存持续增长
- **#29436**：[Windows desktop app triggers persistent kernel-pool growth and system-wide slowdown](https://github.com/openai/codex/issues/29436)
- 运行约 1 小时后系统内存升至 95%，截图和剪贴板严重延迟，且关闭普通应用无法回收——指向 Codex 在内核层存在资源泄漏。

### 10. DWM Composition 句柄泄漏（Windows 10）
- **#33192**：[DWM Composition handles accumulate after Codex tasks with tool calls](https://github.com/openai/codex/issues/33192)
- 有工具调用的任务结束后，DWM Composition 句柄明显增长（一次 5 次调用的受控测试增加 22 个），而纯文本回复任务无此现象，定位思路清晰，便于官方复现。

---

## 重要 PR 进展

以下为过去 24 小时内更新的 PR 中最值得关注的 10 个：

### 1. [Windows 沙箱强制 enforce 拒绝读规则（安全修复）](https://github.com/openai/codex/pull/38660)
- **状态**：已关闭｜**标签**：bug、windows-os、sandbox
- 修复 Windows 沙箱请求在"每次执行路径或 setup 刷新后未能保持受管文件系统 deny 规则"的问题，不支持策略时改为 fail-closed，避免命令在未受保护状态下运行。**对 Windows 权限模型是一次重要补强。**

### 2. [为每个环境设置权限 Profile（协议层）](https://github.com/openai/codex/pull/38673)
- **状态**：已关闭｜**标签**：app、protocol、permissions
- 为每个 `EnvironmentConfig` 增加解析后的 `permission_profile`，让 `Ready` 环境可覆盖线程权限，而 `FromThread` 环境继续继承线程配置。权限粒度进一步细化。

### 3. [保留环境配置的所有权](https://github.com/openai/codex/pull/38678)
- **状态**：已关闭｜**标签**：app、config
- 修复附件环境可能被后续线程设置更新意外覆盖权限的问题。环境自身持有的权限与线程继承配置分离，避免"配置更新导致权限丢失"。

### 4. [将对齐策略违规暴露为类型化错误](https://github.com/openai/codex/pull/38682)
- **状态**：已关闭｜**标签**：API、observability
- 识别 response streams 与 HTTP 400/403 中的 `misalignment_policy_violation`，保留上游错误信息并在空白时提供兜底文案，标记为不可重试。**提升 API 集成方排查对齐问题的可观测性。**

### 5. [委派会话保留 HTTP 回退](https://github.com/openai/codex/pull/38681)
- **状态**：已关闭｜**标签**：session、websocket
- WebSocket 回退是 session 级别的。若父会话已切到 HTTP，子 session 不应再发起新的 WebSocket 连接。提升复杂多会话场景下的资源利用效率。

### 6. [Linux 沙箱：通过受管代理路由 DNS](https://github.com/openai/codex/pull/31644)
- **状态**：OPEN｜**标签**：linux-sandbox
- 原生 DNS 客户端不读 HTTP/SOCKS 代理变量，因此 Linux 沙箱在 bubblewrap 网络命名空间内需要 DNS 适配层。**属于 Linux 沙箱方向的重要基础设施 PR。**

### 7. [TUI：排除带快捷键修饰的输入进入粘贴突发检测](https://github.com/openai/codex/pull/38675)
- **状态**：已关闭｜**标签**：TUI、input
- 普通、Shift、Windows AltGr 字符事件视为文本输入；Super、Hyper、Meta 修饰键则排除在"粘贴突发"之外。避免组合键触发意外粘贴行为。

### 8. [Code Mode 类型中解析本地 JSON Schema 引用](https://github.com/openai/codex/pull/38664)
- **状态**：已关闭｜**标签**：code-mode、types
- 修复 Code Mode 将文档内 `$ref` 渲染为 `unknown` 的问题，现在可正确解析 JSON Pointer 引用并生成完整的 TypeScript 声明。

### 9. [新增覆盖开关：跳过项目配置加载](https://github.com/openai/codex/pull/38647)
- **状态**：已关闭｜**标签**：CLI、config
- 增加 `LoaderOverrides::ignore_project_config`，可跳过项目根发现及所有项目配置层，同时保留 session override 与云端配置生效。便于在特定环境隔离项目配置干扰。

### 10. [重构：抽取 Apps 缓存逻辑为 ConnectorRuntimeManager](https://github.com/openai/codex/pull/31471)
- **状态**：OPEN｜**标签**：faster-connectors
- 将 Codex Apps 的工具缓存迁移到 `ConnectorRuntimeManager` / `ConnectorRuntimeContext` 体系，并按 account、ChatGPT user、workspace-account 模式、Codex home 做上下文隔离。属 `faster-connectors` 系列的首个 PR，是架构演进方向的重要参考。

---

## 功能需求趋势

从过去 24 小时的 50 条 Issue 和 50 条 PR 中，可提炼出社区最集中的四个方向：

### 1. 桌面端性能与系统资源占用（绝对主流）
大量 Issue（#20214、#28855、#29436、#33192、#33912、#34158、#38455、#38468、#38510、#38546、#38547、#38554、#38556、#38583、#38637）集中在：
- 系统级输入延迟 / 鼠标卡顿
- 空闲 CPU 占用 / 忙循环
- 内存泄漏（内核 Pool、DWM 句柄、V8 OOM）
- Electron 主线程阻塞

**这已连续多月成为 Codex 社区反馈最强烈的方向。**

### 2. 权限模型与安全策略精调
社区对权限体系持续保有改进诉求：
- PR #38673、#38678 代表官方在"环境级权限覆盖 vs 继承"上细化
- Issue #28015 反映安全校验误报对正常开发流程的干扰
- PR #38660 补强 Windows 沙箱 deny-read 规则闭合

方向是从"粗粒度全局控制"走向"细粒度、可继承、可覆盖"的模型，同时减少误报。

### 3. 会话状态一致性与恢复能力
- Issue #24287（Thinking 卡死、Stop 无效、turn 消失）
- Issue #34026（已完成线程仍显示 Thinking，消息排队无法开始新回合）
- Issue #34724（TUI 恢复长线程时白屏无进度）
- PR #38681（委派会话的 HTTP 回退）

在多设备、长会话、WebSocket 切换的场景下，用户对会话可恢复性的要求正在提高。

### 4. 自定义模型与配置灵活性
- Issue #32349：`model_catalog_json` 自定义模型元数据无法解析（MiniMax-M2.7）
- Issue #34582：请求仓库感知的任务交接能力
- Issue #24484：Git safe.directory 诊断缺失

表明已有用户在使用非 OpenAI 模型 / 私有模型接入 Codex 工作流，配置链路相关体验仍有缺口。

---

## 开发者关注点

### 痛点 1：26.810.4967 更新造成明显回归，用户信任受损
多位用户（#38554、#38547、#38510、#38583、#38546、#38637）明确表示"前一个版本正常，更新后立即出问题"。**"关闭 Codex 后全系统立刻恢复流畅"这一反馈被反复提及**，意味着问题大概率出在 Codex 桌面端自身（Electron 主进程、Chrome native host、插件轮询等）。

### 痛点 2：Windows 平台低效资源调用
- 每秒 spawn 一次 `powershell.exe` 做完整进程轮询（#25453）
- Chrome native host 陷入重试循环占满 CPU（#38510）
- Work Louder/Codex Micro HID 发现阻塞 Electron 主线程（#33912）
- 无管理员权限时反而出现鼠标卡顿（#38546）

开发者普遍期望：**减少轮询式 API 调用，改为事件驱动和缓存复用。**

### 痛点 3：问题跨版本长期未解决
#20214 自 4 月持续至今（101 评论 / 84 👍），#25453、#28015、#28855、#29436 等也已存在 2-3 个月。开发者对"老问题未被解决，新版本又引入回归"的节奏表示担忧。

### 痛点 4：安全校验对正常开发流程的干扰
#28015 是典型代表：普通本地仓库检查被误判为安全风险。开发者希望安全机制能区分"安全领域的操作"和"日常开发运维操作"，并提供更透明、可理解的判定依据。

### 痛点 5：崩溃发生时上下文易丢失
- macOS 上 V8 OOM 崩溃（#38455）
- 主窗口卡在加载界面，新窗口虽可恢复但浏览器状态丢失（#37550）
- 更新后线程状态错乱、消息排队不执行（#34026）

用户对 Codex 作为日常生产力工具的稳定性预期在提升，崩溃恢复和状态持久化需求变得比功能迭代更紧急。

---

> **编辑点评**：过去 24 小时内，官方在权限体系与沙箱安全上的 PR 密度很高，但社区焦点几乎全部集中在 26.810 版本带来的桌面端性能回退上。建议重点跟进 #38554 与 #38547 的官方回复，并留意 rust-v0.148.0-alpha 系列快速迭代中是否包含针对 Electron 层问题的修复。
>
> *日报生成时间：2026-08-15 | 数据截至 2026-08-15 更新事件*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-15

## 1. 今日速览

今日发布 v0.56.0-nightly 版本，仅包含一处测试迁移修复。值得关注的是，**SSR（自动修复）Agent 批量提交了十余个 PR**，覆盖子代理终止原因误报、TUI 挂起、MessageBus 静默超时等核心稳定性问题；社区侧讨论热度集中在 **Subagent 可靠性**（MAX_TURNS 误报、通用代理挂起、浏览器代理 Wayland 兼容性）与 **Auto Memory 记忆系统质量**上。

## 2. 版本发布

**v0.56.0-nightly.20260815.g2a87e7be1**（2026-08-15）

仅包含 1 项变更：
- [PR #28811](https://github.com/google-gemini/gemini-cli/pull/28811)（已合入）：将 `a2a-server` 测试中直接修改 `process.env` 的写法迁移为 Vitest 官方推荐的 `vi.stubEnv()` / `vi.unstubAllEnvs()`，消除测试环境污染。

🔗 [完整 Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260814.gc0d192452...v0.56.0-nightly.20260815.g2a87e7be1)

## 3. 社区热点 Issues

以下为过去 24 小时更新最活跃、社区反馈最强烈的 10 个 Issue：

### 🔴 高优先级 Bug

| # | Issue | 热度 | 说明 |
|---|-------|------|------|
| 1 | [#22323 Subagent MAX_TURNS 被误报为 GOAL 成功](https://github.com/google-gemini/gemini-cli/issues/22323) | 💬 12 · P1 | `codebase_investigator` 子代理在达到最大轮次尚未分析时，却返回 `status: "success"` / `Termination Reason: "GOAL"`，掩盖了实际中断。属于典型的**状态误报**，会直接误导用户和上层编排逻辑。已有对应 PR #28815 在修复中。 |
| 2 | [#21409 Generalist 代理无限挂起](https://github.com/google-gemini/gemini-cli/issues/21409) | 💬 8 · 👍 8 · P1 | 一旦 Gemini CLI 将任务委托给 generalist agent 即永久挂起，连"创建文件夹"这种简单操作也卡死，用户最长等待 1 小时后手动取消。规避手段是显式禁止模型使用子代理——这暴露出子代理调度的健壮性缺陷。 |
| 3 | [#25166 Shell 执行完成后卡在 "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166) | 💬 4 · 👍 3 · P1 | 极简单的 CLI 命令执行完毕后，终端仍显示命令活跃并进入"等待输入"状态。非偶发问题，严重影响自动化流程。 |
| 4 | [#21983 Browser 子代理在 Wayland 下失败](https://github.com/google-gemini/gemini-cli/issues/21983) | 💬 4 · 👍 1 · P1 | 浏览器子代理在 Wayland 会话中运行失败，`Termination Reason: GOAL` 但实际功能不可用，Linux 桌面用户受影响。 |
| 5 | [#22186 get-shit-done 输出钩子崩溃](https://github.com/google-gemini/gemini-cli/issues/22186) | 💬 3 · P1 | get-shit-done 输出即将完成（打印用户摘要）时会反复触发崩溃，需要复现与修复。 |

### 🟡 功能/质量类

| # | Issue | 热度 | 说明 |
|---|-------|------|------|
| 6 | [#26522 Auto Memory 无限重试低信号会话](https://github.com/google-gemini/gemini-cli/issues/26522) | 💬 5 · P2 | Auto Memory 仅将"成功 read_file 的会话"标记为已处理；低信号会话因萃取代理跳过读取而永远未处理，导致反复进入检索队列，浪费 token 与后台算力。 |
| 7 | [#24246 工具数量超过 128 时报 400 错误](https://github.com/google-gemini/gemini-cli/issues/24246) | 💬 3 · P2 | 当可用工具超过 400 个时 API 直接返回 400。社区期望 agent 能按需裁剪工具作用域，而非全量注入上下文。 |
| 8 | [#22093 v0.33.0 起子代理绕过权限设置运行](https://github.com/google-gemini/gemini-cli/issues/22093) | 💬 3 · P2 | 用户明确在配置中禁用 agents，但升级到 v0.33.0 后 generalist 等子代理仍被自动调用。**权限配置失效**是严重的信任边界问题。 |
| 9 | [#22672 代理应阻止/劝阻破坏性操作](https://github.com/google-gemini/gemini-cli/issues/22672) | 💬 3 · 👍 1 · P2 | 在复杂 git 操作、数据库维护等场景中，模型偶尔使用 `git reset`、`--force` 等危险命令，而更安全的替代方案存在。社区希望引入破坏性操作识别与劝阻机制。 |
| 10 | [#21968 Gemini 不主动使用 skills 和子代理](https://github.com/google-gemini/gemini-cli/issues/21968) | 💬 6 · P2 | 用户反馈模型几乎**不会主动调用**自定义 skills 与子代理，即使任务高度相关（如配置了 gradle/git 技能），必须显式指令才会使用。这削弱了自定义工作流的设计价值。 |

---

## 4. 重要 PR 进展

过去 24 小时内最值得关注的 10 个 PR：

| # | PR | 状态 | 说明 |
|---|-----|------|------|
| 1 | [#28815 子代理恢复时保留原始终止原因](https://github.com/google-gemini/gemini-cli/pull/28815) | 🟡 Open · P1 | 修复 #22323：子代理在 MAX_TURNS/TIMEOUT 后的宽限恢复轮中调用 `complete_task` 时，不再覆写为 "GOAL" 成功，保留真实中断原因——**直击今日头号 issue**。 |
| 2 | [#28812 为执行增加超时，防止 TUI 无限挂起](https://github.com/google-gemini/gemini-cli/pull/28812) | 🟡 Open · P1 | 修复 #21477：裸 Linux 终端启动时 `getProcessInfo()` 依赖 `execAsync` 执行 `ps`，一旦子进程卡死，TUI 永久停在 "Initializing..."。加入执行超时兜底。 |
| 3 | [#28816 MessageBus.request 发布失败时静默挂起修复](https://github.com/google-gemini/gemini-cli/pull/28816) | ✅ Closed | 修复 #22588：`publish()` 的 floating promise 未注册失败处理，reject 后会导致请求静默挂起 60 秒。 |
| 4 | [#28817 Hook 状态保留执行中的子代理工具调用](https://github.com/google-gemini/gemini-cli/pull/28817) | ✅ Closed | 修复 #22589：非根调度器（子代理）首次出现且无需审批的工具调用（如后台工具）过去会被过滤丢弃，现会在 hook 状态中保留。 |
| 5 | [#28738 允许 Agent 调用 Agent](https://github.com/google-gemini/gemini-cli/pull/28738) | 🟡 Open · P2 · size/l | 修复 #22092：通过 `tools:` frontmatter 让子代理可委托其他子代理或递归调用自身（保留递归深度限制）。**社区长期关注的能力**，实现成本较大。 |
| 6 | [#20916 修复 ShellExecutionService PTY 文件描述符泄漏](https://github.com/google-gemini/gemini-cli/pull/20916) | ✅ Closed · P1 | 修复 #15945：PTY master fd 在进程退出/手动 kill 后未正确关闭，长会话会耗尽系统 PTY（macOS `ptmx_max=511`）。修复了 `destroy()` 未调用及 shutdown 竞态问题。 |
| 7 | [#27154 同步删除活动 PTY 条目，修复内存/句柄泄漏](https://github.com/google-gemini/gemini-cli/pull/27154) | ✅ Closed · P2 | 与 #20916 互补：`activePtys.delete()` 原先包裹在日志流清理 Promise 中，若日志流挂起则条目永不回收。 |
| 8 | [#25378 修复 Windows 下 ripgrep 的 EFTYPE 错误](https://github.com/google-gemini/gemini-cli/pull/25378) | 🟡 Open · P1 | 修复 #22784：Windows 上 `grep_search` 因下载的二进制与宿主架构不匹配（如 ARM 跑 x64）报 `spawn EFTYPE`。 |
| 9 | [#27588 支持 WSL2 剪贴板图片粘贴](https://github.com/google-gemini/gemini-cli/pull/27588) | 🟡 Open · P2 · size/l | 修复 #22274：在 WSL 环境下通过 PowerShell interop 读取 Windows 剪贴板并保存为 PNG，与 Windows 原生路径共享辅助函数。 |
| 10 | [#28597 先加载环境变量再解析配置占位符](https://github.com/google-gemini/gemini-cli/pull/28597) | ✅ Closed · P2 | 修复 .env 与 settings 加载顺序的竞态：此前 settings 中的 `${VAR}` 展开早于本地 `.env` 加载，导致环境变量引用失效。 |

**其他值得留意的合入**：[#28813](https://github.com/google-gemini/gemini-cli/pull/28813)（为 packages/cli 增加 composite 标志，修复根构建失败）、[#28819](https://github.com/google-gemini/gemini-cli/pull/28819)（个人账号使用企业模型时显示误导性错误）、[#28603](https://github.com/google-gemini/gemini-cli/pull/28603)（沙箱 Dockerfile 从 EOL 的 Node 20 升级至 Node 22，安全修复）。

---

## 5. 功能需求趋势

综合全部 50 条活跃 Issue，社区最关注的功能方向为：

1. **Agent 自治与可靠性**（占比最高）
   - 子代理状态汇报真实性（终止原因、成功/失败判定）
   - 子代理间互相调用（Agent-to-Agent delegation）
   - 代理主动使用 skills/sub-agents 的能力与意愿
   - 基于 AST 的代码感知工具（`#22745`）——精确读取方法边界、减少 token 浪费

2. **终端体验与稳定性**
   - PTY/文件描述符泄漏修复（💬 2 个高相关 PR 同日合入）
   - Shell 命令挂起、"Waiting input" 假死状态
   - TUI 性能与 resize 闪烁问题（`#21924`，RenderStatic 迁移方向）

3. **跨平台兼容性**
   - Windows：ripgrep 二进制架构匹配、外部编辑器退出后的终端刷新
   - WSL2：剪贴板图片粘贴、环境变量加载时序
   - Linux Wayland：浏览器子代理运行失败

4. **记忆系统（Auto Memory）工程化**
   - 低信号会话的检索/重试策略优化
   - 敏感内容脱敏前置于模型上下文之前（`#26525`）
   - 无效内存 patch 的隔离与可视化（`#26523`）

5. **安全与权限治理**
   - 阻止破坏性命令（git reset / --force 等）
   - 子代理绕过权限配置的漏洞修复
   - EOL 运行时（Node 20）升级

6. **评估体系升级**
   - 组件级行为评估（`#24353`）：从 76 个行为测试扩展到更细粒度的工具/组件评估

---

## 6. 开发者关注点

从 Issue 与 PR 讨论中可以提炼出开发者的高频痛点：

- **子代理状态不可信**：MAX_TURNS 被误报为成功、crash 被报为 GOAL——开发者认为"错误的成功比明确的失败更危险"，因为它会污染自动化流水线（`#22323`）。社区对该问题反馈积极（12 条评论）。
- **交互式命令无响应**：Shell 执行完成但 TUI 卡死（`#25166`）、generalist 代理无限挂起（`#21409`）——这两类"假死"问题直接影响日常使用信心。
- **权限配置被静默绕过**：v0.33.0 升级后子代理无视 agents 禁用配置（`#22093`），让开发者对"谁在控制这台机器"产生疑虑。
- **Auto Memory 资源浪费**：低信号会话被无限重试、敏感内容在脱敏前已进入模型上下文——后台任务的可观测性和安全性双双被质疑。
- **长期会话资源耗尽**：PTY 泄漏导致 511 个描述符被吃满，需要重启 CLI——两个独立 PR（#20916/#27154）同日合入修复，表明这是社区公认的顽疾。
- **配置系统时序脆弱**：settings 中环境变量展开早于 .env 加载、Browser Agent 忽略 settings.json 覆盖（#22267）——配置不生效类问题频繁出现。

**综合来看**：今日社区基调是"**大规模稳定性修复进行时**"——SSR Agent 批量修复长期积压的 P1 问题，同时开发者社区用高赞 Issue 反复强调子代理可靠性与权限边界的重要性。建议使用者密切关注 nightly 版本中上述修复的落地情况，遇到 `#22323`、`#25166` 场景的开发者可优先验证对应的修复 PR。

---
*本日报由 AI 技术分析师基于 GitHub 公开数据自动生成，仅供参考。数据统计窗口：2026-08-14 ~ 2026-08-15。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-08-15** | 数据来源：[github/copilot-cli](https://github.com/github/copilot-cli)

---

## 今日速览

Copilot CLI 今日连续发布 v1.0.81-0 与 v1.0.80 两个版本，核心动作为模型配置更新。社区热点集中在 **MCP OAuth 回归问题**（Atlassian/GitLab 服务器在 1.0.79/1.0.80 上均出现 RFC 8414 兼容性错误）以及**企业/组织模型可用性异常**（Claude 系列模型被错误禁用或缺失）。此外，BYOK 提示缓存、autopilot 模式 OOM 崩溃等稳定性问题也受到广泛关注。

---

## 版本发布

### v1.0.81-0（最新）
- **更新内容**：模型配置更新（Improved）

### v1.0.80（2026-08-14）
- **更新内容**：模型配置更新

> 两个版本均为模型配置层面的迭代，未涉及功能变更。如果 1.0.79 引入的 MCP OAuth 回归问题尚未修复，建议开发者继续关注 Issue #4490 与 #4439。

---

## 社区热点 Issues（Top 10）

### 1. Atlassian MCP OAuth 在 1.0.80 中仍被破坏（RFC 8414 回归）
[#4490](https://github.com/github/copilot-cli/issues/4490) | 作者：ChandrasekarCK | 创建：2026-08-14 | 👍 0 | 评论 0

**要点**：1.0.80 版本连接 `https://mcp.atlassian.com/v1/mcp` 时仍报 `MCPOAuthError: Incompatible authorization server`（RFC 8414 §3.3 issuer 不匹配），开发者确认 1.0.78 可用，属回归问题。

**影响**：Atlassian MCP 用户在升级后无法完成 OAuth 认证，且截至最新版本仍未修复。

---

### 2. 组织启用的模型缺失（Claude Sonnet 5/Opus 5、Kimi K3）
[#4390](https://github.com/github/copilot-cli/issues/4390) | 作者：Rogn | 创建：2026-08-06 | 👍 4 | 评论 6

**要点**：组织在 Copilot Business 中显式启用的 Anthropic 模型（`claude-sonnet-5` 等）在 CLI 模型中不可用，选择时报 "This model is disabled by your organization"。同一现象在 1.0.80 中仍存在。

**影响**：企业用户的模型选择受限，且报错信息与组织实际策略不符，影响排查。

---

### 3. 企业账号下所有 Claude 模型被禁用
[#4422](https://github.com/github/copilot-cli/issues/4422) | 作者：joelpou | 创建：2026-08-09 | 👍 3 | 评论 3

**要点**：个人 Enterprise 账号突然无法使用任何 Claude 模型（sonnet 5、4.8 等），但 GitHub Copilot 设置中显示已启用。回滚 CLI 版本无法解决，疑似服务端策略或模型目录问题。

**影响**：影响依赖 Claude 模型的企业开发者日常开发，且跨版本持续存在。

---

### 4. 推理力度 'medium' 不被 claude-haiku-4.5 支持
[#4345](https://github.com/github/copilot-cli/issues/4345) | 作者：indeherb | 创建：2026-08-03 | 👍 4 | 评论 6

**要点**：当 `copilot_cli_opus_medium_effort_default` 与 `copilot_cli_gpt_5_4_mini_for_explore` 两个 feature flag 同时生效时，子代理执行反复报 `Reasoning effort 'medium' is not supported for model 'claude-haiku-4.5'`。

**影响**：配置组合触发模型参数不兼容，导致子代理无法正常执行。

---

### 5. GitLab MCP OAuth 元数据被拒绝（1.0.79）
[#4439](https://github.com/github/copilot-cli/issues/4439) | 作者：patrickzel | 创建：2026-08-11 | 👍 2 | 评论 3

**要点**：1.0.79 拒绝 GitLab Self-Managed MCP 服务器的 OAuth 2.0 动态客户端注册，报 RFC 8414 issuer mismatch，与 Atlassian 问题（#4480/#4490）同源。

**影响**：自托管 GitLab MCP 用户无法通过 OAuth 认证，问题波及多个 MCP 服务器提供商。

---

### 6. Atlassian MCP OAuth 在 1.0.79 回归（已关闭）
[#4480](https://github.com/github/copilot-cli/issues/4480) | 作者：jfrost-fabric | 创建：2026-08-13 | 👍 6 | 评论 4

**要点**：1.0.71 可正常连接 Atlassian MCP，升级 1.0.79 后 OAuth discovery 失败。虽然 Issue 已关闭，但 #4490 表明相同问题在 1.0.80 仍存在。

**影响**：该 issue 获得 6 个 👍，是当前社区反馈最强烈的回归问题之一。

---

### 7. v1.0.79 autopilot 模式 OOM 崩溃
[#4499](https://github.com/github/copilot-cli/issues/4499) | 作者：AndreiTkachyov | 创建：2026-08-14 | 👍 0 | 评论 0

**要点**：`copilot.exe`（v1.0.79）在长时 autopilot 会话中崩溃，报 `FATAL ERROR: Committing semi space failed`，但 V8 堆仅使用约 607 MB / 4.3 GB，属宿主 RAM 层面的提交失败而非堆限制。

**影响**：长时间运行 autopilot 的用户可能遭遇突发进程终止，需关注内存管理与平台兼容性。

---

### 8. BYOK autopilot 提示缓存被破坏
[#4500](https://github.com/github/copilot-cli/issues/4500) | 作者：dzamoshchin | 创建：2026-08-14 | 👍 0 | 评论 0

**要点**：autopilot 模式的完成引导轮会重写整个 `input` 数组，而非按字节原样复用先前消息（BYOK wire API），导致提示缓存失效，token 消耗显著增加。

**影响**：使用 BYOK 的用户在长会话中面临不必要的成本与延迟。

---

### 9. Codespaces 预装过旧版本且更新受限
[#4501](https://github.com/github/copilot-cli/issues/4501) | 作者：bazaarjapan | 创建：2026-08-15 | 👍 0 | 评论 0

**要点**：新开 Codespace 预装 Copilot CLI 1.0.3（明显过旧），`copilot update` 虽报告已下载 1.0.80，但实际二进制文件未被替换，需手动 `sudo` 安装。

**影响**：Codespaces 用户无法获得最新修复，影响 CI 与云端开发体验。

---

### 10. /spawn 命令模板存在跨会话写入风险
[#4491](https://github.com/github/copilot-cli/issues/4491) | 作者：apcsb | 创建：2026-08-14 | 👍 0 | 评论 0

**要点**：`/spawn` 的展开模板自相矛盾：开头声明"单例派生"，后续却指示 Agent 复用已有会话，可能导致上下文注入无关的活跃会话，且没有跨会话写入的审批门禁。

**影响**：存在数据泄露或误写入其他会话的安全隐患，值得尽快修复。

---

## 重要 PR 进展

### 1. [#4449](https://github.com/github/copilot-cli/pull/4449)（已合并/关闭）：迁移 PR 自动化，脱离 pull_request_target
作者：mrecachinas | 更新：2026-08-14

**内容**：将 invalid-label 自动化从 `pull_request_target` 迁移走，保留 issue/PR 关闭行为：
- 使用 issue 级写入 token 直接关闭无效 issue
- 用无权限的 `pull_request` 信号来提示可合并的 PR
- 特权步骤仅在特定条件下运行

**意义**：提升 CI 安全性，降低 fork PR 触发权限提升的风险。

### 2. [#4497](https://github.com/github/copilot-cli/pull/4497)（开放）：处理 fork PR 关联缺失场景
作者：mrecachinas | 创建：2026-08-14 | 更新：2026-08-14

**内容**：当 GitHub 未填充 fork PR 的工作流运行时，使用受信任的工作流元数据搜索并匹配唯一的开放 PR，修复 invalid-label 写入器在 fork 场景下的关联失败。

**意义**：完善 fork PR 工作流的兼容性，避免自动化失效。

### 3. [#4496](https://github.com/github/copilot-cli/pull/4496)（已关闭）：PR 工作流迁移验证 Canary
作者：mrecachinas | 创建：2026-08-14 | 更新：2026-08-14

**内容**：一个仅含文档的临时 PR，用于验证迁移后的 fork 来源 PR 自动化行为，验证完成后已关闭。

**意义**：确保 #4449 的迁移在生产环境正常工作。

---

## 功能需求趋势

基于近 24 小时更新的 30 余条 Issue，社区核心需求集中在以下方向：

| 方向 | 相关 Issue | 热度 |
|---|---|---|
| **MCP 生态成熟度** | OAuth 兼容性（#4480/#4439/#4490）、分页支持（#4006）、冲突检测（#4478） | 🔥🔥🔥 |
| **模型支持与可用性** | GPT-5.6 reasoning.mode（#4495）、Claude 模型目录/禁用（#4390/#4422/#4494）、推理力度兼容（#4345） | 🔥🔥🔥 |
| **企业/组织策略管理** | 模型策略与 CLI 策略割裂（#4481）、模型目录同步（#4494） | 🔥🔥 |
| **插件系统与依赖管理** | 插件依赖规范（#4487）、插件更新文件锁（#4488） | 🔥🔥 |
| **稳定性和资源管理** | autopilot OOM（#4499）、子任务冻结（#4306）、会话丢失（#4477） | 🔥🔥 |
| **可观测性** | protobuf OTLP 导出（#2934） | 🔥 |
| **权限配置语义** | allowed_directories 失效（#4482）、编辑权限超时（#4486） | 🔥 |

最显著的趋势是 **MCP 协议兼容性**成为当前最大的痛点来源（RFC 8414 OAuth 回归连续三个版本未彻底解决），以及 **模型策略/目录同步**在企业场景下频繁出错。

---

## 开发者关注点

1. **MCP OAuth 回归持续未修复**：Atlassian 与 GitLab MCP 服务器同时受 RFC 8414 §3.3 issuer 校验问题影响，从 1.0.79 延续到 1.0.80（#4490），社区已多次报告（#4480 有 6 个👍），期望尽快修复。

2. **模型可用性混乱**：
   - 企业账号下 Claude 模型被误禁用（#4422）
   - 组织启用的模型未同步到 CLI 目录（#4390）
   - 新启用模型需清除本地缓存才能生效（#4494）
   - 模型与 feature flag 组合触发不兼容（#4345）

3. **稳定性与资源问题**：
   - autopilot 模式在 Windows 上发生宿主内存提交失败（#4499）
   - 子任务/Agent 执行中途冻结（#4306）
   - 停止操作导致整个会话和提示词丢失（#4477）

4. **会话管理体验**：恢复旧会话时 Agent 未被自动选中（#4489）、`/restart` 在 `-w` 会话中失败（#4493）、编辑权限请求无响应会超时（#4486）。

5. **企业策略混淆**：GitHub Copilot App 已由 `copilot-cli` 策略管控，但 UI 文案与实际执行不一致（#4481），为管理员带来配置困惑。

---

*以上日报基于 2026-08-15 GitHub 公开数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

## Kimi Code CLI 社区动态日报（2026-08-15）

### 今日速览

今日无新版本发布，也没有新 PR 合入，但社区围绕“记忆系统”（Memory System）的讨论热度持续升温，多个相关 Issue 被更新。其中 #1478 明确反映了大型项目开发中的记忆层痛点，属于高频需求；此外，跨设备会话接续的呼声也值得关注。总体上，社区对“跨会话持久上下文”和“可扩展工作流”的需求表现强烈。

---

### 版本发布

无（过去 24 小时无新 Release）。

---

### 社区热点 Issues

以下为过去 24 小时内更新且最值得关注的 4 个 Issue（因数据源仅含 4 个，全部列出）：

#### 1. [#1283 Feature Request: Memory System - Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)
- **状态**：OPEN | 更新于 2026-08-14 | 评论数：39
- **作者**：CatKang
- **重要性**：这是社区对“记忆系统”最集中的诉求，支持自动记忆（AI 管理）和手动记忆（用户自定义指令）。39 条评论表明社区讨论非常活跃，是当前最受关注的功能方向之一。
- **社区反应**：开发者普遍期待能跨会话保留项目结构和偏好，减少重复配置。

#### 2. [#2269 Remote Control / Multi-Device Session Handoff](https://github.com/MoonshotAI/kimi-cli/issues/2269)
- **状态**：OPEN | 更新于 2026-08-14 | 评论数：6 | 👍：1
- **作者**：lucianalima777
- **重要性**：允许在一台设备启动会话，并在另一台设备继续/远程控制，对于多环境开发者是重大效率提升。虽然关注度暂时不高，但属于典型的工作流增强需求。
- **社区反应**：已有用户支持，期待官方纳入路线图。

#### 3. [#1478 能否优化记忆层？/ Can the memory layer be optimized?](https://github.com/MoonshotAI/kimi-cli/issues/1478)
- **状态**：OPEN | 更新于 2026-08-15 | 评论数：3
- **作者**：hahy36
- **重要性**：直接指出了文档中缺少对记忆层的说明（只有 agent.md），并给出了 OpenClaw 的记忆目录结构参考。这是中文社区对“大型项目记忆痛苦”的真实反馈，非常贴合实际开发场景。
- **社区反应**：用户希望官方补充文档并提供可配置的记忆机制，目前已获得共鸣。

#### 4. [#1136 feat(shell): enhance shell tool with version-aware PowerShell context](https://github.com/MoonshotAI/kimi-cli/issues/1136)
- **状态**：CLOSED | 更新于 2026-08-14 | 评论数：0
- **作者**：QIN2DIM
- **重要性**：针对 Windows 下 Shell 工具的 PowerShell 版本感知增强，解决了 K2.5 模型在 pass-1 命令生成时的模糊性问题。尽管已关闭，但作为优化项，对 Windows 用户体验有明显改善，仍值得关注。
- **社区反应**：无评论，但问题描述详细，属于高质量技术反馈。

---

### 重要 PR 进展

过去 24 小时无 PR 更新。

---

### 功能需求趋势

从现有 Issues 中可以提炼出以下社区核心关注方向：

1. **跨会话记忆系统（Memory System）**  
   - 需求点：持久保存项目上下文、用户偏好、自动/手动记忆，以及相应的文档说明。  
   - 代表 Issue：#1283、#1478。
2. **多设备工作流与远程控制**  
   - 需求点：跨设备会话切换、远程控制 CLI，适配多环境开发者。  
   - 代表 Issue：#2269。
3. **Windows 平台 Shell 体验优化**  
   - 需求点：增强 PowerShell 上下文感知，减少命令生成歧义，提升 Agent 在 Windows 上的稳定性。  
   - 代表 Issue：#1136。

---

### 开发者关注点

- **记忆层透明性与可配置性**：开发者希望官方明确记忆层的具体实现方式，并提供类似于 `MEMORY.md`、`memory/` 目录的可视化管理，同时减少大型项目中的上下文丢失痛苦。
- **多设备协作缺失**：部分开发者从“本地工具”向“云/多端协同”迁移，希望会话可以无缝交接。
- **Windows 兼容性**：PowerShell 相关细节（如命令格式、版本差异）仍是影响 Windows 用户使用体验的关键问题。
- **文档完善**：多个需求背后都隐含了对现有文档（尤其是关于记忆、远程控制）覆盖不足的反馈，建议官方补充相关章节。

---
*数据来源：github.com/MoonshotAI/kimi-cli，统计时间为 2026-08-15。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-08-15）

## 今日速览

今日社区最严重的事件是 **48 位 ID 时间戳回绕** 导致所有旧会话在 8 月 14 日 UTC 12:39 后静默失效，相关 Issue #42608 已被关闭，并已有修复 PR #42684 提交。此外，多个用户持续反映 **免费额度超限** 与 **GitHub Copilot 模型不可见** 问题，形成讨论热点。核心贡献者 kitlangton、ar1vit0r 等提交了多项针对 TUI、会话核心和协议层的 PR，稳定性修复是今日主旋律。

## 社区热点 Issues

### 1. 严重：48 位 ID 时间戳回绕导致旧会话全部静默失效
**Issue #42608**（CLOSED，5 评论，👍 3）  
所有创建于 2026-08-14 12:39:55 UTC 之前的会话突然停止处理 prompt，原因是 ID 生成器中 6 字节时间戳字段回绕。该问题被指认为 #42605 的根因，社区已有 PR #42684 进行数值比较修复。  
🔗 https://github.com/anomalyco/opencode/issues/42608

### 2. 桌面版 v1.18.1 新布局隐藏 Plan/Build 模式切换
**Issue #36997**（OPEN，12 评论，👍 6）  
自动更新后 `newLayoutDesigns: true` 导致 Agent 切换指示器（Plan/Build）在 UI 中消失，用户无法查看当前模式或用 Tab 键切换。UI 可用性回归引发较多共鸣。  
🔗 https://github.com/anomalyco/opencode/issues/36997

### 3. 免费额度误报 “Free usage exceeded”
**Issue #42013**（OPEN，10 评论，👍 4）  
用户使用 DeepSeek V4 Flash Free 模型时，即使超过 24 小时仍被提示额度超限，且偶尔可正常使用。社区对 Zen/Go 的免费配额判定逻辑表示困惑，要求明确重置规则。  
🔗 https://github.com/anomalyco/opencode/issues/42013

### 4. GitHub Copilot Provider 显示为零模型
**Issue #42083**（OPEN，8 评论，👍 2）  
在 opencode 1.18.15 中，`github-copilot` 认证成功但模型选择器不显示任何模型，`opencode models` 也找不到 Provider。Copilot 用户集成受阻。  
🔗 https://github.com/anomalyco/opencode/issues/42083

### 5. 思考模式陷入无限重复输出循环
**Issue #25129**（OPEN，7 评论，👍 4）  
Qwen 3.6 Pro 在 thinking 模式下反复输出 `!!!!!!!!!!` 或 `...`，无法产生有效推理。用户被迫切换到其他模型，反映思考模式稳定性不足。  
🔗 https://github.com/anomalyco/opencode/issues/25129

### 6. 会话循环无法退出：消息 ID 排序错误
**Issue #38791**（OPEN，6 评论）  
`SessionPrompt.runLoop` 以字符串比较消息 ID，导致第三方导入的会话 ID 不按时间排序时，循环无法正常结束，直到 Provider 返回 400。影响会话恢复和导入功能。  
🔗 https://github.com/anomalyco/opencode/issues/38791

### 7. Windows 上 Web 侧边栏始终显示 “no sessions”
**Issue #42668**（OPEN，2 评论，今日新开）  
Windows 原生环境下，TUI 创建的会话无法在 Web 侧边栏显示，Web 中新建的会话刷新（F5）后消失，而 API 实际能返回会话数据。跨端会话一致性 bug。  
🔗 https://github.com/anomalyco/opencode/issues/42668

### 8. 会话保持打开但 Agent 不响应后续 prompt
**Issue #42605**（OPEN，4 评论）  
桌面版在 Agent 完成任务并询问用户后，发送新消息无任何反应。会话看似存活但不再处理内容，与 #42608 时间戳回绕现象高度相关。  
🔗 https://github.com/anomalyco/opencode/issues/42605

### 9. 上下文缓存失效导致本地 LLM 性能骤降
**Issue #37489**（OPEN，5 评论，👍 1）  
在 vLLM/Ollama 等本地推理引擎上，切换模式或压缩历史后上下文缓存频繁失效，导致响应速度显著下降。用户希望优化缓存利用策略。  
🔗 https://github.com/anomalyco/opencode/issues/37489

### 10. TUI 在多子代理会话中渲染线程卡死
**Issue #42657**（OPEN，2 评论）  
同时运行 2-4 个子代理时，TUI 输入延迟 1-3 秒，spinner 冻结，CPU 占用 97%。在 Warp、Windows Terminal、WezTerm 中均可复现。  
🔗 https://github.com/anomalyco/opencode/issues/42657

## 重要 PR 进展

### 1. 修复：ID 时间戳比较改为数值型，处理 48 位溢出
**PR #42684**（OPEN，作者 ar1vit0r）  
将 `MessageV2.latest()` 中的 ID 比较从字典序改为数值比较，修复回绕后字符串比较错误导致的循环提前退出问题。直接对应 #42608。  
🔗 https://github.com/anomalyco/opencode/pull/42684

### 2. 修复：TUI 获得焦点时重新查询终端调色板
**PR #42685**（OPEN，作者 ar1vit0r）  
监听 focus 事件并重新查询 `system` 主题颜色，解决 herdr 等终端复用器中宿主配色变化后 TUI 主题不刷新的问题。  
🔗 https://github.com/anomalyco/opencode/pull/42685

### 3. 修复：中断后保持排队任务暂停
**PR #42682**（OPEN，作者 kitlangton）  
`session.interrupt?continue=true` 现在仅恢复被中断的意图，显式排队的下一轮任务保持暂停，直到完整唤醒或恢复，避免副作用误启动。  
🔗 https://github.com/anomalyco/opencode/pull/42682

### 4. 重构：共享 Session 模型请求边界
**PR #42680**（OPEN，作者 kitlangton）  
统一持久会话步骤与临时 `session.generate` 的请求构造，使临时生成也获得 context hook、媒体处理、图像边界、Session 头等一致行为。  
🔗 https://github.com/anomalyco/opencode/pull/42680

### 5. 修复：TUI 中检索所有 Agent 的颜色配置
**PR #42683**（OPEN，作者 ar1vit0r）  
修复子代理名称不在可见列表时其配置颜色被丢弃的问题，现在会在所有 Agent（含子代理）中查找颜色。  
🔗 https://github.com/anomalyco/opencode/pull/42683

### 6. 修复：Wayland 下窗口显示失败回退
**PR #42681**（OPEN，作者 xdagiz）  
增加 Linux 专用 `did-finish-load` 事件回退，确保 Wayland 下窗口能显示，`revealed` 标志保证 `show()` 只调用一次。关闭 #42679。  
🔗 https://github.com/anomalyco/opencode/pull/42681

### 7. 修复：统一 Patch 工具路径解析
**PR #42667**（OPEN，作者 kitlangton）  
Patch 工具改用与 write/edit 相同的 `LocationMutation` 服务，解决嵌套 Location 内部路径与项目相对资源权限不一致的问题。  
🔗 https://github.com/anomalyco/opencode/pull/42667

### 8. 修复：MCP 配置缺少 type 字段时显式报错
**PR #42662**（OPEN，作者 shreeyachand）  
针对从 Claude Code 迁移的 MCP 配置经常缺少 `type`/`enabled` 字段的情况，OpenCode 现在会给出明确错误而非静默失败。关闭 #41229。  
🔗 https://github.com/anomalyco/opencode/pull/42662

### 9. 新特性：持久化 Web 搜索 Provider 选择
**PR #42663**（CLOSED，作者 thdxr）  
将 Web 搜索提供方同意状态保存到文件配置而非 KV 状态，支持固定优先级并提供更一致的跨重启行为。  
🔗 https://github.com/anomalyco/opencode/pull/42663

### 10. 功能：本地 LAN Provider 发现 + 模型自动发现
**PR #27554**（OPEN，作者 androidand）  
在 `/connect` 中添加 Local (LAN) 发现，结合 mDNS 等方式自动识别局域网内的 OpenAI 兼容服务器，并自动拉取 `/v1/models` 列表，减少手动配置。关闭 #6231 和 #27553。  
🔗 https://github.com/anomalyco/opencode/pull/27554

## 功能需求趋势

- **本地/自托管模型集成**：社区强烈要求自动发现 OpenAI 兼容 Provider（如 Ollama、LM Studio、llama-swap），并支持局域网设备发现（#27553、#27554）。
- **新 Provider 与认证支持**：Ollama Cloud 登录（#4581）、nara router 接入（#42664）、GitHub Copilot 模型可见性修复（#42083）都反映了用户对更多模型来源的渴望。
- **会话稳定性与恢复**：时间戳回绕、消息 ID 排序、导入会话兼容等问题凸显了会话可靠性的重要性，相关修复 PR 得到快速响应。
- **运行时权限控制**：用户希望像 Claude Code 一样使用 `/approve on|off` 动态切换审批模式，而非启动时固定配置（#41909）。
- **UI/UX 打磨**：桌面端布局可配置性、TUI 渲染性能、主题系统自适应、Web 与 TUI 会话同步都是高频关注点。
- **配置兼容性**：MCP 配置缺少 `type` 字段等跨工具迁移问题，需要更友好的错误提示和默认值处理。

## 开发者关注点

- **免费额度判定不透明**：多个用户报告“Free usage exceeded”误报、超过 24 小时未重置、付费后余额不更新（#42013、#42385、#42215、#42606），影响付费转化和信任。
- **历史会话在多端间不同步**：Windows 上 Web 侧边栏看不到 TUI 会话、刷新丢失列表，跨端数据一致性需要加强。
- **Agent 停止响应的根因排查**：8 月 14 日时间戳回绕事件让大量用户意识到 ID 生成器设计脆弱，贡献者已提交数值比较修复，但社区仍期望增加回绕保护测试。
- **TUI 在高负载场景下卡顿**：多子代理并行时渲染线程成瓶颈，性能优化优先级较高。
- **Shell 工具稳定问题**：Bash 子进程在大量输出时被 SIGKILL（#42626），需要更稳健的进程生命周期管理。
- **Web 搜索工具可用性不一致**：Go 模型路由下 `websearch` 工具缺失，需要非文档化环境变量才可见，开发者呼吁统一行为（#40568）。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-15

## 今日速览

- **v0.84.2 正式发布**，新增全屏转录搜索与可配置默认工具两项能力。
- **Windows 支持成为社区最大焦点**：#7547 讨论帖已积累 27 条评论，WSL 登录挂起（#6187）等平台问题持续发酵。
- **提供商兼容性修复密集落地**：OpenAI session 头修复（#8149）、Copilot 429 限流、Kimi 缓存 token 跟踪等多个 PR 合并或推进。

---

## 版本发布

### v0.84.2

| 类型 | 内容 |
|------|------|
| 新功能 | **全屏转录搜索**：在全屏模式下搜索并导航匹配项，详见 [TUI Fullscreen Viewport 键位文档](https://github.com/earendil-works/pi/blob/v0.84.2/packages/coding-agent/docs/keybindings.md#tui-fullscreen-viewport) |
| 新功能 | **可配置默认工具**：允许自定义启动时加载的默认工具集 |

---

## 社区热点 Issues

### 1. #7547 [OPEN] — Windows 使用体验大调查
- **评论 27** | 👍 1 | 更新于 08-14
- **为什么重要**：社区对 Windows 支持呼声最高。Issue 试图梳理 Windows 上运行 Pi 的各种方式，确定核心团队应优先修复哪些路径（文档、开箱即用体验 vs 交给扩展生态）。
- **链接**：[earendil-works/pi Issue #7547](https://github.com/earendil-works/pi/issues/7547)

### 2. #6187 [CLOSED] — WSL 中 GitHub Copilot 设备授权后 Pi 登录挂起
- **评论 26** | 更新于 08-14
- **为什么重要**：安装成功后浏览器授权已完成，但 WSL 终端内的 Pi 客户端检测不到授权结果，一直等待。WSL 用户基数庞大，此问题直接影响核心登录链路。
- **链接**：[earendil-works/pi Issue #6187](https://github.com/earendil-works/pi/issues/6187)

### 3. #5223 [CLOSED] — Anthropic 修改 thinking blocks 导致 Opus 4.8 自适应思考 400 错误
- **评论 17** | 👍 6 | 更新于 08-14
- **为什么重要**：多轮对话中途报错 `messages.7.content.22: thinking or redacted_thinking blocks in the latest assistant message`。高赞表明大量用户受影响，涉及 Anthropic 提供商对思考块的序列化处理。
- **链接**：[earendil-works/pi Issue #5223](https://github.com/earendil-works/pi/issues/5223)

### 4. #6665 [OPEN][inprogress] — TUI 流式输出时单核跑满：Intl.Segmenter 未缓存 + 逐块 Markdown 重建
- **评论 12** | 👍 3 | 更新于 08-14
- **为什么重要**：长会话流式输出时 TUI 占用 100% 单核。`spindump` 定位到 render timer → `Markdown.render` → wrap → `Intl.Segmenter`，属核心渲染热点。已确认 `pi -ne` 可复现，非扩展问题。
- **链接**：[earendil-works/pi Issue #6665](https://github.com/earendil-works/pi/issues/6665)

### 5. #5023 [CLOSED] — 终端无故滚动到开头
- **评论 12** | 👍 2 | 更新于 08-14
- **为什么重要**：模型工作时终端随机跳到会话开头再快速滚回末尾，无任何用户交互。描述者称"相对频繁"，属于高感知度 UX 缺陷。
- **链接**：[earendil-works/pi Issue #5023](https://github.com/earendil-works/pi/issues/5023)

### 6. #7850 [CLOSED] — 组织账号模型过多时 Copilot 登录 429 限流
- **评论 9** | 👍 7 | 更新于 08-14
- **为什么重要**：GitHub 设备授权成功后，Copilot 登录因 `429 Too Many Requests` 失败。影响拥有 20+ 可用模型的企业组织用户。同类型问题 #8010 也出现，说明不是偶发。
- **链接**：[earendil-works/pi Issue #7850](https://github.com/earendil-works/pi/issues/7850)

### 7. #8092 [CLOSED] — pnpm 安装的扩展依赖解析失败（jiti + 隔离 node_modules）
- **评论 5** | 更新于 08-14
- **为什么重要**：pnpm 的隔离 node_modules 布局导致 jiti 解析扩展依赖时向上遍历失败。扩展开发者迁移到 npm 安装方式时踩坑，直接影响扩展生态健康。PR #8112 已提交修复。
- **链接**：[earendil-works/pi Issue #8092](https://github.com/earendil-works/pi/issues/8092)

### 8. #8036 [OPEN] — Edit 工具渲染大 diff 导致 TUI 崩溃
- **评论 2** | 更新于 08-14
- **为什么重要**：编辑成功后，结果包含约 14.5 MB 的 diff（来自超长物理行 HTML 文件），TUI 渲染时崩溃；会话恢复时再次触发。长文件 + 大 diff 场景下健壮性问题。
- **链接**：[earendil-works/pi Issue #8036](https://github.com/earendil-works/pi/issues/8036)

### 9. #8075 [OPEN][inprogress] — 追踪 Kimi 顶层 cached_tokens 用量
- **评论 2** | 更新于 08-14
- **为什么重要**：Kimi 的 OpenAI 兼容接口在顶层 `usage.cached_tokens` 报告缓存命中，Pi 未识别，导致缓存 token 被计为普通输入，成本显示失真。PR #8119 已跟进修复。
- **链接**：[earendil-works/pi Issue #8075](https://github.com/earendil-works/pi/issues/8075)

### 10. #7787 [OPEN] — Bash PI_* 指南触发无关任务的权限提示
- **评论 3** | 更新于 08-14
- **为什么重要**：`exposeSessionEnvironment: true` 时，bash 工具注入"检查 PI_* 环境变量"的指导，模型在无关任务中也会运行 `env`，引发不必要的权限确认。PR #8148 已修复。
- **链接**：[earendil-works/pi Issue #7787](https://github.com/earendil-works/pi/issues/7787)

---

## 重要 PR 进展

### 1. #8149 [CLOSED] — fix(ai): 去除无效的 OpenAI session 头
- **问题**：带 `sessionId` 的 OpenAI Responses 请求发送 `session_id` HTTP 头，被拒绝下划线头的 HTTP/1 代理拦截（Envoy 400）。
- **意义**：修复生产环境 `http1.unexpected_underscore` 错误，保障代理后的请求可达。
- **链接**：[earendil-works/pi PR #8149](https://github.com/earendil-works/pi/pull/8149)

### 2. #8148 [CLOSED] — fix(coding-agent): 将 Bash PI_* 指南限定到会话相关问题
- **修复**：#7787。不再无条件注入"检查 PI_* 环境变量"指导，避免模型在普通任务中跑 `env` 触发权限确认。
- **链接**：[earendil-works/pi PR #8148](https://github.com/earendil-works/pi/pull/8148)

### 3. #8146 [CLOSED] — fix(ai): 将 Baseten DeepSeek V4 Flash 输出上限设为 384k tokens
- **问题**：models.dev 上报 1,048,576 token 输出上限，但 Baseten 实际只服务 384k；请求超过即失败。
- **修复**：在 `srv` 层将该模型的 `maxTokens` 封顶为 384,000。
- **链接**：[earendil-works/pi PR #8146](https://github.com/earendil-works/pi/pull/8146)

### 4. #8143 [CLOSED] — perf(tui): 全屏转录窗口性能优化
- **改动**：全屏会话保留完整人类转录历史（含压缩前），同时模型上下文保持压缩状态。备用屏渲染器只绘制与视口相交的块。
- **意义**：精准解决 #6665 中 TUI 渲染热点的方向性优化。
- **链接**：[earendil-works/pi PR #8143](https://github.com/earendil-works/pi/pull/8143)

### 5. #8139 [CLOSED] — feat(ai): 添加 ChatGPT OAuth 图像生成
- **功能**：为 `@earendil-works/pi-ai` 新增原生 ChatGPT 图像生成传输层，复用现有 OpenAI Codex OAuth 与 Responses 基础设施；无需 OpenAI API key 即可生成/编辑图像。
- **链接**：[earendil-works/pi PR #8139](https://github.com/earendil-works/pi/pull/8139)

### 6. #8124 [OPEN] — feat(ai): xAI 模型路由切换到 Responses，默认 Grok 4.6
- **改动**：默认使用 Responses API 替代 Completions；默认模型从 Grok 4.5 升级到 Grok 4.6；发送 User-Agent 信息。
- **链接**：[earendil-works/pi PR #8124](https://github.com/earendil-works/pi/pull/8124)

### 7. #8110 [CLOSED] — fix(tui): 选区复制走宿主剪贴板，让 "Copied!" 名副其实
- **问题**：原实现只写裸 OSC 52 序列，在忽略该序列的终端（macOS Terminal.app、VTE/GNOME Terminal）中显示 "Copied!" 但剪贴板为空。
- **修复**：回退到宿主剪贴板（如 `wl-paste` 可验证的路径）。
- **链接**：[earendil-works/pi PR #8110](https://github.com/earendil-works/pi/pull/8110)

### 8. #8119 [OPEN] — fix: 跟踪 Kimi 缓存 token
- **对应 Issue**：#8075。将 Kimi 顶层 `usage.cached_tokens` 纳入 `rawUsage` 并作为缓存读取输入参与统计，修正成本与用量显示。
- **链接**：[earendil-works/pi PR #8119](https://github.com/earendil-works/pi/pull/8119)

### 9. #8112 [OPEN] — fix(coding-agent): jiti 导入前对扩展路径做 realpath
- **问题**：pnpm 通过符号链接将 `node_modules/<pkg>` 指向 `.pnpm/<pkg>@<ver>/node_modules/<pkg>`，jiti 解析器不 realpath 入口，向上遍历失败。
- **修复**：交给 jiti 前先 realpath 扩展路径，解决 #8092。
- **链接**：[earendil-works/pi PR #8112](https://github.com/earendil-works/pi/pull/8112)

### 10. #8113 [CLOSED] — feat(ai): 新增 SiliconFlow 提供商
- **功能**：内置 SiliconFlow 提供商，OpenAI 兼容端点 `https://api.siliconflow.com/v1`，API key 通过 `SILICONFLOW_API_KEY` 注入，遵循现有 moonshot/minimax 模式。
- **链接**：[earendil-works/pi PR #8113](https://github.com/earendil-works/pi/pull/8113)

---

## 功能需求趋势

| 方向 | 代表 Issue/PR | 说明 |
|------|--------------|------|
| **Windows / WSL 一等公民支持** | #7547、#6187、#8047 | Windows 用户基数庞大，登录链路、Unix 套接字绑定等平台适配问题集中暴露，社区呼吁官方明确支持矩阵 |
| **AI 提供商兼容性扩展** | #5223（Anthropic）、#8096（Z.AI）、#8105（OpenAI Codex）、#8135（Google）、#8113（SiliconFlow）、#8124（xAI） | 新模型/提供商快速接入与既有提供商的边缘行为修正双线并行 |
| **成本与 Token 可见性** | #8075（Kimi cached_tokens）、#8133（按模型压缩配置）、#8120（append compaction） | 用户希望精确掌握缓存命中带来的成本节省，并按模型差异化控制压缩策略 |
| **扩展生态成熟化** | #8092（pnpm 依赖）、#5581（事件绕过）、#8100（会话级模型状态）、#8123（registerFlag 类型） | 扩展开发者正推动 API 的类型安全、事件语义一致性与安装方式兼容性 |
| **TUI 体验与性能** | #6665（单核占满）、#8143（全屏转录窗口）、#8144（技能自动补全）、#8132（补全位置可配置） | 渲染性能优化与交互细节（自动补全、剪贴板）双管齐下 |

---

## 开发者关注点

- **认证流程脆弱**：WSL 环境登录挂起（#6187）、企业组织 Copilot 429 限流（#7850、#8010）说明设备授权后的客户端探测与错误分类仍需加固。
- **代理工具行为干扰**：环境变量指南引发多余权限提示（#7787）、Edit 工具渲染大 diff 崩溃（#8036），代理稳定性和"少打扰"是高频诉求。
- **TUI 渲染性能**：`Intl.Segmenter` 未缓存导致的单核占满（#6665）表明长会话 + 流式输出仍有优化空间，已有对应 PR 改善。
- **扩展安装体验**：pnpm 隔离布局与 jiti 的兼容问题（#8092，#8112）提醒：随着扩展数量增长，安装方式多样性（git/npm）需要官方显式支持。
- **提供商特性贴合**：Anthropic thinking blocks（#5223）、OpenAI `strict: null` 导致必填参数（#8105）、Google thinkingLevelMap 被丢弃（#8135）——每个提供商都有各自"方言"，适配工作量大且持续。

---

> 数据来源：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono) · 生成时间：2026-08-15

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-08-15

## 今日速览

昨日共发布 3 个常规版本及多个基准验证版本，其中 v0.21.12 正式版引入 Web Shell 工作区文件拖拽上传，并新增 autofix diff 增长抑制机制。社区侧，主线 CI 多次失败引发对 E2E 稳定的关注，而 autofix/review 管线的密集迭代（新增内容锚定增量评审、`--resume` 断点续跑等）是本日 PR 层面最活跃的板块。

## 版本发布

### v0.21.12
- **Web Shell 增强**：支持通过拖拽或 `@` 文件面板上传工作区文件到 Web Shell 编辑器，并带有进度跟踪。([#8874](https://github.com/QwenLM/qwen-code/pull/8874)) 主要贡献者：@ytahdn
- **Autofix 改进**：在 autofix 审查中引入 diff 增长制动机制，限制过大的变更扩散。

### v0.21.12-preview.4 / v0.21.12-preview.3
- 修复 Web Shell 中独立会话目标丢失的问题。([#9038](https://github.com/QwenLM/qwen-code/pull/9038))
- 支持工作区文件上传（功能同 v0.21.12）。

### v0.21.11-nightly.20260815.c396fe3d12
- 引入默认拒绝（deny-by-default）的 footprint 门控与positional window 审查。([#9156](https://github.com/QwenLM/qwen-code/pull/9156))
- 修复 Web Shell 相关问题。

### 基准验证版本（非功能更新）
- `dsw-eas-tb-e2e-20260814-r6` 等系列版本完成 Release → Actions → SWE-bench Verified 500 → Terminal-Bench 2.0 89 的端到端验证，参考基准为 v0.21.2。

## 社区热点 Issues

| Issue | 标题 | 标签 | 评论 | 说明 |
|---|---|---|---|---|
| [#8678](https://github.com/QwenLM/qwen-code/issues/8678) | fix(serve): 大会话恢复超时时保留当前会话 | P1, 核心, 会话管理 | 9 | 已关闭（部分解决）。请求级恢复超时、迟到结果安全性等机制已落地，但因范围过大被拆分追踪。 |
| [#8051](https://github.com/QwenLM/qwen-code/issues/8051) | 多工作区守护进程资源使用上界 | P2, 性能, 守护进程 | 9 | 社区高度关注：仅靠数量限制无法约束请求体、WebSocket 组装等持有的字节数，需字节级资源上限。 |
| [#4063](https://github.com/QwenLM/qwen-code/issues/4063) | core + cli 架构审查 — 12 项结构性问题 | 增强, CLI, 核心 | 8 | P0 级问题：`ContentGenerator` 接口被 `@google/genai` 类型绑架，136 个文件直接 import 该包，架构耦合严重。 |
| [#9143](https://github.com/QwenLM/qwen-code/issues/9143) | 主线 CI 失败：E2E Tests @ c5bf222 | P3, CI, ready-for-agent | 7 | CI 在测试报告前即失败，暴露 E2E 基础设施稳定性问题。 |
| [#9002](https://github.com/QwenLM/qwen-code/issues/9002) | SDK Python 拒绝 `permission_mode="auto"` | P3, SDK | 6 | 客户端校验比 CLI 更严格，导致合法参数被拒 — SDK/CLI 参数对齐缺口。 |
| [#6806](https://github.com/QwenLM/qwen-code/issues/6806) | `/compress` 后状态栏上下文百分比不刷新 | P2, CLI, UI | 5 | 交互体验问题：压缩后 footer 显示的 token 占比仍为旧值，直到下一次模型请求。 |
| [#8582](https://github.com/QwenLM/qwen-code/issues/8582) | 只读 shell 分类器可被命令替换绕过 | P1, 安全 | 5 | 已关闭。通过行续接符或 `${var@P}` 隐藏任意代码执行，AST 与运行时校验均被绕过。 |
| [#2128](https://github.com/QwenLM/qwen-code/issues/2128) | 长会话内存无界增长 | P1, 核心, 会话管理 | 4 | 根因是 UI History 数组无上限累积，长时间（数十小时）会话内存永不回收。 |
| [#9026](https://github.com/QwenLM/qwen-code/issues/9026) | NO_TOOL_RESULT_PROGRESS 导致 headless 运行失败 | P2, 核心 | 4 | 模型在工具结果后静默结束时，headless 运行被 `InvalidStreamError` 中止 — 判定过严。 |
| [#9160](https://github.com/QwenLM/qwen-code/issues/9160) | E2E 失败：qwen-serve-live-journal-recovery | P1, CI, autofix/in-progress | 4 | 3 个测试断言失败，autofix 已标记进行中，社区在观察修复效率。 |

## 重要 PR 进展

**Autofix / Review 管线重构（@wenshao 主导）**

- [#9191](https://github.com/QwenLM/qwen-code/pull/9191) — 实现按文件内容锚定的审查结论跨 rebase 迁移，解决 force-push 后增量审查失效的问题。
- [#9190](https://github.com/QwenLM/qwen-code/pull/9190) — 为本地 review-fix 循环补齐内容锚定的增量审查支持，此前每轮都全量重审。
- [#9188](https://github.com/QwenLM/qwen-code/pull/9188) — 将增量审查从"散文式技能说明"固化为确定性计划，并放宽一跳 import 范围。
- [#9153](https://github.com/QwenLM/qwen-code/pull/9153) — 将 `--resume` 贯穿 `/review` 命令、`review run` 与 CI 重试链路。
- [#9183](https://github.com/QwenLM/qwen-code/pull/9183) — 逆向审查的轮次上限随 diff 规模自适应（小 diff 10 轮 / 大 diff 3 轮）。
- [#9118](https://github.com/QwenLM/qwen-code/pull/9118) — 引入轮次感知的收敛策略：审查轮次越多，发布门槛越高，促使 review→fix 循环收敛。
- [#9163](https://github.com/QwenLM/qwen-code/pull/9163) — 修复 7 个审查管线缺陷，所有 ledger 与证据读取统一到 `O_NOFOLLOW` + `fstat` 的受限普通文件访问。

**功能增强**

- [#9130](https://github.com/QwenLM/qwen-code/pull/9130) — 沙箱验证新增确定性 flakiness gate：对改动的单测文件重复跑 N 次（默认 5），减少 CI 噪音。
- [#9167](https://github.com/QwenLM/qwen-code/pull/9167) — DingTalk 通道支持出站文件投递（通过媒体 API 上传并发送原生文件消息）。
- [#9136](https://github.com/QwenLM/qwen-code/pull/9136) — 为 workflow `meta` 求值增加 VM 超时保护，防止恶意字面量卡死进程。
- [#9121](https://github.com/QwenLM/qwen-code/pull/9121) — 修复主 agent tracing 的边界情况（telemetry 模块）。

## 功能需求趋势

**1. Review/Autofix 体系持续加固（本日最大热点）**
围绕 `/review` 的增量审查、断点续跑、跨 rebase 迁移、收敛策略、轮次上限自适应形成了一条完整的技术主线，说明项目正在将代码审查自动化推向生产级稳定性。

**2. Web Shell 能力扩充**
从 Channel 策略重设计（#8845）到工作区文件上传、独立 Electron 桌面宿主提案（#9168），Web Shell 正快速成为与 TUI 并行的主流交互界面。

**3. 会话资源管理**
大会话恢复超时（#8678）、多工作区守护进程资源上界（#8051）、长会话内存增长（#2128）共同指向一个问题：会话级资源治理需要从"计数限制"升级为"字节级限制"。

**4. 架构解耦与类型系统治理**
`utils/` 层 107 处向上引用导致目录环（#9146）、ACP 对 serve 内部实现的依赖（#8084）、`@google/genai` 类型绑架核心接口（#4063）——社区对架构债的技术债偿还呼声较高。

**5. 安全与 CI 稳定性**
PAT 共享宿主风险（#9089）、只读分类器绕过（#8582）、主线 CI 频繁失败——安全和基础设施稳定是持续受关注的基础议题。

## 开发者关注点

- **CI 稳定性是当前最痛的问题**：多个主线 E2E 失败 issue 在同一天出现（#9143、#9159、#9160），且部分失败发生在测试报告前，影响开发效率。
- **配置参数不一致**：`permission_mode="auto"` 在 CLI 可用但 SDK 拒绝（#9002）、`tools.truncateToolOutputThreshold` 被 Shell 写死 30,000 字符覆盖（#8922）——同一功能在不同入口的行为不一致困扰用户。
- **状态反馈滞后**：`/compress` 后上下文百分比不刷新（#6806）、/statusline 对话框在矮终端中被裁剪（#9037），UI 细节问题虽小但感知强烈。
- **安全边界仍需收紧**：read-only 分类器绕过（#8582）、上游 fail-fast 占位符响应（#8938）、PAT 共享宿主（#9089）等安全问题持续被社区关注。
- **迁移到 autofix 的等待**：多个 P1 CI 问题已标记 `ready-for-agent`，社区在期待自动修复管线消化这些问题，但 #9137 显示 release 流程本身也有失败案例（publish 失败），自动化管线自身的可靠性仍需打磨。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-08-15

## 今日速览

**CodeWhale（原 DeepSeek TUI）正式发布 v0.9.8**，确认品牌重组并弃用 legacy `deepseek-tui` npm 包。与此同时，社区贡献者 EvanProgramming 提交了两个关键 bug 修复——session 索引 JSONL 未同步写入导致静默数据丢失、Webhook HTTP 客户端构建失败时直接 panic——均已在合并后关闭。此外，`main` 分支在 macOS/Windows 上因九项 reasoning-effort 测试仍断言旧词汇而变红，相关修复 PR 已合入。

---

## 版本发布

### v0.9.8
**Codewhale** 是 Shannon Labs 的正式公开产品，`codewhale` 命令、npm 包及 release-asset 名称保持小写技术标识。**legacy npm 包 `deepseek-tui` 已废弃，不再获得后续 release**。自 v0.8.x 版本迁移而来的用户需注意，`deepseek` / `d...`（描述截断，建议查看 Releases 页面获取完整迁移指南）。

🔗 [查看 Release](https://github.com/Hmbown/CodeWhale/releases)

---

## 社区热点 Issues

### 1. #3192 — 申请加入 agentclientprotocol/registry
- **作者**: Jengrob777 | **评论**: 13 | **状态**: OPEN
- **为什么重要**: 社区呼声最高的集成需求之一，被该 registry 收录可大幅降低 Zed 编辑器的安装与使用门槛，直接解决 IDE 生态接入问题。
- **社区反应**: 讨论活跃，用户普遍支持，期待 CodeWhale 尽快完成注册流程。
- 🔗 [Issue #3192](https://github.com/Hmbown/CodeWhale/issues/3192)

### 2. #1004 — 功能请求：`/dryrun` 预览下一次聊天补全请求
- **作者**: peixl | **评论**: 9 | **状态**: OPEN
- **为什么重要**: 针对 DeepSeek V4 Pro 长上下文的实际痛点——开发者无法在不实际发送的情况下查看即将发送的完整请求（长 system prompt、大量仓库文件、工具定义、@提及、多步思考）。该功能可显著降低调试成本。
- 🔗 [Issue #1004](https://github.com/Hmbown/CodeWhale/issues/1004)

### 3. #5324 — 简化 32 字段的 `agent` tool schema
- **作者**: Hmbown | **评论**: 8 | **状态**: OPEN
- **为什么重要**: 模型面向的 agent 工具携带 32 属性 JSON Schema、零必填字段、支持 8 种 actions、并接受一堆别名，导致模型频繁报错。这是影响模型调用稳定性的核心问题，作者本人发起说明已意识到严重性。
- 🔗 [Issue #5324](https://github.com/Hmbown/CodeWhale/issues/5324)

### 4. #5266 — v0.9.5 里程碑追踪器
- **作者**: Hmbown | **评论**: 6 | **状态**: CLOSED
- **为什么重要**: 官方里程碑管理方式——通过 pick-order 列表指导贡献者领取任务。体现项目治理节奏，v0.9.5 已收尾关闭。
- 🔗 [Issue #5266](https://github.com/Hmbown/CodeWhale/issues/5266)

### 5. #1482 — nVidia NIM 调用报 404
- **作者**: wupflove | **评论**: 6 | **状态**: OPEN
- **为什么重要**: nVidia NIM 集成不可用，报 `404 page not found`。长时间未解决（自 5 月起），涉及第三方推理后端兼容性，影响使用 NIM 的用户群体。
- 🔗 [Issue #1482](https://github.com/Hmbown/CodeWhale/issues/1482)

### 6. #4785 — 464 个 `#[allow(dead_code)]` 属性掩盖代码漂移
- **作者**: Hmbown | **评论**: 6 | **状态**: OPEN
- **为什么重要**: 代码库中有 464 处 dead_code 忽略属性分布在 143 个文件中，使编译器无法检测结构性漂移。作者已量化影响，这直接影响代码库长期可维护性。社区中 Rust 开发者对此高度关注。
- 🔗 [Issue #4785](https://github.com/Hmbown/CodeWhale/issues/4785)

### 7. #4326 — 32-worker 并发风暴取消后 RSS 内存不回落
- **作者**: Hmbown | **评论**: 6 | **状态**: OPEN
- **为什么重要**: 高性能 PTY 基准下，取消 32 个 worker 后内存不回落，需要区分是分配器高水位保留还是真实泄漏。性能敏感用户密切关注。
- 🔗 [Issue #4326](https://github.com/Hmbown/CodeWhale/issues/4326)

### 8. #5293 — TUI 权限默认选项从“允许”改为“拒绝”，引发误操作
- **作者**: JayBeest | **评论**: 5 | 👍: 1 | **状态**: CLOSED
- **为什么重要**: v0.9.4 起默认高亮选项改变，用户可能在对齐确认操作时意外拒绝。安全与 UX 权衡的典型冲突，已关闭，说明已有方案。
- 🔗 [Issue #5293](https://github.com/Hmbown/CodeWhale/issues/5293)

### 9. #5374 — macOS 上 agent 输出文本乱码
- **作者**: all-lopezg | **评论**: 4 | **状态**: OPEN
- **为什么重要**: 新提交的渲染 bug，影响 macOS 用户体验，无法正常阅读 agent 输出。虽严重但社区反应尚未扩大，需官方确认是否为 TUI 渲染回归。
- 🔗 [Issue #5374](https://github.com/Hmbown/CodeWhale/issues/5374)

### 10. #5322 — 回归：宽终端下输出区域不填充
- **作者**: M-Maciej | **评论**: 3 | **状态**: OPEN
- **为什么重要**: v0.8 中输出区域可填满终端宽度，v0.9 起被限制最大宽度。宽屏下两侧留白严重，属于明确的 UI 回归。
- 🔗 [Issue #5322](https://github.com/Hmbown/CodeWhale/issues/5322)

### 11. #5340 — v0.9.6 升级后 doctor 的 `first-run` 状态永久卡住
- **作者**: pnbob1988 | **评论**: 3 | **状态**: CLOSED
- **为什么重要**: 升级后 `codewhale doctor` 永远提示 `needs action`，即使完成首次引导也无法消除。影响升级路径的信任度，已关闭（修复已定位）。
- 🔗 [Issue #5340](https://github.com/Hmbown/CodeWhale/issues/5340)

### 12. #5053 — TUI 从不提示有可用更新
- **作者**: Hmbown | **评论**: 2 | **状态**: CLOSED
- **为什么重要**: CLI 可检查更新但 TUI 无主动提示。官方已识别该 UX 缺陷，并规划更新通知 + 一键更新重启。对终端用户升级路径有直接影响。
- 🔗 [Issue #5053](https://github.com/Hmbown/CodeWhale/issues/5053)

---

## 重要 PR 进展

### 1. #5382 — 修复 session-index 写入未同步导致的数据丢失 ✅ 已合并
- **作者**: EvanProgramming
- **内容**: `StateStore::append_thread_name` 的 JSONL 写入与 compact 操作在 `Arc<Mutex<Connection>>` 外执行，多克隆并发时可能静默丢失数据。该 PR 为 index 文件操作加锁序列化。
- 🔗 [PR #5382](https://github.com/Hmbown/CodeWhale/pull/5382)

### 2. #5381 — Webhook HTTP 客户端构建失败不再 panic ✅ 已合并
- **作者**: EvanProgramming
- **内容**: 将 `.expect("build fallback HTTP client")` 替换为优雅错误处理，避免 TLS 等环境问题导致宿主进程崩溃。
- 🔗 [PR #5381](https://github.com/Hmbown/CodeWhale/pull/5381)

### 3. #5378 — 重新固定 thinking-ladder 断言 ✅ 已合并
- **作者**: Lstarsky0
- **内容**: 修复 9 个测试，将旧 off/high/max 词汇断言更新到新 ladder，修复 macOS/Windows 上 main 分支变红问题。无生产逻辑变更。
- 🔗 [PR #5378](https://github.com/Hmbown/CodeWhale/pull/5378)

### 4. #5384 — 重新固定 provider-count 断言到 v0.9.8 注册表 ✅ 已合并
- **作者**: Lstarsky0
- **内容**: 修复 #5383，将 `cli_provider_helpers_follow_config_metadata` 的断言从 43/38 更新至 45/40，对应 v0.9.8 新增 Google Gemini 等后端。
- 🔗 [PR #5384](https://github.com/Hmbown/CodeWhale/pull/5384)

### 5. #5376 — 内部运行时事件不再泄漏到 session peek ✅ 已合并
- **作者**: Lstarsky0
- **内容**: 修复 #5375，过滤内部运行时事件，使 session peek 只展示用户可见消息。
- 🔗 [PR #5376](https://github.com/Hmbown/CodeWhale/pull/5376)

### 6. #5365 — 添加本地 DS4（DwarfStar）一等配置路径 ✅ 已合并
- **作者**: Hmbown
- **内容**: `/setup provider ds4`、`/provider setup ds4` 及 provider-picker `D` 快捷键直接打开预填的 keyless loopback 预设，复用 OpenAI 兼容传输层。
- 🔗 [PR #5365](https://github.com/Hmbown/CodeWhale/pull/5365)

### 7. #5353 — Auto-Review 双层模式：新增 model guardian 层 ✅ 已合并
- **作者**: Hmbown
- **内容**: v0.9.8 特性。确定性规则层保持不可绕过，fallback 时升级为一次性 model guardian，对齐 Codex `auto_review` 语义和 Kimi 模式词汇。
- 🔗 [PR #5353](https://github.com/Hmbown/CodeWhale/pull/5353)

### 8. #5339 — 抑制 child-owned 后台 shell 完成事件 ✅ 已合并
- **作者**: cyq1017
- **内容**: 修复 #5325，过滤子代理后台 shell 的完成事件，避免污染父模型流，同时保留未绑定的父代完成与 task/status 可见性，并附带回归测试。
- 🔗 [PR #5339](https://github.com/Hmbown/CodeWhale/pull/5339)

### 9. #5369 — Moonshot schema 降级而非拒绝条件字段 ✅ 已合并
- **作者**: Lstarsky0
- **内容**: 针对 #5324，将 Moonshot 相关 schema 从“拒绝条件”降级为“降级处理”，作为 schema 切片工作的一部分单独提交。
- 🔗 [PR #5369](https://github.com/Hmbown/CodeWhale/pull/5369)

### 10. #5368 — 限制无守卫测试到隔离 state root ✅ 已合并
- **作者**: Lstarsky0
- **内容**: 修复 #5359 中 4 个测试。解决三个独立机制问题：锁持有线程路由到真实环境、`settings_path_candidates()` 信任漏洞等。每个修复都有独立失败验证。
- 🔗 [PR #5368](https://github.com/Hmbown/CodeWhale/pull/5368)

### 11. #5391 — 依赖更新：rusqlite 0.39.0 → 0.40.2
- **作者**: dependabot[bot]
- **状态**: OPEN
- 🔗 [PR #5391](https://github.com/Hmbown/CodeWhale/pull/5391)

### 12. #5390 — 依赖更新：rmcp 2.2.0 → 3.1.2
- **作者**: dependabot[bot]
- **状态**: OPEN
- 🔗 [PR #5390](https://github.com/Hmbown/CodeWhale/pull/5390)

---

## 功能需求趋势

### 1. IDE 集成（极高热度）
- #3192 申请加入 agentclientprotocol/registry 以便 Zed 安装，评论区热度最高（13 条）。
- #2327 反映 VS Code Marketplace 出现非官方 CodeWhale 扩展，社区对品牌保护和官方扩展有强烈需求。
- **信号**: 用户不满足于 TUI 本身，期望在主流编辑器中获得同等体验。

### 2. 模型与服务商支持扩展
- #1482 nVidia NIM 兼容性长期未修复。
- #5350 第三方模型配置简化（预制模板、测试连接按钮、缓存修复），中英双语提案。
- #5365 官方已合入 DS4 本地优先配置，说明本地模型路线受重视。

### 3. TUI 界面与体验改进
- #5322 宽终端下输出区域回归问题。
- #5374 macOS 文本输出乱码。
- #5293 权限对话框默认选项变化引发误操作。
- #5376（PR）session peek 事件过滤。
- **信号**: 核心功能稳定后，UI/UX 细节成为社区关注重点。

### 4. 性能与稳定性
- #4326 32-worker 内存不回落。
- #5355 v0.9.8 已知问题：并行加载与 config-fixture 不稳定。
- #5373 输出 token 上限被截断到低于文档目录限制。
- #5372 关闭会话的陈旧写声明阻塞新子代理。

### 5. 插件与生态
- #5311 要求达到 Kimi 级插件系统和联邦化市场。评论区虽仅 1 条，但为官方发起，规划性强。

---

## 开发者关注点

### 1. 品牌过渡带来的困惑
- v0.9.8 Release 中明确宣布 `deepseek-tui` npm 包废弃、品牌切换为 Codewhale。老用户（尤其是 v0.8.x 迁移者）需要明确的迁移路径，Release 描述被截断，需关注完整文档。

### 2. 测试稳定性 / CI 红灯频繁
- #5377、#5383 均由社区成员（Lstarsky0）发现并提交修复 PR。说明 main 分支在 macOS/Windows 上长时间不稳定，开发者对 CI 质量有较高敏感度。

### 3. 高并发与数据安全
- #5380（PR）session 索引并发写入导致数据丢失、#5379（PR）webhook 构建失败 panic，均由外部贡献者 EvanProgramming 提交。该类问题直接影响用户数据安全，属于高优修复。

### 4. 旧功能回归
- #5322 宽终端渲染在 v0.9 回退、#5340 doctor 状态卡死。用户对回归容忍度低，需要更完善的发布前验证流程。

### 5. 配置复杂度
- #5350 第三方模型配置繁琐且状态卡在 `not checked` / `cache failed`——反映了普通用户配置自定义模型的常见痛点。建议内置模板 + 一键测试连接。

---

> 本日报基于 GitHub 公开数据自动生成，数据截至 2026-08-14 24:00 UTC。项目已更名 CodeWhale，原 DeepSeek-TUI 名称仅作检索兼容。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*