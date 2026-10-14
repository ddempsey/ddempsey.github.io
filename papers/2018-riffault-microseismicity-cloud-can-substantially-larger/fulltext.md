# Microseismicity Cloud Can Be Substantially Larger Than the Associated Stimulated Fracture Volume: The Case of the Paralana Enhanced Geothermal System

**Authors:** Jeremy Riffault, David Dempsey, Satish Karra, Rosalind Archer  
**Published in:** Journal of Geophysical Research: Solid Earth (2018)  
**DOI (version of record):** https://doi.org/10.1029/2017jb015299  
**This copy:** Accepted manuscript (peer-reviewed, author's version). Text extracted from the PDF at https://ddempsey.github.io/papers/2018-riffault-microseismicity-cloud-can-substantially-larger/riffault2018-microseismicity-cloud-can.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** An edited version of this paper was published by AGU. Published 2018 American Geophysical Union. Version of record: https://doi.org/10.1029/2017jb015299  

---


# **Journal of Geophysical Research: Solid Earth** 

**Microseismicity Cloud Can Be Substantially Larger Than the Associated Stimulated Fracture Volume: The Case of the Paralana Enhanced Geothermal System** 

## **RESEARCH ARTICLE** 

#### 10.1029/2017JB015299 

##### **Key Points:** 

- Permeability distribution is inverted from injectivity and microseismicity data 

> data **Jeremy Riffault**<sup>**1**</sup> **, David Dempsey**<sup>**1**</sup> **, Satish Karra**<sup>**2**</sup> **, and Rosalind Archer**<sup>**1**</sup> • Volume of stimulated reservoir can be much smaller than volume of the 1Department of Engineering Science, University of Auckland, Auckland, New Zealand, 2Los Alamos National Laboratory, seismically active region Los Alamos, NM, USA • Hydroshearing does not reliably enhance permeability by orders of magnitude **Abstract** The goal of hydraulic stimulation is to increase formation permeability in the near vicinity of a well. However, there remain technical challenges around measuring the outcome of this operation. **Correspondence to:** J. Riffault, During two enhanced geothermal system stimulations in South Australia, Paralana in 2011 and Habanero in 

> jrif565@aucklanduni.ac.nz 2003, extensive catalogs of microseismicity were recovered. It is often assumed that shear failure of existing fractures is the main mechanism behind both the induced earthquakes and any permeability enhancement. **Citation:** This underpins a common notion that the seismically active volume is also the stimulated reservoir. Riffault, J., Dempsey, D., Karra, S., Here we compute the density of earthquake hypocenters and provide evidence that, under certain 

> & Archer, R. (2018). Microseismicity conditions, this spatiotemporal quantity is a reasonable proxy for pore pressure increase. We then apply cloud can be substantially larger than the associated stimulated an inverse modeling approach that uses the earthquake observations and a modified reservoir simulator to fracture volume: The case of the estimate the parameters of a permeability evolution relation. The regime implied by the data indicates that Paralana Enhanced Geothermal most permeability enhancement occurred very near to the wellbore and was not coincident with the bulk System. _Journal of Geophysical Research: Solid Earth_ , _123_ . of the seismicity, whose volume was about 2 orders of magnitude larger. Thus, we conclude that, in some https://doi.org/10.1029/2017JB015299 cases, it is possible for permeability enhancement and induced seismicity to be decoupled, in which case the seismically active volume is a poor indicator of the stimulated reservoir. Our results raise serious questions Received 4 DEC 2017 about the effectiveness of hydroshearing as a stimulation mechanism in enhanced geothermal system. Accepted 13 JUN 2018 This study extends our understanding of the complex processes linking earthquakes, fluid pressure, and 

> Accepted article online 21 JUN 2018 permeability in both natural and engineered settings. 

### **1. Introduction** 

An enhanced geothermal system (EGS) harvests energy from the Earth’s crust by circulating fluid through a volume of hot, fractured rock whose permeability may have been enhanced by hydraulic stimulation (Jeanloz & Stone, 2013). In addition to the advantages of conventional geothermal operations—minimal environmental impact and baseload generation capacity—the opportunities for EGS are more widespread, as sufficiently high temperatures are found everywhere providing wells can be drilled deep enough (Tester et al., 2007). To extract heat, fluid circulates through a volume of hot rock, from an injection well to a production well, ideally accessing a large fracture surface area along the way (Majer et al., 2007). However, at the great depths where economic temperatures are generally found, permeability is usually relatively low (Majer et al., 2007). To enhance it, hydraulic stimulation is undertaken, whereby cold fluid is injected at high pressure. These operations typically last hours to days. Estimating the stimulated volume that results is important, because this quantifies the size of the available heat resource. Unfortunately, the stimulated reservoir cannot be observed directly. 

Well injectivity—the ratio of injection rate to wellhead pressure (WHP; Grant, 1982)—is one measure of the success of a stimulation. Permeability enhancement is often reflected by an increase of the injectivity, although this does not constrain the spatial extent of permeability changes and hence the size of the stimulated reservoir. Other factors also impact injectivity, including viscosity changes with temperature (McLean & Zarrouk, 2015) and local pressure increase around the well, which further confounds interpretations. Seismicity is nearly always induced during an EGS stimulation (Majer et al., 2007; Zang et al., 2014). Because of their spatiotemporal nature—earthquakes are attached both a location and an occurrence time—microearthquake (MEQ) catalogs carry valuable information about the stimulation process. 

©2018. American Geophysical Union. All Rights Reserved. 

RIFFAULT ET AL. 

1 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2017JB015299 

Previous studies have linked the growing microseismicity cloud to the evolving stimulated volume (Baisch et al., 2004; Bendall et al., 2014; Llanos et al., 2015; Rothert & Baisch, 2011; Weidler et al., 2002). 

Induced seismicity is usually attributed to hydroshearing: shear failure of preexisting fractures (Majer et al., 2007) as a result of stress and pressure changes caused by high pressure injection (Pearson, 1981). The same mechanism is known to potentially increase overall permeability, as shown experimentally in Chen et al. (2000). This is a consequence of self-propping, the idea that fracture aperture is enhanced postslip because of the mismatch between the rough fracture surfaces. Hydroshearing is often considered to dominate the permeability enhancement process occurring during geothermal stimulations, as in Soultz-sous-Forêts (Evans et al., 2005) or Desert Peak (Chabora et al., 2012). 

Several modeling approaches have been developed to simulate the joint evolution of seismicity and permeability. For instance, Baisch et al. (2009) model concurrent permeability enhancement with the slip of individual fault patches and apply this model to recover the hydraulic behavior and temporal evolution of seismicity in the Soultz-sous-Forêts EGS. Gischig and Wiemer (2013) refine this approach, introducing a stimulation factor that evolves with pressure but subject to several threshold criteria. They apply this model to the Basel EGS stimulation, obtaining a good match with the data and then exploring several alternative injection scenarios. 

However, several instances have been documented in which permeability enhancement and induced seismicity are clearly decoupled. For instance, Bourouis and Bernard (2007) analyzed the MEQ catalog of the 1993 Soultz-sous-Forêtsstimulationandconcludedthataseismicslipinducedduringthisoperationresultedinsubstantial permeability enhancement. More recently, Guglielmi et al. (2015) described an experiment in which aseismic slip was observed as a direct consequence of fluid injection and was associated with permeability increase. In an EGS, because of geological settings found at large depth (crystalline basement), fluid flow is dominated by secondary permeability in a fracture network (Majer et al., 2007). Permeability enhancement therefore can be a consequence of either fracture opening or fracture shear failure (McClure & Horne, 2012). Other mechanisms can be responsible for such processes and may possibly exceed the permeability gains obtained from self-propping (explored in more detail in section 4.2). Thus, permeability enhancement and induced seismicity can both result from shear failure of existing fractures, but occurrence of one does not imply occurrence of the other. 

Permeabilitygainsrealizedduringhydraulicstimulationaresometimestemporary.Forexample,duringstimulation of the Desert Peak EGS, injectivity repeatedly declined during the shut-in periods that followedinjection intervals (Chabora et al., 2012; Dempsey et al., 2015). This could be due to a reversible thermoelastic effect: Rock contracts as it cools allowing fracture apertures to widen but returns to its original state when the reservoir reheats. In contrast, hydroshearing is by essence an irreversible process. 

Other stimulation techniques known to improve geothermal reservoir permeability include hydraulic fracturing (Chabora et al., 2012) and acid injection (Portier et al., 2009). For these mechanisms, a connection with induced seismicity is even more tenuous. Although a direct link between permeability and induced seismicity is not always clear, it is generally accepted that the earthquakes are triggered by, and therefore reflect, an increase of the pore pressure (Hubbert & Rubey, 1959). Notable exceptions to this include seismicity induced by reservoir drawdown (Segall et al., 1994; Segall & Fitzgerald, 1998) or rapid cycling of injection rates (Segall & Lu, 2015), both of which are poroelastic phenomena, or by aftershock triggering. Thus, even if induced seismicity is not coincident with permeability change at the same location, it nevertheless carries information about reservoir-scale permeability changes through its sensitivity to fluid pressure changes. This idea is the basis of our approach to invert permeability enhancement from microseismicity data. 

Links between earthquakes and hydrological changes have also been extensively documented in natural settings. For example, Miller et al. (2004) investigated an aftershock sequence in Italy and interpreted it as the result of a coseismic fluid pressure pulse, and Muir-Wood and King (1993) described how the style of faulting of large natural earthquakes causes changes in crustal porosity. Earthquakes are also known to be linked to fluid flow in volcanic settings. For instance, Ventura and Vilardo (1999) used seismicity to estimate hydraulic parameters at Vesuvius volcano. Seismicity have also been used to understand fluid flow in natural geothermal systems, such as changes of the two-phase pore pressure at Long Valley hydrothermal system (Sturtevant et al., 1996). Thus, while our study here addresses a rather specific set of injection experiments, we suggest that the findings have relevance to the wider hydrological and seismological communities. 

RIFFAULT ET AL. 

2 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2017JB015299 

**Figure 1.** Location of the two enhanced geothermal system stimulation sites in this study. 

### **2. EGS Experiments in South Australia** 

In developing and demonstrating our method, we use data from two EGS stimulations, both performed in South Australia: the Habanero well in 2003 in Cooper Basin and the Paralana 2 well (Figure 1). Both projects were undertaken with the goal to increase in situ permeability in high-temperature formations basement at approximately 4-km depth. Geologic and injection parameters for the two stimulations are summarized in Table 1. 

For hydraulic fracturing to have occurred at these stimulations, the downhole pressure in the well would have needed to exceed the minimum principal stress. Because of uncertainty in the estimated stress directions and magnitudes, we cannot be certain that a hydraulic fracture was not created during these stimulations. For the Habanero stimulation, a previous study deemed hydraulic fracturing unlikely (Baisch et al., 2006). At Paralana, it is possible that downhole pressure exceeded the minimum principal stress (Albaric et al., 2014). 

Arrays of seismometers were installed at both sites, and MEQs catalogs are available for both stimulations (Albaric et al., 2014). In both cases, the distribution of MEQs allows identification of a subhorizontal plane that presumably localizes fluid flow. 

#### **2.1. Habanero** 

Three stimulations were conducted at the Habanero well in 2003, 2005, and 2012. Here we consider the first stimulation, which involved injection of 20,000 m<sup>3</sup> of water into the granitic basement at a depth of 4.25 km. The stimulation was conducted as a series of four constant flow rate steps, increasing from 8 to 24 L/s (Figure 2a). WHP in the final step was maintained about 31 MPa above the 35 MPa artesian overpressure encountered in the well. WHP is seen increasing faster than injection rate; thus, injectivity decreased, giving no sign of permeability improvement (Figure 2b). 

About 10,436 MEQs larger than _Mc_ = −0 _._ 8 were located during this stimulation. They formed large planar cloud dipping about 10<sup>∘</sup> to the west, approximately 1 × 2 km in extent and 150–200 m thick. As the thickness of the cloud is approximately the vertical resolution the MEQ locations, it was inferred that all the events occurred on a single large structure (Baisch et al., 2006). This was later confirmed by drilling, and this structure is now called the Habanero Fault (Bendall et al., 2014). 

#### **2.2. Paralana** 

Paralana 2 was drilled in 2009 as an injection well for an EGS project to a depth of 3,962.5 m. The well was cased from the surface to a depth of 3,680 m and plugged at 3,680 m. The casing was perforated between 3,639 and 3,645 m, within the sediments, an unusual setting as most EGS projects aim to stimulate the crystalline 

RIFFAULT ET AL. 

3 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2017JB015299 

**Table 1** 

_Paralana and Habanero Stimulations Parameters_ 

<!-- Start of picture text -->
Stimulation Paralana a Habanero b<br>Stimulation date July 2011 November–December 2003<br>Volume injected (m 3 ) 2,200 20,000<br>Stimulation duration (days) 3.4 30<br>Injection depth (m) 3,946 c 4,250<br>Maximum wellhead pressure (MPa) d 39.0 30.9<br>Injection regime Constant WHP Four steps with increasing<br>with shut-ins WHP at each step<br>Stress regime Compressive with a Compressive<br>strike-slip component<br>In situ temperature ( ∘ C) 190 250<br>MEQs located 4,753 11,068<br>Maximum magnitude 2.6 2.2<br>Minimum magnitude −0.6 −2.0<br>Magnitude of completeness e Mc 0.1 −0.8<br>MEQs located above  Mc 3,809 10,436<br>Injection plane dip 13 ∘ NNW 9 ∘ W<br>Average lateral error (2 𝜎 ; m) 50 40<br>Average vertical error (2 𝜎 ; m) 45 80<br><!-- End of picture text -->

_Note._ MEQ = microearthquake; WHP = wellhead pressure. 

aAlbaric et al. (2014); Bendall et al. (2014). bBaisch et al. (2006). cIntersection between well and injection plane derived from seismicity distribution. dExcluding WHP needed to overcome artesian pressure, 23 MPa for Paralana, 35 MPa for Habanero. eCalculated with the maximum curvature method (Wiemer & Wyss, 2002). 

basement (Evans et al., 2005). Its stimulation lasted for 5 days and was carried on in two stages. During the first stage (continuous pumping), 2,200 m<sup>3</sup> of water were injected, accompanied by 110 m<sup>3</sup> of acid. A second stage followed (propped fracture treatment), which is not considered in this study. Injection was maintained at almost constant WHP (Figure 2c). An increase in injectivity over time is observed (Figure 2d), thus permeability enhancement can be certain to have occurred. The lithostratigraphic and structural environment in Paralana is weakly constrained, especially below 3,300 m because of logging issues (Reid et al., 2010). 

Three thousand eight hundred nine MEQs with magnitude larger than _Mc_ = 0 _._ 1 were detected and relocated, according to process described in Albaric et al. (2014). Unlike the cloud recorded during the 2003 Habanero stimulation, events are much more widespread, with some occurring thousands of meter above the injection point at early times. It is not likely that pore pressure change due to the injection could reach these great distances at early times, and we therefore attribute those events to a poroelastic stress effect. Discarding those MEQs, the remaining large events form a cloud about a planar structure dipping 13.5<sup>∘</sup> to the NNW. Because the thickness of the identified structure, 140 m, is larger than the vertical location uncertainty, 50 m, it is unlikely to be a single fault as at Habanero but rather a thick fracture network. This planar structure intersects the well 200 m below the cement plug. If injected fluid entered sediments at perforation depth, between 3,639 and 3,645 m, it resulted in no discernible seismicity cloud. Thus, it seems likely that most injected fluid penetrated the cemented plug and entered the formation at around 3,900 m. This depth coincides with the basement-sediment cover boundary (Albaric et al., 2014), which have sometimes been observed as zones of elevated permeability (Boiron et al., 2010). The basement-sediment cover boundary provides a potential path for fluid to reach intersecting, optimally orientated fractures and to trigger their failure through hydroshearing. 

#### **2.3. Radial Geometry** 

For the purpose of our analysis, we make the following assumptions about the geometry of our problem. First, fluid flow and permeability enhancement occur dominantly within a 2-D plane that also corresponds to the best-fitting plane to the seismicity cloud. In the case of Habanero, this assumption is particularly robust, as drilling reveals there to be a single fracture plane that was reactivated during the stimulation. For Paralana, 

RIFFAULT ET AL. 

4 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2017JB015299 

**Figure 2.** Wellhead pressure, injection rate, injectivity, and acid injections for the 2011 Paralana 2 and 2003 Habanero 1 stimulations. 

this assumption is not directly verified by downhole imaging, but there is a candidate structure, the interface betweenbasementandsediment,toaccountforarelativelypermeableplaneoffluidflow.Second,weassume radial symmetry of seismicity, permeability enhancement, and pressure evolution. Visual inspection of the seismicity clouds for both data sets indicate some level of departure from radial symmetry. Thus, our inversion of permeability enhancement represents a radially averaged solution. This approach prevents us from considering structural heterogeneities such as potential flow channeling caused by shear displacement (Auradou et al., 2006) or heterogeneities in properties such as the stress distribution (Valley & Evans, 2010). Still, it allows us to draw robust first-order conclusions (see Appendix C for an investigation of radial asymmetry). 

### **3. Permeability Inversion From Microseismicity** 

Induced seismicity carries quantitative information about permeability changes in the subsurface. Here we construct an inversion procedure to infer those changes. We express the relationship between permeability, _𝜅_ , pressure, _P_ , and seismicity, parameterized as the volume density of earthquake hypocenters, _n_ 

where _r_ is radial distance from the well in the 2-D plane of fluid flow, _t_ is time, **𝚯** , **𝚿** , and **𝚽** are parameter vectors, and _h_ (·), _g_ (·), and _f_ (·) parameterize permeability evolution, reservoir simulation, and induced seismicity triggering, respectively. Note that _r_ and _t_ dependence of _g_ (·) and _f_ (·) is implied. 

Therefore, we can express forward and inverse models that relate seismicity and permeability evolution, using fluid pressure as an intermediary term, as 

where the parameter vectors have been omitted for clarity. Our methodology is introduced as follows. In section 3.1, we present a method to extract the broad spatiotemporal features of an induced seismicity cloud and compute a meaningful quantification of seismic activity _n_ . In section 3.2, we theoretically motivate a linear relationship for _f_ (·) and validate this using observations from Habanero. The inverse, _f_<sup>−1</sup> (·), follows straightforwardly, and a method to account for location errors and aleatoric uncertainty is presented at this step. In section 3.3, we propose a generic form for _h_ (·) that can replicate a range of possible permeability enhancement scenarios but is not motivated by physical considerations. This expression is embedded inside 

RIFFAULT ET AL. 

5 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2017JB015299 

**Figure 3.** Hypocenter density calculation method illustration for Habanero and Paralana. (a, c) MEQ distribution projected on the injection plane. (b, d) Contoured hypocenter density distribution where the distribution of MEQs is represented as a spatial probability distribution. MEQ = microearthquake. 

a simple reservoir model, _g_ (·), and adapted to mirror the Paralana stimulation. Finally, in section 3.4, we outline Markov chain Monte Carlo (MCMC) calibration of the forward model, which yields a posterior distribution for the full parameter set, **𝛀** = [ **𝚯** _,_ **𝚿** _,_ **𝚽** ]. This completes the inverse problem, which is applied to the Paralana stimulation only. 

We consider only earthquakes triggered by increasing fluid pressure. However, it has been suggested that some seismicity associated with EGS can be attributed to poroelastic effects (Segall & Lu, 2015), particularly when there are rapid changes in the injection rate. These effects are smaller than the direct pore-pressure effect on fault strength and are neglected here. An induced MEQ catalog is also contaminated by aftershocks inthesensethatthesearenotdirectlyattributabletopressurerisebutbypastMEQs. Langenbruchetal.(2011) found the coupling effect between MEQs was very weak for six catalogs in the EGS sites of Soultz-sous-Forêts and Basel. As there is no obvious clustering in the seismicity rate over our timescales of interest, we assume aftershocks are of second-order importance and can be neglected in the present analysis. 

#### **3.1. Hypocenter Density** 

The triggering of any particular earthquake is a consequence of complex nucleation processes (Rubin & Ampuero, 2005), which are sensitive to heterogeneities in both material properties and stress (Ben-Zion & Rice, 1995). These heterogeneities are, for all practical purposes, unknowable ahead of time. Thus, on its own, a single earthquake—when described only as a hypocenter position and a triggering time, as for the catalogs considered in this study—carries limited information about the particular in situ conditions where it nucleated. However, when we average over large numbers of earthquakes, we also average over the heterogeneity. 

In our analysis, we are primarily concerned with the cumulative hypocenter density, _n_ . Following Dempsey, Barton, et al. (2016), we define this quantity as the total number of earthquake hypocenters occurring per unit area of the injection plane prior to time, _t_ . Because the location of each earthquake is not known precisely, we represent it as a normal 3-D spatial probability distribution centered on its calculated location. Horizontal and vertical standard deviations of the distribution are the horizontal and vertical location uncertainties, respectively. Then, we divide the space around the injection well into concentric cylindrical shells. For each shell, _n_ is computed by integrating the probability density over the shell area for all events occurring before time, _t_ . We fix the annulus thickness of the shells at 50 m, which corresponds closely to the average horizontal location uncertainty for both catalogs. Dividing by the annulus area yields the cumulative hypocenter density that also incorporates location uncertainty (Figure 3). Greater details on the computation of location uncertainty is given in Appendix A1. 

RIFFAULT ET AL. 

6 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2017JB015299 

#### **3.2. Seismicity-Pressure Relationship** 

Weassumethataninducedearthquakeistheresultoffluidpressureincreasethattriggersshearfailureaccording to the Mohr-Coulomb criterion. That is when shear stress, _𝜏_ , equals the shear strength, _𝜏s_ , which in turn depends on the effective normal stress 

where _fs_ is the friction coefficient, _𝜎n_ is the normal stress, and _P_ is fluid pressure. Assuming a fracture is at initial shear stress, _𝜏_ , less than the static shear strength, _𝜏s_ , then the critical pressure increase to cause failure, Δ _P_ crit, is 

For pressure increases larger than Δ _P_ crit we assume that a fracture can repeatedly reshear. Each time the fracture shears, shear stress drops by Δ _𝜏_ , and therefore, an additional Δ _P_ = _f_ 1 _s_<sup>(Δ</sup><sup>_𝜏_) of fluid pressure increase is</sup> required before the next event occurs. Assuming an average stress drop independent of fluid pressure, the cumulative hypocenter density will be approximately proportional to the pressure increase over and above the critical value Δ _P_ −Δ _P_ crit, thus motivating a model of the form _n_ = _f_ ( _P_ ; **𝚽** ) where Δ _P <_ Δ _P_ crit _n_ = (5) { 0 _k_ (Δ _, P_ −Δ _P_ crit) _,_ Δ _P_ ≥ Δ _P_ crit } 

with _k_ the proportionality factor between pressure increase and MEQ triggering, as defined in Dempsey and Suckale (2017). Note, _k_ is an empirical coefficient that accounts for factors influencing earthquake triggering, for example, fracture density, event detection threshold, and degree of seismic versus aseismic slip. Its value is obtained through calibration. The factor _k_ is strongly sensitive to the magnitude of completeness, _Mc_ , which sets the detection threshold for seismicity. Equation (5) is valid only as long as Δ _P_ was not exceeded at an earlier time, a behavior sometimes referred to as the Kaiser effect (Baisch et al., 2006). Thus, equation (5) becomes 

Equation (6) will not be accurate when seismicity is dominated by mechanisms other than hydroshearing, for example, thermal contraction effects near the wellbore. The factor _k_ is probably of heterogeneous distribution; however, we shall assume that an average value for the reservoir can be used, and this does not change over the course of the stimulation. 

Although this model is a simple parameterization of quite complex earthquake nucleation processes, it nevertheless captures the essence of our hypothesis—correspondence between pressure rise and cumulative seismicity—and can be checked against the data. 

An alternative approach is to use cumulative seismic moment or fault slip, as a proxy for fluid pressure. For instance, Rothert and Baisch (2011) used the cumulated slip displacement during stimulation of Habanero to infer directly the extent of the stimulated reservoir, a conjecture we challenge in this paper. However, for the stimulations we have investigated, catalogs are dominated by a handful of large events, which reduces the usefulness of spatial averaging. Furthermore, there is little evidence that the size of an event carries much information about in situ pressure conditions, whereas its hypocenter location and timing certainly do: In this sense, large and small earthquakes contain equal information. A notable exception to this is the ongoing discussion around the maximum magnitude-induced earthquakes, where the very largest events may carry information about the dimensions of the stimulated volume (Shapiro et al., 2011), the crustal stress state (Dempsey, Suckale et al., 2016; Goertz-Allmann & Wiemer, 2013), or a combination of those two elements (Galis et al., 2017). 

Afurthersourceofuncertaintythatwemustaccountforisthealeatoric(randomprocess)uncertaintyinherent in earthquake triggering. Consider the following argument: 

1. Induced earthquake triggering can be modelled as a nonhomogeneous Poisson point process with a rate parameter proportional to the fault stressing rate (Dempsey & Suckale, 2017). 

RIFFAULT ET AL. 

7 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2017JB015299 

2. Thus, the response to a given pressure increase, Δ _P_<sup>′</sup> , is probabilistic. While the most likely outcome might be that the number of earthquakes triggered is _N_<sup>′</sup> , there remains a finite probability that it could in fact be _N_<sup>′</sup> + 1 (or _N_<sup>′</sup> + 2, or _N_<sup>′</sup> + 3, etc.). 

3. Flipping this argument around, if _N_<sup>′</sup> earthquakes happen to be observed, this implies that the most likely pressure increase causing those events is Δ _P_<sup>′</sup> . However, it is not possible to rule out other values smaller or larger than Δ _P_<sup>′</sup> . In fact, the implied distribution for Δ _P_ is Poissonian, and the contribution of this source of uncertainty to the calculation of _n_ is discussed in Appendix A2. 

Radial profiles of cumulative hypocenter density are computed for the Habanero stimulation at five different times (Figure 4a). Although each profile is different, there is a characteristic shape to each of them from which we infer two behaviors: (1) Near the wellbore, for _r < rd_ = 300 m, _n_ is approximately constant, and (2) at distances greater than _rd_ , _n_ decreases logarithmically. These two behaviors motivate a piecewise radial model for _n_ of the form 

In the near-wellbore region, where _n_ = _n_ max is a constant, our hypothesis is that this reflects a region of constant pore pressure increase. Furthermore, given the connectedness of this region to the wellbore, the equilibrated pressure increase should be approximately the same as the downhole injection pressure. With each increase of the injection pressure, there is a corresponding increase of hypocenter density. Fitting a model of the form (7) to each hypocenter density profile yields an estimate of _n_ max at each stimulation step. It implies that the permeability within this region is high, consistently with the model of a large stimulated fracture proposed by Baisch et al. (2006). There appears to be a linear correlation between _n_ max and the average injection pressure at each stage (Figure 4b), which is consistent with the hypothesized relationship equation (6). The best fitting straight line to these data yield an estimate for the parameters **𝚽** : _k_ = 280 events⋅km<sup>−2</sup> ⋅MPa<sup>−1</sup> and Δ _P_ crit = 4 _._ 6 MPa. 

Beyond the constant _n_ region ( _r >_ 300 m), seismicity density and, by inference, fluid pressure decay logarithmically (Figure 4a). This is consistent with radial pore pressure diffusion from a constant source, which in this case is the constant pressure region _r < rd_ . From mass conservation, the steady 2-D pressure distribution for a hollow cylinder with inside transition radius, _rd_ , at overpressure, Δ _P_ max, and outside radius, _R_ , at initial pressure, assuming uniform diffusivity/permeability, is given by Carslaw & Jaeger (1959) 

This solution implies a uniform permeability in the volume _r > rd_ , which may not be reasonable if permeability enhancement is taking place. Nevertheless, Dempsey, Barton, et al. (2016) was able to replicate this kind of inferred pressure response using a simplified, two-permeability step model to represent the stimulated and unstimulated rock. This furthermore implies the presence of high permeability for _r < rd_ , which is consistent with the model of a large stimulated fracture proposed by Baisch et al. (2006). 

The model introduced in equation (6) was proposed by Baisch and Harjes (2003), where it was derived from the features of induced seismicity observed at the KTB experiment in Germany: (i) that source mechanisms indicate pore pressure increase is the triggering factor and (ii) detected multiplets attest to the occurrence reshearing. However, in that study, the stress drop was not assumed constant, and therefore no proportionality relationship could be established between pore pressure and cumulative seismicity. A different model was introduced by Shapiro et al. (2011), in which Δ _P_ crit is not constant but randomly distributed between two extreme values and where no reshearing occurs. This model is based on results obtained from three EGS stimulation data sets (Rothert & Shapiro, 2007). The model implies proportionality between event probability and porepressureincrease.Inourstudy,theproportionalityrelationshipexpressedinequation(6)isbackedbythe analysis of the evolving induced seismicity distribution observed during the Habanero stimulation. Two lines of evidence are prensented: (i) a linear correlation between _n_ max in the near-wellbore region and the average injection pressure at each stage; (ii) logarithmic decay of hypocenter density beyond the constant _n_ plateau, correlating with the expected pressure field. Additionally, this validation of the presented model implies that stress drop is constant, at least for the range of events that occurred during the Habanero stimulation. 

RIFFAULT ET AL. 

8 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2017JB015299 

**Figure 4.** Hypocenter density profiles for (a) Habanero at the end of the steps 1, 2a, 2b, 3, and 4 specified in Figure 2a and Paralana at times _t_ 1, _t_ 2, _t_ 3, and _t_ 4 specified in Figure 2c, with model presented in equation (7). (c) Best-fit hypocenter density model presented in equation (6) for stabilized injection pressure stages at Habanero for each step against the average pressure during that step (modified from Dempsey, Barton, et al., 2016). (a) and (c) are plotted on a logarithmic scale on their horizontal axis and thus do not start at 0. Error bars on (b) are computed using Markov chain Monte Carlo method. 

RIFFAULT ET AL. 

9 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2017JB015299 

|**Table 2**<br>_Simulation Parameters_||
|---|---|
|Parameter|Value|
|Radius well|0.10 m|
|Outer radius|600 m|
|Annulus thickness|2 m|
|Depth|3,800 m|
|~~Vertical thickness~~|~~140 m~~|
|Simulation time|3.4 days|
|Maximum time step value|0.025 days|
|Initial pressure|59 MPa|
|Initial temperature|190 <sup>∘</sup>C|
|Thermal conductivity|2.2 W⋅m<sup>−1</sup>⋅K<sup>−1</sup>|
|Density|2,681 kg/m<sup>3</sup>|
|Specific heat|2.0 kJ⋅m<sup>−3</sup>⋅K<sup>−1</sup>|

Profiles of hypocenter density at different times during the Paralana stimulation do not present a plateau as in Habanero, probably because of the absence of a large preexisting permeability structure. Instead, they indicate primarily logarithmic decay of hypocenter density with distance from the wellbore (Figure 4c). Like Habanero, this is consistent with a flow regime that is assumed to be dominantly radial. To compute the profiles for Paralana, we had to extrapolate the position of the wellbore at the depth of the injection plane, as detailed in Appendix B. 

#### **3.3. Kinematic Permeability Inversion** 

We hypothesize that the evolving pressure distribution, inferred from the hypocenter density distribution, carries information about the evolving permeability distribution, _𝜅_ ( _r, t_ ). To constrain _𝜅_ , we adopt an inverse modeling approach: proposing candidate models for _𝜅_ , simulating their pressure prediction, and quantifying the goodness of fit of each with the observed seismicity. To this end, it is useful to parameterize a function that describes a broad range of time and space behavior for _𝜅_ . We term this a kinematic permeability model, as the space-time evolution of _𝜅_ has no underlying physical motivation. In contrast, a deterministic permeability model (a broad range of which are available in the published literature Baisch et al., 2010; Cappa & Rutqvist, 2011; Dempsey et al., 2015; Gischig & Wiemer, 2013; Kohl & Mégel, 2007; McClure & Horne, 2011; Shapiro & Dinske, 2009; Wassing et al., 2014) computes permeability in terms of other modelled physical processes, such as stress, temperature, or pore pressure. 

The advantage of a kinematic model is that we are not burdened by the computational expense of modeling the underlying physics, for example, fracturing. We are also spared the kind of model error that arises when the wrong set of physics is assumed. The disadvantage of a kinematic approach is the inherent restriction in the types of permeability enhancement regimes that can be modelled. For instance, here we do not consider models with reversible permeability increase, such as an elastic process, or one with azimuthal variability. 

This type of approach has been considered before. For instance, reservoir hydraulic properties inferred from MEQ catalogs were obtained by Shapiro et al. (1997, 2003, 2005) and Dinske et al. (2010), by a process called seismicity-based reservoir characterization. However, these authors assume constant permeability with time. As the models for _𝜅_ ( _r, t_ ) we use are quite complex, we are unable to develop analytical expressions for _P_ ( _r, t_ ), which is the approach taken by Shapiro et al. (1997) and Dinske et al. (2010). Instead, we use a modified groundwater flow simulator that plays the role of _P_ = _g_ ( _𝜅_ ; **𝚿** ). 

Our simulations approximate radial flow and pressure buildup during a stimulation operation similar to that at Paralana (Figure 2). Governing equations of heat and mass transport in a porous medium subject to Darcy flow are solved using the code Finite Element Heat and Mass (Zyvoloski, 2007). Consistent with our hypocenter density analysis, a radial geometry is assumed to represent the injection layer described in section 2.2. We make sure that gridding and time stepping are fine enough to not interfere with simulation outputs. Uniform initial pressure and temperature are assigned throughout the domain. Fixed model parameters are summarized in Table 2. The injection source is modelled as a fixed pressure term wherein the flow simulator internally calculates an injection rate to maintain the prescribed pressure value in the injection block. This is important 

RIFFAULT ET AL. 

10 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2017JB015299 

**Figure 5.** (a) _𝜅_ against _r_ and influence of _𝛼_ and _𝜅_ 0. (b) _r_ front against _t_ and influence of _𝛽_ and _r_ max. (c) _A_ is the factor by which _𝜅_ is multiplied, against _t_ , and influence of _𝛾_ and _d𝜅_ . 

because, in spite of the WHP being maintained nearly constant throughout the Paralana stimulation, the flow rate increased approximately linearly over time. This presumably reflects permeability changes in the subsurface. The temperature of the injected fluid is calculated using a wellbore simulator (see Appendix D for details), which accounts for heating of the fluid in the 4.25-km-deep borehole before it enters the formation. Zero heat and mass flow boundary conditions are enforced at all boundaries, and we ensure these are far enough from injection source that boundary effects are negligible. 

As we assume that the majority of the space occupied by the fluid is within the fracture network, we fix porosity, _𝜙_ , as a function of permeability, _𝜅_ , following a cubic law (Landau & Lifshitz, 1959) 

with _𝜙_ 0 the initial porosity. _𝜙_ 0 is the only parameter that is not fixed, meaning that in our notation system we have **𝚿** = [ _𝜙_ 0]. We do not consider the compressibility of the formation impact on porosity, as its effect is found to be negligible on the simulation outcome. 

A problem that arises when approximating a fracture network as an effective porous media is heat transfer betweenfluidandrockmatrix(Shaiketal.,2011).Whenmodelingaporousmedia,itiscommontoassumethat fluid and rock formation are in thermal equilibrium. In a fracture network, this is not always the case as much of the matrix is thermally isolated from the fluid. This is important when modeling injection because changes in fluid temperature affect the injectivity via the temperature-dependent viscosity and density (McLean & Zarrouk, 2015). To determine the impact of this effect, we run models both with and without matrix-fluid heat transfer effects (that is, maximum and zero buffering of the fluid temperature). These limiting cases show that temperature-viscosity effects have a less than 1% effect on the modelled flow rate. Hence, temperature effects have no substantial impact on the inversion process. 

We introduce a function for permeability evolution of the form _𝜅_ = _h_ ( _r, t_ ; **𝚯** ) that depends on distance from the wellbore, _r_ , and time, _t_ . Consistent with our kinematic description, permeability does not depend on 

RIFFAULT ET AL. 

11 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2017JB015299 

**Figure 6.** Spatiotemporal depiction of two permeability evolution regimes both satisfying the linear injectivity increase observed at Paralana. Synthetic seismicity catalogs are generated for both regimes using the relation expressed in equation (6) and Poissonian distributions and superposed over permeability contours. Subplots depict hypocenter profiles computed from those catalogs at times _t_ 1 _, .., t_ 4. (a) Parameter set **𝚯1** (Table 3). (b) Parameter set **𝚯2** (Table 3). Color scales differently for each plot, as initial permeabilities _𝜅_ 0 are different. MEQ = microearthquake. 

pressure change, Δ _P_ , stress, or temperature, as it does in other treatments cited earlier. The shape and time evolution of the permeability function is controlled by six parameters, **𝚯** = [ _𝛼, 𝛽, 𝛾, r_ max _, 𝜅_ 0 _, d𝜅_ ] 

where _r_ front and _r_ max are the extent of the front of enhanced permeability at time, _t_ , and time, _t_ max, respectively; _A_ is the permeability enhancement at the wellbore at time, _t_ ; _𝜅_ 0 is the initial permeability; and _𝜅_ 0 × _d𝜅_ is the maximum permeability, which occurs at _r_ = 0 and _t_ = _t_ max. The parameter _𝛼_ controls the radial shape of the permeability function, with _𝛼_ = 0 yielding a step function and _𝛼_ = 1 giving a linear function (Figure 5a). The parameter _𝛽_ controls how the permeability front propagates away from the wellbore, with _𝛽_ = 0 _._ 5 corresponding to a classic diffusion profile (Figure 5b). The parameter _𝛾_ controls how permeability magnitude grows over time, with _𝛾_ = 1 giving a linear increase (Figure 5c). Although this simple model cannot 

<!-- Start of picture text -->
Table 3<br>Permeability Model Parameters<br>Parameter 𝚯1 𝚯2<br>𝛼 1.09 1.00<br>𝛽 0.50 0.88<br>𝛾 1.28 0.60<br>r max (m) 400 50<br>𝜅 0 (m 2 ) 8.13 10 −17 2.0 10 −16<br>d𝜅 13.2 6.6<br><!-- End of picture text -->

RIFFAULT ET AL. 

12 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2017JB015299 

**Figure 7.** Outcome of the Markov chain Monte Carlo run after 1,500 iterations for each of the 200 walkers compared with the Paralana data set (300,000 forward runs). For each subplot, the median value is given with the 16% and 84% quantiles. (a) Distribution of simulated injectivity increase with time simulated compared with the target. (b) Distribution of simulated hypocenter density compared with observed values, starting 50 m from the wellbore. (c) Distribution of prescribed permeability evolution scenarios. Scale on the horizontal axis for plots (b) and (c) are different. 

replicate every possible permeability enhancement regime, it provides considerable flexibility when deriving a first-order assessment of where and when permeability increases and by how much. 

Injectivity is a nonunique constraint on the permeability enhancement regime. For instance, Figure 6 shows how two different set of parameters, **𝚯1** and **𝚯2** , with a same initial porosity _𝜙_ 0 = 3%, leading to quite different permeability changes, but both nevertheless replicate the linear injectivity evolution that was observed during the Paralana stimulation. Synthetic seismicity catalogs generated for both regimes using the relation expressed in equation (6) and Poissonian sampling have approximately the same spatial extent. To generate the seismicity, _k_ = 300 _._ 0 MEQs⋅km<sup>−2</sup> ⋅MPa<sup>−1</sup> and Δ _P_ crit=0.1 MPa are used for both regimes. The only observations that distinguishes these two regimes is the evolution of hypocenter density profiles. Thus, in the regime parameterized by **𝚯2** , induced seismicity occurring in volumes not undergoing stimulation nevertheless carries useful information that constrains the permeability enhancement distribution as a whole. 

#### **3.4. Inversion Method** 

Inverse modeling is data driven, and thus, we need a quantitative method to distinguish good and bad models on the basis of their correspondence with the observations. We use a likelihood expression, which gives the relative probability that a particular set of parameters is correct given the observations. To construct our likelihood expression, there are two sets of observations: injectivity changes measured at the well and hypocenter density profiles. For simplicity, we approximate the injection rate during the Paralana stimulation as linearly increasing with time (Figure 7a) and ignore the shut-in intervals when injection was 0. We divide the 3.4-day stimulation into _Nf_ = 69 times and construct a least squares residual at these for the comparisons between the observed, _̃ qi_ , and simulated flow rate, _qi_ . 

For hypocenter density, we use the values calculated in section 3.1, that is, computed for 50-m-thick shells, extending to 600 m from the wellbore. Hypocenter density profiles are constructed at four different times 

RIFFAULT ET AL. 

13 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2017JB015299 

**Figure 8.** Posterior distributions of the parameter vector **𝛀** given by the Markov chain Monte Carlo run after 1,500 iterations for each of the 200 walkers (300,000 forward runs). For each parameter, initial walker position **𝛀initial** and prior distribution bounds are given, as well as best fit value **𝛀**<sup>**∗**</sup> . MEQ = microearthquake. 

_t_ 1 _,_ … _, t_ 4. This yields _Ns_ = 48 hypocenter density values, _̃ nj_ , for comparison. The average simulated pressure in the same shell is used to construct an equivalent hypocenter density, using the estimated parameters _k_ and Δ _P_ crit (equation (6)). The equivalent simulated hypocenter density _nj_ in a shell _s_ defined by the radii _R_ 1 and _R_ 2, at time _t_ is then 

As we integrate over an annulus, pressure values taken closer to the external radius, _R_ 2, have a higher weight than those taken closer to the internal radius, _R_ 1. For example, in the shell encompassing the volume within 50 m of the wellbore, pressure readings from the first 5 m will account only for 1% of the pressure value used to simulate hypocenter density in the same shell. Even if pressure perturbations within the first few meters of the source are not correctly modelled due to the exclusion of near-wellbore effects, this will not significantly affect our results. An overall log-likelihood function ln( _p_ ), depending on the augmented parameter vector **𝛀** = [ **𝚯** _,_ **𝚿** _,_ **𝚽** ] = [ _𝛼, 𝛽, 𝛾, r_ max _, 𝜅_ 0 _, d𝜅, 𝜙_ 0 _, k,_ Δ _P_ crit], is 

where _w_ is a weight that controls the trade-off between fitting injectivity and fitting seismicity, _xf_ and _xs_ are the injection rate and seismicity residuals, respectively. Our investigations show _w_ = 1 to provide good performance for the Paralana stimulation, although this number may be different in other situations. 

We use an MCMC to explore parameter space and yield posterior distributions for the nine model parameters **𝛀** . The goal is not to find the most likely parameter set but rather to determine the region in parameter space that yields models that reasonably fit to the data. Our MCMC approach uses 200 walkers to explore the parameter space. We set the initial position of the walkers, the initial sample of **𝛀initial** , randomly according to a uniform distribution between bounds given in Figure 8. Our prior distributions are uniform and 

RIFFAULT ET AL. 

14 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2017JB015299 

**Figure 9.** Evolution of pore pressure and permeability with distance from the wellbore and time for the set of parameters **𝛀**<sup>**∗**</sup> , the best-fit scenario. Because of our method, seismicity propagation follows pore pressure increase. MEQ = microearthquake. 

in some case unbounded. Walkers are not allowed to leave those bounds. We use the Python package emcee (Foreman-Mackey et al., 2013), an implementation of Affine Invariant MCMC. One thousand five hundred samples are run, which correspond to 300,000 forward runs of radial flow simulation. The first 1,000 samples are the burn in, during which the parameter distribution converges to the posterior distribution. The last 500 samples represent the posterior distribution of our nine parameters (Figure 8). In the supporting information, we present a graphic depiction of the posterior distribution using the Python package corner (Foreman-Mackey, 2014), where eventual correlation between inverted parameters is made clear. We use this distribution to compute simulated injectivity and seismicity distribution as well as prescribed permeability profiles. We extract the median value and the 16% and 84% quantiles, corresponding to a one _𝜎_ variation for each of those outputs (Figure 7). The range of permeability scenarios is limited to only one regime (Figure 7c), the parameters for the best-fit scenario **𝛀**<sup>**∗**</sup> are shown in Figure 8. An important result is the fact that permeability enhancement never reaches a distance further than 40 m from the wellbore. Another finding is that, for the best-fit scenario, cold fluid does not propagate further than 60 m away from the wellbore. 

### **4. Discussion** 

Our inversion of the hypocenter density data returns posterior distributions of nine parameters, **𝛀** , which carry information on the physical processes linking pore pressure, permeability, and seismicity in the Paralana stimulation. It is interesting to note that there is only a narrow range of permeability enhancement scenarios that replicate both injectivity and hypocenter density observations (Figure 7c). 

#### **4.1. Interpretation of Inverted Parameters** 

Initial porosity, _𝜙_ 0: With a best-fit value of 4.67 %, porosity seems high for rocks at 4 km deep. However, given that stimulation occurs at the interface of sedimentary formation and granitic basement, the high value is perhaps not entirely implausible. 

Permeability magnitude growth over time, _𝛾_ : The posterior for _𝛾_ is centered near to 1, which implies almost linear permeability growth over time. This result may be useful when investigating the physical mechanisms of permeability increase. 

Radial extent of permeability enhancement, _r_ max: Permeability enhancement is limited to distances of less than 25 m from the wellbore for most permeability scenarios, and often much less, whereas earthquakes are triggered up to 400 m away. To test if our inverted value is robust in regard to potential assymetic behaviors as discussed in section 2.3, we design two synthetic assymetric simulations and apply our inversion method to those (Appendix C). Results indicate that permeability enhancement maximum extent still seems to be accurately capture even with non radial flow. Thus, in the Paralana stimulation there appears to be very little evidence for spatiotemporal correlation of permeability enhancement and induced seismicity for the Paralana stimulation (Figures 7 and 9). Our inference that permeability enhancement and induced seismicity at Paralana are decoupled stands in contrast to the widely held view that the “stimulated reservoir volume” corresponds with the cloud of induced microseismicity (Baisch et al., 2006; Bendall et al., 2014; Chabora et al., 2012; Evans et al., 2005; Häring et al., 2008; Llanos et al., 2015; Majer et al., 2007; Rothert & Baisch, 2011). This is disagreement with the view that induced seismicity and permeability enhancement coincide. We compute the volume of the region of permeability enhancement, for example, where permeability increased by more than 1% from its initial value, _V𝜅_ , and the seismically active volume, _Vs_ , for our posterior distributions (Figure 10), assuming a radial symmetry. For our best-fit scenario, our estimated stimulated reservoir represents only 0.4% of the seismically active volume. 

Magnitude of permeability enhancement, _d𝜅_ : For the best-fit scenario, the initial permeability is multiplied by a factor 30 at the wellbore and less further away. This value seems reasonable in comparison to other computed values computed for other EGS projects, such as a factor 50 obtained at Desert Peak (Dempsey et al., 2015) and a factor 400 obtained at Basel (Häring et al., 2008). 

Proportionality factor between pressure increase and MEQ triggering, _k_ : Our inversion of the hypocenter density data returns a best-fit value of _kMc_ =0 _._ 1 = 1 _._ 18 10<sup>3</sup> MEQs⋅km<sup>−2</sup> ⋅MPa<sup>−1</sup> . However, this value for _k_ is not 

RIFFAULT ET AL. 

15 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2017JB015299 

**Figure 10.** Posterior distribution of the ratio of the volume of the region of permeability enhancement to the seismically active volume, _V𝜅_ ∕ _Vs_ . The value for the best fit scenario, _V𝜅_ ∕ _Vs_<sup>∗, is given.</sup> 

directly comparable to that inferred for Habanero (Figure 4b) because the catalogs associated with each stimulation have different magnitudes of completeness. An approximate comparison can nevertheless be made, but first a conversion factor must be applied to _kMc_ =0 _._ 1 (see Appendix E for details of this calculation). The transformed value is _kMc_ =−0 _._ 8 = 27 _._ 0 10<sup>3</sup> MEQs⋅km<sup>−2</sup> ⋅MPa<sup>−1</sup> , which is about 2 orders of magnitude larger than at Habanero. This may be a manifestation of the differences in geological setting between the two sites. WeknowthatmostoftheseismicityinHabanerooccurredonasinglefault, while a fracture network structure is deemed to be more likely in Paralana. 

Critical pressure, Δ _P_ crit: With values close to 0, the crust appear to be in critically stressed in Paralana, meaning that small changes in stress or pore pressure can trigger shear failure of existing fractures (Townend & Zoback, 2000). This is consistent with the occurrence of MEQs far from the wellbore recorded at early time during the stimulation, attributed to the propaga- 

tion of small poroelastic stress changes. In contrast, for the Habanero stimulation, we found Δ _P_ crit = 4 _._ 6 MPa. In Habanero, small and distant events at early time were not recorded, even though the magnitude of completeness _Mc_ is lower than for the Paralana catalog. 

#### **4.2. Physical Mechanisms of Stimulation** 

The different mechanisms explored in this section are illustrated in Figure 11. 

Hydroshearing: When a fracture fails in shear, misalignment of asperities can result in a permanently increased aperture (Lee & Cho, 2002) and therefore enhanced permeability. Our findings suggest that such permeability gains cannot have been substantial for the Paralana stimulation; otherwise, there should have been greater agreement between the stimulated and seismically active volumes (Figure 9). During the 2001 stimulation of Habanero, although a substantial number of MEQs were located across a large area, injectivity did not increase over the course of injection. Thus, it is not clear that hydroshearing was successful in this case either. Successful hydroshearing has been reported in other settings, such as Soult-sous-Forêts (Evans et al., 2005). Thus, its efficiency probably depends on in situ parameters, such as the orientation of the faults, or the stress regime, as suggested by McClure and Horne (2014). 

Poroelasticity and aftershocks: Poroelastic changes in solid stress caused by matrix pressure and/or temperature variations can trigger shear failure in fractures not necessarily connected to the perturbed reservoir (Segall, 1989). Changes in solid stress caused by past earthquakes can have the same effects, creating aftershocks in a cascading process (Toda et al., 1998). Those two explanations for permeability enhancement are based on the same mechanism as hydroshearing—shear failure at distance from the wellbore—and are estimated to be responsible for much less shear failures (Langenbruch et al., 2011; Segall & Lu, 2015). Thus, they are at least as unlikely as hydroshearing to be responsible for significant reservoir development. 

**Figure 11.** Physical mechanisms illustration possibly occurring during the Paralana stimulation. 

RIFFAULT ET AL. 

16 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2017JB015299 

Leak-off: Fluid penetrates matrix (secondary) permeability more slowly than the main fracture zone, eventually increasing pore pressure in, and potentially failure of, disconnected fractures (Bunger et al., 2005). Permeability enhancement is possible if splay fractures develop and connect the sheared fracture to the pressurized fracture network. In future investigations, leak-off could be represented in a reservoir model as a one-dimensional diffusion process (e.g., Carter’s law; Adachi et al., 2007) that depends on time. This could account for permeability enhancement near to the wellbore but at late time in the stimulation. 

Hydraulic fracturing: When pore pressure is higher than the minimum principal stress, a tensile fracture can be created and propagated. The occurrence of a hydraulic fracture is uncertain for the two stimulations studied in this paper. In our model of the Paralana stimulation, the volume in which permeability increases the most coincides with high fluid pressures where the minimum principal stress was possibly exceeded (Figure 9). 

Acidization: When acid is injected it can dissolve minerals within fractures, thereby widening apertures in the near-wellbore region. Acidization has previously been successful in an EGS context (Portier et al., 2009) and is a strong candidate here to account for the permeability enhancement at Paralana. During the 2001 Habanero stimulation, which did not involve acid injection, injectivity gains were not observed. 

Thermal effect: Injecting cold water can cause the rock matrix to contract, thereby increasing fracture aperture or potentially inducing shear failure (by reducing normal stresses). This effect is thought to be significant for some stimulations (Dempsey et al., 2015; Rinaldi et al., 2015). Because of the geometry of fracture networks, cold fluid can sometimes propagate along way from the injection point while the thermal front in the matrix may remain close to the well (matrix heat conduction is much slower than fluid advection Elsworth, 1989). In our model, in the worst case scenario where there is no heat transfer between the injected fluid and the matrix, the cold fluid still did not propagate further than 60 m away from the wellbore. Thus, the extent of the thermal perturbation is similar in magnitude to the inferred permeability enhancement and is perhaps a good candidate for the causative mechanism. 

### **5. Conclusion** 

Assessing the stimulation mechanism and the extent of the stimulated reservoir are critical for an EGS project. The type of information provided by well testing is limited to the near wellbore region. However, earthquakes, which can be observed at great distance from the well, carry additional information about fluid pressure changes in the fracture network. In this paper, we use an MEQ catalog to augment observations at the wellhead to better understand stimulation extent and mechanisms at the Paralana EGS well in South Australia. 

WequantifyseismicityfortwoSouthAustraliaEGSstimulations(ParalanaandHabanero)usingthehypocenter density, defined as the number of hypocenters per unit of area of injection layer. At Habanero, we interpret constant hypocenter density within 300 m of the wellbore as a zone of high permeability and deduce a linear relationship between the hypocenter density and downhole fluid overpressure. 

We then use profiles of hypocenter density to infer reservoir pressure changes and constrain the possible permeability enhancement that occurred during stimulation of the Paralana well. To obtain these, a radial Darcy flow simulation is conducted alongside a kinematic permeability inversion. Calibration of the model by MCMC allows us to recover the range of permeability enhancement parameters that adequately reproduce both wellhead injectivity changes and pressure profiles inferred from the induced seismicity. Injectivity changes alone are not sufficient to constraint the permeability changes, as multiple enhancement regimes with quite different behavior can lead to linearly increasing injectivity. 

Our findings show that the bulk of the permeability enhancement at Paralana was limited to within 60 m of the wellbore. This is significant because the volume of stimulated reservoir is only 0.4% that of the seismically active region. As it is not uncommon to measure reservoir creation in an EGS by the extent of the induced seismicity cloud, our results undermine a common metric of stimulation success. Relying solely on induced seismicity can be misleading. 

The lack of correspondence between seismicity and permeability enhancement at Paralana implies that hydroshearing, or self-propping, was not the primary mechanism causing injectivity increase. Similarly, at Habanero, a large catalog of induced MEQs did not coincide with significant permeability improvement: Injectivity was almost constant throughout the stimulation. Hydroshearing, as an EGS stimulation mechanism, may not be effective in all situations. 

RIFFAULT ET AL. 

17 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2017JB015299 

The injectivity increase observed at Paralana more likely a consequence of one or several mechanisms: hydraulic fracturing, thermal effects, or acidization. It may be important to consider these effects when developing deterministic, physics-based models of EGS stimulation. This could include accounting for the effects of temperature and pore pressure on permeability in a fracture network at a macroscale. This result fits in the overall objective to better our knowledge of the processes that intimately link hydrological behaviors and earthquakes. These findings also shed a brighter light on the coupled hydrological and seismological processes operating in other geoscience phenomena, such as triggered earthquakes in volcanic and natural hydrothermal settings and in fluid-driven aftershock sequences. 

### **Appendix A: Hypocenter Density Calculation and Associated Uncertainty** 

#### **A1. Location Uncertainty** 

Each event in a catalog has a position, [ _ri, zi_ ] where _ri_ is the distance from the wellbore when the event is projected normally onto the injection plane and _zi_ is the distance between the event and the plane. The associated uncertainties are respectively _𝜎𝜌i_ and _𝜎zi_ . We consider each event as a normal multivariate 3-D distribution centered on its given coordinates, with an axis normal to the injection plane. The horizontal uncertainty, _𝜎𝜌i_ , gives the standard deviation for the two axes within the plane, while the vertical uncertainty, _𝜎zi_ , gives the standard deviation normal to the plane. We recognize that it is an approximation to equate horizontal uncertainty with the plane of injection, as the plane is slightly subhorizontal. A more accurate calculation would need to consider the resulting uncertainties projected on the injection plane, with a correlation component when vertical and horizontal uncertainties differ. However, given that the plane is only slightly subhorizontal (dip of 13<sup>∘</sup> maximum for Paralana), we do not expect this simplification to skew significantly our results. 

For a given event, _i_ , we integrate its normal multivariate distribution within the annulus volume of a shell, _s_ , defined by its internal and external radii, _R_ 1 and _R_ 2, respectively, and its upper and lower boundaries in the direction normal to the injection plane, _Z_ 1 and _Z_ 2, respectively. We obtain the probability, _psi_ ∈[0 ∶ 1], that an event, _i_ , occurred within a shell, _s_ . To calculate the integral of a multivariate normal distribution within an annulus, we take advantage of the symmetries resulting from the previous assumption and calculate separately _pzi_ ( _Z_ 1 _, Z_ 2) ∈[0 ∶ 1], the probability of the event to have occurred within an infinite layer encompassing the space between _Z_ 1 and _Z_ 2 and _pri_ ( _R_ 1) _, pri_ ( _R_ 2) ∈[0 ∶ 1], the probabilities of having event occurring within an infinite cylinder of radius _R_ 1 and _R_ 2, respectively, with _psi_ = _pzi_ ( _Z_ 1 _, Z_ 2)×( _pri_ ( _R_ 2)− _pri_ ( _R_ 1)). The probability of the event to be within an annulus is calculated as the difference of the probabilities of the event to be in the cylinder defined by the internal face of the annulus to the probability of the event to be within the cylinder defined by the external face of the annulus. 

with _S_ the projected surface of a cylinder of radius _R_ and _𝜌_ is the horizontal distance from the event location, used as the integration variable. If _ri < R_ , the integrated surface can be divided as a disk and a set of partial annuli (Figure A1a). While the integral can be calculated for the disk, the area covered by the annuli is approximated by a Riemann sum over _N𝜌_ subintervals. 

RIFFAULT ET AL. 

18 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2017JB015299 

**Figure A1.** Schematic of the integration calculation method for two examples. Integration is done over a cylinder, the probability of the event to be within the annulus is obtained from the difference of two cylinder integrations with different radii. (a) An MEQ occurring within an infinite cylinder of radius _R_ . (b) An MEQ occurring outside of the same cylinder. _d𝜌_ is larger than the value used for illustration purposes. MEQ = microearthquake. 

where _𝜌_ 1 = | _R_ − _ri_ |, _𝜌_ 2 = _R_ + _ri_ and _d𝜌_ = _<u>𝜌</u>_ <u>2</u> _N_ − _𝜌𝜌_ <u>1</u><sup>. If</sup><sup>_ri > R_, we only have the second part of the integral in</sup> equation (A3) (Figure A1b) 

At a specific time, _t_ , when _ne_ events above the magnitude of completeness, _Mc_ , occurred in total, in a specific shell, _s_ , we thus have a Poisson binomial distribution, where each event, _i_ , has a probability, _psi_ , of occurring in this shell. The probability of _j_ = 0 _,_ … _, ne_ events to have occurred in the shell, _s_ , at the time, _t_ , is _Plocs_ ( _K_ = _j_ ). The mean of this distribution is _𝜇locs_ =<sup>∑</sup> _i_<sup>_n_</sup> =<sup>_e_</sup> 1<sup>_ps_</sup> _i_<sup>and its variance is</sup><sup>_𝜎_</sup> _loc_<sup>2</sup> _s_<sup>=∑</sup> _i_<sup>_n_</sup> =<sup>_e_</sup> 1<sup>(1−</sup><sup>_ps_</sup> _i_<sup>)</sup><sup>_ps_</sup> _i_<sup>. Because it is</sup> computationally intensive to calculate a binomial distribution for large _n_ (we have 10,446 recorded events above the magnitude of completeness during the Habanero stimulation), we approximate it to a discretized normal distribution of mean _𝜇locs_ and variance _𝜎loc_<sup>2</sup> _s_<sup>. The dependence of the distribution on</sup><sup>_𝜎𝜌_</sup> _i_<sup>is illustrated in</sup> Figure A2. 

#### **A2. Poisson Uncertainty** 

For each _j_ = 0 _,_ … _, ne_ , we consider a Poisson distribution of parameter _𝜆_ = _j_ . The final probability distribution, _Pfs_ , is 

RIFFAULT ET AL. 

19 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2017JB015299 

**Figure A2.** Distribution of _Plocs_ , the probability of _j_ = 0 _,_ 1 _,_ 2 MEQs to have occurred within a shell, _s_ , in this example a disk of radius, _R_ , considering an example including only two MEQs of same location error. Each MEQ has a probability _pri_ ( _R_ ) to be within the disk. With the same location of the MEQs but with different location errors, _𝜎𝜌_ , for the scenarios (a) and (b), the effect on _Ploc_ is illustrated. MEQ = microearthquake. 

with _k_ = 0 _,_ … _,_ ∞. _Pfs_ ( _K_ = _k_ ) is the probability that the number of MEQs most representative of the physical changes that have occurred in shell, _s_ , at time, _t_ , is _k_ . The resulting hypocenter density _ns_ ( _t_ ) is 

_ne_ ⌉ We approximate<sup>∑∞</sup> _k_ =0<sup>to ∑</sup><sup>_n_</sup> _k_ =<sup>_e_+</sup> 0<sup>2⌈</sup><sup>~~√~~</sup> or two standard deviation of the Poisson distribution centered on _j_ = _ne_ plus _ne_ . Similarly, the standard deviation is 

**Figure A3.** Impact of the inclusion of the aleatoric component on the distribution of _Plocs_ , the probability of _j_ = 0 _,_ … _,_ 50 MEQs to have occurred within a shell, _s_ , illustrated for an arbitrary set of parameters. 

where for computational reasons we calculate the sum only up to _ne_ + 2⌈<sup>~~√~~</sup> _ne_ ⌉. The inclusion of the Poisson uncertainty has the effect of widening the probability distribution (Figure A3). We obtain the hypocenter density profiles and associated uncertainties (2 _𝜎n_ above and below _ne_ ) shown on Figure 4 for the Paralana and Habanero stimulations. 

### **Appendix B: Paralana Wellbore Position** 

At Paralana, for operational reasons, the well was logged only to 3,683 m, which is about 200 m above the injection plane. Thus, the well position at its intersection with the planar seismicity cloud can only be extrapolated from its deepest known orientation. This reveals a discrepancy with the position of the seismicity cloud and the intersection with the well track, 

RIFFAULT ET AL. 

20 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2017JB015299 

**Figure B1.** Extrapolated position of the well Paralana 2 compared to the position of the centroid of the events recorded within 5 hr of the start of the injection. MEQ = microearthquake. 

which is about 50 m away from the first set of seismic events (Figure B1). When computing radial profiles of hypocenter density, we prefer to use the centroid of all events recorded within 5 hr of the start of the injection as the position of the well. Although the results are slightly different when a straight projection of the well track is instead used, the main conclusions of the study are not changed. 

### **Appendix C: Radial Symmetry Assumption** 

As discussed in section 2.3, our kinematic permeability inversion method is designed to obtain radially averaged values. However, the shape of the event clouds departs from radial symmetry, which could be accounted for by anisotropy in the background or enhanced permeability distributions. If our inversion is operating appropriately, the averaging of permeability should still allow us to recover the maximum extent of permeability enhancement, parameterized by _r_ max. To explore its robustness, we tested two synthetic models of anisotropic permeability and applied our inversion method in an attempt to recover the known value of _r_ max. While both scenarios featured anisotropic characteristics, flow diffusion remained dominantly radial. The permeability enhancement model has same characteristics as those presented in section 3.3, except that now a two-dimensional orthogonal grid is used to model nonradial flow. The pressure distribution obtained from simulations allows us to generate synthetic catalogs of MEQs using equation (6) coupled with Poissonian sampling. Parameter _k_ , the proportionality factor between pressure increase and MEQ triggering, is selected in order to obtain a catalog of a similar size to the one observed in Paralana. Hypocenter density is calculated in the same manner as for the Paralana and Habanero catalogs, using the radially symmetric shells. The inversion is performed using radially symmetric simulations, even though the underlying model is asymmetric and uses the synthetic injection rate and seismicity distribution. 

The first regime, (a), is characterized by an elliptical (isotropic) permeability enhancement field (Figure C1a). The first expression in equation (10) becomes 

RIFFAULT ET AL. 

21 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2017JB015299 

**Figure C1.** Synthetic asymmetric permeability distributions represented at _t_ = _t_ max with accompanying synthetic seismicity catalog. The median value and the 16% and 84% quantiles of the inverted maximum permeability enhancement extent, _r_ max, are given by the gray-shade region (indistinguishable in [b] from the median). The two regimes studied are (a) constant initial permeability and asymmetric permeability development, following an ellipsoid geometry instead of a circle; (b) heterogeneous initial permeability following a bivariate normal distribution but circular permeability development. MEQ = microearthquake. 

where _𝜃_ is the angle in the polar coordinate system centered on the well, + _x_ is the reference direction, and _e_ is the ellipse eccentricity. Parameter values used are listed in Table C1. Even though the synthetic seismicity cloud was highly anisotropic, the inversion nevertheless captured the maximum extent of permeability enhancement (Figure C1a). This suggests that if the asymmetric shape of the seismicity cloud at Paralana was due to an asymmetric permeability development, our inversion procedure would have been able to capture this. 

The second regime, (b), sees a radial permeability enhancement field described by equation (10) but superposed over a heterogeneous background permeability field. Initial permeability follows a bivariate distribution with no correlation between _x_ and _y_ components in a Cartesian coordinate system defined 

where _𝜇𝜅x_ and _𝜇𝜅y_ are the coordinates of the center of the distribution; _𝜎𝜅x_ and _𝜎𝜅y_ , the standard deviations in the _x_ and _y_ directions, respectively; and _d𝜅_ 0 _,xy_ , the scale of permeability change at the center of the distribution, with _𝜅_ 0 _,xy_ ( _𝜇𝜅x , 𝜇𝜅y_ ) = _d𝜅_ 0 _,xy_ × _𝜅_ 0. The parameters we have used to generate the synthetic model are summarized in Table C1. The synthetic catalog has a similar shape to the one generated with regime (a), even though it derives from a different permeability field. For this regime as well, our inversion was able to accurately capture the extent of permeability enhancement, _r_ max (Figure C1a). This suggests that if the asymmetric shape of the seismicity cloud in Paralana was due to an asymmetric background permeability field, the inversion would not be fooled and should yield a reasonable estimate of radially averaged permeability enhancement. 

These tests suggest that our inversion process is sufficiently robust to reflect the average characteristics of permeability enhancement at Paralana. Conclusions derived from the inversions are expected to be robust. Inversion of the Paralana data indicated that the stimulated volume is much smaller than the seismically active volume(section4.1).Therefore,regime(b)wouldappeartobethebetterrepresentationofthecombinationof physical processes producing an asymmetric MEQs distribution. In our view, heterogeneous background permeability is a more credible reason for the observed earthquake distribution than asymmetric permeability enhancement. 

RIFFAULT ET AL. 

22 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2017JB015299 

**Table C1** _Synthetic Asymmetric Regime Parameters_ 

|**𝛀**parameters|Regime (a)|Regime (b)|
|---|---|---|
|_𝛼_|1.00|1.00|
|_𝛽_|1.00|1.00|
|_𝛾_|1.00|1.00|
|_r_max(m)|200|200|
|_𝜅_0(m<sup>2</sup>)|3.16 10<sup>−16</sup>|6.31 10<sup>−17</sup>|
|_d𝜅_|999.0|9.0|
|_𝜙_~~0~~|4.67%|4.67%|
|_k_(MEQs⋅km<sup>−2</sup>⋅MPa<sup>−1</sup>)|150.0|200.0|
|Δ_P_crit(MPa)|0.1|0.1|
|Asymmetry parameters|Regime (a)|Regime (b)|
|_e_|0.8|—|
|_d𝜅_0_,xy_|—|1,000|
|_𝜇𝜅x_|—|350 m|
|_𝜇𝜅y_|—|0 m|
|_𝜎𝜅x_|—|350 m|
|_𝜎𝜅y_|—|250 m|

### **Appendix D: FEHM Wellbore Simulator** 

We construct a radial FEHM simulation with blocks representing the wellbore, the well, the pipe, the casing, and the surrounding formations (approximated to a formation with homogeneous properties) with representative values of density, specific heat, and thermal conductivity. Well blocks are assigned a 99% porosity and high permeability, while pipe and casing are impermeable and have zero porosity. The 4-km depth of the well are simulated; WHP, injection rate, and temperature are prescribed, while the same flow rate is extracted at the bottom of the well. Thus, we model the replacement of an initially warm column of water with cold injected water, heat radiating from rock into the well, and thus slow cooling of the formation. The model shows that, over time, downhole temperature decreases as formation heating becomes less efficient. An additional overpressure is also obtained, due to density changes in the water column. The resulting time series for temperature and pressure are used in the main simulation. 

### **Appendix E: Coefficient** **_k_ Equivalency** 

##### **Acknowledgments** 

This work was funded by the Center for Space and Earth Sciences at Los Alamos National Laboratory. The seismicity catalogs for the Paralana and Habanero stimulations were provided by Julie Albaric of the Université de Franche-Comté, France, and Colleen Barton from GeoMechanics International, Baker Hughes, respectively, and are available as supporting information. FEHM is available at https://fehm.lanl.gov/. The authors wish to thank Betina Bendall from the Department of State Development of South Australia and Julie Albaric for their insight on the Paralana stimulation. 

Coefficients _k_ determined for the Habanero and Paralana stimulations are not directly comparable, as MEQ events for different magnitudes of completeness are used: _Mc_ = −0.8 for Habanaro and 0.1 for Paralana. We apply a Gutenberg-Richter law (Gutenberg & Richter, 1944), with a calculated _b_ value of 1 _._ 51 ± 0 _._ 03, using the maximum likelihood method developed by Aki (1965) and the uncertainty estimation developed by Shi and Bolt (1982) to extrapolate _kMc_ =0 _._ 1 in Paralana to its theoretical value for _Mc_ = 0 _._ 8: 

### **References** 

Adachi, J., Siebrits, E., Peirce, A., & Desroches, J. (2007). Computer simulation of hydraulic fractures. _International Journal of Rock Mechanics and Mining Sciences_ , _44_ , 739–757. https://doi.org/10.1016/j.ijrmms.2006.11.006 

Aki, K. (1965). Maximum likelihood estimate of b in the formula logN = a-bM and its confidence limits. _Bulletin of the Seismological Society of America_ , _43_ , 237–239. 

RIFFAULT ET AL. 

23 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2017JB015299 

Albaric, J., Oye, V., Langet, N., Hasting, M., Lecomte, I., Iranpour, K., et al. (2014). Monitoring of induced seismicity during the first geothermal reservoir stimulation at Paralana, Australia. _Geothermics_ , _52_ , 120–131. https://doi.org/10.1016/j.geothermics.2013.10.013 Auradou, H., Drazer, G., Boschan, A., Hulin, J. P., & Koplik, J. (2006). Flow channeling in a single fracture induced by shear displacement. _Geothermics_ , _35_ , 5–6. https://doi.org/10.1016/j.geothermics.2006.11.004 Baisch, S., & Harjes, H. P. (2003). A model for fluid-injection-induced seismicity at the KTB, Germany. _Geophysical Journal International_ , _152_ (1), 160–170. https://doi.org/10.1046/j.1365-246X.2003.01837.x 

Baisch, S., Vörös, R., Rothert, E., Stang, H., Jung, R., & Schellschmidt, R. (2010). A numerical model for fluid injection induced seismicity at Soultz-sous-Forêts. _International Journal of Rock Mechanics and Mining Sciences_ , _47_ , 405–413. https://doi.org/10.1016/j.ijrmms.2009.10.001 Baisch, S., Vörös, R., Weidler, R., & Wyborn, D. (2009). Investigation of fault mechanisms during geothermal reservoir stimulation experiments in the Cooper Basin, Australia. _Bulletin of the Seismological Society of America_ , _99_ (1), 148–158. https://doi.org/10.1785/0120080055 Baisch, S., Weidler, R., Vörös, R., Tenzer, R., & Teza, D. (2004). _Improving hydraulic stimulation efficiency by means of real-time monitoring_ . Paper presented at 29th Workshop on Geothermal Reservoir Engineering, Stanford University, Stanford, CA. Baisch, S., Weidler, R., Vörös, R., Wyborn, D., & de Graaf, L. (2006). Induced seismicity during the stimulation of a geothermal HFR reservoir in the Cooper Basin, Australia. _Bulletin of the Seismological Society of America_ , _96_ (6), 2242–2256. https://doi.org/10.1785/0120050255 Ben-Zion, Y., & Rice, J. R. (1995). Slip patterns and earthquake populations along different classes of faults in elastic solids. _Journal of Geophysical Research_ , _100_ (B7), 12,959–12,983. https://doi.org/10.1029/94JB03037 Bendall, B., Hogarth, R., Holl, H., McMahon, A., Larking, A., & Reid, P. (2014). _Australian experiences in EGS permeability enhancement—A review of 3 case studies_ . Paper presented at 39th Workshop on Geothermal Reservoir Engineering, Stanford University, Stanford, CA. Boiron, M. C., Cathelineau, M., & Richard, A. (2010). Fluid flows and metal deposition near basement/cover unconformity: Lessons and analogies from Pb UZn<sup>˝</sup> UF<sup>˝</sup> UBa systems for the understanding of Proterozoic U deposits.<sup>˝</sup> _Geofluids_ , _10_ (1–2), 270–292. https://doi.org/10.1111/j.1468-8123.2010.00289.x Bourouis, S., & Bernard, P. (2007). Evidence for coupled seismic and aseismic fault slip during water injection in the geothermal site of Soultz (France), and implications for seismogenic transients. _Geophysical Journal International_ , _169_ (2), 723–732. https://doi.org/10.1111/j.1365-246X.2006.03325.x Bunger, A. P., Detournay, E., & Garagash, D. I. (2005). Toughness-dominated hydraulic fracture with leak-off. _International Journal of Fracture_ , _134_ (2), 175–190. https://doi.org/10.1007/s10704-005-0154-0 Cappa, F., & Rutqvist, J. (2011). Modeling of coupled deformation and permeability evolution during fault reactivation induced by deep underground injection of CO2. _International Journal of Greenhouse Gas Control_ , _5_ (2), 336–346. https://doi.org/10.1016/j.ijggc.2010.08.005 Carslaw, H. S., & Jaeger, J. C. (1959). _Conduction of heat in solids_ . Oxford: Oxford Clarendon Press. Chabora, E., Zemach, E., Spielman, P., Drakos, P., Hickman, S., Lutz, S., & Rose, P. (2012). _Hydraulic stimulation of well 27–15, Desert Peak geothermal field, Nevada, USA_ . Paper presented at 37th Workshop on Geothermal Reservoir Engineering, Stanford University, Stanford, CA. https://doi.org/10.1190/1.3513264 Chen, Z., Narayan, S. P., Yang, Z., & Rahman, S. S. (2000). An experimental investigation of hydraulic behavior of fractures and joints in granitic rock, Nevada, USA. _International Journal of Rock Mechanics and Mining Sciences_ , _37_ (7), 1061–1071. https://doi.org/10.1016/S1365-1609(00)00039-3 Dempsey, D., Barton, C., & Catalinac, A. (2016). _Density of induced earthquake hypocentres as a proxy for pore pressure increase during well stimulation_ . Paper presented at 50th US Rock Mechanics/Geomechanics Symposium, American Rock Mechanics Association, Houston, TX. Dempsey, D., Kelkar, S., Davatzes, N., Hickman, S., & Moos, D. (2015). Numerical modeling of injection, stress and permeability enhancement during shear stimulation at the Desert Peak Enhanced Geothermal System. _International Journal of Rock Mechanics and Mining Sciences_ , _78_ , 190–206. https://doi.org/10.1016/j.ijrmms.2015.06.003 Dempsey, D., & Suckale, J. (2017). Physics-based forecasting of induced seismicity at Groningen gas field, the Netherlands. _Geophysical Research Letters_ , _44_ , 7773–7782. https://doi.org/10.1002/2017GL073878 Dempsey, D., Suckale, J., & Huang, Y. (2016). Collective properties of injection-induced earthquake sequences: 2. Spatiotemporal evolution and magnitude frequency distributions. _Journal of Geophysical Research: Solid Earth_ , _121_ , 3638–3665. https://doi.org/10.1002/2015JB012551 Dinske, C., Shapiro, S., & Häring, M. (2010). _Interpretation of microseismicity induced by time-dependent injection pressure_ . Extended abstract presented at SEG annual meeting, Denver, CO. https://doi.org/10.1190/1.3513264 Elsworth, D. (1989). Thermal permeability enhancement of blocky rocks: One-dimensional flows. _International Journal of Rock Mechanics and Mining Sciences and Geomechanics Abstract_ , _26_ (3), 329–339. Evans, K. F., Moriya, H., Niitsuma, H., Jones, R. H., Phillips, W. S., Genter, A., et al. (2005). Microseismicity and permeability enhancement of hydrogeologic structures during massive fluid injections into granite at 3 km depth at the Soultz HDR site. _Geophysical Journal International_ , _160_ , 388–412. https://doi.org/10.1111/j.1365-246X.2004.02474.x Foreman-Mackey, D., Hogg, D. W., Lang, D., & Goodman, J. (2013). EMCEE: The MCMC hammer. _Publications of the Astronomical Society of the Pacific_ , _125_ (925), 306–312. https://doi.org/10.1086/670067 Foreman-Mackey, D. (2014). Corner.py: Scatterplot matrices in Python. _The Journal of Open Source Software_ , _24_ . https://10.21105/joss.00024 Galis, M., Ampuero, J. P., Mai, P. M., & Cappa, F. (2017). Induced seismicity provides insight into why earthquake ruptures stop. _Science Advances_ , _12_ (3), eaap7528. https://doi.org/10.1126/sciadv.aap7528 Gischig, V. S., & Wiemer, S. (2013). A stochastic model for induced seismicity based on non-linear pressure diffusion and irreversible permeability enhancement. _Geophysical Journal International_ , _194_ , 1229–1249. https://doi.org/10.1093/gji/ggt164 Goertz-Allmann, B. P., & Wiemer, S. (2013). Geomechanical modeling of induced seismicity source parameters and implications for seismic hazard assessment. _Geophysics_ , _78_ (1), KS25–KS39. https://doi.org/10.1190/geo2012-0102.1 Grant, M. A. (1982). _Geothermal reservoir engineering_ . New York: John Wiley. Guglielmi, Y., Cappa, F., Avouac, J. P., Henry, P., & Elsworth, D. (2015). Seismicity triggered by fluid injection-induced aseismic slip. _Science_ , _348_ (6240), 1224–1226. https://doi.org/10.1126/science.aab0476 Gutenberg, B., & Richter, C. F. (1944). Frequency of earthquakes in California. _Bulletin of the Seismological Society of America_ , _34_ (4), 185–188. Häring, M. O., Schanz, U., Ladner, F., & Dyer, B. C. (2008). Characterisation of the Basel 1 enhanced geothermal system. _Geothermics_ , _37_ (5), 469–495. https://doi.org/10.1016/j.geothermics.2008.06.002 Hubbert, M. K., & Rubey, W. W. (1959). Role of fluid pressure in mechanics of overthrust faulting I. Mechanics of fluid-filled porous solids and its application to overthrust faulting. _Bulletin of the Seismological Society of America_ , _70_ (2), 115–166. https://doi.org/10.1130/0016-7606(1959)70[115:ROFPIM]2.0.CO;2 

RIFFAULT ET AL. 

24 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2017JB015299 

Jeanloz, R., & Stone, H. (2013). _Enhanced geothermal systems_ . Washington, DC: EERE Publication and Product Library. https://doi.org/10.2172/1220828 Kohl, T., & Mégel, T. (2007). Predictive modeling of reservoir response to hydraulic stimulations at the European EGS site Soultz-sous-Forêts. _International Journal of Rock Mechanics and Mining Sciences_ , _44_ (8), 1118–1131. https://doi.org/10.1016/j.ijrmms.2007.07.022 Landau, L. D., & Lifshitz, E. M. (1959). _Fluid mechanics_ . Oxford: Oxford Clarendon Press. Langenbruch, C., Dinske, C., & Shapiro, S. A. (2011). Inter event times of fluid induced earthquakes suggest their Poisson nature. _Geophysical Research Letters_ , _38_ , L21302. https://doi.org/10.1029/2011GL049474 Lee, H. S., & Cho, T. F. (2002). Hydraulic characteristics of rough fractures in linear flow under normal and shear load. _Rock Mechanics and Rock Engineering_ , _35_ (4), 299–318. https://doi.org/10.1007/s00603-002-0028-y Llanos, E. M., Zarrouk, S. J., & Hogarth, R. A. (2015). Numerical model of the Habanero geothermal reservoir, Australia. _Geothermics_ , _53_ , 308–319. https://doi.org/10.1016/j.geothermics.2014.07.008 Majer, E. L., Baria, R., Stark, M., Oates, S., Bommer, J., Smith, B., & Asanuma, H. (2007). Induced seismicity associated with enhanced geothermal systems. _Geothermics_ , _36_ (3), 185–222. https://doi.org/10.1016/j.geothermics.2007.03.003 McClure, M. W., & Horne, R. N. (2011). Investigation of injection-induced seismicity using a coupled fluid flow and rate/state friction model. _Geophysics_ , _76_ (6), WC181–WC198. https://doi.org/10.1190/geo2011-0064.1 McClure, M. W., & Horne, R. N. (2012). _Opening mode stimulation or shear stimulation_ . Paper presented at Geothermal Resources Council Annual Meeting, Reno, NV. McClure, M. W., & Horne, R. N. (2014). An investigation of stimulation mechanisms in Enhanced Geothermal Systems. _International Journal of Rock Mechanics and Mining Sciences_ , _72_ , 242–260. https://doi.org/10.1016/j.ijrmms.2014.07.011 McLean, K., & Zarrouk, S. (2015). _Impact of cold water injection on geothermal pressure transient analysis: A reservoir modelling assessment_ . Paper presented at 37th New Zealand Geothermal Workshop, Auckland, NZ. Miller, S. A., Collettini, C., Chiaraluce, L., Cocco, M., Barchi, M., & Kaus, B. J. (2004). Aftershocks driven by a high-pressure CO2 source at depth. _Nature_ , _427_ (6976), 724–727. https://doi.org/10.1038/nature02251 Muir-Wood, R., & King, G. C. (1993). Hydrological signatures of earthquake strain. _Journal of Geophysical Research_ , _98_ (B12), 22,035–22,068. https://doi.org/10.1029/93JB02219 Pearson, C. (1981). The relationship between microseismicity and high pore pressures during hydraulic stimulation experiments in low permeability granitic rocks. _Journal of Geophysical Research_ , _86_ (B9), 7855–7864. https://doi.org/10.1029/JB086iB09p07855 Portier, S., Vuataz, F. D., Nami, P., Sanjuan, B., & Gérard, A. (2009). Chemical stimulation techniques for geothermal wells: Experiments on the three-well EGS system at Soultz-sous-Forêts, France. _Geothermics_ , _38_ (4), 349–359. https://doi.org/10.1016/j.geothermics.2009.07.001 Reid, P. W., McAllister, L., & Messeiller, M. (2010). _Status of the Paralana 2 hydraulic stimulation program_ . Paper presented at Australian Geothermal Energy Conference, Adelaide, AU. Rinaldi, A. P., Rutqvist, J., Sonnenthal, E. L., & Cladouhos, T. T. (2015). Coupled THM modeling of hydroshearing stimulation in tight fractured volcanic rock. _Transport in Porous Media_ , _108_ (1), 131–150. https://doi.org/10.1016/j.geothermics.2009.07.001 Rothert, E., & Baisch, S. (2011). _Passive seismic monitoring: Mapping enhanced fracture permeability_ . Paper presented at World Geothermal Congress, Bali, IN. Rothert, E., & Shapiro, S. A. (2007). Statistics of fracture strength and fluid-induced microseismicity. _Journal of Geophysical Research_ , _112_ , B04309. https://doi.org/10.1029/2005JB003959 Rubin, A. M., & Ampuero, J. P. (2005). Earthquake nucleation on (aging) rate and state faults. _Journal of Geophysical Research_ , _110_ , B11312. https://doi.org/10.1029/2005JB003686 Segall, P. (1989). Earthquakes triggered by fluid extraction. _Geology_ , _17_ , 942–946. https://doi.org/10.1130/0091-7613 Segall, P., & Fitzgerald, S. D. (1998). A note on induced stress changes in hydrocarbon and geothermal reservoirs. _Tectonophysics_ , _289_ (1), 117–128. https://doi.org/10.1016/S0040-1951(97)00311-9 Segall, P., Grasso, J. R., & Mossop, A. (1994). Poroelastic stressing and induced seismicity near the Lacq gas field, southwestern France. _Journal of Geophysical Research_ , _99_ (B8), 15,423–15,438. https://doi.org/10.1029/94JB00989 Segall, P., & Lu, S. (2015). Injection-induced seismicity: Poroelastic and earthquake nucleation effects. _Journal of Geophysical Research: Solid Earth_ , _120_ , 5082–5103. https://doi.org/10.1002/2015JB012060 Shaik, A. R., Rahman, S. S., Tran, N. H., & Tran, T. (2011). Numerical simulation of fluid-rock coupling heat transfer in naturally fractured geothermal system. _Applied Thermal Engineering_ , _31_ (10), 1600–1606. https://doi.org/10.1016/j.applthermaleng.2011.01.038 Shapiro, S. A., & Dinske, C. (2009). Scaling of seismicity induced by nonlinear fluid-rock interaction. _Journal of Geophysical Research_ , _114_ , B09307. https://doi.org/10.1029/2008JB006145 Shapiro, S. A., Huenges, E., & Borm, G. (1997). Estimating the crust permeability from fluid-injection-induced seismic emission at the KTB site. _Geophysical Journal International_ , _131_ , F15–F18. https://doi.org/10.1111/j.1365-246X.1997.tb01215.x Shapiro, S. A., Krüger, O. S., Dinske, C., & Langenbruch, C. (2011). Magnitudes of induced earthquakes and geometric scales of fluid-stimulated rock volumes. _Geophysics_ , _76_ (6), WC55–WC63. https://doi.org/10.1190/geo2010-0349.1 Shapiro, S. A., Patzig, R., Rothert, E., & Rindschwentner, J. (2003). Triggering of seismicity by pore-pressure perturbations: Permeability-related signatures of the phenomenon. _Pure and Applied Geophysics_ , _160_ (5–6), 1051–1066. https://doi.org/10.1007/PL00012560 Shapiro, S. A., Rentsch, S., & Rothert, E. (2005). Characterization of hydraulic properties of rocks using probability of fluid-induced microearthquakes. _Geophysics_ , _70_ (2), F27–F33. https://doi.org/10.1190/1.1897030 Shi, Y., & Bolt, B. A. (1982). The standard error of the magnitude-frequency _b_ value. _Bulletin of the Seismological Society of America_ , _72_ (5), 1677–1687. Sturtevant, B., Kanamori, H., & Brodsky, E. E. (1996). Seismic triggering by rectified diffusion in geothermal systems. _Journal of Geophysical Research_ , _101_ (B11), 25,269–25,282. https://doi.org/10.1029/96JB02654 Tester, J. W., Anderson, B. J., Batchelor, A. S., Blackwell, D. D., DiPippo, R., Drake, E. M., et al. (2007). Impact of enhanced geothermal systems on US energy supply in the twenty-first century. _Philosophical Transactions of the Royal Society of London, Series A: Mathematical, Physical and Engineering Sciences_ , _365_ (1853), 1057–1094. Toda, S., Stein, R. S., Reasenberg, P. A., Dieterich, J. H., & Yoshida, A. (1998). Stress transferred by the 1995 _Mw_ = 6 _._ 9 Kobe, Japan, shock: Effect on aftershocks and future earthquake probabilities. _Journal of Geophysical Research_ , _103_ (B10), 24,543–24,565. https://doi.org/10.1029/98JB00765 Townend, J., & Zoback, M. D. (2000). How faulting keeps the crust strong. _Geology_ , _28_ (5), 399–402. https://doi.org/10.1130/0091-7613(2000)28 _<_ 399:HFKTCS _>_ 2.0.CO;2 Valley, B., & Evans, K. F. (2010). _Stress heterogeneity in the granite of the Soultz EGS reservoir inferred from analysis of wellbore failure_ (Vol. 2002). Paper presented at World Geothermal Congress 2010, Bali, IN. 

RIFFAULT ET AL. 

25 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2017JB015299 

Ventura, G., & Vilardo, G. (1999). Seismic-based estimate of hydraulic parameters at Vesuvius Volcano. _Journal of Geophysical Research_ , _26_ (7), 887–890. https://doi.org/10.1029/1999GL900140 

Wassing, B. B. T., Van Wees, J. D., & Fokker, P. A. (2014). Coupled continuum modeling of fracture reactivation and induced seismicity during enhanced geothermal operations. _Geothermics_ , _52_ , 153–164. https://doi.org/10.1016/j.geothermics.2014.05.001 

Weidler, R., Gerard, A., Baria, R., Baumgärtner, J., & Jung, R. (2002). _Hydraulic and micro-seismic results of a massive stimulation test at 5 km depth at the European Hot-Dry-Rock test site, Soultz, France_ . Paper presented at 27th Workshop on Geothermal Reservoir Engineering Stanford University, Stanford, CA. 

Wiemer, S., & Wyss, M. (2002). Mapping spatial variability of the frequency-magnitude distribution of earthquakes. _Advances in Geophysics_ , _45_ , 259–302. https://doi.org/10.1016/S0065-2687(02)80007-3 

- Zang, A., Oye, V., Jousset, P., Deichmann, N., Gritto, R., McGarr, A., et al. (2014). Analysis of induced seismicity in geothermal reservoirs—An overview. _Geothermics_ , _52_ , 6–21. https://doi.org/10.1016/j.geothermics.2014.06.005 

- Zyvoloski, G. (2007). FEHM: A control volume finite element code for simulating subsurface multi-phase multi-fluid heat and mass transfer (Los Alamos Unclassified Rep. LAUR-07-3359). Los Alamos, NM: Los Alamos National Laboratory. 

RIFFAULT ET AL. 

26 

