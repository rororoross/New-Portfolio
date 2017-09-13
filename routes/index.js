var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/my-work/', function(req, res, next) {
  setTimeout((function() {res.render('my-work/')}), 320);
});

router.get('/my-work/web/', function(req, res, next) {
	setTimeout((function() {res.render('my-work/web/')}), 320);
});

router.get('/my-work/web/web-container-service', function(req, res, next) {
	setTimeout((function() {res.render('my-work/web/web-container-service')}), 320);
});

router.get('/my-work/web/web-get-started', function(req, res, next) {
	setTimeout((function() {res.render('my-work/web/web-get-started')}), 320);
});

router.get('/my-work/web/web-framer', function(req, res, next) {
	setTimeout((function() {res.render('my-work/web/web-framer')}), 320);
});

router.get('/my-work/web/web-node', function(req, res, next) {
	setTimeout((function() {res.render('my-work/web/web-node')}), 320);
});

router.get('/my-work/web/web-pipeline', function(req, res, next) {
	setTimeout((function() {res.render('my-work/web/web-pipeline')}), 320);
});

router.get('/my-work/mobile', function(req, res, next) {
	setTimeout((function() {res.render('my-work/mobile/')}), 320);
});

router.get('/my-work/mobile/mobile-prototype', function(req, res, next) {
	setTimeout((function() {res.render('my-work/mobile/mobile-prototype')}), 320);
});

router.get('/my-work/mobile/framer-prototype', function(req, res, next) {
	setTimeout((function() {res.render('my-work/mobile/framer-prototype')}), 320);
});

router.get('/about-me', function(req, res, next) {
  res.render('about-me');
});

router.get('/get-in-touch', function(req, res, next) {
	res.render('get-in-touch');
});

router.get('/my-work/animations', function(req, res, next) {
	setTimeout((function() {res.render('my-work/animations/')}), 320);
});

router.get('/my-work/animations/animation-get-started', function(req, res, next) {
	setTimeout((function() {res.render('my-work/animations/animation-get-started')}), 330);
});

router.get('/my-work/animations/animation-login', function(req, res, next) {
	setTimeout((function() {res.render('my-work/animations/animation-login')}), 250);
});

router.get('/my-work/animations/animation-chatbot', function(req, res, next) {
	setTimeout((function() {res.render('my-work/animations/animation-chatbot')}), 250);
});


module.exports = router;
