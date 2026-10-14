# Socio-economic value of data-driven eruption forecasts to balance false alarms against catastrophic loss

- **Authors:** Alberto Ardid (ORCID 0000-0001-8040-8193); David Dempsey (ORCID 0000-0003-2135-5129); Garry McDonald; Shane Cronin (ORCID 0000-0001-7499-603X)
- **Journal:** Nature Communications, vol. 17(1), article 9356 (2026)
- **Publisher:** Springer Science and Business Media LLC
- **DOI (version of record):** [https://doi.org/10.1038/s41467-026-77242-4](https://doi.org/10.1038/s41467-026-77242-4)
- **This page:** https://ddempsey.github.io/papers/2026-ardid-socio-economic-value-data-driven/
- **Open PDF:** [https://ddempsey.github.io/papers/2026-ardid-socio-economic-value-data-driven/ardid2026-socio-economic-value.pdf](https://ddempsey.github.io/papers/2026-ardid-socio-economic-value-data-driven/ardid2026-socio-economic-value.pdf) (Published version)
- **Full text (Markdown):** [https://ddempsey.github.io/papers/2026-ardid-socio-economic-value-data-driven/fulltext.md](https://ddempsey.github.io/papers/2026-ardid-socio-economic-value-data-driven/fulltext.md)
- **Notice:** Published version, reproduced under the CC BY 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1038/s41467-026-77242-4
- **Explainer:** all explainers on this site are AI-generated and human-checked.
- **BibTeX:** https://ddempsey.github.io/papers/2026-ardid-socio-economic-value-data-driven/citation.bib
- **Topics:** Volcanoes & eruption forecasting
- **Keywords:** Warning system; Value (mathematics); Balance (ability)

## In brief

We compared the cost of false alarms with the loss from missed eruptions for eruption forecasts at five volcanoes. In retrospective tests, with documented losses at two volcanoes and assumed losses at three, acting on the forecasts could have reduced losses by 30 to 90%, despite many false alarms.

- {'Our Potential Economic Value (PEV) score is the share of avoidable losses a forecast prevents': '1 for a perfect forecast, 0 for none, and negative when acting costs more than it saves.'}
- At Whakaari over 2010 to 2020, acting at a precautionary alert threshold could have reduced costs by about 36% compared with never acting.
- At Ontake, acting on a forecast could have reduced losses by about 90% over 2013 to 2014, despite 40 false alarms.
- Balanced alert thresholds kept PEV positive over the widest range of assumed costs, whereas the highest thresholds lost value by missing eruptions.
- At three volcanoes, a model trained on other volcanoes would have saved USD 189 to 300 million at the best threshold identified retrospectively, the most of three models, although only narrowly at Bezymianny.

## The problem

Small eruptions with little warning can be deadly where people are exposed. The
2014 eruption of Ontake in Japan killed 63 people (Yamaoka et al., 2016), and
the 2019 eruption of Whakaari (White Island) in New Zealand killed 22 (Dempsey
et al., 2022).

In our view, new methods for forecasting eruptions have been judged mainly on
accuracy. Accuracy omits the costs of false alarms and missed eruptions. A false
alarm can close businesses and transport and reduce public trust (Haynes et al.,
2008). A missed eruption, where an evacuation would have been feasible, can cost
lives. Our goal was to express both kinds of error in dollars, in a score that
applies at any volcano.

## What we did

We applied Potential Economic Value (PEV), a cost-loss score first developed for
weather and aviation forecasts (Murphy, 1977; Richardson, 2000), to eruption
forecasting. Whenever the forecast exceeds a chosen decision threshold, an
action such as closing access or evacuating is taken. Each day of action without
an eruption is a false alarm and costs C. Each eruption without a prior alert is
missed and costs L. If b is the number of false-alarm days and m is the fraction
of eruptions missed, then

PEV = 1 − (C × b + L × m) / L

A perfect forecast scores 1 and doing nothing scores 0. A negative score means
the forecast caused more cost than it saved. We assumed that an evacuation
removes all risk to life.

Most forecasts came from a machine learning model (Ardid et al., 2025) trained
on seismic data from 24 volcanoes. Every 10 minutes, it used the previous 96
hours of seismic data to give a "likelihood proxy" for an eruption in the next
48 hours, a score between 0 and 1. A threshold of 0.9 on this score is therefore
not a 90% chance of eruption. We tested the model on five volcanoes excluded
from its training, with documented losses at Whakaari and Ontake and
hypothetical loss scenarios at Ruapehu (New Zealand), Copahue (Chile and
Argentina) and Bezymianny (Russia). For comparison, we also used models trained
on each volcano alone.

## What we found

At Whakaari, the model trained on Whakaari alone gave the highest PEV at
thresholds of about 0.85 to 0.90. Over 2010 to 2020, a precautionary threshold
of 0.6 could have reduced costs by 36% compared with never acting. With the
forecast, costs rose in small steps at each false alarm. Without it, they rose
abruptly at missed eruptions, one in five of which we assumed to be
catastrophic. Over short periods, the forecast can therefore cost more than
doing nothing.

At Ontake, acting on a forecast could have reduced losses by about 90% over 2013
to 2014, despite 40 false alarms. This is because closing trails costs much less
than the loss of life from a missed eruption. However, the Ontake test contains
only one eruption.

<div class="widget" id="w-pev" role="group" aria-label="Calculator of Potential Economic Value from the false-alarm cost, the missed-eruption loss, the number of false-alarm days and the fraction of eruptions missed"></div>

With the Ontake costs (C of USD 1 million per day, L of USD 400 million), no
missed eruption, and each false alarm counted as one closure day, the equation
gives a PEV of 0.9. Acting costs less than never acting for up to 400
false-alarm days per eruption.

At Ruapehu, under assumed odds that a missed eruption coincides with high
exposure, such as the ski season, access restrictions could reduce expected
losses by more than 40%.

When we varied C and L by several factors of ten, PEV at balanced thresholds of
0.65 to 0.70 stayed positive across plausible cost ratios. A low threshold of
0.30 gave positive value only when L was much larger than C. A high threshold of
0.90 lost value, because a few missed eruptions removed most of the benefit.

At Whakaari, Bezymianny and Copahue, the model trained on other volcanoes would
have saved USD 189 to 300 million at its best threshold, more than models
trained on each volcano alone. This is 38 to 75% of the avoidable loss. A simple
measure of seismic amplitude (RSAM) also gave positive value at all three. At
Bezymianny, RSAM would have saved almost as much as the model trained on other
volcanoes. However, the best threshold at each volcano can be identified only
retrospectively.

Frequent alerts may reduce compliance (Roulston and Smith, 2004). At Whakaari
over 2015 to 2020, a threshold of 0.7 with each warning held for 5 days put the
volcano under warning on 118 of 1,645 days, or about 26 days a year. It still
warned before the 2019 eruption. However, these settings are illustrative.

## Limitations

The optimal threshold can be identified only retrospectively. We therefore
recommend that agencies start from a balanced threshold of 0.65 to 0.70 and
adjust it as forecasts and outcomes accumulate. PEV also assumes that alerts
lead to action. Our costs are fixed in time, whereas exposure varies, from about
70 people a day at Whakaari to about 10,000 a day in the Ruapehu ski season.
Because misses are not weighted by exposure, we regard our values as
conservative.

PEV requires a value of a statistical life. This ranges from USD 2.7 million in
New Zealand (Ministry of Transport, 2020) to USD 12.5 million in the United
States (U.S. Department of Transportation, 2023). Our conclusions about which
thresholds give positive value hold across this range. PEV does not measure
social costs such as trauma or long-term displacement. A next step is to let the
missed-eruption loss vary with daily exposure.

## Glossary

A **false alarm** is an alert that is not followed by an eruption within 48 hours.

A **missed eruption** is an eruption with no alert in the 48 hours before it.

The **decision threshold** is the forecast value above which an alert is issued
and protective action taken.

A **likelihood proxy** is a forecast score that increases with the likelihood of
eruption but is not itself a probability.

**Potential Economic Value (PEV)** is the fraction of avoidable losses that
acting on a forecast prevents, compared with never acting.

A **retrospective test** applies a forecast model to past eruptions that were
excluded from its training.

**RSAM** is a simple measure of seismic amplitude at a volcano, used here as a
benchmark forecast.

The **value of a statistical life** is the amount a government uses to
represent the cost of one death in economic analysis.

## Abstract

The adoption of new forecasting methods for volcanic eruptions typically emphasizes predictive accuracy, often overlooking their potential to reduce overall life and economic losses. We introduce a Potential Economic Value (PEV) framework that evaluates forecast utility by balancing precautionary actions against avoidable catastrophic losses (such as mass casualties). Using machine-learning forecasts from continuous seismic data at five volcanoes, we show that non-forecasted eruptions (missed) have disproportionate consequences, compared to false alarms, which generate recurring and manageable disruption. Retrospective analyses of the 2019 Whakaari (New Zealand) and 2014 Ontake (Japan) eruptions, along with three additional volcanoes, indicate that losses could have been reduced by 30–90%, despite generating numerous false alarms. Across all case studies, effective forecasting prioritizes reducing missed eruptions over maximizing accuracy. This supports the use of more precautionary warning thresholds, provided that the resulting increase in alert frequency is managed in ways that maintain public compliance and trust.

## Cite

Ardid, Alberto, Dempsey, David, McDonald, Garry, Cronin, Shane (2026). Socio-economic value of data-driven eruption forecasts to balance false alarms against catastrophic loss. Nature Communications, 17(1), 9356. https://doi.org/10.1038/s41467-026-77242-4

```bibtex
@article{ardid2026socio,
  title = {Socio-economic value of data-driven eruption forecasts to balance false alarms against catastrophic loss},
  author = {Ardid, Alberto and Dempsey, David and McDonald, Garry and Cronin, Shane},
  journal = {Nature Communications},
  year = {2026},
  volume = {17},
  number = {1},
  pages = {9356},
  publisher = {Springer Science and Business Media LLC},
  doi = {10.1038/s41467-026-77242-4},
  url = {https://ddempsey.github.io/papers/2026-ardid-socio-economic-value-data-driven/}
}
```