# fsrdc-research-dashboard
An interactive dashboard showcasing metadata insights and visualizations from U.S. Census FSRDC-linked research outputs, built using Python and deployed via GitHub Pages.

## Project Overview
This dashboard presents findings from a comprehensive analysis of FSRDC-linked research metadata. It integrates data enrichment, machine learning, and interactive plotting for exploratory insights.

## Features
- Tabbed navigation for all major dashboard sections (Summary, RDCs & Trends, Authors, Clustering & PCA, Topics, DES, Data Table, Download & Team)
- Interactive chart type dropdowns for each major visualization (bar, line, scatter, animated cluster, etc.)
- Modern green-themed UI with dark mode/light mode toggle
- Top 10 RDCs and authors visualized
- Yearly publication trends
- PCA projection and animated KMeans clustering
- LDA topic modeling and word cloud
- Searchable, filterable, and styled research outputs table
- Downloadable enriched dataset (CSV)

## Key Results & Insights
- Boston RDC leads in research output, followed by Michigan and Chicago
- Publication activity has grown steadily since 2011, peaking in 2023
- David H Autor is the most prolific author (46 outputs)
- PCA and clustering reveal three main research clusters
- LDA topic modeling identified five major research themes
- DES simulation: median time from project start to publication is 3–4 years, with bottlenecks at approval and data access stages

## Methodology
- **Data Consolidation:** All 8 CSVs from the Project 3 Data Box were merged, deduplicated, and enriched using pandas.
- **Data Enrichment:** Columns were standardized and enriched to match the sample Excel. Irrelevant outputs were filtered using stricter FSRDC matching criteria.
- **Analysis:**
  - Top 10 RDCs and authors identified.
  - Yearly publication trends visualized.
  - PCA and clustering for dimensionality reduction and grouping.
  - LDA topic modeling for research themes.
- **Visualization:** Dashboard built with Plotly.js and deployed via GitHub Pages.

## Usage
- Open `index.html` in a browser to view the dashboard.
- All interactive plots are rendered client-side.

## GitHub Pages
- [Dashboard Link](YOUR_GITHUB_PAGES_LINK_HERE)

## Team
- Haoxuan Wu – hxwu@seas.upenn.edu
- Anant Aggarwal – anant24@seas.upenn.edu
- Gina Kim – kimgina@seas.upenn.edu
- Jiayang Li – reggieli@seas.upenn.edu
- Yesol Kim – yesolkim@seas.upenn.edu
- Bliss Zheng – blissz@seas.upenn.edu

## Data & Tools
- Data: U.S. Census Bureau’s FSRDC metadata (curated from 8 group CSVs)
- Python: pandas, scikit-learn, seaborn, matplotlib, Plotly
- JavaScript: Plotly.js

## License
MIT
