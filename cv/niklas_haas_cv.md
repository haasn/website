# NIKLAS HAAS

**Staff Software Engineer --- Performance Optimization & GPU Computing**

📧 jobs@niklashaas.de | 🌐 [niklashaas.de](https://niklashaas.de) | 💻 [github.com/haasn](https://github.com/haasn) | 💼 [LinkedIn](https://www.linkedin.com/in/niklas-haas-238761297/)

---

## Professional Summary

Independent IT consultant with nearly 20 years of programming experience, specializing in high-performance computing, GPU algorithms, and low-level CPU optimization. Recognized expert in multimedia processing and color management with extensive contributions to industry-leading open source projects. Member of FFmpeg and VideoLAN technical committees. Seeking opportunities to apply deep technical expertise in performance optimization and algorithmic development to challenging problems in fintech and AI.

---

## Core Competencies

- **Low-Level CPU Optimization:** SIMD programming (x86 SSE/AVX2/AVX512, ARM NEON, RISC-V Vectors), assembly optimization, performance profiling and tuning, cache optimization

- **GPU Computing:** Vulkan compute shaders, GPGPU algorithm design, GPU pipeline optimization, OpenGL/GLSL, parallel processing architectures

- **Language Theory & Compilers:** Type systems, functional programming (Haskell, ML), dependent types, compiler design, JIT compilation, runtime code generation

- **Systems Programming:** C/C++, kernel drivers, memory management, concurrency, lock-free data structures

- **Performance Engineering:** Profiling, benchmarking, algorithmic complexity analysis, micro-optimizations, cache-aware programming

---

## Professional Experience

### Independent Consultant
*January 2024 --- Present | Self-employed*

- Providing specialized consulting services to various clients, focusing on performance optimization and development of new features
- Developed novel SIMD-based pixel format conversion system for FFmpeg's libswscale, achieving dramatic performance improvements through runtime compilation and assembly of custom domain-specific AST
- Performed in-depth performance analysis and optimization of large-scale codebases, identifying and resolving bottlenecks across CPU and GPU workloads
- Delivered comprehensive code reviews and technical audits for performance-critical systems

### Senior Software Engineer
*2021 --- July 2025 | FFlabs · Remote*

- Project leader, chief developer and maintainer for libplacebo: created cross-platform GPU-accelerated library featuring advanced compute shader algorithms for real-time image processing, now integrated into VLC, mpv, and FFmpeg
- Core developer for FFmpeg: architectural improvements, format negotiation optimization, first open-source implementations of ITU-R H.274, AFGS1, SMPTE RDD5, MV-HEVC
- Contributed to Mesa/Vulkan/amdgpu ecosystem: GPU driver optimizations and Vulkan implementation enhancements
- Optimized critical multimedia processing routines achieving 2-10x speedups through SIMD vectorization (AVX2/AVX512/NEON/RVV)
- Led architectural design and implementation of high-performance color management systems supporting HDR workflows

### Software Engineer
*2018 --- 2021 | Videolabs · Remote*

- Project leader for development and integration of libplacebo into VLC media player
- Designed and implemented GPU-accelerated image processing pipelines using Vulkan compute shaders for real-time video processing
- Integrated Vulkan rendering pipeline into VLC, enabling HDR and Dolby Vision support
- Developed advanced tone-mapping algorithms and color space transformation systems

### Software Engineer
*2018 | Pebbles Digital Media · Contract · Remote*

- Vulkan development and GPU optimization for multimedia applications
- libmpv integration and performance enhancements

### System Administrator
*2015 --- 2018 | Ulm University · Part-time · On-site*

- Administration of Linux servers and user-facing systems for the computer science faculty
- Managed infrastructure, security, and performance of critical university systems
- Provided technical support and troubleshooting for faculty and students

---

## Key Technical Projects

### libswscale Reimplementation (Sovereign Tech Fund)
*2024*

Complete refactor of FFmpeg's pixel format conversion library. Developed innovative approach combining SIMD fragments at runtime to generate optimized conversion routines, dramatically reducing code complexity while improving performance across all supported formats. Utilized advanced compiler techniques including continuation passing style for code generation.

### libplacebo --- GPU Processing Library
*2017 --- Present*

Designed and implemented comprehensive GPU computing framework using Vulkan for real-time image processing. Features include: dynamic tone mapping with on-the-fly frame analysis, GPU film grain synthesis, high-quality scaling algorithms, and complete HDR color management pipeline. Requires deep understanding of GPU architecture, parallel algorithms, and shader optimization.

### GPU-based AV1 Decoder Prototype (dav1d)
*2019*

Experimental implementation of video decoder using Vulkan compute shaders, exploring feasibility of fully GPU-based video decoding. Demonstrates expertise in algorithm parallelization and GPU performance optimization.

---

## Technical Skills

**Languages:** C/C++ (expert), Assembly (x86/ARM/RISC-V), GLSL/HLSL, Python, Haskell, Lua, Go, JavaScript, C#, Prolog

**Performance:** SIMD (SSE, AVX2, AVX512, NEON, RVV), Profiling Tools (perf, VTune, Instruments), Cache Optimization, Branch Prediction

**GPU:** Vulkan, OpenGL, CUDA concepts, Compute Shaders, Pipeline Optimization, Memory Hierarchy Management

**Systems:** Linux Kernel, Driver Development, Threading/Concurrency, Memory Management, Build Systems

**Algorithms:** Signal Processing, Computer Vision, Machine Learning/AI, Codec Design, Numerical Methods

**Tools:** Git, GDB, LLDB, Compiler Internals (GCC/Clang), CMake, Meson, Docker

---

## Selected Publications & Conference Talks

**libswscale reimagined**
*VideoLAN Dev Days 2025*, November 2025
Detailed presentation on novel SIMD code generation approach, combining assembly fragments using continuation passing style for runtime optimization. Demonstrates advanced understanding of compiler design and performance engineering.

**Faster (and better) GPU (down)scaling**
*VideoLAN Dev Days 2023*, September 2023
Technical talk on leveraging GPU texture sampling for efficient convolution computation on positive kernels. Covers signal reconstruction theory and GPU architecture optimization.

**HDR tone-mapping in VLC/libplacebo**
*VideoLAN Dev Days 2018*, September 2018
Presentation on dynamic tone-mapping algorithm design and implementation for real-time video processing.

**State of the Art in Cryptocurrency Network Simulation**
*Bachelor's Thesis, Ulm University*, August 2017
Comparative analysis of Bitcoin network simulators, including detailed performance benchmarks and architectural evaluations. Demonstrates analytical skills and understanding of distributed systems.

**Random Linear Network Coding: Use cases and Implementations**
*Ulm University*, June 2016
Research on network coding algorithms, implementations, and applications in distributed systems.

---

## Education

**Bachelor of Science in Computer Science**
Ulm University, Germany | 2014 --- 2017
*Graduated with highest honors (Sehr Gut)*

**Abitur (German University Entrance Qualification)**
*Awarded for exceptional academic performance*

---

## Additional Information

- **Languages:** German (native), English (native, bilingual upbringing), Norwegian (B2)
- **Open Source:** Active contributor with 15+ years in open source community, maintainer of multiple widely-used projects
- **Location:** Currently based in Germany, open to relocation (Dublin, Zurich)
- **Work Authorization:** EU citizen (German)
