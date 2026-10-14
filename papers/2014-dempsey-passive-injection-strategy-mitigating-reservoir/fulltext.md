# Passive injection: A strategy for mitigating reservoir pressurization, induced seismicity and brine migration in geologic CO2 storage

**Authors:** David Dempsey, Sharad Kelkar, Rajesh Pawar  
**Published in:** International Journal of Greenhouse Gas Control (2014)  
**DOI (version of record):** https://doi.org/10.1016/j.ijggc.2014.06.002  
**This copy:** Published version. Text extracted from the PDF at https://ddempsey.github.io/papers/2014-dempsey-passive-injection-strategy-mitigating-reservoir/dempsey2014-passive-injection-strategy.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** Published version, reproduced under the CC BY-NC-SA 3.0 licence. © The Author(s). Version of record: https://doi.org/10.1016/j.ijggc.2014.06.002  
**Licence:** CC BY-NC-SA 3.0 http://creativecommons.org/licenses/by-nc-sa/3.0/  

---
International Journal of Greenhouse Gas Control 28 (2014) 96–113

Contents lists available at ScienceDirect

International Journal of Greenhouse Gas Control

j ourna l ho me page: www.elsevier.com/locate/ijggc

Passive injection: A strategy for mitigating reservoir pressurization, induced

seismicity and brine migration in geologic CO2 storage

David Dempsey ∗, Sharad Kelkar, Rajesh Pawar

Los Alamos National Laboratory, Los Alamos, NM, United States

a r t i c l e i n f o

Article history: Received

18 September

2013 Received

in revised form 18

December 2013 Accepted

2 June 2014

Keywords: CO2 geologic storage Passive

injection Geomechanical Induced

seismicity Brine

migration

a b s t r a c t

Many technical, regulatory and public perception challenges remain to be addressed before large-scale deployment

of CO2 geologic storage becomes a reality. Two major risks associated with injection of CO2 into the subsurface are the possibility of induced earthquakes compromising long-term seal integrity, and

the displacement of saline brines resulting in contamination of shallow groundwater. Both induced seismicity

and brine migration are caused by elevated pressures in the storage formation owing to the relative

incompressibility of water. Here,

we describe a strategy, termed passive injection that can be used to inject large amounts of CO2 in a storage formation with no increase, temporary or long-term, in reservoir pressure. Passive injection relies

on the strategic placement of brine production wells to create negative pressure gradients that result

in CO2 entering the formation at ambient pressure. Injection occurs at the intersection of pressure- depth

proﬁles for a surface-pressurized, low-density CO2 column and a hydrostatic column of formation ﬂuid.

A multi-stage, square-ring well conﬁguration is envisaged, in which brine production wells are repurposed

for CO2 injection upon CO2 breakthrough, and the next concentric ring of production wells installed

at a greater distance. Numerical

simulations of passive injection are presented using the coupled thermo-hydro-mechanical (THM),

multi-ﬂuid, multi-phase numerical simulator FEHM. We consider CO2 injection into a 3 km-deep, closed

reservoir over a period of 50 years, with up to four stages of injection and production depend- ing

on well-spacing and production pressures. Storage rates as high as 4 Mt yr−1 at 70% utilization of the

reservoir pore volume are achieved under optimum conditions. Long-term mass production of brine is

approximately 1.7 times that of CO2 sequestered. Geomechanical effects due to reservoir drawdown, cooling

near injection wells, and surface subsidence are modeled. The risk of induced seismicity is quanti- ﬁed

in terms of the Coulomb Failure Stress (CFS) for an optimally oriented fault in an extensional tectonic regime.

Injection and production-induced changes in pressure and CFS conﬁrm that, both during and at

the conclusion of injection, (i) reservoir pressure is everywhere less than or equal to its initial value; and

(ii) the risk of induced seismicity is everywhere reduced or unchanged. Thus, the primary risks of brine

migration outside the primary reservoir and induced seismicity compromising seal integrity are neutralized.

Passive

injection produces large quantities of brine, the treatment and disposal of which represents an

additional economic burden to CO2 geologic storage operations. Unless additional revenue streams or economies

of scale can be leveraged, these costs are likely to limit the viability of the proposed scheme to

only the most economically favorable sites. © 2014 The Authors. Published by Elsevier Ltd. This is an open access article under the CC BY-NC-SA license

(http://creativecommons.org/licenses/by-nc-sa/3.0/).

∗Corresponding

author at: Los Alamos National Laboratory, EES-16, Mailstop T003,

Los Alamos, NM 87545, United States. Tel.: +1 505 664 0712; fax:

+1 505 665 8737. E-mail

addresses: d.dempsey@lanl.gov, ddempsey786@gmail.com (D. Dempsey).

1. Introduction

Geological storage of carbon dioxide (GCS) emitted by large (>Mt yr−1) coal or gas-ﬁred power stations is one proposed method for mitigating rises in atmospheric greenhouse gases (IPCC, 2005). More than 90% of these emissions are accounted for by emitters pro- ducing less than 5 Mt yr−1 of CO2 (IEAGHG, 2002). The viability of emitter-speciﬁc GCS schemes depends on their ability to accommo- date large volumes of CO2 every year for several decades (Buscheck

http://dx.doi.org/10.1016/j.ijggc.2014.06.002 1750-5836/© 2014 The Authors. Published by Elsevier Ltd. This is an open access article under the CC BY-NC-SA license (http://creativecommons.org/licenses/by-nc-sa/3.0/).

D. Dempsey et al. / International Journal of Greenhouse Gas Control 28 (2014) 96–113 97

et al., 2012; Deng et al., 2012). Others have suggested that CCS oper- ations should be larger still (10s to 100s of Mt yr−1); such efforts would be cooperative in nature, accommodating multiple sources at a single sequestration site while leveraging economies of scale to reduce costs (Middleton et al., 2012). To be effective in mitigating climate change, injected CO2 must be retained for at least 1000 years (Shaffer, 2010). One of the potential mechanisms for CO2 to escape the primary storage reser- voir is through permeable pathways that transect the caprock, for example, a pre-existing, leaky fault zone (Keating et al., 2012) or a poorly plugged well. Recently, concerns have grown that such pathways might be created by the reactivation of uncharacterized, medium-sized faults (Zoback and Gorelick, 2012). The mechanism for inducing such earthquakes is generally an increase in pres- sure within the fault contributing to a reduction in the effective stress (Cappa and Rutqvist, 2011). Therefore, it will be necessary to perform comprehensive geomechanical site assessment and effec- tively manage reservoir overpressures to address these concerns. Another risk associated with GCS is the environmental impacts of brine migration into shallow aquifers. Due to its incompressible nature, the area over which formation pressures are elevated can far

exceed the actual area of the injected CO2 (Pruess and Garcia, 2002). For instance, Birkholzer et al. (2009) showed a pressure rise of 1 MPa at 15 km distance from an injection well even though the CO2 had traveled only 2 km. Oldenburg and Rinaldi (2011) modeled transport of saline brine within a vertical conduit and found that, for sufﬁcient overpressurization, brine could migrate into an over- lying freshwater aquifer, forming a dense, saline layer at the base. Thus, there is a credible concern that vertical connections, e.g., fault zones, open or leaking wells, could become potential sources of migration under overpressure, even if they are at signiﬁcant dis- tance from the injection site. Hosseini and Nicot (2012) developed analytical models to assess improved storage capacity by brine extraction. They demonstrated a 30% increase in CO2 storage over a scenario in which no brine production occurs. However, gains were more modest for reinjec- tion strategies, i.e., where the produced brine was disposed of into a shallower aquifer. Active CO2 reservoir management (ACRM) is a proposed pressure management scheme in which brine produc- tion wells are deployed in support of CO2 injection to manage ﬂuid overpressure within the reservoir (Buscheck et al., 2012; Elliot et al., 2013). There are numerous advantages, including the promotion of higher injection rates by reducing near-well pressure build up, reduction of brine migration and a lessened risk of induced seismic- ity; all these beneﬁts are derived from the maintenance of lower reservoir pressures. However, ACRM comes with additional costs, including the drilling and operation of brine production wells, and the treatment and disposal of the brine produced. On a case-by- case basis, the cost of managing extracted water will depend on the amount of total dissolved solids (TDS), geographic proximity to reinjection formations (Harto and Veil, 2011), water scarcity and local environmental regulations (Breunig et al., 2013). Buscheck et al. (2012) provide an in-depth review of the various treatment options (estimates range from $0.40 to $2.30/ton of CO2; Bourcier et al., 2011; Sullivan et al., 2012) and secondary uses for produced brine, e.g., as a coolant in a conventional power plant, a work- ing ﬂuid in an Enhanced Geothermal System (EGS). In contrast, an IEAGHG report (2012) analyzing several CCS and brine extrac- tion case studies concluded that treatment costs are in some cases prohibitive (up to $8.02/ton) and deep geological disposal may be preferable. They further suggest dissolution of CO2 in any reinjected brine as a secondary mechanism for sequestration (IEAGHG, 2012; Pool et al., 2013). Birkholzer et al. (2012) propose a scheme of Impact-driven pres- sure

management, where brine extraction wells are operated in close proximity to sensitive features (e.g., a critically stressed fault)

to meet local performance targets. The advantage of this scheme is that it minimizes the quantity of extracted brine and associated treatment costs; however, the authors acknowledge that case-by- case considerations may require regional pressure management, for instance, where the locations of sensitive features are unknown or are broadly distributed, or where public acceptance, plume manipulation or monitoring considerations require reduction of the pressure-impacted area. In these scenarios, costs can be partially offset by the mar- ket value of produced fresh-water, in the case of reverse-osmosis treatment of brine, or generated electricity, if an EGS system is suc- cessfully utilized. Breunig et al. (2013) consider more novel revenue streams, such as mineral extraction and biomass (algae and ﬁsh) production, and conclude that the net present value of extracted brine may in some circumstances be positive. However, perhaps the greatest, yet least well-constrained, cost-saving of ACRM is the reduction in likelihood of low-probability, high-impact events. For example, the total cost of an induced earthquake that irre- versibly compromises a caprock seal includes the volume of CO2 that is subsequently emitted, the loss of a sequestration location and all investment in its development, including geological char- acterization,

permitting and infrastructure. Similarly, the cost of brine migration leading to aquifer contamination would be mea- sured in terms of the remediation effort or the permanent loss of the groundwater resource (Bielicki et al., 2013; Pollak et al., 2013). Rel- atively mature studies of seawater intrusion into coastal aquifers, e.g., California, Florida, Netherlands, are a useful guide in this regard (Bear and Cheng, 1999). Several engineering challenges facing CO2 are directly linked to overpressurization within the reservoir. In many instances, some amount of reservoir pressurization below prescribed limits (e.g., fracture propagation or fault reactivation pressure) is permissible and does not lead to induced seismicity. For instance, Ellsworth (2013) report that 30,000 Class II wells are used in the US for wastewater disposal (associated with the shale gas industry), while only a few of these are correlated with increased rates of M ≥ 3 seis- micity. Nevertheless, in cases where seismicity did occur, it was both unexpected and had adverse economic and public perception impacts (e.g., Keranen et al., 2013; Kim, 2013). Such consequences are likely to be at least, if not more, undesirable within a GCS con- text.

Subsurface engineering is an inherently uncertain endeavor; medium-sized faults (particularly within the basement, e.g., Horton, 2012; Kim, 2013) can escape detection during site- characterization while imperfect quantiﬁcation of failure parame- ters (e.g., fault friction, ambient stress) that inform operating pres- sure thresholds may contribute additional uncertainty. Unknown faults cannot be the target of impact-driven pressure management schemes (Birkholzer et al., 2012) and critical-crust adherents sug- gest that much of the continental interior is susceptible to induced earthquakes (Zoback and Gorelick, 2012). Both induced seismicity and brine migration are high-impact events that in an information- poor environment are difﬁcult to forecast. In the event that such risks are deemed totally unacceptable to a GCS operation, one option would be avoid the underlying physical cause – reservoir pressurization – while still achieving the CO2 storage goal. In this contribution, we outline a strategy for emplacement of large volumes of CO2 into deep geological formations without any signiﬁcant increase, temporary or long-term, in reservoir pressure. The strategy relies on brine production as the primary mechanism for driving CO2 into the formation and is, in a sense, an exten- sion of ACRM. However, unlike ACRM, brine production is the sole driver of ﬂuid transport in the system; injection overpressure is not allowed to occur in the process. Injection operations are multi- staged,

employing concentric rings of production wells to draw CO2 from interior wells at formation pressure. In essence, the CO2,

98 D. Dempsey et al. / International Journal of Greenhouse Gas Control 28 (2014) 96–113

Fig. 1. (A) Schematic representation of passive injection via brine production in a two well system. Governing equations for pressure in the CO2 injection well (PCO2 ) and initial

formation pressure (Pres) are shown. A schematic of pressure variation along the proﬁle between the injection and production wells is included at the bottom of the subﬁgure.

(B) Pressure-depth curves for a column of formation water (blue) subject to atmospheric conditions at the surface, and a column of CO2 (red) pressurized to 8 MPa at

the surface. For a geothermal gradient of 30 ◦C km−1, the pressure neutral depth, zn, is ∼2.3 km. (C) Dependence of zn (black curves) and CO2 density at zn (red curves) on geothermal

gradient for three surface pressurizations: 7 (dotted), 8 (solid) and 9 MPa (dashed). (For interpretation of the references to color in this ﬁgure legend, the reader is

referred to the web version of the article.)

rather than being pushed out of the injection well by overpressure, is drawn into the formation by underpressure resulting from brine production.

In support of this concept, we present numerical experiments conducted using the thermo-hydro-mechanical, multi-ﬂuid, multi- phase simulator FEHM that demonstrate the feasibility of passive CO2 injection at rates in excess of 1 Mt yr−1. We explore operational and site characteristics that optimize injection while minimiz- ing costs, including well spacing and scheduling, brine production pressure, geothermal gradient and aquifer compartmentalization. Finally, we provide an analysis of induced stresses, mechani- cal deformation and reservoir pressure throughout the injection operation. This supports the two main claims that: (i) formation pressures never exceed their initial value and therefore the pos- sibility of brine migration and shallow aquifer contamination is

negligible; and (ii) the likelihood of fault reactivation, of particular concern in extensional environments, is reduced as a consequence of the brine production, thereby providing additional long-term CO2 storage security.

2. Passive injection of CO2

In this section, we outline a strategy for emplacing CO2 in the subsurface without any increase in formation ﬂuid pressure. Injec- tion is termed passive, because CO2 exits the injection well at the same pressure as the formation ﬂuid. At its core, passive injection relies on CO2 ﬂowing out of an injection well along a negative pressure gradient created by brine production. Fig. 1A shows schematically the CO2 and brine ﬂows envisaged for an idealized horizontal reservoir overlain by an

D. Dempsey et al. / International Journal of Greenhouse Gas Control 28 (2014) 96–113 99

impermeable caprock. The injection and production wells are sep- arated by some horizontal distance, r, and are assumed to be open within the reservoir. The production well is pumped such that the pressure inside the well at reservoir depth is some amount Pprod less than the initial formation pressure; as a consequence, brine ﬂows toward the production well and is removed from the reservoir. With sufﬁcient pumping, the underpressured region will expand outward from the production well and begin to inﬂuence ﬂow in the vicinity of the injection well. In a traditional injection operation, the pressure within the CO2 well at reservoir depth is maintained at some amount higher than the formation pressure due to wellhead pressure (WHP) applied at the surface. Formation pressure near the well, which is initially hydrostatic, will increase as the CO2 ﬂows into the formation, dis- placing brine. In contrast, here we are considering the case where CO2 in the well is at the same pressure as that initially in the forma- tion. In the absence of any other pressure perturbations within the formation, there would be no pressure gradient at the injection well and CO2 ﬂow would be zero. However, due to ongoing brine pro- duction at a proximate location, formation pressure is less than its initial value; therefore, CO2 ﬂows from the well into the formation. One

potential drawback of this strategy is the negative changes in formation permeability that may be induced by production and pressure drawdown. For instance, several studies have docu- mented permeability reduction in produced oil and gas reservoirs, attributed to poroelastic and inelastic deformation of the pores (Schutjens et al., 2004; Pettersen, 2010). However, in contrast to an oil production operation where the target reservoir depletion may exceed 50 MPa before abandonment (Schutjens et al., 2004), drawdowns considered here do not exceed 10 MPa. Furthermore, pressures are eventually recovered during CO2 emplacement. Com- piled oil and gas production data indicate a permeability reduction of no more than 10% associated with a drawdown of this magnitude (Schutjens et al., 2004; Pettersen, 2010). Consequently, pressure sensitivity of the permeability is not considered here, although may be signiﬁcant if this strategy were extended to higher production pressures.

2.1. Neutral pressure depth

Passive injection requires the delivery of liquid or super-critical CO2 to a speciﬁc depth (the formation) at a speciﬁc pressure (initial formation pressure). CO2 pressure, PCO2, within the well depends on the weight of the ﬂuid column above; typically, this is calculated by integrating the pressure and temperature dependent density, CO2(P, T), over the depth of the column, i.e.,

PCO2(z) =

 0

z

CO2(PCO2, T)gzdz + Pinj, (1)

where g is the acceleration of gravity and Pinj is a constant pump pressure applied at the surface. Temperature is assumed to vary linearly with depth, i.e.,

T(z) = T0 + dT

dz z, (2)

where T0 and dT/dz are the surface temperature and geothermal gradient, respectively. As CO2 is deﬁned in terms of PCO2 and T using a look-up table, the integral is evaluated iteratively. For Pinj = 8 MPa, T0 = 25 ◦C, and dT/dz = 30 ◦C km−1, Fig. 1B plots the pressure inside a column of CO2 within the injection well (red curve). Deploying similar arguments, the initial pressure of a column of formation water, Pres, is also derived, in this case assuming atmo- spheric pressure at the surface and using third order polynomial functions

in P and T to calculate water temperature (Zyvoloski, 2007). For simplicity, the effects of salt concentration on density

have been neglected. The pressure of this column is also plotted in Fig. 1B (blue curve). Fig. 1B shows that while CO2 pressure is initially higher than in the formation – CO2 must be compressed at the surface so that it can be injected as a liquid – due to its higher density, formation pressure eventually catches up and surpasses CO2. We deﬁne the neutral pressure depth, zn, where PCO2 = Pres; this is the targeted injection depth. For a given geothermal gradient and a target reservoir depth, the operator can exercise some control over zn by varying surface pres- surization of the CO2. For example, increasing Pinj from 8 to 9 MPa, for a 30 ◦C km−1 geothermal gradient, increases the neutral pres- sure depth by ∼1 km (Fig. 1C). However, as the injection pressure must be at least large enough to liquefy the CO2 at the surface, there exists an inherent lower limit on zn, typically 2–3 km depending on surface temperature and geothermal gradient. At present, this requirement would rule out shallower storage formations. Further- more, well completion costs increase with depth; for the 2–3 km deep wells proposed here, EPA (2010) estimate costs of $3.5–4.5 million per well. For the temperature gradients considered here, CO2 remains in a liquid form despite increasing temperature with depth.

The neutral pressure depth exists because of the density con- trast between CO2 and formation water. The rate at which Pres approaches PCO2 depends on this contrast; the greater the dif- ference, the shallower zn. As CO2 density is strongly temperature dependent, zn is shallower at higher geothermal gradients (Fig. 1C). However, there is a tradeoff; shallower injection depths at higher geothermal gradients are accompanied by a lower density of the injected CO2. Thus, the mass of CO2 that can be stored in a given pore volume is reduced. Furthermore, buoyancy forces on the sequestered CO2 are proportional to the density difference with the formation water; at higher geothermal gradients, these forces are greater. The conclusions are consistent with those of Bachu (2003), who considered the importance of geothermal gradient in an analysis of the suitability of sedimentary basins in Canada for GCS. For a range of geothermal gradients (20–60 ◦C km−1) and surface temperatures (0–25 ◦C), he showed that colder basins permitted higher CO2 injec- tion densities, resulting in greater storage efﬁciency and a reduced buoyant load on the overlying caprock. Based on the arguments outlined in this section and the CO2 phase behavior shown in Fig. 1B and C, we have proceeded to model the scenario of a cool basin (30 ◦C km−1) with a surface temperature of 25 ◦C. Injection is to target a reservoir at 3 km depth; thus, CO2 would need to be pressurized to ∼8.7 MPa at the surface for zn to coincide with the reservoir.

2.2. Well patterns

The second important component of passive CO2 injection is the repurposing of brine production wells for CO2 injection when breakthrough occurs; this is the concept of a multi-stage GCS opera- tion. This may introduce an additional cost during well completion as the both brine production and CO2 injection must be accom- modated. The locations and scheduling of injection and production wells are ﬂexible and would likely be both site and operation spe- ciﬁc. However, in this pilot study, we restrict ourselves to a regular well pattern and investigate some of the general sensitivities of this scheme.

Fig. 2 shows schematically, in quarter-symmetry and map view, the distribution of injection and production wells for a four-stage passive injection operation. In the ﬁrst stage, injection occurs into the lower left corner (center well), with brine production occurring some

distance, r, away. This corresponds to a ﬁve-spot well pattern and an initially high ratio of production to injection wells (4:1).

100 D. Dempsey et al. / International Journal of Greenhouse Gas Control 28 (2014) 96–113

Fig. 2. Quarter-symmetry schematic representation of multi-stage, multi-well injection/production operation. A regular array of active CO2 injectors (red), brine producers (blue)

and inactive (gray) wells are shown. CO2 migrates from the injection wells toward the pressure lows created by the brine producers. When a CO2 breakthrough criterion is

satisﬁed, a new stage begins, in which brine production shifts further out and old production wells are repurposed for injection. Interior injection wells are plugged and abandoned.

(For interpretation of

the references to color in this ﬁgure legend, the reader is referred to the web version of the article.)

Injected CO2 migrates toward and eventually appears at the pro- duction well. However, depending on the produced mixture of CO2 and brine, it may still be economical to continue operation and simply separate the produced CO2 for reinjection. Eventually how- ever, the produced CO2 fraction will be signiﬁcant enough to satisfy a breakthrough criterion and warrant the next stage of injection; this would likely depend on the economics of CO2 separation and reinjection. Here, we change stages when the instantaneous reten- tion efﬁciency – deﬁned as the net CO2 retention rate divided by the injection rate – is 50%, i.e., for each ton of CO2 injected, half a ton is co-produced with the brine. While 50% CO2 production may seem arbitrarily high, the deci- sion to transition to the next stage of injection would ultimately be a ﬁnancial one. If CO2 injection targets are still being met, and if the costs of separation, transport and reinjection of the produced CO2 are low compared to those associated with stage transition, e.g., drilling new production wells, repurposing exist- ing production wells for injection, then continued operation at reduced efﬁciency may make ﬁscal sense. In Section 4.2.4, we com- pare results obtained for the relatively lenient 50% criterion versus a stricter 2% produced CO2 cutoff. These end-member scenarios provide some bounds on the potential operating well schedules should such a strategy be pursued. Each subsequent stage involves: (i) repurposing all brine pro- duction wells from the previous stage for passive CO2 injection; (ii) developing a new set of production wells in staggered formation

that bound the injection wells; and (iii) plugging and abandoning old injection wells. For example, in moving from stage-1 to stage- 2, (i) four brine production wells are repurposed for injection, (ii) eight new production wells are developed; and (iii) one old injec- tion well is abandoned. The resulting ratio of production to injection wells decreases to 2:1. In moving from stage-2 to -3, and from -3 to -4, the ratio decreases further, to 1.5:1 and then to 1.33:1. Continued use of early stage injection wells is not likely to sig- niﬁcantly improve injection rates due to the obstructing pressure effects of later injection wells. As an alternative, an operator might consider injection of a portion of the extracted brine into these wells in an effort to reduce treatment costs and increase capillary trapping; however, such brine injection would contribute to reser- voir pressurization that violates the zero-pressure-increase goal of passive injection. The incremental beneﬁts of continued CO2 injec- tion into the abandoned interior wells are considered in Section 4.2.6.

3. Numerical simulations

The aim of this paper is to test the feasibility of the proposed injection strategy via computational modeling. In particular, we are concerned with the operational requirements, such as number of wells, land area, and pumping pressures, required for safe CO2 storage at injection rates on the order of several Mt yr−1 for ﬁfty years. Numerical experiments are performed using the subsurface

D. Dempsey et al. / International Journal of Greenhouse Gas Control 28 (2014) 96–113 101

ﬂow, transport and geomechanical simulation code, Finite Element Heat and Mass transfer (FEHM; Zyvoloski, 2007). Model construc- tion is described in Section 3.2, while a mesh sensitivity analysis is presented in Section 3.3.

3.1. Code description

FEHM solves heat and mass conservation equations for multi- phase, multi-ﬂuid, unsaturated ﬂow in porous media, coupled to non-linear elastic and plastic deformation. The heat and mass bal- ance equations are solved using an efﬁcient, node-centered control volume implementation, while stresses are computed on the corre- sponding ﬁnite element grid. Depending on the degree of coupling, the governing equations for stress and ﬂow can be solved fully coupled

or sequentially. In the simulations presented here, where stress perturbations are supplied by pressure and temperature changes, it is sufﬁcient to perform a single stress solve at the end of a simulation or at desired time steps within, i.e., we use sequential coupling.

The primary coupling between ﬂow and stress is thermal and poroelastic. Positive changes in

ﬂuid pressure cause an increase in

rock compression via a Biot coefﬁcient of 1, while decreases in temperature

result in rock contraction via the coefﬁcient of thermal expansion, here 3 × 10−5 K−1. In these simulations, induced stress changes are primarily poroelastic due to drawdown around pro- duction wells. Local cooling by the injected ﬂuid contributes to a secondary stress perturbation. In many codes, differential ﬂow in mixtures of CO2 and water are typically handled via user-deﬁned relative permeability curves. Two commonly used relationships are the Brooks–Corey and van Genuchten curves (Pruess and Garcia, 2002; Keating et al., 2012). In contrast, here we use power-law curves of the form

kw =

 S − Smin 1 − Smin

nw

, kCO2 = kmax

 1 − S 1 − Smin

nCO2 (3)

where S is the saturation of water, kw and kCO2 are the relative permeabilities of water and CO2, Smin is the irreducible saturation for water, kmax is the maximum relative permeability for CO2, and nw and nCO2 are exponents for the water and CO2 curves, respec- tively. These curves are ﬁtted to compiled experimental data for sandstones (Fig. 3; data from Bachu and Bennion, 2008; Perrin and Beson, 2010; Krevor et al., 2012; Berg et al., 2013); this avoids hav- ing to calibrate for Brooks–Corey or van Genuchten parameters while still providing a good match to observation. Based on these ﬁts, we choose an irreducible water saturation of 0.2, a maximum CO2 relative permeability 80% that of water, and exponents of 3.1 for both curves. These parameters are summarized in Table 1.

3.2. Model setup

Fig. 4A presents the computational grid, zonal assignments and boundary conditions necessary to simulate the simpliﬁed produc- tion/injection strategy outlined in Section 2 (Figs. 1A and 2). The computational domain is a cuboid that encompasses one quar- ter of the complete well ﬁeld, extending 5 km on the horizontal edges. Increased horizontal reﬁnement is supplied in the vicinity of injection and production wells with the number of reﬁned regions depending on the number of stages in the injection operation; the importance of horizontal reﬁnement around wells is discussed in Section 3.3. Vertical reﬁnement is coarse except in the vicinity of the reservoir and caprock; the interface between these units is located at a depth of 3 km. Both 100 m and 300 m thick reservoir and caprock units are stratigraphically horizontal, i.e., we do not consider buoyant CO2 migration within an inclined reservoir (Buscheck et al., 2012). For dipping storage formations, buoyant migration of the CO2 plume

Fig. 3. Relative permeability curves for liquid CO2 (black dashed line) and water (black

solid) used in this study (from Dempsey et al., 2014). These curves are repre- sentative

power-law functions ﬁt to compiled experimental data and curves used by

other studies (Bachu and Bennion, 2008; Perrin and Beson, 2010; Krevor et al., 2012; Berg et al.,

2013; Pasala et al., 2013).

may necessitate higher production underpressures down-dip to counteract this tendency. Consistent with other studies (Rutqvist et al., 2010), homogeneous, isotropic permeabilities and porosi- ties are assigned (Table 1). Assumptions of such homogeneity do not address issues of deleterious CO2 fast pathways that would be

Table 1 Parameters

used in

the models and calculating Coulomb Failure Stresses. Bracketed parameters show values explored in sensitivity analysis.

Parameter Value

Operational Injection

depth 3 km Production

pressure 2, 5, 10

MPa Injection pressure 0 Injection

temperature 50 ◦C Reservoir

temperature 115 ◦C Well

spacing 0.2–2.4 km

Material Thermal

conductivity 3.0 W m−1 K−1

Density 2500 kg m−3

Speciﬁc heat capacity 1000 J m−3 K−1

Permeability Caprock

10−19 m2

Reservoir 10−14 m2

Basement 10−18 m2

Porosity Caprock

0.01 Reservoir

0.1 Basement

0.01 Young’s

modulus Caprock

20 GPa Reservoir

5 GPa Basment

20 GPa Poisson’s

ratio 0.25 Biot

coupling 1.0

Relative permeability (see Eq. (3)) Irreducible

saturation, Smin 0.2 Max.

CO2 rel. perm., kmax 0.8 Fitted

exponents, nw and nCO2 3.1

Coulomb Failure Stress (CFS) Friction

coefﬁcient 0.65 Failure

plane strike Parallel to y-axis and H. Failure

plane dip 60◦

102 D. Dempsey et al. / International Journal of Greenhouse Gas Control 28 (2014) 96–113

Fig. 4. (A) Overview of computational mesh, formation zones and properties, and boundary conditions for stage one of a three-stage injection scenario. Sensitivity of the pressure

proﬁle between injection (r = 0) and production well (r = 1 km) (B) and attendant injected ﬂow rate (C) to mesh resolution. (D) Convergence of ﬂow rate with increasing

resolution for three injection conﬁgurations: 5 MPa underpressure and 1.0 km well spacing (black squares, see also B and C); 5 MPa underpressure, 2.0 km spacing (red

circles); 10 MPa underpressure, 2.0 km spacing (blue triangles). Flow rate at the medium resolution (used for subsequent simulations) is between 1.6 and 1.8 times the limiting

ﬂow rate in each case. (For interpretation of the references to color in this ﬁgure legend, the reader is referred to the web version of the article.)

expected to form in formations with realistic permeability hetero- geneity. However, given that formation homogeneity is likely to be desirable characteristic of potential storage sites, we have deter- mined this issue to be outside the scope of the present study. The prescribed caprock permeability is sufﬁcient to prevent vertical migration of CO2 and we do not treat failure or leakage scenar- ios (Rutqvist and Tsang, 2002; Rutqvist et al., 2008). However, the implications for induced seismic risk are quantiﬁed and discussed (see Section 5.1). Quarter spot symmetry is ensured by prescribing reﬂecting boundary conditions – no heat or mass ﬂow, no perpendicular displacement, i.e., rollers – on two lateral boundaries. The other lateral boundaries are also closed to heat and mass transfer and are on rollers; physically, this corresponds to a laterally closed aquifer

with no recharge. In Section 4.2.5, the second set of lateral boundaries are opened to consider the case of an open reservoir; this

is achieved by allowing ﬂow in or out of the boundary to maintain a ﬁxed pressure. The upper boundary, which corresponds to the ground surface, is prescribed zero traction and main- tained at atmospheric temperature (25 ◦C) and pressure. The lower

boundary, at 4 km depth, is closed to heat and mass ﬂow and is on rollers.

The model is initialized with vertical gradients in temperature and pressure in accordance with arguments outlined in Section 2.1, i.e., dt/dz = 30 ◦C km−1 and pressure given by the weight of the overlying ﬂuid column. Two options are available for representing injection and pro- duction in the model: either (i) source/sink ﬂow rates can be directly prescribed, with pressure in the control volume changing in response to the mass balance; or (ii) inlet and outlet ﬂowing pressures are prescribed, in which case the source/sink ﬂow rates are proportional to the difference between nodal and ﬂowing pres- sure. In practice, this is equivalent to a well operator modifying injection and production rates to maintain a constant WHP. Each

approach has its own advantages and disadvantages; for instance, a ﬁxed mass ﬂow rate achieves (by deﬁnition) the desired

sequestration targets but provides no control over for- mation pressures. This is unacceptable for passive injection, as precise engineering of pressure magnitude and gradient is central to achieving the objective of zero overpressure inside the reservoir.

D. Dempsey et al. / International Journal of Greenhouse Gas Control 28 (2014) 96–113 103

Fig. 5. Summary of a 50-year, single-stage, 1-km-spacing CO2 injection scenario. (A) CO2 injection (red dashed), production (dotted) and net retention (solid) rates, and brine production

rate (blue). (B) Retention efﬁciency (red) and storage efﬁciency (blue) for the 50-year simulation. Here the breakthrough criterion is arbitrarily deﬁned where the

retention efﬁciency drops below 50%, in this case after ∼18 years as indicated by the dotted red line. (C) Horizontal slice of CO2 saturation at the top of the reservoir unit at

the breakthrough time of 18 years. Production and injection wells are shown by a blue and red star, respectively. (D) Vertical slice of CO2 saturation between the injection and

production wells. (E) Accumulated ﬂuid pressure change at the breakthrough time; note, negative values indicate a drop in ﬂuid pressure from initial values. (F–H) As for

104 D. Dempsey et al. / International Journal of Greenhouse Gas Control 28 (2014) 96–113

By operating ﬁxed pressure injection and production we gain this control, at the cost of being unable to prescribe ﬂow rates – the operational implications of this restriction are discussed in Section 4.1. Furthermore, unreasonably high injection and production rates occur at early time as pressures around the wells equilibrate with the imposed source term; however, these effects are quite tran- sient and these anomalous mass transfers are small in comparison to total transfers over the length of a simulation. Both injection and production wells are represented using ﬁxed ﬂowing pressures sources/sinks. All wells are assumed to be ver- tical

and open within the reservoir, i.e., several source nodes are assigned per injection well.

3.3. Mesh sensitivity

Use of mass sources and sinks formulated in terms of a ﬂowing- pressure creates sharp pressure gradients in the vicinity of injection and production wells. As mass ﬂow is proportional to pressure gra- dient, a high mesh resolution is desired near well locations (Fig. 4A). A mesh sensitivity study was undertaken to establish a resolution that adequately represented near-well pressure and ﬂow. In this simpliﬁed scenario, there is a single injection well at the symmetry corner (center of the full well pattern) and production well at a distance of 1 km; this corresponds to the stage-1 injec- tion pattern shown in Fig. 2. As we are concerned with mass ﬂow rates, pure water is used in place of CO2. This enables us to evaluate passive injection rates at higher mesh resolution. Fig. 4B shows the gradual reﬁnement of steady-state ﬂuid pressure along a proﬁle between the wells for increasing mesh res- olution (incremental addition of two nodes between injector and producer up to a doubling of the coarsest mesh resolution). Near- well gradients are seen to sharpen, while pressure is relatively ﬂat in between. Corresponding injection rates for a ten year period for the ﬁve meshes are given in Fig. 4C; injection decreases from 0.34 Mt yr−1 for the coarsest mesh to 0.18 Mt yr−1 for the ﬁnest. This is in response to ﬂattening of the inter-well pressure gradient. When plotted against the horizontal discretization (Fig. 4D), mean injection rate trends linearly toward a limiting value of 0.15 Mt yr−1

for an inﬁnitesimally discretized domain. Mesh convergence for simulations with a larger well spacing and higher production pres- sure are also shown. All remaining simulations described here were performed using medium resolution meshes (Fig. 4A). While for a single-stage mesh, i.e., the 8000 node grid used in the mesh sensitivity study, this is not difﬁcult to simulate, adding additional stages requires more areas

of horizontal reﬁnement. Two-, three- and four-stage grids, all modeled here, have respectively, 17,000, 30,000, and 47,000 nodes at the medium resolution. Given the increased computational costs associated with simulating CO2 mixtures and coupled stress, this resolution is regarded as adequate. Accurate representation of CO2 injection rates is a key out- come of this model. In Fig. 4D, we show that by using a medium resolution mesh we will overestimate this quantity in a given sys- tem. However, Fig. 4D also quantiﬁes this overestimate; for the medium resolution mesh, this is between 60% and 80% depending on well-spacing and production pressure. This allows us to lever- age the computational savings of low resolution meshes to perform a broader sensitivity study, while acknowledging that our results are likely to overestimate CO2 injection rates and volumes by a fac- tor

on the order of 1.6–1.8. In future treatments, use of speciﬁc

well-modules embedded in the medium resolution mesh could yield improved estimates of injected and extracted ﬂow rates.

4. Results

In our initial simulation, we consider a single-stage injec- tion

scenario, in which the central injection well is separated from the outer production wells by a distance of 1 km. Produc- tion wells are pumped at 5 MPa (i.e., a ﬁxed pressure source 5 MPa less than the ambient value) for a period of 50 years, while a CO2 source term, ﬁxed to maintain initial formation pres- sure,

represents the injection well. Results are summarized in Fig. 5A–E. For this conﬁguration, we ﬁnd an initial CO2 injection rate of 0.3 Mt yr−1, rising to 0.6 Mt yr−1 after ten years when CO2 ﬁrst reaches the production well. CO2 injection continues to increase to 1.0 Mt yr−1 by the end of ﬁfty years; however, at this time, the

well is producing almost as much CO2 as is being injected. The reason for a steady rise in the CO2 injection rate is that ﬂuid being driven between injection and production wells, while ini- tially water, is steadily being replaced by less viscous CO2. Our primary interest is in the CO2 retention rate, which we deﬁne here as the difference between the instantaneous injection and produc- tion rates. We consider only structural trapping and neglect the effects of CO2 dissolution and subsequent mineral reactions that would sequester CO2 permanently. Following the breakthrough of CO2 at the production well, the retention rate exhibits an exponential decline. Nevertheless, by the end of the 50 year sim- ulation, more than 16 Mt of CO2 have been stored in the reservoir (Fig. 6A). Brine production exhibits some similar trends to the CO2 injec- tion curve. At early times, brine production is high but declines rapidly as reservoir pressures are initially reduced. However, for a short period of time, this decline is reversed, gaining slightly in response to the emplacement of less viscous CO2. When CO2 break- through occurs, the brine production rate drops in concert with the CO2 injection rate; this is because an ever increasing proportion of production is co-produced CO2. While initially CO2 production is low and the CO2 retention rate is appreciable, a point must eventually be reached where continued operation is no longer desirable; this is deﬁned by the breakthrough criterion. In practice, this will be determined by economic drivers such as ﬁnancial penalties for emitting the produced CO2, infra- structure costs for separation and transport to a reinjection well, and the cost of drilling the next stage of wells. However, for the purposes of this study, we use an arbitrary breakthrough criterion based on the retention efﬁciency, which we deﬁne as the instanta- neous retention rate divided by instantaneous injection rate. This is a useful measure of the current effectiveness of the GCS opera- tion. In this simulation, a new stage is initiated when the retention efﬁciency drops below 0.5; for stage-1, this occurs after 18 years of injection (Fig. 5B). In these simulations, 0.5 represents one possi- ble end-member for the amount of CO2 co-production an operator might economically justiﬁed in tolerating. Another metric of the effectiveness of the storage strategy is storage efﬁciency (SE), deﬁned here in terms of the volume CO2 stored in the section of the reservoir formation that is inside the perimeter of production wells. This is essentially the reservoir vol- ume that has been exposed for storage by the passive injection method. If the perimeter of production wells bounds an area, A,

(A–C) but for the full three-stage injection operation, with stage changes after 18 and 35 years. Storage fraction in G is calculated for the reservoir volume laterally delineated by

the square formed by the ﬁnal set of production wells. (For interpretation of the references to color in this ﬁgure legend, the reader is referred to the web version of the article.)

D. Dempsey et al. / International Journal of Greenhouse Gas Control 28 (2014) 96–113 105

Fig. 6. Accumulated quantities of produced brine (blue) and injected (red dashed), produced (red dotted) and retained (red solid) CO2 associated with the (A) single and (B) multi-stage injection ﬂow

rates in Fig. 5A and F, respectively. Black dotted lines demarcate stage transitions in B. (For interpretation of the references to color in this ﬁgure legend, the reader is referred to the web version of the article.)

the height of the reservoir formation is h and the irreducible water saturation is Smin then SE is given by

SE =

VCO2 Ah(1 − Smin) , (4)

where VCO2 is the volume of CO2 retained by the reservoir (injection minus production). This is similar to the deﬁnition of Birkholzer et al. (2009) except that we allow some inaccessible fraction of the pore space, corresponding to the irreducible saturation. If CO2 migrates across the perimeter of production wells – as it generally does at later times – then SE may, somewhat unintuitively, exceed 1. However, as an approximate measure of reservoir utilization it is useful both as a guide for understanding the CO2 sweep and, later, as a tool for comparison. Storage efﬁciency is plotted in Fig. 5B. At early time, it increases linearly, but slows down as the front of injected CO2 approaches the production wells. At the breakthrough time of 18 years, SE ≈1.0. By the end of the simulation, SE is almost 2; this is because the front of injected CO2 has extended signiﬁcantly beyond the region horizontally demarcated by the production wells (Fig. 5C) but has also not uniformly ﬁlled the reservoir over its depth (the bottom of the reservoir is generally not accessed by the buoyant CO2). The distribution of CO2 in the reservoir after 18 years is con- toured in Fig. 5C and D. Buoyancy ensures that the emplaced CO2 rises to the underside of the caprock; the maximum lateral extent of the CO2 plume is therefore deﬁned at the depth of the caprock- reservoir interface. Furthermore, while CO2 is injected and brine is produced over a 100 m open-hole length spanning the thickness of the reservoir, buoyancy ensures that CO2 is only produced from the top of the production well. Changes in pressure within the reservoir and caprock are con- toured in Fig. 5E after 18 years. These indicate that pressures near the injection well are largely unchanged from their origi- nal value. Pressures are increasingly depressed with proximity to the injection well, both within the reservoir and caprock. At large underpressure, the possibility of mechanical deformation around the well may need to be considered so as to avoid damage.

4.1. Multi-stage injection

Having established a breakthrough criterion, we now consider the proposed multi-stage injection (Fig. 2) in which the stage count is automatically iterated when the criterion is satisﬁed. For a well

spacing of 1 km and a production pressure of 5 MPa, transition to stage-2 occurs after 18 years (Fig. 5B) and to stage-3 after 27.5 years. Note that, because the breakthrough criterion is only assessed on a quarterly basis, in regions where retention efﬁciency is changing rapidly a new stage may not be initialized precisely at the break- through threshold. Accompanying each stage transition is an increase in both the CO2 retention and brine production rate in response to the increased well count. For instance, from stage-1 to stage-2, CO2 retention exhibits a 5-fold increase from 0.3 to 1.5 Mt yr−1. At the same time, brine production increases by more than a factor of 3 as eight new production wells are brought online in place of the four previously operating (and now repurposed for injection). At the beginning of stage-2, retention efﬁciency returns to 1 (Fig. 5G) – CO2 is not immediately produced at the new production wells – but starts declining within a couple of years. When the breakthrough criterion is once more satisﬁed, stage-3 commences. Again, the addition of eight injection wells and twelve production wells has a positive effect on both CO2 retention and brine production. Retention efﬁciency, which is once more returned to 1, starts to decline after two years and is 0.3 by the end of the 50 year simulation. At the end of this time, storage efﬁciency within the 18 km2 area demarcated by the production wells is a respectable 0.9. At later stages, migration of the CO2 plume beyond this boundary is minimal (Fig. 5H). Total CO2 retention in the sim- ulated reservoir over the 50 year period is 68 Mt (Fig. 6B) – a more than fourfold increase over the single-stage simulation. In practice, a GCS operation is more likely to be tasked with storing a steady stream of produced CO2, rather than the evolving rate that is indicated in Fig. 5A and F. However, these hypothetical curves actually represent an upper limit on an injection rate that satisﬁes the pressure criteria of the passive injection strategy. If, for reasons of supply, the CO2 injection rate were maintained below the hypothetical limit given in Fig. 5, the practical result would be development of an underpressured region around the injection well. This underpressure might be utilized as a buffer against future volatility in the CO2 supply rate. Alternatively, as greater capac- ity is made available at later stages, the injection operation may accommodate additional CO2 streams. In the next section, we will show how the CO2 injection rate depends on the brine production pressure. This suggests that injection rates may be further controlled by appropriate operation on the extraction side of the operation. For instance, reducing the

106 D. Dempsey et al. / International Journal of Greenhouse Gas Control 28 (2014) 96–113

Table 2 Per-well

CO2 retention statistics for a four-stage operation with 10 MPa underpressure and 1 km well spacing. Ninj = number of operating injection wells, Nprod = number of operating

production wells, Ntot = total number of operating wells. CO2 ret. = average per-stage retention rate.

Stage Ninj Nprod CO2 ret. [Mt yr−1] CO2 ret./Ninj CO2 ret./Nprod CO2 ret./Ntot

1 1 4 0.9 0.9 0.23 0.18 2

4 8 2.7 0.68 0.34 0.23 3

8 12 4.6 0.58 0.38 0.23 4

12 16 6.4 0.53 0.4 0.23

production pressure at each new stage could both stabilize the injection rate while increasing the time between stages.

4.2. Sensitivity analysis

In the previous section, we provided a general overview of the operation of multi-stage passive injection strategy. In this section, we investigate the sensitivity of CO2 retention, brine production, and

CO2 breakthrough, to operational aspects of the injection. Multi-stage injection was simulated for well-spacings ranging from 200 m

to 2.4 km in 200 m increments. For each well conﬁgura- tion,

three production pressure scenarios were considered: 2, 5 and 10 MPa. All other parameters were held ﬁxed, including the mate- rial parameters given in Table 1 and a breakthrough criterion of 0.5 retention efﬁciency (Fig. 5B).

4.2.1. Breakthrough time and stage transition Stage-1 breakthrough times as a function of well spacing and production pressure are plotted in Fig. 7A. The model exhibits intuitive trends, with breakthrough occurring at earlier times when wells are spaced closer together or when pumped at higher pressures. Log-transformation of these data yields a linear rela- tionship (Fig. 7B), suggesting breakthrough time has a power-law dependence on well-spacing, with the exponent ranging between 1.74 and 1.78. Flow in the reservoir is approximately two-dimensional, being restricted to a stratigraphic unit with thickness much less than its horizontal extent. Thus, for an average injection rate, q, and neglect- ing the effects of partial saturation and vertical segregation of the ﬂuid (Fig. 5C and D), one can write the position of the front of injected CO2, r, as a function of time, t,

hr2(1 − Smin) = qt, (5)

where

h is the thickness of the reservoir and Smin is the irreducible saturation of water. The approximate r2 dependence indicated by Fig. 7B is consistent with this picture. The effect of the driving pressure gradient is also incorporated by noting that mean retention rates scale in proportion to brine production pressure, Pprod (Fig. 7E), i.e.,

q = CPprod, (6)

where

C is a constant depending on formation permeability and intrinsic ﬂuid properties, e.g., relative permeability, viscosity. Thus, Eq. (5) is rewritten

t = h(1 − Smin) CPprod

r2, (7)

where

the coefﬁcient of the r2 term is given by the reciprocal trans- formation of the y-intercept of the regression curves in Fig. 7B – respectively, 41.3, 18.1 and 8.9 for the 2, 5 and 10 MPa pumping scenarios. The ratio of these terms, 1:0.44:0.22 is roughly consis- tent with the ratio of the inverses of Pprod, 1:0.4:0.2, suggesting the relationship given in Eq. (7) is fairly accurate. Fig. 7C and D summarizes the dependence of successive break- through times on well spacing for a 10 MPa production pressure.

Log-transformation of these data indicates the r2 dependence is preserved for successive stages; the ﬁtted exponent ranges between 1.74 and 1.79. Furthermore, the breakthrough time for each successive stage is approximately constant, e.g., for 1 km spac- ing and a 10 MPa pumping pressure, breakthrough times are 9, 16, 23 and 30 years (Fig. 7C).

4.2.2. Retention rates In

general, both CO2 injection and brine production rates scale linearly with

the pressure difference driving ﬂow in the system. For instance,

during stage-1, doubling the production pressure from 5 to

10 MPa, doubles the

ﬂow rate from 0.35–0.5 to 0.7–1.0 Mt yr−1, depending

on well spacing (Fig. 7E). This suggests an avenue by which an

operator might control the injection rate – by modify- ing

brine extraction – to handle a ﬁxed volumetric stream of CO2. Impacts on injection operation life-time and efﬁciency, as well as the issue of time-delay between changes in production and injec- tion ﬂow rates will be addressed in future work. The retention rate also exhibits a mildly positive relation- ship with well spacing; this is a modeling artifact introduced by decreasing discretization as wells are spaced further apart. The magnitude of this overestimate is constrained in Section 3.3 and, compared to other drivers of the retention rate, e.g., number of operating wells, the effect is relatively small. For instance, the mean retention rate per stage increases by ∼1.8 Mt yr−1 between stages 1 → 2, 2 → 3 and 3 → 4 (Table 2). Nevertheless, this behavior is a worthwhile reminder that ﬂow rates are unavoidably inﬂuenced by the mesh discretization and that a 60% reduction should be applied to obtain a reasonable estimate. Increased rates of retention must be weighed up against the costs of additional wells and pipeline each time a new stage is added. Taking the per-stage retention rate for the 10 MPa, 1-km spacing scenario, statistics for per-well retention rates – injection, production and total – for each stage are compiled in Table 2. These ﬁgures show that while the total retention rate increases from 0.9 to 6.4 Mt yr−1, the mean retention per injection well decreases from 0.9 to 0.53 Mt yr−1. On average, each injection well is less effective at later stages. However, the effectiveness of the operation is better judged on a per-total-well basis, i.e., taking into account all operating infra- structure. Beyond stage-1, the per-well efﬁciency is relatively ﬂat at 0.23 Mt yr−1. This suggests that, if costs are balanced, three two- stage injection operations (12 wells per operation, 12 injection and 24 production wells, 36 wells total) are as effective as a single ﬁve- stage operations (16 injection and 20 production wells, 36 wells total).

However, when combined with cost estimates for various injection

and production related activities, e.g., compression and transport of CO2, production and treatment of brine, per-well statis- tics can help inform operational decision-making. For example, if the cost of operating a CO2 injection well is low relative to a brine production well, then multi-stage operations would be preferred as

these maximize the ratio of cheap injection wells to expensive production wells. If the opposite is true, then multiple two-stage operations would be favored.

D. Dempsey et al. / International Journal of Greenhouse Gas Control 28 (2014) 96–113 107

Fig. 7. Sensitivity of passive CO2 injection to well spacing and production pressure. (A) CO2 breakthrough time at different well spacings and pressures for a single-stage operation.

Linear regression through the log-transformed data in B indicates power-law relationships with an exponent that varies between 1.75 and 1.84. (C) Breakthrough times

for each stage of a four-stage operation. Again, log-transformation (D) indicates the relationship is a power-law with an exponent between 1.84 and 1.86. (E) Sensitivity of

mean injection rate (E) and brine production ratio (G) to different well spacings and production pressures, and during different stages of a four-stage operation (F, H).

108 D. Dempsey et al. / International Journal of Greenhouse Gas Control 28 (2014) 96–113

4.2.3. Brine production One obvious drawback of passive injection is the production of large

quantities of brine that will ultimately require treatment, and storage or discharge. Therefore, an important component of this study is an analysis of parameters that minimize the brine produc- tion ratio, deﬁned as the mass of brine produced per ton of CO2 sequestered.

Fig. 7G shows that brine production increases signiﬁcantly at higher pumping pressures; this additional cost may have to be accepted

if a target CO2 retention rate is to be achieved (Fig. 7E). For increasing distance between wells, brine production drops and then stabilizes. This is partly a model artifact; outer production wells are spaced closer to the closed outer boundaries (represent- ing a closed aquifer) and, in the period of time before breakthrough is achieved, are better able to drawdown the reservoir. If these boundaries were open, mass recharge would prevent drawdown and maintain high production rates. While certainly a boundary effect, this behavior

is nevertheless illustrative of the advantages of utilizing

closed aquifers with this storage method. In Section 4.2.5, we contrast with a scenario of injection into an open aquifer. The brine production ratio also drops sharply with the transition from stage-1 to stage-2. This is due to the relatively sharp jump in the ratio of injection to production wells. In subsequent stages, the ratio remains relatively ﬂat at 1.7 tons for brine produced for each ton of CO2 sequestered. It is worthwhile considering the amount of brine produced by passive injection in the context of brine production and disposal within the oil and gas sector. For the three-stage simulation shown in Fig. 5E–G, total brine production over the 50 year period is a little under 120 Mt, or an average of 2.4 Mt yr−1. In a report by Clark and Veil (2009), brine extraction accompanying US oil pro- duction operations was approximately 20.4 billion bbl in 2007, or 3240 Mt (assuming a density 1000 kg m−3). About 58% of this was reinjected into formations to maintain pressure and improve recov- ery, an option that is not available in passive injection. However, much of the remainder, about 40% or 1300 Mt, was reinjected into other geological formations. Thus, the passive injection operation reported here generates for disposal an amount of brine approxi- mately equal to 0.2% of that disposed by the oil and gas sector in 2007. Clark and Veil (2009) also report, for onshore oil production, an average volumetric ratio of produced brine to oil of 7.6, i.e., 7.6 bbl of brine are extracted along with each bbl of oil. Allowing that 40% of this brine is disposed of in geological formations, the ratio of disposed brine to oil decreases to 3. For a typical oil density of 900 kg m−3, the corresponding mass ratio is 3.3. This latter statistic is analogous to the brine production ratio we report for passive injection, i.e., it is a measure of the quantity of brine that must be disposed of when either producing 1 kg of oil or disposing of 1 kg of CO2 by passive injection. In this context, as a measure of operational efﬁciency, the particular ratios reported in Fig. 7G and H generally exceed the standards set by oil sector operations. The cost of treating and disposing of produced brine is likely to be the most economically burdensome aspect of the passive injec- tion method. Sullivan et al. (2013) provide cost estimates for a range of treatment and disposal methods, including injection into Class II wells, which would be the most likely disposal method. Their sim- ulated cost estimates, when scaled to account for brine production ratios between 1.7 and 3, generally fall in a range of $2.50–25.00 per ton

of injected CO2; clearly, at the higher end of the scale (where trucking costs dominate), the proposed scheme is economically prohibitive. Any practical application of passive injection would require favorable conditions for brine disposal, synergistic revenue streams (e.g., geothermal generation, mineral extraction; Breunig et al., 2013) or perhaps look to take advantage of economies of scale, e.g., shared pipeline infrastructure (Middleton et al., 2012).

4.2.4. Low-tolerance for CO2 co-production Separation of co-produced CO2 is common practice during enhanced

oil recovery (EOR) operations because the expense to acquire it is relatively high. Nevertheless, signiﬁcant costs are associated with the separation of CO2 from the miscible hydro- carbons and recompression for reuse (Jarell et al., 2002). In our case, while separation of CO2 from immiscible brine is likely to be less expensive, an operator may nevertheless by unwilling to toler- ate CO2 co-production and reinjection. Depending on the penalties for emitting the co-produced CO2, the breakthrough criterion may then be stricter and stage transition will occur at earlier times. We

consider a four-stage injection operation with 1-km spacing and 10 MPa production pressure and compare two breakthrough criteria: stage transition at (i) 50% and (ii) 98% retention efﬁciency. Fig. 8A and B illustrates long-term retention, brine production and storage

efﬁciency for the two scenarios, with per-stage statistics summarized in Table 3. The most signiﬁcant difference is 45–50% reduction in the break- through time. A direct consequence of this is a requirement for more rapid construction of, and transition to, new stages, although this could be offset by increasing well spacing (Fig. 7A and C). The mean retention rate is slightly higher because the break- through criterion prevents operation at retention rates retarded by CO2 co-production. The brine production ratio is not signiﬁcantly affected.

Another drawback of this approach is less efﬁcient usage of the pore volume. For the two scenarios, SE at a given stage transition is generally 30–50% lower when the stricter breakthrough criterion is applied. Due to buoyancy, CO2 breakthrough at the production well is always at the top of reservoir; tolerance for some CO2 production allows continued injection and retention within the under-utilized deeper sections of the reservoir.

4.2.5. Passive injection into an open aquifer So far, by application of closed lateral boundary conditions, we have only considered injection into a laterally compartmentalized reservoir. Here, we consider the case of a larger reservoir in which assumption of lateral conﬁnement is no longer valid and brine can ﬂow across the boundaries in response to drawdown. In the simulation, this is implemented by replacing the ‘no-ﬂow’ lateral boundary condition with one of ﬁxed-pressure (set to initial for- mation pressure). The code maintains pressure at this boundary through the addition of mass; physically, this represents lateral recharge by brine outside the simulation domain. As in the pre- vious section, we have simulated a four-stage operation with 1 km well spacing and 10 MPa production pressure; results are plotted in Fig. 8C and D and summarized in Table 3. The most signiﬁcant difference between the two scenarios is a much higher brine production at all stages for the open reser- voir; this is reﬂected in an approximate doubling of the brine production ratio. Imposing a ﬁxed-pressure boundary condition causes additional brine to enter the simulated reservoir in response to pressure drawdown around the production wells. This lateral recharge maintains higher pressures in the vicinity of the produc- tion wells and thus contributes to an elevated extraction rate. At the same time, the retention rate is slightly lower; this is due to smaller pressure gradients that are maintained in the presence of

the recharging boundaries. Breakthrough times are also slightly longer due to the reduced rate of CO2 transport. Finally, storage efﬁciency is about 20–25% less for the open aquifer scenario. Given all these drawbacks, there is a compelling argument that passive injection operations should target smaller, closed forma- tions.

In these formations, it is easier to cause a signiﬁcant pressure drawdown to drive CO2 ﬂow while at the same time minimizing expensive brine production.

D. Dempsey et al. / International Journal of Greenhouse Gas Control 28 (2014) 96–113 109

Fig. 8. (A) Comparison between CO2 retention (red) and brine production (blue) rates for two breakthrough criteria: 50% (light-colored) and 2% produced CO2 (dark-colored). These

simulations consider four-stage injection into an open reservoir with 1-km well spacing at 10 MPa underpressure. (B) Comparison of retention (red) and storage efﬁciency

(blue) for the two breakthrough criteria. (C and D) The same curves but this time considering open (light-colored) versus closed (dark-colored) aquifer conditions. A

50% produced CO2 breakthrough criteria is used in this case. (E and F) As above, this time illustrating the scenario that interior injection wells are not abandoned (dark colored).

(For interpretation of the references to color in this ﬁgure legend, the reader is referred to the web version of the article.)

4.2.6. Continued operation of interior injection wells When

a stage transition occurs, sources and sinks within the reservoir are reconﬁgured and a new pressure distribution is cre- ated. Interior injection wells that experienced negative pressure gradients in the previous stage (responding with CO2 ﬂow) are now less inﬂuenced by the production wells. This is due to both

advancement of the production front to a greater distance as well as pressure support and shielding supplied by the new injection wells. Nevertheless, an argument could be made that, due to the substantial investment in drilling each well, interior injectors (the crossed wells in Fig. 2) should be preserved, even if the injection rate at each is somewhat lessened. However, the decision to continue

110 D. Dempsey et al. / International Journal of Greenhouse Gas Control 28 (2014) 96–113

Table 3 Summary

of breakthrough time, tbr, mean CO2 retention rate and brine production ratio for simulations comparing the effect of hard versus soft breakthrough criteria and closed

versus open reservoir conditions (see Fig.7).

Benchmark Stricter breakthrough criterion (Fig. 8A and B) Open aquifer (Fig. 8C and D)

Stage tbr [yr] CO2 ret. [Mt yr−1] Brine ratio tbr [yr] CO2 ret. [Mt yr−1] Brine ratio tbr [yr] CO2 ret. [Mt yr−1] Brine ratio

1 9 0.9 2.8 5 0.9 3.5 9 0.7 5.8 2

16 2.7 1.7 8 3.0 1.7 17 2.2 3.4 3 23 4.6 1.7 13 5.1 1.7 25 3.9 3.0 4 30 6.4 1.7 16 7.1 1.6 33 5.4 3.0

operating each well must be made on an ongoing basis, weighing up the costs of compression, maintenance, pipeline, etc., against CO2 injected.

Fig. 8E and F presents CO2 injection and brine production for the scenario where all interior injection wells remain in service for the duration of the operation. In general, the CO2 retention rate is almost identical to

the scenario in which these wells are retired; this indicates

the beneﬁts of maintaining interior wells are incremental at

best. However, for a short time after the stage transition, the retention rate does remain is slightly higher than if the interior injectors were abandoned.

This is due to the ﬁnite time required for reservoir

pressures to re-equilibrate to the new well conﬁguration. Thus,

it may be economic to maintain interior injectors for a short period of time – one or two years – after a stage transition.

5. Further considerations

So far, we have limited our discussion to a numerical demonstra- tion of passive CO2 injection and a sensitivity analysis of parameters that are potentially within an operator’s control, e.g., assessment of temperature gradient and reservoir compartmentalization during site selection, well-spacing and production pressure, tolerance for CO2 co-production. However, there are many other factors that are likely to affect the success of such a sequestration strategy. Passive injection relies on CO2 ﬂowing along negative pressure gradients directed toward producing wells. If both an injection and production well intersect the same permeable feature, then a fast-pathway or short-circuit would be introduced to the system (IEAGHG, 2012). CO2 breakthrough will then occur more rapidly, reducing the efﬁciency of the CO2 sweep. Similar concerns exist in the creation and operation of Engineered Geothermal Systems (EGS), where uncontrolled well stimulation can lead to the creation of hydraulic fractures; fast-pathways that reduce sweep volume and create a thermal short-circuit. The risk of fast-pathways/short- circuiting can be minimized through comprehensive structural characterization, tracer testing and or abandonment of jeopardized wells. In the future, techniques for the deployment of harden- ing, impermeable silica gels, currently being developed to increase sweep efﬁciency in EGS and ensure seal integrity in CCS (Ezzedine et al., 2012), might be applied to the problem of CO2 short- circuits.

Another possibility for increasing the efﬁciency of a general GCS operation, is the use of novel well-track designs to take advantage of reservoir geometry and CO2 buoyancy. For example, recent devel- opments in directional drilling open up the possibility of horizontal injection wells that could parallel a sub-horizontal reservoir unit (Buscheck et al., 2012); the open-hole length of such well tracks are not limited by reservoir thickness. Furthermore, deployed in the concentric square-ring conﬁguration considered here, these wells could substantially reduce the number of wells required at each stage. Several co-linear injection/production wells – point sources – could be replaced with a single horizontal well, i.e., a line source. Buscheck et al. (2012) propose that for CO2 injection into an inclined formation, production wells might be positioned

down-dip (below) from the CO2 injectors so as to both relieve reservoir overpressure and to draw CO2 in the opposite direction of its buoyant ﬂow, thereby increasing the utilized reservoir vol- ume. Fig. 5D shows that, for the injection strategies considered here, when CO2 breakthrough occurs, it is typically at the top of a production well due to buoyant CO2 migrating most rapidly along the underside of

the caprock. It is possible that CO2 breakthrough might

be delayed through the use of horizontal production wells that

parallel the base of the reservoir layer.

5.1. Implications for induced seismicity

The primary purpose of passive CO2 injection is to mitigate some of the negative externalities associated with reservoir overpres- surization, including induced seismicity and brine migration. The simulations detailed in Section 4 were performed using a fully cou- pled thermal–hydrological–mechanical simulator. Therefore, we are in a position to investigate induced stress changes due to injec- tion and their implications for mechanical failure. Induced stresses in the model are generated by either tempera- ture or pressure changes. In our model, the only source of thermal stress is by the injection of cool 50 ◦C liquid CO2 into a reservoir the 115 ◦C reservoir. This implies that CO2 in the well is not in thermal equilibrium with the geothermal gradient, an assumption made in calculating the pressure neutral depth in Section 2.1. A more robust approach would be to use a wellbore model that accounts for conductive heat exchange with the formation (e.g., Vilarrasa et al., 2013). Induced cooling is local to the wellbore, extending ∼200 m away, and results in thermal contraction. Providing that borehole image analysis indicates that the injection zone is not a large fault or fracture, reactivation of signiﬁcant features by thermal stressing is unlikely. However, shear failure could be induced on smaller, well- oriented fractures; as noted by Vilarrasa et al. (2013), this could lead to a rise in injectivity of the well. Of greater concern is the elevation of pore pressure within a fault that contributes to its reactivation (Cappa and Rutqvist, 2011; Zoback and Gorelick, 2012). However, as shown in Fig. 5E, at the conclusion of injection, all pressures within the reservoir are less than ambient. Indeed, neglecting the small increase due to buoy- ancy, the passive injection strategy permits no mechanism at all for increases in pressure. While generally regarded as the primary risk, elevated ﬂuid pressure within a fault is not the only way to trigger an earthquake. Flexure or subsidence of adjacent formations responding to reser- voir pressurization can indirectly modify their internal stresses, which may reinforce or work against the tectonic load (Hangx et al., 2010; Dempsey et al., 2014). Therefore, we seek a metric for the induced seismic hazard due to given changes in stress and ﬂuid pressure; for this, we use the change in Coulomb Failure Stress, CFS. The Coulomb Failure Stress is a measure of the proximity of a fault to failure for given stress and pressure state,

CFS =  || − (n − pf ), (8)

D. Dempsey et al. / International Journal of Greenhouse Gas Control 28 (2014) 96–113 111

Fig. 9. (A–C) Summary of the induced seismic threat for the injection scenario presented in Fig. 5A–E. (A) Contours of CFS for a horizontal slice through the caprock, calculated

assuming a 60◦dipping fault in an extensional tectonic regime. The black dashed line marks the horizontal extent of injected CO2. (B) Contours of CFS for a horizontal

slice at the top of the reservoir. (C) Vertical slice of CFS passing through the production and injection well. Relevant rock types and wells are plotted. (D–G) Summary

of the induced seismic threat for the injection scenario presented in Fig. 5F–H. Horizontal slices of CFS in the caprock (D) and top of the reservoir (E). (F) Normalized frequency

distribution for the distribution of CFS between 2.5 and 3.5 km depth (500 m either side of the reservoir) at the end of stage-1 (dotted) and stage 3 (solid). G. Contours

of surface subsidence at the end of stage-3 (50 years).

112 D. Dempsey et al. / International Journal of Greenhouse Gas Control 28 (2014) 96–113

where  and n are the shear and normal stress on the fault, and  is the coefﬁcient of friction. A positive value for CFS, caused by induced changes in stress or pressure, indicates that the likeli- hood of fault failure has increased. The change in Coulomb Failure Stress has been previously used to correlate aftershock locations with regions of co-seismic stress transfer (Reasenberg and Simpson, 1992). This measure is similar to the strength-to-stress margin used by Rutqvist (2012) in a geomechanical modeling study of induced seismicity risk near a horizontal CO2 injection well at In Salah, Algeria.

The advantage of using CFS (relative) versus CFS (absolute) is that the  terms in Eq. (8) can be obtained through modeling; in contrast, absolute measures of n,  and pf require site-speciﬁc measurements that can be more difﬁcult and expensive to obtain. Nevertheless, calculation of the absolute CFS is valuable on a case- by-case basis as this is used to inform operating pressure limits within the reservoir so as to avoid fault failure. However, in the generic study presented here, a relative measure of CFS will sufﬁce. The Coulomb Failure Stress is sensitive to fault orientation. For example, in an extensional tectonic regime, a dipping fault that strikes in the direction of the intermediate principal stress, 2, would have a higher CFS than a similar fault striking in the direction of 3. Thus, some faults are more prone to failure than others and a conservative approach is to consider CFS for the most critically stressed orientation. In this work, we consider induced stresses in the context of an extensional tectonic set- ting. Previous modeling studies have indicated that CO2 injection in such regimes is more likely to lead to through-going mechan- ical failure of the caprock (Rutqvist et al., 2008; Vilarrasa et al., 2011). Fig. 9A–E plots contours of CFS at the conclusion of stage- 1 and stage-3 for a critically oriented fault with regard to an extensional tectonic regime, i.e., dipping at 60◦, striking parallel to 2. With the exception of the region near the injection well – here, thermal stresses are high while passive injection maintains unchanged pressure – values for CFS are negative, both within the reservoir and overlying caprock. CFS continues to decrease with proximity to the production well and the source of the pressure drawdown.

Compiling a normalized frequency distribution of all CFS changes in the model (Fig. 9F, essentially a histogram of all nodal values of CFS divided by the number of nodes) we show that much of the reservoir and caprock is characterized by a 0.5 to 1 MPa decrease. This is on the order of stress drops typically recorded during earthquakes (Kanamori and Anderson, 1975). More impor- tantly, it indicates that passive injection, rather than increasing the risks of induced seismicity, actually decreases the threat, providing a degree future protection for the sequestered CO2. Induced seismicity has previously been linked to pore pressure drawdown in oil production operations (Segall, 1989). Segall et al. (1994) describe an analytical model for induced stress changes due to drawdown of an idealized reservoir; they show that induced earthquakes associated with a 30 MPa pressure decline in the Lacq deep gas ﬁeld, France, are associated with stress changes as small as 0.2 MPa. Given that the maximum pressure declines in our sim- ulations are 10 MPa, it is reasonable that associated stress changes will be less than 0.2 MPa. For such small changes, we are justiﬁed in considering only the critically oriented failure surfaces in our analysis of CFS. The crust responds to pressure drawdown in the storage forma- tion by subsiding. For the particular elastic properties, production pressure and injection depth considered in Fig. 9, up to 1 m of sub- sidence is recorded outside the ring of production wells, where the pressure drawdown in greatest. Even within the ring of injection wells,

where pressures are partially recovered by CO2 emplace- ment, more than 0.35 m of subsidence remains.

6. Conclusion

Injection of CO2 into the subsurface raises the formation pressures, sometimes at great distance from the injection site (Birkholzer et al., 2009). Adverse effects associated with this over- pressuring include brine migration and contamination of shallow aquifers and the generation of earthquakes. In response to these concerns, we have outlined a strategy for the emplacement of large volumes of CO2 into subsurface storage formations with no increase – temporary or long-term – of in situ pressure. This strat- egy, called passive injection, extends the concepts of active CO2 reservoir management in which brine production wells are used to limit injection-induced overpressure. In our strategy, brine produc- tion is the only driver of ﬂuid ﬂow in the system, drawing CO2 out of injection wells at no overpressure. This is achieved by controlling the compression of CO2 at the surface and leveraging converging pressure-depth proﬁles within the injection well and formation. Numerical experiments were undertaken to demonstrate the feasibility of passive injection. We consider a multi-staged approach with advancing fronts of injection and production wells including recycling of production wells for injection. For a range of

well-spacings, production pressures and aquifer conditions, we showed that CO2 could be sequestered at rates of up to 6.4 Mt yr−1; approximately 4 Mt yr−1, when grid discretization effects are taken into account. In the long-term, concurrent brine production aver- ages 1.7 tons for every ton of CO2 sequestered. One of the major challenges facing CCS is the high cost of implementation, including CO2 capture at source, transport and sequestration. Passive CO2 injection adds additional costs to the traditional sequestration operation by advocating voluminous pro- duction of deep brines. This brine would require either treatment or disposal, both of which would impose a ﬁnancial penalty on the operation; estimates here range from $2.50 to $25.00 per ton of injected CO2. Furthermore, the strategy calls for a conﬁguration of advancing concentric rings of injection and production wells, with periodic drilling of new wells and construction of supporting infrastructure. Economies of scale, alternative revenue streams or further research and development is likely to be required if this scheme is to become economically viable. However, these costs must be balanced against the substantial advantages offered by this strategy: mitigation of the threat of induced seismicity and brine contamination of shallow aquifers. An analysis of stress and pressure changes induced by passive injection conﬁrms that: (i) reservoir pressure is everywhere less than or equal to its initial value, both during and after the injection; and (ii) the risk of induced seismicity, as parameterized by a change in the Coulomb Failure Stress, is decreased or unchanged. These results support our claim that passive injection neutralizes two of the substantial obstacles facing geologic CO2 storage.

Acknowledgements

The authors thank George Zyvoloski for technical assistance using FEHM and helpful discussions, and two anonymous review- ers whose comments improved the quality of this manuscript. This study was funded through the American Recovery & Reinvestment Act (ARRA). The work was performed as part of the National Risk Assessment Partnership (NRAP) project. NRAP is supported by U.S. Department of Energy through its Cross-Cutting Research Effort and is managed by National Energy Technology Laboratory (NETL).

References

Bachu, S., 2003. Screening and ranking of sedimentary basins for sequestration of CO2 in geological media in response to climate change. Environ. Geol. 44, 277–289.

D. Dempsey et al. / International Journal of Greenhouse Gas Control 28 (2014) 96–113 113

Bachu, S., Bennion, B., 2008. Effects of in-situ conditions on relative permeability characteristics of CO2-brine systems. Environ. Geol. 54, 1707–1722. Bear, J., Cheng, A.H.-D., 1999. Seawater Intrusion in Coastal Aquifers – Con- cepts, Methods and Practices. Kluwer Academic Publishers, Dordrecht, The Netherlands. Berg, S., Oedai, S., Ott, H., 2013. Displacement and mass transfer between saturated and unsaturated CO2-brine systems in sandstone. Int. J. Greenh. Gas Control 12, 478–492. Bielicki, J.M., Pollak, M.F., Wilson, E.J., Fitts, J.P., Peters, C.A., 2013. A methodology for monetizing basin-scale leakage risk and stakeholder impacts. Energy Procedia 37, 4665–4672. Birkholzer, J.T., Zhou, Q., Tsang, C.F., 2009. Large-scale impact of CO2 storage in deep saline

aquifers: a sensitivity study on pressure response in stratiﬁed systems. Int. J. Greenh. Gas Control 3, 181–194. Birkholzer, J.T., Cihan, A., Zhou, Q., 2012. Impact-driven pressure management via targeted brine extraction – conceptual studies of CO2 storage in saline forma- tions.

Int. J. Greenh. Gas Control 7, 168–180. Bourcier, W.L., Wolery, T.J., Wolfe, T., Haussmann, C., Buscheck, T.A., Aines, R.D., 2011. A preliminary cost and engineering estimate for desalinating produced forma- tion water associated with carbon dioxide capture and storage. Int. J. Greenh. Gas Control 5, 1319–1328. Breunig, H.M., Birkholzer, J.T., Borgia, A., Oldenburg, C.M., Price, P.N., McKone, T.E., 2013. Regional evaluation of brine management for geologic carbon sequestra- tion. Int. J. Greenh. Gas Control 14, 39–48. Buscheck, T.A., Sun, Y., Chen, M., Hao, Y., Wolery, T.J., Bourcier, W.L., Court, B., Celia, M.A., Friedmann, S.J., Aines, R.D., 2012. Active CO2 reservoir management for carbon storage: analysis of operation strategies to relieve pressure buildup and improve injectivity. Int. J. Greenh. Gas Control 6, 230–245. Cappa, F., Rutqvist, J., 2011. Impact of CO2 geological sequestration on the nucleation of earthquakes. Geophys. Res. Lett. 38, http://dx.doi.org/10. 1029/2011GL048487. Clark, C.E., Veil, J.A., 2009. Produced Water Volumes and Management Practices in the United States. No. ANL/EVS/R-09-1. Argonne National Laboratory (ANL). Dempsey, D., Kelkar, S., Pawar, R., Keating, E., Coblentz, D., 2014. Modeling caprock bending stresses and their potential for induced seismicity during CO2 injection. Int. J. Greenh. Gas Control 22, 223–236. Deng, H., Stauffer, P.H., Dai, Z., Jiao, Z., Surdam, R.C., 2012. Simulation of industrial- scale CO2 storage: multi-scale heterogeneity and its impact on storage capacity, injectivity and leakage. Int. J. Greenh. Gas Control 10, 397–418. Elliot,

T.R., Buscheck, T.A., Celia, M., 2013. Active CO2 reservoir management for sustainable geothermal energy extraction and reduced leakage. Greenh. Gas Sci. Technol. 3, 50–65. Ellsworth, W.L., 2013. Injection-induced earthquakes. Science 341, http://dx.doi. org/10.1126/science.1225942. Environmental Protection Agency, November 2010. Geologic CO2 Sequestration Technology and Cost Analysis. Technical Support Document, EPA 816-R10-008. Ezzedine, S.M., Hunt, J.D., Bourcier, W., Roberts, S.K., 2012. Impact of silica gel deployment on

subsurface ﬂow and heat extraction from enhanced geother- mal systems. In: Proceedings of the 37th Workshop on Geothermal Reservoir Engineering, Stanford, CA. Hangx, S.J.T., Spiers, C.J., Peach, C.J., 2010. Mechanical behavior of anhydrite caprock and implications for CO2 sealing capacity. J. Geophys. Res. 115, http://dx.doi.org/10.1029/2009JB006954. Harto, C.B., Veil, J.A., 2011. Management of Water Extracted from Carbon Seques- tration Projects. Report ANL/EVS/R-11/1. Argonne National Laboratory, Lemont, IL. Horton, S., 2012. Disposal of hydrofracking waste ﬂuid by injection into subsur- face aquifers triggers earthquake swarm in central Arkansas with potential for damaging earthquake. Seismol. Res. Lett. 83, 250–260. Hosseini, S.A., Nicot, J.-P., 2012. Scoping analysis of brine extraction/re-injection for enhanced CO2 storage. Greenh. Gas Sci. Technol. 2, 172–184. IEAGHG (International Energy Agency, Greenhouse Gas), 2002. Building the Cost Curves for CO2 Storage, Part 1: Sources of CO2, PH4/9. IEAGHG

(International Energy Agency, Greenhouse Gas), 2012. Extraction of Forma- tion Water from CO2 Storage. IPCC (Intergovernmental Panel on Climate Change), 2005. IPCC Special Report on Carbon Dioxide Capture and Storage. Cambridge University Press, New York. Jarell, P.M., Fox, C.E., Stein, M.H., Webb, S.L., 2002. Practical aspects of CO2 ﬂooding. SPE Monograph 22. Richardson, TX. Kanamori, H., Anderson, D.L., 1975. Theoretical basis of some empirical relations in seismology. Bull. Seismol. Soc. Am. 65, 1073–1095.

Keating, E.H., Newell, K.L., Viswanathan, H., Carey, J.W., Zyvoloski, G., Pawar, R., 2012. CO2/brine transport into shallow aquifers along fault zones. Environ. Sci. Technol. 45, 215–222. Keranen, K.M., Savage, H.M., Abers, G.A., Cochran, E.S., 2013. Potentially induced earthquakes in Oklahoma, USA: links between wastewater injection and the 2011 Mw 5.7 earthquake sequence. Geology 41, 699–702. Kim, W.-Y., 2013. Induced seismicity associated with ﬂuid injection into a deep well in Youngstown, Ohio. J. Geophys. Res. 118, http://dx.doi.org/10. 1002/jgrb.50247. Krevor, S.C.M., Pini, R., Zuo, L., Benson, S.M., 2012. Relative permeability and trapping of CO2 and water in sandstone rocks at reservoir conditions. Water Resour. Res. 48, http://dx.doi.org/10.1029/2011WR010859. Middleton, R.S., Keating, G.N., Stauffer, P.H., Jordan, A.B., Viswanathan, H.S., Kang, Q.J., Carey, J.W., Mulkey, M.L., Sullivan, E.J., Chu, S.P., Esposito, R., Meckel, T.A., 2012. The cross-scale science of CO2 capture and storage: from pore scale to regional scale. Energy Environ. Sci. 5, 7238–7345. Oldenburg, C.M., Rinaldi, A.P., 2011. Buoyancy effects on upward brine displacement caused by CO2 injection. Transp. Porous Media 87, 525–540. Pasala, S.M., Forster, C.B., Deo, M., Evans, J.P., 2013. Simulation of the impact of faults on CO2 injection into sandstone reservoirs. Geoﬂuids 13, http://dx.doi.org/10.1111/gﬂ.12029. Perrin, J.-C., Beson, S., 2010. An experimental study on the inﬂuence of Sub-Core Scale heterogeneities on CO2 distribution in reservoir rocks. Transp. Porous Media 82, 93–109. Pettersen, O., 2010. Compaction, permeability, and ﬂuid ﬂow in Brent-type reser- voirs under depletion and pressure blowdown. Open Pet. Eng. J. 3, 1–13. Pollak, M.F., Bielicki, J.M., Dammel, J.A., Wilson, E.J., Fitts, J.P., Peters, C.A., 2013. The leakage impact valuation (LIV) method for leakage from geological CO2 storage reservoirs. Energy Procedia 37, 2819–2827. Pool, M., Carrera, J., Vilarrasa, V., Silva, O., Ayora, C., 2013. Dynamics and design of systems for geological storage of dissolved CO2. Adv. Water Resour. 62, 533–542. Pruess, K., Garcia, J., 2002. Multiphase ﬂow dynamics during CO2 disposal into saline aquifers. Environ. Geol. 42, 282–295. Reasenberg, P.A., Simpson, R.W., 1992. Response of regional seismicity to the static stress change produced by the Loma Prieta earthquake. Science 255, 1687–1690. Rutqvist, J., 2012. The geomechanics of CO2 storage in deep sedimentary formations. Geotechn. Geol. Eng. 30, 525–551. Rutqvist, J., Birkholzer, J.T., Tsang, C.F., 2008. Coupled reservoir-geomechanical analysis of the potential for tensile and shear failure associated with CO2 injec- tion in multilayered reservoir-caprock systems. Int. J. Rock Mech. Min. Sci. 45, 132–143. Rutqvist, J., Tsang, C.F., 2002. A study of caprock hydromechanical changes associated with CO2-injection into a brine formation. Environ. Geol. 42, 296–305. Rutqvist, J., Vasco, D.W., Myer, L., 2010. Coupled reservoir-geomechanical analysis of CO2 injection and ground deformations at In Salah, Algeria. Int. J. Greenh. Gas Control 4, 225–230. Schutjens, P.M.T.M., Hanssen, T.H., Hettema, M.H.H., Merour, J., de Bree, P., Coremans, J.W.A., Hellesen,

G., 2004. Compaction-induced porosity/permeability reduction in sandstone reservoirs: data and model for elasticity-dominated deformation. SPE Reserv. Eval. Eng. 7, 202–216. Segall, P., 1989. Earthquakes triggered by ﬂuid extraction. Geology 17, 942–946. Segall, P., Grasso, J.-R., Mossop, A., 1994. Poroelastic stressing and induced seismicity near the Lacq gas ﬁeld, southwestern France. J. Geophys. Res. 99, 15423–16438. Shaffer, G., 2010. Long-term effectiveness and consequences of carbon dioxide sequestration. Nat. Geosci. Lett. 3, 464–467. Sullivan, E.J., Chu, S., Stauffer, P.H., Pawar, R.J., 2012. A CO2-PENS model of methods and costs for treatment of water extracted during geologic carbon sequestration. Desalin. Water Treat. 51, 1487–1493. Sullivan, E.J., Chu, S., Stauffer, P.H., Middleton, R.S., Pawar, R.J., 2013. A method and cost model for treatment of water extracted during geologic CO2 storage. Int. J. Greenh. Gas Control 12, 372–381. Vilarrasa, V., Olivella, S., Carrera, J., 2011. Geomechanical stability of the caprock during CO2 sequestration in deep saline aquifers. Energy Procedia 4, 5306–5313. Vilarrasa, V., Silva, O., Carrera, J., Olivella, S., 2013. Liquid CO2 injection for geological storage in deep saline aquifers. Int. J. Greenh. Gas Control 14, 84–96. Zoback, M.D., Gorelick, S.M., 2012. Earthquake triggering and large-scale geologic storage of carbon dioxide. Proc. Natl. Acad. Sci. U.S.A. 109, 10164–10168. Zyvoloski, G.A., 2007. FEHM: A Control Volume Finite Element Code for Simulating Subsurface Multi-phase Multi-ﬂuid Heat and Mass Transfer. LA-UR-07-3359. Los Alamos National Laboratory, Los Alamos, NM.