var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var location = process.argv[3];

var server = http.createServer(function(req, res) {
	res.writeHead(200, {
		'content-type': 'text/plain'
	});

	fs.readFile(location, 'utf8', function(err, data) {
		if (err) throw err;
		res.write(data);
		res.end();
	});
});
server.listen(port);
