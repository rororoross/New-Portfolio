var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/my-work', function(req, res, next) {
  setTimeout((function() {res.render('my-work')}), 620);
});

	router.get('/work-2', function(req, res, next) {
	 setTimeout((function() {res.render('work-2')}), 840);
});

router.get('/web', function(req, res, next) {
	 res.render('web');
});

module.exports = router;