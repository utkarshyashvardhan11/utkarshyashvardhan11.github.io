---
layout: page
title: Machine Learning Algorithms & Analysis
description: An end-to-end evaluation of supervised, unsupervised, randomized optimization, and reinforcement learning algorithms to benchmark their predictive performance and computational efficiency on large-scale datasets.
img: assets/img/ml.png
# redirect: https://github.com/JuliaTopOpt/SimpleTopOpt.jl/pull/14
importance: 1
category: Georgia Tech
---
![Machine Learning](/assets/img/ml.png "Machine Learning")

This project encompasses a four-part foundational series exploring the core pillars of machine learning, engineered as part of the ML coursework at Georgia Tech. The project rigorously benchmarks classical algorithms, neural network optimization, and decision-making models against complex, large-scale data (including a **1,000,000+ record** US Accidents dataset and a Hotel Booking Demand dataset).

*   **Part 1: Supervised Learning & Predictive Modeling** 
    Engineered and hyperparameter-tuned **Decision Trees, k-NN, SVMs, and Neural Networks** for binary and multi-class classification. 
    *   Demonstrated that deep **Neural Networks** drastically outperformed other models on high-dimensional data, achieving an **F1 score of ~0.88** on the US Accidents dataset. 
    *   Evaluated model sensitivity, proving that **RBF SVMs** heavily rely on precise $C$ and $\gamma$ tuning to balance bias-variance trade-offs, while Decision Trees required aggressive depth pruning (limiting `max_depth` to **18**) to prevent severe overfitting.

*   **Part 2: Randomized Optimization & Neural Network Weights** 
    Bypassed standard backpropagation by optimizing neural network weights using **Randomized Hill Climbing (RHC), Simulated Annealing (SA), and Genetic Algorithms (GA)**. 
    *   Established that **Simulated Annealing** offered the optimal balance between high performance and computational efficiency, significantly outpacing the convergence time of RHC.
    *   Conducted rigorous optimizer ablations, proving that while **Adam** converged rapidly, incorporating **Label Smoothing ($\epsilon=0.05$)** provided the highest boost in model generalization and test accuracy (**~0.834**).

*   **Part 3: Unsupervised Learning & Dimensionality Reduction** 
    Benchmarked clustering algorithms (**K-Means and Gaussian Mixture Models**) and isolated latent structures using **PCA, ICA, and Randomized Projections (RP)**.
    *   Proved that raw extrinsic clustering alignment (measured via **ARI and NMI**) was poor on high-dimensional data without prior feature extraction.
    *   Engineered a highly optimized pipeline feeding **PCA-reduced features (capturing 90% variance across 24 components)** into a Neural Network. This hybrid model maintained peak predictive power (F1 score of **0.82**) while **slashing training time by over 57%** (from 3090 seconds down to 1321 seconds) and significantly reducing RAM usage.

*   **Part 4: Reinforcement Learning & Markov Decision Processes** 
    Modeled and solved discrete/stochastic (Blackjack-v1) and continuous/deterministic (CartPole-v1) MDPs using Model-Based (**Value Iteration, Policy Iteration**) and Model-Free (**Q-Learning, SARSA**) algorithms.
    *   Demonstrated that **Policy Iteration** scaled exceptionally well in larger state spaces, converging in just **4 iterations** (compared to VI's **1,143 iterations**) to solve the CartPole environment.
    *   Optimized a high-resolution state discretization strategy for CartPole (**1,728 discrete states**) to prevent state aliasing, allowing off-policy **Q-Learning** to successfully solve the continuous balancing task by **episode 200**.