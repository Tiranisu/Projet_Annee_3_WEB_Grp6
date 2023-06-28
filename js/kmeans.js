function test(data)
{
    console.log(data);
	console.log(data[0]);
}

ajaxRequest("GET", "php/kmeans.php", test);
