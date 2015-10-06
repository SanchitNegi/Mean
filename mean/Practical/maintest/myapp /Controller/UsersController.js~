var express = require('express');
var router = express.Router();
var modeluser = require('../Model/usermodel');


// Function to create Users //
router.post('/',function(req, res) {
       //res.send(req.body);  
      var userid = req.body.id;
      var first_name = req.body.first_name;
      var last_name = req.body.last_name;
      var email = req.body.email;
      var password = req.body.password;
      var age = req.body.age;
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
             console.log("Here");
            res.send(err);
            //code
          }else{
            
            res.send(
        (err === null) ? {msg: 'Saved'} : {msg: err}
    );
          }
        });
    
    });



// Function to update  Users  based on Id//
router.put('/updateuser/:id', function(req, res) {


modeluser.update(
{_id:req.params.id},
  {$set:req.body},
    function(err, result){
    res.send(
        (err === null) ? {msg: 'Updated'} : {msg: err}
    );
   });
});





// Function to delte  Users  based on Id//
router.delete('/deleteuser/:id', function(req, res) {

uid=req.params.id;
modeluser.remove({"_id":uid},function(err,result){
   if (err) {
    
   }else{
    res.send("Deleted");
   }
    //code
   });
});





// Function to list  Users  based on Id//
router.get('/list', function(req,res) {
//var test=new modeluser();
//var a=test.listing();
//res.send(a);
  modeluser.find({},function(err, docs){
                res.send('index',{docs:docs});
        });
    //code
   });




// Function to list  Users  based on Id//
router.get('/simplecall', function(req,res) {
var test=new modeluser();
var a=test.listing();
res.send(a);
  
    //code
   });


router.post('/secondway',function(req, res) {
         
res.send(req.body);

newdatas=modeluser(req.body);
       newdatas.save(function(err){
        if (err) {
             console.log("Here");
            res.send(err);
            //code
          }else{
            
            res.send('Save');
          }
        });
    
   
    });






module.exports =router;
