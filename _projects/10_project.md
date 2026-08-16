---
layout: page
title: Bayesian Estimation of Differential Equations (SEIR Model)
description: Demonstrating robust estimation of SEIR infectious disease model parameters and their uncertainties from noisy data using Bayesian inference in Julia.
img: assets/img/retrodiction_resized.png
importance: 1
category: Georgia Tech
---

![Data Retrodiction](/assets/img/plot4.png "Data Retrodiction")

<!-- Please reach out to me (via my contact information in the About page) if you want to talk to me about this project. -->

[`Github Link`](https://github.com/utkarshyashvardhan11/Bayesian_Statistics_Project)

This project demonstrates the parameter estimation of the SEIR (Susceptible, Exposed, Infected, Recovered) model using Bayesian inference. The SEIR model is a system of four non-linear ordinary differential equations primarily used to model the spread of infectious diseases. The goal of this project is to solve the "inverse problem" of parameter estimation: utilizing noisy observational data to determine non-measurable model parameters with quantified uncertainty.

## Technologies Used
* **Language:** Julia
* **Libraries:** * `Turing.jl` (Probabilistic Programming)
  * `OrdinaryDiffEq.jl` (Differential Equations)
  * `StatsPlots.jl` (Data Visualization)

## Methodology

### 1. Forward Simulation & Data Generation
* Implemented the baseline SEIR model and simulated it using the parameters **beta = 1**, **sigma = 2**, and **lambda = 0.1**.
* Generated realistic, noisy observations by adding random normally distributed noise to the simulation data.

### 2. Bayesian Inference
* Utilized the Turing.jl `@model` macro to handle the Bayesian estimation. 
* Set up prior distributions for the parameters as Normal distributions (mean = 1.5, standard deviation = 1) truncated between 0 and 5.
* Found the likelihood using the ODE system's solution and modeled it with a normal distribution.

### 3. MCMC Sampling
* Inferred the posterior probability using the No-U-Turn Sampler (NUTS).
* Sampled 3 independent chains with forward-mode automatic differentiation, yielding summary statistics for the model parameters.

### 4. Validation via Data Retrodiction
* Validated the estimation by generating simulated data using 300 randomly picked samples from the posterior distribution. 
* Plotted the ensemble of solutions over the original noisy observations to visually verify that the model accurately captures the underlying dynamics.

## Results & Conclusion
The Bayesian analysis successfully estimated parameters that closely aligned with the true values used to generate the initial observations. The data retrodiction visually confirmed the accuracy of the model, establishing that Bayesian inference provides a highly robust approach to estimating ODE parameters with quantified uncertainty.
