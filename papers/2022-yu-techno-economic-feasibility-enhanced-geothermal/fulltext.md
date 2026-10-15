# Techno-Economic feasibility of enhanced geothermal systems (EGS) with partially bridging Multi-Stage fractures for district heating applications

**Authors:** Pengliang Yu, David Dempsey, Rosalind Archer  
**Published in:** Energy Conversion and Management (2022)  
**DOI (version of record):** https://doi.org/10.1016/j.enconman.2022.115405  
**This copy:** Accepted manuscript (peer-reviewed, author's version). Text extracted from the PDF at https://ddempsey.github.io/papers/2022-yu-techno-economic-feasibility-enhanced-geothermal/yu2022-techno-economic-feasibility.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** Accepted manuscript. © 2022. This manuscript version is made available under the CC-BY-NC-ND 4.0 license https://creativecommons.org/licenses/by-nc-nd/4.0/. The version of record is available at https://doi.org/10.1016/j.enconman.2022.115405  
**Licence:** CC BY-NC-ND 4.0 https://creativecommons.org/licenses/by-nc-nd/4.0/  

---
- 1 Techno-Economic feasibility of enhanced geothermal systems (EGS) 

- 2 with partially bridging Multi-Stage fractures for district heating 3 applications 

- 3 

- 4 

Pengliang Yu<sup>_a,c,∗_</sup> , David Dempsey<sup>_b_</sup> , Rosalind Archer<sup>_d_</sup> 

- 5 _a_ Department of Engineering Science, University of Auckland, Auckland, New Zealand 

- 6 _b_ Department of Civil and Natural Resources Engineering, University of Canterbury, Christchurch, 

- 7 New Zealand 

- 8 _c_ Geothermal Institute, University of Auckland, Auckland, New Zealand 

- 9 _d_ School of Engineering and Built Environment, Grith University, Queensland, Australia 

- 10 _∗_ Corresponding author at: Geothermal Institute, University of Auckland, Auckland, New Zealand. 

- 11 E-mail address: pyu340@aucklanduni.ac.nz (P. Yu). 

- 12 Keywords: Partially bridging fractures; EGS; Residential heating; Techno-economic analysis; Box13 Behnken design 

### 14 

# Abstract 

- 15 Here, we investigate the techno-economic feasibility of an enhanced geothermal system (EGS) for 

- 16 direct heating, using a new horizontal-well with partially-bridging fractures design. To do this, we 

- 17 developed numerical models to evaluate reservoir dynamics and output, economic performance and 

- 18 environmental benets. This model was used to determine optimal thermal power output over a 20- 

- 19 year operation for given parameters. Then, we ranked the eects of key parameters on commercial 

- 20 and environmental outcomes. Stimulated reservoir permeability and reservoir temperature are the 21 primary determinants of economic viability, with lesser eects due to reservoir depth and fracture 

- 22 number. A case study was developed for the Qiabuqia EGS, China, capturing uncertainty through 

- 23 sampling of a surrogate model. We show that a 14-fracture design was economically preferred, 

- 24 providing up to 2.8 km<sup>2</sup> of indoor heating over 20 years with considerable emissions oset ( _∼_ 1.5 Mt 25 of CO 2 ) and economic benet (24185 M$). 

1 

26 1. Introduction 

- 27 Enhanced geothermal systems (EGS) are articial geothermal reservoirs created by hydraulic frac- 

- 28 turing and other stimulation techniques in ultra-low permeability formations. The goal is to create 

- 29 favourable conditions for water circulation and heat mining that support surface energy applications, 

- 30 e.g., district heating, electricity generation, or industrial direct heat use. In recent years, technolog- 

- 31 ical improvements in horizontal drilling and multiple-stage hydraulic fracturing have revolutionized 

- 32 economic gas production from low permeability shale [22]. It is hoped this technology could be used 33 to engineer fracture networks with large surface area for EGS [20,23,38,41], although the high costs 34 remain a signicant challenge. 

- 35 There have been numerous attempts at economic EGS creation since the 1970s. The Fenton Hill 

- 36 EGS in New Mexico [33,41] was the earliest attempt to extract heat from low permeability rock, 

- 37 deploying a new fracture design proposed by Gringarten et al. [13] (Fig. 1a). Multiple vertical 

- 38 hydraulic fractures were engineered to connect and circulate water between two deviated wells, 

- 39 thereby extracting heat from a 190<sup>_◦_</sup> C reservoir at 3500 m depth. Several EGS projects have also 

- 40 been undertaken in Europe [12,15], Australia [17] and Korea [47]. These have met mixed success 

- 41 with challenges from induced seismicity, connectivity, and economic viability. Another contemporary 

- 42 prospect is the Qiabuqia geothermal eld, China, where drilling to 3.7 km depth has revealed a 236 

- 43 _◦_ C reservoir [24,25]. This eld is now undertaking reservoir stimulation tests, and evaluation of 

- 44 possible well layouts and hydrothermal production, and is a later focus of this study. 

### 45 

## 1.1. EGS fracture design 

- 46 Engineering a high surface area fracture network is essential to EGS reservoir creation. One popular 

- 47 design centers on fracture creation between pairs of parallel horizontal injection and production 

- 48 wells. For example, the Gringarten model trialled at Fenton Hill envisages multiple stages of fully- 

- 49 bridging vertical hydraulic fractures that traverse the rock volume between the wells (Fig. 1a). 

- 50 Each fracture provides a direct pathway for the circulating uid between the wells, allowing it to 

- 51 be conductively heated by contact with the fracture walls, or by advective heat exchange if the 

- 52 water exits into a secondary network and later re-enters the main fracture. Adding more fracture 

- 53 stages increases the total surface area across which heat is extracted. However, because of the strong 

2 

- 54 permeability contrast between fracture channel and wall rock, most of the injected water is limited 

- 55 to ow in the fracture channels. This limits the heat extraction zone and exacerbates premature 56 thermal breakthrough [26,38,48]. In practice, permeability within a fracture may be heterogeneous, 

- 57 further prioritising some pathways over others. Other fast pathways could exist between fractures. 58 We have not considered this eect here. 

- 59 In contrast, a partially-bridging fracture design proposed in our previous study [48] could 

- 60 increase the ow of water away from the fracture (Fig. 1b). The basic principle is that cold water is 

- 61 injected into a subset of fractures that are connected only to the injection well. The other fractures 

- 62 are connected only to the production well and they alternate with the injection fractures in a comb 

- 63 pattern. Thus, water must pass through the reservoir volume between injection and production 

- 64 fractures, which could comprise a secondary fracture network or a porous media. Yu et al. [48] 

- 65 showed that rock volumes between fractures were subject to evolving thermoporoelastic stresses 

- 66 during operation, which may promote permeability enhancement. Thus, we refer to this volume of 67 rock as the stimulated reservoir volume (SRV). Upon exiting the SRV into a production fracture, 68 the heated water can leave the reservoir via the production well. 

- 69 The stimulated reservoir volume (SRV) [29] is a concept used for unconventional reservoir stim- 

- 70 ulation performance, where complex network structures are created between the multiple fracture 

- 71 planes. The dimensions of the secondary fracture network stimulated during multi-stage hydraulic 72 fracturing process can be approximated by the 3D volume of the microseismic-event cloud. As 73 suggested by Yu et al. [48], this could grow further during production operations. The hydraulic 74 fractures are here presumed to be vertical, which corresponds to an EGS project in either an exten75 sional or strike-slip tectonic setting, where the minimum principal stress is horizontal. 

- 76 The main dierence between fully bridging (Fig. 1a) and partially bridging EGS designs (Fig. 

- 77 1b) is that, for the latter, the injected water must sweep the SRV domain, which forces advective 

- 78 heat transfer through the bulk rock formation. This delays thermal breakthrough and results in 

- 79 more heat extraction over the operational lifetime, as demonstrated by the modelling study of 

- 80 Yu et al. [48]. In practice, creation of partially bridging fractures requires parallel injection and 

- 81 production wells that are both cased and then precisely perforated at alternating sites. This permits 

- 82 control over the dimensions of the SRV, which is bracketed by hydraulic fractures grown from the 

- 83 perforations. It is important the hydraulic fracture propagation stops short of the opposite well to 

3 

- 84 prevent accidental connection or damage to casing. Practically, this could be achieved by real-time 

- 85 microseismicity monitoring, which has been demonstrated for shale gas fracturing [8,45,50]. This 

- 86 could be problematic in the event that fully-bridging fractures are inadvertently created and some 

- 87 type of plugging solution was required. Permeability within a fracture may be heterogeneous, further 88 prioritising some pathways over others. Other fast pathways could exist between fractures. We have 89 not considered this eect here. 

90 

## 1.2. Economic assessment of EGS application 

- 91 EGS is a promising source of stable, direct-use heat and has associated environmental benets where 

- 92 fossil fuels are displaced. The World Bank Group [14] has outlined the importance of feasibility 93 studies, and emphasizes the securing of nancing, as well as environmental and social safeguards for 94 geothermal electricity production. 

- 95 (1) Electricity generation Most economic studies of EGS have focused on its feasibility for 96 electric power generation. Several software packages have been developed to assist economic analyses 

- 97 of EGS. Early software (Tester et al., 2006) focused on sensitivity analysis of levelized electricity 98 prices to drilling, plant, and stimulation costs. Later, this was modied [4] to include reservoir heat 99 sweep. 

- 100 A key element of feasibility is thermal and hydraulic performance of the reservoir, particularly 101 water rate and temperature. For example, Augustine [2] proposed a methodology to calculate EGS 102 electricity generation potential based on a Gringarten fracture model [13] which used an analytical 103 solution to calculate the heat extraction from fractured rock. However, as a fully-bridging fracture 104 design, this conceptual model may not fully utilize extractable heat from a given bulk rock volume. 105 Others [25,46] have investigated economic feasibility, environmental benets and electricity gener- 

- 106 ation from reservoirs in China. However, most approaches have neglected uncertainties in model 107 parameterization, which has downstream implications for nancial risk. 

- 108 (2) Direct-use There has been comparatively less research on the costs and benets of EGS in 

- 109 direct use contexts (e.g. district heating networks, industrial heating). Beckers et al. [4,6] compared 

- 110 feasibility of EGS direct-use heat and electricity applications and found that electricity was only 

4 

- 111 economically competitive for medium- and high grade EGS projects, whereas direct-use can be 

- 112 cost-eective even for low-grade resources. 

   - Fig. 1. Schematic diagram of EGS designs with paired horizontal injection and production well, and two fracture designs connecting them. (a) Fully-bridging hydraulic fractures, after Gringarten (1975) (b) Partially-bridging hydraulic fractures, after Yu et al. [48]. Arrows denote uid ow pathways. 

- 113 More recently, Beckers et al. [3] has evaluated techno-economic feasibility of geothermal direct 

- 114 use for campus heating applications, turbine cooling, and solar heat seasonal storage. The levelized 

- 115 cost of heat (LCOH) of these projects ranged between $13 and $350/MWh depending on nancial 116 incentives and assumed technology [5,30]. 

- 117 Huang et al. [18] presented an economic analysis of EGS heating in the Yitong Basin, China 118 using a simplied single fracture model and found this to be uneconomical due to high drilling costs. 119 However, such a xed fracture geometry is restrictive and there is a need for research that explores 120 the feasibility of multi-stage fracture designs that could improve heat extraction rates. Here, we 121 explore the eect of reservoir parameters (initial temperature, reservoir depth, SRV permeability, 122 fracture numbers etc.) on the economics of EGS that use partially-bridging fracture designs. 

- 123 The total investment for a geothermal heating plant includes both subsurface costs, e.g., ex124 ploration, drilling and stimulation, surface plant infrastructure installation, operation and mainte- 

- 125 nance. Subsurface investment is a major capital cost inuencing economic feasibility, e.g., drilling 

5 

126 and stimulation costs exceed 75% for medium- and low-grade EGS [28,41]. At the same time, sur127 face operations include costs for heat exchange stations, land, pipelines, maintenance, management 128 and personnel. Beckers et al. (2016; 2019; 2021) have summarized several capital and O&M cost 129 correlations for various applications and geothermal reservoirs. 

### 130 

## 1.3. Methodological review 

131 To explore optimal EGS reservoir design, it is necessary to identify parameters that constrain the 132 longevity and protability of a proposed project. In particular, we wish to maximize heat output 133 a product of temperature and ow rate and reservoir lifetime while minimizing installation 134 costs and the investment recovery period. Numerical modelling is used to predict heat and mass 135 transfer processes in the reservoir and wellbore, and then integrate these with surface operation and 136 nancial systems. One challenge, however, is the trade-o between model complexity representing 137 these processes and computational resources constraints when mapping parameter space uncertainty 138 with a large number of simulations. 

139 Experimental Design (ED) and Response Surface Methods (RSM) are one approach for address140 ing the complexity/uncertainty trade-o [10,43]. The complex model is used to simulate only a 141 handful of parameter combinations that span the plausible space and then a fast surrogate model 142 is constructed to replicate the output of the complex model. The surrogate model can be used to 143 rapidly explore parameter space, either in an optimization loop or to quantify uncertainty. However, 144 this approach is not without its drawbacks. Assessing the validity, reliability and replicability of 145 the surrogate models is challenging, particularly while ensuring appropriate levels of sensitivity and 146 accuracy with respect to the complex model. These issues are partially addressed by careful selection 147 of the independent variables, and the ED-RSM methodology [32]. 

148 The hybrid complex-surrogate modelling approach has been adopted in both petroleum and 149 geothermal reservoir engineering. Applications include uncertainty modelling [43], sensitivity studies 150 [44], history matching [49], reservoir performance optimization and resource assessment [10]. Mishra 151 et al. [31] compared classic factorial and sampling designs with several dierent response surface 152 methods to build statistical predictive models of CO 2 sequestration performance. They showed that 153 the Box-Behnken experimental design with a quadratic polynomial response surface performed well 154 at predicting the simulations results for CO 2 injection into a reservoir-caprock system. Asai et al. [1] 

6 

155 developed surrogate models based on Box-Behnken experimental design for fully bridging fractures 156 EGS design, which showed well spacing is the most important parameter in extracting heat from 157 EGS. However, the other important factors (e.g., Initial reservoir temperature, reservoir depth, SRV 158 permeability and fracture number) are not considered in their experimental design. Furthermore, 159 no economic and environmental evaluation were assessed in their study. 

160 In our view, one of the paramount challenges in any EGS project is the cost-eective engineering 161 of subsurface fracture networks with large surface area. We have tackled this problem on two 162 fronts: (1) by investigating exotic fracture designs and (2) assessing their economic performance. 163 Partially-bridging fractures are used as an example, but other designs that maximize surface area or 164 maintain high production temperatures would be alternative candidates. Numerical models, both 165 physics-based and reduced-order proxies, provide a practical means of evaluating and optimizing 166 these designs before eld testing. 

167 In this study, we develop a physics-based model for heat and mass transfer in an engineered 168 reservoir and wellbore system that uses partially-bridging fractures. A binary search was used 169 to determine the highest thermal power output that can be stably maintained over the project's 170 operational lifetime, subject to the seasonal requirements of a district heating application. Then, 171 the physics model is used to assess heat extraction performance across key parameter ranges. These 172 results are used to develop a fast polynomial surrogate model using ED-RSM method. Finally, we 173 use the surrogate model and Monte Carlo simulation to perform an economic and environmental 174 evaluation for a case study EGS reservoir in Qiabuqia, China. 

175 

# 2. Physics-based EGS ow and fracture simulation 

176 

## 2.1. Conceptual model 

177 We considered a horizontal doublet-well system in which the primary ow network comprises a series 178 of vertical fractures in a partially-bridging design that delineate a number of SRVs. We set the size 179 of the computational domain to 2000 _×_ 500 _×_ 300 m centered at a specied reservoir depth (ranging 180 from 1 to 5 km). The domain is subdivided into an unstimulated reservoir zone enclosing separate 181 SRV and fracture zones, as well as injection and production well zones with associated perforations 182 that provide ow linkages between fractures and wells. Vertical fractures are evenly distributed 

7 

183 

between the toe and heel of the wellbore. 

- 184 Water is injected into the injection wellhead where it ows along the wellbore and through 

- 185 perforations into the injection fractures. From there, it ows across the SRV zones becoming heated 186 as it equilibrates with the rock matrix. Water exits into the production fractures and from there 187 into the production well via the perforations, exiting at the production wellhead (Fig. 1). Geometric 188 parameters of the reservoir-fracture-well model are listed in Table 1. 

### 189 

## 2.2. Governing equations 

- 190 Our physics-model is constructed using the thermal groundwater simulator Finite Element Heat 

- 191 and Mass transfer (FEHM) [53]. To simplify calculations, we represent the EGS reservoir zone and 

192 SRV zone as an equivalent continuous porous medium with homogeneous and isotropic properties 193 [11]. Furthermore, local thermal equilibrium is assumed between the solid rock and uid [40], which 

- 194 means thermal short circuiting via fast ow pathways in the SRV cannot be considered. FEHM 

- 195 solves heat and mass balance equations subject to Fourier and Darcy laws using a control volume 

196 method. Mass conversation for uid ow in a porous media is expressed [21]: 

Table 1 

Geometric <u>parameters</u> of the reservoir-fracture-well model. 

|Parameters|Values|
|---|---|
|Model dimensions (m<sup>3</sup>)|2000 _×_ 500 _×_ 300|
|Reservoir depth (m)|range from 1000 to 5000|
|Fracture numbers|range from 4 to 20|
|Fracture aperture (mm)|1 [39]|
|Fracture width (m)|300|
|Fracture height (m)|30|
|Well spacing (m)|300|

197 where _φ_ is rock porosity, _Qm_ is the mass source term. _ρw_ is pressure and temperature-dependent 198 uid density, and **_q_** is the Darcy ux, expressed: 

8 

199 where _k_ is permeability, _µ_ is viscosity, _p_ is pressure, **_g_** = [0 _,_ 0 _,_ - _g_ ] is the gravitational acceleration 200 vector. 

201 

The cubic law is used to assign permeability in the fractures [52]: 

202 where _af_ is the fracture aperture. Fracture permeability calculated by the cubic law is represented 203 as an equivalent fracture permeability [27] in FEHM: 

204 where _ke_ is the equivalent fracture permeability, _afe_ is the control volume width of fracture zone 205 nodes in FEHM. 

206 The energy conservation equation is formulated [54]: 

207 where _T_ is temperature, _QE_ is the energy source term, _cp,w_ is the heat capacity of uid. ( _ρcp_ )eff 208 and _λm_ are eective volumetric heat capacity and thermal conductivity, calculated as [54]: 

9 

Fig. 2. (a) x-y plane view of model mesh for four partially-bridging fracture model and (b) a schematic diagram of node assignments and connections in the FEHM framework. Mesh spacings are indicative only. 

Table 2 

Physical <u>parameters</u> of reservoir-fracture-well model. 

|Parameters|Background<br>rock|SRV|Fracture<br>perforations|&|Wellbore|Casing|
|---|---|---|---|---|---|---|
|Density (kg/m<sup>3</sup>)|2500|2500||||2500|
|Heat<br>conductivity|2.5|2.5||||2.5|
|(W/(m_·_K))|||||||
|Heat<br>capacity|1000|1000||||1000|
|(J/(kg_·_K))|||||||
|Porosity (%)|1|2|100||100|0|
|Permeability (m<sup>2</sup>)|10<sup>_−_16</sup>|10<sup>_−_16</sup> _∼_10<sup>_−_14</sup>|_a_<sup>2</sup><br>_f_<sup>_/_12</sup>||5_×_10<sup>_−_9</sup>|10<sup>_−_18</sup>|
|Reservoir<br>tempera-<br>ture (<sup>_◦_</sup>C)|range from 100|to 300|||||

10 

209 where _ρs_ , _cp,s_ and _λs_ are the density, heat capacity and thermal conductivity of the solid rock, 210 respectively. 

### 211 

## 2.3. Horizontal wellbore model 

212 The purpose of the wellbore model is to capture heat extraction and mixing processes in long well213 bores with multiple perforations allowing uid to exit into, or enter from, the reservoir. This means 214 that, instead of specifying xed, proportioned injection rates and temperatures for the individual 215 fractures, we specify a single injection temperature, and rate or pressure at the wellhead. Simi216 larly, we specify a single production pressure and place no specic restrictions on ows exiting the 217 production fractures into the wellbore. 

218 The wellbore model is built in FEHM by assignment of node properties (Fig. 2) to represent the 219 horizontal wellbores, casing, and fracture perforations located along the wellbore boundary [11]. Well 220 nodes are assigned 100% porosity and high permeability, while the casing is impermeable and has 221 zero porosity. Perforation nodes are assigned the same permeability and porosity as the fractures. 222 Representative parameters for reservoir and wellbore simulators are listed in Table 2. We also note 223 that this simplied representation of the wellbore is not able to capture turbulence or other losses 224 that can occur in wells. 

### 225 

## 2.4. Initial and boundary conditions 

226 The reservoir's initial temperature was assigned a value in the range 100 to 300<sup>_◦_</sup> C depending on the 227 assumed depth and geothermal gradient. Initial uid pressure was assumed to be hydrostatic and 228 calculated as _pi_ = _ρwgz_ , where _z_ is the reservoir depth and varies between 1000 and 5000 m. All 229 model boundaries were closed to heat and mass ow because stimulation operations are assumed to 230 create a ow network that limits water loss. 

231 Fluid with an initial temperature of 30<sup>_◦_</sup> C [39,42] was injected at the wellhead node of the 232 injection well. The initial injection rate is 500 kg/s, and the injection rate is constrained so that a 233 maximum injection pressure is not exceeded at any time during the simulation. The maximum pump 234 injection pressure is equal to the minimum principal stress, which is designed to avoid propagation of 235 hydraulic fractures in the reservoir. The minimum principal stress is calculated assuming a critically- 

236 stressed crust limited by Mohr-Coulomb frictional failure in a normal faulting environment. Thus, 

11 

237 _pmax_ is given by Jaeger et al. [19]: 

238 Where _σv_ is the vertical stress, computed as _ρsgz_ , and _fs_ is the rock friction coecient, assigned a 239 typical value of _fs_ = 0 _._ 6 in this study. For example, at a depth of 3000 m, _pmax_ is 43.54 MPa, while 240 the initial reservoir pressure _pf_ is 29.4 MPa. This means that uid pressure increase of 14.14 MPa 241 is permissible. 

242 The minimum outlet pressure at the wellhead of the horizontal production was 5 MPa lower than 

243 the reservoir initial pressure, which is low enough to ensure that uid is not generally ashed in the 244 wellbore. The actual outlet pressure was calculated dynamically to meet a heat delivery target. 

Fig. 3. Simulation framework for binary search. y = integer counter for year. [P _Lo_ , P _Hi_ ] = current binary search bounds. P _m_ = mid-point of binary search. 

12 

## 245 2.5. Stable, seasonal heat output 

246 District heating schemes do not need to operate throughout the year and we therefore subdivided 247 each year into either heating or shut-in stages. Furthermore, delivery of a stable, constant heat 248 output during heating stages, across the entire lifetime of the modelled project, is an additional 249 constraint we have imposed in our study. We enforced this by increasing the production ow rate 250 as temperatures in the system begin to decline. In a real operation, seasonal demand could vary in 251 a manner that may or may not be anticipated, however, we deemed it attractive that, at least at an 252 early design stage, an achievable baseload power was estimable. 

253 To model stable, seasonal heat output, we used a simulation framework that wrapped a decision 254 model inside an optimization loop (Fig. 3). At the lowest level, a production ow rate is evaluated 255 at each time step based on the production wellhead temperature in FEHM. Internally, an outlet 256 pressure is computed that returns a ow volume meeting the heat delivery target, ∆ _Q_ for that time 257 step, allowing for a brine rejection temperature of 35<sup>_◦_</sup> C: 

258 where _q_ ( _Po_ ) is the outlet pressure dependent ow rate, ∆ _t_ is the time step length, _ho_ is the specic 259 enthalpy of uid at the outlet, and _h_ 35 is the specic enthalpy of the uid at rejection. Thus, the 260 production well behaviour is fully specied by three parameters: the rejection temperature, the heat 261 delivery target, and a minimum outlet pressure, with the latter used to prematurely terminate the 262 model if the heat demand exceeds the delivery capacity of the EGS. 

263 We modelled a 20 year period of EGS operation to allow a return on investment. Heat stages 264 were assumed to last 120 days followed by 240 days of shut-in, approximating one year of operation. 265 Note that we only considered the seasonal heating application in our research. There are other 266 heating industrial applications that could operate year-round and would not require well shut-in. In 267 addition, hybrid applications that involve heating and electricity generation could also be evaluated 268 using this model. 

269 A binary search method was used to estimate the maximum deliverable power output for a given 

270 set of reservoir parameters and subject to maximum injection pressure and minimum production 271 pressure control. The stopping condition for the search was when the update was smaller than 

13 

272 5% (i.e., _|Pm_ - _PHi|/PHi_ less than 0.05, where _Pm_ is the current heat power guess and _PHi_ is the 

273 previous). The initial search interval was [0,100] MW in all cases. FEHM time-stepping increases 

274 and decreases adaptively to maintain estimated relative error at each time-step less than 0.1%. 

Fig. 4. Summary of modelled EGS time series: injection (green) and production (blue). (a) Temperature, (b) ow rate, (c) pressure of injection and production well, and (d) thermal output over the 20-year production. Note, in (b), the injection rate and production rate are zero during well shut-in periods (not shown). Some instability at early time during restarted operation is apparent. 

275 

## 2.6. Model behaviour 

> 276 Before using this model to develop a surrogate via ED and RSM, it is useful to rst check its general 277 behavior. This includes, the injection and production ows that ensure delivery of a stable heat 

14 

278 output and the accompanying thermal evolution in the fractured reservoir. To this end, we ran 279 a model with four partially bridging fractures located at a depth of 3000 m (Fig. 1(b)), i.e., two 280 injection and two production fractures enclosing three SRV zones and bookended either side by two 281 more. The initial reservoir temperature is 250<sup>_◦_</sup> C and the SRV is assigned a permeability of 3 mD. 282 All other parameters in this benchmark model are listed in Tables 1 and 2. The simulation time is 283 20 years with injection and production wells operating in the rst 120 days of each year. 284 Wellhead inlet and outlet time series (Fig. 4) illustrate annual oscillations due to heating/shut-in 285 stages as well as long-term reservoir evolution. For example, temperature at the injection inlet is 286 30<sup>_◦_</sup> C during operation but then rapidly reheats during shut-in (although not enough to recover the 287 initial 250<sup>_◦_</sup> C). Production temperature is generally stable at early time and then decreases as the 288 reservoir cools (notwithstanding small recoveries during shut-down stages). The decreasing produc289 tion temperature is oset by increasing injection and production rates with the latter facilitated 290 by a steadily declining production outlet pressure. Overall, a 20 MW heat output is maintained 291 over the 20 year simulation period. The mesh resolution sensitivity analysis results show good con292 vergence with grid resolution and only minor increases in accuracy beyond our selected resolution. 293 Additional description of temperature and pressure evolution at various locations in the reservoir 294 over its 20-year lifetime are given in Supplementary Material. 

### 295 

# 3. Economic and environmental assessment 

296 In this section, we introduce an economic analysis model that considers the total subsurface invest297 ment cost of a modelled EGS project as well as its nancial performance and investment return. 298 This is paired with an environmental benets evaluation comprising an estimate of the displaced 299 CO 2 , SO 2 and NO _x_ emissions had coal instead been used to deliver the same heat output. Then, 300 we explore the sensitivity of these metrics to key reservoir parameters including initial reservoir 301 temperature, SRV permeability, fracture number and reservoir depth. Later, we apply an ED-RSM 302 method to develop a polynomial surrogate model that can be used for optimisation or uncertainty 303 analysis. Finally, we apply the surrogate model to an EGS direct-heat case study at Qiabuqia, 304 China, evaluating the economic and environmental benets of such a scheme. 

15 

## 305 3.1. Economic and environmental model 

306 The economic evaluation model of this study considered the capital costs ( _Ccapital_ ), and opera- 

307 tion and maintenance (O&M, _CO_ & _M_ ) costs for an EGS direct-heating project. The EGS capital 308 cost consists of exploration ( _Cexploration_ ), drilling and completion ( _Cdrilling_ ), reservoir stimulation 309 ( _Cstimulation_ ) and surface plant ( _Cplant_ ) costs (Beckers 2016). 

310 

311 where _CTotal_ is the total investment of EGS project for direct-use application. Beckers (2016) 312 summarized the costs of annual O&M, exploration, surface plant etc. for Low-, Medium-, and High313 Grade EGS scenarios referring to direct-use under Today's, Mid-term, and Commercially Mature 314 technologies. In this study, we adopted the average annual O&M costs and exploration investment for 315 these three EGS grades under the Mid-Term technology and direct-use EGS scenarios. Specically, 316 _CO_ & _M_ = 2 _._ 23 _M_ $ _/year_ multiplied by the plant lifetime, and _Cexploration_ = 4 _._ 7 _M_ $ are used in the 317 economic evaluation model. To estimate drilling and completion costs for both wells, we used the 318 model of [28,35]: 

319 Where _Cdrlling_ is expressed in million U.S. dollars (M$) and _MD_ is the measured depth of the well 320 in metres, which is expressed as the sum of reservoir depth and horizontal wellbore length in our 321 model. 

322 For the stimulation cost of an EGS, most prior studies have estimated a xed value between 0.5 

323 and 1.2 M$ [16,34,36]. However, these values were independent of reservoir depth and assumed a de324 viated or vertical geothermal well stimulation, which may not be applicable for multi-stage hydraulic 325 fracturing in a horizontal well. Based on these fracturing costs on EGS stimulation operation, we 326 elected to use 0.75 M$ per fracture stage in this study. 

16 

- 327 where _F_ is the number of hydraulic fractures. Thus, in our model, both development costs and 

328 heat output are increased for larger fracture designs, and adding more fractures does not necessarily 329 improve a project's economic prospects. Of course, these cost models are subject to considerable 330 uncertainty given the challenges of developing in hot, hard rock, and we acknowledge that updates 331 are likely to be needed as more experience is gained. The surface plant equipment cost for direct-use 

332 heat mode are estimated based on the correlation that Beckers (2016) built in GEOPHIRES: 

333 where _Cplant_ is expressed in million U.S. dollars (M$). _W_ is the thermal output in _kW_ . 

334 Based on the group heating principle, heat consumption per year is expressed [55]: 

335 Where _Qh_ is the heat consumption per year per unit heating area, J/yr/m<sup>2</sup> ; _η_ is the conversion factor 336 between days and seconds (86400 s per day), _N_ is length of the heating period in a year, days/yr; 337 _qh_ is the heating area heat index (Heat load per unit area), W/m<sup>2</sup> .; _Tin_ is the indoor design air 338 temperature for heating,<sup>_◦_</sup> C; _Tm_ is the average outdoor air temperature during the heating period, 339 _◦_ C; _Tout_ is the outdoor design air temperature for heating, _◦_ C. Based on the design code for a district 340 heating network in China [56], the values for Qiabuqia used in this study are listed here: _qh_ = 40 341 W/m<sup>2</sup> [57], _N_ = 120 days; _Tin_ = 20<sup>_◦_</sup> C; _Tm_ = - 1 _._ 6<sup>_◦_</sup> C; _Tout_ = - 9<sup>_◦_</sup> C. The value of heating per heating 342 season per unit heating area is $7.14 /yr/m<sup>2</sup> . The corresponding heat price expressed at $/MWh is 343 62.85 $/MWh. 

344 The maximum constant power output maintainable for 20 years for a given set of reservoir 345 parameters is obtained from FEHM. Set alongside _Qh_ , this is used to obtain the possible heated 346 area each year and hence the total income when multiplied by the price per year per unit heated 347 area. 

17 

Fig. 5. (a)-(b) Economic and (c) environmental model outputs for a range of initial reservoir temperatures. For simulations where prot is not realised in 20 years, we extrapolated current levels of production to estimate when protability is achieved. In practice, because reservoir heat production is only optimized for the rst 20 years, output would start to wane afterward and protability may take even longer. 

348 Finally, we assumed an annual interest rate of 5.48% on a loan taken for the total investment 349 cost for given project parameters, i.e., depth and fracture count. This is used to compute the time 350 taken for the project to rst return a prot, which assumes that heating income is used to pay loan 351 interest and principal at the maximum rate. Therefore, the return on investment is computed: 

352 where _P_ is the total prot of project, _ITotal_ is the total income during 20 years operation, and 353 _CTotal_ is the total investment. Another techno-economic parameter for evaluating the feasibility is 354 the levelized cost of heat (LCOH) based on the Eq.17 (Beckers, 2016): 

355 where _Co_ is the capital investment of the project (M$), _Ci_ is the annual operating and maintenance 356 cost in year _i_ (M$/yr), _Ei_ is the annual heat production in MWh/yr. As we modelled the maximum 357 stable thermal output in our FEHM numerical model, no discount rate applies to annual heating 358 production. _r_ is the discount rate, which is calculated from the annual interest rate. The envi- 

18 

- 359 ronmental benets analysis focuses on the equivalent coal consumption displaced by EGS heating 

- 360 and its attendant greenhouse gas emissions (CO 2 , SO 2 , NO _x_ ). We used a conversion factor of 1 

- 361 kg standard coal releasing 7000 kcal of heat [9] to compute the total mass of coal saved in the 20 

- 362 years production lifetime. Further, the total emissions reduction was calculated using a conversion 

- 363 factor of 1 tonne of standard coal under combustion releasing 2620 kg CO 2 , 8.5 kg SO 2 , and 7.45 kg 

- 364 NO _x_ . The carbon tax and dust emission reduction are not formally considered in the cost analysis, 

- 365 although some ballpark gures are provided later. 

Fig. 6. (a)-(b) Economic and (c) environmental model outputs for a range of reservoir depths. 

### 366 

## 3.2. Sensitivity analysis 

- 367 Initial reservoir temperature, depth, SRV permeability and fracture number were identied as key 

- 368 parameters likely to inuence the economic prospects and the scale of environmental benets of 

- 369 the proposed EGS. Notably, the reservoir temperature is determined by both reservoir depth and 370 temperature gradient. Therefore, both reservoir temperature and reservoir depth are analysed in 

- 371 this study independently, particularly as depth controls safe uid operating pressures that avoid 372 unwanted fracturing. Fracture permeability was not considered because, as a high permeability 373 pathway in the ow network, this value has a much smaller impact on reservoir performance com- 

- 374 pared to the main ow bottleneck (the SRV). Here, we have conducted a few indicative parameter 

- 375 sweeps to understand their relative importance. The benchmark reservoir parameters used are ini- 

- 376 tial reservoir temperature (250<sup>_◦_</sup> C), reservoir depth (3000 m), SRV permeability (3mD), and fracture 

- 377 count (10). Other parameters are listed in Tables 1 and 2. 

19 

378 (1). Initial reservoir temperature Notwithstanding the engineering challenges of high temper379 atures, hot reservoirs are generally more desirable because the produced water has a higher energy 

- 380 content. Depending on permeability, this can sustain a higher ow rate and power output over a 381 xed time horizon or, if ow limits are encountered, a longer lifetime before thermal breakthrough 382 occurs. Our sensitivity study indicates roughly linear improvements in thermal output and heated 383 area, and projects larger prots with increasing temperature (Fig. 5a, Fig. 5b), with similarly linear 384 behaviour in the main environmental osets (Fig. 5b). The LCOH decreases dramatically with the 385 increases of the reservoir initial temperature because higher temperatures produce higher thermal 386 outputs (Fig. 5a). The computed range of LCOH falls in the range computed by Beckers et al. [3] 387 ($13 to $350/MWh) based on an analysis of ve US geothermal deep use projects. 388 Because interest costs change depending on prot and repayment time scale, the total investment 389 is not constant for dierent reservoir temperatures. Time to prot is inversely proportional with 390 temperature, reecting the approximately xed project costs but increasing protability. However, 391 the project is not protable over a 20 year production lifetime for reservoir temperatures less than 392 120<sup>_◦_</sup> C because the subsurface investment cannot be recouped. The optimal outcomes are achieved 393 for the highest considered temperature (300<sup>_◦_</sup> C) including prot of 210 M$ and coal oset of 5 _×_ 394 10<sup>8</sup> kg. The oset CO 2 emissions of 1.3 _×_ 10<sup>9</sup> kg would be worth 5 M$ at a carbon price of 10 395 $/tonne, and 50 M$ at a price of 100 $/tonne. 

- 396 (2). Reservoir depth If temperature is xed, then the primary eect of reservoir depth is to 397 control the maximum injection pressure that can be operated while avoiding hydraulic fracture 398 propagation. Operating at higher injection pressures allows increased ow throughput for xed 399 permeability. Our sensitivity analysis indicates that thermal output, residential heating area, and 400 protability all increase for deeper reservoirs (Fig. 6). However, there are diminishing returns 401 with increasing depth reecting the quadratic cost of drilling with depth (Eq.12). The LCOH is 402 also reduced for deeper reservoirs, which indicates that the increased thermal output outweighs the 403 increased drilling costs. The time to achieve prot as a minimum at about 8.5 years and a depth 404 of 4000 m. Oset coal and emissions increase in a diminishing manner matching thermal output. 405 In practice, higher reservoir temperatures, and lower ambient or stimulated permeability conditions 406 could reasonably be expected with increased depth. 

20 

Fig. 7. (a)-(b) Economic and (c) environmental model outputs for a range of SRV permeabilities. For simulations where prot is not realised in 20 years, we extrapolated current levels of production to estimate when protability is achieved. In practice, because reservoir heat production is only optimized for the rst 20 years, output would start to wane afterward and protability may take even longer. 

Fig. 8. (a)-(b) Economic and (c) environmental model outputs for a range of fracture numbers. 

- 407 (3). SRV permeability Changing SRV permeability causes attendant changes in injection and 

- 408 production rates because these operate under xed pressure conditions. Higher SRV permeabilities 

- 409 increase all desirable outcomes including thermal output, heated area, protability and environmen- 

410 tal osets (Fig. 7). Similar with reservoir depth, SRV permeability is a strong control on LCOH 411 signicantly ranging from 30 $/MWh to 250 $/MWh. The total investment decreases with increas412 ing SRV permeability because the project is more protable and loans are paid back sooner, thus 

21 

413 reducing interest costs. For these parameters, projects are not protable for an SRV permeability 

- 414 less than 0.4 mD. This highlights an essential role for secondary stimulation mechanisms outside of 415 the hydraulic fracturing treatment that creates the network backbone. 

416 (4). Fracture numbers Because our model assumes a xed length for the horizontal wells, the 417 addition of more fracture stages increases the number of inlet and egress points for water in the reser418 voir but not the volume of swept rock. Thus, the SRV volume to fracture ratio is reduced meaning 419 that water takes a shorter pathway through the rock and is consequently heated less. Although 420 increasing the fracture count improves most of the metrics of interest, diminishing returns become 421 particularly severe at high counts _∼_ 1620 (Fig. 8). At this extreme, both mounting stimulation 422 costs and an almost at marginal thermal output impact the bottom line. Clearly, careful thought 423 should be put into the optimal number of fracture stages per length of wellbore. 

424 The minimum time to prot is about 6.75 years when EGS reservoir has 18 fractures with the 425 maximum prot of 250 M$. As before, oset coal and emissions all scale with thermal output. 426 LCOH decreases sharply with the increase of fracture numbers rst, then reduces only slightly for 427 fracture numbers larger than 12, due to the diminishing eect between thermal output and total 428 investment. 

### 429 

## 3.3. Surrogate model 

430 Initial reservoir temperature, reservoir depth, SRV permeability and fracture number each play a 431 dierent role in the economic and environmental outcomes of the modelled EGS project. Under432 standing the interactions between these parameters is necessary if we wish to accelerate optimization 433 strategies or quantify uncertainty across multiple parameters. To avoid the high computational costs 434 associated with each simulation several days depending on the particular parameters, FEHM and 435 binary search convergence  we used ED-RSM to develop a surrogate model that is rapid to evaluate. 

436 (1) ED-RSM design selection In experimental design, several parameters are varied simulta437 neously based on a predened pattern. The goal is to obtain as much information as possible from 438 the least amount of data using a minimal number of simulations (White et al. 2001a). Experimental 

- 439 design congurations can be categorized into two methods: sampling designs and factorial designs. 

22 

Table 3 

Parameter values and levels for the Box-Behnken design. 

|Parameters|Units||Level||
|---|---|---|---|---|
|||_−_1|0|1|
|Reservoir initial temperature (_Ti_)|_◦_C|100|200|300|
|Reservoir depth (_D_)|m|1000|3000|5000|
|SRV permeability (_Ksrv_)|md|0.1|1|10|
|Fracture numbers (_F_)||4|12|20|

Table 4 

The Box-Behnken design and simulation results. 

|ID|Reservoir<br>initial<br>tem-<br>perature<br>(<sup>_◦_</sup>C)|Reservoir<br>depth<br>(m)|SRV perme-<br>ability (md)|Fracture<br>numbers|Max.<br>stant <br>power<br>put<br>-simula|con-<br>thermal<br>out-<br>(MW)<br>tion|Max.<br>stant t<br>power<br>put<br>-predic|con-<br>hermal<br>out-<br>(MW)<br>ted|Residuals<br>(MW)|
|---|---|---|---|---|---|---|---|---|---|
|1|_−_1|_−_1|0|0|5.893||5.443||4_._50_×_10<sup>_−_1</sup>|
|2|1|_−_1|0|0|34.674||34.289||3_._85_×_10<sup>_−_1</sup>|
|3|_−_1|1|0|0|13.620||12.580||1.04|
|4|1|1|0|0|73.243||72.429||8_._13_×_10<sup>_−_1</sup>|
|5|_−_1|0|_−_1|0|2.852||3.087||_−_2_._36_×_10<sup>_−_1</sup>|
|6|1|0|_−_1|0|25.902||28.048||_−_2_._15|
|7|_−_1|0|1|0|23.837||23.800||3_._66_×_10<sup>_−_2</sup>|
|8|1|0|1|0|95.134||95.010||1_._24_×_10<sup>_−_1</sup>|
|9|_−_1|0|0|_−_1|1.801||1.899||_−_9_._77_×_10<sup>_−_2</sup>|
|10|1|0|0|_−_1|16.450||16.194||2_._55_×_10<sup>_−_1</sup>|
|11|_−_1|0|0|1|18.551||19.079||_−_5_._29_×_10<sup>_−_1</sup>|
|12|1|0|0|1|84.485||81.144||3.34|
|13|0|_−_1|_−_1|0|8.307||8.165||1_._42_×_10<sup>_−−_1</sup>|
|14|0|1|_−_1|0|12.713||14.050||_−_1_._34|
|15|0|_−_1|1|0|46.063||42.200||3.86|
|16|0|1|1|0|68.910||70.990||_−_2_._08|
|17|0|_−_1|0|_−_1|4.352||4.740||_−_3_._88_×_10<sup>_−_1</sup>|
|18|0|1|0|_−_1|8.875||8.596||2_._79_×_10<sup>_−_1</sup>|
|19|0|_−_1|0|1|32.111||35.847||_−_3_._74|
|20|0|1|0|1|57.636||57.219||4_._17_×_10<sup>_−_1</sup>|
|21|0|0|_−_1|_−_1|3.778||3.348||4_._30_×_10<sup>_−_1</sup>|
|22|0|0|1|_−_1|26.399||27.212||_−_8_._13_×_10<sup>_−_1</sup>|
|23|0|0|_−_1|1|20.462||18.132||2.33|
|24|0|0|1|1|56.511||58.252||_−_1_._74|
|25|0|0|0|0|34.447||34.447||_−_3_._45_×_10<sup>_−_8</sup>|

440 Factorial designs are typically used for screening or response surface optimization. These are 

441 a set of factor-value combinations for which responses are measured (a forward simulation run) at 

442 either a low and high parameter value, or a low, centre, and high. Levels of the latter are 

23 

- 443 denoted _−_ 1 , 0, and +1 , respectively. As the number of parameters increases, full factorial designs 444 become quite large due to exponential growth in the number of forward model runs required. In 445 this study, we used a Box-Behnken design, which is a modied three-level factorial design. We used 446 the same four reservoir parameters investigated in the previous sensitivity analysis. A Box-Behnken 447 design requires fewer experiments 25 simulation runs for four parameters compared with a full 448 factorial design (81 experiments for three levels). 

449 The response surface is an empirical proxy (surrogate) model tted to the outcomes of the design 450 experiments and is assumed to adequately predict the unobserved response at other parameter com451 binations. For a three-level design, this model is usually a quadratic polynomial on the parameters 452 of interest with coecients obtained by linear regression. The model allows estimation of interaction 453 and quadratic eects and is particularly appropriate for Box-Behnken designs [31]. 

454 The factor ranges considered for ED are given in Table 3 and reect a reasonable parameter 455 range for possible EGS projects. For parameters outside this range, the surrogate model is likely 456 to perform poorly. In order to minimise the order of magnitude variability in SRV permeability 457 and obtain a nearly linear response [43], logarithmic scaling was applied to this parameter. Table 4 458 reports the factor combinations as well as the stable heat output obtained from the FEHM binary 459 search for the 25 design simulations. These range from 1.8 MW for a low-temperature, low fracture 460 count project (ID 9) up to 95 MW for a high temperature, high permeability reservoir (ID 8). 

461 For our surrogate model, we used a general quadratic polynomial that was a function of the 462 four independent reservoir parameters and comprised four linear terms, four interaction terms, four 463 quadratic terms, one constant and two third-order interaction terms, the latter selected to achieve a 464 higher precision of the tted model. A logarithmic transformation was applied to the model responses 465 before tting to avoid developing a surrogate model with negative outputs. Model coecients were 466 obtained from least squares regression. Finally, the surrogate model for the maximum stable thermal 467 output over the 20 year production lifetime is: 

_log_ 10 _MWt_ = _a_ + _bTi_ + _cD_ + _dlog_ 10 _Ksrv_ + _eF_ + _fTiD_ + _gTilog_ 10 _Ksrv_ + _hTiF_ + _iDlog_ 10 _Ksrv_ + _jDF_ + _klog_ 10 _KsrvF_ + _lTi_<sup>2+</sup><sup>_mD_2 +</sup><sup>_nlog_10</sup><sup>_K_</sup> _srv_<sup>2+</sup><sup>_oF_2 +</sup><sup>_pT_2</sup> _i_<sup>_D_+</sup><sup>_qlog_10</sup><sup>_K_</sup> _srv_<sup>2</sup><sup>_F_</sup> (11) 

24 

468 where the coecients _a_ through _q_ are given in Table 5. 

Table 5 

Regression summary analysis of the surrogate model Eq.11. RMSE = root mean square error. 

|Terms|||Estimate|Std. Error|t value|P_>|_t_|_|
|---|---|---|---|---|---|---|
|Constant|Intercept|_a_|46.6639|12.143|3.843|0.005|
|Linear Terms|_Ti_|_b_|0.001|0.004|0.234|0.821|
||_D_|_c_|0.0003|0|1.505|0.171|
||log10_Ksrv_|_d_|5.7945|1.607|3.606|0.007|
||_F_|_e_|_−_4_._5146|0.842|_−_5_._361|0.001|
|Interaction Terms|_Ti_*_D_|_f_|_−_1_._18E-06|6.11E-07|_−_1_._937|0.089|
||_Ti_*log10_Ksrv_|_g_|_−_0_._0009|0|_−_3_._653|0.006|
||_Ti_*_F_|_h_|_−_9_._44E-05|3.06E-05|_−_3_._09|0.015|
||_D_*log10_Ksrv_|_i_|_−_1_._23E-06|1.22E-05|_−_0_._101|0.922|
||<br>_D_*_F_|_j_|_−_8_._66E-07|1.53E-06|_−_0_._567|0.586|
||_Ksrv_*_F_|_k_|_−_0_._6104|0.112|_−_5_._435|0.001|
|Quadratic Terms|_T_ <sup>2</sup><br>_i_|_l_|_−_2_._30E-05|5.35E-06|_−_4_._306|0.003|
||_D_<sup>2</sup>|_m_|_−_2_._11E-08|7.27E-09|_−_2_._894|0.02|
||log10_K_<sup>2</sup><br>_srv_|_n_|0.1702|0.054|3.181|0.013|
||_F_ <sup>2</sup>|_o_|_−_0_._0035|0|_−_7_._645|0|
|Third order terms|_T_ <sup>2</sup><br>_i_ <sup>*</sup><sup>_D_</sup>|_p_|2.84E-09|1.50E-09|1.895|0.095|
||<br>log10_K_<sup>2</sup><br>_srv_<sup>*</sup><sup>_F_</sup>|_q_|_−_0_._0199|0.004|_−_5_._325|0.001|
|_R_-squared Statistic|||0.997||||
|Adjusted _R_-squared|Statistic||0.990||||
|RMSE (MW)|||1.58||||
|Observations|||25||||

Fig. 9. (a) Relative residuals (residual/tted value) vs. tted values plot and (b) Normal Q-Q plot of the regression model. 

25 

- 469 (2) Validity of the surrogate model The results of the regression analysis are summarized in 

470 Table 5. The R-square statistic and adjusted R-square statistic are 0.997, and 0.990, respectively, 471 indicating a good level of t by the quadratic polynomial model in the experimental range. The root 472 mean square error (1.58 MW) is and Fig. 9 (residual and normal Q-Q plot) suggests that residuals 473 are unbiased, normally distributed and hence overtting has been minimised. 

474 We note that although the linear temperature and depth terms, and the interaction terms in475 volving depth are not signicant (P _>_ 0.05), the quadratic temperature and depth terms are quite 476 signicant (Table 5). Therefore, all four reservoir parameters are signicant for predicting maximum 477 constant thermal output for the proposed EGS design. 

478 Another 12 simulation test cases (Table 6) were modelled and compared with the predictions 479 of the surrogate model to further evaluate the regression model's performance (Fig. 10). The 480 deviations between test and predicted values are generally small providing a degree of condence 

481 as we proceed to demonstrate how the surrogate model is used. An expanded analysis of response 

482 surface interactions between each parameter pair is included in Supplementary Material. 

Fig. 10. Comparison between the test simulation results and predicted results by the proxy model. 

26 

### 483 

## 3.4. Qiabuqia case study 

484 In this section, we apply our surrogate model to an assessment of a hypothetical HDR reservoir 485 within the Qiabuqia geothermal eld located in the Gonghe basin, China. The Gonghe Basin, with 486 an area of 21186 km<sup>2</sup> , is located in the Northeast margin of the Qinghai-Tibetan Plateau and is a 487 target geothermal exploitation demonstration area for China [24,25,46,51]. Three geothermal elds 488 have been identied in the Gonghe Basin, including the Qiabuqia, Dalianhai, and Duotanwaerma 489 sites. The Qiabuqia HDR geothermal eld, with an area of 246.9 km<sup>2</sup> , is located in the eastern part 490 of the basin and has an average geothermal gradient in a granite stratum of 7.1<sup>_◦_</sup> C/100 m, reaching 491 a temperature of 236<sup>_◦_</sup> C at 3705 m depth in its GR1 well [24,25,51]. Drill core data revealed that 492 the Qiabuqia reservoir is a naturally fractured granite formation, with permeability in the range of 493 0.260.7mD [25]. 

494 Several studies have considered the potential of Qiabuqia geothermal eld for EGS power gen495 eration project. Zhang et al. [51] built a 3D thermo-hydraulic coupled numerical model of the eld 496 to assess heat production under dierent injection ow rate, temperature and lateral well spacing 497 for a doublet well system. Lei et al. [24] investigated the feasibility of hydraulic fracturing based 498 on laboratory tests, which suggested that hydraulic fracturing under non-proppant or low-proppant 499 condition in Qiabuqia granite formation is feasible. Then, Lei et al. [25] used models to show that 500 a slickwater fracturing treatment could achieve the desired fracture network and half-length target 501 range. 

27 

Table 6 

Simulation results for testing the surrogate model. 

|ID|Reservoir<br>initial<br>tem-<br>perature<br>(<sup>_◦_</sup>C)|Reservoir<br>depth<br>(m)|SRV <br>ability|perme-<br> (md)|Fracture<br>numbers|Max.<br>thermal<br>output <br>simulat|constant<br><br>power<br> (MW) -<br>ion|Max.<br>therma<br>output <br>predict|constant<br>l<br>power<br> (MW) -<br>ed|Residuals<br>(MW)|
|---|---|---|---|---|---|---|---|---|---|---|
|1|100|3000|3||10|14.917||12.018||2.899|
|2|225|3000|3||10|49.151||47.179||1.972|
|3|250|3000|5||10|66.280||63.789||2.492|
|4|250|3000|0.5||10|30.735||30.306||0.429|
|5|250|2500|3||10|54.916||50.238||4.678|
|6|250|3000|3||14|72.159||77.574||_−_5_._416|
|7|250|3000|3||12|67.007||67.264||_−_0_._257|
|8|250|3000|1||10|42.130||38.453||3.676|
|9|250|3000|3||18|79.367||85.147||_−_5_._780|
|10|250|3000|3||20|80.210||81.039||_−_0_._828|
|11|168.5|3540|8.5||8|38.973||36.293||2.680|
|12|128.5|2840|1.5||16|20.695||26.081||_−_5_._386|

Fig. 11. The relationship of total prot (a), LCOH (b) and time to prot (c) with fracture numbers and SRV permeability. 

502 Shan et al. [37] analyzed the maximum magnitude ( _∼_ 3) of induced earthquakes by hydraulic 503 fracturing in Qiabuqia geothermal eld combined with focal mechanism, in-situ stress state and 504 tectonic situation. Lei et al. [24,25] also investigated the economics of power generation at the eld 505 for a conceptual three-well (vertical and horizontal) EGS system (one injection well anked by two 506 production well) for dierent operational parameters. 

507 However, the economic and environmental potential of Qiabuqia geothermal eld for direct508 heating applications, particularly with a partially-bridging fracture design, has not been investigated. 509 Therefore, we have used the surrogate model developed in this study to evaluate the prospects of such 510 a development. Consistent with the underlying FEHM model, we assume a development volume of 511 2000 _×_ 500 _×_ 300 m at the Qiabuqia geothermal site, which is then accessed by a specied number 

28 

512 of partially-bridging fracture pairs. We then investigate the potential economic performance and 513 environmental benets given uncertainty about the reservoir properties. 

- 514 Following Lei et al. [25], we used an initial reservoir temperature of 218<sup>_◦_</sup> C at a depth of 3600 515 m. We then used the surrogate model in its two modes: (1) for optimization, in order to select a 516 preferred fracture number for the development; and (2) for uncertainty quantication, to estimate 517 the range of potential thermal outputs of the project given an unknown range of SRV permeabilities. 518 Commercial and environmental outcomes were also estimated. 

- 519 For the Qiabuqia geothermal reservoir, viability of an EGS prospect depends critically on the 520 SRV permeability as presented in Fig. 11. The highest prot was achieved at the largest SRV 521 permeability of 10 mD and using 14 hydraulic fractures in the EGS design. The minimum time to 522 prot was obtained using a 14 fracture design. However, the same designs for an SRV permeability 523 10 times smaller are predicted to yield losses of 159.11 M$ over the project lifetime and an increase 524 of 19.49 $/MWh for the levelized cost of heat. 

525 The optimal EGS design at Qiabuqia could support approximately 2.80 km<sup>2</sup> of indoor heating 526 or 28 000 dwellings at 100 m<sup>2</sup> each. Moreover, nearly 6 _×_ 10<sup>8</sup> kg of coal would be displaced by 527 the project, corresponding to 1.6 Mt of CO 2 , 5.0 _×_ 10<sup>6</sup> kg of SO 2 , and 4.4 _×_ 10<sup>6</sup> kg of NO _x_ . The 528 corresponding CO 2 emission intensity oset is 330 gCO 2 /KWh. The lifecycle CO 2 emission from 529 electricity supplied by the same amount of coal emits more than 1000 gCO 2 /KWh [7]. This further 530 indicates that EGS heating application could signicantly reduce the greenhouse gas emissions. 

531 As the surrogate model cannot predict the thermal power output with 100% condence (Fig. 532 10), and because the SRV permeability is unknown, we conducted an uncertainty analysis on project 533 protability. Based on the prior optimization, we set the design fracture number to 14. We then 534 used Monte Carlo sampling to capture uncertainty in the SRV permeability, sampling from a normal 535 distribution with mean of 1 mD and standard derivation of 0.3. These values represent stimulation 536 enhanced permeability by up to an order of magnitude compared to drill core investigations. For 537 each sampled value of SRV permeability, the sustainable thermal power output is calculated from 538 the surrogate model, taking account of uncertainty in the surrogate t (see condence interval in Fig. 539 10). Finally, the project return is computed based on the simulated thermal power output. In total, 

540 20 000 Monte Carlo simulations were run, with the results shown in Fig. 12. The median estimates 

541 of thermal power output, levelized cost of heat and total return are 52.4 MW, 46.72 $/MWh and 

29 

542 109.97 M$, respectively, with 95% bounding condence intervals of [33.6, 73.2] MW, [33.0,84.6] 

- 543 $/MWh ,and [24.0, 185] M$. 

Fig. 12. Monte Carlo analysis of max constant thermal power output (a) LCOH (b), and total return (c) during 20 years under SRV permeability. 

### 544 

# 4. Discussion & conclusion 

- 545 This study has built on a previously proposed EGS fracture design [48] that takes advantage of 

- 546 advanced fracture engineering between paired horizontal wellbores in hot dry rock. A binary search 547 simulation framework was developed to optimize thermal power output of this design over a 20 548 year project lifetime for given input parameters. Using this model, the eect of four key reservoir 549 parameters was evaluated: initial reservoir temperature, reservoir depth, stimulated reservoir volume 550 (SRV) permeability and fracture number. The scale of both economic and environmental benets 551 was estimated. A surrogate model was then developed using a Box-Behnken experimental design and 

- 552 a quadratic response surface model. Finally, we demonstrated use of the proxy model to optimize 553 fracture design and predict under uncertainty the performance of an EGS residential heating project 

- 554 in Qiabuqia, China. The key ndings of this study are summarised below: 

- 555 1. For the modelled EGS development, SRV permeability plays an essential role in determining 556 protability, with prospects at the low end (0.1 mD) generally not returning a prot over 20 557 years. Deeper reservoir formations and larger fracture numbers increase protability although 

- 558 both exhibit diminishing returns due to increased drilling and stimulation costs. 

30 

- 559 2. Particular attention is required when optimizing the number of fracture pairs in a partially 560 bridging design as the marginal return of thermal output can become negative at high fracture 561 density. 

- 562 3. A case study application in the Qiabuqia EGS eld suggests the best performance is achieved 563 when using 14 hydraulic fractures. A project of this size could support approximately 2.8 km<sup>2</sup> 564 of indoor heating for 20 years with considerable emissions reductions ( _>∼_ 1.5 Mt of CO 2 ). A 565 Monte Carlo uncertainty analysis for this case study suggests the most likely thermal power 566 output is 52.4 MW in a 95% interval of [33.6, 73.2] MW with total prot of 109.97 M$ in the 567 interval [24.0, 185] M$. The most likely levelized cost of heat for Qiabuqia EGS eld is 46.72 568 $/MWh in the interval of [33.0, 84.6] $/MWh. 

569 Although the economic and environmental evaluation of the partially-bridging EGS design is 570 encouraging, much work remains to be done. The numerical model presented here only considers 571 an idealized fracture design, whereas a real reservoir could have interactions between propagating 572 hydraulic fractures and natural fractures, or other complex stress conditions. In future, the eects 573 of secondary stimulation in the SRV that could lead to permeability changes over the operational 574 lifetime could be incorporated, however, such eects would be challenging to quantify without eld 575 data. Well spacing is also an important parameter which could be analysed in the further studies. 576 Although we have only considered seasonal heating applications, there are many other uses for EGS 577 heat that could have improved economic feasibility. Finally, for the case study of the Qiabuqia 578 geothermal eld presented in this paper, additional reservoir data could reduce uncertainty on the 579 input side, while additional improvements to the ED-RSM design could reduce model uncertainty. 

### 580 

# CRediT authorship contribution statement 

581 Pengliang Yu: Conceptualization, Investigation, Methodology, Software, Formal analysis, Writing 582 original draft, Writing review & editing, Visualization. David Dempsey: Methodology, Soft583 ware, Resources, Writing review & editing, Supervision. Rosalind Archer: Resources, Writing 584 review & editing, Supervision. 

31 

### 585 

# Declaration of Competing Interest 

586 The authors declare that they have no known competing nancial interests or personal relationships 

587 that could have appeared to inuence the work reported in this paper. 

### 588 

# Acknowledgements 

589 Pengliang Yu is supported by the New Zealand-China Doctoral Research Scholarship co-issued by 590 the Ministry of Foreign Aairs and Trade (New Zealand) and China Scholarship Council (CSC). 591 The authors wish to acknowledge A. Ciriaco at the University of Auckland for helpful discussions 592 about the Experimental Design. We also acknowledge the Centre for eResearch at the University of 593 Auckland who provided computational support for this research. 

### 594 

# Appendix A. Supplementary data 

595 Supplementary data to this article can be found online at https://doi.org/10.1016/j.enconman 596 .2022.115405. 

# 597 References 

- 598 [1] Asai P, Panja P, McLennan J, Moore J. Performance evaluation of enhanced geothermal system 599 (EGS): surrogate models, sensitivity study and ranking key parameters. Renewable Energy 600 2018;122:18495. 

- 601 [2] Augustine Ca. A methodology for calculating EGS electricity generation potential based on the 602 gringarten model for heat extraction from fractured rock. GRC Trans 2016;40. 

- 603 [3] Beckers KF, Kolker A, Pauling H, McTigue JD, Kesseli D. Evaluating the feasibility of geother604 mal deep direct-use in the United States. Energy Convers Manage 2021;243(September):114335. 605 https://doi.org/10.1016/J.ENCONMAN.2021.114335. 

- 606 [4] Beckers KF, Lukawski MZ, Anderson BJ, Moore MC, Tester JW. Levelized costs of electric607 ity and direct-use heat from enhanced geothermal systems. J Renewable Sustainable Energy 608 2014;6(1):013141. https://doi.org/10.1063/1.4865575. 

32 

- 609 [5] Beckers KF, McCabe K. GEOPHIRES v2.0: updated geothermal techno-economic simulation 610 tool. Geothermal Energy 2019;7(1):128. https://doi.org/10.1186/s40517-019-0119-6. 

- 611 [6] Beckers KJ, Ferdinand H. Low-temperature geothermal energy: systems modeling, reservoir 612 simulation, and economic analysis. Cornell University; 2016. 

- 613 [7] Bruckner T, Bashmakov IA, Mulugetta Y, Chum H, De la Vega Navarro A, Edmonds J, ... 614 Zhang X. Energy systems. 2014. 

- 615 [8] Calvez JH, Le ME, Craven RC, Klem JD, Baihly LA, Bennett, and Keith Brook. Real-time 616 microseismic monitoring of hydraulic fracture treatment: a tool to improve completion and 617 reservoir management. All Days 2007. https://doi.org/10.2118/106159-MS. 

- 618 [9] Chan HL, Lee SK. Forecasting the demand for energy in China. Energy J 1996;17(1):1930. 619 https://doi.org/10.5547/issn0195-6574-ej-vol17-no1-2. 

- 620 [10] Ciriaco AE, Zarrouk SJ, Zakeri G, Mannington WI. Rened experimental design and response 621 surface methodology workow using proxy numerical models for probabilistic geothermal re622 source assessment. Geothermics 2020;88(November):101911. https://doi.org/10.1016/j.ge 623 othermics.2020.101911. 

- 624 [11] Dempsey D, Kelkar S, Davatzes N, Hickman S, Moos D. Numerical modeling of injection, stress 625 and permeability enhancement during shear stimulation at the desert peak enhanced geothermal 626 system. Int J Rock Mech Min Sci 2015;78(September):190206. https://doi.org/10.1016/j. 627 ijrmms.2015.06.003. 

- 628 [12] Genter A, Goerke X, Gra J-J, Cuenot N, Krall G, Schindler M, et al. Current status of the 629 EGS Soultz geothermal project (France). World Geothermal Congress 2010;2010:6. 

- 630 [13] Gringarten AC, Witherspoon PA, Ohnishi Y. Theory of heat extraction from fractured hot dry 631 rock. J Geophys Res 1975;80(8):11204. https://doi.org/10.1029/JB080i008p01120. 

- 632 [14] Hallgrimsdottir Elin, De Wit Joerie Frederik, Fridriksson Thrainn, Ingimundarson Ari, Axels633 son Gudni, Steingrimsson Benedikt, Ingason Ingi, Arnason Olafur. n.d. Preparing Feasibility 634 Studies for the Financing of Geothermal Projects : An Overview of Best Practices. Accessed 

33 

- 635 

- 636 

   - August 21, 2021. https://documents.worldbank.org/en/publication/documents-reports /documentdetail/733791626931398765/preparing-feasibility-studies-for-the-finan 

- 637 

   - cing-of-geothermal-projects-an-overview-of-best-practices. 

- 638 [15] Häring MO, Schanz U, Ladner F, Dyer BC. Characterisation of the basel 1 enhanced geother639 mal system. Geothermics 2008;37(5):46995. https://doi.org/10.1016/j.geothermics.2008 640 .06.002. 

- 640 

- 641 [16] Heidinger P, Dornstädter J, Fabritius A. HDR economic modelling: HDRec software. Geother642 mics 2006;35(56):683710. https://doi.org/10.1016/j.geothermics.2006.10.005. 

- 643 [17] Hogarth R, Holl HG. Lessons Learned from the habanero EGS project. Transactions - Geother644 mal Resources Council 2017;41:86577. 

- 645 [18] Huang Y, Zhang Y, Hu Z, Lei H, Wang C, Ma J. Economic analysis of heating for an en646 hanced geothermal system based on a simplied model in Yitong Basin, China. Energy Sci Eng 647 2019;7(6):265874. https://doi.org/10.1002/ese3.v7.610.1002/ese3.451. 

- 648 [19] Jaeger; John Conrad; Neville GW Cook; Robert Zimmerman. n.d. Fundamentals of Rock 649 Mechanics. Fourth edi. Accessed April 25, 2020. https://web-a-ebscohost-com.ezproxy.au 650 ckland.ac.nz/ehost/ebookviewer/ebook?sid=055eb3f8-3d84-4e48-a48b-98d15813ceb8% 651 40sdc-v-sessmgr03&vid=0&format=EB. 

- 652 [20] Jung, Reinhard. 2013. EGS Goodbye or Back to the Future. https://doi.org/10.5772/ 653 56458. 

- 653 

- 654 [21] Kelkar S, Lewis K, Karra S, Zyvoloski G, Rapaka S, Viswanathan H, et al. A simulator for 655 modeling coupled thermo-hydro-mechanical processes in subsurface geological media. Int J Rock 656 Mech Min Sci 2014;70:56980. https://doi.org/10.1016/j.ijrmms.2014.06.011. 

- 657 [22] King George E. 2010. SPE 133456 Thirty Years of Gas Shale Fracturing: What Have We 658 Learned? https://www.onepetro.org/download/conference-paper/SPE-133456-MS?id=c 659 onference-paper%2FSPE-133456-MS. 

- 660 [23] Kumar D, Ghassemi A, St B. Multistage Hydraulic Fracturing of EGS Wells with Application 661 to FORGE. In 44 Th Workshop on Geothermal Reservoir Engineering. 2019. 

34 

- 662 [24] Lei Z, Zhang Y, Yu Z, Hu Z, Li L, Zhang S, et al. Exploratory research into the enhanced 663 geothermal system power generation project: the Qiabuqia Geothermal eld, Northwest China. 664 Renewable Energy 2019;139:5270. https://doi.org/10.1016/j.renene.2019.01.088. 

- 665 [25] Lei Z, Zhang Y, Zhang S, Fu L, Hu Z, Yu Z, et al. Electricity generation from a three666 horizontal-well enhanced geothermal system in the Qiabuqia Geothermal Field, China: slick667 water fracturing treatments for dierent reservoir scenarios. Renewable Energy 2020;145:6583. 668 https://doi.org/10.1016/j.renene.2019.06.024. 

- 669 [26] Li T, Shiozawa S, McClure MW. Thermal breakthrough calculations to optimize design of a 670 multiple-stage enhanced geothermal system. Geothermics 2016;64(November):45565. https: 671 //doi.org/10.1016/J.GEOTHERMICS.2016.06.015. 

- 672 [27] Lingen, Paul Van, Jean Marc Daniel, Luca Cosentino, Mustafa Sengul. Single Medium Simu673 lation of Reservoirs with Conductive Faults and Fractures. In Proceedings of the Middle East 674 Oil Show, 54147. OnePetro. . 2001. 

- 675 [28] Lukawski MZ, Anderson BJ, Augustine C, Capuano LE, Beckers KF, Livesay B, et al. Cost 676 analysis of oil, gas, and geothermal well drilling. J Petrol Sci Eng 2014;118:114. https://do 677 i.org/10.1016/j.petrol.2014.03.012. 

- 678 [29] Mayerhofer MJ, Lolon EP, Cm Rightmire, Walser D, Cipolla CL, Warplnskl NR. What is 679 stimulated reservoir volume? SPE Prod Oper 2010;25(1):8998. https://doi.org/10.2118/ 680 119890-PA. 

- 681 [30] McCabe, Kevin, Koenraad J Beckers, Katherine R Young, Nathan J Blair. 2019. GeoVision 682 Analysis Supporting Task Force Report: Thermal Applications. Quantifying Technical, Eco683 nomic, and Market Potential of Geothermal District Heating Systems in the United States. 684 National Renewable Energy Lab.(NREL), Golden, CO (United States). 

- 685 [31] Mishra, Srikanta, Priya Ganesh, Jared Schuetter, Jincong He, Zhaoyang Jin, and Louis Durlof686 sky. 2015. SIMPLIFIED PREDICTIVE MODELS FOR CO2 SEQUESTRATION PERFOR687 MANCE ASSESSMENT. Pittsburgh, PA, and Morgantown, WV (United States). https: 688 //doi.org/10.2172/1238355. 

35 

- 689 [32] Montgomery Douglas C. 2017. Design and Analysis of Experiments. https://lccn.loc.gov/2 690 017002355. 

- 691 [33] Norbeck JH, McClure MW, Horne RN. Field observations at the fenton hill enhanced geothermal 692 system test site support mixed-mechanism stimulation. Geothermics 2018;74(July):13549. ht 693 tps://doi.org/10.1016/J.GEOTHERMICS.2018.03.003. 

- 694 [34] Olasolo P, Juárez MC, Olasolo J, Morales MP, Valdani D. Economic analysis of enhanced 695 geothermal systems (EGS). A review of software packages for estimating and simulating costs. 696 Appl Therm Eng. 2016;104:64758. https://doi.org/10.1016/j.applthermaleng.2016.05 697 .073. 

- 698 [35] Samin MY, Faramarzi A, Jeerson I, Harireche O. A hybrid optimisation approach to improve 699 long-term performance of enhanced geothermal system (EGS) reservoirs. Renewable Energy 700 2019;134(April):37989. https://doi.org/10.1016/j.renene.2018.11.045. 

- 701 [36] Sanyal Subir K, James W Morrow, Steven J Butler, Ann Robertson-Tait. 2007. Cost of Electric702 ity from Enhanced Geothermal Systems. In Thirty-Second Workshop on Geothermal Reservoir 703 Engineering, 11. https://pangaea.stanford.edu/ERE/pdf/IGAstandard/SGW/2007/sanyal1 704 .pdf. 

- 705 [37] Shan, Kun, Yanjun Zhang, Yanhao Zheng, Liangzhen Li, Hao Deng. Risk Assessment of Frac706 turing Induced. 2020. 

- 707 [38] Shiozawa, Sogo, Mark Mcclure. 2014. EGS Designs with Horizontal Wells, Multiple Stages, and 708 Proppant. PROCEEDINGS, Thirty-Ninth Workshop on Geothermal Reservoir Engineering. 709 Accessed January 14, 2019. https://pangea.stanford.edu/ERE/pdf/IGAstandard/SGW/2014 710 /Shiozawa.pdf. 

- 711 [39] Song X, Shi Y, Li G, Yang R, Wang G, Zheng R, et al. Numerical simulation of heat extraction 712 performance in enhanced geothermal system with multilateral wells. Appl Energy 2018;218:325 713 37. https://doi.org/10.1016/j.apenergy.2018.02.172. 

- 714 [40] Sun Zhi-Xue, Xu Zhang, Yi Xu, Jun Yao, Hao-Xuan Wang, Shuhuan Lv, Zhi-Lei Sun, Yong 715 Huang, Ming-Yu Cai, Xiaoxue Huang. 2017. Numerical simulation of the heat extraction in 

36 

- 716 EGS with thermal-hydraulic-mechanical coupling method based on discrete fractures model. 717 https://doi.org/10.1016/j.energy.2016.10.046. 

- 718 [41] Tester J. 2006. The Future of Geothermal Energy in the 21 Century Impact of Enhanced 719 Geothermal Systems (EGS) on the United States St. http://www1.eere.energy.gov/geother 720 mal/egs_technology.html. 

- 721 [42] Wang G, Song X, Shi Y, Zheng R, Li J, Li Z. Production performance of a novel open loop 722 geothermal system in a horizontal well. Energy Convers Manage 2020;206:112478. https://do 723 i.org/10.1016/j.enconman.2020.112478. 

- 724 [43] White CD, Willis BJ, Narayanan K, Dutton SP. Identifying and estimating signicant geologic 725 parameters with experimental design. SPE J 2001;6(3):31124. https://doi.org/10.2118/74 726 140-PA. 

- 727 [44] Willis BJ, White CD. Quantitative outcrop data for ow simulation. J Sediment Res 728 2000;70(4):788802. https://doi.org/10.1306/2DC40938-0E47-11D7-8643000102C1865D. 

- 729 [45] Wu F, Yan Y, Yin C. Real-time microseismic monitoring technology for hydraulic fracturing in 730 shale gas reservoirs: a case study from the southern Sichuan basin. Nat Gas Ind B 2017;4(1):68 731 71. https://doi.org/10.1016/J.NGIB.2017.07.010. 

- 732 [46] Xu T, Yuan Y, Jia X, Lei Y, Li S, Feng B, et al. Prospects of power generation from an 733 enhanced geothermal system by water circulation through two horizontal wells: a case study in 734 the Gonghe Basin, Qinghai Province, China. Energy 2018;148:196207. https://doi.org/10 735 .1016/j.energy.2018.01.135. 

- 736 [47] Yoon KS, Jeon JS, Hong HK, Kim HG, Hakan A, Park JH, Yoon WS. Deep Drilling Experience 737 for Pohang Enhanced Geothermal Project in Korea. In Proceedings of the World Geothermal 738 Congress, Melbourne, Australia. Vol. 19. 2015. 

- 739 [48] Yu P, Dempsey D, Archer R. A three-dimensional coupled thermo-hydro-mechanical numerical 740 model with partially bridging multi-stage contact fractures in horizontal-well enhanced geother741 mal system. Int J Rock Mech Min Sci 2021;143(July):104787. https://doi.org/10.1016/J. 742 IJRMMS.2021.104787. 

37 

- 743 [49] Zabalza-Mezghani I, Mezghani M, Blanc G. Constraining reservoir facies models to dynamic 

- 744 data - impact of spatial distribution uncertainty on production forecasts. Society of Petroleum 745 Engineers (SPE) 2001. https://doi.org/10.2118/71335-ms. 

- 746 [50] Zakhour, Nancy, Mark Sunwall, Raul Benavidez, Leah Hogarth, and Jian Xu. 2015. Real-Time 747 Use of Microseismic Monitoring for Horizontal Completion Optimization Across a Major Fault 748 in the Eagle Ford Formation. Society of Petroleum Engineers - SPE Hydraulic Fracturing 749 Technology Conference 2015, February, 38093. https://doi.org/10.2118/173353-MS. 

- 750 [51] Zhang C, Jiang G, Jia X, Li S, Zhang S, Hu D, et al. Parametric study of the production 751 performance of an enhanced geothermal system: a case study at the Qiabuqia Geothermal 752 Area, Northeast Tibetan Plateau. Renewable Energy 2019;132:95978. https://doi.org/10.1 753 016/j.renene.2018.08.061. 

- 754 [52] Zimmerman RW, Bodvarsson GS. Hydraulic conductivity of rock fractures. Transp Porous 755 Media 1996;23(1):130. https://doi.org/10.1007/BF00145263. 

- 756 [53] ZYvoLosKI GA, RoBINSON BA, DASH Z, TREAsE LL. Models and Methods Summary for 757 TheFEHM Application. 1995. https://fehm.lanl.gov/pdfs/fehm_mms.pdf. 

- 758 [54] Zyvoloski GA, Robinson BA, Dash ZV, Trease LL. User`s Manual for the FEHM Application 759 A Finite-Element Heat- and Mass-Transfer Code. 1997. Los Alamos, NM. https://doi.org/ 760 10.2172/14902. 

- 761 [55] Wang Heating Engineering. 1993. Heating Engineering. China Construction Industry Press 762 (Engl. Ed.). 

- 763 [56] CJJ34-2010 Standard database. Code for design of urban heating pipe network [with clause de764 scription] 2010 http://www.jianbiaoku.com/webarbs/book/285/315608.shtml. (Engl. Ed.). 

- 765 [57] Hancheng Y, Yuan S, Xianghua Y. Discussion on solar heating technology in Xining area. J 766 Qinghai Univ: Nat Sci Ed 2008;26(5):8993. 

38 

