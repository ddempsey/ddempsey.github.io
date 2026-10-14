# Physics‐based forecasting of induced seismicity at Groningen gas field, the Netherlands

- **Authors:** David Dempsey; Jenny Suckale (ORCID 0000-0002-9787-8180)
- **Journal:** Geophysical Research Letters, vol. 44(15), pp. 7773-7782 (2017)
- **Publisher:** American Geophysical Union (AGU)
- **DOI (version of record):** [https://doi.org/10.1002/2017gl073878](https://doi.org/10.1002/2017gl073878)
- **This page:** https://ddempsey.github.io/papers/2017-dempsey-physics-forecasting-induced-seismicity-groningen/
- **Open PDF:** [https://ddempsey.github.io/papers/2017-dempsey-physics-forecasting-induced-seismicity-groningen/dempsey2017-physics-forecasting-induced.pdf](https://ddempsey.github.io/papers/2017-dempsey-physics-forecasting-induced-seismicity-groningen/dempsey2017-physics-forecasting-induced.pdf) (Accepted manuscript (peer-reviewed, author's version))
- **Full text (Markdown):** [https://ddempsey.github.io/papers/2017-dempsey-physics-forecasting-induced-seismicity-groningen/fulltext.md](https://ddempsey.github.io/papers/2017-dempsey-physics-forecasting-induced-seismicity-groningen/fulltext.md)
- **Notice:** An edited version of this paper was published by AGU. Published 2017 American Geophysical Union. Version of record: https://doi.org/10.1002/2017gl073878
- **Also in:** UC Research Repository, https://hdl.handle.net/10092/105824
- **Explainer:** all explainers on this site are AI-generated and human-checked.
- **BibTeX:** https://ddempsey.github.io/papers/2017-dempsey-physics-forecasting-induced-seismicity-groningen/citation.bib
- **Topics:** Induced seismicity & faults
- **Keywords:** Induced seismicity; Seismology; Bayesian probability; Geology; Extraction (chemistry); Poisson distribution

## In brief

We developed a physics-based model of the earthquakes caused by gas extraction at Groningen, calibrated it on about 600 recorded events, and forecast earthquakes from 2017 to 2024. Under each of three extraction rates, the largest event had a 5% chance of exceeding magnitude 4.0.

- Our model represents the 325 largest faults in the Groningen reservoir and the stress changes caused by falling gas pressure.
- Calibration on about 600 earthquakes recorded from 1991 to February 2017 suggests that the reservoir was not critically stressed before production began.
- For February 2017 to 2024, the largest earthquake had a 5% chance of exceeding magnitude 4.0 under extraction rates of 21, 27, and 33 billion cubic metres a year.
- Forecast rates at 33 billion cubic metres a year were about 50% higher than at 21, yet the magnitude with a 10% chance of exceedance moved from 3.82 to 3.89.
- These 10% exceedance magnitudes were 0.3 to 0.4 magnitude units lower than those of a statistical forecast for the same period (Zöller and Holschneider, 2016).

## The problem

Gas extraction from the Groningen field, in the northeast of the Netherlands,
has caused earthquakes since 1991. These earthquakes put local communities at
risk. The field is the largest in western Europe, and production began in 1963.
In August 2012, a magnitude 3.6 earthquake near Huizinge raised public concern.
Between 1991 and February 2017, about 600 events larger than magnitude 1 were
recorded.

The gas is of strategic importance to the country. Decisions about future
extraction rates therefore need forecasts of how many earthquakes each rate will
cause, and how large the largest is likely to be. Our goal in this study was to
produce such forecasts.

## What we did

More than 2000 billion cubic metres of gas have been produced, enough to fill a
cube about 12.6 km on each side, and reservoir pressure has fallen by about 22
MPa, roughly 220 times atmospheric pressure. A fall in fluid pressure increases
the effective normal stress on faults. On its own, this would make faults more
stable. However, we assume that the reservoir rock also contracts as it loses
pressure (Segall and Fitzgerald, 1998). The contraction reduces the horizontal
stress and raises the shear stress on faults. A fault slips if that rise exceeds
the gain in its strength.

Our model includes the 325 largest faults in the reservoir, those longer than 2
km. Each fault is represented as a line on a map of the reservoir, which is
treated as a single flat layer about 3 km deep. Pressure changes along each
fault come from the operator's calibrated reservoir simulation. A single factor,
the stress path coefficient, converts pressure change into horizontal stress
change. Four more parameters describe fault friction and the tectonic stress
before production.

The first part of the model computes the earthquake rate for the whole field,
assuming that parts of faults already at the point of failure produce
earthquakes in proportion to any further increase in stress. The second part
generates synthetic earthquake catalogues. It gives each fault a random pattern
of stress, then simulates where ruptures start, how far they spread, and their
magnitudes.

We calibrated the five parameters against the earthquake times using Markov
chain Monte Carlo, a method that finds the range of parameter values consistent
with the observed earthquakes. The calibration treats the modelled rate as the
rate of a random (Poisson) process. This allows for chance variation in the
yearly counts. We then forecast February 2017 to the end of 2024 for three
extraction scenarios supplied by the operator: 21, 27, and 33 billion cubic
metres a year.

## What we found

The calibration suggests that the reservoir was not critically stressed before
production. Its faults were more than one typical earthquake stress drop, about
1 MPa, from failure. Had they been closer, we would expect earthquakes to have
begun before 1991. However, the best-fitting stress path coefficient is higher
than the typically reported range of 0.5 to 0.8 (Chan and Zoback, 2002). We
suggest that it compensates for physics missing from the model, such as stresses
that depend on pressure changes elsewhere in the reservoir.

In our forecasts, higher extraction rates produced more earthquakes and a small
increase in the size of the largest. The 33 billion cubic metre scenario gave
the most felt events (above magnitude 2.5), with a rate about 50% higher than
the 21 billion scenario. However, all three scenarios gave a 5% chance, or 1 in
20, that the largest event exceeds magnitude 4.0. The magnitude with a 10%
chance of being exceeded was 3.82, 3.87, and 3.89 for the three scenarios. These
values span 0.07 magnitude units. This is partly because each forecast covers a
range of possible largest magnitudes, and the shifts between scenarios are small
against that range. The power-law distribution of earthquake sizes also
contributes. Under it, a 50% increase in the number of earthquakes adds little
to the size of the largest.

<div class="widget" id="w-mt-scenarios" role="group" aria-label="Comparison of the magnitude with a 10% chance of being exceeded, for three extraction scenarios, in our forecast and in Zöller and Holschneider (2016)"></div>

A statistical forecast for the same period (Zöller and Holschneider, 2016) gave
4.14, 4.26, and 4.31 for the same three scenarios. Our values are 0.3 to 0.4
magnitude units lower. The difference could arise from the way each model
triggers earthquakes, or from their different calibration and forecast periods.

Earthquakes at Groningen start at a shallow depth of about 3 km, and buildings
in the region were built when it had few earthquakes. We expect an earthquake of
magnitude 4 there to pose a greater hazard than one of similar size elsewhere in
the world.

## Limitations

The forecasts do not give the time or place of any particular earthquake. The
model's largest possible event is magnitude 6.4, a rupture of the longest
modelled fault, and none this large occurred in more than a million simulated
earthquakes. However, the model cannot represent ruptures that extend into the
basement rock below the reservoir or jump between faults. It also gives no
indication whether the basement is critically stressed. The answer would affect
the maximum size of earthquakes.

We accepted the operator's modelled reservoir pressures as correct. Any error in
them would shift our parameter estimates. The model does not reproduce
short-term spikes, such as 59 recorded events in 2011 against a modelled rate of
about 40 a year. Finally, the count for early 2017, extrapolated to a full year,
would exceed the 2016 total. More observations are needed to tell whether the
rate is stabilising, as our model suggests, or starting a sustained rise.

## Glossary

An **induced earthquake** is one caused by human activity, here the extraction
of gas.

**Magnitude** is a logarithmic measure of earthquake size.

**Effective normal stress** is the stress pressing the two sides of a fault
together, reduced by the pressure of fluid in the rock.

A **critically stressed** reservoir is one whose faults are already within about
one earthquake stress drop of slipping.

**Stress drop** is the fall in shear stress on a fault when it slips in an
earthquake.

The **stress path coefficient** is the ratio of the change in horizontal stress
to the change in reservoir pressure.

An **earthquake catalogue** is a list of recorded earthquakes with their times,
locations, and magnitudes.

**Markov chain Monte Carlo** is a sampling method that finds the range of
parameter values consistent with the data.

A **Poisson process** is a model of events that occur at random, at a given
average rate.

The **10% exceedance magnitude** is the magnitude that the largest earthquake in
the forecast period has a 10% chance of exceeding.

A **power-law distribution** of earthquake sizes means that each unit increase
in magnitude makes earthquakes rarer by a fixed factor.

## Abstract

Earthquakes induced by natural gas extraction from the Groningen reservoir, the Netherlands, put local communities at risk. Responsible operation of a reservoir whose gas reserves are of strategic importance to the country requires understanding of the link between extraction and earthquakes. We synthesize observations and a model for Groningen seismicity to produce forecasts for felt seismicity (M &gt; 2.5) in the period February 2017 to 2024. Our model accounts for poroelastic earthquake triggering and rupture on the 325 largest reservoir faults, using an ensemble approach to model unknown heterogeneity and replicate earthquake statistics. We calculate probability distributions for key model parameters using a Bayesian method that incorporates the earthquake observations with a nonhomogeneous Poisson process. Our analysis indicates that the Groningen reservoir was not critically stressed prior to the start of production. Epistemic uncertainty and aleatoric uncertainty are incorporated into forecasts for three different future extraction scenarios. The largest expected earthquake was similar for all scenarios, with a 5% likelihood of exceeding M 4.0.

## Cite

Dempsey, David, Suckale, Jenny (2017). Physics‐based forecasting of induced seismicity at Groningen gas field, the Netherlands. Geophysical Research Letters, 44(15), 7773-7782. https://doi.org/10.1002/2017gl073878

```bibtex
@article{dempsey2017physics,
  title = {Physics‐based forecasting of induced seismicity at Groningen gas field, the Netherlands},
  author = {Dempsey, David and Suckale, Jenny},
  journal = {Geophysical Research Letters},
  year = {2017},
  volume = {44},
  number = {15},
  pages = {7773-7782},
  publisher = {American Geophysical Union (AGU)},
  doi = {10.1002/2017gl073878},
  url = {https://ddempsey.github.io/papers/2017-dempsey-physics-forecasting-induced-seismicity-groningen/}
}
```