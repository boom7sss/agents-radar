# AI Open Source Trends 2026-07-11

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-11 01:12 UTC

---

# AI Open Source Trends Report – 2026-07-11

## 1. Today’s Highlights

The open‑source AI ecosystem is undergoing a rapid shift from monolithic agent frameworks to **modular, composable agent skills**. Today’s trending list is dominated by projects that equip AI coding agents (Claude Code, Gemini CLI, Codex, etc.) with reusable skills—`addyosmani/agent-skills`, `mattpocock/skills`, and `obra/superpowers` together accumulated over **2,800+ stars in a single day**. The **MCP (Model Context Protocol)** ecosystem continues to expand, with tools like `wonderwhy-er/DesktopCommanderMCP` (terminal control) and `google-labs-code/stitch-skills` (MCP‑compatible skill library) gaining traction. Meanwhile, **long‑term memory for agents** is becoming a critical infrastructure layer, as seen in `TencentCloud/TencentDB-Agent-Memory` and the highly‑starred `mem0ai/mem0`. Finally, **AI‑native office automation** is emerging as a new vertical, led by `iOfficeAI/OfficeCLI` (1,224 stars today), which enables agents to edit Word, Excel, and PowerPoint files without any installed Office suite.

## 2. Top Projects by Category

### 🔧 AI Infrastructure (frameworks, SDKs, inference engines, developer tools)

- **[wonderwhy-er/DesktopCommanderMCP](https://github.com/wonderwhy-er/DesktopCommanderMCP)** – ⭐0 ( +328 today)  
  MCP server giving Claude terminal control, file search, and diff editing – a key building block for agent autonomy.

- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** – ⭐85,931 (total)  
  High‑throughput LLM inference engine; remained the backbone for production AI serving.

- **[ollama/ollama](https://github.com/ollama/ollama)** – ⭐175,892 (total)  
  The easiest way to run local LLMs (Gemma, DeepSeek, Qwen, etc.) – still the #1 choice for local‑first AI.

- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** – ⭐141,484 (total)  
  The canonical agent engineering platform; now integrates deeply with MCP and skills frameworks.

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** – ⭐60,572 (total)  
  Universal memory layer for AI agents – becoming the standard for persistent context across sessions.

- **[TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory)** – ⭐0 ( +123 today)  
  4‑tier progressive pipeline for fully local long‑term memory; zero external API dependencies.

- **[qdrant/qdrant](https://github.com/qdrant/qdrant)** – ⭐33,137 (total)  
  High‑performance vector database – a common backend for RAG agent memory.

### 🤖 AI Agents / Workflows (agent frameworks, automation, multi‑agent systems)

- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** – ⭐0 ( +1,116 today)  
  Production‑grade engineering skills for AI coding agents – the most starred trending repo today.

- **[mattpocock/skills](https://github.com/mattpocock/skills)** – ⭐0 ( +1,712 today)  
  A collection of skills from real .claude directories; directly addresses practical agent workflows.

- **[obra/superpowers](https://github.com/obra/superpowers)** – ⭐0 ( +1,013 today)  
  An agentic skills framework and software development methodology that “just works”.

- **[google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills)** – ⭐0 ( +117 today)  
  MCP‑compatible skill library from Google Labs; promises cross‑agent compatibility (Antigravity, Gemini CLI, Claude Code).

- **[esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix)** – ⭐26,620 (total)  
  DeepSeek‑native coding agent for the terminal, engineered for prefix‑cache stability.

- **[activepieces/activepieces](https://github.com/activepieces/activepieces)** – ⭐23,205 (total)  
  AI workflow automation with ~400 MCP servers – a visual alternative to coding agent pipelines.

- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** – ⭐212,773 (total)  
  “The agent that grows with you” – a highly popular general‑purpose agent framework.

### 📦 AI Applications (vertical solutions, end‑user tools)

- **[iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI)** – ⭐0 ( +1,224 today)  
  First open‑source Office suite purpose‑built for AI agents: read, edit, automate Word/Excel/PowerPoint without Microsoft Office.

- **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** – ⭐48,419 (total)  
  AI productivity studio with 300+ assistants, smart chat, and autonomous agents – a unified front‑end for multiple LLMs.

- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** – ⭐92,235 (total)  
  Multi‑agent LLM framework for financial trading – a clear vertical application gaining huge interest.

- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** – ⭐38,241 (total)  
  AI generates real, editable PowerPoint from any document – another office automation success.

- **[Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)** – ⭐63,080 (total)  
  “Stop renting your intelligence” – local‑first agent experience with built‑in RAG.

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** – ⭐81,956 (total)  
  Turn any codebase, docs, or images into a queryable knowledge graph – a unique agent skill.

### 🧠 LLMs / Training (model weights, training frameworks, fine‑tuning)

- **[pytorch/pytorch](https://github.com/pytorch/pytorch)** – ⭐101,719 (total)  
  The dominant deep learning framework; all recent LLM releases build on it.

- **[huggingface/transformers](https://github.com/huggingface/transformers)** – ⭐162,457 (total)  
  The universal model‑definition framework; still the first stop for any new model.

- **[ultralytics/ultralytics](https://github.com/ultralytics/ultralytics)** – ⭐59,335 (total)  
  YOLO26/11 object detection – constantly updated vision model family.

- **[galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining)** – ⭐283 (total)  
  Minimal, scalable library for pretraining foundation and world models – a niche but professionally focused tool.

- **[galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining)** – ⭐283  
  (New entry – reliable pretraining library for foundation models.)

### 🔍 RAG / Knowledge (vector databases, retrieval‑augmented generation, knowledge management)

- **[open-webui/open-webui](https://github.com/open-webui/open-webui)** – ⭐145,000 (total)  
  The most popular user‑friendly AI interface; deep RAG support with Ollama.

- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** – ⭐84,778 (total)  
  Leading open‑source RAG engine with agent capabilities – production‑grade context layer.

- **[siyuan-note/siyuan](https://github.com/siyuan-note/siyuan)** – ⭐45,031 (total)  
  Privacy‑first, self‑hosted knowledge management with AI integration – bridging note‑taking and RAG.

- **[milvus-io/milvus](https://github.com/milvus-io/milvus)** – ⭐45,177 (total)  
  Cloud‑native vector database for scalable ANN search – standard in large‑scale RAG pipelines.

- **[lancedb/lancedb](https://github.com/lancedb/lancedb)** – ⭐10,858 (total)  
  Embedded retrieval library for multimodal AI – developer‑friendly alternative to full vector DBs.

- **[memvid/memvid](https://github.com/memvid/memvid)** – ⭐15,739 (total)  
  Serverless, single‑file memory layer for agents – replaces complex RAG pipelines.

- **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** – ⭐33,925 (total)  
  “Vectorless, reasoning‑based RAG” – a novel approach challenging traditional vector search.

## 3. Trend Signal Analysis

Today’s data reveals three decisive trends:

**First, the “Agent Skills” movement has exploded.** The three trending repos `agent-skills`, `skills`, and `superpowers` collectively gained over 3,800 stars today. This signals a community‑wide shift from building monolithic agents to composing agents from pre‑built, shareable skills. Developers no longer want to write agent logic from scratch; instead they adopt a standardised skill format (`.claude` directories, MCP‑compatible manifests) and reuse production‑tested capabilities. The appearance of `google-labs-code/stitch-skills`, explicitly targeting cross‑agent compatibility (Antigravity, Gemini CLI, Claude Code), further suggests that skill interoperability is becoming a priority for major players.

**Second, long‑term memory for agents is maturing as a distinct infrastructure layer.** `TencentDB-Agent-Memory` and `mem0ai/mem0` (with >60k stars) both focus on giving agents persistent, external memory. The rise of specialised memory solutions—`memvid`, `cognee`, `topoteretes/cognee`—indicates that simple RAG is no longer enough; agents need a structured, progressive memory pipeline (cache → short‑term → long‑term → knowledge graph) to maintain coherent multi‑session behaviour.

**Third, AI‑native office automation is a new hot spot.** `iOfficeAI/OfficeCLI` (1,224 stars today) and `hugohe3/ppt-master` (38k total) are both enabling agents to directly manipulate office documents. This goes beyond “chat with a PDF” – agents can now create real, editable spreadsheets and presentations. This aligns with the broader trend of agents executing real‑world tasks (not just generating text).

**Connection to industry events:** The prominence of Claude‑centric tools (DesktopCommanderMCP, claude‑code‑templates) and the explicit mention of Claude Code in multiple skills repos reflects the continued dominance of Anthropic’s agent platform. The launch of `Google Labs' Stitch MCP server` and cross‑agent skills suggests a push toward open standards. Finally, the sheer number of projects tagged `ai-agent` in the topic search (80+ repos) confirms that agent development has become the primary AI open‑source activity, surpassing traditional ML framework development in community velocity.

## 4. Community Hot Spots

- **`addyosmani/agent-skills`** – The most starred trending repo today. Its focus on *production‑grade* skills for AI coding agents signals that the community values reliability over experimentation. Worth watching for skill best practices.

- **`iOfficeAI/OfficeCLI`** – A new entrant that fills a critical gap: AI agents need to interact with real office files. If this gains traction, it could become the de‑facto tool for enterprise agent automation.

- **`TencentCloud/TencentDB-Agent-Memory`** – Four‑tier memory pipeline with zero external APIs. As agents become more persistent, this architecture could serve as a reference implementation for local memory layers.

- **`google-labs-code/stitch-skills`** – The first official Google Labs contribution in this space. Its compatibility with multiple coding agents (Antigravity, Gemini CLI, Codex) suggests that Google is betting on an open skill standard rather than proprietary lock‑in.

- **`mem0ai/mem0`** – Already at 60k stars, this project is quickly becoming the universal memory layer for agents. For any developer building multi‑session agents, integrating mem0 should be a priority.

- **`VectifyAI/PageIndex`** – “vectorless RAG” challenges the assumption that vector databases are required for retrieval. If this reasoning‑based approach proves scalable, it could reduce infrastructure costs for many agent deployments.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*