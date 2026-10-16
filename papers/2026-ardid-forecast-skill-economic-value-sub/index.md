# From forecast skill to economic value: sub-hourly wildfire potential forecasting across Australian regions

- **Authors:** Alberto Ardid (ORCID 0000-0001-8040-8193); Anthony Power; Andres Valencia; H. Grant Pearce (ORCID 0000-0002-4876-2683); Shana Gross; David Dempsey; Matthias Boer
- **Journal:** International Journal of Wildland Fire, vol. 35(4), article WF25221 (2026)
- **Publisher:** CSIRO Publishing
- **DOI (version of record):** [https://doi.org/10.1071/wf25221](https://doi.org/10.1071/wf25221)
- **This page:** https://ddempsey.github.io/papers/2026-ardid-forecast-skill-economic-value-sub/
- **Open PDF:** [https://ddempsey.github.io/papers/2026-ardid-forecast-skill-economic-value-sub/ardid2026-forecast-skill-economic.pdf](https://ddempsey.github.io/papers/2026-ardid-forecast-skill-economic-value-sub/ardid2026-forecast-skill-economic.pdf) (Published version)
- **Full text (Markdown):** [https://ddempsey.github.io/papers/2026-ardid-forecast-skill-economic-value-sub/fulltext.md](https://ddempsey.github.io/papers/2026-ardid-forecast-skill-economic-value-sub/fulltext.md)
- **Notice:** Published version, reproduced under the CC BY-NC-ND 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1071/wf25221
- **Also in:** UC Research Repository, https://hdl.handle.net/10092/109982
- **Explainer:** all explainers on this site are AI-generated.
- **BibTeX:** https://ddempsey.github.io/papers/2026-ardid-forecast-skill-economic-value-sub/citation.bib
- **Topics:** Fire & other hazards
- **Keywords:** Warning system; Forecast skill; Index (typography)

## In brief

We tested a machine learning forecast of fire potential, updated every 30 minutes, in three Australian regions. On the Sunshine Coast it detected twice as many pre-fire periods as the Fire Behaviour Index, at a similar false alarm rate. Projected savings were nearly three times higher. Both are upper bounds.

- We used nine weather stations in three regions, the Sunshine Coast, Brisbane and Hobart, with 126 documented fires between 2000 and 2022.
- On the Sunshine Coast, our tailored model had a true positive rate of 0.80 against 0.38 for the Fire Behaviour Index, at a similar false positive rate.
- Projected net savings on the Sunshine Coast, both upper bounds, were A$97.7 million from our tailored model and A$34.5 million from the index.
- In Brisbane and Hobart, our tailored model also had a higher true positive rate and a higher potential economic value than the index, at a higher false positive rate.
- Learning curves at Hobart suggest that about 30 well-documented fires are enough for model performance to stabilise.

## The problem

Fire agencies have to decide when the cost of mobilising crews, aircraft and
public warnings is justified by the damage it could prevent. In Australia, the
Fire Behaviour Index (FBI) is computed hourly (Matthews et al., 2019; Sauvage et
al., 2024), but only a single daily rating is released publicly. Daily ratings
can miss the rapid drops in humidity and shifts in wind that often precede
ignition (Harris and Lucas, 2019). We expect that agencies are less likely to
adopt even a more accurate forecast without a clear measure of its economic
benefit.

In an earlier study, we forecast fire potential every 30 minutes from one weather
station on the Sunshine Coast, Queensland, using machine learning (Ardid et al.,
2025a). Here we asked (1) whether the approach works in other fire climates, and
(2) what its forecasts would be worth in dollars, compared with the FBI.

## What we did

We used nine weather stations in three regions: the subtropical
Sunshine Coast (15 fires, 2002 to 2017), the peri-urban fringe of Brisbane (32
fires, 2000 to 2018) and cool-temperate Hobart, Tasmania (79 fires, 2005 to
2022).

Every 30 minutes, the model computes over 700 statistical features from the
previous 10 days of station data. A random forest of 300 decision trees
classifies these features. We use the mean of the tree outputs, which we call
the consensus, as the forecast. Tailored models
were trained at each station and tested on each fire in turn, with the weeks
around that fire withheld from training. Generalised models were trained
on two regions and tested on the third.

We recalculated the FBI from the same station data, for the vegetation where
fires had started: heathland on the Sunshine Coast and in Hobart, and forest in
Brisbane.

To value the forecasts, we used a cost–loss framework (Murphy, 1985). Each false
alarm costs A$50,000 for a precautionary deployment, and each missed fire costs
A$10 million. One missed fire therefore costs the same as 200 false alarms. The
potential economic value (PEV) is the saving in expected cost from a forecast,
as a fraction of the saving from a perfect forecast. For each region and model, we chose the alarm threshold
that gave the highest PEV.

## What we found

On the Sunshine Coast, the FBI at its best threshold had a true positive rate
(TPR) of 0.38 and a false positive rate (FPR) of 0.08. Our tailored model raised
the TPR to 0.796 at a similar FPR of 0.077. Its PEV was 0.651 against 0.23 for the
FBI, with projected net savings of A$97.7 million against A$34.5 million. Fire
danger on the Sunshine Coast is often driven by fast midday drops in humidity and
abrupt sea-breeze wind shifts (e.g. Hanley et al., 2005). Our model can
potentially improve early warning, particularly where an index does not resolve
rapid, moisture-driven changes such as these.

In Hobart, our tailored model raised the TPR from 0.429 to 0.755, while the FPR
rose from 0.101 to 0.135. Its PEV was also higher than the FBI's.

In Brisbane, the FBI had a TPR of 0.611, its highest of the three regions. Our
model raised the TPR to 0.718, but its FPR of 0.158 was about 50% higher than the
FBI's 0.109. A single fuel model cannot
represent the mix of dry forest, grass and shrub on Brisbane's fringe, or its
high proportion of fires started by people (AIC, 2020). Our model learns from the
weather alone and needs no fuel type. This may be why its TPR and PEV there
remained higher than the FBI's.

The widget below shows these values for each region and model.

<div class="widget" id="w-pev-regions" role="group" aria-label="Forecast performance by region and model at the threshold that maximises potential economic value"></div>

Generalised models had a TPR of 0.682 on the Sunshine Coast, 0.568 in Brisbane (below the FBI) and
0.654 in Hobart, at FPRs of 0.129 to 0.137. We suggest that the weather precursors of
ignition are broadly shared between regions. However, the highest TPR in each region came from a
model trained on local fire records.

How many fires does a new region need? At Hobart, we varied the number of
training fires. Skill, measured by the area under the ROC curve (AUC), rose
rapidly as fires were added and levelled off after about 30 fires. From
this one region, we suggest that about 30 well-documented fires are enough for a
first deployment in a data-limited region.

When we varied both costs by ±20% in a Monte Carlo analysis, our model's PEV
remained above the FBI's. The fire records, and the assumption that forecast fires
are avoided, were held fixed.

## Limitations

The savings are upper bounds, because they assume that every correctly forecast
fire is avoided entirely. If a warning only reduces the loss, PEV falls by the same
factor for all models. Their ranking does not change. We chose the thresholds
retrospectively, as an operator might calibrate a decision rule on past
performance. Each PEV is therefore the best that model achieved on these records.

Our largest gain, on the Sunshine Coast, comes from a record of only 15 fires.
The levelling-off at about 30 fires was found at Hobart only and holds for the
fires in our records. Future fire weather may not resemble the past.

Our model forecasts the likelihood of ignition but not fire spread. Wind and
other drivers of fire growth may therefore be underweighted. Until these forecasts are validated in a wider range of fuels and
climates, we suggest they be used alongside existing fire danger ratings.

## Glossary

**Machine learning:** methods that learn to make predictions from patterns in past data.

**Fire potential:** the likelihood, as estimated by our model from the previous 10 days of weather, that a fire will start within a set number of days ahead.

**Fire Behaviour Index (FBI):** the fuel-specific index of the Australian Fire Danger Rating System, used here as the benchmark.

**Peri-urban:** on the fringe of a city, at the interface between urban areas and wildland.

**Random forest:** a machine learning model that averages the outputs of many decision trees, each a sequence of yes-or-no tests on the features.

**Consensus:** the mean output of the trees, from 0 to 1, which we use as the forecast of fire potential.

**Tailored and generalised models:** models trained with fires from the region they forecast (tailored), or only with fires from the other two regions (generalised).

**Cost–loss framework:** a way to value a forecast by comparing the cost of acting on alarms with the losses from fires that are missed.

**Potential economic value (PEV):** the saving from a forecast as a fraction of the saving from a perfect forecast, with no forecast at 0 and a perfect forecast at 1.

**Threshold:** the consensus or index value above which an alarm is issued.

**True positive rate (TPR):** the fraction of pre-fire periods for which a forecast raises an alarm.

**False positive rate (FPR):** the fraction of periods without a fire for which a forecast raises an alarm.

**ROC curve and AUC:** a plot of the TPR against the FPR over all thresholds. The area under it (AUC) is 0.5 for a random guess and 1 for perfect separation.

**Monte Carlo analysis:** repeating a calculation many times with randomly varied inputs, here the costs, to see how the result changes.

**A$:** Australian dollars.

## Abstract

Wildfire risk is rising under climate change, yet most operational forecasts rely on daily indices that miss rapid weather shifts preceding ignition. Accurate, timely and economically justified forecasts are critical for early warning and resource allocation. This study evaluates a sub-hourly machine-learning (ML) forecasting system for fire potential using weather-station data from three Australian regions (Sunshine Coast, Brisbane, Hobart), and quantifies its economic value using a cost–loss framework. ML classifiers were trained on sub-hourly Automatic Weather Station (AWS) data and benchmarked against the Fire Behaviour Index (FBI). Forecast discrimination was assessed using True Positive Rates (TPRs) and False Positive Rates (FPRs), as well as a Potential Economic Value (PEV) analysis, complemented by learning-curve tests. The ML model improved forecast skill over the FBI by 10–30%, with the ML system doubling potential savings relative to the FBI. Learning-curve diagnostics indicated that stable performance is achieved after ~30 fire events. The ML forecasting framework demonstrates predictive skill and measurable economic value, highlighting its potential for scalable, cost-effective early-warning systems. By linking forecast skill directly to financial and operational outcomes, this approach provides a quantitative basis for prioritising investment in timely, data-driven fire-warning tools across regions with limited data and constrained budgets.

## Cite

Ardid, Alberto, Power, Anthony, Valencia, Andres, Pearce, H. Grant, Gross, Shana, Dempsey, David, Boer, Matthias (2026). From forecast skill to economic value: sub-hourly wildfire potential forecasting across Australian regions. International Journal of Wildland Fire, 35(4), WF25221. https://doi.org/10.1071/wf25221

```bibtex
@article{ardid2026forecast,
  title = {From forecast skill to economic value: sub-hourly wildfire potential forecasting across Australian regions},
  author = {Ardid, Alberto and Power, Anthony and Valencia, Andres and Pearce, H. Grant and Gross, Shana and Dempsey, David and Boer, Matthias},
  journal = {International Journal of Wildland Fire},
  year = {2026},
  volume = {35},
  number = {4},
  pages = {WF25221},
  publisher = {CSIRO Publishing},
  doi = {10.1071/wf25221},
  url = {https://ddempsey.github.io/papers/2026-ardid-forecast-skill-economic-value-sub/}
}
```