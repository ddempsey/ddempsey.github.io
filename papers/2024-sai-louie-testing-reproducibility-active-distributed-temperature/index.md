# Testing the reproducibility of active-distributed temperature sensing for measuring groundwater specific discharge beneath a braided river

- **Authors:** Alice J. Sai Louie; Leanne K. Morgan; Eddie W. Banks; David Dempsey; Scott Wilson (ORCID 0000-0002-9212-2026)
- **Journal:** Journal of Hydrology, vol. 633, pp. 130877 (2024)
- **Publisher:** Elsevier BV
- **DOI (version of record):** [https://doi.org/10.1016/j.jhydrol.2024.130877](https://doi.org/10.1016/j.jhydrol.2024.130877)
- **This page:** https://ddempsey.github.io/papers/2024-sai-louie-testing-reproducibility-active-distributed-temperature/
- **Open PDF:** [https://ddempsey.github.io/papers/2024-sai-louie-testing-reproducibility-active-distributed-temperature/sai-louie2024-louie-testing-reproducibility.pdf](https://ddempsey.github.io/papers/2024-sai-louie-testing-reproducibility-active-distributed-temperature/sai-louie2024-louie-testing-reproducibility.pdf) (Published version)
- **Full text (Markdown):** [https://ddempsey.github.io/papers/2024-sai-louie-testing-reproducibility-active-distributed-temperature/fulltext.md](https://ddempsey.github.io/papers/2024-sai-louie-testing-reproducibility-active-distributed-temperature/fulltext.md)
- **Notice:** Published version, reproduced under the CC BY 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1016/j.jhydrol.2024.130877
- **Explainer:** all explainers on this site are AI-generated.
- **BibTeX:** https://ddempsey.github.io/papers/2024-sai-louie-testing-reproducibility-active-distributed-temperature/citation.bib
- **Topics:** Groundwater & hydrology
- **Keywords:** Reproducibility; Groundwater; Hydrology (agriculture); Geology; Environmental science; Soil science

## In brief

We heated a 100 m fibre optic cable beneath New Zealand's Waikirikiri-Selwyn River twelve times in 24 hours. The median groundwater flow of each survey lay between 3.5 and 4.0 m per day, within the measurement error of the method. Repeat surveys could therefore measure seasonal changes in river loss.

- Twelve 2-hour heating surveys ran over 24 hours in September 2022, while river discharge ranged from 4.02 to 4.29 m³/s and shallow groundwater levels changed by less than 6 mm.
- The median specific discharge of each survey lay between 3.5 and 4.0 m/d, within the 6% measurement error of the installation.
- The twelve repeated surveys together had an absolute error of 0.09 m/d, against up to 0.44 m/d for a single survey.
- Spatial variability in groundwater flow along the cable exceeded the measurement error.
- Absolute flow depends on the assumed distance between heating wires and optical fibres. Across the combinations tested for one survey, average flow ranged from 0.6 to 18.1 m/d.

## The problem

River loss, the water that rivers lose to the aquifers beneath them, is a major
source of groundwater recharge at the global scale (Döll and Fiedler, 2008). The
braided Wairau River in New Zealand's South Island, for example, supplies about
94% of the recharge to the Wairau aquifer, which is used for irrigation and
drinking water (Wöhling et al., 2018). Uncertain estimates of river loss make it
harder to decide how much water can be allocated (Close et al., 2014). Existing
methods often assume that water passes uniformly through the riverbed. This
assumption does not hold in braided rivers (Becker, 2004; Xie et al., 2016).

Active-distributed temperature sensing (A-DTS) is one alternative. A fibre optic
cable records temperature every 0.25 m along its length, while copper wires
inside the same cable heat it. The cable warms less when groundwater flowing
past it removes heat faster. Banks et al. (2022) buried such a cable beneath the
braided Waikirikiri-Selwyn River in Canterbury and used a single survey to
estimate river loss. Before repeat surveys can be used to measure how river loss
changes through time, we need to know whether a change in flow can be
distinguished from measurement error. This had not been tested in a natural
field setting. In this study, we test it at the same site.

## What we did

The cable is about 100 m long and lies about 5 m below the two main channels of
the river, perpendicular to the flow. The manufacturer did not give the distance
between the heating wires and the optical fibres, which enters the calculation
of flow. So we cut twelve short lengths of the cable and measured that distance
under a microscope: 0.7 mm.

Over 24 hours on 2 and 3 September 2022, we ran twelve surveys. Each 2-hour
survey heated the cable for one hour at 15 W/m (watts per metre), and then let
it cool. Over the 100 m cable, this is about 1.5 kilowatts (kW) (our arithmetic). We ran the surveys while river flow was stable, so that their
spread would show the reproducibility of the method. River discharge ranged from
4.02 to 4.29 m³/s (cubic metres per second), and shallow groundwater levels
changed by less than 6 mm.

We then fitted a moving instantaneous line source (MILS) model to the warming
curve every 0.25 m along the cable. This model describes heat spreading from a
line heater into moving groundwater. The fit gives the specific discharge, the
groundwater flow rate per unit area, in metres per day (m/d). We estimated the
thermal conductivity of the gravels from the first survey and held it fixed for
the other eleven. Any difference between surveys is therefore attributed to a
change in flow.

## What we found

The median specific discharge of each survey lay between 3.5 and 4.0 m/d, and
the average over the 24 hours was 3.8 m/d. That is about 3,800 litres of groundwater crossing each square metre of riverbed each day (our
conversion). The spread of the medians lies within the measurement
error of the method, about 6% of the specific discharge. Repeating the survey
appears to reduce the uncertainty. A single survey was uncertain by up to 0.44
m/d, against 0.09 m/d for the twelve surveys together. Flow varied along the
cable by more than the measurement error.

Over the 72 m of wetted riverbed, 3.8 m/d equates to a river loss of 274,000 m³
per day per kilometre of river. Data from a survey in February 2021 (Banks et
al., 2022) give about 38% less, because the wetted riverbed was narrower (60 m)
and the average flow lower (2.8 m/d). This difference likely reflects seasonal
variation in river loss.

<div class="widget" id="w-adts-sensitivity" role="group" aria-label="Interactive comparison of average groundwater flow from the sixth survey for different assumed distances between heater and fibres and different thermal conductivities"></div>

We are more confident in the repeatability of the flow estimates than in their
absolute values. The MILS model assumes a line heat source, and the complex
geometry of the cable does not match it. An effective distance
between heater and fibres must therefore be assumed. Our main results use 1.8
mm, the value a sensitivity analysis of the sixth survey identified as
optimal. That
survey averages 3.8 m/d with 1.8 mm and 1.5 m/d with the measured 0.7 mm. Across
the combinations of distance and thermal conductivity tested, the average
ranged from 0.6 to 18.1 m/d. This is a thirty-fold spread, by our calculation.
However,
the relative error was almost the same for both distances, 6.0% with 1.8 mm and
6.1% with 0.7 mm.

## Limitations

We could not quantify the skin effect, the extra warming caused by the low
thermal conductivity of the cable and its immediate surroundings. The thermal
conductivity from the model also combines the properties of the cable materials,
the region around the cable and the gravels. Our model values were lower than
laboratory measurements on core from the site. The cable's polypropylene jacket
conducts heat poorly and is likely to contribute to this difference.

The model assumes vertical flow only, perpendicular to the cable. Flow beneath
braided rivers is likely more complex than this. Our estimates appear to follow
the shape of the riverbed. The measured flow may be recharge from the river, flow within the gravels, or discharge back to the
river.

Relative comparisons between surveys remain feasible despite the uncertain
effective distance. We expect that repeat surveys under different river
conditions, ideally with river flow gauged at the same time, would allow the
seasonal variation of recharge from braided rivers to be quantified.

## Glossary

**Groundwater recharge** is water that enters an aquifer, here from the river
above.

An **aquifer** is a body of permeable rock or sediment that holds and transmits
groundwater.

**River loss** is the water a river loses through its bed to the ground beneath.

A **braided river** has many interconnected channels separated by gravel bars.

**Active-distributed temperature sensing (A-DTS)** measures temperature along a
fibre optic cable while the cable is heated.

**Specific discharge** is the volume of groundwater crossing a unit area per
unit time, in metres per day (m/d).

**Thermal conductivity** is a measure of how readily a material conducts heat.

The **MILS model** is a mathematical solution for the temperature around a line
heat source in moving groundwater.

The **skin effect** is the temperature rise caused by the low thermal
conductivity of the cable and the material immediately around it.

**Wetted riverbed** is the part of the riverbed under water, here 72 m wide
along the cable.

A **watt per metre (W/m)** is the heating power applied to each metre of cable.

## Abstract

Braided rivers are a major contributor of groundwater recharge, yet little is known about how recharge rates vary in time. Existing methods for estimating groundwater recharge from rivers (i.e., river loss) are inadequate for studying highly heterogeneous braided river systems at a sufficient spatiotemporal resolution. To do so, active-distributed temperature sensing (A-DTS) is employed, which combines fibre optic temperature measurements with an active heat source, enabling high-resolution quantification of water fluxes. In this study, twelve successive A-DTS surveys were conducted during a 24-hour experiment on a 100 m horizontal subsurface hybrid fibre optic cable installed at 5 m depth beneath a braided river. The experiment was carried out under conditions where the river stage and flow were relatively stable to demonstrate the reproducibility and effectiveness of the A-DTS method for measuring groundwater specific discharge. This foundational work will provide a high level of confidence in the method for future studies aimed at evaluating temporal variations in groundwater recharge. The median groundwater specific discharge values calculated over the 24-hour period had a very narrow range from 3.5 to 4.0 m/d across the wetted footprint of the river, which is within the measurement error of the installation (6 %), indicating relatively stable groundwater recharge during the experiment. This provides confidence in the repeatability of the A-DTS method as an effective technology for quantifying river loss over longer time periods, to understand seasonal variability of groundwater recharge in braided river systems.

## Cite

Sai Louie, Alice J., Morgan, Leanne K., Banks, Eddie W., Dempsey, David, Wilson, Scott (2024). Testing the reproducibility of active-distributed temperature sensing for measuring groundwater specific discharge beneath a braided river. Journal of Hydrology, 633, 130877. https://doi.org/10.1016/j.jhydrol.2024.130877

```bibtex
@article{sailouie2024louie,
  title = {Testing the reproducibility of active-distributed temperature sensing for measuring groundwater specific discharge beneath a braided river},
  author = {Sai Louie, Alice J. and Morgan, Leanne K. and Banks, Eddie W. and Dempsey, David and Wilson, Scott},
  journal = {Journal of Hydrology},
  year = {2024},
  volume = {633},
  pages = {130877},
  publisher = {Elsevier BV},
  doi = {10.1016/j.jhydrol.2024.130877},
  url = {https://ddempsey.github.io/papers/2024-sai-louie-testing-reproducibility-active-distributed-temperature/}
}
```