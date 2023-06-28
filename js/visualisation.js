function test(data)
{
	jdata = data.data;
    let tab_lat = jdata.map(row => row[0]);
    let tab_lon = jdata.map(row => row[1]);
   
    // MAP
    var data = [{
        type: 'scattermapbox',
        lat: tab_lat, // Tableau des latitudes
        lon: tab_lon, // Tableau des longitudes
        mode: 'markers',
        marker: {
            size: 5,
            color: '#99E6FF'
        }
    }];
    // Configuration de la carte
    var layout = {
        mapbox: {
            style: 'open-street-map',
            center: { lat: 47, lon: 2.5 }, // Coordonnées de centrage de la carte
            zoom: 4 // Niveau de zoom initial
        },
        margin: { l: 0, r: 0, t: 0, b: 0 },
        showlegend: false
    };
    // Création de la carte
    Plotly.newPlot('div_map_tableau', data, layout);
}

ajaxRequest("GET", "php/kmeans.php", test);