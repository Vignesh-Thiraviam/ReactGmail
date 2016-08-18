var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var bear = require('./../models/bear.js');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/userinfo');
var db = mongoose.connection;

db.once('open',function(){
  console.log("inside connection");
});



/* GET users listing. */
router.post('/', function(req, res, next) {
  var br = new bear();
  br.fromname =req.body.frominfo;
  br.date=req.body.date;
  br.subject=req.body.subject;
  br.save(function(err,succ){
    if(err)
    {
      res.send({response:err});
    }
    else {
      res.send({response:"data saved successfully"});
    }


  });

});

router.get('/', function(req, res, next) {
  console.log("Oru valia inside server get");
  bear.find(function(err, data) {
     if (err)
         res.send(err);
     res.json(data);
 });
});

router.delete('/', function(req, res, next) {
  console.log("Oru valia inside server delete");
  bear.remove({
			_id: req.body.id
		}, function(err, bear) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
});

router.put('/', function(req, res, next) {
  console.log("Oru valia inside server get");
  bear.findById(req.body.id, function(err, bear) {

			if (err)
				res.send(err);

			bear.subject = req.body.subject;
			bear.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'Bear updated!' });
			});

		});
});


module.exports = router;
