<?php
require_once('constants.php');
  
function dbConnect(){
try{
    $db = new PDO('mysql:host='.DB_SERVER.';port='.DB_PORT.';dbname='.DB_NAME.';charset=utf8', DB_USER, DB_PASSWORD);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 
}
catch (PDOException $exception){
    error_log('Connection error: '.$exception->getMessage());
    return false;
}
return $db;
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
        $request = 'SELECT nom FROM descr_athmo';
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
        $request = 'SELECT nom FROM descr_lum';
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
        $request = 'SELECT nom FROM descr_surface';
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
        $request = 'SELECT nom FROM descr_secu';
        $statement = $db->prepare($request);
        $statement->execute();
        return $statement->fetchAll(PDO::FETCH_ASSOC);

    }
    catch(PDOException $e){
        return false;
    }
}


function getDescr_type_col($db){
    try{
        $request = 'SELECT nom FROM descr_type_col';
        $statement = $db->prepare($request);
        $statement->execute();
        return $statement->fetchAll(PDO::FETCH_ASSOC);

    }
    catch(PDOException $e){
        return false;
    }
}


function getDescr_intersection($db){
    try{
        $request = 'SELECT nom FROM descr_intersection';
        $statement = $db->prepare($request);
        $statement->execute();
        return $statement->fetchAll(PDO::FETCH_ASSOC);

    }
    catch(PDOException $e){
        return false;
    }
}


function getDescr_cat_veh($db){
    try{
        $request = 'SELECT nom FROM descr_cat_veh';
        $statement = $db->prepare($request);
        $statement->execute();
        return $statement->fetchAll(PDO::FETCH_ASSOC);

    }
    catch(PDOException $e){
        return false;
    }
}


function getDescr_agglo($db){
    try{
        $request = 'SELECT nom FROM descr_agglo';
        $statement = $db->prepare($request);
        $statement->execute();
        return $statement->fetchAll(PDO::FETCH_ASSOC);

    }
    catch(PDOException $e){
        return false;
    }
}


function ajout_accident($db, $age, $date, $heure, $ville, $lat, $lon, $descr_athmo, $descr_lum, $descr_surface, $descr_secu, $descr_type_col, $descr_intersection, $descr_cat_veh, $descr_agglo){
    // return $age;
    try{
        // $request = 'INSERT INTO accident (age, date, heure, ville, longi, lati, added_status, id_descr_athmo, id_descr_lum, id_descr_surface, id_descr_secu, id_descr_type_col, id_descr_intersection, id_descr_cat_veh, code_insee) VALUES (:age, "2018-09-04", 10, (SELECT code_insee FROM ville WHERE nom_ville=:nom_ville), :longi, :lati,  1, (SELECT id_descr_athmo FROM descr_athmo WHERE nom=:descr_athmo), (SELECT id_descr_lum FROM descr_lum WHERE nom=:descr_lum), (SELECT id_descr_surface FROM descr_surface WHERE nom=:descr_surface), (SELECT id_descr_secu FROM descr_secu WHERE nom=:descr_secu), (SELECT id_descr_type_col FROM descr_type_col WHERE nom=:descr_type_col),(SELECT id_descr_intersection FROM descr_intersection WHERE nom=:descr_intersection), (SELECT id_descr_cat_veh FROM descr_cat_veh WHERE nom=:descr_cat_veh));';
        
        $request = 'INSERT INTO accident (age, date, heure, code_insee, longi, lati, added_status, id_descr_athmo, id_descr_lum, id_descr_surface, id_descr_secu, id_descr_type_col, id_descr_intersection, id_descr_cat_veh, id_descr_agglo) VALUES (:age, :date, :heure, (SELECT code_insee FROM ville WHERE nom_ville=:nom_ville), :longi, :lati, 1, (SELECT id_descr_athmo FROM descr_athmo WHERE nom=:descr_athmo), (SELECT id_descr_lum FROM descr_lum WHERE nom=:descr_lum), (SELECT id_descr_surface FROM descr_surface WHERE nom=:descr_surface), (SELECT id_descr_secu FROM descr_secu WHERE nom=:descr_secu), (SELECT id_descr_type_col FROM descr_type_col WHERE nom=:descr_type_col), (SELECT id_descr_intersection FROM descr_intersection WHERE nom=:descr_intersection), (SELECT id_descr_cat_veh FROM descr_cat_veh WHERE nom=:descr_cat_veh), (SELECT id_descr_agglo FROM descr_agglo WHERE nom=:descr_agglo));';

        $statement = $db->prepare($request);
        $statement->bindParam(':age', $age);
        $statement->bindParam(':date', $date);
        $statement->bindParam(':heure', $heure);
        $statement->bindParam(':nom_ville', $ville);
        $statement->bindParam(':longi', $lon);
        $statement->bindParam(':lati', $lat);
        $statement->bindParam(':descr_athmo', $descr_athmo);
        $statement->bindParam(':descr_lum', $descr_lum);
        $statement->bindParam(':descr_surface', $descr_surface);
        $statement->bindParam(':descr_secu', $descr_secu);
        $statement->bindParam(':descr_type_col', $descr_type_col);
        $statement->bindParam(':descr_intersection', $descr_intersection);
        $statement->bindParam(':descr_cat_veh', $descr_cat_veh);
        $statement->bindParam(':descr_agglo', $descr_agglo);
        // return $statement; 
        $statement->execute();  
             
    }
    catch(PDOException $e){
        error_log('Connection error: '.$e->getMessage());
        return $e->getMessage();
    }
    return true;
}



function get_all_crashs($db){
    $query = $db->prepare("SELECT id_accident,age,date,heure,nom_ville,lati,longi,nom_athmo,nom_lum,nom_surface,nom_secu,nom_gravite FROM accident,descr_lum,ville,descr_athmo,descr_surface,descr_secu,gravite WHERE accident.id_descr_lum=descr_lum.id_descr_lum AND accident.code_insee=ville.code_insee AND accident.id_descr_athmo=descr_athmo.id_descr_athmo AND accident.id_descr_surface=descr_surface.id_descr_surface AND accident.id_descr_secu=descr_secu.id_descr_secu AND accident.id_gravite=gravite.id_gravite ORDER BY id_accident DESC LIMIT 100");
    $query->execute();
    $result = $query->fetchAll(PDO::FETCH_ASSOC);
    return $result;
  }
?>


