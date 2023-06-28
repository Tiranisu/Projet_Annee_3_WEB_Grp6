// import {ajaxRequest} from 'utils.js';
function ajaxRequest(type, url, callback, data = null){
    let xhr;
  
    // Create XML HTTP request.
    xhr = new XMLHttpRequest();
    if (type == 'GET' && data != null)
      url += '?' + data;
    xhr.open(type, url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  
    // Add the onload function.
    xhr.onload = () =>
    {
      switch (xhr.status)
      {
        case 200:
        case 201:
          console.log(xhr.responseText);
          callback(JSON.parse(xhr.responseText));
          break;
        default:
          httpErrors(xhr.status);
      }
    };
  
    // Send XML HTTP request.
    xhr.send(data);
}

function printtest(infos){
    console.log(infos);
    var element = document.getElementById("maValeur");
    element.innerHTML = "OUI !";
}

function cons(infos){
    // console.log(infos);
}

function envoyerAjout(){
    var age = document.getElementById("form_age").value;

    var date_heure = document.getElementById("form_date").value;
     // Extraction de la date
    var date = date_heure.split("T")[0];
    // Extraction de l'heure
    var heure = date_heure.split("T")[1].split(":")[0];


    var ville = document.getElementById("form_ville").value;
    var latitude = document.getElementById("form_latitude").value;
    var longitude = document.getElementById("form_longitude").value;
    var descr_athmo = document.getElementById("form_athmo").value;
    var descr_lum = document.getElementById("form_lum").value;
    var descr_surface = document.getElementById("form_route").value;
    var descr_secu = document.getElementById("form_secu").value;
    var descr_type_col = document.getElementById("form_colision").value;
    var descr_intersection = document.getElementById("form_intersection").value;
    var descr_cat_veh = document.getElementById("form_categorie").value;
    var descr_agglo = document.getElementById("form_agglo").value;
    ajaxRequest('POST', `../php/ajout_accidentsRequest.php/ajout_accident`, cons, `age=${age}&date=${date}&heure=${heure}&ville=${ville}&latitude=${latitude}&longitude=${longitude}&descr_athmo=${descr_athmo}&descr_lum=${descr_lum}&descr_surface=${descr_surface}&descr_secu=${descr_secu}&descr_type_col=${descr_type_col}&descr_intersection=${descr_intersection}&descr_cat_veh=${descr_cat_veh}&descr_agglo=${descr_agglo}`);
}



function afficherListVille(infos){
    var element = document.getElementById("form_ville");
    for(let i = 0; i < infos.length; i++){
        var option = document.createElement("option");
        option.value = infos[i]["nom_ville"];
        option.text = infos[i]["nom_ville"];
        element.add(option);
    }
}


function afficherDescr_athmo(infos){
    var element = document.getElementById("form_athmo");
    // console.log(infos[2]["nom"]);
    for(let i = 0; i < infos.length; i++){
        var option = document.createElement("option");
        option.value = infos[i]["nom_athmo"];
        option.text = infos[i]["nom_athmo"];
        element.add(option);
    }
    
}


function afficherDescr_lum(infos){
    var element = document.getElementById("form_lum");
    // console.log(infos[2]["nom"]);
    for(let i = 0; i < infos.length; i++){
        var option = document.createElement("option");
        option.value = infos[i]["nom_lum"];
        option.text = infos[i]["nom_lum"];
        element.add(option);
    }
    
}


function afficherDescr_surface(infos){
    var element = document.getElementById("form_route");
    // console.log(infos[2]["nom"]);
    for(let i = 0; i < infos.length; i++){
        var option = document.createElement("option");
        option.value = infos[i]["nom_surface"];
        option.text = infos[i]["nom_surface"];
        element.add(option);
    }
    
}


function afficherDescr_secu(infos){
    var element = document.getElementById("form_secu");
    // console.log(infos[2]["nom"]);
    for(let i = 0; i < infos.length; i++){
        var option = document.createElement("option");
        option.value = infos[i]["nom_secu"];
        option.text = infos[i]["nom_secu"];
        element.add(option);
    }
    
}


function afficherDescr_type_col(infos){
    var element = document.getElementById("form_colision");
    // console.log(infos[2]["nom"]);
    for(let i = 0; i < infos.length; i++){
        var option = document.createElement("option");
        option.value = infos[i]["nom_type_col"];
        option.text = infos[i]["nom_type_col"];
        element.add(option);
    }
    
}


function afficherDescr_intersection(infos){
    var element = document.getElementById("form_intersection");
    // console.log(infos[2]["nom"]);
    for(let i = 0; i < infos.length; i++){
        var option = document.createElement("option");
        option.value = infos[i]["nom_intersection"];
        option.text = infos[i]["nom_intersection"];
        element.add(option);
    }
    
}


function afficherDescr_cat_veh(infos){
    var element = document.getElementById("form_categorie");
    // console.log(infos[2]["nom"]);
    for(let i = 0; i < infos.length; i++){
        var option = document.createElement("option");
        option.value = infos[i]["nom_cat_veh"];
        option.text = infos[i]["nom_cat_veh"];
        element.add(option);
    }
    
}


function afficherDescr_agglo(infos){
    var element = document.getElementById("form_agglo");
    // console.log(infos[2]["nom"]);
    for(let i = 0; i < infos.length; i++){
        var option = document.createElement("option");
        option.value = infos[i]["nom_agglo"];
        option.text = infos[i]["nom_agglo"];
        element.add(option);
    }
    
}


ajaxRequest('GET', `../php/ajout_accidentsRequest.php/listVille`, afficherListVille);
ajaxRequest('GET', `../php/ajout_accidentsRequest.php/Descr_athmo`, afficherDescr_athmo);
ajaxRequest('GET', `../php/ajout_accidentsRequest.php/Descr_lum`, afficherDescr_lum);
ajaxRequest('GET', `../php/ajout_accidentsRequest.php/Descr_surface`, afficherDescr_surface);
ajaxRequest('GET', `../php/ajout_accidentsRequest.php/Descr_secu`, afficherDescr_secu);
ajaxRequest('GET', `../php/ajout_accidentsRequest.php/Descr_type_col`, afficherDescr_type_col);
ajaxRequest('GET', `../php/ajout_accidentsRequest.php/Descr_intersection`, afficherDescr_intersection);
ajaxRequest('GET', `../php/ajout_accidentsRequest.php/Descr_cat_veh`, afficherDescr_cat_veh);
ajaxRequest('GET', `../php/ajout_accidentsRequest.php/Descr_agglo`, afficherDescr_agglo);

document.onload = function(){
    console.log("Load")
    document.getElementById('bloc_page').style.display = 'flex';
    document.getElementById('loader').style.display = 'none';
};