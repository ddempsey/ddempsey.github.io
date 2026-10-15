# A three-dimensional coupled thermo-hydro-mechanical numerical model with partially bridging multi-stage contact fractures in horizontal-well enhanced geothermal system

- **Authors:** Pengliang Yu (ORCID 0000-0001-8774-8991); David Dempsey (ORCID 0000-0003-2135-5129); Rosalind Archer
- **Journal:** International Journal of Rock Mechanics and Mining Sciences, vol. 143, pp. 104787 (2021)
- **Publisher:** Elsevier BV
- **DOI (version of record):** [https://doi.org/10.1016/j.ijrmms.2021.104787](https://doi.org/10.1016/j.ijrmms.2021.104787)
- **This page:** https://ddempsey.github.io/papers/2021-yu-three-dimensional-coupled-thermo-hydro/
- **Open copy:** none posted yet; use the DOI.
- **Explainer:** all explainers on this site are AI-generated and human-checked.
- **BibTeX:** https://ddempsey.github.io/papers/2021-yu-three-dimensional-coupled-thermo-hydro/citation.bib
- **Topics:** Induced seismicity & faults; Geothermal systems
- **Keywords:** Bridging (networking); Geothermal gradient; Stage (stratigraphy); Geology; Multi stage; Numerical modeling

## In brief

We propose a geothermal well design in which fractures grow alternately from the injection and production wells and stop short of the other well. In our model, this forces water through the rock between fractures and keeps produced water hotter, for the same mass produced, than fractures joining both wells.

- In our model, partially bridging fractures delivered hotter water than fully bridging fractures for the same mass produced, but produced less water in total.
- At a point midway between two fractures, modelled failure began after 12.5 years with partially bridging fractures and after 14.5 years with fully bridging fractures.
- In our simulations, leaving fracture opening out of the model overestimated the failed rock volume by 10 to 20%. We expect the error to be smaller in deeper systems with higher stresses.
- Stresses from cooling had the largest effect on modelled stress changes. Stresses from fluid pressure had a minor effect and appeared to delay failure.

## The problem

Enhanced geothermal systems (EGS) aim to produce heat from hot rock whose
permeability is too low for water to flow through it naturally.
Water is injected down one well, absorbs heat from the rock, and returns up a
second well. To be viable, an EGS has to circulate water through a large
volume of rock while avoiding thermal short circuits, fast pathways that
return cold water to the production well early. However, technical and
financial challenges remain before EGS can be widely deployed.

In the usual design, a horizontal well is stimulated in several stages, and
each hydraulic fracture grows until it meets the second well (Han et al.,
2020; Li et al., 2016; Shiozawa and McClure, 2014). We call these fractures
fully bridging. Some injected water enters the rock between fractures,
absorbs heat, and exits into the production well (Asai et al., 2018).
However, this design is usually associated with early thermal breakthrough.

## What we did

We proposed partially bridging fractures. Half of the fractures grow from the
injection well and half from the production well, alternating along the
wells, and each stops short of the other well. Water entering an injection
fracture has to cross the rock between fractures, the stimulated reservoir
volume (SRV), to reach a production fracture.

To test the design, we built a three-dimensional thermo-hydro-mechanical
(THM) model in COMSOL Multiphysics, a finite element simulator. Each fracture
is two contacting surfaces that can separate when cooling and fluid pressure
remove the normal stress across them (Salimzadeh et al., 2018). Fracture
permeability rises as the fracture opens. The modelled rock lies at 4.5 to 5.5 km
depth, initially at 300 °C and 40 MPa. Injected water enters at 20 °C.

We compared designs by the temperature of the produced water at equal mass
produced. This is because any design can delay cooling by circulating less
water. We also computed the volume of rock in which stresses during
operation exceed the Mohr–Coulomb failure criterion. We used this failed
volume as a measure of secondary stimulation.

## What we found

Over 20 years of production in our model, the partially bridging design
delivered hotter water than the fully bridging design for the same mass
produced. The model fractures start out 20 times more permeable than the SRV.
In the fully bridging design, most of the water therefore stayed in the
fractures. In the partially bridging design, cold water reached the
production fractures only after crossing the SRV. However, the partially
bridging design produced less water, because the SRV is less permeable than
fractures that connect the wells.

<div class="widget" id="w-bridging" role="group" aria-label="Schematic cross-section comparing fully bridging and partially bridging fracture designs between an injection well and a production well, with the modelled time to failure at a point midway between two fractures"></div>

Cooling makes the rock contract. This lowers the horizontal stress in the
rock. Because our model rock starts at the failure limit, this stress drop
causes it to fail. In the partially bridging design, cold water travelled
further into the SRV. At a point midway between two fractures, modelled
failure began after 12.5 years with partially bridging fractures and after
14.5 years with fully bridging fractures. The failed volume was larger for
the partially bridging design at all times. We suggest this design would
promote more secondary stimulation, through shear failure, during
production.

For the partially bridging design at a fixed injection pressure of 45 MPa,
5 MPa above the initial reservoir pressure of 40 MPa, the injection rate fell
over time. For the same total volume, failure came sooner and over a larger
volume at fixed pressure than at fixed rate. This is because more water was injected early.
These results imply that careful thought should be given to choosing a
realistic injection scheme when models are used to predict EGS performance.

A single modelled fracture opened by about 3.5 mm. Midway
between the wells, failure came about 1.8 years earlier than for a fracture
that could not open and so kept its initial permeability. This is because
the more permeable fracture let cold water reach further into the rock.

However, opening also relieves stress. To isolate this effect, we reran the
four-fracture, partially bridging model with fractures that cannot open but
keep the same permeability. In these simulations,
leaving opening out of the model overestimated the failed volume by 10 to
20%. In a deeper EGS with higher stresses, where fractures might never open,
we expect the error to be smaller.

Stresses from cooling (thermoelastic) had the largest effect on stress
changes in the SRV. Failed volumes were much smaller when we removed them.
Stresses from fluid pressure (poroelastic) had a minor effect and appeared
to delay failure.

## Limitations

Fracture growth is not entirely controllable, particularly where existing
fractures alter the stress field or provide preferred paths for fracture
growth (McClure and Horne, 2014). A fracture that grew through to the second
well would need some form of plugging. We assumed that all rock started at
the failure limit, with no stress relief from earlier stimulation. This
assumption may not be valid at every site. Our results come from five sets
of simulations, with parameters taken largely from earlier studies. They
sample a small part of the range of possible reservoirs. More failure could
raise permeability, but we caution that thermal channelling could reduce the
efficiency of the heat sweep if fast pathways began to dominate (Rongved et
al., 2021).

Optimising injection temperature and pressure, well and fracture spacing,
and fracture number for specific field sites, alongside an analysis of
economic and environmental factors, should help establish whether partially
bridging designs are feasible.

## Glossary

An **enhanced geothermal system (EGS)** produces heat from hot rock whose
permeability has been increased by stimulation.

**Permeability** measures how easily fluid flows through rock.

A **hydraulic fracture** is a crack opened in rock by injecting fluid at high
pressure.

**Fully bridging** fractures connect the injection well directly to the
production well.

**Partially bridging** fractures grow from one well and stop short of the
other.

The **stimulated reservoir volume (SRV)** is the rock between the fractures,
made more permeable than the surrounding rock by stimulation.

A **thermal short circuit** is a fast flow path that returns cold injected
water to the production well early.

**Thermal breakthrough** is the arrival of cooler water at the production
well, after which the production temperature falls.

The **heat sweep** is the flow of injected water through the rock that
extracts its heat.

A **thermo-hydro-mechanical (THM)** model couples heat transfer, fluid flow,
and rock deformation.

A **finite element** simulator solves the governing equations on a mesh of
small elements.

A **megapascal (MPa)** is a unit of pressure.

The **normal stress** on a fracture presses its walls together.

The **Mohr–Coulomb criterion** states that rock fails when its shear stress
exceeds its frictional strength. Frictional strength rises with normal
stress.

**Secondary stimulation** is failure of rock, and possible permeability gain,
caused by injection during production, after the initial stimulation.

**Thermoelastic** stresses arise from contraction or expansion of rock as it
cools or heats.

**Poroelastic** stresses arise from changes in fluid pressure in the pores
of rock.

**Thermal channelling** is the concentration of flow into a few fast paths
that cool first.

## Cite

Yu, Pengliang, Dempsey, David, Archer, Rosalind (2021). A three-dimensional coupled thermo-hydro-mechanical numerical model with partially bridging multi-stage contact fractures in horizontal-well enhanced geothermal system. International Journal of Rock Mechanics and Mining Sciences, 143, 104787. https://doi.org/10.1016/j.ijrmms.2021.104787

```bibtex
@article{yu2021three,
  title = {A three-dimensional coupled thermo-hydro-mechanical numerical model with partially bridging multi-stage contact fractures in horizontal-well enhanced geothermal system},
  author = {Yu, Pengliang and Dempsey, David and Archer, Rosalind},
  journal = {International Journal of Rock Mechanics and Mining Sciences},
  year = {2021},
  volume = {143},
  pages = {104787},
  publisher = {Elsevier BV},
  doi = {10.1016/j.ijrmms.2021.104787},
  url = {https://ddempsey.github.io/papers/2021-yu-three-dimensional-coupled-thermo-hydro/}
}
```