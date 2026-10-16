# Surrogate-Based probabilistic assessment of hydrogen leakage through abandoned wells in depleted gas reservoirs for underground hydrogen storage

- **Authors:** Qiuhao Chang (ORCID 0000-0002-1608-3088); David Dempsey; Guilong Xu (ORCID 0000-0002-4214-4999); Liehui Zhang; Yulong Zhao
- **Journal:** Fuel, vol. 428, pp. 140374 (2027)
- **Publisher:** Elsevier BV
- **DOI (version of record):** [https://doi.org/10.1016/j.fuel.2026.140374](https://doi.org/10.1016/j.fuel.2026.140374)
- **This page:** https://ddempsey.github.io/papers/2027-chang-surrogate-probabilistic-assessment-hydrogen-leakage/
- **Open PDF:** [https://ddempsey.github.io/papers/2027-chang-surrogate-probabilistic-assessment-hydrogen-leakage/chang2027-surrogate-probabilistic-assessment.pdf](https://ddempsey.github.io/papers/2027-chang-surrogate-probabilistic-assessment-hydrogen-leakage/chang2027-surrogate-probabilistic-assessment.pdf) (Published version)
- **Full text (Markdown):** [https://ddempsey.github.io/papers/2027-chang-surrogate-probabilistic-assessment-hydrogen-leakage/fulltext.md](https://ddempsey.github.io/papers/2027-chang-surrogate-probabilistic-assessment-hydrogen-leakage/fulltext.md)
- **Notice:** Published version, reproduced under the CC BY 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1016/j.fuel.2026.140374
- **Explainer:** all explainers on this site are AI-generated.
- **BibTeX:** https://ddempsey.github.io/papers/2027-chang-surrogate-probabilistic-assessment-hydrogen-leakage/citation.bib
- **Topics:** CO2 & hydrogen storage
- **Keywords:** Environmental science; Leakage (economics); Probabilistic logic; Petroleum engineering; Hydrogen; Waste management

## In brief

We built a fast statistical approximation of reservoir simulations that predicts whether hydrogen stored in a depleted gas reservoir could leak up an abandoned well. In our models, the distance to that well and the injection rate had the largest effect on leakage probability.

- Tested on 60 simulations it had not seen, the surrogate model identified 16 of 18 leaking cases and all 42 non-leaking cases (accuracy 0.967).
- Within the tested ranges, moving the abandoned well from 70 to 700 m away lowered the predicted leakage probability by 0.53, the largest effect of the six continuous inputs.
- Raising the injection rate from 10,000 to 1,000,000 standard cubic metres a day raised predicted leakage probability by 0.44.
- Deeper and more porous reservoirs had lower leakage probability, while permeability between 100 and 1000 mD had no consistent direction of effect.
- At mid-range inputs, the three high-mobility relative permeability curves gave leakage probabilities of about 0.47 to 0.51, against 0.11 for the reference curve.

## The problem

Storing hydrogen underground could help balance its production and consumption (Tarkowski, 2019; Zivar
et al., 2021). Depleted gas reservoirs, with well-characterised geology and existing infrastructure, are
candidates for this storage. Leakage up abandoned wells is a safety and economic risk. Because hydrogen
molecules are small and diffuse readily, small defects in an old well's cement or casing could allow
sustained leakage.

Studies of this leakage have mainly used detailed reservoir simulations (e.g. Guo et al., 2025), which
are too slow to screen many sites and operating conditions early on. Surrogate models, fast statistical
approximations of a simulator, have been used to assess leakage through abandoned wells in CO2 storage
(Baek et al., 2023; Chen et al., 2023). In our review, comparable studies for hydrogen were few, and
relative permeability (how readily gas flows through rock whose pores also hold water) was typically
fixed to a single set of parameters. Our goal was a surrogate that predicts whether hydrogen leaks up an
abandoned well, treating relative permeability as uncertain, as the first stage of a two-stage workflow.

## What we did

We ran 800 simulations with the reservoir simulator Cirrus. The model reservoir is 1000 m thick, below a
500 m impermeable caprock and a 500 m aquifer. One well alternates six months of hydrogen injection with
six months of production. A second, abandoned well is a vertical channel of 4000 mD (millidarcies), by
our arithmetic 4 to 40 times the reservoir permeability. It represents a degraded well under
conservative assumptions, and is held fixed because a candidate well's integrity is generally unknown in
advance.

We varied six inputs, chosen by Latin hypercube sampling: reservoir depth (1000 to 3000 m), porosity
(0.1 to 0.5), permeability (100 to 1000 mD), injection rate (10,000 to 1,000,000 standard cubic metres
per day, Sm3/d), distance between the two wells (70 to 700 m) and number of cycles (1 to 10). Each case
also used one of ten relative permeability curves from published hydrogen-water data, grouped as high,
intermediate or low gas mobility. We used whole curves because treating each curve parameter as an
independent continuous input may produce unrealistic shapes.

A case counted as a leak if injected hydrogen reached the aquifer through the abandoned well during the
simulation. The surrogate predicts only whether leakage occurs. Leak rates and volumes depend on
individual well integrity, which may only become known once a risk is identified.

We fitted three Bayesian logistic regression models. The best fit by the deviance information criterion
was a random parameter model, in which each input's weight can vary from case to case. With the average
weights, the surrogate is one equation that runs in a spreadsheet.

## What we found

On 60 new simulations, at a cut-off probability of 0.5, the surrogate identified 16 of the 18 leaking
cases and all 42 non-leaking cases (accuracy 0.967, AUC 0.995). Lowering the cut-off to 0.3 identified
all 18 leaking cases, although 5 of the 23 flagged cases did not leak (our count, from a precision of
0.783). However, these scores measure agreement with the simulator. No field datasets of this leakage
are yet available.

Within the tested ranges, with other inputs at mid-range values, moving the abandoned well from 70 to
700 m away lowered the predicted leakage probability by 0.53, the largest effect. Raising the injection
rate across its range increased it by 0.44, because higher rates raise the pressure near the well and
expand the plume faster. Greater depth lowered the probability by 0.12. This is because, between 1 and 3
km, the higher pressure compresses the same mass of hydrogen into roughly 57% less volume. This limits
plume expansion and the chance of reaching the abandoned well. Higher porosity lowered it by 0.06. The
number of cycles and permeability had no consistent direction of effect. However, the permeability
result may not hold in less permeable or more heterogeneous reservoirs.

At mid-range inputs, the high-mobility curves gave probabilities of about 0.47 to 0.51, against 0.11 for
the intermediate reference curve. Two low-mobility curves (7 and 10) gave probabilities close to zero,
below 0.01 when we evaluate the fitted equation. The third (curve 6) was statistically indistinguishable
from the reference.

<div class="widget" id="w-leakprob" role="group" aria-label="Interactive calculator of predicted hydrogen leakage probability from the fitted surrogate model"></div>

The widget evaluates the fitted equation. Its starting values are our own inference of the paper's
"representative midpoint values". They are the middle of each range (505,000 Sm3/d for injection rate),
with 5 cycles in place of 5.5. These settings reproduce the paper's probability of 0.11 for curve 3,
about 1 in 9.

In 18 extra simulations, an abandoned-well permeability of 400 or 40,000 mD left the clear leak and
clear no-leak cases unchanged. One leaking case close to the leak/no-leak boundary became non-leaking at
400 mD, a value within the same order of magnitude as the reservoir permeability. These results suggest
that whether a leak occurs depends mainly on how far the plume spreads. However, a more permeable well
brought hydrogen into the aquifer earlier. In our interpretation, well permeability mainly controls the
rate of upward flow after plume arrival.

## Limitations

The reservoir is homogeneous, because heterogeneity is site-specific and rarely characterised at the
screening stage. We left out chemical and biological reactions, rock deformation and hydrogen
dissolution. Ten discrete curves cannot represent continuous variation in relative permeability.

Configurations that this first stage flags as high risk should then be simulated in more detail, with
reservoir heterogeneity and well-specific characteristics, to estimate leak rates, timing and volumes.

## Glossary

**Depleted gas reservoir:** a porous rock formation from which natural gas has already been produced.

**Abandoned well:** an old well that is no longer used and has been plugged, sometimes imperfectly.

**Caprock:** a low-permeability rock layer above a reservoir that stops fluids rising.

**Aquifer:** a water-bearing rock layer, here the layer above the caprock.

**Homogeneous reservoir:** a model reservoir whose rock properties are the same everywhere. Real reservoirs are heterogeneous, with properties that vary from place to place.

**Porosity:** the fraction of a rock's volume that is pore space.

**Permeability (mD):** how readily fluid flows through rock, measured here in millidarcies.

**Relative permeability:** the fraction of a rock's permeability available to one fluid when two fluids share the pores.

**Gas mobility:** how readily gas moves through the rock, set here by the relative permeability curve.

**Sm3/d:** standard cubic metres per day, a gas volume rate measured at surface conditions.

**Surrogate model:** a fast approximation trained on the outputs of a slower simulator.

**Latin hypercube sampling:** a method of choosing test cases that spreads them evenly across every input range.

**Bayesian model:** a statistical model whose weights are estimated as probability distributions.

**Logistic regression:** a statistical model that converts a weighted sum of inputs into a probability between 0 and 1.

**Random parameter model:** a logistic regression in which each input's weight can vary between cases.

**Deviance information criterion:** a score that compares Bayesian models by balancing fit against complexity.

**AUC:** the area under the receiver operating characteristic curve, a score for how well a model separates two outcomes, where 1 means perfect separation.

**Precision:** the share of cases flagged as leaks that did leak.

## Abstract

Hydrogen leakage through abandoned wells represents a critical risk for underground hydrogen storage (UHS) in depleted gas reservoirs, potentially leading to safety hazards and economic losses. Although reservoir-scale numerical simulations can capture leakage processes in detail, their computational cost limits their use in rapid scenario screening and early-stage design assessment. In this work, a probabilistic surrogate framework is developed to evaluate leakage likelihood under varying geological and operational conditions. The framework is intended as an early-stage screening tool to identify configurations that may pose a leakage risk and therefore warrant further detailed investigation. The surrogate is constructed using multiphase reservoir simulation results and incorporates six continuous variables together with ten families of H2 -water relative permeability curves spanning a range of low to high mobility that collectively represent structural uncertainty in gas–water flow. Validation against an independent simulation dataset shows that the surrogate achieves an overall prediction accuracy of 0.967 with an area under the ROC curve (AUC) of 0.995. Results indicate that, within the investigated ranges and under homogeneous reservoir conditions, well spacing and injection rate are the principal controls on leakage probability. Formation permeability does not show a stable directional influence under relatively high-permeability conditions (100–1000 mD), while reservoir depth and porosity are negatively associated with leakage probability. In addition, variability in relative permeability significantly affects predicted risk, with high-mobility curve families increasing leakage likelihood relative to intermediate conditions. This framework provides an efficient basis for leakage-aware screening and supports risk-informed evaluation during the early design stage of UHS deployment.

## Cite

Chang, Qiuhao, Dempsey, David, Xu, Guilong, Zhang, Liehui, Zhao, Yulong (2027). Surrogate-Based probabilistic assessment of hydrogen leakage through abandoned wells in depleted gas reservoirs for underground hydrogen storage. Fuel, 428, 140374. https://doi.org/10.1016/j.fuel.2026.140374

```bibtex
@article{chang2027surrogate,
  title = {Surrogate-Based probabilistic assessment of hydrogen leakage through abandoned wells in depleted gas reservoirs for underground hydrogen storage},
  author = {Chang, Qiuhao and Dempsey, David and Xu, Guilong and Zhang, Liehui and Zhao, Yulong},
  journal = {Fuel},
  year = {2027},
  volume = {428},
  pages = {140374},
  publisher = {Elsevier BV},
  doi = {10.1016/j.fuel.2026.140374},
  url = {https://ddempsey.github.io/papers/2027-chang-surrogate-probabilistic-assessment-hydrogen-leakage/}
}
```