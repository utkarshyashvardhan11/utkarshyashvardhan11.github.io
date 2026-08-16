// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "Selected academic coursework, independent research, and technical contributions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Research contributions and academic writings.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Facilitating academic excellence by guiding students through theoretical concepts and practical computational problem-solving.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-bayesian-estimation-of-differential-equations-seir-model",
          title: 'Bayesian Estimation of Differential Equations (SEIR Model)',
          description: "Demonstrating robust estimation of SEIR infectious disease model parameters and their uncertainties from noisy data using Bayesian inference in Julia.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-topbuck-jl",
          title: 'TopBuck.jl',
          description: "Julia implementation of topology optimization with linearized buckling criteria.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_project/";
            },},{id: "projects-topstress-jl",
          title: 'TopStress.jl',
          description: "Julia implementation of stress-based topology optimization.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12_project/";
            },},{id: "projects-bokeh-rendering-using-federated-learning",
          title: 'Bokeh Rendering using Federated Learning',
          description: "First-degree Thesis Project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/13_project/";
            },},{id: "projects-applied-network-science-amp-complex-graph-analytics",
          title: 'Applied Network Science &amp;amp; Complex Graph Analytics',
          description: "An exploration of complex network dynamics and applied graph theory, evaluating topological structure, community detection, and stochastic spreading across biological, social, and technological datasets.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/15_project/";
            },},{id: "projects-intelligent-agents-amp-environments-a-game-ai-showcase",
          title: 'Intelligent Agents &amp;amp; Environments- A Game AI Showcase',
          description: "A curated collection of Unity and C# mini-projects demonstrating practical implementations of core Game AI techniques, ranging from heuristic pathfinding and state-driven behavior to procedural terrain generation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/16_project/";
            },},{id: "projects-computer-graphics-amp-geometry-processing-suite",
          title: 'Computer Graphics &amp;amp; Geometry Processing Suite',
          description: "A comprehensive Java-based computer graphics and geometry processing suite featuring a Whitted-style ray tracer, an implicit surface modeler, and topological mesh manipulation algorithms.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/17_project/";
            },},{id: "projects-algorithmic-computer-animation-amp-physics-simulation",
          title: 'Algorithmic Computer Animation &amp;amp; Physics Simulation',
          description: "A comprehensive suite of physics-based simulation and character animation modules bridging theoretical mathematics with interactive graphics. This collection features custom numerical solvers, rigid body dynamics, inverse kinematics, and deep reinforcement learning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/18_project/";
            },},{id: "projects-applied-quantum-computing-algorithms-routing-and-error-correction",
          title: 'Applied Quantum Computing- Algorithms, Routing, and Error Correction',
          description: "An end-to-end showcase of quantum computing implementations, spanning fundamental circuit design, cryptographic protocols, hardware-aware qubit routing, and advanced error correction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/19_project/";
            },},{id: "projects-compiler-construction",
          title: 'Compiler Construction',
          description: "Developing a compiler for a custom language in C",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-foundations-of-quantum-hardware-a-multi-architecture-simulation-portfolio",
          title: 'Foundations of Quantum Hardware- A Multi-Architecture Simulation Portfolio',
          description: "A comprehensive suite of simulations exploring the physical dynamics, noise constraints, and logic gate synthesis across diverse quantum architectures, including superconducting circuits, trapped ions, neutral atoms, and linear optics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/20_project/";
            },},{id: "projects-cab-booking-system",
          title: 'Cab Booking System',
          description: "Developing cab booking system with basic functionalities in Java",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-air-traffic-control-system",
          title: 'Air Traffic Control System',
          description: "Designing and implementing Database system for air traffic control management",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-kaun-banega-crorepati",
          title: 'Kaun Banega Crorepati',
          description: "Developing a fun game in C",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-encoding-us-constitution",
          title: 'Encoding US Constitution',
          description: "Involves Encoding the US Constitution in Prolog",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-hooke-and-jeeves-method",
          title: 'Hooke and Jeeves Method',
          description: "MATLAB implementation of Hooke and Jeeves method for multidimensional search",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-codechef-leaderboard",
          title: 'Codechef Leaderboard',
          description: "Back-end implementation for development of a Leadership Board for keeping track of codechef ratings of various MLSA, BITS Pilani members.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-a-search-algorithm",
          title: 'A* Search Algorithm',
          description: "MATLAB implementation for A-star search algorithm",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-top3d-jl",
          title: 'Top3d.jl',
          description: "Julia implementation of 3D topology optimization.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-command-line-interface-amp-scripting",
          title: 'Command Line Interface &amp;amp; Scripting',
          description: "A hands-on course introducing students to Unix/Linux environments, focusing on system navigation, process management, and task automation through shell scripting.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/command_line_interface_and_scripting/";
            },},{id: "teachings-computer-programming",
          title: 'Computer Programming',
          description: "A foundational undergraduate course introducing students to algorithmic thinking, core problem-solving methodologies, and procedural programming principles.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/computer-programming/";
            },},{id: "teachings-data-structures-amp-algorithms",
          title: 'Data Structures &amp;amp; Algorithms',
          description: "A core theoretical and practical computer science course emphasizing the design, implementation, and rigorous asymptotic analysis of foundational data structures and algorithms.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data_structures_and_algorithms/";
            },},{id: "teachings-object-oriented-programming",
          title: 'Object Oriented Programming',
          description: "A core computer science course focused on software design principles, teaching students how to architect scalable and maintainable systems utilizing encapsulation, inheritance, polymorphism, and data abstraction.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/object-oriented-programming/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%75%79%61%73%68%76%61%72%64%68%61%6E%33.%67%61%74%65%63%68.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/https://www.linkedin.com/in/utkarshyashvardhan11/", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/utkarshyashvardhan11", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=jcejleEAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
