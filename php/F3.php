<?php
require_once("database.php");


ini_set('display_errors', 1);
error_reporting(E_ALL);

$db=dbConnect();
$requestMethod = $_SERVER['REQUEST_METHOD'];
$request = substr($_SERVER['PATH_INFO'], 1);
$request = explode('/', $request);
$requestRessource = array_shift($request);

//$data=false;

if($requestMethod == "GET"){
    if($requestRessource=="get_all_crashs"){
        $data=get_all_crashs($db);
    }
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
    if($requestRessource == "listGravite"){
        $data = getGravite($db);
    }
    if($requestRessource == "filtre_request"){
        $id = array_shift($request);
        if ($id == "") {
            $id = NULL;
        }
        $data = get_filter_crash($db, $_GET['ville'], $_GET['athmo'], $_GET['lum'], $_GET['surface'], $_GET['secu'], $_GET['gravite']);
    }
    if($requestRessource == "get_accident_infos"){
        $id = array_shift($request);
        if ($id == "") {
            $id = NULL;
        }
        $data = get_accident_infos($db, $_GET['id_accident']);
    }
    if($requestRessource == "predictions"){
        $id = array_shift($request);
        if ($id == "") {
            $id = NULL;
        }
        //$data[0] = get_accident_infos($db, $_GET['id_accident']);
        exec("python ../cgi/knn.py ../export ".$_GET['age']." ".$_GET['heure']." ".$_GET['cat_veh']." ".$_GET['agglo']." ".$_GET['athmo']." ".$_GET['inter']." ".$_GET['secu']." ".$_GET['col']." 10",$data[0]);
    
        exec("python ../cgi/F4_algorithmes_haut_niveau.py ".$_GET['age']." ".$_GET['heure']." ".$_GET['cat_veh']." ".$_GET['agglo']." ".$_GET['athmo']." ".$_GET['inter']." ".$_GET['secu']." ".$_GET['col']." RF",$data[1]);
        exec("python ../cgi/F4_algorithmes_haut_niveau.py ".$_GET['age']." ".$_GET['heure']." ".$_GET['cat_veh']." ".$_GET['agglo']." ".$_GET['athmo']." ".$_GET['inter']." ".$_GET['secu']." ".$_GET['col']." MLP",$data[2]);
        exec("python ../cgi/F4_algorithmes_haut_niveau.py ".$_GET['age']." ".$_GET['heure']." ".$_GET['cat_veh']." ".$_GET['agglo']." ".$_GET['athmo']." ".$_GET['inter']." ".$_GET['secu']." ".$_GET['col']." SVM",$data[3]);

    }
}
if($requestMethod == "PUT"){
    $id = array_shift($request);
    if ($id == "") {
        $id = NULL;
    }
    if($requestRessource=="update_gravite"){
        parse_str(file_get_contents('php://input'), $_PUT);
        $data=update_gravite($db, $_PUT['id_accident'], $_PUT['gravite']);
    }


}




//exec("python3 predict.py X X X X XX X  X X X", $output);
//print($output)


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