# Simulation of the crystal growth of platelet sea ice with diffusive heat and mass transfer

**Authors:** Pat Wongpan, Patricia J. Langhorne, David E. Dempsey, Lisa Hahn-Woernle, Zhifa Sun  
**Published in:** Annals of Glaciology (2015)  
**DOI (version of record):** https://doi.org/10.3189/2015aog69a777  
**This copy:** Accepted manuscript (peer-reviewed, author's version). Text extracted from the PDF at https://ddempsey.github.io/papers/2015-wongpan-simulation-crystal-growth-platelet-sea/wongpan2015-simulation-crystal-growth.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** Accepted manuscript. This article has been published in a revised form in Annals of Glaciology at https://doi.org/10.3189/2015aog69a777. This version is free to view and download for private research and study only. Not for re-distribution, re-sale or use in derivative works.  

---
1 

# Simulation of the crystal growth of platelet sea ice with diusive 

# 2 heat and mass transfer 

3 

4 

Pat WONGPAN,<sup>1</sup> Patricia J. LANGHORNE,<sup>1</sup> David E. DEMPSEY,<sup>1</sup><sup>_,_2</sup> 

Lisa HAHN-WOERNLE,<sup>1</sup><sup>_,_3</sup><sup>_,_4</sup> Zhifa SUN<sup>1</sup> 

5 

> 1 Department of Physics, University of Otago, Dunedin, New Zealand 

6 

7 

8 

9 

E-mail: pat.wongpan@postgrad.otago.ac.nz 

> 2 Los Alamos National Laboratory, Los Alamos, NM, USA 

> 3 ETH Zürich, Zürich, Switzerland 

> 4 Utrecht University, Utrecht, The Netherlands 

- 10 ABSTRACT. Antarctic coastal sea ice often grows in water that has been supercooled by interac11 tion with an ice shelf. In these situations, ice crystals can form at depth, rise and deposit under the 12 sea-ice cover to form a porous layer that eventually consolidates near the base of the existing sea ice. 13 The least consolidated portion is called the sub-ice platelet layer. Congelation growth eventually 

- 14 causes the sub-ice platelet layer to become frozen into the sea-ice cover as incorporated platelet ice. 

15 In this study, we simulate these processes in three dimensions using Voronoi dynamics to govern 16 crystal growth kinetics. Platelet deposition, in situ growth and incorporation into the sea-ice cover 17 are integrated into the model. Heat and mass transfer are controlled by diusion. We extract and 18 compare spatialtemporal distributions of porosity, salinity, temperature and crystallographic c- 19 axes with observations from McMurdo Sound, Antarctica. The model captures the crystallographic 

- 20 structure of incorporated platelet ice as well as the topology of the sub-ice platelet layer. The solid 

- 21 fraction, which has previously been poorly constrained, is simulated to be _∼_ 0 _._ 22 , in good agreement 22 with an earlier estimate of 0 _._ 25 _±_ 0 _._ 06 . This property of the sub-ice platelet layer is important for 

- 23 biological processes, and for the freeboardthickness relationship around Antarctica. 

- 24 KEYWORDS: Antarctic glaciology, sea ice, sea-ice growth and decay, sea-ice modelling, sea25 ice/ice-shelf interactions 

1 

### 26 

# INTRODUCTION 

- 27 When sea water freezes, the resulting sea ice generally contains pure ice crystals, as well as brine 

- 28 and gas pockets. Granular ice, formed from the consolidation of a layer of tiny ice crystals at the 

- 29 air/ocean interface (Maus and De la Rosa, 2012; Naumann and others, 2012, and references therein), 

- 30 grows downwards, with faster growth on the crystal basal plane than in the c-axis direction (Hillig, 

- 31 1959). The aspect ratio of this anisotropic growth, i.e. the growth rate in the basal plane divided 

- 32 by that in the c-axis direction, lies in the range 20100 (Smedsrud and Jenkins, 2004; Kawano and 33 Ohashi, 2009). Consequently, as the ice grows, geometric selection lters out the granular crystals 

- 34 with c-axes close to the vertical (Kolmogorov, 1949), and columnar ice is formed with c-axes lying 

- 35 close to the horizontal plane. We refer to the sea ice that forms by conduction of heat through the 36 sea ice to the atmosphere as congelation ice. 

- 37 Around the coast of Antarctica, sea ice often grows in water that has been supercooled by ocean 

- 38 ice-shelf interactions (e.g. Lewis and Perkin, 1986). Tiny crystals exist within this supercooled water 

- 39 column. These crystals rise to the surface and deposit under the sea-ice cover to form a porous layer 

- 40 in an evolving state of consolidation. The least consolidated portion is called the sub-ice platelet 

- 41 layer (e.g. Fig. 1). Eventually heat loss to the atmosphere, as well as to the near-surface supercooled 

- 42 ocean, causes these crystals to become frozen into the sea-ice cover as incorporated platelet ice (Smith 

- 43 and others, 2001; Dempsey and others, 2010; Gough and others, 2012a). Platelet ice is therefore 

- 44 important because it is a surface expression of processes that take place deep in an ice-shelf cavity. 

- 45 These processes may inuence sea-ice thickness (e.g. Hellmer, 2004) and extent (Bintanja and others, 

- 46 2013). Further, because the sub-ice platelet layer is highly porous and provides a stable surface for 

- 47 algal attachment, it harbours some of the highest accumulations of sea-ice algae found anywhere on 48 Earth (Arrigo and Thomas, 2004). 

- 49 In addition, platelet ice inuences the measurement of sea-ice thickness. There are three major 

- 50 techniques for obtaining sea-ice thickness: drilling, electromagnetic induction sounding, and airborne 51 and satellite altimeter measurements (Haas and Druckenmiller, 2009). Within limitations posed by 

- 52 the snow-cover thickness, these methods are fairly well developed for congelation ice, particularly 

- 53 in the Arctic (Haas and Druckenmiller, 2009). Around regions of coastal Antarctica, on the other 

- 54 hand, the situation is further complicated due to the highly porous, sub-ice platelet layer. For 

2 

- 55 electromagnetic induction thickness estimates, a value of the solid fraction of the sub-ice platelet layer 

- 56 is needed to constrain the electrical conductivity for the inversion algorithm. The solid fraction of this 

- 57 layer is also needed to derive sea-ice thickness from freeboard, using the assumption of hydrostatic 

- 58 equilibrium and altimeter measurements. Price and others (2014) have recently demonstrated that 

- 59 sea-ice thickness, derived from freeboard estimates, may be in error by up to 20% because of the 

- 60 presence of a sub-ice platelet layer. 

Fig. 1. The sub-ice platelet layer captured with an underwater camera (courtesy A.J. Gough and A.R. Mahoney). Note that the scale between the red lines is 0.05 m. 

3 

Fig. 2. An ice crystal is seeded at **c** _i_ with orientation or c-axis direction � **c** . **r** is a position vector relative to xyz coordinates. **r** _−_ **c** _i_ (grey vector) represents a relative displacement from a certain position in space to the seeding position. _Gc_ and _G_ b are growth functions in the c-axis direction and the basal plane, respectively. 

61 It remains a challenge to directly measure the solid fraction by sampling. A variety of methods 62 has been applied to obtain the solid fraction of the sub-ice platelet layer ( _f_ s ), and Gough and others 63 (2012a) have summarized typical estimates from several authors to be between 0.2 and 0.5. The 64 most accurate value to date is _f_ s = 0 _._ 25 _±_ 0 _._ 06 , based on the heat ux measurements of Gough and 65 others (2012a). 

66 One possible way to obtain this sub-ice platelet layer solid fraction is to simulate a number of ice 67 platelets oating up from depth, being deposited and continuing to grow locally under the sea-ice 68 cover. In short, it is a solidication problem. There are many methods available to solve this type of 69 problem (e.g. the level set method (Tan and Zabaras, 2006), the phase eld model (Kobayashi, 1993), 70 cellular automata (Spittle and Brown, 1994) and smoothed particle hydrodynamics (Monaghan and 71 others, 2005)). The accuracy of those models is superb, but the complexity of the mathematics and 72 the demand on computational resources are also at a high level, especially for simulations in three 73 dimensions (3-D). Taking these factors into account, Voronoi dynamics (Ohashi and others, 2004) 

- 74 is a exible and simple but ecient method to simulate the physical processes of interest here. This 

4 

- 75 technique divides space into a set of points (or seeds) and for each seed there is a corresponding 

- 76 region consisting of all points closer to that seed than to any other. The construction of a set of 77 rules allows crystal growth kinetics to be simulated. 

- 78 Kawano and Ohashi (2006) performed such simulations in two dimensions (2-D) and report 

- 79 that their simulated value of brine area fraction from Voronoi dynamics, combined with salinity 80 concentration in a 2-D domain, is higher than that of laboratory-grown sea ice. They point out that 

- 81 the missing dimension may cause loss of generality in their simulation. Their more recent paper 82 (Kawano and Ohashi, 2009), in which heat conduction and salinity diusion are included, is also 83 limited to a 2-D approximation. 

- 84 In an independent study, Dempsey (2008) and Dempsey and others (2010) used a purely me85 chanical model of Voronoi dynamics to simulate the accumulation and growth of platelet ice. Their 86 results have some limitations, especially with regard to the lack of thermodynamic and uid dynamic 87 processes. Most importantly, the temporal evolution of solid fraction and the resulting salinity prole 88 require thermodynamic implementation. 

- 89 Recently, Hahn-Woernle (2011) introduced two simulations with the inclusion of heat and salt 

- 90 transport. The rst is a one-dimensional Voronoi model which simulates the vertical growth of a 91 sea-ice slab due to heat conduction through an airicesea stack with varying thermal constants. 92 The heat ux and salt diusion can be monitored numerically. The second is a 2-D model of the 93 growth of an individual platelet crystal through a vertical cut. Voronoi dynamics, including heat 94 and salt constraints, was again used. 

- 95 In this paper, we build a direct numerical simulation using Voronoi dynamics with diusive 96 heat and mass transfer. A 3-D model is necessary to understand the spectrum of growth processes 97 in sea ice, and platelet ice in particular, starting from individual crystals in the water column and 98 leading to the formation of a sub-ice platelet layer. Furthermore, we take into account the advancing 99 interface, driven by heat loss to the atmosphere, and the deposition of ice crystals from the ocean 

- 100 to create dierent scenarios that imitate the natural process of incorporated platelet ice formation. 

- 101 In a similar process to taking a sea-ice core, we extract the solid fraction, temperature, salinity 

- 102 and crystal orientations from virtual sea-ice cores through the 3-D model domain, and compare the 103 results to physical sea-ice cores retrieved from Antarctica. 

5 

# 104 VORONOI DYNAMICS WITH DIFFUSIVE HEAT AND MASS 105 TRANSFER 

106 The model is built in a 3-D domain Ω( **r** _, t_ ) . This is discretized into cells and each cell has four 3-D 107 matrices associated with it: solid fraction _φ_ ( **r** _, t_ ) , characteristic number _K_ ( **r** _, t_ ) , temperature _T_ ( **r** _, t_ ) 108 and salinity _S_ ( **r** _, t_ ) , where **r** = ( _x, y, z_ ) and _t_ are the position vector and time respectively. _K_ ( **r** _, t_ ) 109 identies whether a cell is brine, icebrine mixture or is labelled as an ice crystal to preserve its 110 crystal orientation. 

### 111 

## Voronoi dynamics 

112 Consider a crystal _i_ with seed position **c** _i_ , c-axis � **c** and characteristic number _Ki_ . The magnitude of 113 the relative position _|_ **r** _−_ **c** _i|_ of a point with position **r** in the domain Ω( **r** _, t_ ) from position **c** _i_ (Fig. 2) 114 is stored in the displacement matrix as 

115 The Voronoi dynamics condition, which contains information about ice crystal growth kinetics, 

116 is well posed and ready to iterate (Fig. 3). ∆ _t_ V is the time step for the Voronoi dynamics condition. 117 In Eqn (2), _Gi_ ( **r** ) is the growth matrix of an ice crystal, which is dened as (Dempsey and others, 118 2010) 

119 where _R_ b and _Rc_ are the magnitudes of the basal-plane and c-axis components of _|_ **r** _−_ **c** _i|_ , respectively. 120 Similarly _G_ b and _Gc_ are growth functions on the basal plane and along the c-axis. Except where 121 crystals are deposited from the ocean, _G_ b and _Gc_ are constant in this paper, i.e. _G_ b = _g_ b and 122 _Gc_ = _gc_ , where _g_ b and _gc_ are growth rates on the basal plane and along the c-axis. The aspect 123 ratio is dened as _α ≡ g_ b _/gc_ which is chosen such that geometrically an oblate spheroid crystal 124 is grown with minor axis aligned with the c-axis as applied in Dempsey and others (2010). In 

6 

125 addition, if we consider an advancing planar interface, the displacement and growth matrix are _z_ 

126 and _g_ int = constant, respectively. The corresponding Voronoi dynamics condition is 

Fig. 3. To illustrate how Voronoi dynamics works, consider the liquid domain (white) in two dimensions. An ice cell (grey) is seeded at position O and it grows iteratively to form the connected ice cells (light blue) which we call the crystal. The displacement of other cells from cell O and the growth functions are calculated in advance and kept in the **R** and **G** matrices. At a certain time _t_ , consider cells A and B. Their displacement vectors **OA** and **OB** are drawn with blue vectors. Note that these two vectors are time-independent. Their growth functions, describing the crystal growth kinetics, multiplied by time ( **G** _t_ ) are represented by a red dashed contour which we call here the `Voronoi front'. For cells of interest, we can construct red vectors from point O to this front and in the same direction as their displacement vector. These two vectors are compared for each cell. If the Voronoi dynamics condition ( **R** _−_ **G** _t <_ 0 ) is satised and if the cell is adjacent to at least one ice cell, it can grow or ip to an ice cell at this time. Thus at the time illustrated, A remains liquid while B becomes solid. 

7 

Table 1. Parameters collected from Kawano and Ohashi (2009) and Hahn-Woernle (2011) 

|Specic heat of solid|_c_s|2040|J kg<sup>_−_1 </sup>K<sup>_−_1</sup>|
|---|---|---|---|
|Specic heat of liquid|_cℓ_|4217|J kg<sup>_−_1 </sup>K<sup>_−_1</sup>|
|Density of solid and liquid|_ρ_s|916.8|kg m<sup>_−_3</sup>|
|Density of liquid|_ρℓ_|1000|kg m<sup>_−_3</sup>|
|Thermal conductivity of solid|_k_s|2.0|J kg<sup>_−_1 </sup>K<sup>_−_1</sup>|
|Thermal conductivity of liquid|_kℓ_|0.6|J kg<sup>_−_1 </sup>K<sup>_−_1</sup>|
|Thermal diusivity in solid|_κ_s|9_._80_×_10<sup>_−_7</sup>|m<sup>2 </sup>s<sup>_−_1</sup>|
|Thermal diusivity in liquid|_κℓ_|1_._42_×_10<sup>_−_7</sup>|m<sup>2 </sup>s<sup>_−_1</sup>|
|Latent heat|_L_|334_×_10<sup>3</sup>|J kg<sup>_−_1</sup>|
|Liquidus slope|Γ|0.057|°C|
|Liquidus intercept|_T_m|0.0939|°C|

### 127 

## Heat conduction in an anisotropic medium with phase change 

128 We assume that the transport of heat is purely by thermal conduction which depends strongly on 129 the various phases of the medium within the system. From Worster (1986), the governing equation 130 of heat transfer is 

131 where _T_ is temperature, _φ_ is solid fraction, _ρ_ is the averaged density, _c_ is the averaged specic 132 heat, _L_ is the latent heat and _ρ_ s is the density of the solid. We also assume the solid-fraction133 weighted averages of these thermophysical properties, i.e. _X_ = _X_ ( _φ_ ) = _φX_ s + (1 _− φ_ ) _Xℓ_ and 134 _XY_ = _φX_ s _Y_ s + (1 _− φ_ ) _XℓYℓ_ , where subscripts s and _ℓ_ are solid and liquid phases, respectively. The 135 values of all constants are given in Table 1. 

### 136 

## Salt diusion 

137 We use Fick's second law (e.g. Crank, 1979) for salt diusion and assume that diusion occurs only 138 among liquid cells, i.e. 

8 

139 where _D_ is the molecular mass diusivity. In the present model, uid dynamics has not been 

- 140 considered, i.e. turbulent ocean mixing is thus not simulated. As diusion is the only method to 

- 141 transfer salt in the system, we compensate for the eect of uid transport by increasing the value of 

- 142 _D_ to be greater than that for molecular diusion alone (Hahn-Woernle, 2011) and we call this the 143 eective mass diusivity _D_ eff . 

## 144 Liquidus relation 

145 The freezing temperature of sea water (Dinniman and others, 2007), which is the linearized version 146 of Foldvik and Kvinge (1974), is 

147 where _T_ m is the surface freezing point. The liquidus slope Γ = 0.057°C. Note that the depth 

148 dependence has been omitted from this relation because the system of interest is at a shallow depth. 

# 149 NUMERICAL IMPLEMENTATION OF THE MODEL 

150 A full explanation of the method is given by Wongpan (2013), with an outline presented here. 

9 

Fig. 4. Flow chart showing the numerical steps. Note that if a process enters the _m_ = _m_ + 1 box on a dashed line, and if the exit logic from _m > M_ is no, then the logic follows the dashed line when it exits _m > M_ . 

151 In Ohashi and others (2004), Dempsey (2008) and Dempsey and others (2010), the only criterion 

152 for phase change from liquid to solid is the Voronoi dynamics condition (Eqn (2)) which is given in 153 discretized form in Eqn (8). The Voronoi dynamics condition for cell _j_ with respect to the seed ice 154 crystal _i_ at time _n_ ∆ _t_ V is 

155 where cell _j_ is liquid at time _n_ ∆ _t_ V (i.e. _Kj_<sup>_n_=1).Inaddition,cell</sup><sup>_j_isadjacenttoatleastoneice</sup> 156 cell with characteristic number 0 _< Ki <_ 1 . Note that dierent characteristic numbers distinguish 

10 

157 between dierent crystals. 

158 Kawano and Ohashi (2009) add a thermodynamic condition to their 2-D model, where 

159 where _Tj_<sup>_n_and</sup><sup>_S_</sup> _j_<sup>_n_arerespectivelytemperatureandsalinityatposition</sup><sup>_j_andtime</sup><sup>_n_∆</sup><sup>_t_V,and</sup><sup>_T_L</sup> 160 is given by Eqn (7). Heat and mass transfer are implemented without latent heat during a phase 161 change (Kawano and Ohashi, 2009), which is unrealistic. Later, Hahn-Woernle (2011) included 162 latent heat in a 2-D model with supercooled water, but a temperature gradient was not taken into 163 account. 

164 In our model, we include all features from previous models, and extend them to 3-D with lateral 165 periodic boundary conditions. We also add an interim phase to the model, called mixture cells, to 166 make it easier to include latent heat. 

167 The program runs in two loops (Fig. 4), the outside Voronoi loop and the inside heat and mass 168 transfer loop. The corresponding time steps for each loop are ∆ _t_ V and ∆ _t_ S respectively. Assuming 169 that we run the simulation for a period of _τ_ = _N_ ∆ _t_ V , the outside loop runs from _n_ = 1 to _N_ steps. 170 For each time step ∆ _t_ V , the inside loop runs from _m_ = 1 to _M_ steps. In short, _τ_ = _MN_ ∆ _t_ S . 171 Kawano and Ohashi (2009) used a single time step for Voronoi dynamics and heat and mass 172 transfer. However, in our simulation, we decided to use two time steps to avoid checking the Voronoi 173 dynamics condition at every iteration and to enable us to choose a larger ∆ _t_ V , to span simulation 174 times from seconds to a daily scale. 

175 In this simulation, we use an explicit method to solve the partial dierential equation because it 176 is easier to implement. However, the downside of this method is the stability. The size of this ∆ _t_ S 177 has to be set to be smaller than the limit determined from Courant and others' (1967) conditions. 

178 When the simulation starts, the crystal is seeded at position _i_ in the domain Ω with its charac179 teristic value _Ki_ . The displacement of other cells with respect to this seed _i_ and the growth function 180 are kept in matrices **R** _i_ and **G** _i_ , and referred to as **R** _i_ [ _j_ ] and **G** _i_ [ _j_ ] respectively. The Voronoi dy181 namics inequality of any cell _j_ with respect to crystal seed _i_ at time _n_ ∆ _t_ V is given by Eqn (8). By 182 denition, since **R** _i_ [ _i_ ] is always zero, i.e. it is the displacement to itself, then this inequality is also 183 valid for the seed cell at any time. 

11 

184 From _n_ ∆ _t_ V to ( _n_ +1)∆ _t_ V , ∆ _t_ V is further discretized and runs from _m_ = 1 to _M_ iterations. Any 185 temperature _T_ and salinity _S_ of cell _j_ at time _m_ ∆ _t_ S can be denoted as _Tj_<sup>_m_</sup> and _Sj_<sup>_m_</sup> respectively, 186 and updated for each iteration by the heat and mass transfer without phase change equations 

187 and 

188 where ∆ _Tj_<sup>_m_</sup> and ∆ _Sj_<sup>_m_</sup> are given in Wongpan (2013). 189 When _m_ = _M_ , the Voronoi dynamics condition is checked for each cell. If cell _j_ passes this 190 condition its temperature will be compared with its corresponding liquidus temperature (Eqn (9)), 191 which we call the thermodynamic condition. 192 If this condition holds, the solidication process starts. The characteristic number of this cell 193 _j_ at step _n_ ( _Kj_<sup>_n_)changesfrom1(liquid)to1 +</sup><sup>_Ki_(mixture).Thesolidfractionresidual∆</sup><sup>_φ∗_</sup> _j_<sup>is</sup> 194 calculated from 

195 In the heat and mass transfer loop, the temperature for this cell is set equal to the liquidus temper196 ature during solidication _Tj_<sup>_m_</sup> = _T_ L( _Sj_<sup>_n_).Inordertomaintainaconstantliquidustemperature,the</sup> 197 salinity is required to be constant, i.e. _Sj_<sup>_m_</sup> = _Sj_<sup>_n_.However,saltisrejectedcontinuouslyfromthe</sup> 198 mixture cell due to the increase in solid (ice) fraction. If there are no liquid cells to absorb salt from 199 this cell, the solidication process stops and the characteristic number of this cell will be set to 2, 200 which is representative of a brine cell. At step _m_ + 1 , the solid fraction accumulates, according to 

201 and it is checked whether 

_~~m~~_ +1 202 Physical constants are updated; that is _X j_ = _φ_<sup>_m_</sup> _j_<sup>+1</sup> _X_ s + (1 _− φ_<sup>_m_</sup> _j_<sup>+1</sup> ) _Xℓ_ . 203 If Eqn (14) is true, the phase of the cell changes. First, the temperature residual is calculated 

12 

> 204 from the dierence of _φ_<sup>_m_</sup> _j_<sup>+1</sup> from 1, 

205 

and this is added to the liquidus temperature of that cell: 

> 206 Then _φ_<sup>_m_</sup> _j_<sup>+1</sup> is reset to 1. The salinity of this cell is set to zero, and the characteristic number is 207 changed from 1 + _Ki_ (mixture) to _Ki_ (solid). On the next step, this cell will be redirected to the 208 heat and mass transfer without the phase change scheme. All the processes above are sketched as 209 a ow chart (Fig. 4). The way we take residuals in temperature and solid fraction into account is 210 similar to an algorithm, called the heat integration method (Dusinberre, 1945). 

### 211 

# MODEL RESULTS AND DISCUSSIONS 

### 212 

## Validation: Stefan problem 

213 Here we perform simulations to evaluate the accuracy of our code, and to carry out sensitivity 214 experiments by varying the eective mass diusivity _D_ eff for each run. To do this, we set up 215 the domain Ω to match the situation of a one-dimensional (1-D) solution (the Stefan problem) as 216 described in Worster (1986). 

217 To match the Stefan problem, which describes 1-D heat transfer with phase change, the domain 218 has the property that _x_ = _y →∞_ and _z_ is nite. We apply periodic boundaries on the x-y plane to 219 achieve the former property. The lengths of the periodic simulation box in the _x_ , _y_ , and _z_ directions 220 are _lx_ , _ly_ and _lz_ . We set _lz_ to a nite length to satisfy the latter property. We perform the simulation 221 in a domain with dimensions _lx_ = _ly_ = 0 _._ 01 m, and _lz_ = 1 _._ 0 m, using a uniform grid with cell length 222 ∆ _h_ = ∆ _x_ = ∆ _y_ = ∆ _z_ = 0 _._ 001 m. 

223 In the Stefan problem, a slab of sea ice grows downwards by heat loss to the atmosphere. To do 224 this, we place an ice slab with temperature _T_ top = 5°C at _z_ = 0 _._ 001 m. The rest of the domain is 225 sea water with uniform salinity _S_ bot = 35 _._ 16 . Before the simulation starts, an advancing interface 226 is introduced to the domain at position _z_ = 0 _._ 002 m, causing the sudden rejection of salt to all cells 

13 

227 in the plane _z_ = 0 _._ 003 m with salinity 70.32. Then the simulation begins. 

228 The Voronoi front (Fig. 3) of the advancing interface has a growth speed _g_ int = 1 _._ 0 _×_ 10<sup>_−_5</sup> m s<sup>_−_1</sup> 

229 in Eqn (4). By setting ∆ _t_ V = 10 s, _g_ int∆ _t_ V _<_ ∆ _h_ which is another requirement of Voronoi dynamics 230 (Kawano and Ohashi, 2009; Dempsey and others, 2010). All simulations in this section run for 231 1 _._ 6 _×_ 10<sup>4</sup> ∆ _t_ V , which is equivalent to 1 _._ 6 _×_ 10<sup>5</sup> s or _∼_ 2 days. 

232 The thermodynamic set-up has _S_ bot = 35 _._ 16 and a freezing point of _T_ L( _S_ bot) = 1.91°C (Eqn 233 (7)). We set _T_ bot = 1.50°C. We simulate four cases by varying _D_ eff = _νD_ over four orders of 

234 magnitude, ranging from 6 _._ 8 _×_ 10<sup>_−_10</sup> to 6 _._ 8 _×_ 10<sup>_−_7</sup> m<sup>2</sup> s<sup>_−_1</sup> with _ν_ = _{_ 1 _,_ 10 _,_ 100 _,_ 1000 _}_ . 

Fig. 5. Interface position versus time. Analytical solutions (Worster, 1986) are plotted with solid lines, while simulation results are plotted with lled circles. 

235 Comparison of our results with theoretical solutions from Worster (1986) conrms the accuracy 

236 of our code for each value of _D_ eff (Fig. 5). We select _D_ eff = 100 _D_ = 6 _._ 8 _×_ 10<sup>_−_8</sup> m<sup>2</sup> s<sup>_−_1</sup> for all further 237 simulations. This is of the same order of magnitude as applied by Vancoppenolle and others (2010) 238 and Jeery and others (2011) in modeling the transport of tracers in sea ice. 

239 

## A single ice ux event from the ocean 

240 Having evaluated the simulation code in the previous subsection, we now explore two scenarios that 241 are likely to occur in ice-shelf-aected waters. In scenario 1, a ux of tiny seed crystals arrives at the 242 base of the sea-ice cover in a single event. They then grow due to heat loss upwards through the sea 243 ice, as well as to the supercooled ocean. Scenario 2 begins with the formation of a rough ice/water 244 interface, by seeding and growing ice crystals as in scenario 1. After a short time, a continuous ux 

14 

245 of crystals is introduced. The advancing interface (driven by heat loss to the atmosphere) grows 246 from the upper domain to freeze the crystals in place to become incorporated platelet ice. 247 In this section, we assume that a ux of seed ice crystals arrives from the ocean as a single event, 248 under a top-chilled, at sea-ice cover. These crystals are assumed to be small (1 mm diameter) and 249 to have random positions and orientations. Then they grow locally and we expect a sub-ice platelet 250 layer to form and increase in solid fraction. Observations show that without a continuous supply of 251 loose ice crystals, geometric selection plays a major role, and eventually resumed columnar fabric 252 forms (Dempsey and others, 2010; Dempsey and Langhorne, 2012). 

253 We set a domain Ω with a total number of cells ( _Nx × Ny × Nz_ ) = 100 _×_ 100 _×_ 100 cells, i.e. the 254 model resolution is 0.001 m. In order to simulate the growth of a thin layer at the base of a 1 m thick 255 sea-ice cover, initial and boundary conditions are set with _T_ top = 2.5°C, _T_ bot = 1.96°C, _S_ top = 0 , 256 _S_ bot = 35 _._ 16 and _D_ = 6 _._ 8 _×_ 10<sup>_−_8</sup> m<sup>2</sup> s<sup>_−_1</sup> to match observations within the sub-ice platelet layer from 257 Robinson and others (2014). The initial temperature of each crystal is set to _T_ L( _S_ bot) = 1.91°C. 

258 In this simulation, we introduce 120 ice crystals, each of 1 mm diameter and with random c-axes 259 and seed positions, to the top 10% of the domain, or equivalently in a region 0.01 m thick. Note 260 that to compensate the eect of uid dynamics and oceanic turbulence in the entirely liquid region 261 beneath the growing sub-ice platelet layer, in this simulation we reset the salinity and temperature 262 to _S_ bot and _T_ bot . The growth function of these platelet crystals is oblate spheroidal (Eqn (3)). We 263 set _g_ b = 5 _._ 0 _×_ 10<sup>_−_7</sup> m s<sup>_−_1</sup> , which is the same order of magnitude as the growth speed of the tip of 264 an ice platelet reported by Smith and others (2012). The aspect ratio _α_ = 30 (Dempsey and others, 265 2010) and, automatically, _gc_ = _g_ b _/_ 30 . The simulation runs for _t_ = 9 _×_ 10<sup>3</sup> steps or 9 _×_ 10<sup>4</sup> s, which 266 is _∼_ 1 day. 

15 

Fig. 6. The ice structure at 0 s, 3 _×_ 10<sup>4</sup> s, 6 _×_ 10<sup>4</sup> s and 9 _×_ 10<sup>4</sup> s following a single ice ux event from the ocean. Ice viewed from below and growing downwards. Dierent shades of red mean dierent platelet crystals. Bright green and magenta represent mixture and brine cells respectively. 

267 First, we consider the structure of the modeled platelet ice. A total of 120 platelet crystals start 268 from the size of one cell and become disc-like shapes at 3 _×_ 10<sup>4</sup> s (Fig. 6). The mixture cells are on 269 the rim of each crystal. At 6 _×_ 10<sup>4</sup> s, the platelet crystals interact with each other and mixture cells 270 begin to form a plane, and to grow as a layer. At 9 _×_ 10<sup>4</sup> s, the crystals are thicker, causing a wider 271 layer of mixture cells. 

272 To gain a better understanding of the 3-D results, we consider the proles found by averaging 273 parameters at each depth. We display solid-fraction, salinity and temperature proles at intervals 274 of 3 _×_ 10<sup>4</sup> s (Fig. 7). In this porous, sub-ice platelet layer, the salinity exhibits a C-shaped prole 275 which is a well-known characteristic of landfast, congelation sea ice. Salt diuses from the growing 276 sub-ice platelet layer towards the underlying liquid, so that the overall ice salinity decreases with 277 time as expected. 

16 

Fig. 7. Solid-fraction (a), salinity (b) and temperature (c) proles for a single ice ux event from the ocean. Red, blue and green are proles at 3 _×_ 10<sup>4</sup> , 6 _×_ 10<sup>4</sup> and 9 _×_ 10<sup>4</sup> s, respectively. 

278 

## An advancing interface and a continuous ice ux from the ocean 

279 In describing the second scenario, we introduce a continuous deposition of platelet crystals from the 280 ocean to the sub-ice platelet layer. In addition, we include the incorporation of platelet crystals by 281 an advancing interface to form incorporated platelet ice (Smith and others, 2001; Gough and others, 282 2012a; Fig. 8). A continuous ux of ice crystals is expected to play an important role in the resulting 283 crystal orientations (Dempsey and others, 2010), noting that the previous work did not include heat 284 and mass transfer. 

285 This simulation is designed to model the western side of McMurdo Sound where a continuous 286 ux of ice crystals seems to be deposited from the underlying water column during the growth of 287 a sea-ice cover (Gow and others, 1998). This scenario represents a ux of ice crystals from the 288 ocean while sea ice grows rapidly. We select a growth rate of 2 _._ 2 _×_ 10<sup>_−_2</sup> m d<sup>_−_1</sup> which is appropriate 289 for thin ice of _∼_ 0 _._ 25 m thickness (Leonard and others, 2006), so the simulation has an advancing 290 interface of _g_ int = 2 _._ 5 _×_ 10<sup>_−_7</sup> m s<sup>_−_1</sup> . The simulation begins by establishing a rough interface from 291 seed crystals as in scenario 1. We set _g_ b = 5 _._ 0 _×_ 10<sup>_−_7</sup> m s<sup>_−_1</sup> , causing the diameter of the seed 292 crystals at 3 _×_ 10<sup>4</sup> s to have grown to _∼_ 30 mm. This is about three times larger than the diameter 293 of the crystals to be deposited. Thus the deposited crystals can enter gaps between the enlarged 294 seed crystals, and together they form the sub-ice platelet layer (Fig. 8). We start the deposition at 

17 

295 3 _×_ 10<sup>4</sup> s by launching one ice crystal with average diameter ( _l_ ) 10 mm every ten steps or 100 s. For 

- 296 deposition, we use the algorithm of Dempsey and others (2010). Therefore the growth function in 

- 297 the basal plane ( _G_ b ) of each deposited crystal is modied to include the morphology of the crystals 298 as observed under sea ice. The last platelet crystal arrives at 6 _×_ 10<sup>4</sup> s. In total, there are 300 

- 299 platelet crystals deposited under the existing sub-ice platelet layer formed by the growth of the 120 

- 300 seed crystals. The simulations run for 9 _×_ 10<sup>4</sup> s as in the previous subsection. 

Fig. 8. Ice crystals oat up to deposit onto the layer of platelet crystals which have grown beneath the ice bottom, and together they form the sub-ice platelet layer. The ice bottom, initially at _z_ a _i_ , is also moving downwards due to heat loss to the atmosphere. This is referred to as the advancing interface _z_ a _i_ . The tip of the sub-ice platelet layer is at position _z_ tip and the distance between _z_ a _i_ and _z_ tip is referred to as _z_ pl . 

18 

Fig. 9. The ice structure at 0 s, 3 _×_ 10<sup>4</sup> s, 6 _×_ 10<sup>4</sup> s and 9 _×_ 10<sup>4</sup> s of an advancing interface and a continuous ice ux (crystal diameter 10 _±_ 1 mm) from the ocean. Ice viewed from below and growing downwards. Dierent shades of red mean dierent platelet crystals. Bright green and magenta represent mixture and brine cells respectively. 

301 For this set-up, the ice ux from the ocean is Φ = (1 _/A_ )(d _N/_ d _t_ ) where _A_ is the area beneath the 302 sea ice and d _N/_ d _t_ is the number of ice crystals rising to the ice base per second. With _A_ = 0 _._ 1 _×_ 0 _._ 1 m<sup>2</sup> 303 and d _N/_ d _t_ = 1 _/_ 100 crystal s<sup>_−_1</sup> , Φ = 9 _×_ 10<sup>4</sup> crystals m<sup>_−_2</sup> d<sup>_−_1</sup> are accumulated. If we assume that a 304 sub-ice platelet layer has a uniform solid fraction _f_ s = 0 _._ 25 (Smedsrud and Skogseth, 2006; Gough 305 and others, 2012a), we can calculate the critical ice ux which will allow a sub-ice platelet layer 306 to form, Φcrit = ( _f_ s _/v_ pl) _g_ int (Dempsey and others, 2010). Here _v_ pl is the average volume of each 307 ice platelet, which equals (4 _/_ 3) _π_ ( _l/_ 2)<sup>3</sup> _/α_ . We nd Φcrit is 31 _×_ 10<sup>4</sup> crystals m<sup>_−_2</sup> d<sup>_−_1</sup> . Thus, the 308 simulated ice crystal ux is slightly less than the critical ice ux. This means that if the simulation 309 (Fig. 9) had run for a longer time the sub-ice platelet layer would have been consumed by the 310 advancing interface (Dempsey and others, 2010). 

311 Note that, as expected, the inclusion of an advancing interface causes the solid fraction to be in 

19 

312 the range 0.81 at the top of the simulation domain (Fig. 10a). In this region, the salinity (Fig. 10b) 

313 is _∼_ 10 as observed in such systems (Gough and others, 2012b). The nal scene of the simulated 314 sub-ice platelet layer (Fig. 11) is qualitatively similar to the photographed sub-ice platelet layer 315 (courtesy A.R. Mahoney and A.J. Gough) from McMurdo Sound, Antarctica, in 2009. 

### 316 

## Fabric of platelet ice: simulation versus observation 

317 In examining the crystal orientation and diameter distributions predicted by the simulation for the 318 two scenarios described above, the development of crystal fabrics following a single ice ux event 319 from the ocean (Fig. 12a) is analysed. In this scenario we start from isotropy because the crystals 320 are seeded randomly under the sea-ice cover. These grow without any additional platelet ux until 321 the crystals begin to impinge on each other at 3 _×_ 10<sup>4</sup> s. Geometric selection therefore forces the 322 c-axis orientation towards a girdle regime, in which c-axes lie predominantly in the horizontal plane, 323 without a preferred direction in that plane. The transition from an isotropic fabric at small depths, 324 to a girdle regime at greater depths, is characteristic of the development of platelet ice towards 325 resumed columnar ice (Fig. 12a). This is in agreement with in situ observations (Gough and others, 326 2012a) and earlier simulations without heat and mass transfer (Dempsey and others, 2010; Dempsey 327 and Langhorne, 2012). 

328 The crystal diameter is dened as the major axis of the oblate spheroid, and all crystals intro329 duced to the simulation as seed crystals are included in this distribution (Fig. 13a). Thus the gure 330 may be regarded as representing the distribution of crystal diameters in a sub-ice platelet layer. The 331 increase in diameter with time is evident, leading to crystals with diameters in excess of 50 mm. 332 Such crystals are not unusual beneath sea ice abutting an ice shelf (Gow and others, 1998). 

333 For the second scenario (Fig. 8), when ice crystal deposition from the ocean occurs continuously, 334 the trajectories of the crystal fabric are conned to the isotropic regime (Fig. 12b). In this case the 335 simulation is designed to model ice growth over 0.045 m at the base of a thin sea-ice cover under 336 conditions in which a sub-ice platelet layer may only exist temporarily. The crystallographic result 337 is in good agreement with measurements near the top of the sea ice in western McMurdo Sound 338 (Dempsey and others, 2010; K.G. Hughes and others, unpublished information), as well as at the 339 bottom of a thicker sea-ice cover (Gough and others, 2012a). 

20 

Fig. 10. Solid fraction (a), salinity (b) and temperature (c) proles for an advancing interface and a continuous ice ux (crystal diameter 10 _±_ 1 mm) from the ocean. Red, blue and green are proles at 3 _×_ 10<sup>4</sup> , 6 _×_ 10<sup>4</sup> and 9 _×_ 10<sup>4</sup> s, respectively. 

Fig. 11. An example of an underwater scene, at 9 _×_ 10<sup>4</sup> s, is shown from a simulation with an advancing interface and a continuous ice ux (crystal diameter 10 _±_ 1 mm) from the ocean. The scale from blue to blue of the ruler is 0.05 m. In the bottom-right corner, a schematic shows three simulation domains that are connected together to provide a view similar to that from an underwater camera. 

21 

Fig. 12. The crystal orientations of (a) a single ice ux event from the ocean and (b) an advancing interface and a continuous ice ux from the ocean are summarized in the ternary plots (Benn, 1994; Gough and others, 2012a). Each point represents ( _E, I_ ) , where _E_ and _I_ are the elongation (which is close to 1 for aligned fabrics) and the isotropy (which is close to 1 for isotropic fabrics) axes, respectively. Depth of each thin section of the simulated sea-ice core is indicated by its colour from the top of the core at _z_ = 0 _._ 005 m (violet) to its bottom at _z_ = 0 _._ 045 m (red). Note that in (b), the crystal orientations of the crystals in the advancing interface are omitted from the plot. 

340 The crystal diameters are also smaller in the second scenario (Fig. 13b). At 6 _×_ 10<sup>4</sup> s, the 341 population of crystal diameters between 10 and 20 mm dominates due to the continuous deposition of 342 ice crystals from the ocean with diameter 10 _±_ 1 mm. This deposition began at 3 _×_ 10<sup>4</sup> s and continued 343 until 6 _×_ 10<sup>4</sup> s. After this, crystal deposition to the sub-ice platelet layer ceases. Consequently, the 344 crystals have become larger at time 9 _×_ 10<sup>4</sup> s. 

345 

## Solid fraction of sub-ice platelet layer 

346 In general, three processes contribute to the solid fraction in incorporated platelet ice: (1) the 347 deposition of ice crystals from the ocean to the base of the sea ice, (2) the growth of these crystals in 348 the supercooled water close to the sea-ice base, and (3) their eventual incorporation into the sea ice 349 by the advancing interface (Dempsey and others, 2010). Processes (1) and (2) determine the solid 350 fraction in the sub-ice platelet layer. 

350 

351 The upper bound of the sub-ice platelet layer is set at the advancing interface _z_ a _i_ (Fig. 8). The 352 position of the tip of a platelet crystal is referred to as _z_ tip . We dene the mean solid fraction in a 353 sub-ice platelet layer as 

354 where _f_ s<sup>_∗_(</sup><sup>_z_)isthehorizontallyaveragedvalueofthesolidfractionatdepthsfrom</sup><sup>_z_a</sup><sup>_i_to</sup><sup>_z_tip.In</sup> 

22 

355 words, _f_<sup>�</sup> s is the area under the solid fraction prole curve divided by the range of the specied curve. 356 Scenario 2, with a ux of crystals of 10 _±_ 1 mm diameter, has been shown to display a transitory 357 sub-ice platelet layer. For this case (Fig. 14), we obtain _f_<sup>�</sup> s _≈_ 0 _._ 22 which is in good agreement with 358 0 _._ 25 _±_ 0 _._ 06 reported by Gough and others (2012a), who deduced solid fraction from measurements 359 of heat ux from ice temperature proles. It is also in agreement with _f_<sup>�</sup> s _≈_ 0 _._ 25 for frazil/grease ice 360 samples taken in an active polynya (Smedsrud and Skogseth, 2006). 

Fig. 13. Distributions of crystal diameter at 3 _×_ 10<sup>4</sup> , 6 _×_ 10<sup>4</sup> and 9 _×_ 10<sup>4</sup> s (a) for a single ice ux event of 120 crystals with uniform diameter of 1 mm at 0 s and (b) where an advancing interface and an ice ux from the ocean of 1 crystal every 100 s is added from 3 _×_ 10<sup>4</sup> s until 6 _×_ 10<sup>4</sup> s. A total of 300 crystals, with a diameter selected randomly in the range 10 _±_ 1 mm, are added during the continuous ice ux. 

23 

Fig. 14. The solid fraction prole at 9 _×_ 10<sup>4</sup> s for a simulation with a continuous ux of crystals of diameter 10 _±_ 1 mm (red dots). The area under this curve from _z_ a _i_ = 0 _._ 020 m (horizontal dashed line) to _z_ tip = 0 _._ 061 m is shaded in blue. Vertical red dashed line marks the solid fraction equal to 0.25 reported by Gough and others (2012a). Vertical blue dashed line identies the mean solid fraction calculated by Eqn (17). The green line is the solid fraction prole for a simulation with a continuous ux of crystals of diameter 5 _±_ 1 mm. 

361 To examine the eect of crystal diameter we performed a simulation with a continuous ux of 362 ice crystals of diameter 5 _±_ 1 mm. This yields _f_<sup>�</sup> s _≈_ 0 _._ 29 (Fig. 14). There are a number of reasons 363 why a smaller crystal diameter might produce a higher solid fraction. First we note that the depth 364 of the sub-ice platelet layer is smaller than it is for 10 mm crystals, leading to a higher solid fraction. 365 In addition, smaller crystals will have a greater packing eciency than larger crystals. Nonetheless 366 solid fraction appears to be relatively insensitive to the diameter of crystals that impinge on the 367 interface, with a 30% change in solid fraction resulting from a halving of the crystal diameter. 

24 

# 368 CONCLUSION 

369 A simulation based on Voronoi dynamics, and incorporating heat and mass transfer by diusive 370 processes, has been constructed to predict the solid fraction and crystal orientations in the sub-ice 371 platelet layer. The major limitation is the neglect of uid dynamics. Our code is evaluated with 1-D 372 solidication, the so-called Stefan problem. We extend the results of Dempsey and others (2010) in 373 order to give a more accurate assessment of the solid fraction in the porous sub-ice platelet layer. 374 Including the two main contributing processes, a ux of ice platelets from the ocean and local growth 375 in the sub-ice platelet layer, we obtain a solid fraction of _∼_ 0 _._ 22 . This result is in good agreement 376 with the value of 0 _._ 25 _±_ 0 _._ 06 obtained experimentally by Gough and others (2012a). The nal 377 contribution from the advancing interface, driven by heat ux to the atmosphere, lls the interstices 378 and increases the solid fraction of the upper part of the sub-ice platelet layer to become close to 1, 379 forming incorporated platelet ice. 

380 Instead of solving for sea-ice solid fraction by considering solidication of a permeable material, 381 as in mushy layer theory (e.g. Worster, 1986), in this work the growth of individual crystals was 382 simulated. Good agreement between the simulated crystal orientation distributions and the observa383 tions of Leonard and others (2006), Dempsey and others (2010) and Gough and others (2012a) has 384 allowed us to verify the simulations. Consequently, we are condent that our model, including the 385 three contributing processes and with enhanced, diusion-controlled local growth, is a reasonable 386 model of platelet ice formation. This is an important step in understanding the dynamics of the 387 formation of a sub-ice platelet layer because the layer is inaccessible, loose and dicult to sample. 

### 388 

# ACKNOWLEDGEMENTS 

389 P.W. has been supported by a University of Otago publishing bursary. We acknowledge Craig 390 Stevens, Michael Williams and Sarah Wakes for helpful suggestions. The numerical results were 391 simulated on the University of Otago Vulcan cluster. We acknowledge Lars Smedsrud, an anonymous 392 reviewer and the editors, whose suggestions and comments helped improve and clarify earlier versions 393 of the manuscript. 

25 

### 394 

# REFERENCES 

- 395 Arrigo KR and Thomas DN (2004) Large scale importance of sea ice biology in the Southern Ocean. 396 Antarct. Sci., 16(4), 471486 (doi: 10.1017/S0954102004002263) 

- 397 Benn DI (1994) Fabric shape and the interpretation of sedimentary fabric data. J. Sediment. Res., 398 64A(4), 910915 (doi: 10.1306/D4267F05-2B26-11D7-8648000102C1865D) 

- 399 Bintanja R, Van Oldenborgh GJ, Drijfhout SS, Wouters B and Katsman CA (2013) Important 400 role for ocean warming and increased ice-shelf melt in Antarctic sea-ice expansion. Nature Geosci., 401 6(5), 376379 (doi: 10.1038/ngeo1767) 

- 402 Courant R, Friedrichs K and Lewy H (1967) On the partial dierence equations of mathematical 

- 403 physics. IBM J. Res. Dev., 11(2), 215234 (doi: 10.1147/rd.112.0215) 

404 

Crank J (1979) The mathematics of diusion. Oxford University Press, Oxford 

- 405 Dempsey DE (2008) Observation and modeling of platelet ice in McMurdo Sound, Antarctica. 406 (Master's thesis, University of Otago) 

- 407 Dempsey DE and Langhorne PJ (2012) Geometric properties of platelet ice crystals. Cold Reg. Sci. 408 Technol., 78, 113 (doi: 10.1016/j.coldregions.2012.03.002) 

- 409 Dempsey DE, Langhorne PJ, Robinson NJ, Williams MJM, Haskell TG and Frew RD (2010) 410 Observation and modeling of platelet ice fabric in McMurdo Sound, Antarctica. J. Geophys. Res., 411 115(C1), C01007 (doi: 10.1029/2008JC005264) 

- 412 Dinniman MS, Klinck JM and Smith WO (2007) Inuence of sea ice cover and icebergs on circu413 lation and water mass formation in a numerical circulation model of the Ross Sea, Antarctica. J. 414 Geophys. Res., 112(C11), C11013 (doi: 10.1029/2006JC004036) 

415 

- Dusinberre GM (1945) Numerical methods for transient heat ow. ASME Trans., 67(8), 703712 

416 Foldvik A and Kvinge T (1974) Conditional instability of sea water at the freezing point. Deep-Sea 417 Res., 21(3), 169174 (doi: 10.1016/0011-7471(74)90056-4) 

26 

418 Gough AJ, Mahoney AR, Langhorne PJ, Williams MJM, Robinson NJ and Haskell TG (2012a) 419 Signatures of supercooling: McMurdo Sound platelet ice. J. Glaciol., 58(207), 3850 (doi: 10. 420 3189/2012JoG10J218) 

421 Gough AJ, Mahoney AR, Langhorne PJ, Williams MJM and Haskell TG (2012b) Sea ice salinity 422 and structure: a winter time series of salinity and its distribution. J. Geophys. Res., 117(C3), 423 C03008 (doi: 10.1029/2011JC007527) 

424 Gow AJ, Ackley SF, Govoni JW and Weeks WF (1998) Physical and structural properties of 425 land-fast sea ice in McMurdo Sound, Antarctica. In Jeries MO ed. Antarctic sea ice: physical 426 processes, interactions and variability. (Antarctic Research Series 74) American Geophysical Union, 427 Washington, DC, 355374 

427 

428 Haas C and Druckenmiller M (2009) Ice thickness and roughness measurements. In Eicken H, 429 Gradinger R, Salganek M, Shirasawa K, Perovich D and Leppäranta M eds. Field techniques for 430 sea ice research. University of Alaska Press, Fairbanks, AK, 49116 

431 

Hahn-Woernle L (2011) Numerical simulation of sea ice growth. (MSc thesis, ETH Zürich) 

432 Hellmer HH (2004) Impact of Antarctic ice shelf basal melting on sea ice and deep ocean properties. 433 Geophys. Res. Lett., 31(10), L10307 (doi: 10.1029/2004GL019506) 

434 Hillig WB (1959) Kinetics of solidication from nonmetallic liquids. In Kingery WD ed. Kinetics 435 of high-temperature processes. MIT Press, Cambridge, MA, 127135 

436 Jeery N, Hunke EC and Elliott SM (2011) Modeling the transport of passive tracers in sea ice. J. 437 Geophys. Res., 116(C7), C07020 (doi: 10.1029/2010JC006527) 

438 Kawano Y and Ohashi T (2006) Numerical simulation for development of polycrystal microstruc439 ture of sea ice and brine formation by salinity concentration. In Proceedings of the 21st Interna440 tional Symposium on Okhotsk Sea and Sea Ice, 1924 February 2006, Mombetsu, Hokkaido, Japan. 441 Okhotsk Sea and Cold Ocean Research Association, Hokkaido, 9598 

442 Kawano Y and Ohashi T (2009) A mesoscopic numerical study of sea ice crystal growth and texture 443 development. Cold Reg. Sci. Technol., 57(1), 3948 (doi: 10.1016/j.coldregions.2009.02.001) 

27 

- 444 Kobayashi R (1993) Modeling and numerical simulations of dendritic crystal growth. Physica D, 445 63(34), 410423 (doi: 10.1016/0167-2789(93)90120-P) 

- 446 Kolmogorov AN (1949) Kvoprosu o geometricheskom otbore kristallov [Geometric selection of crys447 tals]. Dokl. Akad. Nauk. SSSR, 65(5), 681684 [Transl. 1976 Cold Regions Research and Engineering 448 Laboratory, Hanover, NH] 

449 Leonard GH, Purdie CR, Langhorne PJ, Haskell TG, Williams MJM and Frew RD (2006) Obser450 vations of platelet ice growth and oceanographic conditions during the winter of 2003 in McMurdo 451 Sound, Antarctica. J. Geophys. Res., 111(C4), C04012 (doi: 10.1029/2005JC002952) 

452 Lewis EL and Perkin RG (1986) Ice pumps and their rates. J. Geophys. Res., 91(C10), 11 756 453 11 762 (doi: 10.1029/JC091iC10p11756) 

454 Maus S and De la Rosa S (2012) Salinity and solid fraction of frazil and grease ice. J. Glaciol., 455 58(209), 594612 (doi: 10.3189/2012JoG11J110) 

456 Monaghan JJ, Huppert HE and Worster MG (2005) Solidication using smoothed particle hydro457 dynamics. J. Comput. Phys., 206(2), 684705 (doi: 10.1016/j.jcp.2004.11.039) 

458 Naumann AK, Notz D, Havik L and Sirevaag A (2012) Laboratory study of initial sea-ice growth: 459 properties of grease ice and nilas. Cryosphere, 6(4), 729741 (doi: 10.5194/tc-6-729-2012) 

460 Ohashi T, Sasaki M and Yoshimura K (2004) A numerical simulation of the development of ice461 microstructures. In Proceedings of the 19th International Symposium on Okhotsk Sea and Sea Ice, 462 2228 February 2004, Mombetsu, Hokkaido, Japan. Okhotsk Sea and Cold Ocean Research Asso463 ciation, Hokkaido, 180185 

463 

464 Price D, Rack W, Langhorne PJ, Haas C, Leonard G and Barnsdale K (2014) The sub-ice platelet 465 layer and its inuence on freeboard to thickness conversion of Antarctic sea ice. Cryos. Discuss., 466 8(1), 9991022 (doi: 10.5194/tcd-8-999-2014) 

467 Robinson NJ, Williams MJM, Stevens CL, Langhorne PJ and Haskell TG (2014) Evolution of a 468 supercooled Ice Shelf Water plume with an actively growing subice platelet matrix. J. Geophys. 469 Res., 119(6), 34253446 (doi: 10.1002/2013JC009399) 

28 

- 470 Smedsrud LH and Jenkins A (2004) Frazil ice formation in an ice shelf water plume. J. Geophys. 471 Res., 109(C3), C03025 (doi: 10.1029/2003JC001851) 

- 472 Smedsrud LH and Skogseth R (2006) Field measurements of Arctic grease ice properties and pro473 cesses. Cold Reg. Sci. Technol., 44(3), 171183 (doi: 10.1016/j.coldregions.2005.11.002) 

- 474 Smith IJ, Langhorne PJ, Haskell TG, Trodahl HJ, Frew R and Vennell MR (2001) Platelet ice 

- 475 and the land-fast sea ice of McMurdo Sound, Antarctica. Ann. Glaciol., 33, 2127 (doi: 10.3189/ 476 172756401781818365) 

- 477 Smith IJ, Langhorne PJ, Frew RD, Vennell R and Haskell TG (2012) Sea ice growth rates near ice 478 shelves. Cold Reg. Sci. Technol., 8384, 5770 (doi: 10.1016/j.coldregions.2012.06.005) 

- 479 Spittle JA and Brown SGR (1994) A 3D cellular automaton model of coupled growth in two com480 ponent systems. Acta Metall. Mater., 42(6), 18111815 (doi: 10.1016/0956-7151(94)90006-X) 

- 481 Tan L and Zabaras N (2006) A level set simulation of dendritic solidication with combined features 482 of front-tracking and xed-domain methods. J. Comput. Phys., 211(1), 3663 (doi: 10.1016/j. 483 jcp.2005.05.013) 

- 484 Vancoppenolle M, Goosse H, de Montety A, Fichefet T, Tremblay B and Tison J-L (2010) Modeling 

- 485 brine and nutrient dynamics in Antarctic sea ice: the case of dissolved silica. J. Geophys. Res., 486 115(C2), C02005 (doi: 10.1029/2009JC005369) 

- 487 Wongpan P (2013) Voronoi dynamics simulation of platelet sea ice growth with diusive heat and 488 mass transfer. (Master's thesis, University of Otago) 

29 

