# Heat Transfer Through the Wairakei‐Tauhara Geothermal System Quantified by Multi‐Channel Data Modeling

**Authors:** Alberto Ardid, Rosalind Archer, Edward Bertrand, Fabian Sepulveda, Pascal Tarits, David Dempsey  
**Published in:** Geophysical Research Letters (2021)  
**DOI (version of record):** https://doi.org/10.1029/2020gl092056  
**This copy:** Published version. Text extracted from the PDF at https://ddempsey.github.io/papers/2021-ardid-heat-transfer-wairakei-tauhara-geothermal/ardid2021-heat-transfer-wairakei.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** Published version, posted under AGU's author self-archiving policy. © 2021 American Geophysical Union. All Rights Reserved. Version of record: https://doi.org/10.1029/2020gl092056  

---


## **RESEARCH LETTER** 10.1029/2020GL092056 

#### **Key Points:** 

- Bayesian joint inversion of magnetotelluric and clay content data to infer the clay cap boundary 

- Modeling of inferred clay cap and well temperature data to estimate clay formation temperatures and avoid misinterpretation of conductor nature 

- Modeling of well temperature data to inferred thermal gradients and heat fluxes through the geothermal system 

#### **Supporting Information:** 

Supporting Information may be found in the online version of this article. 

#### **Correspondence to:** 

A. Ardid, aardids@gmail.com 

#### **Citation:** 

Ardid, A., Archer, R., Bertrand, E., Sepulveda, F., Tarits, P., & Dempsey, D. (2021). Heat transfer through the Wairakei-Tauhara geothermal system quantified by multi-channel data modeling. _Geophysical Research Letters_ , _48_ , e2020GL092056. https://doi. org/10.1029/2020GL092056 

Received 10 DEC 2020 Accepted 30 MAR 2021 

# **Heat Transfer Through the Wairakei-Tauhara Geothermal System Quantified by Multi-Channel Data Modeling** 

### **Alberto Ardid**<sup>**1**</sup> **, Rosalind Archer**<sup>**1**</sup> **, Edward Bertrand**<sup>**2**</sup> **, Fabian Sepulveda**<sup>**3**</sup> **, Pascal Tarits**<sup>**4**</sup> **, and David Dempsey**<sup>**5**</sup> 

1University of Auckland, Auckland, New Zealand, 2GNS Science, Lower Hutt, New Zealand, 3Contact Energy Ltd, Taupō, New Zealand,<sup>4</sup> University of Western Britany, Plouzané, France,<sup>5</sup> University of Canterbury, Christchurch, New Zealand 

**Abstract** To obtain the fullest picture of geothermal systems, it is necessary to integrate different types of data, for example, surface electromagnetic surveys, lithology, geochemistry, and temperature logs. Here, by joint modeling a multichannel data set we quantify the spatial distribution of heat transfer through the hydrothermally altered, impermeable smectite layer that has developed atop the WairakeiTauhara system, New Zealand. Our approach involves first constraining magnetotelluric inversion models with methylene blue analysis (an indicator of conductive clay) and mapping these onto temperature and lithology data from geothermal wells. Then, one-dimensional models are fitted to the temperature data to estimate heat flux variations across the field. As a result, we have been able to map the primary seal that insulates the geothermal reservoir and estimate the heat flow of the system. The approach could be applied in geothermal provinces around the world with implications for sustainable resource management and our understanding of these magmatic systems. 

**Plain Language Summary** In this study, we present a joint modeling study of a rift-hosted geothermal field with the goal of quantifying first-order components of the hydrothermal system: the smectite clay cap, temperature distribution, and heat flux. Our modeling integrates electromagnetic, lithological, and temperature data using 1D models and a stochastic framework that allows uncertainty quantification. A multichannel approach helps avoid misinterpretation with single data streams. 

This study is significant because it quantifies key heat flows within a complex magmatic-volcanichydrothermal province. From a practical perspective, this work can help geothermal resource decision makers decide where to drill new wells or develop better models to optimize sustainable electricity generation. 

## **1. Introduction** 

A geothermal system is a convective groundwater circulation system with three primary components: an underlying heat source, a fluid reservoir with sufficient permeability to support convective heat transport, and an overlying low permeability confining structure that is often formed from hydrothermally altered clays, commonly termed the clay cap (or caprock). Given the clay cap's primary role to separate hot reservoir fluids from cold groundwater at shallow depths, constraining its geometry is a key component to developing conceptual models of geothermal systems that guide exploration, resource estimation, and operational decision making. Although surface hydrothermal features are often associated with geothermal systems, subsurface geothermal reservoirs are obscured and their characterization (and sometimes discovery) relies on multidisciplinary surface exploration to reveal their location, size, and temperature distribution (Cumming, 2009). 

© 2021. American Geophysical Union. All Rights Reserved. 

In electromagnetic geothermal prospecting, shallow conductive clay formations are synonymous with the shallow “conductor.” Magnetotelluric methods (MT) have emerged as the preferred technology for imaging this resistivity structure (Johnston et al., 1992), particularly for identifying drilling targets and improving the conceptual understanding of the deep geothermal system (Bertrand et al., 2015; Heise et al., 2008). 

1 of 10 

ARDID ET AL. 

**Geophysical Research Letters** 

10.1029/2020GL092056 

**Figure 1.** Map of the North Island of New Zealand, with the location of the Taupō Volcanic Zone. The red square shows the Wairakei geothermal field, with the locations of magnetotelluric stations and wells, highlighting those with available lithology and methylene blue data. The background shows an elevation map and the Taupō Lake shoreline. The purple panel shows the DC resistivity map (∼250 m depth; Risk, 1984) with low electrical resistivities (red to orange colors) delineating the inferred clay cap of the Wairakei-Tauhara and neighboring Rotokawa Geothermal Fields. 

Hydrothermal alteration is often used as a geothermometer in geothermal fields; the presence, degree of organization, and transitions between certain clay minerals indicate exposure of the rock to corresponding formation temperatures (Harvey & Brown, 1991) that could reflect either the contemporary temperature distribution, or relict activity. Titration analysis of drill cuttings using Methylene Blue dye (MeB) is a method for estimating shallow conductive clay content (Gunderson et al., 2000) in smectite rich or interstratified illite-smectite formations (collectively referred to here as “smectite”). MeB profiles along well tracks can be used as a proxy for clay cap depth and thickness, and also as an indicator of temperature. 

The Wairakei-Tauhara geothermal field is located on the northeast shore of Lake Taupō in the central Taupō Volcanic Zone (TVZ), New Zealand (Bibby et al., 1995). Wairakei-Tauhara is hosted in a deep, broad depression underlain by faulted greywacke basement and filled by low-density pyroclastic products and sediments (Bignall et al., 2010). The geothermal field reservoir is majorly contained in the permeable Waiora formation that comprises volcanic deposits with interlayered mudstones and sandstones; and the clay cap is known to be formed predominantly in the Huka Falls Formation (HFF), a series of lacustrine sediments with particularly low permeability. Alteration mineralogy at Wairakei increases in rank and intensity with depth with smectite transforming to illite with increasing temperature through a series of progressively more ordered mixed layer illite-smectite structures. Most of the argillic clay alteration occurs in the HFF with some propylitic alteration in the lavas below. The heat output of the Wairakei-Tauhara geothermal system was estimated as ∼530 MW by analysis of chloride fluxes, although large uncertainties are expected using this method (Bibby et al., 1995; Fisher, 1964). 

Here, we present an integrated analysis of MT data, temperature logs, MeB profiles, and lithological information for the Wairakei-Tauhara geothermal field (Figure 1). First, we use joint modeling of MT and MeB data (Ardid et al., 2021) to establish uncertainty intervals for the upper and lower boundaries of the clay cap that vary across the field. Then, we interpolate temperature data across the clay layer to infer clay formation temperatures and gradients. Finally, using a 1D heat and groundwater transport model (Bredehoeft & Papadopulus, 1965), we estimate heat flux through the clay cap and the heat output of the Wairakei-Tauhara geothermal system. 

Integrating these multiple data sets can benefit the understanding of the upper parts of a magmatic hydrothermal system. This approach helps to understand distributions of clay alteration in geothermal fields, how these relate to temperature, and by quantifying uncertainty, appropriate limits on inference. The step 

2 of 10 

ARDID ET AL. 

**Geophysical Research Letters** 

10.1029/2020GL092056 

toward quantifying heat flow through a geothermal system can benefit the understanding of the complex rifting tectonics in geothermal provinces in New Zealand, Iceland, and East Africa. From a practical perspective, an improved view of key hydrological structures and heat flow dynamics can also be used to constrain modeling and management of the geothermal resource. 

## **2. Clay Distribution from MT-MeB Inversion** 

In 2010, an MT survey comprising 250 measurement sites (stations) was undertaken across the Wairakei-Tauhara geothermal field (Sepulveda et al., 2012) (Figure 1). These data were used to generate resistivity inversion models to estimate the depth and thickness of a shallow conductive layer assumed to correspond to hydrothermal clays. The modeling used a Bayesian method (Ardid et al., 2021) that returns an ensemble of 1D three-layer models that are conditioned on the data collected at each station, characterized by posterior distributions over two thicknesses and three resistivity parameters. A prior applied to the middle layer constrains its resistivity to a range typical for hydrothermal conductive clays (1–5 Ω m). Interpolating between the 1D models at each MT site builds a pseudo-3D geometry of the shallow conductivity structure in the geothermal field (Figure 1a). By evaluating a range of models consistent with these data, we quantify our uncertainty in the clay cap geometry and carry this through subsequent analyses. 

The MT inversion was constrained by a structural prior constructed from clay indications contained in 50 MeB profiles from well log data across the field (Figure 1). This prior was imposed on the conductor boundaries but not the resistivity parameters. At each well, an ensemble of square functions is obtained by conditioning on the MeB profile to capture the sharp appearance and disappearance of clay (Ardid et al., 2021). Then, a field-wide MeB prior is constructed by interpolating between ensembles at each well (see supplementary material for details on uncertainty interpolation). Using MeB structural priors reduces the nonuniqueness of the MT inversion and is important for constraining the bottom boundary of the conductor, which can be smeared in common least-structure regularized MT inversion models (Ardid et al., 2021). 

Our MT inversion model results show that for the north and west areas of Wairakei, there is a good correlation between inferred clay layer and the shallow DC resistivity boundary (Figure 2a). An exception is at Pohipi West where the presence of clay is inferred outside the DC resistivity boundary, likely due to relict clays observed at >300 m depth (Sepulveda et al., 2012). However, the largest discrepancy is in the Aratiatia Flats region (Figure 1) where MT reveals a deep electrical conductor outside the conventional Wairakei boundary. The conductor here dips gently east and then plateaus at more than 400 m depth, where it is located the nearby Rotokawa geothermal. 

A 2D east-west section through the north of Wairakei (profile AA′ in Figure 2a) reveals a mushroom-shaped low-resistivity layer inferred as a hydrothermal clay cap (Figure 3a), flattened near the surface in the center of the field and dipping away at the edges. The depth of this clay-layer largely correlates with the HFF, the primary aquiclude, as confirmed by stratigraphy and MeB profiles from four wells (WK124A, WKM14, WKM15, and WK317; Figures 3a and 3b) located in the infield Te Mihi region (Figure 1). The low permeability of the lacustrine sediments encourages the formation of swelling clays at the high temperatures (∼200°C) that occur in the geothermal upflow at Te Mihi (Sepulveda et al., 2012). 

The lowest extent of the clay layer appears to correlate with the top of the Waiora Formation, notwithstanding the larger uncertainty attached to this boundary. Exceptions are at the field margins such as the Aratiatia Flats region east of the upflow, where the clay layer deepens to be hosted in the Wairakei ignimbrite beneath the Waiora. Further east, it shallows toward the Rotokawa geothermal field suggesting a hydrothermal connection between the two fields. However, well data indicate low temperatures (Figure 3b, well WK315B) and the electrical conductor contained within the Wairakei ignimbrite. Ignimbrites under prolonged low-temperature regimes can undergo diagenetic alteration giving rise to electrically conductive networks of clay and zeolite minerals (Bibby et al., 2005). This has been observed in the TVZ and has caused misunderstandings about the nature and genesis of the electrical conductor (Bibby et al., 2005). Thus, consideration of the temperature data alongside MT data suggests that the deep electrical conductor plateau observed at the Aratiatia Flats region (Figure 2a) is likely caused by diagenetic and not hydrothermal alteration. 

3 of 10 

ARDID ET AL. 

**Geophysical Research Letters** 

10.1029/2020GL092056 

**Figure 2.** (a) Scatter circles show the mean 1D inverted depth to the top of the clay cap at the location of magnetotelluric (MT) stations. Crossed circles indicate locations where a shallow electrical conductor (i.e., clay cap) was not imaged by the MT data. Orange lines indicate the boundary of the WairakeiTauhara geothermal field. Black dots indicate wells where methylene blue (MeB) profiles were available. The background shows an elevation map and the Taupō Lake shoreline. (b) and (c) show histograms for infield depths to the top of the conductor (<sup>_z_</sup> 1) and conductor thickness (<sup>_z_</sup> 2) for the inverted MT data. (d) Scatter circles show the temperature at the bottom of the inferred clay cap in well locations, along with the DC resistivity boundary for the Wairakei-Tauhara geothermal field; (e) and (f) show histograms for the temperature samples at the top and the bottom of the conductor from temperature well data ( _T_ 1 and _T_ 2 respectively). Note: ZZ  xxyy indicates the two-sigma distribution (non-Gaussian) where the interval (ZZ + xx, ZZ − yy) contains 95% observations centered at the median ZZ. 

In the outfield west of Wairakei AA′, the electrical conductor is absent (WT169a, Figure 3a) and first appears in Pohipi West (WT006a, Figure 3a). Inspection of temperature and well logs in the nearest well (WK681; Figure 3) suggests no obvious stratigraphic or thermal control on the clay formation occurring in the volcanic alluvium and rhyolite (Figure 3b). Cold temperatures suggest that this is a relict of past geothermal activity (Sepulveda et al., 2012). East of profile AA′ (outfield; Figure 3a), the electrical conductor deepens to well WK315B where clays occur in the Wairakei ignimbrite (Figures 3a and 3b). 

## **3. Thermal Controls on Clay Presence** 

We used temperature profiles from 122 wells across the Wairakei-Tauhara field to investigate thermal constraints on clay formation. Interpolating data from wells close to profile AA′ indicates a modest correlation between infield isotherms and clay presence (Figure 3a). Across the ∼4 km span of the main upflow, between wells WK263 and WK317, the top and bottom clay boundaries correlate respectively with the 100°C and 180–200°C isotherms. On either side of this region, the 180°C isotherms dip sharply, compared to the more-gentle dip of clay presence, inferred from both resistivity and MeB data. So, in upflow high-temperature region, the occurrence of clay (i.e., low electrical resistivity) correlates well with expected smectite. But outside of upflow in low-temperature regions, clay still occurred but due to relict hydrothermal activity or caused by diagenesis in old ignimbrites (as discussed in the previous section). 

We constructed distributions for upper and lower clay boundary temperatures across Wairakei-Tauhara from well temperature logs (supplementary material). Regional temperature trends show the central upflow as the hottest part of the field, with cooling toward and outside the boundary (Figure 2d). Average 

4 of 10 

ARDID ET AL. 

**Geophysical Research Letters** 

10.1029/2020GL092056 

**Figure 3.** (a) Profile A–A′ (Figure 2a), showing the inferred clay cap boundaries derived from 1D magnetotelluric (MT) inversion models, along with estimates of the clay distribution estimated from methylene blue data (MeB) in wells (used as prior distributions for the MT inversion). Temperature isotherms (gray contours) interpolated from wellbore measurements using a cubic spline. Lithology for some of the wells close to the profile is also shown. MT locations and station names are shown as red boxes (top) and well locations and names as blue boxes (bottom) with perpendicular distance to the profile. Interception of the profile with the resistivity boundary is indicated by vertical dashed orange lines to a depth of 300 m. (b) Shown from left to right for seven wells along the profile are stratigraphy, inferred clay distributions from MeB data, inferred clay cap boundaries from the MT inversion, and the well temperature profile. 

temperatures at the top and bottom of clay boundaries are 58°C and 199°C (Figures 2e and 2f), consistent with the expected 50–200°C formation range for smectite and smectite-illite clays (Browne, 1978). Temperatures also corroborate contemporary clay temperatures in geothermal fields in other regions, for example in Iceland (50–220°C; Arnason et al., 2000), Indonesia (∼50–200°C; Gunderson et al., 2000), Philippines (ambient to 230°C; Reyes et al., 1990), Kenya (∼100–220°C; Lagat, 2013), Chile (90–190°C; Maza et al., 2018), and El Salvador (∼90–205°C; Patrier et al., 1996). However, there is also substantial variability in the clay cap boundary temperatures, with a two-sigma median-centered range of ∼20–120°C for the upper boundary and ∼130–250°C for the lower boundary (Figures 2e and 2f). This variability suggests that correlations between clay formation and temperature need to be made cautiously (particularly where clay presence is inferred from geophysics and not confirmed by wells). 

5 of 10 

ARDID ET AL. 

**Geophysical Research Letters** 

10.1029/2020GL092056 

## **4. Geothermal Gradient and Heat Flux through the Clay Cap** 

Using clay cap thicknesses and boundary temperature inferences, we computed effective linear temperature gradients across the field, which had a two-sigma distribution of 476 <sup>175</sup> 336<sup>°C/km (Figures 4a and 4b).</sup> For a typical thermal conductivity of 2.2 W/m/°C, this corresponds to a conductive heat flux density of 

1.05 <sup>0.15</sup> 0.22 W/m<sup>2</sup> , although this rough estimate does not account for material property variations. The conductive heat flux density and the temperature gradient show a similar trend to clay boundary temperatures (Figure 3), with the highest values (∼700°C/km, 1.54 W/m<sup>2</sup> ) in the Te Mihi area (Figure 1) and lowest values (<300°C/km, 0.7 W/m<sup>2</sup> ) in the outfield areas of Pohipi West and Aratiatia Flats. By interpolating between conductive heat fluxes densities calculated at wells with inferred values at the field boundary, we estimated the conductive heat flux for the Wairakei field as ∼153 ± 18 MW. 

We constructed an improved model for vertical heat transfer by also considering advection, which is the heat transported by the upwelling of hot water through the clay cap. In steady state, advection imposes an exponential deviation on the linear conductive temperature gradient (Bredehoeft & Papadopulus, 1965) 

where _β_ is a dimensionless parameter that depends on the specific heat and density of water, _c_ and _ρ_ , respectively, vertical flow velocity,<sup>_v_</sup> _z_ , effective thermal conductivity of the layer, _κ_ , and thickness of the clay layer, _L_ , with upper and lower temperatures _T_ 0 and _TL_ , respectively. This 1D model is appropriate for our system because the clay cap is subparallel to the land surface, and the fluid velocity is expected to be primarily vertical, driven by buoyant upwelling. We note that this approach is only sufficient to infer an average value for _β_ . More sophisticated modeling could subdivide the clay cap into multiple layers and spatial structure of _β,_ although this could result in model nonuniqueness. 

Fitting an analytical model of this form to each well's temperature data in the inferred clay depth range (supplementary material), we estimated the vertical conductive plus advective heat flux density through this unit. Across the field, the distribution of vertical heat fluxes densities through the clay cap was ∼2.15  1.3<sup>5.9 W/m2 (Figure4c), resulting in a total estimated conductive plus advective heat flow for the field of</sup> 380 ± 21 MW (Figure 4e). The largest heat flow contribution is concentrated around the production zones at Te Mihi, south of Te Huka, and north of Mt. Tauhara. 

We interpret the total heat flow through the clay cap (conductive plus advective) as a lower bound on the total heat flow of the geothermal system, which historically has proven difficult to quantify (Bibby et al. 1995; Fisher, 1964). Notably, this estimation does not consider heat that escapes the reservoir via lateral outflows below the clay cap or through localized high-permeability pathways, whose thermal signature has not been sampled by nearby wells. These pathways that may feed localized surface features like geysers or mud pools could represent substantial heat flow (Hunt et al., 2009). Previous estimates of the Wairakei-Tauhara heat output (∼530 MW; Bibby et al., 1995) based on geochemical considerations are about 40% higher than ours. However, high uncertainties are expected for chlorate ratio methods estimated on the order of ∼25%, where the overall accuracy is difficult to judge (Bibby et al., 1995). On the other hand, our method has several advantages over prior estimates in that it directly utilizes observations of wellbore temperatures and geometrical constraints on the clay cap from MT and MeB data. Many well-characterized fields have temperature and MT data, so a similar method can be applied. Nevertheless, during the early exploration phase geochemistry-based methods may be preferred until MT and temperature data are available. 

In estimating heat flow using the exponential model, we have assumed that the temperature distribution within the clay cap is similar to the steady-state temperature distribution prior to the development of the geothermal system that began in the 1950s. These activities include extraction and reinjection of fluids from the main reservoir, which can disturb the flow field and encourage cold water inflows. Given the ∼60 years of history of energy production at Wairakei, some perturbation of the natural state temperature distribution is expected, particularly in the reservoir beneath the clay cap. We estimated the extent to which temperature disturbances above or below the clay cap would propagate into this layer by 

6 of 10 

ARDID ET AL. 

**Geophysical Research Letters** 

10.1029/2020GL092056 

7 of 10 

ARDID ET AL. 

**Geophysical Research Letters** 

10.1029/2020GL092056 

conduction alone. The thermal diffusion length scale is commonly given as _L_   , where _α_ is thermal diffusivity (10  6 m<sup>2</sup> /s for most rocks) and _τ_ is the duration of temperature disturbance (up to 60 years of production). A penetration length scale of ∼43 m is obtained. In other words, temperatures at the bottom boundary of the clay cap, if disturbed by Wairakei production activities that encourage cold water inflows, will only have been disturbed in the first 43 m. This is only ∼14% of the average 316 m clay layer thickness and is thus unlikely to have a first-order influence on temperature profiles and heat fluxes derived from them. From the _β_ distribution calculated from (1) at wells, we were able to roughly estimated the upward fluid velocity through the clay cap to a value of ∼53 <sup>175</sup> 49<sup>mm/year (Figure 4d), reflecting the</sup> low-permeability character of the clay cap. 

## **5. Discussion** 

The methodologies introduced help understand clay alteration distributions in geothermal fields, how these relate to temperature, and by quantifying uncertainty, appropriate limits on inference. From a practical perspective, an improved view of key hydrological structures and heat flow dynamics can also constrain the modeling and management of the geothermal resource. For example, mapping well logs (temperature and lithology data) into the MT-MeB inferred clay cap allowed us to differentiate contemporary from relict clays and diagenetic alteration. Misinterpretation of the conductor nature could lead to unproductive wells (∼10 M USD drilled well that encounters dry and low-temperature conditions), which have significant implications for the large upfront capital cost and long return on investment for geothermal. 

Quantifying heat flow through geothermal systems can help understand the upper crustal magmatism that drives them (e.g., Flóvenz & Saemundsson, 1993; Rowland et al., 2010). For example, the estimated heat flux average of 2.5 W/m<sup>2</sup> (ranging from 1 to 7 W/m<sup>2</sup> ) focused through the field is assumed to be balanced at 6–8 km depth by a much broader heat sweep at the convection cell base (Wooding, 1978). Combined with catchment estimates four to seven times larger in area than the geothermal fields themselves (Dempsey et al., 2012), this corresponds to heat extraction from buried magma reservoirs between 0.3 and 0.6 W/m<sup>2</sup> . Also, regional modeling of coupled magmatic-geothermal systems like the Wairakei-Tauhara-Rotokawa complex is a promising tool for investigating how heat transfer indicates or modulates volcanism (Tramontano et al., 2017). 

Modeling is also used to track the short-term evolution of geothermal reservoirs to optimize electricity generation (e.g., O’Sullivan et al., 2009). Reservoir models are constrained by temperature and pressure measurements at isolated well locations, which leads to an ill-posed calibration problem. However, fieldwide inferences of first-order permeability structures like the clay cap and its heat flux distribution could be used to reduce nonuniqueness and thus improve model derived predictions. In this regard, geophysical surveys are complementary to traditional datasets because they represent a relatively low-cost method to sample large crustal volumes that are not directly sampled by wells. 

Future directions for this research could include other subsurface resource estimation in other fields where drilling is available. For instance, when inferring the geometry of groundwater reservoirs from EM geophysical surveys, priors could be developed from drilling outputs like water content or lithology, or salinity profiles in offshore aquifers. Also, repeated sampling at semipermanent MT stations combined with time-series borehole data, could be used to introduce a time dimension to the inversions. This sets the stage for near real-time reservoir monitoring and possibly, short-term predictive modeling. 

**Figure 4.** (a) Red and blue dots show the inferred depth and observed temperature at the top and bottom of the clay cap, respectively. Orange lines connecting the top and bottom dots of the same well show the linear temperature gradient through the inferred clay cap. (b) Histogram showing the distribution of temperature gradients with the median value indicated by the red bar. (c) Posterior samples of heat flux density modeled by a 1D conduction-advection model fit to temperature logs (Equation 1). (d) Posterior samples of upward fluid velocity through the clay cap derived from _β_ estimations (supplemental material, Equation 1). (e) Map of linear temperature gradients described in (a). The background shows the estimated natural state heat flux through the clay cap for the geothermal field interpolated from well samples in (c). 

8 of 10 

ARDID ET AL. 

**Geophysical Research Letters** 

10.1029/2020GL092056 

## **6. Summary** 

We have presented a multidisciplinary analysis of the extent, stratigraphic context, and thermal structure of the hydrothermally altered clay layer in the Wairakei-Tauhara geothermal system, New Zealand. Using an MT inversion constrained by MeB clay indications, we have imaged a 300 m thick conductive layer reflective of the clay cap that tracks the primary aquiclude (HFF) overlying a distinct reservoir unit (Waiora Formation). Mapping well temperature and lithology data into this structure allowed us to differentiate contemporary from relict clays and diagenetic alteration. Also, by mapping wells temperature on the conductor revealed by the MT-MeB inversion we confirm a broad range of smectite formation temperatures between 59 <sup>56</sup> 45<sup>°C and 198</sup> 69<sup>48°C. Finally, by applying simple heat transfer models through the clay cap, we estimated</sup> a lower bound of 380 ± 21 MW for the total system heat flow. 

## **Data Availability Statement** 

Analyzed data are owned by a commercial operator, Contact Energy Ltd, and cannot be made publicly available. Requests for access to data, subject to appropriate privacy agreements, should be directed to F. Sepulveda (fabian.sepulveda@contactenergy.co.nz). 

#### **Acknowledgments** 

The authors thanks funding from the MBIE from New Zealand through the Empowering Geothermal grant. 

## **References** 

Ardid, A., Dempsey, D., Bertrand, E., Sepulveda, F., Solon, F., Tarits, P., & Archer, R. (2021). Bayesian magnetotelluric inversion using methylene blue structural priors for imaging shallow conductors in geothermal fields. _Geophysics_ , _86_ , 1–66. https://doi.org/10.1190/ geo2020-0226.1 

- Arnason, K., Karlsdottir, R., Eysteinsson, H., Flovenz, O. G., & Gudlaugsson, S. T. (2000). The resistivity of high-temperature geothermal systems in Iceland. _Proceedings, world geothermal congress 2000_ (pp. 923–928). Kyushu-Tohoku, Japan. 

Bertrand, E. A., Caldwell, T. G., Bannister, S., Soengkono, S., Bennie, S. L., Hill, G. J., & Heise, W. (2015). Using array MT data to image the crustal resistivity structure of the southeastern Taupo Volcanic Zone, New Zealand. _Journal of Volcanology and Geothermal Research_ , _305_ . https://doi.org/10.1016/j.jvolgeores.2015.09.020 

Bibby, H. M., Caldwell, T. G., Davey, F. J., & Webb, T. H. (1995). Geophysical evidence on the structure of the Taupo Volcanic Zone and its hydrothermal circulation. _Journal of Volcanology and Geothermal Research_ , _68_ , 29–58. https://doi.org/10.1016/0377-0273(95)00007-H Bibby, H. M., Risk, G. F., Caldwell, T. G., & Bennie, S. L. (2005). Misinterpretation of electrical resistivity data in geothermal prospecting: A case study from the Taupo volcanic zone. _Proceedings world geothermal congress 2005_ (p. 8). Antalya, Turkey. 

Bignall, G., Milicich, S. D., Ramirez, L. E., Rosenberg, M. D., Kilgour, G. N., & Rae, A. J. (2010). Geology of the Wairakei-Tauhara geothermal system, New Zealand. _Proceedings, world geothermal congress 2010_ (p. 8). Bali, Indonesia. 

Bredehoeft, J. D., & Papaopulos, I. S. (1965). Rates of vertical groundwater movement estimated from the Earth's thermal profile. _Water Resources Research_ , _1_ , 325–328. https://doi.org/10.1029/WR001i002p00325 

Browne, P. R. L. (1978). Hydrothermal alteration in active geothermal fields. _Annual Review of Earth and Planetary Sciences_ , _6_ , 229–248. https://doi.org/10.1146/annurev.ea.06.050178.001305 

Cumming, W. (2009). Geothermal resource conceptual models using surface exploration data. _Proceedings, 34th workshop on geothermal reservoir engineering_ (p. 6). Stanford, CA: Stanford University. 

Dempsey, D. E., Simmons, S. F., Archer, R. A., & Rowland, J. V. (2012). Delineation of catchment zones of geothermal systems in largescale rifted settings. _Journal of Geophysical Research_ , _117_ . https://doi.org/10.1029/2012JB009515 

Fisher, R. G. (1964). Geothermal heat flow at Wairakei during 1958. _New Zealand Journal of Geology and Geophysics_ , _7_ , 172–184. https:// doi.org/10.1080/00288306.1964.10420168 

Flóvenz, Ó. G., & Saemundsson, K. (1993). Heat flow and geothermal processes in Iceland. _Tectonophysics_ , _225_ , 123–138. https://doi. org/10.1016/0040-1951(93)90253-g 

Gunderson, R., Cumming, W., Astra, D., & Harvey, C. (2000). Analysis of smectite clays in geothermal drill cuttings by the methylene blue method: For well site geothermometry and resistivity sounding correlation. In _Proceedings world geothermal congress 2000_ (pp. 1175–1181). Kyushu-Tohoku, Japan. 

- Harvey, C. C., & Brown, P. R. L. (1991). Mixed-layer clay geothermometry in the Wairakei geothermal field, New Zealand. _Clays and Clay Minerals_ , _39_ , 614–621. https://doi.org/10.1346/CCMN.1991.0390607 

Heise, W., Caldwell, T. G., Bibby, H. M., & Bannister, S. C. (2008). Three-dimensional modeling of magnetotelluric data from the Rotokawa geothermal field, Taupō Volcanic Zone, New Zealand. _Geophysical Journal International_ , _173_ , 740–750. https://doi. org/10.1111/j.1365-246X.2008.03737.x 

- Hunt, T. M., Bromley, C .J., Risk, G. F., Sherburn, S., & Soengkono, S. (2009). Geophysical investigations of the Wairakei field. _Geothermics_ , _38_ , 85–97. https://doi.org/10.1016/j.geothermics.2008.11.002 

- Johnston, J. M., Pellerin, L., & Hohmann, G. W. (1992). Evaluation of electromagnetic methods for geothermal reservoir detection. _Geothermal Resources Council Transactions_ , _16_ , 241–245. 

Lagat, J. (2013). Hydrothermal alteration mineralogy in geothermal fields with case examples from Olkaria Domes Geothermal Field, Kenya. Presented at _Short Course VIII on Exploration for Geothermal Resources_ (pp. 1–24). https://orkustofnun.is/gogn/unu-gtp-sc/ UNU-GTP-SC-11-02.pdf 

- Maza, S., Collo, G., Morata, D., Lizana, C., Camus, E., Taussi, M., et al. (2018). Clay mineral associations in the clay cap from the Cerro Pabellón blind geothermal system, Andean Cordillera, Northern Chile. _Clay Minerals_ , _53_ , 117–141. https://doi.org/10.1180/clm.2018.9 

O'Sullivan, M. J., Yeh, A., & Mannington, W. I. (2009), A history of numerical modeling of the Wairakei geothermal field. _Geothermics_ , _38_ , 155–168. https://doi.org/10.1016/j.geothermics.2008.12.001 

9 of 10 

ARDID ET AL. 

**Geophysical Research Letters** 

10.1029/2020GL092056 

- Patrier, P., Papapanagiotou, P., Beaufort, D., Traineau, H., Bril, H., & Rojas, J. (1996). Role of permeability versus temperature in the distribution of the fine (<0.2 μm) clay fraction in the Chipilapa geothermal system (El Salvador, Central America). _Journal of Volcanology and Geothermal Research_ , _72_ . https://doi.org/10.1016/0377-0273(95)00078-X 

- Reyes, A. G. (1990). Petrology of Philippine geothermal systems and the application of alteration mineralogy to their assessment. _Journal of Volcanology and Geothermal Research_ , _43_ . https://doi.org/10.1016/0377-0273(90)90057-M 

- Risk, G. F. (1984). Electrical resistivity survey of the Wairakei geothermal field. _Proceedings, 6th New Zealand geothermal workshop_ (pp. 123–128). 

- Rowland, J. V., Wilson, C. J. N., & Gravley, D. M. (2010). Spatial and temporal variations in magma-assisted rifting, Taupo Volcanic Zone, New Zealand. _Journal of Volcanology and Geothermal Research_ , _190_ , 89–108. https://doi.org/10.1016/j.jvolgeores.2009.05.004 

- Sepulveda, F., Glynn-Morris, T., Mannington, W., Charroy, J., Soengkono, S., & Ussher, G. (2012). Integrated approach to interpretation of magnetotelluric study at Wairakei, New Zealand. _36th Workshop on geothermal reservoir engineering_ (p. 8). Stanford University. 

- Tramontano, S., Gualda, G. A. R., & Ghiorso, M. S. (2017). Internal triggering of volcanic eruptions: Tracking overpressure regimes for giant magma bodies. _Earth and Planetary Science Letters_ , _472_ , 142–151. https://doi.org/10.1016/j.epsl.2017.05.014 

- Wooding, R. A. (1978). Large-scale geothermal field parameters and convection theory. In _Proceedings, 2th workshop geothermal reservoir engineering_ (p. 10). Stanford University. 

10 of 10 

ARDID ET AL. 

