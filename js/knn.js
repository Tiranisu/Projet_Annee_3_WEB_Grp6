function knn(data)
{
    console.log(data);
}

ajaxRequest("GET", "php/predict.php/knn/?id", knn);
