# Multitimescale Template Matching: Discovering Eruption Precursors across Diverse Volcanic Settings

**Authors:** Alberto Ardid, David Dempsey, Josh Corry, Owen Garrett, Oliver D. Lamb, Shane Cronin  
**Published in:** Seismological Research Letters (2024)  
**DOI (version of record):** https://doi.org/10.1785/0220240012  
**This copy:** Accepted manuscript (peer-reviewed, author's version). Text extracted from the PDF at https://ddempsey.github.io/papers/2024-ardid-multitimescale-template-matching-discovering-eruption/ardid2024-multitimescale-template-matching.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** Accepted manuscript. The version of record, published by the Seismological Society of America in Seismological Research Letters, is at https://doi.org/10.1785/0220240012. Not for commercial redistribution.  

---
1 

# Multitimescale Template Matching: Discovering Eruption 

2 

Precursors across Diverse Volcanic Settings 

- 3 Alberto Ardid<sup>_∗_1</sup> , David Dempsey<sup>1</sup> , Josh Corry<sup>1</sup> , Owen Garrett<sup>1</sup> , Oliver D. Lamb<sup>2</sup> , and Shane 4 Cronin<sup>3</sup> 

- 5 1. University of Canterbury, Christchurch, New Zealand, https://orcid.org/0000-0001-8040-8193 

- 6 (AA); https://orcid.org/0000-0003-2135-5129 (OG); 2. GNS Science|Te P�u Ao, Wairakei Re- 

- 7 search Centre, Taupo, New Zealand, https://orcid.org/0000-0002-2254-4258 (ODL); 3. Uni- 

- 8 versity of Auckland, Auckland, New Zealand, https://orcid.org/0000-0001-7499-603X (SC) 

- 9 *Corresponding author: aardids@gmail.com 

### 10 

# Abstract 

- 11 Volcanic eruptions pose signicant risks, demanding precise monitoring for timely hazard mitigation. 

- 12 However, interpreting noisy seismic data for eruptive precursors remains challenging. This study 

- 13 introduces a novel methodology that extends an earlier time-series feature engineering approach to 

- 14 include template matching against prior eruptions. We aim to identify subtle signals within seismic 

- 15 data to enhance our understanding of volcanic activity and future hazards. To do this, we analyze 

- 16 the continuous seismic record at a volcano and identify the time-series elements that regularly 17 precede eruptions and the timescales over which these are observable. We conduct tests across 

- 18 various time lengths, ranging from 1 to 60 days. For Copahue (Chile/Argentina), Pavlof (Alaska), 

- 19 Bezymianny (Russia), and Whakaari (New Zealand) volcanoes, we conrm statistically signicant 

- 20 eruption precursors. In particular, a feature named change quantiles (0.20.8), which is related to 

- 21 the conditional dynamics of surface acceleration at the volcano, emerges as a key indicator of future 

- 22 eruptions over 14-day timescales. This research oers new methods for real-time seismovolcanic 

- 23 monitoring, minimizing the eects of unknown, spurious noise, and discerning recurrent patterns 

- 24 through template matching. By providing deeper insights into pre-eruptive behavior, it may lead to 

- 25 more eective hazard reduction strategies, enhancing public safety around active volcanoes. 

1 

### 26 

# Introduction 

- 27 An important aspect of volcanology is to monitor for impending volcanic eruptions and their po- 

- 28 tential hazards. However, this is not easy because seismic data can be contaminated by signals of 

- 29 unknown or spurious origin, or known to be unrelated to the volcanic system. Therefore, there is 

- 30 a need for new methods that can detect and interpret the subtle changes in seismic activity that 31 occur at dierent timescales before an eruption. 

- 32 Eruption precursors are dened here as observable signals that consistently precede volcanic 

- 33 eruptions. They can be identied in seismic data (e.g., Chastin and Main, 2003; Pesicek et al., 2018; 

- 34 Roman and Cashman, 2018), gas measurements (e.g., Aiuppa et al., 2007; de Moore et al., 2016; 

- 35 Burton et al., 2021), and satellite observations (e.g., Oppenheimer et al., 1993; Biggs et al., 2022; 

- 36 Girona et al., 2021). Eruption precursors can evolve over timescales ranging from years (Caudron 

- 37 et al., 2019, 2022; Girona et al., 2021) to weeks (Pesicek et al., 2018; Roman and Cashman, 2018; 

- 38 Ardid et al., 2022; Rey-Devesa, Benítez, et al., 2023; Rey-Devesa, Prudencio, et al., 2023) to hours 39 (Larsen et al., 2009; Dempsey et al., 2020; Cabrera et al., 2024). 

- 40 Not every signal before an eruption should be classied as a precursor. Ardid et al. (2022) intro- 

- 41 duced specic criteria to dene an eruption precursor, emphasizing (1) that the signal consistently 

- 42 recurs before multiple eruptions, and (2) it should be dierentiable from periods of noneruptive 

- 43 unrest or repose, recurring less frequently during these periods. The second criterion, focusing on 

- 44 distinctiveness, is important for linking the pre-eruptive signal with the impending eruption. 

- 45 One approach for exploring precursors over longer timescales is template matching. Ardid et 

- 46 al. (2022) adapted this approach by combining the 2-day moving median time-series feature of the 

- 47 displacement seismic amplitude ratio (DSAR) with a 28-day template recorded prior to the 2019 

- 48 eruption at Whakaari volcano; the template appeared to recur with some similarity prior to eruptions 

- 49 at Ruapehu and Tongariro volcanoes, also in New Zealand. The precursor was interpreted to reect 

- 50 a weeks-long consolidation of a low permeability mineralogical seal over an active hydrothermal 

- 51 system, which contributed to the conditions conducive of phreatic eruptions. The same precursor 

- 52 was used in a template matching investigation of uid release events in volcanoes with crater lakes 53 (Ardid et al., 2023). However, to date, there has not been a systematic investigation of the timescales 

- 54 of pre-eruptive unrest using template matching. 

2 

- 55 In this study, we apply template matching over multiple timescales ranging from 24 hr to 2 56 months to identify eruption precursors by comparing specic time-series elements that regularly 57 preceded eruptions and the timescales over which these are observable. We tested our approach on 

- 58 four volcanoes: Copahue (Chile/Argentina), Pavlof (Alaska, United States), Bezymianny (Russia), 

- 59 and Whakaari (New Zealand). We chose these volcanoes because they have extensive, continuous 60 seismic data sets with ve or more eruptions recorded at each volcano. Our goal is to establish 61 whether there are specic timescales or eruption templates that are more informative of future 62 eruptions, and to explore how these timescales vary between volcanoes. 

### 63 

# Methodology 

- 64 

## Data preprocessing 

- 65 In this study, we obtained data from a single station at each of the four target volcanoes (Fig. S1, 

- 66 available in the supplemental material to this article; see Table S1 for more details on the stations). 

- 67 In choosing stations for each volcano, our criteria prioritized proximity to the vent and number of 

- 68 eruptions contained in the record. The primary criterion was the number of recorded eruptions 

- 69 because our methods perform better when there are larger data sets to train on. We processed these 70 data as follows. 

- 71 First, we extract the vertical velocity component of the daily waveform data and remove the in- 

- 72 strument response. Although the removal of theoretical instrument response aims to ensure accurate 

- 73 and consistent seismic data analysis, it is important to acknowledge that this alone may not guard 74 against all data artifacts. These artifacts could persist in both the training and testing data sets, 75 leaving room for uncertainty regarding their complete elimination. Nevertheless, the algorithm's 

- 76 performance, as observed, presumably includes the detrimental eects of these artifacts. This sug- 

- 77 gests that despite potential limitations in data quality, evidence of forecasting skill is still apparent. 78 However, it remains a priority to explore new avenues for improving the quality of data used in 79 training sets. 

- 80 We then postprocess four data time series (Fig. S2): (1) real-time seismic amplitude measure 

- 81 (RSAM; Endo and Murray, 1991), a 10-min average of the absolute velocity band-pass ltered 

- 82 between 2 and 5 Hz; (2) medium frequency (MF); and (3) high frequency (HF), which are the 

3 

- 83 same as RSAM, but band-pass ltered at 4.58 and 816 Hz frequency bands, respectively; and (4) 

- 84 displacement seismic amplitude ratio (DSAR; Caudron et al., 2019), computed as the ratio between 

- 85 MF and HF bands when recalculated for absolute vertical displacement (Dempsey et al., 2020). The 

- 86 4.5 Hz threshold between RSAM and MF reects an assumption that tremor predominantly radiates 

- 87 energy at frequencies below 4.5 Hz (Caudron et al., 2019), which allows us distinguish magma or 

- 88 uid source processes from other attenuation related eects, for example, permeability changes 89 because of shallow sealing. The DSAR parameter tracks transitions between frequency bands over 90 time, hence capturing evolving spectral characteristics. Time-varying parameters are then used to 91 compute feature time series, which have the potential to amplify underlying patterns in the seismic 92 signal. To isolate a continuous tremor signal, we minimize signatures from regional earthquakes 

- 93 by applying an outlier detection algorithm to the raw waveform data before computing RSAM, 

- 94 MF, and HF (Dempsey et al., 2022). This algorithm identies and removes outliers by excising a 

- 95 2-min envelope from the raw velocity trace whenever its value exceeds three standard deviations 

- 96 above the mean in the 10-min window. Although eective in removing signal contamination from 

- 97 most short-duration events, contamination from teleseismic waves of large-magnitude, long-duration 98 subduction earthquakes can occur. To address this, a two-window (20 min) moving minimum is 99 applied (Dempsey et al., 2022). 

- 100 The outlier detection algorithm is intended to lter out regional earthquakes, and its calibration 101 was based on data specically gathered from regional earthquakes (Dempsey et al., 2022). However, 102 it lters out all earthquakes without discriminating, including volcano tectonic (VT)this is because 103 our research interest is in online real-time algorithms that can operate without human assistance 104 (e.g., classifying VT earthquakes)future work could include adding automated discrimination of 105 VTs from regional earthquakes (Ibáñez et al., 2008; Titos et al., 2018; Falcin et al., 2021). 

- 106 Once calculated, the four data time series are normalized to unit lognormal distributions (Fig. 

- 107 S2). This normalization, known as z-score normalization, improves classication modeling and has 

- 108 been demonstrated to enhance the discrimination of precursors (Dempsey et al., 2022). 

- 109 

## Time-series feature calculation 

- 110 Each of the four data streamsRSAM, MF, HF, and DSARis further processed by extracting a 

- 111 large set of time-series features (Rouet-Leduc et al., 2019; Christ et al., 2018; Dempsey et al., 2020; 

4 

- 112 Ren et al., 2020). Each time-series feature that is created is a functional transformation of the data 113 stream. 

- 114 Time-series features are constructed from an initial time series by performing calculations on 

- 115 rolling windows. At each index in the initial time series, a backward-looking window of xed length 116 is constructed, bracketing a xed subset of the data. For this window, a feature value is calculated. 

- 117 Examples of features include the maximum value of the data set, the median, or the number of peaks. 

- 118 The window is then shifted forward to the next data index, overlapping with the previous window, 119 and a new feature value is calculated. The output is a feature time series with the same resolution 120 as the original data, but now transformed according to the particular feature. In this study, we 121 have calculated 700 time-series features using the Python package tsfresh, which computes various 122 statistical moments, distribution properties such as energy or entropy, temporal features such as 123 trend, and frequency domain features such as Fourier coecients. 

- 124 The time-series features are computed for each normalized 10-min data point, using a backward125 looking 48-hr window (Dempsey et al., 2020, 2022; Ardid et al., 2022). The selection of a 48-hr 126 window is deliberate, being able to capture short-term variations in the volcano state while also 127 being long enough for attempts to lter potential noise sources via the feature calculation. Although 128 Dempsey et al. (2020) investigated feature window lengths ranging from 12 hr to 5 days at Whakaari, 129 here, we explore much longer timescales by incorporating a nal step of template matching. 

## 130 Template matching 

131 In this step, we seek a reference signal or pattern, referred to as the template. Here, a template is 132 always dened as xed-length subset of a time-series feature with the template endpoint being an 133 eruption. This allows us to test the hypothesis that the template is reective of a physical process or 134 volcano state preceding an eruption. Ideally, the template is also interpretable within some suitable 135 conceptual framework. Having dened a template, we then test whether it reappears frequently 136 within the rest of the feature time series. Because there is likely to be natural variability in the 137 underlying process or unknown, spurious signals not associated with the volcanic system, we expect 138 the match between the template and rest of the feature time series will never be perfect. 

- 139 Central to the application of template matching is the measurement of similarity between the 

- 140 template and a dierent part of the feature time series. Here, we quantify similarity using the 

5 

- 141 correlation coecient, which is a numerical measure of the similarity between two signals' shapes 

- 142 once their magnitudes have been normalized. An alternative approach is dynamic time warping 143 (Laperre et al., 2020; Li et al., 2020), which allows the template signal to be deformed on its time 

- 144 axis to improve the match. For a given feature, template eruption, and template length, we calculate 

- 145 the time series from the cross correlation of the template over the feature times series (Fig. 1). A 

- 146 value of 1 indicates a perfect match, which always occurs when the template is correlated with itself. 

- 147 A value of 0 indicates not correlation, whereas a _−_ 1 indicates perfect anticorrelation. 

Figure 1: Scheme of template matching by using a template derived from the _d_ days pre-eruptive features from an eruption (all eruptions are tested as template). (a) Example of template, which is a short time series, considered pre-eruptive. We explore multiple template lengths ranging from 1 to 60 days. (b) Running correlation of the template over the whole feature time series. The template matching process is based on comparing the template with the long time series. In this way, when it is repeated over time, we can say that the underlying physical process in the volcano is repeated, and that would be the future element to control. The color version of this gure is available only in the electronic edition. 

148 Template matching may yield suboptimal results in the presence of a low signal-to-noise ratio. 149 Distinguishing a precursor from the background signal is particularly challenging in volcanic tremor 150 analysis (Steinke et al., 2023). This is why we attempt template matching for each of the dierent 151 feature time series. A second challenge is that we neither know how many precursors may be present, 

- 152 nor what their durations are. Therefore, we have examined template lengths of 1, 2, 7, 14, 21, 28, 

6 

153 and 60 days, for each eruption at each volcano. For Copahue, with six eruptions (as templates), 154 four data streams, 700 features per data stream, and seven template lengths, this results in 117,600 155 templates for testing. 

### 156 

## Template selection by ranking p-values 

157 To assess the performance of the candidate templates based on their dierentiability (Ardid et al., 158 2022), we computed p-values for each correlation coecient time series. The p-value was calculated 159 from a two-sample KolmogorovSmirnov test, which tests whether correlation coecient (CC) values 160 prior to the nontemplate eruptions are signicantly dierent from the background distribution of 161 CC values. 

162 Then, we computed adjusted p-values using the false discovery rate test (Benjamini and Hochberg, 163 1995). We then rank these adjusted templates by p-value and retained all those with a value less 164 0.05. The p-value analysis helped us discern families of features with superior performance in dis165 criminating pre-eruptive data. 

### 166 

## Template selection by receiver operating characteristic (ROC) curves 

167 We also computed ROC curves for each of the correlation coecient time series suggested in the 168 previous section to be signicant (Fig. 2). ROC curves gauge the discriminability of classication 169 models because they attempt to separate pre-eruptive and noneruptive signals (Ardid et al., 2024). 170 These curves plot the true positive rate (sensitivity) against the false positive rate (1 specicity) for 171 varying threshold values of CC. The area under the ROC curve (AUC) is a single measure of model 172 performance across all thresholds, with values nearing 1 indicating optimal performance. 

7 

Figure 2: Scheme of performance evaluation of the template matching using receiver operating characteristic (ROC) curves. (a) The resulting correlation coecient time series (template matching output) for a template with an arbitrary. (b) Illustration of how the correlation coecient time series, is used to determine true positives (TP), false positives (FP), true negatives (TN), and false negatives (FN) using a threshold and a pre-eruption eruption window. TP represents correctly predicted eruptions when the model output surpasses the threshold within the pre-eruptive window. FN indicates missed eruptions when the output fails to reach the threshold during this window. FP signies incorrectly classied eruptions when the threshold is surpassed outside the pre-eruptive window, whereas TN denotes correctly classied noneruptive data. The choice of threshold greatly inuences the counts of TP, FP, FN, and TN. (c) A hundred threshold values between 0 and 1 are used to count TP and FP rates for computing receiver operator curves (ROC) and their area under the curve (AUC). AUC is used as metric to evaluate the model performance when classifying as a whole (both pre-eruptive and noneruptive data) across all possible thresholds. The color version of this gure is available only in the electronic edition. 

173 The construction of an ROC curve for a correlation coecient time series (Fig. 2) involves (1) 174 selecting a threshold value of CC (e.g., 0.5); (2) scoring a true positive (TP) or true negative (TN) 175 in the time window before the eruption for the period dened by the template timescale, labeling 1 

8 

176 for TP or 0 for TN; (3) scoring a false positive (FP) when the correlation coecient surpasses the 177 threshold outside the pre-eruptive data; (4) scoring a false negative (FN) for all other mismatches; 178 (5) calculating the true positive rate (TPR) and false positive rate (FPR) as TPR = TP _/_ (TP+FN) 179 and FPR = FP _/_ (FP + TN) ; (6) repeating steps (15) using 100 evenly spaced thresholds between 0 180 and 1 to form the ROC curve; and nally (7) computing AUC as the integral of the ROC curve. A 

- 181 higher AUC signies a template that is better at discriminating other eruptions at the same volcano 182 while maintaining a low FP rate. 

### 183 

# Results and Discussion 

### 184 

## Ranking template dierentiability using p-values 

185 P-values are calculated across all data streams, features, volcanoes, eruption templates, and timescales; 

186 this resulted in 431,200 p-values (following the Template selection by ranking p-values section). Af187 ter ranking, the features are _∼_ 5000 potential features. Given the very large number of statistical 188 tests, we provide a list for each volcano comprising the templates and their respective performance 189 (see the supplemental material). 

190 Notable contributors we found feature families such as Fourier coecients and autoregression 

191 coecients. Figure 3 shows the time series of two features of those families before eruptions at the 192 four volcanoes. The graph visually demonstrates the ascending trend in these feature values prior 193 to eruptions. 

9 

Figure 3: Time-series representation of two feature values before eruptions at the labeled volcanoes (titles), identied as signicant in distinguishing between noneruptive and eruptive conditions based on p-values and AUC metrics. The graph illustrates the increasing trend in these feature values preceding eruptions, in accordance with the patterns captured by the p-values and AUC metrics. The color version of this gure is available only in the electronic edition. 

### 194 

## Ranking template dierentiability using ROC curves 

195 In this evaluation directed at ranking template performance in discerning between noneruptive and 196 eruptive states using ROC curves, we also provide a short list for each volcano containing the 197 templates and their corresponding performance based on the AUC metric (refer to the supplemental 198 material). Figure 4 illustrates examples of various ROC curves for dierent feature time series on 199 the explored volcanoes. These ROC curves, along with their associated AUC values, provide insights 

200 into which parameters (features) harbor more dierentiable information for distinguishing between 201 noneruptive and eruptive conditions. 

- 202 The ROC curves depicted in the gure demonstrate the ecacy of the model in binary classi- 

10 

- 203 cation, as indicated by the AUC. A higher AUC value, closer to 1, signies strong classication 

204 ability, eectively distinguishing between positive and FP outcomes. Specically, in this analysis, the 205 ROC curves evaluate the time-series correlation coecient resulting from template matching. A no206 table AUC for individual templates indicates a distinctive pre-eruptive pattern unique to eruptions, 207 eectively separating them from noneruptive periods within the signal. 

### 208 

## Insights into informative pre-eruptive timescales and frequency bands 

209 From the 5% lowest p-values templates (see the Ranking template dierentiability using p-values 210 section), we examined which template timescales had the highest dierentiability among the four 211 volcanoes (Fig. 5a). For all volcanoes, we found 14-day time windows were discriminating of pre212 eruptive behavior, although this timescale was most dominant for Copahue and Bezymianny. For 213 both Pavlof and Whakaari, the 1-day timescale was important whereas, for Pavlof, 28-days was also 214 prevalent. This implies that Pavlof may exhibit precursors over the course of a month, contrast215 ing with the other volcano studied in which precursors are usually observed on shorter timescales 216 (Fig. 5a). 

217 The volcanoes also exhibit some dissimilarity in the relative importance of dierent data streams 218 in the pre-eruptive period (Fig. 5b). For example, at Copahue, the RSAM band (25 Hz) dominates 219 the signicant templates, whereas for Pavlof, the four bands make a more balanced contribution, 220 although MF carries the most weight. Both Bezymianny and Whakaari favor the RSAM band with 221 minimal contribution from DSAR. 

222 The occurrence of dierentiable template time lengths and data streams provides initial insights 223 into the methodology's capability to dierentiate between various time lengths of templates, high224 lighting those with higher discriminative potential for precursor identication. 

11 

Figure 4: Example of ROC curves for three relevant feature time-series template in Pavlof, Copahue, Bezymianny, and Whakaari volcanoes. These features have been identied to be relatively good (compared to other features) for distinguishing between noneruptive and eruptive conditions using p-values and AUC metrics. The color version of this gure is available only in the electronic edition. 

225 The divergent distributions of template data streams and time lengths across the four volcanoes 226 could be attributed to various factors, including the volcano type, geological setting, content of 227 uids, magma composition, and depth of the magma reservoir. For example, Copahue is a basaltic 228 andesitic volcano that lies within a complex tectonic setting including major tectonic faults as well 229 as caldera structures (Farías et al., 2023). The volcano features a shallow hydrothermal system 230 above a magma chamber at _∼_ 7 km depth (Lundgren et al., 2017). Eruptive activity, dominated 231 by phreatomagmatic events, are often preceded by changes in the seismic activity on timescales of 232 days to weeks (Farías et al., 2023). Similarly, Whakaari features an established shallow hydrothermal 233 system with eruptive activity dominated by phreatomagmatic events (Kilgour et al., 2021). Eruptive 234 products from the volcano have indicated relatively shallow magma emplacement ( _<_ 1 km) before 235 eruptive activity (Kilgour et al., 2021). In contrast, there are no indications of a hydrothermal 

12 

236 system at either Bezymianny or Pavlof. The former volcano typically exhibits eusive lava dome 237 building behavior, interrupted by episodes of strong explosive eruptions (Girina, 2013). The explosive 238 eruptions may be preceded by increased seismic activity up to 40 days beforehand (Koulakov et al., 239 2021). Seismicity also indicates a complex subsurface system with multiple magma chambers at 28 240 km depth (Koulakov et al., 2021) and interactions with other nearby volcanoes (Journeau et al., 241 2022). Finally, Pavlof is a basalticandesitic volcano that exhibits Strombolian explosion activity, 242 which can rapidly escalate to intense lava fountaining within 1 day (Fee et al., 2017). Notably, 243 shallow ( _<_ 50 km) seismic events are relatively rare at the volcano (McNutt, 1987). 244 Apart from the discrepancies in template time length distribution, the results illustrate that 245 the template matching approach and ltering metrics recover dierentiable features, enabling a 246 relative comparison of template time lengths that are assumed to be associated with the duration of 247 potentially triggering eruptive processes. This methodology not only provides insights into volcanic 248 activity but could also be extended to other geothermal phenomena. For instance, similar techniques 249 could potentially be applied to hydrothermal eruptions in geysers (Ardid et al., 2019), in which 250 understanding the timing and triggers of eruptions is crucial. Furthermore, this approach might be 251 benecial in studying geothermal elds (Ardid et al., 2021), oering a valuable tool for monitoring 252 these systems based on the duration of observed thermal and seismic activities. 

### 253 

## Graphical example of template matching and feature interpretability 

254 Among the most relevant precursor features identied by our study is a family called change quan255 tiles. Figure 6 illustrates how one example of this feature, termed rsam change quantiles (0.8 to 256 1.0) absolute mean, is constructed. First, a quantile mask is applied to select only the highest 20% 257 of RSAM values in a 2-day window. Second, for the selected values, a dierence is computed between 258 adjacent 10-min values. Third, the mean of the absolute value of these dierences is calculated. 259 Although this feature appears to be statistically signicant, its physical signicance is not yet 260 clear. Nevertheless, we propose one physical explanation for the signal, primarily to illustrate how 261 explainable features of machine learning could be used to advance new hypotheses for later testing. 262 In this way, machine learning can complement robust observational science, which upholds the role 263 of data collection and analysis to test new hypotheses. 

- 264 Our proposed explanation of this feature is as follows. RSAM, as a measure of average seismic 

13 

265 velocity, is a proxy for the seismic energy density that is radiated by some generating source. For 266 a volcano experiencing unrest prior to phreatic eruptions, this generating source may be related 267 to shallow degassing of magma (i.e., Jaupart and Vergniolle, 1988; Journeau et al., 2022) or other 268 movement of uids in the subsurface (i.e., Ferrick et al., 1982; Yamada et al., 2021). Then, by 269 applying a 0.8 to 1.0 quantile mask, we are selecting for further study the highest energy part of the 270 signal and, by implication, the highest energy source processes occurring during the 2-day feature 271 window. Another way to think about this is that the quantile mask has binarized the time series 272 according to a state variable of the volcano: in this case, high and low radiated energy. 

273 The second step in the feature calculation associates a characteristic of the signal with mask274 selected state. In this case, we are computing 10-min absolute dierences in the RSAM taking 275 their average value during high-energy periods. This quantity will be high when there is a lot of 276 short-term volatility in how much energy is being radiated from the source process. Attributing a 277 physical meaning to this volatility is dicult and likely depends on the nature of that source. For 278 instance, it could be associated with rapid uctuations in degassing if the tremor signal has a ux 279 origin (Girona et al., 2019). Alternatively, it may relate to a complex sequence of crack opening and 280 closure in a fracture network subject to varying uid pressure (Konstantinou and Schlindwein, 2003; 281 Kennedy et al., 2020; Li et al., 2022). 

282 Figure 7 shows a 14-day template of the change quantiles feature that was extracted prior to the 283 rst Copahue eruption (Fig. 7a). It is characterized by a 13-day quiet period followed by a rapid 284 increase in the feature value in the day before the eruption. This template has then been overlaid on 285 the feature time series prior to the other ve recorded eruptions, highlighting the time of maximum 286 cross correlation. Qualitatively, the match is reasonable for all but the fourth eruption. In contrast, 287 the raw RSAM time series only exhibits anomalous values prior to the rst two eruptions. 

288 Although this template recurs before the majority of eruptions (Fig. 7b,c,e,f), its absence prior 289 to the fourth eruption is notable (Fig. 7d). This discrepancy highlights that recurrent templates 290 may not reliably recur prior to every eruption at a volcano. This could be due to natural variation 291 in the shape or strength of pre-eruptive signals. Another explanation for the discrepancy is that this 292 fourth eruption was reported by local residents as a minor ash plume without further alerts from 293 ocial agencies. Because all other eruptions were reported by agencies, this event may have been 294 smaller than other eruptions and therefore had dissimilar precursors, if any. 

14 

Figure 5: (a) Distribution of occurrences of dierent template time lengths after the ltering feature time series on distinguishing between noneruptive and eruptive conditions using p-values and AUC metrics, for Copahue, Pavlof, Bezymianny, and Whakaari volcanoes. The time lengths are divided into seven categories: 1, 2, 7, 14, 21, 28, and 60 days. (b) Distribution of occurrences of dierent data streams after template selection using p-values and ROC curves for distinguishing between pre-eruptive dierentiable and nondierentiable patterns: for Copahue, Pavlof, Bezymianny, and Whakaari volcanoes. The data streams correspond to seismic amplitude measurement real-time seismic amplitude measure (RSAM), medium frequency (MF), and high frequency (HF), and for the ratio seismic measurement displacement seismic amplitude ratio (DSAR). The plot suggests which frequency bands are more informative when looking for precursory activity. The color version of this gure is available only in the electronic edition. 

295 Unfortunately, not all the features used in this analysis are interpretable. For instance, the 296 autoregression coecient (Fig. 4), which describes a time series as a linear combination of its past 297 values (up to _n_ lagged observations), lacks physical interpretability. The case is similar for the 298 Fourier coecients (Fig. 4), which highlight harmonics of greater intensity preceding eruptions. 299 However, assigning a physical variable that correlates with these coecients proves to be challenging. 300 Nevertheless, the value of time-series features lies more in their ability to capture subtle patterns 301 in the signal prior to eruptions. These patterns can be used with statistical tools to forecast future 302 system behaviors, for example, by training machine learning models (e.g., Dempsey et al., 2020, 

15 

303 2022; Ardid et al., 2024). 

- 304 Although the analysis of seismic parameters provides insights into volcanic dynamics, it is im- 

- 305 portant to acknowledge the inherent limitations. The direct association of seismic parameters with 

306 specic physical phenomena can be speculative due to the complexity of volcanic systems. Therefore, 307 although discussing the interpretability of features like the rsam change quantiles (0.20.8) mean, 308 it is relevant to recognize the speculative nature of attributing specic physical processes solely based 309 on seismic data. The multifaceted inuences outlined highlight the interplay of various factors shap310 ing volcanic activity. Consequently, although certain features may capture intrinsic state variations 311 and extrinsic behavioral shifts within volcanic systems, the broader context underscores the need for 312 cautious interpretation, and a multidisciplinary approach in understanding and monitoring volcanic 313 activity. 

314 We recognize that comprehending a monitoring parameter enhances our ability to make informed 315 decisions, but the primary focus of a monitoring parameter should be its capability for identifying 316 precursors. Whether or not we fully understand it is of secondary importance. 

### 317 

# Conclusions 

318 Our study proposes a methodology for detecting eruption precursors across various timescales at dif319 ferent volcanoes, enhancing our understanding of volcanic activity and hazard mitigation strategies. 320 Through multitimescale template matching, we identied statistically signicant eruption precursors 321 at Copahue, Pavlof, Bezymianny, and Whakaari volcanoes, shedding light on the diverse temporal 322 dynamics preceding eruptions. 

323 Our analysis underscores the importance of considering dierent timescales in volcano moni324 toring, as each volcano exhibits distinct patterns of pre-eruptive behavior. Although 14-day time 325 windows emerge as discriminative for Copahue and Bezymianny, Pavlof shows importance at 1-day 326 and 28-day scales, highlighting varied eruption precursors across volcanoes. 

327 The change quantiles feature family, highlighted in our study, unveils subtle variations in seismic 

328 activity preceding volcanic eruptions. Specically, the feature rsam change quantiles ( _−_ 0 _._ 8 to 1.0) 329 absolute mean, captures changes in seismic energy density before eruptions. This interpretation 330 suggests a link between intense seismic energy and processes like magma degassing or uid movement 

16 

- 331 underground. By isolating high-energy segments within the signal and examining their uctuations, 

- 332 we gain insights into potential precursory patterns. Although interpreting patterns in features poses 

- 333 challenges, they oer valuable clues for forecasting volcanic activity and generating hypotheses for 

- 334 further investigation. 

Figure 6: An example of how rsam change quantiles mean is calculated, showing the raw RSAM time series on a window basis (2 days, 288 samples), the distribution used to dene quantiles (top right), the RSAM time series including only values in the body of the distribution. The plot at the bottom shows how the selected values are dierenced to obtain a measure of how average velocity is changing. The mean of these dierences gives the feature value for this 2-day window. The color version of this gure is available only in the electronic edition. 

335 Moving forward, the integration of multitimescale template matching into real-time volcano 336 monitoring systems holds promise for enhancing eruption forecasting capabilities. By leveraging 337 machine learning approaches and putting these tools into operation, we can further rene our ability 338 to predict volcanic eruptions and improve safety measures in volcanic regions. Continued research 339 and application of these methodologies are essential for advancing volcanic monitoring and hazard 340 mitigation eorts worldwide. 

17 

Figure 7: Temporal evolution of the change quantiles (0.81.0) mean feature in the RSAM band leading up to six eruptions in Copahue, along with the rsam data for comparison. The rsam values have been standardized using the z-score, meaning they have been adjusted by subtracting the historical mean and dividing by the standard deviation. (a) First eruption where the template is extracted. In cyan (light blue) the 14-day template extracted before the rst eruption (notice how it matches the rst eruption, as it is expected). The template from the rst eruption is overlaid on the other ve eruptions at the point of maximum coincidence in template matching, revealing a clear match for most eruptions (b,c,e,f) except for the fourth eruption (d). The color version of this gure is available only in the electronic edition. 

18 

# 341 Data and Resources 

342 The codes required to replicate the results of this study are available at https://github.com/ 343 aardid/temp_matching_srl, released under the MIT license. Codes are provided in the supple344 mental material to compute the receiver operating characteristic (ROC) curves for all three types 345 of foresters. Raw waveform data for New Zealand volcanoes can be downloaded from GeoNet 346 (https://www.geonet.org.nz/); and for Alaskan volcanos from Incorporated Research Institutions 347 for Seismology (IRIS) (http://service.iris.edu). Both are operable as clients though the Inter348 national Federation of Digital Seismograph Networks (FDSN) webservice (https://www.fdsn.org/ 349 networks/). All websites were last accessed in May 2024. 

# 350 Declaration of Competing Interests 

351 The authors acknowledge that there are no conicts of interest recorded. 

### 352 

# Acknowledgments 

353 The authors acknowledge GeoNet, New Zealand and Alaskan Volcano Observatory (AVO, United 354 States) seismic monitoring system for supplying free access to their volcanic seismic data. The 355 authors wish to thank NZ MBIE UOAX1913 (Transitioning Taranaki to a Volcanic Future) for 356 support of A. A., D. D., and S. J. C. during this study. The authors wish to thank NZ MBIE E7774 357 (Adapting to climate change through stronger geothermal enterprises') for support of A. A., D. D., 358 and S. J. C. during this study. The authors thank Ivan Melchor and Instituto de Investigación en 359 Paleobiología y Geología (UNRN-CONICET), Argentina, for providing the seismological data of the 360 Copahue volcano. O. L. was supported by the NZ MBIE through the Strategic Science Investment 361 Fund (SSIF) Hazards and Risk Management program. 

# 362 References 

- 363 [1] Aiuppa, A., R. Moretti, C. Federico, G. Giudice, S. Gurrieri, M. Liuzzo, P. Papale, H. Shinohara, 364 M. Valenza, and M. L. I. Witt (2007). Forecasting Etna eruptions by real-time observation of 365 volcanic gas composition, Geology 35, no. 12, 11151118. 

19 

- 366 [2] Ardid, A., R. Archer, E. Bertrand, F. Sepulveda, P. Tarits, and D. Dempsey (2021). Heat 367 transfer through the Wairakei-Tauhara geothermal system quantied by multi-channel data 368 modeling, Geophys. Res. Lett. 48, no. 8, e2020GL092056, doi: 10.1029/2020GL092056. 

- 369 [3] Ardid, A., D. Dempsey, C. Caudron, and S. Cronin (2022). Seismic precursors to the Whakaari 370 2019 phreatic eruption are transferable to other eruptions and volcanoes, Nat. Commun. 13, 371 no. 1, 19, doi: 10.1038/s41467-022-29681-y. 

- 372 [4] Ardid, A., D. Dempsey, C. Caudron, S. Cronin, B. Kennedy, T. Girona, S. Potter, O. Lamb, C. 373 Miller, L. Cabrera, et al. (2024). Generalized eruption forecasting models using machine learning 374 trained on seismic data from 24 volcanoes, Res. Square, doi: 10.21203/rs.3.rs-3483573/v1. 

- 375 [5] Ardid, A., D. Dempsey, C. Caudron, S. J. Cronin, C. A. Miller, I. Melchor, D. Syahbana, and 376 B. Kennedy (2023). Using template matching to detect hidden uid release episodes beneath 377 crater lakes in Ruapehu, Copahue, and Kawah Ijen volcanoes, J. Geophys. Res. 128, no. 10, 378 e2023JB026729, doi: 10.1029/2023JB026729. 

- 379 [6] Ardid, A., E. Vera, C. Kelly, M. Manga, C. Munoz-Saez, A. Maksymowicz, and F. 380 CulaciatiOrtega- (2019). Geometry of geyser plumbing inferred from ground deformation, J. 381 Geophys. Res. 124, no. 1, 10721083. 

- 382 [7] Benjamini, Y., and Y. Hochberg (1995). Controlling the false discovery rate: A practical and 383 powerful approach to multiple testing, J. Roy. Stat. Soc. 57, no. 1, 289300. 

- 384 [8] Biggs, J., N. Anantrasirichai, F. Albino, M. Lazecky, and Y. Maghsoudi (2022). Large-scale 385 demonstration of machine learning for the detection of volcanic deformation in Sentinel-1 satel386 lite imagery, Bull. Volcanol. 84, no. 12, 100, doi: 10.1007/s00445-022-01608-x. 

- 387 [9] Burton, M., C. Hayer, C. Miller, and B. Christenson (2021). Insights into the 9 December 2019 388 eruption of Whakaari/White Island from analysis of TROPOMI SO2 imagery, Sci. Adv. 7, no. 389 25, eabg1218, doi: 10.1126/sciadv.abg1218. 

- 390 [10] Cabrera, L., A. Ardid, I. Melchor, S. Ruiz, B. Symmes-Lopetegui, J. Baez, F. Delgado, P. 391 Martinez-Yáñez, D. Dempsey, and S. J. Cronin (2024). Eruption forecasting model for Copahue 

20 

- 392 volcano (southern Andes) using seismic data and machine learning: A joint interpretation with 393 geodetic data (GNSS and InSAR), Seismol. Res. Lett. doi: 10.1785/0220240022. 

- 394 [11] Caudron, C., Y. Aoki, T. Lecocq, R. De Plaen, J. Soubestre, A. Mordret, L. Seydoux, and T. 395 Terakawa (2022). Hidden pressurized uids prior to the 2014 phreatic eruption at Mt Ontake, 396 Nat. Commun. 13, no. 1, 6145, doi: 10.1038/s41467-022-32252-w. 

- 397 [12] Caudron, C., T. Girona, B. Taisne, Suparjan, H. Gunawan, Kristianto, and Kasbani (2019). 398 Change in seismic attenuation as a long-term precursor of gas-driven eruptions, Geology 47, no. 399 7, 632636. 

- 400 [13] Chastin, S. F., and I. G. Main (2003). Statistical analysis of daily seismic event rate as a 401 precursor to volcanic eruptions, Geophys. Res. Lett. 30, no. 13, doi: 10.1029/2003GL016900. 

- 402 [14] Christ, M., N. Braun, J. Neuer, and A. W. Kempa-Liehr (2018). Time series feature extraction 403 on basis of scalable hypothesis, Neurocomputing 307, 7277. 

- 404 [15] de Moore, J. M., A. Aiuppa, J. Pacheco, G. Avard, C. Kern, M. Liuzzo, and T. P. Fischer 405 (2016). Short-period volcanic gas precursors to phreatic eruptions: Insights from Poás volcano, 406 Costa Rica, Earth Planet. Sci. Lett. 442, 218227. 

- 407 [16] Dempsey, D. E., S. J. Cronin, S. Mei, and A. W. Kempa-Liehr (2020). Automatic precursor 408 recognition and real-time forecasting of sudden explosive volcanic eruptions at Whakaari, New 409 Zealand, Nat. Commun. 11, 3562, doi: 10.1038/s41467-020-17375-2. 

- 410 [17] Dempsey, D. E., A. W. Kempa-Liehr, A. Ardid, A. Li, S. Orenia, J. Singh, A. J. Tyler, and S. 411 J. Cronin (2022). Evaluation of short-term probabilistic eruption forecasting at Whakaari, New 412 Zealand, Bull. Volcanol. 84, no. 10, 126. 

- 413 [18] Endo, E. T., and T. Murray (1991). Real-time seismic amplitude measurement (RSAM): A 414 volcano monitoring and prediction tool, Bull. Volcanol. 53, 533545, doi: 10.1007/BF00298154. 

- 415 [19] Falcin, A., J. P. Métaxian, J. Mars, É. Stutzmann, J. C. Komorowski, R. Moretti, M. Malfante, 416 F. Beauducel, J. M. Saurel, C. Dessert, et al. (2021). A machine-learning approach for automatic 417 classication of volcanic seismicity at La Soufrière volcano, Guadeloupe, J. Volcanol. Geotherm. 418 Res. 411, 107151, doi: 10.1016/j.jvolgeores.2020.107151. 

21 

- 419 [20] Farías, C., J. Lazo, D. Basualto, M. Saavedra, F. Muñoz-Quiroz, L. Zúñiga-Urrea, R. Martínez420 Bravo, I. Huentenao-Inostroza, and R. Sáez-Opazo (2023). One decade of b-value variations 421 from volcano-tectonic seismicity as an early indicator of episodes of crisis in a volcano: the case 422 of Copahue, southern Andes, Front. Earth Sci. 11, 1181177, doi: 10.3389/feart.2023.1181177. 

- 423 [21] Fee, D., M. M. Haney, R. S. Matoza, A. R. Van Eaton, P. Cervelli, D. J. Schneider, and A. M. 424 Iezzi (2017). Volcanic tremor and plume height hysteresis from Pavlof volcano, Alaska, Science 425 355, no. 6320, 4548. 

- 426 [22] Ferrick, M. G., A. Qamar, and W. F. St. Lawrence (1982). Source mechanism of volcanic tremor, 427 J. Geophys. Res. 87, no. B10, 86758683. 

- 428 [23] Girina, O. A. (2013). Chronology of Bezymianny volcano activity, 19562010, J. Volcanol. 429 Geotherm. Res. 263, 2241. 

- 430 [24] Girona, T., C. Caudron, and C. Huber (2019). Origin of shallow volcanic tremor: The dynamics 431 of gas pockets trapped beneath thin permeable media, J. Geophys. Res. 124, 48314861, doi: 432 10.1029/2019JB017482. 

- 433 [25] Girona, T., V. Realmuto, and P. Lundgren (2021). Large-scale thermal unrest of volcanoes for 434 years prior to eruption, Nature Geosci. 14, 238241. 

- 435 [26] Ibáñez, J. M., E. Del Pezzo, C. Bengoa, A. Caselli, G. Badi, and J. Almendros (2008). Volcanic 436 tremor and local earthquakes at Copahue volcanic complex, southern Andes, Argentina, J. 437 Volcanol. Geotherm. Res. 174, no. 4, 284294. 

- 438 [27] Jaupart, C., and S. Vergniolle (1988). Laboratory models of Hawaiian and Strombolian erup439 tions, Nature 331, no. 6151, 5860. 

- 440 [28] Journeau, C., N. M. Shapiro, L. Seydoux, J. Soubestre, I. Y. Koulakov, A. V. Jakovlev, I. 441 Abkadyrov, E. I. Gordeev, D. V. Chebrov, D. V. Droznin, et al. (2022). Seismic tremor re442 veals active trans-crustal magmatic system beneath Kamchatka volcanoes, Sci. Adv. 8, no. 5, 443 eabj1571, doi: 10.1126/sciadv.abj1571. 

- 444 [29] Kennedy, B. M., A. Farquhar, R. Hilderman, M. C. Villeneuve, M. J. Heap, S. Mordensky, G. 445 Kilgour, A. Jolly, B. Christenson, and T. Reuschlé (2020). Pressure controlled permeability in a 

22 

- 446 conduit lled with fractured hydrothermal breccia reconstructed from ballistics from Whakaari 447 (White Island), New Zealand, Geosciences 10, no. 4, 138, doi: 10.3390/geosciences10040138. 

- 448 [30] Kilgour, G., B. Kennedy, B. Scott, B. Christenson, A. Jolly, C. Asher, M. Rosenberg, and K. 449 Saunders (2021). Whakaari/White Island: A review of New Zealand's most active volcano, New 450 Zeal. J. Geol. Geophys. 64, nos. 2/3, 273295. 

- 451 [31] Konstantinou, K. I., and V. Schlindwein (2003). Nature, waveeld properties and source mech452 anism of volcanic tremor: A review, J. Volcanol. Geotherm. Res. 119, nos. 1/4, 161187. 

- 453 [32] Koulakov, I., P. Plechov, R. Mania, T. R. Walter, S. Z. Smirnov, I. Abkadyrov, A. Jakovlev, 454 V. Davydova, S. Senyukov, N. Bushenkova, et al. (2021). Anatomy of the Bezymianny vol455 cano merely before an explosive eruption on 20.12. 2017, Sci. Rep. 11, no. 1, 1758, doi: 456 10.1029/2011GL046957. 

- 457 [33] Laperre, B., J. Amaya, and G. Lapenta (2020). Dynamic time warping as a new evalua458 tion for dst forecast with machine learning, Front. Astron. Space Sci. 7, 39, doi: 10.3389/fs459 pas.2020.00039. 

- 460 [34] Larsen, J., C. Neal, P. Webley, J. Freymueller, M. Haney, S. McNutt, D. Schneider, S. Prejan, 461 J. Schaefer, and R. Wessels (2009). Eruption of Alaska volcano breaks historic pattern, Eos 462 Trans. AGU 90, 173174, doi: 10.1029/2009EO200001. 

- 463 [35] Li, H., J. Liu, Z. Yang, R. W. Liu, K. Wu, and Y. Wan (2020). Adaptively constrained dynamic 464 time warping for time series classication and clustering, Inform. Sci. 534, 97116. 

- 465 [36] Li, K. L., C. J. Bean, A. F. Bell, M. Ruiz, S. Hernandez, and J. Grannell (2022). Seismic tremor 466 reveals slow fracture propagation prior to the 2018 eruption at Sierra Negra volcano, Galápagos, 467 Earth Planet. Sci. Lett. 586, 117533, doi: 10.1016/j.epsl.2022.117533. 

- 468 [37] Lundgren, P., M. Nikkhoo, S. V. Samsonov, P. Milillo, F. Gil-Cruz, and J. Lazo (2017). Source 469 model for the Copahue volcano magma plumbing system constrained by InSAR surface defor470 mation observations, J. Geophys. Res. 122, no. 7, 57295747. 

- 471 [38] McNutt, S. R. (1987). Eruption characteristics and cycles at Pavlof volcano, Alaska, and their 472 relation to regional earthquake activity, J. Volcanol. Geotherm. Res. 31, nos. 3/4, 239267. 

23 

- 473 [39] Oppenheimer, C., P. W. Francis, D. A. Rothery, R. W. Carlton, and L. S. Glaze (1993). Infrared 474 image analysis of volcanic thermal features: Lascar volcano, Chile, 19841992, J. Geophys. Res. 475 98, no. B3, 42694286. 

- 476 [40] Pesicek, J. D., J. J. Wellik, S. G. Prejean, and S. E. Ogburn (2018). Prevalence of seis477 mic rate anomalies preceding volcanic eruptions in Alaska, Front. Earth Sci. 6, 100, doi: 478 10.3389/feart.2018.00100. 

- 479 [41] Ren, C. X., A. Peltier, V. Ferrazzini, B. Rouet-Leduc, P. A. Johnson, and F. Brenguier (2020). 480 Machine learning reveals the seismic signature of eruptive behavior at Piton de la Fournaise 481 volcano, Geophys. Res. Lett. 47, no. 3, e2019GL085523, doi: 10.1029/2019GL085523. 

- 482 [42] Rey-Devesa, P., C. Benítez, J. Prudencio, L. Gutiérrez, G. Cortés-Moreno, M. Titos, 483 I. Koulakov, L. Zuccarello, and J. M. Ibáñez (2023). Volcanic early warning using 484 Shannon entropy: multiple cases of study, J. Geophys. Res. 128, e2023JB026684, doi: 485 10.1029/2023JB026684. 

- 486 [43] Rey-Devesa, P., J. Prudencio, C. Benítez, M. Bretón, I. Plasencia, Z. León, F. Ortigosa, L. 487 Gutiérrez, R. Arámbula-Mendoza, and J. M. Ibáñez (2023). Tracking volcanic explosions using 488 Shannon entropy at Volcán de Colima, Sci. Rep. 13, no. 1, 9807, doi: 10.1038/s41598-023489 36964-x. 

- 490 [44] Roman, D. C., and K. V. Cashman (2018). Topdown precursory volcanic seismicity: Implica491 tions for stealth magma ascent and long-term eruption forecasting, Front. Earth Sci. 6, 124, 492 doi: 10.3389/feart.2018.00124. 

- 493 [45] Rouet-Leduc, B., C. Hulbert, and P. Johnson (2019). Continuous chatter of the Cascadia sub494 duction zone revealed by machine learning, Nat. Geosci. 12, no. 1, 7579. 

- 495 [46] Steinke, B., A. D. Jolly, R. Carniel, D. E. Dempsey, and S. J. Cronin (2023). Identi- 496 cation of seismo??volcanic regimes at Whakaari/White Island (New Zealand) via system497 atic tuning of an unsupervised classier, J. Geophys. Res. 128, no. 3, e2022JB026221, doi: 498 10.1029/2022JB026221. 

24 

- 499 [47] Titos, M., A. Bueno, L. García, M. C. Benítez, and J. Ibañez (2018). Detection and classica500 tion of continuous volcano-seismic signals with recurrent neural networks, IEEE Trans. Geosci. 501 Remote Sens. 57, no. 4, 19361948. 

- 502 [48] Yamada, T., A. K. Kurokawa, A. Terada, W. Kanda, H. Ueda, H. Aoyama, T. Ohkura, Y. 503 Ogawa, and T. Tanada (2021). Locating hydrothermal uid injection of the 2018 phreatic 504 eruption at Kusatsu-Shirane volcano with volcanic tremor amplitude, Earth Planets Space 73, 505 115. 

25 

