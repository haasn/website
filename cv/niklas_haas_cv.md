# NIKLAS HAAS

**Staff Software Engineer --- Performance Optimization & GPU Computing**

📧 jobs@niklashaas.de | 🌐 [niklashaas.de](https://niklashaas.de) | 💻 [github.com/haasn](https://github.com/haasn)

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

### Independent IT Consultant
*2017 --- Present | Germany*

- Developed novel SIMD-based pixel format conversion system for FFmpeg's libswscale, achieving dramatic performance improvements through runtime assembly of optimized code fragments using continuation passing style
- Designed and implemented GPU-accelerated image processing pipelines using Vulkan compute shaders for real-time video processing
- Optimized critical multimedia processing routines achieving 2-10x speedups through SIMD vectorization (AVX2/AVX512/NEON/RVV)
- Led architectural design and implementation of high-performance color management systems supporting HDR workflows
- Performed in-depth performance analysis and optimization of large-scale codebases, identifying and resolving bottlenecks across CPU and GPU workloads
- Delivered comprehensive code reviews and technical audits for performance-critical systems

### Open Source Maintainer & Core Developer
*2014 --- Present | FFmpeg, VideoLAN, libplacebo*

- **libplacebo** (Author & Maintainer): Created cross-platform GPU-accelerated library featuring advanced compute shader algorithms for real-time image processing, now integrated into VLC, mpv, and FFmpeg
- **FFmpeg** (Technical Committee): Architectural improvements, format negotiation optimization, first open-source implementations of ITU-R H.274, AFGS1, SMPTE RDD5, MV-HEVC
- **checkasm** (Maintainer): Overhauled SIMD verification and benchmarking framework, enabling cycle-accurate performance metrics for large-scale projects
- **dav1d**: Developed experimental GPU-based Vulkan decoder using compute shaders, implemented RISC-V SIMD routines
- **VLC** (Technical Committee): Integrated Vulkan rendering pipeline, enabled HDR and Dolby Vision support

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

---

## Additional Information

- **Languages:** German (native), English (fluent)
- **Open Source:** Active contributor with 15+ years in open source community, maintainer of multiple widely-used projects
- **Location:** Currently based in Germany, open to relocation (Dublin, Zurich)
- **Work Authorization:** EU citizen (German)
