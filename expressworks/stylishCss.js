var express = require('express');
var port = process.argv[2];
var path = process.argv[3];

var app = express();
app.use(express.static(path));
app.use(require('stylus').middleware(path));

app.listen(port);