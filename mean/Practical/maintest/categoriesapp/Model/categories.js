var mongoose=require('./db');
var categorySchema =new mongoose.Schema({
  _id     : Number,
  name    : String,

 
});


var Category = mongoose.model('Categories',categorySchema);
module.exports=Category;
