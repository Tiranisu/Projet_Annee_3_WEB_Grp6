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
?>
