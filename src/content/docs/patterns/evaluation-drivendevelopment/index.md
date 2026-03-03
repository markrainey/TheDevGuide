---
title: Evaluation-Driven Development
description: Welcome to the Evaluation-Driven Development) section of The Dev Guide!..
tableOfContents: false
sidebar:
  hidden: false
---

In 2026, "testing" has been replaced by Evaluation-Driven Development (EDD). Because LLM outputs are non-deterministic, traditional unit tests are often insufficient. This subsection introduces the pattern of using "LLM-as-a-Judge" to evaluate the quality, safety, and tone of another AI's output. You will learn how to build "Golden Datasets" and run automated simulations to measure "Agent Trajectories"—tracking not just the final answer, but every step the agent took to get there.

This content is vital for moving AI projects into production. You will explore observability patterns using tools like LangSmith, Langfuse, or Arize Phoenix to detect "Agentic Drift" (where an agent’s performance degrades over time). Mastering EDD ensures that your AI system remains reliable and safe, even as the underlying foundation models are updated or swapped out.

### Recommended Resources

#### 📚 Books & Strategic Frameworks
* [**Evaluation-Driven Development: A Framework for Building Reliable LLM Applications**](https://medium.com/towardsdev/evaluation-driven-development-a-framework-for-building-reliable-llm-applications-ce1ac3d9cd2e) by *Brinthan Yoganathan (2026)*.
    > **Why read:** This is the current industry blueprint for embedding evaluation into every layer—from model selection to continuous production observability.
* [**AI Engineering: Building Applications with Foundation Models**](https://amzn.eu/d/0j6rIvun) by *Chip Huyen (O'Reilly, 2025)*.
    > **Why read:** Focus on the "Evaluation" chapter, which introduces the **Four Pillars of Evaluation**: Domain-Specific Capability, Generation Quality, Latency, and Cost Trade-offs.

#### 🎥 Videos & Masterclasses
* [**What is Eval-Driven Development: Ship Agents Without Guessing**](https://www.braintrust.dev/articles/eval-driven-development) by *Braintrust*.
    > **Watch:** A 2026 masterclass on using evals as specifications, including judge calibration, regression gates, and managing "Golden Sets."
* [**LLM-as-a-Judge: A 2026 Guide to Automated Assessment**](https://labelyourdata.com/articles/llm-as-a-judge) by *Label Your Data*.
    > **Watch:** Learn how to build a custom judge step-by-step, including calculating Spearman’s $\rho$ and Cohen’s $\kappa$ to align AI scores with human experts.
* [**Improving Accuracy of LLM Applications**](https://www.deeplearning.ai/short-courses/improving-accuracy-of-llm-applications/) by *DeepLearning.AI*.
    > **Watch:** Taught by experts from Meta and AMD, this course shows how to build an evaluation framework that measures performance and reduces hallucinations.

#### 📄 Essential Documentation & Tooling
* [**LangSmith: High-Fidelity Tracing and Annotation**](https://www.langchain.com/langsmith).
    > **Explore:** The industry standard for debugging and evaluating agentic traces. Specifically, look at **Annotation Queues** for human-in-the-loop calibration.
* [**Arize Phoenix: Open-Source AI Observability**](https://phoenix.arize.com/).
    > **Explore:** A lightweight, notebook-first tool for evaluating RAG pipelines using the "RAG Triad" (Context Relevance, Answer Relevance, and Groundedness).
* [**Langfuse: Open Source LLM Engineering**](https://langfuse.com/).
    > **Explore:** Great for teams needing prompt management and evaluation traces in one place. Focus on their **Web-based SDK** for 2-minute integration.
* [**Braintrust: The Enterprise Eval Engine**](https://www.braintrust.dev/).
    > **Explore:** Documentation on building "Regression Gates" in CI/CD that prevent any model version from shipping if it drops below your quality threshold.

#### 🎓 Online Courses
* [**Generative AI with Large Language Models**](https://www.coursera.org/learn/generative-ai-with-llms) by *DeepLearning.AI*.
    > **Take this:** The 2026 update includes a heavy focus on the full evaluation lifecycle, from ROUGE/METEOR benchmarks to advanced RLHF-based evaluation.
* [**Large Language Model Operations (LLMOps)**](https://www.coursera.org/specializations/llmops-duke) by *Duke University*.
    > **Take this:** A professional-grade course on deployment gates, performance analysis, and integrating automated evals into GitHub Actions.