var express = require('express');
var fs = require('fs');
var port = process.argv[2];
var file = process.argv[3];

var app = express();
app.get('/books', function(req, res) {
    var json = {};

    fs.readFile(file, function(err, data) {
        if (err) throw err;

        try {
            json = JSON.parse(data);
        } catch (err) {
            res.sendStatus(500);
        }
        res.json(json);
    });
});
app.listen(port);