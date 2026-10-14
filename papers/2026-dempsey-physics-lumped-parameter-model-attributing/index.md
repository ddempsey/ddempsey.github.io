# A Physics‐Based, Lumped‐Parameter Model for Attributing Natural and Anthropogenic CO2 Emissions From Producing Geothermal Systems

- **Authors:** David Dempsey (ORCID 0000-0003-2135-5129)
- **Journal:** Water Resources Research, vol. 62(9), article e2026WR044239 (2026)
- **Publisher:** American Geophysical Union (AGU)
- **DOI (version of record):** [https://doi.org/10.1029/2026wr044239](https://doi.org/10.1029/2026wr044239)
- **This page:** https://ddempsey.github.io/papers/2026-dempsey-physics-lumped-parameter-model-attributing/
- **Open PDF:** [https://ddempsey.github.io/papers/2026-dempsey-physics-lumped-parameter-model-attributing/dempsey2026-physics-lumped-parameter.pdf](https://ddempsey.github.io/papers/2026-dempsey-physics-lumped-parameter-model-attributing/dempsey2026-physics-lumped-parameter.pdf) (Published version)
- **Full text (Markdown):** [https://ddempsey.github.io/papers/2026-dempsey-physics-lumped-parameter-model-attributing/fulltext.md](https://ddempsey.github.io/papers/2026-dempsey-physics-lumped-parameter-model-attributing/fulltext.md)
- **Notice:** Published version, reproduced under the CC BY 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1029/2026wr044239
- **Explainer:** all explainers on this site are AI-generated and human-checked.
- **BibTeX:** https://ddempsey.github.io/papers/2026-dempsey-physics-lumped-parameter-model-attributing/citation.bib
- **Topics:** Geothermal systems; CO2 & hydrogen storage; Groundwater & hydrology
- **Keywords:** Geothermal gradient; Environmental science; Greenhouse gas; Outflow; Power station; Hydrology (agriculture)

## In brief

We built a lumped-parameter physics model of CO2 in a producing geothermal reservoir and calibrated it to two New Zealand fields. At Rotokawa, we estimate that metering the power plant overcounts the human-caused change in emissions by 17–45 kt a year, because production reduces natural CO2 discharge at the surface.

- Our lumped-parameter model tracks reservoir pressure, dissolved CO2, and emissions through both the power plant and the ground surface, using exact formulas (closed-form solutions).
- At Rotokawa, we estimate that metered plant emissions exceed the human-caused change in emissions by 17–45 kt of CO2 a year, because production suppresses natural surface emissions.
- Over 2011–2023 this overcount totals about 0.37 Mt at Rotokawa, roughly a third of the 1.1 Mt charged under New Zealand's Emissions Trading Scheme.
- At Ngā Tamariki the overcount is an order of magnitude smaller, because its natural surface emissions were only about 5.5 kt a year.
- Dissolved CO2 resides in a geothermal reservoir only temporarily. Long-term storage requires mineralisation or reinjection far enough away to delay its return.

## The problem

Some geothermal power plants release CO2 that was dissolved in the reservoir
water. In 2017, 12 New Zealand geothermal power stations reported 600 kt
(thousand tonnes) of CO2 a year (McLean et al., 2024). Under New Zealand's
Emissions Trading Scheme (ETS), operators pay for the CO2 that leaves through
the plant.

Geothermal systems also discharge CO2 naturally, through soil and vents at the
surface. Pumping fluid from the reservoir lowers its pressure and can change
the natural discharge (Allis, 1981; Óladóttir and Friðriksson, 2015). These
changes are generally omitted from emissions inventories (Fridriksson et al.,
2016). Our goal was to build a model that separates CO2 emissions through the
plant from those through the surface.

## What we did

We used a lumped-parameter, or tank, model. It treats the reservoir as a
single well-mixed body of hot water with a mass of about 120–150 million
tonnes. Hot, CO2-bearing water enters from below as upflow and leaves as
outflow to the surface and nearby aquifers. When the power station extracts
more fluid than it reinjects, reservoir pressure falls exponentially toward a
new, lower level. This draws in extra upflow and reduces the outflow. If net
extraction is large enough, the outflow reverses and fresh water flows into
the reservoir.

A second equation tracks the dissolved CO2. It enters with the upflow and
leaves through the outflow and the production wells. It can also be lost by
degassing (coming out of solution as gas) as pressure falls, or by reacting
with the rock to form carbonate minerals. Captured CO2 can be reinjected and
return after a delay. We derived exact formulas (closed-form solutions) for
these cases and checked them against step-by-step computer solutions of the
same equations.

We then calibrated the model to annual plant emissions from Rotokawa and Ngā
Tamariki by Bayesian inference.

## What we found

From the calibrated models, we estimate an initial dissolved CO2 content of
0.78 wt% at Rotokawa, or about 8 g of CO2 per kilogram of water, and 0.46 wt%
at Ngā Tamariki. Concentrations then decline with characteristic times of
about 6 and 10 years, respectively. The decline probably reflects dilution of
the reservoir by reinjected water that has had its CO2 removed.

We define the overcount as plant emissions minus the anthropogenic emissions,
which are the change in total (plant plus surface) emissions from the
pre-development level. The overcount equals the amount by which production has
reduced natural surface emissions. We estimate that at Rotokawa the overcount
is 17–45 kt a year. Summed over 2011–2023 it is about 0.37 Mt (million
tonnes), roughly a third of the 1.1 Mt of plant emissions charged under the
ETS. At an ETS price of NZ$50 per tonne, an overcount of 30–40 kt a year,
within that range, means the operator pays NZ$1.5–2.0 million a year for
emissions that would have occurred naturally. At Ngā Tamariki the overcount is
an order of magnitude smaller, 0.036 Mt over 2015–2023. This is because its
natural surface emissions were only about 5.5 kt a year, against 44 kt a year
at Rotokawa. However, these estimates use the modelled change in surface
emissions. Surveys at Rotokawa in 2012 and 2021 could not measure that change
conclusively (Yang et al., 2024).

<div class="widget" id="w-overcount" role="group" aria-label="Plant emissions, surface emissions, and the natural surface level over 100 years of production at Rotokawa or Ngā Tamariki, with controls for net fluid extraction and for the share of produced CO2 that is reinjected"></div>

With the Rotokawa defaults in the widget, after 100 years plant emissions are
about 45 kt a year and surface emissions have fallen from 44 to about 6 kt a
year. The overcount is then about 38 kt a year. Reinjecting all of the
produced CO2 reduces plant emissions to zero. However, surface emissions then
rise slightly above their natural level. The overcount becomes negative, about
−1 kt a year. In that case the operator pays nothing while total field
emissions are higher than before development.

A geothermal reservoir is a flow-through system. Reinjected CO2 will
eventually leave the reservoir unless it forms minerals or is injected far
enough away to delay its return. Mineralisation takes about 2 months in basalt
at Carbfix in Iceland (Snæbjörnsdóttir et al., 2020), but may take decades to
centuries in the less reactive rocks typical of New Zealand (Altar et al.,
2024). In a Rotokawa scenario where all produced CO2 is reinjected from 2024
and all of it returns after 10 years, the overcount becomes negative around
2107. If half of it is permanently stored, the overcount instead stays
positive at about 30 kt a year.

## Limitations

The calibrated reservoir masses are at the low end of the range expected for
these systems. This suggests that production extracts fluid from only part of
each reservoir. The modelled natural surface emissions at Rotokawa, 44 kt a
year, are about a third of the 126–161 kt a year measured by surface surveys
(Bloomberg et al., 2014; Yang et al., 2024). The difference probably reflects
CO2 pathways outside the producing part of the system. Our CO2 solubility
model, for pure water, overestimates solubility where steam or other gases
make up much of the gas phase. We expect it to be a reasonable approximation
for the liquid-dominated reservoirs modelled here.

These models can match emissions trends and suggest probable mechanisms behind
them. However, in our view they are not sufficient on their own to change
regulation or to correct the emissions charges for a particular field. That
would need field-specific numerical models and repeat surveys of surface CO2
flux.

## Glossary

A **lumped-parameter (tank) model** represents a reservoir as a single
well-mixed volume, averaging its properties over space.

**Upflow** is hot, CO2-bearing water rising into the reservoir from depth.

**Outflow** is water leaving the reservoir, upward through the caprock to the
surface or sideways into shallow aquifers.

A **caprock** is a low-permeability rock layer above the reservoir that slows
the escape of fluid.

**Reinjection** returns produced fluid, and sometimes captured CO2, to the
ground through wells.

**Bayesian inference** finds the range of parameter values that fit observed
data, given prior estimates of those values.

A **closed-form solution** is an exact formula for how a quantity changes over
time. It can be evaluated without step-by-step computation.

**kt** and **Mt** are thousands and millions of tonnes.

**Degassing** is the release of dissolved CO2 as gas when falling pressure
lowers its solubility in water.

**wt%** is the mass of dissolved CO2 as a percentage of the mass of water.

**Anthropogenic emissions** are the change in a field's total CO2 emissions
from its pre-development level.

The **overcount** is plant emissions minus anthropogenic emissions.

**Residence time** is the reservoir's water mass divided by the rate at which
water flows through it.

**Mineralisation** is the reaction of dissolved CO2 with rock to form solid
carbonate minerals.

The **Emissions Trading Scheme (ETS)** is New Zealand's carbon pricing scheme,
under which emitters surrender units for each tonne of CO2 they release.

## Abstract

Although geothermal energy is a low‐carbon resource, some powerplants can coproduce and release , which is then subject to emissions monitoring and sometimes financial penalty. Accurate attribution of these emissions is difficult because exploitation of the reservoir alters hydrological flows that in turn modify surface fluxes. Hence, emissions metered through the powerplant do not represent the true anthropogenic impact. This study develops a lumped‐parameter model of a geothermal reservoir that tracks pressure evolution, dissolved and emissions through the powerplant and the Earth's surface. Closed‐form analytical solutions are obtained for reservoir degassing, outflow reversal, delayed reinjection returns and mineralization reactions, and these are calibrated against emissions data from the Rotokawa and Ngā Tamariki geothermal fields in New Zealand. The interplay of characteristic timescales for pressure equilibration, loss, reservoir residence, breakthrough delay and mineralization are shown to control whether a field's emissions decline, stabilize or rebound over decades. Calibrated models indicate that plant‐metered emissions at Rotokawa overcount the true anthropogenic impact by 17–45 kt , because production suppresses surface emissions that are not credited to the operator. storage in geothermal reservoirs is shown to be fundamentally different from conventional carbon capture and storage, as it is a flow‐through system in which dissolved only resides temporarily. Long‐term sequestration requires either mineralization or reinjection at sufficient distance to delay returns. Field‐specific models and repeat flux surveys are needed to constrain these effects and support emissions accounting based on true anthropogenic impact.

## Cite

Dempsey, David (2026). A Physics‐Based, Lumped‐Parameter Model for Attributing Natural and Anthropogenic CO2 Emissions From Producing Geothermal Systems. Water Resources Research, 62(9), e2026WR044239. https://doi.org/10.1029/2026wr044239

```bibtex
@article{dempsey2026physics,
  title = {A Physics‐Based, Lumped‐Parameter Model for Attributing Natural and Anthropogenic CO2 Emissions From Producing Geothermal Systems},
  author = {Dempsey, David},
  journal = {Water Resources Research},
  year = {2026},
  volume = {62},
  number = {9},
  pages = {e2026WR044239},
  publisher = {American Geophysical Union (AGU)},
  doi = {10.1029/2026wr044239},
  url = {https://ddempsey.github.io/papers/2026-dempsey-physics-lumped-parameter-model-attributing/}
}
```