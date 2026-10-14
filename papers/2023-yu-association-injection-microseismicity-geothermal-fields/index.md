# Association Between Injection and Microseismicity in Geothermal Fields With Multiple Wells: Data‐Driven Modeling of Rotokawa, New Zealand, and Húsmúli, Iceland

- **Authors:** Pengliang Yu (ORCID 0000-0001-8774-8991); David Dempsey (ORCID 0000-0003-2135-5129); Antonio Pio Rinaldi (ORCID 0000-0001-7052-8618); Aimee Calibugan; Vanille A. Ritz (ORCID 0000-0002-8773-7608); Rosalind Archer
- **Journal:** Journal of Geophysical Research: Solid Earth, vol. 128(4), article e2022JB025952 (2023)
- **Publisher:** American Geophysical Union (AGU)
- **DOI (version of record):** [https://doi.org/10.1029/2022jb025952](https://doi.org/10.1029/2022jb025952)
- **This page:** https://ddempsey.github.io/papers/2023-yu-association-injection-microseismicity-geothermal-fields/
- **Open PDF:** [https://ddempsey.github.io/papers/2023-yu-association-injection-microseismicity-geothermal-fields/yu2023-association-injection-microseismicity.pdf](https://ddempsey.github.io/papers/2023-yu-association-injection-microseismicity-geothermal-fields/yu2023-association-injection-microseismicity.pdf) (Published version)
- **Full text (Markdown):** [https://ddempsey.github.io/papers/2023-yu-association-injection-microseismicity-geothermal-fields/fulltext.md](https://ddempsey.github.io/papers/2023-yu-association-injection-microseismicity-geothermal-fields/fulltext.md)
- **Notice:** Published version, reproduced under the CC BY 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1029/2022jb025952
- **Also in:** UC Research Repository, https://hdl.handle.net/10092/105665
- **Explainer:** all explainers on this site are AI-generated and human-checked.
- **BibTeX:** https://ddempsey.github.io/papers/2023-yu-association-injection-microseismicity-geothermal-fields/citation.bib
- **Topics:** Induced seismicity & faults; Geothermal systems; Sea ice
- **Keywords:** Induced seismicity; Geothermal gradient; Geology; Context (archaeology); Injection well; Hydraulic fracturing

## In brief

We used data-driven methods to find which injection wells are associated with small earthquakes at the Rotokawa (New Zealand) and Húsmúli (Iceland) fields. Injection was more closely associated with earthquake rates averaged over weeks than over days. At Rotokawa, we found no evidence that rapid injection changes trigger earthquakes.

- At Rotokawa, both methods associated injection into Well
- At Húsmúli, wells HN-17 and HN-12 and the carbon dioxide stream of well HN-16 were the injectors most associated with microseismicity, although these associations could be spurious.
- Injection was more strongly associated with earthquake rates averaged over weeks than over a few days. At Rotokawa, random variation is likely to dominate over a few days.
- Cumulative injected volume and injection rate appeared to be the most informative data. At Rotokawa, we found no evidence that rapid changes in injection rate trigger earthquakes.
- The machine learning method offered only marginal benefit over a simple regression model. Both identified broadly the same wells.

## The problem

Small earthquakes, called microseismicity, are common in geothermal fields. At Rotokawa and Wairakei in New Zealand, they cluster around wells that pump brine and condensed steam back underground (Hopp et al., 2020; McNamara et al., 2016; Sepulveda et al., 2014). At Rotokawa, most are smaller than magnitude 2 and unlikely to be felt beyond the immediate area. At the Húsmúli reinjection area of the Hellisheiði field in Iceland, two magnitude 4 earthquakes occurred on 15 October 2011, soon after full-scale injection began.

Microseismicity can indicate how injection wells are connected to the wider reservoir. However, a geothermal field has several injection wells whose rates change over hours to months. Earthquakes also occur partly at random. It is therefore hard to separate clear relationships from incidental associations. Our goal was to rank individual wells by their association with microseismicity, and to interpret that ranking in terms of reservoir structure. Such a ranking could help to identify problematic wells.

## What we did

At Rotokawa, we used 10,507 earthquakes above magnitude 0.5, recorded near three injection wells over three years from 2012. At Húsmúli, we used records from 2015 to 2020 for five injection wells that together inject about 12 million tonnes of fluid a year (about 380 kg each second, by our arithmetic). One well, HN-16, also injects dissolved carbon dioxide (CO2).

Our first data-driven method, regression, models the earthquake rate as a weighted sum of each well's injection rate and cumulative injected volume, delayed by a time lag. We dropped any weight that was not statistically different from zero. Our second is a machine learning method called time series feature engineering. It splits each well's records into 2-day windows, computes 706 statistics, or features, for each window, and tests whether each feature differs before periods of high and low seismicity. With this many tests, some would pass by chance. We therefore used a stricter threshold, so that about 5% of the features we report are expected to be chance results.

By mid-2013, injectivity at Well #3 at Rotokawa had declined, and the operator moved its excess fluid to Well #2. Well #2 also switched from 40°C condensate to 130°C brine. We analysed the periods before July 2013 and after September 2013 separately.

## What we found

At Rotokawa, both methods associated injection into Well #2 with microseismicity before the change. The association with Well #2 then weakened or disappeared, even though more fluid went into that well. One explanation is that the hotter fluid produced smaller thermal stresses near Well #2. Alternatively, pressure might have risen more slowly in the reservoir compartment bounded by the Central Field Fault and the Injection Field Fault (Wallis et al., 2013). Both are likely difficult to confirm without extensive pressure and temperature monitoring there.

At Húsmúli, we rank HN-17, HN-12 and the CO2 stream of HN-16 as the three injectors most associated with microseismicity. These wells lie in the east of the injection area and target northeast-trending faults that conduct fluid (Ratouis et al., 2022; Tomasdóttir, 2018). East-west faults there slow the northward movement of injected fluid and retain it. The resulting build-up and longer residence time of injected fluid could explain the stronger association. However, the Húsmúli associations weakened when we defined high seismicity more strictly. They could therefore be spurious.

At Rotokawa, the association strengthened as we averaged earthquake rates over longer periods, up to 20 days. The weaker association over a few days is best explained by random variation, because a rate estimated over a few days comes from few earthquakes. At Húsmúli, the association was strongest for averages over one to two weeks and levelled off or weakened beyond that. This could suggest that seismicity there varies with injection on that time scale.

<div class="widget" id="w-avg-window" role="group" aria-label="Interactive illustration of how averaging an earthquake count over a longer window reduces random scatter in the estimated earthquake rate"></div>

The widget illustrates the effect of random variation with a synthetic rate of our own, treating earthquake counts as a Poisson process. By our arithmetic, at the Rotokawa median rate of 7.85 events a day, a 1-day average counts about 8 earthquakes and scatters by about 36% of the rate. A 20-day average counts about 157, with scatter of about 8%.

Cumulative injected volume and injection rate appeared to be the most informative data. Segall and Lu (2015) proposed that rapid changes in injection rate can briefly raise the earthquake rate through poroelastic stresses. We found no evidence of this at Rotokawa. Rapid rate changes were less associated with earthquakes than the rate itself. However, our data may not be sensitive enough to detect a short-lived increase. Any increase too small to detect in these data is, in our view, too small to be of concern.

The machine learning method offered only marginal benefit over the regression. Both identified the 2013 change at Rotokawa and broadly the same wells at both fields. In this instance, it is not obvious that the machine learning method justified its extra time and complexity.

## Limitations

Neither method could remove the effect of aftershocks or earthquake swarms. Because production data were not available for Rotokawa, we analysed only earthquakes near the injection wells.

The date of the 2013 change at Rotokawa was supplied to both methods. An unsupervised machine learning method might detect that change, and subtler ones, without the date as an input. A further test would be to find the 2013 change in the Rotokawa data while withholding its date from the algorithm.

## Glossary

**Microseismicity** is small earthquakes, often below magnitude 2, that need sensitive instruments to detect.

**Magnitude** is a logarithmic measure of earthquake size.

**Brine** is the liquid separated from geothermal fluid. **Condensate** is steam that has passed through the turbine and condensed.

**Injectivity** is the ratio of a well's injection rate to its wellhead pressure.

**Wellhead pressure** is the fluid pressure measured at the top of a well.

**Regression** fits a model to data by choosing weights that minimise the mismatch between them.

A **time lag** is a delay between a change in injection and the earthquake response.

**Machine learning** is a group of methods that find patterns in data without a physical model.

A **Poisson process** is a model of events that occur at random at a given average rate.

**Thermal stresses** arise when rock contracts as injected fluid cools it. A larger temperature difference produces larger stresses.

A **reservoir compartment** is a part of the reservoir that faults partly separate from the rest.

**Poroelastic stresses** are stress changes in rock caused by changes in fluid pressure.

An **aftershock** is an earthquake triggered by an earlier, larger one. An **earthquake swarm** is a burst of earthquakes with no single main event.

An **unsupervised** method finds patterns in data that have no labels or predefined categories.

## Abstract

Understanding injection‐induced microseismicity in geothermal systems can provide insight into reservoir connectedness. However, fault and reservoir complexity are difficult to represent in simple analytical models, which makes it difficult to discern clear relationships from incidental associations. Here, we have used data‐driven models to study how fluid injection and microseismicity are related in the Rotokawa (New Zealand) and Hellisheiði (Iceland) geothermal fields. We tested two classes of model: (a) lagged linear regression of seismicity rate as a function of well injection rates; and (b) systematic extraction of injection time series features that are then evaluated for associations with the seismicity. These models allowed us to determine which wells had the greatest correlation with microseismicity and to explain this association in a reservoir context. Finally, exploring different data types and transformations, we were unable to establish a link between rapid changes in injection rate and seismicity spikes, as suggested by some theoretical models.

## Cite

Yu, Pengliang, Dempsey, David, Rinaldi, Antonio Pio, Calibugan, Aimee, Ritz, Vanille A., Archer, Rosalind (2023). Association Between Injection and Microseismicity in Geothermal Fields With Multiple Wells: Data‐Driven Modeling of Rotokawa, New Zealand, and Húsmúli, Iceland. Journal of Geophysical Research: Solid Earth, 128(4), e2022JB025952. https://doi.org/10.1029/2022jb025952

```bibtex
@article{yu2023association,
  title = {Association Between Injection and Microseismicity in Geothermal Fields With Multiple Wells: Data‐Driven Modeling of Rotokawa, New Zealand, and Húsmúli, Iceland},
  author = {Yu, Pengliang and Dempsey, David and Rinaldi, Antonio Pio and Calibugan, Aimee and Ritz, Vanille A. and Archer, Rosalind},
  journal = {Journal of Geophysical Research: Solid Earth},
  year = {2023},
  volume = {128},
  number = {4},
  pages = {e2022JB025952},
  publisher = {American Geophysical Union (AGU)},
  doi = {10.1029/2022jb025952},
  url = {https://ddempsey.github.io/papers/2023-yu-association-injection-microseismicity-geothermal-fields/}
}
```