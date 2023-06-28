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



if($requestMethod == "POST"){
    if ($requestRessource == "ajout_accident"){
        $data = ajout_accident($db, $_POST['age'], $_POST['date'], $_POST['heure'], $_POST['ville'], $_POST['latitude'], $_POST['longitude'], $_POST['descr_athmo'], $_POST['descr_lum'], $_POST['descr_surface'], $_POST['descr_secu'], $_POST['descr_type_col'], $_POST['descr_intersection'], $_POST['descr_cat_veh'], $_POST['descr_agglo']);
    }
}elseif($requestMethod == "GET"){
    if($requestRessource == "listVille"){
        $data = getVille($db);
    }
    if($requestRessource == "Descr_athmo"){
        $data = getDescr_athmo($db);
    }
    if($requestRessource == "Descr_lum"){
        $data = getDescr_lum($db);
    }
    if($requestRessource == "Descr_surface"){
        $data = getDescr_surface($db);
    }
    if($requestRessource == "Descr_secu"){
        $data = getDescr_secu($db);
    }
    if($requestRessource == "Descr_type_col"){
        $data = getDescr_type_col($db);
    }
    if($requestRessource == "Descr_intersection"){
        $data = getDescr_intersection($db);
    }
    if($requestRessource == "Descr_cat_veh"){
        $data = getDescr_cat_veh($db);
    }
    if($requestRessource == "Descr_agglo"){
        $data = getDescr_agglo($db);
    }
}







header('Content-Type: application/json; charset=utf-8');
header('Cache-control: no-store, no-cache, must-revalidate');
header('Pragma: no-cache');
if ($requestMethod == 'POST')
        header('HTTP/1.1 201 Created');
else
        header('HTTP/1.1 200 OK');
echo json_encode($data);
exit;
?>