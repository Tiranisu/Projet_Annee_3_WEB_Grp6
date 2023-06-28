function knn(data)
{
    console.log(data);
}

ajaxRequest("GET", "php/predict.php/knn/70000", knn);
