var mongoose = require('mongoose')
  ,Schema = mongoose.Schema;
var db=mongoose.connect('mongodb://localhost/assignment');
module.exports=db;