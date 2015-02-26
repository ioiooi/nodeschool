var http = require('http');
var url = process.argv[2];
var dataSum = "";

http.get(url, function(res) {
	res.setEncoding('utf8');
	res.on('data', function(data) {
		dataSum += data;
	});
	res.on('end', function() {
		console.log(dataSum.length);
		console.log(dataSum);
	});
});