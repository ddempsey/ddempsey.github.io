# Numerical modeling of injection, stress and permeability enhancement during shear stimulation at the Desert Peak Enhanced Geothermal System

- **Authors:** David Dempsey (ORCID 0000-0003-2135-5129); Sharad Kelkar; Nicholas Davatzes; Stephen Hickman; Daniel Moos
- **Journal:** International Journal of Rock Mechanics and Mining Sciences, vol. 78, pp. 190-206 (2015)
- **Publisher:** Elsevier BV
- **DOI (version of record):** [https://doi.org/10.1016/j.ijrmms.2015.06.003](https://doi.org/10.1016/j.ijrmms.2015.06.003)
- **This page:** https://ddempsey.github.io/papers/2015-dempsey-numerical-modeling-injection-stress-permeability/
- **Open PDF:** [https://ddempsey.github.io/papers/2015-dempsey-numerical-modeling-injection-stress-permeability/dempsey2015-numerical-modeling-injection.pdf](https://ddempsey.github.io/papers/2015-dempsey-numerical-modeling-injection-stress-permeability/dempsey2015-numerical-modeling-injection.pdf) (Accepted manuscript (peer-reviewed, author's version))
- **Full text (Markdown):** [https://ddempsey.github.io/papers/2015-dempsey-numerical-modeling-injection-stress-permeability/fulltext.md](https://ddempsey.github.io/papers/2015-dempsey-numerical-modeling-injection-stress-permeability/fulltext.md)
- **Notice:** Accepted manuscript. © 2015. This manuscript version is made available under the CC-BY-NC-ND 4.0 license https://creativecommons.org/licenses/by-nc-nd/4.0/. The version of record is available at https://doi.org/10.1016/j.ijrmms.2015.06.003
- **Explainer:** all explainers on this site are AI-generated and human-checked.
- **BibTeX:** https://ddempsey.github.io/papers/2015-dempsey-numerical-modeling-injection-stress-permeability/citation.bib
- **Topics:** Induced seismicity & faults; Geothermal systems
- **Keywords:** Wellhead; Geology; Geotechnical engineering; Geothermal gradient; Injection well; Pore water pressure; Overburden pressure; Shear (geology)

## In brief

In 2010, cold water injected below the pressure that opens fractures raised the injectivity of well 27-15 at Desert Peak by an order of magnitude. Our model suggests cooling, and the stresses it caused, kept fractures failing where overpressure was too low. Pressure was still needed to push water in.

- Injectivity was stable at wellhead pressures up to 2.4 MPa and rose only at 3.1 MPa. Our model reproduces the absence of stimulation and approximately captures the timing of the onset.
- At the low pressure steps, water left the well only about 20 °C cooler than the rock. In our model, this was too little cooling to make fractures slip.
- Overpressure fell off quickly with distance from the well. In our model, cooling and the stresses it caused beyond the cold rock kept fractures failing further out.
- From 18 m to the edge of the failure front at 30 m, stress changes outside the cooled rock contributed most to modelled failure. These stresses are probably overestimated, because the model cannot represent tensile failure.
- Late in the 3.1 MPa step, injectivity gains were small, but the modelled stimulated volume kept growing with the volume of cold water injected.

## The problem

Heat can be extracted from hot rock only if water can flow through it. When
drilled, well 27-15 at the Desert Peak geothermal field, Nevada, accepted
water poorly. In 2010, it was stimulated to create an enhanced geothermal
system (EGS), a network of fractures in hot rock through which water can
circulate (Chabora et al., 2012). In shear stimulation, cold water is injected
below the minimum principal stress so that existing fractures slip and their
mismatched rough walls prop them open.

The wellhead pressure was raised in four steps, to at most 1.7, 2.4, 3.1 and
3.7 MPa. All stayed below the 5.2 MPa limit set to avoid hydraulic fracturing.
Injectivity, the injection rate divided by the wellhead pressure, did not
change at the first two steps. It first rose during the 3.1 MPa step and
improved by an order of magnitude. Our goal was to model the stress and
permeability changes it caused.

## What we did

We built two models with FEHM, a simulator that couples fluid flow, heat
transfer and rock deformation (Zyvoloski, 2007). The first models heat
exchange between the injected water and the hot rock along 1030 m of well. It
predicts the temperature and pressure of the water where it leaves the well.

These values are the inputs to the second model. Each point in its grid
contains 100 fractures, with orientations sampled from the 72 fractures imaged
in the well (Davatzes and Hickman, 2009). A fracture fails under the
Mohr–Coulomb criterion when its shear stress exceeds its frictional strength.
Its permeability then rises with slip, following laboratory sliding
experiments on granite and marble (Lee and Cho, 2002). The injection rate is
computed from the bottom-hole pressure and the evolving permeability.

## What we found

From stresses measured in the well (Hickman and Davatzes, 2010) and friction
coefficients of 0.65 to 0.96 from tests on core (Lutz et al., 2010), failure
of the best-oriented fractures should begin once fluid pressure at depth
exceeds its initial value by 2.1 to 4.8 MPa. The overpressure at depth was the
wellhead pressure plus about 1.1 MPa from the weight of water filling the
well. Even the first step therefore exceeded the lower end of this range, yet
injectivity did not rise until the third step. The range applies only to the
best-oriented fractures. For the friction coefficient of 0.75 in our model, it
is about 2.8 to 3.9 MPa (our arithmetic). In our model, the water at the first
two steps was also only about 20 °C cooler than the rock. Overpressure and
cooling together were too small for fractures to fail.

<div class="widget" id="w-critpressure" role="group" aria-label="Interactive plot of the overpressure at which shear failure should begin at Desert Peak against friction coefficient, compared with the overpressure at depth for a chosen wellhead pressure"></div>

The model reproduced the stable early injectivity and approximately captured
the onset of injectivity gain near day 35. Matching the late injectivity
required each fracture's permeability to rise by up to a factor of 50. This is
probably an overestimate, because the model leaves out elastic opening of
fractures.

The water at the first two steps warmed on its way down because injection was
slow. At 3.1 MPa, the higher injection rate delivered colder water. Cooling
makes rock contract and reduces the normal stress on fractures. Together with
the fluid pressure, this brought fractures to failure. Failure raised
permeability and the injection rate. Faster injection then delivered still
colder water.

Overpressure fell off quickly with distance from the well. Several metres out
it was too low to cause failure, yet failure continued. Because cold water
crossed the stimulated rock with little warming, the temperature drop at the
front remained sharp. The cooled rock is also mechanically coupled to the rock
around it. As it contracts, it exerts stress beyond the cold zone. We call
this non-local stress. At day 63, the drop in normal stress from cooling
contributed most to failure next to the well. From 18 m out to the edge of the
failure front at 30 m, non-local shear stress contributed most. This suggests
that the failure front can sometimes be advanced by stress from the cooled
rock behind it. However, in our model cooling put the rock near the well in
tension. The model cannot represent tensile failure. Non-local stresses are
therefore probably smaller and less extensive than modelled, although we
expect they would still contribute to failure.

The modelled stimulated volume began to grow around day 37. By the end of the
3.1 MPa step it reached 46,000 m³, enough to fill a cube about 36 m on each
side (our conversion). After about day 55, injectivity gains were small, but
the volume kept growing. Its growth correlated closely with the volume of
injected water colder than the rock.

## Limitations

Injectivity fell by about a factor of two during each shut-in between steps,
and our model cannot lose permeability. We therefore modelled only the first
67 days. Only one microearthquake was detected. Both observations would fit a
stimulation driven entirely by elastic opening of fractures, a mechanism we
cannot rule out. However, the abrupt rise after two stable steps suggests a
pressure threshold, as shear failure requires. We also estimate that slip on
fractures 4.4 to 20.5 m across, close to the size of the modelled stimulated
zone, would have gone undetected.

The modelled volume probably underestimates the rock affected by injection,
because the model assumes rock and water share one temperature.

Late in a stimulation, when injectivity gains become too small to measure,
microseismic monitoring or tracer tests may be needed to follow the growth of
the stimulated volume.

## Glossary

An **enhanced geothermal system (EGS)** produces heat from hot rock whose
permeability has been increased by stimulation.

**Permeability** measures how easily fluid flows through rock.

**Shear stimulation** is injection of water below the minimum principal stress
so that existing fractures slip and become more permeable.

**Injectivity** is the injection rate divided by the wellhead pressure.

A **megapascal (MPa)** is a unit of pressure, about ten times atmospheric
pressure.

The **friction coefficient** sets the shear stress a fracture can resist for a
given normal stress. Higher values mean a stronger fracture.

The **best-oriented fractures** are those whose angle to the stresses brings
them closest to slipping.

**Overpressure** is fluid pressure above its initial value in the rock.

The **minimum principal stress** is the smallest compressive stress in the
rock. Fluid above this pressure can open a hydraulic fracture.

**Elastic opening** is reversible widening of a fracture as fluid pressure
rises or the rock cools. The fracture closes again when the pressure falls or
the rock reheats.

A **hydraulic fracture** is a new tensile crack opened by fluid pressure.

The **Mohr–Coulomb criterion** states that a fracture slips when its shear
stress exceeds the friction coefficient times the normal stress, reduced by
fluid pressure.

The **normal stress** on a fracture presses its walls together. The **shear
stress** pushes them to slide past each other.

The **failure front** is the outer edge of the rock in which fractures have
failed.

**Non-local stress** is stress induced in rock beyond the cooled region by the
contraction of the cooled rock.

The **stimulated volume** is the volume of rock whose permeability has
increased.

A **shut-in** is a period when injection stops and the well is closed.

## Cite

Dempsey, David, Kelkar, Sharad, Davatzes, Nicholas, Hickman, Stephen, Moos, Daniel (2015). Numerical modeling of injection, stress and permeability enhancement during shear stimulation at the Desert Peak Enhanced Geothermal System. International Journal of Rock Mechanics and Mining Sciences, 78, 190-206. https://doi.org/10.1016/j.ijrmms.2015.06.003

```bibtex
@article{dempsey2015numerical,
  title = {Numerical modeling of injection, stress and permeability enhancement during shear stimulation at the Desert Peak Enhanced Geothermal System},
  author = {Dempsey, David and Kelkar, Sharad and Davatzes, Nicholas and Hickman, Stephen and Moos, Daniel},
  journal = {International Journal of Rock Mechanics and Mining Sciences},
  year = {2015},
  volume = {78},
  pages = {190-206},
  publisher = {Elsevier BV},
  doi = {10.1016/j.ijrmms.2015.06.003},
  url = {https://ddempsey.github.io/papers/2015-dempsey-numerical-modeling-injection-stress-permeability/}
}
```