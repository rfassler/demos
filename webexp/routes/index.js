var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/persons', function(req, res, next) {
  var data = { 
  	persons: [
  		{ name: "Israel Israeli", age: 41},
  		{ name: "Moshe Moshe", age: 42}
  	] 
  };

  res.render('persons', data );
});

module.exports = router;
