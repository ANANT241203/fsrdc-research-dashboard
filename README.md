# FSRDC Research Output Dashboard

![Dashboard Banner](https://raw.githubusercontent.com/anant241203/fsrdc-research-dashboard/main/banner.png)  

An interactive data visualization dashboard exploring and analyzing U.S. Census Bureau FSRDC (Federal Statistical Research Data Center)-linked research outputs. Built as part of CIT 5900 Project 3 (Spring 2025, University of Pennsylvania).

---

## 📊 Overview

This dashboard provides a comprehensive, end-to-end exploration of metadata from thousands of academic publications linked to FSRDC projects. The project covers full data cleaning, enrichment, exploratory data analysis (EDA), machine learning modeling, unsupervised clustering, natural language text analysis, and interactive visualization.

The objective is to allow anyone to explore trends, prolific authors, top RDCs, publication bottlenecks, thematic topic modeling, and data patterns across decades of research outputs.

Hosted Live: [View Dashboard](https://anant241203.github.io/fsrdc-research-dashboard/)

---

## 🎯 Project Goals

- Analyze cleaned & enriched metadata of FSRDC publications
- Identify trends in publication outputs, authorship, research centers
- Model delays & bottlenecks in research publication lifecycle (DES simulation)
- Perform clustering & dimensionality reduction for hidden patterns
- Apply topic modeling and NLP to uncover semantic research themes
- Deliver a highly interactive web dashboard to communicate insights

---

## 📈 Features

### 📝 Data Pipeline
- Combined eight group CSVs and merged with project-level metadata from `ProjectsAllMetadata.xlsx`
- Enriched dataset using Crossref and OpenAlex APIs for missing fields
- Implemented error handling, retries, rate limiting, and caching for reproducibility

### 📊 Interactive Data Visualizations
- Top 10 Research Data Centers (RDCs) by outputs
- Top 10 most prolific authors
- Publication trends over years (1993–2025)
- Co-authorship network insights
- Publication trends for top 5 RDCs

### 🔎 Advanced Modeling & Analysis
- Clustering: KMeans (k=3, k=4), DBSCAN on enriched metadata
- Dimensionality reduction using PCA
- Classification: SMOTE balancing + Random Forest on Output Type
- NLP: TF-IDF + KMeans + LDA Topic Modeling of Output Titles
- Word cloud visualization of most frequent research terms

### ⏳ Discrete Event Simulation (DES)
- Simulated project lifecycle: approval → data access → analysis → publication
- Estimated median time from start to publication: 3–4 years
- Identified bottlenecks at approval & data access stages

### 🌙 Modern Dashboard UI
- Responsive layout
- Light/dark mode toggle
- Tabbed navigation
- Searchable/filterable research outputs table
- Downloadable CSV dataset

---

## 💾 Dataset

**Source:**  
Curated metadata dataset built from:
- 8 group research outputs CSVs (raw publication data)
- ProjectsAllMetadata.xlsx (FSRDC project metadata)
- Crossref + OpenAlex APIs for author and bibliographic enrichment

**File:**  
[`ResearchOutputs_Group3.csv`](https://anant241203.github.io/fsrdc-research-dashboard/ResearchOutputs_Group3.csv)

This dataset contains fully cleaned, deduplicated, enriched metadata for thousands of FSRDC publications.

---

## 💻 Technologies Used

| Tool | Purpose |
|------|---------|
| Python | Data cleaning, analysis, ML modeling |
| pandas | Dataframes & transformations |
| scikit-learn | Clustering, classification, SMOTE |
| seaborn + matplotlib | Static plots |
| Plotly.js | Interactive charts |
| wordcloud2.js | Interactive word cloud |
| GitHub Pages | Hosting |
| JavaScript + HTML + CSS | Dashboard development |

---

## 📝 Methodology Summary

1. **Input Processing**  
   - Cleaned, deduplicated 8 CSVs  
   - Merged project metadata from Excel  
   - Enriched via Crossref + OpenAlex APIs  

2. **Exploratory Data Analysis (EDA)**  
   - Top RDCs  
   - Publication trends  
   - Top authors  
   - Co-author analysis  

3. **Clustering & PCA**  
   - KMeans (k=3, k=4), DBSCAN on numeric + categorical features  
   - PCA for 2D visualization of clusters  

4. **Classification**  
   - Output Type prediction via Random Forest  
   - SMOTE used to balance rare classes  

5. **Text Mining**  
   - TF-IDF + KMeans on Output Titles  
   - LDA Topic Modeling  
   - Word Cloud of most common terms  

6. **DES Simulation**  
   - Modeled average delays:  
     - Proposal Approval (~1 year)  
     - Data Access (~1.5 years)  
     - Analysis (~1 year)  
     - Publication (~0.5 years)  
   - Total Median Time ≈ 3–4 years  

7. **Interactive Dashboard**  
   - Built fully interactive, responsive dashboard  
   - Tabbed navigation, dark mode, chart dropdowns  


---

## 🧑‍🤝‍🧑 Team

- Haoxuan Wu – hxwu@seas.upenn.edu
- Anant Aggarwal – anant24@seas.upenn.edu
- Gina Kim – kimgina@seas.upenn.edu
- Jiayang Li – reggieli@seas.upenn.edu
- Yesol Kim – yesolkim@seas.upenn.edu
- Bliss Zheng – blissz@seas.upenn.edu

---

## 📝 Citation

If you use this dashboard or dataset for research or coursework, please cite:

> Group 3, CIT 5900, University of Pennsylvania, Spring 2025.  
> “FSRDC Research Output Dashboard Project.”

---

## 🙏 Acknowledgements

- U.S. Census Bureau FSRDC metadata team  
- Crossref & OpenAlex APIs  
- University of Pennsylvania - CIT 5900 Spring 2025

---
## Connect with the Creator
Dashboard Created by Anant Aggarwal
<a href="https://www.linkedin.com/in/anant241203" target="_blank" style="text-decoration:none;">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" width="10" style="vertical-align:middle; margin-right:8px;">
    LinkedIn
</a>
