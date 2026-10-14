# Hydrological effects of dip‐slip fault rupture on a hydrothermal plume

**Authors:** D. E. Dempsey, R. A. Archer, S. M. Ellis, J. V. Rowland  
**Published in:** Journal of Geophysical Research: Solid Earth (2013)  
**DOI (version of record):** https://doi.org/10.1029/2012jb009395  
**This copy:** Published version. Text extracted from the PDF at https://ddempsey.github.io/papers/2013-dempsey-hydrological-effects-dip-slip-fault/dempsey2013-hydrological-effects-dip.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** Published version, posted under AGU's author self-archiving policy. © 2013 American Geophysical Union. All Rights Reserved. Version of record: https://doi.org/10.1029/2012jb009395  

---
JOURNAL OF GEOPHYSICAL RESEARCH: SOLID EARTH, VOL. 118, 195–211, doi:10.1029/2012JB009395, 2013 

# Hydrological effects of dip-slip fault rupture on a hydrothermal plume 

## D. E. Dempsey,<sup>1</sup> R. A. Archer,<sup>1</sup> S. M. Ellis,<sup>2</sup> and J. V. Rowland<sup>3</sup> 

Received 19 April 2012; revised 4 September 2012; accepted 8 November 2012; published 31 January 2013. 

[1] Earthquakes cause a variety of hydrological effects, including changes in well levels, streamflow, hot-spring temperatures, and geyser periodicity. These may be produced by changes in pore-fluid pressure or by changes in permeability. We investigate near-field effects of normal earthquakes on fault-controlled hydrothermal plumes, e.g., at the Te Kopia geothermal system on the Paeroa Fault, New Zealand. A numerical model is detailed that addresses the effects of coseismic pore-pressure and permeability perturbations on geothermal upflow along a dip-slip fault. Fluid flow is modeled using the heat and mass transfer code Finite Element Heat and Mass transfer. The 2 m wide fault is impermeable and thus behaves as a partition between fluid flow in the adjacent fault blocks, as well as a structure for upflow to localize upon. A realistic distribution for the coseismic change in mean rock stress is obtained from a plane-strain mechanical model for normal fault rupture in an elastic-plastic-viscous crust. These stress changes are imported into the fluid flow model as pore-fluid pressure changes. In addition, we consider the effects of fault core fracture and damage by introducing an increase in permeability at the fault plane. Results show that short-term effects are dominated by pore-pressure changes, which cause increased heat and mass fluxes at the surface for a period of several weeks. Longer-term, an elevated mass flux remains due to the increase in subsurface permeability. Upflow migrates from the footwall scarp into the hanging wall and away from the fault, because rising fluids are no longer deflected by the fault. 

Citation: Dempsey, D. E., R. A. Archer, S. M. Ellis, and J. V. Rowland (2013), Hydrological effects of dip-slip fault rupture on a hydrothermal plume, J. Geophys. Res. Solid Earth, 118, 195–211, doi:10.1029/2012JB009395. 

## 1. Introduction 

[2] In addition to ground shaking and accumulated, permanent deformation, earthquakes are responsible for a host of hydrological changes in the subsurface. These include changes in groundwater levels [Quilty and Roeloffs, 1997; Grecksch et al., 1999], spring outflow [Muir-Wood and King, 1993; Rojstaczer et al., 1995], and hot-spring and hydrothermal temperatures [Mogi et al., 1989; Johnson et al., 2000; Dziak et al., 2003], as well as liquefaction arising from undrained consolidation [e.g., Poulos et al., 1985] or the passage of seismic waves [Wang and Manga, 2010]. These effects are broadly divided into several categories [Montgomery and Manga, 2003]: near-, intermediate-, and far-field [Wang and Chia, 2008; Wang and Manga, 2010] with respect to the fault rupture; permanent versus 

> 1Department of Engineering Science, University of Auckland, Auckland, New Zealand. 

2GNS Science, Lower Hutt, New Zealand. 

> 3School of Environment, University of Auckland, Auckland, New Zealand. 

Corresponding author: D. E. Dempsey, Department of Engineering Science, University of Auckland, Private Bag 92019, Auckland Mail Centre, Auckland, 1142, New Zealand. 

(d.dempsey@auckland.ac.nz). 

©2012. American Geophysical Union. All Rights Reserved. 2169-9313/13/2012JB009395 

transient; and immediate versus delayed response. Although a wide body of literature exists cataloging and discussing the hydrological effects of earthquakes on groundwater systems [e.g., Muir-Wood and King, 1993; Rojstaczer et al., 1995; Quilty and Roeloffs, 1997; Grecksch et al., 1999; Montgomery et al., 2003; Wang and Chia, 2008; Manga et al., 2012], the impact of earthquakes on geothermal systems has received comparatively less attention [e.g., Ingebritsen and Rojstaczer, 1996; Johnson et al., 2000; Bjornsson et al., 2001; Vandemeulebrouck et al., 2008]. 

[3] Static stress changes associated with coseismic compression and expansion of the crust have been proposed to explain changes in groundwater levels observed in wells. The underpinning theory is that compression of the crust reduces pore volume and increases the local pore-pressure, thereby raising groundwater levels in nearby wells. The idea has received some support from correlations of locations and magnitudes of coseismic well-level changes with changes in the coseismic stress field generated from elastic dislocation models [Okada, 1992] of fault rupture. For instance, Quilty and Roeloffs [1997] applied the approach to the 1994, M = 4.7 Parkfield earthquake, California, and found quantitative agreement between strain changes and well-level changes at four locations, although disagreement at three others. Grecksch et al. [1999], in applying this technique to the 1992, M = 5.4 Roermond earthquake, Germany [Grecksch et al., 1999], recorded reasonable agreement 

195 

DEMPSEY ET AL.: HYDROLOGICAL EFFECTS OF DIP-SLIP FAULT RUPTURE ON A HYDROTHERMAL PLUME 

between well-level and volume strain, although the amplitude of well-level steps were less than expected. Zhang and Huang [2011], in analyzing the M = 8.0 Wenchuan earthquake, China, found a correlation between well-level response and the Skempton parameter, B, which couples coseismic rock stress and pore-pressure changes [Skempton, 1954]; they concluded that poroelastic effects on well-level are restricted to an epicentral distance 1.5 times the length of the fault. In terms of the aforementioned categorization then, the poroelastic effect is typically near-field, transient, and exhibits an immediate response. 

[4] Sustained postseismic changes to well levels and streamflow are thought to represent permanent changes in the subsurface permeability from which those fluids are derived [Rojstaczer and Wolf, 1992]. For instance, a reduction in surface permeability and subsequent expulsion of fluids through liquefaction and aquifer consolidation [Manga et al., 2003; Montgomery et al., 2003] has been proposed as the cause of increased postseismic streamflow. Others [Briggs, 1991; Rojstaczer and Wolf, 1992] interpret an immediate, coseismic increase in streamflow, followed by a gradual exponential decay, to represent an increase in subsurface permeability that facilitates the release of water from aquifers. As evidence, Briggs [1991] cites exponential decay from a postseismic streamflow high, which is conceptually consistent with simple models of finite reservoir discharge through a restricted aperture. In comparison to poroelastic effects, these hydrological responses occur over a variety of epicentral distances, and may exhibit a delayed or building flow rate [Rojstaczer and Wolf, 1992; Manga et al., 2003] that persists over a range of time frames [Briggs, 1991; Montgomery et al., 2003]. 

[5] Further evidence for far-field coseismic changes in permeability is derived from a study of geyser periodicity in response to earthquakes. Ingebritsen and Rojstaczer [1996], using numerical simulations and representing a geyser as a permeable conduit embedded in a less permeable rock matrix, showed that eruption frequency is highly sensitive to conduit permeability. Small increases in permeability associated with static or, more likely in the farfield, dynamic strain changes, increase eruption frequency. Thus, a temporary decrease in eruption frequency at “Old Faithful” geyser in Calistoga, California following the Oroville and Loma Prieta earthquakes [Ingebritsen and Rojstaczer, 1996], both of which were centered more than 130 km from the geyser, suggests a transient drop in conduit permeability. Alternatively, geyser frequencies increased at Yellowstone following the Hegben Lake (Montana, M = 7.3, distance ~50 km), Borah Peak (Idaho, M = 7.0, distance ~230 km) [Ingebritsen and Rojstaczer, 1996], and Denali fault (Alaska, M = 7.9, distance ~ 3100 km) earthquakes [Husen et al., 2004]. Similarly, an increase in the lake-level cycling-frequency at Inferno Crater Lake, Waimangu geothermal field, New Zealand, was observed in the period following Edgecumbe earthquake (New Zealand, M = 6.3, distance ~50 km) [Vandemeulebrouck et al., 2008]. These changes suggest increases in conduit permeability associated with either static coseismic strain changes, or, in the case of the Denali fault earthquake, the passage of seismic waves. 

[6] Permeability enhancement has been attributed to dynamic strain effects in several studies where discharge or 

well-level changes do not correlate with static distributions of strain change [e.g., Manga et al., 2003; Cox et al., 2012]. As mechanisms for permeability change, Manga et al. [2012] proposed that shaking associated with the passage of seismic waves may dislodge pore-clogging colloidal deposits, particles, or droplets, thereby effecting an increase in conductivity. Such gains in permeability may be short-lived as pore throats and channels eventually become reblocked. 

[7] Others have suggested that anomalous fluid expulsion from fault zones following major earthquakes may be caused by the rupture of deep, over-pressured reservoirs [Sibson et al., 1985; Byerlee, 1993]. In these scenarios, the fluids themselves play a critical role in fault rupture by reducing the normal stress on the fault and increasing its likelihood of failure. Indeed the migration of fluids in the postseismic period has been linked with distributions of aftershocks [Miller et al., 2004; Lindman et al., 2010] through their interaction with the rock stress state. 

[8] In this work, we present results from a computational model that considers the effects on a hydrothermal plume of relatively rapid pore-pressure and permeability changes associated with a normal fault earthquake. The objectives of this study are twofold: first, we investigate natural-state geothermal upflow constrained by dip-slip faults operating as fluid flow barriers; second, we address the likely consequences of rupture on that fault for heat and mass transfer through the geothermal system. Our model is specific to earthquake rupture and natural geothermal convection occurring within the Taupo Volcanic Zone (TVZ), New Zealand, and in particular the Te Kopia geothermal system located on the Paeroa Fault. 

### 1.1. Taupo Volcanic Zone 

[9] The TVZ is a productive volcanic arc, which hosts convective upflow of high temperature fluids (>250<sup>�</sup> C) at more than 20 distinct locations [Bibby et al., 1995]. Many of the geothermal systems are long-lived, with minimum-age estimates ranging from 400 kyr for Ngatamariki [Arehart et al., 1997] to 120 kyr for Te Kopia [Bignall and Browne, 1994]. Hydrothermal convection is driven by extensive magmatic intrusion in the lower and middle crust, which supplies heat to the upper crust at a depth of 6–8 km [Bryan et al., 1999]. McNabb [1975] argued that if the TVZ convective system was produced by uniform heating of a porous medium from below, convection cells of aspect ratio 1 should form. For a mean horizontal spacing of 10–15 km, this would imply a plume vertical dimension of 5–8 km [Bibby et al., 1995], which is consistent with the position of the brittle-ductile transition of 6–8 km delineated by shallow seismic studies [Bryan et al., 1999]. 

[10] Fluid flow is assisted by an abundance of normal fault structures, which accommodate 5–15 mm yr<sup>–1</sup> of tectonic extension [Wallace et al., 2004], and are presumed to make a significant contribution to the fracture permeability of basement rocks [Grindley and Browne, 1976; Wood et al., 2001]. These structures also play a role in compartmentalization of fluid flow, operating as alongstrike fluid conduits in regions where fracture permeability is enhanced, and cross-fault fluid barriers where mature fault gouges are developed [Rowland and Sibson, 2004]. Observations of fault gouge in the TVZ are limited to 

196 

DEMPSEY ET AL.: HYDROLOGICAL EFFECTS OF DIP-SLIP FAULT RUPTURE ON A HYDROTHERMAL PLUME 

Figure 1. The Paeroa Fault in the context of TVZ geothermal systems demarcated by electrical resistivity studies [Stagpoole and Bibby, 1998]. At = Atiamuri, Mo = Mokai, Ng = Ngatamariki, Ok = Orakeikorako, Re = Reporoa, Rk = Rotokawa, Th = Tauhara, Tk = Te Kopia, Wk = Wairakei, Wm = Waimangu, Wp = Waiotapu, Wt = Waikite. The locations of other TVZ faults are shown in grey (after Rowland et al. [2010]). 

low-displacement structures in nongeothermal areas (e.g., Berryman et al. [2008]). These smaller faults contain a thin (<200 mm) clay-rich gouge [Rowland and Simmons, 2012]; for larger-displacement structures, some thickening of the fault core may be expected as the fault-zone thickness is increased [Knott et al., 1996]. 

[11] In the TVZ, the 30 km long Paeroa Fault (Figure 1) evidences several such fault-fluid interactions. For example, the passage of westward topographically-driven geothermal outflow at Waikite is blocked by the fault [Rowland and Sibson, 2004]. Geothermal expression at Te Kopia, further south, occurs almost exclusively in the footwall block and fault scarp [Bignall and Browne, 1994], which has been uplifted ~220 m. Despite the appreciable drop in elevation, geothermal expression is absent from the hanging wall, with the exception of some small thermal springs. At a vertical displacement rate of 1.5 mm yr<sup>–1</sup> , the Paeroa Fault is the fastest moving fault, and one of the most active, in the TVZ [Villamor and Berryman, 2001]—the likelihood of a future M > 6 event on the fault is credible [Berryman et al., 2008]. 

[12] One further example of fault-obstructed fluid flow is documented by Rowland and Sibson [2004]; at Orakeikorako, discharging springs occur adjacent to one another but separated by a 5 m high fault scarp. Rowland and Sibson [2004] propose that this structure operates as a fluid-flow barrier to at least a depth of 50 m to maintain the requisite pressure difference across the fault. 

[13] Our model specifically considers the long-term influence of structural permeability associated with a mature normal fault on a hydrothermal plume, as well as the immediate 

hydrological effects of fault rupture. The aim is to constrain the way in which major normal faults (e.g., the Paeroa Fault) perturb near-field geothermal fluid flow over short and long timescales. We use a rectilinear, structured mesh to describe flow and specify permeability properties along an inclined plane, representing the fault. A steady state hydrothermal plume is simulated and its shape reflects the structural permeability of the fault. Coseismic changes in pore-pressure are imported from a separate mechanical model for fault rupture [Dempsey et al., 2012a, 2012b], which captures rock stress changes in the near-surface and at seismogenic depths. We also consider a concurrent, coseismic increase in fault permeability that permanently reduces the effectiveness of the fault as a fluid-flow barrier. 

## 2. Numerical Methods 

[14] In this study, we consider three effects of dip-slip faults on fluid flow: a long-term, static perturbation to the position of a hydrothermal plume caused by an impermeable fault-core [Grindley and Browne, 1976; Caine et al., 1996]; a short-term disturbance of the pore fluid pressure; and a concurrent increase in fault-core permeability. The first effect is distinct from the other two in the sense that fluid flow is permitted to evolve over long time periods in the presence of the perturbation. In contrast, coseismic changes in porefluid pressure or fault permeability rapidly perturb the steady state distribution of fluid flow. The post-seismic period is characterized by diffusion of the fluid pressure disturbance, and a transition to a different steady state under the new permeability distribution. 

[15] From a numerical perspective, short- and long-term effects of structural permeability on fluid flow are relatively straightforward to test. One requires a computational model for heat and mass transfer [Salve and Oldenburg, 2001; McLellan et al., 2010], a mesh that honors the fault geometry [McLellan et al., 2010], and a permeability distribution that accounts for structural permeability associated with the fault [López and Smith, 1996; McLellan et al., 2010]. In contrast, investigating the effects of pore-pressure disruption requires an additional source of information: a three-dimensional (3-D) distribution of coseismic stress changes. This has previously been supplied by inverting coseismic surface displacements associated with the specific earthquake to obtain a 3-D elastic displacement model [Okada, 1992; Quilty and Roeloffs, 1997; Grecksch et al., 1999; Ge and Stover, 2000]. In contrast, in this paper static coseismic stress changes associated with dip-slip fault rupture are obtained from a two-dimensional (2-D) mechanical model in which the fault slip distribution is not prescribed but is solved for. This model was originally developed to investigate postseismic stress rotation [Nüchter and Ellis, 2010], fault energetics [Dempsey et al., 2012a], and frictional failure in the upper crust over multiple seismic cycles [Dempsey et al., 2012b]. These stress changes are converted to a pore-pressure perturbation, which then modifies the pressure distribution of the natural-state fluid flow model. 

[16] The mixed 2-D/3-D approach employed here provides certain advantages over the 3-D elastic dislocation model of Okada [1992]. For example, in our model, fault displacement is derived as part of the solution necessary to relieve excess preseismic stresses that load the fault, and is 

197 

DEMPSEY ET AL.: HYDROLOGICAL EFFECTS OF DIP-SLIP FAULT RUPTURE ON A HYDROTHERMAL PLUME 

Figure 2. Set-up of the mechanical model. (a) Geometry and boundary conditions for the planar fault simulation superimposed on the model mesh. (b) Initial differential stress profile developed after the stress “spin-up” phase. (c) Flow diagram showing boundary conditions, fault properties and timescales associated with the mechanical model. This figure has been adapted from Dempsey et al. [2012b]. 

not a prescribed input required to obtain the coseismic stress change. As a consequence, fault slip is constant over much of the brittle crust, consistent with an elastic dislocation, but reduces to zero across a finite distance in the brittle-ductile region (cf. the Okada [1992] model, where slip falls off over an infinitesimal distance at the lower tip of the fault). This more-realistic displacement profile avoids both the mathematical singularities that occur on the edges of elastic dislocations and the numerical truncation required to account for these. 

[17] We only consider the case of a dip-slip fault with an along-strike length much greater than the fault is deep. This allows us to use the plane-strain assumption while determining the stress change around the fault used to drive the hydrological model. Our simplification is designed to isolate and examine the effects owing to slip changes down-dip of a long dip-slip fault, without the added complications that occur near the lateral fault tips. As such, the model cannot be used to investigate hydrological effects near the lateral tips of normal faults, where the plane strain assumption is invalid. 

[18] In low-temperature settings, fluids can be approximated as isodense and isoviscous, and the diffusion of a pressure disturbance, ΔP, through a homogeneous permeability medium is governed by 

where D is hydraulic diffusivity [Neuzil, 2003; Lindman et al., 2010]. This approach, coupled to a Mohr-Coulomb failure criterion, has been used to model aftershock 

sequences in response to diffusing pore-pressure disturbance created by the main shock [Lindman et al., 2010]. 

[19] In geothermal settings the isothermal assumption is not valid; viscosity and permeability vary by several orders of magnitude depending on temperature and depth, and the density of hot upflow is up to 25% lower than cool, meteoric waters. In these circumstances, a description of coupled heat and mass transfer is required to adequately model diffusion of a pore-pressure disturbance. 

### 2.1. Mechanical Fault Model 

[20] Coseismic stress changes are modeled by considering displacement of an inclined, frictional contact surface embedded in a 2-D, plane-strain, elastic-viscous-plastic crust. This model has previously been used to investigate post-seismic surface deformation in compressional environments [Ellis et al., 2006], and stress rotation, postseismic recovery [Nüchter and Ellis, 2010], energy flow [Dempsey et al., 2012a], and fault zone evolution [Dempsey et al., 2012b] in extensional environments. Model methods are described briefly here, and the reader is directed to the aforementioned references for further detail. 

[21] The evolution of stress, strain, and displacement in the vicinity of a normal fault over multiple seismic cycles is modeled using the finite element software package Abaqus/Standard (http://www.simulia.com/products/abaqus_standard.html). A single fault, approximated as a planar frictional contact surface, is hosted within a 60 � 25 km crust, which is loaded by extensional velocity boundary conditions of 12 mm yr<sup>–1</sup> (Figure 2a). Deformation of the crust is linear elastic while the stress state is below yield, and limited by Mohr-Coulomb failure in the upper crust transitioning to viscous creep in the 

198 

DEMPSEY ET AL.: HYDROLOGICAL EFFECTS OF DIP-SLIP FAULT RUPTURE ON A HYDROTHERMAL PLUME 

Figure 3. (a) Coseismic change in horizontal elastic strain, Δee, averaged over the top 500 m of the model for the planar fault geometry. A positive change in elastic strain indicates compression. (b) Coseismic change in mean rock stress (Δskk/3) for the 12th seismic cycle. Note that contour intervals are not evenly spaced. The inset shows down-dip fault slip as a function of depth using the vertical scale of Figure 3b. Cartoon arrows show the direction of coseismic displacement. 

lower crust at a depth of 6–8 km [Dempsey et al., 2012b]. The depth to the brittle ductile transition is determined by material parameters, the temperature gradient (35<sup>�</sup> C km<sup>–1</sup> ) and the bulk strain rate (6 � 10<sup>–15</sup> s<sup>–1</sup> ). 

[22] An initial stress state (Figure 2b) for the model is “spun-up” [Hetland and Hager, 2006; Ellis et al., 2006] by applying the extensional boundary conditions over a long time period (90 kyr). The seismic cycle is approximated by two steps: a 220 yr loading period in which relative displacement of the contact surfaces is prevented by an infinite friction coefficient; this is followed by a 60 s seismic period where fault slip at a weakened friction coefficient (0.2, e.g., Scholz and Engelder [1976]) is permitted. This approach ignores dynamic effects such as wave propagation and rate-state friction. Dynamic equilibrium, characterized by self-similar patterns of stress and elastic deformation, is observed after 10 seismic cycles, and results exported to the fluid flow model are derived from the 12th cycle (Figure 2c). 

[23] We consider stress changes associated with a planar fault geometry (Figure 2a), which dips at 65<sup>�</sup> and intersects the crust to a depth of 15 km. The chosen fault dip is consistent with the average dip of faults in the TVZ [Villamor and Berryman, 2001], although there is evidence for coseismic slip on fault planes as shallow as 45<sup>�</sup> [Anderson et al., 1990]. The model domain is meshed using approximately 10,000 elements. 

### 2.2. Coseismic Stress Changes 

[24] Following Rice and Cleary [1976] and Lindman et al. [2010], a relation between changes in fluid volume, porepressure and rock stress is derived from 

where m–m0 is the change in fluid per unit volume, r0 is fluid density, vu and v are the undrained and drained Poisson ratios, G is shear modulus, B is Skempton’s coefficient, sij is the stress tensor, defined here as positive in compression, and pf is pore fluid pressure. We assume that coseismic stress changes are sufficiently rapid that induced fluid transport is negligible during the seismic period. Then m � m0 = 0 and equation (2) reduces to a version of Skempton’s [1954] original empirical equation 

[25] Equation (3) allows the import of stress changes, Δsij, derived from the mechanical model into the fluid flow model. In the simulations reported here, we use a B value of 0.7, reported by Talwani et al. [1999] for fractured crystalline rock, and used by Deng et al. [2010] in modeling the postseismic pore pressure diffusion following the MW 7.9 Wenchuan earthquake, China. 

[26] Figure 3b shows changes in mean rock stress, Δskk/3, associated with the modeled fault rupture. The distribution illustrates three significant stress changes associated with a normal fault earthquake. First, a widespread mean stress increase is observed in the hanging wall at the base of the fault, and is caused by subsidence of the upper crust and a gradient in fault slip at midcrustal depths (6–9 km). The greatest mean stress increase, ~1 MPa, occurs on the fault plane at a depth of 7.5 km. Second, on the other side of the fault plane, in the footwall block, a large decrease in mean stress is observed. Expansion of the rock associated with this decrease in compressive stress contributes to uplift of the footwall at the surface [Dempsey et al., 2012a]. Finally, at the surface of the footwall, as well as part of the hanging wall, a widespread increase in mean stress occurs. This is caused by horizontal compression of the crust as the two fault blocks withdraw from one another. 

[27] The pattern of coseismic stress change shown in Figure 3b is similar to the pattern of coseismic volumetric strain change obtained by Ge and Stover [2000] using a 3-D elastic displacement model. Their model further showed that volumetric strain changes did not vary significantly alongstrike except near the fault tips; this indicates that the planestrain assumption is appropriate for the middle sections of a normal fault. For our analysis, an elastic modulus of 10<sup>10</sup> Pa and a Poisson’s ratio of 0.25 were used. Under fully saturated conditions, these parameters would be modified to reflect the poroelastic response of the pore fluid. Ge and Stover [2000], using an undrained Poisson’s ratio of 0.3, obtained similar stress change distributions to those used here. The use of drained parameters in our study therefore has a minimal impact on model outcomes. 

[28] Figure 3 also indicates a small mean stress drop in the near-surface of the hanging wall at a distance of ~ 5 km from the fault. This feature is associated with flexure of the hanging wall [e.g., Kusznir et al., 1991] and brittle failure in the near-surface. In the mechanical model, brittle failure is described by a Mohr-Coulomb frictional plastic rheology; during the coseismic period, plastic strain accumulates in this critically-stressed region through the relief of local stress. While pore-pressure changes in this region 

199 

DEMPSEY ET AL.: HYDROLOGICAL EFFECTS OF DIP-SLIP FAULT RUPTURE ON A HYDROTHERMAL PLUME 

Figure 4. Set-up for the circulation model. (a) Model mesh and dimensions used to describe planar fault geometry. The mesh is discretized into 50 evenly spaced slices in the y-direction (not shown). The fault plane is comprised of 10 layers, spaced 1 m apart in the x direction. The inset shows the fault mesh in more detail, with darkened nodal planes assigned “fault-core” permeability in the model. Boundary conditions enforced at the upper, lower, and lateral boundaries are shown. (b) Radial Gaussian temperature boundary condition applied at the base of the model. (c) Background permeability distribution (i.e., not accounting for fault permeability) with depth. 

are minor in comparison to others, permanent strain caused by reactivation or extension of existing fractures is relevant to the long-term evolution of the fault system [Dempsey et al., 2012b]. The development of structural permeability associated with this strain might also affect the long-term stability of fluid flow in the region, although we do not model this scenario here. 

[29] Single-event dip-slip displacement of the fault surface of 0.83 m (see Figure 3b) can be used to derive an estimate for the magnitude of the modeled earthquake [Hanks and Kanamori, 1979]. For a shear modulus of 4 GPa, and a 25 km long surface rupture, the modeled earthquake has an approximate magnitude, M, of 5.7. 

### 2.3. Fluid Flow Model 

[30] Fluid flow models are constructed using the Finite Element Heat and Mass (FEHM) transfer code [Zyvoloski, 2007], which is capable of modeling multiphase, multicomponent Darcy flow through permeable media. This code has previously been used to model convection in air [Stauffer et al., 1997], and groundwater convection modified by dynamic permeability in heated [Dempsey et al., 2012c] and cool environments [Chaudhuri et al., 2009]. The governing equations for heat and mass transfer are derived from energy and mass conservation; respectively, these are 

and 

where f is porosity, cp, rr and K are the specific heat, density and thermal conductivity of the rock matrix, rf, u and h are the density, internal energy, and enthalpy of the fluid, and QE and QM are energy and mass source terms. The Darcy velocity, vD, is given by 

where k is permeability, m is fluid viscosity, g is the acceleration due to gravity, and^z is a unit vector oriented in the direction of gravity. 

[31] In this work, we are concerned with perturbations to a single hydrothermal plume, and therefore the computational domain must be large enough to encompass both a central upflow region and downward recharge on the plume flanks. Figure 4a shows the grid used to model the fault geometry, assuming no change in the along strike direction (y). This assumption is reasonable for faults that are considerably longer than the diameter of the hydrothermal plume (e.g., the 30 km long Paeroa Fault of the TVZ). The model domain is 15�15 km in plan view; this is an adequate dimension to satisfy downward recharge within an area at least 10 times larger than the plume cross-section [McNabb, 1975]. The model extends to a depth of 8 km, which is presumed to correlate with the approximate depth of the brittleductile transition in the TVZ [Bryan et al., 1999], the limit of fracture permeability, and thus the base of the convective system [Bibby et al., 1995]. This also corresponds to the transition between brittle and ductile deformation in the mechanical model, which occurs across a depth interval of 6–9 km [Dempsey et al., 2012b]. 

[32] Because the model is designed to encompass the entire plume, no-flow boundary conditions are enforced on the lower and lateral boundaries. The upper layer of the model is maintained at atmospheric pressure and temperature. A hydrothermal plume is produced in the center of the computational domain by applying a radial Gaussian temperature boundary condition (Figure 4b) at the base of the model; lateral boundaries are closed to heat fluxes. Temperatures at the base of the model range from 150<sup>�</sup> C on the edge of the domain to 340<sup>�</sup> C in the center; we therefore are not considering supercritical conditions. The maximum temperature of 340<sup>�</sup> C is consistent with brittle-ductile transition temperatures of 300–350<sup>�</sup> C for quartzofeldspathic rock. This is higher than the 280<sup>�</sup> C at 8 km depth in the mechanical model; however, temperatures at the base of the fluid flow model represent those conceivably perturbed by a magmatic intrusion upon which a hydrothermal plume has localized. In contrast, 

200 

DEMPSEY ET AL.: HYDROLOGICAL EFFECTS OF DIP-SLIP FAULT RUPTURE ON A HYDROTHERMAL PLUME 

Table 1. Permeability and Material Properties for the Circulation Model. Bounding Permeabilities for the Surface, VolcanicsBasement Contact and Base of the Model Are Given 

|Parameter|Value|
|---|---|
|Surface permeability (kz= 0)|–13.8 log(m<sup>2</sup>)<br>|
|Contact permeability (kz=�2km)|–14.5 log(m<sup>2</sup>)<br>|
|Basal permeability (kz=�8km)<br>i|–14.7 log(m<sup>2</sup>)|
|Skempton’s coefficient (B)|0.7<br>|
|Thermal conductivity|2.5 W m<sup>–1 </sup>K<sup>–1</sup><br>|
|Rock density<br>i|2800 kg m<sup>–3</sup><br>|
|Rock specific heat capacity|1000 J kg<sup>–1</sup>|

temperatures at 8 km depth in the mechanical model represent along-strike average rift properties. 

[33] Two zones of differing permeability properties are used in these models. The upper 2 km of the TVZ is characterized by a variety of low density, Quaternary volcanic strata, laid down by frequent volcanic extrusion over the previous 2 Myr [Wilson et al., 1995]. Permeability is supplied by horizontal contacts between distinct geological units, as well as extensive faulting and fracturing maintained by the high horizontal extension rate [Wallace et al., 2004]. Below the surficial deposits, fluid flow is hosted within fractured, greywacke basement rock. The effects of pore compaction in the upper zone, and fracture closure in the lower zone, are approximated by an exponentially decreasing permeability profile with depth [Saar and Manga, 2004]. Figure 4c shows model permeability with depth away from the fault zone. Table 1 details bounding values of permeability for the two subdomains, as well as other model parameters. Permeability magnitudes used in this modeling study are consistent with ranges used in previous TVZ modeling studies, e.g., 5–100 � 10<sup>–15</sup> m<sup>–2</sup> from Kissling and Weir [2005], 1–200 � 10<sup>–15</sup> m<sup>–2</sup> from Mannington et al. [2004]. The specific permeability distribution used in this study was adjusted to obtain a hydrothermal plume with upper-plume temperatures (250<sup>�</sup> C at 2 km depth) and total heat throughput (~200 MW) in line with typical TVZ geothermal fields (250– 300<sup>�</sup> C and 50–500 MW, respectively; [e.g., Bibby et al., 1995]). Kissling and Weir [2005] found that further increases in near-surface temperatures could be obtained by increasing mesh refinement; in these simulations, further improvements in resolution are precluded by memory constraints. 

2.3.1. Mesh Design and Fault Permeability 

[34] The mesh used in the fluid flow model is specifically constructed to implement a description of cross-fault permeability. Faults exhibiting a mature core of clay or other gouge material, surrounded by extensive regions of fracturing (the damage zone; e.g., Caine et al. [1996]), can operate as either fluid conduits or baffles [Caine et al., 1996; Rowland and Sibson, 2004] depending on the direction of fluid flow. Cross-fault permeability is typically lower than that parallel to the fault plane, and several methods exist to implement these properties numerically. A nondiagonal permeability tensor provides the most direct method of distinguishing across and along fault permeability; however, this approach is computationally expensive and is not available in FEHM. Alternatively, for an orthogonal grid, one can superimpose the geometry of the fault core on the mesh, and then reduce the permeability of nodes contained within. For dip-slip fault geometries this produces a stepped mesh 

and, to prevent fluid communication, the fault core must be several elements wide. A refinement of the second method, implemented here, involves a steady distortion of the orthogonal mesh so that it honors the geometry of the fault in the center of the domain. For a planar fault (Figure 4a) this involves an incremental increase in the tilt of each successive vertical y-z nodal plane, and a complementary decrease on the opposite side of the fault. This inclined mesh does not account for the topographical offset between two fault blocks that naturally evolves after many seismic cycles. The mesh distortion creates relatively large aspect ratios for some elements; however, we show in section 3 that the effect on the model results is minor. 

[35] The meshed fault zone is comprised of 11, evenly spaced nodal planes. The fluid baffling effect of the fault is approximated by a permeability contrast between the fault core and the surrounding, undamaged country rock. In the model, we assign two of the central nodal planes to represent fault core and decrease their permeability by a specified order of magnitude. Thus, fault core is not characterized by some constant permeability value applied to its entire depth; instead, an order-of-magnitude decrease in permeability, relative to the depth-dependent permeability distribution shown in Figure 4c, is specified and applied. 

[36] The thickness of the fault core depends on the spacing between the fault-zone nodal planes assigned core permeability. In these models, we use a nodal plane spacing of 1 m and a fault core permeability contrast of –4 orders of magnitude. Observations of well-developed, impermeable fault gouges indicate these are typically no thicker than 10 m [Caine et al., 1996] and our modeled thickness is therefore reasonable. Fault core permeability varies with fault displacement, degree of thermal or chemical alteration [Olsen et al., 1998], and the presence or absence of clay minerals [Morrow et al., 1984]. Assigning a constant permeability reduction to the modeled fault core therefore represents a significant, but necessary, simplification of its true distribution and variability in both time and space. Nevertheless, our chosen reduction of four orders of magnitude results in core permeabilities between 1.3 � 10<sup>�18</sup> m<sup>2</sup> and 2.5 � 10<sup>�19</sup> m<sup>2</sup> , which is consistent with laboratory studies of simulated fault gouge [Morrow et al., 1984; Ikari et al., 2009]. We do not include a surrounding fault damage zone with higher permeability. 

### 2.3.2. Import of Pore-Pressure Changes Into Fluid Flow Model 

[37] Coseismic pore-pressure disruption is modeled by exporting stress changes from the mechanical model as pore-pressure changes in the fluid flow model. Because the mechanical model is two-dimensional, extrapolation of the stress changes in Figure 3b to three dimensions is required. There are several procedures for doing this, all of which are approximations of the true three-dimensional coseismic stress perturbation. Our plane-strain model of fault mechanics describes the middle section of a fault and implicitly assumes that stress changes are constant for an infinite distance along-strike. In reality, this assumption is only accurate over a limited distance, which itself is a function of the length of the fault. In the construction of the computational mesh and in applying fault core permeability, we assumed that the dimension of the fault is large compared to the diameter of the geothermal plume; for the Te Kopia 

201 

DEMPSEY ET AL.: HYDROLOGICAL EFFECTS OF DIP-SLIP FAULT RUPTURE ON A HYDROTHERMAL PLUME 

Figure 5. Example fluctuation field applied to the faultplane permeability distribution to simulate the effects of fault rupture. The mean and standard deviation for the change in permeability (Δk) are 2.3 and 0.5 orders of magnitude, respectively. Maximum and minimum permeability increases are 3.9 and 0.5 orders of magnitude, respectively. The black and white dashed line at y = 7.5 km indicates the position of the observation plane in Figure 10. 

geothermal system, this assumption is valid (see Figure 1). Consistent with this assumption, we have extrapolated the stress changes in Figure 3b in the along-strike (y) dimension of the model without alteration and used this as the basis for pore-pressure perturbation in the fluid flow model. Ge and Stover [2000] calculated 3-D stress changes about an elastic dislocation representing dip-slip fault rupture; their results indicate that the plane-strain assumption, and thus the extrapolation performed here, are robust. 

[38] The coseismic pore-pressure perturbation, derived from changes in mean stress (Figure 3) and equation (3), is introduced to the fluid flow model by modification of the fluid pressure distribution. A hydrothermal plume is established by applying the radial Gaussian temperature distribution to the lower boundary of the model for a nominal time period (300 kyr). The steady state flow-field that develops depends on the distribution of permeability that is modified by the presence of the fault. Temperatures and pressures at steady state serve as initial conditions for the next simulation, with the initial pressure distribution modified to include the coseismic effect. Fluid flow and heat transfer are modeled for a period of 10 years following the earthquake to investigate the temporal response of the system to seismic perturbation. Linear interpolation is used to export stress changes from the unstructured grid of the mechanical model, composed of triangles and quadrilaterals, (Figure 2a) to the structured grid of the fluid flow model, comprising an ordered array of parallelograms (Figure 4a). 

[39] Several studies of hydrological changes following major earthquakes suggest long-lived or permanent changes in permeability may be responsible for increased streamflow or well levels [e.g., Rojstaczer and Wolf, 1992; Montgomery et al., 2003; Manga et al., 2003]. These invoke either aquifer consolidation or changes in the distribution and conductivity of fracture networks. In addition to pore-pressure perturbations, we also consider the effect on fluid flow of permanent permeability changes associated with damage of the fault gouge and disruption of its role as a fluid baffle [Sibson, 1994]. Seismic cycling of fault core permeability and subsequent mass flows associated with decompression boiling can lead to rapid silica precipitation and permeability sealing [e.g., Caine et al., 2010]; this second-order response of 

fault permeability is not considered here. To approximate the effects of a randomly disrupted fault gouge we superimpose a stochastic, spatially correlated fluctuation field (Figure 5) upon the low permeability fault plane. This is an approximation to the inherent spatial heterogeneity associated with the material strength of the fault core and fracture networks. Based on observations of well-core from fractured oil reservoirs [Leary and Al-Kindy, 2002] we used a powerlaw with an exponent of –1.3 to describe the spatially correlated fluctuation; however, the method is not restricted to this specific choice and alternative distributions are easily implemented. The permeability fluctuation imposes a mean increase of 2.3 orders of magnitude and is limited to a maximum increase of 4 orders of magnitude. 

[40] As with the pore-pressure model, 10 years of fluid flow are modeled under the new permeability distribution using the steady state model as an initial condition. Because postseismic fault-plane permeability in any given simulation is arbitrary, a set of 100 simulations are performed to study the mean effects on fluid flow of cross-fault permeability disruption, as well as provide some constraint on the variability that might be observed. This approach does not consider the effects of mechanical or chemical sealing of the fault gouge in the modeled postseismic period [Olsen et al., 1998]. 

## 3. Plume Development Around an Impermeable Fault 

[41] The shape and structure of a geothermal plume is often constrained by considering the distribution of temperature contours [e.g., Kissling and Weir, 2005; Coumou et al., 2008] or some proxy for temperature, e.g., hydrothermal alteration [Simmons and Browne, 2000] or resistivity [e.g., Heise et al., 2008]. Alternatively, if our principal interest in the hydrothermal plume is restricted to its ability to transport heat to the surface from depth, then contours of heat flux are also useful in demarcating plume structure. Figure 6 shows temperature and heat flux contours for a vertical slice through the center of the modeled plume. As a point of comparison, and to illustrate that the influence of the inclined mesh (Figure 4a) on the modeled flow distribution is minor, we also show that the plume evolved in the absence of an impermeable fault (Figures 6a and 6c). Although some deflection of heat and mass transfer vectors is caused by the inclined mesh, the vertical plume structure indicates that physical, rather than numerical, processes dominate. 

[42] In the footwall block, fluids heated at the base of the model rise due to density-driven buoyancy until they encounter the impermeable fault core. Here they are deflected and guided along the underside of the fault to the surface; a process that drags unperturbed temperature contours, shown in Figure 6a, in the negative x direction. Heat transported vertically through the upper 4 km of the footwall is nearly adiabatic and averages 110–120 MW, with the greatest outflow of hot fluids occurring immediately adjacent to the fault scarp. In comparison, vertical heat transfer in the hanging wall is somewhat less than the adjacent footwall, averaging 90–110 MW. 

[43] Heat and mass flux in the hanging wall (Figure 6d) exhibit a tendency to adhere to the fault plane, although 

202 

DEMPSEY ET AL.: HYDROLOGICAL EFFECTS OF DIP-SLIP FAULT RUPTURE ON A HYDROTHERMAL PLUME 

Figure 6. Thermal characteristics of a vertical slice through the center of the modeled convective plumes. Temperature contours are shown for (a) an unperturbed plume (no fault permeability), and (b) a plume deflected by low fault core permeability. Vectors superimposed on Figures 6a–6b indicate the direction and relative magnitude of mass flux. (c, d) Contours of heat flux magnitude, which correspond to the models in Figures 6a–6b. Vectors superimposed on Figures 6c and 6d indicate heatflux direction. (e–g) Structure of hydrothermal plumes, as delineated by their temperature contours, for heat sources displaced from the center of the model. The position of the center of the radial Gaussian temperature boundary condition is indicated in Figures 6a, 6c, and 6e–6g by a hollow arrow. The position of the fault in Figures 6b, 6d, and 6e–6g is indicated by a white line. 

not to the extent of the footwall, where flow is physically restricted by a permeability barrier. Nevertheless, hanging wall upflow is directed up-dip in the near-fault region and the greatest heat fluxes occur immediately adjacent to the fault plane. As the temperature of the fault core is close to that of the high-temperature upflow in the footwall, the efficiency of vertical heat transfer in the hanging wall is maximized by positioning the high-temperature upflow zone alongside the high-temperature fault. Furthermore, mass recharge for the hanging wall upflow zone occurs by downwelling of cold, denser fluids in the rest of the fault block. Thus, for a given depth, hydrostatic pressure is greater in the downflow region than the upflow zone, and a horizontal force supplied by the downflow region upon the upflow zone assists in pinning it to the fault plane. 

[44] This mode of fluid flow shares similarities with analytical and numerical solutions to conjugate conduction-natural-convection problems in vertically partitioned [e.g., 

Sakakibara et al., 1992; Kahveci, 2007] and inclined [Varol et al., 2010] domains. These studies solve for heat transfer by distinct convecting fluid cells coupled together by conductive heat transfer across a solid partition; however, they typically consider laterally heated domains relevant to the engineering of double-paned windows, fire spreading and nuclear reactors. In contrast, in these models we are concerned with nonequal basal heating of a domain containing an inclined vertical partition. An upflow zone is generated in each fault block, although the degree of coupling across the fault plane distinguishes this problem from the aforementioned analytical and numerical treatments. Total conductive heat transfer across the fault plane totals �10 MW, which is small in comparison to vertical heat transfer of �200 MW. 

[45] Fluids rising along the fault in the hanging wall are slightly cooler than fluids at the same depth in the footwall, resulting in low-level conductive heat transfer between the 

203 

DEMPSEY ET AL.: HYDROLOGICAL EFFECTS OF DIP-SLIP FAULT RUPTURE ON A HYDROTHERMAL PLUME 

Figure 7. (a) Distribution of thermal area and altered ground at Te Kopia geothermal field (after Bignall and Browne [1994]) relative to the Paeroa Fault. The location of Murphy’s Farm thermal spring (MFS) is shown. Inset shows the regional context of Te Kopia and the Taupo Volcanic Zone. (b) Vertical heat flux, qz, of the model at a depth of 200 m. This plot has been framed so that spatial dimensions and the position of the fault are approximately equal to Figure 7a. 

two fault blocks. This operation is similar to that of a heat exchanger, albeit a very poor one, the efficiency of which depends on the temperature difference across, and the thickness of, the fault core. At 2 m, the thickness of the modeled fault core falls well within the range of field observations [e.g., Caine et al., 1996], although both narrower and wider zones might be expected. In general, cross-fault coupling of the flow regimes would be expected to increase for narrower fault cores with diminished insulation properties. The issue of cross-fault coupling between the two upflow zones is revisited in section 5 when considering a coseismic increase of fault permeability. 

[46] Heat flux widens perceptibly in the near-surface of the hanging wall as increased fluid velocities in the high permeability layer permit increase heat transfer. The same effect is observed in the footwall, although here flow is restricted to a narrower region by fault core permeability. Another interesting feature of Figure 6d is a region of lowered heat transfer at the base of the plume in the footwall block. Fluids in this area, while at high temperatures (Figure 6b), are trapped in a stagnant region in a corner of the model where the fault intersects the brittle-ductile transition. 

[47] Figure 7 compares the distribution of thermal activity at Te Kopia geothermal field with vertical heat flux at the surface of the model. Geothermal expression at Te Kopia, which includes fumaroles, steam-heated acid sulphate lakes, mud volcanoes, and regions of hydrothermally altered and barren ground [Bignall and Browne, 1994], occurs primarily in the footwall block and scarp of the Paeroa Fault, a 30 km long, active, normal fault within the TVZ [Berryman et al., 2008]. The fault scarp has been uplifted to a height of ~220 m at Te Kopia, and Bignall and Browne [1994] suggest that geothermal expression in the uplifted and back-tilted footwall block has evolved in response to a gradual lowering of the water table. This feature of the geothermal field’s evolution is not accounted for in our model. Te Kopia has an estimated heat output of 125–250 MW [Bibby et al., 1995], which is consistent with the heat output of the modeled plume. 

[48] Because we have not accounted for local topography, permeability heterogeneity, or a complex fault geometry, comparisons between the model and reality must necessarily discuss broad trends. Spatially, the thermal area and, in particular, regions of ground altered by hydrothermal activity at Te Kopia, e.g., mineralization, clay formation, demonstrate elongation along the strike of the fault. This is consistent with modeled heat flux in the surface of the footwall (Figure 7b), which demonstrates a similar along-strike trend. The thermal area at Te Kopia extends a greater distance into the footwall block than the modeled field, although this may be due to topographic flows in the back-tilted block that are not accounted for in the model. The modeled plume also demonstrates an elongated, low-level heat flux anomaly in the hanging wall, which is not present to the same extent at Te Kopia. Here, geothermal expression is limited to the Murphy’s Farm thermal spring, which are located to the northwest of the main thermal area. This suggests that the heat source for convection at Te Kopia does not extend into the hanging wall to the same extent that it does in the model. 

### 3.1. Relationship Between Deep Heat Source and Plume Structure 

[49] The position and structure of the modeled hydrothermal plume depends on the position of the deep heat source in relation to the structural permeability of the fault. Figures 6e–6g show vertical structure for plumes localized on heat sources that are displaced from the center of the model domain. In circumstances where the heat source is largely confined to the footwall block, upflow is tight, concentrated, and deflected along the underside of the fault core for maximum expression within an elongated zone at the fault scarp. With further displacement of the heat source into the footwall, the influence of structural permeability on the plume is lessened; at a sufficient distance the plume returns to a vertical orientation (e.g., Figure 6a). 

[50] Displacement of the heat source into the hanging wall (Figure 6g) results in a larger hanging wall upflow zone, and 

204 

DEMPSEY ET AL.: HYDROLOGICAL EFFECTS OF DIP-SLIP FAULT RUPTURE ON A HYDROTHERMAL PLUME 

Figure 8. Anomalous heat flux induced by coseismic perturbation of the pore-pressure at three different times after the earthquake: (a) 1 day, (b) 62 days, and (c) 3 years. Contours show the change in heat flux, ΔqT, and vectors indicate direction. Both contour intervals and vector dimensions are reduced an order of magnitude from Figures 8a to 8b, and from Figures 8b to 8c. The position of the fault is indicated by a black and white dashed line. 

decreased deflection of the plume. Surface heat flow is distributed across a greater area of the hanging wall, while for a given depth, lower temperatures generally prevail. 

## 4. Pore-Pressure Disturbances 

[51] As discussed in section 2.2, there are several distinct features of the coseismic stress change that may affect flow at the surface. In summary these are: an increase in pressure in the hanging wall at a depth of 6–8 km; a decrease in pressure in the footwall at similar depths; and an increase in pressure at the surface in both fault blocks (see Figure 3). The first two effects are associated with the fault displacement gradient that occurs at the lower tip of the fault as coseismic slip tapers to zero (see Figure 3b, inset). The near-surface pressure increase is caused by an increase in the horizontal compressive stress as the two fault blocks withdraw from one another during the earthquake. In this section, we consider hydrological changes in response to 

the sum of these stress effects, as well as the contribution of each. Stress effects are denoted by their location, i.e., horizontal compression at the surface and the arrest of fault slip at brittle-ductile depths, and are broadly differentiated as occurring above and below a depth of 3.5 km, respectively. 

[52] Figure 8 shows the effects of a diffusing pore-pressure anomaly on heat transport within the geothermal system, for three different times following the modeled earthquake (1 day, 62 days, and 3 years). The heat flux anomaly, defined here as the difference between the seismically perturbed and steady state heat flux distributions, is approximately an order of magnitude less in each successive plot (as are the colorscales). This simulation considers the total pore-pressure anomaly, i.e., both the surface and the deeper slip-arrest components. 

[53] In response to the coseismic near-surface stress increase, vertical heat flux is increased through a 3 km wide region at the surface of the model. A maximum increase of >20 Wm<sup>–2</sup> is observed at the footwall scarp, where the maximum steady state outflow also occurs (see Figures 6 and 7). A corresponding increase in mass flux in the adjacent hanging wall has a lesser effect on geothermal heat output due to relatively low preseismic heat transfer in this fault block. 

[54] The heat flux anomaly is solely comprised of an increased mass flux; the contribution of increased fluid enthalpy is negligible. This is a limitation of the single porosity model, which enforces thermal equilibrium between the fluid and rock matrix, rather than a true representation of postseismic behavior. Indeed, temperature changes of 5–10<sup>�</sup> C have been documented at mid-ocean ridge hydrothermal systems following nearby earthquakes [Johnson et al., 2000; Dziak et al., 2003]; however, modeling of this transient effect, whether it is caused by permeability or pore pressure changes, would require a dual porosity description of fracture flow. In our single porosity model, coseismic temperature changes are buffered by the large thermal mass of the matrix. The extent to which anomalous heat transfer is over or underestimated by not accounting for temperature transients depends on the magnitude of the likely temperature change relative to the natural state temperature. In our model, surface temperatures in the upflow zone are ~175<sup>�</sup> C; a temperature change of 10<sup>�</sup> C would then modify anomalous heat flow by less than 10%. 

[55] Pressure anomalies induced by slip-arrest at the base of the fault have contrasting effects on heat transfer in the different fault blocks. In the footwall, an abrupt decrease in pressure creates a tendency for fluids to be drawn toward the center of the pressure drop. This results in a decrease in vertical velocity above the pressure drop, which when superimposed on a broad trend of vertical heat flux produces a negative heat flux anomaly. Effectively, hot, buoyant upflow that is guided along the underside of the fault plane is restrained by a suction created by rock expansion near the fault-tip. The opposite effect is observed in the hanging wall, where an increase in pressure causes expulsion of fluids in a radial direction from the center of the pressure increase. However, because natural-state heat flux in this region is relatively low (Figure 6d), the associated heat-flux anomaly is small. 

[56] Fluid pressure disturbances caused by the modeled earthquake are redistributed by mass transfer toward 

205 

DEMPSEY ET AL.: HYDROLOGICAL EFFECTS OF DIP-SLIP FAULT RUPTURE ON A HYDROTHERMAL PLUME 

pressure lows and away from pressure highs. These flows, which are resisted by fluid viscosity and crustal permeability, occur slowly over periods of months to years. Furthermore, the pressure disturbance decays in magnitude as it propagates away from the source and is diffused within a larger volume of rock. Two months after the modeled earthquake, heat flux anomalies are approximately one order of magnitude less (Figure 8b) than their immediate post-seismic values, although surface heat flux still exceeds natural state conditions. Slip-arrest pressure anomalies, which are larger in magnitude than the surface anomaly (Figure 3), have migrated upward from midcrustal depths (6–8 km) and are beginning to exert an influence on surface flow. The initially local negative heat flux anomaly developed at the bottom of the footwall has migrated to a depth of 5 km and is now much broader. This feature continues to migrate upward, nullifying the positive heat flux anomaly produced by surface stress increases after a period of 200 days. 

[57] In contrast, the positive heat flux anomaly at the base of the hanging wall produced by coseismic compression of the midcrust, propagates upward and reinforces the positive heat flux anomaly at the surface. The additive nature of these pressure disturbances contribute to a positive heat flux anomaly throughout the hanging wall that exceeds the corresponding negative anomaly in the footwall. Furthermore, the low permeability fault core operates as an effective barrier between the adjacent high and low pressure disturbances, which are permitted to propagate outward into their respective fault blocks, but do not interfere with one another. 

### 4.1. Mass Discharge 

[58] Measurements of excess streamflow following earthquakes capture the anomalous vertical mass flux rate integrated over the area of the stream catchment. An analogous measure is obtained from the model by integrating anomalous mass flux rates at the surface of the geothermal field for the period following an earthquake (Figure 9a). At natural state, mass is ejected from the geothermal upflow zone at a rate of 360 kg s<sup>–1</sup> . The immediate effect of the modeled earthquake is to increase mass flux through the geothermal system by 740 kg s<sup>–1</sup> , an increase of 206%. This increase is termed the excess flow. In comparison, Muir-Wood and King [1993] noted increases in river flow of 40% following the M 7.3, 1959 Hegben Lake earthquake, Montana, and the M 6.9, 1980 Irpinia earthquake, southern Italy, and an increase of 200% following the M 7.0, 1983 Borah Peak earthquake, Idaho. For these earthquakes, excess mass flow is interpreted in the context of natural, preseismic flow rates, which for Idaho were comparatively lower than Montana and Italy. Expulsion of fluids therefore had a larger proportional effect for Idaho. In these examples, both natural state and anomalous flow rates are 1–2 orders of magnitude larger than those modeled here. In terms of a natural state flow rate, this reflects the discrepancy between the proportion of meteoric rainwater that infiltrates and is circulated through the crust (~2% for the TVZ; Weir [2009]) versus the larger proportion that ends up as runoff in streams and rivers. In the case of order-of-magnitude greater coseismic fluid expulsion, this is probably due to a comparatively larger magnitude pore-pressure disturbance associated with large magnitude earthquakes (M = 6.9, 7.0, and 7.3, cf., modeled M = 5.7). 

[59] Excess flow caused by the modeled earthquake recedes from its immediate postseismic maximum, with half-, quarter-, and one-eighth-maximum flows recorded 2.6, 5.8, and 9 days after the earthquake. Excess mass flow continues to decay toward zero over the following 10 years representing a return to steady state, preseismic conditions; during this time the signal-to-noise ratio rapidly decreases. The likelihood of detecting a postseismic flow signature is probably low after the first 20 days, because excess flow has receded to less than 10% above natural state. This is in contrast to examples presented in Muir-Wood and King [1993] where excess mass flow is recorded for 6–8 months following the earthquake. These long-lived changes likely represent more permanent perturbation to the subsurface permeability structure through the creation or reactivation of highly conductive channels. 

[60] Despite indications of the untransformed modeled values (Figure 9a, inset), excess flow from the geothermal field does not exhibit (under log transformation) the exponential decay demonstrated by Briggs [1991] for excess streamflow following the 1989, M 7.1 Loma Prieta earthquake, California. Nor does it exhibit a linear decrease proposed by Muir-Wood and King [1993] for increased streamflow following three major normal fault earthquakes in Montana, Idaho, or southern Italy. Although both the modeled and observed behavior are in agreement that a postseismic decline occurs, and, in the case of Loma Prieta, that this decline is not constant in time, the precise mathematical form of the decline is not reproduced here. Instead, the modeled mass flow decline is more rapid and appears to be governed by a power-law. 

[61] The disagreement in mass flow behavior is a secondorder effect; relative changes in mass flow are in agreement with those following the Iripinia earthquake mentioned previously. Nevertheless, the divergence between model and observation merits further discussion. One possible cause of slower mass flow decay rate would be a decrease in pressure-dependent permeability as the near-surface pressure anomaly is dissipated in the postseismic period. Theoretical [Gangi, 1978] and field investigations [Nathenson, 1999] indicate that fracture permeability is enhanced where elevated pore-pressure sustains a wider fracture aperture. Experimental results [Faoro et al., 2012] have demonstrated postpressurization relaxation of fracture aperture, and thus permeability, by diffusion of a pore pressure anomaly, initially confined to the fracture, into the matrix. Alternatively, enhanced fracture flow away from a pressure anomaly could also account for permeability relaxation. This then would exert a braking effect on mass flow that is not accounted for by the model. 

[62] Excess mass flow profiles for the full pore-pressure disturbance (Figure 9, black squares) and for a simulation containing only the surface component (open circles), indicate that changes to surface outflow are, in general, well described by surface processes alone. Profiles are indistinguishable for the first month, after which time migration of the deeper slip-arrest anomaly begins to exert an effect at the surface. An initial, small, increase in mass flow is associated with the surface arrival of the hanging wall highpressure anomaly (see Figure 8b), and this is followed by a decrease in flow accompanying the later arrival of the footwall low-pressure anomaly (see Figure 8c). Interestingly, 

206 

DEMPSEY ET AL.: HYDROLOGICAL EFFECTS OF DIP-SLIP FAULT RUPTURE ON A HYDROTHERMAL PLUME 

Figure 9. (a) Excess total mass flow at the surface in the period following a simulated coseismic porepressure perturbation. Recession of flow is shown on both a log-log and linear (inset) axes. Open circles are for a simulation incorporating only pressure changes at depths shallower than 3.5 km. (b) Change in reservoir heat content (see equation (7)) over a period of 8 weeks (56 days) and 10 years (inset) following pore-pressure perturbation. (c, d) Circulation response to a change in fault plane permeability. (c) Excess mass flow averaged over 100 different simulated fault plane ruptures. The marked line shows the average excess flow, while the grey region demarcates two standard deviations from the mean profile. (d) Change in reservoir heat content following changes in fault plane permeability. (e) Excess mass flow and (f) change in reservoir heat content due to both the pore-pressure perturbation and a change in fault plane permeability. 

the difference between the full-disturbance and surface-only profiles corresponds nearly exactly (within an error of 0.1%) to excess flow produced by the slip-arrest-only simulation. This suggests that the diffusive processes modeled here are additive, i.e., that the full phenomenon can be modeled as a superposition of its constituents. 

### 4.2. Reservoir Effects 

[63] Heat stored in the geothermal reservoir can be exploited for electricity generation through the extraction 

of geothermal fluids. The size of the geothermal reservoir is quantified in terms of stored heat [Grant and Bixley, 2011], calculated as 

where ERES is heat energy in the reservoir, rC is the specific heat of wetted rock (taken as 2.5 � 10<sup>6</sup> Jm<sup>�3</sup> K<sup>�1</sup> ), and T0 is a reference temperature representing the end point of the thermodynamic cycle (taken as atmospheric 20<sup>�</sup> C). We 

207 

DEMPSEY ET AL.: HYDROLOGICAL EFFECTS OF DIP-SLIP FAULT RUPTURE ON A HYDROTHERMAL PLUME 

calculate stored heat for the upper 2 km of the model domain, which corresponds to the porous Quaternary volcanic deposits that are typically targeted for production in the TVZ. Because waste-water is generally reinjected at temperatures greater than 20<sup>�</sup> C, this method overestimates reservoir heat content; however, because we are interested in the reservoir response to an earthquake, i.e., changes relative to some steady state value, the approximation is sufficient. 

[64] Figure 9b shows changes in reservoir heat content relative to a preseismic value of ~9000 PJ. Deviation from the natural state is caused by increased heat fluxes across the boundaries delineating the reservoir, i.e., a horizontal plane at the surface, and a second at a depth of 2 km. Reservoir heat content initially declines in response to the earthquake, largely due to fluid expulsion associated with near-surface stress changes. The decline is arrested after a period of 4–5 months, and is eventually recovered by the background rate of reservoir heating that characterizes the quasi-steady state of the system. The maximum reduction in ERES is ~60–80 TJ and the perturbation is therefore minor in comparison to the absolute size of the reservoir. 

[65] More significant changes in reservoir heat content require heat flux perturbations that operate on longer timescales. For example, self-sealing geothermal reservoirs that develop low permeability, insulating cap regions above the upflow zone show increases in heat content of ~300 PJ over a period of 100 kyr [Dempsey et al., 2012c]. Similarly, fault rupture through the capzone, which permits enhanced mass flow at the surface for a period of several thousand years, is accompanied by a drop in heat content of ~80 PJ. In contrast, the reservoir perturbations considered here, including pressure and permeability disruptions, suggests that significant changes in the natural state of the reservoir occur over long time periods. 

## 5. Disruption of Fault Gouge 

[66] The immediate effect of fault gouge rupture is an increase in advective heat transfer across a fault plane that was previously restricted to conduction. Buoyant upflow, previously deflected along the underside of the fault and largely confined to the footwall block, now rises directly across the fault into the slightly cooler hanging wall. Cross-fault heat flux, which averaged 10 MW in the preseismic period, is increased to 215 MW. Depending on the timescales associated with healing and sealing processes (e.g., hydrothermal precipitation; Grindley and Browne [1976]; Olsen et al. [1998]; Dempsey et al. [2012c]), the increased heat transfer will have important implications for the postseismic configuration of geothermal fluid flow. If self-sealing of the fault gouge is rapid, then an associated rapid-return to preseismic fluid flow should be expected, i.e., low-level coupling between footwall and hanging wall upflow. 

[67] Figure 9c shows the mean excess-mass-flow time series, along with two standard deviation limits (grey shading), for 100 simulations of a disrupted fault gouge (e.g., Figure 5). Fault rupture is accompanied by an immediate increase in mass flow of 17 kg s<sup>–1</sup> , which builds to a postseismic maximum of 20 kg s<sup>–1</sup> occurring 1–3 weeks after the earthquake. This is substantially lower than the excess mass flow initially produced by the pore pressure 

disturbance (Figure 9a). Mass flow then recedes to a new steady state that is 14–15 kg s<sup>–1</sup> higher than preseismic levels. The initial response, in which mass flow builds, is similar to that recorded following the M 7.1, 1989 Loma Prieta earthquake, California, which also demonstrated increasing flow rates for a period of several days after the earthquake. In this instance, the postseismic hydrologic response was attributed to an increase in aquifer permeability permitting increased groundwater flow [Rojstaczer and Wolf, 1992] followed by a slow decay in streamflow as the level of the water table dropped and the associated hydraulic gradient lowered. In our simulation, decay in mass flow from its postseismic high is evident (Figure 9c, inset), although less pronounced. 

[68] Changes in heat content of the geothermal reservoir in response to an increase in cross-fault permeability are relatively easier to conceptualize than surface mass flow. Except at very short timescales, we observe an approximately linear increase in heat content for the 10 years following fault rupture (Figure 9d, inset). Because the reservoir considered here is theoretically constrained by horizontal surfaces at z = 0 and –2 km, the linear trend in Figure 9d indicates that (i) basal heat flux into the reservoir exceeds surface heat flux out of the reservoir, and (ii) the total heat flux imbalance in the reservoir is constant over the 10 year postseismic period (such that integration in time produces a linear trend). Variability in the heat flux profiles also reflects the time integration, with an increasing spread with time. This feature is derived from the relatively constant spread recorded in the excess mass flow profiles (Figure 9c), and the accumulating effect of the excess fluid throughput on the heating of the reservoir. 

[69] Over a period of 10 years, the total perturbation to reservoir heat content is orders-of-magnitude larger than that associated with coseismic pore-pressure disturbances (Figure 9b). This is a consequence of the permanent, long-lived changes to the fluid flow state associated with fault permeability disruption, as opposed to the temporary influence of a pore-pressure perturbation. 

### 5.1. Combined Simulation 

[70] The combined effects of a diffusing pore-pressure disturbance and a fault-core permeability disruption are considered in Figures 9e–9f and 10. Once more, a set of 100 different fault plane ruptures (Figure 9) was generated and 10 years of flow simulated with the full-crust pore-pressure disturbance from section 4 superimposed. Heat flux anomalies associated with one of these simulations (corresponding to the permeability disruption shown in Figure 5) is shown for three different times following the modeled earthquake (Figure 10). 

[71] Excess mass flow of the combined pore-pressure/ permeability disruption simulations demonstrates characteristics identified in simulations of each of the constituent perturbations (Figures 9a–9d). For example, the short-term response is dominated by a large increase in mass flow associated with the near-surface pore-pressure anomaly. Recession of the initial flow rate over the first two weeks is rapid, and similar to that shown in Figure 9a. However, at longer time scales the permeability effect dominates by imposing, and sustaining, a higher natural-state flow rate. 

208 

DEMPSEY ET AL.: HYDROLOGICAL EFFECTS OF DIP-SLIP FAULT RUPTURE ON A HYDROTHERMAL PLUME 

Figure 10. Anomalous heat flux induced by pore-pressure and fault permeability perturbations at three different times after the earthquake: (a) 1 day, (b) 6 days, and (c) 63 days. Contours show the change in heat flux, ΔqT, and vectors indicate direction. Note that, in contrast to Figure 8, contour intervals and vector magnitudes in Figures 10a–10c are identical. The position of the fault is indicated by a black and white dashed line. The specific change to fault core permeability applied in this simulation is shown in Figure 5. 

[72] This superposition of behaviors is also evident in the reservoir response to the modeled earthquake. On short time scales, i.e., <100 days, the pore-pressure effect dominates (Figures 9b) and an initial drop in heat content, followed by a slow recovery, is recorded. Over longer time periods, permanent changes to fault-plane permeability favor a steady heat flux into the reservoir, such that heat content increases at a constant rate over the next 10 years (Figure 9d). 

[73] A break-down in the fluid baffling properties of the fault core results in an immediate increase in the cross-fault coupling between the upflow zones in the adjacent fault blocks. Figure 10 shows that, in many locations, a reasonably large (>20 Wm<sup>–2</sup> ) fault-normal heat-flow anomaly is generated. In the preseismic period, cross-fault heat flux was dominantly conductive (>90%) and totaled ~10 MW; immediately following the earthquake, this is increased to ~215 MW of heat transfer from the footwall to the hanging wall for depths shallower than 6 km. The effects on heat flux 

of the near-surface pore-pressure anomaly, and the midcrustal slip-arrest anomaly in the footwall, detailed in section 4, are also evident at this early stage. 

[74] Cross-fault fluid transfer recedes from its initial maximum in the days following the earthquake, and the near-fault heat-flow anomaly widens as the effects of fluid diffusion penetrate further into the fault blocks. Heat flux across the fault plane is reduced to 80 MW after one week, and to 50 MW after two months. The diminished role of the fault as a vertical flow-partition also exerts an effect on the fluid flow distribution. Whereas before the low permeability fault core encouraged flow in both fault blocks to localize in an up-dip direction, its reduced effectiveness as a physical flow barrier now permits vertical upflow of footwall fluids into the hanging wall. As a consequence, geothermal upflow migrates from the footwall scarp into the hanging wall and away from the fault. Although not modeled here, permeability sealing of the fault gouge in the postseismic period as a result of hydrothermal mineralization would be expected to halt and reverse this migration. 

## 6. Conclusion 

[75] Structural permeability has long been considered a key factor in localizing and shaping geothermal upflow in the Taupo Volcanic Zone [e.g., Grindley and Browne, 1976; Wood et al., 2001]. We have presented models of a hydrothermal plume evolved in the presence of dip-slip faults that operate as fluid baffles. An impermeable fault severely impairs coupling between fluid flow in the footwall and hanging wall blocks, except via conductive heat transfer across the fault. In the simulations presented here, an upflow zone in the footwall that transports 115 MW is coupled to a 100 MW upflow zone in the hanging wall via a 10 MW cross-fault conductive link. Stated differently, when a perfectly insulating fault is modeled, 125 and 90 MW upflows are developed in the footwall and hanging wall, respectively. 

[76] The fault, operating in a similar manner to the partition in conjugate coupled-convection problems, also serves to localize upflow into its near vicinity. In the footwall, such flow is intuitive, because rising fluids are physically blocked by the fault core and deflected up-dip. In the hanging wall, instead of rising vertically, upflow is also localized along the fault plane; this is probably due to the thermodynamic stability of upflow along a heated partition, and the horizontal hydrostatic pressure of downflow that occurs elsewhere in the fault block. 

[77] In addition to long-term influences on fluid flow, we have considered two features of fault rupture that introduce an immediate perturbation to steady state flow: coseismic changes in pore-pressure and permeability. The pore-pressure perturbation is derived from a separate, mechanical model for fault rupture on a dip-slip normal fault, and is comprised of a near-surface increase in pressure, and antisymmetric pressure-change lobes at midcrustal depths. We show that deep pressure changes have a negligible effect on surface geothermal expression; in comparison, near-surface horizontal compression caused by the movement of fault blocks away from one another results in a large increase in surface heat and mass flow. However, anomalous 

209 

DEMPSEY ET AL.: HYDROLOGICAL EFFECTS OF DIP-SLIP FAULT RUPTURE ON A HYDROTHERMAL PLUME 

flow rates rapidly decline over a period of several weeks as the pore-pressure disturbance is diffused. 

[78] In contrast to the pore-pressure perturbation, changes in fault permeability produce a smaller short-term effect on surface expression but play an important role in the longerterm configuration of geothermal circulation. Following an increase in cross-fault permeability, which approximates the damaging effect of fault rupture on impermeable fault gouge, mass flow builds to a new steady state that is approximately 5% higher than preseismic flow rates. This figure is sensitive to the degree of fault damage, e.g., a greater increase in permeability permits a greater increase in mass flow, but, more importantly, results in a migration of the locus of geothermal expression. Upflow, which had previously localized in the footwall, now begins to migrate into the hanging wall and away from the fault. 

[79] The numerical methods presented here consider oneway coupling between the mechanical and hydrothermal systems, i.e., the earthquake, and its effects, perturb natural-state fluid-flow. In practice, coupling in both the preand postseismic phases is likely two-way to some degree; indeed, diffusion of pore fluids at depth during the postseismic period can exert control on the subsequent distribution of aftershocks [Miller et al., 2004; Lindman et al., 2010]. Although the approach employed here accounts for diffusion of pore-fluids at depth, we have not attempted to represent the reverse coupling. Implementation of this interaction would produce an intriguing feedback loop, in which fault failure induces a fluid flow anomaly, which may induce subsequent failure on other fault planes and further fluid flow anomalies. 

[80] Acknowledgments. This research was funded by the Tertiary Education Commission through the TADS scheme and by the Energy Education Trust of New Zealand. The authors wish to thank George Zyvoloski for assistance in meshing FEHM models and insightful discussions, and two anonymous reviewers for helpful comments that improved the quality of this manuscript. 

## References 

Anderson, H., E. Smith, and R. Robinson (1990), Normal Faulting in a Back Arc Basin: Seismological Characteristics of the March 2, 1987, Edgecumbe, New Zealand, Earthquake, J. Geophys. Res., 95, 4709–4723. 

Arehart, G. B., C. P. Wood, B. W. Christenson, P. R. L. Browne, and K. A. Foland (1997), Timing of volcanism and geothermal activity at Ngatamariki and Rotokawa, New Zealand, in Proc. 19th NZ Geotherm. Workshp., 117–122. 

Berryman, K., P. Villamor, I. Nairn, R. Van Dissen, J. Begg, and J. Lee (2008), Late Pleistocene surface rupture history of the Paeroa Fault, Taupo Rift, New Zealand, N. Z. J. Geol. Geophys., 51, 135–158. 

Bibby, H. M., T. G. Caldwell, F. J. Davey, and T. H. Webb (1995), Geophysical evidence on the structure of the Taupo Volcanic Zone and its hydrothermal circulation, J. Volcan. Geotherm. Res., 68, 29–58. 

Bignall, G., and P. R. L. Browne (1994), Surface hydrothermal alteration and evolution of the Te Kopia thermal area, New Zealand, Geothermics, 23, 645–658. 

Bjornsson, G., O. Flovenz, K. Saemundsson, and E. M. Einarsson (2001), Pressure changes in Icelandic geothermal reservoirs associated with two large earthquakes in June 2000, in Proc. 26th Workshp. Geotherm. Reserv. Eng., Stanford University. 

Briggs, R. O. (1991), Effects of Loma Prieta earthquake on surface waters in Waddell Valley, Water Resour Bull., 27, 991–999. 

Bryan, C. J., S. Sherburn, H. M. Bibby, S. C. Bannister, and A. W. Hurst (1999), Shallow seismicity of the central Taupo Volcanic Zone, New Zealand: its distribution and nature, N. Z. J. Geol. Geophys., 42, 533–542. Byerlee, J. (1993), Model for episodic flow of high-pressure water in fault zones before earthquakes, Geology, 21, 303–306. 

Caine, J. S., J. P. Evans, and C. B. Forster (1996), Fault zone architecture and permeability structure, Geology, 24, 1025–1028. 

Caine, J. S., R. L. Bruhn, and C. B. Forster (2010), Internal structure, fault rocks, and inferences regarding deformation, fluid flow, and mineralization in the seismogenic Stillwater normal fault, Dixie Valley, Nevada, J. Struct. Geol., 32, 1576–1589, doi:10.1016/j.jsg.2010.03.004. 

Chaudhuri, A., H. Rajaram, H. Viswanathan, G. Zyvoloski, and P. Stauffer (2009), Buoyant convection resulting from dissolution and permeability growth in vertical limestone fractures, Geophys. Res. Lett., 36, doi:10.1029/2008GL036533. 

- Coumou, D., T. Driesner, and C. A. Heinrich (2008), The Structure and Dynamics of Mid-Ocean Ridge Hydrothermal Systems, Science, 321, 1825–1828, doi:10.1126/science.1159582. 

- Cox, S. C., H. K. Rutter, A. Sims, M. Manga, J. J. Weir, T. Ezzy, P. A. White, T. W. Horton, and D. Scott (2012), Hydrological effects of the MW 7.1 Darfield (Canterbury) earthquake, 4 September 2010, New Zealand, N. Z. J. Geol. Geophys., 321, doi:10.1080/00288306. 2012.680474. 

- Dempsey, D. E., S. M. Ellis, R. A. Archer, and J. V. Rowland (2012a), The energetics of normal earthquakes on dip-slip faults, Geology, 40, 275–278, doi:10.1130/G32643.1. 

- Dempsey, D. E., S. M. Ellis, J. V. Rowland, and R. A. Archer (2012b), The role of frictional plasticity in the evolution of normal fault systems, J. Struct. Geol., in press, doi:10.1016/j.jsg.2012.03.001. 

Dempsey, D. E., J. V. Rowland, G. A. Zyvoloski, and R. A. Archer (2012c), Modeling the effects of silica deposition and fault rupture on natural geothermal systems, J. Geophys. Res., in press, doi:10.1029/2012JB009218. Deng, K., S. Zhou, R. Wang, R. Robinson, C. Zhao, and W. Cheng (2010), Evidence that the 2008 MW 7.9 Wenchuan Earthquake Could Not Have Been Induced by the Zipingpu Reservoir, Bull. Seis. Soc. Am., 100, 2805–2814, doi:10.1785/0120090222. 

- Dziak, R. P., W. W. Chadwick Jr., C. G. Fox, and R. W. Embley (2003), Hydrothermal temperature changes at the southern Juan de Fuca Ridge associated with MW 6.2 Blanco Transform earthquake, Geology, 31, 119–122. 

- Ellis, S. M., J. Beavan, D. Eberhart-Phillips, and B. Stöckhert (2006), Simplified models of the Alpine Fault seismic cycle: stress transfer in the mid-crust, Geophys. J. Int., 166, 386–402, doi:10.1111/j.1365246X.2006.02917.x. 

- Faoro, I., D. Elsworth, and C. Marone (2012), Permeability evolution during dynamic stressing of dual permeability media, J. Geophys. Res., 117, doi:10.1029/2011JB008635. 

- Gangi, A. F. (1978), Variation of Whole and Fractured Porous Rock Permeability with Confining Pressure, Int. J. Rock Mech. Min. Sci. & Geomech. Abstr., 15, 249–257. 

- Ge, S., and S. C. Stover (2000), Hydrodynamic response to strike- and dipslip faulting in a half-space, J. Geophys. Res., 105, 25,513–25,524. 

- Grant, M. A., and P. F. Bixley (2011), Geothermal Reservoir Engineering (Second Edition), Academic Press, Burlington, MA. 

- Grecksch, G., F. Roth, and H.-J. Kümpel (1999), Coseismic well-level changes due to the 1992 Roermond earthquake compared to static deformation of half-space solutions, Geophys. J. Int., 138, 470–478. 

- Grindley, G. W., and P. R. L. Browne (1976), Structural and Hydrological Factors Controlling the Permeabilities of Some Hot-Water Geothermal Fields, Proceedings 2nd U.N. Symposium on Development and Use of Geothermal Resources, 377–386. 

- Hanks, T. C., and H. Kanamori (1979), A Moment Magnitude Scale, J. Geophys. Res., 84, 2348–2350. 

Heise, W., T. G. Caldwell, H. M. Bibby, and S. C. Bannister (2008), Threedimensional modelling of magnetotelluric data from the Rotokawa geothermal field, Taupo Volcanic Zone, New Zealand, Geophys. J. Int., 173, 740–750, doi:10.1111/j.1365-246X.2008.03737.x. Hetland, E. A., and B. H. Hager (2006), The effects of rheological layering on post-seismic deformation, Geophys. J. Int., 166, 277–292, doi:10.1111/j.1365-246X.2006.02974.x. 

- Husen, S., R. Taylor, R. B. Smith, and H. Healser (2004), Changes in geyser eruption behavior and remotely triggered seismicity in Yellowstone National Park produced by the 2002 M 7.9 Denali fault earthquake, Alaska, Geology, 32, 537–540, doi:10.1130/G20381.1. 

- Ikari, M. J., D. M. Saffer, and C. Marone (2009), Frictional and hydrologic properties of clay-rich fault gouge, J. Geophys. Res., 114, doi:10.1029/ 2008JB006089. 

- Ingebritsen, S. E., and S. A. Rojstaczer (1996), Geyser periodicity and the response of geysers to deformation, J. Geophys. Res., 101, 21,891–21,905. 

- Johnson, H. P., M. Hutnak, R. P. Dziak, C. G. Fox, I. Urcuyo, J. P. Cowens, J. Nabelek, and C. Fisher (2000), Earthquake-induced changes in a hydrothermal system on the Juan de Fuca mid-ocean ridge, Lett. Nat., 407, 174–177. 

- Kahveci, K. (2007), Natural Convection in a Partitioned Vertical Enclosure Heated With a Uniform Heat Flux, J. Heat Transfer., 129, 717–726, doi:10.1115/1.2717241. 

Kissling, W. M., and G. J. Weir (2005), The spatial distribution of the geothermal fields in the Taupo Volcanic Zone, New Zealand, J. Volcan. Geotherm. Res., 145, 136–150, doi:10.1016/j.jvolgeores.2005.01.006. 

210 

DEMPSEY ET AL.: HYDROLOGICAL EFFECTS OF DIP-SLIP FAULT RUPTURE ON A HYDROTHERMAL PLUME 

Knott, S. D, A. Beach, P. J. Brockbank, J. L. Brown, J. E. McCallum, and A. I. Welbon (1996), Spatial and mechanical controls on normal fault populations, J. Struct. Geol., 18, 359–372. 

- Kusznir, N. J., G. Marsden, and S. S. Egan (1991), A flexural-cantilever simple-shear/pure-shear model of continental lithosphere extension: applications to the Jeanne d’Arc Basin, Grand banks and Viking Graben, North Sea, in The Geometry of Normal Faults, Geol. Soc. Spec. Pub, vol. 56, edited by A. M. Roberts, G. Yielding and B. Freeman, pp. 41–60, Geological Society, London. 

- Leary, P. C., and F. Al-Kindy (2002), Power-law scaling of spatially correlated porosity and log(permeability) sequences from north-central North Sea Brae oilfield well core, Geophys. J. Int., 148, 426–442. 

- Lindman, M., B. Lund, and R. Roberts (2010), Spatiotemporal characteristics of aftershock sequences in the South Iceland Seismic Zone: interpretation in terms of pore pressure diffusion and poroelasticity, Geophys. J. Res., 183, 1104–1118. 

- López, D. L., and L. Smith (1996), Fluid flow in fault zones: Influence of hydraulic anisotropy and heterogeneity on the fluid flow and heat transfer regime, Water Resour. Res., 32, 3227–3235. 

- Manga, M., E. E. Brodsky, and M. Boone (2003), Response of streamflow to multiple earthquakes, Geophys. Res. Lett., 30, doi:10.1029/2002GL016618. 

- Manga, M., I. Beresnev, E. E. Brodsky, J. E. Elkhoury, D. Elsworth, S. E. Ingebritsen, D. C. Mays, and C. -Y. Wang (2012), Changes in permeability caused by transient stresses: field observations, experiments, and mechanisms, Rev. Geophys., 50, doi:8755-1209/12/ 2011RG000382. 

- Mannington, W., M. O’Sullivan, and D. Bullivant (2004), Computer modelling of the Wairakei-Tauhara geothermal system, New Zealand, Geothermics, 33, 401–419, doi:10.1016/j.geothermics.2003.09.009. 

- McLellan, J. G., N. H. S. Oliver, B. E. Hobbs, and J. V. Rowland (2010), Modelling fluid convection stability in continental faulted rifts with applications to the Taupo Volcanic Zone, New Zealand, J. Volcan. Geotherm. Res., 190, 109–122, doi:10.1016/j.jvolgeores.2009.11.015. 

- McNabb, A. (1975), Geothermal physics, Appl. Math. Tech. Rep., 32, DSIR, Wellington, New Zealand. 

- Miller, S. A., C. Collettini, L. Chiaraluce, M. Cocco, M. Barchi, and B. J. P. Kaus (2004), Aftershocks driven by a high-pressure CO2 source at depth, Lett. Nat., 427, 724–727, doi:10.1038/nature02251. 

- Mogi, K., H. Mochizuki, and Y. Kurokawa (1989), Temperature changes in an artesian spring at Usami in the Izu Peninsula (Japan) and their relation to earthquakes, Tectonophys., 159, 95–108. 

- Montgomery, D. R., and M. Manga (2003), Streamflow and Water Well Responses to Earthquakes, Science, 300, 2047–2049, doi:10.1126/ science.1082980. 

- Montgomery, D. R., H. M. Greenberg, and D. T. Smith (2003), Streamflow response to the Nisqually earthquake, Earth Planet Sci. Lett., 209, 19–28, doi:10.1016/S0012-821X(03)00074-8. 

- Morrow, C. A., L. Q. Shi, and J. D. Byerlee (1984), Permeability of Fault Gouge Under Confining Pressure and Shear Stress, J. Geophys. Res., 89, 3193–3200. 

- Muir-Wood, R., and G. C. P. King (1993), Hydrological Signatures of Earthquake Strain, J. Geophys. Res., 98, 22,035–22,068. 

- Nathenson, M. (1999), The dependence of permeability on effective stress from flow tests at hot dry rock reservoirs at Rosemanowes (Cornwall) and Fenton Hill (New Mexico), Geothermics, 28, 315–340. 

- Neuzil, C. E. (2003), Hydromechanical coupling in geologic processes, Hydrogeol. J., 11, 41–83, doi:10.10007/s10040-002-0230-8. 

- Nüchter, J. -A., and S. Ellis (2010), Complex states of stress during the normal faulting seismic cycle: Role of midcrustal postseismic creep, J. Geophys. Res., 115, doi:10.1029/2010JB007557. 

- Okada, Y. (1992), Internal deformation due to shear and tensile faults in a half-space, Bull. Seis. Soc. Am., 82, 1018–1040. 

- Olsen, M. P., C. H. Scholz, and A. Léger (1998), Healing and sealing of a simulated fault gouge under hydrothermal conditions: Implications for fault healing, J. Geophys. Res., 103, 7421–7430. 

- Poulos, S. J., G. Castro, and J. W. France (1985), Liquefaction Evaluation Procedure, J. Geotech. Eng.-ASCE, 111, 772–792. 

- Quilty, E. G., and E. A. Roeloffs (1997), Water-Level Changes in Response to the 20 December 1994 Earthquake near Parkfield, California, Bull. Seis. Soc. Am., 87, 310–317. 

- Rice, J. R., and M. P. Cleary (1976), Some Basic Stress Diffusion Solutions for Fluid-Saturated Elastic Porous Media With Compressible Constituents, Rev. Geophys. Space. Phys., 14, 227–241. 

Rojstaczer, S., and S. Wolf (1992), Permeability changes associated with large earthquakes: An example from Loma Prieta, California, Geology, 20, 211–214. 

Rojstaczer, S., S. Wolf, and R. Michel (1995), Permeability enhancement in the shallow crust as a cause of earthquake-induced hydrological changes, Lett. Nat., 373, 237–239. 

- Rowland, J. V., and R. H. Sibson (2004), Structural controls on hydrothermal flow in a segmented rift system, Taupo Volcanic Zone, New Zealand, Geofluids, 4, 259–283. 

- Rowland, J. V., C. J. N. Wilson, and D. M. Gravely (2010), Spatial and temporal variations in magma-assisted rifting, Taupo Volcanic Zone, New Zealand, J. Volcan. Geotherm. Res., 190, 89–108, doi:10.1016/j.jvolgeores.2009.05.004. 

- Rowland, J. V., and S. F. Simmons (2012), Hydrologic, Magmatic, and Tectonic Controls on Hydrothermal Flow, Taupo Volcanic Zone, New Zealand: Implications for the Formation of Epithermal Vein Deposits, Econ. Geol., 107, 427–457. 

- Saar, M. O., and M. Manga (2004), Depth dependence of permeability in the Oregon Cascades inferred from hydrogeologic, thermal, seismic, and magmatic modeling constraints, J. Geophys. Res., 109, doi:10.1029/ 2003JB002855. 

- Sakakibara, M., H. Amaya, S. Mori, and A. Tanimoto (1992), Conjugate heat transfer between two natural convections separated by a vertical plate, Int. J. Heat Mass Transfer., 35, 2289–2297. 

- Salve, R., and C. M. Oldenburg (2001), Water flow within a fault in altered nonwelded tuff, Water Resour. Res., 37, 3043–3056. 

- Scholz, C. H., and J. T. Engelder (1976), The Role of Asperity Indentation and Ploughing in Rock Friction - I. Apserity Creep and Stick-Slip. Int. J. Rock Mech. Min. Sci. & Geomech. Abstr., 13, 149–154. 

- Sibson, R. H., J. Mc. M. Moore, and A. H. Rankin (1985), Seismic pumping - a hydrothermal fluid transport mechanism, J. Geol. Soc., 131, 653–659. 

- Sibson, R. H. (1994), Crustal stress, faulting and fluid flow, in Geofluids: Origin, Migration and Evolution of Fluids in Sedimentary Basins, Geol. Soc. Spec. Pub., vol. 78, edited by J. Parnell, pp. 69–84, Geological Society, London. 

- Simmons, S. F., and P. R. L. Browne (2000), Hydrothermal Minerals and Precious Metals in the Broadlands-Ohaaki Geothermal System: Implications for Understanding Low-Sulfidation Epithermal Environments, Econ. Geol., 95, 971–999. 

- Skempton, A. W. (1954), The pore pressure coefficients A and B, Geotechnique., 4, 143–147. 

- Stagpoole, V. M., and H. M. Bibby (1998), Electrical resistivity map of the Taupo Volcanic Zone, New Zealand, Version 1.0, Geophysical Map, 11, Institute of Geophysical and Nuclear Sciences, Lower Hutt, New Zealand. 

- Stauffer, P. H., L. H. Auer, and N. D. Rosenberg (1997), Compressible gas in porous media: a finite amplitude analysis of natural convection, Int. J. Heat Mass Transfer, 40, 1585–1589. 

- Talwani, P., J. S. Cobb, and M. F. Schaeffer (1999), In situ measurements of hydraulic properties of a shear zone in northwestern South Carolina, J. Geophys. Res., 104, 14,993‐15,003. 

- Vandemeulebrouck, J., A. W. Hurst, and B. J. Scott (2008), The effects of hydrothermal eruptions and a tectonic earthquake on a cycling crater lake (Inferno Crater Lake, Waimangu, New Zealand), J. Volcan. Geotherm. Res., 178, 271–275, doi:10.1016/j.jvolgeores.2008.06.021. 

- Varol, Y., H. F. Oztop, and A. Koca (2010), Effects of inclination angle on conduction-natural convection in divided enclosures filled with different fluids, Int. Commun. Heat Mass Transfer., 37, 182–191, doi:10.1016/j. icheatmasstransfer.2009.09.016. 

- Villamor, P., and K. Berryman (2001), A late Quaternary extension rate in the Taupo Volcanic Zone, New Zealand, derived from fault slip data, N. Z. J. Geol. Geophys., 44, 243–269. 

- Wallace, L. M., J. Beavan, R. McCaffrey, and D. Darby (2004), Subduction zone coupling and tectonic block rotations in the North Island, New Zealand, J. Geophys. Res., 109, doi:10.1029/2004JB003241. 

- Wang, C.-Y., and Y. Chia (2008), Mechanism of water level changes during earthquakes: Near field versus intermediate field, Geophys. Res. Lett., 35, doi:10.1029/2008GL034227. 

- Wang, C. -Y., and M. Manga (2010), Hydrologic responses to earthquakes and a general metric, Geofluids, 10, 206–216, doi:10.1111/j.1468-8123.2009. 00270.x. 

- Weir, G. J. (2009), A Mathematical Model of Rainfall-Controlled Geothermal Fields, Transp. Porous Med., 77, 323–334, doi:10.1007/s11242-008-9312-y. 

- Wilson, C. J. N., B. F. Houghton, M. O. McWilliams, M. A. Lanphere, S. D. Weaver, and R. M. Briggs (1995), Volcanic and structural evolution of Taupo Volcanic Zone, New Zealand: a review, J. Volcan. Geotherm. Res., 68, 1–28. 

- Wood, C. P., R. L. Brathwaite, and M. D. Rosenberg (2001), Basement structure, lithology and permeability at Kawerau and Ohaaki geothermal fields, New Zealand, Geothermics, 30, 461–481. 

Zhang, Y., and F. Huang (2011), Mechanism of Different Coseismic WaterLevel Changes in Wells with Similar Epicentral Distances of Intermediate Field, Bull. Seis. Soc. Am., 101, 1531–1541, doi:10.1785/0120100104. 

Zyvoloski, G. A. (2007), FEHM: A control volume finite element code for simulating subsurface multi-phase multi-fluid heat and mass transfer, Doc. LAUR-07-3359, Los Alamos, Natl. Lab., Los Alamos, N. M. 

211 

