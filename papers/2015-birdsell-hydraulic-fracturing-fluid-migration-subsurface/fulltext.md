# Hydraulic fracturing fluid migration in the subsurface: A review and expanded modeling results

**Authors:** Daniel T. Birdsell, Harihar Rajaram, David Dempsey, Hari S. Viswanathan  
**Published in:** Water Resources Research (2015)  
**DOI (version of record):** https://doi.org/10.1002/2015wr017810  
**This copy:** Accepted manuscript (peer-reviewed, author's version). Text extracted from the PDF at https://ddempsey.github.io/papers/2015-birdsell-hydraulic-fracturing-fluid-migration-subsurface/birdsell2015-hydraulic-fracturing-fluid.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** An edited version of this paper was published by AGU. Published 2015 American Geophysical Union. Version of record: https://doi.org/10.1002/2015wr017810  

---
# PUBLICATIONS 

## <u>Water Resources Research</u> 

#### RESEARCH ARTICLE 

10.1002/2015WR017810 

###### Special Section: 

The 50th Anniversary of Water Resources Research 

###### Key Points: 

- Numerical model tracks movement of fracturing fluid toward aquifer 

- Imbibition and well suction sequester and remove fluid and keep it from aquifer 

- Aquifer contamination requires presence of permeable pathway 

###### Supporting Information: 

- Supporting Information S1 

- Data Set S1 

- Data Set S2 

- Data Set S3 

- Data Set S4 

- Data Set S5 

- Data Set S6 

- Data Set S7 

- Data Set S8 

Correspondence to: 

### Hydraulic fracturing fluid migration in the subsurface: A review and expanded modeling results 

Daniel T. Birdsell<sup>1</sup> , Harihar Rajaram<sup>1</sup> , David Dempsey<sup>2,3</sup> , and Hari S. Viswanathan<sup>2</sup> 

1Department of Civil, Environmental, and Architectural Engineering, University of Colorado, Boulder, Colorado, USA, 2Earth and Environmental Sciences Division, Los Alamos National Laboratory, Los Alamos, New Mexico, USA, 3Department of Geophysics, Stanford University, Stanford, California, USA 

Abstract Understanding the transport of hydraulic fracturing (HF) fluid that is injected into the deep subsurface for shale gas extraction is important to ensure that shallow drinking water aquifers are not contaminated. Topographically driven flow, overpressured shale reservoirs, permeable pathways such as faults or leaky wellbores, the increased formation pressure due to HF fluid injection, and the density contrast of the HF fluid to the surrounding brine can encourage upward HF fluid migration. In contrast, the very low shale permeability and capillary imbibition of water into partially saturated shale may sequester much of the HF fluid, and well production will remove HF fluid from the subsurface. We review the literature on important aspects of HF fluid migration. Single-phase flow and transport simulations are performed to quantify how much HF fluid is removed via the wellbore with flowback and produced water, how much reaches overlying aquifers, and how much is permanently sequestered by capillary imbibition, which is treated as a sink term based on a semianalytical, one-dimensional solution for two-phase flow. These simulations include all of the important aspects of HF fluid migration identified in the literature review and are performed in five stages to faithfully represent the typical operation of a hydraulically fractured well. No fracturing fluid reaches the aquifer without a permeable pathway. In the presence of a permeable pathway, 10 times more fracturing fluid reaches the aquifer if well production and capillary imbibition are not included in the model. 

H. Rajaram, hari@colorado.edu 

Citation: 

Birdsell, D. T., H. Rajaram, D. Dempsey, and H. S. Viswanathan (2015), Hydraulic fracturing fluid migration in the subsurface: A review and expanded modeling results, Water Resour. Res., 51, 7159–7188, doi:10.1002/2015WR017810. 

###### Received 7 JUL 2015 

Accepted 28 JUL 2015 Accepted article online 30 JUL 2015 Published online 5 SEP 2015 

VC 2015. American Geophysical Union. All Rights Reserved. 

##### 1. Introduction 

Hydraulic fracturing (also known as fracking, hereinafter referred to as HF) and horizontal drilling have emerged as attractive technologies for extracting gas and oil from unconventional shale reservoirs [Kerr, 2010]. There are abundant supplies of natural gas in the U.S., which greatly increases U.S. energy independence [Kerr, 2010; Moniz et al., 2011; Hinton, 2012]. As of 2013, shale gas was also being developed in Canada, China, and Europe to a lesser degree [U.S. Energy Information Administration, 2013; Kissinger et al., 2013; Lange et al., 2013; Cai and Ofterdinger, 2014]. Furthermore, natural gas can act as a bridge fuel to alternative energy sources because natural gas power plants produce significantly less CO2 per kilowatt hour than coal power plants [Kerr, 2010; Moniz et al., 2011]. The dramatic increase in the number of horizontal, hydraulically fractured wells has also spurred public concern and has prompted the EPA to study the environmental impacts of hydraulic fracturing [U.S. Environmental Protection Agency, 2012; Reagan et al., 2015]. 

One of the concerns is that HF fluid and/or highly saline brine could migrate upward from a shale gas unit and enter shallow drinking water aquifers. There are a number of other situations in which upward migration of subsurface fluids is undesirable, such as stray gas migration, geologic carbon sequestration, and deep injection to dispose of waste fluids. One might think that HF fluid migration is less likely than the aforementioned situations because: (i) fluids are injected for a much longer duration without being produced in the case of carbon sequestration and deep well disposal and (ii) because free-phase natural gas and CO2 are substantially more buoyant than HF fluid [Viswanathan et al., 2008; Engelder, 2012; Kissinger et al., 2013; Reagan et al., 2015]. Field observations support this intuition. For example, there is only one confirmed case of HF fluids migrating to drinking water aquifers via subsurface pathways (which occurred in Jackson County, West Virginia in 1982 [U.S. Environmental Protection Agency, 1987]), whereas thermogenic stray gas appears in drinking water wells quite frequently [Osborn et al., 2011; Jackson et al., 2013]. 

SUBSURFACE FLOW MODEL OF FRACTURING FLUIDS 

BIRDSELL ET AL. 

7159 

Water Resources Research 

10.1002/2015WR017810 

HF fluids are comprised of 99% water and proppant and 1% other chemicals used as viscosity adjusters, friction reducers, biocides, surfactants, scaling inhibitors, acids to help dissolve minerals, and for other purposes [U.S. Department of Energy, 2009; King, 2012]. While many of the additives are biodegradable and/or have low toxicity, approximately one-third of the chemicals studied by Stringfellow et al. [2014] do not have toxicity data, some are toxic, and some are known or suspected carcinogens. Based on investigations of mobility, persistence, and toxicity, Rogers et al. [2015] concluded that 15 commonly used HF chemicals can travel over a setback distance of 94 m, at concentrations >10% of injected concentrations. Nine of these 15 chemicals have either a maximum contaminant level or health assessment information associated with them. Of the 1000–22,000 m<sup>3</sup> of HF fluid that is injected [Byrnes, 2011; Myers, 2012a; Kissinger et al., 2013; Cipolla and Wallace, 2014], 5–50% is estimated to return to the surface as flowback or produced water [Byrnes, 2011; Engelder, 2012; King, 2012], 3–95% could be imbibed into the shale matrix and permanently sequestered [Birdsell et al., 2015], and the rest is subject to subsurface flow and transport. 

Various researchers have used numerical models to suggest that HF fluid migration from the shale reservoir to an overlying drinking water aquifer may be possible [Myers, 2012a; Gassiat et al., 2013; Kissinger et al., 2013]. These numerical models accounted for different aspects of HF fluid migration, and some of their assumptions have been questioned [Saiers and Barth, 2012; Cohen et al., 2013; Flewelling and Sharma, 2015]. Furthermore, other researchers use laboratory data and/or analytical solutions to suggest that aquifer contamination via a subsurface pathway is virtually impossible or would occur over extremely long time scales (>10<sup>6</sup> years) [Engelder et al., 2014; Flewelling and Sharma, 2014]. Improved numerical models can serve as important tools for investigating and quantifying the long-term effect of HF on drinking water aquifers. 

In order to realistically assess the risks of HF fluid migration from the deep subsurface to a shallow aquifer, a number of key processes must be accounted for. These processes are listed here and are discussed in more detail in section 2. In order for flow to occur, there must be a driving force and a pathway. Drivers of upward HF fluid flow can include upward hydraulic gradients associated with topographically driven flow, overpressure in shale reservoirs, increased pressure within the shale due to injection of HF fluid, and buoyancy resulting from the density difference between the HF fluid and the native brine [Myers, 2012a; Gassiat et al., 2013; Kissinger et al., 2013]. Permeable pathways could include wellbores, faults, joints, induced fractures, or some combination thereof [Engelder et al., 2009; U.S. Environmental Protection Agency, 2012]. There are also a number of processes that work to sequester or remove HF fluid from the subsurface so that it cannot reach an aquifer by a subsurface pathway. For example, capillary imbibition draws wetting phase fluid (e.g., HF fluid and brine) into unsaturated shale, sequestering it for ‘‘geologic periods of time’’ under large capillary pressure [Byrnes, 2011; Engelder, 2012]. Imbibition may explain the low amount of flowback water observed in the field [Engelder et al., 2014]. The migration of any HF fluid that is not imbibed may be hindered by reduced relative permeability within the shale gas reservoir due to the presence of multiple phases, such as HF fluid, gas, oil, and/or brine. Well production decreases overpressure and has the effect of drawing fluids toward the well, where they may be removed from the subsurface as flowback or produced water. 

Based on these key processes of HF fluid migration, there are number of interesting research questions that remain unanswered. For example, do buoyancy and pressure buildup during injection move HF fluid vertically to large distances away from the well, and/or will subsequent production draw the buoyant plume back to the well and remove it from the subsurface despite the initial thrust? How much imbibition can occur? Does it drastically decrease the potential for aquifer contamination, and does it explain the low amount of flowback water? Is a permeable pathway, such as a fault or leaky well required to see aquifer contamination, and does the orientation, size, and shape of the permeable pathway make a difference? How does an overpressured reservoir interact with the pressure transient associated with injection and production? 

In this paper, we first review recent research on HF fluid migration, including drivers of HF fluid flow, permeable pathways, capillary imbibition, and characterization of major U.S. shale gas plays. We then discuss and evaluate conceptual frameworks employed in previous numerical modeling studies of HF fluid migration. Since no previous studies have combined all of the key processes of HF fluid migration, we present a comprehensive numerical model that includes all the processes identified in section 2. We present simulations and sensitivity analyses of potential aquifer contamination over a 1000 year time scale. The U.S. Environmental Protection Agency [2012] does not recommend specific time scales for the evaluation of potential impacts 

SUBSURFACE FLOW MODEL OF FRACTURING FLUIDS 

BIRDSELL ET AL. 

7160 

Water Resources Research 

10.1002/2015WR017810 

of hydraulic fracturing on drinking water resources. Previous modeling studies have considered time scales ranging from 2 years [Reagan et al., 2015] for short-term migration of methane to 30–100 years [Kissinger et al., 2013] to >1000 years [Gassiat et al., 2013] for HF fluids. The typical time scale of 20–30 years associated with natural gas or oil production is well within the management time horizon for groundwater aquifers. Time scales of interest for nuclear waste disposal are on the order of tens of thousands of years, if not longer [U.S. National Research Council, 1996], because some radionuclides have very long half-lives. It is highly unlikely that HF chemicals would have a significant impact over such long time scales. Gassiat et al. [2013] employed a time scale of 1000 years because it was suggested as a full, ethical time horizon for human impact on biophysical systems [Lenton, 2011]. Our choice of a 1000 year time scale follows the approach of Gassiat et al. [2013] and we also report behavior at shorter time scales. 

##### 2. Factors Controlling Vertical Migration of HF Fluids 

This section summarizes the current understanding of factors influencing HF fluid migration. The factors discussed include drivers of upward flow, permeable pathways, capillary imbibition, relative permeability, and salient features of major shale gas plays. 

###### 2.1. Drivers of Upward HF Fluid Flow 

Of the mechanisms that could potentially drive upward migration of HF fluid, some are persistent while others are short lived; some result directly from HF while others are preexisting mechanisms that may be active in conjunction with HF. The four mechanisms outlined below are: (1) topographically driven flow in a regional groundwater discharge zone, (2) overpressure in a shale gas reservoir, (3) the increase in pressure due to HF fluid injection, and (4) buoyancy of HF fluid. Figure 1 shows the types of vertical pressure distributions that can lead to upward flow. 

Upward flow from the deep subsurface can occur in regional groundwater discharge zones driven by topography [Deming, 2001]. This is a persistent feature of the steady state hydrologic system which is driven by the elevated water table on either side of a valley bottom discharge zone [Deming, 2001]. Upward flow in regional discharge zones will likely continue before and after hydraulic fracturing occurs, although travel times to shallow aquifers and magnitudes of upward fluxes may be altered by the changes in permeability associated with hydraulic fracturing, as was shown by Myers [2012a]. 

Overpressure in shale reservoirs can drive upward flow if vertical hydraulic connectivity is sufficient [Warner et al., 2012a, 2012b]. Osborne and Swarbrick [1997] identify three broad mechanisms for overpressure generation: (1) increase in compressive stress, (2) changes in the volume of the pore fluid or rock matrix, and (3) fluid movement or buoyancy. The most probable and significant sources of overpressure in shale gas reservoirs are disequilibrium compaction and hydrocarbon generation [Osborne and Swarbrick, 1997; Deming, 2001]. Disequilibrium compaction occurs when low-permeability units are buried rapidly. The pore fluid cannot escape and therefore the porosity does not decrease as much as it would normally during burial, which ultimately increases the amount of overburden stress that is supported by pore fluid pressure. Hydrocarbon generation, which falls under the second mechanism listed above [Osborne and Swarbrick, 1997], changes kerogen to less dense oil or gas and the associated volume expansion increases the pore pressure. Other proposed sources of overpressure include tectonic compression, aquathermal expansion, mineral diagenesis, osmosis, and hydrocarbon buoyancy, but they are either unlikely or are able only to effect small increases in pressure [Osborne and Swarbrick, 1997; Deming, 2001]. The literature is somewhat vague on whether reservoir overpressure is applied to the wetting fluid, the nonwetting fluid, or both [e.g., Osborne and Swarbrick, 1997; Deming, 2001]. In principle, if the overpressure is assumed to exist in the nonwetting phase, the pressure in the wetting fluid may be calculated from the wetting fluid saturation and the capillary pressure-saturation function for shale. However, none of the previous modeling studies reviewed here employ such a representation. Nunn [2012] suggests that overpressure exists in the wetting phase. The simulations of Gassiat et al. [2013] and the simulations presented later in this paper specify overpressure in the wetting phase. 

In addition to a source of overpressure, a three-dimensional seal for the overpressure must exist. Capillary sealing, in which a nonwetting phase (e.g., gas) occupies the large pores and a wetting phase (e.g., brine) occupies small pores and reduces the other phase’s relative permeability, is a plausible sealing mechanism [Deming, 2001]. Additionally, the low permeability of the shale reservoir helps to contain gas and 

SUBSURFACE FLOW MODEL OF FRACTURING FLUIDS 

BIRDSELL ET AL. 

7161 

Water Resources Research 

10.1002/2015WR017810 

Figure 1. Vertical pressure distributions for a variety of scenarios that would drive flow upward from the deep subsurface. The ‘‘Regional Discharge’’ scenario has pressure above hydrostatic at depth and is used by Myers [2012a] and many of the simulations presented in this paper. The ‘‘Overpressure’’ scenario is used by Gassiat et al. [2013] and defines all the pressure within the shale based on pressure gradient of 13 kPa/m from the surface so that P � 2z � 13 kPa in the shale and all the pressure above the shale is hydrostatic. The ‘‘Overpressure 1 Regional Discharge’’ curve has pressure above the shale defined from the regional discharge scenario, and adds 1–6 MPa of overpressure within the shale depending on the sensitivity analysis scenario (section 6.2.3). Also shown are the hydrostatic and lithostatic pressure. Note: this figure assumes qw 51000 kg/m<sup>3</sup> whereas the simulations presented later in this paper calculate qw as a function of salinity. Therefore, the pressure distributions shown are conceptually correct but do not match the numerical values presented in later simulations. 

overpressure. Hydraulic fracturing creates permeability and destroys pressure seals, thus releasing overpressure. This can cause flow of HF fluid, brine, and hydrocarbons upward and away from the shale reservoir until the overpressure is dissipated. 

Increased pressure due to injection of HF fluids is the third potential driver of upward flow. Downhole pressures must be increased to at least the minimum principal stress, which tends to be nearly the lithostatic pressure (70– 90% of lithostatic), to induce fractures [Osborne and Swarbrick, 1997]. These high injection pressures drive fluids radially away from the well. Typically the well will allow for flowback and production within days to weeks of injection, so the increased pressure due to hydraulic fracturing will be short lived. But there are anecdotal accounts of ‘‘extended shut-ins,’’ which can last up to 6 months [Cheng, 2012]. During extended shut-ins, pressure will not be released via the well and may cause continued flow away from the well. 

Buoyancy is also a potential driver of upward flow. Buoyancy forces are generated because the injected fluids are typically less dense than the formation brines. Density increases linearly with salinity [Simmons et al., 2001], and natural brines in North America can be quite saline (up to 500 g/L [Gassiat et al., 2013]) whereas fracturing fluids typically have very low salinity [Engelder et al., 2014]. As the HF fluid remains in the subsurface, it will mix with the brine and the density contrast will decrease. Nevertheless, there will be an initial upward force on a plume of HF fluid surrounded by brine. This initial buoyant force may be large enough to drive a HF fluid plume upward to the point that some HF fluid escapes the pressure drawdown during production and the associated flow reversal, thus creating favorable conditions for significant upward migration. 

###### 2.2. Permeable Pathways 

The typical vertical separation between shale gas reservoirs and overlying groundwater aquifers is quite large (of the order of thousands of feet) [U.S. Department of Energy, 2009] and is discussed in section 3. The geological formations in between the shale reservoir and aquifers typically include low-permeability formations, and models suggest that significant upward transport of injected fluids is unlikely unless there are permeable pathways, such as fractures and faults [Myers, 2012a; Gassiat et al., 2013; Kissinger et al., 2013]. The key question is whether continuous connected pathways exist across such large vertical extents. One would expect that as the separation distance between reservoir and aquifer decreases, the likelihood of such pathways would increase. In the context of the Marcellus shale, Warner et al. [2012a] presented evidence for the possible migration of Marcellus brine into shallow formations, which suggests the existence of conductive pathways. In response, Engelder [2012] posited that the Marcellus shale has very little free brine, with a water saturation of only 23% and hence held by capillary forces that make it largely immobile. Warner et al. [2012b] replied providing various lines of potential evidence for the existence of hydraulic connections, and Llewellyn [2014] describes the mechanisms by which brines could migrate to shallow aquifers in the Appalachian basin. This debate about the existence and frequency of permeable pathways continues today [e.g., U.S. Environmental Protection Agency, 2012; Lange et al., 2013; Gassiat et al., 2013; Ingraffea et al., 2014; Flewelling and Sharma, 2015; Lefebvre et al., 2015]. An additional consideration is whether induced 

SUBSURFACE FLOW MODEL OF FRACTURING FLUIDS 

BIRDSELL ET AL. 

7162 

Water Resources Research 

10.1002/2015WR017810 

hydraulic fractures can connect to natural permeable pathways or compromised wellbores. The potential scenarios for aquifer contamination outlined by the U.S. Environmental Protection Agency [2012] include various combinations of induced hydraulic fractures and natural permeable pathways (faults, compromised wellbores in offset wells). In the following subsections, we discuss the factors influencing permeable pathways in greater detail. 

###### 2.2.1. Fractures, Faults, and Joints 

Faults and joints are natural imperfections in geological strata. They can act as permeable conduits for flow if there is an open aperture, or they can act as a capillary barrier to flow if there are multiple phases present. Fault zones typically have a core region with low permeability due to mineral precipitation and other regions of high permeability at the peripheral reaches of the fault zone [Fairley et al., 2003]. Faults, fractures, and joints generally propagate vertically below �600 m depth and horizontally at shallower depths due to lithostatic pressure [Fisher and Warpinski, 2012]. There are reports in the petroleum industry that suggest that favorable oil/gas production occurs where natural faults, joints, and fractures exist; horizontal wells should be oriented to cross and drain joint sets to increase production [Engelder et al., 2009]. Warner et al. [2012b] note that the joint sets in the Marcellus described by Engelder et al. [2009] are also present in the overlying formations and may thus provide hydraulic connectivity from the Marcellus to shallower formations. 

Fisher and Warpinski [2012] summarize field data on the height of growth of induced hydraulic fractures in the Barnett, Woodford, Marcellus, and Eagle Ford shales, inferred from microseismic monitoring. While microseismic events capture many fracture propagation events, some studies show that long-period longduration seismic events indicate slow slip events related to hydraulic fracturing operations that microseismic data will not reveal [Das and Zoback, 2013a,b]. Fisher and Warpinski [2012] also discuss various factors that control the propagation of hydraulic fractures. Hydraulic fractures typically grow in a direction perpendicular to the least principal stress, which favors vertical growth only at depths greater than �600 m. At shallower depths, horizontal propagation is favored, thus limiting vertical growth and preventing propagation toward drinking water aquifers. Fisher and Warpinski [2012] also note that simple volumetric considerations would suggest that even with the large volumes of HF fluids injected, typical upward growth extents would be in the range of tens to hundreds of meters, which is largely supported by their data. 

The largest vertical ascents of hydraulic fractures in the Barnett Shale are associated with fault interceptions, and even in these instances, the vertical ascent is rarely >300 m. Very little out-of-formation growth of hydraulic fractures occurs in the Woodford and Eagle Ford shales [Fisher and Warpinski, 2012]. The general nature of hydraulic fractures and height growth is very similar in the Woodford and Barnett shale reservoirs, despite the complex geology of the former, which includes substantial faulting and highly dipping beds. The highest vertical ascent heights are observed in the Marcellus, with extreme heights as large as 460 m. However, even the highest hydraulic fracture ascents puts them >600 m below the deepest groundwater aquifers [Fisher and Warpinski, 2012]. Fisher and Warpinski [2012] also discuss several mechanisms that restrict the vertical growth of hydraulic fractures, the most notable being the blunting by natural fracture networks and weak geologic layers/interfaces; the limited fluid volumes injected and the short durations associated with hydraulic fracturing. Davies et al. [2012] synthesized height information on stimulated and natural hydraulic fractures in the form of frequency distributions. Their analysis suggests that the probability of upward growth >350 m is �1%. Davies et al. [2012] also note that the tallest vertical ascent is associated with fault interceptions, based on the interpretations of Warpinski and Mayerhofer [2008], and they point out that natural hydraulic fractures tend to propagate much farther than stimulated hydraulic fractures because they are driven by substantially larger fluid volumes over very long durations [Davies et al., 2012]. 

The scenarios laid out in the U.S. Environmental Protection Agency [2012] report are based on the premise that propagation of induced hydraulic fractures can indeed produce some of the connections involved, albeit with a low probability. Several recent papers have attempted to model the geomechanics of hydraulic fracture propagation and activation of natural pathways connected to them [Dahi-Taleghani and Olson, 2011; Kim and Moridis, 2013; Rutqvist et al., 2013; Kim and Moridis, 2015]. The initial sense from these papers supports the notion of limited vertical ascent of hydraulic fractures reflected in the observations discussed above. The simulation results reported in some of these papers do not suggest unstable fracture propagation in geological settings typical of shale gas reservoirs. The interactions between preexisting natural fractures and induced fractures are also highlighted by Dahi-Taleghani and Olson [2011]. We anticipate 

SUBSURFACE FLOW MODEL OF FRACTURING FLUIDS 

BIRDSELL ET AL. 

7163 

Water Resources Research 

10.1002/2015WR017810 

significant future developments in hydraulic fracture propagation simulators. From an industry perspective, these forthcoming simulators will facilitate improvements in the design of hydraulic fracturing operations and technology. As an additional benefit, they will further improve understanding of out-of-formation hydraulic fracture propagation and interaction with preexisting fractures and faults, which may be of interest in the context of HF fluid and gas migration. 

2.2.2. Wellbore Integrity 

The goal of wellbore integrity is to keep fluids from crossing between geologic formations (e.g., from target reservoir to aquifer). The hydraulically fractured well, other nearby active wells, and nearby abandoned wells can all act as pathways for communication if they are poorly constructed or are compromised. For abandoned wells to serve as potential pathways, they must also be deep enough to be intersected by hydraulically induced fractures, or become connected to them via overlying natural fractures/faults. In this section we describe well construction, common ways that wells can fail, and additional risk factors for wellbore integrity. 

Although there is no ‘‘typical’’ casing/cementing combination [U.S. Environmental Protection Agency, 2015], the following description of well construction is intended to provide context for the subsequent discussion of leakage pathways. Modern onshore wells have a steel surface casing that usually extends below the deepest freshwater aquifer [U.S. Department of Energy, 2009; U.S. Environmental Protection Agency, 2015]. Cement is set between the surface casing and the formation outside of the casing. Within the surface casing is at least one steel casing strand (although some wells have many telescoping layers of steel casing). The innermost casing, called the production casing, usually runs all the way to the reservoir. Cement is placed between the production casing and the reservoir (and to some distance above it) to stop reservoir fluids and/or HF fluids from migrating into other formations. The production casing and the cement surrounding it are perforated within the target reservoir to allow injection of HF fluids and subsequent production of hydrocarbons. Cement is also placed between the casing and any known intermediate hydrocarbonbearing formations, but in many wells there is an open (uncemented) annulus in large regions between the bottom of the surface casing and the top of the reservoir cement [U.S. Environmental Protection Agency, 2015]. 

Wells can become compromised through cement or casing failure, but generally more than one barrier must fail for a leak to become possible due to the redundancies in well safety mechanisms [King and King, 2013]. Cement must be placed correctly initially and form a good bond with both the casing and the formation [Watson and Bachu, 2009], which requires the casing to be centered, the drilling mud to be displaced by the cement, and minimal gas channeling through unset cement [Choi et al., 2013]. Once placed, cement can experience mechanical (e.g., formation of microannulus and cracks) [Choi et al., 2013] and chemical [see Wojtanowicz, 2008; Carey, 2013; King and King, 2013] degradation. Casing failure can be caused by mechanical deformation, chemical degradation, or electrochemical corrosion [Viswanathan et al., 2008; Choi et al., 2013]. A good cement job around the casing decreases the chance of corrosion by brines (especially those with CO2), but many wells have sections with uncemented casings [U.S. Environmental Protection Agency, 2015]. Other potential causes of casing damage include erosion corrosion, hydrogen damage, biological corrosion, and galvanic corrosion [Choi et al., 2013]. 

There are additional risk factors for wellbore integrity. For example, deviated and horizontal wellbores in Alberta, Canada have an increased magnitude of surface-casing vent flow, a potential indicator of wellbore failure [Watson and Bachu, 2009], and an increased chance of cement and/or casing impairment as reported from a database of Pennsylvania well compliance reports [Ingraffea et al., 2014]. In Alberta, there is a strong, positive correlation between the price of oil when a well is drilled and the chance of surface-casing vent flow being observed between 1973 and 1999, which is likely due to economic incentives to drill more quickly and less carefully [Watson and Bachu, 2009]. Other factors that affect the chance of surface-casing vent flow include the presence of an uncemented casing, the method of well abandonment, the geographic area, the well type (e.g., drilled and abandoned versus cased and abandoned), and a number of other factors [Watson and Bachu, 2009]. Curiously, well age does not seem to be correlated to surfacecasing vent flow, which could be partially due to the fact that regulations did not require reporting for surface-casing vent flow until 1995 in Alberta [Watson and Bachu, 2009]. Nevertheless, previous eras of well development had less advanced zonal isolation technology and less stringent regulations [Watson and Bachu, 2009; King and King, 2013]. In the most extreme cases, the location of wells are unknown and 

SUBSURFACE FLOW MODEL OF FRACTURING FLUIDS 

BIRDSELL ET AL. 

7164 

Water Resources Research 

10.1002/2015WR017810 

therefore their integrity cannot be checked. For example, over 180,000 abandoned O&G wells are unaccounted for in Pennsylvania’s state database [Davies, 2011; Kang, 2014]. 

King [2014] discusses fracture hits (or frac hits), where an induced fracture opens communication to an offset well. The chance of fracture hits increases in reservoirs where planar fractures are more common than complex fractures and as the density of wells increases. It is possible in principle for a fracture hit to damage the integrity of an offset well [King, 2014]. 

###### 2.3. Imbibition and Relative Permeability 

Fracturing fluid migration is a multiphase flow problem in which gas or oil (the nonwetting phase) contained in the shale interacts with HF fluid or brine (the wetting phase). Most shale gas plays have low brine saturation (0.1–0.5), which gives rise to a number of multiphase flow effects such as capillary imbibition and reduced relative permeability [Byrnes, 2011; Engelder, 2012]. Capillary imbibition sequesters fluid so that it cannot migrate toward an overlying aquifer [Engelder, 2012], and relative permeability reduces the ability of one fluid phase to migrate in the presence of another fluid phase. 

HF fluids are imbibed from fractures into the shale matrix by both induced and spontaneous imbibition. Induced capillary imbibition occurs when the fluids in the fractures are under high pressure during injection and are driven into the matrix by the high pressure, and spontaneous capillary imbibition occurs during shut-in when capillary pressure gradients pull flow naturally into the matrix under capillary pressure gradients [Byrnes, 2011]. Injection typically lasts for a much shorter duration than shut-in, so the cumulative volume imbibed by spontaneous imbibition is expected to be larger than the volume from induced imbibition. For the rest of this paper, the terms ‘‘capillary imbibition’’ and ‘‘imbibition’’ refer to spontaneous capillary imbibition. 

The imbibition flux is generally accepted to be of the form q5A=pt **f** where A is the imbibition rate parameter with units of L T<sup>21=2</sup> and t is the time since imbibition started [McWhorter and Sunada, 1990]. The units of q are volume imbibed per unit fracture area per unit time (L T<sup>21</sup> ). Imbibition has been measured under laboratory conditions, but it is difficult to isolate the effects of capillary imbibition because reservoir conditions are difficult to replicate. Microfracturing and clay swelling generally occur when water is introduced, and sorption and osmotic pressure can also affect the rate of flow into the matrix [Roychaudhuri et al., 2011; Dehghanpour et al., 2013; Makhanov et al., 2014; Engelder et al., 2014]. Birdsell et al. [2015] calculated the imbibition rate parameter, A, for HF fluid in shale gas and shale oil reservoirs based on a one-dimensional, semianalytical model of two-phase countercurrent flow driven by capillary pressure (i.e., spontaneous imbibition) [McWhorter and Sunada, 1990]. Cumulative imbibition (Qcum) can be calculated from equation (1) [Birdsell et al., 2015] where Af is fracture area, which is on the order of 10<sup>6</sup> m<sup>2</sup> and is assumed to be created instantaneously; A depends on shale permeability, fluid viscosity, capillary pressure-relative permeabilitysaturation relationships, and initial fluid saturation; and t is the time since imbibition began. 

Relative permeability (kr) is a function of fluid saturation that ranges from zero to unity. When a nonwetting phase is present in the porous medium, occupies some of the pores and reduces the water’s ability to flow through those pores (0 < kr < 1). If the saturation becomes small enough that the water only exists in small, unconnected pores (called the residual saturation), then no water flow will occur (kr 5 0). One simple way to model relative permeability effects in a single-phase numerical model is to specify a saturation and apply the associated relative permeability across the associated region. In the context of HF fluid migration, relative permeability can reduce the ability of HF fluid to move toward the well during the production stage and out of the shale into overlying formations, as long as the shale remains unsaturated. 

##### 3. Salient Features of Major Shale Gas Plays 

There is a large body of literature on the characterization of major shale gas plays. U.S. Department of Energy [2009] Exhibit 11 has characteristics from the most active shale gas plays across the U.S. and Exhibit 31 contains a map of depths to the bottom of drinking water aquifers and shale gas reservoirs. Gassiat et al. [2013, Table 1] compiled a number of parameters from the Utica in Quebec, the Marcellus in New York and Pennsylvania, the Barnett in Texas, and world-wide averages for shale gas formations. Lange et al. [2013] provides 

SUBSURFACE FLOW MODEL OF FRACTURING FLUIDS 

BIRDSELL ET AL. 

7165 

Water Resources Research 

10.1002/2015WR017810 

|Table 1. Summary of Important Asp<br>Author|ects of Previous Mo<br>Injection and<br>Production|deling Studies<br>Driving Force for Flow|Buoyancy|Imbibition|Fluid|
|---|---|---|---|---|---|
|Myers[2012a]|Yes|Dhimposed at boundaries|No|No|HF Fluid|
|Kissinger et al. [2013, Scenario 1]|Injection|DPfrom injection|Yes|No|HF Fluid|
|Kissinger et al. [2013, Scenario 2]|No|Pfrom artesian aquifer|Yes|No|HF Fluid|
|Kissinger et al. [2013, Scenario 3]|No|Flux from reservoir|Yes|Yes|Gas|
|Gassiat et al. [2013]|No|Reservoir Overpressure|Yes|No|HF Fluid|
|Reagan et al. [2015]|Production|Buoyancy and well(s)|Yes|Yes|Gas|
|Our model|Yes|Dhimposed at boundaries|Yes|Yes|HF Fluid|

detailed hydrogeological information about unconventional gas reservoirs and the major overlying formations in the Lower Saxony Basin and the Munsterland€ Cretaceous Basin in Germany. Fisher and Warpinski [2012] show fracture height data and depth to drinking water for thousands of fracturing treatments in four major shale plays. We expect that the separation distance between the aquifer and the reservoir will affect HF fluid transport to aquifers since Reagan et al. [2015] show that it affects gas transport to aquifers. In the following subsections, we highlight characteristics of the Marcellus shale and other U.S. shale plays relevant to the present discussion, including geology, depth to shale reservoirs, and separation distances between shale reservoirs and drinking water. 

###### 3.1. Marcellus 

The Marcellus shale is probably the most well-characterized shale gas reservoir in the literature. It is a black shale belonging to the Middle Devonian epoch that runs from Central and Western New York through Pennsylvania and into West Virginia and eastern Ohio [Engelder et al., 2009; U.S. Department of Energy, 2009]. It is overlain by the Mahantango formation and the Tully Limestone in the Middle Devonian and the Brallier formation, the Lock Haven formation, and the Catskill formation in the Upper Devonian [Molofsky et al., 2011]. The overlying formations in both the Middle and Upper Devonian contain a mixture of sandstone, siltstone, mudstone, limestone, and shale. The permeability and porosity vary greatly from strata to strata. A recent comment suggested that an appropriate equivalent effective permeability for all formations between a typical shale gas formation and the deepest freshwater aquifer would be 10<sup>218</sup> –10<sup>217</sup> m<sup>2</sup> [Flewelling and Sharma, 2015]. In the Fifth Elk sandstone in the Lock Haven formation, the porosity is 0.069– 0.16, which is typical of Upper Devonian sandstones in the Central Appalachian basin [Laughrey et al., 2004]. 

Could a permeable pathway exist from the Marcellus to an overlying drinking water aquifer? There were �10; 000 wells drilled into the Marcellus as of 2012 and as many as 80,000 could eventually be drilled [Downing, 2012; Beauge, 2013]. Each one of these wells has a small chance of providing a connected path. Additionally, some combination of fractures, faults, joints, and wells could potentially act as a permeable pathway between the Marcellus and a shallower drinking water aquifer. The deepest historic gas shows in Northeastern Pennsylvania are in the Lock Haven formation according to Molofsky et al. [2011]. However, there are >180,000 wells in Pennsylvania whose depths are unknown [Davies, 2011]. Distances between the bottom of the Lock Haven and the Marcellus are �1000 m [Molofsky et al., 2011, Figure 2b]. A large induced hydraulic fracture in the Marcellus can extend �450 m above the top of the Marcellus [Fisher and Warpinski, 2012]. That leaves approximately 550 m between the top of the induced hydraulic fracture and the bottom of a well in the Lock Haven. It may be possible for additional joints or faults to connect the intermediate 550 m between a runaway fracture and a Lock Haven well. 

Water content and overpressure affect imbibition and the upward flux of HF fluid. Brine saturation is in the range of 0.05–0.6 (median 0.23) in most of the Marcellus, but in some sections can approach full saturation [Engelder, 2012; Engelder et al., 2014]. Imbibition will not occur at full saturation [Birdsell et al., 2015]. The Utica shale, which underlies the Marcellus, and the northern part of the Marcellus are overpressured [Gassiat et al., 2013]. 

###### 3.2. Notable Features of Other U.S. Shale Plays 

The other U.S. shale plays generally share similar characteristics with the Marcellus, but this paragraph notes any attributes of other plays that are expected to influence the chances of HF fluid migration toward aquifers. The Antrim and Barnett shales have been extensively targeted, with more than 9000 and 10,000 wells 

SUBSURFACE FLOW MODEL OF FRACTURING FLUIDS 

BIRDSELL ET AL. 

7166 

Water Resources Research 

10.1002/2015WR017810 

Figure 2. A cross-section schematic of our model (not to scale), which shares many aspects of previous conceptual models [Myers, 2012a; Gassiat et al., 2013; Kissinger et al., 2013]. The blue region at the top indicates the drinking water aquifer; the light brown indicates overburden and underburden. The gray indicates the shale gas unit. Red outlines indicate the simulated domain. The black line within the shale indicates the horizontal wellbore. Above and below the horizontal wellbore are orange regions that indicate where imbibition occurs. The green box indicates the region over which HF affects permeability. The vertical permeable pathway extending from the top of the shale to the bottom of the aquifer is shown with a solid black line. In different scenarios, this pathway represents a fault or wellbore pathway. 

drilled into the formations, respectively [U.S. Department of Energy, 2009], and the Antrim shale has a natural fracture network [Curtis, 2002]. The Eagle Ford, Woodford, and Barnett shales all have a smaller fraction of out of formation fractures and generally smaller fracture heights than the Marcellus [Fisher and Warpinski, 2012]. Hydraulic fractures in the Barnett grow in a complex rather than a planar manner [King, 2014], which could explain why they tend to propagate over smaller vertical distances than the fractures in the Marcellus. The Woodford is most notable for its complex geology which includes faulting and steeply dipping bedding planes [Fisher and Warpinski, 2012]. The New Albany, Antrim, Fayetteville, and Eagle Ford all have regions that are �1000 m deep [U.S. Department of Energy, 2009]. The separation distances between the top of the shale and the bottom of the aquifer are especially small in the New Albany and the 

Antrim (30–490 and 90–580 m, respectively) [U.S. Department of Energy, 2009]. The Bakken, New Albany, and Antrim plays are all expected to have less HF fluid sequestered by imbibition because of the higher ratio of oil to gas in the reservoir for the Bakken shale [Birdsell et al., 2015] and because of the higher water saturation implied by the large amounts of produced water in the New Albany and Antrim shales [U.S. Department of Energy, 2009]. The Niobrara, in the Denver-Julesburg Basin, is overlain by the thick (>1.5 km) [Scott and Cobban, 1965; Robson and Banta, 1995], low-permeability (10<sup>220</sup> < k < 10<sup>218</sup> m<sup>2</sup> ) [Neuzil, 1994] Pierre shale. This low-permeability overburden is expected to reduce the chance of upward fluid migration. 

##### 4. Summary of Previous Modeling Studies 

Several numerical modeling studies have investigated the prospects for vertical HF fluid migration [Myers, 2012a; Gassiat et al., 2013; Kissinger et al., 2013]. All of them employed more or less the same basic aspects of the conceptual model shown in Figure 2, including a deep shale reservoir from which a numerical tracer representing HF fluid can migrate, a shallow drinking water aquifer, some source of increased hydraulic head (h) or pressure (P) near the bottom of the domain, a region where permeability is enhanced due to fracturing, and an overburden that may have a permeable pathway through it. However, there are different boundary and initial conditions, porous media properties, mechanisms that drive flow, and depths of geologic layers. These differences lead to different results. In addition to the models of HF fluid migration, some papers on natural gas migration models are discussed since many of the migration processes are similar. For example, gas originates in the shale layer and may migrate toward overlying aquifers. Buoyancy, multiphase flow effects, and groundwater flow can all affect gas migration. Table 1 has a summary of the dominant processes captured in previous models. 

Simulations by Myers [2012a] of HF fluid transport toward overlying aquifers are based on the Marcellus shale. The main driver of upward flow was a vertical hydraulic head gradient represented using a higher head specified at the bottom boundary than at the top boundary. In some of his scenarios, he simulated the injection of HF fluid, which increases the head in the subsurface and acts as another driving force for upward flow. In these scenarios, Myers [2012a] includes a 60 day flowback period, during which 20% of the injected volume is removed from the domain by a well sink term. The 20% volume removal is a prescribed quantity rather than being calculated based on physical processes. The distance between the aquifer and the 

SUBSURFACE FLOW MODEL OF FRACTURING FLUIDS 

BIRDSELL ET AL. 

7167 

Water Resources Research 

10.1002/2015WR017810 

shale reservoir is 1500 m, and the shale, overburden, and permeable pathway properties (which are varied by several orders of magnitude in a sensitivity analysis) largely govern the results. Myers [2012a] concluded that there are increased fluid fluxes and decreased travel times to the aquifer after HF. His modeling results suggest that travel times may be as low as tens of years through an intact overburden or even less through a permeable pathway. The main critiques of Myers [2012a] were the neglect of buoyancy and multiphase flow effects such as imbibition, his choice of boundary conditions to represent a regional discharge zone (which forced flow to only go upward), and the choice of porous media and fault properties in his models [Saiers and Barth, 2012; Cohen et al., 2013], many of which he further clarified or addressed [Myers, 2012b, 2013]. 

Kissinger et al. [2013] presented three scenarios which address local, short-term HF fluid, and brine migration; regional long-term (30 years) HF fluid and brine migration; and local, long-term (100 years) methane migration in the German states of North Rhine-Westphalia and Lower Saxony. Scenario 1 assumes an increase in pressure at the top of a shale reservoir during injection of HF fluid (lasting 2 h) and tracks the HF fluid plume upward from the top of the shale for a total of 12 h to assess how high the pressure transient can push the plume. Scenario 2 assumes that some amount of HF fluid has reached an intermediate, saline, artesian aquifer near a fault. Based on the larger hydraulic head in the artesian aquifer, the plume of HF fluid has the potential to move upward. Scenario 3 is set up similarly to Scenario 1, except that there is a constant flux of free-phase methane (rather than a prescribed pressure) out of the top of the shale reservoir and it is a two-phase model (brine and gas). A no-flux boundary condition is used for a large portion of the bottom of the domain in Scenarios 1 and 3 and for the entire bottom of the domain in Scenario 2 based on the assumption that the underlying formation is relatively impermeable. In all three cases, buoyancy is accounted for, which is based on salinity in Scenarios 1 and 2 and based on assuming methane acts as an ideal gas in Scenario 3. Modeling results for Scenario 1 constrain the short-term upward movement of HF fluid to at most �50 m. Results for Scenario 2 suggest that HF fluid can reach the overlying aquifer in concentrations that are 4000 times smaller than the initial concentration under the most conservative hydraulic gradient and permeability assumed, if it has already escaped to the intermediate, saline aquifer. In Scenario 2, the distance between the intermediate and shallow aquifer is �1300 m. Two out of the ten simulations in Scenario 3 show that gas can reach the shallow drinking water aquifer (traveling �1300 m), but the authors state that the results are not sufficient for a quantitative risk analysis due to the high parameter uncertainty. Scenarios 1 and 2 did not account for the effects of imbibition or well production. 

Gassiat et al. [2013] simulated the 5000 year response of HF fluid transport due to fracturing of an overpressured reservoir. They employed a generic conceptual model based largely on data from the Utica shale in the St. Lawrence lowlands in Quebec, Canada with some features inspired by the Marcellus and the Barnett. The distance between the shale unit and the aquifer was �2000 m, and the overpressure in the reservoir ranged from 6 to 12 MPa in different scenarios. They specified a no-flux boundary condition at the bottom of the domain. When the increase in permeability due to hydraulic fracturing occurs, the overpressure in their model pushes fluids upward through a fault/overburden. Buoyancy is an additional driving force for upward flow. In the worst-case scenario, contaminants from the shale were predicted to reach the shallow aquifer in less than 1000 years at 90% of their initial concentration. They acknowledged the following limitations of their model: (1) it is a single-phase model that cannot account for capillary mechanisms such as imbibition; (2) it is two dimensional, which produces behavior corresponding to a fault that is infinitely wide in the third dimension; (3) it assumes that the increased permeability in the hydraulically fractured zone persists for 5000 years, which neglects mechanical closure of fractures and healing by mineral precipitation; (4) well operations such as injection and production were not accounted for because they are relatively short compared to the 5000 year time scales; and (5) recharge rates and salinity profiles did not necessarily match those observed in the St. Lawrence lowlands [Gassiat et al., 2013]. Flewelling and Sharma [2015] additionally pointed out that: (1) a fault which goes through the shale reservoir would likely release any overpressure that builds up in the shale reservoir; (2) fault orientation would become more horizontal at shallow depths, causing it to terminate below the aquifer; and (3) that overpressure in the gas phase within the reservoir may not translate into overpressure in the liquid phase above the reservoir (and thus no driving force would exist outside of the reservoir). In response, Gassiat et al. [2013] pointed out that simulated overpressure exists for long periods of time near the fault in the initialization stage of their simulation [Lefebvre et al., 2015]. 

Reagan et al. [2015] presented a full two-phase (gas and brine) model that focuses on short-term, �2 year, gas migration. They used a hydrostatic initial condition and consider either a wellbore or a fault as the permeable pathway. Buoyancy of free-phase natural gas and suction applied to a vertical well in the shallow 

SUBSURFACE FLOW MODEL OF FRACTURING FLUIDS 

BIRDSELL ET AL. 

7168 

Water Resources Research 

10.1002/2015WR017810 

aquifer and/or a horizontal well in the shale reservoir provide driving forces for upward or downward flow. They observe that well operations and imbibition have a large influence on how much gas can reach the overlying aquifer. In some cases, gas that has escaped the shale reservoir can be dissolved and returned to the reservoir by water that is flowing downward to the shale reservoir under the influence of the horizontal well suction and imbibition. Reagan et al. [2015] do not focus on long-term migration of HF fluid, but their simulations do include many of the important aspects of HF fluid migration (e.g., multiphase flow effects, buoyancy, and well production). 

All of the aforementioned studies employed very conservative assumptions (i.e., maximizing the prospects for upward migration) and used a wide range of parameter values in their sensitivity analyses. For example, these studies used conservative numerical tracers that did not degrade or sorb onto surrounding minerals, and assumed the presence of a continuous permeable pathway between the shale reservoir and the aquifer. This overpredicts the HF fluid concentrations that are seen at the aquifer. Much emphasis has been placed on the worst-case scenarios in the above studies, although a majority of the simulations do not result in aquifer contamination. In many cases, the critique of one HF fluid migration study also applies to the other studies. For example, the critique that faults are unlikely to be oriented vertically at shallow depths applies to all of the migration studies [Myers, 2012a; Saiers and Barth, 2012; Gassiat et al., 2013; Kissinger et al., 2013; Reagan et al., 2015]. 

##### 5. An Expanded Model of Long-Term HF Fluid Migration 

We build a generic numerical model of HF fluid transport, which includes a combination of mechanisms that have not been previously combined. Injection, capillary imbibition, production, and buoyancy are all accounted for. Sensitivity analyses allow us to investigate overpressure, permeable pathway parameters, relative permeability effects, and overburden properties. 

Our generic model is based largely on the Marcellus shale. In our model, there is a shale layer located 1700 m belowground surface and 1500 m below the bottom of the freshwater aquifer. Many of the parameter values used in our model are based on the Marcellus shale parameter values because they were either the most readily available or because they were not very different from values reported for other shale gas units in the United States. Applying this model to a particular site would require knowledge of the parameters of interest (e.g., depth to aquifer, depth to shale, location and hydraulic properties of geologic layers, capillary pressure-saturation and relative permeability functions for the reservoir, and the location or probability of potential permeable pathways). 

An important aspect of our modeling approach is that the simulation takes place in five stages, each of which has different boundary conditions and realistically represents important time intervals before, during, and after the lifetime of a typical horizontal well. Special care is taken to represent the imbibition sink term, the permeable pathway, the saline and fracturing fluid tracers, and permeability evolution during and after the lifetime of a well. Furthermore, a number of metrics are used to quantify HF fluid migration. Simulations are performed with the Finite Element Heat and Mass Transfer code (FEHM) [Zyvoloski et al., 1997]. 

###### 5.1. Numerical Model 

The cross-sectional schematic of our model is shown in Figure 2. It has a shale gas unit located 1700– 1730 m belowground surface (BGS); there is a freshwater aquifer from the surface to 200 m BGS. The water is saline below 200 m and therefore has a larger density. There is a permeable pathway that extends from the top of the shale to the bottom of the freshwater aquifer through a homogeneous, moderatepermeability overburden layer. This is a hypothetical generic permeable pathway that could represent a wellbore, a fault, a natural fracture, a joint, or some combination thereof. The likelihood of such permeable pathways has been debated (see sections 2.2 and 4) [Engelder, 2012; U.S. Environmental Protection Agency, 2012; Warner et al., 2012a, 2012b; Gassiat et al., 2013; Ingraffea et al., 2014; Flewelling and Sharma, 2015; Lefebvre et al., 2015]. The inclusion of the permeable pathway in our model allows us to illustrate behavior in an extreme end-member scenario, which is similar to the conservative assumptions employed in previous modeling studies. A 500 m long horizontal wellbore section sits in the middle of the shale gas unit. Imbibition is assumed to occur where fluid-filled induced hydraulic fractures are in contact with unsaturated shale but not above or below the shale since the adjacent formations are assumed to be saturated as shown in 

SUBSURFACE FLOW MODEL OF FRACTURING FLUIDS 

BIRDSELL ET AL. 

7169 

Water Resources Research 

10.1002/2015WR017810 

Figure 3. Numerical model and grid used for simulation. The cutaway shows that there is a finer discretization near the horizontal wellbore and near the permeable pathway. The well is located at x 5 2000 m, 1750 m � y � 2250m, and z 5 21715 m. The permeable pathway is located at x 5 2000 m, y 5 2083 m, 21700 m � z � 2200 m. 

Figure 2. Permeability is affected by induced fracturing in a threedimensional region near the horizontal wellbore based on fracture height (H), a measure of the distance between the top of the fracture and the horizontal wellbore, and half-length (Xf), a measure of the horizontal distance from the wellbore to the end of the fracture tip in the x direction and y direction in Figure 2. Fracture heights have been estimated using microseismic data [Fisher and Warpinski, 2012], and they tend to extend farther upward than downward due to the lithostatic pressure gradient [Warner et al., 2012b]. Therefore, we assume that the fractured region extends upward from the wellbore to a distance H, and below the wellbore to a distance H=2. Halflengths have been estimated using a combination of microseismic data and numerical modeling [Cipolla and Wallace, 2014]. 

The numerical model grid and the approximate locations of the horizontal wellbore and the permeable pathway are shown in Figure 3. The aquifer from 

0 to 200 m BGS is not explicitly simulated. Instead, the top of the domain is at the bottom of the aquifer so that any HF fluid that exits the top of the domain is assumed to reach the aquifer. To track HF fluid, a conservative numerical tracer is used. This approach is akin to following the transport of HF fluid chemicals under the assumption that they do not degrade or sorb. Additionally, the numerical model extends 470 m below the bottom of the shale so that the effect of well operations and imbibition do not propagate to the lower boundary of the domain. The top and bottom of the domain have prescribed pressure boundary conditions while the sides of the domain have no-flux boundary conditions. The horizontal wellbore is at x 5 2000 m, 1750 � y � 2250 m, and z 5 21715 m. Imbibition takes place over the region defined by 2000 2Xf < x < 20001Xf m, 17502Xf < y < 22501Xf ; 21730 < z < 21716, or 21714 < z < 21700 m, and the region over which fracturing influences the permeability is 20002Xf < x < 20001Xf ; 17502Xf < y < 22501Xf ; 217152ðH=2Þ < z < 217151H. The permeable pathway exists on y 5 2083 m, 21700 � z � 200 m, with x centered at 2000 m and the width depending on the permeable pathway scenario. Model parameters including H and Xf are shown in Table 2. 

###### 5.2. Five Stages of Simulation 

Each simulation consists of five separate stages to represent predrilling steady state, injection of fracturing fluids, shut-in period, production, and the continued migration of fracturing fluids after the well is plugged and abandoned (P&A). Stage 1 lasts 200 years and allows the pressures and fluxes to come to the prefracturing steady state based on the specified pressure boundary conditions at the top and the bottom of the domain (which represents a regional discharge zone). The steady state solution acts as the initial condition for the hydraulic fracturing simulation. We confirmed that 200 years was long enough to approach steady state by observing very minimal changes in the pressures and fluxes between a 200 year Stage 1 and a 1200 year Stage 1. Stage 2 lasts for 2.5 days and involves the injection of �11310<sup>6</sup> kg of fracturing fluid with a specified pressure boundary condition of 35 MPa (which is 83% of lithostatic pressure assuming overburden density of 2500 kg/m<sup>3</sup> ) in the wellbore nodes. Since Stage 2 represents the creation of hydraulic fractures, the permeability near the well is enhanced. Stage 3 is a 5 day long shut-in period. No fluid is 

SUBSURFACE FLOW MODEL OF FRACTURING FLUIDS 

BIRDSELL ET AL. 

7170 

Water Resources Research 

10.1002/2015WR017810 

Table 2. Model Parameters for Base Case Scenario 

|Parameter|Value<sup>a</sup>|Unit|
|---|---|---|
|Permeable pathway<br>permeability|8:3310<sup>211 </sup>(1:0310<sup>217</sup>26:7310<sup>210</sup>)|m<sup>2</sup>|
|Well suction|5 (no flow allowed out of well, 10)|MPa|
|Overpressure|0 (1, 3, 6)|MPa|
|Permeable pathway width<sup>b</sup>|Mixed (1, 10)|m|
|Imbibition rate parameter (A)|4:5310<sup>24 </sup>(0.0, 13310<sup>24</sup>)|m d<sup>21=2</sup>|
|Permeability of fractured<br>shale during stages 4,5<sup>c</sup>|1:0310<sup>217 </sup>(1:0310<sup>219</sup>–5:0310<sup>218</sup>)|m<sup>2</sup>|
|Overburden permeability<sup>d</sup>|1:0310<sup>217 </sup>(3:6310<sup>218</sup>; 1:0310<sup>216</sup>)|m<sup>2</sup>|
|Permeable pathway geometry<sup>e</sup>|Linear (branching, circuitous)|[m<sup>2</sup>]|
|Permeable pathway porosity|0.01 (0.001, 0.05)||
|Maximum density|250|kg/m<sup>3</sup>|
|contribution of salinity|||
|Fracture height (H)|100|M|
|Fracture half-length (Xf)|180|M|
|Diffusion coefficient|1:0310<sup>29</sup>|m<sup>2</sup>/s|
|Dispersivity<sup>f</sup>|1|m|
|Temperature|50|8C|
|(assumed isothermal)|||
|Shale porosity|0.01||
|Overburden porosity|0.05||

aBase case parameters are displayed. If applicable, other values investigated in the sensitivity analysis are shown in parenthesis. 

bThe mixed width permeable pathway is 10 m wide for 500 m and 1 m wide for 1000 m (section 6.2.4). 

cSee Table 4 and section 6.2.6 for more detail. 

dThe permeabilities in parenthesis are assigned for different layers in the ‘‘Heterogeneous Overburden’’ scenario (section 6.2.7). 

eA description of the idealized pathway geometries is in section 6.2.8. 

fDispersivity is assumed to be isotropic for convenience, but simulation results are largely insensitive to diffusion/dispersion. 

allowed to leave or enter the domain via the horizontal wellbore, but imbibition takes place within the shale above and below the horizontal wellbore. Imbibition is treated as a specified volumetric sink term that is distributed across all of the imbibition zone nodes, which is justified by the nonplanar branched structure of induced fractures [Fisher and Warpinski, 2012]. Stage 4 represents a 20 year production duration with a specified pressure boundary condition in the horizontal wellbore nodes. The specified pressure is below the steady state pressure prior to drilling and represents a suction applied to the well; large amounts of fluid and tracer are removed during this stage. The operating lifetime of modern, horizontal, fractured wells is still somewhat unknown since 

most are less than 10 years old. Additionally, many are refractured after 4–5 years [Moniz et al., 2011]. Therefore, we believe that a 20 year production lifetime is justified and is a conservative assumption for predicting HF fluid migration to the aquifer (a 30 year production will remove even more HF fluid tracer from the subsurface via the well). During Stage 4, the permeability near the wellbore decreases (but is larger than prior to fracturing) as the hydraulic fracture apertures decrease under lower pore pressure. Stage 5 lasts for 980 years (i.e., to 1000 years from the injection of fracturing fluid). The well is shut-in so no fluid leaves or enters the domain via the well nodes, and the fracturing fluid plume is allowed to migrate. The five stages of simulation are summarized in Table 3. 

###### 5.3. Treatment of Imbibition, Permeable Pathway, Numerical Tracers, and Fractured Permeability 5.3.1. Imbibition 

Since our model focuses on the potential of HF fluid to reach an aquifer, we model imbibition as a sink term in a single-phase model. Computationally, this is much less expensive than employing a multiphase model which would need to resolve capillary pressure gradients and imbibition fronts on the range of millimeters 

|Table 3.|The Five Stages of Simulat|ion||
|---|---|---|---|
|Stage|Stage Name|Duration|Description|
|1|Initial condition|200 years|Prefracking<br>steady state|
|2|Injection|2.5 days|Injects 11310<sup>6 </sup>kg<br>of fluid at 35 MPa|
|3|Shut-in|5 days|Imbibition occurs,<br>pressure dissipates|
|4|Production|20 years|Suction applied on<br>wellbore to remove<br>fluids|
|5|Continued<br>migration|980 years|Well is plugged and<br>abandoned, plume<br>migrates|

while simulating overall domain sizes on the range of kilometers. Strictly speaking, imbibition occurs across fracture surfaces in complex fracture networks, suggesting that accurate multiphase flow models may need to employ dual continuum rather than equivalent porous medium approaches. We believe that representing imbibition as a sink term is a useful approximation given the large uncertainties in fracture areas and geometries. The representation of 

SUBSURFACE FLOW MODEL OF FRACTURING FLUIDS 

BIRDSELL ET AL. 

7171 

Water Resources Research 

10.1002/2015WR017810 

imbibition as a sink term also captures the influence of the most significant multiphase flow process within the framework of a single-phase flow model. The low and high-imbibition scenarios in this study correspond to the low-permeability and high-permeability shale samples in Birdsell et al. [2015]. Using an initial saturation in the range of 0.05–0.6 reported for the Marcellus [Engelder et al., 2014], values of A are 4:53 10<sup>24</sup> and 13310<sup>24</sup> m d<sup>21=2</sup> for low and high-permeability shales, respectively. We assume 10<sup>6</sup> m<sup>2</sup> of fracture area is created at the end of the injection stage [Birdsell et al., 2015] and is distributed evenly within the fractured region of the shale. The volume of fractured shale is �9310<sup>6</sup> m<sup>3</sup> , and the specific fracture surface area is �0.1 m<sup>2</sup> fracture area per m<sup>3</sup> fractured shale volume. This specific fracture surface area is used in the representation of the imbibition sink term within each grid block of the hydraulically fractured zone such that Af in each grid block is the volume of the grid block multiplied by the specific fracture surface area (equation (1)). So imbibition is assumed to occur not in the entire grid block but across an assumed fracture surface area within a grid block. 

###### 5.3.2. Permeable Pathway 

The gridding, permeability, and porosity of the permeable pathway deserve special attention to correctly calculate both the fluid and tracer fluxes. We assume an open space that is 1 m wide with an aperture of b. This could approximately represent either a highly permeable preferential flow path within a fault zone [Fairley et al., 2003] or a microannulus of radius 16 cm going around the full circumference of either the cement/casing interface or the cement/caprock interface [Viswanathan et al., 2008]. Wider permeable pathways, such as faults, joints, or fractures, are represented using multiple permeable grid blocks. The permeable pathway is assumed to extend vertically from the top of the shale to the bottom of the aquifer. The grid block that the permeable pathway sits in has dimensions of 1 m 3 1 m in the x and y directions. The permeability assigned to the grid block must result in the correct flux. The permeability of the fracture is calculated using the cubic law [e.g., Zimmerman and Bodvarsson, 1996]. Strictly speaking, b may be viewed as the hydraulic aperture. This is combined with the permeability of the matrix, and the effective vertical permeability (kze) is shown in equation (2) where km is the matrix permeability and Dx51 m is the grid spacing: 

Porosity can be calculated as flow-weighted porosity or volume weighted porosity. Flow-weighted porosity (/fw) follows equation (3) below assuming that fracture flow is much greater than matrix flow and that the porosity in the fracture is /f taken as 1. The volume weighted porosity (/vw) is shown in equation (4) where /m is the matrix porosity. The flow-weighted porosity will capture solute transport correctly at early times and the volume weighted porosity will capture solute transport at later times (when matrix diffusion effects are significant). The flow-weighted porosity is 0.001 for a 1.0 mm fracture aperture, while the volume weighted porosity is close to 0.05. Furthermore, there is a gradual time variation from /f to /fw of the effective porosity that controls the instantaneous effective velocity [Bloechle, 2001]. Therefore, we use an intermediate porosity of 0.01 in the fracture for the base case and vary porosity in sensitivity analyses. This discussion of flow-weighted and volume-weighted porosity and the cubic law to assign permeability is intended to inform the representation of a fracture within a numerical grid without using an extremely fine (�1 mm) grid that resolves physical dimensions of the fracture aperture [Chaudhuri et al., 2013]. 

###### 5.3.3. Numerical Tracers 

Two numerical tracers are used in this simulation. The first is a brine tracer that mimics various salts (e.g., Na<sup>1</sup> , Ca<sup>21</sup> , and Cl<sup>2</sup> ) and is used to influence density, and the second is the HF fluid tracer that is used to track the migration of the HF fluid chemicals. Initially, the brine tracer exists everywhere within the domain at a concentration of 350 g/L, which is a conservative assumption that favors upward HF fluid migration, since reported salinity is �250 g/L [Warner et al., 2012b]. Density increases linearly with salt concentration [Simmons et al., 2001] and 350 g/L results in an increased fluid density of about 250 kg/m<sup>3</sup> . As the simulation progresses, any inflow from the bottom boundary will also have a brine tracer concentration of 350 g/L, ensuring the domain remains saline. The fracturing fluid tracer is injected during hydraulic fracturing 

SUBSURFACE FLOW MODEL OF FRACTURING FLUIDS 

BIRDSELL ET AL. 

7172 

Water Resources Research 

10.1002/2015WR017810 

(without any brine tracer) and does not affect the density of the injected fluid. Therefore, the injected fluid will experience a buoyant force until it mixes sufficiently with the brine tracer fluid surrounding it. Both tracers are assigned a diffusion coefficient of 10<sup>29</sup> m<sup>2</sup> /s and a dispersivity of 1.0 m in the x, y, and z directions. The results are not very sensitive to diffusivity or dispersivity values. Neither tracer is specified to sorb or degrade, which will overpredict the amount of HF fluid tracer that reaches the aquifer, thus serving as a conservative assumption. 

###### 5.3.4. Fractured Permeability Evolution 

The purpose of hydraulic fracturing is to alter the permeability of the producing formation so that more hydrocarbons are produced; therefore, several permeability changes occur during each simulation. In this paper, we do not consider a discrete fracture network within the shale; instead, we change the bulk permeability to reflect the increase in overall permeability due to the creation of fractures. This is similar to the stimulated reservoir volume (SRV) approach that is used for shale reservoirs in petroleum engineering [Cipolla and Wallace, 2014; Mayerhofer et al., 2010]. Prior to hydraulic fracturing, the permeability of the shale is 10<sup>220</sup> m<sup>2</sup> , the permeability in the overburden and below the shale are 10<sup>217</sup> m<sup>2</sup> , and the permeable pathway permeability is 8:33310<sup>211</sup> m<sup>2</sup> (based on a 1 mm aperture fracture or gap within a 1 m 3 1 m grid block cross-section area). 

During injection, hydraulic fractures are formed, and the large fluid pressure holds the fractures wide open. This results in a temporary and large increase in permeability; we assigned a permeability of 10<sup>214</sup> m<sup>2</sup> for the fractured region. This permeability value allows the correct volume of fluid (�11; 000 m<sup>3</sup> ) to be injected over a 2.5 day duration at 35 MPa injection pressure (all of which reflect typical operating conditions for HF stages). During shut-in, the pressure begins to dissipate within the formation but remains much larger than during prefracturing conditions. Since the fractures will likely still be held wide open by this pressure, we keep the fractured regions at the same high permeability. The pressure within the formation reduces substantially during production, and the fractures become considerably narrower. Even a propped fracture will be narrower than it was under the pressure of the injection stage. The result of closing fractures is a reduced permeability. Within the shale, the permeability is decreased to 10<sup>217</sup> m<sup>2</sup> , which is 3 orders of magnitude higher than the permeability in the prefractured state [King, 2012]. Within the fractured region above and below the shale, the permeability is reduced to 10<sup>216</sup> m<sup>2</sup> , which is 1 order of magnitude higher than the permeability prior to fracking. The justification is that the permeability must be greater than it was prior to fracturing even if the fractures are mostly unpropped above and below the shale region. After the well is plugged and abandoned, during the continued migration stage, the permeabilities remain the same as during the production stage. The permeability values used in the five stages of the base-case simulation are shown in Table 4. 

###### 5.4. Metrics to Track HF Fluid Migration 

There are a number of useful metrics that we employ in section 6 to track HF fluid migration including: (i) the concentration of HF fluid at the top of the permeable pathway/the base of the aquifer, (ii) the magnitude and direction of vertical fluid fluxes, and (iii) the amount of numerical HF fluid tracer that has reached the aquifer. The first metric, concentration of the HF fluid at the top of the permeable pathway, is useful for identifying when HF fluid is contacting the aquifer, the concentrations that can be expected, and the lag time between activity in or near the well (e.g., injection, imbibition, and production) and HF fluid migration at the top of the pathway. The next metric, the magnitude and direction of the fluid fluxes, tell us when 

Table 4. Permeability (m<sup>2</sup> ) Evolution During Simulation Stages<sup>a</sup> 

|Stage|Stage Name|Fractured Shale<sup>b</sup>|Fractured<br>Overburden<sup>b</sup>|
|---|---|---|---|
|1|Initial condition|1310<sup>220</sup>|1310<sup>217</sup>|
|2|Injection|1310<sup>214</sup>|1310<sup>214</sup>|
|3|Shut-in|1310<sup>214</sup>|1310<sup>214</sup>|
|4|Production|1310<sup>217</sup>|1310<sup>216</sup>|
|5|Continued migration|1310<sup>217</sup>|1310<sup>216</sup>|

aUnfractured shale, unfractured overburden, and permeable pathway permeability are 1 3 10<sup>220</sup> , 1 3 10<sup>217</sup> , and 8:3310<sup>211</sup> m<sup>2</sup> , respectively, for the full duration of the simulation. 

bRefers to the permeability in the region where fracturing takes place. 

flow is away from or toward the well and the influence of various factors on vertical fluxes (e.g., buoyancy, well operations, and imbibition all affect fluid fluxes but we do not know a priori which will have the largest effect). 

The final metric, tracer to aquifer (TTA), is a measure of the cumulative amount of numerical HF fluid tracer that has crossed from the domain into the overlying aquifer as a percentage of the amount of tracer that 

SUBSURFACE FLOW MODEL OF FRACTURING FLUIDS 

BIRDSELL ET AL. 

7173 

Water Resources Research 

10.1002/2015WR017810 

was injected in Stage 2. It is difficult to report volumes of HF fluid that have reached the aquifer because HF fluid mixes with brine in the subsurface; nevertheless, TTA is a good proxy metric for the percent of HF fluid that reached the aquifer. We define TTA1000 as the TTA 1000 years after HF. Previous modeling studies have included water well operations and/or flow fields in the aquifer [Gassiat et al., 2013; Reagan et al., 2015] and shown that it is possible for fluids to flow down the permeable pathway from the aquifer [Reagan et al., 2015]. This downward flow would depend on a number of parameters related to the horizontal O&G well and nearby drinking water well(s) that influence the flow field within the aquifer. If the permeable pathway were to intersect the aquifer in the vicinity of active drinking water wells, the HF fluids entering the aquifer may migrate away from the permeable pathway and enter the wells. On the other hand, if the permeable pathway intersects the aquifer far away from the pumped wells, HF fluids could flow back down the permeable pathway. Since this distinction would require additional parameters to be varied, we employ TTA as a conservative metric of HF fluid reaching the aquifer and do not consider the influence of the flow within the aquifer. 

##### 6. Results 

###### 6.1. Base Case Scenario 

The base case scenario favors upward fluid migration and is not the most likely reflection of reality for the majority of HF operations. The base case scenario uses the lower estimate of imbibition (A54:5310<sup>24</sup> m d<sup>21=2</sup> ) and moderate suction (pressure is 5.0 MPa below the prefracturing pressure at the wellbore). Fractured shale permeability to water is taken as 1310<sup>217</sup> m<sup>2</sup> rather than being reduced by a relative permeability factor during Stages 4 and 5. To simulate buoyancy, the injected fracturing fluid density is specified as q �1000 kg/m<sup>3</sup> . A permeable pathway is assumed to extend from the top of the shale to the bottom of the overlying aquifer, with k58:3310<sup>211</sup> m<sup>2</sup> (b 5 1 mm) and widths of 10 m for the lowest 500 and 1 m for the upper 1000 m. These parameters were chosen for the base case because they highlight a number of important physical effects, and provide a good starting point from which parameters can be perturbed in a sensitivity analysis. 

The slice plots in Figures 4a–4d show the location of the HF fluid plume at the end of Stages 2–5, respectively. At the end of Stage 2 (injection), the plume is located mostly near the shale reservoir with a very small amount of fluid moving up the permeable pathway. By the end of Stage 3, imbibition has decreased the concentration of the mobile HF fluid in the shale and has reduced the fluxes and concentrations in the permeable pathway. The amount of HF fluid that has reached the aquifer is negligible by the end of Stage 3 (TTA 5 0.04% of what was injected). By the end of Stage 4, the well production has pulled HF fluid down and out of the permeable pathway and significantly reduced the concentrations of HF fluid within the shale reservoir. By the end of Stage 5, the plume in the deep subsurface has spread out, and with no sink term to advect fluid toward the well, HF fluid has migrated up the permeable pathway. Outside the permeable pathway, the highest location at which HF tracer concentrations are above 0.1% of the injected concentration are z 5 21660 m and z 5 21630 m after 20 and 1000 years, respectively. This tells us that with an intact overburden (k51310<sup>217</sup> m<sup>2</sup> ), the extent of upward migration of HF fluids is on the order of only 100 m even after 1000 years. We confirmed this in another simulation with no permeable pathway. 

The normalized HF fluid concentration and the vertical fluid flux at the top of the permeable pathway (i.e., the bottom of the aquifer) are plotted as a function of the logarithm of time in Figures 5a and 5b, respectively. In order for HF fluid to enter the aquifer, the concentration must be greater than zero and the flux must be upward. There are two time periods when HF fluid enters the aquifer. The first time period of HF migration into the aquifer occurs in Stages 2, 3, and the early years of Stage 4. Injection causes upward fluid fluxes in the permeable pathway, bringing HF fluid to the base of the aquifer. Imbibition and well suction decrease the magnitude of upward fluxes and HF fluid concentration at the top of the permeable pathway. After �1.5 years the concentration of HF fluid is zero and the fluid fluxes are downward, and no more HF fluid reaches the aquifer during Stage 4. More HF fluid begins to enter the aquifer �8 years after the end of production. By �100 years after the end of production, the concentration and the upward fluxes have both plateaued to small values, which last until the end of the simulation. Even though we do not explicitly simulate the aquifer, the concentrations of HF fluids chemicals that would be observed at monitoring wells in the aquifer would likely be very small. First, the peak concentration that occurs at the end of Stage 2 lasts for a very short 

SUBSURFACE FLOW MODEL OF FRACTURING FLUIDS 

BIRDSELL ET AL. 

7174 

Water Resources Research 

10.1002/2015WR017810 

Figure 4. Slice plots of normalized HF fluid tracer concentration in the y-z plane at x 5 2000 m from the base case at (a) the end of injection, (b) the end of shut-in, (c) the end of production, and (d) 1000 years after injection. Note: the color scales are different in each plot. 

duration. Second, as HF fluid moves through the aquifer it will dilute further from its concentration at the top of the permeable pathway. And finally, the concentration of chemicals in HF fluid is low upon injection (with normalized HF fluid concentration 5 1.0) so further dilution results in very low concentrations. 

The injection of HF fluids causes fluid fluxes away from the wellbore, and well production reverses the direction of these fluxes. Figure 6a shows that these fluxes are relatively small where the overburden is intact. Within the permeable pathway above the shale, the fluid fluxes are upward and large in magnitude during injection and shut-in; they are downward and smaller in magnitude by the end of production (Figure 6b). The response of fluxes to wellbore operations and imbibition are observed along the entire length of the permeable pathway, which indicates that well operation and imbibition both directly influence the transport of brines and hydraulic fracturing fluids. Figures 6c and 6d show the influence of the strength of 

SUBSURFACE FLOW MODEL OF FRACTURING FLUIDS 

BIRDSELL ET AL. 

7175 

Water Resources Research 

10.1002/2015WR017810 

Figure 5. (a) Normalized HF fluid tracer concentration and (b) vertical fluid flux at the top of the permeable pathway (i.e., the base of the aquifer) as a function of the logarithm of time since the beginning of injection for the base case scenario. Vertical dashed lines separate simulation stages. There is a short-lived time during injection, shut-in, and the beginning of production during which concentration is elevated and fluid fluxes are upward. Then the well influence causes fluxes to be downward and reduces the concentration to zero about 2 years into production. Fluxes become upward and concentration returns to a small value after production ceases. Data for this figure are found in supporting information Data Set S1. 

imbibition on fluid fluxes (section 6.2.5). Imbibition has a strong influence on the flux distribution at the end of Stage 3 (shut-in). 

By a mass balance argument, all of the tracer that is injected during HF must fall into one of four categories: (i) removed from the subsurface by the well, (ii) imbibed, (iii) reaches the drinking water aquifer, or (iv) remains in the deep subsurface below the drinking water aquifer without being imbibed. After 20 years, 68% of the injected tracer is removed by the well, 13% is imbibed, 0.1% reaches the aquifer, and 19% remains elsewhere in the subsurface (see Figure 7). In the fifth stage of simulation, no more tracer can be imbibed or removed by the well; it can only migrate between the deep subsurface and the aquifer. TTA is shown as a function of time for 1000 years in Figure 8 for the base case and the most sensitive scenarios. Note that larger amounts of HF fluids reach the aquifer in Stage 5 due to its long duration despite the lower concentration at the top of the permeable pathway compared to Stage 2 (Figure 5). The scenarios that favor larger TTA tend to involve neglecting a sink term, like well suction and/or imbibition. In contrast, removing the permeable pathway from the simulation results in zero TTA. 

###### 6.2. Sensitivity Analysis 

We perform a sensitivity analysis on variables associated with the permeable pathway, the sink terms, the basin characteristics, and buoyancy. The location of the HF fluid tracer after 1000 years (i.e., aquifer, imbibed, removed by well, or in the deep subsurface) is shown in Figure 9, and the amount of TTA at the end of each simulation stage is shown in Figure 10 for all sensitivity scenarios. Usually, only one parameter is changed and all the other remain at the base case value, but in some instances, marked with a diamond (�) in Figures 9 and 10, more than one parameter is changed from the base case to highlight a specific feature or scenario. The permeable pathway variables include the geometry of the pathway (linear, branching, or circuitous), b (which affects permeability), /, the width, and permeability heterogeneity. The sink terms include well operations and the level of imbibition. The basin characteristics include the permeability of the fractured shale during production and continued migration, the heterogeneity of the overburden permeability, and the overpressure in the shale reservoir at the beginning of injection. In the following subsections, we describe the influence of each parameter on TTA1000, starting with the most sensitive parameters and going to the least sensitive. 6.2.1. Permeability of Permeable Pathway 

The most important property of the permeable pathway is its permeability, which depends on b (see Figures 9a and 10a). The permeability assigned to the permeable pathway grid blocks in different scenarios ranges from 10<sup>217</sup> to 6:7310<sup>210</sup> m<sup>2</sup> for apertures of 0.0–2.0 mm (see equation (2)). For the scenario with no permeable pathway, the permeability of the matrix (10<sup>217</sup> m<sup>2</sup> ) is assigned to the grid block. The equation 

SUBSURFACE FLOW MODEL OF FRACTURING FLUIDS 

BIRDSELL ET AL. 

7176 

Water Resources Research 

10.1002/2015WR017810 

Figure 6. The z direction (upward) fluid flux at the end of each stage of simulation (a) through the middle of the domain where most of the domain is relatively low permeability, intact overburden, and (b) through the center of the permeable pathway. Figures 6a and 6b correspond to the base case scenario. The flux through the permeable pathway is also shown for (c) a no imbibition scenario and (d) a high-imbibition scenario. The high-imbibition scenario involves a sink term large enough to cause a downward flux directly above the wellbore while maintaining upward fluxes above z 5 21500 m. Data for this figure are found in supporting information Data Set S2. 

for effective permeability (keff) of flow perpendicular to multiple layers is shown below where Li and ki are the length and permeability of the ith layer and n is the number of layers 

TTA1000 is very sensitive to permeable pathway permeability within the range of 8:3310<sup>214</sup> to 8:3310<sup>211</sup> m<sup>2</sup> which corresponds to apertures of 0.1–1.0 mm (Figure 11). Below 0.1 mm, the permeability is very low and there is essentially no connectivity between the reservoir and the aquifer. Above 1 mm aperture there is sufficient permeability that any increase in permeability does not significantly increase TTA1000. This is easily explained by equation (5) if n 5 2, k1 and L1 are associated with the permeable pathway, and k2 and L2 are associated with the shale reservoir; the limit as k1 approaches infinity is keff 5ðL11L2Þk2=L2, so there is a constant effective permeability between the shale and the aquifer as the permeable pathway becomes infinitely permeable. If there is no permeable pathway (i.e., b 5 0), then no tracer reaches the aquifer regardless of any other simulation parameters. In that sense TTA1000 exhibits the greatest sensitivity to the permeability of the permeable pathway. 6.2.2. Well Sink Term 

During the production stage, suction is applied to the well as a constant pressure boundary condition. For example, a 5 MPa suction will set the pressure in the wellbore nodes to 5 MPa less than the steady state pressure prior 

SUBSURFACE FLOW MODEL OF FRACTURING FLUIDS 

BIRDSELL ET AL. 

7177 

Water Resources Research 

10.1002/2015WR017810 

Figure 7. Time variation of the cumulative amount of HF fluid that is removed from the subsurface by the well, is imbibed, reaches the aquifer, and remains unimbibed in the deep subsurface, from the beginning of injection to the end of production. By the end of production, the well removes 68% of the injected HF fluid tracer, 13% of the tracer is imbibed, 19% remains in the deep subsurface below the aquifer, and very little (�0.1%) reaches the aquifer. Data for this figure are found in supporting information Data Set S3. 

to injection. In the base case, 5 MPa of suction is applied, in the high suction case 10 MPa of suction is applied, and in one other end-member case, there is no flow out of the well during the ‘‘production stage,’’ which essentially represents an extended shut-in period, except that imbibition is discontinued. In section 6.2.5, we show results for an extended shut-in with imbibition. Suction is important in two ways. First, it removes much of the tracer from the subsurface so that less remains to potentially migrate to the aquifer after production ceases. Second, it reverses the flow field and keeps much of the tracer from migrating upward during the production stage. 

TTA is highly dependent on the suction applied to the well (see Figure 10b). If no flow is allowed up the wellbore, then TTA1000 increases by a 

factor of eight from 1.2% (base case) to >10% of the injected mass (see the ‘‘No Flow Out of Well’’ curve in Figure 8). Increasing suction from 5 to 10 MPa decreases the TTA1000 significantly to 0.6%. Also affected is the amount of tracer removed by the well. The ‘‘no flow out of well,’’ ‘‘base case,’’ and ‘‘high-suction’’ scenarios remove 0%, 68%, and 78% of the injected tracer, respectively (see Figure 9b). 

We have also simulated a ‘‘short production’’ scenario in which the production stage only lasts for 30 days. This represents a well that is hydraulically fractured but is deemed to be uneconomical to produce after a month of production. Far less HF fluid tracer is removed than in the base case (2.9%) and the pressure 

Figure 8. Cumulative mass of tracer to aquifer (TTA, % of injected mass) as a function of time for various scenarios. Removing the well and imbibition sink terms from the model results in the most TTA1000 (�12%), and removing the permeable pathway results in 0.00% TTA1000. The effect of removing imbibition from the model appears to be small because it occurs before well production that can effectively remove unimbibed fluid. The combined influence of imbibition and well suction, however, is highly significant as discussed in section 6.2.5. The ‘‘Extreme Overpressure’’ curve corresponds to 6 MPa of overpressure followed by 5 MPa of suction. Data for this figure are found in supporting information Data Set S4. 

remains large in and near the reservoir at the end of production, which results in 9.5% TTA1000. If a permeable pathway exists, the well sink term is the most important parameter influencing TTA. 

6.2.3. Overpressure 

We use two approaches to model overpressure and subsequent production. To the best of our knowledge, there is little information in the literature on the specifics of well production in overpressured reservoirs. For example, are fluids allowed to flow to the surface based on the high pressure in the reservoir, or are large suctions applied to the well to encourage faster production than the overpressure alone would allow? The literature is also vague about whether overpressure exists in the wetting or nonwetting phase (section 2.1). We therefore use two approaches to capture the full range of the potential influence of overpressure on HF fluid transport. 

SUBSURFACE FLOW MODEL OF FRACTURING FLUIDS 

BIRDSELL ET AL. 

7178 

Water Resources Research 

10.1002/2015WR017810 

Figure 9. The fate of HF fluid numerical tracer after 1000 years for various sensitivity analyses. ‘‘Aquifer’’ indicates the percentage that moved out of the top of the domain into the aquifer (TTA1000), ‘‘Imbibition’’ indicates the percentage that has been imbibed by the imbibition sink term, ‘‘Well’’ indicates the percentage that has been removed from the domain via the well, and ‘‘Remaining’’ indicates the percentage that remains unimbibed in the subsurface below the aquifer. The base case is denoted with an asterisk (*), and scenarios where more than one parameter is different from the base case are marked with a diamond symbol (�). Data for this figure are found in supporting information Data Set S5. 

In both approaches to model overpressure and subsequent production, a specified amount of overpressure (ranging from 1 to 6 MPa depending on the scenario) is added to the reservoir, which is shown conceptually in the ‘‘Overpressure 1 Regional Discharge’’ curve in Figure 1. In reality, overpressure is sustained for geologic durations of time. But for the purposes of modeling an overpressured reservoir, we add the pressure at the end of Stage 1 to act as the initial condition for Stage 2. We add the overpressure at the end of Stage 

SUBSURFACE FLOW MODEL OF FRACTURING FLUIDS 

BIRDSELL ET AL. 

7179 

Water Resources Research 

10.1002/2015WR017810 

Figure 10. The percent of the injected tracer that reaches the aquifer at the end of each simulation stage for various sensitivity analyses. The base case scenario is marked with an asterisk (*). A diamond (�) indicates that more than one parameter was changed from the base case. Stage 2 (injection) lasts 2.5 days, Stage 3 (shut-in) lasts 5 days, Stage 4 (production) lasts 20 years, and Stage 5 (continued migration) lasts 980 years. Note that the y axis ranges differ between plots; in most plots, the y axis ranges from 0 to �1:5%. Data for this figure are found in supporting information Data Set S6. 

1 rather than at the beginning of Stage 1 so that the upward flow field can develop based on the boundary conditions prescribed at the top and bottom of the domain (i.e., the flow field still acts like a regional discharge zone above and below the shale reservoir at the beginning of Stage 2 until the overpressure in the shale can affect the flow field). This allows for a more direct comparison between the overpressure scenarios and the base case scenario than applying overpressure at the beginning of Stage 1. Furthermore, 

SUBSURFACE FLOW MODEL OF FRACTURING FLUIDS 

BIRDSELL ET AL. 

7180 

Water Resources Research 

10.1002/2015WR017810 

Figure 11. The percent of fracturing fluid tracer logarithm the aquifer after 1000 years (TTA1000) as a function of the permeable pathway permeability. The aperture (in millimeters) corresponding to each permeability value is indicated near each point. TTA1000 is highly sensitive to the aperture in the range of 0.1–1.0 mm. Data for this figure are found in supporting information Data Set S7. 

overpressure is generally viewed as a transient phenomenon unless it is due to topography [Osborne and Swarbrick, 1997; Deming, 2001]. Therefore, any overpressured initial condition is an artifact of modeling decisions and will not necessarily reflect an overpressured reservoir in the field any better than the initial condition that adds overpressure at the end of Stage 1. A previous modeling study showed that overpressure of >6 MPa could be sustained for >100,000 years in a similar shale reservoir (k51310<sup>220</sup> m<sup>2</sup> ) [Gassiat et al., 2013], which suggests adding overpressure at the end of Stage 1 is not drastically different than adding it earlier. The overpressure is only added to the shale reservoir and not to the surrounding formations, which results in discontinuities in the pressure profile at the top and the bottom of the shale. 

We acknowledge that this is not a perfect representation of overpressure, but it does offer insights into the role that overpressure can play on fluid migration, while honoring the uncertainty in the literature about production from overpressured wells. 

In the first approach to model overpressure and subsequent production, the pressure in the well during the production stage (which is a specified pressure boundary condition) is brought to the same value. This value is equal to the pressure assigned in the base case scenario regardless of the amount of overpressure prior to production. In the second approach, the pressure in the well during the production stage is decreased by the same amount (5 MPa) from the reservoir pressure prior to injection. We define ‘‘suction’’ as the difference between the pressure in the reservoir prior to injection (which is based on the overpressure) and the specified pressure boundary condition applied to the well. Therefore, the first approach to model boundary condition varies the amount of suction based on the amount of overpressure, while the second approach to model overpressure always applies the same amount of suction (5 MPa). 

The sensitivity of TTA to reservoir overpressure can be insignificant or highly significant depending on the approach used to model overpressure and subsequent production. In Figure 9c, the x axis label contains two numbers which describe how much overpressure was added at the end of Simulation Stage 1 and how much suction was applied during production respectively (in MPa). The first three labels (1,6; 3,8; and 6,11) correspond to the first approach to model overpressure and subsequent production, the middle label (0,5*) corresponds to the base case scenario, and the final three labels (1,5; 3,5; and 6,5) correspond to the second approach. Figure 10c labels overpressure and subsequent suction in a similar manner in the legend where the first three entries correspond to the first approach to model overpressure and subsequent production, the next entry is the base case, and the final three entries correspond to the second approach. With the first approach, there is essentially no dependence on overpressure because the overpressure that exists during the relatively short-lived injection and shut-in stages is removed quickly by the well suction in the production stage; the ultimate TTA1000 is 1.2% for all scenarios using the first approach. With the second approach, overpressure has two effects. First, it increases the gradient that pushes flow away from the well in the injection and shut-in stages. More importantly, it decreases the amount of tracer removed by the well because the suction applied by the well is less (i.e., the pressure in the well is higher for the second approach than for the first approach). The scenario with 6 MPa of overpressure followed by 5 MPa of suction (shown in the ‘‘Extreme Overpressure’’ curve in Figure 8) results in 9.7% TTA1000, almost the same TTA1000 as the ‘‘No Flow Out of Well’’ scenario in Figure 8. This makes sense because very little tracer is removed by the well (2.0%) in the ‘‘Extreme Overpressure’’ scenario. 

SUBSURFACE FLOW MODEL OF FRACTURING FLUIDS 

BIRDSELL ET AL. 

7181 

Water Resources Research 

10.1002/2015WR017810 

###### 6.2.4. Permeable Pathway Width 

Although not as important as its permeability, the width of the permeable pathway also plays an important role. In the base case, the path is 10 m wide for 500 m directly above the shale and 1 m wide for the remaining 1000 m to the aquifer. In alternative scenarios, the path is assigned to be ‘‘wide’’ or ‘‘narrow’’ (10 and 1 m, respectively) for the entire length from the top of the shale unit to bottom of the aquifer. A ‘‘wide’’ permeable pathway might correspond to a fault or fracture while a ‘‘narrow’’ permeable pathway might correspond to a leaky wellbore. 

The narrow path and the wide path result in 0.8% and 2.2% TTA1000, respectively. Interestingly, the wide permeable pathway also allows for much more TTA at early times in the simulation compared to the base case, although it is still a relatively small amount. Results are shown in Figures 9d and 10d. 6.2.5. Imbibition 

Imbibition acts in a similar manner to well suction except that it is applied for a shorter duration and uses a time-varying sink term rather than a specified pressure boundary condition. The specified imbibition sink term [Birdsell et al., 2015] is based on the semianalytical solution of McWhorter and Sunada [1990] for onedimensional spontaneous imbibition (see section 2.3); it can be set to ‘‘no imbibition,’’ ‘‘low imbibition,’’ or ‘‘high imbibition’’ (A 5 0 m d<sup>21=2</sup> ; A54:5310<sup>24</sup> m d<sup>21=2</sup> , and A513310<sup>24</sup> m d<sup>21=2</sup> , respectively) for a 5 day shut-in period. We also simulate an extended, 180 days, shut-in period with the low value of A. Imbibition affects both the amount of tracer that remains free (unimbibed) to move within the subsurface and the flow field. Any discussion about the effects of imbibition should include a discussion about its relation to the production stage since both imbibition and production affect tracer movement in a similar manner, and imbibition occurs first. Also note that imbibition affects the amount of flowback and produced water, but this study focuses on tracking the HF fluid chemical tracer rather than volumes of HF fluid (see ‘‘TTA’’ in section 5.4). 

On its own, imbibition makes a moderate difference in HF fluid transport. The TTA1000 is 0.9% and 1.5% for the high-imbibition and no-imbibition scenarios, respectively (see Figure 10e); the ‘‘No Imbibition’’ scenario is shown in Figure 8. This lower-than-expected sensitivity is because imbibition takes place in the same vicinity as the horizontal wellbore and occurs before production. Therefore, if imbibition removes more HF fluid (A513310<sup>24</sup> m d<sup>21=2</sup> instead of A54:5310<sup>24</sup> m d<sup>21=2</sup> ), then there will be less HF fluid remaining in the capture zone of the horizontal well at the end of shut-in. In the ‘‘high-imbibition’’ scenario, the amount of HF fluid that is imbibed is larger and the amount of HF fluid removed by the well is smaller than the ‘‘low-imbibition’’ scenario, resulting in only moderately less tracer that is free to migrate. As the amount of imbibition increases, the total amount of tracer removed by the well plus the imbibition only increases moderately, which is shown in Figure 9e. 

Tracer transport is more sensitive to the cumulative influence of well suction plus imbibition. For example, if the imbibition and well sink terms are both turned off, TTA1000 attains its highest value across all cases considered (12.3%, see the ‘‘No Flow Out of Well, No Imbibition’’ curve in Figure 8). Imbibition also influences the nature of the flow field. Figure 6 shows that the fluxes at the end of shut-in (Stage 3) above the well are upward without imbibition (Figure 6c), are upward but smaller in magnitude with low imbibition (Figure 6b), and are downward right above the well with high imbibition (Figure 6d), which indicates that imbibition may be strong enough to pull fluids from the overlying formation into the shale. Reagan et al. [2015] also observed this effect. For the 180 day shut-in scenario, much more tracer is imbibed (53%) and slightly less reaches the aquifer (TTA1000 5 1.0%) than in the base case scenario. Imbibition plays an important role in the transport of HF fluid tracer, and its role becomes very significant in conjunction with well production. 6.2.6. Permeability of Fractured Shale (Production, Continued Migration Stages) 

The effective permeability of the fractured shale during the production and continued migration stages is uncertain for two reasons. First, fracture apertures decrease significantly as the pore pressure decreases from approximately lithostatic during the injection stage to much lower pressures during the production stage. Second, relative permeability may play a role in reducing the flow of HF fluid and brine toward the well during the production stage and out of the shale formation during the continued migration stage. In our base case scenario we set the fractured shale permeability to 10<sup>217</sup> m<sup>2</sup> [King, 2012], based on assumed fracture apertures. In alternative scenarios we decrease the permeability by up to 2 orders of magnitude to capture the plausible role of relative permeability effects. 

Decreasing the fractured shale permeability decreases the amount of tracer removed by the well and has a nonmonotonic effect on TTA1000. The amount of tracer removed by the well is 68%, 27%, and 4% for 

SUBSURFACE FLOW MODEL OF FRACTURING FLUIDS 

BIRDSELL ET AL. 

7182 

Water Resources Research 

10.1002/2015WR017810 

fractured shale permeabilities of 10<sup>217</sup> , 10<sup>218</sup> , and 10<sup>219</sup> m<sup>2</sup> , respectively, shown in Figure 9f. The TTA1000 is 1.2%, 2.0%, and 0.9% for the same set of permeabilities, shown in Figure 10f. The increase in TTA1000 as permeability decreases from 10<sup>217</sup> to 10<sup>218</sup> m<sup>2</sup> is attributed to the fact that less tracer is removed by the well because of the lower permeability, which leaves more in the subsurface to migrate upward. The subsequent decrease in TTA1000 as permeability decreases to 10<sup>219</sup> m<sup>2</sup> is because the drastically reduced shale permeability hinders flow out of the shale formation into the overlying permeable pathway. Relative permeability in the fractured shale plays a role in tracer migration, but without more data (e.g., capillary pressuresaturation-relative permeability relationships from shale gas formations) it is difficult to determine whether it will increase or decrease the amount of tracer that can reach an overlying aquifer. In any case, the TTA1000 for all these cases is relatively low in terms of risk to aquifer contamination. 6.2.7. Heterogeneity of Overburden 

In the base case scenario, the overburden between the shale unit and the aquifer is represented as a homogeneous porous medium. In an alternative scenario, the overburden is represented using three equally sized layers that together have the same effective vertical permeability (equation (5)) as the overburden in the base case scenario. The middle layer is approximately 30 times less permeable than the top and bottom layers. This scenario allows us to evaluate the extent to which a heterogeneous overburden will force more flow horizontally and reduce the risk of aquifer contamination [Saiers and Barth, 2012]. 

The heterogeneous overburden reduced TTA1000 from 1.2% to 0.9% because the higher-permeability regions of the overburden accept more horizontal flow of tracer. Once in the uncompromised overburden, the tracer migration is slower until it can move back into the fracture. In reality, there are generally more than three distinct geological layers above major shale gas plays. This suggests that the reduction of HF fluid migration due to overburden heterogeneity could be quite significant. Results are shown in Figures 9g and 10g. 6.2.8. Permeable Pathway Heterogeneity, Geometry, and Porosity 

Permeable pathways are likely to be heterogeneous because fractures, faults, and wellbore microannuli exhibit spatially variable aperture; they may have more complex geometries rather than being situated perfectly vertical; and their porosity is time varying (section 5.3). To evaluate the sensitivity of TTA to heterogeneity, we vary the permeability within the narrow permeable pathway while maintaining the same overall effective vertical permeability (equation (5)). To evaluate the sensitivity of TTA to pathway geometry, we simulate two simple cases wherein: (1) the permeable pathway has horizontal branches attached to the main vertical path and (2) the pathway is circuitous such that flow must have vertical and horizontal components to go through the pathway. We acknowledge that these geometries are idealized, but we include results to qualitatively illustrate the influence of a more complex permeable pathway on HF fluid transport. For the porosity sensitivity analysis, the base case scenario uses an intermediate porosity of 0.01, and the porosity varies across the extremes of /5/fw50:001 and /5/vw50:051. 

Permeable pathway heterogeneity, geometry, and porosity have little to no effect on TTA1000, as shown in Figures 9h–9j and 10h–10j. There is no difference in TTA1000 for a narrow heterogeneous and narrow homogeneous permeable pathway because the flow is almost exclusively in the permeable pathway. One might expect more tracer to be driven horizontally into the surrounding matrix near the low-permeability region of the pathway, but this influence is not strong enough to affect TTA1000. On the other hand, because the equivalent vertical permeability is the harmonic average (equation (5)), one small section of lowpermeability material within the permeable pathway can drastically reduce the effective permeability of the entire pathway. This was confirmed in a simulation with less than 10 m of a good seal section (k510<sup>217</sup> m<sup>2</sup> ) in an otherwise leaky permeable pathway (k58:3310<sup>211</sup> m<sup>2</sup> ); TTA1000 was only 6310<sup>25</sup> %. This shows that short distances of intact well cement and/or short discontinuities in fractures and faults could be enough to preclude aquifer contamination. For the geometry sensitivity analysis, there is no difference in TTA1000 for a branching permeable pathway geometry, and a minor reduction occurs in TTA1000 for a circuitous pathway (TTA1000 5 1.0%). For the porosity sensitivity analysis, there is a small influence on the timing of the first occurrence of TTA, but TTA1000 is not sensitive to porosity over a 1000 year time frame. 6.2.9. Buoyancy 

We performed two types of sensitivity analyses on buoyancy. In the first sensitivity analysis, buoyancy was neglected with all other parameters the same as in the base-case simulation. TTA1000 decreased from 1.19% to 1.06% (see Figures 9k and 10k). The influence of buoyancy on TTA1000 is relatively small because the buoyancy effect is short-lived and the pressure gradients associated with injection, imbibition, and production are large in comparison with the buoyancy force. By the time production is complete (20 years after 

SUBSURFACE FLOW MODEL OF FRACTURING FLUIDS 

BIRDSELL ET AL. 

7183 

Water Resources Research 

10.1002/2015WR017810 

Figure 12. HF fluid concentration profiles for different overburden permeabilities 100 years after hydraulic fracturing, as discussed in section 6.2.9. As overburden permeability increases, the plume travels farther upward due to buoyancy. Well suction, imbibition, the pressure gradient due to a regional discharge zone, and the permeable pathway are excluded from these simulations to isolate the effect of buoyancy. Data for this figure are found in supporting information Data Set S8. 

injection), the buoyancy force is less than 5% of what it was initially, due to mixing of brine with the injected fluid. In a second sensitivity analysis, we evaluated whether the influence of buoyancy could be more significant with a higher overburden permeability. These simulations are only run for 100 rather than 1000 years because of the decreasing influence of buoyancy with time. HF fluid tracer profiles from the second sensitivity analysis are shown in Figure 12. As the overburden permeability increases, the plume farther moves upward and spreads more. The top of the HF fluid plume is 60, 140, 420, and 1120 m above the injection location after 100 years for overburden permeabilities of 10<sup>217</sup> , 10<sup>215</sup> , 10<sup>214</sup> , and 10<sup>213</sup> m<sup>2</sup> , respectively (where the ‘‘top of the plume’’ is defined as the height where the HF fluid concentra- 

tion � 0:01% of the injected concentration). Tracer migration is fairly insensitive to buoyant forces if the permeability of the overburden is small (� 10<sup>215</sup> m<sup>2</sup> ) and the distances between the aquifer and the shale reservoir are large (� 1500 m). However with a high-permeability overburden (� 10<sup>214</sup> m<sup>2</sup> ) and short separation distance (� 1000 m), the contribution of buoyancy could make a significant difference in TTA because HF fluids could enter aquifers via much larger areas (not just via the permeable pathway). In an overall assessment for deep shale reservoirs and low-permeability overburdens, buoyancy does not significantly influence HF fluid migration, especially when imbibition and well production also occur simultaneously. 

##### 7. Discussion, Suggestions for Future Modeling, and Conclusions 

With the accelerated development of hydraulic fracturing using horizontal wells as a technology for efficient recovery of gas and oil from unconventional reservoirs, concerns have been raised about the potential risks to groundwater resources. There is an ongoing active debate on this issue in various forums [Howarth et al., 2011]. To inform this debate objectively, several recent papers have developed numerical models of hydraulic fracturing fluids in the subsurface to evaluate the prospects for groundwater contamination, and the U.S. Environmental Protection Agency [2012] has commissioned modeling studies to evaluate hydraulic fracturing fluid and gas migration. In this paper, we have presented a review of this relatively recent body of literature on hydraulic fracturing fluid migration in the subsurface from a shale reservoir to an overlying aquifer. Our review describes the various factors contributing to upward fluid flow, including topographically driven flow, overpressured shale reservoirs, pressure increases due to the injection of HF fluids, buoyancy, and the presence of a permeable pathway. It also discusses the results and critiques from previous modeling studies [Myers, 2012a; Gassiat et al., 2013; Kissinger et al., 2013]. Our review uncovered that no previous modeling studies have considered the combined influence of buoyancy, well operations, and capillary imbibition. We therefore constructed a numerical model incorporating all these processes to investigate HF fluid migration in the subsurface. Novel features of our single-phase flow model are the representation of the most relevant multiphase flow effect (i.e., imbibition) using a sink term based on a semianalytical solution for spontaneous imbibition, and the careful representation of subsurface flow and transport across five stages of simulation that faithfully represent the prefracturing initial condition, injection, shut-in, production, and the period after the well is plugged and abandoned. Similar to previous studies, our model includes a continuous, vertical permeable pathway from the top of the shale reservoir to the aquifer, upward flow as in a regional discharge zone, and considers a nonreactive, nonadsorbing tracer, to represent the most favorable conditions for upward fluid migration. 

SUBSURFACE FLOW MODEL OF FRACTURING FLUIDS 

BIRDSELL ET AL. 

7184 

Water Resources Research 

10.1002/2015WR017810 

The new insights provided by our simulations are: 

1. Most notably, the combined influence of imbibition and well suction significantly reduce the risk of aquifer contamination (by up to a factor of 10 in our model) because (a) HF fluid is sequestered by capillary imbibition or removed by the well and (b) the flow field is altered such that the HF fluid remaining in the subsurface will largely be at greater depths, close to the wellbore. This suggests that previous modeling studies that neglected imbibition and production may have overestimated the likelihood and quantity of HF fluid that can migrate to shallow depths. It also suggests that a well should always be produced for a certain length of time, even if it is not economical, in the interest of removing HF fluid from the subsurface and reducing the chance of aquifer contamination. 

2. Reservoir overpressure has a vast range of possible effects. The worst case that we considered resulted in 8 times more TTA1000, but in many of the cases the results were no different than in the base case. Overpressure is a parameter that can be further investigated and constrained in future studies, especially since there is some ambiguity in the literature about how represent overpressure and associated well suction. See section 6.2.3 for a discussion of the different approaches to representing overpressure and subsequent production. 

3. Buoyancy is likely much less important than the effects of capillary imbibition, well operations, and overpressure. Although it may appear intuitively that buoyancy should play an important role in the upward migration of hydraulic fracturing fluids, the mobilization of buoyancy forces requires sufficient vertical permeability. In typical reservoir situations, the low permeability of the overburden implies that the role of buoyancy can be neglected in quantifying the upward migration of hydraulic fracturing fluids. Buoyancy is, however, important if the separation distance is small and/or the overburden permeability is large (section 6.2.9), and it is certainly very important in the case of gas migration [Reagan et al., 2015] because free-phase gas is more buoyant than HF fluid. 

Our model corroborates many conclusions derived from previous studies: (i) most notably, without a permeable pathway, HF fluid cannot travel far enough to reach an overlying aquifer in most shale plays [Myers, 2012a], except possibly for shallow shales or those with highly permeable overburdens, (ii) a heterogeneous overburden will encourage horizontal flow and decrease the amount of HF fluid that could reach an aquifer [Saiers and Barth, 2012], (iii) overpressure can drive a significant amount of upward flow [Gassiat et al., 2013], but well production could limit this effect substantially. In an overall assessment, our modeling results and most previous studies suggest that the probability of aquifer contamination by hydraulic fracturing fluids is relatively low. Although Myers [2012a] suggested the possibility of significant HF fluid migration even within decades, many of the subsequent modeling studies suggest that fluid migration over vertical distances of the order of 1–2 km will deliver very low amounts of fracturing fluid [Kissinger et al., 2013], or are significant only over 1000 year time scales [Gassiat et al., 2013], even in the presence of a permeable pathway. 

The general sense emerging from various modeling studies is that the probability of hydraulic fluid migration over the large vertical distances that separate the upper limit of induced hydraulic fractures and deepest groundwater aquifers is very small. However, the same may not be true if HF is performed at shallow depths. Evidence for this claim comes from: (i) our result that upward migration can be on the order of 100 m through relatively low-permeability overburden, even if no permeable pathway exists (section 6.1); (ii) the dependence of gas migration on separation distance between reservoir and aquifer [Reagan et al., 2015], which is assumed to extend to HF fluid migration; and (iii) the expectation that the likelihood of a continuous permeable pathway will increase as the separation distance decreases. To better understand extreme worst-case scenarios, future modeling studies should focus on attempting to explain the rare reported instances where HF fluid migration to shallow aquifers may have occurred within short time frames. Some of these case studies are discussed below: 

1. Fracturing fluid gel (rather than slick water) was found in a drinking water well in Jackson County, West Virginia in 1982. The water well was 128 m in depth [U.S. Environmental Protection Agency, 1987], and the gas well was �1220 m deep [Vidic et al., 2013]. The casing was cemented below the bottom of the drinking water aquifer, and no state regulations were violated [U.S. Environmental Protection Agency, 1987]. There were four nearby gas wells that could have served as conduits for fluid migration [Vidic et al., 2013]. 

2. Thermogenic and biogenic natural gas and BTEX above regulated limits were found in West Divide Creek in Garfield County, CO in 2004. The source of the BTEX is uncertain, but it could have been from HF fluid. Previous studies on the area have identified natural faults, natural fractures, and wellbore integrity issues 

SUBSURFACE FLOW MODEL OF FRACTURING FLUIDS 

BIRDSELL ET AL. 

7185 

Water Resources Research 

10.1002/2015WR017810 

as likely pathways for gas and fluids [Mordick, 2011]. The culprit is believed to be an improperly cemented well [Mordick, 2011]. 

3. In 2008, home owners living near Pavillion, WY complained to the U.S. EPA about the taste and odor of their well water [DiGiulio et al., 2011]. The EPA’s initial study found many chemicals associated with HF fluids in the aquifer and claimed that they were likely due to HF [DiGiulio et al., 2011], but questions about the methodology arose [Wright et al., 2012; Vidic et al., 2013]. The U.S. EPA, the U.S. Geological Survey, and the Wyoming Department of Environmental Quality have all studied this site, and the investigation is ongoing [DiGiulio et al., 2011; Wright et al., 2012]. 

The geology and drilling depths make the Pavillion, WY case somewhat unique from many shale gas plays. First of all, the target formation, the Lower Wind River formation, is a sandstone rather than a shale [Wright et al., 2012], and would therefore have a higher permeability associated with it. Secondly, fracturing occurred at a shallow depth without much distance between the drinking water resource and the production zone (although these are similar distances between drinking water and shale gas in the New Albany and Antrim shales). Gas wells have surface casings as shallow as 110 m BGS and were hydraulically fractured as shallow as 372 m BGS. Some water wells are screened below the gas well surface casings (as deep as 244 m BGS) [DiGiulio et al., 2011]. 

4. In 2010, annular pressure (also known as bradenhead pressure) exceeded the allowable pressure (>24 atm) at several gas wells drilled to the Marcellus on the Welles property in Bradford County, PA [Llewellyn et al., 2015]. Shortly thereafter, natural gas, sediment, and white foam were observed in at least three nearby water wells and one water well had detectable levels of 2-n-Butoxyethanol, a surfactant that is sometimes used in drilling and fracturing fluids. Isotopically, the methane in the water wells matched the methane in the annular space of the gas wells. Llewellyn et al. [2015] claim that if fracturing fluid did contaminate the shallow aquifer, it is much more likely that the fluid came from a surface spill or from a shallow subsurface leak rather than from the Marcellus. Numerical modeling could serve to further evaluate this claim. 

###### Acknowledgments 

We gratefully acknowledge financial support from the National Science Foundation grant #CBET-1240584 and the Institute for Geophysics and Planetary Physics at Los Alamos National Laboratory (IGPP: subcontract #230859). Any opinions, findings, and conclusions or recommendations expressed in this material are those of the authors and do not necessarily reflect the views of the National Science Foundation. We also thank reviewers James William Carey and Greg Lackey and Editor in Chief Alberto Montanari for their helpful comments. Supporting data are included in supporting information (Data Sets S1–S7). 

##### References 

Beauge, J. (2013), Three-fourths of producing horizontal-drilled Marcellus gas wells paid off: Penn state prof, PennLive, 1 Oct. [Available at http://www.pennlive.com/midstate/index.ssf/2013/10/three-fourths_of_producing_hor.html.] 

Birdsell, D. T., H. Rajaram, and G. Lackey (2015), Imbibition of hydraulic fracturing fluids into partially saturated shale, Water Resour. Res., doi:10.1002/2015WR017621, in press. 

Bloechle, B. W. (2001), On the Taylor dispersion of reactive solutes in a parallel-plate fracture-matrix system, PhD thesis, Univ. of Colo., Boulder, Colo. 

Byrnes, A. P. (2011), Role of induced and natural imbibition in frac fluid transport and fate in gas shales, paper presented at Technical Workshops for Hydraulic Fracturing Study, U.S. Environ. Prot. Agency. 

- Cai, Z., and U. Ofterdinger (2014), Numerical assessment of potential impacts of hydraulically fractured Bowland shale on overlying aquifers, Water Resour. Res., 50, 6236–6259, doi:10.1002/2013WR014943. 

- Carey, J. W. (2013), Geochemistry of wellbore integrity in CO2 sequestration: Portland cement-steel-brine-CO2 interactions, Rev. Mineral. Geochem., 77(1), 505–539. 

- Chaudhuri, A., H. Rajaram, and H. Viswanathan (2013), Early-stage hypogene karstification in a mountain hydrologic system: A coupled thermohydrochemical model incorporating buoyant convection, Water Resour. Res., 49, 5880–5899, doi:10.1002/wrcr.20427. 

- Cheng, Y. (2012), Impact of water dynamics in fractures on the performance of hydraulically fractured wells in gas-shale reservoirs, J. Can. Pet. Technol., 51(2), 143–151. 

Choi, Y.-S., D. Young, S. Ne�sic´, and L. G. Gray (2013), Wellbore integrity and corrosion of carbon steel in CO2 geologic storage environments: A literature review, Int. J. Greenhouse Gas Control, 16, S70–S77. 

- Cipolla, C., and J. Wallace (2014), Stimulated reservoir volume: A misapplied concept?, paper presented at SPE Hydraulic Fracturing Technology Conference, Soc. of Pet. Eng. 

Cohen, H. A., T. Parratt, and C. B. Andrews (2013), Potential contaminant pathways from hydraulically fractured shale to aquifers, Ground Water, 51(3), 317–319, doi:10.1111/gwat.12015. 

- Curtis, J. B. (2002), Fractured shale-gas systems, AAPG Bull., 86(11), 1921–1938. 

- Dahi-Taleghani, A., and J. E. Olson (2011), Numerical modeling of multistranded-hydraulic-fracture propagation: Accounting for the interaction between induced and natural fractures, SPE J., 16(3), 575–581. 

- Das, I., and M. D. Zoback (2013a), Long-period, long-duration seismic events during hydraulic stimulation of shale and tight-gas reservoirs, part 1: Waveform characteristics, Geophysics, 78(6), doi:10.1190/geo2013-0164.1. 

- Das, I., and M. D. Zoback (2013b), Long-period, long-duration seismic events during hydraulic stimulation of shale and tight-gas reservoirs, part 2: Location and mechanisms, Geophysics, 78(6), KS97–KS105, doi:10.1190/geo2013-0165.1. 

Davies, R. J. (2011), Methane contamination of drinking water caused by hydraulic fracturing remains unproven, Proc. Natl. Acad. Sci. U. S. A., 108(43), E871–E871. 

Davies, R. J., S. A. Mathias, J. Moss, S. Hustoft, and L. Newport (2012), Hydraulic fractures: How far can they go?, Mar. Pet. Geol., 37(1), 1–6, doi:10.1016/j.marpetgeo.2012.04.001. 

Dehghanpour, H., Q. Lan, Y. Saeed, H. Fei, and Z. Qi (2013), Spontaneous imbibition of brine and oil in gas shales: Effect of water adsorption and resulting microfractures, Energy Fuels, 27(6), 3039–3049, doi:10.1021/ef4002814. 

Deming, D. (2001), Introduction to Hydrogeology, McGraw-Hill. 

SUBSURFACE FLOW MODEL OF FRACTURING FLUIDS 

BIRDSELL ET AL. 

7186 

Water Resources Research 

10.1002/2015WR017810 

DiGiulio, D. C., R. T. Wilkin, C. Miller, and G. Oberley (2011), Investigation of Ground Water Contamination Near Pavillion, Wyoming, U.S. Environ. Prot. Agency, Off. of Res. and Dev., Natl. Risk Manage. Res. Lab. 

Downing, B. (2012), Pennsylvania has 9,848 Marcellus shale wells, Akron Beacon J. 

Engelder, T. (2012), Capillary tension and imbibition sequester Frack fluid in Marcellus gas shale, Proc. Natl. Acad. Sci. U. S. A., 109(52), E3625–E3625, doi:10.1073/pnas.1216133110. 

Engelder, T., G. G. Lash, and R. S. Uzc�ategui (2009), Joint sets that enhance production from middle and upper Devonian gas shales of the Appalachian basin, AAPG Bull., 93(7), 857–889, doi:10.1306/03230908032. 

Engelder, T., L. M. Cathles, and L. T. Bryndzia (2014), The fate of residual treatment water in gas shale, J. Unconv. Oil Gas Resour., 7, 33–48, doi:10.1016/j.juogr.2014.03.002. Fairley, J., J. Heffner, and J. Hinds (2003), Geostatistical evaluation of permeability in an active fault zone, Geophys. Res. Lett., 30(18), 1962, doi:10.1029/2003GL018064. 

Fisher, M. K., and N. R. Warpinski (2012), Hydraulic-fracture-height growth: Real data, SPE Prod. Oper., 27(01), 8–19. Flewelling, S. A., and M. Sharma (2014), Constraints on upward migration of hydraulic fracturing fluid and brine, Ground Water, 52(1), 9–19, doi:10.1111/gwat.12095. Flewelling, S. A., and M. Sharma (2015), Comment on ‘‘Hydraulic fracturing in faulted sedimentary basins: Numerical simulation of potential contamination of shallow aquifers over long time scales’’ by Claire Gassiat et al., Water Resour. Res., 51, 1872–1876, doi:10.1002/ 2014WR015904. 

Gassiat, C., T. Gleeson, R. Lefebvre, and J. McKenzie (2013), Hydraulic fracturing in faulted sedimentary basins: Numerical simulation of potential contamination of shallow aquifers over long time scales, Water Resour. Res., 49, 8310–8327, doi:10.1002/2013WR014287. Hinton, D. D. (2012), The seventeen-year overnight wonder: George Mitchell and unlocking the Barnett shale, J. Am. Hist., 99(1), 229–235, doi:10.1093/jahist/jas064. 

Howarth, R. W., A. Ingraffea, and T. Engelder (2011), Natural gas: Should fracking stop?, Nature, 477(7364), 271–275. Ingraffea, A. R., M. T. Wells, R. L. Santoro, and S. B. Shonkoff (2014), Assessment and risk analysis of casing and cement impairment in oil 

and gas wells in Pennsylvania, 2000–2012, Proc. Natl. Acad. Sci. U. S. A., 111(30), 10,955–10,960, doi:10.1073/pnas.1323422111. 

Jackson, R. B., A. Vengosh, T. H. Darrah, N. R. Warner, A. Down, R. J. Poreda, S. G. Osborn, K. Zhao, and J. D. Karr (2013), Increased stray gas abundance in a subset of drinking water wells near Marcellus shale gas extraction, Proc. Natl. Acad. Sci. U. S. A., 110(28), 11,250– 11,255. 

Kang, M. (2014), CO2, methane, and brine leakage through subsurface pathways: Exploring modeling, measurement, and policy options, PhD thesis, Princeton Univ., Princeton, N. J. 

Kerr, R. A. (2010), Natural gas from shale bursts onto the scene, Science, 328, 1624–1626. Kim, J., and G. J. Moridis (2013), Development of the T1 M coupled flow–geomechanical simulator to describe fracture propagation and coupled flow–thermal–geomechanical processes in tight/shale gas systems, Comput. Geosci., 60, 184–198. 

Kim, J., and G. J. Moridis (2015), Numerical analysis of fracture propagation during hydraulic fracturing operations in shale gas systems, Int. J. Rock Mech. Min. Sci., 76, 127–137. King, G. E. (2012), Hydraulic fracturing 101: What every representative, environmentalist, regulator, reporter, investor, university researcher, neighbor and engineer should know about estimating Frac risk and improving Frac performance in unconventional gas and oil wells, paper presented at SPE Hydraulic Fracturing Technology Conference, Soc. of Pet. Eng. 

King, G. E. (2014), 60 years of multi-fractured vertical, deviated and horizontal wells: What have we learned?, paper presented at SPE Annual Technical Conference and Exhibition, Soc. of Pet. Eng. King, G. E., and D. E. King (2013), Environmental risk arising from well construction failure: Difference between barrier and well failure, and estimates of failure frequency across common well types, locations and well age, paper presented at SPE Annual Technical Conference and Exhibition, Soc. of Pet. Eng. 

Kissinger, A., R. Helmig, A. Ebigbo, H. Class, T. Lange, M. Sauter, M. Heitfeld, J. Klunker, and W. Jahnke (2013), Hydraulic fracturing in uncon-€ ventional gas reservoirs: Risks in the geological system, part 2, Environ. Earth Sci., 70(8), 3855–3873. 

Lange, T., M. Sauter, M. Heitfeld, K. Schetelig, K. Brosig, W. Jahnke, A. Kissinger, R. Helmig, A. Ebigbo, and H. Class (2013), Hydraulic fracturing in unconventional gas reservoirs: Risks in the geological system, part 1, Environ. Earth Sci., 70(8), 3839–3853, doi:10.1007/s12665013-2803-3. Laughrey, C. D., D. A. Billman, and M. R. Canich (2004), Petroleum geology and geochemistry of the council run gas field, north central Pennsylvania, AAPG Bull., 88(2), 213–239, doi:10.1306/1006030114. Lefebvre, R., T. Gleeson, J. M. McKenzie, and C. Gassiat (2015), Reply to comment by Flewelling and Sharma on ‘‘Hydraulic fracturing in faulted sedimentary basins: Numerical simulation of potential contamination of shallow aquifers over long time scales’’, Water Resour. Res., 51, 1877–1882, doi:10.1002/2014WR016698. 

Lenton, T. M. (2011), Early warning of climate tipping points, Nat. Clim. Change, 1(4), 201–209. Llewellyn, G. T. (2014), Evidence and mechanisms for Appalachian basin brine migration into shallow aquifers in NE Pennsylvania, USA, Hydrogeol. J., 22(5), 1055–1066. Llewellyn, G. T., F. Dorman, J. Westland, D. Yoxtheimer, P. Grieve, T. Sowers, E. Humston-Fulmer, and S. L. Brantley (2015), Evaluating a groundwater supply contamination incident attributed to Marcellus shale gas development, Proc. Natl. Acad. Sci. U. S. A., 112(20), 6325– 6330, doi:10.1073/pnas.1420279112. Makhanov, K., A. Habibi, H. Dehghanpour, and E. Kuru (2014), Liquid uptake of gas shales: A workflow to estimate water loss during shut-in periods after fracturing operations, J. Unconv. Oil Gas Resour., 7, 22–32, doi:10.1016/j.juogr.2014.04.001. 

Mayerhofer, M. J., E. Lolon, N. R. Warpinski, C. L. Cipolla, D. Walser, and C. M. Rightmire (2010), What is stimulated reservoir volume?, SPE Prod. Oper., 25(1), 89–98. McWhorter, D. B., and D. K. Sunada (1990), Exact integral solutions for two-phase flow, Water Resour. Res., 26(3), 399–413, doi:10.1029/ WR026i003p00399. 

Molofsky, L. J., J. A. Connor, S. K. Farhat, A. S. Wylie, and T. Wagner (2011), Methane in Pennsylvania water wells unrelated to Marcellus shale fracturing, Oil Gas J. Moniz, E. J., H. D. Jacoby, A. Meggs, R. Armtrong, D. Cohn, S. Connors, J. Deutch, Q. Ejaz, J. Hezir, and G. Kaufman (2011), The future of natural gas, report, Mass. Inst. of Technol. Mordick, B. (2011), Risks to drinking water from oil and gas wellbore construction and integrity: Case studies and lessons learned, in Proceedings of the Technical Workshops for the Hydraulic Fracturing Study: Well Construction and Operations, U.S. Environ. Prot. Agency, Washington, D. C. [Available at http://www2.epa.gov/sites/production/files/documents/riskstodrinkingwaterfromoilandgaswellboreconstructionandintegrity. pdf.] 

SUBSURFACE FLOW MODEL OF FRACTURING FLUIDS 

BIRDSELL ET AL. 

7187 

Water Resources Research 

10.1002/2015WR017810 

Myers, T. (2012a), Potential contaminant pathways from hydraulically fractured shale to aquifers, Ground Water, 50(6), 872–882, doi: 10.1111/j.1745-6584.2012.00933.x. 

Myers, T. (2012b), Author’s reply, Ground Water, 50, 828–830, doi:10.1111/j.1745-6584.2012.00991.x. Myers, T. (2013), Author’s Reply, Ground Water, 51, 319–321, doi:10.1111/gwat.12016. Neuzil, C. (1994), How permeable are clays and shales?, Water Resour. Res., 30(2), 145–150. 

Nunn, J. A. (2012), Burial and thermal history of the Haynesville shale: Implications for overpressure, gas generation, and natural hydrofracture, Gulf Coast Assoc. Geol. Soc., 1, 81–96. 

Osborn, S. G., A. Vengosh, N. R. Warner, and R. B. Jackson (2011), Methane contamination of drinking water accompanying gas-well drilling and hydraulic fracturing, Proc. Natl. Acad. Sci. U. S. A., 108(20), 8172–8176. Osborne, M. J., and R. E. Swarbrick (1997), Mechanisms for generating overpressure in sedimentary basins: A reevaluation, AAPG Bull., 81(6), 1023–1041. 

Reagan, M. T., G. J. Moridis, N. D. Keen, and J. N. Johnson (2015), Numerical simulation of the environmental impact of hydraulic fracturing of tight/shale gas reservoirs on near-surface groundwater: Background, base cases, shallow reservoirs, short-term gas, and water transport, Water Resour. Res., 51, 2543–2573, doi:10.1002/2014WR016086. 

Robson, S. G., and E. R. Banta (1995), Ground water atlas of the United States: Segment 2, Arizona, Colorado, New Mexico, Utah, in Ground Water Atlas of the United States, Hydrol. Invest. Atlas 730-C, 32 pp., U. S. Geol. Surv., Reston, Va. 

Rogers, J. D., T. L. Burke, S. G. Osborn, and J. N. Ryan (2015), A framework for identifying organic compounds of concern in hydraulic fracturing fluids based on mobility and persistence in groundwater, Environ. Sci. Technol. Lett., 2(6), 158–164, doi:10.1021/acs.estlett.5b00090. Roychaudhuri, B., T. T. Tsotsis, and K. Jessen (2011), An experimental and numerical investigation of spontaneous imbibition in gas shales, paper presented at SPE Annual Technical Conference and Exhibition, Soc. of Pet. Eng. 

Rutqvist, J., A. P. Rinaldi, F. Cappa, and G. J. Moridis (2013), Modeling of fault reactivation and induced seismicity during hydraulic fracturing of shale-gas reservoirs, J. Pet. Sci. Eng., 107, 31–44. Saiers, J. E., and E. Barth (2012), Potential contaminant pathways from hydraulically fractured shale aquifers, Ground Water, 50(6), 826–828, doi:10.1111/j.1745-6584.2012.00990.x. Scott, G. R., and W. A. Cobban (1965), Geologic and biostratigraphic map of the Pierre Shale between Jarre Creek and Loveland, Colorado, Map 1-439, U.S. Geol. Surv., Reston, Va. Simmons, C. T., T. R. Fenstemaker, and J. M. Sharp (2001), Variable-density groundwater flow and solute transport in heterogeneous porous media: Approaches, resolutions and future challenges, J. Contam. Hydrol., 52(1), 245–275, doi:10.1016/S0169-7722(01)00160-7. Stringfellow, W. T., J. K. Domen, M. K. Camarillo, W. L. Sandelin, and S. Borglin (2014), Physical, chemical, and biological characteristics of compounds used in hydraulic fracturing, J. Hazardous Mater., 275, 37–54, doi:10.1016/j.jhazmat.2014.04.040. U.S. Department of Energy (2009), Modern Shale Gas Development in the United States: A Primer, U.S. Dep. of Energy Off. of Fossil Energy, Natl. Energy Technol. Lab. 

U.S. Energy Information Administration (2013), North America leads the world in production of shale gas, report. 

U.S. Environmental Protection Agency (1987), Report to congress: Management of wastes from the exploration, development, and production of crude oil, natural gas, and geothermal energy, report. U.S. Environmental Protection Agency (2012), Study of the potential impacts of hydraulic fracturing on drinking water resources: Progress report, report. U.S. Environmental Protection Agency (2015), Review of well operator files for hydraulically fractured oil and gas production wells: Well design and construction, report. 

U.S. National Research Council (1996), Nuclear Wastes: Technologies for Separations and Transmutation, Natl. Acad. Press. Vidic, R., S. Brantley, J. Vandenbossche, D. Yoxtheimer, and J. Abad (2013), Impact of shale gas development on regional water quality, Science, 340(6134), 826–835, doi:10.1126/science.1235009. 

Viswanathan, H. S., R. J. Pawar, P. H. Stauffer, J. P. Kaszuba, J. W. Carey, S. C. Olsen, G. N. Keating, D. Kavetski, and G. D. Guthrie (2008), Development of a hybrid process and system model for the assessment of wellbore leakage at a geologic CO2 sequestration site, Environ. Sci. Technol., 42(19), 7280–7286, doi:10.1021/es800417x. 

Warner, N. R., R. B. Jackson, T. H. Darrah, S. G. Osborn, A. Down, K. Zhao, A. White, and A. Vengosh (2012a), Geochemical evidence for possible natural migration of Marcellus formation brine to shallow aquifers in Pennsylvania, Proc. Natl. Acad. Sci. U. S. A., 109(30), 11,961– 11,966, doi:10.1073/pnas.1121181109. 

Warner, N. R., R. B. Jackson, T. H. Darrah, S. G. Osborn, A. Down, K. Zhao, A. White, and A. Vengosh (2012b), Reply to Engelder: Potential for fluid migration from the Marcellus formation remains possible, Proc. Natl. Acad. Sci. U. S. A., 109(52), E3626, doi:10.1073/ pnas.1217974110. 

Warpinski, N. R., and M. J. Mayerhofer (2008), Stimulating unconventional reservoirs: Maximizing network growth while optimizing fracture conductivity, paper SPE 114173 presented at Unconventional Reservoirs Conference, Soc. of Pet. Eng., Keystone, Colo. Watson, T. L., and S. Bachu (2009), Evaluation of the potential for gas and CO2 leakage along wellbores, SPE Drill. Completion, 24, 115–126. Wojtanowicz, A. (2008), Environmental control of well integrity, in Environmental Technology in the Oil Industry, chap. 3, pp. 53–75, Springer. 

Wright, P. R., P. B. McMahon, D. K. Mueller, and M. L. Clark (2012), Groundwater-quality and quality-control data for two monitoring wells near Pavillion, Wyoming, April and May 2012, technical report, U.S Geol. Surv., Reston, Va. Zimmerman, R. W., and G. S. Bodvarsson (1996), Hydraulic conductivity of rock fractures, Transp. Porous Media, 23(1), 1–30. Zyvoloski, G. A., B. A. Robinson, Z. V. Dash, and L. L. Trease (1997), Summary of the models and methods for the FEHM application—A finite-element heat-and mass-transfer code, technical report, Los Alamos Natl. Lab., Los Alamos, N. M. 

SUBSURFACE FLOW MODEL OF FRACTURING FLUIDS 

BIRDSELL ET AL. 

7188 

