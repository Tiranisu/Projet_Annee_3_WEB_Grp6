<?php
require_once("constants.php");
  function dbConnect()
  {
    try
    {
      $db = new PDO('mysql:host='.DB_SERVER.';port='.DB_PORT.';dbname='.DB_NAME.';charset=utf8', DB_USER, DB_PASSWORD);
      $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 
    }
    catch (PDOException $exception)
    {
      error_log('Connection error: '.$exception->getMessage());
      return false;
    }
    return $db;
  }


  function get_all_crashs($db){
    $query = $db->prepare("SELECT id_accident,age,date,heure,nom_ville,lati,longi,nom_athmo,nom_lum,nom_surface,nom_secu,nom_gravite FROM accident,descr_lum,ville,descr_athmo,descr_surface,descr_secu,gravite WHERE accident.id_descr_lum=descr_lum.id_descr_lum AND accident.code_insee=ville.code_insee AND accident.id_descr_athmo=descr_athmo.id_descr_athmo AND accident.id_descr_surface=descr_surface.id_descr_surface AND accident.id_descr_secu=descr_secu.id_descr_secu AND accident.id_gravite=gravite.id_gravite ORDER BY id_accident DESC LIMIT 500");
    $query->execute();
    $result = $query->fetchAll(PDO::FETCH_ASSOC);
    return $result;
  }



  function get_filter_crash($db, $ville, $athmo, $lum, $surface, $secu, $gravite){
    
    if ($ville == "0") {
        $ville = " 1=1";
    } else {
        $ville = " nom_ville ='" . $ville . "'";
    }
    if ($athmo == "0") {
        $athmo = " 1=1";
    } else {
        $athmo = " nom_athmo='" . $athmo . "'";
    }
    if ($lum == "0") {
        $lum = " 1=1";
    } else {
        $lum = " nom_lum='" . $lum . "'";
    }
    if ($surface == "0") {
        $surface = " 1=1";
    } else {
        $surface = " nom_surface='" . $surface . "'";
    }
    if ($secu == "0") {
        $secu = " 1=1";
    } else {
        $secu = " nom_secu='" . $secu . "'";
    }
    if ($gravite == "0") {
        $gravite = " 1=1";
    } else {
        $gravite = " nom_gravite='" . $gravite . "'";
    }
    

    $statement = $db->prepare("SELECT id_accident,age,date,heure,nom_ville,lati,longi,nom_athmo,nom_lum,nom_surface,nom_secu,nom_gravite FROM accident,descr_lum,ville,descr_athmo,descr_surface,descr_secu,gravite WHERE accident.id_descr_lum=descr_lum.id_descr_lum AND accident.code_insee=ville.code_insee AND accident.id_descr_athmo=descr_athmo.id_descr_athmo AND accident.id_descr_surface=descr_surface.id_descr_surface AND accident.id_descr_secu=descr_secu.id_descr_secu AND accident.id_gravite=gravite.id_gravite AND ".$ville." AND ".$secu." AND ".$surface." AND ".$athmo." AND ".$lum." AND ".$gravite." ORDER BY id_accident DESC LIMIT 100");
    $statement->execute();
    $result = $statement->fetchAll(PDO::FETCH_ASSOC);
    return $result;
}

function get_accident_infos($db, $id_accident){
    $statement = $db->prepare("SELECT * from accident where id_accident=".$id_accident);
    $statement->execute();
    $result = $statement->fetchAll(PDO::FETCH_ASSOC);
    return $result;
}



function getVille($db){
    try{
        $request = 'SELECT nom_ville FROM ville ORDER BY nom_ville';
        $statement = $db->prepare($request);
        $statement->execute();
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }
    catch(PDOException $e){
        return false;
    }
}


function getDescr_athmo($db){
    try{
        $request = 'SELECT nom_athmo FROM descr_athmo';
        $statement = $db->prepare($request);
        $statement->execute();
        return $statement->fetchAll(PDO::FETCH_ASSOC);

    }
    catch(PDOException $e){
        return false;
    }
}


function getDescr_lum($db){
    try{
        $request = 'SELECT nom_lum FROM descr_lum';
        $statement = $db->prepare($request);
        $statement->execute();
        return $statement->fetchAll(PDO::FETCH_ASSOC);

    }
    catch(PDOException $e){
        return false;
    }
}


function getDescr_surface($db){
    try{
        $request = 'SELECT nom_surface FROM descr_surface';
        $statement = $db->prepare($request);
        $statement->execute();
        return $statement->fetchAll(PDO::FETCH_ASSOC);

    }
    catch(PDOException $e){
        return false;
    }
}


function getDescr_secu($db){
    try{
        $request = 'SELECT nom_secu FROM descr_secu';
        $statement = $db->prepare($request);
        $statement->execute();
        return $statement->fetchAll(PDO::FETCH_ASSOC);

    }
    catch(PDOException $e){
        return false;
    }
}



function getGravite($db){
    try{
        $request = 'SELECT nom_gravite FROM gravite';
        $statement = $db->prepare($request);
        $statement->execute();
        return $statement->fetchAll(PDO::FETCH_ASSOC);

    }
    catch(PDOException $e){
        return false;
    }
}


function update_gravite($db,$id,$grav){
    $statement = $db->prepare("UPDATE accident SET id_gravite = :grav WHERE id_accident = :accident");
    $statement->bindParam(':grav', $grav);
    $statement->bindParam(':accident', $id);
    $statement->execute();
}


?>