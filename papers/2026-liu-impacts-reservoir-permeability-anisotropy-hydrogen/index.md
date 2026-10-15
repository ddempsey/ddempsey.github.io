# Impacts of reservoir permeability anisotropy on hydrogen migration and recovery efficiency in geological storage

- **Authors:** Jinjiang Liu; David Dempsey; Andy Nicol; Matt Parker; Karan Titus
- **Journal:** Fuel, vol. 408, pp. 137596 (2026)
- **Publisher:** Elsevier BV
- **DOI (version of record):** [https://doi.org/10.1016/j.fuel.2025.137596](https://doi.org/10.1016/j.fuel.2025.137596)
- **This page:** https://ddempsey.github.io/papers/2026-liu-impacts-reservoir-permeability-anisotropy-hydrogen/
- **Open PDF:** [https://ddempsey.github.io/papers/2026-liu-impacts-reservoir-permeability-anisotropy-hydrogen/liu2026-impacts-reservoir-permeability.pdf](https://ddempsey.github.io/papers/2026-liu-impacts-reservoir-permeability-anisotropy-hydrogen/liu2026-impacts-reservoir-permeability.pdf) (Published version)
- **Full text (Markdown):** [https://ddempsey.github.io/papers/2026-liu-impacts-reservoir-permeability-anisotropy-hydrogen/fulltext.md](https://ddempsey.github.io/papers/2026-liu-impacts-reservoir-permeability-anisotropy-hydrogen/fulltext.md)
- **Notice:** Published version, reproduced under the CC BY 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1016/j.fuel.2025.137596
- **Explainer:** all explainers on this site are AI-generated and human-checked.
- **BibTeX:** https://ddempsey.github.io/papers/2026-liu-impacts-reservoir-permeability-anisotropy-hydrogen/citation.bib
- **Topics:** CO2 & hydrogen storage
- **Keywords:** Anisotropy; Hydrogen; Materials science

## In brief

We simulated hydrogen storage in a depleted gas reservoir to test how direction-dependent permeability affects how much stored hydrogen can be withdrawn again. In our models, lower vertical permeability raised recovery for most well layouts, and the orientation of horizontal wells changed it by up to 8 percentage points.

- In our box model with one vertical well, hydrogen recovery rose from 74% to 82% as the ratio of horizontal to vertical permeability went from 1 to 100.
- Horizontal anisotropy (a ratio of 10 between directions) raised recovery by about 1 percentage point at 100 mD, and from 64% to 68% at 200 mD.
- Anisotropy reduced the difference in recovery between 40 m and 60 m reservoirs from 5 percentage points to 3 (horizontal ratio of 10) or 1 (vertical ratio of 100).
- With vertical injection and a horizontal withdrawal well, aligning the horizontal well with the least permeable direction gave 70% recovery, against 78% along the most permeable direction.
- In a model of the Ahuroa gas field, Taranaki, recovery increased from 76.8% to 82.8% when the vertical anisotropy ratio went from 1 to 100.

## The problem

Surplus wind and solar electricity can be converted to hydrogen, stored underground, and turned back
into electricity when demand exceeds generation (Ge et al., 2024; Berna-Escriche et al., 2022). At
standard surface conditions, hydrogen holds about a third of the energy of methane per unit volume
(Poling et al., 2020). Depleted gas fields have large pore space and existing infrastructure, and
their seal has already held gas (Harati et al., 2023).

A key measure of a storage site is its hydrogen recovery efficiency, the share of the injected
hydrogen that is withdrawn again. Permeability, the ease with which fluid flows through rock, often
differs with direction. Ratios of horizontal to vertical permeability (kh/kv) are typically 1 to 100
(e.g. Goupil et al., 2022). Earlier studies of hydrogen storage mainly examined kh/kv (Ershadnia et
al., 2023; Camargo et al., 2024). In this study, we evaluated both kh/kv and the ratio of the
largest to the smallest horizontal permeability (kh,max/kh,min).

## What we did

We built a box-shaped model of a depleted gas reservoir, 1000 m by 1000 m (one square kilometre) and
50 m thick. In the baseline, permeability was 100 mD (millidarcies) in every direction. One vertical
well at the centre was open over the full thickness. We first injected natural gas for 360 days as
cushion gas. Ten cycles followed, each with 90 days of hydrogen injection and 90 days of withdrawal
at 1 million Sm³ (standard cubic metres) per day. We used the simulator OpenGoSim and neglected gas
dissolution in brine, chemical and biological reactions, and capillary pressure.

We lowered vertical permeability to 20, 10 and 1 mD for kh/kv of 5, 10 and 100. For kh,max/kh,min of
5 and 10, we kept the geometric mean of the two horizontal permeabilities at 100 mD. At a ratio of
10, permeability was 316 mD one way and 32 mD across it. We combined these cases with thicknesses of
40 and 60 m, average permeabilities of 50 and 200 mD, and six well layouts. We then repeated the
tests in a model of the Ahuroa field in Taranaki, a former gas field that has stored natural gas
since 2008. The hydrogen scenario there is hypothetical.

## What we found

In our box model, lower vertical permeability gave higher recovery. As kh/kv increased from 1 to
100, recovery after ten cycles went from 74% to 82%. This is because hydrogen is lighter than
natural gas. It rises and spreads along the top of the reservoir, a process called gravity override.
Low vertical permeability limited this and retained more hydrogen in the lower layers. With similar
gas rates from every layer, the well withdrew gas richer in hydrogen.

The effect of horizontal anisotropy was smaller and increased with average permeability. A
kh,max/kh,min of 10 raised recovery by about 1 percentage point at 100 mD, and from 64% to 68% at
200 mD. At 50 mD it lowered recovery from 81% to 80%. Higher permeability on its own reduced
recovery, but a kh,max/kh,min of 10 may offset part of that loss. A higher kh/kv weakened the
horizontal effect, to at most 1 percentage point at a kh/kv of 100.

Anisotropy also reduced the effect of reservoir thickness on recovery. With no anisotropy, a 60 m
reservoir recovered 5 percentage points less than a 40 m one. At the end, the lowest 10 m or so of
the 60 m reservoir held less than 10% hydrogen, against the lowest 2 m of the 40 m reservoir. This
larger low-hydrogen zone at the base contributes to the lower recovery. The difference fell to 3
points at a kh,max/kh,min of 10, and to 1 point at a kh/kv of 100. We attribute this to anisotropy
restricting gravity override.

The explorer below gives box-model recovery for every combination of average permeability, kh/kv and
kh,max/kh,min.

<div class="widget" id="w-aniso" role="group" aria-label="Hydrogen recovery efficiency by average permeability and permeability anisotropy, box model"></div>

Well orientation also affected recovery. At a kh,max/kh,min of 10, with a vertical injection well
and a horizontal withdrawal well, recovery was 78% with the horizontal well along the most permeable
direction and 70% along the least permeable one. For a single horizontal well used for both
injection and withdrawal, the values were 77% and 74%.

High vertical anisotropy favoured wells open to the reservoir only near its top. At a kh/kv of 100,
these gave 84 to 85%, against 78% for the vertical injection and horizontal withdrawal layout. This
is because hydrogen injected into the lower layers met resistance to upward flow, with a vertical
permeability of only 1 mD. We do not recommend that layout where kh/kv is high.

In the Ahuroa model, recovery increased from 76.8% to 82.8% as kh/kv went from 1 to 100, and to
77.3% as kh,max/kh,min went from 1 to 10. Thin low-permeability interlayers also make a whole
reservoir anisotropic. When the permeability of one interlayer rock type fell from 10 to 0.1 mD, the
reservoir-scale kh/kv rose from 2.6 to 167, and recovery from 75.2% to 79.3%.

## Limitations

We assumed the most permeable direction was the same in every layer, whereas permeability usually
varies between strata (Zhao et al., 2024; Tarkowski et al., 2024). We did not include spatial
heterogeneity, the variation of permeability from place to place. Every result here is from
simulations.

For anisotropy, laboratory measurements on core samples may not be enough because of their small
scale (Raghavan, 2006). We argue that site assessments for hydrogen storage need a reservoir-scale
estimate of anisotropy, in addition to core measurements of single layers.

## Glossary

**Permeability:** the ease with which a fluid flows through rock under a pressure difference.
**Millidarcy (mD):** a unit of permeability. At Ahuroa, the median permeability of the main rock types ranges from 0.01 mD in mudstone to 75 mD in the main sandstone.
**Permeability anisotropy:** a difference in permeability between directions.
**kh/kv:** the ratio of horizontal to vertical permeability.
**kh,max/kh,min:** the ratio of the largest to the smallest horizontal permeability.
**Geometric mean:** the square root of the product of two values, used here as the average horizontal permeability.
**Hydrogen recovery efficiency:** the share of injected hydrogen that is withdrawn again.
**Cushion gas:** gas left in the reservoir to maintain reservoir pressure during withdrawal, here natural gas.
**Gravity override:** the rise of light hydrogen to the top of the reservoir, where it spreads sideways.
**Sm³:** standard cubic metre, a gas volume measured at surface conditions.
**Core sample:** a cylinder of rock cut from a borehole for laboratory testing.

## Abstract

• The impact of permeability anisotropy on hydrogen migration and recovery efficiency is evaluated. • Permeability anisotropy governs hydrogen migration, thereby affecting hydrogen recovery efficiency. • Permeability anisotropy affects the extent to which absolute permeability influence hydrogen recovery efficiency. • Well configuration should be optimized according to permeability anisotropy. Underground hydrogen storage (UHS) is a promising solution for large-scale, long-term energy storage by converting surplus renewable electricity into hydrogen for later use. Hydrogen recovery efficiency is an essential indicator for evaluating the performance of UHS. However, the impacts of permeability anisotropy, including horizontal permeability anisotropy ( k h , m a x / k h , m i n ) and horizontal-to-vertical permeability anisotropy ( k h / k v ), on hydrogen recovery efficiency have not been thoroughly investigated. This study addresses this gap with numerical simulations that couple a simplified box model and a field-realistic model based on the Ahuroa gas storage site. Our results show that k h , m a x / k h , m i n affects hydrogen recovery efficiency, and this effect becomes more pronounced at higher permeability. The difference in hydrogen recovery efficiency between k h , m a x / k h , m i n ​=1 and 10 expands from 1.3 percentage points at 100 mD to 4.3 percentage points at 200 mD. Increasing k h / k v can reduce the effect of k h , m a x / k h , m i n . In reservoirs with horizontal anisotropy, orienting a horizontal well along the minimum rather than the maximum permeability direction can reduce hydrogen recovery efficiency by up to 8 percentage points (from 78 % to 70 %), with all other conditions held constant. These findings from the box model were subsequently validated through simulations of a realistic geological site (Ahuroa natural gas storage site). This study indicates that permeability anisotropy is an important consideration in UHS site assessment. Ignoring it can result in errors in hydrogen recovery efficiency evaluation, leading to inaccurate predictions of recoverable hydrogen volumes.

## Cite

Liu, Jinjiang, Dempsey, David, Nicol, Andy, Parker, Matt, Titus, Karan (2026). Impacts of reservoir permeability anisotropy on hydrogen migration and recovery efficiency in geological storage. Fuel, 408, 137596. https://doi.org/10.1016/j.fuel.2025.137596

```bibtex
@article{liu2026impacts,
  title = {Impacts of reservoir permeability anisotropy on hydrogen migration and recovery efficiency in geological storage},
  author = {Liu, Jinjiang and Dempsey, David and Nicol, Andy and Parker, Matt and Titus, Karan},
  journal = {Fuel},
  year = {2026},
  volume = {408},
  pages = {137596},
  publisher = {Elsevier BV},
  doi = {10.1016/j.fuel.2025.137596},
  url = {https://ddempsey.github.io/papers/2026-liu-impacts-reservoir-permeability-anisotropy-hydrogen/}
}
```