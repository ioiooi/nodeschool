var fs = require('fs');
var pathToFile = process.argv[2];

fs.readFile(pathToFile, 'utf8', function(err, data) {
	if (err) throw err;
	var lines = data.split('\n').length - 1;
	console.log(lines);
});