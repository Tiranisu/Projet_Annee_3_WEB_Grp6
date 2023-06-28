<?php 

#on lance le python
#exec("ls -la" , $a);
exec(" python ../cgi/kmeans.py", $a);

#on recupere le json depuis un fichier temp
$json = file_get_contents("output.json");
#exec("rm output.json");

header('Content-Type: application/json; charset=utf-8');
header('Cache-control: no-store, no-cache, must-revalidate');
header('Pragma: no-cache');
header('HTTP/1.1 200 OK');
echo $json;
#echo json_encode($a);
exit;
