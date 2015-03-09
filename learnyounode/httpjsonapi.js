var http = require('http');
var url = require('url');
var port = process.argv[2];
var query = process.argv[3];

var server = http.createServer(function(req, res) {
	var urlobj = url.parse(req.url, true);
	switch (urlobj.pathname) {
		case '/api/parsetime':
			res.writeHead(200, {
				'Content-Type': 'application/json'
			});
			res.end(JSON.stringify(parseTime(urlobj.query)));
			break;
		case '/api/unixtime':
			res.writeHead(200, {
				'Content-Type': 'application/json'
			});
			res.end(JSON.stringify(unixTime(urlobj.query)));
			break;
		default:
			break;
	}
});
server.listen(port);

function parseTime(query) {
	var isoDate = query["iso"];
	var date = new Date(isoDate);
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	return {
		"hour":h,
		"minute":m,
		"second":s
	}
}

function unixTime(query) {
	var isoDate = query["iso"];
	var date = new Date(isoDate);
	var u = date.getTime();
	return {
		"unixtime":u,
	}
}