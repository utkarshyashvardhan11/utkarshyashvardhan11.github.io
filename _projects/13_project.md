---
layout: page
title: Bokeh Rendering using Federated Learning
description: First-degree Thesis Project
img: assets/img/bokeh.png
# redirect: https://github.com/JuliaTopOpt/SimpleTopOpt.jl/pull/14
importance: 1
category: BITS Pilani
---
![Julia](/assets/img/bokeh_cropped.png "Bokeh effect")

[`Here`](https://drive.google.com/file/d/1NThRak5mXlHNXjLf7mGRVRBQrZf2PHHd/view?usp=sharing) is the link to my thesis report.

This project explores the intersection of **computational photography** and **data privacy** by adapting advanced computer vision models to a **Federated Learning (FL) framework**. The primary objective is to empower mobile devices to generate **high-quality, DSLR-like bokeh effects** without ever compromising user data security.

*   **The Federated Solution:** Utilizing the **Flower simulation framework**, the models were successfully trained in a decentralized setup across **3 distinct client nodes**, ensuring that raw image data never leaves the local device.
*   **Technical Implementation & Optimization:** The research evaluated multiple state-of-the-art architectures, successfully adapting the **Stacked DMSHN** and **Bokeh-Rendering-with-Vision-Transformers (BRVIT)** models into the FL setup. The BRVIT architecture was structurally enhanced by increasing the **transformer layers from 4 to 5** (specifically targeting the **[0, 1, 9, 10, 11]** hooks combination) and upgrading the backbone from ResNet50 to **ViT-Large**.
*   **Quantitative Results:** Trained and evaluated on the **EBB! dataset** (which consists of nearly **5,000 high-resolution image pairs**), the federated models achieved visual quality and evaluation metrics that closely rivaled their centralized baseline models:
    *   **Federated BRVIT:** Achieved a **PSNR of 24.42**, **SSIM of 0.8937**, and **LPIPS of 0.1921** (highly comparable to the centralized model's respective scores of 24.76, 0.8904, and 0.1924).
    *   **Federated Stacked DMSHN:** Achieved a **PSNR of 24.49**, **SSIM of 0.8753**, and **LPIPS of 0.2269** (closely tracking the centralized metrics of 24.72, 0.8793, and 0.2271).
    *   **ViT-Large Architecture Upgrade:** Pushed the peak performance to a **PSNR of 24.89** and an **SSIM of 0.8896**.