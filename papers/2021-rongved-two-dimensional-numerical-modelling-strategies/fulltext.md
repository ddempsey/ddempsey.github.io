# Two-dimensional numerical modelling of strategies to avoid thermal stress induced flow channeling in fractured geothermal reservoirs

**Authors:** Mats Rongved, Andreas Bauer, David Dempsey, Rune M. Holt  
**Published in:** Geothermics (2021)  
**DOI (version of record):** https://doi.org/10.1016/j.geothermics.2020.101978  
**This copy:** Accepted manuscript (peer-reviewed, author's version). Text extracted from the PDF at https://ddempsey.github.io/papers/2021-rongved-two-dimensional-numerical-modelling-strategies/rongved2021-two-dimensional-numerical.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** Accepted manuscript. © 2021. This manuscript version is made available under the CC-BY-NC-ND 4.0 license https://creativecommons.org/licenses/by-nc-nd/4.0/. The version of record is available at https://doi.org/10.1016/j.geothermics.2020.101978  
**Licence:** CC BY-NC-ND 4.0 https://creativecommons.org/licenses/by-nc-nd/4.0/  

---
- 1 Two-dimensional numerical modelling of strategies to avoid thermal 

- 2 stress induced ow channeling in fractured geothermal reservoirs 

- 3 Mats Rongved<sup>a</sup><sup>_,∗_</sup> , Andreas Bauer<sup>b</sup> , David Dempsey<sup>c</sup> , Rune M. Holt<sup>a</sup> 

- 4 a NTNU Norwegian University of Science and Technology, Department of Geoscience and Petroleum, 5 N-7491 Trondheim, Norway 

- 6 b SINTEF Petroleum Research, Formation Physics Department, N-7465 Trondheim, Norway 7 c Department of Engineering Science, University of Auckland, Auckland, New Zealand 

- 8 _∗_ Corresponding author. 

- 9 E-mail address: matsron@gmail.com (M. Rongved). 

# 10 Abstract 

- 11 Thermal drawdown induced ow channeling in fractured geothermal reservoirs has been found to 

- 12 be inevitable in previous work. This hypothesis is questioned and found not to be true for all 

- 13 scenarios. We investigate ow in a simple two-fracture network to investigate the basic behavior 14 of thermal drawdown induced ow pattern changes, using a Thermo-Hydro-Mechanical (THM) 

- 15 numerical model. In addition, we propose two operational interventions to mitigate the negative 16 eects of uneven ow on geothermal production. We found that uneven ow is not inevitable, but 

- 17 dependent on several factors, including initial fracture aperture, the actual value of the aperture, 

- 18 and the total injection rate. A small dierence in aperture, a higher aperture value and a larger 

- 19 total injection rate are all factors improving the chances for even ow. The operation interventions 

- 20 include variable injection rates, and sequential injection in the fractures before normal production. 

- 21 Both are shown to improve the chances for even ow and better production. Overall, changes in 

- 22 stress and pressure as a result of cooling, are found to have signicant eects on ow pattern and 

- 23 production values, underlining the need for advanced numerical models capable of THM modeling 

- 24 for accurate geothermal production analysis in low permeability fracture networks. 

- 25 Keywords: Geothermal; Enhanced geothermal systems; Flow channelling; THM model; MDEM; 

- 26 Thermal breakthrough 

1 

##### 27 

# 1. Introduction 

- 28 Unconventional geothermal resources have the potential to revolutionize the energy landscape, but 

- 29 face several challenges in order to become a serious alternative on a global scale (Tester et al., 2006). 

- 30 Enhanced (or Engineered) Geothermal Systems (EGS) must be stimulated to be economically vi- 

- 31 able. This can include hydraulic fracturing, or shear stimulation of pre-existing fractures, in order to 

- 32 establish uid ow pathways in the low permeability rock. The nature of the fracture network should 

- 33 provide sucient surface area so as to access an adequate volume of hot rock. From a geothermal 

- 34 production standpoint, a large fracture surface area is needed for sustained high temperature uid 

- 35 production. Due to the poor thermal conductivity of rocks, an even distribution of ow pathways 

- 36 within the rock volume will promote longer eld life by delaying thermal breakthrough. This poses 

- 37 several challenges for both stimulating the fracture network and maintaining production ow. Vari- 

- 38 ous methods to stimulate low-permeability rock have been trialled but are still insucient for EGS 

- 39 to present a serious energy alternative (Regenauer-Lieb et al., 2015; Jung, 2013). Jung (2013) car- 

- 40 ried out a review of previous EGS projects, including the stimulation method used, and concluded 

- 41 that the concept of activating the pre-existing fracture network seemed inadequate. They proposed 

- 42 stimulating multiple parallel wing cracks that connected two wells as a possible way forward. The 43 eect of production related cooling on such crack congurations is the focus of this study. 

- 44 In a review of previous EGS projects, Grant (2016) found that ow was generally conned to 

- 45 a very small fraction of the stimulated volume. Flow channeling, or uneven ow, refers to the 46 phenomenon where uids are concentrated in a small portion of the ow network (Fu et al., 2016). 

- 47 In order to optimize stimulation and production methods, and to accurately estimate production 

- 48 outcomes, it is important consider changes in ow patterns. For instance, Fox et al. (2013) studied 

- 49 the recovery times for an EGS with multiple parallel fractures, however, they did not account for 

- 50 thermal stress and aperture changes of the fractures. Vik et al. (2018) investigated the eect of 

- 51 thermoelastic interaction between multiple fractures on production data, but assumed equal ow in 

- 52 all fractures. Using a 3-D model, they were able to investigate the eects of ow channeling within 

- 53 a single fracture, as well as the stress interaction between multiple fractures. However, by assuming 

- 54 a constant injection rate within each fracture, they did not investigate the eects of ow channelling 

- 55 between fractures, i.e., where one fracture takes more uid because its permeability has increased 

2 

- 56 relative to the other. Xia et al. (2017) presented nite element simulations of heat production from 

- 57 sets of wing cracks, but assuming a constant permeability in the fractures. 

- 58 Several 3D thermo-hydro-mechanical (THM) models have been applied to study aperture changes 

- 59 as a result of heat extraction, within a single fracture. Ghassemi and Zhou (2011) used the displace- 

- 60 ment discontinuity (DD) approach to couple a FEM ow and heat transport model for the fracture 

- 61 through a displacement discontinuity approach to a thermo-poroelastic model for the rock matrix. 

- 62 The planar fracture surface was the only discretized part of their model. They found that the short 

- 63 term behavior in terms of fracture pressure and aperture was controlled by leak-o induced poroe- 

- 64 lastic eects, while thermoelastic eects controlled the long term behavior. Cooling of the rock mass 

- 65 hence led to an increase in aperture with time. Pandey et al. (2017) conrmed this observation 

- 66 using a 3D FEM where the fracture was mimicked as a thin equivalent porous medium with stress 

- 67 dependent stiness enabling quantication of the aperture change. The thermal gradient from injec- 

- 68 tor to producer caused fracture opening to decline with distance from the injector, in cases leading 

- 69 to closure near the producer. The authors also pointed to the strong sensitivity of their results 

- 70 to the thermal expansion coecient, which was substantiated by Salimzadeh et al. (2018a). They 

- 71 suggested to use an eective value for this coecient in between undrained and drained, to account 

- 72 for the combined eect of thermal (undrained) and poroelastic (drained) response. Salimzadeh et al. 

- 73 (2018b) used a 3D THM FEM model for a single fracture embedded in impermeable and permeable 

- 74 reservoirs. In the latter case they found that the initial fracture aperture had a primary control on 

- 75 cold uid ow, which may lead nearby fractures to become potential pathways (ow channeling). 

- 76 They also showed that stress redistribution reduces the probability for fracture opening but increases 

- 77 the likelihood of triggering shear displacements. Various other studies have been conducted inves- 

- 78 tigating heat extraction with the eect of well placement, number of wells, the long term eect on 

- 79 hydrothermal processes (Chen and Jiang, 2015; Yang and Yeh, 2009; Blöcher et al., 2010; Shaik et 

- 80 al., 2011). The studies referred above properly accounted for permeability changes due to thermal 

- 81 stress but being largely focused on the impact of single fractures, the eects of thermal stress changes 82 on ow pattern between fractures were not addressed. 

- 83 Flow channeling, or uneven ow, may refer either to variability in fracture permeability in an 

- 84 equilibrium state, or as a process where ow becomes channelized over time, due to for example 

- 85 thermal drawdown induced aperture changes (Fu et al., 2016; Tsang and Neretnieks, 1998). The 

3 

- 86 poroelastic and thermoelastic response of a single pre-existing fracture to cooling was investigated 

- 87 by Ghassemi et al. (2008). They showed that, as the rock surrounding a fracture cools, compressive 

- 88 stresses around the fracture are reduced, which results in an aperture increase and a change in ow 

- 89 pattern. The ow patterns aect subsequent thermal and poroelastic stresses, hence the problem is 90 tightly coupled. 

- 91 Fu et al. (2016) observed that ow can become localized in a few channels in a fracture network 92 during heat production as a result of thermal drawdown induced stress changes, and can signicantly 93 aect production estimates. Guo et al. (2016) investigated thermal draw down induced uneven ow 94 in a single fracture, and concluded that it was inevitable. In addition, they quantied the eect 95 of thermal stress on uneven ow and on production values. Salimzadeh et al. (2019) found that 96 unfavorable ow pathways due to stress changes can occur during heat extraction. Several other 97 studies have shown that thermal draw down induced stresses can increase injectivity or decrease 98 injection pressure (Koh et al., 2011; Hicks et al., 1996; Grant et al., 2013; Dempsey et al., 2015). 

- 99 Although uneven ow has been shown to have a signicant eect on geothermal production, 

- 100 there is still room to improve our understanding of its basic mechanisms in a fracture network. This 101 includes understanding how many fractures in a network receive ow, their initial conditions, their 102 location and characteristics relative to each other, and the evolution of channelization over time. 103 Comprehension of the underlying physics could help improve EGS production estimates, and provide 104 some insight into how stimulation and production treatments should be optimized. 

- 105 When cold water is circulated through a fracture network, the fracture receiving the most uid 106 tends to cool most rapidly. This suggests a self-amplifying phenomenon where the fracture with the 107 largest permeability receives the highest permeability increase as a result of cooling. However, this is 108 a simplistic view of the problem. First, the ow distribution between two pathways of equal pressure 109 gradient is not dependent on the dierence between the apertures but rather the ratio. This means 110 that one pathway can have a larger increase in aperture than the other over time, but still receive 111 less and less uid. It is the aperture increase relative to the initial value that matters. Second, the 112 rate of aperture increase tends to decline over time. The wider aperture may reach a steady-state 113 while the other narrower one continues to increase (and receive more ow) with time. Thus, thermal 

- 114 draw down induced changes in ow patterns may not result in uneven ow for all cases at all times. 

- 115 An observation that may support this hypothesis a tracer test at Fenton Hill EGS showed that 

4 

116 ow patterns became more diuse with time, accessing more of the reservoir (Brown, 2009). 

117 The evolution of EGS ow patterns over time is a thermo-hydro-mechanical (THM) problem. 118 Chemical eects have been shown to have an eect on fracture permeability in geothermal reservoirs 119 (Ameli et al., 2014; Taron and Elsworth, 2009; Pandey et al., 2014, 2015; Salimzadeh and Nick, 120 2019). Mineral precipitation and dissolution can signicantly alter permeability, especially close to 121 the injection well and over long periods of time (years) (Taron and Elsworth, 2009). However, these 122 eects are expected to be minor in crystalline formations that are the typical target of EGS projects. 123 Hence, we have excluded chemical eects. Stimulation of new fractures have been shown to occur in 124 EGS projects, and could have an impact on ow pattern changes during heat extraction (McClure 125 and Horne, 2014). The focus of this work is on a simplied set-up in order to investigate the basic 126 mechanisms of ow pattern changes in an understandable manner. Propagation of fractures and 127 activation of natural fractures during production is therefore not included. 

128 In this paper, we use a THM model to investigate ow patterns changes in an EGS type scenario 129 with pre-existing parallel fractures. We focus on the basic processes of uneven ow during production, 130 the rate at which it occurs, and methods to mitigate it and promote more even ow. The model used 131 is a hybrid nite-discrete element rock mechanics model called MDEM (Modied Discrete Element 132 Method) coupled with the uid ow simulator TOUGH2 (Pruess et al., 1999). A sub-gridscale model 133 has been developed to allow ner scale resolution of thermal gradients in TOUGH2 (Pruess et al., 134 1999) compared to MDEM. This results in reasonable computational speeds while still capturing 135 detailed temperature and pressure gradients needed to accurately resolve thermal stresses and uid 136 cooling. It is emphasized that the focus is on basic processes of ow pattern changes during heat 137 extraction, and aims to build condence with MDEM's capability to model THM eects. This study 138 does not consider the original formation of the fractures or their extension during production, but 139 this could be included in future work with MDEM. 

##### 140 

# 2. Numerical modeling 

141 The rock mechanical model used in this study is an implementation of the hybrid nite element 142 method/discrete element method (FEM/DEM) called MDEM. MDEM is capable of modeling hy143 draulic and shear fracture initiation and growth, and is controlled by physical criteria, enabling for 

5 

- 144 non-planar fractures. The 2D version of this code has been coupled to the geothermal reservoir 145 simulator TOUGH2 (Pruess et al., 1999). The coupling is two-way explicit sequential, and is im146 plemented such that permeability and pressure elds are sent from MDEM to TOUGH2, ow is 147 calculated and a new pore pressure eld is sent back to MDEM. MDEM then solves for displace148 ments and checks for failure, uses this to update the permeability eld (see Fig. 1 for an overview of 149 the coupling) and then hands back to TOUGH2. MDEM uses linear triangular elements, and acts 150 in FEM mode before failure initiation, whereas failed elements are converted to a cluster of discrete 151 elements. The frictional failure of an element is based on the Mohr-Coulomb failure criterion. When 152 the failure criterion is reached, the mechanical behavior and properties of the element are changed 153 to match that of a fracture. This includes an alteration of the stiness matrix of the DEM clusters, 154 resulting in the cluster having no resistance to opening, but resistance to further closure. Based on 

- 155 the pressure in the failed element and on the local stress state, displacements are calculated, which 156 are used for fracture aperture calculations. Mass balance is accounted for, and the aperture is then 157 used to calculate a permeability that can be exported to TOUGH2. There is no direct representation 

- 158 of the actual fracture in the mesh, and ow is based on the assumption that it is located somewhere 159 within the failed element. The permeability of the element is therefore modied such that ow 160 through the element is equivalent to that of a fracture extending through the element of its given 161 aperture. Porosity and pore pressure of failed elements are altered to conserve mass balance under 162 aperture changes. For more information on MDEM and its coupling to TOUGH2 see (Rongved et 163 al., 2019; Lavrov et al., 2014; Alassi et al., 2011). 

Fig. 1. An overview of the coupling between MDEM and TOUGH2. 

6 

Fig. 2. Illustrations of various sub-grid implementations and resolutions, with a resolution of 4 sub-grid elements in (a) and 16 in (b). Fracture before the sub-grid implementation is illustrated in (c) and (d) shows a the fracture with the sub-grid implementation (colors are for illustration purposes only). (For interpretation of the references to color in this gure legend, the reader is referred to the web version of this article.) 

164 

## 2.1. TOUGH2 and coupling to MDEM 

165 MDEM makes use of irregular triangular meshes. TOUGH2 does not explicitly use the geometric 166 shape of an element, only its volume, and the contact area and centroid to surface distance with an 167 adjoining element. As there is no direct representation of the fracture in MDEM, several assumptions 168 are made regarding fracture surface area and length, based on the size of the failed element. 169 Modeling of thermal eects in the vicinity of a fracture poses some challenges with the DEM 170 formulation and coupling with TOUGH2. Prior to our modications, MDEM and TOUGH2 used the 171 same mesh, which means that the TOUGH2 fracture element had the same geometric characteristics 172 as the failed element in MDEM. This has implications on the fracture surface area and fracture 173 volume, both important for detailed modeling of leak-o and heat transfer from the reservoir to the 

7 

- 174 production uid. The failed element is large and contains considerable heat and mass. TOUGH2 175 views it as a single porous and highly permeable block, and distributes ow evenly throughout. 

- 176 This eectively results in an unrealistically high contact surface area relative to its volume, and the 177 heat is quickly drained away. From a modeling perspective, this results in overestimated production 178 uid temperature at early time. Later, once the failed elements have been cooled to the injectate 179 temperature, the volume of the failed element relative to the contact area with the reservoir is 180 very small. This leads to an underestimate of heat transfer from the reservoir and production uid 181 temperature. The larger the elements used in the simulations, the larger the dierence between 182 the geometric dimensions used by TOUGH2 relative to the actual fracture growing through the 183 element. This increases the size of the errors related to resolution of temperature gradients around 184 fractures and the heat contained within failed elements. Which impacted our ability to compute 185 thermal stresses, aperture changes, and geothermal production. MDEM has been used successfully 186 for modeling a leak-o test in a constant temperature environment, employing a stress dependent 187 fracture permeability which is described in more detail by Lavrov et al. (2016a) 

188 

## 2.2. Sub-grid geometry and connections 

189 Our sub-gridding routine divides an element into several smaller elements (sub-grid elements) once 190 a fracture has completely transected it. The sub-grid elements are nite volume elements, which 191 are the only kind used in TOUGH2. The principal dierence are their dimensions and connectivity 192 relative to the fracture, which enable discretization of sharp temperature gradients near the face. 193 A user-dened number of sub-grid elements is chosen, and the sub-elements are constructed on 194 the assumption that the fracture grows between the centroids of adjacent triangular elements (see 195 Fig. 2). While MDEM continues to use the original mesh, TOUGH2 now uses the ner-scale mesh for 196 pressure and temperature calculations. In addition, the fracture can now be directly represented as 197 an element in the TOUGH2 mesh, with a permeability coming from aperture calculations in MDEM. 198 The temperature is exported to MDEM by taking a volume-weighted average of temperatures of all 199 the sub-grid elements. The pressure of the sub-grid fracture element is exported to MDEM as the 200 failed element pressure, as this is the pressure that would be applied to the fracture wall, required 201 by the FEM-DEM code. 

8 

## 202 2.3. Thermal diusion and stress 

203 In this work, TOUGH2 calculates both advection and conduction in the porous media (Pruess et al., 204 1999). The thermal stress is calculated by MDEM and is based on Timoshenko and Goodier (1970). 205 MDEM is based on explicit nite-element method (FEM), where thermal strains are accounted for 206 in the load vector. The principle of virtual work in the Galerkin formulation of two-dimensional 207 thermoelasticity reads as follows: 

208 where _A_ is the domain occupied by the body; L is the boundary of the domain; **t** is the traction 209 vector; **b** is the body force vector; **N** is the shape function matrix; **B** is the gradient of **N** ; **_σ_** is the 210 stress column-matrix. In thermoelasticity, the stress column-matrix is given by: 

211 with **_σ_** = [ _σxx, σyy, σxy_ ]<sup>_T_</sup> , **_ε_** = [ _εxx, εyy, εxy_ ]<sup>_T_</sup> . In Eq. (2), **D** is the stiness matrix and **_ε_** 0 is the 212 thermal strain column-matrix. From Eq. (1) and (2) we get the thermal strain contribution to the 213 body force vector given by: 

214 A linear triangular element is used in MDEM, and for this type of element the gradient of the 215 element shape function matrix **B**<sup>_e_</sup> , is given by 

9 

216 In Eq. (4), it is assumed that numbering of nodes _i_ , _j_ , _k_ is counter-clockwise. A is the element 217 area and _x_ , _y_ are coordinates of the nodes. Plane strain is assumed in this study, and **D** therefore 

218 becomes 

219 

220 where _E_ is the Young's modulus, _v_ is Poisson's ratio, _αT_ is thermal expansion coecient, and ∆ _T_ 221 is the change in temperature. 

222 Hence, Eq. (3) yields the following thermal element force vector in plain strain: 

223 The column matrix given by Eq. (7) reads as follows: 

224 Entries 1 and 2 yield the _x_ - and _y_ - component of the nodal force at node i, respectively. 225 Entries 3 and 4 yield the _x_ - and _y_ - component of the nodal force at node j, respectively. 226 Entries 5 and 6 yield the _x_ - and _y_ - component of the nodal force at node k, respectively. 

227 2.4. Aperture change due to temperature change in failed elements 

228 In MDEM, the aperture of a failed element is based on node displacement or change in element 229 area. An increase in area leads to increased aperture, and vice versa. The aperture is dependent 230 on the element uid pressure, and on the compressive stresses acting on it. If the pressure exceeds 

10 

231 the stresses, the element expands, and the aperture increases. If the pressure is lowered below the 232 stresses or the stress increases, it contracts, and the aperture decreases. 

233 A challenge when modeling thermal stresses with the DEM formulation in MDEM is how varia234 tions in temperature aect aperture changes of failed elements. The fracture is located somewhere 235 within the failed element, which means that cooling of the failed element should result in contraction 236 of the matrix on either side of the fracture plane, and an increase of the aperture. However, when 237 the fracture is not explicitly represented, the contraction is applied to the entire failed element, 238 resulting in an aperture decrease. We avoid this issue by, for the failed elements, neglecting the force 239 vectors that would otherwise be added due to internal temperature changes. Instead, we separately 240 calculate an area change based on the temperature change gathered from the sub-grid elements of 241 the TOUGH2 model. This area change is then added to the aperture of the failed element. 242 The aperture of a failed element then becomes 

243 where _ω_ is the total aperture, _ωn_ is the aperture due to normal displacement, _ωs_ is the aperture due 244 to shear displacement, _ωt_ is the aperture due to temperature change of the failed element, and _ω_ 0 is 245 the initial aperture. MDEM calculates the aperture based on the pre-existing aperture (if present), 246 tensile opening due to mode I displacement caused by stresses acting normal to the fracture face, 247 and shear dilatancy induced fracture opening. (Lavrov et al., 2014, 2016b). A benchmark of MDEM 248 against an analytical Khristianovic-Geertsma-de Klerk model can be found in Rongved et al. (2019). 

##### 249 

## 2.5. Model validation 

250 Our improved ability to resolve near-fracture heat conduction and thermal stresses is validated by 251 comparing our simulations to analytical solutions. 

252 

### 2.5.1. Validation of heat conduction 

253 Resolution of near-fracture temperature gradients due to matrix heat conduction is tested using 254 an analytical solution for the linear ow of heat in a solid between two parallel planes as given by 255 Carslaw and Jaeger (1959). The case examined is the solution for a solid of region 0 _< x < L_ 

11 

256 between two parallel planes kept at constant temperatures _T_ 1 and _T_ 2 respectively. The solid has an 257 initial temperature _f_ ( _x_ ) = _t_ 2 . The solution for the temperature at _x_ for a time _t_ is given as: 

258 Where _κ_ = _ρc_<sup>_<u>K</u>_isthethermaldiusivity,</sup><sup>_K_isthethermalconductivity,</sup><sup>_c_isthespecicheat,and</sup><sup>_ρ_</sup> 259 is the density of the solid. 

260 A numerical representation of the problem was constructed by creating two elements representing 261 the parallel plates with a third element representing the solid between them. An illustration of the 262 setup, with an example of 9 sub-grid elements can be seen in Fig. 3. The distance, L, between the 263 center of the two constant temperature plates is 4.7 m, and the solid between the plates (in orange) 264 is 2.4 m which is divided in a predened number of sub-grid elements with equal thickness. The 265 contact surfaces between adjacent sub-grid elements are set equal to be comparable to the analytical 266 solution, although this would not generally be the case for triangular elements. The two elements 267 representing the plates from the analytical solution are set at constant temperatures 22<sup>_◦_</sup> (plate 1) 268 and 40<sup>_◦_</sup> (plate 2) at each side of the solid. The sub-grid elements (orange) are given an initial 269 temperature of 40<sup>_◦_</sup> . Fig. 4 shows dividing the middle element into 9 sub-grid elements give a good 270 t to the analytical solution. This shows that TOUGH2 is able to model the heat ow and capture 271 the temperature gradient at this mesh resolution. 

12 

Fig. 3. Visualization of the mesh used for the heat ow simulations as seen in Fig. 4. The blue element (to the left) holds a constant temperature of 22<sup>_◦_</sup> and the red element (to the right) holds a constant temperature of 40<sup>_◦_</sup> . The orange elements are the sub-grid elements, and have an initial temperature of 40<sup>_◦_</sup> . (For interpretation of the references to color in this gure legend, the reader is referred to the web version of this article.) 

Fig. 4. Comparison between analytical solution (solid line) and simulation (dots) of heat ow using 9 sub-grid resolutions. 

13 

### 272 2.5.2. Validation of thermal stress 

273 Thermal stress calculations in MDEM are validated by numerically modeling the stresses induced 274 by cooling of a circular inclusion, and comparing this to the available thick-bed solution presented 275 in Perkins et al. (1984). 

276 The model setup is given in Fig. 5a, where a circular inclusion is uniformly cooled to a temperature 277 of 10<sup>_◦_</sup> , from an initial reservoir temperature of 100<sup>_◦_</sup> . The maximum principle internal stress in the 278 inclusion is given by 

279 where _E_ is Young's Modulus, _ν_ the Poisson's ratio, _αT_ is the linear coecient of thermal expan280 sion, and ∆ _T_ is temperature change, in this case -90<sup>_◦_</sup> . Internal and external to the inclusion are 281 represented by i and e as subscripts respectively. 

282 The radial stress external to the inclusion is 

283 where _ra_ is the radius of the inclusion and _r_ is the radius from the center. The tangential stress 284 external to the inclusion is 

285 For more information and complete derivation of equations see Perkins et al. (1984). 

286 As can be seen in Fig. 5b, there is a good t between numerical results and the analytical solution. 

287 The slight oscillation in the numerical results is due to the center of the triangular elements slightly 

288 oscillating across the _x_ -axis. The mesh used consist of 75704 triangular elements. 

14 

Fig. 5. (a) Final temperature of the cooled inclusion (from 100<sup>_◦_</sup> to 10<sup>_◦_</sup> ). (b) Comparison of analytical solution (lines) and numerical results (dots). 

Fig. 6. Scenario conguration for the (a) the single fracture test, and (b) two parallel fractures. With the _x_ - and _y_ -axis, being the horizontal (at _y_ = 0 ) and vertical (at _x_ = 0 ) axes, respectively. 

15 

#### Table 1 

Input granite material properties based on previous EGS projects (Björbsson and Bodvarsson, 1990) and production parameters <u>(standard</u> water <u>properties</u> as used in TOUGH2). 

|Property|Value|
|---|---|
|Young's modulus (GPa)|30|
|Poisson's ratio (in 2D)|0.15|
|Tensile Strength (MPa)|innite|
|Cohesion (MPa)|innite|
|Density (kg/m<sup>3</sup>)|2700|
|Porosity (%)|2|
|Permeability (m<sup>2</sup>)|10<sup>_−_18</sup>|
|Initial Stresses (_σx_ and _σy_ (MPa))|30 and 35|
|Initial pore pressure (MPa)|20|
|Initial reservoir temperature (C)|150|
|Initial fracture permeabilities (m<sup>2</sup>)|10<sup>_−_9</sup>, 1_._5_·_10<sup>_−_10 </sup>or 10<sup>_−_11</sup>|
|Injection uid|Water|
|Injection uid temperature (C)|2|
|Injection rate per unit height (m<sup>2</sup>/s)|10<sup>_−_3</sup>, 10<sup>_−_4 </sup>or 10<sup>_−_5</sup>|

##### 289 

## 2.6. Numerical setup 

290 To study the eects of fracture and ow behavior during production in an EGS scenario, two general 

- 291 set-ups are used (see Fig. 6). An injection well and a production well are connected by either one 292 or two parallel fractures. Selected material properties are listed in Table 1, and the dierent cases 293 simulated are given in Table 2. A constant injection rate (given as the rate per unit out-of-plane 

- 294 distance) is used for all cases except one (case 8), and a xed pressure sink is used for production. 

- 295 The wells consist of elements of very high permeability, resulting in a vanishing pressure gradient 

- 296 within each well. The wells have no ow connections to the reservoir except to the failed elements. 

- 297 This is to minimize well eects, and focus on fracture behavior. The distance between the wells 

- 298 is 90 m and, for the two fracture scenario, there is 40 m between the fractures. The fractures are 

16 

- 299 predened, and no failure during production is allowed (the fractures are assigned innite strength). 

- 300 The fracture geometry is created on the basis that it grows from element center to center. Since the 

- 301 mesh consist of triangles organized in a regular manner, the fracture does not grow in a straight line 

##### 302 

# 3. Results and discussion 

- 303 In this section the eect of production on ow patterns in a simplied EGS set-up is investigated. 

- 304 The main objectives are to look at governing processes and factors of ow channelling, how they 

- 305 aect production values, and propose operational interventions to minimize ow channelling. 

Table 2 

Overview <u>of the dierent cases.</u> 

|Case|Number<br>of|Additional info/case focus|Injection rate|Initial fracture per-|
|---|---|---|---|---|
|number|fractures|||meability|
|Case 1|Single<br>frac-<br>ture|The only case with no sub-<br>grid|10<sup>_−_4 </sup>m<sup>2</sup>/s|1_._0_×_10<sup>_−_9 </sup>m<sup>2</sup>|
|Case 2|Single<br>frac-|Eect of sub-grid|10<sup>_−_4 </sup>m<sup>2</sup>/s|1_._0_×_10<sup>_−_9 </sup>m<sup>2</sup>|
||ture||||
|Case 3|Two fractures|Eect of fracture perme-<br>ability|10<sup>_−_4 </sup>m<sup>2</sup>/s|5_×_10<sup>_−_10 </sup>m<sup>2</sup>|
|Case 4|Two fractures|Eect of fracture perme-<br>ability|10<sup>_−_4 </sup>m<sup>2</sup>/s|1_._5_×_10<sup>_−_10 </sup>m<sup>2</sup>|
|Case 5|Two fractures|Eect of fracture perme-<br>ability|10<sup>_−_4 </sup>m<sup>2</sup>/s|1_._0_×_10<sup>_−_11 </sup>m<sup>2</sup>|
|Case 6|Two fractures|Eect of injection rate:<br>Low|10<sup>_−_5 </sup>m<sup>2</sup>/s|1_._5_×_10<sup>_−_10 </sup>m<sup>2</sup>|
|Case 7|Two fractures|Eect of injection rate:<br>High|10<sup>_−_3 </sup>m<sup>2</sup>/s|1_._5_×_10<sup>_−_10 </sup>m<sup>2</sup>|
|Case 8|Two fractures|Variable rate|10<sup>_−_3</sup><br>and<br>10<sup>_−_5</sup><br>m<sup>2</sup>/s|5_._0_×_10<sup>_−_10 </sup>m<sup>2</sup>|
|Case 9|Two fractures|Sequential injection|10<sup>_−_4 </sup>m<sup>2</sup>/s|1_._0_×_10<sup>_−_11 </sup>m<sup>2</sup>|

17 

306 3.1. Single fracture: aperture change due to cooling and the eect of sub-gridding 307 (Case 1 and 2) 

308 We rst investigate the response of a single fracture to production related cooling to understand its 309 basic behavior and to illustrate the improvement in accuracy due to use of a sub-grid. The eect 310 of sub-gridding on simulated production uid temperature can be appreciated by comparing cases 311 1 (no sub-grid) and 2 (sub-grid with varying levels of renement, Fig. 7). Without the sub-grid, 312 heat contained in the failed elements is rapidly extracted, resulting in a sustained period of high 313 initial production temperatures. Once the failed elements have been cooled, the production uid 314 temperature drops drastically. In contrast, when ow is simulated using a sub-grid, the production 315 uid temperature starts dropping almost immediately, and this eect is captured for even relatively 316 coarse resolution. Thus, the principle eect of using a sub-grid gives an improved estimate of when 317 thermal breakthrough occurs in these systems. 318 An overview of the temperature distribution after one year of ow for the two cases can be seen 319 in Fig. 8. The principal dierences are in the temperatures of the failed element, and the position 320 of the cooling front, which has traveled further from the fracture for the simulation without a sub321 grid. These dierences are signicant and impact the estimated thermal stresses, the cooling-related 322 aperture changes, and the production temperature. The eect of dividing an element up in an 323 increasing number of sub-grid elements is shown in Fig. 9. It can be seen that with more than 6 324 subgrid elements the eect of increasing the number of subgrids attens out (Fig. 9). Although 325 a sub-grid with 8 elements appears sucient to capture thermal breakthrough (Fig. 7), for the 326 remaining simulations in this study, we use a sub-grid with 16 elements. 327 As the temperature in the matrix decreases, both the pore uid and matrix contract. The 328 dierence in thermal contraction between the two is such that a uid underpressure develops in 329 these blocks. This cooling leads to signicant stresses developing around a single fracture as can be 330 seen for the normal ( _x_ -)stress in Fig. 10a, and shear ( _xy_ -)stress in Fig. 10b, both after one year of 331 production. Fig. 10c shows the pressure distribution around the single fracture (case 2) after one year 332 of production. The region of pressure decrease extends beyond the cooled zone. This indicates that 333 the low pressure in the cooled zone creates an inux from the surrounding rock of higher pressure, 334 i.e., the region of low pressure migrates further from the fracture. This decrease in uid pressure will 

18 

- 335 also tend to increase eective normal stresses and may inhibit further fracturing (see Fig. 11a and b 

- 336 for temperature and stress distribution, respectively, at various time during production). As was seen 337 above, signicant shear stresses evolve and may lead to shear displacement or shear fracturing, in 

- 338 agreement with Salimzadeh et al. (2018a). Fig. 11c, shows the pressure along the _x_ -axis for various 

- 339 times. As can be seen, the pressure is higher than in the surroundings close to the fracture due to 

- 340 leak-o. This increase will tend to reduce the aperture, but will be small compared to thermo-elastic 

- 341 eects in low permeability rocks (Ghassemi et al., 2008). The matrix permeability used in these 

- 342 simulations are quite low ( 10<sup>_−_18</sup> m<sup>2</sup> ), and poro-elastic eects related to leak-o within the sub-grid 

- 343 elements are ignored for this study. Poro-elastic eects outside the subgrid elements are accounted 

- 344 for, but are negligible because of the low permeability. See Fig. 11b, for the eective stresses normal 

- 345 to the fracture for various times at a distance normal from the middle of the fracture. 

Fig. 7. Temperature of production uid for case 1 (blue, no sub-grid) and 2 (yellow, orange and purple, varying sub-grid resolutions). (For interpretation of the references to color in this gure legend, the reader is referred to the web version of this article.) 

346 

## 3.2. Two fracture system: thermal drawdown induced changes in ow pattern 

- 347 In this section, we investigate the eect of cooling on ow pattern changes through a simple case 

- 348 with two-fractures connecting two wells (see Fig. 6b). This is to compare eects of dierent factors 

> 349 on production values in a simple way, and to allow for a simple investigation of increased recovery 350 techniques. 

19 

351 3.2.1. Flow distribution between two fractures and thermal drawdown induced ow 

- 352 pattern changes 

353 Thermal draw-down induced changes in ow pattern are not found necessarily to result in uneven 354 ow for all cases. This can be illustrated by an analytical simplication. Flow between two parallel 355 plates is given by 

356 where _Q_ is the ow rate, ∆ _P_ is the pressure dierence, _ω_ is the aperture and _µ_ is the viscosity. By 357 assuming equal pressure gradient for the two fractures the ow for the individual fractures (fracture 358 A and B) can be found by 

359 Eq. (11) simplies the problem through an assumption of ow between parallel plates based on 360 the fracture's average aperture, but it is clear that the ratio between the apertures govern ow 361 distribution in this simplied setup. For ow distribution to change in favor of one fracture over 362 the other, the ratio between them has to change. For uneven ow to occur is not enough that the 363 dierence _ωmax − ωmin_ between the apertures increases, but the ratio _ω_<sup>_<u>ω</u>_</sup> max<sup><u>min</u>hastodecrease(where</sup> 364 _ωmax_ is the fracture with larger aperture between two competing fractures, and _ωmin_ is the fracture 365 with a smaller aperture). Therefore the following conditions can be dened for this two fracture 366 system: 

367 

368 For a ratio to change in favor of one fracture over a given time, it must have a higher percentage wise 369 increase than its neighbor. This can be illustrated by dening an aperture multiplier representing the 370 growth factor for the aperture over a given time step. If a given time step is dened by ∆ _t_ = _tn_ +1 _−tn_ , 371 the change in aperture over that time step can be written as ∆ _ω_ = _ωn_ +1 _−ωn_ . An aperture multiplier 372 _γ_ can then be included through the relation as follows: 

20 

Fig. 8. Temperature prole after one year of production for: (a) case 2 (with sub-grid using 16 elements) and (b) case 1 (no sub-grid). (c) Temperature dierence between (a) and (b). 

21 

Fig. 9. Shows the production uid temperature after 16 days, with varying number of sub-grid elements. 

373 The change in aperture ratio over a given time step then becomes, 

374 

The condition in Eqs. (12) and (13) for a given time step can then be written as 

375 

376 Therefore, if the aperture multiplier of the narrower fracture over a given time step is larger than 

377 that of the wider fracture, ow will even out and vice versa. 

22 

378 

### 3.2.2. Eect of initial aperture 

- 379 Three cases are presented that vary the initial fracture permeabilities (Table 2). The fractures have <u>1</u> 

- 380 an initial hydraulic aperture, where the aperture is equal to _ω_ = ( _kf ·_ 12) 2 where _kf_ is the initial 

- 381 permeability of the fractures, but are mechanically closed. This means that the fractures will have 382 to overcome the minimum principal stress to open further. The fractures have the same initial 

- 383 conditions but, due to irregularities in the mesh (approximating variability in natural systems), one 

- 384 fracture will receive slightly more ow than the other. In addition, the two fractures slightly interact 

- 385 through some stress shadowing, adding some variability, especially in the high ow rate case (case 

- 386 7) where the fracture pressure is higher (Fisher et al., 2004). 

Fig. 10. Case 2 (with sub-grid): (a) Eective stress in _x_ -direction after one year of production. (b) Eective stress in _xy_ -direction after one year of production. (c) Pressure prole after one year of production. 

387 A larger dierence in aperture will result in a larger dierence in ow distribution and the actual 

388 values of the apertures will aect how the ow pattern develops over time. Since the change in 

23 

389 aperture due to cooling is independent of the initial aperture (except to the extent that it governs 390 initial ow distribution), the initial value will aect how the ratio between the apertures develop 391 over time during production. For larger initial apertures, there will be a smaller percentage wise 392 aperture increase due to cooling. 

393 Case 3 is the case with highest initial fracture permeability of 5 _×_ 10<sup>_−_10</sup> m<sup>2</sup> , where both fractures 394 are initially suciently open to facilitate signicant ow. As can be seen in Fig. 12a and b, these 395 conditions cause relatively even ow from the beginning, resulting in close to equal aperture increase 396 for both fractures, and even cooling of the reservoir. 

397 The temperature eld after one year production and aperture development of case 4 (initial 398 permeability of 1 _._ 5 _×_ 10<sup>_−_10</sup> m<sup>2</sup> ) can be seen in Fig. 12c and d respectively. With a lower initial 399 aperture, this case experiences some initial uneven ow with varying increase in aperture between 400 the fractures. But the ow pattern changes and, after some time, the dierence in apertures evens 401 out and ow evens out. 

402 Case 5 has a low initial permeability of 10<sup>_−_11</sup> m<sup>2</sup> . As a result of this low permeability, the 403 fractures must open signicantly to accommodate the injection rate under a given stress state. In 404 the beginning, the fractures compete for uid. Eventually, one fracture receives more uid and cools 405 more than the other, increasing its aperture. After a couple of days, this fracture receives most of 406 the ow. Fig. 12e shows that the rock surrounding the fracture to the right has been cooled, whereas 407 the temperature around other fracture is largely undisturbed. The temperature of the production 408 uid drops quicker compared to the base case, indicating a signicant reduction in energy production 409 as a result of uneven ow (Fig. 13). Fig. 14 shows the ow distribution as a function total water 410 injected for case 3, 4 and 5. As can be seen, case 3 has little variation in ow distribution with close 411 to equal ow, case 4 goes from initial uneven ow to more even ow, ending up with close to equal 412 ow after some time, and case 5 experiences strong initial uneven ow that dominates the remainder 413 of the simulation. 

24 

Fig. 11. Case 2 (with sub-grid): (a) Temperature, (b) eective compressive stress and (c) pressure along the _x_ -axis (as described in Fig. 6) at dierent times during production. Stippled line represents the fracture position. 

414 These results indicate that the initial apertures are of importance in the changes in ow patterns 415 during heat production. Higher initial apertures and smaller dierences between them are benecial 416 for the ow to even out over time, and smaller initial apertures with greater dierence between them 417 result in uneven ow. In addition, it is shown that uneven ow can occur initially, but that the 418 ow can even out over time, dependent on initial conditions. Because we have only simulated two 419 parallel fractures in an idealized reservoir, we must be cautious in extrapolating to EGS through 420 a complex fracture network. However, we suggest that as more fractures are added to a network, 421 permeability homogeneity becomes increasingly unlikely, and the likelihood of ow channeling could 422 increase. 

423 

### 3.2.3. Eect of total ow rate 

424 Change in total ow rate can have signicant impacts on ow pattern changes over time. By 425 increasing the total ow the aperture increases quicker for both fractures, but this change may be 

25 

426 uneven. Fig. 15 shows the aperture increase as a function of ow rate for the given reservoir after 427 50 days of production. As can be seen, aperture increase as a function of rate is not linear, which 428 means that the narrower fracture can experience a larger percentage wise aperture increase than the 429 wider one, with for example, a doubling of rate for a given time. If this is the case, it will improve 430 the chances of even ow. 431 At low rates where the ow is not enough to cause signicant cooling, the impact of a ow 432 rate increase on the aperture will be small. For high rates, where there is already enough ow to 433 keep a low temperature throughout the fracture, the eect of ow increase is also not as signicant. 434 In between these low and high rates, the eect of ow rate change is large. This indicates that, 435 depending on the pre-existing ow rate distribution, an increase in total ow rate can be used to 436 improve chances for even ow. It is benecial that the wider fracture already receives high enough 437 ow rate to cool signicantly, and that the narrower fracture is in, or close to the region where an 438 increase in ow has a large impact on aperture increase. 

439 Case 4, which led to even ow over time, and quite even cooling of the reservoir at a ow rate of 440 10<sup>_−_4</sup> m<sup>2</sup> /s, was re-run with a lower total rate of 10<sup>_−_5</sup> m<sup>2</sup> /s (case 6) and with a higher total rate of 441 10<sup>_−_3</sup> m<sup>2</sup> /s (case 7). As can be seen in Fig. 16, the lower rate of case 6 resulted in uneven ow and 442 uneven cooling of the reservoir, indicating poor production. While the higher rate of case 7 resulted 443 in even ow after some slight initial uneven ow, with even cooling of the reservoir, indicating good 444 production. Fig. 17 shows the ow distribution over total water injected for case 4, 6 and 7. Case 4 445 (medium total ow rate) has close to equal ow, case 6 (low total ow rate) experiences strong initial 446 uneven ow and close to all ow quickly goes through one of the fractures, and case 7 (high total ow 447 rate) experience initial uneven ow, but ow evens out over time, and close to equal ow is obtained 448 after some time. For case 7, the higher rate results in a fracture pressure increase, and therefore 449 a stronger stress shadow cast from the fractures. This interaction leads to initial uneven ow in 450 fracture 1. As can be seen in Fig. 18, case 7 has a higher well pressure than case 6, which again 451 leads to a slight dierence in fracture pressure between the two cases. The fracture pressure aects 452 the stress shadow and therefore the interaction between the fractures. The dierence in compressive 453 stress normal to the fracture before signicant cooling occurs (only pressurized fractures) between 454 case 6 and 7 can be seen in Fig. 19. This dierence is, however, small, and as the well pressure drops 455 the stress shadow exerted by the fractures decreases. This implies that stress shadowing has some 

26 

456 initial eect at high injection rates, aecting initial fracture interaction and ow distribution, but 457 has little eect after some time as the fracture pressure drops. 

458 Case 7 also experience a lower aperture increase per volume injected, as the higher injection 459 rate results in a higher velocity of the uid through the fracture, which reduces the time for heat 460 exchange. This eect can also be seen in Fig. 20, which shows the total stress (normal to the fracture) 461 over time in the middle between the fractures, where case 7 experience a much smaller decrease in 462 total stress per unit of water injected. The total stress decreases as a result of pore pressure decrease 463 from a decreasing temperature in the rock matrix. With a lower injection rate, there is a greater 464 heat exchange per unit of injected water, and therefore the total stress decrease more per unit of 465 injected water with a lower injection rate. These results show that the total ow rate aects thermal 466 draw-down induced changes in ow pattern and higher ow rates improve chances for even ow and 467 even ow over time. 

468 

## 3.3. Operational mitigation techniques against uneven ow 

469 In this section, we address the negative impact of uneven ow on geothermal production by proposing 470 alternative stimulation techniques aimed at increasing recovery. As shown in the previous section, 471 an increase in fracture permeability/aperture decreases the chance of uneven ow and its negative 472 impact on heat production. A higher ow rate can be used to operationally mitigate the negative 473 eects of uneven ow on production. This indicates that methods to increase the apertures of 474 the fractures before starting normal production can improve the chances of more even ow. Two 475 methods are proposed, focused on increasing the aperture of both fractures before normal production, 476 involving variable ow rates, and sequential injection. 

27 

Fig. 12. The temperature eld after a year of production and average aperture over total water injected for: Case 3 (initial fracture permeability of 5 _·_ 10<sup>_−_10</sup> m<sup>2</sup> ) in (a) and (b), Case 4 (initial fracture permeability of 1 _._ 5 _·_ 10<sup>_−_10</sup> m<sup>2</sup> ) in (c) and (d), Case 5 (initial fracture permeability of 10<sup>_−_11</sup> m<sup>2</sup> ) in (e) and (f). Aperture 1 is for the fracture to the left and Aperture 2 is for the fracture to the right. 

477 

### 3.3.1. Eect of variable ow rate 

478 The results from the previous section suggested that higher ow rates could be used to mitigate 

479 uneven ow. As higher rates normally implies higher pumping costs, variable ow rates could be 480 tested as a way to force narrower fractures that are on the limit to contributing over the edge. If a 

28 

481 high rate is used in the start phase, and ow evens out over some time, the dierence between the 482 apertures will decrease. The ow rate may then be lowered, and still be enough to maintain even 483 ow. 

484 The setup involves a two-fracture scenario with the same initial conditions as in case 5 with an 485 initial permeability of 10<sup>_−_11</sup> m<sup>2</sup> . Case 5 led to uneven ow with a rate of 10<sup>_−_4</sup> m<sup>2</sup> /s as presented 486 in Section 3. It is of interest to test if it is sucient to use a higher total rate for a limited time, 487 before lowering the rate and see if the ow distribution stays even between the fractures. For the 488 rst 30 days a total ow rate of 10<sup>_−_3</sup> m<sup>2</sup> /s is used, before lowering it to 10<sup>_−_4</sup> m<sup>2</sup> /s. As can be 489 seen in Fig. 21a, the fractures are quite evenly cooled after 30 days with the high rate stimulation, 490 indicating that ow is even between the fractures. Fig. 21b, shows the aperture change over time 491 where the ow rate is changed at 30 days. The even distribution of ow is maintained after the 492 ow rate change. The reason for the increase in change in aperture with a lower rate, is because its 493 plotted with aperture change over total water injected. The less water that is injected the slower 494 it moves through the fracture, and the greater the heat exchange. Therefore, a faster increase in 495 aperture per volume of water injected is found when lowering the rate. 

Fig. 13. Temperature of production uid over total water injected for case 3, 4 and 5. Illustrates the eect of initial aperture on production data. 

29 

Fig. 14. Flow distribution over time for case 3, 4 and 5 (calculated as 1 _−_ 2 _· qqtota_<sup>,where</sup><sup>_qa_istheowgoing</sup> through fracture a, and _qtot_ is the total ow rate). _−_ 1 representing all the ow going through fracture 1, 0 representing even ow distribution between the fractures, and 1 representing all the ow through fracture 2. 

Fig. 15. Shows the average change in aperture for a 90 m fracture after 50 days as a function of ow rate on a log plot (the dots representing the numerical values and the line the trend). 

496 Fig. 22 shows the comparison of production uid temperature over the rst year between the 

497 base case (case 5) and variable ow rate (case 8). As can be seen, the production uid temperature 

498 decreases drastically at the higher rate, and it could be benecial to minimize time spent at this 499 rate. In addition, there is a temporary increase in temperature while injecting during the high 

30 

500 rate phase. This is due to the ow pattern change from uneven to even ow (see Fig. 23 for ow 501 distribution and Fig. 24 for well pressure), which results in more uid passing through the second, 502 hotter, fracture. These results show that a higher rate can be used in the start phase to increase 503 the aperture of both fractures, and when the rate is lowered the apertures are suciently open to 504 allow for even ow. This suggests an operation means to improve ow connectivity of the reservoir, 505 and hence production performance. 

506 

## 3.4. Eect of sequential ow 

507 Here, a sequential ow through phase of the fractures is proposed to mitigate uneven ow and 508 improve production. Fig. 25 shows the temperature prole at the end of each stage in a sequential 509 injection. For the rst 100 days, all the ow is directed through fracture A, after which the ow is 510 directed for another 100 days through fracture B. Afterward, both are opened to ow. The result 511 is that when ow is forced through the fracture, the fracture cools, and aperture and permeability 512 increases (see Fig. 25). This is done for both fractures, increasing the permeability of both prior to 513 the start of normal production. Fig. 25d shows the aperture change experienced by the two fractures 514 over time. Fig. 22 compares the temperature of the production uid to the base-case and variable 515 ow rate intervention. Fig. 23, shows the ow distribution over time for the same three cases. As 516 can be seen, close to even ow is obtained after the sequential injection, compared to case 5 where 517 uneven ow is dominant from the beginning. These results indicate that sequential injection could 518 be used as a tool to increase heat recovery from an EGS, where time spent in each stage can be 519 minimized through trial and error. It might also be applicable for fracture networks, where certain 520 parts of the network are injected into sequentially, but this would require further investigation. 

31 

Fig. 16. The temperature eld after a year of production and average aperture over total water injected for: Case 6 (total ow rate of 10<sup>_−_5</sup> m<sup>2</sup> /s) in (a) and (b), Case 4 (total ow rate of 10<sup>_−_4</sup> m<sup>2</sup> /s) in (c) and (d), Case 7 (total ow rate of 10<sup>_−_3</sup> m<sup>2</sup> /s) in (e) and (f). Aperture 1 is the fracture to the left and Aperture 2 is the fracture to the right. 

521 

# 4. Discussion and conclusion 

522 This study has shown that cooling related to EGS production does not necessarily result in uneven 523 ow. The development of ow patterns during production depends on several factors, including the 

32 

524 ratio between fracture apertures, their values, and the total injection rate. A small dierence in 525 aperture, large aperture values and a large injection rate are all factors that increase the chance to 526 avoid uneven ow. It was also found that ow behavior can transfer from initial uneven ow, to 527 even ow over time, where the fracture that initially receives less uid, can still have bigger relative 528 aperture increase than its neighbor. 

529 In order to minimize the negative eects of uneven ow on EGS production, two operational 530 interventions were proposed and investigated; variable injection rates and sequential stimulation of 531 the fractures. By injecting at a higher ow rate in the initial phase, before lowering the rate, even 532 ow and better production was achieved, compared to uneven ow and poor production by injecting 533 at a constant low rate. The higher initial ow rate allowed for signicant increase in both fractures 534 aperture, which facilitated even ow, compared to uneven ow when injection was performed at a 535 constant low rate. Sequential stimulation of the fractures was found to facilitate even ow and good 536 production. This is a concept where water is directed preferentially through each fracture in turn, 

537 increasing both apertures, before reverting to injection in both and an even ow regime. 

Fig. 17. Flow distribution over time for case 4, 6 and 7 (calculated as 1 _−_ 2 _· qqtota_<sup>,where</sup><sup>_q_1istheowgoing</sup> through fracture 1, and _qtot_ is the total ow rate). _−_ 1 representing all the ow going through fracture 1, 0 representing even ow distribution between the fractures, and 1 representing all the ow through fracture 2. 

33 

Fig. 18. Well pressure over total water injected (m<sup>2</sup> per unit height) for case 3 to 7. 

Fig. 19. Dierence in compressive stress in _x_ -direction with pressurized fractures at day 0 between case 7 (high injection rate) and case 6 (low injection rate). This illustrates the stress shadow exerted by the fractures in case 7 in comparison, as this is before signicant cooling has occurred. 

34 

Fig. 20. Total stress in the middle between the fractures over time. The stress is normal to the fractures ( _x_ -stress), and results are show for case 4 (medium injection rate), case 6 (lower injection rate) and case 7 (higher injection rate). Notice that the time scale is dierent for the cases, as they have dierent rates and are plotted over volume injected. 

538 In addition, this study illustrates the need for advanced numerical models, taking into account 539 THM processes, to accurately investigate thermal drawdown induced ow pattern changes, and to 540 run geothermal production analysis on low permeability fracture networks. Changes in the stress 541 state and pressure as a result of cooling, with its eect on fracture permeability, signicantly aects 542 ow pattern behavior, and therefore also production values. 

543 The work presented here is performed within a 2D model. The main purpose has been to 544 illustrate eects of the interaction between two fractures in a simplied way, demonstrating the 545 feasibility of incorporating such eects into more complex schemes. The 2D model enables processes 546 to be studied as such, whereas a 3D model obviously is required if the objective is to simulate 547 real reservoir behavior. Having said that, it is worthwhile to point out that even if the modelling 548 scheme is 3D, fractures in commonly used models are almost exclusively planar and placed by the 549 modeler in a predened way. Although that was also done here, the main motivation has been to 

35 

- 550 study ow distribution in a simplied setting before linking it to the ability of a discrete element 

- 551 geomechanical code (like MDEM) where tortuous fractures controlled by the local stress eld and 

- 552 rock heterogeneities can be generated and propagated, eventually in 3D. 

Fig. 21. (a) Temperature eld after 30 days of high rate production (start of lower rate). (b) Change in aperture over time, where the rate is lowered by a factor 10 after 30 days. Aperture 1 is the fracture to the left and Aperture 2 is the fracture to the right. 

Fig. 22. Temperature of production uid for case 5, 8 and 9. Illustrates the eect of variable ow rate and sequential ow as operational techniques to mitigate uneven ow and improve recovery. 

36 

Fig. 23. Flow distribution over time for case 5, 8 and 9 (calculated as 1 _−_ 2 _· qqtota_<sup>,where</sup><sup>_q_1istheowgoing</sup> through fracture 1, and _qtot_ is the total ow rate). _−_ 1 representing all the ow going through fracture 1, 0 representing even ow distribution between the fractures, and 1 representing all the ow through fracture 2. 

Fig. 24. Well pressure over total water injected (m<sup>2</sup> per unit height) for case 8 and 9. 

553 In a complex natural fracture network with a large number of fractures, it seems reasonable that 

554 there will always be some uneven ow, where low permeability pathways do not receive enough ow 

37 

- 555 to cool and increase in aperture, and therefore continue to receive less ow. There is, however, 

- 556 a chance that a series of higher permeability fractures will receive enough ow to cool, and that 

- 557 ow will even out between these fractures, and not necessarily concentrate to one large one. These 

- 558 results, also show that it could be possible to increase the number of contributing fractures by 

- 559 wellhead interventions prior to the start of normal production, either through sequential injection or 

- 560 through variable injection rates. A focus for future work will be to include a more complex fracture 

- 561 network between two wells, and investigate the eects of sequential injection on increased recovery. 

Fig. 25. Temperature eld after each stage in sequential stimulation case (case 5, see Table 2 for more info) with: Stage 1 (after 100 days) in (a), Stage 2 (after 200 days) in (b) and Stage 3 (after 300 days) in (c). The aperture change for both fractures over total water injected is plotted in (d). Aperture 1 is the fracture to the left and Aperture 2 is the fracture to the right. 

38 

Fig. 26. Average aperture of the fracture in case 2 over the rst 500 days of production. Numerical (in blue) vs. analytical (in red) solution. (For interpretation of the references to color in this gure legend, the reader is referred to the web version of this article.) 

# 562 Declaration of interests 

563 None declared. 

# 564 Declaration of Competing Interest 

565 The authors report no declarations of interest. 

##### 566 

# Acknowledgements 

567 This publication has been produced with support from the KPN project Controlled Fracturing 568 for Increased Recovery. The authors acknowledge the following partners for their contributions: 569 Lundin and the Research Council of Norway (244506/E30). Also a thanks to Alexandre Lavrov and 

570 Idar Larsen for help and guidance. 

39 

# 571 Appendix A. Model validation: an analytical comparison of the stress 

# 572 shadow from a 2D fracture 

573 The aperture increase over time is compared to an analytical solution presented by Ghassemi Ghas574 semi et al. (2008). The analytical solution used is for an impermeable rock, where the aperture at 575 a distance **x** from the injection point at a time **t** after injection start is given as 

576 where 

577 Here _χ_ = _αT_ (1 + _v_ ) _/_ (1 _− v_ ) , _v_ is the Poisson's ratio, _αT_ the linear coecient of thermal expansion, 578 _T_<sup>∆</sup> the dierence in temperature between the injection uid and reservoir, _Kr_ the rock's thermal 579 conductivity, _ρr_ the rock's density, _cr_ the specic heat of the rock, _ρf_ the injection uid density, _cf_ 580 the specic heat of the injection uid and _q_ 0 the injection rate. For more details on the solution see 581 Ghassemi et al. (2008). Fig. 26 shows the aperture comparison between MDEM and the analytical 582 solutions. The rapid increase in the beginning is due to the big dierence in temperature between 583 the injection uid and the surrounding rock. Heat exchange is greater with a larger dierence in 584 temperature, resulting in the early drastic increase in aperture. Later, as the rock cools, the dierence 585 in temperature between the rock and the uid is smaller, and the rate of aperture change decreases. 586 There is a quantitative dierence between the analytical model and MDEM, however, with similar 587 sized aperture increase over similar time scales, where MDEM models a larger aperture than the 588 analytical model. The dierence is due to several dierences in assumptions and model complexity: 589 The analytical model not taking into account fracture stiness, assuming one-dimensional heat ow 590 and rock displacement, assuming that the fracture is already open under in-situ stress and pressure, 591 and does not couple the hydraulic changes over time in response to geomechanical development. In 592 the numerical setup with MDEM the initiation process of pressurizing and opening the fracture is 593 modelled. An initial aperture is given to the fracture in MDEM, however, this is a hydraulic aperture, 594 allowing for some ow, but the fractures are mechanically closed under the combination of stress and 595 pressure. During the initiation process the pressure in the fracture may have to exceed the minimal 

40 

- 596 principal stress to facilitate for the given rate. The fractures will then open, and the aperture will 

- 597 not only be dependent on cooling. As the fracture opens up due to cooling with a constant injection 598 rate, the pressure in the fracture drops. This changes the pressure distribution within the fracture. 

- 599 In addition, a xed pressure sink equal to the pore pressure is used for production modelling. During 600 production, the in-situ stress might drop below the original pore pressure, but the pressure in the 601 fracture will not drop below the production pressure. The fracture will therefore open more than 

- 602 if fracture was just open under combination of pressure and in-situ stress. The fracture does not 603 innitely open without resistance due to the fracture and reservoir stiness. These dierences may 

- 604 explain the higher apertures modelled by MDEM compared to the analytical model. The ow rate 605 going through the fracture will also inuence the increase in aperture, both the average aperture but 

- 606 also the aperture prole. Lower rates may only be enough to cause aperture increase at the very 607 start of the fracture, while very high rates will give a more even aperture increase across the whole 608 fracture. 

# 609 References 

610 Alassi, H.T., Holt, R.M., Nes, O.-M., Pradhan, S., et al., 2011. Realistic geomechanical modeling of 611 hydraulic fracturing in fractured reservoir rock. Canadian Unconventional Resources Conference. 

612 Ameli, P., Elkhoury, J.E., Morris, J.P., Detwiler, R.L., 2014. Fracture permeability alteration due 613 to chemical and mechanical processes: a coupled high-resolution model. Rock Mech. Rock Eng. 614 47 (5), 15631573. 

615 Björbsson, G., Bodvarsson, G., 1990. A survey of geothermal reservoir properties. Geothermics 19 616 (1), 1727. 

617 Blöcher, M., Zimmermann, G., Moeck, I., Brandt, W., Hassanzadegan, A., Magri, F., 2010. 3d 618 numerical modeling of hydrothermal processes during the lifetime of a deep geothermal reservoir. 619 Geouids 10 (3), 406421. 

- 620 Brown, D.W., 2009. Hot dry rock geothermal energy: important lessons from fenton hill. In: 621 Proceedings of the Thirty-Fourth Workshop on Geothermal Reservoir Engineering. Stanford 622 University, CA. 

41 

- 623 Carslaw, H., Jaeger, J., 1959. Conduction of Heat in Solids. Oxford Science Publications, Oxford, 624 England. 

- 625 Chen, J., Jiang, F., 2015. Designing multi-well layout for enhanced geothermal system to better 626 exploit hot dry rock geothermal energy. Renew. Energy 74, 3748. 

- 627 Dempsey, D., Kelkar, S., Davatzes, N., Hickman, S., Moos, D., 2015. Numerical modeling of injec628 tion, stress and permeability enhancement during shear stimulation at the desert peak enhanced 629 geothermal system. Int. J. Rock Mech. Min. Sci. 78, 190206. 

- 630 Fisher, M., Heinze, J., Harris, C., Davidson, B., Wright, C., Dunn, K., et al., 2004. Optimizing 631 horizontal completion techniques in the barnett shale using microseismic fracture mapping. SPE 632 Annual Technical Conference and Exhibition. 

- 633 Fox, D.B., Sutter, D., Beckers, K.F., Lukawski, M.Z., Koch, D.L., Anderson, B.J., Tester, J.W., 2013. 634 Sustainable heat farming: modeling extraction and recovery in discretely fractured geothermal 635 reservoirs. Geothermics 46, 4254. 

- 636 Fu, P., Hao, Y., Walsh, S.D., Carrigan, C.R., 2016. Thermal drawdown-induced ow channeling in 

- 637 fractured geothermal reservoirs. Rock Mech. Rock Eng. 49 (3), 10011024. 

- 638 Ghassemi, A., Zhou, X., 2011. A three-dimensional thermo-poroelastic model for fracture response 

- 639 to injection/extraction in enhanced geothermal systems. Geothermics 40 (1), 3949. 

- 640 Ghassemi, A., Nygren, A., Cheng, A., 2008. Eects of heat extraction on fracture aperture: a 641 poro-thermoelastic analysis. Geothermics 37 (5), 525539. 

- 642 Grant, M.A., 2016. Physical performance indicators for hdr/egs projects. Geothermics 63, 24. 

- 643 Grant, M.A., Clearwater, J., Quiñao, J., Bixley, P.F., Le Brun, M., 2013. Thermal stimulation of 644 geothermal wells: a review of eld data. Proceedings. 

- 645 Guo, B., Fu, P., Hao, Y., Peters, C.A., Carrigan, C.R., 2016. Thermal drawdown-induced ow 646 channeling in a single fracture in egs. Geothermics 61, 4662. 

- 647 Hicks, T., Pine, R., Willis-Richards, J., Xu, S., Jupe, A., Rodrigues, N., 1996. A hydro-thermo648 mechanical numerical model for hdr geothermal reservoir evaluation. In: International Journal of 649 Rock Mechanics and Mining Sciences & Geomechanics Abstracts, vol. 33. Elsevier, pp. 499511. 

42 

- 650 Jung, R., 2013. Egs-goodbye or back to the future 95. Eective and Sustainable Hydraulic Fractur651 ing. 

- 652 Koh, J., Roshan, H., Rahman, S.S., 2011. A numerical study on the long term thermo-poroelastic 653 eects of cold water injection into naturally fractured geothermal reservoirs. Comput. Geotech. 654 38 (5), 669682. 

- 655 Lavrov, A., Larsen, I., Holt, R., Bauer, A., Pradhan, S., et al., 2014. Hybrid fem/dem simulation of 656 hydraulic fracturing in naturally-fractured reservoirs. 48th US Rock Mechanics/Geomechanics 657 Symposium. 

- 658 Lavrov, A., Larsen, I., Bauer, A., 2016a. Numerical modelling of extended leak-o test with a 659 pre-existing fracture. Rock Mech. Rock Eng. 49 (4), 13591368. 

- 660 Lavrov, A., Larsen, I., Bauer, A., et al., 2016b. Coupling a fracturing code to a transient reservoir 661 simulator: a hands-on approach. 50th US Rock Mechanics/Geomechanics Symposium. 

- 662 McClure, M.W., Horne, R.N., 2014. An investigation of stimulation mechanisms in enhanced 663 geothermal systems. Int. J. Rock Mech. Min. Sci. 72, 242260. 

- 664 Pandey, S., Chaudhuri, A., Kelkar, S., Sandeep, V., Rajaram, H., 2014. Investigation of per665 meability alteration of fractured limestone reservoir due to geothermal heat extraction using 666 three-dimensional thermo-hydro-chemical (thc) model. Geothermics 51, 4662. 

- 667 Pandey, S., Chaudhuri, A., Rajaram, H., Kelkar, S., 2015. Fracture transmissivity evolution due to 

- 668 silica dissolution/precipitation during geothermal heat extraction. Geothermics 57, 111126. 

- 669 Pandey, S., Chaudhuri, A., Kelkar, S., 2017. A coupled thermo-hydro-mechanical modeling of 670 fracture aperture alteration and reservoir deformation during heat extraction from a geothermal 671 reservoir. Geothermics 65, 1731. 

- 672 Perkins, T., Gonzalez, J., et al., 1984. Changes in earth stresses around a wellbore caused by radially 673 symmetrical pressure and temperature gradients. Soc. Petroleum Eng. J. 24 (02), 129140. 

- 674 Pruess, K., Oldenburg, C.M., Moridis, G., 1999. Tough2 User's Guide Version, p. 2. 

- 675 Regenauer-Lieb, K., Bunger, A., Chua, H.T., Dyskin, A., Fusseis, F., Gaede, O., Jerey, R., Kar676 rech, A., Kohl, T., Liu, J., et al., 2015. Deep geothermal: the `moon landing'mission in the 677 unconventional energy and minerals space. J. Earth Sci. 26 (1), 210. 

43 

- 678 Rongved, M., Holt, R.M., Larsen, I., 2019. The eect of heterogeneity on multiple fracture inter679 action and on the eect of a non-uniform perforation cluster distribution. Geomech. Geophys. 680 Geo-Energy Geo-Resour. 118. 

- 681 Salimzadeh, S., Nick, H., 2019. A coupled model for reactive ow through deformable fractures in 682 enhanced geothermal systems. Geothermics 81, 88100. 

- 683 Salimzadeh, S., Nick, H.M., Zimmerman, R., 2018a. Thermoporoelastic eects during heat extrac684 tion from low-permeability reservoirs. Energy 142, 546558. 

- 685 Salimzadeh, S., Paluszny, A., Nick, H.M., Zimmerman, R.W., 2018b. A three-dimensional coupled 686 thermo-hydro-mechanical model for deformable fractured geothermal systems. Geothermics 71, 687 212224. 

- 688 Salimzadeh, S., Grandahl, M., Medetbekova, M., Nick, H., 2019. A novel radial jet drilling stimula689 tion technique for enhancing heat recovery from fractured geothermal reservoirs. Renew. Energy 690 139, 395409. 

- 691 Shaik, A.R., Rahman, S.S., Tran, N.H., Tran, T., 2011. Numerical simulation of uid-rock coupling 692 heat transfer in naturally fractured geothermal system. Appl. Therm. Eng. 31 (10), 16001606. 

- 693 Taron, J., Elsworth, D., 2009. Thermal-hydrologic-mechanical-chemical processes in the evolution 694 of engineered geothermal reservoirs. Int. J. Rock Mech. Min. Sci. 46 (5), 855864. 

- 695 Tester, J.W., Anderson, B.J., Batchelor, A.S., Blackwell, D.D., DiPippo, R., Drake, E., Garnish, J., 696 Livesay, B., Moore, M.C., Nichols, K., et al., 2006. The future of geothermal energy: impact of 697 enhanced geothermal systems (egs) on the united states in the 21st century. Mass. Inst. Technol. 698 209. 

- 699 

   - Timoshenko, S., Goodier, J., 1970. Theory of Elasticity. 

- 700 Tsang, C.F., Neretnieks, I., 1998. Flow channeling in heterogeneous fractured rocks. Rev. Geophys. 701 36 (2), 275298. 

- 702 Vik, H.S., Salimzadeh, S., Nick, H.M., 2018. Heat recovery from multiple-fracture enhanced geother703 mal systems: the eect of thermoelastic fracture interactions. Renew. Energy. 

- 704 Xia, Y., Plummer, M., Mattson, E., Podgorney, R., Ghassemi, A., 2017. Design, modeling, and 705 evaluation of a doublet heat extraction model in enhanced geothermal systems. Renew. Energy 

44 

706 

105, 232247. 

707 Yang, S.Y., Yeh, H.D., 2009. Modeling heat extraction from hot dry rock in a multi-well system. 708 Appl. Therm. Eng. 29 (89), 16761681. 

45 

