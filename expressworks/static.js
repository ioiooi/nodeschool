var express = require('express');
var port = process.argv[2];
var index = process.argv[3];

var app = express();
app.use(express.static(index));

app.listen(port);