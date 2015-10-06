var express = require('express');
var router = express.Router();

var order = require('../Model/order');
var parentclass=require('../Controller/OrdersController.js');


//var app = express();
//app.use(passport.initialize());
//app.use(passport.session());


// Function to create Order //
router.post('/',function(req,res){

         parentclass.addData(req,res);
    


    });



router.post('/listing',function(req,res){
      

         parentclass.listingdata(req,res);

 
 
});
  

router.post('/listing/:id',function(req,res) {
      
    uid=req.params.id;
    //res.send(uid);
 users.find({"_id":uid},function(err, docs){
                res.send('index',{docs:docs});
        });
    });
    
   
  




router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

















module.exports =router;
