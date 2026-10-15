# Sub-hourly forecasting of fire potential using machine learning on time series of surface weather variables

- **Authors:** Alberto Ardid; Andres Valencia; Anthony Power; Matthias M. Boer; Marwan Katurji; Shana Gross; David Dempsey
- **Journal:** International Journal of Wildland Fire, vol. 34(1), article WF24113 (2025)
- **Publisher:** CSIRO Publishing
- **DOI (version of record):** [https://doi.org/10.1071/wf24113](https://doi.org/10.1071/wf24113)
- **This page:** https://ddempsey.github.io/papers/2025-ardid-sub-hourly-forecasting-fire-potential/
- **Open PDF:** [https://ddempsey.github.io/papers/2025-ardid-sub-hourly-forecasting-fire-potential/ardid2025-sub-hourly-forecasting.pdf](https://ddempsey.github.io/papers/2025-ardid-sub-hourly-forecasting-fire-potential/ardid2025-sub-hourly-forecasting.pdf) (Published version)
- **Full text (Markdown):** [https://ddempsey.github.io/papers/2025-ardid-sub-hourly-forecasting-fire-potential/fulltext.md](https://ddempsey.github.io/papers/2025-ardid-sub-hourly-forecasting-fire-potential/fulltext.md)
- **Notice:** Published version, reproduced under the CC BY-NC 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1071/wf24113
- **Explainer:** all explainers on this site are AI-generated and human-checked.
- **BibTeX:** https://ddempsey.github.io/papers/2025-ardid-sub-hourly-forecasting-fire-potential/citation.bib
- **Topics:** Fire & other hazards
- **Keywords:** Meteorology; Climatology; Series (stratigraphy); Time series; Environmental science

## In brief

We trained machine learning models on 15 years of half-hourly records from one weather station on the Sunshine Coast, Australia, to recognise the weather in the days before fires. Tested on fires withheld from training, 11 of the 15 fires occurred during a warning from our 10-day model.

- Our models compute over 700 statistical features for each data stream in 2, 5 and 10-day windows and update every 30 minutes.
- Averaged over our three models, the area under the ROC curve was 47% higher than for the Forest Fire Danger Index (FFDI), the standard index for the region.
- The 10-day model separated pre-fire from non-fire periods best, with an area under the curve of 0.98 against 0.62 for the FFDI.
- With a warning threshold of 0.7, warnings covered 282.6 days of the 15.4-year record, and 11 of the 15 fires occurred during one.
- Over the record, fires were about 50 times more likely while a warning was in effect than while none was.

## The problem

Weather that becomes dangerous within hours to days can lead to sudden fire
outbreaks. Accurate short-term forecasts give time for evacuations and fire
suppression. Fire danger indices, such as the Forest Fire Danger Index (FFDI)
(Griffiths, 1999), estimate the likelihood and potential danger of fires on
timescales from daily forecasts to seasonal outlooks. However, many existing
systems are not designed for conditions that change quickly (Sharples et al.,
2009; Fox-Hughes, 2015).

In this study, we asked whether the record from a single weather station could
be used to recognise fire-prone conditions every 30 minutes. We adapted a method
first developed to forecast volcanic eruptions (Dempsey et al., 2020). The
models estimate what we call fire potential, the likelihood of a fire under the
current weather, assuming something ignites it.

## What we did

We used weather recorded every 30 minutes at Sunshine Coast Airport,
Queensland, over 15.4 years from March 2002 to July 2017. Over that time, 15 significant fires burned 1,304 hectares (ha), about 13 square kilometres. The data
streams included air temperature, relative humidity, wind speed and vapour
pressure deficit, along with indicators of fuel dryness such as the Fine Fuel
Moisture Code (FFMC).

For each data stream, we computed over 700 features in windows of 2, 5 and 10
days, using the Python package tsfresh (Christ et al., 2018). A feature is a
statistic of the window, such as its mean, a quantile or the number of peaks.
Each feature uses only data up to the time it describes.

Data in the 2, 5 or 10 days before a fire were labelled pre-fire, and all other
data non-fire. Non-fire data far outnumber pre-fire data. We therefore randomly
under-sampled the non-fire data to an approximately 1:1 ratio. We ranked features with the
Mann–Whitney U test and used the highest-ranked to train a random forest of up
to 300 decision trees. The forest outputs a consensus between 0 and 1. Values
near 1 mean recent weather resembles the build-up to past fires.

To test the models on fires they had not seen, we withheld an 8-week period
centred on each fire in turn, trained on the rest, and forecast the withheld
period every 30 minutes. This pseudo-prospective test approximates
real-time forecasting.

## What we found

The area under the receiver operating characteristic curve (AUC) was 0.88, 0.88
and 0.98 for the 2, 5 and 10-day models, against 0.62 for the FFDI. A random
guess scores 0.5 and perfect separation scores 1. Averaged over the three
models, the AUC was 47% higher than for the FFDI. The 10-day model performs
best. This is probably because it accounts for weather that accumulates and
gradually raises fire risk. However, before a fire in 2007 the 2-day and 10-day models
appear to move in opposite directions. This may be because the 10-day model
averages out short-term weather variations that affect the 2-day model.

The decision trees used temperature, relative humidity, wind speed, vapour
pressure deficit and FFMC most often. The 0.1 quantile of wind
speed and the 0.3 quantile of relative humidity rose before a 2004 fire used in
training, and again before a 2009 fire the model had not seen. Nevertheless, how
often a tree uses a variable gives limited insight into cause and effect.

We issued a warning when the 10-day consensus crossed a threshold, and ended it
once it had remained below the threshold for 48 consecutive hours.
With a threshold of 0.7, warnings covered 282.6 days of the record, and 11 of
the 15 fires occurred during one. Fires were about 50 times more likely
during a warning than outside one.

This corresponds to one fire for every 26 days of warning, against one for
every 1,342 days without a warning (our arithmetic). At the same threshold, the
2 and 5-day models anticipated 33% and 20% of the fires. With a lower threshold,
more fires occur during a warning, but the time under warning increases.

The widget below applies this rule to an illustrative consensus record. At 0.7,
its fire occurs during a warning.

<div class="widget" id="w-fire-warn" role="group" aria-label="Warning rule applied to an illustrative consensus record, with an adjustable threshold"></div>

The largest fire, in January 2017, burned about 840 ha, or 65% of
the total area. With this fire withheld from training, the 10-day consensus
crossed 0.7 about 4 days before the fire and peaked a day before it. The
warning stayed active until the fire. The FFDI also rose in the days before
this fire. The two could be used together, with early indications from our
model reinforced by high FFDI values closer to an event.

## Limitations

Our models use only weather data, from one station. They do not include
fuel properties, live fuel moisture, topography or soil moisture. The fires were mostly in Noosa, Mount Coolum and Maroochy
River National Parks, with eucalypt, heathland and melaleuca fuels
respectively. A preliminary analysis suggests fires in heathland and
melaleuca were less likely to be anticipated, although there are too few fires
to draw firm conclusions.

The 50-fold difference assumes a Poisson model, in which fires are independent
and occur at constant rates inside and outside warnings. The rule that keeps a
warning active beyond 48 hours is arbitrary at this stage. Our rationale is that
a prolonged high consensus indicates sustained fire-prone conditions.

We have not yet tested how a model trained at one station performs in other
regions, or whether a 10-day window is the appropriate timescale there. Transfer learning could extend the approach to regions with
little historical fire data.

## Glossary

**Machine learning:** methods that learn to make predictions from patterns in past data.

**Random forest:** a machine learning model that averages the outputs of many decision trees, each a sequence of yes-or-no tests on the features.

**Consensus:** the output of the random forest, from 0 to 1, where values near 1 indicate weather similar to that before past fires.

**Feature:** a statistic computed from a window of a data stream, such as its mean or a quantile.

**Quantile:** the value below which a given fraction of the measurements fall, for example a tenth for the 0.1 quantile.

**Forest Fire Danger Index (FFDI):** the standard fire danger index for the region, which we used as the benchmark.

**Fine Fuel Moisture Code (FFMC):** an index of fuel moisture, used here as an indicator of fuel dryness.

**Vapour pressure deficit:** how far the air is from saturation, given by the difference between the vapour pressure of saturated air and the actual vapour pressure, with higher values for drier air.

**Mann–Whitney U test:** a statistical test of whether values in two groups differ, used here to rank features.

**ROC curve and AUC:** a plot of the fraction of pre-fire periods a model correctly flags (true positive rate) against the fraction of non-fire periods it wrongly flags (false positive rate), over all thresholds. The area under it (AUC) summarises how well a model separates the two.

**Pseudo-prospective testing:** forecasting data that were withheld from training, as an approximation of forecasting in real time.

**Poisson model:** a model in which events occur independently at a constant average rate.

**Transfer learning:** applying a model trained on one dataset to another, here from one region to another.

**Hectare (ha):** an area of 10,000 square metres.

## Abstract

Rapidly developing pre-fire weather conditions contributing to sudden fire outbreaks can have devastating consequences. Accurate short-term forecasting is important for timely evacuations and effective fire suppression measures. This study aims to introduce a novel machine learning-based approach for forecasting fire potential and to test its performance in the Sunshine Coast region of Queensland, Australia, over a period of 15 years from 2002 to 2017. By analysing real-time data from local weather stations at a sub-hourly temporal resolution, we aimed to identify distinct weather patterns occurring hours to days before fires. We trained random forest machine learning models to classify pre-fire conditions. The models achieved high out-of-sample accuracy, with a 47% higher accuracy than the standard fire danger index for the region. When simulating real forecasting conditions, the model anticipated 75% of the fires (11 out of 15). This method provides objective, quantifiable information, enhancing the precision and effectiveness of fire warning systems. The proposed forecasting approach supports decision-makers in implementing timely evacuations and effective fire suppression measures, ultimately reducing the impact of fires.

## Cite

Ardid, Alberto, Valencia, Andres, Power, Anthony, Boer, Matthias M., Katurji, Marwan, Gross, Shana, Dempsey, David (2025). Sub-hourly forecasting of fire potential using machine learning on time series of surface weather variables. International Journal of Wildland Fire, 34(1), WF24113. https://doi.org/10.1071/wf24113

```bibtex
@article{ardid2025sub,
  title = {Sub-hourly forecasting of fire potential using machine learning on time series of surface weather variables},
  author = {Ardid, Alberto and Valencia, Andres and Power, Anthony and Boer, Matthias M. and Katurji, Marwan and Gross, Shana and Dempsey, David},
  journal = {International Journal of Wildland Fire},
  year = {2025},
  volume = {34},
  number = {1},
  pages = {WF24113},
  publisher = {CSIRO Publishing},
  doi = {10.1071/wf24113},
  url = {https://ddempsey.github.io/papers/2025-ardid-sub-hourly-forecasting-fire-potential/}
}
```