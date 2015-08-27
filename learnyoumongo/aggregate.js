var mongo = require('mongodb').MongoClient,
	url = 'mongodb://localhost:27017/learnyoumongo',
	size = process.argv[2];

mongo.connect(url, function(err, db) {
	if (err) throw err;

	var prices = db.collection('prices'),
		/*
		* aggregation pipelines
		* $match is used similar to the way a query is done. 
		* It allows us to select the documents that meet certain criteria.
		*
		* $group is what allows us to run operations on certain properties.
		* Other $group operators include: $avg, $min, $max, $push etc. .
		*
		*/
		match = {
			$match: {
				'size': size
			}
		},
		group = {
			$group: {
				_id: 'avg',
				avg: {
					$avg: '$price'
				}
			}
		};

	prices.aggregate([match, group]).toArray(function(err, results) {
		// results is a array. dont know why.
		// solution rounded to 2 decimal places
		var avgDecimal = results[0].avg.toFixed(2);
		console.log(avgDecimal);
		db.close();
	});

});