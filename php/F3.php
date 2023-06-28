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