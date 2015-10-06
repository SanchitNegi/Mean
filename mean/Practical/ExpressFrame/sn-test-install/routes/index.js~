var express = require('express');
var validator = require('validator');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log(req.param.id);
res.render('index',{ title: 'Express' });
});

router.post('/', function(req,res,next) {
 //console.log("Hi");

if(validator.isEmail(req.body.email)){
//res.writeHead(200, {'Content-Type': 'text/event-stream'});
//res.header('X-Powered-By', 'Flight Tracker');
//res.set('content-length','48');
//res.send(req.headers);
var myOtherArray = [ 
  {
    "first" : "John",
    "last" : "Smith"
  }, 
  {
    "first" : "Jane",
    "last" : "Doe"
  }
];
res.send(myOtherArray);
}else{

res.render('index',{ message: 'Please Enter Email Only' });
}


});

module.exports = router;
