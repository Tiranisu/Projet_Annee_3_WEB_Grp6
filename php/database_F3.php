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
    $query = $db->prepare("SELECT id_accident,age,date,heure,nom_ville,lati,longi,nom_athmo,nom_lum,nom_surface,nom_secu,nom_gravite FROM accident,descr_lum,ville,descr_athmo,descr_surface,descr_secu,gravite WHERE accident.id_descr_lum=descr_lum.id_descr_lum AND accident.code_insee=ville.code_insee AND accident.id_descr_athmo=descr_athmo.id_descr_athmo AND accident.id_descr_surface=descr_surface.id_descr_surface AND accident.id_descr_secu=descr_secu.id_descr_secu AND accident.id_gravite=gravite.id_gravite ORDER BY id_accident DESC LIMIT 100");
    $query->execute();
    $result = $query->fetchAll(PDO::FETCH_ASSOC);
    return $result;
    return false;
  }

?>