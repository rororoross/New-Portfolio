var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/my-work', function(req, res, next) {
  setTimeout((function() {res.render('my-work')}), 500);
});

router.get('/web', function(req, res, next) {
	setTimeout((function() {res.render('web')}), 250);
});

router.get('/mobile', function(req, res, next) {
	res.render('mobile');
});

router.get('/about-me', function(req, res, next) {
	res.render('about-me');
});

router.get('/get-in-touch', function(req, res, next) {
	res.render('get-in-touch');
});

router.get('/animations', function(req, res, next) {
	res.render('animations');
});

router.get('/bluemix', function(req, res, next) {
	setTimeout((function() {res.render('bluemix')}), 330);
});

router.get('/blrt', function(req, res, next) {
	res.render('blrt');
});

router.get('/nfl', function(req, res, next) {
	res.render('nfl');
});

module.exports = router;
