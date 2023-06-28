function test(data)
{
    var loadingDiv = document.getElementById('loading');
    var mainDiv = document.getElementById('div_style_map_visu');
    mainDiv.style.display = 'none';
    loadingDiv.style.display = 'flex';

    /*var maDiv = document.getElementById('div_style_map_visu');
    var nouveauSpan = document.createElement('span');
    nouveauSpan.innerText = '<img src="img/LOGO_BlaBla_Crash.png">';
    maDiv.appendChild(nouveauSpan);*/

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

    loadingDiv.style.display = 'none';
    mainDiv.style.display = 'flex';
}

ajaxRequest("GET", "php/kmeans.php", test);