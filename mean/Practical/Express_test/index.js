var express = require('express');
var app = express();

app.get('/', function (req, res) {
    
  res.send('Hello World!');
});
app.get('/sam', function (req, res) {
    if (req) {
    console.log("hi");
    return false;
    }
  res.send("www.google.com");
});

var server = app.listen(3017, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});