var mongoose=require('./db');
//var stories=require('./stories');
var personSchema =mongoose.Schema({
  _id     : Number,
  name    : String,
  age     : Number,
  stories : [{ type: mongoose.Schema.ObjectId, ref:'Stories' }]
});

//var storySchema =mongoose.Schema({
//  _creator : { type: Number,ref: 'Persont' },
//  title    : String,
//  fans     : [{ type: Number,ref: 'Persont' }]
//});

//var Story  = mongoose.model('Stories', storySchema);
var Person = mongoose.model('Persons',personSchema);
module.exports=Person;
//module.exports=Story;

//exports.Story=Story;
//exports.Person=Person;