var express = require('express');
var user=require('../Controller/UsersController.js');
var router = express.Router();
var userobj=new user.users();


router.post('/',function(req, res) {
      
      result=userobj.userpost(req.body);
        console.log(result);
      res.send(result);
    });

module.exports =router;
