# Modeling the effects of silica deposition and fault rupture on natural geothermal systems

**Authors:** D. E. Dempsey, J. V. Rowland, G. A. Zyvoloski, R. A. Archer  
**Published in:** Journal of Geophysical Research: Solid Earth (2012)  
**DOI (version of record):** https://doi.org/10.1029/2012jb009218  
**This copy:** Published version. Text extracted from the PDF at https://ddempsey.github.io/papers/2012-dempsey-modeling-effects-silica-deposition-fault/dempsey2012-modeling-effects-silica.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** Published version, posted under AGU's author self-archiving policy. © 2012 American Geophysical Union. All Rights Reserved. Version of record: https://doi.org/10.1029/2012jb009218  

---
JOURNAL OF GEOPHYSICAL RESEARCH, VOL. 117, B05207, doi:10.1029/2012JB009218, 2012 

# Modeling the effects of silica deposition and fault rupture on natural geothermal systems 

## D. E. Dempsey,<sup>1</sup> J. V. Rowland,<sup>2</sup> G. A. Zyvoloski,<sup>3</sup> and R. A. Archer<sup>1</sup> 

Received 8 February 2012; revised 9 April 2012; accepted 11 April 2012; published 19 May 2012. 

[1] Natural geothermal convection abounds within the Taupo Volcanic Zone (TVZ) of New Zealand’s Central North Island. In many locations the highly porous eruptive products that blanket the landscape have been altered by the throughput of hydrothermal fluids and the consequent deposition of silica. We detail a numerical model that considers the evolution of a geothermal plume in the presence of silica deposition/ dissolution that controls an evolving permeability distribution. Precipitation of silica occurs according to a gradient reaction regime, in which the dissolved silica concentration is controlled by the temperature dependent silica solubility. Over a period of 120 kyr, continuous geothermal circulation leads to the development of a low permeability cap-zone, approximately 200 m thick, above the main geothermal upflow zone. The cap-zone encourages lateral flow of rising fluids, increasing the area across which geothermal expression is observed. It also has an insulating effect on fluids below the cap, causing increases in temperature, enthalpy, and the reservoir potential of the field. A second model is constructed to consider the specific scenario of fault rupture through the impermeable cap-zone. Coseismic increases in permeability along the fault plane produce vigorous, renewed flow through the center of the geothermal field, temporarily reducing lateral flows. However, resealing of near surface permeability is rapid, and the restoration of lateral flows and recovery of the geothermal reservoir occurs within �10 kyr. These effects are discussed in the context of two TVZ geothermal fields: the extinct Ohakuri field, and Te Kopia, which is situated on a major active normal fault. 

Citation: Dempsey, D. E., J. V. Rowland, G. A. Zyvoloski, and R. A. Archer (2012), Modeling the effects of silica deposition and fault rupture on natural geothermal systems, J. Geophys. Res., 117, B05207, doi:10.1029/2012JB009218. 

## 1. Introduction 

[2] Precipitation of SiO2 as quartz into fractures and open pore spaces plays an important role in the development of veining [e.g., Sharp, 1960; Fisher and Brantley, 1992; Bons, 2001], cementation [e.g., Robinson and Gluyas, 1992; Walderhaug, 1994] and epithermal mineralization [White and Hedenquist, 1990; Simmons and Browne, 2000]. It also reduces the intrinsic permeability of rock, retarding its ability to conduct fluid and thereby exercising a negative feedback on the precipitation rate [Andre and Rajaram, 2005]. Such processes have previously been considered 

> 1Department of Engineering Science, University of Auckland, Auckland, New Zealand. 

> 2School of Environment, University of Auckland, Auckland, New Zealand. 

> 3Earth and Environmental Sciences Division, Los Alamos National Laboratory, Los Alamos, New Mexico, USA. 

Corresponding author: D. E. Dempsey, Department of Engineering Science, University of Auckland, Private Bag 92019, Auckland 1142, New Zealand. (d.dempsey@auckland.ac.nz) 

Copyright 2012 by the American Geophysical Union. 0148-0227/12/2012JB009218 

analytically [e.g., Lowell et al., 1993] and in numerical models for the evolution of limestone karst systems [e.g., Andre and Rajaram, 2005; Chaudhuri et al., 2009] and fracture apertures and networks [e.g., Chaudhuri et al., 2008]. Chaudhuri et al. [2012] modeled silica deposition in a gradient reaction regime and demonstrated rapid decrease in the transmissivity of a fracture network as the mean fracture aperture is reduced toward a critical value. 

[3] Precipitation of silica within a fracture or pore space occurs when a reduction in fluid temperature causes silica solubility to drop below the local concentration of dissolved silica. The manner in which the precipitation or dissolution reactions proceed depends on reaction rate and fluid velocity [Phillips, 1991]. For slow reaction rates and high fluid velocities, disequilibrium of mineralizing chemical species may be widespread, and the reaction regime is classified as kinetic. Any numerical modeling must account for chemical transport and the relevant reaction kinetics [e.g., Martin and Lowell, 2000; O’Brien et al., 2003; Szymczak and Ladd, 2004]. Where disequilibrium is minimized silica concentration can be assumed equal to the local solubility. This occurs at lower fluid velocities, where there is sufficient time for reactions to adjust mineral concentrations to their equilibrium 

B05207 

1 of 18 

DEMPSEY ET AL.: SILICA DEPOSITION IN GEOTHERMAL SYSTEMS 

B05207 

B05207 

values. Such conditions define a gradient reaction regime, in which the reaction rate is proportional to the gradient in mineral solubility, which in turn depends on some controlling parameter, e.g., temperature. Modeling the latter regime requires less computational resources [e.g., Chaudhuri et al., 2008, 2012], although does not account for the effects of boiling in the near surface [Cline et al., 1992]. 

[4] In this work we detail a numerical model that considers the heat and mass transfer of a single geothermal field with dimensions and heat characteristics similar to those of the Taupo Volcanic Zone (TVZ), New Zealand. The TVZ is a productive volcanic arc that hosts convective upflow of high temperature fluids (>250<sup>�</sup> C) at more than 20 distinct locations [Bibby et al., 1995]. Geothermal circulation is thought to be driven by extensive magmatic intrusion in the lower and mid-crust, which supplies heat to the upper crust at a depth of 6–8 km [Bryan et al., 1999]. This depth is commonly interpreted as the brittle-ductile transition and delineates the lower limit of the convective system [Bibby et al., 1995]. Fluid circulation is assisted by an abundance of normal fault structures, accommodating 5–15 mmyr<sup>�1</sup> of tectonic extension [Wallace et al., 2004], and which are presumed [e.g., Grindley and Browne, 1976] to make a significant contribution to the fracture permeability of basement rocks. Permeable pathways in the near surface (<2 km depth) are supplied by connected pore space within high porosity, quaternary volcanic deposits, disrupted by faulting and fracturing [Sibson, 1996; Rowland and Sibson, 2004]. 

[5] The abundance of quartz silicification reported within the TVZ [Simmons and Browne, 2000; Wood et al., 2001; Arehart et al., 2002; Bignall et al., 2004; Rowland and Sibson, 2004; Hocking et al., 2010] attests to the importance hydrothermal alteration in geothermal fields. Alteration can be broadly divided into two styles [Simmons and Browne, 2000]: replacement, in which precursor solid rock is converted to the alteration mineral, and direct deposition of minerals into open pore spaces or veins. The latter process reduces permeability and retards fluid flow, but also imparts improved tensile strength to the mineral assemblage. Silicification therefore influences structural evolution in the near surface of geothermal fields by encouraging fluid overpressuring, hydrofracturing and the reactivation of existing structures [Grindley and Browne, 1976; Henneberger and Browne, 1988; Sibson, 1990]. Such petrophysical changes are evident at the extinct Ohakuri geothermal system, where discrete quartz veins intersect a wider region of adularia [Henneberger and Browne, 1988]. This implies distributed flow through unaltered porous deposits progressing to intermittent fracturing, perhaps modulated by overpressurization, and mineralization. 

[6] The aim of the numerical models presented here is to investigate the feedback effects that silica deposition exercises on circulation and subsequent permeability modification. We discuss the formation of a low permeability cap-zone at the surface of a geothermal field, and the implications this has for surficial expression and sub-surface flow. Results are discussed in the context the Ohakuri and Te Kopia geothermal fields of the TVZ, both of which exhibit variety in the intensity and spatial extent of hydrothermal alteration. Te Kopia geothermal field is situated near the southern termination of the Paeroa Fault, which bounds the eastern margin of the Taupo Fault Belt. Geothermal 

expression also presents further north on the Paeroa Fault at the Waikite hot springs and at Orakeikorako geothermal field where the fault splays at its southern termination. Geothermal activity correlates with surface and inferred basement faulting elsewhere in the TVZ [e.g., Wood, 1992; Wood et al., 2001], presumably operating in regions of episodically renewed permeability [e.g., Rojstaczer et al., 1995; Sibson, 1990; Micklethwaite and Cox, 2004]. We consider the scenario that fault rupture perturbs a well-developed, low porosity cap-zone, and investigate subsequent permeability sealing at the enhanced mass flow rates accompanying the renewed permeability. 

## 2. Numerical Model 

[7] Numerical modeling of crustal scale geothermal circulation is carried out using the Finite Element Heat and Mass transfer (FEHM) code [Zyvoloski, 2007]. FEHM solves conservation of mass and energy equations for Darcy flow through a porous medium and has previously been used to model convection by Stauffer et al. [1997]. We have selected a computational domain that is 15 � 15 � 8 km along the (x, y, z) directions, which is regarded as sufficient to capture the central geothermal upflow zone and surrounding regions of recharge. Four meshes are used to partition the model domain for the various models: mesh 1, shown in Figure 1a, is a uniformly spaced grid with a node spacing of 200 m in each direction; mesh 2, shown in Figure 1b, is a structured grid with a higher density of nodes in the central upflow zone and near the surface; mesh 3, shown in Figure 1c, is the same as mesh 2 but double the resolution, i.e., half the nodal spacing; and mesh 4, shown in Figures 1d–1f, is a structured grid with the highest resolution at the near surface and within a central fault plane. Mesh 3 is used for the majority of simulations while meshes 1 and 2 are used to evaluate the extent that mesh non-uniformity and coarseness affects model results. Mesh 4, which contains the high density of nodes along a central fault plane, is used for modeling fault rupture through an evolved impermeable capzone (see section 5). 

[8] A Gaussian temperature distribution, with maximum value 340<sup>�</sup> C, is applied at the center of the base of the model to ensure upflow localizes in the center of the domain (Figure 2c). The maximum temperature corresponds approximately to the brittle-ductile transition temperature for quartzofeldspathic rock and its depth is consistent with seismogenic depths of 6–8 km within the TVZ [Bryan et al., 1999]. No flow boundary conditions are maintained at the base and sides of the model and atmospheric temperature and pressure conditions are applied at the surface. 

[9] Distributions of permeability and porosity exert an important control on the style and extent of silica deposition that develops. Distributions modeled here are inferred from the geological structure of the TVZ, which is characterized by high porosity volcanic strata, overlying older, faulted meta-sedimentary greywacke. Frequent and voluminous volcanism within the TVZ [Wilson et al., 1995] has evolved a 2 km thick layer of low density, moderately porous surficial strata. Horizontal fluid flow is assisted by a multitude of contacts between various deposits or rhyolitic intrusions. In contrast, vertical permeability is enhanced by extensive vertical and sub-vertical fracturing and faulting, which has 

2 of 18 

DEMPSEY ET AL.: SILICA DEPOSITION IN GEOTHERMAL SYSTEMS 

B05207 

B05207 

Figure 1. Model meshes used in simulations. (a) Mesh 1, uniform nodal spacing (200 m). (b) Mesh 2, coarse, higher resolution near the surface and center of the domain. (c) Mesh 3, same as mesh 2 but half the nodal spacing. (d–f) Mesh 4, high resolution near surface and center of the domain. Highest resolution along a narrow fault plane centered at x = 7.5 km. Arrows indicate extent over which each nodal spacing applies. Note that the unmarked fault width is 150 m and this has been partitioned into 10 slices. 

evolved in response to high extensional strain rates [Wallace et al., 2004]. Deeper than 2 km, permeability of the largely homogeneous greywacke is probably controlled by fractures and faults, or possibly dike intrusion [Lewis, 1960; Curewitz 

and Karson, 1998]. Porosity at these depths is comparatively low and probably dependent upon fracture density. The effects of fracture closure and pore space compaction with increasing depth and confining pressure are approximated by 

Figure 2. Imposed (a) permeability and (b) porosity properties with depth. (c) Temperature (<sup>�</sup> C) boundary condition imposed at the base of model. 

3 of 18 

DEMPSEY ET AL.: SILICA DEPOSITION IN GEOTHERMAL SYSTEMS 

B05207 

B05207 

Table 1. Coefficients Used in Silica Solubility Equation (3) as Functions of Temperature<sup>a</sup> 

|Coefficient|Functional Dependence on Temperature, T(K)|
|---|---|
|A|�4.66206 + 0.0034063T + 2179.7T<sup>�1 </sup>�<br>1.1292 �10<sup>6</sup>T<sup>�2 </sup>+ 1.3543 �10<sup>8</sup>T<sup>�3</sup><br>|
|B|�0.0014180T�806.97T<sup>�1</sup><br>|
|C|3.9465�10<sup>�4</sup>T|

> aData from Fournier and Potter [1982]. 

an exponential reduction in permeability with depth [Saar and Manga, 2004]. Bounding values for permeability and porosity used in the majority of simulations are shown in Figures 2a and 2b. 

[10] The effects of spatial heterogeneity in the permeability and porosity distributions is investigated by overlaying a spatially correlated fluctuation field on these distributions. This perturbation to the homogeneous distribution approximates the effect of a random fracture distribution associated with a crust at criticality [Heffer, 2007; Leary and Al-Kindy, 2002]. 

[11] Concentrations of dissolved ions, particularly salts that present in abundance, can affect the style and character of convection through modification of the fluid density. Denser fluids require a greater temperature perturbation to overcome ambient hydrostatic pressure conditions and initiate convective overturning. In mid-ocean ridge hydrothermal systems, this is an important consideration as parent fluids are oceanic in origin and approximately 3% salt by weight [e.g., Lewis and Lowell, 2009]. For the TVZ systems considered here, chemical compositions vary widely [Giggenbach, 1995] however maximum salt concentrations are on the order of 0.3% by weight, i.e., an order of magnitude less than seawater. Dissolved ion density effects are thus unlikely to represent a first order control on the systems under investigation here and this effect is neglected. 

### 2.1. Implementation of Silica Mineralization 

[12] As a first approximation to the dynamics of silica deposition, we assume all fluids within the system are at their saturation point with respect to dissolved silica, i.e., the system can be described by a gradient reaction regime. In this regime fluid transport is sufficiently slow that mineral concentrations are governed by temperature dependent reactions. The equilibrium assumption will be disturbed in regions where rapid fluid flow is promoted, which may include high permeability conduits associated with fault rupture, or the drilling of geothermal production wells. Pressure drops associated with these high permeability conduits promote boiling and further silica deposition [Simmons and Browne, 2000]. In regions where fluid transport outstrips the reaction rate, regions of fluid supersaturation will develop downstream. The silica deposition rate estimated under the gradient reaction assumption will then overestimate the true reaction rate. 

[13] Consistent with the gradient reaction assumption, a packet of fluid moving through a temperature gradient must either dissolve or precipitate silica to maintain an equilibrium concentration. The rate of deposition, or dissolution, at a particular location then depends principally on (i) the magnitude of the temperature gradient at that location, and (ii) the fluid throughput. 

[14] Consider a fluid flux, M, through a volume element of dimensions, dx, dy and dz, porosity, f, and temperature gradient, rT = dT/dz. Fluids flowing perpendicular to the temperature gradient follow isotherms, and thus do not contribute to quartz dissolution or precipitation. Therefore, we are interested in the amount of fluid flow parallel to the temperature gradient: 

Subsequent fluid references are to this component. 

[15] As fluid traverses the volume element it changes temperature by some small increment, DT, and consequently, its silica solubility, mq, changes by an amount 

Silica solubility is defined as the maximum amount of dissolved silica, nq, per mass of pure water and its functional dependence on temperature is described by Fournier and Potter [1982]. For temperatures ranging from 25 and 900<sup>�</sup> C and specific volume, V, ranging from 1 to 10 silica solubility is given by 

where the coefficients A, B and C are given in Table 1 as functions of temperature. The first derivative of silica solubility with respect to temperature is obtained from equation (3). 

[16] As the volume element is oriented such that rT is directed along the z direction, the magnitude of the temperature change as the fluid traverses the cell is given by |rT|dz. The mass of fluid transported (per unit time) is given by M �rTdxdy/|rT|, and thus an amount of silica is dissolved, or precipitated, at a rate given by 

The volume of this precipitated or dissolved silica is used to calculate the change in porosity over some time period, t: 

where Mqmol is the molar mass and rq is the density of quartz. [17] This formulation is implemented in FEHM through an iterative update of the porosity and permeability distributions. An initial simulation of 300 kyr of fluid circulation is performed to establish a benchmark circulation state. Geothermal circulation is then simulated for a nominal time period of 500 yr, within which temperature and mass flux distributions are output at ten evenly spaced time periods. For each time step a porosity change, dfi, is calculated using equation (5), and porosity changes for the ten time steps summed to yield a total porosity change, df, for the simulation. 

[18] Modification of the pore space available to conduct fluids implies a consequent change to permeability. Fluid flow through high porosity volcanic deposits in the upper 

4 of 18 

DEMPSEY ET AL.: SILICA DEPOSITION IN GEOTHERMAL SYSTEMS 

B05207 

B05207 

Table 2. Bounding Values of Porosity, f, and Permeability, k, Used in Simulations 

|z (km)|f (%)|k (log(m<sup>2</sup>))|
|---|---|---|
|0|20|�12.9|
|2|6|�14.5|
|8|2|�14.7|

2 km of the TVZ is probably dominated by connected pore pathways. Under these circumstances Zhang et al. [1994] suggests that permeability, k, varies with the cube of porosity, i.e., k ∝ f<sup>3</sup> , provided the porosity is above some critical value, fc. Below this value a loss of connectivity causes rapid reductions in permeability. The cube law porosity-permeability relationship has previously been used for modeling gradient reactions in limestone karst systems [Chaudhuri et al., 2008, 2009]. 

[19] An alternative relationship, derived from studies of well core from the Brae oilfield [Leary, 2003], an Upper Jurassic reservoir adjacent to a zone of normal faulting in the South Viking Graben [Stow et al., 1982], and considerations of a crust at the limit of mechanical ‘criticality’ [Leary and Al-Kindy, 2002; Heffer, 2007], suggest that porosity is correlated to the logarithm of permeability. This model is more appropriate for low porosity basement rock where permeability is dominated by fracturing rather than connected pore space. 

[20] The two porosity-permeability relationships used are 

Coefficients A1, A2, B1 and B2 are calculated from bounding values of porosity and permeability assigned at the upper and lower boundaries of each geological unit. These values have in turn been inferred from past numerical modeling studies of the TVZ [Kissling and Weir, 2005; Mannington et al., 2004] and by matching thermal properties of the modeled plume to its TVZ counterparts. Bounding values for porosity and permeability are given in Table 2 and profiles with depth are shown in Figures 2a and 2b. The critical porosity for the cube-law relationship is 4% (following Zhang et al. [1994]) below which permeability drops rapidly. In the upper layer of volcanics we have assigned a minimum achievable permeability of �16 corresponding to a porosity of 2%. This is probably higher than the extensively silicified and sealed rock that would eventually be produced by a sufficient period of alteration. However, geothermal fields in the TVZ are juxtaposed on an extensional tectonic setting in which background fracturing and faulting enhance and maintain permeability. Further, sealing of fluid pathways can lead to transient overpressures and subsequent hydraulic fracturing, which also places a lower limit on attainable permeability. This behavior could be modeled in greater detail by the implementation of a coupled stress calculation that increased permeability in regions where the pore pressure increased above some failure criterion (e.g., Mohr-Coulomb yield). This has not been undertaken here. 

[21] A functional description of the relationship between k and f permits us to evolve the permeability distribution in response to silica deposition into open pore space. In 

equation (5) we calculate the change in porosity due to flow of silica saturated fluid through a volume element over a given time period. Equation (6) then relates the change in porosity, df, to a change in permeability: 

[22] At the conclusion of an FEHM simulation, an altered permeability distribution is calculated using equations (5) and (7), and temperature and mass flux fields output during previous time steps. The following simulation uses the new permeability distribution and the final temperature and pressure values from the previous simulation. This iterative update scheme approximates the evolution of permeability, and thus geothermal flow, in response to simplified silica processes. 

[23] Under a gradient reaction regime, the extent of deposition or dissolution is critically dependent on the magnitude of the temperature gradient (see equation (5)). Resolving these gradients on a discretized grid is therefore particularly important. First order differencing is used to approximate rT between adjacent nodes, e.g., dT/dx ≈ (Ti+1 � Ti)/dx. For coarse grid spacings, i.e., large dx, it is difficult to resolve very small and very large gradients. An improvement in accuracy is gained through the use of higher resolution grids in regions where large temperature gradients are expected. 

[24] Temperature profiles from drill holes at the Wairakei geothermal field, New Zealand, indicate that the largest vertical geothermal gradients (approximately 1–2 Km<sup>�1</sup> ) are obtained within several hundred meters of the surface [O’Sullivan et al., 2009]. In this region, buoyant fluids, rising approximately adiabatically, come into contact with cooler meteoric waters, leading to the formation of a boundary layer. To capture thermal processes in this region we have chosen meshes with increased resolution (Figure 1) within 1– 2 km of the surface. A similar boundary layer forms at the base of the crust where cold, recharging surface waters encounter the magmatic intrusions that supply the heat to drive geothermal convection. Mass flux in this boundary region is in the opposite direction to that at the top of the model, and consequently quartz dissolution may play a significant role in permeability modification at these depths. However, as the mesh is coarser at the base of the model, our investigation is limited to the near surface. 

## 3. Description of Circulation 

[25] A single geothermal plume is evolved in the model domain by applying the basal temperature boundary condition for a period of 300 kyr (Figure 3). Initially, the model domain is a homogeneous 20<sup>�</sup> C and mass fluxes are everywhere zero. Fluids in the center of the domain become buoyant and rise as they are heated. Convection occurs in systems where the Rayleigh number, Ra, exceeds a critical value (Racrit = 4p<sup>2</sup> ). The Rayleigh number for a porous medium is given by Nield and Bejan [1998]: 

where rf is the density of the fluid, g is the acceleration due to gravity, b is the coefficient of thermal expansion of the 

5 of 18 

DEMPSEY ET AL.: SILICA DEPOSITION IN GEOTHERMAL SYSTEMS 

B05207 

B05207 

Figure 3. Temperature contours for a vertical slice through the center of the upflow zone (y = 7.5 km) after 300 kyr of simulation time (immediately prior to permeability modification). Vectors of mass flux direction have been superimposed. Note that mass flux magnitude is not represented by the arrow length. 

fluid, DT is the temperature difference between the top and bottom of the system, L is the vertical dimension of the system, k is permeability, m is fluid viscosity and a is the coefficient of thermal diffusivity. For typical values of rf = 900 kgm<sup>�3</sup> , g = 9.8 ms<sup>�2</sup> , b = 10<sup>�3</sup> K<sup>�1</sup> , DT = 350<sup>�</sup> C, L = 8 km, k = 10<sup>�14</sup> m<sup>2</sup> , m = 3 � 10<sup>�4</sup> Pa s<sup>�1</sup> and a = 10<sup>�6</sup> m<sup>2</sup> s<sup>�1</sup> , the Rayleigh number is � 800 and wellexceeds the threshold for free convection. 

[26] The upflow zone is situated at the center of the model, i.e., {x, y} = [7.5, 7.5] km, due to the Gaussian temperature boundary condition applied at the base of the model (Figure 2c). Constrained by the 200<sup>�</sup> C isotherm, the plume is approximately 5 km wide at the base of the model and narrows as it approaches the surface, particularly within the high porosity volcanics layer (z < 2 km). This is consistent with a decreasing permeability with depth, which requires a greater plume cross-section to host rising fluids [Bibby et al., 1995]. The maximum temperature at the surface of the model is approximately 200<sup>�</sup> C, which is somewhat cooler than fluids exiting from TVZ geothermal fields (≈250<sup>�</sup> C). Greater accuracy in modeling surface temperatures might be achieved through tighter controls on the permeability-depth relationship, however for the deposition behavior demonstrated here these models serve as an acceptable approximation to reality. 

[27] Vectors of mass flux direction indicate mass recharge occurs at all depths along the plume. At significant distances from the upflow zone, cold down-welling fluids suppress the geothermal temperature gradient, such that temperatures as low as 100<sup>�</sup> C are encountered at depths of 6 km. This is consistent with the findings of Weir [2009] which also yielded cool temperatures for deep fluids. They show that the downflow temperature profile depends on downflow fluid velocity and thermal diffusivity. In these models, downflow fluid velocities are consistent with rainfall recharge rates from the TVZ [Kissling, 2004]. 

[28] The geothermal field boundary at the surface is constrained by a 1 Wm<sup>�2</sup> vertical heat flux contour. This value exceeds the average continental heat flux (0.05–0.07 Wm<sup>�2</sup> [Chapman, 1986]) and the anomalously high heat flux of the TVZ (≈0.8 Wm<sup>�2</sup> [Hochstein, 1995]). Based on this demarcation, the geothermal field, prior to permeability 

modification, has a heat output of 120 MW and an area 1.4 km<sup>2</sup> . 

## 4. Model Results 

[29] Both temperature gradients and mass flux attain their largest magnitude in the near surface where contact with the atmosphere forms a thermal boundary layer and permeability is at its maximum value. Consequently, silica deposition and reduction of permeability proceeds most rapidly in the upper layers of the model. After 120 kyr of simulated alteration (t = 420 kyr) a region of low permeability has formed at the surface above the upflow zone (Figure 4). The geothermal field is demonstrating ‘self-sealing’ behavior [e.g., Facca and Tonani, 1967; Hochstein and Browne, 2000; Dobson et al., 2003], i.e., hydrothermal alteration of the surface strata has produced a low permeability cap-zone. Due to the symmetry of the model domain and permeability distribution, the cap-zone is circular with a diameter of 1–2 km. In profile (Figure 4a) it increases in thickness with proximity to the axis of upflow, attaining a maximum dimension of �200 m. 

[30] A smaller reduction in porosity and permeability occurs along the axis of upflow at depths of 500 to 200 m. At these depths temperature gradients and mass flux rates are considerably less than at the surface, and therefore alteration proceeds at a reduced rate. Nevertheless, porosity reductions of 2–5%, and consequent drops in permeability of up to half an order of magnitude, reduce the permeability-depth gradient in this region. The vertical temperature gradient decreases in response as less entrainment of cold recharge occurs, resulting in increased temperatures (more than 10<sup>�</sup> C at 500 m). 

[31] The formation of a near-surface, low permeability cap-zone is consistent with results of Martin and Lowell 

Figure 4. (a) Permeability distribution (log(m<sup>2</sup> )) after 120 kyr of silica deposition at the surface. Profiles of (b) porosity and (c) permeability with depth along the top 2 km of the plume axis at t = 300 kyr (dashed: see Figures 2a and 2b) and 420 kyr (solid). 

6 of 18 

DEMPSEY ET AL.: SILICA DEPOSITION IN GEOTHERMAL SYSTEMS 

B05207 

B05207 

Figure 5. (a) Lateral heat flux with depth at a radial distance of 500 m from the plume axis at t = 300 kyr (dashed) and 420 kyr (solid). Note that negative values represent heat directed away from the plume axis. (b) Vertical heat flux at the surface measured along a radial profile beginning at the center of the plume (see inset). (c) Vertical heat output, Qz, integrated along the radial profile in Figure 5b over time. (d) Position of maximum vertical heat flux along the radial profile in Figure 5b, which is a proxy for field radius, rmax. The stepped profile is due to mesh discretization. 

[2000] for transport and precipitation of silica in planar fractures under equilibrium conditions. Their analysis was also extended to address the effects of quartz precipitation controlled by first-order reaction kinetics. At higher mass flow rates, crack closure was slower than under equilibrium conditions as fluids are transported too rapidly for appreciable deposition on crack walls to occur. Furthermore, in addition to developing a near-surface low permeability region, a secondary low permeability zone is formed beneath as the flow is reduced and cooling pushes the maximum precipitation isotherm to greater depths. 

[32] The lowest rates of permeability reduction occur in the deep basement rock and are no more than a fraction of an order of magnitude. Slow alteration rates at these depths is due to: (i) the modest temperature gradient associated with the relatively low permeability-depth gradient, (ii) low mass flux rates associated with low permeability, and (iii) a tight permissible permeability range (see Table 2). 

### 4.1. Redistribution of Heat Flow 

[33] Development of an impermeable cap-zone above hot fluids rising within the plume has a considerable effect on the heat flow characteristics of the geothermal field. The reduction in mass flux within the original field boundary causes an immediate reduction in heat output. However, the supply of buoyant fluids from depth is largely unchanged by 

self-sealing, which implies that ascending fluids, blocked from rising any further, must be deflected laterally. As heat transport is largely advective, this results in an increase in lateral heat flow beneath the cap-zone (Figure 5a). 

[34] Prior to the development of a cap-zone, lateral heat flow was small and typically directed toward the upflow axis, representing entrainment of cold, but nevertheless heat bearing, recharge. However, by t = 420 kyr heat and mass flow, deflected by the surface cap-zone, is directed away from the plume to a depth of 500 m. The largest lateral flows of �100 Wm<sup>�2</sup> occur at 300 m depth, although this varies in response to the increasing lid thickness. In comparison, maximum surface heat fluxes of 400 Wm<sup>�2</sup> , observed above the upflow zone prior to self-sealing, are reduced several orders of magnitude by the impermeable cap-rock (Figure 5b). Deflection of hot fluids to the edge of the cap-zone causes the vertical heat flux, and presumably surface thermal expression, to migrate radially away from the original plume center. The intensity of the heat flux at the field boundary also decreases as a limited heat output is spread around an increasing larger field circumference (Figure 5c). Further, the areal growth rate of the geothermal field, parameterized by its radius, rmax, decreases with time as increasingly larger volumes quartz must be deposited into the porous rock by a fixed source (silica saturated upflow). 

7 of 18 

DEMPSEY ET AL.: SILICA DEPOSITION IN GEOTHERMAL SYSTEMS 

B05207 

B05207 

Figure 6. Evolution of geothermal field characteristics during 120 kyr of silica deposition. Profiles are taken for three different depths: 50 (circles), 100 (triangles) and 200 m (squares). (a) Heat output through the original field boundary, as defined by the 1 Wm<sup>�2</sup> vertical heat flux contour at t = 300 kyr. The black dashed line indicates the total field output. (b) Geothermal field area delineated by the evolving 1 Wm<sup>�2</sup> vertical heat flux contour. (c) Arithmetic mean permeability within the original field boundary. (d) Temperature at the upflow axis, i.e., x = y = 7.5 km. 

[35] Chaudhuri et al. [2012] found that silica precipitation in a fracture network led to the formation of elongated obstacles perpendicular to the mean flow direction. Growth occurs preferentially at the lateral edges of these objects due to the alignment of mass flux and temperature gradient streamlines. The formation of a low permeability cap-zone at the surface above the upflow zone is the macroscopic equivalent to this smaller scale phenomenon. 

### 4.2. Evolution of Field Properties 

[36] Figure 6 tracks the evolution of several field properties as self-sealing proceeds over a 120 kyr period. Cap-zone formation has an immediate short term effect of reducing heat output of the field by insulating hot upflow from the atmosphere. Over a period of several thousand years heat output drops rapidly from 120 to 80 MW and is sustained at this value for the duration of the simulation. However, heat 

flux through the original field boundary declines substantially as rising fluids are deflected to the (growing) field margin by a maturing cap-zone. Vertical heat flow below the cap exhibits an anomalous and sustained increase prior to a steady decline as silica deposition at depth thickens the capzone. This spike is caused by the reversal of lateral recharging inflows that had previously exerted a degree of quenching on hot upflow in the near surface. Enhanced lateral outflow induced by the cap-zone negates the effects of these inflows, and the reduction in mixing permits more efficient operation of the plume at near surface depths. 

[37] Geothermal field area, delineated here by the 1 Wm<sup>�2</sup> vertical heat flux contour but in practice by either resistivity contours or the extent of surface thermal manifestations, increases at a constant rate. Over a period of 120 yr field area increases by more than a factor of three, at a nearly constant rate of ≈2.8 km<sup>2</sup> per 100 kyr (Figure 6b). In the same period surface heat output is approximately constant, and thus the effect of the cap-zone is to spread a given heat flux across a wider area (or more accurately, to distribute it to a longer boundary). 

[38] The negative feedback that silica deposition exerts on subsequent mass flow and further permeability reduction is evident in Figure 6c. At 50 m depth permeability reduction is initially rapid but decreases with time as the low permeability region hosts a reduced mass flow rate. This feedback is also evident at 100 m depth, although is less conspicuous due to the overall lower rate of alteration. 

[39] The temporal behavior of temperature at various depths (Figure 6d) within the plume reflects changes in the relative importance of advective heat transport versus conductive atmospheric cooling. Surface temperatures are initially set by the passage of heated fluids through open pore space as they rise to the surface. The immediate effect of the onset of self-sealing at the surface is an increase in temperature as lateral deflection shuts down the inflow of cool recharge. However, continued silica deposition reduces permeability to a point at which hot upflow can no longer maintain high temperatures, and atmospheric cooling begins to prevail. Surface temperatures drop by up to 50<sup>�</sup> C, although deeper in the cap-zone temperature changes are smaller. 

### 4.3. Spatial Patterns of Permeability Change 

[40] In these models processes of deposition or dissolution are dependent on the movement of silica saturated fluids through a temperature gradient. The local rate of change of porosity depends on the magnitude of both the mass flux vector, M, and temperature gradient, rT, however this is modulated by the value of the angle, q, between the two. When M and rT are close to orthogonal, fluid flux is approximately isothermal and minimal deposition or dissolution will occur. If M and rT are parallel but point in opposite directions, then fluid temperature is decreasing and precipitation will occur. Where M and rT are parallel and point in the same direction, fluid temperature is increasing and dissolution occurs. 

[41] Figure 7a plots contours of the angle between M and rT for a vertical slice through the center of the plume at t = 420 kyr. These contours delineate regions in which either precipitation, dissolution or no reaction is favored in the context of the plume structure. Along the axis of the upflow 

8 of 18 

DEMPSEY ET AL.: SILICA DEPOSITION IN GEOTHERMAL SYSTEMS 

B05207 

B05207 

Figure 7. (a) Angle, q, (in degrees) between temperature gradient and mass flux for a vertical slice through the center of the plume (y = 7.5 km). (b) Profiles along dashed line in Figure 7a showing the angle between temperature gradient (solid) and mass flux (dashed), and the vertical axis. (c) Angle between temperature gradient and mass flux for a horizontal slice at 3 km depth. Once again the dashed line indicates the position of the profiles in Figure 7b. 

zone, both M and rT are near vertical, favoring precipitation within the center of the plume (see Figure 4a). However, the porosity/permeability reduction rate here is modest due to the low temperature gradient relative to the surface. The largest gradients occur where hot upwelling fluids encounter the cold atmosphere in the upper layers of the model. At these depths both M and rT are vertical, and due to their large magnitudes silica precipitation proceeds rapidly, resulting in the formation of a low permeability cap. 

[42] Moving horizontally from the plume axis, rT rapidly switches from vertical downward to horizontal (see Figure 7b), followed by a slow rotation to vertical upward. In this region fluid temperatures decrease slowly from their maximum value at the center of the plume, to their minimum value in the down-welling recharge zone. In contrast, mass flux responds much more rapidly, switching from vertically upward within the plume, to vertically downward outside the plume over a relatively short distance (<1 km). This results in a ≈2 km wide zone around the center of the plume, in which M and rT are nearly orthogonal. Despite the appreciable temperature gradients and mass flux that prevail in these regions, fluid flow is approximately isothermal and silica deposition is limited. These regions represent excellent 

conduits for the transport of minerals whose solubility characteristics depend strongly on temperature. 

[43] In the downflow regions, i.e., x < 5 km and x > 10 km, the angle between M and rT is small and dissolution is favored. However, little increase in porosity or permeability occurs in these regions due to; (i) the low rate of mass flux compared to upwelling, which is assisted by the buoyancy of low density fluid; and (ii) the comparatively low geothermal gradient, maintained by cold down-welling fluids that suppress the background, conductive gradient [Weir, 2009]. In locations where down-welling fluids encounter the magmatic heat sources inferred to drive geothermal convection, a boundary layer with high temperature gradients would be expected to form. Under these conditions appreciable levels of silica dissolution at the base of the convective system would be expected. However, the model mesh used here is too coarse to resolve such gradients and this effect is thus not represented. 

[44] A toroidal region encircling the plume axis, in which 0 < q < 45<sup>�</sup> , is observed (see Figures 7a and 7c) in the downflow zone. This pattern arises due to the relatively slow rotation of M with proximity to the plume axis (see Figure 7b) compared with rT, in the x < 5 km region. 

9 of 18 

DEMPSEY ET AL.: SILICA DEPOSITION IN GEOTHERMAL SYSTEMS 

B05207 

B05207 

Figure 8. (a) Heterogeneous permeability (log(m<sup>2</sup> )) distribution prior to alteration. (b) Change in permeability, (c) temperature distribution, and (d) angle between mass flux and temperature gradient, i.e., q = cos<sup>�1</sup> (M �rT/(|M|| rT|)), after 120 kyr of silica deposition. Hatched region in Figure 8b indicates regions of permeability increase, i.e., silica dissolution. Vertical heat flux at the surface at t = 420 kyr for (e) the heterogeneous, and (f) the homogeneous permeability distributions. 

However, as both M and rT are small in the downflow region, this effect is not printed on the larger pattern of permeability modification (Figure 4a). 

### 4.4. Effect of a Heterogeneous Permeability Field 

[45] In practice, constraints on mesh resolution and geophysical observation prevent the full heterogeneity of 

crustal porosity and permeability fields from being fully represented. However, its qualitative influence on the homogeneous solution (Figure 4) can be investigated by considering the effects of arbitrary heterogeneity in these distributions. Figure 8a shows a permeability distribution constructed by superimposing a spatially correlated Gaussian fluctuation field on the homogeneous distribution given in Figure 2a. The noise is spatially correlated and follows a power law scaling with scaling exponent of 1.3. The fluctuations have mean of zero and a standard deviation of 0.25 orders of magnitude and a corresponding heterogeneous porosity distribution is calculated from equation (6). 

[46] Permeability changes generated after 120 kyr of silica deposition (Figure 8b) are qualitatively similar to those for the homogeneous permeability distribution (Figure 4a). A low permeability cap-zone is rapidly formed at the surface, and has similar lateral and vertical dimensions to the homogeneous simulation. Below the cap-zone, a lesser reduction in permeability is observed, again consistent in shape and dimension to the homogeneous model, and it is here that the effects of heterogeneity are apparent. The distribution of silica deposition is lumpy, and localizes in particular regions while remaining conspicuously absent from others. Silica dissolution occurs in several localized regions within the upflow zone, but more commonly on its flanks and beneath the cap-zone. Regions of deposition and dissolution do not appear to correlate to fluctuations in the permeability field, which might be expected if mass flow were the controlling factor on the rate of permeability modification. 

[47] The presence of strong permeability contrasts distorts the flow field, and thus temperature distribution (Figure 8c), relative to the homogeneous model. Consequently, the angle between mass flux and temperature gradient, a key parameter modulating the intensity of silica deposition, can no longer be described in simple terms (section 4.3 and Figure 7). Figure 8d shows that permeability distortion of the temperature and flow fields imparts a similar lumpiness to the M �rT term in equation (5). Local maxima in this distribution correspond to regions of enhanced deposition in Figure 8b, attesting to the considerable influence this parameter exerts on field evolution. Furthermore, regions of quartz dissolution identified in Figure 8b correlate to regions of q < 90<sup>�</sup> . 

[48] The crustal heterogeneity described here imparts only a second order effect on surficial geothermal expression. Figures 8e–8f show that silica deposition and consequent lateral deflection of rising fluids forms a circular cap-zone of similar dimensions to the homogeneous solution, however upwelling of fluids around the cap is more sporadic. Further control on surface expression would be expected for more distinctive permeability features, for example the large magnitudes and sharp contrasts associated with faults. 

### 4.5. Mesh Sensitivity 

[49] Node spacing, particularly in the surface boundary layer, is essential to the accurate resolution of temperature gradients. We investigate the effect of mesh uniformity and coarseness through the use of two alternative meshes: (i) a non-uniform mesh similar to that used in previous simulations but with nodal distances doubled (i.e., half the resolution: see Figure 1b), and (ii) a uniform mesh in which the nodal spacing is 200 m in each direction. Thus for the three 

10 of 18 

DEMPSEY ET AL.: SILICA DEPOSITION IN GEOTHERMAL SYSTEMS 

B05207 

B05207 

Figure 9. Evolution of geothermal field characteristics during 120 kyr of silica deposition for three different meshes: mesh 1, a uniform grid (squares: Figure 1a); mesh 2, a non-uniform, low resolution grid (triangles: Figure 1b); and mesh 3, a non-uniform, high resolution grid (circles: Figure 1c). Quantities presented are for the uppermost crustal layer and are derived in the same manner as those in Figures 6a–6c. 

meshes considered here, vertical resolution in the top 2 km for the original and two alternative meshes is 50, 100 and 200 m respectively. Maximum temperature gradients, encountered in the top surface layer, scale according to the node spacing and are for the three meshes, �1.70, �0.86 and �0.44 Km<sup>�1</sup> . The first two are consistent with maximum vertical gradients encountered in the near surface of TVZ fields (e.g., Wairakei: 1–2 Km<sup>�1</sup> [O’Sullivan et al., 2009], Ngatamariki: 0.9 Km<sup>�1</sup> [Burnell and Kissling, 2009]). 

[50] Nodal spacing and the ability to resolve large temperature gradients in the near surface influences the rate at which a cap-zone develops. This in turn effects field evolution to a depth of 1 km, due largely to the insulating effect of the cap. Figure 9 plots the evolution of the upper layer of the model during 120 kyr of permeability modification for the three meshes. For finer resolution meshes silica deposition and sealing of the geothermal system proceeds more rapidly, 

and ultimately results in lower permeability cap-zones. Consequently, heat output through the field is decreases for finer meshes, despite the development of similar sized fields. 

## 5. Fault Modulated Silica Sealing 

[51] Thus far we have considered generic and largely artificial scenarios of geothermal circulation in a silica controlled permeability field. In practice, permeability in the Taupo Volcanic Zone evolves in response to a variety of forcings, including tectonic extension, hydraulic fracturing, and magmatic and volcanic processes. The effects of low level tectonic and hydraulic fracturing have been incorporated in an ad hoc way by imposing a lower permeability limit for hydrothermally altered rock. In this section we extend the simulation to consider the geothermal self-sealing perturbed by surface rupture of an active fault. 

[52] Episodic reactivation of fault structures modifies the permeability by reshearing existing fractures or creating new ones, thereby supplying additional pathways for fluid transport. Further, in the event that a mature, impermeable fault gouge has formed, fault rupture can provide temporary cross fault hydrological connections. Rupture of overpressured reservoirs at depth in the crust may also increase mass flow to the surface [Sibson, 1990]. In this model we consider rupture along a vertically oriented fault plane, whose primary effect is to disturb the impermeable cap-zone formed at the surface. While faults within the TVZ are typically inclined at angles of 50–70<sup>�</sup> [Beanland et al., 1990; Villamor and Berryman, 2001], their dip steepens markedly at near surface depths. Thus description of a vertical fault rupture through the near surface cap-zone is an acceptable approximation. At depth the discrepancy between the modeled vertical fault and a more realistic inclined fault is increased; however, as the greatest permeability changes are limited to shallow depths, the error introduced by this approximation should not greatly influence the results. 

[53] A geothermal plume is evolved for the mesh shown in Figures 1d–1f. This mesh permits very fine resolution of the near surface region where silica sealing occurs, and along the fault plane where coseismic permeability modification is applied. At t = 300 kyr silica deposition begins throughout the model and after a period of 120 kyr an impermeable capzone is formed (see section 4). The geothermal field attains a maximum area at the surface of 5.5 km<sup>2</sup> and the total field heat output is constant at 75 MW. At this time heat flux through the cap-zone is primarily conductive, with advection of fluid through a sparse distribution of fractures accounting for only 20% of the total heat transfer (Figure 10). The ratio of conductive to advective heat flux is limited by the minimum obtainable permeability, which is set to 10<sup>�16</sup> m<sup>2</sup> . For increasing permeability beneath the cap advection becomes the dominant heat transfer component, and conduction is negligible at 200 m depth. 

[54] At t = 420 kyr a step change in permeability along the fault plane is introduced representing rupture from depth to the surface. Permeability on the fault plane is reset to prealteration values (see Figure 11) while permeability outside the fault plane is unchanged. The permeability update period is reduced two orders of magnitude to 50 yr for twenty simulations. This allows resolution of high rates of silica 

11 of 18 

DEMPSEY ET AL.: SILICA DEPOSITION IN GEOTHERMAL SYSTEMS 

B05207 

B05207 

Figure 10. Proportion of vertical heat flux transmitted by conduction (t = 300 kyr, dashed line), and following the formation of a cap-zone (t = 420 kyr, solid line). Profiles are taken at x = y = 7.5 km, i.e., vertical profiles through the center of the model domain. Heat transfer is dominated by advection prior to the formation of the surface cap-zone and by conduction afterward. 

deposition at the renewed mass flow rate and the short term effects on permeability. This is then increased to 500 yr for another twenty simulations to observe medium term effects. 

### 5.1. Plume Response to Rupture 

[55] The opening of a fissure through the impermeable cap-zone has the immediate effect of increasing heat output through the central regions of the geothermal field (see Figure 12). Prior to fault rupture hot fluids beneath the cap had taken extended lateral routes to reach the surface, 

incurring substantial decreases in temperature. Following the earthquake, the same fluids rising along the axis of the plume have a direct conduit to the surface. The immediate thermal response of the system is an increase in output from 75 MW to 125 MW and an increase in maximum surface temperatures of 100<sup>�</sup> C to nearly 150<sup>�</sup> C. 

[56] The largest permeability changes occur at the surface where an increase of three orders of magnitude (10<sup>�16</sup> to 10<sup>�13</sup> m<sup>2</sup> ) permits a similar sized increase in the mass flow rate. Further, the resumption of advection dominated heat flux, over previously conduction dominated, restores sharper temperature gradients and higher temperatures in the near surface. Rapid silica deposition is favored in the newly created, high-permeability fissure opened through the center of the geothermal field and, consequently, the greatest rates of reduction of porosity and permeability are encountered here. The localization of silica deposition in a region of high permeability is consistent with findings of Martin and Lowell [2000] that showed that, under equilibrium conditions, the rate of precipitation was greater in regions of high permeability, providing the temperature gradient is not compromised by high flow rates. It is notable however, that this homogenizing effect on permeability is not observed in simulations of a heterogeneous crust (Figure 8) where the variation in permeability is less. Under these circumstances, precipitation rate exhibited a stronger dependence on the temperature gradient and its alignment with mass flux. 

[57] Figure 12c shows that near surface fluid pathways are steadily sealed over the following 10 kyr, while at depth the response is slower. The spike in field heat output is shortlived, declining rapidly to its pre-rupture value after only 1– 2 kyr. Resealing of the fault also restores the lateral heat and mass flows beneath the cap, diverting hydrothermal fluids to the field boundaries where further horizontal growth of the cap-zone resumes. The post-seismic sealing of the fault zone demonstrated here represents a minimum-time self-sealing 

Figure 11. Permeability (log(m<sup>2</sup> )) along the fault plane (a) prior to, and (b) following fault rupture. 

12 of 18 

DEMPSEY ET AL.: SILICA DEPOSITION IN GEOTHERMAL SYSTEMS 

B05207 

B05207 

Figure 12. Change in four geothermal field parameters in response to, and following fault rupture. (a) Solid lines show heat output through the original field area at the surface (circles) and at 100 (triangles) and 200 m (squares) depth. The dashed line indicates the total heat output of the field, accounting for the evolving field area. (b) Field area, as constrained by the 1 Wm<sup>�2</sup> vertical heat flux contour, at the three depths. (c) Arithmetic mean permeability within the original field area for the three depths. (d) Temperature at the upflow axis, i.e., x = y = 7.5 km. 

response; Martin and Lowell [2000] showed that when reaction kinetics are accounted for, silica deposition occurs at a slower rate than that predicted by equilibrium considerations in high permeability regions, e.g., a recently opened fault. 

### 5.2. Heat Flow in the Subsurface 

[58] Heat and mass flow evolve in the subsurface in response to the formation, growth and rupture of the impermeable cap-zone. Figure 13 illustrates the asymmetry introduced to these flows by permeability modification along a discrete plane. We consider the time varying heat flux across four transects: two are horizontal, oriented along and across the strike of the fault, intersect the center of the 

plume and capture vertical heat flow at the surface; the other two are vertical, offset 500 m across and along strike from the plume center, and capture lateral heat flows (directed away from the plume axis: Figure 13a). 

[59] For the first 120 kyr heat flow evolves in response to self-sealing behavior and a growing cap-zone. As described in section 4, surface heat flux, which is initially maximum above the center of the upflow zone, is steadily displaced to the lateral boundaries of the field by the growing lid. Intensity also decreases as a limited heat flux is spread along a longer circumference. Lateral heat flows in the subsurface develop and intensify after � 20 kyr in response to cap-zone growth. Lateral flows are also steadily displaced to greater depths by thickening of the cap-zone’s vertical dimension. Due to mesh discretization along strike heat flow is measured 60 m closer to the plume axis than its across strike counterpart, which accounts for its slightly higher magnitude. 

[60] Asymmetry in the heat flow profiles is introduced by permeability enhancement along a preferred plane, i.e., coseismic fault permeability. At t = 420 kyr we observe considerable surface heat output along strike of the fault plane as a permeable fissure is opened through the cap-zone. Vigorous heat flux occurs along a � 1 km stretch of the fault, which is significantly wider than the same heat flux prior to cap-zone formation (Figure 13b: t = 300 kyr). Two factors contribute to this effect: (i) channeling of a radially symmetric plume below the cap, through an elongated fissure, and (ii) widening of the sub-cap-zone plume structure (see Figure 6b) by cap-zone insulation and the reversal of cold inflow in the near surface. Across strike heat flow (Figure 13d) is significant only at the fault trace and is otherwise suppressed by the developed cap-zone. Heat flux at the margins of the cap, which originates from the deflection of rising fluids, is also reduced as fault rupture provides a more direct pathway to the surface. 

[61] Figures 13c and 13e show that lateral sub-surface heat and mass flows are severely inhibited by fault rupture, but also that the redirection of fluids through the fault is relatively short-lived. Silica deposition at the surface fault trace, where the largest temperature gradients and mass flux rates are encountered, ensures resealing and a return to the prerupture flow configuration. Permeability reduction occurs first in the center of the cap-zone and grows outward along the fault trace, causing rapid displacement of outflow to the field boundaries. Silica deposition rates decrease with depth, and thus while the fault is sealed at the surface significant along strike lateral flows remain at shallow depths. Dimensionally, the cap-zone resembles a circular plug with a channel carved into its lower surface by fault rupture. For this reason across strike heat flow rapidly returns to its prerupture state as the across strike permeability distribution is mostly unaffected by the earthquake. However, an along strike low permeability channel immediately beneath the surface provides a favorable conduit for lateral fluid flow. Thus geothermal expression at the margins of the cap-zone is enhanced where it intersects the fault trace (Figure 14). 

### 5.3. Reservoir Evolution 

[62] Cap-zone insulation and enhanced heat and mass flow along a recently rupture fault both play important roles in the development of the geothermal field as an energy bearing 

13 of 18 

DEMPSEY ET AL.: SILICA DEPOSITION IN GEOTHERMAL SYSTEMS 

B05207 

B05207 

Figure 13. Summary of vertical and lateral heat flows evolving during the simulation. (a) Profile positions (solid) from which Figures 13b–13e are constructed, relative to the fault plane and plume axis (dashed). Arrows indicate positive heat flow direction. (b) Along strike vertical heat flow (x = 7.5 km, z = 0). (c) Along strike lateral heat flow (x = 7.5 km, y = 7 km). (d) Across strike vertical heat flow (y = 7.5 km, z = 0). (e) Across strike lateral heat flow (x = 7 km, y = 7.5 km). Note the discontinuities in Figures 13b–13e corresponding to fault rupture at t = 420 kyr. 

resource. The size of the geothermal reservoir is defined here using the stored heat method [Grant and Bixley, 2011]: 

where E is the energy of the reservoir, rC is the specific heat of the wetted rock (taken as 2.5� 10<sup>6</sup> Jm<sup>�3</sup> K<sup>�1</sup> ), and T0 is a reference temperature representing the end point of the thermodynamic cycle (taken as atmospheric 20<sup>�</sup> C). The 

integral in equation (9) is performed over the top 2 km of the model domain, i.e., the porous surface volcanic layers. In the TVZ production typically occurs in these geological units, rather than the low porosity and relatively less accessible basement (due to its depth). This calculation could be extended to greater depth, however as our interest is in reservoir changes this arbitrary demarcation is sufficient. 

[63] Figure 15 shows changes in the reservoir energy content during the 120 kyr of cap-zone formation, and the 10 kyr period following fault rupture. Formation and lateral 

14 of 18 

DEMPSEY ET AL.: SILICA DEPOSITION IN GEOTHERMAL SYSTEMS 

B05207 

B05207 

Figure 14. Surface heat flux at t = 430 kyr, i.e., after resealing of the fault rupture. 

extension of an impermeable cap-zone has an insulating effect on the plume below. Temperature increases during this period increase the heat content in the reservoir by approximately 20%, although the increase shows signs of slowing. Effectively, self-sealing of the geothermal system has improved the energy potential of the resource. Disruption of the insulating cap-zone during fault rupture, and the vigorous heat and mass flows that follow, causes a small but rapid decline in reservoir heat content. After the loss of 100 PJ over a �500 yr period the decline is arrested by silica deposition resealing the cap-zone at the surface. Steady recovery of the pre-rupture reservoir occurs over the following 10 kyr. 

## 6. Discussion 

[64] Modification of the subsurface permeability structure by hydrothermal silica deposition is a common feature of many geothermal fields [e.g., Steiner, 1953; Henneberger and Browne, 1988; Wood et al., 2001; Bignall et al., 2004; Stimac et al., 2008]. Within the TVZ Henneberger and Browne [1988] report widespread alteration and silicification of the initially porous (>45%) Ohakuri ignimbrite at the extinct Ohakuri geothermal system. Quartz deposition occurs to depths of at least 150 m, which is consistent with the thickness of the low permeability cap-zone developed in numerical simulations. Evolution of the mechanical properties of the surface strata as a consequence of their reduced 

porosity and permeability is also observed. Punctuation of the altered rock by veining suggests a transition from diffuse flow through a permeable network, to episodic hydrofracturing of an impermeable, altered unit, followed by high mass flow rates and fracture sealing. Permeability modification by the latter process is not modeled here, although the imposition of a minimum obtainable cap-zone permeability is included as an approximation to the component of fracture permeability sustained by hydrofracturing. 

[65] At Ohaaki-Broadlands geothermal field weak clay alteration occurs to depths of 700 m at the periphery of the field, and at shallow depths (< 200 m) above the upflow zone, with smectite grading to illite and then quartz with increasing temperature. Higher rank alteration products, e.g., K-feldspar and albite, are more abundant at depth than at the surface. Simmons and Browne [2000] propose this relationship can be used to delineate upflow zones based on thermal control of species synthesis, i.e., smectite occurring at <150<sup>�</sup> , illite at >200<sup>�</sup> C, providing other factors, such as overprinting, reaction time or mineral assemblage, can be controlled. At Ohakuri, high rank alteration products occur at the surface, with a quartz adularia mixture grading to mordenite and eventually weak clays at the periphery of the alteration zone. This may indicate a relationship between alteration rank and longevity, in which surface smectite or illite phases are steadily silicified to mordenite or adularia. Decreasing alteration rank toward the field periphery, in addition to correlating with lower alteration temperatures, is also consistent with an expanding field boundary. As the central region of silica deposition increases in dimension and impermeability, increased lateral flow of high temperature fluid would hasten the conversion of smectite to illite and illite to higher rank products at the edge of the cap-zone. Alternatively, an abundance of high rank silicification at the surface of Ohakuri may be due to the erosion of low temperature, low rank surface clays following the cessation of geothermal activity. 

[66] Simmons and Browne [2000] note an absence of mineral deposition and sealing of permeability on the margins of the main upflow zone at Ohaaki-Broadlands. This implies buoyancy forces are the main control on the position of the upflow zone, at least in the near surface from which observations of alteration are derived. An absence of deposition from the plume margin is consistent with regions of 

Figure 15. Stored reservoir energy (in petajoules) at depths less than 2 km. (a) Reservoir energy increases between 300 and 420 kyr in response to the formation of a low permeability cap-zone. (b) Reservoir energy begins to decrease from 420 kyr as the coseismic permeability reduction permits escape of hot fluids. 

15 of 18 

DEMPSEY ET AL.: SILICA DEPOSITION IN GEOTHERMAL SYSTEMS 

B05207 

B05207 

isothermal flow identified in Figure 7, where temperature gradients are predominantly horizontal and mass flow vertical. 

[67] Henneberger and Browne [1988] propose that geothermal activity at Ohakuri was not ended by self-sealing of pore space and fractures in the near surface, but rather by changes in the deep plumbing or cooling of a heat source. This assertion is consistent with model results that suggest the development of a low permeability cap does not significantly reduce vertical heat flow, even in the absence of mechanisms that maintain or enhance permeability, e.g., fault reactivation, hydrofracturing. Rather, the cap-zone redirects a larger component of the rising fluids laterally, such that geothermal manifestations may be expected across a broader area. Evidence for the migration of activity at Ohakuri, first north and then east, is consistent with such an evolutionary scenario. The implication is that heat output through the surface is controlled by magmatic heat input processes at the base of the brittle crust. Providing fluids are being heated at depth, they will find some path to the surface. 

[68] The formation of thick, low porosity surface capzones has implications for exploration of blind geothermal systems. For example, Figures 8e and 8f show that, in the absence of recent faulting, geothermal expression is diverted to the field margin where surface permeability remains. High levels of permeability heterogeneity are also likely to imprint on the heat flow, perhaps limiting these surface features to sporadic hot spring outflow at the margins, rather than a well-defined thermal rim. Sufficient cap-zone thickness and impermeability permits conductive atmospheric cooling (Figure 10) in the center of the field, masking the high temperature resource beneath. Old sinters preserved at the surface may be worth targeting for. 

[69] Te Kopia geothermal field, also within the TVZ, yields further insight into the nature silicic alteration of permeability, in part due to its fortunate location on the active Paeroa Fault [Bignall and Browne, 1994; Bignall et al., 2004]. Geothermal activity has occurred here for up to 120 kyr, which suggests that simulations presented here address the correct evolutionary time period. Changes in field activity are complicated by episodic normal rupture of the Paeroa Fault, subsequent uplift of the footwall and lowering of the water table in this fault block. Cessation of geothermal activity from parts of the footwall may then be due to both a reduction in permeability and the draining of fluids. 

[70] Fault slip and exposure of the fault scarp has the propitious consequence of exposing rocks altered at depth. A textural investigation of quartz crystals [Bignall et al., 2004] indicates that in some locations deposition, followed by fracturing and partial dissolution, has occurred. In contrast to Ohakuri, quartz fracturing is attributed to rupture of the active Paeroa fault, although hydrofracturing due to fluid sealing may also contribute. Quartz crystals were grown at temperatures of approximately 215<sup>�</sup> C, which is consistent with temperatures of rising fluids in the modeled geothermal systems. The growth of these crystals at depths of at least 350 m, is deeper than the cap-zone formed in the model, but not beyond the zone of less intense precipitation that occurs in the high porosity strata below. Fracture and partial dissolution of quartz crystals implies the evolution of the mass 

flow and permeability regime. Figure 8d shows that heterogeneity in the permeability field, which is undoubtedly present in the faulted volcanic strata of the TVZ, can produce localized pockets in which fluid flows up a temperature gradient, favoring quartz dissolution (Figure 8b). Episodic reactivation of a pervasive fracture network by rupture of the Paeroa Fault would serve to maintain, enhance or reconfigure this heterogeneity, thereby modulating local deposition, fracturing and dissolution. 

[71] Geothermal expression at the margins of the Te Kopia field is correlated to the inferred position of the Paeroa Fault and associated smaller structures. Satellite regions of altered ground occur in the north and south of the field and are up to several hundred meters distant from the central region of alteration, hot spring activity and hydrothermal eruption cratering. Transport of fluids along the fault in the subsurface is likely to play an important role in the circulation and evolution of this field. The most recent rupture on the northern sector of the Paeroa Fault occurred �400 yr ago [Berryman et al., 2008], however it is not clear if the rupture traveled as far as Te Kopia. Villamor and Berryman [2001] use fault offset of the Paeroa ignimbrite to estimate a vertical slip rate near Te Kopia of 1.5 � 0.2 mmyr<sup>�1</sup> . For characteristic single event displacements of 2–3 m, this slip rate implies rupture recurrence on the order of 1–2 kyr. This is consistent with recurrence intervals of 1–10 kyr deduced for the northern Paeroa Fault [Berryman et al., 2008]. The current configuration of geothermal activity at Te Kopia has therefore evolved during multiple rupture events. Renewed flow along the strike of the fault may represent the norm, rather than a transient feature preceding reestablishment of a long-lived, flow suppressing cap-zone. Simulations of capzone evolution in the presence of recurrent fault rupture and permeability heterogeneity may yield further insight into the geothermal circulation of the region. 

## 7. Conclusion 

[72] Alteration of the near surface permeability structure by precipitation of silica into open pore spaces has an appreciable effect on the evolution of geothermal fields over geological timescales. A numerical model considering precipitation from a silica saturated fluid in a gradient reaction regime indicates the principle effect is the development of a low permeability cap-zone in the near surface. This cap-zone forms directly above the upflow zone, where surface temperature gradients are greatest, and grows to a thickness of several hundred meters over a period of 120 kyr. The circular cap-zone also grows horizontally in response to increasing lateral flows as rising geothermal fluids are deflected by the cap. These flows imply a steady outward migration of geothermal activity but also thermal dilution when spread across a greater area. Development of a capzone has an insulating effect on the fluids below, causing increases in fluid temperature, enthalpy, and ultimately the potential of the geothermal reservoir below. 

[73] The evolution of geothermal fields over geological timescales depends not only on hydrothermal alteration of the near surface permeability structure, but also on changes to the deeper plumbing systems, an evolving chemical composition of fluids, changes to the deep heat sources, and mechanical alteration of permeability, e.g., hydrofracturing 

16 of 18 

DEMPSEY ET AL.: SILICA DEPOSITION IN GEOTHERMAL SYSTEMS 

B05207 

B05207 

or fault reactivation. In addition, topographic pressure gradients and rainfall recharge may play important roles in establishing cold lateral surface flows, which might promote or inhibit silica precipitation upon mixing depending on relative efficacy of cooling and dilution. As at least several of these factors are probably influencing the evolution of any given geothermal field, the consideration of a single factor in isolation begs a cautious interpretation. For instance, at Ohakuri there is evidence for silica deposition promoting fluid sealing and consequent hydrofracturing. In contrast, fault reactivation at Te Kopia has led to local adjustments of the water table, which has consequences for the extent of geothermal activity. Fault rupture also introduces transient changes to the lateral and vertical flow regimes, and favors along strike migration of geothermal expression. Hydrothermal mineralization may play a role in driving fault rupture, by sealing sections of the relatively weak fault plane, leading to transient fluid overpressures that lower the normal stress and promote reactivation. Coseismic permeability increases associated with fault reactivation promote high mass flow rates, an increased rate of mineral precipitation, particularly at the surface, leading to further hydrofracturing. 

[74] Acknowledgments. This research was funded by the Tertiary Education Commission through the TADS scheme and by the Energy Education Trust of New Zealand. The authors wish to thank S. Simmons for comments on an early version of the manuscript, as well as Bob Lowell and another anonymous reviewer for constructive reviews. 

## References 

- Andre, B. J., and H. Rajaram (2005), Dissolution of limestone fractures by cooling waters: Early development of hypogene karst systems, Water Resour. Res., 41, W01015, doi:10.1029/2004WR003331. 

- Arehart, G. B., B. W. Christenson, C. P. Wood, K. A. Foland, and P. R. L. Browne (2002), Timing of volcanic, plutonic and geothermal activity at Ngatamariki, New Zealand, J. Volcanol. Geotherm. Res., 116, 201–214. 

- Beanland, S., G. H. Blick, and D. J. Darby (1990), Normal faulting in a back arc basin: Geological and geodetic characteristics of the 1987 Edgecumbe earthquake, New Zealand, J. Geophys. Res., 95, 4693–4707. 

- Berryman, K., P. Villamor, I. Nairn, R. Van Dissen, J. Begg, and J. Lee (2008), Late Pleistocene surface rupture history of the Paeroa Fault, Taupo Rift, New Zealand, N. Z. J. Geol. Geophys., 51, 135–158. 

- Bibby, H. M., T. G. Caldwell, F. J. Davey, and T. H. Webb (1995), Geophysical evidence on the structure of the Taupo Volcanic Zone and its hydrothermal circulation, J. Volcanol. Geotherm. Res., 68, 29–58. 

- Bignall, G., and P. R. L. Browne (1994), Surface hydrothermal alteration and evolution of the Te Kopia Thermal Area, New Zealand, Geothermics, 23, 645–658. 

- Bignall, G., K. Sekine, and N. Tsuchiya (2004), Fluid-rock interaction processes in the Te Kopia geothermal field (New Zealand) revealed by SEM-CL imaging, Geothermics, 33, 615–635, doi:10.1016/j.geothermics. 2004.03.001. 

- Bons, P. D. (2001), The formation of large quartz veins by rapid ascent of fluids in mobile hydrofractures, Tectonophysics, 336, 1–17. 

- Bryan, C. J., S. Sherburn, H. M. Bibby, S. C. Bannister, and A. W. Hurst (1999), Shallow seismicity of the central Taupo Volcanic Zone, New Zealand: Its distribution and nature, N. Z. J. Geol. Geophys., 42, 533–542. 

- Burnell, J., and W. Kissling (2009), Ngatamariki reservoir model, Rep. 2355, Ind. Res. Ltd., Lower Hutt, N. Z. 

- Chapman, D. S. (1986), Thermal gradients in the continental crust, in The Nature of the Lower Continental Crust, edited by J. B. Dawson et al., Geol. Soc. Spec. Publ., 24, 63–70. 

- Chaudhuri, A., H. Rajaram, and H. Viswanathan (2008), Alteration of fractures by precipitation and dissolution in gradient reaction environments: Computational results and stochastic analysis, Water Resour. Res., 44, W10410, doi:10.1029/2008WR006982. 

- Chaudhuri, A., H. Rajaram, H. Viswanathan, G. Zyvoloski, and P. Stauffer (2009), Buoyant convection resulting from dissolution and permeability growth in vertical limestone fractures, Geophys. Res. Lett., 36, L03401, doi:10.1029/2008GL036533. 

Chaudhuri, A., H. Rajaram, and H. Viswanathan (2012), Fracture alteration by precipitation resulting from thermal gradients: Upscaled mean aperture-effective transmissivity relationship, Water Resour. Res., 48, W01601, doi:10.1029/2011WR010983. 

Cline, J. S., R. J. Bodnar, and J. D. Rimstidt (1992), Numerical simulation of fluid flow and silica transport and deposition in boiling hydrothermal solutions: Application to epithermal gold deposits, J. Geophys. Res., 97, 9085–9103. 

- Curewitz, D., and J. A. Karson (1998), Geological consequences of dike intrusion at mid-ocean ridge spreading centers, in Faulting and Magmatism at Mid-Ocean Ridges, Geophys. Monogr. Ser., vol. 106, edited by W. R. Buck et al., pp. 117–136, AGU, Washington, D. C. 

- Dobson, P. F., T. J. Kneafsey, J. Hulen, and A. Simmons (2003), Porosity, 

- permeability, and fluid flow in the Yellowstone geothermal system, Wyoming, J. Volcanol. Geotherm. Res., 123, 313–324, doi:10.1016/ S0377-0273(03)00039-8. 

- Facca, G., and F. Tonani (1967), The self-sealing geothermal field, Bull. Volcanol., 30, 271–273. 

- Fisher, D. M., and S. L. Brantley (1992), Models of quartz overgrowth and vein formation: Deformation and episodic fluid flow in an ancient subduction zone, J. Geophys. Res., 97, 20,043–20,061. 

- Fournier, R. O., and R. W. Potter II (1982), An equation correlating the solubility of quartz in water from 25<sup>�</sup> C to 900<sup>�</sup> C at pressures up to 10,000 bars, Geochim. Cosmochim. Acta, 46, 1969–1973. 

- Giggenbach, W. F. (1995), Variations in the chemical and isotopic composition of fluids discharged from the Taupo Volcanic Zone, New Zealand, J. Volcanol. Geotherm. Res., 68, 89–116. 

- Grant, M. A., and P. F. Bixley (2011), Geothermal Reservoir Engineering, 2nd ed., Academic, Burlington, Mass. 

- Grindley, G. W., and P. R. L. Browne (1976), Structural and hydrological factors controlling the permeabilities of some hot-water geothermal fields, in Proceedings of the 2nd United Nations Symposium on the Development and Use of Geothermal Resources, pp. 377–386, U.S. Energy Res. and Dev. Admin., Washington, D. C. 

- Heffer, K. J. (2007), Proximity to a critical point: Evidence from, and implications for, hydrocarbon reservoirs, in The Relationship Between Damage and Localization, edited by H. Lewis and G. D. Couples, Geol. Soc. Spec. Publ., 289, 227–239. 

Henneberger, R. C., and P. R. L. Browne (1988), Hydrothermal alteration and evolution of the Ohakuri hydrothermal system, Taupo Volcanic Zone, New Zealand, J. Volcanol. Geotherm. Res., 34, 211–231. 

- Hochstein, M. P. (1995), Crustal heat transfer in the Taupo Volcanic Zone (New Zealand): Comparison with other volcanic arcs and explanatory heat source models, J. Volcanol. Geotherm. Res., 68, 117–151. 

- Hochstein, M. P., and P. R. L. Browne (2000), Surface manifestations of geothermal systems with volcanic heat sources, in Encyclopedia of Volcanoes, edited by B. Houghton et al., pp. 119–141, Academic, San Diego, Calif. 

- Hocking, M. W. A., M. D. Hannington, J. B. Percival, P. Stoffers, U. Schwarz-Schampera, and C. E. J. de Ronde (2010), Clay alteration of volcaniclastic material in a submarine geothermal system, Bay of Plenty, New Zealand, J. Volcanol. Geotherm. Res., 191, 180–192, doi:10.1016/ j.jvolgeores.2010.01.018. 

Kissling, W. M. (2004), Large-scale hydrology of the Taupo Volcanic Zone, New Zealand, PhD thesis, Auckland Univ., Auckland, N. Z. Kissling, W. M., and G. J. Weir (2005), The spatial distribution of the geothermal fields in the Taupo Volcanic Zone, New Zealand, J. Volcan. Geotherm. Res., 145, 136–150, doi:10.1016/j.jvolgeores.2005.01.006. 

- Leary, P. C. (2003), Fractures and physical heterogeneity in crustal rock, in Heterogeneity in the Crust and Upper Mantle: Nature, Scaling and Seismic Properties, edited by J. A. Goff and K. Hollinger, pp. 155–186, Kluwer Acad., New York. 

- Leary, P. C., and F. Al-Kindy (2002), Power-law scaling of spatially correlated porosity and log(permeability) sequences from north-central North Sea Brae oilfield well core, Geophys. J. Int., 148, 426–442. 

- Lewis, D. V. (1960), Relationships of ore bodies to dikes and sills, Econ. Geol., 50, 495–516. 

- Lewis, K. C., and R. P. Lowell (2009), Numerical modeling of two-phase flow in the NaCl-H2O system: Introduction of a numerical method and benchmarking, J. Geophys. Res., 114, B05202, doi:10.1029/ 2008JB006029. 

- Lowell, R. P., P. Van Cappellen, and L. N. Germanovich (1993), Silica precipitation in fractures and the evolution of permeability in hydrothermal upflow zones, Science, 260, 192–194. 

- Mannington, W., M. O’Sullivan, and D. Bullivant (2004), Computer modelling of the Wairakei-Tauhara geothermal system, New Zealand, Geothermics, 33, 401–419, doi:10.1016/j.geothermics.2003.09.009. 

Martin, J. T., and R. P. Lowell (2000), Precipitation of quartz during high-temperature, fracture-controlled hydrothermal upflow at ocean 

17 of 18 

DEMPSEY ET AL.: SILICA DEPOSITION IN GEOTHERMAL SYSTEMS 

B05207 

B05207 

ridges: Equilibrium versus linear kinetics, J. Geophys. Res., 105, 869–882. 

- Micklethwaite, S., and S. F. Cox (2004), Fault-segment rupture, aftershockzone fluid flow, and mineralization, Geology, 32, 813–816, doi:10.1130/ G20559.1. 

- Nield, D. A., and A. Bejan (1998), Convection in Porous Media, 2nd ed., Springer, New York. 

- O’Brien, G. S., C. J. Bean, and F. McDermott (2003), Numerical investigations of passive and reactive flow through generic single fractures with heterogeneous permeability, Earth Planet. Sci. Lett., 213, 271–284, doi:10.1016/S0012-821X(03)00342-X. 

- O’Sullivan, M. J., A. Yeh, and W. I. Mannington (2009), A history of numerical modelling of the Wairakei geothermal field, Geothermics, 38, 155–168, doi:10.1016/j.geothermics.2008.12.001. 

- Phillips, O. M. (1991), Flow and Reactions in Permeable Rocks, Cambridge Univ. Press, Cambridge, U. K. 

- Robinson, A., and J. Gluyas (1992), Model calculations of loss of porosity in sandstones as a result of compaction and quartz cementation, Mar. Pet. Geol., 9, 319–323. 

- Rojstaczer, S., S. Wolf, and R. Michel (1995), Permeability enhancement in the shallow crust as a cause of earthquake-induced hydrological changes, Nature, 373, 237–239. 

- Rowland, J. V., and R. H. Sibson (2004), Structural controls on hydrothermal flow in a segmented rift system, Taupo Volcanic Zone, New Zealand, Geofluids, 4, 259–283. 

- Saar, M. O., and M. Manga (2004), Depth dependence of permeability in the Oregon Cascades inferred from hydrogeologic, thermal, seismic, and magmatic modeling constraints, J. Geophys. Res., 109, B04204, doi:10.1029/2003JB002855. 

- Sharp, W. E. (1960), The deposition of hydrothermal quartz and calcite, Econ. Geol., 60, 1635–1644. 

- Sibson, R. H. (1990), Conditions for fault-valve behaviour, in Deformation Mechanisms, Rheology and Tectonics, edited by R. J. Knipe and E. H. Rutter, Geol. Soc. Spec. Publ., 54, 15–28. 

- Sibson, R. H. (1996), Structural permeability of fluid-driven fault-fracture meshes, J. Struct. Geol., 18, 1031–1042. 

- Simmons, S. F., and P. R. L. Browne (2000), Hydrothermal minerals and precious metals in the Broadlands-Ohaaki geothermal system: Implications for understanding low-sulfidation epithermal environments, Econ. Geol., 95, 971–999. 

- Stauffer, P. H., L. H. Auer, and N. D. Rosenberg (1997), Compressible gas in porous media: A finite amplitude analysis of natural convection, Int. J. Heat Mass Transfer, 40, 1585–1589. 

Steiner, A. (1953), Hydrothermal rock alteration at Wairakei, New Zealand, Econ. Geol., 48, 1–13. 

- Stimac, J., G. Nordquist, A. Suminar, and L. Sirad-Azwar (2008), An overview of the Awibengkok geothermal system, Indonesia, Geothermics, 37, 300–331, doi:10.1016/j.geothermics.2008.04.004. 

- Stow, D. A. V., C. D. Bishop, and S. J. Mills (1982), Sedimentology of the Brae oilfield, North Sea: Fan models and controls, J. Pet. Geol., 5, 129–148. 

- Szymczak, P., and A. J. C. Ladd (2004), Microscopic simulations of fracture dissolution, Geophys. Res. Lett., 31, L23606, doi:10.1029/ 2004GL021297. 

- Walderhaug, O. (1994), Precipitation rates for quartz cement in sandstones determined by fluid-inclusion microthermometry and temperature-history modeling, J. Sediment. Res., A64, 324–333. 

- Wallace, L. M., J. Beavan, R. McCaffrey, and D. Darby (2004), Subduction zone coupling and tectonic block rotations in the North Island, New Zealand, J. Geophys. Res., 109, B12406, doi:10.1029/ 2004JB003241. 

- Weir, G. J. (2009), A mathematical model of rainfall-controlled geothermal fields, Transp. Porous Media, 77, 323–334, doi:10.1007/s11242-0089312-y. 

- White, N. C., and J. W. Hedenquist (1990), Epithermal environments and styles of mineralization: Variations and their causes, and guidelines for exploration, J. Geochem. Explor., 36, 445–474. 

- Wilson, C. J. N., B. F. Houghton, M. O. McWilliams, M. A. Lanphere, S. D. Weaver, and R. M. Briggs (1995), Volcanic and structural evolution of Taupo Volcanic Zone, New Zealand: A review, J. Volcanol. Geotherm. Res., 68, 1–28. 

- Wood, C. P. (1992), Geology of the Rotorua geothermal system, Geothermics, 21, 25–41. 

- Wood, C. P., R. L. Brathwaite, and M. D. Rosenberg (2001), Basement structure, lithology and permeability at Kawerau and Ohaaki geothermal fields, New Zealand, Geothermics, 30, 461–481. 

- Villamor, P., and K. Berryman (2001), A late Quaternary extension rate in the Taupo Volcanic Zone, New Zealand, derived from fault slip data, N. Z. J. Geol. Geophys., 44, 243–269. 

- Zhang, S., M. S. Paterson, and S. F. Cox (1994), Porosity and permeability evolution during hot isostatic pressing of calcite aggregates, J. Geophys. Res., 99, 15,741–15,760. 

- Zyvoloski, G. A. (2007), FEHM: A control volume finite element code for simulating subsurface multi-phase multi-fluid heat and mass transfer, Rep. LAUR-07-3359, Los Alamos Natl. Lab., Los Alamos, N. M. 

18 of 18 

