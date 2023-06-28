
/*const latitudes = [48.8566, 43.7102, 47.2184]; // Exemple de latitudes pour Paris, Marseille et Lyon
const longitudes = [2.3522, 7.2620, 5.9795]; // Exemple de longitudes pour Paris, Marseille et Lyon
const data = [{
type: 'scattergeo',
lat: latitudes,
lon: longitudes,
mode: 'markers',
marker: {
    size: [1, 1 , 1], // Exemple de taille de bulle pour les trois localisations
    sizemode: 'diameter',
    sizeref: 0.1,
    color: 'blue'
}
}];
const layout = {
title: 'Bubble Map de la France',
showlegend: false,
geo: {
    lataxis: { range: [41, 51] }, // Latitude range for France
    lonaxis: { range: [-5, 10] }, // Longitude range for France
    resolution:50,
    showcountries: true,
    countrycolor: 'gray',
    showsubunits: true,
    subunitcolor: 'blue',
    subunitwidth: 1.5
    }
};

const config = {
responsive: true
};

a =document.getElementById('div_map')

Plotly.newPlot(a, data, layout, config);*/
/*
var data = [
    {
        type: "scattermapbox",
        text: unpack(rows, "Globvalue"),
        lon: unpack(rows, "Lon"),
        lat: unpack(rows, "Lat"),
        marker: { color: "fuchsia", size: 4 }
    }
];

var layout = {
    dragmode: "zoom",
    mapbox: { style: "open-street-map", center: { lat: 38, lon: -90 }, zoom: 3 },
    margin: { r: 0, t: 0, b: 0, l: 0 }
};

Plotly.newPlot("div_map", data, layout);*/