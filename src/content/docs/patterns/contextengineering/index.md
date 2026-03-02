---
title: Context Engineering
description: Welcome to the Context Engineering) section of The Dev Guide!..
tableOfContents: false
sidebar:
  hidden: false
---

The "state" of an AI application is its most valuable asset. This subsection covers Context Engineering—the art of managing what the AI "remembers" during a session and across long-term interactions. You will explore patterns for Persistent Memory, where agents use vector databases as a "long-term storage" to remember user preferences or past architectural decisions, and Short-Term Context Pruning to keep the AI focused on the task at hand without getting lost in "token noise."

Someone should read this to solve the problem of "Context Rot," where an AI starts hallucinating because its prompt has become too cluttered with irrelevant history. We cover the Model Context Protocol (MCP) as a standard for injecting real-time state from external tools (like GitHub or Jira) directly into the model’s reasoning loop. This is the "glue" that makes an AI feel like a permanent, knowledgeable member of your engineering team.

### Recommended Resources

#### 📚 Books & Strategic Guides
* [**The LLM Engineering Handbook**](https://www.llm-engineering.com/) by *Paul Iusztin & Maxime Labonne (2025)*.
    > **Why read:** This is the definitive manual for the "memory-first" era. It bridges the gap between raw RAG and the complex state management required for persistent agents.
* [**AI Engineering**](https://www.oreilly.com/library/view/ai-engineering/9781098166267/) by *Chip Huyen (O'Reilly, 2025)*.
    > **Why read:** Focus on the chapters on **Context Engineering** and **Data Pipelines**. Huyen treats context as a governed asset, covering versioning, compression, and the economics of token usage.

#### 🎥 Videos & Implementation Deep Dives
* [**How to Build AI Agents with Redis Memory Management**](https://redis.io/blog/build-smarter-ai-agents-manage-short-term-and-long-term-memory-with-redis/) by *Redis*.
    > **Watch:** A masterclass on using Redis as a high-speed "Working Memory" layer to maintain state across distributed agentic sessions.
* [**Context Pruning: Ship Better RAG with Less Noise**](https://www.youtube.com/watch?v=dSGS6-iGhyo) by *Milvus*.
    > **Watch:** A technical tutorial on "Observation Masking" and "Pruning"—techniques to remove low-value tokens so the model focuses only on what matters.
* [**Mem0: The Memory Layer for Personalized AI**](https://mem0.ai/).
    > **Watch:** A demo of how to implement "Personalized Memory," where agents store user preferences and past interactions as editable entities rather than just raw text.

#### 📄 Essential Articles & Documentation
* [**Effective Context Engineering for AI Agents**](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) by *Anthropic*.
    > **Read:** The industry's best guide on "Context Altitude"—finding the Goldilocks zone between hardcoding logic and giving the agent too much freedom.
* [**Context Engineering: The Key to Strategic Differentiation**](https://towardsdatascience.com/context-engineering-as-your-competitive-edge/) by *Dr. Janna Lipenkova (Towards Data Science)*.
    > **Read:** A high-level view of how encoding your specific domain expertise into the context stack (Knowledge + Tools + Memory) becomes your competitive edge.
* [**Unified Agent Memory with PostgreSQL (Tiger Data)**](https://www.tigerdata.com/learn/building-ai-agents-with-persistent-memory-a-unified-database-approach).
    > **Read:** A guide to consolidating episodic, semantic, and procedural memory into a single database using `pgvector` and `hypertables`.

#### 🎓 Online Courses
* [**Building AI Agents and Agentic Workflows**](https://www.coursera.org/specializations/building-ai-agents-and-agentic-workflows) (IBM on Coursera).
    > **Take this:** A 2026-updated specialization that focuses on LangGraph persistence, allowing you to build agents that can "sleep" and "resume" without losing their train of thought.
* [**Learn Context Engineering (Microsoft AI for Beginners)**](https://github.com/microsoft/ai-agents-for-beginners/blob/main/12-context-engineering/README.md).
    > **Take this:** An open-source, project-based module on managing the "Agent Scratchpad" and runtime state objects.