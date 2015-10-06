var mongoose=require('./db');
var subcatSchema =mongoose.Schema({
  
  title    : String,
  quantity :Number,
  category_id : {type: Number,ref: 'Categories'},
});

var Story  = mongoose.model('subcategories',subcatSchema);

//module.exports=Persont;
module.exports=Story;