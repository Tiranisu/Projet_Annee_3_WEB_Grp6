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

function get_all_crashed($db){
    $query = $db->prepare("SELECT * FROM accident,descr_lum,ville,descr_athmo,descr_surface,descr_secu WHERE accident.id_descr_lum=descr_lum.id_descr_lum AND accident.code_insee=ville.code_insee AND accident.id_descr_athmo=descr_athmo.id_descr_athmo AND accident.id_descr_surface=descr_surface.id_descr_surface AND accident.id_descr_secu=descr_secu.id_descr_secu");
    $query->execute();
    $result = $query->fetchAll(PDO::FETCH_ASSOC);
    return $result;
}


?>
