# Using Template Matching to Detect Hidden Fluid Release Episodes Beneath Crater Lakes in Ruapehu, Copahue, and Kawah Ijen Volcanoes

- **Authors:** A. Ardid (ORCID 0000-0001-8040-8193); D. Dempsey (ORCID 0000-0003-2135-5129); C. Caudron (ORCID 0000-0002-3748-0007); S. J. Cronin (ORCID 0000-0001-7499-603X); C. A. Miller (ORCID 0000-0001-8499-0352); I. Melchor (ORCID 0000-0003-0775-9039); D. Syahbana (ORCID 0000-0002-5212-1221); B. Kennedy (ORCID 0000-0001-7235-6493)
- **Journal:** Journal of Geophysical Research: Solid Earth, vol. 128(10), article e2023JB026729 (2023)
- **Publisher:** American Geophysical Union (AGU)
- **DOI (version of record):** [https://doi.org/10.1029/2023jb026729](https://doi.org/10.1029/2023jb026729)
- **This page:** https://ddempsey.github.io/papers/2023-ardid-template-matching-detect-hidden-fluid/
- **Open PDF:** [https://ddempsey.github.io/papers/2023-ardid-template-matching-detect-hidden-fluid/ardid2023-template-matching-detect.pdf](https://ddempsey.github.io/papers/2023-ardid-template-matching-detect-hidden-fluid/ardid2023-template-matching-detect.pdf) (Published version)
- **Full text (Markdown):** [https://ddempsey.github.io/papers/2023-ardid-template-matching-detect-hidden-fluid/fulltext.md](https://ddempsey.github.io/papers/2023-ardid-template-matching-detect-hidden-fluid/fulltext.md)
- **Notice:** Published version, posted under AGU's author self-archiving policy. © 2023 American Geophysical Union. All Rights Reserved. Version of record: https://doi.org/10.1029/2023jb026729
- **Explainer:** all explainers on this site are AI-generated and human-checked.
- **BibTeX:** https://ddempsey.github.io/papers/2023-ardid-template-matching-detect-hidden-fluid/citation.bib
- **Topics:** Volcanoes & eruption forecasting; Induced seismicity & faults; Geothermal systems
- **Keywords:** Impact crater; Geology; Volcano; Hydrothermal circulation; Seismology; Electrical conduit; Petrology; Induced seismicity

## In brief

We searched Ruapehu seismic data from 2006 to 2021 for a tremor pattern seen before the 2019 Whakaari eruption. We then looked for a tremor peak and exponential decay after each match. Six events passed, including a 2009 event that we classify as a fluid release into the crater lake.

- We matched four weeks of a tremor ratio recorded before the 2019 Whakaari eruption against Ruapehu data from 2006 to 2021, then applied three further checks.
- Six Ruapehu events passed, including the 2006 and 2007 eruptions, but only the 2006, 2007 and 2009 events are corroborated by a disturbance at the surface.
- We classify a 2009 tremor spike that coincided with a sudden 0.2 m lake-level rise as a fluid release, likely too small to count as an eruption.
- Tremor after the 2006 and 2007 eruptions decayed exponentially, with discharge times of about 10 to 40 hours, consistent with a draining reservoir in our model.
- Template matching alone is not sufficient to forecast eruptions, because two of our checks use data recorded during and after an event.

## The problem

Some active volcanoes hold a lake in their crater, above the vent. Eruptions that break through such
a lake can usually be detected by sight or by acoustic sensors (Edwards et al., 2017; Scott, 2013).
However, smaller jets of hydrothermal fluid released into the lake may go unnoticed (Montanaro et
al., 2022), although they may still pose a risk to people near the summit. Detecting these small
jets would provide observations of how often a seal forms and fails below the lake.

Ruapehu, in New Zealand, has a crater lake about 400 m across that holds roughly 10 million cubic
metres of water. Our goal was to find seismic signs of a seal forming below this lake, followed by a
release of fluid into its base.

## What we did

We used seismic data from 2006 to 2021, recorded at one station about 3 km from the crater. After
removing earthquake signals from the record, we measured volcanic tremor in three frequency bands: 2
to 5 hertz (Hz, vibrations per second), 4.5 to 8 Hz and 8 to 16 Hz. The average tremor amplitude in
the 2 to 5 Hz band is called the real-time seismic amplitude measurement (RSAM). The displacement
seismic amplitude ratio (DSAR) is the ratio of ground displacement in the middle band to that in the
high band. We took its median over rolling 48-hour windows.

At Whakaari (White Island), this median rose over several weeks before the 2019 eruption. Ardid et
al. (2022) suggested that the rise reflected a low-permeability seal forming over the hydrothermal
system. In that interpretation, the seal suppresses the shallow fluid movement that generates
high-frequency tremor. We used the four weeks of DSAR median before that eruption as a template. We
flagged every four-week period of the Ruapehu record whose correlation coefficient with the template
exceeded 0.3, the top 5% of all correlations. We kept a flagged period only if (1) RSAM peaked more
than three standard deviations above its mean near the match, (2) the middle band stayed above the
high band in the days before the peak, to exclude noise from ski fields, rain and wind, and (3) RSAM
decayed exponentially in the following 24 hours.

The third check is based on the RSAM decay after the 2006 and 2007 eruptions. We compared it with a
simple model of a pressurised reservoir draining into the lake through a permeable pathway. As fluid
leaves, reservoir pressure falls and the discharge rate declines exponentially. Girona et al. (2019)
showed, in a physical model, that tremor amplitude is proportional to degassing rate. We assumed
that RSAM after a release is proportional to the discharge rate.

## What we found

At Ruapehu, six events passed every check. Two are the 2006 and 2007 eruptions. A third, in 2009,
was described as phreatic activity by the GeoNet monitoring network (Scott, 2013). The other three,
in 2010, 2016 and 2021, were to our knowledge unreported and have no corroborating disturbance at
the surface. However, each coincided with a regional earthquake and with rain storms. Rain-driven
changes in lake level make these events difficult to confirm from lake-level data.

We classified the 2009 event as a fluid release because it was likely too small to count as an
eruption. In the month before, lake level and temperature rose and then stabilised while the DSAR
median increased. This is consistent with a seal restricting the entry of hot fluid into the lake.
The event appeared as a spike in RSAM and a sudden rise in lake level of about 0.2 m, roughly 20,000
cubic metres. By our arithmetic, that is about 0.2% of the lake's volume.

After the 2006 and 2007 eruptions, RSAM decayed with discharge times of about 10 to 40 hours. The
shortest among all the Ruapehu events was 12 hours. In the model, a 12-hour discharge time leaves
tremor at about 14% of its peak after 24 hours, as our illustration below shows.

<div class="widget" id="w-discharge-decay" role="group" aria-label="Illustration of exponential tremor decay after a fluid release, for a chosen discharge time"></div>

At Kawah Ijen in Indonesia we found three potential events in about 2.7 years of data. At Copahue,
on the border of Chile and Argentina, four small ash-producing eruptions were reported during a
9-month record, and we identified three of them. Both records were noisier than Ruapehu's.

These observations are consistent with a conceptual model of pressure cycling below an active crater
lake. In this model, a seal forms at the top of the hydrothermal system and pressure builds in the
fluid trapped beneath it. When the seal is disrupted, fluid is released into the lake at a rate that
declines over hours to days. We suggest that many of these releases do not produce a phreatic
eruption.

## Limitations

Our method is unlikely to find all events, because it assumes they resemble the Whakaari template
and develop over about a week. The link between tremor and discharge rate is also an assumption.
Frequent gas-flux measurements in the crater could test it.

Two of our checks use the RSAM peak and its decay. Both are recorded only during and after an event.
Template matching alone is therefore not sufficient for accurate forecasting. We have set up a
system that applies the template matching to Ruapehu in real time, every 10 minutes. It could help
track possible sealing events, although a sealing event can dissipate through passive outgassing
without an eruption. We will evaluate its performance over the next few years.

## Glossary

A **crater lake** is a body of water, often warm, acidic and saline, that forms in the crater of an
active volcano.

A **hydrothermal system** is hot water and gas circulating through rock, here between the magma
column below and the crater lake above.

A **phreatic eruption** is an explosive release of pressurised hydrothermal fluid, such as the 2006
and 2007 Ruapehu eruptions.

A **hydrothermal seal** is a low-permeability layer that restricts the flow of gas and water toward
the surface.

**Permeability** measures how easily fluid flows through rock.

**Volcanic tremor** is continuous low-level shaking of the ground at an active volcano.

**RSAM (real-time seismic amplitude measurement)** is the average tremor amplitude in the 2 to 5 Hz
band over 10-minute windows.

The **displacement seismic amplitude ratio (DSAR)** is the ratio of ground displacement in the 4.5
to 8 Hz band to that in the 8 to 16 Hz band.

A **template** is a reference segment of a record, searched for elsewhere by matching its shape.

A **standard deviation** measures the typical spread of values around their mean.

A **correlation coefficient** measures how similar two curves are in shape, equal to 1 for the same
shape and near 0 for unrelated curves.

**Exponential decay** is a decline by the same fraction in each equal interval of time.

The **discharge time** is the time over which the discharge rate, and in our model RSAM, falls to
about 37% of its starting value.

## Abstract

Volcano crater lakes, while picturesque, can sometimes mask the occurrence of small eruptions or hydrothermal fluid release events. However, these seemingly hidden events hold a wealth of valuable information about the underlying volcanic conduit and may pose risks to those near the volcano’s summit. This study presents a novel method for identifying these hard‐to‐detect fluid release events by examining seismic data from Ruapehu volcano in New Zealand. We undertake a multi‐timescale template‐matching analysis that uses a newly discovered seismic eruption precursor, to identify patterns related to the rapid consolidation of hydrothermal seals, pressurization processes, and the subsequent release of hydrothermal fluids. As a result, we identified a potential instance of sudden fluid‐release events that were previously unnoticed due to the presence of the crater lake. Our findings support a conceptual model of cyclic pressure variation within the conduit beneath an active crater lake. This model involves the formation and disruption of seals, followed by depressurization through hydrothermal fluid release events. Fluid discharge recession recorded as seismic amplitude decay, provides information about the properties of the reservoir, conduit, and the fluid being discharged. We also applied this technique to Kawah‐Ijen (Indonesia) and Copahue (Chile‐Argentina), identifying multiple potential events at these volcanoes. These findings enhance our understanding of the conditions leading to explosive eruptions, including those that could breach the crater lake.

## Cite

Ardid, A., Dempsey, D., Caudron, C., Cronin, S. J., Miller, C. A., Melchor, I., Syahbana, D., Kennedy, B. (2023). Using Template Matching to Detect Hidden Fluid Release Episodes Beneath Crater Lakes in Ruapehu, Copahue, and Kawah Ijen Volcanoes. Journal of Geophysical Research: Solid Earth, 128(10), e2023JB026729. https://doi.org/10.1029/2023jb026729

```bibtex
@article{ardid2023template,
  title = {Using Template Matching to Detect Hidden Fluid Release Episodes Beneath Crater Lakes in Ruapehu, Copahue, and Kawah Ijen Volcanoes},
  author = {Ardid, A. and Dempsey, D. and Caudron, C. and Cronin, S. J. and Miller, C. A. and Melchor, I. and Syahbana, D. and Kennedy, B.},
  journal = {Journal of Geophysical Research: Solid Earth},
  year = {2023},
  volume = {128},
  number = {10},
  pages = {e2023JB026729},
  publisher = {American Geophysical Union (AGU)},
  doi = {10.1029/2023jb026729},
  url = {https://ddempsey.github.io/papers/2023-ardid-template-matching-detect-hidden-fluid/}
}
```