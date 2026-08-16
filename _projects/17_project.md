---
layout: page
title: Computer Graphics & Geometry Processing Suite
description: A comprehensive Java-based computer graphics and geometry processing suite featuring a Whitted-style ray tracer, an implicit surface modeler, and topological mesh manipulation algorithms.
img: assets/img/part3-8-AdvancedRenderer.png
# redirect: https://github.com/JuliaTopOpt/SimpleTopOpt.jl/pull/14
importance: 1
category: Georgia Tech
---
<!-- ![Graphics](/assets/img/part3-8-AdvancedRenderer.png "CG") -->

This project encompasses a suite of 3D computer graphics and geometry processing algorithms written in Java. It is divided into three core mini-projects: a Whitted-style ray tracer capable of photorealistic rendering, an implicit surface modeler that generates complex procedural geometry, and a mesh manipulation engine for topological subdivision and smoothing.

![ray_tracer_example](/assets/img/part3-8-AdvancedRenderer_cropped.jpg "example")

## Mini-Project 1: Whitted-Style Ray Tracer

The first component of the suite is a Whitted ray tracer built from scratch to simulate the physical behavior of light, producing photorealistic images from complex scene descriptions. 

*   **Ray Generation & Intersection:** Implemented ray generation for both standard pinhole cameras and physical lens models. Engineered precise intersection detection mathematics for axis-aligned bounding boxes (AABBs), spheres, and triangles. 
*   **Shading & Illumination:** Implemented the Lambertian reflectance model for diffuse shading and the Blinn-Phong reflection model to compute specular highlights. Engineered shadow rays to detect light occlusion, including sampling random points on disk area lights to simulate realistic soft shadows.
*   **Distribution Ray Tracing:** Traced multiple rays per pixel to sample varied effect distributions. This enabled advanced visual effects including box-filter anti-aliasing, depth of field through focal planes, and motion blur via time-parameterized surface translations. Recursive reflection rays were also implemented to simulate mirror-like glossy surfaces.
*   **Optimization:** Built a Bounding Volume Hierarchy (BVH) data structure from the ground up. This spatial acceleration structure circumscribes primitives in AABBs, drastically reducing intersection test counts and rendering times for high-polygon meshes. Implemented surface instancing to allow geometry to be duplicated and transformed with low overhead.

![implicit_surface_example](/assets/img/threeToruses_cropped.jpg "example")

## Mini-Project 2: Implicit Surface Modeler

The second component focuses on procedural 3D modeling using implicit equations, representing shapes as continuous scalar distance fields.

*   **Primitive Generation & Isosurface Extraction:** Defined skeletal primitives, such as spheres, toruses, and line segments, mathematically via distance calculations. Utilized the Marching Cubes algorithm to sample these fields dynamically and extract renderable triangle meshes at varying grid resolutions.
*   **Surface Blending:** Engineered custom non-linear fall-off filter functions to modulate distance values. This allowed independent primitives to organically bulge and seamlessly blend into one another when placed in close proximity.
*   **Deformations & Constructive Solid Geometry (CSG):** Implemented mathematical spatial deformations to create twisted and tapered geometry. Added support for CSG operations, allowing surfaces to be combined via Boolean intersections and differences to punch holes or slice shapes.
*   **Smooth Shading:** Applied numerical differentiation to the scalar fields to estimate vertex normal vectors. This enabled smooth shading across the extracted polygon meshes and allowed for accurate spatial color blending between distinct primitives.

![mesh_example](/assets/img/scene9_cropped.jpg "example")

## Mini-Project 3: Mesh Manipulation & Processing

The final component is a geometry processing toolset designed to parse, traverse, and procedurally alter manifold triangle meshes.

*   **Data Structures & Adjacency:** Built a custom parser to load polygon geometry from `.ply` files. Stored the data using Rossignac's "corners" representation, computing topological adjacency (the "opposite" table) to allow for $O(1)$ traversal between neighboring faces and vertices.
*   **Mesh Subdivision:** Implemented the Butterfly and Loop subdivision algorithms to procedurally increase mesh resolution. These algorithms calculate new vertex positions based on surrounding topology while strictly maintaining counterclockwise winding orders.
*   **Mesh Smoothing:** Engineered Laplacian and Taubin smoothing algorithms. By calculating per-vertex normals and repositioning vertices based on local neighborhoods, these algorithms effectively eliminate high-frequency noise from the mesh while preserving overall geometric features.