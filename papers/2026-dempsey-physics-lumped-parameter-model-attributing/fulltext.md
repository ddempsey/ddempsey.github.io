# A Physics‐Based, Lumped‐Parameter Model for Attributing Natural and Anthropogenic CO2 Emissions From Producing Geothermal Systems

**Authors:** David Dempsey  
**Published in:** Water Resources Research (2026)  
**DOI (version of record):** https://doi.org/10.1029/2026wr044239  
**This copy:** Published version. Text extracted from the PDF at https://ddempsey.github.io/papers/2026-dempsey-physics-lumped-parameter-model-attributing/dempsey2026-physics-lumped-parameter.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** Published version, reproduced under the CC BY 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1029/2026wr044239  
**Licence:** CC BY 4.0 http://creativecommons.org/licenses/by/4.0/  

---


# **RESEARCH ARTICLE** 10.1029/2026WR044239 

#### **Key Points:** 

- A lumped‐parameter physics model tracks CO2 content and emissions from geothermal reservoirs 

- Metered plant emissions overcount anthropogenic climate impact when surface emissions changes are ignored 

- Long‐term CO2 storage security requires either mineralization or reinjection that delays reservoir returns 

#### **Supporting Information:** 

Supporting Information may be found in the online version of this article. 

#### **Correspondence to:** 

D. Dempsey, david.dempsey@canterbury.ac.nz 

#### **Citation:** 

Dempsey, D. (2026). A physics‐based, lumped‐parameter model for attributing natural and anthropogenic CO2 emissions from producing geothermal systems. _Water Resources Research_ , _62_ , e2026WR044239. https://doi.org/10.1029/ 2026WR044239 

Received 30 MAR 2026 Accepted 2 SEP 2026 

**A Physics‐Based, Lumped‐Parameter Model for Attributing Natural and Anthropogenic CO2 Emissions From Producing Geothermal Systems** 

## **David Dempsey**<sup>**1**</sup> 

> 1University of Canterbury, Christchurch, New Zealand 

**Abstract** Although geothermal energy is a low‐carbon resource, some powerplants can coproduce and release CO2, which is then subject to emissions monitoring and sometimes financial penalty. Accurate attribution of these emissions is difficult because exploitation of the reservoir alters hydrological flows that in turn modify surface CO2 fluxes. Hence, emissions metered through the powerplant do not represent the true anthropogenic impact. This study develops a lumped‐parameter model of a geothermal reservoir that tracks pressure evolution, dissolved CO2 and emissions through the powerplant and the Earth's surface. Closed‐form analytical solutions are obtained for reservoir degassing, outflow reversal, delayed reinjection returns and mineralization reactions, and these are calibrated against emissions data from the Rotokawa and Ngā Tamariki geothermal fields in New Zealand. The interplay of characteristic timescales for pressure equilibration, CO2 loss, reservoir residence, breakthrough delay and mineralization are shown to control whether a field's emissions decline, stabilize or rebound over decades. Calibrated models indicate that plant‐metered emissions at Rotokawa overcount the true anthropogenic impact by 17–45 kt yr<sup>−1</sup> , because production suppresses surface emissions that are not credited to the operator. CO2 storage in geothermal reservoirs is shown to be fundamentally different from conventional carbon capture and storage, as it is a flow‐through system in which dissolved CO2 only resides temporarily. Long‐term sequestration requires either mineralization or reinjection at sufficient distance to delay returns. Field‐specific models and repeat CO2 flux surveys are needed to constrain these effects and support emissions accounting based on true anthropogenic impact. 

**Plain Language Summary** Geothermal power plants are known to release carbon dioxide (CO2) that is naturally contained in underground water. Sometimes, governments track and penalize these emissions by measuring CO2 leaving the power plant. However, when water is pumped from a geothermal system it reduces the underground pressures such that less CO2 flows naturally out through the ground surface. Here, a mathematical model is introduced to track CO2 through a geothermal reservoir, including the emissions from the power plant, natural ones at the surface and dissolved storage underground. Tested against real data from two New Zealand geothermal fields, it is shown that plant‐based monitoring on its own significantly overestimates emissions caused by humans. Also, storing captured CO2 back underground in geothermal systems is not the same as conventional carbon storage because the CO2 eventually flows back out unless it reacts with rocks or is injected far enough away to delay its return to the reservoir. This suggests that more accurate emissions accounting for geothermal energy requires measuring both plant and surface emissions together. 

# **1. Introduction** 

> © 2026 The Author(s). _Water Resources Research_ published by Wiley Periodicals LLC on behalf of American Geophysical Union. 

> This is an open access article under the terms of the Creative Commons Attribution License, which permits use, distribution and reproduction in any medium, provided the original work is properly cited. 

Most geothermal power plants have low carbon emissions compared to fossil fuel alternatives (Aksoy et al., 2015; Ármannsson et al., 2005; McLean et al., 2024). At some plants however, non‐condensable gases (NCGs) like CO2 and H2S are coproduced and released to the atmosphere. These emissions are monitored and reported via national inventories to the United Nations Framework Convention on Climate Change, and financially penalized in some jurisdictions, for example, through the surrender of purchased units under New Zealand's Emissions Trading Scheme. Thus, emissions from geothermal power production can be subject to both political and financial pressure, and hence the accurate measurement of emissions ensures such pressure is appropriately sized. 

A full picture of a geothermal system's emissions profile can be difficult to establish as it should ideally disaggregate operational versus lifecycle emissions (McLean & Richardson, 2021), power plant emissions versus those released through the Earth's surface (e.g., Ármannsson et al., 2005; M. O’Sullivan et al., 2021; Sbrana et al., 2021), and changes in emissions over time including the pre‐development baseline, the new equilibrium 

1 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

once power plant operations have stabilized, and any natural or anthropogenic transients (Ármannsson et al., 2005; M. O’Sullivan et al., 2021). While direct monitoring of soil emissions or outgassing features is preferred (Bloomberg et al., 2014; Sbrana et al., 2021; Taussi et al., 2023; Óladóttir & Friðriksson, 2015), it may only be practical to estimate or model certain parts of the emission profile (M. O’Sullivan et al., 2021), especially the pre‐development state. 

This study builds on the 0‐dimensional lumped parameter (tank) framework for modeling geothermal systems, introduced by Fradkin et al. (1981) and adapted for CO2 tracking by Hosgor et al. (2016). It introduces new descriptions of depletion‐induced upflow, reversal of outflow, delayed injection returns, CO2 degassing from depressurization and boiling, and fluid‐rock reactions. These extensions are what distinguish the present model from that of Hosgor et al. (2016), which tracks dissolved CO2 under production, reinjection and recharge but does not resolve degassing, outflow reversal, delayed returns, or mineralization, and does not partition emissions between the plant and the surface. The resulting closed‐form analytical solutions are then calibrated to emissions data from Rotokawa and Ngā Tamariki geothermal fields, which support power generation in the Taupo Volcanic Zone (TVZ) of New Zealand's central North Island (Bibby et al., 1995). These models are used to explain probable mechanisms behind declining emissions at these fields and predict at what level these might stabilize. Furthermore, likely changes in surface emissions are estimated and their implications for emissions accounting frameworks discussed. 

As a final note, this study reports measured and modeled CO2 emissions in units of kt yr<sup>−1</sup> (thousand tonnes per year), which is the natural scale for these processes and also accords with emissions reporting conventions. 

## **1.1. Production and Reinjection of NCGs From Geothermal Power Plants** 

In a geothermal reservoir, CO2 will exist either as a dissolved component in the liquid pore fluid or as a co‐mingled gas in a two‐phase or gas zone (Figure 1). Production of liquid or gas from the reservoir brings a mixture of H2O and CO2 into the well, alongside other NCGs and dissolved components. Preferential partitioning leads to high CO2 concentrations in the gas phase (Grant, 1977; M. J. O’Sullivan et al., 1985) and the early‐time phenomenon of “degassing” where this component is quickly stripped from the reservoir. Further degassing of CO2 dissolved in the liquid component can occur as pressure drops through the aboveground pipework. It is common to discharge the exsolved CO2 and other NCGs such as H2S and CH4 to atmosphere. A binary generating system may capture and return a larger fraction of these gases (e.g., dissolved in the condensate) and so reduce, though not necessarily eliminate, atmospheric discharge. 

In 2017, reported CO2 emissions from 12 NZ power stations totaled 600 kt yr<sup>−1</sup> , although this number has reduced over time as reservoir CO2 concentrations decline and as NCG capture and reinjection is increasingly adopted (McLean et al., 2024). In Turkey, Aksoy et al. (2015) has collated emissions factors for a subset of power stations, and these collectively account for at least 3,000 kt yr<sup>−1</sup> . This is likely a low estimate with the outsized emissions footprint largely attributed to the high gas content of Turkish geothermal systems that tend to be hosted in carbonate reservoirs. These have emission factors that span a wide range 400–1,300 g kWh<sup>−1</sup> (Akın et al., 2020; Aksoy et al., 2015), albeit observed to be declining over the operating life of the fields (Akın et al., 2020). Emissions reported from Icelandic power stations have risen steadily over the last few decades, from about 150 kt yr<sup>−1</sup> at the turn of the century, to more than 200 kt yr<sup>−1</sup> in 2024 (Environment and Energy Agency of Iceland, 2026). Note that reported plant emissions are typically quoted to an accuracy of about 1 kt yr<sup>−1</sup> and uncertainties beyond this are not commonly disclosed. 

Plant emissions are often observed to decline during the operational life of the station (Akın et al., 2020; Fridriksson et al., 2017; McLean et al., 2024). This may occur because depressurization drives exsolution and removal of CO2 that was dissolved in the liquid reservoir, or because the reservoir is diluted due to encroachment of relatively CO2‐depleted peripheral waters or reinjection returns. Further reductions in power plant emissions are expected as NCG reinjection operations continue to proliferate (Ghafar et al., 2022; Snæbjörnsdóttir et al., 2020). 

CO2 capture and reinjection of dissolved phase CO2 has been piloted and deployed in Iceland since 2012 (Gíslason et al., 2018), and in New Zealand since 2021 (Ghafar et al., 2022). Injection of supercritical liquid CO2 has also been piloted in Umurlu, Turkey and Hijiori, Japan, as well as captured H2S in Coso, California and Puna, 

2 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

**Figure 1.** A conceptual schematic of a convective, liquid‐dominated geothermal system of the type found in the Taupo Volcanic Zone, showing the deep magmatic heat and CO2 source, buoyant upflow, the liquid reservoir beneath a leaky caprock with an overlying two‐phase gas zone, lateral outflow to aquifers, surface emissions, and a power plant that produces and reinjects fluid. The diagram is illustrative and is not a depiction of either case‐study field (Rotokawa or Ngā Tamariki) in particular. 

Hawai'i (Carmichael & Zarrouk, 2023). Geothermal systems and their adjacent recharge zones have also been suggested as storage sites for CO2 produced by other industries, including net‐negative bioenergy sources (Titus et al., 2023). Managing breakthrough of the injected CO2 to production regions becomes a key consideration in such systems, although von Hirtz (2016) reports that 20 years of NCG reinjection at Puna has yet to result in breakthrough at production wells. 

Water‐rock interaction has implications for CO2 storage security while impacts on porosity and permeability could affect reservoir performance. For sufficiently reactive rocks, injected CO2 may react to form stable carbonate minerals like calcite, dolomite or magnesite. Snæbjörnsdóttir et al. (2020) report that, at Carbfix in Iceland, 65% of CO2 injected into basalt is mineralized within 2 months, corresponding to a half‐life of 39.6 days. An injection experiment into an Oman peridotite reported 88% mineralization of CO2 within 45 days (Matter et al., 2025), corresponding to a 14.7 day half‐life. However, in less reactive formations that commonly occur in New Zealand systems, mineralization reactions may be negligible (Altar et al., 2024) or even be dominated by calcite dissolution (Siahaan et al., 2024). 

## **1.2. Changes in Geothermal Surface Emissions in Response to Power Production** 

Geothermal systems have a natural propensity to flux CO2 derived from magmatic sources or from thermal decomposition of carbonates (Ármannsson et al., 2005; Giggenbach, 1995; Hoefs, 2009; Seward & Kerrick, 1996). However, these natural fluxes can be disturbed by pressure and phase changes in the geothermal reservoir caused by fluid extraction through wells (Allis, 1981; Óladóttir & Friðriksson, 2015). This process, while widely recognized (Ármannsson et al., 2005; Bertani & Thain, 2002; M. O’Sullivan et al., 2021; Sbrana et al., 2021), is difficult to measure or estimate in a consistent manner. As such, anthropogenic changes in 

3 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

geothermal surface emissions are not generally considered when calculating emissions factors or reporting plant emissions in global inventories (Fridriksson et al., 2016). 

CO2 is transported through geothermal systems and is released at the surface through a mix of both diffuse soil degassing and focused venting. For instance, at the Karapiti area of the Wairakei geothermal field, Werner et al. (2004) measured 7 t d<sup>−1</sup> (0.08 kg s<sup>−1</sup> ) of diffuse fluxing through steaming ground versus 16 t d<sup>−1</sup> (0.19 kg s<sup>−1</sup> ) focused through fumaroles (total 23 t d<sup>−1</sup> or 8.4 kt yr<sup>−1</sup> ). The thermal surface features are not entirely natural having developed above and in response to a steam‐dominated two‐phase region of the exploited Wairakei reservoir (Allis, 1981). Thus, surface CO2 emissions measured today may not be the same as the pre‐development baseline. 

Rissmann et al. (2012) studied diffuse CO2 soil fluxes at Ohaaki and showed that surface emissions remain high (40.5 kt yr<sup>−1</sup> in 2006–2008 cf. 215 kt yr<sup>−1</sup> power plant emissions in 2011; McLean et al., 2024) after 20 years of production, although, as frequently is the case, a measured pre‐development baseline is not available to judge whether it is different from its natural condition. Seward and Kerrick (1996) introduced a method to estimate CO2 emissions based on CO2 content of the liquid reservoir and heat flow through the geothermal system. Their method estimated 31.2 kt yr<sup>−1</sup> through the Ohaaki system (about 30% less than contemporary soil measurements) and 400 kt yr<sup>−1</sup> total for all New Zealand fields. 

Bloomberg et al. (2014) and Yang et al. (2024) have both conducted CO2 flux measurements at Rotokawa geothermal system (New Zealand). Yang et al. (2024) derived unified CO2 emissions estimates of 141.2 kt yr<sup>−1</sup> in 2012 and 127.4 kt yr<sup>−1</sup> in 2021, substantially higher than the 20.2 kt yr<sup>−1</sup> estimated by Seward and Kerrick (1996). A large power plant (Ngā Awa Pūrua) was commissioned in 2011 that has likely driven reductions in reservoir CO2 content that in turn may be reflected in reduced surface emissions. Although the reported emissions reduction between 2012 and 2021 supports this model, confidence intervals for the two estimates do overlap considerably making it difficult to be conclusive. Nevertheless, Yang et al. (2024) place the monetary value of this induced emissions reduction, in avoided emissions charges, on the order of 2.6 M $NZ. 

Óladóttir and Friðriksson (2015) analyzed 9 years of soil CO2 flux data at Reykjanes geothermal area in Iceland and noted a substantial increase in emissions from 13.5 t d<sup>−1</sup> (0.16 kg s<sup>−1</sup> ; 4.9 kt yr<sup>−1</sup> ) in 2004 to 51.4 t d<sup>−1</sup> (0.60 kg s<sup>−1</sup> ; 18.8 kt yr<sup>−1</sup> ) in 2013. As this coincided with startup of a power plant in 2006, as well as an increase in surface heat flux accompanying development of a shallow boiling zone, it seems likely CO2 surface fluxes were accelerated by the plant. Changes in CO2 surface emissions in Iceland can also arise from natural drivers such as magmatism associated with the Krafla fires (Ármannsson et al., 2005). Werner et al. (2004) noted poor correlation between CO2 and H2O flux in their survey, which suggests that changes in steam release or surface heat flow may not always be a good proxy for corresponding changes in CO2 flux (as they do appear to be at Reykjanes, Iceland; Óladóttir & Friðriksson, 2015). 

Taussi et al. (2023) measured CO2 fluxes at the Larderello geothermal field in Italy, notably dividing their measurements into Central region close to production where average fluxes were lower (145 t d<sup>−1</sup> km<sup>−2</sup> ), and Peripheral regions that were further away and, although cooler, had higher fluxes (508 t d<sup>−1</sup> km<sup>−2</sup> ). They offer the possible explanation that this reflects a suppression of surface emissions from production, although this characterization depends in part on reconstructions of historic emissions that suggested pre‐development fluxes were higher. The suggestion is further complicated by disparate isotopic compositions for Central and Peripheral regions that suggest separate CO2 sources may be operating and could account for the flux differences. 

Sbrana et al. (2021) measured CO2 fluxes across several power producing and pristine regions of the Amiata geothermal field. They identified that regions with power plants had diffuse surface emissions that were lower than pristine regions by an amount similar to CO2 from power production (about 50% in this case). Hence, they hypothesized that geothermal production suppresses surface emissions and further suggest that capture and reinjection of NCGs in geothermal power plants may not always achieve environmental goals if those captured NCGs simply restore the otherwise suppressed surface emissions. 

## **1.3. Modeling Geothermal Systems and Their CO2 Emissions** 

Changes in surface and power plant emissions can be matched and extrapolated using computer models (e.g., Kaya & Zarrouk, 2017; M. O’Sullivan et al., 2021). Geothermal modeling paradigms have largely moved 

4 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

away from earlier lumped parameter ODEs (also called tank models, e.g., Axelsson, 1989; Fradkin et al., 1981; Sarak et al., 2005; Whiting & Ramey, 1969), toward the use of finely discretized simulators that capture heat and mass transfer physics on detailed geological structures and wellfield operations. For modeling geothermal CO2 fluxes, there are relatively few simple models (Atkinson et al., 1980; Hosgor et al., 2016) that can be applied to estimate changes in power plant and surface emissions over time. 

Early modeling studies of CO2‐rich geothermal fields focused on the role of the CO2 component in shifting the thermodynamic behavior of the reservoir. At Ohaaki, a high concentration of CO2 causes boiling to 2 km depth under pre‐development conditions. Both lumped parameter (Grant, 1977) and column models (M. J. O’Sullivan et al., 1985) emphasized the rapid initial pressure drop from CO2 escaping the bores (“degassing”) and the role of relative permeability. These early lumped representations traded spatial detail for analytical tractability, which meant that exact or near‐exact solutions could be obtained. This meant that the dominant controls on pressure and phase behavior could be investigated, albeit at the cost of averaging said processes across the reservoir. 

Subsequent models of Ohaaki have progressed toward higher spatial and temporal resolution (J. O’Sullivan et al., 2025; M. O’Sullivan et al., 2021), with a focus on improved geological modeling and history matching. These models are necessarily numerical in their solutions, but physical intuition has nevertheless been obtained through calibrated case studies and sensitivity analysis. As a result, M. O’Sullivan et al. (2021) suggest the pre‐ development CO2 flux at Ohaaki to be approximately 140 kt yr<sup>−1</sup> substantially higher than the 30 kt yr<sup>−1</sup> estimated by Seward and Kerrick (1996). They further resolve discrete episodes of degassing associated with early production testing, a steady decline in surface emissions as the field is produced, and a multi‐decade recovery to back to the pre‐development equilibrium if the power plant was closed. The decline in surface emissions during production highlights the value of a holistic understanding of the field for emissions accounting. A feature of the M. O’Sullivan et al. (2021) model is that CO2 mass input at the base of the model occurs at a fixed rate. 

Recent modeling studies have turned toward the role of CO2 reinjection in geothermal fields. Kaya and Zarrouk (2017) modeled reinjection of CO2 and other gases into a generic geothermal reservoir and showed that a variety of impacts on the production are possible depending on injection strategy. Swanepoel et al. (2024) extended this to include injection of additional CO2 beyond that captured from the field for negative emissions applications. They found a steady increase in CO2 returning to the production wells. Recent advances have also included coupled reactions between dissolved CO2 and reservoir minerals (Siahaan et al., 2024). 

Analytical and semi‐analytical lumped‐parameter approaches have continued to provide insight into CO2 inventories and system‐level response. Hosgor et al. (2016) developed a lumped‐parameter model that tracks the amount of dissolved CO2 in a reservoir in response to production, reinjection, and recharge. Their formulation yielded closed‐form solutions for CO2 evolution under a range of reinjection scenarios, recovering the exponential decline in CO2 concentration observed in New Zealand geothermal systems (McLean et al., 2024). 

## **1.4. Contribution of This Study** 

Three related issues emerge from this review of the literature. First, NCGs co‐produced from geothermal reservoirs are increasingly captured and reinjected rather than discharged, and plant emissions tend to decline over the operating life of a field as the reservoir is depleted and diluted (Section 1.1). Second, production also perturbs the naturally discharging flux to the surface of CO2, through pressure and phase changes, with the size and sign of this change being difficult to measure and typically omitted from emissions accounting (Section 1.2). Third, while detailed numerical simulators can reproduce these behaviors, there remain few simple models able to track CO2 across both the plant and the surface over time (Section 1.3). 

The model developed in this study addresses these issues by providing closed‐form solutions that couple reservoir pressure, dissolved CO2 concentration, and plant and surface emissions, and by calibrating them to the declining emissions records of two New Zealand fields. Because current inventory practice applies empirical, data‐driven emissions factors that do not represent these production‐induced changes in natural surface flux, a physics‐based description of the coupled reservoir and surface response is needed to attribute emissions correctly. 

# **2. Methodology** 

This section develops a 0‐dimensional lumped parameter (tank) formulation of a geothermal reservoir. The reservoir is conceptualized as a subpart of a larger convecting geothermal system that also comprises an upflow, 

5 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

connected aquifers, a caprock and an overlying power station that extracts and returns water (Figure 1). Parameterizations are introduced for mass conservation, CO2 solubility, Darcy flow, production and reinjection, boiling and mineralization, and surface flux losses. These physics are assembled under a single ordinary differential equation system that, when solved, outputs trajectories of reservoir pressure, dissolved CO2 concentration, plant and surface emissions, and mineralized storage. 

Although a tank model does not have the full spatial resolution of geothermal reservoir simulations, it nevertheless retains the relevant physics, namely Darcy‐driven mass transfer between the reservoir and its surroundings, thermodynamic control of CO2 solubility, and conservation of mass. However, the schematic has been styled on the convective, liquid‐dominated systems that tend to abound in New Zealand and, although similar physics constrain geothermal systems in other geologic settings, modifications may be required if this model is to be applied more widely. 

## **2.1. Reservoir Definition** 

The liquid reservoir is modeled as a cylindrical region of porous rock with upper surface area _S_ [m<sup>2</sup> ], vertical height _H_ [m], volume _V_ = SH [m<sup>3</sup> ], and constant porosity _ϕ_ [− ]. The mass of liquid water in the pore volume is _M_ = _Vρϕ_ , where _ρ_ [kg m<sup>−3</sup> ] is the liquid density at the appropriate reservoir conditions. 

Mass flow into and out of the reservoir, _q_ [kg s<sup>−1</sup> ], is assumed to be governed by Darcy's law and therefore proportional to the pressure difference between the reservoir and an external source or sink 

where _k_ is permeability [m<sup>2</sup> ], _μ_ is viscosity [Pa s], _A_ is the area across which the flow occurs [m<sup>2</sup> ], _P_ is hydrodynamic pressure of the reservoir [Pa] defined with respect to a liquid hydrostatic baseline, that is, _P_ = 0 corresponds to an aquifer at cold hydrostatic pressure, _Pj_ is the external reference pressure, and _L_ [m] is some characteristic distance across which the pressure drop occurs. Note, in this convention mass rates are negative if entering the reservoir and positive if leaving. 

It is convenient to use a lumped version of Equation 1 

with _Ki_ [m s] is a reservoir recharge coefficient that combines values of _k_ , _ρ_ , _A_ , _μ_ and _L_ particular to the flow of interest. 

The three flows considered here are: (a) an upflow that enters the reservoir from beneath, driven by buoyancy _P_ up, (b) a lateral outflow to connected aquifers at hydrostatic pressure ( _P_ aq = 0), and (c) a vertical outflow through a leaky caprock to the surface where _P_ cap = 0. Note, the outflow may reverse direction if pressure in the reservoir drops sufficiently. 

Prior to pumping, the liquid reservoir is at initial pressure, _P_ 0, and in a steady state ( _dP/ dt_ = 0), which requires all mass flows to balance: 

from which initial reservoir pressure can be expressed as 

where _K_ is a total recharge coefficient for the reservoir that lumps the two outflows together ( _K_ out = _K_ cap + _K_ aq). These can be later disaggregated if it is useful to do so. 

6 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

The lumped coefficients _Ki_ , _M_ , and derived timescales _tP_ and others introduced later are reservoir‐averaged quantities. Spatial variations in porosity _ϕ_ and permeability _k_ , together with the flow geometry ( _A_ , _L_ ), are subsumed into the single recharge coefficient _Ki_ of Equation 2 and into the stored liquid mass _M_ = _Vρϕ_ . Variations in fluid density and viscosity with temperature, pressure, and dissolved‐gas content are likewise folded into _Ki_ (through _ρ_ and μ in Equation 1) and into _M_ , and are not tracked explicitly. This choice trades spatial detail and some thermodynamic nuance for analytical tractability following the lumped tradition of Fradkin et al. (1981) and Sarak et al. (2005) with the effective coefficients determined by calibration to field data (Section 3.3). In a strongly heterogeneous reservoir this averaging means the model describes only the aggregate response and cannot resolve behavior at individual wells or locations. Changes in temperature due to reinjection could modify density and viscosity, and hence cause _K_ to change over time, although additional modeling suggests this effect is second order (see Supporting Information S1). 

The dependence of these coefficients on time could be made explicit by accounting for evolving pressure or temperature of the reservoir fluid. Density varies with pressure and temperature via compressibility and thermal expansivity properties, while porosity varies with pore pressure through the pore (rock) compressibility. Because _M_ = _Vρϕ_ and _K_ ∝ _kρ/μ_ (Equation 1), both in principle could be time dependent, _M_ = _M_ ( _t_ ) and _K_ = _K_ ( _t_ ), as the reservoir depressurizes and cools. These effects have been partially modeled in the Supporting Information S1 and are likely to be second order when averaged over the reservoir. However, the effects could be locally important such as in the vicinity of wells in which case full‐fidelity reservoirs simulations should be used. 

## **2.2. Reservoir Production, Mass Conservation, and Pressure Evolution** 

When production occurs from the liquid reservoir, its pressure will decrease over time. Here, the reservoir is assumed to be extracted from at a constant pumping rate, _q_ 0, with a fraction of the produced mass reinjected for pressure support (the remaining mass is discharged elsewhere). If the reinjection rate is ( 1 − _fq_ ) _q_ 0 then net extraction is _fqq_ 0 with _fq_ = 1 corresponding to zero reinjection and _fq_ = 0 full reinjection. Under a net extraction condition ( _fq >_ 0), pressure in the reservoir is expected to decline, and the upflow and outflows to adjust per Equation 2. 

Following Fradkin et al. (1981), pressure evolution in the reservoir is approximated by a tank model with a linear response term 

where, for a reservoir overlaid by a two‐phase boiling region, pressure changes reflect an instantaneously dropping liquid level (instant drainage), 

where _g_ is the acceleration due to gravity [m s<sup>−2</sup> ]. As _bP_ has units of inverse time, the formulation can be re‐expressed in terms of a characteristic time _tP_ that quantifies how rapidly system pressure responds to extraction. Furthermore, the ratio of _aP_ and _bP_ can be used to approximate _K_ . As _K_ and _tP_ are a physically interpretable pair, they can be inferred by calibration to production drawdown data, for example, Fradkin et al. (1981) estimated _aP_ = 3 _._ 1 × 10<sup>−6</sup> m<sup>−1</sup> s<sup>−2</sup> , _bP_ = 3 _._ 0 × 10<sup>−9</sup> s<sup>−1</sup> , equivalent to _tP_ = 10 yr and _K_ ≈ 10<sup>−3</sup> m s for Wairakei. 

7 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

**Figure 2.** Relative pressure of a reservoir responding to continued pumping ( _K_ up = _K_ out = 10<sup>−3</sup> m s, _P_ up = 1 _._ 2 MPa, _P_ 0 = 0 _._ 6 MPa). (a) Effect of pumping rate _fqq_ 0 expressed as a fraction of the critical rate _q_ 0, _c_ , with _tP_ = 10 yr. Pumping rates exceeding _q_ 0, _c_ cause reversal of the outflow. (b) Effect of pressure equilibration timescale _tP_ (2–14 years), with _fqq_ 0 = 1 _._ 4 _q_ 0, _c_ . (c) Effect of recharge coefficient _K_ ( 5 × 10<sup>−4</sup> to 10<sup>−2</sup> m s) at fixed effective pumping rate. 

Equation 5 has the exponential solution (Figure 2) 

where the new steady pressure limit is _P_ ∞ = _P_ 0 − _fqq_ 0 _/ K_ . 

Mass flows into and out of the reservoir also now have an exponential character, with _q_ up and _q_ out obtained by combining Equations 2, 4, and 8: 

The second term in Equation 9 is an induced upflow, Δ _q_ up, which has the limit Δ _q_ up → − _K_ up _fqq_ 0 _/ K_ , reflecting additional hot upflow drawn into the reservoir as the reservoir's pressure declines. 

In a similar fashion, if net extraction is large enough, then the reservoir outflow will reverse, occurring when the two terms in Equation 10 balance each other. The critical pumping rate to trigger a reversal is 

and the reversal itself occurs at a time _tr_ given by 

## **2.2.1. Reservoir Residence Time** 

A useful characterization of the geothermal system is its residence time, defined as the ratio of fluid mass stored in the reservoir to the mass throughput rate, 

This quantity measures the characteristic time that a fluid parcel, and any dissolved species such as CO2, resides in the reservoir before exiting via the outflow or extraction wells. 

8 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

In the pre‐development state, the upflow and outflow rates balance ( | _q_ up,0| = _q_ out,0), where these natural‐state values follow from Equations 9 and 10 evaluated before production ( _fqq_ 0 = 0), and the residence time is 

After extraction begins, the reservoir depressurizes and additional upflow is drawn into the reservoir (Equation 9). At the new steady state, the upflow magnitude is 

which always exceeds the natural upflow because the induced upflow term _K_ up _fqq_ 0 _/K_ is strictly positive. Consequently, the post‐development residence time 

is always shorter than the pre‐development value. Physically, extraction accelerates the throughput of deep fluid and CO2 through the reservoir. 

## **2.3. Governing Equation for CO2 Mass Balance and Concentration** 

This study's analysis principally deals with CO2 that is dissolved in the reservoir fluid. The mass of CO2 in the reservoir, _M_ CO2, is thus characterized by its concentration _C_ [kg CO2 kg<sup>−1</sup> H2O], here expressed as a mass fraction, _C_ = _M_ CO2 _/ M_ . Note, this study does not track additional NCGs beyond CO2, such as the smaller mole fractions of H2S and CH4 sometimes reported. These are assumed not to materially alter the CO2 mass balance or its solubility‐controlled partitioning, an assumption supported by the high CO2 fraction of dissolved gas in the New Zealand reservoirs considered here (Ghafar et al., 2022). 

Under steady, pre‐development conditions, CO2 enters the reservoir via the upflow at a concentration _C_ 0. The reservoir and outflows are at the same concentration. 

A mass‐balance of CO2 in the liquid part of the reservoir is 

where the time dependence of relevant terms has been made explicit for clarity. This expression captures the following reservoir processes: 

1. Changes in upflow or outflow under the evolving pressure regime. If the reservoir is outflowing, then CO2 exits at the reservoir concentration, _C_ **ʹ** = _C_ ( _t_ ). If there is an outflow reversal, then _C_ **ʹ** = _C_ out, which would typically be set to zero. Flow rates _q_ up and _q_ out are exponential functions of time given by Equations 9 and 10. 

2. Removal of CO2 from the reservoir via extraction at _q_ 0, but allowing that some portion of this CO2 may be directly returned to the subsurface via reinjection, and later arrive at the reservoir after time _τ_ . The effective rate of removal of CO2 from the reservoir is parameterized by _fC_ . Similar to _fq_ , a value of _fC_ = 1 corresponds to no capture and reinjection of produced CO2 whereas _fC_ = 0 corresponds to full reinjection of captured CO2 directly into the reservoir. In practice, only a proportion of the reinjected CO2 returns to the producing reservoir, a partial‐return case that is examined later through the return fraction _η_ (Section 4.3). Furthermore, this return may be smeared over a finite time, owing to dispersion of the injected volume on its passage back to 

9 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

the reservoir. Although such effects are readily treated in tracer‐recovery models, they have not been considered here. 

3. A first‐order chemical reaction that buffers dissolved CO2 through a precipitation‐dissolution reaction. The reaction rate depends on disequilibrium relative to a reference concentration _Cr_ , which can be set to zero for mineralization only, or non‐zero for reversible reactions. A possible choice is that the equilibrium concentration is the initial concentration, that is, _Cr_ = _C_ 0, reflecting a reservoir liquid in equilibrium with the host rock. The constant _κ_ [kg s<sup>−1</sup> ] moderates the rate of reaction and may depend on kinetics, surface area or other factors. This formulation does not account for exhaustion of the reservoir's buffering capacity or the effects of temperature and pH on reaction rate. 

4. A degassing term _Q_ dg [kg CO2 s<sup>−1</sup> ] that tracks the loss of CO2 mass into a gas phase through pressure driven reduction of CO2 solubility. If reservoir storage of CO2 becomes saturated, limited by the solubility _Cs_ ( _P_ ), then excess CO2 carried into the reservoir by the upflow is partitioned with _C_ up = _Cs_ ( _P_ ) entering the reservoir and the balance contributing to steady degassing. For simplicity, its time dependence is ignored and _C_ up = _Cs_ ( _P_ ∞) = _Cs_ ,∞. 

## **2.3.1. Saturation Effects** 

The maximum possible concentration of CO2 in the liquid phase is determined by its solubility _Cs_ . The solubility in turn depends on temperature, and pressure, the latter exercising an approximately linear effect 

where _Ps_ ,ref = 1.5 MPa, _Cs_ ,ref = 0.01 are the reference pressure and concentration about which the solubility is linearized. Because the solubility is close to linear in pressure over the range of interest, the choice of reference point is arbitrary and any point within the validity window given below yields the same approximation. The linear slope parameter _dCs/dP_ [wt% MPa<sup>−1</sup> ] is a quadratic function of temperature (see Appendix A). Equation 18 is correct to about 1% for _P_ between 5 and 15 MPa and _T_ between 150 and 280 _°_ C. Solubility here is evaluated from the pure‐water model of Duan and Sun (2003) (Appendix A), with the gas phase taken to be pure CO2 and salinity effects neglected. This is a reasonable approximation for the high‐pressure, liquid‐dominated reservoirs considered here, but it will overestimate solubility where steam or other NCGs occupy a substantial fraction of the gas‐phase pressure. This shortcoming might be addressed by developing a second coupled ODE to better describe the gas‐phase, which is identified as follow‐up work. 

Thus, for a liquid reservoir that is CO2‐saturated ( _C_ = _Cs_ ), depressurization will induce an amount of degassing and CO2 loss in proportion to the reduction in solubility 

and hence the degassing rate is exponential and principally controlled by net extraction. 

## **2.3.2. Boiling Effects** 

For reservoirs close to the boiling‐point‐for‐depth curve, depressurization may lead to boiling. As the two‐phase reservoir boils, it cools and follows the saturation curve, _T_ sat( _P_ ). Thus, degassing must account for both temperature and pressure changes as solubility moves along this curve _Cs_ ( _P_ , _T_ sat ( _P_ )). The degassing rate becomes: 

which is similar to Equation 19 apart from the derivative term. Fortunately, this derivative is approximately constant for pressures less than 11 MPa. The solubility is retrograde above 12 MPa (see Appendix A). 

10 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

In addition to degassing, CO2 exits alongside the boiled liquid component and commingles with steam in the overlying gas cap (Grant, 1977; M. J. O’Sullivan et al., 1985). Increased gas outflow rates reflecting viscosity or buoyancy changes have not been considered. 

## **2.4. Geothermal Emissions Accounting** 

The total CO2 emission rate from a geothermal system is the sum of both surface emissions, which may potentially be modified from their natural level, _Q_ surf,0, and plant emissions. 

Here _Q_ surf,0 denotes the natural (pre‐development) surface emission rate, that is, the baseline flux that would occur in the absence of production, while Δ _Q_ surf is the production‐induced change in surface emission, which may be positive (e.g., enhanced by degassing or induced upflow) or negative (e.g., suppressed as outflow declines). Their sum _Q_ surf,0 + Δ _Q_ surf = _Q_ surf is the actual post‐development surface emission modeled in Equation 23. 

Emissions attributable to an anthropogenic activity, namely development of the geothermal system for power production, are defined (after M. O’Sullivan et al., 2021). 

In this model, surface emissions comprise the sum of outflow and degassing 

where the outflow term _q_ out( _t_ ) _C_ ( _t_ ) is the product of the mass flow rate leaving through the caprock and connected aquifers and the reservoir CO2 concentration, and the degassing term (Equation 19) accounts for CO2 exsolved due to depressurization‐induced solubility reduction. Note that if a proportion of the degassed CO2 is considered to be permanently stored as a buoyant gas beneath the caprock, or if some dissolved CO2 exiting via the outflow remains permanently stored in shallow aquifers, then a proportional reduction to these emissions terms should be applied. 

Plant emissions are defined as the portion of extracted CO2 that is not captured and hence assumed to be released to the atmosphere 

From Equation 23, it is clear that changes in surface emissions can arise from either a change in the outflow rate _q_ out or a change in reservoir concentration _C_ . The former is governed by the pressure response of the system (Equation 10), while the latter evolves according to the CO2 mass balance (Equation 17). 

During early‐time when extraction is driving reservoir depressurization, surface emissions could be suppressed through a reduction of _q_ out or alternatively increased due to degassing, _Q_ dg. Additionally, _C_ may increase or decrease depending on the balance of CO2 extraction, reinjection returns, chemical reactions, and induced upflow of fresh CO2‐bearing fluid. Thus, even if the outflow rate is reduced over the long‐term, a compensating increase in CO2 concentration could maintain or elevate surface emissions. These mechanisms allow the model to represent a production‐driven acceleration of surface CO2 flux of the kind inferred at Reykjanes (Section 1.2). Depressurization drives boiling‐driven degassing, _Q_ dg, whose duration is expected to coincide with the pressure decline and hence with the pressure‐equilibration timescale _tP_ . 

## **2.5. Solutions to the Governing Equation** 

Various solutions can be obtained for Equation 17 under suitable approximations. 

11 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

**2.5.1. Instantaneous Reinjection Returns (** **_τ_ = 0)** 

The CO2 balance is considerably simplified when the _C_ ( _t_ − _τ_ ) term is eliminated. This arises in three cases: (a) no CO2 is reinjected into the reservoir ( _fC_ = 1), (b) CO2 is reinjected far enough away that it never returns to the reservoir ( _τ_ = ∞, equivalent to _fC_ = 1), and (c) CO2 is immediately captured and reinjected directly into the reservoir ( _τ_ = 0). 

A general form of the CO2 balance covering the above three cases is 

where _α_ , _β_ , _γ_ and _δ_ are constants defined as: 

where three new time scales have been introduced: 

1. Loss of CO2 from the reservoir over time _tβ_ , which is sensitive to the effective CO2 extraction ( _fC_ ), chemical reactions ( _κ_ ) and outflows ( _K_ out). 

2. Restoration of CO2 over time _tα_ , which is sensitive to chemical reactions ( _κ_ ) and the degassing upflow ( _K_ out). 

3. A reservoir flushing time _tq_ that measures how long it takes to replace the reservoir pore fluid mass ( _M_ ) at the effective extraction rate ( _fqq_ 0). 

Note, if the reservoir is not initially saturated and does not reach saturation during depressurization, then degassing can be neglected and the second term inside the brackets for _δ_ is dropped. 

A solution to Equation 25 satisfying the initial condition _C_ ( _t_ = 0) = _C_ 0 is 

where 

The integral _I_ ( _t_ ; ⋅) involves gamma functions that must be evaluated numerically. However, the solution has an exponential‐like character that can be approximated as 

where the system's new steady state _C_ ∞ trades off CO2 loss and restoration times, with the additional constants 

12 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

A second exponential form is obtained in the event of an outflow reversal that draws freshwater into the reservoir ( _C_ out = 0). In this case, a piecewise solution is obtained: _C_ ( _t_ ) is given by Equation 27 prior to the reversal ( _t < tr_ ), obtaining the intermediate concentration _C_ 1 at _t_ = _tr_ . Thereafter, Equation 25 is modified so that _γ_ = 0, and _β_ **ʹ** = ( _fCq_ 0 + _κ_ ) _/M_ = 1 _/ t_<sup>**ʹ**</sup> _β_ , with initial condition _C_ ( _t_ = _tr_ ) = _C_ 1. The solution has the same structure as Equation 29 but with modified expressions for _C_ ∞, Δ _Cβ_ and Δ _CP_ , and _t_<sup>**ʹ**</sup> _β_ replacing _tβ_ . 

## **2.5.2. Delayed Reinjection Returns (** **_τ_** s **0)** 

The impact of delayed reinjection returns can be analytically resolved only when pressure is approximately steady. This occurs when _τ_ is very small or very large compared to _tP_ , corresponding to _P_ = _P_ 0 or _P_ = _P_ ∞. In both cases, mass fluxes are approximately constant and the appropriate replacement is made _qi_ = _qi_ ,0 or _qi_ ,∞ where _i_ = [up,out] in Equation 17. 

The CO2 mass balance is now written 

or in the simpler form of a delay differential equation 

where constants _β_ 0 and _βτ_ describe immediate removing and delayed concentrating responses of the reservoir. 

Note that when _τ_ = 0, then _β_ 0 − _βτ_ = _β_ recovering the earlier form of Equation 25. In the event of a reversal that draws in water with _C_ out = 0, the modified coefficient is used _β_ 0 = ( _q_ 0 + _κ_ ) _/ M_ . 

13 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

To solve the equation, a supplementary function is required to describe concentration in the period [− _τ_ ,0], which in this case is chosen to be _C_ ( _t_ ) = 0, denoting no return of reservoir fluids. 

The solution to Equation 33 is expressed in an exponential basis 

where _Wk_ (⋅) is the _k_ th branch of the Lambert‐W function. 

At early time when _t < τ_ there are no returns from the reservoir, in which case the solution is exponentially declining for the case that _βτ_ = 0. 

At late time, the highest frequency values of _λk_ decay away and the solution is dominated by the slowest decaying term _λ_ 1. The approximate closed form solution becomes 

The solution sometimes overshoots on the initial dilution pathway, with the return restoring the system to a higher equilibrium concentration. Overshoot occurs when the term 

## **2.5.3. Verification of the Closed‐Form Solutions** 

Detailed verification of these solutions is included in Supporting Information S1 with only a summary presented here. First, the incomplete‐gamma and Lambert‐W solutions are verified against an independent forward‐Euler integration of the governing equations, agreeing to a relative error below 10<sup>−3</sup> . Second, in the limiting case of no degassing, no reactions and no delay, the balance reduces to _dC/dt_ = _α_ − _βC_ and recovers the lumped‐ parameter form of Hosgor et al. (2016). Third, a single‐block simulation in the reservoir simulator FEHM (Zyvoloski, 2007), carrying a full water and CO2 equation of state, reproduces the pressure, concentration and flux behavior of the closed‐form solutions and matches the degassing rate on depressurization. Finally, a further non‐isothermal FEHM case indicates that cold reinjection does not significantly shift model predictions under sustained cooling. 

## **2.6. Equilibrium States** 

The solutions developed above describe trajectories that approach new steady states for reservoir concentration and emissions at long time. These equilibria can be obtained either in the _t_ → ∞ limit of the explicit solutions (Equations 8, 29, and 35), or by setting _dP/dt_ = _dC/ dt_ = 0 directly in the governing equations (Equations 5 and 25) and discarding the exponential transients. 

## **2.6.1. Steady‐State Concentration** 

At long time, pressure‐driven exponential terms in Equation 25 decay away and the ODE reduces to 0 = _α_ − _βC_ ∞, giving 

14 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

which is also the constant offset in the approximate solution Equation 29. 

For a non‐reactive reservoir ( _κ_ = 0), substituting the definitions of _α_ and _β_ from Equation 26 yields the expanded form 

where _Cs_ ,∞ = _C_ 0 for an undersaturated reservoir and _Cs_ ,∞ = _Cs_ ( _P_ ∞) ≤ _C_ 0 when solubility is limiting the amount of dissolved CO2. When fluid and CO2 reinjection are balanced ( _fC_ = _fq_ ), concentration changes reflect pressure‐solubility effects only ( _C_ ∞ = _Cs_ ,∞). Imbalanced reinjection drives the reservoir to a diluted ( _fC > fq_ ) or concentrated ( _fC < fq_ ) state, although the concentrating scenario should strictly only apply for undersaturated systems, otherwise excess CO2 would be expected to immediately exsolve. For a reactive reservoir, _κ_ appears in both _α_ and _β_ of Equation 38, tending _C_ ∞ toward _Cr_ as mineralization dominates. If the outflow reverses, _β_ is modified per Equation 31. 

For delayed reinjection returns ( _τ >_ 0), the equivalent result from Equation 35 is 

which always exceeds the immediate‐return equilibrium _C_<sup>(</sup> ∞<sup>0)=</sup><sup>_α/β_</sup> 0<sup>for any non‐zero</sup><sup>_β_</sup> _τ_<sup>.</sup> 

## **2.6.2. Surface and Plant Emissions** 

At steady state, the outflow rate is _q_ out,∞ = _K_ out ( _K_ up _P_ up − _fqq_ 0) _/ K_ (positive for _fqq_ 0 _< q_ 0, _c_ , zero after reversal) and the upflow rate magnitude is | _q_ up,∞| = _K_ up ( _K_ out _P_ up + _fqq_ 0) _/K_ . Substituting into Equations 23 and 24 gives 

where the residual steady‐state degassing is 

This term captures the CO2 fraction of the upflow that exceeds solubility at the new reservoir pressure and hence degasses rather than dissolving. 

An equivalent and compact expression for _Q_ surf,∞ follows directly from a steady‐state CO2 mass balance: input via the upflow must equal output through the surface and the plant. For a non‐reactive reservoir this gives 

The first term is precisely the pre‐development surface emission rate 

15 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

and Equation 44 shows that post‐development surface emissions are elevated by the induced upflow and reduced by any CO2 diverted to the plant. The total _Q_ surf,∞ + _Q_ pp,∞ = | _q_ up,∞| _C_ 0, which always exceeds _Q_ surf,0 because the induced upflow term is strictly positive. 

# **3. Results** 

This section presents model findings in three stages. First, representative parameter ranges for New Zealand geothermal systems are established (Section 3.1, Table 2). Second, a sequence of illustrative scenarios isolates the physical mechanisms that drive changes in emissions, including degassing in CO2 saturated fields, dilution in undersaturated fields, mineralization, outflow reversal, and the delayed return of reinjected CO2 (Section 3.2). Third, the model is calibrated to the measured emissions records of the Rotokawa and Ngā Tamariki fields (Section 3.3), yielding the field‐specific parameters used in the Discussion. 

## **3.1. Parameter Ranges for New Zealand Geothermal Systems** 

Reservoir liquid mass, _M_ , controls the responsiveness of concentration changes, with larger masses taking comparatively longer to shift (Equation 26). For parameter orders representative of New Zealand geothermal fields ( _S_ ∼ 10 km<sup>2</sup> , _H_ ∼ 100–1,000 m, _ρ_ ∼ 10<sup>3</sup> kg m<sup>−3</sup> , _ϕ_ ∼ 0.1, with field areas after Bibby et al. (1995)), the liquid mass _M_ is of the order of 10<sup>11</sup> –10<sup>12</sup> kg. However, it is reasonable to expect order of magnitude variation in this parameter arising from reservoir compartmentalization or in fracture‐dominated systems with low porosity. 

Initial overpressure (relative to hydrostatic) controls the strength of upflow into the reservoir and when extraction could lead to an outflow reversal. Grant and Bixley (2011) suggest typical pressure conditions in New Zealand geothermal reservoirs are about 10% higher than hydrostatic. Taking an illustrative reservoir at 600 m, where the cold‐hydrostatic baseline is a round ∼6 MPa, this corresponds to _P_ 0 ∼ 0.6 MPa. This depth is chosen only to fix a representative baseline for the illustrative scenarios that follow (Figures 3–6). The deeper, hotter production zones of the case‐study fields reported later (Section 3.3) have parameters drawn from field reports. Once a target _P_ 0 is specified, _P_ up is computed from (Equation 4) on the basis of the split between _K_ up and _K_ out, with _P_ up = 1.2 MPa for the simple case of _K_ up ≈ _K_ out tested first here. Unequal values are considered later for fields with suitable emissions data to determine their values through calibration. 

Reservoir recharge coefficients, _Ki_ , control how rapidly and by how much the reservoir pressure responds to extraction (Equation 7). Fradkin et al. (1981) describe an improved version of Equation 5 that accounts for non‐instantaneous drop of the reservoir liquid level. Applying this model to production data from Wairakei, they inferred _aP_ = 3.1 × 10<sup>−6</sup> m<sup>−1</sup> s<sup>−2</sup> and _bP_ = 3.0 × 10<sup>−9</sup> s<sup>−1</sup> , corresponding to a reservoir response time of _tP_ of 10 years and _K_ ≈ 10<sup>−3</sup> m s. These values give a pre‐exploitation mass throughput estimate of 300 kg s<sup>−1</sup> (Equation 9), which is a similar order to the 400 kg s<sup>−1</sup> estimated by Allis (1981). Later, models are developed for Rotokawa and Ngā Tamariki that use _tP_ ∼ 1 year based on reported pressure declines, and find through calibration _K_ ≈ 0 _._ 55 × 10<sup>−4</sup> m s for Rotokawa and _K_ ≈ 1 × 10<sup>−5</sup> m s for Ngā Tamariki. 

Reservoir dissolved CO2 concentrations for New Zealand geothermal systems have been summarized by Giggenbach (1995) and Seward and Kerrick (1996). While the different fields exhibit a range of concentrations, it is useful to separate high concentration reservoirs, such as the shallow wells at Ohaaki with initial concentrations exceeding 3 wt% at 6 MPa (M. J. O’Sullivan et al., 1985), from comparatively more dilute waters such as at Wairakei ( _<_ 0.2 wt%). 

Although the Giggenbach (1995) and Seward and Kerrick (1996) compilations date from the 1990s, they characterize the pre‐development reservoir CO2 inventory and remain the most complete field‐wide data sets for the Taupo Volcanic Zone. This is a useful baseline for the initial concentration _C_ 0, which production subsequently depletes. Their magnitudes are corroborated by the field‐specific concentrations inferred here by calibration ( _C_ 0 = 0 _._ 78 wt% at Rotokawa, 0.46 wt% at Ngā Tamariki; Section 3.3), although targeted resampling of individual reservoirs would refine these values. 

16 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

**Table 1** 

_Nomenclature Used in This Study_ 

|Symbol|Definition|Units|Equations|
|---|---|---|---|
|_aP_|Pressure ODE pumping coefficient|m<sup>−1 </sup>s<sup>−2</sup>|Equation5|
|_bP_|Pressure ODE recharge coefficient|s<sup>−1</sup>|Equation5|
|_ci_|Solubility fit coefficients|Various||
|_fC_|CO2 capture efficiency|–|Equation17|
|_fq_|Net extraction fraction|–|Equation5|
|_g_|Acceleration due to gravity|m s<sup>−2</sup>||
|_k_|Permeability|m<sup>2</sup>|Equation1|
|_q_|Mass flow rate|kg s<sup>−1</sup>|Equation1|
|_q_0|Extraction rate|kg s<sup>−1</sup>|Equation5|
|_q_0,_c_|Critical extraction rate for reversal|kg s<sup>−1</sup>||
|_q_out|Outflow rate to surface/aquifers|kg s<sup>−1</sup>|Equation10|
|_q_up|Upflow rate from depth|kg s<sup>−1</sup>|Equation9|
|_t_|Time|s||
|_tP_|Pressure equilibration timescale|yr|Equation8|
|_tq_|Reservoir flushing timescale|yr|Equation26|
|_t_res|Reservoir residence time|yr|Equation13|
|_tr_|Outflow reversal time|yr||
|_tα_|CO2 restoration timescale|yr|Equation26|
|_tβ_|CO2 loss timescale|yr|Equation26|
|_A_|Cross‐sectional flow area|m<sup>2</sup>|Equation1|
|_C_|Dissolved CO2 concentration|wt%|Equation17|
|_C_0|Initial reservoir concentration|wt%||
|_Cr_|Equilibrium concentration for reactions|wt%|Equation17|
|_Cs_|CO2 solubility in liquid|wt%|Equation18|
|_C_∞|Steady‐state concentration|wt%|Equation29|
|_H_|Reservoir vertical height|m||
|_K_|Total recharge coefficient|m s|Equation4|
|_K_aq|Aquifer recharge coefficient|m s||
|_K_cap|Caprock recharge coefficient|m s||
|_K_out|Combined outflow coefficient|m s|Equation4|
|_K_up|Upflow recharge coefficient|m s|Equation4|
|_L_|Characteristic flow distance|m|Equation1|
|_M_|Reservoir liquid mass|kg||
|_P_|Reservoir pressure (rel. hydrostatic)|Pa|Equation2|
|_P_0|Initial reservoir pressure|MPa|Equation4|
|_P_up|Upflow driving pressure|MPa|Equation4|
|_P_∞|Steady‐state pressure|MPa|Equation8|
|_Q_dg|Degassing emissions rate|kt yr<sup>−1</sup>|Equation19|
|_Q_surf|Surface emission rate|kt yr<sup>−1</sup>|Equation23|
|_Q_surf,0|Pre‐development surface emission rate|kt yr<sup>−1</sup>|Equation45|
|_Q_plant|Power plant emissions rate|kt yr<sup>−1</sup>||
|_Q_total|Total emissions rate|kt yr<sup>−1</sup>||
|_S_|Reservoir upper surface area|km<sup>2</sup>||

17 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

### **Table 1** 

|_Continued_||||
|---|---|---|---|
|Symbol|Definition|Units|Equations|
|_T_|Temperature|_°_C||
|_V_|Reservoir volume|m<sup>3</sup>||
|_α_|CO2 source coefficient|s<sup>−1</sup>|Equation26|
|_β_|CO2 decay coefficient|s<sup>−1</sup>|Equation26|
|_γ_|CO2‐pressure coupling coefficient|s<sup>−1</sup>|Equation26|
|_δ_|CO2‐pressure coupling source|s<sup>−1</sup>|Equation26|
|_κ_|Mineralization rate constant|kg s<sup>−1</sup>|Equation17|
|_tκ_|Mineralization timescale_M/κ_|yr||
|_λ_1|Dominant DDE characteristic root|s<sup>−1</sup>|Equation35|
|_μ_|Dynamic viscosity|Pa s|Equation1|
|_η_|Return fraction of reinjected CO2|–||
|_ρ_|Liquid density|kg m<sup>−3</sup>||
|_τ_|Reinjection breakthrough delay|yr|Equation33|
|_ϕ_|Porosity|–||
|_β_0|DDE immediate removal coefficient|s<sup>−1</sup>|Equation33|
|_βτ_|DDE delayed return coefficient|s<sup>−1</sup>|Equation33|
|_C_up|CO2 concentration of upflow|wt%|Equation17|
|_C_out|CO2 concentration of reversed inflow|wt%|Equation17|
|Δ_P_|Pressure drawdown|MPa||
|_fK_|Upflow fraction_K_up_/K_|–||
|_Q_anthropogenic|Anthropogenic emissions rate|kt yr<sup>−1</sup>||
|_Q_overcount|Overcount of plant versus anthropogenic emissions|kt yr<sup>−1</sup>|Equation46|
|_t_CO2|Time CO2 reinjection begins|yr||

## **3.2. General CO2 Emissions Trends** 

The results presented in this section are intended to be illustrative of the physical mechanisms that may combine to drive emissions changes in geothermal fields over years to decades. To highlight particular features, certain parameter selections have been made. More extensive parameter sweeps are included in the Supporting Information S1, while field‐specific parameter choices are presented in Section 3.3. 

## **3.2.1. CO2 Saturated Fields** 

Figure 3 shows the CO2 content and emissions trajectory of a non‐reactive ( _κ_ = 0), high‐gas field of typical size, throughput and responsiveness ( _M_ = 10<sup>11</sup> kg, _K_ = 10<sup>−4</sup> m s, _tP_ = 10 years). The field is subject to fluid extraction at 150% of _q_ 0, _c_ but with 60% fluid reinjection ( _fq_ = 0.4) to prevent an outflow reversal. The field has initial CO2 content of 3.5 wt%, pre‐development emissions of 33 kt yr<sup>−1</sup> , with production driving pressure depletion (relative to hydrostatic) from 0.6 to 0.24 MPa. Production is held at a constant net rate for a period of 200 years for illustrative purposes, which is much longer than the envisaged lifetime of 30–50 years. 

For the case of zero emissions capture and injection ( _fC_ = 1), CO2 concentration in the reservoir declines steadily at a characteristic time, _tβ_ of 31 years. Dilution is driven by the reinjection of CO2 depleted fluid. The diluting effect is lessened in the case of 50% emissions capture and injection ( _fC_ = 0.5), with the characteristic time lengthening to 56 years. 

From an emissions perspective, the pressure decline from production drives degassing of up to 18 kt yr<sup>−1</sup> for the first two decades. A similar response is observed in the model of M. O’Sullivan et al. (2021) coincident with the start of production from the Ohaaki reservoir. 

18 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

**Table 2** 

_Representative Values and Basis for the Key Model Parameters_ 

|Parameter|Representative value/range|Units|Source/basis|
|---|---|---|---|
|_S_|∼10|km<sup>2</sup>|Bibby et al. (1995)|
|_H_|100–1000|m|Illustrative (NZ fields)|
|_ϕ_|∼0_._1|–|Illustrative (NZ fields)|
|_ρ_|∼10<sup>3</sup>|kg m<sup>−3</sup>|Illustrative|
|_M_|10<sup>11</sup>–10<sup>12</sup>|kg|Illustrative (NZ range)|
||1_._2 × 10<sup>11 </sup>(RK),<br>1_._5 × 10<sup>11 </sup>(NT)|kg|Calibrated|
|_P_0|∼0_._6 (∼10_%_over hydrostatic)|MPa|Grant and Bixley (2011)|
|_P_up|1.2 (for_K_up ≈_K_out)|MPa|Equation4|
|_K_|∼10<sup>−3 </sup>(Wairakei)|m s|Fradkin et al. (1981)|
||0_._55 × 10<sup>−4 </sup>(RK),<br>1_._0 × 10<sup>−5 </sup>(NT)|m s|Calibrated|
|_tP_|10 (Wairakei); 1 (RK, NT)|yr|Fradkin et al. (1981); calibrated|
|_C_0|_>_3 (Ohaaki, shallow),<br>_<_0_._2 (Wairakei)|wt%|M. J. O’Sullivan et al. (1985), Giggenbach (1995),<br>and Seward and Kerrick (1996)|
||0.78 (RK), 0.46 (NT)|wt%|Calibrated|
|_fq_|0–1; 0.26 (RK), 0.018 (NT)|–|Illustrative; calibrated|
|_fC_|≤1; 1 (RK), 0.85 (NT)|–|Illustrative; Ghafar et al. (2022) (NT)|
|Δ_P_|2.5 (RK), 0.2 (NT)|MPa|Quinao et al. (2013) and Potter et al. (2020)|
|_tκ_ = _M/κ_|2 months (basalt),∼5 yr, ≫decades (silicic)|yr|Snæbjörnsdóttir et al. (2020); illustrative; Altar et al. (2024)|
|_τ_|0–30|yr|Illustrative|
|_Ps_,ref|1.5|MPa|Reference state, Equation18|
|_Cs_,ref|0.01|–|Reference state, Equation18|
|_dCs/dP_|_T_‐dependent (AppendixA)|wt% MPa<sup>−1</sup>|Duan and Sun (2003)|

_Note._ Symbols and units are defined in Table 1. RK denotes Rotokawa and NT Ngā Tamariki. 

**Figure 3.** A high‐gas, solubility‐constrained field with _K_ = 10<sup>−4</sup> m s and 60% fluid reinjection. Two CO2 capture scenarios are distinguished by line weight: zero capture (bold solid, _fC_ = 1) and 50% capture and injection (thin solid, _fC_ = 0 _._ 5). (a) Reservoir CO2 concentration, with the pre‐development level shown as a gray dotted line. (b) Disaggregated emissions, where color denotes the pathway, degassing (cyan), surface (blue) and plant (green), and line weight denotes the capture scenario as in (a). (c) Total (plant plus surface) emissions; the gray dotted line is the pre‐development equilibrium _Q_ total,0 and the gray dashed line is the post‐development equilibrium _Q_ total,∞. 

19 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

**Figure 4.** A low‐gas field ( _K_ up = _K_ out = 10<sup>−3</sup> m s). Four cases are distinguished by line weight and style: no capture (bold solid, black), 100% capture of produced CO2 (thin solid, black), 110% capture (thin dashed, black), and 110% capture with mineralization (bold dashed, black; _Cr_ = _C_ 0). (a) Reservoir CO2 concentration, with the pre‐development level shown as a gray dotted line. (b) Disaggregated emissions, where color denotes the pathway, surface (blue) and plant (green), and line weight and style denote the case as in (a). (c) Total (plant plus surface) emissions; the gray dotted line is the pre‐development equilibrium _Q_ total,0 and the gray dashed line is the post‐ development equilibrium _Q_ total,∞. 

Surface emissions are higher than pre‐development at early time (Figure 3c), primarily due to the degassing. Later, they drop below the pre‐development level as outflows diminish and reservoir concentration drops. Plant emissions are mostly higher than field emissions, ranging near parity (early on, for the case of 50% CO2 capture and injection) to more than a factor of 5 at late time (Figure 3b). 

Total emissions from the field, summing contributions from the plant and through the surface, always exceeds the pre‐development baseline. They are especially elevated in early decades (from degassing), and then trend down to a new equilibrium. This new equilibrium exceeds the pre‐development baseline by an amount equal to the CO2 content of the induced upflow. 

## **3.2.2. Undersaturated Fields** 

The contrasting end‐member to the solubility‐constrained field is the low‐gas system (Figure 4). This field is closer in character to Wairakei, having a higher mass throughput ( _K_ = 10<sup>−3</sup> m s) but lower initial CO2 concentration (0.3 wt%). Fluid is extracted at 150% of _q_ 0, _c_ with 80% then reinjected; the high recharge ( _K_ = 10<sup>−3</sup> m s) places this case at the high‐throughput, Wairakei‐like end of the range in Section 3.1, an order of magnitude above the high‐gas case of Figure 3, and the relatively high reinjection fraction is chosen so that the outflow does not reverse (contrast the 20% reinjection case of Figure 5). Three CO2 capture scenarios were considered as 

**Figure 5.** Evolution of CO2 content and emissions in a low‐gas field ( _K_ up = _K_ out = 10<sup>−3</sup> m s) prior to and after a reversal of outflow. Two cases are distinguished by line weight: no capture (bold solid, black) and 50% capture (thin solid, black). In all panels the red dashed vertical line marks the reversal time _tr_ . (a) Reservoir pressure. (b) Reservoir CO2 concentration; the gray dashed line is the post‐reversal equilibrium concentration _C_ ∞. (c) Surface (blue) and plant (green) emissions, with line weight denoting the capture case as in (b); the gray dotted line is the pre‐development equilibrium of total emissions _Q_ total,0 and the gray dashed line is the post‐development equilibrium _Q_ total,∞. 

20 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

illustrative end‐members spanning the under‐injecting ( _fC > fq_ ), balanced ( _fC_ = _fq_ ) and over‐injecting regimes of Equation 39: no capture, 100% capture, and 110% capture. In the latter, an additional 10% of CO2, sourced elsewhere, is injected into the reservoir for storage (e.g., Titus et al., 2025). These parameter choices are illustrative only, selected to show the different categories of response that may arise rather than to represent a specific field. 

Without CO2 capture, the field follows a quite rapid diluting trend, reflecting the high rates of reinjection. When CO2 capture exceeds the reinjection fraction ( _fC > fq_ ), a relatively concentrated fluid is now injected into the reservoir, resulting in a concentrating trajectory. In this case, CO2 content approximately doubles to 0.55 wt% for the case of 100% CO2 capture, and about 1.0 wt% when a further 10% is injected (110% capture, _fC_ = − 0.1). 

For the 110% capture scenario, although plant emissions are increasingly negative over time (Figure 4b), the concentrating of CO2 in the reservoir increases the natural field emissions in equal proportion. The net impact on total emissions is eventually the same for all scenarios (Figure 4c), although the lower capture scenarios had higher emissions at early times. This result highlights the advice of Titus et al. (2025) that if carbon removal is to be undertaken in geothermal systems, particular care must be taken that re‐entry of injected CO2 into the reservoir be minimized as much as possible. 

## **3.2.3. Mineralization Reactions** 

For illustration purposes, the possibility was considered that mineralization reactions within the reservoir might partially suppress elevated CO2 concentrations back to their equilibrium level. The quite rapid mineralization that occurs with basalts at CarbFix should use a reaction time constant of _M/κ_ = 2 months (Snæbjörnsdóttir et al., 2020). For illustration here, a reaction time constant of 5 years (30‐times slower than Carbfix) was used, with _Cr_ = _C_ 0, applied to the negative emissions scenario. This intermediate value is chosen to bracket the plausible range: it is far slower than the ∼2‐month basalt rate at Carbfix (Snæbjörnsdóttir et al., 2020) but faster than the decades‐to‐centuries timescales expected in the comparatively unreactive silicic and rhyolitic reservoirs typical of New Zealand (Altar et al., 2024; Siahaan et al., 2024), and is large enough that its buffering effect is visible over the modeled period. 

The principal effect of mineralization reactions is to reduce CO2 concentration in the reservoir, which stabilizes at about half the value it would have reached if no reactions were present. This in turn reduces the field emissions and ensures overall total emissions remain below even the initial pre‐development baseline for this field. Mineralization reactions are clearly a key process for secure, long‐term carbon storage in negative emissions operations. 

## **3.2.4. Reversal of Outflow** 

For geothermal operations characterized by high rates of extraction and relatively low fractions of reinjection, pressure in the reservoir can drop below the threshold at which the outflow reverses. The example considered here is a variant of the low‐gas system from the previous subsection except that reinjection is limited to just 20% of extraction. This results in an outflow reversal after ∼18 years that brings fresh water ( _C_ out = 0) into the reservoir (Figure 5). 

Three transients are present in the CO2 content and emissions trajectory of this model. At early time, CO2 decline is dominated by reinjection of relatively CO2 depleted water to the reservoir. The decline arrests and is eventually reversed as pressure depletion brings additional CO2 through induced upflow. Finally, this ascending trend is itself limited following the outflow reversal as fresh water starts to enter the reservoir. In the absence of degassing, surface emissions drop to zero once the reversal occurs, however total emissions via the plant remain elevated compared to the pre‐development baseline. 

## **3.2.5. Delayed Return of Reinjected CO2** 

Reinjection of captured CO2 at sufficient distance from the production area will result in a delay in its return. Figure 6 illustrates how reservoir inertia and degree of capture influence CO2 content trends. In all cases, the early‐time is characterized by a diluting trend that follows the no capture solution. Following the breakthrough 

21 of 36 

DEMPSEY 

**Water Resources Research** 10.1029/2026WR044239 

**Figure 6.** Effect of a delay in reinjection returns on reservoir CO2 content. (a) A less responsive reservoir ( _K_ = 10<sup>−4</sup> m s) and 35% CO2 capture, (b) the same reservoir with 65% capture, and (c) a more responsive reservoir with _K_ = 10<sup>−3</sup> m s and 65% capture. Within each panel, progressively larger breakthrough delays of 0 (immediate; thin solid), 3 (medium solid) and 30 years (bold solid) are denoted by increasing line weight. Post‐breakthrough late‐time approximate solutions (Equation 36) are shown as dashed black lines. For reference, the gray dotted line is the pre‐development concentration and the blue dotted line is the no‐breakthrough (never‐returning) solution. 

time, _τ_ , the diluting trend is reversed, and CO2 content starts to increase, potentially exceeding the pre‐ development baseline depending on the amount of CO2 capture. 

Reservoir responsiveness, here characterized by recharge coefficient _K_ , controls some aspects of the post‐ breakthrough trajectory. “Fast” reservoirs that respond more rapidly to CO2 arrival, present as a series of stepped increases in CO2 content (Figure 6c), however this requires multiple terms of the exponential basis in Equation 35 to be evaluated. In practice, mixing and dispersion effects are unlikely to permit such sharp arrivals and, as such, the approximate solution Equation 36 is likely to provide an adequate representation, even more so in less responsive reservoirs (Figure 6b). 

## **3.3. Calibrated Models for Rotokawa and Ngā Tamariki** 

Models were calibrated for Ngā Tamariki and Rotokawa geothermal fields by Bayesian inference. The emcee ensemble Markov chain Monte Carlo (MCMC) sampler (Foreman‐Mackey et al., 2013) was used, with 10 walkers, 3,000 burn‐in steps, and 8,000 production steps thinned by a factor of five, yielding 16,000 posterior samples per field. In both cases, initial dissolved CO2 concentration _C_ 0 and reservoir liquid mass _M_ (log‐uniform on [5 × 10<sup>10</sup> , 10<sup>12</sup> ] kg) were free parameters, as was the upflow fraction _fK_ = _K_ up _/K_ ( _fK_ is not meaningfully identified by plant‐emissions data alone and its posteriors are presented separately in the Supporting Information S1). The two fields had different parameterizations for the remaining degrees of freedom, as described in the field subsections below. Figures 7 and 8 show 100‐member posterior ensemble trajectories alongside observed plant emissions and marginal histograms of calibrated parameters and derived quantities. 

The likelihood scores each candidate model by the Gaussian misfit between its predicted annual plant emissions and the reported values. The standard deviation _σ_ reflects a judgment of model error embodied in the expected year‐to‐year variability of emissions that a lumped model is unable to resolve, and is set large enough to admit a reasonable spread of models passing through the scatter in the emissions record. The larger value at Rotokawa ( _σ_ = 8 kt yr<sup>−1</sup> vs. 4 kt yr<sup>−1</sup> at Ngā Tamariki) reflects its larger absolute emissions and more variable record. The priors were chosen to be weakly informative where field constraints are scarce and informative where they are not. The log‐uniform priors on _M_ and _fq_ span the plausible orders of magnitude of TVZ reservoir mass and net extraction fraction without favoring a particular value, the Gaussian prior _q_ up ∼ N( 39,5<sup>2</sup> ) kg s<sup>−1</sup> at Ngā Tamariki is centered on the natural‐upflow estimate of Seward and Kerrick (1996), and the uniform prior _fq_ ∈ [0 _._ 2,1 _._ 0] at Rotokawa encodes the ∼ 78 _%_ fluid reinjection (Quinao et al., 2013) as a lower bound on net extraction, and the broad prior on _fK_ reflects that plant‐emissions data cannot identify the upflow fraction independently (Supporting Information S1). 

22 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

**Figure 7.** Calibrated model results for Ngā Tamariki. (a) 100‐member posterior ensemble of plant (green), surface (blue), and total (black) emission trajectories against reported plant emissions (circles). (b) Marginal histograms of initial dissolved CO2 concentration _C_ 0 (hatched) and equilibrium value _C_ ∞ (shaded; pink: no outflow reversal, blue: outflow reversal). (c) Net extraction fraction _fq_ (sampled in log10 space). (d) Natural upflow _q_ up [kg s<sup>−1</sup> ] with prior N ( 39, 5<sup>2</sup> ) overlaid (red curve). (e) Initial surface emissions _Q_ surf,0 (hatched), final surface _Q_ surf,∞ (medium gray), and final plant _Q_ pp,∞ (light gray). (f) CO2 loss timescale _tβ_ . (g) Reservoir liquid mass _M_ . The upflow fraction _fK_ is shown in Supporting Information S1. 

## **3.3.1. Ngā Tamariki** 

At Ngā Tamariki, an 83 MWe binary power station was commissioned in 2013 with a resource consent for up to 60,000 t d<sup>−1</sup> (694 kg s<sup>−1</sup> ) of geothermal fluid (Ghafar et al., 2022). The four generating units collectively extract approximately 2,000 t h<sup>−1</sup> (556 kg s<sup>−1</sup> ), with nominally 100% fluid reinjection. The reservoir is 280–290 _°_ C with dissolved gas content below 0.3 wt%, of which approximately 95% is CO2 (Ghafar et al., 2022). About 15% of produced NCGs are dissolved in the binary system condensate and returned to the subsurface naturally. This is represented in the model by setting _fC_ = 0 _._ 85 (Ghafar et al., 2022). Reservoir pressure drawdown is reported to have equilibrated within about 18 months of the start of production (Potter et al., 2020). This was captured by setting the pressure timescale to _tP_ = 1 yr. The model extraction rate was fixed at 48,000 t d<sup>−1</sup> (556 kg s<sup>−1</sup> ; the 

23 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

**Figure 8.** Calibrated model results for Rotokawa ‐ Ngā Awa Pūrua. (a) 100‐member posterior ensemble of plant (green), surface (blue), and total (black) emission trajectories against reported plant emissions (circles). (b) Marginal histograms of initial dissolved concentration (hatched) and equilibrium value (shaded; pink: no outflow reversal, blue: outflow reversal). (c) Net extraction fraction (sampled in space). (d) Recharge coefficient. (e) Initial surface emissions (hatched), final surface (medium gray), and final plant (light gray). (f) Loss timescale. (g) Reservoir liquid mass. The upflow fraction is shown in Supporting Information S1. 

reported actual throughput (Ghafar et al., 2022)) and the pressure drawdown at Δ _P_ = 0 _._ 2 MPa (Potter et al., 2020). 

Rather than inferring _K_ from the pressure constraint alone, _K_ was constrained using estimates of the pre‐ development natural upflow. In the pre‐development state, _q_ up _,_ 0 = _fK_ ( 1 − _fK_ ) _KP_ up, and a Gaussian prior _q_ up ∼ N( 39, 5<sup>2</sup> ) kg s<sup>−1</sup> was placed on the natural upflow based on values reported by Seward and Kerrick (1996). The net extraction fraction _fq_ was sampled in log10 space with a uniform prior over log10 ( _fq_ ) ∈ [− 3, 0]. A Gaussian likelihood with _σ_ = 4 kt yr<sup>−1</sup> was used to score models based on their similarity to plant emissions data from McLean et al. (2024), covering 2015–2023 and excluding the partial‐year 2014 during which the plant was starting up. 

24 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

Posterior estimates give reservoir averaged _C_ 0 = 0 _._ 46 wt% (10‐90th percentile: 0.43–0.49 wt%), a natural upflow _q_ up = 38 _._ 5 kg s<sup>−1</sup> (28–48 kg s<sup>−1</sup> , close to the prior), and a recharge coefficient _K_ ≈ 1 _._ 0 × 10<sup>−5</sup> m s (0.73–1.8 ×10<sup>−5</sup> m s). The net extraction fraction _fq_ = 0 _._ 018 (0.002–0.16) is broadly distributed, reflecting weak sensitivity of the concentration decline to small residual extraction under near‐complete reinjection. The inferred reservoir mass is _M_ = 1 _._ 5 × 10<sup>11</sup> kg (1.2–1.9 × 10<sup>11</sup> kg), which is on the low end of the range expected for TVZ geothermal systems (10<sup>11</sup> –10<sup>12</sup> kg), suggesting extraction accesses only a part of the full reservoir height or a low‐ porosity fracture network. The associated CO2 loss timescale is _tβ_ ≈ 9 _._ 6 yr (8.0–11.7 years). Approximately 14% of posterior samples had an outflow reversal. At the new equilibrium, the dissolved concentration falls to _C_ ∞ ≈ 0 _._ 041 wt% (0.030–0.073 wt%), with steady‐state plant emissions of approximately 6 kt yr<sup>−1</sup> (4–11 kt yr<sup>−1</sup> ) and surface emissions of approximately 0.4 kt yr<sup>−1</sup> (essentially zero for the reversal fraction). Pre‐ development surface emissions are estimated at 5.5 kt yr<sup>−1</sup> (4.1–7.0 kt yr<sup>−1</sup> ; Figure 7). 

The median inferred natural upflow of 38.5 kg s<sup>−1</sup> and reservoir mass of 1 _._ 5 × 10<sup>11</sup> kg give a pre‐development residence time _t_ res,0 ≈ 123 yr (Equation 14). Under production, the induced upflow raises total throughput to approximately 44 kg s<sup>−1</sup> , shortening the residence time to _t_ res,∞ ≈ 109 yr ( _t_ res,∞ _/ t_ res,0 ≈ 0 _._ 89). The relatively modest reduction reflects the small net extraction fraction ( _fq_ = 0 _._ 018) under near‐complete reinjection, which only weakly perturbs the natural circulation. 

## **3.3.2. Rotokawa ‐ Ngā Awa Pūrua** 

The Rotokawa field has produced geothermal power since 1997, initially at 24 MW via a combined‐cycle plant, which expanded to 34 MWe by 2003. The 138 MWe Ngā Awa Pūrua (NAP) flash plant was commissioned in 2010 (Quinao et al., 2013), increasing total fluid extraction from 645 t h<sup>−1</sup> (179 kg s<sup>−1</sup> ) to 2,570 t h<sup>−1</sup> (714 kg s<sup>−1</sup> ), with approximately 78% reinjected (Quinao et al., 2013). Pressure drawdown across the production area reached 2.5–3.0 MPa, inducing boiling in parts of the field, and the rate of drawdown stabilized 16–18 months after commissioning (Quinao et al., 2013). Reservoir temperatures in the production area are approximately 320–330 _°_ C (Quinao et al., 2013). No CO2 capture was in place during the calibration period (2011–2021), so _fC_ = 1. Model extraction and pressure drawdown were fixed at 1,925 t h<sup>−1</sup> (535 kg s<sup>−1</sup> ) and 2.5 MPa, respectively. _K_ was inferred from the pressure constraint _K_ = _fqq_ 0 _/_ Δ _P_ , with _fq_ given a uniform prior on [0 _._ 2, 1 _._ 0] consistent with the field's ∼ 78 _%_ fluid reinjection (Quinao et al., 2013), which implies a minimum net extraction fraction of 0.2. A Gaussian likelihood was again used to score the models with _σ_ = 8 kt yr<sup>−1</sup> . 

Posterior estimates give _C_ 0 = 0 _._ 78 wt% (10–90th percentile: 0.74–0.83 wt%), _fq_ = 0 _._ 26 (0.21–0.47), and _K_ ≈ 0 _._ 55 × 10<sup>−4</sup> m s (0.45–1.0 × 10<sup>−4</sup> m s). Reservoir mass _M_ = 1 _._ 2 × 10<sup>11</sup> kg (0.9–1.6 ×10<sup>11</sup> kg), which, like Ngā Tamariki, is on the low end of the expected range. The corresponding CO2 loss timescale is _tβ_ ≈ 6 _._ 3 yr (4.4–8.7 years). About 21% of the posterior samples show an outflow reversal, reflecting the high extraction rate relative to the inferred recharge. These samples predict near‐zero surface emissions (from the reservoir) and are shown in blue in the histogram panels (Figure 8). For non‐reversal samples, at the new equilibrium the dissolved concentration falls to _C_ ∞ ≈ 0 _._ 30 wt% (0.23–0.36 wt%), with steady‐state surface emissions of 3–19 kt yr<sup>−1</sup> and plant emissions of approximately 49 kt yr<sup>−1</sup> (36–59 kt yr<sup>−1</sup> ). Pre‐development surface emissions are estimated at 44 kt yr<sup>−1</sup> (22–59 kt yr<sup>−1</sup> ; Figure 8). This is well below the 126–161 kt yr<sup>−1</sup> measured by surface CO2 flux surveys (Bloomberg et al., 2014; Yang et al., 2024). The discrepancy likely reflects CO2 pathways not captured by this single‐reservoir lumped model that describes only a producing subsection of the entire system. 

For the median Rotokawa model (with _fK_ = _K_ up _/ K_ = 0 _._ 5), the natural upflow of ∼250 kg s<sup>−1</sup> yields a pre‐ development residence time _t_ res,0 ≈ 15 yr, considerably shorter than at Ngā Tamariki due to the order‐of‐ magnitude larger recharge coefficient. Under production, the induced upflow raises throughput to ∼320 kg s<sup>−1</sup> , reducing the residence time to _t_ res,∞ ≈ 12 yr ( _t_ res,∞ _/ t_ res,0 ≈ 0 _._ 78). 

# **4. Discussion** 

The prior results present a number of implications relevant to CO2 storage in geothermal fields. First, several characteristic timescales govern the emissions response and their relative ordering determines which processes dominate (Section 4.1). Second, the overcount of anthropogenic emissions arising from plant‐only metering is quantified, both as a rate and as a cumulative cost (Section 4.2). Third, the distinct behavior of CO2 reinjection 

25 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

**Table 3** 

_Characteristic Timescales of the Lumped‐Parameter CO_ 2 _Model_ 

|Timescale|Definition|Control|Calibrated values|
|---|---|---|---|
|_tP_|_Sϕ/_(_Kg_)|Reservoir|1–10 years|
|_tβ_|1_/β_|Both|6.3 years (RK), 9.6 years (NT)|
|_tα_|_C_0_/α_|Both|–|
|_t_res|_M/_|_q_up||Both|15 years (RK), 123 years (NT)|
|_tq_|_M/_(_fqq_0)|Operational|–|
|_τ_|Injection‐production lag|Operational|0–30 years|
|_tκ_|_M/κ_|Reservoir|2 months (basalt), ≫100 years (silicic)|

with delayed breakthrough is considered (Section 4.3). Finally, the implications of these mechanisms for long‐ term CO2 storage in a flow‐through geothermal reservoir are discussed (Section 4.4). 

## **4.1. Timescales** 

The CO2 emissions response of a geothermal system is governed by the interplay of several characteristic timescales. Some are intrinsic properties of the reservoir, others are set by operational decisions, and several depend on both. Table 3 summarizes the six timescales that arise in the model, their definitions, and the degree to which they are amenable to operational control. 

Exponential responses of pressure and CO2 content in geothermal reservoirs can be characterized by their associated timescales. The pressure equilibration time _tP_ is an intrinsic reservoir property set by hydraulic conductivity, surface area and porosity, with values of order 1–10 yr for the fields considered here. The CO2 loss time _tβ_ = 1 _/β_ and restoration time _tα_ = _C_ 0 _/α_ characterize how rapidly CO2 is removed from and replenished in the reservoir. Both depend on reservoir properties such as outflow conductivity and natural upflow, and operational parameters like extraction rate, capture fraction and mineralization. The exponential decline in plant emissions documented across New Zealand geothermal fields (McLean et al., 2024) and Turkish fields (Akın et al., 2020) is consistent with the _tβ_ ‐controlled decay predicted by this model. Hosgor et al. (2016) recovered this exponential character in an earlier lumped‐parameter formulation, whereas this study extends that framework to resolve the interplay of _tβ_ with other timescales. 

The reservoir residence time _t_ res = _M/_ | _q_ up| measures how long fluid and dissolved CO2 reside in the reservoir before exiting. This is primarily a reservoir property but shortens under production as extraction draws additional deep upflow (Section 2.2.1). Under pre‐development conditions, Rotokawa has _t_ res,0 ≈ 15 yr while Ngā Tamariki has _t_ res,0 ≈ 123 yr, reflecting a ten‐fold difference in natural throughput rates. Under production, these shorten to approximately 12 and 105 years, respectively. The flushing time _tq_ = _M/_ ( _fqq_ 0) and breakthrough delay _τ_ are mainly operational: _tq_ is set by net extraction rate and controls the pace of fluid overturning and CO2 extraction from the reservoir, while _τ_ depends on injection well placement and reservoir flow paths. Finally, the mineralization timescale _tκ_ = _M/κ_ is a reservoir property that varies by orders of magnitude with lithology, from ∼2 months in reactive basalts (Snæbjörnsdóttir et al., 2020) to multiple decades or centuries in mildly reactive silicic formations (Altar et al., 2024). 

The relative ordering of these timescales determines which physical processes dominate the emissions trajectory. Four key comparisons are discussed below. 

## **4.1.1. Pressure Equilibration Versus CO2 Loss (** **_tP_ Relative to** **_tβ_ )** 

When pressure equilibration is rapid ( _tP_ ≪ _tβ_ ), the degassing pulse driven by pressure decline is short‐lived relative to the concentration response. This early‐time degassing is the same phenomenon described by Grant (1977) and modeled by M. O’Sullivan et al. (2021) in gas‐dominated fields such as Broadlands‐Ohaaki. This transient damps out within a few _tP_ and the subsequent evolution of reservoir concentration is controlled almost entirely by the slower loss timescale _tβ_ . In this limit the two‐exponential solution (Equation 29) effectively 

26 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

reduces to a single decaying exponential, and emissions trajectories are smooth and near‐monotone after the first few years. 

When pressure equilibration is slow ( _tP_ ≫ _tβ_ ), the pressure‐driven CO2 source changes gradually throughout the field lifetime. Reservoir concentration tracks the slowly‐varying pressure quasi‐statically, so emissions depend more on the rate of pressure decline rather than on the eventual steady‐state pressure. 

## **4.1.2. Breakthrough Delay Versus CO2 Loss (** **_τ_ Relative to** **_tβ_ )** 

When the breakthrough delay is short ( _τ_ ≲ _tβ_ ), the DDE correction to concentration dynamics is modest. Reinjected fluid returns quickly relative to the concentration response, and the system converges smoothly to the delayed‐case equilibrium _C_<sup>(</sup> ∞<sup>_τ_)=</sup><sup>_α/_(</sup><sup>_β_−</sup> _γ_ ) without significant overshoot. The higher steady‐state concentration relative to the no‐delay case is approached gradually. 

When the breakthrough delay is long ( _τ_ ≫ _tβ_ ), the reservoir concentration first approaches the apparent no‐delay equilibrium _C_<sup>(</sup> ∞<sup>0)=</sup><sup>_α/β_, as if no recirculation were occurring. At time</sup><sup>_t_≈</sup><sup>_τ_the presumably high concentration</sup> reinjected fluid returns to the reservoir and begins perturbing the reservoir. An example of a long‐delay system is described by von Hirtz (2016) where 20 years of NCG reinjection at Puna, Hawai'i, has yet to produce breakthrough. 

The delayed arrival of high‐CO2 reinjected water can cause a secondary rise in emissions. The initial apparent decline may suggest a false equilibrium that is lower than that eventually realized. This poses challenges for monitoring that measures and extrapolates short‐term trends. For NCG capture programmes, emissions trajectories measured before _t_ = _τ_ are likely to be insufficient for regulatory processes concerned with long‐term carbon storage. 

## **4.1.3. Mineralization Versus Return and Residence Times (** **_tκ_ Relative to** **_t_ res and** **_τ_ )** 

The ratio _tκ/_ ( _τ_ + _t_ res) determines whether injected CO2 is permanently sequestered through water‐rock reactions before it returns to and transits the reservoir. When _tκ_ ≪ _τ_ + _t_ res, mineralization converts dissolved CO2 to stable carbonates faster than it can exit from the subsurface. This is the condition for effective permanent storage. At Carbfix, where _tκ_ ≈ 2 months (Snæbjörnsdóttir et al., 2020), this condition is effectively satisfied against most plausible _t_ res excepting short‐circuit scenarios between injection and production wells. 

In less reactive formations typical of New Zealand geothermal systems, where _tκ_ may be decades to centuries (Altar et al., 2024), mineralization competes poorly with throughput and most dissolved CO2 passes through the reservoir unreacted. In such systems, the reservoir functions as a temporary dissolved‐phase store rather than a mineralization trap, and CO2 retention depends entirely on the residence time and operational strategy (Section 4.4). Where residence and mineralization times are comparable, placing injection wells further from the reservoir may be an effective method to reduce _tκ/_ ( _τ_ + _t_ res) and maximize mineral trapping. 

## **4.2. Overcounting of Emissions** 

The current emissions pricing scheme in New Zealand (the Emissions Trading Scheme—ETS) charges geothermal operators for CO2 emissions derived from produced geothermal fluids that are subsequently discharged to the atmosphere, that is, the plant emissions _Q_ pp. While straightforward to measure, this quantity does not always accurately represent the anthropogenic impact of geothermal production on a field's total CO2 emissions (M. O’Sullivan et al., 2021). These anthropogenic changes in geothermal surface emissions are not generally considered when calculating emissions factors for global inventories (Fridriksson et al., 2016). To address this gap, an overcount definition is developed that provides a physically‐motivated quantification of the effect. 

The overcount is defined as the difference between plant emissions and the true anthropogenic emissions: 

27 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

where _Q_ total = _Q_ pp + _Q_ surf is the total emissions from the field and _Q_ surf,0 is the pre‐development surface emission rate (Equation 45). A positive overcount indicates that plant emissions exceed the true anthropogenic impact and that the operator is being charged for emissions that would have occurred naturally. A negative overcount implies that plant emissions undercount the true impact, for instance when production‐induced changes to surface fluxes are not accounted for. 

At the post‐development steady state, the overcount can be evaluated analytically. Using the steady‐state mass balance (Equation 44), total emissions are _Q_ total,∞ = _Q_ surf,0 + ( _K_ up _/ K_ ) _fqq_ 0 _C_ 0, giving 

This expression highlights two competing effects. The first term represents plant emissions at the new equilibrium concentration, while the second represents the induced upflow of deep CO2‐bearing fluid that elevates surface emissions above their natural level. In the limit of zero CO2 reinjection ( _fC_ = 1), the overcount depends on the balance between plant emissions at the diluted equilibrium concentration and the induced upflow. In the opposite limit of complete CO2 reinjection ( _fC_ = 0), plant emissions vanish but surface emissions exceed _Q_ surf,0 due to induced upflow, giving a negative overcount. This implies that although the operator pays nothing, they are nevertheless increasing total field emissions. 

Integrating the overcount over a period of production gives the cumulative mass of CO2 for which an operator is over‐ or under‐charged, 

where the second equality follows because _Q_ overcount = _Q_ pp − ( _Q_ total − _Q_ surf,0) and _Q_ total = _Q_ pp + _Q_ surf, so the cumulative overcount is the time‐integrated suppression of surface emissions below their pre‐development baseline. For a non‐reactive field, solving Equation 48 with the closed‐form outflow (Equation 10) and concentration (Equation 29) yields a first term that grows linearly with time at the steady‐state rate _Q_ overcount,∞ (Equation 47), plus early transients that decay within a few characteristic times. Evaluating Equation 48 over the calibrated posterior ensembles, the cumulative overcount at Rotokawa over the 2011–2023 period for which the field has been charged is 0.37 MtCO2 (10‐90th percentile 0.15–0.60 Mt), approximately one third of the ∼1.1 Mt of plant emissions charged under the ETS over the same interval. Projected forward, it reaches 1.7 Mt at 50 years and 3.5 Mt at 100 years of production. At Ngā Tamariki the cumulative overcount is an order of magnitude smaller (0.036 Mt over 2015–2023, 0.48 Mt at 100 years), because its pre‐development surface emissions are much lower (about 5.5 kt yr<sup>−1</sup> against 44 kt yr<sup>−1</sup> at Rotokawa), leaving far less natural surface flux available to be suppressed. 

Figure 9 shows the overcount trajectories and steady‐state distributions for the calibrated Rotokawa and Ngā Tamariki models. At Rotokawa (Figure 9a), the overcount is large and positive, typically 17–45 kt yr<sup>−1</sup> , indicating that plant emissions substantially overestimate the anthropogenic contribution. This reflects the field's relatively high _fC_ = 1 (no CO2 capture) and moderate concentration decline. At Ngā Tamariki (Figure 9b), the overcount is much smaller and trends toward zero over time. This is because the field has a relatively small throughput ( _K_ ≈ 1 _._ 0 × 10<sup>−5</sup> m s) compared to the extraction rate, which results in substantial suppression of the surface emissions that are largely substituted by plant emissions. 

The practical implication is that plant‐based emissions accounting, while easier to implement than field‐wide surface flux measurements, is likely introducing a systematic bias whose sign and magnitude depends on field and plant‐specific characteristics. This has been recognized by Bertani and Thain (2002) and M. O’Sullivan et al. (2021), the latter who modeled an emissions balance for operation of the Ohaaki geothermal field, although they did not explicitly quantify the overcount. For Rotokawa, a modeled overcount between 30 and 40 kt yr<sup>−1</sup> corresponds to an annual expense of 1.5–2.0 M $NZ at a contemporary ETS emission price of 50 $NZ/t. This is 5–6 times higher than the overpayment estimated by Yang et al. (2024) based on changes in surface emissions at the field. 

28 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

**Figure 9.** Overcount of emissions for the calibrated models. (a, b) Time series of overcount for 100‐member posterior ensembles at Rotokawa and Ngā Tamariki, respectively. (c, d) Histograms of steady‐state overcount _Q_ overcount,∞ across the full posterior. 

Sbrana et al. (2021)have gonefurther, proposingthat at locations like Mt. Amiata, surfaceemissions are suppressed in proportion with plant emissions and, since the net anthropogenic impact is small, such fields should be exempt from emissions charges. This is approximately the case for the median Ngā Tamariki model, but only in the equilibrium limit. Following some decades of the field diluting to low concentration, plant emissions of 6 kt yr<sup>−1</sup> approximately balance the 5.5 kt yr<sup>−1</sup> of pre‐development surface emissions that are eventually suppressed to 0.5 kt yr<sup>−1</sup> . In the interim, however, plant emissions are substantially higher than the modeled pre‐development level, and the overcount is comparatively small, generally _<_ 5 kt yr<sup>−1</sup> . 

These simplified models, although capable of matching and explaining emissions trends and inferring unobserved surface or unobservable baseline emissions, are likely not sufficient on their own to support changes to regulation or field‐specific corrections to emissions charges. The advances needed to bridge this gap—including field‐ specific numerical models, repeat surface CO2 flux surveys, and continuous monitoring—are discussed further in Section 5. 

## **4.3. CO2 Reinjection and Delayed Breakthrough** 

This section considers the impact of 100% CO2 reinjection at a producing geothermal field. In these scenarios, pressure equilibration is assumed to occur quickly during initial production, that is, _tP_ ≪ _tβ_ , which is consistent with the calibrated models in Section 3.3. Subsequently, 100% CO2 reinjection is implemented at time _t_ CO2, at which time plant emissions drop to zero ( _fC_<sup>new</sup> = 0). A fraction _η_ of the stored CO2 eventually is assumed to return to the reservoir after a breakthrough delay _τ_ , while the remainder (1 − _η_ ) is assumed permanently sequestered through mineralization or other trapping mechanisms. 

29 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

**Figure 10.** Effect of 100% CO2 injection on the median calibrated Rotokawa model (non‐reversal posterior subset), projected to 2150. CO2 injection begins in 2024 with a 10‐year breakthrough delay. Two return fractions are shown: _η_ = 0 _._ 5 (50% permanently sequestered, solid blue) and _η_ = 1 _._ 0 (full return, dashed red). The no‐CO2‐injection baseline is shown in gray. Vertical lines mark CO2 injection onset (dotted) and breakthrough (dashed). (a) Reservoir CO2 concentration, (b) plant emissions, (c) surface emissions, and (d) overcount, which becomes negative for the full‐return scenario around 2107. The horizontal dotted line in (c) is the pre‐development surface emission rate _Q_ surf,0. 

This scenario is well‐described by the piecewise dominant‐mode approximation to the DDE, given by Equation 49, modified for an initial condition that reflects an adjusted reservoir concentration at the time CO2 capture begins, _C_ ( _t_ CO2). 

Figure 10 summarizes hypothetical CO2 injection scenarios using parameters of the median Rotokawa model (Section 3.3). CO2 capture and reinjection begin in 2024 ( _t_ CO2 = 13 yr after the start of production). A _τ_ = 10‐year breakthrough delay has been used for illustration, although in practice this should be estimated for a particular field on the basis of tracer testing or modeling (Muskat, 1938). Two return fractions are considered: _η_ = 0 _._ 5 (half of the CO2 permanently sequestered) and _η_ = 1 _._ 0 (all CO2 eventually returns). 

In both scenarios, the onset of CO2 injection causes plant emissions to drop immediately to zero. Reservoir CO2 concentration continues to decline along the pre‐capture trend (Figure 10a). After breakthrough in 2034, the returning CO2 arrests the decline and concentrations begin to recover toward a new equilibrium that depends on _η_ . For _η_ = 0 _._ 5, the equilibrium concentration is lower than _C_ 0, reflecting permanent removal of half the stored CO2. For _η_ = 1 _._ 0, the equilibrium is higher, indicating that CO2 is being concentrated in the reservoir. 

These scenarios also illustrate how overcount can become negative over time (Figure 10d). Following the onset of CO2 injection, the overcount declines rapidly from its pre‐injection value. At this time, the plant owner is not 

30 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

being charged for emissions through the plant and so it is not immediately obvious how they are “overpaying” on emissions. However, as the overcount takes changes in surface emissions into account, and these remain considerably suppressed below the pre‐development level (Figure 10c), arguably the plant operator could receive a credit for causing fewer emissions to enter the atmosphere. Later though, for _η_ = 1 _._ 0, the overcount declines due to concentrating CO2 in the reservoir that raises surface emissions, and eventually it switches sign to become negative. At this time, the surface emissions exceed the pre‐development baseline, _Q_ surf,0. However, the operator would pay nothing under a plant‐metering rule that shows all their CO2 being injected back into the reservoir. This is not always the case: for _η_ = 0 _._ 5, the permanent sequestration of half the stored CO2 keeps the equilibrium concentration lower and the overcount remains positive, stabilizing at approximately 30 kt yr<sup>−1</sup> . 

## **4.4. Long‐Term Storage of CO2 in Geothermal Systems** 

Traditional carbon capture and storage (CCS) in subsurface reservoirs would typically treat the storage target as a boundable container, wherein CO2 is injected, the pore space filled, and it is intended that CO2 is retained in the volume indefinitely. In a convecting geothermal system subject to dissolved phase injection, the storage container is a flow‐through system with ongoing natural CO2 fluxes (Equation 17), so the relevant storage concepts are fundamentally different. Three dissolved‐phase measures and one mineral‐phase measure are useful for thinking about geothermal carbon storage. 

Potential dissolved storage is the mass of CO2 the reservoir could hold if all liquid were saturated at the current pressure: 

where _Cs_ ( _P_ ) is the pressure‐dependent solubility (Equation 18). Because production reduces reservoir pressure and hence _Cs_ ( _P_ ), potential storage itself declines over time. Furthermore, boiling reduces the amount of liquid mass, _M_ , that can dissolve CO2, also reducing potential storage. On the other hand, calibration of models for Ngā Tamariki and Rotokawa yields low end values of _M_ that suggest only a subset of the reservoir is participating in CO2 exchange and that ways might be found to increase this, for instance, through additional drilling. 

Actual dissolved storage is the CO2 mass presently dissolved in the reservoir fluid: 

This quantity cannot exceed _M_ pot in a single liquid‐phase system, and the gap _M_ pot − _M_ act represents the unused dissolved‐phase capacity. Furthermore, _M_ act can remain constant despite losses via surface or plant emissions, as long as these are balanced by upflow or reinjection returns. 

Storage change quantifies the net gain or loss of dissolved CO2 relative to initial conditions. In the absence of boiling‐induced mass loss, this is defined as: 

Storage change is negative for diluting fields and positive for concentrating fields. 

_Mineralized storage_ accumulates through water‐rock reactions and is independent of the dissolved‐phase measures: 

This integral grows monotonically provided _C > Cr_ and represents the only form of permanent storage in the model. 

These storage quantities are illustrated in Figure 11 for three scenarios. 

31 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

**Figure 11.** CO2 fluxes (top) and storage (bottom) for three geothermal CO2 scenarios. (a, d) A high‐gas, solubility‐constrained field with no reinjection. (b, e) A low‐gas field with 110% CO2 capture and mineralization ( _κ_ = _M/_ 5 yr). (c, f) 100% CO2 reinjection with a 10‐year breakthrough delay before full return ( _η_ = 1), using calibrated Rotokawa parameters. 

## **4.4.1. Scenario 1: High‐Gas Production Without Reinjection** 

In a high‐gas field without CO2 reinjection (Figures 11a and 11d), production depletes the reservoir of CO2 through a combination of degassing driven by pressure decline and direct plant emissions. Both actual and potential dissolved storage decline over time, with actual storage falling faster than the solubility limit. No CO2 is stored permanently in this reservoir: instead, upflow CO2 resides temporarily in the reservoir until it outflows or is extracted by wells. Actual storage reaches a new equilibrium value, about 50% of the pre‐development amount, when the upflow, plant and surface fluxes balance each other at late time. 

## **4.4.2. Scenario 2: Mineralization With Negative Emissions** 

In a low‐gas field where 110% of produced CO2 is captured and reinjected ( _fC_ = − 0 _._ 1), plus mineralization reactions are active (Figures 11b and 11e), the reservoir concentration rises above _C_ 0 because the extra CO2 that is injected causes a concentrating trajectory. Actual dissolved storage increases correspondingly, although not by a large amount compared to the potential storage at saturation. Meanwhile, mineralization progressively converts dissolved CO2 to a solid carbonate (Equation 53). The mineralization rate, _κ_ ( _C_ − _Cr_ ), starts near zero when _C_ ≈ _Cr_ and accelerates as CO2 accumulates, before reaching a steady rate once _C_ approaches _C_ ∞. Thus, total mineral storage grows linearly at late time, exceeding 6 million tonnes after 200 years. If this mass of CO2 was locked up as calcite, it would occupy about 4.1% of the pore volume initially filled by water. As mineralizing conditions are likely to be spatially variable with pH or cation availability, then this level precipitation could lead to local pore clogging issues if it concentrated along preferential flow pathways. 

## **4.4.3. Scenario 3: CO2 Reinjection With Delayed Breakthrough** 

This scenario considers 100% of produced CO2 is reinjected into the median calibrated Rotokawa reservoir starting 13 years after production begins (Figures 11c and 11f). A 10‐year breakthrough delay separates injection from the return of stored CO2 to the production zone, and all injected CO2 eventually returns ( _η_ = 1). Because the Rotokawa reservoir temperature (335 _°_ C) exceeds the range of validity of the linear solubility approximation 

32 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

(Equation 18), potential storage is computed using the thermodynamic model of Mao et al. (2013). Plant emissions drop to zero at the onset of reinjection but surface emissions persist unchanged. After breakthrough, returning CO2 arrests the decline in reservoir concentration, which then recovers toward a new, higher equilibrium (Section 4.3). Actual dissolved storage temporarily dips during the delay window when CO2 is being extracted from the reservoir but returns have not yet arrived. After breakthrough, CO2 concentration increases again. 

## **4.4.4. Calibrated Models** 

Model calibration at Rotokawa and Ngā Tamariki constrains values of _M_ , _C_ 0 and hence order of magnitude estimates of initial CO2 dissolved in the participating reservoir. For Rotokawa, the posterior median is 0.97 MtCO2 (90% credible interval: 0.67–1.28 MtCO2). At the same time, cumulative plant emissions charged under the ETS from 2011 to 2023 at Rotokawa total 1.1 Mt, similar to the dissolved storage. However, the reservoir is clearly not depleted of CO2, as attested by plant emissions of 60–70 kt yr<sup>−1</sup> . The discrepancy is explained by sustained replenishment of CO2 by deep upflow and reduced surface emissions, although these effects are not recognized under the present emissions charging regime. 

# **5. Conclusions** 

The increasing adoption of CO2 capture and reinjection at geothermal power plants, and the associated greenhouse gas inventories and emissions penalties these attract, necessitates the development of physics‐based accounting frameworks. This study has developed a lumped‐parameter model for CO2 fluxes and storage in geothermal reservoirs. The model tracks pressure evolution, dissolved CO2 concentration, and the partitioning of emissions between the power plant and the Earth's surface. Closed‐form exponential and related solutions are obtained to estimate net emissions contributions from reservoir degassing, CO2 reinjection with delayed breakthrough, reversal of outflow, and mineralization reactions. Calibrated against emissions data from Rotokawa and Ngā Tamariki, the model forecasts how CO2 concentrations evolve over decades of production and at what level emissions will eventually stabilize. 

The primary conclusion of this study is that CO2 storage in geothermal systems is fundamentally dissimilar to traditional CCS. First, some geothermal systems receive a continuous supply of CO2 from depth that, while resident in the reservoir for a time, is eventually discharged into shallow aquifers or the surface. Accounting for the anthropogenic effect of CO2 reinjection must include alteration of the natural throughput. For instance, production without reinjection suppresses surface emissions, so that CO2 solely‐metered through the plant may significantly overcount (and hence overcharge) the net emissions change. Equally, 100% reinjection of captured CO2 does not eliminate the anthropogenic effect but rather reallocates it from a plant emission to a surface one. If this is not accounted for, operators may end up undercounting their true emissions. 

Second, geothermal reservoirs are not generally bounded containers for the permanent storage of CO2, which is often an adequate concept for CCS in gas fields or saline aquifers. Naturally‐fluxing CO2 is only resident in the reservoir for a specified time ( _t_ res) and it follows that the same applies for reinjected CO2. Therefore, active reinjection is required to maintain elevated levels of CO2 storage in a geothermal reservoir over the long‐term. Designs to achieve such long‐term storage will need to either exploit mineralization that is effective over timescales shorter than _t_ res or reinject at distance to ensure a delayed return ( _τ_ ). 

The implication is that emissions accounting based on plant metering can systematically overcount the anthropogenic effects of geothermal production and this unfairly penalizes an important source of low‐carbon energy. Although these simplified lumped‐parameter models can match and explain emissions trends and infer unobserved surface or unobservable baseline emissions, they are not sufficient on their own to support changes to regulation or field‐specific corrections to emissions charges. Several advances are needed. First, detailed studies of individual fields should be undertaken, as the sign and magnitude of the overcount depend on reservoir size, recharge, CO2 content, and reinjection strategy. Second, improved monitoring of surface CO2 fluxes is important to provide direct observational constraints on the behaviors inferred here, including early‐time degassing and the suppression or enhancement of natural emissions during production. Repeat soil flux surveys, such as those conducted by Bloomberg et al. (2014) and Yang et al. (2024), are one path forward, although continuous survey methods might also be adopted from terrestrial carbon cycle studies, such as eddy covariance towers. Third, more detailed numerical models of CO2 transport for individual fields, building on the approaches of M. O’Sullivan et al. (2021) and J. O’Sullivan et al. (2025), are needed to resolve spatial heterogeneity, gas cap dynamics, and 

33 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

near‐surface transport processes that the lumped‐parameter framework neglects. Together, these steps could provide regulators with the confidence to move toward an emissions accounting framework based on true anthropogenic impact rather than the plant‐metering rules currently in use in New Zealand. 

The framework developed here can be generalized beyond the two fields used to demonstrate it. Governing equations for pressure, dissolved CO2 and the partitioning of emissions (Sections 2.2–2.4) make no assumptions unique to Rotokawa or Ngā Tamariki, and transfer to other producing systems primarily through recalibration. For new cases, the requirements are coincident production and emissions time series data to calibrate against, as well as constraints on the values of lumped parameters. Modifications to the equations may be warranted where the physics omitted from the model is thought to dominate, for example, thermal effects of CO2 reinjection, or gas‐cap and/or two‐phase behavior. In practice, the model's value for policy is that it quantifies the overcounted (Equations 46 and 47) gap between plant‐metered emissions and actual changes in a field's anthropogenic CO2 throughput. Thus, a field‐calibrated model is a useful tool for both operators and regulators to set a fair price geothermal CO2 emissions. 

# **Appendix A: Thermodynamic Functions** 

This appendix presents approximate expressions for CO2 solubility and its derivatives (Figure A1), derived from the thermodynamic model of Duan and Sun (2003). The underlying model is for CO2 in pure water; the gas phase is treated as pure CO2, so the controlling pressure is the total reservoir pressure rather than a separately tracked CO2 partial pressure, and salinity is not included. Mixture and partial‐pressure effects from steam or other NCGs are therefore not represented. 

Equation 18 expresses solubility as a linear function of pressure with a slope parameter whose temperature dependence is closely approximated by a quadratic expression 

where _ci_ = [4.5848 × 10<sup>−3</sup> , − 3.3141 × 10<sup>−5</sup> , 1.3104 × 10<sup>−7</sup> ]. 

For systems that are boiling, pressure and temperature follow the saturation curve. CO2 solubility in the pressure range 5–15 MPa can be approximated by the following cubic expression accurate to 1.2% 

where _ci_ = [6.3416 × 10<sup>−2</sup> , − 2.1793 × 10<sup>−2</sup> , 3.7815 × 10<sup>−3</sup> , − 1.6108 × 10<sup>−4</sup> ]. The expression is approximately linear in the pressure range 3–11 MPa with the following expression also accurate to 1.2% 

**Figure A1.** CO2 solubility approximations derived from the thermodynamic model of Duan and Sun (2003). (a) Full solubility (solid curves) and its linear‐in‐pressure approximation (dashed, Equation 18) over 5–15 MPa for four isotherms; annotated percentages are the fit errors. (b) Linear slope parameter in (a) as a quadratic function of temperature. (c) Solubility along the boiling curve (solid points, full model) with a cubic fit (black dashed) and a linear fit (blue dashed) valid for 3–11 MPa. 

34 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

where _ci_ = [− 6.3404 × 10<sup>−3</sup> , 6.8163 × 10<sup>−3</sup> ]. 

# **Conflict of Interest** 

The author declares no conflicts of interest relevant to this study. 

# **Availability Statement** 

The lumped‐parameter model, the Bayesian calibration routines, and the scripts that generate all figures in this study, together with the compiled plant‐emissions time series used for calibration, are archived on Zenodo and openly available (Dempsey, 2026). 

#### **Acknowledgments** 

I thank three anonymous reviewers and the Associate Editor for their careful assessment of this manuscript and comments that improved it. This work was supported by the New Zealand Government through the Ministry of Business, Innovation and Employment (MBIE), under contract UOC2456 for the Endeavour Research Programme “Derisking Carbon Dioxide Removal at Megatonne Scale in Aotearoa.” Open access publishing facilitated by University of Canterbury, as part of the Wiley ‐ University of Canterbury agreement via the Council of Australasian University Librarians. 

# **References** 

Akın, S., Orucu, Y., & Fridriksson, T. (2020). Characterizing the declining CO2 emissions from Turkish geothermal power plants. In _Proceedings, 45th Workshop on Geothermal Reservoir Engineering, Stanford, California_ . Aksoy, N., Solak Gok, O., Mutlu, H., & Kilinc, G. (2015). CO2 emission from geothermal power plants in Turkey. In _Proceedings World Geothermal Congress_ (p. 2015). Allis, R. G. (1981). Changes in heat flow associated with exploitation of Wairakei geothermal field, New Zealand. _New Zealand Journal of Geology and Geophysics_ , _24_ , 1–19. https://doi.org/10.1080/00288306.1981.10422694 

Altar, D. E., Kaya, E., & Zarrouk, S. J. (2024). Numerical assessment of carbon sequestration in a 3D rhyolite hosted reservoir. In _Proceedings 46th New Zealand Geothermal Workshop_ (p. 22). 

Ármannsson, H., Fridriksson, T., & Kristjánsson, B. R. (2005). CO2 emissions from geothermal power plants and natural geothermal activity in Iceland. _Geothermics_ , _34_ (3), 286–296. https://doi.org/10.1016/j.geothermics.2004.11.005 

Atkinson, P. G., Celati, R., Corsi, R., & Kucuk, F. (1980). Behavior of the Bagnore steam/CO2 geothermal reservoir, Italy. _Society of Petroleum Engineers Journal_ , _20_ (4), 228–238. https://doi.org/10.2118/7132‐pa 

Axelsson, G. (1989). Simulation of pressure response data from geothermal reservoirs by lumped parameter models. In _Proceedings, 14th Workshop on Geothermal Reservoir Engineering_ . Stanford University. 

Bertani, R., & Thain, I. (2002). Geothermal power generating plant CO2 emission survey. _IGA News_ , _49_ , 1–3. 

Bibby, H. M., Caldwell, T. G., Davey, F. J., & Webb, T. H. (1995). Geophysical evidence on the structure of the Taupo Volcanic Zone and its hydrothermal circulation. _Journal of Volcanology and Geothermal Research_ , _68_ (1–3), 29–58. https://doi.org/10.1016/0377‐0273(95)00007‐h Bloomberg, S., Werner, C., Rissmann, C., Mazot, A., Horton, T., Gravley, D., et al. (2014). Soil CO2 emissions as a proxy for heat and mass flow assessment, Taupō Volcanic Zone, New Zealand. _Geochemistry, Geophysics, Geosystems_ , _15_ (12), 4885–4904. https://doi.org/10.1002/2014gc 005327 

- Carmichael, A., & Zarrouk, S. J. (2023). A review of non‐condensable gases (NCGs) reinjection within the geothermal industry and a comparison with other carbon capture and storage (CCS) technologies. In _Proceedings 45th New Zealand Geothermal Workshop_ (p. 17). 

Dempsey, D. (2026). Code to reproduce results in “physics‐based accounting of natural and anthropogenic CO2 emissions from producing geothermal systems” (Version v1) [Software]. _Zenodo_ . https://doi.org/10.5281/zenodo.19322633 Duan, Z., & Sun, R. (2003). An improved model calculating CO2 solubility in pure water and aqueous NaCl solutions from 273 to 533 K and from 0 to 2000 bar. _Chemical Geology_ , _193_ (3–4), 257–271. https://doi.org/10.1016/s0009‐2541(02)00263‐2 

Environment and Energy Agency of Iceland. (2026). _National Inventory Document, Iceland 2026_ . Technical Report UOS‐2026:04. Environment and Energy Agency of Iceland. Retrieved from https://www.uos.is 

Foreman‐Mackey, D., Hogg, D. W., Lang, D., & Goodman, J. (2013). emcee: The MCMC Hammer. _Publications of the Astronomical Society of the Pacific_ , _125_ (925), 306–312. https://doi.org/10.1086/670067 

Fradkin, L. J., Sorey, M. L., & McNabb, A. (1981). On identification and validation of some geothermal models. _Water Resources Research_ , _17_ (4), 929–936. https://doi.org/10.1029/wr017i004p00929 

Fridriksson, T., Mateos, A., Audinet, P., & Orucu, Y. (2016). _Greenhouse gases from geothermal power production_ . Technical Report. Energy Sector Management Assistance Program (ESMAP), World Bank. 

Fridriksson, T., Mateos Merino, A., Orucu, A. Y., & Audinet, P. (2017). Greenhouse gas emissions from geothermal power production. In _Proceedings, 42nd Workshop on Geothermal Reservoir Engineering_ . Stanford University. Ghafar, S. A., Allan, G., Ferguson, A., Siega, F., Rivera, M., & Murphy, B. (2022). Non condensable gas reinjection trial at Ngatamariki geothermal power plant. In _Proceedings 44th New Zealand Geothermal Workshop_ (p. 25). 

Giggenbach, W. F. (1995). Variations in the chemical and isotopic composition of fluids discharged from the Taupo Volcanic Zone, New Zealand. _Journal of Volcanology and Geothermal Research_ , _68_ (1–3), 89–116. https://doi.org/10.1016/0377‐0273(95)00009‐j Gíslason, S. R., Sigurdardóttir, H., Aradóttir, E. S., & Oelkers, E. H. (2018). A brief history of CarbFix: Challenges and victories of the project’s pilot phase. _Energy Procedia_ , _146_ , 103–114. https://doi.org/10.1016/j.egypro.2018.07.014 

Grant, M. A. (1977). Broadlands—A gas‐dominated geothermal field. _Geothermics_ , _6_ (1–2), 9–29. https://doi.org/10.1016/0375‐6505(77)90039‐6 Grant, M. A., & Bixley, P. F. (2011). _Geothermal reservoir engineering_ (2nd ed.). Academic Press. 

Hoefs, J. (2009). _Stable isotope geochemistry_ . Springer. 

Hosgor, F. B., Tureyen, O. I., & Satman, A. (2016). Keeping inventory of carbon dioxide in liquid dominated geothermal reservoirs. _Geothermics_ , _64_ , 55–60. https://doi.org/10.1016/j.geothermics.2016.03.003 

- Kaya, E., & Zarrouk, S. J. (2017). Reinjection of greenhouse gases into geothermal reservoirs. _International Journal of Greenhouse Gas Control_ , _67_ , 111–129. https://doi.org/10.1016/j.ijggc.2017.10.015 

35 of 36 

DEMPSEY 

**Water Resources Research** 

10.1029/2026WR044239 

Mao, S., Zhang, D., Li, Y., & Liu, N. (2013). An improved model for calculating CO2 solubility in aqueous NaCl solutions and the application to CO2‐H2O‐NaCl fluid inclusions. _Chemical Geology_ , _347_ , 43–58. https://doi.org/10.1016/j.chemgeo.2013.03.010 

Matter, J. M., Speer, J., Day, C., Kelemen, P. B., Ibrahim, A., Al Mani, S., et al. (2025). Rapid mineralisation of carbon dioxide in peridotites. _Communications Earth & Environment_ , _6_ (1), 590. https://doi.org/10.1038/s43247‐025‐02509‐5 

McLean, K., & Richardson, I. (2021). Geothermal greenhouse gas emissions in New Zealand in 2020: Lifecycle and operational emissions. In _Proceedings 43rd New Zealand Geothermal Workshop, Wellington_ . 

McLean, K., Richardson, I., Hanik, F., Siega, F., & Gibson, B. (2024). Reducing greenhouse gas emissions from NZ geothermal power stations. In _Proceedings 46th New Zealand Geothermal Workshop, Auckland, NZ_ . 

Muskat, M. (1938). The flow of homogeneous fluids through porous media. _Soil Science_ , _46_ (2), 169. https://doi.org/10.1097/00010694‐19380800 0‐00008 

Óladóttir, A. A., & Friðriksson, T. H. (2015). The evolution of CO2 emissions and heat flow through soil since 2004 in the utilized Reykjanes geothermal area, SW Iceland: Ten years of observations on changes in geothermal surface activity. In _Proceedings World Geothermal Congress_ . 

O’Sullivan, J., Gravatt, M., Riffault, J., Renaud, T., O’Sullivan, M., Ruiz, N. C., et al. (2025). An updated model of Ohaaki geothermal field, New Zealand. _Geothermics_ , _130_ , 103339. https://doi.org/10.1016/j.geothermics.2025.103339 

O’Sullivan, M., Gravatt, M., Popineau, J., O’Sullivan, J., Mannington, W., & McDowell, J. (2021). Carbon dioxide emissions from geothermal power plants. _Renewable Energy_ , _175_ , 990–1000. https://doi.org/10.1016/j.renene.2021.05.021 

O’Sullivan, M. J., Bodvarsson, G. S., Pruess, K., & Blakeley, M. R. (1985). Fluid and heat flow in gas‐rich geothermal reservoirs. _Society of Petroleum Engineers Journal_ , _25_ (2), 215–226. https://doi.org/10.2118/12102‐pa 

Potter, J., Misal, A., & Azwar, L. (2020). Chloride model of Ngatamariki geothermal system. In _Proceedings, 45th Workshop on Geothermal Reservoir Engineering, Stanford, California_ . 

Quinao, J., Azwar, L., Clearwater, J., Hoepfinger, V., Le Brun, M., & Bardsley, C. (2013). Analyses and modelling of reservoir pressure changes to interpret the Rotokawa geothermal field response to Nga Awa Purua power station operation. In _Proceedings, 38th Workshop on Geothermal Reservoir Engineering, Stanford, California_ . 

Rissmann, C., Christenson, B., Werner, C., Leybourne, M., Cole, J., & Gravley, D. (2012). Surface heat flow and CO2 emissions within the Ohaaki hydrothermal field, Taupo Volcanic Zone, New Zealand. _Applied Geochemistry_ , _27_ (1), 223–239. https://doi.org/10.1016/j.apgeochem.2011.1 0.006 

Sarak, H., Onur, M., & Satman, A. (2005). Lumped‐parameter models for low‐temperature geothermal fields and their application. _Geothermics_ , _34_ (6), 728–755. https://doi.org/10.1016/j.geothermics.2005.09.001 

Sbrana, A., Lenzi, A., Paci, M., Gambini, R., Sbrana, M., Ciani, V., & Marianelli, P. (2021). Analysis of natural and power plant CO2 emissions in the Mount Amiata (Italy) volcanic‐geothermal area reveals sustainable electricity production at zero emissions. _Energies_ , _14_ (15), 4692. https:// doi.org/10.3390/en14154692 

Seward, T. M., & Kerrick, D. M. (1996). Hydrothermal CO2 emission from the Taupo volcanic zone, New Zealand. _Earth and Planetary Science Letters_ , _139_ (1–2), 105–113. https://doi.org/10.1016/0012‐821x(96)00011‐8 

Siahaan, Y., Kaya, E., Altar, D. E., Mering, J., Subekti, D., Utami, A., et al. (2024). Reactive transport modelling of fluid‐NCG reinjection in Ngā Tamariki geothermal field. In _Proceedings 46th New Zealand Geothermal Workshop, Auckland, New Zealand_ . 

Snæbjörnsdóttir, S. Ó., Sigfússon, B., Marieni, C., Goldberg, D., Gislason, S. R., & Oelkers, E. H. (2020). Carbon dioxide storage through mineral carbonation. _Nature Reviews Earth & Environment_ , _1_ (2), 90–102. https://doi.org/10.1038/s43017‐019‐0011‐8 

Swanepoel, A., Raihannur, M., Karan, A., Gravatt, M., Tonkin, R., O’Sullivan, J., et al. (2024). Investigations of reservoir response to net negative CO2 reinjection using full scale geothermal reservoir models. In _Proceedings 46th New Zealand Geothermal Workshop, Auckland, New Zealand_ . 

Taussi, M., Nisi, B., Brogi, A., Liotta, D., Zucchi, M., Venturi, S., et al. (2023). Deep regional fluid pathways in an extensional setting: The role of transfer zones in the hot and cold degassing areas of the Larderello geothermal system (Northern Apennines, Italy). _Geochemistry, Geophysics, Geosystems_ , _24_ (6), e2022GC010838. https://doi.org/10.1029/2022gc010838 

Titus, K., Dempsey, D., & Peer, R. (2023). Carbon negative geothermal: Theoretical efficiency and sequestration potential of geothermal‐BECCS energy cycles. _International Journal of Greenhouse Gas Control_ , _122_ , 103813. https://doi.org/10.1016/j.ijggc.2022.103813 

Titus, K., Dempsey, D., Peer, R., & Hanik, F. (2025). From carbon neutral to carbon negative: A theoretical bioenergy and CO2 removal retrofit at Ngāwhā geothermal power station. _Journal of the Royal Society of New Zealand_ , _55_ (4), 893–911. https://doi.org/10.1080/03036758.2024.238 5807 

von Hirtz, P. (2016). Silica scale control in geothermal plants–historical perspective and current technology. In R. DiPippo (Ed.), _Geothermal power generation_ (p. 455). Woodhead Publishing. chapter 16. 

Werner, C. A., Hochstein, M. P., & Bromley, C. J. (2004). CO2‐flux of steaming ground at Karapiti, Wairakei. In _Proceedings 26th NZ Geothermal Workshop_ . Whiting, R. L., & Ramey, H. J., Jr. (1969). Application of material and energy balances to geothermal steam production. _Journal of Petroleum Technology_ , _21_ (7), 893–900. https://doi.org/10.2118/1949‐pa 

Yang, T. H. J., Chamberfort, I., Rowe, M., Mazot, A., Seward, A., Werner, C., et al. (2024). Variability in surface CO2 flux: Implication for monitoring surface emission from geothermal fields. _Geothermics_ , _120_ , 102981. https://doi.org/10.1016/j.geothermics.2024.102981 

Zyvoloski, G. A. (2007). _FEHM: A control volume finite element code for simulating subsurface multi‐phase multi‐fluid heat and mass transfer_ . Technical Report LA‐UR‐07‐3359. Los Alamos National Laboratory. 

36 of 36 

DEMPSEY 

