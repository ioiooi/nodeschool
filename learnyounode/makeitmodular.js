var rdm = require('./readdirmodule.js');
var dir = process.argv[2];
var ext = process.argv[3];

rdm(dir, ext, function(err, data) {
	if (err) throw err;
	data.map(function(item) {
		console.log(item);
	});
});