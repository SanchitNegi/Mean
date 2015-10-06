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
            var msg={"Status":"Fail","Error":"Data not correct"};
            res.send(msg);
            //code
          }else{
              var msg={"Status":"Ok","Error":"Data  correct"};
            var a=JSON.stringify(msg);
            res.send(
        a
    );
          }
        });
    
    });



// Function to update  Users  based on Id//
router.put('/updateuser/:id', function(req, res) {

console.log(req.params.id);
modeluser.update(
{"first_name":req.params.id},
  {$set:req.body},
  {multi:true},
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
        }).sort({"lastModified":-1});
    //code
   });




// Function to list  Users  based on Id//
router.get('/simplecall', function(req,res) {
var test=new modeluser();
var a=test.listing();
res.send(a);
  
    //code
   });




// FindAndModify
router.get('/findmodify/:id',function(req, res) {
 modeluser.findOneAndUpdate({"first_name":"Sanchit" },{$inc:{"score":1 }},{"new":true},function(err, user) {
  if (err) throw err;

  // we have the updated user returned to us
  res.send(user);
});

    
//modeluser.findOneAndUpdate({
//    {"first_name":req.params.id},
//    {"age": 1},
//    { $inc: { score: 1 } },
//    upsert: true,
//})
});






module.exports =router;
