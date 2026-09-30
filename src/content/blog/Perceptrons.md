---
title: Perceptrons
subtitle: What is a Perceptron
image: "@/images//blogs/perceptrons/Perceptron_invent.png"
author: Arjuna Vijayanayagam
date: 2005-01-03T05:00:00Z
categories: ["Theory","Foundations","History"]
featured: false
draft: false
---
Perceptrons - What is a Perceptron

## History
In 1957, Frank Rosenblatt was at the Cornell Aeronautical Laboratory. He simulated the perceptron on an IBM 704. He described them as : "src/images/blogs/perceptrons/perceptron_vs_nature.jpg"
<Blockquote name="Frank Rosenblatt">
...simplified networks, designed to permit the study of lawful relationships between the organization of a nerve net, the organization of its environment.
</Blockquote>

The high level diagram below shows the nature vs digital preceptron map:

<img src="/src/images//blogs/perceptrons/perceptron_vs_nature.jpg" alt="Description" />

Rosenblatt's perceptron brought new life to an almost extinct area; this perceptron, in all its simplicity, appeared to be capable of "learning" certain things. On the other hand, it turned out that perceptrons were not able to learn certain other things, in spite of all the effort put into extending and refining the training process, and building bigger machines. Namely, most researchers in the field were looking for more general methods which should make the perceptron capable of handling a large class of problems. 

It was found that single-layer perceptrons are only capable of learning linearly separable patterns.For a classification task with some step activation function, a single node will have a single line dividing the data points forming the patterns. In 1961 Rosenblatt built Tobermory a speach recognition tool. It had 4 layers with 12,000 weights. This system proved that multi-layerd perceptron networks were in deed capable complex classifications. It was found that more ore nodes can create more dividing lines, but those lines must somehow be combined to form more complex classifications. A second layer of perceptrons, or even linear nodes, are sufficient to solve many otherwise non-separable problems.

While the perceptron is a simplified model of a biological neuron which abstacts away the complexity of biological neuron, research suggests a perceptron-like linear model can produce some behavior seen in real neurons. As such perceptrons now form the fundamental building block of neural netowrk based AI technology.

## Anatomy of perceptrons

<strong>In the modern sense, the perceptron is the algorithm to learn. <strong>

The perceptron maps an input array of x[n] to a output variable f(x). And the perceptron reflects a bilogical neuron, where x[n] represents the neuron's dendrites and f(x) represents the dendrites. 
Newurons learn by modulating and amplifying inputs from their dedrites when considereing whether to fire or not. In the digital perceptron, this is modeled  by an array of weights W[n]. This is similar to how biological neurons in a networks activate or suppress the activation of their neighbours when completing a task.
The result is calcualted by multiplying the inputs with their corresponding weights and summing them. The result is then normalised to give either a 1 or 0 deprending on the desired threshold (Activation).

<img src="/src/images//blogs/perceptrons/Perceptron.png" alt="Description" />

