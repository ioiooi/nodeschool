var http = require('http');
var urls = process.argv.slice(2);
var count = 0;
var results = [];

for (var i = 0; i < urls.length; i++) {
	var a = function(j) {
		http.get(urls[j], function(res) {
			var dataSum = "";
			res.on('data', function(data) {
				dataSum += data;
			});
			res.on('end', function() {
				results[j] = dataSum;
				count++;

				if (count === 3) {
					printResult(results);
				}
			});
		});
	};
	a(i);
};

function printResult(arr) {
	for (var i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	};
};