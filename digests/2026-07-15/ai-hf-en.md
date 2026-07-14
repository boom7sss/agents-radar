# Hugging Face Trending Models Digest 2026-07-15

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-14 23:00 UTC

---

Here is the structured **Hugging Face Trending Models Digest** for July 15, 2026.

---

## 1. Today's Highlights

The ecosystem is dominated by a massive wave of Qwen 3.5/3.6 quantizations, with community fine-tunes and GGUF conversions of these models accruing millions of downloads. The hottest releases this week are **HauhauCS/Qwen3.6-35B-A3B-Uncensored** and **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**, signaling a strong shift toward uncensored, vision-capable MoE models in the 8B-35B range. Enterprise players are also active: **Tencent’s Hy3** and **Baidu’s Unlimited-OCR** show industrial-scale multimodal deployments, while **NVIDIA’s Nemotron-Labs-Audex-30B** pushes specialized MoE reasoning. The GGUF format remains the dominant vector for community distribution, with nearly every top model having a quantized variant.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — *Author: zai-org | Likes: 3,946 | Downloads: 489,611*  
  A conversational MoE model from the GLM lineage, gaining traction for its DSA-enabled inference and strong benchmark performance.

- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** — *Author: bottlecapai | Likes: 341 | Downloads: 6,208*  
  A 27B Qwen 3.6 fine-tune optimized for step-by-step reasoning and chain-of-thought tasks.

- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** — *Author: InternScience | Likes: 537 | Downloads: 30,539*  
  A Qwen 3.5 MoE model designed for agentic workflows, including tool use and multi-turn planning.

- **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B)** — *Author: nvidia | Likes: 149 | Downloads: 1,332*  
  NVIDIA’s latest 30B-A3B MoE language model, tuned for instruction following and synthetic data generation.

- **[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)** — *Author: nvidia | Likes: 117 | Downloads: 41,755*  
  A massive 75B MoE model in NVFP4 quantization, targeting puzzle-solving and multi-hop reasoning.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — *Author: empero-ai | Likes: 2,151 | Downloads: 2,006,265*  
  A 9B Qwen 3.5 vision-language model fine-tuned on 1M Claude synthetic examples, trending for its mythic-style reasoning and GGUF availability.

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — *Author: baidu | Likes: 1,981 | Downloads: 1,715,301*  
  Baidu’s universal OCR model, supporting scene text, document, and handwriting recognition in a single vision-language pipeline.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — *Author: HauhauCS | Likes: 2,728 | Downloads: 2,443,871*  
  An uncensored, aggressive-tuned 35B MoE model with vision capabilities, extremely popular in the open-weight community.

- **[open-gigaai/Giga-World-1](https://huggingface.co/open-gigaai/Giga-World-1)** — *Author: open-gigaai | Likes: 132 | Downloads: 0*  
  A world model diffuser for video generation, hinting at a new generation of physics-aware generative models.

- **[robbyant/lingbot-video-moe-30b-a3b](https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b)** — *Author: robbyant | Likes: 104 | Downloads: 700*  
  A 30B-A3B MoE video generation model using the LingBotVideoPipeline, built on diffusers.

- **[nineninesix/gepard-1.0](https://huggingface.co/nineninesix/gepard-1.0)** — *Author: nineninesix | Likes: 101 | Downloads: 5,872*  
  A Qwen 3.5-based text-to-speech model, combining language model backbone with speech decoding.

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** — *Author: Alissonerdx | Likes: 139 | Downloads: 0*  
  A LoRA for identity-preserving video generation, fine-tuned on LTX-Video for consistent face rendering.

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** — *Author: ATH-MaaS | Likes: 82 | Downloads: 745*  
  A Qwen 3.5-based OCR model, optimized for high-accuracy document and scene text extraction.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** — *Author: tencent | Likes: 780 | Downloads: 10,406*  
  Tencent’s Hy3 model, part of the Hunyuan family, specialized for long-context generation and enterprise dialogue.

- **[migtissera/Tess-4-27B](https://huggingface.co/migtissera/Tess-4-27B)** — *Author: migtissera | Likes: 111 | Downloads: 1,262*  
  A Qwen 3.5-based reasoning model with vision input, tuned for complex analytical tasks.

- **[mgwr/M87](https://huggingface.co/mgwr/M87)** — *Author: mgwr | Likes: 103 | Downloads: 2,408*  
  A LoRA for Krea-2-Turbo, focused on generating high-quality M87-style astronomical and scientific imagery.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** — *Author: GnLOLot | Likes: 232 | Downloads: 89,892*  
  A 1B GGUF quant of MiniCPM5, fine-tuned with synthetic Claude Opus data for subtle, fable-like reasoning.

- **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)** — *Author: unsloth | Likes: 172 | Downloads: 55,222*  
  Unsloth’s GGUF conversion of DeepSeek-V4, making the powerful reasoning model accessible for local inference.

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** — *Author: deepreinforce-ai | Likes: 880 | Downloads: 1,533,354*  
  A 35B GGUF model optimized for endpoint-compatible, fast text generation in production settings.

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** — *Author: yuxinlu1 | Likes: 1,186 | Downloads: 468,629*  
  A highly fine-tuned Gemma 4 GGUF for coding and terminal agentic tasks, popular for developer tooling.

- **[unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)** — *Author: unsloth | Likes: 204 | Downloads: 1,599,150*  
  NVIDIA’s NVFP4 quantization of Qwen 3.6 27B, balancing performance and memory efficiency.

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — *Author: unsloth | Likes: 1,090 | Downloads: 2,904,515*  
  The most downloaded model this week, a GGUF quant of Qwen 3.6 27B with Multi-Turn Predict (MTP), democratizing 27B-level reasoning on consumer hardware.

- **[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)** — *Author: jlnsrk | Likes: 102 | Downloads: 2,188*  
  An int4 quantization of GLM-5.2 with expert-streaming for efficient CPU MoE inference.

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — *Author: prism-ml | Likes: 107 | Downloads: 23*  
  An experimental 2-bit ternary quantization of a 27B model, pushing the limits of extreme model compression.

## 3. Ecosystem Signal

**Qwen 3.5/3.6 is the dominant foundation** — 12 of the top 30 models are based on the Qwen 3.x family, with a clear split between vision-language (Qwen3.5) and pure text (Qwen3.6). The shift toward **Mixture-of-Experts (MoE)** is accelerating: models like Qwen3.6-35B-A3B, Nemotron-30B-A3B, and GLM-5.2 all use sparse activation, enabling larger effective parameter counts at lower inference costs. **Community fine-tuning is hyper-aggressive** — uncensored, "aggressive", and synthetic-Claude fine-tunes dominate the download charts, reflecting a userbase that prioritizes maximal output freedom and stylistic depth. Quantization-wise, **GGUF has become the universal standard**, with Unsloth alone driving nearly 5 million downloads across multiple Qwen 3.6 variants. The **open-weight vs proprietary** gap is widening: enterprises like Tencent, NVIDIA, and Baidu release open models with production-ready quality, while the community responds with instant fine-tunes, ensuring open models stay competitive.

## 4. Worth Exploring

1. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — This model represents the frontier of what’s possible with 9B parameters: 2M+ downloads, strong vision-language performance, and a unique mythic reasoning style. It’s the best example of "small model, big personality" in the current trend.

2. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — The most popular MoE model this week, demonstrating that open-weight uncensored models can reach enterprise-level scale (35B) while maintaining excellent generation quality. Its 2.4M downloads confirm strong community trust.

3. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — A bold experiment in extreme quantization (2-bit ternary), this model is worth studying for anyone interested in the limits of model compression. If viable at scale, it could redefine what hardware is needed for large models.

---
*This digest is auto-generated by [agents-radar](https://github.com/kky-wollu/agents-radar).*