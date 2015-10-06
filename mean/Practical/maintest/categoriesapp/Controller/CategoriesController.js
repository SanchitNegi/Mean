var express = require('express');
var router = express.Router();
var category = require('../Model/categories');
var subcategory = require('../Model/subcategory');
var users = require('../Model/usermodel');
var passport = require('passport'),
 LocalStrategy = require('passport-local').Strategy;

//var app = express();
//app.use(passport.initialize());
//app.use(passport.session());


// Function to create Users //
router.post('/',function(req,res){
   
    
     savecat = category(req.body);
savecat.stories.push(story1);
savecat.save(function (err) { 
  if (err) {
             console.log("Here");
             res.send(err);
            //code
          }else{
               console.log(savecat._id);
              var subcategoryinsert =  subcategory({
                        title: "Puma",
                        quantity:10,  // assign the _id from the person
                        category_id:savecat._id
            });
               subcategoryinsert.save(function (err) {
           if (err) {
             var status={"status":"Category Not Saved Successfully"};
           res.send(status);
           }else{
            
            var status={"status":"Category Saved Successfully"};
           res.send(status);
          
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



router.post('/listing',function(req,res) {
       //storyuser.find({},function(err, docs){
       //         res.send('index',{docs:docs});
       // });
         
subcategory.find({}).populate('category_id').exec(function(err,result){
  if (err) console.log(err);
  
  res.send('index',{result:result});
 
 
});
  });

router.post('/listings',function(req,res) {
      
         
category.find({"name":"Shoes"}).populate('subcategory').exec(function(err,result){
  if (err) console.log(err);
  
  res.send('index',{result:result});
 
 
});
    });
    
   
  




router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.post('/login',passport.authenticate('local', {successRedirect: 'loginSuccess',failureRedirect: 'loginFailure'})

);

var mysession;
router.get('/loginSuccess', function(req, res, next) {
     //mysession=req.session;
     //mysession.users=res;
     //res.send(mysession.users);
  res.send('Successfully authenticated');
});
router.get('/loginFailure', function(req, res, next) {
  res.send('authentication Fail');
});



passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new LocalStrategy(function(done) {

  process.nextTick(function() {
    users.findOne({'username':username}, function(err, user) {
          if (err) {
            return done(err);
          }

          if (!user) {
            return done(null, false);
          }

          if (user.password != password) {
            return done(null, false);
          }
      
          return done(null, user);
    });
  });
}));









module.exports =router;
