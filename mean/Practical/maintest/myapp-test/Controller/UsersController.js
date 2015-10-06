var express = require('express');
var router = express.Router();
var modeluser = require('../Model/usermodel');


// Function to create Users //

var users=function(){

this.userpost=function(req){

       
      var userid = req.id;
      var first_name = req.first_name;
      var last_name = req.last_name;
      var email = req.email;
      var password = req.password;
      var age = req.age;
      newdata=modeluser({
          _id:userid,
          first_name:first_name,
          last_name:last_name,
          email:email,
          password:password,
          age:age,
                      });
          
        newdata.save(function(err){
        if (err) {
             //console.log("Here");
            var res={"Status":"NotDone"};
            return res;
            //code
          }else{
               var res={"Status":"Done"};
           return res;
       }
        });


}


}









exports.users =users;
