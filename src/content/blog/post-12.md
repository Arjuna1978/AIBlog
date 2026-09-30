---
title: What is a Neural Network?
subtitle: What exactly are Neural Networks? Undertanding this concept is foundational to understanding AI
image: "/images/posts/post-4.png"
author: Abdullah Al Shifat
date: 2022-04-05T05:00:00Z
categories: ["development"]
featured: false
draft: false
---

<strong>Neural networks are stacks of digital representations of connected biological neurons in layers.</strong> 

<Blockquote name="Alexender Smith">
  A wise girls her limit to touch.To Repellat neque praesentium .The me an idea,
  so I as quickly To get.
</Blockquote>

Neural networks are among the most influential algorithms in modern machine learning and artificial intelligence (AI). They underpin breakthroughs in computer vision, natural language processing (NLP), speech recognition and countless real-world applications ranging from forecasting to facial recognition. While today’s deep neural networks (DNNs) power systems as complex as transformers and convolutional neural networks (CNNs), the origins of neural networks trace back to simple models such as linear regression and how the human brain digests, processes and decides on the information presented to it.

On a high level, the inspiration for neural networks comes from the biological neurons in the human brain, which communicate through electrical signals. In 1943, Warren McCulloch and Walter Pitts proposed the first mathematical model of a neuron, showing that simple units could perform computation of a function. Later, in 1958, Frank Rosenblatt introduced the perceptron, an algorithm designed to perform pattern recognition. The perceptron is the historical ancestor of today’s networks: essentially a linear model with a constrained output. In the following section, we will dive into how neural networks borrow inspiration from the human brains to make decisions and recognize patterns.  

A neural network can be understood through a simple example: 

Spam detection. An email is fed into the network, and features such as words or phrases like “prize,” “money,” “dear” or “win” are used as inputs. The early neurons in the network process the importance of each signal, while later layers combine this information into higher-level cues that capture context and tone. The final layer then computes a probability of whether the email is spam, and if that probability is high enough, the email is flagged. In essence, the network learns how to transform raw features into meaningful patterns and use them to make predictions.

This process is powered by two fundamental concepts: weights and biases. Weights act like dials that control how strongly each input feature influences the decision—a word like “prize” may be given more weight than a common word like “hello.” Biases are built-in values that shift the decision threshold, allowing a neuron to activate even if the inputs themselves are weak. Together, these model parameters determine how each neuron contributes to the overall computation. By adjusting these values during training, the network gradually learns to make accurate predictions—in this case, whether an email is spam or not.