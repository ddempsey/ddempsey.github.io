# Earthquakes Trigger Rapid Flash Boiling Front at Optimal Geologic Conditions

- **Authors:** P. Sanchez‐Alfaro (ORCID 0000-0001-7349-760X); I. Wallis; P. Iturrieta (ORCID 0000-0002-4787-1343); J. Rowland; D. Dempsey (ORCID 0000-0003-2135-5129); J. O’Sullivan (ORCID 0000-0002-6662-7688); M. Reich (ORCID 0000-0002-7269-7586); J. Cembrano (ORCID 0009-0003-1178-0874)
- **Journal:** Geophysical Research Letters, vol. 51(16), article e2023GL108109 (2024)
- **Publisher:** American Geophysical Union (AGU)
- **DOI (version of record):** [https://doi.org/10.1029/2023gl108109](https://doi.org/10.1029/2023gl108109)
- **This page:** https://ddempsey.github.io/papers/2024-sanchez-alfaro-earthquakes-trigger-rapid-flash-boiling/
- **Open PDF:** [https://ddempsey.github.io/papers/2024-sanchez-alfaro-earthquakes-trigger-rapid-flash-boiling/sanchez‐alfaro2024-alfaro-earthquakes-trigger.pdf](https://ddempsey.github.io/papers/2024-sanchez-alfaro-earthquakes-trigger-rapid-flash-boiling/sanchez‐alfaro2024-alfaro-earthquakes-trigger.pdf) (Published version)
- **Full text (Markdown):** [https://ddempsey.github.io/papers/2024-sanchez-alfaro-earthquakes-trigger-rapid-flash-boiling/fulltext.md](https://ddempsey.github.io/papers/2024-sanchez-alfaro-earthquakes-trigger-rapid-flash-boiling/fulltext.md)
- **Notice:** Published version, reproduced under the CC BY-NC-ND 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1029/2023gl108109
- **Explainer:** all explainers on this site are AI-generated and human-checked.
- **BibTeX:** https://ddempsey.github.io/papers/2024-sanchez-alfaro-earthquakes-trigger-rapid-flash-boiling/citation.bib
- **Topics:** Induced seismicity & faults
- **Keywords:** Geology; Front (military); Boiling; Flash (photography)

## In brief

An earthquake can make hot water boil in the fracture between two faults. In our models this flashing was limited, and complete flashing is highly unlikely. Opening was largest where the faults were separated by about 10% of their length and overlapped by about 2.5%.

- In more than 25,500 simulations, the average opening of a jog was largest where the faults were separated by about 10% of their length and overlapped by about 2.5%.
- In our calculations, a magnitude 1.0 earthquake flashed about 17% of 300°C water in the jog. With 200°C water, more than 10% flashing needed an earthquake above magnitude 3.
- Our calculated openings are about half those of Sanchez-Alfaro et al. (2016) and an order of magnitude smaller than those of Weatherley and Henley (2013).
- Modelled pressure in the jog recovered within 1 s. With magnitude 3.0 and 300°C water, fluid with over 5% vapour lasted up to about 2.8 hours.

## The problem

Earthquakes help to form some ore deposits (Sibson, 1987; Richards, 2013).
Where a fault splits into separate segments, slip during an earthquake can open
the fracture that joins them, a structure called a dilational jog. The opening
lowers the pressure of the hot water in the jog. Boiling caused by such a drop
in pressure is called flash vapourisation, or flashing. Flashing releases
gas from the water and can make dissolved minerals precipitate, or
come out of solution, including gold (Sanchez-Alfaro et al., 2016; Monecke et
al., 2023).

Weatherley and Henley (2013) used a simple piston model of a jog. They found
that small earthquakes could cause almost complete flashing of the water inside
it. The piston model sets the opening of the jog equal to the average slip on
the faults. This ignores the decrease in slip towards the fault ends and
overestimates the pressure drop. How far flashing spreads, and for how long, was
also poorly known (Sanchez-Alfaro et al., 2016). Our goal in this study was to
find (1) the jog geometry that gives the largest opening and pressure drop, and
(2) the extent and duration of the flashing that follows.

## What we did

We used TriBEM (Loveless, 2019), a boundary element model that calculates stress
and displacement in elastic rock, to compute slip on two nearly parallel faults
and opening of the jog between them. We ran more than 25,500 simulations,
varying how far apart the faults are and how far they overlap, for earthquakes
of moment magnitude 0.5 to 7.

A jog opens in milliseconds to seconds (Wu and McLaskey, 2019). We assumed
this is too fast for heat to be exchanged with the surrounding rock, and
calculated the new
pressure and the vapour fraction, the proportion of the fluid that is vapour, by
assuming that the water keeps its enthalpy, or heat content per kilogram, as it
expands. We started from three conditions in which water is at its boiling
point: 200°C at about 200 m depth, 240°C at about 400 m, and 300°C at about
1,000 m.

Finally, we used TOUGH2 (Pruess, 1991), a code that simulates the flow of heat
and water through rock, to model the water in and around the jog after the
earthquake. Each starting condition was combined with an earthquake of magnitude
1.0 (0.69 mm of opening) and one of magnitude 3.0 (6.5 mm).

## What we found

We find that, for every earthquake size we modelled, the average opening of the jog is
largest for a separation of about 10% of the fault length and an overlap of
about 2.5%. The pressure drop increases with the average opening. Field examples
suggest a different shape, in which faults overlap by about three times their
separation (Aydin and Schultz, 1990; Micklethwaite et al., 2012). This may be
because the geological record preserves the geometry best suited to the
regional stress field.

With 300°C water, a magnitude 1.0 earthquake turned about 17%
of the water to vapour. With 200°C water, more than 10% needed an earthquake
larger than magnitude 3. Our openings are about half those of Sanchez-Alfaro et
al. (2016) and an order of magnitude smaller than those of Weatherley and Henley
(2013). Both studies used the piston model. Our results indicate that complete
flashing is highly unlikely if the expansion exchanges no heat with the rock
and the water does not behave as an ideal gas.

Our smaller openings would reduce the gold precipitation rates of
Sanchez-Alfaro et al. (2016) to nearly half. Our results also support
Williams (2019) and Williams and Fagereng (2022), who showed that quartz
precipitated during an earthquake can fill less than 0.005 to 0.02% of the
new space. However, loss of gas during flashing would still be efficient at
depositing thin coatings of high-grade gold ore, micrometres to millimetres
thick (Sanchez-Alfaro et al., 2016).

In our simulations, pressure in the jog recovered in less than 1 s, as
water flowed in from the faults and the fractured rock around them (the damage
zone), and then from the unfractured host rock. The drop in pressure then moved
outwards as a front into the surrounding rock.
With a magnitude 1.0 earthquake and 200°C water, vapour was confined to the jog,
at less than 5%, and lasted less than a millisecond. With a magnitude 3.0
earthquake and 300°C water, flashing spread from the jog into the damage zone
and host rock. There, fluid with more than 5% vapour lasted up to 10,000 s,
about 2.8 hours. The vapour fraction reached about 30% in the jog, fell to 15%
in the damage zone 12.5 cm away, and rose again to more than 20% in the host
rock at 35 cm. This may be because the host rock is less permeable than the jog
and damage zone. Its lower permeability can limit the inflow of water to the
low-pressure front.

<div class="widget" id="w-flash-front" role="group" aria-label="Interactive comparison of vapour fraction and duration of flashing for the two end-member scenarios reported in the paper"></div>

## Limitations

In our mechanical model, all of the opening is in the jog and the faults
themselves do not open. This is an end-member case.
Although we modelled a single earthquake, the result is relevant to epithermal
deposits, formed by hot water less than 1.5 km deep. In these deposits,
thin layers of gold are deposited thousands to millions of times over thousands
of years. Our results support the hypothesis that minerals may precipitate in a
jog under conditions far from equilibrium. We suggest new efforts to model how
fast minerals precipitate under these conditions.

## Glossary

An **ore deposit** is a concentration of minerals, such as gold, rich enough to
mine.

**High-grade** ore contains a large concentration of metal.

The **epithermal** environment is the shallow part of a hot water system, less
than about 1.5 km deep and below 300°C.

A **dilational jog** is a fracture that joins two nearly parallel fault segments
and opens when the faults slip.

**Flash vapourisation**, or **flashing**, is boiling caused by a sudden drop in
pressure.

**Moment magnitude** is a measure of the size of an earthquake, based on fault
slip and rupture area.

A **boundary element model** calculates stress and displacement in elastic rock
from the movement of fault surfaces.

**Enthalpy** is the heat content of a fluid per unit mass.

The **vapour fraction** is the proportion of the fluid that is vapour.

The **damage zone** is the fractured rock on either side of a fault.

The **host rock** is the unfractured rock beyond the damage zone.

An **ideal gas** is a simplified model of a gas in which pressure, volume and
temperature follow one simple law.

**Permeability** is a measure of how easily water flows through a rock.

Under conditions **far from equilibrium**, reaction rates control the amount
of mineral that forms from a fluid, because the fluid and minerals have not reached
chemical balance.

A **micrometre** is a thousandth of a millimetre.

## Abstract

The interplay between seismic activity and fluid flow is essential during the evolution of hydrothermal systems. Although earthquakes can trigger transient fluid flow and phase changes in dilational jogs, the temporal scale and the geologic conditions that enhance such process are poorly quantified. Here, we use numerical simulations of deformation and fluid flow to constrain the conditions that maximize adiabatic boiling—referred to as flashing—and estimate the extent and duration of such process. We show that there is an optimal geometry for a dilational jog that maximizes co‐seismic flashing within the jog. Fluid flow simulations indicate that the duration, intensity, and propagation of the flashing front are limited and highly dependent on the magnitude of the co‐seismic slip and the initial pressure‐enthalpy conditions. Our results are valuable to better understand the implications of pressure fluctuations during the seismogenic cycle, as well the mineralization processes in the Earth's crust.

## Cite

Sanchez‐Alfaro, P., Wallis, I., Iturrieta, P., Rowland, J., Dempsey, D., O’Sullivan, J., Reich, M., Cembrano, J. (2024). Earthquakes Trigger Rapid Flash Boiling Front at Optimal Geologic Conditions. Geophysical Research Letters, 51(16), e2023GL108109. https://doi.org/10.1029/2023gl108109

```bibtex
@article{sanchez‐alfaro2024alfaro,
  title = {Earthquakes Trigger Rapid Flash Boiling Front at Optimal Geologic Conditions},
  author = {Sanchez‐Alfaro, P. and Wallis, I. and Iturrieta, P. and Rowland, J. and Dempsey, D. and O’Sullivan, J. and Reich, M. and Cembrano, J.},
  journal = {Geophysical Research Letters},
  year = {2024},
  volume = {51},
  number = {16},
  pages = {e2023GL108109},
  publisher = {American Geophysical Union (AGU)},
  doi = {10.1029/2023gl108109},
  url = {https://ddempsey.github.io/papers/2024-sanchez-alfaro-earthquakes-trigger-rapid-flash-boiling/}
}
```