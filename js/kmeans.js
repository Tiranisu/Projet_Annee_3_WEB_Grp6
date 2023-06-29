var mainDiv = document.getElementById('bloc_page');
mainDiv.style.display = 'none';

function test(data)
{

    // Préparation des données
	jdata = data.data;
    let tab_lat = jdata.map(row => row[0]);
    let tab_lon = jdata.map(row => row[1]);
    let tab_cluster = jdata.map(row => row[2]);

    // Données pour la carte
    var data = [{
        type: 'scattermapbox',
        lat: tab_lat, 
        lon: tab_lon,
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
            center: { lat: 47, lon: 2.5 }, 
            zoom: 4 
        },
        margin: { l: 0, r: 0, t: 0, b: 0 },
        showlegend: false
    };

    // Création de la carte
    Plotly.newPlot('div_style_map_clusters', data, layout);

    endLoading();
}

function endLoading(){
    console.log("Loaded !")
    document.getElementById('bloc_page').style.display = 'flex';
    document.getElementById('main_loader').style.display = 'none';
}

ajaxRequest("GET", "php/predict.php/kmeans", test);
