var mongoose = require('mongoose');
var db=mongoose.connect('mongodb://localhost/sanchit');
module.exports=db;