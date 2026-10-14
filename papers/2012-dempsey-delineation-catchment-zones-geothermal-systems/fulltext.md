# Delineation of catchment zones of geothermal systems in large‐scale rifted settings

**Authors:** D. E. Dempsey, S. F. Simmons, R. A. Archer, J. V. Rowland  
**Published in:** Journal of Geophysical Research: Solid Earth (2012)  
**DOI (version of record):** https://doi.org/10.1029/2012jb009515  
**This copy:** Published version. Text extracted from the PDF at https://ddempsey.github.io/papers/2012-dempsey-delineation-catchment-zones-geothermal-systems/dempsey2012-delineation-catchment-zones.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** Published version, posted under AGU's author self-archiving policy. © 2012 American Geophysical Union. All Rights Reserved. Version of record: https://doi.org/10.1029/2012jb009515  

---
JOURNAL OF GEOPHYSICAL RESEARCH, VOL. 117, B10201, doi:10.1029/2012JB009515, 2012 

# Delineation of catchment zones of geothermal systems in large-scale rifted settings 

## D. E. Dempsey,<sup>1</sup> S. F. Simmons,<sup>2</sup> R. A. Archer,<sup>1</sup> and J. V. Rowland<sup>3</sup> 

Received 9 June 2012; revised 14 August 2012; accepted 23 August 2012; published 5 October 2012. 

[1] Hydrothermal convection in the Taupo Volcanic Zone (TVZ), New Zealand, is driven by heat extracted at the brittle-ductile transition, which is in turn supplied by magmatic intrusion of the lower-crust. We present a numerical model that approximates this circulation in a statistical sense, being constrained by TVZ dimensions and mean thermal properties, but incorporating a permeability distribution of arbitrary heterogeneity. A particle tracking methodology that accounts for advective and dispersive transport is introduced, and ensembles of several tens of thousands of flow paths are constructed for each of the modeled geothermal systems. These flow paths reveal the nature of mass recharge in multicell convective systems, and suggest the ages of waters in TVZ geothermal systems vary between 5 and 50 kyr. Flow path ensembles are used to delineate catchments for each of the modeled systems and a method for calculating their areas is introduced. Catchment area is shown to be proportional to system heat output and area, which is consistent with a 1-D analytical model of heat and mass transfer. As an approximation to catchments delineated by particle tracking, we outline a method of Voronoi tessellation based on the positions and heat outputs of geothermal systems. This method is used to delineate catchments for geothermal systems in the TVZ and Iceland. 

Citation: Dempsey, D. E., S. F. Simmons, R. A. Archer, and J. V. Rowland (2012), Delineation of catchment zones of geothermal systems in large-scale rifted settings, J. Geophys. Res., 117, B10201, doi:10.1029/2012JB009515. 

## 1. Introduction 

[2] In the Taupo Volcanic Zone (TVZ) of New Zealand’s Central North Island, water convects through the brittle crust through a number of large-scale geothermal systems. Geothermal fluid upwells in more than twenty distinct plumes, which define the upflow-zones and host reservoirs that are utilized for production of thermal and electrical energy. Convection is thought to be driven by a high rate of riftrelated magmatic intrusion occurring at mid- to lower-crustal depths [Bibby et al., 1995; Hochstein, 1995]. Downward percolation of cold meteoric water mines heat at the brittleductile transition (BDT) and transports it efficiently to the surface [McNabb, 1975; Bibby et al., 1995]. Fault and fracture permeability are maintained by a high rate of tectonic extension (12 mm yr<sup>�1</sup> ) [Wallace et al., 2004]. The stratigraphy comprises welded and non-welded pyroclastic tuffs and lavas erupted during voluminous Quaternary rhyolitic 

> 1Department of Engineering Science, University of Auckland, Auckland, New Zealand. 

> 2Hot Solutions Ltd., Auckland, New Zealand. 

> 3School of Environment, University of Auckland, Auckland, New Zealand. 

Corresponding author: D. E. Dempsey, Department of Engineering Science, University of Auckland, Private Bag 92019, Auckland Mail Centre, Auckland 1142, New Zealand. (d.dempsey@auckland.ac.nz) 

©2012. American Geophysical Union. All Rights Reserved. 0148-0227/12/2012JB009515 

volcanism, and deposited on to subsiding basement units composed of greywacke and argillite [Wilson et al., 1995]. 

[3] On the basis of the uniformity of their distribution, McNabb [1975] proposed that the distribution of geothermal systems in the TVZ was analogous to that of convection cells that form in a porous medium heated from below. Heat is transported from the lower to the upper surface in discrete plumes, a feature consistent with recent magnetotelluric imaging of the brittle crust, which suggests the presence of conductive pipe structures at depths of 2 to 10 km [Bertrand et al., 2012]. McNabb’s [1975] conceptual model suggests that the locations of geothermal systems do not necessarily correspond to specific deep heat sources; however, the role of the time-varying magmatic system as a driver of convection remains an open question [Rowland et al., 2010]. In recent years, numerical modeling studies of TVZ circulation have yielded new insight into the deep structure of convective plumes, their recharge, and stability on geological timescales. For example, using a variable heat input through 16 separate, basal domains (calibrated by the corresponding surface output at that location), Kissling and Weir [2005] constructed a large-scale circulation model in good agreement with the locations and outputs of TVZ geothermal fields. In their model, recharge of the geothermal plumes occurs through a high permeability region in the center of the domain, which corresponds to the enhanced structural permeability inferred to exist in the Taupo fault belt [Bibby et al., 1995]. 

[4] McLellan et al. [2010] presented a suite of generic multicell convection models that incorporated several TVZlike features, including inclined fault structures, contrasts in 

B10201 

1 of 19 

DEMPSEY ET AL.: GEOTHERMAL CATCHMENT DELINEATION 

B10201 

B10201 

basement permeability, and rift-related deformation. Their models demonstrated preferential formation of convective plumes above basement faults that focus upwelling. Furthermore, the stability of geothermal systems in space and time was explored; greater stability was demonstrated for a surface convective (as opposed to conductive) boundary condition, while decreased stability was associated with higher ignimbrite permeability. 

[5] In this paper, a similar approach to McLellan et al. [2010] is adopted; insight into TVZ circulation and largescale convective systems is gained through an investigation of generic circulation models. Convection occurs in a computational domain that is dimensionally consistent with the TVZ, and average properties of the modeled geothermal systems are calibrated against their TVZ counterparts, e.g., field heat outputs, across-strike heat distribution. However, due to the vast dimensionality of the parameter space, specification of arbitrary heterogeneity in both the crustal permeability field and basal temperature distribution makes precise replication of TVZ circulation highly unlikely. Nevertheless, the model allows an investigation of individual hydrothermal plumes in the context of large-scale convection and yields specific insights into the mass recharge of geothermal systems. Particular emphasis is placed on the size and distribution of catchment zones from which mass recharge is drawn and the residence time of water within the crust. 

[6] Delineation of catchment zones by numerical methods is a common practice in the groundwater community [e.g., Vassolo et al., 1998; Kunstmann and Kinzelbach, 2000; Frind et al., 2002; Rock and Kupfersberger, 2002; Frind et al., 2006] with particular consideration given to the establishment of wellhead protection areas and contaminant transport. The catchment area for a given well is defined as the source region from which water can travel and be captured by the well, within some nominal time period. A variety of time-of-travel zones (TOTs) are constructed for the purpose of excluding or containing specific contaminants, e.g., 100–250 days for bacterial contaminants, and 25 years for chlorinated solvents in New Brunswick, Canada [Frind et al., 2006]. The geothermal system’s catchment is defined in a similar way, with the upflow-zone that gathers and concentrates heated waters substituting for the well, and TOTs representing regions from which similarly aged waters are drawn. 

[7] Catchment zones can only be delineated where there is sufficient knowledge of the subsurface flow distribution. In groundwater applications, a two- or three-dimensional flow field can be obtained numerically from a variety of software packages (e.g., MODFLOW [Feyen et al., 2004]; FEFLOW [Rock and Kupfersberger, 2002]; STGF [Vassolo et al., 1998]) providing aquifer properties and boundary conditions are sufficiently constrained. Once the flow field is known, several methods exist for tracking the position of particles captured by the well back in time, i.e., backward particle tracking. For example, an adjoint-state based approach can be used to assign probability distributions to the upstream area; these represent both the likelihood that a contaminant particle originated at a particular location as well as a probabilistic description of the time since the contamination event occurred [e.g., Neupauer and Wilson, 2003b; Frind et al., 2002]. This method was applied by Neupauer and Wilson [2003a] to delineate catchment zones and to describe 

exposure to a contaminant that decays in time. Frind et al. [2006] used the approach to analyze more general well vulnerability issues, including, for a given catchment contamination event, the degree, onset and persistence of contaminant exposure. 

[8] An alternative method of catchment delineation involves the reconstruction of particle flow paths that terminate at a given point, i.e., the wellhead, and subsequent contouring of particle locations after a given time. Particle tracks are constructed by reversing the sign of the fluid velocity distribution and propagating their positions backward in time by advective and dispersive processes. Using a random walk to account for particle dispersion, Uffink [1989] described the catchment zone around a pumping well in a probabilistic sense. Kunstmann and Kinzelbach [2000] used this approach to delineate a catchment zone for the Gambach aquifer in Germany by the 0.5 probability isoline, i.e., the area within which particles are more likely than not to reach the well. Uncertainty in groundwater systems has received increasing attention in recent years. For example, Vassolo et al. [1998] applied a Monte-Carlo scheme to account for uncertainty in both recharge rates and aquifer permeability; the approach yields a distribution of catchment zones with varying degrees of confidence. Kunstmann and Kinzelbach [2000] present an alternative method in which input uncertainty propagation occurs concurrently with particle tracking; they compare their method with Monte-Carlo techniques and demonstrate significant computational savings. 

[9] This paper describes the construction of a generic large-scale circulation model constrained by TVZ dimensions and material parameters, and calibrated against mean properties of the ensemble of geothermal systems (section 2). Fluid flow is modeled in three-dimensions using the heat and mass transfer code FEHM [Zyvoloski, 2007]. This code has previously been used to model natural convection in air [Stauffer et al., 1997] and single-cell geothermal systems [Dempsey et al., 2012]. In section 3, the implementation of a particle tracking algorithm accounting for advective and dispersive transport is discussed. Particle tracks generated for a single modeled geothermal system are used to develop a description of that system’s catchment zone (section 4). This method is then used to delineate catchment zones for all modeled geothermal systems in section 5. The consistency of these catchments with one-dimensional geothermal heat and mass transport arguments [Weir, 2009] is evaluated. An alternative, first-order method of catchment construction based on Voronoi tessellation is proposed in section 6 and compared with those delineated by particle tracking. This second method, while less accurate, does not require knowledge of the fluid velocity field; its application to convective systems in the TVZ and Iceland is discussed. 

## 2. Numerical Model 

[10] Circulation is modeled in a computational domain large enough to encompass the majority of the geothermal systems in the central TVZ. The domain measures 50 km across strike, 80 km along strike and is 8 km deep; the acrossstrike dimension is large enough that lateral boundaries do not influence upflow-zones, while an 8 km vertical dimension corresponds to the approximate depth extent of the BDT [Bryan et al., 1999]. Previous arguments based on 

2 of 19 

DEMPSEY ET AL.: GEOTHERMAL CATCHMENT DELINEATION 

B10201 

B10201 

convection theory [Wooding, 1978] suggested a depth of circulation of 3 km could give rise to convection cells with the observed 10 to 15 km spacing of the TVZ; however, this estimate is now regarded as too low. The base of the convective system is expected to correlate with the BDT (at a depth of 6–8 km) as this represents the onset of quartz plasticity and thus the limit of fracture permeability deemed necessary to sustain convection. Circulation is modeled on a regular grid with horizontal and vertical nodal spacing of 500 and 400 m, respectively. This represents an improvement in resolution compared to the 1 � 1 � 0.5 km blocks used by Kissling and Weir [2005] in their model of the TVZ, although we note that the model domain used here is smaller. Mass recharge of TVZ geothermal systems is primarily meteoric, although Giggenbach [1995] suggested a magmatic component of up to 6 and 14% might contribute to western and eastern systems, respectively. In the model presented here, a no-flow boundary condition is enforced at the lower boundary, i.e., a magmatic fluid flux is not considered. Initially, the model is everywhere 20<sup>�</sup> C and mass fluxes are zero. 

[11] Permeability structure influences the heat output and dimensional characteristics of both the ensemble and individual convection cells. In constructing a permeability distribution, several geophysical factors, both general and TVZ-specific, are considered including: (i) a 2 km thick, surface layer of relatively permeable volcanic strata overlying 6 km of greywacke basement; (ii) exponential decay in permeability with depth from 0.53 � 10<sup>�14</sup> m<sup>2</sup> (5.3 mD) at the surface to 0.15 � 10<sup>�14</sup> m<sup>2</sup> at the basement contact (z = � 2 km) representing increasing pore compaction with depth, and from 0.15 � 10<sup>�14</sup> m<sup>2</sup> to 0.66 � 10<sup>�15</sup> m<sup>2</sup> at the base of the model representing closure of basement fractures with increasing confining stress; and (iii) a spatially correlated fluctuation field that captures the stochastic nature of fracture distribution contributing to crustal permeability. The range of permeabilities used in this model are similar to those used by previous workers undertaking modeling studies of the TVZ, e.g., 5–100� 10<sup>�15</sup> m<sup>�2</sup> from Kissling and Weir [2005], 1–200 � 10<sup>�15</sup> m<sup>�2</sup> from Mannington et al. [2004]. Permeability outside the rift (x < 5 km and x > 45 km) is two orders of magnitude less than its in-rift component. Horizontal permeability is three times higher than the quoted vertical permeabilities; this ratio is less than the 1:10 ratio used by Kissling and Weir [2005] in studying rift-scale circulation, and the 1:40 used by Mannington et al. [2004] in modeling the upper regions of the Wairakei convective plume. As the modeling investigation detailed here is concerned with circulation to the base of the convective system, we use a lower horizontal/vertical permeability ratio; this better represents the permeability structure of the dominant greywacke basement unit, which is more isotropic due to an absence of stratigraphic layering. 

[12] A spatially correlated, heterogeneous fluctuation field is superimposed upon the homogeneous, depth-dependent permeability profile. Spatial fluctuations have a power lawscaling exponent, b, of 1.5; this was selected as a combination of pure ‘pink’ noise associated with a critical crust [e.g., Leary and Al-Kindy, 2002] overprinted on geological features that impart structure, e.g., formation contacts, faults, etc. This degree of spatial correlation was found to give the best results in terms of localizing discrete upflow-zones; at lower values of b (⪅1.3) convective cells form long chains, 

behavior that is not observed in the TVZ (with the possible exception of the combined Waimangu-Waiotapu-Reporoa fields). For higher values of b (≳1.7), very high (10<sup>�13</sup> m m<sup>2</sup> ) and very low (10<sup>�16</sup> m<sup>2</sup> ) permeability domains, 10’s of kilometers in width, are formed; this distribution does not capture the distributed nature of faulting and structural permeability throughout the TVZ. For b on the edges of these domains, i.e., � 1.3 or � 1.7, the properties of the convective circulation that develop can depend upon the specific permeability realization, e.g., for b = 1.3 convection cells will sometimes, but not always, link up into chains. Figure 1 shows the modeled permeability distribution for several arbitrary 2-D slices. Low permeability in the rift boundaries (x < 5 km and x > 45 km) is evident. 

[13] Convection in the model is driven by an across-strike, piecewise temperature distribution applied as a boundary condition at the base of the model. Figure 1b shows this is comprised of a low temperature background (200–210<sup>�</sup> C) at the margins of the rift, a warmer hotplate between 10 and 26 km (265<sup>�</sup> C), and a high temperature hotplate between 26 and 40 km (310<sup>�</sup> C). Superimposed on the large-scale temperature structure is a smaller-scale, spatially correlated temperature fluctuation; while this has some influence on the location, size and heat output of convection cells, we found it to be a less significant control than the permeability structure. The temperature fluctuation field shares the same spatial correlation as the permeability distribution, i.e., an exponent, b, of 1.5, and represents heterogeneity in the temperature distribution due to non-uniform magmatic intrusion. Boundary temperatures are less than those likely to be encountered in the vicinity of intruded magma; rather, this condition reflects the onset of quartz-plasticity at 300–350<sup>�</sup> C occurring at an approximate depth of 8 km. In these models, boundary temperature heterogeneity is constant in time - in future, a more complex model could account for time-varying heterogeneity representing a more-dynamic environment of magmatic intrusion buffered by convective cooling. 

[14] The computational domain corresponds to a region of the TVZ containing approximately thirteen geothermal fields (Figure 2a). After 500 kyr of simulation time, the model attains a circulation state in which large-scale convection occurs through ten discrete convection cells, as demarcated by the 2 Wm<sup>�2</sup> vertical heat flux contour (Figure 2b). At 250<sup>�</sup> C, maximum surface temperatures are slightly cooler than the � 300<sup>�</sup> C of the TVZ, although Kissling and Weir [2005] note that surface temperatures increase with improved model resolution; this may go some way toward accounting for the discrepancy. The modeled systems range in area from 6 to 93 km<sup>2</sup> and in heat output from 44 to 833 MW (see Table 1). Most systems have outputs between 100 and 250 MW; this is consistent with a one-dimensional, rainfall-recharge model for geothermal systems proposed by Weir [2009], who found that, for TVZ parameters, systems of 200 MW should be favored. The average output of modeled geothermal systems is smaller than those collated by Bibby et al. [1995] based on chloride flux calculations [Ellis and Wilson, 1955]. An increase in model heat output can be achieved (via an increased mass flux) by raising the permeability; however, this has the effect of lowering surface temperatures. Permeability ranges used in these models represent a calibration trade-off between the heat output of the modeled hydrothermal plumes, and their temperatures at near-surface (<1 km) 

3 of 19 

DEMPSEY ET AL.: GEOTHERMAL CATCHMENT DELINEATION 

B10201 

B10201 

Figure 1. (a) Slices through the heterogeneous 3-D permeability distribution. The spatial fluctuations follow a power law distribution with scaling exponent of 1.5 and maximum amplitude of � 1.5 orders of magnitude. Observation planes are positioned at x = 35 km, y = 55 km, and z = � 7 km. (b) Piecewise, two-temperature hotplate boundary condition applied at the base of the model. The mean temperature outside the rift (x < 10 km and x > 40 km) is 205<sup>�</sup> C. The lower temperature hotplate (10 < x < 26 km) has a mean value of 265<sup>�</sup> C and the higher temperature hotplate (26 < x < 40 km) has a value of 310<sup>�</sup> C. The power law fluctuation superimposed upon the average along-strike temperature profile has a maximum amplitude of � 30<sup>�</sup> C and a scaling exponent of 1.5. 

depths. Further improvements in model heat output and nearsurface temperatures may be obtained by a description of circulation at super-critical temperatures, for instance, due to the influx of magmatic fluids or heating near shallow magmatic intrusions. Our model does not account for these effects. 

[15] Qualitatively, modeled systems are smaller in area than their TVZ counterparts, although a precise judgment is difficult when making a comparison between resistivity contours, used to delineate TVZ system boundaries, and the heat flow contours used in the model. In addition, 

interactions between hot upwelling fluids and near-surface hydrology, which may lead to more prevalent lateral outflows, have not been considered here. The model includes a particularly large system that, at 830 MW and 93 km<sup>2</sup> , is slightly larger than the combined Waiotapu, Waimangu and Reporoa systems. 

[16] The mean vertical heat flux through the rift is 0.61 Wm<sup>�2</sup> (Figure 2c), which is consistent with estimates for the TVZ of 0.6–0.8 Wm<sup>�2</sup> [Hochstein, 1995]. The piecewise hotplate temperature boundary condition applied to the base of the model (Figure 1b) produces an across-strike 

4 of 19 

DEMPSEY ET AL.: GEOTHERMAL CATCHMENT DELINEATION 

B10201 

B10201 

Figure 2. (a) Locations of geothermal systems within the TVZ and the model domain (dashed outline; Figure 2b). At = Atiamuri (10), BO = Broadlands-Ohaaki (190), MO = Mokai (400), NG = Ngatamariki (55), OK = Orakeikorako (660), RE = Reporoa (15), RI = Rotoiti (190), RK = Rotokawa (220), RO = Rotorua (470), TA = Tokaanu (60), TH = Tauhara (110), TK = Te Kopia (250), WK = Wairakei (420), WM = Waimangu (325), WP = Waiotapu (540). Field heat outputs from Bibby et al. [1995] are given in brackets. (b) Modeled geothermal systems after 500 kyr simulation time, demarcated by the 2 Wm<sup>�2</sup> (heavy black) contour of vertical heat flux. The 0.1 Wm<sup>�2</sup> contour is also shown (thin black). Areas and heat outputs corresponding to the numbered fields are given in Table 1. (c) Mean vertical heat flux over the model domain with depth. The target interval from Hochstein [1995] is shaded red. (d) Model across-strike heat distribution binned every 5 km (black) compared to TVZ distribution [red, from Bibby et al. 1995]. For the purposes of comparison, model heat output has been scaled to match TVZ heat output of Bibby et al. [1995]. 

heat output that exhibits a similar bimodality to that observed by Bibby et al. [1995] for the entire TVZ (Figure 2d). For the purposes of this comparison, total model heat flow was scaled by a factor of ≈ 2 to match data used by Bibby et al. [1995]. As noted earlier, this is due to modeled geothermal systems underestimating heat output when compared with measured outputs derived from chloride flux calculations. 

[17] Mass recharge of geothermal cells occurs by downward percolation of cold fluids throughout 84% of the rift (5 < x < 45 km). These down-flows suppress temperatures below the conductive gradient that exists outside the rift, with temperatures as low as 50<sup>�</sup> C recorded at a depth of 6 km. Unfortunately, the absence of deep drilling in the TVZ precludes any verification of this finding. The depth to which surface temperatures penetrate the crust was shown by Weir [2009] to be a function of the downward percolation velocity, vd. In the model presented here, vd has a mean of value of 1� 10<sup>�9</sup> ms<sup>�1</sup> , which is similar to the infiltration rate of rainwater used in other models of the TVZ [Kissling and Weir, 2005; Weir, 2009]. 

## 3. Particle Tracking Method 

[18] Fluid flow paths are constructed by considering the movement of particles at positions xt and at times t subject to 

advective, diffusive and dispersive forces. The position of a particle at some later time t + Dt is given by Kitanidis [1994] as 

where v is the particle velocity (equal to the Darcy velocity divided by porosity), x is a vector of normally distributed 

Table 1. Properties of Modeled Geothermal Systems<sup>a</sup> 

|System|Q(MW)|A(km<sup>2</sup>)|n(10<sup>3</sup>)|�tr (kyr)|�xr (km)|C (km<sup>2</sup>)|
|---|---|---|---|---|---|---|
|1|105|17|65|22.3|4.1|176|
|2|100|13|56|12.0|4.5|70|
|3|133|21|143|17.6|5.6|157|
|4|143|18|85|15.3|5.5|97|
|5|240|32|267|15.3|6.3|259|
|6|70|7|64|22.7|5.8|104|
|7|157|24|194|20.5|6.9|187|
|8|112|15|120|13.0|4.9|91|
|9|833|93|638|16.1|8.2|499|
|10|44|6|37|32.6|5.0|83|

> aQ = heat output, A = area, n = approximate number of particle tracks, �tr = mean residence time, �xr = mean return distance, C = catchment area. System numbers refer to Figure 2b. The calculation of residence time, return distance and catchment area are discussed in section 4. 

5 of 19 

DEMPSEY ET AL.: GEOTHERMAL CATCHMENT DELINEATION 

B10201 

B10201 

random numbers with mean zero and unit variance, and D is the 3 � 3 dispersion tensor [e.g., Wood et al., 2003] given by 

where Dm is the molecular diffusivity, and aL and aT are the longitudinal and transverse dispersivities. V is a 3 � 3 tensor satisfying VV<sup>T</sup> = D [Kitanidis, 1994] and is obtained from Cholesky decomposition of D. 

[19] The second term on the right hand side of equation (1) is solved using an explicit, 4th-order Runge-Kutta algorithm and with a time step size of �30 years. This term represents advective advancement of the flow path adjusted for drift introduced by spatial variation in the dispersion tensor; neglecting the r � D term in (1) leads to a non-physical accumulation of mass in low dispersion regions. The third term on the RHS of (1) represents the random walk; it is calculated at particle midpoints, i.e., xt + Dt/2, and applied at the end of each iteration. 

[20] Spatial variation in the dispersion tensor is due to a heterogeneous velocity field associated with the similarly heterogeneous permeability field. In practice, molecular diffusivity, Dm, increases with both temperature and the temperature-dependent viscosity, and therefore this term should also contribute to r � D; however, as the temperature and pressure dependence is unconstrained over the necessary intervals, a constant, but artificially high, value of Dm of 1 � 10<sup>�8</sup> m<sup>2</sup> s<sup>�1</sup> is chosen. Following Goode [1996], the intent is to demonstrate the maximum likely effect of diffusion. 

[21] Dispersivity coefficients vary with both the scale of fluid flow and the geological media to which they are ascribed [Schulze-Makuch, 2005]. As with molecular diffusivity, constant values for aL and aT are selected. An estimate of longitudinal diffusivity is obtained from scaling relationships constructed by Schulze-Makuch [2005]; for a wellconsolidated geological media and at a flow scale of 500 m (corresponding to the mesh dimension) a value of 17.9 m is chosen. Based on data in Gelhar et al. [1992] and, again, for a flow scale of 500 m, a transverse dispersivity of 1 m is used. 

[22] Within the crust, v varies continuously in both space and time; however, model output is restricted to discrete positions (the nodes) and time steps. We use linear interpolation to calculate the velocity field at time, t, between two time steps, ti and ti + 1, and at position, x, within a cuboid volume defined by eight corner nodes at positions, x1,2, … 8. Linear interpolation of velocity within an element satisfies conservation of mass and is thus a desirable interpolation scheme. 

[23] Each particle flow path provides a small amount of information on the nature of geothermal recharge; a complete picture is established by considering several tens of thousands of flow paths. Here, the instantaneous recharge properties for a given geothermal convection cell are considered, i.e., a set of flow paths that all terminate within the boundary of the system at a precise time. A set of flow paths satisfying this condition is obtained by releasing particles at random locations within the geothermal system boundary and back-tracking their positions in time. The number of particles released from a given location is proportional to the mass flux at that location; this prevents bias introduced by the over- and under-sampling of low and high mass-flux 

regions, respectively. Particle back-tracking is implemented numerically by making the replacement v → � v in equations (1) and (2). The procedure is equivalent to solving a Kolmogorov backward equation for a general stochastic process. In total, 1.7 million particle tracks were constructed for the ten modeled geothermal systems (Table 1), with larger flow path ensembles constructed for larger systems with greater mass throughputs. 

### 3.1. Effects of Thermal Dispersion on Convection 

[24] As each fluid particle carries an amount of heat energy, mass dispersion can influence the transport of heat within a hydrothermal plume. While accounted for in the particle tracking algorithm implemented in post-processing, mass dispersion and its associated effects on heat transport are not included explicitly in the governing equations in FEHM. An approximate description of thermal dispersion can be included by prescribing an effective thermal conductivity, which is increased to account for enhanced heat transport; transverse and longitudinal thermal dispersion can be differentiated by a tensor description of the thermal conductivity [Nield and Bejan, 2006]. However, for the conditions under which convection occurs here, the effects of thermal dispersion on plume structure can be shown to be negligible. 

[25] Tyvand [1977] derived expressions for the perturbation by thermal dispersion of natural convection in a porous medium heated from below. At large Péclet numbers, the onset of convection is delayed and the size of convection cells either increased or decreased depending on the ratios of vertical to horizontal dispersion and permeability. However, for small Péclet numbers, such as those encountered at Darcian flow velocities, the effects of dispersion are negligible. In our simulations, the Péclet number, defined Pe = vDLp/af where vD is the Darcy velocity (up to 10<sup>�7</sup> ms<sup>�1</sup> in the upflow zone), Lp the particle diameter and af the thermal diffusivity (� 10<sup>�7</sup> m<sup>2</sup> s<sup>�1</sup> ), has values of 10<sup>�3</sup> � 10<sup>�6</sup> for millimeter- to micrometer- sized particle distributions. These values are well below the threshold for which thermal dispersion is significant. In contrast, where convection is driven by a solute gradient and the molecular diffusivity is much smaller than the thermal diffusivity, larger Péclet numbers occur. Under these conditions, dispersion must be accounted for in the transport equations [e.g., Hassanzadeh et al., 2009]. 

## 4. Single Field Particle Tracking 

[26] This section discusses particle tracking for a single modeled system and develops techniques to be applied later to the ensemble of systems. For modeled system 1 (see Figure 2b and Table 1), approximately 65 000 flow paths terminating at t = 500 kyr were constructed. For each flow path, the following statistics are calculated: (i) the time taken from a particle’s infiltration outside the system (source) until its return within the system (return), i.e., the residence time; (ii) the horizontal distance traveled during this time (return distance); and (iii) the proportion of the residence time spent in the greywacke subdomain (z < � 2 km), termed basement affinity. These values are represented by relative frequency histograms in Figures 3a–3c. System recharge properties are also illustrated spatially by constructing a probability density 

6 of 19 

DEMPSEY ET AL.: GEOTHERMAL CATCHMENT DELINEATION 

B10201 

B10201 

Figure 3. Statistics for �65000 particle tracks for system 1 (see Figure 2b). (a) Relative frequency histogram of return distances. Mean of 4.1 km is marked by the dashed line. (b) Relative frequency histogram of residence times. Mean of 22.3 kyr is marked by the dashed line. (c) Relative frequency histogram of basement affinity. (d) Probability density function of particle source location. (e) Mean residence time at particle source. (f) Mean basement affinity at particle source. 

function that describes the likelihood of a particle originating from a specific location (Figure 3d); this is one representation of the catchment of the geothermal system. Average residence times and basement affinity can then be represented spatially by contouring their values within the catchment (Figures 3e–3f). 

[27] Fluid recharge for modeled system 1 occurs up to 10 km distant from the main upflow-zone, although the majority of particles (>80%) are sourced between a distance of 1 and 6 km. The relative frequency histogram shows a peak at 2.5 km, which corresponds to a large fluid contribution from a region centered at {x, y} = [10, 9] km (see Figure 3d). This anomaly is characteristic of the non-uniform distribution of 

recharge in the region surrounding the geothermal system. For instance, several high recharge zones occur to the left of the system with another located at the top right; in contrast very little recharge is sourced from a large region to the bottom right. This variation in recharge contribution is sensitive to both the proximity and size of neighboring geothermal systems, as well as the imposed permeability heterogeneity, e.g., high and low recharge coincides with regions of high and low permeability. A similar result was obtained by Kissling and Weir [2005] in their rift-scale model of the TVZ; they found regions of strong down-flow coinciding with a central high permeability zone corresponding to the Taupo fault belt. 

7 of 19 

DEMPSEY ET AL.: GEOTHERMAL CATCHMENT DELINEATION 

B10201 

B10201 

Figure 4. (a) Catchment area of system 1 for domain discretizations between 50 and 1000 m. Catchment threshold levels of 90, 96, 99, 99.5, and 99.9% are shown. Least squares linear trends are fit to the data for discretizations greater than 400 m and intercept the vertical axis at the zero-discretization catchment area (area0). (b) Zero-discretization catchment area versus catchment threshold. A least squares linear trend is fit to the data for catchment thresholds between 50 and 95%. For a 100% catchment threshold, the fitted line predicts a catchment area of 176 km<sup>2</sup> . 

[28] The distribution of particle residence times is also highly variable, with the majority of particles spending between 5 and 50 kyr in transit through the crust. The shape of Figure 3b is similar to that of a tracer breakthrough curve, demonstrating both a fast rise and a long tail; this is due to the majority of particles taking the shorter flow paths, and a decreasing minority taking tortuous, meandering paths [Moreno et al., 1988; Tsang and Neretnieks, 1998]. The average residence time for the entire system is 22.3 kyr. This number is higher than the 12 kyr upper limit obtained by Stewart [1978] based on the absence of a glacial isotopic signal in deep fluids from Wairakei geothermal field. In contrast, Giggenbach et al. [1994], studying isotopic compositions of CO2 and CH4 at Waiotapu geothermal field, established estimates for the transit time of these gaseous species to rise from the base of the hydrothermal plume to the surface. This provides some constraint on the residence time while entrained in the rapidly moving upflow, but does not reflect the slower downward percolation. Nevertheless, they give some indication the spatial variability in the age of geothermal waters, while providing a lower bound on the total residence time. Interpreted residence times for the upflow transit were 2 kyr in the north of the field, increasing southward to 18 kyr in the central sections and 11 to 280 kyr in the south: these ages are more consistent with those in modeled system 1. 

[29] Spatially, residence times vary depending on the proximity of a recharge source to the system; Figure 3e reveals that, on average, younger waters are sourced closer to the system than those recharging at a greater distance. Recharging waters spend the vast majority of their time within the basement, which is consistent with both the lower permeability (and thus lower fluid velocity) ascribed to this subdomain, as well as its being three times thicker than the surface cover sequence of volcanic rocks and their reworked equivalents. Basement affinity also demonstrates 

considerable spatial variability (Figure 3f), which is attributed to heterogeneities in the permeability structure. 

### 4.1. Catchment Delineation 

[30] The size of the catchment area of the geothermal system, defined as the area outside the hydrothermal plume from which recharge is drawn, can be approximated by considering the areal coverage of the set of points representing flow path source locations. As each flow path has an infinitesimally small cross-section, a discretization-based approach is employed; the surface area around a given upflow-zone is discretized and grid cells are regarded as part of the catchment if they contain a flow path source. This inevitably leads to some dependence of the estimated catchment area on the grid cell dimension, e.g., larger grid cells deemed part of the catchment have a greater chance of covering part of the noncatchment area. Furthermore, catchments that account for given percentages of the total recharge (i.e., the total particle number) can be constructed; catchment area also depends on this recharge threshold. Figure 4a shows the catchment area for system 1 calculated for discretizations ranging between 50 and 1000 m, and for several different recharge thresholds, e.g., the 90% threshold represents the smallest catchment area that accounts for 90% of the total recharge. As expected, greater proportions of recharge are accounted for by larger catchments. The data in Figure 4a indicate that catchment size demonstrates an approximately linear dependence on discretization for values greater than 400 m; this represents the increasing error with which the edge of the true catchment is pixelated. Extrapolating the linear trend back to an infinitely discretized domain (discretization dimension of zero) then provides an estimate of the catchment size for a given threshold. 

[31] For domain discretizations less than 400 m, the estimated catchment area begins to fall sharply to zero; this occurs because the pixel dimension is approaching the mean spacing between particle source locations. As pixels are 

8 of 19 

DEMPSEY ET AL.: GEOTHERMAL CATCHMENT DELINEATION 

B10201 

B10201 

Figure 5. Effect of dispersion on particle tracking. (a) Return distance relative frequency histograms for particle tracking with full dispersion (black), dispersion reduced to 10% (red), and no dispersion (blue). (b) Residence time relative frequency histograms. (c) Basement affinity relative frequency histograms. (d) Probability density function of particle source location for full, (e) reduced, and (f) no dispersion. The feature labeled a in Figure 5e is referred to in the text. 

reduced in size, the number of empty pixels occupying the space between points in the particle location cloud increases, and regions that were previously considered part of the catchment are no longer counted. This effect is avoided by extrapolation of the data from the region in which it behaves linearly. 

[32] Zero-discretization catchment areas (area0) are plotted against recharge threshold in Figure 4b. The relationship between catchment area and recharge threshold is approximated by an exponential; extrapolation of this trend to a 100% recharge threshold furnishes an estimate of the system’s catchment. For system 1, this yields a 176 km<sup>2</sup> catchment area. In practice, the 100% catchment area should be 

infinitely large (or equal to the domain area) as there exists a finite possibility that, given favorable dispersive transport, fluid anywhere could be transported to the upflow-zone. The data in Figure 4b begin to demonstrate this quality for recharge thresholds greater than 97%. Extrapolating the approximately exponential trend that exists between recharge thresholds of 50 and 95% up to a value of 100%, represents an acceptable truncation of this behavior. 

### 4.2. Effect of Dispersion 

[33] Figure 5 shows the effects of neglecting dispersion in the particle tracking algorithm (equation (1)). The iterative 

9 of 19 

DEMPSEY ET AL.: GEOTHERMAL CATCHMENT DELINEATION 

B10201 

B10201 

Figure 6. Recharge statistics for the ten modeled geothermal systems. (a) Return distance, (b) residence time, and (c) basement affinity relative frequency histograms. (d) Particle source locations and geothermal field boundaries delineated by 2 Wm<sup>�2</sup> vertical heat flux contour. Each system outline, its corresponding particle source cloud and profiles in Figures 6a–6c are associated with a distinct color. Color intensity in Figure 6d is proportional to the probability density for particle source at that location. The black line delineates the 0.1 Wm<sup>�2</sup> vertical heat flux contour. 

application of a random walk to the particle trajectory results in a smoother distribution of recharge source that is intuitively more physical than that obtained by advection-only particle tracking. Relative frequency histograms of return distance and residence time are smoother with increasing dispersion, although distribution averages are largely unaffected. The smoothing effect is attributed to a sort of ‘mixing’, whereupon a particle that is being propagated along a given ‘pure-advection’ streamline (associated with deterministic return characteristics) is displaced onto a different streamline by the random walk. This happens multiple times during a single particle trajectory. 

[34] This smoothing effect also extends to the probability density functions (PDF) constructed to illustrate regions from which recharge is drawn. For particle tracking with no dispersion (Figure 5f), the PDF is spikey and exhibits regions from which large volumes of recharge are drawn immediately adjacent to regions of zero recharge. Introducing dispersion smooths the PDF and any local features it contains, with some being eliminated entirely (for example, a small feature labeled a in Figure 5e is absent in Figure 5d). It also increases the total area from which waters are drawn, i.e., the system’s catchment. For example, at full dispersion the catchment for system 1 is 176 km<sup>2</sup> , compared with 101 km<sup>2</sup> 

if dispersion is reduced by a factor of 10 and 35 km<sup>2</sup> if dispersion is not accounted for. 

## 5. Rift-Scale Particle Tracking 

[35] Recharge characteristics for the set of ten modeled geothermal systems are shown in Figure 6 and are colorcoded for each specific system. Relative frequency histograms for the ten systems have similar shapes but peak at different average residence times and distances. For instance, return distances for the largest system, 9, are higher than the others, indicating that this system draws recharge over a greater area. Similarly, the peak in residence time for system 2 is lower than any of the other systems, which is consistent with this system having the lowest residence time (12.1 kyr). 

[36] Spatially, each geothermal system draws recharge from a region 10–15 km distant from its upflow-zone and, like system 1 (Figure 3d), these regions are not evenly distributed around the hydrothermal plume. For example, system 5 draws recharge from two separate zones, a larger one above and a smaller one below the system boundary; catchments for systems 2 and 3 occur almost exclusively to the left of the system; recharge of system 4 is limited to a 90<sup>�</sup> wedge to the bottom left of the system; and catchments for 

10 of 19 

DEMPSEY ET AL.: GEOTHERMAL CATCHMENT DELINEATION 

B10201 

B10201 

Figure 7. (a) Superimposed probability density functions for particle source location for each of the ten systems in the modeled rift. The 0.1 and 2 Wm<sup>�2</sup> vertical heat flux contours are marked by thin and thick white lines, respectively. (b) Mean residence time at particle source and exit (see Figure 3e) for the modeled geothermal systems. The 0.1 Wm<sup>�2</sup> vertical heat flux contours is marked by a black line. 

systems 8 and 10 appear to have been ‘pushed’ away (upward and downward, respectively) by the large catchment for system 9. Indeed, the catchment for system 9 is so extensive, water is drawn from the other side of the rift, between the catchments for systems 2 and 3. Recharge zones are also largely mutually exclusive, with only a small degree of overlap observed between the catchments for systems 5 and 7, and 6 and 7. The conspicuous gap near the center of the lower boundary in Figure 6d is partially filled by the catchment of a small upflow-zone that, due to its low output, was not included in the study. 

### 5.1. Residence Times 

[37] Particle source location and residence time data for the ten modeled systems are collated and presented in Figure 7. These systems show similar heterogeneity in terms of recharge location to that noted for system 1 (Figure 3d); again, this is attributed to both the abutment of catchments for neighboring systems and the heterogeneity prescribed to the crustal permeability structure. Higher values of the PDF in Figure 7a represent the more significant regions supplying mass recharge to the geothermal systems; these are the first regions included in the construction of threshold recharge catchments (see section 4.1 and Figure 4). 

[38] The distribution of residence time, contoured at water source and exit location, also suggests considerable heterogeneity in the age of recharging waters. The majority of waters are between 5 and 30 kyr old; however, localized 

infiltration zones are observed where water takes much longer (> 50 kyr) to reach the system. As a general rule, younger waters are sourced close to the system, with those less than 5 kyr old derived almost exclusively from within 1 to 2 km of the upflow-zone. 

[39] Geothermal waters discharging from a system are generally less than 20 kyr in age; this is consistent with residence time estimates derived by Giggenbach et al. [1994] from isotopic analysis of fluids at Waiotapu geothermal system. It is, however, higher than the upper limit placed by Stewart [1978] of 12 kyr for deep geothermal waters at Wairakei. Water age is not constant with position within a given system; for example, system 1 shows that waters increase in age with proximity to the right hand boundary, while waters within system 9 get older near the bottom of the system. Indeed, the spatial variation in water age at system 9 bears some resemblance to that determined by Giggenbach et al. [1994] at Waiotapu, specifically, 2 kyr in the north of the field, 18 kyr in the middle sections, and 11–280 kyr in the south. This in-system range in age suggests a similar range in the out-of-system source location and may also have implications for the variability in geochemical composition within an upflow-zone. It is evidently misleading to treat geothermal waters from a given system as a single, mixed product. 

### 5.2. Catchment Area 

[40] For the ten systems modeled here, a positive correlation is observed between catchment size, and the geothermal 

11 of 19 

DEMPSEY ET AL.: GEOTHERMAL CATCHMENT DELINEATION 

B10201 

B10201 

Figure 8. (a) Modeled field heat output and (b) field area versus catchment size. Circles indicate data in the specific rift simulation presented here; crosses are for geothermal systems from four other large-scale models with different permeability and basal temperature realizations. Dashed lines indicate lines of best fit and have gradients of 1.38 MW km<sup>�2</sup> (Figure 8a) and 0.15 (Figure 8b), respectively. Grey dotted lines show linear relationships derived by Weir [2009] using model parameters (see equation (3)). 

system area and heat output (Figure 8). Assuming that the heat content of a geothermal system is dominated by the “heat-sweep” component (as opposed to magmatic fluid sources), larger catchments enable greater volumes of water to gather heat from wider areas of the mid-crust. The dimensions of the upflow-zone must also increase if a greater throughput of fluid is to be accommodated for fixed permeability conditions. 

[41] Weir [2009], in consideration of simplified onedimensional geothermal systems, derived linear relationships between their size, output and catchment area: 

where Q is system output, rd and ru are fluid density in the downflow and upflow-zones, respectively, hu is fluid enthalpy in the upflow-zone, vd and vu are fluid velocities in the downflow and upflow-zones, respectively, A is the crosssectional area of the plume, and C is catchment size. Choosing representative values from the model of rd = 1000 kgm<sup>�3</sup> , ru = 850–900 kgm<sup>�3</sup> , hu ¼ 0:5–1 � 10<sup>6</sup> Jkg<sup>�1</sup> , vd = 1 � 10<sup>�9</sup> ms<sup>�1</sup> , and vu = 5 � 10<sup>�9</sup> ms<sup>�1</sup> , we can write the relationships in (3) as Q = c1C and A = c2C, where c1 ¼ 0:5–1MWkm<sup>�2</sup> and c2 = 0.22–0.24. These linear relationships are juxtaposed on the catchment data in Figure 8 and show that the 1-D analytical representation and the 3-D numerical model are in order-of-magnitude agreement. 

## 6. Voronoi Delineation of Catchments 

[42] Visual inspection of the catchment zones in Figure 6d suggests that, to first order: (i) the catchment for a given system occupies the area immediately adjacent to the hydrothermal plume; and (ii) larger catchments tend to displace smaller catchments. Such a distribution of distinct regions is indicative of Voronoi tessellation; a geometric construction that divides an area into discrete compartments 

based on proximity to a number of nodes. Here, the area to be divided is the surface of the computational domain and the nodes are the geothermal systems. Voronoi diagrams find application in a wide variety of mathematical (e.g., Delaunay triangulation, file searching [Aurenhammer, 1991]), physical (e.g., crystal growth [Kobayashi and Sugihara, 2002; Dempsey et al., 2010]; soap bubbles [Williams, 1968]) and biological systems (e.g., spider’s webs [Aurenhammer, 1991]; cellular structure [Marcelpoil and Usson, 1992]). Voronoi diagrams are constructed by a crystal growth method, in which each of the nodes represents a small crystal; the set of nodal crystals simultaneously grow outward until either the domain is filled or they are surrounded on all sides by other crystals. The partitioning of the domain that results is the Voronoi diagram. 

[43] As an alternative method for delineating catchment zones, a Voronoi diagram is constructed using the outlines of the modeled systems as the nodes; the distribution of catchments thus generated is compared to those produced by the particle tracking method (Figure 6d). As noted previously, larger catchments appear to displace smaller ones; this suggests a specific subset of Voronoi diagrams, termed the Apollonious model [Aurenhammer, 1991], may be of use. These diagrams are generated by considering non-equal growth rates for each of the seed crystals; here, larger geothermal systems are weighted with faster growth rates. The Voronoi diagram is generated iteratively by attaching new pixels to an existing region that represents the partially grown system catchment. The number of pixels added at each iteration depends on the heat output of the geothermal system (the growth rate modifier), thus ensuring that the catchments of larger systems grow faster than smaller ones. A pixel is available for incorporation into a catchment providing it is: (i) not already included in some other system’s catchment; and (ii) outside the 0.1 Wm<sup>�2</sup> vertical heat flux contour, which appears to be a constraint on the catchments in Figure 6d. This method is a two-dimensional implementation of the Voronoi dynamics method used by Kawano and Ohashi [2006] and Dempsey et al. [2010] to describe the 

12 of 19 

DEMPSEY ET AL.: GEOTHERMAL CATCHMENT DELINEATION 

B10201 

B10201 

Figure 9. System catchments constructed from Voronoi tessellation halted after (a) an arbitrary growth period, and (b) after each catchment has grown to an area related to the size of its heat output (see section 5.2 and Figure 8a). 

growth of an ensemble of sea ice crystals in two and three dimensions. 

[44] Figure 9 shows two catchment distributions delineated by the Voronoi method: in the first (Figure 9a), iterative growth is stopped when the catchments qualitatively resemble those given in Figure 6d; in the second (Figure 9b), growth of each catchment stops when its area is equal to that given in Table 1. Comparison between the unconstrained catchments (Figure 9a) and those delineated by particle tracking indicate that the Voronoi method is only first-order accurate; it does not account for specific permeability structure and dispersive effects that produce the heterogeneity in Figure 9d. Nevertheless, several features of the Voronoi catchments bear a striking resemblance to their particle tracking counterparts, including: an asymmetric bias for recharge from the left hand sides of systems 1, 2 and 3; dominant catchments for systems 5 and 9 that appear to displace their neighbors; an isolated sub-catchment of system 9 on the other side of systems 2 and 3; and a narrow catchment corridor for system 8 appearing between the catchments for systems 7 and 9. 

[45] Area-constrained Voronoi catchments, while slightly smaller than their unconstrained counterparts, also represent a reasonable, first-order approximation to those in Figure 6d. In particular, the system 9 catchment is improved in that it no longer abuts those of systems 1 and 10 below it; however, the small sub-catchment to the left of systems 2 and 3 is lost, and its shared boundary with the system 8 catchment is much less extensive. The size and shape of the other catchments are mostly preserved. The addition of area constraints 

on catchment size removes the heuristic element of catchment delineation used to construct those in Figure 9a. 

### 6.1. TVZ Catchments 

[46] Unlike the flow path ensemble method, generation of Voronoi catchments does not require specific knowledge of the 3-D crustal velocity field; catchments are instead constructed from geothermal system positions and heat outputs. The method can therefore be applied to the TVZ and other hydrothermal zones providing both these quantities are sufficiently constrained. Heat outputs for TVZ geothermal systems have been collated by Bibby et al. [1995], although a large standard error of �50% is associated with most of the calculated values. Nevertheless, these heat outputs serve as a starting point for constructing Voronoi catchments following the outlined method. The heat outputs are also used, in conjunction with the catchment area - heat output relationship established in Figure 8a, to calculate constrained catchment areas (see Figure 9b). For this purpose, TVZ heat outputs have been scaled such that the total TVZ heat transfer is equal to the total model heat transfer; this preserves the relative size of the geothermal systems to one another, while preventing the construction of unrealistically large catchments. The outputs of Atiamuri and Reporoa have been artificially increased to a minimum of 50 MW to avoid the production of negligibly small catchments for these systems. As a final caveat, it is noted that this analysis does not account for the effects of topography on subsurface flow and rainfall distribution, which may play an important role in mass recharge of geothermal systems. 

13 of 19 

DEMPSEY ET AL.: GEOTHERMAL CATCHMENT DELINEATION 

B10201 

B10201 

Figure 10. (a) Proposed catchment zones for TVZ geothermal systems based on Voronoi tessellation and using scaled field heat outputs from Bibby et al. [1995] and catchment areas based on Figure 8a. The Horohoro geothermal prospect is labeled HH and catchment boundaries associated with 100 and 400 MW resources are delineated. (b) System catchments using a homogeneous field output of 200 MW. 

[47] Figure 10a shows Voronoi catchments generated for the scaled geothermal system outputs given by Bibby et al. [1995] (see Figure 2). The majority of systems have catchments that abut those of neighboring systems, with only the northern Rotorua system isolated from the rest (although this may abut the Rotoiti catchment to its northeast, which has not been modeled). Many of the systems have asymmetric catchments, e.g., Orakeikorako draws the majority of its water from the west, Te Kopia from the north, Tauhara and Rotokawa from the south, etc. Recharge zones for Rotorua, Mokai and Ohaaki have approximately circular shapes and are largely unaffected by neighboring systems. In contrast, there is considerable distortion of catchments for the Waiotapu-Waimangu-Reporoa, Orakeikorako-Te KopiaNgatamariki and Wairakei-Tauhara neighboring sets. 

[48] Figure 10b shows similar Voronoi catchments constructed under the assumption that all systems have equal heat output. Both the modeling results reported here (Table 1), as well as analytic heat and mass transfer arguments [Weir, 2009] suggest geothermal systems should manifest less variability than that reported in Bibby et al. [1995]. Under these circumstances, Figure 10b represents an end-member catchment distribution, with the true distribution probably lying somewhere between Figures 10a and 10b. 

[49] The positions of TVZ catchments shown in Figure 10 is consistent with stable isotope data collated for several TVZ geothermal systems (Table 2). Figure 11a plots dD and 

d<sup>18</sup> O isotope data for nine systems ranging from Tauhara in the south to Kawerau in the north. The isotopic compositions of geothermal reservoir waters are shown connected to compositions of local groundwaters expected to recharge these systems, which all fall on or near the meteoric water line. Geothermal reservoir waters consistently demonstrate 18O enrichment (i.e., they are displaced to the right of the meteoric water line), which reflects isotopic exchange due to water-rock interaction as fluids percolate through the rock mass [e.g., Craig, 1963]. In contrast, deuterium concentration is unaffected by water-rock interaction as rocks contain scant hydrogen; vertical offsets for the Broadlands-Ohaaki and Waimangu fields could reflect a magmatic contribution to reservoir fluids of up to 20% [Giggenbach, 1992]. 

[50] In the TVZ, meteoric water increases from �30 to �50‰ dD from north to south, primarily due to fractionation effects as a function of latitude [Stewart and Taylor, 1981]. While d<sup>18</sup> O also demonstrates a latitudinal gradient, the relative insensitivity of dD to water-rock interaction makes this signal the preferred choice for inferring the composition of meteoric recharge from reservoir fluids. For example, the data in Figure 11a indicate that, broadly speaking, northern systems (e.g., Kawerau) are more enriched in deuterium than central systems (e.g., Rotorua, Waiotapu), with the lowest values in the southern-most systems (e.g., Orakeikorako, Tauhara, Wairakei, Mokai). These data strongly suggest that meteoric recharge is sourced locally. 

14 of 19 

DEMPSEY ET AL.: GEOTHERMAL CATCHMENT DELINEATION 

B10201 

B10201 

Table 2. Stable Isotope Data for Reservoir Waters From Selected TVZ Geothermal Systems and Local Groundwater 

||Geothermal|Systems|Local Gr|oundwater||
|---|---|---|---|---|---|
|System|dDMW<br>(‰)|d<sup>18</sup>OMW<br>(‰)|dDres<br>(‰)|d<sup>18</sup>Ores<br>(‰)|Source|
|Kawerau|�32|�5.7|�32|�3.2|Stewart [1986]|
|Rotorua|�39|�6.5|�37.5|�3.5|Stewart et al. [1992]|
|Waimangu|�40.1|�6.85|�37.5|�4.75|Simmons et al.[1994]|
|Waiotapu|�40.5|�6.6|�40|�2.5|Hedenquist [1991] andGiggenbach et al. [1994]|
|Orakeikorako|�43.5|�7.04|�44|�5.6|Sheppard and Lyon [1984]|
|Mokai|�44.3|�7.03|�45|�6.5|Hedenquist et al.[1990]|
|Broadlands-Ohaaki|�45|�7.1|�40|�4.5|Hedenquist [1990]|
|Wairakei|�45|�7|�44.5|�6|Giggenbach and Stewart [1982]|
|Tauhara|�46|�7.4|�45|�5|Henley and Stewart [1983]|
|NZ meteoric water|[�49.4,�25.4]|[�7.8,�4.8]|||Stewart and Taylor [1981]|

[51] The altitude at which precipitation falls can also affect its isotopic composition, with altitudinal gradients for dD of 1.7‰ per 100 m elevation [Stewart, 1987]. However, within any given catchment, mixing of waters from a variety of elevations should reduce the influence of local extrema on the recharge composition. Furthermore, the large-scale decrease in mean elevation from 400 masl at Taupo to 100 masl at Kawerau might contribute an offset to dD of up to 6 ‰; while appreciable in comparison to the spread of data in Figure 11a, this trend is in the opposite direction to the data, i.e., if this effect were accounted for, the latitudinal gradient in Figure 11a would be greater. Long-term, climatic fluctuations due to changes in global temperature may also effect the isotopic composition of local meteoric water; 

however, this effect should apply an approximately constant offset to the data in Figure 11a, and would thus preserve the latitudinal relationship. 

[52] Figure 11b plots the northern position (northing) of the centroid of each system’s catchment versus the position of that system. This representation serves two purposes. First, to show that systems further to the north also draw their recharge from an area further to the north; this is essentially the trend shown by the deuterium data in Figure 11a with the caveat that a higher dD ratio represents recharge from a more northern area. Second, the data illustrate the degree of symmetry of the catchment about an eastwest axis. Systems with a bias for water recharge from the north plot above the dashed 1:1 line, while those with 

Figure 11. (a) Stable isotope composition of local groundwater (closed circles) and geothermal reservoir waters (open circles) corrected for steam loss and mixing (see Table 2). Solid tie lines connect reservoir water compositions to their likely source of recharge. The meteoric water line is also shown. (b) Mean northern position (measured relative to the southern-most extent of the domain in Figure 10) of TVZ catchments versus that of the geothermal system. Systems with symmetric catchments plot on the 1:1 dashed line (e.g., MO, RO) while those biased to the north and south plot above and below, respectively. At = Atiamuri, BO = Broadlands-Ohaaki, KW = Kawerau, MO = Mokai, NG = Ngatamariki, OK = Orakeikorako, RE = Reporoa, RK = Rotokawa, RO = Rotorua, TH = Tauhara, TK = Te Kopia, WK = Wairakei, WM = Waimangu, WT = Waiotapu. 

15 of 19 

DEMPSEY ET AL.: GEOTHERMAL CATCHMENT DELINEATION 

B10201 

B10201 

Figure 12. Proposed catchment zones for high temperature geothermal systems in Iceland constructed from Voronoi tessellation. Inset shows close up of catchments in the Reykjanes Peninsula. RY = Reykjanes (45), EL = Eldvörp, SV = Svartsengi (150), SN = Sandfell, KR = Krýsuvík (445), TR = Trölladyngja, HG = Hengill (710), BR = Brennisteinsfjöll (25), GY = Geysir (25), KL = Kerlingarfjöll (195), HV = Hveravellir (70), TF = Torfajkull (1265), HN = Hágöngur (215), VN = Vonarskarð (145), KV = Kverkfjöll (155), AS = Askja (135), HR = Hrúthálsar (20), FR = Fremrinámar (50), NM = Námafjall (155), KF = Krafla (155), GJ = Gjástykki (55), ÞS = Þeistareykir (240). Field heat outputs in MW [from Ketilsson et al., 2009] are given in brackets. For unknown, unlabeled systems, a nominal output of 100 MW has been used. 

catchments primarily to the south plot below. The symmetric catchments of Mokai, Rotorua and Atiamuri plot on the line. 

[53] The absence of a geothermal system and associated catchment from an empty region bounded by the Rotorua, Waiotapu, Te Kopia and Atiamuri catchments, is an intriguing feature of Figure 10. In practice, this region is approximately centered on the Horohoro geothermal prospect: a small thermal area and region of anomalously high conductivity into which a single cold well was drilled in 1986 [Bibby et al., 2005]. Heat output from the thermal area is an estimated 4 MW [Allis, 1987] and is thus too small to account for the catchment absence in the region. It has been suggested that Horohoro, along with other thermal areas in the west of the TVZ, may represent the remnants of more substantial systems that are now in decline [Bibby et al., 1995]. This is consistent with the bimodality in acrossstrike geothermal heat ouput noted by Bibby et al. [1995] (see also Figure 2d), and embodied in the two-temperature hotplate boundary condition of our model (Figure 1b). 

[54] Figure 6d does not exhibit a gap of equivalent dimension to that noted in Figure 10; the entire rift section of the modeled crust plays host to either the recharge or upflow component of the large-scale hydrothermal circulation. However, an opening of a similar size could be created if the catchment of, for example, system 3 were omitted. Extending this reasoning to the gap noted in Figure 10 suggests that this section of the crust does not participate in the hydrothermal circulation, perhaps due to relative impermeability of the rocks here. Alternatively, the potential geothermal resource at Horohoro may have been underestimated; the 

opening is large enough to accommodate a recharge zone for a geothermal system up to 400 MW in size without significant disturbance of neighboring catchments. 

### 6.2. Iceland Catchments 

[55] At least twenty high temperature geothermal systems are found in Iceland, distributed throughout its central active volcanic belt [Arnórsson, 1995]. Like the TVZ, geothermal convection is ultimately driven by rifting and the intrusion of magma into the crust [e.g., Flóvenz and Sæmundsson, 1993], and the hydrothermal convection extends to about 6–7 km depth based on a seismically delineated BDT in the Reykjanes Peninsula [Fridleifsson and Elders, 2005]. Heat outputs of individual systems range from several tens of megawatts up to 710 and 1265 MW for the Hengill and Torfajökull systems, respectively [Ketilsson et al., 2009]. 

[56] The procedure for constructing Voronoi catchments for Iceland geothermal systems is the same as that followed in constructing TVZ catchments. Ketilsson et al. [2009] list heat outputs for many of the systems; where unknown, a nominal value of 100 MW is assigned. A catchment area for each system is constructed using the heat output - catchment area relation in Figure 8a. Hydrothermal plume boundaries are poorly constrained as there are no resistivity data comparable to the TVZ geothermal systems. Accordingly, each system was assigned a circular area of 25 km<sup>2</sup> serving as the seed of its catchment. Catchments are then grown iteratively following the method outlined in the previous section (Figure 12). 

16 of 19 

DEMPSEY ET AL.: GEOTHERMAL CATCHMENT DELINEATION 

B10201 

B10201 

[57] In contrast to TVZ catchments (Figure 10), the majority of geothermal systems in Iceland are spaced sufficiently far away from one another that no abutment of their catchments is observed. For these systems, catchments are circular. Geothermal systems in the Reykjanes Peninsula are spaced closer together. Here, catchment shapes are influenced by closely spaced systems, particularly the Reykjanes-EldvörpSvartsengi and Sandfell-Krýsuvík-Trölladyngja triplets. For example, Trölladyngja is predicted to draw the majority of its recharge from the north, Sandfell from the west, and Krýsuvík from the south and east. 

[58] Catchments of several Icelandic systems on the Reykjanes Peninsula extend into the ocean, which is consistent with the contribution of seawater to geothermal fluids at Reykjanes, Svartsengi and Krýsuvík [Arnórsson, 1995]. For these systems, the chloride concentration of geothermal reservoir waters assumes the same role as deuterium concentration in TVZ systems, i.e., an indicator of the source from which mass recharge is drawn. In contrast to deuterium, which gives an indication of source latitude - higher values are found for systems further to the north - chloride in the Reykjanes Peninsula is predominantly derived from seawater intrusion. Increased chloride concentration in the geothermal waters then indicates that mass recharge is drawn from regions nearer the ocean. Chloride concentration data compiled by Arnórsson and Gunnlaugsson [1985] and Arnórsson [1995] are consistent with catchment locations shown in Figure 12. For example, the highest concentrations are attained for Svarksengi (13,507 ppm) and Reykjanes (19,648 ppm), whose catchments overlap the ocean. Mid-level chloride concentrations occur at the Trölladyngja system (1000 ppm), which is also situated on the Reykjanes Peninsula but whose modeled catchment does not extend into the ocean. Further inland, chloride concentrations are very much lower (50–100 ppm), reflecting the absence of a marine contribution to mass recharge. Thus, the catchment/ chloride relationship for Icelandic systems bears some similarities to the catchment/stable isotope relationship explored for TVZ systems in section 6.1, i.e., aspects of the local groundwater composition are imprinted on the hydrothermal plume. 

## 7. Conclusion 

[59] A 3-dimensional numerical model of rift-scale hydrothermal circulation approximating geothermal activity in a “TVZ-like” setting has been presented. Circulation is modeled to a depth of 8 km, with convection driven by a twotemperature hot plate boundary condition imposed at the lower boundary. Permeability distributions are assigned to two subdomains, surface volcanic and basement greywacke, and spatially correlated heterogeneity is superimposed upon their average properties. Regional heat flow is dominated by ten separate geothermal systems that evolve over a period of 500 kyr; this circulation period represents a statistical analogue of the TVZ. 

[60] Advective particle backtracking with a random walk component that accounts for the effects of dispersion and diffusion has been used to investigate sources of mass recharge for the modeled geothermal systems. For each system, several 10’s of thousands of flow paths were constructed, enabling a statistical representation of residence 

time, return distance and their spatial variation both within and outside a given system. Flow path ensembles for the ten modeled systems indicate that recharge is drawn from a region up to 10 km distant from the hydrothermal plume boundary, with the average time water spends in transit through the crust ranging from 12–30 kyr. The age of waters exiting within a system also varies significantly with position; this reflects both the wide geographical range from which waters are drawn as well as the wide range of path lengths taken through the crust. As the final geochemical composition of these waters reflects both their surface origin as well as water-rock interactions along their flow paths, a range of ages for waters within a given upflow-zone implies a similar non-uniformity in their chemistry. 

[61] Mass recharge for each system is drawn from minimally overlapping catchment zones that range in size from 70 to 500 km<sup>2</sup> and are asymmetrically distributed about a given system’s boundary. The size of the catchment zone is linearly related to both the area and heat output of a hydrothermal plume, consistent with 1-D analytical results given in Weir [2009]. We have shown that Voronoi polygons seeded at the locations of the modeled geothermal systems, with growth rates and areas proportional to heat output, provide a reasonable approximation to the distribution of catchment zones derived from particle tracking. As a description of the sub-surface flow field is not required, Voronoi catchments are simpler to construct than their flow path counterparts; the technique has been used to establish approximate catchments for TVZ and Iceland geothermal systems. 

[62] For the TVZ, catchments are closely spaced and distributed asymmetrically about their parent systems. An empty region, apparently devoid of geothermal activity or mass recharge, is observed between Rotorua and Te Kopia geothermal systems; low crustal permeability may impede hydrothermal circulation here - both upflow and recharge. Alternatively, an underestimated Horohoro prospect may account for the discrepancy. Catchments for the Iceland geothermal systems are spaced much further apart than in the TVZ, and show little interaction except for those on the Reyjkanes Peninsula. Catchment extension into the ocean for several of these systems is consistent with the appearance of seawater in these geothermal systems [Arnórsson, 1995]. 

[63] In the future, we expect further insight into the nature and distribution of geothermal catchment zones to be obtained by constraining the influence of surface topography. This affects both the direction and magnitude of lateral groundwater flows, as well as the regional distribution of rainfall - such water serves as the ultimate source of mass recharge for TVZ geothermal systems and is an important contributor, along with seawater, for Icelandic systems of the Reykjanes Peninsula. 

[64] Acknowledgments. This research was funded by the Tertiary Education Commission through the TADS scheme and by the Energy Education Trust of New Zealand. The authors wish to thank George Zyvoloski for assistance with FEHM, Benedikt Steinsgrímsson and Jónas Ketilsson for collating Iceland geothermal heat outputs, and Graham Weir and an anonymous reviewer whose comments improved the quality of this paper. 

## References 

Allis, R. G. (1987), Geophysical and geochemical investigations of the Horohoro geothermal prospect, Rep. 213, Geophys. Div., Dep. of Sci. and Indust. Res., Lower Hutt, N. Z. 

17 of 19 

DEMPSEY ET AL.: GEOTHERMAL CATCHMENT DELINEATION 

B10201 

B10201 

- Arnórsson, S. (1995), Geothermal systems in Iceland: Structure and conceptual models—I. High-temperature areas, Geothermics, 24, 561–602. 

- Arnórsson, S., and E. Gunnlaugsson (1985), New gas geothermometers for geothermal exploration: Calibration and application, Geochim. Cosmochim. Acta, 49, 1307–1325. 

- Aurenhammer, F. (1991), Voronoi diagrams: A survey of a fundamental geometric data structure, ACM Comput. Surv., 23, 345–405. 

- Bertrand, E. A., et al. (2012), Magnetotelluric imaging of upper-crustal convection plumes beneath the Taupo Volcanic Zone, New Zealand, Geophys. Res. Lett., 39, L02304, doi:10.1029/2011GL050177. 

- Bibby, H. M., T. G. Caldwell, F. J. Davey, and T. H. Webb (1995), Geophysical evidence on the structure of the Taupo Volcanic Zone and its hydrothermal circulation, J. Volcanol. Geotherm. Res., 68, 29–58. 

- Bibby, H. M., G. F. Risk, T. G. Caldwell, and S. L. Bennie (2005), Misinterpretation of electrical resistivity data in geothermal prospecting: A case study from the Taupo Volcanic Zone, paper presented at World Geothermal Congress, Int. Geotherm. Assoc., Antalya, Turkey. 

- Bryan, C. J., S. Sherburn, H. M. Bibby, S. C. Bannister, and A. W. Hurst (1999), Shallow seismicity of the central Taupo Volcanic Zone, New Zealand: Its distribution and nature, N. Z. J. Geol. Geophys., 42, 533–542. 

- Craig, H. (1963), The isotopic geochemistry of water and carbon in geothermal areas, in Nuclear Geology of Geothermal Areas, edited by E. Tongiorgi, pp. 17–53, Cons. Naz. della Ric., Spoleto, Pisa, Italy. 

- Dempsey, D. E., P. J. Langhorne, N. J. Robinson, M. J. M. Williams, T. G. Haskell, and R. D. Frew (2010), Observation and modeling of platelet ice fabric in McMurdo Sound, Antarctica, J. Geophys. Res., 115, C01007, doi:10.1029/2008JC005264. 

- Dempsey, D. E., J. V. Rowland, G. A. Zyvoloski, and R. A. Archer (2012), Modeling the effects of silica deposition and fault rupture on natural geothermal systems, J. Geophys. Res., 117, B05207, doi:10.1029/ 2012JB009218. 

- Ellis, A. J., and S. H. Wilson (1955), The heat from the Wairakei-Taupo thermal region calculated from the chloride output, N. Z. J. Sci. Technol., 36, 622–631. 

- Feyen, L., A. M. Dessalegn, F. de Smedt, S. Gebremeskel, and O. Batelaan (2004), Application of a Bayesian approach to stochastic delineation of capture sones, Ground Water, 42, 542–551. 

- Flóvenz, Ó. G., and K. Sæmundsson (1993), Heat flow and geothermal processes in Iceland, Tectonophysics, 225, 123–138. 

- Fridleifsson, G. O., and W. A. Elders (2005), The Iceland Deep Drilling Project: A search for deep unconventional geothermal resources, Geothermics, 34, 269–285. 

- Frind, E. O., D. S. Muhammad, and J. W. Molson (2002), Delineation of three-dimensional well capture zones for complex multi-aquifer systems, Ground Water, 40, 586–598. 

- Frind, E. O., J. W. Molson, and D. L. Rudolph (2006), Well vulnerability: A quantitative approach for source water protection, Ground Water, 44, 732–742. 

- Gelhar, L. W., C. Welty, and K. R. Rehfeldt (1992), A critical review of data on field-scale dispersion in aquifers, Water Resour. Res., 28, 1955–1974. 

- Giggenbach, W. F. (1992), Isotopic shifts in waters from geothermal and volcanic systems along convergent plate boundaries and their origin, Earth Planet. Sci. Lett., 113, 495–510. 

- Giggenbach, W. F. (1995), Variations in the chemical and isotopic composition of fluids discharged from the Taupo Volcanic Zone, New Zealand, J. Volcanol. Geotherm. Res., 68, 89–116. 

- Giggenbach, W. F., and M. K. Stewart (1982), Processes controlling the isotopic composition of steam and water discharges from steam vents and steam-heated pools in geothermal areas, Geothermics, 11, 71–80. 

- Giggenbach, W. F., D. S. Sheppard, B. W. Robinson, M. K. Stewart, and G. L. Lyon (1994), Geochemical structure and position of the Waiotapu geothermal field, New Zealand, Geothermics, 23, 599–644. 

- Goode, D. J. (1996), Direct simulation of groundwater age, Water Resour. Res., 32, 289–296. 

- Hassanzadeh, H., M. Pooladi-Darvish, and D. W. Keith (2009), The effect of natural flow of aquifers and associated dispersion on the onset of buoyancy-driven convection in a saturated porous medium, AIChE J., 55, 475–485. 

- Hedenquist, J. W. (1990), The thermal and geochemical structure of the Broadlands-Ohaaki geothermal system, New Zealand, Geothermics, 19, 151–185. 

- Hedenquist, J. W. (1991), Boiling and dilution in the Waiotapu geothermal system, Geochim. Cosmochim. Acta, 55, 2753–2765. 

- Hedenquist, J. W., F. Goff, F. M. Phillips, D. Elmore, and M. K. Stewart (1990), Groundwater dilution and residence times, and constraints on chloride source, in the Mokai Geothermal System, New Zealand, from 

chemical, stable isotope, tritium, and<sup>36</sup> Cl data, J. Geophys. Res., 95, 19,365–19,375, doi:10.1029/JB095iB12p19365. 

Henley, R. W., and M. K. Stewart (1983), Chemical and isotopic changes in the hydrology of the Tauhara geothermal field due to exploitation at Wairakei, J. Volcanol. Geotherm. Res., 14, 285–314. 

Hochstein, M. P. (1995), Crustal heat transfer in the Taupo Volcanic Zone (New Zealand): Comparison with other volcanic arcs and explanatory heat source models, J. Volcanol. Geotherm. Res., 68, 117–151. 

Kawano, Y., and T. Ohashi (2006), Numerical simulation of development of sea ice microstructure under temperature gradient, paper presented at 2006 Ice Symposium, Int. Assoc. for Hydro-Environ. Eng. and Res., Sapporo, Japan. 

Ketilsson, J., H. Björnsson, S. Halldórsdóttir, and G. Axelsson (2009), Production capacity of high temperature geothermal systems in Iceland, Tech. Rep., OS-2009/09, Orkustofnun, Reykjavík, Iceland. 

Kissling, W. M., and G. J. Weir (2005), The spatial distribution of the geothermal fields in the Taupo Volcanic Zone, New Zealand, J. Volcanol. Geotherm. Res., 145, 136–150. 

Kitanidis, P. K. (1994), Particle-tracking equations for the solution of the advection-dispersion equation with variable coefficients, Water Resour. Res., 30, 3225–3227. 

Kobayashi, K., and K. Sugihara (2002), Crystal Voronoi diagram and its applications, Future Gen. Comput. Syst., 18, 681–692. 

Kunstmann, H., and W. Kinzelbach (2000), Computation of stochastic wellhead protection zones by combining first-order second-moment method and Kolmogorov backward equation analysis, J. Hydrol., 237, 127–146. Leary, P. C., and F. Al-Kindy (2002), Power-law scaling of spatially correlated porosity and log(permeability) sequences from north-central North Sea Brae oilfield well core, Geophys. J. Int., 148, 426–442. 

Mannington, W., M. O’Sullivan, and D. Bullivant (2004), Computer modelling of the Wairakei-Tauhara geothermal system, New Zealand, Geothermics, 33, 401–419, doi:10.1016/j.geothermics.2003.09.009. 

Marcelpoil, R., and Y. Usson (1992), Methods for the study of cellular sociology: Voronoi diagrams and parameterization of the spatial relationships, J. Theor. Biol., 154, 359–369. 

McLellan, J. G., N. H. S. Oliver, B. E. Hobbs, and J. V. Rowland (2010), Modelling fluid convection stability in continental faulted rifts with applications to the Taupo Volcanic Zone, New Zealand, J. Volcanol. Geotherm. Res., 190, 109–122. 

McNabb, A. (1975), Geothermal physics, Appl. Math. Tech. Rep., 32, Dep. of Sci. and Indust. Res., Lower Hutt, N. Z. 

Moreno, L., Y. W. Tsang, C. F. Tsang, F. V. Hale, and I. Neretnieks (1988), 

Flow and tracer transport in a single fracture: A stochastic model and its relation to some field observations, J. Geophys. Res., 24, 2033–2048. 

Neupauer, R. M., and J. L. Wilson (2003a), Backward location and travel time probabilities for a decaying contaminant in an aquifer, J. Contam. Hydrol., 66, 39–58. 

Neupauer, R. M., and J. L. Wilson (2003b), Numerical implementation of a backward probabilistic model of ground water contamination, Ground Water, 42, 175–189. 

Nield, D. A., and A. Bejan (2006), Convection in Porous Media, Springer, New York. 

Rock, G., and H. Kupfersberger (2002), Numerical delineation of transient capture zones, J. Hydrol., 269, 134–149. 

Rowland, J. V., C. J. N. Wilson, and D. M. Gravley (2010), Spatial and temporal variations in magma-assisted rifting, Taupo Volcanic Zone, New Zealand, J. Volcanol. Geotherm. Res., 190, 89–108, doi:10.1016/ j.jvolgeores.2009.05.004. Schulze-Makuch, D. (2005), Longitudinal dispersivity data and implications for scaling behavior, Ground Water, 43, 443–456. Sheppard, D. S., and G. L. Lyon (1984), Geothermal fluid chemistry of the Orakeikorako geothermal field, New Zealand, J. Volcanol. Geotherm. Res., 22, 329–349. 

Simmons, S. F., M. K. Stewart, B. W. Robinson, and R. B. Glover (1994), The chemical and isotopic compositions of thermal waters at Waimangu, New Zealand, Geothermics, 23, 539–554. 

Stauffer, P. H., L. H. Auer, and N. D. Rosenberg (1997), Compressible gas in porous media: A finite amplitude analysis of natural convection, Int. J. Heat Mass Transfer, 40, 1585–1589. 

Stewart, M. K. (1978), Stable isotopes in waters from the Wairakei geothermal area, New Zealand, Dep. Sci. Indus. Res. Bull., 220, 113–120. 

Stewart, M. K. (1986), The isotopic composition of geothermal fluids at 

Kawerau and their relationship to the hydrology of the area, in The Kawerau Geothermal Field, edited by M. A. Mongillo, pp. 179–184, Dep. of Sci. and Indust. Res., Lower Hutt, N. Z. 

Stewart, M. K. (1987), Distribution of D and<sup>1</sup> 8O in New Zealand rainfall and the isotopic identification of groundwater recharge sources, in Proceedings of Groundwater Chemistry Workshop, Auck. Reg. Water Board Publ., 41, 123–138. 

18 of 19 

DEMPSEY ET AL.: GEOTHERMAL CATCHMENT DELINEATION 

B10201 

B10201 

- Stewart, M. K., and C. B. Taylor (1981), Environmental isotopes in New Zealand hydrology; 1. Introduction: The role of oxygen-18, deuterium, and tritium in hydrology, N. Z. J. Sci., 24, 295–311. 

- Stewart, M. K., G. L. Lyon, B. W. Robinson, and R. B. Glover (1992), Fluid flow in the Rotorua geothermal field derived from isotopic and chemical data, Geothermics, 21, 141–163. 

- Tsang, C.-F., and I. Neretnieks (1998), Flow channeling in heterogeneous fractured rocks, Rev. Geophys., 36, 275–298. 

- Tyvand, P. A. (1977), Heat dispersion effect on thermal convection in anisotropic porous media, J. Hydrol., 34, 335–342. 

- Uffink, G. (1989), Application of Kolmogrov’s backward equation in random walk simulations of groundwater contaminant transport, in Contaminant Transport in Groundwater, edited by D. Kobus and W. Kinzelbach, pp. 283–289, A. A. Balkema, Brookfield, Vt. 

- Vassolo, S., W. Kinzelbach, and W. Schäfer (1998), Determination of well head protection zone by stochastic inverse modelling, J. Hydrol., 206, 268–280. 

- Wallace, L. M., J. Beavan, R. McCaffrey, and D. Darby (2004), Subduction zone coupling and tectonic block rotations in the North Island, New Zealand, J. Geophys. Res., 109, B12406, doi:10.1029/2004JB003241. 

- Weir, G. J. (2009), A mathematical model of rainfall-controlled geothermal fields, Transp. Porous Media, 77, 323–334, doi:10.1007/s111242-0089312-y. 

- Williams, R. E. (1968), Space-filling polyhedron: Its relation to aggregates of soap bubbles, plant cells, and metal crystallites, Science, 161, 276–277. 

- Wilson, C. J. N., B. F. Houghton, M. O. McWilliams, M. A. Lanphere, S. D. Weaver, and R. M. Briggs (1995), Volcanic and structural evolution of the Taupo Volcanic Zone, New Zealand: A review, J. Volcanol. Geotherm. Res., 68, 1–28. 

- Wood, B. D., F. Cherblanc, M. Quintard, and S. Whitaker (2003), Volume averaging for determining the effective dispersion tensor: Closure using periodic unit cells and comparison with ensemble averaging, Water Resour. Res., 39(8), 1210, doi:10.1029/2002WR001723. 

- Wooding, R. A. (1978), Large-scale geothermal field parameters and convection theory, N. Z. J. Sci., 21, 219–228. 

- Zyvoloski, G. (2007), FEHM: A control volume finite element code for simulating subsurface multi-phase multi-fluid heat and mass transfer, Doc. LAUR-07-3359, Los Alamos Natl. Lab., Los Alamos, N. M. 

19 of 19 

