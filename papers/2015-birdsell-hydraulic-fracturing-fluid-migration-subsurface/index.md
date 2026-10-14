# Hydraulic fracturing fluid migration in the subsurface: A review and expanded modeling results

- **Authors:** Daniel T. Birdsell; Harihar Rajaram; David Dempsey; Hari S. Viswanathan
- **Journal:** Water Resources Research, vol. 51(9), pp. 7159-7188 (2015)
- **Publisher:** American Geophysical Union (AGU)
- **DOI (version of record):** [https://doi.org/10.1002/2015wr017810](https://doi.org/10.1002/2015wr017810)
- **This page:** https://ddempsey.github.io/papers/2015-birdsell-hydraulic-fracturing-fluid-migration-subsurface/
- **Open PDF:** [https://ddempsey.github.io/papers/2015-birdsell-hydraulic-fracturing-fluid-migration-subsurface/birdsell2015-hydraulic-fracturing-fluid.pdf](https://ddempsey.github.io/papers/2015-birdsell-hydraulic-fracturing-fluid-migration-subsurface/birdsell2015-hydraulic-fracturing-fluid.pdf) (Accepted manuscript (peer-reviewed, author's version))
- **Full text (Markdown):** [https://ddempsey.github.io/papers/2015-birdsell-hydraulic-fracturing-fluid-migration-subsurface/fulltext.md](https://ddempsey.github.io/papers/2015-birdsell-hydraulic-fracturing-fluid-migration-subsurface/fulltext.md)
- **Notice:** An edited version of this paper was published by AGU. Published 2015 American Geophysical Union. Version of record: https://doi.org/10.1002/2015wr017810
- **Also in:** UC Research Repository, https://hdl.handle.net/10092/105829
- **Explainer:** all explainers on this site are AI-generated and human-checked.
- **BibTeX:** https://ddempsey.github.io/papers/2015-birdsell-hydraulic-fracturing-fluid-migration-subsurface/citation.bib
- **Topics:** Induced seismicity & faults
- **Keywords:** Hydraulic fracturing; Geology; Petroleum engineering; Oil shale; Fluid dynamics; Petrology

## In brief

We modelled fracturing fluid injected into shale 1,500 m below a drinking water aquifer. In our model, no fluid reached the aquifer without a permeable pathway such as a fault or leaky well. Where a pathway existed, modelling well production and imbibition reduced the amount reaching the aquifer tenfold.

- Without a permeable pathway, no fracturing fluid reached the aquifer in our model, and fluid rose on the order of 100 m through intact rock in 1,000 years.
- In our base case with a pathway, 1.2% of the injected fluid reached the aquifer after 1,000 years.
- After 20 years of production, the well had removed 68% of the injected fluid and imbibition had held 13% in the shale.
- With both well production and imbibition removed from the model, 12.3% reached the aquifer, about ten times the base case.
- Less than 10 m of intact seal in an otherwise leaky pathway reduced the amount reaching the aquifer to 0.00006%.

## The problem

Hydraulic fracturing (HF, or fracking) injects 1,000 to 22,000 m³ of fluid
into deep shale to release gas (Byrnes, 2011; Kissinger et al., 2013). About
1% of this fluid is chemical additives, some of them toxic (King, 2012;
Stringfellow et al., 2014). One concern, examined by the U.S. Environmental
Protection Agency (2012), is that the fluid could rise from the shale into a
shallow drinking water aquifer. There is only one confirmed case of this
through the subsurface, in West Virginia in 1982 (U.S. Environmental
Protection Agency, 1987).

Earlier studies disagree on whether this migration is possible (Myers, 2012a;
Engelder et al., 2014). Shale whose pores are partly filled with gas draws
water into them by capillary imbibition and retains it (Engelder, 2012).
Production also draws fluid back to the well and removes it at the surface. In
our review, we found no earlier model of HF fluid that combined buoyancy, well
operations and imbibition. Our goal in this study was to build one.

## What we did

We used the FEHM groundwater flow code (Zyvoloski et al., 1997). Our model
shale, based largely on the Marcellus, lies 1,700 m deep and 1,500 m below the
base of the aquifer, with a horizontal well running through it. In our base
case, a permeable pathway with a 1 mm aperture runs from the top of the shale
to the aquifer. We included it as an extreme case, as did Myers (2012a) and
Gassiat et al. (2013).

Each simulation begins with 200 years of slow upward groundwater flow, as
beneath a valley (Deming, 2001). About 11,000 m³ of fluid is then injected
over 2.5 days. The well is shut in for 5 days while imbibition occurs. It then
produces for 20 years, with its pressure held 5 MPa below the natural
pressure. Finally, the well is plugged and the fluid can move for 980 years.
We represented imbibition as a sink of fluid in the shale (Birdsell et al.,
2015). We tracked the injected fluid with a tracer that neither degrades nor
sorbs onto rock. This overpredicts the amount that reaches the aquifer.

## What we found

We found that, without a permeable pathway, no fracturing fluid reached the
aquifer. In 1,000 years it rose on the order of 100 m through the intact rock
above the shale.

With the pathway, some fluid reached the aquifer during injection and shut-in.
After 20 years, the well had removed 68% of the injected fluid, 13% had been
imbibed, 0.1% had reached the aquifer and 19% remained at depth. After 1,000
years, 1.2% had reached it.

<div class="widget" id="w-hf-fate" role="group" aria-label="Interactive comparison of the percentage of injected fracturing fluid that reaches the aquifer after 1,000 years in each modelled scenario"></div>

Once a pathway exists, the well has the largest effect. With no flow out of
the well, more than 10% reached the aquifer, and with a well produced for only
30 days, 9.5%. Imbibition on its own made a moderate difference, 1.5% with
none and 0.9% with a high rate. This is because imbibition acts near the well
and before production. Fluid that it does not take up is mostly removed by the
well later. With neither production nor imbibition in the model, 12.3% reached
the aquifer, ten times the base case. This suggests that earlier models that
left out these processes (e.g., Gassiat et al., 2013; Kissinger et al., 2013)
overestimated how much fluid can migrate. It also suggests that a well should
be produced for some time, even if it is not economic, to remove fluid from
the subsurface.

Of the properties of the pathway, its permeability, set by its aperture, had
the largest effect. Less than 10 m of intact seal in an otherwise leaky
pathway reduced the amount reaching the aquifer to 0.00006%, equivalent to
about 7 litres of the 11,000 m³ injected (our arithmetic). Short lengths of
intact well cement, or short breaks in a fault or fracture, could therefore be
enough to prevent contamination.

When the well pressure matched the base case, overpressure in the shale left
the amount reaching the aquifer at 1.2%. This is because the well removed the
extra pressure quickly. When the well was held only 5 MPa below a shale with 6
MPa of overpressure, it removed 2.0% of the fluid, and 9.7% reached the
aquifer. However, the literature is ambiguous about how to represent
overpressure and the well pressure that follows it.

Because the injected fluid is less salty than the brine around it, it is
buoyant. Removing buoyancy reduced the amount reaching the aquifer only from
1.19% to 1.06%. This is because mixing with brine weakens the buoyant force,
and the pressure changes from injection, imbibition and production are larger.
Buoyancy could make a significant difference where the rock above the shale is
at least 1,000 times more permeable than in our base case and the shale lies
within about 1,000 m of the aquifer. For deep shale beneath low-permeability
rock, it does not significantly influence migration.

Our results suggest that the probability of HF fluid contaminating an aquifer
is relatively low.

## Limitations

Our model is single-phase. It does not resolve how gas in the shale slows the
flow of water. Without data on this effect, we cannot say whether including it
would raise or lower the amount reaching the aquifer.

Our conclusion may not hold where fracturing is shallow. We recommend that
future models try to explain the few reported cases in which HF fluid may have
reached shallow aquifers within short times (e.g., DiGiulio et al., 2011;
Llewellyn et al., 2015).

## Glossary

**FEHM** (Finite Element Heat and Mass Transfer) is a computer code that
simulates the flow of water and heat, and the transport of dissolved
substances, through rock.

The **base case** is our reference simulation, against which each other
scenario changes one or more settings.

A **sink** in a model is a term that removes fluid from a region at a set
rate.

A **single-phase** model simulates the flow of one fluid, here water, and
leaves out a second fluid such as gas.

**Hydraulic fracturing (HF)** is the injection of fluid at high pressure to
crack rock around a well so that gas or oil flows out more easily.

**Shale** is a fine-grained sedimentary rock with low permeability.

An **aquifer** is a layer of rock or sediment that holds and yields usable
groundwater.

**Brine** is water with a high concentration of dissolved salt, held in deep
rock.

**Permeability** is a measure of how easily fluid flows through a rock.

A **permeable pathway** is a connected route, such as a fault or a leaky well,
through which fluid can flow across otherwise low-permeability rock.

The **aperture** of a fracture or gap is its width.

**Capillary imbibition** is the uptake of water into the small pores of a
rock by surface tension.

**Shut-in** is a period during which a well is closed so that no fluid enters
or leaves it.

**Production** is the period during which gas and water are drawn out of the
well.

**Overpressure** is pore pressure higher than that of a column of water
extending to the surface.

**Buoyancy** is the upward force on a fluid that is less dense than the fluid
around it.

A **seal** is a section of rock or well cement with low permeability that
blocks flow.

A **plume** is a body of injected fluid moving through the rock.

A **tracer** is a marker in a model that follows where a fluid goes.

To **sorb** is to attach to the surface of mineral grains.

A **megapascal (MPa)** is a unit of pressure, equal to one million pascals.

## Abstract

Understanding the transport of hydraulic fracturing (HF) fluid that is injected into the deep subsurface for shale gas extraction is important to ensure that shallow drinking water aquifers are not contaminated. Topographically driven flow, overpressured shale reservoirs, permeable pathways such as faults or leaky wellbores, the increased formation pressure due to HF fluid injection, and the density contrast of the HF fluid to the surrounding brine can encourage upward HF fluid migration. In contrast, the very low shale permeability and capillary imbibition of water into partially saturated shale may sequester much of the HF fluid, and well production will remove HF fluid from the subsurface. We review the literature on important aspects of HF fluid migration. Single-phase flow and transport simulations are performed to quantify how much HF fluid is removed via the wellbore with flowback and produced water, how much reaches overlying aquifers, and how much is permanently sequestered by capillary imbibition, which is treated as a sink term based on a semianalytical, one-dimensional solution for two-phase flow. These simulations include all of the important aspects of HF fluid migration identified in the literature review and are performed in five stages to faithfully represent the typical operation of a hydraulically fractured well. No fracturing fluid reaches the aquifer without a permeable pathway. In the presence of a permeable pathway, 10 times more fracturing fluid reaches the aquifer if well production and capillary imbibition are not included in the model.

## Cite

Birdsell, Daniel T., Rajaram, Harihar, Dempsey, David, Viswanathan, Hari S. (2015). Hydraulic fracturing fluid migration in the subsurface: A review and expanded modeling results. Water Resources Research, 51(9), 7159-7188. https://doi.org/10.1002/2015wr017810

```bibtex
@article{birdsell2015hydraulic,
  title = {Hydraulic fracturing fluid migration in the subsurface: A review and expanded modeling results},
  author = {Birdsell, Daniel T. and Rajaram, Harihar and Dempsey, David and Viswanathan, Hari S.},
  journal = {Water Resources Research},
  year = {2015},
  volume = {51},
  number = {9},
  pages = {7159-7188},
  publisher = {American Geophysical Union (AGU)},
  doi = {10.1002/2015wr017810},
  url = {https://ddempsey.github.io/papers/2015-birdsell-hydraulic-fracturing-fluid-migration-subsurface/}
}
```