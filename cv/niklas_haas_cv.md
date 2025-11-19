# NIKLAS HAAS

**Staff Software Engineer (L6) --- Performance Optimization & GPU Computing**

📧 jobs@niklashaas.de | 🌐 [niklashaas.de](https://niklashaas.de) | 💻 [github.com/haasn](https://github.com/haasn) | 💼 [LinkedIn](https://www.linkedin.com/in/niklas-haas-238761297/)

---

## Professional Summary

Software engineer with nearly 20 years of programming experience, specializing in performance optimization for data-intensive systems. Technical committee member for FFmpeg (~50 active developers, used by 2600+ companies including Meta, Google, Netflix, and Spotify) and VideoLAN (VLC media player: 5+ billion downloads). Led development of widely-adopted open-source projects and contributed novel algorithms to challenging technical problems. Expert in low-level optimization, GPU computing, and high-performance systems.

---

## Core Competencies

- **Low-Level Optimization:** SIMD programming (x86 SSE/AVX2/AVX512, ARM NEON, RISC-V Vectors), assembly language, performance profiling, cache optimization

- **GPU Computing:** Vulkan compute shaders, GPU pipeline optimization, OpenGL/GLSL, parallel algorithm design

- **Compilers & Code Generation:** Runtime compilation, JIT optimization, domain-specific code generators

- **Systems Programming:** C/C++, memory management, concurrency, lock-free algorithms

- **Performance Engineering:** Profiling, benchmarking, algorithm optimization

---

## Professional Experience

### Independent Consultant
*January 2024 --- Present | Self-employed*

- Provided specialized consulting on performance optimization and feature development for multimedia infrastructure
- Led complete rewrite of FFmpeg's pixel format conversion system (libswscale), achieving 4-5x average speedup through novel runtime code generation approach
- Redesigned benchmarking and verification tools used across multiple open-source projects, reducing benchmark runtime by 10x while improving statistical reliability

### Senior Software Engineer
*2021 --- July 2025 | FFlabs SAS · Remote*

- Core developer for FFmpeg (used by 2600+ companies, powers multimedia infrastructure at Meta, Google, Netflix, Spotify, and Twitch)
- Implemented major architectural improvements to core processing pipeline, enabling support for advanced video formats
- Authored first open-source implementations of multiple industry-standard video technologies including Dolby Vision and MV-HEVC
- Developed novel algorithms for real-time HDR tone-mapping and psychovisual color processing
- Solved complex concurrency and race condition bugs affecting production systems

### Software Engineer
*2018 --- 2021 | Videolabs SAS · Remote*

- Created and maintain libplacebo (3200+ commits, ~50 community contributors), integrated into VLC (5+ billion downloads), mpv, and FFmpeg
- Designed and implemented GPU-accelerated real-time video processing pipeline using Vulkan compute shaders
- Contributed GPU driver fixes and performance improvements to Mesa/Vulkan ecosystem
- Integrated Vulkan rendering into VLC media player, enabling HDR and Dolby Vision playback

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

### libplacebo -- Creator & Maintainer
*2017 --- Present*

Created and maintain cross-platform GPU computing framework for real-time image processing (Vulkan / OpenGL / Direct3D). Primary author with 3200+ commits, managing contributions from ~50 community developers. Built dynamic rendering pipeline with novel tone-mapping algorithms and high-quality scaling. Adopted by VLC (5+ billion downloads), FFmpeg, mpv, and other major media players.

### libswscale -- Project Leader
*2024 --- 2025*

Complete rewrite of FFmpeg's pixel format conversion library. Developed runtime code generation system that combines SIMD primitives to build optimized conversion routines on-demand, achieving 4-5x average speedup across all formats while reducing code complexity. System uses custom compiler techniques including template metaprogramming and runtime optimization.

### checkasm -- Project Leader
*2025 --- Present*

Complete refactor of widely-used SIMD verification and benchmarking tool (350+ GitHub references, 10+ downstream projects). Redesigned codebase for portability and thread safety, enabling reuse across multiple projects. Rewrote statistical evaluation and benchmarking system, reducing benchmark runtime by 10x while improving data quality and visualization.

### dav1d --- Developer
*2018 --- 2024*

Contributed to AV1 video decoder project, including experimental GPU-accelerated decoding using Vulkan compute shaders. Implemented RISC-V assembly optimizations for key DSP functions using vector extensions. Developed CPU and GPU film grain synthesis algorithms.

---

## Technical Skills

**Languages:** C (expert), Assembly (x86/ARM/RISC-V), GLSL/HLSL, Haskell, Python, Lua, Go, C++

**GPU & Parallel Computing:** Vulkan, OpenGL, Compute Shaders, GPU Architecture, Pipeline Optimization

**Performance Optimization:** SIMD (SSE, AVX2, AVX512, NEON, RVV), Profiling (perf, GPU profilers), Cache Optimization

**Systems:** Linux, Threading/Concurrency, Memory Management, GPU Drivers (Mesa)

**Domains:** Real-time Processing, Signal Processing, Algorithm Design, Codec Development

**Tools:** Git, GDB, GCC/LLVM, Meson, Docker

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
- **Fun fact:** My code is running on Mars (via the Perseverence rover)
