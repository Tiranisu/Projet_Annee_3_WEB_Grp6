function test(data)
{
    var loadingDiv = document.getElementById('loading');
    loadingDiv.style.display = 'flex';

    //console.log(data);
	//console.log(data[0]);
    //console.log(data[1]['lati']);
	jdata = data.data;
	//console.log(jdata.map(row => row[0]));

    let tab_lat = jdata.map(row => row[0]);
    let tab_lon = jdata.map(row => row[1]);
    let tab_cluster = jdata.map(row => row[2]);

    //console.log(tab_lon)

    
    // Données géographiques
    var data = [{
        type: 'scattermapbox',
        lat: tab_lat, // Tableau des latitudes
        lon: tab_lon, // Tableau des longitudes
        mode: 'markers',
        marker: {
            size: 8,
            color: tab_cluster
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
    Plotly.newPlot('div_style_map_clusters', data, layout);

    loadingDiv.style.display = 'none';
    var mainDiv = document.getElementById('div_style_map_visu');
    mainDiv.style.display = 'flex';
}

ajaxRequest("GET", "php/kmeans.php", test);