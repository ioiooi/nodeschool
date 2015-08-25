var mongo = require('mongodb').MongoClient,
	url = 'mongodb://localhost:27017/',
	database = process.argv[2],
	collectionArg = process.argv[3],
	id = process.argv[4];

	url += database;

mongo.connect(url, function(err, db) {
	if (err) throw err;

	var collection = db.collection(collectionArg);

	collection.remove({
		_id: id 
	}, function(err, result) {
		if (err) throw err;
		db.close();
	});
});