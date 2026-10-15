# Molecular dynamics insights into gas-water interfacial tension: Optimizing hydrogen storage in subsurface conditions

**Authors:** Qiuhao Chang, David Dempsey, Liehui Zhang, Yulong Zhao, Liangliang Huang  
**Published in:** International Journal of Hydrogen Energy (2024)  
**DOI (version of record):** https://doi.org/10.1016/j.ijhydene.2024.03.341  
**This copy:** Accepted manuscript (peer-reviewed, author's version). Text extracted from the PDF at https://ddempsey.github.io/papers/2024-chang-molecular-dynamics-insights-gas-water/chang2024-molecular-dynamics-insights.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** Accepted manuscript. © 2024. This manuscript version is made available under the CC-BY-NC-ND 4.0 license https://creativecommons.org/licenses/by-nc-nd/4.0/. The version of record is available at https://doi.org/10.1016/j.ijhydene.2024.03.341  
**Licence:** CC BY-NC-ND 4.0 https://creativecommons.org/licenses/by-nc-nd/4.0/  

---
# 1 **Molecular dynamics insights into gas-water interfacial tension:** 2 **Optimizing hydrogen storage in subsurface conditions** 

- 3 Qiuhao Chang<sup>a</sup> , David Dempsey<sup>a,**</sup> , Liehui Zhang<sup>b</sup> , Yulong Zhao<sup>b</sup> , Liangliang Huang<sup>c,*</sup> 

- 4 a Department of Civil and Natural Resources Engineering, University of Canterbury, New Zealand 5 b National Key Laboratory of Oil and Gas Reservoir Geology and Exploitation, Southwest Petroleum 6 University, China 

- 7 c School of Sustainable Chemical, Biological and Materials Engineering, University of Oklahoma, United 8 States 

- 9 * Corresponding author. 

- 10 ** Corresponding author. 

- 11 E-mail addresses: david.dempsey@canterbury.ac.nz (D. Dempsey), HLL@ou.edu (L. Huang). 

### 12 

# **Abstract** 

13 This study presents a comprehensive analysis of interfacial tension (IFT) between pore water and 14 hydrogen-cushion gas mixtures in subsurface porous media, a key variable in the distribution of 15 gas mixtures for hydrogen storage. Employing molecular dynamics simulations, we developed two 16 IFT models at 20 MPa and 373 K: one for an H2–CO2–H2O system and another for an H2–CH4– 17 H2O system. The models reveal that increasing cushion gas concentration reduces gas-water IFT. 18 Notably, for H2–CO2–H2O mixtures, the IFT substantially decreases with CO2 concentration up 19 to 40%, after which the reduction rate diminishes. In H2–CH4–H2O mixtures, the IFT decreases 20 linearly with CH4 concentration. The study attributes these variations to local density distributions 21 and molecular orientation effects. Specifically, CO2 adsorption at the interface up to 40% concen22 tration significantly lowers IFT, while CH4 adsorption proportionally decreases IFT. The influence 23 of CO2 on water molecule orientation at the interface, in contrast to the non-effect of CH4, is also 24 critical in enhancing IFT reduction. Our results also highlight the reduction of H2 self-diffusion at 25 the interface caused by CO2 and CH4, an essential factor in optimizing subsurface hydrogen storage 26 operations. 

1 

# 27 **1 Introduction** 

- 28 Hydrogen has long been recognized as a cornerstone for the transition to a sustainable energy land- 

- 29 scape. From its nascent inclusion in the energy dialogue to its pivotal role in achieving global net- 

- 30 zero emission targets, hydrogen’s versatility is undisputed in its application across transportation, 

- 31 industrial processes, and electricity generation sectors [1–3]. Its versatility is evident in applica- 

- 32 tions from transportation fuel to electricity generation, with its production exceeding 90 million 

- 33 metric tons in 2020 and projected to increase annually [4,5]. The Hydrogen Council estimates that 

- 34 achieving net-zero will require around 660 million tons of hydrogen by 2050, equating to 22% of 

- 35 forecasted global energy demand [6]. The surface storage technologies such as physical storage 

- 36 through compression, liquefaction, and adsorption or chemical storage through metal hydrides and 

- 37 fuel cells may eventually be unable to meet such large hydrogen demand [7–10]. On the other side, 

- 38 given the experimental nature of conventional storage methods, the vast capacity of underground 

- 39 porous media like aquifers and depleted hydrocarbon reservoirs has proven essential for large-scale 

- 40 hydrogen storage, as demonstrated by successful global implementations [11–14]. The operational 

- 41 cornerstone of subsurface hydrogen storage lies in the injection of a cushion gas—commonly CO2 

- 42 or CH4—to form a compressible gas plume, enabling cyclical storage modulation through pressure 

- 43 dynamics [11,15–20]. A critical determinant in this process is the interfacial tension (IFT) between 

- 44 the hydrogen-cushion gas mixture and in-situ water. IFT dictates the displacement efficiency of wa- 

- 45 ter and the distribution of the gas within the porous media, influencing the overall storage efficacy 46 [21–26]. 

- 47 While historical research on IFT has been primarily centered on hydrogen-water interactions, 

- 48 recent investigations have illuminated the intricate effects of temperature, pressure, and salinity 

- 49 on these interactions. For instance, studies by Slowinski et al., and Massoudi and King reported 

- 50 minimal pressure effects on the IFT at standard temperatures [27,28], while Chow et al., observed 51 a pronounced temperature dependency within an extensive pressure range [29]. Similarly, Al- 

- 52 Mukainah et al., and Hosseini et al., correlated IFT increases directly with salinity across diverse 

- 53 temperature and pressure conditions [30,31]. The recent body of work delves into the IFT dynamics 

- 54 of hydrogen when combined with cushion gases. It has been established that CO2 integration 

- 55 reduces the IFT, with the most notable effects under increased temperatures and pressures, though 

2 

- 56 diminishing above 20 MPa [29,32]. Investigations by Zoha et al., Doan et al., and Mirchi et al., 57 extended these findings, linking CO2 concentration and CH4 presence with reduced IFT, particularly 58 under varying temperature conditions [21,33–35]. 

- 59 Yet, the current scientific understanding remains limited, especially concerning the effects of 

- 60 fluctuating gas concentrations over time—a critical aspect affecting the relative permeability in 61 multi-component flow and, hence, the spatial distribution of gas and water in underground storage 

- 62 porous media [36–41]. Traditional laboratory approaches have been unable to decipher the nanoscale 63 mechanisms that drive IFT changes. This study, therefore, focuses on an analysis of the IFTs 

- 64 between water and H2–CO2, and H2–CH4 mixtures across the full concentration range, and under 

- 65 typical subsurface storage conditions (20 MPa, 373 K) [42,43]. Using molecular dynamics (MD) 

- 66 simulations, we explore the molecular behaviors at the gas-water interface, focusing on adsorption, 

- 67 orientation, and diffusion. Our insights contribute to a refined understanding of IFT evolution, 

- 68 which will contribute to more efficient and secure hydrogen storage. The manuscript is structured 

- 69 sequentially: Section 2 defines the gas-water models and simulation details; Section 3 describes 70 the findings on gas-water IFT and molecular interactions; Section 4 proposes avenues for future 71 research; and Section 5 presents our conclusions. 

# 72 **2 Models and simulation details** 

- 73 We used the Large-scale Atomic/Molecular Massively Parallel Simulator (LAMMPS) for MD sim- 

- 74 ulations to quantify the interfacial properties of two distinct systems at 20 MPa and 373 K: (a) 75 binary gas-water systems, specifically H2/H2O, CO2/H2O, and CH4/H2O; and (b) ternary systems 76 comprising H2/CO2 and H2/CH4 gas mixtures with water. This methodology builds upon our 

- 77 previously established approach for investigating interfacial phenomena between immiscible phases 78 [44]. 

- 79 For the binary systems, we initiated the simulations by positioning 3000 water molecules cen- 

- 80 trally, flanked by 1000 gas molecules of either H2, CO2, or CH4 on each side, creating a system 

- 81 of 5000 molecules within a simulation box measuring 5 nm by 5 nm by 30 nm. For each system, 82 the 1-ns equilibration in the canonical ensemble (NVT) was firstly performed to mitigate molecular 

- 83 overlap, followed by another 15-ns calculation in the isothermal–isobaric ensemble (NPT) to further 

3 

- 84 equilibrate the system. Then, a production run of 10 ns was performed, with the last 2-ns trajec- 

- 85 tory collected for the property analysis. Each simulation model was repeated four times for each 86 concentration case to ensure the robustness and reproducibility of our results. The ternary systems 

- 87 followed a similar setup, with 3000 water molecules at the core and varying ratios of cushion gas 

- 88 to H2 on either side. We explored six different molar ratios for CO2 and CH4 with H2, ranging 89 from 10% to 80% cushion gas concentration. A table of the number of gas molecules in each system 90 was listed in the supporting materials (Table S1). The simulation protocols for the ternary systems 91 mirrored those of the binary systems, including ensemble application and data collection phases. 92 We note that for reporting bulk vapor pressure in our simulations, we reported the pressure as the 93 average of ( _Pxx_ + _Pyy_ + _Pzz_ ) _/_ 3. The use of the NPT ensemble is supported by its successful applica- 

- 94 tion in similar interfacial studies [45–48]. These studies demonstrated the NPT ensemble’s ability to 95 equilibrate vapor-liquid and liquid-liquid systems, justifying its selection for our work on gas-water 96 interfaces. However, if the system involves a solid substrate, for example, the liquid/solid system, 97 reporting the _Pzz_ value and utilizing the NPzzT ensemble would be better, as the _Pzz_ component 98 accurately represents the tension along the interface normal [49–51]. 

99 Force field models—EPM2 for CO2 [52,53], TIP3P for water [54,55], TraPPE-UA for CH4 [56], 100 and the Vrabec single-site model for H2 [57]—were selected based on their demonstrated reliability 101 in simulating interfacial interactions involving these species [44,58–61]. The suitability of TIP3P for 102 these systems is well-established in literature, including the works of Vega and de Miguel [62], and 103 Chen and Smith [63], who have previously reported the surface tensions using the TIP3P model. 104 Our choice of the TIP3P water model is further supported by its adequacy in describing vapor-liquid 105 equilibria (VLE) of H2O–H2 mixtures as demonstrated by Rahbari et al. [64], and its accuracy for 106 predicting IFT in CH4-water and CO2-water systems at high pressures, as shown by Chen et al. 107 [55] However, interfacial property studies with other water models, such as TIP4P/2005(59), have 108 been reported. 

109 Throughout the MD simulations, we applied periodic boundary conditions across all three di110 mensions for binary and ternary systems. The leapfrog integrator was utilized with a time step 111 of 1 fs. Electrostatic interactions were computed using the particle-particle-particle mesh (PPPM) 112 method, and the non-bonded van der Waals forces were described by the 12-6 Lennard-Jones po113 tential. A cutoff radius of 15<sup>˚</sup> A was applied for LJ interactions. A cutoff of 15<sup>˚</sup> A was applied for 

4 

- 114 Coulombic interactions, beyond which the PPPM method, with the accuracy of 1.0e-5, was used 

- 115 to handle long-range electrostatic interactions. The LJ interatomic potential parameters between 116 species were calculated using the Lorentz-Berthelot mixing rules. Temperature and pressure were 117 controlled using the Nose-Hoover thermostat and barostat during the simulations within the NVT 118 and NPT ensembles, respectively. Fig. 1(a), 1(b), and 1(c) depict the equilibrium states of the 119 binary and ternary systems, respectively, as obtained from the MD simulations. 

# 120 **3 Results and discussions** 

121 

## **3.1 Interfacial tension** 

122 The interfacial tension between the gas and water was determined through the Gibbs IFT formula123 tion [65]: 

124 where _Lz_ is the length of the simulation box along the z-direction. _Pxx_ , _Pyy_ , and _Pzz_ are three 125 diagonal elements of the pressure tensor. The coefficient ½ represents the two interfaces existing. 126 Fig. 1 shows the existence of two interfaces, perpendicular to the z-direction. 

127 The calculated interfacial tensions (IFTs) for binary H2–H2O, CH4–H2O, and CO2–H2O systems 128 at 20 MPa and 373 K were 55 mN/m, 42 mN/m, and 31 mN/m, respectively. These values 129 exhibit strong concordance with reference data reporting IFTs of 58 mN/m for H2-water [29], 130 44 mN/m for CH4-water [66], and 29 mN/m for CO2-water [67], as detailed in Table 1. Despite the 131 underestimate for the CH4/H2O system, those general agreements corroborate the reliability of our 132 MD simulations. In addition, the densities of CH4, CO2, H2, and H2O were calculated separately 133 and compared with the NIST database at 373 K and 20 MPa in the supporting material (Table S2) 134 for the validation of the force fields. 

135 In Fig. 2(a), we present the quantified interfacial tension (IFT) at the gas-water interface as 136 a function of CO2 and CH4 concentrations in their respective ternary systems with H2 under 20 137 MPa and 373 K conditions. The data illustrate a trend where an increase in the proportion of 138 cushion gas in the mixture with H2 corresponds to a decrease in the IFT. This finding generally 139 aligns with the observations of Chow et al. [29] for the CO2–H2–H2O system and with the results 

5 

- 140 obtained by Zoha et al. [21] and Doan et al. [33] for their respective CO2–H2–H2O and CH4–H2– 

- 141 H2O systems. However, direct quantitative comparisons with existing literature are challenging due 142 to the scarcity of data under identical conditions. For instance, Chow et al.’s study was limited to 143 a 0.3 CO2 concentration, whereas Zoha et al. conducted their research at different temperatures. 144 Nevertheless, the CO2–H2 gas mixture exhibits a lower IFT than the CH4–H2 mixture at equivalent 

- 145 concentrations of cushion gas. Furthermore, as depicted in Fig. 2(b), a significant observation within 

- 146 the CO2–H2–H2O system is that the IFT decreases substantially as the CO2 concentration increases 

- 147 from 0% to 40%, after which the rate of decrease moderates from 40% to 100% CO2. In contrast, 

- 148 the IFT in the CH4–H2–H2O system diminishes linearly with increasing CH4 concentration. 

**Fig. 1.** The equilibrium state of binary and ternary systems at 20 MPa and 373 K. (a). Binary system of hydrogen and water, grey: H2, blue: H2O. (b). Ternary system of (CO2+H2)/H2O, red: CO2. (c). Ternary system of (CH4+H2)/H2O, purple: CH4. (For interpretation of the references to colour in this figure legend, the reader is referred to the Web version of this article.) 

6 

**Table 1** 

The IFT of three binary systems from this work and previous publications. 

|Gas-Water|IFT-MD (mN/m)|IFT-Ref (mN/m)|Error%|
|---|---|---|---|
|H2-Water|57|53-58([29,58,68])|1.7–7.5|
|CH4-Water|42|44-49([66,69,70])|4.5–14.3|
|CO2-Water|31|29-32([67,71,72])|3.1–6.9|

### 149 

## **3.2 Local density profile** 

150 In analyzing phase separation within the simulated H2–H2O system, local density profiles serve as a 151 critical metric for delineating the bulk and interfacial regions. Fig. 3 illustrates the calculated local 152 densities of H2 and H2O molecules along the z-axis. Given the negligible solubility of H2 in water, 153 a distinct separation between the gas and liquid phases is observed. In the H2-dominated phase 154 (region I), the water density profile is near zero, signifying a gas-rich environment. Conversely, 155 in the water-dominated phase (region III), the H2 density profile tends toward zero, indicating a 156 liquid-rich region. The interface between these phases (region II) is identified by the points where 157 the density profiles of water and hydrogen fall to zero, marking the boundaries of the interfacial 158 region. The local density profiles of CO2-Water and CH4-Water systems were determined and 159 plotted in Fig. S1 of the supporting materials. In addition, the solubilities of gases in the water 160 were determined based on their densities in the water and compared with reference values in Table 161 S3 of the supporting materials for further validation. 

7 

**Fig. 2.** (a) IFTs of (CO2+H2)/H2O and (CH4+H2)/H2O systems at 20 MPa and 373 K with different cushion gas concentrations. (b) The IFT curves fittings. 

162 In the studied ternary systems, such as the (30% CO2 + 70% H2)/H2O and (30% CH4 + 70% 163 H2)/H2O configurations depicted in Fig. 4, the local density profiles for CO2 and CH4, alongside 164 H2O and H2, were analyzed. The profiles reveal a significant decline in the local densities of CO2 165 and CH4 within the water-rich phase, corroborating their limited solubility in water. Distinct from 166 H2, the local densities of CO2 and CH4 are elevated in the interfacial region compared to the gas-rich 167 phase. This indicates their preferential adsorption and accumulation at the gas-water interface—a 168 phenomenon previously documented in the literature [73–75]. 

8 

**Fig. 3.** The local density profiles of the H2-water system at 373K and 20 MPa. 

169 Notably, the interface region’s local density of CO2 exceeds that of CH4 at an equivalent 30% 170 concentration, suggesting a superior adsorption propensity of CO2 molecules. This differential 171 adsorption is attributed to the molecular interactions between the gas molecules and water at the 172 interface. Quantitative analysis of the interaction energies reveals that CO2–H2O interactions ( _−_ 537 173 kcal/mol) are substantially stronger than CH4–H2O interactions ( _−_ 122 kcal/mol). Consequently, 174 CO2 exhibits a more pronounced adsorption at the gas-water interface than CH4, as reflected by 175 the higher interaction energy values. 

176 In Fig. 5, we present the local density profiles of CO2 and CH4 across different concentrations, 177 while Fig. 6 outlines the corresponding profiles for H2. The local densities of the cushion gases in 178 both the gas-rich phase and the interface region exhibit an increase correlating with rising cushion 179 gas concentrations. At the studied conditions of 20 MPa and 373 K, CO2 exists in a supercritical 180 state, unlike CH4, which remains gaseous [76]. This distinction results in a higher local density 181 for supercritical CO2 than for gaseous CH4 within the gas-rich phase at equivalent concentrations. 182 Additionally, CO2’s more robust adsorption capacity than CH4 leads to its greater local density at 183 the gas-water interface for each concentration. 

184 Furthermore, Fig. 6 indicates a decrease in H2 local densities within the gas-rich and interface 185 regions with increasing cushion gas concentration. This trend suggests that increased cushion gas 186 adsorption at the interface diminishes the direct interaction between H2 and H2O molecules— 

9 

- 187 consequently, the gas-water IFT transition from being predominantly influenced by H2 to being 188 governed by cushion gases. 

189 As shown in Fig. 7, the right-side interface region of the (CO2+H2)/H2O system is depicted for 190 various CO2 concentrations, illustrating the adsorption behavior at the molecular level as obtained 191 from the MD simulation. The visualization reveals a higher accumulation of CO2 molecules within 192 the interface region compared to the gas-rich phase, particularly pronounced at 20% and 40% 193 CO2 concentrations. This observation aligns with the local density profiles presented in Fig. 4(a). 194 Furthermore, a positive correlation is noted between the CO2 concentration and its accumulation at 195 the interface region, corroborating the data in Fig. 5(a). This trend underscores the concentration196 dependent nature of CO2 interfacial adsorption behavior in the studied system. 

## 197 **3.3 Incremental adsorption mechanism** 

198 As discussed in Section 3.2, we observed an increase in cushion gas densities within the gas-rich 199 phase and at the interface as the gas concentration in the system was raised. To elucidate the 200 adsorption mechanisms at the gas-water interface, we evaluated the relative density profiles of the 201 cushion gases at varying concentrations. Here, the relative density ( _ρ_ r) of a cushion gas is defined as 202 the ratio of its local density at the interface ( _ρ_ local) to its bulk density in the gas-rich phase ( _ρ_ bulk): 

203 Fig. 8(a) and **8(b)** display the relative density profiles for CO2 and CH4, respectively. In the 204 (CO2+H2)/H2O system, relative densities of CO2 remain approximately constant at 2 for concen205 trations ranging from 10% to 40%. This constancy suggests a proportional relationship between the 206 adsorbed CO2 at the interface and the CO2 in the gas-rich phase at concentrations below 40%. How207 ever, beyond a 40% CO2 concentration, relative densities at the interface decrease with increasing 208 concentration, indicating a saturation effect where further adsorption of CO2 becomes increasingly 209 difficult. 

210 Conversely, in the (CH4+H2)/H2O system, the relative densities of CH4 at the interface maintain 211 a steady proportionality to the densities in the gas-rich phase, irrespective of concentration. This 212 behavior aligns with the IFT findings: in the (CO2+H2)/H2Osystem, CO2 molecules are readily 

10 

- 213 adsorbed at the interface at lower concentrations (0–40%), leading to substantial reductions in IFT. 

- 214 Once the interface region becomes saturated with CO2 at around 40% concentration, additional 

- 215 CO2 adsorption becomes more challenging, resulting in minor IFT variations. Meanwhile, in the 

- 216 (CH4+H2)/H2O system, a consistent decrease in IFT is observed as the CH4 concentration increases, 

- 217 attributed to the continuous adsorption of CH4 at the interface. 

**Fig. 4.** The local density profiles: (a) (CO2+H2)/H2O system with 30% CO2 concentration. (b) (CH4+H2)/H2O system with 30% CH4 concentration. 

**Fig. 5.** The local density profiles: (a) CO2 in (CO2+H2)/H2O system with different CO2 concentrations. (b) CH4 in (CH4+H2)/H2O system with different CH4 concentrations. 

11 

**Fig. 6.** The local density profiles: (a) H2 in (CO2+H2)/H2O system with different CO2 concentrations. (b) H2 in (CH4+H2)/H2O system with different CH4 concentrations. 

**Fig. 7.** Visualization of CO2 molecules near the gas-water interface region with different concentrations. H2 molecules on the right are not shown for clarity. 

12 

**Fig. 8.** Relative density profiles at different concentrations: (a) CO2; (b) CH4. 

## 218 **3.4 Molecular orientation** 

219 The influence of molecular orientation on interfacial tension is well-documented at the molecular 220 level [44,77]. We investigated the orientation of cushion gas and water molecules at the gas-water 221 interface by calculating the orientational order parameter (S). This parameter quantifies the prefer222 ential alignment of molecules relative to the interface as a function of their z-directional positioning 223 [78]: 

224 Here, _θ_ represents the angle between the CO2 molecule’s centerline, the water molecule’s dipole 225 vector, and the z-axis. For CO2, the preferential parallel orientation to the interface corresponds to 226 S values nearing _−_ 0 _._ 5, whereas S values near unity suggest a perpendicular orientation. Randomly 227 oriented molecules would yield S values around zero. 

228 The tetrahedral structure of CH4 precludes a similar orientation analysis; hence, it was excluded 229 from this portion of the study. Fig. 9 illustrates the orientational profiles for CO2 and H2O from 230 the (CO2+H2)/H2O system with a 20% CO2 concentration. The CO2 local density profile aids in 231 delineating the interface region. Within the gas-rich and water-rich phases, the S values for CO2 232 and H2O approximate zero, indicating random molecular orientation. In the interface region, CO2 233 molecules exhibit an S value of about _−_ 0 _._ 05, indicating a slight preference for a parallel orientation 234 to the interface. Water molecules present S values around _−_ 0 _._ 18 in the same region, suggesting 

13 

235 a more pronounced preference for parallel alignment. These molecular orientations for CO2 and 236 water are consistent with previous findings in the literature [44,58,79,80]. 

237 To delve deeper into the orientation of CO2 at the gas-water interface, Fig. 10 quantifies the 238 S values for CO2 across a range of concentrations. It is consistently observed that CO2 molecules 239 prefer alignment parallel to the interface at all studied concentrations. A notable trend is the positive 240 increase in S values with rising CO2 concentration, suggesting a diminished parallel orientation as 241 the interface becomes increasingly populated with adsorbed CO2 molecules. However, beyond a 242 40% concentration threshold, the S values plateau; for instance, CO2 concentrations at 60%, 80%, 243 and 100% maintain S values of approximately _−_ 0 _._ 03 within the interfacial region. 

**Fig. 9.** Orientation profiles of CO2 and H2O molecules along the Z direction in the (CO2+H2)/H2O system with the 20% CO2 concentration. The density profile (black) is used to emphasize the location of the gas-water interface region. 

14 

**Fig. 10.** CO2 orientation profiles with different CO2 concentrations. 

244 This behavior aligns with the previously discussed interfacial tension and relative density find245 ings. At CO2 concentrations exceeding 40%, additional free CO2 molecules face challenges in 246 adsorbing to the already crowded interface, thus resulting in minor variations in interfacial tension 247 and the orientational behavior of CO2 molecules. 

248 Fig. 11(a) illustrates the orientational profiles of water molecules within (CO2+H2)/H2O 249 systems across varying CO2 concentrations, while Fig. 11(b) presents the corresponding data 250 for (CH4+H2)/H2O systems with different CH4 concentrations. In both ternary systems, water 251 molecules exhibit a preferential orientation at the gas-water interface, aligning their dipole vectors 252 parallel to the interface. 

253 When cushion gas concentration is considered, water’s orientational order parameter (S) remains 254 consistently unchanged at the interface with increasing CH4 concentrations. Conversely, the S values 255 for water positively increase at the interface with rising CO2 concentrations. This trend suggests 256 that CO2 adsorption at the gas-water interface modifies its interfacial orientation and significantly 257 influences that of water molecules. In contrast, the interfacial orientation of water molecules remains 258 unaffected by CH4 adsorption. This differential impact on water molecule orientation by CO2 259 compared to CH4 could contribute to the observed discrepancy in gas-water IFT reductions between 260 the (CH4+H2)/H2O and (CO2+H2)/H2O systems for the same concentration of cushion gas, as 261 illustrated in Fig. 2. 

15 

## 262 **3.5 Molecular diffusion** 

- 263 Subsurface microorganisms, such as methanogens and acetogens, predominantly thrive at the gas264 water interface and their metabolic processes can involve the consumption of H2, presenting a 265 significant factor for consideration in UHS [81]. The self-diffusion of H2 at the gas-water interface 266 is relevant as it can affect microbial activity and, consequently, the consumption rate of H2. This 267 section investigates the impact of cushion gases on H2 self-diffusion at the interface. Utilizing 268 methodologies from Liu et al. [45] and Yuan et al. [82], we divided the binary and ternary systems 269 along the Z-axis into five distinct slabs to calculate H2 self-diffusion coefficients within each slab: 270 two in the gas-rich phase, two at the interface, and one in the water-rich phase. The mean-squared 271 displacement (MSD) is used to quantify the self-diffusion coefficient of a gas, defined as [83,84]: 

_MSD_ ( _t_ ) = _< |ri_ ( _t_ ) _− ri_ (0) _|_<sup>2</sup> _>_ 

272 where _ri_ ( _t_ ) is the position of particle i at time t, _ri_ (0) is the particle’s initial position, and the 273 brackets denote an ensemble average. The self-diffusion coefficient, D, is subsequently deduced 

274 from the MSD as: 

275 Self-diffusion coefficients in binary systems are initially evaluated, as indicated by the black line for 276 H2 in the H2–H2O system and the orange lines for CO2 and CH4 in the respective CO2–H2O and 277 CH4–H2O systems depicted in Fig. 12. To validate these results, we referenced self-diffusion data for 278 H2 within calcite slit pores under comparable conditions of 20 MPa and 340 K [85]. Our simulation 279 findings for the gas-rich phase are consistent with the reference values, exhibiting the same order of 280 magnitude. In addition, Groß et al. [86] reported the experimental self-diffusion of CO2 at 333 K 281 and 20 MPa which was about 0 _._ 27 _×_ 10<sup>_−_7</sup> m<sup>2</sup> /s. With the temperature effect studied in their paper, 282 it is believed that the self-diffusion of CO2 at 20 MPa and 373 K should be in the range between 283 0 _._ 3 _×_ 10<sup>_−_7</sup> m<sup>2</sup> /s to 0 _._ 4 _×_ 10<sup>_−_7</sup> m<sup>2</sup> /s, which is higher than our simulation result of 0 _._ 23 _×_ 10<sup>_−_7</sup> m<sup>2</sup> /s 284 in the bulk phase but very close to each other. The self-diffusion coefficient of bulk CH4 reported 285 from the experiment is around 1 _._ 4 _×_ 10<sup>_−_7</sup> m<sup>2</sup> /s at 19 MPa and 353 K [87], compared with our 286 simulation result of 0 _._ 6 _×_ 10<sup>_−_7</sup> m<sup>2</sup> at 20 MPa and 373 K, the difference exists but accepted in the 

16 

287 order of magnitude. With the comparison of IFT shown in Table 1, the maximum IFT deviation 288 of the CH4-Water system could reach around 14.3%. We recommend a further refinement of the 289 force field used for CH4 in such a vapor-liquid IFT system. Finally, since the solubilities of H2 and 290 CH4 in the water are small (as shown in the SI materials), the experimental self-diffusions of H2 291 and CH4 in the water are scarce. However, a comparison was found related to CO2 diffusion in the 292 water under a similar P/T condition. The self-diffusion of CO2 in the water from our simulation is 293 around 8 _._ 6 _×_ 10<sup>_−_9</sup> m<sup>2</sup> /s, consistent with the experimental result of approximately 7 _._ 45 _×_ 10<sup>_−_9</sup> m<sup>2</sup> /s 294 reported by Shane et al. [88]. 

295 Due to molecular weight differences, H2 exhibits the highest self-diffusion, while CO2 shows 296 the lowest. In the gas-rich phase (region I), gas molecules demonstrate the highest self-diffusion 297 coefficients, which diminish progressively towards and within the gas-water interface region (region 298 II). Upon dissolution into the water-rich phase (region III), the self-diffusion coefficients of the gas 299 molecules are notably reduced. 

300 In ternary systems, the self-diffusion of H2 diminishes in the presence of increasing concentrations 301 of cushion gas. In the gas-rich phase, interactions between H2 and cushion gas molecules lower 302 H2 self-diffusion due to the inherently lower self-diffusion of the cushion gases. The adsorption of 303 cushion gas at the interface further impedes H2 penetration, reducing its self-diffusion in this region. 304 As cushion gas concentration escalates, the enhanced molecular interaction in the gas-rich phase 305 and the increasing accumulation of adsorbed cushion gas at the interface concomitantly decrease 306 the self-diffusion of H2, making it increasingly challenging for H2 to diffuse through the interface 307 region. 

17 

**Fig. 11.** H2O orientation profiles from: (a) (CO2+H2)/H2O system with different CO2 concentrations. (b) (CH4+H2)/H2O system with varying concentrations of CH4. 

**Fig. 12.** H2 self-diffusion coefficients in: (a) (CO2+H2)/H2O system with different CO2 concentrations. (b) (CH4+H2)/H2O system with varying concentrations of CH4. 

308 **3.6 Further discussion** 

309 In this investigation, we have constructed two models to describe the IFT of gas-water systems 310 at 20 MPa and 373 K, pertinent to UHS: one for (CO2+H2)/H2O mixtures and another for 311 (CH4+H2)/H2O mixtures. It is acknowledged, however, that factors such as pressure and tem312 perature also influence gas-water IFT, beyond gas concentration alone. Chow et al. [29], Pereira 

18 

313 et al. [89], Liu et al. [90], and Kashefi et al. [70] have provided IFT measurements for H2–H2O, 314 CO2–H2O, and CH4–H2O systems under varying pressures and temperatures, as detailed in Fig. 315 13. From their findings, we can infer that pressure notably impacts gas-water IFTs primarily at 316 low-pressure regimes. Above the threshold of 20 MPa, IFT exhibits only marginal variations with 317 further pressure increments, which suggests that the models developed herein can be applied across 318 an extensive pressure range above 20 MPa at 373 K. In contrast, temperature has a pronounced 319 effect on IFT; generally, an increase in temperature correlates with a decrease in gas-water IFT. 320 For future work aimed at enhancing the comprehensiveness of IFT models for UHS, it is imperative 321 to integrate the methodology from this study to quantify the (cushion gas + H2)/H2O IFT as a 322 function of gas concentration, particularly at lower pressure ranges or across varying temperatures. 

**Fig. 13.** The IFTs of H2–H2O, CO2–H2O, and CH4–H2O as a function of pressure and temperature reported from previous publications. 

323 

# **4 Conclusions** 

324 When evaluating subsurface porous media for hydrogen storage, the interfacial tension between pore 

325 water and a gas mixture of H2 with a cushion gas is a critical factor influencing the displacement of 

> 326 residual water and the distribution of the gas mixture. Through molecular dynamics simulations, 327 this study has formulated two models for gas-water IFT as a function of cushion gas concentration at 

19 

328 the expected subsurface storage conditions of 20 MPa and 373 K: one for an H2–CO2–H2O mixture 329 and another for an H2–CH4–H2O mixture. It has been consistently observed that an increase in the 330 concentration of the cushion gas correlates with a reduction in gas-water IFT. A key finding is that 331 for the H2–CO2–H2O mixture, the IFT significantly decreases as CO2 concentration increases up 332 to 40%, beyond which the rate of decrease in IFT tapers off until 100% concentration. In contrast, 333 the IFT declines linearly with increasing CH4 concentration in the H2–CH4 mixture. 334 Local density distributions and molecular orientation analyses have elucidated the underlying 335 mechanisms driving these IFT variations. In the H2–CO2–H2O mixture, up to a 40% CO2 con336 centration, there exists a consistent proportional relationship between the increased adsorption of 337 CO2 at the interface and its concentration in the gas mixture, resulting in a substantial reduction 338 in IFT. Beyond this threshold, the interface becomes predominantly occupied by adsorbed CO2, 339 which impedes further adsorption, leading to a marginal IFT reduction with increasing CO2 con340 centration. Conversely, the H2–CH4–H2O mixture exhibits a constant decrease in IFT due to a 341 steady adsorption rate of CH4 at the interface proportional to its concentration in the gas mixture. 342 Furthermore, the molecular orientation of CO2 at the interface aligns with the trends observed 343 in IFT and adsorption behaviors. As CO2 concentration increases from 0 to 40%, the orientational 344 changes of CO2 molecules contribute significantly to the reduction in IFT. Above a 40% concen345 tration, there is little change in the molecular orientation of CO2, correlating with the smaller IFT 346 reduction observed. Additionally, the orientation of water molecules at the interface is influenced 347 by the presence of adsorbed CO2 but remains unaffected by CH4. This differential impact on water 348 molecule orientation by CO2 as opposed to CH4 is postulated as a contributing factor to the higher 349 efficacy of CO2 in reducing gas-water IFT. Lastly, our study indicates that the presence of both CO2 350 and CH4 at the gas-water interface leads to a decrease in the self-diffusion of H2 at the interface, 351 which may be relevant for microbial dynamics in subsurface hydrogen storage facilities. 

### 352 

# **Funding** 

353 This work was supported by the New Zealand government under the MBIE contract UOCX2207 354 for the Endeavour research program “P¯uhiko Nukut¯u: a green hydrogen geostorage battery in 355 Taranaki”. L. Huang acknowledges the financial support from the U.S. Department of Transporta- 

20 

356 

tion PHMSA under Grant No. 693JK32250009CAAP. 

### 357 

# **Declaration of competing interest** 

- 358 The authors declare that they have no known competing financial interests or personal relationships 359 that could have appeared to influence the work reported in this paper. 

### 360 

# **Acknowledgments** 

361 We acknowledge the OU Supercomputing Center for Education & Research (OSCER) at the Univer362 sity of Oklahoma, United States, and the Department of Civil and Natural Resources Engineering 

363 at the University of Canterbury, New Zealand, for computational resources and dedicated support. 

### 364 

# **Appendix A. Supplementary data** 

365 Supplementary data to this article can be found online at `https://doi.org/10.1016/j.ijhydene.` 366 `2024.03.341` . 

### 367 

# **References** 

- 368 [1] Le TT, et al. Fueling the future: a comprehensive review of hydrogen energy systems and their 369 challenges. Int J Hydrogen Energy 2023. 

- 370 [2] Hassan Q, Algburi S, Sameen AZ, Salman HM, Jaszczur M. Green hydrogen: a pathway to a 371 sustainable energy future. Int J Hydrogen Energy 2024;50:310–33. 

- 372 [3] Kouchaki-Penchah H, et al. The role of hydrogen in a net-zero emission economy under alter373 native policy scenarios. Int J Hydrogen Energy 2024;49:173–87. 

- 374 [4] Ball M, Wietschel M. The future of hydrogen–opportunities and challenges. Int J Hydrogen 375 Energy 2009;34:615–27. 

- 376 [5] Wappler M, et al. Building the green hydrogen market–Current state and outlook on green 377 hydrogen demand and electrolyzer manufacturing. Int J Hydrogen Energy 2022;47:33551–70. 

21 

- 378 [6] Council H. Hydrogen for net zero-A critical cost-competitive energy vector. 2021. 

- 379 [7] Amirthan T, Perera MSA. Underground hydrogen storage in Australia: a review on the feasi380 bility of geological sites. Int J Hydrogen Energy 2023;48:4300–28. 

- 381 [8] Bosu S, Rajamohan N. Recent advancements in hydrogen storage - comparative review on 382 methods, operating conditions and challenges. Int J Hydrogen Energy 2024;52:352–70. 

- 383 [9] Muthukumar P, et al. Review on large-scale hydrogen storage systems for better sustainability. 384 Int J Hydrogen Energy 2023;48:33223–59. 

- 385 [10] Nguyen HQ, Shabani B. Review of metal hydride hydrogen storage thermal management for 386 use in the fuel cell systems. Int J Hydrogen Energy 2021;46:31699–726. 

- 387 [11] Miocic J, et al. Underground hydrogen storage: a review. In: Geological society, London, 388 special publications, vol. 528. SP528; 2023. p. 2022–88. 

- 389 [12] Tarkowski R. Underground hydrogen storage: characteristics and prospects. Renew Sustain 390 Energy Rev 2019;105:86–94. 

- 391 [13] Jadhawar P, Saeed M. Mechanistic evaluation of the reservoir engineering performance for the 392 underground hydrogen storage in a deep North Sea aquifer. Int J Hydrogen Energy 2024;50:558– 393 74. 

- 394 [14] Kiran R, Upadhyay R, Rajak VK, Gupta SD, Pama H. Comprehensive study of the under395 ground hydrogen storage potential in the depleted offshore Tapti-gas field. Int J Hydrogen 396 Energy 2023;48:12396–409. 

- 397 [15] Navaid HB, Emadi H, Watson M. A comprehensive literature review on the challenges associ398 ated with underground hydrogen storage. Int J Hydrogen Energy 2023;48:10603–35. 

- 399 [16] Hematpur H, Abdollahi R, Rostami S, Haghighi M, Blunt MJ. Review of underground hydrogen 400 storage: concepts and challenges. Adv Geo-Energy Res 2023;7:111–31. 

- 401 [17] Pfeiffer WT, Bauer S. Subsurface porous media hydrogen storage–scenario development and 402 simulation. Energy Proc 2015;76:565–72. 

22 

- 403 [18] Kanaani M, Sedaee B, Asadian-Pakfar M. Role of cushion gas on underground hydrogen storage 404 in depleted oil reservoirs. J Energy Storage 2022;45:103783. 

- 405 [19] Zhao Q, Wang Y, Chen C. Numerical simulation of the impact of different cushion gases on 406 underground hydrogen storage in aquifers based on an experimentally-benchmarked equation407 of-state. Int J Hydrogen Energy 2023. 

- 408 [20] Saeed M, Jadhawar P. Optimizing underground hydrogen storage in aquifers: the impact of 409 cushion gas type. Int J Hydrogen Energy 2024;52:1537–49. 

- 410 [21] Isfehani ZD, et al. Interfacial tensions of (brine+ H2+ CO2) systems at gas geo-storage condi411 tions. J Mol Liq 2023;374:121279. 

- 412 [22] Guo H, Song K, Hilfer R. SPE improved oil recovery conference. In: OnePetro; 2020. 

- 413 [23] Broseta D, Tonnet N, Shah V. Are rocks still water-wet in the presence of dense CO2 or H2S? 414 Geofluids 2012;12:280–94. 

- 415 [24] Farouq Ali S, Thomas S. A realistic look at enhanced oil recovery. Sci Iran 1994;1. 

- 416 [25] Delshad M, Bhuyan D, Pope G, Lake L. SPE enhanced oil recovery symposium. OnePetro; 417 1986. 

- 418 [26] Nobakht M, Moghadam S, Gu Y. Effects of viscous and capillary forces on CO2 enhanced oil 419 recovery under reservoir conditions. Energy Fuels 2007;21:3469–76. 

- 420 [27] Slowinski Jr EJ, Gates EE, Waring CE. The effect of pressure on the surface tensions of liquids. 421 J Phys Chem 1957;61:808–10. 

- 422 [28] Massoudi R, King Jr A. Effect of pressure on the surface tension of water. Adsorption of low 423 molecular weight gases on water at 25. deg. J Phys Chem 1974;78:2262–6. 

- 424 [29] Chow YF, Maitland GC, Trusler JM. Interfacial tensions of (H2O+ H2) and (H2O+ CO2+ 425 H2) systems at temperatures of (298–448) K and pressures up to 45 MPa. Fluid Phase Equil 426 2018;475:37–44. 

23 

- 427 [30] Al-Mukainah H, Al-Yaseri A, Yekeen N, Al Hamad J, Mahmoud M. Wettability of shale– 

- 428 brine–H2 system and H2-brine interfacial tension for assessment of the sealing capacities of 429 shale formations during underground hydrogen storage. Energy Rep 2022;8:8830–43. 

- 430 [31] Hosseini M, Fahimpour J, Ali M, Keshavarz A, Iglauer S. H2 _−_ brine interfacial tension as a 431 function of salinity, temperature, and pressure; implications for hydrogen geo-storage. J Petrol 432 Sci Eng 2022;213:110441. 

- 433 [32] Fukuzawa K, Watanabe K, Yasuda K, Ohmura R. Interfacial tension measurements in the 434 (CO2+ H2) gas mixture and water system at temperatures from 271.2 K to 280.2 K and 435 pressures up to 7.0 MPa. J Chem Therm 2018;119:20–5. 

- 436 [33] Doan QT, Keshavarz A, Miranda CR, Behrenbruch P, Iglauer S. Molecular dynamics simulation 437 of interfacial tension of the CO2-CH4-water and H2-CH4-water systems at the temperature of 438 300 K and 323 K and pressure up to 70 MPa. J Energy Storage 2023;66:107470. 

- 439 [34] Mirchi V, Dejam M, Alvarado V. Interfacial tension and contact angle measurements for 440 hydrogen-methane mixtures/brine/oil-wet rocks at reservoir conditions. Int J Hydrogen En441 ergy 2022;47:34963–75. 

- 442 [35] Doan QT, Keshavarz A, Miranda CR, Behrenbruch P, Iglauer S. A prediction of interfacial 443 tension by using molecular dynamics simulation: a study on effects of cushion gas (CO2, N2 444 and CH4) for Underground Hydrogen Storage. Int J Hydrogen Energy 2024;50:1607–15. 

- 445 [36] Vasseghian Y, Bahadori A, Khataee A, Dragoi E-N, Moradi M. Modeling the interfacial tension 446 of water-based binary and ternary systems at high pressures using a neuro-evolutive technique. 447 ACS Omega 2019;5:781–90. 

- 448 [37] Yan W, Zhao G-Y, Chen G-J, Guo T-M. Interfacial tension of (methane+ nitrogen)+ water 449 and (carbon dioxide+ nitrogen)+ water systems. J Chem Eng Data 2001;46:1544–8. 

- 450 [38] Zhang R-h, et al. Numerical simulation and laboratory experiments of CO2 sequestration 451 and being as cushion gas in underground natural gas storage reservoirs. J Nat Gas Sci Eng 452 2021;85:103714. 

24 

- 453 [39] Middleton RS, et al. The cross-scale science of CO 2 capture and storage: from pore scale to 454 regional scale. Energy Environ Sci 2012;5:7328–45. 

- 455 [40] Bennion B, Bachu S. SPE/DOE symposium on improved oil recovery. OnePetro; 2006. 

- 456 [41] Cho J, Kim TH, Chang N, Lee KS. Effects of relative permeability change resulting from 457 interfacial tension reduction on vertical sweep efficiency during the CO2-LPG hybrid EOR 458 process. Energy Sources, Part A Recovery, Util Environ Eff 2018;40:1242–9. 

- 459 [42] Zivar D, Kumar S, Foroozesh J. Underground hydrogen storage: a comprehensive review. Int 460 J Hydrogen Energy 2021;46:23436–62. 

- 461 [43] Hassanpouryouzband A, Joonaki E, Edlmann K, Heinemann N, Yang J. Thermodynamic and 462 transport properties of hydrogen containing streams. Sci Data 2020;7:222. 

- 463 [44] Chang Q, Huang L, Wu X. A molecular dynamics study on low-pressure carbon dioxide in the 464 water/oil interface for enhanced oil recovery. SPE J 2023;28:643–52. 

- 465 [45] Liu B, et al. Reduction in interfacial tension of water–oil interface by supercritical CO2 in 466 enhanced oil recovery processes studied with molecular dynamics simulation. J Supercrit Fluids 467 2016;111:171–8. 

- 468 [46] Toutouni R, Kubelka J, Piri M. Liquid–vapor interfacial tension in alkane mixtures: improving 469 predictive capabilities of molecular dynamics simulations. J Phys Chem B 2022;126:1136–46. 

- 470 [47] Xu J, et al. Effect of surfactant headgroups on the oil/water interface: an interfacial tension 471 measurement and simulation study. J Mol Struct 2013;1052:50–6. 

- 472 [48] Zhao J, Yao G, Ramisetti SB, Hammond RB, Wen D. Molecular dynamics simulation 473 of the salinity effect on the n-decane/water/vapor interfacial equilibrium. Energy Fuels 474 2018;32:11080–92. 

- 475 [49] Guo Z, Zhang X. Enhanced fluctuation for pinned surface nanobubbles. Phys Rev 476 2019;100:052803. 

- 477 [50] Liu Y, Lafitte T, Panagiotopoulos AZ, Debenedetti PG. Simulations of vapor–liquid phase 478 equilibrium and interfacial tension in the CO2–H2O–NaCl system. AIChE J 2013;59:3514–22. 

25 

- 479 [51] Novak BR, Maginn EJ, McCready MJ. Comparison of heterogeneous and homogeneous bubble 480 nucleation using molecular simulations. Phys Rev B 2007;75:085413. 

- 481 [52] Harris JG, Yung KH. Carbon dioxide’s liquid-vapor coexistence curve and critical properties 482 as predicted by a simple molecular model. J Phys Chem 1995;99:12021–4. 

- 483 [53] Zhong H, et al. Molecular dynamics simulation of transport and structural properties of CO2 484 using different molecular models. J Chem Eng Data 2015;60:2188–96. 

- 485 [54] Mark P, Nilsson L. Structure and dynamics of the TIP3P, SPC, and SPC/E water models at 486 298 K. J Phys Chem 2001;105:9954–60. 

- 487 [55] Chen C, Hu W, Li W, Song Y. Model comparison of the CH4/CO2/water system in predicting 488 dynamic and interfacial properties. J Chem Eng Data 2019;64:2464–74. 

- 489 [56] Martin MG, Siepmann JI. Transferable potentials for phase equilibria. 1. United-atom descrip490 tion of n-alkanes. J Phys Chem B 1998;102:2569–77. 

- 491 [57] K¨oster A, Thol M, Vrabec J. Molecular models for the hydrogen age: hydrogen, nitrogen, 492 oxygen, argon, and water. J Chem Eng Data 2018;63:305–20. 

- 493 [58] van Rooijen W, et al. Interfacial tensions, solubilities, and transport properties of the 494 H2/H2O/NaCl system: a molecular simulation study. J Chem Eng Data 2023. 

- 495 [59] Yang Y, Narayanan Nair AK, Sun S. Molecular dynamics simulation study of carbon dioxide, 496 methane, and their mixture in the presence of brine. J Phys Chem B 2017;121:9688–98. 

- 497 [60] de Lara LS, Michelon MF, Miranda CR. Molecular dynamics studies of fluid/oil interfaces for 498 improved oil recovery processes. J Phys Chem B 2012;116:14667–76. 

- 499 [61] Li X, Ross DA, Trusler JM, Maitland GC, Boek ES. Molecular dynamics simulations of CO2 and 500 brine interfacial tension at high temperatures and pressures. J Phys Chem B 2013;117:5647–52. 

- 501 [62] Vega C, de Miguel E. Surface tension of the most popular models of water by using the test-area 502 simulation method. J Chem Phys 2007;126:154707. 

- 503 [63] Chen F, Smith PE. Simulated surface tensions of common water models. J Chem Phys 504 2007;126:221101. 

26 

- 505 [64] Rahbari A, et al. Solubility of water in hydrogen at high pressures: a molecular simulation 506 study. J Chem Eng Data 2019;64:4103–15. 

- 507 [65] Zhang Y, Feller SE, Brooks BR, Pastor RW. Computer simulation of liquid/liquid interfaces. 508 I. Theory and application to octane/water. J Chem Phys 1995;103:10252–66. 

- 509 [66] Mirzaeifard S, Servio P, Rey AD. Molecular dynamics characterization of temperature and 510 pressure effects on the water-methane interface. Colloid Interf Sci Commun 2018;24:75–81. 

- 511 [67] Jerauld GR, Kazemi A. An improved simple correlation for accurate estimation of CO2-Brine 512 interfacial tension at reservoir conditions. J Petrol Sci Eng 2022;208:109537. 

- 513 [68] Dong F, Zhou J, Xu S, Chen X, Zhang P. Prediction model of interfacial tension of H2/H2O 514 and (N2+ H2)/H2O systems using the linear gradient theory in combination with PR-EOS. J 515 Mol Liq 2024;395:123809. 

- 516 [69] Ren Q-Y, Chen G-J, Yan W, Guo T-M. Interfacial tension of (CO2+ CH4)+ water from 298 517 K to 373 K and pressures up to 30 MPa. J Chem Eng Data 2000;45:610–2. 

- 518 [70] Kashefi K, Pereira LM, Chapoy A, Burgass R, Tohidi B. Measurement and modelling of in519 terfacial tension in methane/water and methane/brine systems at reservoir conditions. Fluid 520 Phase Equil 2016;409:301–11. 

- 521 [71] Georgiadis A, Maitland G, Trusler JM, Bismarck A. Interfacial tension measurements of the 522 (H2O+ CO2) system at elevated pressures and temperatures. J Chem Eng Data 2010;55:4168– 523 75. 

- 524 [72] Bachu S, Bennion DB. Interfacial tension between CO2, freshwater, and brine in the range of 525 pressure from (2 to 27) MPa, temperature from (20 to 125) C, and water salinity from (0 to 526 334 000) mg _·_ L<sup>_−_1</sup> . J Chem Eng Data 2009;54:765–75. 

- 527 [73] Guo Q, et al. Molecular dynamics simulation of the interfacial properties of methane-water and 528 methane-brine systems. Mol Simulat 2023;49:1215–28. 

27 

- 529 [74] Miqueu C, Miguez JM, Pineiro MM, Lafitte T, Mendiboure B. Simultaneous application of the 530 gradient theory and Monte Carlo molecular simulation for the investigation of methane/water 531 interfacial properties. J Phys Chem B 2011;115:9618–25. 

- 532 [75] Li W, Jin Z. Molecular dynamics simulations of natural gas-water interfacial tensions over wide 533 range of pressures. Fuel 2019;236:480–92. 

- 534 [76] Prasad SK, Sangwai JS, Byun H-S. A review of the supercritical CO2 fluid applications for 535 improved oil and gas production and associated carbon storage. J CO2 Util 2023;72:102479. 

- 536 [77] Shiga M, Morishita T, Sorai M. Interfacial tension of carbon dioxide-water under conditions of 537 CO2 geological storage and enhanced geothermal systems: a molecular dynamics study on the 538 effect of temperature. Fuel 2023;337:127219. 

- 539 [78] Minkara MS, et al. Monte Carlo simulations probing the liquid/vapour interface of wa540 ter/hexane mixtures: adsorption thermodynamics, hydrophobic effect, and structural analysis. 541 Mol Phys 2018;116:3283–91. 

- 542 [79] Naeiji P, Woo TK, Alavi S, Ohmura R. Molecular dynamics simulations of interfacial properties 543 of the CO2–water and CO2–CH4–water systems. J Chem Phys 2020;153. 

- 544 [80] Zhao L, Tao L, Lin S. Molecular dynamics characterizations of the supercritical CO2–mediated 545 hexane–brine interface. Ind Eng Chem Res 2015;54:2489–96. 

- 546 [81] Ebigbo A, Golfier F, Quintard M. A coupled, pore-scale model for methanogenic microbial 547 activity in underground hydrogen storage. Adv Water Resour 2013;61:74–85. 

- 548 [82] Yuan L, Zhao C, Xu Y, Zhang Y. Molecular dynamics simulation of CO2 diffusion in a car549 bonated water–decane system. Energies 2020;13:6031. 

- 550 [83] Chang Q, et al. An atomistic model of aged asphalt guided by the oxidation chemistry of 551 benzylic carbon with application to asphalt rejuvenated with a triglyceride. Construct Build 552 Mater 2023;400:132743. 

- 553 [84] Chang Q, Huang L, Wu Y. Evaluating the influence of waste cooking oil molecular structure 554 on aged asphalt modification. Construct Mater 2023;3:543–57. 

28 

- 555 [85] Deng X, Zhang Q, Zhang Z, Li Q, Liu X. Adsorption and diffusion behavior of CO2/H2 mixture 556 in calcite slit pores: a molecular simulation study. J Mol Liq 2022;346:118306. 

- 557 [86] Groß T, Buchhauser J, L¨udemann H-D. Self-diffusion in fluid carbon dioxide at high pressures. 558 J Chem Phys 1998;109:4518–22. 

- 559 [87] Dawson R, Khoury F, Kobayashi R. Self-diffusion measurements in methane by pulsed nuclear 560 magnetic resonance. AIChE J 1970;16:725–9. 

- 561 [88] Cadogan SP, Maitland GC, Trusler JM. Diffusion coefficients of CO2 and N2 in water at 562 temperatures between 298.15 K and 423.15 K at pressures up to 45 MPa. J Chem Eng Data 563 2014;59:519–25. 

- 564 [89] Pereira LM, et al. Study of the impact of high temperatures and pressures on the equilib565 rium densities and interfacial tension of the carbon dioxide/water system. J Chem Therm 566 2016;93:404–15. 

- 567 [90] Liu Y, Li HA, Okuno R. Measurements and modeling of interfacial tension for CO2/CH4/brine 568 systems under reservoir conditions. Ind Eng Chem Res 2016;55:12358–75. 

29 

