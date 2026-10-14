# Response of Induced Seismicity to Injection Rate Reduction: Models of Delay, Decay, Quiescence, Recovery, and Oklahoma

**Authors:** David Dempsey, Jeremy Riffault  
**Published in:** Water Resources Research (2019)  
**DOI (version of record):** https://doi.org/10.1029/2018wr023587  
**This copy:** Accepted manuscript (peer-reviewed, author's version). Text extracted from the PDF at https://ddempsey.github.io/papers/2019-dempsey-response-induced-seismicity-injection-rate/dempsey2019-response-induced-seismicity.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** An edited version of this paper was published by AGU. Published 2019 American Geophysical Union. Version of record: https://doi.org/10.1029/2018wr023587  

---
# **RESEARCH ARTICLE** 10.1029/2018WR023587 

#### **Key Points:** 

- We developed models of induced seismicity decay and recovery after an injection rate reduction 

- Seismicity, dependent on pressurization rate above a threshold pressure, replicates Oklahoma events 

- Current mandated volume reduction in Western Oklahoma is insufficient to prevent further M 5 events 

#### **Supporting Information:** 

- Supporting Information S1 

- Data Set S1 

- Data Set S2 

- Data Set S3 

- Data Set S4 

- Data Set S5 

- Data Set S6 

- Data Set S7 

#### **Correspondence to:** 

D. Dempsey, d.dempsey@auckland.ac.nz 

#### **Citation:** 

Dempsey, D., & Riffault, J. (2019). Response of induced seismicity to injection rate reduction: Models of delay, decay, quiescence, recovery, and Oklahoma. _Water Resources Research_ , _55_ . https://doi.org/10.1029/2018WR023587 

Received 27 JUN 2018 Accepted 1 DEC 2018 Accepted article online 4 JAN 2019 

**Response of Induced Seismicity to Injection Rate Reduction: Models of Delay, Decay, Quiescence, Recovery, and Oklahoma** 

## **David Dempsey**<sup>**1**</sup> **and Jeremy Riffault**<sup>**1**</sup> 

1Department of Engineering Science, University of Auckland, Auckland, New Zealand 

**Abstract** When injection-induced seismicity poses a risk to communities, it is common to reduce the injection rate or halt operations. This applies both to individual wells and well clusters, such as those within the Area of Interest for Triggered Seismicity in Western Oklahoma, where in 2016 a 40% volume reduction mandate was imposed by the state regulator. Here we quantify how induced seismicity responds to an injection reduction. We introduce models of pressure diffusion in idealized geometries coupled to steady state pressurization and rate-state models of earthquake triggering. We find that the delay in seismicity onset and then postreduction behavior—decay, sometimes quiescence, and recovery of the seismicity rate—depend on the critical triggering pressure and on diffusion and rate-state parameters. We have adapted our model to replicate the timing of onset, peak, and recent pace of decline of seismicity triggered by wastewater injection in Western Oklahoma. Our analysis implies that diffusivity in the Arbuckle formation is high (between 44 and 277 m<sup>2</sup> /s). The critical triggering pressure is inferred to be between 0.021 and 0.077 MPa, and fluid overpressure at 4.5-km depth in the basement is estimated to have increased by as much as 0.190 MPa. We simulate future seismicity out to 2025 for three scenarios. Fixing the 2018 injection rate, already less than the limit imposed by the state regulator, we find a high likelihood of further _M_ ≥ 5 earthquakes. This suggests that the volume reduction mandate in Western Oklahoma is, at present levels, inadequate. 

# **1. Introduction** 

Induced seismicity is the triggering of earthquakes through human activities, principally subsurface fluid injection (e.g., Bao & Eaton, 2016; Ellsworth, 2013; Majer et al., 2007) but also hydrocarbon production (e.g., Dempsey & Suckale, 2017; Segall, 1989), dam impoundment (e.g., Gupta & Rastogi, 1976), and mining (e.g., McGarr, 1994). When ground shaking is experienced by the general public, or if there is a risk posed to critical infrastructure, then some form of mitigation is undertaken. Often, this is a permanent halt to the activity, as was the case for wastewater disposal at Rocky Mountain Arsenal in the 1960s (Healy et al., 1968), and the stimulation of an Enhanced Geothermal System well in Basel, Switzerland, in 2006 (Häring et al., 2008). In both cases, seismicity continued to occur after injection was halted. 

In other cases, there may be only a partial reduction of the operation. For instance, in 2016, the Oklahoma Corporation Commission, which regulates Class II injection wells in Oklahoma, mandated a 40% reduction of injected wastewater volumes in two large regions that had been experiencing numerous earthquakes (Langenbruch & Zoback, 2016). Similarly, at the Groningen natural gas field in the Netherlands, there have been a succession of cuts to the annual gas take over the past 10 years (Vlek, 2018), in large part due to concerns about induced seismicity. On the smaller scale, operation of a brine disposal well at Paradox Valley in Colorado resulted in relatively high rates of seismicity (Ake et al., 2005), but this was sharply reduced after a 35% reduction of the injection rate. In each of these cases, although seismicity was reduced, it was not eliminated. 

> ©2019. American Geophysical Union. All Rights Reserved. 

In Oklahoma, the situation is particularly complex with hundreds of Class II saltwater disposal wells targeting the large Arbuckle aquifer that overlies crystalline basement (Langenbruch & Zoback, 2016; Walsh & Zoback, 2015). Earthquake activity in the state has risen sharply since 2014 but appears to have declined in recent years, presumably in response to the volume reduction mandate. Schoenball and Ellsworth (2017) studied clusters of seismicity in Oklahoma and showed that majority of the events occurred between 3- and 

DEMPSEY AND RIFFAULT 

1 

**Water Resources Research** 

10.1029/2018WR023587 

5-km depth in the basement. It is generally assumed that majority of these events are triggered by a destabilizing fluid pressure increase within the fault (Langenbruch & Zoback, 2016; Langenbruch et al., 2018), although mechanisms invoking poroelastic stressing have also been suggested (Chang & Segall, 2016; Goebel et al., 2017). Comparatively few events occur shallower than 3 km, and this could be related to a predisposition toward aseismic slip mechanisms at shallow depths (Blanpied et al., 1991; Rice, 1993). Schoenball and Ellsworth (2017) also identified a downward migration in more than half the sequences, indicating a diffusive triggering mechanism with origin in the overlying aquifer. Hincks et al. (2018), too, demonstrate a link between Arbuckle injection and basement seismicity, finding that injection depth relative to basement has a strong correlation with moment release. Finally, the problem seems to be spreading to neighboring Kansas, where Peterie et al. (2018) have identified induced earthquakes up to 90 km from injection wells on the Kansas-Oklahoma border. 

In this paper, we focus on mitigating responses to induced seismicity, in particular, what should be expected when injection rates are reduced. To this end, we develop a set of increasingly parameterized analytical and numerical models, which describe fluid diffusion in different geometries, and different possible formulations of earthquake triggering. Finally, we adapt one of these models to replicate the recent seismicity in Western Oklahoma and use this model to forecast future seismicity in the state at three injection rates permissible under the current volume reduction mandate. Our goal is to evaluate whether this mandate provides sufficient protection from large magnitude ( _M_ ≥ 5) seismicity. In our view, it does not. 

# **2. Governing Physics** 

This section presents the underlying physical equations that we solve to model the response of induced seismicity to an injection rate reduction. We begin by motivating a series of increasingly complex system geometries (section 2.1) that could approximate many real-life instances of induced seismicity. Then, for the simpler geometries, we develop the equations for mass diffusion prior to and following an injection rate reduction (section 2.2.1). Finally, we introduce a rate-state model of earthquake triggering driven by fluid pressure changes and reduce this to a steady state limit (section 2.3). 

Although the governing equations are introduced in a dimensional form, general solutions for any spatiotemporal scale are obtained through nondimensionalization. To distinguish dimensional and dimensionless quantities, we shall use primed and unprimed variables; for example, _r_ ′ is a dimensional radius and _r_ its dimensionless equivalent. 

## **2.1. System Geometry** 

When fluid is injected into the subsurface, the manner in which pressure builds up depends on the flow geometry. For instance, if the fluid is confined to a narrow one-dimensional channel, the pressure buildup at any distance _r_ ′ will always be larger than if the same fluid is permitted unimpeded flow in three dimensions. When injection in an area is limited to a single well, it is convenient to conceptualize the mass source as an infinitesimal point. For a domain with homogeneous material properties, we can then distinguish three relevant flow geometries (Figures 1a–1c): (i) 1-D linear flow, such as occurs in channels; (ii) 2-D radial flow, such as occurs from fully penetrating wells in horizontally extensive aquifers; and (iii) 3-D spherical flow, such as may occur in the near vicinity of a well with a small open-hole interval. In all cases, the rock is characterized by its diffusivity, _D_ ′ , which we use to define a characteristic length scale for flow, _rD_ ′<sup>=</sup> √ _D_<sup>′</sup><sup>_̄_</sup> _t_<sup>′</sup> , where _̄ t_<sup>′</sup> is some characteristic time scale. 

In areas where these multiple wells are injecting, a useful extension of the 2-D geometry is to consider a finite injection source whose mass is evenly distributed within a circular region of radius, _r_ inj. This continuum representation approximates the large-scale effects of multiple discrete injectors in the region (Figure 1d) but will not capture local pressure perturbations near individual wells. The distributed injection configuration introduces a second length scale to the system—the injection radius, _r_ inj—which exerts some control over the pressure evolution. 

A further extension of the distributed injection geometry considers the downward diffusion of fluid overpressure onto faults in underlying basement rock (Figure 1e). To simplify the problem, we assume that these faults are directly connected to the overlying aquifer and that flow in the faults is vertical (one-dimensional) with diffusivity, _Db_<sup>′</sup> . Similar to the approach of Segall and Lu (2015), we assume that faults occur ubiquitously throughout the basement and that it is appropriate to represent this unit as an effective continuum. 

DEMPSEY AND RIFFAULT 

2 

**Water Resources Research** 

10.1029/2018WR023587 

**Figure 1.** Schematic of problem geometries and relevant length scales considered by this study. (a) 1-D linear flow from a point source. (b) 2-D radial flow from a point source. (c) 3-D spherical flow from a point source. Panels (a)–(c) assume homogeneous diffusivity, _D_ ′ , and there is therefore only a single (diffusion) length scale, _rD_ ′, with these geometries. (d) 2-D radial flow from a circular zone of distributed injection. This geometry introduces a second length scale, _r_ inj<sup>′</sup> , the radius of the injection region, alongside _rD_<sup>′</sup> . (e) Predominantly 2-D radial flow from a distributed injection zone within an aquifer that overlies a seismogenic basement. Flow in the basement is vertical (1-D), with no flow occurring laterally. This geometry introduces two additional length scales to those defined for geometry (d); a seismogenic depth, _r_ seis<sup>′</sup> , and a diffusion length scale for the basement, _r_ Db<sup>′</sup> , distinct from that in the aquifer. 

Finally, we imagine that all seismicity occurs at a single seismogenic depth in the basement, _r_ seis<sup>′</sup> . This model configuration introduces two further length scales, _r_ seis<sup>′</sup> and _r_ Db<sup>′=</sup> ~~√~~ _D_<sup>′</sup> _b̄_<sup>_t_′. Although the assumption</sup> that all seismicity occurs at a single depth in the basement is unrealistic, it is nevertheless a useful simplification to understand general model behavior. When we later generalize this model to Oklahoma, we relax this assumption to allow the entire basement to potentially generate seismicity, with the contribution at each depth weighted according to seismological observations (Schoenball & Ellsworth, 2017). 

## **2.2. Injection and Pressure Evolution** 

In many cases, the triggering of induced seismicity depends on how fluid pressure builds up underground. The evolution of fluid pressure in a porous medium is governed by conservation of mass and Darcy's law, 

DEMPSEY AND RIFFAULT 

3 

**Water Resources Research** 

10.1029/2018WR023587 

where **q** ′ is the mass flux vector, _Q_ ′ is a mass source term, _𝜑_ and _k_ ′ are rock porosity and permeability, _𝜌_ ′ and _𝜂_ ′ are fluid density and (dynamic) viscosity, _g_ ′ is the acceleration due to gravity, and _̂_ **z** is a unit vector in the vertical direction. 

Application of these equations to a particular scenario requires us to specify the geometry of the flow domain and the injection source. Two cases are discussed below. 

## **2.2.1. Injection at a Point Source** 

Often, injection occurs into geologic formations whose horizontal extent greatly exceeds their vertical thickness and that are bounded above and below by much less permeable formations. For this geometry, flow is primarily radial (Figure 1b). Solving for mass balance under conditions of Darcy flow and homogeneous material properties gives the pressure change at radius, _r_ ′ , and time, _t_ ′ , due to injection at constant mass rate, _q_ ′ , the well-known Theis solution: 

where _p_ 0<sup>′</sup> is the initial pressure, _II_ ′ is the injectivity index of the well, _𝛽_ fl′ is the fluid compressibility, _D_ ′ , _h_ ′ , and _𝛽_ aq′ are, respectively, aquifer diffusivity, thickness, and compressibility, and _W_ ( _x_ ) is the exponential integral. For small values of _x_ , the exponential integral can be approximated _W_ ( _x_ ) ≈ 0 _._ 5772 + ln( _x_ ). A key feature of (2) is that, for all _r_ ′ , pressure increases monotonically and, eventually, logarithmically. This simple model must eventually break down since it predicts infinite pressure at infinite time. This breakdown would typically occur when _p_ ′ becomes so large as to overwhelm—possibly by brittle failure—containment by the upper and lower bounding formations. 

We consider the particular situation that, after a period of injection, _t_ cut<sup>′</sup> , the injection rate is instantaneously reduced by a fraction, _f_ , to a new constant rate, (1 − _f_ ) _q_ ′ . Pressure evolution is then obtained by superposition of the solution (2) for two injectors, one beginning at _t_ ′ = 0 at rate _q_ ′ , and the second beginning at _t_ ′ = _t_ cut′ at the negative rate − _fq_ ′ (i.e., a producing well): 

It is convenient to rewrite (3) in a dimensionless form using the dimensionless quantities _t_ = _t_ ′ ∕ _tcut_ ′, _r_ = _r_<sup>′</sup> ∕2 ~~√~~ _D_<sup>′</sup> _t_ cut<sup>′and</sup><sup>_p_=(</sup><sup>_p_</sup> ′ − _p_ 0′) _II_ ′ ∕ _q_ ′ . Here the diffusion length scale, _rD_ ′, has been used to dimensionalize distance, with _t_ cut<sup>′</sup> the characteristic time for the system. The resulting pressure equation is 

where _f_ = 0 for _t <_ 1. 

Depending on the distance from the well and the size of the rate reduction, _f_ , the pressure evolution is nonmonotonic (Figure 2a). Rather, pressure peaks at some maximum value, shortly after the rate reduction, declines for some time to a minimum value and then starts to increase again. The pressure maximum and minimum occur at _𝜕p_ ∕ _𝜕t_ = 0, which can be expressed as a curve in _r_ - _t_ space 

Equation (5) recalls the backfront result from (Parotidis et al., 2004, their equation (5)), with _f_ =1 and appropriately dimensionalized). 

We are interested in finding, for a given radius, the time at which the pressure maximum occurs. This is obtained numerically as the smaller of the two solutions to the inversion _t_ = _g_<sup>−1</sup> ( _r_ ), with the larger solution 

DEMPSEY AND RIFFAULT 

4 

**Water Resources Research** 

10.1029/2018WR023587 

**Figure 2.** Pressure evolution for point injection and rate reduction of 40% ( _f_ = 0 _._ 4) at _t_ = 1. (a) Pressure change with time at different distances, _r_ , from the well. Profiles at _r < r_<sup>∗</sup> (orange) exhibit a local maximum, while those for _r > r_<sup>∗</sup> (green) do not. The inflection point for the profile _r_ = _r_<sup>∗</sup> (black) occurs at ( _t_<sup>∗</sup> _, p_<sup>∗</sup> ). (b) Pressure change with distance from the well at different times, _t_ . Black profile indicates _t_ = _t_<sup>∗</sup> , orange profiles are for _t <_ 1, the orange dashed profile is at the instance of the rate reduction, _t_ = 1, and green profiles are for _t >_ 1. (c) Pressure contours in _r_ - _t_ space. Vertical dashed line indicates injection reduction at _t_ = 1. The point ( _t_<sup>∗</sup> _, r_<sup>∗</sup> ) is marked by a triangle. 

corresponding to the pressure minimum. Pressure eventually returns to the previous maximum at some later time, _t_ = _h_<sup>−1</sup> ( _r_ ), which is obtained numerically from the solution of _p_ ( _r, g_<sup>−1</sup> ( _r_ )) = _p_ ( _r, t_ ). The corresponding curve in _r_ - _t_ space is denoted _rh_ = _h_ ( _t_ ). 

Finally, the system has a bifurcation point, ( _t_<sup>∗</sup> _, r_<sup>∗</sup> ) with corresponding _p_<sup>∗</sup> , obtained by solution of d _g_ ∕d _t_ = 0 yielding 

The bifurcation point is a function of _f_ only (Figure 3). For _r > r_<sup>∗</sup> , pressure increases monotonically. For _r < r_<sup>∗</sup> , there is a temporary period of pressure decline and then recovery following the rate reduction (Figure 2a). 

## **2.2.2. Injection Distributed Inside a Circular Region** 

A useful generalization of equation (4) is obtained for the situation where ′ mass injection is evenly distributed inside the radial area _r < r_ inj<sup>′</sup> (Figure 1d). Introduction of a second length scale provides a choice of dimensionalization, and for these models (including those incorporating a seismogenic basement), we have opted to define the dimensionless radius, _r_ = _r_ ′ ∕ _r_ inj′. 

The solution to this problem is given by Carslaw and Jaeger (1959), section 13.8, equations (13) and (14), which when appropriately dimensionalized yields 

where _p_ 1 and _p_ 2 are, respectively, pressure inside and outside the injection radius, _rD_ is the dimensionless diffusion length, equivalent to the ratio of diffusion and injection length scales (i.e., _rD_ = √ _D_<sup>′</sup> _t_ cut<sup>′∕</sup><sup>_r_</sup> inj<sup>′),</sup><sup>_Ji_and</sup><sup>_Yi_are,</sup> respectively, _i_ th-order Bessel functions of the first and second kind, and, as in the previous section, _f_ = 0 for _t <_ 1. 

Behavior of the solution is governed by the magnitude of _rD_ (Figure 4). For _rD ≪_ 1, fluid diffusion is slow, and therefore, pressure changes mainly occur within the injection area, with little diffusion into the region outside. After an injection rate reduction has occurred, the low rate of diffusion also limits the amount and period for which pressure inside the injection area is declining. For _rD ≫_ 1, the pressure perturbation is able 

to diffuse farther beyond the boundary of the injection area, resulting in larger pressure declines in the 

postreduction period. 

Pressure evolution for scenarios of distributed injection, and distributed injection overlying seismogenic basement (Figures 1d and 1e), are modeled using a numerical reservoir simulator (see Appendix B for full details). 

## **2.3. Earthquake Triggering** 

Earthquake triggering is commonly understood in terms of the balance of forces on a fault and an instability criterion. Consider a fault plane with normal vector, _̂_ **n** , embedded in an elastic medium with stress tensor, _S_ ′ . Resolved upon the fault's surface is a traction force ( **t** ′ = _S_ ′ · _̂_ **n** ), a normal stress ( _𝜎T_ ′<sup>=</sup><sup>_̂_</sup><sup>**n**</sup><sup>_T_·</sup><sup>**t**′), and a shear</sup> 

DEMPSEY AND RIFFAULT 

5 

**Water Resources Research** 

10.1029/2018WR023587 

stress ( _𝜏_<sup>′</sup> = | **t**<sup>′</sup> − _𝜎T_<sup>′</sup> _̂_<sup>**n**|).TheTerzhagieffectivestresslawand</sup> Mohr-Coulomb failure criterion combine the fluid pressure within the fault, and the shear and normal stresses on it, to express a threshold fault strength, _𝜏s_<sup>′</sup> , for frictional failure 

where _𝜎_ ′ = _𝜎T_ ′ − _p_ ′ is the effective normal stress, and _𝜇_ is the friction coefficient. 

For a stable fault ( _𝜏_<sup>′</sup> _< 𝜏s_<sup>′), Hubbert and Rubey (1959) recognized that an</sup> earthquake could be triggered by fluid pressurization, which will occur when _p_ ′ → _p_ ′ + _𝛥p_ ′ such that _𝜏_ ′ = _𝜏s_ ′<sup>. This implies the existence of critical</sup> fluid pressure threshold, _𝛥p_ ′ , that depends on the local stress state and fault properties, a notion later confirmed by injection experiments in the Rangely Oil Field, Colorado (Raleigh et al., 1976). 

In recent years, there has been increased interest in the role of poroelastic _t_<sup>∗</sup> − 1,, _r_<sup>∗</sup> , and _p_<sup>∗</sup> stressing as a mechanism for earthquake triggering. These effects may be , but rather enclose a small triangular prominent in the short term after changes in injection rate (Segall & Lu,<sup>∗</sup> = 1∕√2], 1∕√2],∕√2],√2],2],],, 2015), at large distances from wells or well clusters (Goebel et al., 2017), or _f_ ≈ 0 _._ 6225 _, r_<sup>∗</sup> = _p_<sup>∗</sup> ≈ 0 _._ 7012].].. when faults are hydraulically sealed from the overlying basement (Chang & Segall, 2016). We have elected not to include poroelastic effects in this study, primarily so as to preserve the physical and computational simplicity of our model, which in turn enables us to focus on robust model forecasting. In future treatments, these effects might be incorporated at a local level through the use of a stress path coefficient, such as that considered by Dempsey and Suckale (2017). However, this would introduce additional model parameters that would need to be constrained and does not address the issue of long-range poroelastic stressing of the type considered by Chang and Segall (2016) and Goebel et al. (2017). 

**Figure 3.** Variation of the bifurcation point quantities, _t_<sup>∗</sup> − 1,, _r_<sup>∗</sup> , and _p_<sup>∗</sup> with _f_ . Despite appearances, the three curves do not all intersect one another at the same point, _f_ ≈ 0 _._ 62, but rather enclose a small triangular area with vertices [ _𝑓_ ≈ 0 _._ 6268 _, t_<sup>∗</sup> − 1 = _r_<sup>∗</sup> = 1∕√2], 1∕√2],∕√2],√2],2],],, [ _f_ ≈ 0 _._ 6240 _, t_<sup>∗</sup> − 1 = _p_<sup>∗</sup> ≈ 0 _._ 6981], and [ _f_ ≈ 0 _._ 6225 _, r_<sup>∗</sup> = _p_<sup>∗</sup> ≈ 0 _._ 7012].].. 

**Figure 4.** Pressure as a function of radial distance at different times and for different values of _rD_ , assuming a 40% reduction in the distributed injection rate. Orange dashed lines show pressure profiles prior to the injection reduction, solid orange at the time of the reduction, and green afterward. The orange-shaded region shows the area where pressure declines in the postreduction period. For the purposes of comparison, we have converted dimensionless pressure change to real pressure change (right-hand axis) using the parameters given in Table 1 and (for a–d) _k_ = 3 _._ 7 × 10<sup>−17</sup> , 3 _._ 7 × 10<sup>−15</sup> , 3 _._ 7 × 10<sup>−13</sup> , and 3 _._ 7 × 10<sup>−11</sup> m<sup>2</sup> . 

DEMPSEY AND RIFFAULT 

6 

**Water Resources Research** 

10.1029/2018WR023587 

## **2.3.1. Local Rate-State Models** 

To model the earthquake-triggering rate at a location, we use the zero-dimensional rate-state model introduced by Dieterich (1994). This model draws on laboratory experiments that studied the time and state evolution of fault friction under changes in loading and slipping velocity (e.g., Dieterich, 1979; Marone, 1998). Rate-state models have been widely used by the seismological community to study the genesis and propagation of earthquake ruptures (e.g., Ampuero & Rubin, 2008; Rice, 1993), as well as the fault response immediately after and during the interseismic period that precedes the next earthquake (e.g., Scholz, 1998). The 0-D model introduced by Dieterich (1994) was the first to generalize rate-state physics to populations of earthquakes and thus provided a physical basis to understand earthquake aftershock sequences. More recently, Segall and Lu (2015) and Norbeck and Rubinstein (2018) have used the model to study populations of induced earthquakes. 

The Dieterich (1994) rate-state model supposes that a fault comprises a population of nucleation sources, each of which has the potential to enter an episode of self-driven sliding instability leading, eventually, to an earthquake. The sliding behavior of each source is governed by a rate-state model of friction behavior including a state evolution equation that depends on slip and normal stress (Linker & Dieterich, 1992; Ruina, 1983). In this framework, the “state” of each source is sometimes interpreted as the total area and strength of the contacting surfaces at the location of the source, a quantity that evolves even under constant slipping conditions. In contrast, Dieterich (1994) introduced a second variable characterizing the state of the population of sources, in this case a distribution parameter describing their slip speeds. By considering the collective response of the population of sources under an arbitrary shear and normal loading history— _𝜏_ ′ ( _t_ ′ ) and _𝜎_ ′ ( _t_ ′ )—an evolution equation is derived for the bulk seismicity rate, _n_ (earthquakes per unit time), of the fault 

where _A_ is the direct-effect parameter in the rate-state model, which quantifies the friction increase in response to a velocity step, _𝛼_ is a constitutive parameter that links changes in normal stress to the rate at which the fault's frictional state evolves, and _n_ 0 is the seismicity rate corresponding to a reference stressing rate, _̇𝜏_ 0<sup>′, at fixed normal stress. It is common to set the reference seismicity and stressing rates to the tectonic</sup> background( _n_ tec = 1 and _̇𝜏_ tec<sup>′).</sup> 

## **2.3.2. Pressure-Driven Rate-State Model** 

For the situations we consider here, any change in the effective normal stress is solely attributable to pressure effects ( _𝜎_<sup>′</sup> = _𝜎_ 0<sup>′−Δ</sup><sup>_p_′ and d</sup><sup>_𝜎_</sup> ′ ∕d _t_ ′ = −d _p_ ′ ∕d _t_ ′ ). Furthermore, those pressure changes are sufficiently rapid that tectonic shear loading during the period of interest is negligible ( _𝜏_<sup>′</sup> ≈ _𝜏_ 0<sup>′). Then, assuming that shear</sup> stress loading is solely tectonic (d _𝜏_<sup>′</sup> ∕d _t_<sup>′</sup> = _̇ 𝜏_ tec<sup>′), and introducing nondimensionalized stresses,</sup><sup>_𝜎_=</sup><sup>_𝜎_</sup> ′ _II_ ′ ∕ _q_ ′ and _𝜏_ = _𝜏_ ′ _II_ ′ ∕ _q_ ′ , equation (10) can be expressed as 

where we have defined a pressure-dependent characteristic decay time, _ta_ ≡ _A𝜎_ ∕ _̇𝜏_ tec = _ta,_ 0(1 − _p_ ∕ _𝜎_ 0), with value _ta_ ,0 at _p_ = 0, and a stress ratio, _𝜇_ 0 = _𝜏_ 0∕ _𝜎_ 0, that reflects the initial shear, _𝜏_ 0, and normal stresses, _𝜎_ 0. Segall and Lu (2015) used a slightly different version of this model to investigate induced seismicity due to normal and shear loading arising from poroelastic effects. Their formulation is recovered from equation (10) in the limit of small pressure changes ( _p ≪𝜎_ 0) and stress perturbations ( _𝜏_ ≈ _𝜏_ 0), by setting _𝛼_ = 0 and by recognizing the ratio _𝜏_ 0∕ _𝜎_ 0 as the static friction coefficient. 

## **2.3.3. Steady State Stressing Model** 

In the limit that pressure changes are much more rapid than the tectonic load (d _p_ ∕d _t ≫̇ 𝜏_ tec), equation (11) can be rewritten as 

DEMPSEY AND RIFFAULT 

7 

**Water Resources Research** 

10.1029/2018WR023587 

where _𝜇_ ′ = _𝜇_ 0∕(1 − _p_ ∕ _𝜎_ 0) − _𝛼_ is like a friction coefficient and has an order of magnitude similar to measured friction coefficients ( _𝜏_ 0∕ _𝜎_ 0 ≈ 0.6–0.8, Byerlee, 1978; _𝛼_ = 0.2–0.3, Hong & Marone, 2005; Linker & Dieterich, 1992) for small values of _p_ ∕ _𝜎_ 0. In this form, the term _ta_ parameterizes how rapidly seismicity equilibrates to a change in the stressing rate. Equation (12) diverges in the tensile failure limit ( _p_ → _𝜎_ 0) as _𝜇_ ′ → ∞ and _ta_ → 0, although we do not explore that limit here. 

The steady seismicity rate implied by (12) is proportional to the pressure loading, 

noting that _𝜇_ ′ is technically not constant, but rather increases with fluid pressure. For small values of _ta_ , seismicity equilibrates rapidly to its steady value, and we may use the approximation _n_ ≈ _n_ ss. 

## **2.3.4. Global Seismicity Model** 

A drawback of equation (11) is that there is no threshold stress or pressure to distinguish periods of seismicity from periods of quiescence, as is implied by a simple Mohr-Coulomb model (respectively, _𝜏_ = _𝜏s_ and _𝜏< 𝜏s_ ). Instead, faults are always assumed to be in a state of near failure. Clock-advance models have been proposed (e.g., Gomberg et al., 2005) that address this shortcoming through introduction of a fault maturity parameter that models how far advanced a fault is in its seismic cycle. 

In this study, we address the issue of fault maturity—or proximity to failure—through a combination of the Mohr-Coulomb criterion and the stressing rate model (13). The steps we follow to compute a global (total) seismicity rate, _N_ ( _t_ ), for a system with arbitrary pressure evolution, _p_ ( _r, t_ ), are as follows: 

1. Assume an infinite, homogeneous medium through which identically oriented and prestressed faults are uniformly distributed, as in Segall and Lu (2015). 

2. Choose a critical pressure rise, _pc_ , for the domain. The local seismicity rate, _n_ ( _r, t_ ), is zero until _pc_ is exceeded. 

3. Once exceeded, _n_ ( _r, t_ ) is proportional to the local pressure loading, _𝜕p_ ∕ _𝜕t_ , as given by the steady state stressing model (13). Proportionality is assumed constant in time; that is, we are neglecting variation in _𝜇_ ′ with _p_ . 

4. Compute the global seismicity rate, _N_ ( _t_ ), as the integral over space of the local seismicity rate. For point injection sources (Figure 1b), this is evaluated semianalytically. For distributed injection configurations (Figures 1d and 1e), where _p_ is computed using a reservoir simulator, _𝜕p_ ∕ _𝜕t_ is evaluated by finite differences and the integral over space computed numerically according to the scheme outlined in Appendix B. 

5. If pressure should locally decrease in response to an injection rate change, faults are no longer being destabilized in a Mohr-Coulomb sense and therefore the local seismicity rate drops to zero. Pressure must exceed the previous maximum value at that location before seismicity can restart, at which time it is once again proportional to the local pressure loading. The retreat from and then return to failure is sometimes referred to as the Kaiser effect (Baisch & Harjes, 2003). 

A model formulated based on these principles was used by Dempsey and Suckale (2017) to replicate 20 years of induced seismicity at Groningen natural gas reservoir in the Netherlands. In that study, evolving fluid pressure was output by a reservoir simulator, whereas here we use both analytic expressions and simple numerical models appropriate to generic injection scenarios. The approach is also similar to models presented by Shapiro and coworkers (Johann et al., 2016; Langenbruch & Shapiro, 2010; Shapiro & Dinske, 2009; Shapiro et al., 2013), although the physical motivation of their model invokes a (uniform) distribution of failure pressures, _pc_ . 

We can estimate a range for _pc_ using typical parameter values and considering the average (active) fault. This fault will be halfway through its seismic cycle, which, assuming a constant loading rate, means that a stress increase (or strength decrease) equal to half its coseismic stress drop (1 to 10 MPa; Huang et al., 2017) will trigger failure. For average rock friction (∼0.7; Byerlee, 1978), _pc_<sup>′</sup> is then about 7 MPa (equation (9)). Dimensionalizing (see equation (2)) using typical fluid viscosity (10<sup>−3</sup> kg·m<sup>−1</sup> ·s<sup>−1</sup> ) and density (10<sup>3</sup> kg/m<sup>3</sup> ), and an injection rate of 100,000 bbl/month into a 100-m thick formation with permeability between 10<sup>−14</sup> and 10<sup>−15</sup> m<sup>2</sup> , _pc_ could be in the range 0.14 and 17. Note, this is merely an order-of-magnitude guide for 

DEMPSEY AND RIFFAULT 

8 

**Water Resources Research** 

10.1029/2018WR023587 

**Figure 5.** The two-limit schemes for _pc > p_<sup>∗</sup> (a and c) and _pc < p_<sup>∗</sup> (b and d). (a, b) The _r_ - _t_ plots of fluid pressure highlighting regions where the local seismicity rate is nonzero (blue) or zero because either (i) pressure has yet to exceed _pc_ (white), (ii) pressure is in decline (red), or (iii) pressure is increasing but still below a previous maximum value (Kaiser effect, green). The bifurcation point is indicated by a white triangle and pressure isolines by the solid contours (heavy contour shows _rc_ ( _t_ )). (c, d) Seismicity rates corresponding to the _r_ - _t_ plots above. Note the quiescence in (d) and its delineation _tg_ and _th_ given by the intersection in (b) of _rc_ ( _t_ ) with _g_ ( _t_ ) and _h_ ( _t_ ), respectively. 

subsequent discussions, and _pc_ could be quite different for other fluids, injection operations, or noncritical crustal stress states. 

# **3. Modeled Response of Induced Seismicity to an Injection Rate Reduction** 

Following points 3 and 4 above and using the pressure results developed in section 2.2.1 for point injection into a 2-D geometry, the global seismicity rate prior to an injection reduction is expressed 

where _rc_ ( _t_ ) is the distance from the well at which fluid pressure has risen to the critical pressure; that is, _rc_ = ~~√~~ _tW_<sup>−1</sup> ( _pc_ ), where _rc_ → ∞ as _pc_ → 0. Substituting this expression for _rc_ into (14), the dependence on time vanishes, and thus, at constant injection rate, the seismicity rate is constant for any _pc_ . A more general result was developed by Shapiro and Dinske (2009) that, under their assumptions, suggested that injection and seismicity rates should be proportional for arbitrary injection modulation. Their constant of proportionality was related to poroelastic, stress, and structural properties of the medium. 

We also explicitly introduce a constant of proportionality, _𝜅_ , which modulates the amount of seismicity per unit pressure increase over the integrated area. Although _𝜅_ is not defined in terms of other properties of the crust or injected fluid, it nevertheless aggregates the modulating effects of fracture density, seismogenic fault depth, degree of aseismic creep, etc., on the seismic productivity of fractured rock under fluid load. We have assumed that _𝜅_ is constant for all hypothetical faults in our domain, and although this avoids parameterizing _𝜅_ ( **x** ) in the integral of (14), it is unlikely to be true in any real setting. Thus, our model can only describe the average response of a population of faults, but will not replicate accurately the seismicity associated with any specific structure. Theoretical discussion of these models in the rest of this section addresses relative differences in seismicity rate, both changes over time but also between different injection scenarios. This allows us to normalize the seismicity rate and essentially discard _𝜅_ from equation (14). Later, when we develop a model for Oklahoma, a range for _𝜅_ is estimated by calibration to earthquake data. 

DEMPSEY AND RIFFAULT 

9 

**Water Resources Research** 

10.1029/2018WR023587 

**Figure 6.** Response of seismicity rate to an injection rate reduction. (a) For different rate reductions, _f_ , all curves computed for _pc_ = 0. (b) For different critical injection pressures, _pc_ , all curves computed for _f_ = 0 _._ 4. The time at which the reduction is imposed is indicated by a vertical dotted line. 

Once injection is reduced, pressure starts to decline at some locations (Figure 2a), and seismicity temporarily ceases in these regions. For _t >_ 1, an adjustment is made to the limits of the integral (14) 

to exclude those regions in which _𝜕p_ ∕ _𝜕t <_ 0 or where fluid pressure has yet to exceed a previous maximum (Kaiser effect). Finally, the seismicity rate is normalized by its value immediately prior to the rate reduction (i.e., _N_ = 1 at _t_ = 1), which drops the term _𝜅_ from subsequent expressions. 

Two limit schemes are identified (Figure 5): 

1. For _pc < p_<sup>∗</sup> (corresponding to _rc > r_<sup>∗</sup> ) then, although seismicity may temporarily cease at some locations, there are others that generate seismicity at all times, that is, the global seismicity rate is always nonzero. In this case, _r_ in = _g_ ( _t_ ) for _t < t_<sup>∗</sup> , and _r_ in = _h_ ( _t_ ) for _t > t_<sup>∗</sup> . 

2. For _pc > p_<sup>∗</sup> (and _rc < r_<sup>∗</sup> ), there will be a finite period of time for which seismicity has ceased everywhere around the well, only to start up again later. We delimit the quiescent period [ _tg, th_ ], with the boundaries, respectively, determined by numerical inversion of _pc_ = _p_ ( _g_ ( _tg_ ) _, tg_ ) and _pc_ = _p_ ( _h_ ( _th_ ) _, th_ ). Then, as in the first case, _r_ in = _g_ ( _t_ ) for _t < tg_ , and _r_ in = _h_ ( _t_ ) for _t > th_ , and _N_ = 0 for _tg < t < th_ . 

Induced seismicity solutions for point source injectors in other dimensions are given in Appendix A. 

## **3.1. Decay, Quiescence, and Recovery After Injection Reduction at a Single Well** 

For the case of injection at a point (equations (4) and (14)), our model predicts that the seismicity rate should be constant prior to any changes of the injection rate. Following the rate reduction, a new (constant) seismic- 

ity rate will eventually be established following a period of equilibration. In practical situations, deviations from a stable equilibrium seismicity rate are anticipated, attributable to breakdowns in the assumption of evenly distributed and prestressed fractures or homogeneous material properties. 

The case that all faults are precisely on the limit of failure ( _pc_ = 0) provides an illustrative (if theoretical) end member. In this case, imposition of a rate reduction, _f_ , results in a proportionate decrease in the new equilibrium seismicity rate (Figure 6a). This is in agreement with the result from Shapiro and Dinske (2009) that seismicity and injection rate are proportional. 

In the case of a finite failure pressure ( _pc >_ 0), the reduction of the equilibrium seismicity rate is greater than the proportional reduction in injection (Figure 6b). An expression for the new equilibrium rate, _N_ eqm, is obtained by substituting _r_ in = 0 in equation (14), substituting the approximation _rc_ ≈ √ _tW_<sup>−1</sup> ( _pc_ ∕(1 − _𝑓_ )), valid under the long-time limit ( _t_ → ∞), and then normalizing by the initial rate 

contours of which are shown in Figure 7a. Equation (16) recovers the earlier result that reducing injection effects a proportionate reduction of seismicity rate for faults that are on the failure envelope, _pc_ =0. 

It is also under noncritical conditions ( _pc >_ 0) that both a quiescence and recovery are possible. We define a quiescence as a total cessation of all seismicity, occurring because the pressure at all locations is either (i) falling, (ii) increasing, but still below a previous maximum (Kaiser effect), or (iii) still less than _pc_ (see Figure 5b between _tg_ and _th_ ). The length of the quiescent period increases both with the size of the rate 

DEMPSEY AND RIFFAULT 

10 

**Water Resources Research** 

10.1029/2018WR023587 

**Figure 7.** (a) Equilibrium seismicity rate as a function of the size of the rate reduction for different critical pressures. See also equation (16). (b) Length of the quiescent period as a function of the critical pressure for different rate reductions. 

reduction and the critical pressure value (Figure 7b). If models of these type are to be used for forecasting purposes, then determination of an appropriate range for a site-specific _pc_ is essential. 

After decaying to some minimum rate, _N_ min, (or a temporary quiescence), there can be a partial recovery of the seismicity rate, _N_ rec. This recovery can be as much as 25% of the prereduction seismicity, and the largest recoveries tend to occur for rate reductions on the order 30–40% (Figure 8b). A problematic aspect of these short-term seismicity transients is that they can be misleading about the long-term success of a particular mitigation strategy. Although cutting injection may immediately reduce or eliminate unwanted earthquakes, over a longer period, seismicity may recover to unacceptable levels. 

## **3.2. Rate-State Friction Effects** 

Here we develop an understanding of how seismicity rate modeled in the previous section should be modified to take account of rate-state friction. We use the same pressure models developed in section 2.2.1, but instead of a steady state pressure loading model for the local seismicity rate (equation (13)), we use the rate-state model given by equation (11). We assume that _p < < 𝜎_ 0, which explicitly neglects pressure dependence of the parameters _𝜇_ ′ and _ta_ . This first-order, nonlinear ODE is solved using the LSODE method provided within ODEPACK (Radhakrishnan & Hindmarsh, 1993) and implemented in the Python Scipy.Integrate.ODE method. A global seismicity rate, normalized to 1 at _t_ = _t_ cut, is then computed according to the integral 

Setting _𝜇_ 0 ( = 0 _._ 7) and _𝛼_ ( = 0 _._ 25) to typical laboratory values (Byerlee, 1978; Hong & Marone, 2005; Linker & Dieterich, 1992), the rate-state model introduces two additional parameters, _ta_ and _̇ 𝜏_ tec, in addition to size of the rate reduction, _f_ . We limit our analysis to a realistic range for _ta_ ( = _ta_<sup>′</sup> ∕ _t_ cut<sup>′</sup> ), which is really just the ratio of rate-state ( _ta_<sup>′) and injec-</sup> tion time scales ( _t_ cut<sup>′</sup> ). From the fit of rate-state models to aftershock observations (e.g., Dieterich, 1994; Perfettini & Avouac, 2004), or by quantifying values of _A_ , _̇ 𝜏_ tec<sup>′, and</sup><sup>_𝜎_(Segall & Lu, 2015), we suggest that a</sup> reasonable range for _ta_<sup>′</sup> is 1 to 100 years. Then, for injection operations lasting as little as 1 day and as long as 3 years, a possible range for _ta_ is 10<sup>0</sup> to 10<sup>5</sup> . 

Similarly, we constrain a realistic range for _̇ 𝜏_ tec(= _̇ 𝜏_ tec<sup>′</sup><sup>_t_</sup> cut<sup>′</sup><sup>_II_′∕</sup><sup>_q_′). First, we suppose</sup><sup>_̇ 𝜏_</sup> tec<sup>′is in the magnitude</sup> range 10<sup>−4</sup> to 10<sup>−5</sup> Pa/s, equivalent to a 1-MPa stress drop on a fault every 315 to 3150 years. Then, for a typical injection rate at a problematic wastewater disposal well (or Enhanced Geothermal System stimulation), _q_ ′ = 20 kgs−1 (Baisch et al., 2006; Häring et al., 2008; Weingarten et al., 2015), fluid viscosity, _𝜂_ ′ = 10−3 kg·m−1·s−1, formation thickness _h_ ′ =100 m, and formation permeability between 0 _._ 5 × 10−14 and 0 _._ 5 × 10<sup>−16</sup> m<sup>2</sup> , we obtain a possible range for _̇ 𝜏_ tec of 0.006 to 5 × 10<sup>−9</sup> . 

Because the rate-state model assumes a system in which faults are at the failure limit, a meaningful comparison with the stressing rate model is only possible when setting _pc_ = 0 in the latter. 

For _̇ 𝜏_ tec = 10<sup>−6</sup> and _ta <_ 10<sup>2</sup> (Figure 9a), the rate-state seismicity model equilibrates to the stressing rate so rapidly as to be almost indistinguishable from the stressing rate model given in equation (13) and Figure 6. For 10<sup>2</sup> _< ta <_ 10<sup>4</sup> , seismicity resembles the equilibrium stressing rate model except that changes in the rate are comparatively sluggish. For increasing _ta_ , there is an increasingly pronounced recovery of the seismicity rate in the postreduction period, similar to that described in section 3.1 and illustrated in Figure 6b. At the upper limit of _ta_ = 10<sup>5</sup> , seismicity is still increasing exponentially prior to the rate reduction, indicating that the system is evolving slowly and is still near to its initial (tectonic) state. The induced seismicity rate will be low (on the order of the tectonic rate) and, although a rather extreme recovery is predicted, this would be at a level unlikely to be observed. 

DEMPSEY AND RIFFAULT 

11 

**Water Resources Research** 

10.1029/2018WR023587 

**Figure 8.** (a) Time to minimum seismicity rate or beginning of quiescent period as a function of the size of the rate reduction for different critical pressures. The sharp change in gradient for the three curves where _pc >_ 0 delineates the transition between the two limit schemes in Figure 5. (b) Size of the seismicity recovery, _N_ rec, as a fraction of the prereduction seismicity, for different _f_ and _pc_ . _N_ rec = _N_ eqm if there has been a quiescence, and _N_ rec = _N_ eqm − _N_ min if there has not. 

A similar response of the rate-state seismicity model is observed across the plausible range of _̇ 𝜏_ tec, for _ta_ fixed at 10<sup>2</sup> (Figure 9b). Because the pressure loading has the same magnitude ( _ta_<sup>′</sup><sup>_II_′∕</sup><sup>_q_′) in all cases, the variability</sup> in the seismic response (from rapid equilibration at _̇ 𝜏_ tec _<_ 10<sup>−5</sup> to slow response at _̇ 𝜏_ tec = 10<sup>−3</sup> ) arises from how its magnitude compares to that of the background tectonic loading. 

To illustrate, we have simulated the seismicity response for selected parameters corresponding to the following: (1) high-pressure stimulation of a well in low-permeability rock (10<sup>−16</sup> m<sup>2</sup> ), where injection is for a short period ( _t_ cut<sup>′</sup> = 1 day); and (2) wastewater disposal, where injection is for a longer time ( _t_ cut<sup>′</sup> = 3 years) targeting a high-permeability aquifer (10<sup>−14</sup> m<sup>2</sup> ). In both cases, the background stressing rate is assumed to be low ( _̇𝜏_ tec<sup>′=10−5 Pa/s),thecharacteristicdecaytimeismidrange,</sup> _ta_<sup>′=30 years, and all other parameters have the same values as those in</sup> Figures 9a and 9b. For both scenarios, the rate-state seismicity solution is modestly well approximated by the steady stressing rate model, although it fails to capture a small recovery and long-term increases (∼15% in error after 300 years) for the wastewater injection case (Figure 9c). Given the modest nature of these errors, the substantial advantage in computational speed and stability, and the ability to capture the effect of nonzero _pc_ , we opt to use the steady-stressing model in subsequent analyses. 

## **3.3. Distributed Injection Models and Seismicity Delay** 

′ For models of injection distributed evenly within the radial area _r < r_ inj<sup>′</sup> , pressure buildup and response to a rate reduction is sensitive to the relative size of diffusion versus injection length scales, _rD_ (Figure 4). However, when assuming a stressing rate model for earthquake triggering with _pc_ = 0, there is little to suggest a difference in the global seismicity rate across a range of values of _rD_ (Figure 10a). 

In fact, models with different values of _rD_ only become distinguishable when considering exactly where the seismicity is occurring. Computing seismicity rates within and outside the injection zone ( _r <_ 1 and _r >_ 1; Figure 10b), we observe that models parameterized by small values of _rD_ 

(low diffusivity) localize their seismicity within this region. As _rD_ increases, more pronounced pressure diffusion beyond the boundary of the injection area results in an increasing shift in seismicity to this region. This result suggests that, under particular conditions, _rD_ and, by extension, an aquifer's diffusion characteristics, could be assessed through a spatiotemporal analysis of the induced seismicity. Indeed, this philosophy underpins another common method for inferring flow characteristics, which relies on tracking advancing fronts of seismicity and then fitting a diffusion model (Parotidis et al., 2004; Shapiro et al., 1997). 

Distributing injection over a finite area eliminates the pressure singularity at _r_ = 0 that exists in point source models. A consequence is that, for models with _pc >_ 0, a finite time is required before pressure buildup exceeds the critical value and seismicity begins. The delay in seismicity onset is longer when a system is further from failure (larger values of _pc_ ; see Figure 10c). Additional effects of a nonzero _pc_ are otherwise similar to those described for the point source model (Figure 7b), tending to promote a larger recovery of the seismicity rate in the long term, but, overall, a lower postreduction equilibrium rate, _N_ eqm. 

## **3.4. Distributed Injection Overlying a Seismogenic Basement** 

The final class of model we consider is an extension of the distributed injection configuration described above. The injection model is modified to represent the effects of 1-D vertical diffusion of aquifer pressure changes to an arbitrary depth of seismogenesis in underlying crystalline basement rock (Figure 1e), retaining a stressing rate model for earthquake triggering. Thus, pressure at a given basement depth, _z_ ′ , and radius _r_ ′ depends solely on the immediately overlying aquifer pressure _p_ ′ ( _r_ ′ _, z_ ′ = 0). The seismicity solutions that are developed depend now on relative trade-offs between three dimensionless length scales: two diffusion lengths associated with the aquifer and basement, _rD_ and _r_ Db, and the depth to seismicity, _r_ seis (recall, these lengths have been dimensionalized by _r_ inj<sup>′</sup> and hence each quantity is a ratio). 

DEMPSEY AND RIFFAULT 

12 

**Water Resources Research** 

10.1029/2018WR023587 

**Figure 9.** Seismicity rate responding to a 40% injection reduction using a rate-state seismicity model. (a) For a plausible range of _ta_ and _̇ 𝜏_ tec = 10<sup>−6</sup> . The stressing rate model given in Figure 6 corresponds to _ta_ = 0. (b) For a plausible range of _̇ 𝜏_ tec and _ta_ = 10<sup>2</sup> . (c) For select parameter combinations: an Enhanced Geothermal System well stimulation (dotted line), with _ta_ = 1 _._ 1 × 10<sup>4</sup> and _̇ 𝜏_ tec = 5 _._ 4 × 10<sup>−9</sup> , corresponding to _ta_<sup>′= 30 years,</sup> _t_ cut<sup>′</sup> = 1 day, _̇ 𝜏_ tec<sup>′= 10−5 Pa/s,</sup><sup>_k_</sup> ′ = 10−16 m2; a wastewater injection (dash-dotted line), with _ta_ = 10<sup>1</sup> and _̇ 𝜏_ tec = 5 _._ 4 × 10<sup>−9</sup> , corresponding to _ta_<sup>′= 30 years,</sup><sup>_t_cut′=3 years,</sup><sup>_̇ 𝜏_</sup> tec<sup>′= 10−5 Pa/s,</sup><sup>_k_</sup> ′ = 10−14 m2. 

Although it is not practical to present an exhaustive set of parameter combinations, we can nevertheless understand the effect of the permeable basement using a few test cases. Taking as a benchmark the case that all length scales are equal, _rD_ = _r_ Db = _r_ seis = 1, we test order-of-magnitude variations of the ratio _r_ Db∕ _r_ seis. Because flow is assumed to be vertically directed in the basement, it is the relative size of these length scales that controls the resulting seismicity. The effect of varying the diffusion-injection length ratio _rD_ is largely captured in the preceding section. 

For the case of zero critical pressure, the principal effect of either decreasing the basement diffusivity or increasing the depth to seismogenesis is to delay the time at which seismicity starts to visibly accelerate. Although mathematically, pressure immediately increases throughout an (infinite) domain in response to injection, in practice, downward propagation of fluid mass from an overlying aquifer, as well as an increase in the pressurization rate, will be delayed by a less permeable basement or where diffusion has to occur to a greater depth. 

The delay in seismicity onset appears to be exacerbated in situations where there is a nonzero critical pressure (Figure 11b), as noted in the previous section. Not only must a pressure perturbation travel a finite distance into the basement, once it has arrived at the seismogenic depth, the pressure must then build to the threshold for earthquake triggering to begin. 

# **4. An Induced Seismicity Model for Western Oklahoma** 

The unprecedented increase of seismicity in certain parts of Oklahoma since 2012 has been widely attributed to injection of massive amounts of saltwater into the Arbuckle formation, which overlies faulted crystalline basement (Walsh & Zoback, 2015). Responding to the increased rate of earthquakes, Oklahoma regulators issued a directive to well operators that injection volumes in two severely impacted regions be reduced by 40% (Langenbruch & Zoback, 2016). The measures have apparently been quite successful, with year on year declines in the seismicity rate since peaks in 2014 and 2015. 

In this section, we apply our model of 2-D-distributed injection overlying a seismogenic basement to a region in western Oklahoma that falls under the volume reduction mandate. We begin with a review of similar modeling studies and then describe our own setup, a formalized calibration, and three seismicity forecasts out to 2025. 

## **4.1. Review of Oklahoma and Kansas Induced Seismicity Models** 

Responding to intense public interest in the anomalous rates of seismicity within the central United States, several studies have investigated earthquake triggering using physics-based models at a range of scales. 

Langenbruch and Zoback (2016) presented a model for seismicity in the two regions affected by the 40% volume reduction mandate. Their model utilizes several components, including a model of 3-D pressure diffusion within crystalline basement due to individually located Arbuckle wells, a seismogenic index model to link the pressure and seismicity rates (Shapiro et al., 2011), and a modified Omori decay law (Langenbruch & Shapiro, 2010) that they propose captures the seismicity decline in recent years. Their primary conclusion was that the mandated reductions were sufficient that seismicity should return to tectonic background levels within a few years, although the authors caution that their model is not intended as a final or reliable seismic 

DEMPSEY AND RIFFAULT 

13 

**Water Resources Research** 

10.1029/2018WR023587 

**Figure 10.** Seismicity rate responding to a 40% injection reduction using a stressing rate model and a distributed injection configuration. (a) For different values of the diffusion-injection length ratio, _rD_ , when _pc_ = 0 and the contribution to seismicity rate by the region inside the injection radius (dashed profiles). (b) For different values of the diffusion-injection length ratio, as in (a) and the contribution to seismicity by the region outside the injection radius, (dotted profiles). (c) For different values of the critical pressure, _pc_ , when _rD_ = 1. Note that minor oscillations in the profiles in (c) arise from mesh discretization and the logic used to identify seismically active model elements. 

hazard model for Oklahoma. Here we challenge the conclusions of Langenbruch and Zoback (2016) that (1) the mandated rate reductions in 2016 are an effective measure to mitigate seismic hazard and (2) that seismicity will soon return to background levels. 

A revised version of the above model is presented in Langenbruch et al. (2018). This new model introduces a spatially variable seismogenic index that provides for tailored forecasts at a regional-scale (∼20 km). It discards the modified Omori decay law for future seismicity and replaces it with pressurization-driven seismicity under an assumed injection scenario. Finally, the injection rate cutoff threshold for seismicity is replaced by an empirically fitted quadratic relationship between earthquake triggering and pressurization rate. The revised forecast concludes that _M_ ≥ 5 seismicity in Oklahoma and Kansas between 2018 and 2020 is likely (58%: 2020 obtained as _P_ tot = 1 − ∑ 1 − _Pi_ , where _Pi_ are directly reported in ; _i_ =2018 Langenbruch et al., 2018). 

Norbeck and Rubinstein (2018) presented a model of the induced seismicity in several areas of Oklahoma and Kansas, which utilizes a rate-state physical framework similar to that described in section 3.2. While the authors conclude that temporal features of the bulk seismicity rate—the timing of onset, peak rate, and decline—are well captured by an RS model, they are unable, by its construct, to consider a fluid pressure threshold, which we find introduces a similar delay. However, although we might disagree with the authors about which are the key physics that underpin seismicity in this region, we are in full agreement with their assertion that forecast models informed by diffusion and earthquake physics enjoy substantial advantage over statistical models that rely solely on prior earthquake observations (e.g., Petersen et al., 2017). 

Other studies have presented a finer-grained perspective, focusing their attention on particular earthquake sequences and their relation to nearby disposal wells presumed to play a triggering role (e.g., Barbour et al., 2017; Goebel et al., 2017; Hearn et al., 2018). These models suggest low-triggering thresholds with pressure rises of the order 0.01 MPa and may invoke either poroelastic stress changes as a supplementary triggering mechanism (Barbour et al., 2017; Goebel et al., 2017), or 1-D channelized geometries that amplify fluid pressure rises (Goebel et al., 2017). 

## **4.2. Model Setup** 

To understand physical drivers behind the recent decline of seismicity in Oklahoma, we have developed a simplified model of injection, pressure buildup, and induced seismicity for the region referred to by Langenbruch and Zoback (2016) and Norbeck and Rubinstein (2018) as Western Oklahoma (WO). Within this ∼13,000 km<sup>2</sup> region in the northwest of the state (Figure 12), injection has predominantly occurred inside a circular region of radius approximately 50 km (see Langenbruch & Zoback, 2016, Figure 2). The total injection rate increased rapidly in 2013, peaked in 2015, and has since seen year on year declines to a level well below the 40% mandated reduction. 

To model the evolution of WO seismicity, we adapted our model of 2-D distributed injection overlying seismogenic basement (section 3.4) to use the time-varying injection rate since 2004. Injected mass is evenly distributed inside a circular area with radius 50 km (Table 1). We approximate the Arbuckle formation as a 500-m-thick layer of unknown isotropic permeability, 10% porosity, and matrix compressibility 2 × 10<sup>−11</sup> Pa<sup>−1</sup> (Goebel et al., 2017; Kroll et al., 2017). The basement has unknown vertical permeability and is assigned negligible horizontal permeability, consistent with a conceptual understanding of vertically oriented faults as the primary conduits conducting overpressure to seismogenic depths. The faulted basement is assigned zero compressibility and 1% porosity. 

DEMPSEY AND RIFFAULT 

14 

**Water Resources Research** 

10.1029/2018WR023587 

**Figure 11.** Seismicity rate responding to a 40% injection reduction using a stressing rate model and a distributed injection overlying seismogenic basement configuration. (a) For _rD_ = 1 and different values of _r_ Db or _r_ seis, holding the other equal to _rD_ . (b) For different values of the critical pressure, _pc_ , for the case that _r_ Db = 10<sup>0.5</sup> and _rD_ = 1. 

Observations show that the basement in Oklahoma is seismogenic to at least 6-km depth below the Arbuckle, but the greatest density of triggered events occurs at about 4.5-km depth (Schoenball & Ellsworth, 2017). Therefore, rather than computing seismicity using the pressurization rate at a single basement depth, we instead allow seismicity to be generated from _m_ -modeled depth layers. We then compute a global seismicity rate, _N_ , as the weighted sum of all the depth contributions, that is, 

where _Ni_ is the seismicity rate in the _i_ th layer, modeled according to the procedure outlined in Appendix B. For our weights, _wi_ , we use a Gumbel probability distribution (Figure 12) integrated over the layer thickness, [ _z_ lower _, z_ upper]. The weighting distribution is parameterized by a center, _̄ z_<sup>′</sup> , and spread, _𝜎z_<sup>′,whicharefittedagainstthedepthdistributionofOkla-</sup> homa earthquakes located by Schoenball and Ellsworth (2017). Thus, although the pressurization rate is quite high immediately below the aquifer, the weighting function is almost zero here, and so the seismicity contribution at this depth is minimal. We do not offer a physical justification for the envelope's shape, except to note a possible preference for aseismic slip at shallower depths (Blanpied et al., 1991; Rice, 1993). In any case, a choice must be made before seismicity can be simulated. Forcing our model to output a seismicity depth distribution consistent with observation is at least less arbitrary than simulating seismicity at a single depth (e.g., Figure 11.) Weighting all depths equally is also not preferable, as this would result in the highest density of events occurring at the aquifer-basement interface, in contrast to the observations. 

Our model is deliberately simplified in that it does not consider the specific locations of individual Arbuckle wells or known faults, or heterogeneity of material parameters, as was considered by Langenbruch et al. (2018). These factors are important if the goal of the model is to replicate accurately the local seismicity rate within WO. In light of these limitations, we focus on the global seismicity rate, which averages over local variability in favor of a regional-scale perspective on physical drivers and future activity. At the same time, the simple nature of our model means that it executes rapidly. This enables systematic model calibration and estimation of parameter uncertainty, beyond a traditional sensitivity analysis. The uncertainty can then be embedded in seismicity forecasts under different injection scenarios. 

As in section 3.4, pressure changes are modeled using a reservoir simulator (see Appendix B for details). The model grid extends 5,000 km radially (to minimize boundary effects), and 6-km deep in the basement. All boundaries are closed to fluid flow and fluid properties are calculated for a reference temperature of 100<sup>◦</sup> C. 

Seismicity is computed according to the methods described in section 2.3.4 assuming a steady state stressing rate model for seismicity. Rate-state friction effects are neglected on the basis that they are small compared to the first-order response captured by a stressing rate model (Figure 9). The scaling parameter _𝜅_ is unknown, to be estimated during calibration. Finally, a background seismicity rate is added to the simulated triggering rate, equal to 1.16 _M_ ≥ 3 event per year for the entire state of Oklahoma (181,000 km<sup>2</sup> ) used by Langenbruch and Zoback (2016), scaled appropriately to the area of WO (13,000 km<sup>2</sup> ). 

## **4.3. Calibration** 

The best data for determining the quality of a given seismicity model are observations of earthquakes occurring within WO, which we obtain directly from the United States Geological Survey catalog. Following the approach of Dempsey and Suckale (2017), individual seismicity rate models are scored using a likelihood expression for a nonhomogenous Poisson process with rate parameter _𝜆_ ( _𝜃_ ; _t_ ) 

DEMPSEY AND RIFFAULT 

15 

**Water Resources Research** 

10.1029/2018WR023587 

**Figure 12.** Western Oklahoma (WO) region of high-volume injection and associated _M_ ≥ 3 earthquakes. Superimposed is the 50-km circular injection region of our model. Reported injection rates, future scenarios, and recorded seismicity rates are shown in the left-hand inset. Following Langenbruch and Zoback (2016), the declustered seismicity rate is obtained by removing aftershocks from _M_ ≥ 4 _._ 7 events applying the method of Gardner and Knopoff (1974). The depth distribution of basement earthquakes located by Schoenball and Ellsworth (2017) is shown in the right-hand inset, along with a fitted Gumbel distribution, _f_ ( _z_ ) ∼ exp( _z_<sup>′</sup> + _e_<sup>−</sup><sup>_z_′</sup> ), _z_ ′ = −( _z_ − _𝜇_ )∕ _𝛽_ , where _z_ is basement depth in kilometer. Relevance of these data sets to an abstraction of the distribution injection basement model are shown in the central inset (cf. Figure 1e). 

where _𝜃_ is a vector of model parameters, _t𝑗_<sup>′are the occurrence times of recorded earthquakes up to September</sup> 2018, and seismicity is simulated from the beginning of 2004. This expression assumes that all earthquakes are attributable to the pressure-driven triggering rate, _𝜆_ , and hence no allowance has been made for aftershocks. It is therefore necessary to decluster the United States Geological Survey catalog prior to model calibration. 

Declustering algorithms such as the one described by Gardner and Knopoff (1974) typically rely on clustering in time and space as an indicator of the causative relationship between two events—a mainshock-aftershock pair. The difficulty in applying declustering algorithms directly to sequences of induced seismicity is that it is not readily apparent how to separate two superposed modes of clustering: aftershock stress perturbations and a propagating pressure plume (Schoenball et al., 2015). Here we adopt the rather pragmatic approach of Langenbruch and Zoback (2016). We use the Gardner and Knopoff (1974) algorithm with a space window reduced in size by 50% and then only applied to remove the aftershocks of events with _M_ ≥ 4 _._ 7. This removes the most pronounced aftershock sequences from the data, which are also those most likely to skew calibration parameters in a physics model, thereby introducing error into the forecast. However, we acknowledge that this approach to declustering is not entirely satisfactory nor the 

DEMPSEY AND RIFFAULT 

16 

**Water Resources Research** 

10.1029/2018WR023587 

### **Table 1** 

_Parameters Used in the Western Oklahoma Model_ 

<!-- Start of picture text -->
Parameter Value<br>Radius of injection ( r inj ′ ) 50 km<br>Aquifer thickness ( h ′ ) 500 m<br>Aquifer porosity ( 𝜑 ) 0.1<br>Aquifer permeability ( ka ′ ) calibrated distribution<br>Aquifer compressibility ( 𝛽 aq ′ ) 2 . 0 × 10 −11 Pa −1<br>Aquifer initial pressure ( p ′ 0 ) 30 MPa<br>Reference temperature 100 ◦ C<br>Basement seismogenic depth ( r seis ′ ) prescribed envelope (Figure 12)<br>Basement thickness 6,000 m<br>Basement vertical permeability ( kb ′ ) calibrated distribution<br>Basement porosity 0.01<br>Basement horizontal permeability 10 −20 m 2<br>Basement compressibility 0<br>Water viscosity a ( 𝜂 ′ ) 2 . 84 × 10 −4 Pa s<br>Water density a ( 𝜌 ′ ) 963 kg/m 3<br>Water compressibility a ( 𝛽 fl ′ ) 4 . 37 × 10 −10 Pa −1<br>Critical triggering pressure ( p ′ c ) calibrated distribution<br>Seismicity scale factor ( 𝜅 ) calibrated distribution<br>Background seismicity rate ( M ≥ 3) 8 . 33 × 10 −2 year −1<br>Note . At initial pressure and ambient temperature.<br><!-- End of picture text -->

only one possible (Goebel et al., 2017; Norbeck & Rubinstein, 2018). We note also that, in their revised forecast model, Langenbruch et al. (2018) opt against the use of declustering citing the aforementioned issues of subjectivity, and a desire to include aftershocks in their hazard assessment. 

The simple nature of our two-layer model (aquifer and basement) admits four free parameters: Arbuckle permeability, _ka_<sup>′,basementpermeability,</sup><sup>_kb_′,thecriticaltriggeringpressure,</sup><sup>_p_′</sup> _c_<sup>,andthescalefactor,</sup><sup>_𝜅_,</sup> converting integrated pressure rate into seismicity. We generate indicative ranges for these parameters, consistent with the data, using the affine-invariant ensemble sampler for Markov chain Monte Carlo as implemented in the emcee Python package (Foreman-Mackey et al., 2013). This algorithm creates multiple “walkers” that explore parameter space through a series of random jumps. They either accept or reject a particular jump to a new part of parameter space based on how the likelihood function (19) changes. 

To increase the probability of identifying the global maximum of _LLK_ —the best-fitting model to the data—we first seeded walker starting positions randomly inside a defined parameter bounding box and ran several thousand jumps. Then, we restarted the analysis with all walkers beginning close to the maximum likelihood identified in the previous step. We used 26 walkers with 180 jumps per walker, not including an initial burn-in of 300 jumps that were discarded because the distributions were still stabilizing. In total, we used 4,680 flow simulations to quantify the uncertainty in our parameters. 

Plausible ranges for Arbuckle and basement permeability, critical pressure, and seismicity scale factor are given in Figures 13a–13d. The inferred range of Arbuckle permeability—7 _._ 9 × 10<sup>−13</sup> to 5 _._ 0 × 10<sup>−12</sup> m<sup>2</sup> (5% to 95% quantiles)—corresponds to a diffusivity range of 44 to 277 m<sup>2</sup> /s. Our range of inferred Arbuckle permeability agrees well with that used (10<sup>−12</sup> m<sup>2</sup> ) in the preferred model of Langenbruch et al. (2018), although this is perhaps unsurprising given the similarity in the two models' physics and calibration data. Our diffusivity values are an order of magnitude or more higher than those used in previous studies (e.g., Goebel et al., 2017; Hearn et al., 2018; Norbeck & Rubinstein, 2018). Indeed, using diffusivity values between 0.1 and 2 m<sup>2</sup> /s to model the same region of Oklahoma, Goebel et al. (2017) argued that pressure propagation was not rapid enough to explain the triggering of some clusters of seismicity, and hence suggested a poroelastic 

DEMPSEY AND RIFFAULT 

17 

**Water Resources Research** 

10.1029/2018WR023587 

**Figure 13.** Summary of Western Oklahoma model, calibration, and scenario forecasts. (a–d) Parameter distributions for aquifer (Arbuckle) and basement permeability, critical triggering pressure and seismicity scale factor with 5%, 50%, and 95% quantiles. (e) Historic annual seismicity (open circles) compared to 100 model samples (solid lines) overlaid by 5% to 95% Poisson uncertainty (shaded interval), that is, in a given month, a random Poisson process with modeled rate parameter of 10 events per month has a 5% likelihood of generating less than five events and 5% likelihood of generating more than 15 events. Colored envelopes from September 2018 correspond to three future injection scenarios. Blue dashed profile is the future forecast from Langenbruch and Zoback (2016) for comparison in Figure 14. Inset shows the magnitude frequency distribution of the events. (f) Average pressure below the injection area, _r_ ′ _< r_ inj′, at a basement depth of 4.5 km (historic and future scenarios), overlaid by the estimated interval for critical pressure (red). 

DEMPSEY AND RIFFAULT 

18 

**Water Resources Research** 

10.1029/2018WR023587 

**Figure 14.** Modeled magnitude exceedance. (a) Envelope of exceedance curves (5th to 95th percentile) for the three scenarios over the September 2018 to January 2025 forecast period. The tectonic background (black dashed line) is shown for reference. (b, c) Range of _M_ ≥ 5 and _M_ ≥ 6 exceedance probabilities (5th, 50th, and 95th percentiles) for different forecast periods and similar models. Note the difference in vertical scales between (b) and (c). Langenbruch and Zoback (2016) = L&Z 2016; Langenbruch et al. (2018) = LWZ 2018. 

mechanism. One possibility is that the absence of poroelastic physics in our model is compensated during calibration by artificial inflation of the aquifer permeability. An alternative is that Arbuckle diffusivity has been systematically underestimated in previous modeling studies. 

Inferred basement permeabilities are between 3.2 an 4 _._ 7 × 10<sup>−16</sup> m<sup>2</sup> (Figure 13b). The corresponding range of diffusivities, 0.26 to 0.37 m<sup>2</sup> /s, is consistent with Norbeck and Rubinstein (2018) (0.1 to 1.0) and the preferred model of Langenbruch et al. (2018) (0.32—derived from their reported parameters), but higher than (Langenbruch & Zoback, 2016; 0.08) and (Goebel et al., 2017; 0.1). We note that our assumed values of basement porosity and compressibility (Table 1) cannot be constrained with certainty. Using different values for these parameters would result in our inferring a different range for the basement permeability. However, the inferred range of basement diffusivity would remain the same. 

The critical triggering pressure is in the range 0.021 to 0.077 MPa, while the average fluid pressures at 4.5-km depth is less well constrained, ranging between 0.050 and 0.190 MPa as of September 2018 (Figure 13f). The seismicity scaling factor, _𝜅_ , can be interpreted as the number of _M_ ≥ 3 events per square kilometer in WO for each MPa increase in pressure. We estimate this parameter to be between 1.1 and 2.2 events km<sup>2</sup> ·MPa<sup>−1</sup> (Figure 13d). 

## **4.4. Seismicity Forecasts** 

Our models of historic seismicity in Western Oklahoma capture both the onset of seismicity in early 2014, the peak in 2016, and the declining rate through to September 2018 (Figure 13e). A feature of pressure threshold models is that once _pc_ is exceeded the system enters a critical state, after which seismicity is especially sensitive to changes in the injection rate. Thus, the declining rates of earthquakes in Western Oklahoma are a direct consequence of injection reductions by well operators (Figure 12), beyond those required by the volume reduction mandate. This implies that if further seismicity reductions are desired, these necessarily require further cuts, voluntary or mandated, to the aggregate WO injection rate. 

Our calibrated model can be used to construct seismicity forecasts for future injection scenarios (Figure 12). Here we consider three: 

1. Injection stabilizes at a rate of 3 _._ 0 × 10<sup>6</sup> m<sup>3</sup> /month, the rate in September 2018 (this most closely resembles the Langenbruch et al. (2018) forecast). 

2. Injection is reduced to 1 _._ 5 × 10<sup>6</sup> m<sup>3</sup> /month, half that of the previous scenario. 

3. Injection is increased to 4 _._ 0 × 10<sup>6</sup> m<sup>3</sup> /month, the theoretical maximum allowed under the present volume reduction mandate. 

For the models in (Figure 13e), the seismicity rate is simulated for each of the three scenarios out to January 2025 (Figure 13e). In addition to forecasting seismicity rate, we also compute magnitude exceedance curves, _P_ ( _M_ ), over the period September 2018 to January 2025 (Figure 14) 

where _NM_ ≥ 3 is the number of simulated _M_ ≥ 3 events in the forecast period, and _b_ is the Gutenberg-Richter _b_ value, which we set to 1.35 (Figure 13e). The exceedance curve gives the probability that the largest simulated earthquake in the forecast period will exceed a particular magnitude. For the purposes of comparison with Langenbruch et al. (2018), we have also computed exceedance estimates for _M_ ≥ 5 seismicity for the period January 2018 to January 2021. 

If the injection rate stabilizes at its September 2018 rate, then we forecast that the seismicity rate should decline to a minimum of between 0.4 and 3.0 _M_ ≥ 3 events per month in 2021, increasing thereafter to 

DEMPSEY AND RIFFAULT 

19 

**Water Resources Research** 

10.1029/2018WR023587 

between 1.4 and 4.1 events per month in 2025. This recovery of the seismicity rate occurs because the pressurization rate in the basement initially dips but then recovers to a new equilibrium, as described in section 3.1. By integrating the simulated seismicity rate profiles, we estimate that between 66 and 270 events would be triggered during this period. Adding the 5% and 95% uncertain bounds from a randomly generating Poisson process (Langenbruch et al., 2018, see also envelopes in Figure 13e) increases this range to between 53 and 297 events. Thus, the principal contribution to future uncertainty is epistemic (deriving from ignorance of the system parameters), with aleatoric uncertainty (deriving from Poisson randomness) only dominant at short time scales. 

If injection is increased to the maximum allowed under the current mandate, then we forecast that seismicity should increase to an equilibrium rate between 11 and 15 events per month. Over the forecast period, this amounts anywhere between 730 and 1,010 _M_ ≥ 3 triggered earthquakes, or between 686 and 1,063 events with [5,95%] Poisson uncertainty. In both this scenario and the previous, the likelihood of an _M_ ≥ 5 event before 2025 is high, in the range 14% to 46% at present injection rates, and 81% to 90% and the mandated maximum. For comparison, our calibration set comprised 914 _M_ ≥ 3 events in Western Oklahoma prior to September 2018, the largest of which was the _M_ 5.1 Fairview earthquake. 

Langenbruch and Zoback (2016), using their hybrid seismogenic index-Omori model, also generate a seismicity forecast for Western Oklahoma. They suggest that the maximum magnitude of seismicity will eventually reduce to the tectonic background provided that aggregate injection remains less than a threshold amount of about 4 _._ 0 × 10<sup>6</sup> m<sup>3</sup> /month (as it is in all three of the scenarios we consider here). In their model, the likelihood of triggering an _M_ ≥ 5 event in the September 2018 to January 2025 forecast period, for all scenarios, is 32%. Thus, although it is aligned with our middle injection scenario, it is in direct conflict with the other two. The discrepancy between the two models derives from those authors' use of a threshold injection rate in their model (a kind of carrying capacity of the formations) in contrast to our use of a threshold pressure, which we justify on the basis of Mohr-Coulomb fault behavior. 

It is somewhat disquieting that two models that both adequately fit historic seismicity can give such diverging predictions. Perhaps, then, the most useful outcome from this comparison is to highlight the essential inadequacy of judging either model's quality based solely on how well it fits data. An obvious criteria to discriminate between conflicting forecasts would be a critical assessment of the underlying physics and embedded assumptions in each model. 

A direct comparison between the updated forecast of Langenbruch et al. (2018) and our model is less straightforward. Their model covers a much larger region than our own and makes no specific prediction for the WO region. Nevertheless, much of those authors' forecast hazard between 2018 and 2021 (Langenbruch et al., 2018, their Figure 3) falls inside the WO area. To facilitate an approximate comparison then, we assume a lower bound in which half the Langenbruch et al. (2018) hazard is assigned to WO. For two regions with equal probability of an event ( _M_ ≥ 5), _P_ 1/2, the probability of the event occurring in either or both regions is _P_ tot = 1 −(1 − _P_ 1/2)<sup>2</sup> . Given this reasoning, we abstract approximate bounds on _M_ ≥ 5 hazard in WO from Langenbruch et al. (2018) as 35% and 58% (respectively, half and all of the computed hazard). For the same forecast period (January 2018 to January 2021) and the same (middle) injection scenario, we compute the likelihood to exceed _M_ ≥ 5 to be between 11% and 30%. Although Langenbruch et al. (2018) do not present hazard estimates for other injection scenarios, their improved model formulation is now capable of such distinctions. 

Finally, for the scenario in which injection volumes are required to drop to 1 _._ 5 × 10<sup>6</sup> m<sup>3</sup> /month, then we forecast that seismicity should return to the background rate sometime between mid-2019 and mid-2021. Although under this scenario the likelihood of further _M_ ≥ 5 events could be as high as 10%, the result is encouraging. It suggests that regulation of the total injection volume can be used as a lever to balance public safety and industrial activities. 

# **5. Discussion and Conclusion** 

We developed a series of analytical and simple numerical models for injection-induced seismicity in several idealized flow geometries. In particular, we used these models to quantify the effect of a mandated injection rate reduction on both short- and long-term seismicity. We find that the delay in seismicity onset is sensitive to the critical pressure threshold for earthquake triggering, the diffusivity of basement and depth 

DEMPSEY AND RIFFAULT 

20 

**Water Resources Research** 

10.1029/2018WR023587 

to which a critical triggering front must diffuse, and the strength of rate-state friction effects, if they are present (Figures 9 –11). After a rate reduction, our models predict a decline, occasional quiescence, and eventual recovery of the seismicity rate to a new equilibrium value that is below prereduction levels. The magnitude and time scale of this behavior depends on the critical pressure and the size of the rate reduction (Figures 6 –8). 

The rapid onset and decline of seismicity in Western Oklahoma reflects the collective impact of large numbers of Class II high-volume wastewater disposal wells and their operators' response to the 2016 volume reduction mandate. We developed a simple aquifer-basement model for induced seismicity in the region, based on pressurization stressing, radial symmetry, and a distributed injection source that approximates the aggregate effect of multiple injectors. Our modeling captures the onset of seismicity in early 2014 and pace of decline since 2016, and pressures at 4.5-km depth in basement could be as high as 0.19 MPa. Forecasts of three future injection scenarios, all permitted under the current volume reduction mandate, indicate that further _M_ ≥ 5 events are likely before 2025 unless further cuts are made to injection rates. Although operators have been voluntarily injecting below the mandate, there is no regulation to prevent them from ramping back up to the maximum limit. Thus, in its present form, the volume reduction mandate in Western Oklahoma is inadequate to mitigate the likelihood of future large ( _M_ ≥ 5) earthquakes and the risk these pose to the public. Indeed, our forecast suggests that, where injection is to return to the maximum limit, _M_ ≥ 6 events become feasible (between 7% and 10%, Figure 14c). There is no evidence to suggest that events of this magnitude should be precluded on the basis of total injected fluid volumes (McGarr, 2014), as no high-magnitude curvature is evident in the magnitude frequency distribution (Figure 13e, see Dempsey et al., 2016, for a detailed explanation) and prevailing overpressures at seismogenic depths (tens to hundreds of kilopascal) are small compared to typical earthquakes stress drops (1 to 10 MPa). On the other hand, reducing the limit by about 60% to a rate of 1.5 × 10<sup>6</sup> m<sup>3</sup> /month could allow seismicity to return to background levels sometime in 2019 to 2021. 

Pressure changes in the Arbuckle and seismicity in the underlying basement are a global response to the collection of Arbuckle disposal wells, rather than being locally attributable to particular injectors. This collective nature arises only at sufficiently high permeability that the pressure plumes of adjacent wells overlap. Goebel et al. (2017) suggest the threshold diffusivity is of the order 0.1 m<sup>2</sup> /s, which is much smaller than the range of Arbuckle diffusivity we infer from calibration of our model (between 44 and 277 m<sup>2</sup> /s). The notion that induced seismicity in Western Oklahoma is a collective response to all Arbuckle wells undermines and disincentivizes individual operator responsibility. In this situation, the role of the central regulator is essential, given their ability to impose responsible, scientifically justified protocols across an entire industry. On the other hand, regulating operators on a well-by-well basis, say, in compliance with a traffic light system for nearby seismicity, may end up being both unfair and ineffective. This is because, when earthquakes are being triggered by a large regional pressure plume, shutting in or reducing the rate into a particular well may have no long-term impact on local seismicity. 

# **Appendix A: Induced Seismicity Solutions in Other Dimensions** 

Equations derived in section 2 assume a two-dimensional flow regime. Similar arguments can be constructed to derive simple expressions for seismicity due to injection reductions in geometries that are inherently 1-D or 3-D. 

## **A1. Solutions in One Dimension** 

Pressure change in a 1-D porous media subject to constant mass injection rate per unit area, _q_ 1D<sup>′</sup> , at _r_ = 0, which is then reduced to (1 − _f_ ) _q_ 1D<sup>′</sup> at _t_ = 1, is given 

where _f_ = 0 for _t <_ 1, and dimensionless pressure is defined _p_ = ( _p_<sup>′</sup> − _p_<sup>′</sup> 0<sup>)</sup><sup>_k_′</sup><sup>_𝜌_′∕(2</sup><sup>_q_′</sup> 1D<sup>_𝜂_′</sup><sup>~~√~~</sup> _D_<sup>′</sup> _t_ cut<sup>′). Pressure</sup> at the injection well increases as _p_ well = 2∕ ~~<u>√</u>~~ _t_ ∕ _𝜋_ . 

DEMPSEY AND RIFFAULT 

21 

**Water Resources Research** 

10.1029/2018WR023587 

Setting _𝜕p_ ∕ _𝜕t_ = 0 yields a curve in _r_ - _t_ space denoting the onset of seismicity quiescence after the reduction 

Assuming a steady stressing rate model for seismicity triggering, the global seismicity rate is computed 

Note that because pressure is not infinite at _r_ = 0, it is possible that no seismicity will be recorded before injection is reduced. This will occur for _pc >_ 2∕ ~~√~~ _𝜋_ . 

## **A2. Solutions in Three Dimensions** 

Assuming spherical symmetry, pressure change in a three-dimensional porous media subject to constant mass injection rate, _q_ 3D<sup>′</sup> , at _r_ = 0, which is then reduced to (1 − _f_ ) _q_ 3D<sup>′</sup> at _t_ = 1, is given 

where _f_ = 0 for _t <_ 1, and dimensionless pressure is defined _p_ = ( _p_<sup>′</sup> − _p_<sup>′</sup> 0<sup>)8</sup><sup>_𝜋k_′</sup><sup>_𝜌_′</sup><sup>~~√~~</sup> _D_<sup>′</sup> _t_ cut<sup>′∕(</sup><sup>_q_′</sup> 3D<sup>_𝜂_′).</sup> The curve in _r_ - _t_ space denoting the onset of seismicity quiescence is 

and the global seismicity rate is 

# **Appendix B: Reservoir Simulation of Distributed Injection Scenarios** 

The integrals in rquations (7) and (8) can be evaluated using standard numerical quadrature methods; however, their repeated evaluation to compute the seismicity rate is laborious. Furthermore, closed form solutions have not been developed for the case of distributed injection overlying seismogenic basement (Figure 1e). Instead, we use a reservoir simulator to compute fluid pressure evolution, _p_ ( _r, t_ ), for these cases. The seismicity rate is computed by discrete approximation to the integral equation (14). 

## **B1. Pressure Evolution** 

Simulations are performed using FEHM (Zyvoloski, 2007), a control volume reservoir simulator for multiphase, multicomponent nonisothermal groundwater flow. For a single-phase, and neglecting gravity effects, the pressure evolution is controlled by mass conservation and Darcy's law 

where **q** ′ is mass flux and _Qm_ ′ is a mass source. FEHM calculates viscosity and density internally as functions of pressure and temperature. We assume initial pressure and temperature of 30 MPa and 100<sup>◦</sup> C, approximately consistent with Arbuckle depths and geothermal gradient in Oklahoma. 

Simulations are performed on an approximately radial mesh subtending 2<sup>◦</sup> of arc. In the radial direction, the grid comprises 50 blocks, evenly spaced between 0 _._ 01 _r_ inj and 2 _r_ inj, and 200 blocks with logarithmic spacing between 2 _r_ inj and 100 _r_ inj, approximating an infinite domain. For each grid block with _r < r_ inj, a mass source _Q_<sup>′</sup> _m_<sup>is assigned proportional to the block volume, with the sum of all sources equal to the total injection rate,</sup> _q_ ′ . At _t_ = 1, all mass sources are reduced by a fraction, _f_ , representing the injection reduction. 

For simulations that include a seismogenic basement, we extend the grid to include 20 blocks evenly spaced in the vertical direction below the injection horizon. Higher resolution of basement blocks has the potential 

DEMPSEY AND RIFFAULT 

22 

**Water Resources Research** 

10.1029/2018WR023587 

**Figure B1.** Grid block pressure interpolation for seismicity calculation. A layer containing three adjacent radial blocks, bounded above and below by _z_ upper and _z_ lower, with block centers at _ri_ − 1, _ri_ , and _ri_ + 1. Pressure, _pi_ , (black line) is computed at the grid block centers and interpolated at left, _pl_ , and right hand, _pr_ , block edges. Depending on whether pressure at block edges exceeds prior maxima (dashed line) there, a block may be aseismic (block _i_ + 1), partially seismic (block _i_ ), or fully seismic (block _i_ − 1). 

to improve inversion of basement permeability during model calibration (although nonidentifiability issues would remain) but would not change model forecasts. The bottom of the model is assumed to be closed to fluid flow, representing the loss of permeability due to fracture closure at high confining stress. Permeability, compressibility, and porosity properties can be set independently for the aquifer and basement grid regions, but are required to be homogeneous within each. 

## **B2. Seismicity Rate** 

The reservoir simulation described in the previous section calculates fluid pressure, _pij_ , at discrete grid block centers, _ri_ , and times, _tj_ . The pressure gradient, _𝜕p_ ∕ _𝜕r_ , and pressurization rate, _𝜕p_ ∕ _𝜕t_ , are computed by finite differences. Fluid pressure and derivatives at locations and times other than _ri_ and _tj_ are obtained by piecewise linear interpolation. 

The contribution to the global seismicity rate at time, _t_ , of the _i_ th grid block is computed as follows (Figure 1): 

1. Pressure is computed at the left- and right-hand limits of the block, _pl_ and _pr_ . 

2. If neither _pl_ nor _pr_ are larger than the previous maximum pressure at those points (or _pc_ , where appropriate), then pressure is not high enough to trigger earthquakes. The block is aseismic (no contribution to seismicity). 

3. The pressurization rate is calculated at the block midpoint, _̇ pi_ ( _t_ ). 

4. If both _pl_ and _pr_ are larger than previous maxima at those points, then pressure across the entire block is high enough to trigger earthquakes. The seismicity rate from the annulur volume corresponding to this radial grid block is 

where _𝛥ri_ is the grid block width, and its height is delimited [ _z_ lower _, z_ upper]. 

5. If _pl_ is larger than the previous maximum at the left boundary but _pr_ is not, then only a fraction of the grid block has high enough pressure to trigger earthquakes. The seismicity rate computed in B2 is reduced by a fraction, _c_ , corresponding to the seismically active volume of the block 

DEMPSEY AND RIFFAULT 

23 

**Water Resources Research** 

10.1029/2018WR023587 

The global seismicity rate is then computed as the sum of contributions from all annular volumes. 

# **Notation** 

_a_ ratio of diffusion and injection length scales _A_ direct-effect parameter in rate-state model _D_ diffusivity _f_ fractional injection rate reduction _g_ ( _t_ ) _r_ - _t_ space curve contouring seismicity quiescence _h_ formation thickness _h_ ( _t_ ) _r_ - _t_ space curve contouring seismicity resumption _II_ injectivity index _Ji i_ th-order Bessel function of the first kind _k_ permeability _n_ local seismicity rate _n_ 0 reference seismicity rate corresponding to _̇ 𝜏_ 0 _n_ tec reference seismicity rate corresponding to _̇ 𝜏_ tec _n_ ss steady state limit of rate-state seismicity rate _N_ global seismicity rate _N_ eqm postrate cut equilibrium seismicity rate _N_ min minimum seismicity rate _N_ rec seismicity rate recovery **n** fault normal vector _p_ pressure _p_<sup>∗</sup> pressure at bifurcation time and distance _p_ 0 initial pressure _pc_ critical pressure rise _q_ mass injection rate _r_ radial distance _r_<sup>∗</sup> bifurcation distance _r_ dimensionless radius for distributed injection scenario _rc_ radial distance where _p_ = _pc r_ **in** inside radius of seismically active region _r_ **inj** radius of distributed injection zone _S_ effective stress tensor _t_ time _t_<sup>∗</sup> bifurcation time _ta_ pressure-dependent characteristic decay time _t_ cut time at which the injection rate is reduced _tg_ start time of seismicity quiescence _th_ end time of seismicity quiescence _t_ traction force _w_ weight _W_ ( _x_ ) exponential integral function _Yi i_<sup>th</sup> order Bessel function of the second kind _z_ depth in basement _z_ center parameter in Gumbel distribution _𝛼_ normal stress parameter in rate-state model _𝛽_ compressibility _𝜅_ proportionality constant _𝜇_ friction coefficient _𝜇_ 0 shear to normal stress ratio _𝜂_ dynamic fluid viscosity _𝜎_ effective normal stress _𝜎T_ total normal stress 

DEMPSEY AND RIFFAULT 

24 

**Water Resources Research** 

10.1029/2018WR023587 

_𝜎z_ spread parameter in Gumbel distribution 

_𝜏_ shear stress 

_𝜏 s_ frictional strength 

_𝜏_ 0 reference stressing rate 

_𝜏_ tec background tectonic stressing rate 

#### **Acknowledgments** 

This work was supported by the Faculty of Engineering at the University of Auckland. J. Riffault is supported by the Center for Space and Earth Sciences at Los Alamos National Laboratory. Injection rate data for the Area of Interest of Triggered Seismicity can be obtained from the Oklahoma Corporation Commission (http://www.occeweb.com/og/ ogdatafiles2.htm). Earthquake data for Oklahoma were obtained from the ANSS Comprehensive Earthquake Catalog maintained by the USGS (https://earthquake.usgs.gov/ earthquakes/search/). A Jupyter Notebook containing executable versions of some of the models in this article has been included in the supporting information. It documents the Python scripts used to construct and run the reservoir models and to compute seismicity rate. FEHM is available at https://fehm.lanl.gov/. The authors are grateful to O. MacLaren for fruitful discussions on model uncertainty and for the comments of an anonymous reviewer that helped us sharpen our arguments. The authors thank two anonymous reviewers and Editor Harihar Rajaram for comments that improved the quality of this manuscript. 

# **References** 

Ake, J., Mahrer, K., O'Connell, D., & Block, L. (2005). Deep-injection and closely monitored induced seismicity at Paradox Valley, Colorado. _Bulletin of the Seismological Society of America_ , _95_ (2), 664–683. https://doi.org/10.1785/0120040072 

Ampuero, J.-P., & Rubin, A. M. (2008). Earthquake nucleation on rate and state faults—Aging and slip laws. _Journal of Geophysical Research_ , _113_ , B01302. https://doi.org/10.1029/2007JB005082 Baisch, S., & Harjes, H. P. (2003). A model for fluid-injection-induced seismicity at the KTB, Germany. _Geophysical Journal International_ , _152_ (1), 160–170. https://doi.org/10.1046/j.1365-246X.2003.01837.x 

- Baisch, S., Weidler, R., Vörös, R., Wyborn, D., & de Graaf, L. (2006). Induced seismicity during the stimulation of a geothermal HFR reservoir in the Cooper Basin, Australia. _Bulletin of the Seismological Society of America_ , _96_ (6), 2242–2256. https://doi.org/10.1785/0120050255 

- Bao, X., & Eaton, D. W. (2016). Fault activation by hydraulic fracturing in western Canada. _Science_ , _354_ , 1406–1409. https://doi.org/10.1126/science.aag2583 

Barbour, A. J., Norbeck, J. H., & Rubinstein, J. L. (2017). The effects of varying injection rates in Osage County, Oklahoma, on the 2016 _Mw_ 5.8 Pawnee earthquake. _Seismological Research Letters_ , _88_ , 1040–1053. https://doi.org/10.1785/0220170003 Blanpied, M. L., Lockner, D. A., & Byerlee, J. D. (1991). Fault stability inferred from granite sliding experiments at hydrothermal conditions. _Geophysical Research Letters_ , _18_ (4), 609–612. https://doi.org/10.1029/91GL00469 

- Byerlee, J. D. (1978). Friction of rocks. _Pure and Applied Geophysics_ , _116_ , 393–402. 

Carslaw, H. S., & Jaeger, J. C. (1959). _Conduction of heat in solids_ (2nd ed). London: Oxford University Press. 

Chang, K. W., & Segall, P. (2016). Injection-induced seismicity on basement faults including poroelastic stressing. _Journal of Geophysical Research: Solid Earth_ , _121_ , 2708–2726. https://doi.org/10.1002/2015JB012561 

Dempsey, D., & Suckale, J. (2017). Physics-based forecasting of induced seismicity at Groningen gas field, the Netherlands. _Geophysical Research Letters_ , _44_ , 7773–7782. https://doi.org/10.1002/2017GL073878 

Dempsey, D., Suckale, J., & Huang, Y. (2016). Collective properties of injection-induced earthquake sequences: 2. Spatiotemporal evolution and magnitude frequency distributions. _Journal of Geophysical Research: Solid Earth_ , _121_ , 3638–3665. https://doi.org/10.1002/2015JB012551 

Dieterich, J. (1979). Modeling of rock friction: 1. Experimental results and constitutive equations. _Journal of Geophysical Research_ , _84_ (B5), 2161–2168. https://doi.org/10.1029/JB084iB05p02161 

Dieterich, J. (1994). A constitutive law for rate of earthquake production and its application to earthquake clustering. _Journal of Geophysical Research_ , _99_ (B2), 2601–2618. https://doi.org/10.1029/93JB02581 

- Ellsworth, W. L. (2013). Injection-induced earthquakes. _Science_ , _341_ (6142), 1225942. https://doi.org/10.1126/science.1225942 

Foreman-Mackey, D., Hogg, D. W., Lang, D., & Goodman, J. (2013). emcee: The MCMC hammer. _Publications of the Astronomical Society of the Pacific_ , _125_ (925), 306–312. https://doi.org/10.1086/670067 

Gardner, J. K., & Knopoff, L (1974). Is the sequence of earthquakes in Southern California, with aftershocks removed, Poissonian? _Bulletin of the Seismological Society of America_ , _64_ , 1363–1367. 

Goebel, T. H. W., Weingarten, M., Chen, X., Haffener, J., & Brodsky, E. E. (2017). The 2016 _Mw_ 5 _._ 1 Fairview, Oklahoma earthquakes: Evidence for long-range poroelastic triggering at _>_ 40 km from fluid disposal wells. _Earth and Planetary Science Letters_ , _472_ , 50–61. https://doi.org/10.1016/j.epsl.2017.05.011 

Gomberg, J., Reasenberg, P., Coco, M., & Belardinelli, M. E. (2005). A frictional population model of seismicity rate change. _Journal of Geophysical Research_ , _110_ , B05S03. https://doi.org/10.1029/2004JB003404 

Gupta, H. K., & Rastogi, B. K. (1976). Dams and Earthquakes. In M. D. Gidigasu (Ed.), _Developments in geotechnical engineering_ (Vol. 11, pp. 299). Amsterdam: Elsevier Scientific Publishing Co. 

Häring, M. O., Schanz, U., Ladner, F., & Dyer, B. C. (2008). Characterisation of the Basel 1 enhanced geothermal system. _Geothermics_ , _37_ (5), 469–495. https://doi.org/10.1016/j.geothermics.2008.06.002 

Healy, J. H., Rubey, W. W., Griggs, D. T., & Raleigh, C. B. (1968). The Denver earthquakes. _Science_ , _161_ (3848), 1301–1310. 

Hearn, E. H., Koltermann, C., & Rubinstein, J. L. (2018). _Numerical models of pore pressure and stress changes along basement faults due to wastewater injection: Applications to the 2014 Milan, Kansas earthquake_ (Vol. 19, pp. 1178–1198). https://doi.org/10.1002/2017GC007194 Hincks, T., Aspinall, W., Cooke, R., & Gernon, T. (2018). Oklahoma's induced seismicity strongly linked to wastewater injection depth. _Science_ , _359_ (6381), 1251–1255. https://doi.org/10.1126/science.aap7911 

Hong, T., & Marone, C. (2005). Effects of normal stress perturbations on the frictional properties of simulated faults. _Geochemistry, Geophysics, Geosystems_ , _6_ , Q03012. https://doi.org/10.1029/2004GC000821 Huang, Y., Ellsworth, W. L., & Beroza, G. C. (2017). Stress drops of induced and tectonic earthquakes in the central United States are indistinguishable. _Science Advances_ , _3_ , e1700772. 

Hubbert, M. K., & Rubey, W. W. (1959). Role of fluid pressure in mechanics of overthrust faulting. _Bulletin of the Geological Society of America_ , _70_ , 115–166. 

Johann, L., Dinske, C., & Shapiro, S. A. (2016). Scaling of seismicity induced by nonlinear fluid-rock interaction after an injection stop. _Journal of Geophysical Research: Solid Earth_ , _121_ , 8154–8174. https://doi.org/10.1002/2016JB012949 

Kroll, K. A., Cochran, E. S., & Murray, K. E. (2017). Poroelastic properties of the Arbuckle Group in Oklahoma derived from well fluid level response to the 3 September 2016 _Mw_ 5.8 Pawnee and 7 November 2016 _Mw_ 5.0 Cushing earthquakes. _Seismological Research Letters_ , _88_ , 963–970. https://doi.org/10.1785/0220160228 Langenbruch, C., & Shapiro, S. A. (2010). Decay rate of fluid-induced seismicity after termination of reservoir stimulations. _Geophysics_ , _75_ (6), MA53–MA62. https://doi.org/10.1190/1.3506005 Langenbruch, C., Weingarten, M., & Zoback, M. D. (2018). Physics-based forecasting of man-made earthquake hazards in Oklahoma and Kansas. _Nature Communications_ , _9_ (1), 3946. https://doi.org/10.1038/s41467-018-06167-4 

DEMPSEY AND RIFFAULT 

25 

**Water Resources Research** 

10.1029/2018WR023587 

Langenbruch, C., & Zoback, M. D. (2016). How will induced seismicity in Oklahoma respond to decreased saltwater injection rates. _Science Advances_ , _2_ (11), e1601542. https://doi.org/10.1126/sciadv.1601542 

Linker, M. F., & Dieterich, J. H. (1992). Effects of variable normal stress on rock friction: Observations and constitutive equations. _Journal of Geophysical Research_ , _97_ (B4), 4923–4940. https://doi.org/10.1029/92JB00017 

Majer, E. L., Baria, R., Stark, M., Oates, S., Bommer, J., Smith, B., & Asanuma, H. (2007). Induced seismicity associated with enhanced geothermal systems. _Geothermics_ , _36_ (3), 185–222. https://doi.org/10.1016/j.geothermics.2007.03.003 

Marone, C. (1998). Laboratory-derived friction laws and their application to seismic faulting. _Annual Review of Earth and Planetary Sciences_ , _26_ , 643–696. https://doi.org/10.1146/annurev.earth.26.1.643 

McGarr, A. (1994). Some comparisons between mining-induced and laboratory earthquakes. _Pure and Applied Geophysics_ , _142_ (3-4), 467–489. https://doi.org/10.1007/BF00876051 

McGarr, A. (2014). Maximum magnitude earthquakes induced by fluid injection. _Journal of Geophysical Research: Solid Earth_ , _119_ , 1008–1019. https://doi.org/10.1002/2013JB010597 

Norbeck, J. H., & Rubinstein, J. L. (2018). Hydromechanical earthquake nucleation model forecasts onset, peak, and falling rates of induced seismicity in Oklahoma and Kansas. _Geophysical Research Letters_ , _45_ , 2963–2975. https://doi.org/10.1002/2017GL076562 

Parotidis, M., Shapiro, S. A., & Rothert, E. (2004). Back front of seismicity induced after termination of borehole fluid injection. _Geophysical Research Letters_ , _31_ , L02612. https://doi.org/10.1029/2003GL018987 

Perfettini, H., & Avouac, J. P. (2004). Postseismic relaxation driven by brittle creep: A possible mechanism to reconcile geodetic measurements and the decay rate of aftershocks, application to the Chi-Chi earthquake, Taiwan. _Journal of Geophysical Research_ , _109_ , B02304. https://doi.org/10.1029/2003JB002488 

Peterie, S. L., Miller, R. D., Intfen, J. W., & Gonzales, J. B. (2018). Earthquakes in Kansas induced by extremely far-field pressure diffusion. _Geophysical Research Letters_ , _45_ , 1395–1401. https://doi.org/10.1002/2017GL076334 

Petersen, M. D., Mueller, C. S., Moschetti, M. P., Hoover, S. M., Shumway, A. M., McNamara, D. E., et al. (2017). 2017 one-year seismic-hazard forecast for the Central and Eastern United States from induced and natural earthquakes. _Seismological Research Letters_ , _88_ (3), 772–783. https://doi.org/10.1785/0220170005 

Radhakrishnan, K., & Hindmarsh, A. C. (1993). Description and use of LSODE, the Livermore solver for ordinary differential equations. LLNL Tech. Rep., UCRL-ID-113855. 

Raleigh, C. B., Healy, J. H., & Bredehoeft, J. D. (1976). An experiment in earthquake control at Rangely, Colorado. _Science_ , _191_ (4233), 1230–1237. https://doi.org/10.1126/science.191.4233.1230 Rice, J. R. (1993). Spatio-temporal complexity of slip on a fault. _Journal of Geophysical Research_ , _98_ (B6), 9885–9907. https://doi.org/10.1029/93JB00191 

Ruina, A. L. (1983). Slip instability and state variable friction laws. _Journal of Geophysical Research_ , _88_ (B12), 10,359–10,370. https://doi.org/10.1029/JB088iB12p10359 

Schoenball, M., Davatzes, N. C., & Glen, J. M. G. (2015). Differentiating induced and natural seismicity using space-time-magnitude statistics applied to the Coso Geothermal field. _Geophysical Research Letters_ , _42_ , 6221–6228. https://doi.org/10.1002/2015GL064772 

Schoenball, M., & Ellsworth, W. L. (2017). A systematic assessment of the spatiotemporal evolution of fault activation through induced seismicity in Oklahoma and Southern Kansas. _Journal of Geophysical Research: Solid Earth_ , _122_ , 10,189–10,206. https://doi.org/10.1002/2017JB014850 

Scholz, C. H. (1998). Earthquakes and friction laws. _Nature_ , _391_ , 37–42. https://doi.org/10.1038/34097 

Segall, P. (1989). Earthquakes triggered by fluid extraction. _Geology_ , _17_ , 942–946. https://doi.org/10.1130/0091-7613 

Segall, P., & Lu, S. (2015). Injection-induced seismicity: Poroelastic and earthquake nucleation effects. _Journal of Geophysical Research: Solid Earth_ , _120_ , 5082–5103. https://doi.org/10.1002/2015JB012060 

Shapiro, S. A., & Dinske, C. (2009). Scaling of seismicity induced by nonlinear fluid-rock interaction. _Journal of Geophysical Research_ , _114_ , B09307. https://doi.org/10.1029/2008JB006145 

Shapiro, S. A., Huenges, E., & Borm, G. (1997). Estimating the crust permeability from fluid-injection-induced seismic emission at the KTB site. _Geophysical Journal International_ , _131_ , F15–F18. https://doi.org/10.1111/j.1365-246X.1997.tb01215.x 

Shapiro, S. A., Kruger, O. S., & Dinske, C. (2013). Probability of inducing given-magnitude earthquakes by perturbing finite volumes of rocks. _Journal of Geophysical Research: Solid Earth_ , _118_ , 3557–3575. https://doi.org/10.1002/jgrb.50264 

Shapiro, S. A., Krüger, O. S., Dinske, C., & Langenbruch, C. (2011). Magnitudes of induced earthquakes and geometric scales of fluid-stimulated rock volumes. _Geophysics_ , _76_ (6), WC55–WC63. https://doi.org/10.1190/geo2010-0349.1 

Vlek, C. (2018). Induced earthquakes from long-term gas extraction in Groningen, the Netherlands: Statistical analysis and prognosis for acceptable-risk regulation. _Risk Analysis_ , _38_ , 1455–1473. https://doi.org/10.1111/risa.12967 

Walsh, F. R., & Zoback, M. D. (2015). Oklahoma's recent earthquakes and saltwater disposal. _Science Advances_ , _1_ (5), e1500195. https://doi.org/10.1126/sciadv.1500195 

Weingarten, M., Ge, S., Godt, J. W., Bekins, B. A., & Rubinstein, J. L. (2015). High-rate injection is associated with the increase in US mid-continent seismicity. _Science_ , _348_ (6241), 1336–1340. https://doi.org/10.1126/science.aab1345 

Zyvoloski, G. A. (2007). FEHM: A control volume finite element code for simulating subsurface multi-phase multi-fluid heat and mass transfer. Los Alamos Natl. Lab. Rep., LAUR-07-3359. 

DEMPSEY AND RIFFAULT 

26 

