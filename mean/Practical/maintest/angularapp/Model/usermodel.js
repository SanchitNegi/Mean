var mongoose=require('./db');
var passportLocalMongoose = require('passport-local-mongoose');

var User = new mongoose.Schema({
    salutation:String,
    first_name:String,
    last_name:String,
    email:String,
    phone_number:Number,
    password: String,
    image:String
}
);

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', User);
