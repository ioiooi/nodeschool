var mongo = require('mongodb').MongoClient,
	url = 'mongodb://localhost:27017/learnyoumongo',
	firstName = process.argv[2],
	lastName = process.argv[3];
	

mongo.connect(url, function(err, db) {
	if (err) throw err;

	// specify the collection named 'docs'
	var collection = db.collection('docs'),
		doc = {
			'firstName': firstName,
			'lastName': lastName
		};

	/**
	 *  insert(docs, options, callback)
	 *  Inserts a single document or a an array of documents into MongoDB.
	 *
	 *
	 *	writeOpCallback(error, result)
	 *  result: The result object if the command was executed successfully.
	 */
	collection.insert(doc, function(err, result) {
		if (err) throw err;

		console.log(JSON.stringify(doc));
		db.close();
	});

});