# Hugging Face Trending Models Digest 2026-07-14

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-13 22:59 UTC

---

# Hugging Face Trending Models Digest — 2026-07-14

## 1. Today's Highlights

This week's Hugging Face trending board is dominated by the Qwen3.5/3.6 family, with multiple quantized and fine-tuned variants appearing across categories — most notably from unsloth, empero-ai, and HauhauCS. NVIDIA continues its enterprise push with three models spanning audio understanding (Audex), reasoning (Puzzle 75B), and visual grounding (LocateAnything-3B). A strong showing from non-LLM domains includes a new diffusion-based video world model from LingBot, Google's tabular foundation model, and CohereLabs' Arabic speech recognition model. The GGUF format remains the dominant quantization path, while DPU-based reasoning MoE architectures (e.g., GLM-5.2, DeepSeek-V4-Flash) signal a maturing MoE ecosystem.

## 2. Trending Models

### 🧠 Language Models

- [**tencent/Hy3**](https://huggingface.co/tencent/Hy3) — tencent | 754 ❤️ | 9,157 ⬇️  
  A Hunyuan-based text-generation model supporting hy_v3 architecture; trending due to Tencent’s push into open-weight MoE deployability.

- [**InternScience/Agents-A1**](https://huggingface.co/InternScience/Agents-A1) — InternScience | 524 ❤️ | 29,801 ⬇️  
  A MoE model built on Qwen3.5 architecture, focused on agentic reasoning tasks with image-text-to-text capability.

- [**nvidia/Nemotron-Labs-Audex-30B-A3B**](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4) — nvidia | 142 ❤️ | 1,058 ⬇️  
  NVIDIA's 30B MoE audio-text model (3B active), designed for audex-based reasoning; nascent but strategically important.

- [**nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4**](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4) — nvidia | 114 ❤️ | 38,775 ⬇️  
  A 75B MoE reasoning model using NVFP4 quantization, signaling NVIDIA's bet on dense-MoE hybrids for puzzle-based instruction tasks.

- [**migtissera/Tess-4-27B**](https://huggingface.co/migtissera/Tess-4-27B) — migtissera | 103 ❤️ | 1,105 ⬇️  
  A Qwen3.5-based vision-language model optimized for chain-of-thought reasoning and personality-coherent responses.

- [**robbyant/lingbot-video-moe-30b-a3b**](https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b) — robbyant | 99 ❤️ | 513 ⬇️  
  A MoE diffusion pipeline for video generation (30B total, 3B active); part of the LingBot ecosystem addressing world-model video.

- [**nineninesix/gepard-1.0**](https://huggingface.co/nineninesix/gepard-1.0) — nineninesix | 95 ❤️ | 3,940 ⬇️  
  A Qwen3.5-based text-to-speech model merging text-generation and TTS in a unified transformer pipeline.

### 🎨 Multimodal & Generation

- [**bottlecapai/ThinkingCap-Qwen3.6-27B**](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) — bottlecapai | 304 ❤️ | 4,909 ⬇️  
  A 27B vision-language model with Qwen3.6 reasoning; trending as an early adopter of the Qwen3.6 image-text-to-text pipeline.

- [**conradlocke/krea2-identity-edit**](https://huggingface.co/conradlocke/krea2-identity-edit) — conradlocke | 251 ❤️ | 0 ⬇️  
  A LoRA module for identity-preserving image editing on Krea-2 base; zero downloads yet but drawing interest for ComfyUI workflows.

- [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) — baidu | 1,963 ❤️ | 1,506,937 ⬇️  
  Baidu's state-of-the-art image-text-to-text OCR model with unlimited feature extraction; massive adoption for document processing.

- [**open-gigaai/Giga-World-1**](https://huggingface.co/open-gigaai/Giga-World-1) — open-gigaai | 128 ❤️ | 0 ⬇️  
  An Apache-2.0 diffusion world model focused on scalable generative video; early-stage but signals open-source world modeling.

- [**Alissonerdx/LTX-Best-Face-ID**](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID) — Alissonerdx | 124 ❤️ | 0 ⬇️  
  A LoRA for identity-preserving text-to-video using LTX-Video pipeline; niche but valuable for reference-to-video tasks.

- [**OpenMOSS-Team/MOSS-Transcribe-Diarize**](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) — OpenMOSS-Team | 161 ❤️ | 39,509 ⬇️  
  An audio-text-to-text model with speaker diarization and transcription; fills the open-speech-transcription gap.

- [**CohereLabs/cohere-transcribe-arabic-07-2026**](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026) — CohereLabs | 102 ❤️ | 11,647 ⬇️  
  CohereLabs’ dedicated Arabic ASR model; trending due to Arabic-language AI demand and CohereLabs' growing speech presence.

- [**robbyant/lingbot-world-v2-14b-causal-fast**](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast) — robbyant | 92 ❤️ | 0 ⬇️  
  A 14B causal image-to-video model from the LingBot world model family; optimized for fast inference with Diffusers.  

- [**nvidia/LocateAnything-3B**](https://huggingface.co/nvidia/LocateAnything-3B) — nvidia | 2,720 ❤️ | 1,503,441 ⬇️  
  NVIDIA's compact 3B feature-extraction model for open-vocabulary visual grounding; extremely popular for low-latency deployment.

### 🔧 Specialized Models

- [**google/tabfm-1.0.0-pytorch**](https://huggingface.co/google/tabfm-1.0.0-pytorch) — google | 362 ❤️ | 21,590 ⬇️  
  Google's first official PyTorch release of their TabFM tabular foundation model; zero-shot classification and regression for structured data.

- [**SupraLabs/Supra-Router-51M**](https://huggingface.co/SupraLabs/Supra-Router-51M) — SupraLabs | 113 ❤️ | 1,573 ⬇️  
  A tiny 51M routing model for multi-LLM orchestration; trending as AI-deployment complexity grows and routing micro-models gain utility.

### 📦 Fine-tunes & Quantizations

- [**empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) — empero-ai | 2,080 ❤️ | 1,985,221 ⬇️  
  A Claude-style fine-tune of Qwen3.5 with 1M long-context GGUF; massive downloads suggest strong community adoption for local reasoning.

- [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) — zai-org | 3,896 ❤️ | 464,914 ⬇️  
  A 5.2B MoE conversational model from GLM series; exploded in popularity due to MoE efficiency and strong Chinese-language support.

- [**froggeric/Qwen-Fixed-Chat-Templates**](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) — froggeric | 886 ❤️ | 0 ⬇️  
  Not a model but MLX jinja chat-template fixes; widely referenced for Qwen3.5 template correctness.

- [**GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF**](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF) — GnLOLot | 219 ❤️ | 68,714 ⬇️  
  A 1B GGUF fine-tune of MiniCPM5 with Opus-style reasoning; impressive engagement for a sub-2B model.

- [**unsloth/DeepSeek-V4-Flash-GGUF**](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF) — unsloth | 161 ❤️ | 49,423 ⬇️  
  Unsloth’s GGUF conversion of DeepSeek-V4-Flash, cited via arXiv:2606.19348; brings DeepSeek V4 to llama.cpp users.

- [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) — HauhauCS | 2,710 ❤️ | 2,512,124 ⬇️  
  Aggressive, uncensored Qwen3.6 MoE fine-tune (35B total, 3B active); one of the most downloaded models this week.

- [**yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF**](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) — yuxinlu1 | 1,176 ❤️ | 452,627 ⬇️  
  A Gemma-4 12B fine-tune with agentic, coding, and terminal capabilities; increasingly popular as a local coding assistant.

- [**empero-ai/Qwythos-9B-v2-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF) — empero-ai | 102 ❤️ | 45,189 ⬇️  
  Follow-up GGUF version of the Qwythos fine-tune series; extended deployment reach for Qwen3.5 reasoning.

- [**deepreinforce-ai/Ornith-1.0-35B-GGUF**](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF) — deepreinforce-ai | 867 ❤️ | 1,392,300 ⬇️  
  A MIT-licensed 35B GGUF model built for endpoints compatibility; strong download count suggests heavy inference server adoption.

- [**empero-ai/Qwythos-9B-v2**](https://huggingface.co/empero-ai/Qwythos-9B-v2) — empero-ai | 96 ❤️ | 2,476 ⬇️  
  Base (non-GGUF) version of Qwythos-9B-v2; less downloads than quantized variant but relevant for full-precision fine-tuning.

- [**unsloth/Qwen3.6-27B-NVFP4**](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4) — unsloth | 192 ❤️ | 1,497,456 ⬇️  
  Unsloth’s NVFP4 quantized Qwen3.6-27B, enabling 27B inference on consumer GPUs; extremely popular for vision-language local deployment.

- [**unsloth/Qwen3.6-27B-MTP-GGUF**](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF) — unsloth | 1,073 ❤️ | 2,901,906 ⬇️  
  Unsloth’s GGUF variant of Qwen3.6-27B with Multi-Token Prediction support; the most downloaded model this week, reflecting massive demand for deployable Qwen3.6.

## 3. Ecosystem Signal

**Qwen3.5/3.6 dominance**: The Qwen family, particularly Qwen3.6, is currently the most fine-tuned, quantized, and deployed model family on Hugging Face. Seven of the top 30 models are Qwen derivatives, and the combined unsloth Qwen3.6 downloads exceed 4.4M. This signals a shift from Llama/Mistral dominance toward Alibaba’s open series, driven by strong MoE support and vision-language capabilities out-of-the-box.

**MoE goes mainstream**: NVIDIA’s Nemotron lineup (Audex, Puzzle 75B), GLM-5.2, DeepSeek-V4-Flash, and Qwen3.6-A3B models all use Mixture-of-Experts architectures. The ecosystem is coalescing around MoE as a standard for efficient large-scale deployment, with models like Ornith-1.0-35B and HauhauCS’s uncensored Qwen3.6 pioneering this in community fine-tunes.

**Quantization standardization**: GGUF dominates with 10 of 30 entries. However, NVFP4 (NVIDIA’s format) appears twice — unsloth/Qwen3.6-27B-NVFP4 and NVIDIA’s own Puzzle model — suggesting a dual-format future: GGUF for CPU/llama.cpp and NVFP4 for GPU-optimized inference. Notably, empero-ai’s Qwythos series alone has aggregate downloads of ~2M across GGUF variants.

**World models emerge**: Three diffusion-based world/video models (open-gigaai/Giga-World-1, LingBot’s video-MoE and world-v2-14b) suggest early community interest in video generation beyond simple text-to-video. These still have low downloads (many at zero), indicating they are nascent but strategically observed.

**Verticalization**: Google’s TabFM, Cohere’s Arabic ASR, Baidu’s Unlimited-OCR, and NVIDIA’s LocateAnything-3B show that specialized models with clear use cases (tabular, speech, OCR, visual grounding) achieve high per-capita engagement even with smaller parameter counts.

## 4. Worth Exploring

1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — With 1.96K likes and 1.5M downloads, this is one of the most impactful specialized models this week. It is a strong candidate for real-world document understanding pipelines, especially where generic vision-language models fall short. Ideal for teams needing production-grade OCR without extensive fine-tuning.

2. **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — The single most downloaded model at 2.9M downloads. Multi-Token Prediction support and GGUF quantization make this the go-to model for local vision-language deployment. A must-study for anyone deploying MoE models on consumer hardware.

3. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — This model achieved 3.9K likes (highest on the board) in a short span, signaling strong community excitement around GLM’s MoE-DSA architecture. Its conversational quality combined with efficient parameter count (5.2B active) makes it a strong alternative to Qwen and Llama for dialog applications, especially with Chinese-language and multilingual use cases.

---
*This digest is auto-generated by [agents-radar](https://github.com/kky-wollu/agents-radar).*