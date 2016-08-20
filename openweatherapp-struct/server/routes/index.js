var express = require('express');
var mongoose = require('mongoose');
var bodyParser= require('body-parser');
var router = express.Router();
var wSchema = require("./../models/model.js");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/userinfo');
var db = mongoose.connection;

db.once('open',function(){
  console.log("inside connection");
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  var ws = new wSchema();
  ws.degree = req.body.deg;
  ws.description = req.body.description;
  ws.humidity =req.body.humidity;
  ws.lat=req.body.lat;
  ws.lon=req.body.lon;
  ws.pressure =req.body.pressure;
  ws.speed =req.body.speed;
  ws.sunrise=req.body.sunrise;
  ws.sunset=req.body.sunset;
  ws.name=req.body.name;
  ws.save(function(err,succ){
    if(err)
    {
      res.send({response:err});
    }
    else {
      res.send({response:"data saved successfully"});
    }
  });
});
module.exports = router;
