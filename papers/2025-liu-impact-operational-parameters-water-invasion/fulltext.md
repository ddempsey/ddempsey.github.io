# Impact of operational parameters on water invasion in underground hydrogen storage: A numerical investigation of the Ahuroa field, New Zealand

**Authors:** Jinjiang Liu, David Dempsey, Andy Nicol, Matt Parker, John Passmore  
**Published in:** International Journal of Hydrogen Energy (2025)  
**DOI (version of record):** https://doi.org/10.1016/j.ijhydene.2025.150236  
**This copy:** Published version. Text extracted from the PDF at https://ddempsey.github.io/papers/2025-liu-impact-operational-parameters-water-invasion/liu2025-impact-operational-parameters.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** Published version, reproduced under the CC BY 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1016/j.ijhydene.2025.150236  
**Licence:** CC BY 4.0 http://creativecommons.org/licenses/by/4.0/  

---
International Journal of Hydrogen Energy 153 (2025) 150236 

Contents lists available at ScienceDirect 

# International Journal of Hydrogen Energy 

journal homepage: www.elsevier.com/locate/he 

## Impact of operational parameters on water invasion in underground hydrogen storage: A numerical investigation of the Ahuroa field, New Zealand 

Jinjiang Liu<sup>a,*</sup> , David Dempsey<sup>a</sup> , Andy Nicol<sup>b</sup> , Matt Parker<sup>b</sup> , John Passmore<sup>c</sup> 

a _Department of Civil and Natural Resources Engineering, University of Canterbury, Christchurch, 8041, New Zealand_ b _School of Earth and Environment, University of Canterbury, Christchurch, 8041, New Zealand_ c _Firstgas Limited, New Plymouth, New Zealand_ 

|A R T I C L E I N F O|A B S T R A C T|
|---|---|
|_Keywords:_<br>Underground hydrogen storage<br>Gas-water contact<br>Water invasion<br>OpenGoSim|Underground hydrogen storage (UHS) in depleted gas reservoirs is a possible solution for large-scale seasonal<br>energy storage. A key challenge with UHS lies in an elevated gas-water contact zone due to prior hydrocarbon<br>exploitation. This condition increases the risk of water invasion during hydrogen injection and withdrawal op-<br>erations, adversely affecting overall storage performance. However, the mechanisms controlling this phenome-<br>non and effective mitigation strategies remain poorly understood.<br>This study aims to optimize UHS operational strategies by investigating the impact of operational parameters<br>on water invasion behaviour using a model based on an existing underground gas storage (UGS) facility. In this<br>study, numerical simulations were conducted to evaluate the influence of various operational parameters,<br>including cushion gas injection rate and volume, along with hydrogen injection and withdrawal rates, durations,<br>and volumes. Our results demonstrate several key findings. First, hydrogen’s high compressibility reduces water<br>invasion effects compared to natural gas when injecting and withdrawing equivalent volumes. Second, extending<br>the duration of withdrawal stage and increasing withdrawal rate significantly increases water production rate.<br>Third, cushion gas volume strongly influences reservoir pressure, with larger volumes reducing water production<br>due to a stabilized pressure baseline. Fourth, the amount of gas injected and withdrawn in each cycle positively<br>correlates with water production rate, while increasing injection and withdrawal frequency mitigates water<br>invasion effects. Finally, cushion gas and hydrogen injection rates have less impact on water invasion.<br>These findings provide a basis for optimizing UHS design parameters in depleted reservoirs by specifying<br>injection and withdrawal schemes and cushion gas management, intending to mitigate water invasion risks.|

### **1. Introduction** 

In response to the escalating global climate crisis, New Zealand alongside other countries has intensified its efforts to develop renewable energy resources 1–3. However, the inherent variability of renewable energy sources poses persistent challenges for grid stability and consistent power distribution [4,5]. This is particularly evident in New Zealand’s wind power generation patterns, where strong seasonal variations exist - winter and spring typically experience abundant wind resources leading to surplus power generation, while summer and autumn face reduced wind speeds resulting in potential energy deficits [6].This temporal mismatch between energy generation and demand underscores the importance of implementing robust energy storage 

systems [7], particularly given its status as an island nation that prohibits the sale of surplus energy to neighbouring states. Energy storage systems would ideally enable the capture and utilization of excess renewable energy during high-production periods, facilitating its redistribution during low-generation intervals and hence improving grid reliability and efficient resource use. 

Hydrogen emerges as a promising energy carrier due to its potential for clean production through water electrolysis powered by surplus renewable electricity [8]. Beyond its primary role in seasonal energy storage [9], hydrogen demonstrates remarkable versatility, serving as a critical feedstock across multiple industrial sectors, including green steel manufacturing, fertilizer production, and various chemical processes [10]. 

* Corresponding author. 

_E-mail address:_ jinjiang.liu@pg.canterbury.ac.nz (J. Liu). 

https://doi.org/10.1016/j.ijhydene.2025.150236 

Received 10 April 2025; Received in revised form 8 June 2025; Accepted 27 June 2025 

Available online 7 July 2025 

0360-3199/© 2025 The Authors. Published by Elsevier Ltd on behalf of Hydrogen Energy Publications LLC. This is an open access article under the CC BY license ( http://creativecommons.org/licenses/by/4.0/ ). 

_International Journal of Hydrogen Energy 153 (2025) 150236_ 

_J. Liu et al.                                                                                                                                                                                                                                       International Journal of Hydrogen Energy_ 

**Fig. 1.** Location map of Taranaki Oil & Gas province in New Zealand. (Location of the Ahuroa field is shown by the black box). 

[21]. For example, the lower density and viscosity of hydrogen relative to other potential cushion gases leads to enhanced gravity segregation effects and fingering phenomena [22]. Understanding these similarities and differences between UGS and UHS can help with the planning of future underground hydrogen storage. 

UHS encompasses three primary approaches: salt caverns, saline aquifers, and depleted hydrocarbon reservoirs [21,23,24]. Each method has its own advantages and disadvantages. The choice of storage technology should be tailored to meet the specific needs of the project. In New Zealand, there are no major salt deposits [25]. While some saline 

**Table 1** 

Key petrophysical parameters and reservoir properties applied in the 

Ahuroa Gas field simulation model. 

|Property (unit)|Value|
|---|---|
|Average porosity (%)|14|
|Average horizontal permeability (mD)|40|
|Average vertical permeability (mD)|4|
|Original reservoir temperature (<sup>◦</sup>C)|65|
|Original reservoir pressure (MPa)|24|
|Original gas-water contact (m)|2260|

Hydrogen can be stored to bridge the temporal gap between energy generation and utilization [11,12]. According to the study by Vatankhah Ghadim [13], if all technically viable applications switched to hydrogen, New Zealand’s hydrogen demand could reach 3 million tonnes (Mt) per year. On the other hand, New Zealand’s current gas storage supplies about 10 % of its annual demand. If the same is applied to hydrogen, about 0.3 Mt of hydrogen would need to be stored. If surface storage is implemented, this would require about 100 tanks of the most advanced cryogenic storage or more than 250 vertical shafts [14]. However, if underground storage is implemented, requirements could be met through several depleted reservoirs. 

UGS has been widely implemented, with 715 facilities currently operating worldwide [15–17]. Due to the similarity between hydrogen and natural gas, experience gained from UGS can provide insight into UHS [18]. For example, both UHS and UGS operations require a specific volume of cushion gas to maintain adequate reservoir pressure, which not only enables optimal withdrawal rates but also serves to prevent premature water invasion – a vertical rise of the gas-water interface below a well due to gas removal [19,20]. Furthermore, hydrogen exhibits some distinctive physical properties compared to natural gas that require careful consideration during underground storage operations 

**Fig. 3.** Relative permeability curves obtained through history matching. 

**Fig. 2.** Historical production data and history matching results of the Ahuroa gas field: Natural gas production and injection rates are represented by the black line and orange lines. The water production rate data (points) and the model output (line) are depicted in blue. Measured bottomhole pressure data for Ahuroa-2A (points) and the simulated bottomhole pressure from the model (line) are shown in red. (For interpretation of the references to colour in this figure legend, the reader is referred to the Web version of this article.) 

2 

_J. Liu et al.                                                                                                                                                                                                                                       International Journal of Hydrogen Energy_ 

_International Journal of Hydrogen Energy 153 (2025) 150236_ 

**Table 2** 

Operational parameters of different simulations. 

||Cushion gas stage||Working gas stage||||
|---|---|---|---|---|---|---|
||Rate<br>(<br>10<sup>5 </sup>Sm<sup>3</sup> _/_day<br>)|Duration(day)|Injection rate<br>(<br>10<sup>5</sup> _S_m<sup>3</sup> _/_day<br>)|Duration(day)|Withdrawal rate<br>(<br>10<sup>5</sup> _S_m<sup>3</sup> _/_day<br>)|Duration(day)|
|Baseline model|5|90|10|90|10|90|
|Cushion gas rate|3.33<br>10|135<br>45|10|90|10|90|
|Cushion gas volume|5|30<br>150|10|90|10|90|
|Working gas injection rate|5|90|20<br>5|45<br>180|10|90|
|Working gas withdrawal rate|5|90|10|90|20<br>5|45<br>180|
|Working gas volume|5|90|10|60|10|60|
||||10|120|10|120|
|Withdrawal stage duration|5|90|10|90|10<br>10|93<br>95|

**Fig. 4.** Gas injection-withdrawal rates and water production rates throughout storage cycles: (a) hydrogen storage model; (b) natural gas storage model. (hydrogen: cyan; natural gas: red; water: blue; dashed lines: injection rate; solid lines: withdrawal rate). (For interpretation of the references to colour in this figure legend, the reader is referred to the Web version of this article.) 

aquifers are known, these have considerable uncertainties in their gas-trapping capacity [26]. Therefore, our analysis here is focused on depleted reservoirs. Previous studies have considered the feasibility of storing hydrogen in depleted hydrocarbon reservoirs [27,28]. 

During years of exploitation, depleted reservoirs undergo significant pressure decline from their initial conditions. To establish suitable operational conditions, operators inject cushion gas to restore and maintain adequate reservoir pressure prior to initiating storage operations [29]. Several investigations have been conducted to evaluate the performance of various cushion gases [20,30–32]. Kanaani et al. [31] investigated the effects of cushion gas on hydrogen recovery efficiency. They found that the maximum hydrogen recovery could be achieved using methane as cushion gas. This is because, under the impact of gravity segregation, hydrogen recovery increases with a lower molecular weight of the mixing gas. Additionally, gravity segregation was found to be effectively mitigated by increasing the cushion gas volume, resulting in improved hydrogen recovery. 

Lysyy et al. [32] studied seasonal hydrogen storage in the Norne 

hydrocarbon field using numerical simulation, demonstrating that using formation gas as cushion gas, instead of hydrogen, has dual effects. Using formation gas as a cushion gas leads to higher ultimate hydrogen recovery (defined as the ratio of total produced hydrogen to total injected hydrogen). This is because less hydrogen needs to be left underground to maintain reservoir pressure. However, it results in lower hydrogen fraction in the withdrawn gas during each cycle. This is because formation gas would be produced along with hydrogen. To balance these effects, the study recommends maintaining hydrogen content at 60–80 % of total injected gas to avoid impurities in the withdrawn gas while still achieving satisfactory recovery rates. Chai et al. [30] studied the impact of cushion gas types on the ultimate hydrogen recovery using reservoir simulation methods. They found that injecting nitrogen as cushion gas can not only release hydrogen from residual trapping but also reduce the dissolution of hydrogen in the aqueous phase, although dissolved hydrogen is typically small. Heinemann et al. [33] studied the optimal volume ratio between cushion gas and working gas (CG/WG ratio) needed to inject and produce a targeted 

3 

_International Journal of Hydrogen Energy 153 (2025) 150236_ 

_J. Liu et al.                                                                                                                                                                                                                                       International Journal of Hydrogen Energy_ 

**Fig. 5.** Cross-sectional views of gas saturation in different operational stages. (a): initial reservoir condition, (b): at the end of the first hydrogen injection cycle, (c): at the end of the first withdrawal cycle. 

volume under different storage geometries. They found that, as the anticline dip angle decreased, the CG/WG ratio required also decreased whereas the water production rate increased. 

Once cushion gas has been injected, a storage project would typically enter a cycling stage, during which working gas is injected and extracted. In UHS, this stage occupies the majority of the time, and its design parameters affect the efficiency of the project [20]. Abdellatif et al. [34] 

introduced an integrated reservoir-wellbore model to improve predictions of UHS, demonstrating that higher hydrogen purity could be achieved by extending the initial filling period and increasing the injection rate. Jadhawar & Saeed [20] summarized the impact of operational parameters on hydrogen recovery, finding that a lower injection rate and smaller cyclic gas volume can greatly improve hydrogen recovery. This is because lower injection rates and smaller cyclic gas 

4 

_International Journal of Hydrogen Energy 153 (2025) 150236_ 

_J. Liu et al._ 

**Fig. 6.** Gas injection-withdrawal rates and water production rates during storage cycles under varying cushion gas injection rate: (a) cushion gas injection rate is twice that of the baseline model, (b) baseline model, (c) cushion gas injection rate is half that of the baseline model. 

volumes can mitigate lateral spread of hydrogen. Lubon ´ & Tarkowski [35] investigated the influence of the first filling period length on underground hydrogen storage performance. Their results showed that the volume of co-produced water during the withdrawal stage decreased as the duration of the cushion gas injection phase increased. 

The impact of well design and construction on the performance of UHS has also been studied. Sainz-Garcia et al. [36] evaluated the impact of different well configurations on UHS in a saline aquifer. For a fixed injection well location, three extraction well configurations were studied. This study demonstrated that water coning increases the amount of water co-produced with gas, thereby reducing the efficiency of hydrogen withdrawal. However, its impact can be mitigated by optimizing the configuration of extraction wells. Zhang et al. [37] studied the impact of well placement and well perforation on UHS efficiency. They found that moving a well away from the central point of an anticline tended to reduce recovery factor, whereas perforation of only the upper section of the well could improve hydrogen recovery and reduce water production rate. This highlights the importance of well design in consideration of 

the subsurface geometry. Sun et al. [38] proposed a method called gravity-assisted storage extraction (GRASE) to mitigate water coning and increase hydrogen withdrawal in underground hydrogen storage. According to their approach, hydrogen should be injected in the lower region of the reservoir and then extracted from the top region with a horizontal well. Simulation results showed that the new method improved hydrogen recovery by 20–30 % compared to alternative approaches. 

Water invasion is another issue that needs to be addressed in UGS and UHS [39,40]. The storage space of UGS can be divided into four zones: pure gas zone, gas zone formed by gas displacing water, gas-water zone, watered-out zone [41]. Wang et al. [40] investigated the water invasion issue in Wen 23 gas storage. In the gas-water zone of UGS, the repeated cycling of gas and water displacement during injection-withdrawal operations gradually deteriorates pore volume and gas recovery, leading to stabilization at low recovery levels. Oldenburg et al. [39] conducted sensitivity analyses to investigate how engineering parameters (including withdrawal rate and the distance between well 

5 

_International Journal of Hydrogen Energy 153 (2025) 150236_ 

_J. Liu et al.                                                                                                                                                                                                                                       International Journal of Hydrogen Energy_ 

**Fig. 7.** Variation of bottomhole pressure (red line) over time under varying cushion gas rates: (a) cushion gas rate is twice that of the baseline model, (b) baseline model, (c) cushion gas rate is half that of the baseline model. (For interpretation of the references to colour in this figure legend, the reader is referred to the Web version of this article.) 

bottom and gas-water interface) and reservoir properties (such as permeability and porosity) affect water coning. Their study identified key engineering controls to minimize water coning, such as reducing withdrawal rates, maximizing the well-to-interface distance, and increasing the perforated interval length. Among reservoir properties, they found that higher horizontal permeability was particularly effective in preventing water coning. Pore-scale studies also demonstrated that injection and production rates affect breakthrough time and hydrogen storage recovery efficiency. Bagheri et al. [42] studied the influence of flow rates on hydrogen displacement efficiency and trapping mechanisms in saline aquifers using direct numerical simulation (DNS) and the finite volume approaches. Their results revealed that lower injection rates slow hydrogen breakthrough and increase the overall hydrogen storage capacity, whereas lower withdrawal rates promote capillary trapping and reduce the amount of recoverable hydrogen. Bahrami et al. [43] developed a quasi-2D microfluidic system to experimentally investigate hydrogen–water flow behavior, trapping mechanisms, and hysteresis during UHS. Their results show that, due to relative permeability hysteresis, hydrogen exhibits lower connectivity during the withdrawal stage compared to the injection stage. This transition is quantitatively characterized by the Euler characteristic. 

The influence of operational parameters on water invasion in UHS remains understudied, particularly regarding cushion gas specifications, injection and withdrawal rates, and working gas volumes [32,44]. Our research addresses this knowledge gap by examining operational parameters that can mitigate water invasion in UHS facilities. Using the Ahuroa field in New Zealand’s Taranaki region as a case study - a depleted reservoir now used for gas storage - we employ numerical simulations to investigate how operational parameters affect water invasion. Our analysis specifically examines the temporal evolution and spatial extent of water invasion in response to various operational scenarios. The findings provide valuable insights for UHS project design and implementation, enabling operators to optimize storage capacity while effectively managing water invasion risks. 

### **2. Description of the model** 

### _2.1. Model assumptions_ 

Our study investigates water invasion phenomenon in UHS, a process that is primarily controlled by the dynamic of gas-water two-phase flow in porous media. To facilitate analysis, we adopt the following key 

6 

_J. Liu et al.                                                                                                                                                                                                                                       International Journal of Hydrogen Energy_ 

_International Journal of Hydrogen Energy 153 (2025) 150236_ 

**Fig. 8.** Gas injection-withdrawal rates and water production rate during storage cycles under varying cushion gas injection durations: (a) cushion gas duration is 30 days, (b) cushion gas duration is 90 days, (c) cushion gas duration is 150 days. 

simplifying assumptions: (1) the reservoir is homogeneous with spatially and temporally invariant properties; (2) biological and chemical reactions are not considered in this study, as their impact on gas-water interface dynamics is beyond the scope of the current analysis; (3) geomechanical effects, such as compaction and poroelastic responses, are assumed to be minimal and are excluded from the model; (4) the system is treated as a two-phase system, exclusively considering gaswater interactions while disregarding any oil-phase effects; (5) the injected natural gas is assumed to possess identical properties to the formation gas, which is composed of 94 % methane, 4.5 % nitrogen, and 1.5 % carbon dioxide; and (6) both natural gas and hydrogen are assumed to be completely insoluble in water. 

### _2.2. Governing equations_ 

The governing mass conservation equation used in the model is [45]: 

where ∅ is porosity; _np_ is the number of phases; j is an index denoting the phase, _j_ = 1⋯ _np_ ; _nc_ is the number of components; _i_ is an index denoting the gas component, _i_ = 1⋯ _nc_ ; _xi,j_ is the mole fraction of component _i_ in phase _j_ ; _S_ is the saturation of phase _j_ ; _ηj_ is the molar density of phase _j,_ mol _/_ m<sup>3</sup> ; **uj** is the flow velocity of phase _j_ , m _/_ s; _Dj_ is the diffusion coefficient of phase _j_ , m<sup>2</sup> _/_ s; _Qj_ is the source term, mol _/_ ( m<sup>3</sup> ⋅s). 

For gas-liquid diffusion at the gas-water interface, the diffusion coefficient is 2 × 10<sup>−9</sup> m<sup>2</sup> _/_ s. For gas-gas diffusion in the gas phase, the diffusion coefficient is 2 × 10<sup>−5</sup> m<sup>2</sup> _/_ s. However, since the gas phase is assumed to be insoluble in this study, gas–liquid diffusion is not considered to occur. 

The velocity of phase _j_ in the porous media is given by Darcy’s equation: 

7 

_International Journal of Hydrogen Energy 153 (2025) 150236_ 

**Fig. 9.** Variation of bottomhole pressure (red line) over time under varying cushion gas volumes: (a) cushion gas duration is 30 days, (b) cushion gas duration is 90 days, (c) cushion gas duration is 150 days. (For interpretation of the references to colour in this figure legend, the reader is referred to the Web version of this article.) 

where _k_ is the absolute permeability, m<sup>2</sup> ; _krj_ is the relative permeability of phase _j_ ; _μj_ is viscosity, Pa _._ s; _Pj_ is fluid pressure of phase _j_ , MPa; _ρj_ is the mass density of phase _j,_ kg _/_ m<sup>3</sup> ; _g_ is the gravitational constant, m _/_ s<sup>2</sup> ; **z** ̂ is a unit vector in the direction of gravity. 

Density and viscosity of the gas mixture are given as follows: 

Where _x_ is mole fraction of different gas components, and _a_ , _b_ are the two gas components (natural gas and hydrogen). 

large-scale parallel computing [46]. 

In this study, the three-component multi-gas model (COMP3) was utilized to perform all calculations in this study. In COMP3, gas (natural gas), solvent (hydrogen) and water are considered. The solvent and gas components share the reservoir vapour phase, and water is the only aqueous phase. No chemical reaction between different components or phases were included. The GERG 2008 equation of state is used to calculate the density and enthalpy of pure gas and solvent [47]. The viscosity of gas and solvent are calculated using the Lorenhz-Bray-Clay method and the residual entropy method [48]. 

To maintain numerical stability and accuracy, a fully implicit method was employed to solve the non-linear governing equations. The equations were discretized in both time and space, and a NewtonRaphson iteration method was applied to ensure robust convergence. All variables, including pressure, saturation, and component concentration, were solved simultaneously at each time step. 

### _2.3. OpenGoSim implementation_ 

Our model has been implemented in the reservoir simulator OpenGoSim, an open-source software designed to simulate multiphase and multicomponent flow and transport in porous material. Built on the PFLOTRAN framework (https://opengosim.com), OpenGoSim supports 

### _2.4. Model geometry_ 

The reservoir model was constructed using field data from the Ahuroa gas field, which is situated in onshore New Zealand, 14 km 

8 

_International Journal of Hydrogen Energy 153 (2025) 150236_ 

_J. Liu et al._ 

**Fig. 10.** Gas injection-withdrawal rates and water production rates during storage cycles under varying working gas injection rates: (a) working gas injection rate is 5 × 10<sup>5</sup> Sm<sup>3</sup> /day, (b) working gas injection rate is 1 × 10<sup>6</sup> Sm<sup>3</sup> /day, (c) working gas injection rate is 2 × 10<sup>6</sup> Sm<sup>3</sup> /day. 

northeast of Stratford in the Taranaki region (Fig. 1). The Ahuroa field is a narrow, north-south elongated structural closure positioned at the crest of the Tarata thrust fault. The operating reservoir unit (Tariki Sandstone Member) is located approximately 2 km deep within a faultbounded three-way dip closure above the Tarata Thrust. Marine mudstones provide the top seal, while low-permeability fault rock forms the lateral seal. The Tariki Sandstone Member boasts a gross thickness of around 200 m, providing significant storage potential. Sands within the reservoir are characterized by coarser grains and reduced amounts of clay components, contributing to favourable reservoir conditions. The reservoir unit is overlaid by mudstones, which provide vertical trapping of the buoyant gas. 

The Ahuroa field was discovered in November 1986 and exploited until 2008. During this time, it produced 1 _._ 22 × 10<sup>9</sup> _S_ m<sup>3</sup> of gas, 1 _._ 73× 10<sup>5</sup> m<sup>3</sup> of oil and 6 _._ 1 × 10<sup>4</sup> m<sup>3</sup> of water. In 2008, the Ahuroa gas field was converted to a natural gas storage facility, which remains in operation today. Our study considers a hypothetical hydrogen storage project at this site. 

The geological model was developed using Leapfrog Energy software. Well data from the Ahuroa and Piakau well clusters, combined with operator fault and reservoir surfaces interpreted from 2D seismic reflection lines, were imported to constrain model. Then surface and volumes in the model were evaluated onto a discretized block model, which was then used in the dynamic reservoir simulation. 

### _2.5. Initial condition, boundary condition and history matching_ 

Since the Ahuroa gas field has been exploited for many years, its present state differs from its original condition. To ensure the simulation reflects contemporary pressure and gas-water contact conditions as accurately as possible, a history-matching process was performed to establish the initial reservoir condition for UHS simulations. This process helps calibrate the numerical model through matching simulated results with historical production data and measured reservoir parameters. 

Field measurements before exploitation indicate that the Ahuroa gas 

9 

_International Journal of Hydrogen Energy 153 (2025) 150236_ 

_J. Liu et al.                                                                                                                                                                                                                                       International Journal of Hydrogen Energy_ 

**Fig. 11.** Variation of bottomhole pressure (red line) over time under varying working gas injection rates: (a) working gas injection rate is 5× 10<sup>5</sup> Sm<sup>3</sup> /day, (b) working gas injection rate is 1 × 10<sup>6</sup> Sm<sup>3</sup> /day, (c) working gas injection rate is 2 × 10<sup>6</sup> Sm<sup>3</sup> /day. (For interpretation of the references to colour in this figure legend, the reader is referred to the Web version of this article.) 

field was under hydrostatic pressure, with an initial reservoir pressure of 24 MPa and temperature of 65<sup>◦</sup> C. The initial gas-water contact was established at a depth of 2260 m, below which an active aquifer system extends to the base of the simulation domain. In the numerical model, this lower boundary is represented as a constant-pressure boundary condition, while all other boundaries are implemented as no-flow boundaries to reflect the field’s structural containment. 

During field development (1996–2008), only the Ahuroa-2A well was in operation. Gas production rate, water production rate, and bottomhole pressure were collected during this period. Reservoir properties were manually adjusted to match simulation results with the field data, ensuring a more accurate representation of the reservoir’s characteristics (Fig. 2). Since 2008, the Ahuroa field has operated as an underground gas storage facility. During this period, three additional wells were drilled. Detailed well-by-well records are available for 2008 to 2018, while post-2018 records only report total rates across all wells. For the post-2018 period, it was assumed that production and injection rates were evenly distributed across all wells. 

History matching was performed to calibrate some simulation parameters. While there are uncertainties in the history matching results, 

primarily arising from the sparse well distribution and partial production records, the model calibration nevertheless provides sufficient accuracy for a hypothetical UHS assessment. The major reservoir properties derived from history matching are summarized in Table 1. Among these properties, porosity, horizontal permeability, and vertical permeability are calibrated by history matching, and the final selected values of first two parameters fall within the range measured in laboratory core experiments (Porosity is 10.3 %–15.9 %, and permeability is 15–102 md). The initial reservoir temperature, pressure, and gas-water contact depth were determined from field measurements. The gas-water relative permeability curves obtained through history matching process are shown in Fig. 3. 

### _2.6. Baseline simulation_ 

The primary objective of this study is to investigate the phenomenon of water invasion in UHS. To achieve this goal, a baseline numerical model was developed. Subsequently, several comparison models were developed to analyse the impact of different parameters across various stages on water invasion. All simulations utilize consistent reservoir 

10 

_International Journal of Hydrogen Energy 153 (2025) 150236_ 

_J. Liu et al._ 

**Fig. 12.** Gas injection-withdrawal rates and water production rates during storage cycles under varying working gas withdrawal rates: (a) working gas withdrawal rate is 5 × 10<sup>5</sup> Sm<sup>3</sup> /day, (b) working gas withdrawal rate is 1 × 10<sup>6</sup> Sm<sup>3</sup> /day, (c) working gas withdrawal rate is 2 × 10<sup>6</sup> Sm<sup>3</sup> /day. 

properties, which were obtained through history matching. History matching was performed until the end of 2024. The subsequent operations were simulated with time denoted in days, where Day 0 represents January 1, 2025. 

At the initial stage of the project, additional cushion gas is injected at a rate of 5 × 10<sup>5</sup> Sm<sup>3</sup> _/_ day to increase reservoir pressure. Although various gases can serve as cushion gas, natural gas was used in this study. It is assumed to have the same properties as the native gas originally present in the reservoir. Investigation of alternative cushion gas types has been studied by other authors and hence is beyond the scope of this study [20,29,30]. 

Following pressurization, ten cycles of hydrogen injection and gas withdrawal are simulated. While it is possible to ensure hydrogen purity at injection, during the withdrawal stage a gas mixture (hydrogen and natural gas) is produced whose composition changes over time and depends on mixing processes within the reservoir. The presence of a gas mixture during the withdrawal stage is attributed to the residual natural gas in the depleted gas reservoir. Injection and withdrawal rates are set 

to 1 × 10<sup>6</sup> Sm<sup>3</sup> _/_ day, with each hydrogen injection and withdrawal stage lasting for 90 days. 

During the operation of the gas storage facility in the Ahuroa field, a minimum operating pressure of 16 MPa is maintained to ensure safe and efficient storage operations, while the maximum pressure must not exceed 24 MPa. To meet these pressure limits, if during injection the bottom hole pressure reaches its maximum, the gas injection rate will decrease to ensure it does not exceed this value. Similarly, during withdrawal, if the bottomhole pressure reaches the specified minimum, the withdrawal rate is decreased so that it does not continue to decrease beyond this value. In this study, to better study the impact of various operational parameters on bottom water invasion, the maximum and minimum pressures were set to 25 MPa and 8 MPa, respectively. The latter is below the currently permitted value in the Ahuroa field and has been used here as a hypothetical setting to test water invasion scenarios. 

11 

_International Journal of Hydrogen Energy 153 (2025) 150236_ 

_J. Liu et al._ 

**Fig. 13.** Variation of bottomhole pressure (red line) over time under varying working gas withdrawal rates: (a) working gas withdrawal rate is 5× 10<sup>5</sup> Sm<sup>3</sup> /day, (b) working gas withdrawal rate is 1 × 10<sup>6</sup> Sm<sup>3</sup> /day, (c) working gas withdrawal rate is 2 × 10<sup>6</sup> Sm<sup>3</sup> /day. (For interpretation of the references to colour in this figure legend, the reader is referred to the Web version of this article.) 

### _2.7. Comparison simulations_ 

### **3. Results and discussion** 

To analyse the impact of operational parameters on water invasion, a series of comparison simulations were conducted to investigate the effects of six key operational parameters: cushion gas injection rate, cushion gas volume, working gas (hydrogen) injection rate, working gas (gas mixture) withdrawal rate, working gas volume in each cycle, and withdrawal stage duration. The cushion gas analysis involved varying injection rates (comparing 3 _._ 33 × 10<sup>5</sup> and 10 × 10<sup>5</sup> Sm<sup>3</sup> _/_ day at constant cushion gas volume) and injection duration (comparing 150 and 30 days at a constant injection rate). For working gas, three key parameters were evaluated: injection rate (comparing 5× 10<sup>5</sup> and 20× 10<sup>5</sup> Sm<sup>3</sup> _/_ day at constant volume), withdrawal rate (comparing 5× 10<sup>5</sup> and 20 × 10<sup>5</sup> Sm<sup>3</sup> _/_ day at constant volume), and injection and withdrawal duration (comparing 120 and 60 days at constant injection and withdrawal rates). While the injection/withdrawal rate of 20× 10<sup>5</sup> Sm<sup>3</sup> _/_ day is relatively high and difficult to achieve in actual production, it remains useful for exploring the fundamental behaviour of water invasion. Withdrawal stage duration involves withdrawal time extensions of 3 and 5 days (Table 2). 

### _3.1. Baseline simulation_ 

Gas injection-withdrawal rates and water production rates over cycles are illustrated in Fig. 4. Water production during the initial withdrawal stage was attributed to prior water invasion events. Within each cycle, the water production rate exhibits a positive correlation with gas withdrawal. With increasing number of injection-withdrawal cycles, the maximum water production rate in each cycle decreases [30,49]. 

To evaluate the distinct characteristics of water invasion in UHS, a comparison model was developed to analyse differences against conventional UGS. The comparison method is to substitute hydrogen injection with natural gas at equivalent volume rates. The natural gas composition used for injection is assumed to be identical to the initial gas composition in the reservoir. All other operating parameters in this comparison model are the same as in the baseline. 

Fig. 4 shows similar water production trends for both models. In the hydrogen injection model, the produced gas consists of both natural gas and hydrogen, whereas in the natural gas injection model, the produced 

12 

_J. Liu et al.                                                                                                                                                                                                                                       International Journal of Hydrogen Energy_ 

_International Journal of Hydrogen Energy 153 (2025) 150236_ 

**Fig. 14.** Gas injection-withdrawal rates and water production rates during storage cycles under varying working gas volumes: (a) 30 days shortened injection and withdrawal periods relative to baseline model, (b) baseline case, and (c) 30 days extended injection and withdrawal periods relative to baseline model. 

**Table 3** 

Comparison of water production rates and volumes across models with the same injection and withdrawal duration and cycle number. 

|Case|1530 days||10th cycle||
|---|---|---|---|---|
||Water<br>production<br>rate<br>(_m_<sup>3</sup>_/day_)|Water<br>production<br>volume (_m_<sup>3</sup>)|Water<br>production<br>rate<br>(_m_<sup>3</sup>_/day_)|Water<br>production<br>volume (_m_<sup>3</sup>)|
|Model with 60<br>days<br>injection and<br>withdrawal<br>periods|40.7|29420|42.3|25470|
|Baseline model|45.2|29050|41.3|34430|
|Model with 120<br>days<br>injection and<br>withdrawal<br>periods|52.1|29010|38.7|42050|

gas contains only natural gas. As hydrogen’s lower compressibility factor compared to natural gas results in higher bottomhole pressure under equal injection volumes, effectively mitigating water invasion [18]. Throughout the simulation period, the hydrogen case consistently demonstrated lower water production rates than natural gas. Nevertheless, considering that hydrogen’s volumetric energy density is approximately one-third that of natural gas [18], storing an equivalent amount of energy using hydrogen would require larger volumes. Injecting and withdrawing larger gas volumes under a given cushion gas volume may exacerbate water invasion. Fig. 5 illustrates the progress of water invasion. It can be seen that pure gas zone is relatively stable. During injection–withdrawal cycles, the gas–water transition zone undergoes alternating displacement of gas and water, which is consistent with the results reported by Zheng et al. [41]. 

### _3.2. Impact of cushion gas design parameters on water invasion_ 

Cushion gas operation involves two key parameters: injection rate 

13 

_International Journal of Hydrogen Energy 153 (2025) 150236_ 

_J. Liu et al._ 

**Fig. 15.** Variation of bottomhole pressure (red line) over time under varying working gas volumes: (a) 30 days shortened injection and withdrawal periods relative to baseline model, (b) baseline case, and (c) 30 days extended injection and withdrawal periods relative to baseline model. (For interpretation of the references to colour in this figure legend, the reader is referred to the Web version of this article.) 

and injection volume. While these factors do not directly prevent water invasion, they may still influence its development. Variations in injection rate and volume can alter the reservoir pressure profile, thereby affecting pressure conditions during subsequent operational stages. The following analysis investigates the impact of these parameters on water invasion behaviour. 

To evaluate the impact of cushion gas injection rates, two comparison models were developed, keeping all baseline parameters constant except for the cushion gas injection rate. While maintaining the same total cushion gas volume, injection rates were set to 10× 10<sup>5</sup> and 3 _._ 33× 10<sup>5</sup> Sm<sup>3</sup> /day, with corresponding injection durations of 45 and 135 days respectively. As shown in Fig. 6, the flow rates of various gas components and water indicate that higher cushion gas injection rates result in slightly reduced water production rates. Fig. 7 illustrates the evolution of bottomhole pressures during the simulation period. It reveals that higher cushion gas injection rates accelerate reservoir pressure build-up during the cushion gas injection stage. However, by the end of hydrogen injection in the first cycle, the bottomhole pressures showed minimal differences among the three models. The total water production volumes were 3 _._ 55 × 10<sup>4</sup> , 3 _._ 44 × 10<sup>4</sup> , and 3 _._ 36 × 10<sup>4</sup> m<sup>3</sup> for the three models, 

showing only minor variations. This is because lower injection rates extend the injection duration, facilitate pressure diffusion that suppresses the water cone, and hence slows down the water production rate. 

To investigate the influence of cushion gas volume, two comparison models were developed. All baseline parameters remained constant except for the cushion gas injection duration, which was set at 30 and 150 days, respectively, while maintaining the same injection rate. The flow rates of various gas components and water are presented in Fig. 8. The results demonstrate that cushion gas volume significantly affects water production rates, showing a clear inverse relationship between these variables. At the end of the first cycle, the water production rates were 128.1, 78.5, and 52.2 m<sup>3</sup> /day, corresponding to increasing cushion gas volumes. Similarly, the total water production volumes throughout the simulation period were 4 _._ 52 × 10<sup>4</sup> , 3 _._ 44 × 10<sup>4</sup> , and 2 _._ 74 × 10<sup>4</sup> m<sup>3</sup> , following the same inverse relationship with cushion gas volumes. 

This phenomenon is directly related to reservoir pressure dynamics. The total cushion gas volume determines the final reservoir pressure during cushion gas stage and sets the pressure baseline for subsequent injection-withdrawal cycles. When comparing models with different cushion gas volumes but identical injection rates, the pressure build-up rates remain consistent across all models (Fig. 9). However, the reservoir 

14 

_International Journal of Hydrogen Energy 153 (2025) 150236_ 

_J. Liu et al._ 

**Fig. 16.** Gas injection-withdrawal rates and water production rate during storage cycles under varying withdrawal durations: (a) baseline model; (b) withdrawal duration extended by 3 days; (c) withdrawal duration extended by 5 days. 

pressures differ at the end of cushion gas injection, with lower cushion gas volumes resulting in lower reservoir pressures. These lower reservoir pressures persist throughout the entire simulation period, consequently leading to higher water production rates. Although cushion gas volumes varied between models, there was minimal impact on hydrogen purity. 

### _3.3. Impact of operational parameters during injection and withdrawal_ 

### _stage_ 

Gas injection and withdrawal cycles are primary operations of UHS. Associated design parameters that must be considered include the rates, duration and volumes of injection and withdrawal stages. The following simulations evaluate how these parameters influence water invasion behaviour. 

To evaluate the influence of working gas injection rates, comparison models were developed with injection rates at 5 × 10<sup>5</sup> and 2× 10<sup>6</sup> Sm<sup>3</sup> / day, which are 50 % and 200 % of the baseline rate. Total working gas injection volume in each cycle and other parameters were maintained 

consistent. The simulation results (Fig. 10) demonstrate that water production rates were comparable across all three models at the end of the withdrawal stage in the first cycle. However, in the subsequent cycles exhibited divergent behaviour. Models with lower injection rates showed accelerated decline in water production rates during later cycles. Fig. 11 illustrates the bottomhole pressure profiles under different injection rates. The results show that higher injection rates cause bottomhole pressure to rise quickly and reach a higher value at the end of the injection stage. However, by the end of the withdrawal stage, the bottomhole pressures across different models are nearly the same. 

To investigate the impact of working gas (hydrogen) withdrawal rates on water invasion, two comparison simulations were conducted using withdrawal rates at 5 × 10<sup>5</sup> and 2 × 10<sup>6</sup> Sm<sup>3</sup> /day, which are 50 % and 200 % of the baseline rate. Total withdrawal volume in each cycle and other operational parameters were maintained constant. The simulation results, as shown in Fig. 12, indicate that the withdrawal rate has a pronounced impact on the water production rate. This finding is consistent with the simulation results reported by Oldenburg et al. [39]. 

15 

_International Journal of Hydrogen Energy 153 (2025) 150236_ 

_J. Liu et al._ 

**Fig. 17.** Variation of bottomhole pressure (red line) over time under varying withdrawal durations: (a) baseline model; (b) withdrawal duration extended by 3 days; (c) withdrawal duration extended by 5 days. (For interpretation of the references to colour in this figure legend, the reader is referred to the Web version of this article.) 

Specifically, doubling the withdrawal rate (200 % of baseline) resulted in a proportional two-fold increase in the water production rate. This can be attributed to the stronger pressure response during the withdrawal stage in each cycle. As evidenced in Fig. 13, the pressure declines curves exhibit notably steeper gradients under elevated withdrawal rates, indicating accelerated reservoir pressure drop. Higher withdrawal rates consequently result in lower terminal pressures at the end of withdrawal stage in each cycle. 

The influence of cyclic gas volume on water invasion behaviour is presented in Fig. 14. In the comparison models, the injection and withdrawal periods were set to 60 and 120 days, respectively, while maintaining other operational parameters constant. Shorter durations lead to more frequent alternation between injection and withdrawal cycles. This study presents a comparative analysis from two aspects: the project operation duration and the number of cycles (Table 3). 

When comparing models with the same total operational duration (1530 days), larger working gas volumes lead to higher water production rates at the end of each withdrawal stage. However, the total water production volume varies only slightly across different cases. In contrast, when comparing models with the same number of cycles, water production rates show an inverse correlation with working gas volume. 

This is because, under constant cycle numbers, larger working gas volumes result in longer withdrawal durations, which in turn lead to greater cumulative water production. Additionally, the magnitude of reservoir pressure fluctuations is strongly dependent on the working gas volume. Larger volumes lead to a wider range of pressure variation (Fig. 15). This suggests that in practical operations, particular attention should be given to pressure management when handling large working gas volumes. 

During the cyclic injection-withdrawal stage, the injected gas is pure hydrogen, while the withdrawn gas is a mixture of hydrogen and natural gas. Although the surface volumes of the injected and withdrawn gas are equal, a portion of the hydrogen remains in the reservoir. Extending the withdrawal stage can extract additional hydrogen. To investigate its impact on water invasion, two comparison models were developed, with withdrawal durations extended by 3 and 5 days. The simulation results are shown in Fig. 16. At the end of the first cycle, the differences in water production rates between the comparison models and the baseline model are 5.7 m<sup>3</sup> /day and 7.2 m<sup>3</sup> /day, respectively. This occurs because extending the withdrawal stage lowers reservoir pressure in each cycle (Fig. 17). In the baseline model, the overall trend of the bottomhole pressure is upward. In the model with 5-day extended withdrawal 

16 

_International Journal of Hydrogen Energy 153 (2025) 150236_ 

_J. Liu et al.                                                                                                                                                                                                                                       International Journal of Hydrogen Energy_ 

**Fig. 18.** Sensitivity analysis of variable changes on the change ratio of water production Volume. (The red circle at coordinates (0,0) represents the baseline scenario, where both the input variables and water production volume are from the baseline model, serving as the reference point for comparing all parameter variations. The x-axis represents the percentage change of variables relative to their baseline parameters, ranging from − 100 % to +100 %. The y-axis shows the corresponding percentage change in water production volume compared to the baseline model.). (For interpretation of the references to colour in this figure legend, the reader is referred to the Web version of this article.) 

**Table 4** 

Parameters adopted in the simulation. 

|Scenario|Injection stage||Withdrawal stage||
|---|---|---|---|---|
||Rate (10<sup>6</sup> _m_<sup>3</sup>_/_<br>_day_)|Duration<br>(day)|Rate<br>(10<sup>6</sup> _m_<sup>3</sup>_/day_)|Duration<br>(day)|
|1|1.1|90|1|90|
|2|0.5|180|1|90|
|3|1|90|0.5|180|
|4|1|45|1|45|

duration, the overall trend is downward. This is because extending the withdrawal duration results in the underground volume of withdrawn gas exceeding that of the injected gas. While prolonging the withdrawal stage improves hydrogen recovery efficiency (89 %, 91 %, and 92.3 %), it also increases the risk of water invasion. 

### _3.4. Sensitivity analysis_ 

Based on the scenarios presented, parameters such as cushion gas injection rate and volume, as well as working gas injection/withdrawal rates, duration and volume, appear to influence the water production rate. This section further analyses the extent of this impact through a sensitivity study. 

Parameter values and simulation results in the baseline model were used as a reference. For each operational parameter to be studied, additional simulations were performed wherein the parameter was increased or decreased. Simulation results are shown in Fig. 18. Extending the withdrawal duration has the greatest impact on water production. A 7 % increase in withdrawal duration results in a 45 % increase in water production. The cushion gas injection volume shows a strong negative correlation with water production rate. When the cushion gas injection volume increases from − 66.7 % to +66.7 % relative to the baseline model, water production volume decreases from +30 % to − 20 %, demonstrating that higher cushion gas injection volumes lead to lower water production volume. The working gas volume shows a strong positive correlation with water production volume. Under same number of cycles, when the working gas volume increases from − 33.3 % to +33.3 % relative to the baseline model, water production volume increases from − 26.0 % to +20.7 %, demonstrating that higher working gas volumes lead to more water production volume. Optimizing the volume ratio between cushion gas and working gas can serve as an effective method to control water invasion. This finding is 

consistent with the conclusions reported by Heinemann et al. [33]. Working gas withdrawal rate, working gas injection rate, and cushion gas injection rate all show positive correlations with water volume, and their impacts decrease sequentially. 

### _3.5. Mitigation of water invasion once it occurs_ 

Previous studies primarily focused on analysing the impact of various design parameters on water invasion. Based on these studies, this section mainly studies how to optimize design parameters can effectively mitigate water invasion in the presence of water breakthrough. 

It is assumed that water invasion happened because of extending withdrawal duration. Based on the previous study, four strategies were adopted (Table 4). The first strategy is increasing the injection volume at injection stage within each gas injection-withdrawal cycle. The second and third strategies are to decrease injection and withdrawal rates in each injection and withdrawal stage in each gas injection-withdrawal cycle. The fourth strategy is to decrease working gas volume in each injection-withdrawal cycle. After applying these four strategies for five injection-withdrawal cycles, a high-rate extraction was conducted, and the results are shown in Fig. 19. Consistent with the sensitivity analysis above, all four strategies effectively prevent further deterioration of water production. Among them, increasing hydrogen injection during the injection stage proves to be the most effective in reducing the water production rate. 

### **4. Discussion** 

### _4.1. Key findings and implications_ 

This study provides an evaluation of how engineered operational parameters influence water invasion behaviour in UHS, using field data from the Ahuroa reservoir. 

Among cushion gas parameters, increasing the cushion gas volume was shown to effectively mitigate water invasion, as reported by previous studies [33,35,44,50]. However, this advantage must be weighed against its economic and storage implications. As noted by Lord et al. [51] cushion gas can account for nearly 50 % of the total investment in UHS projects based on depleted reservoirs. Furthermore, because the storage capacity of the reservoir is fixed, allocating more pore space to cushion gas inevitably reduces the volume available for hydrogen storage. This study shows that, for a given cushion gas volume, lowering the injection rate reduces water production by allowing more time for pressure diffusion within the reservoir. 

In the injection-withdrawal cycle, increasing working gas withdrawal rate tends to accelerate water invasion, consistent with the findings of Oldenburg et al. [39] and Lubon ´ & Tarkowski [44]. Although their studies were based on saline aquifers with higher reservoir permeability, a similar trend was observed. This suggests a potentially common mechanism underlying water invasion across different geological settings. In addition, we found that the working gas injection rate has the opposite effect: lowering the injection rate can help reduce the extent of water invasion. However, its influence is less pronounced compared to that of the withdrawal rate. 

While the working gas volume in each cycle has limited effect on cumulative water production over the same duration, decreasing the volume reduces the peak water production rate during each withdrawal stage and alleviates the demands on water treatment facilities. Moreover, larger working gas volumes result in a wider range of reservoir pressure fluctuations. While low pore pressure, which corresponds to high effective stress, may lead to reduced permeability and porosity due to compaction of the rock matrix [52,53]. According to the study by Malki et al. [54], reductions in permeability and porosity can lower the water production rate. 

In this study, hydrogen is used as the cushion gas in this study. 

17 

_International Journal of Hydrogen Energy 153 (2025) 150236_ 

_J. Liu et al.                                                                                                                                                                                                                                       International Journal of Hydrogen Energy_ 

**Fig. 19.** The impact of different design parameters on mitigating water production after water breakthrough: (a): injecting more hydrogen in the injection stage; (b): decrease injection rate; (c): decrease withdrawal rate; (d): decrease working gas volume). 

However, due to the presence of residual natural gas in the depleted reservoir, a certain amount of natural gas is inevitably co-produced during the withdrawal stage [30,54]. The dimensionless ratio of produced hydrogen volume to injected hydrogen volume is named hydrogen withdrawal efficiency [54]. Several studies have investigated the factors that influence hydrogen withdrawal efficiency, including reservoir properties and engineered parameters [20,55,56]. One potential approach to improving hydrogen withdrawal efficiency is to extend the withdrawal duration. However, our simulations show that prolonging the gas withdrawal duration markedly accelerates water production rates. So, in practical operations, it is essential to exercise caution once the cumulative volume of withdrawal gas approaches or equals the injected volume. 

Some studies have shown that optimizing well configurations can effectively mitigate water invasion [36,37,57]. Although well configuration optimization is not considered in this study, it should be taken 

into account in real-world operations. 

### _4.2. Limitations and future work_ 

In this study, only the effects of engineered operational parameters are considered. However, in practice, reservoir properties, include permeability, porosity, and gas-water relative permeability also influence water invasion, and can affect the degree to which engineered parameters impact reservoir performance. 

Gas–water relative permeability curves exhibit hysteresis, resulting in different flow behaviour during injection and withdrawal [43,58]. Neglecting hysteresis, as demonstrated by Bahrami et al. [59], can lead to an underestimation of water production. The impact of hysteresis was briefly analysed in the Supplementary Materials. However, due to the lack of accurate experimental data, this analysis should be considered as indicative only. 

18 

_International Journal of Hydrogen Energy 153 (2025) 150236_ 

_J. Liu et al._ 

In UHS, natural gas or carbon dioxide are commonly regarded as potential cushion gases [31]. However, due to differences in their physical properties compared to hydrogen, their relative permeability curves under the same reservoir conditions are different [59]. Bahrami et al. [59] found that the relative permeability of a mixed gas system (nitrogen and hydrogen) is lower than that of pure hydrogen, leading to restricted gas migration, increased near-wellbore pressure, and reduced water production. Therefore, to accurately predict water invasion behaviour, it is essential to account for the effect of the relative permeability of mixed gases. 

Due to the low solubility of hydrogen in water, gas dissolution is neglected in some studies of UHS [30,34,56]. However, when other gas is selected as the cushion gas, particularly carbon dioxide, the effect of gas solubility should be carefully considered [60]. The study by Izadi Amiri et al. [60] demonstrated that neglecting the solubility of cushion gas leads to an overestimation of water production rates. This is primarily because, during the production phase, dissolved cushion gas is released from the water, thereby reducing the water production rate. 

Biochemical and geochemical processes are also important research focuses in the field of UHS. Numerous studies have investigated their impacts on the performance of UHS systems [28,61,62]. Biochemical reactions may alter the composition of the stored gas. For instance, hydrogenotrophic methanogens can convert carbon dioxide to methane by oxidizing hydrogen [61,63], changing the underground gas composition and affecting gas–water flow behaviour. Moreover, bacteria can migrate with water, meaning that flow conditions during injection and withdrawal stages will influence the occurrence and extent of these reactions. Geochemical interactions, such as mineral dissolution or precipitation, may modify reservoir properties and further impact gas–water flow dynamics [61,64,65]. 

All of the above factors may influence the performance of water invasion. However, as this study is based on a real reservoir, some factors were omitted or simplified due to a lack of experimental data. Nonetheless, they should be carefully evaluated in practical UHS design. To improve the accuracy and robustness of simulation results, future work should focus on acquiring more comprehensive experimental data and integrating these physical, chemical, and biological processes into modelling frameworks. 

### **5. Conclusion** 

Underground hydrogen storage simulations were performed under various operation parameters to assess their impact on the timing of water invasion occurrence. The following results were obtained: 

- In UHS, due to the compressibility difference between hydrogen and natural gas, if the surface volume of produced mixed gas (consisting of hydrogen and natural gas) is equal to the surface volume of injected pure hydrogen, more pore space will be occupied by the gas. This factor will help mitigate the worsening of water invasion. 

- According to the simulation results, both the cushion gas volume and the gas withdrawal rate significantly influence the extent of water invasion. An increase in cushion gas volume mitigates water intrusion, while a decrease in the withdrawal rate also helps to suppress its severity. 

- During the injection-withdrawal cycle, the gas injection and withdrawal volumes positively influence the extent of water invasion, while the injection rate has minimal impact on the scale of water invasion. 

- Extending the withdrawal duration can enhance hydrogen recovery efficiency, however, it has the most significant impact on water invasion. 

The primary objective of this study is to investigate the relative influence of engineering parameters on water production, providing practical guidance for UHS designers. Due to the lack of experimental 

data, certain simplifications were made in this study. Future work should further explore the influence of relative permeability, particularly mixed gas relative permeability and hysteresis effects, on water invasion behavior. 

### **CRediT authorship contribution statement** 

**Jinjiang Liu:** Writing – original draft, Visualization, Software, Methodology. **David Dempsey:** Writing – review & editing, Supervision, Project administration, Methodology, Funding acquisition, Conceptualization. **Andy Nicol:** Supervision, Project administration, Funding acquisition. **Matt Parker:** Software, Resources, Data curation. **John Passmore:** Writing – review & editing. 

### **Data availability statement** 

Data will be made available on request. 

### **Funding** 

This work was supported by the New Zealand government under the MBIE contract UOCX2207 for the Endeavour research program “P ~~uh~~ iko Nuku ~~tu:~~ a green hydrogen geostorage battery in Taranaki”. 

### **Declaration of competing interest** 

The authors declare that they have no known competing financial interests or personal relationships that could have appeared to influence the work reported in this paper. 

### **Appendix A. Supplementary data** 

Supplementary data to this article can be found online at https://doi. org/10.1016/j.ijhydene.2025.150236. 

### **References** 

- [1] Gholami Mina Bahrami, Poletti Stephen, Staffell Iain. Wind, rain, fire and sun: towards zero carbon electricity for New Zealand. Energy Policy 2021;150:112109. https://doi.org/10.1016/j.enpol.2020.112109. 

- [2] Pimentel Pincelli I, Brent AC, Hinkley JT, Sutherland R. Scaling up solar and wind electricity: empirical modelling and a disruptive scenario for their deployments in Aotearoa New Zealand. J Roy Soc N Z 2024:1–23. https://doi.org/10.1080/ 03036758.2024.2381750. 

- [3] Pincelli Isabella Pimentel, Hinkley Jim, Brent Alan. Developing onshore wind farms in Aotearoa New Zealand: carbon and energy footprints. J Roy Soc N Z 2024: 1–23. https://doi.org/10.1080/03036758.2024.2344785. 

- [4] Shen X, Tang H, He W, Wang H, Li Y, Li D, Yu X, He F, Yuan Q. Study on the impact of renewable energy power generation transient characteristics on system stability in weak grid. J Phys Conf 2022;2166(1):1. https://doi.org/10.1088/1742-6596/ 2166/1/012054. 

- [5] Fei M, Zhu JZ. Uncertainty analysis in the power grid operation with renewable energy generations. IOP Conf Ser Earth Environ Sci 2021;701(1):1. https://doi. org/10.1088/1755-1315/701/1/012069. 

- [6] Nottage RA. Climate change adaptation in New Zealand: future scenarios and some 

   - sectoral perspectives. New Zealand Climate Change Centre; 2010. 

- [7] Ould Amrouche S, Rekioua D, Rekioua T, Bacha S. Overview of energy storage in renewable energy systems. Int J Hydrogen Energy 2016;41(45):45. https://doi. org/10.1016/j.ijhydene.2016.06.243. 

- [8] Chang SH, Rajuli MF. An overview of pure hydrogen production via electrolysis and hydrolysis. Int J Hydrogen Energy 2024;84:521–38. https://doi.org/10.1016/ j.ijhydene.2024.08.245. 

- [9] Samsatli S, Samsatli NJ. The role of renewable hydrogen and inter-seasonal storage in decarbonising heat – comprehensive optimisation of future renewable energy value chains. Appl Energy 2019;233–234:854–93. https://doi.org/10.1016/j. apenergy.2018.09.159. 

- [10] Kamran M, Turzynski M. Exploring hydrogen energy systems: a comprehensive ´ review of technologies, applications, prevailing trends, and associated challenges. J Energy Storage 2024;96:112601. https://doi.org/10.1016/j.est.2024.112601. 

- [11] Arsad AZ, Hannan MA, Al-Shetwi AQ, Mansur M, Muttaqi KM, Dong ZY, Blaabjerg F. Hydrogen energy storage integrated hybrid renewable energy systems: a review analysis for future research directions. Int J Hydrogen Energy 2022;47 (39):39. https://doi.org/10.1016/j.ijhydene.2022.03.208. 

- [12] Colbertaldo P, Agustin SB, Campanari S, Brouwer J. Impact of hydrogen energy storage on California electric power system: towards 100% renewable electricity. 

19 

_International Journal of Hydrogen Energy 153 (2025) 150236_ 

_J. Liu et al._ 

- Int J Hydrogen Energy 2019;44(19):19. https://doi.org/10.1016/j. [38] Sun Q, Tang H, Ruan H, Tang X, Zhang M. The use of a gravity-assisted-storageijhydene.2018.11.062. extraction protocol for hydrogen storage in saline aquifers. J Clean Prod 2023;413: 

- [13] Vatankhah Ghadim H, Peer RAM, Read EG, Haas J. How much hydrogen could we 137408. https://doi.org/10.1016/j.jclepro.2023.137408. Q1. need in New Zealand? Understanding the diverse hydrogen applications and their [39] Oldenburg CM, Finsterle S, Trautz RC. Water upconing in underground hydrogen regional mapping. J Roy Soc N Z 2024:1–20. https://doi.org/10.1080/ storage: sensitivity analysis to inform design of withdrawal. Transport Porous 03036758.2024.2365306. Q2. Media 2024;151(1):55–84. https://doi.org/10.1007/s11242-023-02033-0. Q3. 

- [14] Nicol A, Dempsey D, Yates E, Higgs K, Beggs M, Adam L. Underground hydrogen [40] Wang J, Liu H, Zhang J, Xie J. Lost gas mechanism and quantitative storage in the Taranaki region. 2022. New Zealand. characterization during injection and production of water-flooded sandstone 

- [15] Tek MR, editor. Underground storage of natural gas. Netherlands: Springer; 1989. underground gas storage. Energies 2018;11(2):272. https://doi.org/10.3390/ https://doi.org/10.1007/978-94-009-0993-9. en11020272. 

- [16] Zhang G, Li B, Zheng D, Ding G, Wei H, Qian P, Li C. Challenges to and proposals [41] Zheng D, Xu H, Wang J, Sun J, Zhao K, Li C, Shi L, Tang L. Key evaluation for underground gas storage (UGS) business in China. Nat Gas Ind B 2017;4(3):3. techniques in the process of gas reservoir being converted into underground gas https://doi.org/10.1016/j.ngib.2017.07.025. storage. Petrol Explor Dev 2017;44(5):5. https://doi.org/10.1016/S1876-3804(17) 

- [17] Zhang J, Tan Y, Zhang T, Yu K, Wang X, Zhao Q. Natural gas market and 30095-2. underground gas storage development in China. J Energy Storage 2020;29:101338. [42] Bagheri M, Mahani H, Ayatollahi S, Zivar D. Direct pore-scale simulation of the https://doi.org/10.1016/j.est.2020.101338. effect of capillary number and gas compressibility on cyclic underground hydrogen 

- [18] Poling BE, Prausnitz JM, O’Connell JP. Properties of gases and liquids. fifth ed. storage & production in heterogeneous aquifers. Adv Water Resour 2023;181: (fifth ed. McGraw-Hill Education; 2020. 104547. https://doi.org/10.1016/j.advwatres.2023.104547. 

- [19] Shoushtari S, Namdar H, Jafari A. Utilization of CO2 and N2 as cushion gas in [43] Bahrami M, Mahani H, Zivar D, Ayatollahi S. Microfluidic investigation of poreunderground gas storage process: a review. J Energy Storage 2023;67:107596. scale flow behavior and hysteresis in underground hydrogen storage in sandstones. https://doi.org/10.1016/j.est.2023.107596. J Energy Storage 2024;98:112959. https://doi.org/10.1016/j.est.2024.112959. 

- [20] Saeed M, Jadhawar P. Optimizing underground hydrogen storage in aquifers: the [44] Lubon K, Tarkowski R. Numerical simulation of hydrogen injection and withdrawal ´ impact of cushion gas type. Int J Hydrogen Energy 2023:S0360319923045445. to and from a deep aquifer in NW Poland. Int J Hydrogen Energy 2020;45(3): https://doi.org/10.1016/j.ijhydene.2023.08.352. Q2. 2068–83. https://doi.org/10.1016/j.ijhydene.2019.11.055. Q2. 

- [21] Malki ML, Chellal H, Mao S, Rasouli V, Mehana M. A critical review of [45] Fanchi JR. Principles of applied reservoir simulation. third ed. Elsevier Science & underground hydrogen storage: from fundamentals to applications, unveiling Technology; 2006. future frontiers in energy storage. Int J Hydrogen Energy 2024;79:1365–94. [46] Sheikhi S, Flynn MR. Can a hydrodynamic model predict the flow evolution of a https://doi.org/10.1016/j.ijhydene.2024.07.076. hydrogen plume in a depleted natural gas reservoir? Int J Hydrogen Energy 2024; 

- [22] Feldmann F, Hagemann B, Ganzer L, Panfilov M. Numerical simulation of 81:795–804. hydrodynamic and gas mixing processes in underground hydrogen storages. [47] Kunz O, Wagner W. The GERG-2008 wide-range equation of state for natural gases Environ Earth Sci 2016;75(16):16. https://doi.org/10.1007/s12665-016-5948-z. and other mixtures: an expansion of GERG-2004. J Chem Eng Data 2012;57(11): Q2/Q3. 3032–91. https://doi.org/10.1021/je300655b. 

- [23] Wang J, Wu R, Wei M, Bai B, Xie J, Li Y. A comprehensive review of site selection, [48] Lohrenz J, Bray BG, Clark CR. Calculating viscosities of reservoir fluids from their experiment and numerical simulation for underground hydrogen storage. Gas Sci compositions. J Petrol Technol 1964;16(10):1171–6. https://doi.org/10.2118/ Eng 2023;118:205105. https://doi.org/10.1016/j.jgsce.2023.205105. 915-PA. 

- [24] Hematpur H, Abdollahi R, Rostami S, Haghighi M, Blunt MJ. Review of [49] Safari A, Zeng L, Nguele R, Sugai Y, Sarmadivaleh M. Review on using the depleted underground hydrogen storage: concepts and challenges. Adv Geo-Energy Res gas reservoirs for the underground H2 storage: a case study in Niigata prefecture, 2023;7(2):2. https://doi.org/10.46690/ager.2023.02.05. Japan. Int J Hydrogen Energy 2023;48(28):28. https://doi.org/10.1016/j. 

- [25] Ab C, Rg B, Rl B, Mp H, Rooyakkers S. The mineral potential of New Zealand—Part ijhydene.2022.12.108. 1: overview of New Zealand’s mineral deposits and their resources. 2024. [50] Safari A, Sugai Y, Sarmadivaleh M, Imai M. Screening and ranking Japanese gas 

- [26] Higgs KE, Strogen DP, Nicol A, Dempsey D, Leith K, Bassett K, Reid C, Yates E, fields for underground H2 storage potential: impact of the reservoir drive Parker M, Bischoff A, Adam L, Rowe M. Prospectivity analysis for underground mechanism. J Energy Storage 2023;70:107679. https://doi.org/10.1016/j. hydrogen storage, Taranaki basin, Aotearoa New Zealand: a multi-criteria decisionest.2023.107679. making approach. Int J Hydrogen Energy 2024;71:1468–85. https://doi.org/ [51] Lord AS, Kobos PH, Borns DJ. Geologic storage of hydrogen: scaling up to meet city 10.1016/j.ijhydene.2024.05.098. transportation demands. Int J Hydrogen Energy 2014;39(28):15570–82. https:// 

- [27] Sarı E, Çiftçi E. A numerical investigation on the utilization of a depleted natural doi.org/10.1016/j.ijhydene.2014.07.121. gas field for seasonal hydrogen storage: a case study for Degirmenk˘ oy gas field. Int ¨ [52] Zhao J, Xiao W, Li M, Xiang Z, Li L, Wang J. The effective pressure law for J Hydrogen Energy 2024;51:219–28. https://doi.org/10.1016/j. permeability of clay-rich sandstones. Pet Sci 2011;8(2):194–9. https://doi.org/ ijhydene.2023.11.090. 10.1007/s12182-011-0134-0. 

- [28] Hellerschmied C, Schritter J, Waldmann N, Zaduryan AB, Rachbauer L, Scherr KE, [53] Walsh JB. Effect of pore pressure and confining pressure on fracture permeability. Andiappan A, Bauer S, Pichler M, Loibner AP. Hydrogen storage and geoInt J Rock Mech Min Sci Geomech Abstracts 1981;18(5):429–35. https://doi.org/ methanation in a depleted underground hydrocarbon reservoir. Nat Energy 2024. 10.1016/0148-9062(81)90006-1. https://doi.org/10.1038/s41560-024-01458-1. [54] Malki ML, Chen B, Mao S, Chen F, Mehana M. OPERATE–H2: a tool for optimizing 

- [29] Zamehrian M, Sedaee B. Underground hydrogen storage in a partially depleted gas underground hydrogen storage. J Energy Storage 2024;90:111715. https://doi. condensate reservoir: influence of cushion gas. J Petrol Sci Eng 2022;212:110304. org/10.1016/j.est.2024.111715. https://doi.org/10.1016/j.petrol.2022.110304. [55] Jadhawar P, Saeed M. Optimizing the operational efficiency of the underground 

- [30] Chai M, Chen Z, Nourozieh H, Yang M. Numerical simulation of large-scale hydrogen storage scheme in a deep North Sea aquifer through compositional seasonal hydrogen storage in an anticline aquifer: a case study capturing hydrogen simulations. J Energy Storage 2023;73:108832. https://doi.org/10.1016/j. interactions and cushion gas injection. Appl Energy 2023;334:120655. https://doi. est.2023.108832. org/10.1016/j.apenergy.2023.120655. Q1. [56] Bi Z, Guo Y, Yang C, Yang H, Wang L, He Y, Guo W. Effects of multiple operational 

- [31] Kanaani M, Sedaee B, Asadian-Pakfar M. Role of cushion gas on underground parameters on recovery efficiency of underground hydrogen storage in aquifer. Int hydrogen storage in depleted oil reservoirs. J Energy Storage 2022;45:103783. J Hydrogen Energy 2024;93:416–29. https://doi.org/10.1016/j. https://doi.org/10.1016/j.est.2021.103783. Q1. ijhydene.2024.10.403. 

- [32] Lysyy M, Fernø M, Ersland G. Seasonal hydrogen storage in a depleted oil and gas [57] Harati S, Rezaei Gomari S, Gasanzade F, Bauer S, Pak T, Orr C. Underground field. Int J Hydrogen Energy 2021;46(49):25160–74. https://doi.org/10.1016/j. hydrogen storage to balance seasonal variations in energy demand: impact of well ijhydene.2021.05.030. configuration on storage performance in deep saline aquifers. Int J Hydrogen 

- [33] Heinemann N, Alcalde J, Miocic JM, Hangx SJT, Kallmeyer J, Ostertag-Henning C, Energy 2023;48(69):26894–910. https://doi.org/10.1016/j. Hassanpouryouzband A, Thaysen EM, Strobel GJ, Schmidt-Hattenberger C, ijhydene.2023.03.363. 

- [33] Heinemann N, Alcalde J, Miocic JM, Hangx SJT, Kallmeyer J, Ostertag-Henning C, Hassanpouryouzband A, Thaysen EM, Strobel GJ, Schmidt-Hattenberger C, Edlmann K, Wilkinson M, Bentham M, Stuart Haszeldine R, Carbonell R, Rudloff A. Enabling large-scale hydrogen storage in porous media – the scientific challenges. Energy Environ Sci 2021;14(2):2. https://doi.org/10.1039/D0EE03536J. Q1. 

   - [58] Lysyy M, Føyen T, Johannesen EB, Fernø M, Ersland G. Hydrogen relative permeability hysteresis in underground storage. Geophys Res Lett 2022;49(17):Q1. https://doi.org/10.1029/2022GL100364. 

   - [59] Bahrami M, Izadi Amiri E, Zivar D, Ayatollahi S, Mahani H. Challenges in the simulation of underground hydrogen storage: a review of relative permeability and hysteresis in hydrogen-water system. J Energy Storage 2023;73:108886. https:// doi.org/10.1016/j.est.2023.108886. Q2. 

- [34] Abdellatif M, Hashemi M, Azizmohammadi S. Large-scale underground hydrogen storage: integrated modeling of reservoir-wellbore system. Int J Hydrogen Energy 2023;48(50):19160–71. https://doi.org/10.1016/j.ijhydene.2023.01.227. Q2. 

- [35] Lubon K, Tarkowski R. The influence of the first filling period length and reservoir ´ level depth on the operation of underground hydrogen storage in a deep aquifer. Int J Hydrogen Energy 2023;48(3):1024–42. https://doi.org/10.1016/j. ijhydene.2022.09.284. Q2. 

   - [60] Izadi Amiri I, Zivar D, Ayatollahi S, Mahani H. The effect of gas solubility on the selection of cushion gas for underground hydrogen storage in aquifers. J Energy Storage 2024;80:110264. https://doi.org/10.1016/j.est.2023.110264. 

   - [61] Jahanbani Veshareh M, Thaysen EM, Nick HM. Feasibility of hydrogen storage in depleted hydrocarbon chalk reservoirs: assessment of biochemical and chemical effects. Appl Energy 2022;323:119575. https://doi.org/10.1016/j. apenergy.2022.119575. 

- [36] Sainz-Garcia A, Abarca E, Rubi V, Grandia F. Assessment of feasible strategies for seasonal underground hydrogen storage in a saline aquifer. Int J Hydrogen Energy 2017;42(26):16657–66. https://doi.org/10.1016/j.ijhydene.2017.05.076. 

- [37] Zhang H, Zhang Y, Arif M. Impact of formation conditions and well configurations on underground hydrogen storage. Int J Hydrogen Energy 2024;70:288–300. https://doi.org/10.1016/j.ijhydene.2024.05.208. 

- [62] Gelencs´er O, Arvai Cs, Mika LT, Breitner D, LeClair D, Szab<sup>´</sup> o Cs, Falus Gy, Szab´ o- ´ Krausz Z. Effect of hydrogen on calcite reactivity in sandstone reservoirs: experimental results compared to geochemical modeling predictions. J Energy Storage 2023;61:106737. https://doi.org/10.1016/j.est.2023.106737. 

20 

_International Journal of Hydrogen Energy 153 (2025) 150236_ 

_J. Liu et al.                                                                                                                                                                                                                                       International Journal of Hydrogen Energy_ 

- [63] Thaysen EM, McMahon S, Strobel GJ, Butler IB, Ngwenya BT, Heinemann N, Wilkinson M, Hassanpouryouzband A, McDermott CI, Edlmann K. Estimating microbial growth and hydrogen consumption in hydrogen storage in porous media. Renew Sustain Energy Rev 2021;151:111481. https://doi.org/10.1016/j. rser.2021.111481. 

- [64] Cheng C, Busch B, Kontny A, Hilgers C. Underground hydrogen storage in sandstone reservoirs: effects of geochemical reactivity of hydrogen on reservoir 

performance. Int J Hydrogen Energy 2025;105:492–504. https://doi.org/10.1016/ 

j.ijhydene.2025.01.330. 

- [65] Mwakipunda GC, Franck Kouassi AK, Ayimadu ET, Komba NA, Nadege MN, Mgimba MM, Ngata MR, Yu L. Underground hydrogen storage in geological formations: a review. J Rock Mech Geotech Eng 2025:S1674775525001696. https://doi.org/10.1016/j.jrmge.2025.02.014. 

21 

