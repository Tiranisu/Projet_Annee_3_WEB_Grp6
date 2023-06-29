var mainDiv = document.getElementById('bloc_page');
mainDiv.style.display = 'none';

function test(data)
{

    // Préparation des données
	jdata = data.data;
    let tab_lat = data.map(row => row['lati']);
    let tab_lon = data.map(row => row['longi']);
    let tab_athmo = data.map(row => row['nom_athmo']);
    let tab_grav = data.map(row => row['nom_gravite']);

    /*let tab_anot;

    for (var i = 0; i < tab_lon.length; i++) {
        let tab_anot = "<b>Athmo : </b>".tab_athmo[i];
    }*/
   

    // Données pour la carte
    var data = [{
        type: 'scattermapbox',
        lat: tab_lat, 
        lon: tab_lon, 
        mode: 'markers',
        marker: {
            size: 5,
            color: '#007399'
        },
        text: tab_grav
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


    var divCarte = document.getElementById('div_map_tableau');
    divCarte.innerHTML = '';
    // Création de la carte
    Plotly.newPlot('div_map_tableau', data, layout);

}

function endLoading(){
    console.log("Loaded !")
    document.getElementById('bloc_page').style.display = 'flex';
    document.getElementById('main_loader').style.display = 'none';
}

window.addEventListener("DOMContentLoaded", (event) => {
    const el = document.getElementById('filtres');
    if (el) {
      el.addEventListener('change', filtrage2, false);
    }
  });




  function filtrage2(){
    
    var ville = document.getElementById('form_ville').value;
    var athmo = document.getElementById('form_athmo').value;
    var lum = document.getElementById('form_lum').value;
    var secu = document.getElementById('form_secu').value;
    var surface = document.getElementById('form_route').value;
    var gravite = document.getElementById('form_gravite').value;

    ajaxRequest('GET', 'php/F3.php/filtre_request/?ville='+ville+'&athmo='+athmo+'&lum='+lum+'&secu='+secu+'&surface='+surface+'&gravite='+gravite, test);

  }
//ajaxRequest("GET", "php/predict.php/kmeans", test);
//ajaxRequest('GET', 'php/F3.php/filtre_request/?ville='+ville+'&athmo='+athmo+'&lum='+lum+'&secu='+secu+'&surface='+surface+'&gravite='+gravite, crashDisplayer);
filtrage2();