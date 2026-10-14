# Impacts of reservoir permeability anisotropy on hydrogen migration and recovery efficiency in geological storage

**Authors:** Jinjiang Liu, David Dempsey, Andy Nicol, Matt Parker, Karan Titus  
**Published in:** Fuel (2026)  
**DOI (version of record):** https://doi.org/10.1016/j.fuel.2025.137596  
**This copy:** Published version. Text extracted from the PDF at https://ddempsey.github.io/papers/2026-liu-impacts-reservoir-permeability-anisotropy-hydrogen/liu2026-impacts-reservoir-permeability.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** Published version, reproduced under the CC BY 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1016/j.fuel.2025.137596  
**Licence:** CC BY 4.0 http://creativecommons.org/licenses/by/4.0/  

---
Fuel 408 (2026) 137596 

Contents lists available at ScienceDirect 

# Fuel 

journal homepage: www.elsevier.com/locate/fuel 

#### Full Length Article 

## Impacts of reservoir permeability anisotropy on hydrogen migration and recovery efficiency in geological storage<sup>☆</sup> 

### Jinjiang Liu<sup>a,*</sup> , David Dempsey<sup>a</sup> , Andy Nicol<sup>b</sup> , Matt Parker<sup>b</sup> , Karan Titus<sup>a</sup> 

a _Department of Civil and Natural Resources Engineering, University of Canterbury, Christchurch 8041, New Zealand_ 

b _School of Earth and Environment, University of Canterbury, Christchurch 8041, New Zealand_ 

A R T I C L E I N F O _Keywords:_ Underground hydrogen storage OpenGoSim Permeability anisotropy Hydrogen recovery efficiency 

###### A B S T R A C T 

Underground hydrogen storage (UHS) is a promising solution for large-scale, long-term energy storage by converting surplus renewable electricity into hydrogen for later use. Hydrogen recovery efficiency is an essential indicator for evaluating the performance of UHS. However, the impacts of permeability anisotropy, including horizontal permeability anisotropy ( _kh,max/kh,min_ ) and horizontal-to-vertical permeability anisotropy ( _kh/kv_ ), on hydrogen recovery efficiency have not been thoroughly investigated. This study addresses this gap with numerical simulations that couple a simplified box model and a field-realistic model based on the Ahuroa gas storage site. Our results show that _kh,max/kh,min_ affects hydrogen recovery efficiency, and this effect becomes more pronounced at higher permeability. The difference in hydrogen recovery efficiency between _kh,max/kh,min_ =1 and 10 expands from 1.3 percentage points at 100 mD to 4.3 percentage points at 200 mD. Increasing _kh/kv_ can reduce the effect of _kh,max/kh,min_ . In reservoirs with horizontal anisotropy, orienting a horizontal well along the minimum rather than the maximum permeability direction can reduce hydrogen recovery efficiency by up to 8 percentage points (from 78 % to 70 %), with all other conditions held constant. These findings from the box model were subsequently validated through simulations of a realistic geological site (Ahuroa natural gas storage site). This study indicates that permeability anisotropy is an important consideration in UHS site assessment. Ignoring it can result in errors in hydrogen recovery efficiency evaluation, leading to inaccurate predictions of recoverable hydrogen volumes. 

##### **1. Introduction** 

Renewable energy sources, particularly wind and solar power, are playing an increasingly vital role in the global energy landscape [1,2]. However, their inherent variability often results in temporal mismatch between electricity generation and demand[3]. When electricity generation exceeds demand, the surplus energy needs to be stored for later use. Conversely, when demand exceeds generation, additional electricity from other sources is typically required to bridge the gap. 

Wind and solar, as the fastest-growing renewable energy technologies, exhibit power output variability across a wide range of timescales, from minutes to seasons [4–6]. Short-term variability (ranging from minutes to days) can generally be managed using short-term storage systems, such as lithium-ion batteries or pressurized gas tanks. However, managing long-term (monthly to seasonal) variability requires storage 

##### solutions with substantially larger capacities [7]. 

Underground hydrogen storage (UHS) has emerged as a promising solution for scalable long-term energy storage [8,9]. During periods of high renewable generation, surplus electricity can be converted into hydrogen and stored in the UHS site [10]. When electricity generation falls short of demand, the stored hydrogen can be retrieved and reconverted into electricity [11]. Beyond electricity balancing, stored hydrogen can also serve as a key feedstock for various industrial processes, including the production of methanol, ammonia, and synthetic fuels [10,12]. 

Hydrogen has a low volumetric energy density, approximately onethird that of methane under standard conditions [13]. Consequently, UHS requires roughly three times the reservoir volume of conventional underground gas storage (UGS) to store the same amount of energy. Given this high-volume requirement, depleted gas reservoirs are 

> ☆ This article is part of a special issue entitled: ‘Subsurface Gas Storage’ published in Fuel. 

> * Corresponding author. 

- _E-mail address:_ jinjiang.liu@pg.canterbury.ac.nz (J. Liu). 

https://doi.org/10.1016/j.fuel.2025.137596 

Received 25 August 2025; Received in revised form 26 October 2025; Accepted 16 November 2025 Available online 24 November 2025 

0016-2361/© 2025 The Author(s). Published by Elsevier Ltd. This is an open access article under the CC BY license ( http://creativecommons.org/licenses/by/4.0/ ). 

_Fuel 408 (2026) 137596_ 

_J. Liu et al.                                                                                                                                                                                                                                       Fuel_ 

considered promising candidates for seasonal-scale hydrogen storage due to their large pore space, proven seal integrity, and pre-existing infrastructure [14]. 

Numerous studies have investigated the feasibility of storing hydrogen in depleted reservoirs [14–17]. Sarı and Çiftçi [18] assessed the feasibility of hydrogen storage in an actual depleted gas field using numerical simulations. The simulation results indicate that depleted gas reservoirs can effectively maintain hydrogen purity while offering substantial storage capacity. Okoroafor et al. [19] evaluated several depleted fields in California based on multiple technical and geological criteria. Their analysis suggests that the depleted fields in California could provide sufficient capacity to store the hydrogen generated from curtailed renewable energy sources. 

Because depleted reservoirs have been exploited over extended periods, their pressures are typically lower than original conditions. To maintain a certain withdrawal rate, cushion gas is generally injected in advance to support reservoir pressure [20,21]. Due to the high cost of hydrogen, economically viable alternatives such as carbon dioxide, nitrogen, or methane are commonly used as cushion gases. During the withdrawal stage, withdrawn gas is a mixture of hydrogen and cushion gas, resulting in reduced hydrogen purity [22]. Several studies have examined how the selection of cushion gas influence hydrogen recovery efficiency [20,22,23]. Kanaani et al. [22] investigated the influence of cushion gas type (carbon dioxide, nitrogen, and methane) on hydrogen recovery efficiency in a depleted oil reservoir. Their results indicate that hydrogen recovery efficiency decreases with increasing molecular weight of the cushion gas, primarily due to gravitational segregation. Among the examined cushion gases, methane achieved the highest hydrogen recovery efficiency, owing to its low density that limits gravitational separation from hydrogen during withdrawal. Similar findings were reported by Saeed & Jadhawar [20]. 

Permeability is a measure of the ability of a porous medium to transmit fluids under a pressure gradient [24,25]. It is a tensorial property that characterizes the ease with which fluids can flow in different spatial directions [26]. The directional dependence of permeability is referred to as permeability anisotropy [27]. Permeability anisotropy arises from various geological and structural factors, including macro-stratification, micro-stratification, and directional fracture, resulting in variations in permeability across different spatial directions [28–30]. Clavaud et al. [27] investigated permeability anisotropy using 18 rock samples representing different kinds of lithologies. In sandstones, anisotropy was found to be associated with bedding structures, whereas in volcanic rocks, it was primarily influenced by vesicle alignment and fracture orientation. In contrast, no consistent relationship was observed in limestones, likely due to the dominance of isolated porosity that does not contribute to effective hydraulic conductivity. 

Permeability anisotropy in a reservoir system is commonly classified into two categories: (1) horizontal permeability anisotropy ratio ( _kh,max/kh,min_ ), and (2) horizontal-to-vertical permeability anisotropy ratio ( _kh/kv_ ) [31–33]. The ratio _kh,max/kh,min_ refers to the variability of permeability across the lateral extent of a reservoir. In conventional reservoir systems, the horizontal anisotropy ratio typically remains below 50 [34]. However, in naturally fractured reservoirs, this ratio could exceed 100 [35–37]. The ratio _kh/kv_ is defined as the ratio of horizontal permeability to vertical permeability and is commonly used to quantify vertical anisotropy in porous media. Reported values of _kh/kv_ typically range from 1 to 100 [38–41]. 

Permeability anisotropy affects the spatial distribution of injected fluid. Henderson and Pena [42] simulated viscous fingering in water–oil flow through anisotropic reservoirs. Their research revealed that in isotropic reservoirs, viscous fingers exhibit a tendency to elongate along preferential directions. In contrast, anisotropic reservoirs demonstrated a stabilizing effect on viscous fingering, with permeability anisotropy inhibiting the rapid development of immiscible viscous fingering and promoting more stable displacement patterns that benefit oil recovery. 

Yu et al. [43] study the impact of permeability anisotropy ratio on carbon dioxide distribution in carbon capture and storage project. Simulation results indicate that lower _kh/kv_ result in higher migration distance in vertical and horizontal directions. Because under lower _kh/kv_ , carbon dioxide reached the caprock earlier and then flow laterally beneath the caprock. 

The performance of UHS is also influenced by the design of well configuration [14,44,45]. Sun et al. [45] proposed an approach called gravity-assisted-storage-extraction (GASE) protocol to increase hydrogen recovery efficiency during UHS. This method leverages the buoyant nature of hydrogen. Hydrogen is injected through a vertical well at the bottom of the reservoir and withdrawn from horizontal well at the top layer. Compared to the conventional single-well injection–production scheme, new method improves hydrogen recovery efficiency by 20–30 %. Ramsari et al. [21] analysed the influence of well configurations on hydrogen recovery efficiency and hydrogen purity in a depleted reservoir. Four types of well configurations were investigated. Due to the low molecular weight of hydrogen, the highest recovery efficiency was achieved when both injection and production were conducted through horizontal wells. 

In previous studies on UHS, the impact of permeability anisotropy on hydrogen recovery efficiency has been examined, but most of these studies only focus on _kh/kv_ [46,47]. However, _kh,max/kh,min_ is also common in many geological formations [27,48]. This form of anisotropy affects gas flow ability in different horizontal directions and can consequently influence hydrogen recovery efficiency. In addition, the influence of factors such as reservoir thickness, average permeability, and well configuration on hydrogen recovery efficiency may vary depending on the degree of permeability anisotropy. As such, neglecting anisotropic permeability in site evaluations may lead to inaccurate assessments of UHS performance and suitability. 

To address this research gap, a simplified box model was developed to investigate the effect of permeability anisotropy on the performance of UHS. Furthermore, the coupled impacts between permeability anisotropy and reservoir thickness, average permeability, and well configuration were systematically analysed to provide a more comprehensive understanding of their influence on UHS performance. Subsequently, the findings were validated using a field-scale model based on the Ahuroa gas storage facility. The insights obtained from this study can provide guidance for hydrogen storage site evaluation, leading to more accurate assessment procedures. 

##### **2. Methods** 

##### _2.1. Numerical simulation_ 

The governing mass conservation equations used in the model are [26]: 

Where ∅ is porosity, dimensionless; _np_ is the number of phases; j is an index denoting the phase, _j_ = 1⋯ _np_ ; _nc_ is the number of components; _i_ is an index denoting the component, _i_ = 1⋯ _nc_ ; _xi,j_ is the mole fraction of component _i_ in phase _j_ , dimensionless; _S_ is the saturation of phase _j_ , dimensionless; _ηj_ is the molar density of phase _j,_ mol _/_ m<sup>3</sup> ; **uj** is the flow velocity of phase _j_ , m _/_ s; _Dj_ is the diffusion coefficient of phase _j_ , m<sup>2</sup> _/_ s; _Qi_ is the source/sink term of component i, mol _/_ (m<sup>3</sup> • s). 

The velocity of phase _j_ in the porous media is given by Darcy’s equation: 

Where _k_ is the absolute permeability, m<sup>2</sup> ; _krj_ is the relative 

2 

_Fuel 408 (2026) 137596_ 

permeability of phase _j_ ; _μj_ is viscosity, Pa _._ s; _Pj_ is fluid pressure of phase _j_ , MPa; _ρj_ is the mass density of phase _j,_ kg _/_ m<sup>3</sup> ; _g_ is the gravitational constant, m _/_ s<sup>2</sup> ; ̂ **z** is a unit vector in the direction of gravity. 

For gas–liquid diffusion at the gas–water interface, the diffusion coefficient is 2 × 10<sup>−9</sup> m<sup>2</sup> _/_ s. For gas–gas diffusion in the gas phase, the diffusion coefficient is 2 × 10<sup>−5</sup> m<sup>2</sup> _/_ s. 

The density and viscosity of the gas mixture are given as follows: 

storage performance, we developed a box model representing a depleted gas reservoir. The following assumptions were made in the simulations. The assumptions include: 

- (1) Solubility of hydrogen and cushion gas in brine were neglected. 

- (2) No chemical or biochemical reactions was considered in the simulation. 

- (3) Capillary pressure is ignored. 

Where _X_ is mole fraction of different gas components, and a, b are the two gas components (natural gas and hydrogen). The density and enthalpy of hydrogen and natural gas are calculated using the GERG 2008 equation of state [49]. The viscosity of hydrogen and natural gas are calculated using the Lorenhz-Bray-Clay method [50] and a residual entropy method respectively [51]. 

Gas and water relative permeability curves were calculated based on the modified Corey relative permeability model [52]. 

Where _krw_ is the relative permeability of water; _krw,max_ is the maximum relative permeability for water; _Sw_ is water saturation; _Swr_ is residual water saturation; _krg_ is the relative permeability of gas; _krg,max_ is the maximum relative permeability for gas; _Sg_ is gas saturation; _Sgr_ is residual gas saturation; _nw_ is water exponent; _ng_ is gas exponent. 

Our model has been implemented in the reservoir simulator OpenGoSim. OpenGoSim is an open-source reservoir simulator for multiphase, multicomponent flow and transport in porous material, built on the PFLOTRAN framework [53–55]. It enables large-scale parallel computing. Sheikhi & Flynn (2024) investigated hydrogen migration and mixing in a depleted gas reservoir with a low permeability interbed [53]. Compositional simulations were conducted using OpenGoSim and CMG, and the two simulators produced closely matching results. More detailed information and validation benchmarks are provided in [54,55]. 

##### _2.2. Box model_ 

To evaluate the impact of permeability anisotropy on hydrogen 

The model represents a reservoir with a top depth of 2100 m. The model is bounded by no-flow conditions on all six faces. The model dimensions are 1000 × 1000 × 50m<sup>3</sup> (grid block size: 20 _m_ × 20 _m_ × 2 _m_ ). A detailed sensitivity analysis of grid sizes is provided in Appendix A. To enable detailed analysis, the reservoir model was divided vertically into five equal layers (Layer 1 to Layer 5 from top to bottom), each 10 m thick and with identical properties (Fig. 1). 

To facilitate subsequent comparison and analysis, a baseline model was established. In the baseline model, the reservoir permeability and porosity are set to 100 mD and 15 %, respectively. Permeability is assumed to be isotropic, with identical values in all three directions ( _kh/kv_ = _kh,max/kh,min_ = 1). The initial reservoir temperature and pressure were set to 70<sup>◦</sup> C and 16 MPa. Only a single well located at the centre of the reservoir is considered. It is perforated across all layers. Pure hydrogen is used in the simulation, while the natural gas in the reservoir is composed of 94.0 % methane, 4.5 % nitrogen, and 1.5 % carbon dioxide. 

The relative permeability curves shown in Fig. 2 were calculated using the Brooks-Corey functions, with the corresponding parameter values listed in Table 1. Additional parameters used in the simulation were also detailed in Table 1. 

##### _2.3. Simulation setup_ 

The UHS simulation consists of two stages, including cushion gas injection stage and cyclic operation stage. In the cushion gas injection stage, cushion gas is injected at the rate of 5 × 10<sup>5</sup> Sm<sup>3</sup> _/_ day for 360 days. Cushion gas is natural gas, with the same compositions of initial natural gas in the reservoir. After injecting cushion gas, 10 injectionwithdrawal cycles were implemented. Each cycle includes 90 days injection stage and 90 days withdrawal stage. Injection and withdrawal rates are 1 × 10<sup>6</sup> Sm<sup>3</sup> _/_ day (Fig. 3). 

During the injection-withdrawal cycles, bottomhole pressure (BHP) was maintained within the range of 16 to 24 MPa. The minimum bottomhole pressure is to ensure gas deliverability and the maximum bottomhole pressure is to avoid induced seismicity. The injection rate was 

**Fig. 1.** Schematic diagram of the box model. The black line represents the interface between layers, and PERMX indicates permeability in x-direction. 

3 

_Fuel 408 (2026) 137596_ 

_J. Liu et al.                                                                                                                                                                                                                                       Fuel_ 

**Fig. 2.** Relative permeability curves used in the reservoir simulation. Red line represents gas relative permeability curve, blue line represents water relative permeability curve (Chai et al. [54]). 

**Table 1** 

Parameters input in the baseline model. 

|Parameters|Unit|Value|
|---|---|---|
|Reservoir permeability|mD|100|
|Reservoir porosity|Dimensionless|0.15|
|Initial pressure|MPa|16|
|Initial temperature|◦C|70|
|Gas-gas diffusion|m<sup>2</sup>/s|2×<br>10<sup>−5</sup>|
|Gas-liquid diffusion|m<sup>2</sup>/s|10<sup>-9</sup>|
|Residual water saturation|Dimensionless|0.2|
|Residual gas saturation<br>i|Dimensionless|0.05|
|Water exponent for modified Brooks-Corey functions<br>i|Dimensionless|2.5|
|Gas exponent for modified Brooks-Corey functions<br>i|Dimensionless|3|
|Maximum relative permeability for water in modified|Dimensionless|1|
|Brooks-Corey functions<br>i|||
|Maximum relative permeability for gas in modified<br>Brooks-Corey functions|Dimensionless|1|

average permeability, defined as √ _kh,max_ • _kh,min_ , constant as in the baseline model. The vertical permeability remains unchanged and is equal to that in the baseline model. In the simulation designed to assess the impact of _kh/kv_ , the vertical permeability _kv_ is reduced based on _kh/kv_ , while the horizontal permeabilities in both the x- and y-directions remain equal to those in the baseline model (Table. 2). 

In addition to investigating the impact of anisotropy, this study also investigated its coupled effects with formation thickness and with average permeability to quantify their respective influences on hydrogen recovery efficiency. Furthermore, six different well configurations were analysed across reservoirs with varying degrees of anisotropy to assess the impact of engineering design on recovery performance. 

##### **3. Simulation results** 

##### _3.1. Impact of horizontal-to-vertical permeability anisotropy ratio_ 

reduced when bottomhole pressure approached the maximum allowable pressure (24 MPa), while the production rate was adjusted downward during the withdrawal as bottomhole pressure approached the minimum allowable pressure (16 MPa). 

To investigate the impact of permeability anisotropy on UHS performance, a baseline model (isotropic case) and several comparison models (anisotropic cases) were developed. The study primarily focused on two key aspects: _kh/kv_ and _kh,max/kh,min_ . In the simulation conducted to investigate the impact of _kh,max/kh,min_ , the maximum horizontal permeability ( _kh,max_ ) and minimum horizontal permeability ( _kh,min_ ) are assigned along the x- and y- directions. At the same time, maintain the 

To investigate the impact of kh _/_ kv on hydrogen recovery efficiency, 

**Table 2** 

Summary of anisotropy factors used in the simulations. 

|Case|_kh,max/kh,min_(−)|_kh/kv_(−)|_kh,max_(mD)|_kh,min_(mD)|_kv_(mD)|
|---|---|---|---|---|---|
|1 (Baseline)|1|1|100|100|100|
|2|1|5|100|100|20|
|3|1|10|100|100|10|
|4|1|100|100|100|1|
|5|5|1|223.6|44.7|100|
|6|10|1|316.2|31.6|100|

**Fig. 3.** Injection and withdrawal rates at different stages in the baseline model. The red line represents the cushion gas injection rate, the blue line represents the hydrogen injection rate, and the green line represents the total gas withdrawal rate. 

4 

_Fuel 408 (2026) 137596_ 

_J. Liu et al._ 

in addition to the isotropic baseline model (Case 1), three anisotropic cases were developed with kh _/_ kv ratios of 5, 10, and 100 (Cases 2, 3, and 4). All other parameters were kept consistent with those in the isotropic baseline model to isolate the influence of kh _/_ kv. 

Fig. 4 presents vertical cross-sectional views of hydrogen mole fraction in the gas phase under varying kh _/_ kv. Fig. 4 a–d illustrate the hydrogen distribution at the end of the first injection stage, with Kh _/_ Kv ranging from 1 (isotropic) to 100. Whenkh _/_ kv = 1, the hydrogen plume exhibits a distinct cone-shaped geometry. The extent of the hydrogen front decreases from the top to the bottom layer. As the anisotropy ratio increases to 100, the hydrogen front becomes more uniform, meaning hydrogen in each layer flows away from the wellbore at a similar rate. Fig. 4 e–h illustrates the vertical cross-sectional views of hydrogen distribution at the end of the simulations under varying kh _/_ kv. Although the hydrogen plumes exhibit cone-shaped geometry in all four cases, clear differences are observed with increasing Kh _/_ Kv. With the increase of kh _/_ kv, the upward migration of hydrogen is increasingly restricted due to lower vertical permeability. This results in more hydrogen retained in the lower layers, while the lateral extent and hydrogen concentration in the top layers are reduced. 

With the increasing kh _/_ kv, hydrogen purity in each layer shows different trends (Fig. 5). For the top layer (Layer 1), with the increasing kh _/_ kv, hydrogen purity decreases. But after three cycles, the hydrogen purity difference is not very pronounced. For the lower layers (Layer 3, 4, and 5), hydrogen purity increases with the increase of kh _/_ kv. Hydrogen purity in Layer 2 does not change much. At the same time, because of the different variation trends in each layer, the difference in hydrogen purity among layers decreases as kh _/_ kv increases. As shown in Fig. 5, the curves of hydrogen purity in different layers become closer with the increasing kh _/_ kv, indicating a more uniform vertical distribution of hydrogen. This is mainly because a higher kh _/_ kv reduces the influence of gravity override. 

As the horizontal permeability and pressure distribution are identical across all layers, compared with hydrogen purity, there is less variation in the total gas withdrawal rates among them (see Fig. B1). When kh _/_ kv 

= 1, although the hydrogen concentration in the top layer is high, the total gas withdrawal rate from this layer is constrained, and thus the high concentration does not result in a higher hydrogen withdrawal rate. In contrast, the lower layers contain less hydrogen, leading to a reduced hydrogen withdrawal rate under similar total gas withdrawal rate. When kh _/_ kv increases to 100, the hydrogen concentration in the top layer slightly decreases but remains high. Since the total gas withdrawal rate in this layer remains nearly unchanged, the hydrogen withdrawal rate is only marginally affected. However, in the lower layers, the increased hydrogen concentration enhances the hydrogen withdrawal rate, thereby improving the overall hydrogen recovery efficiency. Influence of kh _/_ kv on hydrogen recovery efficiency at the end of simulation was shown in Fig. 6. 

##### _3.2. Impact of horizontal permeability anisotropy ratio_ 

To investigate the impact of _kh,max/kh,min_ on hydrogen recovery efficiency, in addition to the isotropic baseline model (Case 1), three anisotropic cases were developed with _kh,max/kh,min_ ratios of 5 and 10 (Cases 5 and 6). 

Fig. 7 presents the top and side views of the hydrogen mole fraction distribution in the gas phase under different horizontal permeability anisotropy ratios ( _kh,max/kh,min_ ). In the baseline model ( _kh,max/kh,min_ = 1), the hydrogen distribution on the horizontal plane exhibits a circular pattern, indicating that hydrogen migrates uniformly in all directions around the wellbore. As the anisotropy ratio increases from 1 to 10, the distribution gradually transitions from circular to elliptical, with hydrogen predominantly migrating along the direction of maximum horizontal permeability. These results indicate the influence of permeability anisotropy on the spatial distribution of hydrogen. 

Fig. 8 illustrates hydrogen purity in each layer under varying _kh,max/kh,min_ . With increasing _kh,max/kh,min_ , hydrogen purity in the top layer remains almost unchanged, while it increases in the other layers. The change trend of hydrogen purity in each layer is similar to those in the kh _/_ kv cases. As shown in Fig. 9, with increasing cycle numbers, the 

**Fig. 4.** Spatial distribution of hydrogen mole fraction in the gas phase: (a-d) End of first injection stage with kh _/_ kv of 1, 5, 10, and 100, (e-h) End of simulation period with corresponding kh _/_ kv of 1, 5, 10, and 100. Colour bar indicates the mole fraction of hydrogen in the gas phase. 

5 

_Fuel 408 (2026) 137596_ 

_J. Liu et al._ 

**Fig. 5.** Hydrogen purity across reservoir layers under varying horizontal-to-vertical permeability anisotropy ratios (kh _/_ kv): (a) = 1, (b) = 5, (c) = 10, (d) = 100. Colors represent different layers: blue for Layer 1, red for Layer 2, green for Layer 3, yellow for Layer 4, and black for Layer 5. 

**Fig. 6.** Hydrogen recovery efficiency under varying horizontal-to-vertical permeability anisotropy ratios (kh _/_ kv): 1, 5, 10, and 100, represented by green, red, blue, and black lines. 

hydrogen recovery efficiency in anisotropic reservoirs gradually surpasses that in isotropic reservoirs. Compared with isotropic model, the final hydrogen recovery increases by 0.5 % and 1.3 % when _kh,max/kh,min_ = 5 and 10 (Fig. 9). 

##### _3.3. Impact of geologic characteristics_ 

In the geological assessment for UHS site, reservoir thickness and average permeability are two important factors [56,57]. In this section, we investigate how permeability anisotropy affects the extent to which reservoir thickness and average permeability influence hydrogen recovery efficiency. 

To study the impact of reservoir thickness, two comparison models were constructed with thickness of 40 m and 60 m. To minimize the 

impact of gas flow rate, both injection and withdrawal rates were set to 2 × 10<sup>4</sup> Sm<sup>3</sup> /day/m for the comparison models, corresponding to total rates of 8 × 10<sup>5</sup> and 12 × 10<sup>5</sup> Sm<sup>3</sup> /day. This ensures that the injection and withdrawal rates remain consistent per unit thickness across all models. 

Fig. 10 illustrates hydrogen mole fraction in the gas phase at the end of simulation in the isotropy model ( _kh,max/kh,min_ = 1 and kh _/_ kv = 1). A notable difference is observed in the extent of the low-concentration zone: in the 60 m-thick reservoir, approximately 10 m at the bottom exhibits a hydrogen mole fraction below 10 %, whereas in the 40 m- thick reservoirs, this zone is limited to only 2 m. This indicates that in isotropic reservoirs, increasing thickness leads to a larger under-swept zone at the bottom, which contributes to the reduction in overall hydrogen recovery. 

6 

_Fuel 408 (2026) 137596_ 

_J. Liu et al._ 

**Fig. 7.** Hydrogen mole fraction distributions in the gas phase under varying horizontal permeability anisotropy ratios ( _kh,max/kh,min_ ): (a-c) = 1, (d-f) = 5, (g-i) = 10. (a), (d), and (g) show top-view distributions, where the left–right direction corresponds to the direction of _kh,max_ . (b), (e), and (h) show vertical sections along the direction of _kh,max_ (X-axis), while (c), (f), and (i) show vertical sections along the direction of _kh,min_ (Y-axis). 

Similar trend was found in the anisotropy models. Fig. 11 shows hydrogen recovery efficiency under different permeability anisotropy. Hydrogen recovery efficiency decreases with increasing reservoir thickness under fixed values of _kh,max/kh,min_ and kh _/_ kv. However, the recovery difference caused by thickness becomes less pronounced as permeability anisotropy increases. When _kh,max/kh,min_ increases from 1 to 10, the hydrogen recovery efficiency difference between the 40 m and 60 m reservoirs reduces from 5 % to 3 %. Similarly, increasing kh _/_ kv from 1 to 100 narrows this gap from 5 % to 1 %. 

To investigate the influence of reservoir average permeability (kave), we extended our analysis by creating two additional cases, with average permeabilities of 50 and 200 mD. For each case, we considered different _kh,max/kh,min_ and kh _/_ kv ratios while keeping the average permeability constant. The simulation results were depicted in Fig. 12. 

Under constant kh _/_ kv, with increasing average permeability, the hydrogen recovery efficiency for the strongly anisotropic case (high _kh,max/kh,min_ ) progressively surpasses that for the weakly anisotropic case. Whenkh _/_ kv = 1 andkave = 50 mD, hydrogen recovery efficiency at _kh,max/kh,min_ = 1, 5, and 10 are 81 %, 81 %, 80 %. When kave increase to 200 mD, these efficiencies decrease to 64 %, 66 %, and 68 %. For constant _kh,max/kh,min_ and kave, hydrogen recovery efficiency increases with increasing kh _/_ kv, and the magnitude of this increase is amplified as kave rises. When _kh,max/kh,min_ =1 andkave = 50 mD, hydrogen recovery efficiency at kh _/_ kv = 1, 10, and 100 are 81 %, 82 %, 85 %. When kave 

increase to 200 mD, these efficiencies decrease to 64 %, 67 %, and 77 %. 

_3.4. Impact of well configuration_ 

Well configuration plays a critical role in the design of UHS, as it influences gas migration pathways and recovery efficiency. In this section, we evaluate the performance of six representative well configurations under different types of permeability anisotropy (Fig. 13). 

The fully perforated injection-withdrawal vertical well (FP-V) is defined as a single vertical well perforated along the entire reservoir thickness, enabling both injection and production through the same wellbore. The upper-zone injection-withdrawal vertical well (UP-V) refers to a vertical well perforated only in the upper part of the reservoir, allowing injection and withdrawal operations limited to higherpermeability strata. The injection–withdrawal horizontal wells aligned with maximum and minimum permeability (H-MAX and H-MIN) refer to single horizontal wells completed in the upper zone of the reservoir, performing both injection and withdrawal. Their orientations are parallel to the directions of maximum and minimum horizontal permeability, respectively. The vertical injection well combined with horizontal withdrawal wells aligned with maximum and minimum permeability (FP-V-I / H-MAX-P and FP-V-I / H-MIN-P) refer to dualwell configurations in which injection is carried out through a vertical well, while withdrawal is conducted through a horizontal well oriented along the directions of maximum and minimum horizontal permeability. 

7 

_Fuel 408 (2026) 137596_ 

_J. Liu et al._ 

**Fig. 8.** Hydrogen purity across reservoir layers under varying horizontal permeability ratios ( _kh,max/kh,min_ ): (a) 1, (b) 5, (c) 10. Blue: Layer 1; Red: Layer 2; Green: Layer 3; Yellow: Layer 4; Black: Layer 5. 

**Fig. 9.** Hydrogen recovery efficiency under varying horizontal permeability anisotropy ratios ( _kh,max/kh,min_ ): 1, 5, and 10, represented by green, red, blue, and black lines. 

Fig. 14a presents the simulation results for various well configurations under different kh _/_ kv ratios. As the kh _/_ kv ratio increases, the hydrogen recovery efficiency of vertical injection combined with horizontal withdrawal wells (FP-V-I/H-MAX-P and FP-V-I/H-MIN-P) initially rises and subsequently declines. In contrast, for all other well configurations, hydrogen recovery efficiency increases with increasing kh _/_ kv ratio. 

This occurs because hydrogen injected into the lower layers encounters resistance when attempting to migrate upward due to the extremely low vertical permeability. Therefore, for reservoirs characterized by high kh _/_ kv ratios, vertical injection and horizontal withdrawal well configurations are not recommended. On the other hand, when kh _/_ kv reaches 100, although the hydrogen recovery efficiency remains unchanged for the top-layer injection well configuration (UP-V, H-MAX, and H-MIN), the range of pressure variation becomes different. The vertical well demonstrates a larger pressure fluctuation range than the horizontal well (see Fig. C1). 

Fig. 14b presents the simulation results for various well configurations under different _kh,max/kh,min_ ratios. In reservoirs with horizontal anisotropy, the orientation of horizontal wellbores is a crucial influencing factor. For well configurations with horizontal wells, including 

injection–withdrawal horizontal wells or vertical injection well combined with a horizontal withdrawal well, aligning the horizontal well with the direction of maximum permeability yields higher hydrogen recovery efficiency than alignment with the direction of minimum permeability, with all other conditions held constant. 

##### **4. Real geological model** 

While the simplified box model effectively illustrates the influence of permeability anisotropy, we conducted a more comprehensive investigation using a realistic geological model based on field data from the Ahuroa site to demonstrate the practical significance of our findings in actual geological settings. 

##### _4.1. Geological model_ 

The Ahuroa gas field is located onshore in New Zealand’s Taranaki region, approximately 14 km northeast of Stratford (Fig. 15). It was discovered in November 1986 and remained in production until 2008. Over this period, it yielded approximately 1.22 × 10<sup>9</sup> Sm<sup>3</sup> of gas, 1 _._ 73 × 10<sup>5</sup> m<sup>3</sup> of oil, and 6.1 × 10<sup>4</sup> m<sup>3</sup> of water. In 2008, the field was 

8 

_Fuel 408 (2026) 137596_ 

_J. Liu et al._ 

**Fig. 10.** Hydrogen mole fraction in the gas phase at the end of simulation in the isotropy model. (a) reservoir thickness = 40 m; (b) reservoir thickness = 60 m. 

**Fig. 11.** Hydrogen recovery efficiency under varying reservoir thickness and permeability anisotropy: (a) recovery efficiency with different horizontal permeability anisotropy ratios ( _kh,max/kh,min_ = 1, 5, and 10); (b) recovery efficiency with varying horizontal-to-vertical permeability anisotropy ratios (kh _/_ kv = 1, 5, 10, and 100). Each case is evaluated under three reservoir thicknesses: 40 m (orange), 50 m (green), and 60 m (purple). 

repurposed as a natural gas storage facility, which remains operational to this day. In this study, a hypothetical hydrogen storage scenario is evaluated based on the geological conditions at the Ahuroa site. More information can be found in Liu et al. [55]. 

Fig. 16 illustrates an elliptical structural model generated using OpenGoSim software, highlighting the facies groups within the reservoir formation. The reservoir is classified into four primary facies: ATK, TK, TN, and HPM, with their detailed characteristics summarized in Table 3. Among these facies, ATK and TK exhibit high permeability and are identified as the main production layers. The HPM facies, characterized by the lowest permeability, forms a single, but thick layer. It can be regarded as an effective sealing layer. The TN facies is marked by relatively low permeability, thin reservoir thickness, and multiple vertical distributions. 

##### _4.2. Reservoir model_ 

The numerical simulation at reservoir scale employs assumptions consistent with the previously described box model. The simulation domain encompasses dimensions of 1.1 km in length, 1.05 km in width, and 879 m in thickness, discretized into a grid system of 50 × 50 × 28 

cells along the x, y, and z directions, respectively. The reservoir is characterized by no-flow boundary conditions at the top and lateral boundaries, while the bottom boundary maintains constant pressure due to aquifer support. One vertical well is considered in the simulations, with its location, depth, and perforation interval parameters taken from Ahuroa-2A. 

The Ahuroa reservoir, which has transitioned from a production field to UGS facility, operates within a pressure range of 16–24 MPa. For simulation purposes, the initial reservoir pressure was set at 16 MPa. The gas–water contact depth was established at 2500 m at the initial state. The gas–water relative permeability relationships implemented in this study were identical to those utilized in the box model. 

Based on well logging interpretation, the permeability values in the TN and HPM facies are relatively low compared with AKT and TK facies. In the Ahuroa field, AKT and TK facies are regarded as main production layers, while TN and HPM facies are regarded as interlayers and not perforated. 

The scenario of the Ahuroa model is the same as that of the box model (Fig. 3). To investigate the influence of horizontal permeability anisotropy, three simulation cases were conducted under identical conditions with a fix kh _/_ kv=1, while varying _kh,max/kh,min_ as 1, 5, and 10. 

9 

_Fuel 408 (2026) 137596_ 

_J. Liu et al.                                                                                                                                                                                                                                       Fuel_ 

**Fig. 12.** Hydrogen recovery efficiency under varying average permeability and permeability anisotropy. The x-axis represents average permeability in the x-direction (50, 100, and 200 mD), grouped by horizontal-to-vertical permeability anisotropy ratios (kh _/_ kv = 1, 10, and 100). Bar colours indicate different _kh,max/kh,min_ (orange: 1; green: 5 and purple: 10). The label above each bar indicates hydrogen recovery efficiency. A red label denotes scenarios where the operation could not be performed as designed. 

**Fig. 13.** Well configurations. (a) fully perforated injection-withdrawal vertical well; (b) upper-zone injection-withdrawal vertical well; (c) injection–withdrawal horizontal well aligned with maximum permeability; (d) injection–withdrawal horizontal well aligned with minimum permeability; (e) vertical injection well combined with a horizontal withdrawal well aligned with maximum permeability; (f) vertical injection well combined with a horizontal withdrawal well aligned with minimum permeability. KMax and KMin represent the maximum and minimum permeability directions. 

A similar approach was used to evaluate kh _/_ kv, where _kh,max/kh,min_ =1 was fixed, and kh _/_ kv was varied as 1, 5, 10 and 100. 

##### _4.3. Simulation results_ 

_4.3.1. Impact of horizontal-to-vertical permeability anisotropy ratio_ 

The impact of kh _/_ kv on hydrogen recovery efficiency is illustrated in Fig. 17. There is a positive correlation between permeability anisotropy and hydrogen recovery efficiency. As the anisotropy ratio increases from 1 to 100, hydrogen recovery efficiency increases from 76.8 % to 82.8 %, corresponding to an improvement of 6 percentage points. This 

improvement can be attributed to the enhanced lateral spreading of hydrogen, which is further demonstrated by the hydrogen mole fraction distribution patterns shown in Fig. 18. Due to the presence of a thick, low-permeability HPM facies layer, the productive zones (ATK facies) were divided into two distinct zones. In the upper zone, the vertical interval between the producing layer and caprock is limited. _kh,max/kh,min_ shows minimal impact on flow behaviour, except when it reaches 100, at which point lateral spreading of hydrogen becomes pronounced. Conversely, in the lower zone, the absence of a distinct shale seal between the HPM facies and the reservoir base enables downward hydrogen migration. When the permeability anisotropy ratio is 1, 

10 

_Fuel 408 (2026) 137596_ 

_J. Liu et al.                                                                                                                                                                                                                                       Fuel_ 

**Fig. 14.** Hydrogen recovery efficiency under different well configurations and permeability anisotropy conditions: (a) hydrogen recovery efficiency under varying horizontal-to-vertical permeability anisotropy ratios (kh _/_ kv = 1, 5, 10, and 100) for six well configurations; (b) hydrogen recovery efficiency under varying horizontal permeability anisotropy ratios ( _kh,max/kh,min_ = 1, 5, and 10) for six well configurations. 

hydrogen tends to flow vertically toward the base of the reservoir. However, as the kh _/_ kv ratio increases, vertical migration is suppressed, and lateral flow becomes more dominant. 

##### _4.3.2. Impact of horizontal permeability anisotropy ratio_ 

Fig. 19 illustrates the final hydrogen recovery efficiency under varying _kh,max/kh,min_ . As anisotropy ratio increases from 1 to 10, the hydrogen recovery efficiency at the end of the simulation increases from 76.8 % to 77.3 %. On the other hand, a comparison mode was conducted in which the permeability of the ATK facies was set to its maximum value. Hydrogen recovery efficiency increases with increasing _kh,max/kh,min_ . Moreover, the extent of this increase becomes more pronounced at higher average permeabilities. This trend is consistent with the results from the box model. 

##### _4.3.3. Impact of lithology on hydrogen recovery efficiency_ 

kh _/_ kv should be evaluated not only based on properties within a single layer, but also from the perspective of the entire reservoir. Even though the primary production layers are isotropic, adjacent lowpermeability interlayer can reduce vertical permeability seriously. From the view of whole reservoir, it is anisotropic. In the following study, permeability values of TN facies were set to 0.1, 0.5, 1, and 10 mD, covering the range of TN facies permeability (Table 3). The average horizontal and vertical permeabilities of the reservoir were calculated using the arithmetic mean and harmonic mean methods [26]. With the horizontal permeability of other layers remaining constant, the horizontal-to-vertical permeability ratio (kh _/_ kv) are 167, 34.1, 27.4, and 2.6. Simulation results are shown in Fig. 20. When the permeability of TN facies increases from 0.1 to 10 mD, the hydrogen recovery efficiency 

decreases from 79.3 % to 75.2 %. 

##### **5. Discussion** 

Previous studies have investigated the impact of permeability anisotropy on hydrogen recovery efficiency [46,47]. However, their focus was limited to kh _/_ kv, while the influence of _kh,max/kh,min_ received little attention. In this study, the influence of kh _,_ max _/_ kh _,_ min on hydrogen recovery efficiency is studied. Furthermore, rather than treating permeability anisotropy (kh _,_ max _/_ kh _,_ min and kh _/_ kv) as an isolated parameter, this work also investigates its influence under varying reservoir thicknesses, average permeability values, and well configurations. 

##### _5.1. Permeability anisotropy and its implication for site evaluation in UHS_ 

Hydrogen distribution in the reservoir is primarily governed by two mechanisms: gravity override and lateral flow [60], which together determine its spatial migration pattern. 

Hydrogen density is lower than most possible cushion gas (e.g., natural gas, nitrogen, and carbon dioxide) [13]. Consequently, previous studies have mainly focused on vertical migration processes driven by hydrogen’s low density, such as gravity override and kh _/_ kv [44,47,61,62]. However, this study demonstrates that horizontal permeability anisotropy ( _kh,max/kh,min_ ) also affects hydrogen recovery efficiency, particularly for well configurations with horizontal wells. 

As shown in Eqs. (1) and (2), under identical gas properties and pressure difference, permeability anisotropy governs the flow velocity in different directions, while gas preferentially migrating along the 

11 

_Fuel 408 (2026) 137596_ 

_J. Liu et al._ 

**Fig. 15.** Location map of Taranaki Oil & Gas province in New Zealand. The location of the Ahuroa field is indicated by the black box [55]. 

direction of higher permeability. When the average permeability is kept constant, _kh,min_ represents the lowest permeability among the three principal directions. This restriction limits the lateral sweep of hydrogen in the horizontal plane and simultaneously suppresses gravity override, resulting in greater hydrogen accumulation in the lower part of the reservoir. As the average permeability increases, the absolute differences among directional permeabilities under anisotropic conditions also increase, thereby amplifying the influence of anisotropy on reservoir performance. As shown in Fig. 8, when _kh,max/kh,min_ increases from 1 to 10, the average hydrogen purity in each layer rises from 0.58 to 0.65. Since the total gas withdrawal rate among the layers differs only slightly, the increase in anisotropy mainly leads to a higher proportion of hydrogen in the produced gas, thereby increasing the hydrogen production rate. 

For site assessment, thickness and average permeability are two important factors [58,59,63]. Some studies have demonstrated that reservoir thickness has a negative effect on hydrogen recovery efficiency, primarily because greater thickness enhances gravity override, leading to stronger gravitational segregation of hydrogen and reducing the overall recovery efficiency [58,64]. As discussed previously, a high _kh,max/kh,min_ ratio can restrict the influence of gravity override, thereby narrowing the difference in hydrogen recovery efficiency caused by reservoir thickness. 

Average permeability plays a dual role in UHS. While high permeability facilitates gas flow within the reservoir, it also amplifies the adverse effects of viscous fingering and gravity override, thereby reducing hydrogen recovery efficiency [65]. Although high permeability can enhance withdrawal rate, but low hydrogen recovery 

12 

_Fuel 408 (2026) 137596_ 

_J. Liu et al.                                                                                                                                                                                                                                       Fuel_ 

**Fig. 16.** Side view of the permeability distribution in the numerical simulation grid. The colour bar indicates reservoir permeability in the x-direction. 

**Table 3** 

Summary of petrophysical properties and sedimentary characteristics of the four reservoir facies. 

|Code|Dominant<br>Lithology from<br>logs|Avera<br>(%)<br>Low|ge porosity<br>Median|High|Average<br>(mD)<br>Low|permeabili<br>Median|ty<br>High|
|---|---|---|---|---|---|---|---|
|ATK|Sandstone|14|16.5|17|25|75|150|
|TK|Sandstone with<br>less Argillaceous<br>and Mudstone/<br>Siltstone|14|15.5|16|10|20|50|
|TN|Argillaceous and<br>Mudstone/<br>Siltstone, rate<br>Sandstone|6|9|12|0.5|1|10|
|HPM|Mudstone/<br>Siltstone||8||_<_0.01|0.01|0.5|

efficiency will lead to additional costs for gas separation and treatment. In the site assessment, reservoir permeability should be considered in a comprehensive manner. Based on the findings of this study, the adverse effects associated with high average permeability can be mitigated by strong permeability anisotropy. Consequently, anisotropic reservoirs may offer improved hydrogen recovery performance in highpermeability formations. 

Several studies have investigated strategies for optimizing well configurations to enhance hydrogen recovery efficiency [44,66]. However, these studies only consider isotropic reservoirs. The present study demonstrates that, in reservoirs with horizontal anisotropy, particular attention should be paid to the orientation of horizontal wellbores when designing well configurations. When the horizontal wellbore is aligned with the direction of maximum permeability, the horizontal minimum permeability results in reduced lateral sweep. Consequently, hydrogen tends to accumulate in the vertical direction, leading to increased hydrogen content in the lower part of the reservoir. 

Permeability is typically measured through laboratory experiments on core samples [38,67]. However, when evaluating permeability anisotropy, laboratory data alone may not be sufficient due to scale limitations [68]. For example, natural fractures may not be observed in core samples due to limited scale, but their presence can influence fluid flow in the horizontal plane. Furthermore, permeability anisotropy is not only determined by rock properties within a single layer, but also by the interaction of multiple layers. For example, low-permeability mudstone layers can significantly restrict upward hydrogen migration, exerting an even greater effect than the maximum kh _/_ kv anisotropy ratio assumed in this study. Therefore, the assessment of permeability anisotropy should not be limited to core-scale measurements or single layer, a reservoir-scale perspective is also essential to capture large-scale heterogeneities and flow-controlling features. 

**Fig. 17.** Hydrogen recovery efficiency under varying horizontal-to-vertical permeability ratios ( _kh/kv_ ): 1, 5, 10, and 100 represented by red, blue, green, yellow and black lines. 

13 

_Fuel 408 (2026) 137596_ 

_J. Liu et al.                                                                                                                                                                                                                                       Fuel_ 

**Fig. 18.** Cross-sectional distribution of hydrogen mole fraction in the gas phase under varying horizontal-to-vertical permeability anisotropy ratios (kh _/_ kv): (a) 1.0, (b) 5, (c) 10, (d) 100. The y-direction represents the lateral (left–right) dimension, while the x-direction indicates the front-back dimension in the model. 

**Fig. 19.** Impact of horizontal permeability anisotropy on hydrogen recovery efficiency under varying average permeabilities. 

**Fig. 20.** Hydrogen recovery efficiency under varying permeabilities of TN facies ( _kTN_ ): 0.1, 0.5, 1, and 10 mD, represented by black, red, blue, and green lines. 

##### _5.2. Limitation and future study_ 

In this study, the maximum reservoir permeability is assumed to be aligned with the x-direction and to be uniform across all layers. In reality, reservoir permeability typically varies between strata [62,69]. This discrepancy can affect hydrogen mobility at the layer scale and ultimately influence the hydrogen distribution within the reservoir. In 

addition to absolute permeability, gas–liquid relative permeability curves also vary with lithological composition across different layers, which in turn affects gas flow and distribution within the reservoir [70]. To improve model accuracy, future work should take into account both absolute and relative permeability variations in different strata. 

In addition to the anisotropy of formation permeability, recent studies have shown that relative permeability may also exhibit 

14 

_Fuel 408 (2026) 137596_ 

_J. Liu et al._ 

directional dependence [71,72], which could further influence gas flow behaviour. Incorporating anisotropic relative permeability would provide a more realistic representation of gas flow. Future work should therefore consider the inclusion of anisotropic relative permeability to improve the accuracy of the simulation. 

Chemical reactions are also considered a research hotspot in the context of UHS. Chemical reaction results mineral dissolution and precipitation, which will change the throat pore structure [73–75]. Fluids may even dissolve infillings within natural fractures, potentially increasing fracture apertures. Such changes, in combination with fracture orientation, can affect the directional flow capacity of gas within the reservoir. Future modeling efforts should integrate geochemical mechanisms to account for their impact on gas transport. Microbial interactions, such as methanation and sulfate-reducing reactions, may occur in subsurface environments and should also be considered [76–78]. Although they do not influence reservoir properties (e.g., porosity and permeability), they can reduce the underground hydrogen purity and thereby affect recovery efficiency. Therefore, to achieve more accurate reservoir evaluations, microbial reactions should also be taken into account in future studies. 

This study primarily investigates the impact of permeability anisotropy on hydrogen recovery efficiency. However, it should be noted that permeability heterogeneity is also an important factor influencing gas migration, sweep efficiency, and ultimately recovery performance [79–81]. Several studies have demonstrated that heterogeneity can significantly alter hydrogen distribution and breakthrough behaviour. The present work does not account for spatial heterogeneity. Nevertheless, when the geological characteristics of a reservoir are well understood, heterogeneity should be incorporated into the modeling to make the evaluation of UHS site more accurate. 

##### **6. Conclusions** 

In this study, we investigated the influence of permeability anisotropy on hydrogen recovery efficiency during UHS using a box model. Then, our findings were validated with a realistic geological model based on the Ahuroa field. The following conclusion could be drawn: 

- (1) Permeability anisotropy, including kh _/_ kv and kh _,_ max _/_ kh _,_ min _,_ has an impact on hydrogen recovery efficiency. Compared with the isotropic case, when kh _,_ max _/_ kh _,_ min and kh _/_ kv increase to 10 and 

100, the final hydrogen recoveries increase by 1.3 % and 8.1 %, with all other parameters held constant. 

- (2) Hydrogen recovery efficiency tends to decrease with increasing reservoir thickness under the same kh _,_ max _/_ kh _,_ min and kh _/_ kv. While the magnitude of this reduction diminishes as anisotropy ratio increases. 

- (3) Under constant kh _/_ kv, as the average permeability rises, cases with larger kh _,_ max _/_ kh _,_ min exhibit increasingly higher hydrogen recovery efficiency than those with smaller ratios. 

- (4) For well configurations with horizontal wells, horizontal permeability anisotropy should be taken into account, as it can lead to up to an 8 % difference in hydrogen recovery efficiency. 

- (5) We validated the findings from the box model using a realistic geological model based on the Ahuroa gas field. The simulations demonstrate that the patterns observed in the box model also occur in the real-world geological model. 

This study demonstrates that incorporating permeability anisotropy into reservoir modelling can improve the accuracy of site assessment for UHS. Ignoring this factor may result in incomplete analysis and potential misjudgement during site selection. 

Funding. 

This work was supported by the New Zealand government under the MBIE contract UOCX2207 for the Endeavour research program “P ~~uh~~ iko Nuku ~~tu:~~ a green hydrogen geostorage battery in Taranaki”. 

##### **CRediT authorship contribution statement** 

**Jinjiang Liu:** . **David Dempsey:** Writing – review & editing, Supervision, Project administration, Funding acquisition, Conceptualization. **Andy Nicol:** Supervision, Project administration, Funding acquisition. **Matt Parker:** Software, Resources, Data curation. **Karan Titus:** Writing – review & editing. 

##### **Declaration of competing interest** 

The authors declare that they have no known competing financial interests or personal relationships that could have appeared to influence the work reported in this paper. 

##### **Appendix A** 

In the baseline model, the grid consists of 50 × 50 × 25 blocks with a grid block size of 20 _m_ × 20 _m_ × 2 _m_ . To test the model’s grid sensitivity, a comparison model with a finer horizontal grid of 100 × 100 × 25 blocks is built. Other parameters are consistent with the baseline model. Simulation results are shown in Fig. A1. The results demonstrate that the baseline model’s calculations align with the fine-grid model within acceptable error margins. This confirms that our selected grid resolution effectively balances computational accuracy with resource utilization. 

**Fig. A1.** Impact of grid resolution on hydrogen withdrawal rate and recovery efficiency (Solid line: baseline model; dashed line: comparison model with finer grid; red: hydrogen recovery efficiency; blue: hydrogen withdrawal volume). 

15 

_Fuel 408 (2026) 137596_ 

_J. Liu et al._ 

##### **Appendix B** 

**Fig. B1.** Total gas flowrate across reservoir layers under varying horizontal-to-vertical permeability anisotropy ratios: (a) = 1, (b) = 5, (c) = 10, (d) = 100. Blue: Layer 1; Red: Layer 2; Green: Layer 3; Yellow: Layer 4; Brown: Layer 5. 

See Fig. B1 illustrates total gas flow rate under varying kh _/_ kv ratios at ambient temperature and pressure. Whenkh _/_ kv = 1, gas flow rate decreases from Layer 1 to Layer 5. This is mainly because the hydrogen purity is higher in the top layer. According to Darcy’s law, when other parameters remain constant, a lower gas viscosity leads to a higher flow rate. As the kh _/_ kv ratio increases, the effect of gravity override diminishes, leading to a more uniform vertical distribution of hydrogen and more similar gas flow rates across layers. 

##### **Appendix C** 

See Fig. C1 illustrates bottomhole pressure over time under different well configurations when kh _/_ kv = 100. The bottomhole pressure for the injection–withdrawal horizontal well ranges from 19.2 to 22.3 MPa. In comparison, the vertical well completed in the upper zone shows a wider pressure range, from 18.4 to 22.9 MPa. This indicates that the horizontal well can accommodate a greater injection/withdrawal rate. 

**Fig. C1.** Temporal evolution of bottomhole pressure under different well configurations at  = 100. The red line represents a horizontal injection–withdrawal well, while the blue line indicates a vertical injection–withdrawal well completed in the upper zone. 

##### **Data availability** 

Data will be made available on request. 

##### **References** 

- [1] Chen G, Ji Z. A Review of Solar and Wind Energy Resource Projection based on the Earth System Model. Sustainability 2024;16:3339. https://doi.org/10.3390/ su16083339. 

- [2] Guchhait R, Sarkar B. Increasing growth of Renewable Energy: a State of Art. Energies 2023;16:2665. https://doi.org/10.3390/en16062665. 

- [3] Jurasz J, Canales FA, Kies A, Guezgouz M, Beluco A. A review on the complementarity of renewable energy sources: Concept, metrics, application and 

   - future research directions. Sol Energy 2020;195:703–24. https://doi.org/10.1016/ j.solener.2019.11.087. 

- [4] Dujardin J, Kahl A, Kruyt B, Bartlett S, Lehning M. Interplay between photovoltaic, wind energy and storage hydropower in a fully renewable Switzerland. Energy 2017;135:513–25. https://doi.org/10.1016/j.energy.2017.06.092. 

- [5] National Institute of Water and Atmospheric Research. _Assessment and insights into renewable energy_ [report]. 2023. https://www.mbie.govt.nz/dmsdocument/28348assessment-and-insights-into-renewable-energy-october-2023. 

- [6] Electricity Authority. New Zealand wind and solar generation scenarios [report]. 2023. https://www.ea.govt.nz/documents/2717/Wind_and_Solar_Gen_Scenarios. pdf. 

- [7] Le TS, Nguyen TN, Bui D-K, Ngo TD. Optimal sizing of renewable energy storage: a techno-economic analysis of hydrogen, battery and hybrid systems considering degradation and seasonal storage. Appl Energy 2023;336:120817. https://doi.org/ 10.1016/j.apenergy.2023.120817. 

16 

_Fuel 408 (2026) 137596_ 

_J. Liu et al._ 

- [8] Bade SO, Gyimah E, Tomomewo O, Josephs R, Omojiba T, Aluah R. Assessing the potential of large-scale geological hydrogen storage in north dakota’s bakken formation: a case study integrating wind-powered hydrogen production. Renew Energy 2024;237:121906. https://doi.org/10.1016/j.renene.2024.121906.https://doi.org/10.1016/j.renene.2024.121906.. 

in Sichuan Basin. China Fuel 2026;403:135978. https://doi.org/10.1016/j. fuel.2025.135978. 

- formation: a case study integrating wind-powered hydrogen production. Renew [37] Aghighi MA, Rahman SS. Horizontal permeability anisotropy: effect upon the Energy 2024;237:121906. https://doi.org/10.1016/j.renene.2024.121906.https://doi.org/10.1016/j.renene.2024.121906.. evaluation and design of primary and secondary hydraulic fracture treatments in 

- [9] Saadat Z, Farazmand M, Sameti M. Integration of underground green hydrogen tight gas reservoirs. J Petrol Sci Eng 2010;74:4–13. https://doi.org/10.1016/j. storage in hybrid energy generation. Fuel 2024;371:131899. https://doi.org/ petrol.2010.03.029. 10.1016/j.fuel.2024.131899. [38] Armitage PJ, Faulkner DR, Worden RH, Aplin AC, Butcher AR, Iliffe J. 

- [10] Ge L, Zhang B, Huang W, Li Y, Hou L, Xiao J, et al. A review of hydrogen Experimental measurement of, and controls on, permeability and permeability generation, storage, and applications in power system. J Storage Mater 2024;75: anisotropy of caprocks from the CO2 storage project at the krechba field, algeria. 109307. https://doi.org/10.1016/j.est.2023.109307. J Geophys Res 2011;116:B12208. https://doi.org/10.1029/2011JB008385. 

- [11] Berna-Escriche C, Vargas-Salgado C, Alfonso-Solar D, Escriva-Castells A. Hydrogen ´ [39] Tran Ngoc TD, Lefebvre R, Konstantinovskaya E, Malo M. Characterization of deep Production from surplus Electricity Generated by an Autonomous Renewable saline aquifers in the B´ecancour area, St. Lawrence Lowlands, Qu´ebec, Canada: System: Scenario 2040 on Grand Canary Island. Spain Sustainability 2022;14: implications for CO2 geological storage. Environ. Earth Sci 2014;72:119–46. 11884. https://doi.org/10.3390/su141911884. https://doi.org/10.1007/s12665-013-2941-7. 

- [12] Kamran M, Turzynski M. Exploring hydrogen energy systems: a comprehensive ´ [40] Farouk S, Sen S, Saada S, Eldosouky A, Elsayed R, Kassem A, et al. Characterization review of technologies, applications, prevailing trends, and associated challenges. of Upper cretaceous Matulla and Wata clastic reservoirs from October field, Central J Storage Mater 2024;96:112601. https://doi.org/10.1016/j.est.2024.112601. Gulf of Suez. Egypt 2023. https://doi.org/10.21203/rs.3.rs-2623289/v1. 

- [13] Poling BE, Prausnitz JM, O’Connell JP. Properties of gases and Liquids, Fifth [41] Goupil M, Heap MJ, Baud P. Permeability anisotropy in sandstones from the Edition. Fifth edition. New York, N.Y: McGraw-Hill Education; 2020. Soultz-sous-Forˆets geothermal reservoir (France): implications for large-scale fluid 

- [14] Harati S, Rezaei Gomari S, Gasanzade F, Bauer S, Pak T, Orr C. Underground flow modelling. Geotherm Energy 2022;10:32. https://doi.org/10.1186/s40517hydrogen storage to balance seasonal variations in energy demand: Impact of well 022-00243-1. configuration on storage performance in deep saline aquifers. Int J Hydrogen. [42] Henderson N, Pena L. Simulating effects of the permeability anisotropy on the Energ 2023:[1]. https://doi.org/10.1016/j.ijhydene.2023.03.363. formation of viscous fingers during waterflood operations. J Petrol Sci Eng 2017; 

- [15] He Y, Xie Y, Qiao Y, Qin J, Tang Y. Estimation of underground hydrogen storage 153:178–86. https://doi.org/10.1016/j.petrol.2017.03.047. capacity in depleted gas reservoirs using CO2 as cushion gas. Appl Energ 2024;375: [43] Yu X, Ahmadinia M, Shariatipour SM, Lawton D, Osadetz K, Saeedfar A. Impact of 124093. https://doi.org/10.1016/j.apenergy.2024.124093. Reservoir Permeability, Permeability Anisotropy and Designed Injection Rate on 

- [16] Abdellatif M, Hashemi M, Azizmohammadi S. Large-scale underground hydrogen CO2 Gas Behavior in the Shallow Saline Aquifer at the CaMI Field Research Station, storage: Integrated modeling of reservoir-wellbore system. Int J Hydrogen Energ Brooks. Alberta Nat Resour Res 2020;29:2735–52. https://doi.org/10.1007/ 2023;48:19160–71. https://doi.org/10.1016/j.ijhydene.2023.01.227. s11053-019-09604-3. 

- [17] Amid A, Mignard D, Wilkinson M. Seasonal storage of hydrogen in a depleted [44] Zhang H, Zhang Y, Arif M. Impact of formation conditions and well configurations natural gas reservoir. Int J Hydrogen Energy 2016;41:5549–58. https://doi.org/ on underground hydrogen storage. Int J Hydrogen Energy 2024;70:288–300. 10.1016/j.ijhydene.2016.02.036. https://doi.org/10.1016/j.ijhydene.2024.05.208. 

- [18] Sarı E, Çiftçi E. Underground hydrogen storage in a depleted gas field for seasonal [45] Sun Q, Tang H, Ruan H, Tang X, Zhang M. The use of a gravity-assisted-storagestorage: a numerical case study of the Tekirdag gas field. Fuel 2024;358:130310. ˘ extraction protocol for hydrogen storage in saline aquifers. J Clean Prod 2023;413: https://doi.org/10.1016/j.fuel.2023.130310. 137408. https://doi.org/10.1016/j.jclepro.2023.137408. 

- [19] Okoroafor ER, Nazari N, Kim TW, Watkins HY, Saltzer SD, Kovscek AR. Assessment [46] Ershadnia R, Singh M, Mahmoodpour S, Meyal A, Moeini F, Hosseini SA, et al. of hydrogen storage potential in depleted gas fields and power-to-hydrogen Impact of geological and operational conditions on underground hydrogen storage. conversion efficiency: a northern california case study. Int J Hydrogen Energy Int J Hydrogen Energ 2023;48:1450–71. https://doi.org/10.1016/j. 2024;71:982–98. https://doi.org/10.1016/j.ijhydene.2024.05.239. ijhydene.2022.09.208. 

- [20] Saeed M, Jadhawar P. Optimizing underground hydrogen storage in aquifers: The [47] Camargo JT, White JA, Hamon FP, Fakeye V, Buscheck TA, Huerta N. Managing impact of cushion gas type. Int J Hydrogen Energ 2023:S0360319923045445. Doi: reservoir dynamics when converting natural gas fields to underground hydrogen 10.1016/j.ijhydene.2023.08.352. storage. Int J Hydrogen Energy 2024;49:1261–73. https://doi.org/10.1016/j. 

- [21] Ramsari M, Jafari A, Namdar H, Khoozan D. Evaluating the role of cushion gas in ijhydene.2023.09.165. underground hydrogen storage: Impacts of wells and reservoir parameters. Int J [48] Aghighi MA, Rahman SS. Horizontal permeability anisotropy: effect upon the Hydrogen Energy 2025;100:1338–52. https://doi.org/10.1016/j. evaluation and design of primary and secondary hydraulic fracture treatments in ijhydene.2024.11.337. tight gas reservoirs. J Petrol Sci Eng 2010;74. 

- [22] Kanaani M, Sedaee B, Asadian-Pakfar M. Role of Cushion Gas on Underground [49] Kunz O, Wagner W. The GERG-2008 Wide-Range Equation of State for Natural Hydrogen Storage in Depleted Oil Reservoirs. J Energy Storage 2022;45:103783. gases and Other Mixtures: an expansion of GERG-2004. J Chem Eng Data 2012;57: https://doi.org/10.1016/j.est.2021.103783. [1]. 3032–91. https://doi.org/10.1021/je300655b. 

- [23] Yang Y, Yin X, Yang Y, Tian H, Liu K, Zhu W, et al. Numerical simulations of [50] Lohrenz J, Bray BG, Clark CR. Calculating Viscosities of Reservoir Fluids from their depleted (CH4) and cushion (CO2) gases impacts on H2 withdrawal and CO2 Compositions. J Petrol Tech 1964;16:1171–6. https://doi.org/10.2118/915-PA. storage efficiencies in a depleted gas reservoir. Fuel 2025;380:133095. https://doi. [51] Mairhofer J. A Residual Entropy Scaling Approach for Viscosity based on the org/10.1016/j.fuel.2024.133095. GERG-2008 Equation of State. Ind Eng Chem Res 2021;60:2652–62. https://doi. 

- [24] Poulet T, Sheldon HA, Kelka U, Behnoudfar P. Impact of permeability anisotropy org/10.1021/acs.iecr.0c04938. misalignment on flow rates predicted by hydrogeological models. Hydrgeol J 2023; [52] Brooks RH, Corey AT. Properties of Porous Media Affecting Fluid Flow. J Irrig and 31:2129–37. https://doi.org/10.1007/s10040-023-02708-4. Drain Div 1966;92:61–88. https://doi.org/10.1061/JRCEA4.0000425.–88. https://doi.org/10.1061/JRCEA4.0000425.88. https://doi.org/10.1061/JRCEA4.0000425.https://doi.org/10.1061/JRCEA4.0000425.. 

- [25] Reservoir Engineering Handbook. Elsevier 2019. https://doi.org/10.1016/C2016[53] Sheikhi S, Flynn MR. Can a hydrodynamic model predict the flow evolution of a 0-04718-6. hydrogen plume in a depleted natural gas reservoir? Int J Hydrogen Energy 2024; 

- [26] Principles of Applied Reservoir Simulation. Elsevier 2018. https://doi.org/ 81:795–804. https://doi.org/10.1016/j.ijhydene.2024.07.210.–804. https://doi.org/10.1016/j.ijhydene.2024.07.210.804. https://doi.org/10.1016/j.ijhydene.2024.07.210.https://doi.org/10.1016/j.ijhydene.2024.07.210.. 10.1016/C2017-0-00352-X. [54] OpenGoSim, 2025. OpenGoSim Official Website. Available at: https://opengosim. 

   - [52] Brooks RH, Corey AT. Properties of Porous Media Affecting Fluid Flow. J Irrig and Drain Div 1966;92:61–88. https://doi.org/10.1061/JRCEA4.0000425.–88. https://doi.org/10.1061/JRCEA4.0000425.88. https://doi.org/10.1061/JRCEA4.0000425.https://doi.org/10.1061/JRCEA4.0000425.. 

   - [53] Sheikhi S, Flynn MR. Can a hydrodynamic model predict the flow evolution of a hydrogen plume in a depleted natural gas reservoir? Int J Hydrogen Energy 2024; 81:795–804. https://doi.org/10.1016/j.ijhydene.2024.07.210.–804. https://doi.org/10.1016/j.ijhydene.2024.07.210.804. https://doi.org/10.1016/j.ijhydene.2024.07.210.https://doi.org/10.1016/j.ijhydene.2024.07.210.. 

   - [54] OpenGoSim, 2025. OpenGoSim Official Website. Available at: https://opengosim. com/. 

   - [55] J.M. Nordbotten, M.A. Fernø, B. Flemisch, A.R. Kovscek, K.-A. Lie, J.W. Both, O. Møyner, T.H. Sandve, E. Ahusborde, S. Bauer, Z. Chen, H. Class, C. Di, D. Ding, D. Element, A. Firoozabadi, E. Flauraud, J. Franc, F. Gasanzade, Y. Ghomian, M.A. Giddins, C. Green, B.R.B. Fernandes, G. Hadjisotiriou, G. Hammond, H. Huang, D. Kachuma, M. Kern, T. Koch, P. Krishnamurthy, K.O. Lye, D. Landa-Marb´an, M. Nole, P. Orsini, N. Ruby, P. Salinas, M. Sayyafzadeh, J. Solovský, J. Torben, A. Turner, D.V. Voskov, K. Wendel, A.A. Youssef, Benchmarking CO_2 Storage Simulations: Results from the 11th Society of Petroleum Engineers Comparative Solution Project, (2025). Doi: 10.48550/ARXIV.2507.15861. 

- [27] Clavaud J, Maineult A, Zamora M, Rasolofosaon P, Schlitter C. Permeability anisotropy and its relations with porous medium structure. J Geophys Res 2008; 113:2007JB005004. https://doi.org/10.1029/2007JB005004. 

- [28] Witt K-J, Brauns J. Permeability-Anisotropy due to Particle Shape. J Geotech Engrg 1983;109:1181–7. https://doi.org/10.1061/(ASCE)0733-9410(1983)109:9(1181). 

- [29] Kiyama T, Kita H, Ishijima Y, Yanagidani T, Aoki K, Sato T. Permeability In Anisotropic Granite under Hydrostatic Compression and Triaxial Compression Including Post-failure. Region 1996. 

- [30] Tan Y, Pan Z, Liu J, Zhou F, Connell LD, Sun W, et al. Experimental study of impact of anisotropy and heterogeneity on gas flow in coal. Part II: Permeability Fuel 2018;230:397–409. https://doi.org/10.1016/j.fuel.2018.05.033. 

- [31] Irawan D, Falza I. Wihdany, Idea K. PERMEABILITY ANISOTROPY EFFECT IN RESERVOIR CHARACTERIZATION: NEW ROCK TYPING APPROACH; 2019. 

   - [56] Chai M, Chen Z, Nourozieh H, Yang M. Numerical simulation of large-scale seasonal hydrogen storage in an anticline aquifer: a case study capturing hydrogen interactions and cushion gas injection. Appl Energ 2023;334:120655. https://doi. org/10.1016/j.apenergy.2023.120655. 

- [32] Farrell NJC, Healy D, Taylor CW. Anisotropy of permeability in faulted porous sandstones. J Struct Geol 2014;63:50–67. https://doi.org/10.1016/j. jsg.2014.02.008. 

   - [57] Liu J, Dempsey D, Nicol A, Parker M, Passmore J. Impact of operational parameters on water invasion in underground hydrogen storage: a numerical investigation of the Ahuroa field, New Zealand. Int J Hydrogen Energy 2025;153:150236. https:// doi.org/10.1016/j.ijhydene.2025.150236. 

- [33] Buchsteiner H, Warpinski NR, Stress-Induced EMJ. Permeability Reduction in Fissured Reservoirs 1993. https://doi.org/10.2118/26513-MS. 

- [34] Krivoshchekov S, Kochnev A, Kozyrev N, Ozhgibesov E. Factoring Permeability Anisotropy in complex Carbonate Reservoirs in Selecting an Optimum Field Development Strategy. Energies 2022;15:8866. https://doi.org/10.3390/ en15238866. 

   - [58] Malki ML, Chen B, Mao S, Chen F, Mehana M. OPERATE–H2: a tool for optimizing underground hydrogen storage. J Storage Mater 2024;90:111715. https://doi.org/ 10.1016/j.est.2024.111715. 

   - [59] Okoroafor ER, Saltzer SD, Kovscek AR. Toward underground hydrogen storage in porous media: Reservoir engineering insights. Int J Hydrogen Energ 2022;47: 33781–802. https://doi.org/10.1016/j.ijhydene.2022.07.239. 

- [35] Warplnskl NR. Hydraulic Fracturing in Tight, Fissured. Media 1991. 

- [36] Cao G, Jiang W, Luo C, Ji L, Chen Z, Lin M, et al. Permeability anisotropy and nonDarcy effect of gas shale: a case study of S1l11-1 sublayer of Longmaxi Formation 

17 

_Fuel 408 (2026) 137596_ 

_J. Liu et al._ 

- [60] Feldmann F, Hagemann B, Ganzer L, Panfilov M. Numerical simulation of hydrodynamic and gas mixing processes in underground hydrogen storages. Environ Earth Sci 2016;75:1165. https://doi.org/10.1007/s12665-016-5948-z. 

- [61] Jia C, Ren B, Sepehrnoori K, Delshad M, Liu B, Sun H, et al. Numerical studies of hydrogen buoyant flow in storage aquifers. Fuel 2023;349:128755. https://doi. org/10.1016/j.fuel.2023.128755. 

- [62] Zhao Q, Li X-S, Chen Z-Y, Xia Z-M, Xiao C-W. Numerical investigation of production characteristics and interlayer interference during co-production of natural gas hydrate and shallow gas reservoir. Appl Energy 2024;354:122219. https://doi.org/10.1016/j.apenergy.2023.122219. 

- [63] Higgs KE, Strogen DP, Nicol A, Dempsey D, Leith K, Bassett K, et al. Prospectivity analysis for underground hydrogen storage, Taranaki basin, Aotearoa New Zealand: a multi-criteria decision-making approach. Int J Hydrogen Energy 2024; 71:1468–85. https://doi.org/10.1016/j.ijhydene.2024.05.098. 

- [64] Shi Z, Qin J, Xu N, Qin Y, Zhang B, Feng S, et al. Coupled Effects of Reservoir Curvature, Thickness, and well Configuration on Hydrogen Storage Efficiency in Saline Aquifers. Energies 2025;18(18):4948. https://doi.org/10.3390/ en18184948. 

- [65] Reijnen-Mooij GCAM, Damoiseaux M, Van Klaveren S, Jaarsma B. A Study of Underground Hydrogen Storage in 2D Box Models with Properties Comparable to Typical Depleted Gas Fields in the Netherlands. Day 3 Fri, June 28, 2024, Turin, Italy: SPE; 2024, p. D031S017R006. Doi: 10.2118/220013-MS. 

- [66] Smith D, Arnold D, Hough E, Busch A. Numerical modelling of the effects of permeability contrasts on underground hydrogen storage in sandstone reservoirs. Geoenergy 2024;2. https://doi.org/10.1144/geoenergy2023-039. 

- [67] Sun H, Vega S, Tao G. Analysis of heterogeneity and permeability anisotropy in carbonate rock samples using digital rock physics. J Petrol Sci Eng 2017;156: 419–29. https://doi.org/10.1016/j.petrol.2017.06.002. 

- [68] Raghavan R. Some observations on the scale dependence of permeability by pumping tests. Water Resour Res 2006;42. https://doi.org/10.1029/ 2005wr004166. 

- [69] Tarkowski R, Lankof L, Lubon K, Michalski J. Hydrogen storage capacity of salt ´ caverns and deep aquifers versus demand for hydrogen storage: a case study of Poland. Appl Energy 2024;355:122268. https://doi.org/10.1016/j. apenergy.2023.122268. 

- [70] Rezaei A, Hassanpouryouzband A, Molnar I, Derikvand Z, Haszeldine RS, Edlmann K. Relative Permeability of Hydrogen and Aqueous Brines in Sandstones and Carbonates at Reservoir Conditions. Geophys Res Lett 2022;49: e2022GL099433. https://doi.org/10.1029/2022GL099433. 

- [71] Li C, Wang S, You Q, Yu C. A New Measurement of Anisotropic Relative Permeability and its Application in Numerical simulation. Energies 2021;14:4731. https://doi.org/10.3390/en14164731. 

- [72] Pei X, Liu Y, Gu W, Jian C. Characterization and Analysis of Anisotropic Relative Permeability. SPE J 2022;27:579–96. https://doi.org/10.2118/206724-PA. 

- [73] Hassanpouryouzband A, Adie K, Cowen T, Thaysen EM, Heinemann N, Butler IB, et al. Geological Hydrogen Storage: Geochemical Reactivity of Hydrogen with Sandstone Reservoirs. ACS Energy Lett 2022;7:2203–10. https://doi.org/10.1021/ acsenergylett.2c01024. 

- [74] Al-Yaseri A, Al-Mukainah H, Yekeen N. Experimental insights into limestonehydrogen interactions and the resultant effects on underground hydrogen storage. Fuel 2023;344:128000. https://doi.org/10.1016/j.fuel.2023.128000. 

- [75] Gelencs´er O, Cs A, Mika LT, Breitner D, LeClair D, Cs S, et al. Effect of hydrogen on<sup>´</sup> calcite reactivity in sandstone reservoirs: Experimental results compared to geochemical modeling predictions. J Storage Mater 2023;61:106737. https://doi. org/10.1016/j.est.2023.106737. 

- [76] Jahanbani Veshareh M, Thaysen EM, Nick HM. Feasibility of hydrogen storage in depleted hydrocarbon chalk reservoirs: Assessment of biochemical and chemical effects. Appl Energy 2022;323:119575. https://doi.org/10.1016/j. apenergy.2022.119575. 

- [77] Hellerschmied C, Schritter J, Waldmann N, Zaduryan AB, Rachbauer L, Scherr KE, et al. Hydrogen storage and geo-methanation in a depleted underground hydrocarbon reservoir. Nat Energy 2024. https://doi.org/10.1038/s41560-02401458-1. 

- [78] Wu L, Hou Z, Luo Z. Impacts of microbial competition on underground biomethanation of hydrogen and carbon dioxide: Insights from biogeochemical simulations. Renew Energy 2025;251:123458. https://doi.org/10.1016/j. renene.2025.123458. 

- [79] Bo Z, Horning S, Underschultz JR, Garnett A, Hurter S. Effects of geological ¨ heterogeneity on gas mixing during underground hydrogen storage (UHS) in braided-fluvial reservoirs. Fuel 2024;357:129949. https://doi.org/10.1016/j. fuel.2023.129949. 

- [80] Mahdi DS, Al-Khdheeawi EA, Yuan Y, Zhang Y, Iglauer S. Hydrogen underground storage efficiency in a heterogeneous sandstone reservoir. Adv Geo-Energy Res 2021;5:437–43. https://doi.org/10.46690/ager.2021.04.08. 

- [81] Yuan Y, Gong Y, Xu T, Zhu H. Multiphase flow and geomechanical responses of interbedded hydrate reservoirs during depressurization gas production for deepwater environment. Energy 2023;262:125603. https://doi.org/10.1016/j. energy.2022.125603. 

18 

