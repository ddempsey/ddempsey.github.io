# Preferential seawater intrusion in a heterogeneous alluvial aquifer that extends offshore: Insights from numerical modeling

- **Authors:** Connor A. Cleary (ORCID 0009-0001-0958-6103); Theo S. Sarris (ORCID 0000-0002-1429-2185); Leanne K. Morgan (ORCID 0000-0003-1616-8839); David E. Dempsey
- **Journal:** Journal of Hydrology, vol. 661, pp. 133455 (2025)
- **Publisher:** Elsevier BV
- **DOI (version of record):** [https://doi.org/10.1016/j.jhydrol.2025.133455](https://doi.org/10.1016/j.jhydrol.2025.133455)
- **This page:** https://ddempsey.github.io/papers/2025-cleary-preferential-seawater-intrusion-heterogeneous-alluvial/
- **Open PDF:** [https://ddempsey.github.io/papers/2025-cleary-preferential-seawater-intrusion-heterogeneous-alluvial/cleary2025-preferential-seawater-intrusion.pdf](https://ddempsey.github.io/papers/2025-cleary-preferential-seawater-intrusion-heterogeneous-alluvial/cleary2025-preferential-seawater-intrusion.pdf) (Published version)
- **Full text (Markdown):** [https://ddempsey.github.io/papers/2025-cleary-preferential-seawater-intrusion-heterogeneous-alluvial/fulltext.md](https://ddempsey.github.io/papers/2025-cleary-preferential-seawater-intrusion-heterogeneous-alluvial/fulltext.md)
- **Notice:** Published version, reproduced under the CC BY 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1016/j.jhydrol.2025.133455
- **Explainer:** all explainers on this site are AI-generated and human-checked.
- **BibTeX:** https://ddempsey.github.io/papers/2025-cleary-preferential-seawater-intrusion-heterogeneous-alluvial/citation.bib
- **Topics:** Groundwater & hydrology
- **Keywords:** Submarine pipeline; Geology; Alluvium; Seawater; Groundwater; Hydrology (agriculture); Intrusion; Geotechnical engineering

## In brief

We modelled seawater moving inland through a gravel aquifer beneath the Canterbury coast. In our model, seawater moved preferentially through high-conductivity gravel. In places, the salt/fresh water interface moved more than five times faster than a uniform model with dispersion predicts.

- In 25 model realisations of a Canterbury coastal aquifer, the steady salt/fresh water interface lay around 1,500 m offshore on average.
- After 100 years with the onshore groundwater head lowered to 1 m below the offshore head, the interface reached the shoreline in half the realisations.
- Intrusion appeared greatest where there were connected pathways of high conductivity, and its rate varied along the coast.
- On average, the interface moved two to four times faster than a uniform model without dispersion predicts, and up to twice as fast as one with dispersion.
- At its fastest points along the coast, the interface in many realisations moved more than five times faster than the uniform model with dispersion.

## The problem

Over one billion people living near coasts depend on groundwater (Ferguson and
Gleeson, 2012; Zamrsky et al., 2024). When groundwater levels on land fall far
enough, the hydraulic gradient at the coast slopes landward and seawater moves
into the aquifer. This active seawater intrusion causes the most severe
salinisation of onshore groundwater (Badaruddin et al., 2017; Werner, 2017).

The confined gravel aquifers of the Central Canterbury Plains supply drinking
water to Christchurch. The city abstracts around 50 million cubic metres of
groundwater a year (Stewart and van der Raaij, 2022), and confined-aquifer
levels have been as low as 1.5 m below sea level (Scott and Wilson, 2012).
However, there is no evidence of extensive seawater intrusion, most likely
because fresh groundwater extends offshore (Knight et al., 2018).

The Canterbury gravels contain open framework gravel deposits, which make up
1% to 20% of the aquifer (Dann et al., 2008; Burbery et al., 2018; Sarris et
al., 2018). Such spatial variation in hydraulic conductivity, called
heterogeneity, has been found to increase intrusion rates under pumping in
fluvio-deltaic (Yu and Michael, 2019a) and volcanic (Geng and Michael, 2020)
aquifers. However, no earlier study had examined its effect on active seawater
intrusion in alluvial aquifers. In this study, we quantify that effect.

## What we did

We built 25 realisations of a confined coastal aquifer based on the Central
Canterbury Plains. Each has a 20 m thick aquifer beneath a 20 m thick
aquitard. We distributed three hydrofacies with a transition probability
method based on drillers' logs (Sarris et al., 2023). Clean gravel, which
represents clusters of open framework gravel, makes up about 15% of the
aquifer and has an average hydraulic conductivity of 500 m/day. Sandy gravel
makes up 30% at 60 m/day. Clay-bound gravel and sand make up the remaining 55%
at 4 m/day.

We simulated variable-density groundwater flow, in which density increases
with salt concentration, with MODFLOW6 (Langevin et al., 2020), and salt
transport with the same code (Hughes et al., 2017). Each run first held the
onshore head 0.75 m above the offshore head until steady state. We then
lowered the onshore head to 1 m below the offshore head for 100 years. We
defined the interface at 1% of the salinity of seawater, the concentration at
which groundwater may become undrinkable (Ministry of Health, 2018).

We compared the results with two equivalent homogeneous models, each with a
uniform conductivity equal to the effective value of the heterogeneous
aquifer, around 50 m/day. The advective model uses analytical solutions, with
a sharp interface and no dispersion. The advective-dispersive model is a
two-dimensional numerical model.

## What we found

At steady state, the interface lay around 1,500 m offshore on average. In one
realisation it came within 100 m of the shoreline, and in another it lay more
than 2,500 m offshore.

Over 100 years of intrusion, the interface moved landward in every
realisation. It reached the shoreline in half of them, and the inland model
boundary in a quarter. Intrusion varied along the coast and appeared greatest
along connected pathways of high conductivity. We hypothesise that connected
areas of clean gravel and sandy gravel form these pathways. However, the
average rate of interface movement did not correlate strongly with a
percolation metric of how well the high-conductivity facies connect (Renard
and Allard, 2013).

<div class="widget" id="w-swi-ensemble" role="group" aria-label="Interactive summary of where the salt/fresh water interface lies in the 25 realisations, and how fast it moved compared with two uniform models"></div>

On average, the interface in the heterogeneous realisations moved two to four
times faster than in the advective model, and up to twice as fast as in the
advective-dispersive model. At its fastest point along the coast, it moved
more than five times faster than the advective-dispersive model in many
realisations. Methods that assess vulnerability to intrusion from hydraulic
conductivity, such as GALDIT (Ferreira and Chachadi, 2005), should therefore
also consider preferential flow in alluvial aquifers.

At a hypothetical monitoring well on the shoreline, salinity passed 0.35 PSU
(practical salinity units) after 20 years in one realisation and 40 years in
another, and in no other realisation until after 90 years. Denser coastal
monitoring networks may be required to detect such intrusion (Werner et al.,
2013).

The conductivity contrast between our most and least conductive facies is
about 100 times. Earlier models of fluvio-deltaic (Yu and Michael, 2019a) and
volcanic (Geng and Michael, 2020) aquifers used contrasts of 10⁹ and 10⁵
times. Preferential intrusion still occurred at our lower contrast. This
indicates that heterogeneity should be considered in alluvial aquifers, even
where the interface lies offshore.

## Limitations

Our modelled aquifer extends 4 km offshore, while the aquifers it represents
extend more than 30 km. In a longer aquifer, the steady interface could lie
further offshore. It would then have further to move before salinising onshore
groundwater. If preferential flow paths are shorter than 4 km, intrusion rates
over longer distances may be lower on average. Our geological data come from
around 40 km inland, where aquifers are more permeable and the depositional
environment may differ. We induced intrusion by lowering the onshore head. We
would expect more severe preferential intrusion under more focused
abstraction, such as pumping.

Larger coastal models typically use cells about 10 times larger than ours
(Thomas et al., 2019; Micallef et al., 2020; Michael et al., 2016). To
reproduce preferential intrusion, these models need an upscaling method, a way
of representing small-scale variation in conductivity within large cells. Dual
porosity models may provide one, because they can better reproduce transport
through preferential flow paths (Baratelli et al., 2011, 2014; Bianchi and
Zheng, 2016).

## Glossary

An **aquifer** is a layer of rock or sediment that holds and yields usable
groundwater.

A **confined aquifer** is an aquifer overlain by a layer of low permeability,
called an **aquitard**, that restricts flow into and out of it.

**Alluvial** sediments are gravels, sands and silts laid down by rivers.

**Fluvio-deltaic** sediments are those laid down by rivers where they enter
the sea.

**Hydraulic conductivity** is a measure of how easily water flows through a
sediment, here given in metres per day (m/day).

**Effective hydraulic conductivity** is the single value that gives the same
total flow through a heterogeneous aquifer.

The **head** is the level to which groundwater would rise in a well, and the
**hydraulic gradient** is the slope of the head.

**Seawater intrusion** is the movement of seawater into a coastal aquifer.

The **salt/fresh water interface** is the boundary between fresh and salty
groundwater, defined here as 1% of the salinity of seawater.

**Open framework gravel deposits** are gravel deposits up to 100 times more
conductive than the gravel around them.

A **hydrofacies** is a category of sediment with similar hydraulic properties.

A **transition probability method** builds a geological model from the
probability that one hydrofacies is followed by another at a given distance.

A **realisation** is one of many equally likely versions of a model, each with
a different arrangement of hydrofacies.

An **analytical solution** is a calculation made from mathematical formulas,
without numerical simulation.

**MODFLOW6** is a computer code that simulates groundwater flow and salt
transport.

A **steady state** is a condition in which flow and salinity no longer change
with time.

An **equivalent homogeneous model** represents a heterogeneous aquifer with a
single, uniform conductivity.

**Advective** transport is the movement of salt with the average flow of
groundwater.

**Dispersion** is the spreading of salt by small-scale variations in flow
velocity and by molecular diffusion.

A **preferential flow path** is a connected route of high conductivity along
which groundwater moves faster than through the surrounding sediment.

**PSU** (practical salinity unit) is a unit of salinity.

**GALDIT** is a method for assessing how vulnerable an aquifer is to seawater
intrusion.

A **dual porosity model** divides an aquifer into a mobile, fast-flowing part
and a less mobile part that exchange salt.

## Abstract

Coastal groundwater resources face mounting pressure under sea-level rise and population growth. Under active seawater intrusion (SWI), where the coastal hydraulic gradient slopes landward, onshore groundwater resources will eventually be salinized. This study aims to expand the limited understanding of the influence of alluvial aquifer heterogeneity on the rate and characteristics of active SWI. Using the Central Canterbury Plains aquifer system in New Zealand as an example, we simulated active SWI conditions caused by a decrease in onshore groundwater head. We considered 25 realizations of a 3D heterogeneous confined coastal aquifer that extends offshore. Salinization patterns in the heterogeneous aquifers are influenced by preferential flow through high hydraulic conductivity gravel deposits. Our results indicate that movement of the salt/fresh water interface was up to ten times faster than expected from an analytical model that uses the effective hydraulic conductivity of the aquifer, or in an equivalent homogeneous model that included the effects of dispersion. The rate of interface movement also varied spatially along the width of the aquifer. While similar findings have been observed in models of coastal volcanic and fluvio-deltaic aquifers, the hydraulic conductivity contrasts in the alluvial aquifer models studied here are much lower. Our results indicate that aquifer heterogeneity should be carefully considered when studying SWI in alluvial settings, even when the salt/fresh water interface is located offshore. If the heterogeneity of a coastal alluvial aquifer is overlooked, salinization of onshore groundwater under seawater intrusion may occur considerably earlier than expected.

## Cite

Cleary, Connor A., Sarris, Theo S., Morgan, Leanne K., Dempsey, David E. (2025). Preferential seawater intrusion in a heterogeneous alluvial aquifer that extends offshore: Insights from numerical modeling. Journal of Hydrology, 661, 133455. https://doi.org/10.1016/j.jhydrol.2025.133455

```bibtex
@article{cleary2025preferential,
  title = {Preferential seawater intrusion in a heterogeneous alluvial aquifer that extends offshore: Insights from numerical modeling},
  author = {Cleary, Connor A. and Sarris, Theo S. and Morgan, Leanne K. and Dempsey, David E.},
  journal = {Journal of Hydrology},
  year = {2025},
  volume = {661},
  pages = {133455},
  publisher = {Elsevier BV},
  doi = {10.1016/j.jhydrol.2025.133455},
  url = {https://ddempsey.github.io/papers/2025-cleary-preferential-seawater-intrusion-heterogeneous-alluvial/}
}
```