import {ajaxRequest} from 'utils.js';

function printtest(infos){
    console.log(infos)
    var element = document.getElementById("maValeur");
    element.innerHTML = infos['id'];
}


function envoyerAjout(){
    
}

document.getElementById("monBouton").addEventListener("click", function() {
    // Code à exécuter lorsque le bouton est cliqué
    console.log("Le bouton a été cliqué !");
    ajaxRequest('GET', `../php/indexRequest.php/test`, printtest)
  });
