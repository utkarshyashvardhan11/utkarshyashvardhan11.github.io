---
layout: page
title: Foundations of Quantum Hardware- A Multi-Architecture Simulation Portfolio
description: A comprehensive suite of simulations exploring the physical dynamics, noise constraints, and logic gate synthesis across diverse quantum architectures, including superconducting circuits, trapped ions, neutral atoms, and linear optics.
img: assets/img/qh.png
# redirect: https://github.com/JuliaTopOpt/SimpleTopOpt.jl/pull/14
importance: 1
category: Georgia Tech
---
![Quantum Hardware](/assets/img/qh.png "Quantum Hardware")

This comprehensive project explores the physical and algorithmic foundations of diverse quantum computing architectures. By simulating various hardware modalities—including **superconducting circuits, ion traps, neutral atoms, and linear optics**—the project demonstrates a deep understanding of the physics driving quantum gates and the impact of noise on quantum algorithms.

## Core Sub-Projects & Key Achievements

### 1. Quantum Fundamentals: Bell Inequalities and Hidden Variables
* Evaluated fundamental quantum mechanics principles by simulating a **hypothetical hidden variables theory**.
* Generated random **hidden variables corresponding to quantum measurements** across three different axes.
* Computed correlation probabilities to verify **Bell inequality measurements**, successfully manipulating parameters to make the **inequality saturated**.

### 2. Superconducting Qubits: Josephson Junction Dynamics
* Developed a rigorous time-step simulator to track the **phase, charge, and voltage dynamics** of superconducting **Josephson junctions**.
* Modeled and analyzed the junction behavior across four configurations: **underdamped and overdamped junctions** in both **stable and unstable regimes**.
* Successfully calculated the **critical starting voltage** for runaway oscillation and determined the fundamental **voltage spike frequency** corresponding to modern definitions of the Volt.

### 3. Error Analysis: Quantum Noise and Resilience
* Leveraged **Qiskit's noise modeling features** to analyze the degradation of a **four-qubit cat state** circuit.
* Implemented advanced fidelity metrics by evaluating **worst-case error rates** via circuit reversal.
* Synthesized an optimized **controlled-X (CX) operation** from fundamentally noisy and imperfect **CRX and CRY gates**, identifying the precise **single-qubit error threshold** where the custom decomposition outperforms a naive approach.

### 4. Trapped Ions: Cirac-Zoller and Mølmer-Sørensen Gates
* Simulated laser-induced spin-dependent forces on trapped ions to model the Hamiltonian of **phonon and electronic state interactions**.
* Developed matrix representations for fundamental ion-trap specific entangling operations: the **Cirac-Zoller (CZ) gate** and the **Mølmer-Sørensen (MS) gate**.
* Successfully constructed and verified a highly accurate **CNOT gate** by applying localized single-qubit rotations combined with these underlying physical ion-trap interactions.

### 5. Neutral Atoms: Rydberg Blockade Optimization
* Constructed a comprehensive **Rydberg blockade Hamiltonian** modeling the atomic excitation and interaction blockades between neutral atoms.
* Engineered theoretical **CPHASE and CZ gates** by simulating precise resonant driving pulses on target qubits under a blockade regime.
* Optimized interaction strengths and cycling pulse durations across both **single and double blockade sequences**, successfully achieving highly optimized **>99% gate fidelity**.

### 6. Linear Optics: Photonic Quantum Computing
* Engineered a custom photonic simulator implementing fundamental linear optical components: **Polarizing Beam Splitters (PBS), Beam Splitters (BS), Polarization Rotators (PR), and Quarter-Wave Plates (QWP)**.
* Devised circuits leveraging these optical components and **conditional detectors** to successfully generate reliable **two-photon and four-photon entanglement**.
* Executed simulated **photonic Bell tests** and applied non-deterministic photon fusion operations to synthesize a **three-photon cluster state** with the correct probabilistic amplitudes.