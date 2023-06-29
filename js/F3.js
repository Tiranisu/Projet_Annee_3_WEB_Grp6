function predictor(){
  var modaltext=document.getElementById('modal_text');

  if(!document.querySelector('input[name="selection"]:checked')){
    modaltext.innerHTML='Veuillez sélectionner un accident !';
    modaltext.style.color = "red";
  }
  else{
    accident_predict = document.querySelector('input[name="selection"]:checked').value;
    modaltext.innerHTML='Prédictions pour l\'accident : '+accident_predict;
    modaltext.style.color = "black";
  console.log(accident_predict);
  }
}


function filtrage(){
    
    var ville = document.getElementById('form_ville').value;
    var athmo = document.getElementById('form_athmo').value;
    var lum = document.getElementById('form_lum').value;
    var secu = document.getElementById('form_secu').value;
    var surface = document.getElementById('form_route').value;
    var gravite = document.getElementById('form_gravite').value;
    console.log(ville);
    console.log(athmo);
    console.log(lum);
    console.log(secu);
    console.log(surface);
    console.log(gravite);


    ajaxRequest('GET', 'php/F3.php/filtre_request/?ville='+ville+'&athmo='+athmo+'&lum='+lum+'&secu='+secu+'&surface='+surface+'&gravite='+gravite, crashDisplayer);

  }



window.addEventListener("DOMContentLoaded", (event) => {
  const el = document.getElementById('predict_button');
  if (el) {
    el.addEventListener('click', predictor, false);
  }
});


window.addEventListener("DOMContentLoaded", (event) => {
  const el = document.getElementById('filtres');
  if (el) {
    el.addEventListener('change', filtrage, false);
  }
});

//------------------------------------------------------------------------------
//--- Crash Display ------------------------------------------------------------
//------------------------------------------------------------------------------
function crashDisplayer(data){
  let crashTable;  
  crashTable = document.getElementById('table_body');
  crashTable.innerHTML = "";
  for(let d of data){
      const elem = document.createElement("tr");
      elem.classList.add("accident");
      elem.id = d["id_accident"];
      let str_col =  d["nom_gravite"]=="NDF" ? "style=\"color:red;font-weight: bold;\"" : "";
      elem.innerHTML='<td class="sep"><div class="text2 acc_id">'+d["id_accident"]+'</div></td><td class="sep"><div class="text2 acc_age">'+d["age"]+'</div></td><td class="sep"><div class="text2 acc_date">'+d["date"]+'</div></td><td class="sep"><div class="text2 acc_heure">'+d["heure"]+'</div></td><td class="sep"><div class="text2 acc_ville">'+d["nom_ville"]+'</div></td><td class="sep"><div class="text2 acc_lat">'+d["lati"]+'</div></td><td class="sep"><div class="text2 acc_lon">'+d["longi"]+'</div></td><td class="sep"><div class="text2 acc_athm">'+d["nom_athmo"]+'</div></td><td class="sep"><div class="text2 acc_lum">'+d["nom_lum"]+'</div></td><td class="sep"><div class="text2 acc_sur">'+d["nom_surface"]+'</div></td><td class="sep"><div class="text2 acc_sec">'+d["nom_secu"]+'</div></td><td class="sep"><div class="text2 acc_grav" '+str_col+'>'+d["nom_gravite"]+'</div></td><td class="sep"><div class="text2 acc_select"><input type="radio" class="radio_input" name="selection" value="'+d["id_accident"]+'"></div></td>';
      crashTable.appendChild(elem);
    }

  //console.log(data);
};


//------------------------------------------------------------------------------
//--- Filters  ------------------------------------------------------------
//------------------------------------------------------------------------------
function afficherListVille(infos){
var element = document.getElementById("form_ville");
for(let i = 0; i < infos.length; i++){
    var option = document.createElement("option");
    option.value = infos[i]["nom_ville"];
    option.text = infos[i]["nom_ville"];
    element.add(option);
}
};


function afficherDescr_athmo(infos){
var element = document.getElementById("form_athmo");
// console.log(infos[2]["nom"]);
for(let i = 0; i < infos.length; i++){
    var option = document.createElement("option");
    option.value = infos[i]["nom_athmo"];
    option.text = infos[i]["nom_athmo"];
    element.add(option);
}

};


function afficherDescr_lum(infos){
var element = document.getElementById("form_lum");
// console.log(infos[2]["nom"]);
for(let i = 0; i < infos.length; i++){
    var option = document.createElement("option");
    option.value = infos[i]["nom_lum"];
    option.text = infos[i]["nom_lum"];
    element.add(option);
}

};


function afficherDescr_surface(infos){
var element = document.getElementById("form_route");
// console.log(infos[2]["nom"]);
for(let i = 0; i < infos.length; i++){
    var option = document.createElement("option");
    option.value = infos[i]["nom_surface"];
    option.text = infos[i]["nom_surface"];
    element.add(option);
}

};


function afficherDescr_secu(infos){
var element = document.getElementById("form_secu");
// console.log(infos[2]["nom"]);
for(let i = 0; i < infos.length; i++){
    var option = document.createElement("option");
    option.value = infos[i]["nom_secu"];
    option.text = infos[i]["nom_secu"];
    element.add(option);
}

};

function afficher_gravite(infos){
  var element = document.getElementById("form_gravite");
  // console.log(infos[2]["nom"]);
  for(let i = 0; i < infos.length; i++){
      var option = document.createElement("option");
      option.value = infos[i]["nom_gravite"];
      option.text = infos[i]["nom_gravite"];
      element.add(option);
  }
  
  };




//------------------------------------------------------------------------------
//--- Ajax request ----------------------------------------------------------
//------------------------------------------------------------------------------

// Perform a predict request.
// \param data The data associated with the request.

ajaxRequest('GET', 'php/F3.php/get_all_crashs', crashDisplayer);

ajaxRequest('GET', 'php/F3.php/Descr_athmo', afficherDescr_athmo);
ajaxRequest('GET', 'php/F3.php/Descr_lum', afficherDescr_lum);
ajaxRequest('GET', 'php/F3.php/Descr_surface', afficherDescr_surface);
ajaxRequest('GET', 'php/F3.php/Descr_secu', afficherDescr_secu);
ajaxRequest('GET', 'php/F3.php/listVille', afficherListVille);
ajaxRequest('GET', 'php/F3.php/listGravite', afficher_gravite);