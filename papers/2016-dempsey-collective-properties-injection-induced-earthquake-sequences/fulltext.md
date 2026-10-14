# Collective properties of injection‐induced earthquake sequences: 2. Spatiotemporal evolution and magnitude frequency distributions

**Authors:** David Dempsey, Jenny Suckale, Yihe Huang  
**Published in:** Journal of Geophysical Research: Solid Earth (2016)  
**DOI (version of record):** https://doi.org/10.1002/2015jb012551  
**This copy:** Accepted manuscript (peer-reviewed, author's version). Text extracted from the PDF at https://ddempsey.github.io/papers/2016-dempsey-collective-properties-injection-induced-earthquake-sequences/dempsey2016-collective-properties-injection.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** An edited version of this paper was published by AGU. Published 2016 American Geophysical Union. Version of record: https://doi.org/10.1002/2015jb012551  

---


# **Journal of Geophysical Research: Solid Earth** 

## **RESEARCH ARTICLE** 10.1002/2015JB012551 

This article is a companion to _Dempsey and Suckale_ [2016] doi:10.1002/2015JB12550. 

**Collective properties of injection-induced earthquake sequences: 2. Spatiotemporal evolution and magnitude frequency distributions** 

**Key Points:** 

- Induced seismicity b value evolution reflects modification of underlying rupture energy physics 

- Deficit of induced large-magnitude events due to a plume shape effect 

- Guy, AR seismicity model of rate, migration, nonlinear GR distribution; invert fault permeability 

##### **Correspondence to:** 

D. Dempsey, ddempsey786@gmail.com 

##### **Citation:** 

Dempsey, D., J. Suckale, and Y. Huang (2016), Collective properties of injection-induced earthquake sequences: 2. Spatiotemporal evolution and magnitude frequency distributions, _J. Geophys. Res. Solid Earth_ , _121_ , doi:10.1002/2015JB012551. 

Received 23 SEP 2015 Accepted 10 APR 2016 Accepted article online 22 APR 2016 

#### **David Dempsey**<sup>**1,2**</sup> **, Jenny Suckale**<sup>**1**</sup> **, and Yihe Huang**<sup>**1**</sup> 

1Department of Geophysics, Stanford University, Stanford, California, USA, 2Now at Department of Engineering ScienceUniversity of Auckland, Auckland, New Zealand 

**Abstract** Probabilistic seismic hazard assessment for induced seismicity depends on reliable estimates of the locations, rate, and magnitude frequency properties of earthquake sequences. The purpose of this paper is to investigate how variations in these properties emerge from interactions between an evolving fluid pressure distribution and the mechanics of rupture on heterogeneous faults. We use an earthquake sequence model, developed in the first part of this two-part series, that computes pore pressure evolution, hypocenter locations, and rupture lengths for earthquakes triggered on 1-D faults with spatially correlated shear stress. We first consider characteristic features that emerge from a range of generic injection scenarios and then focus on the 2010–2011 sequence of earthquakes linked to wastewater disposal into two wells near the towns of Guy and Greenbrier, Arkansas. Simulations indicate that one reason for an increase of the Gutenberg-Richter _b_ value for induced earthquakes is the different rates of reduction of static and residual strength as fluid pressure rises. This promotes fault rupture at lower stress than equivalent tectonic events. Further, _b_ value is shown to decrease with time (the induced seismicity analog of _b_ value reduction toward the end of the seismic cycle) and to be higher on faults with lower initial shear stress. This suggests that faults in the same stress field that have different orientations, and therefore different levels of resolved shear stress, should exhibit seismicity with different _b_ -values. A deficit of large-magnitude events is noted when injection occurs directly onto a fault and this is shown to depend on the geometry of the pressure plume. Finally, we develop models of the Guy-Greenbrier sequence that captures approximately the onset, rise and fall, and southwest migration of seismicity on the Guy-Greenbrier fault. Constrained by the migration rate, we estimate the permeability of a 10 m thick critically stressed basement fault to be 5 × 10<sup>−12</sup> m<sup>2</sup> . We also consider alternative scenarios in which only one of the two disposal wells operated and suggest that, due to the wells interacting, total seismicity may be greater than that attributable to each well alone. 

### **1. Introduction** 

Underground fluid injection has the potential to induce earthquakes on critically stressed faults [ _Healy et al._ , 1968; _Raleigh et al._ , 1976; _Zoback and Harjes_ , 1997]. Such earthquakes represent a financial and public safety hazard when performing wastewater disposal [e.g., _Horton_ , 2012; _Keranen et al._ , 2013], well stimulation to create an Enhanced Geothermal System (EGS) [e.g., _Häringetal._ , 2008] and geologic storage of carbon dioxide [ _Zoback and Gorelick_ , 2012]. 

Probabilistic Seismic Hazard Analysis (PSHA) [ _Cornell_ , 1968] provides a framework for quantifying earthquake hazard from ground acceleration. An important step in PSHA is characterizing the rates at which earthquakes of different magnitudes are expected to occur. For tectonic earthquakes, the seismicity rate can be regarded as quasi-constant because it depends on tectonic plate motions that vary on timescales much longer than those considered by the risk assessment. The magnitude frequency distribution is often described by the Gutenberg-Richter (GR) model, which is expressed as 

> ©2016. American Geophysical Union. All Rights Reserved. 

where _N_ ( _M_ ) is the number of events with magnitude greater than or equal to _M_ , 10<sup>_a_</sup> is the total number of events larger than _M_ min, and the so-called _b_ value controls the relative number of small- to large-magnitude 

INDUCED SEISMICITY—MAGNITUDE FREQUENCY 

DEMPSEY ET AL. 

1 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012551 

**Figure 1.** Comparison of Gutenberg-Richter (GR) and Truncated GR models. For this illustration, the lower magnitude cutoff, _M_ min, is 1.5, the upper magnitude cutoff, _M_ max, is 4.5; the catalog contains 3000 events, i.e., _a_ = log 3000 ≈3 _._ 5, and _b_ = 1. 

events. Observations of tectonic earthquakes suggest that _b_ varies in the range 0.8 to 1.2 [ _Schorlemmer et al._ , 2005] with a worldwide average close to 1.0 [ _El-Isa and Eaton_ , 2014]. 

In several modeling studies, GR scaling of the magnitude frequency distribution is replicated through spatial heterogeneity of stress or strength [e.g., _Huang and Turcotte_ , 1988; _Zöller et al._ , 2005; _Ampuero et al._ , 2006; _Murphy et al._ , 2013]. One of the key features of the model we use here is a stochastic description of fault stress heterogeneity from which we show that GR scaling is an emergent property. The advantage of this stochastic approach is that it averages over the geological uncertainty and heterogeneity associated with specific events so that we can focus on the collective properties of the earthquake catalog. However, the approach is not suitable for mod- 

eling features of induced seismicity that are strongly dependent on the specific heterogeneity at a site, e.g., the timing of the largest magnitude event. 

In PSHA, it is sometimes useful to use a truncated form of (1) that accounts for an upper magnitude limit, _M_ max, imposed by the length of the fault [ _Utsu_ , 1999] 

The effect of an upper magnitude limit is to introduce convexity at high magnitude in the magnitude frequency distribution (Figure 1). In the limit that _M ≪ M_ max, (2) reduces to (1). 

Sometimes, the magnitude frequency distribution for induced earthquakes exhibits convexity at the large-magnitude limit [e.g., _Dorbath et al._ , 2009; _Friberg et al._ , 2014; _Cesca et al._ , 2014; _Huang and Beroza_ , 2015]. _Shapiro et al._ [2011] model this convexity by considering a statistical model for rupture with an _M_ max emerging from an imposed limit on rupture length by the finite size ( _L_ max) of an ellipsoidal stimulation volume. The concept of an upper limit to _M_ max imposed by the finite volume of the fluid-perturbed zone is also invoked by _McGarr_ [2014] who formulates _M_ max in terms of both the volume of injected fluid and the elastic properties of the crust. These approaches exclude the possibility of large-magnitude events propagating beyond the region of the fault where pressure is elevated. This shortcoming is addressed in a modeling study by _Gischig_ [2015] who delineates two regimes of rupture—pressure front limited and uncontrolled—depending on the level of shear stress on the fault. It should be noted that _M_ max imposed by the dimensions of a pressure plume is not the same as that imposed by the finite size of a fault, which will always be larger. 

Another property of the magnitude frequency distribution that is sometimes used to distinguish induced and natural earthquakes is the _b_ value. While measurement of the _b_ value depends on the magnitude scale and the method of fitting a GR model, consistent trends have nevertheless emerged across a range of induced seismicity case studies. For example, values as high as 2.0 are observed during hydraulic fracturing of shales, between 1.2 and 1.6 during EGS well stimulation, and between 1.4 and 2.0 for natural gas and CO2 injection (see Table 1 for locations and references). In some instances [ _Gibbs et al._ , 1973; _Ake et al._ , 2005; _Brodsky and Lajoie_ , 2013; _Holland_ , 2013; _Fribergetal._ , 2014; _Skoumaletal._ , 2015], there is no clear indication that the _b_ value is different from the range associated with tectonic seismicity (0.8 to 1.2) [from _Schorlemmer et al._ , 2005]. In other instances of wastewater disposal, a depression of the _b_ value is observed during periods of injection [ _Lei et al._ , 2008, 2013; _Huang and Beroza_ , 2015; _Goebel et al._ , 2016]. 

INDUCED SEISMICITY—MAGNITUDE FREQUENCY 

DEMPSEY ET AL. 

2 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012551 

**Table 1.** Summary of Induced Seismicity _b_ Values Reported in the Literature<sup>a</sup> 

|Activity|Location|_b_Value|Reference|
|---|---|---|---|
|HF -↑|Attica Dale, New York, USA|1.1–1.5|_Fletcher and Sykes_[1977]|
|HF -↑|Barnett shale, USA|1.5–1.9|_Vermylen and Zoback_[2011]|
||Other shales|1.8–2.0|_Zhou et al._[2013]|
|||1.9|_Guest et al._[2014]|
|EGS -↑|Basel, Switzerland|1.1–1.6|_Bachmann et al._[2012]|
|EGS -↑|Soultz, France|1.2|_Dorbath et al._[2009]|
|EGS-↑|Paralana, Australia|1.3|_Albaric et al._[2014]|
|NGS -↑|Puhagan, Philippines|1.3|_Bromley et al._[1987]|
|GI -↑|Offshore Spain|1.4|_Cesca et al._[2014]|
|GI -↑|In Salah, Algeria|1.5–2.0|_Goertz-Allmann et al._[2014]|
|WD -↑|Dallas-Fort Worth, Texas, USA|1.3|_Frohlich et al._[2011]|
|WD -↑and↓|Sichuan Basin, China|0.8–1.3|_Lei et al._[2008]|
|||0.7–1.4|_Lei et al._[2013]|
|WD -↓|Guy, Arkansas, USA|0.8|[_Huang and Beroza_, 2015], this study|

aHF=HydraulicFracturing,EGS=EnhancedGeothermalSystem,NGS=NaturalGeothermalSystem,GI=GasInjection, WD = Wastewater Disposal, ↑ = _b_ value higher than tectonic range, ↓ = _b_ value lower than tectonic range. 

In microfracturing experiments, elevated _b_ values are observed at low levels of shear stress [ _Scholz_ , 1968]. Earthquake observations in different tectonic regimes are consistent with these small-scale experiments: _b_ values tend to be elevated in extensional regimes where shear stress (at a given depth) is lower and depressed in compressional ones where shear stress is higher [ _Schorlemmer et al._ , 2005]. _Scholz_ [1968] explain this relationship using a heterogeneity model for fracture shear stress and propose that higher levels of stress increase the likelihood that small ruptures will grow into larger ones. Based on this idea, _Bachmann et al._ [2012] and _Goertz-Allmann and Wiemer_ [2013] develop a stochastic model of induced seismicity in which fractures are seeded throughout a volume with a randomly assigned value of differential stress, _𝜎d_ , from a prescribed normal distribution and, upon failing, are assigned an event magnitude sampled from a GR distribution in which the _b_ value is a prescribed linear function of _𝜎d_ . Their model reproduces elevated _b_ value near the injection well where pressures are high enough to activate fractures with low _𝜎d_ (and thus high _b_ value). Assuming that stress drop is proportional to shear stress, their model also reproduces observations of low stress drop near the injection well [ _Goertz-Allmann et al._ , 2011; _Lengliné et al._ , 2014]. The model we use extends the theoretical framework of _Scholz_ [1968] to specific spatial heterogeneity and distribution functions and the stochastic model of _Bachmann et al._ [2012] and _Goertz-Allmann and Wiemer_ [2013] to include a physical description of the rupture process and event size. 

An elevated _b_ value corresponds to a magnitude frequency distribution with relatively more low-magnitude events. Earthquake magnitude depends on rupture length, _L_ , through the seismic moment, _M_ 0 [ _Aki_ , 1972]. In this study, we consider ruptures on 1-D faults with heterogeneous stress drop, for which _M_ 0 is given [ _Madariaga_ , 1979] 

where Δ _𝜏_ is the heterogeneous stress drop distribution, Δ _̄𝜏_ is the average stress drop assuming an elliptical distribution of slip [ _Eshelby_ , 1957], and _z_ is a dimensionless coordinate spanning the rupture. Strictly speaking, equation (3) gives the moment per length in the out-of-plane direction. However, for true 1-D ruptures—i.e., in a universe with only two space dimensions—there is no concept of an out-of-plane direction and (3) fully describes seismic moment. 

Incorporating (3) into the moment magnitude definition [ _Hanks and Kanamori_ , 1979], we write magnitude as 

where _L_<sup>∗</sup> (= _L_ ∕ _L_ 0) is the rupture length nondimensionalized by the length of the fault, _L_ 0, and _MW,_ 0 is a reference event magnitude corresponding to full fault rupture and a reference stress drop, Δ _̄𝜏_ ref. 

INDUCED SEISMICITY—MAGNITUDE FREQUENCY 

DEMPSEY ET AL. 

3 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012551 

An alternative approximation of event magnitude is obtained by assuming the existence of an out-of-plane dimension, e.g., when rupture occurs on a 2-D fault. In this case, to avoid extreme and unphysical rupture aspect ratios, it is common to assume that the out-of-plane dimension is proportional to _L_<sup>∗</sup> , which recovers the more familiar form _MW_ = 2 log _L_<sup>∗</sup> + const. Here we aim for maximum consistency with the concept of 1-D fault rupture and use the form (4). However, a degree of conservatism is necessary when interpreting results in the context of more realistic 2-D ruptures and, for this reason, conclusions drawn tend to be qualitative in nature. 

Fixing for now Δ _̄𝜏_ , one can use (4) to perform a distribution change of variables on (1) and obtain the GR model for _L_ 

where _L_ min is the rupture length corresponding to _M_ min, _N_ ( _L_ ) is the number of events with rupture length greater than _L_ , and _bL_ is a _b_ value that explicitly neglects the effect of stress drop on the magnitude frequency distribution. In this form, we can consider the implication for _b_ value of various transformations of the rupture length distribution. Transforming _L_ by a fixed power, _𝛼_ , e.g., _L_ → _L_<sup>_𝛼_</sup> , scales the _b_ value by a factor 1∕ _𝛼_ , whereas a linear transformation, e.g., _L_ → _𝛾L_ , does not alter the _b_ value. Thus, one explanation for shifted _b_ values associated with induced seismicity is that there might be a preference for smaller rupture lengths resulting in a power law transformation of the underlying length distribution. The goal of this paper is to investigate the interaction between injection and the rupture process that might cause this effect. 

This paper is organized as follows: section 2 summarizes the key features of the earthquake sequence model developed in part one, including governing equations, reservoir and rupture simulation, and the stochastic fault stress model. In section 3, we investigate how parameters of the stress model influence the magnitude frequency distribution of earthquake catalogs simulated under a tectonic loading condition and establish parameters that reproduce GR scaling. In section 4.1, we consider induced seismicity caused by uniform pressure rise on a fault and investigate variations of the GR _b_ value. In section 4.2, we introduce asymmetry to the pressure plume and consider a wider range of injection parameters. Finally, in section 5, we apply our model to a sequence of earthquakes in Arkansas in 2010–2011 that were likely induced by wastewater injection at two wells. In particular, we focus on the spatiotemporal evolution of seismicity and how things might have been different if only one well had been operating. 

### **2. Model Description** 

Herewesummarizethemainfeaturesofourmodelforinducedseismicity,whichisdevelopedinthefirstpaper in this two-part series. The model combines a description of heterogeneous shear stress on 1-D faults, reservoir simulations of injection and fault pressure evolution, and the physics of fault rupture conceptualized as an expanding bilateral crack. The model outputs an ensemble of fault ruptures—representing an earthquake catalog—each of which is characterized by a hypocenter location, rupture length, and event time. Symbols and acronyms used in the text are summarized in Table 2. 

The 1-D fracture mechanics model is attractive because its reduced computational expense enables simulation of large earthquake catalogs. Nevertheless, care must be exercised in interpreting model results and their implications for real earthquakes on 2-D faults. The main limitation is an absence of 2-D effects, e.g., rupture propagation around barriers. Nevertheless, previous studies have used similar 1-D models to replicate a range of earthquake behavior [ _Ampuero et al._ , 2006; _Ampuero and Ben-Zion_ , 2008; _Kammer et al._ , 2015] and, as we show here and in the first paper, our model also generates seismicity with directivity and magnitude frequency properties consistent with seismological observation. We take a conservative approach to interpreting insights gained from the 1-D model and adopt a view that qualitative agreement between 1-D model and 2-D reality is reasonable when 2-D effects are expected to be minimal. 

In part one, we defined the nondimensional spatial, _x_<sup>∗</sup> , and temporal scales, _t_<sup>∗</sup> , evolving pressure distribution on the fault, Δ _P_<sup>∗</sup> , static and residual shear strength, _𝜏s_<sup>∗and</sup><sup>_𝜏_</sup> _r_<sup>∗, and the potential stress drop,</sup><sup>_𝜏_∗=</sup><sup>_𝜏_</sup> 0<sup>∗+ Δ</sup><sup>_P_∗,</sup> where _𝜏_ 0<sup>∗is the spatially variable shear stress on the fault (see Table 3 for a summary of these quantities). It is</sup> important to reiterate that the nondimensional stress, _𝜏_<sup>∗</sup> , reflects the difference between shear stress, _𝜏_ 0, and a residual strength, _𝜏r_ , which has potentially been reduced by fluid overpressure. This reduction modifies the 

INDUCED SEISMICITY—MAGNITUDE FREQUENCY 

DEMPSEY ET AL. 

4 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012551 

**Table 2.** Table of Symbols and Acronyms<sup>a</sup> 

|Symbol/Acronym|Meaning|
|---|---|
|_a_,_b_|GR productivity, magnitude frequency parameter|
|_Cr_|Pressurization/criticality ratio|
|_Cv_|Curvature of magnitude frequency distribution|
|_L_,_L_0|Rupture, fault length|
|_n_|Fractal exponent|
|_N_(_M_)|Number of earthquakes with magnitude larger than_M_|
|_N_|Seismicity rate|
|_M_,_M_min,_M_max,|Earthquake magnitude, minimum, maximum in truncated GR model|
|_MW,_0|Upper magnitude limit on the fault|
|_P_0|Pore pressure|
|Δ_P_,Δ_P_inj|Overpressure, value applied at injector|
|Δ_P_max|Overpressure causing tensile failure|
|_th_|Earthquake time|
|_xh_|Earthquake location (hypocenter)|
|_𝜅f_|Fault permeability|
|_𝜇𝜏_|Mean of stress PDF|
|_𝜎𝜏_|Standard deviation of stress PDF|
|_𝜏_,_̄ 𝜏_|Shear stress, average on fault|
|_𝜏s_,_𝜏r_|Static strength, residual|
|ANSS|Advanced National Seismic System|
|EGS|Enhanced Geothermal System|
|ETAS|Epidemic Type Aftershock Sequence|
|GGS|Guy-Greenbrier Sequence catalog|
|GR|Gutenberg-Richter|
|PDF|Probability Density Function|
|PSHA|Probabilistic Seismic Hazard Assessment|
|RS|Rate-and-State|
|TR0|Tectonic Reference catalog|
|UPR|Uniform Pressure Rise catalog|
|UPR-E|Uniform Pressure Rise catalog with ETAS events|
|WHAR|Station in the Arkansas Seismic Network|
|aStarred symbols (∗) refe<br>to quantities whenΔ_P_=0.|r to dimensionless quantities. Stress variables with the subscript 0 refer|

energetics of fault rupture. The actual stress drop is computed over the section of the fault that ruptures and is therefore different to the potential stress drop. 

The nondimensional seismicity rate, _̇ N_<sup>∗</sup> , is defined 

where _N_ ( _ti_<sup>∗</sup> −1<sup>_< t_</sup> _h_<sup>∗</sup><sup>_< t_</sup> _i_<sup>∗) is the number of modeled events with event time,</sup><sup>_t_</sup> _h_<sup>∗, in the interval [</sup><sup>_t_</sup> _i_<sup>∗</sup> −1<sup>_, t_</sup> _i_<sup>∗], and</sup><sup>_N_tot</sup> is number of faults in the ensemble. 

#### **2.1. Model Physics** 

Heterogeneous shear stress, _𝜏_ 0<sup>∗, on a fault is described by a fractal model in which the Fourier amplitude spec-</sup> trum of stress is given by a power law, i.e., | _̃𝜏_ 0<sup>∗(</sup><sup>_k_)| ∝</sup><sup>_k_−</sup><sup>_n_, where the tilde indicates a Fourier transform,</sup><sup>_k_is the</sup> spatial wave number, and _n_ is the fractal exponent. Spatially correlated 1-D profiles of _𝜏_ 0<sup>∗have values drawn</sup> from a positively skewed Gumbel probability density function (PDF) with mean, _𝜇𝜏_<sup>∗and standard deviation,</sup><sup>_𝜎_</sup> _𝜏_<sup>∗.</sup> Respectively, these parameters capture the level of stress on the fault and the relative amount of roughness in the stress profile. 

INDUCED SEISMICITY—MAGNITUDE FREQUENCY 

DEMPSEY ET AL. 

5 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012551 

**Table 3.** Summary of Nondimensional Quantities Used in the Text<sup>a</sup> 

<!-- Start of picture text -->
x ∗ =  x ∕ L 0 (7)<br>t ∗ = 𝜌 𝜂 g L 𝜅 0 f t (8)<br>Δ P ∗ = fr Δ P (9)<br>𝜏s, 0− 𝜏r, 0<br>𝜏r ∗ = 𝜏𝜏s,r 0−− 𝜏𝜏r,r 0 , 0 = −Δ P ∗ (10)<br>𝜏s ∗ = 𝜏𝜏s,s 0−− 𝜏𝜏r,r 0 , 0 = 1 − f f s r Δ P ∗ (11)<br>𝜏 ∗ = 𝜏s,𝜏 0−− 𝜏𝜏rr, 0 =  𝜏 0 ∗ + f f s r Δ P ∗ (12)<br>Δ P max ∗ = fs − fr fr (13)<br>Cr = Δ P inj ∗ ∕(1 − 𝜇 𝜏 ∗) (14)<br>𝜇𝜏 ∗ =  𝜇 𝜏, ∗ 0 (1 − fs − fr fr Δ P ∗) −Δ P ∗ (15)<br>𝜎𝜏 ∗ =  𝜎 𝜏, ∗ 0 (1 − fs − fr fr Δ P ∗) (16)<br><!-- End of picture text -->

> aSee first paper in this two-part series for derivations. _L_ 0 = length of fault, _𝜌_ = fluid density (10<sup>3</sup> kg m<sup>−3</sup> ), _𝜂_ = fluid viscosity (8.9 × 10<sup>−4</sup> Pa s), _g_ = acceleration of gravity, _𝜅f_ = permeability of fault, _fr_ = residual friction coefficient, _fs_ = static friction coefficient, Δ _P_ = fluid pressure change, _𝜏s,_ 0 = initial static strength, _𝜏s_ = fluid pressure modified static strength, _𝜏r,_ 0 = initial residual strength, _𝜏r_ = fluid pressure modified residual strength, _𝜏_ = shear stress, Δ _P_ max = fluid pressure change at which tensile failure occurs, _𝜇𝜏,_<sup>∗</sup> 0<sup>= value of</sup><sup>_𝜇_</sup> _𝜏_<sup>∗when Δ</sup><sup>_P_∗= 0.</sup> Starred symbols (*) refer to dimensionless quantities. 

Two scenarios of injection and pressure evolution on a fault are simulated in the subsurface flow code FEHM [ _Zyvoloski_ , 2007], which solves for mass conservation in a porous medium subject to Darcy flow, uses rational functions to describe the pressure and temperature dependence of fluid density and viscosity, and assumes constant porosity and permeability. A third scenario prescribes a simple analytic model of pressure evolution. The three scenarios are as follows: 2-D radial flow, as occurs when an injection well intersect a fault; extended 2-D flow, describing wastewater disposal in an aquifer, causing seismicity on a basement fault; and an advancing step function approximating coevolution of a front of permeability enhancement and high pressure. Depending on the scenario, Δ _P_<sup>∗</sup> , is sensitive to fault permeability, _𝜅f_ , injection pressure, Δ _P_ inj<sup>∗,and</sup> location of the injection well. 

For a fault with heterogeneous shear stress, _𝜏_ 0<sup>∗(</sup><sup>_x_∗),</sup> and injection that results in evolving pressure distribution, Δ _P_<sup>∗</sup> ( _x_<sup>∗</sup> _, t_<sup>∗</sup> ), both catalog time, _th_<sup>∗,andearth-</sup> quake hypocenter location, _xh_<sup>∗, are determined by the</sup> Mohr-Coulomb criterion. Rupture length, _L_<sup>∗</sup> , is then estimated by a fracture mechanics approximation of a bilaterally expanding, semiinfinite crack [ _Eshelby_ , 1969] centered at _xh_<sup>∗.Thistreatstheruptureprocessasan</sup> energy balance between regions of positive ( _𝜏_<sup>∗</sup> _>_ 0, energy sources) and negative potential stress drop 

( _𝜏_<sup>∗</sup> _<_ 0, where stress is less than residual strength, acting as an energy sink), and fracture energy. Note, as _𝜏_<sup>∗</sup> includes both shear stress and fluid pressure contributions, the pressure distribution modifies rupture energetics. Comparison of the simplified crack model against fully dynamic rupture simulations on faults with heterogeneous stress indicate that _L_<sup>∗</sup> is overestimated by on average 16% (because interactions between the two propagating tips are neglected) with larger overestimate and underestimate occurring infrequently. 

The three steps for simulating an induced earthquake rupture are then (Figure 2, see part one for additional details) (1) construct a realization of _𝜏_ 0<sup>∗(</sup><sup>_x_∗) for given stress parameters [</sup><sup>_n_,</sup><sup>_𝜎_</sup> _𝜏_<sup>∗,</sup><sup>_𝜇_</sup> _𝜏_<sup>∗]; (2) compute Δ</sup><sup>_P_∗(</sup><sup>_x_∗</sup><sup>_, t_∗) for</sup> a given flow parameters [geometry, _𝜅f_ , Δ _P_ inj<sup>∗] and use the Mohr-Coulomb failure criterion to calculate</sup><sup>_t_</sup> _h_<sup>∗and</sup> _xh_<sup>∗; and (3) estimate</sup><sup>_L_∗using the crack tip equation of motion for prescribed static,</sup><sup>_fs_, and residual friction</sup> coefficients, _fr_ , and fracture energy, Γ<sup>∗</sup> . 

Modeled earthquake catalogs comprise a collection of ruptures modeled on an ensemble of faults, each with a different realization of _𝜏_ 0<sup>∗, constructed from the same stochastic stress model. Pressure evolution, Δ</sup><sup>_P_∗(</sup><sup>_x_∗</sup><sup>_, t_∗)</sup> and friction properties are the same for all faults. This is an average representation of an earthquake sequence and will not capture features or behavior attributable to the specific realization of shear stress heterogeneity on a real-world fault. A stochastic approximation of fault stress evolution is employed to model sustained periods of induced seismicity. The complete catalog is imagined as comprising a collection of subcatalogs, each of which is an ensemble of faults with a nonuniform mean stress that reflects the nonuniform pressure-induced strength drop. The final catalog is a weighted sum of all subcatalogs, with the event weights computed such that the simulated seismicity (total stress drop) is spatiotemporally consistent with the prescribed stress evolution (total strength drop). 

### **3. Magnitude Frequency Properties of Modeled Tectonic Earthquakes** 

As in part one, we first simulate a catalog of earthquakes approximating tectonic seismicity, designated catalog TR0 (Tectonic Reference). For the purposes of this paper, TR0 serves as a benchmark against which to compare modeled magnitude frequency properties of induced seismicity. It also allows us to calibrate the fractal stress model. The loading condition for modeled tectonic events is uniform shear stress increase 

INDUCED SEISMICITY—MAGNITUDE FREQUENCY 

DEMPSEY ET AL. 

6 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012551 

**Figure 2.** Summary of steps for modeling a single induced earthquake: (1) heterogeneous fault stress setup, (2) hypocenter calculation, and (3) rupture calculation. (a) Gumbel stress PDF characterizing the shear stress profile. (b) A particular realization of spatially correlated shear stress, _𝜏_ 0<sup>∗, generated from a fractal</sup><sup>_k_−0</sup><sup>_._25stress model.</sup> (c) Time evolution of pressure rise, Δ _P_<sup>∗</sup> , on the fault for the extended 2-D flow geometry. (d) Earthquake hypocenter calculated by successive reductions of the static strength, _𝜏s_<sup>∗, until Mohr-Coulomb criterion,</sup><sup>_𝜏_</sup> 0<sup>∗=</sup><sup>_𝜏_</sup> _s_<sup>∗, is satisfied</sup> (here _xh_<sup>∗= 0</sup><sup>_._51). (e) Extent of fault rupture,</sup><sup>_L_∗, determined by rupture arrest location of two crack tips expanding</sup> outward from _xh_<sup>∗. Here rupture arrests at</sup><sup>_x_∗= 0</sup><sup>_._32 and 0.64.</sup> 

representing the effects of far-field plate motion. Therefore, if the initial stress is _𝜏_ 0<sup>∗(</sup><sup>_x_∗),thentheaverage</sup> potential stress drop on the fault (the average level of stress) at the time of failure will be 

where Δ _𝜏_ fail<sup>∗is the shear stress increase necessary to trigger an earthquake. As for part one, earthquakes are</sup> simulated for a fault with effective normal stress, _𝜎n_ − _P_ 0 = 40 MPa, _fs_ = 0 _._ 64, and _fr_ = 0 _._ 55. 

INDUCED SEISMICITY—MAGNITUDE FREQUENCY 

DEMPSEY ET AL. 

7 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012551 

#### **3.1. Constructing the Magnitude Frequency Distribution** 

The magnitude of modeled events is estimated by equation (4) using the modeled rupture length, _L_<sup>∗</sup> , and stress drop, Δ _̄𝜏_<sup>∗</sup> . For the purposes of visualization, we set _MW,_ 0 = 4 _._ 5, which is within the range of interest for induced earthquakes, and Δ _̄𝜏_ ref<sup>∗=0</sup><sup>_._1. We require that modeled ruptures span at least five nodes. Thus,</sup> for the 1024 node fault discretization used in this study, the minimum resolvable event magnitude is 1.4 (for Δ _̄𝜏_<sup>∗</sup> = Δ _̄𝜏_ ref<sup>∗). As discussed in part one, discretization affects the resolution of model results, in this case the</sup> range of the magnitude frequency distribution, but not the accuracy. 

We use the bootstrap sampling procedure discussed in Appendix A to construct a representation of the magnitude frequency distribution. The procedure uses random draws from the original catalog to produce a number of subcatalogs, constructs a magnitude frequency distribution, and fits a GR model for each, and then estimates ensemble statistics of the GR model parameters, e.g., _b_ value. This procedure removes a finite fault effect that has the potential to obscure other modifiers to the shape of the magnitude frequency distribution that are the topic of investigation. It also quantifies variability of the magnitude frequency distribution at the large-magnitude limit where the statistics of small numbers dominate (Figure A1b). 

#### **3.2. Effect of Spatial Correlation** 

Spatial correlation in the shear stress profile is parameterized by the fractal exponent, _n_ , which describes the power law dependence of the stress amplitude spectrum in the wave number domain. Increasing _n_ has the effect of strengthening long-range correlations in shear stress by increasing spectral content at low spatial frequencies (Figure 3a). As the likelihood of stress correlation over a large area increases, high stress locations ( _𝜏_<sup>∗</sup> _>_ 0) at which a rupture nucleates will increasingly support growth of the rupture into a larger event because the immediate vicinity will be biased (by virtue of the spatial correlation) toward positive stress drop. Thus, increasing the fractal exponent favors large-magnitude events and introduces convexity in the middle of the magnitude frequency distribution. This convexity is a substantial departure from the log-linear shape of most reported magnitude frequency distributions. To aid in identification of GR scaling in simulated distributions, it is useful to introduce a curvature parameter, _Cv_ , which is an approximate measure of the departure from linearity (Appendix B). We have used _Cv <_ 0 _._ 45 as an approximate criterion for a distribution that is close enough to linear that we may approximate it with a GR model (equation (1)). 

_Huang and Turcotte_ [1988] consider fractal distributions of stress on 2-D faults and obtain GR scaling for _n_ between 2.2 and 2.4. However, their model of the rupture process does not account for stress transfer due to slip and the ability of a propagating rupture to penetrate regions of negative stress drop. These processes favor a larger rupture area and, when they are accounted for, a reduced degree of spatial correlation (smaller _n_ ) is required to reproduce GR scaling. 

Our model produces a log-linear magnitude frequency distribution when _n_ = 0 _._ 25. For comparison, _Smith and Heaton_ [2011] used a fractal stress model to compare synthetic focal mechanisms with a catalog from southern California and obtained a best fit for _n_ of 0.8. Another estimate of _n_ is obtained from the following reasoning: (1) the fractal exponent for coseismic stress drop, _n_ , is related to the fractal exponent of coseismic slip _n_ slip, as _n_ = _n_ slip − 1 [ _Andrews_ , 1980], (2) _Mai and Beroza_ [2002] analyzed 44 fault slip inversions for large earthquakes and obtained a median value for _n_ slip of 1.7, implying (3) that the median value for _n_ is 0.7. This reasoning assumes that the present state of shear stress reflects the cumulative effect of many earthquakes and associated fractal stress drops. 

The discrepancy between observations of _n_ on 2-D faults in the range 0.7 to 1.0 and our use of a value of 0.25 is necessary for a power law distribution of magnitudes to emerge from the model. Clearly, our model does not incorporate the physics that lead to GR scaling for _n_ ∼ 1. One potential deficiency is our use of a constant fracture energy, Γ. Increasingly, there is evidence that Γ scales with the size of rupture [ _Abercrombie and Rice_ , 2005; _Causse et al._ , 2013], which would tend to discourage growth of small rupture into large ones (this is the opposite to what occurs as spatial correlation is increased at higher _n_ ). Another deficiency is the inability of a 1-D fault model to describe inherently 2-D effects, principally the propagation of a rupture around low stress barriers. Finally, recalling that we are investigating GR scaling on 1-D faults, the extent to which observations of _n_ on 2-D faults can be used to constrain a 1-D model is unclear. As GR scaling and deviations from it are the topic of investigation here, we proceed with _n_ = 0 _._ 25. 

#### **3.3. Factors Affecting the** **_b_ Value** 

Equation (4) expresses magnitude in terms of rupture length and stress drop. Observations indicate that stress drop is not strongly magnitude dependent [ _Abercrombie_ , 1995], in which case the power law distribution of 

INDUCED SEISMICITY—MAGNITUDE FREQUENCY 

DEMPSEY ET AL. 

8 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012551 

**Figure 3.** Sensitivity of the tectonic magnitude frequency distribution to parameters of the heterogeneous stress model: (a) Fractal exponent, _n_ , fixing _𝜎𝜏_<sup>∗= 0</sup><sup>_._225 and (b) stress PDF standard deviation,</sup><sup>_𝜎_</sup> _𝜏_<sup>∗, fixing</sup><sup>_n_= 0</sup><sup>_._25. (c) For the curves in</sup> Figure 3b (and other values of _𝜎𝜏_<sup>∗),</sup><sup>_b_value for a fitted GR model is plotted. Computation of</sup><sup>_b_values along with their</sup> errors is described in Appendix A. For catalog TR0 with _n_ = 0 _._ 25 and _𝜎𝜏_<sup>∗= 0</sup><sup>_._225, the</sup><sup>_b_value is 1.15. (d) Cumulative</sup> frequency distribution of rupture length, _L_<sup>∗</sup> , for catalog TR0. (e) For all events in TR0, average (squares) and 5th–95th percentile range of _L_<sup>∗</sup> at different average potential stress drop, _̄ 𝜏_<sup>∗</sup> . (f) For all events in TR0, average (squares) and 5th–95th percentile range of average stress drop, Δ _̄𝜏_<sup>∗</sup> , at different _L_<sup>∗</sup> . 

_MW_ largely reflects an underlying power law distribution of _L_<sup>∗</sup> as seen in Figure 3d. Fitting equation (5) to this curves yields a value _bL_ = 1 _._ 05, which is smaller than the _b_ value ∼1.15 for the corresponding curve in Figures 3a and 3b and equation (5). The difference is attributed to the stress drop term, Δ _̄𝜏_<sup>∗</sup> , in equation (4). Average stress drop shows a weak negative relationship with rupture length (Figure 3f). A similar relationship is observed by _Ampuero et al._ [2006] and they relate this to nucleation of events in regions of high stress. 

Thus, if power law scaling of _MW_ reflects an underlying power law scaling of _L_<sup>∗</sup> , what controls the size of rupture and its distribution across many realizations? Figure 3e shows the range of _L_<sup>∗</sup> obtained for faults at different levels of stress as parameterized by the average potential stress drop, _̄ 𝜏_<sup>∗</sup> (the difference between stress and residual strength). While _̄ 𝜏_<sup>∗</sup> is not a unique predictor for _L_<sup>∗</sup> —the specific spatial correlation of a given realization plays a role as well—at higher values, it tends to produce ruptures that are more difficult to 

INDUCED SEISMICITY—MAGNITUDE FREQUENCY 

DEMPSEY ET AL. 

9 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012551 

**Table 4.** Modeled Earthquake Catalogs Referred to in the Text<sup>a</sup> 

|Catalog Name|Loading Condition|Number Faults|
|---|---|---|
|TR0|Uniform shear stress increase|1×10<sup>5</sup>|
|UPR|Uniform pressure increase|1×10<sup>5</sup>|
|UPR-E|UPR with stress evolution|4×10<sup>5</sup>|
|H1|Advancing step function|4×10<sup>5</sup>|
|2DF|2-D flow geometry|4×10<sup>5</sup>|
|E2D|Extended 2-D flow|4×10<sup>5</sup>|
|GGS1|Wells 1 and 5 injection|1.5×10<sup>~~5~~</sup>|
|GGS1-1|Only Well 1 injection|1.5×10<sup>5</sup>|
|GGS1-5|Only Well 5 injection|1.5×10<sup>5</sup>|
|GGS2|10% Wells 1 and 5 injection|1.5×10<sup>5</sup>|
|GGS2-1|Only 10% Well 1 injection|1.5×10<sup>5</sup>|
|GGS2-5|OnlyWell 5 injection|1.5×10<sup>5</sup>|

aTR0 = Tectonic Reference, UPR = Uniform Pressure Rise, UPR-E = Uniform Pressure Rise-Extended, 2DF = 2-D fault, E2D = extended 2-D flow, GGS _i_ = Guy-Greenbrier scenario _i_ , GGS _i_ - _j_ = Guy-Greenbrier scenario _i_ with only Well _j_ injecting. 

arrest and thus tend to grow larger. At high enough values, the rupture is energetic enough that its dimension becomes unbounded and its upper limit is that of the fault, _L_ 0 [e.g., _Ben-Zion et al._ , 2003; _Ampuero et al._ , 2006]. 

Thus, a distribution of _L_<sup>∗</sup> (Figure 3d) arises due to a distribution of faults with different stress levels, _̄ 𝜏_<sup>∗</sup> , which in turn is related to the amount of tectonic loading, Δ _𝜏_ fail<sup>∗,thatprecedesearthquakenucleation.In</sup> our model, initial stress on a fault, _𝜏_ 0<sup>∗(</sup><sup>_x_∗), is assigned through random draws from the stress PDF and thus</sup> Δ _𝜏_ fail<sup>∗=</sup><sup>_𝜏_</sup> _s_<sup>∗−max(</sup><sup>_𝜏_</sup> 0<sup>∗(</sup><sup>_x_∗)) is also a random variable. The shape of the distributions of Δ</sup><sup>_𝜏_</sup> fail<sup>∗,</sup><sup>_̄ 𝜏_∗, and, ultimately,</sup><sup>_L_∗</sup> and _MW_ , is then determined by the shape of the stress PDF, as parameterized by _𝜎𝜏_<sup>∗. For a magnitude frequency</sup> distribution with _n_ = 0 _._ 25, the _b_ value decreases with decreasing _𝜎𝜏_<sup>∗(Figures 3b and 3c) and eventually tran-</sup> sitions to a characteristic earthquake distribution ( _L_<sup>∗</sup> =1 for all events). This replicates a result of _Ampuero et al._ [2006], who also used a 1-D fracture mechanics model of faults with heterogeneous stress, and who observed a transition from GR to characteristic earthquake behavior across a similar range of _𝜎𝜏_<sup>∗.</sup><sup>_Ripperger et al._[2007]</sup> confirmed a similar transition in 2-D dynamic rupture simulations for _𝜎𝜏_<sup>∗in the range 0.1 to 0.4.</sup> 

Because of the way in which tectonic loading is approximated, the magnitude frequency properties of catalog TR0 are mostly insensitive to _𝜇𝜏_<sup>∗, which is here set to −0.54. Setting a different value changes the size</sup> of Δ _𝜏_<sup>∗</sup> fail<sup>butpreservesthestressatfailure,</sup><sup>_𝜏_0+Δ</sup><sup>_𝜏_</sup> fail<sup>∗,andhencetheGRscaling.Anexceptioniswhen</sup><sup>_𝜇_</sup> _𝜏_<sup>∗</sup> approaches 1, in which case the effects of distribution truncation become significant and the magnitude frequency distribution departs from linearity. 

#### **3.4. A Stress Model for Tectonic Earthquakes on 1-D Faults** 

In the remainder of this paper, we assume that tectonic 1-D faults are characterized by a stress model with _n_ = 0 _._ 25 and _𝜎𝜏_<sup>∗= 0</sup><sup>_._225. This produces a power law distribution of</sup><sup>_MW_and</sup><sup>_L_∗, which we assume is a feature</sup> of earthquake distributions on 1-D faults. The distribution of _MW_ is characterized by a _b_ value denoted _b_ TR0. The selection of _𝜎𝜏_<sup>∗=0</sup><sup>_._225 results in</sup><sup>_b_TR0=1</sup><sup>_._15, although the extent to which</sup><sup>_b_value observations on 2-D</sup> faults should be used to constrain that a 1-D model is unclear. Nevertheless, we shall assume that deviations away from _b_ TR0 in modeled 1-D induced earthquake catalogs are reflective of physical processes that may also operate on 2-D faults. 

Physically, this model for heterogeneous stress represents the average conditions on a fault across all stages of the seismic cycle. It is used in the construction of catalog TR0, which comprises an ensemble of 10<sup>5</sup> faults. This and other simulated catalogs referred to in the text are summarized in Table 4. 

### **4. Magnitude Frequency Properties of Modeled Induced Earthquakes** 

In this section, we model catalogs of induced earthquakes and investigate the evolution of their spatiotemporal and magnitude frequency distributions. The individual faults in each ensemble have the same friction parameters as catalog TR0. The initial stress on these faults is constructed using the same stress model as 

INDUCED SEISMICITY—MAGNITUDE FREQUENCY 

DEMPSEY ET AL. 

10 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012551 

**Figure 4.** Magnitude frequency comparison between catalogs TR0 (red) and UPR (blue). (a) Magnitude frequency distribution. (b) Cumulative distribution of rupture lengths, _L_<sup>∗</sup> . (c) Histogram distribution of average stress drop, Δ _̄𝜏_<sup>∗</sup> , in each catalog. (d) Average potential stress drop for comparable earthquakes in TR0, _̄ 𝜏_ TR0<sup>∗, and UPR,</sup><sup>_̄ 𝜏_</sup> UPR<sup>∗.</sup> Ruptures from two different catalogs are comparable if (i) they have the same initial stress profile, _𝜏_ 0<sup>∗(</sup><sup>_x_∗), and</sup> (ii) the same hypocenter location, _xh_<sup>∗.</sup> 

catalog TR0, i.e., _n_ = 0 _._ 25 and _𝜎𝜏_<sup>∗= 0</sup><sup>_._225. For these</sup> faults, earthquakes are triggered by static strength reduction due to pressure rise on the fault. 

#### **4.1. Uniform Pressure Rise** 

We first consider a simple case of injection in which fluid pressure is constant across a fault and rises at a constant rate over time. In this hypothetical scenario, there are no pressure gradients, which we expect to exist in a realistic injection scenario. Nevertheless, this example illustrates several important concepts relevant to cases of more complex pressure loading. Catalog UPR (Uniform Pressure Rise) comprises 10<sup>5</sup> faults, uses identical stress realizations to TR0, and, because pressure loading is constant on the fault just as stress loading was constant for TR0, the modeled earthquake hypocenters are in the same locations. Therefore, in comparing UPR and TR0, the single point of difference is _𝜏_<sup>∗</sup> at the time of rupture, which for UPR is (from Table 3, equation (12)) 

where Δ _P_ fail<sup>∗is the pressure change causing failure.</sup> Note, for UPR, it is the pressure component of _𝜏_<sup>∗</sup> that changes, in contrast to the stress component that is modified for TR0 ruptures. 

Figures 4a and 4b compare the magnitude frequency distribution and underlying rupture length, _L_<sup>∗</sup> , distributions for catalogs UPR and TR0. A shift to smaller magnitudes (increased _b_ value) is evident and this appears to be related to a similar shift in _L_<sup>∗</sup> . The decreased magnitudes in Figure 4a cannot be accounted for by smaller stress drops (Figure 4c, in fact there is a slight shift to higher stress drops for UPR associated with the distribution shift to smaller _L_<sup>∗</sup> , cf. Figure 3f). The _b_ value computed for UPR is 1.53, higher than _b_ TR0. 

In this case, it is the shift to smaller _L_<sup>∗</sup> that is responsible for the _b_ value increase. Comparing equations (17) and (18), we see that the potential stress drop, _̄ 𝜏_<sup>∗</sup> , is smaller for an event in UPR than for the same event in TR0 (see also Figure 4d). Effectively, stress on the fault is lower and, as a less energetic fault produces smaller ruptures (Figure 3e), there is a corresponding decrease in _L_<sup>∗</sup> . In turn, the discrepancy in _̄ 𝜏_<sup>∗</sup> between TR0 and UPR can be traced back to the different rates at which static, _𝜏s_<sup>∗, and residual strength,</sup><sup>_𝜏_</sup> _r_<sup>∗, drop as pressure</sup> is increasing. 

So a _b_ value increase is modeled for events triggered by uniform pressure rise on 1-D faults: is this 

INDUCED SEISMICITY—MAGNITUDE FREQUENCY 

DEMPSEY ET AL. 

11 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012551 

**Figure 5.** Summary of UPR and UPR-E catalogs. (a) Seismicity (black) and moment release (blue) per unit pressure rise for catalog UPR. The moment release profile oscillates at high Δ _P_<sup>∗</sup> because events are large but infrequent. Because pressure rises at a constant rate in this scenario, we use Δ _P_<sup>∗</sup> as a proxy for time, _t_<sup>∗</sup> . (b) Seismicity and moment release per unit pressure rise for catalog UPR-E. The theoretical maximum pressure, Δ _P_ max<sup>∗, where pressure exceeds normal stress, is indicated by a</sup> dotted line. (c) Magnitude frequency distributions for events in each of the five bins in Figure 5b. The evolving _b_ value with error estimate is shown in the inset. (d) Rupture length distribution for the same bins as Figure 5c. Evolving _bL_ , computed by equation (5), with error estimate is shown in the inset. 

result likely to apply for ruptures on 2-D faults? The underlying mechanism is a reduction in the potential stress drop at the time that earthquakes are triggered, and this in turn reflects the different rates at which _𝜏s_<sup>∗and</sup><sup>_𝜏_</sup> _r_<sup>∗are decreasing.</sup> This mechanism is independent of the dimensionality of the problem and so might reasonably be expected to occur for 2-D fault ruptures. **4.1.1. Temporal Variation of the Magnitude Frequency Distribution** 

For catalog UPR, Δ _P_<sup>∗</sup> increases at a constant rate and is therefore a proxy for time. Thus, in Figure 5a seismicity and moment release “rates” are defined and plotted with respect to Δ _P_<sup>∗</sup> . The seismicity rate attains a maximum early on and then declines with time (i.e., Δ _P_ fail<sup>∗),</sup> which reflects a decreasing likelihood that a given stress realization is initialized satisfying max( _𝜏_ 0( _x_<sup>∗</sup> )) _<𝜏s_<sup>∗−</sup><sup>_fs_∕</sup><sup>_fr_Δ</sup><sup>_P_</sup> fail<sup>∗(a randomly distribu-</sup> ted variable, see equation (18)). The moment release rate also decreases with time, although less rapidly than the seismicity rate. The diminished event rate is offset partly by relatively more energetic events as _̄ 𝜏_<sup>∗</sup> increases (promoting larger _L_<sup>∗</sup> ; see Figure 3e). 

In practice, we do not expect the seismicity rate to drop to zero with continuing pressure increase. Rather, we expect the rate of earthquakes to be steady or increase as sections of the fault that had previously ruptured fail once again with ongoing strength reduction. A limitation of our model is that it does not deterministically model stress redistribution associated with rupture; hence, we only consider one earthquake per fault realization. However, we can use an ensemble approach to approximate the evolving fault stress and therefore consider ongoing seismicity. 

Catalog UPR comprises an ensemble of faults with initial stress, _𝜏_ 0<sup>∗,constructedfromastress</sup> model that fixes _n_ , _𝜎𝜏_<sup>∗, and</sup><sup>_𝜇_</sup> _𝜏_<sup>∗. The extended cat-</sup> alog UPR-E, comprises a weighted ensemble of subcatalogs, each itself made up from an ensemble of faults. Each subcatalog comprises faults with realizations of _𝜏_ 0<sup>∗(</sup><sup>_x_∗)drawnfromastress</sup> model with different _𝜇𝜏_<sup>∗and</sup><sup>_𝜎_</sup> _𝜏_<sup>∗thataremono-</sup> tonic linearly decreasing functions of Δ _P_<sup>∗</sup> (see Table 3, equations (15) and (16)). The smaller value for _𝜇𝜏_<sup>∗meansthatfaultrealizationsfor</sup> that catalog have lower average stress; physically, this represents the state of the fault at later time when it is assumed that prior seismicity has reduced shear stress. Pressure evolution, Δ _P_<sup>∗</sup> , is the same for all faults and all subcatalogs. To 

INDUCED SEISMICITY—MAGNITUDE FREQUENCY 

DEMPSEY ET AL. 

12 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012551 

**Figure 6.** Evolving average stress drop for UPR-E catalog. The marker indicates the mean value and the bar indicates the interval enclosing 5 to 95% of values. 

construct UPR-E, we compute weights for the individual events such that the sum of the stress drops, Δ _̄𝜏_<sup>∗</sup> , of all events in a spatiotemporal increment matches the prescribed stress change on the fault in the same increment. Catalog UPR-E comprises 200 subcatalogs, which each contain 5000 fault realizations, and we now consider uniform pressure rise approaching the limit of tensile failure, i.e., Δ _P_<sup>∗</sup> → Δ _P_ max<sup>∗.</sup> 

Evolution of seismicity in UPR-E is divided into two phases. In the first phase, for Δ _P_<sup>∗</sup> _<_ 0.5, we observe quasi-constant seismicity rate, increasing moment release rate (Figure 5b), and decreasing _b_ values from 1.8 to 1.2 (Figure 5c, inset). Physically, this represents the triggering of earthquakes on a fault in a subcritical failure state. Initially, potential stress drop, _𝜏_<sup>∗</sup> , is small (Figure 5d) because Δ _P_<sup>∗</sup> is low; thus, ruptures are small and _b_ 

value is high. Over time, _𝜏_<sup>∗</sup> and moment release rate increase—events become more energetic—and as a result the _b_ value declines. This is analogous to _b_ value decrease on a fault as it nears the end of its seismic cycle [ _Smith_ , 1981]. Indeed, the magnitude frequency curves in Figure 5c replicate a similar evolution in the models of _Ben-Zion et al._ [2003] (cf. their Figure 7a) who analyzed how earthquake distributions evolved in the lead up to a system-wide rupture. 

In the second phase, moment release rate and the rupture length, _L_<sup>∗</sup> , distribution (as parameterized by _bL_ , see equation (5) and Figure 5d, inset) are quasi-constant. Fault stress declines with increasing Δ _P_<sup>∗</sup> and as a result the average stress drop, Δ _̄𝜏_<sup>∗</sup> , gets smaller (Figure 6). The effect is minor, but there is a small increase in the _b_ value when magnitudes are computed with the Δ _̄𝜏_<sup>∗</sup> term. Correspondence between a high _b_ value and low stress drop was suggested by _Goertz-Allmannetal._ [2011] in analyzing earthquakes triggered by high-pressure injection at the Basel EGS site. They showed relatively smaller Δ _̄𝜏_<sup>∗</sup> nearer to the injection well where pressure is higher. Once again, this mechanism for an increase in _b_ value is linked to changes in stress on the fault and thus likely independent of the problem dimensionality (1-D versus 2-D faults). The seismicity rate increases during the second phase in compensation of the reduced stress drop per event (recall, our model of stress evolution requires that cumulative stress drop of all events keeps pace with total stress decline on the fault). 

#### **4.2. Nonuniform Pressure Rise** 

Having considered a hypothetical scenario of uniform pressure increase, we now consider more complex plume shapes produced under a variety of injection conditions. The catalogs simulated here inherit the statistical stress model ( _n_ = 0 _._ 25, _𝜎𝜏_<sup>∗= 0</sup><sup>_._225) and friction parameterization of catalogs TR0, UPR, and UPR-E. The</sup> parameters specifying a particular pressure-loading condition are flow scenario (2-D, extended 2-D, advancing front), fault permeability, and injection pressure. The shear stress level on the fault, parameterized by _𝜇𝜏_<sup>∗</sup> in the stress PDF, is also varied. As in part one, we use the nondimensional ratio between injection pressure and fault criticality, _Cr_ = Δ _P_ inj<sup>∗∕(1 −</sup><sup>_𝜇_</sup> _𝜏_<sup>∗), to illustrate the range of seismicity behavior. This measure quantifies</sup> the relative size of changes in fault strength due to overpressure against natural variation in heterogeneous fault stress. 

Spatiotemporal evolution of fault strength, _𝜏s_<sup>∗and</sup><sup>_𝜏_</sup> _r_<sup>∗,iscaptureddirectlythroughtheirdependenceon</sup> Δ _P_<sup>∗</sup> ( _x_<sup>∗</sup> _, t_<sup>∗</sup> ). However, as shown in the previous section, spatiotemporal evolution of fault stress is also important to consider, particularly for long periods of injection. Evolving fault stress is captured in the same manner as for catalog UPR-E, i.e., by considering an ensemble of subcatalogs with different values for _𝜇𝜏_<sup>∗. The differ-</sup> ence is that, since Δ _P_<sup>∗</sup> is spatially variable in these scenarios, for a given subcatalog, so too must _𝜇𝜏_<sup>∗. Essentially,</sup> we assume that induced earthquakes reduce stress on a fault and that, at any given time, the average stress reduction is reflective of the pressure plume triggering those earthquakes. Again, in this ensemble sense, we 

INDUCED SEISMICITY—MAGNITUDE FREQUENCY 

DEMPSEY ET AL. 

13 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012551 

do not explicitly represent stress signatures from prior events (stress drop inside a rupture and increase at the tips) as these are assumed to be captured, in an average sense, by the heterogeneous stress model. **4.2.1. Injection Onto a Fault** 

We contrast two scenarios of on-fault injection. In the first, pressure evolution is a prescribed Heaviside step function that advances away from the well according to a diffusion-like relationship, i.e., _rf_<sup>∗=</sup> √ _t_<sup>∗</sup> , where _rf_<sup>∗isthedistancebetweenthefrontandtheinjectionwell.Thisscenarioapproximatestheeffectsofseis-</sup> micity coadvancing with a front of high permeability resulting from the induced shear slip [ _McClure and Horne_ , 2011; _Gischig and Wiemer_ , 2013; _Dempsey et al._ , 2015]. The catalog of seismicity associated with this scenario is denoted H1 (with Δ _P_ inj<sup>∗= 0</sup><sup>_._74,</sup><sup>_𝜇_</sup> _𝜏_<sup>∗= −0</sup><sup>_._54) and its features are illustrated in Figure 7 (left column).</sup> In the second scenario, permeability is assumed constant and pressure evolves according to fixed-pressure injection in a 2-D geometry with constant pressure boundaries. The catalog of seismicity simulated for this scenario is denoted 2DF, it has the same Δ _P_ inj<sup>∗and</sup><sup>_𝜇_</sup> _𝜏_<sup>∗, and is summarized in Figure 7 (right column).</sup> 

In both H1 and 2DF scenarios, the amount of seismicity along the fault (quantified as the density of simulated hypocenters)follows approximately the spatial distribution of pressure buildup (Figures 7a and 7b). This is a built-in feature of the model that arises from the definition of catalog event weights (see first paper for a discussion of catalog weighting). In the case of H1, the seismicity concentrates exclusively at the advancing front. For 2DF, the amount of seismicity decreases with distance from the well in accordance with a decaying pressure profile, and occurs farther from the well over time (as in H1). However, in 2DF, because pressure on the fault rises over time, so too are earthquakes continuously triggered across the fault (as opposed to a concentrated front region for H1). 

The rate of earthquakes also differs between the two scenarios. For H1, the simulated seismicity rate, _̇ N_<sup>∗</sup> , declines as 1∕ ~~√~~ _t_<sup>∗</sup> (Figure 7c) in accordance with the rate of the advancing front. However, this is for a 1-D fault. An approximation of _̇ N_<sup>∗</sup> for a 2-D fault is obtained by applying a linearly increasing weight to events with hypocenters further from the well—this represents summing seismicity over concentric circles of increasingly larger area. Constructed this way, _̇ N_<sup>∗</sup> is constant with time, i.e., even though the advancing front slows with time, it carves out a larger area of the fault, and the two balance for a constant rate. For 2DF, the 1-D and 2-D seismicity rates increase slowly over time as earthquakes are triggered across a larger zone. For _t_<sup>∗</sup> _>_ 2 × 10<sup>−4</sup> , seismicity rate declines; this reflects stabilization of pressure in the model due to equilibration with the pressure boundary condition and may not accurately reflect real cases of induced seismicity. 

The magnitude frequency distribution for both scenarios (Figures 7e and 7f) shows a departure from the linearity seen previously. In the case of H1, the distribution is not consistent with past cases of induced seismicity and may derive its unconventional shape from the approximation of Δ _P_<sup>∗</sup> as a step function. The distribution for 2DF is more linear, with a _b_ value of ∼2. There is also a deficit of large-magnitude events, which is a feature of some cases of induced seismicity [e.g., _Dorbath et al._ , 2009; _Huang and Beroza_ , 2015] and has been attributed to the finite dimension of a pressure plume [ _Shapiro et al._ , 2011]. Clearly, for the 2DF scenario, the pressure plume has a finite dimension and we can test directly whether this is responsible for the convexity in Figure 7f. To do this, we perform all rupture calculations again, this time under conditions of constant pressure increase (hypocenter locations are preserved). The magnitude frequency distribution for the resulting events is shown as a dashed line in Figure 7f and closely resembles a GR model with _b_ ∼ 1. For scenario 2DF then, we conclude that a finite plume dimension introduces convexity in the magnitude frequency distribution. 

The presence of a plume shape effect on convexity of the magnitude frequency distribution was investigated for a range of injection pressures, Δ _P_ inj<sup>∗and fault failure proximity, as parameterized by</sup><sup>_𝜇_</sup> _𝜏_<sup>∗(Figure 8a). The</sup> relative effect of these two parameters on fault stability is captured by the criticality/pressurization ration, _Cr_ (seeTable 3,equation(12)).Theamountofintroducedconvexity, Δ _M_ max, isquantifiedasthe difference between largest magnitude events for a simulated catalog and the equivalent catalog with the shape effect removed. A bootstrap sampling algorithm is used to estimate an interval for Δ _M_ max, similar to that used to estimate a GR _b_ value (Appendix A). For the 2-D flow geometry, we tend to see a stronger plume shape effect for high _Cr_ . Physically, this corresponds to greater control on the dimension of rupture by the pressure component, Δ _P_<sup>∗</sup> , of potential stress drop, _𝜏_<sup>∗</sup> (compared with the stress component, _𝜏_ 0<sup>∗, see Table 3, equation (12)). Such high</sup> values for _Cr_ are more likely to occur during well stimulations, such as during creation of an EGS or hydraulic fracturing, and it is notable that observations of convexity in the magnitude frequency distribution have been associated with these types of injection [e.g., _Dorbath et al._ , 2009; _Friberg et al._ , 2014]. Convexity due to the plume shape effect also occurs in simulations with the advancing front (Figure 7e), although the magnitude 

INDUCED SEISMICITY—MAGNITUDE FREQUENCY 

DEMPSEY ET AL. 

14 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012551 

**Figure 7.** Summary and comparison of scenarios (left column) H1 and (right column) 2DF. (a, b) Density of simulated earthquake hypocenters at three different times during injection. For comparison, the shape of the pressure distribution at each of the three times is indicated by the corresponding colored dashed line. (c, d) Modeled seismicity rate, _̇ N_<sup>∗</sup> , versus time (solid line) and the equivalent seismicity rate for a 2-D flow system (dashed; linear increase of event weighting for hypocenters further from the well). This weighting scheme introduces minor numerical artifacts at early time when weights are small and there are not many simulated events—these appear as fluctuations in the profile. (e,f) Magnitude frequency distributions for events simulated with (solid line) and without (dashed) pressure plume shape effects. The pressure plume shape effect is approximately removed by replacing nonuniform Δ _P_ ( _x_<sup>∗</sup> _, th_<sup>∗) with</sup> constant Δ _P_ ( _xh_<sup>∗</sup><sup>_, t_</sup> _h_<sup>∗) in the definition of</sup><sup>_𝜏_∗in the calculation of rupture length (see Table 3, equation (7)). The change in</sup> maximum earthquake magnitude, Δ _M_ max, is indicated. 

INDUCED SEISMICITY—MAGNITUDE FREQUENCY 

DEMPSEY ET AL. 

15 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012551 

**Figure 8.** (a) Δ _M_ max due to plume shape effect (see Figure 7f for definition) across a range of injection pressures, Δ _P_ inj<sup>∗</sup> and initial fault stress, _𝜇𝜏_<sup>∗. The pressurization/criticality ratio</sup> is defined as _Cr_ = Δ _P_ inj<sup>∗∕(1 −</sup><sup>_𝜇_</sup> _𝜏_<sup>∗). Marker and vertical bar</sup> indicate the mean and interval containing 90% of Δ _M_ max values for 1000 bootstrap samples of the simulated catalog. Simulations are for 2-D flow geometry with open boundary conditions. (b) Simulated _b_ values obtained from fitting a GR model for a range of Δ _P_ inj<sup>∗and</sup><sup>_𝜇_</sup> _𝜏_<sup>∗. Simulations are for 2-D</sup> flow geometry. Only simulations in which the mean curvature of the magnitude frequency distribution, _Cv_ , is less than 0.4 are shown. (c) As for Figure 8b but for simulations of the extended 2-D flow geometry. In all subplots, symbol color denotes the value of _𝜇𝜏_<sup>∗, open and closed symbols</sup> indicate simulations with open and closed boundary conditions, respectively, and symbol type indicates injection well position for the extended 2-D flow geometry. 

frequency distributions depart quite strongly in shape from linear and nonlinear GR models. Convexity is not observed in simulations that employ a closed boundary condition. This is because early events that exhibit the shape effect are masked by the later-time events, which do not (because pressure buildup is quite uniform). This situation could possibly arise for reactivated faults inside a closed reservoir. Nor do we observe convexity for the extended 2-D flow geometry, which approximates a wastewater injection scenario, although there are indications that such effects can be present in these sequences as well [ _Huang and Beroza_ , 2015]. 

Sensitivity of the GR _b_ value is also of interest. Figure 8b plots _b_ value for injection in a 2-D flow geometry and for a range of Δ _P_<sup>∗</sup> , _𝜇𝜏_<sup>∗andmod-</sup> els with both open and closed boundaries. The _b_ value is computed for the entire catalog and therefore averages over any variability in space or time. As some of the magnitude frequency distributions modeled here depart quite strongly from linearity, only _b_ values for distributions reasonably approximated byaGRmodel areshown (see AppendixBfor quantification of linearity). To first order, simulated _b_ values reflect the average fault shear stress as parameterizedby _𝜇𝜏_<sup>∗.Thisdirectlyeffectsthepoten-</sup> tial stress drop, _𝜏_<sup>∗</sup> ,which describesthe energy available for rupture and therefore provides a strong control on _L_<sup>∗</sup> (Figure 3). This feature of the model is consistent with microfracture experiments [ _Scholz_ , 1968]andtectonicobservations[ _Schorlemmeretal._ , 2005] that infer a similar relationship between _b_ value and level of shear stress. In our study, the relationship emerges from an energy-based description of the rupture process coupled to a model of fault stress heterogeneity. 

The sensitivity of _b_ value to shear stress has an interesting implication for situations in which injection reactivates multiple faults. Assuming that the regional stress field is approximately constant, faults of different orientation will have resolved on them different levels of shear stress. According to Figure 8b, the _b_ value for seismicity specific to a fault would increase with increasing misorientation of the structure in the prevailing stress field. **4.2.2. Injection Away From A Fault** 

We now consider induced seismicity in an extended 2-D flow geometry, which approximates injection into a horizontal aquifer triggering earthquakes on a connected basement fault. This geometry is distinct from other configurations in that injection doesnotoccurdirectlyontothefault.Thus,thefault is shielded from the highest pressures and steepest pressure gradients, which occur in the aquifer. For 

INDUCED SEISMICITY—MAGNITUDE FREQUENCY 

DEMPSEY ET AL. 

16 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012551 

**Figure 9.** Summary of scenario E2D, injection in extended 2-D flow geometry with well in the off-fault position. (a) Density of simulated earthquake hypocenters at three different times during injection. For comparison, the shape of the pressure distribution at each of the three times is indicated by the corresponding colored dashed line. (b) Modeled seismicity rate, _N_<sup>∗</sup> , versus time. Numerical artifacts at early time are due to the small number of catalog events. Dashed and dash-dotted profiles indicate the seismicity rate for end-of-fault and midfault injection well positions. (c) Magnitude frequency distributions for catalog E2D and comparison with alternative injection well positions. Inset shows the locations of the three well positions relative to the fault. 

these simulations, aquifer permeability is set to 10<sup>−14</sup> m<sup>2</sup> and porosity to 0.1, typical of wastewater disposal formations. Fault permeability is set to 10<sup>−14</sup> m<sup>2</sup> . Catalog E2D is simulated for injection in the off-fault position, although results for other positions are shown in Figure 9. Pressure rise at a depth _L_ 0∕4 in the basement is used in computing triggered seismicity. For the reference scales used here ( _L_ 0 = 4 km and _MW,_ 0 = 4 _._ 5), this would correspond to a depth of 1 km below the aquifer-basement contact. 

Figure 9a shows that, as for H1 and 2DF, the spatial distribution of seismicity follows contours of pressure buildup. The modeled seismicity rate increases approximately quadratically with time for a period but eventually reaches a maximum and starts to decline as pressure in the system comes to equilibrium (Figure 9b). Simulated events are characterized by a magnitude frequency distribution with GR _b_ value higher than the simulated tectonic value. The increase in _b_ value is caused by the different rates of reduction of static and residual strength when effective normal stress is lowered, as discussed in section 4.1. Both the modeled seismicity rate and magnitude frequency distribution are similar for the three injection well positions. As for the 2-D flow geometry, catalog _b_ values show a strong dependence on initial shear stress (Figure 9c). 

It is worth noting that several cases of induced seismicity associated with wastewater injection suggest a reduction of _b_ value below the tectonic average during the injection phase [ _Lei et al._ , 2008, 2013; _Huang and Beroza_ , 2015; _Goebel et al._ , 2016]. This behavior is not accounted for within our model and it is not clear whether this is due to parameter selection or shortcomings in either the stochastic approach or 2-D approximation. 

### **5. Model Application to the Guy-Greenbrier Sequence (2010–2011)** 

In this final section, we discuss an application of our model to a sequence of earthquakes in Arkansas in 2010–2011 that were likely to have been triggered by wastewater disposal at two nearby injection wells. The Guy-Greenbrier sequence, named for the two towns between which the earthquakes occurred, is described in _Horton_ [2012] and much of the discussion of the 

INDUCED SEISMICITY—MAGNITUDE FREQUENCY 

DEMPSEY ET AL. 

17 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012551 

**Figure 10.** ANSS catalog locations and times in the context of the nearby towns of Guy and Greenbrier. The locations of two injection wells, referred to as Well 1 and Well 5 in _Horton_ [2012] and a single broadband seismic station, WHAR, used to determine event magnitudes in _Huang and Beroza_ [2015] are also shown. 

seismicity and hydrological system is summarized from that study. In constraining the model, we make use of two earthquake catalogs reported in _Huang and Beroza_ [2015], as well as monthly injection rates for two disposal wells in the area (designated 1 and 5 after _Horton_ [2012]). 

Formappingthespatiotemporalevolutionof seismicity in the Guy-Greenbrier area we use locations from the ANSS (Advanced National Seismic System) catalog, which registered 1317 earthquakes in the Guy-Greenbrier area between July 2010 and October 2011, the time period covered by the model. These events define a linear structure—the Guy-Greenbrier Fault—striking ∼N30<sup>∘</sup> E [ _Horton_ , 2012] and therefore well oriented for strike-slip failure with respect to the stress field of the U.S. midcontinent [ _Zoback_ 

_and Zoback_ , 1991]. Seismicity tended to migrate in a southwest direction along the Guy-Greenbrier Fault (Figure 10), away from the largest volume injector, Well 1 (Figure 11a). A single permanent broadband station of the Arkansas seismic network, WHAR, is located near the Guy-Greenbrier Fault (Figure 10). _Huang and Beroza_ [2015] applied a template matching technique to continuous records from this station and detected an average of 160 earthquakes per hour when the sequence was at its most productive (during the same period, the ANSS catalog registered approximately seven earthquakes per day). They used an Akaike information criterion to show that the evolving magnitude frequency distribution of the WHAR catalog exhibited a nonlinear GR distribution during injection, characterized by low _b_ values (∼0.8) and convexity at the large-magnitude end. The magnitude frequency distribution returned to a GR model with _b_ =1 once injection was halted. 

Two wastewater injection wells are thought to be responsible for triggering the Guy-Greenbrier earthquakes. Well 1 started operating at the beginning of July 2010 and injected a total volume of 3.9 × 10<sup>5</sup> m<sup>3</sup> , while Well 5 started in mid-August 2010 and injected 0.7 × 10<sup>5</sup> m<sup>3</sup> . Injection at both wells was halted following an _M_ 4.7 earthquake on 27 February 2011 [ _Horton_ , 2012]. Both wells inject into the Ozark Aquifer, a ∼1 km thick geohydrologic unit that is dominantly dolostone (low intrinsic porosity, ∼4–6%), with some limestone and sandstone formations [ _Horton_ , 2012]. Well 5 injects deeper in the Ozark and has a larger open-hole interval, whereas Well 1 injects over a 30 m interval at the top of the Ozark [ _Horton_ , 2012] as well as into the overlying Springfield Aquifer. 

We construct a reservoir model of injection at Wells 1 and 5 for the time period July 2010 to October 2011 and use the modeled pressure buildup on the Guy-Greenbrier Fault to construct a model of the seismicity. Because the model is a stochastic representation of the earthquake sequence, our goal is to capture only its average features. In particular, we focus on (i) the onset time of seismicity on the fault, (ii) the migration rate of seismicity along the fault, and (iii) the decay in seismicity after injection was halted. 

#### **5.1. Model Setup and Calibration** 

Pressure evolution in the Guy-Greenbrier system is computed using a variation of the extended 2-D flow geometry with key parameters summarized in Table 5. Aquifer thickness is set to 1 km and assigned a homogeneous porosity (4%) [ _Horton_ , 2012] and permeability. Well 5 penetrates the full vertical extent of the aquifer whereas Well 1 only penetrates the top 30 m and also injects into an overlying formation. The flow simulator FEHM is once more used to perform mass balance calculations under the assumption of isothermal flow. A reference temperature of 30<sup>∘</sup> C is used to calculate viscosity and density. Both porosity and permeability are assumed constant. Grid blocks have lateral dimensions of 250 × 250 m in the vicinity of the injection wells and fault, and are larger nearer the closed flow model boundaries (5 km from the fault well configuration). The basement is vertically discretized using 500 m thick layers, while the aquifer is divided into a 30 m thick top layer and 970 m thick bottom layer. Improved representation of vertical flows in the aquifer would be 

INDUCED SEISMICITY—MAGNITUDE FREQUENCY 

DEMPSEY ET AL. 

18 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012551 

**Figure 11.** Observed and modeled evolution of injection, seismicity, and magnitude frequency distributions at Guy-Greenbrier for two scenarios (left = GGS1, right = GGS2). (a, b) Modeled monthly injection rates at Wells 1 (green) and 5 (orange). The red dashed line indicates the date at which injection was halted. (c, d) Modeled wellhead pressure at Wells 1 and 5 in response to the injection [Peaceman calculation _Peaceman_ , 1983]. Square symbols indicate maximum reported wellhead pressure for that month. (e, f) Observed (purple) and modeled seismicity rate (black). (g, h) Observed (symbols) and modeled magnitude frequency distributions for 50 day bins from the beginning of injection (day 0) and (i, j) for 50 day bins from the end of injection (day 238). 

INDUCED SEISMICITY—MAGNITUDE FREQUENCY 

DEMPSEY ET AL. 

19 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012551 

**Table 5.** Parameters Used in Guy-Greenbrier Reservoir Model 

|Parameter|Value|
|---|---|
|Aquifer thickness|1 km|
|Fault width|10 m|
|Fault length|11 km|
|Fault height|4 km|
|~~Reference temperature~~|~~30~~<sup>~~∘~~</sup>~~C~~|
|Fluid density|1.0×10<sup>3 </sup>kg m<sup>−3</sup>|
|Fluid viscosity|8.0×10<sup>−4 </sup>Pa s|
|Aquifer permeability|1.0×10<sup>−13 </sup>m<sup>2</sup>|
|Fault permeability|5.0×10<sup>−12 </sup>m<sup>2</sup>|
|Aquifer porosity (GGS1)|4.0%|
|Aquifer porosity(GGS2)|0.8%|

obtained for higher grid resolution; however, the present model is sufficient for a first-order investigation of the Guy-Greenbrier seismicity. 

Due to uncertainty about how much mass injected into Well 1 ends up in the Ozark Aquifer (it also injects into the Springfield Aquifer), we consider two bounding scenarios, denoted GGS1 and GGS2, in which (1) 100% and (2) 10% of the reported mass is injected into the Ozark. For GGS2, a smaller porosity is used (0.8%). Reported monthly injection volumes, linearly interpolated, are used as mass source terms (Figures 11a and 11b). A Peaceman solution [ _Peaceman_ , 1983] is used to approximate simulated wellhead pressure from the pressure in 

the gridblock into which injection occurs. The simulated wellhead pressure is compared against reported monthly maximum values in (Figures 11c and 11d). Maximum injection pressures are approximately twice as high at Well 5 than at Well 1. The Guy-Greenbrier Fault is modeled as an 11 km long, 4 km deep, 10 m thick, vertically oriented, permeable plane embedded in impermeable basement. Pressure evolution at a depth of 1 km is used as the loading condition, Δ _P_ ( _x, t_ ), in the earthquake simulation model. Friction ( _fs_ , _fr_ ) and stress model parameterization ( _n_ , _𝜎𝜏_<sup>∗) are the same for previous simulated catalogs in this paper.</sup> To avoid triggering earthquakes at extremely low pressures, we set the maximum shear stress to 0.015 MPa less than _𝜏s,_ 0, which is approximately 5 times the magnitude of tidal forces on the fault [e.g., _Vidale et al._ , 1998]. Catalogs simulated for both injection scenarios comprise rupture on 1.5 × 10<sup>5</sup> fault realizations with evolving fault stress according to the method described in section 4.2. For plotting purposes, the earthquake magnitude scale is calibrated with _MW,_ 0 = 5 _._ 5, which is consistent with seismological scaling relations for complete rupture of a fault 11 km long [ _Zoback and Gorelick_ , 2012]. Modeled faults are discretized into 4096 nodes, which sets a minimum modeled magnitude of 1.6. There are three unknown parameters for model calibration: aquifer permeability, fault permeability, and proximity of the fault to failure, _𝜇𝜏_<sup>∗.</sup> 

As in previous sections, temporal evolution of the seismicity rate is approximated by the PDF of catalog event times. This describes relative changes in the seismicity rate during injection and postinjection periods but does not constrain the absolute number of events. To be consistent with the observed earthquake rate at Guy-Greenbrier, we scale the total number of simulated events to be equal to the number of _M >_ 1 _._ 6 events in the ANSS catalog. Observed and modeled seismicity rates for the two scenarios are shown in Figures 11e and 11f. 

The onset of significant seismicity occurs ∼100 days after injection begins at Well 1. We find the onset timing of seismicity to be quite sensitive to aquifer permeability. This is intuitive because aquifer permeability controls the timescale for pressure diffusion from the injection wells to the fault. Aquifer permeability is also an important parameter for calculating wellhead pressure increase via the Peaceman solution. For both scenarios, we find that an aquifer permeability of 10<sup>−13</sup> m<sup>2</sup> yields a reasonable match to both seismicity onset time and simulated wellhead pressures at Well 5 (Figures 11c and 11d). For GGS1, the simulated wellhead pressure at Well 1 is significantly overestimated. This motivates the design of GGS2 with its reduced injection volume for Well 1 and, subsequently, an improved fit to the reported pressure data. Alternatively, pressure at the Well 1 would be lower if local permeability were higher, as might occur if the formation was hydraulically fractured. In this case, pressure evolution in the aquifer and simulated seismicity would resemble GGS1. However, the reduced injection volume required that we artificially lower porosity by a factor of 5 so as to enable large enough pressure buildup at the fault for earthquakes to be triggered. Physically, this corresponds to a lower average-connected porosity over the 1 km thick aquifer, which could occur if there are less permeable intermediate units. Alternatively, we cannot rule out a scenario in which the Ozark Aquifer is locally more permeable in the vicinity at Well 1, which would enable a greater volume to be injected here without exceeding observational constraints on pressure. Nevertheless, these two scenarios serve as a basis with which to explore induced seismicity on the Guy-Greenbrier Fault in general terms. 

INDUCED SEISMICITY—MAGNITUDE FREQUENCY 

DEMPSEY ET AL. 

20 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012551 

**Figure 12.** Summary of spatiotemporal evolution of earthquake activity and pressure plume at Guy-Greenbrier: data and two modeled scenarios (top = GGS1, bottom = GGS2). (a, c) Density map showing along-strike ANSS locations and timing of seismicity along the Guy-Greenbrier fault. The origin corresponds to the NE end of the fault (nearest to Well 1). (b, d) Modeled pressure evolution along the fault with time. The solid contours enclose the region where modeled earthquake rate density _>_ 7.5 events per week per kilometer along the strike of the fault. 

Nine magnitude frequency distributions for 50 day bins covering both injection and postinjection periods are shown in Figures 11g–11j alongside modeled distributions for the same time periods. _Huang and Beroza_ [2015] studied the evolving magnitude frequency distribution at Guy, Arkansas, and noted convexity at large magnitude and a reduction of _b_ value during injection. Our model does not replicate either of these features for an extended 2-D flow geometry. However, we are able to approximate the slope of the observed magnitude frequency distribution by setting _𝜇𝜏_<sup>∗to −0.33 (see Figure 8c).</sup> 

The final calibration target is the along-strike evolution of seismicity on the Guy-Greenbrier Fault. The spatiotemporal evolution of the seismicity rate, defined in terms of the number of events per week per kilometer along the strike of the fault, is shown in the activity maps in Figures 12a and 12c, which illustrate the overall shift in activity on the fault from the northeast to southwest. Overlaid on these maps are contours of the modeled seismicity rate for the two scenarios, enclosing an area in which the average modeled rate exceeded 7.5 events per week per kilometer along the strike of fault. For GGS1, where the larger pressure disturbance is created at Well 1, the rate at which seismicity migrates along the fault is qualitatively reflected in contours 

INDUCED SEISMICITY—MAGNITUDE FREQUENCY 

DEMPSEY ET AL. 

21 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012551 

**Figure 13.** Modeled injection rates for alternative history seismicity simulations. (a) For GGS1, alternative catalogs GGS1-1—only Well 1 operating (green); and catalog GGS1-5—only Well 5 operating (orange; note, no seismicity was triggered in this case). Seismicity rate for catalog GGS, in which both Wells 1 and 5 are operating, is given by the black line. (b) As for Figure 13a but for scenario GGS2. 

that tilt from the vertical. The degree of tilt is sensitive to the permeability of the fault, which for GGS1 is set to 5 × 10<sup>−12</sup> m<sup>2</sup> for an approximate match. The implication of a basement fault that is quite permeable is consistent with borehole observations [ _Barton et al._ , 1995] which suggest that permeable fractures and faults are those with a favorable orientation for reactivation in the prevailing tectonic stress field. _Llenos and Michael_ [2013] use an analytical diffusion model that assumes 3-D (spherical) flow [ _Shapiro etal._ ,1997]tomodelthemigrationofseismicity along the Guy-Greenbrier Fault. Without an estimate of the elastic properties of the aquifer, we cannot compare the range of diffusivities that they obtain, 0.01 to 0.1 m<sup>2</sup> s<sup>−1</sup> , to the permeability estimates inverted by our model. 

In contrast, modeled migration of seismicity is much less significant for GGS2 (Figure 12c). Instead, pressure buildup is more uniform along the fault (Figure 12b) as, in this scenario, Well 5 exerts the larger pressure influence. 

Coevolution of fluid pressure on the fault for GGS1 and GGS2 is shown in Figures 12b and 12d alongside the corresponding seismic activity maps. High rates of earthquake activity occur when pressure on the fault is rising most rapidly. After injection is stopped, pressure con- 

tinues to rise on the fault. However, because the rate of pressure increase has slowed, the earthquake rate decreases. In the scenarios presented here, earthquakes are triggered at quite low fluid pressure. This is constrained by (i) observations of wellhead pressure, (2) aquifer thickness and porosity, and (3) the distance between injection wells and the fault. Modeled triggering pressures could be higher if further information were made available justifying a change in the conceptual model of the aquifer or other model parameters. 

#### **5.2. Hypothetical Injection Scenarios** 

One of the advantages of numerical modeling is the ability to consider “what-if” scenarios. For each of the simulated Guy-Greenbrier scenarios, we consider two hypothetical variations: injection that occurs only into Well 1 or only into Well 5. To aid the comparison, for each of hypothetical scenario, all other catalog properties are fixed, i.e., the injected volume at each well, flow, and fault stress properties, scaling coefficient for calibrating seismicity rate in Figures 11e and 11f. The alternate realities that result describe a different evolution of seismicity rate on the Guy-Greenbrier Fault (Figure 13). Table 6 compares the key features of these catalogs, denoted GGSi-j where i indicates scenario number and j which of the wells injects in the alternative scenario. 

For GGS1, Figure 13a indicates that seismicity is dominated by high-volume injection into Well 1. No seismicity is predicted by the model for injection into Well 5 alone (pressure buildup on the fault is not large enough to exceed the 0.015 MPa threshold). For GGS2 (10% injection volume in Well 1), seismicity is instead dominated by Well 5 (Figure 13b) albeit with a poorer match to the spatiotemporal migration of seismicity (Figure 12). 

Consideration of these hypothetical scenarios reveals an interesting nonlinearity in the model. Rates of induced seismicity for both GGS1 and GGS2 are not simple sums of their constituent hypothetical scenarios (GGS _i_ -1 and GGS _i_ -5), but rather the total seismicity is “more than the sum of its parts”. For prescribed injection 

INDUCED SEISMICITY—MAGNITUDE FREQUENCY 

DEMPSEY ET AL. 

22 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012551 

**Table 6.** Summary of Guy-Greenbrier Simulated Earthquake Catalogs<sup>a</sup> 

|Catalog Name|GGS1|GGS1-1|GGS1-5|GGS2|GGS2-1|GGS2-5|
|---|---|---|---|---|---|---|
|Operating wells|1(100%) & 5|1(100%)|5|1(10%) & 5|1(10%)|5|
|Volume injected [×10<sup>5 </sup>m<sup>3</sup>] (% of GGS_i_)|4.6|3.9 (85%)|0.7 (15%)|1.1|0.4 (37%)|0.7 (63%)|
|Peak seismicity [days since July 2010]|132|156|n/a|132|228|157|
|Number events_MW_ ≥1.6 (% of GGS_i_)|743|578 (78%)|0 (0%)|743|26 (3.5%)|358 (48%)|
|Largest event|3.3|3.1|n/a|3.3|2.5|3.1|
|aSee Table 4 for an explanation of th<br>relative to scenario GGS_i_.|e catalogs. Brac|keted percen|tages for GG|S_i_-_j_indicate a|mount of th|at quantity|

rate, the equations for mass flow in porous media are linear and therefore reservoir pressure in GGS _i_ is the superposition of pressures in GGS _i_ -1 and GGS _i_ -5. However, the interaction of pressure buildup with a threshold for earthquake triggering (in this case, 0.015 MPa) introduces the nonlinearity. This feature of the model has a more practical implication, specifically that from a fault stability perspective; it is important to consider the combined effect of multiple injection wells in a region [ _Dempsey et al._ , 2014]. Depending on the proximity and volume of concurrent injectors, amount of seismicity, timing of the peak, and the largest triggered event can vary (Table 6). 

We note that our stochastic approach to modeling seismicity restricts our ability to comment on any specific reality. For instance, the relative seismicity rate curves in Figure 13 can be used as a probabilistic guide to the relative risk inherent in different injection strategies but, like all models, are weak to systemic flaws in model design, e.g., the existence of localized features (permeable fractures, impermeable barriers) that promote the pressure influence on the fault of one well relative to another. 

### **6. Conclusion** 

Catalogs of induced earthquakes on 1-D faults are modeled through a fracture mechanics approximation of crack propagation physics, reservoir simulation of fluid pressure evolution, and a statistical model of fault shear stress (section 2; Figure 2). Heterogeneous shear stress is characterized by a fractal model with fractal exponent _n_ = 0 _._ 25, and a Gumbel stress PDF with nondimensional standard deviation _𝜎𝜏_<sup>∗= 0</sup><sup>_._225 (section 3;</sup> Figure 3). The magnitude of simulated ruptures is expressed in terms of the rupture length, _L_<sup>∗</sup> , and the average stress drop, Δ _̄𝜏_<sup>∗</sup> . When simulating a simplified tectonic loading condition, a magnitude frequency distribution that conforms to a Gutenberg-Richter model with a _b_ value of 1.15 is obtained. Rupture size is shown to increase with increasing potential stress drop, _𝜏_<sup>∗</sup> (Figure 3e), which is the difference between shear stress and residual strength, i.e., a measure of available energy on the fault. The definition of _𝜏_<sup>∗</sup> includes contributions from both fault shear stress and fluid overpressure. 

We investigate the change in magnitude frequency distribution (compared to the modeled tectonic case) underfourscenariosoffaultpressureevolution;theyareasfollows:(i)constantrate,uniformpressureincrease, (ii) 2-D flow, approximating injection onto a fault at constant permeability, _𝜅f_ , (iii) a two-value, advancing step function, approximating fault injection when there is slip-induced enhancement of _𝜅f_ , and (iv) extended 2-D flow geometry, approximating injection into an aquifer overlying an impermeable basement hosting a permeable fault. Associated with these models of 1-D fault rupture, we draw the following conclusions that, owing to their underpinning by stress and strength evolution, are likely to be qualitatively valid for 2-D faults: 

1. The simulated tectonic _b_ value increases with increasing roughness in the stress profile, as parameterized by _𝜎𝜏_<sup>∗(section 3.3, Figure 3c) (see also</sup><sup>_Ampuero et al._[2006] and</sup><sup>_Ripperger et al._[2007]). This is because greater</sup> roughness prevents propagating rupture fronts from jumping across negative stress drop regions and thus linking up positive stress drop sections into large events. 

2. The simulated _b_ value is higher for events triggered by pressure increase than for the same events triggered by stress increase (section 4.1, Figure 4). This is because fluid pressure increase causes the static strength to drop at a faster rate than the residual strength such that, when an earthquake is triggered, the average stress level on the fault ( _𝜏_<sup>∗</sup> ) is lower than the equivalent tectonic event by a factor _fr_ ∕ _fs_ (the ratio of residual to static friction). For _fr_ = 0 _._ 55 and _fs_ = 0 _._ 64, the simulated _b_ value increases from 1.15 for tectonic triggering to 1.53 for pressure triggering. Lower potential stress drop inhibits small ruptures from growing into large ones, becauseitisincreasinglydifficultfortherupturefronttotraversewideranddeeperregionsofnegativestress 

INDUCED SEISMICITY—MAGNITUDE FREQUENCY 

DEMPSEY ET AL. 

23 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012551 

drop. The increased frequency of smaller ruptures is reflected in a _b_ value increase (section 4.1.1, Figure 5). A similar relationship between stress and _b_ value is observed in microfracturing experiments [ _Scholz_ , 1968], and this appears to extend to tectonic earthquakes worldwide [ _Schorlemmer et al._ , 2005]. 

3. When injection and earthquake triggering begin, the simulated _b_ value is initially high but then declines over time. As in the previous point, this is underpinned by the dependence of _b_ value on _𝜏_<sup>∗</sup> , which tends to increase over time due to the effects of pressure rise on the fault (and the associated reduction of residual strength). The _b_ value reduction with pressure rise is analogous to _b_ value reduction inferred [ _Smith_ , 1981] and modeled [ _Ben-Zionetal._ , 2003] on faults approaching the end of their seismic cycle. However, for natural seismicity it is an increase in shear stress rather than the decrease in residual strength that is responsible for the _b_ value shift. 

4. Eventually, ongoing pressure rise reverses the _b_ value decrease and it starts to climb again (Figure 5). This is a second-order effect in our simulations but may be stronger under parameter configurations not considered here. The effect arises because, as pressure increases and effective normal stress declines, the average stress drop of the simulated ruptures, Δ _𝜏_<sup>∗</sup> , becomes smaller. As Δ _𝜏_<sup>∗</sup> is used in the calculation of event magnitude, this ultimately translates to smaller events and a higher _b_ value. This result is consistent with observations of low stress drop near high-pressure well stimulations [ _Goertz-Allmann et al._ , 2011]. 

5. For faults with low initial stress, the simulated _b_ value is higher (Figures 8b and 8c). Again, this reflects the increased difficulty of faults with low stress ( _𝜏_<sup>∗</sup> ) to grow small ruptures into larger ones. This implies that, for a collection of differently oriented faults in the same regional stress regime, the greater the misorientation of each fault (and hence the lower the resolved stress) the higher the expected _b_ value for seismicity triggered on that fault. 

6. Under some conditions, it is possible for convexity to appear in the magnitude frequency distribution (Figure 8a). Physically, this represents a deficit of large-magnitude events relative to the number of small-magnitude events that have occurred. The effect arises because, energetically, conditions are more favorable for rupture inside the pressure plume than outside. This then imposes a preferred length scale for rupture—as well as a corresponding _M_ max —and discourages events that try to grow larger that this limit. In oursimulations,theeffectonlyoccurredforinjectiondirectlyontoafaultandwasmorepronouncedforhigh injection pressure. This is consistent with observations of such convexity in an EGS context [e.g., _Dorbath et al._ , 2009; _Shapiro et al._ , 2011] but does not account for recent observations of convexity associated with wastewater disposal [ _Huang and Beroza_ , 2015]. It has recently been suggested [ _McGarr_ , 2014] that _M_ max is perhaps a ubiquitous feature of induced earthquake sequences. Our results here suggest that such a view of _M_ max —attributable to a finite-sized pressure plume which arrests ruptures that attempt to propagate outside its margins—is only justified in situations where convexity is evident in the magnitude frequency distribution. 

We apply our model to a sequence of earthquakes in Arkansas in 2010–2011, likely triggered by wastewater disposal at two nearby wells (section 5). Our calibrated model uses the monthly injection rate at each well, appropriate dimensions for the fault, aquifer and injection well system, and friction and stress parameters established in the earlier simulations. Homogeneous aquifer permeability is estimated to be of order 10<sup>−13</sup> m<sup>2</sup> , which is constrained by the observed delay between the beginning of injection and the start of seismicity of the Guy-Greenbrier Fault as well as observed pressure buildup around the well. Fault permeability is the main parameter that affects the along-strike migration rate of seismicity on the fault (Figure 12) and we estimate this to be 5 × 10<sup>−12</sup> m<sup>2</sup> . Consideration of hypothetical injection scenarios (Figure 13), in which either Well 1 or 5 operates in isolation, suggests that the stacking effect of the two wells is nonlinear in terms of the amountof seismicity triggered. This suggests that interaction between multiple injecting wastewater disposal wells should be considered from an induced seismicity risk perspective. 

### **Appendix A: Bootstrap Sampling of Magnitude Frequency Distribution** 

The purpose of bootstrap sampling is to construct a stable representation of the magnitude frequency distribution from a catalog of simulated fault ruptures. For a catalog comprising _N_ ruptures, the simplest representation is the cumulative frequency distribution for all events. For instance, for the catalog shown in Figure A1a, where _N_ =10<sup>4</sup> , this corresponds to the red profile. Because there is an upper magnitude limit,set by the length of the fault, the magnitude frequency distribution curves sharply as it approaches the upper limit, in this case, _MW_ 4.5. This curvature is a feature of the finite size of the fault, as discussed by _Utsu_ [1999]. 

INDUCED SEISMICITY—MAGNITUDE FREQUENCY 

DEMPSEY ET AL. 

24 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012551 

**Figure A1.** Illustration of bootstrap sampling of m ~~<u>ag</u>~~ nitude frequency distribution. (a) Average representations ~~o~~ f the magnitude frequency distribution for different sample sizes. Note that curvature appears at high magnitude for sample sizes larger than ∼ 10<sup>3</sup> due to upper magnitude limit _MW_ 4.5. (b) Red profiles show the magnitude frequency distribution for 1000 randomly drawn samples from catalog TR0. From the samples, a mean profile and the limits of an interval enclosing 90% of samples are calculated. (c) Histogram of _b_ values obtained when fitting a GR model to 10<sup>4</sup> randomly drawn samples from catalog TR0. Median (solid), 5th and 95th percentile values (dashed) are indicated by red lines. This method provides an estimate of the catalog _b_ value and its error. 

While such finite fault effects are not a problem in and of themselves—the magnitude frequency distribution can still be characterized by an appropriate nonlinear form of the GR law (e.g., equation (2), see _Utsu_ [1999] for others)—they do have the potential to obscure other effects that alter the shape of the magnitude frequency distribution. Therefore, it is useful to consider an average representation of a smaller subcatalog, comprising _N_ sub _<N_ ruptures, that does not exhibit the finite fault curvature but still contains essential information such as the _b_ -value. Figure A1a highlights one such representation for _N_ sub = 10<sup>3</sup> . Simulations in this paper typically consider catalogs with _b_ values of 1 or higher and resolution of event _MW_ over a three unit range. Under these conditions, _N_ sub = 10<sup>3</sup> is sufficient to remove the finite fault effect. 

A single random draw of _N_ sub events from a catalog comprising _N_ total events yields a magnitude frequency distribution that is sensitive to the statistics of small numbers, particularly at the large-magnitude limit. Therefore, we construct an ensemble of magnitude frequency distributions by taking a large number of random draws, _n_ draw (typically 1000). From the ensemble, we construct both the mean profile as well as the interval enclosing 90% of all profiles (Figure FA1b). For each of the _n_ draw distributions, we estimate (i) a curvature parameter, _Cv_ (see Appendix B) and, if _Cv <_ 0 _._ 45, (ii) a _b_ value by least squares fitting of a linear curve across the entire magnitude range. An alternative approach to _b_ value estimationisthemaximum-likelihoodmethod, however, as our study focuses on qualitative changes in the _b_ value, a least squares fit is sufficient. The distribution of all fitted _b_ values is shown in Figure A1c, and from this we obtain a median, 5th and 95th percentiles as an estimate of the catalog _b_ value and its error. For the catalog shown here, _b_ = 1 _._ 15 with error interval [1.03, 1.32]. 

### **Appendix B: Curvature in Magnitude Frequency Distribution** 

To assess the adequacy of fitting a GR model to a simulated magnitude frequency distribution, we compute a curvature parameter for the catalog. High curvature 

INDUCED SEISMICITY—MAGNITUDE FREQUENCY 

DEMPSEY ET AL. 

25 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012551 

**Figure B1.** Illustration of quadratic fits (dashed profile) to two simulated magnitude frequency distributions (solid lines, from Figures 7e and 7f. Their associated curvature values, _Cv_ , computed from (B1), are shown. 

indicates a departure from linearity and that fitting a GR model is less meaningful. For the simulated magnitude frequency distribution defined at discrete [ _Mi,_ log( _Ni_ )], we use linear regression to find the best fit quadratic function log( _N_ ) = _c_ 1 _M_<sup>2</sup> + _c_ 2 _M_ + _c_ 3 = _f_ ( _M_ ). The first curvature, _𝜅v_ , [ _Kreyszig_ , 1991] and its mean value over the interval [ _M_ min, _M_ max] is given as 

<!-- Start of picture text -->
d 2 f ∕d M 2<br>𝜅v =<br>( 1 + (d f ∕d M )2 ) 3∕2 ,<br>M max (B1)<br>1<br>Cv = 𝜅v  d M,<br>M max − M min ∫<br>M min<br><!-- End of picture text -->

from which a closed-form expression is obtained in terms of _c_ 1, _c_ 2, _M_ max, and _M_ min (not quoted here for brevity), satisfying _Cv_ → 0 as _c_ 1 → 0. 

Figure B1 shows the two simulated magnitude frequency distributions from Figures 7e 

and 7f, their associated quadratic fits and computed curvatures. Note, this coarse measure of curvature provides no physical meaning but rather is a useful quality factor for determining whether a GR model is an appropriate fit to the data. In this work, we set an arbitrary cutoff of _Cv <_ 0 _._ 45 for fitting a GR model. 

##### **Acknowledgments** 

Funding for this study was provided by the Stanford Center for Induced and Triggered Seismicity (SCITS). The authors thank E. Dunham and J. Norbeck for helpful discussions and V. Gischig, J. P. Ampuero, M. McClure, and an anonymous reviewer for comments that improved the quality of this article. The data used are listed in the references. 

### **References** 

Abercrombie, R. E. (1995), Earthquake source scaling relationships from −1 to 5 ML using seismograms recorded at 2.5 km depth, _J. Geophys. Res._ , _100_ , 24,015–24,036. 

Abercrombie, R. E., and J. R. Rice (2005), Can observations of earthquake scaling constrain slip weakening?, _Geophy. J. Int._ , _162_ , 406–424. 

Ake, J., K. Mahrer, D. O’Connell, and L. Block (2005), Deep-injection and closely monitored induced seismicity at Paradox Valley, Colorado, _Bull. Seismol. Soc. Am._ , _95_ (2), 664–683. 

- Aki, K. (1972), Earthquake mechanism, _Tetonophys._ , _13_ (1–4), 423–446. 

- Albaric, J., V. Oye, N. Langet, M. Hasting, I. Lecomte, K. Iranpour, M. Messeiller, and P. Reid (2014), Monitoring of induced seismicity during 

- the first geothermal reservoir stimulation at Paralana, Australia, _Geothermics_ , _52_ , 120–131. 

- Ampuero, J.-P., and Y. Ben-Zion (2008), Cracks, pulses and macroscopic asymmetry of dynamic rupture on a bimaterial interface with velocity-weakening friction, _Geophys. J. Int._ , _173_ , 674–692. 

- Ampuero, J.-P., J. Ripperger, and P. M. Mai (2006), Properties of dynamic earthquake ruptures with heterogeneous stress drop, in _Radiated_ 

_Energy and the Physics of Earthquake Faulting, Geophys. Monogr. Ser._ , vol. 70, edited by R. Abercrombie, pp. 3–13, AGU, Washington, D. C. Andrews, D. J. (1980), A stochastic fault model 1. Static case, _J. Geophys. Res._ , _85_ (B7), 3867–3877. 

- Bachmann, C. E., S. Wiemer, B. P. Goertz-Allmann, and J. Woessner (2012), Influence of pore-pressure on the event-size distribution of 

- induced earthquakes, _Geophys. Res. Lett._ , _39_ , L09302, doi:10.1029/2012GL051480. 

- Barton, C. A., M. D. Zoback, and D. Moos (1995), Fluid flow along potentially active faults in crystalline rock, _Geology_ , _23_ (8), 683–686. 

- Ben-Zion, Y., M. Eneva, and Y. Liu (2003), Large earthquake cycles and intermittent criticality on heterogeneous faults due to evolving stress and seismicity, _J. Geophys. Res._ , _108_ (B6), 2307, doi:10.1029/2002JB002121. 

- Brodsky, E. E., and L. J. Lajoie (2013), Anthropogenic seismicity rates and operational parameters at the Salton Sea Geothermal Field, _Science_ , _341_ (543), 543–546. 

- Bromley, C. J., C. F. Pearson, D. M. Rigor Jr., and PNOC-EDC (1987), Microearthquakes at the Puhagan geothermal field, Philippines—A case of induced seismicity, _J. Volcanol. Geotherm. Res._ , _31_ , 293–311. 

- Causse, M., L. A. Dalguer, and P. M. Mai (2013), Variability of dynamic source parameters inferred from kinematic models of past earthquakes, _Geophys. J. Int._ , _196_ , 1754–1769, doi:10.1093/gji/ggt478. 

- Cesca, S., F. Grigoli, S. Heimann, Á. Gonzaléz, E. Buforn, S. Maghsoudi, E. Blanch, and T. Dahm (2014), The 2013 September-October seismic sequence offshore Spain: A case of seismicity triggered by gas injection?, _Geophys. J. Int._ , _198_ , 941–953. 

- Cornell, C. A. (1968), Engineering seismic risk analysis, _Bull. Seismol. Soc. Am._ , _58_ (5), 1583–1606. 

- Dempsey, D. and J. Suckale (2016), Collective properties of injection-induced earthquake sequences: 1. Model description and directivity bias, _J. Geophys. Res. Solid Earth_ , _121_ , doi:10.1002/2015JB012550. 

- Dempsey, D., S. Kelkar, R. Pawar, E. Keating, and D. Coblentz (2014), Modeling caprock bending stresses and their potential for induced seismicity during CO2 injection, _Int. J. Greenhouse Gas Control_ , _22_ , 223–236. 

- Dempsey, D., S. Kelkar, N. Davatzes, S. Hickman, and D. Moos (2015), Numerical modeling of injection, stress and permeability enhancement during shear stimulation at the Desert Peak Enhanced Geothermal System, _Int. J. Rock Mech. Min. Sci._ , _78_ , 190–206. 

- Dorbath, L., N. Cuenot, A. Genter, and M. Frogneux (2009), Seismic response of the fractured and faulted granite of Soultz-sous-Forêts (France) to 5 km deep massive water injections, _Geophys. J. Int._ , _177_ , 653–675. 

INDUCED SEISMICITY—MAGNITUDE FREQUENCY 

DEMPSEY ET AL. 

26 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012551 

El-Isa, Z. H., and D. W. Eaton (2014), Spatiotemporal variations in the _b_ -value of earthquake magnitude-frequency distributions: Classification and causes, _Tectonophysics_ , _615_ , 1–11. Eshelby, J. D. (1957), The determination of the elastic field of an ellipsoidal inclusion, and related problems, _Proc. R. Soc. A_ , _241_ , 376–391. Eshelby, J. D. (1969), The elastic field of a crack extending non-uniformly under general anti-plane loading, _J. Mech. Phys. Solids_ , _17_ , 177–199. Fletcher, J. B., and L. R. Sykes (1977), Earthquakes related to hydraulic mining and natural seismic activity in western New York State, _J. Geophys. Res._ , _82_ (26), 3767–3780. Friberg, P. A., G. M. Besana-Ostman, and I. Dricker (2014), Characterization of an earthquake sequence triggered by hydraulic fracturing in Harrison County, Ohio, _Seismol. Res. Lett._ , _85_ (6), doi:10.1785/0220140127. Frohlich, C., C. Hayward, B. Stump, and E. Potter (2011), The Dallas-Fort worth earthquake sequence: October 2008 through May 2009, _Bull. Seismol. Soc. Am._ , _101_ (1), 327–340. Gibbs, J. F., J. H. Healy, C. B. Raleigh, and J. Coakley (1973), Seismicity in the Rangely, Colorado, area: 1962–1970, _Bull. Seismol. Soc. Am._ , _63_ (5), 1557–1570. Gischig, V. (2015), Rupture propagation behavior and the largest possible earthquake induced by fluid injection into deep reservoirs, _Geophys. Res. Lett._ , _42_ , 7420–7428, doi:10.1002/2015GL065072. Gischig, V., and S. Wiemer (2013), A stochastic model for induced seismicity based on non-linear pressure diffusion and irreversible permeability enhancement, _Geophys. J. Int._ , _194_ , 1229–1249, doi:10.1093/gji/ggt164. Goebel, T. H. W., S. M. Hosseini, F. Cappa, E. Hauksson, J. P. Ampuero, F. Aminzadeh, and J. B. Saleeby (2016), Wastewater disposal and earthquake swarm activity at the southern end of the Central Valley, California, _Geophys. Res. Lett._ , _43_ , 1092–1099, doi:10.1002/2015GL066948. Goertz-Allmann, B. P., and S. Wiemer (2013), Geomechanical modeling of induced seismicity source parameters and implications for seismic hazard assessment, _Geophysics_ , _78_ (1), KS25–KS39, doi:10.1190/GEO2012-0102.1. Goertz-Allmann, B. P., A. Goertz, and S. Wiemer (2011), Stress drop variations of induced earthquakes at the Basel geothermal site, _Geophys. Res. Lett._ , _38_ , L09308, doi:10.1029/2011GL047498. 

Goertz-Allmann, B. P., D. Kühn, V. Oye, B. Bohloli, and E. Aker (2014), Combining microseismic and geomechanical observations to interpret storage integrity at the In Salah CCS site, _Geophys. J. Int._ , _198_ , 447–461, doi:10.1093/gji/ggu010. Guest, A., E. Rebel, S. M. Bailly, and J. Kostadinovic (2014), Integrated analysis for fracture identification during hydraulic fracturing, paper SPE-170714-MS presented at SPE Annual Technical Conference and Exhibition, Society of Petroleum Engineers, Amsterdam, Netherlands, 27–29 Oct. 

Hanks, T. C., and H. Kanamori (1979), A moment magnitude scale, _J. Geophys. Res._ , _84_ , 2348–2350. Häring, M. O., U. Schanz, F. Ladner, and B. C. Dyer (2008), Characterisation of the Basel 1 enhanced geothermal system, _Geothermics_ , _37_ , 469–494. 

Healy, J. H., W. W. Rubey, D. T. Griggs, and C. B. Raleigh (1968), The Denver earthquakes, _Science_ , _161_ (3848), 1301–1310. Holland, A. A. (2013), Earthquakes triggered by hydraulic fracturing in South-Central Oklahoma, _Bull. Seismol. Soc. Am._ , _103_ (3), 1784–1792. Horton, S. (2012), Disposal of hydrofracking waste fluid by injection into subsurface aquifers triggers earthquake swarm in Central Arkansas with potential for damaging earthquake, _Seismol. Res. Lett._ , _83_ (2), 250–260. Huang, Y., and G. C. Beroza (2015), Temporal variation in the magnitude-frequency distribution during the Guy-Greenbrier earthquake sequence, _Geophys. Res. Lett._ , _42_ , 6639–6646, doi:10.1002/2015GL065170. Huang, J., and D. L. Turcotte (1988), Fractal distributions of stress and strength and variations of _b_ -value, _Earth Planet. Sci. Lett._ , _91_ , 223–230. Kammer, D. S., M. Radiguet, J.-P. Ampuero, and J.-F. Molinari (2015), Linear elastic fracture mechanics predicts the propagation distance of frictional slip, _Tribol. Lett._ , _57_ (3), 23, doi:10.1007/s11249-014-0451-8. Keranen, K. M., H. M. Savage, G. A. Abers, and E. S. Cochran (2013), Potentially induced earthquakes in Oklahoma, USA: Links between wastewater injection and the 2011 _Mw_ 5.7 earthquake sequence, _Geology_ , _41_ (6), 699–702. Kreyszig, E. (1991), _Differential Geometry_ , Dover, New York. Lei, X., G. Yu, S. Ma, X. Wen, and Q. Wang (2008), Earthquakes induced by water injection at ∼3 km depth within the Rongchang gas field, Chongqing, China, _J. Geophys. Res._ , _113_ , B10310, doi:10.1029/2008JB005604. Lei, X., S. Ma, W. Chen, C. Pang, J. Zeng, and B. Jiang (2013), A detailed view of the injection-induced seismicity in a natural gas reservoir in Zigong, southwestern Sichuan Basin, China, _J. Geophys. Res. Solid Earth_ , _118_ , 4296–4311, doi:10.1002/jgrb.50310. Lengliné, O., L. Lamourette, L. Vivin, N. Cuenot, and J. Schmittbuhl (2014), Fluid-induced earthquakes with variable stress drop, _J. Geophys. Res. Solid Earth_ , _119_ , 8900–8913, doi:10.1002/2014JB011282. Llenos, A. L., and A. J. Michael (2013), Modeling earthquake rate changes in Oklahoma and Arkansas: Possible signatures of induced seismicity, _Bull. Seismol. Soc. Am._ , _103_ (5), 2850–2861. Madariaga, R. (1979), On the relation between seismic moment and stress drop in the presence of stress and strength heterogeneity, _J. Geophys. Res._ , _84_ (B5), 2243–2250. Mai, P. M., and G. C. Beroza (2002), A spatial random field model to characterize complexity in earthquake slip, _J. Geophys. Res._ , _107_ (B11), 2308, doi:10.1029/2001JB000588. McClure, M. W., and R. N. Horne (2011), Investigation of injection-induced seismicity using a coupled fluid flow and rate/state friction model, _Geophysics_ , _76_ (6), WC181–WC198, doi:10.1190/GEO2011-0064.1. McGarr, A. (2014), Maximum magnitude earthquakes induced by fluid injection, _J. Geophys. Res. Solid Earth_ , _119_ , 1008–1019, doi:10.1002/2013JB010597. Murphy, S., G. S. O’Brien, J. McCloskey, C. J. Bean, and S. Nalbant (2013), Modelling fluid induced seismicity on a nearby active fault, _Geophys. J. Int._ , _194_ , 1613–1624. Peaceman, D. W. (1983), Interpretation of well-block pressures in numerical reservoir simulation with nonsquare grid blocks and anisotropic permeability, _Soc. Pet. Eng. J._ , _23_ (3), 531–543. Raleigh, C. B., J. H. Healy, and J. D. Bredehoeft (1976), An experiment in earthquake control at Rangely, Colorado, _Science_ , _191_ (4233), 1230–1237. Ripperger, J., J.-P. Ampuero, P. M. Mai, and D. Giardini (2007), Earthquake source characteristics from dynamic rupture with constrained stochastic fault stress, _J. Geophys. Res._ , _112_ , B04311, doi:10.1029/2006JB004515. Scholz, C. H. (1968), The frequency-magnitude relation of microfracturing in rock and its relation to earthquakes, _Bull. Seismol. Soc. Am._ , _58_ (1), 399–415. Schorlemmer, D., S. Wiemer, and M. Wyss (2005), Variations in earthquake-size distribution across different stress regimes, _Nature_ , _437_ , 539–542. Shapiro, S. A., E. Huenges, and G. Borm (1997), Estimating the crust permeability from fluid-injection-induced seismic emission at the KTB site, _Geophys. J. Int._ , _131_ , 15–18. 

INDUCED SEISMICITY—MAGNITUDE FREQUENCY 

DEMPSEY ET AL. 

27 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012551 

- Shapiro, S. A., O. S. Krüger, C. Dinske, and C. Langenbruch (2011), Magnitudes of induced earthquakes and geometric scales of fluid-stimulated rock volumes, _Geophysics_ , _76_ (6), WC55–WC63, doi:10.1190/GEO2010-0349.1. 

- Skoumal, R. J., M. R. Brudzinski, and B. S. Currie (2015), Earthquakes induced by hydraulic fracturing in Poland Township, Ohio, _Bull. Seismol. Soc. Am._ , _105_ (1), 189–197, doi:10.1785/0120140168. 

- Smith, W. (1981), The _b_ -value as an earthquake precursor, _Nature_ , _289_ , 136–139. 

- Smith, D. E., and T. H. Heaton (2011), Models of stochastic, spatially varying stress in the crust compatible with focal-mechanism data, and how stress inversions can be biased toward the stress rate, _Bull. Seismol. Soc. Am._ , _101_ (3), 1396–1421. 

- Utsu, T. (1999), Representation and analysis of the earthquake size distribution: A historical review and some new approaches, _Pure Appl. Geophys._ , _155_ , 509–535. 

- Vermylen, J., and M. D. Zoback (2011), Hydraulic fracturing, microseismic magnitudes, and stress evolution in the Barnett Shale, Texas, USA, paper SPE-140507-MS presented at SPE Hydraulic Fracturing Conference, Society of Petroleum Engineers, The Woodlands, Tex., 24–26 Jan. 

- Vidale, J. E., D. C. Agnew, M. J. S. Johnston, and D. H. Oppenheimer (1998), Absence of earthquake correlation wiht Earth tides: An indication of high preseismic fault stress rate, _J. Geophys. Res._ , _103_ (B10), 24,567–24,572. 

- Zhou, R., G. D. Huang, P. Snelling, M. P. Thornton, and M. Mueller (2013), Magnitude calibration for microseismic events from hydraulic fracture monitoring, paper SEG-2013-0648 presented at SEG Annual Meeting, Society of Exploration Geophysicists, Houston, Tex., 22–27 Sept. 

- Zoback, M. D., and S.-M. Gorelick (2012), Earthquake triggering and large-scale geologic storage of carbon dioxide, _Proc. Natl. Acad. Sci. U.S.A._ , _109_ (26), 10,164–10,168. 

- Zoback, M. D., and H.-P. Harjes (1997), Injection-induced earthquakes and crustal stress at 9 km depth at the KTB deep drilling site, Germany, _J. Geophys. Res._ , _102_ (B8), 18,477–18,491. 

- Zoback, M. D., and M.-L. Zoback (1991), Tectonic stress field of North America and relative plate motions, in _Neotectonics of North America_ , edited by D. B. Slemmons, pp. 339–366, Geol. Soc. Am., Denver, Colo. 

- Zöller, G., M. Holschneider, and Y. Ben-Zion (2005), The role of heterogeneities as a tuning parameter of earthquake dynamics, _Pure Appl. Geophys._ , _162_ , 1027–1049. 

- Zyvoloski, G. A. (2007), FEHM: A control volume finite element code for simulating subsurface multi-phase multi-fluid heat and mass transfer, _LAUR-07-3359_ . 

INDUCED SEISMICITY—MAGNITUDE FREQUENCY 

DEMPSEY ET AL. 

28 

