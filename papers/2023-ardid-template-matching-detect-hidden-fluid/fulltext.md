# Using Template Matching to Detect Hidden Fluid Release Episodes Beneath Crater Lakes in Ruapehu, Copahue, and Kawah Ijen Volcanoes

**Authors:** A. Ardid, D. Dempsey, C. Caudron, S. J. Cronin, C. A. Miller, I. Melchor, D. Syahbana, B. Kennedy  
**Published in:** Journal of Geophysical Research: Solid Earth (2023)  
**DOI (version of record):** https://doi.org/10.1029/2023jb026729  
**This copy:** Published version. Text extracted from the PDF at https://ddempsey.github.io/papers/2023-ardid-template-matching-detect-hidden-fluid/ardid2023-template-matching-detect.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** Published version, posted under AGU's author self-archiving policy. © 2023 American Geophysical Union. All Rights Reserved. Version of record: https://doi.org/10.1029/2023jb026729  

---


## **RESEARCH ARTICLE** 10.1029/2023JB026729 

##### **Key Points:** 

- Volcano crater lakes can obscure volcanic fluid release events 

- Through volcano seismic data in a template-matching approach, we identified short-term sealing, pressurization, and fluid-release pulses 

- We identified several fluid-released events at Ruapehu (New Zealand), Copahue (Chile/Argentina), and Kawah Ijen (Indonesia) volcanoes 

##### **Supporting Information:** 

Supporting Information may be found in the online version of this article. 

##### **Correspondence to:** 

A. Ardid, alberto.ardid@canterbury.ac.nz 

##### **Citation:** 

Ardid, A., Dempsey, D., Caudron, C., Cronin, S. J., Miller, C. A., Melchor, I., et al. (2023). Using template matching to detect hidden fluid release episodes beneath crater lakes in Ruapehu, Copahue, and Kawah Ijen volcanoes. _Journal of Geophysical Research: Solid Earth_ , _128_ , e2023JB026729. https://doi. org/10.1029/2023JB026729 

Received 14 MAR 2023 Accepted 15 AUG 2023 

##### **Author Contributions:** 

**Conceptualization:** A. Ardid, D. Dempsey, C. Caudron, S. J. Cronin, C. A. Miller, I. Melchor, B. Kennedy **Data curation:** A. Ardid, I. Melchor, D. Syahbana 

**Formal analysis:** A. Ardid **Funding acquisition:** S. J. Cronin **Methodology:** A. Ardid **Validation:** A. Ardid, D. Dempsey, C. A. Miller **Visualization:** A. Ardid **Writing – original draft:** A. Ardid **Writing – review & editing:** A. Ardid, D. Dempsey, C. Caudron, S. J. Cronin, C. A. Miller, I. Melchor, D. Syahbana, B. Kennedy 

© 2023. American Geophysical Union. All Rights Reserved. 

# **Using Template Matching to Detect Hidden Fluid Release Episodes Beneath Crater Lakes in Ruapehu, Copahue, and Kawah Ijen Volcanoes** 

**A. Ardid**<sup>**1**</sup> **, D. Dempsey**<sup>**1**</sup> **, C. Caudron**<sup>**2**</sup> **, S. J. Cronin**<sup>**3**</sup> **, C. A. Miller**<sup>**4**</sup> **, I. Melchor**<sup>**5**</sup> **, D. Syahbana**<sup>**6**</sup> **, and B. Kennedy**<sup>**1**</sup> 

1University of Canterbury, Christchurch, New Zealand, 2Université Libre de Bruxelles, Brussels, Belgium, 3University of Auckland, Auckland, New Zealand,<sup>4</sup> GNS Science, Wairakei Research Center, Taupo, New Zealand,<sup>5</sup> Instituto de Investigación en Paleobiología y Geología (UNRN-CONICET), General Roca, Argentina,<sup>6</sup> Center for Volcanology and Geological Hazard Mitigation, Bandung, Indonesia 

**Abstract** Volcano crater lakes, while picturesque, can sometimes mask the occurrence of small eruptions or hydrothermal fluid release events. However, these seemingly hidden events hold a wealth of valuable information about the underlying volcanic conduit and may pose risks to those near the volcano’s summit. This study presents a novel method for identifying these hard-to-detect fluid release events by examining seismic data from Ruapehu volcano in New Zealand. We undertake a multi-timescale template-matching analysis that uses a newly discovered seismic eruption precursor, to identify patterns related to the rapid consolidation of hydrothermal seals, pressurization processes, and the subsequent release of hydrothermal fluids. As a result, we identified a potential instance of sudden fluid-release events that were previously unnoticed due to the presence of the crater lake. Our findings support a conceptual model of cyclic pressure variation within the conduit beneath an active crater lake. This model involves the formation and disruption of seals, followed by depressurization through hydrothermal fluid release events. Fluid discharge recession recorded as seismic amplitude decay, provides information about the properties of the reservoir, conduit, and the fluid being discharged. We also applied this technique to Kawah-Ijen (Indonesia) and Copahue (Chile-Argentina), identifying multiple potential events at these volcanoes. These findings enhance our understanding of the conditions leading to explosive eruptions, including those that could breach the crater lake. 

**Plain Language Summary** We analyzed seismic data from Ruapehu volcano (New Zealand) to improve volcanic event catalogs by locating signatures of rapid hydrothermal seal formation and failure. Events are detected temporally within the seismic record using an empirical model of sealing/pressurization/eruption proposed for Whakaari volcano in New Zealand. The approach allows us to identify fluid release events that might have been obscured by Ruapehu’s crater lake or have been too small to be noticed by standard monitoring techniques. Our analysis has revealed several fluid release episodes, including reported eruptions, where a peak in displacement seismic amplitude ratio is followed by a sharp increase in real-time seismic amplitude measurement and an exponential decay in the hours and days following the events. We model this decay using a linear dependence on the degassing rate, and exponential relaxation from a discharging linear reservoir. These findings can help us conceptualize the conditions leading to explosive, potentially lake breaching eruptions. 

## **1. Introduction** 

Volcanoes in high rainfall environments may host crater lakes of varying permanence (e.g., Hurst et al., 1991; Rowe et al., 1992). If the lake covers the active vent or degassing pathways, then the lake's physiochemical characteristics provide a window into the volcanoes' activity (B. W. Christenson et al., 2010; Delmelle & Bernard, 1994; Montanaro et al., 2022; B. J. Scott, 2013; Varekamp et al., 2001). The lake may also provide a source of water for explosive magma-water interactions during phreatic or phreato-magmatic eruptions (Barberi et al., 1992; B. W. Christenson et al., 2010; Kilgour et al., 2019). Crater lakes represent a challenge for volcano monitoring (Heikens et al., 2005; Sigurdsson, 1988; Strehlow et al., 2017), either because they limit direct observation of fluid released through the vent (outgassing) and/or because they suppress precursory signals of eruptions of these fluid release events. 

1 of 21 

ARDID ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2023JB026729 

**Figure 1.** (a) Template medDSAR signal from the Whakaari 2019 eruption. The 3-week pre-eruptive time series shows 2-day rolling medians of displacement seismic amplitude ratio (DSAR) (blue), HF (high frequency; green) and MF (medium frequency; red), and raw real-time seismic amplitude measurement (RSAM) (cyan). (b) Location of Ruapehu and Whakaari volcanoes in New Zealand (TVZ: Taupō Volcanic Zone). All seismic data have been normalized following a z-score procedure (see Section 3 for more detail). (c, d) Four-week pre-eruptive time series showing DSAR, HF, and MF 2-day rolling medians, along with RSAM, and registered and detected eruptions for: (c) Ruapehu 2006 and (d) 2007 eruptions. Note: The precise eruption time in (a), (b), and (d) corresponds to the peak in the RSAM (cyan) signal. To visually indicate this without affecting the data plot, a red dashed thick line is employed. In panels (b) and (c), the auto picker eruption time (black dash line) is slightly shifted to the right, but it aligns with the RSAM peak. This representation is chosen to avoid interference with the data plot. 

Phreatic eruptions or geysering that breach a crater lake can usually be detected by visual or acoustic observations (Edwards et al., 2017; B. J. Scott, 2013). However, smaller hydrothermal fluid-jetting events may go unnoticed (Montanaro et al., 2022). As active crater lakes indicate the presence of a hydrothermal system, we hypothesize that such elusive fluid release might be preceded by seismic indications of hydrothermal sealing and pressurization. Here, we are interested in whether the seismic eruption precursor named “medDSAR” (see Section 2) classified at Whakaari volcano (Ardid et al., 2022) recurs at other volcanoes and can be used to detect eruptive events or other abrupt increases in degassing. Rather than analyzing isolated signals, our approach has been to search for seismic precursors common to multiple events and to link these with complementary data like lake temperature. 

In this study, we focused specifically on New Zealand's Ruapehu volcano and the dynamics of its active crater lake Te Wai ā-moe (Figure 1). The sulfur dominant chemistry of this lake and the physical mechanisms of sealing are similar to Whakaari (B. W. Christenson et al., 2010), which makes it a good first choice for this kind of comparison. Our goal was to identify seismic signatures of hydrothermal seal consolidation that are followed by fluid release—observed or inferred—into the base of the lake. In expanding the catalog of volcanic events to include smaller magnitude episodes, we have more opportunities to understand the rate, magnitude and signatures of sealing, pressurization, and fluid release at lake-capped volcano-hydrothermal systems. From a hazard perspective, we hope this can assist pre-emptive identification of conditions that lead to small-scale, sub-lake releases or larger, lake-breaching eruptions. 

Our methodology is as follows (Figure 2). First, we conducted a high-level screening of potential fluid sealing events by searching the seismic records of Ruapehu for close matches to a template signal, in this case, the 

2 of 21 

ARDID ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2023JB026729 

**Figure 2.** Methodology workflow. (a) Computing datastreams: real seismic amplitude measurement (RSAM), median frequencies (MF), high frequencies (HF), and displacement seismic amplitude ratio (DSAR). (b) Normalizing the datastreams using z-score standardization. (c) Computing the medDSAR as a 2-day rolling median of the raw DSAR signal. (d) Performing template matching by using a template derived from the 1-month pre-eruptive medDSAR prior to the Whakaari 2019 eruption (dI). This template is convolved over a 14-year DSAR median record of Ruapehu (dII). Dates that exceed a threshold on the correlation coefficient time series are filtered out (dIII). (e) Looking for RSAM peaks: by examining a 1-week window around the proposed dates (from the previous step), peaks that are higher than 3 standard deviations of the entire series are retained. If a peak is found, it replaces the proposed date from the previous step. If not, it is removed from the list of potential events. (f) Three days prior to the proposed dates, the median records of MF and HF are checked for a split, as observed before the Whakaari 2019 eruption. If a split is present, the date is kept. Otherwise, it is removed from the list. (g) Finally, the RSAM record 24 hr after the proposed dates from the previous step is checked to identify an exponential decay. If the decay is observed, the date is retained. If not, it is removed from the list. 

Whakaari medDSAR precursor (Ardid et al., 2022). Our hypothesis is that indicators of sealing and pressurization that recur before eruptions may also be associated with smaller-volume non-explosive fluid discharges. Then, for each potential event, we checked the RSAM record for indications of impulsive, sustained disturbance that 

3 of 21 

ARDID ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2023JB026729 

may indicate abrupt onset of a fluid release event. From this subset of events, we developed a conceptual model of fluid sealing and release in volcano hydrothermal systems. Finally, we applied this method to test its ability to identify fluid release events at two other volcanoes with crater lakes: Kawah-Ijen in Indonesia (Caudron et al., 2015), and Copahue in Chile/Argentina (Agusto & Varekamp, 2016). 

## **2. Background** 

### **2.1. Volcanic Seismic Data** 

Seismic data analysis is standard practice at volcano observatories to track the state of a volcano, the migration of magmatic fluids, and to forecast future eruptions (Caudron et al., 2021; Chardot et al., 2015; Chouet, 1996; Christophersen et al., 2022; Fee et al., 2017; Jellinek & Bercovici, 2011; Konstantinou & Schlindwein, 2003). Physical models have been developed that link subsurface gas-vent dynamics to seismic signals produced in a volcano's edifice (Coppess et al., 2022; Girona et al., 2019; Kennedy et al., 2020). Such models are useful for linking degassing dynamics with induced elastic excitations that may be detected as seismic tremor. 

Seismic data can be analyzed in particular frequency bands. For example, real-time seismic amplitude measurement at Ruapehu (RSAM; Endo & Murray, 1991) uses the 2–5 Hz band. Another data product is the Displacement Seismic Amplitude Ratio (DSAR; Caudron et al., 2019), which is the ratio of medium (MF, 4.5–8 Hz) and high (HF, 8–16 Hz) frequency band-filtered seismic displacement (Caudron et al., 2019). High values of DSAR have been inferred to correlate with high gas levels in the edifice, suggesting either reduced fluid motion and/or trapping that has led to a gas-accumulation. With recent advances in seismic data processing, we have been able to leverage these large, continuous data streams for latent patterns that may be precursors to eruptions (Ardid et al., 2022; Dempsey et al., 2020, 2022). 

Fluid flow in the volcanic edifice, whether of magmatic or hydrothermal origin, can generate volcanic tremor. The origin of the tremor is sometimes interpreted as the flow of pressurized low viscosity fluids through a crack or conduit (Clarke et al., 2019). This causes the wall of the constriction to vibrate and the seismic waves emitted and detected are called tremor (e.g., Chouet & Matoza, 2013), the measurement of which is RSAM. Girona et al. (2019) recently introduced a physical model that links subsurface gas-vent dynamics to seismic signals produced within, and propagating through, the volcanic edifice. They show that fluid flux dynamics can induce excitations that manifest as seismic tremor. Furthermore, the amplitude of this tremor is proportional to the rate of the fluid flow, _Q_ (kg/s) (e.g., Figure 7d in Girona et al., 2019). 

### **2.2. Eruption Precursors** 

An eruption precursor is an observable signal produced by a volcano that precedes an eruption and may indicate that the likelihood of an eruption has increased. Pre-eruptive signals have been identified using seismic networks (e.g., Chastin & Main, 2003; Pesicek et al., 2018; Roman & Cashman, 2018), gas measurements (e.g., Aiuppa et al., 2007; Burton et al., 2021; de Moor et al., 2016; Stix and de Moor, 2018), satellite observations of geodetic or thermal anomalies (e.g., Biggs et al., 2014; Girona et al., 2021; Oppenheimer et al., 1993), or from combinations of data using Bayesian Networks (Christophersen et al., 2022) or event trees (E. Scott et al., 2022). Precursors have been detected over timescales of years (Caudron et al., 2019, 2022; Girona et al., 2021) to weeks (Ardid et al., 2022; Pesicek et al., 2018; Roman & Cashman, 2018) to hours (Dempsey et al., 2020; Larsen et al., 2009). 

However, not all signals that precede an eruption should be classified as a precursor. Ardid et al. (2022) introduced several criteria to define an eruption precursor: (a) the signal should reliably recur before multiple eruptions, and (b) the signal should be differentiable from non-eruptive unrest or repose by recurring at a reduced frequency during these periods. The second criterion of differentiability is essential to associate the pre-eruptive signal with the eruption. Examples of statistics that test for differentiability can be found in Chastin and Main (2003), Pesicek et al. (2018), Dempsey et al. (2020), and Ardid et al. (2022). 

### **2.3. medDSAR Seismic Eruption Precursor** 

Broadband seismic station data and derived products like RSAM (Endo & Murray, 1991; Lavigne et al., 2000; Chardot et al., 2015) and Displacement Seismic Amplitude Ratio (DSAR; Caudron et al., 2019) are useful monitoring tools for volcano observatories. Eruption precursors have been identified in the DSAR signal at Whakaari, 

4 of 21 

ARDID ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2023JB026729 

Ruapehu and Tongariro volcanoes in New Zealand (Ardid et al., 2022; Caudron et al., 2019), and Kawah-Ijen in Indonesia (Caudron et al., 2019). The “medDSAR” precursor, identified at several New Zealand volcanoes, is most clearly visible in a 2-day rolling median transformation of the normalized DSAR (Ardid et al., 2022). Over a period of one or 2 weeks, medDSAR would systematically rise, usually peaking in the week before an eruption (e.g., Figure 1a on date 6 and 7 December 2019). The eruption itself frequently occurred following a reversal and decline of the signal, which Ardid et al. (2022) interpreted to reflect stalled, pressurized fluids at shallow depth beneath a transient seal (i.e., Figure 1a). 

The above-described medDSAR “cycle” was used to develop a conceptual model of conditions leading up to a phreatic eruption at Whakaari/White Island in 2019 (Ardid et al., 2022). Those precursory conditions are interpreted as appropriate to form a low permeability mineralogical seal over the active hydrothermal system. Although the precise sealing mechanism is unknown, possibilities include consolidation of compressible clay-altered rocks (Heap et al., 2017; Kanakiya et al., 2021), thermal changes in sulfur viscosity (B. W. Christenson et al., 2010; Scolamacchia & Cronin, 2016), or vein or breccia filling mineralization (B. W. Christenson & Wood, 1993; Kennedy et al., 2020). Continued gas input into the base of the sealed hydrothermal system is presumed to have pressurized the shallow aquifer, eventually leading to cascading failure of the seal and gas emission in the ∼10–20 hr preceding the eruption (Ardid et al., 2022; Burton et al., 2021). At 1:11 a.m. on 9 December (all times in UTC), the sequence at Whakaari culminated with explosive decompression and a surface eruption. Although this conceptual model fits seismic observations at Whakaari, it is not clear whether similar precursors correlate with episodes of fluid pressurization and release (either explosively or passively) at other volcanoes. 

### **2.4. Crater Lakes** 

A volcanic crater lake is a body of water, often warm, acidic and saline, formed in the crater of an active volcano (e.g., Hernández et al., 2017; Yamada et al., 2021). The temperature, level and geochemical composition of the lake may be affected by magma degassing and dynamic fluid circulation (B. Christenson et al., 2015; Filonov et al., 2022; Fournier et al., 2009; Jolly et al., 2010; Stix and de Moor, 2018). Active crater lakes are of particular interest as they preserve physical and chemical markers of the underlying magmatic-hydrothermal system (Rouwet et al., 2014; Varekamp, 2015). These markers can include various measurements and observations, such as changes in temperature, gas composition, water chemistry (including dissolved elements and isotopes), seismic activity, ground deformation, and other geophysical and geochemical parameters. By studying and analyzing these markers, researchers can gain valuable insights into the state and characteristics of the volcanic system, which aids in monitoring and hazard assessment efforts. 

Even though crater lakes may obscure primary gas release compared to fumaroles that vent to the atmosphere, they can still provide insights into volcanic degassing and hydrothermal processes (B. Christenson et al., 2015). Dissolved gases and their chemistry, lake temperature and level properties present an indirect means of examining changes in fluid release from a volcanic system. Crater lake behavior can thus potentially inform our expectation of future eruption. 

Although several active crater lakes are extensively monitored and their dynamics have been studied at length (e.g., Behr et al., 2023; B. Christenson et al., 2015; Fournier et al., 2009), explosions through them remain difficult to anticipate. This may be due to the inherent complexity (and uncertainty) of crater lake systems, as well as challenges of signal diffusivity due to a high fluid circulation rate that may exceed the rate of observations (B. W. Christenson et al., 2007; Jolly et al., 2010; Stix and de Moor, 2018). High fluid circulation rate in the context of crater lake systems highlights the rapid movement of fluids within the volcanic system, and it signifies the dynamic nature of the hydrothermal processes occurring beneath the surface. 

### **2.5. Ruapehu Volcano: Crater Lake, Eruptive History, and Monitoring** 

Mt Ruapehu is an active stratovolcano located at the southern end of the Taupo Volcanic Zone (TVZ) in the North Island of New Zealand (Figure 1). Geophysical and petrophysical studies have suggested that magma is likely to be stored at multiple levels between 2 and 10 km below the crater (Leonard et al., 2021) and is connected to the shallow volcanic cone by a narrow vertical conduit (Ingham et al., 2009; Jones et al., 2008). Below the crater lies a hydrothermal system that interacts with a convecting magma column below and the crater lake above (B. W. 

5 of 21 

ARDID ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2023JB026729 

Christenson et al., 2010). The frequency and duration of these interactions can vary significantly depending on the activity level and height of the magma column within the edifice. 

Ruapehu volcano is characterized by a crater lake (Te Wai ā-Moe) with a diameter of approximately 400 m (Behr et al., 2023; B. W. Christenson et al., 2010; Hurst et al., 1991). The thermodynamics of the crater lake are influenced by the volcano's heat flux activity and weather conditions (Behr et al., 2023). The lake, which holds approximately 10 million cubic meters of water, is situated above the vent of the volcano. The temperature of the lake, measured at a depth of 1–2 m, is affected by the inflow of cold water from rainfall and snow melting, as well as the input of hot fluids from the bottom of the lake. The level of the lake is controlled by an outflow to the Whangaehu River, which restricts the upper limit of lake level measurements. Heat transfer between the hydrothermal system and the lake primarily occurs through the flow of hot magmatic gases, which is regulated by low permeability seals within the system (Behr et al., 2023). 

Ruapehu's regular monitoring data, including temperature, lake level, outflow rates, water chemistry, and gas emissions (SO2 and CO2), are readily available through GeoNet (B. W. Christenson et al., 2010; Christophersen et al., 2022; Werner et al., 2006). These data have been previously used to develop models of lake dynamics, such as heating-cooling cycles, and to estimate the energy, mass, and fluid composition of volcanic fluids entering the volcano and reaching the lake (Behr et al., 2023; Hurst et al., 1991; B. J. Scott, 1994). 

Temperatures in the lake vary cyclically over periods of 6–18 months, typically oscillating between ∼15 and ∼45°C (See Figure S4 in Supporting Information S1; Werner et al., 2006; B. W. Christenson et al., 2010; Behr et al., 2023). Eruptions have occurred during both hot and cold lake conditions. For example, the 1995 eruption occurred when temperatures >45°C whereas the 2007 eruption occurred when the lake was cooler (<15°C). It has been proposed that in cold lake conditions, eruptions reflect over pressurization within the conduit that is driven by hydrothermal sealing mechanisms, whereas hot conditions may reflect magmatic processes (Strehlow et al., 2017). 

The historical eruption record at Ruapehu is extensive. More than 500 events, ranging from small lake disturbances to explosive eruptions have been reported in the last 170 years (B. J. Scott, 2013). The most recent eruptions were in 2006 and 2007 (B. W. Christenson et al., 2010; Kilgour et al., 2010) and were small (Volcano Explosivity Index—VEI 1) compared to the prior eruptive sequence in 1995 and 1996 (VEI 3). B. W. Christenson et al. (2010) proposed that the triggering mechanism of the 2006 and 2007 eruptions involve sealing that lead to fluid overpressure. The same mechanism has been suggested for eruptions at New Zealand's Raoul Island (B. W. Christenson et al., 2007) and Whakaari (Ardid et al., 2022; Steinke et al., 2023) volcanoes. 

An extensive network of sensors is used to monitor Mt Ruapehu, including a seismic network, Global Navigation Satellite System (GNSS), and sensors to track air pressure, gas levels, and crater lake levels (Miller & Jolly, 2014). The seismic network has 10 seismometers including short and broadband instruments. The network is maintained by GeoNet and data are publicly available through web services (see Acknowledgments section). There are four present-day broadband seismic stations close to the crater of Ruapehu (<5 km) (see station map in Figure S11 in Supporting Information S1). Of these four, only station FWVZ was operational during the 2006 and 2007 eruptions and is still operating in 2023. Crater lake temperature and level have been continuously monitored (hourly samples) since 2009, so there are no continuous records available during the last two eruptions. Manual temperature measurements at approximately monthly intervals extend back to 1950 (temperature measurements taken by human operators or observers rather than using automated or electronic monitoring systems). 

## **3. Methods: Identifying Hidden Fluid Sealing-And-Release Episodes** 

### **3.1. Seismic Data Processing (Computing and Normalizing RSAM, MF, HF, and DSAR)** 

Continuous seismic waveform data from Ruapehu were downloaded using ObsPy (Beyreuther et al., 2010). Our study used data from only the FWVZ station, which is located ∼3 km NW from the crater and is the only present-day station to have recorded the 2006 and 2007 eruptions. We only used the vertical component of velocity consistent with the prior study of DSAR that indicated sealing at Whakaari (Ardid et al., 2022). In total, 16 years of data were used (2006–2021). Our processing involved removing the instrument response from the daily waveform data and computing four different time-series (data streams; Figure 2a): RSAM, a 10-min average of the absolute velocity bandpass filtered between 2 and 5 Hz; MF (medium frequency) and HF (high 

6 of 21 

ARDID ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2023JB026729 

frequency), computed the same as RSAM but using the 4.5–8, and 8–16 Hz frequency bands; and displacement seismic amplitude ratio (DSAR), the ratio between MF and HF bands recalculated for absolute vertical displacement (Dempsey et al., 2020). DSAR is computed by integrating the MF and HF signals, computing the average absolute signals over 10-min windows, and then taking the ratio of the two quantities (Ardid et al., 2022). The 4.5 Hz threshold between RSAM and MF reflects an assumption that tremor mostly radiates energy below 4.5 Hz (Caudron et al., 2019). To exclude this effect and explore attenuation related to permeability change (such as sealing), this frequency value is used as a threshold. 

To isolate a continuous tremor signal, we needed to remove signatures from regional and volcano-tectonic (VT) earthquakes. To do this, we applied an outlier detection algorithm to the raw waveform data prior to calculating RSAM, MF, and HF (Dempsey et al., 2022). Wave trains from earthquakes perturb the average velocity record at stations above the background. After averaging, this introduces an outlier that adds noise and confuses algorithms that don't have the context of human operators. To identify and remove earthquake effects, our outlier detection algorithm excised a 2 min envelope from the raw velocity trace whenever its value exceeded three standard deviations above the mean of the data in the 10-min window. We found this was sufficient to remove signal contamination by most short duration events. However, contamination from tele seismic waves from large-magnitude long-duration subduction earthquakes still occurred. To remove these, we applied a two-window (20 min), moving minimum (Dempsey et al., 2022). 

After calculating RSAM, MF, HF, and DSAR time series over the 16-year study period, we normalized the values to unit log-normal distributions (Figure 2b). This is called z-score normalization and it has been shown to improve classification modeling (Singh & Singh, 2020). A normalized time series value of 1 (=10<sup>0</sup> ) indicates the mean signal strength whereas a value of 100 (=10<sup>2</sup> ) indicates a strong signal that is two standard deviations above the mean. Dempsey et al. (2022) have shown that such normalization improves the discrimination of precursors and accuracy when forecasting eruptions. Alternative normalization techniques based on station distance could be implemented (e.g., Aki & Koyanagi, 1981; Thompson & West, 2010) but were not tested here. 

We further processed the datastreams by extracting time series features (Christ et al., 2018; Dempsey et al., 2020; Ren et al., 2020; Rouet-Leduc et al., 2017), which are transformations of the data that minimize noise and emphasize specific characteristics of the signal. Here, we are mainly concerned with the medDSAR time series feature (Figure 2c), calculated as follows: (a) for every −10-min data-point in the normalized DSAR time series, we construct a backwards looking window that is 48 hr in duration. (b) For each 48-hr window, we compute the median value of the normalized DSAR in that window. (c) We construct the medDSAR time series as the consecutive set of medians, calculated from rolling, overlapping 48 hr windows (Dempsey et al., 2020). For detailed procedures for calculating this and other time series used in our analysis, refer to the section “Quick recipes” in Supporting Information S1. 

We chose a 48-hr window because we want to study short-term changes in volcano state that may be relevant to changes in hazard over similar time scales. For example, abrupt changes in fluid pressurization that may preface an eruption or fluid release in hours to days. This responds to a need for conceptual models that support responsive volcanic monitoring, that is, watching for and responding to changes at the volcano. Of course, shorter and longer time windows may also have value. Dempsey et al. (2020) explored a range of window lengths between 12 hr and 5 days at Whakaari and found the choice did not greatly impact the identification of eruption precursors. Caudron et al. (2019) used 90-day DSAR windows to track long-term gas accumulation at Ruapehu. In this study, we integrate a second, longer time scale that stretches back several weeks, through a template matching approach described in the next section. 

### **3.2. Template Matching and Screening Criteria** 

Template matching is a technique in which a reference signal or pattern (the template) is searched for within a larger data set to locate occurrences of the template (matches) within the larger data set. The template pattern is presumed to reflect some physical event or state and that the pattern recurs, allowing for noise or natural variability, as the event or state recurs. Hence, by searching the data for instances of the template, we potentially identify recurrences of the physical event or state. To be effective, we need to be able to measure similarity between the template and segments within the data, and then define a threshold above which a match is confirmed. 

The first template pattern we used is the 4-week time series of medDSAR that immediately preceded the 2019 phreatic eruption at Whakaari volcano (Figures 1a and 2dI). The inferred physical process corresponds to the 

7 of 21 

ARDID ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2023JB026729 

sealing of the hydrothermal system and the pressurization of fluids beneath this seal. We used this pattern as a template because we found evidence of its recurrence prior to four other phreatic eruptions at Whakaari, as well as some eruptions at Ruapehu (Figure 1) and Tongariro (Ardid et al., 2022). 

Prior to the 2019 Whakaari eruption (Figure 1a), medDSAR increased over several weeks, primarily due to a decoupling between the MF and HF signals. Ardid et al. (2022) suggested this reflected formation of a low permeability mineralogical seal over the active hydrothermal system. The seal dampens shallow or surface fluid transfer processes that generate a proportionally larger HF signal component. After medDSAR peaks, it exhibits a decline for several days before the eruption. This reflected a proportionally larger drop of the MF signal (Figure 1a), the “quieting” of which was hypothesized to reflect slowing gas flow and over pressurization in the reservoir/aquifer below the seal. Hence, the decoupling of MF and HF signals is hypothesized to reflect consolidation of the low permeability seal that suppresses fluid escape from the shallow hydrothermal system (Ardid et al., 2022). 

We used a template matching approach to initially screen for possible sealing events at Ruapehu. This involved cross-correlating the medDSAR template (1 month) over the 16-year continuous medDSAR time series at Ruapehu (Figure 2dII). Cross-correlation involves sliding one signal over another and calculating the integral of their product at each point of overlap. After cross-correlating the template with the extended signal, the output is a time series of the correlation coefficient showing, at a given time, how similar the prior 4 weeks at Ruapehu were to the pre-eruptive Whakaari template (Figure 2dIII). When the correlation coefficient exceeded a threshold, we classified this 4-week period as a possible sealing event for further investigation. We set this threshold as 0.3, which corresponded to the top 5% of all correlations obtained over the Ruapehu record (the calibration of this value was performed based on the previous study conducted by Ardid et al., 2022. In that study, a correlation coefficient analysis was conducted using an equivalent template matching approach on the medDSAR from the Ruapehu; Figure 4 “Testing differentiability of potential precursors” in Ardid et al., 2022). 

We applied three further screening criteria to reduce the number of potential events. First, we checked 2 weeks either side of the medDSAR template match for a large peak in the RSAM time series (Figure 2e). We defined a large peak as a signal that exceeded three standard deviations above the 4-week signal mean. These peaks potentially represent an abrupt and noisy disruption of the seal that allows rapid escape of the pressurized fluids. Thus, this second criterion helps us to identify which of the potential sealing events were associated with an indication of failure and fluid release. Note, signal peaks due to regional earthquakes were already excluded using an automatic filtering algorithm. 

Second, we checked that the proposed increase in medDSAR was due to a split in the MF and HF signals, as was the case for the template (Figure 2f). This eliminated medDSAR patterns caused by very strong HF increases due to surface noise such as ski field activities, rain or strong winds. This criterion was applied by checking whether, 3–5 days before the proposed episode, the MF signal remained higher than the HF. This increased the likelihood that we were isolating medDSAR cycles with a common physical origin (details on the filtered events are given in Table S2 in Supporting Information S1). 

The third criterion was an inspection of the RSAM signal for a second template, a characteristic shape indicative of fluid release. We looked for a signature common with the two known phreatic eruptions, which had explosive fluid release. We argue that the characteristic that is diagnostic of fluid release is an exponential decay of the RSAM amplitude following its initial peak, eventually stabilizing at a background level (Figure 2g). This pattern occurs after the eruptions in 2006 and 2007 (B. J. Scott, 2013; Figure 3), with characteristic decay time on the order of 10–40 hr (Figure 4). Therefore, this final criterion searches for exponential decay of the RSAM signal in the 24 hr following the proposed sealing and located RSAM peak (criterion 2). As a metric, we used the linear fit of log RSAM (Figure 4). We computed the inverse of the slope, denoted _τ_ d (a time decay constant derived in Section 6), and accepted the event if the value exceeded 2 hr. This threshold was calibrated by manually checking the selected events with values of _τ_ d in the range of 1–10 hr, and noticing that using 1 hr as a threshold selected events with poor decay shapes. Later, we show that the smallest value obtained for all fluid release events at Ruapehu was 12 hr (Figure 4). 

We also explored whether acoustic data at Ruapehu could be used as a separate cross-check of these fluid release events. However, the acoustic pressure sensors did not record consistent or discernible patterns across either the eruptions or the possible hydrothermal-fluid release events (Figure S9 in Supporting Information S1). This may be because of their small size, distance to the nearest acoustic sensor, or because some events may not have generated a surface perturbation. 

8 of 21 

ARDID ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2023JB026729 

**Figure 3.** Real-time seismic amplitude measurement (RSAM) signals before and after the (a) 2006 and (b) 2007 Ruapehu eruptions. An RSAM peak with a subsequent exponential decay is observed. The precise event time in (a) and (b) corresponds to the peak in the RSAM (black line) signal. To visually indicate this without affecting the data plot, a red dashed thick line is employed. 

## **4. Results: Hydrothermal Fluid Release Events** 

### **4.1. Fluid Release Events on Ruapehu** 

At Ruapehu, over a period of ∼16 years, our screening algorithm identified six events with high similarity to pre-eruptive DSAR at Whakaari, an impulsive RSAM signature, an MF-HF data split, and an apparent RSAM decay. Among these six events, two are previously known eruptions that broke the lake surface in 2006 and 2007 (Figure 3), and one event in 2009 described as phreatic activity by GeoNET (B. J. Scott, 2013). The other three (in 2010, 2016, and 2021) are, to the best of our knowledge, unreported (Table S2 in Supporting Information S1). However, they coincide with three regional earthquakes in New Zealand (Darfield earthquake on the 3 September 2010; Kaikoura earthquake on the 13 November 2016; and the ‘Trinami’ day, or Kermadec Islands sequence 4 March 2021). Figure 5 shows the seismic data for the 2009 non-eruptive events alongside their respective crater lake temperature and level data. Figure 6 shows the exponential decay in the RSAM and the corresponding fitted _τ_ d for the event. Here, we classified the 2009 episode as a fluid release event, as it is likely too small to be categorized as eruptions as well as leaving no surface trace. However, we suggest they are still an opportunity to understand eruptive processes as the tipping point between a rapid fluid release and explosive eruption may be small. 

The 2009 event was accompanied by an abrupt ∼0.2 m increase in lake-level (∼2e4 m<sup>3</sup> ; Figure 5b). The other three events occurred during rain storms (Figures 5d, 5f, and 5h), which makes confirmation and interpretation with lake level data difficult. Rainfall data is referential only as it is collected ∼8 km from the crater. Therefore, while it is representative of regional weather, the precise rate at the crater could be different from the weather station. So, from the of the six identified events, three are corroborated by observation of a physical surface disturbance (2006, 2007, and 2009). We also checked for lake temperature variations prior to the events. We observed both increases and decreases in lake temperature with similar frequency prior to the sealing events (e.g., Figure 4). We also observed that absolute temperature changes in the 2 weeks prior to sealing events were larger 

**Figure 4.** 24 hours of logged real-time seismic amplitude measurement after eruptions in Ruapehu on 2006 (a) and 2007 (b). Linear fit is shown in green and blue. _τ_ d correspond to a time decay constant (detailed later) that is calculated as the inverse of the slope of the linear fit. 

9 of 21 

ARDID ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2023JB026729 

**Figure 5.** Fluid release events detected in Ruapehu in 2009/07/13. Left panel show medDSAR and RSAM time-series around the detected fluid release event. Right panel show crater lake temperature and level data along with rainfall around the detected fluid release event. Rainfall data is obtained from a station located ∼8 km from the crater (Chateau), so they provide useful relative information, as the weather at the summit sometimes varies from the station. We are not graphing rainfall units in absolute terms; instead, they are used as a relative reference based on their variability. The complete time series of rainfall, along with their respective values, can be found in the Supplemental Material. 

than background fluctuations (see Supporting Information S1 ST3 for a statistical analysis on crater lake temperature and level changes before eruptive events; Figures S5–S8 in Supporting Information S1). 

### **4.2. Insights Into Ruapehu 2009 Fluid Release Event** 

Here, we analyze the fluid release event in 2009 using seismic data complemented by lake temperature and level data. The event took place during the heating phase of a lake temperature cycle (Figure 7a). 

Two medDSAR cycles (rise and decrease) occurred during the month before the event (Figure 7b). The first one started on 22 June and is preceded by oscillations in the seismic data amplitudes, which is interpreted as volcanic tremor. Concurrently, there was an increase in crater lake level (∼0.15 m; ∼1.5e4 m<sup>3</sup> ) and temperature (∼2°C) between 20 and 28 June, suggesting discharge of hot fluids into the lake. As medDSAR increases (22–26 June), crater lake level and temperature stabilize, consistent with a conceptual model of sealing above the hydrothermal system hindering hot fluid entry into the lake. The subsequent decrease of the DSAR median occurred alongside heavy rain, which may have produced an inflow of cold water, reducing the lake temperature. The corresponding surface noise from this weather caused a relative increase of high frequencies seismic noise, which in turn causes DSAR to decrease (DSAR ∝ MF/HF). Given this, we hypothesize that the two observed cycles (Figure 7b) are actually just one larger cycle recording the internal sealing activity of the volcano but (externally) overprinted by heavy rain noise. However, more analysis is needed on the lake heat flux dynamics induced by rainfall (e.g., Behr et al., 2023) to understand how the observations correlate with the seismic analysis. Similar suppression of the medDSAR may occur when there are strong winds. 

The second section of the medDSAR cycle (∼1–11 July) occurs during rising lake temperatures. Increasing lake level during this period could be driven by magmatic fluid influx and/or rain. The subsequent decline of DSAR after 9 July corresponds with a drop in the lake temperature and level, and no cold-water influx from the rain. This “quieting” of the lake data suggests that the reservoir/aquifer below the seal has reached an equilibrium 

**Figure 6.** 24 hours of logged RSAM after proposed 2009 fluid release events in Ruapehu. Linear fit is shown in green and blue. _τ_ d is the time decay constant calculated as the inverse of the slope of the linear fit. 

pressure with the current state of deep fluid recharge and overlying sealing. The episode ends on 13 July when a small fluid release event occurred, as indicated by a spike in RSAM (Figure 7b) and a sudden increase in the lake level of ∼0.2 m (∼2e4 m<sup>3</sup> ; Figure 7c). 

### **4.3. Fluid Release Events in Kawah Ijen and Copahue Volcanoes** 

In this section, we discuss the application of our method to data from two other volcanoes with crater lakes and a history of phreatic eruptions: KawahIjen in Indonesia (Caudron et al., 2015), and Copahue in Chile/Argentina (Agusto & Varekamp, 2016). In both cases, we have much shorter records compared to Ruapehu: ∼2.7 years for Kawah Ijen and ∼9 months for Copahue (see Table S1 for seismic records period in Supporting Information S1). 

10 of 21 

ARDID ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2023JB026729 

**Figure 7.** (a) Heating/cooling temperature cycle in Ruapehu crater lake in 2009. Fluid release event is highlighted (b) medDSAR and real-time seismic amplitude measurement time-series 4 weeks before the detected event on the 13 July 2009. (c) Crater lake temperature and level data along with rainfall 4 weeks before the detected event on the 13 July 2009. Dash square in (a) indicate the period shown in (b) and (c). 

Both seismic records are also noisier than Ruapehu, likely due to surface noise from strong winds at Copahue (Melchor et al., 2022) and surface geothermal activity around the lake in Kawah Ijen (Caudron et al., 2015). 

Following the method described in Section 2, we first conducted a high-level screening of the medDSAR records at Kawah-Ijen and Copahue using template matching against the Whakaari 2019 precursor. Then, we applied a filter to discern impulsive RSAM peaks and followed by the second exponential decay template. 

At Kawah-Ijen, over the ∼2.7 year data record, we identified three potential events. At Copahue, over a record of 9 months, we also identified three potential events (e.g., Figures 7 and 8; Figure S1–S3 in Supporting Information S1 show events before and after the RSAM filter for all three volcanoes; see Table S2 for proposed event dates in Supporting Information S1). Characteristic fluid release times for both Kawah-Ijen and Copahue are in the range of 10's to 100's of hours (Figure 10) which is similar to Ruapehu (Figure 5). The one exception is an episode at Copahue that had a much shorter release time of 1–2 hr (Figure 10b). 

At Kawah-Ijen, there was one confirmed eruption during the study period, on 20 March 2013 (Figure 8b; Caudron et al., 2015). This eruption has been defined as a period of increased RSAM activity (Caudron et al., 2019) but showed no medDSAR strong increase before (Figure 8b). During this period, our algorithm detected an event that took place after a medDSAR cycle with a clear divergence between MF and HF. This was followed by several peaks in RSAM, in which the largest was automatically selected as the event onset (Figure 8b). However, we cannot discount the other peaks being separate events. In addition, two potential fluid release events are suggested following their RSAM peak decay signature (i.e., Figure 9a). 

At Copahue, four minor eruptive events (ash plumes) were reported during the 9 months that we analyzed (Melchor et al., 2022). Our screening identified three of these, although reported dates did not always match RSAM peaks that we picked, which often occurred several hours before the report. Reported eruptions on 16 June, 16 July, and 6 August are identified, respectively, 16, 6, and 14 hr earlier than events detected by our analysis (see Tables S1 and S2 in Supporting Information S1). 

11 of 21 

ARDID ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2023JB026729 

**Figure 8.** (a) Location of volcanoes Kawah-Ijen in Indonesia and Copahue in Chile/Argentina and crater lakes. All seismic data have been normalized following a z-score procedure (see Section 3 for more detail). (b, c) Four-week pre-eruptive time series showing DSAR, HF, and MF 2-day rolling medians, along with RSAM, and (b) Kawah-Ijen 2013 high activity period and eruption, and (c) Copahue 2020 August eruption. 

## **5. Exploring the Relationship Between Tremor Amplitude Decay and Fluid Release Dynamics** 

In this section, we suggest that the mathematical characteristics of decay of the RSAM signal (generated by tremor) following a potential sealing episode corroborates a conceptual model of overpressured fluid release. First, we consider the link between the seismic (RSAM) signal and fluid dynamics. We hypothesize that, under certain conditions and assumptions, the RSAM signal is directly proportional to the fluid release rate into the crater lake. Girona et al. (2019) showed that degassing process can lead to seismic tremors, and the amplitude of these tremors is directly proportional to the rate of degassing. We further suggest that this relationship is observable during periods of very high-rate fluid release such as during and following a phreatic eruption, or during less noticeable hydrothermal fluid release or outflow that doesn't break the lake surface. At most other times, RSAM is assumed to be dominated by other tremor-generating processes (e.g., moving magma) or sources of noise and hence not informative of fluid release (Chardot et al., 2015). 

**Figure 9.** Two fluid release events detected in Kawah Ijen (a; 23 January 2013) and in Copahue (b; 16 July 2020) volcanoes. real-time seismic amplitude measurement and medDSAR time-series around the detected fluid release events are shown. 

12 of 21 

ARDID ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2023JB026729 

**Figure 10.** 24 hours of logged real-time seismic amplitude measurement after eruption and proposed fluid release events for fluid release events in Kawah Ijen (a, c) and Copahue (b, d). Linear fit is shown in green and blue. _τ_ d correspond to a time decay constant detailed later that is calculated as the inverse of the slope of the linear fit. 

We have previously noted that characteristic medDSAR cycles at Ruapehu, Copahue and Kawah-Ijen are sometimes followed by an abrupt increase and then decay of RSAM (e.g., Figure 5). Graphing the logarithm of RSAM against time shows an approximately linear trend for some of these events, suggesting that recession of the tremor signal is approximately exponential (e.g., Figure 6). With respect to the hypothesis above, this would correspond to an exponential decrease of the fluid release (degassing) rate from the volcano. 

An exponential decrease of flow rate is a well-known characteristic of discharging linear reservoirs (Maillet, 1905; Fiorillo, 2011; Figure 11). These idealized systems comprise a pressurized chamber of fluid and a pathway through which it can exit. As the fluid is released, pressure in the reservoir decreases, which in turn reduces the force that is expelling fluid. The result is that discharge rate declines. 

Formally, mass conservation in a reservoir control volume requires that the decline in fluid stored in the reservoir, _𝐴𝐴_ , is matched by the net fluid discharge rate, _𝐴𝐴_ , with solution 

where _M_ 0 is some initial mass of fluid accumulated in the edifice just prior to the release event. 

Assuming the fluid is expelled by Darcy flow through a pathway of length, _𝐴𝐴_ , cross-sectional area, _𝐴𝐴_ , permeability, _𝐴𝐴_ , with reservoir and lake-bottom hydrodynamic pressure (corrected for gravity effects), _𝐴𝐴_ ( _𝑡𝑡_ ) and _𝐴𝐴_ lake (Figure 11), then the mass discharge rate is 

**Figure 11.** Sketch of a cylindrical reservoir connected to a lake through a pipe, which simulates a hydrothermal reservoir in a volcano discharging fluids to a crater lake (see Section 3). _M_ : fluid stored in the reservoir; _Q_ : net fluid discharge rate; _M_ 0 is some initial mass of fluid; Assuming the fluid is expelled by Darcy flow through a vent of length, _L_ , cross-sectional area, _A_ , permeability, _k_ , and reservoir and lake-bottom pressure values, _P_ ( _t_ ) and _P_ lake; _ρ_ and _μ_ are density and viscosity of the discharging fluid. _β_ eff: effective compressibility, that accounts for the elastic response of the rock-fluid matrix. 

where _ρ_ and _μ_ are density and viscosity of the discharging fluid. 

Pressure decline in the reservoir can be linked to mass loss through an effective compressibility, _β_ eff, that accounts for the elastic response of the combined rock-fluid matrix, that is, 1∕ _𝑀_ **_𝑀_** _𝑀𝑀_ = _𝛽𝛽_ eff _𝑀𝑀𝑑𝑑_ . Taking the time derivative of the compressibility relation, and combining with Equations 1 and 2, we obtain the following expression for pressure evolution 

13 of 21 

ARDID ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2023JB026729 

where we have assumed that the total discharged fluid mass is small compared to the initial reservoir size, so _M_ ( _t_ ) ≃ _M_ 0. 

The exponential recession is characterized by a discharge time, _τ_ d, that is related to properties of the reservoir, vent and discharging fluid. An expression for discharge rate is obtained by combining Equations 2 and 3 

Assuming that the degassing (fluid discharge) rate is proportional to RSAM during an observational period of interest, then _τ_ d can be inferred from a linear fit to its logarithm: 

Applying this model to the eruptions and potential fluid release events for Ruapehu (Figure 5) yields values of _τ_ d that span hours to days. Furthermore, it is clear that the quality of the linear model fit is variable and that, in some instances, _τ_ d may be quite short but then increase with time. This might indicate a change in vent or fluid properties (Equation 4) such as a reduction in permeability as pressure declines or disturbed sediments settle, vent/crack closure under reduced pressure, or a change in liquid/vapor composition. 

Dissimilar values are expected between different episodes as the degassing behavior is also related to the mass of trapped gas at the time of release, _M_ 0, which is likely to have natural variability between events. Conduit permeability, area or length are also likely to change over time and between volcanoes. 

## **6. Discussion** 

### **6.1. Conceptual Model of Seismically Observed Pressure Cycling Beneath Active Crater Lakes** 

We propose that our observations of DSAR cycles, RSAM peaks and exponentially declining tremor signal are consistent with a conceptual model of pressure cycling in an edifice below an active crater lake (Figure 12; Same figure without labels is provided in Figure S10 in Supporting Information S1). The seismically distinct stages are: (a) formation of a shallow mineralogical seal at the top of the hydrothermal system (Figure 12a). (b) Rising fluids are trapped, causing pressure and gas content to build-up (Figure 12b). (c) Disruption of the seal that allows depressurization of the conduit though a fluid release event (Figure 12c). 

Interactions between hydrothermal systems and magmatic fluid have previously been proposed to drive phreatic eruptive events (e.g., Barberi et al., 1992; Rouwet et al., 2014). Here, we link the physical steps in those models to a series of seismic signatures that can be used to identify the different stages. For example, a range of physio-chemical and hydrothermal processes have been suggested to promote seal formation, including consolidation of compressible clay-altered rocks (Heap et al., 2017; Kanakiya et al., 2021), thermal changes in sulfur viscosity (B. W. Christenson et al., 2010; Scolamacchia & Cronin, 2016), and vein-filling mineralization (B. W. Christenson & Wood, 1993; Kennedy et al., 2020). We hypothesize that indirect evidence for these processes may be inferred from a rising medDSAR signal (Figure 11a) and, in this study, we provide a range of timescales where the seal affectively shuts off fluid flow. However, future research will be important to test this hypothesis against other signs of reduced surface flux. 

Stix and de Moor (2018) proposed a phreatic eruption model in which magma interaction with hydrothermal fluids causes pressurization within a sealed hydrothermal system (Type 1). In our model, we suggest that such 

14 of 21 

ARDID ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2023JB026729 

**Figure 12.** Conceptual model of fluid release events. (a) Hydrothermal seal consolidation causes a drop in high frequency (HF) noise associated with near-surface fluid movement, relative to medium frequencies (MF), which are reflective of fluid movement beneath the seal (HF and MF do not occur at the same spot spatially). This causes an increase in the Displacement Seismic Amplitude Ratio (DSAR). (b) The sealed system traps fluid and builds pressure. Fluid movement in the reservoir and vent is reduced, and the DSAR signal may decline due to the seismic quietness. (c) A gas pulse, or some other mechanism, causes the seal to break, indicated by a peak in the seismic signal. The break could propagate causing pressurized fluids to migrate to the surface generating a fluid release event (or a phreatic eruption). In the hours and days after the event, the discharge slows and this may be evident as an exponential decay of the tremor signal (RSAM). *Horizontal scale has been exaggerated. Sealing in Ruapehu (and Whakaari) has been proposed to be restricted to the conduit boundaries (Christenson et al., 2010). Here we propose the sealing to be wider and formed around the hydrothermal systems with a typical mushroom-shaped (Ardid et al., 2021a, 2021b) not specific to any volcano (more likely in those with widespread hydrothermal system). **Figure without labels is presented in Figure S10 in Supporting Information S1. 

over pressured states may be evidenced by increasing medDSAR that peaks and then starts to decline (Figure 11b). Once in this state, subsequent breakdown or rupture of the seal could allow fluids to be transported through the conduit system to the surface. However, we suggest that the surface expression of these release events is varied and that many—perhaps most—do not result in a phreatic eruption. 

The identified episode in Ruapehu had a less violent expression than the 2006 and 2007 eruptions may have been because the overpressure built beneath the seal was not large enough to expel a lake-breaching jet (e.g., Ogden et al., 2008; Rouwet & Morrissey, 2015). Alternatively, breakdown of the seal may not have followed a cascading failure pathway leading to runaway (explosive) decompression as was identified for Whakaari in 2019 (Ardid et al., 2022; Dempsey et al., 2020), or recently formed cracks in response to pore pressure and confining pressure that are easier to close (Kennedy et al., 2020). 

### **6.2. Magnitude of Fluid Release Events** 

The relative magnitudes of six fluid release events are obtained from a seismic proxy for the total fluid volume, _D_ . Assuming once more that fluid discharge rate is proportional to RSAM (Section 6), we estimate total _Q_ for the episode (within a constant factor, _γ_ ) by integrating the detrended _RSAM_ signal for a 24-hr period beginning at episode onset, _ti_ 

#### **Table 1** 

_Proxies of Released Fluid Volume for Two Eruptions and the 2009 Inferred Release Episodes at Ruapehu_ 

|Episode (UTC)|_D_′ (m)|_𝐴𝐴_<sup>′</sup>∕_𝐴𝐴_<sup>′</sup><br>2007|
|---|---|---|
|2006-10-04 09:20:00|2.82|0.16|
|2007-09-25 08:20:00|17.8|1.00|
|2009-04-14 02:10:00|1.32|0.07|

_Note._ Calculation of the volume proxy, _D_ ′, is given by Equation (7). The righthand column gives relative volume releases scaled to the 2007 eruption. 

where RSAM0 is the 1-week average immediately prior to event onset (discarding a first-order estimate of seismic noise) and Δ _t_ is the time series time step. As RSAM has dimensions of velocity, _D_ ′ has units of meters, however, it is not obviously interpretable as a distance. Calculating the absolute release volume, _D_ , would require simultaneous measurements of tremor and the degassing rate to calibrate the constant of proportionality, _γ_ . 

Seismic proxies for released fluid volumes corroborate with the ranked magnitudes of the 2006 and 2007 eruptions. The proxy volume associated with the 2006 eruption is about six times smaller than the 2007 event (Table 1). Consistent with this, Jolly et al. (2010) described the 2006 event as a small sub-aqueous eruption producing a small wave (∼3 m height) and no 

15 of 21 

ARDID ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2023JB026729 

detected air-wave. In contrast, the 2007 event produced a steam column to ∼4,600 m above the lake, ballistic and surge deposits, and triggered lahars (Jolly et al., 2010; Kilgour et al., 2010). 

Proxies for the total released fluid volume for all individual episodes do not reliably discriminate between eruptive and non-eruptive episodes. An obvious shortcoming of this analysis is that the constant of proportionality, _γ_ , may change over time, which makes comparing absolute volumes difficult. Alternatively, if the numbers are taken at face value, this suggests that the size and violence of the fluid release process—from the subtle 2016 release to the 2007 VEI 1 event (Kilgour et al., 2010)—is not obviously related to the release volume itself. Rather, alternative models invoking conditions of the edifice, vent or lake may be needed to explain whether such episodes will produce a hazardous eruption. 

### **6.3. Implications for Operational Monitoring at Active Crater Lakes** 

The conceptual model we describe may be useful for volcano monitoring because its different stages are interpretable through commonly available seismic data and their transforms (DSAR, and the MF and HF signals). For example, possible breakdown of the seal might be inferred where an RSAM peak occurs during a pressurization stage (indicated medDSAR decay, Figure 12b). In the aftermath of an eruption, exponential retreat of the RSAM could indicate a reducing fluid flux and an event that is ending. Agencies that monitor and evaluate risk during volcanic crises could benefit from this information as they provide insights into ongoing eruptions. More generally, understanding the connections between seismic precursors and the physical processes producing them will aid the volcanological community as it grapples with unheralded phreatic explosions in noisy, volcanic hydrothermal systems characterized by sporadic unrest. This will be particularly important if we are to understand why some medDSAR cycles are associated with eruptions but others are not. 

Further exploration of the fluid sealing and release hypotheses described require additional observational studies. For instance, deployment of high temporal measurements of gas flux in a crater (e.g., multi-gas and scanning DOAS methods) will allow direct comparison with seismic data to test whether tremor and degassing rate are genuinely correlated during exponentially decaying tremor events. Ideally, this would be complemented by automated geochemical sampling and analysis of the lake water to determine whether the events are sufficiently large to imprint upon its chemistry. High-resolution electrical and electromagnetic geophysical methods could also provide useful information regarding the location and dimensions of the conduit, hydrothermal system, and magma chamber (e.g., Ingham et al., 2009; Miller et al., 2020; Tseng et al., 2020) as well as fluid movement within the hydrothermal system (Arens et al., 2022; Miller et al., 2018). 

Further integration of physics-based models for tremor could corroborate or constrain aspects of the conceptual model we have presented. For example, the gas-driven tremor model of Girona et al. (2019) could be used to directly infer pre-event overpressure from the medDSAR cycle just as degassing rate is inferred from RSAM exponential decay. Regularly recalibrating this model to new seismic time-series data as it is collected would allow us to track how the system evolves, for example, the conduit radius or depth to the degassing source. If done in real-time, such models could be used for monitoring. The construction is effectively a digital twin of the volcano, tailored to a particular location and tracking state variables that influence hazard potential, for example, overpressure, gas content, or degassing. 

### **6.4. On the Method Assumptions and Limitations** 

Several assumptions and limitations of the proposed method for temporally locating fluid release events need to be considered. Although we have detected numerous small fluid release events, our method is unlikely to detect all events. Essentially, the methodology assumes the events to be discovered will be similar to the archetype used in the template matching. We used the median DSAR from the 2019 Whakaari eruption as an archetype, which is associated with a sealing-pressurization-fluid release process on a weekly time scale. By applying it to other volcanoes, we are assuming that the time scales of the eruptive events are similar. For Ruapehu, this is a reasonable assumption because (a) Whakaari and Ruapehu contain hydrothermal systems, as indicated by active crater lakes, surface sulfur dominated hydrothermal activity, and commonly recorded phreatic eruptions; (b) they share common eruptive precursors (Ardid et al., 2022). However, historically, the study of volcanic activity has shown that different volcanoes exhibit eruptive processes occurring at varying time scales. This suggests certain constraints on the robustness of the presented method. We acknowledge this, so we propose that 

16 of 21 

ARDID ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2023JB026729 

the methodology is valid for volcanic systems with hydrothermal systems and phreatic eruptions, at least if the precursors presented in this work are used as templates. Any applicability to volcanoes without hydrothermal systems or with distinctly different hydrothermal systems would need to be tested and potentially other templates explored. As other templates are identified our method allow them to be rapidly tested and deployed in search for future events. 

To address volcanoes with longer time scales in their pressurization-fluid release process, an alternative approach is to employ a flexible template matching technique, such as dynamic time warping (DTW), which is commonly utilized for aligning and comparing time series data (Keogh & Ratanamahatana, 2005). DTW allows for the identification of similar patterns in time series data, even when they exhibit temporal distortions or variations in speed. By using DTW, it might be possible to capture and analyze the complex dynamics of pressurization and fluid release in volcanoes over extended time periods. 

To test the broader applicability of our method, we applied it to two other case study volcanoes with active crater lakes: Kawah-Ijen in Indonesia and Copahue in Patagonia (Chile/Argentina). Our experience with these volcanoes gives us confidence in the approach as it is was responsive to known eruptions. Because we do not have very extensive seismic records for these volcanoes, it is not possible to assess the potential of the method to its full capacity. An important aspect revealed was the sensitivity of DSAR to surface noise. This limits our ability to detect events in very noisy environments. In future, utilizing a stacking approach (Godano & Capuano, 1999; Niu & Song, 2022) to combine data from multiple stations could improve the modeling by mitigating noise, but careful consideration would need to be given to data normalization. Often though, only one station is available for monitoring. Therefore, future research endeavors could explore strategies to minimize noise on an individual station basis, perhaps by exploring alternative time series features. Nevertheless, our experience with these volcanoes has been positive since we detected several events despite the shortness and noisy character of the data. 

Our findings revealed that, on its own, template matching yields numerous false positives: spurious matches that can be attributed to noisy signal oscillations. This necessitated the implementation of additional filters to distinguish and identify relevant episodes while excluding others. These methods we have developed are not wholly sufficient for monitoring and forecasting of phreatic events, as some of the filters we use are retrospective. This is because they rely on information recorded during the event (RSAM peak) and its aftermath (exponential decay of RSAM). Consequently, relying solely on template matching is insufficient for accurate forecasting. However, it can still serve as a valuable monitoring tool, provided that an acceptable false positive rate is considered and it is understood that confirmed sealing events may not necessarily lead to explosive events but can instead dissipate through passive outgassing and fluid release. 

## **7. Conclusions** 

We have analyzed seismic tremor data alongside crater lake temperature time series at Ruapehu volcano, and explored its application to Kawah-Ijen and Copahue volcanoes. Our goal was to locate signatures of hydrothermal seal consolidation, fluid pressurization and the release. From this study, we have identified several possible episodes of sudden hydrothermal fluid release that may have been obscured by the crater lakes. Had a lake not been present, it is unclear whether these would reach the size to be classified as eruptions, or whether they might have presented as geysering or jetting. 

For Ruapehu, beyond the two known eruptions during our study period, we identified an extra potential sudden fluid-release event. This event is consistent with a conceptual model of pressure cycling in conduits below the active crater lake: a seal forms over the hydrothermal system that allows pressure to build; the seal is sometimes disrupted; and depressurization of the conduit through a sudden fluid-release event is characterized by a discharge recession time that is related to properties of the reservoir, conduit and discharging fluid. 

The episode identification algorithm developed here could be used to track possible sealing events in real-time data. This could improve real-time assessments of volcanic state, for example, to compare with states predicted by multi-parameter data. In addition, we suggest this data should guide remote gas flux monitoring at New Zealand's volcanoes to validate potential sealing events in real time. We have developed an on-line system that monitors Ruapehu in real-time by the template matching scheme explained here, and updates the matching every 10 min. Results are made available at a private web address for the benefit of volcano stakeholders. During the next years, we will evaluate the performance of the monitoring tool in alignment with other sources of information. 

17 of 21 

ARDID ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2023JB026729 

An interesting implication is the expansion of eruptive event catalogs. Many volcanoes have been intensively studied by remote sensing for the last 20–30 years, but since the period between eruptions can be on longer time scales (decades, centuries or millenia), a given volcano may have few, if any, seismic records of eruption. The identification of further small events may aid the study of eruptive processes specific to these volcanoes. For instance, here we have expanded the eruption catalog at Ruapehu to include four new potential fluid release events, during which we described post-event RSAM decay and established its recurrence. This in turn led to the description of a simple outgassing model characterized by a time decay constant that can in turn be interpreted in terms of the system properties. This contributes to the characterization of eruptive and related mechanisms at Ruapehu, and perhaps opens the door to future work. 

In future work, we intend to integrate physics-based models that will allow us to constrain our observations on seismic parameters and their pre-eruptive characteristics presented in this work. For example, through shallow tremor physical models such as developed by Girona et al. (2019), we intend to develop inversions of the DSAR median cycle and RSAM peaks and decline that could help us to estimate the dynamics of physical parameters of the volcanic conduits and their dynamics (mean gas flux, overpressure, conduit radius, among others, and their evolution and correlations). This presents new opportunities to improve our knowledge of eruptive mechanisms, eruption monitoring and forecasting. 

## **Data Availability Statement** 

The data used in this work are available a https://doi.org/10.5281/zenodo.8111558 (Ardid, 2023). We provide in the supplemental material the RSAM, MF, HF, and DSAR time series for Ruapehu stations FWVZ over the 14 years explored, and for Whakaari stations WIZ over 9 years. We also provide the rainfall time series used here for Ruapehu. Raw waveform data for Ruapehu volcano (network NZ, station FWVZ, vertical component) can be  download from https://doi.org/10.21420/G19Y-9D40/ Ruapehu data is managed by GEONET (https://service. geonet.org.nz). The data is operable as client through the FDSN webservice (https://www.fdsn.org/networks/). Rainfall data are available in New Zealand's National Climate Database (https://cliflo.niwa.co.nz/). The python codes used can be found in Supporting Information S2. 

##### **Acknowledgments** 

We acknowledge the New Zealand GeoNet project and its sponsors EQC, GNS Science, LINZ, NEMA, and MBIE for providing data used in this study. BK acknowledges subcontract SIFF support funding from GNS Science. We wish to thank NZ MBIE UOAX1913 (Transitioning Taranaki to a Volcanic Future) for support of AA, DD, BK and SJC during this study. We wish to thank NZ MBIE E7774 “Adapting to climate change through stronger geothermal enterprises” for support of AA, DD, and SJC during this study. CM is supported by the New Zealand Ministry of Business, Innovation and Employment (MBIE) through the Natural Hazards and Risks programme (Strategic Science Investment Fund, contract C05X1702)”. 

## **References** 

- Agusto, M., & Varekamp, J. (2016). The Copahue volcanic-hydrothermal system and applications for volcanic surveillance. In _Copahue Volcano_ (pp. 199–238). Springer. 

- Aiuppa, A., Moretti, R., Federico, C., Giudice, G., Gurrieri, S., Liuzzo, M., et al. (2007). Forecasting Etna eruptions by real-time observation of volcanic gas composition. _Geology_ , _35_ (12), 1115–1118. https://doi.org/10.1130/g24149a.1 

- Aki, K., & Koyanagi, R. (1981). Deep volcanic tremor and magma ascent mechanism under Kilauea, Hawaii. _Journal of Geophysical Research_ , _86_ (B8), 7095–7109. https://doi.org/10.1029/jb086ib08p07095 

- Ardid, A. (2023). Seismic dataset for Ruapehu and Whakaari volcanoes in New Zealand [Dataset]. Zenodo. https://doi.org/10.5281/ zenodo.8111558 

- Ardid, A., Archer, R., Bertrand, E., Sepulveda, F., Tarits, P., & Dempsey, D. (2021a). Heat transfer through the Wairakei-Tauhara geothermal system quantified by multi-channel data modeling. _Geophysical Research Letters_ , _48_ (8), e2020GL092056. https://doi.org/10.1029/2020GL092056 

- Ardid, A., Dempsey, D., Bertrand, E., Sepulveda, F., Tarits, P., Solon, F., & Archer, R. (2021b). Bayesian magnetotelluric inversion using methylene blue structural priors for imaging shallow conductors in geothermal fields. _Geophysics_ , _86_ (3), E171–E183. https://doi.org/10.1190/ geo2020-0226.1 

- Ardid, A., Dempsey, D., Caudron, C., & Cronin, S. (2022). Seismic precursors to the Whakaari 2019 phreatic eruption are transferable to other eruptions and volcanoes. _Nature Communications_ , _13_ (1), 1–9. https://doi.org/10.1038/s41467-022-29681-y 

- Arens, F., Coco, A., Gottsmann, J., Hickey, J., & Kilgour, G. (2022). Multiphysics modeling of volcanic unrest at Mt. Ruapehu (New Zealand). _Geochemistry, Geophysics, Geosystems_ , _23_ (12), e2022GC010572. https://doi.org/10.1029/2022gc010572 

- Barberi, F., Bertagnini, A., Landi, P., & Principe, C. (1992). A review on phreatic eruptions and their precursors. _Journal of Volcanology and Geothermal Research_ , _52_ (4), 231–246. https://doi.org/10.1016/0377-0273(92)90046-g 

- Behr, Y., Sherburn, S., & Hurst, T. (2023). Continuous estimates of heat emission at Mt. Ruapehu using the Unscented Kalman Smoother. _Journal of Applied Volcanology_ , _12_ (1), 1–10. https://doi.org/10.1186/s13617-022-00125-y 

- Beyreuther, M., Barsch, R., Krischer, L., Megies, T., Behr, Y., & Wassermann, J. (2010). ObsPy: A Python toolbox for seismology. _Seismological Research Letters_ , _81_ (3), 530–533. https://doi.org/10.1785/gssrl.81.3.530 

- Biggs, J., Ebmeier, S., Aspinall, W., Lu, Z., Pritchard, M., Sparks, R., & Mather, T. (2014). Global link between deformation and volcanic eruption quantified by satellite imagery. _Nature Communications_ , _5_ (1), 1–7. https://doi.org/10.1038/ncomms4471 

- Burton, M., Hayer, C., Miller, C., & Christenson, B. (2021). Insights into the 9 December 2019 eruption of Whakaari/White Island from analysis of TROPOMI SO 2 imagery. _Science Advances_ , _7_ (25), 1–12. https://doi.org/10.1126/sciadv.abg1218 

- Caudron, C., Aoki, Y., Lecocq, T., De Plaen, R., Soubestre, J., Mordret, A., et al. (2022). Hidden pressurized fluids prior to the 2014 phreatic eruption at Mt Ontake. _Nature Communications_ , _13_ (1), 6145. https://doi.org/10.1038/s41467-022-32252-w 

- Caudron, C., Girona, T., Jolly, A., Christenson, B., Savage, M. K., Carniel, R., et al. (2021). A quest for unrest in multiparameter observations at Whakaari/White Island volcano, New Zealand 2007–2018. _Earth Planets and Space_ , _73_ (1), 1–21. https://doi.org/10.1186/s40623-021-01506-0 

18 of 21 

ARDID ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2023JB026729 

- Caudron, C., Girona, T., Taisne, B., Gunawan, H., Kristianto, & Kasbani (2019). Change in seismic attenuation as a long-term precursor of gas-driven eruptions. _Geology_ , _47_ (7), 632–636. https://doi.org/10.1130/g46107.1 

- Caudron, C., Syahbana, D. K., Lecocq, T., Van Hinsberg, V., McCausland, W., Triantafyllou, A., et al. (2015). Kawah-Ijen volcanic activity: A review. _Bulletin of Volcanology_ , _77_ (3), 1–39. https://doi.org/10.1007/s00445-014-0885-8 

- Chardot, L., Jolly, A. D., Kennedy, B. M., Fournier, N., & Sherburn, S. (2015). Using volcanic tremor for eruption forecasting at White Island volcano (Whakaari), New Zealand. _Journal of Volcanology and Geothermal Research_ , _302_ , 11–23. https://doi.org/10.1016/j. jvolgeores.2015.06.001 

- Chastin, S. F., & Main, I. G. (2003). Statistical analysis of daily seismic event rate as a precursor to volcanic eruptions. _Geophysical Research Letters_ , _30_ (13), 1671. https://doi.org/10.1029/2003gl016900 

- Chouet, B. A. (1996). Long-period volcano seismicity: Its source and use in eruption forecasting. _Nature_ , _380_ (6572), 309–316. https://doi. org/10.1038/380309a0 

- Chouet, B. A., & Matoza, R. S. (2013). A multi-decadal view of seismic methods for detecting precursors of magma movement and eruption. _Journal of Volcanology and Geothermal Research_ , _252_ , 108–175. https://doi.org/10.1016/j.jvolgeores.2012.11.013 

- Christ, M., Braun, N., Neuffer, J., & Kempa-Liehr, A. W. (2018). Time series feature extraction on basis of scalable hypothesis tests (tsfresh—A python package). _Neurocomputing_ , _307_ , 72–77. https://doi.org/10.1016/j.neucom.2018.03.067 

- Christenson, B., Németh, K., Rouwet, D., Tassi, F., Vandemeulebrouck, J., & Varekamp, J. C. (2015). Volcanic lakes. In _Volcanic lakes_ (pp. 1–20). Springer. 

- Christenson, B. W., Reyes, A. G., Young, R., Moebis, A., Sherburn, S., Cole-Baker, J., & Britten, K. (2010). Cyclic processes and factors leading to phreatic eruption events: Insights from the 25 September 2007 eruption through Ruapehu Crater Lake, New Zealand. _Journal of Volcanology and Geothermal Research_ , _191_ (1–2), 15–32. https://doi.org/10.1016/j.jvolgeores.2010.01.008 

- Christenson, B. W., Werner, C. A., Reyes, A. G., Sherburn, S., Scott, B. J., Miller, C., et al. (2007). Hazards from hydrothermally sealed volcanic conduits. _Eos, Transactions American Geophysical Union_ , _88_ (5), 53–55. https://doi.org/10.1029/2007eo050002 

- Christenson, B. W., & Wood, C. P. (1993). Evolution of a vent-hosted hydrothermal system beneath Ruapehu Crater Lake, New Zealand. _Bulletin of Volcanology_ , _55_ (8), 547–565. https://doi.org/10.1007/bf00301808 

- Christophersen, A., Behr, Y., & Miller, C. A. (2022). Automated eruption forecasting at frequently active volcanoes using Bayesian networks learnt from monitoring data and expert judgement: Application to Mt. Ruapehu, Aotearoa, New Zealand. _Frontiers in Earth Science_ , _1127_ , 905965. https://doi.org/10.3389/feart.2022.905965 

- Clarke, J., Adam, L., Sarout, J., van Wijk, K., Kennedy, B., & Dautriat, J. (2019). The relation between viscosity and acoustic emissions as a laboratory analogue for volcano seismicity. _Geology_ , _47_ (6), 499–503. https://doi.org/10.1130/g45446.1 

- Coppess, K. R., Dunham, E. M., & Almquist, M. (2022). Ultra and very long period seismic signatures of unsteady eruptions predicted from conduit flow models. _Journal of Geophysical Research: Solid Earth_ , _127_ (6), e2022JB024313. https://doi.org/10.1029/2022jb024313 

- Delmelle, P., & Bernard, A. (1994). Geochemistry, mineralogy, and chemical modeling of the acid crater lake of Kawah Ijen Volcano, Indonesia. _Geochimica et Cosmochimica Acta_ , _58_ (11), 2445–2460. https://doi.org/10.1016/0016-7037(94)90023-x 

- de Moor, J. M., Aiuppa, A., Pacheco, J., Avard, G., Kern, C., Liuzzo, M., et al. (2016). Short-period volcanic gas precursors to phreatic eruptions: Insights from Poás volcano, Costa Rica. _Earth and Planetary Science Letters_ , _442_ , 218–227. https://doi.org/10.1016/j.epsl.2016.02.056 

Dempsey, D. E., Cronin, S. J., Mei, S., & Kempa-Liehr, A. W. (2020). Automatic precursor recognition and real-time forecasting of sudden explosive volcanic eruptions at Whakaari New Zealand. _Nature Communications_ , _11_ (1), 3562. https://doi.org/10.1038/s41467-020-17375-2 Dempsey, D. E., Kempa-Liehr, A. W., Ardid, A., Li, A., Orenia, S., Singh, J., et al. (2022). Evaluation of short-term probabilistic eruption forecasting at Whakaari, New Zealand. _Bulletin of Volcanology_ , _84_ (10), 1–26. https://doi.org/10.1007/s00445-022-01600-5 

Edwards, M. J., Kennedy, B. M., Jolly, A. D., Scheu, B., & Jousset, P. (2017). Evolution of a small hydrothermal eruption episode through a 

mud pool of varying depth and rheology, White Island, NZ. _Bulletin of Volcanology_ , _79_ (2), 1–16. https://doi.org/10.1007/s00445-017-1100-5 Endo, E. T., & Murray, T. (1991). Real-time seismic amplitude measurement (RSAM): A volcano monitoring and prediction tool. _Bulletin of Volcanology_ , _53_ (7), 533–545. https://doi.org/10.1007/bf00298154 

Fee, D., Haney, M. M., Matoza, R. S., Eaton, A. R., Cervelli, P., Schneider, D. J., & Iezzi, A. M. (2017). Volcanic tremor and plume height hysteresis from Pavlof volcano, Alaska. _Science_ , _355_ (6320), 45–48. https://doi.org/10.1126/science.aah6108 

Filonov, A., del Refugio Barba-López, M., Ladah, L., Tereshchenko, I., Palacios-Hernández, E., Alcocer, J., & Ávalos-Cueva, D. (2022). The dynamics and temperature regime of the crater lakes in the Nevado de Toluca volcano, Mexico. _Limnologica_ , _92_ , 125938. https://doi. org/10.1016/j.limno.2021.125938 

Fiorillo, F. (2011). Tank-reservoir drainage as a simulation of the recession limb of karst spring hydrographs. _Hydrogeology Journal_ , _19_ (5), 1009–1019. https://doi.org/10.1007/s10040-011-0737-y 

Fournier, N., Witham, F., Moreau-Fournier, M., & Bardou, L. (2009). Boiling Lake of Dominica, West Indies: High-temperature volcanic crater 

lake dynamics. _Journal of Geophysical Research_ , _114_ (B2), B02203. https://doi.org/10.1029/2008jb005773 

Girona, T., Caudron, C., & Huber, C. (2019). Origin of shallow volcanic tremor: The dynamics of gas pockets trapped beneath thin permeable media. _Journal of Geophysical Research: Solid Earth_ , _124_ (5), 4831–4861. https://doi.org/10.1029/2019jb017482 

Girona, T., Realmuto, V., & Lundgren, P. (2021). Large-scale thermal unrest of volcanoes for years prior to eruption. _Nature Geoscience_ , _14_ (4), 238–241. https://doi.org/10.1038/s41561-021-00705-4 

Godano, C., & Capuano, P. (1999). Source characterisation of low frequency events at Stromboli and Vulcano Islands (Isole Eolie Italy). _Journal of Seismology_ , _3_ (4), 393–408. https://doi.org/10.1023/a:1009842411153 

Heap, M. J., Kennedy, B. M., Farquharson, J. I., Ashworth, J., Mayer, K., Letham-Brake, M., et al. (2017). A multidisciplinary approach to quantify the permeability of the Whakaari/White Island volcanic hydrothermal system (Taupo Volcanic Zone, New Zealand). _Journal of Volcanology and Geothermal Research_ , _332_ , 88–108. https://doi.org/10.1016/j.jvolgeores.2016.12.004 

Heikens, A., Sumarti, S., Van Bergen, M., Widianarko, B., Fokkert, L., Van Leeuwen, K., & Seinen, W. (2005). The impact of the hyperacid Ijen Crater Lake: Risks of excess fluoride to human health. _Science of the Total Environment_ , _346_ (1–3), 56–69. https://doi.org/10.1016/j. scitotenv.2004.12.007 

Hernández, P. A., Melián, G. V., Somoza, L., Arpa, M. C., Pérez, N. M., Bariso, E., et al. (2017). The acid crater lake of Taal Volcano, Philippines: Hydrogeochemical and hydroacoustic data related to the 2010–11 volcanic unrest. _Geological Society, London, Special Publications_ , _437_ (1), 131–152. https://doi.org/10.1144/sp437.17 

Hurst, A. W., Bibby, H. M., Scott, B. J., & McGuinness, M. J. (1991). The heat source of Ruapehu Crater Lake; deductions from the energy and mass balances. _Journal of Volcanology and Geothermal Research_ , _46_ (1–2), 1–20. https://doi.org/10.1016/0377-0273(91)90072-8 

Ingham, M. R., Bibby, H. M., Heise, W., Jones, K. A., Cairns, P., Dravitzki, S., et al. (2009). A magnetotelluric study of Mount Ruapehu volcano, New Zealand. _Geophysical Journal International_ , _179_ (2), 887–904. https://doi.org/10.1111/j.1365-246x.2009.04317.x 

19 of 21 

ARDID ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2023JB026729 

Jellinek, A. M., & Bercovici, D. (2011). Seismic tremors and magma wagging during explosive volcanism. _Nature_ , _470_ (7335), 522–525. https:// doi.org/10.1038/nature09828 

Jolly, A. D., Sherburn, S., Jousset, P., & Kilgour, G. (2010). Eruption source processes derived from seismic and acoustic observations of the 25 September 2007 Ruapehu eruption—North Island, New Zealand. _Journal of Volcanology and Geothermal Research_ , _191_ (1–2), 33–45. https:// doi.org/10.1016/j.jvolgeores.2010.01.009 

Jones, K. A., Ingham, M. R., & Bibby, H. M. (2008). The hydrothermal vent system of mount Ruapehu, New Zealand—A high frequency MT survey 

of the summit plateau. _Journal of Volcanology and Geothermal Research_ , _176_ (4), 591–600. https://doi.org/10.1016/j.jvolgeores.2008.05.006 Kanakiya, S., Adam, L., Rowe, M. C., Lindsay, J. M., & Esteban, L. (2021). The role of tuffs in sealing volcanic conduits. _Geophysical Research Letters_ , _48_ (20), e2021GL095175. https://doi.org/10.1029/2021gl095175 

Kennedy, B. M., Farquhar, A., Hilderman, R., Villeneuve, M. C., Heap, M. J., Mordensky, S., et al. (2020). Pressure controlled permeability in a conduit filled with fractured hydrothermal breccia reconstructed from ballistics from Whakaari (White Island), New Zealand. _Geosciences_ , _10_ (4), 138. https://doi.org/10.3390/geosciences10040138 Keogh, E., & Ratanamahatana, C. A. (2005). Exact indexing of dynamic time warping. _Knowledge and Information Systems_ , _7_ (3), 358–386. https://doi.org/10.1007/s10115-004-0154-9 

Kilgour, G., Gates, S., Kennedy, B., Farquhar, A., McSporran, A., & Asher, C. (2019). Phreatic eruption dynamics derived from deposit analysis: A case study from a small, phreatic eruption from Whakāri/White Island, New Zealand. _Earth Planets and Space_ , _71_ (1), 1–21. https://doi. org/10.1186/s40623-019-1008-8 

Kilgour, G., Manville, V., Della Pasqua, F., Graettinger, A., Hodgson, K. A., & Jolly, G. E. (2010). The 25 September 2007 eruption of mount Ruapehu, New Zealand: Directed ballistics, surtseyan jets, and ice-slurry lahars. _Journal of Volcanology and Geothermal Research_ , _191_ (1–2), 1–14. https://doi.org/10.1016/j.jvolgeores.2009.10.015 

Konstantinou, K. I., & Schlindwein, V. (2003). Nature, wavefield properties and source mechanism of volcanic tremor: A review. _Journal of Volcanology and Geothermal Research_ , _119_ (1–4), 161–187. https://doi.org/10.1016/s0377-0273(02)00311-6 

Larsen, J., Neal, C., Webley, P., Freymueller, J., Haney, M., McNutt, S., et al. (2009). Eruption of Alaska volcano breaks historic pattern. _Eos, Transactions American Geophysical Union_ , _90_ (20), 173. https://doi.org/10.1029/2009eo200001 

Lavigne, F., Thouret, J. C., Voight, B., Young, K., LaHusen, R., Marso, J., et al. (2000). Instrumental lahar monitoring at Merapi volcano, Central Java, Indonesia. _Journal of Volcanology and Geothermal Research_ , _100_ (1–4), 457–478. https://doi.org/10.1016/s0377-0273(00)00151-7 Leonard, G. S., Cole, R. P., Christenson, B. W., Conway, C. E., Cronin, S. J., Gamble, J. A., et al. (2021). Ruapehu and Tongariro stratovolcanoes: 

A review of current understanding. _New Zealand Journal of Geology and Geophysics_ , _64_ (2–3), 389–420. https://doi.org/10.1080/00288306. 2021.1909080 

Maillet, E. T. (1905). Essais d'hydraulique souterraine & fluviale. _A. Hermann._ , _37_ (12), 762. https://doi.org/10.2307/198208 Melchor, I., Almendros, J., & Caselli, A. (2022). Characterizing polarized frequencies of tremor episodes at Copahue volcano (southern Andes): A case study. _Journal of South American Earth Sciences_ , _118_ , 103961. https://doi.org/10.1016/j.jsames.2022.103961 

Miller, C. A., Christenson, B. W., Byrdina, S., Vandemeulebrouck, J., Brakenrig, T., Britten, K., et al. (2020). Snapshot of a magmatic/hydrothermal system from electrical resistivity tomography and fumarolic composition, Whakaari/White Island, New Zealand. _Journal of Volcanology and Geothermal Research_ , _400_ , 106909. https://doi.org/10.1016/j.jvolgeores.2020.106909 

Miller, C. A., Currenti, G., Hamling, I., & Williams-Jones, G. (2018). Mass transfer processes in a post eruption hydrothermal system: Parameterisation of microgravity changes at Te Maari craters, New Zealand. _Journal of Volcanology and Geothermal Research_ , _357_ , 39–55. https:// doi.org/10.1016/j.jvolgeores.2018.04.005 

Miller, C. A., & Jolly, A. (2014). A model for developing best practice volcano monitoring: A combined threat assessment, consultation and network effectiveness approach. _Natural Hazards_ , _71_ (1), 493–522. https://doi.org/10.1007/s11069-013-0928-z 

Montanaro, C., Mick, E., Salas-Navarro, J., Caudron, C., Cronin, S. J., de Moor, J. M., et al. (2022). Phreatic and hydrothermal eruptions: From overlooked to looking over. _Bulletin of Volcanology_ , _84_ (6), 1–16. https://doi.org/10.1007/s00445-022-01571-7 

Niu, J., & Song, T. R. A. (2022). Validation of repetitive volcanoseismic signals in Aso volcano, Japan with distant stations: Implications of source characterization and remote sensing in uninstrumented volcanoes. _Journal of Geophysical Research: Solid Earth_ , _127_ (5), e2021JB023400. https://doi.org/10.1029/2021jb023400 

Ogden, D. E., Wohletz, K. H., Glatzmaier, G. A., & Brodsky, E. E. (2008). Numerical simulations of volcanic jets: Importance of vent overpressure. _Journal of Geophysical Research_ , _113_ (B2), B02204. https://doi.org/10.1029/2007jb005133 

Oppenheimer, C., Francis, P. W., Rothery, D. A., Carlton, R. W., & Glaze, L. S. (1993). Infrared image analysis of volcanic thermal features: Lascar Volcano, Chile, 1984–1992. _Journal of Geophysical Research: Solid Earth_ , _98_ (B3), 4269–4286. https://doi.org/10.1029/92jb02134 Pesicek, J. D., Wellik, J. J., Prejean, S. G., & Ogburn, S. E. (2018). Prevalence of seismic rate anomalies preceding volcanic eruptions in Alaska. _Frontiers in Earth Science_ , _6_ , 100. https://doi.org/10.3389/feart.2018.00100 

Ren, C. X., Peltier, A., Ferrazzini, V., Rouet-Leduc, B., Johnson, P. A., & Brenguier, F. (2020). Machine learning reveals the seismic signature of 

eruptive behavior at Piton de la Fournaise volcano. _Geophysical Research Letters_ , _47_ (3), e2019GL085523. https://doi.org/10.1029/2019gl085523 Roman, D. C., & Cashman, K. V. (2018). Top–down precursory volcanic seismicity: Implications for ‘stealth’ magma ascent and long-term eruption forecasting. _Frontiers in Earth Science_ , _6_ , 124. https://doi.org/10.3389/feart.2018.00124 

Rouet-Leduc, B., Hulbert, C., Lubbers, N., Barros, K., Humphreys, C. J., & Johnson, P. A. (2017). Machine learning predicts laboratory earthquakes. _Geophysical Research Letters_ , _44_ (18), 9276–9282. https://doi.org/10.1002/2017gl074677 

Rouwet, D., & Morrissey, M. M. (2015). Mechanisms of crater lake breaching eruptions. _Volcanic lakes_ , 73–91. 

Rouwet, D., Tassi, F., Mora-Amador, R., Sandri, L., & Chiarini, V. (2014). Past, present and future of volcanic lake monitoring. _Journal of Volcanology and Geothermal Research_ , _272_ , 78–97. https://doi.org/10.1016/j.jvolgeores.2013.12.009 

Rowe, G. L., Jr., Brantley, S. L., Fernandez, M., Fernandez, J. F., Borgia, A., & Barquero, J. (1992). Fluid-volcano interaction in an active stratovolcano: The crater lake system of Poás volcano, Costa Rica. _Journal of Volcanology and Geothermal Research_ , _49_ (1–2), 23–51. https://doi. org/10.1016/0377-0273(92)90003-v 

Scolamacchia, T., & Cronin, S. J. (2016). Idiosyncrasies of volcanic sulfur viscosity and the triggering of unheralded volcanic eruptions. _Frontiers in Earth Science_ , _4_ , 24. https://doi.org/10.3389/feart.2016.00024 

Scott, B. J. (1994). Cyclic activity in the Crater Lakes of Waimangu hydrothermal system, New Zealand. _Geothermics_ , _23_ (5–6), 555–572. https:// doi.org/10.1016/0375-6505(94)90019-1 

Scott, B. J. (2013). _A revised catalogue of Ruapehu volcano eruptive activity: 1830–2012_ . GNS Science. Retrieved from https://www.gns.cri.nz/ static/pubs/2013/SR%202013-045.pdf 

Scott, E., Bebbington, M., Wilson, T., Kennedy, B., & Leonard, G. (2022). Development of a Bayesian event tree for short-term eruption onset forecasting at Taupō volcano. _Journal of Volcanology and Geothermal Research_ , _432_ , 107687. https://doi.org/10.1016/j.jvolgeores.2022.107687 

20 of 21 

ARDID ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2023JB026729 

Sigurdsson, H. (1988). Gas bursts from Cameroon crater lakes: A new natural hazard. _Disasters_ , _12_ (2), 131–146. https://doi. org/10.1111/j.1467-7717.1988.tb00661.x 

Singh, D., & Singh, B. (2020). Investigating the impact of data normalization on classification performance. _Applied Soft Computing_ , _97_ , 105524. https://doi.org/10.1016/j.asoc.2019.105524 

Steinke, B., Jolly, A. D., Carniel, R., Dempsey, D. E., & Cronin, S. J. (2023). Identification of seismo-volcanic regimes at Whakaari/White Island (New Zealand) via systematic tuning of an unsupervised classifier. _Journal of Geophysical Research: Solid Earth_ , _128_ (3), e2022JB026221. https://doi.org/10.1029/2022JB026221 

Stix, J., & de Moor, J. M. (2018). Understanding and forecasting phreatic eruptions driven by magmatic degassing. _Earth Planets and Space_ , _70_ (1), 1–19. 

Strehlow, K., Sandri, L., Gottsmann, J. H., Kilgour, G., Rust, A. C., & Tonini, R. (2017). Phreatic eruptions at crater lakes: Occurrence statistics 

and probabilistic hazard forecast. _Journal of Applied Volcanology_ , _6_ (1), 1–21. https://doi.org/10.1186/s13617-016-0053-2 

Thompson, G., & West, M. E. (2010). Real-time detection of earthquake swarms at Redoubt Volcano, 2009. _Seismological Research Letters_ , _81_ (3), 505–513. https://doi.org/10.1785/gssrl.81.3.505 

Tseng, K. H., Ogawa, Y., Tank, S. B., Ujihara, N., Honkura, Y., Terada, A., et al. (2020). Anatomy of active volcanic edifice at the Kusatsu– Shirane volcano, Japan, by magnetotellurics: Hydrothermal implications for volcanic unrests. _Earth Planets and Space_ , _72_ , 1–11. 

Varekamp, J. C. (2015). The chemical composition and evolution of volcanic lakes. In _Volcanic lakes_ (pp. 93–123). Springer. 

Varekamp, J. C., Ouimette, A. P., Herman, S. W., Bermúdez, A., & Delpino, D. (2001). Hydrothermal element fluxes from Copahue, Argentina: 

A “beehive” volcano in turmoil. _Geology_ , _29_ (11), 1059–1062. https://doi.org/10.1130/0091-7613(2001)029<1059:heffca>2.0.co;2 

Werner, C., Christenson, B. W., Hagerty, M., & Britten, K. (2006). Variability of volcanic gas emissions during a crater lake heating cycle at Ruapehu Volcano, New Zealand. _Journal of Volcanology and Geothermal Research_ , _154_ (3–4), 291–302. https://doi.org/10.1016/j. jvolgeores.2006.03.017 

Yamada, T., Kurokawa, A. K., Terada, A., Kanda, W., Ueda, H., Aoyama, H., et al. (2021). Locating hydrothermal fluid injection of the 2018 phreatic eruption at Kusatsu-Shirane volcano with volcanic tremor amplitude. _Earth Planets and Space_ , _73_ (1), 1–15. https://doi.org/10.1186/ s40623-020-01349-1 

21 of 21 

ARDID ET AL. 

