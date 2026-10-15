# Carbon negative geothermal: Theoretical efficiency and sequestration potential of geothermal-BECCS energy cycles

**Authors:** K.A. Titus, D.E. Dempsey, R.A.M. Peer  
**Published in:** International Journal of Greenhouse Gas Control (2023)  
**DOI (version of record):** https://doi.org/10.1016/j.ijggc.2022.103813  
**This copy:** Accepted manuscript (peer-reviewed, author's version). Text extracted from the PDF at https://ddempsey.github.io/papers/2023-titus-carbon-negative-geothermal-theoretical-efficiency/titus2023-carbon-negative-geothermal.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** Accepted manuscript. © 2023. This manuscript version is made available under the CC-BY-NC-ND 4.0 license https://creativecommons.org/licenses/by-nc-nd/4.0/. The version of record is available at https://doi.org/10.1016/j.ijggc.2022.103813  
**Licence:** CC BY-NC-ND 4.0 https://creativecommons.org/licenses/by-nc-nd/4.0/  

---
1 

2 

3 

# **Carbon Negative Geothermal: Theoretical Efficiency and Sequestration Potential of** 

# **Geothermal-BECCS Energy Cycles** 

K. A. Titus<sup>1</sup> , D. E. Dempsey<sup>1</sup> , R. A. M. Peer<sup>1</sup> 

4 

- 1The University of Canterbury, 20 Kirkwood Avenue, Upper Riccarton, Christchurch 8041, New 

5 

Zealand 

6 

karan.titus@pg.canterbury.ac.nz 

7 Keywords: geothermal, hybrid power, biomass, dissolved CO2, BECCS, forestry waste, reinjection, 

8 

renewable energy, negative emissions 

9 

## **1. Abstract** 

- 10 Geothermal systems are an attractive option for baseload electricity generation with low emissions 

- 11 intensity (average 122 gCO2/kWh). However, about 70% of geothermal systems are low or medium 

- 12 enthalpy (<160°C), which often renders them uneconomic to develop for electricity production. A 

- 13 solution to increase both power production and utilization efficiency of these systems is hybridization 

14 with a biomass fuel source. In this work, we introduce and verify the concept of biomass hybridization 

15 combined with in-line dissolution and reinjection of biomass flue CO2. This subclass of bioenergy and 

16 carbon capture and storage (BECCS), termed geothermal-BECCS, has improved power production and 

- 17 negative CO2 emissions. This dual approach of using geothermal systems for power production and as 

- 18 carbon sinks can be a potential decarbonisation tool in areas with suitable geothermal and bioenergy 19 resources. 

- 20 Here, we quantify the thermodynamic and sequestration performance of four geothermal-BECCS 

- 21 configurations. Up to 100% of flue gas is dissolved and reinjected with the spent geofluid. Scaled to a 

- 22 1 kg/s geofluid production rate, flash and binary benchmark plants generated 32 and 43 kWe at 

- 23 efficiencies of 6 and 8% respectively. In comparison, four geothermal-BECCS designs yielded 64 kWe 

- 24 at 9% efficiency (flash plant), 76 kWe at 9% efficiency (ORC binary plant), 62 kWe at 7% efficiency 

- 25 (compound flash-binary plant), and 368 kWe at 19% efficiency (bioenergy based geothermal-preheat 

- 26 plant). Annual biogenic CO2 sequestration rates ranged from 217 to 675 tonnes per kg/s with 

- 27 emissions intensities from -209 to -922 gCO2/kWh. By simultaneously boosting low-emissions energy 

- 28 and sequestering bio-origin CO2, geothermal-BECCS promises to be an essential technology for 29 meeting climate targets. 

- 30 

## **2. Introduction** 

31 Geothermal energy is a renewable and relatively clean source of electricity generation with a global 32 installed capacity of about 14 GW in 2020. The countries with the highest installed capacities, such as 

33 the United States, Indonesia, Philippines, Turkey and Aotearoa New Zealand, have mature and high 34 temperature geothermal resources (REN21, 2021). However, about 70% of the world’s geothermal 35 systems are classified as low or medium enthalpy (Franco & Villani, 2009; Hochstein, 1990) with 36 reservoir temperatures below 160°C. 

37 Basic flash plants are considered infeasible for these systems, as the low electricity yields do not justify 38 the high development risk and capital costs (Dickson & Fanelli, 2003). The most widely deployed 39 technology for these reservoirs is the organic Rankine cycle (ORC) binary plant, which made up 35% 40 of all operating geothermal units in 2015 (DiPippo, 2016). By inducing heat transfer from the geofluid 41 to a secondary working fluid, usually a hydrocarbon, binary plants have been used with very low 

- 42 reservoir temperatures, e.g., 73°C at Chena Hot Springs, Alaska (Zarrouk & Moon, 2014). 

43 Another way to potentially exploit low temperature resources is to pair geothermal energy with a 

- 44 secondary fuel source, such as fossil fuels, solar energy or a biomass feedstock (DiPippo, 2016). The 

- 45 success of such hybrid energy schemes is dependent on the colocation and thermodynamic synergy 

- 46 between geothermal and secondary energy sources (DiPippo, 2016). While fossil fuel hybrids would 

- 47 have high CO2 emissions and solar hybrids are subject to seasonal and diurnal intermittency, 

- 48 combining geothermal with biomass heating offers a carbon neutral combustion process because the 

- 49 feedstock absorbs atmospheric carbon during growth. If these emissions are captured, the energy 

- 50 cycle itself is carbon negative. 

- 51 In this article, we introduce a novel negative emissions energy cycle that combines biomass 

- 52 hybridization and bio-origin flue carbon capture and sequestration, termed geothermal-BECCS. This 

- 53 energy cycle aims to aggressively promote decarbonisation by both boosting renewable power and 

- 54 operating with negative emissions. In the past, conventional BECCS has been described as an 

- 55 important negative emissions technology that has been identified as essential for meeting 

- 56 international climate targets (Fridahl & Lehtveer, 2018; Friedmann et al., 2020). Utilizing geothermal 

- 57 reservoirs and in-line dissolution for BECCS operations is a new proposal that addresses CO2 buoyancy 

- 58 and caprock security issues while making use of low temperature geothermal resources. 

- 59 To illustrate the function and efficiencies of geothermal-BECCS systems, we propose four novel 

- 60 geothermal-BECCS plant configurations and quantify their thermodynamic and sequestration 

- 61 performance. This work is a first step toward determining the techno-economic feasibility of such 62 systems. 

63 Magmatic-origin CO2 emissions (Ármannsson et al., 2005) are already captured at Hellisheidi 

- 64 geothermal field in Iceland using in-line dissolution technology installed in reinjection wells (Sigfússon 

- 65 et al., 2018). Deploying biomass heating at low enthalpy systems along with in-line dissolution of bio- 

- 66 origin flue CO2 could simultaneously improve conversion efficiency while ensuring negative 

- 67 operational emissions. A conceptual diagram of geothermal-BECCS systems is illustrated in Figure 1. 

68 

- 69 **Figure 1: Schematic process cycle of a geothermal-BECCS system. Geothermal fluid is produced and** 

- 70 **combined with a biomass feedstock to boost renewable power. The resultant CO2 emissions are** 

- 71 **dissolved in the reinjection stream and sequestered in the geothermal reservoir.** 

- 72 **3. Fundamental Concepts for Geothermal-BECCS** 

- 73 

   - _3.1. Hybrid Resource Geothermal Power_ 

- 74 Hybrid systems that couple geothermal energy with a secondary energy source are 

- 75 thermodynamically synergistic and can boost power production (Dal Porto et al., 2016; DiPippo, 2016; 

- 76 Kestin et al., 1978). The use of hybrid plants could facilitate improved electricity generation as long as 

- 77 the two resources lie in proximity (Kestin et al., 1978). The first example of this coupling, examined as 

- 78 early as 1924, uses fossil fuels as the secondary source (DiPippo, 2016). 

- 79 One geothermal-fossil fuel cycle involves the superheating of geothermal steam. This was investigated 

- 80 at the Geysers geothermal field in California (Janes, 1980). Two methods were considered: first, a fossil 

- 81 fuel boiler and heat exchanger that directly heated the geofluid, which had a potential power gain of 

- 82 60% above the original dry steam plant. Second, an ancillary natural gas turbine with an exhaust heat 

- 83 recovery system that could superheat the geothermal steam. The latter method was considered more 

- 84 reliable due to the concurrent electricity generation of the steam and natural gas turbines. 

- 85 Another hybrid geothermal-fossil fuel configuration involves preheating feed-water in conventional 

- 86 thermal cycles using hot geofluid (DiPippo, 2016; Kestin et al., 1978). In a pure fossil fuel plant, a 

- 87 portion of superheated steam is bled and extracted at several points during the turbine expansion 

- 88 process for feed-water preheating. Thus, the thermodynamic advantage of coupling geothermal 

- 89 energy for this preheating results in an increased mass rate through the turbine, ultimately improving 

- 90 the total power production of the plant. Tasking geothermal energy for feed-water heating can 

- 91 increase the potential power output of a plant by up to 60% (Khalifa et al., 1978; Liu et al., 2016). A 

- 92 case study at the Roosevelt Hot springs in Utah concluded that such a system would be technically 

- 93 and economically feasible (Parsons, 1978; DiPippo, 2016). In fact, feed-water preheating was 

- 94 concluded to be the only feasible solution when trying to exploit low enthalpy geothermal systems for 

- 95 hybrid geothermal-fossil fuel plants (Bruhn, 2002). 

- 96 Compound flash-binary hybrids were considered by DiPippo et al. (1981), where geothermal steam 

- 97 flashed at a separator was subsequently superheated prior to turbine entry. The separated brine was 

- 98 then used for feed-water heating in an ancillary Rankine cycle. This was deemed most suitable when 

- 99 the geofluid at the wellhead was two-phase, making it suboptimal for feed-water heating alone. 

- 100 In addition to fossil-geothermal hybrids, solar superheating of geofluid has been demonstrated in El 

- 101 Salvador and Iceland, with low initial geofluid temperatures of 154°C and 125°C, respectively (Li et al., 

- 102 2020). Solar energy has also been considered for power boosting at an ORC binary plant operating 

- 103 below design capacity (Manente et al., 2011). 

- 104 However, while solar energy presents a carbon neutral secondary energy source, an element of 

- 105 strategic planning is required due to its diurnal and seasonal nature (Greenhut et al., 2010; Manente 

- 106 et al., 2011). The economic viability of a solar-geothermal hybrid plant is thus dependent on variations 

- 107 in solar intensity, latitude, weather and topographical setting. 

- 108 Coupling bioenergy with geothermal systems is an alternative carbon neutral cycle with the potential 

- 109 advantage of more stable secondary heating than solar. Thain & DiPippo (2015) evaluated the 

- 110 hypothetical introduction of a biomass superheater to the Rotokawa I geothermal field (rated at 29 

- 111 MWe) in Aotearoa New Zealand. The biomass boosting increased the power output from the back- 

- 112 pressure turbine by 6.9 MWe. Due to the high enthalpy retained by the turbine exhaust steam, the 

- 113 case study considered using exhaust heat recovery to provide further energy to the binary units, 

- 114 resulting in an additional 1.6 MWe. 

- 115 Forestry waste from the Kaingaroa Forest was considered for the biomass feedstock for the boiler due 

- 116 to the proximity of the forest to Aotearoa New Zealand’s Taupo Volcanic Zone (TVZ), where the plant 

- 117 is located. The use of this fuel was considered carbon neutral because the absorption and release of 

- 118 CO2 remains within the terrestrial carbon cycle. However, collection and transport emissions would 

- 119 need to be quantified in a complete emissions assessment. 

- 120 An industry application of a geothermal-bioenergy cycle was tested at the Larderello geothermal field 

- 121 in Italy. A biomass superheater was implemented at the 20 MWe Cornia-2 facility (Dal Porto et al., 

- 122 2016), which was performing below design capacity. The plant was retrofitted to provide steam 

- 123 superheating to 370°C, adding 6 MWe of power with a turbine inlet pressure of 5 bar. The biomass 

- 124 feedstock was sourced from local suppliers, meeting the important colocation requirement. Municipal 

- 125 financial incentives and a dedicated feed-in tariff improved the viability of the retrofit project. 

- 126 Hybridization resulted in relatively few changes to the existing infrastructure beyond the insertion of 127 the biomass boiler and a heat exchanger. 

- 128 The successful implementation of geothermal-bioenergy hybrids is thus site-specific and the design is 

- 129 primarily dependent on colocation and reservoir temperature (DiPippo, 2016; DiPippo et al., 1981; 

- 130 Thain & DiPippo, 2015; Janes, 1984). Additionally, hybrid plants are subject to local market conditions 

- 131 and economic incentives (Bruhn, 2002; Dal Porto et al., 2016; Manente et al., 2011). 

- 132 _3.2. Geothermal and CCS_ 

- 133 Carbon capture and storage (CCS) is a technically feasible industrial-scale technology that typically 

- 134 involves the post-combustion capture of CO2. Conventional CCS has largely been applied to fossil fuels 

- 135 in order to attain carbon neutrality or minimize positive emissions (Galiègue & Laude, 2017). Studies 

- 136 have often focused on capturing and sequestering liquified or supercritical CO2 within geological 

- 137 formations, ideally at large volumes. However, free-phase CO2 is buoyant relative to groundwater, and 

- 138 therefore could be prone to leakage unless caprock security can be demonstrated (Kaya & Zarrouk, 

- 139 2017; Kervévan et al., 2013). CCS technologies are also heavily tied to the price of carbon (Galiègue & 

- 140 Laude, 2017). The incremental cost of capture and transportation, mixed with insufficient market 

- 141 incentives, has made conventional CCS difficult to implement on a wide scale into the energy sector 142 (de Coninck et al., 2018; IEA, 2017). 

- 143 One advantage of using geothermal for CCS schemes is that CO2 can be sequestered via in-line 144 dissolution using existing infrastructure, removing the need for offsite transportation and reducing 145 costs (Kervévan et al., 2017). The Icelandic geothermal community had originally developed in-line 

- 146 dissolution for sequestering magmatic-origin CO2 and H2S emissions from geothermal power plants to 

- 147 comply with emissions standards introduced by the Icelandic government (Berstad & Nord, 2016; 148 Sigfússon et al., 2018). 

- 149 In-line dissolution consists of releasing the CO2 from an interior pipe in the wellbore for dissolution 

- 150 beneath the reinjection fluid column. As CO2 solubility in water increases with elevated pressures 

- 151 (Duan & Sun, 2003), the rate of sequestration is improved for higher dissolution pressure. Basalt 

- 152 formations were specifically targeted for sequestration in the CarbFix project to rapidly induce CO2 

- 153 mineralisation. Sequestration through mineral storage is noted to have high capacity and secure 154 trapping (Sigfússon et al., 2018). 

- 155 Furthermore, the carbonated water is denser than freshwater, mitigating the buoyancy risk associated 

- 156 with free-phase CO2 in conventional CCS. The lack of buoyant, free-phase CO2 allows for shallower 

- 157 depths to be utilized for storage, and the efficacy of the cap rock is less integral (Sigfusson et al., 2015). 

- 158 Reinjection of CO2-charged geofluid has been shown through modelling to be a suitable sequestration 

- 159 tool, provided there is careful reservoir management to maintain pressure and avoid thermal and 

- 160 chemical breakthrough (Kaya & Zarrouk 2017). 

- 161 In 2017, 34% of CO2 emissions (10,000 tonnes) and 68% of H2S (5,000 tonnes) were captured at the 

- 162 industrial site and successfully sequestered (Gíslason et al., 2018). The cost of CCS through in-line 

- 163 dissolution at Hellisheidi was found to be two to four times less than conventional CCS, in part due to 

- 164 the capital cost-savings of using existing reinjection wells. However, the potential for sequestration 

- 165 through in-line dissolution is ultimately dependent on the solubility of CO2 in the reinjection fluid. The 

- 166 successful application of CCS for magmatic origin CO2 had prompted interest in direct air capture and 

- 167 sequestration (DACS) at Hellisheidi (Gutknecht et al., 2018). 

- 168 The CO2-DISSOLVED case study in France also considered the use of geothermal reinjection fluid as a 

- 169 medium for CCS for low range CO2 emitters. In this case study, low enthalpy geothermal energy was 

- 170 integrated with an existing natural gas boiler at a bioethanol plant, sequestering the flue gas CO2 

- 171 through aqueous dissolution (Galiègue & Laude, 2017). The CO2 is thought to be maintained in solution 

- 172 by pressure maintenance of the reservoir, although emissions capture was limited to 33% due to the 

- 173 solubility of CO2 in the reinjection fluid (Galiègue & Laude, 2017). 

- 174 _3.3. Bioenergy & Carbon Capture and Storage (BECCS)_ 

- 175 BECCS is an emerging technology where emissions from bioenergy combustion are captured and 

- 176 sequestered. The global sequestration potential of BECCS is estimated to be 3.3 - 7.5 Gt-CO2 per year 

- 177 (Kemper, 2015; Woolf et al., 2010), which is between 10 to 23% of worldwide CO2 emissions (IEA, 

- 178 2021). BECCS has been promoted as an important component of emissions reduction pathways to 

- 179 keep global temperature rise below 1.5°C, with its viability as a negative emissions tool predicated on 

- 180 the assumption that emissions from the bioenergy is carbon neutral (de Connick et al., 2018; Fridahl 

- 181 & Lehtveer, 2018; Kemper, 2015; Kervévan et al., 2017). 

- 182 The 5<sup>th</sup> assessment report (AR5) by the International Panel of Climate Change (IPCC) indicates most 

- 183 emissions scenarios cannot achieve a decline in atmospheric CO2 concentrations below 450ppm 

- 184 before 2100 without deployment of BECCS technology (Fridahl & Lehtveer, 2018). Furthermore, the 

- 185 Shared Socioeconomic Pathways (SSP) framework indicates that BEECS is a key technology to reduce 

186 global greenhouse gas emissions (Fridahl & Lehtveer, 2018). For example, median scenarios of the SSP 187 framework require BECCS to account for roughly 20% of the global energy production by 2100 in order 188 to achieve climate goals. In more local terms, according to the Lawrence Livermore National 189 Laboratory, the most economically feasible pathway for California’s emissions reduction strategy is to 

- 190 deploy roughly 100 Mt-CO2 per year through BECCS (Friedmann et al., 2020; Venton, 2016). 

191 The feasibility of BECCS is highly dependent on carbon pricing ($15-400 per tCO2, Consoli, 2019; Fuss 

192 et al., 2018), biomass land use (30-40 million hectares/GtCO2, Consoli, 2019), supply chain 193 infrastructure, and CO2 transport and injection (Kemper, 2015). One study compared CCS and BECCS 194 for a power plant and found that a carbon tax above 23.18 €/tCO2 was more economically favourable 195 to BECCS (Wei et al., 2020), noting the European emission allowance CO2 price to be 23.74 €/tCO2 at 196 the time. BECCS deployment requires consideration of emissions storage capacity, feedstock 197 availability, and spill-over effects on land use and food security (Fridahl & Lehtveer, 2018). BECCS has 198 yet to be deployed at a wide scale, and it could be difficult to do so without regulatory and institutional 

- 199 support (Muratori et al., 2016). However, BECCS has the potential to offset emissions from industries 

- 200 that face technical challenges and high costs to achieve emissions reductions (Fridahl & Lehtveer, 201 2018). 

- 202 

## **4. Geothermal-BECCS: Classification and Thermodynamic Model** 

- 203 Our proposed classification of geothermal-BECCS systems is based on two important concepts. First, 

- 204 biomass is used as a secondary fuel source for power generation. Second, CO2 emissions from the 

- 205 biomass feedstock are sequestered via in-line dissolution within reinjection wells. Liquified or free- 

- 206 phase CO2 injection is not considered within the scope of this work, leaving sequestration capacity to 

- 207 be constrained by the solubility of CO2 in reinjection fluid at dissolution conditions. 

- 208 Coupling geothermal with BECCS could simultaneously increase electricity generation while creating 

- 209 a negative emissions profile. Such carbon negative geothermal cycles potentially improve the 

- 210 economic feasibility of low enthalpy geothermal systems, which could encourage further uptake of 

- 211 this renewable technology. The feasibility of geothermal-BECCS is likely to be dependent on the 

- 212 colocation of geothermal systems and available biomass feedstock, coupled with any economic 

- 213 benefit incurred from emissions reduction incentives. 

- 214 In-line dissolution is a CCS approach that takes advantage of existing reinjection wells in a developed 

- 215 geothermal field. In contrast, conventional CCS will often require construction of major offsite pipe- 

- 216 networks and injection wells. Instead, certain on-site refurbishments, such as the bubbler or stainless- 

- 217 steel retrofits at certain points are required. The solubility of CO2 in reinjection fluid depends on 

- 218 injectate temperature, pressure and salinity (Duan & Sun, 2003). The presence of magmatic CO2 or 

- 219 H2S in the geofluid would further reduce sequestration potential (in the event they are captured and 

- 220 reinjected). The CO2 could be sequestered through mineral storage given favourable geology 

- 221 (Sigfússon et al., 2018), kept in solution through pressure maintenance (Kaya & Zarrouk, 2017; 

- 222 Kervévan et al., 2013), or some combination of both. 

- 223 One practical challenge for implementing a geothermal-BECCS system as a power production and 

- 224 negative emissions tool is to determine an optimal plant design. To address this problem, we 

- 225 developed a systems model to explore the mass-energy balances and CO2 dissolution conditions for 

- 226 multiple hypothetical configurations. This is the first step towards plant optimization, which is 

- 227 important to inform strategic decision making when maximizing thermodynamic performance and 228 sequestration potential. 

- 229 Our systems model is a modular description of geothermal-BECCS plant components that 

- 230 characterizes the thermodynamic phenomena that govern electricity generation, conversion 

- 231 efficiency and sequestration potential. These thermodynamic phenomena will change with plant 

- 232 configuration, so a systems model approach is useful to compare modelled outputs. Because 

- 233 geothermal-BECCS systems are inherently site specific, constrained by reservoir temperature and 

- 234 enthalpy and available biomass, a systems model also allows for comparisons across locations. 

- 235 

## _4.1. Model Methodology_ 

- 236 Mass and energy balances were calculated for production wells, separators, heat exchangers 

- 237 (preheaters, evaporators and superheaters), condensing turbines and surface pumps. For each, we 

- 238 assumed no uncontrolled losses in temperature and pressure. Furthermore, we assumed negligible 

- 239 pressure losses at valves and bends and thermal losses due to imperfect insulation or surface pumps. 

- 240 Model verification is provided in the supplemental index. 

241 

## 4.1.1. Flash Power Plant Thermodynamics 

- 242 The baseline quality of a geothermal resource is determined by reservoir conditions – temperature 

- 243 ( 𝑇𝑟𝑒𝑠 , °C), pressure ( 𝑃𝑟𝑒𝑠 , Pa), and specific enthalpy ( ℎ𝑟𝑒𝑠 , J/kg).  The enthalpy of the geofluid at the 

244 wellhead ( ℎ𝑤ℎ ) is the gravity element of the water column ( 𝑔𝐿𝑤 ) subtracted from the reservoir 245 enthalpy (DiPippo, 2016): 

- 246 The gravity element will be negligible on geofluid enthalpy unless in cases where the well is very deep 

247 and low in temperature (DiPippo, 2016). 

- 248 Separation of two-phase geofluid into steam and brine components depends on its enthalpy and the 

- 249 pressure rating of a standard vertical separator. The mass of dry steam and rejected brine are 

- 250 determined through conservation of mass and energy. The total geofluid mass ( 𝑚̇𝑤ℎ ) entering the 

- 251 wellhead separator is equal to the sum of the rejected brine mass ( 𝑚̇𝑏 ) and the mass of steam ( 𝑚̇𝑠 ) 

- 252 exiting the separator. Electronic equations of state are used to determine saturation enthalpies of 

253 steam ( ℎ𝑠 ) and brine ( ℎ𝑏 ) at the separator pressure. Energy conservation is then expressed in heat 

- 254 rate form using products of mass rate and enthalpy: 

255 The optimal separator temperature ( 𝑇𝑠𝑒𝑝 ) is found by averaging the condenser temperature ( 𝑇𝑐𝑜𝑛𝑑 ) 

256 and the reservoir temperature (DiPippo, 2016): 

257 In a single-stage flash plant, dry steam is dispatched immediately for (wet) expansion in a condensing 

258 turbine. The true exhaust enthalpy of steam condensate ( ℎ𝑒𝑥,𝑟𝑒𝑎𝑙 ) following expansion is determined 

259 using the Baumann rule (DiPippo, 2016). This requires the saturated liquid enthalpy ( ℎ𝑙 ) and the 

260 saturated vapor enthalpy ( ℎ𝑔 ), obtained at the condenser pressure: 

261 Where 𝐴 is the isentropic coefficient given by: 

262 The isentropic coefficient accounts for the dry turbine mechanical efficiency ( 𝜂𝑇𝐷 ), assumed to have 

263 a theoretical maximum value of 85%, and requires the isentropic turbine exhaust enthalpy ( ℎ𝑒𝑥,𝑖𝑠𝑒𝑛 ). 

264 As the steam expands in the turbine, mechanical work will generate power output ( 𝑊̇𝑔 ), which 

265 depends on the steam mass rate and the enthalpy drop across inlet and exhaust: 

266 Parasitic loads ( 𝑊̇𝑝𝑎𝑟 ) are subtracted to obtain net saleable power ( 𝑊̇𝑛𝑒𝑡 ): 

- 267 Depending on the design of a hybrid geothermal-BECCS plant, separated steam ( 𝑚̇𝑠 ) could be routed 

- 268 to a boiler after the separation process (Equations 2 and 3) resulting in superheated steam ( 𝑚̇𝑠ℎ𝑠 ). 

- 269 The enthalpy at the superheater outlet ( ℎ𝑠ℎ𝑠 ) is a predetermined plant design parameter based on the 

- 270 final temperature of the superheated steam. The heating rate required for superheating ( 𝑄̇𝑠ℎ𝑠 ), is 

- 271 calculated as (Thain & DiPippo 2015): 

- 272 The biomass burn rate ( 𝑚̇𝑏𝑖𝑜 ) to deliver this superheating is computed from the higher heating value 

- 273 of the biomass feedstock ( 𝐻𝐻𝑉 ) and the efficiency of the biomass boiler ( 𝜂𝐵𝑜𝑖𝑙𝑒𝑟 ). These values are 

- 274 both design parameters for the plant, with the higher heating value dependant on feedstock quality. 

275 For superheated steam configurations, steam enthalpy at turbine exhaust conditions is assumed to be 

- 276 sufficiently high that expansion is dry (Janes, 1984): 

277 The enthalpy of the exhaust steam condensate is used to determine the generated and net power 

- 278 output of the plant using Equations 6 and 7. 

279 To compare across different configurations how effectively a geofluid is being utilized, the exergy rate 

- 280 of the geothermal resource (𝐸̇𝑔<sup>) must be determined:</sup> 

281 where ℎ0 , 𝑇0 , and 𝑠0 are the ambient enthalpy, temperature and entropy conditions, respectively, and 

282 𝑠𝑤ℎ is the entropy of the geofluid at the wellhead. Plant utilization efficiency <mark>( 𝜂</mark> 𝑢<sup><mark>)i</mark>s the ratio of the net</sup> 

- 283 power of the plant to the exergy rate of the geofluid. 

- 284 For geothermal-BECCS configurations, the exergy rate of the biomass, a product of the biomass burn 

285 rate and specific exergy <mark>( 𝑚</mark> 𝑏𝑖𝑜<sup><mark>𝑒</mark></sup> 𝑏𝑖𝑜<sup><mark>)</mark>, also factors into the denominator of the utilization efficiency</sup> 286 calculation: 

287 

## 4.1.2. Binary Power Plant Thermodynamics 

- 288 At low reservoir enthalpies, flash plants become infeasible because the majority of geofluid exergy is 289 rejected with the separated brine. In such cases, a binary plant design might make more efficient use 

- 290 of these resources, and the same is true for geothermal-BECCS hybrids. 

- 291 In a binary cycle, a downhole pump is used to maintain the geofluid at high-pressure to avoid flashing 292 (DiPippo, 2016). The geofluid is therefore treated as liquid phase brine. The pump delivers the brine 293 to an evaporator, where it heats a (usually hydrocarbon) working fluid from its liquid saturation ( ℎ𝑙<sup>)</sup> 294 to vapor saturation point <mark>( ℎ</mark> 𝑔<sup><mark>)</mark>at a given evaporator pressure. In a counter-flow heat exchanger, this</sup> 

- 295 will result in a change between the brine evaporator inlet temperature ( <mark>𝑇𝑥</mark><sup><mark>)</mark>and the brine evaporator</sup> 

- 296 outlet temperature <mark>( 𝑇</mark> 𝑦<sup><mark>). C</mark>onservation of energy during evaporator heat transfer is described:</sup> 

- 297 <mark>Where 𝑚</mark> 𝑤𝑓<sup><mark>is the mass rate of the working fluid and</mark></sup> <u><mark>𝑐</mark></u> ~~𝑏~~<sup><mark>is the average specific heat capacity of the</mark></sup> 298 <mark>geofluid during the heat exchange. The properties of working fluid at these conditions were taken</mark> 299 <mark>from Reynolds (1979).</mark> 

- 300 <mark>The working fluid resides in a closed loop. After evaporation, it passes through a turbine and</mark> 301 <mark>condenser, before reaching a surface pump to restart the loop. The working fluid enthalpy at pump</mark> 

- 302 <mark>exit ( ℎ</mark> 𝑝,𝑒𝑥 <mark>) is likely not the same as ℎ</mark> 𝑙<sup><mark>, and thus a preheater is used. Geofluid exiting the evaporator</mark></sup> 

- 303 <mark>can be used in a second heat transfer to preheat the compressed working fluid. The heat transfer</mark> 

- 304 <mark>within the preheater is also described by energy conservation:</mark> 

- 305 Where 𝑇𝑧 is the final brine dispatch temperature. If the geothermal plant is designed for a specific 

- 306 brine dispatch temperature both the evaporator and preheater can be treated as a single 307 thermodynamic unit: 

308 

- 309 For geothermal-BECCS binary plants, the low temperature geofluid can be tasked for the heat 

- 310 exchange in the preheater (Equation 15). Meanwhile, the biomass can be tasked with heat exchange 

- 311 in the evaporator (Equation 16). The pump exit enthalpy is determined by the isentropic pump exit 

- 312 enthalpy ( ℎ𝑝,𝑖𝑠𝑒𝑛 ), the working fluid condition exiting the condenser ( ℎ𝐶𝑜𝑛𝑑 ), and the pump efficiency 

313 ( 𝜂𝑝 ): 

- 314 Due to the retrograde nature of common hydrocarbon working fluids in binary plants, e.g., isopentane 

- 315 (DiPippo, 2016), expansion is completely dry. The generated power is then dependent on the working 

- 316 fluid mass rate, the dry turbine efficiency, and the difference between the working fluid enthalpy at 

- 317 the binary turbine inlet ( ℎ𝐵𝑇 ) and the isentropic turbine exhaust enthalpy ( ℎ𝑒𝑥,𝑖𝑠𝑒𝑛 ), which depends 

- 318 on the cooling apparatus: 

- 319 If a portion of the heating load is taken up by the biomass boiler, then the power required for heating 

- 320 ( 𝑄̇ℎ ) is equivalent to the product of the working fluid mass rate and the change in enthalpy between 

- 321 inlet ( ℎ𝑖𝑛 ) and outlet ( ℎ𝑜𝑢𝑡 ) of the biomass heat exchanger. The latter is a design parameter and will 

- 322 be the same as the working fluid’s enthalpy at the binary turbine inlet ( ℎ𝐵𝑇 ). The inlet enthalpy is 

- 323 dependent on where the biomass heat exchanger is inserted into the cycle. 

324 The biomass burn rate can be found in a similar way as in Equation 10: 

325 4.1.3. CO2 Sequestration Capacity 

326 The CO2 sequestration rate depends on the biomass emissions rate and the reinjection fluid’s carrying 

327 capacity by CO2 dissolution. For the solubility of CO2 in pure water, we used the chemical potential 

328 model of Duan and Sun (2003), which is a standard formulation used in geothermal-CO2 reservoir 329 simulators (Zyvoloski, 2007). Their model parameterizes the solubility of CO2 in pure water ( 𝑠𝐶𝑂2 ) in 330 terms of pressure and temperature: 

331 Dissolution pressure ( 𝑃𝑑𝑖𝑠 ) is a design parameter that is determined by both the wellhead injection 332 pressure and the depth of the sparger (Sigfusson et al., 2015), and was set as a static condition. 𝑇𝑑𝑖𝑠 

333 is assumed to be the final dispatch temperature of either condensate exhaust ( 𝑇𝑒𝑥,𝑟𝑒𝑎𝑙 ) or dispatched 334 brine ( 𝑇𝑧 ), or when applicable, a mass-weighted average of both ( 𝑇𝑎𝑣𝑔 ). 

335 The CO2 emissions rate ( 𝑚̇𝐶𝑂2 ) depends on the biomass burn rate via the CO2 emissions factor ( 𝑋𝐶𝑂2 ), 

336 a property of stationary biofuel given in kg of CO2 per kg of feedstock (Table 1): 

337 The combined carrying capacity ( 𝑚̇𝑑𝑖𝑠 ) for a geothermal-BECCS plant with brine and condensate is: 

338 For a binary cycle, the reinjection temperature is the brine dispatch temperature from the preheater 

339 ( 𝑇𝑧 ). Thus, the carrying capacity is: 

- 340 The sequestration rate ( 𝑚̇𝑠𝑒𝑞 ) is limited by the carrying capacity of the reinjected geofluid, and thus 

- 341 constrained as: 

- 342 Because geothermal-BECCS systems would be balanced by both power production and negative 

- 343 emissions objectives, it is important to contextualize the sequestration rate in terms of the plant’s 

- 344 power generation. For this purpose, we define levelized annual sequestration ( 𝐿𝐴𝑆 ) as the ratio of 

- 345 annual sequestration and power plant output, in tonnes/year/kWe. It is calculated by converting the 

- 346 sequestration rate from 1 kg/s to 31,536 tonnes per year and dividing by the plants power output: 

- 347 Finally, to compare geothermal-BECCS configurations to other energy cycles, the annual emissions 

- 348 intensity ( 𝐸𝐼 ) factor can be expressed in gCO2/kWh by converting 𝐿𝐴𝑆 (1 million grams per tonne 

- 349 divided by 8760 hours in a year). 

- 350 Emissions intensities are usually used for carbon positive plants such as natural gas based power 

- 351 plants. If the operational emissions of a plant are carbon neutral, 𝐸𝐼 is assumed to be 0 gCO2/kWh in 

- 352 this study. If the operational emissions of a plant are net negative atmospheric, 𝐸𝐼 is expressed as a 

- 353 negative value. The entire life-cycle emissions (construction, magmatic CO2, fuel transport, etc.) of a 

- 354 plant should be factored into the 𝐸𝐼 during a practical application. 

- 355 _4.2. Model assumptions_ 

- 356 To enable comparison across different plant configurations, we have used reasonable parameters for 

- 357 the geothermal apparatus (Table 1) and fixed these values across configurations wherever possible. 

- 358 However, any practical application of this technology would likely require apparatus optimization to 

- 359 site-specific conditions. 

- 360 We have considered four different Geothermal-BECCS configurations in this study. These hybrids 

- 361 include a flash plant (Configuration 1), an ORC binary plant (Configuration 2), a compound flash-binary 

- 362 plant (Configuration 3), and a preheat system (Configuration 4). These configurations were compared 

- 363 to non-hybrid conventional configurations of flash (Benchmark A) and ORC binary (Benchmark B) 

- 364 geothermal plants, and a standalone bioenergy based thermal plant (Benchmark C). The model results 

- 365 for all configurations and benchmarks are presented in Table 2. 

- 366 All configurations consider a geothermal doublet comprising one production well and one reinjection 

- 367 well. A unit mass rate (1 kg/s) of geofluid is taken from a reservoir at the low temperature threshold 

- 368 of 160°C (Hochstein, 1990), an initial pressure of 50 bar, and a corresponding enthalpy of 678 kJ/kg. 

- 369 This allows for all model outputs to be evaluated on a per mass rate of geofluid basis and to be scaled 

- 370 to plants of different size. Scaling of infrastructure and costs are not considered here. 

- 371 A reservoir pressure of 50 bar is representative of the hydrostatic pressure in a 500 m deep well with 

- 372 a water table close to the surface. This is a reasonable estimate for geothermal reservoirs in Aotearoa 

- 373 New Zealand (Quinao & Zarrouk, 2018). Geofluid pressure at the wellhead is typically optimized using 

- 374 productivity curves (DiPippo, 2016), but for simplicity we have assumed 18 bar if a downhole pump is 

- 375 operating to keep the geofluid well below the liquid saturation curve. Where relevant, the wellhead 

- 376 pressure is the pressure rating of the wellhead separator (derived from Equation 4). 

377 

**Table 1: Initial properties for all modelled configurations** 

|**Parameter**|**Value**|
|---|---|
|Geofluid Mass Rate (kg/s)|1|
|Reservoir Temperature (°C)|160|
|Reservoir Pressure (bar)|50|
|Dry Turbine Efficiency (%)<sup>**I**</sup>|85|
|Generator Efficiency (%)<sup>**II**</sup>|95|

|Boiler Efficiency (%)<sup>**I**</sup>|80|
|---|---|
|Specific Heat Capacity of Water (kJ/kgK)<sup>**II**</sup>|4.19|
|Water Condenser Pressure (bar)<sup>**II**</sup>|0.09|
|Isopentane Condenser Pressure (bar)<sup>**II**</sup>|1.87|
|Woody Biomass Higher Heating Value (kJ/kg)<sup>**I**</sup>|15350|
|Woody Biomass Specific Exergy (kJ/kg)<sup>**I**</sup>|16500|
|Biomass CO2Emissions (kg/kg-biomass)<sup>**III**</sup>|0.862|

> **I** (Thain & DiPippo, 2015) 

> **II** (DiPippo, 2016) 

> **III** (Bioenergy Association, 2019) 

- 378 All configurations were modelled as pure water for simplicity in conceptualizing the energy cycle, with 

- 379 no magmatic origin CO2 or mineral salinity. In the past, reinjection of magmatic CO2 led to severe 

- 380 oxygen corrosion at the Coso geothermal field, USA due to chemical contact between condensate and 

- 381 air in direct contact condensers (Bonafin et al., 2019). Thus, we have opted to model surface 

- 382 condensers, which are essentially shell and tube heat exchangers that condense steam by inducing 

- 383 heat transfer (DiPippo, 2016), as a safeguard against oxygen corrosion. In practice, this would require 

384 a separate source of coolant. We assumed a condenser pressure for water cooling at 0.09 bar (DiPippo 

- 385 2016). For relevant configurations, the temperature of superheated water was set to 500°C, typical of 

386 fossil-based geothermal hybrids investigated previously (Kestin et al., 1978; Khalifa et al., 1978). This 

- 387 is a design parameter that would generally be constrained by apparatus material, cooling load and 

- 388 reheating strategy. 

- 389 For ORC binary configurations, isopentane (Reynolds, 1979) was used as the working fluid. A typical 

- 390 condenser pressure of 1.866 bar was assumed (DiPippo, 2016). The ambient/dead-state conditions 

- 391 for each benchmark and configuration was assumed to be 1 bar and 25°C. Ambient conditions in 

- 392 practice are site specific and vary by time of day and season. 

- 393 The biomass feedstock was assumed to be forestry waste with higher heating value of 15350 kJ/kg 

- 394 and a specific exergy of 16500 kJ/kg (Thain & DiPippo, 2015) from the Kaingaroa Forest, Aotearoa New 

- 395 Zealand. All combustion emissions from this feedstock were treated as CO2 at a value of 0.862 kg per 

- 396 kg of feedstock (Bioenergy Association, 2019). We assumed a dry turbine efficiency of 85% (the 

- 397 mechanical maximum), as well conservative values for generator and boiler efficiency of 95 and 80%, 398 respectively. 

399 The emissions for each configuration were compared to the solubility of CO2 in water at the intrinsic 

400 reinjection temperature and a dissolution pressure of 50 bar. Because an interior pipe and sparger is 

- 401 used for in-line dissolution, this dissolution pressure is not based solely on wellhead pressure, but also 

- 402 the hydrostatic pressure of the reinjection column at the depth that the CO2 exits into the exterior 

- 403 well. We believe 50 bar is a reasonable assumption because the sparger depth was between 330- 

- 404 360m and the injection pressure between 20-25 bar at the CarbFix pilot study in Hellisheidi, Iceland 

- 405 (Sigfusson et al., 2015). 

- 406 Reinjection temperatures for geothermal plants are optimized to maximize exergetic use while 407 avoiding the precipitation of silica. Despite using a pure water model, we opted to design a reinjection 

- 408 temperature that would be consistent with analogous plants in the New Zealand. For example, the 

409 test plant program at the Ngatamariki geothermal field had a preheater exit brine temperature of 90°C 

- 410 (Addison et al., 2015a). Despite the brine having a silica saturation index (SSI) of ~1.9, injection wells 

- 411 showed an increase in injectivity with no signs of scaling after one year. Thus, all geothermal-BECCS 

- 412 configurations were designed to have an average reinjection temperature of 95°C, allowing for 

- 413 dissolution conditions for CO2 to be consistent. The solubility of CO2 at these reinjection conditions is 414 0.021 kg per kg of water (2.1 wt%). 

- 415 Because of the small scale of the modelled configurations, parasitic loads (i.e. lighting, coolant load, 

- 416 operational loads, etc.) were assumed negligible. Two important parasitic loads, (1) the work required 

- 417 to compress biogenic CO2 for suitable in-line dissolution and (2) the work to compress working fluid in 

- 418 closed Rankine cycles, are demonstrated for a geothermal-BECCS preheat system in Appendix B and 

- 419 C respectively. For a fully sized plant, the optimization of all parasitic loads would need to be 

- 420 considered based on economic analysis. 

- 421 4.2.1. Benchmark plants 

- 422 For Benchmark A (Figure 2A), a geothermal flash plant with a condenser pressure of 0.09 bar drawing 

- 423 1 kg/s of geofluid from a reservoir at 160°C would have an optimized separator temperature of 102°C 

- 424 (Figure 2B), corresponding to a pressure rating of 1.1 bar. A mass rate of 0.11 kg/s of steam is 

- 425 separated with an enthalpy of 2679 kJ/kg at the turbine inlet. The condensate and brine are returned 

- 426 to a single reinjection line at 95°C. 

427 

- 428 **Figure 2: Schematic (A) and temperature-entropy (T-S) process diagram (B) for Benchmark A. PW =** 

- 429 **Production Well, Sep = wellhead separator, ST = steam turbine, C = condenser, IW = Injection well,** 

- 430 **P = surface pump. Red-line = hot geofluid, blue-line = cold geofluid.** 

- 431 For Benchmark B (Figure 3A), 1 kg/s of geofluid at 160°C from the reservoir is pumped at 18 bar to an 

- 432 evaporator and preheater. At a turbine inlet pressure of 18 bar, the enthalpy of the isopentane is 733 

- 433 kJ/kg (Figure 3B). The geofluid transfers enough heat to be cooled down to 95°C before being 

- 434 reinjected. The mass rate of isopentane required is thus 0.57 kg/s. The full working fluid cycle is given 

- 435 in Table A.1 in Appendix A. 

436 

- 437 **Figure 3: Schematic (A) and pressure-enthalpy (P-h) process diagram (B) for Benchmark B. DHP =** 

- 438 **downhole pump, PW = Production Well, E = evaporator, PH = preheater, BT = binary turbine, C =** 

- 439 **condenser, IW = Injection well, P = surface pump. Red-line = hot geofluid, blue-line = cold geofluid,** 

- 440 **grey-line = working fluid (isopentane).** 

- 441 For Benchmark C (Figure 4A), no geofluid is extracted. Instead, a standalone biomass-based 

- 442 powerplant is modelled with a closed Rankine cycle using distilled water as the working fluid. A 

- 443 biomass boiler using wood waste heats distilled water to superheated steam at 500°C (Figure 4B). The 

- 444 steam passes through a turbine at 18 bar before being condensed to 0.09 bar. The mass rate of 

- 445 working fluid was 0.39 kg/s (consistent with Configuration 4 introduced later), requiring a biomass 

- 446 burn rate of 0.11 kg/s. 

447 

- 448 **Figure 4: Schematic (A) and pressure-enthalpy (P-h) process diagram (B) for Benchmark C. BIO =** 

- 449 **biomass boiler, ST = steam turbine, C = condenser, P = surface pump. Black-dotted line = CO2, grey-** 

- 450 **line = working fluid (distilled water).** 

- 451 The mass rate of flue CO2 is 0.09 kg/s with an emissions intensity of 0 g/kWh due to the carbon-neutral 

- 452 nature of the biomass. It is assumed that the boiler is equipped with all standard apparatus (i.e. 

- 453 furnace, steam drum, etc.). The full working fluid cycle is given in Table A.2 in Appendix A. 

- 454 None of the benchmarks were modelled with in-line dissolution of biogenic CO2; Benchmark A and B 

- 455 had no biomass use and thus no biogenic CO2 emissions. Benchmark C did not have the geothermal 

- 456 reinjection infrastructure to facilitate in-line dissolution. 

- 457 _4.3. Geothermal-BECCS configurations_ 

- 458 4.3.1. Configuration 1 – Geothermal-BECCS Flash Plant 

- 459 Based on Benchmark A, a biomass boiler is inserted into the steam line between the wellhead 

- 460 separator and the turbine (Figure 5A). The 0.11 kg/s of steam is superheated from the separator 

- 461 temperature of 102°C to 500°C (Figure 5B) with an enthalpy increase from 2679 kJ/kg to 3488 kJ/kg. 

- 462 The biomass burn rate required to accomplish this is 0.008 kg/s, resulting in 0.007 kg/s of CO2 

- 463 emissions which is sent to the reinjection well. 

464 

465 **Figure 5: Schematic (A) and temperature-entropy (T-S) process diagram (B) for Configuration 1. PW** 

466 **= Production Well, Sep = wellhead separator, ST = steam turbine, C = condenser, IW = Injection** 

- 467 **well, P = surface pump, BIO = biomass boiler. Red-line = hot geofluid, dark red-line = superheated** 

- 468 **steam, blue-line = cold geofluid, dotted-black line = CO2.** 

469 4.3.2. Configuration 2 – Geothermal-BECCS ORC Binary Plant 

- 470 Based on Benchmark B, the 1 kg/s of geofluid is relegated to the preheating process while the working 

- 471 fluid is heated in the evaporator by the biomass (Figure 6A). The turbine inlet enthalpy of the 

- 472 isopentane is kept at the saturated vapor condition at 18 bar (733 kJ/kg), meaning more working fluid 

- 473 was required. This setup was chosen rather than simply superheating the isopentane past the vapor 

- 474 saturation point due to the retrograde nature of the working fluid (Figure 6B), likely resulting in very 

- 475 high enthalpy isopentane in the turbine exhaust. This new working fluid mass rate was ~1 kg/s. To 

- 476 heat the working fluid from the saturated liquid state to saturated vapor, 0.018 kg/s of biomass was 

- 477 required with 0.016 kg/s of CO2 sent to the reinjection well. The full working fluid cycle is given in 

- 478 Table A.3 in Appendix A. 

479 

- 480 **Figure 6: Schematic (A) and pressure-enthalpy (P-h) process diagram (B) for Configuration 2. DHP =** 

- 481 **downhole pump, PW = Production Well, PH = geothermal preheater, BT = binary turbine, C =** 

- 482 **condenser, IW = Injection well, P = surface pump, BIO = biomass boiler. Red-line = hot geofluid,** 

- 483 **blue-line = cold geofluid, grey-line = working fluid (isopentane), dotted-black line = CO2.** 

484 

   - 4.3.3. Configuration 3 – Geothermal-BECCS Compound Flash-Binary Plant 

- 485 Like historically proposed geothermal-fossil (DiPippo et al., 1978) and geothermal-solar hybrid designs 

- 486 (Greenhut et al., 2010), Configuration 3 maximizes the effective heat of the biomass by compounding 

- 487 both a flash portion and ORC binary portion into a single electricity generation cycle (Figure 7A). 

- 488 1 kg/s of geofluid is pumped to the surface at 18 bar before entering a boiler, where it is heated to the 

- 489 liquid saturation point by the biomass, 207°C. This point was chosen because it requires the minimum 

- 490 biomass heating, with a biomass burn rate of 0.018 kg/s and 0.015 kg/s of CO2. The heated geofluid 

- 491 then enters a cyclone separator, optimized to 126°C and 2.4 bar. A mass rate of steam of 0.16 kg/s 

- 492 then passes through a steam turbine and is condensed to 0.09 bar (7B). 

493 

494 **Figure 6: Schematic (A), temperature-entropy (T-s) process diagram (B) and pressure-enthalpy (P-** 

- 495 **h) process diagram (C) for Configuration 3. DHP = downhole pump, PW = Production Well, BIO =** 

- 496 **biomass boiler, Sep = cyclone separator, ST = steam turbine, C1 = condenser 1, C2 = condenser 2, E** 

- 497 **= Evaporator, PH = preheater, BT = binary turbine, IW = Injection well, P = surface pump. Red-line =** 

- 498 **hot geofluid, blue-line = cold geofluid, grey-line = working fluid (isopentane), dotted-black line =** 

- 499 **CO2.** 

- 500 The remainder of the brine (0.84 kg/s) transfers heat to isopentane via an evaporator and preheater, 

- 501 set to the separator pressure (Figure 7C). The enthalpy and mass rate of the isopentane at the binary 

- 502 turbine inlet are 590 kJ/kg and 0.21 kg/s respectively. The preheater exit temperature of the brine is 

- 503 105°C with the average reinjection temperature of the brine and condensate mixture at 95°C. The 

- 504 working fluid cycle for the binary portion of the schematic is given in Table A.4 in Appendix A. 

- 505 4.3.4. Configuration 4 – Geothermal-BECCS Preheat System 

- 506 Based on Benchmark C and fossil based geothermal hybrids (Kestin et al., 1978; Parsons, 1978), 

- 507 Configuration 4 also has closed Rankine cycle with distilled water that is primarily heated by the 

- 508 biomass feedstock (Figure 8A). However, 1 kg/s of low temperature geofluid (160°C) is pumped to 18 

- 509 bar and used to preheat the working fluid from the condenser temperature (44°C) to the saturated 

- 510 liquid condition (207°C, 2796 kJ/kg). 

511 

- 512 **Figure 8: Schematic (A) and pressure-enthalpy (P-h) process diagram (B) for Configuration 4. DHP =** 

- 513 **downhole pump, PW = Production Well, HE1= geothermal preheater, ST = steam turbine, C =** 

- 514 **condenser, IW = Injection well, P = surface pump, BIO = biomass boiler. Red-line = hot geofluid,** 

- 515 **blue-line = cold geofluid, grey-line = working fluid (distilled water), dotted-black line = CO2.** 

- 516 Because it is not retrograde by nature, superheating distilled water is typically deployed by 

- 517 conventional thermal plants (DiPippo, 2016; Kestin et al., 1978). Thus, the remainder of the heating 

- 518 (500°C, 3470 kJ/kg) is done by the biomass (Figure 8B), requiring a burn rate of 0.082 kg/s and resulting 

- 519 in 0.072 kg/s of CO2 emissions. With a preheater exit temperature of 95°C for the geofluid, the mass 

- 520 of working fluid was 0.39 kg/s. The full working fluid cycle is given in Table A.5 in Appendix A. 

- 521 

- 522 

- 523 

- 524 **5. Results and Discussion** 

525 _5.1. Geothermal-BECCS comparative power and sequestration performance_ 

- 526 Model results for all configurations are summarised in Table 2. All results are given on a per unit mass 

- 527 rate (1kg/s) of geofluid to facilitate scalability. The base case flash plant (Benchmark A) and binary 

- 528 plant (Benchmark B) generated 32 KWe and 43 KWe at 6 and 8% utilization efficiency, respectively. 

- 529 The geothermal-BECCS flash plant (Configuration 1) generated 64 kWe, twice that of the flash 

- 530 benchmark (Benchmark A). The geothermal-BECCS ORC binary plant (Configuration 2) generated 76 

- 531 kWe, which is 77% higher than the binary benchmark (Benchmark B). Both configurations 1 and 2 had 

- 532 a utilization efficiency of 9%, surpassing their respective benchmarks, A and B. 

- 533 The geothermal-BECCS compound flash-binary plant (Configuration 3), at 62 kWe, also surpassed 

- 534 benchmarks A and B but had similar or lower power than configurations 1 and 2. Its utilization 

- 535 efficiency, 7%, was also lower than configurations 1 and 2. It exceeded the benchmark flash plant by 

- 536 only a single percent despite generating almost double the power. Configuration 1 had the lowest 

- 537 biomass burn rate at 0.008 kg/s. Configurations 2 and 3 had an equivalent amount at 0.018 kg/s. 

- 538 The geothermal-BECCS preheat plant (Configuration 4) and Benchmark C both generated 368 kWe, 

- 539 which is much higher than the other configurations and benchmarks. Additionally, they had higher 

- 540 utilization efficiencies at 19% and 20%, respectively. Only 74% of the biomass burn rate was needed 

- 541 for Configuration 4 as compared to Benchmark C. Thus, in terms of power production, all geothermal- 

- 542 BECCS hybrid designs were improvements over the low temperature geothermal benchmark plants. 

- 543 The use of low temperature geofluid for preheating for a biomass plant traded one percent in 

- 544 utilization efficiency for a 26% reduction in feedstock. 

- 545 

- 546 

- 547 

**Table 2: Model results for all configurations, per 1 kg/s of produced geofluid** 

548 

## **All Configuration and Benchmark Results** 

|**Values**|**A**|**B**|**C**|**1**|**2**|**3**|**4**|
|---|---|---|---|---|---|---|---|
|Biomass Burn Rate<br>(kg/s)|-|-|0.111|0.008|0.018|0.018|0.082|
|Flue CO2Emissions<br>(kg/s)|-|-|0.097|0.007|0.016|0.016|0.072|
|Geofluid Exergetic<br>Power (kWth)|561|561|-|561|561|561|561|
|Biomass Exergetic<br>Power (kWth)|-|-|1834|130|297|299|1353|
|Generated Power<br>(kWe)|32|43|368|64|76|62|368|
|Utilization Efficiency<br>(%)|6|8|20|9|9|7|19|
|Sequestration<br>Efficiency (%)|-|-|-|100|100|100|30|
|Gross Annual<br>Sequestration<br>(tonnes/year)|-|-|-|217|501|501|675|
|Levelized Annual<br>Sequestration<br>(tonnes/year/kWe)|-|-|-|3.4|6.6|8.1|1.8|

549 Each configuration has variable CO2 emission rates, depending on the specific bioenergy requirements 

- 550 (Table 2). We compared these emissions against the dissolved CO2 carrying capacity of the unit mass 

- 551 of geofluid at dissolution conditions (50 bar, 95°C, pure water), which allowed us to quantify a 

- 552 sequestration rate for each configuration. The solubility of CO2 at the dissolution conditions is 0.021 

- 553 kg per kg of water. Configurations 1, 2 and 3 had biogenic CO2 emissions of 0.007, 0.016 and 0.016 

- 554 kg/s respectively, and were all able to sequester 100% of their respective biogenic CO2 emissions. 

- 555 Configuration 4 had an emissions rate of 0.072 kg/s that exceeded the sequestration capacity of the 

- 556 reinjected brine. Only 30% of the total biogenic emissions could be sequestered. What should be 

- 557 noted though is that emissions uncaptured can be considered carbon neutral. When compared to 

- 558 Benchmark C, which would have carbon neutral emissions of 0.097 kg/s, Configuration 4 had 0.051 

- 559 kg/s of carbon neutral emissions and 0.021 kg/s of carbon negative emissions. 

- 560 To enable comparison between the different geothermal-BECCS configurations as negative emissions 

- 561 systems, we defined two sequestration performance metrics. The first is annual gross sequestration 

- 562 (AGS), which is the maximum reinjected mass of CO2 in one year per unit mass rate of geofluid. The 

- 563 second metric is the levelized annual sequestration (LAS), which is the ratio of gross annual 

- 564 sequestration and generated power. The latter metric recognizes that the geofluid has a dual role: for 

- 565 electricity generation and as a vector for sequestering emissions. When considering the gross annual 

- 566 sequestration of each geothermal-BECCS configuration, Configuration 4 would sequester the highest 

- 567 amount of biogenic CO2 at 675 tonnes/year, followed by Configurations 2 and 3 with 501 tonnes/year, 

- 568 then Configuration 1 at 217 tonnes per year. By levelizing these values by the plant’s respective power 

- 569 output, we observe that Configuration 3 would have the highest levelized annual sequestration at 8.1 

- 570 tonnes/year/kWe, followed by Configuration 2, 1 and 4 at 6.6, 3.4 and 1.8 tonnes/year/kWe 

- 571 respectively. 

- 572 Both gross annual sequestration and levelized annual sequestration can be scaled to assess the 

- 573 performance or demands of specific site designs such as the geofluid and biomass requirements. For 

- 574 example, if Configuration 4 was scaled to a 100 MWe plant, it could theoretically sequester 0.18 MtCO2 

- 575 per year. The corresponding geofluid demand is 271 kg/s (23 kt/day); for reference, mass take from 

- 576 the Wairakei geothermal field (175 MWe) in Aotearoa New Zealand is 245 kt/day (Wymer & Nicholson 

- 577 2014). The required biomass burn rate to achieve 100 MWe is 22 kg/s (1.9 kt/day). 

- 578 To achieve the same nameplate capacity of 100 MWe with Configuration 3, 1613 kg/s (129 kt/day) of 

- 579 geofluid and 29 kg/s (2.5 kt/day) of biomass is required. This plant would be able to sequester 0.8 

- 580 MtCO2 per year. Expressed in reverse, to sequester 1 MtCO2 per year, Configuration 3 would have to 

- 581 be rated to 124 MWe and Configuration 4 would have to be rated to 545 MWe. In practice, the 

- 582 available geothermal and biomass resources must first be estimated before a plant can be sized. 

- 583 Finally, to lend context to geothermal-BECCS systems as negative emissions tools, it is helpful to 

- 584 compare the emissions intensity values of different operating plant types (Table 3). Due to the small 

- 585 scale of the theoretical configurations, only operational emissions are shown. Practical 

- 586 implementation of geothermal-BECCS would require consideration of full life cycle emissions. 

587 

**Table 3: Emissions intensity for all configurations, per 1 kg/s of produced geofluid** 

|**Operating Plants**|**Emissions Intensity**<br>**(gCO2e/kWh)**|**Geothermal-BECCS**<br>**Configuration**|**Emissions Intensity**<br>**(gCO2e/kWh)**|
|---|---|---|---|
|Coal<br>(2021 US Average)<sup>1</sup>|<br>1012|1|-386|
|Natural Gas<br>(2021 US Average)<sup>1</sup>|<br>413|2|-753|
|Petroleum<br>(2021 US Average)<sup>1</sup>|<br>966|3|-922|
|Ohaaki Flash Plant<br>(2019)<sup>2</sup>|<br>299|4|-209|
|Ngāwhā Binary Plants<br>(2019)<sup>2</sup>|<br>312|||
|Geothermal<br>(2019 NZ Average)<sup>2</sup>|<br>73|||

1: (EIA, 2021) 

2: (McLean et al., 2020) 

- 588 All plant configurations offset more emissions than output by the average geothermal plant in 

- 589 Aotearoa NZ and configuration 2 and 3 offset more emissions per unit energy than the average (US) 

- 590 natural gas power plant emits (Table 3). Configuration 3 could almost offset emissions at a rate 

- 591 equivalent to those produced by petroleum and coal-based power plants. Even though Configurations 

- 592 4 and 1 had the lowest negative emissions intensity of the geothermal-BECCS configurations, they 

- 593 were still able to offset roughly 51% and 93% of the emissions rate of a natural gas power plant. Thus, 

- 594 the sustainability potential of geothermal-BECCS has been quantified in two ways: boosted renewable 

- 595 power can help support an energy matrix less reliant on fossil fuels, and heavy carbon emitters could 

- 596 be offset by negative emissions. 

- 597 

   - _5.2. Opportunities for geothermal-BECCS_ 

- 598 Geothermal-BECCS can potentially be a negative emissions tool that not only avoids an energy penalty 

- 599 but also contributes to an energy gain. The efficacy of geothermal-BECCS to offset CO2 emissions is 

- 600 increased when noting that sequestration is complimented by renewable electricity generation. 

- 601 Geothermal energy can reduce reliance on traditional fossil fuels, curtailing future emissions, while 

- 602 the BECCS component contributes to negative emissions. The two fundamental technologies that 

- 603 form the basis of a geothermal-BECCS system – biomass hybridization (Dal Porto et al., 2016) and in- 

- 604 line dissolution of CO2 (Berstad & Nord, 2016; Sigfússon et al., 2018) – are pre-existing technologies in 

- 605 the geothermal industry, offering favourable prospects for the technical feasibility of geothermal606 BECCS systems. 

- 607 As a subset of BECCS technology, the gross sequestration from geothermal-BECCS systems could help 

- 608 achieve national and global emissions reduction targets. As an offset technology, it could be used by 

- 609 other industries that are unable to facilitate quick emissions reductions. As per AR5 and the SSP 

- 610 framework (Kemper, 2015), the economic viability of BECCS technologies is an important factor in 611 global emissions reduction targets. 

- 612 The requirement for reinjection is an intrinsic cost of developing most geothermal systems, 

- 613 independent of any potential sequestration activities. Using in-line dissolution offers some flexibility 

- 614 to the dissolution pressure, depending on the depth of the sparger and negates the need for 

- 615 transporting the CO2 offsite (Kervévan et al., 2017).  Thus, geothermal-BECCS does not suffer the same 

- 616 infrastructure penalties as conventional CCS, notably, the high capital costs of single-purpose deep- 

- 617 targeting wells. This is because existing reinjection wells can be leveraged if retrofitting an existing 

- 618 geothermal plant, as was the case in Hellisheidi (Sigfússon et al., 2018). In the case of a new 

- 619 development, potential revenues from the increased conversion efficiency and saleable power (Dal 

- 620 Porto et al., 2016) could reduce the time taken to recover well drilling costs. 

- 621 A spill-over benefit of geothermal-BECCS is improved commercial access to low enthalpy geothermal 

- 622 systems that might otherwise be uneconomic. These systems comprise the majority of classified 

- 623 geothermal resources worldwide (Franco & Villani, 2009; Hochstein, 1990), and hence a massive 

- 624 untapped opportunity for reliable electricity generation. Geothermal-BECCS also contributes to de- 

- 625 risking geothermal resource development on an individual well basis. This is because the temperature 

- 626 threshold for a feasible conversion efficiency is much lower in hybrid cycles that can compensate 

- 627 cooler fluids with increased biomass burn. Geothermal wells are particularly expensive to drill through 

- 628 volcanic rock, often in inaccessible or difficult terrain (Witter et al., 2019). 

- 629 Typical well costs range between USD 4 million (Thorhallsson & Sveinbjornsson, 2012) to 6 million 630 (Kipsang, 2015), upwards of 40% of the total resource investment (Thorhallsson & Sveinbjornsson, 

- 631 2012), so the possibility of a low temperature well typically presents a significant project risk. 

- 632 However, a geothermal-BECCS configuration rebalances the value of a well towards its fluid 

- 633 productivity – its ability to take or receive geofluid – and de-emphasizes the energy content of that 

- 634 fluid. Additionally, there is the opportunity to establish new feasibility thresholds for well depth and 

- 635 temperature during exploration. 

- 636 Geothermal-BECCS could potentially be deployed to retrofit existing plants. By increasing utilization 

- 637 efficiency through geothermal-BECCS, an underperforming plant could meet its nameplate capacity 

- 638 with a smaller mass intake. This could reduce the number or uptake rate of new production wells, as 

- 639 was the case for the geothermal-biomass hybrid Cornia-2 (Dal Porto et al., 2016). There are also 

- 640 environmental benefits to lowering mass extraction, including mitigation of subsidence and the 

- 641 preservation of natural surface manifestations (DiPippo, 2016). 

- 642 Another retrofit opportunity is for biomass plants operating in proximity to low to medium 

- 643 temperature geothermal resources whose geofluid could be used for preheating and sequestration. 

- 644 This would both reduce biomass feedstock required and create negative emissions. 

- 645 _5.3. Practical Challenges for implementing geothermal-BECCS_ 

- 646 In practice, there will also be economic, engineering and reservoir management constraints to be 

- 647 considered for any geothermal-BECCS design. First, direct superheating geothermal steam may 

- 648 require certain engineering solutions to avoid corrosion arising from exposure of magmatic H2S and 

- 649 mineral deposition (Dal Porto et al., 2016; DiPippo et al., 1981). This can be addressed through 

- 650 separation of these elements prior to superheating or by lining with corrosion resistant tubing. 

- 651 Further, the corrosive potential of carbonated water will require stainless steel piping (Sigfússon et 

- 652 al., 2018), particularly in the reinjection well. Configurations 2 and 4 could mitigate scaling issues by 

- 653 ensuring brine remains below the liquid saturation point throughout the cycle. If a direct-contact 

- 654 condenser is part of an existing flash plant, caution must be exercised during retrofit to avoid 

- 655 catastrophic corrosion due to oxygen exposure (Bonafin, 2019). 

- 656 The presence and scaling of mineral particulate can provide challenges at both ends of the doublet. 

- 657 Scaling within the tubing coils can be offset by scrubbing or implementing a mixer between 

- 658 superheated steam and low chloride steam (Dal Porto et al., 2016). The mineral particulate retained 

- 659 in brine streams could reduce the dissolution capacity within the reinjection fluid (Duan & Sun, 2003). 

- 660 Thus, extensive site-specific analysis regarding these minerals – as well as NCGs, another constraint 

- 661 on dissolution space – must be conducted to appropriately assess the technical feasibility of a given 

- 662 geothermal-BECCS system. 

- 663 As an example, geofluid from the Rotokawa geothermal field in Aotearoa New Zealand can have up to 

- 664 0.35 wt% of magmatic CO2 (Addison et al., 2015b). For Configuration 4, which operates with biogenic 

- 665 CO2 exceeding dissolution capacity, this represents an approximately 17% penalty to total 

- 666 sequestration. In contrast, for Configuration 3, after dissolving biogenic CO2 (1.6 wt%), there remains 

- 667 sufficient dissolution capacity in the reinjectate (2.1 wt% total, 0.5 wt% remaining) to also include the 

- 668 magmatic CO2, assuming it has been captured. Mineral salinity of the brine has an even lesser effect. 

- 669 For a highly concentrated brine with Cl at 1500 ppm, a modified solubility calculation from Duan and 

- 670 Sun (2003) indicates that only about 0.5% of the total CO2 dissolution capacity would be lost. 

- 671 Reservoir modelling and field management would be a crucial component for maintaining CO2 storage. 

- 672 Further research into the potential for mineralization, the risks of CO2 leakage, pressure maintenance 

- 673 and chemical breakthrough must also be undertaken on a site-specific basis. For example, a decline in 

- 674 reservoir pressure could induce the formation of a buoyant free-phase of CO2, which then poses a 

- 675 leakage risk (Kaya & Zarrouk, 2017). Reservoir studies would need to be conducted at prospective 

- 676 geothermal-BECCS fields to understand storage security, changes to the permeability structure and 

- 677 flow controls of the geothermal system due to mineralization of CO2 and acidification of injectate, and 

- 678 the time scale that CO2 may migrate towards the depressured production zone. 

- 679 The overall field reinjection strategy will need to be considered when designing the BECCS component, 

- 680 to avoid negative impacts on the life cycle of the geothermal system. Injection trials for dissolved CO2 

- 681 may be useful to determine the permanent sequestration capacity of a specific geothermal field. 

- 682 Proximity to sustainable biomass fuel sources will be a limiting factor for geothermal-BECCS 

- 683 deployment. Colocation of resources has been noted as a common prerequisite for previous feasibility 

- 684 studies of geothermal hybrids (Bruhn, 2002; Dal Porto et al., 2016; DiPippo, 2016; DiPippo et al., 1981; 

- 685 DiPippo & Thain, 2015; Janes, 1984; Manente et al., 2011). Sourcing the feedstock with sustainable 

- 686 biomass options that have a favourable CO2 life cycle within the timeframe of global climate targets is 

- 687 likely a key design consideration. Thus, balancing colocation and infrastructure requirements could be 

- 688 a significant aspect in determining feasibility. 

- 689 _5.4. Future economic analysis of geothermal-BECCS_ 

- 690 Since economic analysis is as important as thermodynamic synergy when determining feasibility of a 

- 691 practical geothermal-BECCS systems, there is more work to be done. A more holistic comparison of 

- 692 the different plant schematics could be obtained from economic analysis of the configurations 

- 693 described herein. For example, the levelized cost of electricity (LCOE) and the levelized cost of 

- 694 sequestration (LCOS) for the different configurations could supplement the thermodynamic and 

- 695 sequestration outputs expressed in this work. 

- 696 Once these are attained, subsequent techno-economic optimization could aid strategic decision 

- 697 making at a prospective site. These decisions could include planning a new site, retrofitting an existing 

- 698 plant operating below design capacity, or improving utilization efficiency once a geothermal-BECCS 

- 699 hybrid is operational. For example, Configuration 4 most resembles the example of geofluid being 

- 700 used for feed-water heating in a conventional fossil plant, which has been identified as the most 

- 701 economically feasible method for geothermal-fossil hybrids in the past (Bruhn, 2002; Contractor & 

- 702 Burbank, 1977). While the configuration had the highest utilization efficiency of geothermal-BECCS 

- 703 configurations at 19%, only a simplified design is presented in this work, with more complex utilization 

- 704 likely able to improve power production. Model improvements to this configuration could include 

- 705 optimization for reheat or stream extraction strategies. 

- 706 Configuration 1 could be used in retrofit of a flash plant below design capacity, similar to the Cornia- 

- 707 2 power plant in Lardarello, Italy (Dal Porto et al., 2016). The final superheated steam temperature 

- 708 would be designed with the abrasive materials in the geofluid in mind. Configuration 1 had a high 

- 709 exhaust steam temperature (Figure 5B), which could be used to heat additional binary units as was 

- 710 proposed in the Rotokawa case study (Thain & DiPippo, 2015). 

- 711 The integration of carbon price, localized emissions reduction incentives and other externalities could 

- 712 further encourage development of geothermal-BECCS systems with near-favourable market 

- 713 conditions. Identifying pathways to maximize renewable power, minimize LCOE/LCOS and meet 

- 714 climate targets could inform stakeholders, investors and policymakers. 

**6. Conclusion** 

- 715 

- 716 We introduced the concept of a geothermal-BECCS system, which combines biomass hybridization of 

- 717 geothermal electricity production and in-line CO2 dissolution. Both technologies have been 

- 718 individually demonstrated on a practical scale in the geothermal industry. To test the thermodynamic 

- 719 feasibility of the concept, we developed a systems model for four geothermal-BECCS plant 

- 720 configurations at a hypothetical geothermal field with 1 kg/s geofluid intake. The use of a unit mass 

- 721 rate of geofluid allows the results for individual cycles to be scaled up to a nominal size. For a reservoir 

- 722 at 160°C and enthalpy of 678 kJ/kg, a benchmark flash plant with a separator pressure of 1.1 bar 

- 723 (Benchmark A) produced 32 kWe at 6% utilization efficiency. A benchmark binary plant with an organic 

- 724 working fluid cycle at 18 bar (Benchmark B) produced 43 kWe at 8% utilization efficiency. 

- 725 All geothermal-BECCS configurations for the same reservoir, using forestry waste as feedstock, 

- 726 demonstrated improved power production over both Benchmarks A and B; 64 kWe for hybrid flash 

- 727 plant (Configuration 1), 76 kWe for hybrid ORC binary plant (Configuration 2), 62 kWe for a hybrid 

- 728 compound flash-binary plant (Configuration 3), and 368 kWe for a hybrid geothermal-preheat plant 

- 729 (Configuration 4). Of these configurations, all had a higher utilization efficiency compared to 

- 730 Benchmark A, with all but Configuration 3 having a higher utilization efficiency than Benchmark B. 

- 731 When Configuration 4 is compared to a standalone bioenergy thermal plant (Benchmark C) of equal 

- 732 nameplate capacity, there is a drop of one percent in utilization efficiency and a 26% reduction of 

- 733 feedstock required. The latter translated to 0.021 kg/s of carbon negative emissions and 0.051 kg/s of 

- 734 carbon neutral emissions for Configuration 4, relative to 0.097 kg/s of carbon neutral emissions for 

- 735 Benchmark C. 100% of biogenic CO2 emissions could be captured for Configurations 1, 2 and 3. Only 

- 736 30% was captured in Configuration 4 because of the limited CO2 carrying capacity of reinjected brine. 

- 737 Despite this, Configuration 4 had the highest gross annual sequestration when converting 0.021 kg/s 

- 738 to 675 tonnes per year. 

- 739 This study demonstrated that geothermal-BECCS configurations are thermodynamically feasible and 

- 740 can be theoretically used to offset emissions between -209 gCO2e/kWh and -922 gCO2e/kWh. We 

- 741 showed that these designs could achieve nominal sequestration scales of 1 MtCO2 per year when 

- 742 scaled in relation to plausible geothermal plant sizes (e.g., 124 MWe for Configuration 3). 

- 743 In practice, the proximity of the geothermal system to the biomass feedstock will be a limiting factor 

- 744 in the overall feasibility of geothermal-BECCS systems. The effects of dissolved minerals have been 

- 745 considered and are manageable. Importantly, further analysis of electricity, feedstock and CO2 

- 746 sequestration market conditions is required to determine the economic feasibility of site-specific 

- 747 geothermal-BECCS systems. 

- 748 Geothermal-BECCS systems could improve the accessibility of most of the world’s geothermal 

- 749 systems, which are classified as low temperature. This is achieved through improved plant utilization 

- 750 efficiency with the spill-over benefit of de-risking low-enthalpy well encounters during exploration. 

- 751 Furthermore, as a negative emissions technology, it is compatible with policy environments that tax 

- 752 emissions or enable offsetting. Finally, with so many advantages, geothermal-BECCS could provide a 

- 753 pathway to fulfil the uptake in BECCS technologies required for global climate change mitigation. 

754 **7. Acknowledgements** 

- 755 The authors acknowledge funding from the New Zealand Ministry of Business, Innovation & 756 Employment (Endeavour Project Empowering Geothermal). We thank Professor Rosalind Archer for 

- 757 helpful discussions during this project. Finally, we thank the two anonymous reviewers whose 

- 758 comments improved this work. 

- 759 

760 

761 **References** 

- 762 Addison, S. J., Brown, K. L., von Hirtz, P. H., Gallup, D. L., Winick, J. A., Siega, F. L., & Gresham, T. J. 

- 763 (2015a). Brine silica management at mighty river power, New Zealand. In Proceedings World 764 Geothermal Congress (Vol. 2015, pp. 19-25). 

- 765 Addison, S. J., Winick, J. A., Sewell, S. M., Buscarlet, E., Hernandez, D., & Siega, F. L. (2015b). 

- 766 Geochemical response of the rotokawa reservoir to the first 5 years of nga awa purua production. In 

- 767 Proceedings 37th New Zealand Geothermal Workshop (Vol. 18, p. 20). 

- 768 Ármannsson, H., Fridriksson, T., Kristjánsson, B.R. (2005). CO2 emissions from geothermal power 769 plants and natural geothermal activity in Iceland. Geothermics 34 (3), 286–296. 

- 770 http://dx.doi.org/10.1016/j.geothermics.2004.11.005.3232w3z 

- 771 Alvarenga, Y. (2008). Solar steam booster in the Ahuachapán geothermal field. GRC Transactions, 32, 772 395-399. 

- 773 Berstad, D., & Nord, L. O. (2016). Acid gas removal in geothermal power plant in Iceland. Energy 

- 774 Procedia, 86, 32-40. 

- 775 Bonafin, J., Pietra, C., Bonzanini, A., & Bombarda, P. (2019). CO2 emissions from geothermal power 

- 776 plants: evaluation of technical solutions for CO2 reinjection. In Proceedings of the European 

- 777 Geothermal Congress. 

- 778 Bruhn, M. (2002). Hybrid geothermal–fossil electricity generation from low enthalpy geothermal 

- 779 resources: geothermal feedwater preheating in conventional power plants. Energy, 27(4), 329-346. 

- 780 Consoli, C. (2019). Bioenergy and carbon capture and storage. Global CCS Institute. 

- 781 Dal Porto, F., Pasqui, G., & Fedeli, M. (2016). Geothermal power plant production boosting by biomass 

- 782 combustion: Cornia 2 case study. Proceedings of the European Geothermal Congress, 

- 783 de Coninck, H., Revi, A., Babiker, M., Bertoldi, P., Buckeridge, M., Cartwright, A., Dong, W., Ford, J., 

- 784 Fuss, S., & Hourcade, J. (2018). Chapter 4: strengthening and implementing the global response. Global 

- 785 warming of, 1. 

- 786 Dickson, M., & Fanelli, M. (2003). Geothermal Energy. Utilization and technologies 

- 787 DiPippo, R. (2016). Geothermal Power Plants: Principles, Applications, Case Studies and Environmental 

- 788 Impact 4<sup>th</sup> ed., Elsevier Science. https://books.google.co.nz/books?id=Xr0qjgEACAAJ 

- 789 DiPippo, R., DiPippo, E. A., Kestin, J., & Khalifa, H. E. (1981). Compound Hybrid Geothermal-Fossil 

- 790 Power Plants: Thermodynamic Analyses and Site-Specific Applications. Journal of engineering for gas 

- 791 turbines and power, 103(4), 797-804. https://doi.org/10.1115/1.3230804 

- 792 Duan, Z., & Sun, R. (2003). An improved model calculating CO2 solubility in pure water and aqueous 

- 793 NaCl solutions from 273 to 533 K and from 0 to 2000 bar. Chemical geology, 193(3-4), 257-271. 

- 794 EIA. (2021). Annual Energy Outlook 2021. https://www.eia.gov/outlooks/aeo/ 

- 795 Flude, S., Alcade, J., Wilkinson, M., Johnson, G., Edlmann, K., Bond, C., Scott, V., Gilfillan, S., Ogaya, X., 

- 796 & Haszeldine, R. S. (2018). Quantifying geological CO2 storage security to deliver on climate mitigation. 

- 797 EGU General Assembly Conference Abstracts, 

- 798 Franco, A., & Villani, M. (2009). Optimal design of binary cycle power plants for water-dominated, 

- 799 medium-temperature geothermal fields. Geothermics, 38(4), 379-391. 

- 800 Fridahl, M., & Lehtveer, M. (2018). Bioenergy with carbon capture and storage (BECCS): Global 

- 801 potential, investment preferences, and deployment barriers. Energy Research & Social Science, 42, 

- 802 155-165. 

- 803 Friedmann, J., Zapantis, A., Page, B., Consoli, C., Fan, Z., Havercroft, I., ... & Townsend, A. (2020). Net 

- 804 Zero and Geospheric Return: Actions Today for 2030 and Beyond. 

- 805 Fuss, S., Lamb, W. F., Callaghan, M. W., Hilaire, J., Creutzig, F., Amann, T., ... & Minx, J. C. (2018). 

- 806 Negative emissions—Part 2: Costs, potentials and side effects. Environmental Research Letters, 

- 807 13(6), 063002. 

- 808 Galiègue, X., & Laude, A. (2017). Combining Geothermal Energy and CCS: From the Transformation to 

- 809 the Reconfiguration of a Socio-Technical Regime? Energy Procedia, 114, 7528-7539. 

- 810 Gíslason, S. R., Sigurdardóttir, H., Aradóttir, E. S., & Oelkers, E. H. (2018). A brief history of CarbFix: 

- 811 Challenges and victories of the project’s pilot phase. Energy Procedia, 146, 103-114. 

- 812 Greenhut, A. D., Tester, J. W., DiPippo, R., Field, R., Love, C., Nichols, K., Augustine, C., Batini, F., Price, 

- 813 B., & Gigliucci, G. (2010). Solar–geothermal hybrid cycle analysis for low enthalpy solar and geothermal 

- 814 resources. Proc. World Geothermal Congress. 

- 815 Gutknecht, V., Snæbjörnsdóttir, S. Ó., Sigfússon, B., Aradóttir, E. S., & Charles, L. (2018). Creating a 

- 816 carbon dioxide removal solution by combining rapid mineralization of CO2 with direct air capture. 

- 817 Energy Procedia, 146, 129-134. 

- 818 Hochstein, M. P. (1990). Classification and assessment of geothermal resources. Small geothermal 

- 819 resources: A guide to development and utilization, UNITAR, New York, 31-57. 

- 820 IEA, 2017: Energy Technology Perspectives 2017: Catalysing Energy Technology Transformations. IEA, 

- 821 Paris, 30 France, 443 pp. 

- 822 IEA, 2021. Global Energy Review 2021, CO2 emissions. https://www.iea.org/reports/global-energy- 

- 823 review-2021/co2-emissions (accessed 25 July 2022). 

- 824 Janes, J. (1984). Evaluation of a superheater enhanced geothermal steam power plant in the Geysers 

- 825 area. Final report. California Energy Resources Conservation and Development Commission …. 

- 826 Kaya, E., & Zarrouk, S. J. (2017). Reinjection of greenhouse gases into geothermal reservoirs. 

- 827 International Journal of Greenhouse Gas Control, 67, 111-129. 

- 828 Kemper, J. (2015). Biomass and carbon dioxide capture and storage: A review. International Journal of 

- 829 Greenhouse Gas Control, 40, 401-430. 

- 830 Kervévan, C., Beddelem, M.-H., Galiègue, X., Le Gallo, Y., May, F., O’Neil, K., & Sterpenich, J. (2017). 

- 831 Main results of the CO2-DISSOLVED project: first step toward a future industrial pilot combining 

- 832 geological storage of dissolved CO2 and geothermal heat recovery. Energy Procedia, 114, 4086-4098. 

- 833 Kervévan, C., Bugarel, F., Galiègue, X., Le Gallo, Y., May, F., O‘Neil, K., & Sterpenich, J. (2013). CO2- 

- 834 Dissolved-A Novel Approach to Combining CCS and Geothermal Heat Recovery. Second EAGE 

- 835 Sustainable Earth Sciences (SES) Conference and Exhibition, 

- 836 Kestin, J., DiPippo, R., & Khalifa, H. (1978). Hybrid Geothermal-Fossil Power Plants. Society of 

- 837 Mechanical Engineers. 

- 838 Khalifa, H. E., DiPippo, R., & Kestin, J. (1978). Geothermal preheating in fossil-fired steam power plants 

- 839 (Vol. 4051). Department of Energy, Division of Geothermal Energy. 

- 840 Kipsang, C. (2015). Cost model for geothermal wells. In _Proceedings of the World Geothermal_ 

- 841 _Congress_ . 

- 842 Li, K., Liu, C., Jiang, S., & Chen, Y. (2020). Review on hybrid geothermal and solar power systems. 

- 843 Journal of Cleaner Production, 250, 119481. 

- 844 Liu, Q., Shang, L., & Duan, Y. (2016). Performance analyses of a hybrid geothermal–fossil power 

- 845 generation system using low-enthalpy geothermal resources. Applied energy, 162, 149-162. 

- 846 Manente, G., Field, R., DiPippo, R., Tester, J. W., Paci, M., & Rossi, N. (2011). Hybrid solar-geothermal 

- 847 power generation to increase the energy production from a binary geothermal plant. ASME 

- 848 International Mechanical Engineering Congress and Exposition, 

- 849 MBIE. (2020). Energy in New Zealand 2020. https://www.mbie.govt.nz/building-and-energy/energy- 

- 850 and-natural-resources/energy-statistics-and-modelling/energy-publications-and-technical- 

- 851 papers/energy-in-new-zealand/ https://doi.org/ISSN: 2324-5913 

- 852 McLean, K., Richardson, I., Quinao, J., Clark, T., & Owens, L. (2020). GREENHOUSE GAS EMISSIONS 

- 853 FROM NEW ZEALAND GEOTHERMAL: POWER GENERATION AND INDUSTRIAL DIRECT USE. In 

- 854 Proceedings 42nd New Zealand Geothermal Workshop (Vol. 24, p. 26). 

- 855 Muratori, M., Calvin, K., Wise, M., Kyle, P., & Edmonds, J. (2016). Global economic consequences of 

- 856 deploying bioenergy with carbon capture and storage (BECCS). Environmental Research Letters, 11(9), 857 095004. 

- 858 Özcan, N. Y., & Gökçen, G. (2010). Performance Analysis of Single-Flash Geothermal Power Plants: Gas 

- 859 Removal Systems. In Geothermal Energy, Technology and Geology (pp. 227-260). Nova Science 860 Publisher Hauppauge, NY. 

- 861 Parsons, R. M. (1978). System design verification of a hybrid geothermal/coal fired power 862 plant. Report No. SAN-637, 1572-T2. 

- 863 Quinao, J. J. D., & Zarrouk, S. J. (2018). Geothermal resource assessment using experimental design 

- 864 and response surface methods: The Ngatamariki geothermal field, New Zealand. Renewable Energy, 

- 865 116, 324-334. 

- 866 REN21. (2021). Renewables 2021 Global Status Report (Paris: REN21 Secretariat). ISBN 978-3-948393- 

- 867 03-8 

- 868 Reynolds, W. C. (1979). _Thermodynamic properties in SI: graphs, tables, and computational equations_ 

- 869 _for forty substances_ . Department of Mechanical Engineering, Stanford University. 

- 870 Sass, J. H., & Duffield, W. A. (2003). Geothermal Energy: Clean Power from the Earth’s Heat. DIANE 

- 871 Publishing. 

- 872 Scott, V., Haszeldine, R. S., Tett, S. F., & Oschlies, A. (2015). Fossil fuels in a trillion tonne world. Nature 

- 873 Climate Change, 5(5), 419-423. 

- 874 Sigfússon, B., Arnarson, M. Þ., Snæbjörnsdóttir, S. Ó., Karlsdóttir, M. R., Aradóttir, E. S., & Gunnarsson, 

- 875 I. (2018). Reducing emissions of carbon dioxide and hydrogen sulphide at Hellisheidi power plant in 

- 876 2014-2017 and the role of CarbFix in achieving the 2040 Iceland climate goals. Energy Procedia, 146, 877 135-145. 

- 878 Sigfusson, B., Gislason, S. R., Matter, J. M., Stute, M., Gunnlaugsson, E., Gunnarsson, I., ... & Oelkers, 

- 879 E. H. (2015). Solving the carbon-dioxide buoyancy challenge: The design and field testing of a dissolved 

- 880 CO2 injection system. International Journal of Greenhouse Gas Control, 37, 213-219. 

- 881 Silla, H. (2003). _Chemical process engineering: design and economics_ . CRC Press. 

- 882 Thain, I., & DiPippo, R. (2015). Hybrid geothermal-biomass power plants: applications, designs and 

- 883 performance analysis. Proceedings world geothermal congress, Melbourne, Australia, 

- 884 Thorhallsson, S., & Sveinbjornsson, B. M. (2012). Geothermal drilling cost and drilling 

- 885 effectiveness. _Proceedings of a “Short Course on Geothermal Development and Geothermal Wells”,_ 

- 886 _organized by UNU-GTP and LaGeo, in Santa Tecla, El Salvador, March 11_ , _17_ , 2012. 

- 887 Toselli, D., Heberle, F., & Brüggemann, D. (2019a). Techno-economic analysis of a solid biomass retrofit 

- 888 of an air-cooled ORC geothermal power plant. 

- 889 Toselli, D., Heberle, F., & Brüggemann, D. (2019b). Techno-economic analysis of hybrid binary cycles 

- 890 with geothermal energy and biogas waste heat recovery. Energies, 12(10), 1969. 

- 891 Venton, D. (2016). Core Concept: Can bioenergy with carbon capture and storage make an 

- 892 impact?. _Proceedings of the National Academy of Sciences_ , _113_ (47), 13260-13262. 

- 893 Woolf, D., Amonette, J. E., Street-Perrott, F. A., Lehmann, J., & Joseph, S. (2010). Sustainable biochar 

- 894 to mitigate global climate change. Nature communications, 1(1), 1-9. 

- 895 Witter, J. B., Trainor-Guitton, W. J., & Siler, D. L. (2019). Uncertainty and risk evaluation during the 

- 896 exploration stage of geothermal development: A review. _Geothermics_ , _78_ , 233-242. 

- 897 Wymer, A.L., Nicholson, S.A. (2014). WAIRAKEI POWERSTATION DISCHARGES. 

- 898 <u>https://www.waternz.org.nz/Article?Action=View&Article_id=221</u> 

- 899 Wei, X., Manovic, V., & Hanak, D. P. (2020). Techno-economic assessment of coal-or biomass-fired 

- 900 oxy-combustion power plants with supercritical carbon dioxide cycle. _Energy Conversion and_ 

- 901 _Management_ , _221_ , 113143. 

- 902 Zarrouk, S. J., & Moon, H. (2014). Efficiency of geothermal power plants: A worldwide review. 

- 903 Geothermics, 51, 142-153. 

- 904 Zyvoloski, G. (2007). FEHM: A control volume finite element code for simulating subsurface multi- 

- 905 phase multi-fluid heat and mass transfer. Los Alamos unclassified report LA-UR-07-3359. 

- 906 

- 907 

908 

## **8. Appendix A** 

## 909 

## **Table A.1: Working fluid cycle for Benchmark B** 

|||**Pressur**<br>**e**|**Enthalpy**||
|---|---|---|---|---|
|||**P (Bar)**|**h (kJ/kg)**||
|Turbine Inlet|1|18.00|733.0|Vapor saturation at Evaporator|
|Turbine Exhaust|2|1.87|657.5|Dry expansion|
|Condensed Vapor|3|1.87|578.2|State at condenser pressure|
|Condensed Liquid|4|1.87|249.5|State at condenser pressure|
|Pump Exit|5|18.00|253.1|Compressed delivery|
|Preheater|6|18.00|524.8|Heated to liquid saturation|

910 

911 

**Table A.2: Working fluid cycle for Benchmark C** 

|||**Pressur**<br>**e**|**Enthalpy**||
|---|---|---|---|---|
|||**P (Bar)**|**h (kJ/kg)**||
|Turbine Inlet|1|18|3470.3|Superheating|
|Turbine Exhaust|2|0.09|2524.7|Significantly dry expansion|
|Condensed Vapor|3|0.09|2580.3|Frame of reference|
|Condensed Liquid|4|0.09|183.3|State at condenser pressure|
|Pump exit|5|18|185.7|Compressed delivery|
|HE1 Exit|6|18|884.6|Preheating|

912 

913 

914 

**Table A.3: Working fluid cycle for Configuration 2** 

|||**Pressur**<br>**e**|**Enthalpy**||
|---|---|---|---|---|
|||**P (Bar)**|**h (kJ/kg)**||
|Turbine Inlet|1|18.00|733.0|Evaporator heated by biomass|
|Turbine Exhaust|2|1.87|657.5|Dry expansion|
|Condensed Vapor|3|1.87|578.2|State at condenser pressure|
|Condensed Liquid|4|1.87|249.5|State at condenser pressure|
|Pump Exit|5|18.00|253.1|Compressed delivery|
|Preheater|6|18.00|524.8|Preheater heated by geofluid|

915 

916 

**Table A.4: Working fluid cycle for binary portion of Configuration 3** 

|||**Pressure**|**Enthalpy**||
|---|---|---|---|---|
|||**P (Bar)**|**h (kJ/kg)**||
|Turbine Inlet|1|2.35|590.2|Vapor saturation at Evaporator|
|Turbine Exhaust|2|1.87|583.5|Dry expansion|
|Condensed Vapor|3|1.87|578.2|State at condenser pressure|
|Condensed Liquid|4|1.87|249.5|State at condenser pressure|
|Pump Exit|5|2.35|249.6|Compressed delivery|
|Preheater|6|2.35|268.1|Heated to liquid saturation|

917 

918 

919 

920 

921 

**Table A.5: Working fluid cycle for Configuration 4** 

|||**Pressur**<br>**e**|**Enthalpy**||
|---|---|---|---|---|
|||**P (Bar)**|**h (kJ/kg)**||
|Turbine Inlet|1|18|3470.3|Biomass superheating|
|Turbine Exhaust|2|0.09|2524.7|Significantly dry expansion|
|Condensed Vapor|3|0.09|2580.3|Frame of reference|
|Condensed Liquid|4|0.09|183.3|State at condenser pressure|
|Pump exit|5|18|185.7|Compressed delivery|
|HE1 Exit|6|18|884.6|Geofluid preheating|

922 

923 

## **9. Appendix B – CO2 compression parasitic load** 

- 924 For each geothermal-BECCS configuration the CO2 will need to be compressed to dissolution 

- 925 conditions. This work to compress the CO2 will incur a parasitic load that must be accounted for when 

- 926 opting for sequestration through in-line dissolution. A demonstration of this calculation is provided 

- 927 here for Configuration 4. The change in pressure across the compressor ( 𝛥𝑃𝐶 ) is calculated as follows 

928 in Equation B1: 

- 929 𝑃𝑑𝑖𝑠 is the dissolution pressure at the sparger (50 bar, 5 × 10<sup>6</sup> Pa), 𝑃𝑤ℎ is the wellhead injection pressure 930 (assumed to be 10 bar, 10<sup>6</sup> Pa), 𝑃𝑒𝑥 is the exit pressure of the CO2 from the boiler (assumed to be 1 bar, 10<sup>5</sup> 

- 931 Pa), 𝜌𝐶𝑂2 is the density of the CO2 at the sparger found through equations of state (~45 kg/m<sup>3</sup> at 50 bar 

- 932 and 95°C), 𝑔 is the acceleration due to gravity (9.81 m/s<sup>2</sup> ) and 𝑍𝑑𝑖𝑠 is the sparger depth (400 m). Thus, 𝛥𝑃𝐶 

- 933 is approximately 5.7 MPa. The specific compressor work ( 𝑤𝐶 ) is found with the following equation (Silla, 

- 934 2003): 

- 935 Where 𝑘 is a ratio of the specific heat of CO2 at a constant pressure to the specific heat of CO2 at a constant 

- 936 volume, 𝑅 is the individual gas constant (J/kgK) and 𝑇𝐶𝑂2 is the temperature of the CO2 in Kelvin. These 

- 937 were assumed to be 1.28, 188.92 J/kgK and 313.15 K respectively. 𝑤𝐶 is approximately 385 kWe/kg. 

- 938 To find the total work done by the compressor ( 𝑊𝐶) , the specific work is multiplied by the mass rate 

- 939 of sequester able CO2 ( 𝑚̇𝐶𝑂2) , which was 0.021 kg/s for Configuration 4. Thus, 𝑊𝐶 is 8.1 kWe, a 

- 940 parasitic load of roughly 2.2% of the 368 kWe generated by the geothermal-BECCS configuration. 

- 941 **10. Appendix C – Surface pump parasitic load** 

- 942 The work of surface pumps to compress working fluid from the condenser pressure to the preheater 

- 943 pressure is an important parasitic load in Rankine cycle plants. A demonstration of this calculation is 

- 944 provided here for Configuration 4. Working fluid leaves the condenser at the saturated liquid condition 

- 945 at the pressure of the condenser (0.09 bar). Its enthalpy ( ℎ𝐶𝑜𝑛𝑑 ) is found using the equations of state 

- 946 of water (183.26 kJ/kg). The same is done for the specific volume ( 𝑣𝐶𝑜𝑛𝑑 ), 0.001 m<sup>3</sup> /kg, to find the 

- 947 isentropic enthalpy of the working fluid at the pump exit ( ℎ𝑝,𝑖𝑠𝑒𝑛 ). 

- 948 Where 𝑃𝑝ℎ is the pressure of the preheater (1.8 million pascals) and 𝑃𝐶𝑜𝑛𝑑 is the pressure of the condenser 

- 949 (0.009 million pascals). The value for ℎ𝑝,𝑖𝑠𝑒𝑛 is approximately 185.07 kJ/kg. The true pump exit enthalpy of 

- 950 the working fluid can now be found using the efficiency of the pump ( 𝜂𝑝 ), assumed to be 75%. 

- 951 The value for ℎ𝑝,𝑒𝑥 is thus calculated to be 185.67 kJ/kg. The working fluid mass ( 𝑚̇𝑤𝑓 ) is 0.39 kg/s. 

- 952 The work of the pump is thus 0.94 kWe, according to the following equation (DiPippo, 2016): 

(C3) 

𝑊𝑝 = 𝑚̇𝑤𝑓(ℎ𝑝,𝑒𝑥 − ℎ𝐶𝑜𝑛𝑑) 

953 

