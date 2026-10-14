# Ergodic seismic precursors and transfer learning for short term eruption forecasting at data scarce volcanoes

- **Authors:** Alberto Ardid (ORCID 0000-0001-8040-8193); David Dempsey (ORCID 0000-0003-2135-5129); Corentin Caudron (ORCID 0000-0002-3748-0007); Shane Cronin (ORCID 0000-0001-7499-603X); Ben Kennedy (ORCID 0000-0001-7235-6493); Társilo Girona (ORCID 0000-0001-6422-0422); Diana Roman (ORCID 0000-0003-1282-5803); Craig Miller; Sally Potter; Oliver D. Lamb (ORCID 0000-0002-2254-4258); Anto Martanto; Yesim Cubuk-Sabuncu; Leoncio Cabrera (ORCID 0000-0001-9401-2608); Sergio Ruiz; Rodrigo Contreras (ORCID 0000-0003-2713-5397); Javier Pacheco; Mauricio M. Mora (ORCID 0000-0001-7571-6749); Silvio De Angelis (ORCID 0000-0003-2636-3056)
- **Journal:** Nature Communications, vol. 16(1), article 1758 (2025)
- **Publisher:** Springer Science and Business Media LLC
- **DOI (version of record):** [https://doi.org/10.1038/s41467-025-56689-x](https://doi.org/10.1038/s41467-025-56689-x)
- **This page:** https://ddempsey.github.io/papers/2025-ardid-ergodic-seismic-precursors-transfer-learning/
- **Open PDF:** [https://ddempsey.github.io/papers/2025-ardid-ergodic-seismic-precursors-transfer-learning/ardid2025-ergodic-seismic-precursors.pdf](https://ddempsey.github.io/papers/2025-ardid-ergodic-seismic-precursors-transfer-learning/ardid2025-ergodic-seismic-precursors.pdf) (Published version)
- **Full text (Markdown):** [https://ddempsey.github.io/papers/2025-ardid-ergodic-seismic-precursors-transfer-learning/fulltext.md](https://ddempsey.github.io/papers/2025-ardid-ergodic-seismic-precursors-transfer-learning/fulltext.md)
- **Notice:** Published version, reproduced under the CC BY 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1038/s41467-025-56689-x
- **Explainer:** all explainers on this site are AI-generated and human-checked.
- **BibTeX:** https://ddempsey.github.io/papers/2025-ardid-ergodic-seismic-precursors-transfer-learning/citation.bib
- **Topics:** Volcanoes & eruption forecasting; Induced seismicity & faults
- **Keywords:** Volcano; Seismology; Geology; Term (time)

## In brief

We trained forecasting models on seismic data from 41 eruptions at 24 volcanoes and tested each on a volcano left out of training. They scored better than a seismic amplitude benchmark and, at three volcanoes, close to models trained on that volcano alone. This suggests precursors are shared between volcanoes.

- Models trained on groups of volcanoes scored an AUC of about 0.8 at volcanoes left out of training, where 0.5 is chance and 1 is perfect.
- A seismic amplitude benchmark, scaled using each volcano's full record, scored between 0.50 and 0.74 on the same three groups.
- At Whakaari, Bezymianny and Copahue, models trained on other volcanoes scored within 0.07 of models trained on that volcano alone.
- Performance improved as more volcanoes were added to training and appears to saturate at an AUC of about 0.8 with around twelve volcanoes.
- The models missed the 2011 Cordón Caulle eruption and raised many false positives at Ontake.

## The problem

About 29 million people live within 10 km of an active volcano (Freire et al.,
2019). Observatories forecast eruptions partly from seismic data (Endo and
Murray, 1991), by looking for precursors, which are signals that change
consistently before an eruption. Machine learning can find these precursors
(Carniel and Guzmán, 2020; Dempsey et al., 2022) but needs past eruptions to
learn from. Of the 24 volcanoes in this study, only 3 have more than three
eruptions on record, and 11 have only one eruption recorded by seismometers.

Analogue methods compare a poorly recorded volcano with better-studied ones
(Marzocchi et al., 2008; Aspinall et al., 2003). The choice of analogue relies
on expert judgement and may not be consistent from one volcano to the next. Our
goal in this study was to test whether precursors learned at a group of
volcanoes can forecast eruptions at a volcano left out of training.

## What we did

We used continuous seismic data from one station at each of 24 volcanoes. The
records cover 41 eruptions and about 73 years. Each record was reduced to four
measures of shaking every 10 minutes: the average strength in three frequency
bands, and a ratio between two of them.

For each 48-hour period, we calculated over 700 statistical features of each
measure, such as its mean, its trend, and how irregular it is. A feature was
kept if its values before eruptions differed from its values at other times. The
test was set so that about 5% of kept features would be expected to pass by
chance. A random forest of up to 200 decision trees then learned to combine the
kept features. Its output is a score between 0 and 1, where higher values mean
that an eruption is more likely. The score is not a probability.

We trained generalised models on three pools: a magmatic pool of 9 volcanoes and
16 eruptions, a phreatic pool of 6 volcanoes and 15 eruptions, and a world pool
of all 24. Each volcano in turn was forecast by a model trained on the others.

For comparison, tailored models were trained on one volcano and tested on each
of its eruptions in turn. Only Bezymianny, Whakaari and Copahue had enough
eruptions for this. We also built a benchmark based on seismic amplitude. It was
scaled using each volcano's full record, including data from after each
forecast, and we kept the most accurate of three versions. This gives the
benchmark an information advantage. The machine learning inputs were also scaled
using each full record, but removing the pre-eruption data from that scaling had
an imperceptible effect.

We scored every model by its AUC (see Glossary). An AUC of 0.5 means no ability
to separate the 48 hours before an eruption from other times, and 1 means
perfect separation.

## What we found

All three generalised models scored an AUC of about 0.8 at volcanoes left out of
training. This indicates a modest ability to separate the 48 hours before an
eruption from periods of unrest (heightened activity) that do not end in an
eruption. The amplitude benchmark scored 0.74 on the phreatic pool, 0.58 on the
world pool, and 0.50 on the magmatic pool. The generalised models also scored
close to the tailored ones, with 0.96 against 0.89 at Whakaari, 0.75 against
0.77 at Bezymianny, and 0.93 against 0.96 at Copahue. However, it would be
premature to call these models ready for operational use.

<div class="widget" id="w-auc-compare" role="group" aria-label="Bar chart comparing the AUC scores of the generalised, tailored and seismic amplitude models for three volcanoes and three volcano pools, from Table 1 of the paper"></div>

With one or two volcanoes in training, the AUC ranged from 0.35 to 0.65. It
improved once more than three were used and appears to saturate at about 0.8
with around twelve. We argue that this pattern reflects ergodicity. Here,
ergodicity means that the range of signals recorded across many volcanoes
approximates the range that one volcano produces over time. Without it, adding
volcanoes would not be expected to improve the forecasts.

Before the 2004 eruption of Mount St Helens and the 2019 eruption of
Semisopochnoi, the strength of high-frequency (8 to 16 Hz) shaking oscillated
more strongly, with periods of 40 minutes and 3 hours. At Augustine, which was
left out of training, the forecast rose as the same oscillations reappeared
before its 2006 eruption. We do not propose a physical cause for these
oscillations, and we cannot exclude that the match is a coincidence.

Forecasts strengthened before the 2009 Bezymianny and 2016 Whakaari eruptions.
At Copahue, the generalised model forecasts remained high between eruptions a
few weeks apart. This may be because the eruptions used in training were larger
than the minor eruptions reported at Copahue. At Ontake, the 2014 forecast was
high over long periods with no eruption. These are false positives. The models
missed the 2011 Cordón Caulle eruption. Possible causes are a record that began
only 20 days beforehand, too short to establish a baseline, and a station 10 km
from the crater. However, we cannot exclude that its precursors differ from all
of those in the training set.

## Limitations

Our tests are pseudo-prospective. They withhold the target volcano from training
but do not use data recorded after the model was fixed. Their results are not
guaranteed to match real-time performance.

The models use one station per volcano and no gas, deformation or thermal data.
They estimate the likelihood of an eruption but not its size. Nevertheless,
models of this kind may one day complement other monitoring data at
observatories with limited resources or few recorded eruptions.

## Glossary

A **precursor** is a signal that changes consistently before eruptions.

A **phreatic eruption** is the eruption type used to group our phreatic pool.
The volcanoes in that pool all have well-developed hydrothermal systems.

A **magmatic eruption** is an eruption of new magma, the type grouped in our
magmatic pool.

**Seismic amplitude** is the average strength of ground shaking over a short
interval, here 10 minutes in the 2 to 5 Hz band.

A **feature** is a statistic calculated from a 48-hour block of data, such as
its mean or trend.

A **random forest** combines many decision trees, each of which assigns a case
to a class by a sequence of threshold tests, and averages their outputs.

A **pool** is the group of volcanoes used to train a generalised model.

A **generalised model** is trained on a pool of volcanoes and tested on a
volcano outside it. A **tailored model** is trained and tested on one volcano.

**AUC** is the area under the receiver operating characteristic curve, which
plots correct warnings against false positives as the alert threshold changes.

A **false positive** is a high forecast that is not followed by an eruption.

**Pseudo-prospective testing** forecasts data that were withheld from training.
This imitates a forecast made before an eruption.

**Ergodicity** is the property that signals sampled across many volcanoes
approximate the signals of one volcano over time.

To **saturate** here means that adding more volcanoes to training brings little
further gain in performance.

## Abstract

Seismic data recorded before volcanic eruptions provides important clues for forecasting. However, limited monitoring histories and infrequent eruptions restrict the data available for training forecasting models. We propose a transfer machine learning approach that identifies eruption precursors—signals that consistently change before eruptions—across multiple volcanoes. Using seismic data from 41 eruptions at 24 volcanoes over 73 years, our approach forecasts eruptions at unobserved (out-of-sample) volcanoes. Tested without data from the target volcano, the model demonstrated accuracy comparable to direct training on the target and exceeded benchmarks based on seismic amplitude. These results indicate that eruption precursors exhibit ergodicity, sharing common patterns that allow observations from one group of volcanoes to approximate the behavior of others. This approach addresses data limitations at individual sites and provides a useful tool to support monitoring efforts at volcano observatories, improving the ability to forecast eruptions and mitigate volcanic risks.

## Cite

Ardid, Alberto, Dempsey, David, Caudron, Corentin, Cronin, Shane, Kennedy, Ben, Girona, Társilo, Roman, Diana, Miller, Craig, Potter, Sally, Lamb, Oliver D., Martanto, Anto, Cubuk-Sabuncu, Yesim, Cabrera, Leoncio, Ruiz, Sergio, Contreras, Rodrigo, Pacheco, Javier, Mora, Mauricio M., De Angelis, Silvio (2025). Ergodic seismic precursors and transfer learning for short term eruption forecasting at data scarce volcanoes. Nature Communications, 16(1), 1758. https://doi.org/10.1038/s41467-025-56689-x

```bibtex
@article{ardid2025ergodic,
  title = {Ergodic seismic precursors and transfer learning for short term eruption forecasting at data scarce volcanoes},
  author = {Ardid, Alberto and Dempsey, David and Caudron, Corentin and Cronin, Shane and Kennedy, Ben and Girona, Társilo and Roman, Diana and Miller, Craig and Potter, Sally and Lamb, Oliver D. and Martanto, Anto and Cubuk-Sabuncu, Yesim and Cabrera, Leoncio and Ruiz, Sergio and Contreras, Rodrigo and Pacheco, Javier and Mora, Mauricio M. and De Angelis, Silvio},
  journal = {Nature Communications},
  year = {2025},
  volume = {16},
  number = {1},
  pages = {1758},
  publisher = {Springer Science and Business Media LLC},
  doi = {10.1038/s41467-025-56689-x},
  url = {https://ddempsey.github.io/papers/2025-ardid-ergodic-seismic-precursors-transfer-learning/}
}
```