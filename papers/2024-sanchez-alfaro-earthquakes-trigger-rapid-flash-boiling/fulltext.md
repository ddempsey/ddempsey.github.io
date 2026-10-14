# Earthquakes Trigger Rapid Flash Boiling Front at Optimal Geologic Conditions

**Authors:** P. Sanchez‐Alfaro, I. Wallis, P. Iturrieta, J. Rowland, D. Dempsey, J. O’Sullivan, M. Reich, J. Cembrano  
**Published in:** Geophysical Research Letters (2024)  
**DOI (version of record):** https://doi.org/10.1029/2023gl108109  
**This copy:** Published version. Text extracted from the PDF at https://ddempsey.github.io/papers/2024-sanchez-alfaro-earthquakes-trigger-rapid-flash-boiling/sanchez‐alfaro2024-alfaro-earthquakes-trigger.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** Published version, reproduced under the CC BY-NC-ND 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1029/2023gl108109  
**Licence:** CC BY-NC-ND 4.0 http://creativecommons.org/licenses/by-nc-nd/4.0/  

---


## **RESEARCH LETTER** 10.1029/2023GL108109 

#### **Key Points:** 

- We use numerical simulations to constrain the intensity and temporal scale of co‐seismic flash vapourization or flashing triggered by earthquakes 

- We found an optimal geometry of a dilational jog that maximizes co‐ seismic flashing within the jogs 

- Under optimal conditions, the flashing front propagates up to 1 m away from the dilational jog and persists for almost 3 hr 

#### **Supporting Information:** 

Supporting Information may be found in the online version of this article. 

#### **Correspondence to:** 

P. Sanchez‐Alfaro, pablo.sanchez@uach.cl 

#### **Citation:** 

Sanchez‐Alfaro, P., Wallis, I., Iturrieta, P., Rowland, J., Dempsey, D., O’Sullivan, J., et al. (2024). Earthquakes trigger rapid flash boiling front at optimal geologic conditions. _Geophysical Research Letters_ , _51_ , e2023GL108109. https://doi.org/10. 1029/2023GL108109 

Received 29 DEC 2023 Accepted 6 AUG 2024 

# **Earthquakes Trigger Rapid Flash Boiling Front at Optimal Geologic Conditions** 

**P. Sanchez‐Alfaro**<sup>**1**</sup> **, I. Wallis**<sup>**2**</sup> **, P. Iturrieta**<sup>**3**</sup> **, J. Rowland**<sup>**2**</sup> **, D. Dempsey**<sup>**4**</sup> **, J. O’Sullivan**<sup>**5**</sup> **, M. Reich**<sup>**6**</sup> **, and J. Cembrano**<sup>**7**</sup> 

1Instituto de Ciencias de La Tierra, Universidad Austral de Chile, Valdivia, Chile, 2School of Environment, University of Auckland, Auckland, New Zealand,<sup>3</sup> GFZ German Research Centre for Geosciences, Potsdam, Germany,<sup>4</sup> University of Canterbury, Christchurch, New Zealand,<sup>5</sup> University of Auckland, Auckland, New Zealand,<sup>6</sup> Department of Geology, FCFM, Universidad de Chile, Santiago, Chile,<sup>7</sup> Departamento de Ingeniería Estructural y Geotécnica, Pontificia Universidad Católica de Chile, Santiago, Chile 

**Abstract** The interplay between seismic activity and fluid flow is essential during the evolution of hydrothermal systems. Although earthquakes can trigger transient fluid flow and phase changes in dilational jogs, the temporal scale and the geologic conditions that enhance such process are poorly quantified. Here, we use numerical simulations of deformation and fluid flow to constrain the conditions that maximize adiabatic boiling—referred to as flashing—and estimate the extent and duration of such process. We show that there is an optimal geometry for a dilational jog that maximizes co‐seismic flashing within the jog. Fluid flow simulations indicate that the duration, intensity, and propagation of the flashing front are limited and highly dependent on the magnitude of the co‐seismic slip and the initial pressure‐enthalpy conditions. Our results are valuable to better understand the implications of pressure fluctuations during the seismogenic cycle, as well the mineralization processes in the Earth's crust. 

**Plain Language Summary** Earthquakes can strongly affect circulating fluids within the Earth's crust, mainly where faults bend or split into different fault segments and produce dilatant areas. In these areas, earthquakes play an important role in forming ore deposits, because the co‐seismic volume change can produce a pressure drop that drives boiling with gas exsolution and subsequent mineralization. This process, in which boiling is triggered by a pressure drop rather than a temperature rise, is called flash vapourization or flashing. Here, we used a computer code to unravel scenarios where optimal geometry and pressure‐temperature conditions maximize flash vapourization. Furthermore, we found that the duration and extension of the flashing event are limited and highly dependent on the magnitude of the triggering earthquake and the physico‐chemical conditions of the system. Such results are valuable for assessing the implications of pressure fluctuations during the seismogenic cycle and for better understanding mineralization processes in the Earth's crust. 

## **1. Introduction** 

The interplay between seismic activity, fluid flow, and mineral precipitation plays a critical role in promoting the development of hydrothermal systems and the formation of ore deposits (Ingebritsen & Appold, 2012; Richards, 2013; R. H. Sibson, 1987). External forcing such as earthquakes can have a profound impact on metal solubility of hydrothermal fluids, triggering physical and chemical changes in ore fluids that then accelerate precipitation through fluid phase changes (Cox et al., 2010; Rowland & Simmons, 2012; Sibson et al., 1988). 

> © 2024. The Author(s). This is an open access article under the terms of the Creative Commons Attribution‐NonCommercial‐NoDerivs License, which permits use and distribution in any medium, provided the original work is properly cited, the use is non‐commercial and no modifications or adaptations are made. 

The suction pump mechanism was proposed to explain the effect that seismic activity has on mineral precipitation in the epithermal (<300°C; <1.5 km depth) environment (Rhys et al., 2020; R. H. Sibson, 1987, 2000). This mechanism evokes the heterogeneous nature of fault and fracture networks in extensional bends that create specific geometries such as linkage zones, dilational jogs, and wing cracks likely to dilate during fault slip. The suction pump mechanism was proposed for dilational jogs, which are structures composed of two sub‐parallel faults linked by an oblique fracture (jog) (Figures 1a and 1b). During fault rupture, jog opening rapidly increases pore volume, producing a local and transient pressure drop that converts most of the original liquid into a low‐density vapor phase in a process named flash vapourization or flashing (Brantut, 2020; Moncada et al., 2012; Sanchez‐Alfaro et al., 2016; Weatherley & Henley, 2013). Due to the strong dependence of mineral solubility on phase changes and non‐condensable gasses loss, flash vapourization triggers precipitation of both ore and gangue minerals (Monecke et al., 2023; Sanchez‐Alfaro et al., 2016; Williams, 2019; Zeeck et al., 2021). Disequilibrium 

1 of 10 

SANCHEZ‐ALFARO ET AL. 

**Geophysical Research Letters** 

10.1029/2023GL108109 

**Figure 1.** Geometry of dilational jogs related to suction pump mechanism (a) Simplified dilational jog composed of two sub‐parallel faults linked by an oblique fracture (jog). (b) Schematic representation of co‐seismic slip in the faults that produces dilation, a transient pressure drop and can force mineral precipitation within the jog. Modeling results on co‐seismic slip (c) and opening (d) distribution computed for an earthquake _M_ w 1.0. 

textures in calcite and silica, occurrence of metal nanoparticles, and significant excursions in sulfur isotope data have been interpreted as geological records of such transient mineralization events (Moncada et al., 2012; Peterson & Mavrogenes, 2014). More recently, studies documenting high‐magnification microscopy data have revealed the important role of gold colloids in the formation of epithermal bonanza deposits, relating them to flash vapourization processes and non‐condensable gasses loss (Cano et al., 2023; McLeish et al., 2021; Monecke et al., 2023; Petrella et al., 2022; Tharalson et al., 2019; Zeeck et al., 2021). 

In a first attempt to quantitatively estimate pressure drops driven by an earthquake of a given magnitude, Weatherley and Henley (2013) used a simple thermo‐mechanical piston model of a dilational jog. They showed that extreme reductions in pressure—of more than three orders of magnitude—during isothermal expansion triggered by low‐magnitude earthquakes could cause an almost complete flash vapourization of the fluid within the jog, forcing rapid co‐deposition of silica. Sanchez‐Alfaro et al. (2016) used the same thermo‐mechanical piston model to explore the role of pressure drop in epithermal deposits. They showed there are ideal pressure‐temperature conditions where flashing can trigger precipitation of small amounts of high‐grade gold ore 

2 of 10 

SANCHEZ‐ALFARO ET AL. 

**Geophysical Research Letters** 

10.1029/2023GL108109 

(Sanchez‐Alfaro et al., 2016). Later studies by Williams (2019) and Williams and Fagereng (2022) rule out the role of suction pump on the seismic cycle by showing that such a mechanism cannot produce enough quartz precipitation to heal fractures. However, there is still a lack of knowledge of the spatial and temporal scale of the co‐seismic flashing processes (Sanchez‐Alfaro et al., 2016). Moreover, there is limited understanding on the longevity of low‐pressure regions as well as on the heat and mass transfer processes within fault zones during the post‐seismic period as the system returns to its original conditions (Williams & Fagereng, 2022). Addressing these gaps in knowledge would improve our understanding of how fluid pressure fluctuates during the seismic cycle and how these changes may trigger and/or enhance ore deposition in the shallow crust. 

Here we address this research gap by conceiving and conducting numerical simulations of co‐seismic opening within a dilational jog. The results of these simulations are used as an input for a heat and mass fluid transport model. Our numerical experiments reveal the optimal conditions that maximize opening and pressure drop, and the time scale and magnitude of the suction pump process. 

## **2. Methods** 

### **2.1. Co‐Seismic Slip Model** 

The piston model proposed by Weatherley and Henley (2013) assumes that co‐seismic volume increase at the jog is directly proportional to the average slip displacement of the main faults (Sanchez‐Alfaro et al., 2016; Weatherley & Henley, 2013; Williams, 2019). For jogs that overlap between two fault segments, such a simplification disregards slip gradients on faults overestimating pressure drop. To overcome this problem, we first developed an alternative model to quantify slip and dilation within faults that comprise a dilational jog on a physically feasible spatial and earthquake magnitude scale. We used TriBEM (Aron et al., 2022; Loveless, 2019), a boundary element model (BEM) that solves the elastostatic equations for stress and displacement, to compute slip and dilation within faults in the dilational jog (Figure 1; see also Text S1 in Supporting Information S1). 

### **2.2. Co‐Seismic Pressure Drop Calculations** 

Pressure, temperature, enthalpy, and other thermodynamic parameters for the fluid within the jog just after the co‐ seismic opening were computed by assuming mass and enthalpy (H) conservation during the process. Due to the fast co‐seismic opening occurring at the milliseconds‐to seconds‐scale (Wu & McLaskey, 2019), an isenthalpic process (enthalpy conservation, ∼ adiabatic) is considered as a good representation of the thermodynamic changes due to a fast volume increase (Moncada et al., 2012; Sanchez‐Alfaro et al., 2016). The inputs for the calculations are pre‐seismic (initial) pressure (initial) enthalpy and co‐seismic volume change within the jog. The volume change was computed from initial aperture and co‐seismic average opening of the jog obtained from TriBEM simulations (see also Text S2 in Supporting Information S1). 

### **2.3. Fluid Flow Simulations** 

The evolution of fluid conditions (pressure, temperature, enthalpy and mass flux) within and adjacent to the dilational jog were modeled using TOUGH2 (Pruess, 1991). TOUGH2 calculates mass and energy balances between discrete model grid blocks, as constrained by Darcy's law, and given the initial thermodynamic conditions and rock parameters (Pruess, 1991). Model details are described in Text S3 in Supporting Information S1. 

## **3. Results and Discussions** 

### **3.1. Slip, Opening and Co‐Seismic Volume Increase in a Dilatational Jog** 

Modeling results on slip gradient and opening distribution occurring during co‐seismic opening of a dilational jog are shown in Figures 1c and 1d. Maximum slip on the two sub‐parallel faults is at the center and decreases toward the edges (Figure 1c). The jog accommodates less slip. The maximum co‐seismic opening is at the center of the jog and decreases toward the edges. Model setup precludes co‐seismic opening on the faults, therefore representing an endmember of dilation restricted to the jog plane (Figure 2b; see also Text S1 in Supporting Information S1). These general slip and opening distribution patterns are similar for all jog geometries and earthquake magnitudes simulated. 

3 of 10 

SANCHEZ‐ALFARO ET AL. 

**Geophysical Research Letters** 

10.1029/2023GL108109 

**Figure 2.** Effect of geometry on co‐seismic opening and volume increase (a) Example showing contour lines of iso‐opening plotted in the overlap versus separation space (representing a plan view of the jog). Each line indicates geometries where opening is equivalent. Four examples of jog geometries and their location in the overlap versus separation space are indicated with red dots. Jog orientation (alpha) is also represented. Jog opening (b)‐(c) and co‐seismic total volume (d)‐(e) in the overlap versus separation space for earthquake magnitudes (b) **,** (d) _M_ w 1.0; and (c) **,** (e) _M_ w 3.0. Orange dots indicate the “sweet spot” that maximizes co‐seismic average opening. 

Slip gradients in the faults and opening morphology are consistent with theoretical, analog models and field data in extensional bends, although opening can also occur on faults (e.g., Aydin & Schultz, 1990; Connolly, 1999; Kim & Sanderson, 2005). Field examples in epithermal deposits also show a similar geometry of ore shoot veins with a thick center at the middle of the jog where a large portion of dilation is accommodated (Camus et al., 1991; Páez et al., 2011). 

### **3.2. Optimal Geometry of a Dilational Jog for Co‐Seismic Flashing** 

Our versatile BEM model enabled analysis of the effect that jog geometry has on two key parameters that promote co‐seismic pressure drop: the average co‐seismic opening and the total volume within the jog. We synthesized thousands (>25,500) of numerical experiments performed for different geometrical configurations by varying separation and underlap (Figure 1a). Results are presented in Figure 2, where _x_ and _y_ axes represent separation and underlap, respectively. The gradient on which parameters change is similar for all the earthquake magnitudes modeled (from _M_ w 0.5 to _M_ w 7) although Figure 2 only shows _M_ w 1.0 and _M_ w 3.0. The average co‐seismic opening of the jog is the most relevant parameter to the current study because it directly relates to the pressure drop caused by the co‐seismic slip. The results indicate that the co‐seismic average opening and total volume are highly dependent on geometry of the jog and that the shape of iso‐opening and iso‐volume contours is independent of earthquake magnitude (Figure 2). Remarkably, results also show an optimal geometry or a “sweet spot” that maximizes co‐seismic average opening (see maximum values and orange dots in Figures 2b‐c and Figure S1 in Supporting Information S1). The optimal geometry corresponds to a separation of ∼10% of fault length and an overlap of ∼2.5% of fault length, giving an aspect ratio of ∼1:2.5 and a jog orientation (alpha) of ∼76°. Variation on the orientation of the maximum horizontal stress (σ1) exerts a minor effect when σ1 rotates from the base case scenario of N45°E to N30°E and N60°E degrees from the sub‐parallel faults (Figure S2 in Supporting Information S1). Co‐seismic total volume at the jog does not show an optimum in the parameters modeled and increases with separation and overlap (Figures 2d and 2e). In other words, co‐seismic total volume increases with jog length because the area of jog increases. 

4 of 10 

SANCHEZ‐ALFARO ET AL. 

**Geophysical Research Letters** 

10.1029/2023GL108109 

**Figure 3.** Co‐seismic thermodynamic conditions (P‐T‐H) and their dependence on the initial Pi‐Ti‐H. (a) Results are shown in the Pressure‐Enthalpy space. Earthquake magnitudes of _M_ w 0.0, _M_ w 1.0 and _M_ w 3.0 are shown in blue circles. Co‐seismic fluid pressure (b) and co‐seismic vapor fraction (c) within the jog in function of the co‐seismic opening. Vertical blue lines are the corresponding earthquake magnitudes associated with co‐seismic jog opening. 

Previous works have assessed how geometry (overlap and separation) plays a role on accommodating deformation within dilational jogs in strike‐slip faults (Aydin & Schultz, 1990; Nemčok et al., 2002; Zhang et al., 2008). In general agreement with our results, displacement discontinuity methods and finite element models have shown that propagation energy, regional stress fields, and dilation are maximized in cases with no overlap and therefore jog orientation (alpha) is 90° (Aydin & Schultz, 1990; Nemčok et al., 2002; Zhang et al., 2008; see Text S4 in Supporting Information S1). Geological records in field examples of echelon strike‐slip faults suggest there is a log‐scale empirical relation between overlap and separation with an aspect ratio of ∼3:1 (alpha ∼18.4°), that differs from our calculated optimal geometry (Aydin & Schultz, 1990; Micklethwaite et al., 2012). This observation does not conflict with our simulations because the geological record may preserve the geometry more compatible with the prevailing stress field and not necessarily record the conditions that maximize opening. 

### **3.3. Co‐Seismic Pressure Drop and Vapor Fraction** 

The co‐seismic pressure drop is dependent on the ratio between the initial volume at the jog and co‐seismic volume increase. As the area of the jog does not change co‐seismically, the volume increase is proportional to the average opening. Assuming volume increase is an isenthalpic process (enthalpy conservation), and using the calculated co‐seismic pressure drop, all other thermodynamic variables of the system are defined, including vapor fraction, temperature, and entropy. 

We calculate thermodynamic conditions at the jog just after co‐seismic opening for three scenarios. These have different initial pressure ( _P_ i), enthalpy ( _H_ i) and temperature ( _T_ i) conditions, all of which are characteristic of a hydrothermal system that can occur in an epithermal environment with high thermal gradient. The three scenarios are (a) low enthalpy ( _H_ i = 852 kJ/kg), shallow (∼200 m depth; _P_ i = 1.66 MPa = Psat) and saturated liquid temperature ( _T_ i = 200°C) condition (b) mid‐enthalpy ( _H_ i = 1,037 kJ/kg), middepth (∼400 m depth; _P_ i = 3.39 MPa = Psat) and saturated liquid temperature ( _T_ i = 240°C) condition; (c) high enthalpy ( _H_ i = 1,344 kJ/ kg), deep (∼1,000 m depth; _P_ i = 8.69 MPa = Psat) and saturated liquid temperature ( _T_ i = 300°C) condition (Table S1 in Supporting Information S1). The saturated liquid temperature is the temperature at which fluid will boil given the pressure conditions. Such boiling conditions are standard features of the active epithermal environment (Hedenquist & Arribas, 2022; Hedenquist et al., 1992; Simmons et al., 2005). Using higher initial pressures with the same enthalpy conditions in the three scenarios generated almost identical results. This is explained by the relative incompressibility of liquid water at the liquid region of the phase diagram and therefore enthalpy is the controlling variable of initial conditions modeled. 

The pressure and vapor fraction resulting from the co‐seismic opening are shown in Figure 3. The pressure‐ enthalpy diagram in Figure 3a better represents these phase changes from the initial fluid with liquid 

5 of 10 

SANCHEZ‐ALFARO ET AL. 

**Geophysical Research Letters** 

10.1029/2023GL108109 

characteristics (orange dots) to a fluid composed of liquid and vapor. Our results indicate that the co‐seismic pressure drop is negligible (Figure 3b) for small jog apertures (10 μm), related to earthquakes smaller than _M_ w 0.0. At that earthquake magnitude, vapor fraction is larger than 10% only for the high enthalpy scenario ( _T_ i = 300°C). For earthquakes greater than _M_ w 3.0, co‐seismic pressure is smaller than 1 MPa regardless of the initial pressure (Figure 3b). 

These results set constraints on the magnitude of the flashing process and the subsequent loss of non‐condensable gasses. Therefore, calculations indicate that flashing affects more than ∼10% of the hydrothermal liquid if earthquakes are greater than 3 _M_ w for the relatively low enthalpy scenario ( _T_ i = 200°C), whereas for a high enthalpy scenario ( _T_ i = 300°C), an earthquake of _M_ w 1.0 is large enough to produce ∼ 17% flashing (Figure 3c). 

When compared with previous attempts to quantify opening on a dilational jog using the piston model, our calculated values of opening are approximately half of those estimated by Sanchez‐Alfaro et al. (2016) and one order of magnitude smaller than Weatherley and Henley (2013) (Figure S2 in Supporting Information S1). Our results differ from previous calculations due to their overestimation of the pressure drop produced by setting the opening within the jog as equal to the average slip on the main faults. 

Our flashing results set an upper limit for the mass balance calculations on quartz and gold precipitation by previous works. In this way, our results reaffirm the conclusions by Williams (2019) and Williams and Fagereng (2022) that coseismic quartz precipitation can only heal a small part of the coseismic dilation (<0.005%‐ 0.02%), and, therefore, cannot play a relevant role in the seismic cycle. Also, the time‐integrated gold precipitation rates calculated by Sanchez‐Alfaro et al. (2016) would be reduced to nearly half due to the new opening calculation. However, gasses loss due to flashing would still be very efficient for precipitating thin coatings (μm to mm scale) of high‐grade gold ore (Sanchez‐Alfaro et al., 2016). Such interpretation is consistent with textural, mineralogical and chemical studies indicating bonanza‐grade banded quartz veins are formed by micron‐scale ore‐rich bands alternating with thicker (mm scale) quartz barren bands, and suggesting transient flash vapourization events can be responsible for highly efficient gold precipitation (Monecke et al., 2023; Taksavasu et al., 2018; Tharalson et al., 2019; Zeeck et al., 2021). 

### **3.4. Thermodynamic Evolution After Co‐Seismic Flashing** 

We simulate the temporal evolution of thermodynamic conditions of fluid after the co‐seismic opening using TOUGH2 heat and fluid transport model. We modeled six scenarios: the three initial enthalpy conditions reported in Table S1 in Supporting Information S1, within two scenarios for co‐seismic dilation: (a) a mid‐size earthquake _M_ w 3.0 with a co‐seismic opening of 6.5 mm; and (b) a small‐size earthquake _M_ w 1.0 with a co‐seismic opening of 0.69 mm. These scenarios for co‐seismic dilation are likely to represent displacement in the faults producing ore shoots in epithermal deposits (McLeish et al., 2021; R. H. Sibson, 1987; Simmons et al., 2005) (Figure 4). The key parameters shown here are vapor saturation (Figure 4b), pressure (Figure 4c) and temperature (Figure 4d) for the jog and its surrounding rock (as a transect from the jog). 

Initial pressure‐enthalpy (Pi‐Hi) sets the thermodynamic conditions for the entire modeled volume except for those elements within the jog. Elements within the jog are defined by the co‐seismic, adiabatic expansion calculation. Results in all scenarios show that transient co‐seismic pressure within the jog lasts <0.01 s. After this short transient, jog pressure approaches the initial pressure of the model and a front of pressure drop propagates into the surrounding host rock and connecting faults (Figure 4c). 

As mentioned above, the key parameter to analyze flashing is vapor fraction ( _V_ f). Our simulations indicate that the evolution of vapor fraction is highly dependent on the magnitude of co‐seismic slip and on initial Pi‐Hi‐Ti conditions (Figure 4). While the initial non‐zero values of vapor fraction within the jog last up to 0.01 s for the cases modeled, the spatial distribution of flashing varies. For the small earthquake and low enthalpy endmember scenario ( _M_ w 1.0, _T_ ini = 200°C) only the jog contains vapor, but in minor amounts ( _V_ f < 5%) and vapor lasts less than a millisecond (Figure 4b). Therefore, flashing is restricted and does not affect the damage zone or host rock. In contrast, for the large earthquake and high‐temperature endmember scenario ( _M_ w 3.0, _T_ i = 300°C), flashing propagates across the jog, reaching the damage zone and host rock volume. Furthermore, fluid with >5% of vapor reaches up to 1 m from the jog and last up to 10<sup>4</sup> s (∼2.8 hr). This broader scale flashing appears to interact with 

6 of 10 

SANCHEZ‐ALFARO ET AL. 

**Geophysical Research Letters** 

10.1029/2023GL108109 

**Figure 4.** Post‐seismic evolution of thermodynamic conditions (P‐T‐H) in a dilational jog resulting from heat and fluid transport simulations. (a) Schematic representation of the blocks analyzed. The number in parentheses indicates the distance from the jog (b)‐(d) Evolution for three scenarios of initial Pi‐Ti‐Hi in columns (increasing Ti toward right) and two scenarios of earthquake magnitude ( _M_ w 1.0 upper row and _M_ w 3.0 lower row) of vapor fraction (b); pressure (c); and temperature (d). 

7 of 10 

SANCHEZ‐ALFARO ET AL. 

**Geophysical Research Letters** 

10.1029/2023GL108109 

permeability to generate a non‐linear distribution of vapor saturation away from the jog. In the model, the flashing front propagates from the jog where the vapor fraction reaches up to ∼0.3, decreases in the damage zone at 0.125 m to _V_ f = 0.15, and then increases again in the first block of host rock at 0.35 m, reaching _V_ f > 0.2 (Figure 4b). This pattern of vapor saturation may occur because the host rock has lower permeability than the jog and damage zone, and that lower permeability can inhibit fluid recharge to the pressure drop front. Temperature evolution within the jog shows an initial temperature fixed by the pressure drop and a sharp temperature increase starting at 1 s. For the _M_ w 1.0 scenarios, the temperature within the jog immediately reaches host rock temperatures, and the temperature drop does not affect the surrounding host rock (Figure 4d). On the _M_ w 3.0 scenarios, temperature drop also affects the damage zone. 

Previous studies have simulated fluid flow triggered by co‐seismic slip in dilational jogs by modeling a transient increase in porosity and permeability in the jog, and obtained a similar shape of pressure recovery within the dilational jog (Matthäi & Fischer, 1996; Sheldon & Ord, 2005; Zhang et al., 2008) (see Text S4 in Supporting Information S1). However, their results indicated that it could take up to hundreds or thousands of years before fracture volume is filled with fluid and fluid pressure in fault recovers in crystalline host rocks (Matthäi & Fischer, 1996; Sheldon & Ord, 2005). More recently, Brantut (2020) provided direct experimental support to the suction pump mechanism with his experiments of dynamic rock dilation and in situ measurements of pressure fluctuation. His measurements show that during faulting and dilation, on‐fault fluid pressure dropped rapidly to near zero and that the pressure recovery takes on the order of hundreds of seconds (Brantut, 2020). The vastly different time‐scale of our results on pressure recovery is likely to be produced by the low‐permeability of host rock considered in previous studies, which significantly decreases fluid flow velocities and, therefore, pressure recovery after the co‐seismic dilation. 

To the best of our knowledge, Zhang et al. (2008) is the only study that considered different geometries of the dilational jog when simulating co‐seismic faulting. Interestingly, their results indicated that from the three geometries modeled, with jog orientations, alpha, of ∼18°, ∼− 18° and ∼90°, fluid flow rates were 35% higher in the latter case (alpha ∼90°), the most similar to our optimal geometry case. Moreover, their results also indicated high fluid flow rates feeding the dilational area, which is channeled along the pre‐existing faults and surrounding host rocks. 

## **4. Conclusions** 

Here we present numerical simulations to estimate the magnitude, time scale and spatial extent of post‐seismic flash vapourization within a dilational jog. Our results indicate that a jog orientation (alpha) of ∼76° is the optimal geometry of the dilatational jog that maximizes opening and, therefore, pressure drop. For the scenarios modeled, co‐seismic vapor fraction ranges from 10%–17% during flashing; in contrast to previous work, our results indicate that 100% flash vapourization is highly unlikely under reasonable assumptions (i.e., an adiabatic co‐seismic processes and non‐ideal gas fluid). Pressure within the jog recovers extremely fast (<1 s) after the co‐ seismic pressure drop due to fast fluid transport from the connecting faults and damage zone, and then from the host rock. 

The duration, intensity and propagation of the flashing front are limited and highly dependent on the magnitude of the co‐seismic slip and on the initial Pi‐Hi‐Ti conditions. Larger earthquake magnitude and higher initial enthalpy conditions produce longer flashing, and the effect is more widely distributed, affecting the near environment of the damage zone and host rock within the centimeter‐scale. 

The additional constraints on magnitude and duration of flashing presented here, support previous works showing that quartz precipitation triggered by coseismic dilation cannot heal fractures at the earthquake's recurrence time scale (Williams, 2019; Williams & Fagereng, 2022). Although our model simulates flashing triggered by a single slip event, it is valuable to understand epithermal deposits because the deposition of a thin layer of high‐grade gold repeats thousands to millions of times during the earthquake cycle over thousands of years at complex fault fracture networks involving many dilational jogs at various scales. 

This study also supports the hypothesis that co‐seismic precipitation in dilational jog may occur under conditions far‐from equilibrium, so new efforts should be made to obtain fast kinetic models for mineral precipitation. 

8 of 10 

SANCHEZ‐ALFARO ET AL. 

**Geophysical Research Letters** 

10.1029/2023GL108109 

## **Data Availability Statement** 

For purposes of reproducing or extending the analysis, all data, algorithms, code and methods are available in the main text, and Supporting Information S1, or at referenced scientific sources. The faults triangular meshes data used in the boundary elements mechanical model are available at Zenodo Repository (Sanchez‐Alfaro, 2023) with Creative Commons Attribution 4.0 International Public License. Mechanical models to compute opening were run with the open‐source boundary elements method code TriBEM: Boundary element code using triangular dislocation elements (Loveless, 2019). Calculations on the co‐seismic thermodynamic conditions were made using the Python script available at Zenodo Repository (Sanchez‐Alfaro, 2023) and described in Supporting Information S1. Heat and fluid transport simulations were performed using licensed copies of TOUGH2 ©. The geometry of block mesh and the initial conditions for the TOUGHT2 simulations are available at Zenodo Repository (Sanchez‐Alfaro, 2023) and are described in Supporting Information S1. 

#### **Acknowledgments** 

P. Sanchez‐Alfaro acknowledges financial support from FONDECYT Grant 1201219, ANID‐Ministry of Energy Project “Programa en Energías” 2015, ANID FONDAP project 15090013 (CEGA), and Iniciativa Milenio grant NCN13_065 “Millennium Nucleus for Metal Tracing Along Subduction”. We are grateful to the editor for handling the manuscript. We thank Randy Williams and the anonymous reviewer, whose constructive comments have helped us improve this manuscript's quality. P. Sanchez‐Alfaro also thanks G. Toledo and S. Lemui for their long‐ standing support. 

## **References** 

- Aron, F., Johnstone, S. A., Mavrommatis, A., Sare, R., Maerten, F., Loveless, J. P., et al. (2022). Mountain rivers reveal the earthquake Hazard of geologic faults in silicon valley. _Geophysical Research Letters_ , _49_ (19), e2022GL099220. https://doi.org/10.1029/2022GL099220 

- Aydin, A., & Schultz, R. A. (1990). Effect of mechanical interaction on the development of strike‐slip faults with echelon patterns. _Journal of Structural Geology_ , _12_ (1), 123–129. https://doi.org/10.1016/0191‐8141(90)90053‐2 

- Brantut, N. (2020). Dilatancy‐induced fluid pressure drop during dynamic rupture: Direct experimental evidence and consequences for earthquake dynamics. _Earth and Planetary Science Letters_ , _538_ , 116179. https://doi.org/10.1016/j.epsl.2020.116179 

- Camus, F., Boric, P. R., Skewes, M. A., Castelli, J. C., Reichhard, E., & Mestre, A. (1991). Geologic, structural, and fluid inclusion studies of El Bronce epithermal vein system, Petorca, central Chile. _Economic Geology_ , _86_ (6), 1317–1345. https://doi.org/10.2113/gsecongeo.86.6.1317 

- Cano, N., González‐Jiménez, J. M., Camprubí, A., Domínguez‐Carretero, D., González‐Partida, E., & Proenza, J. A. (2023). Nanomaterial accumulation in boiling brines enhances epithermal bonanzas. _Scientific Reports_ , _13_ (1), 14985. https://doi.org/10.1038/s41598‐023‐41756‐4 

- Connolly, P., & Cosgrove, J. (1999). Prediction of static and dynamic fluid pathways within and around dilational jogs. _Geological Society, London, Special Publications_ , _155_ (1), 105–121. https://doi.org/10.1144/GSL.SP.1999.155.01.09 

- Cox, S. F. (2010). The application of failure mode diagrams for exploring the roles of fluid pressure and stress states in controlling styles of fracture‐controlled permeability enhancement in faults and shear zones. _Geofluids_ , _10_ (1–2), 217–233. https://doi.org/10.1111/j.1468‐8123. 2010.00281.x 

- Hedenquist, J. W., & Arribas, A. (2022). Exploration implications of multiple formation environments of advanced argillic minerals. _Economic Geology_ , _117_ (3), 609–643. https://doi.org/10.5382/econgeo.4880 

- Hedenquist, J. W., Reyes, A. G., Simmons, S. F., & Taguchi, S. (1992). The thermal and geochemical structure of geothermal and epithermal systems: A framework for interpreting fluid inclusion data. _European Journal of Mineralogy_ , _4_ (5), 989–1016. https://doi.org/10.1127/ejm/4/5/ 0989 

- Ingebritsen, S. E., & Appold, M. S. (2012). The physical hydrogeology of ore deposits. _Economic Geology_ , _107_ (4), 559–584. https://doi.org/10. 2113/econgeo.107.4.559 

- Kim, Y.‐S., & Sanderson, D. J. (2005). The relationship between displacement and length of faults: A review. _Earth‐Science Reviews_ , _68_ (3–4), 317–334. https://doi.org/10.1016/j.earscirev.2004.06.003 

- Loveless, J. P. (2019). tribem: Boundary element code using triangular dislocation elements (Version 1.0). [Software]. _Zenodo_ . https://doi.org/10. 5281/ZENODO.3333899 

- Matthäi, S. K., & Fischer, G. (1996). Quantitative modeling of fault‐fluid‐discharge and fault‐dilation‐induced fluid‐pressure variations in the seismogenic zone. _Geology_ , _24_ (2), 183. https://doi.org/10.1130/0091‐7613(1996)024<0183:QMOFFD>2.3.CO;2 

- McLeish, D. F., Williams‐Jones, A. E., Vasyukova, O. V., Clark, J. R., & Board, W. S. (2021). Colloidal transport and flocculation are the cause of the hyperenrichment of gold in nature. _Proceedings of the National Academy of Sciences_ , _118_ (20), e2100689118. https://doi.org/10.1073/pnas. 2100689118 

- Micklethwaite, S., Ford, A., Witt, W., & Sheldon, H. A. (2012). Transient permeability in fault stepovers and rapid rates of orogenic gold deposit formation. In T. Gleeson & S. E. Ingebritse (Eds.), _Crustal permeability_ (pp. 249–259). Wiley. https://doi.org/10.1002/9781119166573.ch20 

Moncada, D., Mutchler, S., Nieto, A., Reynolds, T. J., Rimstidt, J. D., & Bodnar, R. J. (2012). Mineral textures and fluid inclusion petrography of the epithermal Ag–Au deposits at Guanajuato, Mexico: Application to exploration. _Journal of Geochemical Exploration_ , _114_ , 20–35. https:// doi.org/10.1016/j.gexplo.2011.12.001 

- Monecke, T., Reynolds, T. J., Taksavasu, T., Tharalson, E. R., Zeeck, L. R., Guzman, M., et al. (2023). Natural growth of gold dendrites within silica gels. _Geology_ , _51_ (2), 189–192. https://doi.org/10.1130/G48927.1 

- Nemčok, M., Henk, A., Gayer, R. A., Vandycke, S., & Hathaway, T. M. (2002). Strike‐slip fault bridge fluid pumping mechanism: Insights from field‐based palaeostress analysis and numerical modelling. _Journal of Structural Geology_ , _24_ (12), 1885–1901. https://doi.org/10.1016/S0191‐ 8141(02)00009‐3 

- Páez, G. N., Ruiz, R., Guido, D. M., Jovic, S. M., & Schalamuk, I. B. (2011). Structurally controlled fluid flow: High‐grade silver ore‐shoots at 

- Martha epithermal mine, Deseado Massif, Argentina. _Journal of Structural Geology_ , _33_ (5), 985–999. https://doi.org/10.1016/j.jsg.2011.02.007 

- Peterson, E. C., & Mavrogenes, J. A. (2014). Linking high‐grade gold mineralization to earthquake‐induced fault‐valve processes in the Porgera gold deposit, Papua New Guinea. _Geology_ , _42_ (5), 383–386. https://doi.org/10.1130/G35286.1 

- Petrella, L., Thébaud, N., Fougerouse, D., Tattitch, B., Martin, L., Turner, S., et al. (2022). Nanoparticle suspensions from carbon‐rich fluid make high‐grade gold deposits. _Nature Communications_ , _13_ (1), 3795. https://doi.org/10.1038/s41467‐022‐31447‐5 

- Pruess, K. (1991). TOUGH2‐A general‐purpose numerical simulator for multiphase fluid and heat flow. 

- Rhys, D. A., Lewis, P. D., & Rowland, J. V. (2020). Chapter 3: Structural controls on ore localization in epithermal gold‐silver deposits: A mineral systems approach. In J. V. Rowland & D. A. Rhys (Eds.), _Applied structural geology of ore‐forming hydrothermal systems_ (pp. 83–145). Society of Economic Geologists. https://doi.org/10.5382/rev.21.03 

- Richards, J. P. (2013). Giant ore deposits formed by optimal alignments and combinations of geological processes. _Nature Geoscience_ , _6_ (11), 911–916. https://doi.org/10.1038/ngeo1920 

9 of 10 

SANCHEZ‐ALFARO ET AL. 

**Geophysical Research Letters** 

10.1029/2023GL108109 

Rowland, J. V., & Simmons, S. F. (2012). Hydrologic, magmatic, and tectonic controls on hydrothermal flow, Taupo Volcanic zone, New Zealand: Implications for the formation of epithermal vein deposits. _Economic Geology_ , _107_ (3), 427–457. https://doi.org/10.2113/econgeo. 107.3.427 

Sanchez‐Alfaro, P. (2023). Data set for earthquakes trigger rapid flash boiling front at optimal geologic conditions. [Dataset]. _Zenodo_ . https://doi. org/10.5281/zenodo.10137592 

Sanchez‐Alfaro, P., Reich, M., Driesner, T., Cembrano, J., Arancibia, G., Pérez‐Flores, P., et al. (2016). The optimal windows for seismically‐ enhanced gold precipitation in the epithermal environment. _Ore Geology Reviews_ , _79_ , 463–473. https://doi.org/10.1016/j.oregeorev.2016. 06.005 

Sheldon, H. A., & Ord, A. (2005). Evolution of porosity, permeability and fluid pressure in dilatant faults post‐failure: Implications for fluid flow and mineralization: Fluid flow in dilatant faults. _Geofluids_ , _5_ (4), 272–288. https://doi.org/10.1111/j.1468‐8123.2005.00120.x 

Sibson, R. H. (1987). Earthquake rupturing as a mineralizing agent in hydrothermal systems. _Geology_ , _15_ (8), 701. https://doi.org/10.1130/0091‐ 7613(1987)15<701:ERAAMA>2.0.CO;2 

Sibson, R. H. (2000). Fluid involvement in normal faulting. _Journal of Geodynamics_ , _29_ (3–5), 469–499. https://doi.org/10.1016/S0264‐3707(99) 00042‐3 

Sibson, R. H., Robert, F., & Poulsen, K. H. (1988). High‐angle reverse faults, fluid‐pressure cycling, and mesothermal gold‐quartz deposits. _Geology_ , _16_ (6), 551. https://doi.org/10.1130/0091‐7613(1988)016<0551:HARFFP>2.3.CO;2 

Simmons, S. F., White, N. C., & John, D. A. (2005). Geological characteristics of epithermal precious and base metal deposits. In J. W. Hedenquist, J. F. H. Thompson, R. J. Goldfarb, & J. P. Richards (Eds.), _One Hundredth anniversary volume. Society of economic geologists_ . https://doi.org/10.5382/AV100.16 

Taksavasu, T., Monecke, T., & Reynolds, T. (2018). Textural characteristics of noncrystalline silica in sinters and quartz veins: Implications for the formation of bonanza veins in low‐sulfidation epithermal deposits. _Minerals_ , _8_ , 331. https://doi.org/10.3390/min8080331 

Tharalson, E., Monecke, T., Reynolds, T., Zeeck, L., Pfaff, K., & Kelly, N. (2019). The distribution of precious metals in high‐grade banded quartz 

veins from low‐sulfidation epithermal deposits: Constraints from µXRF mapping. _Minerals_ , _9_ (12), 740. https://doi.org/10.3390/min9120740 Weatherley, D. K., & Henley, R. W. (2013). Flash vaporization during earthquakes evidenced by gold deposits. _Nature Geoscience_ , _6_ (4), 294– 298. https://doi.org/10.1038/ngeo1759 

Williams, R. T. (2019). Coseismic boiling cannot seal faults: Implications for the seismic cycle. _Geology_ , _47_ (5), 461–464. https://doi.org/10.1130/ G45936.1 

Williams, R. T., & Fagereng, Å. (2022). The role of quartz cementation in the seismic cycle: A critical review. _Reviews of Geophysics_ , _60_ (1), e2021RG000768. https://doi.org/10.1029/2021RG000768 

Wu, B. S., & McLaskey, G. C. (2019). Contained laboratory earthquakes ranging from slow to fast. _Journal of Geophysical Research: Solid Earth_ , _124_ (10), 10270–10291. https://doi.org/10.1029/2019JB017865 

Zeeck, L. R., Monecke, T., Reynolds, T. J., Tharalson, E. R., Pfaff, K., Kelly, N. M., & Hennigh, Q. T. (2021). Textural characteristics of barren and mineralized colloform quartz bands at the low‐sulfidation epithermal deposits of the Omu Camp in Hokkaido, Japan: Implications for processes resulting in bonanza‐grade precious metal enrichment. _Economic Geology_ , _116_ (2), 407–425. https://doi.org/10.5382/econgeo.4795 Zhang, Y., Schaubs, P. M., Zhao, C., Ord, A., Hobbs, B. E., & Barnicoat, A. C. (2008). Fault‐Related dilation, permeability enhancement, fluid flow and mineral precipitation patterns: Numerical models. _Geological Society_ , _299_ (1), 239–255. https://doi.org/10.1144/SP299.15 

10 of 10 

SANCHEZ‐ALFARO ET AL. 

