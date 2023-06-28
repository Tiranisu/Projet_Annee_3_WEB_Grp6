<?php 
require_once('database.php');
session_start();

// Database connexion.
$db = dbConnect();
if (!$db)
{
  header ('HTTP/1.1 503 Service Unavailable');
  exit;
}

// Check the request.
$requestMethod = $_SERVER['REQUEST_METHOD'];
$request = substr($_SERVER['PATH_INFO'], 1);
$request = explode('/', $request);
$requestRessource = array_shift($request);

$id = array_shift($request);
  if ($id == '')
    $id = NULL;

$data = false; // contient les valeursà encoder en JSON à la fin de ce fichier

ini_set('display_errors', 1);
error_reporting(E_ALL);



if($requestMethod == "GET"){
    if($requestRessource=="kmeans"){
        #on lance le python
        exec("python ../cgi/kmeans.py");
        #on recupere le json depuis un fichier temp
        $json = file_get_contents("output.json");
        $data = json_decode($json);
        exec("rm output.json");
    }
    if($requestRessource=="knn"){
            #on lance le python
        #exec("python ../cgi/knn.py ../export 10 2 1 1 1 14 2 2 10");
        exec('python ../cgi/knn.py ../export $_GET["age"] $_GET["date"] $_GET["descr_cat_veh"] $_GET["descr_agglo"] $_GET["descr_athmo"] $_GET["description_intersection"] $_GET["descr_dispo_secu"] $_GET["descr_type_col"]');
        #on recupere le json depuis un fichier temp
        $json = file_get_contents("knn.json");
        exec("rm knn.json");
    }
}

header('Content-Type: application/json; charset=utf-8');
header('Cache-control: no-store, no-cache, must-revalidate');
header('Pragma: no-cache');
header('HTTP/1.1 200 OK');
echo json_encode($data);
exit;