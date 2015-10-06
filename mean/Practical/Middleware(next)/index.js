var express=require('express');

var routes=require('./san.js');
var app = express();

app.use(function (req, res, next) {
  console.log("hiii");
  next();
});


app.use('/admin', function (req, res,next) {
  console.log('Request Type:', req.originalUrl);
  next();
});

app.use('/',routes);
app.listen(3000);
console.log("Running at Port 3000");
