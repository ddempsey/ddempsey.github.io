# Ground motion simulation of hypothetical earthquakes in the upper North Island of New Zealand

**Authors:** David Dempsey, Jennifer D. Eccles, Jonney Huang, Seokho Jeong, Elia Nicolin, Andrew Stolte, Liam Wotherspoon, Brendon A. Bradley  
**Published in:** New Zealand Journal of Geology and Geophysics (2020)  
**DOI (version of record):** https://doi.org/10.1080/00288306.2020.1842469  
**This copy:** Accepted manuscript (peer-reviewed, author's version). Text extracted from the PDF at https://ddempsey.github.io/papers/2020-dempsey-ground-motion-simulation-hypothetical-earthquakes/dempsey2020-ground-motion-simulation.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** This is an Accepted Manuscript of an article published by Taylor & Francis in New Zealand Journal of Geology and Geophysics in 2020, available at: https://doi.org/10.1080/00288306.2020.1842469  

---
# **Ground Motion Simulation of Hypothetical Earthquakes in the Upper North Island of New Zealand** 

D. Dempsey<sup>a,b</sup> *, J. D. Eccles<sup>a</sup> , J. Huang<sup>b</sup> , S. Jeong<sup>c</sup> , E. Nicolin<sup>a</sup> , A. Stolte<sup>b</sup> , L. Wotherspoon<sup>a</sup> , and B. A. Bradley<sup>b</sup> 

_aUniversity of Auckland, Auckland, New Zealand; bUniversity of Canterbury, Christchurch, New Zealand;_<sup>_c_</sup> _Changwon National University, Changwon, South Korea_ 

david.dempsey@canterbury.ac.nz 

# **Ground Motion Simulation of Hypothetical Earthquakes in the Upper North Island of New Zealand** 

The upper North Island of New Zealand has large concentrations of population and infrastructure that make it vulnerable to earthquakes on the Kerepehi and Wairoa North faults. Using a physics-based simulator, we modelled 0-50 Hz ground motions for Mw 7.3 and Mw 6.6 characteristic earthquakes on these structures. We considered the effects of low-velocity basins beneath the Hauraki Rift and the city of Hamilton that can amplify ground shaking. For a Kerepehi Fault earthquake, long period (>1s) shaking was amplified a by factor of two to three in Hamilton and towns near the Firth of Thames. Severe to violent, long duration shaking would occur close to the source with the potential to trigger liquefaction that damages flood defence networks and farmland in the Hauraki Depression. Auckland, Hamilton and Tauranga could experience moderate to very strong shaking. Impacts in Auckland are larger for a Wairoa North Fault earthquake, which could generate peak ground accelerations of 0.5g at reservoir dams in the Hūnua Ranges, 0.2 g at the international airport, and 0.1 to 0.2 g at the CBD and port. Road, rail and transmission networks are vulnerable to disruption where they converge at infrastructure hotspots 10 km from the fault in South Auckland. 

Keywords: Hauraki Rift; Kerepehi Fault; Wairoa North Fault; Ground Motion Simulation; Intensity Measure; Seismic Hazard; Basin Amplification 

## **Introduction** 

The principal known sources (Langridge et al. 2016) of large magnitude seismicity in the upper North Island of New Zealand are the Kerepehi Fault in the Hauraki Rift, and the Wairoa North Fault in the Hūnua Ranges south of Auckland (Figure 1). The upper North Island is characterised by low seismic hazard relative to other parts of New Zealand (Stirling et al. 2012) because geodetic strain rates and natural seismicity are low. However, almost half of New Zealand’s population reside in the Auckland, Waikato and Bay of Plenty regions that are adjacent to the Kerepehi and Wairoa faults. A strong earthquake (MW>6) on either structure would therefore have an outsized impact on public safety and economic activity of the country. 

In New Zealand, mapped structures that are known to present a seismic hazard are documented in the active fault database (Langridge et al. 2016). Fault dimensions, along with paleoseismic estimates of recurrence interval and time since the most recent event are used to 

estimate the magnitude and likelihood of characteristic earthquakes for the individual structures (Stirling et al. 2012). These models supply inputs to empirical ground motion prediction equations that map the earthquake properties, e.g., magnitude and recurrence interval, to engineering-relevant hazard measures, e.g., peak ground velocity, pseudo-spectral acceleration, etc. (Bradley 2013). This pipeline of modelling and hazard estimation is probabilistic seismic hazard analysis (PSHA). 

In recent years, there has been interest in complementing traditional regression-based ground motion models in PSHA with physics-based ground motion simulation. There are several advantages in directly simulating earthquake wave propagation. For example, explicitly representing heterogeneity in the source allows partitioning of aleatoric uncertainty and is necessary to reduce coherence in the radiated wavefield (Graves and Pitarka 2016). Basin amplification effects arising from velocity contrasts between bedrock and sedimentary layers can be explicitly quantified (Kawase 1996; Pilz et al. 2011; Razafindrakoto et al. 2018), which is advantageous in low seismicity regions where there is insufficient data to constrain basin effects in empirical models. The ability to incorporate topographic (Villani et al. 2014) or rupture directivity (Graves and Pitarka 2016; Bradley et al. 2017a) effects specific to a site or source. This introduces additional nuance to local hazard estimates beyond a simple proximity to source measure. Finally, there is the opportunity to assimilate large volumes of seismological data, such as by inversion of the full waveform time series at multiple stations to develop more detailed 3D models and to better characterise the earthquake source (Yang et al. 2016). 

At the same time, physics-based simulation approaches introduce their own challenges. Limits on computational and geologic resolution still necessitate a hybrid approach to heterogeneity: deterministic representation at a feasible scale but stochastic approximations below this (e.g., Graves and Pitarka 2010). Further, like all models, we must work with incomplete knowledge of parameters and initial conditions, and this irreducible uncertainty must be quantified and propagated into outputs (e.g., Graves and Pitarka 2016). The methods must undergo rigorous computational verification and scientific validation to demonstrate their predictive capabilities if they are to replace conventional empirical models in PSHA workflows (Bradley 2019). Finally, uptake of these new tools in engineering communities will depend on whether they can be made as easy to use as empirical regression models that only require a handful of variables to be input into mathematical formulae. 

In this study, we develop physics-based ground motion simulation models for earthquake sources in the upper North Island of New Zealand. These methods have seen widespread application in the South Island, e.g., the 2010-11 Canterbury earthquake sequence (Razafindrakoto et al. 2018), a hypothetical Alpine Fault event (Bradley et al. 2017a), the 2016 Kaikōura earthquake (Bradley et al. 2017b), and future ruptures of the Hope Fault (Thomson et al. 2019). By comparison, our study area is somewhat unique in that earthquakes are relatively infrequent and we are instead motivated by the higher exposure of large urban centres and critical infrastructure. As there is less data available in this region compared to other parts of New Zealand, there are additional challenges in model characterisation and validation. To limit the scope of this study, we focus on simulation of the largest credible events from known upper North Island sources. However, given the paucity of paleoseismic characterisation compared to other large NZ faults, these simulations are provided as illustrative scenarios to support disaster planning, rather than a probabilistic analysis. 

## **Seismotectonic setting** 

The dominant tectonic feature of the upper North Island is the Hauraki Rift (Figure 1), a 150 km long NNW trending half-graben that spans the onshore Hauraki Depression from Matamata to Thames, and then an offshore section beneath the Firth of Thames and Hauraki Gulf (Hochstein and Nixon 1979; De Lange and Lowe 1990; Persaud et al. 2016). The opening rate of the rift was initially geodetically estimated at 0.3-0.7 mm yr<sup>-1</sup> (Beavan et al. 2016) and after further deployments as 1.1±0.3 mm yr<sup>-1</sup> although rates decrease to the north (Pickle 2019). The rift varies in width from 20 to 40 km and analysis of hot spring geochemistry suggests high temperatures (>250°C) may occur at less than 5 km depth (Hochstein and Nixon 1979). Early gravity surveys across the rift suggested that basement could be as deep as 3 km, overlaid by a thick succession of Quaternary and Neogene sediments (Hochstein and Nixon 1979). 

Shallow seismicity across the rift is generally less than 12 km deep (Figure 2C). The largest rift event on record was the 1972 MW 5.1 Te Aroha earthquake, a shallow event near the town of Te Aroha that caused minor localised damage (Adams et al. 1972). In June 2002, a pair of M 4.6 events occurred at 5 km depth near the town of Matamata.  In July 2005, a brief seismic swarm occurred to the west of Te Aroha (largest event MW 3.9), close to the location of the Te Aroha Hot Spring. Most recently, in November 2014, two moderate events occurred north of Matamata, the largest being MW 3.9. 

_Figure 1: Upper North Island seismotectonic setting. Active faults are indicated in red along with inferred (dashed) structures from Langridge et al. (2016) and Chick et al. (2001). Known and inferred strands of the Kerepehi Fault are those contained between the Hauraki Rift boundaries (black dashed lines). Historic M>4.0 seismicity (grey circles) is shown with validation events shaded pink. Plotting extents of later figures are shown as grey outlines._ 

In February 2007, a small cluster of earthquakes occurred in the Hauraki Gulf that were felt throughout Auckland (Table 1). The largest event, a MW 4.1, occurred at a depth of 5 km. In March 2013, a MW 3.9 event also occurred. 

_Table 1: Historic small magnitude earthquakes in the Hauraki Rift and Auckland region used for model validation (https://www.geonet.org.nz)._ 

|GeoNet ID|Latitude|Longitude|Depth<br>[km]|Magnitude<br>(MW)|Date (UTC)|Close to|
|---|---|---|---|---|---|---|
|1893651|-37.92|175.90|5|4.6|2002-06-26<br>00:26:09|Matamata|
|2429313|-37.52|175.73|6|3.9|2005-07-08<br>11:11:30|Te Aroha|
|2699766|-36.53|175.04|5|4.1|2007-02-21<br>08:00:14|Auckland|
|2013p203051|-36.76|174.92|7|3.9|2013-03-17<br>03:05:42|Auckland|
|2014p836792|-37.76|175.72|7|3.9|2014-11-06<br>14:43:10|Matamata|

The largest historic earthquake in the vicinity of Hamilton city was the 1976 M 5.0 Korakonui earthquake (Eiby 1977). The event was particularly notable for abnormally high shaking intensities, which were attributed by Eiby (1977) to either an unusually shallow source or an abundance of unconsolidated near-surface sediments throughout the Waikato region. 

## **_Kerepehi Fault_** 

The Kerepehi Fault is a southwest dipping normal fault comprising six segments within the onshore Hauraki Depression (Persaud et al. 2016), and at least another four offshore segments in the Firth of Thames (Chick et al. 2001). Dating of offset deposits within a series of trenches suggested an average recurrence interval of c. 6 kyr for the individual strands (Persaud et al. 2016). Hochstein and Nixon (1979) proposed that rift faults dipped at angles of 70 ± 10°. 

_Figure 2: Velocity structure used for ground motion simulation. A. Location and depth of Hauraki Rift and Hamilton/Waikato basins relative to faults (red) and planar sources (black). The marked urban centres are at similar distances from the Kerepehi Fault source, within or outside the basins of interest. B. Regional VS30 based on geology and topography from (Foster et al. 2019). C. Shear wave velocity slice through the rift for the profile a-a_ ’ _in (A) showing contrast between the crustal velocity model and the basin fill. Dip and depth of the Kerepehi Fault source is shown as a black line. The horizontal dotted line indicates the 12 km cut-off at which source moment tapering begins. Topographic elevation along the profile is shown above the velocity slice._ 

The c. 27 km long Awaiti segment is the northernmost onshore strand of the Kerepehi Fault. Trenching has revealed two offsets of c. 1 m in the past 20 kyr (Persaud et al. 2016). Assuming rupture across the entire brittle crustal depth, which is approximately 12 km from shallow seismicity, plus a 3 km taper below this depth due to kinematic considerations (King and Wesnousky 2007), it is possible to estimate the rupture area and single event magnitude. Using a scaling relationship developed by Leonard (2010) – MW=3.99+log10(A), where A is rupture area – we estimate a single event magnitude of 6.7 for this segment (cf. MW 6.8 from Persaud et al. (2016) who used a different scaling relationship). Other fault segments are estimated to be individually capable of generating events between MW 5.8 and MW 7.1. 

The 2016 MW 7.8 Kaikōura earthquake was caused by the rupture of at least 21 individual faults (Clark et al., 2017; Xu et al. 2018). Although the physics underpinning such multiple fault earthquakes are a topic of ongoing research (Ando and Kaneko 2018; Ulrich et al. 2019), its occurrence has highlighted the possibility of such complex events occurring in other fault systems. Indeed, Persaud et al. (2016) considered the possibility of concurrent rupture of all onshore and offshore Kerepehi Fault segments, estimating MW 7.4 for such an event. This is similar in size and complexity to the MW 7.1 Darfield earthquake involving at least six faults (Holden et al. 2011). Because the full geometric complexity of a multi-strand earthquake is difficult to determine in advance, as a worst-case scenario Kerepehi Fault earthquake we chose instead to model an approximate planar source that spans all onshore and offshore segments. The source was aligned with the strike of the Hauraki Rift with a length of 140 km and dipping 70° to the southwest to a depth of 15 km. Using the Leonard (2010) scaling relationship, we estimate a MW 7.3 for this event. We did not consider smaller magnitude ruptures corresponding to individual Kerepehi Fault strands because our goal was to investigate the hazard of the largest credible event generated from the rift. 

## **_Wairoa North Fault_** 

Auckland is well known for its active intraplate volcanic field and the hazard that a major eruption would pose to the city. However, there are also several mapped faults in the region, perhaps the most significant of which is the Wairoa North Fault southeast of the city, which is recognised as active. This north-northwest striking normal fault upthrows the Hūnua Ranges west of the Firth of Thames and hosts several earthen dams whose reservoirs provide municipal water supply. Comparatively little is known about earthquake recurrence on the Wairoa North Fault, although it is estimated to have been active in the last 20 to 40 kyr (Edbrooke et al. 2003). 

Wise et al. (2003) used geophysical imaging to study the shallow fault and determined it to be dipping between 60 and 70° to the west. At 27 km in length, area-magnitude scaling for a 15 km deep rupture of the entire structure yields an estimated MW 6.6 event. This is the second source modelled in our study. 

## **_Unknown Source South of Hamilton_** 

From a historical perspective, we are also interested to model the 1976 Korakonui earthquake. The event was originally classified with an epicentre at [175.54, -38.10] about 25 km south of Cambridge, a depth of 12 km, and with a magnitude of 5.0 (Eiby 1977). Several houses in the nearby town of Korakonui lost chimneys, which for Eiby implied a shaking intensity level near the epicentre usually associated with MW 6.0 or higher. A similar magnitude event near Dunedin in 1974 (MW 4.9) also caused extensive chimney damage in the city (Bishop 1974), particularly in regions with shallow alluvial deposits. 

Using phase arrival times from the closest stations, Eiby (1977) proposed a much shallower source depth between 1 and 4 km, as well as a relocated epicentre 6 km further southwest at [175.51, -38.17]. We modelled this source as a rectangular plane with an area derived from the Villamor et al. (2001) scaling relation MW=3.39+1.33log(A) where A is area in km<sup>2</sup> . This gives a square plane 4 km on each side, which for simplicity we assigned the same strike, dip and rake values as the Kerepehi Fault source. We also simulated a larger MW 6.0 source as a square of dimension 9 km on each side. Given its relatively small dimension, uncertainty about the geometric properties does not strongly impact the shaking distribution. Consistent with Eiby’s hypothesis of its shallow nature, the source plane was positioned so that its upper surface was 1 km below the ground surface. 

## **Ground Motion Simulation Methodology** 

We used the methodology of Graves and Pitarka (2016) that combines deterministic wavefield modelling of seismic sources at low frequency (LF), with a stochastic simulation method at high frequency (HF). The LF method imposes a kinematically defined rectangular slip source with arbitrary slip heterogeneity whose statistical properties generates seismic radiation with frequency characteristics similar to natural seismicity (Graves and Pitarka 2010; Graves and Pitarka 2016). The HF method approximates wave-scattering and travel path effects for frequencies above the 1 Hz resolution of the LF simulation (up to 50 Hz). Near-surface site- 

specific effects are modelled by a VS30 correction (Foster et al. 2019) that accounts for amplification in the upper 30 m of the soil column. The applicability of this approach for predicting ground motions has been illustrated in general (e.g., Graves and Pitarka 2010) as well as specifically in New Zealand (e.g., Lee et al. 2020). 

_Figure 3: Example of a heterogeneous slip, rise time and rake distribution used for kinematic simulation of a MW 7.3 Kerepehi Fault earthquake. The numbers above each segment are the minimum/mean/maximum of the quantity depicted. The hypocentre location is denoted by a blue star._ 

The inputs to a ground motion simulation are: (1) source parameters, (2) velocity model parameters, and (3) site-specific parameters. Source parameters include the height, length, depth, orientation, and average rake of the generating fault, the magnitude and hypocentre location of the simulated earthquake, and spatially variable slip, onset and rise time distributions (see Figure 3 for an example). Velocity parameters include P- and S-wave velocities, (VP and VS) and density for all grid blocks in the simulation domain (Figure 2A). Simulation domains varied from 100x100 km and 80x140 km for validation simulations, 120x108 km for the Korakonui simulation, and 240×140 km for the Kerepehi Fault and Wairoa North Fault simulations. All domains extended to a depth of 40 km and were discretised at a 100 m grid spacing, which corresponds to about 1.3 billion grid blocks for the largest domain. A site-specific amplification correction is applied at every surface grid block (Figure 2B) using a New Zealand wide model (Foster et al. 2019) for the time averaged VS in the upper 30 m of the soil column (VS30). The LF and HF simulations are performed concurrently and then merged to create a broadband waveform. Simulations were conducted on national supercomputing resources of the National eScience Infrastructure (NeSI). 

## **_Velocity Structure_** 

We used the New Zealand Velocity Model as described in Thomson et al. (2020), which combines a tomographic crustal velocity structure (Eberhart-Phillips et al. 2010) with shallow basin models that resolve the seismic velocity properties of infilling sedimentary units. In the velocity model, simple basin structures are defined using geologic maps to outline surface sedimentary deposits. Three-dimensional bedrock surfaces are inferred from published geologic cross sections, deep boreholes, and some geophysical testing. The slope of topographic features surrounding the basin provides further constraint to the sediment/bedrock interface. Where available, basin surfaces can be further improved by including high-quality geophysical data such as gravity surveys, p-wave reflection, surface wave testing, and mapped site period estimates from horizontal-to-vertical spectral ratios of ambient vibration recordings (e.g., Lee et al. 2017). Properly resolving shallow basins with low velocity is essential for replicating shaking amplification at long periods. 

In our study area, there are two basins of interest. The Hauraki Rift basin is formed from infilling of a pair of northeast-sloping half grabens with a median high along the Kerepehi Fault in the centre of the rift (Hochstein and Nixon 1979). The basin begins north of Matamata and deepens to the northwest, reaching 2 km at the Firth of Thames. The second low-velocity feature is the Hamilton/Waikato basin, modelled as a 50×30 km half-graben centred on the city of Hamilton, deepening to the northwest to a maximum c. 1.8 km. Hochstein and Nunns (1976) provided evidence for a South Auckland Basin, formed by northern downthrow of the Waikato Fault. Although this basin was not included in the present study, it could play an important role in amplifying long period shaking in Pukekohe. 

In the New Zealand Velocity Model, the Hauraki Rift and Hamilton/Waikato basins were developed using geologic maps for the Auckland, Waikato, and Rotorua regions, geological cross sections and the slopes of surrounding topography. Site period maps from horizontal-to-vertical spectral ratio of ambient vibration recordings were qualitatively used to constrain depth to bedrock in the Hauraki Rift (Jeong and Wotherspoon 2019; Rana 2020). At c. 2 km, the resulting surface is shallower at its maximum onshore depth than the 2.5 to 3.0 km estimated by gravity inversion (Hochstein and Nixon 1979; Hochstein et al. 1986). Both basins are the focus of ongoing site investigation studies, the results of which will be used to improve future basin surfaces. 

Within the basins, we have prescribed 1D linearly varying velocity and density profiles. These have surface values of 2000 kg m<sup>-3</sup> , 1.5 (VP) and 0.8 km s<sup>-1</sup> (VS) and increase by 233 kg m<sup>-3</sup> , 0.5 and 0.27 m s<sup>-1</sup> per km of depth, which is an approximate representation of compaction with depth. Although there is some uncertainty in these values, the key feature for ground motion simulation is the factor of two to three contrast between velocity values inside and outside the basin. 

## **_Intensity Measures_** 

For engineering purposes, we are interested in aspects of the seismic waveform that are potentially damaging to structures. Therefore, we compute intensity measures (IMs), which are specific characteristics or derived quantities of the simulated time series that correlate with damage. 

_Peak ground velocity_ (PGV) is the largest value of particle velocity experienced at a site during an earthquake. We computed it using the geometric mean of the horizontal velocities, as these are generally larger than the vertical component and more relevant to damage assessment. _Peak ground acceleration_ (PGA) is the acceleration equivalent computed using the acceleration time series. 

_Modified Mercalli Intensity_ (MMI) is an indicial scale that characterises the local effects of earthquake shaking. For example, MMI 9 denotes “violent” shaking and is typically associated with damage of well-engineered structures, partial building collapse, and liquefaction. Although usually assessed in a post-hoc sense from earthquake damage observations, Worden et al. (2012) developed a piece-wise linear correlation between MMI and log10(PGV) that we used to convert simulated PGV to an approximate MMI. 

_Pseudo-Spectral Acceleration_ (pSA) is a transformation of the acceleration time series that quantifies shaking effects at different frequencies (Nigam and Jennings 1969). Damage to a structure depends on the forces generated within it due to shaking of the ground upon which it sits. These forces depend on the building’s natural resonant frequencies (a function of its size, height and construction material) and the energy content of the earthquake at different frequencies. pSA is calculated as the maximum acceleration experienced by 5% damped oscillators with different natural frequencies subject to the 1-dimensional acceleration record. It is a function of frequency or period. 

_Figure 4: Model comparison against five historic MW_ ≥ _3.9 events. A. Locations of events (grey circles) and stations that recorded strong motions (yellow triangles). Boxes indicate the simulation domains for the two sets of events. B. Average and_ ±𝜎 _(standard deviation) variability between simulated and observed records across four IMs. C. Individual station comparisons between modelled (red) and observed (black) waveforms for 40 second traces low-pass filtered at 20 Hz. For each comparison, the event id, station, and component (Z = vertical, N = north-south, E = east-west) are given. The final two numbers are the maximum absolute value for the observed and modelled traces and have units of “percentage of_ 𝑔 _”, i.e., 9.81/100 = 0.0981 ms_<sup>_-2_</sup> _._ 

_Significant Duration_ (Ds595 or Ds575) is the time duration across which a large fraction of an earthquake’s energy is experienced at a site (Bommer and Martinez-Pereira 1999). We computed it by integrating the square of the velocity time series and then measuring the time elapsed between two percentiles of the signal. For example, Ds595 is the time period beginning when 5% of the energy has been delivered and ending at 95%. As some modes of structural damage depend on the number of cycles of deformation, duration measures are a useful complement to other IMs. 

_Cumulative absolute velocity_ (CAV) is a measure that combines shaking intensity with duration. We computed it by integrating the absolute value of the velocity time series. Variations of CAV have been proposed that introduce minimum cut-offs for velocity or acceleration (e.g., Campbell and Bozorgnia 2012), but here we use the simplest formulation. CAV has been shown to correlate with damage levels in some building types (Cabanas et al. 1997). 

## **_Validation events_** 

To check the performance of the ground motion models, we ran simulations for five small (M≤4.6) earthquakes in the region of interest and for which there exist strong motion records to compare against (Table 1). These include three events at the southern extent of the Hauraki Rift and two events in the Hauraki Gulf near Auckland (Figure 4A). The events were recorded on eight ground motion stations in the vicinity (Figure 4A) and in total there are 17 records for comparison. 

Given their small magnitude, we modelled the validation events as point sources. For the two events near Auckland and one event in the Hauraki Rift, moment tensor solutions from GeoNet (Ristau 2018) were used to characterise the source. The other two events, located in the southern Hauraki Rift, were assigned strike, dip and rake values consistent with the regional tectonics. We computed IMs for the simulated and observed events, took the natural log of their ratios, and then computed aggregate statistics for each IM (Figure 4B). Simulated measures of shaking intensity (PGV, PGA and CAV) tended to slightly overestimate observed values, whereas durations (Ds595) were slightly underestimated. However, these biases are small compared to misfit variability, with standard deviations ranging between 0.5 and 1.5 (equivalent to scale factors of 1.6 to 4.5). Comparison of the individual waveforms shows instances of over- and under-prediction by the model (Figure 4C). Because we are comparing 

small magnitude events, it is not clear how much this variability reflects the higher signal-tonoise ratio expected for strong motion records of small events versus how much is due to deficiencies in the source representation, velocity model or the simulator physics. 

## **_1976 Korakonui Earthquake_** 

This earthquake pre-dates digital strong motion recording and thus it is not possible to directly compare observed and simulated intensity measures. Nevertheless, an approximate assessment of Eiby’s (1977) hypothesis – that anomalous shaking was a product of a shallow source and low velocity sediments – is possible by comparison of isoseismals. These are contours of constant MMI intensity, which were inferred for the 1976 event from damage reports across Waikato (Figure 5A). We have compared these to simulated MMI contours derived from a transformation of simulated PGV (Worden et al. 2012). 

_Figure 5: Isoseismal comparison for the 1976 M 5.0 Korakonui earthquake. A. Inferred contours from damage reports (Eiby 1977). B. Simulated contours taking into account Hamilton/Waikato Basin velocity model and regional VS30 correction. C. Simulated contours for an event one magnitude unit larger. To assist the comparison, the MMI 4 contour has been bolded in all plots._ 

Inferred isoseismals from the 1976 event show a pronounced extension to the northwest toward the Hamilton/Waikato basin and regions of low VS30. Isoseismals for the simulated MW 5.0 and 6.0 events (Figure 5B-C) have an extension in the same direction although it is less pronounced. Furthermore, simulated contours at a given level are much smaller in extent than the observed, particularly so for the MW 5.0 simulation. Taken together, we are unable to link anomalously high damage in the Waikato region with shallow low velocity structures or a shallow source as proposed. One possibility is that the MMI-PGV correlation of (Worden et al. 2012) developed for California is not appropriate for the upper North Island. However, it 

would need to be incorrect by more than two MMI levels to account for the discrepancy, which seems unlikely. Another possibility is that the physics-based simulator has not properly captured the effects of basins and shallow soils. This, too, seems unlikely given the validation of these simulation-based methods at other locations in New Zealand (Razafindrakoto et al. 2018) and for small magnitude crustal events (Lee et al. 2020). Finally, the methodology for drawing isoseismals based on damage reports may have in this instance led to an overestimation of MMI. 

## **Results** 

The purpose of the hypothetical earthquake simulations presented here was to define plausible upper limits of ground shaking arising from the two identified upper North Island sources. Therefore, we considered rupture of the maximum fault extent (mapped or inferred). Because local shaking intensity varies with the particulars of an arbitrary stochastic slip (and moment release) distribution, we simulated eight different realisations for each source. Expected shaking and its variability are then estimated on a site-by-site basis by log transforming IMs and computing the mean and standard deviation (𝜎). We verified this was appropriate by applying a Shapiro-Wilks test for normality against the log-transformed IMs. Then, prediction intervals for a future observation (earthquake) are constructed using a Student t-distribution with 𝑛=8. Finally, because IMs depend on rupture directivity effects (Somerville et al. 1997; Bradley et al. 2017a), for both sources we considered scenarios with hypocentres at the southern and northern ends of the fault. 

## **_Kerepehi Fault source_** 

For a MW 7.3 Kerepehi Fault earthquake (Figure 6), simulated shaking intensity adjacent to the source exceeds MMI 8 (severe, Figure 7A). Above deeper sections of the basin near the Firth of Thames, shaking intensity exceeds MMI 9 (violent) and, depending on the specific moment release distribution, could exceed MMI 10 at Ngātea (Figure 7C). At the nearby cities of Hamilton and Tauranga, between 30 and 40 km from the source, simulated shaking varies from MMI 6 (strong) to MMI 7 (very strong). Across the Auckland region, shaking intensity varies from MMI 5 (moderate) in the north to MMI 7 in the south, although this could be higher if the effects of the South Auckland Basin were considered (Hochstein and Nunns 1976). At most locations, there is a 90% likelihood that a future (simulated) earthquake would fall within one MMI unit of the estimated mean shaking (Figure 7B-C, Table 2). Coseismic impacts on the marine environment such as tsunami have not been considered. 

_Figure 6: Simulated acceleration time series at locations given in Table 2 for a MW 7.3 Kerepehi Fault rupture with a southern hypocentre (see also supplementary video 1). Waveforms have been lowpass filtered at 20 Hz, and then scaled to fit the axes with the scale factor given on the left below the site name. As in Figure 4, the unit is “percentage of g”, i.e., 9.81/100 = 0.0981 ms_<sup>_-2_</sup> _._ 

_Table 2: Summary of simulated IMs at population centres. KF = Kerepehi Fault source, WF = Wairoa North Fault source. Quoted value is the fitted log-normal mean of eight simulations with a 90% confidence interval for a future earthquake given in brackets. Only one simulation was performed with a northern hypocentre (N_ → _S) for the KF and WF sources and thus no ranges are quoted. Light, medium and strong shading have been used to highlight locations where simulated_ _<u>shaking exceeded MMI 7, 8 and 9, respectively.</u>_ 

|Location||MMI<br>[]|CAV<br>[g.s]|Ds59<br>(S→N,|5 [s]<br>N→S)|PGV<br>[cm s<sup>-1</sup>]|PGA [g]|pSA<br>(1.0 s) [g]|
|---|---|---|---|---|---|---|---|---|
|||6.5|0.60|15|47|14.3|0.12|0.15|
|Auckland|KF|[6.3,6.8]|[0.51,0.69]|[12,18]|[-,-]|[11.8,17.2]|[0.08,0.19]|[0.10,0.22]|
|CBD|WF|6.2<br>[6.0,6.5]|0.41<br>[0.39,0.43]|8<br>[7,9]|16<br>[-,-]|11.3<br>[9.4,13.6]|0.15<br>[0.13,0.18]|0.14<br>[0.10,0.20]|
|Auckland<br>|KF|6.5<br>[6.2,6.9]|0.69<br>[0.59,0.81]|18<br>[15,22]|50<br>[-,-]|14.0<br>[10.9,18.0]|0.12<br>[0.08,0.17]|0.15<br>[0.10,0.23]|
|Airport|WF|6.6<br>[6.4,6.9]|0.54<br>[0.50,0.59]|7<br>[7,8]|13<br>[-,-]|15.3<br>[13.1,17.9]|0.22<br>[0.19,0.26]|0.18<br>[0.13,0.24]|
|||6.9|1.13|18|38|18.5|0.21|0.21|
|Mangatawhiri|KF|[6.5,7.3]|[0.87,1.46]|[14,23]|[-,-]|[14.1,24.4]|[0.13,0.33]|[0.11,0.41]|
|Dam||7.4|0.97|7|7|27.8|0.45|0.31|
||WF|[6.9,8.0]|[0.86,1.11]|[6,9]|[-,-]|[19.1,40.5]|[0.33,0.61]|[0.25,0.39]|
|Cambridge||6.7<br>[6.1,7.3]|1.27<br>[1.10,1.46]|36<br>[26,49]|16<br>[-,-]|15.8<br>[10.1,24.9]|0.18<br>[0.11,0.29]|0.23<br>[0.12,0.41]|
|Coromandel||7.1<br>[6.8,7.5]|0.95<br>[0.79,1.15]|13<br>[11,16]|35<br>[-,-]|22.1<br>[16.9,28.9]|0.24<br>[0.17,0.32]|0.28<br>[0.20,0.40]|
|Hamilton||6.9<br>[6.5,7.4]|1.34<br>[1.19,1.51]|40<br>[30,53]|25<br>[-,-]|19.1<br>[13.8,26.4]|0.15<br>[0.13,0.17]|0.21<br>[0.13,0.32]|
|Hl||6.2|0.92|33|31|10.8|0.12|0.13|
|unty||[5.8,6.5]|[0.86,0.99]|[23,49]|[-,-]|[8.6,13.7]|[0.09,0.17]|[0.11,0.16]|
|||8.2|1.72|16|11|50.4|0.44|0.62|
|Matamata||[7.2,9.5]|[1.51,1.97]|[5,46]|[-,-]|[21.7,116.9]|[0.27,0.72]|[0.37,1.01]|
|Miill||7.4|1.78|26|12|26.2|0.29|0.37|
|orrnsve<br>||[6.8,7.9]<br>95|[1.61,1.98]<br>246|[16,44]<br>21|[-,-]<br>25|[17.5,39.0]<br>1267|[0.21,0.40]<br>057|[0.19,0.72]<br>079|
|Ngātea||.<br>[9.2,9.9]|.<br>[2.18,2.78]|<br>[15,30]|<br>[-,-]|.<br>[95.9,167.6]|.<br>[0.42,0.76]|.<br>[0.53,1.18]|
|||8.1|1.84|18|21|44.3|0.41|0.49|
|Paeroa||[7.4,8.8]|[1.72,1.97]|[9,33]|[-,-]|[26.7,73.3]|[0.33,0.50]|[0.37,0.65]|
|Pukekohe||6.3<br>[5.9,6.7]|0.81<br>[0.67,0.96]|24<br>[20,27]|44<br>[-,-]|12.1<br>[9.2,15.9]|0.12<br>[0.09,0.17]|0.15<br>[0.10,0.22]|
|Rotorua||5.5<br>[4.9,6.3]|0.72<br>[0.59,0.89]|47<br>[32,71]|13<br>[-,-]|7.0<br>[4.1,11.7]|0.08<br>[0.05,0.13]|0.11<br>[0.07,0.17]|
|Tauranga||6.8<br>[6.0,7.6]|1.12<br>[0.95,1.31]|39<br>[27,57]|17<br>[-,-]|17.2<br>[9.5,31.2]|0.15<br>[0.09,0.23]|0.19<br>[0.10,0.35]|
|Te Aroha||7.5<br>[6.7,8.3]|1.71<br>[1.36,2.17]|21<br>[13,35]|16<br>[-,-]|28.3<br>[15.8,51.0]|0.34<br>[0.20,0.57]|0.25<br>[0.16,0.40]|
|Te Awamutu||6.1<br>[5.4,6.9]|1.03<br>[0.90,1.20]|42<br>[29,60]|18<br>[-,-]|10.6<br>[6.4,17.7]|0.12<br>[0.09,0.16]|0.16<br>[0.09,0.30]|
|Thames||8.3<br>[7.8,8.8]|1.94<br>[1.69,2.23]|24<br>[20,29]|33<br>[-,-]|52.4<br>[36.8,74.6]|0.34<br>[0.26,0.44]|0.43<br>[0.29,0.64]|
|Tirau||7.2<br>[6.4,8.1]|1.41<br>[1.19,1.66]|28<br>[13,58]|8<br>[-,-]|22.9<br>[12.7,41.4]|0.27<br>[0.15,0.47]|0.33<br>[0.14,0.79]|
|||54|065|45|11|65|008|010|
|Tokoroa||.<br>[4.7,6.3]|.<br>[0.52,0.82]|<br>[31,66]|<br>[-,-]|.<br>[3.7,11.4]|.<br>[0.04,0.15]|.<br>[0.05,0.18]|
|||69|135|27|21|191|022|022|
|Waihi||.<br>[6.3,7.6]|.<br>[1.21,1.49]|<br>[16,44]|<br>[-,-]|.<br>[12.3,29.7]|.<br>[0.15,0.31]|.<br>[0.14,0.34]|
|Whangamatā||6.6<br>[6.2,7.1]|0.97<br>[0.89,1.06]|30<br>[20,46]|32<br>[-,-]|15.1<br>[10.7,21.5]|0.15<br>[0.12,0.19]|0.16<br>[0.10,0.25]|
|Whitianga||6.9<br>[6.5,7.3]|1.03<br>[0.85,1.25]|21<br>[18,24]|47<br>[-,-]|18.5<br>[14.2,24.2]|0.16<br>[0.14,0.20]|0.24<br>[0.16,0.36]|

_Figure 7: Range of simulated MMI for the Kerepehi Fault source with a southern hypocentere (black line). The simulation domain is indicated by the black box. A-C. 5_<sup>_th_</sup> _, 50_<sup>_th_</sup> _and 95_<sup>_th_</sup> _percentile values at each location computed by fitting site-specific log-normal distributions to eight stochastic slip realisations. MMI contours in A and C are interpretable on a location by location basis only and are not scenario outcomes (e.g., the contour distribution in C would require a 95_<sup>_th_</sup> _percentile outcome to occur at every grid cell and this would imply an event magnitude much larger than simulated)._ 

_Figure 8: Simulated IMs for a Kerephi Fault source with a southern hypocentre, mean of eight realisations A. Peak ground velocity. B. Peak ground acceleration. C-F. Pseudo-spectral acceleration at 0.1, 0.3, 1 and 3 seconds._ 

Patterns of PGV and PGA are similar to MMI (which is derived from PGV), peaking around 100 cm s<sup>-1</sup> and 0.5 g close to the source (Figure 8A-B). At a period of 0.1 s, pSA exceeds 0.2 g in Hamilton and Tauranga, and ranges from 0.1 to 0.3 g across Auckland (Figure 8C). At 0.3 s, pSA is about 0.4 g in Hamilton and Tauranga, and ranges between 0.1 and 0.4 g in Auckland (Figure 8D). At higher periods of 1 and 3 s (Figure 8E-F), pSA is determined by the full-physics LF simulation and, consequently, amplified shaking at these periods reflects the footprints of the Hauraki Rift and Hamilton/Waikato basins. The shorter period response is dominated by the stochastic HF physics that does not incorporate the effects of basins. 

_Figure 9: Comparison between simulated and empirical MMI for the Kerepehi Fault source (black line). The simulation domain is indicated by the black box. A. Empirical MMI computed using the PGV model by Bradley (2013) and MMI conversion of Worden et al. (2012). B. Difference between simulated and empirical MMI. C. Simulated (black dots) and empirical PGV (blue lines) with distance from source,_ 𝑅𝑟𝑢𝑝 _._ 

We compared simulated shaking intensity to the Bradley (2013) empirical ground motion prediction equations for New Zealand crustal earthquakes (Figure 9A). The main difference is that, on average, the physics-based simulations predicted higher ground-shaking intensities – about half a MMI unit – at moderate to large distances northward of the hypocentre (Figure 9B). South of the hypocentre, ground shaking is overpredicted by up to a full magnitude unit. These discrepancies can be attributed to the northward directivity of the rupture that tends 

to amplify shaking in areas the rupture travels toward and reduces it in regions that it travels away from. 

Over prediction in the onshore Firth of Thames and above the Hamilton Basin are expected as the empirical model does not account for velocity structure. Closer inspection of shaking variability arising from aleatoric (stochastic) uncertainty (Figure 9C) indicates that the range of simulated PGVs is in good agreement with the empirical model across all rupture distances, 𝑅𝑟𝑢𝑝. In other words, any bias of the physics-based simulation is small compared to inherent variability introduced by the assumptions about the source itself. There is a cluster of slightly higher simulated shaking intensity at 𝑅𝑟𝑢𝑝 of 50 km, which corresponds to shaking amplification above the Hamilton Basin. 

_Figure 10: Shaking duration Ds595 (in seconds) for the Kerepehi Fault source (black line) for different hypocentre locations and primary rupture directions indicated by arrows. The simulation domain is indicated by the black box. A. Duration for a hypocentre at the southern end of the Kerepehi Fault and propagating north. B. The same source but with the hypocentre in the north. C. Duration for a rupture with a southern hypocentre on the Wairoa North Fault_ 

Simulated significant duration (Ds595) varied from 10 to 50 s depending on site location relative to the rupture direction. A northward propagating rupture (Figure 10A) generates a narrow forward directivity pulse that contains most of the seismic radiation (e.g., Boatwright and Boore 1982), and therefore sites north of the hypocentre experience briefer and stronger shaking (c.f. Te Aroha and Hamilton in Figure 6). In contrast, the backward directivity pulse is spread out and shaking duration is longer and smaller (c.f. Morrinsville and Rotorua in Figure 6). The spatial pattern of Ds595 is reversed for the simulation with a norther hypocentre 

and southward propagating rupture (Figure 10B). These spatial patterns of shaking duration are consistent with simulated ruptures of the Alpine and Hope Faults in the South Island ((Bradley et al. 2017a; Thomson et al. 2019) as well as observations from the recent MW 7.1 Darfield (Bradley 2012) and MW 7.8 Kaioura earthquakes (Duputel and Rivera 2017). 

_Figure 11: Effect of basins on modelled response spectra. Shaded regions bound_ ±2𝜎 _accelerations modelled from eight simulations with different slip realisations. A. Presence of low velocity sediments beneath Ngātea exacerbates shaking at periods larger than 1 s compared to Matamata (as shown by the enclosed blue region plotting above the enclosed black one), which is at similar source-to-site distance but south of the basin (Figure 2A). B. Long-period amplification is also observed at Hamilton when compared with Huntly at a similar site-to-source distance. Red dashed lines indicate design spectra at these locations for a 500 year return period for a site class D soil according to NZS1170.5 (SNZ 2004)._ 

Shaking duration is extended above deeper sections of modelled basins. Where the Firth of Thames joins the onshore Hauraki Depression near the towns of Ngātea and Thames, shaking is extended between 10 and 20 s compared to simulations in which the basin velocity structure was omitted (c.f. Ngātea and Whangamatā in Figure 6). Comparison of response spectra at similar site-to-source distances for locations within and outside basins (Figure 11) shows there is shaking amplification at periods longer than 1 s. For example, pSA at 2 s is two to three times higher at Hamilton than at Huntly (Figure 11B), which are both c. 40 km from the source (c.f. also Hamilton and Te Aroha in Figure 6). At Ngātea, simulated pSA at 2 s averages 0.5 g, whereas at Matamata it is 0.25 g. The modelled response spectra for the pairs 

of locations is compared against the 500 year design spectra (SNZ 2004), with site class D (deep or soft soil) used to represent the soil conditions. The simulated spectra is shown to exceed the design spectra across all periods at Matamata and Ngātea, while at Huntly and Hamilton the simulated spectral accelerations sit below the design spectra. 

## **_Wairoa North Fault Source_** 

Compared to the Kerepehi Fault source, simulations of a northward propagating MW 6.6 earthquake on the Wairoa North Fault indicate reduced shaking intensity and duration metrics across the upper North Island, except for central and south Auckland. PGV reaches 50 cm s<sup>-1</sup> close to the source and exceeds 10 cm s<sup>-1</sup> in the CBD (Figure 12A) with MMI 5 in the north and west increasing to MMI 7 in the south (Figure 13B). At a period of 0.3 s, pSA varies from >1.0 g in the south to 0.4 g at the international airport and 0.3 g in the CBD (Figure 12B). At 1 s, pSAs at the same locations are about 0.5, 0.2 and 0.1 g (Figure 12C). 

_Figure 12: Simulated IMs for Wairoa North Fault source, mean of eight realisations A. Peak ground velocity. B-C. Pseudo-spectral acceleration at 0.3 and 1 s._ 

## **_Potential Impacts on Regional Infrastructure_** 

Auckland is home to New Zealand’s largest urban population with an expansive infrastructure network vulnerable to volcanic, earthquake and weather-related hazards (AELG 2014). An important hotspot is the aggregation of multiple network components – road, rail, fuel and electricity transmission – through the narrow isthmus between the Waitematā and Manukau 

harbours, particularly between Takanini and Drury. These services connect Auckland and the Northland region to the rest of the North Island, while also supporting various municipal functions like emergency services (fire, police), telecommunications, healthcare and banking. 

_Figure 13: Simulated ground motions across Auckland with emphasis on key infrastructure. A-B. MMI contours for the mean (A) Kerepehi Fault source and (B) Wairoa North Fault source (black line). Major components of the rail (blue), transmission (green) and roading network (grey) are shown, along with the Marsden-Wiri aviation fuel line (pink). Locations of dams that secure Auckland’s drinking water are also indicated. Square markers denote the (C) CBD and port, (D) international airport, and (E) the Mangatawhiri Dam. C-E._ ±2𝜎 _variability of simulated response spectra for Kerepehi Fault (black) and Wairoa North Fault (blue) simulations at corresponding markers on A and B. Red dashed lines in (C-E) are design spectra for return periods of 500, 1000 and 10 000 years with corresponding soil profile classifications at those locations. Per NZS1170.5 (SNZ 2004) these are site class C (shallow soil), D (deep or soft soil) and B (rock)._ 

For the simulated Kerepehi Fault and Wairoa North Fault earthquakes, PGV varies between 20 and 40 cm s<sup>-1</sup> and PGA from 0.2 to 0.4 g in the south of Auckland, although values could be higher if amplification within the soil basins in this area were simulated. The shaking intensity is similar to that considered in a recent infrastructure assessment for Auckland (PGA 

of 0.17 to 0.27 g across the city per AELG (2014)) and as a result their impact assessment provides an indication of the potential infrastructure damage. That study concluded that damage to overhead transmission lines would likely be minimal whereas localised damage to substations or fuel lines could result in temporary outages that would be repairable within 24 hours. In contrast, rail and road links could be damaged by differential movement in regions with poor soils and these could take weeks to months to restore. 

Other key transport nodes for the city are the port locations at Waitematā and Onehunga ports, and the international airport. Simulated PGV at the airport is lower for the MW 7.3 Kerepehi Fault earthquake than the more proximal MW 6.6 Wairoa North Fault event, but both Ds595 and CAV are larger (Table 2). Comparisons between the simulated and design response spectra for the CBD and airport are presented in Figure 13C and D. Design response spectra have been developed for representative soil profile characteristics at each location, with site class C for the shallow soils in the CBD, and site class D for the deeper soils at the airport. Return periods were varied across each location so as to be representative of design requirements, with a 500 year return period for CBD buildings and a 1000 year return period for the airport. The Waitemata port and the airport are situated on reclaimed land, which would likely amplify the ground motions at these sites, and there is the potential for liquefaction of the natural and reclaimed deposits (Figure 13C-D). For context, the 2016 MW 7.8 Kaikōura earthquake caused lateral spreading, liquefaction and associated damage 60 km away at Wellington port (Cubrinovski et al. 2017), exacerbated by a strong directivity effect. The peak ground acceleration for these simulated events locations would exceed the design requirements at the port and airport as outlined in the liquefaction assessment procedure from the New Zealand Transport Agency Bridge Manual (NZTA 2018). 

Auckland’s municipal water supply is sourced primarily from reservoirs situated in the Waitākere and Hūnua Ranges, west and south of the city. The Hūnua reservoirs are created by earthen dams, which could experience PGA of 0.45 g and pSA (0.3 s) larger than 1.5 g from a nearby Wairoa North Fault earthquake (Figure 13E). The design spectra for a class B site on rock and a 10 000 year return period for a safety evaluation earthquake (NZSOLD 2015) is shown for Mangatawhiri dam (McQuarrie 2012). Simulated ground motions suggest that the design spectra would likely be exceeded by a Wairoa North Fault source but not for a Kerepehi Fault event. However, this is not surprising given the longer estimated return period (>20 kyr) for the Wairoa North Fault. For context, Verdugo et al. (2012) described the performance of 

earthen dams at short source-to-site distances from the 2010 MW 8.8 Maule, Chile earthquake. The Tutuvén Dam, 40 km from the fault trace, did not report damage. In contrast, other dams at greater distance experienced minor slope failures (Verdugo et al. 2012). It has been suggested that the relatively light damage to the Chilean dams may be partially due to the earthquake occurring during the dry season when slopes were relatively dry and reservoir levels (and stresses) were low. Aside from failure of the dam itself, other hazards include landsliding into the reservoir, which could displace water, and reduce capacity and quality. 

_Figure 14: Simulated shaking intensity (CAV) in the Waikato region due to a Kerepehi Fault source highlighting the stop-bank inventory that protects low-lying areas of the Hauraki Depression and the Waikato River. Also shown are the components of the highway (grey) and rail (blue) network._ 

Earthquake shaking can also damage flood-defence networks. Stop-bank damage surveys following the 2010-11 Canterbury earthquake sequence showed transverse cracks formed at bends that could provide seepage pathways. These were caused by liquefaction of foundation soils that caused spreading or slumping (Green et al. 2011). The principal industry in the low-lying Hauraki Depression is dairy farming, which is protected from flooding by an extensive network of stop-banks along the Waihou and Piako rivers (Figure 14). Both flooding and liquefaction can damage topsoil and therefore reduce pastural productivity, and flooding poses a risk to livestock. A useful proxy for potential liquefaction and spreading is CAV, which as an integral of the absolute velocity time series, reflects both the intensity and duration of shaking. For instance, numerical modelling has indicated settlement up to 0.6 m for very thick (~10 m) liquefiable layers and high CAV (>2.0 g.s) (Karimi et al. 2018). 

CAV exceeds 2.0 g.s for both rivers protected by stop-banks in the Hauraki Depression, and 1.0 g.s for parts of the Waikato River as it travels northward from Huntly (Figure 14). 

Simulated PGA of 0.4 to 0.5 throughout the Hauraki Depression (Table 2; Figure 8B) is larger than that associated with damage to stop-banks during 2010-11 Canterbury earthquake sequence (>0.2 g). Finally, motions within the Hauraki Plains could be considerably amplified at periods longer than 1 s (Figure 11A). Thus, it seems likely that the main determinant of damage to the stop-bank network, and many of the raised roads through the region, is the susceptibility of the local soils in these regions to loss of strength during cyclic loading. This includes the rapid loss of strength due to liquefaction of sandy, silty deposits, and the softening of soft peat deposits and organic silts. This could lead to settlement and slumping of stop-banks due to the reduced bearing capacity of the local soils, and lateral spreading induced cracking and extension. 

## **Discussion and conclusions** 

The goal of this study was to advance the understanding of seismic hazard in the upper North Island beyond what is conventionally understood through empirical ground motion prediction equations. We have done this by using physics-based ground motion simulations to model earthquake scenarios while incorporating information that would not typically enter an empirical model. We have shown that two low velocity features, the Hauraki Rift and Hamilton/Waikato basins, amplify long period (>1 s) shaking from a hypothetical Kerepehi Fault earthquake by a factor of two to three in their vicinity. These motions have the potential to exacerbate liquefaction triggering, which could subsequently damage stop-banks and farmland in the low-lying Hauraki Depression. Such basin amplification could also increase the load on multi-storey buildings in Hamilton, similar to damaging motions experienced in Christchurch and Wellington during the 2010-11 Canterbury earthquake sequence and 2016 Kaikōura earthquake. We have also investigated hypothetical rupture of the Wairoa North Fault and its effects on the Auckland region, quantifying the range of IMs at locations of critical infrastructure, e.g., reservoir dams and transport networks. 

Given the large number of possible future earthquake scenarios, the likelihood is remote that in our lifetime an earthquake will occur that closely resembles the hypotheticals considered here. So it is reasonable to ask, what is the return on effort spent modelling these scenarios? One use of these simulations is to generate a specific forecast of infrastructural impact that could provide a context for general planning of disaster response and recovery. For example, if an earthquake on the Wairoa North Fault simultaneously interrupted road, rail and transmission networks in south Auckland, what would be the implications for first responders, 

residents, the wider region, or fiscal recovery? Given limited resources, how should we triage inspection and repair of a potentially damaged stop-bank inventory following a large Kerepehi Fault earthquake? Plans developed for those eventualities could be scaled or generalised, for example, in the event of a smaller MW 6.6 rupture of the Awaiti segment of the Kerepehi Fault. Indeed, planning for infrastructure interruption and recovery in Auckland is already a mature topic in the context of volcanic risk planning (Lindsay et al. 2010; AELG 2014), elements of which could map across to these strong earthquake scenarios. 

Hypothetical models can also highlight potential infrastructure vulnerabilities and therefore direct further engineering investigations. Recent development and validation efforts have increasingly improved the accuracy of physics-based simulated IMs. However, although these metrics correlate with damage in an average sense, the occurrence of damage at a particular site depends on the local conditions. For example, we have demonstrated large values of CAV close to a Kerepehi Fault source, which would tend to promote liquefaction. However, whether liquefaction is triggered depends on the soil properties throughout the Hauraki Plains. Similarly, it is not clear whether simulated ground motions at earthen reservoir dams in the Hūnua Ranges would be sufficient to cause damage. Improving ground motion simulations is unlikely to reduce this uncertainty, whereas engineering investigations and structural modelling might. Thus, in a similar vein to traditional PSHA, regionally specific hypotheticals of the kind presented here can only identify potential vulnerabilities, to be followed up with further investigations if prudent. 

In specific cases, the ground motion simulations can provide direct input to numerical investigations looking to resolve questions of damage or hazard potential. For example, simulated intensity measures have been used to model liquefaction triggering following the 1886 Charleston earthquake (Silva et al. 2003), and simulated acceleration time series have been used as a boundary forcing to study site specific response of soil columns (de la Torre et al. 2020). Marafi et al. (2020) used simulations of basin-amplified ground motions for a hypothetical MW 9.0 Cascadia megathrust earthquake as an input to OpenSees models of the displacement response of buildings in Seattle. This approach could be adapted to model the performance of Hūnua dams shaken by a future Waiora North Fault event, similar to post-hoc analyses of shaking effects on the La Villita dam, Mexico (Pelecanos et al. 2015). Finally, simulations of specific earthquakes have been used to develop correlations with landslide occurrence (Harp et al. 2014) and to model landslide triggering mechanisms (Islam et al. 2019). 

With sufficient development and validation, such workflows might eventually be used to enhance landslide exposure maps that are earthquake-specific, for use in rapid disaster response. 

Models are excellent tools for testing hypotheses. Eiby (1977) proposed that anomalous shaking intensity from the 1976 M 5.0 Korakonui earthquake could be attributed to a shallow source and amplification by low velocity sediments across the Waikato region. Our ground motion simulations explicitly incorporated both factors in a model of the event. Simulated contours of MMI were much smaller than those inferred for the event, even for a simulation that was a full magnitude unit larger than reported. However, we did observe the proposed extension of damage contours northwest toward a region of low velocity sediments. We therefore conclude that the proposed mechanisms are not sufficiently amplifying to account for the damage observations. 

Perhaps the main shortcoming of this study is the use of a planar source to approximate an earthquake that involves jumps between several fault segments. In the first instance, these segments could be approximated as a series of smaller planes with each kinematically “triggering” rupture on the next by setting appropriate delays (e.g., Bradley et al. 2017b; Thomson et al. 2019). This could improve the representation of near source shaking that would affect the towns of Matamata and Ngātea. Further investigations to constrain the orientation, extent and connectedness of inferred segments beneath the Firth of Thames would improve the source model nearer to Auckland. Finally, a finer scale representation of shallow sedimentary structures in Tauranga and Auckland regions would improve our ability to simulate shaking in these large cities. Despite these shortcomings, physics-based ground motion simulation can be helpful for understanding hazard in relatively information-poor settings and such circumstances shouldn’t necessarily preclude their application. 

## **<mark>Acknowledgements</mark>** 

The authors are grateful to GeoNet for supplying data used in this study. We thank E Thomson for helping to generate the slip distribution figure, J Motha for preparing the supplementary video, J Davies and two anonymous reviewers for comments that improved the manuscript, and editorial handling by A Gorman. The authors wish to acknowledge the use of New Zealand eScience Infrastructure (NeSI) high performance computing facilities as part of this research. New Zealand's national facilities are provided by NeSI and funded 

jointly by NeSI's collaborator institutions and through the Ministry of Business, Innovation & Employment's Research Infrastructure programme. 

**<mark>Data Availability Statement:</mark>** All data used in this study are publicly available through GeoNet: https://www.geonet.org.nz/data/tools/FDSN 

## **<mark>References</mark>** 

- Adams RD, Muir M, Kean R. 1972. Te Aroha earthquake, 9 January 1972. Seismological Observatory. 

- Ando R, Kaneko Y. 2018. Dynamic rupture simulation reproduces spontaneous multifault rupture and arrest during the 2016 Mw 7.9 Kaikoura earthquake. Geophysical Research Letters. 45(23):12,875-812,883. 

- [AELG] Auckland Engineering Lifelines Group. 2014. Auckland Engineering Lifelines Project, Stage 2, V1.1. 

- Beavan J, Wallace LM, Palmer N, Denys P, Ellis S, Fournier N, Hreinsdottir S, Pearson C, Denham M. 2016. New Zealand GPS velocity field: 1995–2013. New Zealand Journal of Geology and Geophysics. 59(1):5-14. 

- Bishop DG. 1974. The Dunedin Earthquake, 9 April 1974, Part 2: Local Effects. Bulletin of the New Zealand Society for Earthquake Engineering. 7(3):123-129. 

- Boatwright J, Boore DM. 1982. Analysis of the ground accelerations radiated by the 1980 Livermore Valley earthquakes for directivity and dynamic source characteristics. Bulletin of the Seismological Society of America. 72(6A):1843-1865. 

- Bommer JJ, Martinez-Pereira A. 1999. The effective duration of earthquake strong motion. Journal of earthquake engineering. 3(02):127-172. 

- Bradley BA. 2012. Strong ground motion characteristics observed in the 4 September 2010 Darfield, New Zealand earthquake. Soil Dynamics and Earthquake Engineering. 42:32-46. 

- Bradley BA. 2013. A New Zealand‐specific pseudospectral acceleration ground‐motion prediction equation for active shallow crustal earthquakes based on foreign models. Bulletin of the Seismological Society of America. 103(3):1801-1822. 

- Bradley BA. 2019. On-going challenges in physics-based ground motion prediction and insights from the 2010–2011 Canterbury and 2016 Kaikoura, New Zealand earthquakes. Soil Dynamics and Earthquake Engineering. 124:354-364. 

- Bradley BA, Bae SE, Polak V, Lee RL, Thomson EM, Tarbali K. 2017a. Ground motion simulations of great earthquakes on the Alpine Fault: effect of hypocentre location and comparison with empirical modelling. New Zealand Journal of Geology and Geophysics. 60(3):188-198. 

- Bradley BA, Razafindrakoto HN, Polak V. 2017b. Ground‐motion observations from the 14 November 2016 M w 7.8 Kaikoura, New Zealand, earthquake and insights from broadband simulations. Seismological Research Letters. 88(3):740-756. 

- Cabanas L, Benito B, Herráiz M. 1997. An approach to the measurement of the potential structural damage of earthquake ground motions. Earthquake engineering & structural dynamics. 26(1):79-92. 

- Campbell KW, Bozorgnia Y. 2012. Cumulative absolute velocity (CAV) and seismic intensity based on the PEER-NGA database. Earthquake Spectra. 28(2):457-485. 

- Chick L, Healy T, de Lange W. 2001. Tsunami Hazard in the Firth of Thames, Hauraki Gulf, New Zealand. Journal of Coastal Research.403-413. 

- Clark K, Nissen E, Howarth J, Hamling I, Mountjoy J, Ries W, Jones K, Goldstein S, Cochran U, Villamor P. 2017. Highly variable coastal deformation in the 2016 Mw 7.8 Kaikōura earthquake reflects rupture complexity along a transpressional plate boundary. Earth and Planetary Science Letters. 474: 334-344. 

- Cubrinovski M, Bray JD, De La Torre C, Olsen MJ, Bradley BA, Chiaro G, Stocks E, Wotherspoon L. 2017. Liquefaction effects and associated damages observed at the Wellington CentrePort from the 2016 Kaikoura earthquake. Bulletin of the New Zealand Society for Earthquake Engineering. 50(2):152-173. 

- de la Torre CA, Bradley BA, Lee RL. 2020. Modeling nonlinear site effects in physics-based ground motion simulations of the 2010–2011 Canterbury earthquake sequence. Earthquake Spectra.8755293019891729. 

- De Lange P, Lowe DJ. 1990. History of vertical displacement of Kerepehi Fault at Kopouatai bog, Hauraki Lowlands, New Zealand, since c. 10 700 years ago. New Zealand journal of geology and geophysics. 33(2):277-283. 

- Duputel Z, Rivera L. 2017. Long-period analysis of the 2016 Kaikoura earthquake. Physics of the Earth and Planetary Interiors. 265:62-66. 

- Eberhart-Phillips D, Reyners M, Bannister S, Chadwick M, Ellis S. 2010. Establishing a versatile 3-D seismic velocity model for New Zealand. Seismological Research Letters. 81(6):992-1000. 

- Edbrooke SW, Mazengarb C, Stephenson W. 2003. Geology and geological hazards of the Auckland urban area, New Zealand. Quaternary International. 103(1):3-21. 

- Eiby G. 1977. Anomalous intensities due to the Korakonui earthquake, 5 December 1976. Seismological Observatory. 

- Elnashai AS, Gencturk B, Kwon O-S, Hashash YM, Kim SJ, Jeong S-H, Dukes J. 2012. The Maule (Chile) earthquake of February 27, 2010: Development of hazard, site specific ground motions and back-analysis of structures. Soil Dynamics and Earthquake Engineering. 42:229-245. 

- Foster KM, Bradley BA, McGann CR, Wotherspoon LM. 2019. AVS 30 Map for New Zealand Based on Geologic and Terrain Proxy Variables and Field Measurements. Earthquake Spectra. 35(4):1865-1897. 

- Graves R, Pitarka A. 2016. Kinematic ground‐motion simulations on rough faults including effects of 3D stochastic velocity perturbations. Bulletin of the Seismological Society of America. 106(5):2136-2153. 

- Graves RW, Pitarka A. 2010. Broadband ground-motion simulation using a hybrid approach. Bulletin of the Seismological Society of America. 100(5A):2095-2123. 

- Green RA, Allen J, Wotherspoon L, Cubrinovski M, Bradley B, Bradshaw A, Cox B, Algie T. 2011. Performance of Levees (Stopbanks) during the 4 september 2010 Mw 7.1 Darfield and 22 February 2011 Mw 6.2 Christchurch, New Zealand, Earthquakes. Seismological Research Letters. 82(6):939-949. 

- Harp EL, Hartzell SH, Jibson RW, Ramirez‐Guzman L, Schmitt RG. 2014. Relation of landslides triggered by the Kiholo Bay earthquake to modeled ground motion. Bulletin of the Seismological Society of America. 104(5):2529-2540. 

- Hochstein M, Nixon I. 1979. Geophysical study of the Hauraki Depression, North Island, New Zealand. New Zealand journal of geology and geophysics. 22(1):1-19. 

- Hochstein M, Nunns A. 1976. Gravity measurements across the Waikato Fault, North Island, New Zealand. New Zealand journal of geology and geophysics. 19(3):347-358. 

- Hochstein M, Tearney K, Rawson S, Davey F, Davidge S, Henrys S, Backshall D. 1986. Structure of the Hauraki Rift (New Zealand). Royal Society of New Zealand Bulletin. 24:333-348. 

- Holden C, Beavan RJ, Fry B, Reyners ME, Ristau J, Van Dissen RJ, Villamor P, Quigley M. 2011. Preliminary source model of the MW 7.1 Darfield earthquake from geological, geodetic and seismic data. paper 164 IN: Ninth Pacific Conference on Earthquake Engineering : building an earthquake resilient society, April 14-16, 2011, University of Auckland, Auckland, New Zealand. Auckland, NZ: 9PCEE 

- Islam N, Hawlader B, Wang C, Soga K. 2019. Large-deformation finite-element modelling of earthquake-induced landslides considering strain-softening behaviour of sensitive clay. Canadian Geotechnical Journal. 56(7):1003-1018. 

- Jeong S, Wotherspoon L. 2019. Development of a Waikato Basin T0 and depth model by the H/V spectral ratio method. Pacific Conference on Earthquake Engineering; 4-6 April; Auckland, NZ. 

- Karimi Z, Dashti S, Bullock Z, Porter K, Liel A. 2018. Key predictors of structure settlement on liquefiable ground: a numerical parametric study. Soil Dynamics and Earthquake Engineering. 113:286-308. 

- Kawase H. 1996. The cause of the damage belt in Kobe:“The basin-edge effect,” constructive interference of the direct S-wave with the basin-induced diffracted/Rayleigh waves. Seismological Research Letters. 67(5):25-34. 

- King GC, Wesnousky SG. 2007. Scaling of fault parameters for continental strike-slip earthquakes. Bulletin of the Seismological Society of America. 97(6):1833-1840. 

- Langridge R, Ries W, Litchfield N, Villamor P, Van Dissen R, Barrell D, Rattenbury M, Heron D, Haubrock S, Townsend D. 2016. The New Zealand active faults database. New Zealand Journal of Geology and Geophysics. 59(1):86-96. 

- Lee RL, Bradley BA, Ghisetti FC, Thomson EM. 2017. Development of a 3D Velocity Model of the Canterbury, New Zealand, Region for Broadband Ground‐Motion SimulationDevelopment of a 3D Velocity Model of the Canterbury, New Zealand, Region. Bulletin of the Seismological Society of America. 107(5):2131-2150. 

- Lee RL, Bradley BA, Stafford PJ, Graves RW, Rodriguez-Marek A. 2020. Hybrid broadband ground motion simulation validation of small magnitude earthquakes in Canterbury, New Zealand. Earthquake Spectra. 36(2):673-699. 

- Leonard M. 2010. Earthquake fault scaling: Self-consistent relating of rupture length, width, average displacement, and moment release. Bulletin of the Seismological Society of America. 100(5A):1971-1988. 

- Lindsay J, Marzocchi W, Jolly G, Constantinescu R, Selva J, Sandri L. 2010. Towards realtime eruption forecasting in the Auckland Volcanic Field: application of BET_EF during the 

New Zealand National Disaster Exercise ‘Ruaumoko’. Bulletin of Volcanology. 72(2):185204. 

- Marafi NA, Makdisi AJ, Eberhard MO, Berman JW. 2020. Impacts of an M9 Cascadia Subduction Zone Earthquake and Seattle Basin on Performance of RC Core Wall Buildings. Journal of Structural Engineering. 146(2):04019201. 

- McQuarrie W. 2012. Managing seismic performance for Dam Safety appurtenant structures. In proceedings, NZSOLD Dams and Resilience. Wellington, New Zealand. 

- [NZSOLD] New Zealand Society of Large Dams NZSoL. 2015. New Zealand Dam Safety Guidelines. Wellington, NZ: NZSOLD. 

- [NZTA] New Zealand Transport Agency. 2018. Bridge Manual, SP/M/022, Third Edition. Wellington, NZ. 

- Nigam NC, Jennings PC. 1969. Calculation of response spectra from strong-motion earthquake records. Bulletin of the Seismological Society of America. 59(2):909-922. 

- Pelecanos L, Kontoe S, Zdravković L. 2015. A case study on the seismic performance of earth dams. Géotechnique. 65(11):923-935. 

- Persaud M, Villamor P, Berryman K, Ries W, Cousins J, Litchfield N, Alloway B. 2016. The Kerepehi Fault, Hauraki Rift, North Island, New Zealand: active fault characterisation and hazard. New Zealand Journal of Geology and Geophysics. 59(1):117-135. 

- Pickle R. 2019. Nature and potential origins of the low rate tectonics of the Hauraki Rift and Northwestern New Zealand: A Geophysical Perspective. University of Auckland. 

- Pilz M, Parolai S, Stupazzini M, Paolucci R, Zschau J. 2011. Modelling basin effects on earthquake ground motion in the Santiago de Chile basin by a spectral element code. Geophysical Journal International. 187(2):929-945. 

- Rana Z. 2020. Dynamic Site Characterisation of the Hauraki Plains. University of Auckland. 

- Razafindrakoto HN, Bradley BA, Graves RW. 2018. Broadband Ground‐Motion Simulation of the 2011 Mw 6.2 Christchurch, New Zealand, EarthquakeBroadband Ground‐Motion Simulation of the 2011 Mw 6.2 Christchurch Earthquake. Bulletin of the Seismological Society of America. 108(4):2130-2147. 

- Ristau J. 2018. Overview of Moment Tensor Analysis in New Zealand. Moment Tensor Solutions. Springer; p. 281-305. 

- Silva W, Wong I, Siegel T, Gregor N, Darragh R, Lee R. 2003. Ground motion and liquefaction simulation of the 1886 Charleston, South Carolina, earthquake. Bulletin of the Seismological Society of America. 93(6):2717-2736. 

- Somerville PG, Smith NF, Graves RW, Abrahamson NA. 1997. Modification of empirical strong ground motion attenuation relations to include the amplitude and duration effects of rupture directivity. Seismological research letters. 68(1):199-222. 

- [SNZ] Standards New Zealand. 2004. NZS1170.5: Structural Design Actions-Part 5: Earthquake Actions. Wellington, NZ. 

- Stirling M, McVerry G, Gerstenberger M, Litchfield N, Van Dissen R, Berryman K, Barnes P, Wallace L, Villamor P, Langridge R. 2012. National seismic hazard model for New Zealand: 2010 update. Bulletin of the Seismological Society of America. 102(4):1514-1542. 

- Thomson EM, Bradley BA, Lee RL. 2020. Methodology and computational implementation of a New Zealand Velocity Model (NZVM2. 0) for broadband ground motion simulation. New Zealand Journal of Geology and Geophysics. 63(1):110-127. 

- Thomson EM, Lee RL, Bradley BA. 2019. Ground motion simulations of Hope fault earthquakes. Bulletin of the New Zealand Society for Earthquake Engineering. 52(4):152171. 

- Ulrich T, Gabriel A-A, Ampuero J-P, Xu W. 2019. Dynamic viability of the 2016 Mw 7.8 Kaikōura earthquake cascade on weak crustal faults. Nature communications. 10(1):1-16. 

- Verdugo R, Sitar N, Frost JD, Bray JD, Candia G, Eldridge T, Hashash Y, Olson SM, Urzua A. 2012. Seismic performance of earth structures during the February 2010 Maule, Chile, earthquake: dams, levees, tailings dams, and retaining walls. Earthquake Spectra. 28(1_suppl1):75-96. 

- Villamor P, Berryman R, Webb T, Stirling M, McGinty P, Downes G, Harris J, Litchfield N. 2001. Waikato seismic loads: Revision of seismic source characterisation. GNS Client Report. 59:2001. 

- Villani M, Faccioli E, Ordaz M, Stupazzini M. 2014. High-resolution seismic hazard analysis in a complex geological configuration: the case of the Sulmona Basin in Central Italy. Earthquake Spectra. 30(4):1801-1824. 

- Wise DJ, Cassidy J, Locke CA. 2003. Geophysical imaging of the quaternary Wairoa North Fault, New Zealand: a case study. Journal of Applied Geophysics. 53(1):1-16. 

- Worden C, Gerstenberger M, Rhoades D, Wald D. 2012. Probabilistic relationships between ground‐motion parameters and modified Mercalli intensity in California. Bulletin of the Seismological Society of America. 102(1):204-221. 

- Xu W, Feng G, Meng L, Zhang A, Ampuero JP, Bürgmann R, Fang L. 2018. Transpressional rupture cascade of the 2016 Mw 7.8 Kaikoura earthquake, New Zealand. Journal of Geophysical Research: Solid Earth. 123(3):2396-2409. 

- Yang P, Brossier R, Métivier L, Virieux J. 2016. A review on the systematic formulation of 3- D multiparameter full waveform inversion in viscoelastic medium. Geophysical Journal International. 207(1):129-149. 

