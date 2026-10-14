# Forecasting Eruptions at Steamboat Geyser: Time Scales, Differentiability, and Detectability of Seismic Precursors Through Data‐Driven Methods

- **Authors:** Alberto Ardid (ORCID 0000-0001-8040-8193); Anna Barth; David Dempsey (ORCID 0000-0003-2135-5129); Michael Manga (ORCID 0000-0003-3286-4682); Shane J. Cronin (ORCID 0000-0001-7499-603X)
- **Journal:** Journal of Geophysical Research: Machine Learning and Computation, vol. 2(2), article e2024JH000569 (2025)
- **Publisher:** American Geophysical Union (AGU)
- **DOI (version of record):** [https://doi.org/10.1029/2024jh000569](https://doi.org/10.1029/2024jh000569)
- **This page:** https://ddempsey.github.io/papers/2025-ardid-forecasting-eruptions-steamboat-geyser-time/
- **Open PDF:** [https://ddempsey.github.io/papers/2025-ardid-forecasting-eruptions-steamboat-geyser-time/ardid2025-forecasting-eruptions-steamboat.pdf](https://ddempsey.github.io/papers/2025-ardid-forecasting-eruptions-steamboat-geyser-time/ardid2025-forecasting-eruptions-steamboat.pdf) (Published version)
- **Full text (Markdown):** [https://ddempsey.github.io/papers/2025-ardid-forecasting-eruptions-steamboat-geyser-time/fulltext.md](https://ddempsey.github.io/papers/2025-ardid-forecasting-eruptions-steamboat-geyser-time/fulltext.md)
- **Notice:** Published version, reproduced under the CC BY-NC-ND 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1029/2024jh000569
- **BibTeX:** https://ddempsey.github.io/papers/2025-ardid-forecasting-eruptions-steamboat-geyser-time/citation.bib
- **Topics:** Volcanoes & eruption forecasting; Induced seismicity & faults
- **Keywords:** Seismology; Geology; Differentiable function

## Abstract

Geyser eruptions provide a test bed for using geophysical data to forecast eruptions and to understand heat and mass transport in hydrothermal systems. We used time series analyses of seismic data at Steamboat Geyser, Yellowstone National Park, to identify short‐term precursors that are recurrent, detectable in real time, distinctly identifiable, as well as being rare during non‐eruptive periods. We analyzed seismic data from March to December 2018 to identify patterns that occurred before 31 eruptions. Four seismic amplitude measures and 700 time‐series features were computed from the seismic data. A template matching analysis identified an optimal 18‐hr window for detecting precursors. We applied a random forest to classify pre‐eruptive and non‐eruptive data for out‐of‐sample eruptions (eruptions that were not included in the model's training data), showing ability to distinguish between the two. This model performed better than a simpler amplitude‐based approach. Seismic features with the most predictive power include autocorrelations, longest strike above the mean, and change quantiles, particularly within the 4.5–16 Hz frequency range. We applied isotonic regression, a method that converts raw model outputs into calibrated probabilities, to improve the interpretability of eruption forecasting outputs. The likelihood of an eruption reaches 12.6% within 18 hr prior to the event, representing a marginal increase over the static 8% probability derived solely from eruption intervals. Unlike the interval‐based approach, our model does not rely on the time since the last eruption, instead using real‐time seismic features to detect precursory signals. Our study advances Machine Learning methodologies in eruption forecasting by integrating calibrated probability estimation through isotonic regression, which has advantages over traditional approaches for geysers with highly irregular eruption intervals.

## Cite

Ardid, Alberto, Barth, Anna, Dempsey, David, Manga, Michael, Cronin, Shane J. (2025). Forecasting Eruptions at Steamboat Geyser: Time Scales, Differentiability, and Detectability of Seismic Precursors Through Data‐Driven Methods. Journal of Geophysical Research: Machine Learning and Computation, 2(2), e2024JH000569. https://doi.org/10.1029/2024jh000569

```bibtex
@article{ardid2025forecasting,
  title = {Forecasting Eruptions at Steamboat Geyser: Time Scales, Differentiability, and Detectability of Seismic Precursors Through Data‐Driven Methods},
  author = {Ardid, Alberto and Barth, Anna and Dempsey, David and Manga, Michael and Cronin, Shane J.},
  journal = {Journal of Geophysical Research: Machine Learning and Computation},
  year = {2025},
  volume = {2},
  number = {2},
  pages = {e2024JH000569},
  publisher = {American Geophysical Union (AGU)},
  doi = {10.1029/2024jh000569},
  url = {https://ddempsey.github.io/papers/2025-ardid-forecasting-eruptions-steamboat-geyser-time/}
}
```