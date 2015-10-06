function ensureAuthenticated(req,res,next){
   console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
       next();
     
  } else {
    res.json(501);
  }
}


exports.ensureAuthenticated=ensureAuthenticated;