---
layout: page
title: Intelligent Agents & Environments- A Game AI Showcase
description: A curated collection of Unity and C# mini-projects demonstrating practical implementations of core Game AI techniques, ranging from heuristic pathfinding and state-driven behavior to procedural terrain generation.
img: assets/img/gai.gif
# redirect: https://github.com/JuliaTopOpt/SimpleTopOpt.jl/pull/14
importance: 1
category: Georgia Tech
---
![GAI](/assets/img/gai.gif "GAI")

This collection showcases a series of advanced algorithms and systems developed for artificial intelligence in interactive environments. Each project focuses on a distinct domain of game AI, from spatial representation and heuristic search to autonomous decision-making and procedural content generation.

## 1. Grid Lattice Navigation
Developed a **2D grid lattice system** within a game engine to map continuous environments into discretized, navigable cells. Engineered precise **Axis-Aligned Bounding Box (AABB) overlap tests** and implemented the **shrink method** to evaluate traversability, guaranteeing mathematically sound **obstacle avoidance** for dynamic agents.

## 2. Continuous Path Network Generation
Engineered a **Path Network** system facilitating continuous-space pathfinding. Algorithmically plotted **graph nodes** and generated valid, bidirectional **path edges** by applying **Points of Visibility** algorithms. Integrated continuous **raycast-based occlusion checks** ensuring generated agent paths maintained safe clearances from static terrain geometry.

## 3. Incremental A* (A-Star) Search
Implemented a highly optimized, **incremental A* pathfinding algorithm** designed to distribute computational load across multiple game loop ticks, preventing framerate drops. Engineered both **Manhattan and Euclidean heuristic functions** and integrated a robust fallback mechanism returning paths to the **closest reachable node** when an absolute goal is obstructed. The modular architecture natively supports variants like **Dijkstra’s Algorithm** and **Greedy Best-First Search**.

## 4. Navigation Mesh (NavMesh) Construction
Programmed a custom **NavMesh generator** to segment complex navigable terrain into optimized, **obstacle-free convex polygons**. Extracted a highly efficient spatial graph by calculating the midpoints of adjacent **portal edges**, drastically reducing the pathfinding query overhead compared to traditional uniform grid lattices.

## 5. Ballistic Trajectory Prediction & Kinematics
Developed an advanced **predictive targeting system** applying **kinematic physics** to calculate **3D ballistic trajectories** for intercepting dynamically moving targets. Utilized mathematical models including **Millington’s static targeting**, the **Law of Cosines**, and **iterative refinement algorithms**. Integrated intelligent **shot-selection logic** evaluating **target velocity, interception time, and environmental occlusion** using real-time physics raycasts.

## 6. Hierarchical Finite State Machine (FSM)
Architected a robust **Finite State Machine** controlling autonomous agents in a competitive, team-based sports simulation. Programmed complex, context-aware states managing **evasion, targeting, and dynamic objective collection**. Implemented advanced **team coordination behaviors** utilizing a **shared blackboard architecture (TeamShare)** to optimize multi-agent strategies and prevent redundant tactical actions.

## 7. Fuzzy Logic Autonomous Vehicle Controller
Designed a continuous **Fuzzy Logic inference system** to pilot an autonomous physics-based racecar along procedurally generated tracks. Authored custom **fuzzy rule sets**, defined precise **membership functions**, and utilized mathematical **defuzzification** to calculate smooth, real-time **steering and throttle** responses. The control system dynamically processed geometric and kinematic variables including **track curvature, vehicle speed, and spatial lookahead vectors**.

## 8. Procedural Terrain Generation (PCG)
Constructed a **Procedural Content Generation** tool utilizing multi-octave **Perlin Noise** and gradient noise mapping to create expansive 3D heightmap terrains. Engineered custom **bandpass rules, trapezoid functions, and mathematical mapping curves** to cleanly segment and seamlessly crossfade distinct geological biomes (e.g., mountain ranges, sand dunes). The deterministic generation rules were serialized into highly modular **ScriptableObjects**.