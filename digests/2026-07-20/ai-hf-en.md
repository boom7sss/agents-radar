# Hugging Face Trending Models Digest 2026-07-20

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-19 22:56 UTC

---

Here is the structured Hugging Face Trending Models Digest for July 20, 2026.

---

## Hugging Face Trending Models Digest – 2026-07-20

### 1. Today's Highlights

This week’s trends are dominated by a major push into extreme quantization, led by **prism-ml** and its Bonsai series, which makes large 27B-parameter models viable on consumer hardware. On the flagship front, **google/gemma-4-31B-it** holds the top spot for total downloads, while **zai-org/GLM-5.2** leads in community engagement with 4,165 likes, signaling strong interest in Mixture-of-Experts (MoE) architectures. Multimodal vision-language models are also surging, with models like **HauhauCS/Qwen3.6-35B-A3B-Uncensored** breaking 2 million downloads, and Baidu’s **Unlimited-OCR** seeing massive adoption. The ecosystem is clearly favoring efficiency: MoE, 1-bit/2-bit quantization, and hybrid vision-language pipelines are the defining themes.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
  Author: zai-org | Likes: 4,165 | Downloads: 536,177  
  A large-scale MoE-DSA model (GLM architecture) that has captured the community’s attention with its high likes, likely due to strong performance in conversational and reasoning tasks.

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**  
  Author: google | Likes: 3,273 | Downloads: 12,337,374  
  Google’s latest 31B instruction-tuned model, dominating downloads and representing the strongest open-weight entry from a major lab.

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**  
  Author: tencent | Likes: 835 | Downloads: 13,698  
  Tencent’s Hunyuan v3 generation model (base model for the Hy3-GGUF quant), gaining traction as a competitive open-weight text-generation backbone.

- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**  
  Author: InternScience | Likes: 583 | Downloads: 35,833  
  A Qwen3.5-based MoE model fine-tuned for agentic tasks (tool use, function calling), reflecting growing interest in agent-ready LLMs.

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking)**  
  Author: GnLOLot | Likes: 147 | Downloads: 5,494  
  A tiny 1B “thinking” model fine-tuned on a synthetic Claude Opus dataset, representing the trend of distilling reasoning capabilities into small models.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**  
  Author: thinkingmachines | Likes: 1,143 | Downloads: 13,462  
  Top multimodal model this week, a MoE image-text-to-text model with strong conversational and vision understanding capabilities.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**  
  Author: empero-ai | Likes: 2,340 | Downloads: 2,118,995  
  A highly downloaded Qwen3.5-based vision-language reasoning model, quantized for wide accessibility; likely trending for its reasoning + vision combination.

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
  Author: baidu | Likes: 2,162 | Downloads: 2,122,848  
  Baidu’s state-of-the-art OCR model (image-to-text) has become a go-to tool for document processing, driving massive adoption.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
  Author: HauhauCS | Likes: 2,896 | Downloads: 2,084,530  
  An uncensored, aggressive-tuned Qwen3.6 MoE vision model with 35B total parameters (3B active), a clear winner for edge-case creative use.

- **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)**  
  Author: Wan-AI | Likes: 126 | Downloads: 2,408  
  A specialized image-to-video generation model focused on dance motion, indicative of a niche but growing I2V trend.

- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**  
  Author: Cactus-Compute | Likes: 279 | Downloads: 955  
  A JAX-native model for function calling and tool use, notable for its unconventional architecture (needle) and focus on efficient serving.

- **[OpenMOSS-Team/MOSS-VL-Realtime](https://huggingface.co/OpenMOSS-Team/MOSS-VL-Realtime)**  
  Author: OpenMOSS-Team | Likes: 81 | Downloads: 544  
  A video-text-to-text model optimized for low-latency streaming inference, catering to real-time assistant applications.

#### 🔧 Specialized Models (code, math, medical, embeddings)

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**  
  Author: froggeric | Likes: 947 | Downloads: 0  
  A metadata-only model providing corrected Jinja chat templates for Qwen3.5 models; highly liked for solving a critical usability pain point.

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)**  
  Author: conradlocke | Likes: 421 | Downloads: 0  
  A LoRA for identity-preserving image editing built on Krea-2, trending for high-quality results in face and character editing.

- **[mgwr/M87](https://huggingface.co/mgwr/M87)**  
  Author: mgwr | Likes: 158 | Downloads: 4,652  
  A diffusion LoRA for the Krea-2-Turbo base model, enabling fast, high-quality text-to-image generation with a specific aesthetic.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**  
  Author: prism-ml | Likes: 790 | Downloads: 338,945  
  Extremely low 2-bit ternary quantization of a 27B model, making this big architecture runnable on CPU with minimal quality loss.

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**  
  Author: prism-ml | Likes: 488 | Downloads: 1,262,894  
  1-bit quantization of the same 27B Bonsai base; leading downloads among quantized models due to unprecedented efficiency.

- **[prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)**  
  Author: prism-ml | Likes: 139 | Downloads: 21,690  
  Apple MLX-native 1-bit version of Bonsai-27B, enabling high-performance inference on Apple Silicon.

- **[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)**  
  Author: jlnsrk | Likes: 141 | Downloads: 4,035  
  An int4 quantized version of GLM-5.2 using expert-streaming for CPU-friendly MoE inference.

- **[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)**  
  Author: AngelSlim | Likes: 137 | Downloads: 109,749  
  Community GGUF quant of **tencent/Hy3**; Hugging Face’s GGUF converters are making these quantizations easy and highly adoptable.

### 3. Ecosystem Signal

The most significant move this week is the aggressive race toward **extreme quantization**. The Bonsai series (prism-ml) demonstrates that 1-bit and ternary (2-bit) quantization of 27B models is now practical and widely downloaded, lowering the barrier to local inference. This is paired with a strong **MoE trend**—GLM-5.2, Qwen3.6-35B-A3B, and Agents-A1 all use sparsely activated architectures that offer higher quality per active parameter. The **Qwen3.5/3.6 family** is emerging as the most popular base for fine-tuning and quantization, with multiple variant uploads (uncensored, reasoning, vision) competing for attention. On the multimodal side, OCR and vision-language models continue to dominate downloads, reflecting enterprise and consumer demand for document AI and interactive assistants. Open-weight models from Google (gemma-4) and Baidu (Unlimited-OCR) are clearly setting the download benchmarks, while community fine-tuners focus on uncensored or aggressive personalities for creative use cases.

### 4. Worth Exploring

1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** – The highest-liked model this week. If you are studying MoE architectures or evaluating state-of-the-art open-weight Chinese+English models, this is the primary benchmark to test.

2. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** – The 1-bit quantization phenomenon. With 1.2 million downloads, it is the most successful example of pushing LLMs onto edge hardware. Anyone interested in efficient inference or on-device LLMs should analyze its quality-vs-size trade-off.

3. **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** – A left-field but highly liked JAX model for tool use. As the ecosystem moves toward agentic AI, this unique architecture could signal a shift away from pure Transformer decoders for function-calling.

---
*This digest is auto-generated by [agents-radar](https://github.com/kky-wollu/agents-radar).*