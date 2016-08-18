var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BearSchema=new Schema({
  fromname:String,
  date:String,
  subject:String
});
module.exports= mongoose.model('userinfo1',BearSchema, 'userinfo1');
