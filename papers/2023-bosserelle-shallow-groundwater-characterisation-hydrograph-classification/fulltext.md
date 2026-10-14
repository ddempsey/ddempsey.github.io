# Shallow groundwater characterisation and hydrograph classification in the coastal city of Ōtautahi/Christchurch, New Zealand

**Authors:** Amandine L. Bosserelle, Leanne K. Morgan, David E. Dempsey, Irene Setiawan  
**Published in:** Hydrogeology Journal (2023)  
**DOI (version of record):** https://doi.org/10.1007/s10040-023-02745-z  
**This copy:** Published version. Text extracted from the PDF at https://ddempsey.github.io/papers/2023-bosserelle-shallow-groundwater-characterisation-hydrograph-classification/bosserelle2023-shallow-groundwater-characterisation.pdf; equations, tables and figure placement may be imperfect, so cite the DOI.  
**Notice:** Published version, reproduced under the CC BY 4.0 licence. © The Author(s). Version of record: https://doi.org/10.1007/s10040-023-02745-z  
**Licence:** CC BY 4.0 https://creativecommons.org/licenses/by/4.0  

---
Hydrogeology Journal (2024) 32:577–600 https://doi.org/10.1007/s10040-023-02745-z 

**REPORT** 

# **Shallow groundwater characterisation and hydrograph classification in the coastal city of Ōtautahi/Christchurch, New Zealand** 

#### **Amandine L. Bosserelle**<sup>**1,2**</sup> **· Leanne K. Morgan**<sup>**2**</sup> **· David E. Dempsey**<sup>**1**</sup> **· Irene Setiawan**<sup>**2,3,4**</sup> 

Received: 25 January 2023 / Accepted: 16 October 2023 / Published online: 15 November 2023 © The Author(s) 2023 

#### **Abstract** 

Groundwater is present at shallow depth under many coastal low-lying cities. Despite the importance of protecting coastal urbanised areas from flooding and climate-change-induced sea-level rise, the effects of shallow groundwater fluctuations are rarely investigated. The aim of this study was to determine characteristics of shallow groundwater, including spatial and temporal trends in depths to groundwater and their relationship to natural and anthropogenic stressors. The study uses depth to groundwater measurements from a uniquely extensive and densely spaced monitoring network in Ōtautahi/Christchurch, New Zealand. Data-driven analysis approaches were applied, including spatial interpolation, autocorrelation, clustering, cross-correlation and trend analysis. These approaches are not commonly applied for groundwater assessments despite the potential for them to provide insights and information for city-wide systems. The comprehensive approach revealed discernible clusters and trends within the dataset. Responses to stresses such as rainfall events and stream flow were successfully classified using clustering analysis. The time series analysis indicated that in areas of shallow groundwater, low variation in levels occurred and this was also found using clustering. However, attributing some clusters to specific hydrogeological attributes or stressors posed challenges. The primary feature in hydrograph classification proved to be the proximity to tidal rivers and their correlation with tidal signals. These results highlight the value of using large datasets to characterise spatial and temporal variability of shallow groundwater in urban coastal settings and to assist with monitoring infrastructure planning in the face of future climate-change hazards. 

**Keywords** New Zealand · Urban groundwater · Coastal aquifers · Spatial analysis · Clustering analysis 

## **Introduction** 

Approximately 11% of the world’s population in 2020, a collective 600–900 million people, live in coastal areas that are less than 10 m above sea level with 90% of this population located in coastal cities and settlements (Colenbrander et al. 2019; IPCC 2022; United Nations 2017). Many coastlines 

* Amandine L. Bosserelle 

> amandine.bosserelle@canterbury.ac.nz 

- 1 Department of Civil and Natural Resources Engineering, Faculty of Engineering, University of Canterbury, Christchurch, New Zealand 

- 2 Waterways Centre, School of Earth and Environment, University of Canterbury, Christchurch, New Zealand 

- 3 Faculty of Environment, Society and Design, Lincoln University, Lincoln, New Zealand 

> 4 Mahaanui Kurataiao Ltd, 226 Antigua Street, Christchurch, New Zealand 

have low-lying flat topographical features such as coastal plains and river deltas, and at these locations, groundwater occurs at shallow depth below the land surface (de Graaf et al. 2015). Coastal shallow groundwater is influenced by ocean levels and tidal conditions along the coastline and can constitute a hazard in these densely populated areas (Befus et al. 2020; Bosserelle et al. 2022; May 2020). Intensified coastal hazards in relation to groundwater under sea-level rise include: (1) saltwater intrusion, which is salinization of the freshwater resource, and (2) groundwater flooding, which is often poorly addressed in the built environment. Therefore, areas of current and future shallow groundwater must be defined in urban centres. Effects of climate changeinduced sea-level rise on shallow groundwater will expose more coastal urbanised areas to unprecedented hazards this century and beyond (Hoover et al. 2017; Hummel et al. 2018; Plane et al. 2019; Rotzoll and Fletcher 2013). 

Urban hydrogeology is the field that describes groundwater systems underlying cities, settlements, built-up areas, 

Vol.:(0123456789)1 3 

Hydrogeology Journal (2024) 32:577–600 

578 

and potential consequences of human activities altering water levels in the subsurface (Schirmer et al. 2013). Shallow groundwater in urbanised low-elevation and delta areas is studied from the perspective of clean water availability and vulnerability to saltwater intrusion in coastal cities and regions impacted by land subsidence such as Jakarta, Bangladesh, the Netherlands, Aotearoa New Zealand (forthwith New Zealand), and China (Oude Essink et al. 2010; Setiawan et al. 2022; Shaad and Burlando 2019; Shamsudduha et al. 2009; Shi and Jiao 2014). Furthermore, defining characteristics of urban shallow groundwater such as depths, fluctuations, and correlations, can be used to assess flooding hazard and exposure of key infrastructure networks under sea-level rise (Befus et al. 2020; Habel et al. 2019; Knott et al. 2019; Plane et al. 2019; Sukop et al. 2018), urban flooding and liquefaction hazards (Grant et al. 2021; Hughes et al. 2015), or impacts of underground structures such as low-emission ground source heating/cooling systems (Attard et al. 2016a; Böttcher and Zosseder 2022; Farr et al. 2017). 

Shallow groundwater in urban centres can provide potable water supply and attenuate anthropogenic pollutants (La Vigna 2022). The issues commonly found in cities relate to groundwater quality from anthropogenic influences (Khatri and Tyagi 2015) and interactions with infrastructure (Becker et al. 2022; Salvadore et al. 2015; Schirmer et al. 2013). Shallow groundwater interaction with infrastructure systems in this modified built environment is complex (Knott et al. 2017; Lancia et al. 2020; Liu et al. 2018; Thorndahl et al. 2016), and these connections can affect groundwater level fluctuations independently from natural variations, i.e., rainfall and surface-water relations (Debuisson et al. 1993; Su et al. 2020; Vázquez-Suñé et al. 2005). Nevertheless, characterising existing relationships between groundwater and the surrounding subsurface infrastructure is necessary to forecast the responses to future changes such as sea-level rise (Su et al. 2022). 

Shallow urban groundwater monitoring data is needed near critical coastal infrastructure that can be damaged by sea-level-rise-induced groundwater rise (Habel et al. 2023; Knott et al. 2019). Infrastructure can be damaged both below the land surface (pipes or basements) and above the land surface (roads and buildings; Befus et al. 2020; May 2020; Su et al. 2022; Thorndahl et al. 2016). Measurements of the depth to groundwater using bores, wells and piezometers located across urban areas are essential to develop the knowledge of the indirectly observed subsurface. Depth to groundwater of individual wells can be referenced against a vertical datum (usually mean sea level) to calculate groundwater elevations (i.e., hydraulic head) for a given region and a surface can be created. Surfaces of groundwater elevation (or depth to groundwater) are locally meaningful at the measurement points; however, the greater the distance from the observation, the greater the uncertainty introduced by 

geospatial modelling (Desbarats et al. 2002; Varouchakis and Hristopulos 2013). Groundwater elevations have been used to analyse shallow groundwater fluctuations over periods of days, years and decades (Alley and Taylor 2001; Hughes et al. 2009; US Environmental Protection Agency 2020). 

Groundwater hydrographs (i.e., time series records) represent level fluctuations driven by rainfall characteristics and hydrogeological drivers, including potentially permanent or temporary interactions with surrounding surface-water bodies and subsurface-water infrastructure. Natural and human factors that affect groundwater levels also control the recharge, the discharge and the storage in the shallow groundwater system. Meteorologic, climatic and hydrologic factors influence the groundwater level fluctuations and superimposed anthropogenic stresses include activities such as abstraction, injection, changes in land use, e.g., urban development, deforestation, and drainage (Taylor and Alley 2001). Shallow groundwater contributes naturally to urban water, rainfall infiltration influences the water-table elevation and surface-water bodies interact with groundwater (La Vigna 2022; Zhang and Chui 2019). The risks of groundwater rise causing flooding and damaging surface and subsurface infrastructure increases due to infiltration and recharge. Surface-water and groundwater interactions occur directly along and under connected riverbanks, water courses, drainage networks, estuaries and the coastline. The changing climate, with more extreme conditions (e.g., heatwaves, rainfall events and coastal flooding) along coastlines and accelerating sea-level rise, modify known groundwater conditions, and the consequential changes below ground will not be detected if groundwater data are not collected. Currently, the management of urban water and groundwater is a challenge in coastal built environments due to the lack of baseline and historical monitoring (La Vigna 2022; Sartirana et al. 2022; Shaad and Burlando 2019). To investigate further the spatial distribution and dynamics of shallow groundwater present in coastal cities, and also predict future changes in connection to climate change and human influences, wider water-table monitoring networks might be useful (Habel et al. 2023). Promising approaches for time series data analysis and monitoring network assessments using machine learning tools have been used in the fields of regional hydrology and hydrochemistry (Bloomfield et al. 2015; Daughney et al. 2012; Naranjo-Fernández et al. 2020; Rinderer et al. 2019; Sartirana et al. 2022; Wu et al. 2021; Wunsch et al. 2021). These approaches include (1) time series trends, (2) clustering and (3) cross-correlation analysis. Some details about trends analysis, clustering analysis and cross-correlation analysis are given in the following and will help to support surveys, geospatial mapping and statistical approaches for future urban groundwater investigations. 

1 3 

Hydrogeology Journal (2024) 32:577–600 

579 

A common and robust technique to detect statistically significant time series trends is the Mann-Kendall test, which is often used as a nonparametric method in water resources assessments (Helsel et al. 2020; Shamsudduha et al. 2009; Song and Zemansky 2013). Trends in groundwater levels are an efficient tool to understand climatic drivers and anthropogenic influences. Smith and Medeiros (2019) used historical records to demonstrate long-term trends of the water table in response to sea-level rise on the Cape Cod peninsula. 

Time series clustering is particularly effective for large datasets, as described by Wang et al. (2006) and can be applied to many individual coastal groundwater hydrographs to group similar time series into clusters. This method aims to identify similarities between individual sites to find hydrographs with similar patterns or trends. Hydrograph classification with clustering algorithms is commonly used over large scales—from catchments to regions—to investigate the characteristics of the aquifer based on the hydrograph locations (Naranjo-Fernández et al. 2020; Rinderer et al. 2019; Wunsch et al. 2021). 

In urban environments, buildings and subsurface infrastructure interfere with the ground surface and shallow groundwater elevations (Attard et al. 2016b), and it can be difficult to obtain a clear correlation in water levels between monitoring sites. Clustering techniques have been applied for time series analysis of groundwater levels for urban scale domains and within the same groundwater system. Sartirana et al. (2022) recently used time series clustering analysis to develop an approach for urban groundwater management based on biannual water levels measurement over a 15-year period. The observed significant differences in groundwater behaviour suggested complex interactions with structural and anthropogenic activities. 

Long-term hydrographs usually lack good quality data due to gaps and frequency of records (weekly or monthly) over an overlapping time period (Naranjo-Fernández et al. 2020; Wunsch et al. 2021); however, the suite of analysis and interpretation undertaken on the high density and high temporal frequency (hourly to weekly) time series data of shallow groundwater levels has not yet been used to better define the urban groundwater system in a coastal city. Cross-correlation analysis can be used specifically in preliminary assessments using coastal monitoring networks to evaluate the influence of oceanic tidal signals. The periodicity and the cyclic pattern of the tidal signal in groundwater levels are used by the cross-correlation method to measure similarities between groundwater time series (Kim et al. 2005, 2008; Rotzoll et al. 2008; Song and Zemansky 2013; Su et al. 2022). Cross-correlation analysis is also used outside coastal areas and urban systems to determine the response of groundwater levels to rain events, temperatures and surface-water variations (Chae et al. 2010; Moon et al. 2004; Teramoto et al. 2021). Combining trends 

analysis, cross-correlation analysis of groundwater levels, and clustering analysis constitutes a novel method for the investigation of coastal urban monitoring networks through time series analysis and big data analysis (Rau et al. 2020). A data-driven approach based on high-frequency groundwater level records is proposed in this study and aims to contribute to improve the understanding of shallow coastal groundwater systems (Sartirana et al. 2022; Shapiro and Day-Lewis 2022). 

This research explores, with the tools described previously, a high spatial density and high-temporal-resolution dataset from an urban shallow groundwater monitoring network. The recent (2016–2020) spatio-temporal record of groundwater level fluctuations under Ōtautahi/Christchurch (forthwith Christchurch) in New Zealand is analysed to classify natural and anthropogenic responses. The specific objectives of this study are to: (1) characterise the distribution and the responses of shallow groundwater to stressors (e.g., rainfall events, streams flow, anthropogenic influences) in an urban coastal area, (2) explore the relationship between groundwater levels, natural and anthropogenic stressors, and (3) build a database of information related to the shallow coastal groundwater system to use in infrastructure and environmental investigations. An outcome of this study proposed an optimisation of the shallow groundwater levels monitoring network to avoid redundancy in data collection, support management of the urban water resource and help identify hazard-prone areas and vulnerable communities within the urban area. The adopted approach of urban groundwater characterisation can inform environmental monitoring for coastal cities worldwide. 

## **Background and hydrogeological context of the study area** 

Christchurch is the largest urban centre on the east coast of the South Island of New Zealand, located within the Canterbury Plains at the edge of Horomaka/Banks Peninsula (Fig. 1) and is a medium-sized coastal city (population greater than 400,000 people). Many large coastal cities globally but also in New Zealand, and smaller settlements, have similar settings to Christchurch; they are usually located in flat low-lying areas, over unconsolidated sediments, close to waterways and at the edge of oceanic conditions. Coastal cities and communities are impacted by climate change through sea-level rise and increased intensity and frequency of extreme events due to the higher sea level that creates more severe coastal flooding (IPCC 2022; Vitousek et al. 2017). 

1 3 

Hydrogeology Journal (2024) 32:577–600 

580 

**Fig. 1** Study location map; **a** Urban Christchurch shallow groundwater monitoring networks, showing the surface lithology of the lowlying Heathcote-Avon-Styx area over the Quaternary sediments of the Christchurch and Springston formations (Begg et al. 2015) at the 

edge of the Port Hills Late Cretaceous Neogene rocks; **b** Locator map indicating the study area location in New Zealand; and **c** Photograph of Travis Wetland, looking towards the Port Hills, showing vegetation indicative of shallow groundwater (photo by Bosserelle AL) 

### **Geological and geomorphological settings** 

The surficial geology of Christchurch consists of Quaternary unconsolidated sediments bounded in the west by the Canterbury Plains interbedded alluvial deposit sequence of glacial-outwash gravels and estuarine to shallow marine deposits from the surface to an average depth of 100 m below ground level (m BGL). In the east, a coastal sand dune system extends to the Holocene shoreline of the Pacific Ocean in Pegasus Bay, and in the south to Miocene volcanic rocks that form Banks Peninsula, in Christchurch known as the Port 

Hills (Begg et al. 2015; Brown et al. 1995). To the north, the Styx River/Puharakekenui (forthwith Styx River) catchment extends beyond the Bottle Lake Forest and the area is not fully included in this study due to the lack of groundwater information. Underlying the central city, the Christchurch Formation extends near the subsurface to the eastern suburbs and consists of a progradational coastal sequence of alluvial silt and sand deposits, drained peat swamps and estuaries, sand of fixed to semifixed dunes, and underlying marine fine sands. In the western suburbs, the Holocene Springston Formation is juxtaposed to the Christchurch Formation, with gravels 

1 3 

Hydrogeology Journal (2024) 32:577–600 

581 

and silt deposits from the Christchurch City north-western Waimakariri River outwash fan (Brown and Weeber 1992; White et al. 2010). The combined series of the Springston Formation and the Christchurch Formation have an average thickness between 10 and 40 m and constitute the shallow groundwater system where the water table is located (Fig. 1a). 

Geographically, the city of Christchurch is located primarily upon a flat and low elevation alluvial and coastal landscape. The location map of the study area shown in Fig. 1a includes the Ōtākaro/Avon River and Ōpāwaho/Heathcote River (forthwith Avon River and Heathcote River, respectively) draining the urban streams and storm water network to the coastline via the Ihutai/Avon-Heathcote Estuary (forthwith the estuary). The original landscape along the Avon River on the plains consisted of raupō reed ( _T. orientalis_ ) wetland with deep water-holding gullies and wet peaty grounds and vegetation indicative of shallow groundwater (Fig. 1c). The Christchurch area ‘Black Maps’ are historical maps and records, compiled in 1856 (Ngāi Tahu and Environment Canterbury 2019), and show the area before alterations by drainage and urbanisation. These maps provide a valuable record of the terrain that existed near the city before European settlement became fully established (Watts 2011; Wilson 1989). The Black Maps, showing waterways, wetland and vegetation, cover allow an estimation of subsurface groundwater conditions, originally done by White et al. (2007). Prior to development of urban Christchurch in the 1860s, and based on the vegetation classification shown in the ‘Black Maps’, the distribution of surface-water and wetland area, or near-surface groundwater covered 5,215 ha within the Avon-Heathcote area and up to the 10-m elevation contour line to the west in New Zealand Vertical Datum 2016 (NZVD2016) shown in Fig. 1a. Based on recent data collection via aerial photo interpretation and ground surveys completed by the Canterbury Regional Council in 2015 to 2016, there was less than 6% remaining of wetland areas due to urbanisation, ~300 ha, including the Travis Wetland (Fig. 1c). 

The 2010–2011 Canterbury Earthquake Sequence (CES) had major impacts on the area’s geomorphology, surface waters and groundwater (Hughes et al. 2015; Quigley et al. 2016) with significant changes to the hydrological and geological setting (Cox et al. 2012; Cubrinovski et al. 2012; Gulley et al. 2013). The scientific and geotechnical responses to the CES led to numerous studies of subsurface conditions that contributed to the expansion of the shallow groundwater monitoring network, and especially the high temporal resolution, used in this article. 

### **Historical groundwater studies in urban Christchurch** 

Historically, the Canterbury Plains and Christchurch area were described by early European settlers as highly 

productive land, provided it could be drained. The aim was to develop new settlements in the 1850s and add agricultural land value. The development, evolution and current state of Christchurch and its networks evolved around land drainage, transport and subsoil infrastructure that allowed the lowering of the water table. Information about the shallow groundwaters is originally found in geological descriptions from the first surveyors, academics, city systems engineers and planners (Chilton 1924; Haast 1879; Hercus 1942; Wigram 1916). The urban streams and tidal rivers originate from groundwater-fed springs where the surficial geology varies from high to low permeability sediments (Cameron 1992). Generally, extensive groundwater information and data in the Christchurch area have been focused on the deep gravel aquifers from which potable water is abstracted (Talbot and Bowden 1986; Wilson 1976). This was driven by the city water supply options that limited the use of surface water for consumption up to the mid-1860s for sanitary reasons. The Christchurch Drainage Board was subsequently created in 1876, which coordinated water-related and newly developed infrastructure systems from the nineteenth to the twentieth centuries, permitting insight into challenges upon a low-lying coastal urban centre with a shallow water table (Wilson 1989), which have not declined during the twentieth century (Cameron 1992). While it is difficult to establish a trend since 2000 with the sudden groundwater responses in 2011 from the CES (Gulley et al. 2013), the monitoring of the shallow groundwater and the number of studies considering the water-table aquifer increased significantly following the CES. 

The key studies on Christchurch shallow groundwater conducted post-earthquakes, e.g., van Ballegooy et al. (2014) and Rutter (2020) provided a summary of the effects on land and water levels, including a median and 85th percentile water-table surface (elevation and depth) used as baseline. Groundwater levels responded to the shaking, but not everywhere, and some persistent changes only happened in the eastern suburbs of the city. Where subsidence occurred, the water table lowered but might have since raised back at some locations (van Ballegooy et al. 2014). Groundwater levels generally fluctuate with variations of rainfall and river recharge at both interannual and seasonal scales (Rutter 2020). From west to east across the city, the median watertable position is between 5 m and less than 1 m below the ground level, and generally less than 2 m below the central city (Rutter 2020; van Ballegooy et al. 2014). The monitoring of the depth to the water table has become critical for hazards assessment since the CES such as liquefaction and additional sea-level rise impacts. A large number of shallow groundwater wells have been maintained since their installation after the CES and equipped to monitor the water-table depth. Analysing the dataset from the city’s shallow groundwater monitoring network is a unique opportunity to reflect 

1 3 

Hydrogeology Journal (2024) 32:577–600 

582 

on and examine the large number of records collected in a coastal city at shallow depths. 

### **Shallow groundwater monitoring well network** 

The Christchurch City Council (CCC) is the territorial government authority for Christchurch and the Canterbury Regional Council (CRC) is the local government authority for the wider Canterbury Region. This region is the largest by area in New Zealand and the second after Auckland by population. CRC manages the effects of using freshwater resources like groundwater, while CCC provides waterrelated infrastructure and manages the effects of natural hazards. 

Christchurch City Council acquired the Automatic Piezometer Project (APP) network used in this study from the New Zealand Earthquake Commission (EQC) in 2016, following the intense data collection for hazards and damage mapping from the CES. The APP network consists of 247 shallow groundwater sites equipped with loggers automatically recording the water-table elevation every 10 min (Fig. 1a). In addition, CCC owns a network of 32 shallow monitoring wells across the urban area to acquire longterm measurements of water-table levels. Five sites were destroyed and 27 sites are still being monitored manually on a weekly or fortnightly basis with up to 61 years of records at two sites (Linwood and Opawa; Fig. 1a). Three sites are now equipped with automatic loggers and telemetered settings for instantaneous visualisation of levels for remote access. CRC currently monitors shallow groundwater levels with automatic loggers at three sites across the city (Woolston, South New Brighton and Hoon Hay) where deeper aquifers are also monitored. In 2017, another three shallow sites were instrumented in the city centre to record water-table fluctuations and monitor for a rise in groundwater levels that would threaten critical infrastructure and buildings. 

## **Methods** 

The methods described in this section were used to explore the available data within coastal urban Christchurch, to characterise the shallow groundwater in relation to stressors and to analyse the groundwater levels for the classification of hydrographs from 2016 to 2020 (the workflow is illustrated in Fig. 2). Overall, the dataset of manual or automatic records was preprocessed to be used in the spatial analysis and the time series analysis using tools in a geographic information system (GIS) environment for mapping the output or using Python scripts. This study was enabled by a dense groundwater monitoring network providing continuous and automatic level measurements, recorded at a high-frequency time interval. 

### **Dataset selection** 

The monitoring sites used in this study were selected from the CCC and CRC shallow groundwater monitoring networks (Fig. 1a). Selection criteria for the groundwater sites included their location in urban Christchurch, with a median screen depth of 6 m below ground level and records available between 2016 and 2020. The study area covered the extent of Fig. 1, excluding the Port Hills above the 10-m elevation contour. Groundwater levels near the ground surface and the coastline dynamically fluctuated due to the interaction with surface-water features and the ocean, as well as direct recharge from rainfall events (Fig. 3). Daily rainfall and potential evaporation influenced all recorded groundwater hydrographs in urban Christchurch (New Brighton, Fendalton, St Albans and Woolston). In addition, groundwater fluctuations with the tide could be observed in New Brighton due to the high-frequency records; therefore, continuous measurements with automatic 10-min recorders provided more adequate data than discrete and manual measurements for the purpose of the study. Hence, data selection prioritised sites equipped with automatic recorders because high-frequency water level data can better describe groundwater dynamics (Peterson and Western 2018; Rotzoll and Fletcher 2013). 

Depth to groundwater was measured from ground level at each location. These measurements were converted to groundwater elevations (i.e., hydraulic head) by subtracting depth to groundwater from the DEM of the area, obtained from LIDAR (Land Information New Zealand 2020). In Christchurch, the DEM has some uncertainty owing to land movement and subsidence following earthquakes (i.e., the CES). As such, a measured depth to groundwater is likely to be more accurate than groundwater elevation, and depth to groundwater was used in the analyses. The closest sites were 120 m apart with mean and median distances of ~400 and 300 m, respectively, between nearest neighbours. The distribution of data points gave an estimate of the minimum cell size for surface interpolation described in the subsequent section ‘Spatial analysis methodology’. In this analysis, a 200-m grid size was used. 

### **Spatial analysis methodology** 

#### **Spatial interpolation** 

Spatial interpolation was applied to create surfaces of median depth to groundwater and groundwater elevation. ArcGIS Pro (ESRI Inc. 2019) was used to build a database of points with location information and groundwater measurements. The records with high temporal frequency, described in section ‘Shallow groundwater monitoring well network’, were processed prior to analysis so they can be compared and transformed as follows. Groundwater levels from the 

1 3 

Hydrogeology Journal (2024) 32:577–600 

583 

**Fig. 2** Methodology workflow 

manual and automatic time series were converted from depths below the measurement points to depths in m BGL and representative statistics for each monitoring site, e.g., the median and standard deviation, were calculated prior to interpolation. The median is a commonly used measurement of the central value of the data distribution and is preferable to the arithmetic mean as is not influenced by outliers commonly present in groundwater level datasets (Helsel et al. 2020). In addition to the calculated median depth to groundwater, variance and standard deviation of the depth to groundwater were used as measures of variability to describe and compare the selected groundwater sites over similar time periods (2016–2020). 

Groundwater levels were converted to elevations using a common datum (NZVD2016) before applying a single spatial interpolation to the survey data to obtain a digital groundwater elevation model. The geoprocessing tool “Topo to Raster” (Hutchinson et al. 2011) was applied to create a hydrologically correct interpolation derived from multiple sources (point, line and polygon). Surfaces at the coastline were constrained to either mean sea-level or zero depth to groundwater, with rivers and lakes used as control features 

where groundwater and surface water interact (recharge or discharge). 

The mean sea level (MSL) defined by Land Information New Zealand (LINZ) and measured by the National Institute of Water and Atmospheric Research (NIWA) was used to interpolate the water-table surface at the estuary and along the coastline. MSL is given at the Lyttelton standard port location in Banks Peninsula and is a recent 19-year average of 1.43 m above tide gauge zero or –0.218 m NZVD2016 (Land Information New Zealand 2018). The water table within the unconsolidated coastal aquifer was considered in direct hydraulic connection with the ocean, estuary, and tidal rivers and creeks (Befus et al. 2020). Therefore, surfaces created from the spatial interpolation method can assume coastal hydrogeologic connection to sea level. A buffer zone was created around the dataset (1,000-m radius from the groundwater site) and used to obtain a boundary for the interpolation. Within the 173-km<sup>2</sup> polygon, the data density of 1.6 measurement point per  km<sup>2</sup> described a locally dense observation network for mapping groundwater levels; however, the relatively large areas without groundwater sites (e.g., between Heathcote and Avon River catchments) revealed a lack of consistent coverage at the city 

1 3 

Hydrogeology Journal (2024) 32:577–600 

584 

**Fig. 3** Plots showing **a** daily rainfall ( _P_ ) and **b** potential evaporation ( _E_ p) at the Christchurch Gardens (National Institute of Water and Atmospheric Research (NIWA) Station 4858; Lat. –43.531, Long. 172.619). **c** Examples of shallow groundwater hydrographs at four 

locations in the study area, from October 2016 to January 2020, generated using PASTAS, an open source software for the analysis of groundwater time series (Collenteur et al. 2019) 

scale. Therefore, some interpolated surfaces presented in the results section were clipped to a smaller mask area than the original study region. 

#### **Spatial autocorrelation** 

Mapping the relationship between location and groundwater level fluctuations can reveal whether these variables are spatially autocorrelated. The spatial autocorrelation is a measure of similarity between values in a dataset in comparison with other values nearby. These relationships were explored here using the Moran’s I statistic (Mitchel and Scott Griffin 2021). The Moran’s I value can be positive or negative—a positive value is when spatial autocorrelation is shown and similar values of the dataset cluster geographically, and a negative value is when spatial autocorrelation is not shown, and the dataset is dispersed. In the context of this study, spatial autocorrelation can help answer the following question: Were the shallow water-table depth and small variations in groundwater level located in similar areas? If the answer is yes, the evidence showing that water-table fluctuation and shallow groundwater depth are related can be confirmed. The spatial autocorrelation tool from ArcGIS Pro (ESRI Inc. 2019) was used on both the location of the groundwater sites and the standard deviation values of the depth to groundwater at the same monitoring sites used for the interpolations. The standard deviation of the 

depth to groundwater is a measure of variability and describes the fluctuation of the water table from the mean, independently from the median value. 

The Moran’s I statistical analysis has its advantages for large measurement datasets. Using a Euclidean distance method here and a threshold of 1,000 m, this analysis can demonstrate the spatial dependence of the dataset and features. In addition, if the variables were spatially autocorrelated, the ArcGIS Pro statistics tool can perform a spatial cluster and outlier analysis also using the Moran’s I statistic (Mitchel and Scott Griffin 2021). The cluster and outlier analysis identifies whether neighbouring values are similar or not. This analysis provides robustness in the interpretation of the groundwater dataset distribution, hence verification of the variable spatial autocorrelation. 

### **Time‑dependent data analysis methodology** 

#### **Trends analysis** 

Trends analysis of the shallow groundwater levels was completed using the Time Trends software package (NIWA 2021) to evaluate whether the water table is getting shallower or deeper relative to the land surface. Time Trends software uses the Mann-Kendall statistical test, and for this analysis, the seasonal Kendall test was used (Hirsch 

1 3 

Hydrogeology Journal (2024) 32:577–600 

585 

and Slack 1984; Kendall 1975; Mann 1945). The seasonal Kendall test can include data gaps and incorporates the seasonal variation of water levels and was used in this analysis because annual rainfall patterns influence groundwater time series. Preferably, the time series for trends test should exceed several decades; however, trends exist over varying time scales and the analysis of trends is a good approach for any defined period of time (Helsel et al. 2020). The duration of the monitoring history is generally one of the criteria for selecting sites in the database. In Christchurch, the longterm, mostly manual, record of the shallow groundwater levels was interrupted by the CES and this sudden shock introduced challenges in the data analysis. Recent groundwater level trends were estimated using time series at a daily time step from 2016 to 2020 at the 245 monitoring sites of the CCC APP network. Then, a longer period available for some shallow groundwater monitoring sites prior the 2010–2011 CES was also evaluated, so recent trends can be compared against historical trends. 

#### **Clustering analysis** 

Clustering of time series is a field in machine learning that allows the classification of time-dependant variables based on measures of similarity (correlation distances) and is commonly called clustering analysis (CA; Wang et al. 2006). A minimum requirement to perform the analysis is that the input numerical dataset is standardised and follows a normal probability distribution. Pre-processing therefore includes parametric transformation of the data to be close to a normal Gaussian distribution. This was achieved through unitvariance normalization and mean detrending using a power transform function from the Scikit-learn package in Python (Pedregosa et al. 2011). The nonhierarchical k-means CA algorithm was used with dynamic time warping (DTW) as the distance metric instead of the Euclidean alternative, using the tslearn package in Python, made available on GitHub by Tavenard et al. (2020). DTW allows time series to be locally stretched when they are being compared to improve the chance of finding matching patterns. 

The approach in this article used a CA method based on k-means to analyse the time series for groundwater levels with a predetermined number of clusters. The main advantage is the ability to deal with large temporal datasets, but the principal disadvantage is the computational time. A method comparison was achieved by Haaf and Barthel (2018) between the selected CA, other classification algorithms and the commonly used principal component analysis with CA (Hannah et al. 2000; Moon et al. 2004; Upton and Jackson 2011; Winter et al. 2000). Each grouping method has advantages and issues, and none in particular was prescribed for groundwater hydrograph grouping. The availability of the tool tslearn, a recent code for time series data 

machine learning application, makes the selection of the grouping method easy to implement. 

Data used for CA and classifying hydrographs are usually regionally distributed, and issues over the range and irregularity of record frequency (weekly or monthly) are common (Bloomfield et al. 2015; Moon et al. 2004; Winter et al. 2000). In this study, the continuous 10-min logger records enabled a resampling of groundwater levels every 4 h. All groundwater sites selected for the CA were located in the same aquifer (upper Christchurch and Springston formations), at a shallow depth and remain at the local urban scale. Grouping visually similar-looking groundwater hydrographs is also widely used to delineate and classify yearly, intraand inter-annual periodicity and dominant patterns (Barthel et al. 2022; Haaf and Barthel 2018). It is possible to achieve classification by eye for 100–1,000 hydrographs and sometimes it is necessary to improve the general knowledge of the groundwater system. There are benefits to visual and manual classification, but the approach is also limited by subjectivity and poor reproducibility of the results. For this reason, visual classification was not attempted, as all groundwater hydrographs were very similar based on their location. 

The depth of the selected groundwater monitoring dataset was also considered an advantage as it removed the bias introduced by inherited hydrogeological characteristics (e.g., aquifer groups). The classification focused on shape-based similarities or features or patterns from the hydrographs rather than on aquifer characteristics. The approach involves the detection of different system responses such as river discharge or groundwater recharge, controlling factors, such as distance from surface-water feature, thickness of the unsaturated zone, and irregularities (Barthel et al. 2022; Heudorfer et al. 2019). After experimenting with different numbers of clusters from 2 to 5, the number of clusters was set at four. Classification with a higher number of clusters introduced variability in the interpretation of the results and some clusters obtained only one site, while two or three clusters did not differentiate the sites adequately. Once the clusters were established, some common features were compared to establish the relationship between the sites. The CA used a 39.5month dataset from October 2016 to January 2020, the size of a 210 × 7212 matrix, which was the longest overlapping period for 210 sites without significant gaps at 4-h intervals. 

#### **Cross‑correlation analysis** 

Cross-correlation analysis (CCA) is a signal processing method that is used to quantify the similarity between signals with different lags. In this study, CCA was applied to groundwater level and ocean level time series data measured at the Sumner tide gauge (Land Information New Zealand 2021) and shown in Fig. 1a near the Sumner beach to the south of Christchurch. This method established the 

1 3 

Hydrogeology Journal (2024) 32:577–600 

586 

**Fig. 4  a** Interpolated map of median depth to groundwater from ground level and standard deviation of the depth to groundwater at the measurement sites, **b** Interpolated groundwater surface elevation in NZVD2016 for 

urban Christchurch, showing the MHWS contour projected onto the median groundwater elevation to demonstrate the interpreted areas currently below the highest level of the tide 

1 3 

Hydrogeology Journal (2024) 32:577–600 

587 

relationship between fluctuations in shallow groundwater levels and oceanic effects through the tidally influenced rivers. Equations defined by Thomson and Emery (2014) and given in Setiawan et al. (2023) were used. The means of each time series were subtracted, but the original magnitude of fluctuations was maintained to quantify the amplitude related to ocean levels. This method has been used previously for smaller datasets and in different hydrogeological settings but also to investigate tidal influence in a multilayered coastal aquifer setting (Kim et al. 2008; Setiawan et al. 2023). The correlation coefficient ranges from 0 to 1 and higher values indicate a stronger relationship between the two time series. The discretisation of the tide signal in the time series used four groups of increments of 0.25 of the cross-correlation coefficients. 

## **Results** 

### **Groundwater surfaces and water‑table characterisation** 

#### **Depth to groundwater** 

The median depth to groundwater was summarised at 265 monitoring sites within the study area for the period 2016 to 2020 and an interpolated depth to groundwater surface map was developed in the GIS environment (Fig. 4a). The map shows that the water table exists at shallow depth below much of Christchurch. The observations showed a mean depth to groundwater of 1.39 m BGL. Approximately 62% of the interpolated area had median depth to groundwater of ≤1 m BGL (termed very shallow hereafter), 35% had median depth to groundwater between 1 and 2 m BGL (termed shallow hereafter) and only 3% had median depth to groundwater greater than 2 m BGL. The interpolated surface of the median depth to groundwater had a vertical accuracy to observations that can be statistically estimated with the root mean square error (RMSE). The RMSE of 5% is the percentage-based difference between the measured and interpolated values. This value was derived from the ratio between the square root of the mean squared deviation (0.42 m) and the range of measured values (8.06 m). Overall, the surface model showed an adequate representation of the observation, although certain instances of local overestimations and underestimations are discussed in section ‘Limitations and recommendations for practitioners’. 

The standard deviations of the depth to groundwater records were calculated for each hydrograph at these 265 monitoring sites used for interpolation. A small standard deviation of the depth to groundwater (≤0.3 m) was observed at 91% of the monitoring sites and only six groundwater records (which are part of the CCC discrete 

and long-term shallow piezometer network) have standard deviations exceeding 0.5 m. The mean of the standard deviation of the dataset was 0.18 m and reflects the low variability of groundwater depths across the area. Descriptive statistics of the shallow groundwater monitoring sites are given in Table S1 in the electronic supplementary material (ESM). 

#### **Median groundwater elevation** 

The median groundwater surface elevation was derived from high-frequency field measurements (depth to groundwater below ground level) from 2016 to 2020 and interpolated. Groundwater flowed from the west to the east below the city, following a regional slope from the mountains to the ocean (Fig. 4b). The Christchurch water table was gently sloping from inland to the coast with indents from the tidally influenced rivers and the estuary. These indents in the interpolated potentiometric surface indicated groundwater diffuse discharge to surface waters and/or the drainage network. The contours of the median groundwater elevation between 2016 and 2020 demonstrate that groundwater seepage occurs through the beds of rivers, streams and drains, along parts where the surface-water network intersect the water table. 

Tidally influenced segments of the two major rivers (Avon River and Heathcote River) were located up to the extent of the projected mean high water springs (MHWS) elevation into the groundwater surface. The MHWS is an average of the high sea level during the large spring range of the tide and transformed into an elevation of 1.368 m NZVD2016. The area between the coastline and the MHWS contour projected on the groundwater elevation represents a zone of the water table with an extremely flat gradient (Fig. 4b). This area has poor drainage and a strong connection between groundwater and surface-water features. From the coastline and along the estuary to the Ensors Road bridge in Opawa along the Heathcote River and up to the Fitzgerald Avenue bridge in the central city area along the Avon River, the water table lies below the MHWS elevation (Fig. 4b). In the eastern suburbs of Christchurch, the area defined from the coastline to the elevation contour of the MHWS in the groundwater elevation surface is likely to have issues of shoaling shallow groundwater and future flooding related to impacts of sea-level rise. 

### **Spatial clusters, outliers and trends analysis** 

The spatial clusters and outliers analysis was completed on the standard deviation values of the depth to groundwater for the period from 2016 to 2020 at 265 monitoring sites. The Moran’s I statistical analysis revealed that neighbouring values of standard deviation were similar and aggregated in the same geographical areas, establishing the spatial 

1 3 

Hydrogeology Journal (2024) 32:577–600 

588 

autocorrelation of the interpolated parameters. The spatial clusters analysis resulted in two groups of high and low values of the water-table depths’ standard deviation, spatial clusters 1 and 2, respectively. Outliers for each group (outliers 1 and 2) are also given and are the locations that spatially do not correlate to the surrounding values. The analysis indicated clustering of high values of standard deviation (spatial cluster 1 and standard deviation greater than 0.3 m) located in Avonside, Richmond and Hoon Hay (Fig. 5a). The clustering of low values of standard deviation (spatial cluster 2 and standard deviation lower than 0.1 m) occurred in areas directly north of the central city area throughout Fendalton, Merivale, St Albans and Edgeware and near Travis Wetland (Fig. 5a). 

Overall, 27% of the shallow groundwater monitoring network positively correlated spatially, which means 75 groundwater sites formed clusters, either of low values of standard deviation or high values of standard deviation. Within spatial cluster 2, 55% of the groundwater monitoring sites were also located in the interpolated area where the depth to groundwater was less than 1 m BGL (very shallow). The majority of sites (80%) with low standard deviation values, smaller than 0.15 m, characterising small variation in groundwater levels also had a median depth to groundwater within 1.5 m BGL; this spatial cluster 2 suggested a good correlation between the shallow water table and small fluctuations. The spatial cluster 1 of high standard deviation values, greater than 0.20 m, showed median depth to groundwater between 1 and 3 m BGL and the variations in water levels here were large relative to this spatial cluster 2 during the period of the analysis. The Moran’s I clusters described that the groundwater level fluctuations and the median depth to groundwater were spatially correlated in the shallow groundwater system of the Christchurch urban area. The results of the spatial autocorrelation analysis also indicated that the dataset contained 10 outliers in both groups (outliers 1 and 2, Fig. 5a). The locations of the outliers indicated groundwater sites with likely issues with monitoring records that would need to be investigated to establish the cause of the discrepancy. 

The assessment of trends over time using the seasonal Kendall test and slope analysis was performed on two datasets. First, the analysis ran using the recent time series of the depth to groundwater from the APP network and then the historical time series from the CCC long-term shallow piezometers pre-CES. The results of the trends test showed spatially consistent patterns of change across the Christchurch urban area (Fig. 5b). The time series analysis for trends of depth to groundwater classified the monitoring sites into five groups with decreasing or increasing trends (A–D) and trend unlikely (E). Decreasing and increasing trends groups were separated in two with either (1) trend as likely as not and trend possible (A and C); (2) trend likely, very likely and trend virtually certain (B and D). Over the period 2016–2020, the trend analysis 

demonstrated that 40% of the groundwater monitoring sites had a decreasing trend (B; depth to groundwater was decreasing, i.e., the water table is rising). An increasing trend (D) was determined at 46% of the sites (depth to groundwater was increasing i.e., the water table is lowering). 

A small number of sites (14%) show unlikely trends (E), or either decreasing and increasing trends with low likelihood (A and C). The results of the trend analysis on the APP sites only showed a short-term evolution (less than 4 years) of the shallow groundwater levels in response to hydrological variations, anthropogenic influences and hydrogeological settings (small triangles on Fig. 5b). In addition, the trends of the historical shallow groundwater sites were established using the CCC long-term shallow piezometers during the record period pre-CES (before 2010). The trend analysis demonstrated that 32% of the groundwater monitoring sites pre-CES had a decreasing trend (B) illustrated as large red triangles. The trend analysis also showed that 50% of the groundwater monitoring sites pre-CES had an increasing trend (D) illustrated as large yellow triangles in Fig. 5b. Also, a small number of sites (18%) show unlikely trends (E), or either decreasing and increasing trends with low likelihood (A and C). Overall, the analysis of the two datasets, recent and historical, showed that increasing trends were dominant across the urban area with more yellow triangles on the map than red; and that the groundwater levels got deeper during the record periods for 124 monitoring sites. However, a large amount of shallow groundwater monitoring sites had decreasing trends and groundwater levels got shallower at 106 sites for the studied period (red triangles), with the possible cause of the groundwater rise unexplained. 

### **Hydrographs classification** 

#### **Clustering** 

The k-means algorithm was used in the CA to classify the groundwater hydrographs in a Python environment. The analysis determined the classification of four clusters and enabled the identification of time series that were geographically related based on normalised groundwater levels. The analysis identified similarities in each cluster shown as stacked hydrographs in Fig. 6a with the mean of each cluster. The interpretation of the clusters was difficult unless converted back to depth to groundwater in Fig. 6b. The clusters ranged in sizes from 15 hydrographs in cluster 1 to 106 hydrographs in cluster 3, whereas clusters 2 and 4 had 43 and 46 hydrographs, respectively. Cluster 1 in Fig. 6b had a typical flashiness to their structure related to the frequency of the fluctuations with sharp peaks—‘topology of groundwater dynamics’, descriptions from Heudorfer et al. (2019). The influence of rainfall recharge with some flashy events, was also present in cluster 2 in Fig. 6b; however, 

1 3 

Hydrogeology Journal (2024) 32:577–600 

589 

**Fig. 5  a** Spatial clusters of similar standard deviation and outliers distribution with the interpolated shallow groundwater area (blue); **b** Recent (2016–2020) hydrographs trends of the automatic piezometers network (small triangles) with shallow groundwater interpolated area 

(blue) and groundwater levels trends from the CCC long-term shallow piezometers (large triangles). Decreasing trends (red) indicate that depth to groundwater decreased and increasing trends (yellow) indicate that depth to groundwater increased 

1 3 

Hydrogeology Journal (2024) 32:577–600 

590 

the dominance of inter-annual variation was greater in some hydrographs of this cluster. While the frequency of rise and fall in groundwater levels was similar for clusters 3 and 4, these two clusters also included hydrographs influenced by tides and dewatering in Fig. 6b. 

The spatial distribution of the clusters shown in Fig. 7a also indicated that the clusters were spatially correlated. Cluster 1 had a tight grouping located in the north-west corner of the central city area, while cluster 2 tended to focus on the lower part of the Avon River catchment but away from the riverbanks. Groundwater sites of cluster 4 were present along the tidal parts of the rivers as well as in the north-east corner of the central city area. Cluster 3 was located in the Heathcote River catchment and the known very shallow to shallow groundwater area of St Albans and near Travis Wetland. The relationship between clusters and features (i.e., groundwater levels, associated standard deviation and the distance of the monitoring site to the streams or rivers) was compiled following the CA using box plots (Fig. 7b). The box plots showed that cluster 1 was positively correlated to two features, i.e. the low values of the standard deviation of median depth to groundwater and the distance to the nearest surface water; moreover, the sites of cluster 1 were all located within 200 m from surface water. For the other clusters 2–4, there was no clear feature correlation. Cluster 2 sites had the largest span of locations, from next to the rivers to further inland, and also the broadest range in standard deviation. 

#### **Focus on the groundwater tidal dynamic regime** 

Four tidal groups were obtained using CCA between ocean and groundwater levels during the period of the last 7 days of 2019, between the 25th and the 31st of December, at the start of the driest consecutive 6-month period between 2016 and 2020. The distribution of the tidal groups (groups 1–4) classified the groundwater hydrographs in increments of 0.25 of the cross-correlation coefficient, with group 1 being the most correlated and group 4 being the least correlated to the oceanic tidal signal (Fig. 8a). The larger the maximum crosscorrelation coefficient between a group and the ocean levels, the stronger the tidal influence. Tidal signals were most prominent in the groundwater levels of group 1. Most of the hydrographs in group 4 were straight lines (i.e., no correlation to the tide), but some showed other fluctuations, related or not to the ocean levels. The relationship between groups and features (here the distance of the monitoring site per catchment to the nearest river or the coastline) was plotted using box plots in Fig. 8b. The main results from CCA revealed that the closer the groundwater monitoring site to the tidal rivers, the higher the correlation to the ocean levels. Groups 1 and 2 with the strongest tidal influence were located near a river or the coastline, as shown by the inset map in Fig. 8b. These findings are preliminary and additional calculations of 

the tidal efficiency could be used to analyse the relationship and lag time between the sea, estuarine rivers, and groundwater. Further investigations such as feature extraction for the groundwater time series data (e.g., discrete wavelet transform or the discrete Fourier transform), initiated for some riparian monitoring sites by Setiawan et al. (2023), may help explain other features and hydrogeological processes. 

## **Discussion** 

The findings from this study show pervasive regions of shallow water table within 1 m below ground level under the coastal city of Christchurch. This causes a series of issues including poor drainage and impacts on infrastructure systems, which increases the risk of flooding. The presence of shallow groundwater has been documented in most parts of the low-lying areas in this region below the 10 m elevation contour and near the tidal rivers, along the estuary and the coastline. Shallow groundwater is observed due to various conditions like surficial geology, climate and geomorphology, such as in Christchurch and similar coastal urban areas and causes poor drainage. Most low-lying regions, floodplains and coastal cities that experience land subsidence and have shallow water tables are also prone to flooding (Bagheri et al. 2021; Becker et al. 2022). 

Urbanisation has exacerbated the problem of rising water tables due to increased infiltration causing infrastructure inefficiency and pollution (Foster 2001), and therefore also has increased the risk of flooding. In the long term and under future SLR conditions, the area defined from the coastline to the elevation contour of the MHWS where it intersects the water table is likely to be impacted by the most frequent and extreme flooding and issues related to the stormwater system. The current challenges for urban water and groundwater management in Christchurch, like any coastal city, are in low-lying areas where the natural drainage is difficult. To reduce the undesirable effects of shallow groundwater, urban water must be managed and restored to a usable and natural state, such as through improving water quality and providing adequate storage in wetlands and lakes. For this purpose, it is important to characterise the hydrogeological system and integrate shallow groundwater into urban water management. A common policy issue related to urban groundwater and identified by Foster et al. (2011) was future drainage problems. Under the current and future climate conditions, the main implication is the difficulty with improving and managing infrastructure for coastal low-lying cities. It is anticipated that some urban areas are more susceptible to flooding and infrastructure damage due to poor drainage conditions and proximity to the streams or river networks with shallow groundwater. 

Shallow groundwater hydrographs are typically influenced by natural hydrological processes and levels fluctuate with rainfall recharge and river interactions but can also vary 

1 3 

Hydrogeology Journal (2024) 32:577–600 

591 

**Fig. 6** Clusters 1–4 of hydrographs plotted **a** for the normalised groundwater levels (zero-mean, unit-variance), with the mean of each cluster in red, and **b** when converted to depth to groundwater below ground level (m BGL) 

from anthropogenic processes (Becker et al. 2022; Schirmer et al. 2013; Vázquez-Suñé et al. 2005). Decreasing groundwater levels in Christchurch were consistent with the gradual decreasing trend of rainfall between 2016 and 2020. The groundwater monitoring sites in this study followed similar 

recharge patterns geographically and had similar characteristics, such as median depth to groundwater and standard deviation, within spatial clusters. However, the water table rose at a significant number of shallow groundwater sites and did not follow the decreasing trend in rainfall between 

1 3 

Hydrogeology Journal (2024) 32:577–600 

592 

**Fig. 7  a** Clusters location map showing Christchurch Central City (red polygon) and the surface-water local catchments (black lines) and **b** box-whisker plots of selected features (median value of the 

depth to groundwater, top; standard deviation of the median value, middle; and distance from the streams or rivers (surface water), bottom) of all clusters 

2016 and 2020, potentially due to the sealing of sewer networks (Becker et al. 2022). In other locations, Attard et al. (2016a, b) have demonstrated that large underground structures can also disturb groundwater flow and induce a rise in water levels, in addition to major decommissioning of abstraction. Groundwater infiltration into networks due to aging pipes acts as additional drainage of a shallow water table but also increases the urban vulnerability to groundwater flooding (Budd et al. 2020; Su et al. 2020; Thorndahl et al. 2016). In Christchurch, recent trends at investigated sites were located near shallow to very shallow water table where the groundwater levels were getting closer to the land surface (i.e., groundwater shoaling). The analysis of temporal trends in groundwater wells, ponds and the relationship with sea-level rise by Smith and Medeiros (2019) suggested that monitoring sites close to the coastline were more responsive to the increase in MSL. In addition, they established increasing trends in groundwater levels for a longer period than this study and related shorter-term variation due to precipitation contribution. Monitoring water levels in the Christchurch lakes, rivers and the estuary more 

attentively could support further analysis to explore relationships between the hydrological processes of these system relative to groundwater and sea-level rise. Hypothetically, the groundwater sites with increasing trends could indicate signs of land subsidence, contributing anthropogenic drivers (i.e., interaction with infrastructure water-related networks) or evidence of rising water levels with sea-level rise. Those locations, now identified, might guide future research and investigations of the possible cause of the groundwater rise. 

In the subsurface, infrastructure systems are at risk of being impacted by shallow groundwater under sea-level rise. The subsurface pipes and water-related infrastructure can possibly interact with the shallow groundwater in urbanised low-lying areas (Liu et al. 2018; Schirmer et al. 2013; Vázquez-Suñé et al. 2005). The stormwater, wastewater and water supply pipes have the potential to act as drains exposed to leakage or seepage as the infrastructure ages. Case studies in the US, and in particular in Hawaii and New Jersey, investigated and simulated groundwater infiltration and rising levels on damaged or repaired sewer pipes (Hummel et al. 2018; Su et al. 2020). Those studies 

1 3 

Hydrogeology Journal (2024) 32:577–600 

593 

**Fig. 8  a** Groups of hydrographs from the most correlated to the tidal signal (group 1) to the least correlated to the tidal signal (group 4); **b** Box-whisker plots between the correlation coefficient in 0.25 classes 

(groups 1–4) and the distance from the nearest river or coastline; and the location map showing the spatial distribution of the groups 

1 3 

Hydrogeology Journal (2024) 32:577–600 

594 

tested the sensitivity of parameters and concluding that the infiltration into infrastructure systems was the most affected by shallow water-table elevation and hydraulic conductivity values (Budd et al. 2020; Liu et al. 2021). Urban water management under climate adaptation is a growing field that urgently needs to consider the integration of groundwater, flood risk and stormwater infrastructure systems. 

Compound flooding, where multiple flooding pathways can occur simultaneously, is expected to increase in frequency and intensity due to sea-level rise and climate change effects on large rainfall events (Rahimi et al. 2020; Sangsefidi et al. 2022; Wahl et al. 2015). Infrastructure asset and local authority engineers should be aware of the shallow groundwater conditions and areas vulnerable to groundwater flooding in coastal flooding assessments. In the near future, the situation could increase coastal risks of flooding when the groundwater rises under sea-level rise and no mitigation measures are in place to support additional drainage requirements. The relationship between shallow groundwater and coastal hazards is not well defined (Bosserelle et al. 2022). Further research studies are recommended to characterise the distribution and the responses of shallow groundwater to stressors in different settings, e.g., urban versus rural. 

The groundwater depth below ground level is especially important in the Christchurch urban area due to the liquefaction vulnerability of the site (Cubrinovski et al. 2012; van Ballegooy et al. 2014) and is relevant to fluvial and coastal flooding hazards (Hughes et al. 2015). Increasing natural hazards and sea-level-rise-induced groundwater flooding are emerging concerns that have the potential to affect many urbanised environments in coastal low-lying urban regions. The causes of infrastructure damage and increased flood risk due to groundwater rise could be also related to land subsidence, the ageing of repaired pipes and climate-changeinduced-sea-level rise. Investigations in the last decade primarily indicate that further work is needed in this area. 

Based on the results of the clustering analysis, classifying the shallow groundwater hydrographs per drivers seemed extremely difficult due to overlapping influences such as tidal signal, rainfall recharge and anthropogenic stressors (i.e. dewatering). The main challenge of clustering analysis is due to data that are correlated to each other, i.e. groundwater levels. The results in this article show that with a highdensity network, spatial clusters can indicate where data correlate and gain some insight into the responses of shallow groundwater to stressors. Sartirana et al. (2022) identified urban management areas for different groundwater conditions using clustering analysis of groundwater-level time series. In order to achieve an improved urban groundwater management plan for a coastal city like Christchurch, an optimised and well-structured groundwater monitoring network is needed. Based on the main findings of this study, suggestions for an improved shallow groundwater 

monitoring network in Christchurch are provided in the subsequent section ‘Limitations and recommendations for practitioners’. 

The spatial clustering showed that some sites with similar trends and statistics, and not within the recent interpolated areas of shallow median depth to groundwater (≤1 m), can be filtered down to allow redeployment of automatic data loggers to new locations. Finally, the utilization of clustering analysis for hydrograph classification has not only identified regions with comparable groundwater behaviours but has also substantiated the existence of distinct monitoring clusters. These outcomes further validated preliminary insights based on visual inspections, highlighting the complexities associated with classifying hydrographs in urban Christchurch. An important observation for groundwater researchers and coastal managers emerged from the analysis—the majority of groundwater hydrographs exhibited analogous shapes and distributions. This coherence hints at the potential for enhancements in the current placement of individual monitoring sites within the shallow groundwater monitoring network. In essence, these findings underscore the need for a review and an optimised spatial arrangement of monitoring locations to capture the variability in urban groundwater dynamics. This was an expected result due to the short period of records analysed (i.e., <4 years) and the scale of the study area; local and situated in similar geological and climate conditions. In the timeframe investigated, the use of big data mining and machine learning algorithms did not suggest the possible interaction between subsurface infrastructures and groundwater. 

The data analysis demonstrated some temporal and spatial trends but did not reveal the overall anthropogenic influences with the impacts of urban modifications on groundwater levels. The effects of underground structures such as drainage lines or impervious barriers, would be best captured by modelling approaches (Attard et al. 2016a, b), in particular the extent of the disturbance and adverse effects of rising groundwater levels in urban settings (Johnson 1994; La Vigna 2022). More needs to be understood about urban hydrogeology and interacting infrastructure systems to enable optimal management in the coastal system and for investing in climate adaptation and flooding protection. The characterisation of groundwater level variations and the determination of the shallow to very shallow groundwater areas in Christchurch, together with the classification of monitoring sites, can inform future monitoring requirements and the following recommendations. 

### **Limitations and recommendations for practitioners** 

This study has limitations due to the spatial distribution of the councils’ dense shallow groundwater monitoring network. Several large gaps covering areas along the coastline and near the estuary suggest that monitoring sites could be 

1 3 

Hydrogeology Journal (2024) 32:577–600 

595 

placed in better locations. The development of a water-table depth surface or elevation model using a spatial interpolation method is geographically limited by existing monitoring sites and water management operations such as drainage via urban drains, surface-water courses and the stormwater network. The surfaces created to characterise the shallow groundwater distribution have a 200-m-cell resolution. Seeking a finer resolution is at this stage unjustified due to the data coverage. 

Statistics from the time series were solely based on depth to groundwater as the water-table elevation did not include land movement, hence providing a more reliable indication of the thickness of the unsaturated zone. However, limitations include the locations that create discharge features driven by the low-lying nature of the area. Where groundwater levels were measured close to land surface (<0.3 m BGL) in drainage basins, the interpolation tends to overestimate the depth to groundwater at shallow depths. Some discrepancies were noted along the coastline where the CRC shallow groundwater monitoring (near the estuary at the Heathcote River mouth and in South New Brighton) recorded median values of 1.5 and 2.4 m BGL, respectively. The interpolated values at those locations, 0.7 and 0.9 m BGL, were underestimated and were forced nearer to the surface by the coastline boundary. A depth to groundwater of 0 m BGL at the coast limiting the watertable model was assumed, which might not entirely reflect the groundwater conditions locally, especially near tidally influenced boundaries at the ocean or estuary intersections. 

Recommendations from this study include the implementation of a future work programme that would ideally use the results of this study (data exploration) to recommend an optimization of the locations for groundwater monitoring (optimal network design) for both water levels and quality, i.e., salinity (Bhat et al. 2015; Esquivel et al. 2015; Hosseini and Kerachian 2017). Ideally, the priority would be to re-establish shallow groundwater monitoring sites that have been damaged, install new critical locations and maintain existing sites near the tidal rivers, the estuary and the coastline, while removing some redundant sites in spatial clusters. Areas where data are currently scarce and groundwater levels are currently unknown could also be prioritised for new monitoring sites. The dense groundwater monitoring network suggests that some equipment can be relocated, but not randomly based on the initial review of the monitoring sites in Christchurch (section ‘Shallow groundwater monitoring well network’). Bhat et al. (2015) demonstrated the use of special uniform spacing patterns (e.g. hexagonal or square) to determine the most efficient way to obtain new data points and improve the interpolated surfaces. The network can be designed to follow an efficient evaluation of the existing groundwater sites to keep the historical record of measurements, include several new sites and upgrade current locations while minimising the costs. 

The findings of this study show preliminary evidence that the recent shallow groundwater areas can be delineated 

adequately and a positive correlation with neighbouring sites can be achieved. While shallow groundwater areas were identified in this study, no shallow groundwater level fluctuations immediately indicate challenges for infrastructure resilience. Important considerations include zones with shallow to very shallow groundwater that recently showed groundwater shoaling. These important sites where urban shallow groundwater have been observed at high-frequency intervals need to be the focus of continued monitoring. In the future, continuing the monitoring is recommended using sensors allowing continuous records which are more valuable than discrete measurements for further statistically significant studies of urban coastal shallow groundwater (Alley and Taylor 2001; Cheng and Ouazar 2003; Rau et al. 2020). 

## **Conclusions** 

The presence of a shallow to very shallow water table under the coastal city of Christchurch is an emerging concern. Early indications of shallow groundwater were given during the investigations following the series of earthquakes. The recent and continuous records of groundwater data strengthened the evidence of shallow groundwater levels which might affect critical infrastructure systems in the face of climate-changeinduced sea-level rise. To effectively explore the spatial and temporal measure of depth to groundwater at a coastal city scale, a remarkably dense dataset with high-frequency records was interrogated using five techniques, (1) geospatial interpolation, (2) spatial auto-correlation, (3) time series trends, (4) clustering and (5) cross-correlation analysis. 

Grouping hydrographs based on groundwater variation similarities described the characteristics of the shallow groundwater system. Responses to stresses such as rainfall events and stream flow were successfully classified using clustering analysis, while anthropogenic influences (dewatering) were challenging to capture due to the timeframe of the dataset. The response to tidal influence was more easily quantified using cross-correlation analysis rather than clustering analysis. Interestingly, the distance from tidal rivers was the principal factor that influenced the prominence of tidal signals in groundwater levels. More than the distance from the coastline, the distance from tidal rivers seemed to be the dominant vector of the influence of the ocean boundary on urban shallow groundwater, via the estuary system. 

The shallow water table in coastal cities and settlements can interfere with infrastructure and environmental projects. Living near groundwater and surface water can increase the risk of sea-level rise impacts on coastal and urban resilience. Therefore, evaluating factors influencing groundwater fluctuations in shallow coastal systems can indicate where and how the groundwater will rise under future sea levels. Before any changes can be detected in the coastal urban environment, 

1 3 

Hydrogeology Journal (2024) 32:577–600 

596 

adequate groundwater data need to be collected. Findings from the Christchurch City Council shallow monitoring network indicated that shallow groundwater is present under the coastal city, fluctuates and is likely to continue to shoal or emerge at some locations in the near future. With a pragmatic view, the Christchurch example of this article can inform environmental monitoring for cities worldwide, and simply explains that it is better to start and continue collecting data to reduce or remove as many uncertainties as possible. 

**Supplementary Information** The online version contains supplementary material available at https:// doi. org/ 10. 1007/ s10040- 023- 02745-z. 

**Acknowledgements** A repository of scripts and a sample dataset used throughout this research is available freely online from the corresponding author’s GitHub and on request. 

The authors would like to thank Shaun Thomsen and Tom Jones at the Environment Canterbury Regional Council, Pieter Havelaar, Hamish Sutton and Marty Flanagan at the National Institute of Water and Atmospheric Research Ltd (NIWA) for their support with data acquisition and verification of the groundwater network and environmental monitoring, Marion Schoenfeld, formerly at the Christchurch City Council, Tom Logan and Matthew Hughes from the University of Canterbury Department of Civil and Natural Resources Engineering for their helpful comments and discussions. The authors wish to thank the editors and reviewers, Kevin Befus and Mario Schirmer, whose helpful comments improved the manuscript. 

**Funding** Open Access funding enabled and organized by CAUL and its Member Institutions This work is supported by the Department of Civil and Natural Resources Engineering - University of Canterbury, Aotearoa New Zealand; and the Resilience to Nature’s Challenges research programme, Built Environment Theme (Horizontal Infrastructure), funded by the Ministry of Business, Innovation and Employment (MBIE). Leanne Morgan is supported by Canterbury Regional Council, New Zealand and the MBIE Future Coasts Aotearoa Contract C01X2107. 

### **Declarations** 

**Conflict of interest** On behalf of all authors, the corresponding author states that there is no conflict of interests. 

**Disclaimer** All data and content used in this article are licensed under Creative Commons; New Zealand Crown and the Department of Internal Affairs, on behalf of the Crown, licenses and allows copies, distribution and adaptation that content in accordance with the Creative Commons Attribution (CC-BY) 4.0 International Licence. 

**Open Access** This article is licensed under a Creative Commons Attribution 4.0 International License, which permits use, sharing, adaptation, distribution and reproduction in any medium or format, as long as you give appropriate credit to the original author(s) and the source, provide a link to the Creative Commons licence, and indicate if changes were made. The images or other third party material in this article are included in the article’s Creative Commons licence, unless indicated otherwise in a credit line to the material. If material is not included in the article’s Creative Commons licence and your intended use is not permitted by statutory regulation or exceeds the permitted use, you will need to obtain permission directly from the copyright holder. To view a copy of this licence, visit http://creativecommons.org/licenses/by/4.0/. 

## **References** 

- Alley WM, Taylor CJ (2001) The value of long-term ground water level monitoring. Groundwater 39(6):801. https:// doi. org/ 10. 1111/j. 1745- 6584. 2001. tb024 66.x 

- Attard G, Rossier Y, Winiarski T, Cuvillier L, Eisenlohr L (2016a) Deterministic modelling of the cumulative impacts of underground structures on urban groundwater flow and the definition of a potential state of urban groundwater flow: example of Lyon, France. Hydrogeol J 24(5):1213–1229. https:// doi. org/ 10. 1007/ s10040- 016- 1385-z 

- Attard G, Winiarski T, Rossier Y, Eisenlohr L (2016b) Impact of underground structures on the flow of urban groundwater. Hydrogeol J 24(1):5–19. https:// doi. org/ 10. 1007/ s10040- 015- 1317-3 

- Bagheri M, Hosseini SM, Ataie-Ashtiani B, Sohani Y, Ebrahimian H, Morovat F, Ashrafi S (2021) Land subsidence: a global challenge. Sci Total Environ. https:// doi. org/ 10. 1016/j. scito tenv. 2021. 146193 

- Barthel R, Haaf E, Nygren M, Giese M (2022) Systematic visual analysis of groundwater hydrographs: potential benefits and challenges. Hydrogeol J. https:// doi. org/ 10. 1007/ s10040- 021- 02433-w 

- Becker B, Reichel F, Bachmann D, Schinke R (2022) High groundwater levels: processes, consequences, and management. Water. https:// doi. org/ 10. 1002/ wat2. 1605 

- Befus KM, Barnard PL, Hoover DJ, Finzi Hart JA, Voss CI (2020) Increasing threat of coastal groundwater hazards from sea-level rise in California. Nature Climate Change 10(10):946–952. https:// doi. org/ 10. 1038/ s41558- 020- 0874-1 

- Begg JG, Jones KE, Barrell DJA (2015) Geology and geomorphology of urban Christchurch and eastern Canterbury. GNS Sci Geol Map 3. https:// www. gns. cri. nz/ our- scien ce/ land- and- marinegeosc ience/ te- riu-a- maui- our- conti nent/ regio nal- geolo gy/ urbangeolo gical- maps/ chris tchur ch/. Accessed 28 June 2020 

- Bhat S, Motz LH, Pathak C, Kuebler L (2015) Geostatistics-based groundwater-level monitoring network design and its application to the Upper Floridan aquifer, USA. Environ Monitor Assessment 187(1):1–15. https:// doi. org/ 10. 1007/ s10661- 014- 4183-x 

- Bloomfield JP, Marchant BP, Bricker SH, Morgan RB (2015) Regional analysis of groundwater droughts using hydrograph classification. Hydrol Earth System Sci 19(10):4327–4344. https:// doi. org/ 10. 5194/ hess- 19- 4327- 2015 

- Bosserelle AL, Morgan LK, Hughes MW (2022) Groundwater rise and associated flooding in coastal settlements due to sea-level rise: a review of processes and methods. Earth’s Future. https:// doi. org/ 10. 1029/ 2021E F0025 80 

- Böttcher F, Zosseder K (2022) Thermal influences on groundwater in urban environments: a multivariate statistical analysis of the subsurface heat island effect in Munich. Sci Total Environ 810:152193. https:// doi. org/ 10. 1016/j. scito tenv. 2021. 152193 

- Brown L, Weeber J (1992) Geology of the Christchurch urban area: 

scale 1: 50,000. https:// www. gns. cri. nz/ our- scien ce/ land- andmarine- geosc ience/ te- riu-a- maui- our- conti nent/ regio nal- geolo gy/ urban- geolo gical- maps/ chris tchur ch/. Accessed 28 June 2020 

- Brown L, Beetham R, Paterson B, Weeber J (1995) Geology of Christchurch, New Zealand. Environ Eng Geosci 1(4):427–488. https:// doi. org/ 10. 2113/ gseeg eosci.I. 4. 427 

- Budd E, Babcock RW, Spirandelli D, Shen S, Fung A (2020) Sensitivity analysis of a groundwater infiltration model and sea-level rise applications for coastal sewers. Water 12(3):923. https:// doi. org/ 10. 3390/ w1203 0923 

- Cameron SG (1992) A hydrogeological study of the interaction between Avon River baseflow and shallow groundwater, Christchurch, New Zealand. Thesis, The University of Canterbury. https:// ir. cante rbury. ac. nz/ handle/ 10092/ 8023. Accessed 28 June 2020 

1 3 

Hydrogeology Journal (2024) 32:577–600 

597 

- Chae G-T, Yun S-T, Kim D-S, Kim K-H, Joo Y (2010) Time-series analysis of three years of groundwater level data (Seoul, South Korea) to characterize urban groundwater recharge. Q J Eng Geol Hydrogeol 43(1):117–127. https:// doi. org/ 10. 1144/ 1470- 9236/ 07- 056 

- Cheng AHD, Ouazar D (2003) Coastal aquifer management: monitoring, modeling, and case studies. Lewis, Boca Raton, FL 

- Chilton C (1924) The Christchurch artesians and the city water supply. Lyttelton Times, Christchurch, New Zealand 

- Colenbrander S, Lazar L, Haddaoui C, Godfrey N, Lobo A, Clarkson H, Huxley R, Parnell S, Smith B, Smith S (2019) Climate emergency, urban opportunity: the unique and crucial roles of national governments. https:// eprin ts. white rose. ac. uk/ 155744/ 1/ Clima teEmerg ency- Urban- Oppor tunity- report. pdf. Accessed 20 Jan 2022 

- Collenteur RA, Bakker M, Caljé R, Klop SA, Schaars F (2019) Pastas: open source software for the analysis of groundwater time series. Groundwater 57(6):877–885. https:// doi. org/ 10. 1111/ gwat. 12925 

- Cox SC, Rutter HK, Sims A, Manga M, Weir JJ, Ezzy T, White PA, Horton TW, Scott D (2012) Hydrological effects of the M W 7.1 Darfield (Canterbury) earthquake, 4 September 2010, New Zealand. New Zealand J Geol Geophys: The 2010–2011 Canterbury Earthquake Sequence 55(3):231–247. https:// doi. org/ 10. 1080/ 00288 306. 2012. 680474 

- Cubrinovski M, Robinson K, Taylor M, Hughes M, Orense R (2012) Lateral spreading and its impacts in urban areas in the 2010– 2011 Christchurch earthquakes. New Zealand J Geol Geophys 55(3):255–269. https:// doi. org/ 10. 1080/ 00288 306. 2012. 699895 

- Daughney CJ, Raiber M, Moreau-Fournier M, Morgenstern U, van der Raaij R (2012) Use of hierarchical cluster analysis to assess the representativeness of a baseline groundwater quality monitoring network: comparison of New Zealand’s national and regional groundwater monitoring programs. Hydrogeol J 20(1):185–200. https:// doi. org/ 10. 1007/ s10040- 011- 0786-2 

- de Graaf I, Sutanudjaja E, Van Beek L, Bierkens M (2015) A highresolution global-scale groundwater model. Hydrol Earth Syst Sci 19(2):823–837. https:// doi. org/ 10. 5194/ hess- 19- 823- 2015 

- Debuisson J, Michalski E, Rampon G (1993) La remonté des nappes d’eau souterraine en site urbain: aspects techniques, socioéconomiques, réglementaires et juridiques [The rise of groundwater tables in urban sites: technical, socio-economic, regulatory and legal aspects].. Bureau de recherches géologiques et minières (France). Service géologique national. Rapport de synthèse, BRGM/RR-30288-FR. http:// infot erre. brgm. fr/ rappo rts/ RR30288- FR. pdf. Accessed 28 June 2020 

- Desbarats A, Logan C, Hinton M, Sharpe D (2002) On the kriging of water table elevations using collateral information from a digital elevation model. J Hydrol 255(1–4):25–38. https:// doi. org/ 10. 1016/ S0022- 1694(01) 00504-2 

- Esquivel JM, Morales GP, Esteller MV (2015) Groundwater monitoring network design using GIS and multicriteria analysis. Water Resour Manag 29(9):3175–3194. https:// doi. org/ 10. 1007/ s11269- 015- 0989-8 

- Farr G, Patton A, Boon D, James D, Williams B, Schofield D (2017) Mapping shallow urban groundwater temperatures, a case study from Cardiff, UK. Q J Eng Geol Hydrogeol 50(2):187–198. https:// doi. org/ 10. 1144/ qjegh 2016- 058 

- Foster SD (2001) The interdependence of groundwater and urbanisation in rapidly developing cities. Urban Water 3(3):185–192. https:// doi. org/ 10. 1016/ S1462- 0758(01) 00043-7 

- Foster SD, Hirata R, Howard KWF (2011) Groundwater use in developing cities: policy issues arising from current trends. Hydrogeol J 19(2):271–274. https:// doi. org/ 10. 1007/ s10040- 010- 0681-2 

- Grant ARR, Befus KM, Hart JF, Frame MT, Volentine R, Barnard P, Knudsen KL (2021) Changes in liquefaction severity in the San Francisco Bay area with sea-level rise. Geo-Extreme 2021, Savannah, GA, November 2021 

- Gulley AK, Ward NFD, Cox SC, Kaipio JP (2013) Groundwater responses to the recent Canterbury earthquakes: a comparison. J Hydrol 504:171–181. https:// doi. org/ 10. 1016/j. jhydr ol. 2013. 09. 018 

- Haaf E, Barthel R (2018) An inter-comparison of similarity-based methods for organisation and classification of groundwater hydrographs. J Hydrol 559:222–237. https:// doi. org/ 10. 1016/j. jhydr ol. 2018. 02. 035 

- Haast JV (1879) Geology of the provinces of Canterbury and Westland, New Zealand: a report comprising the results of official explorations. Geological Sciences Historical Collection, University of Canterbury, Christchurch, New Zealand 

- Habel S, Fletcher CH, Rotzoll K, El-Kadi AI, Oki DS (2019) Comparison of a simple hydrostatic and a data-intensive 3D numerical modeling method of simulating sea-level rise induced groundwater inundation for Honolulu, Hawai’i, USA. Environ Res Commun 1(4):041005. https:// doi. org/ 10. 1088/ 2515- 7620/ ab21fe 

- Habel S, Fletcher CH, Barbee MM, Fornace KL (2023) Hidden threat: the influence of sea-level rise on coastal groundwater and the convergence of impacts on municipal infrastructure. Annual Rev Marine Sci 16. https:// doi. org/ 10. 1146/ annur ev- marine- 020923- 120737 

- Hannah DM, Smith BPG, Gurnell AM, McGregor GR (2000) An approach to hydrograph classification. Hydrol Processes 14(2):317–338. https:// doi. org/ 10. 1002/ (SICI) 1099- 1085(20000 215) 14: 2< 317:: AID- HYP92 9>3. 0. CO;2-T 

- Helsel DR, Hirsch RM, Ryberg KR, Archfield SA, Gilroy EJ (2020) Statistical methods in water resources. US Geological Survey Techniques and Methods, book 4, chapter A3, 458 pp 

- Hercus AI (1942) A city built upon a swamp: the story of the drainage of Christchurch, 1850–1903. Christchurch Drainage Board (January 1, 1948), Christchurch, New Zealand 

- Heudorfer B, Haaf E, Stahl K, Barthel R (2019) Index-based characterization and quantification of groundwater dynamics. Water Resour Res 55(7):5575–5592. https:// doi. org/ 10. 1029/ 2018W R0244 18 

- Hirsch RM, Slack JR (1984) A nonparametric trend test for seasonal data with serial dependence. Water Resour Res 20(6):727–732. https:// doi. org/ 10. 1029/ WR020 i006p 00727 

- Hoover DJ, Odigie KO, Swarzenski PW, Barnard P (2017) Sea-level rise and coastal groundwater inundation and shoaling at select sites in California, USA. J Hydrol Region Stud 11(C):234–249. https:// doi. org/ 10. 1016/j. ejrh. 2015. 12. 055 

- Hosseini M, Kerachian R (2017) A data fusion-based methodology for optimal redesign of groundwater monitoring networks. J Hydrol 552:267–282. https:// doi. org/ 10. 1016/j. jhydr ol. 2017. 06. 046 

- Hughes JD, Vacher HL, Sanford WE (2009) Temporal response of hydraulic head, temperature, and chloride concentrations to sea-level changes, Floridan aquifer system, USA. Hydrogeol J 17(4):793–815. https:// doi. org/ 10. 1007/ s10040- 008- 0412-0 

- Hughes M, Quigley M, van Ballegooy S, Deam B, Bradley B, Hart D (2015) The sinking city: Earthquakes increase flood hazard in Christchurch, New Zealand. GSA Today 25(3). https:// doi. org/ 10. 1130/ GSATG 221A.1 

- Hummel MA, Berry MS, Stacey MT (2018) Sea level rise impacts on wastewater treatment systems along the US coasts. Earth’s Future 6(4):622–633. https:// doi. org/ 10. 1002/ 2017E F0008 05 

- Hutchinson MF, Xu T, Stein JA (2011) Recent progress in the ANUDEM elevation gridding procedure. Geomorphometry. https:// www. geomo rphom etry. org. Accessed Oct 2023 

- Inc ESRI (2019) ArcGIS Pro: release 2.4. Environmental Systems Research Institute, Redlands, CA. https:// www. esri. com/ en- us/ arcgis/ produ cts/ arcgis- pro/ overv iew. Accessed 28 June 2020 

- IPCC (2022) Summary for policymakers. In: Climate Change 2022: impacts, adaptation, and vulnerability. Contribution of Working Group II to the Sixth Assessment Report of the 

1 3 

Hydrogeology Journal (2024) 32:577–600 

598 

Intergovernmental Panel on Climate Change. Cambridge University Press. https:// www. ipcc. ch/ report/ ar6/ wg2/. Accessed 03/11/2022 

Johnson S (1994) Rising groundwater levels: engineering and environmental implications. In: Groundwater problems in urban areas. Conference Paper, Telford, London, England. pp 285–298 Kendall MG (1975) Rank correlation methods, 4th edn. Griffin, London Khatri N, Tyagi S (2015) Influences of natural and anthropogenic factors on surface and groundwater quality in rural and urban areas. Front Life Sci 8(1):23–39. https:// doi. org/ 10. 1080/ 21553 769. 2014. 933716 Kim J-H, Lee J, Cheong T-J, Kim R-H, Koh D-C, Ryu J-S, Chang H-W (2005) Use of time series analysis for the identification of tidal effect on groundwater in the coastal area of Kimje, Korea. J Hydrol 300(1–4):188–198. https:// doi. org/ 10. 1016/j. jhydr ol. 2004. 06. 004 

- Kim KY, Chon CM, Park KH, Park YS, Woo NC (2008) Multi-depth monitoring of electrical conductivity and temperature of groundwater at a multilayered coastal aquifer: Jeju Island, Korea. Hydrol Processes 22(18):3724–3733. https:// doi. org/ 10. 1002/ hyp. 6976 

- Knott JF, Elshaer M, Daniel JS, Jacobs JM, Kirshen P (2017) Assessing the effects of rising groundwater from sea level rise on the service life of pavements in coastal road infrastructure. Transport Res Record 2639(1):1–10. https:// doi. org/ 10. 3141/ 2639- 01 

- Knott JF, Jacobs JM, Daniel JS, Kirshen P (2019) Modeling groundwater rise caused by sea-level rise in coastal New Hampshire. J Coastal Res 35(1):143–157. https:// doi. org/ 10. 2112/ JCOAS TRES-D- 17- 00153.1 

- La Vigna F (2022) Urban groundwater issues and resource management, and their roles in the resilience of cities. Hydrogeol J. https:// doi. org/ 10. 1007/ s10040- 022- 02517-1 

- Lancia M, Zheng C, He X, Lerner DN, Andrews C (2020) Groundwater complexity in urban catchments: Shenzhen, southern China. Groundwater 58(3):470–481. https:// doi. org/ 10. 1111/ gwat. 12935 

- Land Information New Zealand (2018) New Zealand determined local mean sea level datums. https:// www. linz. govt. nz/ data/ geode ticsystem/ datums- proje ctions- and- heigh ts/ verti cal- datums/ localmean- sea- level- datums. Accessed 28 June 2020 

- Land Information New Zealand (2020) New Zealand Canterbury - Christchurch LiDAR 1m DEM, LINZ Data Service. https:// data. linz. govt. nz/. Accessed 20 Jan 2022 

- Land Information New Zealand (2021) Sea level data recorded at monitoring site: idegauge data SUMT. https:// www. linz. govt. nz/ produ cts- servi ces/ data/ types- linz- data/ sea- level- data/ sea- level- datadownl oads. Accessed 20 Jan 2022 

- Liu T, Su X, Prigiobbe V (2018) Groundwater-sewer interaction in urban coastal areas. Water 10(12):1774. https:// doi. org/ 10. 3390/ w1012 1774 

- Liu T, Ramirez-Marquez JE, Jagupilla SC, Prigiobbe V (2021) Combining a statistical model with machine learning to predict groundwater flooding (or infiltration) into sewer networks. J Hydrol 603:126916. https:// doi. org/ 10. 1016/j. jhydr ol. 2021. 126916 

- Mann HB (1945) Nonparametric tests against trend. Econometrica 13(3):245–259 

- May C (2020) Rising groundwater and sea-level rise. Nat Climate Change 10(10):889–890. https:// doi. org/ 10. 1038/ s41558- 020- 0886-x 

- Mitchel A, Scott Griffin L (2021) The Esri guide to GIS analysis, volume 2: spatial measurements and statistics, 2nd edn. Esri, Redlands, CA 

- Moon S-K, Woo NC, Lee KS (2004) Statistical analysis of hydrographs and water-table fluctuation to estimate groundwater recharge. J Hydrol 292(1):198–209. https:// doi. org/ 10. 1016/j. jhydr ol. 2003. 12. 030 

- Naranjo-Fernández N, Guardiola-Albert C, Aguilera H, SerranoHidalgo C, Montero-González E (2020) Clustering groundwater level time series of the exploited Almonte-Marismas aquifer 

Aquifer in Southwest Spain. Water 12(4):1063. https:// doi. org/ 10. 3390/ w1204 1063 

- Ngāi Tahu, Environment Canterbury (2019) Historic South Island survey maps: the black maps. https:// mapvi ewer. cante rbury maps. govt. nz/? webmap= 0db87 348ad ef459 5a919 94a3d c85ce fe. Accessed 28 June 2020 

- NIWA (2021) Time trends version 7.0: analysis of water quality trends. https:// niwa. co. nz/ fresh water/ manag ement- tools/ water- quali tytools/ analy sis- of- water- quali ty- trends. Accessed 14 Feb 2022 

- Oude Essink G, Van Baaren ES, De Louw PGB (2010) Effects of climate change on coastal groundwater systems: a modeling study in the Netherlands. Water Resour Res 46(10):1-n/a. https:// doi. org/ 10. 1029/ 2009W R0087 19 

- Pedregosa F, Varoquaux G, Gramfort A, Michel V, Thirion B, Grisel O, Blondel M, Prettenhofer P, Weiss R, Dubourg V (2011) Scikit-learn: machine learning in Python. J Machine Learning Res 12:2825–2830. https:// github. com/ scikit- learn/ scikit- learn. Accessed 20 Jan 2022 

- Peterson TJ, Western AW (2018) Statistical interpolation of groundwater hydrographs. Water Resour Res 54(7):4663–4680. https:// doi. org/ 10. 1029/ 2017W R0218 38 

- Plane E, Hill K, May C (2019) A rapid assessment method to identify potential groundwater flooding hotspots as sea levels rise in coastal cities. Water 11(11):2228. https:// doi. org/ 10. 3390/ w1111 2228 

- Quigley MC, Hughes MW, Bradley BA, van Ballegooy S, Reid C, Morgenroth J, Horton T, Duffy B, Pettinga JR (2016) The 2010–2011 Canterbury earthquake sequence: environmental effects, seismic triggering thresholds and geologic legacy. Tectonophysics 672– 673:228–274. https:// doi. org/ 10. 1016/j. tecto. 2016. 01. 044 

- Rahimi R, Tavakol-Davani H, Graves C, Gomez A, Valipour MF (2020) Compound inundation impacts of coastal climate change: sea-level rise, groundwater rise, and coastal watershed precipitation. Water 12(2776):2776. https:// doi. org/ 10. 3390/ w1210 2776 

- Rau GC, Cuthbert MO, Post VEA, Schweizer D, Acworth RI, Andersen MS, Blum P, Carrara E, Rasmussen TC, Ge S (2020) Future-proofing hydrogeology by revising groundwater monitoring practice. Hydrogeol J 28(8):2963–2969. https:// doi. org/ 10. 1007/ s10040- 020- 02242-7 

- Rinderer M, Van Meerveld H, McGlynn B (2019) From points to patterns: using groundwater time series clustering to investigate subsurface hydrological connectivity and runoff source area dynamics. Water Resour Res 55(7):5784–5806. https:// doi. org/ 10. 1029/ 2018W R0238 86 

- Rotzoll K, Fletcher CH (2013) Assessment of groundwater inundation as a consequence of sea-level rise. Nat Climate Change 3(5):477–481. https:// doi. org/ 10. 1038/ nclim ate17 25 

- Rotzoll K, El-Kadi AI, Gingerich SB (2008) Analysis of an unconfined aquifer subject to asynchronous dual-tide propagation. Groundwater 46(2):239–250. https:// doi. org/ 10. 1111/j. 17456584. 2007. 00412.x 

- Rutter H (2020) LDRP45: impacts of earthquake and sea level rise on shallow groundwater levels. https:// ccc. govt. nz/ assets/ Docum ents/ Envir onment/ Coast/ Aqual inc- Groun dwater- Report_ Final_ August- 2020- multi- hazard- gap- filli ng. pdf. Accessed 3 Nov 2022 

- Salvadore E, Bronders J, Batelaan O (2015) Hydrological modelling of urbanized catchments: a review and future directions. J Hydrol 529:62–81. https:// doi. org/ 10. 1016/j. jhydr ol. 2015. 06. 028 

- Sangsefidi Y, Bagheri K, Davani H, Merrifield M (2022) Vulnerability of coastal drainage infrastructure to compound flooding under climate change. J Hydrol. https:// doi. org/ 10. 1016/j. jhydr ol. 2022. 128823 

- Sartirana D, Rotiroti M, Bonomi T, De Amicis M, Nava V, Fumagalli L, Zanotti C (2022) Data-driven decision management of urban underground infrastructure through groundwater-level time-series cluster analysis: the case of Milan (Italy). Hydrogeol J. https:// doi. org/ 10. 1007/ s10040- 022- 02494-5 

1 3 

Hydrogeology Journal (2024) 32:577–600 

599 

- Schirmer M, Leschik S, Musolff A (2013) Current research in urban hydrogeology: a review. Adv Water Resour 51:280–291. https:// doi. org/ 10. 1016/j. advwa tres. 2012. 06. 015 

- Setiawan I, Morgan L, Doscher C, Ng K, Bosserelle A (2022) Mapping shallow groundwater salinity in a coastal urban setting to assess exposure of municipal assets. J Hydrol: Region Stud 40:100999. https:// doi. org/ 10. 1016/j. ejrh. 2022. 100999 

- Setiawan I, Morgan LK, Doscher C (2023) Saltwater intrusion from an estuarine river: a field investigation. J Hydrol 617:128955. https:// doi. org/ 10. 1016/j. jhydr ol. 2022. 128955 

- Shaad K, Burlando P (2019) Monitoring and modelling of shallow groundwater dynamics in urban context: the case study of Jakarta. J Hydrol 573:1046–1056. https:// doi. org/ 10. 1016/j. jhydr ol. 2018. 01. 005 

- Shamsudduha M, Chandler R, Taylor R, Ahmed K (2009) Recent trends in groundwater levels in a highly seasonal hydrological system: the Ganges-Brahmaputra-Meghna Delta. Hydrol Earth Syst Sci 13(12):2373–2385. https:// doi. org/ 10. 5194/ hess- 13- 2373- 2009 

- Shapiro AM, Day-Lewis FD (2022) Reframing groundwater hydrology as a data-driven science. Groundwater 60(4):455–456. https:// doi. org/ 10. 1111/ gwat. 13195 

- Shi L, Jiao JJ (2014) Seawater intrusion and coastal aquifer management in China: a review. Environ Earth Sci 72(8):2811–2819. https:// doi. org/ 10. 1007/ s12665- 014- 3186-9 

- Smith SM, Medeiros KC (2019) Recent groundwater and lake-stage trends in Cape Cod National Seashore: relationships with sea level rise, precipitation, and air temperature. J Water Climate Change 10(4):953–967. https:// doi. org/ 10. 2166/ wcc. 2018. 016 

- Song S-H, Zemansky G (2013) Groundwater level fluctuation in the Waimea Plains, New Zealand: changes in a coastal aquifer within the last 30 years. Environ Earth Sci 70(5):2167–2178. https:// doi. org/ 10. 1007/ s12665- 013- 2359-2 

- Su X, Liu T, Beheshti M, Prigiobbe V (2020) Relationship between infiltration, sewer rehabilitation, and groundwater flooding in coastal urban areas. Environ Sci Pollut Res 27(13):14288–14298. https:// doi. org/ 10. 1007/ s11356- 019- 06513-z 

- Su X, Belvedere P, Tosco T, Prigiobbe V (2022) Studying the effect of sea level rise on nuisance flooding due to groundwater in a coastal urban area with aging infrastructure. Urban Climate 43:101164. https:// doi. org/ 10. 1016/j. uclim. 2022. 101164 

- Sukop MC, Rogers M, Guannel G, Infanti JM, Hagemann K (2018) High temporal resolution modeling of the impact of rain, tides, and sea level rise on water table flooding in the Arch Creek basin, Miami-Dade County Florida USA. Sci Total Environ 616617:1668–1688. https:// doi. org/ 10. 1016/j. scito tenv. 2017. 10. 170 

- Talbot JD, Bowden MJ (1986) The Christchurch artesian aquifers: a report. North Canterbury Catchment Board, Resources Division Regional Water Board, Christchurch, New Zealand 

- Tavenard R, Faouzi J, Vandewiele G, Divo F, Androz G, Holtz C, Payne M, Yurchak R, Rußwurm M, Kolar K (2020) Tslearn, a machine learning toolkit for time series data. J Machine Learn Res 21(118):1–6. https:// www. jmlr. org/ and https:// github. com/ tslea rn- team/ tslea rn. Accessed 24/01/2022 

- Taylor CJ, Alley WM (2001) Ground-water-level monitoring and the importance of long-term water-level data. US Geol Surv Circ 1217. https:// pubs. usgs. gov/ circ/ circ1 217/ pdf/ circu lar12 17. pdf. Accessed 20 Jan 2022 

- Teramoto EH, Crioni PLB, Chang HK (2021) Daily time series of groundwater recharge derived from temporal variation of water level. Sustain Water Resour Manag 7(4):1–11. https:// doi. org/ 10. 1007/ s40899- 021- 00546-4 

- Thomson RE, Emery WJ (2014) Time series analysis methods, chap 5. In: Thomson RE, Emery WJ (eds) Data analysis methods in physical oceanography, 3rd edn. Elsevier, Boston 

Thorndahl S, Balling JD, Larsen UBB (2016) Analysis and integrated modelling of groundwater infiltration to sewer networks. Hydrol Processes 30(18):3228–3238. https:// doi. org/ 10. 1002/ hyp. 10847 

- US Environmental Protection Agency (2020) Groundwater level and well depth measurement: operating procedure. https:// www. epa. gov/ quali ty/ groun dwater- level- and- well- depth- measu rement. Accessed 20 Jan 2022 

- United Nations (2017) Factsheet: people and oceans. https:// susta inabl edeve lopme nt. un. org/ conte nt/ docum ents/ Ocean_ Facts heet_ People. pdf. Accessed 20 Jan 2022 

- Upton KA, Jackson CR (2011) Simulation of the spatio-temporal extent of groundwater flooding using statistical methods of hydrograph classification and lumped parameter models. Hydrol Process 25(12):1949–1963. https:// doi. org/ 10. 1002/ hyp. 7951 

- van Ballegooy S, Cox SC, Thurlow C, Rutter HK, Reynolds T, Harrington G, Fraser J, Smith T (2014) Median water table elevation in Christchurch and surrounding area after the 4 September 2010 Darfield Earthquake Version 2. GNS science report 2014/18, 79 pp. https:// www. gns. cri. nz/ static/ pubs/ 2013/ SR% 202013- 001. pdf. Accessed 28 June 2020 

- Varouchakis Ε, Hristopulos D (2013) Comparison of stochastic and deterministic methods for mapping groundwater level spatial variability in sparsely monitored basins. Environ Monitor Assessment 185(1):1–19. https:// doi. org/ 10. 1007/ s10661- 012- 2527-y 

- Vázquez-Suñé E, Sánchez-Vila X, Carrera J (2005) Introductory review of specific factors influencing urban groundwater: an emerging branch of hydrogeology, with reference to Barcelona, Spain. Hydrogeol J 13(3):522–533. https:// doi. org/ 10. 1007/ s10040- 004- 0360-2 

- Vitousek S, Barnard PL, Fletcher CH, Frazer N, Erikson L, Storlazzi CD (2017) Doubling of coastal flooding frequency within decades due to sea-level rise. Sci Rep 7(1):1399–1399. https:// doi. org/ 10. 1038/ s41598- 017- 01362-7 

- Wahl T, Jain S, Bender J, Meyers SD, Luther ME (2015) Increasing risk of compound flooding from storm surge and rainfall for major US cities. Nat Climate Change 5(12):1093–1097. https:// doi. org/ 10. 1038/ nclim ate27 36 

- Wang X, Smith K, Hyndman R (2006) Characteristic-based clustering for time series data. Data Mining Knowledge Dis 13(3):335–364. https:// doi. org/ 10. 1007/ s10618- 005- 0039-x 

- Watts RH (2011) The Christchurch waterways story. Manaaki Whenua Landcare Research, Lincoln, New Zealand 

- White PA, Goodrich K, Cave S, Minni G (2007) Waterways, swamps and vegetation of Christchurch in 1856 and baseflow discharge in Christchurch City streams. GNS Science Consultancy Report 2007/103, Environment Canterbury Report U07/39. https:// docs. niwa. co. nz/ libra ry/ public/ ECtrU 07- 39. pdf. Accessed 20 Jan 2022 

- White PA, Hong T, Zemansky G, Moreau M (2010) Geology, groundwater flow and groundwater chemistry of Springston Formation sediment between the Waimakariri River and Christchurch City. GNS science report 2009/42, Wairakei Research Centre, GNS Science, Lower Hutt, New Zealand 

- Wigram HF (1916) The story of Christchurch, New Zealand. Lyttleton Times, Christchurch, New Zealand 

- Wilson D (1976) Hydrogeology of metropolitan Christchurch. J Hydrol (New Zealand) 15(2):101–120. https:// www. jstor. org/ stable/ 43944 406. Accessed 28 June 2020 

- Wilson J (1989) Christchurch: swamp to city—a short history of the Christchurch Drainage Board. Christchurch Drainage Board, Christchurch, New Zealand 

- Winter TC, Mallory SE, Allen TR, Rosenberry DO (2000) The use of principal component analysis for interpreting ground water hydrographs. Groundwater 38(2):234–246. https:// doi. org/ 10. 1111/j. 1745- 6584. 2000. tb003 35.x 

1 3 

Hydrogeology Journal (2024) 32:577–600 

600 

- Wu R-S, Hussain F, Lin Y-C, Yeh T-Y, Yu K-C (2021) Characterization of regional groundwater system based on aquifer response to recharge–discharge phenomenon and hierarchical clustering analysis. Water 13(18):2535. https:// doi. org/ 10. 3390/ w1318 2535 

- Wunsch A, Liesch T, Broda S (2021) Feature-based groundwater hydrograph clustering using unsupervised self-organizing mapensembles. Water Resour Manag 36:39–54. https:// doi. org/ 10. 1007/ s11269- 021- 03006-y 

- Zhang K, Chui TFM (2019) A review on implementing infiltrationbased green infrastructure in shallow groundwater environments: 

challenges, approaches, and progress. J Hydrol 579:124089. https:// doi. org/ 10. 1016/j. jhydr ol. 2019. 124089 

- **Publisher’s Note** Springer Nature remains neutral with regard to jurisdictional claims in published maps and institutional affiliations. 

1 3 

