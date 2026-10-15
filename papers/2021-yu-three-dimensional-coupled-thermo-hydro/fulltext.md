# A three-dimensional coupled thermo-hydro-mechanical numerical model with partially bridging multi-stage contact fractures in horizontal-well enhanced geothermal system

**Authors:** Pengliang Yu, David Dempsey, Rosalind Archer  
**Published in:** International Journal of Rock Mechanics and Mining Sciences (2021)  
**DOI (version of record):** https://doi.org/10.1016/j.ijrmms.2021.104787  
**This copy:** Accepted manuscript (peer-reviewed, author's version). Text extracted from the PDF at https://ddempsey.github.io/papers/2021-yu-three-dimensional-coupled-thermo-hydro/yu2021-three-dimensional-coupled.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** Accepted manuscript. © 2021. This manuscript version is made available under the CC-BY-NC-ND 4.0 license https://creativecommons.org/licenses/by-nc-nd/4.0/. The version of record is available at https://doi.org/10.1016/j.ijrmms.2021.104787  
**Licence:** CC BY-NC-ND 4.0 https://creativecommons.org/licenses/by-nc-nd/4.0/  

---
- 1 A three-dimensional coupled thermo-hydro-mechanical numerical 

- 2 model with partially bridging multi-stage contact fractures in 

3 horizontal-well enhanced geothermal system 

- 4 Pengliang Yu<sup>a,b,*</sup> , David Dempsey<sup>a,b,1</sup> , Rosalind Archer<sup>a,b</sup> 

- 5 a Department of Engineering Science, University of Auckland, Auckland, New Zealand 

- 6 b Geothermal Institute, University of Auckland, Auckland, New Zealand 

- 7 * Corresponding author. Department of Engineering Science, University of Auckland, Auckland, 

- 8 New Zealand. 

- 9 E-mail address: pengliang.yu@auckland.ac.nz (P. Yu). 

- 10 1 Now at Department of Civil and Natural Resources Engineering, University of Canterbury, Christchurch, 

- 11 New Zealand. 

#### 12 

# Abstract 

- 13 Enhanced Geothermal Systems (EGS), engineered deep rock heat exchangers, are often touted for 14 their massive untapped renewable energy potential. However, numerous technical and nancial 

- 15 challenges must be overcome before the technology is widely deployed. To be viable, EGS must 

- 16 engineer a heat sweep by circulating uid through a large volume of rock while minimizing fast 17 pathways that create thermal short circuits. Here, we propose a new horizontal EGS well design 18 with partially bridging multi-stage hydraulic fractures (Fig. 1b) to improve heat extraction from 

- 19 hot dry rock (HDR). In order to increase uid circulation through the stimulated reservoir volume 20 (SRV) between fractures, the hydraulic fractures are created in an alternating pattern between 

- 21 injection and production wells, with each stopping short of connecting the second well. To test 

- 22 this design, we developed a thermal-hydro-mechanical (THM) coupling model and investigated heat 

- 23 extraction performance and reservoir stress evolution during operation. Fractures were modelled as 24 opening contact surfaces with system stresses evolving according to thermal, poroelastic, and fracture 

- 25 opening eects. Based on the model, the temperature performance of proposed EGS design model is 

- 26 compared with the commonly used fully bridging EGS design model (Fig. 1a). An investigation of 

1 

- 27 thermal performance showed that the proposed design obtains higher production temperatures and 

- 28 delays thermal breakthrough by several years compared to a fully-bridging fracture design. It also 29 results in a greater degree of secondary stimulation of the SRV as cold uids are forced further into 

- 30 the rock matrix. These results indicate that the partially-bridging fracture design is a promising 31 candidate for practical EGS implementation. 

- 32 Keywords: Horizontal EGS well design model; Thermal-hydro-mechanical coupling model; Open33 ing fracture; Heat extraction performance; Induced reservoir failure volume 

#### 34 

# 1. Introduction 

- 35 Enhanced geothermal systems (EGS) are developed to accelerate the production of heat energy 36 from hot dry rock (HDR) in ultra-low permeability formations.<sup>13</sup> More than a dozen research and 

- 37 industrial projects have attempted EGS development including the pioneering Fenton Hill (US), 

- 38 Soultz-sous-Forêts (France), Desert Peak (US), and Cooper Basin (Australia) projects.<sup>1,4</sup> These 39 projects typically involved the application of stimulation technologies like hydraulic fracturing, shear, 

- 40 thermal or chemical stimulation to improve permeability and uid-rock contact area for heat transfer. 41 Many EGS projects have been performed with a single fracturing stage in nearly vertical wells 

- 42 with open-hole completion.<sup>511</sup> This is mostly because of the technical challenges and high costs 43 of horizontal drilling in hard and high temperature granites that EGS typically targets. Other 44 projects have pursued shear stimulation at a pressure lower than fracture propagation, which has 

- 45 been hypothesized to improve hydraulic transmissivity by a shear induced self-propping eect in 

- 46 natural fractures. However, practical applications have revealed enormous technical problems with 

- 47 conventional EGS design.<sup>1216</sup> Some researchers have expressed doubt about the self-propping ca48 pability of slipping fractures under in-situ stresses.<sup>12,13,17</sup> Jung<sup>14</sup> critically reviewed the results and 

- 49 observations of several major EGS projects and suggested that the primary mechanism controlling 

- 50 the stimulation process is not the shearing of the joint network but the formation of single large 51 wing-cracks. There have been a few exceptions which has adopted the multiple fractures stimula- 

- 52 tion. AltaRock's Newberry EGS project, Groÿ Schönebeck project, Qiabuqia project, Petratherm's 

- 53 Paralana project and Salavatli project have applied multi-stage stimulation from fully perforated 

2 

- 54 casing with horizontal (or deviated) and multilateral drilling technology in sandstone and volcanic 

- 55 rocks.<sup>16,1824</sup> 

Fig. 1. Schematic diagram for the commonly used conceptual model and proposed conceptual model of the enhanced geothermal system (EGS). (a) Commonly used design: full bridging hydraulic fractures. (b) Proposed design: Partially bridging hydraulic fractures. 

Fig. 2. Schematic of the computational geometry model. 

3 

### Table 1 

Geometrical parameters of the model. 

|Parameters|Values|
|---|---|
|Model dimensions (m<sup>3</sup>)|1000_×_1000_×_1000|
|SRV dimensions (m<sup>3</sup>)|one fracture case: 240_×_500_×_500|
||two fractures case: 240_×_500_×_500|
||four fractures case: 600_×_500_×_500|
|Fracture numbers|one fracture case: 1|
||two fractures case: 2|
||four fractures case: 4|
|Well diameter (m)|0.1|
|Fracture width (m)|500|
|Fracture height (m)|400|
|Fracture spacing (m)|120|
|Well spacing (m)|400|

### Table 2 

Reservoir and fracture properties. 

|Parameters|HDR|SRV|Fracture|
|---|---|---|---|
|Density (kg/m<sup>3</sup>)|2600|2600||
|Heat conductivity (W/(m_·_K))|2.8|2.8||
|Heat capacity (J/(kg_·_K))|1000|1000||
|Porosity (%)|10|30|100|
|Permeability (m<sup>2</sup>)|5_×_10<sup>_−_15</sup>|5_×_10<sup>_−_14</sup>|1_×_10<sup>_−_12 </sup>(k0)|
|Thermal expansion coecient (1/K)|5_×_10<sup>_−_6</sup>|5_×_10<sup>_−_6</sup>||
|Young's modulus (Pa)|6_×_10<sup>10</sup>|6_×_10<sup>10</sup>||
|Poisson's ratio|0.25|0.25||
|Biot-Willis coecient|0.7|0.7||

4 

Table 3 

Characteristics of dierent simulations. 

|Section|Design|Fracture<br>number|Injection operation|Simulated physics|
|---|---|---|---|---|
|3.1|Fully bridging|1|Constant rate (20<br>kg/s)|Thermo-poroelastic opening<br>fractures|
|3.2|Fully bridging|2|Constant rate (50|Thermo-poroelastic opening|
||vs. partially||kg/s)|fractures|
||bridging||||
|3.3|Fully bridging|4|Constant rate (100|Thermo-poroelastic opening|
||vs. partially<br>bridging||kg/s)|fractures|
|3.4|Partially|4|Constant pressure|Thermo-poroelastic opening|
||bridging||(45 MPa) vs.<br>constant rate (33<br>kg/s)|fractures|
|3.5|Partially<br>bridging|4|Constant pressure<br>(45 MPa)|Thermo-poroelastic opening<br>fractures vs. thermo-poroelastic<br>non-opening fractures vs.<br>thermoelastic opening fractures<br>vs. poroelastic opening fractures|

- 56 

## 1.1. Fracture designs 

- 57 Refs.<sup>17,20,25</sup> have discussed the availability and advantages of applying horizontal drilling and multi- 

- 58 stage fracturing in geothermal reservoirs. Their results showed that multiple stages signicantly 59 improve economic performance and allow a higher ow rate to be circulated through the system. 

- 60 The commonly used concept model of a multi-fractured horizontal well EGS doublet is shown in 

- 61 Fig. 1a. The main fractures are assumed to be created by high-pressure injection into a section of 

- 62 the well that has been isolated and perforated, with fracture growth terminating when it intersects 63 the other well. We term these fractures fully bridging as they directly connect the two wells. 

- 64 During this process, the volume between the two main fractures may also be stimulated, usually by 

5 

- 65 the accumulation of poroelastic stresses, and its permeability may have increased. In this design, 

- 66 a portion of the injected water will enter the stimulated reservoir volume (SRV), absorb heat from 67 the rock matrix, and then exit into the production well.<sup>26</sup> However, this ow scheme is usually 68 associated with early thermal breakthrough; the size of the heat extraction zone will be limited by 69 the penetration length of injected water into the SRV. 

- 70 This paper proposes a new EGS well design that uses partially bridging hydraulic fractures 

- 71 to increase ow through the SRV, as illustrated in Fig. 1 (b). Half of the hydraulic fractures are 72 generated from the production well but, through close control of fracture growth, are stopped short of 73 the injection well. This could be achieved through high resolution, real-time microseimic monitoring 74 of the propagating fractures. The other half are grown from the injection well and stop short of the 75 production well. The position of production and injection fractures alternates down the length of 

- 76 the wells. The goal is for the fractures to provide connectivity to the SRV while preventing injected 77 water directly owing to the production well. Instead, the water in the injection fractures must 78 enter and ow through the SRV, exiting in fractures connected to the production well. 

- 79 The partially-bridging fracture scheme is likely not without its own challenges. Fracture growth 

- 80 is not entirely controllable, particularly in formations where pre-existing fractures alter the stress 

- 81 eld or provide preferred propagation pathways.<sup>27</sup> This could be problematic in the event that 

- 82 fully-bridging fractures are inadvertently created and some type of plugging solution was required. 

- 83 Nevertheless, compared with the well design of the fully bridging scheme (Fig. 1a), the proposed 

- 84 design ought to delay thermal breakthrough and result in more heat extraction over the production 85 lifetime. The order of fractures for the partially bridging EGS model could be achieved by the 

- 86 optimized zipper fracking (OZF) hydraulic technology, as proposed by Algarhy et al.<sup>28</sup> Algarhy et 

- 87 al.<sup>29</sup> explored the feasibility of OZF by numerical modelling and suggested that this technology 

- 88 could obtain an optimum stress shadow and maximize the stimulation of the SRV by ordering of 89 fractures. 

90 

## 1.2. Numerical models 

- 91 Many numerical models have been developed to simulate the various development stages of EGS 

- 92 focusing on coupled THM processes such as heat transfer, uid seepage and rock deformation.<sup>4,6,3033</sup> 

- 93 Studies have shown that fracture aperture variation due to the normal and/or shear stresses acting 

6 

- 94 on the fracture surfaces strongly aects uid ow and heat transfer in the fracture.<sup>32</sup> However, 

- 95 few studies have taken into account the evolution of fracture permeability due thermo-poroelastic 

- 96 eects under a full contact formulation. Some researchers<sup>31,34,35</sup> have proposed methods in which the 

- 97 permeability of a non-opening thin layer varies in response to a stress-dependent fracture stiness,<sup>31</sup> 

- 98 or an eective normal stress imposed across the fracture plane.<sup>35,36</sup> The assumption of a fracture as a 

- 99 non-opening surface signicantly improved the convergence speed and reduced computational time.<sup>37</sup> 

- 100 However, neglecting the opening nature of fractures might produce erroneous stress or aperture 

- 101 eects. McClure et al.<sup>38,39</sup> studied contact theory in-depth with application to modelling fracture 

- 102 opening in EGS projects to demonstrate realistic behaviors of fractures. 

Fig. 3. Cut plane along y = 500 m of geometry. 

7 

Fig. 4. The geometry of one fracture case and the fracture permeability comparison between two models. (a) Fracture permeability comparison; (b) relationship between fracture aperture and normal stress of changing fracture permeability model. 

103 Fractures and fracture networks are fundamental components of EGS that determine its technical 

104 and economic feasibility. Although substantial eorts have been made on the numerical modelling of 105 THM coupling process in EGS, there are still few studies addressing fracture aperture evolution in 106 3D under THM conditions and with multi-stage contacting fractures. Ghassemi et al.<sup>40</sup> analytically 107 studied fracture aperture variation under thermo-poroelastic perturbation for a geothermal reservoir 108 under the assumption of extremely low injection pressure, however opening due to pressure loading on 109 the fracture surfaces was not considered. Ghassemi and Zhou<sup>41</sup> used the displacement discontinuity 110 method to integrate coupled fracture ow and heat transfer with thermoporoelastic deformation of 111 rock. However, a sequential numerical coupling method was used and these can suer from instability 112 and inaccuracy for complex problems.<sup>37</sup> Nejati et al.<sup>42</sup> and Salimzadeh et al.<sup>33,37,43</sup> studied fractures 113 as 2D surface discontinuities within 3D rock matrix. Mechanical deformation, as well as contact 114 stresses on the opening fracture surfaces under compression are solved in a mechanical contact 115 model based on the Augmented Lagrangian (AL) method.<sup>42</sup> A key result of that study was to show 116 a low likelihood of fracture propagation under a pure opening mode during production. However, 117 the factors aecting induced reservoir failure evolution in SRV domain remain unclear. Besides, 118 the uncertainties inherent in induced reservoir failure modelling using non-opening fractures are 

8 

119 still unknown. It remains challenging to demonstrate the role of thermoporoelastic eects on stress 120 evolution in matrix rock adjacent to opening fractures, more so with our proposition of a new 121 partially bridging fracture geometry. 

122 In this study, a 3D THM numerical model is presented that explores the eects of cold water 123 injection into multi-stage contact fractures. To demonstrate the advantages of the proposed geome124 try, heat extraction performance and thermal breakthrough extent are compared against alternative 125 fracturing designs. In addition, a series of factors controlling reservoir stimulation are analyzed, 126 including the eects of dynamic fracture opening and permeability, dierent EGS design models, 127 dierent injection operation regimes. The separate roles of thermoelastic eect and poroelastic 

128 eects are also investigated. 

129 

# 2. Description of the THM fracture model 

#### 130 

## 2.1. Model assumptions 

131 Modelling heat extraction from a horizontal-well EGS must account for the dominant physical phe132 nomena including uid seepage, heat transfer and solid mechanics in fractured porous media. The 133 following assumptions are made, consistent with prior studies<sup>35,4446</sup> : (1) The EGS is a HDR reser134 voir that includes four hydraulic fractures linking one horizontal injection well and one horizontal 135 production well, with the fractures enclosing the SRV; (2) the SRV and HDR domains are simplied 136 as equivalent continuous porous medium with homogeneous and isotropic properties; (3) the per137 meability of the SRV domain is much higher than that of the HDR; (4) local thermal equilibrium 138 is assumed between the solid rock and uid; and (5) under operating conditions, water does not 139 vaporise and can be considered a liquid.<sup>47</sup> Hence, the reservoir is saturated with a single-phase uid 140 and ow within the porous media and fractures obeys Darcy's law. The physical properties of water 141 are described as a function of temperature.<sup>48</sup> 

9 

Fig. 5. Points stress path evolution comparison between changing fracture permeability model and constant fracture permeability model. (a) Point1 (reservoir center point); (b) point 2 shown in Fig. 6 

Fig. 6. Reservoir failure volume comparison between changing fracture permeability model and constant fracture permeability model. 

10 

Fig. 7. The relationship of extracted water temperature and produced water mass as well as production time comparison between fully and partially bridging two contact fractures EGS design model. 

11 

Fig. 8. Comparison of temperature contours in the SRV at equivalent production masses. (rst row) fully bridging EGS design model, (second row) partially bridging EGS design model. 

12 

Fig. 9. Model slice at y = 500 m with four opening fractures in (a) partially bridging conguration, and (b) fully bridging conguration. Blue and red circles indicate injection and production locations. Points marked 1 through 4 are referred to in Figs. 10, 12 and 14. (For interpretation of the references to colour in this gure legend, the reader is referred to the Web version of this article.) 

Fig. 10. Points stress evolution and reservoir failure volume comparison between fully bridging EGS design model and partially bridging EGS design model with four opening fractures under constant injection rate condition. (a) Point 1 shown in Fig. 9; (b) Failure volume comparison. 

13 

142 

## 2.2. Governing equations 

143 

The mass conservation equation for uid ow in porous media can be expressed: 

144 Where _ϕ_ is porosity, **_u_** _w_ (m/s) is Darcy velocity, _ε_ is volumetric strain in the reservoir domain, _Qm_ 145 is mass transfer between rock matrix and fractures, _ρw_ (kg/m<sup>3</sup> ) is density, and _αB_ is the Biot-Willis 146 coecient, which is dened in terms of the bulk modulus<sup>49</sup> : 

147 Here, _Ks_ (Pa) is the bulk modulus of a homogeneous block of the solid material, while _Kd_ (Pa) is 148 the drained bulk modulus of porous matrix of the same material. According to Darcy's law, the ow 149 velocity is expressed in terms of the pressure gradient: 

150 where _km_ (m<sup>2</sup> ) is permeability, _µw_ (Pa _·_ s) is viscosity, and _p_ (Pa) is uid pressure. The second term 151 on the RHS of (3), _ρw_ **g** _∇z_ , represents the eects of gravity, where **_g_** (m/s<sup>2</sup> ) is the gravity vector. 152 Using the storage model in,<sup>50</sup> we have 

153 Where _S_ (Pa<sup>_−_1</sup> ) is the storage coecient of reservoir, which can be expressed 

154 Where _Cw_ (Pa<sup>_−_1</sup> ) is the compressibility of water. Thus, the equation of mass conservation is 155 reformulated: 

14 

156 Similarly, an equation for ow in the fracture is obtained as: 

157 Where _Sf_ (Pa<sup>_−_1</sup> ), _kf_ (m<sup>2</sup> ), _df_ (m), and _εf_ are the specic storage, permeability, aperture and 158 volumetric strain of the fracture, respectively. To obtain a more realistic description of fracture uid 

159 ow with variation of the fracture aperture, the cubic law is employed<sup>51</sup> : 

160 Where _kf_ (m<sup>2</sup> ), _χ_ , and _af_ (m) are the permeability, roughness and aperture of fracture. In this 161 study, local thermal equilibrium is assumed between the pore water and the HDR reservoir. The 162 energy conservation equation in the matrix is formulated as<sup>52</sup> : 

163 Where _T_ (K) is temperature, _Cp,w_ (J/(kg _·_ K)) is heat capacity, _λw_ W/(m _·_ K) is thermal conductivity, 164 and _Qf,E_ is the heat exchange between matrix and fractures, ( _ρcp_ )m and _λm_ (W/(m _·_ K)) are the 165 eective volumetric heat capacity and the eective thermal conductivity, calculated as: 

166 

167 Where _ρ_ s (kg/m<sup>3</sup> ), _c_ p _,_ s (J/(kg _·_ K)) and _λ_ s (W/(m _·_ K)) are the density, heat capacity and thermal 168 conductivity of the solid rock, respectively. Similarly, the energy conservation equation in fractures 169 is written: 

170 Where ( _ρcp_ )f and _λf_ are the eective volumetric capacity and the eective thermal conductivity of 171 fractures. For this study, we have assumed that the reservoir behaves elastically, which is reason172 able for the uid pressures considered and for most thermal-induced deformation.<sup>32,48</sup> The linear 

15 

173 equilibrium equation under quasi-static conditions is expressed 

174 Where **_F_** (N/m<sup>3</sup> ) is the body force per unit volume, and **_σ_** (Pa) is the total stress tensor. The 175 eective stress tensor **_σ_** ' (Pa) for the rock matrix with pore uid pressure is dened as<sup>53</sup> 

176 Where **_I_** is the second-order identity tensor. Linear thermal strains induced by temperature changes 177 are formulated 

178 Where _Tini_ (K) is the initial rock temperature and **_α_** _T_ (K<sup>_−_1</sup> ) is the linear thermal expansion coe- 179 cient. For isotropic rock, **_α_** _T_ is related to the volumetric thermal expansion coecient _βs_ (K<sup>_−_1</sup> ).<sup>37</sup> 

180 The stress-strain relationship for thermo-elasticity is written<sup>54</sup> : 

181 Where **_D_** is the elasticity matrix, and _Kd_ (Pa) is the bulk modulus, expressed as: 

182 Where _E_ (Pa) is the elastic modulus, _ν_ is Poisson's ratio. Meanwhile, **_ε_** is the linear strain tensor 

183 in which **_u_** denotes the displacement vector. 

16 

Fig. 11. Comparison of injection rate, injection pressure, and total injection water mass comparison between constant injection rate condition and constant injection pressure condition model at the injection well for the partially bridging fractures EGS design (a) injection rate and injection pressure comparison (b) total injection water mass comparison. 

Fig. 12. Points stress evolution and failure volume comparison between constant injection pressure and constant injection rate condition for four partially bridging opening fractures EGS design model (a) Point 1 shown in Fig. 10a; (b) failure volume comparison. 

17 

Fig. 13. Temperature distribution comparison of cut plane at y = 500 m between opening fracture and non-opening fracture model for four partially bridging fractures EGS design models under constant injection pressure condition. (a) Opening fracture model; (b) non-opening fracture model. 

18 

Fig. 14. Points stress evolution comparison between thermo-poroelastic opening fracture model, thermo-poroelastic non-opening fracture model, thermoelastic opening fracture model, and poroelastic opening fracture model for four partially bridging fractures EGS design models under constant injection pressure condition (a) Point 1 shown in Fig. 9; (b) Point 2 (the injection well point); (3) Point 3 (the production well point); (4)Point 4 (located outside of fractures). 

19 

Fig. 15. Failure volume comparison between thermo-poroelastic opening fracture model, thermoporoelastic non-opening fracture model, thermoelastic opening fracture model, and poroelastic opening fracture model for four partially bridging fractures EGS design models under constant injection pressure condition. 

184 For the fracture contact model, thermal-induced strain and hydraulic loading are applied to the 185 fracture walls. We neglect any propagation of the fracture in a pure opening mode under normal 186 operation (i.e., outside of hydraulic stimulation). It is not clear whether sucient cooling could 187 be achieved at the dead-end fracture tip (minimal ow occurs without a closed circuit) for further 188 propagation to occur. In the event there was propagation, this wouldn't substantially modify the 189 ow eld unless a connection to the second well was achieved, in which case some sort of plugging 190 remediation would be needed. Based on the work of Salimzadeh et al.,<sup>33,37,43</sup> the tractions applied 191 on the xed fracture boundary Γc are expressed as 

192 Where **_σc_** (Pa) is the contact traction on the fracture walls, _pf_ (Pa) is the uid pressure applied on 193 the fractures, and **nc** is the outward directed unit normal. Substituting Eqs. (14)(20) and inte- 

20 

194 grating Eq. (13), the dierential equation describing the deformation eld considering the fracture 195 mechanical contact model under uid pressure and thermal contraction for the HDR is given by 

## 196 2.3. Model geometry 

197 We consider an idealised multi-stage fractured horizontal-well EGS geometry, commonly used in 198 other numerical EGS studies.<sup>9,44,55,56</sup> Fig. 2 illustrates the schematic of the computational model 199 for a doublet EGS horizontal well. The model includes a HDR layer that encloses the SRV and four 200 hydraulic fractures, one horizontal injection well with two injection points and one production well 201 with two production points. Water is only injected from the injection points and produced from 202 the production points. The parameters of this model are adopted from (Shi et al., 2019; Song et 203 al., 2018b). The computational domain is located at a depth of 45005500 m and has dimensions 204 1000 m _×_ 1000 m _×_ 1000 m. The SRV is 600 m _×_ 500 m _×_ 500 m and is located at the center 205 of the computational domain. The injection well is 50 m below the top of SRV and the production 206 well is 50 m above the bottom of the SRV. Each fracture comprises two surfaces that are initially 207 merged together. Key geometry and reservoir physical properties are given in Tables 1 and 2 with 208 most values derived from previous numerical studies of EGS.<sup>4,17,35,36</sup> 

#### 209 

## 2.4. Initial and boundary conditions 

210 At a depth of 5 km, we assumed an initial temperature of 300 °C and pressure of 40 MPa. Gradients 211 in temperature and pressure are ignored in this study. Dirichlet boundary conditions are applied at 212 the boundaries of the model, setting these to the initial temperature and pressure. The initial stress 213 state is assumed to reect a critically stressed crust close to the Mohr-Coulomb frictional failure 214 limit in a normal faulting environment. The initial vertical stress is set to 101.92 MPa assuming an 215 average density of 2600 kg/m<sup>3</sup> in the overburden of 4000 m depth. The initial minimum horizontal 216 stress, which is oriented normal to the fractures, is computed in terms of the eective vertical stress, 217 _σv_<sup>_′_,andthefrictionalpropertiesoffracturedrock.57</sup> 

21 

218 Where _fs_ is the coecient of rock friction, and _C_ is the cohesion. For typical values _fs_ = 0 _._ 6 219 and _C_ = 10 _MPa_ , then for example, at the depth of 4500 m, _σh_<sup>_′_is70.56MPa,andthisimpliesa</sup> 220 horizontal stress induced by the uid pressure and thermal stress decrease of 11.3 MPa would be 221 required to exceed the least principal stress and open a fracture. 

222 All boundaries of the computational model are constrained in normal directions. Besides, the 223 injection temperature of the water is set as 293.15 K. 45 MPa is employed at the injection well for 224 the constant injection pressure condition. 

225 2.5. COMSOL implementation 

226 Our model has been implemented in the general purpose nite element simulator COMSOL Mul227 tiphysics. Three modules are utilised: Solid mechanics, Darcy ow and Heat transfer in porous 228 media. These modules solve the equations described in Section 2.2 using a standard nite element 229 discretisation in space domain and nite dierence discretisation in time domain. The solid mechan230 ics module implements both the linear elastic material model for the matrix and the contact fracture 231 model, in which the two fracture walls are set as one contact pair. The Darcy ow module includes 232 the poroelastic storage model and fracture ow model. Finally, the heat transfer in porous media 233 module solves the energy conservation equation. The initial and boundary conditions in Section 2.4 234 are implemented and all of the three modules are coupled together via the poroelastic and thermal 235 expansion terms. 

236 To obtain tightly coupled solutions in this study, we use the segregated scheme implemented in 237 COMSOL due to its ease of implementation and reliable convergence. Temperature and pressure 238 are placed in one segregated step and solved together while the displacement and fracture contact 239 model is placed in the following segregated step. The implicit generalized- _α_ method is used for 240 time integration, which ensures unconditional stability when using the solid mechanics module.<sup>48,58</sup> 241 To obtain the solution at time ti, an initial guess for the two staggered steps is obtained from the 242 solution in the former time step. Then, the two segregated steps are solved sequentially and the 243 relative error _εr_ is estimated. If _εr_ is less than our prescribed tolerance _εt_ ( 1 _×_ 10<sup>_−_5</sup> in this paper), 244 the calculation moves from time step i to i+1. Otherwise, a new iteration step will be started 245 until _εr < εt_ . In order to accelerate convergence, the Newton iterations and Anderson acceleration 246 method are used. 

22 

# 247 3. Results and discussion 

- 248 In this section, we compare the operational performance of a simulated EGS project under dierent 249 fracture congurations and using dierent physics. The main aim is to identify rst-order design 250 decisions that improve heat recovery. A secondary aim is to resolve dierent aspects of the THM 251 fracture physics and rank their impact on our numerical solutions. We chose to monitor both these 252 aspects by measuring two performance metrics for the simulated EGS. 

253 The most important performance criterion for an EGS is production uid temperature. The aim 254 is to maintain this as high as possible (to maximize the eciency of energy generation) for as long as 255 possible (to maximize investment recovery), two factors that reect the eciency of the heat sweep. 256 Thermal short-circuiting via fast ow pathways in the reservoir will result in a premature drop of 257 the production temperature. This can be articially delayed by simply owing the system at a much 258 lower rate, which reduces the rate at which the cooling front propagates through the reservoir but 259 at the same time undermines performance. Therefore, a fairer measure of thermal performance is 260 to inspect plots of production temperature vs. total produced volume or mass. Fracture designs 261 or operational protocols that maintain higher temperature for the same produced mass can claim 262 superior performance. 

263 A second performance metric is long-term improvement of permeability within the reservoir dur264 ing normal operations. Although substantial permeability is presumed to be created during a period 265 of dedicated stimulation prior to production, long-term injection of cold water can perturb stresses 266 in the reservoir and induce additional fracture failure. We quantied this additional stimulation as 267 the volume of rock in which stress exceeds the Mohr-Coulomb failure criterion. We assumed that 268 all rock was initially at the Mohr-Coulomb limit, i.e., a critically stressed reservoir, and that there 269 was no stress depletion (Kaiser eect) from prior stimulations. These assumptions may not be valid 270 at every EGS site, however, they simplify the analysis and enable a straightforward comparison 271 between simulations. 

272 In the sections that follow, we investigate the eects of fracture geometry and number, opening 273 behaviour, various THM physics, and dierent injection operations, which is summarized in Table 274 3. 

23 

#### 275 

## 3.1. Thermal opening of a fracture 

- 276 Here, we modelled a single fracture connecting the injection and production wells using the geometry 

- 277 shown in Fig. 3. As the rock matrix cooled and normal stress decreased, the fracture opened 278 mechanically. Fracture permeability enhancement is modelled by the cubic law, whose aperture is 279 the opening distribution along fracture. A second simulation without fracture opening and hence 280 constant permeability was performed for comparison (Fig. 4a). Fracture aperture evolution with 281 normal stress across the fracture is shown in Fig. 4b. It demonstrates that fracture aperture will 282 remain at its initial value while the normal stress is less than zero. As the normal stress becomes 283 tensile, the fracture walls separate, opening linearly with increasing tensile stress to about 3.5 mm 284 at the end of simulation. 

285 To analyse accompanying reservoir stimulation, stress paths are plotted on top of an initial 286 Mohr circle for two selected points (Fig. 3). For a point halfway between injection and production 287 wells, the model with an opening fracture experienced failure about 1.8 years earlier than constant 288 permeability fracture (Fig. 5a). At a second point closer to the production well (Fig. 5b), failure 289 only occurred for the model with the opening fracture. Rock failure is more extensive when using 290 opening fractures (Fig. 6) because the elevated fracture permeability allows cold uid to penetrate 291 further into the reservoir, thereby perturbing stresses across a larger volume. Opening fractures also 292 disturb the stress eld, and this eect is demonstrated later in Section 3.5. 

#### 293 

## 3.2. Thermal performance of fully and partially bridging fracture designs 

294 To compare the temperature performance for the fully and partially bridging EGS design model, a 295 set of numerical EGS models with opening fractures under the constant injection rate condition are 296 simulated. Geometric and reservoir parameters are listed in Tables 1 and 2 For a fair comparison 297 between these two designs, the production water temperature of the production well is compared 298 under the same amount of produced water mass in this study for 20 years production time. As 299 shown in Fig. 7, the produced water temperature of the partially bridging model is higher than that 300 of the fully bridging model for the same amount of produced water mass. However, the produced 301 water mass of partially bridging EGS model is smaller than the fully bridging EGS model because 302 the partially EGS design forces the water to enter the SRV domain, which results in water ow 

24 

303 slowing compared with fully bridging EGS design. Nevertheless, the partially bridging model has a 304 lower rate of temperature decline post breakthrough, and a higher long-term stabilised temperature. 305 Advancement of temperature fronts through the SRV and fractures were analyzed to account 306 for the dierence above (Fig. 8). For the fully bridging model, injected water percolated within the 307 SRV adjacent to the fracture. As the permeability of the SRV is much smaller than the fracture, 308 the advective heat exchange of injected water with surrounding rock is limited, and the majority of 309 injected water ows in the fractures. In contrast, the temperature changes in the partially bridging 310 model are limited to alternating fractures connected to the injection well. The thermal front does not 311 reach the production fractures until it has passed through the SRV, hence increasing the eciency 312 of heat sweep. For the same injected volume, the thermal front has penetrated further into the SRV 313 for the partially bridging fracture conguration. 

314 

## 3.3. Stimulation performance of fully and partially bridging fracture designs 

315 In this section, we describe the eect of the two fracture designs on matrix stress evolution and 316 stimulation. Four partially and fully bridging opening fractures EGS design models with constant 317 injection rate are simulated. The geometry of two models along with stress measurement points are 318 shown in Fig. 9. 

319 Fig. 10a shows the evolving stress path at a point located halfway between two fractures. Failure 320 conditions are met after 14.5 years of injection for the fully bridging conguration, and 12.5 years 321 for the partially bridging fractures. This indicates that, by forcing uids to penetrate further into 322 the SRV, the partially bridging fracture conguration induces larger stress changes and more rapid 323 failure. Integrating failure across the entire modelled volume, Fig. 10b shows that for both models, 324 the stimulated zone grows rapidly at rst, slowing at later time. The total failure volume is always 325 larger for the partially bridging conguration, which suggests the stress paths exhibited in Fig. 10a 326 are representative of much of the reservoir. 

327 

## 3.4. Eect of injection: constant pressure vs. constant rate 

328 While injection rate targets might normally be specied to deliver a xed production ow rate, 329 practical considerations like pumping limits or rock stability might sometimes require injection to 330 be capped at an upper pressure. The eect of injection at constant pressure and constant rate 

25 

- 331 were considered from the perspective of reservoir stress evolution. For these simulations, the model 

332 geometry in Fig. 9a for the partially bridging EGS well design was used. For a fair comparison, 333 the same total injection volume was considered in both cases (Fig. 11b). At xed pressure, the 334 injection rate gradually decreases over time (Fig. 11a) as near well elevation of uid pressure reduces 335 injectivity. In contrast, to maintain the constant injection rate condition, an increasingly higher 336 injection pressure is required, reaching a nal injection pressure of 47 MPa. 

337 Stress paths in the reservoir (Fig. 12a) have a similar shape, although the failure time for a 338 constant injection pressure condition is earlier than that of constant injection rate condition. In 339 addition, a larger reservoir volume was failed for the constant injection pressure model. This is 340 because more water are injected at the early production time and there is a correspondingly larger 341 stress disturbance in the reservoir. These results imply that careful thought should be given to 342 prescribing a realistic injection scheme when using numerical models to predict EGS performance. 

#### 343 

## 3.5. Contribution of individual THM physics to stimulation 

344 The purpose of this section is to understand the individual contribution of modelling choices to the 345 simulated distribution of failure. In particular, we have looked at the eect of explicitly modelling 346 fracture opening, and the individual contributions of poroelasticity and thermoelasticity. To this 347 end, the model with four partially bridging fractures was used (Fig. 9a), and injection was simulated 348 under constant pressure conditions. As noted in Section 3.1, non-opening fractures have dierent 349 permeability properties and therefore dierent temperature evolution through the reservoir. To 350 enable a fair comparison against a model without opening fractures we mapped the fracture perme351 ability evolution for a simulation with open fractures onto a simulation without. This allows us to 352 distinguish the stress eects due to fracture opening from those due to permeability increase. 

353 For the temperature contour comparison of Fig. 9a is shown in Fig. 13, which we could see that 354 the opening fracture model could open due to the water pressure and the contraction induced by 355 the temperature change (Fig. 13a). However, the fractures in the non-opening fracture model is 356 modelled by a thin surface which cannot achieve the fracture opening. In addition, the temperature 357 distribution for these two models is the same, which can also see from Fig. 13. 

358 For the opening and non-opening fracture models, we compared evolving stress paths at four 359 points (Fig. 14). Generally, non-opening fractures exhibit failure earlier and to greater degrees than 

26 

360 when fracture opening was modelled. This is because opening fractures release stress that would 361 otherwise build-up were the fracture held non-opening. Total failure reservoir volume is also less 362 the simulation with opening fractures (Fig. 15). For these simulations, electing not to model the 363 eects of fracture opening would lead to an overestimate of stimulation by 1020%. This inaccuracy 364 depends both on the duration of injection as well as the ambient stress conditions. For example, a 365 deeper EGS with higher ambient stresses would not necessarily reach conditions for fracture opening 366 to occur (zero normal stress) and neglecting fracture opening becomes less inaccurate. 367 Poro and thermoelastic eects also make individual contributions to reservoir stress evolution 368 (Figs. 14 and 15). Poroelastic stress changes have only a minor inuence on the simulation outcome, 369 which is evident in similar failure times and volumes in simulations from which they are omitted. 370 However, it is interesting to note that, when present, they appear to play a role of stabilizing<sup>59</sup> and 371 delaying the stress changes that induce failure. In contrast, the thermoelastic eect plays a leading 372 role in controlling stress changes of the SRV, as evidenced by much smaller failure volumes when 373 they are omitted (Fig. 15). 

374 We have also considered stress evolution for a point on the injection and production wells 375 (Fig. 14b and c). The injection well very rapidly encounters failure conditions whereas stresses 376 at the production well are stabilised during operation of the EGS. This is because the signicant 377 thermoelastic stress change by cooling water is local to the injection well, whereas temperature in 378 rock matrix surrounding the production well is much more stable. Stabilizing injection boreholes 379 in large cooled rock masses may become challenging for long-term EGS implementation. Finally, 380 stress changes were considered at a point outside of fractures (Fig. 14d). Due to small temperature 381 changes, and a distant EGS operation, the stress changes here are minor and stabilizing. 

#### 382 

# 4. Conclusion 

383 In this study, we proposed a new horizontal EGS well design that uses partially bridging multi384 stage hydraulic fractures. The goal is to force water to pass through a reservoir matrix rather than 385 short-circuiting fractures, thereby improving heat sweep and delaying thermal breakthrough. A 3D 386 THM model with contacting fractures was established for the new design and its heat extraction 

387 performance was evaluated alongside traditional designs. The following key ndings were made: 

27 

- 388 (1) Total water production for the partially-bridging model is less than a fully bridging model 389 because the principle ow path (SRV) has a lower permeability that the connecting frac390 tures. Nevertheless, the partially-bridging design maintained higher production temperatures 391 for longer at equivalent production volumes, owing to its larger heat exchange zone. 

- 392 (2) Stress evolution trajectories suggest that the partially-bridging model would promote more 393 extensive secondary shear failure during production owing to the comparatively larger volume 394 of water that transits the reservoir matrix. Ideally this would translate to improvements in 395 reservoir permeability, although we caution that thermal channeling<sup>60</sup> could undermine heat 396 sweep eciency if fast pathways started to dominate. 

- 397 (3) Modelling assumptions that neglect the opening of fracture surfaces could result in an overesti398 mate of induced reservoir failure. This occurs because non-opening fractures amplify thermoe399 lastic stresses that are otherwise dissipated by opening mode displacement. The inaccuracy is 400 likely to be particularly pronounced at shallow depths where normal stresses are low. 

- 401 (4) Comparisons show that thermoelastic stresses play a larger role than poroelastic stresses. 

- 402 Although our theoretical analysis of the proposed fracturing design is encouraging, much work 403 remains to be done. The parameters we used were largely inspired from literature studies but 404 these nevertheless provide only a handful of representative models in much larger space of possible 405 realizations. A signicant point for future studies would be to explore optimization of operational 406 and reservoir parameters such as the inlet temperature, injection pressure, well spacing, fracture 407 spacing, and fracture numbers, to improve performance in specic eld applications. Embedding 408 this optimization-style approach alongside a rigorous analysis of economic and environmental factors 

- 409 ought to provide a rational basis for establishing the feasibility of partially-bridging fracture designs. 

#### 410 

# Declaration of competing interest 

- 411 The authors declare that they have no known competing nancial interests or personal relationships 412 that could have appeared to inuence the work reported in this paper. 

28 

# 413 Acknowledgements 

- 414 Pengliang Yu is supported by the New Zealand-China Doctoral Research Scholarship co-issued by 

- 415 the Ministry of Foreign Aairs and Trade (New Zealand) and China Scholarship Council (CSC). The 

- 416 authors wish to acknowledge the Centre for eResearch at the University of Auckland for their help in 

- 417 facilitating this research on Research Virtual Machine. http://www.eresearch.auckland.ac.nz. 418 The authors thank Mark McClure, two anonymous reviewers and Editor Robert W. Zimmerman for 419 comments that improved the quality of this manuscript. 

# 420 References 

- 421 [1] Breede K, Dzebisashvili K, Liu X, Falcone G. A systematic review of enhanced (or engineered) 422 geothermal systems: past, present and future. Geoth Energy. 2013;1(1):127. 

- 423 [2] Melikoglu M. Geothermal energy in Turkey and around the world: a review of the literature 424 and an analysis based on Turkey's Vision 2023 energy targets. Renew Sustain Energy Rev. 425 2017;76:485492. 

- 426 [3] Tester JW, Anderson BJ, Batchelor AS, et al. The Future of Geothermal Energy in the 21 427 Century Impact of Enhanced Geothermal Systems (EGS) on the United States. 2006. 

- 428 [4] Song X, Shi Y, Li G, et al. Numerical simulation of heat extraction performance in enhanced 429 geothermal system with multilateral wells. Appl Energy. 2018;218:325337. 

- 430 [5] Bradford J, McLennan J, Tiwari S, et al. Application of hydraulic and thermal stimulation 431 techniques at Raft River, Idaho: a DOE enhanced geothermal system demonstration project. 432 In: 50th US Rock Mechanics/Geomechanics Symposium. American Rock Mechanics Association; 433 2016. 

- 434 [6] Cao W, Huang W, Jiang F. A novel thermalhydraulicmechanical model for the enhanced 435 geothermal system heat extraction. Int J Heat Mass Tran. 2016;100:661671. 

- 436 [7] Chen J, Jiang F. Designing multi-well layout for enhanced geothermal system to better exploit 437 hot dry rock geothermal energy. Renew Energy. 2015;74:3748. 

29 

- 438 [8] Cladouhos TT, Petty S, Swyer MW, Uddenberg ME, Nordin Y. Results from Newberry Volcano 439 EGS Demonstration. In: Proceed. 40 th Workshop Geotherm. Res. Eng. SGP-TR-204. 2015. 

- 440 [9] Huang W, Cao W, Jiang F. Heat extraction performance of EGS with heterogeneous reservoir: 441 a numerical evaluation. Int J Heat Mass Tran. 2017;108:645657. 

- 442 [10] Lengliné O, Boubacar M, Schmittbuhl J. Seismicity related to the hydraulic stimulation of 443 GRT1, Rittershoen, France. Geophys J Int. 2017;208(3):17041715. 

- 444 [11] Lu SM. A global review of enhanced geothermal system (EGS). Renew Sustain Energy Rev. 445 2018;81:29022921. 

- 446 [12] Dezayes C, Genter A, Valley B. Structure of the low permeable naturally fractured geothermal 447 reservoir at Soultz. Compt Rendus Geosci. 2010;342(7-8):517530. 

- 448 [13] Brown DW, Duchane DV, Heiken G, Hriscu VT. Mining the Earth's Heat: Hot Dry Rock 449 Geothermal Energy. Springer Science & Business Media; 2012. 

- 450 [14] Jung R. EGSgoodbye or back to the future. In: ISRM International Conference for Eec451 tive and Sustainable Hydraulic Fracturing. International Society for Rock Mechanics and Rock 452 Engineering; 2013. 

- 453 [15] Riault J, Dempsey D, Karra S, Archer R. Microseismicity cloud can be substantially larger 454 than the associated stimulated fracture volume: the case of the Paralana Enhanced Geothermal 455 System. J Geophys Res Solid Earth. 2018;123(8):68456870. 

- 456 [16] Shiozawa S, McClure M. EGS designs with horizontal wells, multiple stages, and proppant. In: 457 Proceedings of the 39th Workshop on Geothermal Reservoir Engineering, Stanford. 2014. 

- 458 [17] Han S, Cheng Y, Gao Q, Yan C, Zhang J. Numerical study on heat extraction performance of 459 multistage fracturing Enhanced Geothermal System. Renew Energy. 2020;149:12141226. 

- 460 [18] Bendall B, Hogarth R, Holl H, McMahon A, Larking A, Reid P. Australian experiences in EGS 461 permeability enhancementa review of 3 case studies. In: Proceedings of the 39th Workshop on 462 Geothermal Reservoir Engineering, Stanford. 2014. 

30 

- 463 [19] Lei Z, Zhang Y, Zhang S, et al. Electricity generation from a three-horizontal-well enhanced 464 geothermal system in the Qiabuqia geothermal eld, China: slickwater fracturing treatments 465 for dierent reservoir scenarios. Renew Energy. 2020;145:6583. 

- 466 [20] Li T, Shiozawa S, McClure MW. Thermal breakthrough calculations to optimize design of a 467 multiple-stage Enhanced Geothermal System. Geothermics. 2016;64:455465. 

- 468 [21] Nair R, Peters E, liaupa S, Valickas R, Petrauskas S. A case study of radial jetting technology 469 for enhancing geothermal energy systems at Klaipeda geothermal demonstration plant. In: 470 42nd Workshop on Geothermal Reservoir Engineering Stanford University, Stanford, CA. Feb 471 2017:1315. 

- 472 [22] Petty S, Nordin Y, Glassley W, Cladouhos TT, Swyer M. Improving geothermal project eco473 nomics with multi-zone stimulation: results from the newberry volcano EGS demonstration. In: 474 Proceedings of the Thirty-Eighth Workshop on Geothermal Reservoir Engineering. Feb 2013:11 475 13. 

- 476 [23] Serpen U, Aksoy N. Successful perforation operation experience in a geothermal well of salavatli 477 geothermal eld. In: Fourtieth Workshop on Geothermal Reservoir Engineering. Stanford Uni478 versity; 2015. 

- 479 [24] Zimmermann G, Reinicke A, Blöcher G, et al. Multiple fracture stimulation treatments to 480 develop an enhanced geothermal system (EGS). In: 8th Euro Conference of Rock Physics and 481 Geomechanics. Switzerland: Ascona; 2009. 

- 482 [25] Shiozawa S, McClure M. EGS Designs with horizontal wells, multiple stages, and proppant. In: 483 Proceedings of the 39th Workshop on Geothermal Reservoir Engineering. Feb 2014. Stanford. 

- 484 [26] Asai P, Panja P, Velasco R, McLennan J, Moore J. Fluid ow distribution in fractures for a 485 doublet system in Enhanced Geothermal Systems (EGS). Geothermics. 2018;75:171179. 

- 486 [27] McClure MW, Horne RN. An investigation of stimulation mechanisms in Enhanced Geothermal 487 Systems. Int J Rock Mech Min Sci. 2014;72:242260. 

- 488 [28] Algarhy A, Soliman M, Heinze L, Gorell S, Henderson S, Nasr-El-Din H. Increasing Hydrocarbon 489 Recovery from Shale Reservoirs through Ballooned Hydraulic Fracturing. In: Unconventional 

31 

- 490 Resources Technology Conference. Austin, Texas: Society of Exploration Geophysicists, Ameri491 can Association of Petroleum Geologists, Society of Petroleum Engineers; July 2017:21162128. 

- 492 [29] Algarhy A, Soliman M, Heinze L, et al. Design Aspects of Optimized Zipper Frac. In:53rd US 493 Rock Mechanics/Geomechanics Symposium. American Rock Mechanics Association; August 494 2019. 

- 495 [30] Asai P, Panja P, Velasco R, McLennan J, Moore J. Fluid ow distribution in fractures for a 496 doublet system in Enhanced Geothermal Systems (EGS). Geothermics. 2018;75:171179. 

- 497 [31] Pandey SN, Chaudhuri A, Kelkar S. A coupled thermo-hydro-mechanical modeling of frac498 ture aperture alteration and reservoir deformation during heat extraction from a geothermal 499 reservoir. Geothermics. 2017;65:1731. 

- 500 [32] Rutqvist J, Barr D, Datta R, et al. Coupled thermalhydrologicalmechanical analyses of the 501 Yucca Mountain Drift Scale Testcomparison of eld measurements to predictions of four 502 dierent numerical models. Int J Rock Mech Min Sci. 2005;42(5-6):680697. 

- 503 [33] Salimzadeh S, Nick HM, Zimmerman RW. Thermoporoelastic eects during heat extraction 504 from low-permeability reservoirs. Energy. 2018;142:546558. 

- 505 [34] Shi Y, Song X, Li J, Wang G, Zheng R, YuLong F. Numerical investigation on heat extraction 506 performance of a multilateral-well enhanced geothermal system with a discrete fracture network. 507 Fuel. 2019;15(244):207226. 

- 508 [35] Sun ZX, Zhang X, Xu Y, et al. Numerical simulation of the heat extraction in EGS with thermal509 hydraulic-mechanical coupling method based on discrete fractures model. Energy. 2017;120:20 510 33. 

- 511 [36] Shi Y, Song X, Li J, Wang G, Yu Long F, Geng L. Analysis for eects of complex fracture 512 network geometries on heat extraction eciency of a multilateral-well enhanced geothermal 513 system. Appl Therm Eng. 2019;159:113828. 

- 514 [37] Salimzadeh S, Paluszny A, Nick HM, Zimmerman RW. A three-dimensional coupled 515 thermo-hydro-mechanical model for deformable fractured geothermal systems. Geothermics. 516 2018;71:212224. 

32 

- 517 [38] McClure M, Kang C. ResFrac Technical Writeup. 2018. arXiv preprint arXiv:1804.02092. 

- 518 [39] McClure MW. Modeling and Characterization of Hydraulic Stimulation and Induced Seismicity 

- 519 in Geothermal and Shale Gas Reservoirs. Stanford, California: Stanford University; 2012. PhD 520 Thesis. 

- 521 [40] Ghassemi A, Nygren A, Cheng A. Eects of heat extraction on fracture aperture: a poro 522 thermoelastic analysis. Geothermics. 2008;37(5):525539. 

- 523 [41] Ghassemi A, Zhou X. A three-dimensional thermo-poroelastic model for fracture response to 524 injection/extraction in enhanced geothermal systems. Geothermics. 2011;40(1):3949. 

- 525 [42] Nejati M, Paluszny A, Zimmerman RW. A nite element framework for modeling internal 526 frictional contact in three-dimensional fractured media using unstructured tetrahedral meshes. 527 Comput Methods Appl Mech Eng. 2016;306:123150. 

- 528 [43] Vik HS, Salimzadeh S, Nick HM. Heat recovery from multiple-fracture enhanced geothermal 529 systems: the eect of thermoelastic fracture interactions. Renew Energy. 2018;121:606622. 

- 530 [44] Song X, Shi Y, Li G, et al. Numerical simulation of heat extraction performance in enhanced 531 geothermal system with multilateral wells. Appl Energy. 2018;218:325337. 

- 532 [45] Cheng WL, Wang CL, Nian YL, Han BB, Liu J. Analysis of inuencing factors of heat extraction 533 from enhanced geothermal systems considering water losses. Energy. 2016;115:274288. 

- 534 [46] Qu ZQ, Zhang W, Guo TK. Inuence of dierent fracture morphology on heat mining 535 performance of enhanced geothermal systems based on COMSOL. Int J Hydrogen Energy. 536 2017;42(29):1826318278. 

- 537 [47] Thomson GW. The Antoine equation for vapor-pressure data. Chem Rev. 1946;38(1):139. 

- 538 [48] Multiphysics CO. Comsol Multiphysics User Guide (Version 5.5). COMSOL, AB; 2019. 

- 539 [49] Biot MA. Mechanics of deformation and acoustic propagation in porous media. J Appl Phys. 540 1962;33(4):14821498. 

- 541 [50] Zhou S, Zhuang X, Rabczuk T. Phase-eld modeling of uid-driven dynamic cracking in porous 542 media. Comput Methods Appl Mech Eng. 2019;350:169198. 

33 

- 543 [51] Zimmerman RW, Bodvarsson GS. Hydraulic conductivity of rock fractures. Transport Porous 544 Media. 1996;23(1):130. 

- 545 [52] Shi Y, Song X, Wang G, Li J, Geng L, Li X. Numerical study on heat extraction performance 546 of a multilateral-well enhanced geothermal system considering complex hydraulic and natural 547 fractures. Renew Energy. 2019;141:950963. 

- 548 [53] Biot MA. General theory of three-dimensional consolidation. J Appl Phys. 1941;12(2):155164. 

- 549 [54] Khalili N, Selvadurai AP. A fully coupled constitutive model for thermo-hydro-mechanical anal550 ysis in elastic media with double porosity. Geophys Res Lett. 2003;30(24). 

- 551 [55] Li M, Gou Y, Hou Z, Were P. Investigation of a new HDR system with horizontal wells and 552 multiple fractures using the coupled wellborereservoir simulator TOUGH2MP-WELL/EOS3. 553 Environmental Earth Sciences. 2015;73(10):60476058. 

- 554 [56] Jiang F, Luo L, Chen J. A novel three-dimensional transient model for subsurface heat exchange 555 in enhanced geothermal systems. Int Commun Heat Mass Tran. 2013;41:5762. 

- 556 [57] Jaeger JC, Cook NG, Zimmerman R. Fundamentals of Rock Mechanics. John Wiley & Sons; 557 2009. 

- 558 [58] Borden MJ, Verhoosel CV, Scott MA, Hughes TJ, Landis CM. A phase-eld description of 559 dynamic brittle fracture. Comput Methods Appl Mech Eng. 2012;217:7795. 

- 560 [59] Fryer B, Siddiqi G, Laloui L. Injection-induced seismicity: strategies for reducing risk using 561 high stress path reservoirs and temperature-induced stress preconditioning. Geophys J Int. 562 2020;220(2):14361446. 

- 563 [60] Rongved M, Bauer A, Dempsey D, Holt RM. Two-dimensional numerical modelling of strategies 564 to avoid thermal stress induced ow channeling in fractured geothermal reservoirs. Geothermics. 565 2021;90:101978. 

34 

