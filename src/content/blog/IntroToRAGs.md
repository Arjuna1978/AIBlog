---
title: RAGs a Primer
subtitle: Introduction to Retrieval-Augmented Generation (RAG) systems
icon: "/images/blogs/RAGs/RagHero.svg"
author: Arjuna Vijayanayagam
date: 2025-01-03T05:00:00Z
categories: ["Theory", "LLM"]
featured: true
draft: false
---

Imagine a smart student who's an expert at a subject, but sometimes they need to research the very latest information to answer a question accurately.

That's essentially what Retrieval-Augmented Generation (RAG) does for an AI. An LLM, like the smart student, has a lot of general knowledge. However, when you give it a specific question, a RAG system first acts like a librarian. It quickly searches a set of your documents (like a company's internal files or a specific knowledge base) to find the most relevant information. (1)

Once it finds the right information, it gives that information to the AI. The AI then uses this new, specific context to generate a precise answer, making its response more accurate and up-to-date. This process helps the AI avoid making things up and ensures its answers are based on real, verifiable sources.

The magic of RAG is in its two key components: a retriever and a generator.

- The Retriever: This is your intelligent librarian. Its job is to quickly scan your knowledge base which could be a database of internal documents, product manuals, or research papers to find the most relevant information. The retriever uses a sophisticated method to understand the meaning behind the query and the documents, ensuring it pulls the most semantically similar information, even if it doesn't match a single keyword.
- The Generator: This is the LLM you're already familiar with. But instead of relying only on its pre-trained knowledge, it now has a crucial new piece of information: the documents the retriever just found. The LLM uses this new context as its source of truth to formulate a precise, factual, and comprehensive answer.

This process ensures the output is not just coherent, but also accurate and relevant to the user's specific request, and most importantly reduces the risk of LLM hallucinations. (2), (3).

![The perceptron maps an input array of x[n] to a output variable f(x). And the perceptron reflects a bilogical neuron, where x[n] represents the neuron's dendrites and f(x) represents the dendrites. ](../../images/blogs/perceptrons/perceptron_vs_nature.jpg)

