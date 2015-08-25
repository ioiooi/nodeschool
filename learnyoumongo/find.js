var mongo = require('mongodb').MongoClient,
	age = process.argv[2],
	url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
	if (err) throw err;

	var parrots = db.collection('parrots');
	parrots.find({
		'age': {
			$gt: parseInt(age)
		}
	}).toArray(function(err, documents) {
		if (err) throw err;
		console.log(documents);
		db.close();
	});
});