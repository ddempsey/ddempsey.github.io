# Influence of hydrogen sulfide on gas-water interface in underground hydrogen storage: A molecular dynamics study

**Authors:** Qiuhao Chang, Liangliang Huang, Kelsey McKenzie, Carlo Carere, Matthew Stott, Andy Nicol, David Dempsey  
**Published in:** Journal of Energy Storage (2024)  
**DOI (version of record):** https://doi.org/10.1016/j.est.2024.112766  
**This copy:** Published version. Text extracted from the PDF at https://ddempsey.github.io/papers/2024-chang-influence-hydrogen-sulfide-gas-water/chang2024-influence-hydrogen-sulfide.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** Published version, reproduced under the CC BY 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1016/j.est.2024.112766  
**Licence:** CC BY 4.0 http://creativecommons.org/licenses/by/4.0/  

---
Journal of Energy Storage 97 (2024) 112766 

Contents lists available at ScienceDirect 

# Journal of Energy Storage 

journal homepage: www.elsevier.com/locate/est 

### Research papers 

## Influence of hydrogen sulfide on gas-water interface in underground hydrogen storage: A molecular dynamics study 

Qiuhao Chang<sup>a</sup> , Liangliang Huang<sup>b,*</sup> , Kelsey McKenzie<sup>c</sup> , Carlo Carere<sup>d</sup> , Matthew Stott<sup>c</sup> , Andy Nicol<sup>e</sup> , David Dempsey<sup>a,*</sup> 

a _Department of Civil and Natural Resources Engineering, University of Canterbury, Christchurch 8041, New Zealand_ b _School of Sustainable Chemical, Biological and Materials Engineering, University of Oklahoma, Norman 73019, United States_ c _School of Biological Sciences, University of Canterbury, Christchurch 8041, New Zealand_ d _Department of Chemical and Process Engineering, University of Canterbury, Christchurch 8041, New Zealand_ 

e _School of Earth and Environment, University of Canterbury, Christchurch 8041, New Zealand_ 

A R T I C L E I N F O _Keywords:_ Underground hydrogen storage Gas-water interface Molecular dynamics simulation Interfacial tension Hydrogen sulfide 

A B S T R A C T 

In this study, we investigate the dynamics of interfacial tension (IFT) between residual pore water and gas mixtures containing H2, CH4, and H2S within subsurface porous media, essential for underground hydrogen storage (UHS) systems. Utilizing molecular dynamics simulations, we established specific IFT correlations across a spectrum of H2S concentrations, ranging from 5 % to 80 %, under the conditions of 14.5 MPa and 343 K. Our results demonstrate a marked decrease in IFT, with a notable 12 % reduction observed even at a minimal H2S concentration of 5 % for H2S-H2 mixtures, contrasting with a 6 % reduction in H2S-CH4 mixtures, and reaching a saturation point at concentrations exceeding 80 %. The presence of CH4 at the interface mitigates the reduction in IFT caused by H2S, underscoring the complexity of gas interactions in subsurface storage. These insights into the molecular dynamics at the gas-water interface carry significant implications for the optimization of UHS operations, informed by the substantial variations in IFT with different H2S concentrations. 

#### **1. Introduction** 

Hydrogen, lauded for its multifaceted applications, is vital to the future landscape of zero-emissions energy systems [1–4]. Projections suggest that achieving global net-zero emissions by 2050 will necessitate the production of an estimated 660 million tons of hydrogen [5]. A pressing obstacle in scaling hydrogen production is the inadequate storage capacity to manage such a voluminous output [6–8]. The potential of subterranean structures, including caverns, aquifers, and particularly depleted hydrocarbon reservoirs, has been recognized for their expansive storage capabilities and cost-effectiveness [6,9–12]. Depleted hydrocarbon reservoirs are especially promising for underground hydrogen storage due to their established storage efficacy, clearly defined geological formations, verified caprock integrity, and pre-existing facility infrastructure [6,9,12]. 

One of the primary issues facing UHS is the generation and contamination of the stored H2 with hydrogen sulfide (H2S). The presence of H2S in a hydrocarbon reservoir is known to cause unwanted side effects such as souring, corrosion, and stress-cracking of steel [13,14]. 

H2S production can occur geochemically (abiotic), biologically via microbial interaction with their environment (biogenic) or from a mixture of geochemical and biological interactions. Abiotic H2S can arise from rocks commonly found in hydrocarbon reservoirs such as anhydrite (CaSO4) and pyrite (FeS2). Water-rock interactions can generate H2S directly [15] or produce a variety of sulfur-based compounds including sulphates (SO24− ), thiosulfates (S2O23− ), elemental sulfur (S) [16,17] which in turn can then be biologically reduced to H2S by microorganisms. For example, at elevated temperatures ( _>_ 770 K), pyrite (FeS2) can react with brines to form iron oxides and sulfate species [16,17]. Similarly, methane (CH4) introduced into a UHS reservoir as a cushion gas (Fig. 1) or generated by methanogens (CH4-generating prokaryotes from the domain _Archaea_ ) can react with CaSO4 to form H2S [15]. While the abiotic generation of H2S generally occurs at elevated temperatures, biogenic H2S occurs at temperatures ( _<_ 395 K) by a taxonomically diverse group of microorganisms ( _Archaea_ and _Bacteria_ ) that utilize sulfur-containing compounds as electron acceptors for dissimilatory sulfur reduction [18]. Within an UHS scenario, H2 is presumed to be the primary source of reducing power (Eq. (1)) for dissimilatory sulfur- 

* Corresponding authors. 

_E-mail addresses:_ hll@ou.edu (L. Huang), david.dempsey@canterbury.ac.nz (D. Dempsey). 

https://doi.org/10.1016/j.est.2024.112766 Received 16 April 2024; Received in revised form 9 June 2024; Accepted 23 June 2024 Available online 29 June 2024 

2352-152X/© 2024 The Authors. Published by Elsevier Ltd. This is an open access article under the CC BY license (http://creativecommons.org/licenses/by/4.0/). 

_Journal of Energy Storage 97 (2024) 112766_ 

_Q. Chang et al.                                                                                                                                                                                                                                  Journal of Energy Storage 97 (2024) 112766_ 

reducing microorganisms such as _Desulfovibrio vulgaris_ and _Desulfotomaculum salinum_ [19], although other electron donors for this reaction can also include lactate, acetate, glucose, sucrose, ethanol, and propionate [20]. 

Other forms of sulfate reduction include assimilatory sulfate reduction, which describes the assimilation of sulfur into cellular biomass via H2S reduction to _O_ -acetyl serine and finally to sulfur-containing amino acids and compounds such as cysteine [21]. Desulfurization reduces organic sulfur, and during disproportionation, S2O23− can be used as either an electron donor or an electron acceptor [22], as shown in Fig. 1. Sulfur/ sulfate-reducing prokaryotes are found in a variety of extreme environments such as hydrothermal vents, marine trenches, and hydrocarbon reservoirs [23–30]. In these hot temperatures and high-pressure environments, microorganisms reduce sulfate to H2S. Indeed, a number of reports show that the rate of dissimilatory sulfate reduction increases with elevated temperatures and pressures, as high as 368 K and over 50 MPa, respectively [24,29]. Whilst not demonstrated within a reservoir system, it is understood the sulfate-reducing prokaryotes will inhabit the gas-water interface in a similar way that methanotrophs and methanogens will inhabit the oxic/anoxic interface of water tables, with methanotrophs utilizing the methane that methanogens are producing [31,32]. 

In the context of underground hydrogen storage, the activities of these organisms are of particular interest due to their ability to utilize hydrogen as an electron donor in the reduction of sulfate to sulfide. This biological conversion is a thermodynamically favorable process under the high-pressure and high-temperature conditions typical of subsurface reservoirs. The resultant H2S poses, due to its corrosive nature and toxicity, challenges. It influences the physicochemical properties of the storage environment, including the interfacial tension between gas and water phases. Interfacial tension (IFT) is a critical factor influencing the segregation of gas mixtures and water within the pore spaces of 

underground storage systems and dictating the distribution and stability of stored gases [33–35]. The advent of H2S, generated through the metabolic pathways of microorganisms, presents an additional complexity in this process. H2S tends to integrate with hydrogen and cushion gases such as CH4, altering the gas-water interfacial characteristics through preferential adsorption or dissolution mechanisms into the pore water, thus impacting the storage process [36]. Direct experimental characterization of IFT in the presence of H2S, particularly under geological storage conditions, remains limited. Shah and coworkers employed the pendant drop method to gauge the IFTs in H2S-water systems, observing a decline in IFT concurrent with increasing pressures, up to 393 K and 15 MPa [37]. Their research also extended to mixtures containing CO2 and H2S, noting that the inclusion of H2S reduced the IFT when compared to pure CO2 and water interactions. Such insights underscore the need for in-depth analysis and simulation to understand the effects of H2S within subsurface hydrogen storage contexts, where experimental approaches face constraints. 

Investigating interfacial tension under high-pressure and hightemperature conditions, particularly involving hydrogen sulfide, poses significant safety risks due to its toxicity and corrosiveness [38]. As a result, theoretical models, complemented by Equations of State (EoS) and molecular simulations, have emerged as alternatives for investigating the properties of H2S interfacial systems. For instance, Shah and Broseta [39] utilized gradient theory alongside the Peng-Robinson EoS to simulate the water-H2S IFT at 298 K, noting a linear decrease in IFT with increasing pressure up to a threshold of 2 MPa. In another notable study, Khosharay and coworkers [40] applied the gradient theory in conjunction with the statistical associating fluid theory (SAFT) EoS to evaluate surface tensions between H2S and H2O over a range of temperatures and pressures extending to 398 K and 60 MPa, with findings indicating a decrease in surface tension in response to rising pressures up to a plateau beyond 12.5 MPa. Similarly, Biscay et al. [41] adopted Monte Carlo simulations to determine the pressure dependency of water-H2S IFT at 383 K, confirming that the impact of pressure on IFT diminishes once a critical pressure point is surpassed. 

**Fig. 1.** Schematic for hydrogen sulfide (H2S) generation and mixing in underground hydrogen storage at the kilometer (left panel), micrometer (center panel), and nanometer (right panel) scales. At the kilometer scale, hydrogen gas (H2) is placed at the top of the reservoir, sitting on a cushion gas layer of methane (CH4), which in turn sits on any reservoir aquifer. As illustrated in the microbial sulfur cycle (center), sulfur can act as an energy source and is found in the residual water as SO24− or in the surrounding rocks in the form of anhydrite or pyrite. Sulfate can be reduced to H2S via assimilatory or dissimilatory reduction; assimilatory reduces sulfate to H2S and then further to amino acids (no H2S is released from the cell). Dissimilatory sulfate reduction is the reduction of SO24− to H2S which is excreted from the cell. Other sulfur reduction pathways include disproportionation (oxidation or reduction of S2O32− ) and desulfurization (reduction of organic-S). Red lines indicate the anoxic dissimilatory pathway, blue lines indicate anoxic disproportionation, and purple lines indicate the oxic/anoxic pathway. and black lines indicate the aerobic oxidation pathway. At the gas-water interface (right panel), molecular behaviors such as adsorption, absorption, and orientation affect the gas-water interfacial properties like IFT. (For interpretation of the references to colour in this figure legend, the reader is referred to the web version of this article.) 

2 

_Journal of Energy Storage 97 (2024) 112766_ 

_Q. Chang et al.                                                                                                                                                                                                                                  Journal of Energy Storage 97 (2024) 112766_ 

The impact of H2S as an impurity on the interfacial tension of CO2water systems was also analyzed by Chen et al. [42] through molecular dynamics (MD) simulations at conditions of 20 MPa and 318 K. Their research revealed that a 20 mol% concentration of H2S can significantly reduce the CO2-water IFT by 65 %. Another study by Ofori et al. [36] investigated the properties at the H2S-water interface across varying pressure and temperature conditions. Their simulations indicated that H2S molecules predominantly adsorb at the interface below their saturation pressure, while at pressures above the threshold, the H2S molecules were absorbed into the water phase. Building upon these insights, Dehaghani et al. [43] employed MD simulations to explore the IFT between H2S and brine, extending temperature and pressure ranges from 323 K to 393 K and up to 30 MPa. Their findings suggest a marked increase in IFT when NaCl and CaCl2 are present in brine, deviating from the properties exhibited by pure water. Additionally, their results highlighted a direct correlation between rising temperatures and increased H2S-brine IFT, providing critical information for the optimization of subsurface storage environments where both temperature and salinity can significantly influence interfacial behaviors. 

These studies provide insights into the behaviors of H2S-related interfacial systems under conditions important to geological storage. On the other hand, research on the interfacial properties critical to underground hydrogen storage, particularly in water and gas mixtures involving hydrogen sulfide, methane as a cushion gas, and hydrogen as a working gas, remains sparse. Addressing this knowledge gap, our study employs MD simulations to investigate the intricate interfacial properties in varying gas mixtures, including interfacial tension, absorption, and molecular orientation. Specifically, we inspect the interfacial dynamics of H2S-H2, H2S-CH4, and H2S-CH4-H2 mixtures under 343 K and 14.5 MPa, typical subsurface storage conditions [44]. The manuscript is organized to facilitate a comprehensive understanding of our research: Section 2 delineates the gas-water models and details of the MD simulations; Section 3 introduces the foundational concepts of interfacial properties and the methodologies for their computation; Section 4 is dedicated to presenting the simulation results and providing an in-depth discussion of their implications; and Section 5 synthesizes our findings into conclusive insights that contribute to the field of underground hydrogen storage. 

#### **2. Models and simulation details** 

For all MD simulations, we employed the Large-scale Atomic/Molecular Massively Parallel Simulator (LAMMPS), a software package renowned for its accuracy and computational efficiency. We explored the interfacial properties of two distinct system configurations—binary gas-water and ternary gas-water systems—at a consistent pressure of 14.5 MPa and temperature of 343 K. The binary systems, specifically the (H2S + H2)/H2O and (H2S + CH4)/H2O configurations, were initiated with 2048 water molecules centrally placed within a simulation box, bordered by approximately 1024 gas molecules. These gases, H2S and H2, or H2S and CH4, were introduced in varying concentration ratios, creating a realistic representation of subsurface conditions. The simulation box dimensions were set to 3.4 nm × 3.4 nm × 10 nm, providing ample space for molecular interactions to occur uninhibited. A series of six H2S concentrations, ranging from a minor 5 % to a substantial 80 %, were systematically analyzed to assess their impact on the system. While unlikely at the macro-scale, such high concentrations of H2S may arise locally under vigorous microbial activity, hence our inclusion of them here. Four parallel calculations were conducted on binary systems, employing identical H2S concentration ratios to ensure comparative integrity. The precise gas compositions used in each simulation scenario are summarized in Table S1. 

For the system studied, we initially conducted a 1-ns run within the canonical ensemble (NVT) to alleviate any potential molecular overlap. This was succeeded by a 15-ns equilibrium run in the specialized isothermal-isobaric (NPzT)ensemble, where the pressure in the Z 

direction is fixed, ensuring the system reaches an equilibrium state. Throughout the NVT and NPzT ensembles, we utilized the Nose-Hoover thermostat and barostat to control the temperature and pressure of the system. In line with the recommendations of Muller et al. [45], we designed the production phase for IFT calculation to extend sufficiently to achieve convergence of the interfacial tension values. An additional 10-ns production run was performed following the equilibrium state within the NPzT ensemble. We extracted the data from the final 2 ns of this run to determine the gas-water IFT, ensuring that our results reflect a system at equilibrium. 

As evidenced in Fig. S1, the convergence of IFT relative to production time illustrates that a 10-ns simulation run was sufficient to ascertain accurate IFT values for our systems. This indication of convergence is important as it validates the stability and reliability of the calculated IFT. The ternary system, comprising H2S, H2, and CH4 within the water, underwent identical simulation protocols to ensure consistency in our approach. Notably, within this ternary mixture of (H2S + H2 + CH4)/ H2O, the H2S concentration varied between 5 % to 80 %, whereas the molar ratio between H2 and CH4, excluding H2S, was maintained at a fixed 1:1 ratio. Table S2 lists the composition of the ternary system, outlining the specific ratios and concentrations employed within our MD simulations. 

Periodic boundary conditions were implemented in all three spatial dimensions of our simulations. We adopted the leapfrog algorithm for integrating the equations of motion with a timestep set at 1 femtosecond (fs). The choice of force field models is critical for capturing the nature of molecular interactions with high fidelity. In this study, F3C model for H2O [46], Vrabec single-site model for H2 [47], TraPPE-UA for CH4 [48], and Nath's three-point potential model for H2S [43,49], were selected due to their demonstrated reliability on interfacial simulation of vapor-liquid or liquid-liquid systems involving these species [43,47,50,51]. Coulombic interactions were computed using the particle-particle-particle mesh (PPPM) method, while the non-bonded interactions were described by the 12–6 Lennard-Jones (LJ) potential. A cutoff distance of 15 Å was used for the LJ potential and Coulombic interactions. The equilibrium states of the binary and ternary systems are illustrated in Fig. 2. 

#### **3. Interfacial tension, density profile, and molecular orientation properties** 

Interfacial tension, a critical property defining the stability of gaswater interfaces, was quantified using the established Gibbs IFT formulation [52]: 

where _Lz_ denotes the length of the simulation box in the Z direction, and _Pxx_ , _Pyy_ , and _Pzz_ are the respective normal stress components of the pressure tensor. The factor of ½ accounts for two distinct interfaces within the system, as illustrated in Fig. 2. We constructed density profiles to map the spatial distribution of molecules, therefore determining absorption and dissolution behaviors. The simulation domain was dissected into 1-Å thick slices along the Z direction, with the mass density of each slice calculated individually, providing a granular view of molecular distribution within the system. We note that the influence of the molecular orientation of water molecules on gas-water and liquidwater interfacial properties like IFT is well-documented at the molecular level [51,53–55]. In this work, the molecular orientation at the interface was analyzed by computing the orientational order parameter (S). This parameter quantifies the preferential alignment of molecules relative to the interface as a function of their z-directional positioning [56]: 

3 

_Journal of Energy Storage 97 (2024) 112766_ 

_Q. Chang et al.                                                                                                                                                                                                                                  Journal of Energy Storage 97 (2024) 112766_ 

**Fig. 2.** The equilibrium states at 343 K and 14.5 MPa: (a) (H2S + H2)/H2O; (b) (H2S + CH4)/H2O; (c) (H2S + H2 + CH4)/H2O. The colour codes are: red<sup>–</sup> H2S, yellow-H2, blue-H2O, green-CH4. (For interpretation of the references to colour in this figure legend, the reader is referred to the web version of this article.) 

where θ is the angle between the dipole vector of H2O and the z-axis. Here, S values approaching − 0.5 denote a parallel alignment to the interface, S values near 1.0 indicate a perpendicular orientation and values around zero are indicative of a random orientation distribution. 

#### **4. Results and discussions** 

**Table 2** 

Comparison of calculated IFTs and experimental results. 

|Systems|IFT-MD (mN/m)|IFT-Exp(mN/m)|
|---|---|---|
|H2-Water|70.3± 1.7|~65.0 [57]|
|CH4-Water|52.4± 2.5|53.7–55.9 [58]|
|H2S-Water|6.9± 0.7|7.4±0.4 [37]|

#### _4.1. Validation_ 

Before delving into the simulation outcomes, we validated molecular models, force field parameters, and computational methods. This preliminary step is indispensable for ensuring our simulation results stand up to scrutiny. Therefore, we conducted simulations to ascertain the bulk densities of H2, CH4, H2S, and H2O at 343 K and 14.5 MPa. Supplementary Figs. S2 and S3 depict the configurations of these bulk systems. The calculated densities from these simulations are summarized, with references from the National Institute of Standards and Technology (NIST) database. The comparison, as presented in Table 1, demonstrates remarkable agreement between our simulated data and the established NIST values, reinforcing the credibility of the simulation framework. 

Subsequent to the bulk density simulations, we also constructed and calculated the IFTs of three gas-water systems: H2-H2O, CH4-H2O, and H2S-H2O. The spatial arrangements for each simulated system are exhibited in Supplementary Fig. S4, offering a snapshot of the molecular configurations attained at equilibrium. The same controlled conditions of 343 K and 14.5 MPa were applied, and the calculated IFTs are summarized in Table 2. The coherence between our simulated IFT values and experimental data not only reaffirms the reliability of our simulation methods but also enhances confidence in the predictive power of our models for subsurface interfacial phenomena. The coherence between our simulated IFT values and experimental data indicates the simulation methods are reliable. This gives us confidence in their predictive power for subsurface interfacial phenomena. Finally, the 

**Table 1** 

Bulk fluid densities at 343 K and 14.5 MPa. 

|Fluid|This study (g/cm<sup>3</sup>)|NIST database (g/cm<sup>3</sup>)|
|---|---|---|
|H2|0.0095|0.0095|
|CH4|0.088|0.089|
|H2S|0.67|0.70|
|H2O|0.99|0.98|

combination of 2048 water with 1024 gas molecules for system size was validated by sensitivity analyses shown in Table S4 to Table S6. 

As shown in Fig. 3 and Fig. 4, detailed density profiles identify gaswater interface regions within the H2-H2O, CH4-H2O, and H2S-H2O systems. These profiles were instrumental in demarcating the interface region, a zone characterized by notable decreases in the densities of both gases and water. Employing the established “10–90” theoretical framework [43,59–62], we identified the boundaries of the interface region. The left boundary was defined where the local density of water falls to 10 % of the bulk water density, signaling the onset of the gas phase. Conversely, the right boundary was established at the point where water density reaches 90 % of the bulk density, indicating the transition back to the aqueous phase. These demarcations are visually delineated by black dashed lines in the figures, providing clear and objective criteria for interface identification based on molecular density distributions. 

The density profiles we observed show notable variations among the different gases at the interface. Consistent with the findings of Rooijen et al. [50], H2 exhibited a pronounced reduction in density near the interface, suggesting minimal presence of H2 molecules within this region. In contrast, the density of CH4 peaked at the interface, indicative of CH4 adsorption at the interface, highlighting the affinity of CH4 molecules for this boundary and echoing the observations of several prior studies [63–65]. The H2S profile was particularly distinct, revealing a significant concentration of H2S molecules within the interface region. This can be interpreted as a result of H2S absorption into the water phase, which is in line with the insights provided by previous research [36,43]. Such an accumulation markedly influences the structure of the gas-water interface, leading to a reformation of its characteristics, a phenomenon graphically illustrated in Supplementary Fig. S4(c). The consistency of our results with observations reported before reinforces the reliability of our force field parameters and the computational approaches employed in this study. 

4 

_Journal of Energy Storage 97 (2024) 112766_ 

_Q. Chang et al._ 

**Fig. 3.** (a) Density profiles of H2-H2O system at 343 K and 14.5 MPa. (b) The y-axis has been rescaled to highlight the density profile of H2. The left and right dashed lines denote 10 % and 90 % density of the bulk water, respectively. 

**Fig. 4.** Density profiles at 343 K and 14.5 MPa: (a) CH4-H2O; (b) H2S-H2O. 

#### _4.2. Binary gas-water system_ 

#### _4.2.1. Interfacial tension (IFT) dynamics_ 

Fig. 5 illustrates the relationship between IFT and H2S concentration for binary systems of (H2S + H2)/H2O and (H2S + CH4)/H2O at 343 K and 14.5 MPa. Our findings demonstrate a trend where IFT diminishes with escalating concentrations of H2S. Notably, at a minimal H2S concentration of 5 %, the IFT reduction is pronounced, registering at approximately 12 % for the (H2S + H2)/H2O system. In stark contrast, the (H2S + CH4)/H2O system exhibits only a 6 % reduction in IFT under the same concentration. This comparative analysis suggests that H2S exerts a more substantial influence on IFT when interacting with H2 than CH4 in an aqueous environment. It is also worth noting that the diminution of IFT becomes more pronounced as H2S concentration increases beyond the 10 % threshold, indicative of a significant influence of H2S on the gas-water IFT across both binary systems studied. Yet, it is important to note that such an effect plateaus when the H2S concentration surpasses 80 %, beyond which any further increase in H2S concentration yields minimal additional impact on IFT. 

#### _4.2.2. Local density profiles_ 

Local density profiles offer useful perspectives on the molecular 

distribution at the gas-water interface. Fig. 6 illustrates these profiles for (H2S + H2)/H2O and (H2S + CH4)/H2O systems at a nominal H2S concentration of 5 %. Despite the low concentration, we observe a distinct accumulation of H2S within the interface region for both systems, which contributes to the observed reduction in IFT. In the H2S-H2-H2O system, the interface is characterized by a higher local density of H2S molecules compared to H2, underscoring the dominant role of H2S in affecting interfacial properties. By contrast, in the H2S-CH4-H2O system, CH4 molecules demonstrate a greater affinity for the interface, resulting in a higher local density of CH4 relative to H2S in this region. This disparity in local density distributions is postulated to explain why H2S has a more pronounced effect on reducing IFT in the presence of H2 than with CH4, particularly at lower H2S concentrations. 

Fig. 7 reveals changes within the local density profiles of H2S and H2 in the (H2S + H2)/H2O system across a spectrum of H2S concentrations. In parallel, Supplementary Fig. S5 assesses the corresponding local density profiles for H2S and CH4 in the (H2S + CH4)/H2O system. A clear trend emerges from these analyses: an incremental increase in H2S concentration within the gas mixture leads to a corresponding rise in H2S local density at the interface, simultaneously reducing H2 and CH4 densities in this region. This inverse relationship is instrumental in the observed IFT reduction as H2S concentrations climb. Furthermore, a 

5 

_Journal of Energy Storage 97 (2024) 112766_ 

_Q. Chang et al._ 

**Fig. 5.** IFTs at 14.5 MPa and 343 K as a function of H2S concentration for (H2S + H2)/H2O and (H2S + CH4)/H2O systems. 

comparison between Fig. 7(a) and Fig. S5(a) highlights an intriguing dynamic. The presence of CH4 at the interface results in a relatively lower accumulation of H2S in the (H2S + CH4)/H2O system compared to the (H2S + H2)/H2O system, given the same H2S concentration. This phenomenon suggests that CH4's interfacial adsorption moderates the impact of H2S on IFT, providing a partial buffering effect against the IFT reductions driven by H2S. 

#### _4.2.3. Gibbs dividing surface analysis_ 

We determined the Gibbs Dividing Surface (GDS) location to explain the molecular distribution within the interface region. The GDS is identified as the plane where the surplus of water molecules on the gas side is balanced by the shortfall on the water side, as per established methods in the literature [43,59–61,66]. In Supplementary Fig. S6(a), the GDS within the H2S-H2O interface is illustrate the concept. 

Subsequently, Fig. S6(b) defines the first contact region between H2S and water, Region II, stretching from the GDS to the right boundary. This demarcation is critical since gas molecules in Region II are in immediate proximity to water molecules, influencing the latter's orientation through direct intermolecular forces. It is accepted that the interactions between H2S and water molecules within Region II predominantly dictate the IFT, given their direct contact and consequent interaction dynamics. As visualized in Fig. 8, the local H2S densities within Region II for both (H2S + H2)/H2O and (H2S + CH4)/H2O systems were analyzed to reveal a consistent increase in local H2S densities. After surpassing an 80 % H2S concentration, the densities plateau, suggesting a saturation threshold within Region II. This saturation underpins the minimal IFT variations observed beyond the 80 % concentration threshold. The average H2S densities in Region II, as depicted in Fig. 9, further substantiate this finding. The curve plateaus post the 80 % concentration mark, indicating a saturation point for H2S in the interface region. Such saturation effects are important in understanding the limits of IFT reduction in response to increased H2S concentrations within subsurface storage environments. 

#### _4.2.4. Molecular orientation_ 

Fig. 10 shows the molecular orientation profiles for water in H2-H2O, CH4-H2O, and H2S-H2O systems, illustrating the spatial orientation of water molecules across the Z direction. These profiles leverage the local 

**Fig. 6.** The local density profiles with 5 % H2S concentration at 14.5 MPa and 343 K: (a) (H2S + CH4)/H2O; (b) (H2S + H2)/H2O. 

**Fig. 7.** Local density profiles for the (H2S + H2)/H2O system at different H2S concentrations: (a) H2S; (b) H2. 

6 

_Journal of Energy Storage 97 (2024) 112766_ 

_Q. Chang et al._ 

**Fig. 8.** The local densities of H2S in Region II are highlighted for (a). (H2S + CH4)/H2O and (b). (H2S + H2)/H2O systems with different H2S concentrations. 

**Fig. 9.** The local densities of H2S in region II are averaged for (H2S + H2)/H2O and (H2S + CH4)/H2O systems with different H2S concentrations. 

**Fig. 10.** Orientation profiles of H2O molecules along the Z direction in three binary gas-water systems. The water density profile is used to locate the gaswater interface region. 

density profile of H2O to demarcate the gas-water interface. In the bulk water phase, the orientation order parameter (S) values approximate zero, reflecting a lack of preferential orientation and a random distribution of molecular dipoles. Conversely, negative S values within the interface region reveal a distinct trend in which water molecules prefer to align parallel to the interface. This observed behavior aligns with findings reported in existing literature for similar gas-water interfaces [53,54]. 

Notably, the S values for water in the H2-H2O and CH4-H2O systems are more negative than those in the H2S-H2O systems. This suggests that in the absence of H2S, water molecules at the interface exhibit a stronger preferential parallel orientation. The incorporation of H2S into the water matrix attenuates the sharpness of the phase boundary, potentially transitioning the interface from a distinctly immiscible to a more partially miscible state. This interaction may explain the more randomized orientation of water molecules observed at the H2S-enriched interface, indicative of the modulating effect of H2S on the structural characteristics of the interfacial region. 

Fig. 11 further demonstrates the orientation order parameter (S) values of water molecules within (H2S + H2)/H2O and (H2S + CH4)/H2O systems across varying H2S concentrations. A clear trend emerges from the data: as the H2S concentration within the gas mixture increases, so 

7 

_Journal of Energy Storage 97 (2024) 112766_ 

_Q. Chang et al._ 

**Fig. 11.** H2O orientation profiles with different H2S concentrations: (a) (H2S + H2)/H2O; (b) (H2S + CH4)/H2O. 

does its accumulation at the interface, influencing the preferential orientation of water molecules in this region. Specifically, the S values for water tend to rise with increasing H2S concentration, indicating a shift towards a less pronounced preferential orientation parallel to the interface. 

Yet, beyond a certain saturation point, identified here as an 80 % H2S concentration, additional increases in H2S concentration do not significantly alter the S values. This saturation echoes the trends observed in IFT and local density profiles, where a saturation of H2S in the first contact region leads to minimal further changes in both gas-water IFT and water molecular orientation. Such observations suggest that at H2S concentrations above 80 %, the interface region's capacity to accommodate more H2S molecules is maximized, resulting in only marginal subsequent impacts on the interfacial properties. 

#### _4.3. Ternary gas-water system_ 

In the context of UHS, where methane may act as a cushion gas during the initial stages [67–71], understanding the interfacial behavior of a ternary (H2S + H2 + CH4)/H2O system is critical. Fig. 12 illustrates the IFT of the ternary system across a range of H2S concentrations at 343 K and 14.5 MPa. Notably, in the absence of H2S (0 % concentration), the IFT of the equimolar (50 % H2+ 50 % CH4)/H2O mixture logically situates itself between the IFTs of the binary H2-H2O and CH4-H2O systems. 

The introduction of H2S into the ternary system causes a progressive decrease in gas-water IFT. At a modest H2S concentration of 5 %, a decrease in IFT by approximately 9 % was observed, a reduction that is 

**Fig. 12.** IFTs of (H2S + H2 + CH4)/H2O are compared with binary gas-water systems at 14.5 MPa and 343 K with different H2S concentrations. 

more substantial than that seen in the (H2S + CH4)/H2O system but less so compared to the (H2S + H2)/H2O system with the same H2S concentration. This subtle behavior underscores the influence of H2S on gaswater IFT, even at lower concentrations, which is particularly relevant in UHS scenarios where only limited volumes of cushion gas are introduced. 

Furthermore, consistent with observations from binary systems, an increase in H2S concentration beyond 80 % does not significantly impact the IFT, indicating a saturation effect similar to that seen in the binary counterparts. This trend reaffirms the importance of considering H2S presence when evaluating UHS interface properties, even when CH4 is present as a cushion gas. 

Fig. 13(a) presents density profile analyses of the (H2S + H2 + CH4)/ H2O system at a 40 % H2S concentration. These analyses reveal a significant presence of both H2S and CH4 in the interface region. This is attributed to the absorption of H2S and the adsorption of CH4, which collectively surpass the presence of H2 in this critical zone. Fig. 13(b) expands on this by illustrating how varying concentrations of H2S affect its density within the interface region, particularly highlighting the first contact region, Region II. The data indicate that an increase in H2S concentration leads to a corresponding increase in its local density at the interface, which in turn contributes to the decrease in IFT. Notably, the profiles for H2S at 80 % and 100 % molar concentrations are nearly indistinguishable within Region II, signifying a saturation point for H2S at around the 80 % concentration level, consistent with their average densities in Region II shown in Fig. 14(a). Beyond this saturation point, further increases in H2S concentration do not yield significant changes in IFT, implying a limit to the interface's capacity to accommodate additional H2S molecules. 

Furthermore, the molecular orientation of water in the interface region, as depicted in Fig. 14(b), aligns with the variations in IFT related to H2S concentration. The consistency of orientational behavior past the 80 % H2S concentration mirrors the saturation effect, confirming that water molecules' interfacial tension and molecular orientation experience minimal changes once the saturation threshold is reached. 

#### **5. Conclusions** 

This study elucidates the critical role of H2S generated from microbial activity in shaping gas-water interactions during underground hydrogen storage. Using molecular dynamics simulations, we have demonstrated that the presence of H2S significantly influences interfacial tension between pore water and gas mixtures, notably those containing hydrogen and methane. 

Our models establish a clear trend of decreasing IFT with increasing H2S concentration under subsurface storage conditions of 14.5 MPa and 343 K. Remarkably, even a modest H2S molar concentration (e.g., 5 %) can lead to a substantial IFT reduction, with a 12 % decrease in H2S-H2H2O mixtures compared to a 6 % decrease in H2S-CH4-H2O mixtures. We 

8 

_Journal of Energy Storage 97 (2024) 112766_ 

_Q. Chang et al.                                                                                                                                                                                                                                  Journal of Energy Storage 97 (2024) 112766_ 

**Fig. 13.** Local density profiles at 343 K and 14.5 MPa: (a) (H2S + H2 + CH4)/H2O system with 40 % H2S concentration; (b) H2S of (H2S + H2 + CH4)/H2O systems. 

**Fig. 14.** (a) Average densities of H2S in region II and (b)H2O orientation profiles in (H2S + H2 + CH4)/H2O system with different H2S concentrations. 

observed a saturation effect beyond an 80 % H2S concentration, with only marginal further reductions in IFT. 

In-depth analyses of local density distributions and water molecule orientations have illuminated the mechanisms behind these IFT changes. The accumulation of H2S at the interface, resulting from its absorption into the water, consistently contributed to IFT reduction across all mixtures. Additionally, CH4 adsorption at the interfaces partially counteracts the IFT decrease caused by H2S, particularly noticeable at lower H2S concentrations where CH4's influence is more pronounced. In contrast, no significant adsorption or absorption of H2 at the interface was detected. 

The molecular orientation of water molecules at the interface corroborates the IFT and density distribution trends. From 0 % to 80 % H2S concentration, changes in water orientation play a considerable role in lowering IFT. At concentrations above 80 %, the near saturation of H2S in the first contact region results in minimal further orientation shifts and IFT reduction. 

These findings advance our understanding of the molecular-level phenomena governing H2S's impact on gas-water IFT, thereby informing the management and optimization strategies for UHS in depleted hydrocarbon reservoirs. Future work should focus on the experimental validation of these simulations to corroborate the observed trends and to refine the molecular models used. Further, it may be useful to assess the effects of other impurities commonly found in hydrogen storage environments, such as carbon dioxide and nitrogen. Changes in pressure and temperature during reservoirs operations may also have an effect on IFT and could be explored in further analysis. Finally, the macro-scale effect 

of mixture-dependent IFT should be considered in upscaled pore and continuum scale models, particularly in its relation to relative permeability, sweep efficiency and mixing mechanisms. 

#### **Funding** 

This work was supported by the New Zealand government under the MBIE contract UOCX2207 for the Endeavour research program “Puhiko ¯ Nukutu: a green hydrogen geostorage battery in Taranaki¯ ”. L. Huang acknowledges the financial support from the U.S. Department of Transportation PHMSA under Grant No. 693JK32250009CAAP. 

#### **CRediT authorship contribution statement** 

**Qiuhao Chang:** Writing – original draft, Visualization, Methodology, Investigation, Formal analysis. **Liangliang Huang:** Writing – review & editing, Software, Formal analysis. **Kelsey McKenzie:** Writing – original draft, Visualization, Conceptualization. **Carlo Carere:** Writing – review & editing, Visualization, Conceptualization. **Matthew Stott:** Writing – review & editing, Conceptualization. **Andy Nicol:** Project administration, Funding acquisition, Conceptualization. **David Dempsey:** Writing – review & editing, Supervision, Funding acquisition, Conceptualization. 

#### **Declaration of competing interest** 

The authors declare that they have no known competing financial 

9 

_Journal of Energy Storage 97 (2024) 112766_ 

_Q. Chang et al.                                                                                                                                                                                                                                  Journal of Energy Storage 97 (2024) 112766_ 

interests or personal relationships that could have appeared to influence the work reported in this paper. 

- [23] A. Ivanova, I. Borzenkov, A. Tarasov, E. Milekhina, S. Belyaev, A microbiological study of an underground gas storage in the process of gas injection, Microbiology 76 (2007) 453–460. 

- [24] J. Kallmeyer, A. Boetius, Effects of temperature and pressure on sulfate reduction and anaerobic oxidation of methane in hydrothermal sediments of Guaymas Basin, Appl. Environ. Microbiol. 70 (2004) 1231–1233. 

- [25] D. Mayumi, H. Mochimaru, H. Yoshioka, S. Sakata, H. Maeda, Y. Miyagawa, et al., Evidence for syntrophic acetate oxidation coupled to hydrogenotrophic methanogenesis in the high-temperature petroleum reservoir of Yabase oil field (Japan), Environ. Microbiol. 13 (2011) 1995–2006. 

- [26] V. Orphan, S. Goffredi, E. Delong, J. Boles, Geochemical influence on diversity and microbial processes in high temperature oil reservoirs, Geomicrobiol J. 20 (2003) 295–311. 

- [27] C.M. Ridley, G. Voordouw, Aerobic microbial taxa dominate deep subsurface cores from the Alberta oil sands, FEMS Microbiol. Ecol. 94 (2018) fiy073. 

#### **Data availability** 

No data was used for the research described in the article. 

#### **Acknowledgments** 

We acknowledge the OU Supercomputing Center for Education & Research (OSCER) at the University of Oklahoma, United States, and the Department of Civil and Natural Resources Engineering at the University of Canterbury, New Zealand, for computational resources and dedicated support. Finally, we are grateful to two anonymous reviewers whose comments helped us to improve this manuscript. 

- [28] Y.-Q. Tang, Y. Li, J.-Y. Zhao, C.-Q. Chi, L.-X. Huang, H.-P. Dong, et al., Microbial 

- of Canterbury, New Zealand, for computational resources and dedicated communities in long-term, water-flooded petroleum reservoirs with different in support. Finally, we are grateful to two anonymous reviewers whose situ temperatures in the Huabei Oilfield, China, PloS one 7 (2012) e33535. comments helped us to improve this manuscript. [29] A. Vossmeyer, C. Deusner, C. Kato, F. Inagaki, T. Ferdelman, Substrate-specific pressure-dependence of microbial sulfate reduction in deep-sea cold seep sediments of the Japan trench, Front. Microbiol. 3 (2012) 26806. 

- **Appendix A. Supplementary data** [30] L.-Y. Wang, R.-Y. Duan, J.-F. Liu, S.-Z. Yang, J.-D. Gu, B.-Z. Mu, Molecular analysis of the microbial community structures in water-flooding petroleum reservoirs with different temperatures, Biogeosciences 9 (2012) 4645–4659. 

- Supplementary data to this article can be found online at https://doi. https://doi. [31] W. Tian, H. Wang, X. Xiang, P.C. Loni, X. Qiu, R. Wang, et al., Water table level 

- org/10.1016/j.est.2024.112766. . controls methanogenic and methanotrophic communities and methane emissions in a Sphagnum-dominated peatland, Microbiology Spectrum 11 (2023) e01992–23. 

- **References** [32] R. Wang, H. Wang, Z. Xi, O.H. Tuovinen, L. Gong, X. Huang, Hydrology driven vertical distribution of prokaryotes and methane functional groups in a subtropical 

- [1] D. Agrawal, N. Mahajan, S.A. Singh, I. Sreedhar, Green hydrogen production peatland, J. Hydrol. 608 (2022) 127592. pathways for sustainable future with net zero emissions, Fuel 359 (2024) 130131. [33] H. Guo, K. Song, R. Hilfer, A critical review of capillary number and its application 

- [2] E.S. Hanley, J. Deane, B.O. Gallach<sup>´</sup> oir, The role of hydrogen in low carbon energy ´ in enhanced oil recovery, in: SPE Improved Oil Recovery Conference?: SPE, 2020 p. futures–a review of existing perspectives, Renew. Sustain. Energy Rev. 82 (2018) D031S46R01. 3027–3045. [34] M. Delshad, D. Bhuyan, G. Pope, L. Lake, Effect of capillary number on the residual 

- [3] Y. Chen, X. Jin, L. Zeng, Z. Zhong, M. Mehana, W. Xiao, et al., Role of large-scale saturation of a three-phase micellar solution, in: SPE Improved Oil Recovery underground hydrogen storage and its pathways to achieve net-zero in China, Conference?: SPE, 1986 p. SPE-14911-MS. J. Energy Storage 72 (2023) 108448. [35] Z.D. Isfehani, A. Sheidaie, M. Hosseini, J. Fahimpour, S. Iglauer, A. Keshavarz, 

- [4] K.R. Kumar, H. Honorio, D. Chandra, M. Lesueur, H. Hajibeygi, Comprehensive Interfacial tensions of (brine+ H2+ CO2) systems at gas geo-storage conditions, review of geomechanics of underground hydrogen storage in depleted reservoirs J. Mol. Liq. 374 (2023) 121279. and salt caverns, J. Energy Storage 73 (2023) 108912. [36] K. Ofori, C.M. Phan, A. Barifcani, S. Iglauer, An investigation of some H2S 

- [5] Council H, Hydrogen for Net Zero-a Critical Cost-Competitive Energy Vector, 2021. thermodynamical properties at the water interface under pressurised conditions [6] M. Perera, A review of underground hydrogen storage in depleted gas reservoirs: through molecular dynamics, Mol. Phys. 120 (2022) e2011972. insights into various rock-fluid interaction mechanisms and their impact on the [37] V. Shah, D. Broseta, G. Mouronval, F. Montel, Water/acid gas interfacial tensions process integrity, Fuel 334 (2023) 126677. and their impact on acid gas geological storage, International Journal of 

- [7] S.R. Thiyagarajan, H. Emadi, A. Hussain, P. Patange, M. Watson, A comprehensive Greenhouse Gas Control 2 (2008) 594–604. review of the mechanisms and efficiency of underground hydrogen storage, [38] R. Fauve, X. Guichet, V. Lachet, N. Ferrando, Prediction of H2S solubility in J. Energy Storage 51 (2022) 104490. aqueous NaCl solutions by molecular simulation, J. Petrol. Sci. Eng. 157 (2017) 

- [8] L.K. Sekar, R. Kiran, E.R. Okoroafor, D.A. Wood, Review of reservoir challenges 94–106. associated with subsurface hydrogen storage and recovery in depleted oil and gas [39] V. Shah, D. Broseta, Predicting interfacial tension between water and nonpolar reservoirs, J. Energy Storage 72 (2023) 108605. fluids from a Cahn-type theory, Langmuir 23 (2007) 12598–12605. 

- [9] D. Zivar, S. Kumar, J. Foroozesh, Underground hydrogen storage: a comprehensive [40] S. Khosharay, M. Abolala, F. Varaminian, Modeling the surface tension and surface review, Int. J. Hydrogen Energy 46 (2021) 23436–23462. properties of (CO2+ H2O) and (H2S+ H2O) with gradient theory in combination 

- [10] R. Tarkowski, Underground hydrogen storage: characteristics and prospects, with sPC–SAFT EOS and a new proposed influence parameter, J. Mol. Liq. 198 Renew. Sustain. Energy Rev. 105 (2019) 86–94. (2014) 292–298. 

- [11] J. Miocic, N. Heinemann, K. Edlmann, J. Scafidi, F. Molaei, J. Alcalde, [41] F. Biscay, A. Ghoufi, V. Lachet, P. Malfreyt, Monte Carlo simulations of the pressure Underground Hydrogen Storage: A Review, 2023. dependence of the water− acid gas interfacial tensions, J. Phys. Chem. B 113 

- [12] N.S. Muhammed, A.O. Gbadamosi, E.I. Epelle, A.A. Abdulrasheed, B. Haq, S. Patil, (2009) 14277–14290. et al., Hydrogen production, transportation, utilization, and storage: recent [42] C. Chen, Z. Chai, W. Shen, W. Li, Effects of impurities on CO2 sequestration in advances towards sustainable energy, J. Energy Storage 73 (2023) 109207. saline aquifers: perspective of interfacial tension and wettability, Industrial & 

- [13] M. Bai, K. Song, Y. Sun, M. He, Y. Li, J. Sun, An overview of hydrogen underground Engineering Chemistry Research 57 (2018) 371–379. storage technology and prospects in China, J. Petrol. Sci. Eng. 124 (2014) 132–136. [43] Y.H. Dehaghani, M. Assareh, F. Feyzi, Molecular dynamics simulations study on 

- [14] N. Dopffel, S. Jansen, J. Gerritse, Microbial side effects of underground hydrogen equilibrium, transport, and interfacial properties of H2S-brine systems under storage–knowledge gaps, risks and opportunities for successful implementation, conditions typical of geological sequestration, Environ. Earth Sci. 82 (2023) 541. Int. J. Hydrogen Energy 46 (2021) 8594–8606. [44] A. Hassanpouryouzband, E. Joonaki, K. Edlmann, N. Heinemann, J. Yang, 

- [15] R. Worden, P. Smalley, Reactions controlling H {sub 2} S concentration in deep Thermodynamic and transport properties of hydrogen containing streams, carbonate reservoirs, AAPG Bull. 79 (1995). Scientific data 7 (2020) 222. 

- [16] G. Hu, K. Dam-Johansen, S. Wedel, J.P. Hansen, Decomposition and oxidation of [45] E.A. Muller, Å Ervik, A. Mejía, A guide to computing interfacial properties of fluids pyrite, Prog. Energy Combust. Sci. 32 (2006) 295–314. from molecular simulations [article v1. 0], Living Journal of Computational 

- [17] Y. Zhang, Q. Li, X. Liu, B. Xu, Y. Yang, T. Jiang, A thermodynamic analysis on the Molecular Science 2 (2020) 21385. roasting of pyrite, Minerals 9 (2019) 220. [46] M. Levitt, M. Hirshberg, R. Sharon, K.E. Laidig, V. Daggett, Calibration and testing 

- [18] G. Muyzer, A.J. Stams, The ecology and biotechnology of sulphate-reducing of a water model for simulation of the molecular dynamics of proteins and nucleic bacteria, Nat. Rev. Microbiol. 6 (2008) 441–454. acids in solution, J. Phys. Chem. B 101 (1997) 5051–5061. 

- [19] X. Tao, Y. Li, H. Huang, Y. Chen, P. Liu, X. Li, Desulfovibrio vulgaris [47] A. Koster, M. Thol, J. Vrabec, Molecular models for the hydrogen age: hydrogen, ¨ Hildenborough prefers lactate over hydrogen as electron donor, Ann. Microbiol. 64 nitrogen, oxygen, argon, and water, J. Chem. Eng. Data 63 (2018) 305–320. (2014) 451–457. [48] M.G. Martin, J.I. Siepmann, Transferable potentials for phase equilibria. 1. United- 

- [20] W. Liamleam, A.P. Annachhatre, Electron donors for biological sulfate reduction, atom description of n-alkanes, J. Phys. Chem. B 102 (1998) 2569–2577. Biotechnol. Adv. 25 (2007) 452–463. [49] S.K. Nath, Molecular simulation of vapor− liquid phase equilibria of hydrogen 

- [21] Y. Kawano, K. Suzuki, I. Ohtsu, Current understanding of sulfur assimilation sulfide and its mixtures with alkanes, J. Phys. Chem. B 107 (2003) 9498–9504. metabolism to biosynthesize L-cysteine and recent progress of its fermentative [50] W. van Rooijen, P. Habibi, K. Xu, P. Dey, T. Vlugt, H. Hajibeygi, et al., Interfacial overproduction in microorganisms, Appl. Microbiol. Biotechnol. 102 (2018) tensions, solubilities, and transport properties of the H2/H2O/NaCl system: a 8203–8211. molecular simulation study, J. Chem. Eng. Data 69 (2023) 307–319. 

#### **Appendix A. Supplementary data** 

Supplementary data to this article can be found online at https://doi. https://doi. org/10.1016/j.est.2024.112766. . 

#### **References** 

- [22] S. Wang, L. Jiang, S. Xie, K. Alain, Z. Wang, J. Wang, et al., Disproportionation of inorganic sulfur compounds by mesophilic chemolithoautotrophic Campylobacterota, Msystems 8 (2023) e00954–22. 

- [51] Q. Chang, L. Huang, X. Wu, A molecular dynamics study on low-pressure carbon dioxide in the water/oil interface for enhanced oil recovery, SPE J. 28 (2023) 643–652. 

10 

_Journal of Energy Storage 97 (2024) 112766_ 

_Q. Chang et al._ 

- [52] Y. Zhang, S.E. Feller, B.R. Brooks, R.W. Pastor, Computer simulation of liquid/ liquid interfaces. I. Theory and application to octane/water, J. Chem. Phys. 103 (1995) 10252–10266. 

- [53] M. Shiga, T. Morishita, M. Sorai, Interfacial tension of carbon dioxide-water under conditions of CO2 geological storage and enhanced geothermal systems: a molecular dynamics study on the effect of temperature, Fuel 337 (2023) 127219. 

- [54] Q. Chang, D. Dempsey, L. Zhang, Y. Zhao, L. Huang, Molecular dynamics insights into gas-water interfacial tension: optimizing hydrogen storage in subsurface conditions, Int. J. Hydrogen Energy 64 (2024) 896–905. 

- [55] S.R. da Rocha, K.P. Johnston, R.E. Westacott, P.J. Rossky, Molecular structure of the water− supercritical CO2 interface, J. Phys. Chem. B 105 (2001) 12092–12104. 

- [56] M.S. Minkara, T. Josephson, C.L. Venteicher, J.L. Chen, D.J. Stein, C.J. Peters, et al., Monte Carlo simulations probing the liquid/vapour interface of water/hexane mixtures: adsorption thermodynamics, hydrophobic effect, and structural analysis, Molecular Physics 116 (2018) 3283–3291. 

- [57] M. Aslannezhad, M. Ali, A. Kalantariasl, M. Sayyafzadeh, Z. You, S. Iglauer, et al., A review of hydrogen/rock/brine interaction: implications for hydrogen geostorage, Prog. Energy Combust. Sci. 95 (2023) 101066. 

- [58] Q.-Y. Ren, G.-J. Chen, W. Yan, T.-M. Guo, Interfacial tension of (CO2+ CH4)+ water from 298 K to 373 K and pressures up to 30 MPa, J. Chem. Eng. Data 45 (2000) 610–612. 

- [59] B. Liu, J. Shi, M. Wang, J. Zhang, B. Sun, Y. Shen, et al., Reduction in interfacial tension of water–oil interface by supercritical CO2 in enhanced oil recovery processes studied with molecular dynamics simulation, J. Supercrit. Fluids 111 (2016) 171–178. 

- [60] L. Zhao, S. Lin, J.D. Mendenhall, P.K. Yuet, D. Blankschtein, Molecular dynamics investigation of the various atomic force contributions to the interfacial tension at the supercritical CO2–water interface, J. Phys. Chem. B 115 (2011) 6076–6087. 

- [61] L. Zhao, L. Tao, S. Lin, Molecular dynamics characterizations of the supercritical CO2–mediated hexane–brine interface, Ind. Eng. Chem. Res. 54 (2015) 2489–2496. 

- [62] J. Lekner, J. Henderson, Theoretical determination of the thickness of a liquidvapour interface, Physica A: Statistical Mechanics and its Applications 94 (1978) 545–558. 

- [63] Y. Yang, A.K. Narayanan Nair, S. Sun, Molecular dynamics simulation study of carbon dioxide, methane, and their mixture in the presence of brine, J. Phys. Chem. B 121 (2017) 9688–9698. 

- [64] R. Sakamaki, A.K. Sum, T. Narumi, R. Ohmura, K. Yasuoka, Thermodynamic properties of methane/water interface predicted by molecular dynamics simulations, J. Chem. Phys. 134 (2011). 

- [65] C. Miqueu, J.M. Miguez, M.M. Pineiro, T. Lafitte, B. Mendiboure, Simultaneous application of the gradient theory and Monte Carlo molecular simulation for the investigation of methane/water interfacial properties, J. Phys. Chem. B 115 (2011) 9618–9625. 

- [66] S. Mohammed, G.A. Mansoori, Effect of CO2 on the interfacial and transport properties of water/binary and asphaltenic oils: insights from molecular dynamics, Energy Fuel 32 (2018) 5409–5417. 

- [67] H.B. Navaid, H. Emadi, M. Watson, A comprehensive literature review on the challenges associated with underground hydrogen storage, Int. J. Hydrogen Energy 48 (2023) 10603–10635. 

- [68] M. Kanaani, B. Sedaee, M. Asadian-Pakfar, Role of cushion gas on underground hydrogen storage in depleted oil reservoirs, Journal of Energy Storage 45 (2022) 103783. 

- [69] Q. Zhao, Y. Wang, C. Chen, Numerical simulation of the impact of different cushion gases on underground hydrogen storage in aquifers based on an experimentallybenchmarked equation-of-state, Int. J. Hydrogen Energy 50 (2024) 495–511. 

- [70] S. Higgs, Y. Da Wang, C. Sun, J. Ennis-King, S.J. Jackson, R.T. Armstrong, et al., Comparative analysis of hydrogen, methane and nitrogen relative permeability: implications for underground hydrogen storage, Journal of Energy Storage 73 (2023) 108827. 

- [71] I.I. Amiri, D. Zivar, S. Ayatollahi, H. Mahani, The effect of gas solubility on the selection of cushion gas for underground hydrogen storage in aquifers, Journal of Energy Storage 80 (2024) 110264. 

11 

