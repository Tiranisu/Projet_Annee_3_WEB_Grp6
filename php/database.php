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
        $request = 'SELECT nom_ville FROM ville';
        $statement = $db->prepare($request);
        $statement->execute();
        return $statement->fetchALl(PDO::FETCH_ASSOC);

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
        return $statement->fetchALl(PDO::FETCH_ASSOC);

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
        return $statement->fetchALl(PDO::FETCH_ASSOC);

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
        return $statement->fetchALl(PDO::FETCH_ASSOC);

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
        return $statement->fetchALl(PDO::FETCH_ASSOC);

    }
    catch(PDOException $e){
        return false;
    }
}


function ajout_accident($db, $age, $date, $heure, $ville, $lat, $lon, $descr_athmo, $descr_lum, $descr_surface, $descr_secu){
    try{
        $request = 'INSERT INTO accident (age, date, heure, ville, longi, lati, added_status, id_descr_athmo, id_descr_lum, id_descr_surface, id_descr_secu)
        VALUES (:age, :date, :heure, :ville, :longi, :lati,  1, :id_descr_agglo, :id_descr_lum, :id_descr_surface, :id_descr_secu)';

        $statement = $$db->prepare($request);
        $statement->bindParam(':age', $age);
        $statement->bindParam(':date', $date);
        $statement->bindParam(':heure', $heure);
        $statement->bindParam(':ville', $ville);
        $statement->bindParam(':longi', $lon);
        $statement->bindParam(':lati', $lat);
        $statement->bindParam(':id_descr_athmo', $descr_athmo);
        $statement->bindParam(':id_descr_lum', $descr_lum);
        $statement->bindParam(':id_descr_surface', $descr_surface);
        $statement->bindParam(':id_descr_secu', $descr_secu);
        $statement->execute();
        
    }
    catch(PDOException $e){
        return false;
    }
}
?>
