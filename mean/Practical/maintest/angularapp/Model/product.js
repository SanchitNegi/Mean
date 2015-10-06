var mongoose=require('./db');


var productSchema = new mongoose.Schema({
  sku:Number,
  title: String,
  body:   String,
  description:String,
  manufacture_details: [{ manufacture_details: String, release_date: Date }],
  shipping_details:{weight: Number, width: Number ,height:Number,depth:Number},
  quantity: Number,
  pricing: {
    price: Number
  },
  categories:[
    {type: String,ref:'categories'}
  ]
});


var Products = mongoose.model('products',productSchema);
module.exports=Products;
