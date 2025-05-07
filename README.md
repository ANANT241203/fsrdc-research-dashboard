
# 📊 FSRDC Research Output Dashboard

An interactive, web-based visualization of research output from the U.S. Census Bureau’s Federal Statistical Research Data Centers (FSRDCs), built as a final project for **CIT 5900: Programming for the Web** at the University of Pennsylvania.

![Dashboard Preview](screenshot.png)

---

## 🌐 Live Dashboard

🚀 **Explore the live project**:  
[https://anant241203.github.io/fsrdc-research-dashboard/](https://anant241203.github.io/fsrdc-research-dashboard/)

---

## 🧠 Features

### 📈 Interactive Visualizations
- **Top 10 RDCs** by research output
- **Year-wise publication trend**
- **Top 10 Authors** with chart toggle (bar/line)
- **PCA projection** of outputs by metadata
- **KMeans clustering**
- **Clustering animation** over time (2010–2024)

### 🔍 Searchable Research Table
- Filter by **year** or **author**
- Preview top publications with direct **DOI links**

### 🧠 Topic Modeling
- **LDA**-based topic extraction from research titles
- **Word cloud** of dominant terms

### 🧪 Discrete Event Simulation (DES)
- Models flow from proposal to output
- Identifies bottlenecks in approval + data access

### 🎛 Additional Features
- Tabbed navigation + dropdown controls
- 📥 Download enriched dataset (CSV)
- 🌗 Light/Dark mode toggle
- Responsive mobile design

---

## 📁 File Overview

```
.
├── index.html              # Main structure and tab layout
├── style.css               # Responsive design + theme
├── scripts.js              # Interactive plots, animation, tab logic
├── ResearchOutputs_Group3.csv   # Final enriched dataset
├── lda_wordcloud.png       # Word cloud from topic model
└── README.md               # You're here!
```

---

## 🔧 Tools & Technologies

- 🧪 **Python**: pandas, scikit-learn, wordcloud
- 📊 **JavaScript**: Plotly.js for all visualizations
- 🎨 **HTML/CSS**: Responsive and styled layout
- 🌐 **GitHub Pages**: Static site hosting

---

## 👥 Team Members

- **Haoxuan Wu** – hxwu@seas.upenn.edu  
- **Anant Aggarwal** – anant24@seas.upenn.edu  
- **Gina Kim** – kimgina@seas.upenn.edu  
- **Jiayang Li** – reggieli@seas.upenn.edu  
- **Yesol Kim** – yesolkim@seas.upenn.edu  
- **Bliss Zheng** – blissz@seas.upenn.edu  

---

## 📜 Course Details

**CIT 5900 – Programming for the Web**  
Spring 2025 — University of Pennsylvania  
Instructor: Chris Murphy

---

## 📄 License

Released under the MIT License.
