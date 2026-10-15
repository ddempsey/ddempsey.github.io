# Effects of reservoir interlayers on hydrogen migration and distribution in underground hydrogen storage

- **Authors:** Jinjiang Liu (ORCID 0000-0002-9102-8812); David Dempsey (ORCID 0000-0003-2135-5129); Andy Nicol (ORCID 0000-0001-5181-1151); Matt Parker (ORCID 0009-0003-6934-3669); John Passmore (ORCID 0009-0002-0897-4558)
- **Journal:** International Journal of Hydrogen Energy, vol. 211, pp. 153704 (2026)
- **Publisher:** Elsevier BV
- **DOI (version of record):** [https://doi.org/10.1016/j.ijhydene.2026.153704](https://doi.org/10.1016/j.ijhydene.2026.153704)
- **This page:** https://ddempsey.github.io/papers/2026-liu-effects-reservoir-interlayers-hydrogen-migration/
- **Open PDF:** [https://ddempsey.github.io/papers/2026-liu-effects-reservoir-interlayers-hydrogen-migration/liu2026-effects-reservoir-interlayers.pdf](https://ddempsey.github.io/papers/2026-liu-effects-reservoir-interlayers-hydrogen-migration/liu2026-effects-reservoir-interlayers.pdf) (Published version)
- **Full text (Markdown):** [https://ddempsey.github.io/papers/2026-liu-effects-reservoir-interlayers-hydrogen-migration/fulltext.md](https://ddempsey.github.io/papers/2026-liu-effects-reservoir-interlayers-hydrogen-migration/fulltext.md)
- **Notice:** Published version, reproduced under the CC BY 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1016/j.ijhydene.2026.153704
- **Explainer:** all explainers on this site are AI-generated and human-checked.
- **BibTeX:** https://ddempsey.github.io/papers/2026-liu-effects-reservoir-interlayers-hydrogen-migration/citation.bib
- **Topics:** CO2 & hydrogen storage
- **Keywords:** Hydrogen; Materials science; Environmental science; Work (physics); Porosity; Consistency (knowledge bases)

## In brief

In our models of hydrogen storage in a layered gas reservoir with the well open to every layer, thin low-permeability layers (interlayers) slowed the rise of hydrogen and raised the share recovered. At low permeability, a model with diffusion predicted more hydrogen in these layers than one without.

- In our box model, with the well open to every layer, hydrogen recovery rose as interlayer permeability fell from 1 to 0.01 mD, and was nearly constant at lower permeabilities.
- At an interlayer permeability of 0.001 mD, including molecular diffusion raised the hydrogen held in the interlayers from 4.3 to 10.7 million standard cubic metres.
- In our box model, hydrogen recovery rose from 77.7 to 82.1% between the shortest (30 m) and longest lateral extents of the interlayers that we tested.
- In our model of the Ahuroa gas storage site, final hydrogen recovery was 77.7% with its thin interlayers at 0.5 mD and 73.4% when they were ignored.
- The trends in the Ahuroa model were consistent with those in the box model.

## The problem

Supply from wind and solar varies with the seasons (Asiaban et al., 2021; Zhou et al., 2018).
Surplus renewable electricity can be stored as hydrogen and used later for generation (Hwang et al.,
2023; Ishaq et al., 2022). For seasonal storage, depleted reservoirs are considered the preferred
option. They offer large capacity, existing infrastructure and a proven seal (Nicol et al., 2022;
Tarkowski, 2019; Muhammed et al., 2023).

Hydrogen is injected and withdrawn in cycles above a cushion gas, here natural gas, that maintains
reservoir pressure. Because some cushion gas is withdrawn with the hydrogen, the recovery efficiency
(hydrogen withdrawn over hydrogen injected) is lowered (Malki et al., 2024). Hydrogen is also less
dense than the cushion gas and tends to rise above it (gravity override). This reduces recovery
further (Saeed and Jadhawar, 2023; Chai et al., 2023; Jia et al., 2023).

Permeability measures how easily fluid flows through rock, in millidarcies (mD). Earlier studies of
layered reservoirs examined permeability contrasts between the storage layers (Arekhov et al., 2023;
Reijnen-Mooij et al., 2024). We found little earlier work on thin low-permeability layers between
them (interlayers), although these may slow gas rising through the reservoir. Hydrogen can also
enter an interlayer by molecular diffusion, the mixing of gases driven by differences in
concentration.

## What we did

We used Cirrus, a reservoir simulator from OpenGoSim, to model the flow of hydrogen and natural gas,
including diffusion between them. Our first model, a box 1 km square at 2000 m depth, held four
sandstone layers, each 15 m thick with a permeability of 100 mD, separated by interlayers of 0.001
mD, 100,000 times less permeable than the sandstone (our calculation). A central well was open
(perforated) in all four sandstone layers. After cushion gas injection, we ran ten cycles of 90 days of hydrogen injection
and 90 days of withdrawal, each at 1 million standard cubic metres (Sm³) a day.

We then modelled a hypothetical hydrogen store at the Ahuroa gas storage site in Taranaki, New
Zealand. One rock type (facies), TN, forms thin interlayers of 0.5 to 10 mD. The HPM facies is a
single thick layer of mudstone and siltstone, with permeability from below 0.01 mD up to 0.5 mD.

## What we found

In the box model, with every layer perforated, we found that hydrogen recovery rose as interlayer
permeability fell from 1 to 0.01 mD, and was nearly constant below that. This is because a less
permeable interlayer restricts the upward migration of hydrogen. Hydrogen spreads sideways and more
evenly between the layers. Permeability had less effect in thicker interlayers. Between a more and a
less permeable interlayer, the recovery difference fell from 11 percentage points at 0.5 m thick to
7 at 5 m.

As interlayer permeability fell from 0.1 to 0.0001 mD, transport into the interlayer shifted from
pressure-driven flow to diffusion. At 0.001 mD, a model without diffusion predicted 4.3 million Sm³
of hydrogen in the interlayers, 2.8% of the hydrogen remaining in the reservoir. With diffusion this
rose to 10.7 million Sm³, or 6.8%. Hydrogen that diffuses into an interlayer will not generally flow
back out and is a potential loss. However, when the interlayer was saturated with water, the
hydrogen in it increased only slightly.

Where an interlayer ends (pinches out), hydrogen that has spread beyond its edge rises into the
layer above. Recovery rose from 77.7 to 82.1% between the shortest interlayer extent, 30 m from the
well, and the longest. However, in the box model, the influence of extent was minimal below 70 m and
above 190 m.

Earlier studies have recommended perforating only the top layer (Smith et al., 2024; Zhang et al.,
2024). With such a well, the pressure at the bottom of the well fluctuated more as interlayer
permeability fell. This is mainly because a low-permeability interlayer confines hydrogen to the top
layer. At 0.0001 mD the pressure reached the 24 MPa limit (about 240 times atmospheric pressure, our
calculation) during the first injection. In this configuration the lower layers are also not fully
used. We recommend that well configuration and interlayer properties be assessed together.

In the Ahuroa model, recovery after the first cycle was 66.0, 64.1 and 61.2% for TN permeabilities
of 0.5, 1 and 10 mD. Without interlayers (TN at the 75 mD of the storage layers) it was 56.8%. At
the end of the simulation the four values were 77.7, 77.0, 75.4 and 73.4%. We attribute the lower
final recoveries mainly to co-produced cushion gas, from 200 to 240 million Sm³ across the four
cases.

<div class="widget" id="w-tn" role="group" aria-label="Interactive comparison of hydrogen recovery in the Ahuroa model for four permeabilities of the thin TN interlayers"></div>

The permeability of the thick HPM layer changed final recovery by at most 0.1 percentage points.
However, at 0.0001 mD, including diffusion raised the share of hydrogen held in it from 1.6 to 3%.

For the two well configurations, the Ahuroa trends in recovery and well pressure were consistent
with those in the box model.

## Limitations

Our interlayers differ from the storage rock only in permeability and porosity. We did not model
chemical or microbial reactions, the dissolution of hydrogen in brine, or capillary pressure.

Interlayers are identified mainly from well logs. Their continuity between wells is therefore
difficult to evaluate, and thick mudstone interlayers are rarely cored. The seal of an interlayer is
also often harder to verify in the field than that of a caprock. Laboratory experiments could
evaluate how well interlayers seal, and pressure tests between wells and zones could show whether
they pinch out.

## Glossary

**Cushion gas** is gas left in a storage reservoir to maintain its pressure.

A **facies** is a body of rock of a distinct type.

**Gravity override** is the rise of a less dense gas above a denser one.

An **interlayer** is a thin layer of low permeability between storage layers.

**mD** (millidarcy) is a unit of permeability.

**Molecular diffusion** is the mixing of gases driven by differences in concentration.

**MPa** (megapascal) is a unit of pressure.

A well is **perforated** where its casing is opened to a layer. Gas can then enter or leave the well there.

An interlayer **pinches out** where it thins to nothing.

**Recovery efficiency** is the volume of hydrogen withdrawn divided by the volume injected.

**Sm³** (standard cubic metre) is a volume of gas measured at 15 °C and atmospheric pressure.

## Abstract

With the rapid expansion of renewable energy deployment, underground hydrogen storage (UHS) has emerged as a promising large-scale storage option to smooth seasonal fluctuations in electricity supply. However, current geological assessments for UHS primarily focus on reservoir properties such as porosity and permeability, while overlooking the influence of interlayers. To address this research gap, this study systematically investigates how interlayer characteristics, including permeability, thickness, and geometry, affect hydrogen recovery efficiency and the extent of unrecoverable hydrogen. Numerical simulations were conducted using OpenGoSim (OGS) software, beginning with a box model and extending to a realistic geological model based on the Ahuroa gas storage site. Simulation results reveal that, under fully perforated conditions, lower interlayer permeability impedes upward hydrogen migration, thereby reducing the impact of gravity override and enhancing hydrogen recovery efficiency. With decreasing interlayer permeability, hydrogen transport into the interlayer shifts from advection-dominated transport to diffusion-dominated transport, resulting in greater hydrogen volume than predicted by a model that neglects molecular diffusion. The study further demonstrates that optimizing well configuration should consider interlayer properties to maximize recovery efficiency. Consistency between the box model and the realistic geological model supports the generality of the findings. By integrating interlayer characteristics into site evaluation, this work enhances the accuracy of hydrogen recovery efficiency evaluation and advances UHS assessment. • The impact of interlayers on hydrogen recovery efficiency in UHS is systematically evaluated. • Interlayer permeability, thickness, and pinch-out extent affect hydrogen migration and recovery efficiency. • Molecular diffusion effects on hydrogen migration in gas-saturated, low-permeability interlayers should not be neglected. • Well configuration should be optimized based on interlayer characteristics to enhance hydrogen recovery efficiency.

## Cite

Liu, Jinjiang, Dempsey, David, Nicol, Andy, Parker, Matt, Passmore, John (2026). Effects of reservoir interlayers on hydrogen migration and distribution in underground hydrogen storage. International Journal of Hydrogen Energy, 211, 153704. https://doi.org/10.1016/j.ijhydene.2026.153704

```bibtex
@article{liu2026effects,
  title = {Effects of reservoir interlayers on hydrogen migration and distribution in underground hydrogen storage},
  author = {Liu, Jinjiang and Dempsey, David and Nicol, Andy and Parker, Matt and Passmore, John},
  journal = {International Journal of Hydrogen Energy},
  year = {2026},
  volume = {211},
  pages = {153704},
  publisher = {Elsevier BV},
  doi = {10.1016/j.ijhydene.2026.153704},
  url = {https://ddempsey.github.io/papers/2026-liu-effects-reservoir-interlayers-hydrogen-migration/}
}
```