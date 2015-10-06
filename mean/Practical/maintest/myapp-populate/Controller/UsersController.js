var express = require('express');
var router = express.Router();
var modeluser = require('../Model/usermodel');
var storyuser = require('../Model/stories');



// Function to create Users //
router.post('/',function(req,res){
    
    
     aaron = modeluser(req.body);
//res.send(req.body);
aaron.save(function (err) { 
  if (err) {
             console.log("Here");
             res.send(err);
            //code
          }else{
          
              var story1 =  storyuser({
                        title: "Once upon a time.",
                        _creator:aaron._id    // assign the _id from the person
            });
               story1.save(function (err) {
           if (err) {
             res.send("Second Table data not saved");
           }else{
            console.log(aaron._id);
             console.log(story1._id);
            modeluser.update({"_id":aaron._id},{$set:{"stories":story1._id}} ,function(err, result){
    res.send(
        (err === null) ? {msg: 'Updated'} : {msg: err}
    );
   });
          
           }
     
  });
  //          
  //          
  //          
  //          res.send(
  //      (err === null) ? {msg: 'Saved'} : {msg: err}
  //  );
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

router.post('/populating',function(req,res) {
       //storyuser.find({},function(err, docs){
       //         res.send('index',{docs:docs});
       // });
         
storyuser.findOne({title:'Once upon a time.'}).populate('_creator').exec(function(err,result){
  if (err) console.log(err);
  
  res.send('index',{result:result});
  console.log('The creator is %s',result._creator.name);
 
});
    
   
    });






module.exports =router;
