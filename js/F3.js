



//------------------------------------------------------------------------------
//--- Crash Display ------------------------------------------------------------
//------------------------------------------------------------------------------
function crashDisplayer(data){
    let crashTable;  
    crashTable = document.getElementById('table_body');
    for(let d of data){
        const elem = document.createElement("tr");
        elem.classList.add("accident");
        elem.id = d["id_accident"];
        elem.innerHTML='<td class="sep"><div class="text2 acc_id">'+d["id_accident"]+'</div></td><td class="sep"><div class="text2 acc_age">'+d["age"]+'</div></td><td class="sep"><div class="text2 acc_date">'+d["date"]+'</div></td><td class="sep"><div class="text2 acc_heure">'+d["heure"]+'</div></td><td class="sep"><div class="text2 acc_ville">'+d["nom_ville"]+'</div></td><td class="sep"><div class="text2 acc_lat">'+d["lati"]+'</div></td><td class="sep"><div class="text2 acc_lon">'+d["longi"]+'</div></td><td class="sep"><div class="text2 acc_athm">'+d["nom_athmo"]+'</div></td><td class="sep"><div class="text2 acc_lum">'+d["nom_lum"]+'</div></td><td class="sep"><div class="text2 acc_sur">'+d["nom_surface"]+'</div></td><td class="sep"><div class="text2 acc_sec">'+d["nom_secu"]+'</div></td><td class="sep"><div class="text2 acc_grav">'+d["nom_gravite"]+'</div></td><td class="sep"><div class="text2 acc_select"><input type="radio" class="radio_input" name="selection" value="'+d["id_accident"]+'"></div></td>';
        crashTable.appendChild(elem);
      }
    //console.log(data);
};





//------------------------------------------------------------------------------
//--- Predict request ----------------------------------------------------------
//------------------------------------------------------------------------------

// Perform a predict request.
// \param data The data associated with the request.

ajaxRequest('GET', 'php/F3.php/get_all_crashs', crashDisplayer);
