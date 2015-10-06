var mongoose=require('./db');
var UserSchema = new  mongoose.Schema({
_id:Number,
first_name: String,
last_name: String,
email: String,
password:String,
age:Number,
});

var usermodel=mongoose.model('users',UserSchema);
module.exports=usermodel;