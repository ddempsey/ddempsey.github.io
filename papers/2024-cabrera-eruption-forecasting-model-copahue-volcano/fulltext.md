# Eruption Forecasting Model for Copahue Volcano (Southern Andes) Using Seismic Data and Machine Learning: A Joint Interpretation with Geodetic Data (GNSS and InSAR)

**Authors:** Leoncio Cabrera, Alberto Ardid, Ivan Melchor, Sergio Ruiz, Blanca Symmes-Lopetegui, Juan Carlos Báez, Francisco Delgado, Pablo Martinez-Yáñez, David Dempsey, Shane Cronin  
**Published in:** Seismological Research Letters (2024)  
**DOI (version of record):** https://doi.org/10.1785/0220240022  
**This copy:** Accepted manuscript (peer-reviewed, author's version). Text extracted from the PDF at https://ddempsey.github.io/papers/2024-cabrera-eruption-forecasting-model-copahue-volcano/cabrera2024-eruption-forecasting-model.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** Accepted manuscript. The version of record, published by the Seismological Society of America in Seismological Research Letters, is at https://doi.org/10.1785/0220240022. Not for commercial redistribution.  

---
- 1 Eruption Forecasting Model for Copahue Volcano (Southern Andes) 

- 2 Using Seismic Data and Machine Learning: A Joint Interpretation 3 with Geodetic Data (GNSS and InSAR) 

- 4 Leoncio Cabrera*<sup>1</sup> , Alberto Ardid<sup>2</sup> , Ivan Melchor<sup>3</sup> , Sergio Ruiz<sup>1</sup> , Blanca Symmes-Lopetegui<sup>1</sup> , Juan 

- 5 Carlos Báez<sup>4</sup> , Francisco Delgado<sup>5</sup> , Pablo Martinez-Yáñez<sup>6</sup> , David Dempsey<sup>2</sup> , and Shane Cronin<sup>7</sup> 

- 6 1. Departamento de Geofísica, Facultad de Ciencias Físicas y Matemáticas, Universidad de 7 Chile, Santiago, Chile, https://orcid.org/0000-0001-9401-2608 (LC); https://orcid.org/ 

- 8 0000-0003-1758-0788 (SR); 2. Department of Civil and Natural Resources Engineering, Uni- 

- 9 versity of Canterbury, Christchurch, New Zealand, https://orcid.org/0000-0001-8040-8193 

- 10 (AA); https://orcid.org/0000-0003-2135-5129 (DD); 3. Instituto de Investigación en Pa- 

- 11 leobiología y Geología, CONICETUniversidad Nacional de Río Negro, Rio Negro, Argentina, 

- 12 https://orcid.org/0000-0003-0775-9039 (IM); 4. Centro Sismológico Nacional, Universidad de 

- 13 Chile, Santiago, Chile, https://orcid.org/0000-0002-7265-7402 (JCB); 5. Departamento de 

- 14 Geología, Facultad de Ciencias Físicas y Matemáticas, Universidad de Chile, Santiago, Chile; 6. 

- 15 Facultad de Ciencias Básicas, Universidad Católica del Maule, Talca, Chile; 7. School of Environ- 

- 16 ment, University of Auckland, Auckland, New Zealand, https://orcid.org/0000-0001-7499-603X 17 (SC) 

- 18 *Corresponding author: lecabrera@uchile.cl 

# 19 Abstract 

- 20 Anticipating volcanic eruptions remains a challenge despite signicant scientic advancements, lead- 

- 21 ing to substantial human and economic losses. Traditional approaches, like volcano alert levels, 

- 22 provide current volcanic states but do not always include eruption forecasts. Machine learning (ML) 

- 23 emerges as a promising tool for eruption forecasting, oering data-driven insights. We propose an 

- 24 ML pipeline using volcano-seismic data, integrating precursor extraction, classication modeling, 

- 25 and decision-making for eruption alerts. Testing on six Copahue volcano eruptions demonstrates 

- 26 our model's ability to identify precursors and issue advanced warnings pseudoprospectively. Our 

- 27 model provides alerts 575 hr before eruptions and achieving a high true negative rate, indicating 

1 

- 28 robust discriminatory power. Integrating short- and long-term data reveals seismic sensitivity, em- 

- 29 phasizing the need for comprehensive volcanic monitoring. Our approach showcases ML's potential 

- 30 to enhance eruption forecasting and risk mitigation. In addition, we analyze long-term geodetic 

- 31 data (Interferometric Synthetic Aperture Radar and Global Navigation Satellite System) to assess 

- 32 Copahue volcano deformation trends, in which we notice an absence of noteworthy deformation in 

- 33 the signals associated with the six small eruptions, aligning with their small magnitude. 

#### 34 

# Introduction 

- 35 The capability to anticipate a volcanic eruption remains an elusive challenge in Earth science despite 

- 36 years of scientic research (Zobin, 2011; Acocella et al., 2023). This problem becomes especially 

- 37 important when devastating volcanic eruptions occur, which usually result in human and economic 

- 38 losses as well as environmental damage. Two examples of this are the 20082009 eruptive process 

- 39 of the Chaitén volcano (VEI 5; Major and Lara, 2013) in the southern Andes (Chile) and the 2019 

- 40 eruption of the Whakaari volcano (VEI 2) in New Zealand (Dempsey et al., 2020). Although the 

- 41 former required the complete evacuation and subsequent relocation of the town of Chaitén, also 

- 42 aecting nearby forest vegetation and commercial air trac, with a single casualty in the evacuation 

- 43 process, the latter fatally injured 22 of the 47 tourists and guides on the volcano. In the last 15 

- 44 yr, more than 1000 people were killed in volcanic eruptions and the resulting hazards (Surono et 

- 45 al., 2012; Yamaoka et al., 2016; Brown et al., 2017; Naismith et al., 2019). Therefore, access to 

- 46 pre-eruption information linked to volcanic processes is essential for making informed decisions and 47 implementing eective disaster mitigation strategies. 

- 48 Traditionally, the information available on the status of a volcano (e.g., before an eruption) is 

- 49 summarized in its volcano alert level (VAL), which is based on the level of activity of the volcano (e.g., 

- 50 seismic activity, surface deformation, and/or emissions, thermal anomalies, among others; United 

- 51 Nations Disaster Relief Organisation [UNDRO], 1985; Fearnley et al., 2012). In the case of Chile, 

- 52 this classication consists of four levels (SERNAGEOMIN, 2018), ranging from green (no change 

- 53 in the volcano's activity) to yellow, orange, and nally red (expected development of an eruptive 

- 54 event). VAL systems rarely provide an eruption forecast, which is generally undertaken as a separate 

- 55 activity, for example, by expert elicitation (Potter et al., 2014) or Bayesian Event Trees (Sobradelo 

2 

- 56 et al., 2014). Although these systems depend on quantitative input data, reaching a consensus 

- 57 among experts is essential for synthesizing observations and thus manually determining a threat 

- 58 level. This consensus often involves assessing data in comparison to pre-established geophysical 

- 59 thresholds. Therefore, the VAL serves as a description, reecting an assessed condition such as 60 unrest, eruption, or imminent and past hazards (Barberi et al., 2009; Surono et al., 2012; Potter 

- 61 et al., 2014). This is distinct from a forecast, which entails predicting the probability of a volcanic 62 eruption within a specic future timeframe (De la Cruz-Reyna and Reyes-Dávila, 2001; Tilling, 2008; 63 Marzocchi and Bebbington, 2012; Poland and Anderson, 2020). Forecasting eruptions is challenging 64 due to the complexity and seemingly individualistic nature of volcanoes (for a review, see Acocella 65 et al., 2023). Moreover, published probabilities are subject to scrutiny after events (e.g., Dempsey 66 et al., 2022), in which any missed eruptions or excessive false alarms can undermine public trust 67 (Voight, 1990). 

- 68 Forecasting typically relies on identifying anomalous patterns embedded within dierent types 69 of data, such as Global Navigation Satellite System (GNSS; e.g., Lee et al., 2015), Interferometric 70 Synthetic Aperture Radar (InSAR; e.g., Kobayashi et al., 2018), acoustic (e.g., Garcés et al., 1999), 71 and/or seismic data (i.e., seismic precursors; Zobin, 2011), among others (for a review, see Acocella 72 et al., 2023). In particular, given the high sampling rate that can be achieved with seismic data 73 (e.g., 100 Hz) and the wide frequency spectrum that can be observed (e.g., 0.01100 Hz, typically 74 for broadband instruments), an important part of the research into volcanic eruption precursors has 75 predominantly concentrated on volcanic tremors. Volcanic tremors are a continuous, long-period 76 seismic signal typically within the frequency range of 110 Hz (Konstantinou and Schlindwein, 77 2003). These signals are thought to primarily originate from uid-rock interactions in magmatic 78 and hydrothermal systems, including the resonance of uid-lled cracks and conduits (e.g., Rust 79 et al., 2008) or gas dynamics (e.g., Girona et al., 2019). Given that the generation of tremors is 80 often complex, and its wave eld may be low-amplitude, long-lasting, and with a dynamic frequency 

- 81 content, seismic data are commonly analyzed in informative frequency ranges or by considering 

- 82 average measurements of the amplitude of the seismic signal in specic time windows. An example 

- 83 of this amplitude measurement is the real-time seismic amplitude measurement (RSAM; Endo and 

- 84 Murray, 1991), which can then be used for short-term prediction purposes (Chardot et al., 2015; 

- 85 Caudron et al., 2019; Dempsey et al., 2020; Ardid, Dempsey, Caudron, Cronin, Kennedy, et al., 

3 

- 86 2023). However, to be useful for forecasting, eruption precursors should satisfy two criteria (Ardid 

- 87 et al., 2022): (1) they should reliably recur before most eruptions (i.e., a common pattern occurs 88 before multiple events), and (2) they should be dierentiable from noneruptive unrest or volcanic 89 repose. 

- 90 In this scenario, the use of machine learning (ML) techniques is an emerging tool for volcanic 91 eruption forecasting (Carniel and Guzmán, 2021). In contrast to conventional methods that often 92 rely on predened rules or signals (e.g., volcano-tectonic [VT] tremors, long-period or very-long93 period events), expert knowledge, and simpler models, ML techniques are characterized by their data94 driven nature, adaptability, and ability to learn complex patterns. For example, using time-series 95 feature engineering, Dempsey et al. (2020, 2022), Ardid et al. (2022), and Ardid, Dempsey, Caudron, 96 Cronin, Miller, et al. (2023) were able to identify pre-eruptive patterns at dierent volcanoes from 97 massive seismic data. In particular, under pseudoprospective testing conditions, Dempsey et al. 98 (2022) were able to anticipate six out of seven eruptions at Whakaari (New Zealand) at the cost 99 of 14 warning days each year. In a generalized way, Ardid, Dempsey, Caudron, Cronin, Kennedy, 

- 100 et al. (2023) trained ML models using waveform-derived features of 24 volcanoes around the world 101 and found that numerous eruption precursors are applicable across various volcanoes, challenging 102 the notion that volcanoes exhibit individualistic behavior. In addition, ML has been applied to 103 analyze diverse forms of data, encompassing seismic (Rouet-Leduc et al., 2019; Manley et al., 2020; 104 Ren et al., 2020; Majstorovi¢ et al., 2021; Mousavi and Beroza, 2023), GNSS (Costantino et al., 105 2023; Donoso et al., 2023; Xue and Freymueller, 2023), gas (Manley et al., 2021), and satellite data 106 (Anantrasirichai et al., 2018; Biggs et al., 2022). 

107 In this work, we use seismic data and the ML pipeline developed by Dempsey et al. (2020, 108 2022) for Whaakari (New Zealand) to both train and test an ML model in a dierent region in 109 the Southern Andes. In addition, we assess the performance of the model in forecasting recurrent 110 short-scale eruptions originating from the same volcanic source. To create our ML model, we use 111 seismic data from the Copahue Volcano (Chile and Argentina, Fig. 1), which has been characterized 112 by low-magnitude phreatic and phreatomagmatic eruptive pulses over the last two centuries (Caselli 113 et al., 2016; Hantusch et al., 2021) and had six eruptive pulses between March 2020 and November 114 2021. We test our model under a cross-validation approach in which we leave one eruption out 

115 of the training dataset and test the model over the out-of-sample eruption (Fig. 1b). We then 

4 

- 116 use a receiver operating characteristic (ROC) curve as a metric to evaluate the performance of 117 the model when classifying pre-eruptive and noneruptive data. Finally, we analyze GNSS and 118 InSAR geodetic data from the volcano during the same period (this type of data is not used in the 119 construction of ML models due to its lower temporal resolution compared to seismic data). Our 120 results show that, in pseudoprospective, the model forecasts ve of the six eruptions with dierent 121 alert times. This illustrates the variability of the pre-eruptive process even for the same volcano 122 and highlights the importance of carefully setting alert thresholds and determining appropriate alert 123 periods. In addition, our geodetic data results show long-term (years) signals likely associated 124 with cyclic ination and deation of the volcano without showing signicant changes that allow 125 anticipating these eruptions, highlighting the need to integrate short- and long-term data to achieve 126 more integrated forecast models. 

5 

Figure 1. (a) Location map of the Copahue volcano (red triangle) and other active volcanoes in Chile (black triangles; SERNAGEOMIN, 2018). Inset: Location of the Copahue active crater (red dot), geothermal areas (orange marks), hot springs (blue dots), and the seismic station COP (light blue inverted triangle) used in this study. (b) The machine learning pipeline followed in this work (see the ML workow section, for more detail). 

#### 127 

# Copahue Volcano 

128 Copahue is an active stratovolcano that has had several eruptions of low-to-mid intensity in the past 129 decades (VEI 12; Caselli et al., 2016) in the central part of the Southern Volcanic Zone (3346° S) 130 of the Andean arc (Fig. 1). The main vent is located at the western rim of the Agrio Calderaa 

6 

131 rectangular intra-arc pull-apart basin of 300 km<sup>2</sup> (e.g., Folguera et al., 2016). Besides the Copahue 132 volcano, the caldera has two main structures: a geothermal eld with a production capacity >30 133 MWe (e.g., Barcelona et al., 2021) and an active fault system that constitutes vertical permeable 134 pathways for magmatic uid circulation (Lamberti et al., 2019; Montenegro et al., 2021). Several 135 authors have conceptualized structurally controlled uid circulation models for the Agrio Caldera 136 (Tardani et al., 2021; Yagupsky et al., 2023) based on two magma sources (Lundgren et al., 2017): a 137 shallower source located 2.5 km beneath Copahue's vent and a deeper source located 710 km under 138 the center of the caldera. 

139 The crater of Copahue hosts an acid lake supplied by magmatic gas and meteoric waters 140 (Agusto et al., 2017). Between 2012 and 2019, the eruptive activity showed a correlation with 141 the chargedischarge cycles of the crater lake (Melchor et al., 2022). This activity is characterized 142 by phreatic to phreatomagmatic explosions at the vent, high degassing rates of sulfur dioxide (SO 2 ; 143 e.g., Tamburello et al., 2015), low-altitude ash, and vapor plumes that quickly bend to the volcanic 144 edice. Melchor et al. (2020) analyzed the seismicity recorded before and during phreatic explosions 145 with ash emissions between June and August of 2020 (Table 1) and observed the presence of tremors 146 in the band 13 Hz several hours before the surcial activity. 

147 The eruptive activity of Copahue volcano is monitored jointly by the Observatorio Volcanológico 148 de los Andes del Sur (OVDASSERNAGEOMIN) and the Volcanic Surveillance Observatory of 149 Argentina (OAVVSEGEMAR). The Global Volcanism Program chronologically summarizes the 150 main eruptive activity based on reports from OVDAS, the Buenos Aires Volcanic Ash Advisory 151 Center, and other remote-monitoring projects such as the Global Sulfur Dioxide Monitoring Group 152 or the Middle InfraRed Observation of Volcanic Activity. Between June 2020 and September 2021, 153 several phreatic-to-phreatomagmatic explosions (e.g., Hantusch et al., 2021) were reported by the 154 OAVV and residents of Caviahue (Table 1)an Argentinian village located _∼_ 10 km east from the 155 vent (Fig. 1). These reported activities were identied within its normal activity with a VEI of 12 156 (Global Volcanism Program). 

157 Given the phreaticphreatomagmatic nature of the eruptive activity of the Copahue volcano, its 158 forecasting poses an extra challenge (Barberi et al., 1992). Phreatic eruptions occur when water 159 comes into contact with hot volcanic rocks, resulting in explosive steam-driven eruptions such as 160 in Mt. Ruapehu (Christenson et al., 2010), Lascar (Gaete et al., 2019), or others (Barberi et al., 

7 

161 1992). Unlike magmatic eruptions, phreatic events do not typically show clear precursory signs such 

- 162 as seismic activity or ground deformation. The mechanisms behind phreatic eruptions involve the 

- 163 sudden release of steam pressure generated from groundwater. Consequently, accurately forecasting 

- 164 these eruptions requires the detection of short-term (e.g., hours, days) anomalies. 

165 

# Methodology 

#### 166 

## ML workow 

167 In this work, we employ the ML pipeline developed by Dempsey et al. (2020, 2022) and Ardid, 168 Dempsey, Caudron, Cronin, Kennedy, et al. (2023), which is summarized in the following and 169 schematically represented in Figure 1b. 

170 Seismic data preprocessing. We use the continuous vertical component velocity data of the 171 broadband station COP for the period 9 March 202019 November 2022. Following Dempsey et 172 al. (2020), we adopt a singular component approach to maintain simplicity, which is particularly 173 advantageous for potential real-time implementations in observatories. In addition, the vertical 174 component is less prone to site eects. This station is part of the seismic network of the National 175 University of Rio Negro (UNRN) and was deployed _∼_ 4.5 km away from the volcano crater (Fig. 1), 176 recording (with a sampling rate of 100 Hz) the six eruptions indicated in Table 1. 

### TABLE 1 

Dates of Phreatic Explosions Recorded between June 2020 and August 2021 (Global Volcanism Program, 2020, 2021) 

|Number of Eruption|Date (yyyy/mm/dd)|
|---|---|
|1|2020/06/16|
|2|2020/07/16|
|3|2020/08/06|
|4|2020/09/07|
|5|2021/07/02|
|6|2021/08/10|

8 

177 We remove the instrumental response and lter the records in four dierent frequency ranges 178 (encompassing distinct aspects of the volcano-seismic signal) to produce four dierent data streams, 179 each with a sampling rate of 10 min (Ardid et al., 2022; Dempsey et al., 2022). In addition to 180 the physical processes related to each of the selected frequency bands (described in the following), 181 these bands were also chosen considering the results of previous work at Whakari volcano using a 182 methodology similar to ours (e.g., Dempsey et al., 2020, 2022) as well as previous results detecting 183 uid release episodes at Copahue and other volcanoes (e.g., Ardid, Dempsey, Caudron, Cronin, 184 Miller, et al., 2023). In both cases, the same frequency bands were tested. The rst frequency 185 range is between 2 and 5 Hz, which focuses on volcanic tremor signals while excluding microseismic 186 noise at low frequencies (e.g., Beroza and Ide, 2011). The ltered time series were divided into 10187 minute windows without overlap, and the average absolute velocity for each window was calculated. 188 Following Ardid et al. (2022) and Dempsey et al. (2022), we have termed this data stream RSAM, 189 although we observe that RSAM is traditionally calculated using unltered data (Endo and Murray, 190 1991). We also calculate median- (MF) and high-frequency (HF) data streams using a similar 191 approach as RSAM, with the distinction that we apply ltering within the 4.58 Hz range for MF 192 and the 816 Hz range for HF. These two data streams are designed to examine the eects of 193 signal attenuation occurring beyond the frequency range in which tremor energy is typically emitted 194 (Caudron et al., 2019). The last data stream corresponds to the displacement seismic amplitude 195 ratio (DSAR), which is calculated as the ratio of the integrals of the MF and HF data streams, 196 as described in Caudron et al. (2019). High DSAR values have been associated with high gas 197 levels in the edice, indicating a potential decrease in uid motion and/or trapping, leading to gas 198 accumulation (Ardid et al., 2022; Ardid, Dempsey, Caudron, Cronin, Miller, et al., 2023). 

199 We also removed earthquake signals such as regional earthquakes or VT earthquakes not asso200 ciated with uid dynamics because they disturb the temporal averaging of the data. For this, we 201 applied the lter proposed by Dempsey et al. (2020) to the raw data before ltering. Specically, we 202 excised a 2-minute envelope from the raw velocity trace whenever its value exceeded ve standard 203 deviations above the mean of the data in the 10-minute window. Finally, linear interpolation was 204 employed to ll in gaps in the data streams, and a subsequent down-sampling step minimizes their 205 inuence on the models because these gaps typically occur during noneruptive periods. 

9 

- 206 Feature calculation and labeling. The four data time series generated in the previous step are 

- 207 segmented into windows spanning 48 hr each, in which each window contains 288 10-minute samples. 208 We use this window based on previous work at Whakaari volcano (e.g., Dempsey et al., 2020, 2022; 209 Ardid, Dempsey, Caudron, Cronin, Kennedy, et al., 2023) and the similarities between this volcano 210 and Copahue volcano (e.g., both volcanoes have developed hydrothermal systems, with crater lakes 211 and relatively small phreatic-style eruptions, VEI 12). For each of these windows in each data 212 stream, we compute about 700 time-series features using the Python package tsfresh (Christ et al., 213 2018). Another advantage of computing features on RSAM, MF, HF, and DSAR windows over raw 214 data is that the computational eort is reduced. Some examples of these features are distribution 215 measures (mean, standard deviation, and number of peaks), linearity (slope and intercept of linear 216 regression models), and correlation measures (Fourier coecients and lags), among others (energy, 217 entropy, and nonlinear scores). Each feature value is recorded in a matrix, with distinct columns 218 denoting dierent features and rows indicating the end-time index for each window. It is important 219 to observe that we use a 48-hour window because we focus on short-period uctuations of the 220 volcano (in addition, similar results for 24- and 72-hour windows are given in Fig. S1, available in 221 the supplemental material to this article). On the other hand, Dempsey et al. (2020) explored a 222 range of windows between 12 hr and 5 days at the Whakaari volcano (New Zealand) and found that 223 the choice did not greatly impact the forecast accuracy. Similarly, but using template matching, 224 Ardid et al. (2024) explored the use of dierent windows for dierent volcanoes (Copahue included) 225 and found that some volcanoes are more responsive at some time scales than others. Further work to 226 understand the sensitivity of window length at Copahue and other volcanoes may improve forecasts. 

227 The next step in our workow is labeling. Simply put, in this step, the windows are labeled as 228 pre-eruptive or noneruptive. For this aim, we formulate a classication challenge that directs the 229 algorithm's focus to signals observed in the 48-hour time frame leading up to eruptions, denoted as 230 the look forward window. All feature windows occurring within 48 hr or less before an eruption 231 date receive a label of 1 (pre-eruptive), whereas the remaining windows are assigned a label of 232 0 (noneruptive). In the course of model training, we permit adjacent windows to overlap by 36 233 hr (equivalent to 75% of their length, i.e., 1968 windows). This approach enhances the probability 234 of fully capturing a precursor pattern within at least one window, preventing its fragmentation 235 by window boundaries. To address the imbalance between eruptive and noneruptive windows (i.e., 

10 

236 eruptive windows likely represent a minority class compared to noneruptive windows), we implement 237 a strategy of random removal of noneruptive 0 windows until a balanced dataset has been achieved. 238 This is important to prevent bias toward the majority class (here, noneruptive windows) and ensure 239 that the model can learn equally from all classes, leading to fairer predictions. This process is 240 iterated multiple times to mitigate the impact of randomness on down-sampling. For more detailed 241 information, refer to Dempsey et al. (2022). 

### 242 Training and pseudoprospective forecasting. In the training phase of the model, we employ a 

243 cross-validation approach wherein we set aside data from one out of the six available eruptions. The 244 model is then trained using the data from the remaining ve eruptions and subsequently evaluated 245 on the reserved eruption. This strategy is commonly referred to as leave-one-eruption-out cross246 validation, as described in Ardid, Dempsey, Caudron, Cronin, Kennedy, et al. (2023). 

247 By dividing the dataset into multiple subsets during training, we can assess how well the model 248 performs on unseen data. This iterative process helps identify if the model is overtting to the 249 training data by evaluating its performance on various subsets. In addition, cross-validation provides 250 more robustness to the model's performance compared to approaches in which only a section of the 251 data is used for training and another section for testing. 

252 To address the classication task, we train a random forest algorithm. One key advantage of a 253 random forest is its ability to estimate the importance of each feature in the classication process. 254 This feature importance analysis can be valuable for understanding the relevance of dierent factors 255 in predicting volcanic activity. Each model is constructed with a maximum of 200 distinct decision 256 trees, individually trained on unique subsets of down-sampled windows. The implementation is 257 carried out using the scikit-learn Python library (Pedregosa et al., 2011). 

258 Testing is exclusively conducted on out-of-sample data reserved during the model training phase, 259 simulating, though not precisely replicating, conditions encountered in future forecasting scenarios. 260 This method, however, provides a more accurate evaluation of performance compared to a hindcast, 261 in which test data are assimilated into the training set. The feature time series for the test data is 262 generated by calculating them with overlapping windows of 48 hr, progressing at 10 min intervals, 263 resulting in an overlap of 287 out of 288 samples. The intention behind this design is to mimic real264 time volcano monitoring, in which data are interpreted as they are received. Features extracted from 

11 

- 265 each consecutive window are then fed into the trained random forest model. The binary outputs 

266 of individual decision trees are subsequently averaged to generate a value within the range of 01, 267 denoted as the forecast model's consensus (Fig. 1b). We then compare the consensus output with a 268 predetermined threshold between 0 and 1 (see the next section, for more detail about the threshold 269 estimation). If the consensus exceeds this threshold, an eruptive warning is created for the next 48 270 hr (the forecast's look forward period). 

271 Forecasting model assessment. The main scope of the model assessment is to evaluate the 272 overall accuracy of out-of-sample datasets, encompassing the false positive rate (FPR; i.e., incorrect 273 prediction that an eruption will occur) and the false negative (FN) rate (i.e., failure to predict an 274 eruption). Accuracy can be assessed in both pseudoprospective and prospective scenarios, with the 275 latter requiring real-time or future data to assess a xed model (Dempsey et al., 2022). 

276 To assess the model performance, we used cross-validation. This approach also allows for assess277 ing the model's ability to be generalized to new data or contexts. Leave-one-out cross-validation 278 (LOOCV) involves training a model with all samples (e.g., eruptions) in a dataset except for a single 279 one (Ardid, Dempsey, Caudron, Cronin, Kennedy, et al., 2023). The omitted sample is then used as 280 a validation set to assess the model's performance. This process is repeated for every sample in the 281 dataset (six eruptions in our case), and the performance of all the models is combined to provide a 282 comprehensive assessment of the model's overall performance. Here, we applied LOOCV for every 283 individual eruption. For the remaining noneruptive data, a single model was trained considering 284 all the eruptions. Because of the under-sampling of noneruptive data for training, this model is 285 considered approximately out of sample when applied to noneruptive data (Dempsey et al., 2020). 

286 To measure the discriminability of the classication model, that is, its ability to correctly classify 287 pre-eruptive and noneruptive data using dierent thresholds, we use the ROC curve (e.g., Dempsey 288 et al., 2022; Ardid, Dempsey, Caudron, Cronin, Kennedy, et al., 2023). ROC curves plot the 289 true positive rate (TPR; sensitivity) versus the FPR (1-specicity) at various threshold values. 290 Consequently, they assess the forecast across a spectrum of threshold values. Thus, the trade-o 291 between sensitivity and specicity helps identify an optimal threshold. The area under the curve 292 (AUC) for the ROC curve serves as a unied metric for model performance across all thresholds, in 293 which values approaching 1 indicate perfect performance. 

12 

294 We generated a ROC curve for our model as follows: (1) a threshold is selected (from 0 to 1); 295 (2) the model consensus output over the whole period is evaluated against the threshold; (3) a true 296 positive (TP) or true negative (TN) is scored in each window that the forecast agrees with the label: 297 both 1 for TP or both 0 for TN; (4) a false positive (FP) occurs when the model predicts a 1, 298 but it does not match a corresponding 0 in the label vector; any other mismatches result in an 299 FN; (5) the TPR and FPR are estimated as TPR = TP/(TP + FN) and FPR = FP/(FP + TN); 300 (6) steps (1)(5) are repeated by employing 100 uniformly distributed thresholds ranging from 0 to 301 1, and the resultant set of corresponding pairs constitutes the ROC curve; and nally, (7) AUC is 302 calculated as the integral of the ROC curve. 

## 303 Geodetic data and processing 

304 GNSS. To characterize deformation, we use a set of four GNSS stations operated by the OVDAS, 305 together with the GNSS network stations of the National Seismological Center of the University 306 of Chile (see Data and Resources), data of which have been available since approximately 2014. 307 All GNSS observations were processed in network arrays in a dierential approach based on daily 308 solutions (see Báez et al., 2018, for more details). For every station located around the volcanic 309 area, we remove the tectonic eects using a set of stations closer to the study area (Novoa et al., 310 2019). As a result, we produced a time series that shows the deformation in the Copahue volcano 311 area. The locations of the stations and examples of these time series are shown in Figure S1. 

312 InSAR. We complement the seismic and GNSS observations with spaceborne InSAR data. In313 SAR provides observations of ground deformation with a high spatial resolution but low temporal 314 resolution (612 days). In this study, we use Sentinel-1 C-band data (wavelength of _∼_ 5.5 cm) pro315 cessed by the LiCSAR on the cloud processor by the Centre for the Observation and Modelling 316 of Earthquakes, Volcanoes, and Tectonics (Lawrence et al., 2013; Wright et al., 2016; Lazecký et 317 al., 2020; Morishita et al., 2023). The interferograms were automatically preprocessed using the 318 GAMMA SAR software (Wegnüller et al., 2016) and then down-sampled to a pixel size of _∼_ 100 319 m. We used interferograms obtained from LiCSAR for descending track 83, frames 12832-131313 320 (083D_12832_131313), spanning February 2016 until the end of 2021. 

- 321 We used the open-source package LiCSBAS to perform the InSAR time-series analysis (Morishita 

13 

- 322 et al., 2020). We apply corrections for tropospheric phase delays using the Generic Atmospheric 

- 323 Correction Online Service data (Yu et al., 2017; Yu et al., 2018). Because the Copahue volcano is 324 prone to decorrelation in the winter (e.g., Fig. S3), we performed a manual quality analysis to discard 325 interferograms that have low coherence and are likely to contain phase unwrapping errors. LiCSBAS 

- 326 uses a modied small baseline approach (López-Quiroz et al., 2009; Doin et al., 2011), in which the 327 displacement recorded by the individual interferograms was inverted with a least squares method to 328 reconstruct the cumulative displacement eld. Afterward, the software carries out a pixel-by-pixel 329 linear inversion to retrieve the mean ground velocity (Morishita, 2021). The uncertainty in velocity 330 is estimated from the standard deviation using the bootstrap method (Efron and Tibshirani, 1986), 331 and nally, a spatiotemporal lter is performed to reduce the noise of the displacement time series. A 332 topographic correction was also applied, and a linear ramp was removed to reduce the residual long333 wavelength signals, which may be related to other tropospheric delays, ionospheric phases (Gomba et 334 al., 2016), orbital inaccuracies (Fattahi and Amelung, 2014), and any long-wavelength signal related 335 to subduction tectonics. 

#### 336 

# Results 

- 337 

## Forecasting on Copahue eruptions 

- 338 Figure 2 shows the temporal evolution of the out-of-sample consensus (see the Training and pseu339 doprospective forecasting section) 10 days before the six volcanic eruptions (Table 1). We observe 

- 340 that for ve out of the six eruptions, the consensus shows lower values (<0.5) at the beginning of 341 the time series, with subsequent increases (>0.5) in the last days before the eruptions. On the other 342 hand, the time series before eruption 4 shows the opposite behavior, with values around 0.8 until 343 two days before the eruption, in which a sharp drop to values close to 0.1 is observed (discussed 344 later in the Discussion section). 

- 345 For illustrative purposes, Figure 2 shows a threshold of 0.7 (orange-dashed lines). This means 

- 346 that an alert would be issued if the consensus exceeds the threshold and then rescinded when it 

- 347 stays below the threshold for 48 hr. For this pseudoprospective test, we found that a threshold of 348 0.7 provides an advanced warning for ve out of the six eruptions, not satisfying the criterion only 

- 349 for eruption 4 (Fig. 2). 

14 

350 In the same way that the ability to anticipate an eruption is a fundamental part of the model 351 performance so is the ability to correctly classify noneruptive periods as noneruptive. This avoids 352 false alerts that lead to the loss of credibility for the forecaster. Figure 3 shows the temporal 353 evolution of the consensus for the entire studied period and the occurrence of the six eruptions. The 354 consensus consistently exhibits values below 0.5 for the majority of the time series, interspersed with 355 intermittent episodes during which the consensus surpasses this value. The highest values ( _≥_ 0.8) are 356 in general observed in the vicinity of the eruption dates. In addition, the period between eruptions 357 3 and 4 stands out for having high consensus values close to 0.8 for a longer duration of time ( _∼_ 32 358 days; see also eruptive episode 4 in Fig. 2). This contrasts with the periods between eruptions 1 359 and 2 or 5 and 6, with similar durations but low consensus values close to 0.3. It is also interesting 360 to observe that, in general, the behavior of the consensus is at, except for what occurred after 361 eruption 4 on 7 September 2020. For this period, a sustained decay is observed over time, lasting 362 until approximately the beginning of 2021. 

363 For real-time applications, the denition of an alert threshold is essential. One way to measure 364 the model's classication performance over a wide range of thresholds (i.e., 01 in our case) is using 365 an ROC curve (Fig. 4; see the Forecasting model assessment section, for more detail), which can help 366 identify an optimal threshold based on specic requirements and evaluate the performance of the 367 model over the whole period. The AUC for our model is 0.88, indicative of its robust discriminability. 368 A careful examination of the curve highlights that the best performance of the model is achieved 369 with thresholds up to approximately 0.7, considering the data we have available. 

#### 370 

## Long-term geodetic data (InSAR and GNSS) 

371 Here, we describe only the GNSS data for COPH and MLZS stations, which are the closest to the 372 volcano (Fig. 5). Data recorded by the other stations (MHID and CAVH) are shown in Figure S2. 373 Our analysis indicates that the GNSS time series projected onto the radar line-of-sight (LOS) agrees 374 well with the InSAR time series. Therefore, both datasets record the same deformation process 375 within their uncertainties and dierences in spatiotemporal sampling (Fig. 5). From a long-term 376 perspective, InSAR ground velocities calculated from time series show that Copahue volcano uplifted 377 with a velocity of up to 6 mm/yr in the radar LOS between February 2016 and the end of 2021 378 (Fig. 5a). A close inspection of the GNSS time series (Fig. 5b,c and Fig. S2) shows that this 

15 

- 379 yearly average trend is composed of three distinct trends. These are (1) an episode of uplift with 380 a total uplift of 34 cm lasting from September 2017 to March 2020; (2) an episode of subsidence 381 of 2 cm from March 2020 until the end of the study period in late 2021; and (3) seasonal signals 382 with peak-to-peak amplitudes of 12 cm. These trends are interpreted as a period of ination and 

- 383 subsequent deation on the volcano. None of the six eruptions that occurred during the period of 

- 384 this study were related to coeval ground deformation (i.e., deformation days before the eruptions) 

- 385 above the background level of noise in the data. 

Figure 2. Temporal evolution of the consensus (black lines) 10 days before each volcanic eruption (red vertical lines). The consensus for each eruption is out of sample, that is, the estimated consensus with the model that does not see the corresponding eruption during training. For illustrative purposes, a threshold of 0.7 (orange dashed line) is plotted. 

16 

Figure 3. Temporal evolution of the consensus (gray line) over the analysis period. A rolling mean using a window of 48 hr is plotted in black to show a smoother representation of the general behavior of the consensus values. Volcanic eruptions are indicated by the vertical red lines. For illustrative purposes, a threshold of 0.7 (orange dashed line) is plotted. 

Figure 4. Receiver operating characteristic curve at dierent thresholds. The vertical axis represents the true positive rate (sensitivity), and the horizontal axis represents the false positive rate (1-specicity). The area under the curve is also estimated (0.88). The red dashed line represents the diagonal for illustrative purposes. 

17 

#### 386 

# Discussions 

#### 387 

## Short-term forecasting model 

- 388 Using a threshold of 0.7 for alert activation and a warning duration of 48 hr (Fig. 2), alerts are 389 initiated within a range of 5 (eruption 3) to 75 hr (eruption 5) before the eruptions. This suggests 390 that the pre-eruptive processes in the same volcano may not consistently manifest in the data with 391 the same amount of time in advance or that they could manifest with dierent magnitudes, aecting 392 the ability to detect them. This behavior is probably due to the variability of the processes (e.g., uid 393 transport, degassing) that might take place inside the volcano before each eruption (e.g., Acocella 394 et al., 2023). 

395 On the other hand, eruption 4 occurs outside the warning period, leading to an FN. We observe 396 that this occurs because the consensus value drops drastically below 0.7, 48.5 hr before the occurrence 397 of the eruption. This could indicate that there are statistical dierences between the features 48 hr 398 before eruption 4 and 48 hr before the remaining eruptions. Similarly, when testing this approach 399 in Whakaari (New Zealand), the model obtained by Dempsey et al. (2022) missed an eruption out 400 of seven. That outcome and the similar nding here are a caution for future automated forecasting 401 systems that they cannot be relied on to anticipate all eruptions and that future eruptions may have 402 dierent precursors to those previously studied. 

18 

Figure 5. (a) Line-of-sight (LOS) velocity map of the Interferometric Synthetic Aperture Radar (InSAR) from the stack of Sentinel-1 interferograms between 2016 and 2021. The green inverted triangles denote the Global Navigation Satellite System (GNSS) stations, a red circle denotes the Copahue active crater, and a black point denotes the reference point (Ref) of the InSAR. (b,c) LOS displacement time series for the COPH and MLZS stations (blue dots) and GNSS observations projected with respect to LOS (black dots). The vertical red lines denote the Copahue eruptive episodes. 

403 The unique case of eruption 4 is intriguing because it highlights the importance of not only 404 accurately setting the alert threshold but also determining the appropriate duration of the warning 

19 

- 405 period for successful volcanic eruption forecasting. A minor modication in the time window could 

- 406 have led to a precise forecast of eruption 4. Nonetheless, such an adjustment might also pose the 407 potential for false detections in other temporal contexts. It is also a hindsight assessment of the 408 hypothetical warning model. Consequently, investigating the ecacy of diverse models employing 409 both shorter and longer warning windows can contribute to a more comprehensive understanding of 410 the required time window for identifying pre-eruptive phases. In this direction, Ardid et al. (2024) 411 explore the use of dierent windows using template matching for feature time series. 412 An alternative explanation for eruption 4 occurring outside the warning window could be poten413 tial inaccuracies in the eruption date and/or a smaller magnitude of this event. Reports of eruption 414 occurrence times depend largely on surface observations (e.g., cameras, ash emissions, deformation) 415 and reports from the local population, which could introduce a time lag in the reported times in 416 the case of low-visible manifestations or dominant subsurface processes. Eruption 4 occurred on 417 7 September 2020, and a little ash plume was reported by local people without further alert from 418 the agencies. After that, there were no reports of eruptions at the volcano until 2021, which could 419 indicate that there was a decrease in volcanic activity. Figure 3 shows that after eruption 4, the 420 consensus starts to decay in time until the beginning of 2021. This correlates with SO 2 emissions 421 measured by a dierential optical absorption spectroscopy (DOAS) deployed by the OVDAS (Fig. 422 S4), which show anomalous SO 2 values from June 2020 (date of eruption 1) until the end of 2020. 423 Thus, knowing the exact times when volcanic eruptions occur for training short-scale models is cru424 cial, and the integration of other parameters such as surface displacement from the high-rate Global 425 Positioning System (e.g., Mattia et al., 2008) and tilt from near-eld tiltmeters (e.g., Gambino et 426 al., 2014) is essential for their correct constraint. 

## 427 Limitations of the models 

428 The six eruptions of the Copahue volcano used in this work are phreatic or phreatomagmatic type, 429 low magnitude (VEI 12), and short duration. Therefore, our model is optimized for this type 430 of eruption. Nevertheless, our model missed eruptive pulse 4, which reects that models are not 431 infallible and that the statistics of this event are dierent from the others. In this aspect, the 432 integration of longer time series that include a greater number of eruptions as well as dierent types 433 of eruptions would allow training models that consider a wide range of scenarios. Similarly, extensive 

20 

434 analyses considering the needs of the dierent observatories for frequency ranges, alert thresholds, 435 and window durations will allow further optimization of these models, providing a complement to 436 current eorts (which is beyond the scope of this work). 

437 Many complex eruptive processes are composed of dierent phases, which can last from days to 438 weeks or months (e.g., Llaima volcano; Ruth et al., 2016; Franco et al., 2019), making it dicult 439 to dene a single date as an eruption. In this context, the denition of thresholds that allow to 440 establish a change in the state of a volcano, but in a data-driven way, represents a new opportunity. 441 For this, one approach would be to use the extensive databases of volcano state changes based on 442 observatory VAL systems (e.g., Volcanic Activity Bulletins in New Zealand or the Volcanic Activity 443 Report in Chile). In this way, models could be trained to learn directly from the data when to 444 change from one state to another, in addition to dening the respective thresholds quantitatively. 445 The time lag associated with the time it takes to make the decision must be taken into account. 

#### 446 

## Integrating short- and long-term data 

447 One advantage of seismic data is its high sampling rates (e.g., 100 Hz), which allow recording with 448 high temporal resolution and across a broad frequency range (0.01100 Hz, typically for broadband 449 instruments). This capability facilitates the detection of short-term changes. In contrast, InSAR 450 data and daily average positions from GNSS time series, while enabling the recovery of surface 451 deformations at lower frequencies (10<sup>_−_6</sup> 10<sup>_−_5</sup> Hz), in general, lack sensitivity to record signals from 452 small eruptions, such as those exhibited by Copahue volcano (VEI of 12). In addition, these data 453 sources have much lower sampling rates, with GNSS recording mainly daily or sub-daily (although 454 high-rate GNSS also exists, i.e., samples every 1 or 15 s, for example) and InSAR capturing data 455 every several days, depending on the SAR mission. In general, eruptions with a VEI of 12 (110 456 _×_ 10<sup>6</sup> m<sup>3</sup> ) of highly compressible magma with a water-rich phase like that erupted at Copahue 457 do not result in clear geodetic signals. This has been observed at other small-magnitude episodes 458 of deformation at Copahue during 20112016 (Lundgren et al., 2017; Velez et al., 2016) and other 459 Andean volcanoes like Cotopaxi (Morales Rivera et al., 2017), Sabancaya (MacQueen et al., 2020), 460 Peteroa (Romero et al., 2020), Nevados de Chillan (Cardona et al., 2021; Astort et al., 2022), and 461 Llaima, and Villarrica (Delgado et al., 2017). During the 20112016 episode of ground deformation 462 at Copahue, the rst eruptions occurred on 17 July 2012, and the largest eruption of the sequence 

21 

463 occurred on 22 December 2012 after more than one year of ground uplift (Velez et al., 2016; Caselli et 464 al., 2016; Lundgren et al., 2017). These eruptions did not signicantly reduce the source overpressure, 465 and no coeruptive deation was observed. Therefore, the uplift continued at least until 2016. A 466 similar situation was observed at Sabancaya volcano in southern Peru, where an episode of uplift 467 with a LOS average rate of 45 cm/yr lasting between 2013 and at least 2019 resulted in several 468 VEI 12 eruptions with a total erupted volume of less than 20 _×_ 10<sup>6</sup> m<sup>3</sup> (MacQueen et al., 2020; 469 Fries et al., 2023). 

470 To the rst order, these sequences of eruptions in these two volcanoes follow the same mechanical 471 behavior of the plumbing systemepisodes of unrest that result in volcano uplift lasting several 472 years, but no direct relation to the individual VEI 12 eruptions. However, a signicant dierence 473 between Copahue 2020 with Copahue 20112016 and Sabancaya is that the eruptions analyzed in this 474 study occur right after the whole edice starts to deate. The exact timing of deation is dicult 475 to assess without removing the seasonal signals recorded by the geodetic data. A more in-depth 476 analysis is left for future studies. The lack of correlation with the eruptions does not rule out that 477 deformation occurs near the vent in relation to shearing and/or pressurization of a gas slug inside 478 the conduit before magma fragmentation. This is likely to be detected only with borehole tiltmeters 479 located less than 1 km away from the vent (e.g., Ripepe et al., 2021). The lack of ground deformation 480 during individual explosions can also be explained by the magma compressibility, in which gas-rich 481 magmas accommodate pressure changes, resulting in little to no ground deformation (Mastin et 482 al., 2008). Magma extracted from a storage region beneath a volcano is decompressed explosively, 483 resulting in erupted volumes that are signicantly larger than the inferred sources' volume changes by 484 a factor between 3 and 10 (e.g., Delgado et al., 2017). If we assume that magma erupted from a deep 485 source located at a depth of 7 km imaged with InSAR by Lundgren et al. (2017) but with spherical 486 geometry, then the maximum vertical deformation is 4.848 mm for source volume changes of 110 487 _×_ 10<sup>6</sup> m<sup>3</sup> . If we scale this by a factor of 310 to take into account the magma compressibility, 488 then the predicted ground deformation is within the noise in the geodetic time series. Indeed, 489 none of our geodetic data show any clear deformation signal related to these eruptions. Volumes of 490 erupted tephra derived from eld isopachs are not available for direct comparison with these models. 491 Therefore, the six eruptions can be interpreted as leakages to the surface of geodetically undetectable 492 small volumes of magmatic uids driven by an episode of reservoir pressurization during 20172020, 

22 

493 resulting in a lack of clear coeruptive source subsidence due to source deation. In the future, the 494 integration of high-resolution tiltmeters (e.g., <0.005 microradians; see Gambino et al., 2014, for a 495 review) in the near eld could improve the ability to detect low-amplitude geodetic signals. 496 The deformation during 20172020 is similar in spatial wavelength and location to the volcano497 wide uplift that occurred between 2011 and 2016, but signicantly slower in velocity with respect 498 to the LOS rates of 1215 cm/yr observed by Lundgren et al. (2017). This implies that both the 499 episodes of uplift were likely produced by the same deformation sourcesa near-vertical, elongated 500 source at a depth of 2.5 km that represents a conduit and a plunging source at a depth of 7 km 501 that likely corresponds to the uppermost uid-rich layer of a crystal mush (Lundgren et al., 2017). 502 Under the assumption of a linear elastic rheology, pressure changes are proportional to ground 503 deformation. Therefore, if the deformation sources are the same for the 20112016 and 20172020 504 episodes of uplift, the change in deformation magnitude from 1215 cm/yr to 6 mm/yr implies a 505 change in source pressure of at least one order of magnitude between the two episodes. A detailed 506 geophysical inversion of these deformation sources is beyond the scope of this study. 

507 Because understanding what role (if any) long-term processes play in smaller-scale eruptions is 508 critical to advance our understanding of volcanic processes, the integration of both types of data 509 in the construction of these forecasting models oers promising future avenues. In this context, 510 geodetic data (e.g., from GNSS, InSAR, and tiltmeters) or other types of data (e.g., SO 2 emissions, 511 infrasound, seismicity rate, among others) could be integrated to assess whether the performance 512 of the model improves. For example, Farias et al. (2023) proposed that variations in the behavior 513 of the Copahue volcano would be related to variations in the b-value, which is derived from the 514 seismicity rate in the region. Similarly, Hantusch et al. (2021) proposed that similar variations can 515 be monitored from infrasound recording and ash characteristics. Thus, nding ways to integrate this 516 type of data, as well as understanding the information it provides about the physics of the system, 517 is a challenge that must be addressed. 

## 518 Multiple volcano datasets 

519 Recent studies by Dempsey et al. (2022) and Ardid, Dempsey, Caudron, Cronin, Kennedy, et 520 al. (2023) have successfully demonstrated the applicability of our approach not only to Copahue 521 volcano but also to other volcanoes worldwide. Expanding this methodology to incorporate data 

23 

522 from multiple volcanoes in the southern Andes oers a valuable opportunity to assess data-driven 523 techniques based on ML. Active volcanoes such as Villarrica (Palma et al., 2008), Cordón Caulle 524 (Basualto et al., 2023), Nevados de Chillán (Cardona et al., 2021), Lascar (Gaete et al., 2019), 525 and others within the region have undergone eruptions in recent years, and these events have been 526 meticulously recorded using seismic data. 

527 In light of this, a transition toward a policy of open, real-time data by observatories becomes 528 imperative. This shift presents a challenging yet crucial endeavor that requires attention. By 529 embracing open data practices across multiple volcanic sites, observatories can facilitate the testing 530 and implementation of data-driven ML methods for enhanced volcanic monitoring and early warning 531 systems. The collective insights gained from diverse volcanic activities contribute to rening and 532 advancing our understanding of volcanic processes and eruption prediction methodologies. 

# 533 Conclusions 

534 The short-term forecasting model presented in this study shows the potential for early eruption 535 alerts at Copahue Volcano, located in the southern Andes, suggesting a broader application beyond 536 New Zealand, where this approach was initially conceived (e.g., Dempsey et al., 2022). Our study 537 reveals uctuating alert times for recurrent eruptions from the same volcanic source, highlighting 538 the challenges in consistently forecasting eruptions with a xed alert duration, particularly evident 539 in the case of eruption 4. Thus, our ndings underscore the importance of carefully setting alert 540 thresholds and determining appropriate alert periods, acknowledging that adjustments may not only 541 lead to more accurate forecasts in specic cases but could also introduce the risk of false detections 542 in others. Our study also highlights the need for caution in relying solely on automated forecasting 543 systems, as demonstrated by missed eruptions in both the current research and previous studies. 544 This underlines the complexity of volcanic processes and the variability of precursors, emphasizing 545 the necessity of continued research and diverse model testing to enhance the reliability of volcanic 546 eruption forecasting. 

547 Furthermore, the integration of short- and long-term data emerges as a crucial aspect of ad548 vancing volcanic forecasting models. Although seismic data provide high temporal resolution for 549 detecting short-term signals, combining it with geodetic data and/or others (e.g., SO 2 emissions, 

24 

- 550 tiltmeter measurements, infrasound) might oer a more comprehensive understanding of volcanic 

- 551 behavior, providing insights on processes that occur over longer time scales. For Copahue, geodetic 552 observations do not provide insights on the scale of individual eruptions that last a few minutes to 553 hours. For this aim, assessing the role of long-term processes in smaller eruptions (if any) becomes 554 crucial. 

#### 555 

# Data and Resources 

556 The seismic data used in this study was provided by the National University of Rio Negro (UNRN; 557 https://www.unrn.edu.ar/home). Global Navigation Satellite System (GNSS) and SO 2 data are 558 available through the Southern Andes Volcano Observatory (Observatorio Volcanológico de los Andes 559 del Sur, OVDAS) together with the National Seismological Center (Centro Sismológico Nacional, 560 CSN) of the Universidad de Chile (see http://gnss.csn.uchile.cl). Interferometric Synthetic 561 Aperture Radar (InSAR) data are available on the COMET-LiCS Sentinel-1 InSAR portal (https: 562 //comet.nerc.ac.uk/comet-lics-portal/). All websites were last accessed in January 2024. The 563 supplemental material to this article includes Figures S1S4. 

# 564 Declaration of Competing Interests 

565 The author acknowledges that there are no conicts of interest recorded. 

#### 566 

# Acknowledgments 

567 L. C. and S. R. thank the support of the Programa de Riesgo Sísmico (PRS; Seismic Risk Program; 568 https://prs.uchile.cl/, last accessed January 2024) of the Universidad de Chile and the project 569 FONDECYT Regular N°1200779 of the Agencia Nacional de Investigación y Desarrollo (ANID). S. 570 R. and J. C. B. thank the support of the project FONDECYT Regular N°1240501, ANID, Chile. 571 The authors wish to thank NZ MBIE UOAX1913 (Transitioning Taranaki to a Volcanic Future) 572 for the support of A. A., D. D., and S. J. C. during this study. The authors wish to thank NZ 573 MBIE E7774 (Adapting to climate change through stronger geothermal enterprises') for the support 574 of A. A., D. D., and S. J. C. during this study. F. D. acknowledges FONDECYT de Iniciación 

25 

- 575 Research Grant 11220513 for funding and Paul Lundgren for discussions on the Copahue volcano. 

- 576 The authors also thank the Editor-in-Chief Allison Bent, the Guest Editor Alicia Hotovec-Ellis, and 

- 577 two anonymous reviewers who have helped improve this work. 

# 578 References 

- 579 [1] Acocella, V., M. Ripepe, E. Rivalta, A. Peltier, F. Galetto, and E. Joseph (2023). Towards 580 scientic forecasting of magmatic eruptions, Nat. Rev. Earth Environ. 5, 522. 

- 581 [2] Agusto, M. R., A. Caselli, R. Daga, J. Varekamp, A. Trinelli, M. Dos Santos Afonso, M. Velez, 582 P. Euillades, and S. Ribeiro Guevara (2017). The Crater Lake of Copahue volcano (Argentina): 583 geochemical and thermal changes between 1995 and 2015, Geol. Soc. Spec. Publ. 437, 107130. 

- 584 [3] Anantrasirichai, N., J. Biggs, F. Albino, P. Hill, and D. Bull (2018). Application of machine 585 learning to classication of volcanic deformation in routinely generated InSAR data, J. Geophys. 586 Res. 123, no. 8, 65926606. 

- 587 [4] Ardid, A., D. Dempsey, C. Caudron, and S. Cronin (2022). Seismic precursors to the Whakaari 588 2019 phreatic eruption are transferable to other eruptions and volcanoes, Nat. Commun. 13, 589 no. 1, 2002. 

- 590 [5] Ardid, A., D. Dempsey, C. Caudron, S. Cronin, B. Kennedy, T. Girona, S. Potter, O. Lamb, C. 591 Miller, L. Cabrera, S. Ruiz, et al. (2023). Generalized eruption forecasting models using machine 592 learning trained on seismic data from 24 volcanoes, doi: 10.21203/rs.3.rs-3483573/v1. 

- 593 [6] Ardid, A., D. Dempsey, C. Caudron, S. J. Cronin, C. A. Miller, I. Melchor, D. Syahbana, and 594 B. Kennedy (2023). Using template matching to detect hidden uid release episodes beneath 595 crater lakes in Ruapehu, Copahue, and Kawah Ijen volcanoes, J. Geophys. Res. 128, no. 10, 596 e2023JB026729, doi: 10.1029/2023JB026729. 

- 597 [7] Ardid, A., D. Dempsey, G. Corry, O. Lamb, and S. Cronin (2024). Discovering eruption precur598 sors through multi time-scale template matching using seismic time series feature engineering, 599 Seismol. Res. Lett. doi: 10.1785/0220240012. 

26 

- 600 [8] Astort, A., G. Boixart, A. Folguera, and M. Battaglia, (2022). Volcanic unrest at Nevados de 601 Chillán (Southern Andean Volcanic Zone) from January 2019 to November 2020, imaged by 602 DInSAR, J. Volcanol. Geotherm. Res. 427, 107568. 

- 603 [9] Báez, J. C., F. Leyton, C. Troncoso, F. del Campo, M. Bevis, C. Vigny, M. Moreno, M. Simons, 604 E. Kendrick, H. Parra, et al. (2018). The Chilean GNSS Network: Current status and progress 605 toward early warning applications, Seismol. Res. Lett. doi: 10.1785/0220180011. 

- 606 [10] Barberi, F., A. Bertagnini, P. Landi, and C. Principe (1992). A review on phreatic eruptions 607 and their precursors, J. Volcanol. Geotherm. Res. 52, no. 4, 231246. 

- 608 [11] Barberi, F., L. Civetta, M. Rosi, and R. Scandone (2009). Chronology of the 2007 eruption of 609 Stromboli and the activity of the Scientic Synthesis Group, J. Volcanol. Geotherm. Res. 182, 610 nos. 3/4, 123130. 

- 611 [12] Barcelona, H., M. Senger, and D. Yagupsky (2021). Resource assessment of the Copahue 612 geothermal eld, Geothermics 90, 101987. 

- 613 [13] Basualto, D., A. Tassara, J. Gil-Lazo, L. Franco-Marin, C. Cardona, J. San Martín, F. Gil-Cruz, 614 M. Calabi-Floddy, and C. Farías (2023). Anatomy of a high-silica eruption as observed by a 615 local seismic network: The June 2011 PuyehueCordónCaulle event (southern Andes, Chile), 616 Solid Earth 14, no. 1, 6987. 

- 617 [14] Beroza, G. C., and S. Ide (2011). Slow earthquakes and nonvolcanic tremor, Annu. Rev. Earth 618 Planet. Sci. 39, 271296. 

- 619 [15] Biggs, J., N. Anantrasirichai, F. Albino, M. Lazecky, and Y. Maghsoudi (2022). Large-scale 620 demonstration of machine learning for the detection of volcanic deformation in Sentinel-1 satel621 lite imagery, Bull. Volcanol. 84, no. 12, 100. 

- 622 [16] Brown, S. K., S. F. Jenkins, R. S. J. Sparks, H. Odbert, and M. R. Auker (2017). Volcanic 623 fatalities database: Analysis of volcanic threat with distance and victim classication, J. Appl. 624 Volcanol. 6, 120. 

- 625 [17] Cardona, C., F. Gil-Cruz, L. Franco-Marín, J. San Martín, O. Valderrama, J. Lazo, C. Cartes, 626 S. Morales, E. Hernández, J. Quijada, et al. (2021). Volcanic activity accompanying the em- 

27 

- 627 placement of dacitic lava domes and eusion of lava ows at Nevados de Chillán Volcanic 628 ComplexChilean Andes (2012 to 2020), J. Volcanol. Geotherm. Res. 420, 107409. 

- 629 [18] Carniel, R., and S. Guzmán (2021). Machine learning in volcanology: A review, in Volcanoes630 Updates in Volcanology doi: 10.5772/intechopen.94217. 

- 631 [19] Caselli, A. T., M. L. Velez, M. Agusto, C. Liccioli, and O. Vaselli (2016). Prehistoric to historic 632 volcanic activity at Copahue volcano, in Copahue Volcano, Springer, Berlin, Heidelberg, 4959, 633 doi: 10.1007/978-3-662-48005-2_3. 

- 634 [20] Caudron, C., T. Girona, B. Taisne, Suparjan, H. Gunawan, Kristianto, and Kasbani (2019). 635 Change in seismic attenuation as a long-term precursor of gas-driven eruptions, Geology 47, no. 636 7, 632636. 

- 637 [21] Chardot, L., A. D. Jolly, B. M. Kennedy, N. Fournier, and S. Sherburn (2015). Using volcanic 638 tremor for eruption forecasting at White Island volcano (Whakaari), New Zealand, J. Volcanol. 639 Geotherm. Res. 302, 1123. 

- 640 [22] Christ, M., N. Braun, J. Neuer, and A. W. Kempa-Liehr (2018). Time series feature extraction 641 on basis of scalable hypothesis tests (tsfresha Python package), Neurocomputing 307, 7277. 

- 642 [23] Christenson, B. W., A. G. Reyes, R. Young, A. Moebis, S. Sherburn, J. Cole-Baker, and K. 643 Britten (2010). Cyclic processes and factors leading to phreatic eruption events: Insights from 644 the 25 September 2007 eruption through Ruapehu Crater Lake, New Zealand, J. Volcanol. 645 Geotherm. Res. 191, nos. 12, 1532. 

- 646 [24] Costantino, G., S. Giard-Roisin, M. Radiguet, M. Dalla Mura, D. Marsan, and A. Socquet 647 (2023). Multi-station deep learning on geodetic time series detects slow slip events in Cascadia, 648 Commun. Earth Environ. 4, no. 1, 435. 

- 649 [25] De la Cruz-Reyna, S., and G. A. Reyes-Dávila (2001). A model to describe precursory material650 failure phenomena: Applications to short-term forecasting at Colima volcano, Mexico, Bull. 651 Volcanol. 63, no. 5, 297308. 

- 652 [26] Delgado, F., M. E. Pritchard, S. Ebmeier, P. González, and L. Lara (2017). Recent unrest 653 (20022015) imaged by space geodesy at the highest risk Chilean volcanoes: Villarrica, Llaima, 654 and Calbuco (Southern Andes), J. Volcanol. Geotherm. Res. 344, 270288. 

28 

- 655 [27] Dempsey, D. E., S. J. Cronin, S. Mei, and A. W. Kempa-Liehr (2020). Automatic precursor 656 recognition and real-time forecasting of sudden explosive volcanic eruptions at Whakaari, New 657 Zealand, Nat. Commun. 11, no. 1, 3562. 

- 658 [28] Dempsey, D. E., A. W. Kempa-Liehr, A. Ardid, A. Li, S. Orenia, J. Singh, A. J. Tyler, and S. 659 J. Cronin (2022). Evaluation of short-term probabilistic eruption forecasting at Whakaari, New 660 Zealand, Bull. Volcanol. 84, no. 10, 91. 

- 661 [29] Doin, M. P., S. Guillaso, R. Jolivet, C. Lasserre, F. Lodge, G. Ducret, and R. Grandin (2011). 662 Presentation of the small baseline NSBAS processing chain on a case example: The Etna 663 deformation monitoring from 2003 to 2010 using Envisat data, Proc. of the Fringe Symposium, 664 Frascati, Italy, 34343437. 

- 665 [30] Donoso, F., V. Yáñez, F. Ortega-Culaciati, and M. Moreno (2023). A machine learning approach 666 for slow slip event detection using GNSS time-series, J. South Am. Earth Sci. 132, 104680. 

- 667 [31] Efron, B., and R. Tibshirani (1986). Bootstrap methods for standard errors, condence intervals, 668 and other measures of statistical accuracy, Stat. Sci. 1, 5475. 

- 669 [32] Endo, E. T., and T. Murray, (1991). Real-time seismic amplitude measurement (RSAM): A 670 volcano monitoring and prediction tool, Bull. Volcanol. 53, 533545. 

- 671 [33] Farias, C., J. Lazo, D. Basualto, M. Saavedra, F. Muñoz-Quiroz, L. Zuñiga-Urrea, R. Martínez672 Bravo, I. Huentenao-Inostroza, and R. Saéz-Opazo, (2023). One decade of b-value variations 673 from volcano-tectonic seismicity as an early indicator of episodes of crisis in a volcano: The 674 case of Copahue, Southern Andes, Front. Earth Sci. 11, 1181177. 

- 675 [34] Fattahi, H., and F. Amelung (2014). InSAR uncertainty due to orbital errors, Geophys. J. Int. 676 199, no. 1, 549560. 

- 677 [35] Fearnley, C. J., W. J. McGuire, G. Davies, and J. Twigg (2012). Standardisation of the USGS 678 Volcano Alert Level System (VALS): Analysis and ramications, Bull. Volcanol. 74, 20232036. 

- 679 [36] Folguera, A., E. Rojas Vera, L. Vélez, J. Tobal, D. Orts, M. Agusto, A. Caselli, and V. A. Ramos 680 (2016). A review of the geology, structural controls, and tectonic setting of Copahue volcano, 681 Southern Volcanic Zone, Andes, Argentina, in Copahue Volcano, Springer, Berlin, Heidelberg, 682 322, doi: 10.1007/978-3-662-48005-2_1. 

29 

- 683 [37] Franco, L., J. L. Palma, L. E. Lara, F. Gil-Cruz, C. Cardona, D. Basualto, and J. San Martin 684 (2019). Eruptive sequence and seismic activity of Llaima volcano (Chile) during the 20072009 685 eruptive period: Inferences of the magmatic feeding system, J. Volcanol. Geotherm. Res. 379, 686 90105. 

- 687 [38] Fries, A., L. Dominguez, P. A. Jarvis, M. Pistolesi, N. Manrique, R. Aguilar, D. Valdivia, E. 688 Rossi, S. Pollastri, C. J. Horwell, et al. (2023). The post-2016 long-lasting Vulcanian activity 689 of Sabancaya volcano (Peru) and associated aeolian remobilisation of volcanic ash, J. Volcanol. 690 Geotherm. Res. 441, 107876, doi: 10.1016/j.jvolgeores.2023.107876. 

- 691 [39] Gaete, A., S. Cesca, L. Franco, J. San Martin, C. Cartes, and T. R. Walter (2019). Seismic 692 activity during the 20132015 intereruptive phase at Lascar volcano, Chile, Geophys. J. Int. 693 219, no. 1, 449463. 

- 694 [40] Gambino, S., G. Falzone, A. Ferro, and G. Laudani (2014). Volcanic processes detected by 695 tiltmeters: A review of experience on Sicilian volcanoes, J. Volcanol. Geotherm. Res. 271, 696 4354. 

- 697 [41] Garcés, M., M. Iguchi, K. Ishihara, M. Morrissey, Y. Sudo, and T. Tsutsui (1999). Infrasonic 698 precursors to a Vulcanian eruption at Sakurajima Volcano, Japan, Geophys. Res. Lett. 26, no. 699 16, 25372540. 

- 700 [42] Girona, T., C. Caudron, and C. Huber (2019). Origin of shallow volcanic tremor: The dynamics 701 of gas pockets trapped beneath thin permeable media, J. Geophys. Res. 124, no. 5, 48314861. 

- 702 [43] Global Volcanism Program (2020). Report on Copahue (Chile-Argentina), in Bulletin of the 703 Global Volcanism Network, K. L. Bennis and E. Venzke (Editors), Vol. 45, Smithsonian Insti704 tution, Washington, D.C., 12 pp., doi: 10.5479/si.GVP.BGVN202012-357090. 

- 705 [44] Global Volcanism Program (2021). Report on Copahue (Chile-Argentina), Bulletin of the Global 706 Volcanism Network, K. L. Bennis and E. Venzke (Editors), Vol. 46, Smithsonian Institution, 707 Washington, D.C., 11 pp., doi: 10.5479/si.GVP.BGVN202111-357090. 

- 708 [45] Gomba, G., F. R. González, and F. De Zan (2016). Ionospheric phase screen compensation for 709 the Sentinel-1 TOPS and ALOS-2 ScanSAR modes, IEEE Trans. Geosci. Remote Sens. 55, no. 710 1, 223235. 

30 

- 711 [46] Hantusch, M., G. Lacanna, M. Ripepe, V. Montenegro, O. Valderrama, C. Farias, A. Caselli, 712 and R. Cioni (2021). Low-energy fragmentation dynamics at Copahue Volcano (Argentina) as 713 revealed by an infrasonic array and ash characteristics, Front. Earth Sci. 9, 578437. 

- 714 [47] Kobayashi, T., Y. Morishita, and H. Munekane (2018). First detection of precursory ground 715 ination of a small phreatic eruption by InSAR, Earth Planet. Sci. Lett. 491, 244254. 

- 716 [48] Konstantinou, K. I., and V. Schlindwein (2003). Nature, waveeld properties and source mech717 anism of volcanic tremor: A review, J. Volcanol. Geotherm. Res. 119, nos. 1/4, 161187. 

- 718 [49] Lamberti, M. C., N. Vigide, S. Venturi, M. Agusto, D. Yagupsky, D. Winocur, H. Barcelona, M. 719 Velez, C. Cardelli, and F. Tassi (2019). Structural architecture releasing deep-sourced carbon 720 dioxide diuse degassing at the CaviahueCopahue Volcanic Complex, J. Volcanol. Geotherm. 721 Res. 374, 131141. 

- 722 [50] Lawrence, B. N., V. L. Bennett, J. Churchill, M. Juckes, P. Kershaw, S. Pascoe, S. Pepler, 723 M. Pritchard, and A. Stephens (2013). Storing and manipulating environmental big data with 724 JASMIN, 2013 IEEE International Conference on Big Data, IEEE, 6875. 

- 725 [51] Lazecký, M., K. Spaans, P. J. González, Y. Maghsoudi, Y. Morishita, F. Albino, J. Elliott, N. 726 Greenall, E. Hatton, et al. (2020). LiCSAR: Una herramienta InSAR automática para medir y 727 monitorear la actividad tectónica y volcánica, Teledetección 12, no. 15, 2430. 

- 728 [52] Lee, S. W., S. H. Yun, D. H. Kim, D. Lee, Y. J. Lee, and B. E. Schutz (2015). Real-time volcano 729 monitoring using GNSS single-frequency receivers, J. Geophys. Res. 120, no. 12, 85518569. 

- 730 [53] López-Quiroz, P., M. P. Doin, F. Tupin, P. Briole, and J. M. Nicolas (2009). Time series analysis 731 of Mexico City subsidence constrained by radar interferometry, J. Appl. Geophys 69, no. 1, 115. 

- 732 [54] Lundgren, P., M. Nikkhoo, S. V. Samsonov, P. Milillo, F. Gil-Cruz, and J. Lazo (2017). Source 733 model for the Copahue volcano magma plumbing system constrained by InSAR surface defor734 mation observations, J. Geophys. Res. 122, no. 7, 57295747. 

- 735 [55] MacQueen, P., F. Delgado, K. Reath, M. E. Pritchard, M. Bagnardi, P. Milillo, P. Lundgren, O. 736 Macedo, V. Aguilar, M. Ortega, et al. (2020). Volcano-tectonic interactions at Sabancaya vol737 cano, Peru: Eruptions, magmatic ination, moderate earthquakes, and fault creep, J. Geophys. 738 Res. 125, e2019JB019281, doi: 10.1029/2019JB019281. 

31 

- 739 [56] Major, J. J., and L. E. Lara (2013). Overview of Chaitén Volcano, Chile, and its 2008-2009 740 eruption, Andean Geol. 40, no. 2, 196215. 

- 741 [57] Majstorovi¢, J., S. Giard-Roisin, and P. Poli (2021). Designing convolutional neural network 742 pipeline for near-fault earthquake catalog extension using single-station waveforms, J. Geophys. 743 Res. 126, no. 7, e2020JB021566, doi: 10.1029/2020JB021566. 

- 744 [58] Manley, G. F., T. A. Mather, D. M. Pyle, D. A. Clifton, M. Rodgers, G. Thompson, and D. 745 C. Roman (2021). Machine learning approaches to identifying changes in eruptive state using 746 multi-parameter datasets from the 2006 eruption of Augustine volcano, Alaska, J. Geophys. 747 Res. 126, no. 12, e2021JB022323, doi: 10.1029/2021JB022323. 

- 748 [59] Manley, G. F., D. M. Pyle, T. A. Mather, M. Rodgers, D. A. Clifton, B. G. Stokell, G. Thomp749 son, J. M. Londoño, and D. C. Roman (2020). Understanding the timing of eruption end using 750 a machine learning approach to classication of seismic time series, J. Volcanol. Geotherm. Res. 751 401, 106917. 

- 752 [60] Marzocchi, W., and M. S. Bebbington (2012). Probabilistic eruption forecasting at short and 753 long time scales, Bull. Volcanol. 74, 17771805. 

- 754 [61] Mastin, L. G., E. Roelos, N. M. Beeler, and J. E. Quick (2008). Constraints on the size, 755 overpressure, and volatile content of the Mount St. Helens magma system from geodetic and 756 dome-growth measurements during the 20042006+ eruption, in A volcano rekindled: The 757 renewed eruption of Mount St. Helens 20042006, D. R. Sherrod, W. E. Scott, and P. H. 758 Stauer (Editors), U.S. Geol. Surv. Professional Paper 1750, 461488, doi: 10.3133/pp175022. 

- 759 [62] Mattia, M., M. Palano, M. Aloisi, V. Bruno, and Y. Bock (2008). High rate GPS data on active 760 volcanoes: an application to the 20052006 Mt. Augustine (Alaska, USA) eruption, Terra Nova 761 20, no. 2, 134140. 

- 762 [63] Melchor, I., J. Almendros, R. Carniel, K. I. Konstantinou, M. Hantusch, and A. Caselli (2020). 763 On data reduction methods for volcanic tremor characterization: The 2012 eruption of Copahue 764 volcano, Southern Andes, Earth Planets Space 72, 110. 

- 765 [64] Melchor, I., J. Almendros, M. Hantusch, S. Samsonov, D. Derauw, E. Martínez, and A. Caselli 766 (2022). Long-duration seismicity and their relation to Copahue volcano unrest, Earth Planets 

32 

- 767 Space 74, no. 1, 3. 

- 768 [65] Montenegro, V. M., S. Spagnotto, D. Legrand, and A. T. Caselli (2021). Seismic evidence of 769 the active regional tectonic faults and the Copahue volcano, at Caviahue Caldera, Argentina, 770 Bull. Volcanol. 83, 116. 

- 771 [66] Morales Rivera, A. M., F. Amelung, P. Mothes, S.-H. Hong, J.-M. Nocquet, and P. Jarrin 772 (2017), Ground deformation before the 2015 eruptions of Cotopaxi volcano detected by InSAR, 773 Geophys. Res. Lett. 44, 66076615, doi: 10.1002/2017GL073720. 

- 774 [67] Morishita, Y. (2021). Nationwide urban ground deformation monitoring in Japan using Sentinel775 1 LiCSAR products and LiCSBAS, Prog. Earth Planet. Sci. 8, no. 1, 123. 

- 776 [68] Morishita, Y., M. Lazecky, T. J. Wright, J. R. Weiss, J. R. Elliott, and A. Hooper (2020). 777 LiCSBAS: An open-source InSAR time series analysis package integrated with the LiCSAR 778 automated Sentinel-1 InSAR processor, Remote Sens. 12, no. 3, 424. 

- 779 [69] Morishita, Y., R. Sugimoto, R. Nakamura, C. Tsutsumi, R. Natsuaki, and M. Shimada (2023). 780 Nationwide urban ground deformation in Japan for 15 years detected by ALOS and Sentinel-1, 781 Prog. Earth Planet. Sci. 10, no. 1, 120. 

- 782 [70] Mousavi, S. M., and G. C. Beroza (2023). Machine learning in earthquake seismology, Annu. 783 Rev. Earth Planet. Sci. 51, 105129 

- 784 [71] Naismith, A. K., I. M. Watson, R. Escobar-Wolf, G. Chigna, H. Thomas, D. Coppola, and C. 785 Chun (2019). Eruption frequency patterns through time for the current (19992018) activity 786 cycle at Volcán de Fuego derived from remote sensing data: Evidence for an accelerating cycle 787 of explosive paroxysms and potential implications of eruptive activity, J. Volcanol. Geotherm. 788 Res. 371, 206219. 

- 789 [72] Novoa, C., D. Rémy, M. Gerbault, J. C. Báez, A. Tassara, L. Cordova, C. Cardona, M. Granger, 790 S. Bonvalot, and F. Delgado (2019). Viscoelastic relaxation: A mechanism to explain the de791 cennial large surface displacements at the Laguna del Maule silicic volcanic complex, Earth 792 Planet. Sci. Lett. 521, 4659. 

- 793 [73] Palma, J. L., E. S. Calder, D. Basualto, S. Blake, and D. A. Rothery (2008). Correlations 794 between SO 2 ux, seismicity, and outgassing activity at the open vent of Villarrica volcano, 

33 

- 795 Chile, J. Geophys. Res. 113, no. B10, doi: 10.1029/2008JB005577. 

- 796 [74] Pedregosa, F., G. Varoquaux, A. Gramfort, V. Michel, B. Thirion, O. Grisel, M. Blondel, P. 797 Prettenhofer, R. Weiss, V. Dubourg, et al. (2011). Scikit-learn: Machine learning in Python, J. 798 Mach. Learn. Res. 12, 28252830. 

- 799 [75] Poland, M. P., and K. R. Anderson (2020). Partly cloudy with a chance of lava ows: Forecasting 800 volcanic eruptions in the twenty-rst century, J. Geophys. Res. 125, no. 1, e2018JB016974, doi: 801 10.1029/2018JB016974. 

- 802 [76] Potter, S. H., G. E. Jolly, V. E. Neall, D. M. Johnston, and B. J. Scott (2014). Communicating 803 the status of volcanic activity: Revising New Zealand's volcanic alert level system, J. Appl. 804 Volcanol. 3, no. 1, 116. 

- 805 [77] Ren, C. X., A. Peltier, V. Ferrazzini, B. Rouet-Leduc, P. A. Johnson, and F. Brenguier (2020). 806 Machine learning reveals the seismic signature of eruptive behavior at Piton de la Fournaise 807 volcano, Geophys. Res. Lett. 47, no. 3, e2019GL085523, doi: 10.1029/2019GL085523. 

- 808 [78] Ripepe, M., G. Lacanna, M. Pistolesi, M. C. Silengo, A. Aiuppa, M. Laiolo, F. Massimetti, L. 809 Innocenti, M. Della Schiava, M. Bitetto, et al. (2021). Ground deformation reveals the scale810 invariant conduit dynamics driving explosive basaltic eruptions, Nat. Commun. 12, 1683, doi: 811 10.1038/s41467-021-21722-2. 

- 812 [79] Romero, J. E., F. Aguilera, F. Delgado, D. Guzmán, A. R. Van Eaton, N. Luengo, J. Caro, J. 813 Bustillos, J. Guevara, S. Holbik, et al. (2020). Combining ash analyses with remote sensing to 814 identify juvenile magma involvement and fragmentation mechanisms during the 2018/19 small 815 eruption of Petero a volcano (Southern Andes), J. Volcanol. Geotherm. Res. 402, 106984, doi: 816 10.1016/j.jvolgeores.2020.106984. 

- 817 [80] Rouet-Leduc, B., C. Hulbert, and P. A. Johnson (2019). Continuous chatter of the Cascadia 818 subduction zone revealed by machine learning, Nat. Geosci. 12, no. 1, 7579. 

- 819 [81] Rust, A. C., N. J. Balmforth, and S. Mandre (2008). The feasibility of generating low-frequency 820 volcano seismicity by ow through a deformable channel, Geol. Soc. Spec. Publ. 307, 4556, 821 doi: 10.1144/SP307.4. 

34 

- 822 [82] Ruth, D. C., E. Cottrell, J. A. Cortes, K. A. Kelley, and E. S. Calder (2016). From passive 823 degassing to violent Strombolian eruption: The case of the 2008 eruption of Llaima volcano, 824 Chile, J. Petrol. 57, no. 9, 18331864. 

- 825 [83] SERNAGEOMIN (2018). Chile: Territorio volcánico, Servicio Nacional de Geología y Minería, 826 Santiago, 139 pp. 

- 827 [84] Sobradelo, R., S. Bartolini, and J. Martí (2014). HASSET: A probability event tree tool to 828 evaluate future volcanic scenarios using Bayesian inference, Bull. Volcanol. 76, no. 1, 770. 

- 829 [85] Surono, J. P., J. Pallister, M. Boichu, M. F. Buongiorno, A. Budisantoso, F. Costa, S. Andreas830 tuti, F. Prata, D. Schneider, L. Clarisse, et al. (2012). The 2010 explosive eruption of Java's 831 Merapi volcanoa `100-year'event, J. Volcanol. Geotherm. Res. 241, 121135. 

- 832 [86] Tamburello, G., M. Agusto, A. Caselli, F. Tassi, O. Vaselli, S. Calabrese, D. Rouwet, B. Capac833 cioni, R. Di Napoli, C. Cardellini, et al. (2015). Intense magmatic degassing through the lake 834 of Copahue volcano, 20132014, J. Geophys. Res. 120, no. 9, 60716084. 

- 835 [87] Tardani, D., E. Roulleau, D. L. Pinti, P. Pérez-Flores, L. Daniele, M. Reich, P. Sanchez-Alfaro, 836 L. Richard, and L. Richard (2021). Structural control on shallow hydrogeochemical processes 837 at Caviahue-Copahue Volcanic Complex (CCVC), Argentina, J. Volcanol. Geotherm. Res. 414, 838 107228. 

- 839 [88] Tilling, R. I. (2008). The critical role of volcano monitoring in risk reduction, Adv. Geosci. 14, 840 311. 

- 841 [89] United Nations Disaster Relief Organisation (UNDRO) (1985) Volcanic emergency manage842 ment, UNDRO, New York, US, 87 pp. 

- 843 [90] Velez, M. L., P. Euillades, M. Blanco, and L. Euillades (2016). Ground deformation between 844 2002 and 2013 from InSAR observations, in Copahue Volcano. Active Volcanoes of the World, 

- 845 F. Tassi, O. Vaselli, and A. Caselli (Editors), Springer, Berlin, Heidelberg, doi: 10.1007/ 846 978-3-662-48005-2_8. 

- 847 [91] Voight, B. (1990). The 1985 Nevado del Ruiz volcano catastrophe: Anatomy and retrospection, 848 J. Volcanol. Geotherm. Res. 44, nos. 3/4, 349386. 

35 

- 849 [92] Wegnüller, U., C. Werner, T. Strozzi, A. Wiesmann, O. Frey, and M. Santoro (2016). Sentinel-1 850 support in the GAMMA software, Procedia Comput. Sci. 100, 13051312. 

- 851 [93] Wright, T. J., P. J. Gonzalez, R. J. Walters, E. L. Hatton, K. Spaans, and A. J. Hooper (2016). 852 LiCSAR: Tools for automated generation of Sentinel-1 frame interferograms, AGU Fall Meeting 853 Abstracts, Vol. 2016, G23A1037. 

- 854 [94] Xue, X., and J. T. Freymueller (2023). Machine learning for single-station detection of transient 855 deformation in GPS time series with a case study of Cascadia slow slip, J. Geophys. Res. 128, 856 no. 2, e2022JB024859, doi: 10.1029/2022JB024859. 

- 857 [95] Yagupsky, D. L., H. P. Barcelona, N. C. Vigide, and A. C. Lossada (2023). Eects of structural 858 zonation on uids circulation of the Copahue geothermal system, J. South Am. Earth Sci. 125, 859 104310. 

- 860 [96] Yamaoka, K., N. Geshi, T. Hashimoto, S. E. Ingebritsen, and T. Oikawa (2016). Special issue 861 The phreatic eruption of Mt. Ontake volcano in 2014, Earth Planets Space 68, 18. 

- 862 [97] Yu, C., Z. Li, N. T. Penna, and P. Crippa (2018). Generic atmospheric correction model for 863 Interferometric Synthetic Aperture Radar observations, J. Geophys. Res. 123, no. 10, 92029222. 

- 864 [98] Yu, C., N. T. Penna, and Z. Li (2017). Generation of real-time mode high-resolution water 865 vapor elds from GPS observations, J. Geophys. Res. 122, no. 3, 20082025. 

- 866 [99] Zobin, V. M. (2011). Introduction to Volcanic Seismology, Vol. 6, Elsevier, Waltham, Mas867 sachusetts, ISBN: 978-0-444-56375-0. 

36 

