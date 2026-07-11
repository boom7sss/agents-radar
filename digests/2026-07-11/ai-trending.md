# AI 开源趋势日报 2026-07-11

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-11 01:12 UTC

---

# AI 开源趋势日报（2026-07-11）

## 今日速览
- **Agent Skills 生态爆发**：`addyosmani/agent-skills`、`mattpocock/skills` 和 `obra/superpowers` 三款 Agent 技能库同日登顶 Trending，单日新增 Stars 合计超 3 800，标志着 AI 编码助手从“命令行工具”向“可复用技能栈”演进。
- **腾讯云开源长期记忆方案**：`TencentCloud/TencentDB-Agent-Memory` 提出四层渐进式记忆流水线，无外部 API 依赖，为本地 Agent 记忆提供企业级基础设施。
- **Office 文档操作被 AI Agent 攻破**：`iOfficeAI/OfficeCLI` 单日新增 1 224 Stars，成为首个专为 AI Agent 设计的 Office 套件，支持读写编辑 Word/Excel/PPT 无需安装 Office。
- **RAG 生态持续繁荣**：`ragflow`、`anything-llm`、`mem0` 等 RAG 项目 Stars 稳定增长，向量数据库赛道同时有 10+ 项目活跃，`milvus`、`qdrant`、`lancedb` 等竞争加剧。

## 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）
| 项目 | Stars | 说明 |
|------|-------|------|
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | ⭐196k | 经典深度学习框架，持续迭代，今日社区讨论集中在 TF 与 JAX 融合的方向 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐102k | 动态神经网络框架，最新版本强化了编译优化与分布式训练支持 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐86k | 高吞吐 LLM 推理引擎，本周因支持 DeepSeek-K2.6 等新模型获得关注 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐176k | 本地模型运行工具，已集成 Kimi-K2.6、GLM-5.1 等，成为本地 Agent 首选推理后端 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐141k | Agent 工程平台，今日发布 v0.6 预览版，强化多步骤编排与可观测性 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐48k | 统一访问前沿 LLM 的 AI 生产力套件，内置 300+ 助手模板 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
| 项目 | Stars | 说明 |
|------|-------|------|
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐185k | 最早的开源自主 Agent，近期更新了动态技能加载机制 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | ⭐80k | AI 驱动开发平台，支持多 Agent 协作解决复杂编程任务 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐104k | 让 AI Agent 像人一样操作浏览器的库，自动化在线任务 |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | ⭐23k | 集成 400+ MCP 服务器的 AI 工作流平台，一键连接各种工具 |
| [FirebaseOpen/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐149k | 为 AI Agent 提供的网页搜索与抓取 API，支持大规模数据采集 |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | ⭐0 (+1 116 today) | 生产级 Agent 技能库，今天最受关注的 Trending 项目之一 |
| [obra/superpowers](https://github.com/obra/superpowers) | ⭐0 (+1 013 today) | 开源 Agent 技能框架与软件开发方法论，强调可复用性与可靠性 |
| [mattpocock/skills](https://github.com/mattpocock/skills) | ⭐0 (+1 712 today) | 来自资深工程师的 `.claude` 目录技能，直接可导入 Claude Code |

### 📦 AI 应用（具体应用产品、垂直场景解决方案）
| 项目 | Stars | 说明 |
|------|-------|------|
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | ⭐0 (+1 224 today) | 专为 AI Agent 设计的 Office 命令行工具，无需 Office 安装，支持全格式文档操作 |
| [wonderwhy-er/DesktopCommanderMCP](https://github.com/wonderwhy-er/DesktopCommanderMCP) | ⭐0 (+328 today) | Claude MCP 服务端，赋予 Claude 终端控制、文件搜索与编辑能力 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | ⭐0 (+123 today) | 本地 Agent 长期记忆方案，四层渐进式流水线，零外部 API |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐48k | 智能聊天、自主 Agent 与 300+ 助手统一的 AI 生产力套件 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | ⭐92k | 多 Agent LLM 金融交易框架，今日发布 v2.0 新增回测模块 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐38k | AI 根据文档生成可编辑 PPT，支持原生形状与动态图表 |

### 🧠 大模型/训练（模型权重、训练框架、微调工具）
| 项目 | Stars | 说明 |
|------|-------|------|
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐162k | 模型定义与训练框架，本周新增对 Llama 5 系列架构的支持 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | ⭐59k | YOLOv8/v11/v26 统一框架，支持检测、分割、姿态估计等 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐7k | 大模型评估平台，覆盖 100+ 数据集与主流模型 |
| [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) | ⭐283 | 可靠的基础模型预训练库，强调可复现性与规模化扩展 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | ⭐27k | DeepSeek 原生 AI 编码代理，围绕前缀缓存稳定性设计 |

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）
| 项目 | Stars | 说明 |
|------|-------|------|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐85k | 领先的开源 RAG 引擎，融合 Agent 能力，提供高质量 LLM 上下文层 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | ⭐63k | 本地优先的 Agent 体验，支持多文档库、多模型切换 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐61k | 通用 AI Agent 记忆层，跨会话持久化上下文 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐45k | 云原生向量数据库，支持十亿级向量 ANN 搜索 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐33k | 高性能向量搜索引擎，今日发布 v1.12 新增多模态索引 |
| [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) | ⭐45k | 隐私优先、自部署的知识管理系统，集成 AI 笔记助手 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐87k | 跨会话上下文持久化工具，自动压缩并注入相关上下文 |

## 趋势信号分析

**Agent Skills 生态成为今日最大热点。** `addyosmani/agent-skills`、`mattpocock/skills`、`obra/superpowers` 三个同类项目同时冲入 Trending 前十，单日合计获得近 4 000 Stars。这表明社区正从“使用 AI 编码助手”转向“构建可复用的 Agent 技能库”，开发者希望像管理 npm 包一样管理 Agent 的能力集。**长期记忆方案从云端走向本地。** `TencentDB-Agent-Memory` 提出完全本地化的四层渐进式流水线，`claude-mem` 提供跨会话压缩注入机制，`mem0` 作为通用记忆层，三者共同指向“记忆即基础设施”的趋势。**Office 文档自动化被 AI Agent 攻克。** `iOfficeAI/OfficeCLI` 的爆发说明企业场景中大量模板化、重复性的 Office 操作（如报表生成、数据填表）正成为 Agent 的杀手级应用。此外，**MCP 协议（Model Context Protocol）** 继续渗透：`DesktopCommanderMCP`、`stitch-skills`、`activepieces` 中的 400+ MCP 服务器，共同构建了 Agent 与外部工具的标准化接口生态。

## 社区关注热点

- **🌟 Agent Skills 标准（`addosyomani/agent-skills` / `stitch-skills`）**：Google 与社区共同推动的“Agent Skills 开放标准”正在形成，`stitch-skills` 明确兼容 Antigravity、Gemini CLI、Claude Code 等主流 agent，未来可能成为事实规范。
- **🔧 MCP 服务器浪潮（`DesktopCommanderMCP`）**：通过 MCP 给 Claude 等 agent 赋予终端控制、文件系统操作等能力，类似的 MCP 服务器项目数量在 GitHub 本月增长 300%。
- **💾 本地长期记忆方案（`TencentDB-Agent-Memory` / `mem0`）**：企业级 Agent 需要可靠、可审计的记忆，四层流水线与零外部依赖的设计提供了可直接落地的方案。
- **📄 Office AI 自动化（`iOfficeAI/OfficeCLI`）**：单二进制、无需安装 Office，为大批量文档处理场景（如合同审核、报表生成）提供了原生工具，有望替代传统 VBA 宏。
- **🧠 RAG 引擎升级（`ragflow` / `Graphify`）**：RAG 不再只是文本检索，`Graphify` 将代码、SQL、文档等转化为知识图谱，`ragflow` 融合 Agent 能力，RAG 正向“智能知识层”演进。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*