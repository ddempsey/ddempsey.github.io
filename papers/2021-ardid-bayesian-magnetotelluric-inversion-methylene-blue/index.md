# Bayesian magnetotelluric inversion using methylene blue structural priors for imaging shallow conductors in geothermal fields

- **Authors:** Alberto Ardid (ORCID 0000-0001-8040-8193); David Dempsey; Edward Bertrand (ORCID 0000-0002-7379-2569); Fabian Sepulveda; Pascal Tarits; Flora Solon; Rosalind Archer
- **Journal:** Geophysics, vol. 86(3), pp. E171-E183 (2021)
- **Publisher:** Society of Exploration Geophysicists
- **DOI (version of record):** [https://doi.org/10.1190/geo2020-0226.1](https://doi.org/10.1190/geo2020-0226.1)
- **This page:** https://ddempsey.github.io/papers/2021-ardid-bayesian-magnetotelluric-inversion-methylene-blue/
- **Open PDF:** [https://ddempsey.github.io/papers/2021-ardid-bayesian-magnetotelluric-inversion-methylene-blue/ardid2021-bayesian-magnetotelluric-inversion.pdf](https://ddempsey.github.io/papers/2021-ardid-bayesian-magnetotelluric-inversion-methylene-blue/ardid2021-bayesian-magnetotelluric-inversion.pdf) (Published version)
- **Notice:** © 2021 Society of Exploration Geophysicists. Posted under SEG's author rights policy; this version is unmodified. Version of record: https://doi.org/10.1190/geo2020-0226.1. Use is subject to SEG terms of use and conditions.
- **Explainer:** all explainers on this site are AI-generated.
- **BibTeX:** https://ddempsey.github.io/papers/2021-ardid-bayesian-magnetotelluric-inversion-methylene-blue/citation.bib
- **Topics:** Geothermal systems
- **Keywords:** Geology; Geothermal gradient; Borehole; Electrical conductor; Bayesian probability; Inverse problem; Geophysics

## In brief

We developed a way to map the clay layer above a geothermal reservoir from electrical surveys, using clay tests on drill cuttings to reduce the range of possible depths. At Wairākei it returned depth ranges for the layer's boundaries and reduced the uncertainty in the depth of its base.

- Our Bayesian inversion returns a range of plausible depths for the top and bottom of the shallow conductor beneath each MT station, using clay tests from wells as prior information.
- In a synthetic test, a deterministic inversion placed the conductor's base about 65 m too shallow near the centre, and clay priors brought our estimate closer to the true base.
- At Wairākei, clay priors left the data fit almost unchanged, and the most constrained prior we tested cut the average bottom-depth uncertainty from 77 m to 54 m.
- Our 12-station Wairākei inversion took about 0.3 hours on four cores, against about 28 hours on 56 cores for a 3D inversion that can also image deeper structure.

## The problem

Early in a geothermal project, drilling targets are often defined using models
of underground electrical resistivity (Sepulveda et al., 2012). A geothermal
reservoir is commonly overlain by a layer of low-permeability clay that limits the
mixing of hot reservoir fluid with cooler surface water. This clay cap conducts
electricity well and appears in surveys as a shallow conductor (Johnston et al.,
1992). Zones where hot water rises are traditionally associated with a dome in
the base of the conductor (Arnason et al., 2000; Cumming, 2009).

Converting magnetotelluric (MT) survey data into a resistivity model, a step
called inversion, has no unique answer, because an infinite number of models can
explain the same data. Deterministic inversions address this by imposing a
preference on the model, such as the smoothest model that fits the data
(Constable et al., 1987). Selecting one model from the many possible could
misidentify the thickness of the conductor and compromise decisions about
drilling and resource estimates.

## What we did

We developed a Bayesian inversion, which returns many models consistent with the
data and with prior information. Our prior information came from methylene blue
(MeB) tests on drill cuttings, which estimate the content of conductive smectite
clay along a well (Gunderson et al., 2000). At each well, we fitted a box-shaped
profile to the MeB data: no clay, then constant clay, then no clay. Its two
steps, where clay appears and disappears down the hole, gave probability
distributions for the depths of the top and bottom of the clay cap. We
interpolated these distributions to the MT stations, with their uncertainty
growing linearly with distance from the wells at a rate set by a parameter, λ.

Beneath each MT station we then inverted for a three-layer model whose unknowns
are the thickness and resistivity of the top two layers and the resistivity of
the rock below. The middle layer represents the conductor. At Wairākei its
resistivity was limited to 1 to 5 ohm metres (Ωm), following earlier work there
(Sepulveda et al., 2012). We sampled the possible models with a Markov chain
Monte Carlo (McMC) algorithm (Foreman-Mackey et al., 2013).

We tested the method on a synthetic geothermal field and then on a profile of 12
MT stations and six wells with MeB data at Wairākei, New Zealand. We compared
the results with the deterministic inversion code ModEM (Kelbert et al., 2014).

## What we found

In the synthetic test, the ModEM model closely followed the true top of the
conductor, and our band of uncertainty mostly enclosed it. ModEM recovered parts
of the bottom better than our inversion without priors, but placed it about 65 m
too shallow near the centre. Elsewhere, our inversion without priors tended to
place it too deep, although at many locations the true base still lay within our
band of uncertainty. With MeB priors, our estimate of the base lay closer to the
true base.

In our inversion, the clay cap at Wairākei averages about 300 m thick. We
interpret the cap as absent beneath the two northwestern stations, outside the
main reservoir area mapped by an earlier direct current resistivity survey
(Risk, 1984). To the east the conductor thickens beneath station WT030a. This is
consistent with previous inversions (Sepulveda et al., 2012) and with conceptual
models in which the conductor domes above an upflow.

The inversions with the MeB prior (λ = ) and without it fit the data equally
well, with average root-mean-square (rms) misfits of 1.64 and 1.65. However,
they place the bottom of the conductor at different depths. Without a prior, the
average standard deviation of the bottom depth was 77 m. It fell to 64 m with λ =  and to 54 m with λ = . The top boundary changed little, from 31 m to 27
m. This supports the idea that the prior is most useful for the bottom boundary,
which MT resolves less well than the top.

<div class="widget" id="w-mebprior" role="group" aria-label="Interactive comparison of uncertainty in the top and bottom depths of the Wairākei conductor for different strengths of the clay prior"></div>

For the Wairākei profile, our inversion took about 0.3 hours on four cores,
against about 28 hours on 56 cores for a 3D ModEM inversion. This is because each
station is a small, independent problem with five parameters. ModEM used all the measured
periods, whereas we used only those that behave one-dimensionally. Even with
fewer, ModEM would take several hours. However, 3D inversions can image
resistivity to greater depths and are required where the structure is 2D or 3D.
In the synthetic test, our method was only slightly faster than a 2D ModEM
inversion.

The two methods broadly agree on the main features of the conductor. In the top
100 to 150 m, however, their resistivities differ by up to a factor of ten in
places. This is possibly related to poor resolution of the top-layer resistivity
in our model.

## Limitations

Our method models the ground beneath each station as flat layers, in one
dimension (1D). This is valid only where the MT data behave one-dimensionally,
as they do over the first 1 to 2 km at Wairākei. If the data showed 2D or 3D
behaviour at the depth of the conductor, our method would bias the boundary
depths. Because it relies on interpolation, the method also cannot resolve
lateral breaks in the conductor.

Without further refinement, the method may be limited to shallow, horizontally
extensive conductors such as the one we imaged at Wairākei. Future work could
extend it to 2D or 3D forward models or add other geological data as priors.

## Glossary

**Resistivity** is how strongly a material resists an electric current, measured
in ohm metres (Ωm). A low resistivity marks a good conductor.

**Magnetotellurics (MT)** is a passive survey that uses natural electric and
magnetic fields at the surface to estimate resistivity at depth.

A **period** is the time taken for one cycle of a varying field. Longer periods
sample deeper rock.

**Inversion** is the process of finding a model of the subsurface that
reproduces the measured data.

A **deterministic inversion** returns a single best-fitting model.

A **1D** (one-dimensional) model lets resistivity vary with depth only. **2D**
and **3D** models also let it vary in one or both horizontal directions.

**λ** is a parameter of our method that sets how quickly the uncertainty of the
prior grows with distance from a well.

A **Bayesian inversion** returns a range of models consistent with both the data
and prior information, with a probability for each.

A **prior** is a probability distribution that describes what is known about a
parameter before the data are considered, for example a most likely depth and its
uncertainty.

**Markov chain Monte Carlo (McMC)** is a method that draws a large sample of
models in proportion to their probability.

**Methylene blue (MeB)** is a dye whose uptake by drill cuttings measures their
content of conductive clay.

**Smectite** is a swelling clay mineral that conducts electricity well.

The **clay cap** is a layer of low-permeability clay, mainly smectite, that
overlies a geothermal reservoir.

The **upflow** is the zone where hot water rises from the reservoir towards the
surface.

The **standard deviation** measures the spread of a set of values about their
mean.

The **root-mean-square (rms) misfit** measures how far a model's predictions lie
from the data, scaled by the data error. Lower values mean a closer fit.

A **direct current resistivity survey** measures resistivity by passing a steady
current into the ground between electrodes.

## Cite

Ardid, Alberto, Dempsey, David, Bertrand, Edward, Sepulveda, Fabian, Tarits, Pascal, Solon, Flora, Archer, Rosalind (2021). Bayesian magnetotelluric inversion using methylene blue structural priors for imaging shallow conductors in geothermal fields. Geophysics, 86(3), E171-E183. https://doi.org/10.1190/geo2020-0226.1

```bibtex
@article{ardid2021bayesian,
  title = {Bayesian magnetotelluric inversion using methylene blue structural priors for imaging shallow conductors in geothermal fields},
  author = {Ardid, Alberto and Dempsey, David and Bertrand, Edward and Sepulveda, Fabian and Tarits, Pascal and Solon, Flora and Archer, Rosalind},
  journal = {Geophysics},
  year = {2021},
  volume = {86},
  number = {3},
  pages = {E171-E183},
  publisher = {Society of Exploration Geophysicists},
  doi = {10.1190/geo2020-0226.1},
  url = {https://ddempsey.github.io/papers/2021-ardid-bayesian-magnetotelluric-inversion-methylene-blue/}
}
```