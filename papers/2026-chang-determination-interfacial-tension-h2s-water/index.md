# Determination of interfacial tension for H2-H2S-water and CH4-H2S-water mixtures under different geological conditions for underground hydrogen storage

- **Authors:** Qiuhao Chang; David Dempsey; Liangliang Huang
- **Journal:** Journal of Energy Storage, vol. 143, pp. 119683 (2026)
- **Publisher:** Elsevier BV
- **DOI (version of record):** [https://doi.org/10.1016/j.est.2025.119683](https://doi.org/10.1016/j.est.2025.119683)
- **This page:** https://ddempsey.github.io/papers/2026-chang-determination-interfacial-tension-h2s-water/
- **Open copy:** none posted yet; use the DOI.
- **Explainer:** all explainers on this site are AI-generated and human-checked.
- **BibTeX:** https://ddempsey.github.io/papers/2026-chang-determination-interfacial-tension-h2s-water/citation.bib
- **Topics:** CO2 & hydrogen storage
- **Keywords:** Surface tension; Hydrocarbon; Chemistry; Petroleum engineering; Hydrogen

## In brief

Hydrogen stored in depleted oil and gas reservoirs may mix with hydrogen sulfide (H2S). In our molecular simulations, H2S lowered the interfacial tension between the gas and pore water more than pressure or temperature did. We fitted a linear formula in H2S content, pressure and temperature to predict it.

- In our simulations, 10 mol% H2S lowered the interfacial tension of hydrogen and methane against water by about 7 to 14 mN/m, and 40 mol% by 31 to 49 mN/m.
- Interfacial tension also fell as pressure rose from 10 to 30 MPa and as temperature rose from 298 to 343 K, by smaller amounts.
- We suggest the temperature effect comes from weaker attraction among water molecules, and the pressure effect from more H2S gathering at the interface.
- A linear formula in H2S fraction, pressure and temperature reproduced test simulations with average errors of 1.66 mN/m for hydrogen and 1.71 mN/m for methane.

## The problem

Growing hydrogen production and demand would require large-scale storage for
times when the two do not match. Depleted hydrocarbon reservoirs could hold up
to 1 billion Nm³ of hydrogen, against about 9 million Nm³ for cryogenic or
high-pressure tanks (Nicol et al., 2022; Zivar et al., 2021; Amid et al.,
2016). By our arithmetic, this is more than 100 times the tank capacity. A
cushion gas, such as methane (CH4), may first be injected to maintain the
reservoir pressure (Kanaani et al., 2022; Zamehrian and Sedaee, 2022).

Hydrogen sulfide (H2S), which is toxic and can corrode steel, may already be
present in the reservoir. It could also form there through geochemical
reactions or the activity of microbes (Gregory et al., 2019; Dopffel et al.,
2021). H2S in the pore space can change the interfacial tension (IFT) between
the gas and the remaining pore water, and through it the distribution of gas
in the reservoir (Chang et al., 2024; Zhang et al., 2022). Measuring IFT
directly is difficult because H2S is hazardous, and our earlier simulations
covered only 343 K and 14.5 MPa (Chang et al., 2024). Here we extend them to a
wider range of temperatures and pressures.

## What we did

We simulated the motion of individual molecules (molecular dynamics). Each
simulation placed a layer of 2,048 water molecules between two regions of gas
holding 1,024 molecules in total. The gas was hydrogen or methane, with H2S
making up 0, 10, 20, 30 or 40% of its molecules (0 to 40 mol%), at 10, 14.5,
22.5 and 30 MPa.

Storage at depths of up to 1,000 m is expected to operate at 323 to 343 K
(Tarkowski, 2019; Pan et al., 2021). Bacteria that generate H2S are typically
most active below 323 K (Bernardez et al., 2013; Jørgensen et al., 1992;
Machel, 2001). To cover both ranges, we simulated 298 K and 343 K (25 °C and
70 °C, our conversion).

Simulated densities of the pure gases and water were within 0.3% to 6% of the
NIST database, and simulated pure-gas IFTs were within about 7% of
experiments. Because no IFTs have been reported for the mixtures, we could
test only the pure-gas values.

## What we found

IFT fell as the H2S content rose, in every simulated condition. At 10 mol%,
H2S lowered the IFT of hydrogen and methane against water by about 7 to 14
mN/m. At 40 mol%, the reduction was 31 to 49 mN/m. For hydrogen at 343 K and
14.5 MPa, the IFT fell from 58.21 mN/m at 10 mol% H2S to 26.13 mN/m at 40
mol%. This is because H2S gathers at the gas–water interface (Chang et al.,
2024). In our simulations, its density there exceeded that in the gas or the
water.

IFT also fell as pressure and temperature rose, by smaller amounts. In our
fitted formula, raising the temperature from 298 to 343 K lowers IFT by about
5.3 mN/m for hydrogen and 4.0 mN/m for methane. Raising the pressure from 10
to 30 MPa lowers it by about 7.4 and 6.1 mN/m. Adding 10 mol% H2S lowers it by
about 11.3 and 8.7 mN/m.

We suggest the temperature effect comes from the water. In our simulations,
the cohesive energy of water fell as temperature rose. As this attraction
weakens, water molecules move further apart and the interface widens. At 20
mol% H2S and 14.5 MPa, the interface widened from 4.7 to 5.2 Å with hydrogen
and from 4.4 to 5.1 Å with methane between 298 and 343 K. Earlier studies
report lower IFT across wider interfaces (Shiga et al., 2023; Omrani et al.,
2023; Mirzaeifard et al., 2018). The wider interface may contribute to the
lower IFT at 343 K.

Pressure had little effect on the cohesive energy of water. The attraction of
water to H2S and to methane increased with pressure. More of these molecules
therefore gathered at the interface. Because H2S has a lower IFT against water
than hydrogen or methane, the extra H2S lowered the IFT further. The interface
also narrowed slightly as pressure rose, whereas it widened as temperature
rose. We tentatively attribute this to compression. The simulation box
shortened as pressure rose and pressed the gas and water together. This may
also lower the IFT (Mirzaeifard et al., 2018).

Because the trends were close to linear, we fitted a linear formula in H2S
fraction, pressure and temperature for each gas. We fitted it to 30 of the 40
simulated values for each gas and tested it on the other 10. The average
absolute deviation was 1.66 mN/m for hydrogen and 1.71 mN/m for methane.
Within the simulated conditions, reservoir simulators can use the formula
instead of new simulations.

<div class="widget" id="w-ift-h2s" role="group" aria-label="Calculator for the fitted interfacial tension formula, with the simulated values for comparison"></div>

For hydrogen with 20 mol% H2S at 14.5 MPa and 343 K, the formula gives 48.3
mN/m, against 47.99 mN/m from the simulation (our calculation).

## Limitations

We did not include salinity or dissolved ions. Our mixtures held two gases,
whereas a reservoir may hold several, for example hydrogen, CO2 and H2S. With
only two temperatures, we represented temperature by a linear term. The
formula is not intended for use outside 298 to 343 K and 10 to 30 MPa, or
above 40 mol% H2S. Hotter reservoirs would need further calibration, for
example simulations between and above our two temperatures.

Experiments are still needed to confirm the simulated mixture values. Future
work could couple our IFT predictions to relative permeability and capillary
pressure with H2S present.

## Glossary

A **depleted hydrocarbon reservoir** is a porous rock formation from which
most of the oil or gas has been produced.

**Nm³** (normal cubic metre) is a volume of gas measured at standard
temperature and pressure.

A **cushion gas** is gas left permanently in a storage reservoir to maintain
its pressure.

**Interfacial tension (IFT)** is the force per unit length along the boundary
between two fluids, here gas and water. Our tabulated mixture values range
from 17 to 69 mN/m.

**mN/m** (millinewtons per metre) is the unit of IFT.

**mol%** is the percentage of molecules in a mixture that belong to one
species. The **mole fraction** is the same quantity expressed between 0 and 1.

A **cryogenic tank** stores hydrogen as a cooled liquid.

The **NIST database** is a database of fluid properties from the US National
Institute of Standards and Technology.

**Molecular dynamics** is a simulation method that follows the motion of
individual molecules from the forces between them.

**K** (kelvin) is a unit of temperature. 298 K is 25 °C.

**MPa** (megapascal) is a unit of pressure equal to one million pascals.

**Cohesive energy** of water is the energy of attraction among water
molecules, per molecule.

The **interface width** is the distance over which the water density falls
from 90% to 10% of its value in bulk water.

**Å** (ångström) is a unit of length equal to 10⁻¹⁰ m.

The **average absolute deviation** is the mean size of the difference between
predicted and simulated values.

**Relative permeability** describes how easily one fluid flows through rock
when another fluid also occupies the pores.

**Capillary pressure** is the pressure difference across the interface between
two fluids in a pore.

## Cite

Chang, Qiuhao, Dempsey, David, Huang, Liangliang (2026). Determination of interfacial tension for H2-H2S-water and CH4-H2S-water mixtures under different geological conditions for underground hydrogen storage. Journal of Energy Storage, 143, 119683. https://doi.org/10.1016/j.est.2025.119683

```bibtex
@article{chang2026determination,
  title = {Determination of interfacial tension for H2-H2S-water and CH4-H2S-water mixtures under different geological conditions for underground hydrogen storage},
  author = {Chang, Qiuhao and Dempsey, David and Huang, Liangliang},
  journal = {Journal of Energy Storage},
  year = {2026},
  volume = {143},
  pages = {119683},
  publisher = {Elsevier BV},
  doi = {10.1016/j.est.2025.119683},
  url = {https://ddempsey.github.io/papers/2026-chang-determination-interfacial-tension-h2s-water/}
}
```