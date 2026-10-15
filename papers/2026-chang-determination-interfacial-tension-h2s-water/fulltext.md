# Determination of interfacial tension for H2-H2S-water and CH4-H2S-water mixtures under different geological conditions for underground hydrogen storage

**Authors:** Qiuhao Chang, David Dempsey, Liangliang Huang  
**Published in:** Journal of Energy Storage (2026)  
**DOI (version of record):** https://doi.org/10.1016/j.est.2025.119683  
**This copy:** Accepted manuscript (peer-reviewed, author's version). Text extracted from the PDF at https://ddempsey.github.io/papers/2026-chang-determination-interfacial-tension-h2s-water/chang2026-determination-interfacial-tension.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** Accepted manuscript. © 2026. This manuscript version is made available under the CC-BY-NC-ND 4.0 license https://creativecommons.org/licenses/by-nc-nd/4.0/. The version of record is available at https://doi.org/10.1016/j.est.2025.119683  
**Licence:** CC BY-NC-ND 4.0 https://creativecommons.org/licenses/by-nc-nd/4.0/  

---
- 1 

Determination of interfacial tension for H 2 -H 2 S-water and 

- 2 CH 4 -H 2 S-water mixtures under dierent geological conditions for 

- 3 underground hydrogen storage 

4 

Qiuhao Chang<sup>a</sup> , David Dempsey<sup>a,*</sup> , Liangliang Huang<sup>b,*</sup> 

- 5 a Department of Civil and Natural Resources Engineering, University of Canterbury, Christchurch, 8041, 6 New Zealand 

- 7 b School of Sustainable Chemical, Biological and Materials Engineering, University of Oklahoma, Norman, 8 73019, United States 

- 9 * Corresponding authors. 

- 10 E-mail addresses: david.dempsey@canterbury.ac.nz (D. Dempsey), hll@ou.edu (L. Huang). 

- 11 Keywords: 

- 12 Underground hydrogen storage 

- 13 Gas-water interface 

- 14 Molecular dynamics simulation 

- 15 Interfacial tension 

- 16 Hydrogen sulde 

- 17 Regression model 

### 18 

# Abstract 

- 19 Hydrogen, a renewable energy source, is expected to see steadily increasing production to meet 

- 20 global net-zero targets. Depleted hydrocarbon reservoirs, with their large storage capacity, oer a 

- 21 promising solution for large-scale underground hydrogen storage (UHS). Stored hydrogen (H 2 ) and 

- 22 cushion gases (e.g., CH 4 ) may coexist with residual hydrogen sulde (H 2 S) or H 2 S generated locally 

- 23 through geochemical reactions or microbial activity. As gas composition signicantly inuences the 

- 24 interfacial tension (IFT) between gas and pore water, the distribution and dynamics of H 2 and CH 4 

- 25 in depleted reservoirs are aected by H 2 S under reservoir conditions. This study presents newly 

- 26 determined IFTs of H 2 -H 2 S-water and CH 4 -H 2 S-water mixtures at 298 K and 343 K with pressures 

1 

- 27 ranging from 10 to 30 MPa using molecular dynamics (MD) simulations. Results reveal that IFT 

- 28 decreases with increasing pressure, temperature, and H 2 S concentration, with distinct mechanisms 

- 29 driving these variations. Notably, even small amounts of H 2 S (e.g., 10 mol%) signicantly reduce 

- 30 IFT, underscoring its critical role in gas-water interactions. With simulated IFT data, two regression 

- 31 models are developed to predict the IFTs of H 2 -H 2 S-water and CH 4 -H 2 S-water mixtures under 

- 32 geological conditions. This study provides comprehensive IFT expressions for CH 4 -H 2 S-water and 

- 33 H 2 -H 2 S-water mixtures and oers insights into the mechanisms underlying IFT variations for UHS 34 applications. 

### 35 

# 1. Introduction 

- 36 The development and utilization of renewable energy resources are important in the global energy 

- 37 transition and future decarbonization. It is reported that approximately 2030 % of the world's 

- 38 energy may come from renewable energy resources around 2040 [1,2]. Green hydrogen, as a renewable 

- 39 energy resource with comparatively low carbon emissions, high energy density, and wide applications 

- 40 in petrochemical feedstocks, will play an important role in the future energy system. As H 2 demand 

- 41 and production increase annually, up to 500600 Mt. may eventually be required for dierent 

- 42 applications including transport, rening, industry, and buildings [3]. A challenge arises that such 

- 43 a large demand and production of H 2 would require large-scale storage options as buer for any 

- 44 mismatch. Underground porous media such as depleted hydrocarbon reservoirs may have sucient 

- 45 pore space to provide a solution for underground hydrogen storage (UHS) [4]. At almost the same 

- 46 per-unit cost, UHS could provide a larger capacity for H 2 storage than surface storage technologies 

- 47 like cryogenic or high-pressure tanks [5]. For example, in comparison, the storage capacity of depleted 

- 48 hydrocarbon reservoirs could be as high as 1 billion Nm<sup>3</sup> , whereas cryogenic or high-pressure tanks 

- 49 could only reach up to approximately 9 million Nm<sup>3</sup> in maximum [57]. In addition to providing such 

- 50 large-scale storage, depleted hydrocarbon reservoirs often have existing infrastructure and proven 51 caprock integrity [4]. Hence, they present attractive options for consideration of UHS [8,9]. 

- 52 When applying UHS in a depleted hydrocarbon reservoir, it may be necessary rst to inject a 

- 53 cushion gas (e.g. CH 4 ) to maintain the reservoir pressure [10,11], before injecting the H 2 working 

- 54 gas. During the storage process, a possible safety and quality issue is hydrogen sulde (H 2 S) which 

2 

- 55 could be generated locally by geochemical (abiotic) or biological (biogenic) interactions [12,13]. For 

- 56 example, abiotic H 2 S could be generated from rocks commonly found in hydrocarbon reservoirs like 57 anhydrite (CaSO 4 ) and pyrite (FeS 2 ). Water-rock interactions could produce H 2 S directly [14] or a 58 variety of sulfur-based compounds including sulphates (SO<sup>2</sup> 4<sup>_−_),thiosulfates(S2O2</sup> 3<sup>_−_),andelemental</sup> 

- 59 sulfur (S) [15,16], which in turn can then be biologically reduced to H 2 S by microorganisms with 60 the presence of H 2 [17,18], as given by Eq. (1): 

- 61 Similarly, CH 4 as a cushion gas for UHS, or generated locally by methanogens, could react with 

- 62 CaSO 4 to form H 2 S [14]. The generated H 2 S could cause unwanted side eects such as souring, 

- 63 corrosion, or stress-cracking of steel. Furthermore, H 2 S in local pore spaces can aect the interfacial 

- 64 tension (IFT) between gas mixtures (H 2 /CH 4 ) and residual pore water, and hence their distribution 

- 65 in the reservoir [19,20]. Thus, it is important to determine the IFT between pore water with gas 66 mixtures of H 2 -H 2 S and CH 4 -H 2 S under geological conditions. 

- 67 The eect of H 2 S as an impurity species on gas-water IFT has been investigated in recent years 

- 68 in the context of both UHS, carbon dioxide capture and sequestration (CCS) and other acid gas 69 geo-storage. For example, Shah et al. [21] used the pendant drop method to determine the IFTs 

- 70 between water with a mixture of CO 2 and H 2 S at 77<sup>_◦_</sup> C with pressures up to 15.6 MPa. Their result 

- 71 shows that 30 mol% H 2 S with CO 2 decreases the water-CO 2 IFT and thus capillary failure would be 

- 72 enhanced during CO 2 geological storage if the injected gas is enriched in H 2 S. Direct experimental 

- 73 measurement of the IFT involving H 2 S species is challenging due to safety, corrosion and toxicity 74 risks. Theoretical models combined with an Equation of State (EoS) have been an alternative 

- 75 method for IFT determination of H 2 S systems. However, prior studies have mainly focused on IFT 

- 76 between pure H 2 S and water under dierent pressure and temperature conditions. For instance, 

- 77 Shah and Broseta [22], Khosharary and coworkers [23] applied the gradient theory in conjunction 

- 78 with the PR-EoS and SAFT-EoS respectively to determine the H 2 S-water IFT at temperatures up 79 to 398 K and pressures up to 60 MPa. 

- 80 In addition to theoretical models, computational approaches of molecular simulation such as 

- 81 Monte Carlo (MC) and Molecular Dynamics (MD) have also been used to determine the H 2 S-water 

3 

- 82 and H 2 S-brine IFTs at temperatures from 323 to 393 K and pressures up to 30 MPa [2426]. In a 

- 83 notable study by Ofori et al. [24], molecular behaviors at the H 2 S-water interface under dierent 

- 84 pressure and temperature conditions were investigated using MD simulations. They found that H 2 S 

- 85 molecules would adsorb at the interface when below their saturation pressure, while absorbing into 

- 86 the water phase above the threshold pressure. To study the eect of H 2 S as an impurity on CO 2 - 

- 87 water IFT for CO 2 sequestration in aquifers, Chen et al. determined the IFT between water with 

- 88 a mixture of CO 2 and H 2 S at 318 K and 20 MPa using MD simulations [27]. Their results show 89 that 20 mol% H 2 S had an outsized impact, reducing the CO 2 -water IFT by 65 %. Focusing on 

- 90 IFT variations between water and H 2 /CH 4 with H 2 S generated from microorganism activity during 

- 91 UHS, Chang et al. [19] used MD simulations to develop IFT expressions of H 2 -H 2 S-water and CH 4 - 92 H 2 S-water systems under geological conditions of 343 K and 14.5 MPa. The accumulation of H 2 S 93 at the H 2 -water and CH 4 -water interface was observed based on density distribution proles, and 94 this led to an IFT reduction between H 2 -water and CH 4 -water. 

- 95 It is known that the IFT between gas-pore water in local pore spaces varies with the local pore 

- 96 pressure/temperature and the amount of H 2 S generated. Our previous study determined the IFTs 97 of H 2 -H 2 S-water and CH 4 -H 2 S-water mixtures with dierent amounts of H 2 S for UHS at 343 K 98 and 14.5 MPa. This subsequent study focuses on IFT determination over a wider range of pressure 99 and temperature conditions. The preliminary results we presented at the Society of Petroleum 

- 100 Engineers (SPE) conference [28] validated pressure and temperature eects on the IFT of H 2 -H 2 S- 101 water and CH 4 -H 2 S-water mixtures. Therefore, this study focuses on extending IFT estimation 102 of H 2 -H 2 S-water and CH 4 -H 2 S-water mixtures to a wider range of geological conditions for UHS. 103 Here, IFTs of H 2 -water and CH 4 -water with 1040 mol% H 2 S are newly determined under 298 K 104 and 343 K with pressures from 10 to 30 MPa. In addition, the fundamental mechanism behind the 105 pressure/temperature-dependence of IFT is investigated. 

- 106 The manuscript is organized as follows: Section 2 introduces the methodology and details of the 107 MD simulation. In Section 3, validation cases for the MD simulations are rstly introduced. Then, 

- 108 IFTs of H 2 -H 2 S-water and CH 4 -H 2 S-water mixtures under dierent P/T conditions are reported via 109 MD simulations. This is accompanied by a study of the physical mechanisms underpinning their 110 variation. The IFT regression models with limitations are also nalized in this section. Conclusions 

- 111 are summarized in Section 4. 

4 

### 112 

# 2. Methodology 

- 113 Molecular dynamics simulation was used in this study for IFT calculations because it has accurately 

114 determined the IFTs of gas-water mixtures involving H 2 , CH 4 , H 2 S, and water under geological 115 conditions [24,26,2934]. We used the Large-scale Atomic/Molecular Massively Parallel Simulator 116 (LAMMPS) for all MD simulations [35]. The gas-water interfacial model we built in our previous 117 paper [19] was also used in this study, where the water phase was sandwiched between two gas 118 mixtures, as shown in Fig. 1. The water phase consisted of 2048 water molecules, while the gas 119 mixture contained 1024 molecules in total. As the composition shown in Table 1, the gas mixture 120 consisted of H 2 S with H 2 or CH 4 separately in dierent H 2 S concentrations, from 0 mol% to 40 121 mol%. 

122 To describe the molecular potential, the F3C and Vrabec single-site force elds were used for 123 H 2 O and H 2 respectively. The TraPPE-UA force eld was used for CH 4 and Nath's force eld was 124 applied for H 2 S [3639]. The accuracy of these force elds has been validated in the IFT calculation 125 of similar systems [19,26,32,37]. The particle-particle particle-mesh (PPPM) method was employed 126 to calculate Coulombic interactions with a precision of 1 _×_ 10<sup>_−_5</sup> , and the 126 Lennard-Jones (LJ) 127 potential was utilized for describing non-bonded interactions. Lorentz-Berthelot combining rules 128 were used to describe the cross LJ parameters between dierent molecules through Eq. (2) and (3) 129 with force eld parameters listed in the Table 2, where _ε_ and _σ_ are the depth of the potential well 130 and nite distance with zero potential, respectively. 

131 

132 To minimize truncation and system-size eects in calculating interfacial properties, the cuto dis133 tances for the LJ potential and Coulombic interactions were set to 15 Å (approximately 4 _σ_ ), ensur134 ing they remained less than half the minimum dimension of the simulation box [33,40,41]. Periodic 135 boundary conditions (P-P-P) were applied during the simulation. 

136 For (H 2 S + H 2 )/water and (H 2 S + CH 4 )/water systems with dierent H 2 S concentrations, the 137 initial simulation box was set to be 3.4 nm _×_ 3.4 nm _×_ 10 nm using the Packmol package [42]. 

5 

138 System pressures were simulated in the range of 10 to 30 MPa, corresponding to UHS operating 139 pressure conditions [6]. For temperature conditions, UHS is normally implemented at depths of 140 up to 1000 m [4,43]. With a geothermal gradient of approximately 0.04 K/m, UHS operating 141 temperatures range from 323 to 343 K [4,43], consistent with the temperature range of 298343 K 142 reported in previous UHS-related studies (listed in Table S1). Furthermore, it has been reported that 143 optimal temperatures for the activity of H 2 S-generating bacteria, such as sulfate-reducing bacteria, 144 are typically below 323 K [4446]. Therefore, considering both the typical UHS operating conditions 145 and the temperature range in which H 2 S-generating bacteria are most active, two temperatures, 298 146 K and 343 K, were simulated. 

147 The system was initialized with a 1-ns run within the NVT ensemble to avoid molecular overlap. 148 Then, a 16-ns run under the NPzT ensemble was applied for the system to reach its equilibrium 149 state. Finally, the IFT ( _γ_ ) was determined by averaging trajectories from the convergent state of 150 another 20-ns production run under the _NPzT_ ensemble, through the well-known Gibbs IFT method 151 [4750]: 

152 where _Lz_ is the length of the simulation box in the Z direction, while _Pxx_ , _Pyy_ , and _Pzz_ are the 153 respective diagonal components of the pressure tensor. The constant factor of ½ comes from the two 154 distinct interfaces within the system as shown in Fig. 1. 

Fig. 1. Gas-water interfacial model, (H 2 + H 2 S)/water system with 10 mol% H 2 S as an example, red: H 2 S molecule, green: H 2 molecule, and blue: water molecule. 

6 

Table 1 

Gas composition in <u>(H</u> 2 S + H 2 <u>)/water</u> and <u>(H</u> 2 S + CH 4 <u>)/water</u> systems separately. 

|H2S mole %|No. of H2S molecules|No. of H2|(or CH4) molecules|
|---|---|---|---|
|0|0|1024||
|10|103|921||
|20|205|819||
|30|307|717||
|40|410|614||

Table 2 

Force eld <u>parameters</u> for each species. 

|Atoms|_ε_ (kcal_•_mol<sup>_−_1</sup>)|_σ_ (Å)|
|---|---|---|
|H (H2O)|0.01|0.82|
|O (H2O)|0.1848|3.166|
|H(H2S)|0.0077|0.98|
|S(H2S)|0.4968|3.72|
|H2|0.0679|2.96|
|CH4|0.2941|3.73|

155 

# 3. Results and discussion 

156 

## 3.1. IFT determination 

157 Before the IFT determination of H 2 -H 2 S-water and CH 4 -H 2 S-water mixtures, a series of fundamental 158 calculations were rst completed to validate the molecular model, force eld, computational method, 159 and interface system used in this study. At 343 K and 14.5 MPa, validations from our previous study 160 [19] including the bulk densities and IFTs of H 2 -H 2 O, CH 4 -H 2 O, and H 2 S-H 2 O agreed well with the 161 experimental data. Here, in addition to our previous validation [19], the bulk densities and IFTs of 162 H 2 -H 2 O, CH 4 -H 2 O, and H 2 S-H 2 O mixtures at 298 K and 343 K with pressures from 10 to 30 MPa 163 were calculated and compared with the experimental data for further validation. 

7 

164 We validated the IFTs of pure gas-water systems involving these species but not their gas mixture165 water system directly because no experimental IFT results of such H 2 -H 2 S-H 2 O and CH 4 -H 2 S-H 2 O 166 mixtures have yet been reported. In addition, the local density prole of the molecules could be 167 used to study molecular distribution in bulk and interface regions, which is useful for exploring 168 fundamental mechanisms of IFT variation. This is the reason why, besides IFT validation, a series 169 of density checks of related species under the investigated geological conditions were developed. 170 In detail, the bulk uid system of H 2 , CH 4 , H 2 S, and H 2 O was constructed individually as shown 171 in Fig. 2(a) to validate their bulk densities. For the IFT calculation of H 2 -H 2 O, CH 4 -H 2 O, and 172 H 2 S-H 2 O, the interfacial model introduced in Sec. 2 was used, consisting of 2048 water molecules 173 and 1024 gas molecules separately, pure H 2 -water interfacial system shown as an example in Fig. 174 2(b). 

175 Fig. 3 shows good agreement between bulk densities of H 2 , CH 4 , H 2 S, and H 2 O determined 176 from our MD simulations and values reported from the National Institute of Standards and Tech177 nology(NIST) database [51]. The relative deviations of these simulated densities from NIST data 178 range from 0.3 % to 6 %. The IFTs between H 2 -H 2 O, CH 4 -H 2 O, and H 2 S-H 2 O were determined and 179 compared with available data in Fig. 4, also showing good consistency. For example, the relative 180 deviations of the simulated IFTs from experimental results are within approximately 7 %, falling 181 within the deviation range of 5 % to 20 % reported before [52]. It is noted that since limited experi182 mental data has been reported for H 2 S-H 2 O IFTs, only IFTs at 343 K with two geological pressures 183 were used for validation. This exercise gives us condence in the reliability of the molecular model, 184 force eld, computational methodology, and gas-water system to explore dierent IFT values of 185 H 2 -H 2 S-water and CH 4 -H 2 S-water mixtures. 

186 With the validated MD simulation, IFTs were determined for H 2 -H 2 S-water and CH 4 -H 2 S-water 187 mixtures at 298 K and 343 K with pressures of 10 MPa, 14.5 MPa, 22.5 MPa, and 30 MPa (Table 188 3 and Table 4). In subsequent sections, these IFTs are depicted versus temperature, pressure, and 189 H 2 S concentration. 

190 

## 3.2. Temperature eect on IFT 

191 IFTs of H 2 -H 2 S-water and CH 4 -H 2 S-water mixtures as a function of H 2 S concentration (mol%) 192 at 298 K and 343 K are shown in Fig. 5 and Fig. 6, respectively. The results show that IFT 

8 

- 193 between water with H 2 -H 2 S and CH 4 -H 2 S mixtures decreases with H 2 S concentration increases in 

- 194 all P/T conditions. This is because as the H 2 S concentration in the gas mixture increases, more H 2 S 195 accumulates at the gas-water interface, yielding a continuous reduction in IFT [19]. It is notable that 196 even relatively low concentrations of H 2 S aect the IFTs of H 2 -water and CH 4 -water. For example, 197 under simulated P/T conditions, a 10 mol% H 2 S results in an IFT reduction for both H 2 -water and 198 CH 4 -water, ranging from approximately 7 mN/m to 14 mN/m. While, at a higher concentration, 199 e.g. 40 mol%, the IFT reduction increases signicantly, ranging from 31 mN/m to 49 mN/m. These 200 results emphasized that in-situ generated H 2 S in pore space has an important eect on gas-water 201 IFT under geological conditions. 

- 202 In addition, the results in Fig. 5 clearly show that under the same pressure condition, the 203 IFT between H 2 -water with the same amount of H 2 S at 298 K is larger than that at 343 K. A 204 similar temperature eect on the IFT of CH 4 -H 2 S-water mixtures was also observed in Fig. 6. Such 205 temperature eect on IFTs between H 2 -water, CH 4 -water, and H 2 S-water was reported by Hosseini 206 et al., Chow et al., Schmidt et al., and Shah et al. [21,53,56,57]. However, the dierences in IFTs for 207 both H 2 -H 2 S-water and CH 4 -H 2 S-water mixtures between 298 K and 343 K are not signicant, all 208 of which are within approximately 11 mN/m. Compared to the large impact of H 2 S concentration 

- 209 on gas-water IFT, the eect of temperature is relatively minor. 

Fig. 2. (a) Bulk water system consists of 1000 water molecules. (b) Pure H 2 -water system consists of 2048 water and 1024 H 2 molecules. 

9 

Fig. 3. Bulk densities of H 2 , CH 4 , H 2 S, and H 2 O at (a) 298 K and (b) 343 K reported from the NIST database and determined from our MD simulations. 

Fig. 4. IFTs of H 2 O-H 2 (square), CH 4 -H 2 O(circle), and H 2 S-H 2 O(triangle) at (a) 298 K and (b) 343 K with dierent pressures. Experimental values of H 2 O-H 2 at 298 K were directly measured by Chow et al. [53] and we used their empirical correlation for IFT between H 2 -H 2 O at 343 K. CH 4 -H 2 O IFTs at 298 K and 353 K (not available at 343 K) are reported by Sachs and Meyn [54] and Ren et al. [55]. Experimental results of H 2 S-H 2 O IFT at 343 K reported by Shat et al. [21] closely align with the simulated values. 

10 

Table 3 

IFTs and standard deviations <u>(in</u> mN/m) of H 2 -H 2 S-water mixture under dierent P/T conditions. 

|H2-H2S-|water at|343 K|||||||
|---|---|---|---|---|---|---|---|---|
||10 mol|% H2S|20 mol|% H2S|30 mol|% H2S|40 mo|l% H2S|
|P/MPa|IFT|Std|IFT|Std|IFT|Std|IFT|Std|
|10|64.52|1.08|51.81|1.43|40.93|0.31|28.53|1.09|
|14.5|58.21|1.67|47.99|0.71|35.63|1.63|26.13|0.13|
|22.5|54.89|0.60|44.87|0.57|32.25|1.31|23.45|1.07|
|30|53.85|0.71|42.99|0.32|30.73|0.19|23.36|0.17|
|H2-H2S-|water at|298 K|||||||
||10 mol|% H2S|20 mol|% H2S|30 mol|% H2S|40 mo|l% H2S|
|P/MPa|IFT|Std|IFT|Std|IFT|Std|IFT|Std|
|10|68.72|0.82|56.73|1.27|43.28|0.28|30.31|0.58|
|14.5|67.19|1.46|53.59|0.37|40.68|0.33|28.29|1.83|
|22.5|63.98|0.41|49.53|0.14|39.21|1.33|26.13|0.26|
|30|61.42|0.76|47.46|1.43|35.69|0.42|25.82|1.71|

11 

Table 4 

IFTs and standard deviations <u>(mN/m)</u> of CH 4 -H 2 S-water mixture under dierent P/T conditions. 

|CH4-H2S|-water|at 343 K|||||||
|---|---|---|---|---|---|---|---|---|
||10 mo|l% H2S|20 mol|% H2S|30 mol|% H2S|40 mo|l% H2S|
|P/MPa|IFT|Std|IFT|Std|IFT|Std|IFT|Std|
|10|50.63|0.82|39.13|0.29|30.72|1.24|22.36|0.38|
|14.5|45.59|1.62|34.33|0.03|26.38|1.91|18.83|0.13|
|22.5|42.52|1.06|32.84|0.24|24.89|1.00|17.73|0.79|
|30|42.06|0.53|32.16|0.77|24.07|0.61|17.06|0.63|
|CH4-H2S|-water|at 298 K|||||||
||10 mo|l% H2S|20 mol|% H2S|30 mol|% H2S|40 mo|l% H2S|
|P/MPa|IFT|Std|IFT|Std|IFT|Std|IFT|Std|
|10|52.72|1.71|44.45|0.76|32.92|1.14|24.58|0.24|
|14.5|47.71|1.25|40.09|0.54|30.04|0.89|22.79|1.27|
|22.5|45.43|1.42|37.09|0.66|28.29|1.76|21.26|0.08|
|30|44.61|1.18|36.84|1.40|26.99|1.55|21.45|0.37|

210 The cohesive force between water molecules is one of the key factors aecting gas-water IFT at 211 the interface [52,58]. A larger cohesive force results in a stronger ability of water to minimize its 212 surface area at the interface with a higher gas-water IFT. Water cohesive energies of H 2 /CH 4 -H 2 S- 213 water mixtures were computed at 298 K and 343 K. With the method reported by Alshammari et 214 al. [52], water cohesive energy was determined as the water-water intermolecular interaction energy 215 (including electrostatic and van der Waals forces) divided by the number of water molecules. Here, 216 water cohesive energies of H 2 -H 2 S-water and CH 4 -H 2 S-water mixture with 20 mol% H 2 S are shown 217 as examples in Fig. 7. The results indicate that water cohesive energy decreases as temperature 218 increases, consistent with their IFT variation. In comparison, the impact of pressure on the cohesive 219 energy of water is small (Fig. 7). 

220 We believe that as water cohesive energy decreases, the distance between water molecules would 221 increase, leading to an expansion of gas-water interface. Previous studies have reported that gas222 water IFT decreases with an increase in interface width [47,48,58]. Therefore, further analyses of 223 interface width in relation to temperature are discussed in the following paragraphs. 

12 

224 Local density proles of H 2 -H 2 S-water and CH 4 -H 2 S-water mixtures with 20 mol% H 2 S shown 225 in Fig. 8 are presented in such a way as to determine the interface width. In detail, the local density 226 prole of each species in the mixture was determined by dissecting the simulation domain into 0.1-Å 227 thick slices along the Z direction, with the mass density of each slice calculated individually. The 228 commonly used Gibbs dividing surface (GDS) was calculated to determine the gas-water interface 229 width, where the width is dened as the distance between the boundaries located at 10 % and 90 % 230 of the bulk water density [47,48,5860]. 

231 For example, the interface width of the H 2 -H 2 S-water mixture at 343 K and 14.5 MPa was dened 232 as the GDS width in Fig. 8(a), two boundaries represented by black dashed lines. The gas mixture 233 remains in the vapor phase on the left side of the interface region [61], while water presents as the 234 liquid phase on the right. The H 2 S density prole indicates that H 2 S molecules accumulated at the 235 interface in contact with water because the local densities of H 2 S in the interface region are larger 236 than those in the gas mixture and water phases, consistent with the studies by Ofori et al. [24,62] 237 and Dehaghani et al. [26]. Values of GDS widths of H 2 -H 2 S-water and CH 4 -H 2 S-water mixtures 238 with 20 mol% H 2 S at 298 K and 343 K are listed in Table 5. Consistent with water cohesive energy 239 determined in Fig. 7, as temperature increases, the cohesive force between water molecules decreases 240 [58], yielding the expansion of the GDS width and possibly IFT reduction. 

241 

## 3.3. Pressure eect on IFT 

242 In Fig. 9 and Fig. 10, IFTs of H 2 -H 2 S-water and CH 4 -H 2 S-water mixtures are shown as a function 243 of pressure at 298 K and 343 K. It is clear that IFTs of both H 2 -H 2 S-water and CH 4 -H 2 S-water 244 mixtures decrease as pressures increase. Such pressure eect on IFT was also reported by Chow et 245 al. for H 2 -water [53], Ren et al. for CH 4 -water [55], and Dehaghani et al. for H 2 S-water systems [26]. 246 We determined the maximum dierences in IFTs for H 2 -H 2 S-water and CH 4 -H 2 S-water mixtures 247 between 10 MPa and 30 MPa, all of which were within 10 mN/m at both 298 K and 343 K. This 248 result indicates that the eect of pressure exists but is not as strong as that of H 2 S concentration 249 on gas-water IFT. 

250 Fig. 7 illustrates that under isothermal conditions, the pressure eect on water-water inter251 molecular interactions is limited. However, previous studies have reported that increasing pressure 252 compresses the gas phase and enhances the intermolecular interactions between the gas and water 

13 

- 253 phases, yielding an IFT reduction [56,63]. In Fig. 11, the intermolecular interaction energies includ254 ing electrostatic and van der Waals forces, for H 2 S-water, H 2 -water, and CH 4 -water in H 2 -H 2 S-water 255 and CH 4 -H 2 S-water mixtures at 343 K under dierent pressures are determined respectively. Be256 sides, based on their local density proles, the average gas densities in the interface region (GDS 257 region) are calculated and also presented in Fig. 11, corresponding to their interaction energies. The 258 results show that as pressure increases, the intermolecular interactions between water and H 2 S/CH 4 259 increase, while interaction between water with H 2 exhibits a slight change. As the result, more H 2 S 260 and CH 4 molecules accumulate at the gas-water interfaces of H 2 -H 2 S-water and CH 4 -H 2 S-water 261 mixtures as pressure increases. Since the IFT between H 2 S and water is signicantly smaller than 262 that between H 2 -water and CH 4 -water (Fig. 4), the more H 2 S accumulated at the interface further 263 decreases the gas-water IFT as pressure rises. 

- 264 As additional supporting evidence, with the same method described in Sec 3.2, GDS widths of 

- 265 H 2 -H 2 S-water and CH 4 -H 2 S-water mixtures with 20 mol% H 2 S were determined and listed in Table 266 6 under dierent pressure conditions. Unlike the temperature eect on GDS width, as pressure 267 increases, GDS width slightly decreases. This slight shrinkage of the interface could be attributed 268 to the compression caused by increasing pressure. As shown in Table 7, the lengths ( _Lz_ ) of the 269 simulation box for H 2 -H 2 S-water and CH 4 -H 2 S-water mixtures are determined under dierent pres- 

- 270 sures. As pressure increases, the length of the simulation box decreases due to the compression. 

- 271 Such compression forces the gas mixture and water to merge together, yielding a slight decrease in 272 GDS width and possibly losing its tension at the interface [58]. 

14 

Fig. 5. IFTs of H 2 -H 2 S-water mixtures as a function of H 2 S concentration under dierent pressure and temperature conditions: (a)10 MPa, (b)14.5 MPa, (c)22.5 MPa, and (d)30 MPa. 

273 3.4. Regression model 

274 In Sec 3.2 and 3.3, the eects of pressure, temperature, and H 2 S concentration on gas-water IFT 275 are discussed. Overall, the H 2 S concentration in the gas mixture has a signicant impact on gas276 water IFT, whereas pressure and temperature have only a minor eect. Determining the IFTs 277 of H 2 -H 2 S-water and CH 4 -H 2 S-water mixtures under geological conditions is crucial for predicting 278 gas/water distribution in the reservoir during UHS. To avoid the high computational costs of using 279 MD simulations, regression models were developed to predict the IFTs of H 2 -H 2 S-water and CH 4 - 280 H 2 S-water mixtures under geological conditions, valid at 298 K _<_ T _<_ 343 K, 10 MPa _<_ P _<_ 

15 

281 30 MPa, and an H 2 S concentration smaller than 40 mol%. Since pressure and temperature have a 282 minor eect on gas-water IFT, and Fig. 5 and Fig. 6 nearly show a linear relationship between H 2 S 283 concentration and gas-water IFT, hence a multiple linear regression model was used to t the IFT 284 data from Table 3 and Table 4. 

285 A total of 80 data points is available for IFTs, with 40 for H 2 -H 2 S-water and another 40 for CH 4 - 286 H 2 S-water mixtures, covering H 2 S concentrations from 0 to 40 mol% under simulated P/T conditions. 287 For each gas-water mixture, 75 % of the data points (30 out of 40) were randomly selected to t the 288 regression model, while the remaining 10 data points were used to test the model. The regression 289 model for predicting the IFTs of H 2 -H 2 S-water and CH 4 -H 2 S-water mixtures is introduced as: 

_γ_ = _A_ 0 + _A_ 1 _× H_ 2 _S_ %( _mole fraction_ ) + _A_ 2 _× P_ ( _MPa_ ) + _A_ 3 _× T_ ( _K_ ) 

290 The corresponding parameters for the regression model of each gas-water mixture are listed in Table 291 8. In Fig. 12, we evaluate the accuracy of the regression models using 10 data points (T 1 to T 10 ). 292 The average absolute deviations are 1.66 mN/m for H 2 -H 2 S-water mixture and 1.71 mN/m for CH 4 - 293 H 2 S-water mixture, both showing a good consistency. Besides, the IFTs of the H 2 S-H 2 -water and 294 H 2 S-CH 4 -water systems shown in Fig. 5 and Fig. 6 were reproduced via regression models and 295 compared with the MD simulation results presented in Fig. S1 and Fig. S2 of the Supporting 296 Materials, further validating its reliability. 

297 The tted temperature coecients are _−_ 0.118 mN m<sup>_−_1</sup> K<sup>_−_1</sup> for the H 2 H 2 Swater system, and 298 _−_ 0.0896 mN m<sup>_−_1</sup> K<sup>_−_1</sup> for the CH 4 H 2 Swater system, implying average decreases of _∼_ 5.3 and _∼_ 299 4.0 mN m<sup>_−_1</sup> from 298 to 343 K, respectively. Over the same interval, increasing x (H2S) by 0.1 lowers 300 IFT by _∼_ 11.3 mN m<sup>_−_1</sup> (H 2 case) and _∼_ 8.7 mN m<sup>_−_1</sup> (CH 4 case), while raising pressure from 10 301 to 30 MPa lowers IFT by _∼_ 7.4 and _∼_ 6.1 mN m<sup>_−_1</sup> . Thus, within 298343 K, temperature plays 302 a secondary role relative to composition and pressure. We also note that the correlation is not 303 intended for use outside 298343 K. 

16 

Fig. 6. IFTs of CH 4 -H 2 S-water mixtures as a function of H 2 S concentration under dierent pressure and temperature conditions: (a) 10 MPa, (b) 14.5 MPa, (c) 22.5 MPa, and (d) 30 MPa. 

17 

Fig. 7. Water cohesive energies of (a) H 2 -H 2 S-water and (b) CH 4 -H 2 S-water mixtures with 20 mol% H 2 S. 

304 3.5. Limitations and future work 

305 While this study substantially enhances understanding of gaswater interfacial tension relevant to 306 underground hydrogen storage (UHS), several limitations must be acknowledged. First, the eects 307 of water salinity and specic ion compositions, which are known to inuence gaswater interactions, 308 were not investigated. Second, our simulations focused on binary gas mixtures of H 2 H 2 S and 309 CH 4 H 2 S, whereas geological settings can involve multi-component mixtures (e.g., H 2 CO 2 H 2 S 310 or H 2 N 2 H 2 S). Third, due to handling, safety, and toxicity risks associated with H 2 S, direct 

311 experimental validation of the simulated IFTs was not performed. 

Fig. 8. Local density proles of (a) H 2 -H 2 S-water and (b) CH 4 -H 2 S-water mixtures at 343 K and 14.5 MPa. 

18 

Table 5 

GDS widths of H <u>2</u> -H <u>2</u> S-water and CH <u>4</u> -H <u>2</u> S-water mixtures with 20 mol% H <u>2</u> S at 14.5 MPa. 

|Temperature|(K)|H2-H2S-water (Å)|CH4-H2S-water (Å)|
|---|---|---|---|
|298||4.7|4.4|
|343||5.2|5.1|

Fig. 9. IFTs of H 2 -H 2 S-water mixture with dierent H 2 S concentrations at (a)343 K and (b) 298 K under dierent pressure conditions. 

312 Only two temperatures of 298 and 343 K were simulated to bracket the operational window 

313 most relevant to near-term UHS, see also Table S-1 in the SI. Within this narrow interval, we 314 represented temperature with a rst-order term in the regression and explicitly restricted the 315 model's domain of validity to 298343 K, 1030 MPa, and H 2 S mole fraction _≤_ 0.40. Quan316 titatively, the tted temperature coecients imply average IFT decreases of _∼_ 5.3 mN m<sup>**_−_1**</sup> for 317 H 2 H 2 Swater and _∼_ 4.0 mN m<sup>**_−_1**</sup> for CH 4 H 2 Swater across 298 to 343 K, which are smaller 318 than the corresponding eects of composition (e.g., _∼_ 11.3 mN m<sup>**_−_1**</sup> and _∼_ 8.7 mN m<sup>**_−_1**</sup> decreases 319 for a 0.10 increase in H 2 S mole fraction, respectively) and comparable to the pressure eect from 10 320 to 30 MPa: _∼_ 7.4 mN m<sup>**_−_1**</sup> and _∼_ 6.1 mN m<sup>**_−_1**</sup> decreases, respectively. While the rst-order tem321 perature dependence is adequate within 298343 K, the results should not be extrapolated to 322 higher-temperature reservoirs without additional calibrations, such as targeted MD at intermediate 

- 323 temperatures or anchoring to measurements/thermodynamic models. 

19 

324 Experimental validation of the simulated IFT values for H 2 H 2 Swater and CH 4 H 2 Swater 325 remains essential to conrm accuracy and reliability. Further studies should quantify the impact 326 of brine salinity and specic ions on IFT under reservoir conditions and extend simulations 327 to multi-component gas mixtures to reect realistic reservoir compositions. Given the role of 328 IFT in shaping gaswater relative permeability and, consequently, gas distribution and recovery, 329 coupling IFT predictions with relative permeability and capillary pressure in the presence of 330 H 2 S and other gases would be valuable. Finally, to expand applicability to higher-temperature 331 reservoirs, future work should add more temperature points spanning and extending beyond 332 343 K, enabling a higher-order temperature treatment where appropriate. 

### 333 

# 4. Conclusions 

334 For underground hydrogen storage in depleted hydrocarbon reservoirs, residual hydrogen sulde 335 or H 2 S generated in situ due to geochemical and biological activities can signicantly inuence 336 gas-water interfacial tension. Accurate determination of the IFT for H 2 H 2 Swater and CH 4 H 2 S 337 water mixtures under geological conditions is critical for eectively managing underground hydrogen 338 storage (UHS). Given the risks associated with direct experimental measurement involving H 2 S, this 339 study employed molecular dynamics simulations to comprehensively evaluate the IFT behavior across 340 a broad range of conditions: H 2 S concentrations ranging from 0 to 40 mol%, temperatures of 298 K 341 and 343 K, and pressures between 10 and 30 MPa. 

20 

Fig. 10. IFTs of CH 4 -H 2 S-water mixture with dierent H 2 S concentrations at (a)343 K and (b) 298 K 

under dierent pressure conditions. 

Fig. 11. Intermolecular interaction energies and interface densities of (a) H 2 -H 2 S-water and (b) 

CH 4 -H 2 S-water mixtures with 20 mol% H 2 S at 343 K and dierent pressures. 

Table 6 

GDS widths of H 2 -H 2 S-water and CH 4 -H 2 S-water mixtures at 343 K with dierent pressures. 

|Pressure (MPa)|H2-H2S-water (Å)|CH4-H2S-water (Å)|
|---|---|---|
|10|5.33|5.15|
|14.5|5.17|5.10|
|22.5|5.00|5.10|
|30|5.00|5.05|

21 

Table 7 

Simulation-box lengths of H 2 -H 2 S-water and CH 4 -H 2 S-water mixtures at 343 K with dierent pressures. 

|Pressure (MPa)|H2-H2S-water (Å)|CH4-H2S-water (Å)|
|---|---|---|
|10|309|218|
|14.5|256|209|
|22.5|203|172|
|30|179|162|

Table 8 

Parameters of the regression model for each <u>gas-water</u> mixture. 

||A0|A1|A2|A3|
|---|---|---|---|---|
|H2-H2S-water|116.84832|_−_113.49682|_−_0.37202|_−_0.11794|
|CH4-H2S-water|89.44622|_−_87.21419|_−_0.3057|_−_0.08961|

342 The simulation results indicate that IFT consistently decreases with increased H 2 S concentra343 tion, temperature, and pressure. Even modest amounts of H 2 S (e.g., 10 mol%) markedly reduce 344 IFT between both H 2 water and CH 4 water interfaces. Notably, while temperature and pressure 345 inuence IFT moderately, the H 2 S concentration exhibits a substantially more pronounced eect. 346 Mechanistically, rising temperature reduces the cohesive energy among water molecules, leading to 347 expanded gas-water interfaces and lowering IFT. Pressure increases, on the other hand, intensify 348 intermolecular interactions at the gas-water interface, promoting H 2 S accumulation and further di349 minishing IFT. Additionally, higher pressures compact the gas and water phases, potentially merging 350 them at the interface and contributing to IFT reduction. 

351 The regression models developed in this study oer practical tools for predicting gas-water IFT 352 under realistic geological conditions. These models can be directly integrated into numerical reservoir 353 simulation software, thereby signicantly enhancing the accuracy of predictions related to hydrogen 354 storage eciency, gas recovery, and overall reservoir management. By providing robust predictive 355 capabilities, these models facilitate informed decision-making in reservoir operations, thereby con356 tributing directly to improved safety, operational eciency, and economic viability of UHS projects. 357 Moreover, the methodological approachcombining molecular dynamics simulations with regression 

22 

- 358 modelingdemonstrated in this study serves as a versatile framework applicable to other gas-water 

- 359 systems under varied geological storage scenarios. For example, cushion gases such as CH 4 , CO 2 , 

- 360 and N 2 importantly aect H 2 -water IFT under geological conditions [30,52,6467]. Currently, IFT 

- 361 data for such H 2 -cushion gas-water system remain limited for UHS and can be expanded using the 

- 362 approach introduced in this study. 

Fig. 12. IFTs determined by MD simulations and the newly developed regression model for (a) H 2 -H 2 S-water and (b) CH 4 -H 2 S-water mixtures. 

363 Collectively, the ndings contribute to a deeper fundamental understanding of the factors gov- 

- 364 erning IFT variations and underscore the critical importance of considering H 2 S eects in UHS 365 scenarios. These insights not only enhance the theoretical understanding but also translate directly 366 into practical improvements for reservoir management strategies, promoting safer and more eective 

367 implementation of underground hydrogen storage solutions. 

# 368 CRediT authorship contribution statement 

- 369 Qiuhao Chang: Writing review & editing, Writing original draft, Investigation, Formal anal370 ysis, Data curation, Conceptualization. David Dempsey: Writing review & editing, Project 

- 371 administration, Methodology, Conceptualization. Liangliang Huang: Writing review & editing, 372 Methodology, Conceptualization. 

23 

### 373 

# Funding 

- 374 This work was supported by the New Zealand government under the MBIE contract UOCX2207 for 

- 375 the Endeavour research program P�uhiko Nukut�u: a green hydrogen geostorage battery in Taranaki. 

376 L. Huang acknowledges the nancial support from the U.S. National Science Foundation under the 377 award No. 2422927. 

### 378 

# Declaration of competing interest 

379 The authors declare that they have no known competing nancial interests or personal relationships 

- 380 that could have appeared to inuence the work reported in this paper. 

### 381 

# Acknowledgments 

382 We acknowledge the OU Supercomputing Center for Education & Research (OSCER) at the Univer383 sity of Oklahoma, United States, and the Department of Civil and Natural Resources Engineering 

- 384 at the University of Canterbury, New Zealand, for computational resources and dedicated support. 

### 385 

# Appendix A. Supplementary data 

386 Supplementary data to this article can be found online at https://doi.org/10.1016/j.est.2025. 387 119683. 

# 388 Data availability 

389 Data will be made available on request. 

### 390 

# References 

391 [1] B. Petroleum, BP Energy Outlook 2030, London, January 2012, 2011. 

- 392 [2] E. Mobil, The Outlook for Energy: A View to 2040, Exxon Mobil, 2013, p. 6. 

24 

- 393 [3] D. Guan, B. Wang, J. Zhang, R. Shi, K. Jiao, L. Li, et al., Hydrogen society: from present to 394 future, Energy Environ. Sci. 16 (2023) 49264943. 

- 395 [4] R. Tarkowski, Underground hydrogen storage: characteristics and prospects, Renew. Sust. En396 erg. Rev. 105 (2019) 8694. 

- 397 [5] A. Nicol, D. Dempsey, E. Yates, K. Higgs, M. Beggs, L. Adam, Underground Hydrogen Storage 398 in the Taranaki region, New Zealand, 2022. 

- 399 [6] D. Zivar, S. Kumar, J. Foroozesh, Underground hydrogen storage: a comprehensive review, Int. 400 J. Hydrog. Energy 46 (2021) 2343623462. 

- 401 [7] A. Amid, D. Mignard, M. Wilkinson, Seasonal storage of hydrogen in a depleted natural gas 402 reservoir, Int. J. Hydrog. Energy 41 (2016) 55495558. 

- 403 [8] N.S. Muhammed, M.B. Haq, D.A. Al Shehri, A. Al-Ahmed, M.M. Rahman, E. Zaman, et al., 404 Hydrogen storage in depleted gas reservoirs: a comprehensive review, Fuel 337 (2023) 127032. 

- 405 [9] L.K. Sekar, R. Kiran, E.R. Okoroafor, D.A. Wood, Review of reservoir challenges associated 406 with subsurface hydrogen storage and recovery in depleted oil and gas reservoirs, J. Energy 407 Storage 72 (2023) 108605. 

- 408 [10] M. Kanaani, B. Sedaee, M. Asadian-Pakfar, Role of cushion gas on underground hydrogen 409 storage in depleted oil reservoirs, J. Energy Storage 45 (2022) 103783. 

- 410 [11] M. Zamehrian, B. Sedaee, Underground hydrogen storage in a partially depleted gas condensate 411 reservoir: inuence of cushion gas, J. Pet. Sci. Eng. 212 (2022) 110304. 

- 412 [12] S.P. Gregory, M.J. Barnett, L.P. Field, A.E. Milodowski, Subsurface microbial hydrogen cycling: 413 natural occurrence and implications for industry, Microorganisms 7 (2019) 53. 

- 414 [13] N. Dopel, S. Jansen, J. Gerritse, Microbial side eects of underground hydrogen storage 415 knowledge gaps, risks and opportunities for successful implementation, Int. J. Hydrog. Energy 416 46 (2021) 85948606. 

- 417 [14] R. Worden, P. Smalley, Reactions controlling H {sub 2} S concentration in deep carbonate 418 reservoirs, AAPG Bull. 79 (1995). 

25 

- 419 [15] G. Hu, K. Dam-Johansen, S. Wedel, J.P. Hansen, Decomposition and oxidation of pyrite, Prog. 420 Energy Combust. Sci. 32 (2006) 295314. 

- 421 [16] Y. Zhang, Q. Li, X. Liu, B. Xu, Y. Yang, T. Jiang, A thermodynamic analysis on the roasting 422 of pyrite, Minerals 9 (2019) 220. 

- 423 [17] X. Tao, Y. Li, H. Huang, Y. Chen, P. Liu, X. Li, Desulfovibrio vulgaris Hildenborough prefers 424 lactate over hydrogen as electron donor, Ann. Microbiol. 64 (2014) 451457. 

- 425 [18] W. Liamleam, A.P. Annachhatre, Electron donors for biological sulfate reduction, Biotechnol. 426 Adv. 25 (2007) 452463. 

- 427 [19] Q. Chang, L. Huang, K. McKenzie, C. Carere, M. Stott, A. Nicol, et al., Inuence of hydrogen 428 sulde on gas-water interface in underground hydrogen storage: A molecular dynamics study, 429 J. Energy Storage 97 (2024) 112766. 

- 430 [20] X. Zhang, Q. Li, M. Simon, G. Zheng, Y. Tan, Eect of H2S content on relative permeability 431 and capillary pressure characteristics of acid gas/brine/rock systems: a review, J. Rock Mech. 432 Geotech. Eng. 14 (2022) 20032033. 

- 433 [21] V. Shah, D. Broseta, G. Mouronval, F. Montel, Water/acid gas interfacial tensions and their 434 impact on acid gas geological storage, Int. J. Greenh. Gas Con. 2 (2008) 594604. 

- 435 [22] V. Shah, D. Broseta, Predicting interfacial tension between water and nonpolar uids from a 436 Cahn-type theory, Langmuir 23 (2007) 1259812605. 

- 437 [23] S. Khosharay, M. Abolala, F. Varaminian, Modeling the surface tension and surface properties 438 of (CO2+ H2O) and (H2S+ H2O) with gradient theory in combination with sPCSAFT EOS 439 and a new proposed inuence parameter, J. Mol. Liq. 198 (2014) 292298. 

- 440 [24] K. Ofori, C.M. Phan, A. Barifcani, S. Iglauer, An investigation of some H2S thermodynamical 441 properties at the water interface under pressurised conditions through molecular dynamics, Mol. 442 Phys. 120 (2022) e2011972. 

- 443 [25] F. Biscay, A. Ghou, V. Lachet, P. Malfreyt, Monte Carlo simulations of the pressure depen444 dence of the water _−_ acid gas interfacial tensions, J. Phys. Chem. B 113 (2009) 1427714290. 

26 

- 445 [26] Y.H. Dehaghani, M. Assareh, F. Feyzi, Molecular dynamics simulations study on equilibrium, 446 transport, and interfacial properties of H2S-brine systems under conditions typical of geological 447 sequestration, Environ. Earth Sci. 82 (2023) 541. 

- 448 [27] C. Chen, Z. Chai, W. Shen, W. Li, Eects of impurities on CO2 sequestration in saline aquifers: 449 perspective of interfacial tension and wettability, Ind. Eng. Chem. Res. 57 (2018) 371379. 

- 450 [28] Q. Chang, D. Dempsey, L. Huang, Simulations of interfacial tension for H2/H2S/water and 451 CH4/H2S/water systems at the temperature of 298 K and pressure up to 30 MPa, in: SPE 452 Asia Pacic Oil and Gas Conference and Exhibition: SPE, 2024, p. D011S06R02. 

- 453 [29] Q.T. Doan, A. Keshavarz, C.R. Miranda, P. Behrenbruch, S. Iglauer, Molecular dynamics 454 simulation of interfacial tension of the CO2-CH4-water and H2-CH4-water systems at the tem455 perature of 300 K and 323 K and pressure up to 70 MPa, J. Energy Storage 66 (2023) 107470. 

- 456 [30] Q.T. Doan, A. Keshavarz, C.R. Miranda, P. Behrenbruch, S. Iglauer, A prediction of interfacial 457 tension by using molecular dynamics simulation: a study on eects of cushion gas (CO2, N2 458 and CH4) for underground hydrogen storage, Int. J. Hydrog. Energy 50 (2024) 16071615. 

- 459 [31] A.M. Adam, D. Bahamon, M. Al Kobaisi, L.F. Vega, Molecular dynamics simulations of the 460 interfacial tension and the solubility of brine/H2/CO2 systems: implications for underground 461 hydrogen storage, Int. J. Hydrog. Energy 78 (2024) 13441354. 

- 462 [32] W. Van Rooijen, P. Habibi, K. Xu, P. Dey, T. Vlugt, H. Hajibeygi, et al., Interfacial tensions, 463 solubilities, and transport properties of the H2/H2O/NaCl system: a molecular simulation 464 study, J. Chem. Eng. Data 69 (2023) 307319. 

- 465 [33] Y. Yang, A.K. Narayanan Nair, S. Sun, Molecular dynamics simulation study of carbon dioxide, 466 methane, and their mixture in the presence of brine, J. Phys. Chem. B 121 (2017) 96889698. 

- 467 [34] W. Li, Z. Jin, Molecular dynamics simulations of natural gas-water interfacial tensions over 468 wide range of pressures, Fuel 236 (2019) 480492. 

- 469 [35] A.P. Thompson, H.M. Aktulga, R. Berger, D.S. Bolintineanu, W.M. Brown, P.S. Crozier, et al., 470 LAMMPS-a exible simulation tool for particle-based materials modeling at the atomic, meso, 471 and continuum scales, Comput. Phys. Commun. 271 (2022) 108171. 

27 

- 472 [36] M. Levitt, M. Hirshberg, R. Sharon, K.E. Laidig, V. Daggett, Calibration and testing of a 473 water model for simulation of the molecular dynamics of proteins and nucleic acids in solution, 474 J. Phys. Chem. B 101 (1997) 50515061. 

- 475 [37] A. Köster, M. Thol, J. Vrabec, Molecular models for the hydrogen age: hydrogen, nitrogen, 476 oxygen, argon, and water, J. Chem. Eng. Data 63 (2018) 305320. 

- 477 [38] M.G. Martin, J.I. Siepmann, Transferable potentials for phase equilibria. 1. United-atom de478 scription of n-alkanes, J. Phys. Chem. B 102 (1998) 25692577. 

- 479 [39] S.K. Nath, Molecular simulation of vapor _−_ liquid phase equilibria of hydrogen sulde and its 480 mixtures with alkanes, J. Phys. Chem. B 107 (2003) 94989504. 

- 481 [40] C. Holcomb, P. Clancy, S. Thompson, J. Zollweg, A critical study of simulations of the Lennard482 Jones liquid-vapor interface, Fluid Phase Equilib. 75 (1992) 185196. 

- 483 [41] E.A. Müller, A. Mejía, Interfacial properties of selected binary mixtures containing n-alkanes, 484 Fluid Phase Equilib. 282 (2009) 6881. 

- 485 [42] L. Martínez, R. Andrade, E.G. Birgin, J.M. Martínez, PACKMOL: a package for building initial 486 congurations for molecular dynamics simulations, J. Comput. Chem. 30 (2009) 21572164. 

- 487 [43] B. Pan, X. Yin, S. Iglauer, Rock-uid interfacial tension at subsurface conditions: implications 488 for H2, CO2 and natural gas geo-storage, Int. J. Hydrog. Energy 46 (2021) 2557825585. 

- 489 [44] L. Bernardez, Lima L. de Andrade, E. De Jesus, C. Ramos, Pfd Almeida, A kinetic study on 490 bacterial sulfate reduction, Bioprocess Biosyst. Eng. 36 (2013) 18611869. 

- 491 [45] B.B. Jørgensen, M.F. Isaksen, H.W. Jannasch, Bacterial sulfate reduction above 100 C in deep492 sea hydrothermal vent sediments, Science 258 (1992) 17561757. 

- 493 [46] H.G. Machel, Bacterial and thermochemical sulfate reduction in diagenetic settingsold and 494 new insights, Sediment. Geol. 140 (2001) 143175. 

- 495 [47] M. Shiga, T. Morishita, M. Sorai, Interfacial tension of carbon dioxide-water under conditions 496 of CO2 geological storage and enhanced geothermal systems: a molecular dynamics study on 497 the eect of temperature, Fuel 337 (2023) 127219. 

28 

- 498 [48] S. Omrani, M. Ghasemi, M. Singh, S. Mahmoodpour, T. Zhou, M. Babaei, et al., Interfacial 499 tensiontemperaturepressuresalinity relationship for the hydrogenbrine system under reser500 voir conditions: integration of molecular dynamics and machine learning, Langmuir 39 (2023) 501 1268012691. 

- 502 [49] Y. Zhang, S.E. Feller, B.R. Brooks, R.W. Pastor, Computer simulation of liquid/liquid inter503 faces. I. Theory and application to octane/water, J. Chem. Phys. 103 (1995) 1025210266. 

- 504 [50] A.K. Narayanan Nair, M.F. Anwari Che Ruslan, M.L. Ramirez Hincapie, S. Sun, Bulk and 505 interfacial properties of brine or alkane in the presence of carbon dioxide, methane, and their 506 mixture, Ind. Eng. Chem. Res. 61 (2022) 50165029. 

- 507 [51] P. Linstorm, NIST chemistry webbook, NIST standard reference database number 69, J Phys 508 Chem Ref Data, Monograph. 9 (1998) 11951. 

- 509 [52] S. Alshammari, S. Abdel-Azeim, A. Al-Yaseri, A. Qasim, The inuence of CH4 and CO2 on the 510 interfacial tension of H2brine, waterH2rock wettability, and their implications on geological 511 hydrogen storage, Energy Fuel 38 (2024) 1583415847. 

- 512 [53] Y.F. Chow, G.C. Maitland, J.M. Trusler, Interfacial tensions of (H2O+ H2) and (H2O+ CO2+ 513 H2) systems at temperatures of (298448) K and pressures up to 45 MPa, Fluid Phase Equilib. 514 475 (2018) 3744. 

- 515 [54] W. Sachs, V. Meyn, Pressure and temperature dependence of the surface tension in the system 516 natural gas/water principles of investigation and the rst precise experimental data for pure 517 methane/water at 25 C up to 46.8 MPa, Colloids Surf. A Physicochem. Eng. Asp. 94 (1995) 518 291301. 

- 519 [55] Q.-Y. Ren, G.-J. Chen, W. Yan, T.-M. Guo, Interfacial tension of (CO2+ CH4)+ water from 520 298 K to 373 K and pressures up to 30 MPa, J. Chem. Eng. Data 45 (2000) 610612. 

- 521 [56] M. Hosseini, J. Fahimpour, M. Ali, A. Keshavarz, S. Iglauer, H2 _−_ brine interfacial tension as 522 a function of salinity, temperature, and pressure; implications for hydrogen geo-storage, J. Pet. 523 Sci. Eng. 213 (2022) 110441. 

29 

- 524 [57] K.A. Schmidt, G.K. Folas, B. Kvamme, Calculation of the interfacial tension of the methane 525 water system with the linear gradient theory, Fluid Phase Equilib. 261 (2007) 230237. 

- 526 [58] S. Mirzaeifard, P. Servio, A.D. Rey, Molecular dynamics characterization of temperature and 527 pressure eects on the water-methane interface, Colloid Interface Sci. Commun. 24 (2018) 7581. 

- 528 [59] L. Zhao, S. Lin, J.D. Mendenhall, P.K. Yuet, D. Blankschtein, Molecular dynamics investigation 529 of the various atomic force contributions to the interfacial tension at the supercritical CO2 530 water interface, J. Phys. Chem. B 115 (2011) 60766087. 

- 531 [60] J. Lekner, J. Henderson, Theoretical determination of the thickness of a liquid-vapour interface, 532 Physica A Stat. Mech. Appl 94 (1978) 545558. 

- 533 [61] S. Langè, M. Campestrini, P. Stringari, Phase behavior of system methane+ hydrogen sulde, 534 AICHE J. 62 (2016) 40904108. 

- 535 [62] K. Ofori, A. Barifcani, C.M. Phan, Eect of higher H2S concentration over CO2 in acid gas 536 mixtures during geosequestration, Discov. Chem. Eng. 3 (2023) 18. 

- 537 [63] S. Iglauer, M. Mathew, F. Bresme, Molecular dynamics computations of brineCO2 interfa538 cial tensions and brineCO2quartz contact angles and their eects on structural and residual 539 trapping mechanisms in carbon geo-sequestration, J. Colloid Interface Sci. 386 (2012) 405414. 

- 540 [64] Q. Chang, D. Dempsey, L. Zhang, Y. Zhao, L. Huang, Molecular dynamics insights into gas541 water interfacial tension: optimizing hydrogen storage in subsurface conditions, Int. J. Hydrog. 542 Energy 64 (2024) 896905. 

- 543 [65] Z.D. Isfehani, A. Sheidaie, M. Hosseini, J. Fahimpour, S. Iglauer, A. Keshavarz, Interfacial 544 tensions of (brine+ H2+ CO2) systems at gas geo-storage conditions, J. Mol. Liq. 374 (2023) 545 121279. 

- 546 [66] N.S. Muhammed, B. Haq, Shehri D. Al, Role of methane as a cushion gas for hydrogen storage 547 in depleted gas reservoirs, Int. J. Hydrog. Energy 48 (2023) 2966329681. 

30 

- 548 [67] B. Pan, T. Song, X. Yin, Y. Jiang, M. Yue, H. Hoteit, et al., A machine learning based framework 

- 549 for brine-gas interfacial tension prediction: implications for H2, CH4 and CO2 geo-storage, in: 

- 550 SPE Gas & Oil Technology Showcase and Conference: SPE, 2024, p. D022S01R05. 

31 

