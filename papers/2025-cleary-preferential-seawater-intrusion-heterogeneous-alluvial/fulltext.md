# Preferential seawater intrusion in a heterogeneous alluvial aquifer that extends offshore: Insights from numerical modeling

**Authors:** Connor A. Cleary, Theo S. Sarris, Leanne K. Morgan, David E. Dempsey  
**Published in:** Journal of Hydrology (2025)  
**DOI (version of record):** https://doi.org/10.1016/j.jhydrol.2025.133455  
**This copy:** Published version. Text extracted from the PDF at https://ddempsey.github.io/papers/2025-cleary-preferential-seawater-intrusion-heterogeneous-alluvial/cleary2025-preferential-seawater-intrusion.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** Published version, reproduced under the CC BY 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1016/j.jhydrol.2025.133455  
**Licence:** CC BY 4.0 http://creativecommons.org/licenses/by/4.0/  

---
Journal of Hydrology 661 (2025) 133455 

Contents lists available at ScienceDirect 

# Journal of Hydrology 

journal homepage: www.elsevier.com/locate/jhydrol 

### Research papers 

## Preferential seawater intrusion in a heterogeneous alluvial aquifer that extends offshore: Insights from numerical modeling 

Connor A. Cleary<sup>a,b</sup> ,<sup>∗</sup> , Theo S. Sarris c , Leanne K. Morgan<sup>b</sup> , David E. Dempsey<sup>a</sup> 

a _Department of Civil and Natural Resources Engineering, University of Canterbury, Christchurch, New Zealand_ b _Waterways Centre, School of Earth and Environment, University of Canterbury, Christchurch, New Zealand_ c _Institute of Environmental Science and Research (ESR), Christchurch, New Zealand_ 

#### A R T I C L E I N F O 

#### A B S T R A C T 

This manuscript was handled by Corrado Corradini, Editor-in-Chief, with the assistance of Mohsen Sherif, Associate Editor. 

Dataset link: https://github.com/connorcleary/ confined_hetergeneous_aquifers 

_Keywords:_ Heterogeneity Seawater intrusion Numerical modeling 

Coastal groundwater resources face mounting pressure under sea-level rise and population growth. Under active seawater intrusion (SWI), where the coastal hydraulic gradient slopes landward, onshore groundwater resources will eventually be salinized. This study aims to expand the limited understanding of the influence of alluvial aquifer heterogeneity on the rate and characteristics of active SWI. Using the Central Canterbury Plains aquifer system in New Zealand as an example, we simulated active SWI conditions caused by a decrease in onshore groundwater head. We considered 25 realizations of a 3D heterogeneous confined coastal aquifer that extends offshore. Salinization patterns in the heterogeneous aquifers are influenced by preferential flow through high hydraulic conductivity gravel deposits. Our results indicate that movement of the salt/fresh water interface was up to ten times faster than expected from an analytical model that uses the effective hydraulic conductivity of the aquifer, or in an equivalent homogeneous model that included the effects of dispersion. The rate of interface movement also varied spatially along the width of the aquifer. While similar findings have been observed in models of coastal volcanic and fluvio-deltaic aquifers, the hydraulic conductivity contrasts in the alluvial aquifer models studied here are much lower. Our results indicate that aquifer heterogeneity should be carefully considered when studying SWI in alluvial settings, even when the salt/fresh water interface is located offshore. If the heterogeneity of a coastal alluvial aquifer is overlooked, salinization of onshore groundwater under seawater intrusion may occur considerably earlier than expected. 

##### **1. Introduction** 

Over one billion people living in coastal regions depend on groundwater as a water source (Ferguson and Gleeson, 2012; Zamrsky et al., 2024). Coastal aquifers need to be managed sustainably to ensure the availability of safe drinking water (Velis et al., 2017). Coastal aquifers worldwide face an increasing threat of seawater intrusion (Michael et al., 2017), with many aquifer systems already being impacted (for example in the USA (Barlow and Reichard, 2010), Kiribati (Lal and Datta, 2019), and Malta (Choi et al., 2024)). Alluvial aquifers are no exception (Martínez-Pérez et al., 2022). Active seawater intrusion, where the coastal hydraulic gradient slopes landward, leads to the most aggressive salinization of onshore groundwater (Badaruddin et al., 2017; Werner, 2017). Groundwater transport rates can be strongly influenced by spatial heterogeneity of the hydraulic conductivity of an aquifer (Koltermann and Gorelick, 1996; Renard, 2007). In fluviodeltaic (Yu and Michael, 2019a), and volcanic systems (Geng and Michael, 2020), this heterogeneity has been found to increase seawater intrusion rates under onshore pumping. However, no studies 

have investigated the effect of heterogeneity on active seawater intrusion in alluvial aquifers. This contrasts with the numerous studies of heterogeneity in terrestrial transport problems in alluvial aquifers (Fogg and Zhang, 2016; Cirpka and Valocchi, 2016), for example in the USA (Anderson et al., 1999; Bianchi and Zheng, 2016), and New Zealand Sarris et al. (2023), Moore et al. (2022), Sarris et al. (2022, 2019), Kenny et al. (2025). 

##### _1.1. Heterogeneity effects on coastal groundwater_ 

Heterogeneity is a key factor controlling groundwater-seawater interaction (Werner et al., 2013). Martínez-Pérez et al. (2022) showed that even in a seemingly homogeneous 25 m thick alluvial aquifer, finescale heterogeneity exerts a large influence. They observed seawater intrusion and submarine groundwater discharge both occurring at four different depths divided by fine silt layers. Additionally, saline and fresh free-convective fingering was observed across the silt layers. 

- ∗ Corresponding author at: Department of Civil and Natural Resources Engineering, University of Canterbury, Christchurch, New Zealand. _E-mail address:_ connor.cleary@pg.canterbury.ac.nz (C.A. Cleary). 

https://doi.org/10.1016/j.jhydrol.2025.133455 Received 7 November 2024; Received in revised form 17 April 2025; Accepted 3 May 2025 

Available online 21 May 2025 

0022-1694/© 2025 The Authors. Published by Elsevier B.V. This is an open access article under the CC BY license ( http://creativecommons.org/licenses/by/4.0/ ). 

_C.A. Cleary et al._ 

_Journal of Hydrology 661 (2025) 133455_ 

On a larger scale, aquifer heterogeneity can cause variations in the salt/fresh water interface position in the alongshore direction. This results in some areas of the coastline being more susceptible to salinization (Kim et al., 2003). Similar alongshore variation has also been found to be caused by changes in the thickness of the overlying aquitard (Knight et al., 2019). In aquifer systems where hydraulic conductivity contrasts are greater, such as karstic (Xu et al., 2016), or volcanic systems (Geng and Michael, 2021, 2020; Kreyns et al., 2020), the variation in interface position, submarine groundwater discharge distribution, and seawater intrusion rates is even stronger. Under tidal fluctuations, aquifer heterogeneity can increase the rate of movement of the salt/fresh water interface and widening of the mixing zone (Pool et al., 2015). 

On the regional scale, coastal aquifer system heterogeneity influences the presence and characteristics of offshore fresh groundwater (Post et al., 2013). In systems with stronger contrasts between aquitard and aquifer hydraulic conductivities, terrestrial groundwater flows further offshore (Bakker et al., 2017; Zamrsky et al., 2020). Variations in the connectivity of high hydraulic conductivity lithologies can lead to changes in the offshore extent of freshwater alongshore (Michael et al., 2017), such as in the Canterbury Bight (Micallef et al., 2020; De Biase et al., 2024). The presence of low hydraulic conductivity confining units can lead to the preservation of fresh groundwater under the seafloor following sea level rise in interglacial periods (Kooi et al., 2000), for example in the Canterbury Bight (Thomas et al., 2024), and the US Atlantic Margin (Thomas et al., 2019). Variation in the thickness of these confining units, such as the presence of paleochannels, may result in variation in the amount of freshwater preserved (Van Engelen et al., 2021). Under pumping, connected high hydraulic conductivity and less hydraulically resistive areas of confining units may provide pathways for regional-scale preferential intrusion (Yu and Michael, 2019a,b). 

When heterogeneity is represented in numerical models with the advection–dispersion equation (Abarca et al., 2007; Badaruddin et al., 2017; Werner, 2017), or with hydraulic properties generated with continuous Gaussian geostatistical methods (Pool et al., 2015; Kerrou and Renard, 2010), the salt/fresh water interface is widened and rates of seawater intrusion are greater. However, these approaches cannot reproduce more complex coastal groundwater conditions caused by preferential flow (Michael et al., 2016; Geng and Michael, 2021), and non-Fickian transport (Lu et al., 2009). 

##### _1.2. Groundwater flow and transport in alluvial aquifers_ 

Connected networks of high hydraulic conductivity facies, such as open framework gravel deposits (OFGDs), lead to preferential groundwater flow and transport in alluvial aquifers (Pirot et al., 2015a; Burbery et al., 2018; Anderson et al., 1999). While individual deposits may only exist on the 1 m to 10 m scale, clustering of these elements can lead to connected flow paths on the 100 m to 1 km scale (for example in New Zealand (Sarris et al., 2023; Dann et al., 2009), in Italy (Bersezio et al., 1999; Zappa et al., 2006), and in the USA (Fogg et al., 2000)), which is of interest to coastal groundwater management (Werner et al., 2013). 

Conservative tracer-testing on the 100 m scale of an alluvial aquifer system in New Zealand found significant immobile water, which was attributed to aquifer heterogeneity (Pang and Close, 1999). On a similar scale, extensive observations at the Macrodispersion Experiment site have characterized a contaminant plume in an alluvial aquifer that featured a long, low-concentration front and a heavy tail, which suggests that most of the flow and transport is through connected high hydraulic conductivity pathways (Zheng et al., 2011). When the advection–dispersion equation is applied in groundwater modeling, dispersivity coefficients represent the mechanical mixing of groundwater at a scale length smaller than the grid size (Kitanidis, 2015). This formulation may not be able to represent transport processes in an 

alluvial aquifer accurately and the dual porosity (kinetic mass transfer) model may be a more suitable formulation (Bianchi and Zheng, 2016; Baratelli et al., 2011, 2014). 

There is limited understanding of the effects of alluvial aquifer heterogeneity on seawater intrusion, despite the presence of preferential flow and transport in alluvial aquifers, and the significant impacts of heterogeneity on seawater intrusion in other settings. This study aims to quantify the effects of heterogeneity on the rate and characteristics of active seawater intrusion in alluvial aquifers. This is achieved using numerical modeling of the Central Canterbury Plains aquifer system, New Zealand, using an explicit geostatistical representation of the heterogeneity of aquifer hydraulic conductivity. The ability of equivalent homogeneous models – which are often used to simplify analysis in heterogeneous aquifers (Kitanidis, 2015) – to reproduce seawater intrusion behavior in a heterogeneous aquifer is also investigated. Additionally, a brief exploration is carried out on the impact of alluvial aquifer heterogeneity on the effectiveness of coastal groundwater monitoring, a key component of aquifer management (Werner et al., 2013). 

##### **2. Materials and methods** 

##### _2.1. Study area - Central Canterbury Plains_ 

The Central Canterbury Plains aquifer system is located in the South Island of Aotearoa New Zealand. The aquifer system is bounded by the Waimakariri River in the north and the Rakaia River in the south. It extends from the foothills of the Southern Alps in the west to the Pegasus Bay and Canterbury Bight coastlines in the east (Fig. 1). The plains comprise a deep sedimentary basin of glacial outwash gravels in the west and alluvial gravels in the east, which have been reworked by braided rivers. Hydraulic conductivities generally decrease from west to east (Wilson, 1973). The aquifer system supplies water for irrigation across the plains and potable water for the city of Otautahi Christchurch (Rosen and White, 2001; Jenkins, 2018). In the aquifer system, several studies have identified the presence of OFGDs in the gravel aquifers, and have noted preferential flow through connected networks of OFGDs (Dann et al., 2009, 2008; Burbery et al., 2018; Pang et al., 1998; Browne and Naish, 2003). OFGDs make up 1% to 20% of the aquifer material and are up to two orders of magnitude more hydraulically conductive than the surrounding gravel matrix (Dann et al., 2008; Burbery et al., 2018; Sarris et al., 2018). At the coast, interglacial gravels are interlayered with glacial marine sand and silt deposits, forming a confined aquifer system (Browne and Naish, 2003). This confined aquifer system extends offshore, with the two shallowest confined aquifers outcropping at least 30 km offshore (Barnes, 2015). Recharge into the aquifer system is derived from rainfall as well as infiltration from the Waimakariri River (Stewart et al., 2002). The salt/fresh water interface is expected to be some distance offshore (Knight et al., 2018; Talbot et al., 1986). 

A series of groundwater aging studies have shown that groundwater ages near the coast in Christchurch are increasing over time (Stewart, 2012; Stewart and van der Raaij, 2022). In the most extreme instance, the estimated mean residence time at one coastal well has increased from 74 years in 1976 to 1452 years in 2017. This is possibly caused by deep and offshore paleo groundwater being drawn upward and inland due to low coastal heads (Edmunds and Milne, 2001; Condesso De Melo et al., 2001). Historically, groundwater levels in confined aquifers have been as low as 1.5 meters below sea level (Scott and Wilson, 2012). There is no evidence of extensive seawater intrusion, most likely due to the presence of offshore fresh groundwater (Knight et al., 2018). There has been one localized case of SWI into the upper confined aquifer, attributed to the downwards advection of seawater through the confining layer (Scott and Wilson, 2012). This raises questions about the exploitation of offshore fresh groundwaterand the sustainability of groundwater abstraction in the region. As of 2022, the city abstracts around 5 × 10<sup>7</sup> m<sup>3∕</sup><sup>_𝑦𝑒𝑎𝑟_</sup> of a consented 7 _._ 4 × 10<sup>7</sup> m<sup>3∕</sup><sup>_𝑦𝑒𝑎𝑟_</sup> (Stewart and van 

2 

_C.A. Cleary et al._ 

_Journal of Hydrology 661 (2025) 133455_ 

**Fig. 1.** Map of Central Canterbury Plains aquifer system, shaded in red, and relevant locations (Moreau et al., 2019). The blue shading shows the extent of confinement of the onshore aquifer system (Environment Canterbury, 2018). The yellow star shows the center of the area where boreholes were analyzed to develop the geological model (Sarris et al., 2023). The turquoise and orange points show wells that have displayed high salinity and increasing groundwater ages respectively (Stewart and van der Raaij, 2022; Scott and Wilson, 2012). The hypothetical model area is also shown. In the inset, New Zealand is shown with the location of the study area denoted by the black rectangle. The inland boundary of the aquifer system, the Southern Alps is labeled. The red arrow shows the international offshore drilling program borehole where low salinity porewater was discovered (Fulthorpe et al., 2011). (For interpretation of the references to color in this figure legend, the reader is referred to the web version of this article.) 

der Raaij, 2022). The sea level of the Christchurch coastline is expected 

to rise by 0.6 m to 1.2 m in the next 100 years (NZSeaRise, 2023). 

The Central Canterbury Plains is one of several alluvial aquifer systems that are likely to contain offshore fresh groundwaterin NZ (Morgan and Mountjoy, 2022). South of the Central Canterbury Plains, the Ashburton-Rangitata Plains and adjacent aquifer systems have been found to contain OFG, based on porewater salinity of an offshore borehole (Fig. 1), geophysical investigation and modeling (Micallef et al., 2020; Fulthorpe et al., 2011). The presence of offshore fresh groundwater means that it may take a long time for the salt/fresh water interface to reach the shoreline under active SWI. However, this does not mean that salinization of onshore groundwater is impossible, and the vulnerability to SWI still needs to be understood (Knight et al., 2018). 

Under the cumulative effects of sea level rise and groundwater abstraction, and evidence of seawater intrusion, the Central Canterbury Plains aquifers are vulnerable to salinization. To ensure the sustainability of the aquifers as a potable water source, it is necessary to understand this vulnerability. As heterogeneity is a key factor underlying groundwater transport rates in alluvial aquifers, quantifying the influence of heterogeneity on SWI is imperative. Hence, in this study, we explore the effect of the heterogeneity of the Central Canterbury Plains on seawater intrusion using groundwater modeling. Sections 2.2–2.6 describe the modeling workflow used to study seawater intrusion in a heterogeneous alluvial aquifer (Fig. 2). 

##### _2.2. Groundwater model structure and parameterization_ 

Because the salt/fresh water interface in the Central Canterbury Plains aquifer system is located offshore, an aquifer that extends under the seafloor is modeled. Although the aquifer system is multilayered, due to the computational demands of modeling both three-dimensional and heterogeneous aquifers, including buoyancy effects and stochasticity, the model is reduced to a truncated confined coastal aquifer, overlain by an aquitard (Fig. 3a). The modeled aquifer extends 4 km offshore and 400 m onshore, which is smaller than the 30 km minimum length of offshore aquifers in the system. Groundwater flow and transport are modeled in this aquifer using MODFLOW6, as described in Section 2.4. 

The modeled aquifer thickness _𝐻_ is 20 m and the aquitard thickness _𝐵_ is 20 m, which are representative of the multilayered system in 

Christchurch (Barnes, 2015; Brown et al., 1988). The modeled aquitard is homogeneous and anisotropic, with a vertical hydraulic conductivity _𝐾𝑏_<sup>_𝑉_of1×10−3m/dayandaverticalanisotropyratioof100.</sup> The vertical hydraulic conductivity has been reduced by one order of magnitude from other studies, to avoid freshwater flushing out the entire aquifer (Knight et al., 2019; Bakker et al., 2017). The aquifer is heterogeneous, isotropic in the horizontal direction, but anisotropic at the vertical macro scale (Kenny et al., 2025). The vertical anisotropy is simulated by a transitional probability spatial structure of isotropic and homogeneous hydrofacies at the numerical grid scale. An overview of the generation of heterogeneous aquifer hydraulic conductivity fields is given in Section 2.3, as well as a description of their general properties. 

A constant head boundary condition is used at the onshore model boundary, shown in Fig. 3b, and the offshore boundary is represented with a general head boundary condition (Solórzano-Rivas and Werner, 2018). The constant head condition was chosen for the onshore boundary as it is simpler conceptually than an applied flux or pumping condition, and is easier to relate to coastal groundwater management which is often based on onshore head limits (Knight et al., 2018). As this study’s purpose is to quantify the effect of heterogeneity on the rate of active SWI, this simplification is acceptable. The general head boundary does not allow for downward diffusion through the aquitard, i.e. Jiao et al. (2015), therefore downwards salinization is neglected. This allows for the analysis to focus on horizontal salinization, which is a more significant risk for commonly exploited deep aquifers (Post et al., 2013). The model stages considered, and the values applied to these boundary conditions are described in Section 2.5. 

##### _2.3. Geostatistical representation of aquifer heterogeneity_ 

Heterogeneity is represented through the assignment of different hydraulic conductivities to hydrofacies spatially distributed with geostatistical simulations obtained with a transition probability/Markov chain approach, as implemented in T-PROGS (Sarris et al., 2023; Deutsch and Journel, 2007; Carle, 1999; Moore et al., 2022; Kenny et al., 2025). This approach is used to generate 25 heterogeneous aquifer hydraulic conductivity fields. 

The probabilities of one hydrofacies transitioning to another at a given distance are estimated from lithological descriptions of the Central Canterbury Plains aquifer system. These lithological descriptions 

3 

_C.A. Cleary et al._ 

_Journal of Hydrology 661 (2025) 133455_ 

<!-- Start of picture text -->
Fig. 2. Flowchart describing modeling workflow.<br><!-- End of picture text -->

**Fig. 3.** (a) hydrofacies represented in the model. (b) faces of the model where boundary conditions are applied. The coastline is located at 0 m offshore. 

come from drillers’ logs within a 10 km radius of West Melton (Fig. 1), comprising 1963 useable borehole records (Sarris et al., 2023). While the vertical transition probabilities between facies can be robustly obtained from the lithological descriptions,the density of data in the horizontal direction is lower. This means the characterization of aquifer heterogeneity in the horizontal direction may be limited with the transition probability approach, unless extra geological information, such as from outcrops, is incorporated (dell’Arciprete et al., 2012). Unfortunately, geological information from outcrops is not available for the study site. However, given the large number of boreholes in a relatively small area, the estimate of horizontal transition probabilities is reasonably reliable (Sarris et al., 2023). Indicator methods can represent the connected nature of aquifer heterogeneity, which results in accurate simulation of groundwater flow and transport (Fogg et al., 2000; Renard and Allard, 2013). However, they do not represent the actual depositional structure of alluvial aquifers (Pirot et al., 2015a; Bennett et al., 2017). It should be noted that the source area for the geological data is around 40 km inland from the study site, where aquifers are more permeable than at the coast, and the depositional environment may vary. However, this is the best available data source for the study site at present. 

Three hydrofacies have been considered to reproduce the heterogeneous hydraulic conductivity field. These three hydrofacies are clean gravel, sandy gravel, and clay-bound gravel and sand. Over 60 lithological codes in the borehole logs are categorized under one of these hydrofacies. The decision to use only three hydrofacies is made to reduce uncertainty in the estimation of transition probabilities, while maintaining the resolution of the description of heterogeneity. Clean gravel represents clusters of OFGDs (Sarris et al., 2018). A description of the lithological codes assigned to each hydrofacies is available in Supplementary Table 1. The horizontal hydraulic conductivity of the 

three facies for each realization has been calibrated such that the effective hydraulic conductivity of the heterogeneous aquifer matches the estimate of hydraulic conductivity of the aquifer obtained from pumping tests, so that the overall flux through the domain is reproduced (Paleologos et al., 2000). This leads to the heterogeneous aquifers having an effective horizontal hydraulic conductivity of around 50 m/day, and a vertical hydraulic conductivity of around 4.5 m/day, which were calculated numerically using Darcy’s law for an applied hydraulic gradient and resulting flux (Kenny et al., 2025). Because the model domain is smaller than the aquifer dimensions, the aquifers simulated here have a slightly lower horizontal hydraulic conductivity. The horizontal hydraulic conductivities for the facies are on average 500 m/day for clean gravel, 60 m/day for sandy gravel, and 4 m/day for clay-bound gravel and sand (Kenny et al., 2025). The facies volume fractions are approximately 15% for clean gravel, and 30% for sandy gravel, with clay-bound gravel and sand making up the remaining 55%. The distribution and connection of clean gravel facies which arises from the geostatistical simulation forms preferential flow paths. Further details on the generation of heterogeneous facies distributions can be found in Sarris et al. (2023) (Scheme 3a), and on the assignment of hydraulic conductivity values in Kenny et al. (2025) (Method 1). 

Combining the model structure outlined in Section 2.2 with these heterogeneous aquifer hydraulic conductivity fields results in 25 realizations of a confined aquifer that extends below the seafloor, featuring a heterogeneous aquifer. 

##### _2.4. Variable density groundwater model formulation_ 

Groundwater models were created and analyzed using the Python package Flopy (Bakker et al., 2016). We use the finite difference numerical solver MODFLOW6 to solve the variable density groundwater 

4 

_C.A. Cleary et al._ 

_Journal of Hydrology 661 (2025) 133455_ 

flow equation (Eq. (1)), through the buoyancy package (Langevin et al., 2020). 

where _𝑆𝑠_ [1/m] is the specific storage, _ℎ_ [m] is the hydraulic head. **𝐪** [m/day] is the Darcy flux (Eq. (2)) 

where **𝐊** [m/day] is the hydraulic conductivity, _𝑧_ [m] is the depth from sea-level, and _𝜌_ [kg/m<sup>3</sup> ] is the fluid density. _𝜌_ is a function of the density of freshwater _𝜌𝑓_ [kg/m<sup>3</sup> ] and the salt concentration _𝐶_ [kg/m<sup>3</sup> ]: _𝜌_ = _𝜌𝑓_ + 0 _._ 7143 _𝐶_ . MODFLOW6 is also used to solve the advection–dispersion equation (Eq. (3)), which describes the change in salt concentration with respect to time (Hughes et al., 2017). 

where _𝑛_ [-] is the porosity and _𝐷_ [m<sup>2</sup> /s] is the dispersion coefficient _𝐷_ = **_𝜶_** ⋅ **𝐯** + _𝐷_<sup>∗</sup> . This expression includes the effects of molecular diffusion through the diffusion coefficient _𝐷_<sup>∗</sup> [m<sup>2</sup> /s], and of mechanical dispersion through the dispersivity **_𝜶_** [m], which is used to represent the variations in groundwater velocity on a smaller scale length than the grid size. The dispersivity is a diagonal tensor, meaning that the Cartesian coordinates x, y, and z, which correspond to the offshore, alongshore, and vertical directions, respectively, are assumed as the principal directions of anisotropy of this tensor. In the heterogeneous realizations, _𝛼_ is zero along any direction. In the equivalent advectivedispersive homogeneous models, the values of _𝛼_ along x, y, and z directions, are 100 m, 10 m, and 1 m, respectively (Etheridge and Hanson, 2019; Michael et al., 2016; Micallef et al., 2020). 

The discretization of the model domain is 12.5 m × 12 _._ 5 m × 2 _._ 5 m (X, Y, Z), where X is the offshore dimension, Y is the alongshore dimension, and Z is the vertical dimension. This discretization is very fine for the domain size, and as a result, the time taken to simulate the model stages (Section 3.2) for each realization was up to one month. This is largely to simulate the steady-state conditions, which required 1 × 10<sup>5</sup> times steps with a step size of 1000 days. Therefore only 25 realizations were modeled. The implications of this small sample size are discussed in Section 4.4. 

##### _2.5. Model stages and applied boundary condition values_ 

Flow and transport in the 25 heterogeneous coastal confined aquifer realizations were simulated through two periods. In the first (steadystate) period, a seaward hydraulic gradient is applied until the system reaches a steady state, which simulates a pre-exploitation position of the salt/fresh water interface. In the second (intrusion) period, a landward hydraulic gradient is applied, simulating the exploitation of the aquifer The values of the onshore and offshore heads ( _ℎ𝑜𝑛_ [m] and _ℎ𝑜𝑓𝑓_ [m]) used to apply these gradients are shown in Table 1, as well as the lengths of the two periods. The value of _ℎ𝑜𝑛_ during the steady-state period has been chosen such that the interface is located between the shoreline and the offshore boundary in all the realizations. The value of _ℎ𝑜𝑛_ during the intrusion period has been chosen as an extreme, but plausible, value for the onshore groundwater level which would lead to active seawater intrusion (Knight et al., 2018). At the start of the steady-state period, the salinity in the onshore portions of the aquifers and aquitards is that of freshwater, and in the offshore portion of the aquifers and aquitards is that of seawater. The final head and salinity distribution for the steady state period are used as initial conditions for the intrusion period. 

The conductance _𝐶_ of the general head boundary for each of the cells is set following Solórzano-Rivas and Werner (2018). For aquitard cells on the seafloor, _𝐶_ = 0 _._ 0625 [m<sup>2</sup> /day]. For a given cell _𝑖_ , on the vertical surface where the aquifer is truncated, _𝐶𝑖_ = 2 _._ 5 _𝐾ℎ_<sup>_𝑖_[m2/day],</sup> where _𝐾ℎ_<sup>_𝑖_isthehorizontalhydraulicconductivityofthecell.</sup> 

**Table 1** 

Lengths and boundary conditions values of the two model periods. 

|Period|Length [years]|_ℎ𝑜𝑛_ [m]|_ℎ𝑜𝑓𝑓_ [m]|
|---|---|---|---|
|Steady-state|2_._7 × 10<sup>5</sup>|0.75|0|
|Intrusion|100|−1|0|

##### _2.6. Metrics, equivalent models and analytical solutions_ 

For each realization, we compare the steady-state salt/fresh water interface, and the movement of the interface during the intrusion period. We define the interface as the surface where groundwater exceeds a salinity of 1% of the concentration of seawater. This reflects the concentration at which groundwater may become undrinkable (Ministry Of Health, 2018). We use _𝑥𝑇_ [m] to represent the horizontal distance between the shoreline and most landward point of the interface, for a given distance alongshore. This may not be the actual toe of the interface, as the interfaces simulated here are not always wedge-like. Because _𝑥𝑇_ varies in the alongshore direction, it is useful to also compare the mean and minimum _𝑥𝑇_ for each realization: _𝑥_<sup>_𝑚𝑒𝑎𝑛_</sup> _𝑇_ [m] and _𝑥_<sup>_𝑚𝑖𝑛_</sup> _𝑇_<sup>[m].</sup><sup>_𝑥𝑇_describeshowfaroffshoreoronshorethesalt/freshwater</sup> interface is at a given location along the coast. _𝑥_<sup>_𝑚𝑒𝑎𝑛_</sup> _𝑇_ indicates how close the interface is to the coastline on average. _𝑥_<sup>_𝑚𝑖𝑛_</sup> _𝑇_<sup>representsthepoint</sup> of the interface that is at the greatest risk of causing salinization of onshore groundwater. 

We define the mixing zone as the area of the aquifer where the salinity is between 1% and 99% of the concentration of seawater. We compare the mean mixing zone width _𝑊𝑚𝑒𝑎𝑛_ [m] across the realizations, which is calculated as the average horizontal distance between the most landward point of the mixing zone and the most seaward point of the mixing zone, across the width of the aquifer. _𝑊𝑚𝑒𝑎𝑛_ provides insight into how much mixing between fresh and saline groundwater is caused by aquifer heterogeneity. 

The rate of interface movement during the intrusion period, _𝑑𝑥𝑇_ ∕ _𝑑𝑡_ , is defined as the rate of change of _𝑥𝑇_ . We compare _𝑑𝑥𝑇_ ∕ _𝑑𝑡_ for the heterogeneous realizations and two equivalent homogeneous aquifer models, with and without dispersion. For the case without dispersion (advective), we use analytical solutions. For the case with dispersion (advective-dispersive), we use 2D numerical models. These 2D models follow the same configuration as outlined in Sections 3.1–3.2, excluding the alongshore dimension, with a homogeneous aquifer overlain by a homogeneous aquitard. 

For both the advective and dispersive equivalent models the equivalent hydraulic conductivity, _𝐾𝑎_<sup>_𝑒𝑓𝑓_</sup> [m/day], of each of the realizations was calculated numerically in MODFLOW6 using Darcy’s law. This was achieved by applying a hydraulic gradient across the heterogeneous aquifer domain using a constant head boundary at each of the onshore and offshore ends, solving a groundwater flow model for steady-state conditions, and finding the flux through the domain. 

Two analytical solutions are used for the advective equivalent models. The first is the semi-analytical solution of Bakker et al. (2017), which calculates the steady-state position of the salt/fresh water interface in a confined coastal aquifer for a given onshore head, without dispersion and diffusion (sharp-interface). The second is the expected advective velocity of the interface under a landward hydraulic gradient, which is found by first calculating the equivalent freshwater head at the base of the aquifer where it outcrops to the sea (Knight et al., 2018): 

where _𝜌𝑓_ [m] and _𝜌𝑠_ [m] are the densities of fresh and saline water, and _𝐻_ [m] and _𝐵_ [m] are the thicknesses of the aquifer and aquitard. The driving head _𝛥ℎ_ [m] along this aquifer is then: 

5 

_C.A. Cleary et al._ 

_Journal of Hydrology 661 (2025) 133455_ 

**Fig. 4.** Description of the steady-state salt/fresh water interface. (a) _𝑥𝑇_ across the width of the aquifer for each of the heterogeneous aquifer realizations. (b) relationship between _𝐾𝑎_<sup>_𝑒𝑓𝑓_and</sup><sup>_𝑥_</sup> _𝑇_<sup>.Thecirclesshowthemeanoftheinterfacepositionoverthewidthoftheaquifer,andtheerrorbarsshowthespreadacrossallYpositions.(c)distributionof</sup><sup>_𝑥𝑚𝑒𝑎𝑛_</sup> _𝑇_ for the ensemble. (d) distribution of _𝑊_<sup>_𝑚𝑒𝑎𝑛_</sup> for the ensemble. 

Hence we can define the expected advective velocity _𝑣𝑎𝑑𝑣_ [m/year] of the salt/fresh water interface given an applied driving head as: 

where _𝐿_ [m] is the length of the aquifer. 

water interface intrudes the most at Y = 500 m, where it is around 1000 m more landward than at Y = 1000 m. For realization 5 the plume of saline groundwater has very high salinity, with a concentration of 35 PSU, 500 m behind the front of the plume. For realization 19, the alongshore variation in intrusion is similar. However, the saline groundwater plume is more dispersed, with a concentration of 10 PSU to 20 PSU at Y = 500 m. 

##### **3. Results** 

##### _3.3. Movement of the salt/fresh water interface during the intrusion period_ 

##### _3.1. Steady-state salt/fresh water interface_ 

The steady-state salt/fresh water interface location varies across the realizations. On average, the interface is located around 1500 m offshore (Fig. 4a). In one realization, the interface is very close to the shoreline, coming within 100 m of it at some distances alongshore. For another realization, the interface is located more than 2500 m offshore. The average interface width _𝑊_<sup>_𝑚𝑒𝑎𝑛_</sup> ranges from around 500 m to 2000 m (Fig. 4d). 

Comparing _𝑥𝑇_ for each of the realizations to _𝐾𝑎_<sup>_𝑒𝑓𝑓_</sup> of each of the aquifers shows no clear relationship with the toe position, although the two realizations with the lowest _𝐾𝑎_<sup>_𝑒𝑓𝑓_</sup> have the smallest _𝑥𝑇_ (Fig. 4b). 

##### _3.2. Salinity distributions before and after onshore head decrease_ 

Taken in cross-section, the salinity distributions at steady-state appear to be relatively uniform and generally have a wedge-shaped salt/fresh water interface. On the other hand, the salinity distributions at the end of the intrusion period are highly spatially variable. For example, at steady-state, realizations 5 and 19 have a small saltwater wedge formed in the aquifer, below a depth of 20 m. Contrastingly, realization 25 has a more dispersed steady-state interface. At steadystate, there is some alongshore variability in interface position: for realization 5 the interface is around 800 m further onshore at a distance of 1000 m alongshore (Y = 1000 m) than at 0 m alongshore (Y = 0 m) (Fig. 5a). 

At the end of the intrusion period, this alongshore variation is more pronounced. For example for realization 5 (Fig. 5b), the salt/fresh 

During the intrusion period, the salt/fresh water interface position moved landward for all realizations. The distance of intrusion varied across realizations, and within each realization in the alongshore direction (Fig. 6a). For example, the realization with the median average interface position has up to 1000 m variation in toe position. In general, alongshore variation in the interface position is higher at the end of the intrusion period than at steady state. 

Over the 100 years of intrusion, the closest position of the salt/fresh water interface to the shore, _𝑥_<sup>_𝑚𝑖𝑛_</sup> _𝑇_<sup>,movedconsistentlylandward(Fig.</sup> 6c). At the end of the intrusion period, the interface reached the shoreline in half of the realizations ( _𝑥_<sup>_𝑚𝑖𝑛_</sup> _𝑇_ ≤ 0 m). In one quarter of the realizations, the interface reached the inland boundary ( _𝑥_<sup>_𝑚𝑖𝑛_</sup> _𝑇_ = −400 m). Fig. 6b compares the rate of movement of the interface to the effective hydraulic conductivity of the aquifer. The rate of movement _𝑑𝑥_<sup>_𝑚𝑖𝑛_</sup> _𝑇_<sup>∕</sup><sup>_𝑑𝑡_appearstoincreasewith</sup><sup>_𝐾_</sup> _𝑎_<sup>_𝑒𝑓𝑓_</sup> (Fig. 6b). _𝑊_<sup>_𝑚𝑒𝑎𝑛_</sup> increased slightly during the intrusion period or all realizations (Fig. 6d). 

The movement of the salt/fresh water interface during the intrusion period varies alongshore. This is clearly shown, for example, in realizations 12, and 19 (Fig. 7). In some cases, the interface appears to intrude the most from the point alongshore where it was most offshore at steady state, for example in realizations 21, 5, and 12. However, in realization 20 this is not the case. The extent of intrusion can be related to the aquifer hydraulic conductivity distributions, with the most intrusion appearing where there are connected pathways of high hydraulic conductivity. This is highlighted by the paths of particles released from the steady-state interface at the start of the intrusion period. These particle pathlines show the occurrence of alongshore intrusion, where 

6 

_C.A. Cleary et al._ 

_Journal of Hydrology 661 (2025) 133455_ 

**Fig. 5.** Salinity distributions for realization 5 (a, b), 19 (c, d), 25 (e, f) for three cross-sections taken in the alongshore direction. Yellow shows saline groundwater, and purple shows fresh groundwater. (a, c, e): simulated steady state with _ℎ𝑜𝑛_ = 0 _._ 75 m. (b, d, f): after 100 years with _ℎ𝑜𝑛_ = −1 m. These three realizations have been chosen to display the range of characteristics and responses of the 25 realizations. (For interpretation of the references to color in this figure legend, the reader is referred to the web version of this article.) 

the alongshore connectivity of hydraulic conductivity zones plays a role. Analysis of percolation metrics from Renard and Allard (2013) found that there is no correlation between the connectivity of Clean Gravel facies and the rate of interface movement, and that there is some correlation between the connectivity of Clean Gravel and Sandy Gravel facies and the rate of interface movement (Supplementary Figure 1). In some cases, for example, in realizations 2 and 20, the particles travel further than the interface, suggesting dispersion of the saline plume. 

##### **4. Discussion** 

##### _4.1. Influence of alluvial aquifer heterogeneity on groundwater transport under active SWI_ 

We found that alluvial aquifer heterogeneity causes variation in the rate of movement of the salt/fresh water interface during active SWI (Fig. 7). Within one heterogeneous alluvial aquifer realization, at some points alongshore the rate of interface movement is five to ten times faster than the average rate of interface movement (Fig. 6b). For the Central Canterbury Plains aquifer system, these findings show that under active SWI conditions, preferential flow may increase the rate of interface movement. If sufficiently low coastal groundwater heads are 

maintained, onshore groundwater will likely be salinized more rapidly than expected under homogeneous conditions. 

Particle tracking shows preferential flow paths during seawater intrusion (Fig. 7). We hypothesize that these preferential flow paths are formed by connected areas of Clean Gravel and Sandy Gravel facies. However, we did not find a strong correlation between the average rate of interface movement and the percolation metric from Renard and Allard (2013) (Supplementary Figure 1). Future work could explore the correlation between the rate of interface movement and a wider range of connectivity metrics, e.g Vassena et al. (2010), Colecchio et al. (2021), Molinari et al. (2015), Knudby and Carrera (2006) and Bianchi and Pedretti (2017). This would help to improve understanding of the driving factors behind preferential seawater intrusion in alluvial aquifers. 

Comparing our results in an alluvial aquifer to similar studies in heterogeneous fluvio-deltaic and volcanic aquifers, there are differences and similarities. At steady-state, the salinity distributions simulated here are more wedge-like than in fluvio-deltaic (Michael et al., 2016) and volcanic (Kreyns et al., 2020) aquifers. In the transient period, we observed similar preferential intrusion to that in volcanic (Geng and Michael, 2020, 2021) and fluvio-deltaic (Yu and Michael, 2019a,b) environments. The contrast in hydraulic conductivity between the least and most hydraulically conductive facies in the heterogeneous aquifer 

7 

_C.A. Cleary et al._ 

_Journal of Hydrology 661 (2025) 133455_ 

**Fig. 6.** Description of the movement of the salt/fresh water interface during the intrusion period. (a) interface toe position _𝑥𝑇_ across the width of the aquifer for each of the realizations at the end of the intrusion period. (b) Relationship between effective aquifer hydraulic conductivity _𝐾𝑎_<sup>_𝑒𝑓𝑓_andtherateofinterfacemovement.Thecirclesshowthe</sup> mean of the rate of interface movement over the width of the aquifer, and the error bars show the range (c) distribution _𝑥_<sup>_𝑚𝑖𝑛_</sup> _𝑇_<sup>overtimefortheensemble.(d)distributionof</sup> average interface width across the width of the aquifer over time for the ensemble. 

**Fig. 7.** Examples of the movement of the salt/fresh water interface toe along the width of the aquifer for 9 of the 25 realizations which have been selected to represent the range of possible responses. The movement of the interface is plotted against the vertically averaged hydraulic conductivity of the aquifer. Particle lines are shown for particles released from the steady interface at the start of the intrusion period and tracked until its end. 

8 

_C.A. Cleary et al._ 

_Journal of Hydrology 661 (2025) 133455_ 

models used in this study (10<sup>2</sup> ×) are much smaller than those simulated previously for fluvio-deltaic (10<sup>9</sup> ×) and volcanic (10<sup>5</sup> ×) environments. It is therefore noteworthy to observe preferential SWI in an alluvial aquifer, where the effects of heterogeneity may have been ignored. Furthermore, while previous studies applied a pumping boundary condition to simulate intrusion, we have used a reduced onshore head (Yu and Michael, 2019a; Geng and Michael, 2020). We would expect to observe more severe preferential intrusion if we simulated more focused abstraction such as pumping. 

Although we only studied active SWI here, where the coastal hydraulic gradient has been reversed, passive SWI, where the coastal hydraulic gradient is reduced but fresh groundwater still flows offshore, is also a significant hazard to coastal groundwater systems (Werner, 2017). Passive SWI may be due to decreases in onshore head, and increases in sea level (Michael et al., 2013; Watson et al., 2010). We expect that alluvial aquifer heterogeneity would also have an influence on the rates and distribution of salinization under passive SWI, although not to the same extent as found here. This is an area for future work. Salinization of coastal groundwater under glacial cycles can also be considered a case of passive SWI. Although previous studies have considered aquifer system heterogeneity on a larger scale when modeling groundwater systems that are out of equilibrium with the current sea level, there is little consideration of the type of connected aquifer heterogeneity studied here (Micallef et al., 2020; De Biase et al., 2024; Thomas et al., 2024). Within-aquifer alluvial heterogeneity may have effects on the preservation of offshore fresh groundwater. Understanding these effects would help to improve estimates of volumes of offshore fresh groundwater (Post et al., 2013; Zamrsky et al., 2022). 

One challenge of capturing the effect of heterogeneity on seawater intrusion in aquifers that extend offshore is representing the finescale geological structure which may influence groundwater flow and transport across the large offshore domain. We have partially overcome this challenge by using a lumped representation of small high hydraulic conductivity open-framework gravel deposits, which means the discretization scheme allows for the simulation of a moderately large aquifer (Sarris et al., 2018, 2023). However, the offshore aquifer length modeled here (4 km) is smaller than the offshore extent of aquifers in the Central Canterbury Plains system ( _>_ 30 km). In an aquifer that extends more than 4 km offshore, the steady-state salt/fresh water interface could be located further offshore. This would result in the aquifer being less vulnerable to seawater intrusion, as the interface would need to move landward a greater distance to cause onshore salinization. Under active seawater intrusion conditions, the rate of movement of the interface may also differ. This would depend on the connectivity of high hydraulic conductivity facies over a larger scale. If preferential flow paths exist over larger distances than 4 km, then we may expect the rates of interface movement to be similar to those found here. Otherwise, preferential flow may be less significant, and seawater intrusion rates may be lower on average over larger distances. 

The modeled characteristics of seawater intrusion are likely to be influenced by the description of aquifer heterogeneity (Geng and Michael, 2020). Although an exploration of these effects is beyond the scope of this work, we expect that the choice of hydrofacies categorization scheme and the method used for assigning hydrofacies hydraulic conductivities will influence the characteristics of seawater intrusion (Kenny et al., 2025). Furthermore, the lack of offshore borehole descriptions means that conditioning points cannot be provided for the geostatistical models. If this was available, the uncertainty of the predictions would likely be reduced. Additionally, if we had represented finer-scale heterogeneity, based on the depositional structure of alluvial aquifers (i.e. Pirot et al. (2015b)), we may have observed different flow and transport behavior (Perulero Serrano et al., 2014; Pirot et al., 2015a). However, such a representation would have been computationally impossible at the scale presented and with the computer programs used in this study. 

##### _4.2. Comparison to equivalent homogeneous models_ 

Modeling seawater intrusion in 3D heterogeneous aquifer models requires long simulation times. When a faster solution is required, or when no data is available to define a geological model of heterogeneity, simpler models provide an alternative approach. Two examples of simpler models are advective (sharp-interface) and advectivedispersive equivalent homogeneous models. At steady-state, the advective semi-analytical solution overpredicts _𝑥𝑇_ (Fig. 8a). The 2D homogeneous models with advection and dispersion (including molecular diffusion) underpredict _𝑥𝑇_ . For the advective solution, _𝑥𝑇_ increases with _𝐾𝑎_<sup>_𝑒𝑓𝑓_</sup> (Bakker et al., 2017). In the advective-dispersive 2D models, _𝑥𝑇_ decreases with _𝐾𝑎_<sup>_𝑒𝑓𝑓_</sup> (Abarca et al., 2007). For the heterogeneous realizations, there is no clear correlation between _𝑥𝑇_ and _𝐾𝑎_<sup>_𝑒𝑓𝑓_</sup> . 

The rate of movement of the salt/fresh water interface during the intrusion period increases with _𝐾𝑎_<sup>_𝑒𝑓𝑓_</sup> for both the advective and advective-dispersive equivalent models, as well as the heterogeneous realizations (Fig. 8b). The interface rate of movement varies across the width of the aquifer for the heterogeneous realizations. The average rate of movement of the interface in the heterogeneous realizations (center of gray error bars), is around two times to four times faster than predicted from the equivalent advective model (blue dotted line), and around one times to two times faster than the equivalent advectivedispersive model (pink dotted line). The maximum interface rate of movement (upper limit of error bars) in the heterogeneous realizations is in many cases more than five times faster than the expected velocity from the advective-dispersive model. This means that methods that consider the hydraulic conductivity of the aquifer to assess vulnerability to SWI, such as the GALDIT method (Ferreira and Chachadi, 2005), should also consider the effect of preferential flow on this vulnerability, for alluvial aquifers. This could be done by scaling the hydraulic conductivity parameter in areas where preferential flow is known to occur. 

At steady-state, the minimum toe position is less in the advectivedispersive model than in the heterogeneous realizations (Fig. 8c). However, due to the difference in salt/fresh water interface rate of movement, the final toe position is on average less for heterogeneous realization than for the advective-dispersive model. The maximum rate of interface movement over time is around three times greater in the heterogeneous realizations than in the advective-dispersive model (Fig. 8c). The average width of the interface is typically greater in the advective-dispersive model and increases at a similar rate to the heterogeneous realizations during the intrusion period (Fig. 8d). 

If onshore groundwater levels are reduced and active seawater intrusion conditions are maintained, then equivalent models based on effective hydraulic conductivity will underpredict the rate of interface movement, even if dispersion is included in the model. This follows similar findings in volcanic (Geng and Michael, 2020), and fluvio-deltaic aquifers (Yu and Michael, 2019a). Groundwater practitioners should be cautious about making coastal groundwater management decisions for alluvial aquifers if their understanding of seawater intrusion is based on such equivalent models, and considering heterogeneity explicitly may reduce the risk of undesired salinization. 

##### _4.3. Expected break-through curves at onshore wells_ 

The inclusion of heterogeneity in numerical models can be used to assess the uncertainty in predicting breakthrough curves at onshore wells. Breakthrough curves in heterogeneous aquifers vary between aquifer realizations and within one realization depending on the alongshore location (Fig. 9). At a distance of 300 m alongshore (Y = 300), the salinity exceeds 0.35 PSU at different times over the 100 years for 7 of the 25 realizations, compared with 5 realizations at Y = 100 m. At Y = 500 m, the salinity exceeds 0.35 PSU quickly in two realizations, after 20 and 40 years. However, no more realizations exceed 0.35 PSU until after 90 years. The shape of breakthrough curves varies 

9 

_C.A. Cleary et al._ 

_Journal of Hydrology 661 (2025) 133455_ 

**Fig. 8.** Comparison between heterogeneous realizations (gray), advective and advective-dispersive models. (a): _𝑥𝑇_ at steady state, compared with _𝐾𝑎_<sup>_𝑒𝑓𝑓_</sup> . (b): rate of movement of the salt/fresh water interface during the intrusion period, compared with _𝐾𝑎_<sup>_𝑒𝑓𝑓_</sup> . (c): _𝑥_<sup>_𝑚𝑖𝑛_</sup> _𝑇_<sup>overtimeintheintrusionperiod.(d):</sup><sup>_𝑊_overtimeintheintrusionperiod.</sup> 

**Fig. 9.** Distribution of possible breakthrough curves for 5 hypothetical observation wells (non-pumping) placed along the shoreline. 

between realizations, for example, at Y = 900 m, the curves for the three realizations with the highest salinity are notably different. 

The distribution of breakthrough curves for the equivalent homogeneous advective-dispersive models is much more uniform than for the heterogeneous models, and breakthrough curves are less steep (Fig. 9). The effects of preferential flow caused by heterogeneity are responsible for these differences. If breakthrough curves observed at a coastal monitoring well in an alluvial aquifer are inconsistent with those expected from a homogeneous model, then heterogeneity may be the cause. Given the alongshore variation in salinization shown here 

(see Fig. 7), denser coastal groundwater monitoring networks may be required to capture the occurrence of seawater intrusion (Werner et al., 2013). 

_4.4. Modeling coastal alluvial aquifers_ 

Simulating 3D variable density groundwater transport heterogeneous porous media, at an adequate temporal and spatial resolution is very demanding computationally. To reach a steady state, each simulation took up to 30 days to run on a single core. Assessing the 

10 

_C.A. Cleary et al._ 

_Journal of Hydrology 661 (2025) 133455_ 

vulnerability of alluvial aquifers that extend offshore – nationwide or worldwide – to preferential intrusion would require at least several case studies like the one presented here, using site-specific information (Kitanidis, 2015). It may be possible to interpolate such case studies based on the properties of the heterogeneous aquifer fields, potentially using a surrogate model such as an artificial neural network (Luo et al., 2023). The long run times also pose a problem for quantifying the uncertainty for a single aquifer. In Fig. 4c we can see that the distribution of salt/fresh water interface properties is not a complete representation of a probability distribution. To capture behavior occurring at the tails of this probability distribution, more realizations need to be simulated. Again, the use of a surrogate model may allow for the rapid simulation of more realizations, which may improve the analysis (Luo et al., 2023). However, it should be noted that most of the computational time was needed to simulate the position of an offshore interface. This cost would be reduced greatly if the initial interface position was simulated as being closer to shore. 

We implement a fine discretization scheme to accurately simulate groundwater flow and transport in a heterogeneous alluvial aquifer. However, it is infeasible to use such a fine discretization in larger-scale coastal groundwater models which typically have element dimensions 10× larger than those of our case study (Thomas et al., 2019; Micallef et al., 2020; Michael et al., 2016). Therefore, finding a suitable upscaling method is necessary to reproduce the behavior observed here in larger models (Kitanidis, 2015). In Fig. 8b, we see that using a homogeneous model including a relatively high dispersion coefficient, we can come close to reproducing the mean salt/fresh water interface rate of movement (Zech et al., 2015). However, this equivalent homogeneous model fails to reproduce the maximum rate of interface movement, where there is preferential flow. Dual porosity models may provide an alternative equivalent model, as they can produce a greater widening of the interface during movement (Lu et al., 2009), and can better reproduce characteristics of groundwater flow and transport through preferential flow paths (Baratelli et al., 2011, 2014; Bianchi and Zheng, 2016). 

##### **5. Conclusions** 

Connected pathways of high-permeability facies in a coastal aquifer system can lead to preferential seawater intrusion. This phenomenon has been observed and modeled in various geological environments such as karstic (Xu et al., 2016), fluvio-deltaic (Yu and Michael, 2019a) and volcanic (Geng and Michael, 2020). However, until now no modeling study has characterized preferential seawater intrusion in alluvial aquifers. We modeled the salinization of 25 heterogeneous realizations of a confined alluvial aquifer that extends under the seafloor, based on the Central Canterbury Plains aquifer System in New Zealand. The aquifer has a relatively small contrast between high and low hydraulic conductivity facies (10<sup>2</sup> ×). We found that preferential seawater intrusion can occur in an alluvial aquifer. The steady-state salt/fresh water interface position varied across realizations and in the alongshore direction, by up to 1000 m, within each realization. During the intrusion period, the variation in interface position increased, with some parts up the interface moving over 10 times faster than the average rate of movement. Comparing heterogeneous alluvial aquifer models to equivalent homogeneous models including dispersion, rates of interface movement were up to 10 times faster in heterogeneous models. This means that homogeneous models based on the effective hydraulic conductivity and using a high dispersion coefficient cannot reproduce preferential seawater intrusion behavior in heterogeneous alluvial aquifers. If analysis of an alluvial aquifer system is based on such models, seawater intrusion may occur much faster than expected. 

##### **CRediT authorship contribution statement** 

**Connor A. Cleary:** Writing – original draft, Visualization, Methodology, Investigation, Formal analysis, Conceptualization. **Theo S. Sarris:** Writing – review & editing, Supervision, Methodology, Data curation. **Leanne K. Morgan:** Writing – review & editing, Supervision, Methodology. **David E. Dempsey:** Writing – review & editing, Supervision, Methodology, Conceptualization. 

##### **Declaration of competing interest** 

The authors declare that they have no known competing financial interests or personal relationships that could have appeared to influence the work reported in this paper. 

##### **Appendix A. Supplementary data** 

Supplementary material related to this article can be found online at https://doi.org/10.1016/j.jhydrol.2025.133455. 

##### **Data availability** 

The scripts used to create the models are available at: https:// github.com/connorcleary/confined_hetergeneous_aquifers The heterogeneous fields are available upon request to the corresponding author. 

##### **References** 

- Abarca, E., Carrera, J., Sánchez-Vila, X., Dentz, M., 2007. Anisotropic dispersive Henry problem. Adv. Water Resour. 30 (4), 913–926. http://dx.doi.org/10. 1016/j.advwatres.2006.08.005, URL: https://linkinghub.elsevier.com/retrieve/pii/ S0309170806001485. 

- Anderson, M.P., Aiken, J.S., Webb, E.K., Mickelson, D.M., 1999. Sedimentology and hydrogeology of two braided stream deposits. Sediment. Geol. 129 (3–4), 187–199. http://dx.doi.org/10.1016/S0037-0738(99)00015-9. 

- Badaruddin, S., Werner, A.D., Morgan, L.K., 2017. Characteristics of active seawater intrusion. J. Hydrol. 551, 632–647. http://dx.doi.org/10.1016/j.jhydrol.2017.04. 031, URL: https://linkinghub.elsevier.com/retrieve/pii/S0022169417302524. 

- Bakker, M., Miller, A.D., Morgan, L.K., Werner, A.D., 2017. Evaluation of analytic solutions for steady interface flow where the aquifer extends below the sea. J. Hydrol. 551, 660–664. http://dx.doi.org/10.1016/j.jhydrol.2017.04.009, URL: https://linkinghub.elsevier.com/retrieve/pii/S0022169417302305. 

- Bakker, M., Post, V.E.A., Langevin, C.D., Hughes, J.D., White, J.T., Starn, J.J., Fienen, M.N., 2016. Scripting MODFLOW model development using Python and FloPy. Groundwater 54 (5), 733–739. http://dx.doi.org/10.1111/gwat.12413. 

- Baratelli, F., Giudici, M., Parravicini, G., 2014. Single- and dual-domain models of solute transport in alluvial sediments: the effects of heterogeneity structure and spatial scale. Transp. Porous Media 105 (2), 315–348. http://dx.doi.org/10.1007/s11242014-0371-y, URL: http://link.springer.com/10.1007/s11242-014-0371-y. 

- Baratelli, F., Giudici, M., Vassena, C., 2011. Single and dual-domain models to evaluate the effects of preferential flow paths in alluvial sediments. Transp. Porous Media 87 (2), 465–484. http://dx.doi.org/10.1007/s11242-010-9695-4, URL: http://link. springer.com/10.1007/s11242-010-9695-4. 

- Barlow, P.M., Reichard, E.G., 2010. Saltwater intrusion in coastal regions of North America. Hydrogeol. J. 18 (1), 247–260. http://dx.doi.org/10.1007/s10040-0090514-3, URL: http://link.springer.com/10.1007/s10040-009-0514-3. 

- Barnes, P.M., 2015. Seismic Reflection Imaging of Shallow Gravel Formations Beneath Pegasus Bay. Prepared for Environment Canterbury. Client Report No. WLG2015-64, NIWA, Auckland, New Zealand. 

- Bennett, J.P., Haslauer, C.P., Cirpka, O.A., 2017. The impact of sedimentary anisotropy on solute mixing in stacked scour-pool structures. Water Resour. Res. 53 (4), 2813–2832, ISBN: 0043-1397 Publisher: Wiley Online Library. 

- Bersezio, R., Bini, A., Giudici, M., 1999. Effects of sedimentary heterogeneity on groundwater flow in a Quaternary pro-glacial delta environment: joining facies analysis and numerical modelling. Sediment. Geol. 129 (3–4), 327–344. http://dx.doi.org/ 10.1016/S0037-0738(98)00145-6, URL: https://linkinghub.elsevier.com/retrieve/ pii/S0037073898001456. 

- Bianchi, M., Pedretti, D., 2017. Geological entropy and solute transport in heterogeneous porous media. Water Resour. Res. 53 (6), 4691–4708. http://dx.doi. org/10.1002/2016WR020195, URL: https://agupubs.onlinelibrary.wiley.com/doi/ 10.1002/2016WR020195. 

- Bianchi, M., Zheng, C., 2016. A lithofacies approach for modeling non-F ickian solute transport in a heterogeneous alluvial aquifer. Water Resour. Res. 52 (1), 552–565, ISBN: 0043-1397 Publisher: Wiley Online Library. 

11 

_C.A. Cleary et al._ 

_Journal of Hydrology 661 (2025) 133455_ 

- Brown, L.J., Wilson, D.D., Moar, N.T., Mildenhall, D.C., 1988. Stratigraphy of the late quaternary deposits of the northern Canterbury Plains, New Zealand. N. Z. J. Geol. Geophys. 31 (3), 305–335. http://dx.doi.org/10.1080/00288306.1988.10417779. 

- Browne, G.H., Naish, T.R., 2003. Facies development and sequence architecture of a late Quaternary fluvial-marine transition, Canterbury Plains and shelf, New Zealand: Implications for forced regressive deposits. Sediment. Geol. 158 (1–2), 57–86. http://dx.doi.org/10.1016/S0037-0738(02)00258-0, ISBN: 6445704603. 

- Burbery, L., Moore, C.R., Jones, M.A., Abraham, P.M., Humphries, B.L., Close, M.E., 2018. Study of connectivity of open framework gravel facies in the Canterbury Plains aquifer using smoke as a tracer. Geol. Soc. Spec. Publ. 440 (1), 327–344. http://dx.doi.org/10.1144/SP440.10. 

- Carle, S.F., 1999. T-PROGS: Transition Probability Geostatistical Software, Version 2.1. Technical Report, Department of Land, Air and Water Resources, University of California, Davis. 

- Choi, H., Lee, E., Park, D., Park, C., Schembri, M., Schembri, D., Pisani, C.M., Sapiano, M., Kim, Y., 2024. Assessment of spatio-temporal variations in groundwater quality for the groundwater-dependent Maltese islands. J. Hydrol.: Reg. Stud. 54, 101875. http://dx.doi.org/10.1016/j.ejrh.2024.101875, URL: https://linkinghub. elsevier.com/retrieve/pii/S2214581824002234. 

- Cirpka, O.A., Valocchi, A.J., 2016. Debates-Stochastic subsurface hydrology from theory to practice: Does stochastic subsurface hydrology help solving practical problems of contaminant hydrogeology?: Stochastic Contaminant Hydrogeology. Water Resour. Res. 52 (12), 9218–9227. http://dx.doi.org/10.1002/2016WR019087, URL: http: //doi.wiley.com/10.1002/2016WR019087. 

- Colecchio, I., Otero, A.D., Noetinger, B., Boschan, A., 2021. Equivalent hydraulic conductivity, connectivity and percolation in 2D and 3D random binary media. Adv. Water Resour. 158, 104040. http://dx.doi.org/10.1016/j.advwatres.2021.104040, URL: https://linkinghub.elsevier.com/retrieve/pii/S0309170821001949. 

- Condesso De Melo, M.T., Carreira Paquete, P.M.M., Marques Da Silva, M.A., 2001. Evolution of the Aveiro Cretaceous aquifer (NW Portugal) during the Late Pleistocene and present day: evidence from chemical and isotopic data. Geol. Soc. Lond. Spec. Publ. 189 (1), 139–154. http://dx.doi.org/10.1144/GSL.SP.2001.189.01.09, URL: https://www.lyellcollection.org/doi/10.1144/GSL.SP.2001.189.01.09. 

- Dann, R.L., Close, M., Flintoft, M., Hector, R., Barlow, H., Thomas, S., Francis, G., 2009. Characterization and estimation of hydraulic properties in an alluvial gravel vadose zone. Vadose Zone J. 8 (3), 651–663. http://dx.doi.org/10.2136/vzj2008.0174, URL: http://doi.wiley.com/10.2136/vzj2008.0174. 

- Dann, R.L., Close, M.E., Pang, L., Flintoft, M.J., Hector, R.P., 2008. Complementary use of tracer and pumping tests to characterize a heterogeneous channelized aquifer system in New Zealand. Hydrogeol. J. 16 (6), 1177–1191. http://dx.doi.org/10. 1007/s10040-008-0291-4. 

- De Biase, M., Chidichimo, F., Thomas, A.T., Micallef, A., 2024. Limited role of present-day onshore freshwater recharge in the emplacement of offshore freshened groundwater in the Canterbury Bight, New Zealand. N. Z. J. Geol. Geophys. 1–15, ISBN: 0028-8306, Publisher: Taylor & Francis. 

- dell’Arciprete, D., Bersezio, R., Felletti, F., Giudici, M., Comunian, A., Renard, P., 2012. Comparison of three geostatistical methods for hydrofacies simulation: a test on alluvial sediments. Hydrogeol. J. 20 (2), 299–311. http://dx.doi.org/10.1007/ s10040-011-0808-0, URL: http://link.springer.com/10.1007/s10040-011-0808-0. 

- Deutsch, C.V., Journel, A.G., 2007. GSLIB: Geostatistical Software Library and User’s Guide, second ed. Oxford University Press, New York. 

- Edmunds, W.M., Milne, C., 2001. Palaeowaters in Coastal Europe: Evolution of Groundwater Since the Late Pleistocene, vol. 189, Geological Society of London. 

- Environment Canterbury, 2018. Coastal confined gravel aquifer system. Environment Canterbury. URL: http://opendata.canterburymaps.govt.nz/datasets/ 2a4820ab58ad43baa10969187e567e69_6. 

- Etheridge, Z., Hanson, M., 2019. Waimakariri Land and Water Solutions Programme. Numerical Groundwater Model Conceptualisation, Design, Development and Deployment. Technical Report, Environment Canterbury Regional Council, ISBN: 9781988593494. 

- Ferguson, G., Gleeson, T., 2012. Vulnerability of coastal aquifers to groundwater use and climate change. Nat. Clim. Chang. 2 (5), 342–345. http://dx.doi.org/10.1038/ nclimate1413, URL: https://www.nature.com/articles/nclimate1413. 

- Ferreira, A., Chachadi, A., 2005. Assessing aquifer vulnerability to sea-water intrusion using GALDIT method: Part 2–GALDIT indicators description. In: Proceedings of the 4th Inter Celtic Colloquium on Hydrology and Management of Water Resources. 

- Fogg, G.E., Carle, S.F., Green, C., 2000. Connected-network paradigm for the alluvial aquifer system. Geol. Soc. Am. 25–42, Theory, modelling and field investigation in hydrogeology: A special volume in honor of Shlomo P. Neuman’s 60th birthday, GSA special paper 348. 

- Fogg, G.E., Zhang, Y., 2016. Debates—Stochastic subsurface hydrology from theory to practice: A geologic perspective. Water Resour. Res. 52 (12), 9235–9245, ISBN: 0043-1397 Publisher: Wiley Online Library. 

- Fulthorpe, C.S., Hoyanagi, K., Blum, P., Expedition, I., 2011. IODP expedition 317: Exploring the record of sea-level change off New Zealand. Sci. Drill. 12, 4–14, Publisher: ICDP-IODP Göttingen, Germany. 

- Geng, X., Michael, H.A., 2020. Preferential flow enhances pumping-induced saltwater intrusion in volcanic aquifers. Water Resour. Res. 56 (5), http://dx.doi. org/10.1029/2019WR026390, URL: https://onlinelibrary.wiley.com/doi/10.1029/ 2019WR026390. 

- Geng, X., Michael, H.A., 2021. Along-shore movement of groundwater and its effects on seawater-groundwater interactions in heterogeneous coastal aquifers. Water Resour. Res. 57 (12), http://dx.doi.org/10.1029/2021WR031056, URL: https:// onlinelibrary.wiley.com/doi/10.1029/2021WR031056. 

- Hughes, J., Langevin, C., Banta, E., 2017. Documentation for the MODFLOW 6 framework. In: USGS: Techniques and Methods 6-A57. p. 42, ISSN: 1600-051X; 0303-6979. 

- Jenkins, B.R., 2018. Water management in canterbury. In: Water Management in New Zealand’s Canterbury Region, vol. 19, Springer, Dordrecht, pp. 37–81. http: //dx.doi.org/10.1007/978-94-024-1213-0_3. 

- Jiao, J., Shi, L., Kuang, X., Lee, C.M., Yim, W.W.S., Yang, S., 2015. Reconstructed chloride concentration profiles below the seabed in Hong Kong (China) and their implications for offshore groundwater resources. Hydrogeol. J. 23 (2), 277–286. http://dx.doi.org/10.1007/s10040-014-1201-6, URL: http://link.springer.com/10. 1007/s10040-014-1201-6. 

- Kenny, A., Sarris, T.S., Scott, D.M., Moore, C., 2025. A numerical investigation of the effects of model parameterization on the delineation of source protection zones under uncertainty. Water Res. 271, 123010. http://dx.doi.org/10.1016/j.watres.2024. 123010, URL: https://linkinghub.elsevier.com/retrieve/pii/S0043135424019109. 

- Kerrou, J., Renard, P., 2010. A numerical analysis of dimensionality and heterogeneity effects on advective dispersive seawater intrusion processes. Hydrogeol. J. 18 (1), 55–72. http://dx.doi.org/10.1007/s10040-009-0533-0, URL: http://link.springer. com/10.1007/s10040-009-0533-0. 

- Kim, Y., Lee, K.S., Koh, D.C., Lee, D.H., Lee, S.G., Park, W.B., Koh, G.W., Woo, N.C., 2003. Hydrogeochemical and isotopic evidence of groundwater salinization in a coastal aquifer: a case study in Jeju volcanic island, Korea. J. Hydrol. 270 (3–4), 282–294. http://dx.doi.org/10.1016/S0022-1694(02)00307-4, URL: https: //linkinghub.elsevier.com/retrieve/pii/S0022169402003074. 

- Kitanidis, P.K., 2015. Persistent questions of heterogeneity, uncertainty, and scale in subsurface flow and transport: Persistent Questions in Subsurface Flow and Transport. Water Resour. Res. 51 (8), 5888–5904. http://dx.doi.org/10.1002/ 2015WR017639, URL: http://doi.wiley.com/10.1002/2015WR017639. 

- Knight, A.C., Werner, A.D., Irvine, D.J., 2019. Combined geophysical and analytical methods to estimate offshore freshwater extent. J. Hydrol. 576, 529–540. http: //dx.doi.org/10.1016/j.jhydrol.2019.06.059, URL: https://linkinghub.elsevier.com/ retrieve/pii/S0022169419306067. 

- Knight, A.C., Werner, A.D., Morgan, L.K., 2018. The onshore influence of offshore fresh groundwater. J. Hydrol. 561, 724–736. http://dx.doi.org/10.1016/j.jhydrol.2018. 03.028, Publisher: Elsevier B.V., URL: https://doi.org/10.1016/j.jhydrol.2018.03. 028. 

- Knudby, C., Carrera, J., 2006. On the use of apparent hydraulic diffusivity as an indicator of connectivity. J. Hydrol. 329 (3–4), 377–389. http://dx.doi.org/ 10.1016/j.jhydrol.2006.02.026, URL: https://linkinghub.elsevier.com/retrieve/pii/ S0022169406001107. 

- Koltermann, C.E., Gorelick, S.M., 1996. Heterogeneity in sedimentary deposits: A review of structure-imitating, process-imitating, and descriptive approaches. Water Resour. Res. 32 (9), 2617–2658. http://dx.doi.org/10.1029/96WR00025. 

- Kooi, H., Groen, J., Leijnse, A., 2000. Modes of seawater intrusion during transgressions. Water Resour. Res. 36 (12), 3581–3589. http://dx.doi.org/10.1029/ 2000WR900243, URL: http://doi.wiley.com/10.1029/2000WR900243. 

- Kreyns, P., Geng, X., Michael, H.A., 2020. The influence of connected heterogeneity on groundwater flow and salinity distributions in coastal volcanic aquifers. J. Hydrol. 586, 124863. http://dx.doi.org/10.1016/j.jhydrol.2020.124863, URL: https://linkinghub.elsevier.com/retrieve/pii/S0022169420303231. 

- Lal, A., Datta, B., 2019. Optimal groundwater-use strategy for saltwater intrusion management in a Pacific Island Country. J. Water Resour. Plan. Manag. 145 (9), 04019032. http://dx.doi.org/10.1061/(ASCE)WR.1943-5452.0001090, URL: https: //ascelibrary.org/doi/10.1061%28ASCE%29WR.1943-5452.0001090. 

- Langevin, C.D., Panday, S., Provost, A.M., 2020. Hydraulic-head formulation for densitydependent flow and transport. Groundwater 58 (3), 349–362. http://dx.doi.org/10. 1111/gwat.12967. 

- Lu, C., Kitanidis, P.K., Luo, J., 2009. Effects of kinetic mass transfer and transient flow conditions on widening mixing zones in coastal aquifers. Water Resour. Res. 45 (12), http://dx.doi.org/10.1029/2008WR007643, URL: http://doi.wiley.com/ 10.1029/2008WR007643. 

- Luo, J., Ma, X., Ji, Y., Li, X., Song, Z., Lu, W., 2023. Review of machine learning-based surrogate models of groundwater contaminant modeling. Environ. Res. 117268, ISBN: 0013-9351 Publisher: Elsevier. 

- Martínez-Pérez, L., Luquot, L., Carrera, J., Marazuela, M.A., Goyetche, T., Pool, M., Palacios, A., Bellmunt, F., Ledo, J., Ferrer, N., Del Val, L., Pezard, P.A., GarcíaOrellana, J., Diego-Feliu, M., Rodellas, V., Saaltink, M.W., Vázquez-Suñé, E., Folch, A., 2022. A multidisciplinary approach to characterizing coastal alluvial aquifers to improve understanding of seawater intrusion and submarine groundwater discharge. J. Hydrol. 607, 127510. http://dx.doi.org/10.1016/j.jhydrol.2022. 127510, URL: https://linkinghub.elsevier.com/retrieve/pii/S0022169422000853. 

- Micallef, A., Person, M., Haroon, A., Weymer, B.A., Jegen, M., Schwalenberg, K., Faghih, Z., Duan, S., Cohen, D., Mountjoy, J.J., Woelz, S., Gable, C.W., Averes, T., Kumar Tiwari, A., 2020. 3D characterisation and quantification of an offshore freshened groundwater system in the Canterbury Bight. Nat. Commun. 11 (1), http://dx.doi.org/10.1038/s41467-020-14770-7, Publisher: Springer US. 

12 

_C.A. Cleary et al._ 

_Journal of Hydrology 661 (2025) 133455_ 

- Michael, H.A., Post, V.E.A., Wilson, A.M., Werner, A.D., 2017. Science, society, and the coastal groundwater squeeze. Water Resour. Res. 53 (4), 2610–2617. http: //dx.doi.org/10.1002/2017WR020851, URL: https://onlinelibrary.wiley.com/doi/ 10.1002/2017WR020851. 

- Michael, H.A., Russoniello, C.J., Byron, L.A., 2013. Global assessment of vulnerability to sea-level rise in topography-limited and recharge-limited coastal groundwater systems. Water Resour. Res. 49 (4), 2228–2240. http://dx.doi.org/10.1002/wrcr. 20213, URL: http://doi.wiley.com/10.1002/wrcr.20213. 

- Michael, H.A., Scott, K.C., Koneshloo, M., Yu, X., Khan, M.R., Li, K., 2016. Geologic influence on groundwater salinity drives large seawater circulation through the continental shelf: Geology Drives Seawater Circulation. Geophys. Res. Lett. 43 (20), 10,782–10,791. http://dx.doi.org/10.1002/2016GL070863, URL: http://doi.wiley. com/10.1002/2016GL070863. 

- Ministry Of Health, 2018. Drinking-Water Standards for New Zealand 2005 (Revised 2018). Technical Report, Ministry of Health, Wellington, ISBN: 9781988539782, p. 130, URL: https://www.health.govt.nz/publication/drinking-water-standards-newzealand-2005-revised-2018. 

- Molinari, A., Pedretti, D., Fallico, C., 2015. Analysis of convergent flow tracer tests in a heterogeneous sandy box with connected gravel channels. Water Resour. Res. 51 (7), 5640–5657. http://dx.doi.org/10.1002/2014WR016216, URL: https: //agupubs.onlinelibrary.wiley.com/doi/10.1002/2014WR016216. 

- Moore, C., Scott, D., Burbery, L., Close, M., 2022. Using sequential conditioning to explore uncertainties in geostatistical characterization and in groundwater transport predictions. Front. Earth Sci. 10, 979823. http://dx.doi.org/10.3389/ feart.2022.979823, URL: https://www.frontiersin.org/articles/10.3389/feart.2022. 979823/full. 

- Moreau, M., White, P., Mourot, F., Rawlinson, Z., Tschritter, C., Cameron, S., Westerhof, R., 2019. Classifcation of New Zealand Hydrogeological Systems. GNS Science Report 2018/35, URL: https://doi.org/10.21420/42QW-MC74. 

- Morgan, L.K., Mountjoy, J.J., 2022. Likelihood of offshore freshened groundwater in New Zealand. Hydrogeol. J. 30 (7), 2013–2026. http://dx.doi.org/10.1007/s10040022-02525-1, URL: https://link.springer.com/10.1007/s10040-022-02525-1. 

- NZSeaRise, 2023. Takiwa - Sea-level Rise. URL: https://searise.takiwa.co/map/ 6233f47872b8190018373db9/embed. 

- Paleologos, E., Sarris, T.S., Desbarats, A., 2000. Numerical estimation of effective hydraulic conductivity in leaky heterogeneous aquitards. In: Neuman, S.P., Zhang, D., Winter, C.L. (Eds.), Theory, Modeling, and Field Investigation in Hydrogeology: a Special Volume in Honor of Shlomo P. Neumans 60th Birthday. Geol. Soc. Am. 

- Pang, L., Close, M., 1999. Field-scale physical non-equilibrium transport in an alluvial gravel aquifer. J. Contam. Hydrol. 38 (4), 447–464. http://dx.doi.org/10. 1016/S0169-7722(99)00022-4, URL: https://linkinghub.elsevier.com/retrieve/pii/ S0169772299000224. 

- Pang, L., Close, M., Noonan, M., 1998. Rhodamine WT and Bacillus subtilis transport through an alluvial gravel aquifer. Groundwater 36 (1), 112–122, ISBN: 0017-467X Publisher: Wiley Online Library. 

- Perulero Serrano, R., Guadagnini, L., Riva, M., Giudici, M., Guadagnini, A., 2014. Impact of two geostatistical hydro-facies simulation strategies on head statistics under non-uniform groundwater flow. J. Hydrol. 508, 343–355. http://dx.doi.org/ 10.1016/j.jhydrol.2013.11.009, URL: https://linkinghub.elsevier.com/retrieve/pii/ S0022169413008251. 

- Pirot, G., Renard, P., Huber, E., Straubhaar, J., Huggenberger, P., 2015a. Influence of conceptual model uncertainty on contaminant transport forecasting in braided river aquifers. J. Hydrol. 531, 124–141. http://dx.doi.org/10.1016/j.jhydrol.2015. 07.036. 

- Pirot, G., Straubhaar, J., Renard, P., 2015b. A pseudo genetic model of coarse braided-river deposits. Water Resour. Res. 51, http://dx.doi.org/10.1002/ 2015WR017078. 

- Pool, M., Post, V.E.A., Simmons, C.T., 2015. Effects of tidal fluctuations and spatial heterogeneity on mixing and spreading in spatially heterogeneous coastal aquifers. Water Resour. Res. 51 (3), 1570–1585. http://dx.doi.org/10.1002/2014WR016068, URL: http://doi.wiley.com/10.1002/2014WR016068. 

- Post, V.E.A., Groen, J., Kooi, H., Person, M., Ge, S., Edmunds, W.M., 2013. Offshore fresh groundwater reserves as a global phenomenon. Nature 504 (7478), 71–78. http://dx.doi.org/10.1038/nature12858, URL: http://www.nature. com/articles/nature12858. 

- Renard, P., 2007. Stochastic hydrogeology: What professionals really need? Ground Water 45 (5), 531–541. http://dx.doi.org/10.1111/j.1745-6584.2007.00340.x. 

- Renard, P., Allard, D., 2013. Connectivity metrics for subsurface flow and transport. Adv. Water Resour. 51, 168–196. http://dx.doi.org/10.1016/j.advwatres.2011.12. 001, Publisher: Elsevier Ltd. 

- Rosen, M.R., White, P.A., 2001. Groundwaters of New Zealand. New Zealand Hydrological Society. 

- Sarris, T.S., Close, M., Abraham, P., 2018. Using solute and heat tracers for aquifer characterization in a strongly heterogeneous alluvial aquifer. J. Hydrol. 558, 55–71, ISBN: 0022-1694 Publisher: Elsevier. 

- Sarris, T.S., Close, M.E., Moore, C., 2019. Uncertainty assessment of nitrate reduction in heterogeneous aquifers under uncertain redox conditions. Stoch. Environ. Res. Risk Assess. 33 (8–9), 1609–1627. http://dx.doi.org/10.1007/s00477-019-01715-w, URL: http://link.springer.com/10.1007/s00477-019-01715-w. 

- Sarris, T.S., Kenny, A., Scott, D.M., Close, M.E., 2022. Aquifer heterogeneity controls to quality monitoring network performance for the protection of groundwater production wells. Water Res. 218, 118485. http://dx.doi.org/10.1016/j.watres.2022. 118485, URL: https://linkinghub.elsevier.com/retrieve/pii/S0043135422004390. 

- Sarris, T.S., Kenny, A., Scott, D.M., Moore, C., 2023. Transition probability analysis of lithology descriptions for probabilistic delineation of well capture zones. J. Hydrol. (New Zealand) 62 (1), 1–17, ISBN: 0022-1708 Publisher: New Zealand Hydrological Society (Inc.) Wellington, NZ. 

- Scott, M., Wilson, N., 2012. Seawater Intrusion Network Review. Technical Report, Environment Canterbury, URL: https://www.ecan.govt.nz/data/document-library. 

- Solórzano-Rivas, S., Werner, A., 2018. On the representation of subsea aquitards in models of offshore fresh groundwater. Adv. Water Resour. 112, 283–294. http://dx. doi.org/10.1016/j.advwatres.2017.11.025, URL: https://linkinghub.elsevier.com/ retrieve/pii/S0309170817308151. 

- Stewart, M.K., 2012. A 40-year record of carbon-14 and tritium in the Christchurch groundwater system, New Zealand: Dating of young samples with carbon-14. J. Hydrol. 430–431, 50–68. http://dx.doi.org/10.1016/j.jhydrol.2012.01.046, URL: https://linkinghub.elsevier.com/retrieve/pii/S0022169412001138. 

- Stewart, M.K., Trompetter, V., va der Raaij, R., 2002. Age and Source of Canterbury Plains Groundwater. Environment Canterbury Technical Report U02/30, April, p. 46, URL: https://www.ecan.govt.nz/data/document-library. 

- Stewart, M.K., van der Raaij, R., 2022. Response of the Christchurch groundwater system to exploitation: Carbon-14 and tritium study revisited. Sci. Total Environ. 817, 152730. http://dx.doi.org/10.1016/j.scitotenv.2021.152730, URL: https: //linkinghub.elsevier.com/retrieve/pii/S0048969721078098. 

- Talbot, J.D., Bowden, M.J., North Canterbury Catchment Board and Regional Water Board. Resources Division, 1986. The Christchurch Artesian Aquifers: a Report. Technical Report, Resources Division of the North Canterbury Catchment Board and Regional Water Board, Christchurch, N.Z.. 

- Thomas, A., Reiche, S., Riedel, M., Clauser, C., 2019. The fate of submarine fresh groundwater reservoirs at the New Jersey shelf, USA. Hydrogeol. J. 27 (7), 2673–2694. http://dx.doi.org/10.1007/s10040-019-01997-y, URL: http://link. springer.com/10.1007/s10040-019-01997-y. 

- Thomas, A., Zamrsky, D., Omosanya, K., Person, M., Mountjoy, J., Micallef, A., 2024. Offshore Freshened Groundwater Emplacement in an Evolving Siliciclastic Margin (Canterbury Bight, New Zealand): A 3D Modeling Approach. Copernicus Meetings, URL: https://doi.org/10.5194/egusphere-egu24-19836. 

- Van Engelen, J., Bierkens, M.F.P., Delsman, J.R., Oude Essink, G.H.P., 2021. Factors determining the natural fresh-salt groundwater distribution in Deltas. Water Resour. Res. 57 (1), http://dx.doi.org/10.1029/2020WR027290, URL: https://onlinelibrary. wiley.com/doi/10.1029/2020WR027290. 

- Vassena, C., Cattaneo, L., Giudici, M., 2010. Assessment of the role of facies heterogeneity at the fine scale by numerical transport experiments and connectivity indicators. Hydrogeol. J. 18 (3), 651–668. http://dx.doi.org/10.1007/s10040-0090523-2, URL: http://link.springer.com/10.1007/s10040-009-0523-2. 

- Velis, M., Conti, K.I., Biermann, F., 2017. Groundwater and human development: synergies and trade-offs within the context of the sustainable development goals. Sustain. Sci. 12 (6), 1007–1017. http://dx.doi.org/10.1007/s11625-017-0490-9, URL: http://link.springer.com/10.1007/s11625-017-0490-9. 

- Watson, T.A., Werner, A.D., Simmons, C.T., 2010. Transience of seawater intrusion in response to sea level rise. Water Resour. Res. 46 (12), http://dx.doi.org/10.1029/ 2010WR009564, URL: http://doi.wiley.com/10.1029/2010WR009564. 

- Werner, A.D., 2017. On the classification of seawater intrusion. J. Hydrol. 551, 619–631. http://dx.doi.org/10.1016/j.jhydrol.2016.12.012, URL: https:// linkinghub.elsevier.com/retrieve/pii/S0022169416308010. 

- Werner, A.D., Bakker, M., Post, V.E.A., Vandenbohede, A., Lu, C., Ataie-Ashtiani, B., Simmons, C.T., Barry, D., 2013. Seawater intrusion processes, investigation and management: Recent advances and future challenges. Adv. Water Resour. 51, 3–26. http://dx.doi.org/10.1016/j.advwatres.2012.03.004, URL: https: //linkinghub.elsevier.com/retrieve/pii/S030917081200053X. 

- Wilson, D.D., 1973. The significance of Geology in some current water resource problems, canterbury plains, New Zealand. J. Hydrol. (New Zealand) 12 (2), 103–118, URL: https://www.jstor.org/stable/43944279. 

- Xu, Z., Bassett, S.W., Hu, B., Dyer, S.B., 2016. Long distance seawater intrusion through a karst conduit network in the Woodville Karst Plain, Florida. Sci. Rep. 6 (1), 32235. http://dx.doi.org/10.1038/srep32235, URL: http://www.nature.com/ articles/srep32235. 

- Yu, X., Michael, H.A., 2019a. Mechanisms, configuration typology, and vulnerability of pumping-induced seawater intrusion in heterogeneous aquifers. Adv. Water Resour. 128, 117–128. http://dx.doi.org/10.1016/j.advwatres.2019.04.013, URL: https://linkinghub.elsevier.com/retrieve/pii/S030917081830959X. 

- Yu, X., Michael, H.A., 2019b. Offshore pumping impacts onshore groundwater resources and land subsidence. Geophys. Res. Lett. 46 (5), 2553–2562. http:// dx.doi.org/10.1029/2019GL081910, URL: https://onlinelibrary.wiley.com/doi/10. 1029/2019GL081910. 

- Zamrsky, D., Essink, G.H.P.O., Sutanudjaja, E.H., van Beek, L.P.H.R., Bierkens, M.F.P., 2022. Offshore fresh groundwater in coastal unconsolidated sediment systems as a potential fresh water source in the 21st century. Environ. Res. Lett. 17 (1), 014021. http://dx.doi.org/10.1088/1748-9326/ac4073, URL: https://iopscience. iop.org/article/10.1088/1748-9326/ac4073. 

13 

_C.A. Cleary et al._ 

_Journal of Hydrology 661 (2025) 133455_ 

- Zamrsky, D., Karssenberg, M.E., Cohen, K.M., Bierkens, M.F.P., Oude Essink, G.H.P., 2020. Geological heterogeneity of coastal unconsolidated groundwater systems worldwide and its influence on offshore fresh groundwater occurrence. Front. Earth Sci. 7, 339. http://dx.doi.org/10.3389/feart.2019.00339, URL: https://www. frontiersin.org/article/10.3389/feart.2019.00339/full. 

- Zamrsky, D., Oude Essink, G.H.P., Bierkens, M.F.P., 2024. Global impact of sea level rise on coastal fresh groundwater resources. Earth’s Futur. 12 (1), http://dx.doi. org/10.1029/2023EF003581, e2023EF003581, URL: https://agupubs.onlinelibrary. wiley.com/doi/10.1029/2023EF003581. 

   - Zech, A., Attinger, S., Cvetkovic, V., Dagan, G., Dietrich, P., Fiori, A., Rubin, Y., Teutsch, G., 2015. Is unique scaling of aquifer macrodispersivity supported by field data? Water Resour. Res. 51 (9), 7662–7679. http://dx.doi.org/10.1002/ 2015WR017220, URL: http://doi.wiley.com/10.1002/2015WR017220. 

   - Zheng, C., Bianchi, M., Gorelick, S.M., 2011. Lessons learned from 25 years of research at the MADE site. Ground Water 49 (5), 649–662. http://dx.doi.org/ 10.1111/j.1745-6584.2010.00753.x, URL: https://onlinelibrary.wiley.com/doi/10. 1111/j.1745-6584.2010.00753.x. 

- Zappa, G., Bersezio, R., Felletti, F., Giudici, M., 2006. Modeling heterogeneity of gravel-sand, braided stream, alluvial aquifers at the facies scale. J. Hydrol. 325 (1–4), 134–153. http://dx.doi.org/10.1016/j.jhydrol.2005.10.016, URL: https: //linkinghub.elsevier.com/retrieve/pii/S0022169405005391. 

14 

