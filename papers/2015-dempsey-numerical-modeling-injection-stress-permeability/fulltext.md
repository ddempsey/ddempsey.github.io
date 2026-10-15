# Numerical modeling of injection, stress and permeability enhancement during shear stimulation at the Desert Peak Enhanced Geothermal System

**Authors:** David Dempsey, Sharad Kelkar, Nicholas Davatzes, Stephen Hickman, Daniel Moos  
**Published in:** International Journal of Rock Mechanics and Mining Sciences (2015)  
**DOI (version of record):** https://doi.org/10.1016/j.ijrmms.2015.06.003  
**This copy:** Accepted manuscript (peer-reviewed, author's version). Text extracted from the PDF at https://ddempsey.github.io/papers/2015-dempsey-numerical-modeling-injection-stress-permeability/dempsey2015-numerical-modeling-injection.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** Accepted manuscript. © 2015. This manuscript version is made available under the CC-BY-NC-ND 4.0 license https://creativecommons.org/licenses/by-nc-nd/4.0/. The version of record is available at https://doi.org/10.1016/j.ijrmms.2015.06.003  
**Licence:** CC BY-NC-ND 4.0 https://creativecommons.org/licenses/by-nc-nd/4.0/  

---
10 

11 

12 

13 

14 

15 

16 

17 

18 

19 

20 

21 

22 

23 

24 

25 

26 

27 

28 

- 1 **Numerical modeling of injection, stress and permeability enhancement during shear** 

- 2 **stimulation at the Desert Peak Enhanced Geothermal System.** 

- 3 David Dempsey<sup>a*</sup> , Sharad Kelkar<sup>a</sup> , Nicholas Davatzes<sup>b</sup> , Stephen Hickman<sup>c</sup> , Daniel Moos<sup>d</sup> 

- 4 aLos Alamos National Laboratory, Los Alamos, NM, USA 

- 5 bTemple University, Philadelphia, PA, USA 

- 6 cUSGS, Menlo Park, CA, USA 

- 7 

   - dBaker Hughes Inc., Palo Alto, CA, USA 

- 8 *Corresponding author. (001) 505 310 1299, dempsey7@stanford.edu, Department of Geophysics, 397 

9 

- Panama Mall, Mitchell Building, 3<sup>rd</sup> Floor, Stanford University, Stanford, CA 94305-2215. 

### **Abstract** 

29 

- 30 

Creation of an Enhanced Geothermal System relies on stimulation of fracture permeability through selfpropping shear failure that creates a complex fracture network with high surface area for efficient heat transfer. In 2010, shear stimulation was carried out in well 27-15 at Desert Peak geothermal field, Nevada, by injecting cold water at pressure less than the minimum principal stress. An order-of-magnitude improvement in well injectivity was recorded. Here, we describe a numerical model that accounts for injection-induced stress changes and permeability enhancement during this stimulation. In a two-part study, we use the coupled thermo-hydrological-mechanical simulator FEHM to: (i) construct a wellbore model for non-steady bottom-hole temperature and pressure conditions during the injection, and (ii) apply these pressures and temperatures as a source term in a numerical model of the stimulation. In this model, a Mohr-Coulomb failure criterion and empirical fracture permeability is developed to describe permeability evolution of the fractured rock. The numerical model is calibrated using laboratory measurements of material properties on representative core samples and wellhead records of injection pressure and mass flow during the shear stimulation. The model captures both the absence of stimulation at low wellhead pressure (WHP ≤ 1.7 and ≤ 2.4 MPa) as well as the timing and magnitude of injectivity rise at medium WHP (3.1 MPa). Results indicate that thermoelastic effects near the wellbore and the associated non-local stresses further from the well combine to propagate a failure front away from the injection well. Elevated WHP promotes failure, increases the injection rate, and cools the wellbore; however, as the overpressure drops off with distance, thermal and non-local stresses play an ongoing role in promoting shear failure at increasing distance from the well. 

### **Keywords** 

- 31 Desert Peak; shear stimulation; permeability enhancement; thermal stress; modeling 

32 

33 

40 

41 

42 

43 

44 

45 

46 

47 

48 

49 

50 

51 

52 

53 

54 

55 

56 

57 

58 

59 

60 

61 

62 

# **1 Introduction** 

34 

35 

36 

37 

38 

39 

Shear stimulation is one method for improving the permeability of naturally fractured rock to create an Enhanced Geothermal System (EGS). The approach is an evolution of the idea that, over geological time, shear slip is necessary to create and maintain the conductivity of naturally-occurring fractures and faults [1 2]. EGS stimulations are designed to accelerate this process – inducing shear failure on existing fractures – through injection of cold water, thereby elevating fluid pressure inside the fractures and promoting cooling and thermal contraction of the fracture walls. Frictional failure induced by these fluid pressure and stress changes combined with mismatch of asperities during shearing results in selfpropped, dilatant fractures that are better able to conduct fluids. Additionally, creation of new flow paths grows the fracture network, increasing the volume of rock amenable to heat extraction. 

The success of this approach relies on the existence of hot rocks containing fractures oriented for shear failure, ambient differential stress large enough that the fractures are already near frictional failure, and material and mechanical properties conducive to shear-enhanced dilation [3]. Such conditions are frequently found in or adjacent to natural hydrothermal systems [4 5], which are often associated with regions of tectonic extension (leading to critically stressed fractures under low confining stress) and lithospheric thinning (for high crustal temperatures at drillable depths). In addition, fluid-rock interactions in natural hydrothermal systems can either promote shear-enhanced dilation through rock silicification and embrittlement [6], or inhibit dilation through clay alteration within fractures, favoring ductile deformation [5 7]. For these reasons, the margins of natural hydrothermal systems are convenient test beds for EGS shear stimulation operations, such as at Desert Peak, Nevada [8], Geysers, California [9], and Ngatamariki, New Zealand [10]. 

Shear stimulation is also utilized in conventional hydrothermal settings, for example, New Zealand [10] and the Philippines [11]. It has been noted that the injectivity of wells used for reinjection of produced fluids generally increases with continued use. As the reinjected brine is often cooler than the formation into which it is being injected, improvements to injectivity are in some cases attributed to thermoelastic contraction of rock mass around the well, leading to an increase in fracture apertures under decreasing normal stress. This elastic mechanism is in marked contrast to the shearing-induced changes in permeability discussed above, and is consistent with reports of injectivity decline when reinjection is halted or a well is subsequently produced [10]. 

Numerical simulators that account for the coupled thermal-hydrological-mechanical (THM) processes involved in an EGS shear stimulation are becoming increasingly widespread, and include FEHM [12], TOUGH2-FLAC3D [13], OpenGeoSys [14 15] and FALCON [16]. In addition to accounting for two- 

63 

70 

71 

72 

73 

74 

75 

76 

77 

78 

79 

80 

81 

82 

83 

84 

85 

86 

87 

88 

89 

90 

91 

92 

93 

- 64 phase fluid flow and heat transfer, these codes solve force balance equations for stress and deformation 

65 on a continuum representation of the matrix-fracture domain. It is particularly important to capture 66 thermos- and poro-elastic stress changes induced in the rock matrix when cold water is injected at 67 elevated pressure into a hot reservoir; these induced stresses can lead to permeability enhancement by 68 promoting frictional failure or elastic fracture dilatation, compounding the direct effects of changes in 69 effective normal stress on fracture permeability. 

To model properly injectivity enhancement during stimulation requires relationships for the change in permeability in response to the perturbed stress state, including both elastic and inelastic effects. These relationships include elastic opening of fracture apertures through reduction of effective normal stress by fluid pressurization [17] or changes in thermoelastic stress due to cooling [10]; in both cases, injectivity gains can be lost when the reservoir reverts back to its original state. Alternatively, plastic deformation upon mechanical failure can lead to permanent permeability gains. Several conceptual models and mathematical formulations have been proposed for stress-dependent fracture permeability during fluid pressurization. These models include thermo-poroelastic deformation of a regular array of fractures [18], aperture enhancement through fracture-propagation and shear-dilation of a statistically representative fracture population [19], a crack-tensor approach that yields upscaled permeability and elastic properties based on Mohr-Coulomb failure and dilation of sub-grid-scale fractures [20], and permeability as a function of the normal-stress dependent fracture aperture [21]. 

94 

In this paper, we present a THM numerical modeling study of the shear stimulation of well 27-15 in the Desert Peak geothermal field, Nevada. Similar to the crack-tensor approach of Rutqvist et al. [20], we use sub-grid-scale fracture populations that are assessed for Mohr-Coulomb failure, with permeability enhanced according to an empirical relationship based on laboratory shearing experiments. In Section 2, we discuss the tectonic and structural setting at Desert Peak, and summarize the comprehensive site characterization studies that reveal the distribution of pre-existing fractures, the orientations and magnitudes of ambient stresses, and the lithological and mechanical properties of the stimulated formations. We also summarize key aspects of the multi-staged shear stimulation [3, 8] carried out at this site. In Section 3, we describe the construction of a numerical wellbore model used to determine nonsteady bottom-hole temperature and pressure conditions during this shear stimulation. In Section 4, we describe construction of the shear stimulation model including the relationship for stress-dependent permeability and a time-varying injection source term informed by the wellbore model. In Section 5, we present the calibrated stimulation model for Desert Peak EGS well 27-15 and discuss spatial and temporal 

108 

110 

111 

112 

113 

114 

115 

- 95 evolution of the stimulated region along with model sensitivities. The coupled THM modeling study 

- 96 presented here builds on earlier work by Kelkar et al. [22] and Dempsey et al. [23 24]. 

# 97 **2 The Desert Peak EGS demonstration project** 

## 98 **2.1 Site characterization** 

99 Natural hydrothermal systems in the Great Basin of the western United States generally are found 100 within several northeast trending belts that are aligned orthogonal to the direction of extension [25]. 101 These regions localize extensional deformation and crustal thinning, which opens pathways for deep fluid 102 circulation and advective heat transfer to shallower depths. The Hot Spring Mountains are located in one 103 of these belts - the Humboldt Structural Zone - and host three major geothermal fields: Desert Peak, 104 Brady’s and Desert Queen. Desert Peak is a high-enthalpy, blind geothermal system with no active hot 105 springs or fumaroles. The field is associated with a left step in the NNE-trending, WNW-dipping Rhyolite 106 Ridge normal fault zone [25]. The orientation and mode of faulting are consistent with regional NW107 directed extension [26]. 

109 

116 

117 

118 

119 

120 

Geothermal power is generated from fluids produced in the southwest region of the Desert Peak field, with additional pressure support for the reservoir supplied by reinjection into several wells northeast of the main production area (Figure 1). When drilled, well DP 27-15 exhibited poor injectivity and was selected for EGS stimulation over three potential depth intervals [27]. The uppermost of these zones was selected for an initial (shallow) stimulation, extending from the casing shoe at 915 m to the top of a temporary cement plug at 1065 m. This cement plug was later drilled out and in order to allow the entire open-hole interval of 27-15 to be stimulated in the final phase of the Desert Peak EGS project. This latter phase of the project will not be discussed further in this paper. The shallow stimulation consisted of three phases [8]: (i) shear stimulation by injection of cold-water at pressure less than the minimum horizontal principal stress, 𝜎ℎ ; (ii) chemical stimulation by injection of acid; and (iii) a controlled hydraulic fracturing phase. Only the shear stimulation phase is modeled here; a discussion of the other shallow stimulation phases is presented in Chabora et al. [8]. Prior to this stimulation, comprehensive borehole geophysics, tracer studies, laboratory testing and seismological studies were undertaken to create a geomechanical and hydrologic model of the site [3 7 27-29]. 

122 Shear stimulation relies on the triggering of self-propping shear failure on pre-existing fractures. 123 In designing and modeling the effects of a shear stimulation, it is necessary to know the pre-existing 124 fracture distribution, including orientations, density and frictional properties, and the magnitude and 

131 

138 139 

140 

125 orientation of the in-situ principal stress fields acting on those fractures. Davatzes and Hickman [27] 126 undertook a fracture characterization study in well 27-15 using borehole image logs collected to depths 127 of almost 1700 m. They recorded extensive drilling-induced tensile failure that indicated an orientation 128 for 𝜎ℎ of 114 ± 17°, consistent with the NNE trend of surface normal faulting [30]. Temperature gradient 129 anomalies from precision temperature logs were also used to identify zones of fluid flow, interpreted to 130 correspond to intervals of slightly elevated fracture permeability. 

132 

133 

134 

135 136 137 

141 

142 

143 

In an extensional tectonic setting, the maximum principal stress, 𝜎1 , is typically assumed to be vertical and equal in magnitude to the overburden, i.e., 𝜎1 = 𝜎𝑣 . For well 27-15, 𝜎𝑣 was calculated from a lithological profile determined by cuttings analysis, in concert with density testing of core taken from the nearby well 35-13 The magnitude of 𝜎ℎ at the top of the stimulation interval was determined from the stable instantaneous shut-in pressure obtained from a small-volume, low-flow-rate hydraulic fracturing test, corroborated by a step-rate injection test [3]. The magnitude of 𝜎ℎ at the mid-point of the minihydrofrac interval (930 ± 12.5 m) was 13.8 ± 0.4 MPa. At this same depth, 𝜎𝑣 was calculated to be 22.6 MPa, yielding a ratio of 𝜎ℎ/𝜎𝑣 of 0.61 ± 0.02 [3]. Ambient formation pressure was estimated from a static temperature/pressure/spinner (TPS) log and found to be 7.5 MPa at 930 m, corresponding to a water table 116 m below the ground surface. Hickman and Davatzes [3] constrain the magnitude of the intermediate principal stress, 𝜎𝐻 , using two possible stress models: normal faulting and transitional normal to strike-slip faulting. These yield an upper bound of 𝜎𝐻 = 𝜎𝑣 and a lower bound of 𝜎𝐻 = (𝜎𝑣 + 𝜎ℎ)/2 . 

144 Mechanical testing on core samples from well 35-13 was performed to determine mechanical 145 properties such as Young’s modulus, Poisson’s ratio, permeability and intact and fracture frictional 146 properties of the relevant rock types [7]. Three rhyolite tuffs and two metamorphic basement units with 147 varying degrees of hydrothermal alteration and clay content are identified in the stimulation interval. The 148 dominant argyllic and siliceous rhyolites and illitic metamudstone units have measured porosities of ~10% 149 and matrix permeabilities from 0.02 to 40 milliDarcy (2x10<sup>-17</sup> to 4x10<sup>-14</sup> m<sup>2</sup> ). The coefficient of friction 150 measured during quasi-static sliding of fractured rock samples ranges from 0.65 for the argyllic rhyolite to 151 0.96 for the siliceous rhyolite and illitic metamudstone; this range of friction values was used by Hickman 152 and Davatzes [3] to constrain their geomechanical model of the Desert Peak field. In the shear stimulation 153 model presented in Section 4, we use a friction coefficient of 0.75. 

154 In a normal faulting stress environment, optimally-oriented, cohesion-less fractures will fail when 155 the magnitudes of 𝜎ℎ , 𝜎𝑣 and formation fluid pressure, 𝑃 satisfy the Mohr-Coulomb failure criterion for 156 an appropriate value of the coefficient of friction, 𝜇 , [31] 

157 

164 

166 

167 

168 

170 

171 

172 

173 

174 

178 

181 

158 

159 

160 

161 

162 

163 

165 

169 

175 

176 

During the Desert Peak shear stimulation, WHP was increased in steps with the goal of increasing 𝑃 in the formation until Eq. (1) above was satisfied. Decomposing the formation pressure into ambient and overpressure components, i.e., 𝑃= 𝑃0 + Δ𝑃 , and substituting into (1) above, we can calculate a range of WHPs within which the onset of shear stimulation should be observed. Taking 𝜎𝑣 =22.6 MPa, 𝜎ℎ =13.8 ± 0.4 MPa, 𝑃0 =7.5 MPa, and 𝜇 =0.65 to 0.96, we obtain the critical overpressure range above which stimulation should be expected to occur, Δ𝑃𝑐𝑟𝑖𝑡 =2.1 to 4.8 MPa. Hickman and Davatzes [3] calculated that failure should be induced on pre-existing fractures for excess formation pressures greater than 2.5 MPa. It is important to note that Δ𝑃 experienced by the formation is not only the applied WHP, but also includes a 1.1 MPa contribution due to the weight of fluid required to fill the borehole, i.e., offset a water table at a depth of 116 m, and an additional component that increases as the borehole water cools with time due to the accompanying density increase. While these effects are neglected in the analysis presented above, they are accounted for in the models described in Sections 3 and 4. 

On the basis of the in situ stress and fracture failure analyses of Hickman and Davatzes [3], it was determined that stimulation of DP 27-15 by cold-water injection should proceed with WHP being stepped in increments of 100 psi (~0.7 MPa) while staying below 𝜎ℎ to avoid hydraulic fracturing – this imposes an upper limit on the WHP of 5.2 MPa [8]. Shear stimulation was undertaken at four pressure steps; WHP ≤ 1.7, ≤ 2.4, ≤ 3.1 and ≤ 3.7 MPa. Allowing for an additional 1.1 MPa due to filling of the borehole, overpressure in the formation, Δ𝑃 , will exceed the lower threshold for frictional failure, Δ𝑃𝑐𝑟𝑖𝑡 , at all pressure steps. 

177 

## **2.2 Shear stimulation phase** 

179 

180 

182 

183 

184 

185 

The efficacy of EGS stimulations is generally quantified in terms of an increase in the injectivity of the well through which cold water is being pumped into the formation. In Chabora et al. [8] and as summarized below, injectivity during the Desert Peak EGS stimulation is defined as the injection rate divided by the wellhead pressure (WHP). Alternative definitions may divide injection rate by the downhole overpressure (i.e., pressure in excess of undisturbed formation pressure) or take into account the geometry of the stimulated volume as well as fluid viscosity changes; however, as these in-situ properties can be difficult to determine, the WHP definition is preferred. For a given WHP, an increase in formation permeability will result in a larger injection rate and, thus, a larger injectivity. 

186 Injection rate and injectivity during the shear stimulation are summarized in Figure 2. Injection of 187 ~30°C fresh water commenced at WHP ≤ 1.7 MPa resulting in injection rates of 0.2 to 0.3 kg s<sup>-1</sup> and a 

193 194 

195 196 197 

198 199 

200 201 

202 

203 

204 

205 

206 

207 

211 212 

188 calculated injectivity (based on WHP) of ~0.1 to 0.15 kg s<sup>-1</sup> MPa<sup>-1</sup> . During the second step, injection at a 189 WHP ≤ 2.4 MPa resulted in injection rates of 0.25 to 0.4 kg s<sup>-1</sup> , again corresponding to an injectivity of 190 ~0.1-0.15 kg s<sup>-1</sup> MPa<sup>-1</sup> . During both pressure steps injectivity was stable for the 8 to 9 day injection period. 191 While failing to achieve the goals of the stimulation, reproduction of this null result was nevertheless an 192 important step both in demonstrating the existence of a critical pressure threshold for EGS shear 193 stimulation and in calibrating the numerical model presented in this paper. 

On September 13, 2010, injection recommenced at an increased WHP of 3.1 MPa. The initial injection rate was stable and averaged 0.4 kg s<sup>-1</sup> for the first 4 to 5 days. The stable injectivity during this time, 0.13 kg s<sup>-1</sup> MPa<sup>-1</sup> , is consistent with that calculated for the previous pressure steps. Continued injection at nearly constant WHP was accompanied an initial rapid increase in injection rate which slowed with time. A rate of 4.4 kg s<sup>-1</sup> was reached at the end of this stimulation step. Injectivity increased by a factor of 10 to 15 during this period, reaching a maximum of ~1.5 kg s<sup>-1</sup> MPa<sup>-1</sup> before injection was terminated after 38 days. 

Following a 17-day shut-in, injection recommenced at the same WHP of 3.1 MPa for an additional 15 days. It was noted that, during the interim shut-in, injectivity had decreased by approximately a factor of 2 to a value of about 0.7 kg s<sup>-1</sup> MPa<sup>-1</sup> ; however, by the end of this additional 3.1 MPa stimulation, injectivity had once more increased to 1.3 to 1.4 kg s<sup>-1</sup> MPa<sup>-1</sup> . Another 22-day shut-in was followed by injection at the final WHP of 3.7 MPa for 9 days. Once again, injectivity had decreased during shut-in to an initial value of 0.7 kg s<sup>-1</sup> MPa<sup>-1</sup> , but returned to a value of 1.4 kg s<sup>-1</sup> MPa<sup>-1</sup> by the end of the 9-day stimulation. 

208 During the shear stimulation phase, only one microearthquake was detected [8]. However, as the 209 detection threshold of the monitoring network during this phase was Mw ~0.5, the occurrence of lower210 magnitude events cannot be ruled out. 

## **2.3 Injectivity loss** 

212 The Desert Peak stimulation plan called for a phase of chemical stimulation by acid injection to 213 follow the shear stimulation phase. The chemical stimulation showed no net improvement to injectivity 214 and is not part of the modeling study presented here. However, prior to beginning chemical stimulation, 215 an injection test was performed on well 27-15, which had been shut in for approximately 45 days since 216 the conclusion of the shear stimulation phase. This test indicated that injectivity had dropped to ~0.35 kg 217 s<sup>-1</sup> MPa<sup>-1</sup> , a reduction of about a factor of four since the well had been shut-in. This result, in addition to 218 similar declines in injectivity when the well was shut in between the shear stimulation steps (discussed 

227 228 

219 above), indicates that a significant part of the stimulated injectivity in well 27-15 was not permanent. This 220 experience is consistent with other reports of operation and stimulation of geothermal injection wells. 221 For example, Grant et al. [10] have compiled productivity and injectivity measurements for 35 dual-use 222 wells in New Zealand geothermal fields and calculated the ratio of injectivity to productivity for each. For 223 30 of these wells, the ratio of injectivity is greater than one (range: 1.2 to 21) for the same wells under 224 conditions of injection compared to production. This behavior is attributed to an increase in fracture 225 apertures either by thermal contraction when the surrounding rock mass is cooled by injected cold water 226 or in response to injection-elevated fluid pressures within those fractures [17 32]. In either of these 227 scenarios, the mechanism for injectivity gain is reversible. 

228 In the case of shear stimulation in hard rocks, however, where self-propping shear failure is 229 responsible for permeability enhancement, inelastic processes may contribute to permeability loss with 230 time. For example, creep fracture closure through crystal plastic deformation or intergranular pressure 231 solution along loaded asperities [13 33], or chemical precipitation in newly-sheared fractures [34 35], 232 could result in a loss of fracture permeability. Such mechanisms are not included in the model described 233 here. In numerical simulations, Taron and Ellsworth [13] reported aperture reduction of 40% over a one234 year period by pressure solution alone. Martin and Lowell [34], modeling precipitation of silica in open 235 fractures (applied to seafloor hydrothermal systems – black smokers), found that permeability reduction 236 by this mechanism occurs over decade-long timescales. The relative importance and timescales over 237 which these mechanisms operate is likely to vary from site to site due to differences in temperature 238 (ambient and during injection), mineral assemblage, water-rock interaction, in-situ stress state, and initial 239 permeability. At Desert Peak, it is possible that both elastic and inelastic processes contribute to the loss 240 in permeability between stimulation phases; however, none have been explicitly considered in our 241 modeling study. 

242 

# **3 Numerical simulation of wellbore cooling** 

243 This modeling study comprises two parts: (i) a wellbore model that predicts temperature and 244 pressure conditions at the stimulation depth based on surface temperature of the injected fluid plus 245 borehole injection rate and heat transfer between the well and surrounding rock; and (ii) a reservoir 246 stimulation model for temperature, pressure, stress and permeability at points of fluid egress from the 247 well. Both models are constructed using the coupled thermal-hydrological-mechanical (THM) code Finite 248 Element Heat and Mass transfer (FEHM) [36 37], although model domain and functionality are tailored to 

- 249 the specific problem. In this study, we do not account for injectivity loss during shut-in; as such, the model 

- 250 is only applied to the first three WHP steps corresponding to the first 67 days of the stimulation. 

- 251 FEHM solves for Darcy heat and mass fluxes, and mechanical stresses and displacements in a 

252 deformable porous medium. The governing equations for mass, energy and stress balance are [12] 

258 

259 

260 where 𝜌 , 𝜇 , 𝑈 , and 𝐻 are the density, viscosity, internal energy and enthalpy of the fluid, 𝜙 , 𝜌𝑟 , 𝐶𝑟 , Λ , and 261 𝑘 are the porosity, density, specific heat, thermal conductivity and permeability of the rock, 𝑄𝑚 and 𝑄𝑒 262 are mass and energy source terms, 𝜃 and 𝑘𝑟(𝜃) are the saturation and saturation-dependent relative 263 permeability, 𝝈 and 𝒃 are the stress tensor and body force vector (typically (0,0, 𝑔) for geological 264 applications), 𝝐 and 𝒖 are the strain tensor and displacement vector, 𝜆 , 𝐺 , 𝐸 , 𝛼 and 𝛽 are Lame’s 265 parameter, shear modulus, Young’s modulus, the coefficient of the thermal expansion and the Biot 266 coefficient, 𝑔 is gravity, and 𝑃 and 𝑇 are pressure and temperature.   In the stimulation model, 267 permeability is calculated as a function of 𝝈 (Section 4.1), which is then updated at the end of each time 268 step. 

269 The purpose of the wellbore model is to establish time-varying temperature and pressure for fluid 270 injected into the formation. Injection temperatures at the wellhead were relatively stable at 20-30°C 271 during the stimulation periods, although the injection rate varied from 0.1 kg s<sup>-1</sup> at early times to 3-5 kg s<sup>-</sup> 272 1 as the stimulation proceeded. Down-hole fluid temperature may be in equilibrium with the initial 273 formation temperature at early times; however, as the near wellbore region cooled, and as injection rate 274 into the well increased, the down-hole temperature declined relative to the far field surrounding 275 formations. 

276 One consequence of a cooling column of water inside the wellbore is that fluid density, and thus 277 down-hole pressure, increases. For example, 190°C formation fluid at a pressure of 7.5 MPa has a density 278 of 880 kg m<sup>-3</sup> , approximately 12% less than cold surface water. In contrast, the density of cold-water inside 

286 

290 291 

292 

293 

294 

295 

296 

297 

298 

299 

300 

301 

279 the well will be higher, and the weight of the hydrostatic column proportionally greater. Thus, fluid 280 pressure at the base of the well, once cooled, will exceed that in the formation even in the absence of an 281 applied WHP. To complicate matters, this additional overpressure is not constant, but rather varies 282 according to the temperature profile inside the well, which changes with time due to wellbore cooling and 283 in response to increasing injection rates. Due to the complex nature of these feedbacks, a numerical model 284 is required to estimate non-steady down-hole temperatures (DHT) and pressures (DHP). 

285 

## **3.1 Model construction** 

287 

288 

289 

The wellbore model is summarized schematically in Figure 3A. Fluid entry into the wellbore occurs at the top of the model and fluid exit is assumed to occur at a single point of egress at a depth of 1030 m; this is near to the center of the fluid loss interval observed following the shear stimulation [8]. The full length of the injection well, from the surface to the point of fluid egress, is considered embedded in and in contact with high-temperature rock, the distribution of which is determined by a static temperature profile measured in the well (Figure 3B; [29]). Heat transfer from the rock to the fluid occurs via conduction through the cement and casing. Cooling of the rock due to advection of cold fluid into the formation between the bottom of casing and the fluid egress point is not considered. The fluid flow in the wellbore is taken to be laminar. 

The two-dimensional computational domain is meshed using a radial grid extending 1 km away from the borehole and to the injection depth of 1030 m. A variable mass flow water source is applied at the top of the wellbore with temperature and flow rate of the injected fluid (Figure 3C-D) given by field data from the first three pressure stimulations (WHP ≤ 1.7, 2.4 and 3.1 MPa). This includes periods in which the well was shut in and no injection occurred. The injected water travels down the well, in thermal contact with the borehole wall, and is removed at the base of the well at the same rate it is injected at the top. 

302 Representative thermal properties for the steel, cement and reservoir rock are given in Table 1. 303 The wellbore model is calibrated against two temperature profiles taken during the stimulation. The first 304 (Figure 4B, red curves) was a static temperature profile obtained after a 12-day shut-in following the 305 second 3.1 MPa stimulation; for this profile, the model successfully captures the degree of reheating 306 within the wellbore. The second profile (blue curve) was measured after a short period of injection 307 following the 12-day shut-in; here, the model captures the magnitude of cooling in the wellbore. 

308 

322 323 

324 

325 

326 

327 

328 

329 

330 

## **3.2 Model results** 

309 For the two lower pressure stimulations ( ≤ 1.7 and ≤ 2.4 MPa), and at the beginning of the 310 medium pressure stimulation (3.1 MPa), the injection rate is relatively low; consequently, the down-hole 311 temperature remains high, between 150 and 190°C. Injection temperature drops rapidly between 30 and 312 40 days as the stimulation proceeds and injection rates increase. It stabilizes between 40 and 60°C for the 313 remainder of the stimulation. 

314 Several sharp rises are predicted in bottom-hole temperature (Figure 4A); these occur during 315 pumping gaps in the 3.1 MPa stimulation. This is due to a rapid reheating at the base of the modeled 316 wellbore because the reservoir temperature at this depth is still quite high. In practice, the injected fluid 317 exits the wellbore into the formation and should lead to a much greater convective cooling of the 318 surrounding rock than is captured by the wellbore model. Hence, the degree of reheating exhibited at the 319 base of the wellbore is probably excessive. However, this argument does not apply to the rest of the 320 wellbore; here, modeled reheating is reasonably accurate, as indicated by the close match between the 321 modeled wellbore temperature and the static temperature profile in Figure 4A. The rapid temperature 322 increases during modeled shut-in phases are not applied to the reservoir model. 

The additional overpressure attributed to a cold versus hot hydrostatic fluid column is calculated by integrating the temperature dependent fluid density, 𝜌 , from the surface to the injection depth, 𝑧𝑖𝑛𝑗 , and subtracting the down-hole pressure at ambient temperature conditions, 𝑃0 , obtained from equilibrated pressure logs, i.e., 

where 𝑔 is the acceleration of gravity and the pressure dependence of 𝜌 is neglected. The temperature dependence of water density is implemented in FEHM through a rational polynomial fit [36] to data from the NBS/NRC Steam Tables [38]. This additional overpressure is plotted in Figure 4C. 

331 For the low pressure stimulations ( ≤ 1.7 and ≤ 2.4 MPa), where the injection rate is low and 332 temperature in the wellbore is near the far-field value, the additional density correction is relatively small 333 - ~10% of the applied WHP. However, this term increases rapidly between 30 and 40 days in concert with 334 the drop in bottom-hole temperature. For the medium pressure stimulation, it retains a relatively high 335 value of 0.5-0.6 MPa; this is approximately 20% of the applied WHP. This correction is significant, 336 particularly as WHP must be carefully managed within a narrow range so as to exceed the threshold for 337 shear failure (2.1 to 4.8 MPa; Section 2.1) but not so much as to also exceed the threshold for hydraulic 338 fracturing (5.2 MPa). 

339 The modeled bottom-hole temperature and pressure sequences will be used in the next section 340 as a forcing term for the stimulation model. The main benefit of using a complex model for downhole 341 pressures and temperatures is uncertainty reduction in the source term used in the stimulation model 342 described in the next section. If, instead, estimated or average values were used for downhole pressure 343 and temperature, additional uncertainty would be introduced and propagated through to the results of 344 the stimulation model. 

345 

# **4 Reservoir model** 

346 In these simulations, shear stimulation of reservoir rock is captured by a stress-dependent 347 elastic/frictional permeability model. In short, injection of medium-pressure, cold water changes in situ 348 effective stresses, thereby increasing permeability through brittle (frictional) failure. The increase in 349 permeability leads to a corresponding increase in injection rate under constant WHP conditions; this 350 results in a positive feedback, whereby increased injection rates deliver more, colder water, resulting in 351 further increase in permeability and an expanding region influenced by hydraulic stimulation. 

352 We assume an extensional stress regime, with the principal stresses oriented parallel to a Cartesian 353 axis, i.e., 𝜎1 = 𝜎𝑣 = 𝜎𝑍 , 𝜎2 = 𝜎𝐻 = 𝜎𝑌 , and 𝜎3 = 𝜎ℎ = 𝜎𝑋 . This stress state is consistent with the tectonic 354 setting and abundant normal faulting in the Desert Peak region [26 30]. The following sign and symbol 355 conventions are used: 

356 

   1. Stresses are positive in compression. 

- 357 2. The global model and local fracture coordinate systems are denoted by upper ( 𝑋, 𝑌, 𝑍 ) and lower 358 case type ( 𝑥, 𝑦, 𝑧 ), respectively. 

359 

360 

3. Many of the calculations in this work involve the logarithm (base 10) of permeability. We refer to transformed and untransformed quantities using 𝑘 and 𝜅 , respectively, i.e., 𝑘= log10(𝜅) . 

361 

## **4.1 Stress-dependent permeability** 

362 Our model for stress-dependent permeability is based on the concept of a ubiquitously fractured 363 medium. Each control volume in the model – the region of space uniquely associated with a computational 364 node – is assumed to contain a number of through-going, non-intersecting, variably oriented fractures 365 that do not interact mechanically. Each of these fractures has some initial permeability that can change 366 according to the local stresses and a shear-slip (Coulomb) failure criterion. Nodal permeability is calculated 367 as the ensemble sum of all fracture permeabilities, some of which may be enhanced from their original 368 values. Thus, the operation of the permeability model mimics our conceptual understanding of the shear 

369 stimulation; fractures are brought to shear failure by the application of low-temperature, overpressured 370 fluid. 

371 Our method allows arbitrary complexity in the specification of fracture orientations. The 372 distribution can contain any user-specified anisotropy or can be informed by field fracture observations, 373 e.g., outcrop studies or bore-hole image logging. To better understand the existing permeability and stress 374 state in the target formations at Desert Peak, bore-hole image logging of fractures in well 27-15 was 375 undertaken prior to the shear stimulation [27]. The analysis yielded 72 fracture orientations in the 376 stimulation interval; the distribution (Figure 5A) exhibits a low-degree of anisotropy, with a slightly higher 377 density of fractures well-oriented for reactivation in the prevailing stress field. This naturally occurring 378 orientation bias is one source of permeability anisotropy in our model. 

379 As fracture orientations vary within a population, so too do the resolved magnitudes of 𝜏 and 𝜎𝑛 380 on each fracture. The sub-set of fractures oriented such that stress conditions are closest to failure 381 constitutes the optimally-oriented or stress-sensitive fractures [39]; these are generally the first to fail 382 during stimulation. For an extensional stress regime and a friction coefficient of 0.6, the optimally383 oriented fractures dip at 60° and strike parallel to the maximum horizontal principal stress, 𝜎𝐻 . 384 Preferential reactivation of these fractures will result in a greater permeability enhancement parallel to 385 𝜎𝐻 ; this is the second source of anisotropy in the model. 

386 Knowledge of pre-existing fracture orientations is incorporated into the synthetic fracture 387 populations that are generated by the model. The algorithm for constructing these populations is based 388 on sampling a density map constructed from observations of fracture orientations and is outlined below: 

- 389 **(i)** The hemisphere represented by the stereonet in Figure 5A is decomposed into 𝑀 equal-area, 390 evenly-distributed, overlapping spherical caps. Fracture orientation density, in a per-steradian 391 sense, is calculated for each sub-region. For the Desert Peak data, a value of 𝑀= 200 provides a 392 reasonable discretization. However, increased sub-division can improve resolution of the density 393 map where there is sufficient data. 

- 394 **(ii)** A total of 𝑁 synthetic fractures orientations are distributed amongst the 𝑀 hemisphere sub-regions 395 in proportion with the compiled density map. Thus, sub-regions with more fracture observations 396 are assigned a higher number of synthetic fractures. 

- 397 **(iii)** Within each sub-region, fracture orientations are randomly distributed. 

398 

- 399 At the beginning of each simulation, a different set of 𝑁 fracture orientations is constructed and 400 assigned to each computational node. Each fracture population is retained for the duration of the 

404 

405 

406 

407 

408 

409 

410 

411 412 413 

414 415 

416 

417 418 

419 420 

421 

422 

423 

424 

425 

401 simulation; we do not consider the creation of new fractures or stress interactions between proximal 402 fractures undergoing shear. 

403 

All fractures in the model experience and respond to both ambient and induced stresses. Failure of each fracture is assessed in terms of the Mohr-Coulomb criterion, which is here formulated in terms of the excess shear stress, 𝜏𝑒𝑥 , which describes the proximity to failure, 

𝜏𝑒𝑥 = |𝜏| −𝜇𝑠(𝜎𝑛 −𝑃) −𝑆0, (4) 

where 𝜏 and 𝜎𝑛 are the shear and normal stress on the fracture, 𝑃 is the fluid pressure in the fracture, and 𝜇𝑠 and 𝑆0 are the static coefficient of friction and cohesion. Modifications to the stress field on a sub-grid scale due to fracture failure are not considered in this work. 

Excess shear stress is generally less than zero for stable fractures, which indicates the current shear stress on the fracture is too small to overcome the combined stabilizing influence of static friction and cohesion. As 𝜏𝑒𝑥 approaches zero, the fracture becomes critically stressed; when it reaches zero, the fracture fails. Eq. (4) encapsulates two of the mechanisms contributing to this failure in our model: (i) an increase in fluid pressure within the fracture; and (ii) a decrease in the normal stress due to cooling. 

In practice, when a fracture fails in shear, the shear stress on the fracture drops, a shear displacement occurs, and 𝜏𝑒𝑥 drops below zero again. Fracture cohesion may decrease or become zero at this time. However, this post-failure behavior is not fully represented in the model because fractures are not explicitly meshed. Instead, the stress drop and shear displacement are inferred from the continuum stress solution. 

Stress drops are calculated using a static/dynamic friction model [40-42]. Upon failure, it is assumed that the fracture becomes cohesionless and that the friction coefficient drops to some lower dynamic value, 𝜇𝑑 . In practice, slip would accumulate until the balance of forces, still governed by the Mohr-Coulomb failure criterion (Eq. (4)) but now with different parameters, is restored. The modeled stress drop, Δ𝜏 , is given by 

426 Stress drop is calculated only as an intermediate step to obtain permeability enhancement; in this 427 work, the modeled stress solution, i.e., 𝜏 and 𝜎𝑛 , is not modified in response to failure. Thus, ongoing 428 cooling or fluid pressure increases permit Δ𝜏 to continue increasing. This increase is taken as a proxy for 429 continued shear displacement of a fracture, which is calculated by multiplying the stress drop by a fracture 430 stiffness parameter, 𝐾 , similar to the models of Hossain et al. [19] and Rutqvist et al. [20]. In practice, 431 continued fracture displacements would likely be stick-slip in nature, with multiple smaller stress drops. 

434 

435 

436 

437 

438 

439 

440 

441 

442 

443 

444 

445 

446 

447 

448 

449 

450 

451 

456 

- 432 This simplified model for shearing does not account for fracture healing, which would tend to lower 433 permeability. 

Changes in fracture permeability are based on an empirical relationship between shear displacement and permeability enhancement motivated by laboratory sliding experiments by Lee and Cho [43]. They made linear flow measurements on rough, artificial fractures, in granite and marble, for a variety of in situ stresses. As illustrated in Figure 5B, increasing permeability enhancement with shear displacement was demonstrated for both rock types and was correlated with enlargement of the mechanical aperture by non-alignment of asperities. In these experiments, permeability approached a limiting value; this was attributed to asperity degradation or production of flow-inhibiting gouge. At high normal stress, the total permeability increase was less for marbles that for granites; this difference was attributed to the more extensive gouge production. 

The poorly consolidated rhyolites that were the target of stimulation at Desert Peak differ from the granites and marbles tested by Lee and Cho [43]. Nevertheless, it is reasonable to suggest that the underlying physical processes leading to permeability enhancement in marble and granite, e.g., nonalignment of asperities, gouge production, also manifest in other lithotypes. While the relative importance of these processes may vary – for instance, brecciated rhyolites may produce rougher fracture walls – the general form of the relationship should be preserved. Thus, in this work, the Lee and Cho [43] model is used as a template relationship for shear displacement and permeability enhancement. A sigmoidal function is used to describe change in the logarithm of permeability, Δ𝑘 , as a function of shear displacement (Figure 5C), 𝑢 , i.e. 

452 

453 where Δ𝑘𝑚𝑎𝑥 is the maximum change in permeability, and 𝑢5 and 𝑢95 are the shear displacements at 454 which Δ𝑘 is 5 and 95% of the maximum. Because Δ𝑘 is an absolute change in logarithmic-space, it 455 corresponds to a multiplier of the untransformed permeability, i.e., 𝜅<sup>′</sup> = 10<sup>Δk</sup> × 𝜅 . 

## **4.1.1 Ensemble averaging of fracture permeability** 

457 In applying the stress-permeability relationship, the model resolves stresses on each hypothetical 458 fracture plane, evaluates the failure criterion, and infers a stress drop, shear displacement and associated 459 change in fracture permeability. As a final step, we need to compute, for each node, a new permeability 460 tensor in the global frame representing the effective permeability of all fractures associated with that 461 node, stimulated or not. 

466 

472 

473 

474 

475 

476 

477 

478 

488 489 

462 In the local frame, the permeability tensor associated with the 𝑖<sup>𝑡ℎ</sup> fracture, 𝐾𝑓𝑟𝑎𝑐𝑖 , is defined by two 463 equal, in-plane components, 𝜅𝑖 – flow is assumed in the plane of the fracture only, thus, the out of plane 464 component is zero. When rotated to the global frame, 𝐾𝑛𝑑𝑖 has six resolved components. The 465 transformation is given by 

467 where the components of the rotation matrix 𝑅<sup>𝑖</sup> are the direction cosines of the local-frame basis vectors 468 in the global frame. Fracture permeability is expressed in terms of an initial value, 𝜅0𝑖 , and a multiplier, 469 𝑐<sup>𝑖</sup> (𝒏̂) = 10<sup>Δ𝑘</sup> , where the multiplier is calculated based on fracture orientation (as defined by its normal, 470 𝒏̂ ) as described in the previous section. Nodal permeability is obtained by averaging over the 𝑁 fractures 471 associated with the node, i.e., 

where 𝐶𝑗𝑗 is a multiplier for overall nodal permeability in the 𝑗 direction and 𝑟𝑗𝑗𝑖 (𝒏̂) is a term from the transformation between local and global frames, i.e., 𝑟𝑗𝑗𝑖 (𝒏̂) = ((𝑅𝑖)𝑇𝑅𝑖)𝑗𝑗 . Here, we assume initial fracture permeability is equal for all fractures, i.e., 𝜅0𝑖 = 𝜅0 ,. This summation approach is similar to that implemented by Moos and Barton [39] in optimizing well productivity against orientation; however, here we omit Terzaghi’s [44] geometric correction, used to account for the likelihood of intersection between a well and variously oriented fractures. 

479 In this work, we include only the permeability components along the global axes, discarding the 480 off-diagonal terms. This simplification is reasonable in situations where the eigenvectors of the 481 permeability tensor are closely aligned with axes in the global coordinate system and where changes in 482 permeability associated with stimulation do not generate large off-diagonal terms. In our case, due to a 483 distribution of fractures that is only slightly anisotropic, and for which the fracture distribution leads to 484 principal axes of the native permeability tensor that approximately align with the principal stress axes 485 (Figure 5A) we can by aligning principal stresses parallel to the global coordinate axes ensure that off486 diagonal components are small throughout the stimulation process. 

487 For internal consistency with the ensemble averaging approach employed here, the initial nodal 488 permeabilities must satisfy Eq. (8) with 𝑐<sup>𝑖</sup> (𝒏̂) = 1 , i.e., 

490 Thus, in our model, the initial permeability anisotropy is defined by the ensemble of fracture 

491 orientations, i.e., 

492 

496 497 

499 

501 

502 

503 504 505 

506 

507 

508 

509 

510 

511 

512 

513 

514 

516 

493 For the set of fractures imaged at Desert Peak, the initial anisotropy calculated by (10) is 1 : 1.2 : 0.8, i.e., 494 fractures are oriented such that there is a slight preference for flow parallel to the maximum horizontal 495 principal stress. This finding is consistent with concepts of enhanced fluid flow on critically-stressed 496 fracture meshes [45]. 

497 Finally, for the case that each fracture has the same initial permeability, assumed here, the nodal 498 permeability multipliers are obtained by dividing Eq. (8) by Eq. (9) 

500 

## **4.1.2 Demonstration of permeability enhancement** 

Before implementing this stress-permeability relationship in a model for the Desert Peak shear stimulation, it is useful to illustrate its behavior at the nodal level in response to stimulation conditions. We consider a target injection depth of 1000 m and in-situ stresses as determined in the Desert Peak EGS well 27-15, i.e., 𝜎𝑣 is lithostatic, 𝜎ℎ = 0.61𝜎𝑣 , and 𝜎𝐻 = 0.5(𝜎𝑣 + 𝜎ℎ) [3]. For the material properties considered here, 𝜇 =0.6 and 𝑆0 =0, all fracture orientations are stable. 

According to Eq. (4), failure can be caused by increasing fluid pressure within the fracture or decreasing normal stress through cooling. Functionally, the two are equivalent, so here we consider a steady ramping of the pressure to 15 MPa above its initial value. In practice, this would result in 𝑃 exceeding 𝜎ℎ resulting in hydraulic fracturing; however, for the purposes of demonstrating the permeability model this can be ignored. Increases in the three permeability multipliers over this range are plotted in Figure 5D. These curves reflect several features of the conceptual model, including: 

1. Permeability enhancement is not immediate. Rather, some threshold forcing must be overcome before even the most stress-sensitive fractures are brought to failure. 

515 

- 517 

518 

2. Initial permeability enhancement is predominantly parallel to 𝜎𝐻 and 𝜎𝑣 . This is because the planes of stress-sensitive fractures – those first to fail – tend to contain 𝜎𝐻 and are steeply dipping. 

3. In the hypothetical limit that pressure is sufficient to activate all fractures, all permeability multipliers converge. This does not suggest that permeability is now isotropic, only that there is no additional anisotropy supplied by the preferential activation of some fracture orientations and not others. 

519 520 

521 

526 527 

528 

529 530 

531 532 533 

534 535 

536 

537 538 

539 540 

541 

542 

543 

544 

545 

546 

522 523 524 525 

Stereonets plotted at three stages of pressurization in Figure 5D illustrate the concept of preferential activation of stress-sensitive fractures. At low pressure, only the fractures dipping at high angles in the direction of 𝜎ℎ are partially activated (the blue dots) while the others remain inactive (green). With increasing pressure, these orientations become fully activated (black dots), i.e., the limiting permeability is reached, while at the same time, less favorably-oriented fractures fail. Finally, at very high pressures, all fractures are activated. 

It is worth noting that, permeability anisotropy related to the intrinsic distribution of fractures, i.e., 𝜅𝑋0 > 𝜅𝑍0 (Eq. (10)), does not coincide with the initial anisotropy in stimulated permeability, Δ𝑘𝑍 > Δ𝑘𝑋 . The latter arises from preferential stimulation of stress-sensitive fracture orientations; thus, this distinction is illustrative of the complex relationships between ambient stress, intrinsic material properties and injection conditions created during shear stimulation. These considerations are important, for example, when selecting the optimum orientation of a deviated well, which will depend both on the available fracture orientations, as well as the subset that are critically stressed and thus likely to have high natural permeability [39]. 

The curves in Figure 5D represent anisotropic permeability enhancement for the Desert Peak fracture population. However, in our model, each node is associated with a unique fracture population that is informed by the Desert Peak population and is therefore associated with a unique set of permeability multiplier curves. Figure 5E illustrates 20 sets of such curves corresponding to 20 different synthetic fracture sets. These indicate that the features of the curves in Figure 5D are generally preserved, for example, greater immediate permeability gains in the 𝜎𝐻 and 𝜎𝑣 directions. 

A similar approach for permeability enhancement was applied by Moos et al. [46] in modeling shear stimulation of a shale reservoir. However, in their model, permeability enhancement curves included a component of elastic dilation associated with opening of fractures under elevated pressures. The elastic component of permeability enhancement was lost during unloading (production of the well) while the shear enhancement was retained. Elastic dilation of fractures is not modeled here, although its relevance to the Desert Peak shear stimulation is discussed later. 

547 The permeability model used here chooses to not explicitly resolve fracture planes but rather to 548 approximate their flow properties at the sub-gridscale. Resolving an explicit fracture mesh would allow a 549 greater range of physics to be captured, such as preferential flow on fractures of varying dimension and 550 permeability or, possibly, mechanical interaction between the fractures. However, such complexities are 551 not without their own drawbacks. For example, in the absence of high level site characterization, a given 552 fracture mesh might be quite arbitrary, even if its statistical properties are well constrained. In such 

559 

560 

561 562 

563 

564 565 

566 

567 

568 

569 

570 

571 

572 

573 

574 

575 

576 

577 

578 

579 

580 

581 

582 583 

- 553 situations, meaningful results are obtained by analyzing many realizations of the fracture mesh, which 554 then averages out part of the discrete character. 

#### 555 

556 

557 

558 

## **4.2 Model setup** 

The computational domain comprises one eighth of a cuboid spanning 4 × 4 km horizontally, and 1.84 km vertically (actual dimensions 2 × 2 × 0.92 km). Injection occurs at the lower corner of the domain corresponding to the depth of major loss during stimulation; mesh resolution at the fluid egress point is 3 m. The minimum and maximum horizontal principal stresses are aligned with the 𝑋 and 𝑌 axes, respectively. This ensures that off-diagonal components of the enhanced permeability tensor are very small. All model boundaries are closed to heat and mass flow except the top surface where pressure is fixed as atmospheric. Roller boundary conditions are applied at the lateral and lower boundaries, enforcing zero normal displacement, while a no-traction boundary condition is applied at the upper boundary, corresponding to the free surface of the Earth. 

Ambient vertical gradients in the principal stresses are applied as an initial condition. The magnitude of 𝜎𝑣 is given by the overburden, while the magnitude of 𝜎ℎ was determined from a hydraulicfracturing test to be 0.61 𝜎𝑣 at the top of the stimulation interval [3]. It is assumed the ratio between 𝜎ℎ and 𝜎𝑣 is preserved with depth. The magnitude of 𝜎𝐻 is expected to lie somewhere between 𝜎𝑣 and the midpoint of 𝜎ℎ and 𝜎𝑣 [3]; here, we use the lower bound ( 𝜎𝐻 = (𝜎𝑣 + 𝜎ℎ)/2 ), which is consistent with the predominance of normal faulting in this area. 

As in the wellbore model, initial temperatures in the reservoir are derived from a static downhole temperature log collected before the stimulation (Figure 3B). Our initial temperature model is 1D and thus we do not account for any pre-existing horizontal variability in the temperature field such as might be expected in proximity to an operating geothermal system. Fluid pressure in the system is initially hydrostatic and corresponds to a water table 116 m below the ground surface [3]. However, approximately one year prior to the stimulation, the well was plugged to the bottom of the stimulation interval and was intermittently filled to the surface with water. Therefore, pressure in the near well region could be up to 1.1 MPa higher than modeled here. 

Injection of fluid is modeled as a single source term at the lower corner node in the model domain. Water, at time-varying temperature, flows into the domain at a rate proportional to the pressure difference between the source and the node. Time-dependent source temperature and pressure are derived from the wellbore model described in Section 3.2 (Figure 7A-B); the pressure includes a density correction due to the evolution of a cold-hydrostatic column of water in the well a correction due to the 

589 590 

591 592 593 

594 595 

598 

601 

602 

603 

604 

605 

606 

607 

611 612 

613 

584 116 m distance between the wellhead and water table. These corrections amount to more than 1.5 MPa 585 of additional overpressure during late stages of the stimulation. The model runs for the first 67 days of 586 the stimulation, which is sufficient to capture the two low-pressure steps ( ≤ 1.7 and ≤ 2.4 MPa) and the 587 first medium pressure step (3.1 MPa). Subsequent steps are preceded by extended periods of shut-in 588 during which time some recovery of injectivity is observed (Figure 2); as we do not account for loss of 589 enhanced permeability, we do not model these periods of shut-in and the subsequent injection steps. 

596 

Many thermal and elastic properties of the stimulated formations at Desert Peak were constrained during a comprehensive material and reservoir characterization effort undertaken prior to the stimulation [3 7 27]. Nevertheless, there is some latitude in selecting an initial reservoir permeability that gives a good match to the pre-damage injection rate. Furthermore, fracture failure and enhancement parameters are not tightly constrained and can be adjusted to capture the timing of injectivity increase. Finally, Δ𝑘𝑚𝑎𝑥 (see Eq. (6)), the limiting permeability increase per fracture, is used to match the amount of injectivity gain. Material properties of the final calibrated model are given in Table 2. 

597 

## **4.3 Model results** 

599 

600 

608 

609 

610 

614 

Figure 7 summarizes down-hole temperatures and pressures and the model match to measured injection rates and injectivity for the first three pressure steps of the Desert Peak shear stimulation. Reported values of WHP and injection rate [8] were available for the first stimulation ( ≤ 1.7 MPa); the model matches the injection rate of 0.2 kg s<sup>-1</sup> , corresponding to a calculated injectivity of ~0.15 kg s<sup>-1</sup> MPa<sup>-</sup> 1. During the second stimulation, a higher overpressure is applied ( ≤ 2.4 MPa) resulting in a higher injection rate (~0.25 kg s<sup>-1</sup> ). Injectivity, measured and modeled, remains stable for these first two pressure steps as the overpressure and cooling are not sufficiently large to induce shear failure in the rock. Additionally, for the first five days of the 3.1 MPa stimulation, an increase in overpressure corresponds to a further gain in the injection rate (~0.35 kg s<sup>-1</sup> ), but an unchanged injectivity. 

Substantial injectivity gains begin to occur approximately 5 to 6 days into the 3.1 MPa stimulation (~day 35 in Figure 7D). During the following five days, injectivity increases by approximately a factor of 5. Accompanying the increase in injection rate is a drop in the modeled down-hole temperature from 150 to 60°C (Figure 7A). For operational reasons, there was a 3-day shut-in, during which time injectivity declined by ~0.2 kg s<sup>-1</sup> MPa<sup>-1</sup> . Pumping resumed for another 7 days, after which a second 3-day shut-in resulted in a smaller injectivity decline of ~0.1 kg s<sup>-1</sup> MPa<sup>-1</sup> . Sporadic pumping over the next 15 days resulted in the measured injectivity rising to between 1.2 and 1.4 kg s<sup>-1</sup> MPa<sup>-1</sup> ; in total, leading to an 8- to 9-fold increase over the original value. 

632 

615 Overall, the model match of injection rate and injectivity to observed field values during all three 616 pressure stimulations is good (Figure 7C). Calibration of the initial model permeability using data from the 617 first two pressure steps and the first five days of the third pressure step ensures a reasonable match to 618 injectivity prior to the onset of damage. The timing of damage onset between days 32 and 36 is 619 approximately captured by the model, although the gradient of the modeled injectivity curve is steeper 620 than the data. Modeled injectivity between days 43 and 48 are flatter than the data indicate; however, 621 the match is improved following the second 3-day shut-in, in spite of sporadic pumping. A good match to 622 late-time injectivity in the range of 1.2 to 1.4 kg s<sup>-1</sup> MPa<sup>-1</sup> is achieved using a fracture permeability 623 multiplier of 50 ( Δ𝑘𝑚𝑎𝑥 = 10<sup>50</sup> = 1.7 ); however, as our model does not account for concurrent elastic 624 mechanisms of permeability enhancement, the value of Δ𝑘𝑚𝑎𝑥 required to match the observed injectivity 625 gain is probably an overestimate. 

626 

# **5 Results and discussion** 

627 

## **5.1 Near-well permeability and pressure evolution** 

628 

629 

630 

631 

633 

Taking a broader view of the WHP=3.1 MPa stimulation, for an applied overpressure that varies between 3 and 4.5 MPa (Figure 7B), the injection rate increases from 0.35 to more than 4 kg s<sup>-1</sup> over a ~50 day period. Clearly, changes in permeability and fluid flow are taking place in the sub-surface. In the model, the injection rate is calculated in terms of the local permeability and the pressure difference between the well and formation. More formally, mass flow, 𝑄 , is given by 

634 where 𝜅 is permeability, 𝜌 and 𝜇 are the density and viscosity of the fluid, ∇𝑃 is the pressure gradient, 635 and the effects of gravity have been neglected. In the case that 𝜌 and 𝜇 can be assumed constant, the rate 636 of increase of injection rate is given by 

637 

638 i.e., there is a contribution due to (i) an increase in local permeability and (ii) a change in formation 639 pressure gradients, i.e., 𝑑∇𝑃/𝑑𝑡> 0 . 

640 While the first effect is obviously in operation – injectivity will not increase if permeability does 641 not – we propose that the second effect also plays a role at later time. The conceptual model implemented 642 here is that the permeability of a stimulated fracture eventually reaches some maximum value (Figure 5), 643 i.e., 𝜅→𝜅𝑚𝑎𝑥 ; consequently, the time derivative of permeability must tend to zero, i.e., 𝑑𝜅/𝑑𝑡→0 in 

644 Eq. (13). Enhanced permeability at the injection well has reached this upper limit by day 40 (Figure 8A); 645 nevertheless, injection rates continue to rise (Figure 7C). Setting 𝑑𝜅/𝑑𝑡= 0 , and writing the near-well 646 pressure gradient, ∇𝑃 , in terms of the pressure difference between the well, 𝑃𝑤𝑒𝑙𝑙 , and the stimulated 647 part of the reservoir, 𝑃𝑟𝑒𝑠 , Eq. (13) can be rewritten 

648 

649 where 𝐿 , is some length across which the pressure difference is measured. In the case that applied 650 overpressure is steady, 𝑑𝑃𝑤𝑒𝑙𝑙/𝑑𝑡= 0 , in which case changes in the injection rate are due to the 651 −𝑑𝑃𝑟𝑒𝑠/𝑑𝑡 term in Eq. (14). Essentially, pressures in the reservoir must decline if injection rates are to 652 increase. In the present model, the time varying behavior of 𝑃𝑤𝑒𝑙𝑙 (Figure 7B) can make such a decline in 653 𝑃𝑟𝑒𝑠 difficult to detect. Nevertheless, by selecting two times with similar values for 𝑃𝑤𝑒𝑙𝑙 (days 40 and 63), 654 we show that this pressure drop indeed exists (Figure 8A). The effect is to steepen pressure gradients near 655 the well, thereby supporting a higher injection rate for the same nominal overpressure above the far-field 656 reservoir pressure. 

657 A similar pressure decline in the stimulated volume was invoked by Lewis et al. [47] in formulating 658 closed-form analytic solutions for the propagation of sub-surface, thermally-induced damage fronts and 659 attendant injection rates during fixed pressure injection. 

660 

## **5.2 Stimulation by overpressure and “under”-temperature** 

661 Modeled profiles of formation overpressure shown in Figure 8A illustrate the difficulty in relying 662 on this mechanism alone for propagating a front of shear damage. In an open system, the static pressure 663 profile for radial flow from a well at fixed pressure, has an 𝑟<sup>−1</sup> dependence, i.e., pressure falls off near 664 the well. At early time, this is not a problem, as the stimulated zone is small or non-existent and sufficiently 665 large pressures do not need to be propagated very far to cause damage. However, as the stimulation zone 666 grows, failure must occur at a greater distance from the well; eventually a point will be reached where 667 the pressure drop between the well and the damage front is so large that the remaining overpressure is 668 no longer sufficient to cause failure. At Desert Peak for example, failure is expected for Δ𝑃𝑐𝑟𝑖𝑡 between 669 2.1 and 4.8 MPa [3] (see Section 2.1); however, modeled pressure profiles (Figure 8A) show that with 670 increasing distance, the formation overpressure will eventually fall below even the lower bound of this 671 threshold. One method to counteract this drop is to increase the WHP; essentially to displace the pressure 672 profiles in Figure 8A upward. However, this too, presents a challenge, as WHP is fundamentally limited by 673 the magnitude of 𝜎ℎ - if bottom-hole pressure exceeds this value, a hydraulic fracture will be formed. 

674 

679 

680 

681 

682 683 

684 

685 

686 

687 

688 

689 

690 

691 

692 

693 

694 

695 

696 

697 

698 

699 

675 676 677 678 

Damage by thermal stressing is not as limited as that by overpressure. Inside the damage zone, due to elevated permeability, heat is advected to the damage front with very little drop in temperature. In comparison to the 𝑟<sup>−1</sup> radial dependence of pressure, the temperature profile adopts the form of an error or sigmoid function (Figure 8A, bottom panel) with relatively sharp temperature change (in comparison to pressure) taking place at the propagating damage front. Thus, the value of thermoelastic stressing – “under”-temperature – as an agent of stimulation at expanding radial distance from the injection well is preserved. Note that, at day 63, the damage front appears to have propagated much further into the formation than the low temperature front to which damage is attributed. This occurs due to non-local stress changes associated with the large thermal strain induced around the well and is discussed in greater detail in the following section. 

Accumulation of thermoelastic stress is nevertheless limited by overpressure, which directly controls the injection rate; this has two effects: (i) it controls the volume delivery rate of cold water to the formation; and (ii) it indirectly influences the temperature at which water enters the formation – faster injection rates mean less heating in the well and lower fluid temperatures going into the stimulated rock formation (Figure 4B). The first effect controls the rate of thermoelastic stressing while the second effect controls its magnitude. 

The second effect implies that initial injection rate must exceed some critical value at which water delivered to the formation is cold enough to promote stimulation, by working in concert with the direct effects of excess fluid pressure to reduce the effective normal stress across fractures favorably oriented for shearing. Some locations are sufficiently permeable (e.g., Ngatamariki geothermal field, New Zealand; [10]) that this critical injection rate is achieved at 0 WHP, i.e., formation overpressure is achieved by a depressed water table and density correction effects alone (Figure 7B). However, at Desert Peak, the injection rate during the ≤ 1.7 and ≤ 2.4 MPa stimulations was low enough that the injectate was only 20°C cooler than ambient formation temperature when it left the well; thus, normal stress reductions across potential shear fractures were insufficient to drive these fractures into failure at these low excess fluid pressures. 

700 A critical injection rate for thermally enhanced shear stimulation can be achieved by either 701 increasing permeability by some other means, e.g., controlled hydraulic fracturing or acid stimulation, or 702 by increasing the injection overpressure. In the case of Desert Peak, increasing WHP from 2.4 to 3.1 MPa 703 sufficiently increased injection rates that shear stimulation – due to the combined effects of cooling and 704 fluid overpressure in promoting Coulomb failure – was observed after six days. However, if initial 705 injectivity is low enough, increasing WHP may result in uncontrolled hydraulic fracturing before this critical 

710 

712 

713 

714 715 

716 

717 

718 

719 

720 

721 

722 

723 

725 

728 

729 

730 

731 

733 

706 injection rate is achieved. Thus, preparatory stimulation treatments, e.g., acid injection or controlled 707 hydraulic fracturing at pressures slightly in excess of 𝜎ℎ , may be necessary to ensure the initial injection 708 rate is sufficiently high to create a pervasive network of stimulated, self-propping shear fractures. 

#### 709 

## **5.3 Stress changes** 

711 

724 

In the results produced by our model, changes to the total stress during stimulation are largely due to cooling caused by injection. Although overpressure is important in assessing the fracture failure criterion (Eq. (4)), it provides only a small modification to stress through the poroelastic term in the force balance. To illustrate the direct and non-local effects of cooling, in Figure 8C we plot changes in stress components (along the same radial profile as Figure 8A) for an optimally oriented fracture (dipping at 60° to 𝜎ℎ ). Thermoelastic effects are volumetric and thus their direct effect is a reduction of the normal stress. The decrease in normal stress is greatest near the wellbore where cooling is also a maximum; with increasing distance, the profile mirrors that of temperature (Figure 8A) in producing an error function type shape. Given the relatively shallow depths at which stimulation occurs, normal stress changes of ∼ -30 MPa at the wellbore are sufficiently large for the rock to enter a tensile stress state (the pre-injection normal stress for the optimally oriented fracture is ∼ 18 MPa). Tensile failure and normal opening of fractures is not accounted for within our permeability model but would be expected to impart even larger permeability gains than those attributed to shear displacement. Furthermore, normal fracture opening by thermal contraction is a reversible process upon reheating of the formation, which may account for the partial loss of injectivity recorded at Desert Peak during periods when the well was shut-in (Section 2.3). 

726 

727 

732 

The induced thermal stress/strain is also responsible for non-local changes in stress that extend beyond the cooled region. Because the cooled rock is mechanically coupled to the larger rock volume, cooling at the wellbore exerts a stress on the adjacent uncooled rock. This induces horizontal extension at the injection depth, and horizontal compression above and below. Segall and Fitzgerald [48] considered fluid extraction from underground reservoirs – an analogous scenario in which rock contraction is poroelastic rather than thermoelastic – and used the elliptical inclusion method of Eshelby [49] to analyze stresses induced outside the reservoir. Their findings suggested that stress changes outside the reservoir – here termed “non-local” in the sense that such changes do not coincide with the pressure drawdown – were were large enough to trigger seismicity outside the reservoir. 

734 In the scenario modeled here, the induced thermal stress/strain is not constant inside of some 735 defined ellipsoid and thus the relationships derived in [48] are not directly applicable. Nevertheless, the 

754 

756 

- 736 approach is an intuitive means for conceptualizing stress changes outside the cooled region, which here 

- 737 be referred to as “non-local”. Profiles of shear stress change (Figure 8C) show that this non-local stressing 

738 rises to a peak and then declines with distance from the well. The magnitude and distance of the peak 739 from the well both increase as the stimulation proceeds and the cooled rock volume grows. At 63 days, 740 the induced shear stress peaks at > 7 MPa at 16 m distance from the well but remains an appreciable size 741 out to 35 m. 

742 Shear failure of modeled fractures is defined in Eq. (4) in terms of an excess shear stress, 𝜏𝑒𝑥 , 743 which contains contributions from overpressure, normal and shear stress. The relative importance of each 744 of these three terms as a contribution to 𝜏𝑒𝑥 is plotted in (Figure 8D) for the same radial profile from the 745 injection well. Immediately adjacent to the well, where cooling and thermoelastic effects are largest, the 746 component of normal stress reduction is the dominant contribution to failure. However, from a distance 747 of ∼ 18 m out to the edge of the failure front ( ∼ 30 m), non-local shear stress changes provide the larger 748 contribution to failure. This is significant because it suggests that in some situations the failure front might 749 not be advanced by the direct influence of the injected fluid – either through overpressure or thermal 750 contraction – but rather by the non-local stress caused by the accumulating effects of injection behind 751 the front. This scenario has implications for the rate of advance of the failure front, as the rate of pressure 752 diffusion and heat advection will differ between the unstimulated and stimulated rock volumes. 

753 

755 

757 

758 

759 

The results of this section, particularly the spatial extent of non-local stress changes, must be interpreted with caution because the model does not account for plastic effects on the formation due to tensile failure. The theory of plasticity places a limit on the magnitude of stress changes that can be sustained by the material and, in the context of the present model, would limit the magnitude of the tensile stresses generated around the borehole. This in turn is expected to limit the extent and magnitude of non-local stresses to less than those reported by the present model. Nevertheless, non-local effects would continue to play a role in the stimulation. 

760 

## **5.4 Creation of a stimulated volume** 

761 The primary objective of shear stimulation is the creation of a high surface-area flow network 762 from which injected fluids can extract heat. Therefore, the volume of rock stimulated is a key measure of 763 the ongoing success of a stimulation operation. In our model, stimulation is not a binary description of the 764 rock, i.e., unstimulated vs. stimulated, but rather a condition that evolves as more and more fracture 765 orientations are activated (Figure 5D). Therefore, the extent of stimulation must be accounted for in 

770 

771 

772 

773 

774 

775 

776 

777 

778 

779 

780 

781 

782 

766 defining the stimulated volume; here, we use two definition: (i) partially stimulated, defined by Δ𝑘𝑚𝑎𝑥 > 767 Δ𝑘> 0 , i.e., permeability exhibits some enhancement; and (ii) fully stimulated, defined by Δ𝑘= Δ𝑘𝑚𝑎𝑥 , 768 i.e., enhanced permeability has reached its upper limit. Stimulated volumes corresponding to these two 769 criteria, along with the total stimulated volume, are plotted in Figure 8B. 

Consistent with the onset of significant injectivity gain (Figure 7D), growth of the stimulated volume begins around day 37. Except for the two pumping gaps identified in Figure 7D, growth is fairly consistent for the next 30 days of the stimulation. At the end of the WHP 3.1 MPa pressure step, the model predicts a total stimulated volume is ~4.6×10<sup>4</sup> m<sup>3</sup> , which corresponds to an equivalent sphere of radius 21.5 m. Given that our model assumes thermal equilibration between the rock matrix and injected fluid, this number is likely an underestimate of the reservoir volume influenced by fluid injection. A dual permeability model would relax the equilibration requirement and potentially allow thermal effects to propagate further from the well; however, such modifications would add additional free parameters and thus pose additional challenges for model calibration. 

Injectivity measured at the wellhead shows only moderate to small gains after around day 55 (Figure 7D). Therefore, it is particularly interesting to note during this period that there is continued growth of the stimulated volume. In fact, we can define two metrics, related to the volume of injected fluid, that provide a better correlation with the growing volume of stimulation, 

783 

784 

785 where 𝑞(𝑡) is the injection rate (Figure 3D), 𝜙 is porosity, 𝑇𝑖𝑛𝑗(𝑡) is the time varying injection temperature 786 (given as 𝑇𝑜𝑢𝑡(𝑡) in Figure 4B), 𝑇0 is the ambient formation temperature (180°C) and 𝑇𝑠𝑢𝑟𝑓 =30°C 787 represents a lower limit for 𝑇𝑖𝑛𝑗(𝑡) . The first quantity, 𝑄(𝑡) , is the total volume of injected fluid – the 788 injectate – and 𝑄̂(𝑡) refers to the “thermally active” injectate. In the second measure, only fluid below 789 the ambient formation temperature is included as it operates as an agent for thermal stressing. Note that, 790 as for stimulated rock volumes, both these quantities have been divided by porosity to represent the 791 volume of space that this pore fluid would occupy. 

792 There is a close correlation between 𝑄̂(𝑡) and the total stimulated volume; this occurs because in 793 our model thermoelastic stresses are the dominant factor driving failure during shear stimulation, 794 especially away from the wellbore. Furthermore, a flattening of the injectivity curve (Figure 7D) does not 795 necessarily imply that the stimulated zone has stopped growing; only that pressure gradients near the 796 well are not changing rapidly. 

## 797 **5.5 Model sensitivities** 

798 As discussed earlier, several aspects of the simulated injectivity curve (Figure 7D) are sensitive to 799 input parameters of the model. For the Desert Peak stimulation, many of these parameters are 800 constrained (Table 2), either by the pre-stimulation site characterization, laboratory testing on core or the 801 results of a wellbore simulation (e.g., injection overpressure and temperature, Figure 4). Nevertheless, it 802 is worth discussing some of the more general model sensitivities, as these illustrate the underlying 803 physical mechanisms that control failure and injectivity enhancement. 

804 In our conceptual model, shear stimulation occurs when the Mohr-Coulomb Failure criterion is 805 met. Assuming that ambient stresses do not immediately satisfy the failure criterion, but rather must be 806 perturbed toward a state of failure, then for a general system, the time at which injectivity first begins to 807 rise will be sensitive to: 

- 808 1. Ambient differential stress: loosely parameterized in a normal faulting stress regime as 𝜎𝑣 −𝜎ℎ . 809 The larger this quantity, the closer a system is to failure and the smaller the fluid pressure or 810 thermo-elastic stress perturbation required to bring about changes in injectivity. 

- 811 2. Material parameters present in the Mohr-Coulomb failure criterion, i.e., friction coefficient and 812 cohesion. Larger values increase the resistance of fractures to failure, thereby requiring larger 813 fluid pressure or stress changes before permeability enhancement occurs. However, our 814 simulated onset time is not strongly sensitive to the range of values for 𝜇 , 0.65 to 0.96, 815 appropriate to the formations stimulated at Desert Peak [7]. 

- 816 3. Injection pressure and temperature: at higher WHP, cold water is injected into the well, and 817 delivered to the formation, at a greater rate (Figure 8C). As a result, in addition to greater 818 reduction in effective normal stress due to rises in fluid pressure, thermoelastic stresses 819 accumulate more rapidly. Furthermore, as the water spends less time in the well, any heating by 820 the wellbore is minimized and colder water is delivered to the formation (Figure 4B); this increases 821 the magnitude of thermoelastic stresses. It also increases the down-hole pressure for a given WHP 822 – through the additional weight of a cold water column – that provides an additional boost to the 823 injection rate and a greater reduction in effective normal stress across potential shear surfaces 824 due to the direct fluid pressure effect. 

- 825 4. Thermoelastic rock properties, i.e., Young’s modulus and coefficient of thermal expansion: These 826 control the magnitude of thermal stresses that are induced, similar to injection temperature. 

828 

829 

834 

827 

5. Initial permeability/injectivity: With the excess fluid pressure, this controls the initial injection rate. A higher permeability facilitates enhanced rock cooling and greater accumulation of thermal stresses. 

830 Many of the aforementioned parameters are material in nature and, except in choosing a site and 831 formation to stimulate, are outside operator control. Nevertheless, constraining these parameters 832 through direct in-situ and laboratory testing is important for construction of a well-calibrated model and 833 design of a wellbore stimulation procedure optimized for a particular site. 

835 

836 

Other parameters, such as injection pressure and temperature, can be varied by an operator to achieve desired stimulation goals. In the case of Desert Peak, WHP was stepped up in increments of 0.60.9 MPa; as a direct result, significant stimulation was achieved for WHP 3.1 MPa. 

837 

# **6 Conclusion** 

838 Hydraulic well stimulation at pressures less than the minimum principal stress is increasingly 839 commonplace in geothermal fields. The technique enhances the permeability of existing fractures through 840 self-propping shear failure and aims to create a stimulation volume with tortuous percolation pathways 841 and high fracture surface area. Shear stimulation applied at Desert Peak resulted in an order-of-magnitude 842 increase in the injectivity of well 27-15. 

843 A 2D wellbore model was constructed (Figure 3) to describe bottom-hole temperature and 844 pressure conditions in well 27-15 during stimulation. Results indicated that bottom-hole injection 845 temperature varies from 180°C at early time and low injection rate to as low as 30°C for the high injection 846 rates occurring at the end of the stimulation (Figure 4B). Cooling and density increase of the wellbore fluid 847 also contributes to bottom-hole overpressure; the calculated correction is as large as 0.6 MPa during later 848 stages of the stimulation. 

849 A second model was constructed to describe injection of cold- water into the target formation, 850 the associated effects on stress and permeability, and the injectivity evolution of well 27-15 with time. A 851 sub-grid-scale model for fracture permeability enhancement in response to Mohr-Coulomb failure and 852 shear displacement is used to describe permeability as a function of induced stress changes (Figure 5). 853 The model is constrained by measurements of ambient pressure, temperature and stress state, as well as 854 material, mechanical and fracture properties appropriate for the stimulated formations at Desert Peak. 

855 The well stimulation model yields a reasonable match to the injection rate and well injectivity 856 recorded during the two low pressure and one medium pressure shear stimulations (Figure 7). In our 857 model, the evolving injection rate is not prescribed, but is instead determined by the time-varying bottom- 

863 864 

865 866 

867 

868 869 

870 871 872 

873 

874 875 

876 

877 

858 hole pressure (informed by the wellbore model) and ongoing permeability enhancement. Thus, recorded 859 injection rates provide a calibration dataset for accurate representation of near-well permeability 860 evolution. A lack of response of injectivity to injection at low WHP is reproduced by the model; during 861 these stages, the pressure of the injected fluid is too low, and the temperature change in the formation 862 not large enough, to cause shear failure. The onset of injectivity gain and final injectivity values are 863 approximately matched although further calibration efforts may yield improvements. 

The stimulated volume created around the injection interval grows steadily following the onset of injectivity gains around day 35. Interestingly, at later time when injectivity gains are so small as to be obscured by noise in the pumping data, the stimulated volume continues to grow at an appreciable rate. During this period of the stimulation, other measurement techniques, e.g., microseismic monitoring or geochemical tracer studies, may be required assess the evolution of the system. 

Pressure drops off rapidly with distance from the well; at several meters, pressure is too low to cause shear failure (Figure 8A). Nevertheless, failure continues to occur and is accompanied by ongoing propagation of the damage front into the target formation. Failure is now being promoted at relatively low excess fluid pressures by thermal and non-local stresses produced by a low temperature zone that grows around the wellbore. Further evidence that stimulation is thermally enhanced is provided by a good correlation between the volume of thermally-active injectate (Eq. (16)) and the volume of the stimulated region (Figure 8B). However, while the direct and non-local effects of thermal contraction play a key role in propagating the damage front, the applied WHP plays an equally important role in advecting the lowtemperature fluid into the formation, without which failure would not occur. 

878 Two features of the shear stimulation not currently addressed by the model are the loss of 879 injectivity during periods of shut-in and the absence of recorded microseismicity during the injection. 880 These observations can be accounted for if permeability enhancement is entirely attributed to elastic 881 dilation of fracture apertures either by pressurization or thermal contraction (and the reverse process 882 during shut-in). While a purely elastic mechanism cannot be discounted, there are several reasons to 883 expect that shear failure played a significant role in the stimulation. First, formation pressure, principal 884 stress components and frictional properties of in situ fractures measured at Desert Peak predict a critical 885 overpressure for shear failure of 2.1 to 4.8 MPa (Section 2.1), which is within the range achieved during 886 the stimulation (2.8 to 4.8 MPa, Figure 7B). Second, injectivity was observed to be stable for the two lower 887 pressure steps (WHP ≤ 1.7 and ≤ 2.4 MPa) but then to abruptly increase during the WHP ≤ 3.1 MPa step; 888 this suggests exceedance of a critical pressure threshold as required by a shear failure model. Finally, it is 889 possible that seismicity was triggered during shear stimulation at Desert Peak but that the magnitude was 

890 below the detector threshold. For an estimated network sensitivity of M 0.2 and supposing a Brune-type 891 earthquake model of uniform stress drop (0.1 – 10 MPa) on a circular crack, then slip on fractures of 892 dimension 4.4 – 20.5 m would go undetected. In other words, only microearthquakes with source 893 dimensions approaching that of the modeled stimulation zone would be detectable. Alternative 894 permeability recovery mechanisms to account for the loss of injectivity during periods of well shut-in 895 include inelastic deformation or chemical sealing of the sheared fractures. 

896 Future modifications of the model are intended to address some of the shortcomings noted here, 897 in particular: (i) use of a hybrid elastic/shear enhancement model to address partial injectivity loss during 898 shut-in, and (ii) use of a continuum plasticity model to avoid non-physical stresses in excess of either Mohr 899 Coulomb or tensile failure, with permeability enhancement a function of the plastic strain tensor. Finally, 900 a generalized parameter study, investigating aspects of the stimulation geometry, how these depend on 901 underlying fracture properties and in-situ stresses, and how they influence optimal design of the injection 902 operation, would provide a greater understanding of the complex stimulation process. 

903 

# **7 Acknowledgements** 

904 The authors wish to thank Ezra Zemach for valuable discussions pertaining to Desert Peak field operations. 905 Funding for this work was provided by US DOE Office of Geothermal Technologies under Work 906 Authorization No. GT-1000036-12_Revision 1. The coupled flow and stress numerical simulation 907 capabilities in FEHM applied for this work were developed at LANL under the Zero Emission Research & 908 Technology (ZERT-II) project funded by US DOE through its CO2 sequestration R&D program. The authors 909 thank Jonny Rutqvist and Robert Zimmerman for helpful comments that improved the manuscript. 

910 

# **8 References** 

911 

- 912 1. Barton C, Zoback M, Moos D. Fluid-flow along potentially active faults in crystalline rock. Geology 913 1995; **23** (8):683-86. 

- 914 2. Townend J, Zoback M. How faulting keeps the crust strong. Geology 2000; **28** (5):399-402. 

- 915 3. Hickman SH, Davatzes NC. In-situ stress and fracture characterization for planning of an EGS stimulation 

- 916 in the Desert Peak geothermal field, Nevada. 35th Workshop on Geothermal Reservoir Engineering. 

- 917 Stanford, CA, 2010. 

- 918 4. Hickman SH, Zoback MD, Barton CA, Benoit R, Svitek J, Summers R. Stress and Permeability 919 Heterogeneity within the Dixie Valley Geothermal Reservoir: Recent Results from Well 82-5. 25th 

- 920 Workshop on Geothermal Reservoir Engineering. Stanford, CA, 2000. 

- 921 5. Davatzes NC, Hickman SH. The Feedback Between Stress, Faulting, and Fluid Flow: Lessons from the 

- 922 Coso Geothermal Field, CA, USA. World Geothermal Congress. Bali, Indonesia, 2010. 

- 923 6. Henneberger R, Browne P. Hydrothermal alteration and evolution of the Ohakuri hydrothermal system, 924 Taupo Volcanic Zone, New Zealand. Journal of Volcanology and Geothermal Research 1988; **34** (3-4):211925 31. 

- 926 7. Lutz SJ, Hickman S, Davatzes N, Zemach E, Drakos P, Robertson-Tait A. Rock Mechanical Testing and 927 Petrologic Analysis in Support of Well Stimulation Activities at the Desert Peak Geothermal Field, Nevada. 928 35th Workshop on Geothermal Reservoir Engineering. Stanford, CA, 2010. 

- 929 8. Chabora E, Zemach E, Spielman P, et al. Hydraulic Stimulation of Well 27-15, Desert Peak Geothermal 930 Field, Nevada, USA. 37th Workshop on Geothermal Reservoir Engineering. Stanford, CA, 2012. 

- 931 9. Garcia J, Walters M, Beall J, et al. Overview of the Northwest Geysers EGS Demonstration Project. 37th 

- 932 Workshop on Geothermal Reservoir Engineering. Stanford, CA, 2012. 

- 933 10. Grant MA, Clearwater J, Quinao J, Bixley PF, Le Brun M. Thermal stimulation of geothermal wells: a 934 review of field data. 38th Workshop on Geothermal Reservoir Engineering. Stanford, CA, 2013. 

- 935 11. Aqui AR, Zarrouk S. Permeability Enhancement of Conventional Geothermal Wells. 33rd New Zealand 936 Geothermal Workshop. Auckland, New Zealand, 2011. 

937 

   12. Kelkar S, Lewis K, Karra S, et al. A simulator for modeling coupled thermo-hydro-mechanical processes 

- 938 in subsurface geological media. International Journal of Rock Mechanics and Mining Sciences 939 2014; **70** :569-80. 

- 940 13. Rutqvist J, Wu Y-S, Tsang C-F, Bodvarsson GA. A Modeling Approach for Analysis of Coupled Multiphase 941 Fluid Flow, Heat Transfer, and Deformation in Fractured Porous Rock. International Journal of Rock 942 Mechanics and Mining Sciences 2002; **39** (4):429-42. 

- 943 14. Kolditz O, Bauer S, Bilke L, et al. OpenGeoSys: an open-source initiative for numerical simulation of 

- 944 thermo-hydro-mechanical/chemical (THM/C) processes in porous media. Environmental Earth Sciences 945 2012; **67** (2):589-99. 

- 946 15. Taron J, Hickman S, Ingebritsen SE, Williams C. Using a fully coupled, open-source THM simulator to 947 examine the role of thermal stresses in shear stimulation of enhanced geothermal systems. 48th US Rock 948 Mechanics/Geomechanics Symposium. Minneapolis, MN, 2014. 

949 16. Podgorney R, Huang H, Gaston D. Massively parallel fully coupled implicit modeling of coupled 950 thermal-hydrological-mechanical processes for enhanced geothermal system reservoirs. 35th Workshop 951 on Geothermal Reservoir Engineering. Stanford, CA, 2010. 952 17. Nathenson M. The dependence of permeability on effective stress from flow tests at hot dry rock 953 reservoirs at Rosemanowes (Cornwall) and Fenton Hill (New Mexico). Geothermics 1999; **28** (3):315-40. 

954 

955 

956 

957 

   18. Bai M, Meng F, Elsworth D, Roegiers J. Analysis of stress-dependent permeability in nonorthogonal flow and deformation fields. Rock Mechanics and Rock Engineering 1999; **32** (3):195-219. 

   19. Hossain M, Rahman M, Rahman S. A shear dilation stimulation model for production enhancement from naturally fractured reservoirs. SPE Journal 2002; **7** (2):183-95. 

- 958 20. Rutqvist J, Leung C, Hoch A, Wang Y, Wang Z. Linked multicontinuum and crack tensor approach for 959 modeling of coupled geomechanics, fluid flow and transport in fractured rock. Journal of Rock Mechanics 960 and Geotechnical Engineering 2013; **5** (1):18-31. 

961 

962 

963 

964 

965 

966 

967 

21. Rinaldi AP, Rutqvist J, Sonnenthal EL, Cladouhos TT. Coupled THM Modeling of Hydroshearing Stimulation in Tight Fractured Volcanic Rock. Transport in Porous Media 2014:1-20 

22. Kelkar S, Lewis K, Hickman S, Davatzes DC, Moos D, Zyvoloski G. Modeling Coupled ThermalHydrological-Mechanical Processes During Shear Stimulation of an EGS Well. 37th Workshop on Geothermal Reservoir Engineering. Stanford, CA, 2012. 

23. Modeling Shear Stimulation of the Desert Peak EGS Well 27-15 Using a Coupled Thermal-HydrologicalMechanical Simulator. 47th US Rock Mechanics/Geomechanics Symposium; 2013; San Francisco, CA. 

968 24. Dempsey D, Kelkar S, Davatzes N, Hickman S, Moos D, Zemach E. Evaluating the Roles of Thermoelastic 969 and Poroelastic Stress Changes in the Desert Peak EGS Stimulation. 39th Workshop on Geothermal 970 Reservoir Engineering. Stanford, CA, 2014. 

971 

972 

973 

974 

975 

976 

977 

978 

25. Faulds JE, Coolbaugh MF, Benoit D, et al. Structural Controls of Geothermal Activity in the Northern Hot Springs Mountains, Western Nevada: The Tale of Three Geothermal Systems (Brady’s, Desert Peak and Desert Queen). Geothermal Resources Council Transactions 2010; **34** :675-83 

26. Swyer MW, Davatzes NC. Evaluating the Role of the Rhyolite Ridge Fault System in the Desert Peak Geothermal Field with Robust Sensitivity Testing Through Boundary Element Modeling and Likelihood Analysis. 38th Workshop on Geothermal Reservoir Engineering. Stanford, CA, 2013. 

27. Davatzes NC, Hickman SH. Stress and Fluid Flow Prior to Stimulation of Well 27-15, Desert Peak, Nevada, EGS Project. 34th Workshop on Geothermal Reservoir Engineering. Stanford, CA, 2009. 

979 28. Rose P, Leecaster K, Drakos P, Robertson-Tait A. Tracer Testing at the Desert Peak EGS Project. 980 Geothermal Resources Council Transactions 2009; **33** :241-44 

- 981 29. Zemach E, Drakos P, Robertson-Tait A, Lutz SJ. Feasibility Evaluation of an “In-Field” EGS Project at 982 Desert Peak, Nevada, USA. Proceedings of the World Geothermal Congress. World Geothermal Congress. 983 Bali, Indonesia, 2010. 

- 984 30. Faulds JE, Garside LJ, Oppliger GL. Structural Analysis of the Desert Peak-Brady Geothermal Fields, 985 Northwestern Nevada: Implications for Understanding Linkages between Northeast-Trending Structures 986 and Geothermal Reservoirs in the Humboldt Structural Zone. Geothermal Resources Council Transactions 

- 987 2003; **27** :859-64 

- 988 31. Jaeger JC, Cook NGW, Zimmerman RW. _Fundamentals of Rock Mechanics_ . Oxford: Blackwell Publishing 989 Ltd, 2007. 

- 990 32. Gangi A. Variation of whole and fracture porous rock permeability with confining pressure. 991 International Journal of Rock Mechanics and Mining Sciences 1978; **15** (5):249-57. 

- 992 33. Beeler N, Hickman S. Stress-induced, time-dependent fracture closure at hydrothermal conditions. 993 Journal of Geophysical Research-Solid Earth 2004; **109** (B2). 

- 994 34. Martin J, Lowell R. Precipitation of quartz during high-temperature, fracture controlled hydrothermal 

- 995 upflow at ocean ridges: Equilibrium versus linear kinetics. Journal of Geophysical Research-Solid Earth 996 2000; **105** (B1):869-82. 

- 997 35. Morrow C, Moore D, Lockner D. Permeability reduction in granite under hydrothermal conditions. 998 Journal of Geophysical Research-Solid Earth 2001; **106** (B12):30551-60. 

- 999 36. Zyvoloski GA, Robinson BA, Dash ZV, Trease LL. Models and Methods Summary for the FEHM 

- 1000 Application: Los Alamos National Laboratory, 1999. 

- 1001 37. Zyvoloski G. FEHM: A control volume finite element code for simulating subsurface multi-phase multi1002 fluid heat and mass transfer. Los Alamos: Los Alamos National Laboratory, 2007. 

- 1003 38. Harr L, Gallagher J, Kell GS. _NBS/NRC Steam Tables, Thermodynamics, and Transport Properties and_ 1004 _Computer Programs for Vapor and Liquid States of Water_ . New York: Hemisphere Press, 1984. 

- 1005 39. Moos D, Barton C. Modeling uncertaintly in the permeability of stress-sensitive fractures. 42nd US 1006 Rock Mechanics Symposium. San Francisco, CA, 2008. 

- 1007 40. McGarr A. On relating apparent stress to the stress causing earthquake fault slip. Journal of 1008 Geophysical Research-Solid Earth 1999; **104** (B2):3003-11. 

- 1009 41. McClure MW, Horne RN. Discrete Fracture Modeling of Hydraulic Stimulation in Enhanced Geothermal 

- 1010 Systems. 35th Workshop on Geothermal Reservoir Engineering. Stanford, CA, 2010. 

- 1011 42. McClure MW, Horne RN. Investigation of Injection-Induced Seismicity Using a Coupled Fluid Flow and 

- 1012 Rate/State Friction Model. 37th Workshop on Geothermal Reservoir Engineering. Stanford, CA, 2012. 

- 1013 43. Lee H, Cho T. Hydraulic characteristics of rough fractures in linear flow under normal and shear load. 

- 1014 Rock Mechanics and Rock Engineering 2002; **35** (4):299-318. 

- 1015 44. Terghazi K. _Theoretical Soil Mechanics_ . New York: John Wiley and Sons, 1943. 

- 1016 45. Sibson R. Structural permeability of fluid-driven fault-fracture meshes. Journal of Structural Geology 

- 1017 1996; **18** (8):1031-42. 

- 1018 46. Moos D, Vassilellis G, Cade R, et al. Predicting Shale Reservoir Response to Stimulation in the Upper 

- 1019 Devonian of West Virginia. SPE Annual Technical Conference. Denver, CO, 2011. 

- 1020 47. Lewis K, Karra S, Kelkar S. A Model for Tracking Fronts of Stress-Induced Permeability Enhancement. 1021 Transport in Porous Media 2013; **99** (1):17-35. 

- 1022 48. Segall P, Fitzgerald SD. A note on induced stress changes in hydrocarbon and geothermal reservoirs. 

- 1023 Tectonophysics 1998; **289** (1):117-28. 

- 1024 49. Eshelby JD. The determination of the elastic field of an ellipsoidal inclusion, and related problems. 

- 1025 Proceedings of the Royal Society of London A: Mathematical, Physical and Engineering Sciences 1026 1957; **241** (1226);376-96. 

- 1027 50. Robertson-Tait A, Lutz SJ, Sheridan J, Morris CL. Selection of an interval for massive hydraulic 

- 1028 stimulation in well DP 23-1, Desert Peak East EGS project, Nevada. 29th Workshop on Geothermal 1029 Reservoir Engineering. Stanford, CA, 2004. 

- 1030 

- 1031 

- 1032 

# 1033 **9 Figure captions** 

#### 1034 

- 1035 Figure 1: (A) Map of the Desert Peak geothermal field showing injection and production wells, EGS 1036 stimulation well 27-15 and geothermal power plant (purple rectangle) along with inferred faults [26 30] 1037 and the direction of the maximum horizontal principal stress (H; [27 50]). (B) Stress magnitudes versus 1038 depth in well 27-15 [3]. Vertical stress (V) was calculated from cuttings analysis and density 1039 measurements on core from a nearby well, least horizontal principal stress (h, red square) was measured 1040 by a mini-hydraulic fracturing test, and ambient formation fluid pressure (P, relative to a water table at 1041 115 m depth) was determined from a static, equilibrated temperature/pressure survey. The anticipated 1042 range of H magnitudes is shown for a transitional normal faulting to strike-slip faulting regime. The critical 1043 horizontal stress at which normal faulting failure should occur is shown by the red shaded region for 1044 bounding values of coefficient of friction ( 𝝁) of 0.6 and 1.0. The open-hole region corresponding to the 1045 shear stimulation is shown by a pink box. Both wellbore and stimulation models extend to 1030 m depth 1046 (center of the fluid loss interval during shear stimulation; [8]), although the stimulation model begins at 1047 the water table while the wellbore model extends to the ground surface. 

1048 

1049 

1050 

- 1051 Figure 2: Summary of injection rate (blue) and calculated injectivity based on measured WHP (black) 1052 during the shear stimulation. Dotted lines demarcate stimulation and shut-in periods. The five pressure 

- 1053 steps are spanned by arrows with the upper limit of applied WHP marked above each. Only reported 

- 1054 values (open squares) are available for the ≤ 1.7 MPa pressure step. 

1055 

1056 

1057 

1058 Figure 3: Set up and inputs for the wellbore model. (A) Schematic showing modeled components (with 1059 widths) of the wellbore, as well as fluid entry and exit points. Material properties for the each of the zones 1060 are given in Table 1. The blue arrow shows the passage of the wellbore fluid. (B) Static down-hole 1061 temperature profile used as an initial temperature, 𝑻𝟎 , distribution for both the wellbore and stimulation 1062 models. (C) Surface injection temperature, 𝑻𝒊𝒏(𝒕) , and (D) injection rate, 𝒒(𝒕) , with time. These are 1063 applied as fluid entry boundary conditions in (A). Duration of the three pressure stimulations are indicated 1064 by dotted lines in (D). 

1065 

1066 

1067 

1068 Figure 4: Summary of results from the wellbore model. (A) Initial down-hole temperature profile (black), 1069 the calibrated match between the model (solid) and observation (dashed) for a static temperature profile 1070 taken after a 12-day shut-in period (red), and then shortly after a short injection test (blue). The main fluid 1071 loss interval is shaded pink. (B) Modeled bottom-hole temperature (red solid). Approximate surface 1072 injection temperature is given by the dashed red line. On the same horizontal axes is plotted the additional 1073 overpressure at the depth of the stimulation interval, arising from the hydrostatic weight of a cooler, 1074 denser fluid column in the wellbore (blue solid). The ≤ 1.7, ≤ 2.4 and ≤ 3.1 MPa stimulation intervals are 1075 marked for reference. 

1076 

1077 Figure 5: Summary of stress-permeability model (A). Equal-area stereonets showing poles to planes for 1078 the fracture population observed in image logs over the Desert Peak stimulation interval (blue triangles; 1079 [27]), and several synthetic fracture populations (red circles), generated from (A) using the algorithm 1080 described in Section 4.1. The orientation of 𝝈𝒉 is shown for the Desert Peak fractures. (B) Fracture 1081 permeability versus shear displacement for laboratory tests on granite at three normal stresses, from Lee 1082 and Cho [43]. (C) Modeled curve (Eq. (6)), with 𝚫𝒌𝒎𝒂𝒙 =1.7, 𝒖𝟓 = 1 mm and 𝒖𝟗𝟓 =7 mm. Dashed lines divide 1083 regions defining fractures that are unstimulated ( 𝚫𝒌< 𝟎. 𝟎𝟓𝚫𝒌𝒎𝒂𝒙 ), partially stimulated ( 𝟎. 𝟎𝟓𝚫𝒌𝒎𝒂𝒙 < 1084 𝚫𝒌< 𝟎. 𝟗𝟓𝚫𝒌𝒎𝒂𝒙 ), and fully stimulated ( 𝟎. 𝟗𝟓𝚫𝒌𝒎𝒂𝒙 < 𝚫𝒌 ). Note that because 𝚫𝒌 is used as a 

1092 

- 1085 multiplier, there is no requirement that the y-intercepts of (B) and (C) coincide. (D-E) Multipliers of 

- 1086 permeability components parallel to 𝝈𝒗 (red), 𝝈𝑯 (blue) and 𝝈𝒉 (black) for increasing normal stress 1087 reduction for the Desert Peak fracture population. Stereonets show unstimulated (green), partially 1088 stimulated (blue) and fully stimulated fractures (black) at three points on the curve. The orientation of 𝝈𝒉 1089 is shown by black arrows. (E) The same curves as in D, but for 20 synthetic fracture populations 1090 constructed from the Desert Peak fracture population. 

1091 

1093 Figure 6: Set up and initial conditions for the stimulation model. (A) Schematic representation of the 1094 model grid in one eighth symmetry. Injection occurs into the bottom corner node contained within a high1095 resolution section of the grid. No flow and roller boundary condition are applied at all boundaries except 1096 the top surface, which is free to deform and fixed at atmospheric pressure. Orientation of the principal 1097 stresses relative to the coordinate axes is indicates in the top right. (B) Depth-dependent pressure, stress 1098 components and temperature applied as an initial condition. Initially, there is no horizontal variability in 1099 these variables. 

1100 1101 

1102 

- 1103 Figure 7: Summary of the calibrated reservoir stimulation model. Model inputs: (A) Down-hole injection 

- 1104 temperature. (B) Components of the down-hole injection pressure. Model outputs: (C) Injection rate. (D) 1105 Injectivity calculated based on WHP. Field data are indicated by circles and modeled values by solid lines. 1106 Reported values (open squares) of overpressure and injection rate are obtained for the ≤ 1.7 MPa 1107 stimulation from Chabora et al. [8]. The maximum formation overpressure that would result in a hydraulic 

- 1108 fracture is indicated by a gray dashed line in (B).  The positions of two pumping gaps are marked in (D) 

- 1109 with loss of injectivity during the gap indicated by a dotted line. Stimulation intervals for the three lower 

- 1110 pressure steps are indicated in (A) and marked by vertical dotted lines. 

- 1111 

1112 

1113 

1114 Figure 8: Summary of modeled flow, stress and permeability changes during the stimulation. (A) Change 1115 in permeability (black), formation overpressure (blue) and temperature (red) for a profile along the x-axis 1116 at three times: (i) before stimulation begins (dotted line); (ii) during the WHP=3.1 MPa pressure step, prior 1117 to the first pumping gap (40 days – dashed line); (iii) 23 days later during the same pressure step (63 days 1118 – solid line). Arrow shows movement of the damage front ~10 m from day 40 to day 63. (B) Increase in 1119 the stimulated volume with time for the 3.1 MPa stimulation. The partially and fully stimulated volumes 1120 are defined in terms of the extent to which nodal permeability has been increased: partially = 𝚫𝒌> 𝟎 , 1121 fully = 𝚫𝒌= 𝚫𝒌𝒎𝒂𝒙 ; these regions are also illustrated in relation to the permeability curves given in (A). 1122 Also shown are the total (green) and “thermally active” injectate (blue) defined in Eqs. (15) and (16), 1123 respectively. Note that both fluid and rock volumes have been scaled to represent the spatial volume 1124 occupied by the particular component, e.g., fluid volumes were divided by the porosity, 𝝓 (=0.1), rock 1125 volumes by (𝟏−𝝓) . (C) Components of change in normal (black), shear (green) and excess shear stress 1126 (red) along the same profile for a well-oriented fracture in the extensional stress regime (dipping at 60° 1127 to 𝝈𝒉 ). Change in excess shear stress is defined in terms of Eq. (4), i.e., 𝚫𝝉𝒆𝒙 = 𝚫|𝝉| −𝝁𝒔𝚫𝝈𝒏 + 𝝁𝒔𝚫𝑷 . 1128 (D) Percentage contributions of overpressure (blue), normal (black) and shear stress change (green) to the 1129 excess shear stress. Two regions are defined where either thermal or non-local effects dominate fracture 1130 failure. 1131 

1132 

# **10 Tables** 

#### 1133 

1134 

**Table 1: Material parameters used in the wellbore model.** 

|Parameter|Value|
|---|---|
|_Operational_||
|Initial temperature|as in Figure 3B|
|Injection depth|1030 m|
|Injection temperature|as in Figure 3C|
|Injection rate|as in Figure 3D|
|_Material:_<br>_Wellbore_||
|Permeability|5<sup>-9</sup>m<sup>2</sup>|
|Porosity|1|
|_Steel pipe_||
|Thermal conductivity|20 W m<sup>-1</sup>K<sup>-1</sup>|
|Density|8000 kg m<sup>-3</sup>|
|Specific heat capacity|500 J m<sup>-3</sup>K<sup>-1</sup>|
|Porosity|0|
|_Cement/reservoir_||
|Thermal conductivity|2.7 W m<sup>-1</sup>K<sup>-1</sup>|
|Density|2500 kg m<sup>-3</sup>|
|Specific heat capacity|800 J m<sup>-3</sup>K<sup>-1</sup>|
|Porosity|0|

1135 

1136 

1137 **Table 2: Parameters used in the stimulation model.** 

|Parameter|Value|
|---|---|
|_Operational_||
|Injection depth|1035 m|
|Injection pressure|as in Figure 7A|
|Injection temperature|as in Figure 4A|
|_Material_||
|Thermal conductivity|2.7 W m<sup>-1</sup>K<sup>-1</sup>|
|Density<br>[7]|2477 kg m<sup>-3</sup>|
|Specific heat capacity|800 J m<sup>-3</sup>K<sup>-1</sup>|
|Porosity<br>[7]|0.1|
|Coefficient of thermal expansion|3.5×10<sup>-5</sup>K<sup>-1</sup>|
|Young’s mod.                        [7]|25 GPa|
|Poisson’s ratio                      [7]|0.2|
|_Reservoir_||
|Reservoir temperature|as in Figure 3B|
|Initial permeability [𝑋, 𝑌, 𝑍]|1.0, 1.2, 0.9×10<sup>-15</sup>m<sup>2</sup>|
|Vertical stress gradients||
|𝜎𝑣(𝜎𝑍)|𝜌𝑔|
|𝜎ℎ(𝜎𝑋)[3]|0.61𝜎𝑣|
|𝜎𝐻(𝜎𝑌)|0.5(𝜎𝑣+ 𝜎ℎ)|
|_Fracture_||
|Fractures per control volume,𝑁|100|
|𝑢5, 𝑢95, Δ𝑘𝑚𝑎𝑥<br>[43]|1, 7 mm, 1.7 log(m<sup>2</sup>)|
|Cohesion,𝑆0|0. MPa|
|Static friction,𝜇𝑠<br>[7]|0.75|
|Dynamic friction,𝜇𝑑[40]|0.65|
|Shear fracture stiffness,𝐾𝑠|5×10<sup>2</sup>MPa m<sup>-1</sup>|

