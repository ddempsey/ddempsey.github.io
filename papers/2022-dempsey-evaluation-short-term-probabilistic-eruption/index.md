# Evaluation of short-term probabilistic eruption forecasting at Whakaari, New Zealand

- **Authors:** D. E. Dempsey; A. W. Kempa-Liehr; A. Ardid; A. Li; S. Orenia; J. Singh; A. J. Tyler; S. J. Cronin
- **Journal:** Bulletin of Volcanology, vol. 84(10), article 91 (2022)
- **Publisher:** Springer Science and Business Media LLC
- **DOI (version of record):** [https://doi.org/10.1007/s00445-022-01600-5](https://doi.org/10.1007/s00445-022-01600-5)
- **This page:** https://ddempsey.github.io/papers/2022-dempsey-evaluation-short-term-probabilistic-eruption/
- **Open PDF:** [https://ddempsey.github.io/papers/2022-dempsey-evaluation-short-term-probabilistic-eruption/dempsey2022-evaluation-short-term.pdf](https://ddempsey.github.io/papers/2022-dempsey-evaluation-short-term-probabilistic-eruption/dempsey2022-evaluation-short-term.pdf) (Published version)
- **Full text (Markdown):** [https://ddempsey.github.io/papers/2022-dempsey-evaluation-short-term-probabilistic-eruption/fulltext.md](https://ddempsey.github.io/papers/2022-dempsey-evaluation-short-term-probabilistic-eruption/fulltext.md)
- **Notice:** Published version, reproduced under the CC BY 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1007/s00445-022-01600-5
- **Also in:** UC Research Repository, https://hdl.handle.net/10092/105840
- **Explainer:** all explainers on this site are AI-generated.
- **BibTeX:** https://ddempsey.github.io/papers/2022-dempsey-evaluation-short-term-probabilistic-eruption/citation.bib
- **Topics:** Volcanoes & eruption forecasting; Induced seismicity & faults
- **Keywords:** Probabilistic logic; Geology; Seismology; Earthquake prediction; Volcano; Warning system; Term (time)

## In brief

We ran an eruption forecaster at Whakaari for 18 months and filtered out the earthquakes that caused its three false positives. In a test with the 2019 eruption withheld from training, a calibrated version gave a 2 to 4% chance in 48 hours, up to 400 times its lowest level.

- Between February 2020 and August 2021 our real-time forecaster raised three false positives, all caused by regional earthquakes. No eruptions occurred.
- With earthquake filtering and data normalisation added, the improved model would have raised none of those three false positives.
- A warning system tested on eruptions withheld from training warned of six of seven eruptions, with warnings in effect about 14 days a year.
- During a warning the chance of eruption was 8.1% in 48 hours, 126 times higher than outside a warning.
- Over 2 to 18 December 2019, expert estimates of a second eruption scored worse than a fixed forecast based on the 2011 to 2019 average eruption rate.

## The problem

On 9 December 2019, an eruption at Whakaari (White Island) killed 22 tourists
and guides and severely injured 26 others. New Zealand scientists set a volcanic
alert level, which describes current activity but does not estimate the
likelihood of an eruption. They also estimate eruption probabilities by expert
elicitation, usually every 1 to 3 months. One week before the 2019 eruption,
this gave an 8 to 14% chance of eruption in the following four weeks (GeoNet,
2019b).

Our goal here was to test in real time a machine learning model from an earlier
study (Dempsey et al., 2020), which converts seismic data into an eruption
score, and to turn that score into a probability that can be compared with
expert judgement.

## What we did

We ran the forecaster from February 2020 to August 2021 on data from one
seismometer. Every 10 minutes it converted the previous 48 hours of volcanic
tremor into a score between 0 and 1. A higher score means a higher likelihood of
eruption, although it is not a probability.

No eruptions occurred, although the model raised three false positives, all
caused by regional earthquakes: a swarm 85 km north of the island in 2020, and
three earthquakes of magnitude 7.3 to 8.1 east of New Zealand and near Raoul
Island in March 2021. We added a filter that removes short bursts of earthquake
shaking before the tremor is averaged. We also normalised the four tremor
measures (three frequency bands and one ratio) so that each has a comparable
influence.

A warning system issues a warning when the score reaches a trigger value and
cancels it after 48 hours below that value. A calibrated model converts each
score to a probability using how often past scores of that size were followed by
an eruption. For example, a score of about 0.85 occurred 203 times in the
training data, and 11 of those were followed by an eruption within 48 hours, or
5.4%. We tested both models pseudo-prospectively, training on all but one
eruptive period and forecasting the one withheld.

An uninformed forecast uses only the average eruption rate. From January 2011 to
November 2019, six eruptions occurred in 1617 two-day periods, a probability of
0.37% per 48 hours, or about 1 in 270. Our forecast skill score is scaled so
that 1 is a perfect forecast, 0 matches the uninformed forecast, and negative
values are worse.

## What we found

Rerun with these changes, the model raised none of the three false positives. At
a trigger of 0.88, the warning system warned of six of the seven eruptions, with
warnings in effect about 14 days a year. During a warning the chance of eruption
was 8.1% in 48 hours, or about 1 in 12, and outside a warning it was 0.064%,
about 1 in 1600, or 126 times lower. However, the system missed the April 2016
eruption.

The warning for the 2019 eruption began at a strong tremor spike about 16 hours
beforehand, short of the 48-hour target. In the preceding four days, the
calibrated model gave a 2 to 4% chance of eruption in 48 hours, 200 to 400 times
its background of 0.01%, or 1 in 10,000. This background is the model's lowest
output, which applies to 23% of the study period, whereas 0.37% is an average
over all periods. Over 2011 to 2019, the calibrated model scored 0.21 and the
warning system 0.12, both better than the uninformed forecast. Over 2 to 18
December 2019, the calibrated model scored 0.33 and the warning system −0.02,
about the same as the uninformed forecast.

Converted to a 48-hour window, the 2 December expert estimate was 0.6 to 1.1%.
Given that probabilities in this study range over a factor of about a thousand,
this broadly agrees with the calibrated model. After the eruption, experts
estimated the daily chance of a second explosive eruption. Between 11 and 14
December they put it at 40 to 60%. Over 2 to 18 December, the elicitation scored
−1.0 or −1.5, depending on whether its low or high estimates were used. These
scores are not directly comparable, because our models were tested with some
knowledge of past eruptions, whereas the experts worked in real time.

<div class="widget" id="w-prob-scale" role="group" aria-label="Converter that puts an eruption probability for a 24-hour, 48-hour or 4-week window onto a 48-hour scale, and compares it with the forecasts reported in the paper"></div>

Possible reasons for the poor elicitation score are (1) a second eruption was
likely and did not occur by chance, (2) a 24-hour window was unfamiliar to
experts used to windows of weeks to months, and (3) the estimates may have been
conservatively inflated, subconsciously or otherwise, because they were used to
assess the risk to response teams.

## Limitations

Apart from the 18-month real-time test, our results are retrospective and should
be read as hypothetical. Using only the previous 48 hours of data from one
station, the forecaster cannot use a weeks-long precursor that preceded the 2016
eruption (Ardid et al., 2022). The calibrated probabilities reached a few
percent at most before eruptions. We attribute this partly to noise in the
seismic data.

In the one sequence tested, retraining the model immediately after the first
eruption of October 2013 improved its forecast of the second. However, adopting
this would mean restarting prospective testing (Whitehead et al., 2022). We
scored the elicitation only for December 2019, because past elicited
probabilities are not routinely made public. Finally, a lower trigger value
warns of more eruptions but keeps warnings in effect for longer. We argue that
this choice should be made by emergency management authorities (Papale, 2017).

## Glossary

The **volcanic alert level** is New Zealand's scale from 0 (no unrest) to 5
(major eruption), describing current activity at a volcano.

**Expert elicitation** pools the judgements of several scientists into a range
of eruption probabilities for a stated time window.

**Volcanic tremor** is continuous seismic shaking at an active volcano, here
averaged over 10-minute intervals.

A **false positive** is a warning or high forecast that is not followed by an
eruption.

An **eruptive period** is a single eruption or a group of eruptions close in
time, treated as one event.

**Normalisation** rescales several data streams to a common range so that none
dominates because of its size.

**Pseudo-prospective testing** trains a model without one eruption and then uses
it to forecast that eruption. This imitates a forecast made before the event.

The **uninformed forecast** assigns every 48-hour period the same probability,
the average eruption rate.

The **forecast skill score** measures how well probabilities matched outcomes,
scaled here so that 0 equals the uninformed forecast.

## Abstract

Phreatic explosions at volcanoes are difficult to forecast but can be locally devastating, as illustrated by the deadly 2019 Whakaari (New Zealand) eruption. Quantifying eruption likelihood is essential for risk calculations that underpin volcano access decisions and disaster response. But estimating eruption probabilities is notoriously difficult for sudden onset eruptions. Here, we describe two retrospectively developed models for short-term (48 h) probabilistic forecasting of phreatic eruptions at Whakaari. The models are based on a pseudo-prospective analysis of seven Whakaari eruptions whose precursors were identified by time series feature engineering of continuous seismic data. The first model, an optimized warning system, could anticipate six out of seven eruptions at the cost of 14 warning days each year. While a warning is in effect, the probability of eruption is about 8% in 48 h, which is about 126 times higher than outside the warning. The second model used isotonic calibration to translate the output of the forecast model onto a probability scale. When applied pseudo-prospectively in the 48 h prior to the December 2019 eruption, it indicated an eruption probability up to 400 times higher than the background. Finally, we quantified the accuracy of these seismic data-driven forecasts, alongside an observatory expert elicitation that used multiple data sources. To do this, we used a forecast skill score that was benchmarked against the average rate of eruptions at Whakaari between 2011 and 2019. This exercise highlights the conditions under which the three different forecasting approaches perform well and where potential improvements could be made.

## Cite

Dempsey, D. E., Kempa-Liehr, A. W., Ardid, A., Li, A., Orenia, S., Singh, J., Tyler, A. J., Cronin, S. J. (2022). Evaluation of short-term probabilistic eruption forecasting at Whakaari, New Zealand. Bulletin of Volcanology, 84(10), 91. https://doi.org/10.1007/s00445-022-01600-5

```bibtex
@article{dempsey2022evaluation,
  title = {Evaluation of short-term probabilistic eruption forecasting at Whakaari, New Zealand},
  author = {Dempsey, D. E. and Kempa-Liehr, A. W. and Ardid, A. and Li, A. and Orenia, S. and Singh, J. and Tyler, A. J. and Cronin, S. J.},
  journal = {Bulletin of Volcanology},
  year = {2022},
  volume = {84},
  number = {10},
  pages = {91},
  publisher = {Springer Science and Business Media LLC},
  doi = {10.1007/s00445-022-01600-5},
  url = {https://ddempsey.github.io/papers/2022-dempsey-evaluation-short-term-probabilistic-eruption/}
}
```