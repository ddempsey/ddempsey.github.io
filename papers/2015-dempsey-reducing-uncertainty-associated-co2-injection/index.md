# Reducing uncertainty associated with CO2 injection and brine production in heterogeneous formations

- **Authors:** David Dempsey (ORCID 0000-0003-2135-5129); Daniel O’Malley; Rajesh Pawar
- **Journal:** International Journal of Greenhouse Gas Control, vol. 37, pp. 24-37 (2015)
- **Publisher:** Elsevier BV
- **DOI (version of record):** [https://doi.org/10.1016/j.ijggc.2015.03.004](https://doi.org/10.1016/j.ijggc.2015.03.004)
- **This page:** https://ddempsey.github.io/papers/2015-dempsey-reducing-uncertainty-associated-co2-injection/
- **Open copy:** none posted yet; use the DOI.
- **Explainer:** all explainers on this site are AI-generated and human-checked.
- **BibTeX:** https://ddempsey.github.io/papers/2015-dempsey-reducing-uncertainty-associated-co2-injection/citation.bib
- **Topics:** CO2 & hydrogen storage
- **Keywords:** Plume; Brine; Environmental science; Soil science; Petroleum engineering

## In brief

When CO2 is injected while brine is pumped out nearby, unknown variations in rock permeability make the outcome hard to predict. In a synthetic reservoir, permeability measured at five wells narrowed 30-year prediction ranges by 40 to 72%. Pressure tests between wells narrowed two of these ranges further.

- In our synthetic reservoir, fast flow paths brought CO2 to two of four production wells within about 11 years, whereas a uniform model predicted no arrival within 30 years.
- Permeability measured at five wells narrowed the 30-year prediction ranges for CO2 retention, brine production and CO2 production by 40, 45 and 72%.
- Weighting model runs by their match to simulated interference tests narrowed the brine and CO2 production ranges by a further 38 and 69%.
- After weighting, the ranges of predicted CO2 arrival time were narrower and included the true time at three of the four production wells.
- At the remaining well, a small permeable zone inside a larger region of low-permeability rock meant its CO2 arrival was still not predicted.

## The problem

One proposed way to reduce greenhouse gas emissions is to inject CO2 into deep
rock formations filled with salty water (brine). Because brine is less
compressible than CO2, injection is likely to raise brine pressure over large
distances (Birkholzer et al., 2009). Pumping brine out through nearby
production wells can limit this build-up (Buscheck et al., 2012). However, the
low pressure around a production well also draws CO2 towards it. Once CO2
arrives there (breakthrough), it is pumped back up with the brine. This
reduces the efficiency of storage.

How soon this happens depends on permeability, a measure of how easily fluid
flows through rock. Permeability can differ by many factors of ten (orders of
magnitude) and varies from place to place (heterogeneity). If an injection
well and a production well both intersect the same feature of high
permeability, such as a fault, CO2 may reach the production well more rapidly
than expected. Our goal was to reduce the uncertainty in such predictions,
using data that could plausibly be collected at a site.

## What we did

We generated a synthetic map of permeability across a reservoir (a
permeability field), called it the "true" field and treated it as a
hypothetical storage site.

We placed one injection well at the centre of four production wells 1 km away
(a five-spot pattern). Using FEHM, a code that simulates underground heat and
fluid flow, we modelled 30 years of operation. The injection well was held 5
MPa (megapascals, a unit of pressure) above the starting pressure of 30 MPa,
and the production wells 5 MPa below it. Each well was therefore offset by a
sixth of the starting pressure (our calculation). We judged our prediction
methods against the result for the true field.

We assumed that an operator knows only what could be measured: the
permeability at each of the five wells, and interference tests between them.
In an interference test, one well is pumped at a fixed rate and the pressure
drop is recorded at a second, shut-in well. This drop indicates how well the
rock connects the two wells.

The first method is Bayesian: it starts from a broad expectation (the prior)
and narrows it with measurements. Our prior was wide. It allowed permeability
to vary by "some orders of magnitude". The five well values gave a sample
standard deviation of 0.73, less than the true value of 0.91. These correspond
to factors of about 5 and 8 in permeability (our calculation). We used the
well value of 0.73 to update the prior into a narrower distribution (the
posterior). We built 324 permeability fields from the prior and 336 from the
posterior, each matching the measured permeability at all five wells, and
simulated storage in each one. The second method simulated the four
interference tests in every posterior field. Fields whose pressure responses
were closer to the true tests counted for more when we combined the
predictions.

## What we found

In the true field, a large part of the area between two of the production
wells is more permeable than average. Fast pathways brought CO2 to these two
wells within about 11 years. In the uniform model, CO2 reached none of the
wells within 30 years.

The well measurements narrowed the 90% prediction ranges for CO2 retention,
brine production and CO2 production by 40, 45 and 72%. The narrowing came
mainly from excluding fields with the fastest or slowest flow. The true
outcome fell within each range, although for brine production it lay close to
the lower edge. For CO2 arrival times the improvement differed from well to
well. Wells 1 and 2 had almost equal measured permeability and similar
predicted arrival times. In the true field, CO2 reached well 1 early but did
not reach well 2 within 30 years.

Weighting by interference tests narrowed the brine and CO2 production ranges
by a further 38 and 69%. For CO2 retention the further reduction was 8%. This
is probably because retention cannot be split into contributions from
individual wells. After weighting, the ranges of predicted arrival time were
narrower and included the true time at three of the four production wells. At
well 3, the median prediction became 10 years, against a true value of 11.

<div class="widget" id="w-envelopes" role="group" aria-label="Interactive comparison of prediction range sizes before and after each data step, for CO2 retention, brine production and CO2 production"></div>

Combining both steps, the brine production range is about 34% of its prior
size and the CO2 production range about 9% (our calculation), as the widget
shows.

## Limitations

At well 2, which sampled a small permeable zone inside a larger region of
low-permeability rock, weighting raised the median predicted arrival from 8 to
16 years, against a true value of more than 30. The methods need further
refinement for cases like this. For all three flow outcomes, the true values
tended to sit in the lower half of the prediction ranges. We attribute this to
the method used to build the fields, which biases them towards the mean of the
five well values. That mean is slightly above the true mean. The model also
ignores buoyancy and measurement error. It assumes that permeability is
correlated over at least 3 km: values at points closer together than this are
not independent. Many of these assumptions, such as the long-range
correlation, may be regarded as controversial. Where several models are
plausible, the procedure would need to be repeated for each.

As new wells are drilled and more interference tests are run, the analysis can
be updated to narrow the prediction ranges further.

## Glossary

**Brine** is the salty water that fills the pores of a deep storage rock.

**Breakthrough** is the arrival of injected CO2 at a production well.

A **five-spot pattern** has one injection well at the centre of a square of
four production wells.

**Heterogeneity** is the variation of a rock property, here permeability, from
place to place.

An **interference test** pumps one well at a fixed rate and records the
pressure drop at another, shut-in well.

**MPa** (megapascal) is a unit of pressure.

**Permeability** measures how easily fluid flows through rock.

The **prior** is the range of values we expected before seeing the data, and
the **posterior** is that range updated with the data.

A **prediction range** is the band that contains 90% of the model results.

A **production well** pumps fluid out of the reservoir.

**Retention** is the CO2 injected minus the CO2 that comes back out with the
brine.

The **standard deviation** of the logarithm of permeability measures how
widely permeability varies, in powers of ten.

## Cite

Dempsey, David, O’Malley, Daniel, Pawar, Rajesh (2015). Reducing uncertainty associated with CO2 injection and brine production in heterogeneous formations. International Journal of Greenhouse Gas Control, 37, 24-37. https://doi.org/10.1016/j.ijggc.2015.03.004

```bibtex
@article{dempsey2015reducing,
  title = {Reducing uncertainty associated with CO2 injection and brine production in heterogeneous formations},
  author = {Dempsey, David and O’Malley, Daniel and Pawar, Rajesh},
  journal = {International Journal of Greenhouse Gas Control},
  year = {2015},
  volume = {37},
  pages = {24-37},
  publisher = {Elsevier BV},
  doi = {10.1016/j.ijggc.2015.03.004},
  url = {https://ddempsey.github.io/papers/2015-dempsey-reducing-uncertainty-associated-co2-injection/}
}
```