function test(data)
{
	console.log(data);
	jdata = data.data;
	console.log(jdata.map(row => row[0]));
}

ajaxRequest("GET", "php/kmeans.php", test);
