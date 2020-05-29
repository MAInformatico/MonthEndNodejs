var path = require('path');
var express = require('express');
var app = express();

var publicPath = path.resolve(__dirname, '../');
app.use(express.static(publicPath));

app.get('/', function(req, res) {
    res.sendfile(__dirname + '../index.html');
});

app.listen(8000, function() {
  console.log('App listening port 8000!');
});