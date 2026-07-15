# Hugging Face 热门模型日报 2026-07-16

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-15 23:01 UTC

---

好的，以下是为您生成的《Hugging Face 热门模型日报》。

---

# Hugging Face 热门模型日报 (2026-07-16)

## 今日速览

今日热点聚焦于**极致量化**与**多模态推理**两大方向。以 `prism-ml` 为代表的 1-bit/2-bit 三元量化模型（Ternary-Bonsai-27B）成为社区探索边缘部署的新宠；而基于 Qwen3.5/3.6 系的多模态模型（如 `Qwythos-9B`、`Qwen3.6-35B-A3B-Uncensored`）统治了下载榜，展示了社区对 “高性能+视觉理解+无审查” 组合的强烈需求。此外，百度 `Unlimited-OCR` 和腾讯 `Hy3` 等大厂模型也获得了高热度，表明专业领域模型与通用 MoE 模型的竞争同样激烈。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **zai-org/GLM-5.2**
  - 作者: zai-org | 点赞: 3,991 | 下载: 489,611
  - 说明: 拥有 3,991 个点赞，是今日热度最高的纯文本模型。作为 GLM 系列的 MoE 架构版本，它凭借强大的中文对话和推理能力稳居榜首。

- **deepreinforce-ai/Ornith-1.0-35B-GGUF**
  - 作者: deepreinforce-ai | 点赞: 892 | 下载: 1,533,354
  - 说明: 一款 35B 级别的 GGUF 量化模型，下载量超 150 万，表明社区对高效、可本地部署的大参数模型存在巨大需求。

- **tencent/Hy3**
  - 作者: tencent | 点赞: 799 | 下载: 10,406
  - 说明: 腾讯发布的第三代 Hunyuan 系列模型，代表了国产大模型在通用文本生成能力上的持续迭代。

- **InternScience/Agents-A1**
  - 作者: InternScience | 点赞: 552 | 下载: 30,539
  - 说明: 基于 Qwen3.5 的 MoE 专家混合模型，专为 Agent 场景优化，反映了 “模型即智能体” 的行业趋势。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
  - 作者: empero-ai | 点赞: 2,211 | 下载: 2,006,265
  - 说明: **今日下载量之王**。这是一个经过社区广泛微调的 Qwen 3.5 系列模型，结合了 Claude 风格的数据蒸馏，在视觉推理任务上表现突出。

- **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
  - 作者: HauhauCS | 点赞: 2,757 | 下载: 2,443,871
  - 说明: **下载量第二**，且点赞数极高。这是一款 “无审查” 且 “激进” 风格的多模态 MoE 版 Qwen3.6 模型，代表了社区对特定行为风格和视觉能力的追求。

- **baidu/Unlimited-OCR**
  - 作者: baidu | 点赞: 2,001 | 下载: 1,715,301
  - 说明: 百度发布的通用 OCR 模型，下载量超过 170 万，验证了 AI 在文档数字化、票据识别等垂直场景的巨大落地价值。

- **unsloth/Qwen3.6-27B-NVFP4**
  - 作者: unsloth | 点赞: 206 | 下载: 1,599,150
  - 说明: 由知名量化工具 Unsloth 出品，使用 NVFP4 精度对 Qwen3.6-27B 多模态模型进行了极致压缩，是高效率部署多模态应用的优选方案。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF**
  - 作者: yuxinlu1 | 点赞: 1,198 | 下载: 468,629
  - 说明: 基于 Google Gemma 4 的 Agentic 模型，专注于编码和终端交互。长名称暗示了复杂的知识蒸馏和微调过程，是 “模型集成” 理念的代表。

- **Cactus-Compute/needle**
  - 作者: Cactus-Compute | 点赞: 236 | 下载: 571
  - 说明: 一个基于 JAX 框架的 “函数调用” 导向模型，专注于工具使用。下载量不高但关注度稳定，表明它在开发者社区中属于小而精的专项模型。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **prism-ml/Ternary-Bonsai-27B-gguf**
  - 作者: prism-ml | 点赞: 453 | 下载: 23
  - 说明: **最值得关注的量化实验**。探索了将模型权重极致压缩至 2-bit 甚至 1-bit 的三元量化，这对在消费级硬件上运行 27B 大模型具有里程碑意义。

- **froggeric/Qwen-Fixed-Chat-Templates**
  - 作者: froggeric | 点赞: 915 | 下载: 0
  - 说明: 虽然下载量为 0，但点赞数极高。这个仓库修复了 Qwen 模型的聊天模板，是社区基础设施类贡献的典范，体现了生态协作的价值。

- **jlnsrk/GLM-5.2-colibri-int4**
  - 作者: jlnsrk | 点赞: 109 | 下载: 2,188
  - 说明: 对 GLM-5.2 的 MoE 模型进行了 INT4 量化，并使用 “Expert-Streaming” 技术优化 CPU 推理，是推动大模型 “去 GPU 化” 的有力尝试。

## 生态信号

1.  **Qwen 生态统治地位确立**：从本次榜单看，基于 Qwen 3.5/3.6 的衍生模型（包括 Empero、HauhauCS、Unsloth 等）占据了绝大多数多模态流量。Qwen 已成为社区微调和量化的首选基座，其生态护城河正在超越早期的 Llama 系列。

2.  **极致量化成为新竞技场**：除了常规的 GGUF 量化，`prism-ml` 的 1-bit/2-bit 三元模型引发了关注。这表明社区不满足于 4-bit 量化，正试图挑战极限，探索在极低资源条件下的模型推理可行性。这与苹果的 MLX 框架（`Qwen-Fixed-Chat-Templates`）共同推动了边缘 AI 的发展。

3.  **大模型向“智能体”与“工具调用”演进**：`InternScience/Agents-A1` 和 `Cactus-Compute/needle` 的走红，表明除对话外，模型作为 Agent 中枢的能力（API 调用、代码执行）正成为新竞争点。

## 值得探索

1.  **prism-ml/Ternary-Bonsai-27B-gguf**：如果你对模型极限压缩或边缘设备部署感兴趣，这个 2-bit 模型是绝佳的研究对象。它挑战了 “精度越低，能力越差” 的传统观念。

2.  **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**：作为下载量和点赞数双高的模型，它是体验 “社区调教版多模态 Qwen” 的标杆。研究其微调数据（数据蒸馏自 Claude）和量化策略，对理解社区最佳实践很有帮助。

---
*本日报由 [agents-radar](https://github.com/kky-wollu/agents-radar) 自动生成。*