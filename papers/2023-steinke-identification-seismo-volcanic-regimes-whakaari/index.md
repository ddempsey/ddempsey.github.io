# Identification of Seismo‐Volcanic Regimes at Whakaari/White Island (New Zealand) Via Systematic Tuning of an Unsupervised Classifier

- **Authors:** B. Steinke (ORCID 0000-0001-8252-4534); A. D. Jolly; R. Carniel (ORCID 0000-0001-8391-2512); D. E. Dempsey (ORCID 0000-0003-2135-5129); S. J. Cronin (ORCID 0000-0001-7499-603X)
- **Journal:** Journal of Geophysical Research: Solid Earth, vol. 128(3), article e2022JB026221 (2023)
- **Publisher:** American Geophysical Union (AGU)
- **DOI (version of record):** [https://doi.org/10.1029/2022jb026221](https://doi.org/10.1029/2022jb026221)
- **This page:** https://ddempsey.github.io/papers/2023-steinke-identification-seismo-volcanic-regimes-whakaari/
- **Open PDF:** [https://ddempsey.github.io/papers/2023-steinke-identification-seismo-volcanic-regimes-whakaari/steinke2023-identification-seismo-volcanic.pdf](https://ddempsey.github.io/papers/2023-steinke-identification-seismo-volcanic-regimes-whakaari/steinke2023-identification-seismo-volcanic.pdf) (Published version)
- **Full text (Markdown):** [https://ddempsey.github.io/papers/2023-steinke-identification-seismo-volcanic-regimes-whakaari/fulltext.md](https://ddempsey.github.io/papers/2023-steinke-identification-seismo-volcanic-regimes-whakaari/fulltext.md)
- **Notice:** Published version, reproduced under the CC BY 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1029/2022jb026221
- **Also in:** UC Research Repository, https://hdl.handle.net/10092/105667
- **Explainer:** all explainers on this site are AI-generated and human-checked.
- **BibTeX:** https://ddempsey.github.io/papers/2023-steinke-identification-seismo-volcanic-regimes-whakaari/citation.bib
- **Topics:** Volcanoes & eruption forecasting
- **Keywords:** Volcano; Geology; Seismology; Hyperparameter; Cluster analysis

## In brief

We tuned an unsupervised classifier on 12.5 years of volcanic tremor at Whakaari. It separated background from unrest. In a retrospective analysis, its output changed to unrest regimes 6 weeks before the August 2012 eruption and about 3.5 months before the December 2019 eruption.

- Statistical tests on classifier settings guided our choice of five clusters, 12-hour windows, a 2 to 5 Hz frequency band and a map of 5 by 5 neurons.
- One cluster, usually with the lowest tremor levels, dominated the earliest and latest stages, and in our retrospective analysis ceased to dominate 6 weeks before the August 2012 eruption.
- The background cluster ceased to dominate about 3.5 months before the December 2019 eruption.
- We hypothesise that the unrest regimes represent pressurisation, depressurisation, and surface activity with free degassing, in a similar order in 2012/2013 and 2019.
- We propose that the different regime pattern before the 2016 eruption resulted from rapid destabilisation of the shallow hydrothermal system.

## The problem

The sudden and fatal 2019 eruption of Whakaari (White Island), New Zealand,
showed that short-term forecasting of phreatic (steam-driven) explosions remains
a challenge even at well-monitored volcanoes. Volcanic tremor, the continuous
shaking recorded on a volcano, is available almost in real time.

Supervised classifiers need labelled training data. These are rare at most
volcano observatories. Unsupervised classifiers such as self-organising maps
need no labels. However, they are not yet widely applied to tremor, because
their results depend on their settings and are hard to validate (Unglert et al.,
2016). Our goal was to tune such a classifier systematically and to test whether
the regimes it finds agree with observed activity at Whakaari.

## What we did

We used data from June 2008 to December 2020 from one seismometer on the
south-eastern crater rim. We converted the record into tremor amplitude (RSAM,
real-time seismic amplitude measurement) in 13 frequency bands, measured in
hertz (Hz, vibrations per second). We cut each record into consecutive windows
of seven lengths, from 1 hour to 5 days, and described every window by 759
statistical features, such as its energy and its entropy, a measure of how
irregular the signal is.

The classifier is a self-organising map, a grid of artificial neurons trained so
that windows with similar features are assigned to nearby neurons. Then k-means
clustering groups the neurons into k clusters. Each window takes the cluster of
its nearest neuron. We chose k, the frequency band, the window length and the
map size by building maps for all combinations and scoring each with statistical
tests.

A kernel density estimate then measures how often each cluster occurs over time.
A period of at least 5 days in which one cluster dominates is a regime. We
grouped regimes into types when the same features distinguished them from the
rest of the record. We compared each type with RSAM, reported activity, and a
second tremor measure, the displacement seismic amplitude ratio (DSAR). Caudron
et al. (2019) interpret high DSAR as a sign of reduced permeability near the
surface and rising gas pressure.

## What we found

Statistical tests favoured five clusters, 12-hour windows and the 2 to 5 Hz
band. We chose a map of 5 by 5 neurons, because larger maps did not improve the
classification.

One cluster dominated the earliest and latest stages of every unrest episode,
usually with the lowest RSAM and DSAR. In this retrospective analysis, the
classifier output changed from background to unrest regimes 6 weeks before the
August 2012 eruption and about 3.5 months before the December 2019 eruption.

For the episode from June 2011 to January 2014, the method found 17 regimes.
Those with statistically significant features formed five types. We hypothesise
that these represent background activity, two modes of pressurisation,
depressurisation, and surface activity with free degassing. In late June 2012,
RSAM and DSAR rose sharply and the classifier detected a regime we label
pressurisation. This may indicate new fluids rising into the hydrothermal
system. Christenson et al. (2017) interpreted sulfur sealing and gas entrapment
beneath the vent during this episode. Seal failure possibly caused the
hydrothermal explosion of 5 August 2012. A lava dome was then extruded at the
vent (Jolly et al., 2020). The next regime could reflect renewed pressurisation
as the dome and the magma below it blocked the system. From late December 2012,
gas flux increased through the south-east vent (Christenson et al., 2017), DSAR
fell, and the classifier changed to a regime we label depressurisation. A regime
of surface activity and degassing followed. Hydrothermal activity eventually
evaporated the crater lake completely (Christenson et al., 2017). RSAM reached
its highest level of the episode.

<div class="widget" id="w-ep1-regimes" role="group" aria-label="Timeline of the seismic regimes detected at Whakaari from June 2011 to January 2014, with a description of each stage"></div>

In 2019, regimes we label pressurisation were again followed by degassing
regimes, from mid-November until the December eruption. The 2016 episode had a
different regime pattern. Non-background clusters appeared in two pulses, in May
2014 and October 2015. Other regime changes switched back and forth between
clusters. This made regimes harder for the detector to recognise. Very long
period (VLP) seismic events, interpreted as signs of magma injection, occurred
months before the 2012 and 2019 eruptions (Park et al., 2020), but only a few
hours before the 2016 explosion (Jolly et al., 2018). We propose that the 2016
eruption resulted from rapid destabilisation of the shallow hydrothermal system,
whereas rising gases from new magma better explain the 2012/2013 and 2019
episodes.

Large tectonic earthquakes can change tremor for as long as a regime lasts. We
found no evidence that one within days of a regime change had shifted the
dominant regime.

## Limitations

The regime detector missed the onset of unrest in August 2011 (Chardot et al.,
2015; Jolly et al., 2017). In 2019 it missed the possible onsets that GeoNet
reported in May and June, and its first regime change came in August. A
different smoothing bandwidth for the kernel density estimate detected both
onsets but split later regimes into too many short ones. Changes within 2 hours
of an eruption would likely remain undetected with 12-hour windows. The map was
trained and tested on the same record. We did not test real-time use with a map
trained only on past data.

The labels are our interpretations, based on one volcano and one seismometer.
The approach could add to existing seismic monitoring and eruption forecasting
and help to distinguish different drivers of unrest. Before it is used in
monitoring, an automated version should be tested on more data sets.

## Glossary

A **phreatic explosion** is a sudden release of pressurised steam and hot water
from the hydrothermal system beneath a volcano.

**Volcanic tremor** is the continuous ground shaking recorded at an active
volcano.

**Hz** (hertz) is a frequency of one vibration per second.

**RSAM** (real-time seismic amplitude measurement) is the average amplitude of
the tremor in a chosen frequency band.

**DSAR** (displacement seismic amplitude ratio) is a tremor measure whose high
values Caudron et al. (2019) interpret as reduced permeability near the surface
and rising gas pressure.

An **unsupervised classifier** groups data by similarity without examples
labelled in advance.

A **self-organising map** is a grid of artificial neurons, trained so that
similar inputs are assigned to nearby neurons.

**k-means clustering** divides items into k groups so that each item is closest
to the centre of its own group.

A **feature** is a single number computed from a window of tremor, such as its
energy or entropy.

A **kernel density estimate** is a smoothed measure of how often each cluster
occurs over time. Its bandwidth is the setting that controls the smoothing.

A **regime** is a period of at least 5 days in which the same cluster dominates.

The **hydrothermal system** is the hot water and gas circulating beneath the
vent, down to about 1 km depth.

A **seal** is a layer of minerals, such as sulfur or clay, that blocks fluid
flow and allows pressure to build beneath it.

**Very long period (VLP) events** are slow seismic signals, with each cycle
lasting about 8 to 33 seconds (0.03 to 0.12 Hz at Whakaari).

## Abstract

We present an algorithm based on Self‐Organizing Maps (SOM) and k‐means clustering to recognize patterns in a continuous 12.5‐year tremor time series recorded at Whakaari/White Island volcano, New Zealand (hereafter referred to as Whakaari). The approach is extendable to a variety of volcanic settings through systematic tuning of the classifier. Hyperparameters are evaluated by statistical means, yielding a combination of “ideal” SOM parameters for the given data set. Extending from this, we applied a Kernel Density Estimation approach to automatically detect changes within the observed seismicity. We categorize the Whakaari seismic time series into regimes representing distinct volcano‐seismic states during recent unrest episodes at Whakaari (2012/2013, 2016, and 2019). There is a clear separation in classification results between background regimes and those representing elevated levels of unrest. Onset of unrest is detected by the classifier 6 weeks before the August 2012 eruption, and ca. 3.5 months before the December 2019 eruption, respectively. Regime changes are corroborated by changes in commonly monitored tremor proxies as well as with reported volcanic activity. The regimes are hypothesized to represent diverse mechanisms including: system pressurization and depressurization, degassing, and elevated surface activity. Labeling these regimes improves visualization of the 2012/2013 and 2019 unrest and eruptive episodes. The pre‐eruptive 2016 unrest showed a contrasting shape and nature of seismic regimes, suggesting differing onset and driving processes. The 2016 episode is proposed to result from rapid destabilization of the shallow hydrothermal system, while rising magmatic gases from new injections of magma better explain the 2012/2013 and 2019 episodes.

## Cite

Steinke, B., Jolly, A. D., Carniel, R., Dempsey, D. E., Cronin, S. J. (2023). Identification of Seismo‐Volcanic Regimes at Whakaari/White Island (New Zealand) Via Systematic Tuning of an Unsupervised Classifier. Journal of Geophysical Research: Solid Earth, 128(3), e2022JB026221. https://doi.org/10.1029/2022jb026221

```bibtex
@article{steinke2023identification,
  title = {Identification of Seismo‐Volcanic Regimes at Whakaari/White Island (New Zealand) Via Systematic Tuning of an Unsupervised Classifier},
  author = {Steinke, B. and Jolly, A. D. and Carniel, R. and Dempsey, D. E. and Cronin, S. J.},
  journal = {Journal of Geophysical Research: Solid Earth},
  year = {2023},
  volume = {128},
  number = {3},
  pages = {e2022JB026221},
  publisher = {American Geophysical Union (AGU)},
  doi = {10.1029/2022jb026221},
  url = {https://ddempsey.github.io/papers/2023-steinke-identification-seismo-volcanic-regimes-whakaari/}
}
```