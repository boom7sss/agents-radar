# Hugging Face 热门模型日报 2026-07-15

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-14 23:00 UTC

---

好的，作为 AI 模型生态分析师，以下是基于 2026-07-15 数据生成的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026-07-15**

#### **今日速览**

本周 Hugging Face 生态延续了 **“MoE轻量化 + 多模态融合”** 的双主线。**Qwen 3.5/3.6 家族**依然是最活跃的基座，催生了大量微调与量化项目，特别是 Unsloth 发布的 **NVFP4** 和 **MTP** 格式下载量惊人。同时，**GLM-5.2** 作为新晋 MoE 模型迅速走红，引发了社区对其 **Colibri int4** CPU 推理版本的关注。此外，**DeepSeek-V4-Flash** 和 **NVIDIA Nemotron** 系列也展示了顶尖实验室在 MoE 和量化前沿的持续投入。值得注意的是，**OCR** 和 **视频生成** 领域迎来了来自百度和英伟达等大厂的重量级模型。

#### **热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）

*   **zai-org/GLM-5.2**
    *   **作者:** zai-org | **点赞:** 3,946 | **下载:** 489,611
    *   **一句话:** 本周点赞数最高的语言模型，智谱最新一代 MoE 架构模型，凭借强大的对话和推理能力迅速成为社区焦点。
*   **tencent/Hy3**
    *   **作者:** tencent | **点赞:** 780 | **下载:** 10,406
    *   **一句话:** 腾讯推出的 Hunyuan 系列最新版本，代表了国内大厂在 LLM 领域的最新成果。
*   **InternScience/Agents-A1**
    *   **作者:** InternScience | **点赞:** 537 | **下载:** 30,539
    *   **一句话:** 基于 Qwen3.5 MoE 的 Agent 专用模型，针对工具调用和智能体场景进行了专项优化。
*   **nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4**
    *   **作者:** nvidia | **点赞:** 117 | **下载:** 41,755
    *   **一句话:** NVIDIA 最新的 75B 超大 MoE 模型，采用 NVFP4 超低精度量化，展示了在超高效率下维持强大性能的可能性。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **baidu/Unlimited-OCR**
    *   **作者:** baidu | **点赞:** 1,981 | **下载:** 1,715,301
    *   **一句话:** 百度发布的通用 OCR 模型，下载量巨大，可能刷新了文档理解与文字识别的性能边界。
*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
    *   **作者:** empero-ai | **点赞:** 2,151 | **下载:** 2,006,265
    *   **一句话:** 基于 Qwen3.5 的社区微调模型，结合了“Claude Mythos”数据和长上下文，是本周最受欢迎的视觉语言模型之一。
*   **OpenMOSS-Team/MOSS-Transcribe-Diarize**
    *   **作者:** OpenMOSS-Team | **点赞:** 188 | **下载:** 65,109
    *   **一句话:** 专注语音转写与说话人分离的统一模型，推动了端到端语音处理应用的发展。
*   **robbyant/lingbot-world-v2-14b-causal-fast**
    *   **作者:** robbyant | **点赞:** 96 | **下载:** 0
    *   **一句话:** 创新的世界模型，支持图像到视频的生成，标志着视频生成模型正从“生成视频”向“理解与模拟世界”进化。

##### 🔧 专用模型（代码、数学、医疗、OCR、Agent）

*   **froggeric/Qwen-Fixed-Chat-Templates**
    *   **作者:** froggeric | **点赞:** 900 | **下载:** 0
    *   **一句话:** 针对 Qwen 系列模型修复了错误的聊天模板，是开发者社区中高频使用的“基础设施”类模型。
*   **nineninesix/gepard-1.0**
    *   **作者:** nineninesix | **点赞:** 101 | **下载:** 5,872
    *   **一句话:** 基于 Qwen3.5 的文本到语音模型，拓宽了 Llama/Qwen 架构在 TTS 领域的应用。
*   **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF**
    *   **作者:** yuxinlu1 | **点赞:** 1,186 | **下载:** 468,629
    *   **一句话:** 专为 Agent 和终端编码场景优化的 Gemma-4 微调版本，GGUF 格式使其本地部署非常方便。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF** (同上)
*   **unsloth/Qwen3.6-27B-MTP-GGUF**
    *   **作者:** unsloth | **点赞:** 1,090 | **下载:** 2,904,515
    *   **一句话:** Unsloth 发布的 Qwen3.6 MTP（多 Token 预测）版本 GGUF，本周下载量之王，展示了 MTP 训练技术在推理加速上的潜力。
*   **unsloth/Qwen3.6-27B-NVFP4**
    *   **作者:** unsloth | **点赞:** 204 | **下载:** 1,599,150
    *   **一句话:** Unsloth 推动的 NVIDIA NVFP4 格式量化模型，在占用极少显存的同时保持了高精度，推动了 4-bit 以下量化新标准。
*   **deepreinforce-ai/Ornith-1.0-35B-GGUF**
    *   **作者:** deepreinforce-ai | **点赞:** 880 | **下载:** 1,533,354
    *   **一句话:** 基于 35B MoE 架构的 Ornith 模型 GGUF 版本，融合了 DPO、PPO 等多重优化技术，是社区量化微调的代表作。
*   **jlnsrk/GLM-5.2-colibri-int4**
    *   **作者:** jlnsrk | **点赞:** 102 | **下载:** 2,188
    *   **一句话:** 针对 GLM-5.2 的 Colibri int4 量化版本，专门为 CPU 推理优化，极大降低了 MoE 模型的部署门槛。

#### **生态信号**

*   **MoE 与小型化成为绝对主流**：从 Qwen3.5/3.6 到 GLM-5.2，再到 Nemotron，MoE 架构已成为确保性能与效率平衡的“标配”。同时，9B 到 35B 区间的模型最受欢迎，社区正通过量化 (GGUF, NVFP4) 和蒸馏将高性能模型压缩到消费者硬件上。
*   **开源与闭源的“剪刀差”**：以百度、腾讯、NVIDIA 为代表的大厂仍在发布重量级模型，但社区微调（如 *empero-ai* 的 Qwythos 系列）和量化（如 *unsloth*）的活跃度远超原版模型。开源生态正从“发布者”向“精炼者”转变，量化工具和模板修复的工具价值凸显。
*   **量化前沿**：**NVFP4** 格式的出现，以及 **Colibri int4** 对 CPU 推理的探索，表明社区正追求极致的部署效率。多 Token 预测 (MTP) 与 GGUF 的结合也成为一个重要的新趋势，暗示未来的推理优化将不仅限于权重压缩，更包括架构创新。

#### **值得探索**

1.  **unsloth/Qwen3.6-27B-MTP-GGUF**：如果你是开发者或希望在本地部署高效模型，此模型是当前性能和易用性的最佳平衡点之一。其超高的下载量也验证了其社区价值。
2.  **baidu/Unlimited-OCR**：如果你的业务涉及文档处理、票据识别或通用光学字符识别，这个模型值得深入研究。其巨大的下载量可能意味着在准确率和泛化能力上具有显著优势。
3.  **nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4**：此模型代表了 MoE 与超低精度量化的极限前沿。虽对硬件要求高，但研究它的架构和量化方案（NVFP4）对于理解未来大模型的部署方向至关重要。

---
*本日报由 [agents-radar](https://github.com/kky-wollu/agents-radar) 自动生成。*