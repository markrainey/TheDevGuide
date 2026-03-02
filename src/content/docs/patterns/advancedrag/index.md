---
title: Advanced RAG
description: Welcome to the Advanced RAG) section of The Dev Guide!..
tableOfContents: false
sidebar:
  hidden: false
---

Retrieval-Augmented Generation (RAG) has evolved from simple "vector search" into a sophisticated data-retrieval science. This subsection explores Agentic RAG, where the AI doesn't just fetch a document but reasons about what it needs to find, potentially performing multi-step searches across various databases. We also dive into GraphRAG, which uses Knowledge Graphs to help AI understand the deep relationships between entities—essential for complex codebases where a change in a "User" service impacts a "Billing" module five layers deep.

Readers will learn how to optimize the "Context Lifecycle": from chunking and embedding strategies to re-ranking and "Long-Context" management. In an era where Gemini 1.5 Pro offers a 2-million-token window, the pattern has shifted from "minimizing tokens" to "maximizing context quality." This section is critical for anyone building RAG systems that need to be factually perfect and contextually aware.

### Recommended Resources

#### 📚 Books & Research Papers
* [**Essential GraphRAG (Manning Publications)**](https://neo4j.com/essential-graphrag/) by *Neo4j & Manning*.
    > **Why read:** This free book is the 2026 definitive guide on combining vector similarity with structured taxonomies to boost search precision to near-deterministic levels.
* [**GraphRAG: Unlocking LLM Discovery on Narrative Private Data**](https://arxiv.org/abs/2404.16130) by *Microsoft Research*.
    > **Why read:** The seminal paper that introduced "Global Search" (summarizing entire datasets) and "Local Search" (finding specific entity relationships).
* [**A-RAG: Scaling Agentic Retrieval-Augmented Generation**](https://www.researchgate.net/publication/400415473_A-RAG_Scaling_Agentic_Retrieval-Augmented_Generation_via_Hierarchical_Retrieval_Interfaces).
    > **Why read:** A 2026 research paper introducing hierarchical retrieval interfaces that allow agents to adaptively switch between keyword, semantic, and chunk-level searches.

#### 🎥 Videos & Masterclasses
* [**GraphRAG in 2026: What to Use and When to Use It**](https://medium.com/@tongbing00/graphrag-in-2026-what-to-use-when-to-use-it-and-what-to-watch-out-for-a1fa1c283023) by *Tongbing*.
    > **Watch/Read:** A practical buyer’s guide comparing Microsoft GraphRAG, LightRAG, and fast-graphrag for different enterprise scales.
* [**Agentic RAG: Step-by-Step Tutorial With Demo Project**](https://www.datacamp.com/tutorial/agentic-rag-tutorial) by *DataCamp*.
    > **Watch:** A hands-on walkthrough using LangGraph and CrewAI to build a RAG pipeline that can "route" queries and "self-correct" when initial retrieval fails.
* [**NVIDIA: How To Build an Agentic RAG Application**](https://developer.nvidia.com/topics/ai/how-to-build-agentic-ai-rag).
    > **Watch:** A workshop focused on using NVIDIA NeMo Retriever and Llama-3-70B-SpecDec to build sovereign, high-speed agentic RAG systems.

#### 📄 Essential Documentation & Articles
* [**Microsoft GraphRAG Library (GitHub)**](https://github.com/microsoft/graphrag).
    > **Explore:** The official open-source pipeline for extracting structured data from unstructured text and running "Global" vs "Local" search queries.
* [**Agentic RAG: Tutorial & Examples (Patronus AI)**](https://www.patronus.ai/ai-agent-development/agentic-rag).
    > **Read:** A breakdown of the "Plan-Act-Observe" loop specifically for retrieval tasks, including code snippets for implementing it in LangGraph.
* [**GraphRAG with Qdrant and Neo4j**](https://qdrant.tech/documentation/examples/graphrag-qdrant-neo4j/).
    > **Explore:** A practical guide on building a hybrid system that uses Qdrant for vector search and Neo4j for the relational "context" layer.

#### 🎓 Online Courses
* [**Building and Evaluating Advanced RAG Applications**](https://www.deeplearning.ai/short-courses/building-evaluating-advanced-rag/) by *DeepLearning.AI*.
    > **Take this:** Taught by Jerry Liu (LlamaIndex) and Anupam Datta, this course covers the "RAG Triad" for evaluating groundedness and truthfulness.
* [**IBM: Agentic AI with LangChain and LangGraph**](https://www.coursera.org/learn/agentic-ai-with-langchain-and-langgraph) on *Coursera*.
    > **Take this:** An intermediate specialization focusing on the orchestration of agents that perform dynamic routing and multi-step retrieval.