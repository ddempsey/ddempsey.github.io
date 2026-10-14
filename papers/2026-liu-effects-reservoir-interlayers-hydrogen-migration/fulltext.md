# Effects of reservoir interlayers on hydrogen migration and distribution in underground hydrogen storage

**Authors:** Jinjiang Liu, David Dempsey, Andy Nicol, Matt Parker, John Passmore  
**Published in:** International Journal of Hydrogen Energy (2026)  
**DOI (version of record):** https://doi.org/10.1016/j.ijhydene.2026.153704  
**This copy:** Published version. Text extracted from the PDF at https://ddempsey.github.io/papers/2026-liu-effects-reservoir-interlayers-hydrogen-migration/liu2026-effects-reservoir-interlayers.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** Published version, reproduced under the CC BY 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1016/j.ijhydene.2026.153704  
**Licence:** CC BY 4.0 http://creativecommons.org/licenses/by/4.0/  

---
International Journal of Hydrogen Energy 211 (2026) 153704 

Contents lists available at ScienceDirect 

International Journal of Hydrogen Energy 

journal homepage: www.elsevier.com/locate/he 

# Effects of reservoir interlayers on hydrogen migration and distribution in underground hydrogen storage 

Jinjiang Liu<sup>a,*</sup> , David Dempsey<sup>a</sup> , Andy Nicol<sup>b</sup> , Matt Parker<sup>b</sup> , John Passmore<sup>c</sup> 

a _Department of Civil and Environmental Engineering, University of Canterbury, Christchurch, 8041, New Zealand_ b _School of Earth and Environment, University of Canterbury, Christchurch, 8041, New Zealand_ c _Firstgas Limited, New Plymouth, New Zealand_ 

|A R T I C L E I N F O|A B S T R A C T|
|---|---|
|_Keywords:_<br>Interlayer<br>OpenGoSim<br>Underground hydrogen storage<br>Hydrogen recovery efficiency<br>Molecular diffusion|With the rapid expansion of renewable energy deployment, underground hydrogen storage (UHS) has emerged as<br>a promising large-scale storage option to smooth seasonal fluctuations in electricity supply. However, current<br>geological assessments for UHS primarily focus on reservoir properties such as porosity and permeability, while<br>overlooking the influence of interlayers. To address this research gap, this study systematically investigates how<br>interlayer characteristics, including permeability, thickness, and geometry, affect hydrogen recovery efficiency<br>and the extent of unrecoverable hydrogen. Numerical simulations were conducted using OpenGoSim (OGS)<br>software, beginning with a box model and extending to a realistic geological model based on the Ahuroa gas<br>storage site.<br>Simulation results reveal that, under fully perforated conditions, lower interlayer permeability impedes up-<br>ward hydrogen migration, thereby reducing the impact of gravity override and enhancing hydrogen recovery<br>efficiency. With decreasing interlayer permeability, hydrogen transport into the interlayer shifts from advection-<br>dominated transport to diffusion-dominated transport, resulting in greater hydrogen volume than predicted by a<br>model that neglects molecular diffusion. The study further demonstrates that optimizing well configuration<br>should consider interlayer properties to maximize recovery efficiency. Consistency between the box model and<br>the realistic geological model supports the generality of the findings.<br>By integrating interlayer characteristics into site evaluation, this work enhances the accuracy of hydrogen<br>recovery efficiency evaluation and advances UHS assessment.|

## **1. Introduction** 

The Paris Agreement, endorsed by 196 countries, aims to limit the global temperature rise to 1.5<sup>◦</sup> C above pre-industrial levels [1,2]. Achieving this target requires reducing carbon emissions by 45 % by 2030 and achieving net-zero emissions by 2050 [3]. Consequently, the share of fossil fuels in the energy system should decline, while the demand for renewable energy sources such as wind and solar is expected to increase [4]. 

One limitation of renewable energy is the seasonal variability of its supply [5,6], which leads to periods of oversupply and shortages. Hydrogen, as an energy carrier, offers a possible solution to this supply-demand mismatch. Surplus renewable energy can be converted into hydrogen and stored for subsequent electricity generation [7,8]. To address seasonal variations, underground storage, particularly in 

depleted reservoirs, is considered the preferred option. It combines large storage capacity, wide geographical distribution, existing infrastructure from prior gas production, and proven geological sealing capability [9–11]. 

Depleted reservoirs, having been exploited for many years, exhibit lower pressures than their original states. To utilize such reservoirs for underground storage, an initial injection of cushion gas is required to restore the reservoir pressure. In underground gas storage (UGS), cushion gas has commonly been natural gas, identical to working gas. However, in UHS, as hydrogen is relatively expensive, more economical alternatives such as natural gas, carbon dioxide, or nitrogen may be chosen as the cushion gas [11–14]. During the withdrawal stage, a portion of cushion gas would be co-produced with hydrogen [15]. When the injected and withdrawn gas volumes are kept equal to prevent excessive pressure decline, the co-production of cushion gas leads to a 

* Corresponding author. 

_E-mail address:_ jinjiang.liu@pg.canterbury.ac.nz (J. Liu). 

https://doi.org/10.1016/j.ijhydene.2026.153704 

Received 10 November 2025; Received in revised form 22 January 2026; Accepted 24 January 2026 

0360-3199/© 2026 The Authors. Published by Elsevier Ltd on behalf of Hydrogen Energy Publications LLC. This is an open access article under the CC BY license ( http://creativecommons.org/licenses/by/4.0/ ). 

_International Journal of Hydrogen Energy 211 (2026) 153704_ 

_J. Liu et al.                                                                                                                                                                                                                                       International Journal of Hydrogen Energy_ 

reduction in hydrogen recovery efficiency (defined as the ratio of the volume of hydrogen withdrawn to that of hydrogen injected) [16]. In addition, compared with these common cushion gases, hydrogen possesses a lower density [17,18]. The density contrast enhances buoyancy forces, promoting gravity override and thereby reducing hydrogen recovery efficiency [19–21]. 

Sedimentary formations often consist of multiple layers with different permeabilities [22]. Such permeability contrasts between layers influence gas flow within multilayered reservoirs [23–26]. In the context of UHS, where multiple gas components coexist, these contrasts can also affect gas mixing and distribution. Arekhov et al. [27] and Reijnen-Mooij et al. [28] investigated the influence of permeability contrasts between geological layers on hydrogen purity in UHS. Both studies found that permeability contrasts intensify hydrogen–methane mixing in UHS, leading to reduced hydrogen purity during withdrawal stage. 

In UHS, the presence of multiple gas components causes gas flow in porous media to involve not only advective flow, but also molecular diffusion [29]. Molecular diffusion is driven by the concentration gradient and is a comparatively slow process compared to advection [30]. Molecular diffusion includes gas-phase molecular diffusion (gaseous components) and liquid-phase molecular diffusion (molecular diffusion of dissolved gas in the aqueous phase) [29,31]. The diffusion coefficient for gas–phase molecular diffusion is generally higher than that for liquid-phase molecular diffusion [17]. Arekhov et al. [27] investigated the effect of gas–phase molecular diffusion on hydrogen recovery efficiency in UHS. They found that ignoring molecular diffusion can lead to an overestimation of the hydrogen recovery factor. Hemme and Van Berk [32] investigated the risk of gas leakage through caprock through diffusion. Their one-dimensional simulations revealed that the loss of aqueous hydrogen due to gas-liquid diffusion is negligible because the process is extremely slow. 

Previous studies on UHS in multilayered reservoirs have mainly focused on the influence of layer permeability contrasts on gas flow and mixing [27,28]. However, the influence of low-permeability interlayers has received little attention, especially under conditions where the permeabilities of individual layers are similar. Although these interlayers do not influence the production capacity of individual layers, they may impede upward gas migration in such reservoirs, thereby affecting the spatial distribution of hydrogen and cushion gas. Moreover, hydrogen migration into low-permeability interlayers driven by molecular diffusion has received limited attention, despite its potential to increase unrecoverable hydrogen. 

To address this gap, a series of simulations were performed using a box model to systematically evaluate the impact of interlayer properties, such as permeability, thickness, and geometry, on hydrogen recovery efficiency. These findings were subsequently validated in a realistic geological model of the Ahuroa gas field. 

## **2. Model setup** 

## _2.1. Governing equations_ 

The governing mass conservation equations used in the model are 

[33]: 

where ∅ is porosity, dimensionless; _np_ is the number of phases; j is an index denoting the phase, _j_ = 1⋯ _np_ ; _nc_ is the number of components; _i_ is an index denoting the component, _i_ = 1⋯ _nc_ ; _xi,j_ is the mole fraction of component _i_ in phase _j_ , dimensionless; _Sj_ is the saturation of phase _j_ , dimensionless; _ηj_ is the molar density of phase _j,_ mol _/_ m<sup>3</sup> ; **uj** is the flow velocity of phase _j_ , m _/_ s; _Dj_ is the diffusion coefficient of phase _j_ , m<sup>2</sup> _/_ s; _qj_ 

is the source/sink term of phase j per bulk volume, mol _/_ ( m<sup>3</sup> ⋅s). 

The velocity of phase _j_ in the porous media is given by Darcy's equation: 

where _k_ is the absolute permeability, m<sup>2</sup> ; _krj_ is the relative permeability of phase _j_ ; _μj_ is viscosity, Pa _._ s; _Pj_ is fluid pressure of phase _j_ , MPa; _ρj_ is the mass density of phase _j,_ kg _/_ m<sup>3</sup> ; _g_ is the gravitational constant, m _/_ s<sup>2</sup> ; **z** ̂ is a unit vector in the direction of gravity. 

In this study, the fluid rate between the wellbore and the reservoir is computed using the Peaceman formulation [34]. For wells completed across multiple layers, a multilayer well model is employed to distribute the total injection/production rate among individual completions. In this model, the allocation is governed by both transmissibility and phase mobility. Further details of the formulation and implementation can be found in Ref. [35]. 

The density and viscosity of the gas mixture are given as follows: 

where _x_ is mole fraction of different gas components, and _a, b_ are the two gas components (natural gas and hydrogen). 

In this study, biochemical and chemical reactions that can affect gas purity and flow behavior within the reservoir [36–38], were not considered. The magnitude of these effects is strongly site-specific, depending on bacterial abundance and mineralogical composition. As there is no related experimental data for the Ahuroa field and some previous studies indicate that these reactions lead to only negligible to small hydrogen losses [39,40], their impact is not accounted for in this study. 

## _2.2. Fluid model_ 

In this study, only the gas and aqueous phases are considered. Natural gas (molar composition: 94.0 % CH4, 4.5 % N2, and 1.5 % CO2) is treated as cushion gas, so the gas phase comprises two components: hydrogen and natural gas. The density and enthalpy of hydrogen and natural gas are calculated using the GERG 2008 equation of state [41]. The viscosity of hydrogen and natural gas are calculated using the Lohrenz-Bray-Clark method [42] and a residual entropy method respectively [43]. 

Gas and water relative permeability curves were calculated based on the modified Corey relative permeability model [44]: 

where _krw_ is the relative permeability of water; _krw,max_ is the maximum relative permeability for water; _Sw_ is water saturation; _Swr_ is residual water saturation; _krg_ is the relative permeability of gas; _krg,max_ is the maximum relative permeability for gas; _Sg_ is gas saturation; _Sgr_ is residual gas saturation; _nw_ is water exponent; _ng_ is gas exponent. The model input parameters and the corresponding curves used in this study are provided in Table 1 and Fig. S1 (Supplementary Material). 

In this study, hydrogen is assumed to only exist in the gas phase, and dissolution of hydrogen into brine is neglected, as hydrogen has relatively low solubility compared with other commonly studied underground gases, such as carbon dioxide or methane [15]. Previous studies have shown that hydrogen dissolution has a limited influence on gas-phase migration and that dissolution-induced hydrogen loss is minor 

2 

_International Journal of Hydrogen Energy 211 (2026) 153704_ 

_J. Liu et al._ 

**Table 1** 

Parameters input in the box model. 

|Parameters|Unit|Value|
|---|---|---|
|Numbers of layers|Dimensionless|4|
|Thickness of layers|m|15|
|Reservoir permeability|mD|100|
|Interlayer permeability|mD|10<sup>–3</sup>|
|Reservoir porosity|Dimensionless|0.15|
|Interlayer porosity|Dimensionless|0.1|
|Initial pressure|MPa|17|
|Initial temperature|◦C|70|
|Gas molecular diffusion [17]|m<sup>2</sup>/s|2×<br>10<sup>−5</sup>|
|Residual water saturation|Dimensionless|0.2|
|Residual gas saturation<br>i|Dimensionless|0.05|
|Water exponent for modified Brooks-Corey functions<br>i|Dimensionless|2.5|
|i<br>Gas exponent for modified Brooks-Corey functions<br>i|Dimensionless|3|
|i<br>Maximum relative permeability for water in modified|Dimensionless|1|
|i<br>Brooks-Corey functions<br>i|||
|Maximum relative permeability for gas in modified<br>Brooks-Corey functions|Dimensionless|1|

[20]. In addition, because of the low solubility of hydrogen in brine and the small molecular diffusivity in the aqueous phase, liquid-phase diffusion is neglected in this study, and only gas-phase molecular diffusion is considered [27,32]. 

Mechanical dispersion and viscous fingering are two mechanisms that may influence gas mixing in UHS. Mechanical dispersion depends on flow velocity and pore-scale heterogeneity of the porous medium [45], while viscous fingering arises from viscosity contrasts between displacing and displaced fluids and is also influenced by flow velocity [46]. In the low-permeability interlayers, gas velocities are expected to be small, so both effects are likely to be limited. In addition, mechanical dispersion remains highly uncertain at the reservoir scale, especially with respect to field-scale dispersion coefficients. For these reasons, mechanical dispersion is not included in this study. Regarding viscous fingering, at the macroscopic scale, viscosity effects relevant to viscous fingering are represented through the viscosity term in the continuum formulation of Darcy's law. However, accurately resolving finger-scale instabilities typically requires highly refined grids and sufficiently small time steps [47,48], which is computationally impractical for the reservoir-scale simulations performed in this study. 

Capillary pressure is defined as the pressure difference between the non-wetting and wetting phases [33], and is influenced by pore-throat size, with smaller pore throats (typically associated with low-permeability media) tending to produce higher capillary pressures [49]. If the rock is gas-saturated, capillary pressure is expected to have a limited influence on gas migration because capillary effects mainly act in two-phase regions associated with gas–water displacement. Conversely, if the rock is fully water-saturated, gas migration into the interlayer is already strongly restricted. Including capillary pressure would further inhibit gas entry and is unlikely to affect our simulation results. Accordingly, capillary pressure is neglected in this study. 

## _2.3. Numerical model_ 

Many software packages have been employed for simulating multicomponent flow during UHS, including commercial simulators such as Eclipse [50], CMG-GEM [51], COMSOL [52], and research-oriented open-source frameworks such as MATLAB Reservoir Simulation Toolbox (MRST) [53] and DuMu<sup>x</sup> [30]. These tools have been used to investigate hydrogen migration, mixing with cushion gas, chemical reaction, and leakage in UHS. 

In this study, all simulations are performed with the reservoir simulator Cirrus (formerly referred to as PFLOTRAN-OGS), developed by OpenGoSim. Cirrus is designed for multiphase, multicomponent flow and transport in porous media and is built on the open-source PFLOTRAN framework [54]. It employs a cell-centred finite-volume 

formulation on structured and unstructured grids. Model setups, including the grid, rock and fluid properties, and operating conditions, are defined via text-based input files. The code is parallelized and can be executed on both Windows and Ubuntu platforms for efficient large-scale simulations. In Cirrus, spatial discretization uses a two-point flux approximation, and time integration is performed with a first-order fully implicit scheme. The resulting nonlinear algebraic system is solved using a Newton–Raphson method. 

Cirrus has been widely used in studies of subsurface gas storage, including applications to carbon dioxide sequestration and underground hydrogen storage. Sheikhi and Flynn [55] investigated hydrogen migration and mixing in a depleted gas reservoir containing a low permeability interlayer. Compositional simulations were performed using Cirrus and CMG, and the two simulators produced closely consistent results. Further methodological details and validation benchmarks are provided in Refs. [45,56]. 

## _2.4. Spatial discretization_ 

In prior simulation studies, some employ simplified models [50,51, 53], whereas others use realistic reservoir-scale models [30,52,57]. In this study, we adopt a two-stage modelling strategy: a simplified model is first used to develop generalizable insights and to isolate key mechanisms, and the main findings are then verified in a more realistic geological model to demonstrate their robustness under reservoir-scale conditions. 

The simplified model represents a reservoir with a top depth of 2000 m and dimensions of 1000 × 1000 × 66 m<sup>3</sup> . The grid size is 20 m × 20 m in the horizontal direction and 3 m in the vertical direction. The reservoir is composed of four homogeneous sandstone layers, each 15 m thick, separated by interlayers (Fig. 1). It is bound by no-flow conditions on all six faces. A sensitivity study on grid size is presented in Supplementary Material, which indicates that the current grid resolution is sufficient to accurately capture both Darcy-scale advective transport and the diffusion-driven transport analyzed in this study. 

## _2.5. Initialization_ 

The permeability and porosity of sandstone layers are 100 mD and 15 %, respectively, while those of interlayers are 10<sup>−3</sup> mD and 10 %. These parameters are consistent with sandstones sampled from the Ahuroa natural gas field in New Zealand [57]. The initial reservoir temperature and pressure are 70<sup>◦</sup> C and 17 MPa. A single well located at the center of the reservoir is considered in the simulation. The well is perforated across all sandstone layers, while the interlayers remain unperforated. 

The relative permeability curves were calculated using the BrooksCorey functions, with the specific parameters detailed in Table 1 Additional parameters used in the simulation are also detailed in Table 1. 

## _2.6. Simulation setup_ 

The first step of the simulation was injecting natural gas as cushion gas. During this stage, gas was injected at a rate of 5 × 10<sup>5</sup> Sm<sup>3</sup> /day for 160 days (Sm<sup>3</sup> : standard cubic meters at 15<sup>◦</sup> C and 1 atm). Following cushion gas injection, ten consecutive injection-withdrawal cycles were performed. Each cycle comprised a 90-day injection stage followed by a 90-day withdrawal stage. Injection and withdrawal rates are 1 × 10<sup>6</sup> Sm<sup>3</sup> /day (Fig. 2). During the injection stage, pure hydrogen was injected into the reservoir. During the withdrawal stage, the withdrawn gas consisted of a mixture of hydrogen and natural gas, with its composition varying temporally based on the hydrogen recovery and the extent of gas mixing in the reservoir. 

Through the injection-withdrawal cycles, bottomhole pressure (BHP) 

3 

_International Journal of Hydrogen Energy 211 (2026) 153704_ 

**Fig. 1.** Schematic diagram of multi-layer box model. Model regions are schematic and not drawn to scale. 

**Fig. 2.** Injection and withdrawal rates at different stages in the baseline model (Gas rate _>_ 0: Injection, Gas rate _<_ 0: Withdrawal). 

was maintained between 16 and 24 MPa. The injection rate would be reduced when the BHP approached the maximum allowable pressure (24 MPa), while the withdrawal rate would be adjusted downward during the withdrawal stage as the BHP approached the minimum allowable pressure (16 MPa). 

To investigate the impact of interlayers on hydrogen migration and recovery efficiency in UHS, various comparison models were developed. In these models, all parameters remain identical to those of the baseline model, except for those under investigation. Investigated variables are described in Table 2. 

## **3. Results** 

In this section, we present the simulation results from the baseline and comparison models. By comparing these models, we investigate the influence of interlayer characteristics on hydrogen recovery efficiency. 

## _3.1. Impact of interlayer permeability and thickness_ 

To evaluate the impact of interlayer permeability on UHS performance, comparison models were established with interlayer permeabilities ranging from 10<sup>−4</sup> to 1 mD (10<sup>−4</sup> , 10<sup>−3</sup> , 10<sup>−2</sup> , 10<sup>−1</sup> , and 1 mD), while maintaining all other parameters consistent with the baseline. Fig. 3 illustrates the relationship between interlayer permeability and final hydrogen recovery efficiency. When interlayer permeability is greater than 10<sup>−2</sup> mD, hydrogen recovery efficiency decreases as permeability increases. Conversely, below it, recovery efficiency remains relatively stable. 

This phenomenon can be attributed to the fundamental mechanisms governing hydrogen migration within the reservoir. When interlayer permeability is relatively high (approximately 1 mD), hydrogen preferentially migrates upward through permeable interlayers as a result of its buoyancy. This vertical movement can result in non-uniform gas 

4 

_International Journal of Hydrogen Energy 211 (2026) 153704_ 

_J. Liu et al._ 

**Table 2** 

Summary of simulation parameters and scenarios. 

|Parameter|Description|
|---|---|
|Interlayer<br>permeability<br>Molecular diffusion|The interlayer permeability was assigned values of 1, 10<sup>−1</sup>,<br>10<sup>−2</sup>, 10<sup>−3</sup>, and 10<sup>−4 </sup>mD to evaluate its effect on UHS.<br>For interlayer permeability values of 10<sup>−1</sup>, 10<sup>−3</sup>, and 10<sup>−9 </sup><br>mD, the influence of molecular diffusion was evaluated by<br>comparing simulation results with and without molecular<br>diffusion.<br>For interlayer permeability values of 10<sup>−1</sup>, 10<sup>−3</sup>, 10<sup>−9 </sup>mD,<br>the influence of interlayer thickness was assessed by<br>comparing simulation results for 0.5, 2, and 5 m thick<br>interlayers.|
|Interlayer lateral<br>extent<br>i|The lateral extents of the interlayers on one side are 30, 70,<br>130, 190, and 240 m beyond which the interlayers pinch<br>out.<br>i|
|Well configuration<br>design|Two well configuration scenarios were considered: (1)<br>selective perforation of the top layer only, and (2) full<br>perforation of all layers.|

distribution and reduced sweep efficiency during withdrawal. As interlayer permeability decreases, vertical hydrogen migration becomes increasingly restricted, thereby promoting lateral flow within individual layers (Fig. 4). Fig. 5 illustrates hydrogen purity in each layer across cycles under varying interlayer permeabilities. Hydrogen purity represents the amount of withdrawal hydrogen out of the total withdrawal gas [16]. With decreasing interlayer permeability, the difference in hydrogen purity between the first and the fourth layer decreases, indicating a more uniform vertical distribution of hydrogen. 

Fig. 6 illustrates the hydrogen distribution and recovery efficiency under varying interlayer thicknesses and permeabilities at the end of 

simulation. Hydrogen volume includes both mobile hydrogen and hydrogen trapped as residual gas. Under varying interlayer thickness, hydrogen recovery efficiency consistently improves with decreasing interlayer permeability. However, the overall influence of permeability diminishes as interlayer thickness increases. Specifically, the efficiency difference between the 1 mD and 10<sup>−4</sup> mD cases decreases from 11 % to 7 % as the interlayer thickness increases from 0.5 m to 5 m. By contrast, the efficiency difference between the 10<sup>−2</sup> mD and 10<sup>−4</sup> mD cases remains negligible across all interlayer thicknesses considered, indicating that once the interlayer permeability is sufficiently low, further reductions have little additional impact on hydrogen recovery efficiency. Furthermore, at the end of the simulation, increasing interlayer thickness leads to a larger hydrogen volume within the interlayers and a higher proportion of this interlayer hydrogen relative to the total residual hydrogen in the main reservoir layers. These results indicate that even in low-permeability interlayers, the hydrogen volume in the interlayer becomes non-negligible when the interlayer is sufficiently thick. 

## _3.2. Impact of molecular diffusion_ 

Hydrogen enters the interlayer through two primary mechanisms: advection (Darcy flow) and molecular diffusion (Fig. 7). In this study, hydrogen solubility in the brine is not considered. Therefore, only gas–gas diffusion is taken into account. Fig. 8 presents the standard volumes (in Sm<sup>3</sup> ) of hydrogen and natural gas within the interlayer under varying interlayer permeability conditions (10<sup>−1</sup> , 10<sup>−3</sup> , and 10<sup>−9</sup> mD). The 10<sup>−9</sup> mD interlayer permeability is treated as a limiting case in which advective flow is extremely slow. While Darcy's law may be less 

**Fig. 3.** Hydrogen recovery efficiency under varying interlayer permeability: Black: 1 mD; Red: 10<sup>−1</sup> mD; Blue: 10<sup>−2</sup> mD; Green: 10<sup>−3</sup> mD; Purple: 10<sup>−4</sup> mD. (For interpretation of the references to colour in this figure legend, the reader is referred to the Web version of this article.) 

**Fig. 4.** Distribution of hydrogen mole fraction in the gas phase under varying interlayer permeabilities: (a) k = 1 mD; (b) k = 10<sup>−1</sup> mD; (c) k = 10<sup>−2</sup> mD; (d) k = 10<sup>−3</sup> mD. 

5 

_International Journal of Hydrogen Energy 211 (2026) 153704_ 

_J. Liu et al.                                                                                                                                                                                                                                       International Journal of Hydrogen Energy_ 

**Fig. 5.** Hydrogen purity in each layer across cycles under varying interlayer permeability: (a): 1 mD; (b): 10<sup>−1</sup> mD; (c): 10<sup>−2</sup> mD; (d): 10<sup>−3</sup> mD. The four bars represent layers arranged vertically from top to bottom. Red represents natural gas, blue represents hydrogen. (For interpretation of the references to colour in this figure legend, the reader is referred to the Web version of this article.) 

**Fig. 6.** Hydrogen volumes in the reservoir (excluding interlayers) and in the interlayer, and the corresponding recovery efficiency, for varying interlayer thicknesses and permeabilities at the end of the simulation. Orange, green, and purple bars represent interlayer permeabilities of 1, 10<sup>−2</sup> , and 10<sup>−4</sup> mD. Solid bars indicate hydrogen in the reservoir, and hatched bars indicate hydrogen in interlayers. Labels above the bars indicate the ratio of hydrogen volume in interlayers to that remaining in the reservoir. Lines with markers represent hydrogen recovery efficiency, with line color indicating interlayer thickness: red for 0.5 m, blue for 2 m, and green for 5 m. (For interpretation of the references to colour in this figure legend, the reader is referred to the Web version of this article.) 

accurate at ultra-low permeabilities, it is sufficient here because this scenario is used only to suppress advection, whereas molecular diffusion is still allowed. Fig. 8a presents the combined effects of both advection and molecular diffusion, while Fig. 8b presents the results considering advection alone. 

At an interlayer permeability of 10<sup>−1</sup> mD, Darcy flow dominated the migration process, with molecular diffusion playing a secondary role. During injection-withdrawal cycles, regardless of whether molecular diffusion is considered, the volumes of natural gas and hydrogen in the interlayer show similar fluctuation characteristics in both amplitude and trend. During the injection stage, elevated layer pressure induced gas migration into the interlayer, resulting in increased gas accumulation within it. Conversely, during withdrawal stage, the reversed pressure gradient facilitated gas migration from the interlayer to the adjacent 

layer, leading to decreased gas volumes. Over the long term, consistent trends were observed: hydrogen volume in the interlayer showed a progressive increase, while natural gas volume exhibited a steady decline. 

At an interlayer permeability of 10<sup>−3</sup> mD, advective transport is suppressed, and molecular diffusion becomes the dominant transport mechanism across the interlayer. The rates of hydrogen volume increase and natural gas volume decrease are both lower than when the interlayer permeability is 10<sup>−1</sup> mD. Compared with the interlayer permeability of 10<sup>−1</sup> mD, the influence of molecular diffusion is more pronounced. Without considering molecular diffusion, hydrogen volume accumulation in the interlayers is 4 _._ 3 × 10<sup>6</sup> Sm<sup>3</sup> , accounting for 2.8 % of the remaining hydrogen in the formation. When molecular diffusion is included, hydrogen accumulation increases to 

6 

_International Journal of Hydrogen Energy 211 (2026) 153704_ 

_J. Liu et al._ 

**Fig. 7.** Schematic diagram of gas transport mechanisms in reservoir: advection (solid arrows) and molecular diffusion (dashed arrows) of natural gas (red) and hydrogen (blue). (For interpretation of the references to colour in this figure legend, the reader is referred to the Web version of this article.) 

**Fig. 8.** Evolution of natural gas (dashed) and hydrogen (solid) volumes in interlayers under different interlayer permeabilities: 0.1 mD (red), 10<sup>−3</sup> mD (blue), and 10<sup>−9</sup> mD (green) interlayer permeability. (a) With both advection and diffusion, (b) With advection only. (For interpretation of the references to colour in this figure legend, the reader is referred to the Web version of this article.) 

10 _._ 7 × 10<sup>6</sup> Sm<sup>3</sup> , representing 6.8 % of the remaining hydrogen. 

At an interlayer permeability of 10<sup>−9</sup> mD, advective transport becomes insignificant while molecular diffusion remains effective. In the absence of molecular diffusion, gas exchange between the interlayer and adjacent layers is negligible, leading to a stable natural gas volume within the interlayer. When molecular diffusion is considered, hydrogen from adjacent layers gradually replaces natural gas in the interlayer, leading to an increase in hydrogen volume while decreasing natural gas volume. When molecular diffusion is considered, hydrogen accumulation in the interlayers reaches 10 _._ 9 × 10<sup>6</sup> Sm<sup>3</sup> , accounting for 6.8 % of the remaining hydrogen. 

The Peclet number ( _Pe_ ) is a dimensionless parameter that characterizes the ratio of advective to diffusive transport [40]. It is commonly 

defined as _Pe_ = _uL/D_ , where _u_ is the characteristic velocity, _L_ is the characteristic length, and _D_ is the effective diffusion coefficient [40]. In reservoir simulation studies, it is commonly used to quantify the relative importance of advection to diffusion [58,59]. In this study, when the interlayer permeability decreases from 10<sup>−1</sup> to 10<sup>−4</sup> mD, the average _Pe_ of the upper interlayer over the entire simulation period decreases from 1.8 to 4 × 10<sup>−4</sup> (Fig. 9). This indicates a shift from advection-dominated transport ( _Pe_ ≫1) to diffusion-dominated transport ( _Pe_ **≪** 1). 

The baseline model was initialized on the basis of a depleted gas reservoir where interlayers were assumed to be gas saturated. However, in a depleted oil reservoir, interlayers could be expected to contain minimal gas. Even with substantial cushion gas injection into the reservoir, there may not be enough time for the gas to migrate into the 

7 

_International Journal of Hydrogen Energy 211 (2026) 153704_ 

_J. Liu et al._ 

**Fig. 9.** Distribution of Peclet number ( _Pe_ ) within the interlayer for different interlayer permeabilities. 

low permeability interlayers. In the following simulation, the impact of water saturation on the interlayers is investigated. Simulations were conducted using water-saturated interlayers with a permeability of 10<sup>−3</sup> mD. As illustrated in Fig. 10, in the water-saturated interlayer, only a slight increase in hydrogen volume is observed in the interlayer. This is primarily due to the low gas relative permeability under high water saturation, which limits gas mobility. This study did not consider liquidphase molecular diffusion. However, its coefficient is much lower than that of gas-phase diffusion, so gas is difficult to migrate into water-rich interlayers through diffusion. This phenomenon is also relevant to hydrogen leakage through caprock [60]. 

## _3.3. Impact of interlayer pinch-out_ 

Interlayer identification in the formation mainly relies on well logging data, which makes it challenging to evaluate interlayer continuity between wells. Notably, in some cases, interlayer features are clearly visible in the logging curves of one well but are difficult to identify in the logging data of adjacent wells. These lateral variations in interlayer signatures likely indicate the presence of stratigraphic pinch-outs between wells. 

To investigate the influence of interlayer pinch-out on UHS performance, multiple scenarios were simulated by varying the lateral extent of the first and third interlayers while maintaining the second interlayer as continuous (Fig. 11a–e). All other parameters in these scenarios remain identical to those in the baseline model. Fig. 11f–j illustrate the spatial distribution of hydrogen mole fraction in the gas phase. Taking the first two layers as an example: when hydrogen is injected into the second layer, hydrogen initially forms an inverted cone-shaped plume confined by the middle interlayer. However, once it extends beyond the interlayer's lateral extent, buoyancy forces drive its upward migration into the first layer. The extent of this upward migration is related to the lateral continuity of the mudstone interlayer. 

As illustrated in Fig. 12, the hydrogen recovery efficiency varies with different interlayer extents. Hydrogen recovery efficiency increases from 77.7 % to 82.1 % as interlayer extent extends from 30 to 250 m from the wellbore. On the other hand, the influence of interlayer extent is within a range. When the interlayer extent is less than 70 m or greater than 190 m, its influence is minimal in the box model. 

## _3.4. Impact of interlayer on well configuration design_ 

Because of the gravity override generated by relatively low hydrogen density, well configurations that prioritize top-layer perforation are commonly recommended in UHS [61]. In this section, to study the impact of the interlayer on well configuration design, two types of well configurations were considered. In the first, perforation was applied only in the top layer; in the second, all layers were perforated. Each configuration was simulated under three interlayer permeability conditions: 1, 10<sup>−2</sup> and 10<sup>−4</sup> mD. 

For the same interlayer permeability, well configurations with perforations only in the top layer led to higher hydrogen recovery than that achieved with full-layer perforation (Fig. 13a). Under full-layer perforation, there is small variation in BHP across different interlayer permeabilities (Fig. S3). In contrast, for the well configuration with perforation only in the top layer, the pressure fluctuation range increases as interlayer permeability decreases. This is primarily due to the low permeability of the interlayer, which traps the injected hydrogen in the top layer and prevents its downward migration. 

When the interlayer permeability is 10<sup>−4</sup> mD, BHP in the top-layeronly perforation configuration reaches the specified maximum pressure of 24 MPa during the first hydrogen injection stage (Fig. 13b). This constrains the injection rate and weakens the viscous fingering effect [19], resulting in higher hydrogen recovery efficiency during the first cycle (Fig. 13a). 

**Fig. 10.** Volume of natural gas (red) and hydrogen (blue) in water-saturated (dashed) and gas-saturated (solid) interlayers. (For interpretation of the references to colour in this figure legend, the reader is referred to the Web version of this article.) 

8 

_International Journal of Hydrogen Energy 211 (2026) 153704_ 

**Fig. 11.** Impact of interlayer pinch-out on hydrogen distribution. (a–e) Interlayer geometries with varying one-sided lateral extensions; (f–j) Corresponding hydrogen mole fraction in the gas phase. The interlayer lateral extension on one side is: (a, f) 30 m; (b, g) 70 m; (c, h) 130 m; (d, i) 190 m; (e, j) 240 m. 

**Fig. 12.** Impact of interlayer extent on hydrogen recovery efficiency across multiple injection-withdrawal cycles. Black, red, blue, green, and purple represent interlayer extents of 30, 70, 130, 190, and 240 m. (For interpretation of the references to colour in this figure legend, the reader is referred to the Web version of this article.) 

**4. Case study** data from the Ahuroa gas storage site. This site has been previously studied from an aquifer incursion perspective [62]. 

While the simplified box model illustrates fundamental mechanisms in a generic sense, it can also be useful to consider its application in a real-world scenario. Here, such a scenario was constructed using field 

9 

_International Journal of Hydrogen Energy 211 (2026) 153704_ 

_J. Liu et al._ 

**Fig. 13.** Hydrogen recovery efficiency and bottomhole pressure change under varying well configurations and interlayer permeability. (a) Hydrogen recovery efficiency; (b) Bottomhole pressure. Solid lines indicate wells perforated only in the top layer; dashed lines indicate fully perforated wells. Green, blue, and red represent interlayer permeabilities of 1, 10<sup>−2</sup> , and 10<sup>−4</sup> mD. (For interpretation of the references to colour in this figure legend, the reader is referred to the Web version of this article.) 

## _4.1. Geological model_ 

The Ahuroa gas field is situated onshore in the Taranaki region of New Zealand, approximately 14 km northeast of the town of Stratford. 

The field is characterized by a narrow, north-south oriented structural closure located at the crest of the Tarata thrust fault [62].The primary reservoir, the Tariki Sandstone Member, lies at a depth of 2 km at the crest of an anticline above the Tarata Thrust. This reservoir unit exhibits 

**Fig. 14.** Side view (x–z plane) of the permeability distribution in the simulation grid. The colour bar indicates the horizontal permeability in the x-direction ( _kx_ ), where the x-axis is the horizontal in-plane direction. (For interpretation of the references to colour in this figure legend, the reader is referred to the Web version of this article.) 

10 

_International Journal of Hydrogen Energy 211 (2026) 153704_ 

_J. Liu et al.                                                                                                                                                                                                                                       International Journal of Hydrogen Energy_ 

a gross thickness of 200 m, providing substantial storage capacity. More information about it can be found in Ref. [63]. 

The Ahuroa field was discovered in November 1986 and exploited until 2008. During this time, it produced 1 _._ 22 × 10<sup>9</sup> Sm<sup>3</sup> of gas, 1 _._ 73× 10<sup>5</sup> m<sup>3</sup> of oil and 6 _._ 1 × 10<sup>4</sup> m<sup>3</sup> of water. In 2008, the Ahuroa gas field was converted into a natural gas storage facility, which remains in operation today. Our study considers a hypothetical hydrogen storage project at this site. 

Fig. 14 presents a structural model based on an Eclipse grid, generated using the OGS software, illustrating the facies groups of the reservoir formation. The reservoir is primarily divided into four primary facies (ATK, TK, TN, and HPM). Detailed characteristics of each facies are presented in Table 3. In these four facies, the permeability of ATK and TK facies is high, so they are considered as the primary storage layers. HPM facies have the lowest permeability but exist as a single thick layer. TN facies exhibit relatively low permeability and thin reservoir thickness, with multiple vertical distributions. The properties of these two kinds of interlayers are similar to the interlayers considered in the box model. 

## _4.2. Reservoir model_ 

In this reservoir-scale numerical simulation study, the fundamental assumptions align with those established in the previous box model analysis. The simulation domain encompasses dimensions of 1.1 km in length, 1.05 km in width, and the vertical distance between the top and bottom model boundaries is 879 m. Within this domain, the target reservoir interval is 130 m thick, and is discretized into a grid system of 50 × 50 × 32 cells along the x, y, and z directions, respectively. The model implements no-flow boundary conditions at the top and lateral boundaries, while maintaining constant pressure at the bottom boundary due to aquifer support. 

The Ahuroa reservoir, which has transitioned from a production field to a UGS facility, operates within a pressure range of 16–24 MPa. For simulation purposes, the initial reservoir pressure was set at 16 MPa. The initial gas-water contact was established at a depth of 2500 m. The gas-water relative permeability relationships implemented in this study were identical to those utilized in the box model (Fig. 2). 

Well logging interpretation revealed significant heterogeneity in permeability values within the TN and HPM facies, with maximum values exceeding minimum values by a factor of fifty. The following study primarily focuses on analyzing the impact of TN and HPM facies distribution on hydrogen recovery efficiency. For ATK and TK facies, median permeability and porosity values derived from log interpretation were implemented. For the TN and HPM facies, porosity values were taken as the median from well log interpretation, while permeability values were selected directly from the minimum, median, and maximum values observed in the log interpretation results (as shown in Table 3). 

**Table 3** 

Summary of petrophysical properties and sedimentary characteristics of the four 

reservoir facies. 

|Code|Dominant<br>|Avera|ge porosity|(%)|Average|permeabili|ty (mD)|
|---|---|---|---|---|---|---|---|
||Lithology from<br>logs|Low|Median|High|Low|Median|High|
|ATK|Sandstone|14|16.5|17|25|75|150|
|TK|Sandstone with<br>less<br>Argillaceous<br>and Mudstone/<br>Siltstone|14|15.5|16|10|20|50|
|TN|Argillaceous<br>and Mudstone/<br>Siltstone, rare<br>Sandstone|6|9|12|0.5|1|10|
|HPM|Mudstone/<br>Siltstone||8||_<_0.01|0.01|0.5|

Additionally, for the thin TN facies, a scenario neglecting interlayer permeability (with permeability set to 75 mD) was also tested to evaluate the impact of ignoring the interlayers. Additionally, we tested a case in which the TN permeability was set equal to the permeability of the adjacent reservoir layers (75 mD). This effectively removes the lowpermeability interlayer barrier, thereby allowing us to evaluate the impact of neglecting interlayer effects. 

The operational scenario in the Ahuroa model follows the same setup as the box model, starting with cushion gas injection and followed by cyclic injection and withdrawal. The specific operational parameters can be found in Section 2.3. 

## _4.3. Simulation results_ 

Fig. 15 illustrates the hydrogen recovery efficiency under varying reservoir permeabilities in HPM and TN facies. For the HPM facies, the effect of permeability variation on hydrogen recovery efficiency was minimal. By the end of the simulation, the maximum deviation in hydrogen recovery efficiency was only 0.1 %. This is mainly because the HPM facies has ultra-low permeability and is relatively thick. As a result, hydrogen can hardly migrate through it, leading to a limited impact on hydrogen recovery. For the TN facies, hydrogen recovery at the end of the first injection-withdrawal cycle reached 66.0, 64.1, 61.2 % and 56.8 % for permeability values of 0.5, 1, 10 and 75 mD, respectively. Uncertainty in interlayer permeability introduces a 9.2 % range in predicted hydrogen recovery efficiency. By the end of the simulation, the final hydrogen recovery values were 77.7, 77.0, 75.4, and 73.4 %. Neglecting thin interlayers or misestimating their permeability may result in inaccuracies in evaluating hydrogen recovery efficiency. On the other hand, the reduced hydrogen recovery efficiency among the cases at the end of the simulation is primarily attributed to the co-production of cushion gas along with hydrogen. In the four cases, the volumes of cushion gas co-produced with hydrogen were 2 _._ 0 × 10<sup>8</sup> , 2 _._ 07 × 10<sup>8</sup> , 2 _._ 2 × 10<sup>8</sup> , and 2 _._ 4 × 10<sup>8</sup> Sm<sup>3</sup> . As more cushion gas is produced, a larger fraction of hydrogen remains in the reservoir to replace the pressuresupport role of the cushion gas. If the withdrawn cushion gas were reinjected into the reservoir, it would better maintain reservoir pressure and enable greater hydrogen withdrawal in subsequent cycles, thereby increasing hydrogen recovery efficiency. 

Fig. 16 presents the hydrogen mole fraction in the gas phase at the end of the simulation for different TN facies permeabilities. It can be observed that when the permeability of the TN facies is 10 mD, the resistance to downward hydrogen flow during the injection stage is relatively low. As a result, more hydrogen migrates downward, leading to increased hydrogen trapping in the deeper layers. 

Fig. 17a illustrates the amount of hydrogen in the interlayer of HPM facies under varying permeability scenarios. Hydrogen volume in the interlayer increases over successive injection–withdrawal cycles. When interlayer permeability decreases from 0.5 to 10<sup>−4</sup> mD, the hydrogen volume in the interlayer still increases over successive cycles, with relatively small fluctuations. Additionally, the influence of gas diffusion increases with the decrease of interlayer permeability. When the interlayer permeability is 0.5 mD, the hydrogen volume in the interlayers reaches 2 _._ 3 × 10<sup>7</sup> Sm<sup>3</sup> with molecular diffusion, which is approximately 0.8 % higher than that without diffusion. When the interlayer permeability is 10<sup>−4</sup> mD, hydrogen volume in the interlayer by diffusion alone is 6 _._ 69 × 10<sup>6</sup> Sm<sup>3</sup> , about two times as much than when diffusion is not considered. The lower the interlayer permeability, the greater the relative error when molecular diffusion effects are neglected. 

Fig. 17b illustrates the ratio of hydrogen volume in the interlayer to the total hydrogen volume in the reservoir at the end of simulation. When the interlayer permeability is 0.5 mD and diffusion is not considered, approximately 10.3 % of the hydrogen is trapped in the interlayer. The proportion increases only by 0.2 % when diffusion is included. In contrast, when the interlayer permeability decreases to 

11 

_International Journal of Hydrogen Energy 211 (2026) 153704_ 

**Fig. 15.** Impact of reservoir permeability on hydrogen recovery efficiency. (a) HPM Facies. Red, blue, and green represent HPM facies with permeability values of 0.5, 10<sup>−2</sup> , and 10<sup>−4</sup> mD, respectively, (b) TN Facies. Red, blue, and green represent TN facies with permeability values of 0.5, 1, 10 and 75 mD. The 75 mD case corresponds to a scenario that neglects the presence of TN Facies. (For interpretation of the references to colour in this figure legend, the reader is referred to the Web version of this article.) 

**Fig. 16.** Side view of the hydrogen mole fraction in the gas phase. (a) Permeability of TN facies is 0.5 mD, (b) Permeability of TN facies is 10 mD, (c) Difference in gas-phase hydrogen mole fraction, (b)–(a). 

10<sup>−4</sup> mD, only 1.6 % of the hydrogen is trapped in the interlayer without considering diffusion. However, when diffusion is included, the trapped hydrogen increases to 3 %, representing a nearly twofold increase. Although the permeability of the HPM facies interlayer has a minimal influence on hydrogen recovery efficiency, uncertain permeability may result in error about hydrogen volume trapped in the interlayer. The 

influence of perforating the HPM facies on hydrogen migration is presented in Fig. S3 (Supplementary Material). 

To investigate the impact of interlayer permeability on well configuration design, two types of well configurations were evaluated. One configuration involved perforating only the top layer above the HPM facies, while the other perforated all layers. The simulation results are 

12 

_International Journal of Hydrogen Energy 211 (2026) 153704_ 

_J. Liu et al.                                                                                                                                                                                                                                       International Journal of Hydrogen Energy_ 

**Fig. 17.** Hydrogen accumulation within the interlayer of HPM facies under different permeability and molecular diffusion conditions: (a) Hydrogen volume, (b) The percentage of hydrogen entrapped in the interlayers relative to the total hydrogen volume in the reservoir (solid lines: with diffusion; dashed lines: without diffusion; red: 0.5 mD; blue: 10<sup>−2</sup> mD; green: 10<sup>−4</sup> mD). (For interpretation of the references to colour in this figure legend, the reader is referred to the Web version of this article.) 

presented in Fig. 18. The trends of hydrogen recovery efficiency and BHP are consistent with those observed in the box model, suggesting they might be usefully applied to other fields. 

## **5. Discussion** 

## _5.1. Site assessment implication_ 

In multi-layered reservoirs, if the permeabilities of layers are uniform, interlayer permeability does not affect well production capacity. This is why, in previous studies on underground storage of natural gas and carbon dioxide, researchers primarily focused on the impact of various production layer permeability [11,25,64]. However, in UHS, the total gas production rate is not the only concern, hydrogen recovery efficiency is equally important. Interlayers affect hydrogen distribution within the reservoir and should be carefully considered in system design. 

In UGS, if a layer's permeability is much lower than that of the principal production layer, it is often classified as an interlayer and simply left unperforated [65,66]. For example, at the Ahuroa storage site, the permeability of primary production layers is approximately 75 mD, while the permeability of the TN facies ranges from 0.5 to 10 mD and is not perforated. During its operation as UGS, these low-permeability interlayers have no significant impact on well production capacity. However, in UHS, uncertainty in the permeability of TN facies can lead to a total hydrogen recovery difference of up to 4.3 %. This occurs because, despite its much lower permeability compared to the primary production layer, the interlayer still allows gas migration. Driven by gravity, hydrogen can migrate upward through the interlayer and displace cushion gas which moves downward, altering the distribution of both hydrogen and natural gas, and ultimately affecting overall recovery efficiency. During site assessment, the influence of interlayers on hydrogen recovery efficiency cannot be neglected. 

Advective flow is governed by permeability, whereas molecular diffusion is largely independent of it [33]. Since hydrogen is initially absent from the interlayers, molecular diffusion driven by the concentration gradient between interlayers and adjacent layers leads to hydrogen migration into the interlayers [67]. If the interlayer is gas-saturated, hydrogen can penetrate it by exchanging natural gas in it. During the withdrawal stage, hydrogen that has diffused into the interlayer will not generally flow out, hence this represents a potential hydrogen loss. In contrast, if the interlayer is water-saturated, it functions as an effective barrier, preventing hydrogen migration [68]. For the ultra-low-permeability interlayer considered in this study (k = 10<sup>−9</sup> mD), Darcy-scale advective flow is negligible, which is consistent with the sealing behaviour typically associated with caprock. With respect to molecular diffusion through caprock, Ghaedi et al. [69] reported that hydrogen loss through caprock increases with increasing gas saturation within the caprock. For water-saturated caprock, the associated hydrogen loss is expected to be negligible over typical UHS timescales. These findings are consistent with the behaviour observed for the ultra-low-permeability interlayer in this study. Nevertheless, the sealing capacity of a caprock is generally supported by evidence of long-term containment of buoyant fluids at field scale. In contrast, the sealing performance of internal interlayers is often more difficult to verify directly from field observations. Therefore, laboratory experiments are desirable to evaluate the sealing behaviour of such interlayers. 

Well configuration design is an important factor in UHS. In prior studies, it has been recommended that placing wells in the top layer enhances hydrogen recovery [12,61]. However, the influence of interlayers was not considered in their studies. Variations in interlayer properties can affect the hydrogen recovery efficiency of a given well configuration. For a homogeneous reservoir without interlayer, perforating only the top layer can achieve high hydrogen recovery [61]. However, if the interlayer permeability is sufficiently low to act as a 

13 

_International Journal of Hydrogen Energy 211 (2026) 153704_ 

_J. Liu et al.                                                                                                                                                                                                                                       International Journal of Hydrogen Energy_ 

**Fig. 18.** Hydrogen recovery efficiency and bottomhole pressure change under varying well configurations and interlayer permeability. (a) Hydrogen recovery efficiency, (b) Bottomhole pressure. Solid lines indicate fully perforated wells; dashed lines indicate wells perforated only in the top layer. Green, blue, and red represent interlayer permeabilities of 0.5, 10<sup>−2</sup> , and 10<sup>−4</sup> mD. (For interpretation of the references to colour in this figure legend, the reader is referred to the Web version of this article.) 

barrier to vertical flow and gravity segregation, then perforating only the top layer can lead to larger pressure fluctuations in the cyclic injection and withdrawal stage, which may affect injection and withdrawal capacity, and increase the risk of geomechanical hazards [70, 71]. On the other hand, for a reservoir with lower permeability interlayers, only perforating the top layer results in the lower reservoir space not being fully utilized. During site assessment of UHS, both well configuration and interlayer properties should be considered together to evaluate their combined impact on storage performance. 

## _5.2. Limitation of this study and practical challenges_ 

In this study, interlayers are assumed to differ from the principal productive layer only in terms of permeability and porosity. Previous research has shown that variations in mineral composition can lead to differences in pore structure, thereby affecting gas–liquid two-phase flow behaviour [72,73]. To improve the accuracy of the simulations, interlayer properties, such as permeability, porosity, relative permeability, capillary pressure, and effective diffusivity, should be characterised through detailed measurements [74–76]. In addition, for an ultra-low-permeability interlayer, the applicability of the conventional Darcy formulation should be evaluated to ensure a more accurate assessment. 

In addition to affecting physical flow, variations in lithological composition may also give rise to distinct chemical and biological reactions within the interlayers [77]. Based on this study, hydrogen can still migrate into interlayers with extremely low permeability through molecular diffusion. If methanation occurs within the interlayer, the local hydrogen concentration decreases while methane concentration increases, thereby enhancing the driving force for molecular diffusion 

[78]. If sulfate reduction occurs within the interlayer, it may consume hydrogen and reduce its concentration. More importantly, it can produce hydrogen sulfide (H2S), which may pose serious safety concerns [35]. Chemical reactions in the interlayer may alter its permeability and porosity, thus influencing hydrogen migration and the volume of hydrogen within the interlayer [37]. Interlayers should be evaluated independently when accounting for chemical and biological reactions, as their geochemical behavior may differ significantly from that of the main reservoir formations. 

Core experiments only provide information limited to the wellbore, while well logging is also restricted to the near wellbore environment. Seismic interpretation generally suffers from relatively low spatial resolution and so its utility in determining interlayer extent is limited. Instead, cross-well profile and interzonal pressure tests may be needed to determine whether interlayers truly isolate reservoir units or whether they pinch out [38]. Collectively, these limitations increase the difficulty of assessing the impact of interlayers on hydrogen recovery efficiency. One of the advantages of using depleted gas reservoirs for UHS is the potential to reduce drilling costs, as existing wells and infrastructure might be repurposed [11]. However, due to technological limitations, the resolution of historical logging data is low, which presents challenges in understanding interlayer characteristics. As the well has already been cased and cemented, it is difficult to re-evaluate interlayer properties using high-resolution logging tools [39]. On the other hand, because interlayers typically exhibit much lower permeability than the principal production layers, thick mudstone interlayers are commonly excluded from coring programs due to their limited production potential. As a result, their petrophysical properties are rarely measured in laboratory tests. This lack of data results in uncertainty in predicting hydrogen recovery efficiency and assessing potential hydrogen losses 

14 

_International Journal of Hydrogen Energy 211 (2026) 153704_ 

_J. Liu et al._ 

during site evaluation. 

## **6. Conclusions** 

In this study, a series of simulations were performed on both box models and realistic geological models to study the impact of interlayers on the performance of UHS. Based on the simulation results, the major conclusions are as follows. 

1. Under full-layer perforation, lower interlayer permeability increases resistance to vertical hydrogen migration, thereby reducing the impact of gravity override and improving hydrogen recovery efficiency. 

2. The dominant mechanism of hydrogen migration into interlayers depends on the interlayer permeability regime. As permeability decreases, molecular diffusion progressively contributes more to hydrogen transport into the interlayer. 

3. Interlayer pinch-out has an impact on hydrogen recovery efficiency. If pinch-out structure is situated within the area of upward hydrogen migration, more hydrogen migrates into overlying area, resulting in vertical containment loss and lower hydrogen recovery efficiency. 

4. Interlayer properties influence the performance of a given well configuration. When the interlayer can effectively prevent upward hydrogen migration, perforating all layers leads to higher hydrogen recovery, whereas perforating only the upper layer becomes more effective when the interlayer fails to provide sufficient containment. 

5. Broad agreement is observed between the box model and the realistic geological model. The key mechanisms and trends observed in the box model simulations are consistent with those in the realistic geological model, demonstrating the applicability of the simplified box model insights to more complex reservoir conditions. 

## **CRediT authorship contribution statement** 

**Jinjiang Liu:** Writing – original draft, Visualization, Software, Methodology. **David Dempsey:** Writing – review & editing, Supervision, Project administration, Funding acquisition, Conceptualization. **Andy Nicol:** Supervision, Project administration, Funding acquisition. **Matt Parker:** Software, Data curation. **John Passmore:** Writing – review & editing. 

## **Funding** 

This work was supported by the New Zealand government under the MBIE contract UOCX2207 for the Endeavour research program “Puhiko ¯ Nukutu: a green hydrogen geostorage battery in Taranaki¯ 

## **Declaration of competing interest** 

The authors declare that they have no known competing financial interests or personal relationships that could have appeared to influence the work reported in this paper. 

## **Appendix A. Supplementary data** 

Supplementary data to this article can be found online at https://doi. org/10.1016/j.ijhydene.2026.153704. 

## **References** 

- [1] Energy Transitions Commission. Mission possible: reaching net-zero carbon emissions from harder-to-abate sectors by mid-century. Energy Transitions Commission 2018. 

- [2] Huang M-T, Zhai P-M. Achieving paris agreement temperature goals requires carbon neutrality by middle century with far-reaching transitions in the whole society. Adv Clim Change Res 2021;12(2):281–6. https://doi.org/10.1016/j. accre.2021.03.004. 

- [3] Date RP, Asia NO, East M. Global and regional coal phase out requirements of the paris agreement: insights from the IPCC special report on 1.5 C. Climate analytics. 2019. Berlin, Germany. 

- [4] International Energy Agency. Energy technology perspectives 2023. OECD; 2023. https://doi.org/10.1787/7c6b23db-en. 

- [5] Asiaban S, Kayedpour N, Samani AE, Bozalakov D, De Kooning JDM, Crevecoeur G, Vandevelde L. Wind and solar intermittency and the associated integration challenges: a comprehensive review including the status in the Belgian power system. Energies 2021;14(9):2630. https://doi.org/10.3390/en14092630. 

- [6] Zhou S, Wang Y, Zhou Y, Clarke LE, Edmonds JA. Roles of wind and solar energy in China's power sector: implications of intermittency constraints. Appl Energy 2018; 213:22–30. https://doi.org/10.1016/j.apenergy.2018.01.025. 

- [7] Hwang J, Maharjan K, Cho H. A review of hydrogen utilization in power generation and transportation sectors: achievements and future challenges. Int J Hydrogen Energy 2023;48(74):28629–48. https://doi.org/10.1016/j.ijhydene.2023.04.024. 

- [8] Ishaq H, Dincer I, Crawford C. A review on hydrogen production and utilization: challenges and opportunities. Int J Hydrogen Energy 2022;47(62):26238–64. https://doi.org/10.1016/j.ijhydene.2021.11.149. 

- [9] Nicol A, Dempsey D, Yates E, Higgs K, Beggs M, Adam L. Underground hydrogen storage in the Taranaki region. 2022. New Zealand. 

- [10] Tarkowski R. Underground hydrogen storage: characteristics and prospects. Renew Sustain Energy Rev 2019;105:86–94. https://doi.org/10.1016/j.rser.2019.01.051. 

- [11] Muhammed NS, Haq MB, Al Shehri DA, Al-Ahmed A, Rahman MM, Zaman E, Iglauer S. Hydrogen storage in depleted gas reservoirs: a comprehensive review. Fuel 2023;337:127032. https://doi.org/10.1016/j.fuel.2022.127032. 

- [12] Smith D, Arnold D, Hough E, Busch A. Numerical modelling of the effects of permeability contrasts on underground hydrogen storage in sandstone reservoirs. Geoenergy 2024;2(1). https://doi.org/10.1144/geoenergy2023-039. geoenergy2023-039. 

- [13] Kanaani M, Sedaee B, Asadian-Pakfar M. Role of cushion gas on underground hydrogen storage in depleted oil reservoirs. J Energy Storage 2022;45:103783. https://doi.org/10.1016/j.est.2021.103783. Q1. 

- [14] Paterson L. The implications of fingering in underground hydrogen storage. Int J Hydrogen Energy 1983;8(1):53–9. https://doi.org/10.1016/0360-3199(83)900356. 

- [15] Abdellatif M, Hashemi M, Azizmohammadi S. Large-scale underground hydrogen storage: integrated modeling of reservoir-wellbore system. Int J Hydrogen Energy 2023;48(50):19160–71. https://doi.org/10.1016/j.ijhydene.2023.01.227. 

- [16] Malki ML, Chen B, Mao S, Chen F, Mehana M. OPERATE–H2: a tool for optimizing underground hydrogen storage. J Energy Storage 2024;90:111715. https://doi. org/10.1016/j.est.2024.111715. 

- [17] Poling BE, Prausnitz JM, O'Connell JP. Properties of gases and liquids, fifth edition. 

- fifth ed. McGraw-Hill Education; 2020. 

- [18] Zhao Q, Wang Y, Chen C. Numerical simulation of the impact of different cushion gases on underground hydrogen storage in aquifers based on an experimentallybenchmarked equation-of-state. Int J Hydrogen Energy 2023. https://doi.org/ 10.1016/j.ijhydene.2023.07.262. S0360319923037692. 

- [19] Saeed M, Jadhawar P. Optimizing underground hydrogen storage in aquifers: the impact of cushion gas type. Int J Hydrogen Energy 2023. https://doi.org/10.1016/ j.ijhydene.2023.08.352. S0360319923045445. 

- [20] Chai M, Chen Z, Nourozieh H, Yang M. Numerical simulation of large-scale seasonal hydrogen storage in an anticline aquifer: a case study capturing hydrogen interactions and cushion gas injection. Appl Energy 2023;334:120655. https://doi. org/10.1016/j.apenergy.2023.120655. 

- [21] Jia C, Ren B, Sepehrnoori K, Delshad M, Liu B, Sun H, Yao J. Numerical studies of hydrogen buoyant flow in storage aquifers. Fuel 2023;349:128755. https://doi. org/10.1016/j.fuel.2023.128755. 

- [22] Lawrence A, Stuart M, Cheney C, Jones N, Moss R. Investigating the scale of structural controls on chlorinated hydrocarbon distributions in the fracturedporous unsaturated zone of a sandstone aquifer in the UK. Hydrogeol J 2006;14(8): 1470–82. https://doi.org/10.1007/s10040-006-0068-6. 

- [23] Ambrose WA, Lakshminarasimhan S, Holtz MH, Núnez-L˜ opez V, Hovorka SD, ´ Duncan I. Geologic factors controlling CO2 storage capacity and permanence: case studies based on experience with heterogeneity in oil and gas reservoirs applied to CO2 storage. Environ Geol 2008;54(8):1619–33. https://doi.org/10.1007/s00254007-0940-2. 

- [24] Shao Q, Boon M, Youssef A, Kurtev K, Benson SM, Matthai SK. Modelling CO2 plume spreading in highly heterogeneous rocks with anisotropic, rate-dependent saturation functions: a field-data based numeric simulation study of otway. Int J Greenh Gas Control 2022;119:103699. https://doi.org/10.1016/j. ijggc.2022.103699. 

- [25] Wen G, Benson SM. CO2 plume migration and dissolution in layered reservoirs. Int J Greenh Gas Control 2019;87:66–79. https://doi.org/10.1016/j. ijggc.2019.05.012. 

- [26] Zhang T, Wang B-R, Zhao Y-L, Zhang L-H, Qiao X-Y, Zhang L, Guo J-J, Thanh HV. Inter-layer interference for multi-layered tight gas reservoir in the absence and presence of movable water. Pet Sci 2024;21(3):1751–64. https://doi.org/10.1016/ j.petsci.2024.01.009. 

- [27] Arekhov V, Clemens T, Wegner J, Abdelmoula M, Manai T. The role of diffusion on reservoir performance in underground hydrogen storage. SPE Reservoir Eval Eng 2023;26(4):1566–82. https://doi.org/10.2118/214435-PA. 

- [28] Reijnen-Mooij GCAM, Damoiseaux M, Van Klaveren S, Jaarsma B. A study of underground hydrogen storage in 2D box models with properties comparable to typical depleted gas fields in the Netherlands. In: SPE Europe energy conference and exhibition; 2024. https://doi.org/10.2118/220013-MS. D031S017R006. 

15 

_International Journal of Hydrogen Energy 211 (2026) 153704_ 

_J. Liu et al._ 

- [29] Ahmadi N, Heck K, Rolle M, Helmig R, Mosthaf K. On multicomponent gas diffusion and coupling concepts for porous media and free flow: a benchmark study. Comput Geosci 2021;25(5):1493–507. https://doi.org/10.1007/s10596021-10057-y. 

- [30] Feldmann F, Hagemann B, Ganzer L, Panfilov M. Numerical simulation of hydrodynamic and gas mixing processes in underground hydrogen storages. Environ Earth Sci 2016;75(16):1165. https://doi.org/10.1007/s12665-016-5948z. 

- [31] Peng S, He Q, Peng D, Ouyang X, Zhang X, Chai C, Zhang L, Sun X, Deng H, Hu W, Hou J. Equilibrium distribution and diffusion of mixed hydrogen-methane gas in gravity field. Fuel 2024;358:130193. https://doi.org/10.1016/j.fuel.2023.130193. 

- [32] Hemme C, Van Berk W. Hydrogeochemical modeling to identify potential risks of underground hydrogen storage in depleted gas fields. Appl Sci 2018;8(11):2282. https://doi.org/10.3390/app8112282. 

- [33] Fanchi JR. Principles of applied reservoir simulation. third ed. Elsevier Science & Technology; 2006. 

- [34] Peaceman DW. Interpretation of well-block pressures in numerical reservoir Simulation(includes associated paper 6988). Soc Petrol Eng J 1978;18(3):183–94. https://doi.org/10.2118/6893-PA. 

- [35] Chen Z. Reservoir simulation: mathematical techniques in oil recovery. SIAM/ Society for Industrial and Applied Mathematics; 2007. 

- [36] Liu N, Ostertag-Henning C, Fernø MA, Dopffel N. Growth on hydrogen by the sulfate-reducing _Oleidesulfovibrio alaskensis_ induces biofilm dispersion and detachment─implications for underground hydrogen storage. Environ Sci Technol 2025;59(14):7095–105. https://doi.org/10.1021/acs.est.4c13893. 

- [37] Cheng C, Busch B, Kontny A, Hilgers C. Underground hydrogen storage in sandstone reservoirs: effects of geochemical reactivity of hydrogen on reservoir performance. Int J Hydrogen Energy 2025;105:492–504. https://doi.org/10.1016/ j.ijhydene.2025.01.330. 

- [38] Kamal MM, Freyder DG, Murray MA. Use of transient testing in Reservoir management. J Petrol Technol 1995;47:992–9. https://doi.org/10.2118/28008PA. 

- [39] Harris L. Comparative Study of open hole versus cased hole logging for reservoir characterization in tight formations. 2025. 

- [40] Microfluidics: modelling, mechanics and mathematics. Elsevier; 2017. https://doi. org/10.1016/C2012-0-02230-2. 

- [41] Kunz O, Wagner W. The GERG-2008 wide-range equation of state for natural gases and other mixtures: an expansion of GERG-2004. J Chem Eng Data 2012;57(11): 3032–91. https://doi.org/10.1021/je300655b. 

- [42] Lohrenz J, Bray BG, Clark CR. Calculating viscosities of reservoir fluids from their compositions. J Petrol Technol 1964;16(10):1171–6. https://doi.org/10.2118/ 915-PA. 

- [43] Mairhofer J. A residual entropy scaling approach for viscosity based on the GERG2008 equation of state. Ind Eng Chem Res 2021;60(6):2652–62. https://doi.org/ 10.1021/acs.iecr.0c04938. 

- [44] Brooks RH, Corey AT. Properties of porous media affecting fluid flow. J Irrigat Drain Div 1966;92(2):61–88. https://doi.org/10.1061/JRCEA4.0000425. 

- [45] Ho CK, Webb SW, editors. Gas transport in porous media, vol. 20. Netherlands: Springer; 2006. https://doi.org/10.1007/1-4020-3962-X. 

- [46] Cunqi J, Jinchuan H, Kamy S. Numerical evaluation of viscous fingering behavior during underground hydrogen storage in saline aquifers. In: 58th U.S. rock mechanics/geomechanics symposium; 2024. https://doi.org/10.56952/ARMA2024-0868. D022S019R016. 

- [47] Ren T, Shen X, Zhang F. Numerical analysis of hydrogen fingering in underground hydrogen storage. J Rock Mech Geotech Eng 2025. https://doi.org/10.1016/j. jrmge.2025.04.015. S1674775525002434. 

- [48] Ren T, Shen X, Zhang F. Numerical simulation of fingering in the underground hydrogen storage. IOP Conf Ser Earth Environ Sci 2024;1335(1):012049. https:// doi.org/10.1088/1755-1315/1335/1/012049. 

- [49] Reservoir simulations. Elsevier; 2020. https://doi.org/10.1016/C2019-0-02019-5. 

- [50] Okoroafor ER, Saltzer SD, Kovscek AR. Toward underground hydrogen storage in porous media: reservoir engineering insights. Int J Hydrogen Energy 2022;47(79). https://doi.org/10.1016/j.ijhydene.2022.07.239. Article 79. 

- [51] Heinemann N, Scafidi J, Pickup G, Thaysen EM, Hassanpouryouzband A, Wilkinson M, Satterley AK, Booth MG, Edlmann K, Haszeldine RS. Hydrogen storage in saline aquifers: the role of cushion gas for injection and production. Int J Hydrogen Energy 2021;46(79):39284–96. https://doi.org/10.1016/j. ijhydene.2021.09.174. 

- [52] Sainz-Garcia A, Abarca E, Rubi V, Grandia F. Assessment of feasible strategies for seasonal underground hydrogen storage in a saline aquifer. Int J Hydrogen Energy 2017;42(26):16657–66. https://doi.org/10.1016/j.ijhydene.2017.05.076. 

- [53] Lu J, Muhammed NS, Okolie JA, Epelle EI. A sensitivity study of hydrogen mixing with cushion gases for effective storage in porous media. Sustain Energy Fuels 2025;9(5):1353–70. https://doi.org/10.1039/D4SE01400F. 

- [54] Di C, Wei Y, Wang K, Shen L, Xue Z, Chen Z. A scalable parallel compositional CO2 geological storage simulator. D021S023R004, https://doi.org/10.2118/ 220839-MS; 2024. 

- [55] Sheikhi S, Flynn MR. Can a hydrodynamic model predict the flow evolution of a hydrogen plume in a depleted natural gas reservoir? Int J Hydrogen Energy 2024; 81:795–804. https://doi.org/10.1016/j.ijhydene.2024.07.210. 

- [56] Nordbotten JM, Fernø MA, Flemisch B, Kovscek AR, Lie K-A, Both JW, Møyner O, Sandve TH, Ahusborde E, Bauer S, Chen Z, Class H, Di C, Ding D, Element D, Firoozabadi A, Flauraud E, Franc J, Gasanzade F, Ghomian Y, Giddins MA, Green C, Fernandes BRB, Hadjisotiriou G, Hammond G, Huang H, Kachuma D, 

Kern M, Koch T, Krishnamurthy P, Lye KO, Landa-Marban D, Nole M, Orsini P, ´ Ruby N, Salinas P, Sayyafzadeh M, Solovský J, Torben J, Turner A, Voskov DV, Wendel K, Youssef AA. Benchmarking CO_2 storage simulations: results from the 11th society of petroleum engineers comparative solution project. https://doi. org/10.48550/ARXIV.2507.15861; 2025. 

- [57] Higgs KE, Strogen DP, Nicol A, Dempsey D, Leith K, Bassett K, Reid C, Yates E, Parker M, Bischoff A, Adam L, Rowe M. Prospectivity analysis for underground hydrogen storage, Taranaki basin, Aotearoa New Zealand: a multi-criteria decisionmaking approach. Int J Hydrogen Energy 2024;71:1468–85. https://doi.org/ 10.1016/j.ijhydene.2024.05.098. 

- [58] Mohebbinia S, Wong T. Molecular diffusion calculations in simulation of gasfloods in fractured reservoirs. In: SPE reservoir simulation conference; 2017. https://doi. org/10.2118/182594-MS. D022S002R003. 

- [59] Alfarge D, Wei M, Bai B. Numerical simulation study on miscible EOR techniques for improving oil recovery in shale oil reservoirs. J Pet Explor Prod Technol 2018;8 (3):901–16. https://doi.org/10.1007/s13202-017-0382-7. 

- [60] Xie C, Huang J, Jiang S, Li Y, Yin X, Zhao H. Hydrogen leakage through organicrich caprock: a molecular simulation study under water and cushion gas conditions. Fuel 2025;402:135980. https://doi.org/10.1016/j.fuel.2025.135980. 

- [61] Zhang H, Zhang Y, Arif M. Impact of formation conditions and well configurations on underground hydrogen storage. Int J Hydrogen Energy 2024;70:288–300. https://doi.org/10.1016/j.ijhydene.2024.05.208. 

- [62] Liu J, Dempsey D, Nicol A, Parker M, Passmore J. Impact of operational parameters on water invasion in underground hydrogen storage: a numerical investigation of the ahuroa field, New Zealand. Int J Hydrogen Energy 2025;153:150236. https:// doi.org/10.1016/j.ijhydene.2025.150236. 

- [63] Liu J, Dempsey D, Nicol A, Parker M, Titus K. Impacts of reservoir permeability anisotropy on hydrogen migration and recovery efficiency in geological storage. Fuel 2026;408:137596. https://doi.org/10.1016/j.fuel.2025.137596. 

- [64] Li Y, Li Y, Liu Y. Numerical study on the impacts of layered heterogeneity on the underground process in compressed air energy storage in aquifers. J Energy Storage 2022;46:103837. https://doi.org/10.1016/j.est.2021.103837. 

- [65] Zhao Q, Li X-S, Chen Z-Y, Xia Z-M, Xiao C-W. Numerical investigation of production characteristics and interlayer interference during co-production of natural gas hydrate and shallow gas reservoir. Appl Energy 2024;354:122219. https://doi.org/10.1016/j.apenergy.2023.122219. 

- [66] Liang W, Wang J, Li P, Leung C, Goh S, Sang S. New insight to interlayer interference during three-gas Co-production based on a wellbore–reservoir coupling model. Nat Resour Res 2023;32(5):2037–52. https://doi.org/10.1007/ s11053-023-10230-3. 

- [67] Hogeweg S, Michelsen J, Hagemann B, Ganzer L. Empirical and numerical modelling of gas–gas diffusion for binary hydrogen–methane systems at underground gas storage conditions. Transport Porous Media 2024;151:213–32. https://doi.org/10.1007/s11242-023-02039-8. 

- [68] Arekhov V, Zhainakov T, Clemens T, Wegner J. Temperature and water saturation influence on effective hydrogen-methane diffusion in reservoir Rocks: estimation of hydrogen diffusive losses. SPE J 2025;30:3104–21. https://doi.org/10.2118/ 220008-PA. 

- [69] Ghaedi M, Andersen PØ, Gholami R. Hydrogen diffusion into caprock: a semianalytical solution and a hydrogen loss criterion. J Energy Storage 2023;64: 107134. https://doi.org/10.1016/j.est.2023.107134. 

- [70] Zhou J, Deng G, Tian S, Xian X, Yang K, Zhang C, Dong Z. Experimental study on the permeability variation of sandstone at cyclic stress: implication for underground gas storage. J Energy Storage 2023;60:106677. https://doi.org/ 10.1016/j.est.2023.106677. 

- [71] Song Y, Jun S, Na Y, Kim K, Jang Y, Wang J. Geomechanical challenges during geological CO2 storage: a review. Chem Eng J 2023;456:140968. https://doi.org/ 10.1016/j.cej.2022.140968. 

- [72] Guan X, Xiao D, Jin H, Cui J, Wang M, Shao H, et al. Classification and controlling factors of different types of pore throat in tight sandstone reservoirs based on fractal features—A case study of xujiahe formation in Western sichuan depression. Minerals 2024;15:18. https://doi.org/10.3390/min15010018. 

- [73] Chang B, Tong Q, Cao C, Zhang Y. Effect of pore-throat structure on movable fluid and gas–water seepage in tight sandstone from the southeastern Ordos Basin, China. Sci Rep 2025;15:7714. https://doi.org/10.1038/s41598-025-92584-7. 

- [74] Li C, Wang S, You Q, Yu C. A new measurement of anisotropic relative permeability and its application in numerical simulation. Energies 2021;14(16). https://doi.org/ 10.3390/en14164731. Article 16. 

- [75] Lysyy M, Føyen T, Johannesen EB, Fernø M, Ersland G. Hydrogen relative permeability hysteresis in underground storage. Geophys Res Lett 2022;49(17). https://doi.org/10.1029/2022GL100364. Article 17. 

- [76] Boon M, Rademaker T, Winardhi CW, Hajibeygi H. Multiscale experimental study of H2/brine multiphase flow in porous rock characterizing relative permeability hysteresis, hydrogen dissolution, and Ostwald ripening. Sci Rep 2024;14(1):30170. https://doi.org/10.1038/s41598-024-81720-4. 

- [77] Wang Z, Tang X, Jing T, Du K, Zhao W, Shan Y, et al. Comparison of mineral transformation in CO2 geological storage under CO2–water–sandstone and mudstone reactions. Geoenergy Sci Eng 2024;242:213215. https://doi.org/ 10.1016/j.geoen.2024.213215. 

- [78] Hellerschmied C, Schritter J, Waldmann N, Zaduryan AB, Rachbauer L, Scherr KE, et al. Hydrogen storage and geo-methanation in a depleted underground hydrocarbon reservoir. Nat Energy 2024. https://doi.org/10.1038/s41560-02401458-1. 

16 

