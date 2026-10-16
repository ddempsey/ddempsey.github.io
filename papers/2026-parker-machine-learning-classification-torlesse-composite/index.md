# A Machine‐Learning Classification for Torlesse Composite Terrane Petrofacies and its Application to Sediment Provenance

- **Authors:** Matthew O. Parker (ORCID 0009-0003-6934-3669); David E. Dempsey (ORCID 0000-0003-2135-5129); Matthew W. Sagar (ORCID 0000-0001-8178-1619); Kari N. Bassett (ORCID 0000-0001-7903-5430); Alexander R. L. Nichols (ORCID 0000-0002-8298-2882); Greg H. Browne (ORCID 0000-0003-0865-6146)
- **Journal:** New Zealand Journal of Geology and Geophysics, vol. 69(2), article e70064 (2026)
- **Publisher:** Wiley
- **DOI (version of record):** [https://doi.org/10.1002/jgo2.70064](https://doi.org/10.1002/jgo2.70064)
- **This page:** https://ddempsey.github.io/papers/2026-parker-machine-learning-classification-torlesse-composite/
- **Open PDF:** [https://ddempsey.github.io/papers/2026-parker-machine-learning-classification-torlesse-composite/parker2026-machine-learning-classification.pdf](https://ddempsey.github.io/papers/2026-parker-machine-learning-classification-torlesse-composite/parker2026-machine-learning-classification.pdf) (Published version)
- **Full text (Markdown):** [https://ddempsey.github.io/papers/2026-parker-machine-learning-classification-torlesse-composite/fulltext.md](https://ddempsey.github.io/papers/2026-parker-machine-learning-classification-torlesse-composite/fulltext.md)
- **Notice:** Published version, reproduced under the CC BY-NC-ND 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1002/jgo2.70064
- **Explainer:** all explainers on this site are AI-generated.
- **BibTeX:** https://ddempsey.github.io/papers/2026-parker-machine-learning-classification-torlesse-composite/citation.bib
- **Keywords:** Geology; Provenance; Sediment; Geochemistry

## In brief

We trained four machine-learning algorithms to assign sandstone clasts to source regions of the Torlesse Composite Terrane, including the newly recognised Kaweka Terrane. Combined by equal vote, they reached a balanced accuracy of 80% on unseen samples, counting a two-two split as correct if either group was right.

- The classification uses four element ratios (lanthanum, scandium, thorium, and zirconium, each divided by titanium) in 200 South Island sandstones, 25 of them new Kaweka Terrane analyses.
- Balanced accuracies on unseen test samples were 77% (linear support vector machine), 69% (k-nearest neighbours), 75% (random forest), and 77% (neural network).
- Counting a two-two split as correct if either group was right, an equal vote across the four algorithms gave 80%, slightly higher than the individual algorithms, against 72% without such splits.
- All four algorithms agreed on the wrong group for 16 of the 132 test samples.
- Three Cardrona Valley clasts were assigned to a source region whose closest mapped extent is more than 270 km away. They could be misclassifications.

## The problem

The Torlesse Composite Terrane (TCT) forms large parts of the Southern Alps and
the axial ranges of the North Island. Since the mid-Cretaceous it has supplied
large volumes of coarse sediment to the basins of Te Riu-a-Māui/Zealandia.
Pebbles and cobbles in these basins can indicate which regions of the TCT were
exhumed (uplifted and eroded) as the Australian–Pacific plate boundary
developed. This requires tracing each clast to its provenance, or source region.

Although the TCT is known for monotonous sandstone and mudstone (Mortimer
2004), MacKinnon (1980) found subtle regional changes in its mineral content and
divided the sandstone into petrofacies, mappable regions of similar composition
and age. The classification of Roser and Korsch (1999), who confirmed these changes in
the rock chemistry, plots a sample's thorium/scandium (Th/Sc) ratio against
its silica/alumina (SiO2/Al2O3) ratio, with boundaries drawn by eye. Some
regions overlap on this plot, and it has no option for the Kaweka Terrane,
which was identified after the plot was published. Our goal was a
classification that includes the Kaweka Terrane, keeps or improves accuracy,
reduces the operator bias of boundaries drawn by eye, and uses several
relatively immobile element ratios.

## What we did

We used 200 sandstone samples from Te Waipounamu/the South Island, analysed for
whole-rock chemistry by X-ray fluorescence (XRF). Only two South Island Kaweka
samples had been analysed before this study. We analysed 33 more and used 25.

Each sample belongs to one of four groups: Rakaia Terrane petrofacies 1 to 3
(PF1–3, treated as one group), Rakaia PF4, the Kaweka Terrane, and the Pahau
Terrane. We described each sample by the natural logarithms of four ratios:
lanthanum, scandium, thorium, and zirconium, each divided by titanium. This
additive log-ratio transformation (Aitchison 1986) helps avoid the constant-sum
effect, in which an increase in one element makes the others decrease. We treat
these elements as relatively immobile during weathering.

We set aside 30% of the samples for testing. To balance the training groups, we
randomly reduced the three larger ones to 17 samples each, the size of the smallest. On these 68 samples we trained four algorithms
with different methods: a linear support vector machine,
k-nearest neighbours, a random forest, and a neural network.
Adding the samples left out of training gave a test set of 132.

We combined the four predictions by equal vote. A sample on which all four
agree is category A, and one on which three agree is category B. Both take the
majority group. A two-two split is category C, and the sample is assigned to
both groups. A two-one-one split (category D) or four different answers
(category E) leaves the sample unassigned.

<div class="widget" id="w-tct-vote" role="group" aria-label="Choose the group predicted by each of the four algorithms and see the resulting confidence category and assignment"></div>

## What we found

Balanced accuracy was 77% for the linear support vector machine, 69% for
k-nearest neighbours, 75% for the random forest, and 77% for the neural network.
Counting only category A and B samples, the vote had a balanced accuracy of
72%. We counted a category C sample as correct if either of its two
assigned groups was right. Including category C raised it to 80%,
slightly higher than the individual algorithms.

Of the 132 test samples, 87 were category A, but all four
algorithms agreed on the wrong group for 16 of them.

Every algorithm identified all Rakaia PF4 test samples, yet only 33 to 42%
of samples assigned to PF4 came from it. Between 26 and 29%
of Pahau samples were classified as Rakaia PF1–3. This may be related to
Pahau sediment coming at least partly from older Rakaia rocks
(MacKinnon 1983; Roser and Korsch 1999; Wandres et al. 2005).

On the same test samples, excluding the Kaweka samples, the
Th/Sc–SiO2/Al2O3 plot had a balanced accuracy of 77%. It identified 71% of
Pahau samples correctly against 48% for the vote, and only 65% of test samples
received the same group from both methods. We suggest these differences arise
from the larger number of element ratios the algorithms use.

We then classified 38 sandstone clasts from late Cenozoic conglomerates in
North Canterbury (Parker 2022), the Inangahua Valley (Mortimer et al. 2001), and
the Cardrona Valley (McDonnell and Craw 2003). All four algorithms agreed on
most clasts, and none were in categories D or E. At 80% accuracy, about eight
clasts are expected to be misclassified. Most clasts can be
interpreted as derived from mapped TCT regions less than 150 km away. Three Cardrona Valley clasts were assigned to Rakaia PF4, whose
closest mapped extent is more than 270 km to the northeast. This distance is probably too great to
transport cobbles. These clasts could therefore be misclassifications. Alternatively, they could
come from sandstone near the Alpine Fault that has since become schist. Its
original composition is unknown and might have been closer to PF4.

## Limitations

Many clasts show oxidised rims and clay alteration (McDonnell and Craw 2003;
Parker 2022), yet all are within the range of the training samples on
two weathering indices and a mafic–felsic–weathering plot. Because we treat
the elements we used as relatively immobile, the method could be applied to weathered clasts. However, the clasts from Parker (2022) were
preferentially selected as the least weathered available. Clasts of varying
weathering intensity could test its effect on the classification.

The method should be one tool in a wider provenance study, checked against
palaeocurrent directions, clast counts, clast petrography, and detrital zircon
dating. A closer estimate of its accuracy would come from testing modern clasts
from Southern Alps catchments that erode a single petrofacies or terrane.

## Glossary

A **terrane** is a fault-bounded unit of crust with its own geological history.
The TCT comprises the Rakaia, Kaweka, and Pahau terranes.

A **petrofacies** is a mappable region of a rock unit with similar composition
and age. PF1 to PF5 are the TCT petrofacies of MacKinnon (1980).

**Provenance** is the source region from which a sediment was eroded.

**Exhumation** is the uplift and erosion that bring deeply buried rock to the
surface.

A **clast** is a fragment of older rock within a sedimentary rock. A
**conglomerate** is a sedimentary rock made largely of clasts of pebble size or
larger.

The **mid-Cretaceous** and **late Cenozoic** are intervals of geological time.
The Cenozoic is the most recent geological era.

**X-ray fluorescence (XRF)** measures the concentrations of chemical elements in
a rock sample.

An **immobile element** is one that weathering and alteration do not readily
remove from a rock.

A **weathering index** is a ratio of element concentrations whose value shifts
as a rock weathers. We used the chemical index of alteration and the plagioclase
index of alteration.

A **mafic–felsic–weathering plot** (Ohta and Arai 2007) places a sample on a
triangle according to how far its chemistry reflects iron- and magnesium-rich
(mafic) source rock, silica-rich (felsic) source rock, or weathering.

A **linear support vector machine** separates groups with straight boundaries
placed as far as possible from the samples on either side.

**k-nearest neighbours** assigns a sample to the most common group among the k
training samples closest to it.

A **random forest** combines the votes of many decision trees, each a sequence
of yes-or-no tests on the input values.

A **neural network** passes the inputs through layers of connected units whose
weights are adjusted during training. Ours has one hidden layer.

**Balanced accuracy** is the average, across the four groups, of the share of
each group's samples classified correctly.

**Schist** here means the Haast Schist. It includes higher-grade metamorphosed
equivalents of the TCT.

**Detrital zircon dating** measures the ages of zircon grains eroded from older
rocks.

## Abstract

The Torlesse Composite Terrane (TCT) forms many of the mountain ranges in Aotearoa New Zealand and has provided enormous quantities of coarse‐grained sediment to Te Riu‐a‐Maui/Zealandia's basins since the mid‐Cretaceous. Tracing the provenance of these sediments to certain regions of the TCT can indirectly reconstruct exhumation patterns associated with the development of the Australian–Pacific plate boundary. Supplemented by new analyses, we are now able to include one of the new constituent terranes of the TCT (the Kaweka Terrane), which had not been recognised when the previous geochemical classification was developed. We train four different machine learning algorithms using samples from Te Waipounamu/the South Island to classify TCT‐derived sandstone conglomerate clasts into four different petrofacies/terranes of the TCT using log‐transformed trace element ratios. Balanced accuracies for the four algorithms used are 77% (linear support vector machine), 69% (k‐nearest neighbours), 75% (random forest), and 77% (neural network). This rises to 80% when an equal voting system is used. These accuracies are similar to existing classifications for the TCT but include the Kaweka Terrane as a classification option. We then show an example of how this updated classification can be applied to late Cenozoic TCT‐derived conglomerate clasts.

## Cite

Parker, Matthew O., Dempsey, David E., Sagar, Matthew W., Bassett, Kari N., Nichols, Alexander R. L., Browne, Greg H. (2026). A Machine‐Learning Classification for Torlesse Composite Terrane Petrofacies and its Application to Sediment Provenance. New Zealand Journal of Geology and Geophysics, 69(2), e70064. https://doi.org/10.1002/jgo2.70064

```bibtex
@article{parker2026machine,
  title = {A Machine‐Learning Classification for Torlesse Composite Terrane Petrofacies and its Application to Sediment Provenance},
  author = {Parker, Matthew O. and Dempsey, David E. and Sagar, Matthew W. and Bassett, Kari N. and Nichols, Alexander R. L. and Browne, Greg H.},
  journal = {New Zealand Journal of Geology and Geophysics},
  year = {2026},
  volume = {69},
  number = {2},
  pages = {e70064},
  publisher = {Wiley},
  doi = {10.1002/jgo2.70064},
  url = {https://ddempsey.github.io/papers/2026-parker-machine-learning-classification-torlesse-composite/}
}
```