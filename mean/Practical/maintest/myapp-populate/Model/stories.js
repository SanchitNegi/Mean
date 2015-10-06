var mongoose=require('./db');
var storySchema =mongoose.Schema({
  _creator : { type: Number,ref: 'Persons'},
  title    : String,
  fans     : [{ type: Number,ref: 'Persons' }]
});

var Story  = mongoose.model('Stories',storySchema);

//module.exports=Persont;
module.exports=Story;