# Ground motion simulation of hypothetical earthquakes in the upper North Island of New Zealand

- **Authors:** David Dempsey (ORCID 0000-0003-2135-5129); Jennifer D. Eccles (ORCID 0000-0002-9303-348X); Jonney Huang; Seokho Jeong; Elia Nicolin; Andrew Stolte; Liam Wotherspoon; Brendon A. Bradley
- **Journal:** New Zealand Journal of Geology and Geophysics, vol. 64(4), pp. 570-588 (2020)
- **Publisher:** Wiley
- **DOI (version of record):** [https://doi.org/10.1080/00288306.2020.1842469](https://doi.org/10.1080/00288306.2020.1842469)
- **This page:** https://ddempsey.github.io/papers/2020-dempsey-ground-motion-simulation-hypothetical-earthquakes/
- **Open PDF:** [https://ddempsey.github.io/papers/2020-dempsey-ground-motion-simulation-hypothetical-earthquakes/dempsey2020-ground-motion-simulation.pdf](https://ddempsey.github.io/papers/2020-dempsey-ground-motion-simulation-hypothetical-earthquakes/dempsey2020-ground-motion-simulation.pdf) (Accepted manuscript (peer-reviewed, author's version))
- **Full text (Markdown):** [https://ddempsey.github.io/papers/2020-dempsey-ground-motion-simulation-hypothetical-earthquakes/fulltext.md](https://ddempsey.github.io/papers/2020-dempsey-ground-motion-simulation-hypothetical-earthquakes/fulltext.md)
- **Notice:** This is an Accepted Manuscript of an article published by Taylor & Francis in New Zealand Journal of Geology and Geophysics in 2020, available at: https://doi.org/10.1080/00288306.2020.1842469
- **Also in:** UC Research Repository, https://hdl.handle.net/10092/103195
- **Explainer:** all explainers on this site are AI-generated.
- **BibTeX:** https://ddempsey.github.io/papers/2020-dempsey-ground-motion-simulation-hypothetical-earthquakes/citation.bib
- **Topics:** Induced seismicity & faults; Fire & other hazards
- **Keywords:** Geology; Seismology; Fault (geology); Population; Flood myth; Ground motion; Tsunami wave

## In brief

We simulated the largest credible earthquakes on two faults near Auckland, Hamilton and Tauranga. Sediment basins beneath the Hauraki Rift and Hamilton amplified slow shaking two to three times. A Wairoa North Fault earthquake gave 0.45 g, almost half of gravity, at Auckland's Mangatawhiri Dam.

- We used a physics-based simulator to model an Mw 7.3 earthquake on the Kerepehi Fault and an Mw 6.6 earthquake on the Wairoa North Fault.
- The Kerepehi scenario gave a mean shaking intensity of MMI 9.5 (violent) at Ngātea, near the Firth of Thames.
- Hamilton received two to three times the slow shaking (2 s period) of Huntly, at a similar distance from the fault, because Hamilton sits above a sediment basin.
- The Wairoa North Fault scenario gave a peak ground acceleration of 0.45 g at the Mangatawhiri Dam, 0.22 g at Auckland Airport, and 0.15 g in the CBD.
- These are planning scenarios with no probability attached. Whether damage follows depends on local soils and structures.

## The problem

Almost half of New Zealand's population lives in the Auckland, Waikato and Bay
of Plenty regions. Seismic hazard there is lower than elsewhere in the country,
because the crust deforms slowly and earthquakes are infrequent (Stirling et
al., 2012). Two known faults nevertheless lie close to these cities. The
Kerepehi Fault extends along the Hauraki Rift, from Matamata to beneath the
Firth of Thames. The Wairoa North Fault lies in the Hūnua Ranges, southeast of
Auckland. A strong earthquake on either fault would therefore affect a large
share of the country's people and economy.

Hazard estimates usually rely on empirical ground motion prediction equations.
These formulas, fitted to recorded earthquakes, predict shaking from inputs
such as magnitude and distance (Bradley, 2013). They do not represent the
geology between a fault and a particular town. Our goal was to simulate the
largest credible earthquakes on both faults, including the effect of soft
sediment basins.

## What we did

We used a physics-based simulator (Graves and Pitarka, 2016). For slow shaking,
below 1 Hz (one cycle per second), it computes seismic waves travelling from
the rupturing fault through a three-dimensional model of the crust. For faster
shaking, from 1 to 50 Hz, it uses a statistical approximation. A correction
accounts for soil in the top 30 m.

Individual strands of the Kerepehi Fault rupture about once every 6000 years
(Persaud et al., 2016). But the 2016 Kaikōura earthquake showed that at least
21 faults can rupture together (Clark et al., 2017). We therefore modelled a
worst case, one 140 km plane spanning all the onshore and offshore segments,
with an estimated magnitude of Mw 7.3. For the 27 km Wairoa North Fault, we
estimated Mw 6.6. We ran each scenario eight times with different random
patterns of slip on the fault, to estimate a mean and range of shaking at each
site.

We compared the simulations with 17 records from five small earthquakes nearby.
They slightly overestimated the strength of shaking and slightly underestimated
its duration. However, these biases were small compared with the scatter
between records, typically a factor of 1.6 to 4.5.

## What we found

For the Kerepehi Fault scenario, shaking next to the fault exceeds Modified
Mercalli Intensity (MMI) 8, described as severe. At Ngātea, above the deepest
part of the basin near the Firth of Thames, the mean is MMI 9.5 (violent), the
highest of the 22 locations we tabulated. At most locations, there is a 90%
chance that shaking from a future earthquake of this kind would be within one
MMI unit of the mean.

<div class="widget" id="w-town-shaking" role="group" aria-label="Simulated shaking intensity, peak ground acceleration and shaking duration at 22 locations in the upper North Island, for the Kerepehi Fault and Wairoa North Fault scenarios"></div>

The basins amplify slow shaking, with periods longer than 1 s. Hamilton and
Huntly are both about 40 km from the fault, but Hamilton sits above a basin. At
a 2 s period, its spectral acceleration is two to three times that at Huntly,
and its mean intensity is MMI 6.9 against 6.2. This is because, in our model,
seismic waves travel two to three times slower in the basin sediment than in
the surrounding rock. However, the statistical approximation used above 1 Hz
does not include basins. The simulated faster shaking therefore shows no basin
amplification.

In Auckland, the Wairoa North Fault scenario gives a peak ground acceleration
of 0.45 g, almost half the acceleration of gravity (g), at the Mangatawhiri
Dam, an earthen dam in the Hūnua Ranges that holds part of the city's water
supply. The airport receives 0.22 g and the CBD 0.15 g. At the dam, simulated
shaking would likely exceed the level used to check its safety, which is the
shaking expected about once in 10 000 years (McQuarrie, 2012). This is not
surprising, because the Wairoa North Fault has an estimated return period of
more than 20 000 years. However, little is known about its earthquake history.

Road, rail, fuel and electricity lines converge between Takanini and Drury,
about 10 km from the fault. Both scenarios give 0.2 to 0.4 g in south Auckland,
similar to the 0.17 to 0.27 g used in an earlier infrastructure assessment
(AELG, 2014). It found that road and rail on poor soils could take weeks to
months to repair.

Stop-banks along the Waihou and Piako rivers protect dairy farmland in the
Hauraki Depression from flooding. The Kerepehi scenario gives peak
accelerations of 0.4 to 0.5 g there. In the 2010–11 Canterbury earthquakes,
liquefaction of foundation soils cracked stop-banks (Green et al., 2011). We
suggest that damage would depend on whether local soils lose strength during
shaking, for example through liquefaction.

We also tested whether a shallow source and soft sediments could explain the
unusually strong shaking in the 1976 M 5.0 Korakonui earthquake (Eiby, 1977).
Our simulated intensity contours were smaller in extent than those mapped from
damage reports, even for an event one magnitude unit larger. These two factors
alone are therefore unlikely to explain the mapped intensities. However, the
method used to map the 1976 contours may have overestimated intensity.

## Limitations

These are illustrative scenarios for disaster planning, with no probability
attached. An earthquake closely resembling either one is unlikely in our
lifetime. The main shortcoming is the single plane used for a Kerepehi rupture
involving several separate segments. This mainly affects near-fault shaking at
Matamata and Ngātea. We did not model the South Auckland Basin, which could
amplify slow shaking in Pukekohe. Whether liquefaction occurs, or a dam is
damaged, depends on local soils and structures. Engineering investigations
could reduce that uncertainty.

## Glossary

**Moment magnitude (Mw)** is a measure of earthquake size based on the fault
area and the amount of slip.

**Modified Mercalli Intensity (MMI)** is a scale of local shaking effects, from
MMI 5 (moderate) through 6 (strong), 7 (very strong) and 8 (severe) to 9
(violent). We converted simulated ground velocity to MMI using a published
correlation (Worden et al., 2012).

**Peak ground acceleration** is the largest acceleration of the ground at a
site during an earthquake.

**Spectral acceleration** is the peak acceleration of a simple structure that
sways with a given natural period, the time for one full sway, such as 1 or 2
s. A building's natural period depends on its size, height and construction
material.

**g** is the acceleration due to gravity, 9.81 m/s².

**Hz** (hertz) is a unit of frequency, one cycle per second.

A **sediment basin** is a depression in the bedrock filled with soft sediment,
in which seismic waves travel slowly.

A **stop-bank** is an earth embankment built along a river to contain floods.

**Liquefaction** is the loss of strength of water-saturated sandy or silty soil
during shaking.

## Abstract

The upper North Island of New Zealand has large concentrations of population and infrastructure that make it vulnerable to earthquakes on the Kerepehi and Wairoa North faults. Using a physics‐based simulator, we modelled 0–50 Hz ground motions for M w 7.3 and M w 6.6 characteristic earthquakes on these structures. We considered the effects of low‐velocity basins beneath the Hauraki Rift and the city of Hamilton that can amplify ground shaking. For a Kerepehi Fault earthquake, long period (&gt;1s) shaking was amplified a by factor of two to three in Hamilton and towns near the Firth of Thames. Severe to violent, long duration shaking would occur close to the source with the potential to trigger liquefaction that damages flood defence networks and farmland in the Hauraki Depression. Auckland, Hamilton and Tauranga could experience moderate to very strong shaking. Impacts in Auckland are larger for a Wairoa North Fault earthquake, which could generate peak ground accelerations of 0.5g at reservoir dams in the Hūnua Ranges, 0.2g at the international airport, and 0.1–0.2g at the CBD and port. Road, rail and transmission networks are vulnerable to disruption where they converge at infrastructure hotspots 10 km from the fault in South Auckland.

## Cite

Dempsey, David, Eccles, Jennifer D., Huang, Jonney, Jeong, Seokho, Nicolin, Elia, Stolte, Andrew, Wotherspoon, Liam, Bradley, Brendon A. (2020). Ground motion simulation of hypothetical earthquakes in the upper North Island of New Zealand. New Zealand Journal of Geology and Geophysics, 64(4), 570-588. https://doi.org/10.1080/00288306.2020.1842469

```bibtex
@article{dempsey2020ground,
  title = {Ground motion simulation of hypothetical earthquakes in the upper North Island of New Zealand},
  author = {Dempsey, David and Eccles, Jennifer D. and Huang, Jonney and Jeong, Seokho and Nicolin, Elia and Stolte, Andrew and Wotherspoon, Liam and Bradley, Brendon A.},
  journal = {New Zealand Journal of Geology and Geophysics},
  year = {2020},
  volume = {64},
  number = {4},
  pages = {570-588},
  publisher = {Wiley},
  doi = {10.1080/00288306.2020.1842469},
  url = {https://ddempsey.github.io/papers/2020-dempsey-ground-motion-simulation-hypothetical-earthquakes/}
}
```