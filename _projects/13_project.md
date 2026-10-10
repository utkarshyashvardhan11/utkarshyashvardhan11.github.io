---
layout: page
title: Bokeh Rendering using Federated Learning
description: Final-year thesis, BITS Pilani (Aug. 2023 – May 2024)
img: assets/img/bokeh.png
importance: 1
category: BITS Pilani
---

![Bokeh effect rendered on a sample image](/assets/img/bokeh_cropped.png "Bokeh effect")

**Supervisor:** Dr Pratik Narang | **Co-supervisors:** Dr Jagat Sesh Challa (Aug. – Dec. 2023), Dr Rakhi (Jan. – May 2024)

**Thesis report:** [PDF (Google Drive)](https://drive.google.com/file/d/1NThRak5mXlHNXjLf7mGRVRBQrZf2PHHd/view?usp=sharing)

### Overview

Bokeh is the soft, out-of-focus background blur that DSLR cameras produce with a wide aperture. Deep learning models can render it from a single photo, but they are normally trained on centralised data, which means user photos have to leave their devices. This thesis asked whether existing bokeh-rendering models could instead be trained with **federated learning (FL)**, so that each device trains on its own images and only model updates are shared.

### What I did

- Studied four bokeh-rendering models (PyNET-based, DDDF, Stacked DMSHN and BRViT) and converted the two that adapted cleanly, **Stacked DMSHN** and **BRViT** (Bokeh Rendering with Vision Transformers), into federated versions using the **Flower** framework in **PyTorch**.
- Simulated federated training with **3 clients**, each holding a different part of the data, on the **EBB! dataset** (about 5,000 aligned image pairs of the same scene with and without bokeh, taken on a Canon 70D).
- Explored two changes to BRViT's architecture in the centralised setting:
  - Replacing its ResNet50 backbone with **ViT-Large**, which improved PSNR slightly.
  - Changing the number of transformer layers from 4 to 5 and testing different layer (hook) combinations. The best combination, [0, 1, 9, 10, 11], did not beat the original model.

### Results

Federated training came close to the centralised baselines while keeping each client's images local.

| Model | Setting | PSNR ↑ | SSIM ↑ | LPIPS ↓ |
| :--- | :--- | :---: | :---: | :---: |
| BRViT | Centralised (baseline) | 24.76 | 0.890 | 0.192 |
| BRViT | **Federated, 3 clients** | **24.42** | **0.894** | **0.192** |
| Stacked DMSHN | Centralised (baseline) | 24.72 | 0.879 | 0.227 |
| Stacked DMSHN | **Federated, 3 clients** | **24.49** | **0.875** | **0.227** |
| BRViT + ViT-Large backbone | Centralised | 24.89 | 0.890 | 0.200 |

↑ higher is better, ↓ lower is better. The ViT-Large model was trained centrally only. The federated BRViT results use the original ResNet50 backbone.

### What I learned

- With a working centralised training script, converting a model to federated training in Flower is straightforward, and the same setup could scale to many more clients given enough compute.
- Model size matters for the real use case. BRViT is too heavy to run on a phone, so a practical on-device system would need a lighter architecture.
- Training the ViT-Large variant federatedly, on more data than EBB!, is a natural next step.


<!-- ---
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
 -->