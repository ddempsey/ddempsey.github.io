# Reducing uncertainty associated with CO2 injection and brine production in heterogeneous formations

**Authors:** David Dempsey, Daniel O’Malley, Rajesh Pawar  
**Published in:** International Journal of Greenhouse Gas Control (2015)  
**DOI (version of record):** https://doi.org/10.1016/j.ijggc.2015.03.004  
**This copy:** Accepted manuscript (peer-reviewed, author's version). Text extracted from the PDF at https://ddempsey.github.io/papers/2015-dempsey-reducing-uncertainty-associated-co2-injection/dempsey2015-reducing-uncertainty-associated.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** Accepted manuscript. © 2015. This manuscript version is made available under the CC-BY-NC-ND 4.0 license https://creativecommons.org/licenses/by-nc-nd/4.0/. The version of record is available at https://doi.org/10.1016/j.ijggc.2015.03.004  
**Licence:** CC BY-NC-ND 4.0 https://creativecommons.org/licenses/by-nc-nd/4.0/  

---
- 1 **Reducing uncertainty associated with CO2 injection and brine production in heterogeneous** 

- 2 **formations** 

- 3 David Dempsey<sup>1</sup> *, Daniel O’Malley<sup>1</sup> , Rajesh Pawar<sup>1</sup> 

- 4 1Los Alamos National Laboratory, Los Alamos, NM 

- 5 *corresponding author 

- 6 <u>d.dempsey@lanl.gov</u> 

- 7 Postal address: 

- 8 Los Alamos National Laboratory 

- 9 EES-16 

- 10 Mailstop T003 

- 11 Los Alamos 

- 12 New Mexico, 87545 

- 13 

- 14 +1 505 664 0712 (phone) 

- 15 +1 505 665 8737 (fax) 

- 16 

17 

29 

30 

31 32 

33 34 35 

36 37 38 

39 

40 

### **Abstract** 

- 18 

- 19 

- 20 

- 21 

- 22 

- 23 

24 

- 25 

26 

- 27 

- 28 

41 

Spatial heterogeneity and variability across many orders of magnitude are two properties of formation permeability that are challenging to effectively capture in subsurface flow models. With regard to geological CO2 storage, heterogeneity affects storage capacity, plume migration, pressure build-up around injection wells and, if utilized, the possibility of early breakthrough at brine extraction wells. Faced with under-characterized heterogeneity and an information-poor environment, the challenge is to make as much use as possible of the available data in reducing uncertainty associated with model prediction of a CO2 injection operation. The two types of data used here to inform models are point permeability measurements from each well and interference tests between wells; these are both obtained from a synthetic permeability distribution approximating a hypothetical CO2 storage formation. These data are used to reduce uncertainty in predictions of CO2 injection, brine and CO2 production rates, and CO2 breakthrough times obtained from simulations of five-spot CO2 injection/brine production performed on >600 conditional permeability realizations. First, assuming the underlying permeability field exhibits long-range correlation and a log-normal permeability distribution, a Bayesian analysis was undertaken using the point permeability measurements to reduce the likely magnitude of permeability heterogeneity. Comparison of realizations drawn from the prior and posterior indicate that the data were sufficient to exclude extreme scenarios with very rapid or very slow CO2 transport and breakthrough at brine production wells. Thirty-year prediction envelopes for net CO2 retention, brine and CO2 production were reduced by 40, 45 and 72%, respectively. In the second stage, simulated interference tests for each of the posterior realizations were compared against interference tests simulated for the synthetic “true” permeability field. Weighting functions derived from these comparisons are used to further refine predictions, providing additional reductions of uncertainty by 38 and 69% for brine and CO2 production rates, respectively. Predictions of CO2 breakthrough are especially sensitive to analysis of interference tests, with a good estimate of the correct time obtained in three out of four cases. 

#### 42 

#### **Keywords** 

43 CO2 geologic storage; permeability; heterogeneity; Bayesian; interference test 

#### 44 

# **1 Introduction** 

45 Geological storage of carbon dioxide is one strategy for reducing emissions of greenhouse gases. One 46 proposed method is the injection of liquid or super-critical CO2 into deep formations, displacing the 47 saline brine currently in place. Displaced brines are much less compressible that CO2; consequently, 48 injection is likely to be accompanied by increases in brine pressure at great distances from the CO2 49 plume (Birkholzer et al., 2009). There are concerns that the overpressured brine may be displaced into 50 freshwater aquifers at shallower depths (Oldenburg and Rinaldi, 2011; Keating et al., 2013), trigger 51 earthquakes on critically-stressed faults (Cappa and Rutqvist, 2011; Zoback and Gorelick, 2012), or 52 otherwise reduce the effectiveness of the CO2 injection operation (Buscheck et al., 2012). 

53 Recently, several methods have been proposed to manage reservoir overpressure through extraction of 54 some part of the saline brine. Active CO2 reservoir management (Buscheck et al., 2012) suggests limiting 55 both the spatial extent and magnitude of the overpressured region by deploying brine production wells 56 at the periphery of the injection well-field. Numerical simulations of this approach at a 1:1 injection57 extraction ratio demonstrate the proposed reductions in pressure build-up, as well as an improvement 58 of the CO2 injection rate (for fixed wellhead pressure). As an extension of this method, Dempsey et al. 59 (2014) suggested a zero-overpressure target for the reservoir and showed that this could be achieved 60 through brine production, a marching well configuration, and management of the surface wellhead 61 pressure (WHP) for CO2 injection; however, this approach required much greater brine extraction ratios 62 than simulated by Buscheck et al. (2012), at least greater than 1:1.7. In contrast, Birkholzer et al. (2012) 63 proposed that brine extraction could be minimized by deploying wells to satisfy local performance 64 criteria, e.g., to provide pressure shielding for a known critically-stressed fault. In situations where 65 pressure-sensitive features are well-characterized, this method is particularly favorable for minimizing 66 the costs of brine treatment and disposal – variously estimated between $0.40 and $8.02/ton (Bourcier 67 et al., 2011; IEAGHG, 2012; Sullivan et al., 2013). 

68 In any system with concurrent CO2 injection and brine production, there will be some additional impetus 69 for the CO2 plume to migrate in the direction of the low pressure zone created around the extraction 70 well. Eventually, the plume may impinge upon the extraction well and CO2 would then be co-produced 71 along with the brine, reducing the efficiency of the storage operation. A particularly detrimental 72 scenario would be one in which the drilled injection and production wells both intersected the same 73 highly conductive feature, e.g., a fault or fracture zone. In this case, CO2 breakthrough at the production 74 well may occur much more rapidly than expected, possibly requiring that the well be shut-in or 75 abandoned. Therefore, the issue of permeability heterogeneity is of economic significance to geologic 76 CO2 storage in general, and pressure management schemes in particular. 

77 In recent years, several studies have been published on the implications of permeability heterogeneity 78 for the effectiveness of CO2 sequestration strategies. For the purposes of this overview, it is useful to 79 distinguish three types of heterogeneity (following Lengler et al. (2010)): structural, facies, and inter80 facies (the latter two are classified stratigraphic heterogeneity in Lengler et al. (2010)). Structural 81 heterogeneity is derived from faults or folds that impose permeability contrasts. For example, faults and 82 anti-clinal folds limit the lateral and vertical extent of a natural CO2 reservoir at the Springerville-St. 83 Johns Dome in eastern Arizona (Stevens et al., 2001). Here also, structural permeability facilitates slow 84 leakage of CO2 to the surface, as evidenced by travertine deposits along the fault trace (Gilfillan et al., 85 2011) and elevated concentrations of dissolved CO2 in the shallow groundwater (Moore et al., 2005; 86 Keating et al., 2014). Pasala et al. (2013) used numerical simulations to investigate end-member barrier87 and conduit-type faults; they found that reservoir compartmentalization by the barrier-types had a 88 positive impact on sequestration efficiency whereas the high-permeability conduits allowed the plume 89 to bypass parts of the reservoir and access overlying strata. 

90 Heterogeneity at the facies level is related to the geometric and spatial distribution of high- and low91 permeability deposits (e.g., sand channels, muddy floodplains) in a sedimentary environment. At this 92 scale, it is often necessary to assume each facies is homogeneous and assign it a characteristic 

- 93 permeability that may be common to all instances of that facies (Deng et al., 2012; Han et al., 2014) or 94 drawn from a distribution (Flett et al., 2007). For instance, Flett et al. (2007) investigated heterogeneous 95 permeability fields generated using indicator geostatistics and containing varying fractions of permeable 96 sand and impermeable shale. They showed that with increasing shale content, lateral plume migration 97 was promoted over vertical, and that residual trapping was impeded but CO2 dissolution enhanced. 98 Deng et al. (2012) also applied indicator geostatistics to generate 42 different permeability realizations, 99 each comprised of 11 reservoir or seal facies, approximating conditions at the Rock Springs Uplift, 

- 100 Wyoming. Simulation of fixed pressure injection into 16 wells for a period of 50 years suggested 101 potential CO2 storage of between 420 and 700 Mt with corresponding displaced brine volumes between 102 340 and 630 Mt. 

103 Han et al. (2014) investigated vertical and lateral migration of injected CO2 through sequences of low 104 permeability lenses. Similar to the approach adopted here, they first constructed a true permeability 105 field (referred to as the deterministic case by Han et al. (2014)) and then supposed this field to be 106 sampled at discrete locations by a series of drilled wells, as might occur in a field setting. Fifty 107 permeability realizations, conditioned on the well data, were generated and a CO2 injection scenario 108 simulated for each. Prediction envelopes of mass distribution at various depths were constructed from 109 the simulations and in most cases these were shown to bound the true – or deterministic – outcome. 110 This approach demonstrated how sparse information from a particular site – such as might be obtained 111 from well logging – can be incorporated into numerical simulations to provide a realistic bracket on the 112 range of outcomes a particular sequestration operation might encounter. 

- 113 The smallest-scale of permeability heterogeneity considered here is that occurring within a single facies. 114 For instance, Lengler et al. (2014) investigated CO2 transport within a sandy interval of the Stuttgart 115 formation at the Ketzin injection site, Germany. They generated 29 permeability realizations for five 116 different parameter sets, varying correlation length, standard deviation of the permeability population, 117 and other parameters. In accordance with the findings of Flett et al. (2007), they observed enhanced 118 rates of CO2 dissolution as more of the reservoir was accessed by the plume. Contrasting these results 119 against an equivalent homogeneous model, they found that storage capacity is underpredicted under 120 the assumption of homogeneity but that CO2 arrival at a nearby observation well was adequately 121 predicted. 

- 122 Of course, spatial heterogeneity is not the exclusive province of permeability; it is likely to be of varying 123 importance to other material properties relevant for geological CO2 storage, including: mechanical 124 properties controlling damage, fracturing or fault failure; drainage curves and capillary trapping 125 (Saadatpoor et al., 2010); and the lithological or brine composition relevant to CO2-rock and CO2-brine 126 geochemical interaction. The study presented here will not consider these forms of heterogeneity. 

- 127 The objective of this paper is similar to Han et al. (2014), in that, methods will be presented for 128 incorporating site data to reduce outcome uncertainty for injection/production in a heterogeneous 129 permeability environment. In contrast to Han et al. (2014), who investigated heterogeneity at the facies130 level, here we confine our study to heterogeneity within a formation. This paper is organized as follows. 131 Section 2 introduces two mathematical models for permeability heterogeneity and then discusses the 

132 Fractional Brownian motion (FBM) concepts specifically applied in this study. At this stage, the particular 133 permeability realization, 𝑘𝑡𝑟𝑢𝑒 , to be used as an approximation to reality and for evaluating the efficacy 134 of the developed methods, is introduced. Section 3 introduces our methodology, including details of the 135 numerical model for CO2 injection and brine production (3.1), Bayesian analysis of the permeability 136 distribution (3.2), and the use of simulated interference tests for weighting model realizations (3.4). 137 Section 4 discusses simulation results, beginning with simulated outcomes of the CO2 storage operation 138 for 𝑘𝑡𝑟𝑢𝑒 (4.1), which are both the predictive goal and yardstick for success in this study. Two methods 139 for reducing uncertainty and improving predictive accuracy are demonstrated: the first (4.2) contrasts 140 predicted CO2 injection and brine production rates, and CO2 breakthrough times for a set of 324 141 Bayesian prior and 336 posterior realizations; the second (4.3) investigates the same outcomes when 142 posterior realizations are weighted by a similarity measure between true and simulated interference 143 tests. A summary of the developed methods, their advantages and limitations, is given in Section 5. 

144 

# **2 Permeability heterogeneity** 

145 For subsurface flow, permeability is the most important, most variable and least well-constrained 146 material parameter (Matthews and Russell, 1967; Ingebritsen et al. 2010). Observations of permeability 147 span many orders of magnitude depending on depth, lithology, measurement scale or degree of 148 fracturing (Brace, 1980; Evans et al., 1997; Manning and Ingebritsen, 1999; Townend and Zoback, 2000). 149 Importantly, permeability is heterogeneous, i.e., it is a spatially variable field. Permeability is also 150 anisotropic, although this particular property is not investigated here. 

151 152 153 154 155 156 157 158 159 

Permeability heterogeneity is a rich field of study that has spawned advances in geostatistics (Johnson and Dreiss, 1989), analogue (Zhang et al., 2005) and numerical modeling (Kitanidis and Vomvoris, 1983), and uncertainty quantification (Lu and Zhang, 2004), while borrowing from fields as diverse as earthquake physics (Heffer, 2007), signal processing (Molz et al., 1997), and Bayesian statistics (Copty et al., 1993). Permeability is said to be spatially correlated; this means that two permeability measurements, separated by a distance, 𝐿 , are not independent of one another unless 𝐿 is greater than the correlation length, 𝐿𝑚𝑎𝑥 . Two common empirical models for quantifying this heterogeneity assume that 𝐿𝑚𝑎𝑥 either has a finite value or that it is infinite, i.e., there is no correlation length. A commonly employed example of the latter is Fractional Brownian motion (Molz et al., 1997). 

160 The correlation length, 𝐿𝑚𝑎𝑥 , is often determined by fitting an exponential model to the variogram of 161 geospatial permeability data; a finite correlation length is indicated by a plateau of the variogram. In 162 situations where no plateau is observed, this indicates that either (1) 𝐿𝑚𝑎𝑥 is finite, but the spatial 163 extent of the data is not sufficient to reveal the correlation length (variogram plateau), or (2) 𝐿𝑚𝑎𝑥 is 164 infinite (FBM) and no plateau will be observed, even if additional data are gathered. While of 165 considerable academic interest, this distinction is not practically important if investigations are confined 166 to a domain of study that has dimensions less than the correlation length. FBM concepts can be 167 developed and applied without penalty in such investigations, as will be done here. 

## 168 **2.1 A true, heterogeneous permeability field** 

169 Our intent is to develop methods that reduce uncertainty when injecting CO2 into, or producing brine 170 from, a formation with some underlying, but unknown, heterogeneous permeability distribution. For the 171 purposes of assessing the accuracy of the methods developed here, it is useful to work with a 172 synthetically-generated “true” permeability field, 𝑘𝑡𝑟𝑢𝑒 , that might be an acceptable approximation to 173 some real permeability distribution, 𝑘𝑓𝑖𝑒𝑙𝑑 , at a given CO2 injection site. As for 𝑘𝑓𝑖𝑒𝑙𝑑 , 𝑘𝑡𝑟𝑢𝑒 can be 174 sampled at discrete locations by “drilling” wells and can be further interrogated by simulating well 175 interference tests. However, unlike 𝑘𝑓𝑖𝑒𝑙𝑑 , 𝑘𝑡𝑟𝑢𝑒 is known completely and, therefore, the outcome of a 176 CO2 injection operation into 𝑘𝑡𝑟𝑢𝑒 is easily obtained by numerical simulation. The disadvantage is that 177 any assumptions built into the synthetic generation of 𝑘𝑡𝑟𝑢𝑒 may not necessarily be true for every 𝑘𝑓𝑖𝑒𝑙𝑑 . 

- 178 In generating the particular 𝑘𝑡𝑟𝑢𝑒 used in this study (Figure 1A), the following assumptions were made: 

- 179 1. Permeability is spatially correlated for distances less than ~3 km; this is sufficient to constrain a 180 domain of study that includes a generic 5-spot well pattern for which CO2 injection and brine 181 production will be simulated. In an analogue modeling study of scaled depositional environments in 182 sedimentary basins, Zhang et al. (2005) demonstrated spatial correlation over distances of 3 km in 8 183 out of 10 sampled regions, so this assumption is not unreasonable. Note, this neither precludes nor 184 endorses a view that 𝑘𝑓𝑖𝑒𝑙𝑑 is spatially correlated at lengths greater than 3 km, i.e., whether 𝐿𝑚𝑎𝑥 is, 185 or is not, finite. 

- 186 2. A histogram of all permeability values has a log-normal distribution (Figure 1B). This is a commonly187 observed feature of many compiled permeability datasets (Snow, 1970; Leary and Al-Kindy, 2002). 

- 188 3. A power spectrum, 𝑆(𝑓) , computed from the Fourier transform of 𝑘𝑡𝑟𝑢𝑒 (Figure 1C) has a power-law 189 dependence on spatial frequency, 𝑓 , i.e., 𝑆(𝑓) ∼𝑓<sup>−𝛽</sup> where 𝛽 is the spectral slope (in this case set 190 equal to 1.4). Such spectral methods are often used to analyze FBM permeability distributions (Molz 191 et al., 1997; Zhang et al., 2005) and compiled permeability datasets indicate that frequently 1 < 𝛽 < 2. 

192 The particular permeability field, 𝑘𝑡𝑟𝑢𝑒 , shown in Figure 1A was selected from an infinite set of 193 permeability fields satisfying the above assumptions. We selected 𝑘𝑡𝑟𝑢𝑒 based on the qualitative 194 assessment that a five-spot well pattern would sample a variety of permeability conditions – high and 195 low local permeability, high and low connectivities between wells – thus allowing us to demonstrate 196 both the advantages and limitations of the methods developed in this paper for a variety of drilling 197 outcomes. Here, high connectivity between wells implicitly refers to the presence of high permeability 198 pathways that connect the wells and favors rapid flow between them. 

- 199 Several features of 𝑘𝑡𝑟𝑢𝑒 are derived from data for the Weber Sandstone formation at Rock Springs 200 Uplift (RSU), Wyoming. RSU is the site of a proposed CO2 injection operation and the Weber Sandstone 201 would be one of the primary storage formations (Deng et al., 2012). Based on these data, we have 202 assigned the log-normal permeability distribution (Figure 1B) a mean of -15 and a standard deviation of 203 0.91; however, we emphasize that advance knowledge of these parameters is not a requirement of the 204 approach demonstrated here. Finally, following Deng et al. (2012), we assign porosity as a linear 205 function of log-permeability, i.e., log(𝑘) = 0.1937 𝜙 -1.2911. 

207 

208 209 210 211 212 213 

# 206 **3 Methodology** 

The objective is to constrain as well as possible operational outcomes of economic significance for a CO2 injection operation in which concurrent brine production is used to manage reservoir overpressure. The specific operational outcomes addressed here are: (1) the stabilized CO2 retention and brine production rates at given operating wellhead pressure (WHP); (2) the timing of CO2 breakthrough at brine production wells; and (3) the rate of CO2 co-production after breakthrough occurs. The CO2 retention rate is defined as the difference between rates of injected and co-produced CO2. Each of these outcomes impacts the economic decision-making around the use, or not, of brine production wells. 

214 For the heterogeneous permeability field designated 𝑘𝑡𝑟𝑢𝑒 (Section 2.1), we consider a traditional five215 spot scenario with CO2 injection into a central well and brine production from four peripheral wells 1 km 216 distant. In a practical CO2 injection operation, siting of new wells would involve weighing specific 217 geological, engineering or economic considerations. Futhermore, brine wells may be present in equal or 218 fewer numbers to the CO2 injection wells. Nevertheless, the five-spot configuration, with a high number 219 of brine production wells, is conceptually simple and has the advantage of demonstrating a multitude of 220 breakthrough outcomes, e.g., rapid versus slow. The methodology introduced here is not specific to any 221 particular well pattern, although the degree of uncertainty reduction will depend on the number of 222 wells drilled and the area they cover. 

223 For the case of sequestration within a depleted oil or gas reservoir, existing wells are likely to be 224 prioritized over the drilling of new ones. In this case, data on the production history of the field would 225 be invaluable in characterizing permeability heterogeneity and the uncertainty quantification process. 226 However, this scenario is fundamentally different to the one considered here: CO2 injection into a deep 227 saline formation for which previous utilization has been minimal or non-existent and consequently no 228 wells or previous production history are available. 

229 Injection and production are simulated for a period of 30 years. Operational outcomes (1)-(3) (defined at 230 the beginning of this section) for the CO2 storage simulation using 𝑘𝑡𝑟𝑢𝑒 represent the goal of the 231 developed predictive methods and thus also serve as a yardstick to quantitatively assess the efficacy of 232 those methods. In all figures presented, operational outcomes obtained using 𝑘𝑡𝑟𝑢𝑒 are denoted by 233 thick red lines. 

234 In a practical CO2 injection operation, some limited information about 𝑘𝑓𝑖𝑒𝑙𝑑 can be gathered; we 235 assume the same information is available for 𝑘𝑡𝑟𝑢𝑒 : 

- 236 1. Point measurements of permeability at the locations where injection ( 𝑘0 ) and the four brine 237 production wells ( 𝑘1 , 𝑘2 , 𝑘3 and 𝑘4 ) intersect the storage formation. These measurements may be 238 derived from either experiments on extracted core or by field-testing of the well, e.g. a push-pull 239 pump test. In practice, they would be associated with an error; however, this is not accounted for in 240 the methodology developed here. Furthermore, it is important to note that permeability 241 observations depend on the scale of measurement; here, it is assumed that measurement of 𝑘0, … 𝑘4 242 is appropriate for the lateral scale of the grid-block to which it is assigned (~25 × 25 m). For the 243 permeability field, 𝑘𝑡𝑟𝑢𝑒 , the five point measurements are given in Figure 1A. 

- 244 2. The average permeability between two wells can be estimated by conducting an interference test. In 245 this case, each brine production well would be produced at a constant rate and the pressure drop at 246 the shut-in, central injection well recorded with time. Once again, measurement error associated 247 with this test is not accounted for in the developed methods. 

- 248 3. The mean permeability, 𝑘̅𝑡𝑟𝑢𝑒 , of the formation (or, rather, the area enclosed by the five-spot 249 pattern) can be estimated by combining the four interference tests, any other interference tests 250 between production wells, and the five point permeability measurements. This measure is used to 251 center the log-normal permeability distribution given in Figure 1B and any subsequent realizations. 252 Any discrepancy between the measured and actual 𝑘̅𝑡𝑟𝑢𝑒 is not accounted for in the developed 253 methods. 

254 There is one final parameter that affects operational outcomes of interest but is at present only weakly 255 constrained: the standard deviation of the log-normal permeability distribution, 𝜎𝑡𝑟𝑢𝑒 (Figure 1B). As an 256 approximation to 𝜎𝑡𝑟𝑢𝑒 , we have the sample standard deviation, 𝜎𝑠𝑚𝑝𝑙 for the permeability point 257 measurements 𝑘0, … 𝑘4 . 

258 In the limit that 𝜎𝑡𝑟𝑢𝑒 =0, the log-normal permeability distribution (Figure 1B) becomes a delta function 259 and the permeability field is homogeneous; under such circumstances, operational outcomes can be 260 calculated with a high degree of confidence. However, it is generally recognized that formations are 261 heterogeneous and that 𝜎𝑡𝑟𝑢𝑒 ≠0 . One consequence of this is the possible existence of fast pathways, 262 e.g., between the injection well and brine production well 1 in Figure 1A. Importantly, the magnitude of 263 𝜎𝑡𝑟𝑢𝑒 tells us how fast these fast pathways potentially are. 

264 

## **3.1 Numerical model** 

265 Computer simulations presented here are performed using the Finite Element Heat and Mass transfer 266 code [ _Zyvoloski_ , 2007]. FEHM uses a control volume approach to solve heat and mass flow of multi267 phase mixtures of water and CO2, and provides a variety of sub-models for specifying relative 268 permeability and complex material property distributions. It also uses finite elements to solve for 269 mechanical deformations coupled to the flow solution; however this capability is not required here. 

270 The model comprises three layers: a single, horizontal storage formation, bounded above and below by 271 impermeable aquitards ( 𝑘 =10<sup>-19</sup> m<sup>2</sup> ). The storage formation comprises a single layer of grid nodes with 272 vertical thickness 20 m; therefore buoyancy effects and vertical stratification between the CO2 and brine 273 are neglected. This allows us to maximize horizontal resolution, which is important for capturing 274 permeability heterogeneity at different length scales as well as lateral plume migration – the two issues 275 of primary interest. We use a linear relative permeability relationship with zero capillary pressure, 276 consistent with analytical modeling studies for CO2 plume evolution (e.g., Nordbotten et al., 2005). This 277 simplification facilitates rapid forward modeling and multiple model realizations; however, such 278 assumptions may not be appropriate in all situations (e.g., Court et al., 2012). In the methodology 279 developed here, use of more complex physical models is not discouraged, although consideration of 280 performance trade-offs is a necessity when performing multiple model realizations. While in actuality 281 brine is here simulated as pure water, the term is retained for sake of convention. Model results are not 282 expected to be significantly different for higher density brines. 

295 296 297 

283 284 285 286 287 288 289 290 291 292 293 

Horizontally, the model grid spans 10 × 10 km<sup>2</sup> and contains a 2 × 2 km<sup>2</sup> area of high resolution (24 × 24 m<sup>2</sup> ) at its center. Initial formation conditions are 30 MPa and 100°C. At the lateral boundaries, pressures are maintained at initial conditions with any inflow occurring at 100°C. Both CO2 injection and brine production are modeled as fixed pressure sources either 5 MPa above or below ambient pressure, respectively. In a practical situation, it may be required that the mass flow rate of the source, rather than pressure, be fixed (e.g., a fixed CO2 stream from an emitter); however, under some operational circumstances fixed pressure injection may be unavoidable, such as when pumps operate at their maximum pressure due to pressure increase/drawdown around the well or when regulatory considerations impose a safe operating limit for pressures within the reservoir. In any case, for the simulations presented here, injection and production rates rapidly stabilize to near constant mass flow rates over a short period of time (< 1 year) compared to the simulation length (30 years). 

294 

298 

Simulation of CO2 injection and brine production for the permeability field 𝑘𝑡𝑟𝑢𝑒 provides the set of true operational outcomes to be used in evaluating the predictive methods of this study. In addition, we perform a simulation for the equivalent homogeneous formation ( 𝑘= 𝑘̅𝑡𝑟𝑢𝑒 ) and for 660 different permeability realizations (denoted 𝑘𝑟𝑙𝑧,𝑖 , where 𝑖= 1, … 660 ) that are, to greater or lesser extents, approximate representations of 𝑘𝑡𝑟𝑢𝑒 . 

299 

300 301 

302 

303 

304 

305 

## **3.2 Bayesian constraint of heterogeneity** 

As discussed previously, one challenge in devising representations of 𝑘𝑡𝑟𝑢𝑒 is the poor constraint on the degree of heterogeneity, as parameterized by the population standard deviation, 𝜎𝑡𝑟𝑢𝑒 . The sample standard deviation, 𝜎𝑠𝑚𝑝𝑙 gives us some information about 𝜎𝑡𝑟𝑢𝑒 ; however, before obtaining the permeability measurements 𝑘0, … 𝑘4 from which 𝜎𝑠𝑚𝑝𝑙 is derived, our expectations about 𝜎𝑡𝑟𝑢𝑒 must necessarily be constrained by prior experience, perhaps at different sites or for different formations or lithotypes. These expectations are expressed probabilistically as the Bayesian prior. 

306 The Bayesian prior used in this study is a transformed gamma function (Figure 3A; see also Appendix A). 307 It reflects an expectation that permeability probably varies by “some orders of magnitude” and the 308 likelihood of a totally homogeneous formation is vanishingly small. The relatively wide nature of this 309 prior reflects our ignorance of the likely value of 𝜎𝑡𝑟𝑢𝑒 ; however, as discussed by Gauch (2003), the 310 “ignorance” prior is a versatile choice for calculating a Bayesian posterior. 

311 While a uniform distribution is often used as an ignorant prior due to the fact that it is the maximum 312 entropy distribution with support on a finite interval, we have elected to use a gamma distribution 313 instead. Like the uniform distribution, the gamma distribution can also be characterized as a maximum 314 entropy distribution (Park and Bera, 2009). In addition to the maximum entropy property, the gamma 315 distribution was chosen for two reasons: (1) since we cannot provide reliable upper or lower bounds for 316 the degree of heterogeneity, the prior distribution should have positive likelihood for any 𝜎𝑡𝑟𝑢𝑒 > 0 ; and 317 (2) since there will certainly be some heterogeneity, the likelihood for 𝜎𝑡𝑟𝑢𝑒 = 0 should be zero. 

318 From the five permeability measurements 𝑘0, … 𝑘4 we obtain a sample standard deviation, 𝜎𝑠𝑚𝑝𝑙 , for 319 𝑘𝑡𝑟𝑢𝑒 of 0.73, which is less than the true (but, in practice, unknown) population standard deviation of 320 0.91. Nevertheless, this information can be used to update our prior expectations (the Bayesian prior) 

321 about the distribution of 𝜎𝑡𝑟𝑢𝑒 . The resulting distribution, expressed now as a histogram of samples, is 322 the Bayesian posterior (Figure 3A); calculation of the Bayesian posterior is detailed in Appendix A. 323 Variances for the prior and posterior distributions are 0.69 and 0.18, respectively. 

324 There are several notable features of the Bayesian posterior: (1) the central moment is much lower than 325 that of the prior; essentially, our observation of such a low value for 𝜎𝑠𝑚𝑝𝑙 is not consistent with our 326 prior expectation of high heterogeneity; (2) the width of the posterior is somewhat less than that of the 327 prior, which reflects less uncertainty – less “ignorance” – due to the incorporation of observational data; 328 (3) finally, our prior conviction that 𝑘𝑡𝑟𝑢𝑒 is very unlikely to be homogeneous remains intact; it is 329 reflected in the posterior as low probability at 𝜎𝑡𝑟𝑢𝑒 =0. 

330 To highlight the value of a wide “ignorance” prior, Figure 3B plots the posterior incorporating the same 331 Bayesian analysis of 𝑘0, … 𝑘4 with a prior that reflects a strongly held, but incorrect, belief about the 332 likely range of 𝜎𝑡𝑟𝑢𝑒 . This “incorrect” prior is relatively narrow and centered on a value of 1.8, 333 approximately twice the value of 𝜎𝑡𝑟𝑢𝑒 . Displacement of the calculated posterior toward 𝜎𝑠𝑚𝑝𝑙 is very 334 small, largely due to the strength of the prior belief. The variance of both prior and posterior 335 distributions is 0.041. 

## 336 **3.3 Constructing permeability realizations** 

337 We wish to construct a series of representations, 𝑘𝑟𝑙𝑧,𝑖 , of the underlying, but unknown, permeability 338 distribution, 𝑘𝑡𝑟𝑢𝑒 , that incorporates all that is assumed, known and inferred about 𝑘𝑡𝑟𝑢𝑒 . This includes 339 the three assumptions made in Section 2.1 ( 𝐿𝑚𝑎𝑥 > 3 km, log-normality of 𝑘𝑡𝑟𝑢𝑒 , and 𝛽 = 1.4), the 340 known permeabilities 𝑘0, … 𝑘4 at the locations of the wells (Figure 1A), and the inferred probability 341 distribution of 𝜎𝑡𝑟𝑢𝑒 (Figure 3A). Each of these realizations is constructed using Fourier transformations 342 and a technique called random-bridging (Benson et al., 2013). The method generates spatially correlated 343 fields ( 𝛽= 1.4 ) conditioned on the known geospatial permeability data ( 𝑘0, … 𝑘4 ); each realization has a 344 log-normal permeability distribution whose center is fixed at log(𝑘̅𝑡𝑟𝑢𝑒) = -15 and whose standard 345 deviation is randomly sampled from either the prior (324 samples) or posterior (336 samples). The 346 properties of these realizations are summarized in Figure 3A, C-E. For each realization, the CO2 storage 347 simulation described in Section 3.1 was performed. 

## 348 **3.4 Interference testing** 

349 Knowledge of permeability at two locations does not necessarily provide a good indication of the 350 permeability structure between those two points. For instance, production wells 1 and 2 (Figure 1A) 351 sample areas of nearly equal permeability ( log(𝑘1) = -13.6 and log(𝑘2) = -13.7) and yet the connectivity 352 of each to injection well 0 is substantially different (well 1 has much greater connectivity). Nevertheless, 353 an indication of the connectedness between wells can be derived from an interference test, and this 354 information used to improve prediction of operational outcomes. 

355 An interference test is performed by shutting in one well (the observation well) and producing another 356 well at a fixed flow rate (Theis, 1935). Given information about flow rates, separation between the wells, 357 pumping time and other aquifer properties, the average permeability sampled by flow between the 

358 wells can be calculated from the pressure drop at the observation well. However, for the purposes of 359 this study, the pressure drop profile with time will be sufficient. 

360 In this study, we take pressure responses of simulated interference tests for the realizations 𝑘𝑟𝑙𝑧,𝑖 and 361 compare these against those obtained from 𝑘𝑡𝑟𝑢𝑒 . Based on the goodness-of-fit, a weight is assigned to 362 the realization representing the degree of confidence its predictions should be assigned. In this case, we 363 are attempting to match the data using a random permeability field, albeit informed by previous point 364 permeability measurements 𝑘0, … 𝑘4 through use of a Bayesian posterior. 

365 An alternative approach in reservoir simulation is to insert geological features, e.g., high conductivity 366 fractures, flow barriers, and to calibrate the permeability of these features to achieve a good match with 367 the interference test data. The inclusion of such features must be motivated by geological or geophysical 368 observation and thus this approach involves a degree of interpretation. Other approaches for 369 incorporating pressure measurements into conditioned permeability realizations might also be applied. 370 For instance, the use of an Ensemble Kalman Filter allows sequential observations of pressure to be used 371 to refine a heterogeneous permeability field (Lu et al., 2008). A comparative study of these methods is 372 not the objective of this paper, although a comprehensive site analysis would benefit from multiple 373 perspectives on uncertainty quantification. 

374 For the five-spot injection/production operation considered here, the connectivities of interest are the 375 outer brine production wells to the central injection well. Four 100-day interference tests were 376 simulated, using 𝑘𝑡𝑟𝑢𝑒 , by producing brine at each of the four production wells and monitoring the 377 pressure response at the shut-in injection well (Figure 1D). The relative magnitude of the plotted 378 pressure response for each pair qualitatively matches expected differences in connectivity based on 379 inspection of 𝑘𝑡𝑟𝑢𝑒 in Figure 1A. For instance, wells 1 and 2 are, respectively, well-connected and poorly380 connected as indicated by large and small pressure responses, respectively. 

381 The length of the interference test was necessary to produce a response at the observation well; for 382 closer spaced wells or more permeable formations, shorter tests would suffice. Interference tests can be 383 performed concurrently (Matthews and Russell, 1967), although this is a needless complication for this 384 study. 

385 

## **3.4.1 Weighting of interference tests** 

386 For each of the 324 prior and 336 posterior permeability realizations, an interference test for each of the 387 four production wells was simulated. Goodness of fit between these simulated pressure drops and the 388 true pressure drop (which, here, also happens to be simulated) tells us how good a representation of 389 reality that particular realization is. Goodness of fit can be assessed on the basis of one interference test, 390 or some average of the suite of four. 

391 To quantify the misfit between two profiles, here we use the integrated difference between the profiles 392 normalized by the integral of the observed pressure drop profile, 𝑃𝑜𝑏𝑠 , e.g., for the 𝑖<sup>𝑡ℎ</sup> permeability 393 realization, and the 𝑗<sup>𝑡ℎ</sup> production well, 

394 

- 395 where if Δ𝑗𝑖 falls outside the range [-1, 1] it is shifted to the nearer of these two values. For example, if 𝑗 

- 396 𝑃𝑟𝑙𝑧,𝑖 overpredicts the true pressure drop, 𝑃𝑜𝑏𝑠𝑗 , then Δ𝑗𝑖 > 0 , and vice versa. Weighting functions can be 397 derived from the Δ𝑗𝑖 ; the three used here are 

- 398 1. 𝑤𝑖𝑗 = (1 −|Δ𝑗𝑖 |)𝑛 – this weight reflects the goodness of fit for the 𝑗𝑡ℎ production well but, in taking 399 an absolute value, it makes no distinction between over or underprediction of the pressure profile. 400 The exponent 𝑛 is a parameter that, when set > 1, assigns comparatively less weight to realizations 401 further from reality. 

- 402 

403 

   - 1 𝑗 

   - 2. 𝑊𝑖 = 4 ∑𝑤𝑗 𝑖 – this weight reflects the average goodness of fit for the realization, based all four production wells and again makes no distinction between over or underprediction. 

- 404 3. 𝜔𝑖𝑗 = (1 −Δ𝑗𝑖 )𝑛 – this directional weight is used to either increase or decrease the predicted 𝑗 

- 405 production rate of the 𝑗<sup>𝑡ℎ</sup> well. For example, if 𝑃𝑟𝑙𝑧,𝑖 overpredicts 𝑃𝑜𝑏𝑠𝑗 , then 0 < 𝜔𝑖𝑗 < 1 indicating 406 production rates from this well (brine or CO2) may also overpredict. Whereas the original simulated 𝑗 

- 407 brine production rate is 𝑄𝑖 = ∑𝑄𝑗 𝑖 (total from four wells), the modified brine production rate 𝑗 𝑗 

- 408 becomes 𝑄𝑖′ = 4 ∑𝜔𝑗 𝑖𝑗𝑄𝑖 / ∑𝜔𝑗 𝑖 . 

409 The results presented here use an exponent, 𝑛 = 5, which yielded a reasonable uncertainty reduction 410 (see Section 4.3). Other values for 𝑛 or alternative weighting methods may yield improved predictions. 411 Following the Generalized Likelihood Uncertainty Estimation (GLUE) method of Beven and Binley (1992), 412 the weighting terms calculated here are later applied to the ensemble of model predictions to yield a 413 weighted set of modeled operational outcomes, from which uncertainty bounds are extracted. As a final 414 note, due to measurement error, 𝑃𝑜𝑏𝑠 is an uncertain estimate of the true pressure drop, 𝑃𝑡𝑟𝑢𝑒 . 415 However, we have elected not to account for sources of measurement error in the current treatment. 

416 

# **4 Discussion of results** 

417 In this section, we discuss numerical simulation results and two methods used to improve the predictive 418 accuracy of these results. Attention is focused on the operational outcomes defined in Section 3: (1) CO2 419 retention and brine production rates; (2) timing of CO2 breakthrough at production wells; and (3) rate of 420 CO2 co-production after breakthrough. Improved prediction of these outcomes is gained through the 421 incorporation of permeability data into a Bayesian posterior (Section 4.2) and use of interference tests 422 to weight the relative likelihood of each realization (Section 4.3). 

423 

## **4.1 Effects of heterogeneity** 

424 It is useful to contrast forward models of the CO2 injection operation under assumptions of permeability 425 homogeneity versus the true distribution ( 𝑘𝑡𝑟𝑢𝑒 ). For both cases, Figure 2 summarizes for a 30 year 426 simulation, retention and production curves of interest as well as the position of the plume at ~5 and 20 427 years after injection has commenced. 

- 428 Although the injection well samples a region with permeability very similar to the mean – log(𝑘0) =-15.1 429 whereas log(𝑘̅𝑡𝑟𝑢𝑒) =-15 – much of the region between brine wells 1 and 3 has above average 

430 permeability. As a consequence, injection and production flow rates and the rate of CO2 retention within 431 the storage formation (Figure 2A) is appreciably higher that that predicted by a homogeneous model. At 432 5.7 years, the areal extent of the plume is greater in the heterogeneous case and is laterally biased in 433 the direction of wells 1 and 3 (Figure 2D). The fast pathways conducting the plume in these directions 434 are responsible for CO2 breakthrough, first at well 1 (~9 years) and then at well 3 (~11 years); in contrast, 435 in the homogeneous case, no breakthrough occurs at any of the wells at the end of the 30 years 436 simulation. This result supports our contention that fast pathways pose a risk to the brine production 437 side of a CO2 injection operation. The rate of CO2 co-production increases linearly after breakthrough to 438 nearly equal the CO2 retention rate at the end of the 30 year simulation. 

439 

## **4.2 Predictive improvements using Bayesian posterior** 

440 The purpose of the Bayesian analysis conducted in Section 3.2 is to constrain the degree of permeability 441 heterogeneity, parameterized by the distribution’s standard deviation, 𝜎 , that is likely to be 442 encountered in 𝑘𝑟𝑙𝑧,𝑖 during the CO2 storage operation. To quantify any reductions in predictive 443 uncertainty this step confers, we performed the CO2 storage simulation for 324 permeability realizations 444 with 𝜎 drawn from the prior and 336 simulations with 𝜎 drawn from the posterior (Figure 3A). For both 445 the prior and posterior sample sets, ensembles of predicted operational outcomes are summarized in 446 Figure 4. 

447 For predictions of the rate of CO2 retention or CO2/brine production, one useful output is the envelope 448 that encloses a given percentage of ensemble realizations (here we use 90%). Ideally, this envelope will 449 be accurate enough to contain the true operational outcome while at the same time narrow enough 450 that a prohibitively large uncertainty is not implied. Under this definition, use of a Bayesian posterior has 451 been advantageous if the size of the predictive envelope is reduced (compared to the prior) while at the 452 same time still containing the true outcome. 

- 453 Prior and posterior predictive envelopes for the long-term, stabilized CO2 retention rate are presented in 454 Figure 4A. By the previously defined measure, predictive uncertainty has been improved by the Bayesian 455 posterior; the envelope area has been reduced by 40% while still containing the true CO2 retention rate 456 near the lower margin. Envelope reduction occurs by excluding the very low and very high injection 457 rates admitted by a Bayesian prior that permits many orders of magnitude variability in permeability, 458 both very high and very low. 

- 459 Results are similar for the brine production rate (Figure 4B) except in this case the true brine production 460 rate lies very near the bottom posterior prediction envelope. Envelope reduction is still achieved (by 461 45%); however, unrealistically high production rates are suggested. 

462 Finally, the CO2 co-production envelopes exhibit a similar behavior to the CO2 retention envelopes, with 463 a 72% reduction in uncertainty and the true outcome contained near the bottom of the posterior 464 envelope. Reduction here has largely been achieved by excluding permeability realizations that produce 465 very rapid breakthrough times and therefore very high CO2 co-production. 

- 466 For all three of the previously discussed operational outcomes (Figure 4A-C), the true outcome was 467 contained within the prediction envelope but was somewhat less than the median. Because these three 

- 468 outcomes are not independent, we cannot establish whether this implies systematic overprediction, a 469 bias toward heterogeneity in the prior, or is simply the result of random chance. Nevertheless, in the 470 next section, we will present a second method for envelope reduction, which, as a second consequence, 471 also displaces the envelopes so as to more centrally straddle the true outcome. 

- 472 Figure 4D-G shows histograms of CO2 breakthrough times at each of the four brine production wells. 473 Compared with the true breakthrough time at each, the predictions, both prior and posterior, are of 474 varying quality. Individual discussions for the four wells are given below: 

- 475 1. The prior distribution of breakthrough at well 1 comprises a large number of very short and very long 476 times. The median breakthrough corresponds well with the true breakthrough at ~8 years; this 477 successful prediction is probably due to random chance. The posterior distribution shows substantial 478 reduction at both tails and is more centrally distributed about the true breakthrough. 

- 479 2. Both prior and posterior distributions for well 2 are extremely similar to those for well 1; however, in 480 this situation, the true breakthrough (>30 years) is poorly predicted. The similarity in distributions 481 occurs because the permeabilities at wells 1 and 2 ( 𝑘1 and 𝑘2 ) with which both prior and posterior 482 realizations are conditioned, are nearly identical (-13.6 and -13.7, respectively). The method has no 483 information about permeability between the wells which it might use to distinguish these two cases; 484 this deficiency will be addressed in the next section with interference testing. 

- 485 3. Both prior and posterior distributions for well 3 have a heavy tail at breakthrough > 30 years; the true 486 value is much earlier, at ~ 11 years. The median prediction is somewhat improved for the posterior, 487 but at 20 years still substantially overpredicts the true breakthrough time. 

- 488 4. Both prior and posteriors for well 4 agree with the true prediction that CO2 breakthrough will occur 489 after more than 30 years. 

490 The main consequence of using an updated posterior for predicting CO2 breakthrough times is to 491 eliminate extreme values associated with very fast and very slow pathways. While reducing uncertainty, 492 this does not appear to confer a consistent improvement in accuracy. 

## 493 **4.3 Predictive improvements using interference tests** 

494 Section 3.4 discussed how simulated interference tests could be used to distinguish which realizations, 495 𝑘𝑟𝑙𝑧,𝑖 , are a better approximation to 𝑘𝑡𝑟𝑢𝑒 than others. Figure 5A plots the simulated pressure response 496 at the observation well for the 336 posterior realizations; the goodness of fit between these curves and 497 the true pressure response (red line) is quantified by the first weighting function described in Section 498 3.4.1. For wells 1, 3 and 4, these weights, when plotted against the corresponding CO2 breakthrough 499 time at the well (Figure 5B), tend to cluster around the true breakthrough time. Thus, the higher the 500 weight, the more likely the predicted breakthrough time for that realization is to be close to the true 501 breakthrough time. 

- 502 Realization weights are combined with the breakthrough time frequencies in Figure 4D-G to create a 503 weighted histogram of per-well breakthrough times, as described in Beven and Binley (1992). The height 504 of each bin is no longer the total number of realizations in that bin, but now the sum of the weights of 505 those realizations. The weighted histogram is scaled to have the same area as the unweighted version 

- 506 and plotted below it for comparison (Figure 5C). Individual discussions for the four wells are given 507 below: 

- 508 1. The median breakthrough time prediction for well 1 is not significantly altered for the weighted 509 distribution; it remains a good estimate of the true breakthrough time. The distribution has been 510 displaced to higher values and is better centered on the median. The range of breakthrough times, 511 i.e., the uncertainty on this prediction, has been reduced (Figure 6). 

- 512 2. The unweighted distribution for well 2 was similar to that for well 1, despite lower connectivity with 513 the injection well. The weighted distribution has no clear peak. The median prediction has been 514 increased from 8 to 16 years but still falls well short of the true value (> 30 years ). Overall this is an 515 improvement. 

- 516 3. The median breakthrough time prediction for well 3 (10 years) has been significantly reduced for the 517 weighted distribution; it is now quite a good estimate of the true breakthrough time (11 years). As for 518 well 1, the uncertainty on this prediction has also been reduced. 

- 519 4. The median prediction for well 4 remains in excess of 30 years and a good estimate of the true value. 520 Here too, uncertainty has been reduced. 

521 In general, weighting of the breakthrough time distributions against the simulated interference tests has 522 yielded positive gains both for predictive accuracy and uncertainty. However, the method is not perfect, 523 still failing to provide a good estimate for breakthrough at well 2. 

524 Interference test weights have been used to further improve the prediction envelope for CO2 retention. 525 The second weighting function described in Section 3.4.1 is used here. The original envelope bounded 526 the 5<sup>th</sup> and 95<sup>th</sup> percentile outcomes after simulation of 336 posterior realizations (Figure 4A). The new 527 envelope is calculated from an expanded simulation set constructed by duplicating the posterior 528 simulation results in proportion to their relative weight, e.g., a realization with weight of 0.5 has five 529 times as many duplicates as a realization with weight 0.1. The new envelope is once more bounded by 530 5<sup>th</sup> and 95<sup>th</sup> percentile outcomes (Figure 5D). 

531 Uncertainty reduction of the CO2 retention rate is relatively small; an 8% decrease in envelope area. The 532 true retention rate remains within the prediction envelope but is still at the low prediction end. These 533 modest gains are probably due to the necessary averaging of interference tests for this particular 534 operational outcome. Unlike brine production or CO2 co-production, CO2 retention cannot be 535 deconstructed into components attributable to individual production wells with each then weighted 536 accordingly. 

537 Comparatively greater improvements to the prediction envelopes for brine production and CO2 co538 production are achieved by considering the interference weights for individual wells. Here we make use 539 of the third, directional weighting function discussed in Section 3.4.1. For a given realization, the brine 540 or CO2 streams from each well are multiplied by that well’s weighting term (restricted within a range of 541 [0.2, 5]); the sum of the four streams is the new estimate of total brine or CO2 production. These 542 estimates are compiled for the 336 posterior realizations and the 5<sup>th</sup> and 95<sup>th</sup> percentile outcomes used 543 to construct the prediction envelope (Figure 5E and F). 

544 Substantial gains in both the accuracy and uncertainty of the predicted brine production are achieved by 545 this method. The interference weighted envelope is 38% smaller than the unweighted envelope, while 546 the center has been translated downward to better contain the true brine production profile. Similar 547 gains are made in the prediction of CO2 co-production, with envelope reduction of 69%. 

## 548 **4.4 Comparison of median predictions and true flow rates** 

549 For the particular reality investigated here ( 𝑘𝑡𝑟𝑢𝑒 ), median predictions of CO2 injection, brine production 550 and CO2 co-production – whether using prior, posterior or weighted posterior distributions – generally 551 overestimate the actual quantities. Stated differently, true flow rates (red profiles in Figures 4A-C and 552 5D-F) tend to sit in the lower half of prediction envelopes. 

553 This occurs because the mean permeability of the ensemble, 𝑘𝑟𝑙𝑧,𝑖 is slightly higher than the true mean 554 permeability, log(𝑘̅𝑡𝑟𝑢𝑒) = −15 ; this is evident in Figure 3C and D, where the true distribution (red 555 profile) is displaced slightly to the left of the ensemble. While log(𝑘̅𝑡𝑟𝑢𝑒) was used in the construction of 556 permeability realizations, 𝑘𝑟𝑙𝑧,𝑖 , the conditioning algorithm introduces a bias towards the mean of the 557 conditioning values, 𝑘0, … 𝑘4 , which in this case, at −14.5 , is slightly higher than log(𝑘̅𝑡𝑟𝑢𝑒) . 

558 

# **5 Conclusion** 

559 Spatial heterogeneity and variability across many orders of magnitude are two long-recognized 560 challenges for characterizing and simulating subsurface permeability. For the geological CO2 storage 561 scenario considered here, heterogeneity results in uncertainty of the productivity of drilled wells and 562 the potential for rapid breakthrough of CO2 at brine production wells. The objective of this study was to 563 reduce this uncertainty by using information plausibly obtainable from a given site to constrain the 564 heterogeneity. 

565 Our approach involved simulating CO2 injection/brine production for many different realizations of a 566 heterogeneous permeability field and taking the ensemble result as an uncertain bracket for the true 567 outcome. We incorporated two sources of data – point permeability measurements, and interference 568 tests between wells – in two different methods to reduce the predictive envelopes of CO2 retention, 569 brine production and CO2 co-production rates, and CO2 breakthrough at production wells (Figure 6). 570 These methods were applied to a synthetic “true” permeability realization – representing a hypothetical 571 sequestration site – so that predictive envelopes could be compared against actual outcomes. 

- 572 In most cases, uncertainty associated with predictions was reduced by incorporating data – this is 573 reflected as a general trend toward more compact box-plots in Figure 6. Bayesian analysis of point 574 permeability measurements was used to constrain the magnitude of permeability heterogeneity, as 575 parameterized by the population standard deviation, 𝜎𝑡𝑟𝑢𝑒 . Compared to an “ignorant” prior that 576 admitted a wide spectrum of possibilities for 𝜎𝑡𝑟𝑢𝑒 , uncertainty envelopes for CO2 retention, and brine 577 and CO2 production are between 40 and 72% smaller due largely to the rejection of very high or very low 578 permeability realizations. Improvement of predicted CO2 breakthrough time at each of the four 579 production wells was mixed (Figure 6B); this is because our Bayesian posterior was informed by 580 permeability measurements at wells, but not between them. 

581 Interference tests, which interrogate the permeability distribution between wells, were simulated for 582 each of the permeability realizations. Various schemes to weight the realizations based on their 583 correspondence with the real interference test provided further uncertainty reduction. Prediction 584 envelopes for brine and CO2 co-production rates were reduced 38 and 69%, respectively. For CO2 585 breakthrough, in three of the four cases, prediction envelopes were narrower and included the true CO2 586 breakthrough. However, for well 2, which happened to sample a small permeable zone in a larger 587 impermeable region, breakthrough continued to escape prediction; clearly the developed methods 588 require further refinement to improve predictions of such heterogeneity scenarios. 

589 In demonstrating the value of data in reducing uncertainty, our approach also emphasizes the value of 590 ongoing data collection: in pre-site characterization, during the injection phase, and during post-site 591 monitoring. As new wells are drilled, additional permeability measurements acquired and interference 592 tests performed, the analysis described here can be updated to further reduce the width of prediction 593 envelopes. Dynamic uncertainty reduction through assimilation of new data is central to this Bayesian 594 approach. 

595 As a final note, it is important to stress that the approach taken here is independent of the conceptual 596 and model assumption made either in constructing permeability realizations or performing forward 597 simulations. Many of these assumptions may be regarded as controversial, e.g., long-range spatial 598 correlation at least larger than the domain size, neglect of lateral plume migration. However, the intent 599 of this study is not to wade into the debate over which models are the best representation of reality; 600 indeed, the more-appropriate interpretation at one site may be less accurate than a competing 601 interpretation at a different one. In the situation where several models are deemed plausible, a full and 602 thorough accounting would require the simulation procedure be repeated for each assumption set with 603 the final prediction envelope some amalgamation of all possibilities. Alternatively, future studies might 604 investigate the error introduced when constructing the realizations, 𝑘𝑟𝑙𝑧,𝑖 , due to inaccurate 605 assumptions regarding 𝑘𝑡𝑟𝑢𝑒 . 

# 606 **Acknowledgements** 

607 The authors thank Dave Benson for supplying the code to generate conditioned permeability 608 realizations. This work benefited from the comments of three anonymous reviewers. The work was 609 performed as part of the National Risk Assessment Partnership (NRAP) project. NRAP is supported by US 610 Department of Energy through its Cross-Cutting Research Effort and is managed by National Energy 611 Technology Laboratory (NETL). 

612 

# 613 **Figures and figure captions** 

614 

615 **Figure 1: Summary of the true permeability realization,** 𝒌𝒕𝒓𝒖𝒆 **. A. Log-transformed permeability and porosity fields contoured** 616 **in the horizontal plane. The positions of the injection (well 0) and four production wells (1-4) are indicated by downward and** 617 **upward pointing triangles, respectively. The permeability at the location of each of these wells is indicated. The** 618 **computational mesh is overlaid in grey. B. Histogram of all permeability values in** 𝒌𝒕𝒓𝒖𝒆 **. The standard deviation of this** 619 **distribution,** 𝝈𝒕𝒓𝒖𝒆 **, is 0.91. C. Power spectrum showing the spatial correlation of** 𝒌𝒕𝒓𝒖𝒆. **The spectral slope,** 𝜷 **, is 1.4. D.** 620 **Pressure decline at the shut-in injection well for a 100-day interference test simulated for each of the injection/production** 621 **well pairs in A. The produced flow rate,** 𝒒 **, at each production well is given in the title.** 

622 

623 **Figure 2: Comparison of CO2 injection/brine production simulations using homogeneous (** 𝒌= 𝒌̅𝒕𝒓𝒖𝒆 **, red dashed lines) vs.** 624 **heterogeneous (** 𝒌= 𝒌𝒕𝒓𝒖𝒆 **, red solid lines) permeability distributions. A. CO2 retention rate (injection less co-production)** 625 **over time. B. Total brine production rate from wells 1-4. C. Total CO2 co-production rate at brine wells. D. Distribution of CO2** 626 **plume (by saturation) after 5.7 years of injection into the heterogeneous formation. Red solid and dashed lines define the** 627 **plume extent for heterogeneous and homogeneous simulations, respectively. Injection and production wells are indicated by** 628 **downward and upward pointing triangles respectively. E. Heterogeneous permeability distribution, from Figure 1A, for** 629 **reference. F. As for D, but after 20.7 years of CO2 injection.** 

630 

631 

632 

633 634 635 636 637 638 639 640 

**Figure 3: Summary of permeability realizations drawn from the prior (grey, black) and posterior distributions (green). A. The “ignorance” prior (black line) is a relatively wide, transformed gamma function (see Appendix A) from which 324 samples have been selected (grey histogram). The histogram of 336 posterior samples (green) has been displaced toward the measured sample standard deviation,** 𝝈𝒔𝒎𝒑𝒍 **(red dashed line), which is an approximation of the true standard deviation,** 𝝈𝒕𝒓𝒖𝒆 **(red solid line). B. As for A, but using a different “incorrect” prior distribution. C. Stacked outlines of permeability histograms for the prior samples in A, with the true histogram (Figure 1B) overlain as a solid red line. D. As for C, but for the posterior samples in A. E. Stacked power spectra for the posterior samples in A. The mean slope,** 𝒎̅ **, of these spectra is -1.4.** 

641 

642 

643 **Figure 4: Summary of predicted operational outcomes for prior (grey) and posterior (green) realizations compared to “true”** 644 **outcomes (red). A. CO2 retention rate (injection less co-production) over time. The solid grey and green areas enclose 90%** 645 **prediction intervals for the prior and posterior realizations with corresponding median profiles given by dashed and solid** 646 **black lines, respectively. B. Total brine production rate from wells 1-4. C. Total CO2 co-production rate at brine wells. D-G.** 647 **Histograms of CO2 breakthrough time at each of the four production wells for the prior (grey) and posterior (green)** 648 **realizations. CO2 breakthrough is defined as the time at which CO2 co-production exceeds 2% (by mass). The breakthrough** 649 **time for** 𝒌𝒕𝒓𝒖𝒆 **is indicated in red and median values for the prior and posterior by dashed and solid lines, respectively. Note,** 650 **in (G), the true and prior/posterior median values are 30 years, although only the true value is shown.** 

651 

652 

653 **Figure 5: Effect on predicted operational outcomes by weighting against simulated interference tests. A. Stacked pressure** 654 **responses for simulated interference tests at each production well for 336 posterior realizations. The true pressure response** 655 **is indicated by a solid red line. B. For each well, the realization weight based on goodness of fit between simulated and** 656 **“true” interference test plotted against the corresponding CO2 breakthrough time. C. Histograms of CO2 breakthrough time** 657 **at each of the four production wells for 336 posterior realizations and the same data weighted by the values in B. The true** 658 **breakthrough time is given by a red line, while median values for the unweighted and weighted histograms are given by** 659 **dashed and solid black lines respectively. D. Envelopes for predicted CO2 retention (5-95 percentile) from 336 posterior** 660 **realizations, unweighted (light green) and weighted (dark green) by realization average of values in B. Medians for the** 661 **unweighted and weighted distributions are given by dashed and solid black lines respectively. E. As for D, but for brine** 662 **production. The weighting function modifies the component brine stream from each well according to method described in** 663 **Section 3.4.1. F. As for E, but for CO2 co-production.** 

664 

665 **Figure 6: Summary of (A) flow and (B) breakthrough predictions for the prior (grey), posterior (light green), and posterior** 666 **distribution weighted by the goodness-of-fit of simulated interference tests (dark green). True outcomes are indicated by a** 667 **solid red line. For the three flow outcomes (CO2 retention, brine production and CO2 co-production), the predictions for 5** 668 **and 20 years after the start of injection are shown. Percentile demarcations common to all box-plots are indicated on the** 669 **prior distribution for 5 year CO2 retention rate.** 

670 

671 **Appendix A** 

672 The probability density/likelihood function for a fractional Brownian field is 

673 

674 where 𝒚= (𝑦0, 𝑦1, … , 𝑦𝑛) , 𝑦𝑖 is the value of the field at the point 𝑥𝑖 , 𝑛 = 4, and Σ is the covariance 675 matrix given by 

676 

677 where 𝐻 is related to the spectral slope 𝛽 by 𝛽= 2𝐻+ 1 . For the Bayesian analysis, the log678 permeability field is treated as a fractional Brownian field with known values of 𝜇 and 𝐻 , but the value 679 of 𝜎<sup>2</sup> is uncertain. As stated previously, 𝜇 = -15 and 𝐻 = 0.2 (corresponding to 𝛽= 1.4 ). The statement 680 of Bayes’ theorem for continuous random variables is 

#### 681 

682 where 𝑓𝑿(𝒙|𝒀= 𝒚) is the so-called posterior distribution of 𝑿 and 𝑓𝑿(𝒙) is the prior distribution of 𝑿 . 683 The constant of proportionality is chosen so that the integral of the posterior distribution is equal to 1. 684 The uncertainty in the value of 𝜎<sup>2</sup> is encoded in the prior distribution, and the posterior distribution is 685 conditioned on the permeabilities at wells 0-4 ( 𝑘0, … 𝑘4 ). Rewriting Bayes theorem for this case gives 

686 

687 The two prior distributions for 𝜎<sup>2</sup> that were employed were both gamma distributions whose 688 probability density function is 

689 

690 The shape and scale parameters ( 𝑘 and 𝜃 , respectively) were 𝑘 = 2 and 𝜃 = 1.077 for the ``ignorant’’ 691 prior, and 𝑘 = 25 and 𝜃 = 0.1 for the “incorrect” prior. The square root of 𝜎<sup>2</sup> differs from the sample 692 standard deviation parameter that is discussed in the main text. The sample standard deviation for a 693 fractional Brownian field is scale-dependent, and increases with increasing scale. The fractional 694 Brownian field parameter 𝜎<sup>2</sup> was transformed into the sample standard deviation parameter via 

695 

696 The constant 𝐶 is fixed by the scale of the problem, and was empirically determined to be approximately 697 0.62 for this problem. 

698 

699 

# **References** 

- 700 Benson, D., Meerschaert, M., Revielle, J., 2013. Fractional calculus in hydrologic modeling: A numerical 701 perspective. Advances in Water Resources 51, 479-497. 

- 702 Beven, K., Binley, A., 1992. The future of distributed models: model calibration and uncertainty 703 prediction. Hydrological Processes 6, 279-298. 

- 704 Birkholzer, J., Cihan, A., Zhou, Q., 2012. Impact-driven pressure management via targeted brine 705 extraction-Conceptual studies of CO2 storage in saline formations. International Journal of Greenhouse 706 Gas Control 7, 168-180. 

- 707 Birkholzer, J., Zhou, Q., Tsang, C., 2009. Large-scale impact of CO2 storage in deep saline aquifers: A 708 sensitivity study on pressure response in stratified systems. International Journal of Greenhouse Gas 709 Control 3, 181-194. 

- 710 Bourcier, W., Wolery, T., Wolfe, T., Haussmann, C., Buscheck, T., Aines, R., 2011. A preliminary cost and 711 engineering estimate for desalinating produced formation water associated with carbon dioxide capture 712 and storage. International Journal of Greenhouse Gas Control 5, 1319-1328. 

- 713 Brace, W., 1980. Permeability of crystalline and argillaceous rocks. International Journal of Rock 714 Mechanics and Mining Sciences 17, 241-251. 

- 715 Buscheck, T., Y. Sun, M. Chen, Y. Hao, T. Wolery, W. Bourcier, B. Court, M. Celia, S. Friedmann, and R. 716 Aines (2012), Active CO2 reservoir management for carbon storage: Analysis of operational strategies to 717 relieve pressure buildup and improve injectivity, International Journal of Greenhouse Gas Control, 6, 718 230-245, doi:10.1016/j.ijggc.2011.11.007. 

- 719 Cappa, F., Rutqvist, J., 2011. Impact of CO2 geological sequestration on the nucleation of earthquakes. 720 Geophysical Research Letters 38, doi:10.1029/2011GL048487. 

- 721 Copty, N., Rubin, Y., Mavko, G., 1993. Geophysical-hydrological identification of field permeabilities 722 through Bayesian updating. Water Resources Research 29, 2813-2825. 

- 723 Court, B., Bandilla, K. W., Celia, M. A., Janzen, A., Dobossy, M., Nordbotten, J. M., 2012. Applicability of 

- 724 vertical-equilibrium and sharp-interface assumptions in CO2 sequestration modeling. International 725 Journal of Greenhouse Gas Control 10, 134-147. 

- 726 Dempsey, D., Kelkar, S., Pawar, R., 2014. Passive injection: A strategy for mitigating reservoir 

- 727 pressurization, induced seismicity and brine migration in geologic CO2 storage. International Journal of 728 Greenhouse Gas Control 28, 96-113. 

- 729 Deng, H., Stauffer, P., Dai, Z., Jiao, Z., Surdam, R., 2012. Simulation of industrial-scale CO2 storage: Multi730 scale heterogeneity and its impacts on storage capacity, injectivity and leakage. International Journal of 731 Greenhouse Gas Control 10, 397-418. 

- 732 Evans, J., Forster, C., Goddard, J., 1997. Permeability of fault-related rocks, and implications for hydraulic 

- 733 structure of fault zones. Journal of Structural Geology 19, 1393-1404. 

- 734 Flett, M., Gurton, R., Weir, G., 2007. Heterogeneous saline formations for carbon dioxide disposal: 

- 735 Impact of varying heterogeneity on containment and trapping. Journal of Petroleum Science and 736 Engineering 57, 106-118. 

- 737 Gauch, H. G., 2003. Scientific Method in Practice. Cambridge University Press. 

- 738 Gilfillan, S., Wilkinson, M., Haszeldine, R., Shipton, Z., Nelson, S., Poreda, R., 2011. He and Ne as tracers 739 of natural CO2 migration up a fault from a deep reservoir. International Journal of Greenhouse Gas 740 Control 5, 1507-1516. 

- 741 Han, W., Kim, K., Choung, S., Jeong, J., Jung, N., Park, E., 2014. Non-parametric simulations-based 742 conditional stochastic predictions of geologic heterogeneities and leakage potentials for hypothetical 743 CO2 sequestration sites. Environmental Earth Sciences 71, 2739-2752. 

- 744 Heffer, K. J., 2007. Proximity to a critical point: evidence from, and implications for, hydrocarbon 

- 745 reservoirs. In “The Relationship between Damage and Localization”, ed. Lewis, H., Couples, G. D., pp. 746 227-239, Geological Society of London Special Publications. 

- 747 IEAGHG (International Energy Agency, Greenhouse Gas), 2012. Extraction of Formation Waters from CO2 748 Storage. 

- 749 Ingebritsen, S., Geiger, S., Hurwitz, S., Driesner, T., 2010. Numerical simulation of magmatic 

- 750 hydrothermal systems. Reviews of Geophysics 48, doi:10.1029/2009RG000287. 

- 751 Johnson, N., Dreiss, S., 1989. Hydrostratigraphic interpretation using indicator geostatistics. Water 752 Resources Research 25, 2501-2510. 

753 

- Keating, E., Newell, D., Dempsey, D., Pawar, R., 2014. Insights into interconnections between the 

754 shallow and deep systems from a natural CO2 reservoir near Springerville, Arizona. International Journal 755 of Greenhouse Gas Control 25, 162-172. 

756 

   - Keating, E., Newell, D., Viswanathan, H., Carey, J., Zyvoloski, G., Pawar, R., 2013. CO2/Brine Transport 

- 757 into Shallow Aquifers along Fault Zones. Environmental Science & Technology 47, 290-297. 

- 758 Kitanidis, P., Vomvoris, E., 1983. A geostatistical approach to the inverse problem in groundwater 

- 759 modeling (steady-state) and one-dimensional simulations. Water Resources Research 19, 677-690. 

- 760 Leary, P., Al-Kindy, F., 2002. Power-law scaling of spatially correlated porosity and log(permeability) 761 sequences from north-central North Sea Brae oilfield well core. Geophysical Journal International 148, 762 426-442. 

- 763 Lengler, U., De Lucia, M., Kuhn, M., 2010. The impact of heterogeneity on the distribution of CO2: 

- 764 Numerical simulation of CO2 storage at Ketzin. International Journal of Greenhouse Gas Control 4, 1016765 1025. 

- 766 Lu, Z., Dongxiao, Z., Chen, Y., 2008. Information Fusion using the Kalman Filter based on Karhunen-Loeve 767 Decomposition. In “Quantitative Information Fusion for Hydrological Sciences”, ed Cai, X., Yeh, T.-C. J., 768 Springer Berlin Heidelberg. 

- 769 Lu, Z., Zhang, D., 2004. A comparative study on uncertainty quantification for flow in randomly 

- 770 heterogeneous media using Monte Carlo simulations and conventional and KL-based moment-equation 771 approaches. SIAM Journal on Scientific Computing 26, 558-577. 

- 772 Manning, C., Ingebritsen, S., 1999. Permeability of the continental crust: Implications of geothermal data 773 and metamorphic systems. Reviews of Geophysics 37, 127-150. 

- 774 Matthews, C. S., Russell, D. G. (Eds.),1967. Pressure Buildup and Flow Tests in Wells, SPE, Dallas, TX. 

- 775 Molz, F., Liu, H., Szulga, J. 1997. Fractional Brownian motion and fractional Gaussian noise in subsurface 776 hydrology: A review, presentation of fundamental properties, and extensions. Water Resources 777 Research 33, 2273-2286. 

- 778 Moore, J., Adams, M., Allis, R., Lutz, S., Rauzi, S., 2005. Mineralogical and geochemical consequences of 779 the long-term presence of CO2 in natural reservoirs: An example from the Springerville-St. Johns Field, 780 Arizona, and New Mexico, USA. Chemical Geology 217, 365-385. 

- 781 Nordbotten, J. M., Celia, M. A., Bachu, S., 2005. Injection and Storage of CO2 in Deep Saline Aquifers: 782 Analytical Solution for CO2 Plume Evolution During Injection. Transport in Porous Media 58, 339-360. 

- 783 Oldenburg, C., Rinaldi, A., 2011. Buoyancy Effects on Upward Brine Displacement Caused by CO2 784 Injection. Transport in Porous Media 87, 525-540. 

- 785 Park, S. Y., Bera, A. K., 2009. Maximum entropy autoregressive conditional heteroskedasticity model. 786 Journal of Econometrics 150, 219-230. 

- 787 Pasala, S., Forster, C., Deo, M., Evans, J., 2013. Simulation of the impact of faults on CO2 injection into 788 sandstone reservoirs. Geofluids 13, 344-358. 

- 789 Saadatpoor, E., Bryant, S., Sepehrnoori, K., 2010. New Trapping Mechanism in Carbon Sequestration. 790 Transport in Porous Media 82, 3-17. 

- 791 Snow, D. T., 1970. The frequency and apertures of fractures in rock. International Journal of Rock 792 Mechanics and Mining Science 7, 23-40. 

- 793 Stevens, S. H., Pearce, J. M., Rigg, A. A. J., 2001. Natural Analogs for Geologic Storage of CO2: An 

- 794 Integrated Global Research Program. In proceedings First National Conference on Carbon Sequestration, 795 Washington, D.C. 

- 796 Sullivan, E., Chu, S., Stauffer, P., Middleton, R., Pawar, R., 2013. A method and cost model for treatment 797 of water extracted during geologic CO2 storage. International Journal of Greenhouse Gas Control 12, 

- 798 372-381. 

- 799 Theis, C., 1935. The relation between the lowering of the piezometric surface and the rate and duration 

- 800 of discharge of a well using ground water storage. Transactions-American Geophysical Union 16, 519801 524. 

- 802 Townend, J., Zoback, M., 2000. How faulting keeps the crust strong. Geology 28, 399-402. 

- 803 Zhang, Y., Person, M., Paola, C., Gable, C., Wen, X., Davis, J., 2005. Geostatistical analysis of an 

- 804 experimental stratigraphy. Water Resources Research 41, doi:10.1029/2004WR003756. 

- 805 Zoback, M., Gorelick, S., 2012. Earthquake triggering and large-scale geologic storage of carbon dioxide. 

- 806 Proceedings of the National Academy of Sciences of the United States of America 109, 10164-10168. 

- 807 Zyvoloski, G., 2007. FEHM: A control volume finite element code for simulating subsurface multi-phase 

- 808 multi-fluid heat and mass transfer. LA-UR-07-3359, Los Alamos National Laboratory, Los Alamos. 

