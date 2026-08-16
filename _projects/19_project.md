---
layout: page
title: Applied Quantum Computing- Algorithms, Routing, and Error Correction
description: An end-to-end showcase of quantum computing implementations, spanning fundamental circuit design, cryptographic protocols, hardware-aware qubit routing, and advanced error correction.
img: assets/img/qc2.png
# redirect: https://github.com/JuliaTopOpt/SimpleTopOpt.jl/pull/14
importance: 1
category: Georgia Tech
---
![Shor's Algorithm](/assets/img/qc2.png "Shor's Algorithm")


## Overview
This project is a culmination of multiple mini-projects focusing on **quantum circuit design**, **cryptography**, **algorithm analysis**, **device routing**, and **error correction**. It showcases the complete, from-scratch implementation of fundamental and advanced quantum computing concepts:-

<!-- ## Key Mini-Projects -->

### 1. Quantum Fundamentals & Cryptography
Engineered essential quantum circuits to demonstrate **superposition** and **entanglement**. Developed a fully functional **Quantum Adder** with logical operations for **Quantum AND**, **OR**, **XOR**, and **Signed Addition**. Implemented the **BB84 Protocol** for secure quantum information transmission, successfully incorporating mechanisms to **detect eavesdropper (Eve) presence**.

### 2. Quantum Algorithm Analysis
Implemented and analyzed core algorithms, including **Deutsch and Deutsch-Jozsa algorithms** for evaluating constant and balanced functions, and **Simon's Algorithm** for period finding. Developed a **Grover's Algorithm** circuit utilizing **phase rotation** and **inversion oracles** to amplify and find **target states**. Built both ideal and **noisy Bernstein-Vazirani circuits** to study the impact of **hardware control errors**. Realized **Superdense Coding** to transmit classical binary information over quantum channels.

### 3. Qubit Allocation and Routing
Explored the constraints of physical quantum hardware by **decomposing benchmark circuits** into distinct **basis gate sets**. Applied the **SABRE algorithm** to map these circuits onto various **device topologies** (such as Grid and Ring layouts), optimizing for **average circuit depth** and minimizing **SWAP insertions**. Simulated a **NISQ (Noisy Intermediate-Scale Quantum) machine** by constructing custom **noisy CNOT gates** and formulated optimal **logical-to-physical qubit mapping** to maximize overall circuit fidelity on 4-qubit and 5-qubit topologies.

### 4. Quantum Error Correction & QAOA
Designed robust **encoder and decoder circuits** to implement both **bit-flip** and **phase-flip Quantum Error Correction (QEC)**, successfully recovering initial states after single or double error injections. Finally, engineered a **Quantum Approximate Optimization Algorithm (QAOA) solver** to evaluate node partitions and efficiently solve the **Max-Cut problem** on simple, undirected graphs.