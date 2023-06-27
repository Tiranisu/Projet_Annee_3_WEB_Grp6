
const latitudes = [48.8566, 43.7102, 47.2184]; // Exemple de latitudes pour Paris, Marseille et Lyon
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

Plotly.newPlot(a, data, layout, config);