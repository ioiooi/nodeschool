var mongo = require('mongodb').MongoClient,
	url = 'mongodb://localhost:27017/',
	database = process.argv[2];

	url += database;

mongo.connect(url, function(err, db) {
	if (err) throw err;

	var collection = db.collection('users');
	
	/**
	 *  username is unique.
	 *  In MySql terms:
 	 *  UPDATE users SET age = '40' WHERE username = 'tinatime';
	 */
	collection.update({
		username: 'tinatime'
	}, {
		$set: {
			age: 40
		}
	}, function(err) {
		if (err) throw err;
		db.close();
	});
});