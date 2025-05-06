
document.addEventListener("DOMContentLoaded", function() {
    Plotly.newPlot('rdc-bar', [{
        x: ["Michigan RDC", "NYC RDC", "Texas RDC", "Chicago RDC", "Atlanta RDC"],
        y: [42, 38, 35, 30, 27],
        type: 'bar',
        marker: {color: 'steelblue'}
    }], {
        title: 'Top RDCs by Research Output',
        xaxis: {title: 'RDC'},
        yaxis: {title: 'Number of Outputs'}
    });

    Plotly.newPlot('pub-trend', [{
        x: [2017, 2018, 2019, 2020, 2021, 2022, 2023],
        y: [15, 22, 29, 35, 41, 48, 54],
        type: 'scatter',
        mode: 'lines+markers',
        marker: {color: 'crimson'}
    }], {
        title: 'Publication Trend Over Years',
        xaxis: {title: 'Year'},
        yaxis: {title: 'Publications'}
    });

    Plotly.newPlot('top-authors', [{
        x: ["Dr. Smith", "Dr. Lee", "Dr. Chen", "Dr. Garcia", "Dr. Patel"],
        y: [18, 16, 15, 13, 12],
        type: 'bar',
        marker: {color: 'darkgreen'}
    }], {
        title: 'Top Authors by FSRDC Outputs',
        xaxis: {title: 'Author'},
        yaxis: {title: 'Publications'}
    });
});
