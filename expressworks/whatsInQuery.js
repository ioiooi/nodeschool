var express = require('express');
var port = process.argv[2];

var app = express();
app.get('/search', function(req, res) {
    var json = {},
        queryObj = req.query;

    for (var key in queryObj) {
        json[key] = queryObj[key];
    }
    res.send(json);
});
app.listen(port);