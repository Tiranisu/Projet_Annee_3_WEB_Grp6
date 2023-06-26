<?php
require_once('database.php');

// Enable all warnings and errors.
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Database connexion.
$db = dbConnect();

// Check the request.
$requestMethod = $_SERVER['REQUEST_METHOD'];
$request = substr($_SERVER['PATH_INFO'], 1);
$request = explode('/', $request);
$requestRessource = array_shift($request);



if ($requestRessource == "test"){
    $data = returnOUI($db);
    // echo $data;
}



header('Content-Type: application/json; charset=utf-8');
header('Cache-control: no-store, no-cache, must-revalidate');
header('Pragma: no-cache');
header('HTTP/1.1 200 OK');
echo json_encode($data);
?>