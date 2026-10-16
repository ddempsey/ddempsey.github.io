# Two-dimensional numerical modelling of strategies to avoid thermal stress induced flow channeling in fractured geothermal reservoirs

- **Authors:** Mats Rongved; Andreas Bauer; David Dempsey; Rune M. Holt
- **Journal:** Geothermics, vol. 90, pp. 101978 (2021)
- **Publisher:** Elsevier BV
- **DOI (version of record):** [https://doi.org/10.1016/j.geothermics.2020.101978](https://doi.org/10.1016/j.geothermics.2020.101978)
- **This page:** https://ddempsey.github.io/papers/2021-rongved-two-dimensional-numerical-modelling-strategies/
- **Open PDF:** [https://ddempsey.github.io/papers/2021-rongved-two-dimensional-numerical-modelling-strategies/rongved2021-two-dimensional-numerical.pdf](https://ddempsey.github.io/papers/2021-rongved-two-dimensional-numerical-modelling-strategies/rongved2021-two-dimensional-numerical.pdf) (Accepted manuscript (peer-reviewed, author's version))
- **Full text (Markdown):** [https://ddempsey.github.io/papers/2021-rongved-two-dimensional-numerical-modelling-strategies/fulltext.md](https://ddempsey.github.io/papers/2021-rongved-two-dimensional-numerical-modelling-strategies/fulltext.md)
- **Notice:** Accepted manuscript. © 2021. This manuscript version is made available under the CC-BY-NC-ND 4.0 license https://creativecommons.org/licenses/by-nc-nd/4.0/. The version of record is available at https://doi.org/10.1016/j.geothermics.2020.101978
- **Explainer:** all explainers on this site are AI-generated.
- **BibTeX:** https://ddempsey.github.io/papers/2021-rongved-two-dimensional-numerical-modelling-strategies/citation.bib
- **Topics:** Induced seismicity & faults; Geothermal systems
- **Keywords:** Geothermal gradient; Petroleum engineering; Mechanics; Flow (mathematics); Thermal; Volumetric flow rate; Fracture (geology); Geology

## In brief

Cooling by injected water can concentrate flow into one fracture. In our two-dimensional model of two parallel fractures, flow stayed even or evened out with wider, more alike fractures or a higher injection rate. A high starting rate, or injecting through each fracture in turn, made even flow more likely.

- In our model, flow between two fractures splits by the ratio of their apertures. A narrower fracture with a larger relative aperture gain can regain flow.
- With an initial fracture permeability of 5 × 10^-10 m², flow stayed close to even. At 10^-11 m², one fracture took most of the flow within about two days.
- At 1.5 × 10^-10 m², a tenfold lower injection rate gave uneven flow. A tenfold higher rate gave uneven flow at first, then even flow.
- In our model, a high injection rate for the first 30 days, or injection through each fracture in turn for 100 days each, gave close to even flow.
- Resolving temperature beside the fracture on a finer grid changed the modelled timing of thermal breakthrough.

## The problem

Enhanced geothermal systems (EGS) produce heat from hot, low-permeability rock
by circulating water through fractures between injection and production wells.
Because rock conducts heat poorly, evenly spread flow delays thermal
breakthrough, the arrival of cooled water at the production well. However,
Grant (2016) found that in earlier EGS projects, flow was generally confined to
a small part of the stimulated volume.

As rock around a fracture cools, the compressive stress on the fracture falls
and its aperture, the width of the opening, increases (Ghassemi et al., 2008).
The fracture that takes the most water tends to cool fastest. This suggests a
feedback in which it widens fastest and takes an increasing share of the flow.
Guo et al. (2016) concluded that this uneven flow, or flow channelling, was
inevitable in a single fracture. We asked whether it is inevitable between
fractures, and whether well operations could reduce it.

## What we did

We used a two-dimensional thermo-hydro-mechanical (THM) model. MDEM, a hybrid
finite-discrete element code, computes rock stress, fracture opening and
permeability. TOUGH2, a reservoir simulator (Pruess et al., 1999), computes
fluid flow and heat transport. To resolve the steep temperature gradient beside
a fracture, we divided each fractured element into 16 sub-grid elements for
flow and heat. We checked heat conduction and thermal stress against analytical
solutions (Carslaw and Jaeger, 1959; Perkins et al., 1984).

The model reservoir is granite at 150 °C, with wells 90 m apart. One or two
parallel fractures connect them, 40 m apart in the two-fracture cases. Water at
2 °C is injected at 10^-5 to 10^-3 m²/s, a rate per metre of reservoir height
in a two-dimensional model, or 0.01 to 1 litre per second per metre (our
conversion). Two-fracture initial permeabilities range from 10^-11 to 5 ×
10^-10 m², equivalent to apertures of 11 to 77 micrometres, or about a
hundredth to a tenth of a millimetre (our conversion). Both fractures start the
same, but irregularities in the mesh give one slightly more flow. We use these
irregularities to approximate natural variability.

## What we found

The sub-grid changed the modelled timing of thermal breakthrough. Without it,
heat stored in the coarse fracture elements kept the production temperature
high until those elements had cooled. It then fell abruptly. With the sub-grid,
it began to fall almost immediately.

Under the same pressure gradient, flow through a fracture scales with the cube
of its aperture. The split of flow between two fractures therefore depends on
the ratio of their apertures. The aperture gain from cooling does not depend on
the initial aperture, except through the initial split of flow. So a narrower
fracture can gain more in relative terms and regain flow, even while the wider
fracture opens by more. In the widget, fractures of 20 and 10 micrometres that
open by 10 and 8 micrometres shift the wider fracture's share of flow from 89%
to 82% (our illustration of the paper's Eq. 11).

<div class="widget" id="w-aperture-ratio" role="group" aria-label="Interactive calculation of how two fractures share flow before and after their apertures increase, using the paper's parallel-plate relation"></div>

At the highest two-fracture initial permeability (5 × 10^-10 m²), flow was
close to even from the start, whereas at 1.5 × 10^-10 m² it was uneven at first
and then evened out. At 10^-11 m², one fracture took most of the flow after
about two days. Production temperature also dropped sooner than in the two
higher-permeability cases. We take this to indicate lower energy production.

We reran the 1.5 × 10^-10 m² case at tenfold lower and higher rates. At the
lower rate, almost all the flow went through one fracture early in the run,
whereas at the higher rate flow was uneven at first and then evened out. In our
model, aperture gain is not linear in rate. A rate change has little effect at
low rates, where the flow is too small to cool the rock appreciably, and at
high rates, where the fracture is already cold. A higher rate can therefore
give a narrower fracture between these limits a larger percentage gain than the
wider one. However, higher rates normally mean higher pumping costs.

To limit that cost, we ran a separate two-fracture case at 10^-3 m²/s for the
first 30 days only, then at a lower rate. Both fractures had cooled by similar
amounts by 30 days, and flow stayed even after the rate was lowered. Because
production temperature fell quickly during the high-rate phase, we suggest
keeping that phase short.

We also directed all the flow through each fracture in turn for 100 days each,
before opening both. Close to even flow followed, whereas flow stayed uneven
with injection through both fractures from the start at the same rate and
initial permeability (10^-11 m²). Our results indicate that sequential
injection could increase heat recovery. However, we did not optimise the
100-day stage length.

## Limitations

We excluded chemical effects because we expect them to be minor in the
crystalline rock typical of EGS. The model also omits fracture growth during
production, and a field reservoir would need a three-dimensional model. With
two parallel fractures in an idealised reservoir, we are cautious in
extrapolating to a complex network. We suggest that as fractures are added,
uniform permeability becomes less likely and flow channelling more likely.

In a natural network, we expect some low-permeability paths not to receive
enough flow to cool and open. Wellhead interventions before normal production
could still increase the number of fractures that contribute. Our next step is
to test sequential injection in a more complex network between two wells.



## Glossary

An **enhanced geothermal system (EGS)** produces heat from hot rock whose
permeability has been increased by stimulation.

**Permeability** measures how easily fluid flows through rock or a fracture.

A fracture's **aperture** is the width of its opening.

A **micrometre** is a thousandth of a millimetre.

**Thermal breakthrough** is the arrival of cooled water at the production well,
after which the production temperature falls.

**Flow channelling**, or uneven flow, is the concentration of flow into a small
part of a fracture network.

A **thermo-hydro-mechanical (THM)** model couples heat transfer, fluid flow, and
rock deformation.

A **finite-discrete element** code treats intact rock as a continuous mesh and
represents failed elements as discrete blocks.

A **sub-grid** divides one model element into smaller elements to resolve
steep gradients.

**Sequential injection** directs all the injected water through each fracture
in turn before normal production.

## Cite

Rongved, Mats, Bauer, Andreas, Dempsey, David, Holt, Rune M. (2021). Two-dimensional numerical modelling of strategies to avoid thermal stress induced flow channeling in fractured geothermal reservoirs. Geothermics, 90, 101978. https://doi.org/10.1016/j.geothermics.2020.101978

```bibtex
@article{rongved2021two,
  title = {Two-dimensional numerical modelling of strategies to avoid thermal stress induced flow channeling in fractured geothermal reservoirs},
  author = {Rongved, Mats and Bauer, Andreas and Dempsey, David and Holt, Rune M.},
  journal = {Geothermics},
  year = {2021},
  volume = {90},
  pages = {101978},
  publisher = {Elsevier BV},
  doi = {10.1016/j.geothermics.2020.101978},
  url = {https://ddempsey.github.io/papers/2021-rongved-two-dimensional-numerical-modelling-strategies/}
}
```