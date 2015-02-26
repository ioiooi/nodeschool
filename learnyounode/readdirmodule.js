var fs = require('fs');
module.exports = function(dir, ext, callback) {
	var data = [];
	fs.readdir(dir, function(err, list) {
		if (err) return callback(err);
		for (var i = 0; i < list.length; i++) {
			if (list[i].indexOf('.' + ext) != -1) {
				data.push(list[i]);
			};
		};
		callback(null, data);
	});
};