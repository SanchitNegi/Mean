var mongoose = require('mongoose')
  ,Schema = mongoose.Schema;
var db=mongoose.connect('mongodb://localhost/sanchit');
module.exports=db;