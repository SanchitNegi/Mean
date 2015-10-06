var mongoose=require('./db');
var passportLocalMongoose = require('passport-local-mongoose');

var User = new mongoose.Schema({
    _id:Number,
    username: String,
    password: String,
    status:Number,
    role_id:Number,
    profile:[{name:String,place:String}]
},
{
      collection: 'users'
    }
);

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', User);
