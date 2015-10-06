var express = require('express');
var router = express.Router();

var order = require('../Model/order');
var parentclass=require('../Controller/OrdersController.js');


//var app = express();
//app.use(passport.initialize());
//app.use(passport.session());


// Function to create Order //
router.get('/fetch',function(req,res){

        
      parentclass.listingdata(req,res);
      
     


    });
router.get('/checkcartvalue',function(req,res){

        
      parentclass.checkcartvalue(req,res);
      
     


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
router.post('/product', function(req, res) {

      parentclass.product(req.body.id,req,res);
});

router.post('/addcart', function(req, res) {
          
      parentclass.addcart(req.body,req,res);
});
router.post('/checkcart', function(req, res) {
          
      parentclass.checkcart(req.body,req,res);
});
router.post('/remove', function(req, res) {
          
      parentclass.remove(req.body,req,res);
});

router.get('/addquan', function(req, res) {

         parentclass.addquan(req.query,req,res);
     
});
router.post('/checkpcartvalue', function(req, res) {
          
      parentclass.checkcart(req.body,req,res);
});



















module.exports =router;
