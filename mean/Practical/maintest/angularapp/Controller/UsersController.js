var express = require('express');
var router = express.Router();

var users = require('../Model/usermodel');
var passport = require('passport'),
 LocalStrategy = require('passport-local').Strategy;
 var nodemailer = require("nodemailer");
 var transporter = nodemailer.createTransport("SMTP",{
    service: "gmail",
    auth: {
        user: "krishan2kamal@gmail.com",
        pass: "9470816594"
    }
});

//var app = express();
//app.use(passport.initialize());
//app.use(passport.session());


// Function to create Users //
router.post('/',function(req,res,next){
  
   console.log(req.body);
     savecat = users(req.body);

savecat.save(function (err) { 
  if (err) {
           console.log(err);
             status={"status":"There is some thing wrong, PLease Try Again"};
             res.json(status);
            //code
          }else{
               
                status={"status":"Users has been registered successfully"};
                 var mailOptions = {
                         from: '<sanchitnegi6@gmail.com>', // sender address 
                         to:req.body.email, // list of receivers 
                         subject: 'Registration', // Subject line
                         html: '<b>Hello'+req.body.first_name+',</b><p>You have been successfully registered on our site.</p><p>You Credentials:</p><p>Email:'+req.body.email+'</p><p>Password:'+req.body.password+'</p></p>Thanks</p>'
                         // html body 
                    };

               
               transporter.sendMail(mailOptions, function(error, response){
               if(error){
                      console.log(error);
                 
               }else{
                      console.log("Message sent: " + response.message);
                  
                   }
});

               res.json(status);
               //next();
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
       
       users.find({},function(err, docs){
                res.send('index',{docs:docs});
        });
         

 
 
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

passport.use(new LocalStrategy(function(username, password, done) {
  
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
