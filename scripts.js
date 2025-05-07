
document.addEventListener("DOMContentLoaded", function() {
    Plotly.newPlot('rdc-bar', [{
        x: ["Boston", "Michigan", "Chicago", "Triangle", "Baruch"],
        y: [238, 149, 121, 105, 98],
        type: 'bar',
        marker: {color: 'steelblue'}
    }], {
        title: 'Top RDCs by Research Output',
        xaxis: {title: 'RDC'},
        yaxis: {title: 'Number of Outputs'}
    });

    Plotly.newPlot('pub-trend', [{
        x: [1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
        y: [1, 2, 5, 12, 10, 20, 11, 19, 16, 22, 21, 33, 36, 35, 57, 58, 47, 46, 80, 100, 97, 108, 110, 125, 139, 158, 167, 130, 180, 163, 214, 156, 15],
        type: 'scatter',
        mode: 'lines+markers',
        marker: {color: 'crimson'}
    }], {
        title: 'Publication Trend Over Years',
        xaxis: {title: 'Year'},
        yaxis: {title: 'Publications'}
    });

    Plotly.newPlot('top-authors', [{
        x: ["David H Autor", "Rodney Ramcharan", "Jose Holguin-Veras, Yao Liu, Francine Lafontaine", "Gordon M Phillips", "Qingfang Wang"],
        y: [46, 30, 26, 22, 22],
        type: 'bar',
        marker: {color: 'darkgreen'}
    }], {
        title: 'Top Authors by FSRDC Outputs',
        xaxis: {title: 'Author'},
        yaxis: {title: 'Publications'}
    });
});
