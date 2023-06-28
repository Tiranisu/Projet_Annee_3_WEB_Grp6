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
    var age = document.getElementById("age").value;
    var date = document.getElementById("date").value;
    var heure = document.getElementById("heure").value;
    var ville = document.getElementById("ville").value;
    var latitude = document.getElementById("latitude").value;
    var longitude = document.getElementById("longitude").value;
    var descr_athmo = document.getElementById("descr_athmo").value;
    var descr_lum = document.getElementById("descr_lum").value;
    var descr_surface = document.getElementById("descr_surface").value;
    var descr_secu = document.getElementById("descr_secu").value;
    var descr_type_col = document.getElementById("descr_type_col").value;
    var descr_intersection = document.getElementById("descr_intersection").value;
    var descr_cat_veh = document.getElementById("descr_cat_veh").value;
    var descr_agglo = document.getElementById("descr_agglo").value;
    ajaxRequest('POST', `../php/ajout_accidentsRequest.php/ajout_accident`, cons, `age=${age}&date=${date}&heure=${heure}&ville=${ville}&latitude=${latitude}&longitude=${longitude}&descr_athmo=${descr_athmo}&descr_lum=${descr_lum}&descr_surface=${descr_surface}&descr_secu=${descr_secu}&descr_type_col=${descr_type_col}&descr_intersection=${descr_intersection}&descr_cat_veh=${descr_cat_veh}&descr_agglo=${descr_agglo}`);
}



function afficherListVille(infos){
    var element = document.getElementById("ville");
    for(let i = 0; i < infos.length; i++){
        var option = document.createElement("option");
        option.value = infos[i]["nom_ville"];
        option.text = infos[i]["nom_ville"];
        element.add(option);
    }
}


function afficherDescr_athmo(infos){
    var element = document.getElementById("descr_athmo");
    // console.log(infos[2]["nom"]);
    for(let i = 0; i < infos.length; i++){
        var option = document.createElement("option");
        option.value = infos[i]["nom"];
        option.text = infos[i]["nom"];
        element.add(option);
    }
    
}


function afficherDescr_lum(infos){
    var element = document.getElementById("descr_lum");
    // console.log(infos[2]["nom"]);
    for(let i = 0; i < infos.length; i++){
        var option = document.createElement("option");
        option.value = infos[i]["nom"];
        option.text = infos[i]["nom"];
        element.add(option);
    }
    
}


function afficherDescr_surface(infos){
    var element = document.getElementById("descr_surface");
    // console.log(infos[2]["nom"]);
    for(let i = 0; i < infos.length; i++){
        var option = document.createElement("option");
        option.value = infos[i]["nom"];
        option.text = infos[i]["nom"];
        element.add(option);
    }
    
}


function afficherDescr_secu(infos){
    var element = document.getElementById("descr_secu");
    // console.log(infos[2]["nom"]);
    for(let i = 0; i < infos.length; i++){
        var option = document.createElement("option");
        option.value = infos[i]["nom"];
        option.text = infos[i]["nom"];
        element.add(option);
    }
    
}


function afficherDescr_type_col(infos){
    var element = document.getElementById("descr_type_col");
    // console.log(infos[2]["nom"]);
    for(let i = 0; i < infos.length; i++){
        var option = document.createElement("option");
        option.value = infos[i]["nom"];
        option.text = infos[i]["nom"];
        element.add(option);
    }
    
}


function afficherDescr_intersection(infos){
    var element = document.getElementById("descr_intersection");
    // console.log(infos[2]["nom"]);
    for(let i = 0; i < infos.length; i++){
        var option = document.createElement("option");
        option.value = infos[i]["nom"];
        option.text = infos[i]["nom"];
        element.add(option);
    }
    
}


function afficherDescr_cat_veh(infos){
    var element = document.getElementById("descr_cat_veh");
    // console.log(infos[2]["nom"]);
    for(let i = 0; i < infos.length; i++){
        var option = document.createElement("option");
        option.value = infos[i]["nom"];
        option.text = infos[i]["nom"];
        element.add(option);
    }
    
}


function afficherDescr_agglo(infos){
    var element = document.getElementById("descr_agglo");
    // console.log(infos[2]["nom"]);
    for(let i = 0; i < infos.length; i++){
        var option = document.createElement("option");
        option.value = infos[i]["nom"];
        option.text = infos[i]["nom"];
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
