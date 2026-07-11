# Hugging Face 热门模型日报 2026-07-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-11 01:12 UTC

---

好的，作为一名AI模型生态分析师，以下是我根据2026年7月11日的Hugging Face热门模型数据整理的日报。

---

### **Hugging Face 热门模型日报 | 2026-07-11**

#### **今日速览**

今日Hugging Face榜单呈现显著的多模态与MoE（混合专家）趋势。**GLM-5.2** 以绝对点赞数领跑，标志着新一代大规模对话模型的崛起。同时，**Qwen3.6** 系列模型生态空前繁荣，涌现出大量高质量的社区微调与量化版本，展示了其在推理、未审查及多模态场景的强大基础能力。此外，**英伟达（NVIDIA）** 与 **DeepSeek** 等头部力量均发布了面向特定领域（如定位、高性能推理）的专业模型，表明开源模型正在从通用对话向深度专业化演进。特别值得注意的是，视觉语言的文本转图、转视频模型开始回归热门榜前列，预示着多模态生成领域的新一轮竞争。

#### **热门模型**

##### 🧠 **语言模型（LLM、对话模型、指令微调）**

-   **GLM-5.2**
    -   作者: zai-org | 点赞: 3,784 | 下载: 392,655
    -   一句话说明：智谱AI推出的最新一代对话模型，凭借其强大的对话能力与混合专家（MoE）架构，成为本周社区关注度最高的模型。
    -   [链接](https://huggingface.co/zai-org/GLM-5.2)

-   **deepseek-ai/DeepSeek-V4-Pro-DSpark**
    -   作者: deepseek-ai | 点赞: 463 | 下载: 33,088
    -   一句话说明：DeepSeek V4系列的旗舰“Pro”版本，专注于提升推理与专业任务（“DSpark”）性能，是深度求索在高级推理模型方向的重要布局。
    -   [链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)

-   **tencent/Hy3**
    -   作者: tencent | 点赞: 664 | 下载: 6,923
    -   一句话说明：腾讯推出的混元系列最新文本生成模型，代表了国内大厂在基础模型上的最新成果。
    -   [链接](https://huggingface.co/tencent/Hy3)

-   **InternScience/Agents-A1**
    -   作者: InternScience | 点赞: 470 | 下载: 25,772
    -   一句话说明：一款基于Qwen3.5 MoE架构的智能体模型，专注于Agent场景，是Agent专业化模型趋势的代表。
    -   [链接](https://huggingface.co/InternScience/Agents-A1)

-   **meituan-longcat/LongCat-2.0**
    -   作者: meituan-longcat | 点赞: 170 | 下载: 1,308
    -   一句话说明：美团推出的长文本对话模型迭代版本，专注于处理超长上下文的对话任务。
    -   [链接](https://huggingface.co/meituan-longcat/LongCat-2.0)

-   **SupraLabs/Supra-Router-51M**
    -   作者: SupraLabs | 点赞: 86 | 下载: 1,160
    -   一句话说明：一个只有51M参数的轻量级路由模型，旨在为多模型系统动态选择合适的专家模型，展现了生态基础设施的演变。
    -   [链接](https://huggingface.co/SupraLabs/Supra-Router-51M)

##### 🎨 **多模态与生成（图像、视频、音频、文本到X）**

-   **nvidia/LocateAnything-3B**
    -   作者: nvidia | 点赞: 2,700 | 下载: 1,456,269
    -   一句话说明：英伟达推出的3B参数视觉定位模型，能够根据文本描述在图像中精确定位目标，是机器人与视觉理解领域的重磅发布。
    -   [链接](https://huggingface.co/nvidia/LocateAnything-3B)

-   **baidu/Unlimited-OCR**
    -   作者: baidu | 点赞: 1,921 | 下载: 1,319,683
    -   一句话说明：百度的通用OCR模型，支持海量场景下的文字识别，凭借高实用性获得了广泛关注与下载。
    -   [链接](https://huggingface.co/baidu/Unlimited-OCR)

-   **krea/Krea-2-Turbo**
    -   作者: krea | 点赞: 575 | 下载: 164,525
    -   一句话说明：Krea公司的第二代图像生成模型的Turbo版，专注于更快速度的文本到图像生成，效果备受社区认可。
    -   [链接](https://huggingface.co/krea/Krea-2-Turbo)

-   **Alissonerdx/LTX-Best-Face-ID**
    -   作者: Alissonerdx | 点赞: 83 | 下载: 0
    -   一句话说明：基于LTX模型的视频生成LoRA，专注于身份保持的文本到视频生成，展现了社区在定制化视频生成领域的探索。
    -   [链接](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)

-   **OpenMOSS-Team/MOSS-Transcribe-Diarize**
    -   作者: OpenMOSS-Team | 点赞: 98 | 下载: 5,919
    -   一句话说明：复旦MOSS团队推出的语音转文字与说话人分离模型，专注音频文本转换与会议记录等场景。
    -   [链接](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)

##### 🔧 **专用模型（代码、数学、医疗、嵌入）**

-   **google/tabfm-1.0.0-pytorch**
    -   作者: google | 点赞: 345 | 下载: 18,626
    -   一句话说明：谷歌推出的表格数据基础模型，支持零样本分类与回归，为处理结构化数据提供了强大的大模型解决方案。
    -   [链接](https://huggingface.co/google/tabfm-1.0.0-pytorch)

-   **nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4**
    -   作者: nvidia | 点赞: 99 | 下载: 23,404
    -   一句话说明：英伟达为竞赛/推理场景设计的MoE模型，专为解决复杂逻辑问题（“Puzzle”）而生，目标是提升模型在推理密集型任务上的表现。
    -   [链接](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)

-   **robbyant/lingbot-video-moe-30b-a3b**
    -   作者: robbyant | 点赞: 75 | 下载: 317
    -   一句话说明：一个30B参数的视频生成MoE模型，展示了在视频生成领域应用稀疏激活架构的尝试。
    -   [链接](https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b)

##### 📦 **微调与量化（社区微调、GGUF、AWQ）**

-   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    -   作者: HauhauCS | 点赞: 2,623 | 下载: 2,660,170
    -   一句话说明：Qwen3.6的社区微调版本，主打“未审查”和“激进”风格，是目前下载量最高的模型之一，反映了对多样化、去限制对话模型的需求旺盛。
    -   [链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)

-   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
    -   作者: empero-ai | 点赞: 1,976 | 下载: 1,909,705
    -   一句话说明：结合Claude风格的微调并量化，GGUF版本的高下载量表明它是消费级硬件上使用“Mythos”对话风格的首选。
    -   [链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)

-   **unsloth/Qwen3.6-27B-MTP-GGUF**
    -   作者: unsloth | 点赞: 1,036 | 下载: 2,895,457
    -   一句话说明：Unsloth对Qwen3.6的多任务（MTP）版本进行GGUF量化，是本周下载量最高的模型，完美融合了高性能与本地部署的便利性。
    -   [链接](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)

-   **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF**
    -   作者: yuxinlu1 | 点赞: 1,134 | 下载: 427,668
    -   一句话说明：对Gemma-4进行Agent化微调并量化的GGUF版本，专为编程与终端操作设计，是“编程Agent”模型的热门选择。
    -   [链接](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)

-   **nvidia/Qwen3.6-27B-NVFP4**
    -   作者: nvidia | 点赞: 336 | 下载: 787,748
    -   一句话说明：英伟达使用其Model Optimizer工具对Qwen3.6进行NVFP4量化，提供了能在主流硬件上高效运行的官方优化版本。
    -   [链接](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)

-   **deepreinforce-ai/Ornith-1.0-35B-GGUF**
    -   作者: deepreinforce-ai | 点赞: 835 | 下载: 1,085,554
    -   一句话说明：Ornith模型的GGUF版本，因其高下载量成为社区中备受关注的、可在本地部署的35B级强大语言模型。
    -   [链接](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)

-   **unsloth/DeepSeek-V4-Flash-GGUF**
    -   作者: unsloth | 点赞: 124 | 下载: 31,895
    -   一句话说明：由Unsloth为DeepSeek V4 Flash专家模型提供的GGUF量化版，旨在让V4系列的高效推理在消费级设备上成为可能。
    -   [链接](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)

-   **froggeric/Qwen-Fixed-Chat-Templates**
    -   作者: froggeric | 点赞: 836 | 下载: 0
    -   一句话说明：一个独立的社区修复工具，专门解决Qwen模型的聊天模板配置问题，反映了模型生态中基础设施优化的活跃度。
    -   [链接](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)

-   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M**
    -   作者: empero-ai | 点赞: 761 | 下载: 184,315
    -   一句话说明：Qwythos模型的原版（非量化），同样拥有高人气，表明“Mythos”这一特定风格微调已形成一个成熟的产品线。
    -   [链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)

#### **生态信号**

本周生态呈现三大趋势：**第一，Qwen3.6成为社区“地基”**。从未审查版、量化版到修复工具，Qwen3.6的生态链条极其完整，说明其成为社区进行二次开发的核心首选。**第二，MoE架构全面开花**。GLM-5.2、Qwen3.6、DeepSeek-V4、NVIDIA Nemotron系列均采用MoE，这已成为高性能模型的标准范式。**第三，开源权重模型正快速“产品化”**。庞大的GGUF、NVFP4量化需求表明，社区不再满足于跑分，而是急需能真正在本地设备（PC、手机）上运行、能解决具体问题（如Agent、OCR、编程）的“产品级”模型。开源权重模型的优势正在从“能力天花板”转向“生态可部署性”。

#### **值得探索**

1.  **nvidia/LocateAnything-3B**：推荐理由为 **“最值得关注的视觉基础模型”**。它将大模型的理解能力与视觉的定位能力深度结合，在机器人抓取、自动驾驶、图像编辑等领域有巨大潜力，是英伟达在多模态智能体方向的关键棋子。
2.  **google/tabfm-1.0.0-pytorch**：推荐理由为 **“结构化数据的Game Changer”**。大模型在非结构化数据上表现强劲，但表格数据一直是其短板。谷歌的TabFM试图用Transformer统一表格数据处理，其零样本能力极具研究与应用价值，可能会改变传统数据科学的工作流。
3.  **unsloth/DeepSeek-V4-Flash-GGUF**：推荐理由为 **“体验顶级专家模型的入口”**。DeepSeek V4代表了当前最前沿的MoE技术之一。Unsloth的量化版是普通开发者以较低资源门槛，深度感受并研究DeepSeek V4最核心的“Flash”推理技术的最佳途径。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*