function test(data)
{
    // Pour le message de chargement
    var loadingDiv = document.getElementById('loading');
    var mainDiv = document.getElementById('div_style_map_visu');
    mainDiv.style.display = 'none';
    loadingDiv.style.display = 'flex';

    // Préparation des données
	jdata = data.data;
    let tab_lat = jdata.map(row => row[0]);
    let tab_lon = jdata.map(row => row[1]);
   
    // Données pour la carte
    var data = [{
        type: 'scattermapbox',
        lat: tab_lat, 
        lon: tab_lon, 
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
            center: { lat: 47, lon: 2.5 }, 
            zoom: 4 
        },
        margin: { l: 0, r: 0, t: 0, b: 0 },
        showlegend: false
    };

    // Création de la carte
    Plotly.newPlot('div_map_tableau', data, layout);

    // On affiche la div de la carte
    loadingDiv.style.display = 'none';
    mainDiv.style.display = 'flex';
}

ajaxRequest("GET", "php/kmeans.php", test);