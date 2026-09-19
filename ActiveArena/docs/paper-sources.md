# Paper assets and verified numbers

This page records the source files and numbers used by the public ActiveArena repositories and project website. It is intended to keep README and website copy synchronized with the AAAI submission.

## Source package

- Source archive: `AAAI_2027_Active_Perception.zip` (extracted during release preparation).
- Paper title in `modules/title-anonymous-submission.tex`: **ActiveArena: Benchmarking and Understanding Active Perception in Robotic Manipulation**.
- Main teaser: `Figures/active_perception_benchmark_rollout.pptx.pdf`.
- Benchmark/simulator overview: `Figures/dataset.pdf`.
- VLA suite diagram: `Figures/suite_framework.pdf`.
- Planner diagram: `Figures/planner.pdf`.
- Real-world rollouts: `Figures/real_rollout.pdf`.

The archive's `AnonymousSubmission2027.pdf` is the stock AAAI author-instructions template (its first page begins “AAAI Press Anonymous Submission”), not the ActiveArena manuscript. It must not be published as the paper download. Add `assets/paper.pdf` only after a verified ActiveArena manuscript PDF is available. The source author fields are also AAAI template text, so they do not establish the manuscript author list. The supplied material supports describing this work as an AAAI 2027 submission, not an accepted paper or published proceedings article.

## Extracted benchmark facts

| Item | Value | Source |
| --- | ---: | --- |
| ActiveArena-Sim visible-scene coverage | 3.3 sr vs. 0.52 sr (6.3×) | `chapters/common/01-introduction_v2.tex` |
| Workspace | approximately 180° multi-level sector | `chapters/common/03-Benchmark.tex` |
| Benchmark tasks | 35 | `chapters/common/03-Benchmark.tex` |
| Task families | Visual Search; Interactive Information Acquisition | `chapters/common/03-Benchmark.tex` |
| Task categories | SS (5), SL (16), ML (6), MD (5), IA (3) | `chapters/common/04-Exp.tex` and `chapters/common/05-ablation.tex` |
| Dataset overview counts | 94 subtasks, 56 objects, 123 diverse scenes | `Figures/dataset.pdf` (figure annotation) |
| Robot action vector | 18-D (two arms, two grippers, torso, head) | `chapters/common/03-Benchmark.tex` |
| VLA configurations | 13 | `chapters/common/04-Exp.tex` |
| Training trajectories | 100 ID trajectories/task | `chapters/common/04-Exp.tex` |
| Training data | 581.2k frames / 10.76 h video | `chapters/common/04-Exp.tex` |
| Evaluation seeds | 50 ID + 50 OOD per method/task | `chapters/common/04-Exp.tex` |
| Planner training memory reduction | 46% peak GPU memory | `chapters/common/05-ablation.tex` |
| State conditioning action continuity | 4.55° → 0.65° median target jump | `chapters/common/05-ablation.tex` |

The 13 configurations and training-data counts describe the paper's experiments. The current prepared release includes three OFT checkpoint bundles, collection/training/evaluation code, and fixed seed lists. Raw demonstrations and converted training datasets are not included in the two code repositories.

### Simulation success rates (%), task-macro average

Values are reported as `ID / OOD` in the simulation leaderboard (`chapters/common/04-Exp.tex`). Category scores average the tasks in that category; `Average` is the task-macro average across all 35 tasks, not an unweighted average of the five categories.

| Method | SS | SL | ML | MD | IA | Average |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| **ActiveArena-OFT** | 80.40 / 70.80 | 74.50 / 54.38 | 53.33 / 33.33 | 31.60 / 27.20 | 44.00 / 35.33 | **62.97 / 47.60** |
| ActiveArena-Plan | 79.20 / 69.60 | 73.38 / 52.63 | 49.67 / 30.00 | 28.00 / 24.80 | 42.00 / 33.33 | 60.97 / 45.54 |
| MemER | 81.20 / 66.00 | 33.88 / 18.63 | 18.33 / 5.67 | 11.60 / 6.40 | 40.00 / 42.00 | 35.31 / 23.43 |
| MemoryVLA | 46.00 / 34.40 | 20.88 / 6.50 | 14.00 / 2.00 | 9.20 / 4.40 | 28.00 / 27.33 | 22.23 / 11.20 |
| HiF-VLA | 16.80 / 14.00 | 6.88 / 1.13 | 0.00 / 0.00 | 17.60 / 17.20 | 30.67 / 18.67 | 10.69 / 6.57 |
| SaPaVe | 48.80 / 40.80 | 19.88 / 5.88 | 10.67 / 3.00 | 6.00 / 2.80 | 25.33 / 12.67 | 20.91 / 10.51 |
| π₀.₅ | 41.20 / 5.60 | 22.38 / 0.63 | 1.67 / 0.00 | 1.60 / 1.20 | 2.67 / 5.33 | 16.86 / 1.71 |
| FAST-WAM | 59.60 / 4.00 | 40.38 / 1.00 | 25.67 / 0.00 | 22.40 / 5.20 | 12.00 / 3.33 | 35.60 / 2.06 |

ActiveArena-Fixed (fixed viewpoint ablation) reports 0.59 / 0.18 average ID/OOD.

The strongest VLA configuration reported in the paper is the chunk-write, 12-frame ActiveArena-OFT variant. In the ablation table it reaches 62.97 / 47.60 average; the planner-mediated sparse-memory variant reaches 60.97 / 45.54. These are manuscript-reported results, not a fresh evaluation of the prepared checkpoint bundles.

## Asset mapping

- `ActiveArena/docs/images/teaser.png` and `ActiveArena-VLA/docs/images/teaser.png`: rendered from `Figures/active_perception_benchmark_rollout.pptx.pdf`.
- `ActiveArena/docs/images/benchmark.png`: rendered from `Figures/dataset.pdf`.
- `ActiveArena-VLA/docs/images/framework.png`: rendered from `Figures/suite_framework.pdf`.
- `ActiveArena-website/assets/images/{teaser,benchmark,framework,planner}.webp`: web-optimized renders of the same four figures.
- `ActiveArena-website/assets/figures/*.pdf`: original vector PDFs retained for provenance.

All raster renders use PyMuPDF at 3× (4× for the small planner figure); website WebP files use quality 92. If the website adds a paper download, point it to the verified manuscript rather than the anonymous AAAI template described above.
