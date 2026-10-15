# Techno-Economic feasibility of enhanced geothermal systems (EGS) with partially bridging Multi-Stage fractures for district heating applications

- **Authors:** Pengliang Yu; David Dempsey; Rosalind Archer
- **Journal:** Energy Conversion and Management, vol. 257, pp. 115405 (2022)
- **Publisher:** Elsevier BV
- **DOI (version of record):** [https://doi.org/10.1016/j.enconman.2022.115405](https://doi.org/10.1016/j.enconman.2022.115405)
- **This page:** https://ddempsey.github.io/papers/2022-yu-techno-economic-feasibility-enhanced-geothermal/
- **Open copy:** none posted yet; use the DOI.
- **Explainer:** all explainers on this site are AI-generated and human-checked.
- **BibTeX:** https://ddempsey.github.io/papers/2022-yu-techno-economic-feasibility-enhanced-geothermal/citation.bib
- **Topics:** Induced seismicity & faults; Geothermal systems
- **Keywords:** Geothermal gradient; Petroleum engineering; Bridging (networking); Offset (computer science); Environmental science; Heating system; Economic feasibility

## In brief

We modelled a geothermal heating scheme that forces water through fractured hot rock between two horizontal wells. In a modelled case study at Qiabuqia, China, a 14-fracture design gave a median profit of USD 110 million over 20 years, with a 95% range of USD 24 to 185 million.

- In our model, the permeability of the rock between fractures and the reservoir temperature were the main controls on profitability, with smaller effects from depth and fracture number.
- With other parameters at benchmark values, projects below 120 °C or below 0.4 mD of rock permeability did not return a profit within 20 years.
- Adding fractures along a fixed well length gave diminishing returns, with almost no extra heat output at 16 to 20 fractures.
- At Qiabuqia, a 14-fracture design gave the highest profit, with a median heat output of 52.4 MW sustained over 20 heating seasons.
- In the most favourable permeability case, the 14-fracture design could heat up to 2.8 km² of floor space and displace more than 1.5 million tonnes of CO2 over 20 years.

## The problem

Hot rock a few kilometres underground could heat homes in winter and displace
coal. Where the permeability of this rock, the ease with which fluid flows
through it, is too low, water cannot circulate. An enhanced geothermal system
(EGS) creates flow paths by hydraulic fracturing, the injection of water at
high pressure to crack the rock. Drilling and stimulation (fracturing) exceed
75% of the cost of medium- and low-grade EGS, those with poorer geothermal
resources (Lukawski et al., 2014; Tester, 2006).

A common design joins two parallel horizontal wells with vertical fractures
that cross from one well to the other (Gringarten et al., 1975). Most of the
injected water then flows only through the fractures. This limits the volume of
rock that is cooled and causes early thermal breakthrough, the time when cold
water reaches the production well (Li et al., 2016; Yu et al., 2021). We
previously proposed a partially bridging design (Yu et al., 2021). Each
fracture connects to only one well, and injection and production fractures
alternate along the wells. Water must then cross the rock between fractures,
the stimulated reservoir volume (SRV). Our goal in this study was to test
whether this design could supply district heating at a profit.

## What we did

We modelled the reservoir and wells with the heat and mass transfer simulator
FEHM. Two horizontal wells, 300 m apart, at depths of 1 to 5 km were joined by
4 to 20 fractures. Each year had a 120-day heating season and 240 days of
shut-in, with the wells closed, over a 20-year life. A binary search found the
highest constant heat output, in megawatts (MW), that the reservoir could
sustain for 20 years. Our economic model costed exploration, drilling,
fracturing (USD 0.75 million per fracture), surface plant, and operation and
maintenance, paid for with a loan at 5.48% interest. Income came from the floor
area heated, under a Chinese design code for district heating. We converted the
heat to the coal and CO2 it would displace.

Because each simulation took several days, we ran 25 simulations in a
Box-Behnken design, which varies four parameters together: temperature (100 to
300 °C), depth (1 to 5 km), SRV permeability (0.1 to 10 millidarcies, mD) and
fracture number (4 to 20). We fitted a polynomial surrogate model to the
results (R² of 0.997) and checked it against 12 further simulations.

## What we found

We find that SRV permeability and reservoir temperature are the main controls
on profitability in our model. With other parameters at benchmark values (250
°C, 3000 m, 3 mD and 10 fractures), heat output rose roughly linearly with
temperature and profit increased. Below 120 °C, or below 0.4 mD, the project
did not repay its investment within 20 years. The levelised cost of heat (LCOH)
ranged from USD 30 to 250 per megawatt-hour (MWh) across the permeabilities
tested.

Deeper reservoirs gave more heat output and more profit, with diminishing
returns. Deeper rock can take a higher injection pressure without the fractures
growing. Higher pressure drives more flow through the rock. However, drilling
costs rise quadratically with depth. The shortest time to profit, about 8.5
years, came at 4000 m.

Adding fractures also gave diminishing returns. This is because more fractures
along a fixed well length add entry and exit points without adding rock. Water
then takes a shorter path through the rock and is heated less. At 16 to 20
fractures, each added fracture gave almost no extra heat output while
stimulation costs continued to increase.

At the Qiabuqia field in China, drill core gave permeabilities of 0.26 to 0.7
mD (Lei et al., 2020). We assumed 218 °C at 3600 m (Lei et al., 2020). In the
surrogate model, 14 fractures gave the highest profit. Because the SRV
permeability is unknown, we sampled it 20,000 times from a distribution with a
mean of 1 mD, assuming that stimulation raises permeability by up to a factor
of ten above the core values. The median heat output was 52.4 MW (95% interval
33.6 to 73.2 MW), the median LCOH was USD 46.7/MWh (33.0 to 84.6) and the
median profit was USD 110 million (24 to 185 million).

In the most favourable permeability case, the 14-fracture design could heat up
to 2.8 km² of floor space, about 28,000 dwellings of 100 m². Over 20 years it
would displace nearly 600,000 tonnes of coal and more than 1.5 million tonnes
(Mt) of CO2. However, the SRV permeability at Qiabuqia is unknown. In our
model, the viability of the project depends on it.

<div class="widget" id="w-egsheat" role="group" aria-label="Calculator converting a constant geothermal heat output into heated floor area, coal displaced and CO2 avoided over 20 heating seasons"></div>

With the paper's conversion factors, the most favourable figures imply a
constant output of 83 to 85 MW, and the median output of 52.4 MW would heat
about 1.8 km² and displace about 0.97 Mt of CO2. These values were calculated
for this page and are not reported in the paper.

## Limitations

Our fracture design is idealised and ignores interactions with natural
fractures. We treated the SRV as a uniform porous medium with rock and water at
the same temperature. Fast flow paths that let water bypass the rock therefore
cannot be represented. Our cost models are uncertain and are likely to need
updating as more experience is gained.

We considered only seasonal heating. Year-round industrial uses of EGS heat
could improve the economics. At Qiabuqia, more reservoir data could reduce the
uncertainty in our inputs, and a better choice of simulations could reduce the
surrogate model's uncertainty.

## Glossary

A **binary search** finds a target value by repeatedly halving the interval
that contains it.

A **Box-Behnken design** is a set of simulations that varies several parameters
together at low, middle and high values, using fewer runs than every
combination would need.

**District heating** supplies heat to many buildings from a central source
through a pipe network.

An **enhanced geothermal system (EGS)** is an artificial geothermal reservoir
created by fracturing hot rock whose permeability is too low for water to
circulate.

The **levelised cost of heat (LCOH)** is the lifetime cost of a project divided
by the heat it delivers.

A **megawatt (MW)** is a million watts of power, and a **megawatt-hour (MWh)**
is the energy delivered by one megawatt for one hour.

A **millidarcy (mD)** is a unit of permeability, the ease with which fluid
flows through rock.

A **Monte Carlo** analysis repeats a calculation many times with randomly
sampled inputs to estimate the range of outcomes.

**R²** is the fraction of the variation in the simulated outputs that the
surrogate model reproduces.

The **stimulated reservoir volume (SRV)** is the rock between injection and
production fractures, through which water must flow in our design.

A **surrogate model** is a fast formula fitted to the results of a slow
simulator, used in its place.

**Thermal breakthrough** is the time when cold injected water reaches the
production well and the produced water starts to cool.

## Cite

Yu, Pengliang, Dempsey, David, Archer, Rosalind (2022). Techno-Economic feasibility of enhanced geothermal systems (EGS) with partially bridging Multi-Stage fractures for district heating applications. Energy Conversion and Management, 257, 115405. https://doi.org/10.1016/j.enconman.2022.115405

```bibtex
@article{yu2022techno,
  title = {Techno-Economic feasibility of enhanced geothermal systems (EGS) with partially bridging Multi-Stage fractures for district heating applications},
  author = {Yu, Pengliang and Dempsey, David and Archer, Rosalind},
  journal = {Energy Conversion and Management},
  year = {2022},
  volume = {257},
  pages = {115405},
  publisher = {Elsevier BV},
  doi = {10.1016/j.enconman.2022.115405},
  url = {https://ddempsey.github.io/papers/2022-yu-techno-economic-feasibility-enhanced-geothermal/}
}
```