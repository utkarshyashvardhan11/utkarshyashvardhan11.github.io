---
layout: page
title: Algorithmic Computer Animation & Physics Simulation
description: A comprehensive suite of physics-based simulation and character animation modules bridging theoretical mathematics with interactive graphics. This collection features custom numerical solvers, rigid body dynamics, inverse kinematics, and deep reinforcement learning.
img: assets/img/ca.png
# redirect: https://github.com/JuliaTopOpt/SimpleTopOpt.jl/pull/14
importance: 1
category: Georgia Tech
---
![Computer Animation](/assets/img/ca_cropped.jpg "Computer Animation")


**Key Implementations**
* **Spline Interpolation:** Implemented **Bezier, B-spline, and Catmull-Rom splines** to generate **smooth keyframe trajectories**.
* **Physics Integrators:** Built and compared **numerical integration methods**—including **Explicit Euler, Midpoint, RK4, and Implicit Euler**—for **accurate free-fall modeling**.
* **Tinkertoy Constraints:** Modeled **2D structural constraints** and **linkages**.
* **Rigid Body Dynamics:** Developed a **rigid body simulator from scratch**, handling **positional updates**, **collision detection**, and **energy loss** via the **coefficient of restitution**.
* **Inverse Kinematics (IK):** Created an **IK solver** utilizing **Jacobian computation** and **gradient-based optimization** to **retarget human motion capture data** onto a **3D character**.
* **Deep Reinforcement Learning:** Formulated a **Markov Decision Process** for a **CartPole balancing task** and trained an **autonomous agent** using **Deep Q-Learning (DQN)**.

**Technologies Used:** **Python**, **PyBullet**, **SciPy**, **Gymnasium**, **Stable Baselines3**.