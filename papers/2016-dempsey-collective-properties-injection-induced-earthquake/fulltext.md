# Collective properties of injection‐induced earthquake sequences: 1. Model description and directivity bias

**Authors:** David Dempsey, Jenny Suckale  
**Published in:** Journal of Geophysical Research: Solid Earth (2016)  
**DOI (version of record):** https://doi.org/10.1002/2015jb012550  
**This copy:** Accepted manuscript (peer-reviewed, author's version). Text extracted from the PDF at https://ddempsey.github.io/papers/2016-dempsey-collective-properties-injection-induced-earthquake/dempsey2016-collective-properties-injection.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** An edited version of this paper was published by AGU. Published 2016 American Geophysical Union. Version of record: https://doi.org/10.1002/2015jb012550  

---


# **Journal of Geophysical Research: Solid Earth** 

## **RESEARCH ARTICLE** 10.1002/2015JB012550 

This article is a companion to _Dempsey et al._ [2016] doi:10.1002/2015JB012551. 

##### **Key Points:** 

- Induced earthquake sequences modeled by crack propagation physics coupled with reservoir simulation 

- Model shows bias for rupture directivity toward injection well where fluid pressure is high 

- Directivity bias detected in hypothetical catalog by Kolmogorov-Smirnov comparison to tectonic norm 

**Correspondence to:** 

D. Dempsey, ddempsey786@gmail.com 

##### **Citation:** 

Dempsey, D., and J. Suckale (2016), Collective properties of injection-induced earthquake sequences: 1. Model description and directivity bias, _J. Geophys. Res. Solid Earth_ , _121_ , doi:10.1002/2015JB012550. 

Received 23 SEP 2015 Accepted 18 APR 2016 Accepted article online 22 APR 2016 

**Collective properties of injection-induced earthquake sequences: 1. Model description and directivity bias** 

#### **David Dempsey**<sup>**1,2**</sup> **and Jenny Suckale**<sup>**1**</sup> 

1Department of Geophysics, Stanford University, Stanford, California, USA, 2Now at Department of Engineering Science, University of Auckland, Auckland, New Zealand 

**Abstract** Induced seismicity is of increasing concern for oil and gas, geothermal, and carbon sequestration operations, with several _M >_ 5 events triggered in recent years. Modeling plays an important role in understanding the causes of this seismicity and in constraining seismic hazard. Here we study the collective properties of induced earthquake sequences and the physics underpinning them. In this first paper of a two-part series, we focus on the directivity ratio, which quantifies whether fault rupture is dominated by one (unilateral) or two (bilateral) propagating fronts. In a second paper, we focus on the spatiotemporal and magnitude-frequency distributions of induced seismicity. We develop a model that couples a fracture mechanics description of 1-D fault rupture with fractal stress heterogeneity and the evolving pore pressure distribution around an injection well that triggers earthquakes. The extent of fault rupture is calculated from the equations of motion for two tips of an expanding crack centered at the earthquake hypocenter. Under tectonic loading conditions, our model exhibits a preference for unilateral rupture and a normal distribution of hypocenter locations, two features that are consistent with seismological observations. On the other hand, catalogs of induced events when injection occurs directly onto a fault exhibit a bias toward ruptures that propagate toward the injection well. This bias is due to relatively favorable conditions for rupture that exist within the high-pressure plume. The strength of the directivity bias depends on a number of factors including the style of pressure buildup, the proximity of the fault to failure and event magnitude. For injection off a fault that triggers earthquakes, the modeled directivity bias is small and may be too weak for practical detection. For two hypothetical injection scenarios, we estimate the number of earthquake observations required to detect directivity bias. 

### **1. Introduction** 

It is now well established that injection of fluids into the subsurface can destabilize critically stressed faults [ _Healy et al._ , 1968; _Raleigh et al._ , 1976; _Zoback and Harjes_ , 1997] causing earthquakes large enough to be felt at the surface. Increasingly, induced seismicity is occurring on basement faults in the US midcontinent [ _Horton_ , 2012; _Keranen et al._ , 2013; _Ellsworth_ , 2013], likely because of massive saltwater disposal into deep aquifers overlying the basement [ _Walsh and Zoback_ , 2015; _Weingarten et al._ , 2015]. Induced seismicity also occurs in hydrothermal systems, where water extracted for electricity production is reinjected underground [ _Batini et al._ , 1985; _Majer et al._ , 2007], and during high-pressure well stimulations aimed at creating an Enhanced Geothermal System (EGS) [ _Majer et al._ , 2007; _Häring et al._ , 2008; _Dorbath et al._ , 2009]. 

In this study, we consider induced seismicity that is triggered by fluid pressure increase on the fault plane. However, human-caused earthquakes are also associated with reservoir impoundment and mining operations [ _Gupta and Rastogi_ , 1976]. They can also be triggered by stress changes outside a reservoir caused by volume, mass, or temperature changes within it, e.g., production induced seismicity [ _Segall and Fitzgerald_ , 1998]. 

An earthquake is induced on a fault when fluid pressure is raised enough that the Mohr-Coulomb failure criterion is satisfied; this occurs when shear stress equals the static strength, i.e., _𝜏_ = _𝜏s_ . Initially, shear stress is below the static strength. However, raising pore pressure causes fault strength to drop [ _Hubbert and Rubey_ , 1959], and if this is large enough to satisfy the failure criterion, an earthquake is triggered. The initial static strength, _𝜏s,_ 0, and its value, _𝜏s_ , modified due to an increase in pore pressure, Δ _P_ , are given by 

> ©2016. American Geophysical Union. All Rights Reserved. 

DEMPSEY AND SUCKALE 

INDUCED SEISMICITY: DIRECTIVITY BIAS 

1 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012550 

where _𝜎n_ is the normal stress, _P_ 0 is the initial pore pressure, and _fs_ is the static friction coefficient. For typical crustal rocks, _fs_ ranges between 0.6 and 1.0 [ _Byerlee_ , 1978]. This pressurization mechanism was demonstrated by _Raleigh et al._ [1976] with a set of experiments at Rangely Oil Field, Colorado. Measurements were made of in situ stress and a critical pressure threshold for Mohr-Coulomb failure was determined; subsequently, earthquake activity in the field was modulated by raising and lowering the fluid pressure about this threshold. 

Modelingplaysanimportantrolebothinunderstandingthemechanismsofseismicityandinquantifyingseismic hazard. For example, several studies have coupled deterministic simulation of evolving reservoir pressure with a description of the rupture process. In these studies, injection and pressure buildup trigger earthquakes by either a pressurization [e.g., _Cappa and Rutqvist_ , 2011] or a poroelastic stressing mechanism [ _Murphy et al._ , 2013]. Fault rupture is modeled by coupling a friction evolution law (linear slip weakening [ _CappaandRutqvist_ , 2011] and rate-and-state friction [e.g., _McClure and Horne_ , 2011; _Dieterich et al._ , 2015]) with stress transfer processes on the fault (quasistatic [ _Cappa and Rutqvist_ , 2011], quasidynamic [e.g., _McClure and Horne_ , 2011; _Dieterichetal._ , 2015], or fully dynamic [ _CappaandRutqvist_ , 2011]), sometimes with permeability enhancement [e.g., _McClure and Horne_ , 2011]. In this study, we focus on modeling large catalogs of induced earthquakes on faults with spatially heterogeneous shear stress. The numerical method we use involves a semianalytical solutionofacrackpropagationequationwithinstantaneousslip-weakeningfrictionandquasistaticstresstransfer. The resulting model makes minor compromises with respect to physical complexity, which are compensated by substantial computational speedup that enables us to model large sequences. We compare model estimates of rupture size against the dynamic rupture simulator, MDSBI [ _Dunham_ , 2005] (Appendix C), which provides an estimate of the model error. 

This paper is structured as follows: in section 2, we describe the main components of our model for tectonic and induced seismicity. This includes the theory governing rupture of 1-D antiplane cracks (2.2.2), fractal models of spatially correlated shear stress (2.3), triggering by tectonic loading or pressurization (2.4), and reservoir pressure evolution for several generic configurations of an injection-fault system (2.5). In section 3, we describe a catalog of earthquakes modeled under a tectonic loading condition and compare the collective directivity properties with seismological observations (3.2). Finally, in section 4, we compare catalogs of inducedearthquakesmodeledunderarangeofinjectionconditionstothetectonicreferencecatalog,provide an account for how backward directivity bias (rupture directed toward the injection well) is introduced when injection occurs directly onto a fault, and propose how such a bias might be detected in real earthquake catalogs (4.1). In a companion paper, we use our model to give a physical motivation for how spatiotemporal and magnitude-frequency properties differ for induced earthquakes with a particular application to a sequence of earthquakes that occurred near Guy and Greenbrier, Arkansas, in 2010–2011. 

#### **1.1. Directivity** 

Rupture on a fault of length, _L_ 0, is conceptualized as a semi-infinite bilaterally expanding crack with crack tip propagation in the _x_ direction and crack normal in the _y_ direction (Figure 1). We define a hypocenter location, _xh_ , negative (or left-hand) and positive (or right-hand) crack lengths, _a_ − and _a_ +, and total crack length _L_ = _a_ − + _a_ + (refer to Table 1 for a full list of symbols used in the text). 

For our analysis of directivity, we classify two end-member types of fault rupture: bilateral and unilateral. For a strike-slip fault, a perfectly bilateral rupture is one that nucleates and sends two equal-velocity rupture fronts outward in opposite directions along the fault, both of which arrest at the same time and distance from the hypocenter. In contrast, a perfectly unilateral rupture has only a single propagating rupture front. 

In practice, a rupture may begin as bilateral (two propagating fronts) but later become unilateral when one of the fronts arrests. In this paper, we use two measures to quantify the relative bilateral versus unilateral nature of a rupture: proportion unilateral rupture, _E_ , and directivity ratio, _D_ . Proportion unilateral rupture is introduced by _Boatwright_ [2007] as 

where we define the hypocentral location inside the ruptured area as _𝛼_ = _a_ −∕ _L_ (distance from the left-hand edge of the rupture), which is different to the hypocentral location on the fault, _xh_ (distance from the left-hand end of the fault). 

DEMPSEY AND SUCKALE 

INDUCED SEISMICITY: DIRECTIVITY BIAS 

2 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012550 

**Figure 1.** Schematic illustration of the semi-infinite expanding bilateral crack. A fault of length, _L_ 0, hosts a rupture that nucleates at _xh_ (the hypocenter) before propagating two crack tips in opposite directions along _x_ , which eventually arrest with final rupture length, _L_ . The distance between the negative and positive (or left-hand and right-hand) crack tips and _xh_ is denoted _a_ − and _a_ +. 

The directivity ratio, _D_ , is defined in terms of the second-order moments of the earthquake moment-release distribution [ _McGuire et al._ , 2002]. For a simple 1-D rupture in which both fronts propagate at the same, constant velocity, the final slip distribution is constant, a slip rate is a delta function at the rupture front, and the directivity ratio is (Appendix A) 

This expression is used to approximate _D_ for the ruptures considered in this study, in which slip rate is not likely to be a delta function (see Appendix C for further discussion of this approximation). Both _E_ and _D_ range between −1 and 1, with 0 indicating a perfectly bilateral rupture. 

In the context of seismic hazard, directivity refers to the relative amplification of radiated seismic waves in the direction of propagation of fault rupture. We do not model these effects. 

_McGuire et al._ [2002] report directivity ratios for 42 large shallow earthquakes and find that most ruptures are predominantly unilateral. They explain this result using a simple characteristic earthquake model and a uniform distribution for _𝛼_ ; preference for unilateral rupture is then a consequence of (3). 

The two directivity measures are often expressed in terms of strength and along-fault direction; respectively, these correspond to the magnitude and sign of _D_ or _E_ . In some situations, a signed measure of directivity is useful, e.g., when comparing ruptures that travel in different directions along a fault. When referring to a single rupture, it is more common to drop the sign and just quote the direction of travel; e.g., _WaldandHeaton_ [1994] describe the 1992 Landers earthquake in which unilateral rupture propagated in the NW direction along a series of faults. 

In our modeling study, there are no map directions against which to define the sign of rupture directivity. However, we find it useful to retain the sign of _D_ and _E_ so that rupture direction can be compared against other ruptures. We also define the sign of _D_ and _E_ , so it has precise meaning with respect to the position of the injection well: negative and positive signs for ruptures traveling, respectively, toward and away from the well. Note, this implies that _𝛼_ must also be defined with respect to the position of the injection well, i.e., _𝛼_ = 0 indicates the hypocenter is on the side of the rupture nearest the injection well. 

### **2. Model Description** 

Our model estimates two properties of earthquakes on faults with arbitrary shear stress heterogeneity: (i) the location of the earthquake hypocenter and (ii) the final length of the ruptured section of the fault. We determine hypocenter location by a Mohr-Coulomb criterion that takes the pore pressure evolution on the fault into account. To estimate rupture extent, we consider a bilaterally expanding crack and solve the equations of motion for the two crack tips to identify where each arrests, yielding a final rupture length. 

DEMPSEY AND SUCKALE 

INDUCED SEISMICITY: DIRECTIVITY BIAS 

3 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012550 

**Table 1.** Table of Symbols and Acronyms<sup>a</sup> 

|Symbol|Meaning|
|---|---|
|_a_±,_ac_|Crack tip position, critical crack length|
|_A_,_B_|RS direct effect, state evolution parameter|
|_c_1,_c_2|Fitting parameters|
|_cs_|Shear wave velocity|
|_Cr_|Pressurization/criticality ratio|
|_Cw_|Well conductance term|
|_D_|Directivity ratio|
|_Dc_|Critical slip distance|
|_E_|Proportion unilateral rupture|
|_f_,_f_0,_fs_,_fr_,_fp_|Friction coefficient, RS reference, static, residual, peak|
|_G_|Energy release rate|
|_k_|Spatial wavenumber|
|_K_±|Stress intensity factor|
|_L_,_L_0,|Rupture, fault length|
|_n_|Fractal exponent|
|_MW_|Earthquake magnitude|
|_PD_,_P𝜏_,_P𝛼_|PDF for directivity ratio, stress, hypocenter location|
|_P_0|Pore pressure|
|_xh_|Hypocentral location on fault|
|Δ_P_,Δ_P_inj|Overpressure, value applied at injector|
|Δ_P_max|Overpressure causing tensile failure|
|_V_0,_V_min,_V_max|Reference slip velocity, initial, maximum coseismic|
|_v_±|Crack tip propagation velocity|
|_𝛼_|Hypocentral location inside rupture (normalized)|
|Γ|Fracture energy|
|_𝜅_|Permeability|
|_𝜇_|Shear modulus|
|_𝜇𝜏_|Mean of stress PDF|
|_𝜃_,_𝜃ss_|RS state variable, steady state value|
|_𝜙_|Porosity|
|_𝜎n_|Normal stress|
|_𝜎𝜏_,_𝜎𝛼_|Standard deviation of_P𝜏_and_P𝛼_|
|_𝜏_,_̄ 𝜏_|Shear stress, average on fault|
|_𝜏s_,_𝜏r_,_𝜏p_|Static strength, residual, and peak|
|_𝜌_|Fluid density|
|_𝜂_|Fluid viscosity|
|Acronym||
|2DF|2-D fault catalog|
|EGS|Enhanced Geothermal System|
|H1|Advancing front catalog|
|KS|Kolmogorov-Smirnov|
|MDSBI|Multidimensional Spectral Boundary Integral rupture code|
|PDF|Probability density function|
|RS|Rate and state|
|TR0|Tectonic Reference catalog|

aStarred symbols (∗) refer to dimensionless quantities. Stress variables with the subscript 0 refer to initial quantities when Δ _P_ = 0. 

DEMPSEY AND SUCKALE 

INDUCED SEISMICITY: DIRECTIVITY BIAS 

4 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012550 

#### **2.1. Stress and Strength Definitions** 

It is useful to start by defining terminology and nondimensional variables that appear ubiquitously in this paper. A fault is commonly conceptualized as a 2-D planar discontinuity embedded in the 3-D crust. Resolved upon the fault is a traction vector that, for an arbitrary basis aligned with the fracture plane, has one component normal to the faultplane,thenormal stress, _𝜎n_ , and two in-plane shear stresses. In our model,weconsider a cross section through the fault plane in the direction of rupture propagation, which reduces the fault to a 1-D discontinuity embedded in a 2-D domain. In this case, there is only a single shear stress component, _𝜏_ . 

Failure on a fault is assumed to be governed by the Mohr-Coulomb criterion with initial and pressure-modified valuesofthestaticstrengthgivenbyequation(1).Duringanearthquake,frictionalweakeningontheinterface causesstrengthtodecreasetoaresidualvalue, _𝜏r,_ 0,withassociatedfrictioncoefficient, _fr_ .Similarto(1),residual strength is modified by an increase in fluid pressure so that we write 

We assume that _𝜏_ drops to _𝜏r_ during rupture, i.e., stress equals residual strength, and in doing so neglect here the physics of overshoot or undershoot [ _Kanamori and Rivera_ , 2006]. 

#### **2.1.1. Nondimensional Parameters** 

While our model is dimensional, it is useful to define nondimensional parameters for general discussion of model results. We use _𝜏s,_ 0 and _𝜏r,_ 0 to define the nondimensional pressure change, following the convention that all nondimensional quantities are starred (<sup>∗</sup> ) 

Nondimensional residual and static strengths are defined relative to _𝜏r,_ 0 

from which it follows that _𝜏r_<sup>∗</sup> _,_ 0<sup>= 0 and</sup><sup>_𝜏_</sup> _s_<sup>∗</sup> _,_ 0<sup>= 1. All stresses with the subscript 0 imply Δ</sup><sup>_P_∗= 0.</sup> 

In contrast to (6) and (7), nondimensional shear stress is defined relative to the residual strength, _𝜏r_ , which could be modified by changes in pressure 

The Mohr-Coulomb criterion (1) is then written 

which accounts for the two mechanisms of triggering: an increase in tectonic stress (increasing _𝜏_ 0<sup>∗)or</sup> overpressure leading to static strength reduction (increasing Δ _P_<sup>∗</sup> ). 

We refer to the quantity _𝜏_<sup>∗</sup> as the potential stress drop. It incorporates both the shear stress on the fault, _𝜏_ 0<sup>∗,</sup> as well as the lowering of residual strength at elevated fluid pressure, Δ _P_<sup>∗</sup> , into a single quantity that represents the possible reduction in shear stress that can occur during rupture. The value of potential stress drop averaged over the entire fault is denoted _̄ 𝜏_<sup>∗</sup> , which is similar to the definition of _Ripperger et al._ [2007] except that our _𝜏r_ has pressure dependence and thus changes during injection. The actual stress drop, Δ _̄𝜏_<sup>∗</sup> , is the integral of _𝜏_<sup>∗</sup> over the ruptured portion of the fault, weighted by an assumed elliptical slip distribution [ _Madariaga_ , 1979] 

where _z_<sup>∗</sup> spans the rupture. 

DEMPSEY AND SUCKALE 

INDUCED SEISMICITY: DIRECTIVITY BIAS 

5 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012550 

One additional constraint is that stress conditions on the fault remain in a shear failure regime, which requires that Δ _P_<sup>∗</sup> _<_ Δ _P_ max<sup>∗=</sup><sup>_fr_∕(</sup><sup>_fs_−</sup><sup>_fr_) (equivalent to Δ</sup><sup>_P <_(</sup><sup>_𝜎n_−</sup><sup>_P_0)).</sup> 

We use the fault length, _L_ 0, to nondimensionalize all spatial units; e.g., _x_<sup>∗</sup> = _x_ ∕ _L_ 0. Nondimensional time, _t_<sup>∗</sup> , is defined in terms of the timescale for pressure diffusion through the fault of permeability, _𝜅f_ 

where _𝜌_ is fluid density (∼ 10<sup>3</sup> kg m<sup>−3</sup> ), _g_ is the acceleration of gravity, and _𝜂_ is the viscosity of water (∼ 8 _._ 9 × 10<sup>−4</sup> Pa s). 

#### **2.2. One-Dimensional Fracture Model** 

#### **2.2.1. Modeling Approach, Approximations, and Limitations** 

The goal of this study is to use a model for 1-D fracture mechanics to provide insight into earthquakes on 2-D faults. This approach is attractive as there exist a number of exact integral solutions for 1-D fracture propagation [e.g., _Eshelby_ , 1969; _Rice_ , 1980], and thus, the computational expense of dynamic 2-D rupture simulations is avoided. Nevertheless, there are limitations associated with the reduction of dimensionality and these are discussed below. 

The principal limitation is the exclusion of 2-D effects, primarily the ability of rupture on a 2-D fault to skirt around a barrier that might otherwise impede propagation on a 1-D fault. The 1-D models used here also make several simplifying assumptions about friction evolution such that dynamic overshoot and aseismic slip are unaccounted. However, in spite of these limitations, 1-D fracture models replicate several features of earthquakes observed in nature or in the laboratory including a distribution of magnitudes [ _Ampuero et al._ , 2006], the relationship between the size of frictional slip precursors and the level of shear stress [ _Kammer et al._ , 2015], and critical fracture lengths required for a transition from aseismic slip to runaway sliding [ _Ampuero and Ben-Zion_ , 2008; _Galis et al._ , 2015]. In addition, some features of the 1-D crack model appear to scale to more complex simulations of 2-D rupture, such as a critical level of available stress drop above which there is transition from Gutenberg-Richter to Characteristic Earthquake statistics [ _Ampuero et al._ , 2006; _Ripperger et al._ , 2007]. 

Thus, we adopt a conservative approach to interpreting insights gained from a 1-D model and their implications for the behavior of 2-D fault ruptures: a qualitative agreement is expected depending on specific consideration of the neglected 2-D rupture effects. Quantitative agreement is less likely, and, as such, caution is exercised in quantitative comparisons between model results and observations. 

#### **2.2.2. Crack Tip Equation of Motion** 

Arrest of a rupture front propagating along a fault is modeled using fracture mechanics arguments. We consider bilateral propagation of a finite, mode III crack embedded in an infinite homogeneous, isotropic elastic medium (Figure 1). The fracture is contained in the _x_<sup>∗</sup> - _z_<sup>∗</sup> plane with the normal direction parallel to the _y_<sup>∗</sup> axis and the two crack tips propagating in the negative and positive _x_<sup>∗</sup> directions. In a purely elastic framework, shear slip on the crack results in a stress singularity at the crack tip. One way to address the nonphysical singularity is to consider, as the tip advances, the energy that enters and is consumed within an infinitesimal region enclosing the tip. This defines the nondimensional energy release rate, _G_<sup>∗</sup> , which is energy release per unit area advance of the crack tip. _Eshelby_ [1969] expresses the energy release rate at one tip of a finite, mode III crack, expanding along the _x_<sup>∗</sup> axis with initial position at _x_<sup>∗</sup> = 0 

where _v_<sup>∗</sup> (= _v_ ∕ _cs_ ) is the nondimensional velocity at which the crack tip is propagating, _cs_ is the shear wave speed in the medium, _𝜇_<sup>∗</sup> = _𝜇_ ∕( _𝜏s,_ 0 − _𝜏r,_ 0) is the nondimensional shear modulus, and the nondimensional stress intensity factor, _K_<sup>∗</sup> , is given by 

where _a_<sup>∗</sup> is the position along the _x_<sup>∗</sup> axis of the crack tip and _𝜏_<sup>∗</sup> is the potential stress drop behind the advancing crack tip. Note, this form of _K_<sup>∗</sup> assumes _𝜏_<sup>∗</sup> =0 for _x <_ 0. 

DEMPSEY AND SUCKALE 

INDUCED SEISMICITY: DIRECTIVITY BIAS 

6 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012550 

**Figure 2.** (a) Evolution of the crack tip velocity, _v_<sup>∗</sup> , on a fault where _𝜏_ 0<sup>∗</sup><sup>_>_0 (energy source) except for a narrow region of</sup><sup>_𝜏_</sup> 0<sup>∗</sup><sup>_<_0 (energy</sup> sink) beginning at crack tip position _a_<sup>∗</sup> 1<sup>. (b) Same as for Figure 2a</sup> but for a wider region of _𝜏_ 0<sup>∗</sup><sup>_<_0. In this case, the rupture arrests at</sup> crack tip position _a_<sup>∗</sup> 2<sup>. Note, the critical crack length,</sup><sup>_a_</sup> _c_<sup>∗, indicates</sup> where rupture velocity first becomes positive. In this simple example, we assume there is no pressure change, i.e., _𝜏_<sup>∗</sup> = _𝜏_ 0<sup>∗.</sup> 

This approximation of fault rupture necessarily imposes a number of simplifications on what is acknowledged to be a complex physical problem. For example, it assumes a planar interface whereas real faults are known to be geometrically complex [e.g., _Power et al._ , 1988; _Candela et al._ , 2009]. It neglects the interacting stress waves that diffract back and forth between the two tips of a propagating rupture (discussed further below). It neglects the effects of a free surface and therefore will be less accurate for events that rupture to the surface. It assumes homogeneity of the rock matrix and therefore cannot capture bimaterial effects [e.g., _Ben-Zion_ , 2001] or other consequences of inhomogeneity. Nevertheless, this relatively simple model captures much of the fundamental physics of crack propagation and is therefore a useful (and fast) tool for exploring first-order earthquake behavior. 

For two surfaces in frictional contact, we assume that energy consumed within the crack tip region is used to weaken the strength of the contact surface from the peak value that shear stress reaches during rupture, _𝜏p_<sup>∗,totheresidualvalue,</sup><sup>_𝜏_</sup> _r_<sup>∗.Suchfric-</sup> tional weakening is not instantaneous but rather occurs over the slip-weakening distance, _D_<sup>∗</sup> _c_<sup>. The work required to achieve fric-</sup> tional weakening from _𝜏p_<sup>∗to</sup><sup>_𝜏_</sup> _r_<sup>∗definesthe</sup> fractureenergy, Γ<sup>∗</sup> .Settingtheexpressionfor energy release rate (12) equal to the fracture energy, i.e., _G_<sup>∗</sup> = Γ<sup>∗</sup> , yields an equation of motion for the position of the crack tip 

For constant _𝜏_<sup>∗</sup> , the expression for the stress intensity factor (13) reduces to _𝜏_<sup>∗</sup><sup>~~√~~</sup> 8 _a_<sup>∗</sup> ∕ _𝜋_ . Inserting this in (14) and requiring the numerator to be positive yields an expression for the critical crack length for rupture propagation 

Assuming that initially _a_<sup>∗</sup> _> a_<sup>∗</sup> _c_<sup>, then if</sup><sup>_𝜏_∗remains positive (shear stress exceeds residual strength) and large</sup> enough the crack tip velocity will accelerate and approach the shear wave velocity, _cs_ (or _v_<sup>∗</sup> approaches one, see Figure 2). If the crack tip enters a region of _𝜏_<sup>∗</sup> _<_ 0 (shear stress is less than residual strength), the energy release rate decreases and the crack tip velocity will decrease. Depending on the size of such regions, the 

DEMPSEY AND SUCKALE 

INDUCED SEISMICITY: DIRECTIVITY BIAS 

7 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012550 

crack tip velocity may drop to zero, indicating arrest of the propagating rupture. Finding the locations where _v_<sup>∗</sup> = 0 is central in determining the length of fault rupture and thus its directivity ratio. 

In the models considered here, shear stress is assumed to be heterogeneous and spatially correlated, i.e., _𝜏_ 0<sup>∗(</sup><sup>_x_∗). Furthermore, the definition of</sup><sup>_𝜏_∗includes the dimensionless pressure change, Δ</sup><sup>_P_∗, which is also not</sup> likely to be constant in space, e.g., the highest pore pressures are often located near to injection wells. For arbitrary spatial variation of fault shear stress, _K_<sup>∗</sup> in (13) is computed by convolution of _𝜏_<sup>∗</sup> ( _x_<sup>∗</sup> ) with 1∕ ~~√~~ _x_<sup>∗</sup> . 

For a finite crack, where two crack tips propagate away from one another in the + _x_<sup>∗</sup> and − _x_<sup>∗</sup> directions, approximate versions of the equations of motion are 

where _a_ + and _a_ − are respectively the positions of the crack tip in the + _x_<sup>∗</sup> and − _x_<sup>∗</sup> directions. Equation (16) is an extension of (13) and (14) that explicitly neglects interaction between the two crack tips, such as occurs when stress waves diffract back and forth along the crack [e.g., _Ing and Ma_ , 1997]. The stress intensity factor _K_<sup>∗</sup> for a crack of finite size and heterogeneous stress drop, and incorporating such interactions is given by _Rice_ [1980], equation (5.21). These two expressions for _K_<sup>∗</sup> (16) bound the effects of tip interactions. We use the approximation (16) because this form is efficient to solve by convolution. The adequacy of this and other model approximations is evaluated by comparison against dynamic rupture simulations (Appendix C). 

#### **2.3. Stress Heterogeneity** 

We conceptualize shear stress heterogeneity on a fault as the cumulative effect of many earthquakes, each contributing a spatially complex stress drop. This, in turn, is associated with complex slip patterns and geometric roughness. A number of studies have treated fault roughness, patterns of coseismic slip and stress drop as spatially correlated fields conforming to an underlying fractal model [ _Power et al._ , 1988; _Candela et al._ , 2009; _Andrews_ , 1980; _Herrero and Bernard_ , 1994; _Mai and Beroza_ , 2002; _Ampuero et al._ , 2006]. For a spatially varying field, _𝜓_ , the fractal spatial correlation model is defined by power law dependence of the amplitude spectrum, i.e., 

where _̃ 𝜓_ is the Fourier transform of _𝜓_ , _k_ is the spatial wave number, and _n_ is the fractal exponent. For example, fault roughness is characterized by _n_ = 2 _._ 5–3.0 [ _Power et al._ , 1988; _Candela et al._ , 2009] and coseismic slip distributions by _n_ = 1 _._ 7–2.0 [ _Andrews_ , 1980; _Herrero and Bernard_ , 1994; _Mai and Beroza_ , 2002]. 

We assume that shear stress on a fault, _𝜏_ 0<sup>∗,isconsistentwithafractalmodelwithexponent</sup><sup>_n_=0</sup><sup>_._25.</sup> A full analysis of this parameter, including an appropriate range of values obtained from observational studies as well as its implications for the magnitude-frequency distribution of modeled catalogs, is included in the second paper. Figure 3a shows an example of _k_<sup>−0</sup><sup>_._25</sup> shear stress heterogeneity. Spatially correlated profiles are generated by multiplying the wave number vector _k_<sup>−0</sup><sup>_._25</sup> by random phase angles and then taking the inverse Fourier transform. This generates zero-mean spatially correlated noise with values approximately drawn from a Gaussian probability density function (PDF, Figure 3b). 

The issue of an appropriate PDF for values of _𝜏_ 0<sup>∗has received some attention recently. Generally, normal distri-</sup> butions are used in dynamic rupture modeling studies [e.g., _Ripperger et al._ , 2007; _Aagaard and Heaton_ , 2008; _Dieterich et al._ , 2015]. _Helmstetter and Shaw_ [2006] suggests that postrupture shear stress changes should followanexponentialdistribution,whichresultsinOmori-typedecayofaftershocksinasimplifiedrate-and-state friction model. In this study, we use a positively skewed Gumbel distribution for the stress PDF: 

where _𝜇𝜏_<sup>∗and</sup><sup>_𝜎_</sup> _𝜏_<sup>∗are the distribution mean and standard deviation. For large</sup><sup>_𝜏_</sup> 0<sup>∗, the argument of the sec-</sup> ond exponential factor in (18) approaches zero; thus, the right-hand tail of (18) approximates an exponential, consistent with the result of _Helmstetter and Shaw_ [2006]. Figure 3 compares two profiles sharing the same spatial correlation before and after rescaling to a Gumbel PDF. The primary effect is to accentuate peaks in shear stress where an earthquake is likely to be triggered. 

DEMPSEY AND SUCKALE 

INDUCED SEISMICITY: DIRECTIVITY BIAS 

8 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012550 

**Figure 3.** Examples of 1-D heterogeneous fault shear stress profiles. A. _k_<sup>−0</sup><sup>_._25</sup> spatially correlated shear stress generated by applying random phase angles to a _k_<sup>−0</sup><sup>_._25</sup> profile in the wavenumber domain. This filtering procedure outputs a stress profile with values whose PDF approximately conforms to a Gaussian distribution (B) with mean, _𝜇𝜏_<sup>∗=-0.54</sup> (vertical dashed line), and standard deviation, _𝜎𝜏_<sup>∗=0.225. C. The same stress profile but with the PDF rescaled to a</sup> Gumbel distribution (D, see also equation (18)) with the same mean and standard deviation. 

#### **2.4. Rupture Triggering and Hypocenter Determination** 

An instability grows into a propagating rupture when shear stress over a sufficiently large region of a fault—the critical crack length, _a_<sup>∗</sup> _c_<sup>—isabovethestaticstrength,</sup><sup>_𝜏_</sup> _s_<sup>∗.Thehypocenterlocationmustbe</sup> determined before the crack tip equation of motion (16) can be used to estimate rupture length. 

Tectonic earthquakes are triggered as a result of far-field plate motion that transfers elastic strain onto a fault, incrementally increasing shear stress at the frictional interface. In our model, we assume this process operates uniformly across the fault. For a given heterogeneous shear stress profile (e.g., Figure 3c), rupture nucleates at the location of highest shear stress on the fault—the earthquake hypocenter, _xh_<sup>∗—after stress increase,</sup> Δ _𝜏_ fail<sup>∗=</sup><sup>_𝜏_</sup> _s_<sup>∗−max(</sup><sup>_𝜏_</sup> 0<sup>∗(</sup><sup>_x_∗)). Potential stress drop on the fault when the rupture length is computed is</sup><sup>_𝜏_∗=</sup> _𝜏_ 0<sup>∗+ Δ</sup><sup>_𝜏_</sup> fail<sup>∗.</sup> 

In contrast, the triggering mechanism for an induced earthquake is a reduction of _𝜏s_<sup>∗inlocationsof</sup> elevated pore pressure. Pressure evolution, and thus strength reduction, has spatial and temporal components; i.e, Δ _P_<sup>∗</sup> ( _x_<sup>∗</sup> _, t_<sup>∗</sup> ) implies _𝜏s_<sup>∗(</sup><sup>_x_∗</sup><sup>_, t_∗).Therefore,welookforthefirstinstanceintime,</sup><sup>_t_</sup> _h_<sup>∗,whenthe</sup> Mohr-Coulomb criterion (9) is satisfied (this is the event time) and take the location where it is satisfied as the hypocenter, _xh_<sup>∗.</sup> 

One important distinction is that whereas we have assumed for tectonic loading the stress increase is uniform across the fault, for pressurization, strength reduction is not uniform. Instead, it occurs only where there is a local elevation of the pore pressure. Therefore, constraining the shape, magnitude, and time evolution of the pressure plume becomes an important consideration in our analysis of induced seismicity. 

#### **2.5. Pressure Plume Evolution** 

Evolution of pore pressure on a fault depends on the geometric and hydrologic properties of the combined aquifer-fault system as well as operational parameters such as injection rate or wellhead pressure. We perform reservoir simulations of fault pressure evolution based on Darcy flow for two idealized injection geometries that might arise in real-world cases of induced seismicity (Figure 4). We also consider one scenario in which pressure evolution is a prescribed function. The three scenarios are the following: 

1. Two-dimensional or radial flow, describing injection directly into a planar fault and fluid flow along both in-plane directions. This also describes pressure buildup in a horizontally extensive aquifer due to a fully penetrating injection well. 

2. Extended two-dimensional flow, as might arise during injection into a horizontally extensive aquifer overlying impermeable crystalline basement that contains a vertically oriented, permeable fault. Pressure evolution both in the aquifer and the fault is 2-D but in planes perpendicular to each other. This geometry 

DEMPSEY AND SUCKALE 

INDUCED SEISMICITY: DIRECTIVITY BIAS 

9 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012550 

**Figure 4.** Summary of pressure evolution scenarios for (a and b) 2-D radial flow, (c and d) extended 2-D flow in an aquifer with a connected basement fault, and (e and f) a two-value advancing pressure front. Plots show pressure rise along the fault in each flow scenario at different times for _𝜅f_ =10<sup>−14</sup> m<sup>2</sup> . The arrow in Figure 4a indicates the general change in profiles with increasing time. In Figure 4e, both Δ _P_<sup>∗</sup> and the inferred permeability change are described by a Heaviside step function whose position, _rf_<sup>∗, advances at a rate proportional to</sup> √ _t_<sup>∗</sup> . For the 2-D flow and advancing front scenarios, Δ _P_<sup>∗</sup> is symmetrical about _x_<sup>∗</sup> = 0 _._ 5. 

is appropriate for basement seismicity triggered by saltwater disposal in the central U.S. [e.g., _Horton_ , 2012; _Zhang et al._ , 2013]. 

3. Advancing two-value step function. This assumes rapid pressure buildup inside a near-well region of permeability enhancement and a sharp pressure drop at a defined front. Studies suggest that [ _McClure and Horne_ , 2011; _Gischig and Wiemer_ , 2013] this is a reasonable description of pressure evolution when permeability enhancement dominates. 

For the 2-D and extended 2-D geometries, spatiotemporal evolution of pressure buildup is mainly controlled by fault permeability, _𝜅f_ , injection pressure, Δ _P_ inj, and, for the extended 2-D geometry, the location of the well relative to the fault. For single-phase, isothermal flow, pressure evolution is computed by solving for mass conservation assuming a Darcy-flow law 

DEMPSEY AND SUCKALE 

INDUCED SEISMICITY: DIRECTIVITY BIAS 

10 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012550 

**Figure 5.** Well and fault geometry for extended 2-D reservoir simulation. (a) Three locations of injection wells relative to connected basement fault. (b) Pressure buildup on the basement fault for the three locations. 

where **_q_** is mass flux, _P_ is pore pressure, _𝜌_ and _𝜂_ are the density and viscosity of water and have prescribed polynomial dependence on _P_ , _𝜅_ and _𝜙_ are permeability and porosity of rock and can be spatially variable but are assumed to be constant in time, _g_ is gravity, and _Q_ is a mass source term for injection at fixed pressure 

_Q_ = _Cw_ (Δ _P_ inj −( _Pw_ − _Pw,_ 0)) _,_ (20) 

where _Pw_ is the pore pressure at the location of the well, _Pw,_ 0 isitsinitialvalue,and _Cw_ isawellconductance term. The injection pressure, Δ _P_ inj, is the overpressure at the bottom of the well and will be higher than the wellhead pressure if the formation is initially underpressured. In this work, we use the implementation of Equations (19) and (20) in the flow simulator FEHM [ _Zyvoloski_ , 2007]. 

We perform simulations of injection and pressure evolution for the two flow geometries for representative ranges of Δ _P_ inj (1 to 20 MPa) and _𝜅f_ (10<sup>−12</sup> to 10<sup>−16</sup> m<sup>2</sup> ). We have tested both open (constant pressure) and closed (zero flow) boundary conditions and will present results for both when there is an effect on simulation outcomes. For the 2-D geometry, the computational domain has the same dimensions as the fault, _L_ 0, and is meshed with a rectangular grid with refining resolution toward an injection well situated at 

the center of the fault, _x_<sup>∗</sup> = 0 _._ 5. In the first part of this 

two-part series, we model injection against a fixed pressure. In reality, injection occurs at a fixed or unsteady flow rate, sometimes with restrictions on the operating wellhead pressure. Variable rate injection is considered in the companion paper, specifically addressing a sequence of earthquakes that occurred in Arkansas in 2010–2011 [ _Horton_ , 2012]. 

For the extended 2-D geometry, the position of the injection well relative to the fault must be specified. We construct a computational domain that is large enough for boundary effects on the fault and injection well to be negligible. Aquifer permeability is set to 10<sup>−14</sup> m<sup>2</sup> and porosity to 10%, which is of a typical range for disposal formations and ensures enough pressure buildup on the fault for earthquakes to be triggered. We consider three different locations of the injection well, all aligned with the strike of the fault: (i) off fault, (ii) end of fault, and (iii) midfault (Figure 5a). We have also investigated a range of locations that are offset from the strike of the fault and found that they produce seismicity very similar to the off-fault position. Note that while the reservoir simulation captures how fluid flows downward into the fault from the aquifer, in the earthquake simulations presented here, we consider only lateral variations in pressure along the fault. 

The 2-D and extended 2-D scenarios assume that fault permeability is unaffected by earthquake activity. However, injection for the purpose of creating an Enhanced Geothermal System is explicitly designed to achieve permeability stimulation through self-propping shear failure [ _Majeretal._ , 2007]. Induced seismicity associated with other operations may also trigger permeability enhancement. The final scenario therefore is a simple model of pressure evolution that assumes a stimulated region, symmetric about the injection well, in which permeability, _𝜅f_<sup>_s_, is much higher than on the rest of the fault,</sup><sup>_𝜅_</sup> _f_<sup>0. We assume that growth of the zone has a</sup> square root time dependence, i.e., _rf_<sup>∗(</sup><sup>_t_)=</sup> √ _t_<sup>∗</sup> , where _rf_<sup>∗is the radial distance between the stimulation front</sup> and the injection well and, in this case, dimensionless time is given, _t_<sup>∗</sup> = _tD_ ∕ _L_<sup>∗</sup> 0<sup>,withadiffusivity,</sup><sup>_D_.This</sup> form for propagation of the damage front is motivated by analytical solutions from _McClure and Horne_ [2010] and _Lewis et al._ [2013] derived from the diffusivity equation for a range of problem geometries and under conditions of permeability enhancement. 

We further assume that pressure has sufficient time to equilibrate with the evolving permeability distribution. In the limiting case where _𝜅f_<sup>_s_∕</sup><sup>_𝜅_</sup> _f_<sup>0→∞, pressure is constant from the injection well to</sup><sup>_r_</sup> _f_<sup>∗(</sup><sup>_t_∗) and then declines</sup> 

DEMPSEY AND SUCKALE 

INDUCED SEISMICITY: DIRECTIVITY BIAS 

11 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012550 

rapidly for _r_<sup>∗</sup> _> rf_<sup>∗(</sup><sup>_t_∗). We approximate this pressure evolution by a radial step function</sup> 

where _H_ ( _r_<sup>∗</sup> ) is the Heaviside step function. As for the 2-D flow scenario, injection occurs at the center of the fault ( _x_<sup>∗</sup> = 0 _._ 5) about which Δ _P_<sup>∗</sup> is symmetrical. While more complex models for pressure and permeability evolution have been investigated [e.g., _McClure and Horne_ , 2011; _Miller_ , 2015; _Dempsey et al._ , 2015], the purpose here is to capture the essential features of such pressure evolution and to assess their impact on the seismicity observables of interest. For instance, in practical situations, one would expect some finite pressure drop across the stimulated region, and pressure within the region may either increase [ _McClure and Horne_ , 2010; _Lewis et al._ , 2013] or decrease over time [ _Dempsey et al._ , 2015] depending on the mechanisms of stimulation. 

We show snapshots of simulated fault pressure buildup, Δ _P_<sup>∗</sup> ( _x_<sup>∗</sup> _, t_<sup>∗</sup> ), for the three scenarios in Figure 4. For the 2-D flow geometry, at early time, overpressure is peaked sharply at _x_<sup>∗</sup> = 0 _._ 5 where injection occurs (Figures 4a and 4b). However, continued pressure rise along the rest of the fault means that the portion of the fault at or above a given overpressure increases with time. For extended 2-D flow, the pressure perturbation is less pronounced(Figures4cand4d).Whilethenear-wellregionstillexperiencesthehighestpressureandsharpest pressure gradients, this region is located away from the fault (in the aquifer). The shape of the pressure plume depends on the location of the injection well (Figure 5). The off-fault and end-of-fault wells generate a plume with monotonic pressure decrease along the fault, while the midfault well exhibits pressure decline either side of a peak at the center of the fault. 

#### **2.6. Earthquake Catalog Simulation** 

Having introduced the main components of our model, we now describe our procedure for simulating tectonic and induced earthquakes on 1-D faults and for building up a catalog of modeled earthquakes. There are three steps involved in modeling a single earthquake (Figure 6): 

1. Construction of a heterogeneous shear stress profile, _𝜏_ 0<sup>∗(</sup><sup>_x_∗), assumed to be spatially correlated according</sup> to a fractal model and with a PDF of values drawn from a Gumbel distribution (equation (18)). The required parameters for this step are the fractal exponent, _n_ , and the mean, _𝜇𝜏_<sup>∗, and standard deviation,</sup><sup>_𝜎_</sup> _𝜏_<sup>∗, of the</sup> stress PDF. 

2. Determination of hypocenter location, _xh_<sup>∗. For a tectonic event,</sup><sup>_x_</sup> _h_<sup>∗is the location of highest shear stress on</sup> the fault. For an induced event, profiles of evolving Δ _P_<sup>∗</sup> are tested for satisfaction of the Mohr-Coulomb criterion, with _xh_<sup>∗being the location where</sup><sup>_𝜏_</sup> 0<sup>∗(</sup><sup>_x_</sup> _h_<sup>∗) = 1 −Δ</sup><sup>_P_∗(</sup><sup>_x_</sup> _h_<sup>∗)</sup><sup>_fs_∕</sup><sup>_fr_. The required parameters for this step</sup> are geometry of the fault injection well system, injection pressure, Δ _P_ inj<sup>∗, fault permeability,</sup><sup>_𝜅f_, and the loca-</sup> tion of the injection well (for extended 2-D geometry). Static and residual friction coefficients, _fs_ and _fr_ , are also required. 

3. Calculationofruptureextent, _L_<sup>∗</sup> . Wemodelfaultruptureastwocracktipspropagatinginoppositedirections along the fault, both beginning at _xh_<sup>∗. The location where each crack tip arrests depends on the balance of</sup> energy source ( _𝜏_<sup>∗</sup> _>_ 0) and sink ( _𝜏_<sup>∗</sup> _<_ 0) regions on the fault. We compute crack arrest by solving the crack tip equation of motion (16) (see Appendix B for algorithm details). The required parameters for this step are _fs_ , _fr_ , and the fracture energy, Γ<sup>∗</sup> . 

One way to model an earthquake catalog is as an ensemble of fault ruptures, each simulated (following steps 1–3 above) on a fault with a different realization of _𝜏_ 0<sup>∗constructed from the same stress model (the same</sup> approach was taken by _Ampuero et al._ [2006] and _Ripperger et al._ [2007]). Constructing a catalog in this way averages out features and behavior attributable to any specific realization of shear stress heterogeneity while still incorporating heterogeneity in both triggering and rupture computations (steps 2 and 3 above). This is important for our probabilistic analysis of directivity ratio (this paper) and magnitude-frequency distributions (companion paper). 

#### **2.6.1. Evolving Fault Stress** 

It is expected that stress on a fault is modified by prior earthquakes. The ability of our model to approximate long periods or large amounts of seismicity thus depends on how we describe the evolving stress state. We continuewithastochasticapproachandproposethatattime, _t_<sup>∗</sup> ,averagestressonthefaulthasbeenmodified from its initial value and now reflects the distribution of pressure buildup, Δ _P_<sup>∗</sup> ( _x_<sup>∗</sup> _, t_<sup>∗</sup> ). Specifically, average stress is lower in regions of higher pressure increase (implicitly, more earthquakes have been triggered here and thus more stress released) and is nearer to its initial value in regions of minimal pressure rise (Figure 7b). 

DEMPSEY AND SUCKALE 

INDUCED SEISMICITY: DIRECTIVITY BIAS 

12 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012550 

**Figure 6.** Model demonstration of rupture (a) triggering and (b) propagation. In Figure 6a, for heterogeneous shear stress, _𝜏_ 0<sup>∗, successively larger pressure reductions are applied to the static strength (</sup><sup>_𝜏_</sup> _s_<sup>∗, blue profiles) until an</sup> intersection with _𝜏_ 0<sup>∗occurs—this is the earthquake hypocenter,</sup><sup>_x_</sup> _h_<sup>∗, indicated by a star. In Figure 6b left-hand and</sup> right-hand crack tips propagate outward from _xh_<sup>∗along the fault. The locations where they arrest determines the</sup> rupture size, _L_<sup>∗</sup> , and depends on the relative size and width of energy source ( _𝜏_<sup>∗</sup> _>_ 0) and sink regions ( _𝜏_<sup>∗</sup> _<_ 0). The algorithm used to determine _L_<sup>∗</sup> is described in Appendix B. 

Formally, stress at location, _x_<sup>∗</sup> , is a random variable drawn from a Gumbel distribution (18) with mean and standard deviation 

where _𝜇𝜏,_<sup>∗</sup> 0<sup>and</sup><sup>_𝜎_</sup> _𝜏,_<sup>∗</sup> 0<sup>are values for Δ</sup><sup>_P_∗= 0 (Figure 7a). Note, in this formulation, we implicitly assume that the</sup> ratio of the dimensional quantities _𝜇𝜏_ ∕ _𝜎𝜏_ is preserved; this is assumed to be an intrinsic feature of the stress relaxation process, and its relation to the Gutenberg-Richter _b_ value is explored further in the accompanying paper. Discretizing the pressure evolution into discrete steps, Δ _Pi_<sup>∗, we construct a subcatalog of fault realiza-</sup> tions for each step, where fault stress reflects Δ _Pi_<sup>∗(Figure 7b). The complete catalog is a weighted sum of all</sup> events in each subcatalog for each Δ _Pi_<sup>∗. The weights for each of</sup><sup>_j_events in</sup><sup>_i_subcatalogs,</sup><sup>_wi,j_, are calculated so</sup> that the sum of all event stress drops in a spatiotemporal increment matches the stress change on the fault at that time and location, i.e., 

where _x_ 0<sup>∗,</sup><sup>_x_</sup> 1<sup>∗,</sup><sup>_t_</sup> 0<sup>∗, and</sup><sup>_t_</sup> 1<sup>∗define the spatiotemporal increment and Δ</sup><sup>_̄𝜏_∗and</sup><sup>_L_∗are the average stress drop and</sup> rupture length of the modeled event. 

This approach to modeling stress evolution makes two assumptions: (i) that interactions between subsequent earthquakes can be neglected over large ensembles and (ii) that both _n_ and the Gumbel stress PDF (with different _𝜎𝜏_<sup>∗and</sup><sup>_𝜇_</sup> _𝜏_<sup>∗) remain a reasonable model for heterogeneous stress on the evolving fault. One way</sup> to test these assumptions would be through deterministic simulation of a large number of earthquakes on a single fault, accounting for stress changes associated with each rupture, e.g., stress concentrations remaining at the rupture tip [ _Kammer et al._ , 2015] or heterogeneity arising from geometric complexity [e.g., _Helmstetter andShaw_ , 2006]. In describing the evolving fault stress in average terms, spatiotemporal aftershock clustering is neglected. 

DEMPSEY AND SUCKALE 

INDUCED SEISMICITY: DIRECTIVITY BIAS 

13 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012550 

**Figure 7.** An example illustrating construction of an initial stress, _𝜏_ 0<sup>∗, for a subcatalog representing the fault stress state</sup> when the pressure buildup distribution, Δ _P_<sup>∗</sup> . On the left axes, a realization of _𝜏_ 0<sup>∗for Δ</sup><sup>_P_∗= 0. Initial static,</sup><sup>_𝜏_</sup> _s_<sup>∗</sup> _,_ 0<sup>, and</sup> residual strength, _𝜏r_<sup>∗</sup> _,_ 0<sup>, are shown as dashed and solid horizontal lines, respectively. On the right axes, the same stress</sup> state is shown modified to account for nonzero Δ _P_<sup>∗</sup> (in this case, a pressure profile for injection into a 2-D geometry). 

### **3. Directivity Properties of Tectonic Earthquakes** 

In this section, we discuss simulation and analysis of catalog TR0 (Tectonic Reference) which approximates background seismicity triggered by tectonic plate motion. Catalog TR0 serves as a benchmark for when we later compare modeled catalogs of tectonic and induced earthquakes. Furthermore, we can compare the range of directivity ratios, _D_ , for modeled earthquakes to that obtained from seismological observations. 

Catalog TR0 is constructed from a single earthquake simulated on each of 10<sup>5</sup> faults. Each fault has a different realization of heterogeneous stress, _𝜏_ 0<sup>∗, constructed from the same parameterization of the fractal stress</sup> model. Friction parameters are the same for all earthquake calculations. TR0 is an approximation of a real earthquake catalog, which might comprise a population of events on faults of different sizes ( _L_ 0) sometimes from regions that may have different stress ( _n_ , _𝜇𝜏_<sup>∗,</sup><sup>_𝜎_</sup> _𝜏_<sup>∗)orfrictionproperties(</sup><sup>_fr_,</sup><sup>_fs_,Γ∗).Wecouldreplicate</sup> these conditions by mixing earthquakes modeled on faults of different sizes or parameters; however, this is an unnecessary step for the present study. In contrast to simulated catalogs of induced earthquakes considered later, TR0 is not constructed as an ensemble sum of faults with different stress states (section 2.6.1). This is because we consider tectonic fault stress as quasi-steady, i.e., an average over the seismic cycle. 

#### **3.1. Model Parameterization** 

We use a rate-and-state friction model to estimate values for the friction coefficients _fs_ and _fr_ , and the fracture energy, Γ<sup>∗</sup> . Laboratory sliding experiments reveal that rock friction evolves during the seismic cycle with a direct dependence on the sliding velocity as well as an evolutionary “state” effect [ _Dieterich and Kilgore_ , 1996; _Marone_ , 1998]. The rate-and-state friction model with slip law evolution of the state variable can be written as 

where _f_ is friction, _V_ is slip velocity, _𝜃_ is the state variable with steady value _𝜃ss_ , _A_ , and _B_ are the direct effect and state evolution parameters, _Dc_ is the critical slip distance, and _f_ 0 and _V_ 0 are reference values of friction and velocity. Following _Dunham et al._ [2011], we approximate _fs_ as the steady state value of friction at low slip velocity 

where _V_ min is the background slip velocity. During an earthquake, friction drops to a steady state value for the coseismic slip rate, _V_ max. This defines residual friction 

DEMPSEY AND SUCKALE 

INDUCED SEISMICITY: DIRECTIVITY BIAS 

14 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012550 

At the front of a propagating rupture, there is a rapid increase in friction (and shear stress) due to the direct velocity effect followed by the drop to _fr_ . Allowing for pressure change, Δ _P_<sup>∗</sup> , the maximum potential stress drop attained, _𝜏p_<sup>∗, as the rupture front passes a point is given</sup> 

where _fp_ is the friction change corresponding to shear stress increase at the rupture front. 

Defining the fracture energy for a rate-and-state friction model in terms of the drop from peak to residual strength [ _Rice_ , 1983], we then have 

Taking _A_ − _B_ = −0 _._ 004, _A_ = 0 _._ 015, _Dc_ = 10<sup>−5</sup> m, _f_ 0 = 0 _._ 6, _V_ 0 = 10<sup>−6</sup> m s<sup>−1</sup> , _V_ max = 10<sup>0</sup> m s<sup>−1</sup> , and _V_ min = 10<sup>−10</sup> m s<sup>−1</sup> [ _Rice_ , 1993] yields _fs_ = 0 _._ 64, _fr_ = 0 _._ 55, and _fp_ = 0 _._ 35. 

Friction coefficients are multiplied by effective normal stress, _𝜎n_ − _P_ 0, to yield fault strength. We estimate _𝜎n_ − _P_ 0 for a well-oriented strike-slip fault buried at a depth of 4 km. Assuming hydrostatic fluid pressure and an average crustal density of _𝜌_ = 2500 kg m<sup>−3</sup> , the effective intermediate principal stress (lithostatic minus hydrostatic) at this depth is vertical and approximately 60 MPa. Assuming this stress lies halfway between the other two horizontal principal stresses, then for a fault with _fs_ = 0 _._ 64, the optimal orientation for reactivation is ∼30<sup>∘</sup> to the maximum principal stress. At this orientation, _𝜎n_ − _P_ 0 is approximately 40 MPa. 

In the companion paper, we derive a magnitude estimate, _Mw_ , for modeled events in terms of rupture length, _L_<sup>∗</sup> , and average stress drop, Δ _̄𝜏_ . The magnitude scale is calibrated such that rupture of the entire fault corresponds to an _Mw_ 4.5 event, which is within the range of interest for induced seismicity. We then constrain parameters of the fractal stress model by requiring that the magnitude-frequency distribution for catalog TR0 be consistent with seismological observation, i.e., conforming to a Gutenberg-Richter model with a _b_ value of 1.15. For the simulations in this paper, we fix fractal exponent, _n_ = 0 _._ 25, stress PDF standard deviation, _𝜎𝜏_<sup>∗= 0</sup><sup>_._225, and</sup><sup>_𝜇_</sup> _𝜏_<sup>∗= −0</sup><sup>_._54.</sup> 

In implementing the model, we represent the heterogeneous shear stress profile that spans the length of the fault as a vector with 1024 nodes and require that modeled ruptures span at least five nodes. Since our model does not require time integration or the computation of numerical derivatives, the fault discretization does not affect the accuracy of our results, only the resolution of directivity ratio for small events. 

#### **3.2. Directivity Ratio** 

The distribution of directivity ratios, _D_ , for all events in catalog TR0 is summarized in Figure 8a. We represent the set of all directivity ratios as a PDF across the permitted range, [−1,1], to enable a comparison between samples of different sizes. Also shown is the directivity ratio PDF compiled by _McGuire et al._ [2002] from 42 large, shallow earthquakes. Because directivity ratios given in _McGuire et al._ [2002] are unsigned (sign is only meaningful when considering more than one rupture on a fault), it is equally valid to compare against either positive or negative directivities in Figure 8a. To illustrate this point, we compare observations and the model for both cases (to compare against the model for _D <_ 0, the observations of _McGuire et al._ [2002] are assigned a negative sign, grey symbols in Figure 8a). 

The distributions in Figure 8a are peaked at _D_ = −1 and 1 with a minimum around zero, although the modeled directivity PDF is not as strongly unilateral as the observations of _McGuire et al._ [2002]. The modeled directivity PDF is symmetric about zero in agreement with an assumed symmetric tectonic loading condition that imparts no bias toward forward or backward directed rupture. 

We obtain an estimate of the catalog size required for accurate representation of directivity PDFs through a convergence test. We first construct a test catalog from a subset of events randomly sampled from catalog TR0. We then compute a directivity PDF for the test catalog and calculate the relative error against the PDF for the complete catalog for _D_ = 0 and _D_ = 0 _._ 95 (Figure 8b). The error decays according to 1∕ ~~√~~ _N_ for sample size _N_ . For catalogs comprising 10,000 events, the relative error is small, ranging from 2 to 5%. Errors are smallest at the _D_ = −1 and 1 peaks of the PDF, and it is this section of the distribution that we are most interested in. 

DEMPSEY AND SUCKALE 

INDUCED SEISMICITY: DIRECTIVITY BIAS 

15 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012550 

**Figure 8.** (a) Directivity ratio PDF for all events in catalog TR0 (red) and for 42 earthquakes summarized in _McGuire et al._ [2002] (open circles). Note, for illustrative purposes, the _McGuire et al._ [2002] data are also shown for _D <_ 0 (grey symbols), which involves assigning a negative sign to their data. (b) Convergence of the modeled PDF in Figure 8a for different catalog sizes at _D_ = 0 and _D_ = 0 _._ 95. (c) Directivity ratio PDFs for different magnitude cutoffs. 

The directivity PDF is consistent in its shape across the modeled range of magnitudes (Figure 8c). For larger modeled earthquakes, however, the directivity PDF shows higher peaks at _D_ = −1 and 1, consistent with the _McGuire et al._ [2002] observations and indicative of a preference for unilateral rupture. 

#### **3.3. Approximate Form for the Directivity Ratio PDF** 

A second measure of rupture directivity is the proportion unilateral rupture, _E_ , defined in (2) as a linear function of the hypocentral location inside the ruptured area, _𝛼_ . Figure 9a plots a PDF of both _𝛼_ and _E_ . The PDF for _𝛼_ has a maximum at 0.5 (the center of the rupture) and the distribution is symmetric about this point. _Mai et al._ [2005] analyze the hypocentral locations of 51 earthquakes with finite source models. Their data are also shown in Figure 9a. Using a Kolmogorov-Smirnov test, they reject a null hypothesis that their observations of _𝛼_ are drawn from a uniform distribution. Instead, they fit a Gaussian distribution and obtain a best fit standard deviation of 0.23. 

Note, although the PDF of _𝛼_ is peaked at 0.5, this does not imply that most ruptures are bilateral. There is a nonlinear relationship between _𝛼_ and the directivity ratio, _D_ , such that even small deviations of _𝛼_ from 0.5 result in a large shift toward unilateral rupture. 

We obtain an approximate description of the directivity ratio PDF, _PD_ ( _D_ ), by a change of variable in the hypocentral location distribution, _P𝛼_ ( _𝛼_ ). An approximate form for _PD_ is later useful for applying statistical tests to detect directivity bias in a catalog of induced earthquakes. For _D_ ( _𝛼_ ) defined in (3) and inverse denoted _𝛼_ ( _D_ ), the change of variable is given 

We approximate _D_ ( _𝛼_ ) with a logistic curve of the form 

where we choose parameters _c_ 1 and _c_ 2 to yield the least squares best fit with equation (3) on the interval _𝛼_ =[0, 1]. Figure 9b compares the theoretical function equation (3) to the best fit logistic curve equation (30) with _c_ 1 = 1 _._ 01 and _c_ 2 = 11 _._ 67. 

DEMPSEY AND SUCKALE 

INDUCED SEISMICITY: DIRECTIVITY BIAS 

16 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012550 

**Figure 9.** (a) PDFs of hypocentral location inside rupture, including data from _McGuire et al._ [2002] (open circles) inverted using (30), best fit Gaussian curve to _McGuire et al._ [2002] data (black dashed curve), data from _Mai et al._ [2005] (bars), and catalog TR0 (red curve). (b) Relationship between directivity ratio, _D_ , and normalized hypocentral location inside rupture, _𝛼_ , for the simple 1-D rupture model in equation (3). The best fit logistic curve (30) with _c_ 1 = 1 _._ 01 and _c_ 2 = 11 _._ 67 is also shown (black dashed curve). (c) Directivity ratio PDFs, including data from _McGuire et al._ [2002] (open circles), and two theoretical PDFs assuming either a uniform (blue diamonds) or Gaussian PDF (red squares) for _𝛼_ . For comparison against the _McGuire et al._ [2002] data, markers plot average function value for the corresponding bin. The standard deviation of the Gaussian PDF is 0.22 and is obtained by a maximum likelihood fit against the _McGuire et al._ [2002] data and corresponds to the black dashed curve in Figure 9a. 

For _P𝛼_ , we assume a Gaussian distribution, as suggested by _Mai et al._ [2005] and consistent with the modeled distribution of _𝛼_ shown in Figure 9a. From symmetry, we assume a mean of 0.5 in which case _P𝛼_ is given 

where _𝛾_ normalizes _P𝛼_ on the interval _𝛼_ = [0, 1] and _𝜎𝛼_ is the distribution standard deviation. Using (30) and (31) in (29), we obtain the directivity ratio PDF as 

and associated cumulative distribution function 

where _̃ D_ = _D_ ∕ _c_ 1, _̃ 𝜎𝛼_ = _𝜎𝛼c_ 2 and erfc denotes the complementary error function. We estimate _𝜎𝛼_ by maximizing the log likelihood, 𝓁, generated from the 42 observations of directivity ratio, _Di_ , given in _McGuire et al._ [2002] 

which yields _𝜎𝛼_ = 0 _._ 22, in close agreement with _𝜎𝛼_ = 0 _._ 23 estimated by _Mai et al._ [2005]. Using this estimate for _𝜎𝛼_ , we obtain a good match to the modeled _P𝛼_ for catalog TR0 (Figure9a).Wealsocompute _PD_ andcompare this against the observations of _McGuire et al._ [2002]. In Figure 9c, we show _PD_ for a uniform hypocentral location PDF (setting _P𝛼_ = 1), which compares to Figure 7 in _McGuire et al._ [2002]. 

The analysis presented in this section assumes uniform loading of the fault and this is reflected in _PD_ as symmetry about _D_ = 0. However, nonuniform loading could occur at the boundary of creeping and locked sections of a fault [e.g., _Lapusta et al._ , 2000] or on locked asperities, and this could introduce a directivity bias specific to the fault. In addition, it has been suggested that some 

DEMPSEY AND SUCKALE 

INDUCED SEISMICITY: DIRECTIVITY BIAS 

17 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012550 

**Figure 10.** PDF comparisons between simulated catalogs TR0, H1, and 2DF. (a) PDF of hypocentral location on the fault, _xh_<sup>∗(note, Δ</sup><sup>_P_∗</sup> is symmetrical about _x_<sup>∗</sup> = 0 _._ 5 and so only half the fault is shown). (b) PDF of hypocentral location inside the rupture, _𝛼_ , and the corresponding PDF for proportion unilateral rupture, _E_ . Catalog means are indicated by dashed lines. Note, because _E_ is linearly related to _𝛼_ (equation (2)), their PDFs are a linear scaling of one another and can be represented on the same plot. (c) PDFs of directivity ratio, _D_ . The point at _D_ ∼−1 for catalog H1 (not shown) is 7.6. 

faults may have a preferred direction of rupture propagation due to bimaterial interface effects [ _Ben-Zion_ , 2001] and this too would be expected to modify the form of _PD_ . Nevertheless, the consistency of (32) with observations of directivity ratio (albeit, compiled for earthquakes on different faults) suggests that the approximation may be reasonable to first order. In addition, the ability of a simple 1-D fracture mechanics model to reproduce the observed directivity distribution for 2-D rupture indicates that (i) the model adequately approximates rupture physics and (ii) conclusions drawn from simulations of 1-D induced ruptures presented in the next section may be extended, at least qualitatively, to induced earthquakes on 2-D faults. 

### **4. Directivity Bias of Induced Earthquake Sequences** 

In this section, we discuss the construction and analysis of earthquake catalogs in which modeled events are triggered by an evolving pressure distribution on the fault. We consider first seismicity associated with injection directly onto a fault, with pressure evolution given by the limiting cases of 2-D flow, which assumes no permeability enhancement (catalog 2DF, Δ _P_ inj<sup>∗=0</sup><sup>_._74,</sup><sup>_𝜇_</sup> _𝜏_<sup>∗=−0</sup><sup>_._54,open</sup> boundaries) and the two-value advancing front, which assumes a large permeability enhancement (catalog H1, Δ _P_ inj<sup>∗= 0</sup><sup>_._74,</sup><sup>_𝜇_</sup> _𝜏_<sup>∗=</sup> −0 _._ 81). Catalogs are constructed according to the method in section 2.6 with all other simulation parameters the same as TR0. 

In contrast to the uniform distribution of TR0, for catalog 2DF, more events are triggered closer to the injection well because this is the location of highest pressure (Figure 10a). In addition, the distribution of hypocentral locations inside each rupture, _𝛼_ (Figure 10b), is no longer symmetric about 0.5: induced earthquakes are more likely to be triggered on the side of the rupture furthest from the injection well. As a result, the proportion of unilateral rupture, _E_ , is shifted in favor of backward directed rupture (rupture traveling toward the injection well). The PDFs for directivity ratio, _D_ , show an accentuated peak at _D_ ∼−1 (Figure 10c). The average values of _D_ 

and _E_ experience a negative shift. For the remainder of this paper, we use the average directivity ratio, _̄ D_ , as a quantitative measure of directivity bias. Catalog H1 presents similar results to 2DF except that there is a much stronger negative shift in _̄ D_ (and accompanying shifts in the distribution of _𝛼_ ). 

DEMPSEY AND SUCKALE 

INDUCED SEISMICITY: DIRECTIVITY BIAS 

18 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012550 

**Figure 11.** Dependence of directivity bias, _̄ D_ , for simulated catalogs in a 2-D flow geometry and varying pressurization/criticality ratios, _Cr_ . The color of the markers indicates the initial fault stress, as parameterized by _𝜇𝜏_<sup>∗.</sup> 

For a 2-D flow geometry, we consider how directivity bias varies for a range of injection pressure, Δ _P_ inj<sup>∗,andinitialfaultstress,</sup> parameterized by _𝜇𝜏_<sup>∗(Figure11).Boththe</sup> amount of pressure rise and the proximity of thefaulttofailurearerelevantquantities,and we therefore introduce the nondimensional pressurization/criticality ratio 

which scales the injection pressure by how close on average the fault is to failing. Directivity bias is relatively small (compared to catalog H1) and variable across a range of _Cr_ but tends to be more negative for low stress faults and high-pressure injection. Positive directivity bias occurs for injection at very low pressure. 

Negative directivity bias indicates a preference for rupture back toward the injection 

well. This occurs because of the favorable conditions for rupture to continue propagating while it is inside the high-pressure zone around the well. _McClure and Horne_ [2011] identify similar behavior in their model of induced seismicity. Figure 12d illustrates schematically how such rupture conditions are improved by depression of the residual strength, _𝜏r_<sup>∗, in the near vicinity of a well. We also suggest a second scenario (Figure 12c)</sup> that may account for positive directivity bias at low Δ _P_ inj<sup>∗. This requires that the pressure disturbance plays a</sup> larger role in triggering earthquakes than in modifying the energetics of rupture. However, for the parameters we have investigated, this scenario is infrequent and results only in a weak directivity bias. 

For earthquakes triggered by the advancing front, generally, there is a strong negative directivity bias across a range of Δ _P_<sup>∗</sup> and _𝜇𝜏_<sup>∗(Figure 13a). The curves for each value of</sup><sup>_𝜇_</sup> _𝜏_<sup>∗exhibit a characteristic variation with increas-</sup> ing Δ _P_<sup>∗</sup> : _̄ D_ , is initially between 0.4 and 0.6; it becomes more negative, approaches a minimum, climbs to a peak at _Cr_ ≈ 1 and then declines again. The initial variation can be understood in energy terms: directivity bias arises due to preferred rupture conditions inside the plume than outside. Preference for rupture is expressed in terms of average potential stress drop, which is _̄ 𝜏_ in<sup>∗≈</sup><sup>_𝜇_</sup> _𝜏_<sup>∗+ Δ</sup><sup>_P_</sup> inj<sup>∗inside the plume and</sup><sup>_̄ 𝜏_</sup> out<sup>∗≈</sup><sup>_𝜇_</sup> _𝜏_<sup>∗outside.</sup> The directivity bias is stronger when the ratio of these two quantities, i.e., _̄ 𝜏_ in<sup>∗∕</sup><sup>_̄𝜏_</sup> out<sup>∗=Δ</sup><sup>_P_</sup> inj<sup>∗∕</sup><sup>_𝜇_</sup> _𝜏_<sup>∗+ 1, is larger.</sup> A strengthening directivity bias occurs as Δ _P_ inj<sup>∗initially increases (with</sup><sup>_𝜇_</sup> _𝜏_<sup>∗fixed) and sometimes for decreas-</sup> ing _𝜇𝜏_<sup>∗. Thus, if sufficiently well constrained, the directivity bias might serve as an approximate indication of</sup> fault criticality. 

As Δ _P_ inj<sup>∗continues to increase, earthquakes triggered by the advancing front are, on average, triggered with</sup> a smaller advancement of the pressure front (e.g., compare Figure 12c and 12d). The size of the region of enhanced _𝜏_ in<sup>∗(approximated by</sup><sup>_L_∗) is smaller and thus so are modeled earthquakes. Smaller magnitude events</sup> exhibit a weaker directivity bias (e.g., magnitude sensitivity of 2-D flow simulations is shown in Figure 8c), and so _̄ D_ increases. This reaches an extreme when Δ _P_ inj<sup>∗is so large as to be of the order of the fault proximity to</sup> failure ( _Cr_ ≈ 1), in which case the front advances a small distance and then triggers a small event. 

Clearly, _̄ D_ isdeterminedbythetrade-offbetweenincreasing _̄𝜏_ in<sup>∗∕</sup><sup>_̄𝜏_</sup> out<sup>∗anddecreasing</sup><sup>_L_∗,suchthatthereisapar-</sup> ticular value of Δ _P_ inj<sup>∗at which the modeled directivity bias is strongest. For</sup><sup>_Cr >_1, directivity bias increases in</sup> strength with increasing _Cr_ . This is because average _L_<sup>∗</sup> cannot decrease any further, whereas the ratio _̄ 𝜏_ in<sup>∗∕</sup><sup>_̄𝜏_</sup> out<sup>∗</sup> can continue to increase. 

Simulated directivity bias is typically quite weak for the extended 2-D geometry (Figure 13c). Directivity bias becomes more negative with increasing injection pressure consistent with the schematic illustrations in Figure 12. 

Apreferenceforrupturestopropagatebacktoward(andsometimesacross)theinjectionwellwasidentifiedin the simulations of _McClure and Horne_ [2011]. Permeability evolution in those models resulted in a distribution 

DEMPSEY AND SUCKALE 

INDUCED SEISMICITY: DIRECTIVITY BIAS 

19 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012550 

**Figure 12.** Injection and rupture schematics illustrating the interaction of a pressure plume and a fault with heterogeneous stress producing forward and backward directivity bias. (a) Initial configuration of strength (dashed lines) and stress (solid line) and energy source (green) and sink regions (orange). Three potential nucleation sites are indicated. (b) When tectonic loading is applied, rupture nucleates at the highest stress location (star) and propagates within the contiguous energy source region (arrows). (c) When loading is due to a low pressure plume, rupture nucleates at a different location to Figure 12b but propagates within the same region. (d) When loading is due to a high-pressure plume, a new energy source region is created and rupture propagation is restricted to it. Note, for simplicity, the plumes in Figures 12c and 12d have the appearance of an advancing front (Figures 4e and 4f). 

of pressure that resembles the advancing front. For catalog H1, which employs the advancing front, approximately 7% of the simulated ruptures propagated back across the injection well. 

We have demonstrated a negative directivity bias for earthquakes induced by injection directly into a 1-D fault. This bias originates from favorable modification of the energetics of rupture near the injection well. For ruptures on 2-D faults, a similar result is expected because (i) creation of a high-pressure region about the injection well is independent of problem dimension and (ii) the creation of favorable rupture conditions inside this region is due to an increase of the potential stress drop, _𝜏_<sup>∗</sup> , an energy-based argument that is valid in 2-D. 

#### **4.1. Detecting Directivity Bias** 

In Figure 10c, we compare the directivity of tectonic and induced events. To formalize the comparison, we apply a Kolmogorov-Smirnov (KS) test. Suppose we have made a set of directivity measurements and we would like to test the null hypothesis that the measurements are consistent with an underlying tectonic directivity distribution (Figure 9c). If the observations are incompatible, this may indicate that the events are not tectonic in origin or, alternatively, that (32) is not a good model of tectonic events on the fault. The KS test outputs a _p_ value, which, if less than 0.05, we consider sufficient evidence to reject the null hypothesis. A random sample of _N_ events is drawn from a simulated catalog—these represent the observations—and the KS test applied. This process is repeated 2000 times to determine the average _p_ value for sample size, _N_ . Assuming that directivity ratio measurements might be more readily available for large magnitude events, we repeat the procedure considering just those catalog events above a magnitude cutoff. 

For catalog H1, which exhibited the stronger directivity bias of the two induced catalogs shown in Figure 10, the null hypothesis is rejected after as few as three observations (Figure 14). For catalog 2DF, the directivity bias is less pronounced. When considering all catalog events, the null hypothesis is not rejected even with 100 observations. However, as we noted in the previous section, _̄ D_ is 

DEMPSEY AND SUCKALE 

INDUCED SEISMICITY: DIRECTIVITY BIAS 

20 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012550 

**Figure 13.** Directivity bias, _̄ D_ , versus pressurization/criticality ratio, _Cr_ , for a range of model parameters and catalog subsets: (a) two-value advancing front (Figures 4e and 4f), (b) magnitude cutoff (for 2-D flow and fixing _𝜇𝜏_<sup>∗= −0</sup><sup>_._54), and (c) extended 2-D flow</sup> geometry, varying injection well position (Figures 5e and 5f), and fixing _𝜇𝜏_<sup>∗= −0</sup><sup>_._54.</sup> 

stronger for large magnitude events (Figure 13a). Restricting the test to events larger than an arbitrary cutoff of _Mw_ 2.4 reduces the number of required observations to 20. This is fortunate, as directivity measurements are easier to obtain for large magnitude events for which there is a greater likelihood of resolving a finite source time function (as required by the calculation in Appendix A). 

Despite the success of the KS test in identifying directivity bias in catalogs H1 and 2DF, several limitations should be noted. We have assumed that a symmetrical directivity PDF is a reasonable null hypothesis. Symmetry is certainly a feature of the modeled tectonic directivity PDF (e.g., Figures 8c and 8a), but our model does not include the relevant physics that would introduce directivity bias under uniform tectonic loading. For example, a preferred rupture propagation direction has been suggested for faults with a bimaterial interface [ _Ben-Zion_ , 2001; _Ampuero and Ben-Zion_ , 2008] such as might occur on plate-bounding faults with large accumulated slip. Several studies of the San Andreas fault [ _Lengliné and Got_ , 2011; _Zaliapin and Ben-Zion_ , 2011; _Kane et al._ , 2013] have tentatively established the presence of a directivity bias in the expected direction, although the study of _Zaliapin and Ben-Zion_ [2011] indicates it is not a feature common to all faults. Additionally, if loading on a fault is nonuniform, for example, at the boundary of creeping and locked sections of a fault [e.g., _Lapusta et al._ , 2000], then some systematic bias may exist in the natural events. The assumption of symmetry in the null hypothesis, and the breaking of that symmetry in directivity observations, underpins the KS test presented here. If tectonic symmetry is absent, then the KS test could provide an incorrect indication of induced seismicity. 

The assumption of tectonic symmetry may also not be appropriate for dip-slip faulting, where the presence of a free surface and basal boundary condition might introduce asymmetry into the hypocentral location distribution and directivity PDF. For instance, _Mai et al._ [2005] considered 

downdip hypocentral locations for 47 earthquakes and fitted the data with asymmetric Weibull and Gamma distributions. Depending on style of faulting, the fitted distributions had means between 0.4 and 0.6 and showed central tendency. Applying the KS test to directivity observations from dip-slip earthquakes that 

DEMPSEY AND SUCKALE 

INDUCED SEISMICITY: DIRECTIVITY BIAS 

21 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012550 

**Figure 14.** Summary of Kolmogorov-Smirnov (KS) testing to establish the presence of a directivity bias in catalogs H1 (blue) and 2DF (green symbols). The KS test is performed against the cumulative PDF for the tectonic directivity ratio given by equation (33). Random samples are drawn from either H1 or 2DF (see Figure 10) either with (circles) or without (squares) an _Mw >_ 2.4 cutoff. The average _p_ value of the KS test is plotted for 2000 bootstrap samples at each sample size. The dotted line is the _p_ value for rejection of the null hypothesis at a 95% level of confidence. 

are suspected of being induced would first require better constraint of _PD_ appropriate for natural dip-slip earthquakes. 

### **5. Conclusion** 

We have introduced a model for simulating large catalogs of tectonic and injection-induced earthquakes on 1-D faults with fractal stress heterogeneity. Earthquake triggering is assessed using the Mohr-Coulomb criterion, which is satisfied either by tectonically driven shear stress increase or a nonuniform strength reduction by increasing pressure on a fault (section 2.4). The length of a fault rupture is calculated based on a fracture mechanics description of the bilateral crack propagation problem (section 2.2.2). Earthquake catalogs modeled under a tectonic loading condition demonstrate a preference for unilateral rupture, consistent with seismological observations (section 3). Direction of rupture is quantified by the directivity ratio, _D_ , whose sign indicates whether rupture is toward (negative) or away from (positive) an injection well. The average value of _D_ in a catalog of earthquakes defines the directivity bias. For tectonic earthquakes, the simulated directivity bias is zero, although bimaterial effects or nonuniform loading rates could modify this on some faults. 

The main difference between simulations of tectonic earthquakes and two end-member scenarios of injection directly onto a fault—2-D radial flow with constant permeability and a two-value advancing front (approximating permeability enhancement)—is a tendency for negative directivity bias in the induced earthquakes (section 4). This arises due to relatively favorable conditions for continuing rupture propagation in the high-pressure region near an injection well. The strongest bias occurs for the advancing front as this imposes the largest pressure rise in the region between the earthquake hypocenter and the well. The modeled directivity bias is stronger for larger magnitude events and is very weak when injection occurs away from a fault (e.g., the extended 2-D flow geometry that approximates wastewater injection). 

Directivity bias is strongest, and therefore most easily detected, for earthquake sequences triggered by an advancing pressure front, such as has been suggested for EGS stimulation [ _Gischig and Wiemer_ , 2013; _Miller_ , 2015]. Efforts to detect such bias should focus on the larger magnitude events, which tend to depart more strongly from an unbiased tectonic directivity distribution. For example, _Jonas et al._ [2015] provide an analysis of the rupture direction of three of the larger events triggered during the Basel EGS stimulation. These events appear to have nucleated at the edge of the stimulation volume and propagated back toward injection well, which is consistent with the tendency for negative directivity bias that arises in our model for high-pressure injection into a fault. 

### **Appendix A: Directivity of 1-D Fault Ruptures** 

Consider a 1-D fault of length, _L_ 0, oriented along the _x_ axis. An earthquake rupture nucleates on the fault at position, _xh_ , at time _t_ = 0 and two rupture fronts propagate at constant velocity, _v_ , away from _xh_ . The front traveling in the − _x_ direction reaches the end of the fault and terminates at time, _t_ − = _xh_ ∕ _v_ , while the front traveling in the + _x_ direction terminates at time, _t_ + = ( _L_ 0 − _xh_ )∕ _v_ . We consider a simple scenario in which the 

DEMPSEY AND SUCKALE 

INDUCED SEISMICITY: DIRECTIVITY BIAS 

22 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012550 

final moment release is constant along the fault, in which case the moment release rate is given 

where _M_ 0 is the total moment release and _̇ f_ encapsulates the spatiotemporal component of _̇ M_ . All slip is assumed to occur instantaneously at the rupture front and therefore _̇ f_ is described by two delta functions 

where the delta function subscripts ± indicate that integrals over time should be truncated to _t_ ±, respectively. Note that the moment release function has been defined such that its zeroth moment equals the total moment release 

Following _Backus_ [1977], the spatial and temporal centroids, _x_ 0 and _t_ 0, are given as 

Following _McGuire et al._ [2002], we define second-order moments of _̇ M_ in space ( _̂𝜇_<sup>(2</sup><sup>_,_0)</sup> ), time ( _̂𝜇_<sup>(0</sup><sup>_,_2)</sup> ), and a mixed moment ( _̂𝜇_<sup>(1</sup><sup>_,_1)</sup> ), given as 

where the superscripts ( _m, n_ ) indicates that _m_ moments have been taken about _x_ 0 and _n_ about _t_ 0. 

Dimensionally, the moments _̂ 𝜇_<sup>(2</sup><sup>_,_0)</sup> , _̂ 𝜇_<sup>(1</sup><sup>_,_1)</sup> , and _̂ 𝜇_<sup>(0</sup><sup>_,_2)</sup> differ by factors of _v_ as each subsequent moment removes an integration over space and introduces one over time. 

_McGuire et al._ [2002] use the second-order spatial moments to define a characteristic rupture velocity, _vc_ , and take the ratio against the centroid velocity, _v_ 0, to yield the directivity ratio, _D_ , 

Considering the more general case in which only a portion of the fault ruptures (Figure 1), then in (A9), we (1) replace fault length, _L_ 0, with rupture length, _L_ ; (2) replace hypocentral location on the fault, _xh_ , with the hypocentral location inside the rupture, _𝛼L_ , yielding 

DEMPSEY AND SUCKALE 

INDUCED SEISMICITY: DIRECTIVITY BIAS 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012550 

Directivity ratio is plotted as a function of _𝛼_ in Figure 9a. The adequacy of the approximation (A10) is discussed in Appendix C. 

### **Appendix B: Algorithm for Calculating Rupture Arrest** 

Figure B1 presents in greater detail the steps involved in calculating the arrest locations of the two rupture frontsoftheearthquakesimulatedinFigure6.Inthisparticularexample,pressurebuildupandstrengthreduction result in an earthquake hypocenter at approximately _x_<sup>∗</sup> = 0 _._ 51. This location is calculated by iteration through fault pressure profiles output by the reservoir simulator at fixed times over a 50 year period. Linear interpolation is used to correct for overshoot of strength and also to discriminate between multiple potential hypocenters.Fortheparametersusedhere,thecriticalnucleationlengthissmallerthanthefaultdiscretization and it is therefore unnecessary to satisfy the Mohr-Coulomb criterion across multiple adjacent grid blocks. 

Referring to equation (16), the locations where the two rupture fronts stop propagating are given by the crack tip positions _a_ −<sup>∗and</sup><sup>_a_∗</sup> +<sup>at the point where both</sup><sup>_v_</sup> −<sup>∗and</sup><sup>_v_</sup> +<sup>∗are zero. To illustrate, Figures B1b and B1c contour</sup> the velocity of, respectively, the negative and positive crack tips for all possible positions of the crack tips; this corresponds to a surface in _a_ −<sup>∗−</sup><sup>_a_∗</sup> +<sup>−</sup><sup>_v_</sup> ±<sup>∗space. Each crack tip is restricted to propagate in the positive velocity</sup> region and must arrest somewhere on a contour of zero velocity. In Figure B1d, positive and negative tip velocity regions from Figures B1b and B1c are superimposed. In this representation, rupture evolution corresponds to an unknown, monotonically increasing path in _a_ −<sup>∗−</sup><sup>_a_∗</sup> + space, with the gradient of the path determined by the ratio of the two instantaneous tip velocities. 

Our primary interest is in determining the final size of the rupture, indicated by the open square in Figure B1d; the path taken to reach this is not important for this study. An efficient algorithm for locating this end point is the crack tip “walk,” which comprises a series of “strides” that alternate parallel to the _a_ −<sup>∗and</sup><sup>_a_∗</sup> +<sup>axes. Each</sup> stride holds the position of one crack tip constant and propagates the other along the fault until it arrests. The next stride then reverses roles: the tip that had previously advanced is now held fixed and the other tip is permitted to propagate and arrest. Thus, the rupture “walks” toward a configuration where both tips are arrested,thefinalruptureextent.Inimplementingthisalgorithm,wehavefoundthattoavoidthewalkgetting “stuck” on rough contours edges, it is useful to reduce actual stride lengths to 75% of the projected length. 

Implementation of the crack tip walk algorithm represents considerable computational savings as compared to computing tip velocities in the full _a_ −<sup>∗−</sup><sup>_a_∗</sup> +<sup>space (as is done in Figure B1). For a fault discretized into</sup><sup>_N_</sup> elements, each row or column of the 2-D matrix _v_ ±<sup>∗is computed by a single convolution (see equation (16)).</sup> For the crack tip walk, a single convolution is required for each stride; thus, operational savings over mapping out the full _a_<sup>∗</sup> −<sup>−</sup><sup>_a_∗</sup> +<sup>space are of order</sup><sup>_N_.</sup> 

### **Appendix C: Comparison Against Dynamic Rupture Simulation** 

We compare the fracture mechanics approximation of rupture equation (16) to dynamic earthquake simulationsinMDSBI(Multidimensionalspectralboundaryintegralcode[ _Dunham_ ,2005]),whichmodelsshearstress transfer and friction evolution on a 2-D planar fault. MDSBI implements a spectral boundary integral formulation [ _Geubelle and Rice_ , 1995] to calculate stress transfer due to fault slip. We use MDSBI in dynamic mode, which assumes a finite elastic wave speed. Friction evolves on the fault according to a rate-and-state model [ _Dieterich and Kilgore_ , 1996] with state evolution governed by a slip law. In dynamic mode, MDSBI has been verified against several problems of the Southern California Earthquake Center Dynamic Earthquake Rupture Code Verification Exercise. 

We construct spatially correlated shear stress profiles, _𝜏_<sup>∗</sup> , according to the description in section 2.3 with average stress high enough that, in the MDSBI simulation. Mode III rupture nucleates spontaneously before propagating and arresting at or before the end of the fault. The ends of the fault are padded with a region of velocity strengthening friction to enforce rupture arrest and isolate the simulation from boundary effects. The fault is sufficiently discretized to properly resolve the cohesive zone [ _Day et al._ , 2005], the region at the propagating crack tip across which friction drops to its residual value. 

Figure C1 compares the simulated rupture length, _L_<sup>∗</sup> , for 83 realizations of _𝜏_<sup>∗</sup> . The relative error in simulated rupture length between MDSBI, _L_<sup>∗</sup> MDSBI<sup>, and the fracture mechanics approximation,</sup><sup>_L_</sup> FM<sup>∗, is computed as</sup> ( _L_<sup>∗</sup> FM<sup>−</sup><sup>_L_∗</sup> MDSBI<sup>)∕</sup><sup>_L_∗</sup> MDSBI<sup>, with agreement better than a factor of 2 in 73 cases. On average, the fracture mechanics</sup> approximation overestimates _L_<sup>∗</sup> by 16% because tip interactions (which reduce the stress intensity factor) are 

DEMPSEY AND SUCKALE 

INDUCED SEISMICITY: DIRECTIVITY BIAS 

24 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012550 

**Figure B1.** Illustration of the crack tip walk algorithm for calculating rupture extent, _L_<sup>∗</sup> , for the heterogeneous shear stress profile in Figure 6. (a) Once the hypocenter location, _xh_<sup>∗has been determined (Figure 6a); two axes are defined for</sup> the left-hand and right-hand crack tip positions, _a_ −<sup>∗and</sup><sup>_a_∗</sup> +<sup>, with origins at</sup><sup>_x_</sup> _h_<sup>∗and pointing in opposite directions along</sup> the fault. (b) Left-hand crack tip velocity, _v_ −<sup>∗as a function of</sup><sup>_a_∗</sup> −<sup>and</sup><sup>_a_∗</sup> +<sup>(see equation (16)) with corresponding stress</sup> profiles from Figure B1a for reference. (c) As for Figure B1b but plotting the right-hand crack tip velocity, _v_ +<sup>∗. Note</sup><sup>_v_</sup> ±<sup>∗</sup> begins to decrease when it enters an orange area, which for the right-hand crack tip corresponds to the sustained area of _𝜏_<sup>∗</sup> _<_ 0 at _a_<sup>∗</sup> +<sup>_>_0</sup><sup>_._12. (d) Crack tip velocity maps from Figures B1b and B1 are superimposed to illustrate areas of crack</sup> tip growth (dark green), partial arrest (light green), and full arrest (orange). The crack can only grow within contiguous dark green regions, and the final rupture extent is given by the white square. Calculation of rupture extent by a series of projected (white circles) and taken crack tip “strides” (black solid arrow) is shown. 

DEMPSEY AND SUCKALE 

INDUCED SEISMICITY: DIRECTIVITY BIAS 

25 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012550 

**Figure C1.** Comparison of rupture extent, _L_<sup>∗</sup> , predicted by the fracture mechanics method and dynamic rupture simulator, MDSBI. (a–c) Realizations of heterogeneous stress, _𝜏_<sup>∗</sup> , and extent of rupture as predicted by fracture mechanics (over arrow) and as simulated by MDSBI (under arrow). Green and orange regions correspond to positive and negative stress drop. The postrupture stress state from MDSBI is overlaid on _𝜏_<sup>∗</sup> as a thick black line. Stress concentrations at the location of rupture arrest are evident. (d) Relative error in estimating _L_<sup>∗</sup> between our model and MDSBI for 83 different stress realizations. (e) Histogram of the errors. 

not included. Occasionally, this results in a large overestimate of _L_<sup>∗</sup> (e.g., Figure C1a) when a low stress zone that arrests a dynamic rupture allows the fracture mechanics rupture to propagate across into another high stress region. Sometimes also, the fracture mechanics method underestimates _L_<sup>∗</sup> . This occurs for stress states defined such that multiple sections of the fault nucleate and slip concurrently in the dynamic simulation (e.g., Figure C1c). 

#### **C1. Moment and Directivity Approximations** 

The seismic moment for a 1-D rupture is defined 

where _𝜇_ is the shear modulus, _a_ − and _a_ + are the left-hand and right-hand limits of rupture, and _u_ is the slip on the fault. On faults with heterogeneous stress, _M_ 0 is given [ _Madariaga_ , 1979; _Ampuero et al._ , 2006] 

where Δ _𝜏_ is the distribution of stress drop and _L_ is the rupture length. For our fracture mechanics analysis, we do not simulate slip, _u_ , and therefore must use (C2). The adequacy of this approach is verified by direct comparison with the dynamic rupture simulations, which are in quite good agreement (Figure C2a). 

In developing an approximation of the directivity ratio, _D_ , equation (A10), we assumed a model in which moment release occurs instantaneously at the rupture front and that is constant across the rupture. Dynamic rupture simulations provide a more realistic evolution of slip and slip velocity and allow us to compute exactly the moment equations (A7) and (A8) that define _D_ . For the 83 simulations in Figure C2b, plots _D_ computed by the approximate expression (A10) versus exact value given by (A9) with (A7) and (A8). The moments are calculated from records of slip and slip velocity following the method developed in Appendix F of [ _Ampuero and Ben-Zion_ , 2008]. The exactand approximateexpressions agreequalitativelyin terms of thedirectionofrupture travel. However, the exact computation results in set of values for _D_ that are much weaker than observations of real earthquakes [ _McGuire et al._ , 2002]. _Ampuero and Ben-Zion_ [2008] considered _D_ for rupture pulses on bimaterial faults with heterogeneous stress and saw that the shape of the distribution depends on _𝜎𝜏_<sup>∗and closely</sup> 

DEMPSEY AND SUCKALE 

INDUCED SEISMICITY: DIRECTIVITY BIAS 

26 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012550 

**Figure C2.** Comparison of exact and approximate values of (a) seismic moment, _M_ 0, and (b) directivity ratio, _D_ , for 83 dynamic rupture simulations. Perfect agreement is indicated by a dotted line. We suggest that the lack of agreement is due to simulation of crack-like ruptures versus the pulse-like nature of the approximation (A10). 

resembled observations when _𝜎𝜏_<sup>∗=0</sup><sup>_._25. One</sup> possible reason for the disagreement between our results and those in _Ampuero and Ben-Zion_ [2008] is that our ruptures are crack like, and thus, slip in the central regions occurs over a longer time period. In contrast, the pulses in _Ampuero and Ben-Zion_ [2008] concentrate moment release to the front of the rupture, which is more consistent with the simple model (A2) used to develop the approximate expression for _D_ . In spite of this, equation (A10) appears to be a reasonable first-order approximation in that, when combined with several possible distributions of _𝛼_ , it yields a good match to observed distributions of directivity ratio (section 3.3). 

The question then naturally arises, how would conclusions drawn using the fracture mechanics model be different were a pulse-like model employed? We offer the following insights, although a rigorous analysis requires a deeper study of pulse models beyond the scope of this work. 

1. Hypocenter locations and times are not modified, as earthquake triggering precedes the calculation of rupture. 

2. _Nielsen and Madariaga_ [2003] develop analytical solutions for an expanding 1-D self-healing slip pulse and compare this to the equivalent 

crack. They show that the stress intensity factor of the pulse could be smaller than that for the crack by up to a factor of 2. Furthermore, rupture arrest may occur more rapidly for the pulse because, below a critical rupture velocity, _vr_ , energy release rate decreases with decreasing _vr_ . Thus, _L_<sup>∗</sup> is potentially smaller for pulses than cracks. 

3. The slip distribution inside a pulse-like rupture increases linearly with distance from the hypocenter [ _Nielsen and Madariaga_ , 2003]. Thus, when computing mean stress drop for a moment calculation, greater weight is placed on the low stress drop regions that occur preferentially near the edge of the rupture pulse. Using this modified weighting scheme for the simulated ruptures in Figure C2a, the average stress drop of the pulse is ∼30% smaller than for the crack. 

4. Both the smaller rupture length and smaller stress drop for pulses equate to smaller event magnitudes. This ultimately modifies the shape of the magnitude-frequency distribution. However, our study specifically focuses on earthquake ensembles whose magnitude-frequency distribution conforms to a Gutenberg-Richter (GR) model. Using a modified stress intensity factor (assuming the maximum reduction of a factor of 2) and average stress drop computed for a pulse, GR scaling of the magnitude-frequency distribution with _b_ ∼1 is obtained for a fractal exponent of 0.4 (rather than 0.25 for the crack model). 

The immediate suggestion then is that a model assuming pulse-like rupture would require a different parameterization of the heterogeneous stress model. However, the core features of the fracture mechanics model upon which the primary conclusions are justified—ruptures triggered by Mohr-Coulomb failure, rupture arrest in regions of negative stress drop, and conditions for continued rupture promoted in regions of elevated fluid pressure—are largely independent of the particulars of the stress model parameterization. Thus, we suggest that the collective properties of induced earthquake sequences discussed in this and the accompanying paper will, at least qualitatively, exhibit similar behavior for cracks and pulses. 

DEMPSEY AND SUCKALE 

INDUCED SEISMICITY: DIRECTIVITY BIAS 

27 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012550 

##### **Acknowledgments** 

Funding for this study was provided by the Stanford Center for Induced and Triggered Seismicity (SCITS). The authors thank E. Dunham, J. Boatwright, J. Norbeck, and Y. Huang for helpful discussions and V. Gischig, J. P. Ampuero, M. McClure, and an anonymous reviewer for comments that improved the quality of this article. The data used are listed in the references. 

### **References** 

Aagaard, B. T., and T. H. Heaton (2008), Constraining fault constitutive behavior with slip and stress heterogeneity, _J. Geophys. Res._ , _113_ , B04301, doi:10.1029/2006JB004793. 

Ampuero, J.-P., J. Ripperger, and P. M. Mai (2006), Properties of dynamic earthquake ruptures with heterogeneous stress drop, in _Radiated Energy and the Physics of Earthquake Faulting, Geophys. Monogr. Ser._ , vol. 70, edited by R. Abercrombie, pp. 3–13, AGU, Washington, D. C. Ampuero, J.-P., and Y. Ben-Zion (2008), Cracks, pulses and macroscopic asymmetry of dynamic rupture on a bimaterial interface with velocity-weakening friction, _Geophys. J. Int._ , _173_ , 674–692. Andrews, D. J. (1980), A stochastic fault model: 1. Static case, _J. Geophys. Res._ , _85_ (B7), 3867–3877. Backus, G. E. (1977), Interpreting the seismic glut moments of total degree two or less, _Geophys. J. R. Astron. Soc._ , _51_ , 1–25. Batini, F., R. Console, and G. Luongo (1985), Seismological study of Larderello-Travale geothermal area, _Geothermics_ , _14_ (2–3), 255–272. Ben-Zion, Y. (2001), Dynamic ruptures in recent models of earthquake faults, _J. Mech. Phys. Solids_ , _49_ , 2209–2244. Boatwright, J. (2007), The persistence of directivity in small earthquakes, _Bull. Seismol. Soc. Am._ , _97_ (6), 1850–1861. Byerlee, J. D. (1978), Friction of rocks, _Pure Appl. Geophys._ , _116_ , 393–402. 

Candela, T., F. Renard, M. Bouchon, A. Brouste, D. Marsan, J. Schmittbuhl, and C. Voisin (2009), Characterization of fault roughness at various scales: Implications of three-dimensional high resolution topography measurements, _Pure Appl. Geophys._ , _166_ , 1817–1851. Cappa, F., and J. Rutqvist (2011), Impact of CO2 geological sequestration on the nucleation of earthquakes, _Geophys. Res. Lett._ , _38_ , L17313, doi:10.1029/2011GL048487. 

Cappa, F., and J. Rutqvist (2011), Seismic rupture and ground accelerations induced by CO2 injection in the shallow crust, _Geophys. J. Int._ , _190_ , 1784–1789. Day, S. M., L. A. Dalguer, N. Lapusta, and Y. Liu (2005), Comparison of finite difference and boundary integral solutions to three-dimensional spontaneous rupture, _J. Geophys. Res._ , _110_ , B12307, doi:10.1029/2005JB003813. 

Dempsey, D., S. Kelkar, N. Davatzes, S. Hickman, and D. Moos (2015), Numerical modeling of injection, stress, and permeability enhancement during shear stimulation at the Desert Peak Enhanced Geothermal System, _Int. J. Rock Mech. Min. Sci._ , _78_ , 190–206. Dempsey, D., J. Suckale, and Y. Huang (2016), Collective properties of injection-induced earthquake sequences: 2. Spatiotemporal evolution and magnitude frequency distributions, _J. Geophys. Res. Solid Earth_ , _121_ , doi:10.1002/2015JB012551. Dieterich, J. H., and B. Kilgore (1996), Implications of fault constitutive properties for earthquake prediction, _Proc. Natl. Acad. Sci. U.S.A._ , _93_ , 3787–3794. Dieterich, J. H., K. B. Richards-Dinger, and K. A. Kroll (2015), Modeling injection-induced seismicity with the physics-based earthquake simulator RSQSim, _Seis. Res. Lett._ , _86_ (4), 1102–1109, doi:10.1785/0220150057. Dorbath, L., N. Cuenot, A. Genter, and M. Frogneux (2009), Seismic response of the fractured and faulted granite of Soultz-sous-Forêts (France) to 5 km deep massive water injections, _Geophys. J. Int._ , _177_ , 653–675. Dunham, E. M. (2005), Dissipative interface waves and the transient response of a three-dimensional sliding interface with Coulomb friction, _J. Mech. Phys. Solids_ , _53_ , 327–357. Dunham, E. M., D. Belanger, L. Cong, and J. E. Kozdon (2011), Earthquake Ruptures with strongly rate-weakening friction and off-fault plasticity. Part 1: Planar faults, _Bull. Seismol. Soc. Am._ , _101_ (5), 2296–2307. 

Ellsworth, W. L. (2013), Injection-induced earthquakes, _Science_ , _341_ (6142), 1225942. Eshelby, J. D. (1969), The elastic field of a crack extending non-uniformly under general anti-plane loading, _J. Mech. Phys. Solids_ , _17_ , 177–199. Galis, M., C. Pelties, J. Kristek, P. Moczo, J.-P. Ampuero, and P. M. Mai (2015), On the initiation of sustained slip-weakening ruptures by localized stresses, _Geophys. J. Int._ , _200_ (2), 890–909. Geubelle, P. H., and J. R. Rice (1995), A spectral method for three-dimensional elastodynamic fracture problems, _J. Mech. Phys. Solids_ , _43_ , 1791–1824. Gischig, V., and S. Wiemer (2013), A stochastic model for induced seismicity based on non-linear pressure diffusion and irreversible permeability enhancement, _Geophys. J. Int._ , _194_ , 1229–1249, doi:10.1093/gji/ggt164. Gupta, H. K., and B. K. Rastogi (1976), Dams and earthquakes, in _Developments in Geotechnical Engineering_ , vol. 11, pp. 1–299, Elsevier Sci., Amsterdam. Häring, M. O., U. Schanz, F. Ladner, and B. C. Dyer (2008), Characterisation of the Basel 1 enhanced geothermal system, _Geothermics_ , _37_ , 469–494. 

Healy, J. H., W. W. Rubey, D. T. Griggs, and C. B. Raleigh (1968), The Denver earthquakes, _Science_ , _161_ (3848), 1301–1310. Helmstetter, A., and B. E. Shaw (2006), Relation between stress heterogeneity and aftershock rate in the rate-and-state model, _J. Geophys. Res._ , _111_ , B07304, doi:10.1029/2005JB004077. 

Herrero, A., and P. Bernard (1994), A kinematic self-similar rupture process for earthquakes, _Bull. Seismol. Soc. Am._ , _84_ (4), 1216–1228. Horton, S. (2012), Disposal of hydrofracking waste fluid by injection into subsurface aquifers triggers earthquake swarm in Central Arkansas with potential for damaging earthquake, _Seismol. Res. Lett._ , _83_ (2), 250–260. 

Hubbert, M. K., and W. W. Rubey (1959), Role of fluid pressure in mechanics of overthrust faulting, _Bull. Geol. Soc. Am._ , _70_ , 115–166. Ing, Y.-S., and C.-C. Ma (1997), Dynamic fracture analysis of a finite crack subjected to an incident horizontally polarized shear wave, _Int. J. Solids Struct._ , _34_ (8), 895–910. 

Jonas, F., J. Kummerow, and S. A. Shapiro (2015), Microseismic rupture propagation imaging, _Geophysic_ , _80_ (6), WC107–WC115. Kammer, D. S., M. Radiguet, J.-P. Ampuero, and J.-F. Molinari (2015), Linear elastic fracture mechanics predicts the propagation distance of frictional slip, _Tribol. Lett._ , _57_ , 23, doi:10.1007/s11249-014-0451-8. 

Kanamori, H., and L. Rivera (2006), Energy partitioning during an earthquake, in _Radiated Energy and the Physics of Earthquake Faulting_ , _Geophys. Monogr. Ser._ , vol. 70, edited by R. Abercrombie, pp. 3–13, AGU, Washington, D. C. Kane, D. L., P. M. Shearer, B. P. Goertz-Allmann, and F. L. Vernon (2013), Rupture directivity of small earthquakes at Parkfield, _J. Geophys. Res. Solid Earth_ , _118_ , 212–221, doi:10.1029/2012JB009675. Keranen, K. M., H. M. Savage, G. A. Abers, and E. S. Cochran (2013), Potentially induced earthquakes in Oklahoma, USA: Links between wastewater injection and the 2011 Mw 5.7 earthquake sequence, _Geology_ , _41_ (6), 699–702. 

Lapusta, N., J. R. Rice, Y. Ben-Zion, and G. Zheng (2000), Elastodynamic analysis for slow tectonic loading with spontaneous rupture episodes on faults with rate- and state-dependent friction, _J. Geophys. Res._ , _105_ (B10), 23,765–23,789. 

Lengliné, O., and J.-L. Got (2011), Rupture directivity of microearthquake sequences near Parkfield, California, _Geophys. Res. Lett._ , _38_ , L08310, doi:10.1029/2011GL047303. Lewis, K. C., S. Karra, and S. Kelkar (2013), A model for tracking fronts of stress-induced permeability enhancement, _Transp. Porous Media_ , _99_ , 17–35. 

DEMPSEY AND SUCKALE 

INDUCED SEISMICITY: DIRECTIVITY BIAS 

28 

**Journal of Geophysical Research: Solid Earth** 

10.1002/2015JB012550 

Madariaga, R. (1979), On the relation between seismic moment and stress drop in the presence of stress and strength heterogeneity, _J. Geophys. Res._ , _84_ (B5), 2243–2250. 

Mai, P. M., and G. C. Beroza (2002), A spatial random field model to characterize complexity in earthquake slip, _J. Geophys. Res._ , _107_ (B11), 2308, doi:10.1029/2001JB000588. 

Mai, P. M., P. Spudich, and J. Boatwright (2005), Hypocenter locations in finite-source rupture models, _Bull. Seismol. Soc. Am._ , _95_ (3), 965–980. Majer, E. L., R. Baria, M. Stark, S. Oates, J. Bommer, B. Smith, and H. Asanuma (2007), Induced seismicity associated with Enhanced Geothermal Systems, _Geothermics_ , _36_ , 185–222. 

Marone, C. (1998), Laboratory-derived friction laws and their application to seismic faulting, _Annu. Rev. Earth Planet. Sci._ , _26_ , 643–696. McClure, M. W., and R. N. Horne (2010), Numerical and analytical modeling of the mechanisms of induced seismicity during fluid injection, _GRC Trans._ , _34_ , 381–396. 

McClure, M. W., and R. N. Horne (2011), Investigation of injection-induced seismicity using a coupled fluid flow and rate/state friction model, _Geophysics_ , _76_ (6), WC181, doi:10.1190/GEO2011-0064.1. 

McGuire, J. J., L. Zhao, and T. H. Jordan (2002), Predominance of unilateral rupture for a global catalog of large earthquakes, _Bull. Seismol. Soc. Am._ , _92_ (8), 3309–3317. 

Miller, S. A. (2015), Modeling Enhanced Geothermal Systems and the essential nature of large-scale changes in permeability at the onset of slip, _Geofluids_ , _15_ , 338–349. 

Murphy, S., G. S. O’Brien, J. McCloskey, C. J. Bean, and S. Nalbant (2013), Modelling fluid induced seismicity on a nearby active fault, _Geophys. J. Int._ , _194_ , 1613–1624. 

Nielsen, S., and R. Madariaga (2003), On the self-healing fracture mode, _Bull. Seismol. Soc. Am._ , _93_ , 2375–2388. 

Power, W. L., T. E. Tullis, and J. D. Weeks (1988), Roughness and wear during brittle faulting, _J. Geophys. Res._ , _93_ (B12), 15,268–15,278. 

Raleigh, C. B., J. H. Healy, and J. D. Bredehoeft (1976), An experiment in earthquake control at Rangely, Colorado, _Science_ , _191_ (4233), 1230–1237. 

Rice, J. R. (1980), The mechanics of earthquake rupture, in _Physics of the Earth’s Interior, Proceedings of International School Physics Enrico_ 

_Fermi_ , vol. 78, edited by A. M. Dziewonski and E. Boschi, pp. 555–649, North-Holland, Amsterdam. 

Rice, J. R. (1983), Constitutive relations for fault slip and earthquake instabilities, _Pure Appl. Geophys._ , _121_ (3), 443–475. 

Rice, J. R. (1993), Spatio-temporal complexity of slip on a fault, _J. Geophys. Res._ , _98_ , 9885–9907. 

Ripperger, J., J.-P. Ampuero, P. M. Mai, and D. Giardini (2007), Earthquake source characteristics from dynamic rupture with constrained 

stochastic fault stress, _J. Geophys. Res._ , _112_ , B04311, doi:10.1029/2006JB004515. 

Segall, P., and S. D. Fitzgerald (1998), A note on induced stress changes in hydrocarbon and geothermal reservoirs, _Tectonophysics_ , _289_ , 117–128. 

Wald, D. J., and T. H. Heaton (1994), Spatial and temporal distribution of slip for the 1992 Landers, California, earthquake, _Bull. Seismol. Soc. Am._ , _84_ (3), 668–691. 

Walsh, F. R., and M. D. Zoback (2015), Oklahoma’s recent earthquakes and saltwater disposal, _Sci. Adv._ , _1_ (5), e1500195. 

Weingarten, M., S. Ge, J. W. Godt, B. A. Bekins, and J. L. Rubinstein (2015), High-rate injection is associated with the increase in US mid-continent seismicity, _Science_ , _348_ (6241), 1336–1340. 

Zaliapin, I., and Y. Ben-Zion (2011), Asymmetric distribution of aftershocks on large faults in California, _Geophys. J. Int._ , _185_ , 1288–1304. 

Zhang, Y., et al. (2013), Hydrogeologic controls on induced seismicity in crystalline basement rocks due to fluid injection into basal reservoirs, _Groundwater_ , _51_ (4), 525–538. 

Zoback, M. D., and H.-P. Harjes (1997), Injection-induced earthquakes and crustal stress at 9 km depth at the KTB deep drilling site, Germany, _J. Geophys. Res._ , _102_ (B8), 18,477–18,491. 

- Zyvoloski, G. A. (2007), FEHM: A control volume finite element code for simulating subsurface multi-phase multi-fluid heat and mass transfer, _LAUR-07-3359_ , Los Alamos Natl. Lab. Rep., Los Alamos, N. M. 

DEMPSEY AND SUCKALE 

INDUCED SEISMICITY: DIRECTIVITY BIAS 

29 

