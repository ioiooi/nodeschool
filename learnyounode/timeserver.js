var net = require('net');
var port = process.argv[2];

function zeroFill(num) {
	if (num <= 9) {
		return "0" + num;
	}
	return num;
}

function createDateString() {
	var date = new Date();
	var dateString = "" + date.getFullYear() + "-" +
	zeroFill(date.getMonth() + 1) + "-" +
	zeroFill(date.getDate()) + " " +
	zeroFill(date.getHours()) + ":" +
	zeroFill(date.getMinutes()) + "\n";
	return dateString;
}

var server = net.createServer(function(socket) {
	socket.end(createDateString());
});
server.listen(port);