---
title: Ollama for SKFL
subtitle: Prerequisite - How to set up Ollama for S
image: "/images/posts/Ollama.png"
author: Alice Johnson
date: 2025-01-03T05:00:00Z
categories: ["How to", "LLM"]
featured: true
draft: false
---
To use SKFL's code generation capability Ollama must run locally on your machine. This document comsistst of the following:

1. Explination of Ollama
2. Steos to correctly set it up for SKFL. This set of steps must be followed as described for SKFL's code gen to work.

## What is Ollama?

Ollama is a runtime for working with large language models, supporting both cloud-hosted models and locally-run models. For our alpha release, we use Ollama's cloud model (qwen3-coder:480b-cloud) to power generation. As such, utilising our AI features requires installing Ollama, creating an Ollama account, and running the Ollama server locally.

Ollama is free to use. There are usage limits on cloud-hosted models but these limits are generous and are unlikely to be reached during normal alpha usage.

## Ollama <> SKFL steps

### (1) Install Ollama

You can obtain the correct binary that works for your system from: [https://ollama.com/download](https://ollama.com/download)

### (2) Stop Ollama

Upon installation Ollama begins running as a background daemon. This backgroud process can cause unexpected behaviour when interacting with SKFL. The easiest thing to do is to just kill the background process.

#### On Linux

In the treminal:

````shell
sudo systemctl stop ollama
sudo systemctl disable ollama
````

#### On Mac

This is an application that you can force quit.

#### On Windows

You can do this in Power shell :

```shell
taskkill /F /IM ollama.exe
```

or in the GUI  :

1. Locate the Ollama icon (a llama head) in the bottom-right corner of your Windows taskbar. You may need to click the arrow to show hidden icons.
2. Right-click the Ollama icon.
3. Select Quit Ollama.

### (3) Serve Ollama via CLI

Start Ollama again with OLLAMA_ORIGINS environment variable. From the command line run:

```shell
OLLAMA_ORIGINS="https://dev.skfl.tech" ollama serve
```

### (4) Creating an account

Open a new terminal window. From the command line, run:

```shell
ollama signin
```

Open the link provided to create an account and connect your device

### (5) Pull the qwen3-coder:480b-cloud model

From the command line, run:

```shell
ollama pull qwen3-coder:480b-cloud
```

## Fin

You should be good to go. While `OLLAMA_ORIGINS="https://dev.skfl.tech" ollama serve` is running, dev.skfl.tech is able to send message requests to the qwen3-coder:480b-cloud model
