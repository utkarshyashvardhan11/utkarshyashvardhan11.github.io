---
layout: page
title: Applied Network Science & Complex Graph Analytics
description: An exploration of complex network dynamics and applied graph theory, evaluating topological structure, community detection, and stochastic spreading across biological, social, and technological datasets.
img: assets/img/ns.png
# redirect: https://github.com/JuliaTopOpt/SimpleTopOpt.jl/pull/14
importance: 1
category: Georgia Tech
---
![Network Science](/assets/img/ns_cropped.jpg "Network Science")

*   **Graph Topology & Bipartite Projections:** Computed random walks, stationary distributions, and structural connectedness on directed and undirected graphs. Analyzed bipartite networks via biadjacency matrices and one-mode projections to evaluate node commonality and influence. 
*   **Empirical Network Classification:** Investigated the "Friendship Paradox" through neighbor-degree computations. Applied statistical hypothesis testing to identify scale-free and small-world network properties using logarithmically scaled power-law degree distributions, clustering coefficients, and characteristic path lengths.
*   **Centrality & Community Detection:** Evaluated node importance using a diverse array of centrality metrics (PageRank, Katz, Betweenness, Eigenvector) and compared their overlap via Jaccard similarity. Uncovered hidden network structures using Louvain, K-Clique, and Label Propagation algorithms, validating partition quality with Normalized Mutual Information (NMI) against ground-truth labels.
*   **Epidemic Spreading Modeling:** Simulated stochastic outbreak dynamics (SIS models) on real-world human contact networks to analyze infection curves, comparing empirical time constants and endemic sizes against theoretical network thresholds.

**Technologies & Libraries:** Python, NetworkX, SciPy, NumPy, Scikit-Learn, EoN, Seaborn