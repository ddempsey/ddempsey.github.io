# Techno-economic analysis of geothermal combined with direct and biomass-based carbon dioxide removal for high-temperature hydrothermal systems

**Authors:** K.A. Titus, David Dempsey, Rebecca A.M. Peer, Rosalind Archer  
**Published in:** Geothermics (2025)  
**DOI (version of record):** https://doi.org/10.1016/j.geothermics.2024.103159  
**This copy:** Published version. Text extracted from the PDF at https://ddempsey.github.io/papers/2025-titus-techno-economic-analysis-geothermal-combined/titus2025-techno-economic-analysis.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** Published version, reproduced under the CC BY 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1016/j.geothermics.2024.103159  
**Licence:** CC BY 4.0 http://creativecommons.org/licenses/by/4.0/  

---
Geothermics 125 (2025) 103159 

Contents lists available at ScienceDirect 

# Geothermics 

journal homepage: www.elsevier.com/locate/geothermics 

## Techno-economic analysis of geothermal combined with direct and biomass-based carbon dioxide removal for high-temperature hydrothermal systems 

### K.A. Titus<sup>a,*</sup> , David Dempsey<sup>a</sup> , Rebecca A.M. Peer<sup>a</sup> , Rosalind Archer<sup>b</sup> 

a _The University of Canterbury, 20 Kirkwood Avenue, Upper Riccarton, Christchurch 8041, New Zealand_ b _Griffith University, Gold Coast Campus Parklands Drive Southport, Qld 4222, Australia_ 

A R T I C L E I N F O 

A B S T R A C T 

_Keywords:_ Geothermal BECCS DACCS Forestry residues Energy economics 

Limiting global temperature rise to between 1.5 and 2<sup>◦</sup> C will likely require widespread deployment of carbon dioxide removal (CDR) to offset sectors with hard-to-abate emissions. As financial resources for decarbonization are finite, strategic deployment of CDR technologies is essential for maximizing atmospheric CO2 reductions. Carbon capture and sequestration (CCS), using either direct air capture (DACCS) or bioenergy (BECCS) technologies has a particular synergy with geothermal electricity generation. This is because expensive geothermal infrastructure can be leveraged to transport dissolved CO2 for storage in subsurface reservoirs. 

Here, we present a techno-economic comparison of renewable electricity generation coupled with either BECCS or DACCS at high-temperature, low-gas hydrothermal systems. We use a systems model that quantifies energy, carbon and financial flows through a generic hybrid power plant. At a CO2 market price of $100/tonne, the geothermal-BECCS system has a lower median cost of electricity generation ($88/MWh) than geothermalDACCS ($181/MWh) and conventional geothermal ($89/MWh). 

Geothermal-BECCS also had the lowest costs of overall emissions abatement, $122/tCO2, accounting for carbon removal and assuming displacement of fossil-fuel generation. Abatement costs are even lower, $45/tCO2, for BECCS retrofit of existing geothermal plants, owing to discounted costs of pre-existing injection wells, steam fields, and plant equipment. 

For a case study based on a geothermal field in New Zealand’s Taupo Volcanic Zone (TVZ), we determined that ¯ achieving CDR rates of 1 MtCO2/year via new geothermal-BECCS builds would require 62 standard geothermal wells and 790 kt/year of feedstock and result in 511 MWe in installed capacity. In contrast, geothermal-DACCS would need 49 wells and no external fuel source to achieve 1 MtCO2/year scale but result in only 190 MWe in installed capacity. Both pathways are calculated to require similar upfront investment costs at $2.2 billion and $2.3 billion for geothermal-BECCS and geothermal-DACCS respectively. 

Although geothermal-DACCS removes CO2 at high rates, its high parasitic load increases the overall decarbonization cost ($187/tCO2). In contrast, when biomass hybridization is considered, geothermal-BECCS has a lower cost of emissions abatement and produces 20 % more electricity than the benchmark geothermal plant. We conclude that this increase in electricity production makes geothermal-BECCS the more cost-effective geothermal-based CDR configuration. Finally, we argue that revenues from net-negative CO2 emissions and increased power production make geothermal-CDR a cost-competitive decarbonization technology. 

#### **1. Introduction** 

There is a timely need for specialised and cost-effective decarbonisation solutions. The sixth annual report (AR6) from the Intergovernmental Panel on Climate Change (IPCC) states with high confidence that 

limiting global warming to 1.5–2<sup>◦</sup> C will require net-zero CO2 emissions by 2050 (IPCC, 2023). Even if 100 % renewable electrification is achieved worldwide, hard-to-abate emissions from agriculture, aviation, shipping and industrial processes would still pose challenges to global climate targets. Therefore, the IPCC have highlighted the deployment of 

* Corresponding author. 

_E-mail address:_ karan.titus@pg.canterbury.ac.nz (K.A. Titus). 

https://doi.org/10.1016/j.geothermics.2024.103159 

Received 27 November 2023; Received in revised form 26 August 2024; Accepted 1 September 2024 

Available online 6 September 2024 

0375-6505/© 2024 The Author(s). Published by Elsevier Ltd. This is an open access article under the CC BY license ( http://creativecommons.org/licenses/by/4.0/ ). 

_Geothermics 125 (2025) 103159_ 

_K.A. Titus et al._ 

carbon dioxide removal (CDR) technologies as critical to counterbalance these emissions (IPCC, 2023). 

Geothermal energy is a mature, generally low-carbon source of baseload electricity that uses hot water extracted from deep wells for power production (Vargas et al., 2022). Traditionally, geogenic CO2 brought up with the hot water has been vented to the atmosphere. However, recent advances in emissions capture and reinjection present new opportunities for geothermal wells to also perform a carbon sequestration function. If the injected CO2 was instead derived from the atmosphere, the result would be geothermal-enabled carbon dioxide removal (CDR). 

Geothermal energy has been combined with direct air carbon capture and storage (DACCS) at the demonstration scale (Ratouis et al., 2022). Adopting a similar technology base, Titus et al. (2023) proposed that geothermal energy could also be combined with bioenergy-based carbon capture and storage (BECCS). In addition to carrying out atmospheric CDR, such a scheme would also increase renewable electricity production above a standard geothermal baseline. 

Both BECCS and DACCS are important technologies in climate mitigation pathways that limit global temperature increase to 2<sup>◦</sup> C (Fasihi et al., 2019; Gough et al., 2018). The extent of their synergy and financial viability with geothermal energy is currently unknown and should be robustly explored. Here, we introduce a new plant configuration for geothermal-BECCS and compare the expected range of financial performance against a benchmark geothermal power plant and a comparable geothermal-DACCS power plant. We then provide a case study analysis for a new geothermal-BECCS development in a New Zealand market. 

We select New Zealand due to its (a) preponderance of hightemperature hydrothermal systems, (b) the colocation of forestry residues for biomass feedstock (MPI, 2020), and (c) the current absence of CDR methods outside of afforestation towards meeting its carbon budgets (MfE, 2022b). However, the methods presented in this study can be applied to any location with hydrothermal resources and co-located biomass feedstocks. Notably, this research is novel because it presents the first techno-economic comparison of geothermal-based CDR configurations with conventional geothermal plants. This is the first study where the CDR potential of geothermal-BECCS and geothermal-DACCS are quantified and compared for a given high-temperature hydrothermal system, offering important analysis for systems-level decarbonisation pathways that leverage geothermal resources. 

#### _1.1. Geogenic CO2 capture at geothermal power plants_ 

Geothermal power plants emit CO2 at a worldwide average rate of 122 gCO2/kWh (Bayer et al., 2013; Bertani and Thain, 2002; Fridriksson et al., 2017). This CO2 is geogenic in nature, originating from deep magmatic intrusions – hence, sometimes referred to as magmatic emissions – and brought to the surface by the geothermal fluid (Kaya and Zarrouk, 2017). Notwithstanding that these emission intensities are low compared to natural gas (~400 gCO2/kWh) and coal generation (~1000 gCO2/kWh), a global trend of geogenic CO2 reinjection is emerging (McLean et al., 2020; Kaya and Zarrouk, 2017; Ratouis et al., 2022; Titus et al., 2024). 

The practice of in-line dissolution of non-condensable gases (NCGs) into geothermal reinjection wells was pioneered during the Carbfix project in 2012 at the Hellisheidi geothermal flash plant in Iceland (Sigfusson et al., 2015). The goal was to capture CO2 and H2S that would otherwise be vented to the atmosphere from the plant’s cooling system (Gunnarsson et al., 2018). A similar approach has since been deployed at the Ng¯awha geothermal binary plant in New Zealand (¯ Titus et al., 2024) where, as of 2023, all geothermal NCGs are reinjected. 

Unlike traditional carbon capture & storage (CCS) operations that inject a buoyant pure CO2 phase directly into subterranean formations, in-line dissolution dissolves the CO2 into a dense brine before its injection. This is achieved using an interior pipe, bubbler and brine 

hydrostatic column within the reinjection well. The rate of transport of CO2 to the reservoir is thus limited by its solubility in reinjected brine, which in turn depends on pressure and, to a lesser extent, temperature, brine chemistry and salinity (Duan and Sun, 2003; Spycher et al., 2003). 

Conventional CCS operations often require new transport and injection infrastructure, which can increase capital expenditure (CAPEX) over a conventional fossil fuel plant by 45–130 % and operational expenditure (OPEX) by 4–58 % (Gough et al., 2018). At Carbfix, in-line dissolution proved more economical than conventional CCS because reinjection wells were already available, the CO2 didn’t need offsite transportation, and subcritical (as opposed to supercritical) compression reduced the parasitic load (Gunnarsson et al., 2018). 

Although the sequestration rate is capped by solubility, a key advantage of dissolving CO2 is avoiding buoyancy-driven leakage risks (Kerv´evan et al., 2017). Carbonated brine is slightly denser than an equivalent non-carbonated fluid (Garcia, 2001) and hence may sink towards the bottom of the reservoir given enough time. Further, CO2 is more likely to stay dissolved if reservoir pressure is maintained (Kaya and Zarrouk, 2017), which is promoted under the standard reservoir management practice of reinjection of produced fluids. 

Finally, with favourable geology, subsurface chemical rock reactions can allow reinjected CO2 to mineralise, providing a near-permanent form of storage (Marieni et al., 2018; Sigfusson et al., 2015; Snæbjornsd¨ ottir et al., 2018´ ). The storage potential of CO2 via mineralization in a geothermal reservoir will thus depend on (a.) the availability of reactive minerals to convert CO2 to carbonates and (b.) the near-wellbore permeability and porosity in the injection zone (Snæbjornsd¨ ottir et al., 2018´ ). Without favourable geology for mineralization, the CO2 storage potential will depend on the solubility of CO2 in the geothermal fluid in the reservoir, which in turn is maintained by reinjection activities (Kaya and Zarrouk, 2017; Kerv´evan et al., 2017). 

With in-line dissolution to sequester geogenic CO2, geothermal resources can provide carbon-neutral energy. However, geothermal energy can also be paired with direct or biogenic CO2 capture methods, which enables a carbon-negative energy cycle. 

#### _1.2. Geothermal with direct air carbon capture and sequestration_ 

In 2019, global net annual anthropogenic greenhouse gas emissions reached 59±6.6 GtCO2 (IPCC, 2023). To reach net zero by 2050, this could require CO2 emissions cuts by ~ 4 % each year (Lawrence et al., 2018). Direct air carbon capture and sequestration (DACCS) is one method to offset non-point source emissions at scale and aid in the global net zero effort. 

For DACCS to reach a scale of 10 GtCO2/year by 2050 (~17 % of 2019 emissions), Breyer et al. (2019) have suggested that investments in the range €32–42 billion (USD $34–45 billion) are required. This is on par with investments in solar PV between 1996 and 2005. However, DACCS is still a novel technology. Duetz & Badrow (2021) found that the production of amines used for adsorption of CO2 from atmospheric air needs to be increased by an order of magnitude. Furthermore, the overall climate impact of DACCS strongly depends on the energy source it is paired with, i.e., renewables vs fossil fuels. 

DACCS can be deployed in two ways: (1) as a high-temperature (HT) aqueous solution-based process or (2) a low-temperature (LT) solid sorbent-based process. Both require electricity and heat as inputs. For example, HT-DACCS requires temperatures of about 900<sup>◦</sup> C, which can be obtained from burning fossil fuels or syngas (Sabatino et al., 2021). In contrast, LT-DACCS requires temperatures of ~100<sup>◦</sup> C for emissions capture, which can be obtained from separated geothermal brine (Duetz and Badrow, 2021; Breyer et al., 2019). Coupled with in-line dissolution for permanent disposal, geothermal-DACCS is a technically feasible CDR operation (see Fig. 1a for a process schematic of geothermal-DACCS). 

There is currently only one demonstration-scale geothermal-DACCS project worldwide: Carbfix 2. At the Carbfix 2 project, a pilot-scale geothermal-DACCS plant was installed in 2017. The plant captured 50 

2 

_K.A. Titus et al._ 

_Geothermics 125 (2025) 103159_ 

**Fig. 1.** Process schematic of (A) geothermal-DACCS and (B) geothermal-BECCS. For (A): geothermal fluid is produced and flashed to steam to generate electricity in the power plant. A percentage of that electricity, as well as heat from the separated brine, is used to separate CO2 from the atmosphere in a direct air capture unit. The CO2 is dissolved in the brine within the reinjection column and sequestered in the geothermal reservoir. For (B): geothermal fluid heat is augmented by combustion of biomass for electricity production. The resultant biogenic CO2 is dissolved in the brine within the reinjection well. 

tCO2/year for storage through in-line dissolution (Gutknecht et al., 2018; Ratouis et al., 2022). The separation process requires a substantial amount of heat (5.4–11.9 MJth/kgCO2) and electricity (1.8–2.6 MJe/kgCO2), both of which conventional geothermal power plants can provide (Fasihi et al., 2019; Sabatino et al., 2021). Separated brine at 120<sup>◦</sup> C was sufficient to provide the heating load at the Carbfix 2 pilot (Gutknecht et al., 2018). The project has since expanded to the Orca plant with a CDR capacity of 4 ktCO2/year (Climeworks, 2024a). The next development stage, Mammoth, will be scaled up to 36 ktCO2/year (Climeworks, 2024b). 

When considering total life-cycle emissions, it is estimated that geothermal-DACCS could reach CO2 removal efficiencies of up to 93.1 % (Duetz and Badrow, 2021). The electricity required to separate CO2 from atmospheric air and then compress it is deducted from the electricity produced by the geothermal system. Thus, the economic feasibility of geothermal-DACCS is dependent on installation costs, the price of electricity and revenue from selling CO2 offsets. 

3 

_K.A. Titus et al._ 

_Geothermics 125 (2025) 103159_ 

#### _1.3. Geothermal with bioenergy & carbon capture and sequestration_ 

Bioenergy with carbon capture and sequestration (BECCS) is an energy system that removes CO2 from the atmosphere. Because biomass absorbs CO2 directly from the atmosphere during its life cycle, combining bioenergy with CCS results in a net carbon-negative process (Gough et al., 2018). 

The main advantage of BECCS is the coproduction of renewable electricity alongside CDR. The global potential for bioenergy is estimated to be 50 to 300 EJ/year and the potential for biogenic CDR ranges from 2 to 10 GtCO2/year by 2050 (Gough et al., 2018). This dual-decarbonisation effect is unique among other CDR technologies and BECCS has hence been cited as a resilient power system by the (IPCC, 2023). However, for BECCS to be an effective decarbonisation tool, the net CDR of the cycle must factor in supply chain emissions, land-use emissions and storage-related losses (Gough et al., 2018). 

In-line dissolution could theoretically be used to permanently dispose of biogenic CO2 emissions captured from geothermal-biomass hybrids (Titus et al., 2023). Unlike direct capture, BECCS has the potential to increase renewable electricity production from a geothermal power plant. Therefore, it is worthwhile investigating geothermal-BECCS as an approach for not only onsite CDR but also to increase renewable electricity generation from geothermal resources. 

Bioenergy pairs well with geothermal for power and heat applications (Beckers et al., 2015; Dal Porto et al., 2016; DiPippo, 2016; Srinivas et al., 2014; Thain and DiPippo, 2015; Toselli et al., 2019). Geothermal-biomass hybridisation has been investigated for flash (Dal Porto et al., 2016) and binary plants (Toselli et al., 2019) to enhance renewable electricity production. The Cornia-2 geothermal plant (Larderello, Italy) increased its generating capacity by 6 MWe using biomass combustion to superheat geothermal steam from 154<sup>◦</sup> C to 370<sup>◦</sup> C (Dal Porto et al., 2016). 

Thain & DiPippo (2015) proposed a similar theoretical design for the Rotokawa I plant (TVZ, New Zealand) using forestry residues from the Kaingaroa Forest to increase plant capacity by 8.5 MWe. Toselli et al. (2019) showed that a biogas hybrid of the Oberhaching geothermal binary plant (Germany) could increase electricity production by ~0.24 kWe. Beckers et al. (2015) found that a geothermal-hybrid cogeneration system at Cornell University (New York, US) could yield 2.4 GWh of electricity and 76.2 GWh of heat, respectively. 

Finally, the CO2-DISSOLVED project considered supplementing a natural gas at a bioethanol plant in France with geothermal energy (Gali`egue and Laude, 2017). The bioethanol production is an energy sink met mostly by the natural gas boiler that resulted in 45 ktCO2/year in biogenic emissions and 60.5 ktCO2/year in fossil emissions (Gali`egue and Laude, 2017). The project findings showed that geothermal energy could reduce non-renewable energy by 15 % and, coupled with biogenic CO2 dissolution in brine, reduce emissions by 40 %. Despite this, the project would still be net carbon positive and thus limited in decarbonisation scope. 

Titus et al. (2023) suggested that biogenic CO2 from geothermal-bioenergy hybrids could be sequestered through in-line dissolution to create a carbon negative cycle with increased renewable power (Fig. 1B). To avoid the accumulation of nitrogen gas caps in the reinjection zone, biogenic CO2 must be produced at a sufficiently high purity ( _>_ 80 %) prior to dissolution in the geothermal brine (Gali`egue and Laude, 2017). This requires post-combustion capture of CO2 from biogenic flue gas, which is investigated in this study with oxy-fuel combustion (or oxy-combustion). This post-combustion capture technique combusts feedstock in pure oxygen rather than air, resulting in a flue gas composed of 90–99 % CO2 (Zhou et al., 2016). The O2 input is most commonly produced through cryogenic distillation of air in an air separation unit (ASU), which incurs a parasitic load of 184–260 kWh per tonne of O2 (Hanak et al., 2017). 

The CO2 compression unit (CPU) also incurs a parasitic load, 90–170 kWh/tCO2, though the lower required pressure for in-line dissolution 

(~50 bar) versus supercritical storage ( _>_ 73.8 bar) elicits less of a penalty. The increased power through hybridization must exceed the parasitic load of air separation and CO2 compression if there is to be a net increase in electricity dispatch. For the scope of this study, biogenic CO2 is dissolved only in separated brine because steam condensate is likely to be exposed to oxygen at geothermal plants with direct contact condensers. 

There is currently no demonstration-scale plant of geothermalBECCS. Titus et al. (2024) calculated that a geothermal-BECCS retrofit of the Ngawh¯ a geothermal plant (in New Zealand¯ ’s Far North) could remove ~16 ktCO2/year at an increased plant capacity of 1 MWe net. Unlike DACCS, geothermal-BECCS is reliant on feedstock colocation and supply chain stability (Sandalow et al., 2021). However, only 6 % of annual forestry residues in the Far North were expected to be required for the Ngawh¯ a retrofit (¯ Titus et al., 2024). 

_1.4. Financial indicators for the co-production of electricity and carbon dioxide removal_ 

One of the key financial indicators used to compare electricity generation technologies is the levelised cost of electricity (LCOE; IRENA 2021). Accounting for the time value of money, LCOE quantifies the net present value of the cost per unit of electricity generated over the lifetime of a given power plant. LCOE accounts for all CAPEX, future OPEX and fuel costs. Generally, LCOE should be less than the price that electricity can be sold in a given market. There are local externalities (i.e., renewable energy portfolio standards, energy credits, resilience incentives) that may improve a project’s feasibility, but these are outside the scope of this study. 

Conventional geothermal energy developments typically incur high CAPEX, low OPEX and zero fuel costs (Dickson and Fanelli, 2013). In contrast, bioenergy for electricity generation is dependent on low-cost feedstocks to reach cost competitiveness (IRENA, 2021). In 2021, geothermal and bioenergy power plants had globally weighted LCOE averages of $68/MWh and $67/MWh, respectively (IRENA, 2021). In the same year, new bioenergy plants had lower global average CAPEX rates ($2353/kWe) compared to geothermal plants ($3991/kW). 

Power plants that incorporate CDR can expect to incur additional costs (Yang et al., 2021; Zang et al., 2018). To compensate for these, the net present revenue from CO2 removal is deducted from the net present costs on a per unit of electricity generation basis. Thus, if a project is to avoid an LCOE penalty, the market price of sequestered CO2 must be high enough to offset the increased costs. For example, for geothermal-BECCS, revenue from increased renewable electricity and CDR comes at the cost of procuring fuel as well as purification of the flue gas. For geothermal-DACCS, additional investment costs for CDR and subsequent parasitic loads must be offset by the revenue from CO2 sequestration. 

An acceptable LCOE will largely depend on local market conditions and grid makeup. LCOE values from BECCS case studies (supercritical CO2 storage) range from $78–270/MWh (Table 1), which is higher than conventional biomass plants ($67/MWh). This indicates a current disincentive for CDR to be pursued alongside biomass electricity generation. 

An analogous metric to LCOE is the levelised cost of sequestration (LCOS), which quantifies the net present value of all costs per unit of CO2 sequestered in $/tCO2 over the life cycle of the plant (Lehtveer and Emanuelsson, 2021). Here, the net present revenue from electricity generation is deducted from costs. This means that sequestration through BECCS and DACCS would be sensitive to the market price of electricity. 

However, several complexities such as cyclical operation, start-up time and dynamic shifts in grid dispatch are difficult to represent using this metric (Lehtveer and Emanuelsson, 2021). The LCOS values of different DACCS case studies are provided in Table 2. LCOS values above $200/tCO2 are generally considered uneconomic (Fasihi et al., 2019). As 

4 

_Geothermics 125 (2025) 103159_ 

_K.A. Titus et al.                                                                                                                                                                                                                                 Geothermics_ 

**Table 1** 

Levelised cost of electricity for different electricity producers by case study. 

|Conventional Generators (Global Weighted|LCOE||
|---|---|---|
|Average, 2021)|($/MWh)||
|Biomass (without CCS)|67|IRENA (2021)|
|Geothermal energy (without CDR)|68|IRENA (2021)|
|**BECCS Case Studies**<br>i|**LCOE**<br>**($/MWh)**||
|Gasification with amine-based CCS<br>i|78|Dinca et al. (2018)|
|i<br>Gasification combined cycle<br>i|201.2 - 273.6|Zang et al. (2018)|
|i<br>Oxy-gasification with staged oxy-combustion<br>combined cycle|22.9|Khallaghi et al.<br>(2021)|
|Pulverised biomass with CCS<br>i|168.6|Yang et al. (2021)|
|Gasification combined cycle*|228.2|Emenike et al.<br>(2020)|
|Post-combustion capture*|239.8|Emenike et al.<br>(2020)|
|Oxy-fuel combustion*|269.3|Emenike et al.<br>(2020)|

> * Only results for wood displayed. 

essential when deciding whether to invest in BECCS or DACCS at a given geothermal resource. To address this challenge, we have developed a techno-economic systems model that can estimate key thermodynamic (i.e., net power, annual sequestration, emissions intensity) and financial indicators (i.e., LCOE, LCOS and LCCA) for geothermal-based CDR configurations (Section 2). 

To verify that the major processes of these CDR configurations truly achieve net negative emissions, we also calculate the net emissions intensity (EI). The EI, denoted in gCO2 emitted per unit of electricity (kWh), is a useful metric for carbon accounting and can be used to compare the decarbonisation effect of low-carbon electricity generation cycles to traditional fossil fuel plants at scale. 

For example, in Table 4, the BECCS configuration designed by Khallaghi et al. (2021) could remove 1.85 times the amount of CO2 released to the atmosphere by an equivalent-sized natural gas plant. In the context of geothermal-based CDR, the EI can be used to determine (1) whether the specified operation is net-carbon negative, and (2) the plant size required to achieve CDR targets. 

#### **2. Methods** 

**Table 2** 

Levelised cost of sequestration for different negative CO2 emissions case studies. 

|**DACCS**|**LCOS ($/tCO2)**||
|---|---|---|
|HT System|180 - 300|Lehtveer&Emanuelsson (2021)|
|LT System|200 - 350|Lehtveer&Emanuelsson (2021)|
|HT (Carbon Engineering)|97 - 232|Keith et al. (2018)|
|Alkali Scrubbing|600|Sabatino et al. (2021)|
|Monoethanolamine|1690|Kiani et al. (2020)|
|**BECCS**|**LCOS ($/tCO2)**||
|Standalone|≤100|Lehtveer&Emanuelsson (2021)|
|Biochar|46–518|Cheng et al. (2021)|

with LCOE, there are externalities such as 45Q tax credits in the United States that provide important incentives for CO2 sequestration (Esposito et al., 2019), but these are also considered outside the scope of this study. 

LCOE and LCOS are useful metrics to assess, respectively, the electricity generation and CDR aspects of BECCS and DACCS. However, neither metric provides a complete picture of the total decarbonisation effect on the system. The levelised cost of carbon abatement (LCCA; Friedmann et al., 2020) assesses total decarbonisation achieved through the substitution of technologies that perform the same function. This metric expresses the net present value of all costs against the total displaced CO2 emissions achieved by transitioning from ‘business as usual’ (BAU, defined as current practices) to a new technology. Selecting the appropriate ‘business as usual’ technology is important when considering displacement, and this will vary by sector, region and frame of analysis. A list of LCCA values for low-carbon technologies is provided in Table 3. 

#### _2.1. Geothermal-CDR techno-economic model_ 

We present a techno-economic systems model for geothermal-BECCS and geothermal-DACCS that calculates the primary mass flow, energy generation, dissolution potential and key financial indicators for a given hydrothermal system. A summary of the major thermodynamic model processes is presented in Table 5. Financial performance calculations are given in Eqs. (1)–(5). With this model, we compare and assess two hybrid geothermal-CDR energy cycles against conventional geothermal and natural gas-based generation. 

Using the model described in Table 5, for a specified reservoir temperature, production well mass rate and turbine design temperature, it is possible to compute the net electrical power generated, rate of biomass fuel consumption, and the rate of CO2 removed via in-line dissolution (Titus et al., 2023). The EI of the plant, which is the ratio of emissions to energy production on a gCO2/kWh basis, is also calculated. 

The most important considerations for geothermal-DACCS are parasitic load and available brine heat to strip CO2 from ambient air (Fasihi et al., 2019; Sabatino et al., 2021). Thus, we calculate dissolution capacity of CO2 at an optimal pressure _<_ 50 bar, then determine if the thermal energy available from the separated brine was sufficient for CO2 adsorption. The amount of CO2 that can be separated from air (and needs to be dissolved) is given by the heat requirement load (11.9 MJth per kg of CO2, Sabatino et al., 2021). An important caveat with using the separated brine’s thermal energy is that the plant operator would need to be wary of silica scaling should the brine temperature be lowered below the saturation threshold. 

As global decarbonisation budgets are finite, financial indicators are 

**Table 4** 

Emissions intensity values for different electricity producers. 

**Table 3** 

Levelised cost of carbon abatement per low-carbon technology type (summarised from Friedmann et al., 2020). 

|**Low Carbon Technology**|**Displacing**|**LCCA**<br>**($/tCO2)**|
|---|---|---|
|Sustainable aviation fuels|Standard aviation<br>fuel|209–1618|
|Utility solar PV|California grid<br>(2018)|91|
|Rooftop solar|California grid<br>(2018)|287|
|Low-carbon steel alternatives (H2, zero-CO2<br>electricity, etc.)|Primary steel<br>production|14–440|
|Generic electric vehicle|Fossil-based vehicle|734|
|Direct air carbon capture and storage|Standard aviation<br>fuel|124–325|

|**Electricity Producer**|**Emissions Intensity**<br>**(gCO2/kWh)**||
|---|---|---|
|Coal|1012|EIA (2021)|
|Petroleum|966|EIA (2021)|
|Natural Gas|413|EIA (2021)|
|Geothermal<br>(Türkiye)*|1063|Aksoy (2014)|
|Geothermal|122|Bertani&Thain (2002);|
|(Worldwide)||Fridriksson et al. (2017)|
|BECCS (oxy-<br>gasification)|−766|Khallaghi et al. (2021)|
|i<br>BECCS (pulverised<br>feedstock)|−1260|Yang et al. (2021)|
|Geothermal-BECCS|−131 to−922|Titus et al. (2023)|

> * Weighted average of power plants where CO2 is not used for commercial purposes. 

5 

_Geothermics 125 (2025) 103159_ 

_K.A. Titus et al._ 

##### **Table 5** 

Process summary of geothermal-CDR thermodynamic model. _m_ ˙<sup>˙</sup> = mass rate [kg s<sup>-1</sup> ] with subscripts denoting steam ( _s_ ), brine ( _b_ ), two-phase mix at the wellhead ( _wh_ ), biomass fuel ( _bio_ ), total ( _CO_ 2) and dissolved carbon dioxide ( _dis_ ). _h_ = specific enthalpy [kJ/kg] with additional subscripts denoting superheated steam ( _shs_ ) and exhaust following isenthalpic expansion ( _ex, isen_ ). _η_ = efficiency of biomass heating ( _Boiler_ ) and turbine expansion ( _TD_ ). HV = heating value [kJ/ kg]. _sCO_ 2 = solubility of CO2 in water, a function of pressure ( _P_ ) and temperature ( _T_ ). 

|**Process**|**Model**|
|---|---|
|Conservation of Mass and Energy at a Wellhead<br>Separator (DiPippo, 2016)|˙_m_<sup>˙</sup>_s_ = ˙_m_<sup>˙</sup>_wh_(_hwh_ −<br>_hb_)_/_(_hs_−<br>_hb_)|
|The thermal energy and biomass feedstock required<br>from a biomass boiler to superheat separated steam<br>(Thain and DiPippo, 2015)|˙_m_<sup>˙</sup>_bio_ =<br>˙_m_<sup>˙</sup>_s_(_hshs_ −_hs_)<br>_ηBoilerHV_|
|The work generated,_Wg_, by the geothermal steam<br>turbine, where the turbine exhaust enthalpy is<br>controlled by dry expansion (Janes, 1984)|˙_W_<sup>˙</sup>_g_ = ˙_m_<sup>˙</sup>_s_<br>[<br>_hs_ −<br>_hshs_ −<br>_ηTD_<br>(<br>_hshs_ −<br>_hex,isen_<br>)]|
|The biogenic CO2emissions based on the feedstock<br>emissivity,_XCO_2, and biomass burn rate (Puettmann<br>et al. 2020)|˙_m_<sup>˙</sup>_CO_2 = _XCO_2<br>˙_m_<sup>˙</sup>_bio_|
|The reinjected brine carrying capacity for biogenic<br>CO2as a function of dissolution pressure,<br>temperature and brine mass flow rate (Duan and<br>Sun, 2003)|_sCO_2 =_f_(_Pdis,Tdis_)<br>˙_m_<sup>˙</sup>_dis_ = ˙_m_<sup>˙</sup>_bsCO_2|

All cost, revenue, electricity and emissions terms are represented as net present value and discounted over the plant’s life (30 years) at a discount rate of 8 %. We chose this discount rate because it is slightly more conservative than the value used for OECD countries (7.5 %) by the International Renewable Energy Agency (IRENA, 2019; Park et al., 2021). All currency values are expressed in US dollars ($) unless otherwise stated. 

The most common economic metric to assess different electricity generation technologies is the levelised cost of electricity ( _LCOE_ ) presented in $/MWh (IRENA, 2021): 

where _C_ represents all costs ($) and _G_ represents all electricity generated (MWh). The key costs included in the numerator of Eq. (1) are CAPEX, OPEX and any relevant fuel costs. In the case of geothermal power plants, costs may also need to account for geogenic CO2 emissions given local policy measures (Ratouis et al., 2022). 

When geothermal is coupled with CDR, any revenue from CO2 sequestered can be deducted from costs: 

where _RCO_ 2 is the CDR revenue ($). The total cost term, _C_ , is now modified to include the new infrastructure and operational expenses associated with CDR activities. Furthermore, the numerator is now sensitive to the market price of CO2. Compared to a conventional plant, a geothermal-CDR plant with the same mass production could have a higher generation, _G_ , from hybrid power boosting or lower due to CDR parasitic loads. 

The levelised cost of sequestration (LCOS) assesses the costeffectiveness of sequestering CO2 on a per-tonne basis: 

Here, the revenue from electricity production ( _Rg_ ), in US dollars ($), is deducted from costs in the numerator. Net carbon removed from the atmosphere, _E_ , is given in tCO2. Note that any CO2 emitted to the atmosphere, say through transport of feedstock, during the life cycle of electricity generation, must be considered when calculating _E_ . The LCOS of geothermal-BECCS and geothermal-DACCS is thus sensitive to the 

market price of electricity. 

The levelised cost of carbon abatement (LCCA; Friedmann et al., 2020) quantifies the full decarbonisation effect of a technology: 

|_LCCA_=<br>_C_1<br>_E_0−<br>_E_1|(4)|
|---|---|

As with Eqs. (2) and (3), the net present value of all costs are included in the numerator. However, instead of deducting revenue from either electricity generation or CDR, the total decarbonisation effect is represented in the denominator. _E_ 0 is the net present value of CO2 emissions of a ‘business as usual’ (BAU) technology that requires abatement (e.g., fossil electricity generation). A natural gas turbine cycle has been selected as the ‘business as usual’ case for comparison with the geothermal configurations explored here. 

_E_ 1 is the net present value of CO2 emissions of a low-carbon alternative such as solar PV or geothermal energy. For net carbon-negative cycles like geothermal-BECCS and geothermal-DACCS, _E_ 1 is a negative value and the denominator can be quite large (theoretically, unbounded). In comparison, the LCCA of carbon-neutral technologies is bounded by the emissions of the BAU technology. We assume that the price of transport emissions is already factored in the feedstock transport costs and is not double counted in Eqs. (2)-(4). Both terms in the denominator are given in tonnes of CO2 and scaled for equivalent-sized electricity output. 

The emissions intensity ( _EI_ ) of geothermal-BECCS and geothermalDACCS plants has three main contributions: (i) geogenic CO2 emissions that are not captured and reinjected, _Egeo_ , (ii) transportation emissions associated with fuel, _Etran_ , and (iii) negative emissions from CDR, _ECDR_ . For this study, _EI_ is calculated using Eq. (5): 

A limitation of EI as a metric for CDR technologies is that it doesn’t convey the additional decarbonisation benefits of increasing renewable power. Nor have we included lifecycle emissions from construction or land-use changes considered when practically implementing a power plant (Pehl et al., 2017). Coproduction of electricity and CDR is subject to the capacity factor of the plant, typically 90 % for geothermal power plants (IRENA, 2021). 

#### _2.2. Geothermal-CDR configurations_ 

We consider the following configurations shown in Figs. 2–4 to be reasonable plant designs for high temperature (250–300<sup>◦</sup> C), low-gas hydrothermal systems (~122 gCO2/kWh) as found in countries such as New Zealand, Indonesia, the United States, Kenya and Iceland. We selected this bandwidth of geothermal resources for investigation because conventional geothermal, geothermal-BECCS and geothermalDACCS are all thermodynamically feasible in this range. 

Configuration 1 represents a benchmark geothermal plant with no CDR activities. The plant is set up to use both separated steam and separated brine for electricity generation. Cooling system 1 (C1) is assumed to be a direct contact condenser with a natural draught cooling tower, with readily available water as the cooling medium. This configuration makes use of the thermal energy of the geothermal brine for further power production via a binary cycle. Although this is not a necessary requirement for every high-temperature flash plant, we included this as an important comparison point to geothermal-DACCS (configuration 3, Fig. 4) where the brine’s thermal energy is used to strip CO2 from ambient air instead. We assume that geogenic CO2 vents from the plant through C1, rather than being recaptured. The evaporator (E) and preheater (pH) are modelled as a single thermodynamic unit. 

Configuration 2 represents a geothermal-BECCS hybrid with a similar setup to configuration 1, except that a biomass boiler is placed between the separator and steam brine, sourcing biomass feedstock from a variable distance away via trucking. The boiler is designed for oxy- 

6 

_Geothermics 125 (2025) 103159_ 

_K.A. Titus et al.                                                                                                                                                                                                                                 Geothermics_ 

**Fig. 2.** Schematic of a benchmark geothermal plant (Configuration 1). PW = production well, Sep = separator, ST = steam turbine, C1 = condenser 1, BT = binary turbine, _E_ = evaporator, pH = preheater, _P_ = Pump, C2 = condenser 2, IW1 = injection well 1, IW2 = injection well 2. CW = cooling water, CA = cooling air. Red line = hot geothermal fluid, blue line = cold geothermal fluid, grey line = isopentane working fluid (WF), black-dashed line = CO2. Plant not to scale. 

**Fig. 3.** Schematic of a geothermal-BECCS plant (Configuration 2). The individual component list follows with example values from text in brackets. PW = production well, Sep = separator, ST = steam turbine, C1 = condenser 1, BT = binary turbine, _E_ = evaporator, pH = preheater, _P_ = Pump, C2 = condenser 2, IW1 = injection well 1, IW2 = injection well 2. BIO = biomass superheater, ASU = air separation unit, CPU = compression unit. Red line = hot geothermal fluid, blue line = cold geothermal fluid, grey line = isopentane working fluid (WF), black-dashed line = CO2, green line = biomass feedstock, orange line = external atmospheric gas. Plant not to scale. 

combustion, requiring oxygen via an air separation unit (ASU) and resulting in a very high ( _>_ 95 % CO2) flue gas composition. 

Biogenic CO2 is then compressed in a compression unit (CPU) and dissolved specifically in the geothermal brine reinjection well (IW1) for sequestration. Given C1 is assumed to be a direct contact condenser, steam condensate would encounter oxygenated water (DiPippo, 2016). The presence of oxygen thus bars IW2 for CDR. 

Although the steam turbine (ST) output would exceed that of configuration 1, the binary turbine (BT) would remain the same. In addition to the base geogenic CO2 emissions of the field, there is also the consideration of transport emissions of the biomass feedstock. 

CDR efforts are thus constrained by the amount of biomass feedstock required for steam superheating and the solubility of CO2 in separated geothermal brine (at IW1) at optimal dissolution conditions. Because of 

7 

_K.A. Titus et al._ 

_Geothermics 125 (2025) 103159_ 

**Fig. 4.** Schematic of a geothermal-DACCS plant (Configuration 3). The individual component list follows with example values from text in brackets. PW = production well, Sep = separator, ST = steam turbine, C = condenser, IW1 = injection well 1, IW2 = injection well 2. DACCS Unit = direct air capture unit. Red line = hot geothermal fluid, blue line = cold geothermal fluid, grey line = isopentane working fluid (WF), black-dashed line = CO2, orange line = external atmospheric gas, yellow line = electricity. Plant not to scale. 

the relatively straightforward change to configuration 1, we assume that the CAPEX and OPEX of geothermal apparatuses remain the same from the base plant. However, we now include the CAPEX and OPEX for the superheater, ASU and CPU. Furthermore, we account for associated parasitic loads and the biomass feedstock cost. 

Finally, configuration 3 represents a geothermal-DACCS power plant where the thermal energy of separated brine and a percentage of the steam turbine work is used to strip CO2 from ambient air via a DACCS unit and dissolve it in the brine reinjection well (IW1). 

The geothermal CAPEX and OPEX are now estimated using only the work done by the steam turbine. In practice, each key plant component would be sized for specific site conditions and the cost of materials and operation could be more appropriately determined. The CAPEX and OPEX of DACCS are calculated based on the amount of CO2 captured. 

The CDR potential of geothermal-DACCS is constrained by the amount of useable thermal energy from the geothermal brine, the amount of electricity that can be used from the steam turbine and the solubility of CO2 in brine. 

#### _2.3. Parametric analysis of new geothermal-CDR builds for high-_ 

_temperature, low-gas systems_ 

For the configurations shown in Section 2.2, we conduct parametric analysis to show the sensitivity of the financial outputs described in Section 2.1 (LCOE, LCOS and LCCA) to key design parameters such as reservoir temperature or biomass heating value. Furthermore, we quantify the uncertainty of the Titus et al. (2023) model with respect to these key outputs for new-build geothermal-CDR designs. 

The key design parameters that solely affect geothermal-BECCS are bioenergy CAPEX ($/kWe), biomass heating value ( _HV_ ; MJ/kg), biogenic CO2 emissions factor ( _XCO_ 2 ; kg/kg-wood), biomass transport distance (km) and ASU energy load (kWh/tO2). Geothermal-DACCS is instead affected by the DACCS CAPEX ($/tCO2), the DACCS electricity load (MJel/kgCO2) and the DACCS heat load (MJth/kgCO2). Both geothermal-BECCS and geothermal-DACCS are affected by the reservoir temperature of the system (<sup>◦</sup> C) and the emissions intensity of abated fossil fuel technology (gCO2/kWh). Reasonable ranges for these parameters are presented in Table 6. 

Due to the low sample size (i.e., only a handful of geothermal plants built each year) or site-specific nature of parameters (i.e., biomass heating value), we have opted to sample design parameters from uniform distributions. We sampled 1000 random values within each distribution, assuming no parameter correlation, and passed these as inputs to the techno-economic model. We quantified uncertainty by reporting the 33rd, 50th and 66th percentile of modelled financial outputs. 

Of the values presented in Table 6, geothermal and biomass CAPEX have the largest range. The calculated median for geothermal CAPEX ($4263/kWe) is slightly higher than the global weighted average of $3991/kWe of new geothermal builds in 2021 (IRENA, 2021) and the expected future generation average in New Zealand of $3459/kWe (Lawless et al., 2020). However, it is comparable to the average CAPEX for geothermal flash plants in the US at $4350/kWe (NREL, 2024). The median biomass CAPEX at $4073/kWe is also higher than the global weighted average of new bioenergy plants in 2021 ($2353/kWe), but lower than the US average at ~$5000/kWe (NREL, 2024). Thus, these median CAPEX values can be considered appropriately conservative. 

8 

_Geothermics 125 (2025) 103159_ 

_K.A. Titus et al.                                                                                                                                                                                                                                 Geothermics_ 

**Table 6** 

Key design parameter ranges for the geothermal-CDR model. ASU=Air Separation Unit. 

|**Parameter**|**Reported**<br>**Min**|**Reported**<br>**Max**|**Source**|**Calculated**<br>**Median**|
|---|---|---|---|---|
|Reservoir|250|300|DiPippo|275|
|Temperature (<br>◦C)|||(2016)||
|Geothermal<br>CAPEX ($/kWe)|1978|6548|IRENA<br>(2021)|4263|
|Bioenergy CAPEX<br>($/kWe)|701|7445|IRENA<br>(2021)|4073|
|Biomass Heating<br>Value (MJ/kg)|15|20|Telmo&<br>Lousada<br>(2011)|17.5|
|Biogenic CO2|0.78|3.25|Puettmann|2.015|
|Emissions Factor<br>(kg/kg-wood)|||et al. (2020)||
|DACCS CAPEX<br>(USD/tCO2)|788.4|1317.6|Fasihi et al.<br>(2019)|1053|
|DACCS Electricity<br>Load (MJel/<br>kgCO2)|1.8|2.6|Sabatino<br>et al. (2021)|2.2|
|DACCS Heat Load|5.4|11.9|Sabatino|8.6|
|(MJth/kgCO2)|||et al. (2021)||
|ASU Load (kWh/<br>tO2)|184|260|Hanak et al.<br>(2017)|222|
|Abated Fossil Fuel<br>EI (gCO2/kWh)|400|1000|EIA (2021)|700|
|Biomass Transport<br>Distance (km)|0|1600|Assumed|800|

For this study we tested a range of feedstock transport distance from 0 to 1600 km. A distance of 0 km would represent a biomass resource adjacent to the geothermal plant. The upper bound (1600 km) represents the length of New Zealand and would be inclusive of the length of the United Kingdom (1000 km) and California (1220 km), being a sufficiently large maximum distance for truck-based freight. 

For this study, the three configurations share the same initial geothermal fluid production mass rate of 100 kg s<sup>-1</sup> . We opted to compare the plants’ thermodynamic output based on a fixed mass flow rate because geothermal production wells are important infrastructure and reservoir consents for new developments are typically defined by mass take. Furthermore, we can compare power production per unit of fluid mass take. Finally, the same amount of geothermal brine is available for CDR for both geothermal-BECCS and geothermal-DACCS, allowing for a fair comparison of sequestration potential between the two. Fixed model parameter assumptions are presented in Table 7. 

**Table 7** 

Fixed parameter assumptions for the geothermal-CDR model. ASU=Air Separation Unit, CPU=CO2 Compression Unit. 

|**Parameters**|**Values**||
|---|---|---|
|Produced geothermal fluid rate (kg s<sup>-1</sup>)|100|Assumed|
|Brine injection temperature (<sup>◦</sup>C)|95|Addison et al. (2015)|
|Condenser temperature (<sup>◦</sup>C)|46.85|DiPippo (2016)|
|Geogenic CO2EI (gCO2/kWh)|122|Bertani&Thain (2002)|
|Transport emissions factor (gCO2/tonne-km)|105|MfE (2022a)|
|Operation start (year)|2|Assumed|
|Plant life (year)|30|Assumed|
|Discount rate (%)|8|Assumed|
|Plant capacity factor (%)|90|IRENA (2021)|
|Geothermal OPEX ($/kWe/year)|115|IRENA (2021)|
|Biomass boiler OPEX (%CAPEX/year)|6|IRENA (2021)|
|ASU CAPEX ($/kWe)|185.5|Khallaghi et al. (2021)|
|CPU CAPEX ($/kWe)|200.4|Khallaghi et al. (2021)|
|ASU+ CPU OPEX (%CAPEX/year)|3|Khallaghi et al. (2021)|
|O2requirement (tO2/kWe/year)|12.15|García-Luna et al. (2022)|
|DACCS OPEX (%CAPEX)|4|Fasihi et al. (2019)|
|Reference price of CO2($/CO2)|100|MBIE (2021)|
|Reference price of feedstock ($/tonne)|88|MPI (2020)|
|Reference price of electricity ($/MWh)|60|Keith et al. (2018)|

Where relevant, isopentane was selected as the working fluid for a binary organic Rankine cycle (ORC) with its properties adopted from Reynolds (1979). ORC cycles are designed to operate at subcritical conditions to avoid excess heat in the binary turbine exhaust due to isopentane’s retrograde nature. Condensers were set to 46.85<sup>◦</sup> C to induce a vacuum (DiPippo, 2016) and water was selected as the cooling medium. 

We chose a 50 bar dissolution limit that is below the critical point of CO2 (73.8 bar). For reinjection of 74 kg s<sup>-1</sup> of separated geothermal brine at 95<sup>◦</sup> C, this corresponds to a maximum sequestration rate for dissolved CO2 of 1.59 kg s<sup>-1</sup> (~50 kt/year). Beyond this threshold, CO2 must be vented to the atmosphere as carbon-neutral emissions. Dissolution of CO2 is only permitted in reinjection wells where the geothermal fluid has not been exposed to air to avoid the potential for oxygen corrosion (Bonafin et al., 2019). 

Net negative CO2 emissions are assumed to be a source of revenue while net positive CO2 emissions to the atmosphere are considered a cost, priced at the same market value. This study weighs renewable electricity generation and CDR as equally valuable products to the hypothetical market. Thus, they are co-produced simultaneously during the plant’s operational period, assuming a 90 % capacity factor. However, this may not always be the case and is discussed further in Section 4.3. 

For a first-order comparison, the reference prices of CO2, feedstock and electricity were set to $100/tCO2 (MBIE, 2021), $88/tonne (MPI, 2020) and $60/MWh (Keith et al., 2018), respectively. For all three of these parameters, sensitivity analysis was conducted and the results are discussed in Section 3. The price of electricity is expected to be quite variable based on location and market conditions. Thus, we vary this input between $0–120/MWh, encompassing the range of levelised renewable power purchasing agreement values in the western United States in 2021 (Bolinger et al., 2023). 

Additionally, the site-specific nature of some geothermal-BECCS parameters warrants further scrutiny. For example, biogenic CO2 emissions from the combustion of forestry residues range from 0.78 to 3.25 kg kg<sup>-1</sup> of feedstock depending on quality and combustion method (Puettmann et al., 2020). Thus, sensitivity analysis for these is also presented in Section 3. 

#### **3. Results** 

We generated 1000 samples of the three geothermal configurations provided in Section 2.2 (see Figs. 2-4), with random values drawn from uniform distributions of the key design parameters listed in Table 6. We have used the worldwide average of geogenic emissions (122 gCO2/ kWh) as a fixed parameter for this analysis. The techno-economic outputs are presented in Table 8, with uncertainty expressed as ± one standard deviation. 

The additional electricity generated via biomass superheating advantages geothermal-BECCS over geothermal-DACCS in terms of power production (16.4±<sup>1</sup> 1<sup>_._</sup> _._<sup>1</sup> 3<sup>and 8.3±0</sup> 0<sup>_._</sup> _._<sup>9</sup> 9<sup>MWe, respectively) for the same rate</sup> of geothermal production fluid (100 kg s<sup>-1</sup> ). However, because the CDR potential of geothermal-DACCS is not tied to the fixed carbon content within biomass and instead the thermal energy of the geothermal brine, geothermal-DACCS achieves higher CDR (negative emissions) at − 36.5±<sup>1</sup> 1<sup>_._</sup> _._<sup>5</sup> 8<sup>ktCO2/year when compared to -25</sup><sup>_._6±3</sup> 3<sup>_._</sup> _._<sup>7</sup> 1<sup>ktCO2/year esti-</sup> mated for geothermal-BECCS. 

The combination of these two phenomena leads to geothermalBECCS having a lower EI than geothermal-DACCS at − 184±<sup>29</sup> 37<sup>and</sup> − 566±<sup>80</sup> 86<sup>gCO2/kWh, respectively. In comparison, the respective posi-</sup> tive emissions intensities of coal and natural gas generation are about 400 and 1000 gCO2/kWh (EIA, 2021). We note that neither geothermal-BECCS nor geothermal-DACCS plants in this case study could sequester emissions at the same rate as a standalone BECCS plant (− 766 gCO2/kWh from Khallaghi et al., 2021; − 1260 gCO2/kWh from 

9 

_K.A. Titus et al._ 

_Geothermics 125 (2025) 103159_ 

**Table 8** 

Techno-economic model results for all configurations (100 kg s<sup>-1</sup> of geothermal fluid, CO2 price = $100/tonne, feedstock price = $88/tonne, electricity price = $60/MWh). 

||**Base**<br>**Geothermal**<br>**(Config. 1)**|**Geothermal-**<br>**BECCS (Config.**<br>**2)**|**Geothermal-**<br>**DACCS (Config.**<br>**3)**|
|---|---|---|---|
|Geogenic<br>emissions<br>(ktCO2/year)|13 ±<sup>1</sup><br>1|13 ±<sup>1</sup><br>1|13 ±<sup>1</sup><br>1|
|Transport<br>emissions<br>(ktCO2/year)|–|1_._9 ±<sup>0</sup><sup>_._6</sup><br>0_._7|–|
|Biomass burn rate<br>(kt/year)|–|23_._1 ±<sup>1</sup><sup>_._2</sup><br>1_._1|–|
|Gross<br>sequestration<br>(ktCO2/year)|–|43_._0 ±<sup>1</sup><sup>_._4</sup><br>6_._5|49_._9 ±<sup>0</sup><sup>_._7</sup><br>0_._8|
|Net emissions<br>(ktCO2/year)|13 ±<sup>1</sup><br>1|−<br>25_._6 ±<sup>3</sup><sup>_._7</sup><br>3_._1|−<br>36_._5 ±<sup>1</sup><sup>_._5</sup><br>1_._8|
|Plant capacity<br>(MWe)|13_._7 ±<sup>1</sup><sup>_._0</sup><br>1_._2|16_._4 ±<sup>1</sup><sup>_._1</sup><br>1_._3|8_._3 ±<sup>0</sup><sup>_._9</sup><br>0_._9|
|EI (gCO2/kWh)|122 ±<sup>0</sup><br>0|−<br>184 ±<sup>29</sup><br>37|−<br>566 ±<sup>80</sup><br>86|
|Total CAPEX ($M)|69 ±<sup>13</sup><br>12|94 ±<sup>12</sup><br>14|124 ±<sup>11</sup><br>11|
|LCOE ($/MWh)|89 ±<sup>11</sup><br>11|88 ±<sup>10</sup><br>10|181 ±<sup>16</sup><br>20|
|LCOS ($/tCO2)|–|241 ±<sup>71</sup><br>58|311 ±<sup>31</sup><br>29|
|LCCA ($/tCO2)|157 ±<sup>31</sup><br>27|122 ±<sup>16</sup><br>16|187 ±<sup>18</sup><br>17|

Yang et al., 2021, see Table 3). This reflects a fundamental limit of dissolving CO2 in geothermal brine when compared to conventional CCS that can inject a pure CO2 fluid. At fixed market conditions of $100/tonne CO2, $88/tonne feedstock, and $60/MWh electricity, geothermal-BECCS outperforms geothermalDACCS financially across LCOE ($88±10<sup>10/MWh versus $181±16</sup> 20<sup>/MWh,</sup> respectively) and LCCA ($122±<sup>16</sup> 16<sup>/tCO2versus $187±18</sup> 17<sup>/tCO2, respec-</sup> tively). There is however some potential for overlap for LCOS ($241±<sup>71</sup> 58<sup>/</sup> tCO2 and $311±<sup>31</sup> 29<sup>/tCO2, respectively).</sup> 

The breakdown of cost components of LCOE, LCOS and LCCA (Fig. 5) shows that CAPEX is the dominant contributor for all three configurations and carries the highest range of uncertainty. Even though all LCOE cost components for conventional geothermal add up to a lower value than for geothermal-BECCS, the offset of CDR revenues resulted in a lower overall LCOE. The LCOE cost components for geothermal-DACCS were not sufficiently offset by the higher overall CDR (− 36.5 ktCO2/ year±<sup>1</sup> 1<sup>_._</sup> _._<sup>5</sup> 8<sup>).</sup> 

Geothermal-BECCS also has an overall larger LCOS cost component than geothermal-DACCS at reference market conditions (Fig. 5b). Despite this, the greater relative plant capacity for equivalent geothermal fluid production (100 kg s<sup>-1</sup> ) of geothermal-BECCS over geothermal-DACCS (16.4 MWe±<sup>1</sup> 1<sup>_._</sup> _._<sup>1</sup> 3<sup>vs 8.3 MWe±0</sup> 0<sup>_._</sup> _._<sup>9</sup> 9<sup>, respectively)</sup> allowed the former to offset its costs to a greater degree, resulting in a more cost competitive CDR technology. 

Geothermal-BECCS was again advantaged in overall carbon abatement with a lower LCCA value ($122/tCO2 ±<sup>16</sup> 16<sup>) than either conven-</sup> tional geothermal ($157/tCO2 ±<sup>31</sup> 27<sup>) and geothermal-DACCS ($187/tCO2</sup> ±<sup>18</sup> 17<sup>). This was due to the relatively lower CAPEX contribution (Fig. 5c)</sup> compared to the other two configurations. This can be interpreted as each $1 of capital investment in geothermal-BECCS yielding the greatest overall carbon abatement from a high fossil fuel-mix energy system. 

We calculated the 33rd, 50th and 66th percentile results for LCOE and LCOS for varying market prices (Fig. 6). The financial performance of all three configurations is tied to the market price of CO2, which is a cost for base geothermal and a revenue when CDR is included. Thus, the sensitivity of LCOE to the CO2 price, varying from $0 to $200/tCO2, was investigated (Fig. 6a). LCOE values for both geothermal-BECCS and -DACCS decrease as CDR revenues are maximised at higher carbon prices. Geothermal-BECCS produces the lowest-cost electricity of the 

two options across the range tested. As the market price of CO2 increases, the cost competitiveness of electricity generated via geothermal-BECCS and geothermal-DACCS improves. Conversely, conventional geothermal becomes more expensive due to the effective carbon tax of geogenic emissions. 

When considering the median results, geothermal-BECCS is more cost-effective than conventional geothermal at a CO2 price of around ~ $100/tCO2. However, the uncertainty in the geothermal-CDR model lends to a much wider area of overlap (Fig. 6a) between ~$30–170/ tCO2. Beyond the latter price point, geothermal-BECCS is decidedly more cost-competitive at producing electricity. 

For the configurations and CO2 price range considered in this study, there is no point where geothermal-DACCS is more cost-competitive at electricity generation than geothermal-BECCS. A different, more nuanced story arises concerning net carbon sequestration. In certain circumstances, carbon removal may take priority over electricity generation (Bistline and Blanford, 2021). In this case, the cheapest method of CDR is preferred over the cheapest production of electricity – this is quantified via LCOS. 

The financial performance of both geothermal CDR configurations is sensitive to the price of electricity. LCOS values for geothermal-BECCS and geothermal-DACCS can overlap at electricity prices between $0–65/MWh, with both technologies seemingly expensive and infeasible for net carbon removal at this range. 

However, geothermal-BECCS has a steeper slope than geothermalDACCS and is thus more sensitive to the market price of electricity. Even at an electricity price of $120/MWh, only samples between the 33rd and 50th percentile of geothermal-DACCS achieve a reasonable LCOS of $200/tCO2. Conversely, at the same price point, the electricity revenue of geothermal-BECCS is high enough to achieve a negative cost to sequester biogenic CO2 

(-$58/tCO2±<sup>43</sup> 60<sup>).</sup> 

Upon further investigation of which geothermal-BECCS design parameters are responsible for the wide range of financial performance, we find that the biogenic CO2 emissions factor and bioenergy CAPEX are the largest contributors (Fig. 7). Of the two, the biogenic CO2 emissions factor was more influential to LCOS, leading to an almost 40 % change in the output when considering the low-case value (33rd percentile). This indicates that a feedstock or combustion process that results in a low yield of CO2 is not making effective use of the sequestration capacity of geothermal brine and is therefore less able to recover feedstock costs. 

A very high CO2 emissions factor on the other hand leads to geothermal-BECCS surpassing the sequestration capacity of geothermal brine at 50 bar. This requires some amount of carbon-neutral biogenic CO2 to be vented rather than monetised. However, due to the choice of the oxy-combustion process, there is still an oxygen load for this vented CO2, incurring more overall costs without any monetary gains. This is reflected in the slight increase in LCOE (Fig. 7a), LCOS (Fig. 7b) and LCCA (Fig. 7c) as the biogenic emissivity factor trends upwards from the median value. This could be an important consideration for the selection of feedstock type and combustion process when optimising geothermalBECCS for a specific geothermal system. Alternatively, excess biogenic CO2 could potentially be monetised through different means. 

With the values reported from literature (Table 6), neither ASU load nor biomass heating value deviates _>_ 10 % from the median when considering their 33rd and 66th percentile values. In turn, they have shallow slopes and contribute very little to the percent changes to LCOE, LCOS and LCCA (Fig. 7). 

#### **4. Discussion** 

_4.1. Opportunities and challenges for geothermal-CDR in mature geothermal economies_ 

The geothermal-CDR model presented in this study can be used to 

10 

_Geothermics 125 (2025) 103159_ 

_K.A. Titus et al._ 

**Fig. 5.** (a) Electricity cost and CDR revenue component analysis of LCOE for the three geothermal plant designs, (b) CDR cost and electricity revenue component analysis for LCOS for the two geothermal carbon removal designs, and (c) carbon abatement cost component analysis for LCCA for the three geothermal plant designs. Black lines denote the uncertainty range between 33rd and 66th percentile. 

11 

_K.A. Titus et al._ 

_Geothermics 125 (2025) 103159_ 

**Fig. 6.** Uncertainty quantification for (a) LCOE for changing CO2 market prices for all three geothermal configurations. Reference price of $88/tonne for feedstock and $60/MWh for electricity used. Sampling 1000 iterations for each of $0, 100 and 200/tCO2; and (b) Uncertainty quantification for LCOS for changing electricity market prices for geothermal-CDR configurations. Sampling 1000 iterations for each of $0, 60 and 120/MWh. Reference market prices of $100/tCO2 for CO2, and $88/tonne for feedstock used. 

formulate and compare geothermal-CDR case studies in mature geothermal economies. For example, New Zealand generates ~ 1 GWe of conventional geothermal in 2022 but lacks either direct or biomassbased CDR activities. New Zealand’s Taupo Volcanic Zone (TVZ) hosts ¯ multiple high-temperature, low gas content fields where geogenic CO2 emissions intensities average 75 gCO2/kWh (McLean et al., 2020). This means that separated geothermal brine is likely to have sufficient thermal energy to facilitate the heat load for DACCS. It also means that 

relatively low geogenic CO2 should not be a prohibitive emissions consideration in the design of a carbon-negative electricity generation cycle. 

Geothermal-biomass hybridization has previously been investigated in the TVZ (Thain and DiPippo, 2015) due to the abundance of proximate forestry activities (MPI, 2020). One example is the Kaingaroa forest, which is about 80 km away from Taupo township. This is in sharp ¯ contrast to Iceland, another mature geothermal economy, where despite 

12 

_Geothermics 125 (2025) 103159_ 

_K.A. Titus et al.                                                                                                                                                                                                                                 Geothermics_ 

**Fig. 7.** Percent change in (a) LCOE, (b) LCOS and (c) LCCA with respect to percent deviation of key design parameters from the median for geothermalBECCS. Sampling 1000 iterations for each parameter in the range of 33rd and 66th percentile from reported values. Reference market prices of $100/tCO2 for CO2, $88/tonne for feedstock and $60/MWh for electricity used. 

the techno-economic feasibility of geothermal-DACCS, geothermal-BECCS would be logistically challenging due to very minimal forestry resources (Palsd´ ottir et al., 2022´ ). 

Developing the configurations shown in Section 2.2 (see Figs. 2-4) at a typical high-temperature system in the TVZ (geothermal production of 100 kg s<sup>-1</sup> at 275<sup>◦</sup> C), conventional geothermal would yield 13.7 MWe. Geothermal-BECCS and geothermal-DACCS would instead yield 16.5 MWe and 7.8 MWe respectively. 

With a geogenic emissions intensity of 75 gCO2/kWh, all configurations vent 8.1 ktCO2/year from the cooling tower. The geothermalBECCs design would source 25.4 kt/year of forestry residues for biomass hybridization and incur 0.21 tCO2/year of transport emissions for feedstock sourced from 80 km away. 

Both theoretical geothermal-BECCS (LCOE = $63/MWh, LCOS = $111/tCO2, LCCA = $135/tCO2) and geothermal-DACCS (LCOE = $131/MWh, LCOS = $206/tCO2, LCCA = $185/tCO2) plants outperform their respective global median values shown in Table 8. GeothermalBECCS and geothermal-DACCS achieve net negative emissions of 32.3 and 41.0 ktCO2/year. Assuming a capacity factor of 90 %, the corresponding emission intensities are − 248 and − 663 gCO2/kWh, respectively. 

Pathways to scalability often use 1 MtCO2/year of CDR as an order of magnitude to consider feasibility. For geothermal-BECCS to achieve a CDR at this scale in New Zealand, ~3100 kg s<sup>-1</sup> of geothermal fluid would be needed, supporting a hybrid plant capacity of 511 MWe. Assuming an average geothermal well mass flow rate of 50 kg s<sup>-1</sup> (DiPippo, 2016), this corresponds to about 62 wells. For context, in 2008 New Zealand’s Wairakei Power Station with an installed capacity of 175 MWe had 59 active production wells (Bixley et al., 2009). 

For geothermal-DACCS to achieve the same scale of CDR, approximately 2440 kg s<sup>-1</sup> of geothermal fluid (49 wells) would be needed. Accounting for the parasitic loads of air capture from over 24 000 collectors, the net plant capacity would be ~190 MWe. The total upfront investment costs for these plants are similar: $2.2 billion for geothermalBECCS and $2.3 billion for geothermal-DACCS (given the parameters assumed for the case studies in section 3.2). 

A geothermal-BECCS plant sequestering 1 MtCO2/year would require about 790 kt/year of feedstock for the energy content assumed here (16 MJ/kg from the Kaingaroa forest; Thain and DiPippo, 2015). This is reasonable, considering New Zealand currently generates 3 Mt/year of unused forestry residues (MPI, 2020). 

If the country’s next 1 GWe of geothermal generation was comprised solely of geothermal-BECCS, approximately 6000 kg s<sup>-1</sup> of geothermal fluid (121 wells) and 1.5 Mt/year of feedstock would be required, resulting in ~2 MtCO2/year in CDR and costing $4.4 billion in capital investment. For geothermal-DACCS to reach that same capacity, over double the amount of geothermal fluid would be required (12 800 kg s<sup>-1</sup> , 256 wells) to service the large associated parasitic load. The capital investment costs would reach $12.3 billion but the CDR potential would rise to 5.2 MtCO2/year. These are important thresholds for New Zealand’s decarbonisation context. The first emissions budget (290 MtCO2e between 2022 and 2025) is expected to be overshot by 11.5 MtCO2e, roughly 3.8 MtCO2/year. Negative emissions via country-wide deployment of geothermal-BECCS or DACCS could offset this in ~6 and 2 years, respectively. 

New Zealand’s geothermal brines can facilitate high net CDR rates due to their generally lower than global average geogenic CO2 content. Some geothermal regions across the world may experience an inability to sequester atmospheric or biogenic emissions at the rates required to offset their natural geogenic CO2 emissions. 

#### _4.2. Effect of geogenic CO2 presence on geothermal-CDR performance_ 

Consideration of the geogenic emissions context is important. For geothermal systems with high concentrations of CO2 being brought up in the geothermal fluid, it is possible for geothermal-BECCS and 

13 

_Geothermics 125 (2025) 103159_ 

_K.A. Titus et al._ 

geothermal-DACCS to no longer facilitate negative emissions. For example, geothermal systems in Türkiye tend to have EIs rivalling coal power plants (Aksoy, 2014). 

We calculated net emission intensities for both geothermal-BECCS and geothermal-DACCS, using the median parameters presented in Table 6, across a range of base EI values from 0 to 1000 gCO2/kWh (Fig. 8a). Net negative emissions are only maintained when the base EI is below ~400 and ~450 gCO2/kWh for geothermal-BECCS and geothermal-DACCS, respectively. These values are much higher than the worldwide average EI of geothermal fields at 122 gCO2/kWh (Bertani and Thain, 2002), but lower than the average EI of fields in Türkiye (1000 gCO2/kWh), potentially ruling out direct or biomass-based CDR in that region. 

LCCA is also sensitive to the base geogenic EI of the geothermal system. LCCA considers the displacement effect of CO2 in the system (Eq. (4)), meaning geothermal systems with inherently high geogenic emissions are less effective at abating fossil emissions. Presently, an LCCA above $200/tCO2 is considered expensive (Friedmann et al., 2020) and 

**Fig. 8.** Sensitivity analysis of the base field’s geogenic emissions on (a) net EI and (b) LCCA for geothermal carbon removal designs. Reference market prices of $100/tCO2 for CO2, $88/tonne for feedstock and $60/MWh for electricity used. 

indicative of cheaper alternatives for decarbonisation. 

For the high fossil-generation electricity that needs abatement (Table 6), the base geothermal plant has an LCCA of $200/tCO2 when geogenic CO2 emissions exceed ~210 gCO2/kWh (Fig. 8b). This is almost double the global average geogenic emissions intensity from geothermal fields. Above this threshold, traditional geothermal generation can be considered an expensive technology for displacing natural gas generation. 

Geothermal-DACCS crosses the same cost threshold at a base geogenic CO2 EI of 180 gCO2/kWh. However, geothermal-DACCS remains less cost-competitive than conventional geothermal until the geogenic emissions intensity reaches 250 gCO2/kWh, meaning that conventional geothermal power plants are preferred for regions with high fossil penetration and low-gas geothermal resources. 

Given the specific plant designs investigated in this study, Geothermal-BECCS is ultimately the most cost-effective of the three configurations at displacing natural gas emissions, only crossing the $200/tCO2 threshold for geothermal systems whose geogenic EI exceeds ~620 gCO2/kWh. By this point, the net emissions intensity of the geothermal-BECCS plant is no longer negative (Fig. 8a), indicating that there is overall less CO2 emitted from the energy system, but no net removal is taking place. 

This makes both BECCS and DACCS activities potentially unsuitable for geothermal fields with outlier emissions. In regions with high renewable penetration and low fossil generation, geothermal-BECCS and geothermal-DACCS may instead need to be deployed to offset the emissions of hard-to-abate sectors such as cement production and agriculture. 

In contrast to geogenic emissions, biomass transport distance has only a minor effect on the CDR performance of geothermal-BECCS plants. Every 100 km increase in biomass transport distance (by trucking) contributes only 2 gCO2/kWh to the total _EI_ . Thus, the feedstock would need to be transported 12 400 km before the process was no longer carbon negative. Finally, the site-specific brine chemistry of geothermal systems is another factor to consider when evaluating the CDR potential of geothermal reinjectate (Spycher et al., 2003). 

_4.3. The importance of bioenergy capex cost reduction for geothermalBECCS_ 

We showed in Section 3 (Fig. 8), that bioenergy CAPEX was one of the most significant contributors to changes in LCOE, LCOS and LCCA for geothermal-BECCS. As a design parameter, bioenergy CAPEX is sitedependent and is thus difficult to ascertain before individual plant feasibility analysis. 

CAPEX rates for bioenergy tend to be higher in North America and Europe than in China and India (IRENA, 2021). This is significant for geothermal-BECCS because the latter nations have less abundant geothermal resources compared to the former. It suggests a potential nation-level mismatch between geothermal opportunity and the economic means to exploit bioenergy. 

As an example, the bioenergy plant with the highest CAPEX rate in 2021 was a European plant that used wood waste products. It had a CAPEX rate of $7694/kWe, which is over three times the global average (IRENA, 2021). If this high value was used for the geothermal-BECCS configuration instead of the median value ($4073/kWe, see Section 2.2), the total CAPEX would reach $114 million. This is beyond the 66th percentile value reported in Table 8 ($105 million). 

Accordingly, LCOE, LCOS and LCCA increase to $104/MWh, $278/ tCO2 and $136/tCO2, respectively. However, these values are still favourable when compared to the 50th percentile values reported for geothermal-DACCS (LCOE = $181/MWh, LCOS = $311/tCO2, and LCCA = $187/tCO2). Instead, conventional geothermal would be advantaged in cost-effective electricity generation ($89/MWh) but remains outperformed by geothermal-BECCS at overall carbon abatement ($157/tCO2). Thus, with a discernible opportunity cost between the two 

14 

_Geothermics 125 (2025) 103159_ 

_K.A. Titus et al.                                                                                                                                                                                                                                 Geothermics_ 

plants, the configuration selected would depend on the contextual priorities within specific geothermal economies. 

#### _4.4. Retrofit of existing geothermal plants for CDR_ 

A major cost component of geothermal-BECCS is the high upfront capital embodied in turbines, the above-ground pipe network, and the well infrastructure. Rather than investing in new infrastructure, a lowercost option could be to retrofit an existing geothermal plant that has already financed these components. Although a practical retrofit design would need to be tailored to the specifics of the original plant, we can obtain an initial cost estimate through a modification of the LCCA calculation (Eqn. (6)): 

where _C_<sup>ʹ</sup> 1<sup>is the generation-levelised cost for geothermal-BECCS (all</sup> CAPEX, OPEX & fuel costs) in $/MWh, _C_<sup>ʹ</sup> 0<sup>is the generation-levelised</sup> cost of the original geothermal plant (geothermal infrastructure CAPEX, geothermal OPEX & net tax for geogenic emissions), _E_<sup>ʹ</sup> 1<sup>is the</sup> generation-levelised emissions of the geothermal-BECCS plant (net negative, accounting for geogenic emissions offset) in kgCO2/MWh, and _E_<sup>ʹ</sup> 0<sup>is the generation-levelised emissions of the original geothermal plant.</sup> Because the two plants have different nameplate capacities, a fair comparison can only be made on a per unit of generated electricity basis. Hence, we have used cost and emissions terms scaled by net generation from the associated plant, i.e., _E_<sup>ʹ</sup> 1<sup>=</sup><sup>_E_1</sup><sup>_/G_1 where</sup><sup>_G_1 is the net electricity</sup> generated by the geothermal-BECCS plant in MWh. All terms are discounted over the plant lifetime. 

This formulation of LCCA is different compared to Eqn. (5) through the inclusion of the term _C_ 0<sup>ʹ</sup> . Eqn. (5) assumes that the costs of the BAU natural gas plant are not incurred by the geothermal plant owner and therefore should not be considered. However, for a retrofit, the geothermal plant owner incurs costs from the BAU and the new configuration. Therefore, any costs avoided, such as future geogenic emissions or existing capital, should be deducted. 

Using the median values of parameters shown in Table 6, the generation-levelised cost ( _C_<sup>ʹ</sup> 0<sup>) of the geothermal plant is $89/MWh and</sup> this is deducted from the equivalent geothermal-BECCS cost ( _C_<sup>ʹ</sup> 1<sup>) of</sup> $106/MWh. The emissions intensities of the two plants are 122 and − 231 kgCO2/MWh, respectively. Hence, the LCCA for retrofit is $46 for each tonne of CO2 abated under reference market conditions (Table 7). This is substantially lower than the $119/tCO2 ±<sup>18</sup> 15<sup>for a greenfield</sup> geothermal-BECCS plant (Table 8) and highlights the major advantage of retrofits. 

For geothermal-BECCS, retrofit LCCA varies linearly with the fuel price and drops to $4/tCO2 if forestry residues can be sourced at zero cost. Conversely, an increase in fuel price would result in a costlier decarbonization endeavour. Thus, we emphasise that the use of existing geothermal infrastructure and sourcing low-cost biomass feedstocks are key to cost-effective decarbonization via geothermal-BECCS. 

#### _4.3. Assessing geothermal-CDR as a decarbonisation tool_ 

In terms of overall decarbonisation, we found that the displacement effect of negative emissions from geothermal-CDR is far stronger than the lower carbon emissions from conventional geothermal ( _>_ 0 gCO2/ kWh), even when there is less renewable electricity produced in the case of geothermal-DACCS. 

Geothermal-BECCS is advantaged over conventional geothermal and geothermal-DACCS because of the net increase in electricity production but requires a reliable source and quality of feedstock. We show that the biogenic CO2 content of feedstock and the regional contexts surrounding bioenergy CAPEX contribute to significant uncertainty when calculating LCOS. Furthermore, the role of bioenergy in climate change mitigation is 

not without concerns (Sandalow et al., 2021), namely competition with food production for land use and supply chain uncertainties. If waste biomass products are not readily available, freshwater availability to grow feedstocks may also be a limiting factor. Thus, site-specific analysis is crucial to determine the feasibility of geothermal-BECCS. 

For example, California is forecast to generate up to 24 Mt/year of forestry residues by 2025 (Baker et al., 2020). California already has a large amount of geothermal with an installed capacity of 2.8 GWe (Tarroja et al., 2018). In a scenario where this was doubled through the construction of new geothermal-BECCS plants, this would induce a 4.3 Mt/year demand for forestry residues (about 18 % of forecast resource) and result in net negative emissions of approximately 5.5 MtCO2/year. 

In contrast, the implementation of geothermal-BECCS is likely to be difficult in Iceland. This is because, with only 2 % of the country’s land area covered by forests (Palsd´ ottir et al., 2022´ ), biomass feedstock is likely to be limited. In this case, and in other locales where biomass is unavailable or prohibitively expensive, geothermal-DACCS would be the lone pathway for geothermal-CDR. 

Geothermal-DACCS side-steps these risks and sequesters more CO2 per rate of electricity generated. However, to reach an equivalent generation for a given resource temperature, geothermal-DACCS requires higher fluid extraction from and reinjection into the system. These activities are not without environmental impacts, such as subsidence due to local depressurization (Allis, 2000) or induced seismicity around reinjection wells (Majer and Peterson, 2007). Although these are challenges for any geothermal development, they will be exacerbated wherever plant design imposes a higher physical load on the geothermal system. 

The CDR potential of Geothermal-DACCS is constrained by thermal energy available for use in the separated brine. For geothermal-DACCS, the separated brine must be delivered at temperatures ~100<sup>◦</sup> C. This depends in turn on both the reservoir temperature that the geofluid is sourced from as well as the condenser temperature (DiPippo, 2016). For the condenser used in this study (43.85<sup>◦</sup> C), the minimum reservoir temperature that can be used to produce separated brine at 100<sup>◦</sup> C is 156.15<sup>◦</sup> C. Notably, there is an inherent opportunity cost to use the brine’s thermal energy for DACCS rather than heat recovery for greater power generation. 

The efficiency of geothermal power plants typically declines with reservoir temperature, thus the parasitic load of DACCS will grow proportionally for lower temperature systems ( _<_ 250<sup>◦</sup> C). Thus, it can be reasonably concluded that Geothermal-DACCS is best suited for highertemperature geothermal systems, as is the case at Hellisheidi (Ratouis et al., 2022). 

However, electricity provision may not be a priority in all contexts. For some electricity markets (e.g., California) with a large share of intermittent generation, periods of mismatch between generators could lead to negative electricity prices (Denholm et al., 2015). This may traditionally disadvantage conventional geothermal, which typically must operate _>_ 80 % of the time to recuperate high upfront costs (IRENA, 2021; Ricks et al., 2022). If both geothermal-BECCS and geothermal-DACCS are run during these periods, the geothermal plant operator could still generate revenue through CDR. 

In certain circumstances, the CDR value of a given biomass feedstock could outweigh its electricity value, a concept known as the Aines Principle (Sandalow et al., 2021). Thus, geothermal-BECCS cycles that produce biochar or biohydrogen (through oxy-gasification) could be valuable to explore in markets where electricity generation is highly competitive. In theory, a geothermal-BECCS cycle that co-produces electricity, heat, biohydrogen and CDR is possible, but its economic feasibility will depend on site-specific conditions and market demands for those outputs. 

Both geothermal-BECCS and geothermal-DACCS must consider the chemical breakthrough potential of injected CO2 into the geothermal production zone (Kaya et al., 2011; Kaya and Zarrouk, 2017). In fields with very favourable geological mineralisation, such as Hellisheidi, 

15 

_Geothermics 125 (2025) 103159_ 

_K.A. Titus et al._ 

almost all injected CO2 may be mineralised before reaching the production zone (Gunnarsson et al., 2018). For fields lacking high mineralisation rates careful well placement will be important to prevent premature breakthrough over the life of the geothermal plant (Kaya and Zarrouk, 2017). A large distance between the reinjection and production zone can mitigate chemical breakthrough till the later stages ( _>_ 10 years) of field exploitation (Kaya and Zarrouk, 2017). Nevertheless, physical monitoring and reactive transport modelling of injected CO2 will remain an important part of reservoir management for geothermal-CDR projects. 

Beyond naturally occurring hydrothermal fields, geothermal-based CDR could be applied to engineered geothermal systems (EGS). CO2 can be injected into high-temperature, confined formations to mine the thermal energy of the system and be reproduced at supercritical conditions (Brown, 2000; Pruess, 2006). Some amount of this CO2 is expected to be stored in the reservoir (Pruess, 2006), though the extent of this storage would depend on the site-specific geology of the system. Under the Biden-Harris administration, the US Department of Energy has provided $3 million in funding for a 10 GWe CO2-EGS project paired with DACCS (Department of Energy, 2024; Zhang et al., 2024). The expected storage potential of this project is 100 MtCO2/year. Future geothermal developments of differing configurations may therefore present attractive CDR pathways in the coming decades. 

Optimisation between cost-effective electricity generation and CDR are difficult decisions to make when choosing between decarbonisation initiatives. Importantly, the key metrics used in this study (LCOE, LCOS, LCCA & EI) are best considered collectively because no single one quantifies the whole picture. For example, LCOE does not recognise overall CO2 reduction in the system (Friedmann et al., 2020) and so has limited utility when informing decarbonisation policy. In contrast, demands from a dynamic electricity market, with daily and seasonal fluctuations in demand, are not captured in either LCOS or LCCA (Lehtveer and Emanuelsson, 2021). Additionally, CDR activities may be incentivised only in periods when electricity prices are high. 

LCCA may be best suited to governments or concerned with decarbonizing their activities through technology switching. Thus, selecting the original emitter or ‘business as usual’ case becomes critical to the analysis. For example, if the three configurations considered here were used to instead displace an equivalent-sized coal plant (1000 gCO2/ kWh), the denominator in Eqn. (4) would be significantly larger and the three configurations would all appear more cost-effective. 

Unlike LCCA, the EI doesn’t capture the efficacy of potential CO2 displaced by increased renewable power in the overall energy system. For example, geothermal-BECCS removes 20 % less CO2 than geothermal-DACCS but it produces over two times the low-emissions electricity. The CO2 displacement effect of the increased electricity is not reflected in the EI metric. This could be distorting in settings where affordable low-emissions electricity is a more valuable resource than CDR. 

Given the improved performance, a global inventory of retrofit potential for geothermal-CDR systems that characterises electricity generation, annual CDR potential and feedstock availability could be a valuable next step in supplementing decarbonisation initiatives in accordance with AR6 (IPCC, 2023). However, careful consideration would need to be given to minimise CO2 breakthrough corrosion of plant or wellfield assets. Additionally, increased power from superheated steam may be capped by existing turbine overrating constraints, lest higher investment costs be incurred for redesign and replacement. 

All CDR technologies are subject to social, policy and market framework challenges (Gough et al., 2018). Robust policy targets, akin to those of solar-PV development from 1996 to 2005, will be critical if CDR is to be implemented at scale (Breyer et al., 2019). Lowering CAPEX rates for both geothermal-BECCS and geothermal-DACCS should be a key endeavour when pursuing CDR opportunities in geothermal systems, as CAPEX has the highest weighting by component across LCOE, LCOS and LCCA for both geothermal-BECCS and geothermal-DACCS. 

Finally, negative emissions technologies must be deployed in conjunction with, and not in lieu of, conventional emissions reduction methods. 

#### **5. Conclusion** 

High-temperature, low-gas hydrothermal systems have the potential for cost-competitive direct and biogenic carbon dioxide removal. Using in-line dissolution of emissions in reinjection wells, geothermal combined either with BECCS or DACCS becomes a technology for meeting both low-emissions electricity and CDR targets as required in IPCC pathways for climate change mitigation. Here, we quantified these processes for a hypothetical high-temperature geothermal system using a range of globalised parameters presented in the literature. 

At reference market conditions, geothermal-BECCS outperforms geothermal-DACCS financially in terms of electricity generation (LCOE values of 88±<sup>10</sup> 10<sup>/MWh vs $181±16</sup> 20<sup>/MWh) and overall carbon abatement</sup> (LCCA values of $122±<sup>16</sup> 16<sup>/tCO2vs $187±18</sup> 17<sup>/tCO2, respectively). The</sup> two technologies are closer in terms of carbon sequestration (LCOS values of $241±<sup>71</sup> 58<sup>/tCO2vs $311±31</sup> 29<sup>/tCO2) with potential overlap at</sup> lower electricity prices. 

In a mature geothermal economy such as New Zealand, both geothermal-BECCS and geothermal-DACCS could achieve CDR rates of 1 MtCO2/year at investment costs of $2.2 billion (512 MWe, 788 kt/year of forestry residues) and $2.3 billion (190 MWe), respectively. This could be met with the same number of production wells already available at, for example, the Wairakei Power Station in New Zealand. Country-wide deployment of geothermal-BECCS and geothermalDACCS could overcome New Zealand’s first carbon budget deficits in just 6 and 2 years, respectively, in an important consideration for the country’s nationally determined contributions towards net zero. 

Geothermal-DACCS requires no fuel source but may be limited by sufficient geothermal resource temperature. Successful deployment in the future will depend on minimizing parasitic loads and capturing infrastructure costs through technological improvement. GeothermalBECCS could theoretically be applied to lower-temperature geothermal systems but requires suitable and available feedstocks and reductions in boiler capital costs. There may be scope for ancillary biohydrogen production to complement electricity generation, a prospect that warrants further investigation. 

In high-gas geothermal systems (400–1000 gCO2/kWh), such as those found in Türkiye, both geothermal-BECCS and geothermal-DACCS may be wholly unsuitable if negative CO2 emissions are the main priority. In these systems, the reinjection of geogenic CO2 must take priority over direct or biomass-based CO2 removal. 

We showed that under the right market incentives, geothermal-based CDR schemes can be financially viable and strategically valuable by offering dual decarbonisation through grid emissions displacement and residual CO2 abatement at similar costs to conventional geothermal power plants. However, for geothermal-BECCS, the bioenergy CAPEX and biogenic CO2 emissions of the feedstock may play a critical role in the economic feasibility of a given project. 

Furthermore, cost-effective CDR in the near term from geothermalBECCS and geothermal-DACCS will require the refurbishment of existing geothermal infrastructure. We conclude that the increase in electricity production for geothermal-BECCS makes it more cost-effective than geothermal-DACCS at the reference market conditions of this study. 

#### **CRediT authorship contribution statement** 

**K.A. Titus:** Conceptualization, Methodology, Software, Validation, Formal analysis, Investigation, Data curation, Writing – original draft, Visualization. **David Dempsey:** Writing – review & editing, Supervision, Methodology, Formal analysis, Conceptualization, Funding acquisition, Project administration, Resources. **Rebecca A.M. Peer:** Conceptualization, Methodology, Writing – review & editing, 

16 

_Geothermics 125 (2025) 103159_ 

_K.A. Titus et al._ 

Supervision. **Rosalind Archer:** Writing – review & editing, Conceptualization, Methodology. 

#### **Declaration of competing interest** 

The authors declare that they have no known competing financial interests or personal relationships that could have appeared to influence the work reported in this paper. 

#### **Data availability** 

Data will be made available on request. 

#### **Acknowledgements** 

This work was supported by the New Zealand government under the MBIE contract UOAX2213 for the Endeavour research program “Adapting to climate change through stronger geothermal enterprises”. We also extend our thanks to the two anonymous reviewers whose comments improved this work. 

#### **References** 

- Addison, S.J., Winick, J.A., Sewell, S.M., Buscarlet, E., Hernandez, D., Siega, F.L., 2015. Geochemical response of the Rotokawa reservoir to the first 5 years of Nga Awa Purua production. In: Proceedings 37th New Zealand Geothermal Workshop, 18, p. 20. 

- Aksoy, N., 2014. Power generation from geothermal resources in Turkey. Renew. Energy 68, 595–601. 

- Allis, R.G., 2000. Review of subsidence at wairakei field, New Zealand. Geothermics 29 (4–5), 455–478. 

- Baker, S.E., Stolaroff, J.K., Peridas, G., Pang, S.H., Goldstein, H.M., Lucci, F.R., … & McCormick, C. (2020). _Getting to neutral: options for negative carbon emissions in California_ (No. LLNL-TR-796100). Lawrence Livermore National Lab.(LLNL), Livermore, CA (United States); Univ. of California, Berkeley, CA (United States); Negative Carbon Consulting, Half Moon Bay, CA (United States); Univ. of Calgary, AB (Canada); Univ. of Queensland, Brisbane, QLD (Australia); Univ. of California, Davis, CA (United States); Worcester Polytechnic Institute, MA (United States); Georgetown Univ., Washington, DC (United States); Valence Strategic, Washington, DC (United States). 

- Bayer, P., Rybach, L., Blum, P., Brauchler, R., 2013. Review on life cycle environmental effects of geothermal power generation. Renew. Sustain. Energy Rev. 26, 446–463. 

- Beckers, K.F., Lukawski, M.Z., Aguirre, G.A., Hillson, S.D., Tester, J.W., 2015. Hybrid low-grade geothermal-biomass systems for direct-use and co-generation: from campus demonstration to nationwide energy player. In: Proceedings, 40th workshop on geothermal reservoir engineering. Stanford, California. Stanford University. 

- Bertani, R., Thain, I., 2002. Geothermal power generating plant CO2 emission survey. IGA news 49, 1–3. 

- Bistline, J.E., Blanford, G.J., 2021. Impact of carbon dioxide removal technologies on deep decarbonization of the electric power sector. Nat. Commun. 12 (1), 3732. 

- Bixley, P.F., Clotworthy, A.W., Mannington, W.I., 2009. Evolution of the Wairakei geothermal reservoir during 50 years of production. Geothermics. 38 (1), 145–154. 

- Bolinger, M., Millstein, D., Gorman, W., Dobson, P., Jeong, S., 2023. Mind the gap: Comparing the net value of geothermal, wind, solar, and solar+ storage in the Western United States. Renewable Energy 205, 999–1009. 

- Bonafin, J., Pietra, C., Bonzanini, A., Bombarda, P., 2019. CO2 emissions from geothermal power plants: evaluation of technical solutions for CO2 reinjection. In: Proceedings of the European Geothermal Congress. 

- Breyer, Christian, Fasihi, Mahdi, Bajamundi, Cyril, Creutzig, Felix, 2019. Direct air capture of CO2: a key technology for ambitious climate change mitigation. Joule 3 (9), 2053–2057. 

- Brown, D., 2000. A hot dry rock geothermal energy concept utilizing supercritical CO2 instead of water. In: Proceedings, 25th Workshop on Geothermal Reservoir Engineering. Stanford University, pp. 233–238. 

- Cheng, F., Small, A.A., Colosi, L.M., 2021. The levelised cost of negative CO2 emissions 

from thermochemical conversion of biomass coupled with carbon capture and 

storage. Energy Convers. Manage 237, 114115. 

- Climeworks. (2024a). Orca: the first large-scale plant. Retrieved Jul 2024, from climeworks.com: https://climeworks.com/plant-orca. 

- Climeworks. (2024b). Mammoth: our newest facility. Retrieved Jul 2024, from climeworks.com: https://climeworks.com/plant-mammoth. 

- Dal Porto, F., Pasqui, G., Fedeli, M., 2016. Geothermal power plant production boosting by biomass combustion: cornia 2 case study. In: Proceedings of the European Geothermal Congress. 

Denholm, P., O’Connell, M., Brinkman, G., Jorgenson, J., 2015. Overgeneration from Solar Energy in california. a Field Guide to the Duck Chart (No. NREL/TP-6A2065023). National Renewable Energy Lab.(NREL), Golden, CO (United States). 

Department of Energy, 2024. Project Selections for FOA 2735: Regional Direct Air Capture Hubs – Topic Area 1 (Feasibility) and Topic Area 2 (Design). Office of Fossil Energy and Carbon Management. Retrieved Aug 2024, from. https://www.energy. gov/fecm. 

Deutz, S., Bardow, A., 2021. Life-cycle assessment of an industrial direct air capture process based on temperature–vacuum swing adsorption. Nat. Energy 6 (2), 203–213. 

Dickson, M.H., Fanelli, M., 2013. Geothermal energy: Utilization and Technology. Routledge. 

Dinca, C., Slavu, N., Cormos¸, C.C., Badea, A., 2018. CO2 capture from syngas generated by a biomass gasification power plant with chemical absorption process. Energy 149, 925–936. DiPippo, R., 2016. Geothermal Power Plants: Principles, Applications, Case Studies and Environmental Impact, 4th ed. Elsevier Science. 

Duan, Z., Sun, R., 2003. An improved model calculating CO2 solubility in pure water and aqueous NaCl solutions from 273 to 533 K and from 0 to 2000 bar. Chem. Geol. 193 (3–4), 257–271. EIA. (2021). Annual Energy Outlook 2021. https://www.eia.gov/outlooks/aeo/. Emenike, O., Michailos, S., Finney, K.N., Hughes, K.J., Ingham, D., Pourkashanian, M., 2020. Initial techno-economic screening of BECCS technologies in power generation for a range of biomass feedstock. Sustain. Energy Technol. Assess. 40, 100743. Esposito, R.A., Kuuskraa, V.A., Rossman, C.G., Corser, M.M., 2019. Reconsidering CCS in the US fossil-fuel fired electricity industry under section 45Q tax credits. Greenhouse Gases: Science Technol. 9 (6), 1288–1301. Fasihi, M., Efimova, O., Breyer, C., 2019. Techno-economic assessment of CO2 direct air capture plants. J. Clean. Prod. 224, 957–980. 

- Fridriksson, T., Merino, A.M., Orucu, A.Y., Audinet, P., 2017. Greenhouse gas emissions from geothermal power production. In: Proceedings, 42nd Workshop on Geothermal Reservoir Engineering. Stanford. California: Stanford University. 

- Friedmann, J., Fan, Z., Byrum, Z., Ochu, E., Bhardwaj, A., Sheerazi, H., 2020. Levelised Cost of Carbon abatement: An improved Cost-Assessment Methodology for a NetZero Emissions World. Columbia University SIPA Center on Global Energy Policy, New York, NY, USA. 

- Gali`egue, X., Laude, A., 2017. Combining Geothermal Energy and CCS: from the Transformation to the Reconfiguration of a Socio-Technical Regime? Energy Procedia 114, 7528–7539. 

- García-Luna, S., Ortiz, C., Carro, A., Chacartegui, R., P´erez-Maqueda, L.A., 2022. Oxygen production routes assessment for oxy-fuel combustion. Energy 254, 124303. 

- Garcia, J.E., 2001. Density of Aqueous Solutions of CO2 (No. LBNL-49023). Lawrence Berkeley National Lab.(LBNL), Berkeley, CA (United States). 

- Gough, C., Thornley, P., Mander, S., Vaughan, N., & Lea-Langton, A. (Eds.). (2018). Biomass energy with carbon capture and storage (BECCS): unlocking negative emissions. 

- Gunnarsson, I., Aradottir, E.S., Oelkers, E.H., Clark, D.E., Arnarson, M.´ Þ., Sigfússon, B., Snæbjornsd¨ ottir, S.´ O., Matter, J.M., Stute, M., Júlíusson, B.M., 2018. The rapid and<sup>´</sup> cost-effective capture and subsurface mineral storage of carbon and sulfur at the CarbFix2 site. Int. J. Greenhouse Gas Control 79, 117–126. 

- Gutknecht, V., Snæbjornsd¨ ottir, S.´ O., Sigfússon, B., Arad<sup>´</sup> ottir, E.S., Charles, L., 2018. ´ Creating a carbon dioxide removal solution by combining rapid mineralization of CO2 with direct air capture. Energy Procedia 146, 129–134. 

- Hanak, D.P., Powell, D., Manovic, V., 2017. Techno-economic analysis of oxycombustion coal-fired power plant with cryogenic oxygen storage. Appl. Energy 191, 193–203. 

- Intergovernmental Panel on Climate Change (IPCC). (2023). Synthesis report of the IPCC sixth assessment report (AR6): summary for policymakers. 

- IRENA, 2019. Renewable Capacity Statistics 2019. International Renewable Energy Agency, Abu Dhabi. https://www.irena.org/publications/2019/Mar/Renewable-Ca pacity-Statistics-2019. 

- IRENA, 2021. Renewable Power Generation Costs in 2021. International Renewable Energy Agency, Abu Dhabi. 

- Janes, J., 1984. Evaluation of a Superheater Enhanced Geothermal Steam Power Plant in the Geysers area. Final report (No. P-700-84-003). California Energy Resources Conservation and Development Commission, Sacramento (USA). Siting and Environmental Div. 

- Kaya, E., Zarrouk, S.J., 2017. Reinjection of greenhouse gases into geothermal reservoirs. Int. J. Greenhouse Gas Control 67, 111–129. 

- Kaya, E., Zarrouk, S.J., O’Sullivan, M.J, 2011. Reinjection in geothermal fields: a review of worldwide experience. Renew Sustain. Energy Rev. 15 (1), 47–68. 

- Keith, D.W., Holmes, G., Angelo, D.S., Heidel, K., 2018. A process for capturing CO2 from the atmosphere. Joule 2 (8), 1573–1594. 

- Kerv´evan, C., Beddelem, M.-H., Gali`egue, X., Le Gallo, Y., May, F., O’Neil, K., Sterpenich, J., 2017. Main results of the CO2-DISSOLVED project: first step toward a future industrial pilot combining geological storage of dissolved CO2 and geothermal heat recovery. Energy Procedia 114, 4086–4098. 

- Khallaghi, N., Jeswani, H., Hanak, D.P., Manovic, V., 2021. Techno-economicenvironmental assessment of biomass oxy-gasification staged oxy-combustion for negative emission combined heat and power. Appl. Therm. Eng. 196, 117254. 

- Kiani, A., Jiang, K., Feron, P., 2020. Techno-economic assessment for CO2 capture from air using a conventional liquid-based absorption process. Front. Energy Res. 8, 92. 

- Lawless, J.V., Van Campen, B., Randle, J.B., 2020. Future Geothermal Generation Stack. Ministry Business, Innov. Employ. 

- Lawrence, M.G., Sch¨afer, S., Muri, H., Scott, V., Oschlies, A., Vaughan, N.E., Scheffran, J., 2018. Evaluating climate geoengineering proposals in the context of the Paris Agreement temperature goals. Nat. Commun. 9 (1), 3734. 

17 

_Geothermics 125 (2025) 103159_ 

_K.A. Titus et al._ 

Lehtveer, M., Emanuelsson, A., 2021. BECCS and DACCS as negative emission providers in an intermittent electricity system: why levelised cost of carbon may be a misleading measure for policy decisions. Front. Clim. 3, 647276. 

Majer, E.L., Peterson, J.E., 2007. The impact of injection on seismicity at The Geysers, California Geothermal field. Intern. J. Rock Mech. Mining Sci. 44 (8), 1079–1090. 

Marieni, C., Pˇrikryl, J., Aradottir, E.S., Gunnarsson, I., Stef´ ´ansson, A., 2018. Towards ‘green’geothermal energy: co-mineralization of carbon and sulfur in geothermal reservoirs. Int. J. Greenhouse Gas Control 77, 96–105. 

- MBIE. (2021). Energy in New Zealand 2021. https://www.mbie.govt.nz/build ing-and-energy/energy-and-natural-resources/energy-statistics-and-modelling 

   - /energy-publications-and-technical-papers/energy-in-new-zealand/https://doi.org /ISSN: 2324-5913. 

- McLean, K., Richardson, I., Quinao, J., Clark, T., Owens, L., 2020. Greenhouse gas emissions from New Zealand geothermal: power generation and industrial direct use. In: Proceedings 42nd New Zealand Geothermal Workshop, 24, p. 26. 

- MfE, 2022a. Measuring emissions: A guide for organisations: 2022 Detailed Guide. Ministry for the Environment, Wellington. 

- MfE, 2022b. Towards a productive, Sustainable and Inclusive economy. Aotearoa New Zealand’s First Emissions Reduction Plan. Ministry for the Environment, Wellington. Publication number: ME 1639. ISBN: 978-1-99-102526-5. 

- MPI, 2020. Wood Fibre Futures Stage: One Report. Ministry of Primary Industries. National Renewable Energy Laboratory (NREL), 2024. 2024 Annual Technology 

- Baseline. National Renewable Energy Laboratory, Golden, CO. https://atb.nrel.gov/. 

- P´alsdottir, A.E., Gill, J.A., Alves, J.A., P´ ´alsson, S., M´endez, V., Ewing, H., Gunnarsson, T. G., 2022. Subarctic afforestation: effects of forest plantations on ground-nesting birds in lowland Iceland. J. Appl. Ecol. 59 (10), 2456–2467. 

- Park, S., Langat, A., Lee, K., Yoon, Y., 2021. Measuring the impact of risk on LCOE (levelised cost of energy) in geothermal technology. Geothermal Energy 9 (1), 27. 

- Pehl, M., Arvesen, A., Humpenoder, F., Popp, A., Hertwich, E.G., Luderer, G., 2017. ¨ Understanding future emissions from low-carbon power systems by integration of life-cycle assessment and integrated energy modelling. Nat. Energy 2 (12), 939–945. 

- Pruess, K., 2006. Enhanced geothermal systems (EGS) using CO2 as working fluid - A novel approach for generating renewable energy with simultaneous sequestration of carbon. Geothermics. 35, 351–367. 

- Puettmann, M., Sahoo, K., Wilson, K., Oneil, E., 2020. Life cycle assessment of biochar produced from forest residues using portable systems. J. Clean. Prod. 250, 119564. 

- Ratouis, T.M., Snæbjornsd¨ ottir, S.´ O., Voigt, M.J., Sigfússon, B., Gunnarsson, G.,<sup>´</sup> Aradottir, E.S., Hj´ orleifsd¨ ottir, V., 2022. Carbfix 2: a transport model of long-term ´ CO2 and H2S injection into basaltic rocks at Hellisheidi, SW-Iceland. Int. J. Greenhouse Gas Control 114, 103586. 

- Reynolds, W.C., 1979. Thermodynamic Properties in SI: graphs, tables, and Computational Equations for Forty Substances. Department of Mechanical Engineering, Stanford University. 

- Ricks, W., Norbeck, J., Jenkins, J., 2022. The value of in-reservoir energy storage for flexible dispatch of geothermal power. Appl. Energy 313, 118807. 

- Sabatino, F., Grimm, A., Gallucci, F., van Sint Annaland, M., Kramer, G.J., Gazzani, M., 2021. A comparative energy and costs assessment and optimization for direct air capture technologies. Joule 5 (8), 2047–2076. 

- Sandalow, D., Aines, R., Friedmann, J., McCormick, C., Sanchez, D.L., 2021. Biomass Carbon Removal and Storage (BiRCS) Roadmap (No. LLNL-TR-815200). Lawrence Livermore National Lab.(LLNL), Livermore, CA (United States). 

- Sigfusson, B., Gislason, S.R., Matter, J.M., Stute, M., Gunnlaugsson, E., Gunnarsson, I., Oelkers, E.H., 2015. Solving the carbon-dioxide buoyancy challenge: the design and field testing of a dissolved CO2 injection system. Int. J. Greenhouse Gas Control 37, 213–219. 

- Snæbjornsd¨ ottir, S.´ O., Gislason, S.R., Galeczka, I.M., Oelkers, E.H., 2018. Reaction path<sup>´</sup> modelling of in-situ mineralisation of CO2 at the CarbFix site at Hellisheidi, SWIceland. Geochim. Cosmochim. Acta 220, 348–366. 

- Spycher, N., Pruess, K., & Ennis-King, J. (2003). CO2-H20 mixtures in the geological sequestration of CO2. 

- Srinivas, S., Eisenberg, D., Seifkar, N., Leoni, P., Paci, M., Field, R.P., 2014. Simulationbased study of a novel integration: geothermal–biomass power plant. Energy fuels 28 (12), 7632–7642. 

- Tarroja, B., Chiang, F., AghaKouchak, A., Samuelsen, S., 2018. Assessing future water resource constraints on thermally based renewable energy resources in California. Appl. Energy 226, 49–60. 

- Telmo, C., Lousada, J., 2011. Heating values of wood pellets from different species. Biomass bioenergy 35 (7), 2634–2639. 

- Thain, I., DiPippo, R., 2015. Hybrid geothermal-biomass power plants: applications, designs and performance analysis. In: Proceedings world geothermal congress. Melbourne, Australia, pp. 19–25. 

- Titus, K.A., Dempsey, D.E., Peer, R.A.M., 2023. Carbon negative geothermal: theoretical efficiency and sequestration potential of geothermal-BECCS energy cycles. Int. J. Greenhouse Gas Control 122, 103813. 

- Titus, K., Dempsey, D., Peer, R., Hanik, F., 2024. From carbon neutral to carbon negative: a theoretical bioenergy and CO2 removal retrofit at Ngawh¯ a geothermal power ¯ station. J. R. Soc. N. Z. 1–19. https://doi.org/10.1080/03036758.2024.2385807. 

- Toselli, D., Heberle, F., Brüggemann, D., 2019. Techno-economic analysis of hybrid binary cycles with geothermal energy and biogas waste heat recovery. Energies. (Basel) 12, 1969. https://doi.org/10.3390/en12101969. 

- Vargas, C.A., Caracciolo, L., Ball, P.J., 2022. Geothermal energy as a means to 

   - decarbonize the energy mix of megacities. Commun. Earth. Environ. 3 (1), 66. 

- Yang, B., Wei, Y.M., Liu, L.C., Hou, Y.B., Zhang, K., Yang, L., Feng, Y., 2021. Life cycle cost assessment of biomass co-firing power plants with CO2 capture and storage considering multiple incentives. Energy Econ. 96, 105173. 

- Zang, G., Jia, J., Tejasvi, S., Ratner, A., Lora, E.S., 2018. Techno-economic comparative analysis of Biomass integrated gasification combined cycles with and without CO2 capture. Int. J. Greenhouse Gas Control 78, 73–84. 

- Zhang, G., Norbeck, J., Smith, A., Dadi, S., Galban, G.E., 2024. Integrate carbon sequestration in enhanced geothermal system through surface dissolution. In: SPE Western Regional Meeting (p. D021S010R001). SPE. 

- Zhou, C., Shah, K., Song, H., Zanganeh, J., Doroodchi, E., Moghtaderi, B., 2016. Integration options and economic analysis of an integrated chemical looping air separation process for oxy-fuel combustion. Energy Fuels 30 (3), 1741–1755. 

#### **Further reading** 

Kumar, V.V., Hoadley, A., Shastri, Y., 2019. Dynamic impact assessment of resource depletion: a case study of natural gas in New Zealand. Sustain. Prod. Consum. 18, 165–178. 

18 

