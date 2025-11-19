# NIKLAS HAAS

**Staff Software Engineer (L6) --- Performance Optimization & GPU Computing**

📧 jobs@niklashaas.de | 🌐 [niklashaas.de](https://niklashaas.de) | 💻 [github.com/haasn](https://github.com/haasn) | 💼 [LinkedIn](https://www.linkedin.com/in/niklas-haas-238761297/)

---

## Professional Summary

Open-source developer with nearly 20 years of active programming experience, specializing in high-performance data processing, GPU algorithms, and low-level CPU optimization. Recognized expert in multimedia processing and color management, with an extensive history of contributions to industry-leading open source projects. Maintainer of multiple widely used software projects, as well as a member of the FFmpeg and VideoLAN technical committees. Seeking opportunities to apply my deep technical expertise to challenging problems in emerging fields.

---

## Core Competencies

- **Low-Level Optimization:** SIMD programming (x86 SSE/AVX2/AVX512, ARM NEON, RISC-V Vectors), assembly optimization, performance profiling and tuning, cache optimization

- **GPU Computing:** Vulkan compute shaders, GPGPU algorithm design, GPU pipeline optimization, OpenGL/GLSL, parallel processing architectures

- **Language Theory & Compilers:** Type systems, functional programming, compiler design, JIT compilation, runtime code generation

- **Systems Programming:** C/C++, kernel drivers, memory management, concurrency, lock-free data structures, software transactional memory

- **Performance Engineering:** Profiling, benchmarking, algorithmic complexity analysis, cache-oblivious data structures

---

## Professional Experience

### Independent Consultant
*January 2024 --- Present | Self-employed*

- Provided specialized consulting services to various clients, focusing on performance optimization, bug fixing and development of new features
- Developed novel SIMD-based pixel format conversion system for FFmpeg's libswscale, achieving dramatic performance improvements through runtime compilation and assembly of custom domain-specific AST
- Rewrote low-level benchmarking and assembly verification tools used in various open-source projects

### Senior Software Engineer
*2021 --- July 2025 | FFlabs SAS · Remote*

- Core developer for FFmpeg, focusing on many architectural improvements including extended format negotiation
- Solved difficult, long-standing bugs involving concurrency issues and race conditions
- Authored world's first open-source implementations of Dolby Vision, ITU-R H.274, AFGS1, SMPTE RDD5 and MV-HEVC
- Developed and refined novel approach to HDR tone-mapping, based on real-time frame analysis and application of advanced psychovisual colorimetric models

### Software Engineer
*2018 --- 2021 | Videolabs SAS · Remote*

- Project leader and chief developer of libplacebo, as well as integration into VLC media player, mpv and FFmpeg
- Designed and implemented GPU-accelerated image processing pipeline using Vulkan compute shaders for real-time video processing
- Contributed to Mesa/Vulkan/amdgpu ecosystem to deliver GPU driver fixes and Vulkan implementation enhancements
- Integrated Vulkan rendering subsystem into VLC, enabling HDR and Dolby Vision support

### Software Engineer
*2018 | Pebbles Digital Media · Contract · Remote*

- Developed a Vulkan backend for use in multimedia applications
- Integrated libmpv for seamless video playback and control

### System Administrator
*2015 --- 2018 | Ulm University · Part-time · On-site*

- Administration of Linux servers and user-facing systems for the computer science faculty
- Managed infrastructure, security, and performance of critical university systems
- Provided technical support and troubleshooting for faculty and students

---

## Key Technical Projects

### libplacebo -- Project Leader
*2017 --- Present*

Designed and implemented comprehensive cross-platform GPU computing framework using Vulkan / OpenGL / Direct3D for real-time image processing. Features include: fully dynamic rendering pipeline, GPU film grain synthesis, high-quality scaling algorithms, and completely novel real-time tone mapping algorithm. Active and ongoing maintainership role. Used in VLC, FFmpeg, mpv, and more.

### libswscale -- Project Leader
*2024 --- 2025*

Complete rewrite of FFmpeg's pixel format conversion code. Developed innovative approach combining SIMD fragments at runtime to generate optimized conversion routines, dramatically reducing code complexity while improving performance across all supported formats. Utilized advanced compiler techniques, including heavily templated SIMD, custom ABIs, continuation passing style and peephole optimization for code generation.

### checkasm -- Project Leader
*2025 --- Present*

Complete refactor of the popular 'checkasm' tool, used for verifying correctness of SIMD functions, as well as added a powerful benchmarking framework. Cleaned up the codebase to make it fully portable, thread-safe and reusable across projects. Major overhaul of the benchmarking and statistical evaluation subsystems to vastly improve the quality and display of performance data, and reduce runtime by over an order of magnitude.

### dav1d --- Developer
*2018 --- 2024*

Experimental implementation of AV1 video decoder using Vulkan compute shaders, exploring feasibility of fully GPU-based video decoding. Rewrote several key DSP functions in RISC-V assembly, using RVV instructions. Implemented CPU and GPU film grain synthesis algorithm.

---

## Technical Skills

**Languages:** C (expert), Assembly (x86/ARM/RISC-V), GLSL/HLSL, Haskell (expert), Python, Lua, Go, JavaScript, C#, Prolog

**GPU:** Vulkan, OpenGL, RDNA architecture, Compute Shaders, Pipeline Optimization, Memory Hierarchy Management

**Performance:** SIMD (SSE, AVX2, AVX512, NEON, RVV), Profiling Tools (perf, Radeon GPU Profiler, checkasm)

**Systems:** Linux, Mesa (RADV), Threading/Concurrency, Memory Management, Cache Optimization

**Algorithms:** Signal Processing, Computer Vision, Machine Learning/AI, Codec Design, Numerical Methods

**Tools:** Git, GDB, Toolchains (GCC/LLVM), Meson, Docker

---

## Education

**Bachelor of Science in Computer Science**
Ulm University, Germany | 2014 --- 2019
*Graduated with highest honors*

---

## Honors & Awards

- **Landessieger Mathematik & Informatik** (State Winner), Jugend Forscht Baden-Württemberg | 2013

---

## Additional Information

- **Languages:** German (native), English (native), Norwegian (B2)
- **Location:** Currently based in Germany, open to relocation (e.g. Dublin, Zurich, Munich)
- **Work Authorization:** EU citizen (German)
