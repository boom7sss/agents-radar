# Hugging Face 热门模型日报 2026-07-20

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-19 22:56 UTC

---

好的，作为 AI 模型生态分析师，这是为您准备的 2026-07-20 日 Hugging Face 热门模型日报。

---

### **Hugging Face 热门模型日报 | 2026-07-20**

#### **今日速览**

本周 Hugging Face 生态呈现出两大明显趋势：**以 GLM-5.2 和 Qwen 系列为代表的中国模型家族势头强劲**，持续霸榜并衍生出海量社区微调版本。同时，**极致量化（1-bit/2-bit）和 GGUF 格式的模型成为社区新宠**，特别是针对 27B 级别模型的压缩，显著降低了部署门槛。此外，**多模态能力进一步下沉和普及**，图像理解与生成模型、OCR 专用模型以及视频生成模型的热度均有所上升。

#### **热门模型**

##### 🧠 **语言模型（LLM、对话模型、指令微调）**

1.  **zai-org/GLM-5.2**
    *   作者: zai-org | 👍 4,165 | ⬇️ 536,177
    *   **一句话说明**：本周热度第一，由智谱 AI 推出的旗舰级 MoE 对话模型，凭借强大的综合能力成为社区关注的焦点。
    *   [链接](https://huggingface.co/zai-org/GLM-5.2)

2.  **tencent/Hy3**
    *   作者: tencent | 👍 835 | ⬇️ 13,698
    *   **一句话说明**：腾讯推出的全新大语言模型，在官方发布后迅速获得了社区的广泛关注和讨论。
    *   [链接](https://huggingface.co/tencent/Hy3)

3.  **InternScience/Agents-A1**
    *   作者: InternScience | 👍 583 | ⬇️ 35,833
    *   **一句话说明**：上海 AI 实验室（InternScience）聚焦 Agent 能力的大模型，基于 Qwen3.5 MoE 架构，指向未来的自主智能体应用。
    *   [链接](https://huggingface.co/InternScience/Agents-A1)

##### 🎨 **多模态与生成（图像、视频、音频、文本到X）**

1.  **google/gemma-4-31B-it**
    *   作者: google | 👍 3,273 | ⬇️ 12,337,374
    *   **一句话说明**：Google 发布的轻量级高效多模态模型，尽管热度不及 GLM，但凭借 Google 的品牌效应和极高的下载量，显示了其在社区中的广泛应用基础。
    *   [链接](https://huggingface.co/google/gemma-4-31B-it)

2.  **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
    *   作者: empero-ai | 👍 2,340 | ⬇️ 2,118,995
    *   **一句话说明**：社区炙手可热的 Qwythos 模型的最新量化版本，融合了“Claude”风格的数据集，推理能力出众，下载量巨大。
    *   [链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)

3.  **baidu/Unlimited-OCR**
    *   作者: baidu | 👍 2,162 | ⬇️ 2,122,848
    *   **一句话说明**：百度发布的通用 OCR 大模型，专精于图像文字识别，证明了在“小而专”的细分赛道，开源模型同样能取得巨大成功。
    *   [链接](https://huggingface.co/baidu/Unlimited-OCR)

4.  **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   作者: HauhauCS | 👍 2,896 | ⬇️ 2,084,530
    *   **一句话说明**：基于最新 Qwen3.6 的“无审查”社区微调 MoE 版本，结合了视觉能力，满足了特定用户群体对创意和自由度的高需求。
    *   [链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)

5.  **Wan-AI/Wan-Dancer-14B**
    *   作者: Wan-AI | 👍 126 | ⬇️ 2,408
    *   **一句话说明**：Wan-AI 推出的图生视频模型，专注于生成舞蹈等动作视频，代表了视频生成领域的一个新方向。
    *   [链接](https://huggingface.co/Wan-AI/Wan-Dancer-14B)

##### 🔧 **专用模型（代码、数学、医疗、嵌入）**

1.  **Cactus-Compute/needle**
    *   作者: Cactus-Compute | 👍 279 | ⬇️ 955
    *   **一句话说明**：一个专注于函数调用和工具使用（Tool-Use）的轻量级 JAX 模型，代表了模型从“对话”向“执行”转变的趋势。
    *   [链接](https://huggingface.co/Cactus-Compute/needle)

##### 📦 **微调与量化（社区微调、GGUF、AWQ）**

1.  **prism-ml/Ternary-Bonsai-27B-gguf**
    *   作者: prism-ml | 👍 790 | ⬇️ 338,945
    *   **一句话说明**：创新的三值量化（Ternary）模型，将 27B 模型压缩至约 2-bit，在极低精度下保持了可用性，极大降低了显存占用。
    *   [链接](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)

2.  **prism-ml/Bonsai-27B-gguf**
    *   作者: prism-ml | 👍 488 | ⬇️ 1,262,894
    *   **一句话说明**：将 27B 模型压缩至极致的 1-bit 量化版本，下载量极高，是社区对“能跑就行”、“平民化部署”需求的直接体现。
    *   [链接](https://huggingface.co/prism-ml/Bonsai-27B-gguf)

3.  **froggeric/Qwen-Fixed-Chat-Templates**
    *   作者: froggeric | 👍 947 | ⬇️ 0
    *   **一句话说明**：一个修复了 Qwen 系列聊天模板的小工具，不包含模型权重，但精准解决了开发者的痛点，获得了大量关注。
    *   [链接](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)

4.  **jlnsrk/GLM-5.2-colibri-int4**
    *   作者: jlnsrk | 👍 141 | ⬇️ 4,035
    *   **一句话说明**：针对 GLM-5.2 的 CPU 友好型 INT4 量化版本，结合“专家流式”（expert-streaming）技术，旨在让大模型在普通 CPU 上也能运行。
    *   [链接](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)

---

#### **生态信号**

本周生态信号清晰。**“GLM 生态”与“Qwen 生态”双星闪耀**：GLM-5.2 作为全新旗舰强势登顶，Qwen 则以 Qwen3.5/3.6 为核心，衍生出 Qwythos、ThinkingCap 等大量社区创新模型。**极低精度量化（1-bit/Ternary）突破性地降低了旗舰模型的部署门槛**，Bonsai 系列的成功表明社区对“能本地运行的高性能模型”有巨大渴求。此外，**开源模型已全面覆盖从通用对话到 OCR、视频生成、Agent 等细分场景**，其质量与多样性对闭源 API 构成实质性挑战。

---

#### **值得探索**

1.  **zai-org/GLM-5.2**
    *   **理由**：作为本周热度最高的模型，代表着国产模型的前沿水平。建议深入研究其 MoE 架构设计和对话能力，可将其作为未来项目基座模型的潜在候选。
    *   [链接](https://huggingface.co/zai-org/GLM-5.2)

2.  **prism-ml/Ternary-Bonsai-27B-gguf**
    *   **理由**：三值量化 (Ternary) 代表了量化技术的前沿方向。值得亲身体验在消费级显卡（甚至 CPU）上运行 27B 模型的效果，探索“性能与资源”的极致平衡。
    *   [链接](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)

3.  **baidu/Unlimited-OCR**
    *   **理由**：在通用大模型之外，专用模型同样拥有巨大价值。作为专为 OCR 设计的开源模型，其性能和实用性值得在文档处理、图像信息提取等场景中测试验证。
    *   [链接](https://huggingface.co/baidu/Unlimited-OCR)

---
*本日报由 [agents-radar](https://github.com/kky-wollu/agents-radar) 自动生成。*