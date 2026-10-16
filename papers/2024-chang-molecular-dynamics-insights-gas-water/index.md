# Molecular dynamics insights into gas-water interfacial tension: Optimizing hydrogen storage in subsurface conditions

- **Authors:** Qiuhao Chang; David Dempsey; Liehui Zhang; Yulong Zhao; Liangliang Huang (ORCID 0000-0003-2358-9375)
- **Journal:** International Journal of Hydrogen Energy, vol. 64, pp. 896-905 (2024)
- **Publisher:** Elsevier BV
- **DOI (version of record):** [https://doi.org/10.1016/j.ijhydene.2024.03.341](https://doi.org/10.1016/j.ijhydene.2024.03.341)
- **This page:** https://ddempsey.github.io/papers/2024-chang-molecular-dynamics-insights-gas-water/
- **Open PDF:** [https://ddempsey.github.io/papers/2024-chang-molecular-dynamics-insights-gas-water/chang2024-molecular-dynamics-insights.pdf](https://ddempsey.github.io/papers/2024-chang-molecular-dynamics-insights-gas-water/chang2024-molecular-dynamics-insights.pdf) (Accepted manuscript (peer-reviewed, author's version))
- **Full text (Markdown):** [https://ddempsey.github.io/papers/2024-chang-molecular-dynamics-insights-gas-water/fulltext.md](https://ddempsey.github.io/papers/2024-chang-molecular-dynamics-insights-gas-water/fulltext.md)
- **Notice:** Accepted manuscript. © 2024. This manuscript version is made available under the CC-BY-NC-ND 4.0 license https://creativecommons.org/licenses/by-nc-nd/4.0/. The version of record is available at https://doi.org/10.1016/j.ijhydene.2024.03.341
- **Explainer:** all explainers on this site are AI-generated.
- **BibTeX:** https://ddempsey.github.io/papers/2024-chang-molecular-dynamics-insights-gas-water/citation.bib
- **Topics:** CO2 & hydrogen storage
- **Keywords:** Adsorption; Surface tension; Hydrogen; Chemistry; Diffusion; Molecular dynamics; Chemical engineering; Chemical physics

## In brief

In molecular simulations at underground hydrogen storage conditions, mixing a cushion gas into hydrogen lowered the tension at the boundary between gas and pore water. Carbon dioxide lowered it substantially up to a 40% share, and at a lower rate above that. Methane lowered it at a steady rate.

- At 20 MPa and 373 K, adding CO2 or CH4 to hydrogen lowered the simulated gas-water interfacial tension, and CO2 lowered it more than CH4 at the same concentration.
- With CO2, the tension fell substantially as the CO2 share rose to 40% and at a lower rate from 40% to 100%. With CH4, it fell linearly.
- CO2 collected at the interface at about twice its gas density up to 40% CO2. Above 40% this ratio fell, which we interpret as the interface approaching saturation.
- A shift in the orientation of interfacial water molecules, which occurred with rising CO2 and was absent with rising CH4, could contribute to the larger drop in tension with CO2.
- Both cushion gases slowed the self-diffusion of hydrogen at the gas-water interface, where hydrogen-consuming microbes are concentrated.

## The problem

Compressed, liquefied and chemical storage at the surface may be unable to hold
hydrogen at the scale needed for a net-zero energy system (Amirthan and Perera,
2023). Porous rock underground, in aquifers and depleted hydrocarbon reservoirs,
has the capacity for storage at that scale (Miocic et al., 2023). Storage of
this kind starts with injecting a cushion gas, commonly carbon dioxide (CO2) or
methane (CH4), to form a compressible gas plume. Hydrogen is then injected and
withdrawn in cycles by varying the pressure (Miocic et al., 2023).

The stored gas is therefore a mixture of hydrogen and cushion gas, in contact
with water already in the pores. The interfacial tension (IFT) at that gas-water
boundary, the force per unit length acting along it, controls how efficiently
the gas displaces water and how the gas is distributed through the rock (e.g.
Nobakht et al., 2007). We found few IFT data for these mixtures under storage
conditions, and laboratory measurements do not show the molecular processes that
change the IFT.

## What we did

We used molecular dynamics, a computer simulation that tracks the motion of
every molecule under the forces between them, to calculate the IFT between water
and gas at 20 MPa (about 200 atmospheres) and 373 K (about 100 °C). These are
typical conditions for subsurface storage (Zivar et al., 2021;
Hassanpouryouzband et al., 2020). Each model placed 3000 water molecules between
two layers of 1000 gas molecules, in a box 5 by 5 by 30 nanometres. We ran pure
hydrogen, CO2 and CH4 against water, and then hydrogen mixed with CO2 or CH4 at
six cushion gas concentrations between 10% and 80%. Each case was repeated four
times.

To check the models, we compared our pure-gas IFTs of 57, 42 and 31 millinewtons
per metre (mN/m) for hydrogen, CH4 and CO2 with published ranges of 53 to 58, 44
to 49 and 29 to 32 mN/m (Table 1 of the paper). Our model underestimates the CH4
value, with an error of up to 14.3%, the largest of the three.

## What we found

Adding either cushion gas lowered the IFT, and CO2 lowered it more than CH4 at
the same concentration. With CO2, the IFT fell substantially as the CO2 share
rose from 0 to 40%, then at a lower rate from 40% to 100%. With CH4, it fell
linearly. By our calculation from the pure-gas values in Table 1, pure CO2 gives
an IFT about 46% below that of pure hydrogen, and pure CH4 about 26% below.
These trends agree with the measurements of Chow et al. (2018) for CO2 and the
simulations of Doan et al. (2023) for CH4. However, few data exist under our
conditions, so this comparison is only qualitative.

We attribute these shapes mainly to adsorption, the accumulation of gas
molecules at the boundary. Both CO2 and CH4 reached higher densities at the
interface than in the gas, whereas hydrogen did not. CO2 adsorbed more strongly
than CH4 because it interacts more strongly with water. Its interaction energy,
a measure of how strongly the molecules attract one another, was −537 kcal/mol
against −122 kcal/mol for CH4.

From 10% to 40% CO2, the density of CO2 at the interface remained about twice
its density in the gas, and above 40% this ratio fell. We interpret this as the
interface approaching saturation, a state in which further CO2 adsorbs less
readily and the IFT changes little. For CH4 the ratio was constant at all
concentrations. This is consistent with its linear decline in IFT. As cushion
gas accumulated at the interface, less hydrogen was present there. This suggests
the IFT shifts from being set mainly by hydrogen to mainly by the cushion gas.

At the interface, water molecules showed a preference for aligning their dipoles
(the axis from a molecule's negative to positive end) parallel to the boundary.
With 20% CO2, the CO2 molecules showed a slight preference for lying parallel to
it. That preference weakened as CO2 rose to 40% and was then constant from 60%
to 100%. We conclude that this change in CO2 orientation up to 40% contributes
to the drop in IFT. Adding CO2 also weakened the parallel alignment of the water
molecules at the interface. Adding CH4 did not. This difference could contribute
to the larger drop in IFT with CO2.

The self-diffusion of hydrogen, its random molecular motion, slowed as the
concentration of either cushion gas rose. In the gas, hydrogen interacts with
cushion gas molecules that diffuse more slowly. At the interface, the adsorbed
cushion gas impedes hydrogen. Microbes that consume hydrogen, such as
methanogens, live mainly at the gas-water interface (Ebigbo et al., 2013).
Slower hydrogen diffusion there may therefore affect how fast they consume it.

## Limitations

All results are for one pressure and one temperature. From published
measurements (Chow et al., 2018; Kashefi et al., 2016; Liu et al., 2016; Pereira
et al., 2016), we infer that above 20 MPa, IFT is more sensitive to temperature
than to pressure. It varies only slightly as pressure rises and generally falls
as temperature rises. This suggests our models can be applied at higher
pressures at 373 K. We recommend refining the force field we used for CH4 (the
description of the forces between its molecules). We also recommend applying the
same method at lower pressures and over a range of temperatures.

## Glossary

**Adsorption:** the accumulation of molecules at a boundary, here the gas-water interface.

**Cushion gas:** gas, commonly CO2 or CH4, injected into a storage reservoir to form a compressible plume that allows hydrogen to be injected and withdrawn in cycles.

**Dipole:** the direction from the negative to the positive end of a water molecule, used here to define its orientation.

**Force field:** the set of equations and parameters that describes the forces between molecules in a simulation.

**Interaction energy:** a measure of how strongly two kinds of molecules attract one another, here CO2 or CH4 with water.

**Interfacial tension (IFT):** the force per unit length acting along the boundary between two fluids that do not mix.

**K (kelvin):** a temperature scale that starts at absolute zero, on which 373 K is about 100 °C.

**kcal/mol:** kilocalories per mole, a unit of energy per amount of substance.

**Molecular dynamics:** a computer simulation that calculates how every molecule moves under the forces between molecules.

**MPa (megapascal):** a unit of pressure, one million pascals.

**mN/m (millinewtons per metre):** the unit of interfacial tension.

**Nanometre:** one billionth of a metre.

**Self-diffusion:** the random movement of individual molecules within a fluid, measured by a diffusion coefficient.

## Cite

Chang, Qiuhao, Dempsey, David, Zhang, Liehui, Zhao, Yulong, Huang, Liangliang (2024). Molecular dynamics insights into gas-water interfacial tension: Optimizing hydrogen storage in subsurface conditions. International Journal of Hydrogen Energy, 64, 896-905. https://doi.org/10.1016/j.ijhydene.2024.03.341

```bibtex
@article{chang2024molecular,
  title = {Molecular dynamics insights into gas-water interfacial tension: Optimizing hydrogen storage in subsurface conditions},
  author = {Chang, Qiuhao and Dempsey, David and Zhang, Liehui and Zhao, Yulong and Huang, Liangliang},
  journal = {International Journal of Hydrogen Energy},
  year = {2024},
  volume = {64},
  pages = {896-905},
  publisher = {Elsevier BV},
  doi = {10.1016/j.ijhydene.2024.03.341},
  url = {https://ddempsey.github.io/papers/2024-chang-molecular-dynamics-insights-gas-water/}
}
```