# Passive injection: A strategy for mitigating reservoir pressurization, induced seismicity and brine migration in geologic CO2 storage

- **Authors:** David Dempsey; Sharad Kelkar; Rajesh Pawar
- **Journal:** International Journal of Greenhouse Gas Control, vol. 28, pp. 96-113 (2014)
- **Publisher:** Elsevier BV
- **DOI (version of record):** [https://doi.org/10.1016/j.ijggc.2014.06.002](https://doi.org/10.1016/j.ijggc.2014.06.002)
- **This page:** https://ddempsey.github.io/papers/2014-dempsey-passive-injection-strategy-mitigating-reservoir/
- **Open PDF:** [https://ddempsey.github.io/papers/2014-dempsey-passive-injection-strategy-mitigating-reservoir/dempsey2014-passive-injection-strategy.pdf](https://ddempsey.github.io/papers/2014-dempsey-passive-injection-strategy-mitigating-reservoir/dempsey2014-passive-injection-strategy.pdf) (Published version)
- **Full text (Markdown):** [https://ddempsey.github.io/papers/2014-dempsey-passive-injection-strategy-mitigating-reservoir/fulltext.md](https://ddempsey.github.io/papers/2014-dempsey-passive-injection-strategy-mitigating-reservoir/fulltext.md)
- **Notice:** Published version, reproduced under the CC BY-NC-SA 3.0 licence. © The Author(s). Version of record: https://doi.org/10.1016/j.ijggc.2014.06.002
- **Also in:** UC Research Repository, https://hdl.handle.net/10092/107537
- **Explainer:** all explainers on this site are AI-generated.
- **BibTeX:** https://ddempsey.github.io/papers/2014-dempsey-passive-injection-strategy-mitigating-reservoir/citation.bib
- **Topics:** Induced seismicity & faults; CO2 & hydrogen storage
- **Keywords:** Brine; Cabin pressurization; Injection well; Petroleum engineering; Induced seismicity; Geology

## In brief

We propose passive injection, in which pumping brine out of a reservoir draws CO2 in without raising reservoir pressure. In our models, a closed reservoir 3 km deep stored up to about 4 million tonnes of CO2 a year, with about 1.7 tonnes of brine produced per tonne stored.

- In our simulations, reservoir pressure never rose above its starting value, and the stress driving faults towards slip fell everywhere except close to injection wells.
- After allowing for model resolution, storage reached about 4 million tonnes of CO2 a year in a four-stage operation with wells 1 km apart.
- Beyond the first stage, about 1.7 tonnes of brine were produced per tonne of CO2 stored, and roughly twice that in a reservoir open at its edges.
- Time to CO2 breakthrough grew roughly with the square of well spacing and was roughly inversely proportional to the pumping pressure.
- At an estimated US$2.50 to US$25.00 per tonne of CO2 for brine treatment and disposal, the method would need favourable disposal conditions, other revenue or economies of scale.

## The problem

Storing CO2 underground is one proposed way to slow the rise in
greenhouse gases (IPCC, 2005). Injecting it raises the fluid pressure in the
storage rock because the salty water already there (brine) is relatively
incompressible. Higher pressure can trigger earthquakes. These could open
leaks through the seal above the reservoir (Zoback and Gorelick, 2012). It
could also push brine into overlying freshwater aquifers (Oldenburg and
Rinaldi, 2011).

Pumping out brine during injection can limit this build-up (Buscheck et al.,
2012; Elliot et al., 2013). We extended the idea so that brine production is
the only process moving fluid through the reservoir. Our goal was to store
large volumes of CO2 with no increase in reservoir pressure, either temporary
or long-term.

## What we did

In passive injection, nearby production wells pump out brine and lower the
reservoir pressure. CO2 leaves the injection well at the formation pressure
(the natural pressure of the storage rock) and flows down this pressure
gradient into the reservoir.

CO2 is compressed into a liquid at the surface. Because it is less dense than
brine, pressure in a column of CO2 increases more slowly with depth than
pressure in the formation water. The two are equal at what we call the neutral
pressure depth. With temperature rising 30 °C per kilometre, about 8.7 MPa of
surface pressure places this depth at 3 km. One MPa (megapascal) is roughly
the extra pressure at the bottom of 100 m of water. The need to keep the CO2
liquid at the surface sets a lower limit on this depth, typically 2 to 3 km
depending on surface temperature and the rate of warming with depth. This
limit would at present exclude shallower formations.

In the first stage, four production wells surround one injection well. Once
enough CO2 reaches the production wells, they are converted to injectors, a
wider ring of production wells is drilled, and the old injector is plugged. We
began each new stage when half of the injected CO2 was returning with the
brine.

We simulated this with FEHM, a code that couples fluid flow, heat flow and
rock deformation, for a closed reservoir (sealed at its edges) 100 m thick at
3 km depth over 50 years. We varied well spacing from 0.2 to 2.4 km and pumped
production wells at 2, 5 or 10 MPa below the original formation pressure. We
assessed earthquake risk with the change in Coulomb failure stress, a measure
of how close a fault is to slipping.

## What we found

With wells 1 km apart and a 5 MPa pressure drop at the production wells, a
single stage injected 0.3 Mt (million tonnes) of CO2 a year at first, rising
to 1.0 Mt a year by 50 years.

With four stages, wells 1 km apart and a 10 MPa pressure drop, the average
retention rate rose from 0.9 Mt a year in stage one to 6.4 Mt a year in stage
four. We estimate that our coarse grid overstates flow by a factor of 1.6 to
1.8. Allowing for this, the best rate is about 4 Mt a year. For comparison,
more than 90% of emissions from large power stations come from sources
producing less than 5 Mt a year (IEAGHG, 2002).

Time to breakthrough (arrival of CO2 at the production wells) grew roughly
with the square of the spacing and was roughly inversely proportional to the
pumping pressure. At 1 km spacing, our fitted first-stage times are about 41,
18 and 9 years at 2, 5 and 10 MPa.

<div class="widget" id="w-breakthrough" role="group" aria-label="Interactive estimate of the time to first-stage CO2 breakthrough for a chosen well spacing and production pressure"></div>

The widget uses the relation we fitted to the simulations, with spacing raised
to the power 1.74 to 1.78. By our arithmetic, wells 2 km apart pumped at 5 MPa
would take about 61 years. An exponent of exactly 2, the square law above,
gives 72 years. Both exceed the 50 years we simulated.

After the first stage, about 1.7 tonnes of brine came out per tonne of CO2
retained. When we opened the reservoir edges to regional flow, the ratio
roughly doubled. In the open reservoir, storage efficiency, the CO2 retained
relative to the available pore space, was 20 to 25% lower. We therefore argue
that passive injection should target smaller, closed formations.

In our simulations, reservoir pressure stayed at or below its starting value
throughout. The Coulomb failure stress fell in the reservoir and caprock
except close to the injection well. There, cooling by the injected CO2
produces large thermal stresses. Over large areas, the decrease was 0.5 to 1
MPa. This is similar to the stress typically released when a fault slips in an
earthquake (Kanamori and Anderson, 1975). These results indicate that passive injection reduces the threat of induced earthquakes. However, lowering the
pressure also caused up to 1 m of subsidence.

## Limitations

Our model reservoir is uniform. If an injection well and a production well cut
the same permeable feature, CO2 would flow directly between them along that
feature and break through sooner.

Brine treatment and disposal is likely to be the largest cost, at an estimated
US$2.50 to US$25.00 per tonne of CO2 injected (scaled from Sullivan et al.,
2013). At the upper end, where trucking costs dominate, the scheme is
economically prohibitive. Economies of scale, other sources of revenue or
further research are likely to be needed before it is economically viable.
These costs need to be compared with the lower risk of induced earthquakes and
of brine reaching shallow aquifers.

## Glossary

**Brine** is the salty water that fills the pores of a deep storage rock.

A **caprock** is a low-permeability rock layer above a reservoir that stops
fluid escaping upwards.

**Breakthrough** is the arrival of injected CO2 at a production well.

**Coulomb failure stress** measures how close a fault is to slipping. An
increase moves the fault towards failure and a decrease moves it away.

**MPa** (megapascal) is a unit of pressure. One MPa is about the extra
pressure at the bottom of 100 m of water.

**Mt** is a million tonnes.

**Formation pressure** is the natural fluid pressure in the storage rock
before any injection or pumping.

A **closed reservoir** is sealed at its edges against brine flowing in from
outside.

The **neutral pressure depth** is the depth at which pressure in a column of
CO2 in the well equals the natural pressure of the formation water.

**Permeability** measures how easily fluid flows through rock.

A **production well** pumps fluid out of the reservoir.

**Retention** is the CO2 injected minus the CO2 that comes back out with the
brine.

**Storage efficiency** compares the volume of CO2 retained with the pore
space available to it inside the ring of production wells.

**Subsidence** is sinking of the ground surface.

## Abstract

Many technical, regulatory and public perception challenges remain to be addressed before large-scale deployment of CO2 geologic storage becomes a reality. Two major risks associated with injection of CO2 into the subsurface are the possibility of induced earthquakes compromising long-term seal integrity, and the displacement of saline brines resulting in contamination of shallow groundwater. Both induced seismicity and brine migration are caused by elevated pressures in the storage formation owing to the relative incompressibility of water. Here, we describe a strategy, termed passive injection that can be used to inject large amounts of CO2 in a storage formation with no increase, temporary or long-term, in reservoir pressure. Passive injection relies on the strategic placement of brine production wells to create negative pressure gradients that result in CO2 entering the formation at ambient pressure. Injection occurs at the intersection of pressure-depth profiles for a surface-pressurized, low-density CO2 column and a hydrostatic column of formation fluid. A multi-stage, square-ring well configuration is envisaged, in which brine production wells are repurposed for CO2 injection upon CO2 breakthrough, and the next concentric ring of production wells installed at a greater distance. Numerical simulations of passive injection are presented using the coupled thermo-hydro-mechanical (THM), multi-fluid, multi-phase numerical simulator FEHM. We consider CO2 injection into a 3 km-deep, closed reservoir over a period of 50 years, with up to four stages of injection and production depending on well-spacing and production pressures. Storage rates as high as 4 Mt yr−1 at 70% utilization of the reservoir pore volume are achieved under optimum conditions. Long-term mass production of brine is approximately 1.7 times that of CO2 sequestered. Geomechanical effects due to reservoir drawdown, cooling near injection wells, and surface subsidence are modeled. The risk of induced seismicity is quantified in terms of the Coulomb Failure Stress (CFS) for an optimally oriented fault in an extensional tectonic regime. Injection and production-induced changes in pressure and CFS confirm that, both during and at the conclusion of injection, (i) reservoir pressure is everywhere less than or equal to its initial value; and (ii) the risk of induced seismicity is everywhere reduced or unchanged. Thus, the primary risks of brine migration outside the primary reservoir and induced seismicity compromising seal integrity are neutralized. Passive injection produces large quantities of brine, the treatment and disposal of which represents an additional economic burden to CO2 geologic storage operations. Unless additional revenue streams or economies of scale can be leveraged, these costs are likely to limit the viability of the proposed scheme to only the most economically favorable sites.

## Cite

Dempsey, David, Kelkar, Sharad, Pawar, Rajesh (2014). Passive injection: A strategy for mitigating reservoir pressurization, induced seismicity and brine migration in geologic CO2 storage. International Journal of Greenhouse Gas Control, 28, 96-113. https://doi.org/10.1016/j.ijggc.2014.06.002

```bibtex
@article{dempsey2014passive,
  title = {Passive injection: A strategy for mitigating reservoir pressurization, induced seismicity and brine migration in geologic CO2 storage},
  author = {Dempsey, David and Kelkar, Sharad and Pawar, Rajesh},
  journal = {International Journal of Greenhouse Gas Control},
  year = {2014},
  volume = {28},
  pages = {96-113},
  publisher = {Elsevier BV},
  doi = {10.1016/j.ijggc.2014.06.002},
  url = {https://ddempsey.github.io/papers/2014-dempsey-passive-injection-strategy-mitigating-reservoir/}
}
```