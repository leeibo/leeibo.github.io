---
permalink: /
title: ""
excerpt: "Yibo Li - embodied intelligence, vision-language-action models, robotic spatial reasoning, active perception, and memory."
lang: en
sidebar_description: "Embodied intelligence · VLA · Active perception"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<span class='anchor' id='about-me'></span>

I am **Yibo Li (李一博)**, a master's student in Software Engineering at **Beihang University**, advised by Prof. Lu Sheng. I currently work as an embodied AI algorithm intern at **AgiBot** and previously worked at the **Beijing Academy of Artificial Intelligence (BAAI)**.

My research interests include **embodied intelligence**, **vision-language-action (VLA) models**, **robotic spatial reasoning**, **active perception**, and **long-horizon manipulation**. I am particularly interested in how robots build and use visual memory to acquire information, reason in 3D space, and act reliably in real environments.

<div class="contact-block">
  <div class="contact-block__title">Contact</div>
  <div><strong>Email:</strong> <a href="mailto:leeibo@buaa.edu.cn">leeibo@buaa.edu.cn</a></div>
  <div><strong>GitHub:</strong> <a href="https://github.com/leeibo">github.com/leeibo</a></div>
  <div><strong>Google Scholar:</strong> <a href="https://scholar.google.com/citations?user=YIXaXcoAAAAJ&amp;hl=en">Profile</a></div>
  <div><strong>WeChat:</strong> <code>lyb371568753</code></div>
  <div><strong>Location:</strong> Beijing, China</div>
</div>

I am open to **research collaboration** on embodied intelligence, VLA models, active perception, and robot learning. Please feel free to reach out by email.

<span class='anchor' id='news'></span>

# News

- *2026.08*: &nbsp;Won **1st place in fully autonomous manipulation** at the 2nd World Humanoid Robot Games, hotel guest-service track.
- *2026.07*: &nbsp;Our work **RoboTracer** was accepted to **ECCV 2026**. See you in Sweden!
- *2026.06*: &nbsp;Joined **AgiBot** as an embodied AI algorithm intern, focusing on VLA training and real-robot deployment.
- *2026.01*: &nbsp;Released the **RoboBrain 2.5** technical report on depth-aware 3D spatial reasoning and temporal value estimation.
- *2025.06*: &nbsp;Joined **BAAI** as an embodied AI algorithm intern.

<span class='anchor' id='publications'></span>

# Publications & Reports

<div class='paper-box paper-box--text-only'>
<div class='paper-box-text' markdown="1">

[RoboBrain 2.5: Depth in Sight, Time in Mind](https://arxiv.org/abs/2601.14352)

Technical Report, arXiv:2601.14352 · 2026

- Contributed to data and model development for **depth-aware 3D spatial reasoning** and **dense temporal value estimation**, improving spatial and temporal modeling in embodied foundation models.
</div>
</div>

<div class='paper-box paper-box--text-only'>
<div class='paper-box-text' markdown="1">

**ActiveArena: Benchmarking and Understanding Active Perception in Robotic Manipulation**

**AAAI 2027 submission** · 2026 · First author

**Overview:** ActiveArena is a unified testbed for studying how robots actively acquire, maintain, and use information during manipulation. It introduces ActiveArena-Sim, 35 tasks across five categories, rich memory annotations, and ID/OOD protocols with disjoint scenes and unseen distractors.

**My contribution:** Proposed the benchmark and its evaluation protocol; built ActiveArena-Sim and ActiveArena-Bench; developed 13 VLA configurations to analyze memory writing, memory capacity, proprioception, subtask supervision, and high-level planning.
</div>
</div>

<div class='paper-box paper-box--text-only'>
<div class='paper-box-text' markdown="1">

**Learning Active Perception and Manipulation via Spatio-temporal Visual Memory**

**NeurIPS 2026 submission** · 2026 · Co-first author

**Overview:** ActiveZero formulates active perception as information-driven spatio-temporal memory management. A unified VLA model expands memory through exploration, retrieves relevant evidence for action, and filters memory online for efficient long-horizon interaction.

**My contribution:** Built the end-to-end active-perception VLA and its memory expansion, retrieval, and filtering mechanisms; contributed to ActiveMem and ActiveBench, including large-scale training data, VQA evaluation, and long-horizon simulated manipulation.
</div>
</div>

<div class='paper-box paper-box--text-only'>
<div class='paper-box-text' markdown="1">

[RoboTracer: Mastering Spatial Trace with Reasoning in Vision-Language Models for Robotics](https://zhoues.github.io/RoboTracer/)

**ECCV 2026** · 2025–2026 · Co-first author

**Overview:** RoboTracer is a 3D-aware vision-language model for spatial tracing, combining universal spatial encoding, metric-aware supervised fine-tuning, and metric-sensitive reinforcement fine-tuning. It introduces TraceSpatial, a 30M-pair dataset, and TraceSpatial-Bench for multi-step metric-grounded reasoning.

**My contribution:** Contributed to large-scale robot manipulation and spatial reasoning data construction and cleaning across **AgiBot**, DROID, and RoboTwin; designed the unified pipeline for trajectory extraction, spatial consistency checks, and anomaly filtering.
</div>
</div>

<span class='anchor' id='education'></span>

# Education

<div class="cv-item">
  <div class="cv-item__header"><div class="cv-item__title">Beihang University · School of Software</div><div class="cv-item__date">Sep. 2025 – Present</div></div>
  <div class="cv-item__meta">M.S. in Software Engineering · Advisor: Prof. Lu Sheng</div>
  <p>Research focus: embodied intelligence, VLA models, robotic spatial reasoning, active perception, and memory.</p>
</div>

<div class="cv-item">
  <div class="cv-item__header"><div class="cv-item__title">Beihang University · School of Software</div><div class="cv-item__date">Sep. 2020 – Jun. 2025</div></div>
  <div class="cv-item__meta">B.E. in Software Engineering</div>
</div>

<span class='anchor' id='experience'></span>

# Research & Industry Experience

<div class="cv-item" markdown="1">
<div class="cv-item__header"><div class="cv-item__title">AgiBot · Embodied AI Algorithm Intern</div><div class="cv-item__date">Jun. 2026 – Present</div></div>
<div class="cv-item__meta">Humanoid robotics · VLA · Real-robot deployment</div>

- Develop embodied policies for humanoid robots, covering VLA training, active perception, task planning, and long-horizon manipulation.
- Participate in visual perception, system integration, and real-world reliability validation for complex service tasks.
</div>

<div class="cv-item" markdown="1">
<div class="cv-item__header"><div class="cv-item__title">Beijing Academy of Artificial Intelligence (BAAI) · Embodied AI Algorithm Intern</div><div class="cv-item__date">Jun. 2025 – Jun. 2026</div></div>
<div class="cv-item__meta">RoboBrain 2.5 · RoboTracer · Active perception</div>

- Worked on 3D spatial reasoning, robot trajectory generation, spatial data construction, and embodied-model evaluation.
- Built data-processing pipelines, simulation benchmarks, and evaluation systems over real and simulated robot data.
</div>

<span class='anchor' id='honors'></span>

# Competition & Honors

- **2nd World Humanoid Robot Games · Hotel guest service (Aug. 2026):** 1st place in fully autonomous manipulation. Contributed to the team and to the deployment of long-horizon service tasks, including luggage handling, room restocking, and room organization.
- **National Undergraduate Mathematics Competition:** First Prize (2021, 2023).
- **National Undergraduate Physics Competition:** First Prize (2021, 2022).
- **National Physics Olympiad for Secondary School Students:** Provincial First Prize (36th competition).
- **Beihang University scholarships:** Competition Special Scholarship (2021–2022); First-class Academic Scholarship (2022–2025).
- **Outstanding Student:** Beihang University (2020–2021, 2023–2024).

<span class='anchor' id='skills'></span>

# Skills

<div class="skills-grid">
  <p><strong>Embodied AI</strong><br>VLA training, active perception, visual memory, spatial reasoning, long-horizon manipulation, and real-robot deployment.</p>
  <p><strong>Data & Evaluation</strong><br>Robot trajectory processing, dataset construction, benchmark design, simulation evaluation, and error analysis.</p>
  <p><strong>Engineering</strong><br>Python, PyTorch, C/C++, Java; distributed data pipelines and multimodal system integration.</p>
  <p><strong>Teaching & Service</strong><br>Teaching assistant for Linear Algebra, Data Structures, and Computer Vision; Deputy Minister of the Beihang Student Science Association Publicity Department.</p>
</div>
