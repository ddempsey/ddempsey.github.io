# Influence of hydrogen sulfide on gas-water interface in underground hydrogen storage: A molecular dynamics study

- **Authors:** Qiuhao Chang; Liangliang Huang; Kelsey McKenzie; Carlo Carere; Matthew Stott; Andy Nicol; David Dempsey
- **Journal:** Journal of Energy Storage, vol. 97, pp. 112766 (2024)
- **Publisher:** Elsevier BV
- **DOI (version of record):** [https://doi.org/10.1016/j.est.2024.112766](https://doi.org/10.1016/j.est.2024.112766)
- **This page:** https://ddempsey.github.io/papers/2024-chang-influence-hydrogen-sulfide-gas-water/
- **Open PDF:** [https://ddempsey.github.io/papers/2024-chang-influence-hydrogen-sulfide-gas-water/chang2024-influence-hydrogen-sulfide.pdf](https://ddempsey.github.io/papers/2024-chang-influence-hydrogen-sulfide-gas-water/chang2024-influence-hydrogen-sulfide.pdf) (Published version)
- **Full text (Markdown):** [https://ddempsey.github.io/papers/2024-chang-influence-hydrogen-sulfide-gas-water/fulltext.md](https://ddempsey.github.io/papers/2024-chang-influence-hydrogen-sulfide-gas-water/fulltext.md)
- **Notice:** Published version, reproduced under the CC BY 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1016/j.est.2024.112766
- **Also in:** UC Research Repository, https://hdl.handle.net/10092/108288
- **Explainer:** all explainers on this site are AI-generated.
- **BibTeX:** https://ddempsey.github.io/papers/2024-chang-influence-hydrogen-sulfide-gas-water/citation.bib
- **Topics:** CO2 & hydrogen storage
- **Keywords:** Molecular dynamics; Hydrogen; Chemistry; Saturation (graph theory); Surface tension

## In brief

We used molecular dynamics simulations to test how hydrogen sulfide, a gas that microbes can produce in underground hydrogen stores, changes the tension between stored gas and pore water. At 343 K and 14.5 MPa, 5% hydrogen sulfide in the gas lowered it by 12% when mixed with hydrogen and by 6% when mixed with methane.

- In our simulations, gas with 5% H2S lowered gas-water interfacial tension by about 12% for hydrogen, 9% for a hydrogen-methane mix, and 6% for methane.
- Interfacial tension fell as H2S concentration rose, from 70.3 mN/m for pure hydrogen to 6.9 mN/m for pure H2S, with little further change above 80% H2S.
- We attribute the accumulation of H2S in the interface region to its absorption into the water, and suggest that methane adsorbed there partly counteracted its effect.
- Water molecules at the interface tend to lie parallel to it. Adding H2S made their orientation more random, up to about 80% H2S.
- Simulated densities and interfacial tensions agreed with reference data, for example 6.9 mN/m against a measured 7.4 mN/m for H2S and water.

## The problem

The Hydrogen Council (2021) projects that global net-zero emissions by 2050
will require about 660 million tonnes of hydrogen. Storage capacity for this
output is inadequate (Perera, 2023; Thiyagarajan et al., 2022; Sekar et al.,
2023). Depleted hydrocarbon reservoirs are one candidate for underground
storage, because their geology and caprock integrity are already characterised
and surface facilities are in place (Perera, 2023; Zivar et al., 2021; Muhammed
et al., 2023).

One problem for these stores is hydrogen sulfide (H2S), which in hydrocarbon
reservoirs causes souring, corrosion, and stress-cracking of steel (Bai et al.,
2014; Dopffel et al., 2021). Microorganisms that reduce sulfate can make it
(Muyzer and Stams, 2008). In a hydrogen store, hydrogen is presumed to be the
main electron donor for these microbes, which include Desulfovibrio vulgaris
and Desulfotomaculum salinum (Tao et al., 2014).

H2S can also change the interfacial tension (IFT) between gas and the water
left in a reservoir's pores. IFT affects how gas and water separate in pore
spaces and how stored gas is distributed (Guo et al., 2020; Delshad et al.,
1986; Isfehani et al., 2023). High-pressure, high-temperature experiments with
H2S are hazardous because it is toxic and corrosive (Fauve et al., 2017). Shah
et al. (2008) measured H2S-water IFT up to 393 K and 15 MPa. However, IFT for
water against H2S mixed with hydrogen, or with methane used as a cushion gas,
has received little study. In this study, we simulate these mixtures.

## What we did

We used molecular dynamics, which tracks every molecule from the forces between
them. Each model held 2048 water molecules between about 1024 gas molecules, in
a box 10 nm long. All runs were at 14.5 MPa and 343 K, which we convert to
roughly 140 times atmospheric pressure and about 70 °C. These are typical
storage conditions (Hassanpouryouzband et al., 2020). We mixed H2S with
hydrogen, with methane, and with equal amounts of both. H2S made up 5% to 80%
of the gas, at six concentrations. The upper end of this range is unlikely at
reservoir scale but may arise locally where microbial activity is high. We also
modelled each pure gas against water.

Simulated densities of the pure fluids agreed with NIST reference values, for
example 0.67 against 0.70 g/cm³ for H2S. Simulated IFTs against water were 70.3
mN/m for hydrogen, 52.4 for methane, and 6.9 for H2S. Measured values are about
65.0 (Aslannezhad et al., 2023), 53.7 to 55.9 (Ren et al., 2000), and 7.4 mN/m
(Shah et al., 2008). By our calculation, the largest difference is about 8%,
for hydrogen.

## What we found

In our simulations, IFT fell as H2S concentration rose in every mixture. At 5%
H2S, IFT fell by about 12% with hydrogen, 9% in the hydrogen-methane mix, and
6% with methane. We calculate that pure H2S against water has an IFT about a
tenth of that for pure hydrogen (6.9 against 70.3 mN/m). However, above 80%
H2S, further increases in concentration made little difference to IFT.

Gas density profiles show that H2S concentrates in the interface region in
every mixture. We attribute this to its absorption into the water, consistent
with earlier simulations (Ofori et al., 2022; Dehaghani et al., 2023). The
accumulated H2S contributes to the fall in IFT. Hydrogen is depleted near the
interface, as van Rooijen et al. (2023) also found, whereas methane density
peaks there. This indicates that methane adsorbs at the interface, consistent
with earlier studies (Miqueu et al., 2011; Sakamaki et al., 2011; Yang et al.,
2017). At 5% H2S, the interface held more H2S than hydrogen in the hydrogen
mixture, but more methane than H2S in the methane mixture. This is because
methane has a greater affinity for the interface and lowers the accumulation of
H2S there. We suggest that this difference explains the larger effect of H2S
alongside hydrogen, and that methane adsorption partly counteracts the effect
of H2S.

The plateau in IFT above 80% coincides with a limit on H2S at the interface. We
define Region II as the layer where gas molecules are in direct contact with
water. In both two-gas mixtures, the density of H2S in Region II rose with H2S
concentration and levelled off above 80%. In the hydrogen-methane mix, the H2S
profiles in Region II at 80% and 100% are nearly indistinguishable. This
suggests that Region II saturates with H2S at about 80%.

Water molecules at the interface tend to align parallel to it. This preference
is stronger against hydrogen or methane than against H2S. As H2S concentration
increased to 80%, the orientation of interfacial water became more random, with
little change above that. This may be because H2S makes the boundary between
the phases less sharp and the interface partially miscible.

The 9% fall in the hydrogen-methane mix indicates that low H2S concentrations
affect IFT even where methane is present as a cushion gas. This is particularly
relevant to stores that use only small volumes of cushion gas. These stores
have less methane to offset H2S.

## Limitations

Our simulations used a single pressure and temperature. Changes in either
during reservoir operations may also affect IFT. Other impurities in hydrogen
stores, such as carbon dioxide and nitrogen, were not included. We recommend
experiments to confirm these trends and to refine the molecular models. The
dependence of IFT on gas mixture should also be considered in upscaled pore-
scale and continuum models, in particular its relation to relative
permeability, sweep efficiency, and mixing.

## Glossary

**Hydrogen sulfide (H2S)** is a toxic, corrosive gas.

**Souring** is the contamination of reservoir gas and water with H2S.

A **cushion gas** is gas left permanently in a storage reservoir to maintain
its pressure. Methane is one option.

An **electron donor** is the substance a microorganism oxidises for energy,
here hydrogen.

**Interfacial tension (IFT)** is the energy needed to enlarge the boundary
between two fluids, per unit area of boundary.

**mN/m** (millinewtons per metre) is the unit of IFT.

**MPa** (megapascal) is a unit of pressure. **K** (kelvin) is a temperature
scale that starts at absolute zero.

**nm** (nanometre) is a billionth of a metre.

**Molecular dynamics** is a simulation method that tracks the motion of
individual molecules from the forces between them.

**NIST** is the National Institute of Standards and Technology, which publishes
reference properties of fluids.

**g/cm³** (grams per cubic centimetre) is a unit of density.

**Adsorption** is the accumulation of molecules on a surface.
**Absorption** is their uptake into the bulk of the other phase.

The **interface region** is the layer in which water density changes from 10%
to 90% of its bulk value.

**Region II** is the part of the interface region where gas molecules are in
direct contact with water.

**Miscible** fluids mix completely. A partially miscible interface is less
sharply defined.

**Relative permeability** describes how easily one fluid flows through rock
when another fluid also occupies the pores. **Sweep efficiency** is the
fraction of a reservoir reached by an injected fluid.

## Abstract

In this study, we investigate the dynamics of interfacial tension (IFT) between residual pore water and gas mixtures containing H2, CH4, and H2S within subsurface porous media, essential for underground hydrogen storage (UHS) systems. Utilizing molecular dynamics simulations, we established specific IFT correlations across a spectrum of H2S concentrations, ranging from 5 % to 80 %, under the conditions of 14.5 MPa and 343 K. Our results demonstrate a marked decrease in IFT, with a notable 12 % reduction observed even at a minimal H2S concentration of 5 % for H2S-H2 mixtures, contrasting with a 6 % reduction in H2S-CH4 mixtures, and reaching a saturation point at concentrations exceeding 80 %. The presence of CH4 at the interface mitigates the reduction in IFT caused by H2S, underscoring the complexity of gas interactions in subsurface storage. These insights into the molecular dynamics at the gas-water interface carry significant implications for the optimization of UHS operations, informed by the substantial variations in IFT with different H2S concentrations.

## Cite

Chang, Qiuhao, Huang, Liangliang, McKenzie, Kelsey, Carere, Carlo, Stott, Matthew, Nicol, Andy, Dempsey, David (2024). Influence of hydrogen sulfide on gas-water interface in underground hydrogen storage: A molecular dynamics study. Journal of Energy Storage, 97, 112766. https://doi.org/10.1016/j.est.2024.112766

```bibtex
@article{chang2024influence,
  title = {Influence of hydrogen sulfide on gas-water interface in underground hydrogen storage: A molecular dynamics study},
  author = {Chang, Qiuhao and Huang, Liangliang and McKenzie, Kelsey and Carere, Carlo and Stott, Matthew and Nicol, Andy and Dempsey, David},
  journal = {Journal of Energy Storage},
  year = {2024},
  volume = {97},
  pages = {112766},
  publisher = {Elsevier BV},
  doi = {10.1016/j.est.2024.112766},
  url = {https://ddempsey.github.io/papers/2024-chang-influence-hydrogen-sulfide-gas-water/}
}
```