# Hugging Face Trending Models Digest 2026-07-11

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-11 01:12 UTC

---

# Hugging Face Trending Models Digest – July 11, 2026

## Today's Highlights
This week's top trends are dominated by large-scale Mixture-of-Experts (MoE) models, with **zai-org/GLM-5.2** (3,784 likes) leading the pack as an open-weight MoE conversational LLM. NVIDIA pushes both specialized vision grounding (LocateAnything-3B, 2,700 likes) and novel quantization via NVFP4, while the Qwen 3.6 ecosystem explodes with dozens of GGUF fine-tunes and uncensored variants (e.g., HauhauCS/Qwen3.6-35B, 2,623 likes). Baidu’s **Unlimited-OCR** and Google’s **tabfm** signal growing enterprise adoption of specialized models for document processing and tabular ML. Community quantization continues to thrive—unsloth and empero-ai each contribute high-download GGUF conversions of top models.

---

## Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** by tencent – 664 likes, 6,923 downloads  
  A third-generation Hunyuan text-generation model from Tencent, gaining traction for its strong Chinese-language performance.

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** by zai-org – 3,784 likes, 392,655 downloads  
  The top-liked model overall—a large MoE conversational LLM (GLM architecture) that balances efficiency with quality.

- **[AliesTaha/fable-traces](https://huggingface.co/AliesTaha/fable-traces)** by AliesTaha – 198 likes, 4,875 downloads  
  A Qwen3-based instruction-tuned model for narrative and reasoning tasks, popular among creative AI users.

- **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)** by meituan-longcat – 170 likes, 1,308 downloads  
  Meituan’s long-context LLM for conversational use, optimized for extended dialogue and document understanding.

- **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)** by mistralai – 184 likes, 315 downloads  
  Mistral’s latest 119B-parameter MoE model (6B active), designed for efficient inference and strong reasoning.

- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** by deepseek-ai – 463 likes, 33,088 downloads  
  The production-ready variant of DeepSeek V4 with optimized inference via DSpark, drawing attention from enterprise users.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** by InternScience – 470 likes, 25,772 downloads  
  A Qwen3.5-based MoE vision-language model designed for agentic workflows and image-text reasoning.

- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** by bottlecapai – 212 likes, 3,699 downloads  
  A Qwen3.6-derived model fine-tuned for chain-of-thought reasoning in multimodal inputs.

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** by OpenMOSS-Team – 98 likes, 5,919 downloads  
  An audio-text-to-text model combining transcription and speaker diarization in one pipeline.

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** by krea – 575 likes, 164,525 downloads  
  A faster variant of the Krea-2 text-to-image model, popular for its high-quality, open-weight image generation.

- **[open-gigaai/Giga-World-1](https://huggingface.co/open-gigaai/Giga-World-1)** by open-gigaai – 118 likes, 0 downloads  
  A large-scale generative model (diffusers-based) from GigaAI, likely targeting world simulation or video generation.

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** by Alissonerdx – 83 likes, 0 downloads  
  An identity-preservation adapter for LTX video models, enabling reference-to-video face consistency.

- **[robbyant/lingbot-video-moe-30b-a3b](https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b)** by robbyant – 75 likes, 317 downloads  
  A 30B MoE video generation model using Diffusers’ LingBotVideoPipeline, pushing efficient video synthesis.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)** by empero-ai – 761 likes, 184,315 downloads  
  The base multimodal variant of Qwythos (before GGUF), fine-tuned on synthetic Claude data for creative vision-language tasks.

### 🔧 Specialized Models (code, math, medical, embeddings, OCR, tabular, routing)
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** by baidu – 1,921 likes, 1,319,683 downloads  
  A feature-extraction model for unlimited OCR scenarios, trending due to Baidu’s enterprise-grade document intelligence.

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** by froggeric – 836 likes, 0 downloads  
  A non-model utility providing corrected Jinja chat templates for Qwen models, widely adopted for MLX and deployment.

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** by google – 345 likes, 18,626 downloads  
  Google’s zero-shot tabular foundation model for classification and regression, drawing strong interest from data scientists.

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** by nvidia – 2,700 likes, 1,456,269 downloads  
  NVIDIA’s vision grounding model that can locate any object in images, trending for robotics and visual QA.

- **[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)** by nvidia – 99 likes, 23,404 downloads  
  A 75B MoE model specialized for puzzle reasoning, using NVIDIA’s NVFP4 quantization for efficient deployment.

- **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B)** by nvidia – 93 likes, 576 downloads  
  A Nemotron variant tuned for audio understanding, despite its text-generation pipeline, hinting at multimodal capabilities.

- **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)** by SupraLabs – 86 likes, 1,160 downloads  
  A tiny 51M router model for directing prompts to the best expert LLM, gaining traction as inference orchestration matures.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ, LoRA)
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** by empero-ai – 1,976 likes, 1,909,705 downloads  
  The GGUF-quantized version of Qwythos, extremely popular for local deployment via llama.cpp.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** by HauhauCS – 2,623 likes, 2,660,170 downloads  
  An uncensored, aggressively fine-tuned GGUF of Qwen3.6 MoE for unfiltered vision-language tasks.

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** by deepreinforce-ai – 835 likes, 1,085,554 downloads  
  A 35B GGUF-quantized text-generation model, likely a community distillation of a larger open model.

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** by GnLOLot – 157 likes, 9,029 downloads  
  A tiny 1B GGUF fine-tune of MiniCPM5 for thinking/reasoning, proving that small models still attract enthusiasts.

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** by yuxinlu1 – 1,134 likes, 427,668 downloads  
  A heavily fine-tuned Gemma 4 GGUF for agentic coding and terminal use—trending among developer tooling communities.

- **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)** by unsloth – 124 likes, 31,895 downloads  
  Unsloth’s GGUF conversion of the DeepSeek V4 Flash model, providing a fast, quantized inference option.

- **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)** by nvidia – 336 likes, 787,748 downloads  
  NVIDIA’s NVFP4 quantized version of Qwen3.6-27B, offering a new precision format for high-throughput deployment.

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** by unsloth – 1,036 likes, 2,895,457 downloads  
  The most downloaded GGUF this week—a Qwen3.6-27B multimodal variant quantized for ollama and llama.cpp.

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** by conradlocke – 161 likes, 0 downloads  
  A LoRA adapter for Krea-2 enabling identity-preserving image editing, popular in ComfyUI workflows.

---

## Ecosystem Signal

The ecosystem is rapidly coalescing around **MoE architectures**—GLM-5.2, Leanstral-1.5, DeepSeek V4, Qwen3.6, and Nemotron variants all use mixture-of-experts to maximize capacity while keeping inference costs manageable. **Qwen 3.5/3.6** has become the dominant base for community fine-tuning; nearly a third of the trending list are Qwen-derived models or GGUF conversions. **NVIDIA** emerges as a key player not just in hardware but in model innovation, releasing specialized vision (LocateAnything), reasoning (Puzzle), and quantization (NVFP4) builds. **Open-weight trends** remain strong—most top models are fully open, with only occasional proprietary fine-tunes (e.g., from Baidu, Tencent) still sharing weights. **GGUF quantization** continues to be the primary vehicle for local deployment, with unsloth and empero-ai leading downloads. Meanwhile, **specialized small models** (Supra Router 51M, MiniCPM5 1B) hint at a growing interest in modular, routable inference systems.

---

## Worth Exploring

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** – With 2,700 likes and 1.4M downloads, this compact vision grounding model is a must-study for anyone building multimodal agents, robotics pipelines, or visual QA systems. Its performance-to-size ratio is exceptional.

2. **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** – A zero-shot tabular foundation model that could change how data scientists approach classification and regression without fine-tuning. It’s still early but represents a paradigm shift—worth evaluating for enterprise tabular workloads.

3. **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** – The single most downloaded model this week (2.9M). Combining Qwen3.6’s multimodal MoE with unsloth’s efficient GGUF conversion makes it the go-to choice for running state-of-the-art vision-language on consumer hardware.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*