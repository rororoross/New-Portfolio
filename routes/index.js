var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/my-work', function(req, res, next) {
  res.render('my-work', { title: 'My Work' });
});

	router.get('/work-2', function(req, res, next) {
	  res.render('work-2', { title: 'More of my work' });

});

module.exports = router;