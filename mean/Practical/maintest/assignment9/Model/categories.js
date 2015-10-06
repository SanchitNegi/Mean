var mongoose=require('./db');
//var categorySchema =new mongoose.Schema({
//  _id     : Number,
//  name    : String,
//  sub:[{name:String,price:Number}]
//
// 
//});
var categorySchema =new mongoose.Schema({
  _id     : Number,
  name    : String,
  parent_id:Number,
  chiense:String,
  
 

 
});


var Category = mongoose.model('categories',categorySchema);
module.exports=Category;
