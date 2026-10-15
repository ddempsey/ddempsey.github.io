# Impact of operational parameters on water invasion in underground hydrogen storage: A numerical investigation of the Ahuroa field, New Zealand

- **Authors:** Jinjiang Liu (ORCID 0000-0002-9102-8812); David Dempsey; Andy Nicol; Matt Parker; John Passmore (ORCID 0009-0002-0897-4558)
- **Journal:** International Journal of Hydrogen Energy, vol. 153, pp. 150236 (2025)
- **Publisher:** Elsevier BV
- **DOI (version of record):** [https://doi.org/10.1016/j.ijhydene.2025.150236](https://doi.org/10.1016/j.ijhydene.2025.150236)
- **This page:** https://ddempsey.github.io/papers/2025-liu-impact-operational-parameters-water-invasion/
- **Open PDF:** [https://ddempsey.github.io/papers/2025-liu-impact-operational-parameters-water-invasion/liu2025-impact-operational-parameters.pdf](https://ddempsey.github.io/papers/2025-liu-impact-operational-parameters-water-invasion/liu2025-impact-operational-parameters.pdf) (Published version)
- **Full text (Markdown):** [https://ddempsey.github.io/papers/2025-liu-impact-operational-parameters-water-invasion/fulltext.md](https://ddempsey.github.io/papers/2025-liu-impact-operational-parameters-water-invasion/fulltext.md)
- **Notice:** Published version, reproduced under the CC BY 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1016/j.ijhydene.2025.150236
- **Explainer:** all explainers on this site are AI-generated and human-checked.
- **BibTeX:** https://ddempsey.github.io/papers/2025-liu-impact-operational-parameters-water-invasion/citation.bib
- **Topics:** CO2 & hydrogen storage
- **Keywords:** Field (mathematics); Environmental science; Hydrogen

## In brief

We modelled hydrogen storage in the depleted Ahuroa gas field, New Zealand, to evaluate how operating choices affect water rising toward the wells. In our model, longer or faster withdrawal and a smaller cushion of gas produced the most water.

- In our model, hydrogen gave lower water production rates than the same surface volumes of natural gas, but it holds about a third of the energy per unit volume.
- Injecting cushion gas for 30, 90 or 150 days gave 4.52, 3.44 and 2.74 × 10^4 m³ of water over the simulation, because larger cushions kept reservoir pressure higher.
- Doubling the withdrawal rate doubled the water production rate, and the length of the withdrawal stage had the largest effect on water production.
- Over ten cycles, injection and withdrawal stages of 60, 90 and 120 days produced 25,470, 34,430 and 42,050 m³ of water, with a wider range of well pressure for longer stages.
- After water reached the well, all four remedial strategies prevented further increases in water production, and injecting more hydrogen than was withdrawn was most effective.

## The problem

New Zealand's wind generation is seasonal, higher in winter and spring than in summer and autumn
(Nottage, 2010). Surplus electricity could make hydrogen by electrolysis (Chang and Rajuli, 2024),
to be stored until it is needed (Arsad et al., 2022). If every technically viable use switched to
hydrogen, national demand could reach 3 million tonnes a year (Vatankhah Ghadim et al., 2024). New
Zealand's gas storage supplies about a tenth of annual gas demand. Storing the same share of
hydrogen demand means about 0.3 million tonnes. At the surface this would take about 100 of the most
advanced cryogenic tanks (Nicol et al., 2022). Underground, several depleted gas reservoirs could
meet it.

In a depleted gas field, years of production leave the gas-water contact, the depth below which the
rock pores hold water, above its original depth. This raises the risk of water invasion, where the
gas-water interface rises beneath a well as gas is withdrawn. Water reaching a well is produced with
the gas and makes hydrogen withdrawal less efficient (Sainz-Garcia et al., 2017). How operating
choices affect water invasion in hydrogen storage has received little study (Lysyy et al., 2021;
Luboń and Tarkowski, 2020).

## What we did

We built a reservoir model of the Ahuroa gas field, 14 km northeast of Stratford in Taranaki. The
field produced 1.22 × 10^9 Sm³ (standard cubic metres) of gas and 6.1 × 10^4 m³ of water before it
was converted to natural gas storage in 2008. We ran the model in OpenGoSim, an open-source
reservoir simulator, and calibrated it against the field's production rates and well pressures. We
ignored chemical and biological reactions and gas dissolution in water.

Our baseline case starts with 90 days of injecting cushion gas, gas left in the reservoir to
maintain its pressure, at 5 × 10^5 Sm³/day. Ten cycles follow, each injecting hydrogen at 10^6
Sm³/day for 90 days and then withdrawing gas at the same rate for 90 days. A cycle therefore injects
and withdraws 9 × 10^7 Sm³, about a fourteenth of the gas the field produced in its lifetime (our
arithmetic). We then varied six operating parameters one at a time and repeated the baseline with
natural gas.

## What we found

The baseline produced 3.44 × 10^4 m³ of water over ten cycles, a little over half of the field's
production-era total (our arithmetic). Hydrogen gave a lower water production rate than natural gas
throughout. We attribute this to the different compressibility of the two gases, that is, how much a
gas's volume changes with pressure. For the same injected volume, hydrogen keeps the pressure at the
bottom of the well higher (Poling et al., 2020). However, hydrogen holds about a third of the energy
of natural gas per unit volume (Poling et al., 2020). Storing the same energy needs larger volumes
of hydrogen. Cycling larger volumes may worsen water invasion.

Cushion gas injection rate made little difference (totals of 3.36 to 3.55 × 10^4 m³). Cushion gas
volume had a larger effect. Injecting cushion gas for 30, 90 and 150 days gave 4.52, 3.44 and 2.74 ×
10^4 m³ of water. This is because the lower reservoir pressure left by a smaller cushion persists
throughout cycling and raises water production. However, cushion gas can account for nearly 50% of
the investment in hydrogen storage in a depleted reservoir (Lord et al., 2014).

In our model, doubling the withdrawal rate doubled the water production rate. This can be attributed
to faster pressure drops during withdrawal. Halving the injection rate had a smaller effect than
changing the withdrawal rate. Withdrawal stage length had the largest effect in our sensitivity
analysis. Extending the 90-day withdrawal stage to 93 or 95 days raised the water production rate
at the end of the first cycle by 5.7 and 7.2 m³/day. This is because a longer withdrawal takes out
more gas, by volume underground, than was injected. The longer stages also raised hydrogen recovery
from 89% to 91% and 92.3%. However, we suggest caution once the withdrawn volume approaches the
injected volume.

The effect of the working gas volume, the gas injected and withdrawn in each cycle, depended on
whether runs were compared over the same time or the same number of cycles (widget below). Over the
same 1530 days, longer stages left a higher water production rate at the end of withdrawal (40.7,
45.2 and 52.1 m³/day for 60, 90 and 120 day stages), but total water varied only from 29,010 to
29,420 m³. Over ten cycles, total water rose from 25,470 to 34,430 to 42,050 m³. Larger working gas
volumes also produced a wider range of well pressure within each cycle.

<div class="widget" id="w-uhs-water" role="group" aria-label="Water produced by the model under different cushion gas and working gas choices"></div>

We also modelled a case after water breakthrough, when rising water has reached the well. Over five
cycles, each of four strategies prevented further increases in water production. Injecting 10% more
hydrogen than was withdrawn in each cycle (our arithmetic) was the most effective.

## Limitations

Our calibration is uncertain, because the field has few wells and partial production records. We set
the minimum well pressure to 8 MPa (megapascals), below the 16 MPa permitted at Ahuroa, to test
water invasion. Our reservoir is uniform, and we did not consider well configuration. Our main runs
neglected hysteresis in relative permeability. Neglecting it can lead to underestimated water
production (Bahrami et al., 2023). Future work could test these results with measured relative
permeability for mixed gases and with hysteresis included.

## Glossary

**Cushion gas.** Gas left in the reservoir throughout storage to maintain reservoir pressure.

**Working gas.** The gas injected and withdrawn in each storage cycle.

**Gas-water contact.** The depth below which the pores of the reservoir rock are filled with water.

**Water invasion.** The rise of the gas-water interface beneath a well as gas is withdrawn, also called water coning.

**Water breakthrough.** The point at which rising water reaches a well and starts to be produced with the gas.

**Compressibility.** How much a gas's volume changes when its pressure changes.

**Sm³.** A standard cubic metre, the volume a gas would occupy at surface temperature and pressure.

**Hydrogen recovery.** The ratio of the hydrogen produced to the hydrogen injected.

**Relative permeability.** How easily gas or water flows through the rock when both are present, compared with when it is the only fluid.

**Relative permeability hysteresis.** The tendency of gas and water to flow differently when gas is entering the rock than when it is leaving.

## Abstract

Underground hydrogen storage (UHS) in depleted gas reservoirs is a possible solution for large-scale seasonal energy storage. A key challenge with UHS lies in an elevated gas-water contact zone due to prior hydrocarbon exploitation. This condition increases the risk of water invasion during hydrogen injection and withdrawal operations, adversely affecting overall storage performance. However, the mechanisms controlling this phenomenon and effective mitigation strategies remain poorly understood. This study aims to optimize UHS operational strategies by investigating the impact of operational parameters on water invasion behaviour using a model based on an existing underground gas storage (UGS) facility. In this study, numerical simulations were conducted to evaluate the influence of various operational parameters, including cushion gas injection rate and volume, along with hydrogen injection and withdrawal rates, durations, and volumes. Our results demonstrate several key findings. First, hydrogen's high compressibility reduces water invasion effects compared to natural gas when injecting and withdrawing equivalent volumes. Second, extending the duration of withdrawal stage and increasing withdrawal rate significantly increases water production rate. Third, cushion gas volume strongly influences reservoir pressure, with larger volumes reducing water production due to a stabilized pressure baseline. Fourth, the amount of gas injected and withdrawn in each cycle positively correlates with water production rate, while increasing injection and withdrawal frequency mitigates water invasion effects. Finally, cushion gas and hydrogen injection rates have less impact on water invasion. These findings provide a basis for optimizing UHS design parameters in depleted reservoirs by specifying injection and withdrawal schemes and cushion gas management, intending to mitigate water invasion risks. • A compositional numerical simulation of underground hydrogen storage in the Ahuroa gas field is presented using OpenGoSim. • The influence of various operational parameters on water coning is investigated. • A sensitivity analysis is conducted to evaluate the relative importance of operational parameters. • Extending the withdrawal duration exerts the greatest influence on water coning. • Practical recommendations are proposed to mitigate water coning once it occurs.

## Cite

Liu, Jinjiang, Dempsey, David, Nicol, Andy, Parker, Matt, Passmore, John (2025). Impact of operational parameters on water invasion in underground hydrogen storage: A numerical investigation of the Ahuroa field, New Zealand. International Journal of Hydrogen Energy, 153, 150236. https://doi.org/10.1016/j.ijhydene.2025.150236

```bibtex
@article{liu2025impact,
  title = {Impact of operational parameters on water invasion in underground hydrogen storage: A numerical investigation of the Ahuroa field, New Zealand},
  author = {Liu, Jinjiang and Dempsey, David and Nicol, Andy and Parker, Matt and Passmore, John},
  journal = {International Journal of Hydrogen Energy},
  year = {2025},
  volume = {153},
  pages = {150236},
  publisher = {Elsevier BV},
  doi = {10.1016/j.ijhydene.2025.150236},
  url = {https://ddempsey.github.io/papers/2025-liu-impact-operational-parameters-water-invasion/}
}
```