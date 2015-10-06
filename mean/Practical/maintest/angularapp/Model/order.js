var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Order = new Schema({
  
    product_id:{type:Number,ref:'categories'},
    sub_id:{type:Number,ref:'categories'},
    user_id:{type:Number,ref:'users'}
   
},
{
      collection: 'orders'
    }
);
//Order.methods.findSimilarTypes = function (cb) {
//  return this.model('Animal').find({ type: this.type }, cb);
//}


module.exports = mongoose.model('orders', Order);
