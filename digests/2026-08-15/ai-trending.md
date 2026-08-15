# AI 开源趋势日报 2026-08-15

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-15 01:37 UTC

---

# AI 开源趋势日报（2026-08-15）

> 筛选说明：已从 Trending 17 + 主题搜索 79 个仓库中剔除 OSINT、远程桌面、视频剪辑、纯低代码、通用工作流等非 AI/ML 项目；跨源重复项目按主要类别归置，不重复列出。

## 一、今日速览

今日 AI 开源社区最明显的特点是 **AI Agent 工程化全面爆发**：Claude Code 图表技能 `diagram-design` 单日新增 +3,646 领跑热榜，`semantica`、`holaOS`、`spec-kit` 等 agent / 上下文 / 开发工作流项目也集中上榜。端侧 AI 出现新信号：`needle` 以 14MB 基础模型登上热榜，`modly` 在本地 GPU 直接生成 3D 模型，`ego-lite` 则让 AI agent 复用浏览器登录态。本地训练/推理工具依然强势：`unsloth` 单日 +501，`RAGFlow` 单日 +473，说明“本地模型 + RAG + Agent”仍是开源基础设施主轴。DeepSeek 官方 agent 生态清单同日上榜，社区开始系统化沉淀 agent 工程经验。

## 二、各维度热门项目

### 🔧 AI 基础工具

- [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) — ⭐ 197,024  
  通用机器学习框架，AI 基础设施的最底层支撑。

- [huggingface/transformers](https://github.com/huggingface/transformers) — ⭐ 164,084  
  模型定义、训练与推理的事实标准框架，覆盖文本/视觉/音频/多模态。

- [pytorch/pytorch](https://github.com/pytorch/pytorch) — ⭐ 102,379  
  动态神经网络与 GPU 加速框架，研究社区主力。

- [ollama/ollama](https://github.com/ollama/ollama) — ⭐ 178,512  
  本地 LLM 运行工具，快速拉起 Kimi、GLM、MiniMax、DeepSeek、Qwen、Gemma 等模型。

- [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) — ⭐ 167,441  
  面向 LLM / Agent 的网页搜索、抓取与上下文 API。

- [semantica-agi/semantica](https://github.com/semantica-agi/semantica) — 今日 +1,181  
  Graph-Native 上下文基础设施，强调可问责 AI 系统与图结构上下文。

- [github/spec-kit](https://github.com/github/spec-kit) — 今日 +1,160  
  GitHub 官方的 Spec-Driven Development 工具包，适合 AI Coding Agent 的规格化开发流程。

- [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) — ⭐ 66,377  
  压缩工具输出、日志和 RAG chunk，最多可降低 60–95% 的 JSON token 消耗。

### 🤖 AI 智能体/工作流

- [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) — 今日 +3,646  
  为 Claude Code 提供 29 种编辑级图表类型，纯 HTML/SVG，今日热榜第一。

- [affaan-m/ECC](https://github.com/affaan-m/ECC) — ⭐ 240,163  
  Agent harness 性能优化系统，整合 skills、instincts、memory 与安全机制。

- [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) — ⭐ 186,604  
  通用 AI Agent 平台的先驱，目标是让每个人都能使用和构建 AI。

- [langchain-ai/langchain](https://github.com/langchain-ai/langchain) — ⭐ 144,237  
  Agent 工程化的事实标准框架，提供完整工具调用与 RAG 支持。

- [browser-use/browser-use](https://github.com/browser-use/browser-use) — ⭐ 109,252  
  让网站对 AI agent 可访问、可操作，自动完成在线任务。

- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) — ⭐ 90,774  
  跨会话持久记忆，把 agent 的工作上下文注入未来会话。

- [langgenius/dify](https://github.com/langgenius/dify) — ⭐ 152,445  
  可视化构建 Agentic Workflow 与 RAG 流水线，支持主流模型和工具。

- [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) — 今日 +769  
  All-in-One AI Agent 工作台，可在 Claude Code、Codex 等之间共享记忆与 100+ 工具集成。

### 📦 AI 应用

- [open-webui/open-webui](https://github.com/open-webui/open-webui) — ⭐ 148,810  
  自托管友好的 AI 聊天界面，支持 Ollama、OpenAI API 等后端。

- [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) — ⭐ 64,718  
  本地优先的 All-in-One Agent 与知识库工作台。

- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) — ⭐ 103,587  
  利用 AI 大模型和自动化工作流，一键生成高清短视频。

- [santifer/career-ops](https://github.com/santifer/career-ops) — ⭐ 63,859  
  开源 AI 求职助手：扫描职位、评分、定制简历并跟踪申请。

- [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) — ⭐ 62,882  
  LLM 驱动的多市场股票智能分析系统，支持行情、新闻和自动推送。

- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) — ⭐ 46,850  
  AI 将文档或主题转化为原生 PowerPoint，带动画、图表与音频讲解。

- [lightningpixel/modly](https://github.com/lightningpixel/modly) — 今日 +579  
  本地 GPU 运行 AI，从图片或 prompt 直接生成 3D 模型。

- [macro-inc/macro](https://github.com/macro-inc/macro) — 今日 +436  
  面向团队的统一 AI 工作空间，集成邮件、聊天、文档、任务、agents 与共享 AI 记忆。

### 🧠 大模型/训练

- [unslothai/unsloth](https://github.com/unslothai/unsloth) — 今日 +501  
  本地 UI 运行与训练 LLM / 扩散模型，支持 Qwen3.8、Kimi K3、DeepSeek-V4、FLUX 等。

- [cactus-compute/needle](https://github.com/cactus-compute/needle) — 今日 +662  
  14MB 基础模型，面向手机、可穿戴设备、智能家居和机器人。

- [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) — ⭐ 102,666  
  从零实现 ChatGPT-like LLM 的 PyTorch 教程，经典学习路径。

- [microsoft/ML-For-Beginners](https://github.com/microsoft/ML-For-Beginners) — ⭐ 89,385  
  12 周、26 课、52 个 quiz 的经典机器学习入门课程。

- [open-compass/opencompass](https://github.com/open-compass/opencompass) — ⭐ 7,301  
  大模型评测平台，支持 100+ 数据集与主流开源模型。

- [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) — ⭐ 4,488  
  在 Apple Silicon 上从零构建 tiny vLLM + Qwen，适合系统工程师学习推理系统。

- [Picovoice/picollm](https://github.com/Picovoice/picollm) — ⭐ 316  
  设备端 LLM 推理，主打 X-Bit 量化。

- [AIDASLab/Awesome-Diffusion-LLM](https://github.com/AIDASLab/Awesome-Diffusion-LLM) — ⭐ 97  
  追踪大型语言扩散模型（Diffusion LLM）的论文列表。

### 🔍 RAG/知识库

- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) — ⭐ 106,388  
  把代码库、文档、SQL schema、PDF 转成可查询知识图谱，无需向量库。

- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) — ⭐ 88,387 · 今日 +473  
  开源 RAG 引擎，融合 Agent 能力，为 LLM 提供更强的上下文层。

- [run-llama/llama_index](https://github.com/run-llama/llama_index) — ⭐ 51,643  
  领先的文档 agent 与 OCR 数据框架。

- [milvus-io/milvus](https://github.com/milvus-io/milvus) — ⭐ 45,639  
  高性能云原生向量数据库，面向大规模向量 ANN 检索。

- [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) — ⭐ 35,185  
  面向“无向量、推理式 RAG”的文档索引方案。

- [qdrant/qdrant](https://github.com/qdrant/qdrant) — ⭐ 33,981  
  高性能向量数据库与相似度检索引擎，主打大规模 AI 检索。

- [topoteretes/cognee](https://github.com/topoteretes/cognee) — ⭐ 30,025  
  开源 AI agent 记忆平台，用知识图谱为 agent 提供长期记忆。

- [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) — ⭐ 29,064  
  系统性展示高级 RAG 技术的 notebook 教程集。

## 三、趋势信号分析

今日热榜最显著信号是 **Agent 工程化正在吃掉更多开发者注意力**：`diagram-design` 单日 +3,646 登顶，`semantica`、`holaOS`、`spec-kit` 等多个 agent / 上下文 / 开发流项目集中上榜，说明社区已从“跑一个模型 demo”转向打磨 agent 的提示词、记忆、上下文和工具链。第二，**端侧与本地 AI 成为新分支**：`needle` 14MB 模型、`ego-lite` 浏览器状态共享、`modly` 本地 GPU 3D 生成，都在降低私有化、低成本 AI 应用门槛。第三，**RAG 出现“去向量化”苗头**：Graphify、PageIndex、semantica 都强调图结构与推理式上下文，而非单纯向量库，这与 agent 长期记忆、可解释性和 token 成本需求直接相关。最后，`unsloth` 与 `RAGFlow` 依然保持高热度，说明“本地训练/推理 + RAG”仍是开源基建主线。

## 四、社区关注热点

- **Coding Agent 的 Skill / Prompt 资产化**：`diagram-design` 单日 +3,646 登顶，加上 `claude-mem`、`Graphify` 等，说明把工程经验沉淀为可复用 skill 正在成为重要方向。

- **Agent 记忆与上下文层**：`mem0`、`cognee`、`claude-mem`、`semantica` 都在解决 agent “记不住、做不久” 的问题，长期记忆正在成为新基础设施。

- **端侧 / 本地 AI 组合**：`needle` 的 14MB 小模型、`ego-lite` 的 agent 浏览器、`modly` 的本地 3D 生成，共同指向设备端 AI 与个人化自动化。

- **本地训练 / 微调一体化**：`unsloth` 的本地 UI 让个人开发者在消费级 GPU 上即可训练和运行 Qwen、DeepSeek、FLUX 等模型，值得持续关注。

- **DeepSeek Agent 生态**：`awesome-deepseek-agent` 今日上榜，官方正在系统化整理 agent 工具链与最佳实践，适合跟踪国产大模型生态进展。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*