# Hugging Face 热门模型日报 2026-07-14

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-13 22:59 UTC

---

好的，作为AI模型生态分析师，为您呈上2026年7月14日的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026-07-14**

#### **今日速览**

本周 Hugging Face 生态延续强劲势头，**多模态模型与量化模型的结合**成为最显著的趋势。**NVIDIA** 与 **Qwen** 家族（3.5/3.6系列）成为绝对焦点，围绕其衍生的大量量化及微调模型占据榜单多数席位。同时，**GLM-5.2** 的发布标志着国产模型的强劲竞争力，而 **NVIDIA** 在具身智能（LocateAnything）与高性能推理（Puzzle-75B）上的布局也备受关注。社区量化活动空前活跃，**GGUF** 和新型 **NVFP4** 格式正在主导本地部署生态。

---

#### **热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）

- **zai-org/GLM-5.2**
  作者: zai-org | 点赞: 3,896 | 下载: 464K
  [HF链接](https://huggingface.co/zai-org/GLM-5.2)
  GLM系列最新旗舰，采用MoE架构，在对话能力上表现卓越，作为国产模型当周点赞数断层第一，反映了社区对高性能中文大语言模型的高度关注。

- **deepreinforce-ai/Ornith-1.0-35B-GGUF**
  作者: deepreinforce-ai | 点赞: 867 | 下载: 1.39M
  [HF链接](https://deepreinforce-ai/Ornith-1.0-35B-GGUF)
  基于Qwen架构的高性能35B模型量化版，MIT许可友好，下载量巨大，社区认可度极高。

- **migtissera/Tess-4-27B**
  作者: migtissera | 点赞: 103 | 下载: 1.1K
  [HF链接](https://huggingface.co/migtissera/Tess-4-27B)
  Tess系列最新版，基于Qwen 3.5的27B参数模型，定位多模态对话，展现了社区持续对高参数多模态模型的探索。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **nvidia/LocateAnything-3B**
  作者: nvidia | 点赞: 2,720 | 下载: 1.5M
  [HF链接](https://huggingface.co/nvidia/LocateAnything-3B)
  NVIDIA发布的通用目标定位模型，支持图像到文本的精细特征提取，是具身智能和视觉理解的重要工具，热度极高。

- **baidu/Unlimited-OCR**
  作者: baidu | 点赞: 1,963 | 下载: 1.5M
  [HF链接](https://huggingface.co/baidu/Unlimited-OCR)
  百度推出的通用OCR模型，或具备强大的泛化能力，打破了传统OCR的限制，下载量和点赞数均表现亮眼。

- **conradlocke/krea2-identity-edit**
  作者: conradlocke | 点赞: 251 | 下载: 0
  [HF链接](https://huggingface.co/conradlocke/krea2-identity-edit)
  基于Krea-2模型的身份保留编辑LoRA。零下载量却获高赞，说明社区对其概念和创新性有极大兴趣，但可能受限于使用门槛。

- **open-gigaai/Giga-World-1**
  作者: open-gigaai | 点赞: 128 | 下载: 0
  [HF链接](https://huggingface.co/open-gigaai/Giga-World-1)
  一个综合性的世界模型发布，可能涉及多模态理解或仿真，下载量为0暗示可能为源码或论文关联库，代表了顶级的探索方向。

- **CohereLabs/cohere-transcribe-arabic-07-2026**
  作者: CohereLabs | 点赞: 102 | 下载: 11.6K
  [HF链接](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026)
  Cohere发布的专用于阿拉伯语的ASR模型，精准切入小语种转录场景，体现了模型专业化和本地化的趋势。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

- **google/tabfm-1.0.0-pytorch**
  作者: google | 点赞: 362 | 下载: 21.5K
  [HF链接](https://huggingface.co/google/tabfm-1.0.0-pytorch)
  谷歌官方的Tabular Foundation Model，标志着大模型正式进军结构化表格数据领域，零样本分类/回归能力潜力巨大。

- **SupraLabs/Supra-Router-51M**
  作者: SupraLabs | 点赞: 113 | 下载: 1.5K
  [HF链接](https://huggingface.co/SupraLabs/Supra-Router-51M)
  轻量级（51M）的模型路由专家，用于智能调度不同模型完成任务，这种“模型操作系统”组件是未来复杂AI工作流的关键。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

- **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
  作者: HauhauCS | 点赞: 2,710 | 下载: 2.5M
  [HF链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)
  Qwen3.6-35B MoE的“无审查”激进微调版并量化。下载量惊人，反映了社区对“去限制”和极端推理风格的强烈需求。

- **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
  作者: empero-ai | 点赞: 2,080 | 下载: 1.98M
  [HF链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)
  基于Qwen 3.5的9B模型，融合了Claude风格数据蒸馏和推理能力增强，作为GGUF量化版下载量接近200万，是社区热点的集大成者。

- **unsloth/Qwen3.6-27B-MTP-GGUF**
  作者: unsloth | 点赞: 1,073 | 下载: 2.9M
  [HF链接](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)
  Unsloth为Qwen3.6-27B提供的MTP（Multi-Token Prediction?）优化版GGUF量化模型。下载量破290万，说明MTP训练技术和高效率量化正在成为主流。

- **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF**
  作者: yuxinlu1 | 点赞: 1,176 | 下载: 452K
  [HF链接](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)
  Gemma-4-12B的深度微调版，专注于Agent能力与代码生成，并被量化。这标志着社区正在将Gemma系列打造成强大的本地Agent基座。

---

#### **生态信号**

本周生态呈现两大核心信号：
1.  **Qwen 生态垄断与分化**：Qwen 3.5/3.6 系列成为社区微调和量化的首选基座，其MoE（混合专家）架构尤其受欢迎。围绕其衍生出大量“无审查”、“思维链”、“角色扮演”等细分方向的模型，Qwen系已基本替代早期Llama和Mistral成为社区新的事实标准。
2.  **量化技术与新范式崛起**：GGUF依然是社区量化主流，但Unsloth推出的**NVFP4**格式（如Qwen3.6-27B-NVFP4）和MTP优化版模型开始崭露头角，预示着4-bit以下精度及性能优化的新竞赛已经开始。**NVIDIA** 发布的高性能大模型（Puzzle-75B）直接支持NVFP4，说明开源生态正在紧密跟随硬件厂商的新存储格式。
3.  **权重开放 vs 闭源**：当日榜单几乎完全被开源权重模型及社区衍生品占据。闭源模型的直接热度不再出现，但NVIDIA、百度、Cohere、Google等巨头通过发布开源权重模型（TabFM, LocateAnything, Unlimited-OCR）来争夺生态话语权。

---

#### **值得探索**

1.  **nvidia/LocateAnything-3B**
    -   **理由**：NVIDIA将大模型能力带入视觉定位领域。该模型极有可能成为构建机器人、自动驾驶和自动化图像标注系统的基础组件。高点赞和高下载量证明其解决了真实痛点。

2.  **google/tabfm-1.0.0-pytorch**
    -   **理由**：大模型从未像今天这样如此贴近传统的结构化数据（Excel/数据库）。Google的TabFM能否在表格任务上复现Transformer在NLP领域的奇迹？值得所有从事数据分析、金融预测的人立刻尝试。

3.  **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    -   **理由**：它是社区当前“最大胆”趋势的化身：35B参数级（激活仅3B）的高效模型，具备多模态视觉能力和“激进”风格。想了解社区模型在开放、自由度上的边界在哪，以及极致MoE的效率如何，这个模型是必试之选。

---
*本日报由 [agents-radar](https://github.com/kky-wollu/agents-radar) 自动生成。*