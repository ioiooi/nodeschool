var express = require('express');
var port = process.argv[2];
var indexJadePath = process.argv[3];

var app = express();

app.set('view engine', 'jade');
app.set('views', indexJadePath);

app.get('/home', function(req, res) {
    res.render('index', {
        date: new Date().toDateString()
    });
});
app.listen(port);