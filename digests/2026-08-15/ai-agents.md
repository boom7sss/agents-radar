# OpenClaw 生态日报 2026-08-15

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-15 01:37 UTC

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

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 — 2026-08-15

## 1. 今日速览

过去 24 小时项目吞吐量极高：Issue 更新 500 条（新开/活跃 485，关闭 15），PR 更新 500 条（待合并 400，合并/关闭 100），但 Issue 关闭率仅 3%、PR 合并率约 20%，维护者审查队列积压明显。今日讨论集中在消息静默失败（[#121058](https://github.com/openclaw/openclaw/issues/121058)）、网关内存泄漏（[#91588](https://github.com/openclaw/openclaw/issues/91588)）和大量 Control UI 改进 PR。无新版本发布，项目整体处于 2026.7.x 的修复与打磨阶段，社区参与度高但急需维护者加快合并节奏。

## 2. 版本发布

今日无新 Release。

## 3. 项目进展

今日合并/关闭的关键 PR 主要围绕稳定性、安全边界和测试基建：

- **fix(cron)：添加代理后保持无代理计划运行**（[PR #123914](https://github.com/openclaw/openclaw/pull/123914)，已关闭） — 修复了用户添加第二个代理后所有无代理 cron 计划每次触发都失败的问题，并覆盖了 Memory Dreaming Promotion 等内置计划。
- **fix(workers)：限制 Gateway bundle 缓存增长**（[PR #123901](https://github.com/openclaw/openclaw/pull/123901)，已关闭） — 为 `state/cache/worker-bundles` 增加了生命周期管理，解决了开发/升级场景下缓存无限膨胀的问题。
- **refactor(sessions)：避免重复的 SQLite conformance 运行**（[PR #123913](https://github.com/openclaw/openclaw/pull/123913)，已关闭） — 移除测试矩阵中 13 个跳过断言的冗余场景，提升 CI 效率。
- **feat(security)：要求对安装策略警告进行确认**（[PR #116489](https://github.com/openclaw/openclaw/pull/116489)，已关闭） — 允许 `security.installPolicy` 返回 `warn`，让授权操作员在安装可疑插件/技能时进行人工确认，这是安全边界的重要增强。

此外，今日另有约 100 个 PR 被合并/关闭。值得关注的是 vyctorbrzezowski 集中提交了一组 Control UI 改进 PR（[#123645](https://github.com/openclaw/openclaw/pull/123645)、[#123656](https://github.com/openclaw/openclaw/pull/123656)、[#123666](https://github.com/openclaw/openclaw/pull/123666)、[#123682](https://github.com/openclaw/openclaw/pull/123682)、[#123874](https://github.com/openclaw/openclaw/pull/123874) 等），覆盖侧边栏、会话身份、隐身标识和问题面板，预示着 Web UI 将迎来一次系统性改版。

## 4. 社区热点

- **[#121058 静默回复失败复发](https://github.com/openclaw/openclaw/issues/121058)**（94 条评论）— 用户指出 #116277 关闭后问题仍在持续，监控 cron 在问题关闭后依然记录到新失败。用户对“声明修复但实际未修复”的状态明显不满，这是今日讨论度最高、情绪最强的一条 Issue。
- **[#7707 记忆信任标记](https://github.com/openclaw/openclaw/issues/7707)**（51 条评论）— 自 2 月延续至今的长线功能请求。核心诉求是防止记忆投毒：恶意指令隐藏在网页、第三方技能等不可信内容中，随后影响代理行为。社区对安全防御机制的需求非常强烈。
- **[#42475 网关级每代理成本预算](https://github.com/openclaw/openclaw/issues/42475)**（25 条评论）— 自托管用户希望在模型调用前强制执行日/月成本上限，避免失控费用。
- **[#91588 网关内存泄漏](https://github.com/openclaw/openclaw/issues/91588)**（24 条评论）— P0 级稳定性问题，RSS 从 350MB 涨至 15.5GB，导致 OOM 崩溃和反复重启，直接影响生产可用性。
- **[#91009 Codex 钩子 CPU 峰值](https://github.com/openclaw/openclaw/issues/91009)**（20 条评论）— Codex PreToolUse 原生钩子中继产生多个 ~100% CPU 的短命进程，并阻塞网关 RPC，属于 Codex 集成的性能回归。

## 5. Bug 与稳定性

按严重程度排列：

**P0 / 严重**

- **网关内存泄漏，RSS 达 15.5GB 后被 OOM 杀死**（[#91588](https://github.com/openclaw/openclaw/issues/91588)）— 尚无关联 fix PR。
- **文件工具剥离目标路径前导 `@`，静默写/删错误文件**（[#119270](https://github.com/openclaw/openclaw/issues/119270)）— 存在数据丢失风险，无 fix PR。
- **Codex PreToolUse 原生钩子中继导致 CPU-bound 进程并阻塞 RPC**（[#91009](https://github.com/openclaw/openclaw/issues/91009)）— 无 fix PR。
- **Live Docs 超前于发布版本，配置示例不可用**（[#48920](https://github.com/openclaw/openclaw/issues/48920)）— 被标为 UX release blocker。

**P1 / 高**

- **Steer 模式无法在主会话中途注入消息**（[#48003](https://github.com/openclaw/openclaw/issues/48003)）— 19 条评论，指向 3 月的 KeyedAsyncQueue 重构。
- **DeepSeek 上 cron 轮次因 `[cron:` 前缀被降优先级而停滞**（[#121953](https://github.com/openclaw/openclaw/issues/121953)）。
- **Cron `delivery.mode="none"` + 隔离代理 → 状态 ok 但投递失败，静默无输出**（[#113181](https://github.com/openclaw/openclaw/issues/113181)）。
- **macOS 上网关堆内存空闲时超 1GB，cron 静默失败**（[#87109](https://github.com/openclaw/openclaw/issues/87109)）。
- **claude-cli 流事件被网关缓冲，WebChat/TUI 失去流式体验**（[#86050](https://github.com/openclaw/openclaw/issues/86050)）。
- **孤儿 node server.js 进程在子代理/cron 后不断累积**（[#86119](https://github.com/openclaw/openclaw/issues/86119)）。
- **ACP session/new 的 cwd 未传播到 Gateway chat.send**（[#123557](https://github.com/openclaw/openclaw/issues/123557)）。

**有 fix PR 的**

- **#123914** cron 计划失效已有修复并关闭。https://github.com/openclaw/openclaw/pull/123914
- **#120491** 为消息工具增加每轮每目标发送预算守卫，可抑制重复回复风暴。https://github.com/openclaw/openclaw/pull/120491
- **#115405** 将回退委托门应用到 CLI-backend 运行，防止回退模型触发异常委托。https://github.com/openclaw/openclaw/pull/115405

## 6. 功能请求与路线图信号

- **记忆信任标记（#7707）**：社区讨论热度最高（51 条评论），核心场景是防止恶意网页/第三方技能污染记忆。虽然尚无 PR，但长期需求明确，很可能进入安全路线图。https://github.com/openclaw/openclaw/issues/7707
- **上下文来源元数据（#54373）**：为注入上下文增加 source/volatility 标记，让代理区分“会话固定内容”和“实时读取内容”。与 #7707 同属可解释性与安全方向。https://github.com/openclaw/openclaw/issues/54373
- **网关级 per-agent 成本预算（#42475）**：自托管用户控制失控花费的刚需，目前仅停留在 `session-cost-usage.ts` 的跟踪层面，离实际预算执行还有距离。https://github.com/openclaw/openclaw/issues/42475
- **代理触发的上下文压缩（#6757）**：让代理自主调用 `/compact`，减少人工介入。自 2 月提出至今未动，但 agent autonomy 是明显趋势。https://github.com/openclaw/openclaw/issues/6757
- **Control UI 改进信号强烈**：#71142（可配置上传大小限制）、#75947（UX 评分驱动的 UI 重构）都指向 Web UI 体验；当前 vyctorbrzezowski 的 PR 系列正好回应了这些诉求，预计将在后续版本合入。https://github.com/openclaw/openclaw/issues/71142、https://github.com/openclaw/openclaw/issues/75947
- **WhatsApp 断线重连后消息回填（#50093）**：消息可靠性类请求，与多个投递问题同源。https://github.com/openclaw/openclaw/issues/50093

## 7. 用户反馈摘要

- **“静默失败”是最具破坏力的信任杀手**：多个频道（WhatsApp、LINE、cron、回复投递）出现“状态显示正常但实际未投递/无输出/无报错”的情况。例如 #121058 中用户表示“监控 cron 持续记录新失败”，#87109 中用户描述“web_fetch/web_search 全部超时，cron 任务静默失败——无输出、无推送、无错误上报”。
- **长期运行的稳定性压力大**：内存泄漏和孤儿进程是高频词。用户反馈 2-3 天即从 350MB 涨到 15.5GB（#91588），或堆内存从 558MB 涨到 1073MB 后触发告警（#87109）。
- **回归问题严重侵蚀升级信心**：文档超前于版本（#48920）、自定义提供商 baseUrl 回归（#82020）、TTS 合成后播放错误语音（#52186）、飞书流式卡片延迟回归（#91941）——用户对“升级后挂掉”的抱怨非常集中。
- **用户希望代理能解释信息来源**：记忆信任（#7707）与上下文来源（#54373）两个讨论的核心诉求是：代理应能区分“用户说的”和“从网页抓的”，避免被不可信内容操纵。
- **积极信号**：用户不仅在报问题，也在提交高质量修复，如消息发送预算守卫（#120491）、超时进度保留（#91479）、结果标记完成摘要（#90864），说明社区有较强的共建意愿。

## 8. 待处理积压

以下 Issue/PR 长期未得到有效响应或推进，建议维护者优先关注：

- **#7707 记忆信任标记**（2026-02-03 开启，51 条评论，状态仍为 needs-maintainer-review）。https://github.com/openclaw/openclaw/issues/7707
- **#6757 代理触发的上下文压缩**（2026-02-02 开启，8 条评论，无 fix PR）。https://github.com/openclaw/openclaw/issues/6757
- **#48920 Live Docs 超前于发布版本**（2026-03-17 开启，P0，11 条评论，被标为 UX release blocker）。https://github.com/openclaw/openclaw/issues/48920
- **#47975 子代理会话持久化并导致主会话无响应**（2026-03-16 开启，P1，10 条评论）。https://github.com/openclaw/openclaw/issues/47975
- **#50093 WhatsApp 断线重连消息回填**（2026-03-19 开启，P2，12 条评论，clawsweeper 状态为 needs-maintainer-review）。https://github.com/openclaw/openclaw/issues/50093
- **PR #90788 链式思维预检规划**（2026-06-05 开启，状态为 needs-real-behavior-proof，长期停留在“需要真实行为证据”）。https://github.com/openclaw/openclaw/pull/90788
- **PR #97175 context-engine 后台维护不阻塞新消息**（2026-06-27 开启，已被标记为 stale，需要人工处理）。https://github.com/openclaw/openclaw/pull/97175

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**分析周期**：2026-08-14 至 2026-08-15  
**数据来源**：各项目 GitHub 仓库公开动态

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现“一超多强、快速分化”的态势。以 OpenClaw 为核心，衍生出 NanoBot、Claw 系列（PicoClaw、NanoClaw、ZeroClaw、IronClaw 等）及其他独立项目（Hermes、LobsterAI、Moltis、CoPaw 等），均在围绕“连接、记忆、自动化、安全”四大主题高速迭代。社区贡献热情极高（单日多项目 PR 更新量达数十至数百），但普遍面临维护者审查队列积压、合并率偏低的问题。稳定性（静默失败、内存泄漏、回归）是所有项目共同的头号痛点，“安全边界”和“WebUI 体验”则成为下一阶段竞争焦点。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃 / 关闭） | PR（待合并 / 合并关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 485 / 15 | 400 / 100 | 无 | 吞吐极高，合并率 20%，审查积压严重，处于修复打磨期 |
| **NanoBot** | 1 / 2 | 14 / 8 | 无 | 高位，Bug 闭环快（24h 修复），但 P0 session 竞态 PR 未合并 |
| **Hermes Agent** | 46 / 4 | 27 / 23 | 无 | 极活跃，架构里程碑完成，但 P1 Windows 回归无 fix |
| **PicoClaw** | 3 / 0 | 4 / 5 | 无 | 中等偏上，MCP 挂起有修复 PR，但多个 PR 被 stale |
| **NanoClaw** | 2 / 0 | 8 / 3 | 无 | 活跃，社区响应快，AVX2 兼容问题无修复 |
| **NullClaw** | 0 / 0 | 1 / 1 | 无 | 低活跃，平静期，当日 PR 已合并 |
| **IronClaw** | 16 / 9 | 24 / 23 | 无 | 高强度迭代，1.2.0 回归 main，自动化可靠性史诗推进中 |
| **LobsterAI** | 2 / 0 | 5 / 22 | 1（2026.8.14） | 极活跃，核心迭代快，但 Issue 响应弱，陈旧 PR 多 |
| **Moltis** | 0 / 0 | 2 / 0 | 无 | 中等偏上，两个关键 PR 待合并，社区互动少 |
| **CoPaw** | 13 / 37 | 26 / 15 | 无 | 高活跃，Issue 关闭率 74%，但 3 个高优 Bug 无 fix PR |
| **ZeroClaw** | 30 / 3 | 47 / 3 | 无 | 高活跃，合并率低，维护者评审队列是瓶颈 |
| **TinyClaw** | 0 / 0 | 0 / 0 | 无 | 无活动 |
| **ZeptoClaw** | 0 / 0 | 0 / 0 | 无 | 无活动 |

> 注：合并/关闭数含 PR 关闭（可能未合并）。活跃度主要参考当日更新量级。

---

## 3. OpenClaw 在生态中的定位

OpenClaw 是当前生态的**核心参照与基础设施级存在**：

- **社区规模碾压**：单日 Issue/PR 更新均为 500 条，是第二梯队（50 条左右）的 10 倍，衍生项目（NanoClaw、PicoClaw、ZeroClaw、IronClaw、ZeptoClaw 等）均以其为命名/功能参照系。
- **技术路线**：覆盖代理运行时、网关、cron、记忆、Control UI、安全策略、Delegation 等全栈能力，追求“开箱即用的完整个人 AI 助手”，而非单一垂直场景。
- **优势**：生态成熟度高，社区反馈量大，问题发现全面（从静默失败到内存泄漏），且有大量第三方 PR 贡献（如 Control UI 系列）。
- **短板**：合并率仅 20%、Issue 关闭率 3%，维护者吞吐明显不足；大量 P0/P1 稳定性问题悬而未决，这可能把部分用户推向更敏捷的小型项目（如 NanoBot 的 24h 修复闭环形成对比）。
- **竞争差异**：其他项目多针对 OpenClaw 的痛点做减法或专项强化——NanoBot 重 WebUI 与工程质量，PicoClaw 重低资源硬件，ZeroClaw 重安全与协议兼容，IronClaw 重自动化可靠性。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **静默失败与可观测性** | OpenClaw、NanoBot、PicoClaw、Hermes、ZeroClaw | 状态显示成功但实际无输出/无投递；流式中断被误报为成功；需要“失败时明确报错并自动恢复” |
| **记忆安全与数据来源** | OpenClaw、Hermes、LobsterAI | 记忆投毒（恶意网页/第三方技能污染记忆）；外部 memory provider 与内置记忆冲突；安全关键模块零测试 |
| **WebUI/终端用户体验** | OpenClaw、NanoBot、LobsterAI、CoPaw、Hermes | 侧边栏改版、会话分组、拖拽、@提及、协作功能、桌面端回归修复 |
| **多渠道 IM/连接器** | PicoClaw、NanoClaw、IronClaw、Moltis、CoPaw | 钉钉/微信/Telegram/Slack/飞书等渠道适配；图片/音频/视频消息支持；断线重连消息回填 |
| **MCP 稳定性与生态** | PicoClaw、CoPaw、Moltis | MCP 连接失败导致 Agent 挂起；工具名带前缀后 not found；连接器持久化与安全设计 |
| **安全边界与策略化控制** | OpenClaw、ZeroClaw、NanoClaw、Hermes | 安装可疑插件需人工确认；shell 命令 allow/ask/deny 策略；供应链签名验证；Docker 容器复用校验 |
| **成本/资源控制** | OpenClaw、ZeroClaw、IronClaw | 每代理成本预算；上下文压缩自主触发；DB 写负载基线测量 |
| **协议兼容与生态接入** | ZeroClaw、CoPaw、Hermes | 提供 OpenAI Chat Completions 端点以接入 Open WebUI/LobeChat 等；Responses API 兼容 |

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 架构亮点 |
|---|---|---|---|
| **OpenClaw** | 全功能个人 AI 助手操作系统 | 技术爱好者、自托管用户、开发者 | 网关+代理+Control UI 三层架构，支持 cron、Delegation、插件系统 |
| **NanoBot** | 轻量、高响应、WebUI 优先 | 追求现代 UI 和快速迭代的个人用户 | 流式超时修复快，Pyright 严格检查，拖拽会话分组 |
| **Hermes Agent** | 通用 Agent 运行时，强桌面端支持 | 桌面重度用户、Discord 社区 | god-file 分片，多租户需求，丰富 hooks 生态 |
| **PicoClaw** | 极低资源下运行（<10MB RAM） | 嵌入式、老硬件玩家 | 原生 Go，秒级启动，多渠道（钉钉/微信） |
| **NanoClaw** | 安全供应链 + 边缘设备部署 | NAS/软路由用户、安全敏感用户 | signature approver 实战验证，Dial 电信渠道 |
| **NullClaw** | 部署灵活性与配置化 | 容器化、只读文件系统场景 | SQLite 路径可配置，无冗余功能 |
| **IronClaw** | 自动化任务可靠性 | 需要无人值守自动化的团队 | 结构化执行规范，unbound-turns，可插拔记忆 |
| **LobsterAI** | 团队协作与商业化（Team Edition） | 企业/团队用户，中文社区 | 签到/banner 运营，多 Agent 筛选，renderer 密集打磨 |
| **Moltis** | 渠道原生表达 + 持久化连接器 | Slack 用户、跨 SaaS 数据聚合需求 | Slack 原生任务卡片，CalDAV/Gmail 连接器 |
| **CoPaw** | 2.0 生态补课 + 多会话管理 | Qwen 生态用户、飞书/钉钉用户 | 插件频道配置器，OneBot 媒体管线，per-session 模型覆盖 |
| **ZeroClaw** | 安全架构与协议兼容 | 安全敏感的自托管者、OpenAI 生态用户 | RFC 驱动，Chat Completions 兼容，高风险命令确认层 |

---

## 6. 社区热度与成熟度

**第一梯队：极高活跃，每日 50+ PR 更新，处于快速迭代或稳定化关键期**

- **OpenClaw**：迭代量最大，但合并率低，处于“功能多而修复慢”的质量巩固期。
- **Hermes Agent**：架构治理（god-file 分片）完成，进入稳定性修复，但仍需处理 P1 回归。
- **IronClaw**：1.2.0 发布线回归 main，v1.3.0 自动化可靠性史诗拆解中，快速迭代与质量并重。
- **ZeroClaw**：安全/协议 RFC 密集讨论，但 47 个 PR 待合并，维护者吞吐瓶颈明显。
- **CoPaw**：Issue 关闭率高（74%），2.0 兼容性收尾，但高优 Bug 无 fix 是隐患。

**第二梯队：中等偏高，单日 PR 10~30，功能迭代活跃**

- **NanoBot**：Bug 闭环速度快，WebUI 功能批量涌现，健康度最佳。
- **LobsterAI**：核心维护者驱动，发布节奏稳定，但外部贡献者 PR 积压严重。
- **PicoClaw** / **NanoClaw**：早期快速迭代，社区响应积极，但稳定性问题（MCP 挂起、AVX2 崩溃）需要尽快解决。

**第三梯队：低活跃或无活动**

- **Moltis**：两个重要 PR 待合并，社区讨论尚未形成。
- **NullClaw**：单日 1 PR，处于维护平静期。
- **TinyClaw** / **ZeptoClaw**：无任何动态，可能已停止活跃开发。

---

## 7. 值得关注的趋势信号

1. **“静默失败”是信任的第一杀手**：OpenClaw 的 #121058（监控 cron 记录失败但状态正常）、ZeroClaw 的 #9421（不完整输出被报成功）、PicoClaw 的 #3269（连接失败导致 UI 永久卡死）——用户对“无报错、无输出、状态假阳性”的容忍度极低。**开发者应把“可观测性”和“失败显式化”作为第一优先级设计原则**。

2. **记忆安全与来源追溯成为安全焦点**：OpenClaw 的记忆信任标记、Hermes 的外部 memory provider 行为不符、LobsterAI 的 AI 安全模块零测试——AI 助手将长期记忆与现实世界数据（网页、第三方工具）打通，必须要能区分“用户信任内容”和“外部不可信内容”，防止记忆投毒。

3. **成本控制从“跟踪”走向“执行”**：OpenClaw 的每代理成本预算、ZeroClaw 的 token 计量、IronClaw 的 DB 写负载基线——自托管用户需要“调用前强制上限”而非事后账单，这是走向生产可用的必备能力。

4. **WebUI 成为竞争主战场**：OpenClaw 的 Control UI 系列 PR、NanoBot 的拖拽/协作/本地化、LobsterAI 的 renderer 密集修复、CoPaw 的会话管理——终端用户对 AI 助手的期待正在从“API/CLI”转向“专业级图形界面”，WebUI 体验将直接决定开源项目的用户留存。

5. **协议兼容是生态融合的关键**：ZeroClaw 的 Chat Completions 兼容端点、CoPaw 的 Responses API 支持、Hermes 的 OpenAI-compatible SSE——与其让用户适配各家私有协议，不如提供标准 OpenAI 接口以融入既有工具链（Open WebUI、LobeChat、Aider 等）。这是小项目撬动大生态的最有效杠杆。

6. **安全策略从“开关”走向“分级策略”**：ZeroClaw 的 shell 命令 allow/ask/deny、OpenClaw 的安装策略 warn 确认、NanoClaw 的供应链签名——安全机制需要可配置、可审计、可覆盖不同风险等级，而非简单的黑白名单。

7. **自动化可靠性成为下一座山头**：IronClaw 的 v1.3.0 史诗、ZeroClaw 的 cron 自主回合契约——用户开始追求“无人值守时 AI 能按预期交付”，这要求系统具备预飞行检查、模型固定、确定性输出、失败审计等机制，是 agent 从“玩具”走向“生产力工具”的分水岭。

---

*报告结束。数据支撑来自各项目当日日报，具体 Issue/PR 编号可追溯至对应仓库。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-15

## 1. 今日速览

过去 24 小时，NanoBot 项目共更新 3 条 Issue（1 条新开/活跃、2 条关闭），22 条 PR（14 条待合并、8 条合并/关闭），无新版本发布。整体活跃度处于**高位**，开发力量集中在 WebUI 体验重构、provider 流式超时修复和 session 并发安全加固。值得注意的是，昨日报告的 Anthropic 流式超时 Bug（#5391）在当天即被修复 PR #5392 闭环，维护响应迅速。当前项目处于**功能迭代与稳定性加固并重**的阶段。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 中，以下几条代表了实质进展：

- **[#5392] fix(anthropic): 流式空闲超时不再作为总超时**（[链接](https://github.com/HKUDS/nanobot/pull/5392)，已关闭）
  修复 #5391——`NANOBOT_STREAM_IDLE_TIMEOUT_S` 之前被错误地用作 Anthropic no-callback 流式路径的 *总* 超时，导致活跃但长时间运行的生成被强制中断。这是本轮最核心的稳定性修复。

- **[#5393] feat(webui): 打磨侧边栏与会话过渡**（[链接](https://github.com/HKUDS/nanobot/pull/5393)，已关闭）
  从 #5358 拆分出的纯 UI 改进，包括更清晰的侧边栏层级、连接线、扁平化标签页和文件夹展示等，WebUI 信息架构进一步收敛。

- **[#5395] feat(webui): 细化会话分组与共享外形**（[链接](https://github.com/HKUDS/nanobot/pull/5395)，已关闭）
  统一分组术语、支持会话（含活动主题/窗格）拖入分组或拖回独立列表，全本地化分组流程。

- **[#5390] Agent/knowledge graph**（[链接](https://github.com/HKUDS/nanobot/pull/5390)，已关闭）
  该 PR 无摘要信息，从标题看与知识图谱能力相关，具体推进程度不明。

- **[#4689]、[#5018] 关闭**（[#4689](https://github.com/HKUDS/nanobot/pull/4689)、[#5018](https://github.com/HKUDS/nanobot/pull/5018)）
  分别以 `invalid` 和 `conflict` 标记关闭，不构成功能推进，但说明维护者对 PR 冲突和方向分歧在用关闭动作收敛。

整体来看，项目在 **WebUI 体验** 和 **provider 流式稳定性**两条线上都有明确进展；session 相关的 P0 修复（#5271）仍未合并，值得继续关注。

## 4. 社区热点

- **[#5391 → #5392] Bug 报告到修复的 24 小时闭环**（[#5391](https://github.com/HKUDS/nanobot/issues/5391) / [#5392](https://github.com/HKUDS/nanobot/pull/5392)）
  用户 `shen0122` 报告 Anthropic 流式超时被误用作总超时，同一天即由同一作者提交修复 PR 并关闭 Issue。这类快速闭环会显著提升贡献者参与意愿，反映项目维护者响应速度良好。

- **[#5161 → #5396] 工程基建：Pyright 严格检查收窄豁免**（[#5161](https://github.com/HKUDS/nanobot/issues/5161) / [#5396](https://github.com/HKUDS/nanobot/pull/5396)）
  #5161 由 `chengyongru` 提出，目标是收窄 `nanobot/` 下 31 处文件级类型检查豁免；#5396 在 24 小时内跟进实现。说明项目核心贡献者对 **类型安全和代码质量** 有持续投入。

- **[#4329] 原生 TypeScript 终端 UI 重造**（[链接](https://github.com/HKUDS/nanobot/pull/4329)）
  自 6 月 13 日开放至今已超两个月，PR 规模大、涉及 CLI 产品方向重构，仍处于开放状态。短期看不是主线，但反映社区对终端用户体验的差异化需求持续存在。

- **WebUI 功能批量涌现**（[#5367](https://github.com/HKUDS/nanobot/pull/5367)、[#5389](https://github.com/HKUDS/nanobot/pull/5389)、[#5358](https://github.com/HKUDS/nanobot/pull/5358)、[#5356](https://github.com/HKUDS/nanobot/pull/5356)、[#5371](https://github.com/HKUDS/nanobot/pull/5371)、[#5340](https://github.com/HKUDS/nanobot/pull/5340)）
  多语言本地化、拖拽会话分组、会话协作 @ 提及、渠道配置流程重构、粒子背景等密集出现。WebUI 是目前社区与维护者共同聚焦的最大热点，但也伴随大量 `conflict` 标签，说明 PR 间存在协调成本。

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue/PR | 状态 | 说明 |
|---|---|---|---|
| P0 | [#5271] Stale 后台任务覆盖会话数据（[PR](https://github.com/HKUDS/nanobot/pull/5271)） | 待合并 | 后台任务保存可能覆盖 `/new` 后的新会话，已有修复 PR（创建于 8 月 6 日），至今未合并，属最高优先级隐患。 |
| P1 | [#5391] Anthropic 流式空闲超时被用作总超时（[Issue](https://github.com/HKUDS/nanobot/issues/5391)） | 已关闭，修复 PR [#5392](https://github.com/HKUDS/nanobot/pull/5392) 已合并/关闭 | 长时间活跃生成被强制中断，修复方案为仅对“无事件”计时。 |
| P2 | [#5378] file-cap 归档失败导致会话内存已变更（[Issue](https://github.com/HKUDS/nanobot/issues/5378)） | 已关闭 | 归档回调抛错后，调用方内存中的 session 已丢失溢出数据，后续成功保存也无法恢复一致性。 |
| P2 | [#5382] Windows 下 `os.replace()` 瞬时 PermissionError 导致 gateway 崩溃（[PR](https://github.com/HKUDS/nanobot/pull/5382)） | 待合并 | 8 月 11 日两天内同一日志出现两次，已有重试修复，但尚未合入。 |
| P2 | [#5152] subagent 部分完成结果被误判为完成（[PR](https://github.com/HKUDS/nanobot/pull/5152)） | 待合并 | 回归修复，已开放超过两周，需要关注。 |

## 6. 功能请求与路线图信号

当前 PR 集中释放的路线图信号非常明显：

- **WebUI 会话与协作能力是下一版本重点**：
  - 拖拽式会话分组（[#5389](https://github.com/HKUDS/nanobot/pull/5389)）
  - 跨会话协作与 @ 提及（[#5358](https://github.com/HKUDS/nanobot/pull/5358)）
  - 全量本地化 agent activity（[#5367](https://github.com/HKUDS/nanobot/pull/5367)）
  - 渠道设置流程重构（[#5356](https://github.com/HKUDS/nanobot/pull/5356)）
  - 侧边栏与过渡动效打磨（[#5393](https://github.com/HKUDS/nanobot/pull/5393)）

  这些 PR 若陆续合并，WebUI 将收获一次显著的体验升级。

- **技能生态**：允许市场技能 shadow 内置技能（[#5309](https://github.com/HKUDS/nanobot/pull/5309)）正在推进，天气技能 PR（[#4145](https://github.com/HKUDS/nanobot/pull/4145)）自 6 月搁置至今，技能生态的扩展需求是真实存在的。

- **MCP 集成升级**：[#5179](https://github.com/HKUDS/nanobot/pull/5179) 将 MCP client 迁移到 SDK v2，同时保留 SSRF 校验、DNS pinning 等安全机制，这是基础设施层面的前瞻性投入。

- **CLI 原生终端 UI**（[#4329](https://github.com/HKUDS/nanobot/pull/4329)）若被接纳，将重塑 `nanobot agent` 的终端体验，但目前处于长期开放、维护者未明确表态的状态。

## 7. 用户反馈摘要

来自 Issue 描述的真实用户声音：

- **长时生成被强杀（#5391）**：用户在使用 Anthropic provider 时，流式空闲超时（默认 90 秒）被当成了总超时，导致“长时间但活跃”的生成任务被中断。这是典型的**实际使用场景与默认配置不匹配**问题，修复后体验应显著改善。

- **Windows 稳定性困扰（#5382）**：贡献者报告 JsonlSessionStore 保存时 `os.replace()` 遇到瞬时 `[WinError 5] Access is denied`，导致 gateway 直接崩溃，并在两天内同一日志中复现两次。用户提供了精确时间点（8 月 11 日 15:44 与 18:45 CDT），说明 **Windows 平台上文件锁竞争**对日常使用是真实痛点。

- **数据一致性顾虑（#5378）**：`Session.enforce_file_cap()` 在归档回调执行前就 변경了内存状态；回调一旦失败，调用方拿到的是“已丢数据但未持久化”的脏状态。用户关心的是 **“失败时不应静默丢数据”**。

- **工程质量自驱（#5161）**：核心贡献者主动提出收窄文件级 Pyright suppression，说明项目内部对类型安全和可维护性的要求正在提高。

## 8. 待处理积压

需要维护者关注的重要长周期开放 PR：

| PR | 创建时间 | 搁置时长 | 说明 |
|---|---|---|---|
| [#4145] Weather Skill（[链接](https://github.com/HKUDS/nanobot/pull/4145)） | 2026-06-01 | 2.5 个月 | 完整的天气技能实现 + 文档 + 测试，长期未合并，若方向合适应尽快决定去留。 |
| [#4329] 原生 TypeScript 终端 UI（[链接](https://github.com/HKUDS/nanobot/pull/4329)） | 2026-06-13 | 2 个月 | 大特性 PR，涉及 CLI 产品方向，已与后续 #5356 等有交叉，需维护者明确是否纳入路线图。 |
| [#5152] subagent 部分完成结果标记（[链接](https://github.com/HKUDS/nanobot/pull/5152)） | 2026-07-28 | 2 周+ | 回归修复，长时间未合并可能影响 subagent 相关用户的体验。 |
| [#5179] MCP SDK v2 迁移（[链接](https://github.com/HKUDS/nanobot/pull/5179)） | 2026-07-30 | 2 周+ | 基础设施升级，合并窗口拖得越久，与后续改动产生冲突的风险越高。 |
| [#5271] P0 session 保存竞态修复（[链接](https://github.com/HKUDS/nanobot/pull/5271)） | 2026-08-06 | 9 天 | 已标注 `priority: p0`，建议优先 review 合并。 |

---

**总结**：NanoBot 项目今日整体健康度良好——Bug 闭环速度快、WebUI 功能迭代密集、类型安全等工程基建在持续推进。主要风险集中在 **P0 session 竞态修复（#5271）长时间未合并**，以及 **多个 WebUI PR 存在 `conflict` 标记**，需要维护者尽快协调合并顺序，避免积压冲突扩大。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-08-15

## 1. 今日速览

过去 24 小时项目活跃度极高：共 50 条 Issue 更新（46 条新开/活跃、4 条关闭）与 50 条 PR 更新（27 条待合并、23 条已合并/关闭），无新版本发布。架构层面迎来里程碑——god-file sharding epic（[#78647](https://github.com/NousResearch/hermes-agent/issues/78647)）20/20 子任务全部完成并关闭。稳定性方面有多个关键 bugfix 合并，包括流中断 fallback（[#86572](https://github.com/NousResearch/hermes-agent/pull/86572)）、rewind truncation 修复（[#83785](https://github.com/NousResearch/hermes-agent/pull/83785)）和 slash_worker PATH 修复（[#86374](https://github.com/NousResearch/hermes-agent/pull/86374)）。当前最需关注的风险是 P1 回归——Windows 桌面应用重启后 gateway 不重启（[#83683](https://github.com/NousResearch/hermes-agent/issues/83683)），尚无对应 fix PR。社区侧 Discord Omniscience 战役单日提交了 10+ 个子任务 issue，多租户方案讨论（[#34352](https://github.com/NousResearch/hermes-agent/issues/34352)）持续高热。

## 2. 版本发布

本期无新版本发布。

## 3. 项目进展

### 里程碑

- **[#78647](https://github.com/NousResearch/hermes-agent/issues/78647) [CLOSED] [EPIC — COMPLETE] All Gods Must Die: 20/20 killed** — 仓库级 god-file 分片史诗全部完成。该 epic 规定所有 god 文件必须分片、不得回退，是仓库架构治理的重要里程碑。

### 已合并/关闭的重要 PR

- **[#67017](https://github.com/NousResearch/hermes-agent/pull/67017) [CLOSED] anthropic_prompt_cache_policy 缺失位置参数修复** — 修复 `agent_runtime_helpers.py::anthropic_prompt_cache_policy` 移除位置参数后导致 `agent/moa_loop.py:247` 等多处调用点运行时崩溃的问题。同日新增回归测试 PR [#86578](https://github.com/NousResearch/hermes-agent/pull/86578)。
- **[#86572](https://github.com/NousResearch/hermes-agent/pull/86572) [CLOSED] 流中断升级到 fallback chain** — 当 provider 流式路径不健康（实测 OpenRouter 2026-08-14 的 claude-sonnet-4.6 事件）导致请求持续半途中断并产生 `PARTIAL_STREAM_STUB_ID` 时，现在会升级触发 fallback 链，提升用户体验。
- **[#83785](https://github.com/NousResearch/hermes-agent/pull/83785) [CLOSED] rewind truncation 的 durable row-id 寻址修复** — 解决桌面端 rewind/edit/regenerate 截断时 SQLite `row_id` 对准问题，并附带对齐守卫和去重保护。
- **[#86374](https://github.com/NousResearch/hermes-agent/pull/86374) [CLOSED] Dashboard/Desktop slash_worker PATH 修复** — 将 Hermes 管理的 bin、venv bin、用户本地 bin 目录前置注入 `slash_worker` 进程环境，修复浏览器 CLI 发现失败问题（对应 [#83845](https://github.com/NousResearch/hermes-agent/issues/83845)）。
- **[#84859](https://github.com/NousResearch/hermes-agent/pull/84859) [CLOSED] browser subprocess 环境变量修复** — 剥离父 shell 的 `PYTHONPATH` 指针，解决 `pydantic_core` ABI 不匹配崩溃。

整体来看，项目今日完成了 23 个 PR 的合并/关闭，覆盖核心 Agent 运行时、桌面端、工具链与文档多个维度，健康度良好。

## 4. 社区热点

按评论数排序：

- **[#78647](https://github.com/NousResearch/hermes-agent/issues/78647)（78 评论）** — God-file 分片 epic 关闭，社区围绕 20 个子任务的完成情况进行了大量讨论。这一史诗的落地意味着仓库的模块化架构迈入新阶段。
- **[#34352](https://github.com/NousResearch/hermes-agent/issues/34352)（31 评论）** — Multi-Tenant Hermes 多租户方案。核心痛点：memory 操作完全绕过 hook 系统，租户隔离必须 fork 核心。提出者自称已在生产环境运行修复版本数月。该 issue 已挂 3 个月仍处于 `needs-decision`，社区持续关注。
- **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616)（31 评论）** — 自动探针报告 skills 索引过期（29.8h 超过 26h 限制），Skills Hub 依赖的 `skills-index.json` 持续 degraded。这是一个自动化运维监控问题，评论数量高说明社区对文档/Skills 基础设施的可用性高度敏感。
- **[#83683](https://github.com/NousResearch/hermes-agent/issues/83683)（27 评论）** — P1 回归：Windows 桌面应用每次重启会强制杀掉运行中的 messaging gateway 且不再拉起，导致 WeChat/QQ/Telegram 全部静默。这是 0.20.0 的回归问题，社区反应强烈。
- **[#4064](https://github.com/NousResearch/hermes-agent/issues/4064)（13 评论）** — CLI 鼠标支持的功能请求，从 2026-03-30 起持续获得关注，社区对终端 UX 的诉求明确。

## 5. Bug 与稳定性

### P0（已修复）

- **[#85825](https://github.com/NousResearch/hermes-agent/issues/85825) [CLOSED] Windows CRLF 导致 MEMORY.md 被整体覆盖** — `memory(action='replace'/'remove')` 在 Windows 上因 CRLF 行尾不匹配，会静默用单一条目覆盖整个 MEMORY.md/USER.md。已关闭，说明修复已落地。
- **[#83785](https://github.com/NousResearch/hermes-agent/pull/83785) [CLOSED] rewind truncation 截断错位** — P0 桌面端问题，已通过上述 PR 修复。

### P1（未修复）

- **[#83683](https://github.com/NousResearch/hermes-agent/issues/83683)（无 fix PR）** — Windows 桌面重启导致 gateway 被终止且不重启，WeChat/QQ bot 静默。当前最需要维护者响应的回归问题。

### P2

- **[#84969](https://github.com/NousResearch/hermes-agent/issues/84969)** — 持久化 Docker 终端容器复用时不校验不可变配置，docker run 配置变更后仍复用旧容器，存在安全边界隐患。
- **[#85834](https://github.com/NousResearch/hermes-agent/issues/85834)** — 桌面端 per-profile SSH 远端 resume 报 "Session not found"，但 transcript 能正常加载。
- **[#30449](https://github.com/NousResearch/hermes-agent/issues/30449)** — DeepSeek V4 的 `reasoning_content`/`reasoning_effort` 无法到达 OpenAI-compatible SSE 流，影响 Open WebUI 等前端。
- **[#86558](https://github.com/NousResearch/hermes-agent/issues/86558)** — `hermes gateway restart` 在 `XDG_RUNTIME_DIR` 属于其他用户时裸抛 `PermissionError`。
- **[#86510](https://github.com/NousResearch/hermes-agent/issues/86510)** — `read_file` 对无尾部换行文件的 `total_lines` 存在 off-by-one（`wc -l` 语义）。
- **[#86513](https://github.com/NousResearch/hermes-agent/issues/86513)** — 远端/容器后端下 file_tools 的读去重/写过期检查错误地 stat 了宿主机文件系统。
- **[#79625](https://github.com/NousResearch/hermes-agent/issues/79625)** — 桌面端会话忽略 `checkpoints.enabled: true`，文件系统检查点静默禁用。

### P3 与 duplicate

- **[#85622](https://github.com/NousResearch/hermes-agent/issues/85622)** — 外部 memory provider（both 模式）在新会话中抑制了内置 MEMORY.md/USER.md 注入，与文档声称的 "additive, never replacing" 矛盾。
- **[#86565](https://github.com/NousResearch/hermes-agent/issues/86565)** — 桌面端 session 状态点保持蓝色（running），实际阻塞在等待审批，需打开会话才变琥珀色。
- **[#86509](https://github.com/NousResearch/hermes-agent/issues/86509) [duplicate]** — `_budget_grace_call` 是死代码，grace call 机制永远无法触发。
- **[#86576](https://github.com/NousResearch/hermes-agent/issues/86576) [CLOSED]** — 跨提供商切换模型时，对话上下文中残留上一家 provider 的加密 reasoning tokens，需要剥离。

## 6. 功能请求与路线图信号

### 可能进入下一版本的功能（已有对应 PR）

- **Discord Omniscience 战役**（[#79564](https://github.com/NousResearch/hermes-agent/issues/79564)）— 单日提交 10+ 子任务（[#86535](https://github.com/NousResearch/hermes-agent/issues/86535)、[#86536](https://github.com/NousResearch/hermes-agent/issues/86536)、[#86537](https://github.com/NousResearch/hermes-agent/issues/86537)、[#86538](https://github.com/NousResearch/hermes-agent/issues/86538)、[#86539](https://github.com/NousResearch/hermes-agent/issues/86539)、[#86549](https://github.com/NousResearch/hermes-agent/issues/86549)、[#86521](https://github.com/NousResearch/hermes-agent/issues/86521) 等），其中 [PR #86440](https://github.com/NousResearch/hermes-agent/pull/86440)（结构化入站消息模型）已提交，12/12 测试通过。Discord API v10 对齐是当前明确的路线图重点。
- **GLM-5.3 支持** — [PR #86433](https://github.com/NousResearch/hermes-agent/pull/86433) 基于 5.2 现有 wiring 增加 GLM-5.3（共享 743B base、1M 上下文），`reasoning_effort` 行为与 5.2 一致。
- **Matrix 项目会话路由** — [PR #86355](https://github.com/NousResearch/hermes-agent/pull/86355) 增加 `!project <key>` 指令，按 Matrix 会话显式路由到配置仓库。
- **技能生态扩展** — [PR #86557](https://github.com/NousResearch/hermes-agent/pull/86557)（Phase 0+1.3 + 1.1）新增 data-engineering 等 6 个技能目录及 106 个社交媒体技能；[PR #86575](https://github.com/NousResearch/hermes-agent/pull/86575) 新增 secret-scanner 安全扫描技能（支持 detect-secrets/trufflehog 后端）。
- **A2A 自定义 header** — [PR #86322](https://github.com/NousResearch/hermes-agent/pull/86322) 支持按 peer 配置自定义 headers，并发送 `Hermes-A2A/1.0` User-Agent。

### 持续需求但尚未落地

- **多租户支持**（[#34352](https://github.com/NousResearch/hermes-agent/issues/34352)）— 已 3 个月，`needs-decision`，社区呼声高但无明确进展。
- **CLI 鼠标支持**（[#4064](https://github.com/NousResearch/hermes-agent/issues/4064)）— 2026-03-30 提出，仍未实现。
- **Lifecycle hooks 运行时化**（[#67798](https://github.com/NousResearch/hermes-agent/issues/67798)）— 让事件 hook 从 gateway-owned 转为 runtime-owned，覆盖 CLI/TUI/Desktop 等所有执行面，处于 `needs-decision`。
- **会话移入 Projects**（[#86561](https://github.com/NousResearch/hermes-agent/issues/86561)）— 新需求：允许将已开始会话关联/移动到 Project 中。
- **本地文件链接渲染**（[#85159](https://github.com/NousResearch/hermes-agent/issues/85159)）— 让 agent 发出的 `file:///` 链接在桌面端聊天窗口可点击打开。

## 7. 用户反馈摘要

- **多租户是真实痛点**（[#34352](https://github.com/NousResearch/hermes-agent/issues/34352)）：Memory 操作绕过 hook 系统，租户隔离不 fork 核心就做不到。用户明确表示 "Multiplayer agentic AI is the future. Hermes can and should lead"。
- **Windows 用户对桌面回归不满**（[#83683](https://github.com/NousResearch/hermes-agent/issues/83683)）：每次重启桌面应用，WeChat/QQ 网关被杀死且不拉起，必须手动重启。用户指出这是 0.20.0 的回归。
- **文档与行为不一致引发不信任**（[#85622](https://github.com/NousResearch/hermes-agent/issues/85622)）：文档声明外部 memory provider 是 additive、内置 MEMORY.md 不受影响，但实际在新会话中外部 provider 抑制了内置注入。用户对文档承诺与实际行为不符表达了明确不满。
- **DeepSeek 生态用户的 SSE 断点**（[#30449](https://github.com/NousResearch/hermes-agent/issues/30449)）：Open WebUI 前端接 Hermes + DeepSeek V4 时，reasoning 内容完全不可见，`reasoning_effort` 配置被静默丢弃，影响深度推理场景。
- **终端 UX 需求长期存在**（[#4064](https://github.com/NousResearch/hermes-agent/issues/4064)）：鼠标选择、光标定位、滚轮滚动在 CLI 中不可用，用户已等待近 5 个月。

## 8. 待处理积压

以下事项长期未获解决或处于决策停滞，建议维护者重点关注：

- **[#4064](https://github.com/NousResearch/hermes-agent/issues/4064)** — CLI 鼠标支持，自 2026-03-30 起已 4 个多月无进展。
- **[#34352](https://github.com/NousResearch/hermes-agent/issues/34352)** — 多租户方案，自 2026-05-29 起挂着 `needs-decision`，社区已有生产级修复方案，等待官方采纳或设计决策。
- **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616)** — skills-index 持续 degraded，自动探针已多次报警（索引 29.8h 过期），Skills Hub 对开发者文档体验有直接影响。
- **[#68876](https://github.com/NousResearch/hermes-agent/issues/68876)** — 桌面端切换 provider/model 后 UI 与真实请求状态脱节，已近 1 个月未解决。
- **[#79625](https://github.com/NousResearch/hermes-agent/issues/79625)** — 桌面端 `checkpoints.enabled` 配置不生效，已 10 天无响应。
- **[#84969](https://github.com/NousResearch/hermes-agent/issues/84969)** — Docker 终端复用忽略 config drift，涉及安全边界，等待决策。
- **27 个 PR 待合并** — 其中含 [PR #64384](https://github.com/NousResearch/hermes-agent/pull/64384)（Codex stream 归一化）、[PR #70375](https://github.com/NousResearch/hermes-agent/pull/70375)（桌面日志脱敏）、[PR #67454](https://github.com/NousResearch/hermes-agent/pull/67454)（跨进程 turn 序列化）等有价值的 PR，积压时间已超过一个月的部分需要优先审查。

---

**日报数据来源**：Hermes Agent GitHub 仓库（NousResearch/hermes-agent），数据窗口为 2026-08-14 至 2026-08-15。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-08-15

## 今日速览

过去24小时内，PicoClaw 项目共产生 12 项更新（3 条 Issue、9 条 PR），活跃度处于**中等偏上**水平。核心焦点集中在 **#3269 MCP 服务器连接失败导致聊天界面停止响应**的高严重度问题上，社区已快速提交修复 PR #3337，响应及时。功能开发方面，DingTalk 图片消息、DashScope TTS、模型默认名称刷新等 PR 均已合并，功能矩阵持续扩大。需关注的是，8 个历史 PR/Issue 因长期未活动被 `stale` 机器人标记或关闭，反映出部分积压工作有待维护者跟进。

---

## 项目进展

今日合并/关闭了 5 个 PR，重点包括：

- **[#3270 feat: add DashScope TTS provider and WeChat audio file sending](https://github.com/sipeed/picoclaw/pull/3270)**（已合并）— 新增阿里云 DashScope TTS 语音合成支持，并实现微信渠道音频文件发送能力。TTS 能力进一步丰富了多模态交互。
- **[#3271 chore(providers): update default model names to 2026-07 latest](https://github.com/sipeed/picoclaw/pull/3271)**（已合并）— 刷新 9 个模型提供商的默认模型列表，更新至 2026 年 7 月最新版本号（如 OpenAI gpt-5.6 系列），确保默认配置不滞后于厂商发布节奏。
- **[#3279 fix(seahorse): prevent tool-call format leakage into LLM summaries](https://github.com/sipeed/picoclaw/pull/3279)**（已合并）— 修复 `partsToReadableContent` 将工具调用格式泄漏到用户消息中的 bug，提升 LLM 摘要的干净度。
- **[#3283 fix(dingtalk): support picture/image message inbound](https://github.com/sipeed/picoclaw/pull/3283)**（已合并）— 为钉钉渠道增加图片消息接收能力，并引入 OpenAPI token 缓存机制，支持消息降级处理。
- **[#3303 build(deps): bump actions/stale from 10 to 11](https://github.com/sipeed/picoclaw/pull/3303)**（已合并）— 例行依赖更新。

在**待合并**队列中，**[#3337 Fix/mcp failure hangs agent loop](https://github.com/sipeed/picoclaw/pull/3337)** 值得特别关注——它直接修复今日最活跃的 Issue #3269，是当前最优先级的补丁。另有 3 个 PR 仍在开放中，详见下文「待处理积压」。

> 📌 整体评估：项目在多渠道适配（钉钉、微信）、语音能力及稳定性修复上持续产出，正稳步向更丰富的消息生态演进。

---

## 社区热点

- **[#3269 [BUG] MCP server connection fails → agent loop hangs → chat UI stops replying](https://github.com/sipeed/picoclaw/issues/3269)**（评论 5，👍 1）— 今日讨论热度最高。该问题描述了当 MCP 服务器连接失败时，`AgentLoop.Run` 直接退出导致整个聊天界面永久无响应的严重缺陷。用户 `ruiyigen` 在 nightly 版本（`2cf030d2`）上复现，使用 Qwen3 模型与 Go 1.25.11 环境。修复 PR #3337 已经提交。

> 💡 社区诉求分析：MCP（Model Context Protocol）是 PicoClaw 连接外部工具与数据源的关键通道，用户对单点故障的容忍度很低。该 Issue 的高互动表明 MCP 稳定性是当前用户的核心关切之一，**「连接失败时的优雅降级」**是明确期望。

---

## Bug 与稳定性

| 严重度 | Issue/PR | 描述 | 状态 |
|--------|----------|------|------|
| 🔴 高 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP 连接失败导致 agent 循环挂起，聊天接口完全停止响应 | **已有修复 PR [#3337](https://github.com/sipeed/picoclaw/pull/3337)**，待合入 |
| 🟡 中 | [#3319](https://github.com/sipeed/picoclaw/pull/3319) | `exec` 工具的 per-run `timeout` 参数被忽略，同步执行始终使用全局超时；`background`/`pty` 类型声明为 string 而非 boolean | **修复 PR 开放中**（stale） |
| 🟡 中 | [#3308](https://github.com/sipeed/picoclaw/issues/3308) | 社区代码审查指出 SeaHorse、Channel Manager、Hooks 存在并发风险、goroutine 泄漏及内存/速度优化空间 | 已被 stale 标记关闭（原始 Issue） |

> 🔧 稳定性评价：MCP 挂起问题得到快速响应，但 `#3319` 的 exec 超时修复长时间未被合并，这类影响工具执行可靠性的修复建议尽快处理。

---

## 功能请求与路线图信号

- **[#3307 [Feature] session list/switch command for Telegram](https://github.com/sipeed/picoclaw/issues/3307)** — 用户请求为 Telegram 等非 Web 渠道增加会话列表/切换能力。Web UI 已有完整 session 管理，但 Telegram 用户无法查看、切换或删除会话。这一需求指向**多端能力对齐**的路线图方向，预计后续版本会逐步推进会话管理的跨渠道支持。
- **[#3200 feat(models): add configurable default fallback chain](https://github.com/sipeed/picoclaw/pull/3200)** — 为模型页增加「默认模型 + 备用模型链」的可配置能力，支持排序与持久化。该 PR 目前已带 `stale` 标签但仍开放，需要维护者决策是否纳入下一版本。
- **[#3270 DashScope TTS + 微信语音](https://github.com/sipeed/picoclaw/pull/3270)** 已合并，综合来看，**语音能力（TTS）+ 多IM渠道扩展**是当前最清晰的功能演进主线。

---

## 用户反馈摘要

- **痛点：MCP 单点故障影响全局可用性**（来自 #3269）— 用户对「一个外部服务挂了，整个对话就永远卡死」的现象反馈强烈，expectation 是**至少能报错退出，最好能自动恢复**。修复 PR #3337 通过在 agent loop 内部吞掉 MCP 初始化错误来让对话继续，符合用户预期。
- **审查者积极反馈**（来自 #3308）— 社区成员对 PicoClaw「在 10 美元硬件、<10MB RAM 上原生 Go 运行、秒级启动」的工程能力表示赞赏，同时认真指出了并发模型与 goroutine 管理方面的改进空间，说明社区已出现**深度代码审查者**，项目技术声誉在积累。
- **功能缺失的挫败感**（来自 #3307）— 用户对「Web UI 能做但 Telegram 不能做」的反差表达不便，期望功能在所有渠道保持一致体验。

---

## 待处理积压

以下为需要维护者关注的长期未合入/未响应事项：

| 类型 | 编号 | 时间 | 说明 |
|------|------|------|------|
| PR | [#3222 refactor(deltachat)](https://github.com/sipeed/picoclaw/pull/3222) | 2026-07-03 创建 | DeltaChat 渠道大规模清理与重构，-200LOC，含弃用 legacy 特性、删除硬编码 relay 列表、调整 API 命名等。已悬挂 6 周+ |
| PR | [#3200 feat(models): fallback chain](https://github.com/sipeed/picoclaw/pull/3200) | 2026-07-01 创建 | 模型默认链功能，被 8 个历史 PR 中最长，已标 `stale` |
| PR | [#3319 fix(tools): exec timeout](https://github.com/sipeed/picoclaw/pull/3319) | 2026-08-07 创建 | 修复 exec 工具超时与布尔选项问题，增强工具可靠性 |
| PR | [#3337 Fix/mcp failure hangs agent loop](https://github.com/sipeed/picoclaw/pull/3337) | 2026-08-14 创建 | **最新且高优先级**，建议优先 review 并合入 |
| Issue | [#3269 MCP hang](https://github.com/sipeed/picoclaw/issues/3269) | 2026-07-20 | 可随 #3337 合入后关闭 |

> ⚠️ 除 `#3337` 为当日新提交外，其余 PR 均已被 `stale` 机器人标记。考虑到 stale 策略已关闭了 8 个历史 PR/Issue，建议维护者定期批量梳理长期积压的 PR，明确「合入 / 关闭 / 接手」的处置结果，避免有价值的工作被自动清理。

---

*本日报基于 sipeed/picoclaw GitHub 仓库 2026-08-15 数据自动生成。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-15

## 今日速览

过去 24 小时内 NanoClaw 保持活跃的开发节奏：新提交 2 个 Issues，均为 bug 报告；PR 侧共 11 条动态，其中 8 条待合并、3 条已关闭（含 1 个核心修复合入）。项目当前处于**多线修复 + 新频道功能开发并行**的阶段，核心团队在加固供应链安全验证链路（signature approver），社区则在集中反馈两个真实痛点：**setup.sh 对旧版 Node 的处理失效**，以及**预构建镜像在无 AVX2 的老 CPU 上直接崩溃**。两项问题均已有人提交修复 PR，显示社区响应迅速、项目健康度良好。无新版本发布。

---

## 版本发布

无

---

## 项目进展

今日无新功能合入，但有 1 个关键修复 PR 合并，以及 2 个 core-team 的自动化验证测试 PR 按计划关闭。

### ✅ 合并（Closed & Merged）

- **[#3243] [core-team] verify-agent-image: arming auto-merge is not a verdict** — 作者: gavrielc
  修复了 CI 中 `Enable auto-merge` 步骤的错误判定逻辑：该步骤在 draft PR、`allow_auto_merge` 关闭、或临时 API 错误时都会失败，但这些失败与镜像本身质量无关。修复后 `verify` 作为 required check，其结论将不再被 auto-merge 步骤干扰，**供应链验证链路的可靠性得到实质提升**。
  🔗 https://github.com/nanocoai/nanoclaw/pull/3243

### 📋 按计划关闭的测试 PR（DO NOT MERGE）

- **#3244**（live-fire signature approver，take 2）— 按计划关闭，验证 approve 流程端到端行为。 🔗 https://github.com/nanocoai/nanoclaw/pull/3244
- **#3242**（live-fire test of the signature approver）— 按计划关闭，确认自动验证链路可运行。 🔗 https://github.com/nanocoai/nanoclaw/pull/3242

**整体判断**：核心团队今日完成了对 "verify → approve → cosign verify → approving review" 自动化链路的第二次实战验证，配合 #3243 的合并，**供应链安全验证机制已趋于稳定**。项目在安全基础设施上的投入正在收尾。

---

## 社区热点

今日 Issues 和 PR 的评论数均为 0，但以下两个话题因**直接影响新用户上手体验**而值得重点关注：

### 讨论焦点 1：setup.sh 对旧版 Node 的错误处理（#3248 + 对应 PR #3249）

- **Issue #3248** 由 glifocat 详细分析了 `setup.sh` 中 `check_node` 的缺陷：版本检查将 `major >= 20` 视为通过，但 `install-node.sh` 在检测到任何已存在的 Node 时会直接短路，导致"版本太旧"的分支实际上永远不会触发安装新版本。**这是首次安装场景下的真实用户痛点**，影响面覆盖所有使用旧 Node 环境的新用户。
  🔗 https://github.com/nanocoai/nanoclaw/issues/3248
- 作者同时提交了修复 PR **#3249**（待合并），显示社区 contributors 具备完整的"发现问题 → 定位 → 修复"链路能力。
  🔗 https://github.com/nanocoai/nanoclaw/pull/3249

### 讨论焦点 2：预构建镜像在无 AVX2 CPU 上 SIGILL 崩溃（#3245）

- **Issue #3245** 由 sergeykad 报告：默认的 `NANOCLAW_HARDENED_IMAGE=true` 拉取的 agent 镜像内含 Bun 二进制，针对非 baseline x64 目标构建（要求 AVX2）。在 Intel Tremont/Elkhart Lake Atom 系列（如 Celeron J6413/N5105）等无 AVX2 的 CPU 上会直接 SIGILL。**影响 NAS、软路由等低功耗设备用户**，这可能构成 NanoClaw 向轻量级边缘设备渗透的障碍。
  🔗 https://github.com/nanocoai/nanoclaw/issues/3245

---

## Bug 与稳定性

按严重程度从高到低排列：

### 🔴 高 — 预构建镜像在无 AVX2 CPU 上崩溃（#3245）
- **症状**：`SIGILL`（非法指令），agent 完全无法启动
- **影响面**：所有缺少 AVX2 指令集的 x64 CPU（Elkhart Lake/Tremont Atom、部分老款奔腾/赛扬）
- **触发条件**：使用默认 `NANOCLAW_HARDENED_IMAGE=true` 拉取预构建镜像
- **修复状态**：⚠️ 暂无对应 fix PR
- 🔗 https://github.com/nanocoai/nanoclaw/issues/3245

### 🟠 中 — setup.sh 的 "Node missing or too old" 分支形同虚设（#3248）
- **症状**：`setup.sh` 检测到 Node 版本过旧，但 `install-node.sh` 因已有 Node 而短路，不执行安装 → 用户被困在旧版本环境
- **影响面**：所有 Node 版本 < 20 的新用户安装流程
- **修复状态**：✅ 已有 PR #3249（glifocat，待合并）
- 🔗 https://github.com/nanocoai/nanoclaw/issues/3248 | 修复 PR: https://github.com/nanocoai/nanoclaw/pull/3249

### 🟡 低 — cron 字符串解析失败导致的重复报错（#3247）
- **症状**：代理手写非法 cron 表达式（如 `0 21-5 * * *`，min>max）时，`handleRecurrence` 每个 sweep tick 都会重复记录解析错误，且问题行永远得不到修正
- **修复**：已有 PR #3247 将错误 cron 标记为"退役"而非反复报错
- 🔗 https://github.com/nanocoai/nanoclaw/pull/3247

### 🟡 低 — Windows 下 orphan cleanup 静默失效（#3246）
- **症状**：`cleanupOrphans()` 通过 shell 传递 `--format '{{.Names}}'` 时使用 POSIX 单引号，Windows 的 `cmd.exe` 不会剥离引号，导致命令失败且无任何报错
- **修复**：已有 PR #3246
- 🔗 https://github.com/nanocoai/nanoclaw/pull/3246

---

## 功能请求与路线图信号

### 📡 强烈信号：Dial 频道适配器（新增 SMS + AI 语音通话渠道）

两个关联 PR（#3050、#3041）均由 OmriBenShoham 提交，分别覆盖：
- **#3041**：核心 Dial channel adapter，支持 SMS 和 AI voice calls
- **#3050**：将 Dial 加入 setup 向导的频道选择器，并更新相关 skills

两个 PR 均为 `[PR: Feature, PR: Skill, follows-guidelines]` 标签，且处于 OPEN 状态 1 个月有余，说明**社区对多频道接入有持续需求**，Dial 是一个完整的、经过设计的新集成。若合入，NanoClaw 的频道支持面将从 IM 扩展到传统电信网络。
🔗 https://github.com/nanocoai/nanoclaw/pull/3041 | https://github.com/nanocoai/nanoclaw/pull/3050

### 📥 持续积压的附件处理修复

- **#2752**（inbound Discord attachments 仅暴露 URL 而无可读内容）— 已存在 2 个月，仍为 OPEN。这个修复对 Discord 重度用户至关重要。
  🔗 https://github.com/nanocoai/nanoclaw/pull/2752

---

## 用户反馈摘要

今日 Issues/PR 评论数为 0，但从提交内容可提炼以下真实用户场景：

| 用户类型 | 场景 | 反馈 |
|---------|------|------|
| **低功耗设备用户**（NAS/软路由） | 在 Celeron J6413/N5105 等平台上运行预构建 agent | 😠 镜像直接 SIGILL，无法使用；期望提供 baseline x64 构建或编译期指令集说明 |
| **新用户 / 旧环境用户** | 机器上已有 Node 但版本 < 20，运行 setup.sh | 😕 安装脚本"检测到问题但不去解决"，流程卡死，且无清晰报错 |
| **Discord 重度用户** | 在 Discord 中向 agent 发送文本片段或图片 | 😞 agent 只看到 `[file: message.txt]` 的占位符，拿不到内容（PR #2752，已等待 2 个月） |
| **长期维护者视角**（core-team） | 验证供应链签名审批流程 | ✅ 经过两次 live-fire 测试并修复判定逻辑，自动验证链路已趋于可信 |

---

## 待处理积压

### ⚠️ 长期未合并的附件修复 PR（需维护者关注）

- **#2752** [OPEN] fix: stage inbound attachments that expose only a url (Discord)
  创建于 2026-06-12，已开放 **2 个月+**，是 Discord 用户可感知的功能缺陷修复，建议安排 review。
  🔗 https://github.com/nanocoai/nanoclaw/pull/2752

- **#2427** [OPEN] fix: attachment issues（作者 b1ek，创建于 2026-05-12，已开放 **3 个月+**）
  🔗 https://github.com/nanocoai/nanoclaw/pull/2427

### ⚠️ 今日新增但需尽快跟进的修复

- **#3249**（setup.sh 旧 Node 处理）— 新用户 onboarding 阻塞项，建议优先合入 🔗 https://github.com/nanocoai/nanoclaw/pull/3249
- **#3245**（AVX2 崩溃）— 暂无修复 PR，如项目计划支持边缘设备，需考虑发布 baseline x64 构建或提供构建选项 🔗 https://github.com/nanocoai/nanoclaw/issues/3245

### ⚠️ 长期开放的功能型 PR（接近 1 个月）

- **#3050 + #3041**（Dial 频道集成）— 已开放 32 天，功能完整、符合贡献规范，但尚未获得 review。如路线图暂不包含该渠道，建议维护者明确回应，避免 contributor 长期等待。
  🔗 https://github.com/nanocoai/nanoclaw/pull/3050 | https://github.com/nanocoai/nanoclaw/pull/3041

---

*以上数据基于 2026-08-15 00:00 UTC 的 GitHub 快照，分析对象为 nanocoai/nanoclaw 仓库。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-08-15

## 1. 今日速览

过去 24 小时项目整体活跃度较低：Issues 无任何新增、活跃或关闭记录，PR 仅 1 条且已关闭/合并，无新版本发布。该 PR 对 SQLite 内存数据库路径增加了可配置性，属于基础设施层的实用性增强，虽体量不大但当日提交当日合并，说明维护者响应及时。综合来看，项目处于正常维护节奏中的平静期，社区外部贡献积极性一般，核心功能开发暂缓。

| 指标 | 数值 |
|------|------|
| Issues 新开/活跃 | 0 |
| Issues 关闭 | 0 |
| PR 新增 | 1 |
| PR 合并/关闭 | 1 |
| 新版本发布 | 0 |

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

**唯一合并/关闭 PR：SQLite 内存数据库路径可配置化**

- **PR [#986](https://github.com/nullclaw/nullclaw/pull/986)（GEN-548）** 由外部贡献者 gently-whitesnow 提交，当日创建当日关闭，状态为 CLOSED（合并）。

**该 PR 的核心变更：**

1. 新增 `memory.database_path` 配置项，用于指定 SQLite 后端主记忆引擎的数据库文件路径；
2. 当该配置为空时，保持原有行为（即 `<workspace>/memory.db`）；
3. 支持相对路径（基于工作区解析）与绝对路径（适配只读工作区部署场景）；
4. 更新了相关配置文档。

**项目推进意义：** 此项改进使得 NullClaw 能够在更严格的部署环境中运行（如容器化只读文件系统、共享存储场景），消除对默认工作区路径的硬编码依赖，属于低风险、高实用性的配置灵活性提升。项目整体在可部署性和运维友好度方面迈出了一小步。

## 4. 社区热点

今日仅有一条 PR（[#986](https://github.com/nullclaw/nullclaw/pull/986)），无 Issues 动态。

该 PR 无评论、无点赞，讨论热度极低，尚未形成社区互动。从内容本身看，这一改动背后反映的诉求是：

- **只读工作区部署**：部分用户希望将工作区挂载为只读，而默认的 `workspace/memory.db` 位置会成为障碍；
- **多实例隔离**：可配置数据库路径支持为不同实例指定独立存储位置，便于在共享环境中运行多个 NullClaw 实例；
- **自定义存储策略**：允许用户将数据库落盘到更合适的位置（如更快的磁盘、特定的持久化目录）。

虽然当前讨论不多，但这类“让行为更可配置”的请求往往代表着用户在生产环境落地的真实需求。

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归问题。Issues 板块为完全空白，未发现需要紧急关注或修复的稳定性隐患。

## 6. 功能请求与路线图信号

今日无新功能请求的 Issue 提出。唯一的 PR（[#986](https://github.com/nullclaw/nullclaw/pull/986)）本身即对应内部任务 GEN-548，表明该功能是项目内部规划的一部分，而非社区请求驱动。

**路线图信号分析：**

- 该 PR 的合并意味着项目正在推进“部署灵活性与环境适配”方向的工作；
- 合并速度之快（当天提交当天合入）暗示该能力可能是即将发布的版本中某一环节的依赖前置工作；
- 后续值得关注：是否会有更多关于存储后端可配置化的改动（如内存引擎与文件引擎的切换策略），以及是否会有基于此项功能的新版本发布。

## 7. 用户反馈摘要

由于今日无 Issues 评论且该 PR 下无讨论，无法提炼直接的用户反馈。从 PR 内容可间接推断的用户需求点包括：

- 希望避免对工作区路径的强依赖；
- 需要在只读文件系统的容器中运行 NullClaw；
- 希望数据库文件位置可自定义以适配不同存储架构。

这些需求均得到了功能层面的响应，预计合并后社区相关使用反馈将在未来数日体现。

## 8. 待处理积压

今日无长期未响应或处于积压状态的 Issue / PR 值得特别标注。项目积压情况良好，唯一活跃 PR 已被及时处理，无停滞迹象。

---

*数据来源：NullClaw GitHub 仓库（github.com/nullclaw/nullclaw），统计窗口为 2026-08-14 至 2026-08-15。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-15

## 1. 今日速览

过去 24 小时 IronClaw 保持高强度迭代：25 条 Issue 更新（16 条新开/活跃、9 条关闭），47 条 PR 更新（24 条待合并、23 条已合并/关闭），无新版本发布。项目主线集中在 v1.3.0 自动化可靠性史诗（[#6879](https://github.com/nearai/ironclaw/issues/6879)）的结构化拆解，同日新增 4 条子任务（[#7644](https://github.com/nearai/ironclaw/issues/7644)–[#7647](https://github.com/nearai/ironclaw/issues/7647)）。1.2.0 发布线已合并回 main（[#7657](https://github.com/nearai/ironclaw/pull/7657)），unbound-turns 阶段一（[#7562](https://github.com/nearai/ironclaw/pull/7562)）及 Telegram/扩展/认证多项修复合入主干，整体健康度良好，QA 反馈修复闭环迅速。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 项目进展

**已合并/关闭的关键 PR：**

- **unbound-turns 基础落地** — [#7562](https://github.com/nearai/ironclaw/pull/7562)（CLOSED，XL，core）：prepared-context 接受门、unbound run lane、内核 binding-ref 删除，为无界会话模型奠定基础。完整 switchover 的 stacked PR [#7634](https://github.com/nearai/ironclaw/pull/7634)（XL，已通过 71 条一致性审计）仍待合并。
- **1.2.0 发布线回归 main** — [#7657](https://github.com/nearai/ironclaw/pull/7657)（CLOSED）：合并验证过的 release/2026-08-11 线，forward-port 状态保留迁移、Windows 文件系统/smoke 修复与 artifact 升级 canary。独立验证的补丁包 [#7663](https://github.com/nearai/ironclaw/pull/7663) 待合并。
- **Telegram 链接缺陷修复** — [#7658](https://github.com/nearai/ironclaw/pull/7658)（CLOSED）：识别迁移 DC 上的 2FA 门，明确登录码到达位置（覆盖首次 linked-device QA 的两大缺陷）。
- **Hosted MCP OAuth 支持** — [#7665](https://github.com/nearai/ironclaw/pull/7665)（CLOSED）：接收 MKT1 所需的 origin-scoped hosted-MCP OAuth 形态，并贯通 manifest 持久化、DCR、token exchange 与 refresh。
- **扩展提供商认证诊断透传** — [#7668](https://github.com/nearai/ironclaw/pull/7668)（CLOSED）：保留 GitHub 提供商错误信息与稳定错误码，贯通 WASM/ABI/能力门/durable gate 路径，避免运行时 401 被折叠为笼统 re-auth。
- **扩展卡片/安装结果真实性修复** — [#7666](https://github.com/nearai/ironclaw/pull/7666)（CLOSED）：覆盖 QA [#7660](https://github.com/nearai/ironclaw/issues/7660)，修正设备链接安装引导与卡片状态语义。
- **生产 DB 写负载测量基线** — [#7652](https://github.com/nearai/ironclaw/pull/7652)（CLOSED）：测量 10 次内置能力调用 + 11 次模型尝试的 canonial turn 写负载，为 DB 压力史诗（[#7591](https://github.com/nearai/ironclaw/issues/7591)）建立回归基准。
- **CI 覆盖率基线校准** — [#7655](https://github.com/nearai/ironclaw/pull/7655)（CLOSED）：将 slack/telegram 集成测试覆盖率下限重设为实测值，消除门禁噪声。

**关键里程碑 Issue 关闭：** 结构化执行规范（[#7532](https://github.com/nearai/ironclaw/issues/7532)）、DB 写测量 Tier 0（[#7592](https://github.com/nearai/ironclaw/issues/7592)）、前端 i18n 覆盖修复（[#7565](https://github.com/nearai/ironclaw/issues/7565)）、共享 SearchField（[#7569](https://github.com/nearai/ironclaw/issues/7569)）、QA 周史诗（[#7414](https://github.com/nearai/ironclaw/issues/7414)）、废弃前端面清理（[#7520](https://github.com/nearai/ironclaw/issues/7520)）、按用户 LLM 选择（[#7183](https://github.com/nearai/ironclaw/issues/7183)）、DOCX 损坏（[#6869](https://github.com/nearai/ironclaw/issues/6869)）。

## 4. 社区热点

- **自动化可靠性史诗（[#6879](https://github.com/nearai/ironclaw/issues/6879)）**：当前最核心的讨论主线。自 7/29 开启以来持续活跃——自动化运行"时灵时不灵"，同一 prompt 有时成功有时无产出，审计结论为触发→运行管线的**结构性问题**而非模型噪声。今日 serrrfirat 连续提交 4 条 v1.3.0 子任务：预飞行授权与租约（[#7646](https://github.com/nearai/ironclaw/issues/7646)）、per-automation 模型固定（[#7645](https://github.com/nearai/ironclaw/issues/7645)）、确定性无交付抑制（[#7647](https://github.com/nearai/ironclaw/issues/7647)）、arming 前的结构化验证（[#7644](https://github.com/nearai/ironclaw/issues/7644)）。配套 PR [#7651](https://github.com/nearai/ironclaw/pull/7651) 已实现 `[SILENT]` 抑制契约——诉求本质是让无人值守运行具备**可预测、可验证、可审计**的交付语义。
- **可插拔记忆系统（[#7664](https://github.com/nearai/ironclaw/issues/7664)）**：跟踪外部记忆系统通过配置绑定，首个消费者为第三方 **Mnesis Core**。配套 PR [#7661](https://github.com/nearai/ironclaw/pull/7661) 将记忆提供方从编译期 factory 分支改为配置绑定，是架构可插拔性的重要信号，引入外部生态协作。
- **WebUI Ask User 结构化卡片（[#7653](https://github.com/nearai/ironclaw/issues/7653)）**：OMP 风格的模型 `ask` 工具，复用终端 `AskUserReply` 机制，非阻塞式提问为 WebUI 交互范式带来新可能。

## 5. Bug 与稳定性

**P2 QA 缺陷（Railway 实例 ironclaw-qa-testing-libsql，来源 [#7414](https://github.com/nearai/ironclaw/issues/7414) QA 周）：**

- **Slack 连接状态误报** — [#7660](https://github.com/nearai/ironclaw/issues/7660)：连接完全正常但 UI 错误显示 **Finish Setup** 徽章与 **Reconnect** 按钮。已有修复 PR [#7666](https://github.com/nearai/ironclaw/pull/7666)。
- **扩展状态跨用户泄漏** — [#7659](https://github.com/nearai/ironclaw/issues/7659)：当前用户看到其他用户安装的扩展，疑似租户隔离缺陷，**尚无对应 fix PR**，安全敏感性较高。
- **Telegram MP4 附件失败** — [#7662](https://github.com/nearai/ironclaw/issues/7662)：报 `invalid_value (attachments.mime_type)`，文件已识别为 video/mp4 仍被拒，**尚无对应 fix PR**，直接影响 Telegram 渠道交付可用性。
- **Telegram 手机模式登录码提示** — [#7667](https://github.com/nearai/ironclaw/issues/7667)：`PHONE_MIGRATE_1` 后重发成功但用户未收到码，提示未反映 `sentCode.type_`。相关问题 [#7658](https://github.com/nearai/ironclaw/pull/7658) 已修复 2FA 门，本条仍开放。

**结构性/史诗级：**

- **自动化运行不可靠** — [#6879](https://github.com/nearai/ironclaw/issues/6879)：v1.3.0 主线，多子任务推进中，小模型（DeepSeek V4 Flash）上表现尤其不稳定。

**已解决：** DOCX 损坏（[#6869](https://github.com/nearai/ironclaw/issues/6869)）已关闭，Word 兼容性问题告一段落。

## 6. 功能请求与路线图信号

- **v1.3.0 自动化可靠性系列**（[#7644](https://github.com/nearai/ironclaw/issues/7644)、[#7645](https://github.com/nearai/ironclaw/issues/7645)、[#7646](https://github.com/nearai/ironclaw/issues/7646)、[#7647](https://github.com/nearai/ironclaw/issues/7647)）：预飞行授权、模型固定、确定性 SILENT 交付均已带 PR 或明确设计，基本锁定进入 v1.3.0。
- **可插拔记忆（[#7664](https://github.com/nearai/ironclaw/issues/7664)）**：MCP-backed 提供方 PR [#7661](https://github.com/nearai/ironclaw/pull/7661) 在途，引入外部记忆生态（Mnesis Core），属架构级扩展。
- **Slack-to-Console bridge（[#7656](https://github.com/nearai/ironclaw/issues/7656)）**：已关闭，方向获认可，待落地实现。
- **Ask User 卡片（[#7653](https://github.com/nearai/ironclaw/issues/7653)）**：基于现有 `AskUserReply` 机制，风险可控，预计成为 WebUI 交互新能力。
- **前端设计系统收口**（[#7637](https://github.com/nearai/ironclaw/issues/7637)、[#7638](https://github.com/nearai/ironclaw/issues/7638)、[#7639](https://github.com/nearai/ironclaw/issues/7639)）：组件 prop 类型化、统一 InlineNotice、toast 替换 alert，低风险工程质量提升，预计随下个前端迭代合并。
- **ACP harness executor**（[#7624](https://github.com/nearai/ironclaw/issues/7624)、PR [#7648](https://github.com/nearai/ironclaw/pull/7648)）：实验性插拔循环执行器，当前唯一应构建的 pluggable-loops 工作项，属 v0 验证阶段。

## 7. 用户反馈摘要

- **小模型自动化效果不稳定**（[#6879](https://github.com/nearai/ironclaw/issues/6879)）：同一 prompt 在 DeepSeek V4 Flash 上时而成功时而无产出，用户对无人值守场景的可预测性有强烈诉求。
- **Slack 连接 UX 困惑**（[#7660](https://github.com/nearai/ironclaw/issues/7660)）：连接实际可用但 UI 显示未完成设置，误导用户反复操作，属信任损伤类问题；修复 PR 已合入对应批次。
- **扩展隐私疑虑**（[#7659](https://github.com/nearai/ironclaw/issues/7659)）：看到其他用户安装的扩展引发租户隔离担忧，涉及多用户数据的边界信任。
- **Telegram 视频发送阻断**（[#7662](https://github.com/nearai/ironclaw/issues/7662)）：MP4 上传被 mime_type 校验误拒，直接影响 Telegram 作为交付渠道的核心场景。
- **DOCX 兼容性差距**（[#6869](https://github.com/nearai/ironclaw/issues/6869)，已关闭）：外部用户 Davin Basi 指出 ChatGPT/Claude 可轻松生成 Word 可读 DOCX，IronClaw 此前失败，该问题已关闭（推测已修复），提示生产力场景对标竞品的标准。

## 8. 待处理积压

- **[#6879 自动化可靠性史诗](https://github.com/nearai/ironclaw/issues/6879)**：开启 17 天，v1.3.0 核心，多条子任务与 PR 并行推进中，需持续跟踪收敛。
- **[PR #7456](https://github.com/nearai/ironclaw/pull/7456)（XL，risk: medium，开启 5 天）**：durable storage 改为 profile-agnostic，涉及租户/工作区隔离安全边界，建议优先 review。
- **[PR #7379](https://github.com/nearai/ironclaw/pull/7379) / [PR #7378](https://github.com/nearai/ironclaw/pull/7378)（doc-truth 系列，开启 8 天）**：docs-live 发布分支与 doc-fact 契约测试，解决文档与发布版本漂移的长期工程债，均待合并。
- **[PR #7255](https://github.com/nearai/ironclaw/pull/7255)（开启 10 天）**：APDD 治理框架评估与集成提案，纯文档、低风险，可择机合入。
- **[PR #7516](https://github.com/nearai/ironclaw/pull/7516)（XL，new contributor，开启 3 天）**：IronHub agent link 操作员界面，新贡献者 PR，需关注 review 反馈及时性。

---

*数据来源：nearai/ironclaw GitHub 仓库，统计窗口 2026-08-14 ~ 2026-08-15。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-15

> 数据来源：GitHub (netease-youdao/LobsterAI) | 统计周期：2026-08-14 ~ 2026-08-15

---

## 1. 今日速览

过去 24 小时 LobsterAI 处于**极高活跃度**状态：共产生 27 条 PR 更新（22 条合并/关闭、5 条待合并），1 个新版本发布，核心维护者 `fisherdaddy` 集中提交了十余条 renderer/cowork 修复。但 Issues 侧仅有 2 条更新（0 关闭），并向社区释放一个强烈信号——**用户在催促新模型（v4pro）支持**。当日最重要的进展是将 `release/2026.7.30` 分支合入 `main`（67 commits、264 files 变更），正式落地团队版账号/配额流程及 Skills、Connectors 体验升级。整体判断：**核心迭代快、社区响应待加速，技术债清理（stale PR/Issue）是当前主要短板。**

---

## 2. 版本发布

### 🚀 LobsterAI 2026.8.14（2026-08-14 发布）

[查看 Release](https://github.com/netease-youdao/LobsterAI/releases)

**主要更新内容：**

- **feat(sidebar): 支持签到与 banner 轮播**（[#2411](https://github.com/netease-youdao/LobsterAI/pull/2411)，by @btc69m979y-dotcom）：侧边栏新增签到入口和 banner 轮播能力，为产品化运营铺路。
- **feat(sidebar): 新增多 Agent 任务活动筛选器**（[#2418](https://github.com/netease-youdao/LobsterAI/pull/2418)，by @liuzhq1986）：侧边栏任务列表支持按 Agent 维度筛选，便于多 Agent 场景下的任务管理。
- 另有若干未在 Release Notes 中详述的 sidebar 改动，与即将发布的团队版功能联动。

**⚠️ 破坏性变更与迁移注意：**

- 本版本 Release Notes 未声明破坏性变更。
- 若你的工作流依赖侧边栏广告位固定展示或 banner 默认行为，升级后需要重新核对 UI 配置。
- 建议关注后续 `2026.7.30` 团队版功能的迁移文档（见下方 PR #2498），其中包含账号和配额系统调整。

---

## 3. 项目进展

### 🔀 最重要合入：`Release: 2026.7.30` 合并至 main（[#2498](https://github.com/netease-youdao/LobsterAI/pull/2498)）

这是过去 24 小时项目推进的**核心事件**——由 `fisherdaddy` 将 `release/2026.7.30` 分支合入主分支：

- **规模**：较 `origin/main` 领先 67 commits，变更 264 个文件（`+24,736 / -4,253`）
- **核心内容**：
  - 引入 **Team Edition 账号与配额流程**
  - 全面刷新 **Skills 与 Connectors 体验**
  - 覆盖 renderer、docs、main、openclaw、cowork、im、artifacts 七大模块

> ⚠️ 注意：该 PR 将 7 月 30 日的发布内容延迟了约两周才合入主分支，提示 **LobsterAI 的 release→main 合入流程存在明显延迟**，建议维护者优化发布节奏。

### 🛠️ 其他已合并的重要 PR（均由核心维护者主导）

| PR | 模块 | 说明 |
|---|---|---|
| [#2490](https://github.com/netease-youdao/LobsterAI/pull/2490) | cowork/artifacts | 浏览器标注截图以编号附件卡片展示，并在专用 artifact 面板打开，取代通用图片预览弹窗 |
| [#2491](https://github.com/netease-youdao/LobsterAI/pull/2491) | main/openclaw | 修复 skills.entries 按目录 ID 而非 frontmatter name 生成导致的 UI 开关静默失效 |
| [#2499](https://github.com/netease-youdao/LobsterAI/pull/2499) | renderer/cowork | 修复 turn 在等待父流程恢复时提前折叠，显示为空 duration 行的问题 |
| [#2495](https://github.com/netease-youdao/LobsterAI/pull/2495) | renderer | 默认 UI/代码字体调大，含一次性迁移逻辑 |
| [#2493](https://github.com/netease-youdao/LobsterAI/pull/2493) | renderer/cowork | 修复会话导出图片及卡片切换 UI |
| [#2496](https://github.com/netease-youdao/LobsterAI/pull/2496) | renderer/cowork | 修复 badge popover 超出视口、被后续消息遮挡的问题 |
| [#2497](https://github.com/netease-youdao/LobsterAI/pull/2497) | renderer | 优化 cowork goal/steer 文案 |
| [#2494](https://github.com/netease-youdao/LobsterAI/pull/2494) / [#2492](https://github.com/netease-youdao/LobsterAI/pull/2492) | renderer/account | 积分图标样式重绘与颜色对齐 |

**整体判断**：项目在 UI 细节、cowork 交互体验、OpenClaw 集成正确性三个维度上密集修复，**发布质量导向明显**；同时团队版功能正式进入主分支，商业化/协作能力是当前产品主线。

---

## 4. 社区热点

### 🔥 热度最高：Issue #2489 「快更新v4pro！」（新开，1 评论）

[查看 Issue #2489](https://github.com/netease-youdao/LobsterAI/issues/2489)

用户 @nimamasl114514 在 8 月 14 日直接发帖要求支持 v4pro 模型，虽描述为空，但已触发 1 条评论。这条 Issue 代表**用户对前沿模型接入的迫切需求**，也侧面反映 LobsterAI 的模型适配版本落后于用户预期。

**背后诉求分析**：LobsterAI 是 AI 智能体工具，模型能力直接决定产品上限。用户没有详述报错或场景，说明这是**对「最新模型发布后 LobsterAI 未及时跟进」的焦虑表达**。维护者应尽快回应支持计划，或引导用户使用自定义模型端点绕过限制，避免此类情绪性 Issue 堆积。

### 💬 次热点：PR #2374 侧边栏广告永久隐藏开关（仍 OPEN）

[查看 PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374)

由 @bunnysayzz 于 7 月 21 日发起，已开放 **25 天**尚未合入。该 PR 针对 Issue #2342，在 Settings → General 增加永久隐藏侧边栏广告条的开关。评论数为 `undefined`（数据未捕获），但持续未合并说明**团队对广告位这一营收点仍持保留态度**，同时社区对去广告的诉求客观存在。

### 📊 值得关注的长期讨论：Issue #1154 安全模块测试覆盖（stale，1 评论）

[查看 Issue #1154](https://github.com/netease-youdao/LobsterAI/issues/1154)

`commandSafety`（危险命令检测）和 `coworkMemoryJudge`（记忆质量评分）两个安全关键模块**零测试覆盖**的痛点被再次翻出。该 Issue 已存在 4.5 个月，讨论热度虽不高，但涉及 AI 安全底线，值得维护者优先回应。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 高危

- **OpenClaw skill 开关静默失效**（skill toggle silently ineffective）
  - 相关 PR：[#2491](https://github.com/netease-youdao/LobsterAI/pull/2491)（已合并）、[#2483](https://github.com/netease-youdao/LobsterAI/pull/2483)（已关闭）
  - 根因：`skills.entries` 按「目录派生 ID」生成，但 OpenClaw 按「frontmatter name」解析覆盖配置，目录与 frontmatter 不一致时，**UI 开关看似生效实则无效**，极易让用户误判技能状态。
  - 状态：**已修复**（两条 PR 分别由不同作者提出，最终由 `fisherdaddy` 的 #2491 合入）

### 🟡 中危

- **cowork turn 提前折叠误显示为失败**（[#2499](https://github.com/netease-youdao/LobsterAI/pull/2499)，已合并）
  - 现象：turn 在 `sessions_yield` 后、父流程恢复前停止流式输出，被误折叠为空 duration 行，视觉上如同失败。
  - 状态：**已修复**，现要求在折叠前必须存在 trailing answer chunk。

### 🟢 低危-中危

- **会话导出图片与卡片切换 UI 异常**（[#2493](https://github.com/netease-youdao/LobsterAI/pull/2493)，已合并）
  - 状态：**已修复**，但 Release Notes 未说明具体现象，建议维护者补充。

- **Google Gemini `/v1` 路径 URL 拼接错误**（[#1153](https://github.com/netease-youdao/LobsterAI/pull/1153)，OPEN/stale）
  - 现象：`buildOpenAIChatCompletionsURL` 对以 `/v1` 结尾的 Gemini baseURL 执行 `slice(0, -3)` 多切一个 `/`，导致 URL 变为 `https://generativelanguage.googleapis.comv1beta/openai/chat/completions`（缺少 `/`）。
  - 严重度：**高危**——Gemini 用户将完全无法调用模型。
  - 状态：⚠️ **修复 PR 已存在 4.5 个月未合并**，关联 Issue #1151。

---

## 6. 功能请求与路线图信号

| 信号 | 来源 | 可能性评估 |
|---|---|---|
| **v4pro 模型支持** | [Issue #2489](https://github.com/netease-youdao/LobsterAI/issues/2489) | 高。用户直接施压，且模型能力是智能体产品的核心卖点。维护者可能已在内部适配，建议公开回应时间表 |
| **侧边栏广告永久隐藏** | [PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374) | 中。与营收模式冲突，但社区诉求明确。折中方案可能是「Plus 用户可关闭」 |
| **签到 + banner 轮播** | Release [2026.8.14](https://github.com/netease-youdao/LobsterAI/releases) | 已上线，说明产品化运营（签到、活动通知）是明确路线 |
| **多 Agent 任务筛选** | Release [2026.8.14](https://github.com/netease-youdao/LobsterAI/releases) | 已上线，呼应团队版（Team Edition）的多用户/多 Agent 协作方向 |
| **会话内页内搜索（Ctrl+F）** | [PR #1155](https://github.com/netease-youdao/LobsterAI/pull/1155)（stale，未合并） | 中低。功能完整度高、已实现 TreeWalker + CSS Highlight API，但 4.5 个月未获 review，可能有设计取舍争议 |
| **会话标记未读** | [PR #1228](https://github.com/netease-youdao/LobsterAI/pull/1228)（stale，未合并） | 低-中。UX 增强型功能，优先级被团队版挤压 |

**路线图判断**：项目当前主线是**商业化（团队版）+ 多 Agent 协作**，个人效率向的小功能（页内搜索、标记未读）积压严重，建议维护者通过「stale 清理 + 社区贡献合并」的方式消化这批高质量 PR。

---

## 7. 用户反馈摘要

- **模型更新焦虑（最强烈）**：Issue #2489 短短一个标题「快更新v4pro！」就获得评论互动，说明用户对模型接入滞后有明显不满。建议维护者建立「模型支持状态页」并公开预告，降低此类 Issue 的重复产生。
- **广告位抵触**：PR #2374 的存在证明有用户愿意主动开发去广告功能，而非被动接受侧边栏广告。若 LobsterAI 持续推进 banner 商业化（本期 Release 新增了 banner 轮播），**用户反弹或将加剧**。
- **对安全性的隐性关注**：Issue #1154 重新活跃，`commandSafety` 模块零测试意味着「AI 静默执行 rm -rf」的风险无法被 CI 拦截。评论区虽然只有 1 条，但这类问题一旦曝光，对开源项目的信任打击极大。
- **对 UI/字体可读性的正面反馈信号**：PR #2495 调大字体并附带一次性迁移，说明开发者在主动响应可读性需求，但数据未显示具体用户评论，建议跟进 Release 后反馈。

---

## 8. 待处理积压

### ⚠️ 需优先处理

| 项目 | 类型 | 等待时长 | 说明 |
|---|---|---|---|
| [#1153](https://github.com/netease-youdao/LobsterAI/pull/1153) URL 拼接修复 | PR | 4.5 个月 | 高危 Bug，Gemini 用户受影响。建议 24h 内 review 合入 |
| [#1154](https://github.com/netease-youdao/LobsterAI/issues/1154) 安全模块补充测试 | Issue | 4.5 个月 | 两个安全核心模块零测试覆盖。建议排入下个 milestone |
| [#2465](https://github.com/netease-youdao/LobsterAI/pull/2465) Vite 5 → 8 升级 | PR (dependabot) | 5 天 | Vite 8 跨大版本升级，涉及构建链兼容性，需专门验证 |
| [#2460](https://github.com/netease-youdao/LobsterAI/pull/2460) rimraf 5 → 6 升级 | PR (dependabot) | 5 天 | 低风险依赖升级 |

### 🧹 长期未响应（stale）

| 项目 | 类型 | 说明 |
|---|---|---|
| [#1155](https://github.com/netease-youdao/LobsterAI/pull/1155) 会话内 Ctrl+F 搜索 | PR | 功能完整（含高亮、多匹配跳转），4.5 个月未 review，疑似作者已流失 |
| [#1228](https://github.com/netease-youdao/LobsterAI/pull/1228) 会话标记未读 | PR | 实现清晰（含 i18n），4.5 个月未合并 |
| [#1231](https://github.com/netease-youdao/LobsterAI/pull/1231) AgentCreateModal Esc 关闭 | PR | UX 一致性修复，4.5 个月未合并 |

### 📊 健康度提示

- **Issue 关闭率为 0/2**，结合 27 条 PR 更新，说明项目「重 PR 合并、轻 Issue 响应」；
- **4 个 stale PR** 全部为外部贡献者提交，长期不合并将**严重挫伤社区贡献意愿**；
- **合入延迟**：`release/2026.7.30` 的 PR #2498 直到 8 月 14 日才合入主分支，建议检查发布流水线是否存在阻塞环节。

---

*本日报由 AI 生成，数据基于 GitHub 公开信息，仅供参考。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-15

## 1. 今日速览
过去 24 小时 Moltis 项目**无新 Issue、无版本发布**，处于相对平静但持续演进的状态。2 个 Pull Request 处于活跃待合并阶段（#1195、#1190），分别聚焦 Slack 原生任务卡片和跨渠道持久化连接器，显示项目在**AI 助手渠道集成与数据持久化**方向上的推进意图。无新开的 Issue 和关闭的 Issue 表明社区反馈端暂时平稳，未出现紧急 bug 或回归报告。整体活跃度中等偏上，核心贡献集中在少数贡献者（penso）的功能性 PR 上。

## 2. 版本发布
**无。** 今日无新版本 Release 记录。

## 3. 项目进展
今日**没有已合并或已关闭的 PR**，但两个 OPEN 状态 PR 提供了明确的功能增量信号：

- **[PR #1195 [OPEN] Add Slack native live task cards](https://github.com/moltis-org/moltis/pull/1195)** — 由 penso 于 2026-08-15 提交，旨在将工具生命周期更新渲染为 Slack 原生计划/任务卡片，引入不透明的 per-run ID 与注册制规范工具名称来保护卡片隐私，并处理失败流上的终端错误清理。这直接扩展了 Moltis 在 Slack 场景下的实时交互体验，是**渠道原生表达能力**的重要补强。

- **[PR #1190 [OPEN] Add durable calendar, channel, and email connectors](https://github.com/moltis-org/moltis/pull/1190)** — 由 penso 于 2026-08-11 提交，8 月 14 日更新。该 PR 引入 provider-neutral 连接器持久化、原子快照、调度、投影和有界本地全文搜索；新增只读 CalDAV、Gmail、Himalaya v2 及可复用的渠道历史数据集。这标志着项目从**单一对话界面走向跨渠道、持久化记忆与外部服务集成**的架构升级。

虽然两者尚未合并，但叠加来看，Moltis 正在构建“渠道端原生 UI + 后端持久化连接器”的双层能力，项目整体向**生产可用的个人 AI 助手基础设施**迈进了一大步。

## 4. 社区热点
今日两个 PR 均**没有评论，没有点赞**，暂未形成社区讨论热点。从 PR 摘要的设计描述看，社区（或至少核心贡献者）更关注三类诉求：

- **渠道原生体验**：在 Slack 中以原生卡片而非纯文本展示任务/计划，背后是对 AI 助手交互形态专业化的需求。
- **隐私与安全**：使用 opaque per-run ID、仅注册规范工具名、不复制凭据等设计，回应了连接器场景下的数据泄露顾虑。
- **跨平台统一**：同时支持日历（CalDAV）、邮件（Gmail/Himalaya）和频道历史，表明用户希望 AI 助手能聚合分散在多个 SaaS 中的数据源。

上述诉求虽未引发即时讨论，但作为待合并 PR 的核心主题，预计合并后将带来一轮社区反馈。

## 5. Bug 与稳定性
**今日无新报告的 Bug、崩溃或回归问题。** 数据层面 0 条 Issue 更新，项目当前无已知紧急稳定性风险。PR #1195 中提到的“terminal error cleanup on failed streams”属于防御性错误处理，不属于已暴露的 bug。整体稳定性信号良好。

## 6. 功能请求与路线图信号
无用户显式提交的新功能 Issue。但从待合并 PR 可以提炼出以下路线图信号：

- **实时任务可视化**（#1195）：以原生卡片形式呈现计划与任务，可能是未来统一“任务/计划 UI 抽象层”的第一步。
- **外部数据源连接器**（#1190）：持久化 + 调度 + 快照 + 本地全文搜索，明显指向“个人数据仓库”或“长期记忆基础设施”的路线。
- **只读优先与凭据安全**：两者都在强调 provider-owned schemas、不复制凭据，暗示后续可能会扩展更多连接器（如 Outlook、Teams），且安全架构已经为多供应商铺路。

结合 PR #1190 的更新日期（8 月 14 日）和 #1195（8 月 15 日），作者正在连续迭代连接器与 UI 层，这两项很可能被纳入下一个 minor 版本。

## 7. 用户反馈摘要
今日 **Issue 评论为零**，无法从 Issues 中提炼直接用户反馈。从 PR 本身的内容逻辑推测，用户侧痛点包括：

- 在 Slack 中只能看到文本流式输出，缺乏结构化的任务/计划追踪方式 → 催生 #1195。
- 希望 AI 助手能够读取日历、邮件和频道历史，而不仅仅局限于当前对话窗口 → 催生 #1190。
- 对多服务连接场景下的凭据安全存在顾虑 → 上述 PR 中的安全设计对此做出回应。

真实用户声音需待 PR 合并后观察社区反应。

## 8. 待处理积压
- **[PR #1190 [OPEN] Add durable calendar, channel, and email connectors](https://github.com/moltis-org/moltis/pull/1190)** — 已开放 4 天（8 月 11 日创建，8 月 14 日更新）。涉及范围较大（连接器持久化、多个数据源、全文搜索），建议维护者尽快安排 review，避免长周期分支与主线漂移过大。
- **[PR #1195 [OPEN] Add Slack native live task cards](https://github.com/moltis-org/moltis/pull/1195)** — 今日新提交，暂无 review 迹象。功能聚焦明确，与 #1190 存在潜在耦合（任务卡片可能需要持久化数据源支撑），建议与 #1190 联动评估合并顺序。

总体来看，Moltis 处于**核心功能升级前夜**，两个未合并 PR 承载了重要的架构扩展。建议维护者优先驰援 review，趁热推动落地。

---
*本报告由 AI 生成，数据来源为 Moltis GitHub 仓库公开信息，统计周期为 2026-08-14 至 2026-08-15。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-15

> 数据来源：agentscope-ai/QwenPaw 仓库（即 CoPaw 项目；若已更名，GitHub 会自动跳转）。本文所有链接均按数据源提供。

## 1. 今日速览

- 过去 24 小时共更新 50 条 Issue（新开/活跃 13 条，关闭 37 条），关闭率达 **74%**，维护者清理积压的效率很高。
- 共更新 41 条 PR（待合并 26 条，合并/关闭 15 条），其中 skill-system 动态加载、auto-title-sync 两个特性在一天内经历了"提交 → 关闭 → 修订重开"的快速迭代，开发活跃。
- 无新版本发布，但 PR #6908（升级 agentscope 2.0.6）与 PR #6302（统一 provider 体系）均在推进中，暗示下个版本将集中解决模型兼容性问题。
- 社区讨论热点集中在三大主题：**MCP 工具稳定性**、**Responses API 兼容**、**Windows 桌面端体验**。
- 今日新出现两个高风险 Bug：**#7011**（多 UI 会话下 Console stop 误取消飞书会话）和 **#7016**（工具调用 404），目前均无对应 fix PR，需重点关注。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 中，值得关注的有：

- **[#6943 feat(channels): support interactive configurators for plugin channels](https://github.com/agentscope-ai/QwenPaw/pull/6943)** — 恢复插件频道 `get_configurator()` 交互式配置流程：在构建 CLI 频道菜单前加载已安装的 channel 插件，并通过临时 FastAPI 应用加载插件注册的 HTTP 路由。修复了 2.0 重构中插件频道配置能力的回归。
- **[#6715 feat(onebot): localize inbound media before agent processing](https://github.com/agentscope-ai/QwenPaw/pull/6715)** — OneBot 入站图片/音频/视频/文件与 AgentScope 2.0 本地 `DataBlock` 管线对齐，在处理前将远端资源解析并下载到受管本地存储，属于渠道层的 2.0 适配补课。
- **[#2105 docs: add whisper installation instructions](https://github.com/agentscope-ai/QwenPaw/pull/2105)** — 补充 Whisper 本地语音识别（extras）安装文档，改善新手上手路径。
- **[#7029](https://github.com/agentscope-ai/QwenPaw/pull/7029) / [#7031](https://github.com/agentscope-ai/QwenPaw/pull/7031) / [#7030](https://github.com/agentscope-ai/QwenPaw/pull/7030) 关闭并重开为 [#7033](https://github.com/agentscope-ai/QwenPaw/pull/7033) / [#7032](https://github.com/agentscope-ai/QwenPaw/pull/7032)** — skill-system（动态技能加载+自动卸载+frontmatter 修复）与 auto-title-sync（自动记忆联动会话标题刷新）在同日内快速修订重提，说明作者正在收敛实现细节，预计很快进入可合并状态。

**评价**：项目正在为 2.0 生态"补课"（OneBot 媒体管线、插件频道配置），同时在 skill 运行时管理、会话标题同步等体验层积极迭代，整体向前迈进的节奏健康。

## 4. 社区热点

- **[#3045 [Bug] 自动获取模型为什么不可用](https://github.com/agentscope-ai/QwenPaw/issues/3045)**（8 评论，已关闭）— 评论数最高。用户对模型自动获取/发现机制失败感到困惑，背后诉求是**模型配置的透明度与可诊断性**。
- **[#2418 [Question] 能否新增 skills-hub 管理页面](https://github.com/agentscope-ai/QwenPaw/issues/2418)**（7 评论，已关闭）— 用户希望像应用商店一样快速下载主流 skills，与今日 PR #7033 的动态技能加载方向高度吻合，是强烈的路线图信号。
- **[#7010 [Question] qwenpaw app 只能前台运行，没有后台/守护模式](https://github.com/agentscope-ai/QwenPaw/issues/7010)**（6 评论，当日创建并关闭）— SSH/脚本启动场景下命令卡住不返回，暴露**服务端无头/daemon 运行能力**的产品缺口。
- **[#6405 [Question] 升级 2.0 以后 MCP 工具总是提示 Tool notfound](https://github.com/agentscope-ai/QwenPaw/issues/6405)**（6 评论，已关闭）— 多个用户遇到 `[mcp-key]__[tool_name]` 前缀导致工具找不到，反映 2.0 工具命名规则迁移的兼容阵痛与报错信息不足。
- **[#7011 [Bug] Console stop request can cancel an active Feishu session](https://github.com/agentscope-ai/QwenPaw/issues/7011)**（5 评论，OPEN）— 目前最值得关注的在讨论 Bug，作者在 8-14 更新了直接证据：活跃飞书会话被 Console UI 的 stop 请求取消，涉及**多 UI 会话间 identity 串扰**。

**共性诉求**：更透明的模型配置、插件/技能的可发现性与生命周期管理、服务端无头运行能力、MCP 生态稳定性。

## 5. Bug 与稳定性

**严重 / 高优先**

- **[#7011（OPEN）Console stop 请求可取消活跃飞书会话（2.1.0）](https://github.com/agentscope-ai/QwenPaw/issues/7011)** — 多 UI 会话下 session identity 串扰导致真实业务会话被误取消。无 fix PR，建议优先响应。
- **[#7016（OPEN）工具调用 /offload 接口 404 "Tool call not found"（2.1.0）](https://github.com/agentscope-ai/QwenPaw/issues/7016)** — 流式会话期间前端持续轮询的工具 offload 接口报 404，工具调用核心链路异常。无 fix PR。
- **[#7025（OPEN）QwenPaw Creator 插件导致所有插件失效](https://github.com/agentscope-ai/QwenPaw/issues/7025)** — 安装后全部插件不可用，插件隔离性缺陷，影响面大。无 fix PR。
- **[#6958（OPEN）FastMCP 工具结果文件写入两份重复数据](https://github.com/agentscope-ai/QwenPaw/issues/6958)** — 结果超截断阈值时 `content` 与 `structuredContent` 双写导致重复。**已有 fix PR [#6969](https://github.com/agentscope-ai/QwenPaw/pull/6969) 处于 Under Review**，解法明确。

**中危**

- **[#6951（CLOSED）scroll 压缩后重新进入会话，压缩前聊天记录不可见](https://github.com/agentscope-ai/QwenPaw/issues/6951)** — 上下文压缩导致用户可见 transcript 被破坏，仅剩内部 eviction index。已关闭，但"压缩只应影响模型输入，不应影响用户可见历史"这一设计原则值得沉淀为测试用例。
- **[#6806（CLOSED）qwenpaw-creator Windows 保存模型配置报 Internal Server Error](https://github.com/agentscope-ai/QwenPaw/issues/6806)** — Windows 平台插件功能不可用，已关闭。
- **[#6612（CLOSED）QwenPaw 2.0.1 与 agentscope 2.0.4.post1 不兼容（proactive 崩溃+工具权限死锁）](https://github.com/agentscope-ai/QwenPaw/issues/6612)** — 依赖版本兼容性问题，PR #6908 升级 agentscope 至 2.0.6 很可能顺带修复。

**低危 / 体验**

- [#6197（CLOSED）nvidia-smi 挂起导致桌面端启动卡死](https://github.com/agentscope-ai/QwenPaw/issues/6197)
- [#4832（CLOSED）Windows 执行 shell 命令闪 cmd 窗口（缺 CREATE_NO_WINDOW）](https://github.com/agentscope-ai/QwenPaw/issues/4832)
- [#7040（CLOSED）界面文案 "Stopp Running" 错别字](https://github.com/agentscope-ai/QwenPaw/issues/7040) — 用户吐槽"文案错别字很多"，建议做一次全量文案走查。

## 6. 功能请求与路线图信号

- **Responses API / OpenAI-compatible 提供商支持** — [#3002](https://github.com/agentscope-ai/QwenPaw/issues/3002)、[#944](https://github.com/agentscope-ai/QwenPaw/issues/944)、[#2737](https://github.com/agentscope-ai/QwenPaw/issues/2737) 三案同日关闭，配合 PR [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302)（统一 provider discovery、模型元数据、路由与回退）和 [#6908](https://github.com/agentscope-ai/QwenPaw/pull/6908)（升级 agentscope 2.0.6），可判断 **"Responses 兼容"已进入实现队列**，大概率随下一版本落地。
- **技能市场 / 动态技能管理** — [#2418](https://github.com/agentscope-ai/QwenPaw/issues/2418) 的 skills-hub 诉求 + PR [#7033](https://github.com/agentscope-ai/QwenPaw/pull/7033)（动态技能加载+自动卸载），说明**运行时技能生命周期管理**是明确路线方向。
- **每会话模型覆盖** — PR [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992)（opt-in per-session model overrides）已实现并处于 Under Review，可满足"不同会话用不同模型"的高频诉求。
- **桌面端自动更新** — [#2846](https://github.com/agentscope-ai/QwenPaw/issues/2846)、[#3464](https://github.com/agentscope-ai/QwenPaw/issues/3464) 反复被提，已关闭但**未见对应 PR**，仍是高频未实现诉求。
- **对话管理** — [#4001](https://github.com/agentscope-ai/QwenPaw/issues/4001)（删除单条消息）、[#4436](https://github.com/agentscope-ai/QwenPaw/issues/4436)（会话拆分）均在开放状态，属 UI 层中优先级需求，暂无对应 PR。
- **Computer use** — [#5551](https://github.com/agentscope-ai/QwenPaw/issues/5551) 的追问与 PR [#7037](https://github.com/agentscope-ai/QwenPaw/pull/7037)（观察关联窗口表面）呼应，说明 computer use 能力正在持续扩展。
- **本地 GGUF 模型** — [#6433](https://github.com/agentscope-ai/QwenPaw/issues/6433) 提议内置下载与运行 GGUF 模型，已关闭但无对应 PR，属潜在方向。

## 7. 用户反馈摘要

- **Windows 更新体验差（高频不满）**："每次都要卸载后再更新很麻烦"（[#2846](https://github.com/agentscope-ai/QwenPaw/issues/2846)、[#3464](https://github.com/agentscope-ai/QwenPaw/issues/3464)），且任务栏显示 Python 图标而非产品图标，品牌细节缺失。
- **MCP 升级困惑**：升级 2.0 后工具名带前缀仍提示 Tool not found，用户表示"不知道什么原因"（[#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405)），说明**升级指引与错误提示不足**。
- **无头/后台运行是真实部署场景**：通过 SSH 或 nohup 启动服务端时命令一直卡住（[#7010](https://github.com/agentscope-ai/QwenPaw/issues/7010)），影响自动化部署落地。
- **企业网关用户被 Responses API 卡住**：经 Azure OpenAI 代理网关使用 GPT-5.3 系列时全部 400（[#3002](https://github.com/agentscope-ai/QwenPaw/issues/3002)），兼容层问题直接影响企业采用。
- **对话数据可见性**：用户认为"上下文压缩应只影响模型输入，不应破坏用户可见的完整 transcript"（[#6951](https://github.com/agentscope-ai/QwenPaw/issues/6951)），体现对数据主权的重视。
- **积极信号**：用户对 skills-hub、computer use、本地 GGUF 模型等新方向兴趣浓厚（[#2418](https://github.com/agentscope-ai/QwenPaw/issues/2418)、[#5551](https://github.com/agentscope-ai/QwenPaw/issues/5551)、[#6433](https://github.com/agentscope-ai/QwenPaw/issues/6433)），社区期待功能密度继续提升。

## 8. 待处理积压

**长期未响应的 Issue**

- [#4001（2026-05-02 开启）会话中删除单条消息](https://github.com/agentscope-ai/QwenPaw/issues/4001) — 已积压 3 个月+，4 评论，无 PR。
- [#4436（2026-05-16 开启）会话拆分/部分对话转移至新会话](https://github.com/agentscope-ai/QwenPaw/issues/4436) — 已积压 3 个月，无 PR。

**今日新增但亟待响应**

- [#7011（OPEN）飞书会话被 Console stop 误取消](https://github.com/agentscope-ai/QwenPaw/issues/7011) — 高优 Bug，无 fix PR。
- [#7016（OPEN）工具调用 404](https://github.com/agentscope-ai/QwenPaw/issues/7016) — 核心链路，无 fix PR。
- [#7025（OPEN）Creator 插件冲突导致全部插件失效](https://github.com/agentscope-ai/QwenPaw/issues/7025) — 插件生态健康度问题，无 fix PR。

**长期待评审 PR**

- [#5992（2026-07-12 开启）per-session model overrides](https://github.com/agentscope-ai/QwenPaw/pull/5992) — first-time contributor 已等待超一个月，处于 Under Review，建议尽快评审以免打击贡献者积极性。
- [#6302（2026-07-21 开启）统一 provider discovery/模型元数据/路由](https://github.com/agentscope-ai/QwenPaw/pull/6302) — 大特性 PR，与多个已关闭 issue 直接相关，积压近一个月，建议明确排期。
- [#6908（2026-08-11 开启）升级 agentscope 至 2.0.6](https://github.com/agentscope-ai/QwenPaw/pull/6908) — 很可能修复 #6612 等兼容性问题，建议优先合并。

---

**项目健康度小结**：Issue 闭环速度快（当日关闭率 74%），PR 迭代活跃，2.0 兼容性工作在持续收尾；但多会话串扰（#7011）、MCP/工具调用 404（#7016）与插件冲突（#7025）等高优问题尚未有 fix PR，建议维护者优先响应，避免影响 2.1.x 稳定性口碑。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-15

> 数据窗口：过去 24 小时 | 数据源：github.com/zeroclaw-labs/zeroclaw

## 一、今日速览

- 过去 24 小时协作高度活跃：**33 条 Issue 更新**（新开/活跃 30，关闭 3），**50 条 PR 更新**（待合并 47，合并/关闭 3），无新版本发布。
- 讨论焦点集中在**安全架构与协议兼容**：高风险 shell 命令策略、可插拔认证、Chat Completions 兼容端点、会话/附件体系等 RFC 均处于高热度讨论中。
- 项目处于 **v0.8.5 稳定化（#9459，至 8/30）与 v0.9.0 架构定稿**双轨并行阶段；多个 P1 级 Bug（Windows 测试、终端响应误报、cron 测试竞态）仍在推进修复。
- 整体健康度评级：**中上**——社区产出旺盛，但 47 条待合并 PR 与 20+ 条 `needs-maintainer-review` 积压表明，**维护者决策吞吐是当前最大瓶颈**。

## 二、版本发布

无新版本发布。

## 三、项目进展

- 过去 24 小时有 **3 条 PR 被合并/关闭**（具体条目未进入高评论 Top 榜）。
- Issue 侧可见的收尾动作：
  - **#6663 已关闭**：Telegram 部分流式工具调用进度功能已落地。
  - **#9982 已关闭**（wontfix）：第三方 ViBo Cloud 托管记忆 API 推销被拒，社区维持自托管/本地优先方向。

- 待合并队列中可观察到清晰的前进方向：
  - **安全加固**：#9574 授权审批响应者、#9580 内置 HTTP egress 网络防护、#9996 action budget 原子化、#9839 屏蔽不可逆破坏性命令直接拼写。
  - **可靠性修复**：#9999 兼容层输出截断终态分类（修复 #9421）、#10002 Google Workspace camelCase 校验、#10001 非 UTF-8 浏览器路径 fixture 平台门控。
  - **新能力**：#9986 `zeroclaw agents export` 可移植 agent 导出、#9994 ZeroCode 转写复制菜单、#9842 cron 自主回合交付契约。
  - **基础设施**：#9962 / #9985 Blacksmith CI 与 provider-aware rust-cache 扩展。

> 总体判断：项目正从“功能搭建”转向“安全收口 + 平台兼容 + 可评估性建设”，大量高价值 PR 已进入可合并状态，但受限于评审带宽尚未合入。

## 四、社区热点

- **[#8303] RFC: Goal mode v1 — 22 条评论，👍1**  
  最热议题。讨论如何跨多个 agent turn 实现有界用户目标，同时避免把重启交接、通道准入、Web 与异步子任务塞进首个里程碑。  
  https://github.com/zeroclaw-labs/zeroclaw/issues/8303

- **[#7155] RFC: 高风险 shell 命令逐次确认层 — 20 条评论**  
  以 Claude Code 风格 allow/ask/deny 模式约束高风险 shell 命令；第 3 次修订已收窄到 shell 策略契约本身，社区对默认行为与可观测性最为关注。  
  https://github.com/zeroclaw-labs/zeroclaw/issues/7155

- **[#8603] RFC: ZeroClaw Chat Completions profile — 19 条评论**  
  为 OpenAI 生态（Open WebUI、LobeChat、Continue.dev、Aider、LangChain、OpenAI SDK）接入 ZeroClaw 提供兼容端点，是“标准协议生态”呼声最高的议题。  
  https://github.com/zeroclaw-labs/zeroclaw/issues/8603

- **[#7141] RFC: 可插拔入站认证 — 16 条评论（Rev 8）**  
  已迭代至第 8 版，聚焦 OIDC 与可插拔 provider，是 Identity & Access 里程碑的核心提案。  
  https://github.com/zeroclaw-labs/zeroclaw/issues/7141

- **会话/附件姊妹 RFC**：**[#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) runtime-owned conversation sessions** 与 **[#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) unified attachments** 各 14 条评论，将决定 Web 与渠道侧长期数据模型，仍待维护者裁决。

## 五、Bug 与稳定性

按严重程度排列：

1. **[S1/P1] 不完整终端响应被报告为成功 — #9421**  
   Provider 可无可信终态就结束回合，runtime/委托层却向上报告成功。  
   已有修复 PR **#9999**（将 `finish_reason:"length"` 归类为输出长度限制失败，并拒绝不完整非流式文本）。  
   https://github.com/zeroclaw-labs/zeroclaw/issues/9421 · https://github.com/zeroclaw-labs/zeroclaw/pull/9999

2. **[P1/S2] Windows 74 个测试失败 — #7462（15 条评论）**  
   根因：Unix-only 测试命令、Windows 路径语义、控制台代码页 936；CI 仅覆盖 Linux，平台盲区明显。**尚无专门修复 PR**。  
   https://github.com/zeroclaw-labs/zeroclaw/issues/7462

3. **[P1] cron custom-shell 测试 ETXTBSY 竞态 — #9965**  
   在 Parallel Runtime Test 门禁下命中 `ETXTBSY`，造成无关 PR 标红；需使测试免疫竞态。  
   https://github.com/zeroclaw-labs/zeroclaw/issues/9965

4. **[P1] Qdrant 静默回退到 MarkdownMemory — #9919**  
   builder-only factory 缺少 storage config 时选择错误持久层；修复方向已明确（拆 Qdrant 路径并返回显式错误），暂无关联 PR。  
   https://github.com/zeroclaw-labs/zeroclaw/issues/9919

5. **[P2] 高熵检测误杀 Solana 地址 — #9486（7 条评论）**  
   合法钱包地址被替换为 `[REDACTED_HIGH_ENTROPY_TOKEN]`，且 `high_entropy_tokens=false` 在 channel 路径无效，直接影响 Telegram 真实使用。  
   https://github.com/zeroclaw-labs/zeroclaw/issues/9486

6. **[S3] fallback 模型无视觉能力时报错误导 — #9983**  
   错误信息未说明是无视觉 fallback，而是显示所有视觉请求失败，增加排查成本。  
   https://github.com/zeroclaw-labs/zeroclaw/issues/9983

## 六、功能请求与路线图信号

- **评估基础设施成为正式路线图项**：[#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065)（zeroclaw eval）已是 accepted/in-progress；今日新增 tracker [#9967](https://github.com/zeroclaw-labs/zeroclaw/issues/9967)，要求建立 benchmark 选择、配置 pinning、逐轮 instrumentation 与 master baseline，标志项目进入“可评测”阶段。
- **协议兼容是最强信号**：[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) 若被接受，将直接打开 OpenAI 客户端生态，是 gateway 层的下一大候选。
- **渠道功能即将落地**：[#9970](https://github.com/zeroclaw-labs/zeroclaw/issues/9970) Discord 角色级授权、[#9895](https://github.com/zeroclaw-labs/zeroclaw/issues/9895) Telegram provider-grouped `/model` 选择器均已进入 accepted/讨论阶段。
- **Agent 可移植性**：[#9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986) 实现 `zeroclaw agents export`（manifest + config closure + workspace tree），对应跨实例迁移诉求。
- **本地化合规**：[#9972](https://github.com/zeroclaw-labs/zeroclaw/issues/9972) tracker 要求清除 localization boundary 外的 user-facing 字样，将影响后续 CLI/工具文案。
- **稳定化窗口**：[#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459) v0.8.5 stabilization line 运行至 8/30，安全修复类 PR（#9281/#9574/#9580）是优先合入对象。

## 七、用户反馈摘要

- **Shell 安全需要策略化而非二元开关**（[#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) 评论）：运维人员明确希望 allow/ask/deny 三层策略，而非简单的 allowlist 全有或全无。
- **标准协议是真实接入门槛**（[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) 讨论）：OpenAI 生态用户表示“只要提供一个 Chat Completions 端点即可接入现有工具链”，说明 WebSocket/ACP/webhook 的适配成本已经构成摩擦。
- **高熵保护需考虑合法长标识符**（[#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486)）：Solana MCP 用户无法通过 Telegram 正常返回钱包地址，安全过滤缺少对加密货币地址的上下文豁免。
- **Windows 贡献门槛**（[#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)）：外部贡献者在 Windows 本地无法跑通测试套件，直接抑制非 Linux 贡献者参与；社区期待 CI 增加 Windows runner 或等效平台分支。
- **本地优先偏好明确**（[#9982](https://github.com/zeroclaw-labs/zeroclaw/issues/9982) 关闭）：ViBo Cloud 托管记忆推销在一天内被 wontfix 关闭，表示社区不接受自托管产品绑定第三方托管记忆服务。

## 八、待处理积压

- **维护者评审队列是当前最大瓶颈**：tracker [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) 持续更新，但积压未明显排空。仍停留在 `needs-maintainer-review` 的 RFC 包括：

  | Issue | 提出时间 | 主题 |
  |---|---|---|
  | [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | 05-26 | 内部发起 Agent 轮次契约 |
  | [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) | 05-27 | 安全态势/凭证边界/入口策略 |
  | [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) | 06-03 | 安全决策管线与 restrictive overlays |
  | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | 07-02 | Chat Completions profile |
  | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) / [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | 07-28 | 会话所有权 / 统一附件架构 |
  | [#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621) | 08-01 | 分阶段产品遥测 |

- **长期卡在 needs-author-action 的高价值 PR**：
  - [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443)（6-28，Matrix 单消息进度草稿，XL）
  - [#9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126) / [#9137](https://github.com/zeroclaw-labs/zeroclaw/pull/9137)（7-18，插件 typed instance config 校验 / 共享 egress 基础，#9137 依赖 P1 的 #9580）
  - [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420)（7-26，Anthropic stored OAuth profiles）
  - [#9707](https://github.com/zeroclaw-labs/zeroclaw/pull/9707) / [#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713)（8-03，配置 alias 迁移 / 历史修剪 token 计量）

- **风险提示**：多个 `needs-author-action` PR 已停滞 4 周以上，若作者失联将直接拉长 v0.9.0 安全架构与插件系统时间线；建议维护者在 #8692 中为这些 PR 设置明确的确认截止日期，到期无响应即转入 stale 处理。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*