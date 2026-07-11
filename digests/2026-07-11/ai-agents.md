# OpenClaw 生态日报 2026-07-11

> Issues: 427 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-11 01:12 UTC

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

# OpenClaw 项目日报 — 2026-07-11

---

## 1. 今日速览

过去 24 小时内，项目保持高活跃度：Issues 新增/更新 427 条（新开/活跃 230，关闭 197），Pull Requests 合计 500 条（待合并 317，已合并/关闭 183）。尽管未发布新版本，但大量修复与功能 PR 集中在 gateway、插件（Slack、Discord、Google Meet）及核心稳定性领域。社区关注焦点从 UI 易用性转向生产环境下的内存泄漏、会话丢失和代理密钥安全。整体健康度良好，但 P0/P1 级别故障仍需加速处理。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日共有 183 个 PR 被合并或关闭，以下为影响较大的部分（基于评论数及标签筛选）：

| PR | 类型 | 摘要 | 状态 |
|----|------|------|------|
| [#103727](https://github.com/openclaw/openclaw/pull/103727) | fix(browser) | 规范化浏览器本地调度请求路径，避免快照路由因尾部斜杠而失败 | ✅ 已合并 |
| [#104028](https://github.com/openclaw/openclaw/pull/104028) | fix(mac) | 修复 macOS 上 exec-approvals 套接字保护测试的 flaky，并将状态目录权限直接设为 0700 | ✅ 已合并 |
| [#104001](https://github.com/openclaw/openclaw/pull/104001) | feat(android) | 简化 Android Canvas 待机界面，减少嵌套边框与内边距，改善视觉层级 | ✅ 已合并 |
| [#104024](https://github.com/openclaw/openclaw/pull/104024) | fix(tui) | 修复 TUI 长 token 显示时 UTF-16 代理对切割导致的乱码（emoji 被拆分为两个替换字符） | ✅ 已合并 |
| [#83933](https://github.com/openclaw/openclaw/pull/83933) | fix(cron) | 手动运行 `deleteAfterRun` 的 cron 作业时跳过删除并保留计数器，避免影响定时执行（仍有待审，但关键修复） | ⏳ 等待作者 |

**项目整体推进方向：**
- 核心稳定性：macOS 守护进程启动、CLI 缓存刷新、OOM 防护（#103295 限制 HTTP 连接池）。
- 插件修复：Slack 用户 token 回退（#103468）、Discord 回复会话重试（#103562）、Google Meet 强制英文 UI（#103719）。
- 代码库维护：自动 locale 同步（#104029、#103857）、依赖更新（#104027）、CI 验证旧版本目标（#103975）。

---

## 4. 社区热点

以下为讨论最活跃、点赞数较高的 Issue 与 PR：

| 编号 | 标题 | 评论数 | 👍 | 标签 |
|------|------|--------|----|------|
| [#99241](https://github.com/openclaw/openclaw/issues/99241) | Tool outputs sometimes render as image attachments and become unreadable to the agent | 20 | 2 | P1, impact:session-state, impact:message-loss |
| [#102175](https://github.com/openclaw/openclaw/issues/102175) | [Bug]: embedded prompt cache breaks across room-event, policy, and Responses boundaries | 16 | 1 | P2, regression |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | Feature Request: Masked Secrets - Prevent Agent from Accessing Raw API Keys | 15 | 4 | P1, security |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Critical: Gateway Memory Leak — RSS grows from 350MB to 15.5GB over days | 15 | 1 | P0, impact:crash-loop |
| [#12602](https://github.com/openclaw/openclaw/issues/12602) | [Feature]: Slack Block Kit support for agent messages | 14 | 0 | P2 |
| [#63829](https://github.com/openclaw/openclaw/issues/63829) | [Feature]: Per-agent memory-wiki vault configuration | 13 | 10 | P1, 已关闭 |

**社区诉求分析：**
- 用户对**工具输出被渲染为图片**且代理无法读取原文的问题反应强烈（#99241），该问题在长时间运行/ANSI-heavy 工作流中高频出现。
- **Prompt 缓存边界丢失**（#102175）引发多个回归案例，涉及跨会话、策略变更和 OpenAI Responses 延续，开发者正在排查。
- **API 密钥明文暴露**（#10659）是安全类最热需求，已有 4 个 👍，且关联至 PR 候选。
- **内存泄漏**（#91588）被标记为 P0，但截至目前仍无修复 PR 关联，社区担忧该问题长期积压。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 摘要 | 当前状态 |
|--------|-------|------|----------|
| ⚠️ **P0** | [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway 内存泄漏（350MB→15.5GB），OOM 被杀死 | 无 fix PR，已存在 32 天 |
| ⚠️ **P0** | [#101763](https://github.com/openclaw/openclaw/issues/101763) | Hosted Molty：模型选择器不持久，始终发送 `.` 分隔的 ID 导致 API 失败 | 无 fix PR，P0 release-blocker |
| 🔴 **P1** | [#99241](https://github.com/openclaw/openclaw/issues/99241) | 工具输出转图片附件，代理不可读 | 无 fix PR，标记 `no-new-fix-pr` |
| 🔴 **P1** | [#84569](https://github.com/openclaw/openclaw/issues/84569) | WhatsApp 长模型调用导致会话卡死，消息丢失 | 有 linked PR (#84568 等)，待合并 |
| 🔴 **P1** | [#83959](https://github.com/openclaw/openclaw/issues/83959) | Codex 应用服务器启动重试耗尽 | 有 linked PR，待审 |
| 🟡 **P2** | [#102175](https://github.com/openclaw/openclaw/issues/102175) | 嵌入式 prompt 缓存跨边界中断（回归） | 无 fix PR |
| 🟡 **P2** | [#87109](https://github.com/openclaw/openclaw/issues/87109) | macOS 上 Gateway heap 增长至 1073MB+，cron 静默失败 | 无 fix PR |
| 🟡 **P2** | [#27984](https://github.com/openclaw/openclaw/issues/27984) | Telegram 5-20MB 文件导致网关死锁（已关闭，但修复待验证） | 已关闭 |

**今日新增 Bug 信号：**
- 多个 P1/P2 问题持续被标记为 `clawsweeper:no-new-fix-pr`，意味着维护团队尚未开始修复，积压风险上升。
- *minSecurity 倒置*（#91283）虽已关闭，但暴露了安全优先级逆向逻辑，提醒后续审查。

---

## 6. 功能请求与路线图信号

以下功能请求获得较高社区呼声，且部分与已有 PR 或实验性实现关联：

| Issue | 功能 | 优先级 | 关联 PR / 动态 |
|-------|------|--------|----------------|
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | **Masked Secrets**：阻止代理读取明文 API Key | P1 | 正在等待产品决策与安全审核，已有实现讨论 |
| [#12602](https://github.com/openclaw/openclaw/issues/12602) | **Slack Block Kit** 支持丰富消息格式 | P2 | 无直接 PR，但插件通道正在活跃改进 |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) | **文件系统沙箱配置**（tools.fileAccess） | P2 | 无 fix PR，需产品决策 |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) | **Webhook 多轮会话复用** | P2 | 已有 linked PR 开放 |
| [#7524](https://github.com/openclaw/openclaw/issues/7524) | **群聊合并到主会话**（groupScope） | P2 | 已有 linked PR |
| [#8287](https://github.com/openclaw/openclaw/issues/8287) | **节点注册代理工具**（Node-Registered Agent Tools） | P2 | 新架构信号，可能纳入下一里程碑 |
| [#8355](https://github.com/openclaw/openclaw/issues/8355) | **流式 TTS 管道**（句子级合成） | P2 | 尚未有实现 PR |

**路线图信号：**
- 安全相关（Masked Secrets、文件沙箱）持续高质量求，有可能在下个版本中作为“安全增强”特性打包。
- 插件生态扩展（节点注册工具、Google Meet 全转录本保留等）显示社区正在将 OpenClaw 从聊天机器人向“通用自动化平台”推进。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实痛点与使用场景：

**常见痛点：**
1. **工具输出不可见**（#99241）：“agent 以为自己收到了附件，实际上只是一张图片占位符，完全无法读取 stdout/stderr”
2. **内存泄漏导致生产中断**（#91588）：“每 2-3 天网关 RSS 涨到 15GB，然后被 OOM killer 杀掉，重启后又开始，已经是第 5 次了”
3. **WhatsApp 长回复丢失**（#84569）：“等了两分钟模型回复，结果 session 卡死，消息既不发送也不报错”
4. **Telegram 大文件死锁**（#27984）：“发了一个 8MB 的 PDF，整个聊天就锁死了，重启才恢复”
5. **配置变更步骤复杂**（#6792）：“安装一个插件需要三步：npm 安装、注册、手动改配置文件——太容易出错了”

**满意之处：**
- #63829（per-agent memory-wiki）作者表示“感谢，这正是我需要的多代理隔离方案”，最终被合并关闭。
- #8508（动态 ack emoji）获得 6 个 👍，用户称“固定 👀 太机械，让群聊互动感更强一点”。

**请求改进的细节：**
- 许多用户希望**在错误信息中获得更多上下文**（#9409 改善 Context overflow 提示）、**更细粒度的速率控制**（#9912 maxTurns/maxToolCalls）、**子代理并发感知**（#9797 queue_status 工具）。

---

## 8. 待处理积压

以下为长期未响应或缺乏进度的重要问题，建议维护团队优先关注：

| 编号 | 标题 | 已存在 | 当前状态 | 风险 |
|------|------|--------|----------|------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway 内存泄漏（P0） | 32 天 | 无 fix PR | 生产环境反复 OOM，影响面广 |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | Masked Secrets（P1） | 155 天（2月6日） | 等待产品决策与安全审核 | 长期搁置，安全需求迫切 |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) | macOS 内存增长致 cron 静默失败（P1） | 45 天 | 标记为 `needs-info`，缺少复现细节 | 可能是内存泄漏局部表现 |
| [#8299](https://github.com/openclaw/openclaw/issues/8299) | 子代理公告无法关闭（P2） | 159 天 | 等待产品决策 | 用户频繁吐槽“模型不听指令” |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) | 文件系统沙箱（P2） | 159 天 | 等待产品决策与安全审核 | 安全功能积压 |
| [#12602](https://github.com/openclaw/openclaw/issues/12602) | Slack Block Kit（P2） | 152 天 | 等待产品决策 | 功能缺失影响企业用户采用 |

**特别关注：**
- **#91588** 作为唯一 P0 问题，32 天没有关联 PR，社区已出现“反复重启”的抱怨，建议提升至短期 Sprint 重点。
- **#10659** 创建于 2026-02-06，历经 5 个月仍未进入实施阶段，考虑到安全敏感性和 4 个 👍，建议重新评估优先级。

---

*报告生成时间：2026-07-11，数据来源：GitHub OpenClaw 仓库（openclaw/openclaw），仅基于过去 24 小时公开活动。*

---

## 横向生态对比

好的，作为您的资深技术分析师，我已根据您提供的各项目动态日报，为您梳理并生成一份2026年7月11日的AI智能体与个人AI助手开源生态横向对比分析报告。

---

### AI智能体与个人AI助手开源生态横向对比分析报告 (2026-07-11)

#### 1. 生态全景

当前，AI智能体和个人AI助手开源生态正处于 **“从功能验证到生产就绪”** 的关键转折期。社区的核心关注点已从“能否实现”转向“能否稳定、安全、高效地运行”。这体现在多个头部项目（如OpenClaw、IronClaw）将大量精力投入到修复**内存泄漏、会话丢失、OOM崩溃**等P0/P1级稳定性问题上。同时，**安全加固**（如API密钥遮蔽、访问控制）和**生态整合**（如MCP、WASM插件、多模型支持）成为共识性方向。项目间竞争加剧，差异化定位日趋明显，从“全能型平台”向“专精型工具”分化，以满足不同层级开发者的需求。

#### 2. 各项目活跃度对比

| 项目名称 | Issues 新增/活跃 | PRs 活跃/待合并 | 新版本发布 | 项目健康度评估 | 备注 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 230 | 317 待合并 | 无 | ⚠️ **高活跃，风险并存** | 社区规模最大，P0/P1故障积压，生产稳定性是最大挑战。 |
| **NanoBot** | 9 | 17 待合并 | 无 | ✅ **迭代迅速，功能优化** | 功能导向明确，社区贡献积极，部分特性PR等待合并。 |
| **Hermes Agent** | 44 | 48 待合并 | 无 | ✅ **极高活跃，修复并行** | Bug修复与功能开发同步推进，社区讨论聚焦于Agent行为与配置。 |
| **PicoClaw** | 2 | 17 待合并 | 无 | ✅ **安全与体验优化中** | 聚焦于Go语言安全性修复及WhatsApp通道体验增强。 |
| **NanoClaw** | 少量 | 15 待合并 | 无 | ✅ **架构升级进行时** | 核心团队主导架构重构（持久化记忆、频道重构），进展扎实。 |
| **NullClaw** | 2 | 0 | 无 | ⚠️ **谨慎关注** | 活跃度中等，出现严重的共享Token安全漏洞，需优先处理。 |
| **IronClaw** | 36 | 50 | 无 | ✅ **高度活跃，积极修复** | 针对“Reborn”运行时进行集中式Bug修复和韧性加固。 |
| **LobsterAI** | 7 | 未知 | ✅ **v2026.7.10** | ✅ **发布后快速迭代** | 新版本发布后社区反馈积极，Bug修复响应迅速。 |
| **Moltis** | 0 | 1 待合并 | 无 | ✅ **稳定演进** | 核心工作是增加对GPT-5.6系列模型的支持。 |
| **CoPaw (QwenPaw)** | 44 | 49 | ✅ **v2.0.0** | ⚠️ **大版本后的修复期** | 架构升级后存在较多回归Bug，但开发团队响应迅速，修复效率高。 |
| **TinyClaw** | 0 | 0 | 无 | 💤 **无活动** | - |
| **ZeptoClaw** | 0 | 0 | 无 | 💤 **无活动** | - |
| **ZeroClaw** | 20 | 50 | 无 | ✅ **功能与质量并行** | 大型PR与Bug修复数量均多，关注协议整合和插件系统。 |

#### 3. OpenClaw 在生态中的定位

*   **市场定位：** **生态的“中心枢纽”与“生产级基准”**。其Issue和PR数量远超其他项目，社区活跃度最高，涵盖了从核心网关、浏览器调度到Slack/WhatsApp等几乎所有领域的细节问题。它定义了个人AI助手的“生产环境标准”，但同时也承受着最大的稳定性压力。

*   **优势与差异：**
    *   **社区规模**：社区规模是第二名（Hermes/IronClaw）的5-10倍，是生态中无可争议的龙头。
    *   **技术路线**：采取**全面集成、高度兼容**的策略，覆盖所有主流平台和消息渠道。其Gateway架构是生态的参照物，但复杂性也导致如#91588 (Gateway内存泄漏) 等P0级问题的积压。
    *   **风险**：问题积压严重，特别是P0/P1级别的长期未修复Bug（如32天未修复的内存泄漏）是其最大风险，可能损害其“生产就绪”的声誉。相比之下，IronClaw和CoPaw虽然Bug也多，但修复响应速度更快。

#### 4. 共同关注的技术方向

多个项目不约而同地聚焦于以下技术点，反映了行业共识：

1.  **安全性与凭证管理**：
    *   **涉及项目**：**OpenClaw** (#10659 Masked Secrets), **NanoBot** (#4776 /restart命令授权), **PicoClaw** (OAuth刷新安全, MQTT TLS), **NullClaw** (#974 Bearer Token权限隔离), **CoPaw** (#5947 MCP权限失效)。
    *   **诉求**：社区强烈要求**保护API密钥、实施细粒度访问控制、确保凭证在存储和传输中的安全**。

2.  **稳定性与生产韧性**：
    *   **涉及项目**：**OpenClaw** (内存泄漏 OOM)， **IronClaw** (启动崩溃、Slack静默失败、长任务失败)， **Hermes Agent** (MCP子进程泄漏)， **CoPaw** (桌面沙箱内存爆炸)。
    *   **诉求**：解决**内存泄漏、进程泄漏、无响应、静默失败**等生产环境中的致命问题，提升系统在高负载和长时间运行下的可靠性。

3.  **模型兼容性与集成**：
    *   **涉及项目**：**NanoBot** (Ollama缓存), **PicoClaw** (OAuth多提供商), **Hermes Agent** (Bedrock IAM兼容), **ZeroClaw** (Gemini `thought_signature` 丢失), **Moltis** (GPT-5.6支持)。
    *   **诉求**：不仅要求支持更多模型，更要求 **“开箱即用”** 的兼容性和性能优化，解决与不同提供商、不同模型交互时的兼容性和性能问题。

4.  **用户体验与交互反馈**：
    *   **涉及项目**：**OpenClaw** (工具输出变图片不可读), **PicoClaw** (WhatsApp输入状态), **LobsterAI** (最小化权限提示), **ZeroClaw** (TUI输入问题)。
    *   **诉求**：用户希望获得**清晰、实时的反馈**（如“正在输入”），避免信息丢失（如工具输出截断），并减少不必要的交互打断。

#### 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | 全能型AI助手平台，覆盖所有渠道，强调生产环境特性。 | 企业级开发者、运维人员、希望部署“大而全”方案的用户。 | 复杂、高度集成的Gateway架构，社区驱动，功能迭代快但稳定性压力大。 |
| **NanoBot** | **Agent开发效率工具**，强调代码编辑精准性、模型灵活切换、子代理协调。 | **高级个人开发者**，注重提升Agent的编码和编排能力。 | 功能精巧，围绕提示词优化和模型路由进行深度定制。 |
| **Hermes Agent** | **行为可预测、可配置的Agent**，注重上下文压缩、多账户管理、桌面端稳定性。 | 追求**Agent行为可控、可调试**的高级用户和多账户使用者。 | 疯狂重视Agent行为细节修复（如工具循环、压缩幻觉），Desktop端体验好。 |
| **PicoClaw** | **轻量级、高安全性的个人助手**，专注于特定平台的集成优化（WhatsApp）。 | 安全意识强、有一定硬件平台（ARM）需求的用户。 | 基于Go的单体应用，灵活且性能好，对CVE修复和并发安全敏感。 |
| **NanoClaw** | **架构先行、可扩展的基础平台**，由核心团队主导，社区贡献配合。 | 开发者、对系统架构有高要求，愿意参与构建的贡献者。 | 注重内部架构重构（持久化记忆、频道适配器），模块化设计清晰。 |
| **IronClaw** | **面向“Reborn”新架构的稳定性加固**，重点解决启动、集成、容错问题。 | 参与`bug_bash`的测试者和寻求新架构稳定性的早期用户。 | 正经历大规模重构（“Reborn”架构），当前重点是解决迁移后的稳定性和Bug。 |
| **ZeroClaw** | **插件和标准操作流程 (SOP) 驱动的自动化平台**，强调协议统一性。 | 希望构建**复杂自动化工作流**和**插件生态**的开发者。 | 关注WASM插件、Webhook、ACP协议统一，技术架构现代化，有前瞻性。 |
| **CoPaw** | **AgentScope 2.0 生态的核心**，注重Agent协作和复杂工作流，中文社区友好。 | 深度使用阿里云生态、关注多Agent协作的研究者与开发者。 | 强依赖于AgentScope 2.0，模型协作（子Agent）是其特色。 |

#### 6. 社区热度与成熟度

*   **第一梯队（极速迭代，功能丰富）**：**OpenClaw, Hermes Agent, IronClaw, ZeroClaw**。这些项目拥有庞大的PR和Issue数量，社区贡献活跃，覆盖问题领域广。它们处于“从功能丰富到稳定可靠”的过渡期，每天都有大量修复和新功能被合并。

*   **第二梯队（功能鲜明，稳步推进）**：**NanoBot, PicoClaw, NanoClaw, LobsterAI, CoPaw**。这些项目有明确的定位和核心用户群，开发节奏稳健。LobsterAI和NanoClaw表现出更强的架构性，而NanoBot和PicoClaw则更关注单一维度的极致体验。

*   **第三梯队（早期阶段/低活跃）**：**NullClaw, Moltis, TinyClaw, ZeptoClaw**。这些项目处于早期或维护阶段。NullClaw虽然活跃度中等，但安全漏洞暴露了其成熟度不足，亟需关注。

#### 7. 值得关注的趋势信号

1.  **“生态整合”成为主旋律**：项目不再满足于独自发展，而是积极拥抱外部协议。WASM插件（ZeroClaw）、MCP协议（Hermes Agent）、ACP统一协议（ZeroClaw）等尝试，都是为了建立更开放的互联互通生态，这将是未来的核心竞争力。
2.  **“安全与隐私”是差异化的关键**：当AI助手开始处理密钥、文件等私密数据，API Key保护（OpenClaw）、Token权限隔离（NullClaw）、进程沙箱（CoPaw）等安全特性，正从“加分项”变为“必选项”，是赢得企业用户信任的基石。
3.  **“可观测性”需求从幕后走向前台**：开发者不再满足于黑盒运行。增加`session_id`以关联追踪（ZeroClaw）、改进错误提示与日志（IronClaw）、提供调试上下文预览工具（NanoClaw），表明社区正推动行业向可调试、可分析的方向发展。
4.  **“稳定性”是最大的用户痛点**：各项目P0/P1 Bug的集中爆发（内存泄漏、OOM、静默失败）表明，性能优化和资源管理已成为制约AI智能体大规模应用的核心瓶颈。**对于所有AI智能体开发者而言，此刻应将至少50%的精力投入到系统韧性建设上，而不是单纯追求新功能。**
5.  **“交互反馈”决定用户留存**：“工具输出变图片不可读”、“WhatsApp输入无反馈”、“桌面编译后状态卡住”等细节问题，虽不致命，但严重侵蚀用户体验。**一个“准确告知自己正在做什么”的Agent，比一个“在背后默默工作但偶尔出错”的Agent更能获得用户信任。**

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据提供的 NanoBot GitHub 数据，现为您生成 2026-07-11 的项目动态日报。

---

### NanoBot 项目动态日报 | 2026-07-11

#### 1. 今日速览
NanoBot 项目今日保持极高的开发活跃度，共产生 42 条 PR 和 9 条 Issue 更新。核心开发方向集中在增强模型选择和代理管理的灵活性、提升 WebUI 用户体验以及修复因引入新特性而产生的并发和安全问题。尽管存在部分待合并的 PR 和待解决的 Bug，但大量 PR 已进入接近合并状态，社区贡献者参与度高，项目整体呈快速迭代态势。

#### 2. 版本发布
无新版本发布。

#### 3. 项目进展
今日项目向前迈出了稳健的一步，多个功能改进和关键修复已被合并或关闭，显著提升了工具的精确性和稳定性。

- **工具编辑精确性提升**：`#4635 [CLOSED] fix(tools): enforce exact edit_file line hints` 已被合并。该 PR 通过严格校验 `edit_file` 工具中的行号提示，解决了因上下文匹配模糊导致的误修改问题，这是对代码编辑能力的重要优化。
- **WebUI 交互优化**：
    - `#4876 [CLOSED] feat(webui): guide queued prompt with second Enter` 合并后，用户在 AI 响应期间快速输入第二条提示时，可通过再按一次回车来引导新输入，防止消息被错误发送到不相关的对话中。
    - `#4877 [CLOSED] feat(webui): highlight file previews and diffs` 合并后，为 WebUI 中的文件预览和差异对比添加了代码高亮，改善了开发者体验。
- **CLI 交互修复**：`#4832 [CLOSED] fix(cli): handle CSI-u Shift+Enter` 修复了特定终端下使用 Shift+Enter 时输出乱码的回归问题。

#### 4. 社区热点
今日社区讨论的热点主要集中在**模型的灵活切换**和**与外部模型服务的性能兼容性**上，体现了用户对效率和场景化定制的强烈需求。

- **热点 Issue**：
    - **#4867** `[enhancement] Preserve exact prompt prefix to enable caching in Ollama and others`：此 Issue 引发了关于使用 Ollama 等本地模型时的巨大性能问题讨论。用户反馈 NanoBot 每次交互都会增加约 60 秒的延迟，这源于未能有效利用 Ollama 的提示前缀缓存机制。这暴露了与外部推理服务集成时的重要性能瓶颈。
    - **#4253** `[enhancement] support overriding model per conversation`：此需求已在社区讨论数月，至今仍有 6 条评论。用户希望通过为单个对话指定不同模型（如快速在线模型 vs. 慢速本地模型），以在隐私、效率和成本之间取得平衡。

- **热点 PR**：
    - **#4879** `feat(long_task): gate sustained-goal behind opt-in flag`：此 PR 试图将“持续目标”功能默认关闭，因其在后台运行时可能阻塞用户交互。这引发了关于该功能设计初衷与用户体验之间矛盾的讨论，社区对其默认行为存在顾虑。

#### 5. Bug 与稳定性
今日报告的 Bug 涵盖安全、功能行为和安装指导等多个方面，安全相关 Bug 值得优先关注。

- **高危**：**#4776** `Security: /restart command has zero authorization` 报告了一个严重安全漏洞。任何经过频道基本验证的用户都可以通过 `/restart` 命令彻底重启整个 Bot 进程，导致拒绝服务。目前已有相关的修复 PR (**#4844**) 正在进行中，建议下个版本优先修复。
- **中危**：**#4867** 所描述的与 Ollama 的兼容性问题，虽非传统 Bug，但严重影响了特定用户群的核心使用体验，已被标记为 `bug` 并等待解决方案。
- **低危**：**#4860** `no such command "onboard" or "webui"` 和 **#4835** `Bug: WebUI landing message...` 分别报告了安装后命令行工具与文档不符、以及 WebUI 新对话消息可能被错误路由到其他会话的问题。后者已在**#4876**的修复中得以解决。
- **已修复**：**#4835** 中描述的 WebUI 消息路由 Bug 已随 **#4876** 合并而关闭。

#### 6. 功能请求与路线图信号
用户提出的新功能需求与当前开发中的 PR 高度匹配，显示出项目路线图与社区需求紧密结合。

- **高概率纳入下个版本**：
    - **`子代理模型覆盖`** (Issue **#4231**, 关联 PR **#4623**): 为 `spawn` 工具添加 `model` 参数，允许子代理使用与主代理不同的模型。该 PR 虽因冲突合并失败，但核心功能已完成。
    - **`计划任务模型预设`** (Issue **#4378**, 关联 PR **#4622**): 为 Cron 计划任务支持指定 `model_preset`。该 PR 同样因冲突被关闭，但功能已实现。
    - **``Dream` 模式空提交修复`** (Issue **#4872**, 关联 PR **#4873**): 避免在 Dream 模式无实际修改时创建空白 Git 提交，提升仓库整洁度。PR 为新提交，社区反响积极。

- **需进一步论证**：
    - **`按对话覆盖模型`** (Issue **#4253**): 这是一个更全局的实现，其复杂度和实现方式仍在讨论中。由于已有类似功能的 PR 提议，但仅限与子代理和计划任务，该请求可能会被拆解或暂缓。

#### 7. 用户反馈摘要
真实用户场景中的痛点清晰地呈现在 Issues 评论中：

- **性能与效率是核心痛点**：`@The-Markitecht` 在 **#4867** 中直言，由于无法利用缓存，使用 Ollama 的体验“完全不可用 (totally unusable)”，即使拥有 32GB 显存。这表明优化与后端服务的交互是提升用户满意度的关键。
- **对 `Dream` 功能有噪音顾虑**：`@alekwo` 在 **#4872** 中表示，`Dream` 模式产生的空白提交“不增加任何价值”，反映了用户对后台自动化功能产生的“噪音”感到不满。
- **操作灵活性的需求**：`@rombert` 在 **#4253** 中描述了自己在“快速在线模型”和“慢速私有模型”之间切换的场景，诉说了对灵活性、隐私和成本的综合考量，这是一个非常典型和高级的用户需求。

#### 8. 待处理积压
以下 Issue 或 PR 长期未有关键更新或已出现冲突，可能需要维护者介入以推动进展：

- **P0 (高风险)**
    - **Issue #4776** `Security: /restart command has zero authorization`: 安全风险高，已开放 4 天，尚未合并对应修复。应优先处理。
- **P1 (特性冲突)**
    - **PR #4205** `Add mailbox-backed subagent results`: 创建于 6 月 5 日，至今仍在开放状态，可能与其他 PR (如 #4624) 存在功能重叠或冲突，需要明确方向。
    - **PR #4588** & **PR #4571**：这两个分别关于上下文压缩和原生 A2A 代理协作的 PR 均被标记为有冲突，且已停滞数周。它们代表了重要的性能优化和架构演进方向，需要核心维护者审阅并解决冲突。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-07-11)

**数据范围**：2026-07-10 09:00 UTC — 2026-07-11 09:00 UTC  
**数据来源**：GitHub API (NousResearch/hermes-agent)

---

## 1. 今日速览

项目在过去24小时内保持极高活跃度：**50条 Issue 更新**（44条新开/活跃，6条已关闭）、**50条 PR 更新**（48条待合并，2条已合并/关闭）。核心开发聚焦于**Agent行为修复**（工具循环、上下文压缩）、**桌面端稳定性**（终端崩溃、附件上传）、**多账户并发**（浏览器CDP路由、xAI OAuth）以及**安全性增强**（环境变量泄露、临时文件清理）。社区讨论热点集中在*MCP服务器进程泄漏*（#60385）和*桌面空响应卡死*（#54756）。整体项目健康度优秀，修复与功能并行推进。

---

## 2. 版本发布

**无新版本发布**（最新 Release 无变化）。

---

## 3. 项目进展

### 今日合并/关闭的 PR（2条）

| PR | 类型 | 摘要 | 链接 |
|----|------|------|------|
| #62200 | 修复 (bug) | **Gateway 重启后通知 home 频道**：`systemctl` 重启后不再“失联”，复用现有 home 频道通知机制，并抑制在聊天内 `/restart` 时的多余广播。 | [PR #62200](https://github.com/NousResearch/hermes-agent/pull/62200) |
| #62378 | 修复 (bug) | **上下文压缩器防幻觉**：在 summarizer prompt 中强制加入 `FABRICATION PREVENTION` 区块，避免压缩时捏造不存在的用户请求（对应 Issue #62365）。 | [PR #62378](https://github.com/NousResearch/hermes-agent/pull/62378) |

### 其他重要合并/关闭的 Issue（6条关闭）

- **#10835** [Feature：通过 MCP 暴露 Hermes 记忆](https://github.com/NousResearch/hermes-agent/issues/10835) —— 关闭（已实现，可能通过后续 PR 合并）
- **#50295** [Bedrock Claude 成本未知：定价表缺缓存字段](https://github.com/NousResearch/hermes-agent/issues/50295) —— 已关闭（提供修复）
- **#56891** [Feature：为 delegate_task 暴露 model 参数] —— 已关闭（标记为重复）

**项目向前迈进的关键点**：  
- 两阶段上下文压缩得到实质性推进（PR #62389 已实现 prune-first 阶段，对应 Feature #513）。
- 浏览器多账号并发问题开始系统性解决（PR 提案 #49691 后续 #62338、#62339 细化）。
- Gateway 重启通知补齐了运维盲点。

---

## 4. 社区热点

### 评论/讨论最活跃的 Issue

| Issue | 评论数 | 主题 | 链接 |
|-------|--------|------|------|
| #52496 | 7 | Dashboard 自定义 provider 被错误改写为 openrouter | [链接](https://github.com/NousResearch/hermes-agent/issues/52496) |
| #48098 | 7 | Desktop 在 compaction 恢复后持续显示过时状态“Summarizing thread” | [链接](https://github.com/NousResearch/hermes-agent/issues/48098) |
| #28156 | 5 | Bedrock+Claude 向导接受 Bearer-only 但运行时缺少 IAM | [链接](https://github.com/NousResearch/hermes-agent/issues/28156) |
| #10835 | 5 | 通过 MCP 暴露内存（已关闭，但讨论热度高） | [链接](https://github.com/NousResearch/hermes-agent/issues/10835) |

**最受赞的 Issue**：  
- **#32107** [Feature：每个 agent 支持多用户且上下文隔离] —— 7 👍，说明小型团队对多租户功能需求迫切。  
- **#36656** [Feature：易失技能（volatile skills）] —— 2 👍，关注点在于减少上下文膨胀。

**热点诉求分析**：  
用户高度关注**配置持久化**（Dashboard 覆盖自定义 provider）、**UI 状态一致性**（桌面 compaction 状态卡顿）、**多模型路由灵活性**（delegate_task 支持 per-call 模型选择）。社区对“多用户、多租户”的呼声映射出项目从个人工具向团队工具演进的市场信号。

---

## 5. Bug 与稳定性

### 严重程度排列

| 严重级别 | Bug | 状态 | 对应 Fix PR |
|---------|------|------|-------------|
| **P2** | #60385 MCP 服务器进程泄漏（重连时子进程未清理） | 开放讨论 | 暂无 |
| **P2** | #54756 TUI/Desktop 在空响应后卡在 busy 状态 | 需复现 | 暂无 |
| **P2** | #57828 `hermes update` 失败导致 venv 损坏且无恢复 | 未修复 | 暂无 |
| **P2** | #62383 微信 iLink 定时投递因 context_token 过期报 rate-limit | 新报告 | #62386 (已提交) |
| **P3** | #40077 Ubuntu 24.04 + NVIDIA 580+ 驱动下 Desktop 崩溃 | 未修复 | 暂无 |
| **P3** | #62324 Desktop 终端因 stage-native-deps.mjs 丢失可执行权限而启动失败 | 新报告 | 暂无 |
| **P3** | #62336 **安全**：终端环境快照将凭证变量写入磁盘 | 新报告 | 暂无 |
| **P3** | #62341 cron `no_agent` 任务在 Scheduled Jobs 面板显示“无运行记录” | 新报告 | 暂无 |

**今日新增的严重 Bug**：  
- **P2** #62383 微信渠道 cron 投递失败，已确认 fix PR #62386（将 `ret=-2` 也视为过期 token）。  
- **P3** #62336 泄露敏感环境变量至 `cache/terminal/hermes-*.snap`，潜在安全风险。  
- **P3** #62324 桌面终端完全不可用，影响 Ubuntu 用户。

**已有 Fix PR 的 Bug**：  
- #62383 → #62386 (已提交)  
- #62365（上下文压缩幻觉）→ #62378 (已合并)  
- #62375（附件上传无界）→ #62382 (已提交)  
- #62151（cron 死锁）→ #62385 (已提交)

---

## 6. 功能请求与路线图信号

### 高潜力纳入下一版本的功能

| Issue/PR | 描述 | 信号强度 |
|----------|------|----------|
| [#513](https://github.com/NousResearch/hermes-agent/issues/513) | **两阶段上下文管理**：先剪裁工具输出再摘要 | **已有 PR #62389，后期可能合并** |
| [#9403](https://github.com/NousResearch/hermes-agent/issues/9403) | **定价覆盖与合同定价 CLI**（Phase 4） | 社区4条评论，持续关注 |
| [#36656](https://github.com/NousResearch/hermes-agent/issues/36656) | **易失技能**：一次性加载技能内容、减少上下文膨胀 | 2 👍，与上下文压缩思路一致 |
| [#52807](https://github.com/NousResearch/hermes-agent/issues/52807) | **UI 配置自定义 API Provider**（无需手改 config.yaml） | 用户体验改善，2条评论 |
| [#62339](https://github.com/NousResearch/hermes-agent/issues/62339) | **浏览器 tab 租赁/注册表**：防止并发 agent 抢占同一 tab | 紧跟 #49691 多账户并发路线图 |
| [#62338](https://github.com/NousResearch/hermes-agent/issues/62338) | **每 tab 的 CDP 目标路由**：同一 profile 内多会话并发 | 同上，技术基础 |
| [#62369](https://github.com/NousResearch/hermes-agent/issues/62369) | **注入消息时间戳**：提升 agent 时间感知能力 | 新提案，1条评论 |

**路线图信号**：  
- 浏览器多账户并发（#49691）拆分出两个子 issue，说明团队在认真推进。  
- 多模型路由（delegate_task 的 model 参数）虽被标记为重复，但同类诉求（#58731）仍在开放，预计会通过配置层抽象统一解决。  
- 安全加固方向明显：环境变量泄露、temp 文件清理、凭证管理等均出现对应修复。

---

## 7. 用户反馈摘要

从 Issue 评论中提炼的真实用户场景与痛点：

- **“Dashboard 覆盖了我的自定义 provider 名称，每次都要手动改 config.yaml”** (#52496) —— 核心配置持久化问题。
- **“桌面端 compaction 结束后还显示‘Summarizing thread’4分钟，但实际上模型已经在工作了”** (#48098) —— 状态同步错误严重干扰使用体验。
- **“我有一台 Ubuntu 24.04 + RTX 3060，Desktop 一启动就崩溃，已经几个月没法用了”** (#40077) —— NVIDIA 驱动兼容性问题长时间未解决。
- **“MCP 服务器跑一段时间后内存暴涨，原来是重连时子进程没杀掉”** (#60385) —— 资源泄漏影响长时间运行。
- **“我需要为不同的子 agent 分配不同模型，但 delegate_task 不支持 per-call 模型选择”** (#58731) —— 多模型编排是高级用户的刚需。
- **“email 发出的邮件主题总是‘Re: Hermes Agent’，没法设置自定义主题”** (#46947) —— 简单功能缺失导致自动化工作流受限。

**正面情绪**：  
- #32107 获得 7 👍，用户表示“热烈祝贺团队推出优秀产品”，并希望用于团队产品。

---

## 8. 待处理积压

以下为长期未获得足够重视或未分配 fix 的重要 Issue/PR，建议维护者优先关注：

| 条目 | 创建时间 | 最后更新 | 类型 | 说明 | 链接 |
|------|----------|----------|------|------|------|
| #40077 | 2026-06-05 | 2026-07-11 | Bug (P3) | Desktop 在 NVIDIA 580+ 驱动下完全不可用，影响大量 Ubuntu 用户。无 fix PR。 | [Issue](https://github.com/NousResearch/hermes-agent/issues/40077) |
| #28156 | 2026-05-18 | 2026-07-10 | Bug (P1) | Bedrock+Claude 向导接受不完全凭证，运行时失败，且区域选择器显示不可路由的全球 profile。社区5条评论，未指派。 | [Issue](https://github.com/NousResearch/hermes-agent/issues/28156) |
| #513 | 2026-03-06 | 2026-07-11 | Feature | 两阶段上下文管理，虽已有 PR #62389，但原始 issue 仍开放且讨论持续3条评论。建议与 PR 协同更新。 | [Issue](https://github.com/NousResearch/hermes-agent/issues/513) |
| #9403 | 2026-04-14 | 2026-07-10 | Feature (P3) | 定价覆盖与 CLI 同步（Phase 4）。长期搁置，但定价能力是企业用户刚需。 | [Issue](https://github.com/NousResearch/hermes-agent/issues/9403) |
| #3630 | 2026-03-28 | 2026-07-10 | Feature/Security (P3) | 高级安全（临时密钥、外部 vault、审计）。依赖 Phase 3 尚未完成，但安全基线应当尽早补齐。 | [Issue](https://github.com/NousResearch/hermes-agent/issues/3630) |

**建议**：  
- #40077 和 #28156 影响面较广，且缺乏替代方案，建议分配至少 P2 优先级。
- #60385（MCP 子进程泄漏）虽为当日新开，但已有3条评论，属于关键稳定性 bug，应尽快给出修复。

---

*报告生成完毕。所有数据截至 2026-07-11 09:00 UTC。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，这是为您生成的 PicoClaw 项目动态日报。

---

# PicoClaw 项目动态日报 | 2026-07-11

## 今日速览
今日项目活跃度较高，尤其在代码提交与修复方面。过去24小时内，共有18个Pull Request（PR）处于活跃状态，其中17个待合并，显示出社区贡献热情高涨；同时，有2个新Issue被提出，1个老旧Issue被自动关闭。尽管无新版本发布，但多个关键修复（如Go语言版本升级以修复CVE漏洞、WhatsApp连接稳定性）和功能增强（如WhatsApp原生输入状态、OAuth兼容性改进）正在推进中，表明项目正朝着更高的安全性和更好的用户体验迈进。

## 版本发布
无新版本发布。

## 项目进展
今日有1个PR被合并/关闭，另有17个PR处于待合并状态，项目在安全性、稳定性和用户交互方面有显著推进。

- **关键修复**：
    - [#3248 [OPEN] fix: bump Go to 1.25.12 to remediate stdlib vulnerabilities](https://github.com/sipeed/picoclaw/pull/3248)：将Go工具链版本从1.25.11提升至1.25.12，以修复`crypto/tls`和`os`标准库中的两个CVE漏洞（GO-2026-5856, GO-2026-4970），这是提升项目安全性的重要一步。
    - [#3179 [CLOSED] fix(whatsapp): reconnect after websocket drops](https://github.com/sipeed/picoclaw/pull/3179)：解决了WhatsApp WebSocket连接断开后无法重连的问题，通过引入读写超时和心跳检测机制，显著提升了WhatsApp通道的健壮性。该PR已被合并。
- **新功能与重构**：
    - [#3242 [OPEN] feat(whatsapp): add native typing presence](https://github.com/sipeed/picoclaw/pull/3242)：为WhatsApp原生通道添加了“正在输入”状态提示，改善了用户在等待AI回复时的交互体验。
    - [#3241 [OPEN] fix(auth): make OAuth refresh provider-correct and concurrency-safe](https://github.com/sipeed/picoclaw/pull/3241)：修复了OAuth令牌刷新逻辑，确保其对不同提供商（如OpenAI、Google）采用正确的请求格式，并解决了并发安全问题。
- **其他重要PR**：
    - 来自贡献者 `corporatepiyush` 的三个PR（[#3246](https://github.com/sipeed/picoclaw/pull/3246)， [#3245](https://github.com/sipeed/picoclaw/pull/3245)， [#3244](https://github.com/sipeed/picoclaw/pull/3244)）专注于安全加固和性能优化，包括默认启用MQTT TLS证书验证、减少不必要的内存分配等。

## 社区热点
今日社区热点集中在WhatsApp通道体验优化和OAuth兼容性问题，这两者都直接关系到用户的实际使用流程。

1.  **[#3240 [OPEN] Add typing presence to WhatsApp native replies](https://github.com/sipeed/picoclaw/pull/3242)** & **[#3242 [OPEN] feat(whatsapp): add native typing presence](https://github.com/sipeed/picoclaw/pull/3242)**：
    - **诉求分析**：用户 `greencabe` 在Issue中描述了“用户发送消息后，即使处理需要几秒钟，也看不到任何反馈”的问题。这直接导致了负面用户体验，用户会怀疑机器人是否已经接收或正在处理消息。对应的PR正是为了解决此问题，展示了社区对即时交互反馈的强烈需求。

2.  **[#3239 [OPEN] OAuth refresh requests use incompatible provider semantics and can race](https://github.com/sipeed/picoclaw/pull/3241)** & **[#3241 [OPEN] fix(auth): make OAuth refresh provider-correct and concurrency-safe](https://github.com/sipeed/picoclaw/pull/3241)**：
    - **诉求分析**：用户 `greencabe` 报告的OAuth刷新问题是一个典型的多提供商兼容性问题。统一的刷新逻辑在不同提供商（如OpenAI与Google）间导致失败。这暴露了项目在多云、多模型提供商支持方面的集成挑战，社区贡献者不仅指出了问题，还提供了完整的修复PR，体现了高度的专业性。

## Bug 与稳定性
今日报告的Bug主要集中在集成和配置方面，部分已有关联的修复PR。

1.  **[严重] [#3239 [OPEN] OAuth refresh requests use incompatible provider semantics and can race](https://github.com/sipeed/picoclaw/pull/3241)**：OAuth令牌刷新请求在不同提供商间语义不兼容，且存在并发竞争条件。此问题会导致用户在使用OpenAI等服务时频繁遭遇认证失败。**已有对应修复PR [#3241](https://github.com/sipeed/picoclaw/pull/3241)。**
2.  **[高] [#3178 [CLOSED] [stale] [BUG] WhatsApp Websocket Timeout](https://github.com/sipeed/picoclaw/pull/3179)**：WhatsApp WebSocket连接超时问题已被自动标记为“stale”并关闭，但其根本原因已在PR [#3179](https://github.com/sipeed/picoclaw/pull/3179) 中通过重连机制解决。这表明项目维护者在关闭陈旧Issue的同时，已通过代码修复了问题。
3.  **[中] PR [#3246](https://github.com/sipeed/picoclaw/pull/3246) 中的修复**：
    - **MQTT TLS证书验证**：`pkg/channels/mqtt/mqtt.go` 中硬编码了 `InsecureSkipVerify: true`，意味着默认情况下所有MQTT连接都不验证服务端证书，存在中间人攻击风险。
    - **OAuth超时**：OAuth刷新请求未设置超时，可能导致协程永久阻塞。
    - **搜索读取边界**：从`io.Reader`读取数据时未设置大小限制，可能导致内存耗尽。

## 功能请求与路线图信号
用户提出的功能请求清晰，并与已有的PR形成了闭环，表明项目需求明确，开发效率较高。

- **高优先级：实时交互反馈**
    - **请求**：[#3240 [OPEN] Add typing presence to WhatsApp native replies](https://github.com/sipeed/picoclaw/pull/3242)
    - **信号**：用户痛点是“无反馈”。这属于提升基础用户体验的关键功能，通常会被优先考虑。
    - **进展**：对应的PR [#3242](https://github.com/sipeed/picoclaw/pull/3242) 已经提交，**很可能被纳入下一个版本**。

- **高优先级：OAuth多提供商兼容性**
    - **请求**：[#3239 [OPEN] OAuth refresh requests use incompatible provider semantics and can race](https://github.com/sipeed/picoclaw/pull/3241)
    - **信号**：该问题阻碍用户使用除Google外的其他OAuth提供商（如OpenAI）。对于支持多模型的项目，这是一个必须解决的集成问题。
    - **进展**：对应的修复PR [#3241](https://github.com/sipeed/picoclaw/pull/3241) 已提交，**是项目路线图中的关键修复**。

- **其他信号**：
    - **模型回退链**：PR [#3200 [OPEN] [stale] feat(models): add configurable default fallback chain](https://github.com/sipeed/picoclaw/pull/3200) 提出了在Web UI中配置模型默认回退链的功能，这符合用户对高可用性和模型选择灵活性的需求。
    - **平台兼容性**：PR [#3205 [OPEN] fix: support 9router gateway responses and add Linux ARMv7 build target](https://github.com/sipeed/picoclaw/pull/3205) 显示了社区对在树莓派等ARM设备上运行PicoClaw以及兼容第三方网关的需求。
    - **社区多语言**：PR [#3247 [OPEN] feat(i18n): add Czech translations for code wrap options](https://github.com/sipeed/picoclaw/pull/3247) 表明社区正在积极贡献本地化翻译，扩大项目覆盖面。

## 用户反馈摘要
- **正面反馈**：通过PR可以发现，用户对提升WhatsApp交互体验、修复OAuth兼容性、以及在ARM设备上运行等方面有明确诉求，并积极贡献代码，说明社区对项目发展抱有很高期望且技术基础良好。
- **负面反馈**：
    - **连接稳定性**：[#3178 [CLOSED] [stale] [BUG] WhatsApp Websocket Timeout](https://github.com/sipeed/picoclaw/pull/3179) 及对应的修复PR表明，WhatsApp通道的连接不稳定性是用户长期以来的一个痛点。
    - **集成兼容性**：[#3239 [OPEN] OAuth refresh requests use incompatible provider semantics and can race](https://github.com/sipeed/picoclaw/pull/3241) 中提到的OAuth问题，反映了项目在多集成商支持上的不完善，给使用非标准配置（如OpenAI）的用户带来了实际障碍。
    - **缺乏反馈**：[#3240 [OPEN] Add typing presence to WhatsApp native replies](https://github.com/sipeed/picoclaw/pull/3242) 直接反映了用户对“无反馈”界面的不满，这是一个需要打磨的交互细节。

## 待处理积压
以下为长期未响应的Issues或PR，可能对项目健康度造成影响，建议维护者关注。

1.  **[PR #2937] [OPEN] [stale] Feat/agent collaboration** (`afjcjsbx` 创建于 2026-05-24):
    - 这是一个引入了内部Agent协作总线的重大功能PR，已经搁置近两个月。该功能如果被合并，将是项目架构上的一次重要升级，但长时间的停滞可能意味着实现方案需要评审或存在设计分歧。
    - [链接](https://github.com/sipeed/picoclaw/pull/2937)

2.  **[PR #1951] [OPEN] [type: enhancement, domain: build] chore: move installation scripts from docs repo to here** (`lc6464` 创建于 2026-03-24):
    - 这是一个关于将安装脚本迁移到主仓库的PR，已开放超过三个月。尽管是build/文档类的改进，但直接影响新用户上手的便利性。长时间的等待可能会影响用户体验。
    - [链接](https://github.com/sipeed/picoclaw/pull/1951)

3.  **[PR #3200] [OPEN] [stale] feat(models): add configurable default fallback chain** (`lc6464` 创建于 2026-07-01):
    - 为模型添加可配置的默认回退链是一个实用的功能，目前处于`stale`状态，可能缺少必要的代码审查或测试。
    - [链接](https://github.com/sipeed/picoclaw/pull/3200)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是基于您提供的 NanoClaw GitHub 数据生成的 2026-07-11 项目动态日报。

---

## NanoClaw 项目动态日报 | 2026-07-11

---

### 1. 今日速览

今日项目活跃度极高，核心团队在多个关键领域同步推进。尽管有 15 个 PR 处于待合并状态，显示了密集的开发活动，但项目整体健康度良好。核心开发者主要聚焦于三大方向：首先是重大的架构改进，包括**提供者无关的持久化记忆系统**和**适配器声明的频道默认值重构**；其次是系统稳定性和一致性的修复，包括**时间戳规范**、**任务系统改造**以及**技能链接管理**；此外，社区贡献者也在积极修复 Bug（如 WhatsApp 组的 SKDM 问题）并推出新特性（如统一的 iMessage 频道）。今日关闭了两个影响新用户初始设置的关键 Bug。

- **活跃度评分**：★★★★☆ (密集开发，重要架构变更推进中)

---

### 3. 项目进展

今日项目在功能、架构和修复方面均有重要推进，核心团队主导了多项关键变更。

**架构与功能改进：**
- **[已合并] 适配器声明的频道默认值**：核心团队（gavrielc）合并了 #3010，这是一个重要的重构。它将频道默认行为（如参与模式、线程策略、发送者策略）的决策权从核心代码下放至各个频道适配器，提升了系统的灵活性和可扩展性。
- **[已合并] 频道默认值声明的适配器端实现**：作为 #3010 的配套 PR，#3011 被合并，使所有适配器都声明了自己的默认值，并修复了 WhatsApp 共享号码的问题。
- **[已合并] 时间戳规范统一**：核心团队通过 #3005、#3006、#3007 三个 PR，统一了全项目的时间戳规范：**存储用 UTC ISO 格式，展示用本地时间**。这修复了任务时间戳与聊天时间戳不一致、存档文件时间戳错误等问题，提升了用户体验的一致性。
- **[已合并] 频道格式化技能迁移**：PR #3009 将 WhatsApp 和 Slack 的格式化技能从主分支迁移至频道分支，避免了未安装相应频道的用户也被注入无关的系统提示，优化了代理的上下文空间。

**稳定性与工具改进：**
- **[已合并] 脚本新增：场景化上下文预览**：PR #3004 合并了一个 `scripts/context-preview.ts` 工具。该工具可以模拟多种交互场景并精确打印代理看到的完整上下文，对开发者调试和贡献者理解系统行为极有帮助。
- **[已合并] 文档改进：代理浏览器**：PR #3003 为 `agent-browser` 技能增加了关于“限定等待时间”的文档，以防止代理陷入无限循环，提升了技能的健壮性。
- **[已关闭] Bug 修复：CLI 创建组时跳过 `container_configs` 行**：Issue #2415 和 #2389 的关闭，标志着影响新用户通过命令行创建组和接线时容器启动失败、消息丢失的两个关键 Bug 已被修复。

---

### 4. 社区热点

今日社区热度和讨论集中在几个由核心开发者发起的大规模架构变更 PR 上，这些 PR 通常有较多的评论和修改。

- **#2998 fix(self-mod): render full MCP server payload on the approval card**
    - **链接**: [PR #2998](nanocoai/nanoclaw PR #2998)
    - **分析**: 该 PR 旨在自修改审核卡片上呈现完整的 MCP 服务器载荷。由于涉及用户体验和安全，社区对此类变更的讨论通常较为活跃，关注点在于信息展示的完整性和安全性之间的平衡。

- **#2999 feat(channels): unify iMessage into a single imessage channel**
    - **链接**: [PR #2999](nanocoai/nanoclaw PR #2999)
    - **分析**: 这是一个功能请求 PR，旨在将 iMessage 统一为单一频道，并支持本地和托管两个后端。这反映了社区对特定平台集成能更加简洁和统一的诉求，是典型的平台适配优化。

- **#3012 & #3013 持久化记忆系统**：
    - **链接**: [PR #3012](nanocoai/nanoclaw PR #3012) | [PR #3013](nanocoai/nanoclaw PR #3013)
    - **分析**: 这两个由核心团队提出的 PR 引入了一个提供者无关的持久化记忆系统及其在 Codex 中的加载机制。这无疑是今日社区最关注的技术架构变更，它直接影响智能体的长期记忆能力，是通往更智能、更个性化助手的关键一步，预计会引发广泛讨论。

---

### 5. Bug 与稳定性

今日报告的 Bug 数量不多，但涉及核心稳定性问题，主要集中在组管理和任务执行流程。

| 严重程度 | 问题 | 状态 | 链接 |
| :--- | :--- | :--- | :--- |
| **中** | **共享技能重构前的组存在技能副本静默阻塞软链接更新** | **开放**，已有 **Fix PR** | [Issue #3001](nanocoai/nanoclaw Issue #3001) / [PR #3002](nanocoai/nanoclaw PR #3002) |
| **中** | `ncl groups create` 跳过 `container_configs` 行，导致首次派发失败 | **已关闭**，已确认修复 | [Issue #2415](nanocoai/nanoclaw Issue #2415) |
| **中** | 通过 CLI 创建的接线（Wiring）未自动创建目的地，导致消息被静默丢弃 | **已关闭**，已确认修复 | [Issue #2389](nanocoai/nanoclaw Issue #2389) |

**重点关注**：
- **#3001** 是一个典型的回归问题，揭示了架构重构可能导致旧数据不兼容的风险。幸运的是，对应的修复 PR #3002 也已提交，该 PR 会在软链接被阻塞时发出警告，提升系统的可观测性。
- **#2966** 和 **#3014** 这两个开放的修复 PR 专注于 `agent-runner` 组件，分别解决错误批日志记录和 `hasIdenticalSend` 方法绑定问题，表明核心团队正在持续打磨任务执行引擎的健壮性和正确性。

---

### 6. 功能请求与路线图信号

今日的功能请求和路线图信号非常强烈，主要来自核心团队的 PR。

- **明确路线图信号：持久化记忆系统**
    - **PR #3012** 和 **#3013** 是强烈的信号，表明项目正在积极构建**提供者无关的持久化记忆**能力。这将是下一版本的核心功能，预计将显著提升智能体的长期对话和个性化能力。

- **高可能纳入版本的功能：**
    - **频道默认值重构 (#3010, #3011)**：这个架构调整大概率会随下个版本推出，因为它重新定义了频道行为的配置方式，是更干净、可扩展的基础。
    - **任务系统改造 - 单入口交付 (#2988, 待合并)**：作为系列 PR 的一部分，强制任务仅通过 `send_message` 进行交付，简化了任务的生命周期管理，是提升任务系统稳定性的关键步骤，预计会很快合并。
    - **iMessage 频道统一 (#2999, 待合并)**：对于 iMessage 用户，这是一个直接的体验提升，集成到下一版本的可能性很高。

---

### 7. 用户反馈摘要

从今日的 Issues 中，可以提炼出典型的用户痛点和使用场景。

- **新用户配置痛点**：Issue #2415 和 #2389 的创建者（glifocat, alexli-77）都是通过 `bin/ncl` CLI 工具进行设定的开发者。这些 Bug 直接导致其创建的组无法正常收发消息，严重影响了新用户的“首次体验”。这说明**命令行工具的健壮性和端到端流程的完整性**对吸引和保留开发者用户至关重要。
- **数据迁移/兼容性担忧**：Issue #3001 揭示了一个潜在大范围影响的问题：进行共享技能重构后，**旧有的组因为保留了过时的技能副本，导致无法接收系统更新**。这反映了用户对系统升级后数据兼容性的担忧。用户希望此类变更能给出清晰的迁移指南或自动迁移脚本。

---

### 8. 待处理积压

虽然今日整体进展迅速，但仍有一些重要的 PR 处于“待合并”状态，需要维护者关注。

- **PR #2966 fix(agent-runner): log when an errored batch is acked completed** (作者: glifocat)
    - **链接**: [PR #2966](nanocoai/nanoclaw PR #2966)
    - **状态**: **开放** (待合并, 4天)
    - **备注**: 这是一个提升 agent-runner 稳健性的修复，能让开发者及时发现错误批次被错误标记的异常情况，建议优先审查合并。

- **PR #2877 feat(telegram): native rich rendering via Bot API 10.1 sendRichMessage** (作者: robbyczgw-cla)
    - **链接**: [PR #2877](nanocoai/nanoclaw PR #2877)
    - **状态**: **开放** (待合并, 13天)
    - **备注**: 这是一个较老的社区贡献 PR，提供了 Telegram 频道的富文本渲染能力。虽然功能有价值，但等待时间较长，可能需要与近期合并的频道默认值重构进行一些适配工作。建议维护者提供明确的状态反馈，或引导贡献者进行必要的更新。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

好的，这是为您生成的 NullClaw 项目动态日报。

---

# NullClaw 项目动态日报 | 2026-07-11

**分析师：** AI 智能体与个人 AI 助手领域开源项目分析师
**数据来源：** github.com/nullclaw/nullclaw
**报告周期：** 2026-07-10 至 2026-07-11

---

### 1. 今日速览

项目今日活跃度处于 **中等** 水平。尽管没有新版本发布或 Pull Request (PR) 合并，但社区反馈活跃，提出了两个值得关注的问题：一个涉及 Telegram 通道在空闲后停止响应的稳定性 Bug，另一个则是关于共享 Bearer Token 的安全漏洞。这表明项目当前可能正处于一个 **维护与审查阶段**，重点在于解决社区报告的紧急问题，而非推进新功能。核心代码库的提交节奏暂时放缓，社区沟通集中在问题的诊断上。

### 2. 版本发布

**无**。过去24小时内没有新版本发布。

### 3. 项目进展

**无重大进展**。过去24小时内没有 Pull Request 被合并或关闭。项目代码库在功能推进上暂无明显变化。

### 4. 社区热点

今日讨论最活跃的 Issue 是：

- **[Bug] [Issue #972] telegram channel stop respond after some idle time**（[查看详情](https://github.com/nullclaw/nullclaw/issues/972)）
  - **热度分析**：该 Issue 获得 **2条评论**，且已持续活跃超过10天（从6月30日至今），反映了该问题对用户的实际使用产生了较大影响。
  - **核心诉求**：用户报告 Telegram 集成在空闲数小时后（如过夜）会变得无响应。尽管后端（nullclaw agent）似乎仍在正常运行（执行 “ping” 命令成功），但 Telegram 通道却 “死亡” 了。社区的诉求是 **诊断并修复 Telegram 通道的空闲超时或连接断开重连机制**。

### 5. Bug 与稳定性

今日报告了两个 Bug，按严重程度排列如下：

1.  **严重/安全**
    - **[Bug] [Issue #974] NullClaw shared bearer A2A route allows cross-caller task and context reuse**（[查看详情](https://github.com/nullclaw/nullclaw/issues/974)）
    - **严重性**：**高**。这是一个安全漏洞。描述指出，虽然 `/a2a` 路由受到 Bearer Token 保护，但在后续的任务和会话（Task/Session）授权中，仅依靠用户提供的 `taskId` 和 `contextId` 进行选择。这使得共享同一 Token 的不同用户（如 Bob 和 Alice）可以互相读取和复用对方的任务历史与上下文。
    - **状态**：新开启， **尚无修复 PR**。需要项目维护者立即评估和修复。

2.  **中等/稳定性**
    - **[Bug] [Issue #972] telegram channel stop respond after some idle time**（[查看详情](https://github.com/nullclaw/nullclaw/issues/972)）
    - **严重性**：**中**。该问题影响特定用户的使用体验，但后台 Agent 仍在运行，表明问题可能出在通道的保活连接或消息推送机制上，而非核心推理引擎崩溃。
    - **状态**：活跃中， **尚无修复 PR**。建议优先排查 Telegram Bot API 的长轮询（Long Polling）或 Webhook 连接的健壮性问题。

### 6. 功能请求与路线图信号

- **间接信号**：**[Issue #974]** 虽然是 Bug 报告，但它揭示了一个潜在的功能改进方向：**细粒度的访问控制**。当前 “共享 Bearer” 的机制过于粗糙，社区可能期望一个更完善的、支持多租户隔离或任务级别权限管理的身份验证与授权架构。这可能是未来版本需要重点考虑的安全特性。

### 7. 用户反馈摘要

- **用户痛点**：
  - **不稳定**：Telegram 集成存在空闲后断开且无法自动恢复的问题（Issue #972）。用户明确指出了 “工作良好在后台，但对用户无响应” 这一矛盾点，说明问题出在消息传递层而不是核心服务。
  - **安全担忧**：共享 Bearer 导致的数据泄露风险引发了用户的严肃反馈（Issue #974）。报告中提到 Bob 和 Alice 的场景，清晰地描绘了安全边界被破坏的后果，这可能是潜在的企业用户或对隐私要求较高的个人用户所关心的。

### 8. 待处理积压

目前需要项目维护者特别关注以下长期未解决或紧急的 Issue：

1.  **[Issue #972] [Bug] telegram channel stop respond after some idle time**（[查看详情](https://github.com/nullclaw/nullclaw/issues/972)）
    - **滞留时间**：自 2026-06-30，已活跃11天。
    - **状态**：无官方回复或标记。该问题尚未被分配或评论，社区可能在等待维护者确认能否复现或提供诊断思路。长时间的沉默可能会打击用户积极性。

2.  **[Issue #974] [BUG] NullClaw shared bearer A2A route allows cross-caller task and context reuse**（[查看详情](https://github.com/nullclaw/nullclaw/issues/974)）
    - **紧急度**：**最高**。该 Issue 虽然刚刚创建，但因涉及安全权限问题，需要立即响应。建议维护者第一时间标记为 `bug` 和 `security` 标签，并给出初步评估，哪怕只是确认收到报告。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，根据您提供的 IronClaw 项目数据，以下是 2026 年 7 月 11 日的项目动态日报。

---

### IronClaw 项目动态日报 (2026-07-11)

**项目名称:** IronClaw (github.com/nearai/ironclaw)
**数据统计周期:** 2026-07-10 至 2026-07-11
**分析师:** AI 开源项目分析师

---

### 1. 今日速览

今日 IronClaw 项目处于 **高度活跃** 状态，开发与反馈双线并行，强度显著。24小时内涌现大量Issues（36条）和PR（50条），显示社区测试（bug_bash）结果正集中回传，同时工程团队也在积极处理核心稳定性问题。**核心主题**聚焦于“**Reborn**”运行时（即新一代架构）的 **稳定性和可靠性**，具体体现在对`bug_bash_P2/P3`级别问题的批量报告，以及一系列旨在强化韧性的规模宏大的PR。尽管没有新版本发布，但项目内部正经历一轮深度的“技术债务清理与加固”周期，整体项目健康度处于“**积极修复**”状态，但稳定性和用户体验仍面临挑战。

### 2. 版本发布

**无**

---

### 3. 项目进展

今日项目在“Reborn”运行时稳定性和核心机制上取得关键进展，一系列重要PR被合并，标志着项目正向更健壮的架构迈进：

- **启动崩溃与集成修复:**
    - **PR #5967** (已合并): 修复了一个严重的启动崩溃问题（Issue #5966）。当持久化卷上存在无效的扩展清单时，系统会陷入崩溃循环，现已改为跳过无效项。
    - **PR #5950** (已合并): 作为“Harness 端口接缝计划”的一部分，将生产的 LocalDev 能力端口组装暴露给集成测试环境，为后续消除测试与生产环境的差异铺路。

- **核心引擎韧性提升:**
    - **PR #5895** (已合并): 修复了因上下文压缩（Compaction）失败导致运行崩溃的问题（#5838）。现在此类错误被视为可恢复的提示步骤跳过，而非终结运行的失败，提升了长时间运行的容错性。
    - **PR #5960** (已合并): 将默认的循环迭代上限从 **32 提升至 256**。这是一个根本性改进，旨在解决工具调用密集型任务（如分块读取大型文档）因迭代上限耗尽而导致运行失败的问题。

- **故障分类与分析框架:**
    - **PR #5954** (已合并): 为“运行失败原因（RunFailureReason）”分类漏斗打下了基础。虽然目前还未接入任何消费方，但为未来精确诊断和报告运行失败原因提供了必要的分类框架。
    - **PR #5961** (已合并): 为编码技能增加了“**先验证，再完成**（Verify Before You Finish）”的准则，旨在提升模型生成代码的自我校验能力，减少因遗漏验证导致的错误。

**小结：** 项目在解决关键性崩溃和性能瓶颈方面取得了实质性进展，同时开始构建长期可观测性和测试基础设施，向着更成熟、可靠的方向迈进了一大步。

---

### 4. 社区热点

今日的讨论热点高度集中在 **`bug_bash`** 活动中暴露的**用户交互与反馈**问题，普遍反映了社区对产品体验的高要求和对核心反馈链路准确性的不满。

- **热点 Issue #5948 "[bug_bash_P3] 助手错误报告 GitHub 扩展已激活"** ([链接](https://github.com/nearai/ironclaw/issues/5948))
    - **评论数:** 5 (最高)
    - **诉求分析:** 用户对AI助手给出的“错误信息”感到困惑。助手声称某功能已配置好，但UI界面清晰地显示其并未激活。这种**信息不一致**直接动摇了用户对整个系统的信任。社区的核心诉求是：**AI的状态感知必须与系统的真实状态保持一致**，哪怕是“我不确定”也比“错误”要好。

- **热点 Issue #5747 "[已关闭] 无法在 Slack 集成中取消配对"** ([链接](https://github.com/nearai/ironclaw/issues/5747))
    - **评论数:** 3
    - **诉求分析:** 这是一个典型的“无法撤销操作”问题。一旦用户绑定了Slack，就再也找不到解绑的途径。这表明系统的**用户自助服务（Self-Service）能力存在缺陷**，尤其是关键的生命周期管理（连接/断开）功能不完整。社区期望可以随时控制自己的集成连接。

- **热点 Issue #5891 "[bug_bash_P3] 运行详情页显示错误时间戳"** ([链接](https://github.com/nearai/ironclaw/issues/5891))
    - **评论数:** 2
    - **诉求分析:** UI将“**当前正在运行**”的时间戳错误地展示为“**上次完成**”的时间。这属于数据语义错误，会使用户对当前任务的进度和状态产生严重误判。社区需要的是**清晰、无歧义的状态指示**，任何可能混淆“正在进行”与“已完成”的UI设计都是不可接受的。

---

### 5. Bug 与稳定性

今日报告的 Bug 数量众多，且严重程度主要集中在中高等级（P2）。**Slack集成的可靠性问题**成为重灾区。

**严重 (P1/P2):**

1.  **Slack DM 发送失败/错发 (Issues #5943, #5944)**
    - **状态:** 严重 P1/P2，**尚无修复PR**。
    - **问题:** [#5943](https://github.com/nearai/ironclaw/issues/5943) 请求发送Slack DM，消息却发到了当前频道；[#5944](https://github.com/nearai/ironclaw/issues/5944) 系统报告“发送成功”，但用户未收到消息。
    - **影响:** 核心通信功能完全失效，且**静默失败**模式会严重误导用户，影响极差。

2.  **Slack 集成流程断裂 (Issue #5834)**
    - **状态:** 严重 P2，**尚无修复PR**。
    - **问题:** 用户请求助手断开Slack连接时，助手拒绝执行，导致用户无法通过常规方式解绑。
    - **影响:** 用户无法控制自己的集成，属于功能硬伤。

3.  **长时间运行后失败 (Issue #5945)**
    - **状态:** 严重 P2，**尚无修复PR**。
    - **问题:** 在多工具调用的长任务（34次调用）后，系统以通用的“模型提供商不可用”错误失败，信息不足。
    - **影响:** 用户投入了大量时间后任务失败，且无法获得有意义的错误原因以指导重试或排错。

4.  **UI/UX 功能失效 (Issues #5836, #5837, #5885)**
    - **状态:** 严重 P2，**尚无修复PR**。
    - **问题:** [#5836](https://github.com/nearai/ironclaw/issues/5836) 定时任务因“无附加线程”而失败；[#5837](https://github.com/nearai/ironclaw/issues/5837) 失败任务的“打开运行/日志”按钮不可点击；[#5885](https://github.com/nearai/ironclaw/issues/5885) 审批通知点击后不显示审批卡片。
    - **影响:** 核心用户交互功能不可用，严重阻碍用户排查问题和执行工作流。

**一般 (P3):**

-   **信息误导/UI显示问题:** (Issues #5948, #5891, #5879, #5947) 涉及助手错误报告状态、时间戳错误、错误横幅不消失、线程删除后不更新等，损害用户信任感。
-   **交互功能瑕疵:** (Issue #5889) “加载更早消息”按钮无效。

**小结：** **Slack集成是当前最大的稳定性短板**，其核心功能存在严重缺陷。此外，UI状态与系统真实不同步的问题普遍存在，急需改进有意义的错误提示和UI反馈。

---

### 6. 功能请求与路线图信号

从今日的Issues和PR中，可以识别出一些重要的路线图信号：

- **MCP (Model Context Protocol) 集成深化:** PR #5970 正在开发“**每用户MCP注册存储**”，这暗示项目将支持用户级别的、更精细化的MCP工具管理。这可能是下一阶段的重要功能。
- **错误恢复能力提升:** 数个“弹性”相关的 PR (#5959, #5965) 正在讨论或等待合并。这些PR旨在让工具调用的失败对模型“可见且可恢复”，而不是直接杀死整个运行。这表明项目正从“简单失败”转向“**容错**”设计哲学。
- **预算与配额管理:** PR #5964 正在开发“**预算审批作为阻塞资源门控**”功能。这表明项目正在考虑为多用户或生产环境下的资源使用引入更精细的控制机制。
- **遗留系统剥离:** Issue #5935 明确提出“**淘汰v1运行时**”并删除遗留代码。这是个强烈的信号，表明团队将全力押注“Reborn”架构，并开始清理历史债务，以简化维护和加速未来开发。

---

### 7. 用户反馈摘要

从今日的Issues评论中，可以提炼出以下核心用户反馈：

- **“信息不一致”是最大的痛点：** 用户多次抱怨“系统显示成功但实际没收到”、“UI显示/助手说A，但看起来是B”。这严重影响了用户对系统的整体信任。
- **“无自助解决方案”令人沮丧：** 关于Slack无法解绑（#5747）和助手拒绝执行断开操作（#5834）的问题，反映了用户期望能有“撤销”或“断开”的自助能力，而当前系统缺乏这种灵活性，让用户感到被“锁死”。
- **“静默失败”不可接受：** 无论是Slack DM未发送（#5944）还是长时间任务失败（#5945），用户都对系统报告“成功”或给出模糊错误感到不满。用户期望的是**明确、精准且可操作**的失败原因。
- **“为了测试功能，耗时且无果”的挫败感：** 在 `bug_bash` 活动中，用户尝试创建自动化流程（#5946）、发起长时间任务（#5945）时，遇到了各种功能中断，这无疑会消耗测试者的耐心，并降低其对产品成熟度的预期。

---

### 8. 待处理积压

- **Issue #5640 "Harness 集成测试安全审计槽缺失"** ([链接](https://github.com/nearai/ironclaw/issues/5640))
    - **创建时间:** 2026-07-04
    - **状态:** 开放，评论极少。
    - **分析:** 此Issue指出集成测试环境与生产环境在安全审计（Security Audit）方面存在差异。这个“Harness 缺口”可能隐藏着未被测试覆盖的安全问题。尽管它可能不是用户直接感知的，但对于一个旨在成为可靠基础架构的项目来说，这是一个需要高度关注的**技术债务**。虽然今天有PR #5950在推进相关改进，但此特定Issue仍需维护者明确后续计划。

- **Issue #5741 "'builtin.http.save' 工具因输出过大而失败"** ([链接](https://github.com/nearai/ironclaw/issues/5741))
    - **创建时间:** 2026-07-06
    - **状态:** 开放，有2条评论。
    - **分析:** 用户在保存网页内容时遇到了“输出过大”的错误。这限制了工具的使用场景（如保存长文档、新闻页面等）。此Issue需要从**错误处理策略**（是扩容还是优雅降级）和**用户提示**（当失败时，助手应如何向用户解释）两个维度进行评估。目前尚无明确的修复计划。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，作为 LobsterAI 开源项目的分析师，我已根据您提供的 GitHub 数据，为您生成 2026-07-11 的项目动态日报。

---

# LobsterAI 项目动态日报 | 2026-07-11

## 1. 今日速览

今日项目处于 **高活跃度** 状态，核心团队在发布新版本后，迅速合并了多项关键修复及功能，项目迭代节奏稳健。PR 合并/关闭数量（10条）远超新开数量（7条），表明维护者正在高效地清理积压工作。值得关注的是，一个关于多 Agent 配置被覆盖的 Bug (#2293) 受到社区关注，已产生用户讨论，是目前需要优先关注的稳定性问题。整体而言，项目在保持功能创新的同时，正着力修复精细化使用场景下的 Bug，并积极跟进社区提出的老旧功能请求。

## 2. 版本发布

**新版本：LobsterAI 2026.7.10**

此版本于昨天（2026-07-10）发布，是项目近期的里程碑式更新。
-   **核心功能新增：**
    -   **代理子任务协作 (Delegated Subagent Collaboration)**：`feat(agents)` 引入了子代理协作能力，这是构建复杂自动化流程的重要一步。
    -   **最小化权限提示 (Minimizable Permission Prompts)**：`feat(cowork)` 在协作工作流中增加了可最小化的权限请求提示，减少了用户被打断的频率。
-   **关键修复：**
    -   **IM 群聊任务路由修复**：针对 #2306 等问题，修复了企业微信和钉钉定时任务中的群聊 ID 大小写问题，并优化了路由逻辑。
    -   **内存索引迁移**：修复了 `fix(memory)` 模块，确保所有 Agent 的全文搜索索引可以被正确迁移。
-   **破坏性变更 & 迁移注意事项：**
    -   **内存索引需要重建**：本次版本对内存索引的迁移逻辑进行了修复。如果你是旧版本用户，且配置了多个 Agent，启动后系统可能会自动触发一次全 Agent 的内存索引重建。此过程可能占用部分 CPU 和内存资源，建议在非高峰时段启动新版本。

## 3. 项目进展

过去 24 小时内，项目合并了多项重要 PR，显著提升了软件的稳定性与用户体验。

-   **核心稳定性修复**
    -   **[#2293关联]** [PR #2311 - fix(memory): migrate fts-only indexes for all agents](https://github.com/netease-youdao/LobsterAI/pull/2311)：修复了内存索引迁移问题，为所有 OpenClaw Agent 正确处理全文搜索索引，是解决“USER.md 被覆盖”问题的基础。
    -   **[#2306关联]** [PR #2314 - fix(scheduled-task): preserve WeCom and DingTalk group ID casing](https://github.com/netease-youdao/LobsterAI/pull/2314)：完全解决了 #2306 中的 IM 群聊定时任务路由问题，修复了企业微信和钉钉群组 ID 在传递过程中被转换为小写导致投递失败的 Bug。
    -   **[#2266关联]** [PR #2309 - fix(build): keep null-byte stripping ES2020-compatible](https://github.com/netease-youdao/LobsterAI/pull/2309)：修复了构建兼容性问题，确保代码在更广泛的 JavaScript 环境中正常运行。

-   **Cowork 模块增强**
    -   **[#2310关联]** [PR #2310 - feat(cowork): add folder context attachments](https://github.com/netease-youdao/LobsterAI/pull/2310)：新增了“文件夹上下文附件”功能，允许用户将本地文件夹作为上下文附件发送给 Agent，而不是上传文件夹内的所有文件，极大提升了处理本地项目或资料库场景的效率。
    -   **[#2313关联]** [PR #2313 - fix(cowork): submit only the selected queued steer](https://github.com/netease-youdao/LobsterAI/pull/2313)：修复了 Cowork 队列处理中的逻辑问题，确保只提交用户选中的请求，并保持了队列的先进先出（FIFO）顺序。
    -   **[#2315关联]** [PR #2315 - fix(cowork): connect queued follow-up coordinator](https://github.com/netease-youdao/LobsterAI/pull/2315)：修复了跨会话和应用最小化时，队列中后续任务的处理连接问题。

-   **开发者体验 & 基础设施**
    -   [PR #1276](https://github.com/netease-youdao/LobsterAI/pull/1276) 和 [PR #1275](https://github.com/netease-youdao/LobsterAI/pull/1275) 中，Dependabot 自动更新了 `actions/first-interaction` 和 `actions/stale` 等 CI/CD 依赖，保持了项目基础设施的健康。

## 4. 社区热点

-   **热点 Issue: [Bug] 多 Agent 下 USER.md 被覆盖**
    -   **链接**: [Issue #2293](https://github.com/netease-youdao/LobsterAI/issues/2293)
    -   **热度**: 有 3 条评论，是今日最活跃的 Issue。
    -   **用户诉求**: 用户 `yepcn` 报告了一个严重影响多 Agent 工作流的 Bug：修改一个 Agent 的“关于你”设置或 `USER.md`，会导致所有 Agent 的配置被同步覆盖。用户进一步定位到，重启软件后，所有 Agent 的 `USER.md` 都会被 `main agent` 的内容替换。这是一个严重的配置隔离问题，破坏了多 Agent 的核心理念。用户情绪较为困惑和担忧，希望开发者能尽快确认并修复。

## 5. Bug 与稳定性

| 严重程度 | Issue ID | 标题 | 摘要 | 修复状态 |
| :--- | :--- | :--- | :--- | :--- |
| **紧急** | [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) | 多Agent下USER.md被覆盖 | 修改一个Agent的配置会同步覆盖其他Agent，且重启后会被main agent覆盖。 | **待定**。虽然今日的 [PR #2311](https://github.com/netease-youdao/LobsterAI/pull/2311) 修复了内存索引问题，但该 Issue 可能涉及更底层的配置加载逻辑，需关注后续是否有专门修复。 |
| 高 | [#2306 (关联)](https://github.com/netease-youdao/LobsterAI/issues/2306) | IM群聊定时任务路由 | 企业微信和钉钉的群聊ID大小写问题导致任务投递失败。 | **已修复**。通过 [PR #2314](https://github.com/netease-youdao/LobsterAI/pull/2314) 解决。 |
| 中 | [#1331](https://github.com/netease-youdao/LobsterAI/pull/1331) | 会话列表错误状态红点 | 为Cowork会话列表添加错误状态指示器，提升可视化问题定位能力。 | **待合并** (Open PR)。 |
| 低 | [#2312](https://github.com/netease-youdao/LobsterAI/pull/2312) | fix: askuser minimize state loss | 修复 `askuser` 功能在最小化后状态丢失的问题。 | **已修复**。已合并。 |
| 低 | [#2316](https://github.com/netease-youdao/LobsterAI/pull/2316) | 修复Windows标题栏Logo压缩 | 修复了Windows平台侧边栏折叠时标题栏Logo被压缩的UI问题。 | **已修复**。已合并。 |

## 6. 功能请求与路线图信号

-   **强烈信号 - 会话管理优化**
    -   **Issue**: [#1337 - 会话列表缺少按时间分组功能](https://github.com/netease-youdao/LobsterAI/issues/1337)
    -   **关联 PR**: [#1338 - 会话列表按时间分组展示](https://github.com/netease-youdao/LobsterAI/pull/1338)
    -   **分析**: 这是一个由社区提出、并已有对应实现 PR 的功能请求。该 PR 已存在一段时间并持续更新，表明维护者在考虑将其纳入主线。这极有可能成为 **下一个版本或未来几个版本中** 的一个重要 UX 改善点，尤其是对于拥有大量会话的重度用户。
-   **中等信号 - 可用性增强**
    -   **PR**: [#1335 - feat(scheduledTask): add workdays (Mon-Fri) schedule option](https://github.com/netease-youdao/LobsterAI/pull/1335)
    -   **PR**: [#1336 - feat(mcp): 自定义服务器配置支持 JSON 粘贴导入](https://github.com/netease-youdao/LobsterAI/pull/1336)
    -   **分析**: 这两个 PR 分别针对定时任务和 MCP 配置，提供了更贴合用户实际使用习惯的选项（工作日定时）和更便捷的配置方式（JSON导入）。它们是提升产品易用性的有力候选，若无冲突，很可能被纳入后续的迭代中。

## 7. 用户反馈摘要

-   **严重痛点**: `yepcn` 用户在 Issue #2293 中反映了当前最核心的痛点：**多Agent配置隔离失效**。他描述了详细的使用场景（建立不同Agent以处理不同需求）和复现步骤（手动修改文件后重启），表达了对该 Bug 严重影响其工作流的担忧。这表明用户正在深入使用多Agent功能，并对此有较高期待，Bug 的出现可能会导致用户对该核心功能产生不信任感。
-   **期待已久的优化**: Issue #1337 的创建者 `MaoQianTu` 明确指出了 **会话列表缺乏组织性** 的问题，并参照了 ChatGPT 等主流产品提出了详细的改进方案。这代表了资深用户对软件成熟度提升的期望，侧面反映了项目已从“能用”阶段向“好用”阶段过渡。

## 8. 待处理积压

以下 Issue 或 PR 处于长期“待处理（Stale）”状态，但可能仍有价值，提醒维护者关注或决策。

-   **[Open PR #1331](https://github.com/netease-youdao/LobsterAI/pull/1331) / [Issue #1330]**: 添加会话错误状态红点。这是一个较小的 UI 增强，但能显著提升用户对运行错误的感知能力。可以考虑将其合并至 `CoworkSessionItem` 的重构工作中。
-   **[Open PR #1333](https://github.com/netease-youdao/LobsterAI/pull/1333)**: 修复 Agent 和 Cowork 流程中的 i18n、Escape 关闭、删除保护等 UX 问题。这是一个集合了多个小修复的 PR，长期未合并可能导致与最新代码产生冲突。
-   **[Open PR #1336](https://github.com/netease-youdao/LobsterAI/pull/1336)**: MCP 配置支持 JSON 导入。这是一个用户呼声很高的功能，可以大幅降低高级用户的配置门槛。建议维护者评估其与当前 MCP 配置界面的兼容性并推动合并。
-   **[Open Issue #1392](https://github.com/netease-youdao/LobsterAI/pull/1336)**: 定时任务开关无法点击。虽然已被标记为“stale”并关闭，但问题本身可能并未解决。如果仍有用户报告类似问题，建议维护者重新开启或创建新的 Issue 并给予明确的状态说明。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

好的，这是根据您提供的Moltis项目GitHub数据生成的2026年7月11日项目动态日报。

---

## Moltis 项目动态日报 | 2026-07-11

### 1. 今日速览

今日项目整体活跃度较低，未发现新的Issue和版本发布。社区贡献主要集中在一条关键的Pull Request上，该PR旨在为项目添加对最新GPT-5.6系列模型的支持。尽管代码更新频率不高，但这条PR标志着Moltis正在紧跟AI模型前沿，积极扩展其核心的模型兼容性。项目整体处于稳健的功能演进状态，暂未出现需要紧急处理的Bug或社区热点。

### 2. 版本发布

无

### 3. 项目进展

今日无合并或关闭的PR。目前有一项重要的功能添加工作正在进行中：

- **[#1146] Add GPT-5.6 model support** [待合并]
  该PR由贡献者 `PeterDaveHello` 提交，旨在为Moltis项目引入对OpenAI最新GPT-5.6系列模型（Sol, Terra, Luna）的支持。主要工作包括：
    - 在OpenAI和OpenAI Codex的后备模型目录中注册新的GPT-5.6模型。
    - 根据文档，应用了OpenAI API的1.05M上下文窗口限制以及ChatGPT/Codex后端的372K限制。
    - 更新了配置文件示例和供应商选择文档，移除了已被取代的旧模型引用。

  **分析**：此更新是确保Moltis用户能够通过平台无缝使用最新、最强大AI模型的关键一步。一旦合并，将提升项目的实用性和竞争力。目前该PR仍处于开放状态，需要项目维护者进行代码审查和合并。

  📎 [Moltis PR #1146](https://github.com/moltis-org/moltis/pull/1146)

### 4. 社区热点

今日无广泛讨论或高互动的Issues或PRs。仅有的一个PR #1146尚未收到任何评论或点赞，表明社区可能还在消化该变更，或者项目当前的关注点主要集中在对该功能的验证上。

### 5. Bug 与稳定性

今日无新报告的Bug。项目当前稳定，没有观察到任何崩溃或回归问题。

### 6. 功能请求与路线图信号

今日无新的功能请求。然而，**PR #1146 “Add GPT-5.6 model support”** 本身是对“支持最新模型”这一强需求的最直接回应。考虑到GPT-5.6是该领域的最新进展，这条PR很可能反映了用户社区的核心诉求。可以预期，一旦此PR合并，下一个小版本（或下一个小迭代）将包含此功能。

### 7. 用户反馈摘要

由于今日没有新的评论或讨论，无法从社区交流中提炼用户反馈。不过，从PR #1146的提交摘要中可以看出，贡献者 `PeterDaveHello` 非常注重细节，明确处理了模型命名、上下文窗口限制和文档更新，这反映了用户期望的不仅是简单的模型添加，更是一次性解决因模型更新带来的所有配置和文档问题，追求“开箱即用”的体验。

### 8. 待处理积压

- **[PR #1146] Add GPT-5.6 model support**
  该PR是当前唯一待处理的重要工作项，已开放超过24小时。考虑到其内容对项目价值有显著提升，建议项目维护者尽快安排审查和合并，以便社区能尽早使用新功能。当前无评论和评审者的状态值得关注。

  📎 [Moltis PR #1146](https://github.com/moltis-org/moltis/pull/1146)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是基于提供的数据生成的 **CoPaw (QwenPaw) 项目动态日报**。

---

# CoPaw (QwenPaw) 项目动态日报 | 2026-07-11

## 1. 今日速览

CoPaw 项目今日迎来里程碑式进展，**v2.0.0 稳定版正式发布**，标志着重大的架构升级。过去 24 小时项目社区高度活跃，处理了 **44 条 Issue** 和 **49 个 PR**，其中 v2.0.0 发布相关的 Bug 报告和功能讨论是绝对热点。尽管新版本带来了不少 Bug（如 MCP 权限失效、内存爆炸等），但开发团队响应迅速，已有多项关键修复通过 PR 打入。整体来看，项目处于 **“大版本迭代后的集中修复与优化期”**，健康度良好但稳定性有待快速加强。

## 2. 版本发布

今日发布了 3 个新版本，其中最引人注目的是 **v2.0.0 稳定版**。

- **v2.0.0 (Stable)**：
    - **主要内容：** 这是基于 **AgentScope 2.0** 的重构版本，代号 `Runtime 2.0`，是项目架构的全面升级。
    - **主要特性：** 提供了全新的核心运行时、对 AgentScope 2.0 新架构和 API 的完整支持。
    - **破坏性变更：** **这是一个 Breaking Change 版本。** 后端依赖从 `AgentScope 1.x` 迁移至 `AgentScope 2.0`。用户的数据、配置、自定义 Agent 和行为可能不兼容。
    - **迁移指南：** 社区已有多位用户请求官方提供详细的升级指南（见 Issue #5948），请密切关注官方文档的更新。

- **v2.0.0-beta.7** (候选版本)：
    - **主要内容：** 主要修复了内存模块的一个关键 Bug，确保 `ReMe` 总结任务能正确关联会话 ID，并对网站主页进行了视觉更新。

- **v2.0.0-beta.6** (候选版本)：
    - **主要内容：** 修复了 `envelope` 模块中关于工具结果错误状态传递的问题，并新增了大量单元测试。

## 3. 项目进展

- **核心架构升级完成：** 项目通过 **PR #5942** 和 **PR #5932** 等形式，正式发布了 **v2.0.0** 版本，标志着从 AgentScope 1.x 到 2.0 的迁移工作基本完成（详见 Issue #4727）。
- **Bug 修复迅速跟进：**
    - **MCP 权限即时生效**：**PR #5949** 修复了 MCP 工具访问策略修改后需要重启才能生效的问题，解决了 Issue #5947 的痛点。
    - **会话记忆修复**：**PR #5938** 修复了 `/compact` 等操作导致记忆无法正确关联到会话的问题，这是一个严重 Bug。
    - **截断提示优化**：**PR #5953** 正尝试解决因工具输出截断导致 Agent 反复进行无效记忆调用的 Bug（Issue #5946），优化了交互体验。
- **功能增强进行中：**
    - **Windows 沙箱**：**PR #5931** 引入了基于受限令牌的 Windows 沙箱，旨在解决桌面端的安全和性能问题。
    - **Vision 降级**：**PR #5726** 实现了当主模型不支持图片时，自动切换到备用的视觉模型进行处理的功能。
    - **可观测性增强**：**PR #5922** 开始在 Langfuse 追踪中记录用户、会话和版本信息。
    - **多平台命令补齐**：**PR #5869** 为 TUI 和 Web 控制台添加了斜杠命令的自动补全功能。

## 4. 社区热点

过去 24 小时内，社区讨论最热烈的是 v2.0.0 版本发布后暴露的各类问题。

- **Hot Issue #1: v2.0.0 发布与问题跟踪** (Issues #5945, #5273, #5944)
    - 用户 `vipcys001-bot` 发帖庆祝 v2.0.0 正式发布，同时官方通过 `release-duty` 角色（#5944）进行安装验证，而 #5273 作为 v2.0.0 的集中 Bug 跟踪帖，仍在持续收到新反馈。这表明社区对新版本**期待与焦虑并存**。

- **Hot Issue #2: 桌面壳沙箱内存爆炸** (Issue #5951)
    - **评论数：5**。用户 `wjt0321` 报告的严重问题，升级后执行 `execute_shell_command` 导致 `pwsh` 窗口递归爆炸，内存瞬间飙升至 20GB。该反馈**未获得官方直接回复**，是今日社区不安情绪的主要来源。

- **Hot Issue #3: MCP 子工具访问控制失效** (Issue #5947)
    - **评论数：4**。用户 `vipcys001-bot` 反馈，即使明明在 MCP 配置中拒绝了某些子工具，Agent 依然可以调用。这直接违反了用户对访问控制的预期，是一个破坏安全感的 Bug。好消息是，对应的修复 **PR #5949** 已经在同一天被提出。

## 5. Bug 与稳定性

| 严重程度 | Bug 描述 | Issue 链接 | 修复状态 |
| :--- | :--- | :--- | :--- |
| **紧急** | Windows 桌面沙箱因 `icacls` 超时导致 `pwsh` 进程爆炸，内存瞬间吃满，且无法强制关闭。 | [#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951) | 尚无 PR，**急需关注** |
| **高** | MCP 中禁用的子工具权限未生效，Agent 仍可调用。 | [#5947](https://github.com/agentscope-ai/QwenPaw/issues/5947) | **[已修复] PR #5949** 已提交 |
| **高** | 使用中文（如 bge-m3）embedding模型时，因字符数截断逻辑错误导致400错误。 | [#5950](https://github.com/agentscope-ai/QwenPaw/issues/5950) | 尚无 PR |
| **高** | 长工具输出截断提示误导Agent进行无效的 `recall_history` 调用，造成循环。 | [#5946](https://github.com/agentscope-ai/QwenPaw/issues/5946) | **[修复中] PR #5953** 已提交 |
| **中** | `Auto Memory Search` 功能产生格式错误的 `function_call`，导致 OpenAI API 返回 502 错误。 | [#5910](https://github.com/agentscope-ai/QwenPaw/issues/5910) | 尚无 PR |
| **中** | `auto-memory` 后台任务因缺少模块 (`agentscope.tool._builtin._scripts`) 而失败。 | [#5952](https://github.com/agentscope-ai/QwenPaw/issues/5952) | 尚无 PR |
| **中** | 上下文压缩时，`tool_call` 结构信息丢失，导致模型请求出错。 | [#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856) | 尚无 PR |

## 6. 功能请求与路线图信号

- **高潜力功能 - 会话管理**：**Issue #5903** 请求增加会话分组、导入/导出功能，以解决会话杂乱问题。**PR #5943**（设计提案）已被提出作为响应。这很可能是下一个版本的核心功能之一。
- **频繁请求 - 主题定制**：**Issue #5909** 提出了一个正式的设计方案，用于实现可配置的主题/皮肤模块，对应原 Issue #2291。社区对此功能的呼声较高，已进入设计讨论阶段。
- **体验增强 - 数学公式渲染**：**Issue #5453** 请求支持 KaTeX 或类似的 LaTeX 公式渲染，这对于需要处理科学计算和数学内容的用户是刚需。
- **生态完善 - 反馈机制**：**Issue #3623** 提出了多智能体会话间的异步反馈机制（例如任务移交后互相反馈）。这是一个高级协作场景功能，体现了用户对 Agent 间协作能力的更高期待。

## 7. 用户反馈摘要

- **赞扬与期待**：用户对 `v2.0.0` 的发布表示祝贺（#5945），同时对升级后的功能（如 `Mission` 模式）和长文本处理能力抱有期待。社区新贡献者（如 `nolanchic`）积极参与功能设计与贡献，生态活力强。
- **升级焦虑**：多位用户（#5948, #5954）在咨询 v2.0.0 的升级指南，明确表达了对于 **“历史消息、日志、记忆是否兼容”**（#5948）的担忧。这表明文档和迁移工具的缺失是当前最大的用户痛点之一。
- **功能使用挫败感**：MCP 权限控制（#5947）和飞书、企业微信等渠道的连接稳定性（#3502, #3432）是老生常谈的问题，v2.0.0 并未完全解决。**“拒绝设置无效”** 的反馈直接打击了用户对系统安全控制的信心。
- **中文环境优化需求**：中文 embedding 截断问题（#5950）和 Windows GBK 编码兼容性（PR #5927）的 Bug 报告，反映出项目对中国区用户的支持仍有提升空间。

## 8. 待处理积压

- **紧急：桌面端内存爆炸问题**：**Issue #5951** 描述了非常严重的桌面沙箱 Bug，严重影响使用，且目前尚无开发者认领或提出修复方案，需要核心维护者**立即关注**。
- **长期未决：渠道连接稳定性**：**Issue #3502**（企业微信频繁断连）和 **Issue #3432**（飞书权限问题）自4月创建后今日虽有更新但核心问题未解决。这些基础渠道的稳定性对新用户的留存至关重要。
- **等待验证：老版本兼容性**：**Issue #3549**（armbian 系统下 `FunctionCallOutput` 验证错误）自4月提出后，虽在 v2.0.0 中可能已修复，但官方未在此 Issue 中进行明确回应或更新状态，增加了社区的信息噪音。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，我将根据您提供的ZeroClaw项目数据，为您呈现2026年7月11日的项目动态日报。

---

## ZeroClaw 项目日报 - 2026年7月11日

### 1. 今日速览

项目今日继续保持高度活跃状态，24小时内涌现大量PR（50条）和Issues（20条）。尽管无新版本发布，但开发活动密集，尤其在**插件系统（WASM插件、Webhook）**、**通道协议（ACP/WebSocket）** 和 **SOP（标准操作流程）审批框架** 等核心功能上有多项大型PR在推进。同时，社区反馈积极，但也暴露了**Telegram通道、Gemini模型兼容性** 以及**ZeroCode TUI** 等方面的质量问题和用户体验痛点。整体来看，项目正处于快速迭代期，新功能架构与稳定性修复并行发展。

### 3. 项目进展

今日有4个PR被合并或关闭，另有3个Issue被关闭，表明项目在持续解决积压问题的同时，也取得了一些关键功能推进。

-   **功能推进：**
    -   **Web UI 自动化管理增强**：`#8677` [Feature]: Add uses_memory check box to web gateway 被关闭。这是一个重要的用户需求，现在用户可以直接在Web界面为自动化任务配置是否使用记忆功能，提升了可操作性。链接: [Issue #8677](zeroclaw-labs/zeroclaw Issue #8677)
    -   **Cron任务功能完善**：`#8397` [Feature]: Expose per-cron-job `uses_memory` flag in CLI and cron_add/cron_update tools 也在今日被关闭。这表明Cron任务管理的功能闭环已基本完成，从TUI到Web UI，再到API工具，用户均可配置此选项。链接: [Issue #8397](zeroclaw-labs/zeroclaw Issue #8397)
    -   **渠道通道运行时修复**：`#7809` [Bug]: Channel turns ignore runtime-profile strict/parallel tool flags 被关闭。早期的严重Bug得到解决，确保渠道通道的消息处理不再忽略运行时的关键策略配置。链接: [Issue #7809](zeroclaw-labs/zeroclaw Issue #7809)
-   **代码库维护**：`#8941` [fix(log): remove unused write_lock field] 和 `#8938` [fix(ci): remove duplicated rustdoc flag] 是两个小型的代码清理和CI修复PR，有助于保持代码库的整洁和构建管道的健康。

**项目向前迈进了多少？**
项目在解决技术债务（未使用的字段、CI配置问题）的同时，完善了关键功能（Web UI Cron配置），并关闭了一个影响渠道稳定性的早期Bug。这标志着项目在**功能完整性和基础稳定性**上均有微小但重要的进步。

### 4. 社区热点

今日讨论最活跃的议题集中在**协议整合**和**插件能力扩展**，反映了社区希望简化架构、提高集成度的诉求。

1.  **`#8798` RFC: Consolidate /ws/chat and /acp onto a single wire protocol**
    -   **讨论热度**：评论2条，虽不多，但这是一个RFC类型的Issue，议题本身具有重大影响。
    -   **诉求分析**：该提议旨在将现有的`/ws/chat`（为Web UI服务）和`/acp`（ACP协议）两个并行的WebSocket通道合并为一个。这能简化网关架构，减少维护成本，并为客户端提供统一的连接入口。这表明社区已经开始关注架构层面的长期演进。链接: [Issue #8798](zeroclaw-labs/zeroclaw Issue #8798)

2.  **`#8923` & `#8909` & `#8908` 插件系统系列PR**
    -   **讨论热度**：这三个PR（`#8923` [WASM插件TCP/TLS支持]，`#8909` [插件Web UI仪表盘]，`#8908` [插件统一能力目录]) 复杂度高，且相互关联，是今日开发的重点。它们共同构建了更强大、更易管理的WASM插件生态。社区关注点在于ZeroClaw能否成为一个强大的插件平台。链接: [PR #8923](zeroclaw-labs/zeroclaw PR #8923), [PR #8909](zeroclaw-labs/zeroclaw PR #8909), [PR #8908](zeroclaw-labs/zeroclaw PR #8908)

### 5. Bug 与稳定性

今日报告的Bug较多，涵盖运行时崩溃、模型兼容性、UI交互和性能问题。按严重程度排列如下：

-   **严重 (S1)**
    -   **`#8934` [Bug]: Gemini function calls fail because thought_signature is dropped**：这是一个**工作流阻断**级别的Bug，在使用Gemini模型进行函数调用时，因历史记录中丢失`thought_signature`字段导致后续请求失败。严重影响使用Gemini模型的用户。**目前无相关Fix PR**。链接: [Issue #8934](zeroclaw-labs/zeroclaw Issue #8934)

-   **中等 (S2)**
    -   **`#8810` [Bug]: Documentation is wrong - Telegram example**：文档不准确，导致用户配置失败。**有对应Fix PR `#8825`**，有助于快速修复。链接: [Issue #8810](zeroclaw-labs/zeroclaw Issue #8810)
    -   **`#8950` [Bug]: Telegram setMyCommands rejected with BOT_COMMANDS_TOO_MUCH**：当Agent技能过多时，Telegram无法注册命令菜单，这是一个配置上限问题。**目前无相关Fix PR**。链接: [Issue #8950](zeroclaw-labs/zeroclaw Issue #8950)
    -   **`#8936` [Bug]: loop_detector::hash_value deep-clones the entire tool-args**：性能问题，导致在工具调用多的场景下产生大量内存分配，影响RSS。属于性能退化。**目前无相关Fix PR**。链接: [Issue #8936](zeroclaw-labs/zeroclaw Issue #8936)
    -   **`#8945` / `#8944` [Bug]: ZeroCode TUI输入/选择问题**：用户体验问题，macOS文本替换失效和鼠标选择被拦截。**目前无相关Fix PR**。链接: [Issue #8945](zeroclaw-labs/zeroclaw Issue #8945), [Issue #8944](zeroclaw-labs/zeroclaw Issue #8944)
-   **潜在崩溃 (S2/S3)**
    -   **`#8654` [Bug]: skill-review fork panics**：虽然是在7月3日提出的，但在今日仍在更新。这是一个导致整个Agent进程因段错误而退出的高严重性Bug，应优先关注。**目前无相关Fix PR**。链接: [Issue #8654](zeroclaw-labs/zeroclaw Issue #8654)

### 6. 功能请求与路线图信号

-   **可能纳入下一版本的信号：**
    -   `#8958` [Feature]: ACP agent selection via `?agent=` query param：此功能来自外部客户端（Thunderbolt）的集成需求，通过提供查询参数实现多Agent选择，是提升ACP协议可用性的关键改进。由于已有实际用例驱动，很可能被快速采纳。链接: [Issue #8958](zeroclaw-labs/zeroclaw Issue #8958)
    -   `#8933` [Feature]: Add `gen_ai.conversation.id` for cross-turn session correlation in OTel export：提议增加`session_id`字段以改进可观测性。这符合行业标准，对精细化运维和分析非常有用，应会被纳入后续版本。链接: [Issue #8933](zeroclaw-labs/zeroclaw Issue #8933)
    -   `#6563` [Feature]: Comfy Cloud / ComfyUI as shared media provider：用户希望整合ComfyUI作为媒体生成提供商。这项请求背后需要大量的架构工作，但从社区热度来看，这是一个重要的非功能性需求，可能被列入中长期的路线图。链接: [Issue #6563](zeroclaw-labs/zeroclaw Issue #6563)

### 7. 用户反馈摘要

-   **痛点明确，对文档质量要求高**：`#8810` 的提交者 cr3a7ure 语气强烈，批评文档“是错误的，如果实现不当，垃圾仍然是垃圾”。这反映了用户对高质量、准确文档的迫切需求，尤其是对于新上手配置Telegram这类复杂功能。
-   **多媒体体验有待提升**：`#5514` 反馈在Telegram发送多张图片时，每个图片都会触发一次Agent请求，导致输出多条消息，这严重影响了用户体验。用户期望的是将一组图片合并为一次请求。链接: [Issue #5514](zeroclaw-labs/zeroclaw Issue #5514)
-   **macOS用户UI/UX体验不佳**：`#8945` 和 `#8944` 指出ZeroCode TUI与macOS原生交互（文本替换、鼠标选择）存在冲突，这直接影响了macOS用户的日常使用效率和满意度。
-   **集成和兼容性需求强**：`#8958` 的用户 metalmon 主动连接第三方客户端 Thunderbolt 进行验证，展现了社区在真实场景下集成ZeroClaw的积极意愿，并暴露了协议/接口的改进空间。

### 8. 待处理积压

-   **重大Bug待修复：**
    -   `#8654` [Bug]: skill-review fork panics：高优先级Bug，会导致进程崩溃。自7月3日提出以来，虽有更新但仍未关闭。链接: [Issue #8654](zeroclaw-labs/zeroclaw Issue #8654)
    -   `#8934` [Bug]: Gemini function calls fail ...：S1级严重Bug，阻挡了Gemini用户的工作流程。链接: [Issue #8934](zeroclaw-labs/zeroclaw Issue #8934)
-   **长期运行的项目追踪器：**
    -   `#8073` [Tracker]: v0.8.3 observability, CI, docs, dependencies, and release support：这是下一个版本（0.8.3）的支持性工作追踪器，覆盖了可观测性、CI、文档和依赖项等多项任务，需要在发布前清理。
    -   `#8363` [Tracker]: v0.8.3 config-driven runtime policy...：另一个0.8.3版本的追踪器，专注于配置驱动的运行时策略、路由和工具访问。这些追踪器中列出的待办事项需要持续关注。
-   **长期未合并的PR：**
    -   `#8139` [enhancement, channel]: 实现`channels.session_ttl_hours`。该PR自6月22日创建，至今已有近20天，仍在等待审查和合并。它关系到会话管理功能的重要补充。链接: [PR #8139](zeroclaw-labs/zeroclaw PR #8139)

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*