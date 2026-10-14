# Forecasting Eruptions at Steamboat Geyser: Time Scales, Differentiability, and Detectability of Seismic Precursors Through Data‐Driven Methods

**Authors:** Alberto Ardid, Anna Barth, David Dempsey, Michael Manga, Shane J. Cronin  
**Published in:** Journal of Geophysical Research: Machine Learning and Computation (2025)  
**DOI (version of record):** https://doi.org/10.1029/2024jh000569  
**This copy:** Published version. Text extracted from the PDF at https://ddempsey.github.io/papers/2025-ardid-forecasting-eruptions-steamboat-geyser-time/ardid2025-forecasting-eruptions-steamboat.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** Published version, reproduced under the CC BY-NC-ND 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1029/2024jh000569  
**Licence:** CC BY-NC-ND 4.0 http://creativecommons.org/licenses/by-nc-nd/4.0/  

---


## **RESEARCH ARTICLE** 10.1029/2024JH000569 

#### **Key Points:** 

- Eruption Precursors: Seismic data reveals short‐term, detectable eruption signals 

- Forecasting Model: Machine Learning predicts eruptions with up to 12.6% probability 

- Real‐Time Monitoring: Data‐driven methods improve hazard management 

#### **Supporting Information:** 

Supporting Information may be found in the online version of this article. 

#### **Correspondence to:** 

A. Ardid, aardids@gmail.com 

#### **Citation:** 

Ardid, A., Barth, A., Dempsey, D., Manga, M., & Cronin, S. J. (2025). Forecasting eruptions at steamboat geyser: Time scales, differentiability, and detectability of seismic precursors through data‐driven methods. _Journal of Geophysical Research: Machine Learning and Computation_ , _2_ , e2024JH000569. https:// doi.org/10.1029/2024JH000569 

Received 21 DEC 2024 Accepted 4 MAR 2025 

#### **Author Contributions:** 

**Conceptualization:** Alberto Ardid, Anna Barth 

**Data curation:** Alberto Ardid, Anna Barth **Formal analysis:** Alberto Ardid, David Dempsey, Michael Manga, Shane J. Cronin **Funding acquisition:** Michael Manga, Shane J. Cronin **Investigation:** Alberto Ardid, David Dempsey **Methodology:** Alberto Ardid, Anna Barth **Project administration:** Alberto Ardid **Resources:** Alberto Ardid 

© 2025 The Author(s). _Journal of Geophysical Research: Machine Learning and Computation_ published by Wiley Periodicals LLC on behalf of American Geophysical Union. This is an open access article under the terms of the Creative Commons Attribution‐NonCommercial‐NoDerivs License, which permits use and distribution in any medium, provided the original work is properly cited, the use is non‐commercial and no modifications or adaptations are made. 

# **Forecasting Eruptions at Steamboat Geyser: Time Scales, Differentiability, and Detectability of Seismic Precursors Through Data‐Driven Methods** 

### **Alberto Ardid**<sup>**1**</sup> **, Anna Barth**<sup>**2**</sup> **, David Dempsey**<sup>**1**</sup> **, Michael Manga**<sup>**2**</sup> **, and Shane J. Cronin**<sup>**3**</sup> 

> 1University of Canterbury, Christchurch, New Zealand, 2University of California, Berkeley, CA, USA, 3University of Auckland, Auckland, New Zealand 

**Abstract** Geyser eruptions provide a test bed for using geophysical data to forecast eruptions and to understand heat and mass transport in hydrothermal systems. We used time series analyses of seismic data at Steamboat Geyser, Yellowstone National Park, to identify short‐term precursors that are recurrent, detectable in real time, distinctly identifiable, as well as being rare during non‐eruptive periods. We analyzed seismic data from March to December 2018 to identify patterns that occurred before 31 eruptions. Four seismic amplitude measures and 700 time‐series features were computed from the seismic data. A template matching analysis identified an optimal 18‐hr window for detecting precursors. We applied a random forest to classify pre‐eruptive and non‐eruptive data for out‐of‐sample eruptions (eruptions that were not included in the model's training data), showing ability to distinguish between the two. This model performed better than a simpler amplitude‐based approach. Seismic features with the most predictive power include autocorrelations, longest strike above the mean, and change quantiles, particularly within the 4.5–16 Hz frequency range. We applied isotonic regression, a method that converts raw model outputs into calibrated probabilities, to improve the interpretability of eruption forecasting outputs. The likelihood of an eruption reaches 12.6% within 18 hr prior to the event, representing a marginal increase over the static 8% probability derived solely from eruption intervals. Unlike the interval‐based approach, our model does not rely on the time since the last eruption, instead using real‐time seismic features to detect precursory signals. Our study advances Machine Learning methodologies in eruption forecasting by integrating calibrated probability estimation through isotonic regression, which has advantages over traditional approaches for geysers with highly irregular eruption intervals. 

**Plain Language Summary** We investigate how to forecast eruptions at Steamboat Geyser in Yellowstone National Park by analyzing seismic data to identify signals that appear before eruptions. Focusing on data from 2018, which included 31 eruptions, we used Machine Learning techniques to detect patterns that occur prior to an eruption. Examining these using cluster analysis we were able to identify seismic features that indicate when an eruption is imminent, and that rarely occur at other times. These potential precursors are most apparent when analyzing over an 18‐hr window of the continuous data. We developed a model that predicts eruptions from monitoring data with a probability of up to 12.6% over the 18‐hr window. Our results show promise for real‐time monitoring of geysers and associated hazards in geothermal areas. 

## **1. Introduction** 

Geysers erupt water and steam episodically. They draw scientific interest as an opportunity to study how heat, water, and rock interact in the shallow sub‐surface (Allen, 1935; Hurwitz & Manga, 2017; White, 1967). These dynamic features serve as natural laboratories for understanding the episodic recharge of steam and water into the geyser conduit, and the interactions of pressure, boiling conditions, and conduit geometry (Eibl et al., 2021; Munoz‐Saez, Manga et al., 2015; Munoz‐Saez, Namiki et al., 2015; Reed et al., 2021). Geysers are not always regular and are readily influenced by their external environment. For example, in Yellowstone National Park, USA, extended droughts may halt activity of major geysers, such as Old Faithful (Hurwitz, King, et al., 2021) and Steamboat (Hurwitz et al., 2023) by reducing groundwater recharge (Hurwitz et al., 2008). Earthquakes may also influence geysers, with rapid stress changes from regional (e.g., Reed et al., 2024) and distal events (e.g., Hurwitz & Lowenstern, 2014) likely influencing fluid flow and permeability. Even in the absence of obvious major droughts or earthquakes, a range of subtle and unknown internal and external processes may generate complex geyser dynamics and irregular eruption timing, which is a challenge for hazard management in touristic and 

1 of 19 

ARDID ET AL. 

**JGR: Machine Learning and Computation** 

10.1029/2024JH000569 

**Software:** Alberto Ardid, David Dempsey **Supervision:** Alberto Ardid, Anna Barth, David Dempsey, Michael Manga, Shane J. Cronin **Validation:** Alberto Ardid, David Dempsey **Visualization:** Alberto Ardid **Writing – original draft:** Alberto Ardid **Writing – review & editing:** Alberto Ardid, Anna Barth, David Dempsey, Michael Manga, Shane J. Cronin 

industrial geothermal areas. An example of this unpredictability occurred at 10 a.m. on 23 July 2024, when a hydrothermal explosion took place in Biscuit Basin, Yellowstone National Park, ejecting a towering column of boiling water, mud, and rock into the air, damaging boardwalk infrastructure and causing dozens of tourists to run for safety (USGS, 2024). Although no injuries were reported, the incident underscores the difficulties of managing risks in such dynamic geothermal environments. 

Accurate forecasting of geyser eruptions, particularly at unpredictable sites like Steamboat Geyser, is important for managing hazards in geothermal areas with high visitor traffic. Traditional approaches, such as Time Between Eruptions (TBE) models and amplitude‐based seismic thresholds, provide baseline probabilities. However, the methods may be less suited to sudden subsurface changes, and this could result in inaccurate predictions (e.g., Hurwitz, King, et al., 2021; Reed et al., 2024). In contrast, recent advancements in time series Machine Learning (ML) have improved hazard forecasting at volcanic systems (Ardid, Dempsey, et al., 2025; Ardid, Valencia, et al., 2025; Dempsey et al., 2020; Manley et al., 2021) and creeping faults (Rouet‐Leduc et al., 2017) through the detection of subtle seismic signals. They have also proven fruitful). In wildfire settings, where meteorological data encode fire potential information (Ardid, Valencia, et al., 2025). These approaches harness large data sets and complex feature engineering to capture nuanced signals that simpler methods miss. Building on these advances, our study applies a data‐driven methodology combining time series feature engineering, template matching, and isotonic regression to develop eruption probability estimates at Steamboat Geyser. This method aims to calculate smooth, well‐calibrated probability outputting smooth, well‐calibrated probabilitie, that reflect the recent incoming data. The goal is to improve hazard management in dynamic geothermal environments. 

The general mechanisms of geyser eruptions are well understood. Ingebritsen and Rojstaczer (1993, 1996) proposed a model where heat input, water recharge, and the geometry of subsurface cavities and channels control eruption dynamics. Studies on geyser‐generated seismicity (e.g., Cros et al., 2011; Kieffer, 1984; Kedar er al., 1996), demonstrated that Old Faithful Geyser exhibits seismic behavior similar to volcanic seismicity, including “bubble quakes,” harmonic tremor during eruptions, and periods of seismic quiescence before eruptions. These studies also identified distinct storage regions within the geyser system and related the seismic signals to processes such as bubble formation and the migration of steam and water within the conduit (Nayak et al., 2020; Vandemeulebrouck et al., 2013, 2014; Wu et al., 2017, 2021). These conceptual models have been refined and tested through laboratory experiments (e.g., Leon et al., 2019; Toramaru & Maeda, 2013), numerical simulations (e.g., Ingebritsen & Rojstaczer, 1996; Reed & Sohn, 2017; Liu et al., 2022), and field observations (e.g., Ardid et al., 2019; Belousov et al., 2013; Munoz‐Saez, Manga et al., 2015; Munoz‐Saez, Namiki et al., 2015; Namiki et al., 2014). 

Despite the regularity of many geysers, some, such as Steamboat Geyser in Yellowstone National Park's Norris Geyser Basin, are notoriously irregular in their eruption frequency and eruption size (Figure 1). Recognized as the world's tallest active geyser, Steamboat's eruptions can reach heights exceeding 100 m (Bryan, 2018). Observations of Steamboat Geyser, dating back to the 19th century, describe its unpredictable activity, with periods of intense eruptive phases intercalated with long dormant intervals (Bryan, 2018; White, 1967). 

Steamboat Geyser's reactivation in March 2018 after a 3.5‐year dormant period provides a rare opportunity to study the properties of re‐awakening geysers (Reed et al., 2021). Wu et al. (2021) used densely deployed seismometers to image the geyser's plumbing, revealing a complex network of fractures and cavities extending to depths >140 m. The great depth and complexity of fractures are thought to play a critical role in its powerful eruptions. Holahan (2023) used infrasonic records to show that major eruptions often begin with a brief, intense water‐ejection phase, followed by a prolonged steam‐release phase that can last over 12 hr. Since its reactivation, the interval between Steamboat eruptions ranges from a few days to a few months, with intervals generally becoming longer over time. While there is no clear correlation between eruption duration and the time between events, there are seasonal variations in eruption intervals (Reed & Manga, 2023). 

Geyser eruption precursors have been extensively studied as a means of understanding the physical mechanisms governing eruptions (i.e., Ajayi & Ayers, 2021; Ardid et al., 2019; Eibl et al., 2021; Hurwitz et al., 2008; Ingebritsen & Rojstaczer, 1993; Karlstrom et al., 2013; Kedar et al., 1998; Kieffer, 1984; Munoz‐Saez, Manga et al., 2015; Munoz‐Saez, Namiki et al., 2015; Reed & Sohn, 2017; Reed & Manga, 2023; Sudibyo et al., 2022; Vandemeulebrouck et al., 2013). Analyses have also focussed on the dynamics of processes leading up to eruptions to better understand hazard. To discover eruption precursor phenomena, patterns that precede eruptions but are absent during other times are sought out. These may be analyzed via seismic signals, gas emissions, 

2 of 19 

ARDID ET AL. 

**JGR: Machine Learning and Computation** 

10.1029/2024JH000569 

**Figure 1.** (a) Steamboat Geyser is located in Yellowstone National Park in the state of Wyoming, USA. It is currently the tallest active geyser in the world, with water ejected to heights that can exceed 100 m. Eruption intervals vary between 3 days to over 50 years. (b) Major eruption, Steamboat Geyser, 2021/09/11 (Reed, 2021). 

subsurface temperature or pressure changes. For example, Ajayi and Ayers (2021) identified a decrease in the fluxes and δ<sup>13</sup> C of CH4 and CO2 roughly 10–25 min before an eruption of Steamboat geyser. For rapid, real‐time forecasting of eruptions, seismic analysis may be the most promising approach. For example, Sudibyo et al. (2022) used the permutation entropy (PE) of seismic data, which quantifies the complexity of a time series, to detect a recurring precursor signal 15 s before eruptions of Strokkur Geyser (Iceland). This approach outperformed traditional seismic amplitude methods in predicting eruptions. In another case, low‐frequency seismic tremor (or harmonic tremor) was found to increase in frequency and intensity before major eruptions at Old Faithful Geyser (Kedar et al., 1998). 

However, both recurrence and _differentiability_ are needed to establish reliable precursors. Differentiability refers to patterns that are detected before eruptions being relatively rare or absent during non‐eruptive periods (Ardid et al., 2022). Effective precursor tests involve using template matching techniques (Ardid et al., 2023; Cros et al., 2011; Kedar et al., 1996) and ML approaches (Dempsey et al., 2020, 2022; Sudibyo et al., 2022). 

In this study, we examine seismic data to identify possible eruption precursors at Steamboat Geyser, building upon and adapting methodologies developed for volcanic systems. We use approaches in seismic time series feature engineering, template matching (Ardid et al., 2024), and ML, such as those developed for phreatic eruptions at Whakaari volcano in New Zealand (Dempsey et al., 2020, 2022) and applied to multiple volcanoes using transfer learning (Ardid, Dempsey, et al., 2025) and template matching methods (Ardid et al., 2024). We trained a Random Forest model selected for its robustness in handling high‐dimensional feature sets and its interpretability in identifying key precursors. Then, isotonic regression was applied to convert the raw model consensus into well‐calibrated probability estimates, enhancing the stability and interpretability of the forecast outputs. To test these methodologies at Steamboat Geyser, we use a seismic data set spanning 31 eruptions during 2018 (see Figure S1 in Supporting Information S1). From this, we identify statistically significant patterns 

3 of 19 

ARDID ET AL. 

**JGR: Machine Learning and Computation** 

10.1029/2024JH000569 

**Table 1** 

_List of Acronyms Used in the Study_ 

|Acronym|Meaning|Acronym|Meaning|
|---|---|---|---|
|RSAM|Real‐time Seismic Amplitude Measurement (2–5 Hz)|ROC|Receiver Operating Characteristic|
|MF|Medium Frequency (4.5–8 Hz)|AUC|Area Under the Curve|
|HF|High Frequency (8–16 Hz)|TP|True Positive|
|DSAR|Displacement Seismic Amplitude Ratio|FN|False Negative|
|HHZ|Vertical Component of Seismic Ground Motion|FP|False Positive|
|IRIS|Incorporated Research Institutions for Seismology|TN|True Negative|
|KS Test|Kolmogorov‐Smirnov Test|EMA|Exponential Moving Average|
|FDR|False Discovery Rate|ML|Machine Learning|
|PE|Permutation entropy|AI|Artificial Intelligence|
|PVV|Positive Predictive Value|USA|United States of America|

preceding eruptions and link these to possible underlying processes that drive hydrothermal activity. We also use these patterns as a basis for understanding the predictability of Steamboat geyser eruptions. Finally, to produce smooth and calibrated probability estimates, we applied an isotonic regression approach, which ensures a monotonic relationship between raw model outputs and predicted probabilities, improving stability and interpretability. 

## **2. Methods** 

We examine seismic data from Steamboat Geyser in Yellowstone National Park, using data from a single seismic station (YNM, IRIS WY network) from March to December 2018. YNM is located 340 m from Steamboat. The station uses a Nanometrics Trillium instrument that samples at 100 Hz and has a long period corner frequency of 240 s. The data set encompasses 31 eruptions, recorded both seismically and in the GeyserTimes database (2024). Our main objective was to identify eruption precursors through the analysis of seismic time series and feature extraction. We used a variety of seismic data streams—RSAM, medium frequency (MF), high frequency, and displacement seismic amplitude ratio (DSAR) (see Table 1, which contains all acronyms used throughout the paper)—normalized to a log‐normal distribution, and calculated over a 1‐min interval, tailored to the rapid onset and short duration of geyser eruptions (contrasting to the 10‐min interval used in volcanic studies; Ardid et al., 2022; Dempsey et al., 2020). To increase the detection of subtle precursory signals, we apply time‐series feature engineering to resampled amplitude measurements, computed from the seismic data streams. Time series feature extraction was conducted over 24‐hr windows using 700 features generated with the “tsfresh” Python package (Christ et al., 2018). A detailed description of these methods is contained within the Supporting Information S1 (ST1, ST2; see Figures S1–S4 in Supporting Information S1). 

### **2.1. Template Matching** 

The aim of template matching is to identify a reference signal or pattern, “the template,” and to explore the optimal frequency band and window time‐length for detecting precursors in the feature time series. Template matching compares predefined signal patterns (“templates”) against the continuous time series data, enabling the detection of specific precursor signals before eruptions. Understanding the most informative data types and time scales is important for subsequent predictive modeling. 

Templates are here defined as a fixed‐length subset of a time series feature, with the template endpoint coinciding with an eruption event of the geyser. This approach enables the investigation of whether the template reflects a physical process (e.g., Ardid et al., 2022), or the state of the geyser preceding an eruption. Once a template has been defined, we assess how frequently it recurs and its similarity with the remaining feature time series, with particular interest in recurrence of the template before other eruptions. Given the expected natural variability in the underlying process or potential noise interference, any match between the template and the rest of the feature time series is at best approximate. A schematic overview of the template‐matching methodology is provided in the 

4 of 19 

ARDID ET AL. 

**JGR: Machine Learning and Computation** 

10.1029/2024JH000569 

Supplementary Information (Figure S5 in Supporting Information S1; see also a similar scheme in Ardid, Dempsey, et al., 2025). 

The basis of template matching lies in measuring the similarity between the template and other segments of the feature time series. We quantify similarity using the correlation coefficient, which provides a numerical evaluation of the resemblance between the shapes of two signals after their magnitudes have been standardized. An alternative approach could use dynamic time warping (Laperre et al., 2020; Li et al., 2020), which permits some deformation of the template signal along its time axis to seek improved matches. For a specific eruption template, and template length, we compute the time series from the cross‐correlation of the template across the feature time series. A correlation coefficient of 1 indicates a perfect match, which occurs only once in the time series when the template correlates with itself. A coefficient of 0 implies no correlation, while a value of − 1 signifies perfect anticorrelation. 

Template matching may yield poor outcomes in environments with a low signal‐to‐noise ratio (Ma et al., 2020). Hence, we attempt template matching for each of the distinct feature time series, as each feature calculation represents a potential mechanism to suppress noise and amplify signal. Another challenge lies in the uncertainty regarding the number and duration of precursors. Therefore, we have explored template lengths of 48‐, 24‐, 18‐, 12‐, 6‐, 3‐, 1.5‐hr windows before each eruption. For Steamboat, encompassing 31 eruptions, four data streams, 700 features per data stream, and seven template lengths, this entails testing approximately 600,000 templates. 

To determine the best templates, we evaluate all candidate templates on their ability to distinguish an upcoming eruption. We do this by conducting a _p_ ‐value analysis on the entire correlation coefficient time series (Ardid et al., 2024). Using a two‐sample Kolmogorov–Smirnov (KS) test, we assess whether correlation values preceding non‐template eruptions differed significantly from the background distribution. This provides a quantitative method of the differentiability of the template (Ardid et al., 2022). 

To manage the risk of false discovery when conducting a large number of statistical tests, we implemented a two‐ step feature selection process. First, we applied the Benjamini‐Yekutieli (BY) procedure, a statistical method that controls the false discovery rate (FDR) across tests by adjusting _p_ ‐values to account for multiple comparisons, especially when dependencies exist between features. This method is more conservative than the standard Benjamini‐Hochberg procedure and is appropriate for our potentially dependent time series features. We set the FDR threshold at 0.05, retaining only 30,000 features with adjusted _p_ ‐values below this level. From this subset, we selected the top 5% (∼4,500 features) based on their adjusted _p_ ‐values for further analysis. 

### **2.2. ML: Forecasting Steamboat Eruptions** 

To forecast eruptions at Steamboat Geyser, we train ML models on historical data to learn patterns and relationships that may indicate imminent eruptions. This ML pipeline has been successfully applied in both volcanic eruption forecasting (Dempsey et al., 2020) and wildfire forecasting (Ardid, Dempsey, et al., 2025; Ardid, Valencia, et al., 2025), demonstrating its versatility and effectiveness in geohazard prediction. A scheme of the ML pipeline used in this study can be found in the Figure S6 in Supporting Information S1; For similar and complementary schemes, see Dempsey et al. (2022), Ardid, Dempsey, et al. (2025), and Ardid, Valencia, et al. (2025). 

### **2.2.1. Input Data and Feature Selection** 

The input data to train our forecast model consists primarily of the feature time series computed from the seismic data streams. Time series feature engineering involves extracting meaningful patterns from seismic data, including statistical measures, autocorrelation features, and template matching scores, which serve as input features for the ML model. A ML classification problem is constructed that directs the algorithm to focus attention on signals occurring in the hours before the eruptive events. This is done by specifying a time‐series label vector whose value is “1” for windows 18‐hr before eruptions, denoting pre‐eruption, while all others are assigned “0”, denoting non‐eruptive. The choice of an 18‐hr window length was guided by template matching procedures, which identified this timeframe as optimal for capturing differentiable precursory signals. As shown in Figure S12 in Supporting Information S1, model performance is sensitive to the pre‐eruptive window length hyper‐ parameter, with peak performance occurring at window lengths between 18 and 36 hr. 

5 of 19 

ARDID ET AL. 

**JGR: Machine Learning and Computation** 

10.1029/2024JH000569 

To address the imbalance between pre‐eruptive and non‐eruptive periods in our data set (up to 1:400), we downsample the True Negative (TN) class by randomly discarding most of the non‐eruptive “0” windows, avoiding bias toward the majority class (following Dempsey et al., 2020). If this is not done, the resulting model is able to predict non‐eruptive periods with high confident but scores poorly on pre‐eruptive data. However, this does allow it to score highly on bulk measures of probabilistic performance, by forecasting a low probability of eruption at all times. While this happens to be true, it does not make for a useful forecasting system. 

Here, we randomly sample approximately 0.3% of non‐eruptive windows without replacement. This process is repeated 100 times to create an ensemble of 100 balanced data sets, each with a different sampling of the non‐ eruptive data, effectively producing 100 classifiers (decision trees). This approach helps mitigate potential biases introduced by the random selection process. 

### **2.2.2. Training and Testing Strategy** 

We used data from March 1 to 15 September 2018, for training, representing 75% of the seismic data set and covering 18 eruptions. The remaining 25%, from September 15 to 30 December 2018, including 13 eruptions, was reserved for testing. This approach simulates real‐world forecasting conditions where models are trained on historical data and differs from the leave‐one‐out method used in previous studies with sparse data sets, where each (volcanic) eruption is individually excluded from training (Ardid, Dempsey, et al., 2025). 

### **2.2.3. Model Training and Forecasting** 

Significant features were identified during training using the Mann‐Whitney U test. Then, a random forest classifier is constructed consisting of 100 decision trees. As shown in Figure S12 in Supporting Information S1, model performance improves with increasing classifiers (Ncl), with optimal results achieved when using at least 100 classifiers. This choice reflects a balance between model complexity and the risk of overfitting. 

Each tree is trained on a separate down sampled feature data set. When provided out‐of‐sample features, it generates a binary output, which is a prediction of whether or not an eruption will occur in the next 18‐hr. The average over all decision trees is referred to as the random forest model's consensus, with numbers closer to 1 indicating greater agreement amongst the individual trees that an eruption is imminent. Forecasts were constructed pseudo prospectively, using the withheld data to approximate real‐world forecasting conditions without access to future information for tuning (for a simple scheme on the ML workflow‐pipeline see Figure S6 in Supporting Information S1). 

### **2.2.4. Model Performance Evaluation** 

Forecast testing aims to determine overall accuracy, including false positive and false negative rates, and correlation between forecasted probabilities and actual outcomes over extended periods (Dempsey et al., 2022). Receiver Operator Curves (ROC) are used to evaluate the discriminability of classification models, providing insight into model performance across different thresholds over the whole record. The area under the ROC curve (AUC) serves as a metric for model performance evaluation, with a value of 1 indicating perfect performance (no false positives (FP) or false negatives (FN)). 

The construction of a ROC curve for the consensus time series (ML model output) involves: (a) Selecting a threshold (a value between 0 and 1) to compare the model consensus against; (b) scoring true positives (TP) or FN in windows of data that fall before eruptions, labeling each point “1” for TP or “0” for FN (we consider as true positive all values after the time that the threshold is exceeded, and as FN all values between the beginning of the pre‐eruptive window and the first trespass of the threshold—Figure 2); (c) Scoring FP when the model output surpasses the threshold outside the pre‐eruptive window; (d) scoring a TN otherwise (Figure 2); (e) Calculating the true positive rate (TPR) and false positive rate (FPR) as TPR = TP/(TP + FN) and FPR = FP/(FP + TN); (f) repeating steps (1–5) using 100 evenly spaced thresholds between 0 and 1 to construct the ROC curve, and finally, (g) computing AUC as the integral of the ROC curve. A higher AUC signifies a model that is good at anticipating eruptions while maintaining a relatively low FPR. 

### **2.3. Analysis Over Multiple Time Scales** 

Our methodology integrates four time scales, each playing a distinct role in the eruption forecasting process: 

6 of 19 

ARDID ET AL. 

**JGR: Machine Learning and Computation** 

10.1029/2024JH000569 

**Figure 2.** Performance evaluation of an eruption forecasting model for Steamboat Geyser. The graph illustrates how the consensus time series (gray line), which is the output of the eruption forecasting classifier model, can be used to quantify the model performance by setting a pre‐eruptive window (gray shaded area, representing an 18‐hr window) and an arbitrary threshold (dashed horizontal line). The colored areas represent: True Positives (TP, green): Model output exceeding the threshold within the pre‐eruptive window; False Negatives (FN, red): Model output below the threshold within the pre‐ eruptive window; False Positives (FP, beige): Model output exceeding the threshold outside the pre‐eruptive window, showing incorrectly forecasted eruptions; True Negatives (TN, blue): Model output below the threshold outside the pre‐ eruptive window, indicating correctly classified non‐eruptive periods. The vertical red dashed line marks the actual eruption time. The selection of the threshold value controls the number of TP, FP, FN, and TN. In this study, to avoid selecting arbitrary thresholds when evaluating model performance, 100 thresholds equally distributed between 0 and 1 are tested, each of which generates a point on the Receiver Operator Curves curve (Section 2.2.4). 

- Data Stream Creation (minute scale): We average the filtered seismic data over 1‐min intervals to create initial data streams. This step reduces data volume while preserving the ability to capture the rapid changes characteristic of geyser systems, focusing on signal intensity and specific frequency bands of interest. While this averaging maintains a high temporal resolution, it does smooth out very short impulsive events present in the raw signal. However, our primary objective is to detect broader patterns and trends rather than individual short‐duration spikes, which is why the 1‐min average is a suitable balance for our analysis. 

- Feature Calculation (day scale): We considered 24‐hr windows for calculating time series features, which serves to reduce noise and augment signal detection and strikes a balance between capturing meaningful patterns and maintaining sufficient temporal resolution. 

- Template Matching (hours to daily scale): Our feature template and cross‐correlation process operates on a scale spanning from 1.5 to 48 hr. This allows us to test for different length precursor signals and incorporate direct information and patterns from prior eruptions. 

- Pre‐eruptive Window (18‐hr scale): Our pre‐eruptive analysis focuses on an 18‐hr window prior to eruptions. This time frame was selected based on results from the template matching, offering a short‐term forecast window that is actionable for monitoring. 

By integrating these four‐time scales, our approach can be sensitive to both short‐term fluctuations and longer‐ term patterns in the seismic data. However, with a choice of four possible time scales, there are an impractically large number of combinations that could feasibly be selected. Although, we largely focus on measuring the effectiveness of the combination described above, we acknowledge that others may be more effective. However, we have nevertheless undertaken some sensitivity analysis to different choices, considering a 10‐min data stream interval, and searching templates for optimal time scales. 

### **2.4. Probabilistic Estimation Using Isotonic Regression** 

The consensus output of the model ranges between 0 and 1, but it is not a direct probability of eruption. To transform the model's raw output into a well‐calibrated probability estimate, we apply an isotonic regression approach, which produces a smooth probability distribution while maintaining a monotonic relationship with the model's raw scores. As a complementary tool, we also computed the Positive Predictive Value (PPV) to provide additional insight into the model's performance, showing an optimal threshold of 0.78 (Figure S11 in Supporting 

7 of 19 

ARDID ET AL. 

**JGR: Machine Learning and Computation** 

10.1029/2024JH000569 

**Figure 3.** Evaluation of the efficacy of template‐based methods through _p_ ‐value analyses of correlation coefficient time series. This analysis helps identify feature families that perform better in distinguishing pre‐eruptive data. For templates showing the 5% lowest _p_ ‐values, adjusted for false discovery rate, we further investigated which precursor time‐lengths (a) and data streams (b) exhibited the highest discriminability. Using an FDR‐adjusted 5th quantile highlights the most useful ones. The 18‐hr time window (a) provides the best discrimination of pre‐eruptive behavior, although windows between 6 and 24 hr are also useful. Additionally, there is variability in the relative importance of different data streams during the pre‐ eruptive period, with medium frequency and displacement seismic amplitude ratio featuring most frequently. 

Information S1). While PPV can offer valuable insights and serve as a complementary metric, it does not fulfill the need for a well‐calibrated, smooth probability estimate that is crucial for eruption forecasting. The isotonic regression approach adopted in our study is better suited for consistently and interpretably translating the model's raw scores into robust and reliable eruption probabilities. 

Isotonic regression is a non‐parametric method used to calibrate probability estimates while maintaining a monotonic relationship with the model's raw scores. This approach is particularly useful when the relationship between the forecast model's raw output and the true probability is non‐linear or unknown, as often seen in complex systems like geysers (Niculescu‐Mizil & Caruana, 2005). The method is important where the relationship between the forecast model's raw output and the true probability is non‐linear (or unknown), as might be expected for complex systems such as geysers. 

To improve forecast stability and accuracy, we apply time‐averaging to the results of the isotonic regression using an Exponential Moving Average (EMA), which smooths short‐term fluctuations by applying more weight to recent data points while still considering older values. This differs from the weighting scheme used by Dempsey et al. (2022), which was based on forecast time elapsed. EMA allows for quicker adaptation to recent seismic changes, making the model more responsive to rapid shifts in eruption precursors, while still filtering out transient noise. The resulting calibrated, time‐averaged probabilities can be used to estimate the likelihood of an eruption within any 18‐hr period. 

## **3. Results** 

### **3.1. Ranking Template Differentiability Using** **_p_ ‐Values** 

To assess the performance of the templates based on their differentiability (Ardid et al., 2022), we computed _p_ ‐ values for each correlation coefficient time series. This identified families of features with better performance in discriminating pre‐eruptive data, with features such as Fourier coefficients and autoregression coefficients frequently standing out. 

From the 5% of templates with the smallest _p_ ‐values, we examined which template time scales had the highest differentiability (Figure 3a). We found that the 18‐hr time window best discriminates pre‐eruptive behavior, although other time windows also performed relatively well in distinguishing pre‐eruptive signals, albeit with 

8 of 19 

ARDID ET AL. 

**JGR: Machine Learning and Computation** 

10.1029/2024JH000569 

**Figure 4.** The blue line shows the consensus values of the trained Machine Learning model over the test period (out‐of‐ sample). The orange line shows a rolling median of 0.75 days of the consensus values. The eruption times are marked by vertical dashed red lines. 

slightly lower differentiability. Performance was more substantially diminished at short (3 hr) and long (48 hr) time scales. 

Regarding data streams, both the MF (4.5–8 Hz) and DSAR streams appear particularly relevant in the pre‐ eruptive period, with the MF band showing the highest occurrence among significant templates (Figure 3b). This band aligns with the dominant frequency range of hydrothermal tremors observed in geyser systems, where seismic signals from tremor sources often fall within this frequency range, as documented in subsurface imaging studies at Old Faithful (Wu et al., 2017). The varied distributions of template data streams and time scales could be influenced by factors such as the varying fluid content driving each eruption (Hurwitz & Manga, 2017). 

### **3.2. Forecasting Steamboat Eruptions Using ML** 

Figure 4 illustrates the temporal evolution of the non‐probabilistic consensus for the testing data set alongside the occurrences of 13 eruptions that were not included in the model training. Throughout the testing period, the consensus predominantly maintains values around 0.4, with occasional spikes to higher values around 0.8. Notably, these peaks often occur within one to 2 days prior to eruptions. 

Figure 5 shows the temporal evolution of the out‐of‐sample consensus across a contiguous period of 12 eruptions in the out‐of‐sample test set. For a threshold of 0.6, the model's consensus exceeds this value during pre‐eruption periods in 8 out of 12 instances. Performance of the model across all possible thresholds is assessed via the ROC curve and associated AUC value (Figure 6). The ROC curve for the consensus model differs from a randomized model that has no predictive power (diagonal), achieving an AUC of 0.88, indicative of fair discriminative ability. Optimal model performance, balancing true and FP, is observed with a threshold of approximately the 0.6 described above. At higher consensus thresholds value, many eruptions are missed without an appreciable reduction of FP. We also calculated ROC curve for a model based on 10‐min data stream intervals, which yielded a slightly smaller AUC of 0.84. This suggests that sub‐10‐min information has some additional value in discriminating future geyser eruptions. 

For comparison, we also evaluated a model based on unmodified seismic amplitude data, which uses quantile thresholds applied to the data streams as a crude forecast. For example, an RSAM forecast consensus was created by converting the raw RSAM data calculated in this study for each volcano into equivalent percentile values. For instance, an RSAM value at the median corresponds to a forecast consensus of 0.5. Since this percentile evaluation relies on knowledge of future extreme values, it is not pseudo‐prospective. While this gives the RSAM model a slight informational advantage over the generalized ML forecasts, this is acceptable here, as it serves only as a reference case (Ardid, Dempsey, et al., 2025). Among the amplitude measurements used as input data, DSAR showed the best performance (AUC = 0.76), however none of these unmodified amplitude‐based models perform as well as the random forest model based on extracted time series features (Figure 6). This implies that time series feature engineering improves the predictive capability of such models, presumably by suppressing noise and accentuating the relevant signals. The additional complexity and nuance captured through feature engineering are thus useful for identifying patterns and precursors linked to eruptions. 

9 of 19 

ARDID ET AL. 

**JGR: Machine Learning and Computation** 

10.1029/2024JH000569 

**Figure 5.** Trained Machine Learning model around the out‐of‐sample eruptions. Titles indicate the event dates. A threshold of 0.6 is marked as a reference (horizontal dashed gray line). Thresholds higher than this misses more eruptions but decrease the number of false positives. Eruption on 09–24 has missing data. 

### **3.3. Sensitivity Analysis to Training‐Set Size** 

To further evaluate the robustness of our model, we conducted a “stress test” by systematically varying the number of eruptions included in the training set (Figure 7). Specifically, we incrementally increased the training set size from 1 to 20 eruptions recorded between January and September 2018, and for each of these training‐set sizes we randomly sampled five subsets from the available 21 eruptions. Each model was then tested on the same out‐of‐sample data set containing 10 eruptions from October to December 2018. Figure 7 shows the average area under the ROC curve (AUC) achieved across those five runs, along with error bars indicating the standard deviation. 

The results reveal two main trends: (a) The model can still learn meaningful patterns even with a very small number of eruptions in the training set, although performance is highly variable; and (b) the out‐of‐sample AUC notably improves as more eruptions are included, eventually plateauing around 9 training eruptions. These 

10 of 19 

ARDID ET AL. 

**JGR: Machine Learning and Computation** 

10.1029/2024JH000569 

**Figure 6.** Receiver Operator Curves (ROC) curves (Receiver Operating Characteristic) and AUC (Area Under the Curve) illustrating the performance of the Machine Learning (ML) consensus models (1 and 10 min data) and various seismic indicators over the analyzed period. The orange curve represents the ML consensus model using 1‐min data (AUC = 0.88), and the brown curve represents the ML consensus model using 10‐min data (AUC = 0.84). The blue, green, purple, and red curves represent RSAM (2– 5 Hz), medium frequency (4.5–8 Hz), high frequency (HF) (8–16 Hz), and displacement seismic amplitude ratio (∼MF/HF) models, respectively. The diagonal dashed line represents a reference model with zero predictive power. Each point on the ROC curves corresponds to a different classification threshold. The higher AUC of the consensus models, particularly the 1‐min data, indicates their superior discriminative ability compared to the other seismic indicators. As a reference, the location of the 0.6 threshold is shown (light gray). A colorblind‐friendly version of this figure is provided in Figure S9 in Supporting Information S1. 

findings underscore the importance of training‐set representativeness: while minimal data can still yield some skill, the stability and reliability of the forecasts become substantially more robust once at least 9 eruptions are included in the training set. Notably, the fact that even a single eruption ( _n_ = 1) can provide some degree of predictive power—albeit with high uncertainty—could be relevant for hydrothermal fields where there is only a single recorded eruption but an ongoing need to anticipate future hazards. 

### **3.4. Eruption Dynamics and Feature Interpretability** 

One advantage of using a random forest approach is that it enables insight into which features are most important for the model, and thus the possibility of connecting precursory signals to physical processes. Figure 8 illustrates several features identified as significant during the training phase and validated during the testing period (out‐of‐sample). Autocorrelation features derived from the MF data stream show discernible increases preceding eruption events. 

Persistent signals in seismic data, characterized by sustained high amplitudes or recurring patterns, are typically indicators of pre‐eruptive activity (Kedar et al., 1998). These signals, distinct from short, sporadic bursts of activity, suggest ongoing internal processes within the geyser system as it approaches a critical state. Rather than indicating a steady increase in pressure, these persistent signals may reflect dynamic changes within the system. For example, strong, consistent seismic activity observed in the hours before eruptions could signify the repeated collapse of gas bubbles or fluid oscillations between different sub‐reservoirs, building energy within the system. Rudolph and Sohn (2017) proposed that geysers with “bubble trap” configurations behave like damped harmonic oscillators, where persistent seismic signals emerge as the system reaches a critical state characterized by sustained internal oscillations. Similarly, Sudibyo et al. (2022) demonstrated that increasing complexity in seismic data, measured by PE, reflects the system's transition to a critical state at Strokkur Geyser. These findings suggest that the persistent variations in seismic signals observed before eruptions likely result from the system reaching a critical threshold where boiling conditions are optimal. 

Autocorrelation, which measures the relationship between current and past values in seismic data, is computed by analyzing how similar a time series is to itself at varying time lags. By comparing the values of a time series with its shifted version, autocorrelation reveals repeating patterns and underlying dependencies. In this case, repeating patterns were observed at lags of 7 or 3 min. However, further analysis of different lags would be necessary to determine whether these consistently offer the best performance in identifying precursors, and if they reflect a physical process. Repeating seismic signals on time scales of approximately half a minute have been linked to Strokkur Geyser's pre‐eruptive phase and have been used to characterize subsurface structures and their role in driving geothermal discharge (Eibl et al., 2021). 

The longest strike above the mean is another significant feature identified by our model, capturing the duration during which seismic activity remains consistently above average. Peaks in this feature prior to eruptions (Figure 8) could reflect extended episodes of pressure buildup or gas bubble accumulation (e.g., Kedar et al., 1996; Rudolph et al., 2012). For example, in one event, the MF values consistently remained above the mean for 2 hr leading up to the eruption, while another eruption exhibited a longest strike of 45 min. 

Similar features of tremor intensity and duration have been observed in other geyser systems, such as Lone Star Geyser in Yellowstone National Park. At Lone Star, elevated tremor prior to eruption typically occurs as brief preplay events lasting only a few minutes, driven by localized pressurization as water and steam accumulate in the shallow reservoir (Vandemeulebrouck et al., 2014). This short‐term buildup contrasts with the more prolonged elevated seismic signals observed at Steamboat Geyser, where the longest strike above the mean in our study 

11 of 19 

ARDID ET AL. 

**JGR: Machine Learning and Computation** 

10.1029/2024JH000569 

**Figure 7.** Model performance (AUC) as a function of the number of eruptions used for training, illustrating a “stress test” on training‐set size. Each point represents the average AUC across five randomized selections (drawn from 21 events), and the error bars denote standard deviations among those five runs. All models are evaluated on the same out‐of‐sample data (10 eruptions). Performance steadily increases and stabilizes above approximately 9 eruptions in the training set, indicating that a moderate number of well‐labeled eruptions is sufficient for robust out‐of‐sample generalization. 

likely reflects extended periods of internal activity, potentially due to gradual steam accumulation. In both systems, however, the transition to a critical state is marked by increased tremor, signaling the geyser's approach to eruption. 

Quantile changes, particularly at the 0.2 level, highlight the variability or volatility in seismic activity (e.g., see Ardid et al., 2024; Figure 6). While higher values of this feature could suggest periods of rapid energy release or fluid movement within the geyser conduit, this feature does not correlate as strongly with eruptions as other indicators in our analysis (Figure 8). Nevertheless, changes in volatility can still offer valuable insights, as they may signal shifts in underlying hydrothermal processes. Munoz‐Saez, Manga et al. (2015), and Munoz‐Saez, Namiki et al. (2015) demonstrated that geysers are highly sensitive to internal processes, such as pressure changes and fluid dynamics within the conduit, which lead to episodic discharges. Their study of a periodic geyser in the El Tatio field identified distinct stages of fluid movement and boiling that correspond to shifts in pressure and temperature, with episodic steam and liquid accumulations often manifesting as variability in seismic signals (Ardid et al., 2019). While increased quantile change values do not consistently precede eruptions in our data, tracking these changes may still provide insights into the timing of transitions in the geyser system, similar to how temperature and pressure measurements reflect shifts in internal conditions (Munoz‐Saez, Manga et al., 2015; Munoz‐Saez, Namiki et al., 2015). 

### **3.5. Probabilistic Forecasting Using Isotonic Regression** 

The application of isotonic regression provides calibrated eruption probabilities, with a peak likelihood of 12.6% within 18 hr prior to eruption. Time‐averaging these probabilities using an EMA offers a smoother forecast, reducing the effect of short‐term fluctuations in the model's output. For several eruptions, such as those on October 15, October 31, and November 15, the time‐averaged probabilities show a clear rise before each event (Figure 9), indicating the model's ability to capture precursory signals. However, in other cases, like the eruption on November 21, both the calibrated and time‐averaged probabilities remained low, highlighting the inherent variability in hydrothermal systems like Steamboat Geyser where data‐driven approaches, while potentially useful, are not infallible. 

## **4. Discussion** 

### **4.1. Time Scales of Eruption Precursors: Geysers and Volcanoes** 

The time scales associated with geyser eruption precursors (intervals over which key features show distinct peaks before an eruption) appeared to show relatively little variation. This consistency implies that the timing of these precursor signals, such as strong autocorrelation in seismic data, does not fluctuate significantly in response to changes in environmental conditions or internal geyser dynamics. Such insensitivity suggests that some geyser systems may operate under a more stable set of conditions, with precursor signals like strong autocorrelation emerging consistently and largely unaffected by external factors like atmospheric conditions or internal variability within the geyser. However, it's important to note that this conclusion is based primarily on seismic data analysis of 1 year of data, without integrating environmental data streams such as temperature, atmospheric pressure, or precipitation. It remains possible that these external factors could have an influence on eruption timing and precursor signals. Expanding the period of the analysis and incorporating such environmental variables in future studies could help assess their potential impact on geyser systems and forecasting capabilities. 

In comparison, volcanic systems exhibit a broader spectrum of precursor time scales, often linked to the size and explosivity of the eruption. Larger and more explosive events tend to have longer build‐up periods with significant precursory signals, including seismic activity, ground deformation, and gas emissions (Kent et al., 2023; Sparks, 2003). The shorter, more consistent time scales observed in geysers suggests that different monitoring strategies may be better suited to each system (Rouwet, Constantinescu et al., 2014; Rouwet, Sandri et al., 2014). Geysers are influenced by a narrower range of internal and external factors, primarily driven by geothermal 

12 of 19 

ARDID ET AL. 

**JGR: Machine Learning and Computation** 

10.1029/2024JH000569 

**Figure 8.** Time series of five key features derived from the medium frequency seismic data over the test period (out‐of‐sample), spanning from September 2018 to December 2018. These features were identified as significant during model training based on their importance weights in the random forest classifier, demonstrating some explainable AI (xAI) aspect of our approach. From top to bottom: Autocorrelation at lag 7, Longest strike above mean, Median of aggregated autocorrelation, Autocorrelation at lag 3, Change in quantiles (0–0.2). Each subplot shows the evolution of a specific feature over time. Vertical dashed red lines indicate eruption times. Note the varying scales on the _y_ ‐axes, reflecting the different units and ranges of each feature. The plots reveal discernible increases and peaks in autocorrelation features preceding many eruption events, highlighting their potential as eruption precursors. These features, among numerous others, contribute to the model's forecasting capability, even with out‐of‐sample data. Data gaps are present around the first and last eruptions, potentially limiting pre‐eruptive information for these events. 

processes within a confined plumbing system, sometimes resulting in more regular and predictable eruption cycles. This allows for frequent, repeated data collection and testing (Hurwitz, Manga, et al., 2021). However, the wider insights gained from volcanic systems—such as forecasting techniques and template matching used to detect precursor signals over longer time scales—may be of use to the regime of geysers, especially where wider tectonic or other magmatic factors may come into play (Manga & Brodsky, 2006). 

By focusing on the time scales identified in both geyser and volcanic studies, we can refine our understanding of the temporal evolution of eruption precursors. This is important for developing effective monitoring and timely warnings, better planning for evacuations, and quicker response times (Newhall et al., 2017). 

13 of 19 

ARDID ET AL. 

**JGR: Machine Learning and Computation** 

10.1029/2024JH000569 

**Figure 9.** Time‐averaged calibrated probabilities and consensus scores for selected eruptions in October and November 2018. Each subplot represents a different eruption event, with the _x_ ‐axis showing the time in days. The left _y_ ‐axis displays the consensus score, while the right _y_ ‐axis shows the time‐averaged calibrated probability. Vertical dashed red lines mark the eruption times. The calibrated probabilities, derived using isotonic regression, offer a probabilistic estimate of eruption likelihood within the next 18 hr. These time‐averaged probabilities often peak prior to eruptions, providing a clearer measure of eruption risk compared to raw consensus scores. The simple probabilities (gray) are based on a static model that uses historical Time Between Eruptions to estimate eruption likelihood, providing a fixed probability of 8.1% by dividing the 18‐hr prediction window by the average eruption interval. This serves as a constant baseline for comparing the dynamic probabilities. 

While our study demonstrates the effectiveness of the proposed methodology at Steamboat Geyser, its transferability to other volcanic scenarios holds significant promise but also presents challenges. The data‐driven approach, particularly the use of time series feature engineering, template matching, and ML, could be adapted to monitor phreatic and hydrothermal systems at volcanoes like Whakaari (New Zealand), Copahue (Chile), and Ruapehu (New Zealand), where fluid‐driven processes dominate. Previous studies have already explored elements of this approach in volcanic systems, such as the use of isotonic regression models (Dempsey et al., 2022) compared against probabilistic inter‐event models (Deligne et al., 2010) to forecast eruption likelihoods. However, these studies underscore a key limitation: the requirement for sufficient high‐quality data to ensure robust model calibration, which remains a challenge, particularly for rare or poorly monitored eruptions. Additionally, while multi‐parameter data integration, including gas emissions and ground deformation, has shown potential to enhance predictive performance (Reath et al., 2021), there remains significant work to be done in operationalizing these approaches for magmatic systems with diverse eruption styles and complex precursor signals. Future studies could explore hybrid models that combine isotonic regression with probabilistic inter‐ event models, leveraging multi‐parameter data to broaden the applicability of this approach to a wider range 

14 of 19 

ARDID ET AL. 

**JGR: Machine Learning and Computation** 

10.1029/2024JH000569 

of volcanic systems and contribute to safer and more effective hazard management in dynamic geological environments. 

### **4.2. Implications for Tourism Activities and Workplace Safety** 

The forecasting tool and template matching approach developed in our study offers real‐time monitoring capabilities for geyser systems, that may help to improve visitor safety in geothermal regions hosting geysers that are frequently visited by tourists (Hurwitz & Manga, 2017). 

A consideration is that the seismometer used in this study is located approximately 340 m from Steamboat Geyser, in an area with numerous other geothermal features. While there is potential for interference from these other features, our results show that precursory signals can be detected at this distance. However, a seismometer positioned closer to Steamboat could potentially improve the reliability of detecting these signals by reducing background noise and increasing the accuracy of eruption forecasts. 

Our forecasting model shows the ability to anticipate geyser eruptions hours in advance, which is useful during peak visitation periods, allowing for improved tourism management. For example, by predicting an eruption with a certain degree of accuracy, park authorities can allocate resources more efficiently, manage visitor flow, and ensure safety by restricting access to vulnerable areas during imminent eruptions (Erfurt‐Cooper, 2018). 

A future challenge is to apply the knowledge from forecasting unrest at geysers into improving the safety around energy‐producing geothermal systems in volcanic areas, particularly those with surface spring features connected to high temperature hydrothermal aquifers, such as Rotokawa, Ngatamariki, Tauhara and Wairakei in New Zealand (Browne & Lawless, 2001; Montanaro et al., 2024). These are larger, more complex and generally more stable features, but also have human‐induced perturbations, such as fluid injection and extraction that increase hazard. Microseismicity is linked to fluid injection in geothermal fields, including Rotokawa and Hellisheidi (Iceland), where pressure build‐up on critically stressed faults triggers seismic activity (Kivi et al., 2023; Yu et al., 2023). During injection well stimulation at the Ngatamariki geothermal field, there was an observed disconnect between seismic activity and well permeability, indicating complexity in accurately predicting seismic responses (Hopp et al., 2019). Additionally, understanding fault dynamics is critical in regions like New Zealand's Taupō Volcanic Zone, where geothermal operations might intersect tectonically active areas (Ardid et al., 2021). 

Applicable lessons learned from geyser systems include the identification of early seismic or pressure‐related precursor signals—such as autocorrelation or prolonged periods of elevated seismic activity. These could help detect signs of wellbore instability or pressure buildup, similar to the microseismicity observed during fluid injection operations (Yu et al., 2023). By using these techniques, operators might find opportunities to intervene to mitigate risks associated with hydrothermal eruptions, thereby improving both the safety and efficiency of geothermal energy production. 

In addition to wellbore instability, geothermal fields are also at risk from explosive events triggered by sudden releases of steam and hot water from underground reservoirs (Montanaro et al., 2024). These events pose significant threats to the geothermal industry (Bromley & Mongillo, 1994). The Rotokawa geothermal field in New Zealand, and the 2024 hydrothermal explosion in Biscuit Basin, Yellowstone National Park, provide examples of such incidents, highlighting the need for effective monitoring. While hydrothermal eruptions share similarities with geyser eruptions, they differ in scale, frequency, and triggering mechanisms (Manga & Brodsky, 2006). There are very few examples of these events recorded seismically, so direct machine‐learning approaches for forecasting are not currently feasible. Nonetheless, the framework developed in this study for identifying the type and timescale of critical precursors may help to develop monitoring tools for geothermal systems. Continued study of geyser and volcanic systems may yield insights applicable to forecasting and mitigating hazards in geothermal energy production (Barbier, 2002; Zoback, 2007). 

### **4.3. Probabilistic Approaches for Eruption Forecasting** 

In addition to our approach, various inter‐event models that rely solely on the historical TBE can be used to estimate eruption probabilities, each producing distinct forecasts as eruptions approach. A straightforward static TBE‐based model, for instance, provides a fixed probability of 8.1%, calculated by dividing an 18‐hr prediction window by the average eruption interval from the eruption record. This offers a constant baseline probability of an 

15 of 19 

ARDID ET AL. 

**JGR: Machine Learning and Computation** 

10.1029/2024JH000569 

**Figure 10.** Time series centered around one eruption on 31 October 2018, showing consensus scores (blue) as indicators of eruption likelihood, with isotonic probabilities derived from consensus (purple) and dynamic Fréchet probabilities based on Time Between Eruptions (green). A static probability (gray) serves as a baseline estimation, while vertical red dashed lines mark eruption events. The second right _y_ ‐axes represent Fréchet probabilities, and the first _y_ ‐axes display isotonic time‐averaged probabilities, with the legend indicating each measure. 

eruption in any 18‐hr time window. It incorporates no knowledge of when the last eruption occurred and is not intended to be used for forecasting. 

Alternatively, a more dynamic inter‐event model can be obtained by fitting a Fréchet distribution to the TBE data (e.g., Figure S7 in Supporting Information S1), allowing the eruption probability to adjust continuously with the time elapsed since the last eruption (Reed et al., 2024). In contrast to a Poisson model—which assumes a constant mean rate and no memory—the Fréchet distribution captures how the likelihood of an eruption varies over time, initially increasing to a peak at a characteristic TBE and then decreasing. This flexible hazard rate makes the Fréchet model more appropriate for Steamboat Geyser's irregular, time‐dependent eruptions. As time passes from the previous eruption, this model gradually increases the probability of an impending eruption, reaching 18% at the peak of the Fréchet distribution, and subsequently decreasing (e.g., Figure 10). This is the only approach that uses the time since the last eruption, and since the studied period includes quite regular eruption intervals, this approach works well. For example, the eruption on 31 October 2018, is detected at a probability level close to 10%, which aligns with the regular intervals observed during this period. 

However, this model is highly sensitivity to deviations from average intervals. For instance, the eruption in mid‐October is detected at a lower probability level of around 4% (Figure 10). If the eruption intervals were more irregular, such as in periods after 2021 (Reed et al., 2024), this model's predictive power would likely diminish. In such cases, a ML model that adapts to real‐time data inputs would add significant value, capturing shifts in eruption patterns that a static inter‐event model may miss. 

In comparison, the ML model focuses on short‐term changes within the 18‐hr window before an eruption and dynamically adjusts the probability based on precursory signals, reaching levels of up to 12% probability before some eruptions, but with a baseline of 7% (Figure 10). However, the ML model may be sensing rapid changes in recharge or pressure buildup, effectively capturing real‐time dynamics, and differs fundamentally from TBE‐ based models by not having “memory” of past intervals. This behavior is further highlighted by a distinct threshold effect observed in the calibrated probability, where the probability of eruption significantly increases around a consensus score of 0.6 (Figure S10 in Supporting Information S1). This sharp transition suggests that the model identifies a critical tipping point in the consensus, above which the likelihood of eruption rises steeply. 

While both the ML and inter‐event models produce similar probability magnitudes, their underlying data sets differ substantially. The ML model's responsiveness to short‐term precursors gives it an advantage in real‐time monitoring, capturing dynamics that inter‐event models miss. On the other hand, inter‐event models provide robust probability estimates when eruption patterns are well‐established, making them suitable for geysers with regular cycles. However, they are less reliable for systems lacking clear cycles or no historical eruption data, such as many volcanoes, even though several approaches have been proposed for volcanic systems (e.g., Bebbington, 2014). 

## **5. Conclusions** 

This study analyzes eruption precursors at Steamboat Geyser, Yellowstone National Park, using time series analysis and ML. By examining seismic data from March to December 2018, covering 31 eruptions, we identified key patterns preceding eruptions. Specifically, increases in seismic features such as autocorrelation, longest strike above the mean, and quantile changes in the frequency range of 4.5–16 Hz were associated with pre‐eruption windows, with an optimal forecasting window of around 18 hr and observable signals within a broader 6– 24 hr range. These findings inform operational decision‐making in geyser monitoring and potentially broader geothermal systems. 

Our ML model, based on a random forest classifier, effectively distinguished eruption precursors for out‐of‐ sample events, achieving an AUC of 0.88 and outperforming a simpler amplitude‐based model (AUC 0.71). 

16 of 19 

ARDID ET AL. 

**JGR: Machine Learning and Computation** 

10.1029/2024JH000569 

To calibrate probability predictions, we applied isotonic regression, which produced reliable eruption forecasts, with probabilities peaking around 12% within the 18‐hr pre‐eruption window. This approach captures short‐term geophysical signals, making real‐time monitoring viable in environments like Yellowstone to support visitor safety and resource management. Comparatively, a static interevent model, based on the average TBE, provides a constant probability of around 8% for an eruption to occur within any 18‐hr period. The Fréchet‐based model offers variable probabilities based on the elapsed time since the last eruption, while the isotonic regression model identifies real‐time changes, raising probabilities to 12% and thus enhancing forecasting capabilities beyond regular intervals alone. 

In conclusion, this study combines time series analysis with ML to reveal patterns in geophysical data and applies isotonic regression for probabilistic forecasting in real‐time monitoring. The proposed methodology not only improves eruption forecasting at Steamboat Geyser but also contributes broadly to the ML community by demonstrating effective model architecture design, feature engineering strategies, and practical insights into hyper‐parameter tuning. These methodological innovations can be adapted to enhance predictive performance in other geothermal and volcanic systems. These results are relevant to volcanology, geothermal energy, conservation, tourism management, and hazard mitigation, highlighting the potential of AI techniques to improve forecasting in complex natural systems. 

## **Data Availability Statement** 

The seismic dataset (waveform) used in this study is accessible through the FDSN web service (https://www.fdsn. org/networks/). If you utilize the provided seismic data, please cite this article accordingly. Additionally, the amplitude measurements sampled every 10 min are included in the Supporting Information S1. The data, software, and code used in this study are openly available on GitHub at https://github.com/aardid/steamboat_jgr_ml. git and have been archived on Zenodo for long‐term accessibility (Ardid, 2025). The Python library _puia_ designed for forecasting volcanic activity is included in the repository. The code is licensed under the MIT License, allowing free use, modification, and distribution, provided the original license and copyright notice are included. However, any third‐party commercial use is prohibited, and users must adhere to the non‐commercial nature of the datasets and materials provided. While the software has been thoroughly tested, minor bugs or inaccuracies may still exist. Users are encouraged to report any issues to the corresponding author. Please note that the software is not designed as an API for creating eruption forecast models and may not be beginner‐friendly for those new to Python or Machine Learning. Nevertheless, we encourage adaptations for other use cases and are open to providing guidance where possible. 

#### **Acknowledgments** 

This research was supported by the New Zealand Ministry of Business, Innovation, and Employment (MBIE) through Grants UOAX1913 (Transitioning Taranaki to a Volcanic Future) and UOAX2213 (Adapting to Climate Change through Stronger Geothermal Enterprises). Additional support was provided by the Miller Institute, NSF EAR2116573, and CIFAR Earth4D. We thank all collaborators and contributors who supported this research. Open access publishing facilitated by University of Canterbury, as part of the Wiley ‐ University of Canterbury agreement via the Council of Australian University Librarians. 

## **References** 

Ajayi, M., & Ayers, J. C. (2021). CH4 and CO2 diffuse gas emissions before, during and after a steamboat geyser eruption. _Journal of Volcanology and Geothermal Research_ , _414_ , 107233. https://doi.org/10.1016/j.jvolgeores.2021.107233 

Allen, E. T. (1935). Geyser basins and igneous emanations. _Economic Geology_ , _30_ (1), 1–13. https://doi.org/10.2113/gsecongeo.30.1.1 Ardid, A. (2025). aardid/steamboat_jgr_ml: Steamboat Geyser Eruption Forecasting Model (steamboat_jgr_ml). _Zenodo_ . https://doi.org/10.5281/ zenodo.14991465 

Ardid, A., Archer, R., Bertrand, E., Sepulveda, F., Tarits, P., & Dempsey, D. (2021). Heat transfer through the Wairakei‐Tauhara geothermal system quantified by multi‐channel data modeling. _Geophysical Research Letters_ , _48_ (8), e2020GL092056. https://doi.org/10.1029/ 2020gl092056 

Ardid, A., Dempsey, D., Caudron, C., & Cronin, S. (2022). Seismic precursors to the Whakaari 2019 phreatic eruption are transferable to other eruptions and volcanoes. _Nature Communications_ , _13_ (1), 1–9. https://doi.org/10.1038/s41467‐022‐29681‐y 

Ardid, A., Dempsey, D., Caudron, C., Cronin, S., Kennedy, B., Girona, T., et al. (2025). Ergodic seismic precursors and transfer learning for short 

term eruption forecasting at data scarce volcanoes. _Nature Communications_ , _16_ (1), 1758. https://doi.org/10.1038/s41467‐025‐56689‐x 

Ardid, A., Dempsey, D., Caudron, C., Cronin, S. J., Miller, C. A., Melchor, I., et al. (2023). Using template matching to detect hidden fluid release episodes beneath crater lakes in Ruapehu, Copahue, and Kawah Ijen Volcanoes. _Journal of Geophysical Research: Solid Earth_ , _128_ (10), e2023JB026729. https://doi.org/10.1029/2023jb026729 

Ardid, A., Dempsey, D., Corry, J., Garrett, O., Lamb, O. D., & Cronin, S. (2024). Multitimescale template matching: Discovering eruption precursors across diverse volcanic settings. _Seismological Research Letters_ , _XX_ (5), 1–11. https://doi.org/10.1785/0220240012 

Ardid, A., Valencia, A., Power, A., Boer, M. M., Katurji, M., Gross, S., & Dempsey, D. (2025). Sub‐hourly forecasting of fire potential using 

machine learning on time series of surface weather variables. _International Journal of Wildland Fire_ , _34_ (1). https://doi.org/10.1071/wf24113 Ardid, A., Vera, E., Kelly, C., Manga, M., Munoz‐Saez, C., Maksymowicz, A., & Ortega‐Culaciati, F. (2019). Geometry of geyser plumbing 

inferred from ground deformation. _Journal of Geophysical Research: Solid Earth_ , _124_ (1), 1072–1083. https://doi.org/10.1029/2018jb016454 Barbier, E. (2002). Geothermal energy technology and current status: An overview. _Renewable and Sustainable Energy Reviews_ , _6_ (1–2), 3–65. https://doi.org/10.1016/s1364‐0321(02)00002‐3 

Bebbington, M. S. (2014). Long‐term forecasting of volcanic explosivity. _Geophysical Journal International_ , _197_ (3), 1500–1515. https://doi.org/ 10.1093/gji/ggu078 

17 of 19 

ARDID ET AL. 

**JGR: Machine Learning and Computation** 

10.1029/2024JH000569 

Belousov, A., Belousova, M., & Nechayev, A. (2013). Video observations inside conduits of erupting geysers in Kamchatka, Russia, and their geological framework: Implications for the geyser mechanism. _Geology_ , _41_ (4), 387–390. https://doi.org/10.1130/g33366.1 

Bromley, C. J., & Mongillo, M. A. (1994). Hydrothermal eruptions ‐ a hazard assessment. In _Proceedings 16th New Zealand geothermal workshop_ (pp. 45–50). Browne, P. R. L., & Lawless, J. V. (2001). Characteristics of hydrothermal eruptions, with examples from New Zealand and elsewhere. _Earth‐ Science Reviews_ , _52_ (4), 299–331. https://doi.org/10.1016/S0012‐8252(00)00030‐1 Bryan, T. S. (2018). _The geysers of Yellowstone_ . University Press of Colorado. 

Christ, M., Braun, N., Neuffer, J., & Kempa‐Liehr, A. W. (2018). Time series feature extraction on basis of scalable hypothesis tests (tsfresh–a Python package). _Neurocomputing_ , _307_ , 72–77. https://doi.org/10.1016/j.neucom.2018.03.067 

Cros, E., Roux, P., Vandemeulebrouck, J., & Kedar, S. (2011). Locating hydrothermal acoustic sources at old faithful geyser using matched field processing. _Geophysical Journal International_ , _187_ (1), 385–393. https://doi.org/10.1111/j.1365‐246x.2011.05147.x 

Deligne, N. I., Coles, S. G., & Sparks, R. S. J. (2010). Recurrence rates of large explosive volcanic eruptions. _Journal of Geophysical Research_ , _115_ (B6). https://doi.org/10.1029/2009jb006554 

Dempsey, D. E., Cronin, S. J., Mei, S., & Kempa‐Liehr, A. W. (2020). Automatic precursor recognition and real‐time forecasting of sudden explosive volcanic eruptions at Whakaari, New Zealand. _Nature Communications_ , _11_ (1), 3562. https://doi.org/10.1038/s41467‐020‐17375‐2 Dempsey, D. E., Kempa‐Liehr, A. W., Ardid, A., Li, A., Orenia, S., Singh, J., et al. (2022). Evaluation of short‐term probabilistic eruption forecasting at Whakaari, New Zealand. _Bulletin of Volcanology_ , _84_ (10), 1–26. https://doi.org/10.1007/s00445‐022‐01600‐5 Eibl, E. P., Hainzl, S., Vesely, N. I., Walter, T. R., Jousset, P., Hersir, G. P., & Dahm, T. (2021). Eruption interval monitoring at Strokkur Geyser, Iceland. _Geophysical Research Letters_ , _47_ (1), e2019GL085266. https://doi.org/10.1029/2019gl085266 

Erfurt‐Cooper, P. (2018). Active hydrothermal features as tourist attractions. In P. Erfurt‐Cooper (Ed.), _Volcanic and geothermal tourism: Sustainable geo‐resources for leisure and recreation_ (pp. 85–105). Routledge. 

Holahan, M. (2023). _Picking up steam: A year long infrasonic record of Steamboat Geyser. Minor and major paroxysms of the multi‐phase eruptions at Steamboat Geyser, Yellowstone National Park Doctoral dissertation_ , Boise State University. Hopp, C., Sewell, S., Mroczek, S., Savage, M., & Townend, J. (2019). Seismic response to injection well stimulation in a high‐temperature, high‐ permeability reservoir. _Geochemistry, Geophysics, Geosystems_ , _20_ (6), 2848–2871. https://doi.org/10.1029/2019gc008243 

Hurwitz, S., King, J. C., Pederson, G. T., Martin, J. T., Damby, D. E., Manga, M., & Murphy, F. (2021). Yellowstone's old faithful geyser shut down by a severe thirteenth century drought. _Geophysical Research Letters_ , _48_ (3), e2020GL091908. https://doi.org/10.1029/2020GL089871 Hurwitz, S., King, J. C., Pederson, G. T., Reed, M. H., Harrison, L. N., Hungerford, J. D., et al. (2023). The relation between decadal droughts and eruptions of Steamboat Geyser in Yellowstone National Park, USA. _Geochemistry, Geophysics, Geosystems_ , _24_ (7), e2023GC010988. https:// doi.org/10.1029/2023gc010988 Hurwitz, S., Kumar, A., Taylor, R., & Heasler, H. (2008). Climate‐induced variations of geyser periodicity in Yellowstone National Park, USA. _Geology_ , _36_ (6), 451–454. https://doi.org/10.1130/g24723a.1 Hurwitz, S., & Lowenstern, J. B. (2014). Dynamics of the Yellowstone hydrothermal system. _Reviews of Geophysics_ , _52_ (3), 375–411. https://doi. org/10.1002/2014rg000452 Hurwitz, S., & Manga, M. (2017). The fascinating and complex dynamics of geyser eruptions. _Annual Review of Earth and Planetary Sciences_ , _45_ (1), 31–59. https://doi.org/10.1146/annurev‐earth‐063016‐015605 Hurwitz, S., Manga, M., Campbell, K., & Eibl, E. (2021). Why study geysers? _Eos_ , _102_ . https://doi.org/10.1029/2021eo161365 Ingebritsen, S. E., & Rojstaczer, S. A. (1993). Controls on geyser periodicity. _Science_ , _262_ (5135), 889–892. https://doi.org/10.1126/science.262. 5135.889 Ingebritsen, S. E., & Rojstaczer, S. A. (1996). Geyser periodicity and the response of geysers to deformation. _Journal of Geophysical Research_ , _101_ (B10), 21891–21905. https://doi.org/10.1029/96jb02285 

Karlstrom, L., Hurwitz, S., Sohn, R., Vandemeulebrouck, J., Murphy, F., Rudolph, M. L., et al. (2013). Eruptions at lone Star Geyser, Yellowstone National Park, USA: 1. Energetics and eruption dynamics. _Journal of Geophysical Research: Solid Earth_ , _118_ (8), 4048–4062. https://doi.org/ 10.1002/jgrb.50251 Kedar, S., Kanamori, H., & Sturtevant, B. (1998). Bubble collapse as the source of tremor at Old Faithful Geyser. _Journal of Geophysical Research_ , _103_ (B10), 24283–24299. https://doi.org/10.1029/98jb01824 

Kedar, S., Sturtevant, B., & Kanamori, H. (1996). The origin of harmonic tremor at Old Faithful geyser. _Nature_ , _379_ (6567), 708–711. https://doi. org/10.1038/379708a0 

Kent, A. J., Till, C. B., & Cooper, K. M. (2023). Start me up: The relationship between volcanic eruption characteristics and eruption initiation mechanisms. _Volcanica_ , _6_ (2), 161–172. https://doi.org/10.30909/vol.06.02.161172 

Kieffer, S. W. (1984). Seismicity at Old Faithful Geyser: An isolated source of geothermal noise and possible analogue of volcanic seismicity. _Journal of Volcanology and Geothermal Research_ , _22_ (1–2), 59–95. https://doi.org/10.1016/0377‐0273(84)90035‐0 

Kivi, I. R., Boyet, A., Wu, H., Walter, L., Hanson‐Hedgecock, S., Parisio, F., & Vilarrasa, V. (2023). Global physics‐based database of injection‐ induced seismicity. _Earth System Science Data_ , _15_ (7), 3163–3182. https://doi.org/10.5194/essd‐15‐3163‐2023 

Laperre, B., Amaya, J., & Lapenta, G. (2020). Dynamic time warping as a new evaluation for dst forecast with machine learning. _Frontiers in Astronomy and Space Sciences_ , _7_ , 39. https://doi.org/10.3389/fspas.2020.00039 

Leduc, R., Bertrand, C. H., Lubbers, N., Barros, K., Humphreys, C. J., & Johnson, P. A. (2017). Machine learning predicts laboratory earthquakes. _Geophysical Research Letters_ , _44_ (18), 9276–9282. https://doi.org/10.1002/2017gl074677 

Leon, A. S., Elayeb, I. S., & Tang, Y. (2019). An experimental study on violent geysers in vertical pipes. _Journal of Hydraulic Research_ , _57_ (3), 283–294. https://doi.org/10.1080/00221686.2018.1494052 

Li, H., Liu, J., Yang, Z., Liu, R. W., Wu, K., & Wan, Y. (2020). Adaptively constrained dynamic time warping for time series classification and clustering. _Information Sciences_ , _534_ , 97–116. https://doi.org/10.1016/j.ins.2020.04.009 

Liu, J., Qian, Y., Zhu, D. Z., Zhang, J., Edwini‐Bonsu, S., & Zhou, F. (2022). Numerical study on the mechanisms of storm geysers in a vertical riser‐chamber system. _Journal of Hydraulic Research_ , _60_ (2), 341–356. https://doi.org/10.1080/00221686.2021.2001589 

Ma, H., Chu, R., Sheng, M., & Yu, Z. (2020). Template matching for simple waveforms with low signal‐to‐noise ratio and its application to icequake detection. _Earthquake Science_ , _33_ (5–6), 256–263. https://doi.org/10.29382/eqs‐2020‐0256‐01 

Manga, M., & Brodsky, E. (2006). Seismic triggering of eruptions in the far field: Volcanoes and Geysers. _Annual Review of Earth and Planetary Sciences_ , _34_ (1), 263–291. https://doi.org/10.1146/annurev.earth.34.031405.125125 Manley, G. F., Mather, T. A., Pyle, D. M., Clifton, D. A., Rodgers, M., Thompson, G., & Roman, D. C. (2021). Machine learning approaches to identifying changes in eruptive state using multi‐parameter datasets from the 2006 eruption of Augustine Volcano, Alaska. _Journal of Geophysical Research: Solid Earth_ , _126_ (12), e2021JB022323. https://doi.org/10.1029/2021jb022323 

18 of 19 

ARDID ET AL. 

**JGR: Machine Learning and Computation** 

10.1029/2024JH000569 

Montanaro, C., Cronin, S. J., Lerner, G. A., Simpson, M. P., Brooks‐Clarke, I., Swanney, G., et al. (2024). Natural processes leading to large, pre‐ historic hydrothermal eruptions in geothermal areas: Rotokawa geothermal field, New Zealand. _GSA Bulletin_ , _136_ . https://doi.org/10.1130/ B36509.1 

Munoz‐Saez, C., Manga, M., Hurwitz, S., Rudolph, M. L., Namiki, A., & Wang, C. Y. (2015). Dynamics within geyser conduits, and sensitivity to environmental perturbations: Insights from a periodic geyser in the El Tatio geyser field, Atacama Desert, Chile. _Journal of Volcanology and Geothermal Research_ , _292_ , 41–55. https://doi.org/10.1016/j.jvolgeores.2015.01.002 

Munoz‐Saez, C., Namiki, A., & Manga, M. (2015). Geyser eruption intervals and interactions: Examples from El Tatio, Atacama, Chile. _Journal of Geophysical Research: Solid Earth_ , _120_ (11), 7490–7507. https://doi.org/10.1002/2015jb012364 

Namiki, A., Muñoz‐Saez, C., & Manga, M. (2014). El Cobreloa: A geyser with two distinct eruption styles. _Journal of Geophysical Research: Solid Earth_ , _119_ (8), 6229–6248. https://doi.org/10.1002/2014jb011009 

Nayak, A., Manga, M., Hurwitz, S., Namiki, A., & Dawson, P. B. (2020). Origin and properties of hydrothermal tremor at lone star geyser, Yellowstone National Park, USA. _Journal of Geophysical Research: Solid Earth_ , _125_ (12), e2020JB019711. https://doi.org/10.1029/ 2020jb019711 

Newhall, C., Costa, F., Ratdomopurbo, A., Venezky, D., Widiwijayanti, C., Win, N. T. Z., et al. (2017). WOVOdat–An online, growing library of 

worldwide volcanic unrest. _Journal of Volcanology and Geothermal Research_ , _345_ , 184–199. https://doi.org/10.1016/j.jvolgeores.2017.08.003 Niculescu‐Mizil, A., & Caruana, R. (2005). Predicting good probabilities with supervised learning. In _Proceedings of the 22nd international Conference on machine learning (ICML '05)_ (pp. 625–632). ACM. 

Reath, K., Pritchard, M. E., Roman, D. C., Lopez, T., Carn, S., Fischer, T. P., et al. (2021). Quantifying eruptive and background seismicity, deformation, degassing, and thermal emissions at volcanoes in the United States during 1978–2020. _Journal of Geophysical Research: Solid Earth_ , _126_ (6), e2021JB021684. https://doi.org/10.1029/2021jb021684 

Reed, M. (2021). Steamboat Geyser, 2021/09/11. Yellowstone National Park (Norris Geyser Basin). https://www.marareed.com/photography Reed, M. H., Barth, A., Taira, T., Farrell, J., & Manga, M. (2024). A shake and a surge: Assessing the possibility of an earthquake‐triggered eruption at Steamboat Geyser. _Volcanica_ , _7_ (2), 733–748. https://doi.org/10.30909/vol.07.02.733748 

Reed, M. H., & Manga, M. (2023). Snow suppresses seismic signals from Steamboat Geyser. _Geophysical Research Letters_ , _50_ (12), e2023GL103904. https://doi.org/10.1029/2023gl103904 

Reed, M. H., Munoz‐Saez, C., Hajimirza, S., Wu, S. M., Barth, A., Girona, T., et al. (2021). The 2018 reawakening and eruption dynamics of Steamboat Geyser, the world's tallest active geyser. _Proceedings of the National Academy of Sciences_ (Vol. 118(2), e2020943118). https://doi. org/10.1073/pnas.2020943118 

Rouwet, D., Constantinescu, R., & Sandri, L. (2014). Deterministic versus probabilistic volcano monitoring: Not "or" but "and. In _Volcanic tourist destinations_ (pp. 233–245). Springer. 

Rouwet, D., Sandri, L., Marzocchi, W., Gottsmann, J., Selva, J., Tonini, R., & Papale, P. (2014). Recognizing and tracking volcanic hazards related to non‐magmatic unrest: A review. _Journal of Applied Volcanology_ , _3_ (1), 17. https://doi.org/10.1186/s13617‐014‐0017‐3 

Rudolph, M. L., Manga, M., Hurwitz, S., Johnston, M., Karlstrom, L., & Wang, C. Y. (2012). Mechanics of Old Faithful Geyser, Calistoga, California. _Geophysical Research Letters_ , _39_ (24). https://doi.org/10.1029/2012gl054012 

Rudolph, M. L., & Sohn, R. A. (2017). A model for internal oscillations in geysers, with application to Old Faithful (Yellowstone, USA). _Journal of Volcanology and Geothermal Research_ , _343_ , 17–24. https://doi.org/10.1016/j.jvolgeores.2017.04.023 

Sparks, R. S. J. (2003). Forecasting volcanic eruptions. _Earth and Planetary Science Letters_ , _210_ (1–2), 1–15. https://doi.org/10.1016/s0012‐821x (03)00124‐9 

Sudibyo, M. R., Eibl, E. P., Hainzl, S., & Hersir, G. P. (2022). Eruption forecasting of Strokkur Geyser, Iceland, using permutation entropy. _Journal of Geophysical Research: Solid Earth_ , _127_ (10), e2022JB024840. https://doi.org/10.1029/2022jb024840 

Toramaru, A., & Maeda, K. (2013). Mass and style of eruptions in experimental geysers. _Journal of Volcanology and Geothermal Research_ , _257_ , 227–239. https://doi.org/10.1016/j.jvolgeores.2013.03.018 USGS. (2024). The July 23, 2024, hydrothermal explosion at Biscuit Basin. Retrieved from https://www.usgs.gov/observatories/yvo/news/july‐ 23‐2024‐hydrothermal‐explosion‐biscuit‐basin 

Vandemeulebrouck, J., Roux, P., & Cros, E. (2013). The plumbing of Old Faithful Geyser revealed by hydrothermal tremor. _Geophysical Research Letters_ , _40_ (10), 1989–1993. https://doi.org/10.1002/grl.50422 

Vandemeulebrouck, J., Sohn, R. A., Rudolph, M. L., Hurwitz, S., Manga, M., Johnston, M. J., et al. (2014). Eruptions at lone Star Geyser, Yellowstone National Park, USA: 2. Constraints on subsurface dynamics. _Journal of Geophysical Research: Solid Earth_ , _119_ (12), 8688–8707. https://doi.org/10.1002/2014jb011526 

White, D. E. (1967). Some principles of geyser activity, mainly from Steamboat Springs, Nevada. _American Journal of Science_ , _265_ (8), 641–684. https://doi.org/10.2475/ajs.265.8.641 

Wu, S. M., Lin, F. C., Farrell, J., Keller, W. E., White, E. B., & Hungerford, J. D. (2021). Imaging the subsurface plumbing complex of Steamboat Geyser and Cistern Spring with hydrothermal tremor migration using seismic interferometry. _Journal of Geophysical Research: Solid Earth_ , _126_ (4), e2020JB021128. https://doi.org/10.1029/2020jb021128 

Wu, S. M., Ward, K. M., Farrell, J., Lin, F. C., Karplus, M., & Smith, R. B. (2017). Anatomy of Old faithful from subsurface seismic imaging of the Yellowstone upper Geyser Basin. _Geophysical Research Letters_ , _44_ (20), 10–240. https://doi.org/10.1002/2017gl075255 

Yu, P., Dempsey, D., Rinaldi, A. P., Calibugan, A., Ritz, V. A., & Archer, R. (2023). Association between injection and microseismicity in geothermal fields with multiple wells: Data‐driven modeling of Rotokawa, New Zealand, and Húsmúli, Iceland. _Journal of Geophysical Research: Solid Earth_ , _128_ (4), e2022JB025952. https://doi.org/10.1029/2022jb025952 

Zoback, M. D. (2007). _Reservoir geomechanics_ . Cambridge University Press. 

## **References From the Supporting Information** 

Caudron, C., Girona, T., Taisne, B., Suparjan, G. H., Gunawan, H., Kristianto, & Kasbani (2019). Change in seismic attenuation as a long‐term precursor of gas‐driven eruptions. _Geology_ , _47_ (7), 632–636. https://doi.org/10.1130/g46107.1 

Endo, E. T., & Murray, T. (1991). Real‐Time Seismic Amplitude Measurement (RSAM): A volcano monitoring and prediction tool. _Bulletin of Volcanology_ , _53_ (7), 533–545. https://doi.org/10.1007/bf00298154 

GeyserTimes. (2024). Steamboat Geyser eruption times for 2018‐03‐01 through 2018‐12‐31. Retrieved from https://geysertimes.org/retrieve.php 

Singh, D., & Singh, B. (2020). Investigating the impact of data normalization on classification performance. _Applied Soft Computing_ , _97_ , 105524. https://doi.org/10.1016/j.asoc.2019.105524 

19 of 19 

ARDID ET AL. 

