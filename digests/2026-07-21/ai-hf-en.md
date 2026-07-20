# Hugging Face Trending Models Digest 2026-07-21

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-20 23:04 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-07-21

## 1. Today's Highlights

This week's trending models reveal a fierce race toward **extreme compression** and **ultra-efficient inference**, with prism-ml's Bonsai-27B family dominating the quantization space at 1-bit and ternary precision. **MoE architectures** continue their meteoric rise—Google's **Gemma-4-31B-it** leads in absolute downloads (12M+) while Qwen-3.6-based MoE mixtures like **Qwen3.6-35B-A3B** variants rack up millions of downloads. Multimodal models now constitute the majority of the top 10, signaling that **vision-language fusion** has become table stakes. Notably, **Baidu's Unlimited-OCR** and **empero-ai's Qwythos** series demonstrate that specialized OCR and reasoning-tuned vision models are gaining serious traction alongside general-purpose giants.

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — zai-org — 4,220 likes · 532K downloads  
  A flagship MoE + DSA architecture model from Zhipu AI, trending as the highest-liked new LLM on the leaderboard this week.

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** — tencent — 847 likes · 14K downloads  
  Tencent's latest Hunyuan V3 dense model, drawing attention as a strong open-weight competitor with apache-2.0 licensing.

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — google — 3,295 likes · 12M downloads  
  Google's newest 31B instruction-tuned vision-language model; its massive download count reflects widespread adoption for both research and production.

- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** — Cactus-Compute — 290 likes · 950 downloads  
  A JAX-native model optimized for function calling and tool use, signaling a push toward agent-centric architectures.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** — thinkingmachines — 1,258 likes · 13K downloads  
  A new vision-language MoE model at the frontier of image-text-to-text conversation, already GGUF-quantized by unsloth.

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — baidu — 2,421 likes · 2.1M downloads  
  Baidu's state-of-the-art OCR model supporting unlimited-length document parsing; dominating the specialized vision pipeline category.

- **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** — Wan-AI — 144 likes · 2.4K downloads  
  An image-to-video generation model focused on human motion synthesis, representing the growing "i2v" trend.

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** — OpenMOSS-Team — 290 likes · 88K downloads  
  A speech-to-text pipeline with speaker diarization in one model, merging transcription and speaker attribution.

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** — Alissonerdx — 210 likes · 0 downloads  
  Identity-preserving LoRA for text-to-video, highlighting the growing demand for character-consistent video generation.

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** — moonshotai — 1,171 likes · 714K downloads  
  A compressed, code-specialized variant of the Kimi K2.5 architecture; notable for its use of compressed-tensors techniques.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **[nvidia/Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nvidia/Nemotron-3-Embed-1B-BF16)** — nvidia — 85 likes · 62K downloads  
  NVIDIA's latest 1B embedding model based on Ministral3, optimized for sentence-similarity and feature extraction.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** — prism-ml — 540 likes · 1.26M downloads  
  A pioneering **1-bit** quantized 27B model; the highest-downloaded extreme compression model this week.

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — prism-ml — 848 likes · 339K downloads  
  A **ternary (2-bit)** variant of Bonsai; similarly trending with strong community adoption for edge deployment.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS — 2,933 likes · 2M downloads  
  The top uncensored Qwen-3.6 MoE fine-tune, combining aggressive reasoning with vision capabilities.

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking)** — GnLOLot — 159 likes · 5.5K downloads  
  A tiny 1B thinking model distilled from Claude Opus, showcasing the "small but smart" trend.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — empero-ai — 2,366 likes · 2.12M downloads  
  A Qwen-3.5-based reasoning vision model with massive download velocity; leading the "mythos" lineage.

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** — DavidAU — 150 likes · 17K downloads  
  A highly fused, multi-step fine-tune of Qwen-3.6-27B with uncensored and "heretic" reasoning flavors.

- **[prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)** — prism-ml — 154 likes · 22K downloads  
  Apple MLX-native 1-bit version of Bonsai, enabling extreme compression on Mac hardware.

- **[unsloth/inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF)** — unsloth — 110 likes · 6.8K downloads  
  Official GGUF quantization of the Inkling vision-language MoE model by the unsloth team.

- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** — openbmb — 108 likes · 0 downloads  
  A vision-language-action model for robotic manipulation, entering the robotics pipeline category.

## 3. Ecosystem Signal

**Extreme quantization has become a first-class research direction.** The Bonsai-27B family—pushing to 1-bit and ternary—is not a curiosity; it's garnering over 1.2M downloads, indicating real deployment demand for running 27B-class models on consumer hardware. **MoE architectures dominate the top 20**, with Qwen-3.6-35B-A3B variants collectively exceeding 4M downloads, while Gemma-4 achieves 12M downloads through Google's distribution power.

**The "uncensored + reasoning" micro-niche is exploding.** At least five fine-tunes on this list explicitly brand as "uncensored" (HauhauCS, DavidAU, LuffyTheFox), often combined with "Aggressive" or "Heretic" reasoning styles. This suggests a growing subculture seeking models without safety alignment layers for creative or research use.

**Robotics models are appearing as full pipelines.** OpenBMB's MiniCPM-RobotManip and MiniCPM-RobotTrack, while low-download now, signal that vision-language-action (VLA) models are entering the HF ecosystem as first-class citizens.

**Proprietary-to-open distillation remains a major driver.** GnLOLot's MiniCPM5-1B distilled from Claude Opus and empero-ai's Qwythos series (Claude Mythos lineage) both demonstrate that knowledge distillation from closed models continues to power open-weight innovation.

## 4. Worth Exploring

1. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** — The 1-bit Bonsai is the most important model to study if you're interested in **extreme quantization and deployment on commodity hardware**. It shows what's possible when model weights are reduced by 16× while maintaining useful capability.

2. **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** — With image-to-video generation still in its infancy, Wan-Dancer's focus on human motion and identity preservation makes it a key model to watch for creative tooling and content production.

3. **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** — Built with JAX and designed for tool-use and function calling, Needle represents an emerging architecture where models are optimized for **agentic workflows** rather than pure text generation—a paradigm worth studying early.

---
*This digest is auto-generated by [agents-radar](https://github.com/kky-wollu/agents-radar).*