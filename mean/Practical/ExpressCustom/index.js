var express = require('express');
var router = express.Router();
var app     = express();
var path    = require("path");
//app.set('views', path.join(__dirname, 'views'));
app.set('views','trr');
app.set('view engine', 'jade');


/* GET home page. */
//app.use('/',function(req,res,next){
// console.log("hi");
//  //__dirname : It will resolve to your project folder.
//});
app.get('/',function(req,res,next){
  res.render('index.jade');
  //__dirname : It will resolve to your project folder.
});
app.get('/about',function(req,res,next){
  res.render('about.jade');
  //__dirname : It will resolve to your project folder.
});
app.get('/login',function(req,res,next){
  res.render('login.jade');
  //__dirname : It will resolve to your project folder.
});

app.listen(3000);
console.log("Running at Port 3000");
