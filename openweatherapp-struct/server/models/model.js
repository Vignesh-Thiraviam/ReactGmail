var mongoose = require('mongoose');

var weatherSchema = mongoose.Schema(
  {
    degree : String ,
    description : String ,
    humidity : String,
    lat : String ,
    lon : String ,
    pressure : String ,
    speed : String ,
    sunrise : String ,
    sunset : String,
    name : String
  }
)
module.exports = mongoose.model("wSchema", weatherSchema);
