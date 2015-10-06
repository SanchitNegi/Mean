var mongoose=require('./db');
//var UserSchema = new  mongoose.Schema({
//_id:Number,
//first_name: String,
//last_name: String,
//email: String,
//password:String,
//age:Number,
//lastModified:Date,
//});
var UserSchema = new  mongoose.Schema({

seq:Number
});

var countermodel=mongoose.model('counters',UserSchema);

module.exports=countermodel;