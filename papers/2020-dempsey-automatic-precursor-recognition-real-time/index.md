# Automatic precursor recognition and real-time forecasting of sudden explosive volcanic eruptions at Whakaari, New Zealand

- **Authors:** D. E. Dempsey (ORCID 0000-0003-2135-5129); S. J. Cronin (ORCID 0000-0001-7499-603X); S. Mei; A. W. Kempa-Liehr (ORCID 0000-0001-5558-0573)
- **Journal:** Nature Communications, vol. 11(1), article 3562 (2020)
- **Publisher:** Springer Science and Business Media LLC
- **DOI (version of record):** [https://doi.org/10.1038/s41467-020-17375-2](https://doi.org/10.1038/s41467-020-17375-2)
- **This page:** https://ddempsey.github.io/papers/2020-dempsey-automatic-precursor-recognition-real-time/
- **Open PDF:** [https://ddempsey.github.io/papers/2020-dempsey-automatic-precursor-recognition-real-time/dempsey2020-automatic-precursor-recognition.pdf](https://ddempsey.github.io/papers/2020-dempsey-automatic-precursor-recognition-real-time/dempsey2020-automatic-precursor-recognition.pdf) (Published version)
- **Full text (Markdown):** [https://ddempsey.github.io/papers/2020-dempsey-automatic-precursor-recognition-real-time/fulltext.md](https://ddempsey.github.io/papers/2020-dempsey-automatic-precursor-recognition-real-time/fulltext.md)
- **Notice:** Published version, reproduced under the CC BY 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1038/s41467-020-17375-2
- **Also in:** UC Research Repository, https://hdl.handle.net/10092/105819
- **Explainer:** all explainers on this site are AI-generated and human-checked.
- **BibTeX:** https://ddempsey.github.io/papers/2020-dempsey-automatic-precursor-recognition-real-time/citation.bib
- **Topics:** Volcanoes & eruption forecasting
- **Keywords:** Volcano; Warning system; Explosive material; Seismology; Geology

## In brief

We trained a machine learning model on nine years of seismic tremor from one station at Whakaari. It recognised four-hour tremor bursts before most eruptions. In tests on eruptions withheld from its training, it warned of four of five eruptive episodes, including 17 hours before the fatal 2019 eruption.

- We trained a forecaster on tremor recorded at a single seismic station from 2011 to 2020, and it updates its forecast every 10 minutes.
- In cross-validation at an alert threshold of 0.8, the model warned in advance of five of seven eruptions, including 17 hours before the fatal December 2019 eruption.
- At that threshold, alerts covered 8.5% of the nine years and 8.6% of alerts contained an eruption.
- A stricter threshold of 0.93 reduced the time under alert to 2.5% and raised the share of alerts containing an eruption to 15%, but missed one more eruption.
- The main precursors were tremor bursts lasting about four hours. We suggest these record magma rising beneath the vent and releasing hot gas into the shallow hydrothermal system.

## The problem

On 9 December 2019, Whakaari (White Island) erupted while 47 tourists and
guides were on the island. Twenty-one were killed or fatally injured.
Twenty-four days earlier, the volcano had been assessed at alert level 2, on a
scale up to 5. The alert level classifies the current state of a volcano and
gives no eruption forecast.

Alert levels are set by expert consensus, an approach that has proven useful
in slow-building crises (Barberi et al., 2009; Jousset et al., 2012). For
small eruptions at a hydrothermally active volcano, consensus can be too slow
to issue a warning. Our goal was to test whether an automatic system could
recognise eruption precursors in real time and give a fast, transparent
forecast.

## What we did

We used continuous data from one seismometer (station WIZ) from 2011 to 2019.
Every 10 minutes we computed four measures of volcanic tremor: the average
strength of shaking in three frequency bands, and a ratio between two of them.
The nine years contain five major eruptive episodes and seven eruptions. One
episode, in October 2013, contained three eruptions over eight days.

We divided the record into 48-hour windows that overlap by 36 hours. For each
window we computed several hundred features, such as its mean, its trend, and
the strength of oscillations at particular periods. Each window was labelled
by whether an eruption occurred in the following 48 hours. A statistical test
then identified the features whose values differed before eruptions. We treat
these as candidate precursors.

Only about 1 in 400 windows was followed by an eruption. We balanced the data
by randomly discarding most of the no-eruption windows. Because this step is
arbitrary, we repeated it 100 times and trained a decision tree on each
version. Every 10 minutes, each tree uses the last 48 hours of tremor to
predict whether an eruption will occur in the next 48 hours, and the fraction
of trees predicting one is the ensemble mean. An alert is issued when the
ensemble mean exceeds a chosen threshold, and is withdrawn once it has stayed
below the threshold for 48 hours.

We tested the model by cross-validation, withholding one month of data either
side of each eruptive episode and forecasting that episode with a model
trained on the rest.

## What we found

At a threshold of 0.8 (80 of the 100 trees predicting an eruption), the model
warned in advance of four of the five episodes, or five of the seven
eruptions. It issued an alert 17 hours before the fatal 2019 eruption. Warning
times for the other eruptions ranged from 7 to 75 hours. It missed the 8
October 2013 eruption, the second of three in that episode, and the April 2016
episode.

Raising the threshold reduces false alarms and increases the number of missed
eruptions. This is because more trees must agree before an alert is issued. At
0.8, the model issued 58 alerts covering 8.5% of the nine years, or about one
month a year, and 8.6% of them contained an eruption. At 0.93, it issued 26
alerts covering 2.5% of the period, or about nine days a year, and 15% of them
contained an eruption. However, it also missed the 3 October 2013 eruption,
while still warning of the 2019 eruption at least four hours ahead. To warn of
five of the seven eruptions by chance, randomly placed alerts would need to
cover about 70% of the period, or about eight months a year.

We also tuned a rule based on two manually selected features on all the data,
with no cross-validation. Its 12 alerts, totalling 55 days, warned of six of
the seven eruptions, and half of the alerts contained an eruption. However,
the rule was scored on the eruptions it was fitted to. We expect it to perform
poorly on future data.

<div class="widget" id="w-alert-tradeoff" role="group" aria-label="Comparison of the time under alert, the chance that an alert contains an eruption, and which of seven eruptions were warned of, for each operating point reported in the paper"></div>

The most informative precursors were bursts of tremor lasting about four
hours, overlaid by a 40-minute oscillation. They preceded the 2019 eruption
and both 2013 eruptive episodes. We suggest these bursts record magma rising
beneath the vent and releasing hot gas into the shallow hydrothermal system.
In this interpretation, the gas raises the pressure until the rock capping the
system fails. Before the 2016 eruption these signals were weaker, and rock
fragments thrown out by that eruption contained no magmatic material (Kennedy
et al., 2020). We interpret it as a hydrothermal explosion of trapped
groundwater.

## Limitations

The forecaster runs in under a minute on a desktop computer and needs only one
seismometer. However, it is a prototype. A stronger test is to fix the model
and evaluate it on data recorded afterwards (Schorlemmer et al., 2018).

Trained only on data recorded before each eruption, the model warned of the
October 2013 and December 2019 eruptions and missed the August 2013 eruption.
A data-driven model forecasts only eruptions whose precursors resemble those
in its training data. This probably explains the missed 2016 eruption. An
ensemble mean of 0.8 also cannot be read as an 80% chance of eruption. This is
because the trees were not calibrated to give probabilities. Our 48-hour
window and 48-hour forecast horizon were tuned on the same nine years of data.

Who sets the alert threshold, and who has access to the forecasts, are open
questions with implications for public safety, economic activity, and public
trust. They need to be resolved before automatic forecasts can meet public
expectations of volcano warnings.

## Glossary

A **steam-driven (phreatic) eruption** is an explosion caused by heated water
flashing to steam.

The **volcanic alert level** is New Zealand's numbered scale, with a highest
level of 5, describing the current state of a volcano.

An **eruptive episode** is a single eruption or a group of eruptions close in
time, which we treat as one event.

**Volcanic tremor** is continuous low-level shaking of the ground at an active
volcano.

A **hydrothermal system** is a body of hot water and gas circulating through
rock beneath a volcano.

A **feature** is a single number that summarises a segment of the tremor
record, such as its mean or trend.

A **decision tree** is a classifier that assigns cases to classes by a
sequence of threshold tests on their feature values.

The **ensemble mean** is the fraction of the 100 decision trees that predict
an eruption in the next 48 hours.

The **alert threshold** is the ensemble mean above which the model issues an
alert.

**Cross-validation** tests a model on data withheld from its training.

## Abstract

Sudden steam-driven eruptions strike without warning and are a leading cause of fatalities at touristic volcanoes. Recent deaths following the 2019 Whakaari eruption in New Zealand expose a need for accurate, short-term forecasting. However, current volcano alert systems are heuristic and too slowly updated with human input. Here, we show that a structured machine learning approach can detect eruption precursors in real-time seismic data streamed from Whakaari. We identify four-hour energy bursts that occur hours to days before most eruptions and suggest these indicate charging of the vent hydrothermal system by hot magmatic fluids. We developed a model to issue short-term alerts of elevated eruption likelihood and show that, under cross-validation testing, it could provide advanced warning of an unseen eruption in four out of five instances, including at least four hours warning for the 2019 eruption. This makes a strong case to adopt real-time forecasting models at active volcanoes.

## Cite

Dempsey, D. E., Cronin, S. J., Mei, S., Kempa-Liehr, A. W. (2020). Automatic precursor recognition and real-time forecasting of sudden explosive volcanic eruptions at Whakaari, New Zealand. Nature Communications, 11(1), 3562. https://doi.org/10.1038/s41467-020-17375-2

```bibtex
@article{dempsey2020automatic,
  title = {Automatic precursor recognition and real-time forecasting of sudden explosive volcanic eruptions at Whakaari, New Zealand},
  author = {Dempsey, D. E. and Cronin, S. J. and Mei, S. and Kempa-Liehr, A. W.},
  journal = {Nature Communications},
  year = {2020},
  volume = {11},
  number = {1},
  pages = {3562},
  publisher = {Springer Science and Business Media LLC},
  doi = {10.1038/s41467-020-17375-2},
  url = {https://ddempsey.github.io/papers/2020-dempsey-automatic-precursor-recognition-real-time/}
}
```