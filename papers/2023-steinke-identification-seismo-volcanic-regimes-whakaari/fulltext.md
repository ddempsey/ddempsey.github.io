# Identification of Seismo‐Volcanic Regimes at Whakaari/White Island (New Zealand) Via Systematic Tuning of an Unsupervised Classifier

**Authors:** B. Steinke, A. D. Jolly, R. Carniel, D. E. Dempsey, S. J. Cronin  
**Published in:** Journal of Geophysical Research: Solid Earth (2023)  
**DOI (version of record):** https://doi.org/10.1029/2022jb026221  
**This copy:** Published version. Text extracted from the PDF at https://ddempsey.github.io/papers/2023-steinke-identification-seismo-volcanic-regimes-whakaari/steinke2023-identification-seismo-volcanic.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** Published version, reproduced under the CC BY 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1029/2022jb026221  
**Licence:** CC BY 4.0 http://creativecommons.org/licenses/by/4.0/  

---


**RESEARCH ARTICLE** 10.1029/2022JB026221 

##### **Key Points:** 

- Our algorithm automatically classifies tremor data from Whakaari/White Island using Self-Organizing Maps 

- Statistical tests help us to select appropriate classification hyperparameters depending on input data 

- We attribute the detected changes in volcanic tremor to pressurization and depressurization of the volcanic system 

##### **Supporting Information:** 

Supporting Information may be found in the online version of this article. 

##### **Correspondence to:** 

B. Steinke, bastian.steinke@auckland.ac.nz 

##### **Citation:** 

Steinke, B., Jolly, A. D., Carniel, R., Dempsey, D. E., & Cronin, S. J. (2023). Identification of seismo-volcanic regimes at Whakaari/White Island (New Zealand) via systematic tuning of an unsupervised classifier. _Journal of Geophysical Research: Solid Earth_ , _128_ , e2022JB026221. https://doi. org/10.1029/2022JB026221 

Received 8 DEC 2022 Accepted 23 FEB 2023 

##### **Author Contributions:** 

**Conceptualization:** B. Steinke, A. D. Jolly, R. Carniel, S. J. Cronin **Data curation:** B. Steinke, A. D. Jolly **Formal analysis:** B. Steinke, A. D. Jolly, R. Carniel **Funding acquisition:** S. J. Cronin **Investigation:** B. Steinke **Methodology:** B. Steinke, A. D. Jolly, R. Carniel, D. E. Dempsey **Project Administration:** S. J. Cronin **Resources:** R. Carniel, D. E. Dempsey, S. J. Cronin **Supervision:** A. D. Jolly, S. J. Cronin **Validation:** B. Steinke 

# **Identification of Seismo-Volcanic Regimes at Whakaari/ White Island (New Zealand) Via Systematic Tuning of an Unsupervised Classifier** 

**B. Steinke**<sup>**1**</sup> **, A. D. Jolly**<sup>**2**</sup> **, R. Carniel**<sup>**3,4,5**</sup> **, D. E. Dempsey**<sup>**6**</sup> **, and S. J. Cronin**<sup>**1**</sup> 

1School of Environment, University of Auckland, Auckland, New Zealand, 2U.S. Geological Survey, Hawaiian Volcano Observatory, Hilo, HI, USA,<sup>3</sup> Dipartimento Politecnico di Ingegneria e Architettura, Università degli Studi di Udine, Udine, Italy,<sup>4</sup> Earthquake Research Institute, The University of Tokyo, Tokyo, Japan,<sup>5</sup> Scientific Attaché, Embassy of Italy, Jakarta, Indonesia,<sup>6</sup> University of Canterbury, Christchurch, New Zealand 

**Abstract** We present an algorithm based on Self-Organizing Maps (SOM) and k-means clustering to recognize patterns in a continuous 12.5-year tremor time series recorded at Whakaari/White Island volcano, New Zealand (hereafter referred to as Whakaari). The approach is extendable to a variety of volcanic settings through systematic tuning of the classifier. Hyperparameters are evaluated by statistical means, yielding a combination of “ideal” SOM parameters for the given data set. Extending from this, we applied a Kernel Density Estimation approach to automatically detect changes within the observed seismicity. We categorize the Whakaari seismic time series into regimes representing distinct volcano-seismic states during recent unrest episodes at Whakaari (2012/2013, 2016, and 2019). There is a clear separation in classification results between background regimes and those representing elevated levels of unrest. Onset of unrest is detected by the classifier 6 weeks before the August 2012 eruption, and ca. 3.5 months before the December 2019 eruption, respectively. Regime changes are corroborated by changes in commonly monitored tremor proxies as well as with reported volcanic activity. The regimes are hypothesized to represent diverse mechanisms including: system pressurization and depressurization, degassing, and elevated surface activity. Labeling these regimes improves visualization of the 2012/2013 and 2019 unrest and eruptive episodes. The pre-eruptive 2016 unrest showed a contrasting shape and nature of seismic regimes, suggesting differing onset and driving processes. The 2016 episode is proposed to result from rapid destabilization of the shallow hydrothermal system, while rising magmatic gases from new injections of magma better explain the 2012/2013 and 2019 episodes. 

**Plain Language Summary** Volcanoes produce different patterns and intensities of ground motions prior to eruptions, detectable in seismic signals. In this study, we investigate how the seismic signals recorded at Whakaari, New Zealand evolved between 2008 and 2020. We test an approach based on Artificial Intelligence (AI) to distinguish and classify seismic signals. Since classification results strongly depend on how the classifier is tuned, we investigate how it is best set up using test data sets. The classification provides a set of so-called “seismic regimes,” which represent the relative dominance of different types of earthquake activity over time. To interpret how these regimes relate to volcanic processes, we compared them against reported volcanic activity. We show that the classifier distinguishes between normal and elevated seismic activity, possibly associated with increasing gas pressure within the volcano. This pressurization is a possible eruption precursor. We observe that the 2012/2013 and 2019 volcanic episodes at Whakaari have similar regime progression patterns, likely reflecting arrival of increased fluxes of magmatic gas at shallow depths. By contrast a shorter-lived progression to an eruption in 2016 likely resulted from enhanced shallow trapping of background gas supply. 

## **1. Introduction** 

© 2023. The Authors. 

This is an open access article under the terms of the Creative Commons Attribution License, which permits use, distribution and reproduction in any medium, provided the original work is properly cited. 

The sudden and fatal 2019 eruption of Whakaari in New Zealand shows that short-term forecasting, especially of phreatic explosions, remains a challenge even at well-monitored volcanoes. Amongst a wide range of geophysical methods to observe the state of a volcanic system (e.g., Carniel et al., 2020; Caudron et al., 2021; Simons et al., 2020), the classification of seismicity is one of the most valuable for anticipating eruptions (Harlow et al., 1996; Mei et al., 2013; Syahbana et al., 2019) as it allows tracking the energy radiated from inside a volcanic system in near real-time (almost instant availability of data) and in high temporal resolution (hundreds 

1 of 21 

STEINKE ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2022JB026221 

**Visualization:** B. Steinke, R. Carniel, D. E. Dempsey **Writing – original draft:** B. Steinke **Writing – review & editing:** B. Steinke, A. D. Jolly, R. Carniel, D. E. Dempsey, S. J. Cronin 

of data points per second). To better understand volcanic and hydrothermal processes driving observed seismicity, perennial seismic records are the main target of investigation (Carniel, 2014; Carniel, Barbui, & Jolly, 2013; Carniel, Jolly, & Barbui, 2013; Caudron et al., 2021; Dempsey et al., 2020; Langer et al., 2009, 2011; Unglert & Jellinek, 2017). Automatic classification of continuous tremor has helped to detect temporally coherent (but still dynamic) tremor regimes, which may be diagnostic of pre-eruptive, syn-eruptive, and post-eruptive activity. Tremor regimes can be persistent over hours to days (e.g., Carniel et al., 2003, Carniel, Barbui, & Jolly, 2013; Carniel, Jolly, & Barbui, 2013; Langer et al., 2011) or weeks to months (e.g., Jaquet & Carniel, 2003; Langer et al., 2009; Unglert & Jellinek, 2017). Besides purely volcanic activity, tremor signals also commonly contain external, nonvolcanic features (e.g., ocean wave patterns), which must be considered when analyzing continuous seismic records (Carniel, 2003; Carniel & Tárraga, 2006; Jolly, 2019; Seropian et al., 2021; Yates et al., 2019). 

To automatically categorize tremor signals for relevance to volcanic activity, the choice of an appropriate classifier is crucial (Carniel & Guzmán, 2020; Orozco-Alzate et al., 2012). _Supervised_ classifiers, such as Random Forests (Dempsey et al., 2020) or Novelty Detection methods (Manley et al., 2021), require training with an already classified or labeled data set (training stage). After training, labels can automatically be assigned to unlabeled data (test stage). Alternatively, _unsupervised_ techniques, such as Self-Organizing Maps (SOM) (Kohonen, 1982; e.g., in Carniel, Barbui, & Jolly, 2013; Carniel, Jolly, & Barbui, 2013; Köhler et al., 2010; Langer et al., 2009, 2011; Unglert et al., 2016) and Principal Component Analysis (Pearson, 1901; e.g., in Unglert & Jellinek, 2017; Unglert et al., 2016), are approaches that are independent from any prelabeled data sets in the training stage and usually applied to investigate hidden structures within a data set. This provides a major advantage over supervised methods, because reliable prelabeled training data sets are rare and time-consuming to prepare in most volcano observatory settings. On the other hand, classifications resulting from unsupervised approaches must be subsequently interpreted to be meaningful. SOM-based classification approaches are promising for developing early warnings (e.g., Carniel, Jolly, & Barbui, 2013; Langer et al., 2011, 2022), but are not yet widely applied to volcanic tremor. This is due to validation uncertainties (Unglert et al., 2016), because classifications depend heavily on SOM settings and input data parameters. 

The main objective of this study is to demonstrate and test a new systematic tuning approach, to derive an unsupervised SOM-based classifier suited to a range of volcanic settings. We test suitability and effectiveness of the method to seismic data recorded on Whakaari (White Island), New Zealand between 2008 and 2020. Using observational data over the same timeframe, we interpret tremor regime changes in relation to possible tremor-source mechanisms. 

### **1.1. Whakaari Volcano** 

Whakaari is an andesitic-dacitic composite cone 50 km north of the Bay of Plenty, in New Zealand's North Island (Figure 1). Over the last 50 years, the volcano has undergone episodes of intense fumarolic and degassing activity, including sudden explosive phreatic and phreatomagmatic eruptions, most recently in 2012/2013, 2016, and 2019 (Chardot et al., 2015; Jolly et al., 2018; Kennedy et al., 2020; Kilgour et al., 2019; Kilgour, Kennedy, et al., 2021; Kilgour, Moune, et al., 2021; Walsh et al., 2019), small lava-dome extrusion episodes and small-scale ash-venting events (Jolly et al., 2017, 2020). These episodes of elevated unrest and eruptions occur between quieter periods with little or no anomalous surface activity observed. 

Whakaari hosts an active hydrothermal system in the upper ∼1 km of the vent fill, which strongly influences the local seismicity (Christenson et al., 2017; Giggenbach, 1987; Heap et al., 2017; Jolly et al., 2017, 2018; Nishi et al., 1996). Below the hydrothermal system, multiple magma storage regions are inferred at depths between 2 and 9 km (Cole et al., 2000; Houghton & Nairn, 1991; Kilgour, Moune, et al., 2021). Jolly et al. (2017, 2018) detected repeating very long period (VLP) seismicity at ∼1-km depth and inferred this to be the top of a shallow magma storage zone, overlain by a magma carapace. The carapace traps gas and is a point source of some of the most common seismic events at Whakaari. Whakaari is monitored by GNS Science through the GeoNet programme with two seismo-acoustic sites normally in operation. Only one site (WIZ) is used for this analysis as it provides the most continuous data set that covers the 12.5 years of the study. 

At Whakaari, continuous tremor signals were analyzed by Dempsey et al. (2020), to develop a forecasting system based on automatic precursor recognition, and by Chardot et al. (2015), who applied a Failure Forecast Model to distinguish between different episodes of unrest and to anticipate eruptive activity. Caudron et al. (2021) 

2 of 21 

STEINKE ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2022JB026221 

analyzed several geophysical and geochemical time series, to describe different volcanic states at Whakaari, including nine pre-eruptive, syn-eruptive, and post-eruptive episodes between 2007 and 2018. Real Time Seismic Amplitude Measurement (RSAM; Endo & Murray, 1991) and Displacement Seismic Amplitude Ratio (DSAR; Caudron et al., 2019) proved useful at Whakaari to infer volcanic and hydrothermal source processes (Caudron et al., 2021). 

### **1.2. Unrest Model for Phreatic Systems** 

Whakaari's seismic and eruptive record contains frequent activity, involving both magmatic and hydrothermal elements. We use an unsupervised classifier on this data set to test if new inferences about potential seismic radiation sources emerge. The data are rich enough to evaluate complexities in the evolutionary patterns of unrest. Wet volcanic systems are characterized by constant interplay between fluid restriction and system pressurization (e.g., via a hydrothermal seal) and the supply and upward migration of fluids. Based on this, we formulate a model for unrest progression cycles at Whakaari (cf. Stix & de Moor, 2018). 

**Figure 1.** Satellite image of Whakaari (05/2019), New Zealand, including the location of broadband seismic station WIZ on the SE flank and the former areas of the 2012 lava dome at the western-central vent (labeled as “1”) and the South-East vents active during the 2012/2013 and 2016 eruptive periods (“2” and “3”; Kilgour, Kennedy, et al., 2021). Map data: Google Earth, Maxar Technology (© 2021). Inset: New Zealand, trace of the Taupō Volcanic Zone (TVZ) (red line) and location of Whakaari (red triangle). 

The long-term source of magmatic fluids (magma, gases, water vapor) at 2021). Map data: Google Earth, Maxar ). Map data: Google Earth, Maxar Whakaari derives from intrusions into the upper and middle crust at ∼1–9km depth (Jolly et al., 2018; Kilgour, Moune, et al., 2021). As deep magmatic fluids ascend into the upper conduit system, they form the first phase of unrest (Figure 2). These deep-sourced fluids may be augmented by other magmatic fluids released by dehydration and crystallization of stalled magma bodies resident at very shallow levels (∼1-2 km deep) (Kilgour, Moune, et al., 2021). Collectively, magmatic inputs interact with meteoric fluids that circulate within the hydrothermal system of the upper volcano (Christenson et al., 2017), generating a second phase of unrest. During formation of a hydrothermal reservoir, a capping/seal layer will sometimes form through mineralization (especially, but not exclusively, of elemental sulfur), pore-blocking and clay-alteration (Christenson et al., 2010, 2017; Heap et al., 2017; Kanakiya et al., 2021; Scolamacchia & Cronin, 2016; Stix & de Moor, 2018). A seal insulates deeper fluids from cooler surface conditions and allows pressure to build up (Figure 2). Sealing and pressurization are most readily observable in systems with a crater lake, which is often present at Whakaari. Crater lake water cools and rises during a system state of high restriction (e.g., when sealing has occurred to high levels) or heats up and recedes in relatively open-degassing states (Christenson et al., 2010, 2017). Depressurization can occur by progressive degassing under stable conditions in which the system is gradually opened. Alternatively, a sudden pressure release and eruption can occur, facilitated, e.g., by rapid seal failure and explosive flashing of the liquid to steam (Figure 2). In highly restricted systems, even small accumulations of magmatic gas below an efficient seal may lead to high pressures and eruption. Alternatively, rapid change in seal properties may cause eruption (such as temperature induced changes in the presence and viscosity of elemental sulfur; Christenson et al., 2010). By contrast, for an open-degassing system, the only way to overpressure it is via a sudden change to a high gas flux (e.g., magmatic gas pulse from depth; Jolly et al., 2010). Both cases, gradual and sudden pressure release, mark the terminal stage of an unrest cycle. 

Using this simple cycle model, we examine a 12.5-year continuous seismic record for unrest events at Whakaari. We examine why this pattern fits some eruption episodes, but not others. 

## **2. Data and Methods** 

### **2.1. Data Acquisition and Preprocessing** 

Seismic data were acquired from the GeoNet Federation of Digital Seismograph Networks (FDSN) server for the time period between June 2008 to December 2020. The miniseed data were recorded by the vertical component sensor (100 Hz) of seismic broadband station “WIZ” located on the south eastern crater rim of Whakaari (Figure 1). 

Raw seismic data are converted into RSAMs. Originally, RSAM returns the mean amplitude value of a 1-min window of the raw signal between 2 and 5 Hz (Endo & Murray, 1991). We use 10-s spaced windows to calculate a “modified” RSAM in order to maintain more detail from the raw data compared to 1-min averages. As we seek to 

3 of 21 

STEINKE ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2022JB026221 

**Figure 2.** 

4 of 21 

STEINKE ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2022JB026221 

#### **Table 1** 

_Overview of Frequency Bands Used for the Analysis (VLP—Very Long Period; LP—Long Period; HF—High Frequency)_ 

|Frequency band (Hz)|Description|Literature|
|---|---|---|
|0.01–15.00|Entire tremor frequency band|Dempsey et al. (2020)|
|0.03–0.12|VLP frequency band at Whakaari|Jolly et al. (2017)|
|0.20–5.00|Lower LP limit to upper HF limit at Whakaari|Jolly et al. (2017)|
||Main LP and tremor band|Neuberg et al. (2000)|
|0.50–1.10|LP frequency band at Whakaari|Jolly et al. (2017)|
|1.00–2.90|Superfamily I LP-events detected at Ngauruhoe|Park et al. (2019)|
|1.20–5.00|Tremor in SOM application to Ruapehu|Carniel, Jolly, and Barbui (2013)|
|2.00–5.00|HF band at Whakaari|Jolly et al. (2017)|
||Main RSAM band|Dempsey et al. (2020)|
|2.00–6.50|Main tremor response in application of SOM to Ruapehu|Carniel, Jolly, and Barbui (2013)|
|3.50–4.00|Superfamily II LP-events detected at Ngauruhoe|Park et al. (2019)|
|5.00–10.00|Upper frequency of typical tremor at Pavlov|McNutt (1986)|
|6.00–8.00|Intermediate bandwidth between peak freq. of relevant tremor measured at Ruapehu…|Carniel, Jolly, and Barbui (2013)|
||… and min. freq. of HF bandwidth (DSAR)|Caudron et al. (2019)|
||Peak frequency of spasmodic bursts|Sherburn et al. (1998)|
|10.00–15.00|Bandwidth isolating HF tremor|–|
|15.00–25.00|Maximum frequency available for this data set|–|

examine the effect of varying bandwidths and time window lengths on classification results, we calculate RSAM in 13 different frequency bands between 0.01 and 15 Hz (Table 1) before applying a rolling nonoverlapping time window of seven different lengths (1, 3, 6, 12, 24, 48, 120 hr) to these new time series. This provides us with 13 × 7 = 91 RSAM time series (hereinafter referred to as the “preprocessed data sets”) consisting of between 109,775 (for 1-h long time windows between 2008 and 2020) and 921 datapoints (120 hr). The seismic trace in each individual window is represented by 759 numerical descriptors (features), based on which the classifier evaluates similarities and differences between windows. This set of features (i.e., the feature vector) derives from a library built into the “tsfresh” Python package (Christ et al., 2018) and includes statistical features based on characteristics of seismic data such as waveform or spectral content (e.g., absolute energy, Fourier coefficients, entropy, kurtosis). At this stage, we use all features from the library, whereas a feature selection procedure is applied after cluster analysis (see Section 2.4). Potential (quasi-homogenous) noise added by the large number of features is naturally compensated by the SOM algorithm, which is designed to filter variation within the data. Technical artifacts due to erroneous recording by the seismometer were removed from the preprocessed data sets by applying minimum and maximum velocity thresholds. This step removed 0.7% (for 1 hr) to 3.5% (for 120 hr) of all windows. We then feed all 91 preprocessed input data sets into an SOM classifier. 

### **2.2. SOM and k-Means Clustering** 

SOMs are a type of artificial neural network first introduced by Kohonen (1982) to investigate input data for internal structures. This is achieved by spatially organizing neurons into a topological map (usually two dimensional). Map-neurons adapt to the pattern of the data presented to it via feature values in a training data set, so that input data structure is eventually represented by the arrangement of the neural network (Ponmalai & Kamath, 2019). For the SOM application in this study, we use the “SOMPy” Python library (Moosavi & Packmann, 2014). Once 

**Figure 2.** Stages of a conceptual phreatic unrest model at Whakaari. Seismic station “WIZ” is indicated on the slope of the volcano, and different sources of seismicity are indicated in each stage. A state of unrest is initially caused by a new injection of magma from deeper layers, or as a consequence of ascending gases (onset of unrest). Volatiles interacting with the hydrothermal system may derive from both magma already residing at shallow depths and from new magmatic injections. Primary source of system restriction in this model is a mineralogical seal, yet other processes may contribute to system pressurization (e.g., sudden intrusion of meteoric water and interaction with magmatic fluids). In the last stage the system is depressurized, either gradually (through slow formation of pathways and progressive degassing) or rapidly (through fast crack formation and hydrothermal explosion). 

5 of 21 

STEINKE ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2022JB026221 

SOM unsupervised training is finished, a cluster analysis can be applied to the feature vectors contained in each map neuron to obtain and visualize individual classes of input data. Here, we apply k-means clustering based on Euclidian distance between SOM neurons as a data compression technique, with _k_ the number of clusters predefined by the user. The k-means method is computationally faster than hierarchical clustering, but it requires the user to choose an appropriate number of clusters ( _k_ ). The k-means algorithm groups the SOM neurons (not the time windows) into clusters. The individual time windows are then assigned to the cluster of their corresponding neuron (their “Best Matching Unit” or “BMU”). Key steps of the workflow up to this point are summarized in Figure 3. 

### **2.3. Testing Hyperparameter Combinations** 

Choosing a similarity threshold for the _number of clusters k_ (Cabanes & Bennani, 2010) is a key step required before determining the remaining hyperparameters, which are (a) the _number of neurons Nn_ forming the map (i.e., the dimension of the SOM topology), (b) the selected _frequency band_ ∆ _f_ of the input data set, and (c) the _time window length L_ . To help determine _k_ objectively, we apply three statistical tests (after Sakar, 2013): the Elbow method (Thorndike, 1953); the Davies-Bouldin Index (Davies & Bouldin, 1979); and the Silhouette Score (Rousseeuw, 1987). Each procedure investigates distances between _k_ hypothetical clusters in every individual SOM and returns a score for a given _k_ (performed for 4 ≤ _k_ ≤ 10). Because these scores depend on the remaining hyperparameters, we must perform the statistical tests repeatedly for each _k_ using all possible combinations of hyperparameters. Therefore, we generated SOMs of nine different sizes (25 ≤ _Nn_ ≤ 900) using each of the 91 preprocessed data sets, yielding 91 × 9 = 819 combinations. We then choose the number of clusters _k_ returned most frequently by the statistical tests, which we kept constant for subsequent investigation of _Nn_ , ∆ _f_ , and _L_ . To statistically support the choice of _Nn_ , ∆ _f_ , and _L_ , we calculate topographical error (TE; i.e., the degree of map structure; Kiviluoto, 1996) and quantization error (QE; i.e., the quality of data representation; Kohonen, 2001) for each of the 819 SOMs. Both measures provide insights into the internal structure and reliability of each SOM, which helps to objectively define preferred combinations of hyperparameters. 

### **2.4. Tremor Regime Detection** 

### **2.4.1. Kernel Density Estimation (KDE)** 

We separately trained and tested our tremor classification algorithm using data from each of three unrest episodes observed at Whakaari (2012/2013, 2016, 2019). For near real-time monitoring, new datapoints (i.e., time windows) could be tested in regular intervals using a fixed SOM trained on past data. By contrast, for the purpose of simply reconstructing the structure of the preprocessed data sets in this study, training data set and test data set are the same. Tremor regime changes are detected using a KDE method, which expresses the relative frequency of individual “active” clusters (i.e., the cluster a time window has been assigned to) over time. We chose the smoothing bandwidth for each unrest episode individually, allowing the KDE to represent cluster distribution, maintaining a balance between overly smoothed regimes (underfitting) and short regime durations (overfitting). We assigned the cluster with the highest density as the “dominant cluster” for each time step. Prolonged episodes with the same dominant cluster are defined as a seismo-volcanic regime. To reduce overfitting in parts of the record without a clear dominant cluster (especially during regime transitions), a minimum regime duration of 5 days was forced. This period reflects a typical duration of processes observed at Whakaari, following Houghton and Nairn (1991). While this step facilitates detection and interpretation of individual regimes it also increases latency when implemented in a near real-time application. This can be controlled by using shorter time windows. 

### **2.4.2. Feature-Importance Ranking** 

A common artifact of clustering is that the chosen number of clusters _k_ is either underestimated or overestimated (e.g., Unglert et al., 2016). Consequently, time windows representing different volcanic states may be assigned to the same cluster, or alternatively, seismically very similar time windows are assigned to different clusters. We therefore performed a feature-importance ranking using the Mann-Whitney-U Test (MWU-test; Mann & Whitney, 1947), followed by the Benjamini-Hochberg procedure (Benjamini & Hochberg, 1995) to confirm distinction between regimes. The MWU-test compares values of a single feature within and outside a given regime, and determines the probability of this feature to be statistically significant for the classification. This step is repeated for all features. Because of the large number of features in the tsfresh library, the MWU-test produces 

6 of 21 

STEINKE ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2022JB026221 

**Figure 3.** Workflow from raw data processing to the visualized classification result. (1) Calculation of a modified Real Time Seismic Amplitude Measurement (RSAM), which returns the mean amplitude value of 10-s spaced windows in the raw data. (2) Application of a rolling, nonoverlapping time window to the RSAM signal with _L_ as the window length (between 1 and 120 hr), and extraction of features for each window. (3) Feature values for each time window are introduced to the SOM classifier and assigned to a Best Matching Unit ('BMU'; not visualized in the plot). (4) The structure of the neural network is used to identify neurons that are similar (i.e., they represent similar feature values of time windows and, therefore, similar seismicity). Similar BMUs (visualized in a dendrogram; adapted from Carniel, Jolly, and Barbui (2013)) are then grouped together in clusters. (5) Each RSAM time window is classified according to its BMU. (6) We visualize the evolution of clusters (i.e., different types of seismicity) over time as shown in the example plot, with each colored dot representing one time window. 

7 of 21 

STEINKE ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2022JB026221 

many false positives. We control for these by applying a Benjamini-Hochberg procedure, which requires a higher standard of statistical evidence (a lower _p_ -value) as more tests are performed. This step ranks the most important features in terms of their ability to explain variation in the seismic signals ( _signature features_ ). 

### **2.4.3. Final Classification of Seismic Regimes** 

To tackle the problem of highly correlated features, we applied Correlation-matrix based hierarchical clustering (CMBHC), using feature correlation values between 0 and 1 derived from a correlation matrix as a measurement of similarity. CMBHC is borrowed from a medical context (e.g., Liu et al., 2012; Toloşi & Lengauer, 2011) and, in the context of feature selection, is more effective than k-means than hierarchical clustering as it does not require _k_ to be preselected. Instead, a similarity threshold is chosen (fixed at 0.5 Euclidian distance). Here, we combine the CMBHC approach with Ward's clustering criterion (Ferreira & Hitchcock, 2009; Ward, 1963) to group strongly correlating signature features into clusters ( _signature clusters_ ; i.e., a compressed representation of signature features) (Figure S4 in Supporting Information S1). Each regime thus can be described and grouped based on their signature clusters. In addition, comparison of the numerical values of representative features from signature clusters is needed to unambiguously distinguish regimes. To achieve unambiguity between regimes, we calculate the mean and standard deviation of two representative features from each regime. Preliminary labels (using Greek letters) are attached to the resulting regime types ( _FR types_ ; i.e., regimes of the same FR type are characterized by the same signature features and similar feature values, and thus are likely to represent the same underlying process). To analyze tremor evolution we examine observational data from Whakaari as well as RSAM and DSAR values to infer underlying volcano-seismic processes associated with each regime type, before applying descriptive labels. 

## **3. Results** 

### **3.1. SOM Tuning** 

We performed statistical tests on hyperparameters _k_ , _Nn_ , ∆ _f_ , and _L_ (Figure 4) in order to assess their influence on tremor classification results and to find an optimized set of hyperparameters for the subsequent analysis of volcanic tremor recorded at Whakaari between 2008 and 2020. A visualization of how each parameter influences tremor classification is provided in Figure S1 in Supporting Information S1. 

An ideal number of clusters of _k_ = 5 was determined via statistical scores for around one-third of all maps (Figure 4a). For _k_ ≥ 7, a duplication effect can be observed, caused by overfitting of the data (Figure S1 in Supporting Information S1). This results in unwanted splitting of similar tremor patterns into different clusters. Subsequent analysis was thus performed with _k_ = 5. 

To evaluate the reliability of SOM classifications in relation to _L_ and ∆ _f_ , we calculated TE (Figure 4b) and QE (Figure 4c) for each _Nn_ with a constant _k_ = 5. Across all _Nn_ , QE mainly depends on _L_ with an optimum at 12 hr. Increasing _L_ reduces the cluster density, because fewer time windows are classified. Five-day time windows tend to underfit the data (most data assigned to the same cluster), while 1-hr time windows overfit the data (data dispersed between all clusters almost equally). TE appears more related to ∆ _f_ without a clear optimum, but with best performances for ∆ _f_ : 1.0–2.9 Hz and ∆ _f_ : 2.0–5.0 Hz, which both produced very similar classification results. Frequency bands containing tremor below 1 Hz and above 10 Hz produced significantly poorer results in terms of data structure. Ultimately, we set ∆ _f_ to 2.0–5.0 Hz and _L_ = 12 hr. 

TEs and QEs were calculated depending on _L_ and ∆ _f_ repeatedly, for SOMs sized 5 × 5 ( _Nn_ = 25), 10 × 10 ( _Nn_ = 100), 20 × 20 ( _Nn_ = 400), 30 × 30 ( _Nn_ = 900), and 50 × 50 ( _Nn_ = 2,500). On average, smaller maps produced lower TEs, but higher QEs. _Nn_ is analogous to the resolution of the SOM (Figure S2 in Supporting Information S1) and the average distance between input data and map neurons, thus increasing _Nn_ leads to a higher QE. While using a small SOM size may decrease the “granularity” of window assignments, increasing the SOM size may cause underfitting of the data (due to the relatively small number of clusters _k_ ). Hence, it becomes insensitive for detecting subtle, but potentially important changes. Since larger maps did not improve classification results, the smallest map size with _Nn_ = 25 neurons arranged in a 5 × 5-grid was selected as the default SOM size. 

### **3.1.1. Overview of Optimized Hyperparameters** 

In Section 3.2, we compare short individual unrest episodes (subsets of the entire 12.5-year record). To maintain comparability among episodes, all hyperparameters were kept constant (Table 2). For this study, we used the 

8 of 21 

STEINKE ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2022JB026221 

**Figure 4.** Results from statistical evaluation of input parameters. (a) Resulting distribution of suggested _k_ using Elbow method, Davies-Bouldin Index, and Silhouette Score. (b and c) Visualization of topographic and quantization errors for 10 × 10-sized SOM topologies. Blue-shaded colors indicate a low degree of map distortion, pink-shaded colors a high degree of map distortion, analogous to map reliability. 

“tsfresh” feature vector (a comparison between the “tsfresh” and other feature vectors is provided in Figure S3 in Supporting Information S1). 

### **3.2. Tremor Regimes** 

### **3.2.1. Unrest Episodes (EPs)** 

|**Table 2**|
|---|
|_Overview of Fixed SOM Settings and Input Data Parameters_|
|SOM mode<br>Batch|
|Initialization method<br>PCA|
|Number of neurons_N_<br>25|
|Neighborhood function<br>Gaussian|
|Shape of neighborhood (lattice)<br>Rectangular|
|Number of iterations<br>10|
|Map shape<br>Planar, 5 × 5|
|Time window length_L_<br>12 hr|
|Frequency band<br>2–5 Hz|
|Feature vector<br>tsfresh (CFCP<sup>a</sup>)|
|<sup>a</sup>Comprehensive feature calculation parameters dictionary (feature database).|

Using the predefined hyperparameters, most plots indicate a consistent pattern for three major unrest episodes at Whakaari (Figure 5) around the eruptions in 2012/2013, 2016, and 2019. Separation of the data stream into individual unrest periods allows investigation of potential differences in unrest progression of each episode. We used information from literature (Caudron et al., 2021; Chardot et al., 2015; Jolly et al., 2020) and the classification results from the entire 12.5-year record to define training and test data sets (Figure 5) for each episode. For optimal classification results, the training data set for the 2011–2014 episode was extended by data from 2008 to 2011, a period associated with relative volcanic quiescence. For the remaining two episodes, extension of training data sets did not alter the classification result. 

We observe from this analysis (Figure 6): 

1.  A consistent dominant cluster 1, which is replaced by other clusters (clusters 2–5) usually weeks to months before or between eruptive events. 

2.  Correlation of appearance and disappearance of clusters with observed volcanic activity (hydrothermal explosions and ash venting). 

9 of 21 

STEINKE ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2022JB026221 

**Figure 5.** Pattern evolution at Whakaari, across the entire data period 2008–2020, each colored dot represents one tremor window (colors are arbitrary). Vertical lines indicate key observations of volcanic activity. Red shaded areas correspond to test data sets and are labeled according to the respective unrest episode. Note that due to the resolution of the plot individual tremor windows seem to merge (e.g., the solid line at cluster 4 represents closely spaced data points). 

3.  Variable time spans dominated by clusters 2–5 prior to an eruption (cf. EP II versus EP III). 

4.  Presence of “simultaneously” active clusters in EP II (e.g., clusters 3, 4, and 5 between June and August 2014), contrasting with single, dominant clusters in EP I and III (e.g., cluster 5 in EP III October and November). 

In the following, we focus on the 2012/2013 unrest (EP I) to highlight key observations from regime detection. 

### **3.2.2. Regime Detection and Labeling** 

The KDE-based approach helps to translate shifts between dominant clusters into regime changes (Figure 7), yielding 17 regimes throughout EP I from June 2011 to January 2014. While most regime changes detected via the KDE method are obvious, some changes are missed, such as the onset of unrest in August 2011 (Chardot et al., 2015; Jolly et al., 2017). Instead, the first regime change is detected around February 2012 (cluster 5, R2). Further oscillation between the main cluster 1 (R3) and cluster 5 (R4) follows, with diverse patterns between the hydrothermal explosions in August 2012 and May 2013 (R5–R12). Regime detection was in part affected by the choice of a suitable KDE bandwidth (Figure S4 in Supporting Information S1). 

Assessment of dominant clusters suggests that EP I includes distinctive seismic patterns. However, unambiguous assignment of a dominant cluster to a specific process is not possible at this stage, due to the nature of the clustering algorithm. Feature analysis (MWU-test, Benjamini-Hochberg procedure, CMBHC, and feature value assessment) yielded five different regime types, preliminarily labeled as α-type to ε-type (Figure 8; Figures S5 and S6 in Supporting Information S1). 

The Benjamini-Hochberg procedure indicated a lack of statistically significant features for R2, R10, R12, and R14, thus these regimes were omitted from subsequent considerations. R4 and R5 (β-type) as well as R6 and R7 (γ-type) belong to the same respective “FR type” (see Section 2.4.3), despite being characterized by different dominant clusters. Conversely, R6 and R8, characterized by the same dominant cluster, were assigned to different 

10 of 21 

STEINKE ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2022JB026221 

**Figure 6.** Overview of visualized tremor patterns across all three unrest episodes at Whakaari. Note the different durations of each episode, and different temporal scales of the plots. Colors of clusters are arbitrary. 

11 of 21 

STEINKE ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2022JB026221 

**Figure 7.** Kernel Density Estimation (top) of clusters results in the detection of seismic regimes (colored bars, bottom) for episode I. Color of bars correspond to the dominant cluster of each regime according to Kernel Density Estimation (KDE) analysis. Minimum duration of regimes was set to 10 windows (5 days, see main text for explanation). A correction was applied when the KDE-based dominant cluster deviated from the actual dominant cluster (corresponding to the cluster most tremor windows are assigned to within a regime). Regimes without statistically important features are labeled in cursive (lower line) and were disregarded in further analysis. 

**Figure 8.** Real Time Seismic Amplitude Measurement (RSAM) and Displacement Seismic Amplitude Ratio (DSAR) time series projected on top of the classified regime FR types (arbitrary colors) at Whakaari for EP I. Regimes without significant features following the Benjamini-Hochberg procedure are labeled as unclassified (white). Below are the regimes as detected by the KDE algorithm (colors correspond to the dominant clusters, see Figure 7), alongside with a time line of observations made at Whakaari. 

12 of 21 

STEINKE ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2022JB026221 

FR types (γ-type and δ-type). This highlights the importance of conducting a feature ranking (FR) alongside cluster distribution analysis from SOM classification and cluster analysis. Finding possible underlying source processes explaining each regime type follows in Section 4. 

## **4. Discussion** 

The unsupervised classifier method, based on the SOM-algorithm and k-means shows promise in automatically identifying changes in the volcano-seismic record at Whakaari. Applying KDE to the distribution of clusters and an FR analysis, we assigned each regime to one of five FR types. Focusing on EP I (2012–2013), we discuss our results against the background of reported volcanic activity, DSAR and RSAM time series, and an hypothesized unrest model for phreatic systems. 

### **4.1. Interpretation of Regime Types** 

### **4.1.1. First Unrest Cycle: Initial Phase** 

A clear separation occurs between the dominant cluster 1 and the other clusters (Figure 7). Cluster 1 is active in the earliest and latest stages of all episodes and is usually accompanied by the lowest RSAM and DSAR levels, as well as a unique FR type (α-type, Figure 8). All regimes dominated by other clusters are characterized by higher levels of either RSAM or DSAR, or both, and accompany intereruption or immediate pre-eruption phases. Regime changes from cluster 1 thus indicate a shift away from background states. This is supported by key features of α-type regimes, which indicate a stable (predictable) low energy signal (further explanation of key features is provided in Table S1 in Supporting Information S1). 

The onset of unrest in EP I based on seismic records was retrospectively estimated as 15 August 2011 (low-level tremor; Chardot et al., 2015), or 19–21 August 2011 (swarms of discrete VLP/LP/HF earthquake events; Jolly et al., 2017). In our classification, the first time window assigned outside cluster 1 appears on 17 August. This is not picked up by the KDE detector, but could reflect ascending fluids from either the deeper regions of the magma storage reservoir (up to 9-km deep), or shallower magma-ponding levels (1–2 km). The first regime change to cluster 5 is detected only in February 2012 (R2), which follows strong changes in gas chemistry noted mid-January (Caudron et al., 2021). In late February, there is a shift back to the background cluster 1 (R3), accompanied by decreasing RSAM and DSAR values, possibly indicating a reduced gas flux. 

### **4.1.2. First Unrest Cycle: Seal Forming Phase and Hydrothermal Explosion** 

In late June 2012, RSAM (Chardot et al., 2015) and DSAR values increased sharply. This may indicate new fluids ascending into the hydrothermal system, detected by the algorithm as R4 (Figure 8). Christenson et al. (2017) interpreted that sulfur sealing and gas entrapment occurred beneath the western-central vent (Figure 1) during this episode. This reflects the second phase of the unrest model, during which a hydrothermal seal traps fluids, causing new seismic regimes. Hence, R4, labeled as β-type regime, possibly constitutes a state of increasing pressurization. Seal failure possibly caused the hydrothermal explosion on 5 August 2012, terminating the first unrest cycle and marked by a transition to R5. 

### **4.1.3. Second Unrest Cycle: 2012 Lava-Dome Extrusion and Further Pressurization** 

Caudron et al. (2019) interpret high DSAR as a response to reduced permeability of the upper layers of a vent-hydrothermal system and an attendant increase in gas pressure. Even though their respective dominant clusters differ, R4 and R5 are both labeled as β-type regimes and accompanied by a similarly increasing DSAR. However, after a major pressure release through the hydrothermal explosion and removal of a potential mineralogical seal, we expect DSAR values to decrease. Christenson et al. (2017) argued that the explosion cleared the pathway for magma to rise to the western-central vent, which caused the extrusion of a lava dome (Jolly et al., 2020) plugging the vent. The intrusion of magma into the shallow system (Jolly et al., 2020) could explain subsequent increase of gas pressure, expressed as rising DSAR. Hence, R5 could reflect another pressurization regime (β-type), initiating a second unrest cycle. However, rather than a hydrothermal seal, the second unrest cycle is primarily driven by system blockage by the lava dome and magma intruded below it. 

Although the hypothesized onset of magmatic extrusion in early September 2012 (Jolly et al., 2020) is missed by the algorithm, we observe a change from β-type (R4, R5) to γ-type regimes (R6, R7) in late September. 

13 of 21 

STEINKE ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2022JB026221 

**Figure 9.** Feature “change_quantiles” is a key feature for γ-type regimes and usually correlates strongly with RSAM levels. An exception occurs in the period between the ash-venting events (dashed lines) in September 2012 and in January 2013, indicated by the red arrow. The dotted line indicates the observation of the lava dome in November 2012, red vertical lines indicate eruptions. 

A key difference separating both regime types is the distribution of feature values related to the deviation between consecutive data points (or signal unsteadiness) in the seismic trace over a 10-s interval (indicated by feature “change_quantiles”). This indicates a high signal variability compared to absolute RSAM levels, which is a unique feature across all regimes of EP I (Figure 9). It is possible that dome cooling is accompanied by very low but unstable RSAM. Jolly et al. (2020) note the emergence of gliding spectral lines in early September, prior to the regime change from R5 to R6 (late September). This regime change could reflect subtle variation of the tremor signals accompanying a transition between dome extrusion and cooling (Jolly et al., 2020). Different settings (shorter tremor windows and larger maps) resulted in an earlier onset of R6 in mid-September, closer to observations made by Jolly et al. (2020). The temporal offset between onset of gliding spectral lines and regime change might reflect inaccurate clustering. However, β-type and γ-type regimes likely indicate two states of increasing pressurization. Considering that pressurization mechanisms in the other two episodes might deviate from those in EP I we will refer to β-type and γ-type regimes as pressurization modes 1 and 2 without further distinction in this study. Detail to the distinction between pressurization and nonpressurization regimes, or even between pressurization modes, could be added by investigating the distribution of RSAM residuals via applying the Failure Forecast Method (FFM) on RSAM increases (Chardot et al., 2015). 

### **4.1.4. Second Unrest Cycle: Depressurization and Gradual Degassing** 

From late December 2012 onward, Christenson et al. (2017) reported strong gas emissions, increased hydrothermal activity and steady evaporation of the crater lake (Figure 8). They attributed the increased gas flux toward the SE vent, due to plugging of the western-central vent by the lava dome. This change in gas flux is accompanied by a transition from R7 to R8 and a decline of DSAR values. Vigorous hydrothermal activity (GeoNet, Volcanic Activity Bulletin [“VAB”] White Island [“WI”] 2013/02) commenced in mid-January and increasing viscosity of the crater mud/sulfur fill was observed during small jetting events (Caudron et al., 2021; Christenson et al., 2017; Edwards et al., 2017; Jolly et al., 2016). These processes eventually led to the complete evaporation of the lake (Christenson et al., 2017; GeoNet, VAB WI 2013/06) accompanied by the highest RSAM values of the entire EP I (Figure 8). The onset of such strong surface activity corresponds with the transition from R8 to R9. The mud/ sulfur eruptions also produced persistent seismo-acoustic impulses with harmonic tremor-like signatures (Jolly et al., 2016), which were likely detected by the classifier. 

Collectively, this activity corresponds to the terminal phase of the second unrest cycle, characterized by degassing through a progressively opening system. In contrast to the first unrest cycle, where volatiles were trapped to fuel the August 2012 explosion, permeability gradually increased underneath the SE vent to allow gases and pressure to be released. Therefore, depressurization is a key underlying source process of R8 (δ-type), while R9 (ε-type) reflects near-open-degassing or strong surface activity, with the system largely depressurized. Degassing occurred during both periods, thus the seismic trace in R8 is likely a result of superposition of depressurization signals (and associated elastic response of the crust) and degassing. 

Based on the integration of regimes within the range of observations, we assign a set of labels related to the underlying source processes to each regime, including: “background seismicity” (α-type), “pressurization” (β-type and γ-type), “depressurization” (δ-type) and “surface activity/free degassing” (ε-type). We will use the final model to compare episode I (2012–2013) with EP II (2016) and EP III (2019) (Figure 10). 

14 of 21 

STEINKE ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2022JB026221 

**Figure 10.** 

15 of 21 

STEINKE ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2022JB026221 

**Figure 11.** Comparison of proposed unrest cycles at Whakaari between 2012 and 2020 based on observed clusters and seismic regimes. In contrast to the long-term increase of pressure inside the volcanic system during EPs I and III under constant gas flux, the process of pressurization in EP II was possibly enhanced by a sudden injection of magmatic volatiles or meteoric water into the hydrothermal system, leading to quick formation of a mineralogical seal (Kennedy et al., 2020). Unrest stages refer to those visualized and explained in Figure 2. 

### **4.2. Insights From Other Unrest Episodes** 

### **4.2.1. Resemblance Between Episodes I and III (2019)** 

Possible onsets of seismic unrest in EP III were identified in May (GeoNet, VAB WI 2019/02) and June 2019 (GeoNet, VAB WI 2019/04). Tremor windows outside the background cluster also occur in March 2019 (Figure 6), indicating another possible unrest onset date. However, the first classified regime change only appears in August (Figure 10). As in EP I, the KDE detector missed the onset of unrest. Park et al. (2020) noticed the occurrence of VLP events associated with magmatic intrusions from midcrustal layers prior to EP I and EP III. These relatively deep processes are apparently missed by the algorithm which is more sensitive to migration of fluids to shallower levels, near the magmatic carapace at 1-km depth and above into the hydrothermal system. It is possible that the deep tremor signal is attenuated or too weak to be detected with the KDE bandwidth applied. Larger bandwidths detected both onsets, but also overfitted later regimes and decreased the overall classification accuracy. Hence, to detect subtle initial deviations from background activity, a dynamic detector is needed to be very sensitive in early stages of unrest, but without distorting the detection of later regimes. 

In EP III, β-type and γ-type patterns of pressurization are followed by degassing (ε-type), which we also observed in EP I (Figure 10). Following the model of phreatic unrest evolution, the December 2019 eruption could be a sudden gas release terminating the unrest cycle, expressed by depressurization or degassing regimes after the explosion. However, we observe degassing regimes earlier, from mid-November onward. At the same time, SO2 output increased during the months before the eruption (GeoNet, VAB WI 2019/08), along with elevated hydrothermal activity (GeoNet, VAB WI 2019/09). Thus, we could also have expected ε-type regimes earlier than November. The algorithm missing further pressurization regimes is likely due to multiple overlapping processes contributing to the seismic signals, from which our approach only highlights the dominant regime. The 2019 unrest was possibly initiated by ascending fluids driving system pressurization, even though the exact start date remains unclear. Surficial hydrothermal activity then became more prominent and overprinted the pressurization signals, causing degassing regimes. Development of pathways and degassing likely preceded the final stage of the unrest cycle, which, after weeks of pressurization, terminates with a hydrothermal explosion in December 2019 (Figure 10). Thus, the first unrest cycle in EP I (2012), as well as EP III (2019) show some similarities in terms of the conceptual stages of the unrest model (Figure 11). Yet, release of volatiles and surface activity might have occurred to a higher degree prior to the December 2019 eruption than before the August 2012 eruption, explaining the appearance of degassing regimes in EP III. 

**Figure 10.** Model of unrest evolution for episodes I, II, and III at Whakaari, using the set of labels derived from our interpretations of the underlying tremor signals. Timing of the regime changes were calculated by means of Kernel Density Estimation and analysis of feature values. In episode I (2012/2013), a first unrest cycle, driven by renewed gas flux and hydrothermal sealing, is followed by a second cycle, which is initiated by blockage of the western-central vent through lava dome growth and terminated by gradual formation of degassing pathways underneath the SE vent. Classification results for EP II are less clear due to the pulsating nature of clusters (pulses indicated for EP II; also visible in Figure 6) complicating recognition of regime changes by the KDE detector. By contrast, EP III produces a consistent image of pressurization and depressurization similar to EP I, representing another unrest cycle (without a defined onset). 

16 of 21 

STEINKE ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2022JB026221 

### **4.2.2. Contrast Between Episodes I and II (2016)** 

During EP II two “pulses” of nonbackground clusters are noted in late May 2014 and October 2015 (Figure 6). Both are accompanied by increases in DSAR and RSAM, which the KDE detector recognizes (Figure 10, episode II). The second pulse indicates a degassing regime, which correlates with high gas output described by Caudron et al. (2021). Other regime changes also occur, but these flip between dominant cluster assignments. This shows that KDE is not always suited to automatically detect regimes, especially if there are multiple possible dominant clusters. In EPs I, where regime changes are much sharper and fewer clusters were active, the detector performed much better. The distinct nature of the clustering in EP II could reflect one or more of the following possibilities: 

1.  EP II is a likely continuation of EP I, separated by a period of relative quiescence (e.g., Caudron et al., 2021; Jolly et al., 2018, 2020; Kilgour et al., 2019; Park et al., 2020). This would explain why it does not show a distinct onset of seismic unrest. The complex labeling around the August/October 2013 eruptions after the second unrest cycle in EP I indicates a similar state to that during EP II. This state is not well identified by the classifier. 

2.  While there might have been a long-term contribution of fresh magmatic fluids to the 2012/2013 and 2019 unrest episodes (GeoNet, VAB WI 2020/03), there are indications that the 2016 event was fueled by shortterm increase of flux of volatiles and, subsequently, sealing and crack closure in the upper conduit (Kennedy et al., 2020). VLP events analyzed by Park et al. (2020) occurred months before eruptive activity in EP I and EP III and were interpreted as an indicator of magmatic injections. By contrast, Jolly et al. (2018) noted VLP activity was present only for a few hours before the 2016 explosion in EP II. Involvement of fresh magmatic fluids may therefore affect clustering. 

3.  Dempsey et al. (2020) suggested a shallow trigger mechanism was responsible for the 2016 eruptive episode, based on the lack of seismic precursors to the eruption. Ballistics ejected during the 2016 eruption analyzed by Kennedy et al. (2020) further indicate decreased permeability of country rock breccia and, thus, increased system restriction hours before the eruption. Sudden changes within the system 2 hr or less before an eruption (Jolly et al., 2018) would likely remain undetected by the algorithm when using 12-hr time windows. 

These observations highlight the contrast between EP II and the other two unrest periods. In the EPs I and III cases, the long period of magmatic fluids rising into the shallow hydrothermal system gradually increased the pressure as seals formed. This was identified well by the algorithm. If the VLP intensity identified by Jolly et al. (2018) indicated a rapid and large gas slug, then this short-lived slug itself—hindered by a (partially) sealed system (Kennedy et al., 2020)—may have driven the 2016 eruption. Alternatively, the explosion may have been caused by meteoric fluids trapped below a mineralogical seal, without involvement of deeper magmatic fluids (Kennedy et al., 2020). In both cases, the algorithm would be unable to detect any longer-term evolution in EP II, due to the absence of long-term ascent of new magmatic fluids. These results suggest that the approach could be used to detect differences between the drivers of unrest, which could be an exciting subject of future investigation. 

### **4.3. External, Nonvolcanic Tremor Sources** 

One of the most common problems of volcanic tremor analysis is distinguishing it from nonvolcanic external noise. External sources can be transient (e.g., regional or distal tectonic earthquakes), continuous (e.g., surf noise, seasonal, and atmospheric phenomena; Yates et al., 2019), or periodic (e.g., lunar effects; Caudron et al., 2021) and may trigger regime changes by sudden or gradual impact. Two of the most common external noise sources are microseisms, e.g., due to wave action (Ensing et al., 2017; Yates, 2018), and tectonic earthquakes. Noise originating from wave action is persistent enough to be accounted for by the SOM algorithm (Ponmalai & Kamath, 2019) and is unrelated to regime changes. Large tectonic earthquakes, however, significantly affect seismic patterns over time periods similar to regime durations, so they can be confused with volcanic regime-change triggers (Carniel et al., 2003, 2008; Carniel & Tárraga, 2006; Jolly et al., 2018; Lesage et al., 2008, 2014; Seropian et al., 2021). Usually tectonic earthquake events have an immediate impact on the tremor signal (e.g., Carniel et al., 2003), so that regime changes would be coincidental. Yates et al. (2019) identified tectonic events between 2007 and late 2016 that affected tremor, or decreased subsequent coseismic velocity. We extended this list with events following the same criteria (Table S2 in Supporting Information S1) using the Quake Search Tool provided by GeoNet. From events within days of a regime change (before and after, considering inaccuracies from regime change detection), we found no evidence of a nonvolcanic earthquake shifting the dominant regime at Whakaari. Hence, the regime changes detected in this study are predominantly related to volcanic processes. 

17 of 21 

STEINKE ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2022JB026221 

## **5. Conclusions** 

We developed an algorithm based on SOM and k-means clustering to recognize patterns in a continuous tremor signal recorded at Whakaari/White Island volcano, New Zealand, between 2008 and 2020. The approach improves objectivity in volcanic state interpretation and can be used in a variety of settings, by requiring very few hyperparameters and using unsupervised classifiers that are locally tuned. In addition, we tested a tool based on KDE to automatically detect seismic regime changes. Using this tool, we categorize the Whakaari seismic signals into different regimes, representing distinct volcano-seismic states. Applying this approach to three unrest episodes at Whakaari (2012/2013, 2016, 2019) we show that an SOM-based classifier utilizing statistical means corresponds well with other observational data. The feasibility of an automated classifier should be investigated with more data sets, but the tuning approach described here provides a structured means to identify patterns in seismic time series leading to a more reliable understanding of the target volcano. 

We observe a clear separation between background regimes and elevated levels of unrest. In EPs I and III, the transition from background to unrest regimes occurs 6 weeks before the August 2012 eruption, and ca. 3.5 months prior to the December 2019 eruption. Regime changes correlate well with DSAR and RSAM values, as well as with reported volcanic activity, especially during the 2012/2013 and 2019 unrest episodes. Dominant processes are identified as system pressurization, depressurization, and elevated surface activity associated with degassing, which repeated in a similar pattern across the 2012/2013 and 2019 episodes. The evolutionary pathway of unrest for the EP II 2016 eruption may differ as a result of a rapid propagation/trapping of fluids, contrasting with the pressurization-depressurization pattern found for EPs I and III. The algorithm presented here thus helps to interpret tremor signals in order to identify ongoing volcanic processes (especially for magmatic unrest cycles), which could be a valuable addition to existing seismic monitoring techniques and eruption forecasting approaches. 

## **Conflict of Interest** 

The authors declare no conflicts of interest relevant to this study. 

## **Data Availability Statement** 

We acknowledge the New Zealand GeoNet project and its sponsors Toka Tū Ake EQC, GNS Science, LINZ, NEMA, and MBIE for providing seismic data used in this study. Seismic data were accessed via the GeoNet FDSN Web Service. Computational codes were modified based on scripts developed by David Dempsey (Dempsey et al., 2020) and Roberto Carniel (Carniel, Barbui, & Jolly, 2013; Carniel, Jolly, & Barbui, 2013) and are available on GitHub (https://github.com/bste426/TremorRegimes). The feature library “tsfresh” is freely available and accessible via obspy (https://github.com/blue-yonder/tsfresh). Volcanic Activity Bulletins are accessible via the GeoNet webpage (https://www.geonet.org.nz/volcano/vab/). 

##### **Acknowledgments** 

We would like to thank Dr. Gill Jolly and John Power for their helpful comments and ideas for improvements, and two anonymous reviewers for their highly appreciated feedbacks. The work described in this manuscript was supported by the Transitioning Taranaki to a Volcanic Future MBIE Endeavour Grant (UOAX1913). Any use of trade, firm, or product names is for descriptive purposes only and does not imply endorsement by the U.S. Government. Open access publishing facilitated by The University of Auckland, as part of the Wiley - The University of Auckland agreement via the Council of Australian University Librarians. 

## **References** 

Benjamini, Y., & Hochberg, Y. (1995). Controlling the false discovery rate: A practical and powerful approach to multiple testing. _Journal of the Royal Statistical Society: Series B_ , _57_ (1), 289–300. https://doi.org/10.1111/j.2517-6161.1995.tb02031.x 

Cabanes, G., & Bennani, Y. (2010). _Learning the number of clusters in self organizing map_ (pp. 14–28). INTECH Open Access Publisher. 

Carniel, R. (2014). Characterization of volcanic regimes and identification of significant transitions using geophysical data: A review. _Bulletin of Volcanology_ , _76_ (8), 848. https://doi.org/10.1007/s00445-014-0848-0 

Carniel, R., Barbui, L., & Jolly, A. D. (2013). Detecting dynamical regimes by Self-Organizing Map (SOM) analysis: An example from the March 2006 phreatic eruption at Raoul Island, New Zealand Kermadec arc. _Bollettino di Geofisica Teorica ed Applicata_ , _54_ (1), 39–52. 

- Carniel, R., Di Cecca, M., & Rouland, D. (2003). Ambrym, Vanuatu (July-August 2000): Spectral and dynamical transitions on the hours-to-days timescale. _Journal of Volcanology and Geothermal Research_ , _128_ (1–3), 1–13. https://doi.org/10.1016/s0377-0273(03)00243-9 

Carniel, R., & Guzman, S. R. (2020). Machine learning in volcanology: A review. In K. Nemeth (Ed.) _Updates in volcanology-transdisciplinary nature of volcano science_ . IntechOpen. 

- Carniel, R., Jolly, A. D., & Barbui, L. (2013). Analysis of phreatic events at Ruapehu volcano, New Zealand using a new SOM approach. _Journal of Volcanology and Geothermal Research_ , _254_ , 69–79. https://doi.org/10.1016/j.jvolgeores.2012.12.026 

- Carniel, R., & Tárraga, M. (2006). Can tectonic events change volcanic tremor at Stromboli? _Geophysical Research Letters_ , _33_ , L20321. https:// doi.org/10.1029/2006GL027690 

- Carniel, R., Tárraga, M., Barazza, F., & García, A. (2008). Possible interaction between tectonic events and seismic noise at Las Cañadas volcanic Caldera, Tenerife, Spain. _Bulletin of Volcanology_ , _70_ (9), 1113–1121. https://doi.org/10.1007/s00445-007-0193-7 

- Caudron, C., Girona, T., Jolly, A., Christenson, B., Savage, M., Carniel, R., et al. (2021). A quest for unrest in multiparameter observations at Whakarari/White Island volcano, New Zealand 2007-2018. _Earth Planets and Space_ , _73_ (1), 195. 

- Caudron, C., Girona, T., Taisne, B., Gunawan, H., & Kristianto, K. (2019). Change in seismic attenuation as a long-term precursor of gas-driven eruptions. _Geology_ , _47_ (7), 632–636. https://doi.org/10.1130/g46107.1 

18 of 21 

STEINKE ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2022JB026221 

Chardot, L., Jolly, A. D., Kennedy, B. M., Fournier, N., & Sherburn, S. (2015). Using volcanic tremor for eruption forecasting at White Island volcano (Whakaari), New Zealand. _Journal of Volcanology and Geothermal Research_ , _302_ , 11–23. https://doi.org/10.1016/j. jvolgeores.2015.06.001 

Christ, M., Braun, N., Neuffer, J., & Kempa-Liehr, A. W. (2018). Time series feature extraction on basis of scalable hypothesis tests (tsfresh—a python package). _Neurocomputing_ , _307_ , 72–77. https://doi.org/10.1016/j.neucom.2018.03.067 

- Christenson, B. W., Reyes, A. G., Young, R., Moebis, A., Sherburn, S., Cole-Baker, J., & Britten, K. (2010). Cyclic processes and factors leading to phreatic eruption events: Insights from the 25 September 2007 eruption through Ruapehu Crater Lake, New Zealand. _Journal of Volcanology and Geothermal Research_ , _191_ (1–2), 15–32. https://doi.org/10.1016/j.jvolgeores.2010.01.008 

- Christenson, B. W., White, S., Britten, K., & Scott, B. J. (2017). Hydrological evolution and chemical structure of a hyper-acidic springlake system on Whakaari/White Island, NZ. _Journal of Volcanology and Geothermal Research_ , _346_ , 180–211. https://doi.org/10.1016/j. jvolgeores.2017.06.017 

Cole, J. W., Thordarson, T., & Burt, R. M. (2000). Magma origin and evolution of White Island (Whakaari) volcano, Bay of plenty, New Zealand. _Journal of Petrology_ , _41_ (6), 867–895. https://doi.org/10.1093/petrology/41.6.867 

Davies, D. L., & Bouldin, D. W. (1979). A cluster separation measure. _IEEE Transactions on Pattern Analysis and Machine Intelligence_ (2), 224–227. https://doi.org/10.1109/tpami.1979.4766909 

Dempsey, D. E., Cronin, S. J., Mei, S., & Kempa-Liehr, A. W. (2020). Automatic precursor recognition and real-time forecasting of sudden explosive volcanic eruptions at Whakaari, New Zealand. _Nature Communications_ , _11_ (1), 3562. https://doi.org/10.1038/s41467-020-17375-2 Edwards, M. J., Kennedy, B. M., Jolly, A. D., Scheu, B., & Jousset, P. (2017). Evolution of a small hydrothermal eruption episode through a 

mud pool of varying depth and rheology, White Island, NZ. _Bulletin of Volcanology_ , _79_ (2), 16. https://doi.org/10.1007/s00445-017-1100-5 

Endo, E. T., & Murray, T. (1991). Real-time seismic amplitude measurement (RSAM): A volcano monitoring and prediction tool. _Bulletin of Volcanology_ , _53_ (7), 533–545. https://doi.org/10.1007/bf00298154 

Ensing, J. X., Van Wijk, K., & Spörli, K. B. (2017). Probing the subsurface of the Auckland Volcanic field with ambient seismic noise. _New Zealand Journal of Geology and Geophysics_ , _60_ (4), 341–352. https://doi.org/10.1080/00288306.2017.1337643 

Ferreira, L., & Hitchcock, D. B. (2009). A comparison of hierarchical methods for clustering functional data. _Communications in Statistics-Simulation and Computation_ , _38_ (9), 1925–1949. https://doi.org/10.1080/03610910903168603 

Giggenbach, W. F. (1987). Redox processes governing the chemistry of fumarolic gas discharges from White Island, New Zealand. _Applied Geochemistry_ , _2_ (2), 143–161. https://doi.org/10.1016/0883-2927(87)90030-8 

Harlow, D. H., Power, J. A., Laguerta, E. P., Ambubuyog, G., White, R. A., & Hoblitt, R. P. (1996). Precursory seismicity and forecasting of the June 15, 1991, eruption of mount Pinatubo. Fire and mud: Eruptions and lahars of mount Pinatubo (pp. 223–247). 

Heap, M. J., Kennedy, B. M., Farquharson, J. I., Ashworth, J., Mayer, K., Letham-Brake, M., et al. (2017). A multidisciplinary approach to quantify the permeability of the Whakaari/White Island volcanic hydrothermal system (Taupo Volcanic Zone, New Zealand). _Journal of Volcanology and Geothermal Research_ , _332_ , 88–108. https://doi.org/10.1016/j.jvolgeores.2016.12.004 

Houghton, B. F., & Nairn, I. A. (1991). The 1976–1982 Strombolian and phreatomagmatic eruptions of White Island, New Zealand: Eruptive and depositional mechanisms at a ‘wet’ volcano. _Bulletin of Volcanology_ , _54_ (1), 25–49. https://doi.org/10.1007/bf00278204 

Jaquet, O., & Carniel, R. (2003). Multivariate stochastic modelling: Towards forecasts of paroxysmal phases at Stromboli. _Journal of Volcanology and Geothermal Research_ , _128_ (1–3), 261–271. https://doi.org/10.1016/s0377-0273(03)00259-2 

Jolly, A., Caudron, C., Girona, T., Christenson, B., & Carniel, R. (2020). ‘Silent’ dome emplacement into a wet volcano: Observations from an 

effusive eruption at white Island (Whakaari), New Zealand in late 2012. _Geosciences_ , _10_ (4), 142. https://doi.org/10.3390/geosciences10040142 

Jolly, A., Kennedy, B., Edwards, M., Jousset, P., & Scheu, B. (2016). Infrasound tremor from bubble burst eruptions in the viscous shallow crater lake of White Island, New Zealand, and its implications for interpreting volcanic source processes. _Journal of Volcanology and Geothermal Research_ , _327_ , 585–603. https://doi.org/10.1016/j.jvolgeores.2016.08.010 

Jolly, A., Lokmer, I., Christenson, B., & Thun, J. (2018). Relating gas ascent to eruption triggering for the April 27, 2016, White Island (Whakaari), New Zealand eruption sequence. _Earth Planets and Space_ , _70_ (1), 177. https://doi.org/10.1186/s40623-018-0948-8 

Jolly, A. D. (2019). On the shallow volcanic response to remote seismicity. _Geology_ , _47_ (1), 95–96. https://doi.org/10.1130/focus012019.1 

Jolly, A. D., Lokmer, I., Thun, J., Salichon, J., Fry, B., & Chardot, L. (2017). Insights into fluid transport mechanisms at White Island from 

analysis of coupled very long-period (VLP), long-period (LP) and high-frequency (HF) earthquakes. _Journal of Volcanology and Geothermal Research_ , _343_ , 75–94. https://doi.org/10.1016/j.jvolgeores.2017.06.006 

Jolly, A. D., Sherburn, S., Jousset, P., & Kilgour, G. (2010). Eruption source processes derived from seismic and acoustic observations of the 25 September 2007 Ruapehu eruption—North Island, New Zealand. _Journal of Volcanology and Geothermal Research_ , _191_ (1–2), 33–45. https:// doi.org/10.1016/j.jvolgeores.2010.01.009 

Kanakiya, S., Adam, L., Rowe, M. C., Lindsay, J. M., & Esteban, L. (2021). The role of tuffs in sealing volcanic conduits. _Geophysical Research Letters_ , _48_ , e2021GL095175. https://doi.org/10.1029/2021GL095175 

Kennedy, B. M., Farquhar, A., Hilderman, R., Villeneuve, M. C., Heap, M. J., Mordensky, S., et al. (2020). Pressure controlled permeability in a conduit filled with fractured hydrothermal breccia reconstructed from ballistics from Whakaari (White Island), New Zealand. _Geosciences_ , _10_ (4), 138. https://doi.org/10.3390/geosciences10040138 

Kilgour, G., Gates, S., Kennedy, B., Farquhar, A., McSporran, A., & Asher, C. (2019). Phreatic eruption dynamics derived from deposit analysis: A case study from a small, phreatic eruption from Whakāri/White Island, New Zealand. _Earth Planets and Space_ , _71_ (1), 36. https://doi.org/10.1186/s40623-019-1008-8 

Kilgour, G., Kennedy, B., Scott, B., Christenson, B., Jolly, A., Asher, C., et al. (2021). Whakaari/White Island: A review of New Zealand’s most active volcano. _New Zealand Journal of Geology and Geophysics_ , _64_ (2–3), 273–295. https://doi.org/10.1080/00288306.2021.1918186 Kilgour, G., Moune, S., Christenson, B., & Della Pasqua, F. (2021). Insights into the 1976–2000 eruption episode of Whakaari/White Island, 

New Zealand: An eruption fuelled by repeated mafic recharge. _Bulletin of Volcanology_ , _83_ (6), 40. https://doi.org/10.1007/s00445-021-01460-5 

Kiviluoto, K. (1996). Topology preservation in self-organizing maps. In _Proceedings of International Conference on Neural Networks (ICNN'96)_ (Vol. 1, pp. 294–299). IEEE. 

Köhler, A., Ohrnberger, M., & Scherbaum, F. (2010). Unsupervised pattern recognition in continuous seismic wavefield records using self-organizing maps. _Geophysical Journal International_ , _182_ (3), 1619–1630. https://doi.org/10.1111/j.1365-246x.2010.04709.x 

Kohonen, T. (1982). Self-organized formation of topologically correct feature maps. _Biological Cybernetics_ , _43_ (1), 59–69. https://doi. org/10.1007/bf00337288 

Kohonen, T. (2001). Software tools for SOM. In _Self-organizing maps_ (pp. 311–328). Springer. 

Langer, H., Falsaperla, S., Masotti, M., Campanini, R., Spampinato, S., & Messina, A. (2009). Synopsis of supervised and unsupervised pattern classification techniques applied to volcanic tremor data at Mt Etna, Italy. _Geophysical Journal International_ , _178_ (2), 1132–1144. https://doi. org/10.1111/j.1365-246x.2009.04179.x 

19 of 21 

STEINKE ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2022JB026221 

Langer, H., Falsaperla, S., Messina, A., Spampinato, S., & Behncke, B. (2011). Detecting imminent eruptive activity at Mt Etna, Italy, in 2007– 2008 through pattern classification of volcanic tremor data. _Journal of Volcanology and Geothermal Research_ , _200_ (1–2), 1–17. https://doi. org/10.1016/j.jvolgeores.2010.11.019 Langer, H., Falsaperla, S., Spampinato, S., & Messina, A. (2022). Energy threshold changes in volcanic activity at Mt. Etna (Italy) inferred from volcanic tremor. _Scientific Reports_ , _12_ (1), 17895. https://doi.org/10.1038/s41598-022-20766-8 

Lesage, P., Carrara, A., Pinel, V., & Arámbula-Mendoza, R. (2008). Absence of detectable precursory deformation and velocity variation before 

the large dome collapse of July 2015 at Volcán de Colima, Mexico. _Frontiers of Earth Science_ , _6_ , 93. https://doi.org/10.3389/feart.2018.00093 Lesage, P., Reyes-Dávila, G., & Arámbula-Mendoza, R. (2014). Large tectonic earthquakes induce sharp temporary decreases in seismic velocity in Volcán de Colima, Mexico. _Journal of Geophysical Research: Solid Earth_ , _119_ , 4360–4376. https://doi.org/10.1002/2013JB010884 Liu, X., Zhu, X. H., Qiu, P., & Chen, W. (2012). A correlation-matrix-based hierarchical clustering method for functional connectivity analysis. _Journal of Neuroscience Methods_ , _211_ (1), 94–102. https://doi.org/10.1016/j.jneumeth.2012.08.016 

Manley, G. F., Mather, T. A., Pyle, D. M., Clifton, D. A., Rodgers, M., Thompson, G., & Roman, D. C. (2021). Machine learning approaches to identifying changes in eruptive state using multi-parameter datasets from the 2006 eruption of Augustine volcano, Alaska. _Journal of Geophysical Research: Solid Earth_ , _126_ , e2021JB022323. https://doi.org/10.1029/2021JB022323 

Mann, H. B., & Whitney, D. R. (1947). On a test of whether one of two random variables is stochastically larger than the other. _The Annals of Mathematical Statistics_ , _18_ (1), 50–60. https://doi.org/10.1214/aoms/1177730491 McNutt, S. R. (1986). Observations and analysis of B-type earthquakes, explosions, and volcanic tremor at Pavlof Volcano, Alaska. _Bulletin of the Seismological Society of America_ , _76_ (1), 153–175. Mei, E. T. W., Lavigne, F., Picquout, A., De Bélizal, E., Brunstein, D., Grancher, D., et al. (2013). Lessons learned from the 2010 evacuations at Merapi volcano. _Journal of Volcanology and Geothermal Research_ , _261_ , 348–365. https://doi.org/10.1016/j.jvolgeores.2013.03.010 Moosavi, V., & Packmann, S. (2014). _SOMPY: A Python Library for Self Organising Map (SOM)_ . GitHub. Retrieved from https://github.com/ sevamoo/SOMPY Neuberg, J., Luckett, R., Baptie, B., & Olsen, K. (2000). Models of tremor and low-frequency earthquake swarms on Montserrat. _Journal of Volcanology and Geothermal Research_ , _101_ (1–2), 83–104. https://doi.org/10.1016/s0377-0273(00)00169-4 Nishi, Y., Sherburn, S., Scott, B. J., & Sugihara, M. (1996). High-frequency earthquakes at White Island volcano, New Zealand: Insights into the shallow structure of a volcano-hydrothermal system. _Journal of Volcanology and Geothermal Research_ , _72_ (3–4), 183–197. https://doi. org/10.1016/0377-0273(96)00005-4 

Orozco-Alzate, M., Acosta-Muñoz, C., & Londoño-Bonilla, J. M. (2012). The automated identification of volcanic earthquakes: Concepts, applications and challenges. _Earthquake Research and Analysis-Seismology, Seismotectonic and Earthquake Geology_ , 345–370. https://doi. org/10.5772/27508 

Park, I., Jolly, A., Kim, K. Y., & Kennedy, B. (2019). Temporal variations of repeating low frequency volcanic earthquakes at Ngauruhoe Volcano, New Zealand. _Journal of Volcanology and Geothermal Research_ , _373_ , 108–119. https://doi.org/10.1016/j.jvolgeores.2019.01.024 Park, I., Jolly, A., Lokmer, I., & Kennedy, B. (2020). Classification of long-term very long period (VLP) volcanic earthquakes at Whakaari/White Island volcano, New Zealand. _Earth Planets and Space_ , _72_ (1), 92. https://doi.org/10.1186/s40623-020-01224-z Pearson, K. (1901). LIII. On lines and planes of closest fit to systems of points in space. _The London, Edinburgh and Dublin Philosophical Magazine and Journal of Science_ , _2_ (11), 559–572. https://doi.org/10.1080/14786440109462720 Ponmalai, R., & Kamath, C. (2019). _Self-organizing maps and their applications to data analysis (No. LLNL-TR-791165)_ . Lawrence Livermore National Lab. (LLNL). Rousseeuw, P. J. (1987). Silhouettes: A graphical aid to the interpretation and validation of cluster analysis. _Journal of Computational and Applied Mathematics_ , _20_ , 53–65. https://doi.org/10.1016/0377-0427(87)90125-7 Sakar, T. (2013). Clustering metrics—Alternatives to the elbow method. _GitHub repository_ . Retrieved from https://github.com/tirthajyoti/ Machine-Learning-with-Python/blob/master/Clustering-Dimensionality-Reduction/Clustering_metrics.ipynb 

Scolamacchia, T., & Cronin, S. J. (2016). Idiosyncrasies of volcanic sulfur viscosity and the triggering of unheralded volcanic eruptions. _Frontiers of Earth Science_ , _4_ , 24. https://doi.org/10.3389/feart.2016.00024 

Seropian, G., Kennedy, B. M., Walter, T. R., Ichihara, M., & Jolly, A. D. (2021). A review framework of how earthquakes trigger volcanic eruptions. _Nature Communications_ , _12_ (1), 1004. https://doi.org/10.1038/s41467-021-21166-8 Sherburn, S., Scott, B. J., Nishi, Y., & Sugihara, M. (1998). Seismicity at White Island volcano, New Zealand: A revised classification and inferences about source mechanism. _Journal of Volcanology and Geothermal Research_ , _83_ (3–4), 287–312. https://doi.org/10.1016/ s0377-0273(98)00022-5 Simons, B. C., Cronin, S. J., Eccles, J. D., Bebbington, M. S., & Jolly, A. D. (2020). Spatiotemporal variations in eruption style, magnitude and vent morphology at Yasur volcano, Vanuatu: Insights into the conduit system. _Bulletin of Volcanology_ , _82_ (8), 59. https://doi.org/10.1007/ s00445-020-01394-4 Stix, J., & de Moor, J. M. (2018). Understanding and forecasting phreatic eruptions driven by magmatic degassing. _Earth Planets and Space_ , _70_ (1), 83. https://doi.org/10.1186/s40623-018-0855-z Syahbana, D. K., Kasbani, K., Suantika, G., Prambada, O., Andreas, A. S., Saing, U. B., et al. (2019). The 2017–19 activity at Mount Agung in Bali (Indonesia): Intense unrest, monitoring, crisis response, evacuation, and eruption. _Scientific Reports_ , _9_ (1), 8848. https://doi.org/10.1038/ s41598-019-45295-9 Thorndike, R. L. (1953). Who belongs in the family? _Psychometrika_ , _18_ , 267–276. https://doi.org/10.1007/BF02289263 Toloşi, L., & Lengauer, T. (2011). Classification with correlated features: Unreliability of feature ranking and solutions. _Bioinformatics_ , _27_ (14), 1986–1994. https://doi.org/10.1093/bioinformatics/btr300 Unglert, K., & Jellinek, A. M. (2017). Feasibility study of spectral pattern recognition reveals distinct classes of volcanic tremor. _Journal of Volcanology and Geothermal Research_ , _336_ , 219–244. https://doi.org/10.1016/j.jvolgeores.2017.03.006 Unglert, K., Radić, V., & Jellinek, A. M. (2016). Principal component analysis vs. self-organizing maps combined with hierarchical clustering for pattern recognition in volcano seismic spectra. _Journal of Volcanology and Geothermal Research_ , _320_ , 58–74. https://doi.org/10.1016/j. jvolgeores.2016.04.014 Walsh, B., Procter, J., Lokmer, I., Thun, J., Hurst, T., Christenson, B., & Jolly, A. (2019). Geophysical examination of the 27 April 2016 Whakaari/White Island, New Zealand, eruption and its implications for vent physiognomies and eruptive dynamics. _Earth Planets and Space_ , _71_ (1), 25. https://doi.org/10.1186/s40623-019-1003-0 

Ward, J. H., Jr. (1963). Hierarchical grouping to optimize an objective function. _Journal of the American Statistical Association_ , _58_ (301), 236–244. https://doi.org/10.1080/01621459.1963.10500845 

20 of 21 

STEINKE ET AL. 

**Journal of Geophysical Research: Solid Earth** 

10.1029/2022JB026221 

Yates, A. (2018). _Seismic velocity changes at White Island Volcano, New Zealand, Using Ten Years of Ambient Noise Interferometry (Masters thesis)_ . Victoria University of Wellington. 

Yates, A. S., Savage, M. K., Jolly, A. D., Caudron, C., & Hamling, I. J. (2019). Volcanic, coseismic, and seasonal changes detected at White Island (Whakaari) volcano, New Zealand, using seismic ambient noise. _Geophysical Research Letters_ , _46_ , 99–108. https://doi. org/10.1029/2018GL080580 

## **References From the Supporting Information** 

- Carniel, R., & Di Cecca, M. (1999). Dynamical tools for the analysis of long term evolution of volcanic tremor at Stromboli. _Annals of Geophysics_ , _42_ (3). https://doi.org/10.4401/ag-3732 

- Cortés, G., Arámbula, R., Álvarez, I., Benítez, C., Ibáñez, J., Lesage, P., et al. (2009). Analysis of Colima, Popocatépetl and Arenal volcanic seismicity using an automatic continuous hidden Markov Models-based recognition system. In _The VOLUME Project_ (pp. 150–160). VOLUME Project Consortium. 

- Cortés, G., Carniel, R., Lesage, P., Mendoza, M., & Della Lucia, I. (2020). Practical volcano-independent recognition of seismic events: VULCAN.ears project. _Frontiers of Earth Science_ , _8_ , 702. https://doi.org/10.3389/feart.2020.616676 

21 of 21 

STEINKE ET AL. 

