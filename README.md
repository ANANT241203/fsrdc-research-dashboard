# fsrdc-research-dashboard
An interactive dashboard showcasing metadata insights and visualizations from U.S. Census FSRDC-linked research outputs, built using Python and deployed via GitHub Pages.

## Project Overview
This dashboard presents findings from a comprehensive analysis of FSRDC-linked research metadata. It integrates data enrichment, machine learning, and interactive plotting for exploratory insights.

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
