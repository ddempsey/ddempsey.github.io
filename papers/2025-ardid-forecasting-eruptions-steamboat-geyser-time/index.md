# Forecasting Eruptions at Steamboat Geyser: Time Scales, Differentiability, and Detectability of Seismic Precursors Through Data‐Driven Methods

- **Authors:** Alberto Ardid (ORCID 0000-0001-8040-8193); Anna Barth; David Dempsey (ORCID 0000-0003-2135-5129); Michael Manga (ORCID 0000-0003-3286-4682); Shane J. Cronin (ORCID 0000-0001-7499-603X)
- **Journal:** Journal of Geophysical Research: Machine Learning and Computation, vol. 2(2), article e2024JH000569 (2025)
- **Publisher:** American Geophysical Union (AGU)
- **DOI (version of record):** [https://doi.org/10.1029/2024jh000569](https://doi.org/10.1029/2024jh000569)
- **This page:** https://ddempsey.github.io/papers/2025-ardid-forecasting-eruptions-steamboat-geyser-time/
- **Open PDF:** [https://ddempsey.github.io/papers/2025-ardid-forecasting-eruptions-steamboat-geyser-time/ardid2025-forecasting-eruptions-steamboat.pdf](https://ddempsey.github.io/papers/2025-ardid-forecasting-eruptions-steamboat-geyser-time/ardid2025-forecasting-eruptions-steamboat.pdf) (Published version)
- **Full text (Markdown):** [https://ddempsey.github.io/papers/2025-ardid-forecasting-eruptions-steamboat-geyser-time/fulltext.md](https://ddempsey.github.io/papers/2025-ardid-forecasting-eruptions-steamboat-geyser-time/fulltext.md)
- **Notice:** Published version, reproduced under the CC BY-NC-ND 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1029/2024jh000569
- **Explainer:** all explainers on this site are AI-generated.
- **BibTeX:** https://ddempsey.github.io/papers/2025-ardid-forecasting-eruptions-steamboat-geyser-time/citation.bib
- **Topics:** Volcanoes & eruption forecasting; Induced seismicity & faults
- **Keywords:** Seismology; Geology; Differentiable function

## In brief

A machine learning model trained on signals in the 2018 seismic record of Steamboat Geyser showed a fair ability to separate pre-eruption periods from other times in later data. Its eruption probability peaked at 12.6% within 18 hours of an eruption, compared with 8.1% from eruption intervals alone.

- Precursors at Steamboat Geyser were most distinct over an 18-hour window, and windows of 6 to 24 hours also separated pre-eruption periods from other times.
- On 13 eruptions withheld from training, the model scored an AUC of 0.88, where 0.5 is chance and 1 is perfect.
- Models using seismic amplitude alone did not perform as well as the model built on statistical features of the signal.
- The calibrated probability of an eruption peaked at 12.6% within 18 hours, a marginal increase over a fixed 8.1% from eruption intervals.
- Performance improved as eruptions were added to training and stabilised at around 9 training eruptions.

## The problem

At 10 a.m. on 23 July 2024, a hydrothermal explosion in Biscuit Basin,
Yellowstone National Park, threw boiling water, mud and rock into the air. It
damaged boardwalks, and dozens of tourists ran for safety (USGS, 2024).
Forecasts with a certain degree of accuracy can let park authorities restrict
access to vulnerable areas when an eruption is imminent (Erfurt-Cooper, 2018).

Steamboat Geyser, also in Yellowstone, is the tallest active geyser in the
world, with eruptions that can exceed 100 m (Bryan, 2018). Its activity is
irregular, with intense eruptive phases separated by long dormant intervals
(Bryan, 2018; White, 1967). Forecasts based on the time between eruptions, or
on thresholds in the strength of ground shaking, may be less suited to sudden
changes below ground (Hurwitz, King, et al., 2021; Reed et al., 2024). Our
goal in this study was to find precursors in the seismic record of Steamboat
and to test whether they can forecast its eruptions.

## What we did

We used one seismometer, 340 m from the geyser, between March and December
2018, a period with 31 eruptions. We reduced the ground motion to four
measures of shaking strength, each averaged over 1 minute: three frequency
bands between 2 and 16 Hz (hertz, or cycles per second) and a ratio of two of
them. From each measure we calculated 700 statistical features over 24-hour
windows.

Template matching then tested how long before an eruption the precursors
appear. A template is the stretch of a feature that ends at one eruption. For
each of about 600,000 templates, from 1.5 to 48 hours long, we tested whether
its match with the data before other eruptions differed from its match at
other times.

Next, we trained a random forest to recognise the 18 hours before an eruption,
using data up to mid-September (18 eruptions). The 13 later eruptions were
withheld for testing. Because non-eruptive data outnumber pre-eruption data by
up to 400 to 1, each of 100 decision trees was trained on a different random
sample of the non-eruptive data. The fraction of trees that forecast an
eruption is the consensus, an uncalibrated score between 0 and 1. Isotonic
regression converted it into a calibrated probability of an eruption in the
next 18 hours. We scored the forecasts by their AUC, where 0.5 is no better
than chance and 1 is perfect.

## What we found

We found that the 18-hour template window best separated pre-eruption periods
from other times, although windows from 6 to 24 hours did so only slightly
less well. The medium frequency band (4.5 to 8 Hz) appeared most often among
the 5% of templates that best separated pre-eruption data.

Over the test period, the consensus was usually close to 0.4, with spikes to
about 0.8 that often occurred within one to two days of an eruption. The model
scored an AUC of 0.88. This indicates a fair ability to separate pre-eruption
periods from other times. None of the models built on seismic amplitude alone
performed as well as the random forest.

With 1 to 20 training eruptions, the AUC improved as eruptions were added and
stabilised at around 9 training eruptions. A model trained on one eruption
gave some predictive power, although with high uncertainty.

Among the features that rose before eruptions was autocorrelation, at lags of
3 and 7 minutes. Whether these lags reflect a physical process needs further
analysis. Another was the longest stretch of shaking above its average, which
lasted 2 hours before one eruption and 45 minutes before another. Its peaks
could reflect extended pressure build-up or accumulation of gas bubbles (Kedar
et al., 1996; Rudolph et al., 2012).

The calibrated probability peaked at 12.6% within 18 hours of an eruption,
from a background of 7%. This is a marginal increase over the 8.1% given by a
fixed model that divides 18 hours by the average interval between eruptions.
Our model uses no information about the time since the last eruption. Smoothed
over time, the probability rose before the eruptions of 15 October, 31 October
and 15 November. Both the smoothed and the calibrated probability remained low
before the eruption of 21 November.

A second interval model, based on a Fréchet distribution, raises the
probability up to 18% as time passes since the last eruption. It worked well
in 2018, when eruption intervals were quite regular. It gave about 10% at the
31 October eruption and about 4% at the mid-October eruption. Its predictive
power would likely diminish if intervals became more irregular, as in periods
after 2021 (Reed et al., 2024).

<div class="widget" id="w-geyser-prob" role="group" aria-label="Bar chart comparing 18-hour eruption probabilities at Steamboat Geyser from the machine learning model and two interval-based models, from the paper's Results and Discussion"></div>

As odds, a peak of 12.6% is roughly 1 in 8, against roughly 1 in 12 for the
fixed 8.1%.

## Limitations

The timescales of precursors appeared to vary little between eruptions. This
suggests that they are largely unaffected by external factors. However, our
analysis uses one year of data from one seismometer and no environmental data
such as temperature, atmospheric pressure or precipitation. It remains
possible that these factors influence the timing of eruptions and their
precursors. A seismometer closer to Steamboat could improve the reliability of
detection.

Direct machine learning forecasts of hydrothermal explosions such as the one
at Biscuit Basin are not currently feasible. This is because few of them have
been recorded seismically. However, the approach we used to find the type and
timescale of precursors may help to develop monitoring tools for geothermal
systems.

## Glossary

A **geyser** erupts water and steam episodically.

A **precursor** is a signal that recurs before eruptions and is rare at other
times.

**Hz** (hertz) is the number of cycles per second in a vibration.

A **feature** is a statistic calculated from a window of data, such as its
mean or its autocorrelation.

**Template matching** compares the stretch of a feature before one eruption
with the rest of the record.

A **random forest** combines many decision trees, each of which classifies a
case by a sequence of threshold tests, and averages their outputs.

The **consensus** is the fraction of trees that forecast an eruption.

**Isotonic regression** converts the consensus into a calibrated probability.
The conversion is monotonic: a higher consensus never gives a lower
probability.

**AUC** is the area under the receiver operating characteristic curve, which
plots correct warnings against false alarms as the alert threshold changes.

A **Fréchet distribution** describes eruption intervals whose probability
rises to a peak at a typical interval and then falls.

**Autocorrelation** measures how closely a signal resembles a time-shifted
copy of itself.

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