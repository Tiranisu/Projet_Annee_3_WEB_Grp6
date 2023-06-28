<?php 

require_once("database.php");

ini_set('display_errors', 1);
error_reporting(E_ALL);

$db=dbConnect();
$requestMethod = $_SERVER['REQUEST_METHOD'];
$request = substr($_SERVER['PATH_INFO'], 1);
$request = explode('/', $request);
$requestRessource = array_shift($request);

$data=false;

if($requestMethod == "GET"){
    if($requestRessource=="get_all_crashs"){
        $data=get_all_crashs($db);
    }
}

#on lance le python
exec("python ../cgi/knn.py ../export 10 2 1 1 1 14 2 2 10");

#on recupere le json depuis un fichier temp
$json = file_get_contents("knn.json");
exec("rm knn.json");

header('Content-Type: application/json; charset=utf-8');
header('Cache-control: no-store, no-cache, must-revalidate');
header('Pragma: no-cache');
header('HTTP/1.1 200 OK');
echo $json;
#echo json_encode("ok");
exit;
