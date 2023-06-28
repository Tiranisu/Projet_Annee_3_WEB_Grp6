function test(data)
{
    console.log(data);
	//console.log(data[0]);
    //console.log(data[1]['lati']);
	jdata = data.data;
	//console.log(jdata.map(row => row[0]));

    //let tab_lat = jdata.map(row => row[0]);
    /*let tab_lon = jdata.map(row => row[1]);*/
    /*let tab_cluster = jdata.map(row => row[2]);*/

    //console.log(tab_lon)

    /*mapboxgl.accessToken = 'sk.eyJ1IjoicG91bHBlNyIsImEiOiJjbGpmZWQ5YWcwMDJtM2hwOWZ5ZWJ1ams2In0.plUQmT3vbkCYhpyzNArF2w'; 
    // Données géographiques
    var data = [{
        type: 'scattermapbox',
        lat: tab_lat, // Tableau des latitudes
        lon: tab_lon, // Tableau des longitudes
        mode: 'markers',
        marker: {
            size: 10,
            color: 'rgb(255, 0, 0)'
        }
    }];
    // Configuration de la carte
    var layout = {
        mapbox: {
            style: 'mapbox://styles/mapbox/streets-v11',
            //center: { lat: centerLatitude, lon: centerLongitude }, // Coordonnées de centrage de la carte
            zoom: 12 // Niveau de zoom initial
        },
        margin: { l: 0, r: 0, t: 0, b: 0 },
        showlegend: false
    };
    // Création de la carte
    Plotly.newPlot('div_map', data, layout);*/
}

ajaxRequest("GET", "php/kmeans.php", test);