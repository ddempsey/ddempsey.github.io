# Modeling caprock bending stresses and their potential for induced seismicity during CO2 injection

**Authors:** David Dempsey, Sharad Kelkar, Rajesh Pawar, Elizabeth Keating, David Coblentz  
**Published in:** International Journal of Greenhouse Gas Control (2014)  
**DOI (version of record):** https://doi.org/10.1016/j.ijggc.2014.01.005  
**This copy:** Accepted manuscript (peer-reviewed, author's version). Text extracted from the PDF at https://ddempsey.github.io/papers/2014-dempsey-modeling-caprock-bending-stresses-their/dempsey2014-modeling-caprock-bending.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** Accepted manuscript. © 2014. This manuscript version is made available under the CC-BY-NC-ND 4.0 license https://creativecommons.org/licenses/by-nc-nd/4.0/. The version of record is available at https://doi.org/10.1016/j.ijggc.2014.01.005  
**Licence:** CC BY-NC-ND 4.0 https://creativecommons.org/licenses/by-nc-nd/4.0/  

---
### 1 **Modeling caprock bending stresses and their potential for induced seismicity during CO2** 

- 2 **injection** 

- 3 David Dempsey<sup>1</sup> *, Sharad Kelkar<sup>1</sup> , Rajesh Pawar<sup>1</sup> , Elizabeth Keating<sup>1</sup> and David Coblenz<sup>1</sup> 

- 4 1Los Alamos National Laboratory, Los Alamos, NM 

- 5 *corresponding author 

- 6 <u>d.dempsey@lanl.gov</u> 

- 7 Postal address: 

- 8 Los Alamos National Laboratory 

- 9 EES-16 

- 10 Mailstop T003 

- 11 Los Alamos 

- 12 New Mexico, 87545 

- 13 

- 14 +1 505 664 0712 (phone) 

- 15 +1 505 665 8737 (fax) 

- 16 

17 

### **Abstract** 

- 18 

19 

20 

21 

22 

23 

24 

25 

26 

27 

28 

29 

30 

31 

32 

33 

34 

35 

36 

Recent experiences with large-scale injection of fluids into geological formations within the Oil & Gas, Geothermal and Waste Disposal industries have demonstrated a risk of induced seismicity. In the case of geological sequestration of CO2, reactivation of faults may result in leakage pathways for the buoyant plume and thus compromise the integrity of seal formations. In this study, we investigate the potential for an overpressured reservoir formation to cause deformation and mechanical failure in an overlying, low-permeability caprock, thereby compromising seal integrity. In particular, we show that uplift and associated extensional strain in the caprock lead to a reduction in the minimum horizontal principal stress that reinforces the ambient extensional tectonic stress. Changes in the Coulomb Failure Stress ( Δ CFS) characterize the tendency for fault failure. We use normalized and Δ𝐶𝐹𝑆 -weighted frequency distributions as an integrated measure of the 3-D distribution of Δ CFS. These measures quantify the magnitude and nature of the risk of induced seismicity. Using the example of the Springerville-St Johns CO2 reservoir as an analogue site, we explore the sensitivity of the induced seismic risk to caprock stiffness, reservoir overpressure and well configuration. Over a range of these parameters, we calculate the geomechanical response of a large reservoir over a ten-year period of injection. The magnitude of induced stresses within the caprock are approximately 1-2 MPa for typical overpressures of 5-10 MPa, even in regions where the low-permeability caprock prevents appreciable increases in pore pressure. These stresses would be sufficient to cause reactivation of an undetected, well-oriented, criticallystressed structure present above or near the injection location. Importantly, we show that this occurs outside a sphere of influence delineated by sub-surface pressure increase. 

#### 37 

#### **Keywords** 

38 CO2 geologic storage; Springerville-St. Johns; geomechanical; induced seismicity; Coulomb Failure Stress 

39 

# **1 Introduction** 

40 Capture and Storage of carbon dioxide (CCS) produced by large (> Mt yr-<sup>1</sup> ) stationary emitters (e.g., coal 41 and gas-fired power stations) is one proposed technology for mitigating rises in atmospheric greenhouse 42 gases (IPCC, 2005). In order to be effective, it has been suggested that CO2 storage sites should retain at 43 least 99% of injected CO2 for over 1000 years (Shaffer, 2010). However, to ensure long-term storage of 44 CO2 in the primary storage reservoir, it is necessary to ensure the fidelity of the low-permeability 45 caprock that form the primary trap for buoyant CO2. 

46 One scenario for the creation of a leakage pathway through an otherwise low-permeability caprock is by 47 reactivation of an existing fault. Conceptualized as a zero-cohesion, planar structure, subject to ambient 48 rock stresses and in situ fluid pressure, fault triggering is approximately governed by the Mohr-Coulomb 49 failure criterion (Sibson, 1985), 

50 

- 51 where 𝜏 and 𝜎𝑛 are the shear and normal stress resolved on the fault plane, 𝜇 is the coefficient of 52 friction on the fault, and 𝑝𝑓 is the pore fluid pressure. As CO2 injection is concurrent with elevated 

65 

66 

67 

68 69 

70 

71 72 73 74 75 76 

77 78 

79 80 

81 82 83 

84 

85 

86 

53 reservoir pressures, recent efforts in modeling caprock failure (e.g., Rutqvist and Tsang, 2002; Rutqvist 54 et al., 2008; Rohmer and Seyedi, 2010) have focused on upward migration of these overpressures as the 55 trigger for mechanical failure, i.e., 𝑝𝑓 →𝑝𝑓 + Δ𝑝𝑓 in Equation (1). Such overpressures might be partially 56 managed by use of brine production wells that reduce reservoir pressure through the extraction of 57 formation brines (Buscheck et al., 2012; Elliot et al., 2013). However, these strategies are accompanied 58 by additional costs of drilling and operating the extraction wells, in addition to treatment and disposal of 59 the produced brine ($0.40-$2.30/ton CO2; Sullivan et al., 2012). 

60 

61 

62 

63 

64 

Early work on the coupled flow and stress processes leading to mechanical failure in the caprock was undertaken by Rutqvist and Tsang (2002); who demonstrated surface uplift attributed to pressureinduced expansion of the aquifer and caprock, as well as CO2 leakage through a pre-existing caprock fault whose permeability is a function of the stress dependent porosity. Rutqvist et al. (2008) followed up this work with an analysis of injection into multilayered systems under a variety of stress regimes that included consideration of both shear and tensile failure mechanisms. They concluded that CO2injection should be favored in compressional stress regimes where propagation of shallow dipping failure would be unlikely to breach upper layers. Rohmer and Seyedi (2010), taking a similar approach, assess the geomechanical risks of 10 Mt yr<sup>-1</sup> of CO2 injection into the Paris Basin, and conclude that the potential for induced failure is greatest near the injection site – where the highest overpressures occur. Vilarrasa et al. (2011) introduced a visco-plastic formulation to investigate mechanical failure of caprock overlying an injection well. In agreement with Rutqvist et al. (2008), they found that CO2 injection in a compressional regime can avoid the propagation of plastic strain through the caprock. Furthermore, they note that pressurization of the reservoir causes overlying caprock to act as a bending plate, inducing horizontal extension in its upper parts. Gor et al. (2013) considered the effects of thermal stresses induced by injection of cold CO2 on an overlying caprock. They showed that these stresses are sufficient to promote failure in a caprock pre-stressed by injection overpressures. 

87 

88 

89 

Another possibility is fault reactivation within the reservoir, which subsequently propagates into or through the caprock. Cappa and Rutqvist (2011) modeled the scenario of a propagating pressure front encountering lateral confinement by a caprock unit that is vertically offset by a normal fault. Fault activation, slip and stress drop were calculated according to a frictional-weakening model, with the severity of the fault rupture ultimately depending on the ratio of the minimum horizontal and vertical stress ( 𝜎ℎ/𝜎𝑣 ). The development of connections between the reservoir and caprock facilitate the propagation of the pressure front and suggest the possibility of cascading failure. For example, a sequence of earthquakes in northern Italy in 1997 was associated with the release and propagation of a naturally-occurring, deep, overpressured CO2 source. Specifically, aftershock locations were found to be correlated strongly with the position of a high-pressure front that evolves according to a non-linear diffusion model, suggesting the CO2 pulse was responsible for earthquake triggering (Miller et al., 2004). More generally, earthquake swarm behavior can be interpreted in the context of fluid migration and concurrent reactivation of a distribution of pre-existing fractures (Sibson, 1996). 

90 Further insights have been provided by geomechanical modeling studies of the CO2 injection operation 91 at In Salah, Algeria. Injection of 0.5-1 Mt yr<sup>-1</sup> into a 20 m thick sandstone aquifer since 2004 has been 92 accompanied by surface uplift of ~5 mm yr<sup>-1</sup> based on satellite measurements (interferometric 

- 93 synthetic-aperture radar – InSAR). Coupled flow-stress modeling using the TOUGH2-FLAC3D code was 94 able to reproduce uplift rates and lobe patterns; the analysis indicated deformation was due to 95 poroelastic expansion of the overpressured reservoir and potentially part of the overlying formations 96 Rutqvist et al. (2010). 

- 97 Several authors (Rohmer and Seyedi, 2010; Cappa and Rutqvist, 2011) have noted that the likelihood of 98 caprock failure is related to assumptions about the initial state of stress in the crust, specifically its 99 proximity to ‘criticality’. A critically-stressed crust is one which contains an optimally-oriented fault that 

- 100 is close to failure, i.e., it requires only a small increase in shear stress to be reactivated. While ‘proximity 101 to failure’ can be difficult to establish at a given location, compiled earthquake stress drop data 102 (Kanamori and Anderson, 1975), observations of induced seismicity attributed to dam impoundment 103 (Talwani and Acree, 1984) and injection of water into the subsurface (Hseih and Bredehoeft, 1981; 104 Horton, 2012; Zhang et al., 2013), and theoretical arguments regarding crustal permeability (Townend 105 and Zoback, 2000) suggest that, in tectonically active regions, it is probably less than 5 MPa. This figure 106 represents a reasonable upper bound for critically stressed crust; however, observations of reservoir 107 and production induced seismicity suggest that in some locations induced stresses as low as 0.1-0.2 MPa 108 may be sufficient to cause failure (Zoback and Hickman, 1982; Segall et al., 1994). 

109 110 111 112 113 

114 115 116 

   - Concerns have recently been raised that CO2 injection at a scale necessary to curb rises in atmospheric CO2 will inevitably lead to reactivation of moderate-sized faults that compromise caprock integrity (Zoback and Gorelick, 2012). Furthermore, it is proposed that this induced seismicity will occur with sufficient frequency that the required sequestration targets will not be achieved. Many open questions remain, such as in which regions the critical-crust assumption is valid and the leakage implications of a through-going failure. It is clear that modeling of the orientation and magnitude of injection-related stresses and the associated permeability changes in the caprock, reservoir and basement formations is crucial to understanding and surmounting this particular challenge facing CCS. 

- 117 In this paper, we use coupled flow and stress numerical modeling of CO2 injection to investigate the 118 potential for induced seismicity. This study is novel in two respects: (i) we focus on indirectly-induced 119 caprock stresses that arise from expansion of the reservoir and associated doming and spreading in the 120 overlying formations; and (ii) we calculate distributions of the change in Coulomb Failure Stress ( Δ CFS) 121 and related metrics that illustrate both the induced stress state and aggravating factors that promote 122 fault failure. As a site analogue, we consider the Springerville-St Johns dome, a naturally-occurring, 123 shallow CO2 reservoir that straddles the Arizona-New Mexico border, and that is laterally confined by an 124 offset normal fault (see Section 2). In Section 3, we detail the study methodology, including a description 125 of the coupled thermo-hydro-mechanical code FEHM used to simulate CO2 injection (3.1), an outline of 126 the conceptual model for induced caprock stresses (3.2), and model setup (3.3). In Section 4, we 127 describe the benchmark scenario of a single CO2 injection well model (4.1), calculation of CFS 128 distributions and curves (4.2), mesh and parameter sensitivity analysis (4.3-4.4), and, finally, scaled-up 129 sequestration operations containing up to ten injection wells (4.5). The main findings and conclusions of 130 this study are summarized in Section 5. 

# 131 **2 Analogue-site description** 

- 132 The Springerville-St Johns CO2 reservoir is located on the southeastern margin of the Colorado Plateau, 133 straddling the Arizona-New Mexico border, and spanning ~1800 km<sup>2</sup> (Rauzi, 1999). CO2 bearing 134 formations are found in Corduroy, Fort Apache, Big A Butte and Amos Wash members of the Supai 135 Formation, with various anhydrite beds, clay and mudstones providing the impermeable gas seals 136 (Rauzi, 1999). Stratigraphic units follow the NW-SE doubly-plunging anticline that defines the dome and 137 provides structural trapping of in situ gas. These units are offset more than 100 m by the NW-SE 138 trending Cedar Mesa and Coyote Wash normal faults that dip steeply to the SW. Offset of the Coyote 139 Wash fault laterally confines much of the 830 Mt (Stevens et al., 2001) CO2 reservoir within the 140 upthrown block (Figure 1). 

141 At 400 to 800 m depth, the CO2-bearing layers of the Supai Formation are generally too shallow to serve 142 as practical CO2 storage repositories. While CO2 could be injected into the formation as a liquid under 143 the elevated injection pressures, over time, pressure dissipation could result in phase change and a 144 reduction in storage efficiency. However, treating the Springerville CO2 field as an analogue for CCS can 145 nevertheless yield valuable insights into the geological and structural characteristics that facilitate and 146 limit gas transport, as well as the consequences of long-term CO2 leakage on the trapped reservoir and 147 overlying groundwater aquifers. For instance, mapping of travertine deposits at the surface indicate that 148 at many times in the past, CO2 has leaked from the larger reservoir and migrated through the shallow 149 groundwater to the surface. These deposits correlate with known structures that are inferred to provide 150 leakage pathways to the surface (Gilfillan et al., 2011; Keating et al., 2012). Evidence of leakage is also 151 found in the groundwater aquifers, which exhibit elevated concentrations of dissolved CO2 (Moore et 152 al., 2005). Pumping of groundwater wells in the region has resulted in drawdown of the shallow aquifer 153 water table by up to 30 m (Keating et al., 2012). The specific pattern of drawdown indicates poor 154 pressure communication across and enhanced communication along the strike of the Coyote Wash 155 Fault; this is consistent with the classic conduit/aquitard view of fault architecture (Caine et al., 1996). 156 Such architecture is indicative of either contemporary or an earlier period of episodic fault reactivation, 157 sufficiently frequent to create an impermeable gouge while maintaining damage zone permeability, and 158 at the same time accumulating the observed stratigraphic offset. The fault orientations are consistent 159 with the inferred regional stress field, i.e., minimum horizontal stress oriented NE-SW (Aldrich and 160 Laughlin, 1984). For the purposes of this analogue study then, we assume that, were they to exist, 161 unidentified, critically-stressed structures would be similarly oriented to the Coyote Wash Fault. 

#### 162 

# **3 Model methodology** 

- 163 Injection of CO2 into a vertically-confined, laterally-open reservoir is modeled using the multi-fluid 164 coupled thermo-hydro-mechanical (THM) code, Finite Element Heat and Mass transfer (FEHM; 165 Zyvoloski, 2007). Our aim is to quantify the bending stresses that may be induced in the overlying 166 caprock as a consequence of a pressurized reservoir.  In these simulations, the geometry of the 167 Springerville-St John’s dome serves as a simplified schematic for the single-reservoir system; in practice, 168 several CO2 bearing units have been identified in the Supai formation at Springerville (Rauzi, 1999). A 169 suite of models are constructed that explore the size and sensitivity of induced caprock stresses over a 

- 170 range of mesh resolutions, material properties and injection configurations, e.g., pumping pressure, well 171 pattern. 

## 172 **3.1 Simulator description** 

173 FEHM is a single code integrating heat, mass and reactive transport solutions using finite volume 174 methods with a mechanical solution done on finite elements. The code handles multi-phase mixtures of 175 water, air and CO2, deploying complex relative permeability relationships, efficient analytical methods 176 for calculation of thermodynamic functions and dynamic permeability models as functions of pressure 177 and stress. 

- 178 The degree of coupling between the stress and flow solutions is user-specified; volumetric thermal 179 expansion and Biot pressure-coupling are supported within a linear-elastic framework, i.e., 

180 

181 where 𝜎𝑖𝑗 and 𝜖𝑖𝑗 are the stress and strain tensors, 𝜆 and 𝜇 are Lame’s parameters, 𝑝 and 𝑇 are pressure 182 and temperature, and 𝛽 and 𝛼 are Biot’s coefficient and the coefficient of thermal expansion; 183 respectively, the pressure and temperature coupling terms. In this study, only pressure-coupling effects 184 are considered, by setting 𝛽= 1 . 

185 In geomechanical analyses, the stress tensor is commonly reduced to a diagonal form, with the principal 186 components denoted σ1 , σ2 and σ3 in order of decreasing magnitude. In the Earth’s crust, it is generally 187 assumed that one of these stresses represents the overburden, i.e., is vertically oriented, while the 188 other two are horizontal. For the extensional tectonic setting considered in this study, σ1 is vertical and 189 σ3 is oriented parallel to the direction of horizontal extension. In a critically stressed crust, it is assumed 190 that the magnitude of σ3 is near to the frictional limit imposed by the strength of the rock (Jaeger et al., 191 2007) 

192 

193 where μ is the coefficient of friction for the rock and pf the pore pressure. Taking a lower limit of μ = 194 0.6 (Byerlee, 1978) then, the effective principal stresses are approximately in the ratio σ′3 ≈σ′1/3 , 195 where σ′i = σi −pf defines the effective stress. If the fluid pressure can be assumed hydrostatic, and 196 the ratio of fluid to rock density is approximately 0.4, then the total principal stresses are approximately 197 in the ratio σ3 ≈0.6σ1 . 

#### 198 

## **3.2 Conceptual model** 

199 The scenario considered here is that pressurization of a vertically confined aquifer leads to an expansion 200 that is accommodated in the overlying caprock through doming and spreading (Figure 2A). This 201 deformation manifests at the surface as uplift and is analogous (but in an opposite sense) to the 202 subsidence associated with reservoir depletion. The horizontal component of this deformation is 203 produced by a reduction of the existing horizontal effective stress, which is compressive. For the caprock 204 thickness and permeability considered here, pressure changes are small; it is changes in total stress that 

205 

210 211 212 213 214 215 

216 217 218 219 220 

206 207 208 

are responsible for the deformation. As the deformation is approximately radially symmetric and because we are considering an extensional tectonic regime, some component of injection-induced extensional strain must be aligned with strain caused by tectonic extension. Furthermore, if the stress reduction is sufficiently large, the possibility exists for reactivation of an existing, well-oriented fault. 

209 

The possibility of mechanical failure caused by elastic flexure of a seal formation was considered by Hangx et al. (2010) for both reservoir injection and depletion scenarios. Using analytical solutions formulated in terms of caprock geometry, vertical deflection and elastic properties, they calculate vertical and horizontal stress changes at the caprock/reservoir interface and conclude the likelihood of shear failure in intact anhydrite induced by CO2 injection is low for an extensional stress state in which 𝜎3 = ⅔𝜎1 . In contrast, this modeling study considers the potential reactivation of low-cohesion or cohesionless faults that are critically stressed (within 5 MPa). 

Vilarrasa et al. (2011, 2013) developed visco-plastic numerical models to investigate mechanical deformation of a caprock overlying a pressurized reservoir. They noted an induced bending of the caprock, resulting in compression along the underside and extension at the surface. If the ambient stress state is extensional, then the induced horizontal stress reinforces the tectonic load; as a result, plastic deformation is more widespread throughout the caprock. 

221 Failure can also occur within the reservoir itself, in which case it may be pressure driven (Cappa and 222 Rutqvist, 2011), or on basement faults that are hydrologically connected to the reservoir (Zhang et al., 223 2013). Fault failure within the reservoir is further complicated by a Biot stress effect, which provides a 224 stabilizing compression that offsets the reduction in effective stress due to fluid pressure in the fault. 225 These scenarios, however, are outside the defined scope of this paper and will be addressed in future 226 efforts. 

## 227 **3.3 Model construction** 

228 

## **3.3.1 Mesh** 

229 The CO2 reservoir at Springerville serves as the analogue storage formation in these simulations. Thus, 230 the computational domain must cover an area sufficient to represent large-scale deployment of 231 injection wells into the dome. We use an orthogonal, Cartesian mesh, rotated 43° counterclockwise 232 from north to align with the approximate strike of the Coyote Wash Fault; this structure serves as one of 233 the lateral boundaries of the model. As hydrological communication between the fault blocks is 234 expected to be low, this boundary is closed to fluid flow and injection strategies are restricted to the 235 upthrown block. The model domain extends 27 km eastward from the fault and is 65 km long from SE to 236 NW. 

- 237 In map view, the model mesh is increasingly refined in the vicinity of the dome with reduced resolution 238 near the boundaries. The single exception is the SW boundary, corresponding to the Coyote Wash Fault 239 (x = 23.5 km), near which high resolution is preserved. Vertically, nodes are distributed according to a 240 stacked mesh, where each layer within and 100 m above and below the reservoir follow the 

- 241 stratigraphic contour of the base of the Ft. Apache unit (see Rauzi, 1999; Figure 2(c)). The contoured 

251 252 253 254 255 256 257 

242 surface in Figure 2 (c) corresponds to the top of the reservoir unit in Figure 2 (b). As nodal layers are 243 topographically flat at both the top and bottom surface of the model, the magnitude of the stratigraphic 244 offset applied to non-reservoir layers is gradually reduced with proximity to the boundaries. 

245 Four meshes are used in these simulations; they differ only in horizontal nodal spacing in the high 246 resolution center section of Figure 2 (c). The four grids comprise ~48 000, ~72 000, ~126 000 and ~290 247 000 nodes, corresponding to nodal spacings of 1000, 750, 500 m and 250 m, respectively. The 500-m 248 resolution mesh is used for the majority of simulations in this study, while the remaining meshes are 249 used to explore model sensitivity. 

250 

## **3.3.2 Material properties** 

Three main hydrological units are defined – reservoir, caprock and basement – with a fourth representing the near-fault region. The reservoir layer is assigned a permeability of 10<sup>-14</sup> m<sup>2</sup> (10 mD); in comparison, the caprock (10<sup>-19</sup> m<sup>2</sup> ) and basement (10<sup>-18</sup> m<sup>2</sup> ) are much less permeable. These values are consistent with core-plug measurements at Springerville (Rauzi, 1999) and similar modeling studies (Rutqvist et al., 2010). While modeling more permeable confining units would certainly be worthwhile, the intent here is to investigate the induced stresses in the caprock in the absence of a significant pressure perturbation migrated from the reservoir. 

258 For the benchmark simulation, the caprock and basement are considered more rigid and assigned a 259 Young’s Modulus of 20 GPa, in comparison to the 5 GPa in the reservoir, consistent with values used by 260 (Rutqvist et al., 2010). The effect of rigidity in the confining units is discussed in Section 4.4. Other 261 material parameters are documented in Table 1. 

262 Five different well configurations were tested, comprising one, three, five, seven and ten injection sites; 263 these are shown in Figure 2(c). Each subsequent well pattern is constructed by adding new wells to the 264 previous, e.g., the seven-spot pattern contains the same wells as the five-spot plus two extras. All wells 265 are assumed to be vertical and inject at a single node, i.e., the open-well section is less than the 20-m 266 vertical node spacing. Injection occurs against a fixed overpressure of between 1 and 15 MPa (Table 1) 267 for a period of ten years. 

268 The mobility of injected CO2 in a mixed CO2-water system is controlled by the prescribed relative 269 permeability relationship. In these simulations, we use exponential functions to obtain best-fit curves 270 through compiled experimental data (Bachu and Bennion, 2008; Perrin and Benson, 2010; Krevor et al., 271 2012; Berg et al., 2013). In contrast, others have used non-linear Corey (Rutqvist and Tsang, 2002) or 272 Van Genuchten functions (Pruess and Garcia, 2002; Keating et al., 2012). Figure 2 (d) shows the 273 particular set of exponential curves used in this analysis, superimposed upon the compiled experimental 274 data. We use an irreducible water saturation of 0.2 and a maximum CO2 relative permeability 80% that 275 of water. Capillary pressure is zero; pressure diffusion into the caprock is controlled by the permeability 276 of this unit. 

277 

278 279 280 281 282 

284 285 286 287 288 289 

291 292 293 294 295 296 297 

## **3.3.3 Boundary and initial conditions** 

Before simulating injection, pressures, temperatures and stresses must first be initialized. As we are considering a relatively shallow reservoir, corresponding to depths of 500-600 m, a uniform temperature of 20°C is assigned throughout the model with no heat flow through all boundaries. In practice, some of the higher modeled overpressures (Table 1) would be expected to exceed 𝜎3 at these shallow depths, resulting in tensile failure; this does not occur in the linear elastic models presented here. 

283 

A gentle hydraulic gradient, flowing from SE to NW, exists at Springerville. In the model, this is represented by setting pressure heads at the y=0 and y=65 km lateral boundaries for a 300 m drop across the domain (~.005 m/m). Zero mass flux is enforced at all other boundaries and pressures within the model are allowed to equilibrate. For the injection simulations, pressures at all boundaries permit inflow or outflow to maintain initial pressure. The boundary at y = 0 is the one exception; this corresponds to the Coyote Wash Fault and, due to its role as a cross-fault hydrological barrier, zero mass flux is enforced at this boundary. 

290 

298 

The initial model stress state is largely arbitrary as we only consider elastic deformation and are primarily concerned with stress changes. However, for the purposes of calculating Coulomb Failure Stresses (Section 4.2), an extensional stress state is defined, i.e., vertical maximum principal stress and the minimum principal stress aligned along the x-axis (perpendicular to the Coyote Wash Fault). This is consistent with the expected stress state at Springerville (Aldrich and Laughlin, 1984) as evidenced by more than 100 m of accumulated normal offset on the Coyote Wash Fault. A constant stress boundary condition can be applied at the top surface to approximate the overburden; however, as we are using a linear elastic model, for simplicity this can be set to zero. Roller boundary conditions are assigned at the base of the model, y = 0 and at x = 23.5 km. 

299 

## **3.4 Analysis of induced seismic risk** 

300 The principal aim of this study is to evaluate the potential for induced seismicity in a caprock formation 301 overlying an overpressured reservoir. To this end, it is useful to define a metric for the proximity of a 302 fault, either hypothetical or identified, to frictional failure, i.e., an earthquake. Furthermore, such a 303 metric can then be used as a tool to identify whether a given perturbation, e.g., injection into a 304 reservoir, promotes or inhibits failure on that fault. 

305 In this work, we propose a new metric for quantifying the potential for fault failure in these scenarios: 306 the change in the Coulomb Failure Stress ( Δ𝐶𝐹𝑆 ). This quantity is constructed from the Mohr-Coulomb 307 failure criterion for a given fault orientation, 

308 

309 where 𝜏 and 𝜎𝑛 are the shear and normal stress on the fault, and 𝜇 and 𝐶 are the coefficient of friction 310 and cohesion. This quantity is mostly negative and approaches zero as the fault becomes critically 311 stressed, dropping back again due to the drop in stress that accompanies an earthquake. Changes in the 312 CFS have been used with some success to correlate aftershock locations with regions of co-seismic stress 313 transfer (Reasenberg and Simpson, 1992). This metric is similar to the strength-to-stress margin 

338 

- 314 employed by Rutqvist (2012) for defining the risk of induced seismicity around a horizontal injection well 315 at In Salah, Algeria. 

316 The CFS depends on fault orientation; thus, to avoid calculating CFS for a range of orientations, it is 317 pragmatic to select either the optimal plane for reactivation in the prevailing tectonic regime, or the 318 orientation of an identified structure. In the case of Springerville, we have chosen a NW-striking fault 319 that dips at 60° and parallels the Cedar Mesa and Coyote Wash Faults. This is consistent with the 320 extensional tectonic setting with minimum principal stress oriented NE-SW, and a rock internal friction 321 of 0.6 (Byerlee, 1978). Other approaches have been proposed that consider a range of fracture 322 orientations and derive a single measure of slip-probability (Lee et al., 2013). Steeper dip angles may be 323 more appropriate for the structures at Springerville; however, the results presented here are not 324 sensitive to steeper dips. 

325 As principal stress magnitudes at Springerville have not been measured, even an approximate 326 calculation of the absolute value of CFS is largely arbitrary. Nevertheless, insight is gained from relative 327 changes in CFS as these indicate whether a particular operation tends to promote or inhibit fault 328 reactivation. Therefore, Δ𝐶𝐹𝑆 is the primary metric for evaluating induced seismic threats in this paper, 

#### 329 

330 This quantifies the amount by which a fault has approached or retreated from failure; one can see from 331 (5) that if Δ𝜎𝑛 = Δ𝑝𝑓 = 0 , then Δ𝐶𝐹𝑆 is just the induced shear stress on the fault. For a given 332 simulation, Δ𝐶𝐹𝑆(𝒙) is a scalar field in 3-dimensional space. For comparison between multiple 333 simulations, we use two reduced representations of Δ𝐶𝐹𝑆(𝒙) – a weighted-frequency distribution and a 334 mean value. 

335 A Δ𝐶𝐹𝑆(𝒙) distribution is reduced to a normalized frequency distribution by binning the nodal values 336 and scaling the area under the histogram to be 1 (Figure 3A). The position of the peak and the length of 337 the right tail provide some information on the volume and magnitude of Δ𝐶𝐹𝑆(𝒙) . However, the 

339 

frequency distribution is generally dominated by a peak near Δ𝐶𝐹𝑆= 0 , corresponding to the bulk of the model domain for which stress changes are very small. Therefore, the normalized frequency 

- 340 distribution is further modified, by multiplying by the corresponding Δ𝐶𝐹𝑆 bin value, to yield the Δ𝐶𝐹𝑆 - 341 weighted frequency distribution (Figure 3B). In this form, the complete stress perturbation is concisely 342 summarized and can be compared to other perturbations. The Δ𝐶𝐹𝑆 -weighted frequency distribution 343 has the following properties: 

- 344 (i) The area under the curve is equivalent to the mean value of Δ𝐶𝐹𝑆(𝒙) ; we define this to be 345 the integrated tendency toward fault-failure (ITF), i.e., 

346 

347 348 349 350 

1 ITF = 𝑉 ∫Δ𝐶𝐹𝑆(𝒙)𝑑𝒙𝑉 . (6) 

   - This is a single measure of the induced-seismic risk associated with that particular loading. ITF has units of stress. 

- (ii) For constant ITF, if the distribution is right-skewed, then the major proportion of the induced seismic risk is from small increases in Δ𝐶𝐹𝑆 distributed over a large volume.  If the 

351 

352 353 354 

364 365 

379 

   - distribution is left-skewed, then the major seismic risk is due to large increases in Δ𝐶𝐹𝑆 in localized regions (Figure 3C). 

- (iii) Stretching of the distribution along the vertical axis indicates an increasing volume of influence of the Δ𝐶𝐹𝑆 perturbation (Figure 3D). 

355 Both the normalized and Δ𝐶𝐹𝑆 -weighted frequency distributions can extend into the negative x-axis; 356 this represents a reduction of the seismic risk. However, for the simulations presented here, Δ𝐶𝐹𝑆 is 357 positive. 

#### 358 

# **4 Results** 

359 

360 361 362 363 

366 367 368 369 

## **4.1 Benchmark simulation** 

In order to provide a benchmark for subsequent simulations (see Table 2 for a complete list), we first model CO2 injection into a single well in the north of the Springerville reservoir (black star in Figure 2 (c)). As we are primarily concerned with the interaction between reservoir overpressure and induced caprock stresses, control over reservoir pressures is desirable. Thus, the injection source term is prescribed in terms of a fixed inlet pressure, as opposed to a fixed or varying flow rate. For example, in the benchmark simulation, injection is achieved by pumping at 5 MPa higher than the in situ reservoir pressure; while the reservoir pressure is less than the wellbore, fluid will flow into the reservoir in proportion to the pressure difference. This applied overpressure thus represents the upper limit on pressures attainable within the reservoir. The one exception is a small region above the injector where the buoyancy force applied by the injected CO2 leads to a small additional pressure increase, ~.03 MPa. 

370 371 372 373 374 375 376 377 378 

Accurate modeling of the injected flow rate against a fixed pressure requires high resolution in the vicinity of the injection well. This is necessary to resolve the sharp pressure gradients that exist and govern flow in the near well-bore region. However, even the highest resolution mesh used in this study (horizontal nodal spacing of 250 m), will not sufficiently capture these pressure gradients; as a consequence, injected flow rate is over-estimated for a given injection pressure. Nevertheless, mesh resolution is sufficient to resolve the overpressured region, which occupies a much greater volume than that of the injected CO2 (see Figure 4). Therefore, the model is suitable to achieve the main objective of this study – to simulate pressure perturbations in the reservoir and their consequences for induced stresses in the caprock. 

380 381 382 383 

Injection, shown in Figure 4(a), exhibits the usual behavior of a high initial rate and rapid decline as the near well-bore pressure equilibrates with the applied overpressure. Injection stabilizes at 0.2 Mt yr<sup>-1</sup> after two years. Surface uplift above the injection site depends on the CO2 injection rate and pressure conditions within the reservoir; at the end of the ten-year simulation, maximum uplift above the injector is ~0.09 m. 

384 385 386 

Following ten years of CO2 injection, a wide overpressured region is established within the reservoir unit (Figure 4D). Overpressures penetrate an appreciable distance into the basement, but a much shorter distance into the low-permeability caprock. These pressure changes have a direct effect on the rock 

400 

401 

387 stress state though the Biot term in Equation (2); essentially, the rock matrix experiences an additional 388 compressive stress as it is squeezed by the overpressured pore fluids. This stress increase is particularly 389 evident within the reservoir (Figure 4E-F), where the pressure perturbation dominates. 

390 In addition to the induced stresses directly linked (via the Biot term) to reservoir overpressure, there is 391 second effect that can be indirectly attributed to the pressure rise (Figure 4). An area of horizontal 392 extension is developed close to the surface where doming and spreading are identified (see Figure 2A 393 and Figure 4B). Vilarrasa et al. (2013) link this horizontal extension with a decrease in hydraulic head – 394 the so-called “Noordbergum effect”. Importantly, this stress change is a reduction in the magnitude of 395 the compressive stress in the direction of the least principal stress, i.e., it has the same orientation and 396 sense as the regional tectonic load. It is this tectonic forcing that was responsible for past activity on the 397 Cedar Mesa and Coyote Wash Faults. 

#### 398 

399 

402 

403 

404 405 

406 

407 

408 

## **4.2 Coulomb Failure Stress** 

Figure 5 summarizes the distribution of Δ𝐶𝐹𝑆(𝒙) at the end of the ten-year injection period for the single-well CO2 injection simulation. Increases of more than 0.5 MPa in much of the caprock above the injection point indicate that the operation would contribute to critical stressing of well-oriented faults outside the overpressured reservoir. Consistent with the findings of Vilarrasa et al. (2013), we note the largest propensity to failure at the top of the reservoir layer and with less substantial increases near the top of the caprock. Significant increases in CFS also occur in the basement – this may have implications for induced seismicity on crystalline basement faults, recently associated with waste-water disposal by deep injection (Zhang et al., 2013). Interestingly, Δ𝐶𝐹𝑆 is much lower in the reservoir, where Biotcompressive stresses partly counteract the pore pressure term in (5). 

409 

410 

411 

412 

413 

414 

For this particular configuration of caprock stiffness, injection overpressure and injected volume, the maximum Δ𝐶𝐹𝑆 in the caprock is 1.2 MPa and occurs near the reservoir-caprock interface. Immediately above this point, there is a ~2 km-wide region of elevated (>0.5 MPa) Δ𝐶𝐹𝑆 that extends to the surface (Figure 5D). For intact caprock, these stresses are probably not large enough to exceed cohesion and cause damage. However, in the unfortunate scenario that an undiscovered, critically-stressed fault was located above or adjacent to the injection site, these induced stresses are significant. 

415 Normalized and Δ𝐶𝐹𝑆 -weighted frequency distributions for this simulation are shown in Figure 5E-F; 416 both are right-skewed. The Δ𝐶𝐹𝑆 -weighted distribution has been constructed for a conceivable range of 417 normal fault dips (constant strike). The similarity of these curves indicates relative insensitivity to this 418 parameter; in all subsequent calculations, a dip angle of 60° is assumed. 

#### 419 

420 

## **4.3 Mesh sensitivity** 

421 To assess the sensitivity of these results to the resolution of mesh used, the 10-year, 5-MPa CO2 422 injection simulation was performed for two coarser meshes (horizontal refinement of 750 and 1000 m). 423 A second set of simulations, injecting pure water in place of CO2, was also performed; the reduced 

- 424 number of degrees of freedom in a pure water simulation allows the use of a finer resolution mesh (250 425 m) and makes for a more robust sensitivity study. 

- 426 Figure 6A shows Δ𝐶𝐹𝑆 -weighted frequency distributions for the three CO2 injection simulations. With 427 increasing resolution, the shape of the curve is largely preserved, albeit somewhat refined, with no 428 significant shift in the position or height of the peak. The area under the curve, i.e., ITF, shows a modest 429 positive relationship with resolution. The water injection simulations show a slightly stronger positive 430 relationship with increased horizontal grid-spacing. Extrapolating these trends yields a zero-resolution 431 ITF close to 0.17x10<sup>-3</sup> MPa for both sets of simulations. Turning this argument around, subsequent use of 432 the high resolution (500 m) mesh in all remaining simulations entails an approximate overestimation of 433 Δ𝐶𝐹𝑆 magnitudes by 15-30%. 

## 434 **4.4 Evolution of** 𝚫𝑪𝑭𝑺 **and sensitivity analysis** 

- 435 Before injection into the reservoir, the distribution of Δ𝐶𝐹𝑆 is identically zero. Thus, as the injection 436 operation proceeds, the Δ𝐶𝐹𝑆 -distribution must evolve toward that shown in Figure 5; it is this 437 evolution that is tracked in Figure 6C-D. The main trend of the curves in Figure 6C is a rise in the peak 438 value; this is an indication that the volume of the Δ𝐶𝐹𝑆 perturbation grows in concert with the pressure 439 perturbation within the reservoir. Secondary growth in the right tail of the distribution indicates higher 440 values of Δ𝐶𝐹𝑆 are being achieved at later time. The ITF exhibits a linear trend over the ten-year 441 simulation, i.e., there is no indication that induced caprock stresses reach a steady-state. 

- 442 Two parameters are expected to have a first-order effect on the magnitude and extent of induced 443 caprock stresses: (i) the magnitude of the injection overpressure; and (ii) the resistance of the caprock to 444 deformation, i.e., it’s Young’s Modulus. The Biot parameter, taken as 1 in these simulations as in other 445 studies (Rutqvist, 2012; Vilarrasa et al., 2013), directly modifies the coupling strength between injection 446 overpressure and rock strength and is thus implicitly included in the first parameter. Figure 6E-H show 447 the effect of these parameters on the shape of the Δ𝐶𝐹𝑆 -weighted frequency distribution, ITF, and the 448 long-term surface uplift rate (see Figure 4A). 

- 449 Defining the volume of caprock perturbed by pressure changes in the reservoir by some arbitrary 450 threshold of Δ𝐶𝐹𝑆 , then increasing the pressure in the reservoir increases both the volume of this 451 perturbed region and the magnitude of induced caprock stresses. For instance, increasing overpressure 452 from 5 to 15 MPa increases the ITF by almost a factor of 10, while the maximum value of Δ𝐶𝐹𝑆 453 increases from 1.2 to 3.5 MPa, i.e., approximately 23-24% of the applied overpressure. Uplift above the 454 injector increases in proportion to the applied pressure, from ~0.1 to almost 0.3 m. 

- 455 For comparison, uplift rates have been measured using interferometric synthetic-aperture radar (InSAR) 456 data from the In Salah CO2 injection operation in Algeria (Vasco et al., 2008). There, uplift rates of 5 mm 457 yr<sup>-1</sup> were observed for injection into a 1.9 km deep, 20 m thick sandstone unit (Ringrose et al., 2009) 458 through three wells for a total rate of ~0.5 Mt yr<sup>-1</sup> . Rutqvist et al. (2010) modeled geomechanical 

- 459 changes at the In Salah site applying similar stiffness moduli to those used here. The modeled uplift rate 460 was sensitive to caprock permeability, as this controlled the vertical extent of the reservoir 

- 461 overpressure. The discrepancy between uplift in our model (10 mm) versus that observed at In Salah 

482 

483 

485 

462 (15-25 mm; Rutqvist et al., 2010) is attributed to the difference in reservoir overpressure, i.e., 5 MPa in 463 our model c.f. 10 MPa at In Salah. It may also be due to an absence of site-specific features, e.g., a deep 464 fracture-zone that might be responsible for double-lobe uplift at In-Salah (Rinaldi and Rutqvist, 2013). 465 The relative differences in reservoir overpressure and uplift are consistent with the model sensitivity 466 documented in Figure 6F. Response of Δ𝐶𝐹𝑆 to increasing caprock stiffness exhibits a non-intuitive, non467 linearity at low stiffness. This is a consequence of two competing effects: (i) shear stresses that develop 468 at the sub-horizontal reservoir-caprock interface as a result of caprock resistance against the laterally 469 expanding reservoir – these shears stresses have a small magnitude when resolved on the plane of a 470 steeply dipping normal fault; and (ii) the Δ𝐶𝐹𝑆 -perturbed region in the rest of the caprock expands as 471 the stiffer rock is less able to accommodate spreading. The superposition of these two effects results in 472 a brief decline, then increase in ITF with increasing caprock stiffness; while curious, no particular 473 significance is attached to this result. 

474 Of greater interest is the relative insensitivity of maximum Δ𝐶𝐹𝑆 to caprock stiffness, which ranges 475 between 1.6 and 1.3 MPa over the range of Young’s Moduli tested. Rather, increases in the ITF are 476 attributed to a larger-volume Δ𝐶𝐹𝑆 perturbation. Unsurprisingly, surface uplift corresponds strongly 477 with the softness of the caprock, exhibiting 0.18 m for the lowest simulated Young’s Modulus of 5 GPa 478 and approaching 0.05 m for the highest (100 GPa). 

479 

480 

481 

## **4.5 An expanded injection operation** 

So far we have considered only a single injection well to investigate cause-and-effect relationships between injection operation, material parameters and induced stresses. However, if CCS is to be undertaken at a commercial scale, then a given reservoir may need to accommodate multiple wells injecting several 10s of Mt yr<sup>-1</sup> (Keating et al., 2011), e.g., the Illinois Basin (Birkholzer and Zhou, 2009). 

484 

486 

487 

488 

Here, we investigate caprock stresses induced by large-scale injection for three-, five-, seven- and tenspot patterns. Each subsequent pattern is constructed through the incremental addition of wells to the previous, e.g., the five-spot pattern includes the same wells as the three-spot with two new locations (the blue stars in Figure 2C and Figure 7C). For all patterns, wells inject continuously at a sustained overpressure of 5 MPa for a period of ten years. Distributions of Δ𝐶𝐹𝑆 are summarized in Figure 7. 

489 Comparing induced stresses for the one- and three-spot patterns, it is clear that the Δ𝐶𝐹𝑆 distribution 490 for the three-spot is not merely a superposition of three one-spot Δ𝐶𝐹𝑆 distributions. While local Δ𝐶𝐹𝑆 491 maxima are associated with the well locations, the area between wells is characterized by a marked 492 Δ𝐶𝐹𝑆 increase that is attributable to the interaction between wells. This non-linear ‘linking’ of Δ𝐶𝐹𝑆 493 patterns between wells results in increasingly larger Δ𝐶𝐹𝑆 magnitudes for each subsequent well 494 pattern. Furthermore, in addition to increasing the area of induced stresses, the peaks of the Δ𝐶𝐹𝑆 - 495 weighted frequency distributions are increasingly shifted toward the right (Figure 7F), indicating the 496 greater contribution to the seismic risk is being derived from the high- Δ𝐶𝐹𝑆 regions between wells. 

497 An important consequence arising from the compounding of the Δ𝐶𝐹𝑆 distribution between wells, is the 498 observation that loading of geological structures deemed seismically hazardous cannot necessarily be 499 avoided by injecting “around but not on” the structure. A more robust strategy would require both a 

522 

500 rigorous characterization of the volume contained within the point cloud of injection wells, as well as 501 modeling of the extent of Δ𝐶𝐹𝑆 outside the point cloud in order to avoid loading previously-identified 502 structures. 

503 The importance of the interaction between multiple pressure sources and flow-redirecting structures 504 was also highlighted by Morris et al. (2011). They demonstrated that a computational modeling 505 approach could inform injection strategy design that avoids fault reactivation, providing site 506 characterization has identified the relevant structures and ambient stresses. However, in the absence of 507 these data, the approach outlined here can be used to delineate regions of induced seismic threat and 508 provide a first-order quantification of that threat. 

#### 509 

510 511 512 513 514 515 

# **5 Discussion and concluding remarks** 

In recent years, several studies have investigated the potential for geomechanical failure caused by injection of CO2 underground (Rutqvist and Tsang, 2002; Rutqvist et al., 2008; Rohmer and Seyedi, 2002; Hangx et al., 2010; Vilarrasa et al., 2011; Rutqvist, 2012). There is widespread agreement that reactivation of existing faults by elevated pore pressures, and therefore management of the extent and size of reservoir overpressures, represents a major challenge for large-scale deployment of CCS technology (Zoback and Gorelick, 2012). 

516 

517 518 519 

520 521 

523 

524 525 526 

Here, we have demonstrated that indirect threats to caprock integrity may also be derived from reservoir overpressurisation and deformation. Uplift and flexure of the overlying formations can induce reductions in horizontal stress that compound those induced by tectonic extension. The magnitude of induced stresses – approximately 1-2 MPa corresponding to typical overpressures of 5-10 MPa – represent a significant perturbation if well-oriented, critically-stressed structures are present above or near the injection location. Furthermore, this stress perturbation is exacerbated at increasing overpressure and caprock stiffness, and where multiple injection wells are operating and interacting. Our recommendations are thus aligned with the litany of studies calling for both comprehensive site characterization and computational modeling prior to undertaking large-scale injection operations; knowledge of the location and stress state of nearby structures is crucial to assessing the risk of proposed CCS operations. 

527 The magnitude of shear stresses induced in the overlying caprock depends both on the amount by which 528 the reservoir is overpressured (Figure 6G) as well as the lateral extent of the overpressured volume 529 (Figure 6E, Figure 7). Currently, pressure management strategies are designed to restrict formation 530 pressures some safe margin below the minimum principal stress – the threshold at which hydraulic 531 fracturing occurs. However, based on the findings of this study, we propose that pressure management 532 strategies should also consider the potential areal extent of the overpressured region in prescribing 533 maximum operating pressures. Site- and operation-specific numerical modeling would likely be required 534 to support such decision-making. In addition to limits on pumping pressures, a degree of control of 535 reservoir pressures may be provided by the deployment of brine production wells (Buscheck et al., 2012; 536 Elliot et al., 2013). Such strategies can be designed for optimizing both local pressure relief and 

- 537 improving CO2 injectivity. The effect of such pressure management schemes in limiting the magnitude 

- 538 and scope of induced caprock stresses will be assessed in future studies. 

- 539 

# **Acknowledgements** 

- 540 This study was funded through the American Recovery & Reinvestment Act (ARRA). The work was 

- 541 performed as part of the National Risk Assessment Partnership (NRAP) project. NRAP is supported by US 542 Department of Energy through its Cross-Cutting Research Effort and is managed by National Energy 

- 543 Technology Laboratory (NETL). 

- 544 

# **References** 

- 545 Aldrich, M. J. Jr., Laughlin, A. W., 1984. A Model for the Tectonic Development of the Southeastern 546 Colorado Plateau Boundary. Journal of Geophysical Research 89, 10,207-10,218. 

547 

- 548 

   - Bachu, S., Bennion, B., 2008. Effects of in-situ conditions on relative permeability characteristics of CO2brine systems. Environmental Geology 54, 1707-1722. 

- 549 Berg, S., Oedai, S., Ott, H., 2013. Displacement and mass transfer between saturated and unsaturated 550 CO2-brine systems in sandstone. International Journal of Greenhouse Gas Control 12, 478-492. 

- 551 Birkholzer, J. T., Zhou, Q., 2009. Basin-scale hydrogeologic impacts of CO2 storage: Capacity and 552 regulatory implications. International Journal of Greenhouse Gas Control 3, 745-756. 

- 553 Buscheck, T. A., Sun, Y., Chen, M., Hao, Y., Wolery, T. J., Bourcier, W. L., Court, B., Celia, M. A., 554 Friedmann, S. J., Aines, R. D., 2012. Active CO2 reservoir management for carbon storage: Analysis 555 of operation strategies to relieve pressure buildup and improve injectivity. International Journal of 556 Greenhouse Gas Control 6, 230-245. 

557 

   - Byerlee, J. D., 1978. Friction of Rocks. Pure and Applied Geophysics 116, 393-402. 

- 558 Caine, J. S., Evans, J. P., Forster, C. B., 1996. Fault zone architecture and permeability structure. Geology 559 24, 1025-1028. 

- 560 Cappa, F., Rutqvist, J., 2011. Impact of CO2 geological sequestration on the nucleation of earthquakes. 561 Geophysical Research Letters 38, doi: 10.1029/2011GL048487. 

- 562 Deng, H., Stauffer, P. H., Dai, Z., Jiao, Z., Surdam, R. C., 2012. Simulation of industrial-scale CO2 storage: 563 Multi-scale heterogeneity and its impact on storage capacity, injectivity and leakage. International 564 Journal of Greenhouse Gas Control 10, 397-418. 

- 565 Elliot, T. R., Buscheck, T. A., Celia, M., 2013. Active CO2 reservoir management for sustainable 566 geothermal energy extraction and reduced leakage. Greenhouse Gas Science and Technology 3, 50567 65. 

- 568 Gilfillan, S. M. V., Wilkinson, M., Haszeldine, R. S., Shipton, Z. K., Nelson, S. T., Poreda, R. J., 2011. He and 569 Ne as tracers of natural CO2 migration up a fault from a deep reservoir. International Journal of 570 Greenhouse Gas Control 5, 1507-1516. 

- 571 Gor, G. Yu., Elliot, T. R., Prevost, J. H., 2013. Effects of thermal stresses on caprock integrity during CO2 572 storage. International Journal of Greenhouse Gas Control 12, 300-309. 

- 573 Hangx, S. J. T., Spiers C. J., Peach, C. J., 2010. Mechanical behavior of anhydrite caprock and implications 574 for CO2 sealing capacity. Journal of Geophysical Research 115, doi: 10.1029/2009JB006954. 

- 575 Horton, S., 2012. Disposal of hydrofracking waste fluid by injection into subsurface aquifers triggers 576 earthquake swarm in central Arkansas with potential for damaging earthquake. Seismological 577 Research Letters 83, 250-260. 

- 578 Hsieh, P. A., Bredehoeft, J. D., 1981. A reservoir analysis of the Denver earthquakes: A case of induced 579 seismicity. Journal of Geophysical Research 86, 903-920. 

- 580 IPCC (Intergovernmental Panel on Climate Change), 2005. IPCC Special Report on Carbon Dioxide 581 Capture and Storage. Cambridge University Press, New York. 

- 582 Kanamori, H., Anderson, D. L., 1975. Theoretical basis of some empirical relations in seismology. Bulletin 583 of the Seismological Society of America 65, 1073-1095. 

- 584 Keating, E. H., Newell, K. L., Viswanathan, H., Carey, J. W., Zyvoloski, G., Pawar, R., 2012. CO2/brine 585 Transport into Shallow Aquifers along Fault Zones. Environmental Science & Technology 45, 215586 222. 

- 587 Keating, G. N., Middleton, R. S., Stauffer, P. H., Viswanathan, H. S., Letellier, B. C., Pasqualini, D., Pawar, 588 R. J., Wolfsberg, A. V., 2011. Mesoscale Carbon Sequestration Site Screening and CCS Infrastructure 589 Analysis. Environmental Science & Technology 45, 215-222. 

- 590 Krevor, S. C. M., Pini, R., Zuo, L., Benson, S. M., 2012. Relative permeability and trapping of CO2 and 591 water in sandstone rocks at reservoir conditions. Water Resources Research 48, doi: 592 10.1029/2011WR010859. 

- 593 Jaeger, J. C., Cook, N. G. W., Zimmerman, R. W., 2007. Fundamentals of Rock Mechanics. 4<sup>th</sup> ed. 594 Blackwell Publishing Ltx, Oxford, UK. 

- 595 Lee, J., Min, K.-B., Rutqvist, J., 2013. Probabilistic Analysis of Fracture Reactivation Associated with Deep 596 Underground CO2 Injection. Rock Mechanics and Rock Engineering 46, 801-820. 

- 597 Miller, S. A., Collettini, C., Chiaraluce, L., Cocco, M., Barchi, M., Kaus, B. J. P., 2004. Aftershocks driven by 598 a high-pressure CO2 source at depth. Letters to Nature 427, 724-727. 

- 599 Moore, J., Adams, M., Allis, R., Lutz, S., Rauzi, S., 2005. Mineralogical and geochemical consequences of 600 the long-term presence of CO2 in natural reservoirs: An example from the Springerville-St. Johns 601 Field, Arizona, and New Mexico, U. S. A. Chemical Geology 217, 365-385. 

- 602 Morris, J. P., Detwiler, R. L., Friedmann, S. J., Vorobiev, O. Y., Hao, Y., 2011. The large-scale 603 geomechanical and hydrogeological effects of multiple CO2 injection sites on formation stability. 604 International Journal of Greenhouse Gas Control 5, 69-74. 

- 605 Pasala, S. M., Forster, C. B., Deo, M., Evans, J. P., 2013. Simulation of the impact of faults on CO2 606 injection into sandstone reservoirs. Geofluids 13, doi: 10.1111/gfl.12029. 

- 607 Perrin, J.- C., Beson S., 2010. An Experimental Study on the Influence of Sub-Core Scale Heterogeneities 608 on CO2 Distribution in Reservoir Rocks. Transport in Porous Media 82, 93-109. 

- 609 Pruess, K., Garcia, J., 2002. Multiphase flow dynamics during CO2 disposal into saline aquifers. 610 Environmental Geology 42, 282-295. 

- 611 Rauzi, S. L., 1999. Carbon Dioxide in the St. Johns-Sprinverville Area, Apache County, Arizona. Open-file 612 report 99-2, Arizona Geological Survey. 

- 613 Reasenberg, P. A., Simpson, R. W., 1992. Response of Regional Seismicity to the Static Stress Change 614 Produced by the Loma Prieta Earthquake. Science 255, 1687-1690. 

- 615 Rinaldi, A. P., Rutqvist, J., 2013. Modeling of deep fracture zone opening and transient ground surface 616 uplift at KB-502 CO2 injection well, In Salah, Algeria. International Journal of Greenhouse Gas 617 Control 12, 155-167. 

- 618 Ringrose, P., Atbi, M., Mason, D., Espinassous, M., Myhrer, O., Iding, M., Mathieson, A., Wright, I., 2009. 619 Plume development around well KB-502 at the In Salah CO2 storage site. First Break 27, 85-89. 

- 620 Rohmer, J., Seyedi, D. M., 2010. Coupled Large Scale Hydromechanical Modelling for Caprock Failure 621 Risk Assessment of CO2 Storage in Deep Saline Aquifers. Oil & Gas Science and Technology – Rev. 622 IFP 3, 503-517. 

- 623 Rutqvist, J., 2012. The Geomechanics of CO2 Storage in Deep Sedimentary Formations. Geotechnical and 624 Geological Engineering 30, 525-551. 

- 625 Rutqvist, J., Birkholzer, J. T., Tsang, C. F., 2008. Coupled reservoir-geomechanical analysis of the 626 potential for tensile and shear failure associated with CO2 injection in multilayered reservoir627 caprock systems. International Journal of Rock Mechanics & Mining Sciences 45, 132-143. 

- 628 Rutqvist, J., Tsang, C. F., 2002. A study of caprock hydromechanical changes associated with CO2629 injection into a brine formation. Environmental Geology 42, 296-305. 

- 630 Rutqvist, J., Vasco, D. W., Myer, L., 2010. Coupled reservoir-geomechanical analysis of CO2 injection and 631 ground deformations at In Salah, Algeria. International Journal of Greenhouse Gas Control 4, 225632 230. 

- 633 Segall, P., Grass, J.-R., Mossop, A., 1994. Poroelastic stressing and induced seismicity near the Lacq gas 634 field, southwestern France. Journal of Geophysical Research 99, 15,423-15,438. 

- 635 Shaffer, G., 2010. Long-term effectiveness and consequences of carbon dioxide sequestration. Nature 636 Geoscience Letters 3, 464-467. 

- 637 Sibson, R. H., 1985. A note on fault reactivation. Journal of Structural Geology 7, 751-754. 

- 638 Sibson, R. H., 1996. Structural permeability of fluid-driven fault-fracture meshes. Journal of Structural 639 Geology 18, 1031-1042. 

- 640 Stevens, S. H., Pearce, J. M., Rigg, A. A. J., 2001. Natural Analogues for Geologic Storage of CO2: an 641 Integrated Global Research Program. Proceedings of the First National Conference on Carbon 642 Sequestration, Washington, D. C., pp. 14-17. 

- 643 Sullivan, E. J., Chu, S., Stauffer, P. H., Pawar, R. J., 2012. A CO2-PENS model of methods and costs for 644 treatment of water extracted during geologic carbon sequestration. Desalination and Water 645 Treatment 51, 1487-1493. 

- 646 Talwani, P., Acree, S., 1984. Pore Pressure Diffusion and the Mechanism of Reservoir-Induced Seismicity. 647 Pure and Applied Geophysics 122, 947-965. 

- 648 Townend, J., Zoback, M. D., 2000. How faulting keeps the crust strong. Geology 28, 399-402. 

- 649 Vasco, D. W., Ferretti, A., Novali, F., 2008. Reservoir monitoring and characterization using satellite 650 geodetic data: Interferometric synthetic aperture radar observations from the Krebcha field, 651 Algeria. Geophysics 73, 113-122. 

- 652 Vilarrasa, V., Olivella, S., Carrera, J., 2011. Geomechanical stability of the caprock during CO2 653 sequestration in deep saline aquifers. Energy Procedia 4, 5306-5313. 

- 654 Vilarrasa, V., Silva, O., Carrera, J., Olivella, S., 2013. Liquid CO2 injection for geological storage in deep 655 saline aquifers. International Journal of Greenhouse Gas Control 14, 84-96. 

- 656 Zhang, Y., Person, M., Rupp, J., Ellet, K., Celia, M. A., Gable, C. W., Bowen, B., Evans, J., Bandilla, K., 657 Mozley, P., Dewers, T., Elliot, T., 2013. Hydrogeologic Controls on Induced Seismicity in Crystalline 658 Basement Rocks Due to Fluid Injection into Basal Reservoirs. Groundwater 51, 525-538. 

- 659 Zoback, M. D., Hickman, S., 1982. In Situ Study of the Physical Mechanisms Controlling Induced 660 Seismicity at Monticello Reservoir, South Carolina. Journal of Geophysical Research 87, 6959-6974. 

- 661 Zoback, M. D., Gorelick, S. M., 2012. Earthquake triggering and large-scale geologic storage of carbon 662 dioxide. Proceedings of the National Academy of Sciences 109, 10,164-10,168. 

- 663 Zyvoloski, G. A., 2007. FEHM: A control volume finite element code for simulating subsurface multi664 phase multi-fluid heat and mass transfer. LA-UR-07-3359, Los Alamos National Laboratory, Los 

- 665 Alamos, NM. 

666 

667 

668 

670 

# 669 **Figures and figure captions** 

671 **Figure 1: Map of the Springerville area (top), after Moore et al. (2005), showing relevant structures (Keating et al., 2012),** 672 **inferred extent of the CO2 reservoir (Rauzi, 1999), and water table contours showing pumping drawdown (Keating et al.,** 673 **2012). A horizontal cross-section with important stratigraphic units is shown below (Rauzi, 1999; Moore et al., 2005).** 

674 

675 

676 **Figure 2: A. Conceptual model of injection into a confined reservoir leading to failure in (1) the caprock, (2) the reservoir, or** 677 **(3) connected basement faults. Relevant failure criterion and contributing perturbation are shown for each (** 𝝉 **= shear stress,** 678 𝝈𝒏 **= normal stress,** 𝒑𝒇 **= fluid pressure,** 𝝁 **= coefficient of friction). B. Vertical slice through the numerical model showing an** 679 **idealized storage formation based on Springerville statigraphy. Injection location and material properties are also shown. C.** 680 **Map view of the medium resolution mesh superimposed upon stratigraphic contours corresponding to the base of the Fort** 681 **Apache unit (Rauzi, 1999). The position of the vertical profile in B is marked by the black and white dashed line. The locations** 682 **of injection wells used in the five well-patterns are shown; each subsequent well pattern is constructed by adding wells to** 683 **the pattern before, e.g., pattern 3 adds the blue wells to the black and red wells it inherited from pattern 2. D. Relative** 684 **permeability curves used for the CO2 simulations, superimposed on experimental data (Bachu and Bennion, 2008; Perrin and** 685 **Benson, 2010; Krevor et al., 2012; Berg et al., 2013) and other studies (Pasala et al., 2013).** 

686 

687 **Figure 3: Example of normalized (A) and corresponding** 𝚫𝑪𝑭𝑺 **-weighted (B) frequency distributions for an arbitrary** 𝚫𝑪𝑭𝑺(𝒙) 688 **distribution, as discussed in Section 3.4 – the area under these curves is 1 and the ITF, respectively. C. Example of** 689 **transformation from right to left-skewed distributions for constant ITF distribution shown in B (grey profile). D. Vertical** 690 **skewing results in increased ITF.** 

691 

692 

693 

694 

695 **Figure 4: Summary of benchmark CO2 injection simulation. A. Injection rate (red) and surface uplift above injector (black)** 696 **profiles with time. B. Surface uplift profile across the injection site at the top of the model at the end of the ten year** 697 **simulation. C. Vertical slice plot of liquid CO2 saturation at y = 46 km. Formation boundaries are shown by white lines and the** 698 **injection location is indicated by a white star. Additionally, vertical slices of change in (D) pressure, (E) in-plane horizontal** 699 **stress (** 𝝈𝒙𝒙 **), and (F) vertical stress (** 𝝈𝒛𝒛 **) are shown. Formation boundaries are indicated by black lines.** 

700 

701 

702 **Figure 5: Contours of change in Coulomb Failure Stress (** 𝚫𝑪𝑭𝑺 **) for horizontal slices at three depths (A) 1.5 km, (B) 1.6 km,** 703 **and (C) 1.7 km, and (D) vertical slice at y = 46 km. Contours of** 𝚫𝑪𝑭𝑺 **have been calculated for a fault striking parallel to the y-** 704 **axis (i.e., aligned with structural grain of the region) and dipping at 60°. Black lines indicate unit boundaries. E. Normalized** 705 **frequency distribution of** 𝚫𝑪𝑭𝑺 **values for all nodes in the caprock after ten years. F. The** 𝚫𝑪𝑭𝑺 **-weighted frequency** 706 **distribution. Curves have been calculated for a range of possible fault dip angles.** 

707 

708 

709 **Figure 6: Sensitivity and parameter study of the single injection well simulation, comparing** 𝚫𝑪𝑭𝑺 **-weighted frequency** 710 **distributions and ITF between simulations. A.** 𝚫𝑪𝑭𝑺 **-weighted frequency distributions for the low, medium and high** 711 **resolution meshes under conditions of CO2 injection. B. ITF for the three CO2 injection simulations in A (solid squares) as well** 712 **as all four mesh resolutions under conditions of pure water injection (open squares). Simulations detailed in the remaining** 713 **figures were done on the high resolution (500-m) mesh using CO2 as the injected fluid. C-D. Change in the** 𝚫𝑪𝑭𝑺 **-weighted** 714 **frequency distribution and ITF with time.** 𝚫𝑪𝑭𝑺 **-weighted frequency distribution and ITF after ten years injection, and** 715 **surface uplift above the injection point after ten years for (E-F) different injection overpressures and (G-H) different caprock** 716 **stiffnesses.** 

717 

718 **Figure 7: Summary of multiple injection well simulations. A-E. Contours of** 𝚫𝑪𝑭𝑺 **after ten years injection for a horizontal** 719 **slice at z = 1.6 km. Well locations are shown for each pattern, after Figure 2(c). Reservoir and caprock units are indicated in A.** 720 **F.** 𝚫𝑪𝑭𝑺 **-weighted frequency distribution after ten years injection for the five different well configurations.** 

721 

722 

723 

726 

# **Tables** 

#### 724 **Table 1: Parameters used in the models and calculating Coulomb Failure Stresses. Bracketed parameters show values** 725 **explored in sensitivity analysis.** 

|Parameter|Value|
|---|---|
|_Operational_||
|Injection depth|30 m above base of<br>reservoir.|
|Injection overpressure|5(1,2.5,10,15)MPa|
|_Material_||
|Permeability<br>_Caprock_|10<sup>-19</sup>m<sup>2</sup>|
|_Reservoir_|10<sup>-14</sup>m<sup>2</sup>|
|_Basement_|10<sup>-18</sup>m<sup>2</sup>|
|Porosity<br>_Caprock_|0.01|
|_Reservoir_|0.1|
|_Basement_|0.01|
|Young’s modulus<br>_Caprock_|20(5,10,50,100)GPa|
|_Reservoir_|5 GPa|
|_Basement_|20(5,10,50,100)GPa|
|Poisson’s ratio|0.25|
|Biot coupling|1.0|
|_Relativepermeability_||
|Irreducible water saturation|0.2|
|Relativepermeabilityexponents|3.1|
|Capillary pressure|0.|
|_Coulomb Failure Stress(CFS)_||
|Friction coefficient|0.65|
|Failure plane strike|Parallel to y-axis and<br>Springerville faults.|
|Failureplane dip|60°(50°,70°,80°,90°)|

727 

#### 728 **Table 2: Summary of models run. Well patterns are given in Figure 2C.** 

|Model|Mesh<br>resolution|Injection fluid|Injection<br>pressure(MPa)|Caprock/Basement<br>Young’s modulus(GPa)|Well<br>pattern|
|---|---|---|---|---|---|
|1 (benchmark)|high|CO2|5|20|1|
|2|medium|CO2|5|20|1|
|3|low|CO2|5|20|1|
|4|highest|water|5|20|1|
|5|high|water|5|20|1|
|6|medium|water|5|20|1|
|7|low|water|5|20|1|
|8|high|CO2|1|20|1|
|9|high|CO2|2.5|20|1|
|10|high|CO2|10|20|1|
|11|high|CO2|15|20|1|
|12|high|CO2|5|5|1|
|13|high|CO2|5|10|1|
|14|high|CO2|5|50|1|
|15|high|CO2|5|100|1|
|16|high|CO2|5|20|2|
|17|high|CO2|5|20|3|
|18|high|CO2|5|20|4|
|19|high|CO2|5|20|5|

729 

