# Testing the reproducibility of active-distributed temperature sensing for measuring groundwater specific discharge beneath a braided river

**Authors:** Alice J. Sai Louie, Leanne K. Morgan, Eddie W. Banks, David Dempsey, Scott Wilson  
**Published in:** Journal of Hydrology (2024)  
**DOI (version of record):** https://doi.org/10.1016/j.jhydrol.2024.130877  
**This copy:** Published version. Text extracted from the PDF at https://ddempsey.github.io/papers/2024-sai-louie-testing-reproducibility-active-distributed-temperature/sai-louie2024-louie-testing-reproducibility.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** Published version, reproduced under the CC BY 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1016/j.jhydrol.2024.130877  
**Licence:** CC BY 4.0 http://creativecommons.org/licenses/by/4.0/  

---
Journal of Hydrology 633 (2024) 130877 

Contents lists available at ScienceDirect 

# Journal of Hydrology 

journal homepage: www.elsevier.com/locate/jhydrol 

#### Research papers 

## Testing the reproducibility of active-distributed temperature sensing for measuring groundwater specific discharge beneath a braided river 

### Alice J. Sai Louie<sup>a,*</sup> , Leanne K. Morgan<sup>a</sup> , Eddie W. Banks<sup>b</sup> , David Dempsey<sup>c</sup> , Scott Wilson<sup>d</sup> 

a _Waterways Centre for Freshwater Management, School of Earth and Environment, University of Canterbury, New Zealand_ b _National Centre for Groundwater Research and Training and College of Science and Engineering, Flinders University, Australia_ c _Department of Civil and Natural Resources Engineering, University of Canterbury, New Zealand_ d _Lincoln Agritech Ltd, Lincoln University, Canterbury, New Zealand_ 

A R T I C L E I N F O 

A B S T R A C T 

This manuscript was handled by Corrado CorBraided rivers are a major contributor of groundwater recharge, yet little is known about how recharge rates vary radini, Editor-in-Chief, with the assistance of in time. Existing methods for estimating groundwater recharge from rivers (i.e., river loss) are inadequate for Nick Engdahl, Associate Editor studying highly heterogeneous braided river systems at a sufficient spatiotemporal resolution. To do so, activedistributed temperature sensing (A-DTS) is employed, which combines fibre optic temperature measurements _Keywords:_ with an active heat source, enabling high-resolution quantification of water fluxes. In this study, twelve sucActive-distributed temperature sensing Braided river Surface water Groundwater recharge – groundwater interaction cessive A-DTS surveys were conducted during a 24-hour experiment on a 100 m horizontal subsurface hybrid fibre optic cable installed at 5 m depth beneath a braided river. The experiment was carried out under conditions where the river stage and flow were relatively stable to demonstrate the reproducibility and effectiveness of the Alluvial aquifer A-DTS method for measuring groundwater specific discharge. This foundational work will provide a high level of Temperature confidence in the method for future studies aimed at evaluating temporal variations in groundwater recharge. The median groundwater specific discharge values calculated over the 24-hour period had a very narrow range from 3.5 to 4.0 m d<sup>−1</sup> across the wetted footprint of the river, which is within the measurement error of the installation (6 %), indicating relatively stable groundwater recharge during the experiment. This provides confidence in the repeatability of the A-DTS method as an effective technology for quantifying river loss over longer time periods, to understand seasonal variability of groundwater recharge in braided river systems. 

##### **1. Introduction** 

Over the past two decades, surface water–groundwater (SW–GW) interaction has been widely researched and increasingly recognised as having a profound interaction (e.g., Acworth et al., 2015; Brunner et al., 2017; Kalbus et al., 2006; Rau et al., 2010). This includes investigating river loss to underlying aquifers, which is a major source of groundwater recharge at the global scale (Doll ¨ & Fiedler, 2008). Despite numerous studies aimed at quantifying river loss to groundwater (e.g., Cook, 2015; Min et al., 2020; Watson et al., 2021), relatively little is known about this process in braided rivers (Coluccio & Morgan, 2019). 

Braided rivers are found in diverse regions around the world, including the European Alps, the Himalayas, Alaska, Canada, Russia, Japan and New Zealand (Coluccio & Morgan, 2019; Tockner et al., 2006). They typically occur in areas of high sediment supply, such as alluvial fan deposits, transporting sediment and water down gradient. 

They are characterised by a complex network of multiple interconnected channels that meander across a wide braidplain, forming a braided pattern separated by gravel bars (Lane, 1957). Characteristic traits include channel avulsion, margins which expand and contract with varying sediment storage and highly heterogeneous geomorphology (Ashmore, 2013; Hicks et al., 2021; Pi´egay et al., 2004). Due to the constantly evolving nature of braided rivers and their highly variable flow regime, conducting physical hydrological measurements is extremely challenging (Coluccio & Morgan, 2019). 

Braided rivers are crucial freshwater sources in areas where they are situated, contributing to the overall water availability and ecological balance of these regions (Pi´egay et al., 2006). It is estimated, for example, that the braided Wairau River in the South Island of New Zealand contributes approximately 94 % of groundwater recharge to the underlying Wairau aquifer, which is used extensively for irrigation and drinking water (Wohling et al., 2018¨ ). However, due to limited 

* Corresponding author. 

_E-mail address:_ alice.sailouie@pg.canterbury.ac.nz (A.J. Sai Louie). 

https://doi.org/10.1016/j.jhydrol.2024.130877 

Received 31 August 2023; Received in revised form 22 January 2024; Accepted 26 January 2024 Available online 16 February 2024 

0022-1694/© 2024 The Author(s). Published by Elsevier B.V. This is an open access article under the CC BY license (http://creativecommons.org/licenses/by/4.0/). 

_Journal of Hydrology 633 (2024) 130877_ 

_A.J. Sai Louie et al._ 

understanding of the underlying mechanisms of SW–GW interaction in braided rivers as well as the challenges in instrumenting these environments, the estimation of river loss to groundwater pose significant uncertainty in water balance models and introduces significant ambiguity in water allocation decisions (Close et al., 2014). 

Existing methods to estimate groundwater recharge from rivers fail to characterise SW–GW interactions at sufficient spatial resolution to examine highly heterogenous braided river settings. Current methods to estimate groundwater recharge from rivers include infiltration experiments, natural tracer methods, water balance models, differential gauging, groundwater dating and using satellite imagery (Coluccio, 2018; Coluccio & Morgan, 2019; Di Ciacca et al., 2023; Kalbus et al., 2006; Shanafield & Cook, 2014; Verhagen et al., 2022). However, these methods often assume uniform groundwater discharge through the riverbed, which does not hold true in braided river systems (Becker, 2004; Xie et al., 2016). 

Just as it is challenging to measure spatial variability in groundwater recharge from rivers, temporal variability is hard to quantify due to insufficient long-term data, complexity of interactions, spatial variations, and restrictive technical challenges with long-term monitoring equipment. Many of the existing methods for estimating groundwater recharge only provide reliable recharge rates with a temporal resolution in the order of hours to days, but often accompanied by a trade-off in spatial resolution (e.g., Cranswick & Cook, 2015; Shanafield & Cook, 2014). While hydraulic head measurements and observation well chemistry methods may be able to quantify exchange fluxes over longer time periods on the order of hours to months, measurements are inferred between discrete points, potentially overlooking the heterogeneity inherent to braided river systems. Further, often these estimates are simply long-term averages and are not at sufficient temporal resolution to study seasonal changes in dynamic braided river systems. For braided rivers, in particular, Di Ciacca et al. (2023) proposed that more work needs to be done investigating the spatio-temporal variation of the SW–GW interaction to be able to understand how river loss changes due to variation in river discharge and the wetted footprint of the river. 

Heat as a tracer was used originally by Suzuki (1960) and Stallman (1963 & 1965) as a proxy for groundwater flow, using analytical solutions of heat transport equations to calculate groundwater velocity. Recent technological advancements enable the use of fibre optic DTS to collect high resolution data of passive, natural temperature fluctuations over time (Selker et al., 2006; Shanafield et al., 2018; Tyler et al., 2009). Fibre optic cables to conduct DTS can be installed in vertical, open boreholes (Banks et al., 2014; Leaf et al., 2014), in sealed boreholes (Maldaner et al., 2019; Munn et al., 2020) and installed using direct push drilling methods (Bakker et al., 2015; Des Tombe et al., 2019) so the fibres are in contact with the surrounding aquifer material. Temperature profiles from vertical sealed boreholes and direct push installation can be used to monitor dominantly horizontal groundwater flow processes, whereas open boreholes intercept vertical flow. Horizontal fibre optic cables have also been installed just below the sediment–water interface to investigate SW–GW interactions and hyporheic exchange (Gaona et al., 2019; Gilmore et al., 2019; Le Lay et al., 2019; Lowry et al., 2007). Busato et al. (2019) was the first to use a horizontal subsurface installation of fibre optic cable to conduct DTS measurements 5 m below Vermigliana Creek in Italy to characterise SW–GW interaction. 

A-DTS involves combining DTS with a heating source and allows water fluxes to be quantified at a high spatial resolution (Simon et al., 2021; Simon et al., 2022). There have been several studies that used A- DTS to measure groundwater fluxes (i.e., specific discharge), these surveys have been configured differently and in unique hydrogeological settings (Del Val et al., 2021; Selker & Selker, 2018; Simon et al., 2022) or using sandbox experiments and numerical simulations (Simon et al., 2020; Simon et al., 2023b). The sandbox experiments have confirmed that the resultant temperature elevation over time from A-DTS is sensitive to flow conditions and can be used to characterise the temporal dynamic of groundwater flux variations (Simon et al., 2023b). 

Consequently, this prompts an inquiry into the prospect of applying A- DTS to quantify groundwater flux variations over time in different hydrogeological settings, such as from braided rivers. Banks et al. (2022) recently described the novel application of two 100 m horizontal, subsurface A-DTS installations at a depth of around 5 m beneath the braided Waikirikiri-Selwyn River in the South Island of New Zealand. This was a unique installation in a complex braided river system composed of coarse unconsolidated alluvial gravels. The system has been used to estimate losses to groundwater at high spatial resolution. While the work of Banks et al. (2022) provides a snapshot of river loss to groundwater, there is also significant potential for assessing temporal changes in river loss to groundwater, via repeat surveys. However, to address this question it is important to first assess whether the A-DTS equipment has sufficient temporal sensitivity to be able to distinguish between a measurable change in groundwater recharge (i.e., flux) and equipment measurement uncertainty. To date, this type of assessment has not been carried out within a natural field setting and the usefulness of A-DTS for measuring temporal variation in groundwater recharge is unknown. 

The main objective of this work is to test the reproducibility (i.e., repeatability) of groundwater flux measurements made in the field using the A-DTS method. We hypothesize that the A-DTS method deployed in a complex field setting has the required sensitivity to measure small changes in groundwater flux. To test the reproducibility of the A-DTS method, we carried out a series of surveys using a 100 m length of hybrid fibre optic cable installed approximately 5 m beneath the braided Waikirikiri-Selwyn River. Specifically, twelve successive A-DTS surveys were conducted over a 24-hour period to calculate groundwater flux. Each 2-hour survey involved applying a heat pulse for one hour and measuring the temperature along the cable every 12 s at a spatial sample interval of 0.25 m. The experiment was carried out under conditions where the river stage and flow were relatively stable to demonstrate the reproducibility of the A-DTS method for measuring groundwater specific discharge. The method provides a framework for future work that aims to quantify temporal changes in river loss over longer time periods, to understand seasonal variability. 

##### **2. Study site** 

The Waikirikiri-Selwyn River is situated in the Canterbury region, which is in the South Island of New Zealand (Fig. 1a). It is considered a benchmark alluvial river system in a relatively natural state and it has been studied extensively (Larned et al., 2008; Larned et al., 2015; McKerchar & Schmidt, 2007; Rupp et al., 2008; Vincent, 2005). More recently research has focused on quantifying river losses to the underlying shallow braidplain and regional aquifer systems using various methods including radon-222 (Robb, 2021; Songola, 2022), A-DTS (Banks et al., 2022), and a combination of satellite imagery and machine learning (Di Ciacca et al., 2023). Groundwater flow in the braidplain gravels occurs subparallel to the river flow direction (Burden, 1984). A detailed description of the study site is provided in Banks et al. (2022), Di Ciacca et al. (2023) and Sai Louie et al., (2023b). 

The study site was selected as it is a relatively low energy braided river system, making it an ideal location for long-term instrumentation. It represents an ephemeral losing reach with one or two active channels. Seasonally, a drying front is encountered approximately 1.3 km to 12 km downstream of the study site as detailed by Di Ciacca et al. (2023). 

The river contemporary braidplain at the study site is approximately 400 m wide, and is comprised of alluvial gravels of the Springston Formation (Forsyth et al., 2008). The contemporary braidplain is laterally bound by terraces of older Burnham Formation glacial outwash gravels, which are approximately 5 m in height. Both of these deposits are greywacke-derived sediments with distinct hydrogeologic properties (Forsyth et al., 2008). 

An analysis of the hydrogeologic properties at the study site provide some insight into the distinct characteristics of the shallow braidplain 

2 

_A.J. Sai Louie et al._ 

_Journal of Hydrology 633 (2024) 130877_ 

**Fig. 1.** (a) Location of Waikirikiri-Selwyn River catchment, New Zealand, (b) Waikirikiri-Selwyn River catchment and (c) Study site and the location of the buried A- DTS cable HDD1 and the network of shallow and deep piezometers. 

gravels. The hydraulic conductivity of the shallow braidplain gravels estimated from previous A-DTS surveys range from 23 to 33 m d<sup>−1</sup> for vertical flow (Banks et al., 2022). On-site aquifer tests suggest hydraulic conductivity values between 75 and 250 m d<sup>−1</sup> for horizontal flow (Banks et al., 2022). Based on pumping tests, the transmissivity of the shallow braidplain gravels is estimated to be 1200 m<sup>2</sup> d<sup>−1</sup> . A schematic showing the braidplain gravels and monitoring infrastructure (detailed 

later) is presented in Fig. 2. 

There is a network of infrastructure for monitoring surface water and groundwater across the site (Fig. 1). The network comprises thirty piezometers, including twenty-three shallow piezometers installed in the braidplain gravels (screened between 1 m and 6.8 m depth) and seven deep piezometers (screened between 12.1 m and 35 m depth). Surface water monitoring includes stage height and discharge at the Beattys 

3 

_Journal of Hydrology 633 (2024) 130877_ 

_A.J. Sai Louie et al._ 

**Fig. 2.** Schematic showing the approximate location of the A-DTS cable (termed HDD1) beneath the Waikirikiri-Selwyn River. 

Road gauge (200 m upstream of the site) and at Whitecliffs approximately 9.5 km further upstream. The gauge at Beattys Road was destroyed during a flooding event in May 2021 and subsequent replacement gauging stations were damaged on several occasions causing many gaps in the seasonal flow record. Therefore, an empirical relationship between the Whitecliffs gauge and Beattys Road was developed to create a synthetic flow record for the Beattys Road location. However, we note that the synthetic flow record is only accurate for low flows (Q _<_ 5 m<sup>3</sup> s<sup>−1</sup> ). 

##### **3. Methods** 

##### _3.1. Fibre optic installation and cable structure_ 

The subsurface horizontal fibre optic cable (termed HDD1) was installed using a novel horizontal directional drilling method. A hybrid cable containing fibre optic cables for temperature sensing and copper conductors for heating, of approximately 100 m in length was installed to depths of around 5 m beneath the two main channels of the Waikirikiri-Selwyn River, perpendicular to river flow, as detailed by Banks et al. (2022). The location of HDD1 intercepts river loss to the underlying braidplain gravels (Fig. 2). For reference, the cable location coordinates are provided online via Mendeley Data (Sai Louie et al., 2023a). 

Understanding the exact cable structure and especially the radial distance _r_ (m) between the heating and fibre optic cable is important when estimating groundwater velocities using analytical approaches (detailed below). In some A-DTS studies, the heat source is separate from 

the optical fibres shrouded in a plastic coating or metal sheath (Bakker et al., 2015; des Tombe et al., 2019), while most other studies have used a hybrid cable comprising optical fibres surrounded by the heating elements inside a plastic jacket or metal sheath (Maldaner, 2021; Munn et al., 2020; Selker & Selker, 2018; Simon et al., 2020) or optical fibres positioned adjacent to heating cables encapsulated within the hybrid cable (Banks et al., 2022; Coleman et al., 2015). To examine the sensitivity of the hybrid cable configuration on calculated velocities, Banks et al. (2022) used the moving instantaneous line source (MILS) model with fixed parameters but varying the _r_ distance from 0.0024 m to 0.0036 m. The resultant average specific discharge ranged from 1.9 to 2.9 m d<sup>−1</sup> , thus emphasising the importance of understanding the effective distance between the optical fibres and heating cables. 

Precise cable dimensions were not provided by the manufacturers (Fig. 3a); therefore, this study dissected twelve short lengths of the hybrid cable perpendicular to the cable orientation and using a microscope to measure the value of _r_ (Fig. 3b). The geometry of the hybrid cable comprises two twisted copper heating cables with a radius of 0.8 mm and a gel filled buffer tube containing four optical fibres. The measured distance _r_ between the heating cables and the optical fibres was 0.7 mm (Fig. 3a). This triple cable bundle is contained within a metal sheath with an inner radius of 2 mm and an outer radius of 3.2 mm, encased by a polypropylene jacket with an outer radius of 5.5 mm (Fig. 3a). 

##### _3.2. Active-distributed temperature sensing experimental design_ 

A Silixa XT-DTS was used to collect the temperature measurements 

**Fig. 3.** (a) Manufacturers specification of the hybrid cable modified from Silixa (2020). (b) A section of the hybrid cable used in this study photographed using a microscope to verify cable dimensions and the radial distance r. Photo taken by the author. 

4 

_Journal of Hydrology 633 (2024) 130877_ 

_A.J. Sai Louie et al._ 

with a resolution of 0.01<sup>◦</sup> C, a spatial sample interval of 0.25 m, and a spatial resolution of 0.54 m (Silixa, 2020). However, the effective spatial resolution in the field setting is likely to be greater than the spatial resolution of the DTS unit (Selker & Selker, 2014; Simon et al., 2020). For this reason, the effective spatial resolution was estimated using the 90 % step change method on the installed hybrid fibre optic cable and with the same DTS unit used in this experiment. This was conducted on 12 May 2021 on HDD1 with instant freeze spray applied at a discrete location on the cable and from this, the effective spatial resolution was estimated to be 0.763 m. 

For calibration purposes, a section of flexible fibre optic cable (without heating cables) was left above ground. Two 8 m reference sections of cable were coiled and placed in the two insulated calibration baths, one containing ambient temperature river water and the second containing a slurry of ice water. Each bath had an independent Pt-100 temperature probe connected to the DTS unit and recording the temperature at 12-second intervals. To prevent stratification of water temperature the calibration baths were kept circulating using a small pump. 

The DTS was configured with an acquisition time of 10 s, employing a double-ended differential loss correction method consisting of 5 s forward measurement and 5 s reverse measurement (Van De Giesen et al., 2012). To heat the copper conductors within the hybrid cable a Silixa heatpulse unit was used. The heatpulse configuration for each survey comprised 300 s DTS pre-measurements, followed by 3600 s heating with an applied power output of 15 W m<sup>−1</sup> , and finally a 3300 s cooling duration. Considering the demonstrated thermal equilibrium in 3-hour heating surveys and the relatively high groundwater velocities in this setting, a heating period of 3600 s was deemed appropriate. This was based on a sensitivity analysis conducted whereby data from the 3- hour heating survey was shortened to various durations and the data was processed, to decide upon the optimal heating duration for this A- DTS installation in this particular setting. Based on this a 3600 s duration heating period was selected on the premise that it is sufficient for the temperature to reach thermal equilibrium, yet it is not too long so that it may pick up transient fluxes. 

##### _3.3. Surface water and groundwater monitoring infrastructure_ 

A long-term dataset of surface water and groundwater information at the site has also been collected. Concurrently with the 24-hour A-DTS experiment, surface water and groundwater level and temperature were monitored across the site every fifteen minutes. Continuous surface water temperature was recorded using a HOBO pressure and temperature logger deployed on a cinder block located on the edge of the main channel above HDD1. Climate observations including rainfall and air temperature were also recorded at the site in fifteen-minute intervals. 

when interpreting A-DTS results because they affect the heat transfer processes that control the temperature response to heat injection. 

##### _3.5. Mathematical model for estimating groundwater flux_ 

The Hantush-Jacob analytical solution solves for energy conservation in a porous media subject to heat conduction in the effective media and advection of water through the pore space. It was introduced by Ren et al. (2000) for the problem of groundwater velocity analysis and later re-examined by Bakker et al. (2015). The governing equation in 2D is: 

Where _D_ (m<sup>2</sup> s<sup>−1</sup> ) is the thermal diffusivity coefficient, _T_ (<sup>◦</sup> C) is temperature, _t_ (s) is time, _ρc_ (J m<sup>−3◦</sup> C<sup>−1</sup> ) is the thermal energy density, which is the product of rock density, _ρ_ (kg m<sup>−3</sup> ) and specific heat capacity, _c_ (J kg<sup>−1 ◦</sup> C<sup>−1</sup> ). Subscript _l_ denotes a property of the water, _θ_ (-) is porosity, and _Vw_ (m s<sup>−1</sup> ) is the pore water velocity in the _x_ direction. The thermal diffusivity, _D_ , depends on the thermal conductivity, _K_ (W m<sup>−1</sup> ◦C<sup>−1</sup> ) and energy density: 

The ratio ( _ρc_ ) _l/ρc_ in Eq. (1) accounts for water as the heat carrier during advection. It is the reciprocal of the thermal retardation coefficient, _R_ , given by Bakker et al. (2015), i.e., 1 _/R_ = ( _ρc_ ) _l/ρc_ . 

The analytical moving instantaneous line source (MILS) solution of Eq. (1), also known as the Hantush-Jacob solution, was introduced by Carslaw and Jaeger (1959) and then later adapted by Zubair and Chaudhry (1996) to solve the advection – conduction equation. It has been re-examined by others for the problem of groundwater flow (Ren et al., 2000; Bakker et al., 2015). The MILS model assumes an infinitely long constant heat source with strength _Q_ (W m<sup>−1</sup> ) at the origin beginning at time _t_ 0 (s). It describes how temperature changes at different locations ( _x, y_ ) and times _t_ (s): 

Where _W_ (⋅) is the Hantush Well function defined: 

##### _3.4. Measuring thermal properties_ 

Accurate thermal property measurements of the aquifer material from the site were obtained to improve the reliability of subsequent analysis of A-DTS results. While Banks et al. (2022) used estimated thermal properties from the literature, a sensitivity analysis highlighted the importance of accurately defining the bulk thermal conductivity and porosity. In this study, a TEMPOS Thermal Properties Analyser (METER Group Inc., 2018) was used to measure the thermal properties of the finer drill core material that was retrieved from the upper 10 m of drillhole S38 in the braidplain gravels (Fig. 1c). The thermal conductivity and resistivity was measured under both saturated conditions using the TR-3 probe and the SH-3 probe to measure diffusivity and volumetric specific heat capacity and has an accuracy of 10 % (METER Group Inc., 2018). Each unconsolidated sediment sample was tested three times, with the thermal analyser probe reinserted prior to each test. The thermal conductivity values were corrected for water, assuming that all pores were entirely saturated. It is essential to understand the thermal properties of the material surrounding the cable 

The A-DTS temperature data is processed using the MILS solution to estimate the _q_ and _K_ along the entire cable. Parameter estimates are obtained by fitting the MILS model to A-DTS temperature data using the curve-fit function from the scipy.optimize library, which returns a locally optimal least-squares fit function, while allowing us to constrain physical quantities to be non-negative (Virtanen et al., 2020). 

To remove observed linear trends in the long-term temperature signal, in addition to the MILS model, an additional fitting parameter has been introduced, _dT/dt_ , modifying the MILS temperature model as: 

Where _t_ 0 is the time at the beginning of the heat pulse. 

The ‘skin effect’ caused by the heat transfer to the cable material is discussed in detail by Del Val et al. (2021) and Simon et al. (2021). This is initially dominated by the skin effect and conduction, followed by advection dominant heat transfer processes. The inflection point between the conduction dominant and advection dominant heat transfer 

5 

_Journal of Hydrology 633 (2024) 130877_ 

_A.J. Sai Louie et al._ 

phases can be used to calculate the velocity using the MILS model (Simon et al., 2021). The ‘skin effect’ (Δ _Tsk_ ) was defined by Del Val et al. (2021) and described by Simon et al. (2021) and denotes the rise in temperature resulting from low thermal conductivity between the energy source and the surrounding porous media around the cable. The MILS model, Eq. (4), is used to estimate thermal conductivity and specific discharge along the A-DTS cable by finding the best fit solution to cable temperature data recorded at the 0.25 m sampling intervals. The analytical solution was also refitted for each of the successive twelve heat pulses from the A-DTS surveys. The model was designed to use the first survey as a reference to estimate independent _K_ and _D_ values at all locations along the length of the cable, and then these values were fixed for the subsequent eleven surveys to identify any changes in or temperature. The assumption is that the thermal properties, _K_ and _D_ , remain constant between surveys. Therefore, any differences observed between surveys are assumed to be due to changes in the specific discharge. 

##### **4. Results** 

##### _4.1. Surface water and groundwater time series_ 

During the 24-hour A-DTS experiment, the river discharge and groundwater level remained relatively stable. The river stage height at the Whitecliffs rated flow site ranged from 0.297 to 0.309 m (4 % variation during the experiment period) with an accuracy of 8 %. The discharge ranged from 4.02 to 4.29 m<sup>3</sup> s<sup>−1</sup> (5 % variation during the experiment period) with an accuracy of 10 %. In the shallow braidplain gravels, specifically piezometers S04, S06 and S08, the groundwater levels remained stable, with less than 0.006 m change occurring over this period (Fig. 4b). This consistency in groundwater levels reflects the relatively stable conditions observed in the river, as they are highly interconnected. At the time of the experiment, the regional groundwater depth was measured at 12.90 m in piezometer Selwyn 35. Groundwater levels one week prior to the experiment, and rainfall are shown in 

Fig. 4a. 

Over the course of the 24-hour experiment on HDD1, the river temperature in the main channel displayed diurnal variation with the temperature above the cable ranging from 8.5<sup>◦</sup> C to 11.0<sup>◦</sup> C, indicating a diurnal range of 2.5<sup>◦</sup> C (Fig. 4d). The lowest temperature was recorded at 07:30, while the maximum temperature occurred at 13:15. Concurrently, the air temperature ranged from 5.0<sup>◦</sup> C to 22.0<sup>◦</sup> C. Notably, a diurnal temperature signal was also observed in the shallow piezometer S08 (Fig. 4c). Conversely, the groundwater temperatures remained mostly constant, apart from S06 and S37, which increased by approximately 0.5<sup>◦</sup> C over the course of 24-hours possibly reflecting the increase in river temperature (Fig. 4d). Groundwater temperature and river temperature one week prior to the experiment provide insight into the baseline conditions prior to the experiment (Fig. 4c). 

##### _4.2. Active-distributed temperature sensing_ 

The A-DTS results provide high temporal resolution data, indicating that there was very little change in temperature responses during the 24hour experiment. Measured temperature increase (i.e. peak heat pulse temperature minus the ambient temperature) from the 24-hour experiment are shown in Fig. 5a, for the section of the cable that is within the saturated zone of the braidplain gravels between 31.65 m and 103.59 m. Within the saturated zone the temperature increases by up to 4.7<sup>◦</sup> C during a heating pulse; both conductive and advective flow processes contribute to heat transfer in the saturated zone. Fig. 5a illustrates the small temporal variation in temperature that occurred during the 24hour experiment. This is evident by the small range in temperatures at each location along the cable, as shown in Fig. 5a. For reference, the raw A-DTS dataset is available online (Sai Louie et al., 2023b). 

The measured temperature at nominal distances along the cable for the duration of the 24-hour experiment is shown in Fig. 5b. The observed changes in temperature are generally consistent across the twelve surveys at any given location along the cable (Fig. 5b). An exception to this 

**Fig. 4.** (a) Groundwater level data from one week prior to the experiment. (b) Groundwater level data for the duration of the 24-hour experiment between 14:00 02/ 09/2022 and 14:00 03/09/2022. (c) Groundwater and river temperature from one week prior to the experiment. (d) Groundwater, river and air temperature for the duration of the experiment. Groundwater level and temperature data is from selected shallow piezometers located close to HDD1. 

6 

_A.J. Sai Louie et al._ 

_Journal of Hydrology 633 (2024) 130877_ 

**Fig. 5.** (a) Measured _ΔT_ for each of the twelve surveys conducted during the 24-hour experiment on HDD1 along the saturated portion of the cable from 31.65 to 103.59 m. (b) A-DTS temperature response during the 24-hour experiment at nominal distances along the cable: 40, 68, 90 and 100 m. The blue line represents the measured river temperature in the true right river channel, and directly above the cable at a distance of approximately 40 m along HDD1. (For interpretation of the references to colour in this figure legend, the reader is referred to the web version of this article.) 

occurs at 40 m along the cable where, over the course of the 24-hour experiment the maximum heat pulse temperatures reached at 40 m along the cable gradually decreased, despite the same amount of power being applied (15 W m<sup>−1</sup> ). For example, during the first heating cycle the temperature reaches 12.7<sup>◦</sup> C whereas during the final heating cycle the temperature only reaches 11.9<sup>◦</sup> C (Fig. 5b). This may suggest a modest increase of the specific flux at this location over the 24-hour period. Alternatively, this could be caused by a lag between the decreasing river temperatures, between 00:00 and 08:30, and the water intercepting the cable at 40 m along the cable, which appears to be an approximately 6-hour delay. 

##### _4.3. Analytical model results_ 

The MILS solution was fitted to each temperature breakthrough curve at 0.25 m spacing along the cable and for each of the twelve A-DTS 

surveys. The main output of this modelling exercise was a series of estimates of specific discharge, varying in time and space. Fig. 6a and 6b presents examples of the fitted data from survey 6, which was conducted in the middle of the 24-hour experiment, running from 00:00 to 02:00 on 03/09/2022, when the temperature contrast between the surface water and groundwater was at its peak. The black dots show the measured change in temperature since the beginning of the heat pulse at 40 m (Fig. 6a) and at 80 m (Fig. 6b) along the cable. The best fitting MILS model is shown in green and the de-noised data are shown by the red dashed line (following the procedure of Ramos et al. (2017)). Once the temperature stabilises, there is a good fit between the measured temperature data and the model. 

The temperature increase observed in the first 600 s is likely due to the skin effect. This is evident from the characteristic bell curve shape of the _dT/dlnt_ shown in the semi-log plots presented in Fig. 6a and 6b. We identified that for longer heating periods, initially there was an 

7 

_Journal of Hydrology 633 (2024) 130877_ 

_A.J. Sai Louie et al._ 

**Fig. 6.** Fitting the MILS solution to the temperature breakthrough data and the thermal response curve for survey 6, which was conducted from 00:00 – 02:00 03/09/ 2022 (a) measured at 40 m along the cable and (b) at 80 m along the cable. 

approximately logarithmic temperature increase, which likely corresponds to the expected conductive heat transfer response. Subsequently, the temperature increase rapidly slows as the effect of groundwater flow stripping the heat begins to dominate. However, at many locations along the cable, the observed temperature did not stabilize at an equilibrium 

value. Instead, a consistent linear trend was observed, either positive or negative. For times greater than 800 s, the heat transfer is advection dominant. The average specific discharge values over the 24-hour experiment period ranged from 3.2 to 3.4 m d<sup>−1</sup> at a nominal distance of 54 m along 

**Fig. 7.** (a) Calculated specific discharge for surveys S1 to S12 at 54 m along the cable conducted over the 24-hour experiment using the Hantush-Jacob solution. (b) Calculated average specific discharge along the saturated length of cable between 31.65 m and 103.59 m for survey S6 from 00:00 to 02:00 03/09/2022. 

8 

_Journal of Hydrology 633 (2024) 130877_ 

_A.J. Sai Louie et al._ 

the cable (Fig. 7a). Error bars showing one standard deviation of variability were obtained from the covariance matrix for the fitted model parameters assuming an error in the temperature measurement of 0.1 ◦C. The small change in magnitude of the calculated specific discharge over the 24-hour period when the river and groundwater were relatively stable demonstrates the reproducibility of A-DTS derived estimates of river loss in braided river systems. Therefore, the level of uncertainty expected from this method equates to 6 % of the derived specific discharge values (Fig. 7a). To calculate the uncertainty, first, the relative error during each survey, at each point along the cable was calculated. Then, this was multiplied by the relevant specific discharge value to calculate the absolute error. 

There was notable spatial variability in the calculated specific discharge beneath the river (Fig. 7b). For survey S6, specific discharge ranged from 3.1 to 5.0 m d<sup>−1</sup> and the lowest specific discharge values occurred between 81.2 m and 94.7 m along the cable, where the cable was beneath the gravel bar (Fig. 7b). Error is shown in grey shading and represents the absolute error. The low error is because of a good fit between the model and the measured temperature data. 

##### _4.4. Thermal properties_ 

The thermal properties of the stony glacial sediment material were measured in the lab on core material taken from the upper 10 m of S38. Based on the average of 24-measurements, this material had a saturated _K_ of 2.47 W m<sup>−1◦</sup> C<sup>−1</sup> . Additional thermal properties that were measured in the lab include specific heat capacity, _c_ of 1.52 kJ kg<sup>−1 ◦</sup> C<sup>−1</sup> and a density, _ρ_ of 1,770 kg m<sup>−3</sup> , which equates to a sediment heat capacity, _ρ_ of 2.69 MJ m<sup>−3◦</sup> C<sup>−1</sup> . 

Thermal conductivity values were also estimated from the 24-hour A-DTS experiment by fitting the MILS solution to invert the thermal conductivity values. The _K_ values estimated from the 24-hour A-DTS experiment ranged from 0.40 to 2.23 W m<sup>−1 ◦</sup> C<sup>−1</sup> (average 1.27 W m<sup>−1</sup> ◦C<sup>−1</sup> ). Although the thermal conductivity estimated from the A-DTS surveys varies along the cable, when refitting an independent value of _K_ for each pulse in the experiment, we observed minimal temporal variation in the values over the 24-hour period. This is expected, because there is no obvious mechanism for thermal conductivity to change over such short time intervals. However, a difficulty with using the MILS solution to estimate _K_ is that the values it returns represent some unknown combination of the thermal conductivity of the cable material, the skin region around the cable and the pristine porous media. The cable that was used is encased in polypropylene, which has a low _K_ of approximately 0.12 W m<sup>−1 ◦</sup> C<sup>−1</sup> (Cengel, 2015) and this would be likely to contribute to the lower inferred _K_ values from the A-DTS experiment compared to those measured on core samples. 

##### **5. Discussion** 

The average specific discharge for the 24-hour experiment within the saturated zone was 3.8 m d<sup>−1</sup> , over a wetted footprint of 72 m (31.6 m to 103.59 m along the cable). This equates to a vertical discharge of 274 m<sup>2</sup> d<sup>−1</sup> (or 274,000 m<sup>3</sup> d<sup>−1</sup> km<sup>−1</sup> ) and a total river infiltration loss of 242,957 m<sup>3</sup> d<sup>−1</sup> across the 888 m long study site. Based on raw data from Banks et al. (2022) using an average specific discharge value of 2.8 m d<sup>−1</sup> from the survey on 24 February 2021 on HDD1, over a wetted footprint of 60 m, results in a vertical discharge through the riverbed (adjacent to the cable for 1 m<sup>3</sup> ) of 168 m<sup>2</sup> d<sup>−1</sup> . For comparison this equates to a total river infiltration loss of 149,184 m<sup>3</sup> d<sup>−1</sup> across the 888 m long study site, which is approximately 38 % less than the river infiltration loss estimated from the 24-hour experiment. The difference in these results likely reflects the seasonal variation in river loss. Di Ciacca et al. (2023) estimated a total river infiltration loss of 21,600 to 56,160 m<sup>3</sup> d<sup>−1</sup> km<sup>−1</sup> for the period March 2020 to May 2021 which is about five times smaller than the calculated river loss derived from the A-DTS survey conducted in September 2022. Arguably, the satellite 

photograph interpretation method used by Di Ciacca et al. (2023) only captures vertical fluxes whereas the A-DTS cable intercepts both vertical and lateral fluxes. This variation could also be explained by seasonal variations in groundwater recharge as the period of March 2020 to May 2021 was a period of low streamflow conditions. 

The measured temperatures along the cable as well as the temperature difference for the duration of the experiment provide insight into the spatial variability of river loss. Notably, certain sections of the cable exhibit relatively low temperature changes during cable heating. These sections occur between 39 m and 52 m, and again between 80 m and 95 m, corresponding to likely river loss from the true right and true left river channels above the cable. In these locations, we hypothesize that advective heat stripping from the cable is greater. Additionally, there is a clear temperature anomaly around 68 m along the cable where groundwater flow is particularly effective at stripping away heat from the cable. The cable at this location is situated beneath the gravel bar between the two channels. Possible causes for this temperature anomaly could be erosion of the sediments around the cable in this location or the cable is transiting a paleochannel. Banks et al. (2022) also noted an abrupt temperature change at this location. 

To investigate the repeatability of measuring specific discharge at each location along the cable, the relative error inherent to each measurement location along the cable has been assessed. This evaluation across the multiple surveys proved that the spatial variability in _q_ significantly exceeds the measurement error across the cable. The average relative error of _q_ was calculated as 6.0 % and 6.1 % for an _r_ = 0.0018 m and _r_ = 0.0007 m, respectively, as shown in Fig. 8a. This indicates that relative error is stable and independent, regardless of _r_ Therefore, the A-DTS methodology has sufficient spatial sensitivity to reliably quantify changes in specific discharge. Noteworthily this, the true uncertainty from repeated A-DTS surveys appears to be lower than the associated uncertainty for a single A-DTS survey. For instance, there is a lower accuracy of _q_ derived from a single A-DTS survey, as presented in Fig. 8b with a level of uncertainty of up to 0.44 m d<sup>−1</sup> for survey S6. Conversely, the level of precision from the twelve repeated surveys within the 24-hour experiment have an absolute error of 0.09 m d<sup>−1</sup> , as presented in Fig. 8b. This suggests that there is a decreased level of uncertainty of _q_ associated with the repeated A-DTS surveys. 

Some spatial variability in specific discharge between all twelve surveys was observed. The minimum range in specific discharge at the same location for all surveys was 0.2 m d<sup>−1</sup> at 49.9 m along the cable and the maximum range was 1.6 m d<sup>−1</sup> at 61.6 m along the cable. Interestingly, both locations are below the true right channel, which may be associated with the river geomorphology and heterogeneous nature of the shallow braidplain gravels. The standard deviation of the calculated specific discharge for each location along the saturated portion of the cable ranges from 0.06 to 0.44 m d<sup>−1</sup> . This suggests that there is some change in the specific discharge at each point along the cable, this could be caused by the heterogeneity of sediments surrounding the cable. The median values of specific discharge range from 3.5 to 4.0 m d<sup>−1</sup> across the saturated portion only, between 31.65 m and 103.59 m along the cable (Fig. 9). The advection dominant process clearly occurs after 800 s of heating. Similar to Simon et al., (2021), this temperature stabilization time equates to an estimated groundwater flux of 3 to 4 m d<sup>−1</sup> and further supports the field survey results. 

The probability density of specific discharge estimates is visualised using violin plots shown in Fig. 9, which display the distribution characteristics across the twelve surveys. The violin plots show a unimodal distribution with a single dominant peak in the specific discharge values, indicating consistency in the measurements across the twelve surveys of the 24-hour experiment (Fig. 9). The specific discharge distribution exhibits a slight negative skewness, indicating a tendency for lower discharge values. The presence of outliers with lower _q_ values (but within the saturated zone) are possibly areas along the cable where the sediments surrounding the cable are packed differently. 

Understanding the initial skin effect of the fibre optic cable on the 

9 

_A.J. Sai Louie et al._ 

_Journal of Hydrology 633 (2024) 130877_ 

**Fig. 8.** (a) Calculated relative error along the cable, with a varied radius of 0.0007 m and 0.0018 m. (b) Calculated average specific discharge along the saturated length of cable between 31.65 m and 103.59 m for all twelve surveys is shown in blue, with blue shading representing standard error. Calculated specific discharge for survey S6 from 00:00 to 02:00 03/09/2022 is shown in orange dashed line, with orange shading representing the calculated absolute error along the cable associated with this survey. (For interpretation of the references to colour in this figure legend, the reader is referred to the web version of this article.) 

heat transfer processes is important when interpreting the initial temperature increase measured using hybrid fibre optic cable arrangements. It is not possible to quantify the skin effect in this field setting, due to the transfer of noise related error and the unknown impact of our specified cable geometry. However, it is acknowledged that the skin effect will have some effect on the initial temperature evolution. Del Val et al. (2021) and Simon et al. (2021) found the initial stage of the thermal response where temperature conduction is dominated by the skin effect of the cable to last around 110 s, using a cable with a 3.8 mm diameter. Given the cable we used had a different geometry and a greater diameter, we are unable to quantify this. However, this does not affect our objective which is to prove reproducibility of the A-DTS installation to measure small changes in specific discharge, which has been achieved demonstrating the repeatability of A-DTS derived estimates of river loss. 

It was noted that at many locations along the cable, the observed temperature did not stabilise at an equilibrium value. Instead, a consistent linear trend occurred, either positive or negative. The stabilised temperature drift could be measuring a rate of change of specific 

discharge which in turn controls the long-term stable temperature in the MILS model. This was previously explored by Simon et al. (2023b) using sandbox laboratory experiments; however, this is the first time that this has been observed in a field setting. Alternatively, the temperature drift might be caused by changes in the background river temperature. 

It is important to note that the cable is measuring groundwater flux in the braidplain gravels beneath the riverbed. This could represent, to varying degrees, recharge from the river to the gravels, flow within the gravels with no exchange or discharge from the gravels to the river. Additionally, the derived specific discharge values from the MILS model are assumed to be one-dimensional, in the vertical direction perpendicular to the cable direction. However, the actual subsurface SW–GW interactions beneath braided rivers are likely more complex. The derived fluxes appear to follow bathymetry, indicating that bathymetry plays a key role in groundwater flow beneath the riverbed. For example, the northeast end of HDD1 the cable is located in the inside bend of the river and is potentially intercepting parafluvial flow which is discharging to the river. 

10 

_A.J. Sai Louie et al._ 

_Journal of Hydrology 633 (2024) 130877_ 

**Fig. 9.** Violin plot showing the probability distribution of specific discharge variability for the twelve surveys (S1 – S12). The thick grey bar represents the interquartile range and the white dot represents the median value. 

A sensitivity analysis, presented in Table 1, was conducted using the MILS model by testing a range of credible parameter values to identify suitable ranges. The analysis focused on survey S6, with variations in the parameters _K_ and _r_ . The complex cable geometry compromises a key assumption of the MILS model so that, although a good fit to the data can generally be obtained, an effective _r_ value must be assumed in doing so and this may not correspond to the measured _r_ value. There is some ambiguity in which value to select for _r_ , hence three values of _r_ were examined: the measured _r_ , a high _r_ value used by Banks et al. (2022), and an optimal _r_ value determined from this analysis (0.0018 m). Additionally, _K_ was fixed at various values (ranging from 0.56 to 2.43 W m<sup>−1</sup> ◦C<sup>−1</sup> ) or optionally allowed to vary during the model fitting procedure. It was found that _K_ remained relatively consistent between surveys. Therefore, as discussed in Section 3.5, _K_ was estimated from the first survey, and then fixed at this value for the remainder of the surveys to assess the variability of _q_ . Based on the results, the specific discharge values are relatively stable; however, there is some uncertainty in the 

**Table 1** 

Sensitivity analysis of selected parameters tested in the MILS model for the sixth survey conducted at 00:00 – 02:00 on 03/09/2023. 

|Setting|_r_(m)|_K_(W m<sup>−1 </sup><br>◦C<sup>−1</sup>)<br>average<br>(range)|_q_(m d<sup>−1</sup>)<br>average (range)|
|---|---|---|---|
|Base case|0.0018|1.33 (0.40–<br>1.89)*|3.8 (1.3–5.1)|
|Measured_r_|0.0007|1.32 (0.51–<br>1.87)*|1.5 (1.1–2.0)|
|Moderate_K_|0.0018|0.90|3.0 (2.5E-13–<br>3.9)|
|Measured_K_, measured_r_|0.0007|2.38|2.4 (1.3–5.1)|
|Measured_K_, base_r_|0.0018|2.38|6.3 (3.3–13.1)|
|Measured_K_,Banks et al (2022)_r_|0.003|2.38|10.4 (5.5–21.8)|
|Banks et al. (2022)_r_|0.003|1.32 (0.51–<br>1.86)*|0.6 (0.5–0.8)|
|Banks et al. (2022)_K_|0.003|0.56|18.1 (1.5E-13–<br>43.0)|
|Banks et al. (2022)raw data,<br>updated parameters|0.0018|0.49 (0.38–<br>2.23)*|3.0 (2.2E-8–<br>3.3)|

_*K_ estimated from the MILS model. Note _K_ estimates inverted from the model are compromised by the presence of cable material and are therefore not entirely representative of the surrounding porous material. See Section 4.4 for further explanation. 

absolute value of _q_ because of the uncertainty in the appropriate value to use for _r_ . 

Processing the 24-hour A-DTS experiment data with various _r_ and _K_ values, the calculated values of _q_ vary by about one order of magnitude. The expected level of uncertainty from this method (6 %) using this particular A-DTS installation could be reduced in future. One possible approach could involve using sand tank experiments where _q_ can be controlled, to determine an optimal value of _r_ . The unknown nature of _r_ has implications for inverted _q_ in an absolute sense. Nevertheless, given the main objective of gauging _q_ fluctuations in a relative capacity to comprehend temporal dynamics, the uncertainty is acceptable and does not impact the conclusion. Furthermore, future investigations, oriented towards evaluating seasonal dynamics of _q_ from a relative perspective remain feasible. 

In previous studies, A-DTS has been used to obtain spatially continuous temperature profiles over large distances, providing insights into various phenomena, notably SW–GW interaction. Despite its evident potential, previous field installations employing A-DTS surveys such as Banks et al., 2022; Del Val et al., 2021; Simon et al., 2021 have been limited to a single heat pulse survey. Consequently, only fluxes for a discrete period were derived. Simon et al. (2023b) recently proved that A-DTS is efficient in quantifying the temporal variations of groundwater fluxes with low uncertainties, based on sandbox experiments and numerical simulations. This is the first study of its kind to use A-DTS to conduct multiple, successive heat pulses to demonstrate the reproducibility of A-DTS to quantify groundwater fluxes enabling numerous fluxes to be quantified over extended periods in different hydrological settings. The small change in magnitude of the calculated specific discharge over the 24-hour period when the river and groundwater were relatively stable demonstrates the reproducibility of A-DTS derived estimates of river loss in braided river systems. 

##### **6. Summary** 

This study tested the hypothesis that the A-DTS method deployed in a complex field setting has the required sensitivity to measure small changes in groundwater flux. This method was developed to evaluate if changes in braided river leakage remains constant under stable river stage height and flow conditions. In doing so, this study demonstrates the reproducibility of groundwater flux measurements under similar river flow and stage conditions using the A-DTS method in a complex field setting. This will allow for subsequent research endeavours 

11 

_Journal of Hydrology 633 (2024) 130877_ 

_A.J. Sai Louie et al._ 

assessing temporal changes in groundwater recharge, to assess seasonality of groundwater recharge from braided river systems. 

Based on the results from the 24-hour experiment, the median groundwater specific discharge values calculated along the cable had a small range of 3.5 to 4.0 m d<sup>−1</sup> across the wetted footprint of the river, indicating relatively stable groundwater recharge during the 24-hour experiment. The absolute error from the twelve repeated surveys was 0.09 m d<sup>−1</sup> , which is within the expected measurement error of the installation the level of uncertainty expected from this method (6 %), demonstrating this method. The findings of this study enable seasonal changes in groundwater recharge from braided rivers to be quantified. 

##### _6.1. Future recommendations_ 

Further work is required to improve the understanding of SW–GW interactions at this site, which will contribute to greater knowledge of subsurface processes in braided rivers. This would include quantifying the lateral river loss component and independent estimates of specific discharge based on hydraulic head and aquifer measurements using the extensive groundwater piezometer network at the study site. Conducting repeat A-DTS surveys under varying hydrological conditions, ideally with concurrent river flow gaugings, would provide complimentary information and a validation method to quantify the seasonal variation of groundwater recharge and how this relates to river stage height conditions. 

Through the experimental design of the study and the data analysis of the A-DTS surveys, uncertainties in the cable material and thermal properties were identified as an important knowledge gap, which has also been identified in other studies by Del Val et al. (2021) and Simon et al. (2021). One important unknown in the data analysis routine is quantifying the skin-effect of different types of cable designs and specifications on heat transfer in a heterogeneous environment. This could be addressed through high-resolution numerical modelling of the cable geometry, its surrounds, and heat flow dynamics. 

##### **CRediT authorship contribution statement** 

**Alice J. Sai Louie:** Conceptualization, Methodology, Software, Validation, Formal analysis, Investigation, Writing – original draft, Visualization. **Leanne K. Morgan:** Writing – review & editing, Supervision. **Eddie W. Banks:** Writing – review & editing, Supervision. **David Dempsey:** Writing – review & editing, Visualization, Supervision, Software, Formal analysis. **Scott Wilson:** Writing – review & editing, Supervision, Funding acquisition, Conceptualization. 

##### **Declaration of competing interest** 

The authors declare the following financial interests/personal relationships which may be considered as potential competing interests: Scott Wilson reports financial support was provided by New Zealand Ministry of Business Innovation and Employment. 

##### **Data availability** 

Data is available from Sai Louie, A.J., Morgan, L.K., Banks, E.W., Dempsey, D., Wilson, S., 2023a. Active-distributed temperature sensing data collected beneath a braided river for quantification of groundwater recharge. Mendeley Data V2. doi: 10.17632/w2kr9m6s5h.2. 

##### **Acknowledgements** 

This study was supported by the New Zealand Ministry of Business Innovation and Employment (MBIE) Subsurface Processes in Braided Rivers Grant LVLX1901. Leanne Morgan is supported by Canterbury Regional Council, New Zealand. 

##### **References** 

|Acworth, R., Rau, G.C., McCallum, A.M., Andersen, M.S., Cuthbert, M.O., 2015.<br>|
|---|
|Understanding connected surface-water/groundwater systems using fourier analysis<br>of daily and sub-daily head fluctuations. Hydrgeol. J. 23 (1), 143–159.|
|l<br>Ashmore, P. (2013). Morphology and dynamics of braided rivers.<br>Bakker, M., Calj´e, R., Schaars, F., van der Made, K.J., de Haas, S., 2015. An active heat<br>tracer experiment to determine groundwater velocities using fiber optic cables<br>installed with direct push equipment. Water Resour. Res. 51 (4), 2760–2772.<br>Banks, E.W., Shanafield, M.A., Cook, P.G., 2014. Induced temperature gradients to<br>examine groundwater flowpaths in open boreholes. Groundwater 52 (6), 943–951.|
|l<br>Banks, E.W., Morgan, L.K., Sai Louie, A.J., Dempsey, D., Wilson, S.R., 2022. Active<br>distributed temperature sensing to assess surface water–groundwater interaction and<br>river loss in braided river systems. J. Hydrol. 615, 128667.|
|<br>Becker, M.W., Georgian, T., Ambrose, H., Siniscalchi, J., Fredrick, K., 2004. Estimating<br>flow and flux of ground water discharge using water temperature and velocity.<br>J. Hydrol. 296 (1–4), 221–233.https://doi.org/10.1016/j.jhydrol.2004.03.025.<br>Brunner, P., Therrien, R., Renard, P., Simmons, C.T., Franssen, H.J.H., 2017. Advances in<br>understanding river-groundwater interactions. Rev. Geophys. 55 (3), 818–854.<br>Burden, R.J., 1984. Chemical zonation in groundwater of the Central Plains, Canterbury.<br>J. Hydrol. (new Zealand) 100–119.|
|Busato, L., Boaga, J., Perri, M.T., Majone, B., Bellin, A., Cassiani, G., 2019.<br>Hydrogeophysical characterization and monitoring of the hyporheic and riparian<br>zones: the Vermigliana Creek case study. Sci. Total Environ. 648, 1105–1120.<br>Carslaw, H.S., Jaeger, J.C., Feshbach, H., 1962. Conduction of heat in solids. Phys. Today<br>15 (11), 74–76.|
|<br>Cengel, Y. A. (2015)._Heat and mass transfer: Fundamentals& applications_(Fifth ed.).<br>Mcgraw Hill Education.|
|Close, M., Matthews, M., Burbery, L., Abraham, P., Scott, D., 2014. Use of radon to<br>characterise surface water recharge to groundwater. Journal of Hydrology (new<br>Zealand) 53 (2), 113–127.|
|Coluccio, K., Morgan, L.K., 2019. A review of methods for measuring groundwater-<br>surface water exchange in braided rivers. Hydrol. Earth Syst. Sci. 23, 4397–4417.<br>https://doi.org/10.5194/hess-23-4397-2019.|
|Coluccio, K. (2018). A comparison of methods for estimating groundwater-surface water<br>interactions in braided rivers.<br>Cook, P.G., 2015. Quantifying river gain and loss at regional scales. J. Hydrol. 531,<br>749–758.|
|Cranswick, R.H., Cook, P.G., 2015. Scales and magnitude of hyporheic, river–aquifer and<br>bank storage exchange fluxes. Hydrol. Process. 29 (14), 3084–3097.|
|l<br>Del Val, L., Carrera, J., Pool, M., Martínez, L., Casanovas, C., Bour, O., Folch, A., 2021.<br>Heat dissipation test with fiber-optic distributed temperature sensing to estimate<br>l|
|i<br>groundwater flux. Water Resour. Res. 57 (3), e2020WR027228.|
|l<br>des Tombe, B. F., Bakker, M., Smits, F., Schaars, F.,&Made, K. J. Estimation of the<br>variation in specific discharge over large depth using distributed temperature<br>sensing (DTS) measurements of the heat pulse response Water Resour. Res. 55 1<br>2019 811 826 10.1029/2018wr024171.|
|Di Ciacca, A., Wilson, S., Kang, J., W¨ohling, T., 2023. Deriving transmission losses in<br>ephemeral rivers using satellite imagery and machine learning. Hydrol. Earth Syst.<br>Sci. 27 (3), 703–722.|
|<br>D¨oll, P., Fiedler, K., 2008. Global-scale modeling of groundwater recharge. Hydrol. Earth<br>Syst. Sci. 12 (3), 863–885.|
|<br>Forsyth, P. J., Barrell, D. J. A.,&Jongens, R. (2008). Geology of the Christchurch area.<br>Gaona, J., Meinikmann, K., Lewandowski, J., 2019. Identification of groundwater<br>exfiltration, interflow discharge, and hyporheic exchange flows by fibre optic<br>distributed temperature sensing supported by electromagnetic induction geophysics.<br>Hydrol. Process. 33 (10), 1390–1402.https://doi.org/10.1002/hyp.13408.|

- Gilmore, T.E., Johnson, M., Korus, J., Mittelstet, A., Briggs, M.A., Zlotnik, V., Corcoran, S., 2019. Streambed flux measurement informed by distributed temperature sensing leads to a significantly different characterization of groundwater discharge. Water 11 (11), 2312. 

- Hicks, D.M., Baynes, E.R.C., Measures, R., Stecca, G., Tunnicliffe, J., Friedrich, H., 2021. Morphodynamic research challenges for braided river environments: lessons from the iconic case of New Zealand. Earth Surf. Proc. Land. 46 (1), 188–204. https://doi. org/10.1002/esp.5014. 

- Kalbus, E., Reinstorf, F., Schirmer, M., 2006. Measuring methods for groundwatersurface water interactions: a revoew. Hydrol. Earth Syst. Sci. 10 (6), 873–887. https://doi.org/10.5194/hess-10-873-2006. 

- Lane, E.W., 1957. _Study of the shape of channels formed by natural streams flowing in erodible material, a_ Colorado. State University Libraries. 

- Larned, S., Hicks, D., Schmidt, J., Davey, A., Dey, K., Scarsbrook, M., Arscott, D., Woods, R., 2008. The Selwyn River of New Zealand: a benchmark system for alluvial plain rivers. River Res. Appl. 24 (1), 1–21. 

- Larned, S., Unwin, M.J., Boustead, N.C., 2015. Ecological dynamics in the riverine aquifers of a gaining and losing river. Freshwater Science 34 (1), 245–262. 

- Le Lay, H., Thomas, Z., Rouault, F., Pichelin, P., Moatar, F., 2019. Characterization of diffuse groundwater inflows into streamwater (part I: spatial and temporal mapping framework based on fiber optic distributed temperature sensing). Water 11 (11), 2389. 

- Leaf, A.T., Hart, D.J., Bahr, J.M., 2012. Active thermal tracer tests for improved hydrostratigraphic characterization. Groundwater 50 (5), 726–735. 

- Lowry, C.S., Walker, J.F., Hunt, R.J., Anderson, M.P., 2007. Identifying spatial variability of groundwater discharge in a wetland stream using a distributed temperature sensor. Water Resour. Res. 43 (10), 10408–10417. 

- Maldaner, C.H., Munn, J.D., Coleman, T.I., Molson, J.W., Parker, B.L., 2019. Groundwater flow quantification in fractured rock boreholes using active distributed 

12 

_Journal of Hydrology 633 (2024) 130877_ 

_A.J. Sai Louie et al._ 

temperature sensing under natural gradient conditions. Water Resour. Res. 55 (4), 3285–3306. 

- Maldaner, C.H., Munn, J.D., Green, B.A., Warner, S.L., Chapman, S.W., Ashton, A., Daubert, L., Parker, B.L., 2021. Quantifying groundwater flow variability in a poorly cemented fractured sandstone aquifer to inform in situ remediation. J. Contam. Hydrol. 103838. 

- McKerchar, A., Schmidt, J., 2007. Decreases in low flows in the lower Selwyn River? Journal of Hydrology (new Zealand) 46 (2), 63–72. 

METER Group Inc. _Tempos_ ; METER Group Inc.: Pullman, WA, USA, 2018. Min, L., Vasilevskiy, P.Y., Wang, P., Pozdniakov, S.P., Yu, J., 2020. Numerical 

- approaches for estimating daily river leakage from arid ephemeral streams. Water 12 (2), 499. 

- Munn, J., Maldaner, C., Coleman, T., Parker, B., 2020. Measuring fracture flow changes in a bedrock aquifer due to open hole and pumped conditions using active distributed temperature sensing. Water Resour. Res. 56 (10), e2020WR027229. 

- Pi´egay, H., Walling, D.E., Landon, N., He, Q., Li´ebault, F., Petiot, R., 2004. Contemporary changes in sediment yield in an alpine mountain basin due to afforestation (the upper drome in France). Catena 55 (2), 183ˆ –212. 

- Pi´egay, H., Grant, G., Nakamura, F., Trustrum, N., 2006. Braided river management: from assessment of river behaviour to improved sustainable development. Braided Rivers: Process, Deposits, Ecology and Management 36, 257–275. 

- Ramos, G., Carrera, J., Gomez, S., Minutti, C., Camacho, R., 2017. A stable computation ´ of log-derivatives from noisy drawdown data. Water Resour. Res. 53 (9), 7904–7916. 

- Rau, G.C., Andersen, M.S., McCallum, A.M., Acworth, R.I., 2010. Analytical methods that use natural heat as a tracer to quantify surface water–groundwater exchange, evaluated using field temperature records. Hydrgeol. J. 18 (5), 1093–1110. 

- Ren, T., Kluitenberg, G., Horton, R., 2000. Determining soil water flux and pore water velocity by a heat pulse technique. Soil Sci. Soc. Am. J. 64 (2), 552–560. 

- Robb, L. (2021). Characterising groundwater-surface water exchange in the WaikirikiriSelwyn River, using radon. 

- Rupp, D.E., Larned, S.T., Arscott, D.B., Schmidt, J., 2008. Reconstruction of a daily flow record along a hydrologically complex alluvial river. J. Hydrol. 359 (1–2), 88–104. https://doi.org/10.1016/j.jhydrol.2008.06.019. 

- Sai Louie, A.J., Morgan, L.K., Banks, E.W., Dempsey, D., Wilson, S., 2023a. Activedistributed temperature sensing data collected beneath a braided river for quantification of groundwater recharge. Mendeley Data V2. https://doi.org/ 10.17632/w2kr9m6s5h.2. 

- Sai Louie, A.J., Morgan, L.M., Banks, E., Dempsey, D., Wilson, S., 2023b. Activedistributed temperature sensing dataset beneath a braided river. Data in Brief 109756. https://doi.org/10.1016/j.dib.2023.109756. 

- Selker, F., Selker, J.S., 2018. Investigating water movement within and near Wells using active point heating and fiber optic distributed temperature sensing. Sensors 18 (4), 1023. 

- Selker, J.S., Thevenaz, L., Huwald, H., Mallet, A., Luxemburg, W., Van De Giesen, N., Stejskal, M., Zeman, J., Westhoff, M., Parlange, M.B., 2006. Distributed fiber-optic temperature sensing for hydrologic systems. Water Resour. Res. 42 (12). 

- Shanafield, M., Cook, P.G., 2014. Transmission losses, infiltration and groundwater recharge through ephemeral and intermittent streambeds: a review of applied methods. J. Hydrol. 511, 518–529. 

- Shanafield, M., Banks, E.W., Arkwright, J.W., Hausner, M.B., 2018. Fiber-optic sensing for environmental applications: where We’ve come from- and what’s possible? Water Resour. Res. https://doi.org/10.1029/2018WR022768. 

- Silixa, 2020. Introduction to distributed temperature sensing. Silixa Ltd. 

- Simon, N., Bour, O., Lavenant, N., Porel, G., Nauleau, B., Pouladi, B., Longuevergne, L., 2020. A comparison of different methods to estimate the effective spatial resolution of FO-DTS measurements achieved during sandbox experiments. Sensors (basel) 20 (2). https://doi.org/10.3390/s20020570. 

- Simon, N., Bour, O., Lavenant, N., Porel, G., Nauleau, B., Pouladi, B., Longuevergne, L., Crave, A., 2021. Numerical and experimental validation of the applicability of active-DTS experiments to estimate thermal conductivity and groundwater flux in porous media. Water Resour. Res. 57 (1) https://doi.org/10.1029/2020wr028078. 

- Simon, N., Bour, O., Faucheux, M., Lavenant, N., Le Lay, H., Fovet, O., Thomas, Z., Longuevergne, L., 2022. Combining passive- and active-DTS measurements to locate and quantify groundwater discharge into streams. Hydrol. Earth Syst. Sci. https:// doi.org/10.5194/hess-2021-293. 

- Simon, N., Bour, O., 2023a. An ADTS toolbox for automatically interpreting active distributed temperature sensing measurements. Groundwater 61 (2), 215–223. 

- Simon, N., Bour, O., Lavenant, N., Porel, G., Nauleau, B., Klepikova, M., 2023b. Monitoring groundwater fluxes variations through active-DTS measurements. J. Hydrol. 129755. 

- Songola, C., 2022. Characterising surface water and groundwater interactions in braided rivers using hydraulics and environmental tracers: the waikirikiri-selwyn river: a thesis submitted in partial fulfilment of the requirements for the degree of master at. Lincoln University Lincoln University]. 

- Stallman, R.W., 1963. Computation of ground-water velocity from temperature data. USGS Water Supply Paper 1544, 36–46. 

- Stallman, R., 1965. Steady one-dimensional fluid flow in a semi-infinite porous medium with sinusoidal surface temperature. J. Geophys. Res. 70 (12), 2821–2827. 

- Suzuki, S., 1960. Percolation measurements based on heat flow through soil with special reference to paddy fields. J. Geophys. Res. 65 (9), 2883–2885. 

- Tockner, K., Paetzold, A., Karaus, U., Claret, C., Zettel, J., 2006. Ecology of braided rivers. Special Publ.-Int. Assoc. Sedimentologists 36, 339. 

- Tyler, S.W., Selker, J.S., Hausner, M.B., Hatch, C.E., Torgersen, T., Thodal, C.E., Schladow, S.G., 2009. Environmental temperature sensing using raman spectra DTS fiber-optic methods. Water Resour. Res. 45 (4). 

- Van De Giesen, N., Steele-Dunne, S.C., Jansen, J., Hoes, O., Hausner, M.B., Tyler, S., Selker, J., 2012. Double-ended calibration of fiber-optic raman spectra distributed temperature sensing data. Sensors 12 (5), 5471–5485. 

- Verhagen, F., Lovett, A., Cameron, S.G., 2022. A review of techniques for investigating groundwater-surface water interaction in New Zealand settings. Journal of Hydrology (new Zealand) 61 (2), 93–111. 

- Vincent, C.N., 2005. Hydrogeology of the upper selwyn catchment. University of Canterbury]. 

- Virtanen, P., Gommers, R., Oliphant, T.E., Haberland, M., Reddy, T., Cournapeau, D., Burovski, E., Peterson, P., Weckesser, W., Bright, J., 2020. SciPy 1.0: fundamental algorithms for scientific computing in python. Nat. Methods 17 (3), 261–272. 

- Watson, A., Kralisch, S., van Rooyen, J., Miller, J., 2021. Quantifying and understanding the source of recharge for alluvial systems in arid environments through the development of a seepage model. J. Hydrol. 601, 126650. 

- Wohling, T., Gosses, M.J., Wilson, S.R., Davidson, P., 2018. Quantifying river- ¨ groundwater interactions of New Zealand’s gravel-bed rivers: the Wairau plain. Groundwater 56 (4), 647–666. 

- Xie, Y., Cook, P.G., Shanafield, M., Simmons, C.T., Zheng, C., 2016. Uncertainty of natural tracer methods for quantifying river–aquifer interaction in a large river. J. Hydrol. 535, 135–147. 

- Zubair, S., Chaudhry, M.A., 1996. Temperature solutions due to time-dependent movingline-heat sources. Heat Mass Transf. 31 (3), 185–189. 

13 

