var express = require('express');
var router = express.Router();
var category = require('../Model/categories');
var subcategory = require('../Model/subcategory');
var users = require('../Model/usermodel');
//var auth = require('./authorization');
var passport = require('passport'),
 LocalStrategy = require('passport-local').Strategy;
var app = express(),

http = require('http'),
    formidable = require('formidable'),
    fs = require('fs'),
    path = require('path');
var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport("SMTP",{
    service: "gmail",
    auth: {
        user: "krishan2kamal@gmail.com",
        pass: "9470816594"
    }
});

  


// Function to create Users //
router.post('/',function(req,res){
   
   
     savecat = category(req.body);

savecat.save(function (err) { 
  if (err) {
             console.log("Here");
             res.send(err);
            //code
          }else{
               var status={"status":"Category Saved Successfully"};

               res.send(status);
  
          }
        
    
});
    });

    
   

//app.get('/loggedin', function(req, res) { res.send(req.isAuthenticated() ? req.user : '0'); });
router.get('/loggedin', function(req, res) { res.send(req.isAuthenticated() ? req.user : '0'); });

router.post('/login', passport.authenticate('login'),function(req, res) {
    
   //res.header('Access-Control-Allow-Credentials', true);
    res.json(req.user);
  });

router.get('/myprofile',function(req, res) {
      id=req.user._id;
      users.findById(id,function(err, user) {
     
        res.json(user);
                  

 });
    
  });


router.post('/updateProfile',function(req,res) {
    // var form = new formidable.IncomingForm();
    //form.parse(req, function (err, fields, files) {
    //     console.log(files);
    //    var file = files.file;
    //    var username = fields.username;
    //    var tempPath = file.path;
    //    var targetPath = path.resolve('./public/photos/' + username + '/' + file.name);
    //    fs.rename(tempPath, targetPath, function (err) {
    //        if (err) {
    //            throw err
    //        }
    //        logger.debug(file.name + " upload complete for user: " + username);
    //        return res.json({path: 'photos/' + username + '/' + file.name})
    //    })
    //});
  
 
   
   
 users.update({"_id":req.body._id},{$set: req.body},function(req,response,next){
     
          
          if (response.nModified == 1 &&  response.n == 1) {
             res.json(200);
         }else{
             res.json(501);

          }
       
     
})
 });
   
     







passport.serializeUser(function(user, done) {
  console.log("serializing " + user);
 
  done(null,user.id);
});
//

passport.deserializeUser(function(id, done) {
      
    users.findById(id,function(err, user) {
     
        done(err, user);
                  

 });
   
});

passport.use('login',new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'/*,
    passReqToCallback: true,
    session: false*/
  },function(email, password, done) {
  
  process.nextTick(function() {
     
    users.findOne({'email':email}, function(err, user) {
          if (err) {
            return done(err);
          }

          if (!user) {
            return done(null, false);
          }

          if (user.password != password) {
            return done(null, false);
          }
         return done(null,user);
    });
  });
}));


router.get('/logout', function(req, res) {
    req.session.destroy();
  req.logOut();
  res.json(200);
});
router.get('/getSession',ensureAuthenticated,function(req,res) {
    
     console.log("res");
});

router.get('/forget',function(req,res) {
     
     password= generatepassword();
 
     email=req.query.email;
    
     var result=users.find({"email":email},function(err,docs){
          
            if (docs.length >0) {
                 
                 u_id=docs[0]._id;
                 
                 users.update({_id:u_id},{$set:{password:password}},function(err,response){
                   
                                        if (response.nModified==1) {
                                                var mailOptions = {
                                                       from: '<sanchitnegi6@gmail.com>', // sender address 
                                                       to:email, // list of receivers 
                                                       subject: 'New Password', // Subject line 
                                                           html: '<b>Hello'+docs[0].first_name+',</b><p>Your new password is:</p><p>Password:'+password+'</p></p>Thanks</p>'

                                                  };
               
               
                                                  transporter.sendMail(mailOptions, function(error, response){
                                                  if(error){
                                                        res.json(501);
                                                    
                                                  }else{
                                                         
                                                     res.json(200);
                                                      }
               });
                                        }
                    
                    
                    });
                 
               
             
            }else{
               res.json(501);
            }
       
        
     });
       
     
  
});

function generatepassword()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      
     return text
}
router.get('/getSession',ensureAuthenticated,function(req,res) {
    
   
});

function ensureAuthenticated(req,res,next){
   console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
       next();
     
  } else {
    res.json(501);
  }
}










module.exports =router;

