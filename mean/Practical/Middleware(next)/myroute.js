var express = require('express');
var router = express.Router();

// a middleware sub-stack which handles GET requests to /user/:id
router.get('/', function (req, res) {
  res.send("hi");
 
});

router.get('/abc', function (req, res) {
  res.send("hi i am a specific request");
 
});
module.exports=router;

